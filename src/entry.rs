use super::hex_serde::{cow_from_hex, hex_from_cow};
use snafu::{ResultExt, Snafu};
use std::borrow::Cow;
use std::io::{Error as IoError, Write};
use varu64::{
    decode as varu64_decode, encode_write as varu64_encode_write, DecodeError as varu64DecodeError,
};

use ssb_crypto::{verify_detached, PublicKey, Signature as SsbSignature};

use super::signature::{Error as SigError, Signature};
use super::yamf_hash::{Error as HashError, YamfHash};
use super::yamf_signatory::{Error as SignatoryError, YamfSignatory};

#[derive(Debug, Snafu)]
pub enum Error {
    //All the ways encoding an entry can fail
    #[snafu(display("Error when encoding is_end_of_feed: {}", source))]
    EncodeIsEndOfFeedError { source: IoError },
    #[snafu(display("Error when encoding payload hash: {}", source))]
    EncodePayloadHashError { source: HashError },
    #[snafu(display("Error when encoding payload size: {}", source))]
    EncodePayloadSizeError { source: IoError },
    #[snafu(display("Error when encoding author pub key: {}", source))]
    EncodeAuthorError { source: SignatoryError },
    #[snafu(display("Error when encoding sequence number: {}", source))]
    EncodeSeqError { source: IoError },
    #[snafu(display("Error when encoding backlink: {}", source))]
    EncodeBacklinkError { source: HashError },
    #[snafu(display("Error when encoding lipmaa link: {}", source))]
    EncodeLipmaaError { source: HashError },
    #[snafu(display("Error when encoding signature of entry. {}", source))]
    EncodeSigError { source: SigError },
    #[snafu(display("Error when encoding entry with seq 0 that has backlinks or lipmaalinks"))]
    EncodeEntryHasBacklinksWhenSeqZero,

    //All the ways decoding an entry can fail
    #[snafu(display("Error when decoding is_end_of_feed: {}", source))]
    DecodeIsEndOfFeedError { source: IoError },
    #[snafu(display("Error when decoding payload hash: {}", source))]
    DecodePayloadHashError { source: HashError },
    #[snafu(display("Error when decoding payload size: {}", source))]
    DecodePayloadSizeError { source: varu64DecodeError },
    #[snafu(display("Error when decoding author pub key: {}", source))]
    DecodeAuthorError { source: SignatoryError },
    #[snafu(display("Error when decoding sequence number: {}", source))]
    DecodeSeqError { source: varu64DecodeError },
    #[snafu(display("Error when decoding backlink: {}", source))]
    DecodeBacklinkError { source: HashError },
    #[snafu(display("Error when decoding lipmaa link: {}", source))]
    DecodeLipmaaError { source: HashError },
    #[snafu(display("Error when decoding signature of entry. {}", source))]
    DecodeSigError { source: SigError },

    #[snafu(display("Error when decoding, input had length 0"))]
    DecodeInputIsLengthZero,
}

pub type Result<T, E = Error> = std::result::Result<T, E>;

#[derive(Serialize, Deserialize, Debug, Eq, PartialEq)]
pub struct Entry<'a> {
    #[serde(rename = "isEndOfFeed")]
    pub is_end_of_feed: bool,
    #[serde(rename = "payloadHash")]
    pub payload_hash: YamfHash<'a>,
    #[serde(rename = "payloadSize")]
    pub payload_size: u64,
    pub author: YamfSignatory<'a>,
    #[serde(rename = "sequenceNumber")]
    pub seq_num: u64,
    #[serde(rename = "backLink")]
    pub backlink: Option<YamfHash<'a>>,
    #[serde(rename = "lipmaaLink")]
    pub lipmaa_link: Option<YamfHash<'a>>,
    #[serde(rename = "signature")]
    pub sig: Option<Signature<'a>>,
}

#[derive(Serialize, Deserialize)]
pub struct EntryBytes<'a>(
    #[serde(deserialize_with = "cow_from_hex", serialize_with = "hex_from_cow")] Cow<'a, [u8]>,
);

impl<'a> Entry<'a> {
    pub fn encode(&self) -> EntryBytes {
        let mut buff = Vec::new();
        self.encode_write(&mut buff).unwrap();
        EntryBytes(Cow::Owned(buff))
    }
    pub fn encode_write<W: Write>(&self, mut w: W) -> Result<()> {
        let mut is_end_of_feed_byte = [0];
        if self.is_end_of_feed {
            is_end_of_feed_byte[0] = 1;
        }
        w.write_all(&is_end_of_feed_byte[..])
            .context(EncodeIsEndOfFeedError)?;

        self.payload_hash
            .encode_write(&mut w)
            .context(EncodePayloadHashError)?;

        varu64_encode_write(self.payload_size, &mut w).context(EncodePayloadSizeError)?;
        self.author
            .encode_write(&mut w)
            .context(EncodeAuthorError)?;

        varu64_encode_write(self.seq_num, &mut w).context(EncodeSeqError)?;

        match (self.seq_num, &self.backlink, &self.lipmaa_link) {
            (n, Some(ref backlink), Some(ref lipmaa_link)) if n > 1 => {
                backlink.encode_write(&mut w).context(EncodeBacklinkError)?;
                lipmaa_link.encode_write(&mut w).context(EncodeLipmaaError)
            }
            (n, Some(_), Some(_)) if n < 1 => Err(Error::EncodeEntryHasBacklinksWhenSeqZero),
            _ => Ok(()),
        }?;

        if let Some(ref sig) = self.sig {
            sig.encode_write(&mut w).context(EncodeSigError)?;
        }

        Ok(())
    }

