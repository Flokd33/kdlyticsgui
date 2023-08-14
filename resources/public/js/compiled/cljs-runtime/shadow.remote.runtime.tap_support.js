goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__36954,p__36955){
var map__36957 = p__36954;
var map__36957__$1 = cljs.core.__destructure_map(map__36957);
var svc = map__36957__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36957__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36957__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36957__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36958 = p__36955;
var map__36958__$1 = cljs.core.__destructure_map(map__36958);
var msg = map__36958__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36958__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36958__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36958__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36958__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__36968,p__36969){
var map__36970 = p__36968;
var map__36970__$1 = cljs.core.__destructure_map(map__36970);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36970__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__36971 = p__36969;
var map__36971__$1 = cljs.core.__destructure_map(map__36971);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36971__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__36977,p__36978){
var map__36980 = p__36977;
var map__36980__$1 = cljs.core.__destructure_map(map__36980);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36980__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36980__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36981 = p__36978;
var map__36981__$1 = cljs.core.__destructure_map(map__36981);
var msg = map__36981__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36981__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__36992,tid){
var map__36995 = p__36992;
var map__36995__$1 = cljs.core.__destructure_map(map__36995);
var svc = map__36995__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36995__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__37005 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__37006 = null;
var count__37007 = (0);
var i__37008 = (0);
while(true){
if((i__37008 < count__37007)){
var vec__37021 = chunk__37006.cljs$core$IIndexed$_nth$arity$2(null,i__37008);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37021,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37021,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37042 = seq__37005;
var G__37043 = chunk__37006;
var G__37044 = count__37007;
var G__37045 = (i__37008 + (1));
seq__37005 = G__37042;
chunk__37006 = G__37043;
count__37007 = G__37044;
i__37008 = G__37045;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37005);
if(temp__5804__auto__){
var seq__37005__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37005__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37005__$1);
var G__37046 = cljs.core.chunk_rest(seq__37005__$1);
var G__37047 = c__5568__auto__;
var G__37048 = cljs.core.count(c__5568__auto__);
var G__37049 = (0);
seq__37005 = G__37046;
chunk__37006 = G__37047;
count__37007 = G__37048;
i__37008 = G__37049;
continue;
} else {
var vec__37028 = cljs.core.first(seq__37005__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37028,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37028,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37050 = cljs.core.next(seq__37005__$1);
var G__37051 = null;
var G__37052 = (0);
var G__37053 = (0);
seq__37005 = G__37050;
chunk__37006 = G__37051;
count__37007 = G__37052;
i__37008 = G__37053;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__36997_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__36997_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__36998_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__36998_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__36999_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__36999_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__37000_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__37000_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__37036){
var map__37037 = p__37036;
var map__37037__$1 = cljs.core.__destructure_map(map__37037);
var svc = map__37037__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37037__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37037__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
