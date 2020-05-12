goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__47057){
var map__47058 = p__47057;
var map__47058__$1 = (((((!((map__47058 == null))))?(((((map__47058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47058):map__47058);
var m = map__47058__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47058__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47058__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__47064_47271 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47065_47272 = null;
var count__47066_47273 = (0);
var i__47067_47274 = (0);
while(true){
if((i__47067_47274 < count__47066_47273)){
var f_47275 = chunk__47065_47272.cljs$core$IIndexed$_nth$arity$2(null,i__47067_47274);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_47275], 0));


var G__47276 = seq__47064_47271;
var G__47277 = chunk__47065_47272;
var G__47278 = count__47066_47273;
var G__47279 = (i__47067_47274 + (1));
seq__47064_47271 = G__47276;
chunk__47065_47272 = G__47277;
count__47066_47273 = G__47278;
i__47067_47274 = G__47279;
continue;
} else {
var temp__5735__auto___47282 = cljs.core.seq(seq__47064_47271);
if(temp__5735__auto___47282){
var seq__47064_47283__$1 = temp__5735__auto___47282;
if(cljs.core.chunked_seq_QMARK_(seq__47064_47283__$1)){
var c__4556__auto___47286 = cljs.core.chunk_first(seq__47064_47283__$1);
var G__47287 = cljs.core.chunk_rest(seq__47064_47283__$1);
var G__47288 = c__4556__auto___47286;
var G__47289 = cljs.core.count(c__4556__auto___47286);
var G__47290 = (0);
seq__47064_47271 = G__47287;
chunk__47065_47272 = G__47288;
count__47066_47273 = G__47289;
i__47067_47274 = G__47290;
continue;
} else {
var f_47291 = cljs.core.first(seq__47064_47283__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_47291], 0));


var G__47292 = cljs.core.next(seq__47064_47283__$1);
var G__47293 = null;
var G__47294 = (0);
var G__47295 = (0);
seq__47064_47271 = G__47292;
chunk__47065_47272 = G__47293;
count__47066_47273 = G__47294;
i__47067_47274 = G__47295;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_47296 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_47296], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_47296)))?cljs.core.second(arglists_47296):arglists_47296)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__47069_47297 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47070_47298 = null;
var count__47071_47299 = (0);
var i__47072_47300 = (0);
while(true){
if((i__47072_47300 < count__47071_47299)){
var vec__47100_47301 = chunk__47070_47298.cljs$core$IIndexed$_nth$arity$2(null,i__47072_47300);
var name_47302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47100_47301,(0),null);
var map__47103_47303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47100_47301,(1),null);
var map__47103_47304__$1 = (((((!((map__47103_47303 == null))))?(((((map__47103_47303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47103_47303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47103_47303):map__47103_47303);
var doc_47305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47103_47304__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47103_47304__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_47302], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_47306], 0));

if(cljs.core.truth_(doc_47305)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_47305], 0));
} else {
}


var G__47307 = seq__47069_47297;
var G__47308 = chunk__47070_47298;
var G__47309 = count__47071_47299;
var G__47310 = (i__47072_47300 + (1));
seq__47069_47297 = G__47307;
chunk__47070_47298 = G__47308;
count__47071_47299 = G__47309;
i__47072_47300 = G__47310;
continue;
} else {
var temp__5735__auto___47311 = cljs.core.seq(seq__47069_47297);
if(temp__5735__auto___47311){
var seq__47069_47312__$1 = temp__5735__auto___47311;
if(cljs.core.chunked_seq_QMARK_(seq__47069_47312__$1)){
var c__4556__auto___47313 = cljs.core.chunk_first(seq__47069_47312__$1);
var G__47314 = cljs.core.chunk_rest(seq__47069_47312__$1);
var G__47315 = c__4556__auto___47313;
var G__47316 = cljs.core.count(c__4556__auto___47313);
var G__47317 = (0);
seq__47069_47297 = G__47314;
chunk__47070_47298 = G__47315;
count__47071_47299 = G__47316;
i__47072_47300 = G__47317;
continue;
} else {
var vec__47105_47318 = cljs.core.first(seq__47069_47312__$1);
var name_47319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47105_47318,(0),null);
var map__47108_47320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47105_47318,(1),null);
var map__47108_47321__$1 = (((((!((map__47108_47320 == null))))?(((((map__47108_47320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47108_47320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47108_47320):map__47108_47320);
var doc_47322 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47108_47321__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47323 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47108_47321__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_47319], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_47323], 0));

if(cljs.core.truth_(doc_47322)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_47322], 0));
} else {
}


