use super::error::*;
use super::Log;
use crate::entry_store::{EntryStore};
use crate::yamf_hash::YamfHash;
use crate::Entry;
use lipmaa_link::lipmaa;
use snafu::{ensure, ResultExt};

impl<Store: EntryStore> Log<Store> {
    /// Add a valid message to the Log.
    ///
    /// Typically you would use this when you have an entry published by some other author and you
    /// want to add it to your store. This method does a bunch of checking to make sure the entry
    /// is legit.
    ///
    /// Caveat:
    /// - the lipmaa link that this message references must already exist in the Log. That means if you
    /// are doing partial replication, you must sort your messages by sequence number and add them
    /// from oldest to newest.
    pub fn add(&mut self, entry_bytes: &[u8], payload: Option<&[u8]>) -> Result<()> {

        // Decode the entry that we want to add.
        let entry = Entry::decode(entry_bytes).context(AddEntryDecodeFailed)?;

        // If we have the payload, check that its hash and length match what is encoded in the
        // entry.
        if let Some(payload) = payload {
            let payload_hash = YamfHash::new_blake2b(payload);
            ensure!(
                payload_hash == entry.payload_hash,
                AddEntryPayloadHashDidNotMatch
            );
            ensure!(
                payload.len() as u64 == entry.payload_size,
                AddEntryPayloadLengthDidNotMatch
            );
        }

        let lipmaa_seq = match lipmaa(entry.seq_num) {
            0 => 1,
            n => n
        };

        // Get the lipmaa entry.
        let lipmaa = self
            .store
            .get_entry_ref(lipmaa_seq);

        match (lipmaa, entry.lipmaa_link, entry.seq_num) {
            // Happy path 1: seq is larger than one and we can find the lipmaa link in the store
            (Ok(Some(lipmaa)), Some(ref entry_lipmaa), seq_num) if seq_num > 1 => {
                // Hash the lipmaa entry
                let lipmaa_hash = YamfHash::new_blake2b(lipmaa);
                // Make sure the lipmaa entry hash matches what's in the entry.
                ensure!(lipmaa_hash == *entry_lipmaa, AddEntryLipmaaHashDidNotMatch);
                // Verify the author of the entry is the same as the author in the lipmaa link entry
                ensure!(
                    entry.author
                        == Entry::decode(lipmaa)
                            .expect("Error decoding entry from store, maybe the store is corrupt")
                            .author,
                    AddEntryAuthorDidNotMatchLipmaaEntry
                );
            }
            // Happy path 2: this is the first entry, so we won't find a lipmaa link in the store
            (Ok(None), None, seq_num) if seq_num == 1 => {

            }
            (_, None, seq_num) if seq_num > 1 => {
                // The entry did not have a lipmaa link encoded when it should
                ensure!(false, AddEntryNoLipmaalinkOnEntry)
            }
            (_, _, _) => {
                ensure!(false, AddEntryNoLipmaalinkInStore)
            }
        };

        // Try and get the backlink entry. If we have it, hash it and check it is correct.
        let backlink = self
            .store
            .get_entry_ref(entry.seq_num - 1);
            

        match (backlink, entry.backlink, entry.seq_num) {
            (Ok(Some(backlink)), Some(ref entry_backlink), seq_num) if seq_num > 1 => {
                let backlink_hash = YamfHash::new_blake2b(backlink);
                ensure!(
                    backlink_hash == *entry_backlink,
                    AddEntryBacklinkHashDidNotMatch
                )
            }
            (_, None, seq_num) if seq_num == 1 => {},
            (_, _, _) => {
                ensure!(false, AddEntryBacklinkHashDidNotMatch)
            }
        }

        // Get the last entry in the log and make sure it's not an end of feed message.
        // Only do this check if the store isn't empty.
        if self.store.get_last_seq() > 0 {
            let last_entry_bytes = self
                .store
                .get_last_entry_ref()
                .context(AddEntryGetLastEntryError)?
                .expect("couldn't get last entry, is the store corrupt?");

            let last_entry = Entry::decode(last_entry_bytes).expect("Unable to decode last entry in store, is it corrupt?");
            ensure!(!last_entry.is_end_of_feed, AddEntryToFeedThatHasEnded)
        }
        
        // Verify the signature.
        let entry_bytes_to_verify = entry_bytes.to_owned();
        let mut entry_to_verify = Entry::decode(&entry_bytes_to_verify).unwrap(); 
        ensure!(entry_to_verify.verify_signature(), AddEntryWithInvalidSignature);

        //Ok, store it!
        self.store.add_entry(&entry_bytes, entry.seq_num).context(AppendFailed)
    }
}

