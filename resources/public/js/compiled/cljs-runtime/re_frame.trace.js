goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__40005){
var map__40006 = p__40005;
var map__40006__$1 = cljs.core.__destructure_map(map__40006);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40006__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40006__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40006__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40006__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__40007_40065 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__40008_40066 = null;
var count__40009_40067 = (0);
var i__40010_40068 = (0);
while(true){
if((i__40010_40068 < count__40009_40067)){
var vec__40023_40069 = chunk__40008_40066.cljs$core$IIndexed$_nth$arity$2(null,i__40010_40068);
var k_40070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40023_40069,(0),null);
var cb_40071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40023_40069,(1),null);
try{var G__40028_40072 = cljs.core.deref(re_frame.trace.traces);
(cb_40071.cljs$core$IFn$_invoke$arity$1 ? cb_40071.cljs$core$IFn$_invoke$arity$1(G__40028_40072) : cb_40071.call(null,G__40028_40072));
}catch (e40027){var e_40073 = e40027;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_40070,"while storing",cljs.core.deref(re_frame.trace.traces),e_40073], 0));
}

var G__40074 = seq__40007_40065;
var G__40075 = chunk__40008_40066;
var G__40076 = count__40009_40067;
var G__40077 = (i__40010_40068 + (1));
seq__40007_40065 = G__40074;
chunk__40008_40066 = G__40075;
count__40009_40067 = G__40076;
i__40010_40068 = G__40077;
continue;
} else {
var temp__5804__auto___40078 = cljs.core.seq(seq__40007_40065);
if(temp__5804__auto___40078){
var seq__40007_40079__$1 = temp__5804__auto___40078;
if(cljs.core.chunked_seq_QMARK_(seq__40007_40079__$1)){
var c__5568__auto___40080 = cljs.core.chunk_first(seq__40007_40079__$1);
var G__40081 = cljs.core.chunk_rest(seq__40007_40079__$1);
var G__40082 = c__5568__auto___40080;
var G__40083 = cljs.core.count(c__5568__auto___40080);
var G__40084 = (0);
seq__40007_40065 = G__40081;
chunk__40008_40066 = G__40082;
count__40009_40067 = G__40083;
i__40010_40068 = G__40084;
continue;
} else {
var vec__40030_40085 = cljs.core.first(seq__40007_40079__$1);
var k_40086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40030_40085,(0),null);
var cb_40087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40030_40085,(1),null);
try{var G__40034_40088 = cljs.core.deref(re_frame.trace.traces);
(cb_40087.cljs$core$IFn$_invoke$arity$1 ? cb_40087.cljs$core$IFn$_invoke$arity$1(G__40034_40088) : cb_40087.call(null,G__40034_40088));
}catch (e40033){var e_40089 = e40033;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_40086,"while storing",cljs.core.deref(re_frame.trace.traces),e_40089], 0));
}

var G__40090 = cljs.core.next(seq__40007_40079__$1);
var G__40091 = null;
var G__40092 = (0);
var G__40093 = (0);
seq__40007_40065 = G__40090;
chunk__40008_40066 = G__40091;
count__40009_40067 = G__40092;
i__40010_40068 = G__40093;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
