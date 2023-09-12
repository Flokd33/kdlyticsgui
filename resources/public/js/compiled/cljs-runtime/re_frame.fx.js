goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
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
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__40278 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__40279 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__40279);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___40438 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___40438)){
var new_db_40439 = temp__5804__auto___40438;
var fexpr__40291_40440 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__40291_40440.cljs$core$IFn$_invoke$arity$1 ? fexpr__40291_40440.cljs$core$IFn$_invoke$arity$1(new_db_40439) : fexpr__40291_40440.call(null,new_db_40439));
} else {
}

var seq__40292 = cljs.core.seq(effects_without_db);
var chunk__40293 = null;
var count__40294 = (0);
var i__40295 = (0);
while(true){
if((i__40295 < count__40294)){
var vec__40339 = chunk__40293.cljs$core$IIndexed$_nth$arity$2(null,i__40295);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40339,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40339,(1),null);
var temp__5802__auto___40441 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___40441)){
var effect_fn_40442 = temp__5802__auto___40441;
(effect_fn_40442.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40442.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40442.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__40443 = seq__40292;
var G__40444 = chunk__40293;
var G__40445 = count__40294;
var G__40446 = (i__40295 + (1));
seq__40292 = G__40443;
chunk__40293 = G__40444;
count__40294 = G__40445;
i__40295 = G__40446;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40292);
if(temp__5804__auto__){
var seq__40292__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40292__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40292__$1);
var G__40447 = cljs.core.chunk_rest(seq__40292__$1);
var G__40448 = c__5568__auto__;
var G__40449 = cljs.core.count(c__5568__auto__);
var G__40450 = (0);
seq__40292 = G__40447;
chunk__40293 = G__40448;
count__40294 = G__40449;
i__40295 = G__40450;
continue;
} else {
var vec__40344 = cljs.core.first(seq__40292__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40344,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40344,(1),null);
var temp__5802__auto___40451 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___40451)){
var effect_fn_40452 = temp__5802__auto___40451;
(effect_fn_40452.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40452.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40452.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__40453 = cljs.core.next(seq__40292__$1);
var G__40454 = null;
var G__40455 = (0);
var G__40456 = (0);
seq__40292 = G__40453;
chunk__40293 = G__40454;
count__40294 = G__40455;
i__40295 = G__40456;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__39983__auto___40457 = re_frame.interop.now();
var duration__39984__auto___40458 = (end__39983__auto___40457 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__39984__auto___40458,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__39983__auto___40457);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__40278);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___40459 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___40459)){
var new_db_40460 = temp__5804__auto___40459;
var fexpr__40355_40461 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__40355_40461.cljs$core$IFn$_invoke$arity$1 ? fexpr__40355_40461.cljs$core$IFn$_invoke$arity$1(new_db_40460) : fexpr__40355_40461.call(null,new_db_40460));
} else {
}

