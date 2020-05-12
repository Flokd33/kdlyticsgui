goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
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
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__54175){
var map__54176 = p__54175;
var map__54176__$1 = (((((!((map__54176 == null))))?(((((map__54176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54176):map__54176);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54176__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54176__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54176__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54176__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
var seq__54178_54205 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__54179_54206 = null;
var count__54180_54207 = (0);
var i__54181_54208 = (0);
while(true){
if((i__54181_54208 < count__54180_54207)){
var vec__54192_54209 = chunk__54179_54206.cljs$core$IIndexed$_nth$arity$2(null,i__54181_54208);
var k_54210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54192_54209,(0),null);
var cb_54211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54192_54209,(1),null);
try{var G__54196_54212 = cljs.core.deref(re_frame.trace.traces);
(cb_54211.cljs$core$IFn$_invoke$arity$1 ? cb_54211.cljs$core$IFn$_invoke$arity$1(G__54196_54212) : cb_54211.call(null,G__54196_54212));
}catch (e54195){var e_54213 = e54195;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_54210,"while storing",cljs.core.deref(re_frame.trace.traces),e_54213], 0));
}

var G__54214 = seq__54178_54205;
var G__54215 = chunk__54179_54206;
var G__54216 = count__54180_54207;
var G__54217 = (i__54181_54208 + (1));
seq__54178_54205 = G__54214;
chunk__54179_54206 = G__54215;
count__54180_54207 = G__54216;
i__54181_54208 = G__54217;
continue;
} else {
var temp__5735__auto___54218 = cljs.core.seq(seq__54178_54205);
if(temp__5735__auto___54218){
var seq__54178_54219__$1 = temp__5735__auto___54218;
if(cljs.core.chunked_seq_QMARK_(seq__54178_54219__$1)){
var c__4556__auto___54220 = cljs.core.chunk_first(seq__54178_54219__$1);
var G__54221 = cljs.core.chunk_rest(seq__54178_54219__$1);
var G__54222 = c__4556__auto___54220;
var G__54223 = cljs.core.count(c__4556__auto___54220);
var G__54224 = (0);
seq__54178_54205 = G__54221;
chunk__54179_54206 = G__54222;
count__54180_54207 = G__54223;
i__54181_54208 = G__54224;
continue;
} else {
var vec__54197_54225 = cljs.core.first(seq__54178_54219__$1);
var k_54226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54197_54225,(0),null);
var cb_54227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54197_54225,(1),null);
try{var G__54201_54228 = cljs.core.deref(re_frame.trace.traces);
(cb_54227.cljs$core$IFn$_invoke$arity$1 ? cb_54227.cljs$core$IFn$_invoke$arity$1(G__54201_54228) : cb_54227.call(null,G__54201_54228));
}catch (e54200){var e_54229 = e54200;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_54226,"while storing",cljs.core.deref(re_frame.trace.traces),e_54229], 0));
}

var G__54230 = cljs.core.next(seq__54178_54219__$1);
var G__54231 = null;
var G__54232 = (0);
var G__54233 = (0);
seq__54178_54205 = G__54230;
chunk__54179_54206 = G__54231;
count__54180_54207 = G__54232;
i__54181_54208 = G__54233;
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
