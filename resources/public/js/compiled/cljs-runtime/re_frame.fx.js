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
var _STAR_current_trace_STAR__orig_val__54436 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__54437 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__54437);

try{try{var seq__54438 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__54439 = null;
var count__54440 = (0);
var i__54441 = (0);
while(true){
if((i__54441 < count__54440)){
var vec__54448 = chunk__54439.cljs$core$IIndexed$_nth$arity$2(null,i__54441);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54448,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54448,(1),null);
var temp__5733__auto___54503 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___54503)){
var effect_fn_54504 = temp__5733__auto___54503;
(effect_fn_54504.cljs$core$IFn$_invoke$arity$1 ? effect_fn_54504.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_54504.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__54505 = seq__54438;
var G__54506 = chunk__54439;
var G__54507 = count__54440;
var G__54508 = (i__54441 + (1));
seq__54438 = G__54505;
chunk__54439 = G__54506;
count__54440 = G__54507;
i__54441 = G__54508;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54438);
if(temp__5735__auto__){
var seq__54438__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54438__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54438__$1);
var G__54509 = cljs.core.chunk_rest(seq__54438__$1);
var G__54510 = c__4556__auto__;
var G__54511 = cljs.core.count(c__4556__auto__);
var G__54512 = (0);
seq__54438 = G__54509;
chunk__54439 = G__54510;
count__54440 = G__54511;
i__54441 = G__54512;
continue;
} else {
var vec__54452 = cljs.core.first(seq__54438__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54452,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54452,(1),null);
var temp__5733__auto___54513 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___54513)){
var effect_fn_54514 = temp__5733__auto___54513;
(effect_fn_54514.cljs$core$IFn$_invoke$arity$1 ? effect_fn_54514.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_54514.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__54515 = cljs.core.next(seq__54438__$1);
var G__54516 = null;
var G__54517 = (0);
var G__54518 = (0);
seq__54438 = G__54515;
chunk__54439 = G__54516;
count__54440 = G__54517;
i__54441 = G__54518;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__54155__auto___54519 = re_frame.interop.now();
var duration__54156__auto___54520 = (end__54155__auto___54519 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__54156__auto___54520,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__54155__auto___54519);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__54436);
}} else {
var seq__54455 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__54456 = null;
var count__54457 = (0);
var i__54458 = (0);
while(true){
if((i__54458 < count__54457)){
var vec__54465 = chunk__54456.cljs$core$IIndexed$_nth$arity$2(null,i__54458);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54465,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54465,(1),null);
var temp__5733__auto___54521 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___54521)){
var effect_fn_54522 = temp__5733__auto___54521;
(effect_fn_54522.cljs$core$IFn$_invoke$arity$1 ? effect_fn_54522.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_54522.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__54523 = seq__54455;
var G__54524 = chunk__54456;
var G__54525 = count__54457;
var G__54526 = (i__54458 + (1));
seq__54455 = G__54523;
chunk__54456 = G__54524;
count__54457 = G__54525;
i__54458 = G__54526;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54455);
if(temp__5735__auto__){
var seq__54455__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54455__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54455__$1);
var G__54527 = cljs.core.chunk_rest(seq__54455__$1);
var G__54528 = c__4556__auto__;
var G__54529 = cljs.core.count(c__4556__auto__);
var G__54530 = (0);
seq__54455 = G__54527;
chunk__54456 = G__54528;
count__54457 = G__54529;
i__54458 = G__54530;
continue;
} else {
var vec__54468 = cljs.core.first(seq__54455__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54468,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54468,(1),null);
var temp__5733__auto___54531 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___54531)){
var effect_fn_54532 = temp__5733__auto___54531;
(effect_fn_54532.cljs$core$IFn$_invoke$arity$1 ? effect_fn_54532.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_54532.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__54533 = cljs.core.next(seq__54455__$1);
var G__54534 = null;
var G__54535 = (0);
var G__54536 = (0);
seq__54455 = G__54533;
chunk__54456 = G__54534;
count__54457 = G__54535;
i__54458 = G__54536;
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
var seq__54471 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__54472 = null;
var count__54473 = (0);
var i__54474 = (0);
while(true){
if((i__54474 < count__54473)){
var map__54491 = chunk__54472.cljs$core$IIndexed$_nth$arity$2(null,i__54474);
var map__54491__$1 = (((((!((map__54491 == null))))?(((((map__54491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54491):map__54491);
var effect = map__54491__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54491__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54491__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__54471,chunk__54472,count__54473,i__54474,map__54491,map__54491__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__54471,chunk__54472,count__54473,i__54474,map__54491,map__54491__$1,effect,ms,dispatch))
,ms);
}


var G__54537 = seq__54471;
var G__54538 = chunk__54472;
var G__54539 = count__54473;
var G__54540 = (i__54474 + (1));
seq__54471 = G__54537;
chunk__54472 = G__54538;
count__54473 = G__54539;
i__54474 = G__54540;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54471);
if(temp__5735__auto__){
var seq__54471__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54471__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54471__$1);
var G__54541 = cljs.core.chunk_rest(seq__54471__$1);
var G__54542 = c__4556__auto__;
var G__54543 = cljs.core.count(c__4556__auto__);
var G__54544 = (0);
seq__54471 = G__54541;
chunk__54472 = G__54542;
count__54473 = G__54543;
i__54474 = G__54544;
continue;
} else {
var map__54493 = cljs.core.first(seq__54471__$1);
var map__54493__$1 = (((((!((map__54493 == null))))?(((((map__54493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54493):map__54493);
var effect = map__54493__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54493__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54493__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__54471,chunk__54472,count__54473,i__54474,map__54493,map__54493__$1,effect,ms,dispatch,seq__54471__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__54471,chunk__54472,count__54473,i__54474,map__54493,map__54493__$1,effect,ms,dispatch,seq__54471__$1,temp__5735__auto__))
,ms);
}


var G__54545 = cljs.core.next(seq__54471__$1);
var G__54546 = null;
var G__54547 = (0);
var G__54548 = (0);
seq__54471 = G__54545;
chunk__54472 = G__54546;
count__54473 = G__54547;
i__54474 = G__54548;
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
var seq__54495 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__54496 = null;
var count__54497 = (0);
var i__54498 = (0);
while(true){
if((i__54498 < count__54497)){
var event = chunk__54496.cljs$core$IIndexed$_nth$arity$2(null,i__54498);
re_frame.router.dispatch(event);


var G__54549 = seq__54495;
var G__54550 = chunk__54496;
var G__54551 = count__54497;
var G__54552 = (i__54498 + (1));
seq__54495 = G__54549;
chunk__54496 = G__54550;
count__54497 = G__54551;
i__54498 = G__54552;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54495);
if(temp__5735__auto__){
var seq__54495__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54495__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54495__$1);
var G__54553 = cljs.core.chunk_rest(seq__54495__$1);
var G__54554 = c__4556__auto__;
var G__54555 = cljs.core.count(c__4556__auto__);
var G__54556 = (0);
seq__54495 = G__54553;
chunk__54496 = G__54554;
count__54497 = G__54555;
i__54498 = G__54556;
continue;
} else {
var event = cljs.core.first(seq__54495__$1);
re_frame.router.dispatch(event);


var G__54557 = cljs.core.next(seq__54495__$1);
var G__54558 = null;
var G__54559 = (0);
var G__54560 = (0);
seq__54495 = G__54557;
chunk__54496 = G__54558;
count__54497 = G__54559;
i__54498 = G__54560;
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
var seq__54499 = cljs.core.seq(value);
var chunk__54500 = null;
var count__54501 = (0);
var i__54502 = (0);
while(true){
if((i__54502 < count__54501)){
var event = chunk__54500.cljs$core$IIndexed$_nth$arity$2(null,i__54502);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__54561 = seq__54499;
var G__54562 = chunk__54500;
var G__54563 = count__54501;
var G__54564 = (i__54502 + (1));
seq__54499 = G__54561;
chunk__54500 = G__54562;
count__54501 = G__54563;
i__54502 = G__54564;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54499);
if(temp__5735__auto__){
var seq__54499__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54499__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54499__$1);
var G__54565 = cljs.core.chunk_rest(seq__54499__$1);
var G__54566 = c__4556__auto__;
var G__54567 = cljs.core.count(c__4556__auto__);
var G__54568 = (0);
seq__54499 = G__54565;
chunk__54500 = G__54566;
count__54501 = G__54567;
i__54502 = G__54568;
continue;
} else {
var event = cljs.core.first(seq__54499__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__54569 = cljs.core.next(seq__54499__$1);
var G__54570 = null;
var G__54571 = (0);
var G__54572 = (0);
seq__54499 = G__54569;
chunk__54500 = G__54570;
count__54501 = G__54571;
i__54502 = G__54572;
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
