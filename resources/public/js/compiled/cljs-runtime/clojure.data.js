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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__41843){
var vec__41844 = p__41843;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41844,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41844,(1),null);
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
var vec__41848 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41848,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41848,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41848,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__41992 = arguments.length;
switch (G__41992) {
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

(clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
}));

(clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
}));

(clojure.data.diff_associative.cljs$lang$maxFixedArity = 3);

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4214__auto__ = cljs.core.count(a);
var y__4215__auto__ = cljs.core.count(b);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
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

var clojure$data$EqualityPartition$equality_partition$dyn_42425 = (function (x){
var x__4428__auto__ = (((x == null))?null:x);
var m__4429__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4429__auto__.call(null,x));
} else {
var m__4426__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4426__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
});
/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
return clojure$data$EqualityPartition$equality_partition$dyn_42425(x);
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

var clojure$data$Diff$diff_similar$dyn_42428 = (function (a,b){
var x__4428__auto__ = (((a == null))?null:a);
var m__4429__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4429__auto__.call(null,a,b));
} else {
var m__4426__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4426__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
});
/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
return clojure$data$Diff$diff_similar$dyn_42428(a,b);
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__42160_42432 = clojure.data.equality_partition;
var G__42161_42433 = "null";
var G__42162_42434 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__42160_42432,G__42161_42433,G__42162_42434);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__42165_42436 = clojure.data.equality_partition;
var G__42166_42437 = "string";
var G__42167_42438 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__42165_42436,G__42166_42437,G__42167_42438);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__42172_42439 = clojure.data.equality_partition;
var G__42173_42440 = "number";
var G__42174_42441 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__42172_42439,G__42173_42440,G__42174_42441);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__42177_42442 = clojure.data.equality_partition;
var G__42178_42443 = "array";
var G__42179_42444 = (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});
goog.object.set(G__42177_42442,G__42178_42443,G__42179_42444);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__42184_42446 = clojure.data.equality_partition;
var G__42185_42447 = "function";
var G__42186_42448 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__42184_42446,G__42185_42447,G__42186_42448);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__42194_42449 = clojure.data.equality_partition;
var G__42195_42450 = "boolean";
var G__42196_42451 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__42194_42449,G__42195_42450,G__42196_42451);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__42197_42452 = clojure.data.equality_partition;
var G__42198_42453 = "_";
var G__42199_42454 = (function (x){
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
});
goog.object.set(G__42197_42452,G__42198_42453,G__42199_42454);
goog.object.set(clojure.data.Diff,"null",true);

var G__42203_42461 = clojure.data.diff_similar;
var G__42204_42462 = "null";
var G__42205_42463 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__42203_42461,G__42204_42462,G__42205_42463);

goog.object.set(clojure.data.Diff,"string",true);

var G__42246_42464 = clojure.data.diff_similar;
var G__42247_42466 = "string";
var G__42248_42467 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__42246_42464,G__42247_42466,G__42248_42467);

goog.object.set(clojure.data.Diff,"number",true);

var G__42277_42468 = clojure.data.diff_similar;
var G__42278_42469 = "number";
var G__42279_42470 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__42277_42468,G__42278_42469,G__42279_42470);

goog.object.set(clojure.data.Diff,"array",true);

var G__42298_42472 = clojure.data.diff_similar;
var G__42299_42473 = "array";
var G__42300_42474 = (function (a,b){
return clojure.data.diff_sequential(a,b);
});
goog.object.set(G__42298_42472,G__42299_42473,G__42300_42474);

goog.object.set(clojure.data.Diff,"function",true);

var G__42302_42475 = clojure.data.diff_similar;
var G__42303_42476 = "function";
var G__42304_42477 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__42302_42475,G__42303_42476,G__42304_42477);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__42309_42482 = clojure.data.diff_similar;
var G__42310_42483 = "boolean";
var G__42311_42484 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__42309_42482,G__42310_42483,G__42311_42484);

goog.object.set(clojure.data.Diff,"_",true);

var G__42316_42486 = clojure.data.diff_similar;
var G__42317_42487 = "_";
var G__42318_42488 = (function (a,b){
var fexpr__42321 = (function (){var G__42322 = clojure.data.equality_partition(a);
var G__42322__$1 = (((G__42322 instanceof cljs.core.Keyword))?G__42322.fqn:null);
switch (G__42322__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42322__$1)].join('')));

}
})();
return (fexpr__42321.cljs$core$IFn$_invoke$arity$2 ? fexpr__42321.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__42321.call(null,a,b));
});
goog.object.set(G__42316_42486,G__42317_42487,G__42318_42488);
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
