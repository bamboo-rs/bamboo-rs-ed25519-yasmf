(function() {var implementors = {};
implementors["arrayvec"] = [{"text":"impl&lt;T, const CAP:&nbsp;usize&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"arrayvec/struct.ArrayVec.html\" title=\"struct arrayvec::ArrayVec\">ArrayVec</a>&lt;T, CAP&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>,&nbsp;</span>","synthetic":false,"types":["arrayvec::arrayvec::ArrayVec"]},{"text":"impl&lt;const CAP:&nbsp;usize&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"arrayvec/struct.ArrayString.html\" title=\"struct arrayvec::ArrayString\">ArrayString</a>&lt;CAP&gt;","synthetic":false,"types":["arrayvec::array_string::ArrayString"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"arrayvec/struct.CapacityError.html\" title=\"struct arrayvec::CapacityError\">CapacityError</a>&lt;T&gt;","synthetic":false,"types":["arrayvec::errors::CapacityError"]}];
implementors["byteorder"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"enum\" href=\"byteorder/enum.BigEndian.html\" title=\"enum byteorder::BigEndian\">BigEndian</a>","synthetic":false,"types":["byteorder::BigEndian"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"enum\" href=\"byteorder/enum.LittleEndian.html\" title=\"enum byteorder::LittleEndian\">LittleEndian</a>","synthetic":false,"types":["byteorder::LittleEndian"]}];
implementors["crossbeam_epoch"] = [{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"crossbeam_epoch/trait.Pointable.html\" title=\"trait crossbeam_epoch::Pointable\">Pointable</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"crossbeam_epoch/struct.Shared.html\" title=\"struct crossbeam_epoch::Shared\">Shared</a>&lt;'_, T&gt;","synthetic":false,"types":["crossbeam_epoch::atomic::Shared"]}];
implementors["either"] = [{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>, R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt;","synthetic":false,"types":["either::Either"]}];
implementors["generic_array"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":["generic_array::GenericArray"]}];
implementors["proc_macro2"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"proc_macro2/struct.Ident.html\" title=\"struct proc_macro2::Ident\">Ident</a>","synthetic":false,"types":["proc_macro2::Ident"]}];
implementors["serde_bytes"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"serde_bytes/struct.Bytes.html\" title=\"struct serde_bytes::Bytes\">Bytes</a>","synthetic":false,"types":["serde_bytes::bytes::Bytes"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"serde_bytes/struct.ByteBuf.html\" title=\"struct serde_bytes::ByteBuf\">ByteBuf</a>","synthetic":false,"types":["serde_bytes::bytebuf::ByteBuf"]}];
implementors["syn"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"syn/struct.Lifetime.html\" title=\"struct syn::Lifetime\">Lifetime</a>","synthetic":false,"types":["syn::lifetime::Lifetime"]}];
implementors["typenum"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>","synthetic":false,"types":["typenum::bit::B0"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>","synthetic":false,"types":["typenum::bit::B1"]},{"text":"impl&lt;U:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;U&gt;","synthetic":false,"types":["typenum::int::PInt"]},{"text":"impl&lt;U:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;U&gt;","synthetic":false,"types":["typenum::int::NInt"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"typenum/int/struct.Z0.html\" title=\"struct typenum::int::Z0\">Z0</a>","synthetic":false,"types":["typenum::int::Z0"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"typenum/uint/struct.UTerm.html\" title=\"struct typenum::uint::UTerm\">UTerm</a>","synthetic":false,"types":["typenum::uint::UTerm"]},{"text":"impl&lt;U:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>, B:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;U, B&gt;","synthetic":false,"types":["typenum::uint::UInt"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"typenum/array/struct.ATerm.html\" title=\"struct typenum::array::ATerm\">ATerm</a>","synthetic":false,"types":["typenum::array::ATerm"]},{"text":"impl&lt;V:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>, A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"typenum/array/struct.TArr.html\" title=\"struct typenum::array::TArr\">TArr</a>&lt;V, A&gt;","synthetic":false,"types":["typenum::array::TArr"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"typenum/struct.Greater.html\" title=\"struct typenum::Greater\">Greater</a>","synthetic":false,"types":["typenum::Greater"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"typenum/struct.Less.html\" title=\"struct typenum::Less\">Less</a>","synthetic":false,"types":["typenum::Less"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"typenum/struct.Equal.html\" title=\"struct typenum::Equal\">Equal</a>","synthetic":false,"types":["typenum::Equal"]}];
implementors["varu64"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"enum\" href=\"varu64/nb/enum.DecodeError.html\" title=\"enum varu64::nb::DecodeError\">DecodeError</a>","synthetic":false,"types":["varu64::nb::DecodeError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"enum\" href=\"varu64/nb/enum.DecodeLimitError.html\" title=\"enum varu64::nb::DecodeLimitError\">DecodeLimitError</a>","synthetic":false,"types":["varu64::nb::DecodeLimitError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"enum\" href=\"varu64/enum.DecodeError.html\" title=\"enum varu64::DecodeError\">DecodeError</a>","synthetic":false,"types":["varu64::DecodeError"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()