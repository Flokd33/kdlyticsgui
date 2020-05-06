goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__42317){
var vec__42318 = p__42317;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42318,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42318,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__42326 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42326,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42326,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42326,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__42349 = arguments.length;
switch (G__42349) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__42379_42454 = clojure.data.equality_partition;
var G__42380_42455 = "null";
var G__42381_42456 = ((function (G__42379_42454,G__42380_42455){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__42379_42454,G__42380_42455))
;
goog.object.set(G__42379_42454,G__42380_42455,G__42381_42456);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__42387_42457 = clojure.data.equality_partition;
var G__42388_42458 = "string";
var G__42389_42459 = ((function (G__42387_42457,G__42388_42458){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__42387_42457,G__42388_42458))
;
goog.object.set(G__42387_42457,G__42388_42458,G__42389_42459);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__42390_42460 = clojure.data.equality_partition;
var G__42391_42461 = "number";
var G__42392_42462 = ((function (G__42390_42460,G__42391_42461){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__42390_42460,G__42391_42461))
;
goog.object.set(G__42390_42460,G__42391_42461,G__42392_42462);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__42396_42463 = clojure.data.equality_partition;
var G__42397_42464 = "array";
var G__42398_42465 = ((function (G__42396_42463,G__42397_42464){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__42396_42463,G__42397_42464))
;
goog.object.set(G__42396_42463,G__42397_42464,G__42398_42465);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__42407_42466 = clojure.data.equality_partition;
var G__42408_42467 = "function";
var G__42409_42468 = ((function (G__42407_42466,G__42408_42467){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__42407_42466,G__42408_42467))
;
goog.object.set(G__42407_42466,G__42408_42467,G__42409_42468);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__42410_42469 = clojure.data.equality_partition;
var G__42411_42470 = "boolean";
var G__42412_42471 = ((function (G__42410_42469,G__42411_42470){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__42410_42469,G__42411_42470))
;
goog.object.set(G__42410_42469,G__42411_42470,G__42412_42471);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__42415_42472 = clojure.data.equality_partition;
var G__42416_42473 = "_";
var G__42417_42474 = ((function (G__42415_42472,G__42416_42473){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__42415_42472,G__42416_42473))
;
goog.object.set(G__42415_42472,G__42416_42473,G__42417_42474);
goog.object.set(clojure.data.Diff,"null",true);

var G__42429_42475 = clojure.data.diff_similar;
var G__42430_42476 = "null";
var G__42431_42477 = ((function (G__42429_42475,G__42430_42476){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__42429_42475,G__42430_42476))
;
goog.object.set(G__42429_42475,G__42430_42476,G__42431_42477);

goog.object.set(clojure.data.Diff,"string",true);

var G__42432_42478 = clojure.data.diff_similar;
var G__42433_42479 = "string";
var G__42434_42480 = ((function (G__42432_42478,G__42433_42479){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__42432_42478,G__42433_42479))
;
goog.object.set(G__42432_42478,G__42433_42479,G__42434_42480);

goog.object.set(clojure.data.Diff,"number",true);

var G__42435_42481 = clojure.data.diff_similar;
var G__42436_42482 = "number";
var G__42437_42483 = ((function (G__42435_42481,G__42436_42482){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__42435_42481,G__42436_42482))
;
goog.object.set(G__42435_42481,G__42436_42482,G__42437_42483);

goog.object.set(clojure.data.Diff,"array",true);

var G__42438_42484 = clojure.data.diff_similar;
var G__42439_42485 = "array";
var G__42440_42486 = ((function (G__42438_42484,G__42439_42485){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__42438_42484,G__42439_42485))
;
goog.object.set(G__42438_42484,G__42439_42485,G__42440_42486);

goog.object.set(clojure.data.Diff,"function",true);

var G__42441_42487 = clojure.data.diff_similar;
var G__42442_42488 = "function";
var G__42443_42489 = ((function (G__42441_42487,G__42442_42488){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__42441_42487,G__42442_42488))
;
goog.object.set(G__42441_42487,G__42442_42488,G__42443_42489);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__42444_42490 = clojure.data.diff_similar;
var G__42445_42491 = "boolean";
var G__42446_42492 = ((function (G__42444_42490,G__42445_42491){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__42444_42490,G__42445_42491))
;
goog.object.set(G__42444_42490,G__42445_42491,G__42446_42492);

goog.object.set(clojure.data.Diff,"_",true);

var G__42447_42493 = clojure.data.diff_similar;
var G__42448_42494 = "_";
var G__42449_42495 = ((function (G__42447_42493,G__42448_42494){
return (function (a,b){
var fexpr__42451 = (function (){var G__42452 = clojure.data.equality_partition(a);
var G__42452__$1 = (((G__42452 instanceof cljs.core.Keyword))?G__42452.fqn:null);
switch (G__42452__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42452__$1)].join('')));

}
})();
return (fexpr__42451.cljs$core$IFn$_invoke$arity$2 ? fexpr__42451.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__42451.call(null,a,b));
});})(G__42447_42493,G__42448_42494))
;
goog.object.set(G__42447_42493,G__42448_42494,G__42449_42495);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
