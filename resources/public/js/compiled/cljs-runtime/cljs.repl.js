goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__47054){
var map__47055 = p__47054;
var map__47055__$1 = (((((!((map__47055 == null))))?(((((map__47055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47055):map__47055);
var m = map__47055__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47055__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47055__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
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
var seq__47057_47168 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47058_47169 = null;
var count__47059_47170 = (0);
var i__47060_47171 = (0);
while(true){
if((i__47060_47171 < count__47059_47170)){
var f_47172 = chunk__47058_47169.cljs$core$IIndexed$_nth$arity$2(null,i__47060_47171);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_47172], 0));


var G__47173 = seq__47057_47168;
var G__47174 = chunk__47058_47169;
var G__47175 = count__47059_47170;
var G__47176 = (i__47060_47171 + (1));
seq__47057_47168 = G__47173;
chunk__47058_47169 = G__47174;
count__47059_47170 = G__47175;
i__47060_47171 = G__47176;
continue;
} else {
var temp__5735__auto___47177 = cljs.core.seq(seq__47057_47168);
if(temp__5735__auto___47177){
var seq__47057_47178__$1 = temp__5735__auto___47177;
if(cljs.core.chunked_seq_QMARK_(seq__47057_47178__$1)){
var c__4550__auto___47179 = cljs.core.chunk_first(seq__47057_47178__$1);
var G__47180 = cljs.core.chunk_rest(seq__47057_47178__$1);
var G__47181 = c__4550__auto___47179;
var G__47182 = cljs.core.count(c__4550__auto___47179);
var G__47183 = (0);
seq__47057_47168 = G__47180;
chunk__47058_47169 = G__47181;
count__47059_47170 = G__47182;
i__47060_47171 = G__47183;
continue;
} else {
var f_47184 = cljs.core.first(seq__47057_47178__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_47184], 0));


var G__47185 = cljs.core.next(seq__47057_47178__$1);
var G__47186 = null;
var G__47187 = (0);
var G__47188 = (0);
seq__47057_47168 = G__47185;
chunk__47058_47169 = G__47186;
count__47059_47170 = G__47187;
i__47060_47171 = G__47188;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_47189 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_47189], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_47189)))?cljs.core.second(arglists_47189):arglists_47189)], 0));
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
var seq__47061_47190 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47062_47191 = null;
var count__47063_47192 = (0);
var i__47064_47193 = (0);
while(true){
if((i__47064_47193 < count__47063_47192)){
var vec__47081_47194 = chunk__47062_47191.cljs$core$IIndexed$_nth$arity$2(null,i__47064_47193);
var name_47195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47081_47194,(0),null);
var map__47084_47196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47081_47194,(1),null);
var map__47084_47197__$1 = (((((!((map__47084_47196 == null))))?(((((map__47084_47196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47084_47196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47084_47196):map__47084_47196);
var doc_47198 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47084_47197__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47084_47197__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_47195], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_47199], 0));

if(cljs.core.truth_(doc_47198)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_47198], 0));
} else {
}


var G__47200 = seq__47061_47190;
var G__47201 = chunk__47062_47191;
var G__47202 = count__47063_47192;
var G__47203 = (i__47064_47193 + (1));
seq__47061_47190 = G__47200;
chunk__47062_47191 = G__47201;
count__47063_47192 = G__47202;
i__47064_47193 = G__47203;
continue;
} else {
var temp__5735__auto___47204 = cljs.core.seq(seq__47061_47190);
if(temp__5735__auto___47204){
var seq__47061_47205__$1 = temp__5735__auto___47204;
if(cljs.core.chunked_seq_QMARK_(seq__47061_47205__$1)){
var c__4550__auto___47206 = cljs.core.chunk_first(seq__47061_47205__$1);
var G__47210 = cljs.core.chunk_rest(seq__47061_47205__$1);
var G__47211 = c__4550__auto___47206;
var G__47212 = cljs.core.count(c__4550__auto___47206);
var G__47213 = (0);
seq__47061_47190 = G__47210;
chunk__47062_47191 = G__47211;
count__47063_47192 = G__47212;
i__47064_47193 = G__47213;
continue;
} else {
var vec__47087_47214 = cljs.core.first(seq__47061_47205__$1);
var name_47215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47087_47214,(0),null);
var map__47090_47216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47087_47214,(1),null);
var map__47090_47217__$1 = (((((!((map__47090_47216 == null))))?(((((map__47090_47216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47090_47216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47090_47216):map__47090_47216);
var doc_47218 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47090_47217__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47219 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47090_47217__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_47215], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_47219], 0));

if(cljs.core.truth_(doc_47218)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_47218], 0));
} else {
}


