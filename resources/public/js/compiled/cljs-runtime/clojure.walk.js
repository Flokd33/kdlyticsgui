goog.provide('clojure.walk');
/**
 * Traverses form, an arbitrary data structure.  inner and outer are
 *   functions.  Applies inner to each element of form, building up a
 *   data structure of the same type, then applies outer to the result.
 *   Recognizes all Clojure data structures. Consumes seqs as with doall.
 */
clojure.walk.walk = (function clojure$walk$walk(inner,outer,form){
if(cljs.core.list_QMARK_(form)){
var G__29100 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__29100) : outer.call(null,G__29100));
} else {
if(cljs.core.map_entry_QMARK_(form)){
var G__29101 = (new cljs.core.MapEntry((function (){var G__29102 = cljs.core.key(form);
return (inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(G__29102) : inner.call(null,G__29102));
})(),(function (){var G__29103 = cljs.core.val(form);
return (inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(G__29103) : inner.call(null,G__29103));
})(),null));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__29101) : outer.call(null,G__29101));
} else {
if(cljs.core.seq_QMARK_(form)){
var G__29104 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__29104) : outer.call(null,G__29104));
} else {
if(cljs.core.record_QMARK_(form)){
var G__29106 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,x){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(x) : inner.call(null,x)));
}),form,form);
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__29106) : outer.call(null,G__29106));
} else {
if(cljs.core.coll_QMARK_(form)){
var G__29110 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(form),cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__29110) : outer.call(null,G__29110));
} else {
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(form) : outer.call(null,form));

}
}
}
}
}
});
/**
 * Performs a depth-first, post-order traversal of form.  Calls f on
 *   each sub-form, uses f's return value in place of the original.
 *   Recognizes all Clojure data structures. Consumes seqs as with doall.
 */
clojure.walk.postwalk = (function clojure$walk$postwalk(f,form){
return clojure.walk.walk(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.walk.postwalk,f),f,form);
});
/**
 * Like postwalk, but does pre-order traversal.
 */
clojure.walk.prewalk = (function clojure$walk$prewalk(f,form){
return clojure.walk.walk(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.walk.prewalk,f),cljs.core.identity,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(form) : f.call(null,form)));
});
/**
 * Recursively transforms all map keys from strings to keywords.
 */
clojure.walk.keywordize_keys = (function clojure$walk$keywordize_keys(m){
var f = (function (p__29138){
var vec__29139 = p__29138;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29139,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29139,(1),null);
if(typeof k === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),v], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
});
return clojure.walk.postwalk((function (x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,x));
} else {
return x;
}
}),m);
});
/**
 * Recursively transforms all map keys from keywords to strings.
 */
clojure.walk.stringify_keys = (function clojure$walk$stringify_keys(m){
var f = (function (p__29149){
var vec__29150 = p__29149;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29150,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29150,(1),null);
if((k instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(k),v], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
});
return clojure.walk.postwalk((function (x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,x));
} else {
return x;
}
}),m);
});
/**
 * Recursively transforms form by replacing keys in smap with their
 *   values.  Like clojure/replace but works on any data structure.  Does
 *   replacement at the root of the tree first.
 */
clojure.walk.prewalk_replace = (function clojure$walk$prewalk_replace(smap,form){
return clojure.walk.prewalk((function (x){
if(cljs.core.contains_QMARK_(smap,x)){
return (smap.cljs$core$IFn$_invoke$arity$1 ? smap.cljs$core$IFn$_invoke$arity$1(x) : smap.call(null,x));
} else {
return x;
}
}),form);
});
/**
 * Recursively transforms form by replacing keys in smap with their
 *   values.  Like clojure/replace but works on any data structure.  Does
 *   replacement at the leaves of the tree first.
 */
clojure.walk.postwalk_replace = (function clojure$walk$postwalk_replace(smap,form){
return clojure.walk.postwalk((function (x){
if(cljs.core.contains_QMARK_(smap,x)){
return (smap.cljs$core$IFn$_invoke$arity$1 ? smap.cljs$core$IFn$_invoke$arity$1(x) : smap.call(null,x));
} else {
return x;
}
}),form);
});

//# sourceMappingURL=clojure.walk.js.map
