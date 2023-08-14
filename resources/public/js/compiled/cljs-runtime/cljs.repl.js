goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36059){
var map__36060 = p__36059;
var map__36060__$1 = cljs.core.__destructure_map(map__36060);
var m = map__36060__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36060__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36060__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
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
var seq__36061_36401 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36062_36402 = null;
var count__36063_36403 = (0);
var i__36064_36404 = (0);
while(true){
if((i__36064_36404 < count__36063_36403)){
var f_36405 = chunk__36062_36402.cljs$core$IIndexed$_nth$arity$2(null,i__36064_36404);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36405], 0));


var G__36407 = seq__36061_36401;
var G__36408 = chunk__36062_36402;
var G__36409 = count__36063_36403;
var G__36410 = (i__36064_36404 + (1));
seq__36061_36401 = G__36407;
chunk__36062_36402 = G__36408;
count__36063_36403 = G__36409;
i__36064_36404 = G__36410;
continue;
} else {
var temp__5804__auto___36411 = cljs.core.seq(seq__36061_36401);
if(temp__5804__auto___36411){
var seq__36061_36412__$1 = temp__5804__auto___36411;
if(cljs.core.chunked_seq_QMARK_(seq__36061_36412__$1)){
var c__5568__auto___36413 = cljs.core.chunk_first(seq__36061_36412__$1);
var G__36415 = cljs.core.chunk_rest(seq__36061_36412__$1);
var G__36416 = c__5568__auto___36413;
var G__36417 = cljs.core.count(c__5568__auto___36413);
var G__36418 = (0);
seq__36061_36401 = G__36415;
chunk__36062_36402 = G__36416;
count__36063_36403 = G__36417;
i__36064_36404 = G__36418;
continue;
} else {
var f_36419 = cljs.core.first(seq__36061_36412__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36419], 0));


var G__36420 = cljs.core.next(seq__36061_36412__$1);
var G__36421 = null;
var G__36422 = (0);
var G__36423 = (0);
seq__36061_36401 = G__36420;
chunk__36062_36402 = G__36421;
count__36063_36403 = G__36422;
i__36064_36404 = G__36423;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36429 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36429], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36429)))?cljs.core.second(arglists_36429):arglists_36429)], 0));
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
var seq__36067_36436 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36068_36437 = null;
var count__36069_36438 = (0);
var i__36070_36439 = (0);
while(true){
if((i__36070_36439 < count__36069_36438)){
var vec__36085_36440 = chunk__36068_36437.cljs$core$IIndexed$_nth$arity$2(null,i__36070_36439);
var name_36441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36085_36440,(0),null);
var map__36088_36442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36085_36440,(1),null);
var map__36088_36443__$1 = cljs.core.__destructure_map(map__36088_36442);
var doc_36444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36088_36443__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36088_36443__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36441], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36445], 0));

if(cljs.core.truth_(doc_36444)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36444], 0));
} else {
}


var G__36447 = seq__36067_36436;
var G__36448 = chunk__36068_36437;
var G__36449 = count__36069_36438;
var G__36450 = (i__36070_36439 + (1));
seq__36067_36436 = G__36447;
chunk__36068_36437 = G__36448;
count__36069_36438 = G__36449;
i__36070_36439 = G__36450;
continue;
} else {
var temp__5804__auto___36451 = cljs.core.seq(seq__36067_36436);
if(temp__5804__auto___36451){
var seq__36067_36452__$1 = temp__5804__auto___36451;
if(cljs.core.chunked_seq_QMARK_(seq__36067_36452__$1)){
var c__5568__auto___36453 = cljs.core.chunk_first(seq__36067_36452__$1);
var G__36454 = cljs.core.chunk_rest(seq__36067_36452__$1);
var G__36455 = c__5568__auto___36453;
var G__36456 = cljs.core.count(c__5568__auto___36453);
var G__36457 = (0);
seq__36067_36436 = G__36454;
chunk__36068_36437 = G__36455;
count__36069_36438 = G__36456;
i__36070_36439 = G__36457;
continue;
} else {
var vec__36094_36458 = cljs.core.first(seq__36067_36452__$1);
var name_36459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36094_36458,(0),null);
var map__36097_36460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36094_36458,(1),null);
var map__36097_36461__$1 = cljs.core.__destructure_map(map__36097_36460);
var doc_36462 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36097_36461__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36097_36461__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36459], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36463], 0));

if(cljs.core.truth_(doc_36462)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36462], 0));
} else {
}


var G__36464 = cljs.core.next(seq__36067_36452__$1);
var G__36465 = null;
var G__36466 = (0);
var G__36467 = (0);
seq__36067_36436 = G__36464;
chunk__36068_36437 = G__36465;
count__36069_36438 = G__36466;
i__36070_36439 = G__36467;
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
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36099 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36100 = null;
var count__36101 = (0);
var i__36102 = (0);
while(true){
if((i__36102 < count__36101)){
var role = chunk__36100.cljs$core$IIndexed$_nth$arity$2(null,i__36102);
var temp__5804__auto___36471__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___36471__$1)){
var spec_36472 = temp__5804__auto___36471__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36472)], 0));
} else {
}