var G__47324 = cljs.core.next(seq__47069_47312__$1);
var G__47325 = null;
var G__47326 = (0);
var G__47327 = (0);
seq__47069_47297 = G__47324;
chunk__47070_47298 = G__47325;
count__47071_47299 = G__47326;
i__47072_47300 = G__47327;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__47117 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__47118 = null;
var count__47119 = (0);
var i__47120 = (0);
while(true){
if((i__47120 < count__47119)){
var role = chunk__47118.cljs$core$IIndexed$_nth$arity$2(null,i__47120);
var temp__5735__auto___47329__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___47329__$1)){
var spec_47330 = temp__5735__auto___47329__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_47330)], 0));
} else {
}


var G__47331 = seq__47117;
var G__47332 = chunk__47118;
var G__47333 = count__47119;
var G__47334 = (i__47120 + (1));
seq__47117 = G__47331;
chunk__47118 = G__47332;
count__47119 = G__47333;
i__47120 = G__47334;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__47117);
if(temp__5735__auto____$1){
var seq__47117__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__47117__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47117__$1);
var G__47335 = cljs.core.chunk_rest(seq__47117__$1);
var G__47336 = c__4556__auto__;
var G__47337 = cljs.core.count(c__4556__auto__);
var G__47338 = (0);
seq__47117 = G__47335;
chunk__47118 = G__47336;
count__47119 = G__47337;
i__47120 = G__47338;
continue;
} else {
var role = cljs.core.first(seq__47117__$1);
var temp__5735__auto___47339__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___47339__$2)){
var spec_47340 = temp__5735__auto___47339__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_47340)], 0));
} else {
}