var seq__40356 = cljs.core.seq(effects_without_db);
var chunk__40357 = null;
var count__40358 = (0);
var i__40359 = (0);
while(true){
if((i__40359 < count__40358)){
var vec__40372 = chunk__40357.cljs$core$IIndexed$_nth$arity$2(null,i__40359);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40372,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40372,(1),null);
var temp__5802__auto___40462 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___40462)){
var effect_fn_40463 = temp__5802__auto___40462;
(effect_fn_40463.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40463.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40463.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__40464 = seq__40356;
var G__40465 = chunk__40357;
var G__40466 = count__40358;
var G__40467 = (i__40359 + (1));
seq__40356 = G__40464;
chunk__40357 = G__40465;
count__40358 = G__40466;
i__40359 = G__40467;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40356);
if(temp__5804__auto__){
var seq__40356__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40356__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40356__$1);
var G__40469 = cljs.core.chunk_rest(seq__40356__$1);
var G__40470 = c__5568__auto__;
var G__40471 = cljs.core.count(c__5568__auto__);
var G__40472 = (0);
seq__40356 = G__40469;
chunk__40357 = G__40470;
count__40358 = G__40471;
i__40359 = G__40472;
continue;
} else {
var vec__40375 = cljs.core.first(seq__40356__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40375,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40375,(1),null);
var temp__5802__auto___40474 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___40474)){
var effect_fn_40475 = temp__5802__auto___40474;
(effect_fn_40475.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40475.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40475.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__40476 = cljs.core.next(seq__40356__$1);
var G__40477 = null;
var G__40478 = (0);
var G__40479 = (0);
seq__40356 = G__40476;
chunk__40357 = G__40477;
count__40358 = G__40478;
i__40359 = G__40479;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__40378){
var map__40379 = p__40378;
var map__40379__$1 = cljs.core.__destructure_map(map__40379);
var effect = map__40379__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40379__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40379__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__40382 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__40383 = null;
var count__40384 = (0);
var i__40385 = (0);
while(true){
if((i__40385 < count__40384)){
var effect = chunk__40383.cljs$core$IIndexed$_nth$arity$2(null,i__40385);
re_frame.fx.dispatch_later(effect);


var G__40482 = seq__40382;
var G__40483 = chunk__40383;
var G__40484 = count__40384;
var G__40485 = (i__40385 + (1));
seq__40382 = G__40482;
chunk__40383 = G__40483;
count__40384 = G__40484;
i__40385 = G__40485;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40382);
if(temp__5804__auto__){
var seq__40382__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40382__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40382__$1);
var G__40486 = cljs.core.chunk_rest(seq__40382__$1);
var G__40487 = c__5568__auto__;
var G__40488 = cljs.core.count(c__5568__auto__);
var G__40489 = (0);
seq__40382 = G__40486;
chunk__40383 = G__40487;
count__40384 = G__40488;
i__40385 = G__40489;
continue;
} else {
var effect = cljs.core.first(seq__40382__$1);
re_frame.fx.dispatch_later(effect);


var G__40490 = cljs.core.next(seq__40382__$1);
var G__40491 = null;
var G__40492 = (0);
var G__40493 = (0);
seq__40382 = G__40490;
chunk__40383 = G__40491;
count__40384 = G__40492;
i__40385 = G__40493;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__40388 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__40389 = null;
var count__40390 = (0);
var i__40391 = (0);
while(true){
if((i__40391 < count__40390)){
var vec__40421 = chunk__40389.cljs$core$IIndexed$_nth$arity$2(null,i__40391);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40421,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40421,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___40495 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___40495)){
var effect_fn_40497 = temp__5802__auto___40495;
(effect_fn_40497.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40497.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40497.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__40498 = seq__40388;
var G__40499 = chunk__40389;
var G__40500 = count__40390;
var G__40501 = (i__40391 + (1));
seq__40388 = G__40498;
chunk__40389 = G__40499;
count__40390 = G__40500;
i__40391 = G__40501;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40388);
if(temp__5804__auto__){
var seq__40388__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40388__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40388__$1);
var G__40502 = cljs.core.chunk_rest(seq__40388__$1);
var G__40503 = c__5568__auto__;
var G__40504 = cljs.core.count(c__5568__auto__);
var G__40505 = (0);
seq__40388 = G__40502;
chunk__40389 = G__40503;
count__40390 = G__40504;
i__40391 = G__40505;
continue;
} else {
var vec__40424 = cljs.core.first(seq__40388__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40424,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40424,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___40506 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___40506)){
var effect_fn_40507 = temp__5802__auto___40506;
(effect_fn_40507.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40507.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40507.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__40508 = cljs.core.next(seq__40388__$1);
var G__40509 = null;
var G__40510 = (0);
var G__40511 = (0);
seq__40388 = G__40508;
chunk__40389 = G__40509;
count__40390 = G__40510;
i__40391 = G__40511;
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
var seq__40427 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__40428 = null;
var count__40429 = (0);
var i__40430 = (0);
while(true){
if((i__40430 < count__40429)){
var event = chunk__40428.cljs$core$IIndexed$_nth$arity$2(null,i__40430);
re_frame.router.dispatch(event);


var G__40513 = seq__40427;
var G__40514 = chunk__40428;
var G__40515 = count__40429;
var G__40516 = (i__40430 + (1));
seq__40427 = G__40513;
chunk__40428 = G__40514;
count__40429 = G__40515;
i__40430 = G__40516;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40427);
if(temp__5804__auto__){
var seq__40427__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40427__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40427__$1);
var G__40518 = cljs.core.chunk_rest(seq__40427__$1);
var G__40519 = c__5568__auto__;
var G__40520 = cljs.core.count(c__5568__auto__);
var G__40521 = (0);
seq__40427 = G__40518;
chunk__40428 = G__40519;
count__40429 = G__40520;
i__40430 = G__40521;
continue;
} else {
var event = cljs.core.first(seq__40427__$1);
re_frame.router.dispatch(event);


var G__40522 = cljs.core.next(seq__40427__$1);
var G__40523 = null;
var G__40524 = (0);
var G__40525 = (0);
seq__40427 = G__40522;
chunk__40428 = G__40523;
count__40429 = G__40524;
i__40430 = G__40525;
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
var seq__40431 = cljs.core.seq(value);
var chunk__40432 = null;
var count__40433 = (0);
var i__40434 = (0);
while(true){
if((i__40434 < count__40433)){
var event = chunk__40432.cljs$core$IIndexed$_nth$arity$2(null,i__40434);
clear_event(event);


var G__40526 = seq__40431;
var G__40527 = chunk__40432;
var G__40528 = count__40433;
var G__40529 = (i__40434 + (1));
seq__40431 = G__40526;
chunk__40432 = G__40527;
count__40433 = G__40528;
i__40434 = G__40529;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40431);
if(temp__5804__auto__){
var seq__40431__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40431__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40431__$1);
var G__40530 = cljs.core.chunk_rest(seq__40431__$1);
var G__40531 = c__5568__auto__;
var G__40532 = cljs.core.count(c__5568__auto__);
var G__40533 = (0);
seq__40431 = G__40530;
chunk__40432 = G__40531;
count__40433 = G__40532;
i__40434 = G__40533;
continue;
} else {
var event = cljs.core.first(seq__40431__$1);
clear_event(event);


var G__40534 = cljs.core.next(seq__40431__$1);
var G__40535 = null;
var G__40536 = (0);
var G__40537 = (0);
seq__40431 = G__40534;
chunk__40432 = G__40535;
count__40433 = G__40536;
i__40434 = G__40537;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
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
