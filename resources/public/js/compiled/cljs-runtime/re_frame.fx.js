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
var _STAR_current_trace_STAR__orig_val__43037 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__43038 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__43038);

try{try{var seq__43039 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__43040 = null;
var count__43041 = (0);
var i__43042 = (0);
while(true){
if((i__43042 < count__43041)){
var vec__43049 = chunk__43040.cljs$core$IIndexed$_nth$arity$2(null,i__43042);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43049,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43049,(1),null);
var temp__5733__auto___43121 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___43121)){
var effect_fn_43122 = temp__5733__auto___43121;
(effect_fn_43122.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43122.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43122.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43124 = seq__43039;
var G__43125 = chunk__43040;
var G__43126 = count__43041;
var G__43127 = (i__43042 + (1));
seq__43039 = G__43124;
chunk__43040 = G__43125;
count__43041 = G__43126;
i__43042 = G__43127;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43039);
if(temp__5735__auto__){
var seq__43039__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43039__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43039__$1);
var G__43143 = cljs.core.chunk_rest(seq__43039__$1);
var G__43144 = c__4556__auto__;
var G__43145 = cljs.core.count(c__4556__auto__);
var G__43146 = (0);
seq__43039 = G__43143;
chunk__43040 = G__43144;
count__43041 = G__43145;
i__43042 = G__43146;
continue;
} else {
var vec__43053 = cljs.core.first(seq__43039__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43053,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43053,(1),null);
var temp__5733__auto___43147 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___43147)){
var effect_fn_43148 = temp__5733__auto___43147;
(effect_fn_43148.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43148.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43148.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43149 = cljs.core.next(seq__43039__$1);
var G__43150 = null;
var G__43151 = (0);
var G__43152 = (0);
seq__43039 = G__43149;
chunk__43040 = G__43150;
count__43041 = G__43151;
i__43042 = G__43152;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__42637__auto___43153 = re_frame.interop.now();
var duration__42638__auto___43154 = (end__42637__auto___43153 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__42638__auto___43154,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__42637__auto___43153);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__43037);
}} else {
var seq__43058 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__43059 = null;
var count__43060 = (0);
var i__43061 = (0);
while(true){
if((i__43061 < count__43060)){
var vec__43068 = chunk__43059.cljs$core$IIndexed$_nth$arity$2(null,i__43061);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43068,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43068,(1),null);
var temp__5733__auto___43155 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___43155)){
var effect_fn_43156 = temp__5733__auto___43155;
(effect_fn_43156.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43156.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43156.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43157 = seq__43058;
var G__43158 = chunk__43059;
var G__43159 = count__43060;
var G__43160 = (i__43061 + (1));
seq__43058 = G__43157;
chunk__43059 = G__43158;
count__43060 = G__43159;
i__43061 = G__43160;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43058);
if(temp__5735__auto__){
var seq__43058__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43058__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43058__$1);
var G__43161 = cljs.core.chunk_rest(seq__43058__$1);
var G__43162 = c__4556__auto__;
var G__43163 = cljs.core.count(c__4556__auto__);
var G__43164 = (0);
seq__43058 = G__43161;
chunk__43059 = G__43162;
count__43060 = G__43163;
i__43061 = G__43164;
continue;
} else {
var vec__43071 = cljs.core.first(seq__43058__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43071,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43071,(1),null);
var temp__5733__auto___43165 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___43165)){
var effect_fn_43166 = temp__5733__auto___43165;
(effect_fn_43166.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43166.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43166.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43167 = cljs.core.next(seq__43058__$1);
var G__43168 = null;
var G__43169 = (0);
var G__43170 = (0);
seq__43058 = G__43167;
chunk__43059 = G__43168;
count__43060 = G__43169;
i__43061 = G__43170;
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
var seq__43075 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__43076 = null;
var count__43077 = (0);
var i__43078 = (0);
while(true){
if((i__43078 < count__43077)){
var map__43090 = chunk__43076.cljs$core$IIndexed$_nth$arity$2(null,i__43078);
var map__43090__$1 = (((((!((map__43090 == null))))?(((((map__43090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43090):map__43090);
var effect = map__43090__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43090__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43090__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__43075,chunk__43076,count__43077,i__43078,map__43090,map__43090__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__43075,chunk__43076,count__43077,i__43078,map__43090,map__43090__$1,effect,ms,dispatch))
,ms);
}


var G__43174 = seq__43075;
var G__43175 = chunk__43076;
var G__43176 = count__43077;
var G__43177 = (i__43078 + (1));
seq__43075 = G__43174;
chunk__43076 = G__43175;
count__43077 = G__43176;
i__43078 = G__43177;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43075);
if(temp__5735__auto__){
var seq__43075__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43075__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43075__$1);
var G__43179 = cljs.core.chunk_rest(seq__43075__$1);
var G__43180 = c__4556__auto__;
var G__43181 = cljs.core.count(c__4556__auto__);
var G__43182 = (0);
seq__43075 = G__43179;
chunk__43076 = G__43180;
count__43077 = G__43181;
i__43078 = G__43182;
continue;
} else {
var map__43100 = cljs.core.first(seq__43075__$1);
var map__43100__$1 = (((((!((map__43100 == null))))?(((((map__43100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43100):map__43100);
var effect = map__43100__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43100__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43100__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__43075,chunk__43076,count__43077,i__43078,map__43100,map__43100__$1,effect,ms,dispatch,seq__43075__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__43075,chunk__43076,count__43077,i__43078,map__43100,map__43100__$1,effect,ms,dispatch,seq__43075__$1,temp__5735__auto__))
,ms);
}


var G__43186 = cljs.core.next(seq__43075__$1);
var G__43187 = null;
var G__43188 = (0);
var G__43189 = (0);
seq__43075 = G__43186;
chunk__43076 = G__43187;
count__43077 = G__43188;
i__43078 = G__43189;
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
var seq__43102 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__43103 = null;
var count__43104 = (0);
var i__43105 = (0);
while(true){
if((i__43105 < count__43104)){
var event = chunk__43103.cljs$core$IIndexed$_nth$arity$2(null,i__43105);
re_frame.router.dispatch(event);


var G__43191 = seq__43102;
var G__43192 = chunk__43103;
var G__43193 = count__43104;
var G__43194 = (i__43105 + (1));
seq__43102 = G__43191;
chunk__43103 = G__43192;
count__43104 = G__43193;
i__43105 = G__43194;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43102);
if(temp__5735__auto__){
var seq__43102__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43102__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43102__$1);
var G__43196 = cljs.core.chunk_rest(seq__43102__$1);
var G__43197 = c__4556__auto__;
var G__43198 = cljs.core.count(c__4556__auto__);
var G__43199 = (0);
seq__43102 = G__43196;
chunk__43103 = G__43197;
count__43104 = G__43198;
i__43105 = G__43199;
continue;
} else {
var event = cljs.core.first(seq__43102__$1);
re_frame.router.dispatch(event);


var G__43200 = cljs.core.next(seq__43102__$1);
var G__43201 = null;
var G__43202 = (0);
var G__43203 = (0);
seq__43102 = G__43200;
chunk__43103 = G__43201;
count__43104 = G__43202;
i__43105 = G__43203;
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
var seq__43112 = cljs.core.seq(value);
var chunk__43113 = null;
var count__43114 = (0);
var i__43115 = (0);
while(true){
if((i__43115 < count__43114)){
var event = chunk__43113.cljs$core$IIndexed$_nth$arity$2(null,i__43115);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__43205 = seq__43112;
var G__43206 = chunk__43113;
var G__43207 = count__43114;
var G__43208 = (i__43115 + (1));
seq__43112 = G__43205;
chunk__43113 = G__43206;
count__43114 = G__43207;
i__43115 = G__43208;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43112);
if(temp__5735__auto__){
var seq__43112__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43112__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43112__$1);
var G__43212 = cljs.core.chunk_rest(seq__43112__$1);
var G__43213 = c__4556__auto__;
var G__43214 = cljs.core.count(c__4556__auto__);
var G__43215 = (0);
seq__43112 = G__43212;
chunk__43113 = G__43213;
count__43114 = G__43214;
i__43115 = G__43215;
continue;
} else {
var event = cljs.core.first(seq__43112__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__43216 = cljs.core.next(seq__43112__$1);
var G__43217 = null;
var G__43218 = (0);
var G__43219 = (0);
seq__43112 = G__43216;
chunk__43113 = G__43217;
count__43114 = G__43218;
i__43115 = G__43219;
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
