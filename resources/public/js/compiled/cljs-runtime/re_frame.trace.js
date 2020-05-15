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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__42663){
var map__42664 = p__42663;
var map__42664__$1 = (((((!((map__42664 == null))))?(((((map__42664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42664):map__42664);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42664__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42664__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42664__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42664__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__42666_42693 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__42667_42694 = null;
var count__42668_42695 = (0);
var i__42669_42696 = (0);
while(true){
if((i__42669_42696 < count__42668_42695)){
var vec__42680_42697 = chunk__42667_42694.cljs$core$IIndexed$_nth$arity$2(null,i__42669_42696);
var k_42698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42680_42697,(0),null);
var cb_42699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42680_42697,(1),null);
try{var G__42684_42700 = cljs.core.deref(re_frame.trace.traces);
(cb_42699.cljs$core$IFn$_invoke$arity$1 ? cb_42699.cljs$core$IFn$_invoke$arity$1(G__42684_42700) : cb_42699.call(null,G__42684_42700));
}catch (e42683){var e_42701 = e42683;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_42698,"while storing",cljs.core.deref(re_frame.trace.traces),e_42701], 0));
}

var G__42702 = seq__42666_42693;
var G__42703 = chunk__42667_42694;
var G__42704 = count__42668_42695;
var G__42705 = (i__42669_42696 + (1));
seq__42666_42693 = G__42702;
chunk__42667_42694 = G__42703;
count__42668_42695 = G__42704;
i__42669_42696 = G__42705;
continue;
} else {
var temp__5735__auto___42706 = cljs.core.seq(seq__42666_42693);
if(temp__5735__auto___42706){
var seq__42666_42707__$1 = temp__5735__auto___42706;
if(cljs.core.chunked_seq_QMARK_(seq__42666_42707__$1)){
var c__4556__auto___42712 = cljs.core.chunk_first(seq__42666_42707__$1);
var G__42713 = cljs.core.chunk_rest(seq__42666_42707__$1);
var G__42714 = c__4556__auto___42712;
var G__42715 = cljs.core.count(c__4556__auto___42712);
var G__42716 = (0);
seq__42666_42693 = G__42713;
chunk__42667_42694 = G__42714;
count__42668_42695 = G__42715;
i__42669_42696 = G__42716;
continue;
} else {
var vec__42685_42717 = cljs.core.first(seq__42666_42707__$1);
var k_42718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42685_42717,(0),null);
var cb_42719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42685_42717,(1),null);
try{var G__42689_42720 = cljs.core.deref(re_frame.trace.traces);
(cb_42719.cljs$core$IFn$_invoke$arity$1 ? cb_42719.cljs$core$IFn$_invoke$arity$1(G__42689_42720) : cb_42719.call(null,G__42689_42720));
}catch (e42688){var e_42721 = e42688;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_42718,"while storing",cljs.core.deref(re_frame.trace.traces),e_42721], 0));
}

var G__42722 = cljs.core.next(seq__42666_42707__$1);
var G__42723 = null;
var G__42724 = (0);
var G__42725 = (0);
seq__42666_42693 = G__42722;
chunk__42667_42694 = G__42723;
count__42668_42695 = G__42724;
i__42669_42696 = G__42725;
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
