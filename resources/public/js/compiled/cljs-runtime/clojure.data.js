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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__41893){
var vec__41894 = p__41893;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41894,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41894,(1),null);
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
var vec__41897 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41897,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41897,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41897,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__41908 = arguments.length;
switch (G__41908) {
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

var clojure$data$EqualityPartition$equality_partition$dyn_42049 = (function (x){
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
return clojure$data$EqualityPartition$equality_partition$dyn_42049(x);
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

var clojure$data$Diff$diff_similar$dyn_42055 = (function (a,b){
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
return clojure$data$Diff$diff_similar$dyn_42055(a,b);
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__41934_42060 = clojure.data.equality_partition;
var G__41935_42061 = "null";
var G__41936_42062 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__41934_42060,G__41935_42061,G__41936_42062);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__41940_42071 = clojure.data.equality_partition;
var G__41941_42072 = "string";
var G__41942_42073 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__41940_42071,G__41941_42072,G__41942_42073);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__41945_42074 = clojure.data.equality_partition;
var G__41946_42075 = "number";
var G__41947_42076 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__41945_42074,G__41946_42075,G__41947_42076);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__41948_42077 = clojure.data.equality_partition;
var G__41949_42078 = "array";
var G__41950_42079 = (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});
goog.object.set(G__41948_42077,G__41949_42078,G__41950_42079);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__41955_42084 = clojure.data.equality_partition;
var G__41956_42085 = "function";
var G__41957_42086 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__41955_42084,G__41956_42085,G__41957_42086);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__41958_42087 = clojure.data.equality_partition;
var G__41959_42088 = "boolean";
var G__41960_42089 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__41958_42087,G__41959_42088,G__41960_42089);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__41963_42100 = clojure.data.equality_partition;
var G__41964_42101 = "_";
var G__41965_42102 = (function (x){
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
goog.object.set(G__41963_42100,G__41964_42101,G__41965_42102);
goog.object.set(clojure.data.Diff,"null",true);

var G__41976_42111 = clojure.data.diff_similar;
var G__41977_42112 = "null";
var G__41978_42113 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__41976_42111,G__41977_42112,G__41978_42113);

goog.object.set(clojure.data.Diff,"string",true);

var G__41981_42116 = clojure.data.diff_similar;
var G__41982_42117 = "string";
var G__41983_42118 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__41981_42116,G__41982_42117,G__41983_42118);

goog.object.set(clojure.data.Diff,"number",true);

var G__41984_42127 = clojure.data.diff_similar;
var G__41985_42128 = "number";
var G__41986_42129 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__41984_42127,G__41985_42128,G__41986_42129);

goog.object.set(clojure.data.Diff,"array",true);

var G__41988_42132 = clojure.data.diff_similar;
var G__41989_42133 = "array";
var G__41990_42134 = (function (a,b){
return clojure.data.diff_sequential(a,b);
});
goog.object.set(G__41988_42132,G__41989_42133,G__41990_42134);

goog.object.set(clojure.data.Diff,"function",true);

var G__41991_42137 = clojure.data.diff_similar;
var G__41992_42138 = "function";
var G__41993_42139 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__41991_42137,G__41992_42138,G__41993_42139);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__41994_42142 = clojure.data.diff_similar;
var G__41995_42143 = "boolean";
var G__41996_42144 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__41994_42142,G__41995_42143,G__41996_42144);

goog.object.set(clojure.data.Diff,"_",true);

var G__41997_42146 = clojure.data.diff_similar;
var G__41998_42147 = "_";
var G__41999_42148 = (function (a,b){
var fexpr__42004 = (function (){var G__42005 = clojure.data.equality_partition(a);
var G__42005__$1 = (((G__42005 instanceof cljs.core.Keyword))?G__42005.fqn:null);
switch (G__42005__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42005__$1)].join('')));

}
})();
return (fexpr__42004.cljs$core$IFn$_invoke$arity$2 ? fexpr__42004.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__42004.call(null,a,b));
});
goog.object.set(G__41997_42146,G__41998_42147,G__41999_42148);
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