var G__47341 = cljs.core.next(seq__47117__$1);
var G__47342 = null;
var G__47343 = (0);
var G__47344 = (0);
seq__47117 = G__47341;
chunk__47118 = G__47342;
count__47119 = G__47343;
i__47120 = G__47344;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__47345 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__47346 = cljs.core.ex_cause(t);
via = G__47345;
t = G__47346;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__47186 = datafied_throwable;
var map__47186__$1 = (((((!((map__47186 == null))))?(((((map__47186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47186):map__47186);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47186__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47186__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47186__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__47187 = cljs.core.last(via);
var map__47187__$1 = (((((!((map__47187 == null))))?(((((map__47187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47187):map__47187);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47187__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47187__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47187__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__47188 = data;
var map__47188__$1 = (((((!((map__47188 == null))))?(((((map__47188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47188):map__47188);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47188__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47188__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47188__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__47189 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__47189__$1 = (((((!((map__47189 == null))))?(((((map__47189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47189):map__47189);
var top_data = map__47189__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47189__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__47202 = phase;
var G__47202__$1 = (((G__47202 instanceof cljs.core.Keyword))?G__47202.fqn:null);
switch (G__47202__$1) {
case "read-source":
var map__47203 = data;
var map__47203__$1 = (((((!((map__47203 == null))))?(((((map__47203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47203):map__47203);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47203__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47203__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__47206 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__47206__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47206,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__47206);
var G__47206__$2 = (cljs.core.truth_((function (){var fexpr__47207 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__47207.cljs$core$IFn$_invoke$arity$1 ? fexpr__47207.cljs$core$IFn$_invoke$arity$1(source) : fexpr__47207.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__47206__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__47206__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47206__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__47206__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__47208 = top_data;
var G__47208__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47208,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__47208);
var G__47208__$2 = (cljs.core.truth_((function (){var fexpr__47210 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__47210.cljs$core$IFn$_invoke$arity$1 ? fexpr__47210.cljs$core$IFn$_invoke$arity$1(source) : fexpr__47210.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__47208__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__47208__$1);
var G__47208__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47208__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__47208__$2);
var G__47208__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47208__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__47208__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47208__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__47208__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__47211 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47211,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47211,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47211,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47211,(3),null);
var G__47214 = top_data;
var G__47214__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47214,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__47214);
var G__47214__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47214__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__47214__$1);
var G__47214__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47214__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__47214__$2);
var G__47214__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47214__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__47214__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47214__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__47214__$4;
}

break;
case "execution":
var vec__47215 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47215,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47215,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47215,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47215,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__47181_SHARP_){
var or__4126__auto__ = (p1__47181_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__47220 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__47220.cljs$core$IFn$_invoke$arity$1 ? fexpr__47220.cljs$core$IFn$_invoke$arity$1(p1__47181_SHARP_) : fexpr__47220.call(null,p1__47181_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__47221 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__47221__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47221,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__47221);
var G__47221__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47221__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__47221__$1);
var G__47221__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47221__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__47221__$2);
var G__47221__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47221__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__47221__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47221__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__47221__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47202__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__47226){
var map__47227 = p__47226;
var map__47227__$1 = (((((!((map__47227 == null))))?(((((map__47227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47227):map__47227);
var triage_data = map__47227__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47227__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47227__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47227__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47227__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47227__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47227__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47227__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47227__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__47230 = phase;
var G__47230__$1 = (((G__47230 instanceof cljs.core.Keyword))?G__47230.fqn:null);
switch (G__47230__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__47231 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__47232 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__47233 = loc;
var G__47234 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__47235_47355 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__47236_47356 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__47237_47357 = true;
var _STAR_print_fn_STAR__temp_val__47238_47358 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__47237_47357);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__47238_47358);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47223_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47223_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__47236_47356);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__47235_47355);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__47231,G__47232,G__47233,G__47234) : format.call(null,G__47231,G__47232,G__47233,G__47234));

break;
case "macroexpansion":
var G__47239 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__47240 = cause_type;
var G__47241 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__47242 = loc;
var G__47243 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__47239,G__47240,G__47241,G__47242,G__47243) : format.call(null,G__47239,G__47240,G__47241,G__47242,G__47243));

break;
case "compile-syntax-check":
var G__47244 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__47245 = cause_type;
var G__47246 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__47247 = loc;
var G__47248 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__47244,G__47245,G__47246,G__47247,G__47248) : format.call(null,G__47244,G__47245,G__47246,G__47247,G__47248));

break;
case "compilation":
var G__47249 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__47250 = cause_type;
var G__47251 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__47252 = loc;
var G__47253 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__47249,G__47250,G__47251,G__47252,G__47253) : format.call(null,G__47249,G__47250,G__47251,G__47252,G__47253));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__47254 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__47255 = symbol;
var G__47256 = loc;
var G__47257 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__47258_47359 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__47259_47360 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__47260_47361 = true;
var _STAR_print_fn_STAR__temp_val__47261_47362 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__47260_47361);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__47261_47362);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47224_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47224_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__47259_47360);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__47258_47359);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__47254,G__47255,G__47256,G__47257) : format.call(null,G__47254,G__47255,G__47256,G__47257));
} else {
var G__47262 = "Execution error%s at %s(%s).\n%s\n";
var G__47263 = cause_type;
var G__47264 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__47265 = loc;
var G__47266 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__47262,G__47263,G__47264,G__47265,G__47266) : format.call(null,G__47262,G__47263,G__47264,G__47265,G__47266));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47230__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
