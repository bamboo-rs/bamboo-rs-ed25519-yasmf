use crate::signature::error::Error as SigError;
use snafu::Snafu;
use yasmf_hash::error::Error as YasmfHashError;

#[derive(Debug, Snafu)]
#[snafu(visibility = "pub(super)")]
pub enum Error {
    #[snafu(display("Could not decode payload hash {}", source))]
    DecodePayloadHashError { source: YasmfHashError },
    #[snafu(display("Could not decode payload size, error with varu64 encoding"))]
    DecodePayloadSizeError,
    #[snafu(display("Could not decode log_id, error with varu64 encoding"))]
    DecodeLogIdError,
    #[snafu(display("Could not decode author public key from bytes"))]
    DecodeAuthorError,
    #[snafu(display("Could not decode entry sequence number, error with varu64 encoding"))]
    DecodeSeqError,
    #[snafu(display("Entry sequence must be larger than 0 but was {}", seq_num))]
    DecodeSeqIsZero { seq_num: u64 },
    #[snafu(display("Could not decode backlink yamf hash: {}", source))]
    DecodeBacklinkError { source: YasmfHashError },
    #[snafu(display("Could not decode lipmaa link yamf hash {}", source))]
    DecodeLipmaaError { source: YasmfHashError },
    #[snafu(display("Could not decode signature: {}", source))]
    DecodeSigError { source: SigError },
    #[snafu(display("Bytes to decode had length of 0"))]
    DecodeInputIsLengthZero,
}

pub type Result<T, E = Error> = core::result::Result<T, E>;