var G__36473 = seq__36099;
var G__36474 = chunk__36100;
var G__36475 = count__36101;
var G__36476 = (i__36102 + (1));
seq__36099 = G__36473;
chunk__36100 = G__36474;
count__36101 = G__36475;
i__36102 = G__36476;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__36099);
if(temp__5804__auto____$1){
var seq__36099__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36099__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36099__$1);
var G__36477 = cljs.core.chunk_rest(seq__36099__$1);
var G__36478 = c__5568__auto__;
var G__36479 = cljs.core.count(c__5568__auto__);
var G__36480 = (0);
seq__36099 = G__36477;
chunk__36100 = G__36478;
count__36101 = G__36479;
i__36102 = G__36480;
continue;
} else {
var role = cljs.core.first(seq__36099__$1);
var temp__5804__auto___36481__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___36481__$2)){
var spec_36483 = temp__5804__auto___36481__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36483)], 0));
} else {
}


var G__36484 = cljs.core.next(seq__36099__$1);
var G__36485 = null;
var G__36486 = (0);
var G__36487 = (0);
seq__36099 = G__36484;
chunk__36100 = G__36485;
count__36101 = G__36486;
i__36102 = G__36487;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
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
var G__36496 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36497 = cljs.core.ex_cause(t);
via = G__36496;
t = G__36497;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
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
var map__36255 = datafied_throwable;
var map__36255__$1 = cljs.core.__destructure_map(map__36255);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36255__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36255__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36255__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36256 = cljs.core.last(via);
var map__36256__$1 = cljs.core.__destructure_map(map__36256);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36256__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36256__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36256__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36258 = data;
var map__36258__$1 = cljs.core.__destructure_map(map__36258);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36258__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36258__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36258__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36260 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36260__$1 = cljs.core.__destructure_map(map__36260);
var top_data = map__36260__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36260__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36264 = phase;
var G__36264__$1 = (((G__36264 instanceof cljs.core.Keyword))?G__36264.fqn:null);
switch (G__36264__$1) {
case "read-source":
var map__36270 = data;
var map__36270__$1 = cljs.core.__destructure_map(map__36270);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36270__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36270__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36272 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36272__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36272,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36272);
var G__36272__$2 = (cljs.core.truth_((function (){var fexpr__36273 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36273.cljs$core$IFn$_invoke$arity$1 ? fexpr__36273.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36273.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36272__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36272__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36272__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36272__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36277 = top_data;
var G__36277__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36277,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36277);
var G__36277__$2 = (cljs.core.truth_((function (){var fexpr__36280 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36280.cljs$core$IFn$_invoke$arity$1 ? fexpr__36280.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36280.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36277__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36277__$1);
var G__36277__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36277__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36277__$2);
var G__36277__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36277__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36277__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36277__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36277__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36284 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36284,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36284,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36284,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36284,(3),null);
var G__36289 = top_data;
var G__36289__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36289,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36289);
var G__36289__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36289__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36289__$1);
var G__36289__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36289__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36289__$2);
var G__36289__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36289__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36289__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36289__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36289__$4;
}

break;
case "execution":
var vec__36298 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36298,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36298,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36298,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36298,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36246_SHARP_){
var or__5045__auto__ = (p1__36246_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__36303 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36303.cljs$core$IFn$_invoke$arity$1 ? fexpr__36303.cljs$core$IFn$_invoke$arity$1(p1__36246_SHARP_) : fexpr__36303.call(null,p1__36246_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__36305 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36305__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36305,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36305);
var G__36305__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36305__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36305__$1);
var G__36305__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36305__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36305__$2);
var G__36305__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36305__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36305__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36305__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36305__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36264__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36322){
var map__36323 = p__36322;
var map__36323__$1 = cljs.core.__destructure_map(map__36323);
var triage_data = map__36323__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36323__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36323__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36323__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36323__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36323__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36323__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36323__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36323__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36339 = phase;
var G__36339__$1 = (((G__36339 instanceof cljs.core.Keyword))?G__36339.fqn:null);
switch (G__36339__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36340 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36341 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36342 = loc;
var G__36343 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36348_36564 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36349_36565 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36350_36566 = true;
var _STAR_print_fn_STAR__temp_val__36351_36567 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36350_36566);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36351_36567);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36318_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36318_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36349_36565);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36348_36564);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36340,G__36341,G__36342,G__36343) : format.call(null,G__36340,G__36341,G__36342,G__36343));

break;
case "macroexpansion":
var G__36355 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36356 = cause_type;
var G__36357 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36358 = loc;
var G__36359 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36355,G__36356,G__36357,G__36358,G__36359) : format.call(null,G__36355,G__36356,G__36357,G__36358,G__36359));

break;
case "compile-syntax-check":
var G__36361 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36362 = cause_type;
var G__36363 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36364 = loc;
var G__36365 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36361,G__36362,G__36363,G__36364,G__36365) : format.call(null,G__36361,G__36362,G__36363,G__36364,G__36365));

break;
case "compilation":
var G__36366 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36367 = cause_type;
var G__36368 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36369 = loc;
var G__36370 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36366,G__36367,G__36368,G__36369,G__36370) : format.call(null,G__36366,G__36367,G__36368,G__36369,G__36370));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36374 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36375 = symbol;
var G__36376 = loc;
var G__36377 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36378_36571 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36379_36572 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36380_36573 = true;
var _STAR_print_fn_STAR__temp_val__36381_36574 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36380_36573);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36381_36574);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36321_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36321_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36379_36572);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36378_36571);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36374,G__36375,G__36376,G__36377) : format.call(null,G__36374,G__36375,G__36376,G__36377));
} else {
var G__36385 = "Execution error%s at %s(%s).\n%s\n";
var G__36386 = cause_type;
var G__36387 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36388 = loc;
var G__36389 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36385,G__36386,G__36387,G__36388,G__36389) : format.call(null,G__36385,G__36386,G__36387,G__36388,G__36389));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36339__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
