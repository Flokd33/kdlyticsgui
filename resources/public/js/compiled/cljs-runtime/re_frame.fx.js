goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__42665 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__42666 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__42666;

try{try{var seq__42667 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__42668 = null;
var count__42669 = (0);
var i__42670 = (0);
while(true){
if((i__42670 < count__42669)){
var vec__42678 = chunk__42668.cljs$core$IIndexed$_nth$arity$2(null,i__42670);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42678,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42678,(1),null);
var temp__5733__auto___42736 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___42736)){
var effect_fn_42737 = temp__5733__auto___42736;
(effect_fn_42737.cljs$core$IFn$_invoke$arity$1 ? effect_fn_42737.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_42737.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__42738 = seq__42667;
var G__42739 = chunk__42668;
var G__42740 = count__42669;
var G__42741 = (i__42670 + (1));
seq__42667 = G__42738;
chunk__42668 = G__42739;
count__42669 = G__42740;
i__42670 = G__42741;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42667);
if(temp__5735__auto__){
var seq__42667__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42667__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__42667__$1);
var G__42742 = cljs.core.chunk_rest(seq__42667__$1);
var G__42743 = c__4550__auto__;
var G__42744 = cljs.core.count(c__4550__auto__);
var G__42745 = (0);
seq__42667 = G__42742;
chunk__42668 = G__42743;
count__42669 = G__42744;
i__42670 = G__42745;
continue;
} else {
var vec__42681 = cljs.core.first(seq__42667__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42681,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42681,(1),null);
var temp__5733__auto___42746 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___42746)){
var effect_fn_42747 = temp__5733__auto___42746;
(effect_fn_42747.cljs$core$IFn$_invoke$arity$1 ? effect_fn_42747.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_42747.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__42748 = cljs.core.next(seq__42667__$1);
var G__42749 = null;
var G__42750 = (0);
var G__42751 = (0);
seq__42667 = G__42748;
chunk__42668 = G__42749;
count__42669 = G__42750;
i__42670 = G__42751;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__42358__auto___42752 = re_frame.interop.now();
var duration__42359__auto___42753 = (end__42358__auto___42752 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__42359__auto___42753,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__42358__auto___42752);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__42665;
}} else {
var seq__42684 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__42685 = null;
var count__42686 = (0);
var i__42687 = (0);
while(true){
if((i__42687 < count__42686)){
var vec__42694 = chunk__42685.cljs$core$IIndexed$_nth$arity$2(null,i__42687);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42694,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42694,(1),null);
var temp__5733__auto___42754 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___42754)){
var effect_fn_42755 = temp__5733__auto___42754;
(effect_fn_42755.cljs$core$IFn$_invoke$arity$1 ? effect_fn_42755.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_42755.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__42756 = seq__42684;
var G__42757 = chunk__42685;
var G__42758 = count__42686;
var G__42759 = (i__42687 + (1));
seq__42684 = G__42756;
chunk__42685 = G__42757;
count__42686 = G__42758;
i__42687 = G__42759;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42684);
if(temp__5735__auto__){
var seq__42684__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42684__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__42684__$1);
var G__42760 = cljs.core.chunk_rest(seq__42684__$1);
var G__42761 = c__4550__auto__;
var G__42762 = cljs.core.count(c__4550__auto__);
var G__42763 = (0);
seq__42684 = G__42760;
chunk__42685 = G__42761;
count__42686 = G__42762;
i__42687 = G__42763;
continue;
} else {
var vec__42697 = cljs.core.first(seq__42684__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42697,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42697,(1),null);
var temp__5733__auto___42764 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___42764)){
var effect_fn_42765 = temp__5733__auto___42764;
(effect_fn_42765.cljs$core$IFn$_invoke$arity$1 ? effect_fn_42765.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_42765.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__42766 = cljs.core.next(seq__42684__$1);
var G__42767 = null;
var G__42768 = (0);
var G__42769 = (0);
seq__42684 = G__42766;
chunk__42685 = G__42767;
count__42686 = G__42768;
i__42687 = G__42769;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__42700 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__42701 = null;
var count__42702 = (0);
var i__42703 = (0);
while(true){
if((i__42703 < count__42702)){
var map__42711 = chunk__42701.cljs$core$IIndexed$_nth$arity$2(null,i__42703);
var map__42711__$1 = (((((!((map__42711 == null))))?(((((map__42711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42711):map__42711);
var effect = map__42711__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42711__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42711__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__42700,chunk__42701,count__42702,i__42703,map__42711,map__42711__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__42700,chunk__42701,count__42702,i__42703,map__42711,map__42711__$1,effect,ms,dispatch))
,ms);
}


var G__42770 = seq__42700;
var G__42771 = chunk__42701;
var G__42772 = count__42702;
var G__42773 = (i__42703 + (1));
seq__42700 = G__42770;
chunk__42701 = G__42771;
count__42702 = G__42772;
i__42703 = G__42773;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42700);
if(temp__5735__auto__){
var seq__42700__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42700__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__42700__$1);
var G__42774 = cljs.core.chunk_rest(seq__42700__$1);
var G__42775 = c__4550__auto__;
var G__42776 = cljs.core.count(c__4550__auto__);
var G__42777 = (0);
seq__42700 = G__42774;
chunk__42701 = G__42775;
count__42702 = G__42776;
i__42703 = G__42777;
continue;
} else {
var map__42713 = cljs.core.first(seq__42700__$1);
var map__42713__$1 = (((((!((map__42713 == null))))?(((((map__42713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42713):map__42713);
var effect = map__42713__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42713__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42713__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__42700,chunk__42701,count__42702,i__42703,map__42713,map__42713__$1,effect,ms,dispatch,seq__42700__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__42700,chunk__42701,count__42702,i__42703,map__42713,map__42713__$1,effect,ms,dispatch,seq__42700__$1,temp__5735__auto__))
,ms);
}


var G__42778 = cljs.core.next(seq__42700__$1);
var G__42779 = null;
var G__42780 = (0);
var G__42781 = (0);
seq__42700 = G__42778;
chunk__42701 = G__42779;
count__42702 = G__42780;
i__42703 = G__42781;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__42716 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__42717 = null;
var count__42718 = (0);
var i__42719 = (0);
while(true){
if((i__42719 < count__42718)){
var event = chunk__42717.cljs$core$IIndexed$_nth$arity$2(null,i__42719);
re_frame.router.dispatch(event);


var G__42782 = seq__42716;
var G__42783 = chunk__42717;
var G__42784 = count__42718;
var G__42785 = (i__42719 + (1));
seq__42716 = G__42782;
chunk__42717 = G__42783;
count__42718 = G__42784;
i__42719 = G__42785;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42716);
if(temp__5735__auto__){
var seq__42716__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42716__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__42716__$1);
var G__42786 = cljs.core.chunk_rest(seq__42716__$1);
var G__42787 = c__4550__auto__;
var G__42788 = cljs.core.count(c__4550__auto__);
var G__42789 = (0);
seq__42716 = G__42786;
chunk__42717 = G__42787;
count__42718 = G__42788;
i__42719 = G__42789;
continue;
} else {
var event = cljs.core.first(seq__42716__$1);
re_frame.router.dispatch(event);


var G__42790 = cljs.core.next(seq__42716__$1);
var G__42791 = null;
var G__42792 = (0);
var G__42793 = (0);
seq__42716 = G__42790;
chunk__42717 = G__42791;
count__42718 = G__42792;
i__42719 = G__42793;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__42732 = cljs.core.seq(value);
var chunk__42733 = null;
var count__42734 = (0);
var i__42735 = (0);
while(true){
if((i__42735 < count__42734)){
var event = chunk__42733.cljs$core$IIndexed$_nth$arity$2(null,i__42735);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__42796 = seq__42732;
var G__42797 = chunk__42733;
var G__42798 = count__42734;
var G__42799 = (i__42735 + (1));
seq__42732 = G__42796;
chunk__42733 = G__42797;
count__42734 = G__42798;
i__42735 = G__42799;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42732);
if(temp__5735__auto__){
var seq__42732__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42732__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__42732__$1);
var G__42800 = cljs.core.chunk_rest(seq__42732__$1);
var G__42801 = c__4550__auto__;
var G__42802 = cljs.core.count(c__4550__auto__);
var G__42803 = (0);
seq__42732 = G__42800;
chunk__42733 = G__42801;
count__42734 = G__42802;
i__42735 = G__42803;
continue;
} else {
var event = cljs.core.first(seq__42732__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__42804 = cljs.core.next(seq__42732__$1);
var G__42805 = null;
var G__42806 = (0);
var G__42807 = (0);
seq__42732 = G__42804;
chunk__42733 = G__42805;
count__42734 = G__42806;
i__42735 = G__42807;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