    pub fn decode(bytes: &'a [u8]) -> Result<Entry<'a>, Error> {
        if bytes.len() == 0 {
            return Err(Error::DecodeInputIsLengthZero);
        }
        let is_end_of_feed = bytes[0] == 1;

        let (payload_hash, remaining_bytes) =
            YamfHash::decode(&bytes[1..]).context(DecodePayloadHashError)?;

        let (payload_size, remaining_bytes) = varu64_decode(remaining_bytes)
            .map_err(|(err, _)| err)
            .context(DecodePayloadSizeError)?;

        let (author, remaining_bytes) =
            YamfSignatory::decode(remaining_bytes).context(DecodeAuthorError)?;
        let (seq_num, remaining_bytes) = varu64_decode(remaining_bytes)
            .map_err(|(err, _)| err)
            .context(DecodeSeqError)?;

        let (backlink, lipmaa_link, remaining_bytes) = match seq_num {
            1 => (None, None, remaining_bytes),
            _ => {
                let (backlink, remaining_bytes) =
                    YamfHash::decode(remaining_bytes).context(DecodeBacklinkError)?;
                let (lipmaa_link, remaining_bytes) =
                    YamfHash::decode(remaining_bytes).context(DecodeLipmaaError)?;
                (Some(backlink), Some(lipmaa_link), remaining_bytes)
            }
        };

        let (sig, _) = Signature::decode(remaining_bytes).context(DecodeSigError)?;

        Ok(Entry {
            is_end_of_feed,
            payload_hash,
            payload_size,
            author,
            seq_num,
            backlink,
            lipmaa_link,
            sig: Some(sig),
        })
    }

    pub fn verify_signature(&mut self) -> bool {
        //Pluck off the signature before we encode it
        let sig = self.sig.take();

        let ssb_sig = SsbSignature::from_slice(sig.as_ref().unwrap().0.as_ref()).unwrap();

        let mut buff = Vec::new();
        self.encode_write(&mut buff).unwrap();

        let result = match self.author {
            YamfSignatory::Ed25519(ref author, _) => {
                let pub_key = PublicKey::from_slice(author.as_ref()).unwrap();
                verify_detached(&ssb_sig, &buff, &pub_key)
            }
        };

        // Put the signature back on
        self.sig = sig;

        result
    }
}

#[cfg(test)]
mod tests {
    use super::{Entry, Signature, YamfHash, YamfSignatory};
    use crate::{EntryStore, Log, MemoryEntryStore};
    use ssb_crypto::{generate_longterm_keypair, init};
    use varu64::encode_write as varu64_encode_write;

    #[test]
    fn encode_decode_entry() {
        let backlink_bytes = [0xAA; 64];
        let backlink = YamfHash::Blake2b(backlink_bytes[..].into());
        let payload_hash_bytes = [0xAB; 64];
        let payload_hash = YamfHash::Blake2b(payload_hash_bytes[..].into());
        let lipmaa_link_bytes = [0xAC; 64];
        let lipmaa_link = YamfHash::Blake2b(lipmaa_link_bytes[..].into());
        let payload_size = 512;
        let seq_num = 2;
        let sig_bytes = [0xDD; 128];
        let sig = Signature(sig_bytes[..].into());
        let author_bytes = [0xEE; 32];
        let author = YamfSignatory::Ed25519((&author_bytes[..]).into(), None);

        let mut entry_vec = Vec::new();

        entry_vec.push(1u8); // end of feed is true

        payload_hash.encode_write(&mut entry_vec).unwrap();
        varu64_encode_write(payload_size, &mut entry_vec).unwrap();
        author.encode_write(&mut entry_vec).unwrap();
        varu64_encode_write(seq_num, &mut entry_vec).unwrap();
        backlink.encode_write(&mut entry_vec).unwrap();
        lipmaa_link.encode_write(&mut entry_vec).unwrap();
        sig.encode_write(&mut entry_vec).unwrap();

        let entry = Entry::decode(&entry_vec).unwrap();

        match entry.payload_hash {
            YamfHash::Blake2b(ref hash) => {
                assert_eq!(hash.as_ref(), &payload_hash_bytes[..]);
            }
        }

        match entry.backlink {
            Some(YamfHash::Blake2b(ref hash)) => {
                assert_eq!(hash.as_ref(), &backlink_bytes[..]);
            }
            _ => panic!(),
        }
        match entry.lipmaa_link {
            Some(YamfHash::Blake2b(ref hash)) => {
                assert_eq!(hash.as_ref(), &lipmaa_link_bytes[..]);
            }
            _ => panic!(),
        }

        match entry.sig {
            Some(Signature(ref sig)) => {
                assert_eq!(sig.as_ref(), &sig_bytes[..]);
            }
            _ => panic!(),
        }

        match entry.author {
            YamfSignatory::Ed25519(ref auth, None) => {
                assert_eq!(auth.as_ref(), &author_bytes[..]);
            }
            _ => panic!(),
        }

        let mut encoded = Vec::new();

        entry.encode_write(&mut encoded).unwrap();

        assert_eq!(encoded, entry_vec);
    }

    #[test]
    fn serde_entry() {
        init();

        let (pub_key, secret_key) = generate_longterm_keypair();
        let mut log = Log::new(MemoryEntryStore::new(), pub_key, Some(secret_key));
        let payload = "hello bamboo!";
        log.publish(payload.as_bytes(), false).unwrap();

        let entry_bytes = log.store.get_entry_ref(1).unwrap();

        let entry = Entry::decode(entry_bytes).unwrap();

        let string = serde_json::to_string(&entry).unwrap();
        let parsed: Entry = serde_json::from_str(&string).unwrap();

        assert_eq!(parsed, entry);
    }
}
