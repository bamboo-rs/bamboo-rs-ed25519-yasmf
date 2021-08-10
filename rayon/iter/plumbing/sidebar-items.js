initSidebarItems({"fn":[["bridge","This helper function is used to “connect” a parallel iterator to a consumer. It will convert the `par_iter` into a producer P and then pull items from P and feed them to `consumer`, splitting and creating parallel threads as needed."],["bridge_producer_consumer","This helper function is used to “connect” a producer and a consumer. You may prefer to call `bridge`, which wraps this function. This function will draw items from `producer` and feed them to `consumer`, splitting and creating parallel tasks when needed."],["bridge_unindexed","A variant of `bridge_producer_consumer` where the producer is an unindexed producer."]],"trait":[["Consumer","A consumer is effectively a generalized “fold” operation, and in fact each consumer will eventually be converted into a `Folder`. What makes a consumer special is that, like a `Producer`, it can be split into multiple consumers using the `split_at` method. When a consumer is split, it produces two consumers, as well as a reducer. The two consumers can be fed items independently, and when they are done the reducer is used to combine their two results into one. See the `plumbing` README for further details."],["Folder","The `Folder` trait encapsulates the standard fold operation.  It can be fed many items using the `consume` method. At the end, once all items have been consumed, it can then be converted (using `complete`) into a final value."],["Producer","A `Producer` is effectively a “splittable `IntoIterator`”. That is, a producer is a value which can be converted into an iterator at any time: at that point, it simply produces items on demand, like any iterator. But what makes a `Producer` special is that, before we convert to an iterator, we can also split it at a particular point using the `split_at` method. This will yield up two producers, one producing the items before that point, and one producing the items after that point (these two producers can then independently be split further, or be converted into iterators). In Rayon, this splitting is used to divide between threads. See the `plumbing` README for further details."],["ProducerCallback","The `ProducerCallback` trait is a kind of generic closure, analogous to `FnOnce`. See the corresponding section in the plumbing README for more details."],["Reducer","The reducer is the final step of a `Consumer` – after a consumer has been split into two parts, and each of those parts has been fully processed, we are left with two results. The reducer is then used to combine those two results into one. See the `plumbing` README for further details."],["UnindexedConsumer","A stateless consumer can be freely copied. These consumers can be used like regular consumers, but they also support a `split_off_left` method that does not take an index to split, but simply splits at some arbitrary point (`for_each`, for example, produces an unindexed consumer)."],["UnindexedProducer","A variant on `Producer` which does not know its exact length or cannot represent it in a `usize`. These producers act like ordinary producers except that they cannot be told to split at a particular point. Instead, you just ask them to split ‘somewhere’."]]});