(function() {var implementors = {};
implementors["arrayvec"] = [{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;str&gt; for <a class=\"struct\" href=\"arrayvec/struct.ArrayString.html\" title=\"struct arrayvec::ArrayString\">ArrayString</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"arrayvec/trait.Array.html\" title=\"trait arrayvec::Array\">Array</a>&lt;Item = u8&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,&nbsp;</span>","synthetic":false,"types":["arrayvec::array_string::ArrayString"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"arrayvec/trait.Array.html\" title=\"trait arrayvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[&lt;A as <a class=\"trait\" href=\"arrayvec/trait.Array.html\" title=\"trait arrayvec::Array\">Array</a>&gt;::<a class=\"type\" href=\"arrayvec/trait.Array.html#associatedtype.Item\" title=\"type arrayvec::Array::Item\">Item</a>]&gt; for <a class=\"struct\" href=\"arrayvec/struct.ArrayVec.html\" title=\"struct arrayvec::ArrayVec\">ArrayVec</a>&lt;A&gt;","synthetic":false,"types":["arrayvec::ArrayVec"]}];
implementors["blake2b_simd"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[u8]&gt; for <a class=\"struct\" href=\"blake2b_simd/struct.Hash.html\" title=\"struct blake2b_simd::Hash\">Hash</a>","synthetic":false,"types":["blake2b_simd::Hash"]}];
implementors["crossbeam_epoch"] = [{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"crossbeam_epoch/trait.Pointable.html\" title=\"trait crossbeam_epoch::Pointable\">Pointable</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T&gt; for <a class=\"struct\" href=\"crossbeam_epoch/struct.Owned.html\" title=\"struct crossbeam_epoch::Owned\">Owned</a>&lt;T&gt;","synthetic":false,"types":["crossbeam_epoch::atomic::Owned"]}];
implementors["ed25519"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"ed25519/struct.Signature.html\" title=\"struct ed25519::Signature\">Signature</a>","synthetic":false,"types":["ed25519::Signature"]}];
implementors["ed25519_dalek"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"ed25519_dalek/struct.PublicKey.html\" title=\"struct ed25519_dalek::PublicKey\">PublicKey</a>","synthetic":false,"types":["ed25519_dalek::public::PublicKey"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"ed25519_dalek/struct.SecretKey.html\" title=\"struct ed25519_dalek::SecretKey\">SecretKey</a>","synthetic":false,"types":["ed25519_dalek::secret::SecretKey"]}];
implementors["either"] = [{"text":"impl&lt;L, R, Target&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;Target&gt; for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;Target&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;Target&gt;,&nbsp;</span>","synthetic":false,"types":["either::Either"]},{"text":"impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;str&gt; for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;str&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;str&gt;,&nbsp;</span>","synthetic":false,"types":["either::Either"]},{"text":"impl&lt;L, R, Target&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[Target]&gt; for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[Target]&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[Target]&gt;,&nbsp;</span>","synthetic":false,"types":["either::Either"]}];
implementors["generic_array"] = [{"text":"impl&lt;T, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T]&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":["generic_array::GenericArray"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T; 1]&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, <a class=\"type\" href=\"typenum/generated/consts/type.U1.html\" title=\"type typenum::generated::consts::U1\">U1</a>&gt;","synthetic":false,"types":["generic_array::GenericArray"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T; 2]&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, <a class=\"type\" href=\"typenum/generated/consts/type.U2.html\" title=\"type typenum::generated::consts::U2\">U2</a>&gt;","synthetic":false,"types":["generic_array::GenericArray"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T; 3]&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, <a class=\"type\" href=\"typenum/generated/consts/type.U3.html\" title=\"type typenum::generated::consts::U3\">U3</a>&gt;","synthetic":false,"types":["generic_array::GenericArray"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T; 4]&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, <a class=\"type\" href=\"typenum/generated/consts/type.U4.html\" title=\"type typenum::generated::consts::U4\">U4</a>&gt;","synthetic":false,"types":["generic_array::GenericArray"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T; 5]&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, <a class=\"type\" href=\"typenum/generated/consts/type.U5.html\" title=\"type typenum::generated::consts::U5\">U5</a>&gt;","synthetic":false,"types":["generic_array::GenericArray"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T; 6]&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, <a class=\"type\" href=\"typenum/generated/consts/type.U6.html\" title=\"type typenum::generated::consts::U6\">U6</a>&gt;","synthetic":false,"types":["generic_array::GenericArray"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T; 7]&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, <a class=\"type\" href=\"typenum/generated/consts/type.U7.html\" title=\"type typenum::generated::consts::U7\">U7</a>&gt;","synthetic":false,"types":["generic_array::GenericArray"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T; 8]&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, <a class=\"type\" href=\"typenum/generated/consts/type.U8.html\" title=\"type typenum::generated::consts::U8\">U8</a>&gt;","synthetic":false,"types":["generic_array::GenericArray"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T; 9]&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, <a class=\"type\" href=\"typenum/generated/consts/type.U9.html\" title=\"type typenum::generated::consts::U9\">U9</a>&gt;","synthetic":false,"types":["generic_array::GenericArray"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T; 10]&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, <a class=\"type\" href=\"typenum/generated/consts/type.U10.html\" title=\"type typenum::generated::consts::U10\">U10</a>&gt;","synthetic":false,"types":["generic_array::GenericArray"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T; 11]&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, <a class=\"type\" href=\"typenum/generated/consts/type.U11.html\" title=\"type typenum::generated::consts::U11\">U11</a>&gt;","synthetic":false,"types":["generic_array::GenericArray"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T; 12]&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, <a class=\"type\" href=\"typenum/generated/consts/type.U12.html\" title=\"type typenum::generated::consts::U12\">U12</a>&gt;","synthetic":false,"types":["generic_array::GenericArray"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T; 13]&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, <a class=\"type\" href=\"typenum/generated/consts/type.U13.html\" title=\"type typenum::generated::consts::U13\">U13</a>&gt;","synthetic":false,"types":["generic_array::GenericArray"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T; 14]&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, <a class=\"type\" href=\"typenum/generated/consts/type.U14.html\" title=\"type typenum::generated::consts::U14\">U14</a>&gt;","synthetic":false,"types":["generic_array::GenericArray"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T; 15]&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, <a class=\"type\" href=\"typenum/generated/consts/type.U15.html\" title=\"type typenum::generated::consts::U15\">U15</a>&gt;","synthetic":false,"types":["generic_array::GenericArray"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T; 16]&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, <a class=\"type\" href=\"typenum/generated/consts/type.U16.html\" title=\"type typenum::generated::consts::U16\">U16</a>&gt;","synthetic":false,"types":["generic_array::GenericArray"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T; 17]&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, <a class=\"type\" href=\"typenum/generated/consts/type.U17.html\" title=\"type typenum::generated::consts::U17\">U17</a>&gt;","synthetic":false,"types":["generic_array::GenericArray"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T; 18]&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, <a class=\"type\" href=\"typenum/generated/consts/type.U18.html\" title=\"type typenum::generated::consts::U18\">U18</a>&gt;","synthetic":false,"types":["generic_array::GenericArray"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T; 19]&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, <a class=\"type\" href=\"typenum/generated/consts/type.U19.html\" title=\"type typenum::generated::consts::U19\">U19</a>&gt;","synthetic":false,"types":["generic_array::GenericArray"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T; 20]&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, <a class=\"type\" href=\"typenum/generated/consts/type.U20.html\" title=\"type typenum::generated::consts::U20\">U20</a>&gt;","synthetic":false,"types":["generic_array::GenericArray"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T; 21]&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, <a class=\"type\" href=\"typenum/generated/consts/type.U21.html\" title=\"type typenum::generated::consts::U21\">U21</a>&gt;","synthetic":false,"types":["generic_array::GenericArray"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T; 22]&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, <a class=\"type\" href=\"typenum/generated/consts/type.U22.html\" title=\"type typenum::generated::consts::U22\">U22</a>&gt;","synthetic":false,"types":["generic_array::GenericArray"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T; 23]&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, <a class=\"type\" href=\"typenum/generated/consts/type.U23.html\" title=\"type typenum::generated::consts::U23\">U23</a>&gt;","synthetic":false,"types":["generic_array::GenericArray"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T; 24]&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, <a class=\"type\" href=\"typenum/generated/consts/type.U24.html\" title=\"type typenum::generated::consts::U24\">U24</a>&gt;","synthetic":false,"types":["generic_array::GenericArray"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T; 25]&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, <a class=\"type\" href=\"typenum/generated/consts/type.U25.html\" title=\"type typenum::generated::consts::U25\">U25</a>&gt;","synthetic":false,"types":["generic_array::GenericArray"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T; 26]&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, <a class=\"type\" href=\"typenum/generated/consts/type.U26.html\" title=\"type typenum::generated::consts::U26\">U26</a>&gt;","synthetic":false,"types":["generic_array::GenericArray"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T; 27]&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, <a class=\"type\" href=\"typenum/generated/consts/type.U27.html\" title=\"type typenum::generated::consts::U27\">U27</a>&gt;","synthetic":false,"types":["generic_array::GenericArray"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T; 28]&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, <a class=\"type\" href=\"typenum/generated/consts/type.U28.html\" title=\"type typenum::generated::consts::U28\">U28</a>&gt;","synthetic":false,"types":["generic_array::GenericArray"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T; 29]&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, <a class=\"type\" href=\"typenum/generated/consts/type.U29.html\" title=\"type typenum::generated::consts::U29\">U29</a>&gt;","synthetic":false,"types":["generic_array::GenericArray"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T; 30]&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, <a class=\"type\" href=\"typenum/generated/consts/type.U30.html\" title=\"type typenum::generated::consts::U30\">U30</a>&gt;","synthetic":false,"types":["generic_array::GenericArray"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T; 31]&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, <a class=\"type\" href=\"typenum/generated/consts/type.U31.html\" title=\"type typenum::generated::consts::U31\">U31</a>&gt;","synthetic":false,"types":["generic_array::GenericArray"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T; 32]&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, <a class=\"type\" href=\"typenum/generated/consts/type.U32.html\" title=\"type typenum::generated::consts::U32\">U32</a>&gt;","synthetic":false,"types":["generic_array::GenericArray"]}];
implementors["serde_bytes"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"serde_bytes/struct.Bytes.html\" title=\"struct serde_bytes::Bytes\">Bytes</a>","synthetic":false,"types":["serde_bytes::bytes::Bytes"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"serde_bytes/struct.ByteBuf.html\" title=\"struct serde_bytes::ByteBuf\">ByteBuf</a>","synthetic":false,"types":["serde_bytes::bytebuf::ByteBuf"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()