var G__47221 = cljs.core.next(seq__47061_47205__$1);
var G__47222 = null;
var G__47223 = (0);
var G__47224 = (0);
seq__47061_47190 = G__47221;
chunk__47062_47191 = G__47222;
count__47063_47192 = G__47223;
i__47064_47193 = G__47224;
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

var seq__47092 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__47093 = null;
var count__47094 = (0);
var i__47095 = (0);
while(true){
if((i__47095 < count__47094)){
var role = chunk__47093.cljs$core$IIndexed$_nth$arity$2(null,i__47095);
var temp__5735__auto___47227__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___47227__$1)){
var spec_47228 = temp__5735__auto___47227__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_47228)], 0));
} else {
}


var G__47229 = seq__47092;
var G__47230 = chunk__47093;
var G__47231 = count__47094;
var G__47232 = (i__47095 + (1));
seq__47092 = G__47229;
chunk__47093 = G__47230;
count__47094 = G__47231;
i__47095 = G__47232;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__47092);
if(temp__5735__auto____$1){
var seq__47092__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__47092__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__47092__$1);
var G__47233 = cljs.core.chunk_rest(seq__47092__$1);
var G__47234 = c__4550__auto__;
var G__47235 = cljs.core.count(c__4550__auto__);
var G__47236 = (0);
seq__47092 = G__47233;
chunk__47093 = G__47234;
count__47094 = G__47235;
i__47095 = G__47236;
continue;
} else {
var role = cljs.core.first(seq__47092__$1);
var temp__5735__auto___47237__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___47237__$2)){
var spec_47238 = temp__5735__auto___47237__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_47238)], 0));
} else {
}