#[cfg(test)]
mod tests {
    use std::borrow::Cow;
    use crate::log::{Error, Log};
    use crate::memory_entry_store::MemoryEntryStore;
    use crate::{EntryStore, Entry};
    use ssb_crypto::{generate_longterm_keypair, init, sign_detached, SecretKey};
    use crate::yamf_hash::YamfHash;
    use crate::yamf_signatory::YamfSignatory;
    use crate::signature::Signature;

    fn n_valid_entries(n: u64) -> Log<MemoryEntryStore> {
        init();

        let (pub_key, secret_key) = generate_longterm_keypair();
        let mut log = Log::new(MemoryEntryStore::new(), pub_key, Some(secret_key));

        (1..n)
            .into_iter()
            .for_each(|i| {
                let payload = format!("message number {}", i);
                log.publish(&payload.as_bytes(), false).unwrap();
            });

        log
    }

    #[test]
    fn add_checks_payload_is_correct_length(){
        let remote_log = n_valid_entries(3);

        let mut log: Log<MemoryEntryStore> = Log::new(MemoryEntryStore::new(), remote_log.public_key, None);

        let first_entry_bytes = remote_log.store.get_entry(1).unwrap().unwrap();
        let mut first_entry = Entry::decode(&first_entry_bytes).unwrap(); 
        first_entry.payload_size = 1; //Set an invalid payload length. Zero tolerance etc ;)

        let mut entry_bytes = Vec::new();
        first_entry.encode_write(&mut entry_bytes).unwrap(); 
        
        match log.add(&entry_bytes, Some(b"message number 1")) {
            Err(Error::AddEntryPayloadLengthDidNotMatch{backtrace: _}) => {},
            _ => panic!("Expected err")
        }
    } 

    #[test]
    fn add_checks_payload_is_correct_hash(){
        let remote_log = n_valid_entries(3);

        let mut log: Log<MemoryEntryStore> = Log::new(MemoryEntryStore::new(), remote_log.public_key, None);

        let first_entry = remote_log.store.get_entry(1).unwrap().unwrap();

        match log.add(&first_entry, Some(&[0,1])) {
            Err(Error::AddEntryPayloadHashDidNotMatch{backtrace: _}) => {},
            _ => panic!("Expected err")
        }
    } 

    #[test]
    fn add_checks_entry_not_after_end_of_feed(){
        let (pub_key, secret_key) = generate_longterm_keypair();
        let cloned_secret = SecretKey::from_slice(secret_key.as_ref()).unwrap();
        let mut remote_log = Log::new(MemoryEntryStore::new(), pub_key, Some(secret_key));

        let payload = format!("message number {}", 1);
        remote_log.publish(&payload.as_bytes(), true).unwrap();

        let first_entry = remote_log.store.get_entry_ref(1).unwrap().unwrap();

        let backlink = YamfHash::new_blake2b(first_entry);
        let lipmaa_link = YamfHash::new_blake2b(first_entry);

        let mut second_entry = Entry{
            is_end_of_feed: false,
            payload_hash: YamfHash::new_blake2b(&payload.as_bytes()),
            payload_size: payload.len() as u64,
            author: YamfSignatory::Ed25519(pub_key.as_ref().into(), None),
            seq_num: 2,
            backlink: Some(backlink),
            lipmaa_link: Some(lipmaa_link),
            sig: None
        };

        let mut second_entry_bytes = Vec::new();
        second_entry.encode_write(&mut second_entry_bytes).unwrap(); 

        let signature = sign_detached(&second_entry_bytes, &cloned_secret); 
        let signature = Signature(signature.as_ref().into());

        second_entry.sig = Some(signature);

        let mut second_entry_bytes = Vec::new();
        second_entry.encode_write(&mut second_entry_bytes).unwrap(); 

        let mut log: Log<MemoryEntryStore> = Log::new(MemoryEntryStore::new(), remote_log.public_key, None);

        log.add(&first_entry, None).unwrap();

        match log.add(&second_entry_bytes, None) {
            Err(Error::AddEntryToFeedThatHasEnded{backtrace: _}) => {},
            _ => panic!("Expected err")
        }
    } 

    #[test]
    fn add_needs_lipmaa_link_in_store(){
        let remote_log = n_valid_entries(3);

        let mut log: Log<MemoryEntryStore> = Log::new(MemoryEntryStore::new(), remote_log.public_key, None);

        let second_entry = remote_log.store.get_entry(2).unwrap().unwrap();

        match log.add(&second_entry, None) {
            Err(Error::AddEntryNoLipmaalinkInStore) => {},
            _ => panic!("Expected err")
        }
    } 

