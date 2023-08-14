goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__33632){
var map__33633 = p__33632;
var map__33633__$1 = cljs.core.__destructure_map(map__33633);
var runtime = map__33633__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33633__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_33715 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_33715)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__33634 = runtime;
var G__33635 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_33715);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__33634,G__33635) : shadow.remote.runtime.shared.process.call(null,G__33634,G__33635));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__33636,res){
var map__33637 = p__33636;
var map__33637__$1 = cljs.core.__destructure_map(map__33637);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33637__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33637__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__33638 = res;
var G__33638__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33638,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__33638);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33638__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__33638__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__33640 = arguments.length;
switch (G__33640) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__33641,msg,handlers,timeout_after_ms){
var map__33642 = p__33641;
var map__33642__$1 = cljs.core.__destructure_map(map__33642);
var runtime = map__33642__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33642__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33725 = arguments.length;
var i__5770__auto___33726 = (0);
while(true){
if((i__5770__auto___33726 < len__5769__auto___33725)){
args__5775__auto__.push((arguments[i__5770__auto___33726]));

var G__33727 = (i__5770__auto___33726 + (1));
i__5770__auto___33726 = G__33727;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__33650,ev,args){
var map__33651 = p__33650;
var map__33651__$1 = cljs.core.__destructure_map(map__33651);
var runtime = map__33651__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33651__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__33652 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33655 = null;
var count__33656 = (0);
var i__33657 = (0);
while(true){
if((i__33657 < count__33656)){
var ext = chunk__33655.cljs$core$IIndexed$_nth$arity$2(null,i__33657);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33731 = seq__33652;
var G__33732 = chunk__33655;
var G__33733 = count__33656;
var G__33734 = (i__33657 + (1));
seq__33652 = G__33731;
chunk__33655 = G__33732;
count__33656 = G__33733;
i__33657 = G__33734;
continue;
} else {
var G__33735 = seq__33652;
var G__33736 = chunk__33655;
var G__33737 = count__33656;
var G__33738 = (i__33657 + (1));
seq__33652 = G__33735;
chunk__33655 = G__33736;
count__33656 = G__33737;
i__33657 = G__33738;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33652);
if(temp__5804__auto__){
var seq__33652__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33652__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33652__$1);
var G__33742 = cljs.core.chunk_rest(seq__33652__$1);
var G__33743 = c__5568__auto__;
var G__33744 = cljs.core.count(c__5568__auto__);
var G__33745 = (0);
seq__33652 = G__33742;
chunk__33655 = G__33743;
count__33656 = G__33744;
i__33657 = G__33745;
continue;
} else {
var ext = cljs.core.first(seq__33652__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33746 = cljs.core.next(seq__33652__$1);
var G__33747 = null;
var G__33748 = (0);
var G__33749 = (0);
seq__33652 = G__33746;
chunk__33655 = G__33747;
count__33656 = G__33748;
i__33657 = G__33749;
continue;
} else {
var G__33750 = cljs.core.next(seq__33652__$1);
var G__33751 = null;
var G__33752 = (0);
var G__33753 = (0);
seq__33652 = G__33750;
chunk__33655 = G__33751;
count__33656 = G__33752;
i__33657 = G__33753;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq33647){
var G__33648 = cljs.core.first(seq33647);
var seq33647__$1 = cljs.core.next(seq33647);
var G__33649 = cljs.core.first(seq33647__$1);
var seq33647__$2 = cljs.core.next(seq33647__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33648,G__33649,seq33647__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__33667,p__33668){
var map__33669 = p__33667;
var map__33669__$1 = cljs.core.__destructure_map(map__33669);
var runtime = map__33669__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33669__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33670 = p__33668;
var map__33670__$1 = cljs.core.__destructure_map(map__33670);
var msg = map__33670__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33670__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__33671 = cljs.core.deref(state_ref);
var map__33671__$1 = cljs.core.__destructure_map(map__33671);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33671__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33671__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__33672,msg){
var map__33673 = p__33672;
var map__33673__$1 = cljs.core.__destructure_map(map__33673);
var runtime = map__33673__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33673__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__33678,key,p__33679){
var map__33680 = p__33678;
var map__33680__$1 = cljs.core.__destructure_map(map__33680);
var state = map__33680__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33680__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__33681 = p__33679;
var map__33681__$1 = cljs.core.__destructure_map(map__33681);
var spec = map__33681__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33681__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__33682,key,spec){
var map__33683 = p__33682;
var map__33683__$1 = cljs.core.__destructure_map(map__33683);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33683__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__33684_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__33684_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__33685_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__33685_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__33686_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__33686_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__33687_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__33687_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__33688_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__33688_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__33689,key){
var map__33690 = p__33689;
var map__33690__$1 = cljs.core.__destructure_map(map__33690);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33690__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__33691,msg){
var map__33692 = p__33691;
var map__33692__$1 = cljs.core.__destructure_map(map__33692);
var runtime = map__33692__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33692__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__33693,p__33694){
var map__33695 = p__33693;
var map__33695__$1 = cljs.core.__destructure_map(map__33695);
var runtime = map__33695__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33695__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33696 = p__33694;
var map__33696__$1 = cljs.core.__destructure_map(map__33696);
var msg = map__33696__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33696__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33696__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__33697 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33699 = null;
var count__33700 = (0);
var i__33701 = (0);
while(true){
if((i__33701 < count__33700)){
var map__33707 = chunk__33699.cljs$core$IIndexed$_nth$arity$2(null,i__33701);
var map__33707__$1 = cljs.core.__destructure_map(map__33707);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33707__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33759 = seq__33697;
var G__33760 = chunk__33699;
var G__33761 = count__33700;
var G__33762 = (i__33701 + (1));
seq__33697 = G__33759;
chunk__33699 = G__33760;
count__33700 = G__33761;
i__33701 = G__33762;
continue;
} else {
var G__33763 = seq__33697;
var G__33764 = chunk__33699;
var G__33765 = count__33700;
var G__33766 = (i__33701 + (1));
seq__33697 = G__33763;
chunk__33699 = G__33764;
count__33700 = G__33765;
i__33701 = G__33766;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33697);
if(temp__5804__auto__){
var seq__33697__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33697__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33697__$1);
var G__33767 = cljs.core.chunk_rest(seq__33697__$1);
var G__33768 = c__5568__auto__;
var G__33769 = cljs.core.count(c__5568__auto__);
var G__33770 = (0);
seq__33697 = G__33767;
chunk__33699 = G__33768;
count__33700 = G__33769;
i__33701 = G__33770;
continue;
} else {
var map__33708 = cljs.core.first(seq__33697__$1);
var map__33708__$1 = cljs.core.__destructure_map(map__33708);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33708__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33771 = cljs.core.next(seq__33697__$1);
var G__33772 = null;
var G__33773 = (0);
var G__33774 = (0);
seq__33697 = G__33771;
chunk__33699 = G__33772;
count__33700 = G__33773;
i__33701 = G__33774;
continue;
} else {
var G__33775 = cljs.core.next(seq__33697__$1);
var G__33776 = null;
var G__33777 = (0);
var G__33778 = (0);
seq__33697 = G__33775;
chunk__33699 = G__33776;
count__33700 = G__33777;
i__33701 = G__33778;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