var G__47242 = cljs.core.next(seq__47092__$1);
var G__47243 = null;
var G__47244 = (0);
var G__47245 = (0);
seq__47092 = G__47242;
chunk__47093 = G__47243;
count__47094 = G__47244;
i__47095 = G__47245;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
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
var G__47246 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__47247 = cljs.core.ex_cause(t);
via = G__47246;
t = G__47247;
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
var map__47100 = datafied_throwable;
var map__47100__$1 = (((((!((map__47100 == null))))?(((((map__47100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47100):map__47100);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47100__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47100__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47100__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__47101 = cljs.core.last(via);
var map__47101__$1 = (((((!((map__47101 == null))))?(((((map__47101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47101):map__47101);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47101__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47101__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47101__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__47102 = data;
var map__47102__$1 = (((((!((map__47102 == null))))?(((((map__47102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47102):map__47102);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47102__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47102__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47102__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__47103 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__47103__$1 = (((((!((map__47103 == null))))?(((((map__47103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47103):map__47103);
var top_data = map__47103__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47103__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__47108 = phase;
var G__47108__$1 = (((G__47108 instanceof cljs.core.Keyword))?G__47108.fqn:null);
switch (G__47108__$1) {
case "read-source":
var map__47109 = data;
var map__47109__$1 = (((((!((map__47109 == null))))?(((((map__47109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47109):map__47109);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47109__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47109__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__47111 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__47111__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47111,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__47111);
var G__47111__$2 = (cljs.core.truth_((function (){var fexpr__47112 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__47112.cljs$core$IFn$_invoke$arity$1 ? fexpr__47112.cljs$core$IFn$_invoke$arity$1(source) : fexpr__47112.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__47111__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__47111__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47111__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__47111__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__47113 = top_data;
var G__47113__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47113,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__47113);
var G__47113__$2 = (cljs.core.truth_((function (){var fexpr__47114 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__47114.cljs$core$IFn$_invoke$arity$1 ? fexpr__47114.cljs$core$IFn$_invoke$arity$1(source) : fexpr__47114.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__47113__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__47113__$1);
var G__47113__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47113__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__47113__$2);
var G__47113__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47113__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__47113__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47113__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__47113__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__47115 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47115,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47115,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47115,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47115,(3),null);
var G__47118 = top_data;
var G__47118__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47118,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__47118);
var G__47118__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47118__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__47118__$1);
var G__47118__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47118__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__47118__$2);
var G__47118__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47118__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__47118__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47118__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__47118__$4;
}

break;
case "execution":
var vec__47119 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47119,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47119,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47119,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47119,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__47119,source__$1,method,file,line,G__47108,G__47108__$1,map__47100,map__47100__$1,via,trace,phase,map__47101,map__47101__$1,type,message,data,map__47102,map__47102__$1,problems,fn,caller,map__47103,map__47103__$1,top_data,source){
return (function (p1__47099_SHARP_){
var or__4131__auto__ = (p1__47099_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__47123 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__47123.cljs$core$IFn$_invoke$arity$1 ? fexpr__47123.cljs$core$IFn$_invoke$arity$1(p1__47099_SHARP_) : fexpr__47123.call(null,p1__47099_SHARP_));
}
});})(vec__47119,source__$1,method,file,line,G__47108,G__47108__$1,map__47100,map__47100__$1,via,trace,phase,map__47101,map__47101__$1,type,message,data,map__47102,map__47102__$1,problems,fn,caller,map__47103,map__47103__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__47124 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__47124__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47124,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__47124);
var G__47124__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47124__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__47124__$1);
var G__47124__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47124__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__47124__$2);
var G__47124__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47124__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__47124__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47124__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__47124__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47108__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__47128){
var map__47129 = p__47128;
var map__47129__$1 = (((((!((map__47129 == null))))?(((((map__47129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47129):map__47129);
var triage_data = map__47129__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47129__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47129__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47129__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47129__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47129__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47129__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47129__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47129__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__47131 = phase;
var G__47131__$1 = (((G__47131 instanceof cljs.core.Keyword))?G__47131.fqn:null);
switch (G__47131__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__47132 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__47133 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__47134 = loc;
var G__47135 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__47136_47253 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__47137_47254 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__47138_47255 = true;
var _STAR_print_fn_STAR__temp_val__47139_47256 = ((function (_STAR_print_newline_STAR__orig_val__47136_47253,_STAR_print_fn_STAR__orig_val__47137_47254,_STAR_print_newline_STAR__temp_val__47138_47255,sb__4661__auto__,G__47132,G__47133,G__47134,G__47131,G__47131__$1,loc,class_name,simple_class,cause_type,format,map__47129,map__47129__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__47136_47253,_STAR_print_fn_STAR__orig_val__47137_47254,_STAR_print_newline_STAR__temp_val__47138_47255,sb__4661__auto__,G__47132,G__47133,G__47134,G__47131,G__47131__$1,loc,class_name,simple_class,cause_type,format,map__47129,map__47129__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__47138_47255;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__47139_47256;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__47136_47253,_STAR_print_fn_STAR__orig_val__47137_47254,_STAR_print_newline_STAR__temp_val__47138_47255,_STAR_print_fn_STAR__temp_val__47139_47256,sb__4661__auto__,G__47132,G__47133,G__47134,G__47131,G__47131__$1,loc,class_name,simple_class,cause_type,format,map__47129,map__47129__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__47136_47253,_STAR_print_fn_STAR__orig_val__47137_47254,_STAR_print_newline_STAR__temp_val__47138_47255,_STAR_print_fn_STAR__temp_val__47139_47256,sb__4661__auto__,G__47132,G__47133,G__47134,G__47131,G__47131__$1,loc,class_name,simple_class,cause_type,format,map__47129,map__47129__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__47126_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47126_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__47136_47253,_STAR_print_fn_STAR__orig_val__47137_47254,_STAR_print_newline_STAR__temp_val__47138_47255,_STAR_print_fn_STAR__temp_val__47139_47256,sb__4661__auto__,G__47132,G__47133,G__47134,G__47131,G__47131__$1,loc,class_name,simple_class,cause_type,format,map__47129,map__47129__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__47136_47253,_STAR_print_fn_STAR__orig_val__47137_47254,_STAR_print_newline_STAR__temp_val__47138_47255,_STAR_print_fn_STAR__temp_val__47139_47256,sb__4661__auto__,G__47132,G__47133,G__47134,G__47131,G__47131__$1,loc,class_name,simple_class,cause_type,format,map__47129,map__47129__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__47137_47254;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__47136_47253;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__47132,G__47133,G__47134,G__47135) : format.call(null,G__47132,G__47133,G__47134,G__47135));

break;
case "macroexpansion":
var G__47140 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__47141 = cause_type;
var G__47142 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__47143 = loc;
var G__47144 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__47140,G__47141,G__47142,G__47143,G__47144) : format.call(null,G__47140,G__47141,G__47142,G__47143,G__47144));

break;
case "compile-syntax-check":
var G__47145 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__47146 = cause_type;
var G__47147 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__47148 = loc;
var G__47149 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__47145,G__47146,G__47147,G__47148,G__47149) : format.call(null,G__47145,G__47146,G__47147,G__47148,G__47149));

break;
case "compilation":
var G__47150 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__47151 = cause_type;
var G__47152 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__47153 = loc;
var G__47154 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__47150,G__47151,G__47152,G__47153,G__47154) : format.call(null,G__47150,G__47151,G__47152,G__47153,G__47154));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__47155 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__47156 = symbol;
var G__47157 = loc;
var G__47158 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__47159_47257 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__47160_47258 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__47161_47259 = true;
var _STAR_print_fn_STAR__temp_val__47162_47260 = ((function (_STAR_print_newline_STAR__orig_val__47159_47257,_STAR_print_fn_STAR__orig_val__47160_47258,_STAR_print_newline_STAR__temp_val__47161_47259,sb__4661__auto__,G__47155,G__47156,G__47157,G__47131,G__47131__$1,loc,class_name,simple_class,cause_type,format,map__47129,map__47129__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__47159_47257,_STAR_print_fn_STAR__orig_val__47160_47258,_STAR_print_newline_STAR__temp_val__47161_47259,sb__4661__auto__,G__47155,G__47156,G__47157,G__47131,G__47131__$1,loc,class_name,simple_class,cause_type,format,map__47129,map__47129__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__47161_47259;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__47162_47260;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__47159_47257,_STAR_print_fn_STAR__orig_val__47160_47258,_STAR_print_newline_STAR__temp_val__47161_47259,_STAR_print_fn_STAR__temp_val__47162_47260,sb__4661__auto__,G__47155,G__47156,G__47157,G__47131,G__47131__$1,loc,class_name,simple_class,cause_type,format,map__47129,map__47129__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__47159_47257,_STAR_print_fn_STAR__orig_val__47160_47258,_STAR_print_newline_STAR__temp_val__47161_47259,_STAR_print_fn_STAR__temp_val__47162_47260,sb__4661__auto__,G__47155,G__47156,G__47157,G__47131,G__47131__$1,loc,class_name,simple_class,cause_type,format,map__47129,map__47129__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__47127_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47127_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__47159_47257,_STAR_print_fn_STAR__orig_val__47160_47258,_STAR_print_newline_STAR__temp_val__47161_47259,_STAR_print_fn_STAR__temp_val__47162_47260,sb__4661__auto__,G__47155,G__47156,G__47157,G__47131,G__47131__$1,loc,class_name,simple_class,cause_type,format,map__47129,map__47129__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__47159_47257,_STAR_print_fn_STAR__orig_val__47160_47258,_STAR_print_newline_STAR__temp_val__47161_47259,_STAR_print_fn_STAR__temp_val__47162_47260,sb__4661__auto__,G__47155,G__47156,G__47157,G__47131,G__47131__$1,loc,class_name,simple_class,cause_type,format,map__47129,map__47129__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__47160_47258;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__47159_47257;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__47155,G__47156,G__47157,G__47158) : format.call(null,G__47155,G__47156,G__47157,G__47158));
} else {
var G__47163 = "Execution error%s at %s(%s).\n%s\n";
var G__47164 = cause_type;
var G__47165 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__47166 = loc;
var G__47167 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__47163,G__47164,G__47165,G__47166,G__47167) : format.call(null,G__47163,G__47164,G__47165,G__47166,G__47167));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47131__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