    #[test]
    fn add_needs_valid_signature(){
        let remote_log = n_valid_entries(3);

        let mut log: Log<MemoryEntryStore> = Log::new(MemoryEntryStore::new(), remote_log.public_key, None);

        let first_entry_bytes = remote_log.store.get_entry(1).unwrap().unwrap();
        let mut first_entry = Entry::decode(&first_entry_bytes).unwrap(); 

        first_entry.sig = match first_entry.sig {
            Some(Signature(mut bytes)) => {
                let mut_bytes = bytes.to_mut();
                mut_bytes[0] ^= mut_bytes[0];
                Some(Signature(Cow::Owned(mut_bytes.to_owned())))
            },
            link => link
        }; 

        let mut first_entry_bytes = Vec::new();
        first_entry.encode_write(&mut first_entry_bytes).unwrap();

        match log.add(&first_entry_bytes, None) {
            Err(Error::AddEntryWithInvalidSignature{backtrace: _}) => {},
            _ => panic!("Expected err")
        }
    } 

    #[test]
    fn add_checks_lipmaa_link_is_valid(){
        let remote_log = n_valid_entries(3);

        let mut log: Log<MemoryEntryStore> = Log::new(MemoryEntryStore::new(), remote_log.public_key, None);

        let first_entry_bytes = remote_log.store.get_entry(1).unwrap().unwrap();
        let second_entry_bytes = remote_log.store.get_entry(2).unwrap().unwrap();

        log.add(&first_entry_bytes, None).expect("error adding first entry, this is not normal");

        let mut second_entry = Entry::decode(&second_entry_bytes).unwrap(); 
        second_entry.lipmaa_link = match second_entry.lipmaa_link {
            Some(YamfHash::Blake2b(_)) => Some(YamfHash::new_blake2b(b"noooo")),
            link => link
        }; //set the lipmaa link to be zero 

        let mut entry_bytes = Vec::new();
        second_entry.encode_write(&mut entry_bytes).unwrap(); 
        
        match log.add(&entry_bytes, None) {
            Err(Error::AddEntryLipmaaHashDidNotMatch{backtrace: _}) => {},
            _ => panic!("Expected err")
        }
    } 

    #[test]
    fn add_checks_backlink_is_valid(){
        let remote_log = n_valid_entries(3);

        let mut log: Log<MemoryEntryStore> = Log::new(MemoryEntryStore::new(), remote_log.public_key, None);

        let first_entry_bytes = remote_log.store.get_entry(1).unwrap().unwrap();
        let second_entry_bytes = remote_log.store.get_entry(2).unwrap().unwrap();

        log.add(&first_entry_bytes, None).expect("error adding first entry, this is not normal");

        let mut second_entry = Entry::decode(&second_entry_bytes).unwrap(); 
        second_entry.backlink = match second_entry.backlink {
            Some(YamfHash::Blake2b(_)) => Some(YamfHash::new_blake2b(b"noooo")),
            link => link
        }; //set the lipmaa link to be zero 

        let mut entry_bytes = Vec::new();
        second_entry.encode_write(&mut entry_bytes).unwrap(); 
        
        match log.add(&entry_bytes, None) {
            Err(Error::AddEntryBacklinkHashDidNotMatch{backtrace: _}) => {},
            _ => panic!("Expected err")
        }
    } 
    // TODO, this is hard to test. 
    #[cfg(ignore_unused)]
    fn add_checks_lipmaa_link_is_present(){
        let remote_log = n_valid_entries(3);

        let mut log: Log<MemoryEntryStore> = Log::new(MemoryEntryStore::new(), remote_log.public_key, None);

        let first_entry_bytes = remote_log.store.get_entry(1).unwrap().unwrap();
        let second_entry_bytes = remote_log.store.get_entry(2).unwrap().unwrap();

        log.add(&first_entry_bytes, None).expect("error adding first entry, this is not normal");

        let mut second_entry = Entry::decode(&second_entry_bytes).unwrap(); 
        second_entry.lipmaa_link = None; //set the lipmaa link to be zero 

        let mut entry_bytes = Vec::new();
        second_entry.encode_write(&mut entry_bytes).unwrap(); 
        
        match log.add(&entry_bytes, None) {
            Err(Error::AddEntryNoLipmaalinkOnEntry) => {},
            _ => panic!("Expected err")
        }
    } 
}
