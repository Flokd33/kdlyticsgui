goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('taoensso.timbre');
goog.require('taoensso.sente.interfaces');
if(cljs.core.vector_QMARK_(taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(79),(1)], null));
} else {
taoensso.encore.assert_min_encore_version(2.79);
}
/**
 * Useful for identifying client/server mismatch
 */
taoensso.sente.sente_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(11),(0)], null);
taoensso.sente.node_target_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs");
if((typeof taoensso !== 'undefined') && (typeof taoensso.sente !== 'undefined') && (typeof taoensso.sente.debug_mode_QMARK__ !== 'undefined')){
} else {
taoensso.sente.debug_mode_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
taoensso.sente.expected = (function taoensso$sente$expected(expected,x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expected","expected",1583670997),expected,new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x),new cljs.core.Keyword(null,"value","value",305978217),x], null)], null);
});
/**
 * Returns nil if given argument is a valid [ev-id ?ev-data] form. Otherwise
 *   returns a map of validation errors like `{:wrong-type {:expected _ :actual _}}`.
 */
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if((!(cljs.core.vector_QMARK_(x)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915),taoensso.sente.expected(new cljs.core.Keyword(null,"vector","vector",1902966158),x)], null);
} else {
if(cljs.core.not((function (){var G__62004 = cljs.core.count(x);
var fexpr__62003 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null);
return (fexpr__62003.cljs$core$IFn$_invoke$arity$1 ? fexpr__62003.cljs$core$IFn$_invoke$arity$1(G__62004) : fexpr__62003.call(null,G__62004));
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281),taoensso.sente.expected(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),x)], null);
} else {
var vec__62005 = x;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62005,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62005,(1),null);
if((!((ev_id instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689),taoensso.sente.expected(new cljs.core.Keyword(null,"keyword","keyword",811389747),ev_id)], null);
} else {
if(cljs.core.not(cljs.core.namespace(ev_id))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772),taoensso.sente.expected(new cljs.core.Keyword(null,"namespaced-keyword","namespaced-keyword",131372895),ev_id)], null);
} else {
return null;

}
}

}
}
});
/**
 * Returns given argument if it is a valid [ev-id ?ev-data] form. Otherwise
 *   throws a validation exception.
 */
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__5735__auto__ = taoensso.sente.validate_event(x);
if(cljs.core.truth_(temp__5735__auto__)){
var errs = temp__5735__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"errors","errors",-908790718),errs], null));
} else {
return null;
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event(x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
var temp__5733__auto__ = taoensso.sente.validate_event(x);
if(cljs.core.truth_(temp__5733__auto__)){
var errs = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
} else {
return x;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
if(cljs.core.map_QMARK_(x)){
if(taoensso.encore.ks_EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x)){
var map__62012 = x;
var map__62012__$1 = (((((!((map__62012 == null))))?(((((map__62012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62012):map__62012);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62012__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62012__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62012__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62012__$1,new cljs.core.Keyword(null,"event","event",301435442));
return ((taoensso.encore.chan_QMARK_(ch_recv)) && (cljs.core.ifn_QMARK_(send_fn)) && (taoensso.encore.atom_QMARK_(state)) && (taoensso.sente.event_QMARK_(event)));
} else {
return false;
}
} else {
return false;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
if(cljs.core.map_QMARK_(x)){
if(taoensso.encore.ks_EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x)){
var map__62018 = x;
var map__62018__$1 = (((((!((map__62018 == null))))?(((((map__62018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62018):map__62018);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62018__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62018__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62018__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62018__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62018__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62018__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62018__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
return ((taoensso.encore.chan_QMARK_(ch_recv)) && (cljs.core.ifn_QMARK_(send_fn)) && (taoensso.encore.atom_QMARK_(connected_uids)) && (cljs.core.map_QMARK_(ring_req)) && (taoensso.encore.nblank_str_QMARK_(client_id)) && (taoensso.sente.event_QMARK_(event)) && ((((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_(_QMARK_reply_fn)))));
} else {
return false;
}
} else {
return false;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__62020){
var map__62021 = p__62020;
var map__62021__$1 = (((((!((map__62021 == null))))?(((((map__62021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62021):map__62021);
var ev_msg = map__62021__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62021__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62021__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__62023 = taoensso.sente.as_event(event);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62023,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62023,(1),null);
var valid_event = vec__62023;
var ev_msg_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null)], 0));
if((!(taoensso.sente.server_event_msg_QMARK_(ev_msg_STAR_)))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
}),null)),null,1578393105);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
var fexpr__62026 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null);
return (fexpr__62026.cljs$core$IFn$_invoke$arity$1 ? fexpr__62026.cljs$core$IFn$_invoke$arity$1(cb_reply_clj) : fexpr__62026.call(null,cb_reply_clj));
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not(taoensso.sente.cb_error_QMARK_(cb_reply_clj));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
if(typeof prefixed_pstr === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",201,"(string? prefixed-pstr)",prefixed_pstr,null,null);
}

var wrapped_QMARK_ = taoensso.encore.str_starts_with_QMARK_(prefixed_pstr,"+");
var pstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(prefixed_pstr,(1));
var clj = (function (){try{return taoensso.sente.interfaces.unpack(packer,pstr);
}catch (e62030){var t = e62030;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,208,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
}),null)),null,586937024);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}})();
var vec__62027 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62027,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62027,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,214,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
}),null)),null,1349014868);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var G__62032 = arguments.length;
switch (G__62032) {
case 2:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2 = (function (packer,clj){
var pstr = ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack(packer,clj))].join('');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,221,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",clj,pstr], null);
}),null)),null,1231909582);

return pstr;
}));

(taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = ["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack(packer,wrapped_clj))].join('');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,230,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",wrapped_clj,pstr], null);
}),null)),null,-624575292);

return pstr;
}));

(taoensso.sente.pack.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.EdnPacker = (function (){
});
(taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1(x);
}));

(taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1(s);
}));

(taoensso.sente.EdnPacker.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.sente.EdnPacker.cljs$lang$type = true);

(taoensso.sente.EdnPacker.cljs$lang$ctorStr = "taoensso.sente/EdnPacker");

(taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"taoensso.sente/EdnPacker");
}));

/**
 * Positional factory function for taoensso.sente/EdnPacker.
 */
taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"edn","edn",1317840885))){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if((function (){var fexpr__62036 = (function (p1__62033_SHARP_){
if((!((p1__62033_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__62033_SHARP_.taoensso$sente$interfaces$IPacker$)))){
return true;
} else {
if((!p1__62033_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__62033_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__62033_SHARP_);
}
});
return fexpr__62036(x);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e62034){if((e62034 instanceof Error)){
var e = e62034;
return e;
} else {
throw e62034;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",243,"((fn* [p1__62033#] (satisfies? interfaces/IPacker p1__62033#)) x)",x,e,null);
}
}
});
taoensso.sente.next_idx_BANG_ = taoensso.encore.idx_fn();


/**
 * Takes a web server adapter[1] and returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; (fn [ring-req]) for Ring CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; (fn [ring-req]) for Ring GET + chsk URL.
 *  :connected-uids ; Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Common options:
 *  :user-id-fn        ; (fn [ring-req]) -> unique user-id for server>user push.
 *  :csrf-token-fn     ; (fn [ring-req]) -> CSRF token for Ajax POSTs.
 *  :handshake-data-fn ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :ws-kalive-ms      ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to client's :ws-kalive-ms.
 *  :lp-timeout-ms     ; Timeout (repoll) long-polling Ajax conns after given msecs.
 *  :send-buf-ms-ajax  ; [2]
 *  :send-buf-ms-ws    ; [2]
 *  :packer            ; :edn (default), or an IPacker implementation.
 * 
 *   [1] e.g. `(taoensso.sente.server-adapters.http-kit/get-sch-adapter)` or
 *         `(taoensso.sente.server-adapters.immutant/get-sch-adapter)`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___62893 = arguments.length;
var i__4737__auto___62894 = (0);
while(true){
if((i__4737__auto___62894 < len__4736__auto___62893)){
args__4742__auto__.push((arguments[i__4737__auto___62894]));

var G__62895 = (i__4737__auto___62894 + (1));
i__4737__auto___62894 = G__62895;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__62041){
var vec__62042 = p__62041;
var map__62045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62042,(0),null);
var map__62045__$1 = (((((!((map__62045 == null))))?(((((map__62045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62045):map__62045);
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62045__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(25)], 0)));
var send_buf_ms_ws = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62045__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var lp_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62045__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(20)], 0)));
var csrf_token_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62045__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),(function (ring_req){
var or__4126__auto__ = new cljs.core.Keyword(null,"anti-forgery-token","anti-forgery-token",806990841).cljs$core$IFn$_invoke$arity$1(ring_req);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
}
}));
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62045__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var send_buf_ms_ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62045__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var handshake_data_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62045__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),(function (ring_req){
return null;
}));
var user_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62045__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),(function (ring_req){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
}));
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62045__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer((1000)));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e62047){if((e62047 instanceof Error)){
var e = e62047;
return e;
} else {
throw e62047;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",314,"(enc/pos-int? send-buf-ms-ajax)",send_buf_ms_ajax,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ws)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e62048){if((e62048 instanceof Error)){
var e = e62048;
return e;
} else {
throw e62048;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",314,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_62897 = (function (){try{if((function (){var fexpr__62051 = (function (p1__62038_SHARP_){
if((!((p1__62038_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__62038_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)))){
return true;
} else {
if((!p1__62038_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__62038_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__62038_SHARP_);
}
});
return fexpr__62051(web_server_ch_adapter);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e62049){if((e62049 instanceof Error)){
var e_62897 = e62049;
return e_62897;
} else {
throw e62049;

}
}})();
if((e_62897 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",315,"((fn* [p1__62038#] (satisfies? interfaces/IServerChanAdapter p1__62038#)) web-server-ch-adapter)",web_server_ch_adapter,e_62897,null);
}

var max_ms_62898 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_62898)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":lp-timeout-ms must be < ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_ms_62898)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_62898], null));
} else {
}

var packer__$1 = taoensso.sente.coerce_packer(packer);
var ch_recv = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(recv_buf_or_n);
var user_id_fn__$1 = (function (ring_req,client_id){
var or__4126__auto__ = (function (){var G__62054 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);
return (user_id_fn.cljs$core$IFn$_invoke$arity$1 ? user_id_fn.cljs$core$IFn$_invoke$arity$1(G__62054) : user_id_fn.call(null,G__62054));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});
var conns_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = (function() {
var G__62899 = null;
var G__62899__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),(function (_QMARK_v){
var vec__62055 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62055,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62055,(1),null);
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),_QMARK_sch], null));
}));
});
var G__62899__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),(function (_QMARK_v){
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),new__QMARK_sch], null));
}));
});
G__62899 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__62899__3.call(this,conn_type,uid,client_id);
case 4:
return G__62899__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__62899.cljs$core$IFn$_invoke$arity$3 = G__62899__3;
G__62899.cljs$core$IFn$_invoke$arity$4 = G__62899__4;
return G__62899;
})()
;
var connect_uid_BANG_ = (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e62058){if((e62058 instanceof Error)){
var e = e62058;
return e;
} else {
throw e62058;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",359,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,(function (p__62059){
var map__62060 = p__62059;
var map__62060__$1 = (((((!((map__62060 == null))))?(((((map__62060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62060):map__62060);
var old_m = map__62060__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62060__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62060__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62060__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__62062 = conn_type;
var G__62062__$1 = (((G__62062 instanceof cljs.core.Keyword))?G__62062.fqn:null);
switch (G__62062__$1) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62062__$1)].join('')));

}
})();
return taoensso.encore.swapped(new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((((!(cljs.core.contains_QMARK_(old_any,uid)))) && (cljs.core.contains_QMARK_(new_any,uid)))){
return new cljs.core.Keyword(null,"newly-connected","newly-connected",-2029862681);
} else {
return null;
}
})());
}));
return newly_connected_QMARK_;
});
var upd_connected_uid_BANG_ = (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e62063){if((e62063 instanceof Error)){
var e = e62063;
return e;
} else {
throw e62063;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",376,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,(function (p__62064){
var map__62065 = p__62064;
var map__62065__$1 = (((((!((map__62065 == null))))?(((((map__62065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62065):map__62065);
var old_m = map__62065__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62065__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62065__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62065__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var conns_SINGLEQUOTE_ = cljs.core.deref(conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"ajax","ajax",814345549).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = ((any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_));
var new_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),((any_ws_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ws,uid)),new cljs.core.Keyword(null,"ajax","ajax",814345549),((any_ajax_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ajax,uid)),new cljs.core.Keyword(null,"any","any",1705907423),((any_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(any,uid))], null);
return taoensso.encore.swapped(new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if(((cljs.core.contains_QMARK_(old_any,uid)) && ((!(cljs.core.contains_QMARK_(new_any,uid)))))){
return new cljs.core.Keyword(null,"newly-disconnected","newly-disconnected",-1586164962);
} else {
return null;
}
})());
}));
return newly_disconnected_QMARK_;
});
var send_fn = (function() { 
var G__62908__delegate = function (user_id,ev,p__62067){
var vec__62068 = p__62067;
var map__62071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62068,(0),null);
var map__62071__$1 = (((((!((map__62071 == null))))?(((((map__62071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62071):map__62071);
var opts = map__62071__$1;
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62071__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_62909 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __62910 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,402,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_62909,ev], null);
}),null)),null,1102592232);
var __62911__$1 = (cljs.core.truth_(uid_62909)?null:(function(){throw (new Error(["Assert failed: ",["Support for sending to `nil` user-ids has been REMOVED. ","Please send to `:sente/all-users-without-uid` instead."].join(''),"\n","uid"].join('')))})());
var __62912__$2 = taoensso.sente.assert_event(ev);
var ev_uuid_62913 = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var flush_buffer_BANG__62914 = (function (conn_type){
var temp__5735__auto__ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),(function (m){
var vec__62073 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_62909);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62073,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62073,(1),null);
if(cljs.core.contains_QMARK_(ev_uuids,ev_uuid_62913)){
return taoensso.encore.swapped(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,uid_62909),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_62909));
} else {
return taoensso.encore.swapped(m,null);
}
}));
if(cljs.core.truth_(temp__5735__auto__)){
var pulled = temp__5735__auto__;
var vec__62076 = pulled;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62076,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62076,(1),null);
if(cljs.core.vector_QMARK_(buffered_evs)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",429,"(vector? buffered-evs)",buffered_evs,null,null);
}

if(cljs.core.set_QMARK_(ev_uuids)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",430,"(set? ev-uuids)",ev_uuids,null,null);
}

var buffered_evs_ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,buffered_evs);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,433,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s",buffered_evs_ppstr], null);
}),null)),null,-2137596303);

var G__62079 = conn_type;
var G__62079__$1 = (((G__62079 instanceof cljs.core.Keyword))?G__62079.fqn:null);
switch (G__62079__$1) {
case "ws":
return (taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4 ? taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4(conns_,uid_62909,buffered_evs_ppstr,upd_conn_BANG_) : taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_62909,buffered_evs_ppstr,upd_conn_BANG_));

break;
case "ajax":
return (taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,uid_62909,buffered_evs_ppstr) : taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_62909,buffered_evs_ppstr));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62079__$1)].join('')));

}
} else {
return null;
}
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,442,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_62909], null);
}),null)),null,1455992364);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__62914(new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__62914(new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__62080_62925 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_62909], null))));
var chunk__62081_62926 = null;
var count__62082_62927 = (0);
var i__62083_62928 = (0);
while(true){
if((i__62083_62928 < count__62082_62927)){
var vec__62090_62929 = chunk__62081_62926.cljs$core$IIndexed$_nth$arity$2(null,i__62083_62928);
var _QMARK_sch_62930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62090_62929,(0),null);
var _udt_62931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62090_62929,(1),null);
var temp__5735__auto___62932 = _QMARK_sch_62930;
if(cljs.core.truth_(temp__5735__auto___62932)){
var sch_62933 = temp__5735__auto___62932;
taoensso.sente.interfaces.sch_close_BANG_(sch_62933);
} else {
}


var G__62934 = seq__62080_62925;
var G__62935 = chunk__62081_62926;
var G__62936 = count__62082_62927;
var G__62937 = (i__62083_62928 + (1));
seq__62080_62925 = G__62934;
chunk__62081_62926 = G__62935;
count__62082_62927 = G__62936;
i__62083_62928 = G__62937;
continue;
} else {
var temp__5735__auto___62938 = cljs.core.seq(seq__62080_62925);
if(temp__5735__auto___62938){
var seq__62080_62939__$1 = temp__5735__auto___62938;
if(cljs.core.chunked_seq_QMARK_(seq__62080_62939__$1)){
var c__4556__auto___62940 = cljs.core.chunk_first(seq__62080_62939__$1);
var G__62941 = cljs.core.chunk_rest(seq__62080_62939__$1);
var G__62942 = c__4556__auto___62940;
var G__62943 = cljs.core.count(c__4556__auto___62940);
var G__62944 = (0);
seq__62080_62925 = G__62941;
chunk__62081_62926 = G__62942;
count__62082_62927 = G__62943;
i__62083_62928 = G__62944;
continue;
} else {
var vec__62093_62945 = cljs.core.first(seq__62080_62939__$1);
var _QMARK_sch_62946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62093_62945,(0),null);
var _udt_62947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62093_62945,(1),null);
var temp__5735__auto___62948__$1 = _QMARK_sch_62946;
if(cljs.core.truth_(temp__5735__auto___62948__$1)){
var sch_62949 = temp__5735__auto___62948__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_62949);
} else {
}


var G__62950 = cljs.core.next(seq__62080_62939__$1);
var G__62951 = null;
var G__62952 = (0);
var G__62953 = (0);
seq__62080_62925 = G__62950;
chunk__62081_62926 = G__62951;
count__62082_62927 = G__62952;
i__62083_62928 = G__62953;
continue;
}
} else {
}
}
break;
}

var seq__62096_62954 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_62909], null))));
var chunk__62097_62955 = null;
var count__62098_62956 = (0);
var i__62099_62957 = (0);
while(true){
if((i__62099_62957 < count__62098_62956)){
var vec__62106_62958 = chunk__62097_62955.cljs$core$IIndexed$_nth$arity$2(null,i__62099_62957);
var _QMARK_sch_62959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62106_62958,(0),null);
var _udt_62960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62106_62958,(1),null);
var temp__5735__auto___62962 = _QMARK_sch_62959;
if(cljs.core.truth_(temp__5735__auto___62962)){
var sch_62963 = temp__5735__auto___62962;
taoensso.sente.interfaces.sch_close_BANG_(sch_62963);
} else {
}


var G__62964 = seq__62096_62954;
var G__62965 = chunk__62097_62955;
var G__62966 = count__62098_62956;
var G__62967 = (i__62099_62957 + (1));
seq__62096_62954 = G__62964;
chunk__62097_62955 = G__62965;
count__62098_62956 = G__62966;
i__62099_62957 = G__62967;
continue;
} else {
var temp__5735__auto___62968 = cljs.core.seq(seq__62096_62954);
if(temp__5735__auto___62968){
var seq__62096_62969__$1 = temp__5735__auto___62968;
if(cljs.core.chunked_seq_QMARK_(seq__62096_62969__$1)){
var c__4556__auto___62970 = cljs.core.chunk_first(seq__62096_62969__$1);
var G__62971 = cljs.core.chunk_rest(seq__62096_62969__$1);
var G__62972 = c__4556__auto___62970;
var G__62973 = cljs.core.count(c__4556__auto___62970);
var G__62974 = (0);
seq__62096_62954 = G__62971;
chunk__62097_62955 = G__62972;
count__62098_62956 = G__62973;
i__62099_62957 = G__62974;
continue;
} else {
var vec__62109_62979 = cljs.core.first(seq__62096_62969__$1);
var _QMARK_sch_62980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62109_62979,(0),null);
var _udt_62981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62109_62979,(1),null);
var temp__5735__auto___62982__$1 = _QMARK_sch_62980;
if(cljs.core.truth_(temp__5735__auto___62982__$1)){
var sch_62983 = temp__5735__auto___62982__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_62983);
} else {
}


var G__62984 = cljs.core.next(seq__62096_62969__$1);
var G__62985 = null;
var G__62986 = (0);
var G__62987 = (0);
seq__62096_62954 = G__62984;
chunk__62097_62955 = G__62985;
count__62098_62956 = G__62986;
i__62099_62957 = G__62987;
continue;
}
} else {
}
}
break;
}
} else {
var seq__62112_62988 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__62113_62989 = null;
var count__62114_62990 = (0);
var i__62115_62991 = (0);
while(true){
if((i__62115_62991 < count__62114_62990)){
var conn_type_62992 = chunk__62113_62989.cljs$core$IIndexed$_nth$arity$2(null,i__62115_62991);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_62992,uid_62909], null),((function (seq__62112_62988,chunk__62113_62989,count__62114_62990,i__62115_62991,conn_type_62992,uid_62909,__62910,__62911__$1,__62912__$2,ev_uuid_62913,flush_buffer_BANG__62914,vec__62068,map__62071,map__62071__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__62042,map__62045,map__62045__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_62913])], null);
} else {
var vec__62122 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62122,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62122,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_62913)], null);
}
});})(seq__62112_62988,chunk__62113_62989,count__62114_62990,i__62115_62991,conn_type_62992,uid_62909,__62910,__62911__$1,__62912__$2,ev_uuid_62913,flush_buffer_BANG__62914,vec__62068,map__62071,map__62071__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__62042,map__62045,map__62045__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);


var G__62993 = seq__62112_62988;
var G__62994 = chunk__62113_62989;
var G__62995 = count__62114_62990;
var G__62996 = (i__62115_62991 + (1));
seq__62112_62988 = G__62993;
chunk__62113_62989 = G__62994;
count__62114_62990 = G__62995;
i__62115_62991 = G__62996;
continue;
} else {
var temp__5735__auto___62999 = cljs.core.seq(seq__62112_62988);
if(temp__5735__auto___62999){
var seq__62112_63000__$1 = temp__5735__auto___62999;
if(cljs.core.chunked_seq_QMARK_(seq__62112_63000__$1)){
var c__4556__auto___63001 = cljs.core.chunk_first(seq__62112_63000__$1);
var G__63002 = cljs.core.chunk_rest(seq__62112_63000__$1);
var G__63003 = c__4556__auto___63001;
var G__63004 = cljs.core.count(c__4556__auto___63001);
var G__63005 = (0);
seq__62112_62988 = G__63002;
chunk__62113_62989 = G__63003;
count__62114_62990 = G__63004;
i__62115_62991 = G__63005;
continue;
} else {
var conn_type_63006 = cljs.core.first(seq__62112_63000__$1);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_63006,uid_62909], null),((function (seq__62112_62988,chunk__62113_62989,count__62114_62990,i__62115_62991,conn_type_63006,seq__62112_63000__$1,temp__5735__auto___62999,uid_62909,__62910,__62911__$1,__62912__$2,ev_uuid_62913,flush_buffer_BANG__62914,vec__62068,map__62071,map__62071__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__62042,map__62045,map__62045__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_62913])], null);
} else {
var vec__62125 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62125,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62125,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_62913)], null);
}
});})(seq__62112_62988,chunk__62113_62989,count__62114_62990,i__62115_62991,conn_type_63006,seq__62112_63000__$1,temp__5735__auto___62999,uid_62909,__62910,__62911__$1,__62912__$2,ev_uuid_62913,flush_buffer_BANG__62914,vec__62068,map__62071,map__62071__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__62042,map__62045,map__62045__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);


var G__63013 = cljs.core.next(seq__62112_63000__$1);
var G__63014 = null;
var G__63015 = (0);
var G__63016 = (0);
seq__62112_62988 = G__63013;
chunk__62113_62989 = G__63014;
count__62114_62990 = G__63015;
i__62115_62991 = G__63016;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__62914(new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__62914(new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_63019 = cljs.core.async.timeout(send_buf_ms_ws);
var ajax_timeout_63020 = cljs.core.async.timeout(send_buf_ms_ajax);
var c__49511__auto___63021 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49512__auto__ = (function (){var switch__49410__auto__ = (function (state_62132){
var state_val_62133 = (state_62132[(1)]);
if((state_val_62133 === (1))){
var state_62132__$1 = state_62132;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62132__$1,(2),ws_timeout_63019);
} else {
if((state_val_62133 === (2))){
var inst_62129 = (state_62132[(2)]);
var inst_62130 = flush_buffer_BANG__62914(new cljs.core.Keyword(null,"ws","ws",86841443));
var state_62132__$1 = (function (){var statearr_62134 = state_62132;
(statearr_62134[(7)] = inst_62129);

return statearr_62134;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_62132__$1,inst_62130);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__49411__auto__ = null;
var taoensso$sente$state_machine__49411__auto____0 = (function (){
var statearr_62135 = [null,null,null,null,null,null,null,null];
(statearr_62135[(0)] = taoensso$sente$state_machine__49411__auto__);

(statearr_62135[(1)] = (1));

return statearr_62135;
});
var taoensso$sente$state_machine__49411__auto____1 = (function (state_62132){
while(true){
var ret_value__49412__auto__ = (function (){try{while(true){
var result__49413__auto__ = switch__49410__auto__(state_62132);
if(cljs.core.keyword_identical_QMARK_(result__49413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49413__auto__;
}
break;
}
}catch (e62136){if((e62136 instanceof Object)){
var ex__49414__auto__ = e62136;
var statearr_62137_63025 = state_62132;
(statearr_62137_63025[(5)] = ex__49414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62136;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63030 = state_62132;
state_62132 = G__63030;
continue;
} else {
return ret_value__49412__auto__;
}
break;
}
});
taoensso$sente$state_machine__49411__auto__ = function(state_62132){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__49411__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__49411__auto____1.call(this,state_62132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__49411__auto____0;
taoensso$sente$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__49411__auto____1;
return taoensso$sente$state_machine__49411__auto__;
})()
})();
var state__49513__auto__ = (function (){var statearr_62138 = (f__49512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49512__auto__.cljs$core$IFn$_invoke$arity$0() : f__49512__auto__.call(null));
(statearr_62138[(6)] = c__49511__auto___63021);

return statearr_62138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49513__auto__);
}));


var c__49511__auto___63031 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49512__auto__ = (function (){var switch__49410__auto__ = (function (state_62143){
var state_val_62144 = (state_62143[(1)]);
if((state_val_62144 === (1))){
var state_62143__$1 = state_62143;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62143__$1,(2),ajax_timeout_63020);
} else {
if((state_val_62144 === (2))){
var inst_62140 = (state_62143[(2)]);
var inst_62141 = flush_buffer_BANG__62914(new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_62143__$1 = (function (){var statearr_62145 = state_62143;
(statearr_62145[(7)] = inst_62140);

return statearr_62145;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_62143__$1,inst_62141);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__49411__auto__ = null;
var taoensso$sente$state_machine__49411__auto____0 = (function (){
var statearr_62146 = [null,null,null,null,null,null,null,null];
(statearr_62146[(0)] = taoensso$sente$state_machine__49411__auto__);

(statearr_62146[(1)] = (1));

return statearr_62146;
});
var taoensso$sente$state_machine__49411__auto____1 = (function (state_62143){
while(true){
var ret_value__49412__auto__ = (function (){try{while(true){
var result__49413__auto__ = switch__49410__auto__(state_62143);
if(cljs.core.keyword_identical_QMARK_(result__49413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49413__auto__;
}
break;
}
}catch (e62147){if((e62147 instanceof Object)){
var ex__49414__auto__ = e62147;
var statearr_62148_63032 = state_62143;
(statearr_62148_63032[(5)] = ex__49414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62147;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63034 = state_62143;
state_62143 = G__63034;
continue;
} else {
return ret_value__49412__auto__;
}
break;
}
});
taoensso$sente$state_machine__49411__auto__ = function(state_62143){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__49411__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__49411__auto____1.call(this,state_62143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__49411__auto____0;
taoensso$sente$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__49411__auto____1;
return taoensso$sente$state_machine__49411__auto__;
})()
})();
var state__49513__auto__ = (function (){var statearr_62149 = (f__49512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49512__auto__.cljs$core$IFn$_invoke$arity$0() : f__49512__auto__.call(null));
(statearr_62149[(6)] = c__49511__auto___63031);

return statearr_62149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49513__auto__);
}));

}
}

return null;
};
var G__62908 = function (user_id,ev,var_args){
var p__62067 = null;
if (arguments.length > 2) {
var G__63035__i = 0, G__63035__a = new Array(arguments.length -  2);
while (G__63035__i < G__63035__a.length) {G__63035__a[G__63035__i] = arguments[G__63035__i + 2]; ++G__63035__i;}
  p__62067 = new cljs.core.IndexedSeq(G__63035__a,0,null);
} 
return G__62908__delegate.call(this,user_id,ev,p__62067);};
G__62908.cljs$lang$maxFixedArity = 2;
G__62908.cljs$lang$applyTo = (function (arglist__63036){
var user_id = cljs.core.first(arglist__63036);
arglist__63036 = cljs.core.next(arglist__63036);
var ev = cljs.core.first(arglist__63036);
var p__62067 = cljs.core.rest(arglist__63036);
return G__62908__delegate(user_id,ev,p__62067);
});
G__62908.cljs$core$IFn$_invoke$arity$variadic = G__62908__delegate;
return G__62908;
})()
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),(function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),(function (server_ch,websocket_QMARK_){
if(cljs.core.not(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__62150 = taoensso.sente.unpack(packer__$1,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62150,(0),null);
var has_cb_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62150,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (resp_clj){
if(cljs.core.compare_and_set_BANG_(replied_QMARK__,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,511,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
}),null)),null,-240654169);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,resp_clj));
} else {
return null;
}
});
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1(ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)], 0)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__5735__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5735__auto__)){
var ms = temp__5735__auto__;
var c__49511__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49512__auto__ = (function (){var switch__49410__auto__ = (function (state_62158){
var state_val_62159 = (state_62158[(1)]);
if((state_val_62159 === (1))){
var inst_62153 = cljs.core.async.timeout(ms);
var state_62158__$1 = state_62158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62158__$1,(2),inst_62153);
} else {
if((state_val_62159 === (2))){
var inst_62155 = (state_62158[(2)]);
var inst_62156 = (function (){var G__62160 = new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489);
return (reply_fn.cljs$core$IFn$_invoke$arity$1 ? reply_fn.cljs$core$IFn$_invoke$arity$1(G__62160) : reply_fn.call(null,G__62160));
})();
var state_62158__$1 = (function (){var statearr_62161 = state_62158;
(statearr_62161[(7)] = inst_62155);

return statearr_62161;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_62158__$1,inst_62156);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__49411__auto__ = null;
var taoensso$sente$state_machine__49411__auto____0 = (function (){
var statearr_62162 = [null,null,null,null,null,null,null,null];
(statearr_62162[(0)] = taoensso$sente$state_machine__49411__auto__);

(statearr_62162[(1)] = (1));

return statearr_62162;
});
var taoensso$sente$state_machine__49411__auto____1 = (function (state_62158){
while(true){
var ret_value__49412__auto__ = (function (){try{while(true){
var result__49413__auto__ = switch__49410__auto__(state_62158);
if(cljs.core.keyword_identical_QMARK_(result__49413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49413__auto__;
}
break;
}
}catch (e62163){if((e62163 instanceof Object)){
var ex__49414__auto__ = e62163;
var statearr_62164_63055 = state_62158;
(statearr_62164_63055[(5)] = ex__49414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62163;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63060 = state_62158;
state_62158 = G__63060;
continue;
} else {
return ret_value__49412__auto__;
}
break;
}
});
taoensso$sente$state_machine__49411__auto__ = function(state_62158){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__49411__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__49411__auto____1.call(this,state_62158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__49411__auto____0;
taoensso$sente$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__49411__auto____1;
return taoensso$sente$state_machine__49411__auto__;
})()
})();
var state__49513__auto__ = (function (){var statearr_62165 = (f__49512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49512__auto__.cljs$core$IFn$_invoke$arity$0() : f__49512__auto__.call(null));
(statearr_62165[(6)] = c__49511__auto__);

return statearr_62165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49513__auto__);
}));

return c__49511__auto__;
} else {
return null;
}
} else {
var G__62166 = new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337);
return (reply_fn.cljs$core$IFn$_invoke$arity$1 ? reply_fn.cljs$core$IFn$_invoke$arity$1(G__62166) : reply_fn.call(null,G__62166));
}
})], null));
}),new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),(function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var csrf_token = (csrf_token_fn.cljs$core$IFn$_invoke$arity$1 ? csrf_token_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : csrf_token_fn.call(null,ring_req));
var uid = user_id_fn__$1(ring_req,client_id);
var receive_event_msg_BANG_ = (function() {
var taoensso$sente$self = null;
var taoensso$sente$self__1 = (function (event){
return taoensso$sente$self.cljs$core$IFn$_invoke$arity$2(event,null);
});
var taoensso$sente$self__2 = (function (event,_QMARK_reply_fn){
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)], 0)));
});
taoensso$sente$self = function(event,_QMARK_reply_fn){
switch(arguments.length){
case 1:
return taoensso$sente$self__1.call(this,event);
case 2:
return taoensso$sente$self__2.call(this,event,_QMARK_reply_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$self.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$self__1;
taoensso$sente$self.cljs$core$IFn$_invoke$arity$2 = taoensso$sente$self__2;
return taoensso$sente$self;
})()
;
var send_handshake_BANG_ = (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,556,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
}),null)),null,1769384517);

var _QMARK_handshake_data = (handshake_data_fn.cljs$core$IFn$_invoke$arity$1 ? handshake_data_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : handshake_data_fn.call(null,ring_req));
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,handshake_ev));
});
if(clojure.string.blank_QMARK_(client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,567,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[err_msg,": %s"].join(''),ring_req], null);
}),null)),null,-1974056971);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),(function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,576,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
}),null)),null,-1841749191);
var updated_conn = upd_conn_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(connect_uid_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

send_handshake_BANG_(server_ch,websocket_QMARK_);

var temp__5735__auto__ = ws_kalive_ms;
if(cljs.core.truth_(temp__5735__auto__)){
var ms = temp__5735__auto__;
var c__49511__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49512__auto__ = (function (){var switch__49410__auto__ = (function (state_62202){
var state_val_62203 = (state_62202[(1)]);
if((state_val_62203 === (7))){
var inst_62198 = (state_62202[(2)]);
var state_62202__$1 = state_62202;
var statearr_62204_63067 = state_62202__$1;
(statearr_62204_63067[(2)] = inst_62198);

(statearr_62204_63067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62203 === (1))){
var inst_62167 = udt_open;
var state_62202__$1 = (function (){var statearr_62205 = state_62202;
(statearr_62205[(7)] = inst_62167);

return statearr_62205;
})();
var statearr_62206_63069 = state_62202__$1;
(statearr_62206_63069[(2)] = null);

(statearr_62206_63069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62203 === (4))){
var inst_62176 = (state_62202[(8)]);
var inst_62171 = (state_62202[(2)]);
var inst_62172 = cljs.core.deref(conns_);
var inst_62173 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62174 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_62175 = (new cljs.core.PersistentVector(null,3,(5),inst_62173,inst_62174,null));
var inst_62176__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_62172,inst_62175);
var state_62202__$1 = (function (){var statearr_62207 = state_62202;
(statearr_62207[(9)] = inst_62171);

(statearr_62207[(8)] = inst_62176__$1);

return statearr_62207;
})();
if(cljs.core.truth_(inst_62176__$1)){
var statearr_62208_63076 = state_62202__$1;
(statearr_62208_63076[(1)] = (5));

} else {
var statearr_62209_63077 = state_62202__$1;
(statearr_62209_63077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62203 === (13))){
var inst_62182 = (state_62202[(10)]);
var inst_62191 = (state_62202[(2)]);
var inst_62167 = inst_62182;
var state_62202__$1 = (function (){var statearr_62210 = state_62202;
(statearr_62210[(7)] = inst_62167);

(statearr_62210[(11)] = inst_62191);

return statearr_62210;
})();
var statearr_62211_63078 = state_62202__$1;
(statearr_62211_63078[(2)] = null);

(statearr_62211_63078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62203 === (6))){
var state_62202__$1 = state_62202;
var statearr_62212_63079 = state_62202__$1;
(statearr_62212_63079[(2)] = null);

(statearr_62212_63079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62203 === (3))){
var inst_62200 = (state_62202[(2)]);
var state_62202__$1 = state_62202;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62202__$1,inst_62200);
} else {
if((state_val_62203 === (12))){
var state_62202__$1 = state_62202;
var statearr_62213_63080 = state_62202__$1;
(statearr_62213_63080[(2)] = null);

(statearr_62213_63080[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62203 === (2))){
var inst_62169 = cljs.core.async.timeout(ms);
var state_62202__$1 = state_62202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62202__$1,(4),inst_62169);
} else {
if((state_val_62203 === (11))){
var inst_62187 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_62188 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_62187);
var state_62202__$1 = state_62202;
var statearr_62214_63081 = state_62202__$1;
(statearr_62214_63081[(2)] = inst_62188);

(statearr_62214_63081[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62203 === (9))){
var state_62202__$1 = state_62202;
var statearr_62215_63082 = state_62202__$1;
(statearr_62215_63082[(2)] = null);

(statearr_62215_63082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62203 === (5))){
var inst_62176 = (state_62202[(8)]);
var inst_62181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62176,(0),null);
var inst_62182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62176,(1),null);
var inst_62183 = taoensso.sente.interfaces.sch_open_QMARK_(server_ch);
var state_62202__$1 = (function (){var statearr_62216 = state_62202;
(statearr_62216[(10)] = inst_62182);

(statearr_62216[(12)] = inst_62181);

return statearr_62216;
})();
if(cljs.core.truth_(inst_62183)){
var statearr_62217_63083 = state_62202__$1;
(statearr_62217_63083[(1)] = (8));

} else {
var statearr_62218_63084 = state_62202__$1;
(statearr_62218_63084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62203 === (10))){
var inst_62195 = (state_62202[(2)]);
var state_62202__$1 = state_62202;
var statearr_62219_63085 = state_62202__$1;
(statearr_62219_63085[(2)] = inst_62195);

(statearr_62219_63085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62203 === (8))){
var inst_62167 = (state_62202[(7)]);
var inst_62182 = (state_62202[(10)]);
var inst_62185 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_62182,inst_62167);
var state_62202__$1 = state_62202;
if(inst_62185){
var statearr_62220_63087 = state_62202__$1;
(statearr_62220_63087[(1)] = (11));

} else {
var statearr_62221_63088 = state_62202__$1;
(statearr_62221_63088[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__49411__auto__ = null;
var taoensso$sente$state_machine__49411__auto____0 = (function (){
var statearr_62222 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62222[(0)] = taoensso$sente$state_machine__49411__auto__);

(statearr_62222[(1)] = (1));

return statearr_62222;
});
var taoensso$sente$state_machine__49411__auto____1 = (function (state_62202){
while(true){
var ret_value__49412__auto__ = (function (){try{while(true){
var result__49413__auto__ = switch__49410__auto__(state_62202);
if(cljs.core.keyword_identical_QMARK_(result__49413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49413__auto__;
}
break;
}
}catch (e62223){if((e62223 instanceof Object)){
var ex__49414__auto__ = e62223;
var statearr_62224_63091 = state_62202;
(statearr_62224_63091[(5)] = ex__49414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62223;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63092 = state_62202;
state_62202 = G__63092;
continue;
} else {
return ret_value__49412__auto__;
}
break;
}
});
taoensso$sente$state_machine__49411__auto__ = function(state_62202){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__49411__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__49411__auto____1.call(this,state_62202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__49411__auto____0;
taoensso$sente$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__49411__auto____1;
return taoensso$sente$state_machine__49411__auto__;
})()
})();
var state__49513__auto__ = (function (){var statearr_62225 = (f__49512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49512__auto__.cljs$core$IFn$_invoke$arity$0() : f__49512__auto__.call(null));
(statearr_62225[(6)] = c__49511__auto__);

return statearr_62225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49513__auto__);
}));

return c__49511__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,605,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
}),null)),null,-1215274461);
var updated_conn = upd_conn_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var handshake_QMARK_ = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"init?","init?",438181499).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"handshake?","handshake?",-423743093).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_(new cljs.core.Keyword(null,"ajax","ajax",814345549),uid))){
receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return send_handshake_BANG_(server_ch,websocket_QMARK_);
} else {
var temp__5735__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5735__auto__)){
var ms = temp__5735__auto__;
var c__49511__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49512__auto__ = (function (){var switch__49410__auto__ = (function (state_62251){
var state_val_62252 = (state_62251[(1)]);
if((state_val_62252 === (1))){
var inst_62226 = cljs.core.async.timeout(ms);
var state_62251__$1 = state_62251;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62251__$1,(2),inst_62226);
} else {
if((state_val_62252 === (2))){
var inst_62233 = (state_62251[(7)]);
var inst_62228 = (state_62251[(2)]);
var inst_62229 = cljs.core.deref(conns_);
var inst_62230 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62231 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_62232 = (new cljs.core.PersistentVector(null,3,(5),inst_62230,inst_62231,null));
var inst_62233__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_62229,inst_62232);
var state_62251__$1 = (function (){var statearr_62253 = state_62251;
(statearr_62253[(8)] = inst_62228);

(statearr_62253[(7)] = inst_62233__$1);

return statearr_62253;
})();
if(cljs.core.truth_(inst_62233__$1)){
var statearr_62254_63097 = state_62251__$1;
(statearr_62254_63097[(1)] = (3));

} else {
var statearr_62255_63098 = state_62251__$1;
(statearr_62255_63098[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62252 === (3))){
var inst_62233 = (state_62251[(7)]);
var inst_62238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62233,(0),null);
var inst_62239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62233,(1),null);
var inst_62240 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_62239,udt_open);
var state_62251__$1 = (function (){var statearr_62256 = state_62251;
(statearr_62256[(9)] = inst_62238);

return statearr_62256;
})();
if(inst_62240){
var statearr_62257_63099 = state_62251__$1;
(statearr_62257_63099[(1)] = (6));

} else {
var statearr_62258_63100 = state_62251__$1;
(statearr_62258_63100[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62252 === (4))){
var state_62251__$1 = state_62251;
var statearr_62259_63101 = state_62251__$1;
(statearr_62259_63101[(2)] = null);

(statearr_62259_63101[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62252 === (5))){
var inst_62249 = (state_62251[(2)]);
var state_62251__$1 = state_62251;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62251__$1,inst_62249);
} else {
if((state_val_62252 === (6))){
var inst_62242 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_62243 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_62242);
var state_62251__$1 = state_62251;
var statearr_62260_63103 = state_62251__$1;
(statearr_62260_63103[(2)] = inst_62243);

(statearr_62260_63103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62252 === (7))){
var state_62251__$1 = state_62251;
var statearr_62261_63104 = state_62251__$1;
(statearr_62261_63104[(2)] = null);

(statearr_62261_63104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62252 === (8))){
var inst_62246 = (state_62251[(2)]);
var state_62251__$1 = state_62251;
var statearr_62262_63105 = state_62251__$1;
(statearr_62262_63105[(2)] = inst_62246);

(statearr_62262_63105[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__49411__auto__ = null;
var taoensso$sente$state_machine__49411__auto____0 = (function (){
var statearr_62263 = [null,null,null,null,null,null,null,null,null,null];
(statearr_62263[(0)] = taoensso$sente$state_machine__49411__auto__);

(statearr_62263[(1)] = (1));

return statearr_62263;
});
var taoensso$sente$state_machine__49411__auto____1 = (function (state_62251){
while(true){
var ret_value__49412__auto__ = (function (){try{while(true){
var result__49413__auto__ = switch__49410__auto__(state_62251);
if(cljs.core.keyword_identical_QMARK_(result__49413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49413__auto__;
}
break;
}
}catch (e62264){if((e62264 instanceof Object)){
var ex__49414__auto__ = e62264;
var statearr_62265_63111 = state_62251;
(statearr_62265_63111[(5)] = ex__49414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62264;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63112 = state_62251;
state_62251 = G__63112;
continue;
} else {
return ret_value__49412__auto__;
}
break;
}
});
taoensso$sente$state_machine__49411__auto__ = function(state_62251){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__49411__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__49411__auto____1.call(this,state_62251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__49411__auto____0;
taoensso$sente$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__49411__auto____1;
return taoensso$sente$state_machine__49411__auto__;
})()
})();
var state__49513__auto__ = (function (){var statearr_62266 = (f__49512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49512__auto__.cljs$core$IFn$_invoke$arity$0() : f__49512__auto__.call(null));
(statearr_62266[(6)] = c__49511__auto__);

return statearr_62266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49513__auto__);
}));

return c__49511__auto__;
} else {
return null;
}
}
}
}),new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),(function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

var vec__62267 = taoensso.sente.unpack(packer__$1,req_ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62267,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62267,(1),null);
return receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$2(clj,(cljs.core.truth_(_QMARK_cb_uuid)?(function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,635,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
}),null)),null,2023286373);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer__$1,resp_clj,_QMARK_cb_uuid));
}):null));
}),new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,644,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
}),null)),null,1791970547);
var updated_conn = upd_conn_BANG_.cljs$core$IFn$_invoke$arity$4(conn_type,uid,client_id,null);
var udt_close = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__49511__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49512__auto__ = (function (){var switch__49410__auto__ = (function (state_62321){
var state_val_62322 = (state_62321[(1)]);
if((state_val_62322 === (7))){
var state_62321__$1 = state_62321;
var statearr_62323_63116 = state_62321__$1;
(statearr_62323_63116[(2)] = null);

(statearr_62323_63116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62322 === (1))){
var inst_62270 = cljs.core.async.timeout((5000));
var state_62321__$1 = state_62321;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62321__$1,(2),inst_62270);
} else {
if((state_val_62322 === (4))){
var state_62321__$1 = state_62321;
var statearr_62324_63122 = state_62321__$1;
(statearr_62324_63122[(2)] = null);

(statearr_62324_63122[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62322 === (13))){
var state_62321__$1 = state_62321;
var statearr_62325_63123 = state_62321__$1;
(statearr_62325_63123[(2)] = null);

(statearr_62325_63123[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62322 === (6))){
var inst_62281 = (state_62321[(7)]);
var inst_62282 = (state_62321[(8)]);
var inst_62280 = (state_62321[(9)]);
var inst_62298 = (state_62321[(10)]);
var inst_62293 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62294 = [conn_type,uid,client_id];
var inst_62295 = (new cljs.core.PersistentVector(null,3,(5),inst_62293,inst_62294,null));
var inst_62297 = (function (){var vec__62273 = inst_62280;
var __QMARK_sch = inst_62281;
var udt_t1 = inst_62282;
return (function (p__62296){
var vec__62326 = p__62296;
var _sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62326,(0),null);
var udt_t1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62326,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1__$1,udt_close)){
return taoensso.encore.swapped(new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),true);
} else {
return taoensso.encore.swapped(udt_t1__$1,false);
}
});
})();
var inst_62298__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_62295,inst_62297);
var state_62321__$1 = (function (){var statearr_62329 = state_62321;
(statearr_62329[(10)] = inst_62298__$1);

return statearr_62329;
})();
if(cljs.core.truth_(inst_62298__$1)){
var statearr_62330_63126 = state_62321__$1;
(statearr_62330_63126[(1)] = (9));

} else {
var statearr_62331_63128 = state_62321__$1;
(statearr_62331_63128[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62322 === (3))){
var inst_62281 = (state_62321[(7)]);
var inst_62282 = (state_62321[(8)]);
var inst_62280 = (state_62321[(9)]);
var inst_62285 = (function (){var vec__62273 = inst_62280;
var __QMARK_sch = inst_62281;
var udt_t1 = inst_62282;
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
})();
var inst_62286 = (new cljs.core.Delay(inst_62285,null));
var inst_62287 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,658,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_62286,null,331031455);
var state_62321__$1 = state_62321;
var statearr_62332_63135 = state_62321__$1;
(statearr_62332_63135[(2)] = inst_62287);

(statearr_62332_63135[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62322 === (12))){
var inst_62307 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62308 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_62309 = (new cljs.core.PersistentVector(null,2,(5),inst_62307,inst_62308,null));
var inst_62310 = receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$1(inst_62309);
var state_62321__$1 = state_62321;
var statearr_62333_63136 = state_62321__$1;
(statearr_62333_63136[(2)] = inst_62310);

(statearr_62333_63136[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62322 === (2))){
var inst_62280 = (state_62321[(9)]);
var inst_62272 = (state_62321[(2)]);
var inst_62276 = cljs.core.deref(conns_);
var inst_62277 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62278 = [conn_type,uid,client_id];
var inst_62279 = (new cljs.core.PersistentVector(null,3,(5),inst_62277,inst_62278,null));
var inst_62280__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_62276,inst_62279);
var inst_62281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62280__$1,(0),null);
var inst_62282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62280__$1,(1),null);
var inst_62283 = cljs.core.deref(taoensso.sente.debug_mode_QMARK__);
var state_62321__$1 = (function (){var statearr_62334 = state_62321;
(statearr_62334[(7)] = inst_62281);

(statearr_62334[(8)] = inst_62282);

(statearr_62334[(9)] = inst_62280__$1);

(statearr_62334[(11)] = inst_62272);

return statearr_62334;
})();
if(cljs.core.truth_(inst_62283)){
var statearr_62335_63140 = state_62321__$1;
(statearr_62335_63140[(1)] = (3));

} else {
var statearr_62336_63142 = state_62321__$1;
(statearr_62336_63142[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62322 === (11))){
var inst_62316 = (state_62321[(2)]);
var state_62321__$1 = state_62321;
var statearr_62337_63144 = state_62321__$1;
(statearr_62337_63144[(2)] = inst_62316);

(statearr_62337_63144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62322 === (9))){
var inst_62281 = (state_62321[(7)]);
var inst_62282 = (state_62321[(8)]);
var inst_62280 = (state_62321[(9)]);
var inst_62298 = (state_62321[(10)]);
var inst_62300 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62301 = [conn_type,uid];
var inst_62302 = (new cljs.core.PersistentVector(null,2,(5),inst_62300,inst_62301,null));
var inst_62303 = (function (){var vec__62273 = inst_62280;
var __QMARK_sch = inst_62281;
var udt_t1 = inst_62282;
var disconnect_QMARK_ = inst_62298;
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_(_QMARK_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return _QMARK_m;
}
});
})();
var inst_62304 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_62302,inst_62303);
var inst_62305 = upd_connected_uid_BANG_(uid);
var state_62321__$1 = (function (){var statearr_62338 = state_62321;
(statearr_62338[(12)] = inst_62304);

return statearr_62338;
})();
if(cljs.core.truth_(inst_62305)){
var statearr_62339_63149 = state_62321__$1;
(statearr_62339_63149[(1)] = (12));

} else {
var statearr_62340_63150 = state_62321__$1;
(statearr_62340_63150[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62322 === (5))){
var inst_62282 = (state_62321[(8)]);
var inst_62290 = (state_62321[(2)]);
var inst_62291 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_62282,udt_close);
var state_62321__$1 = (function (){var statearr_62341 = state_62321;
(statearr_62341[(13)] = inst_62290);

return statearr_62341;
})();
if(inst_62291){
var statearr_62342_63155 = state_62321__$1;
(statearr_62342_63155[(1)] = (6));

} else {
var statearr_62343_63156 = state_62321__$1;
(statearr_62343_63156[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62322 === (14))){
var inst_62313 = (state_62321[(2)]);
var state_62321__$1 = state_62321;
var statearr_62344_63157 = state_62321__$1;
(statearr_62344_63157[(2)] = inst_62313);

(statearr_62344_63157[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62322 === (10))){
var state_62321__$1 = state_62321;
var statearr_62345_63162 = state_62321__$1;
(statearr_62345_63162[(2)] = null);

(statearr_62345_63162[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62322 === (8))){
var inst_62319 = (state_62321[(2)]);
var state_62321__$1 = state_62321;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62321__$1,inst_62319);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__49411__auto__ = null;
var taoensso$sente$state_machine__49411__auto____0 = (function (){
var statearr_62346 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62346[(0)] = taoensso$sente$state_machine__49411__auto__);

(statearr_62346[(1)] = (1));

return statearr_62346;
});
var taoensso$sente$state_machine__49411__auto____1 = (function (state_62321){
while(true){
var ret_value__49412__auto__ = (function (){try{while(true){
var result__49413__auto__ = switch__49410__auto__(state_62321);
if(cljs.core.keyword_identical_QMARK_(result__49413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49413__auto__;
}
break;
}
}catch (e62347){if((e62347 instanceof Object)){
var ex__49414__auto__ = e62347;
var statearr_62348_63163 = state_62321;
(statearr_62348_63163[(5)] = ex__49414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62347;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63164 = state_62321;
state_62321 = G__63164;
continue;
} else {
return ret_value__49412__auto__;
}
break;
}
});
taoensso$sente$state_machine__49411__auto__ = function(state_62321){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__49411__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__49411__auto____1.call(this,state_62321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__49411__auto____0;
taoensso$sente$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__49411__auto____1;
return taoensso$sente$state_machine__49411__auto__;
})()
})();
var state__49513__auto__ = (function (){var statearr_62349 = (f__49512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49512__auto__.cljs$core$IFn$_invoke$arity$0() : f__49512__auto__.call(null));
(statearr_62349[(6)] = c__49511__auto__);

return statearr_62349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49513__auto__);
}));

return c__49511__auto__;
}),new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,680,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
}),null)),null,938180739);
})], null));
}
})], null);
}));

(taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq62039){
var G__62040 = cljs.core.first(seq62039);
var seq62039__$1 = cljs.core.next(seq62039);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62040,seq62039__$1);
}));

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,686,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,714236198);

var seq__62350 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null)));
var chunk__62351 = null;
var count__62352 = (0);
var i__62353 = (0);
while(true){
if((i__62353 < count__62352)){
var vec__62372 = chunk__62351.cljs$core$IIndexed$_nth$arity$2(null,i__62353);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62372,(0),null);
var vec__62375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62372,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62375,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62375,(1),null);
var temp__5735__auto___63179 = _QMARK_sch;
if(cljs.core.truth_(temp__5735__auto___63179)){
var sch_63180 = temp__5735__auto___63179;
var G__62378_63181 = new cljs.core.Keyword(null,"ws","ws",86841443);
var G__62379_63182 = uid;
var G__62380_63183 = client_id;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(G__62378_63181,G__62379_63182,G__62380_63183) : upd_conn_BANG_.call(null,G__62378_63181,G__62379_63182,G__62380_63183));

taoensso.sente.interfaces.sch_send_BANG_(sch_63180,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}


var G__63185 = seq__62350;
var G__63186 = chunk__62351;
var G__63187 = count__62352;
var G__63188 = (i__62353 + (1));
seq__62350 = G__63185;
chunk__62351 = G__63186;
count__62352 = G__63187;
i__62353 = G__63188;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__62350);
if(temp__5735__auto__){
var seq__62350__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62350__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__62350__$1);
var G__63191 = cljs.core.chunk_rest(seq__62350__$1);
var G__63192 = c__4556__auto__;
var G__63193 = cljs.core.count(c__4556__auto__);
var G__63194 = (0);
seq__62350 = G__63191;
chunk__62351 = G__63192;
count__62352 = G__63193;
i__62353 = G__63194;
continue;
} else {
var vec__62381 = cljs.core.first(seq__62350__$1);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62381,(0),null);
var vec__62384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62381,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62384,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62384,(1),null);
var temp__5735__auto___63195__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__5735__auto___63195__$1)){
var sch_63197 = temp__5735__auto___63195__$1;
var G__62387_63198 = new cljs.core.Keyword(null,"ws","ws",86841443);
var G__62388_63199 = uid;
var G__62389_63200 = client_id;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(G__62387_63198,G__62388_63199,G__62389_63200) : upd_conn_BANG_.call(null,G__62387_63198,G__62388_63199,G__62389_63200));

taoensso.sente.interfaces.sch_send_BANG_(sch_63197,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}


var G__63201 = cljs.core.next(seq__62350__$1);
var G__63202 = null;
var G__63203 = (0);
var G__63204 = (0);
seq__62350 = G__63201;
chunk__62351 = G__63202;
count__62352 = G__63203;
i__62353 = G__63204;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's Ajax conns.
 *   Allows some time for possible Ajax poller reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,696,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,276093014);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_(client_ids_unsatisfied)){
return null;
} else {
var c__49511__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49512__auto__ = (function (){var switch__49410__auto__ = (function (state_62436){
var state_val_62437 = (state_62436[(1)]);
if((state_val_62437 === (7))){
var inst_62398 = (state_62436[(7)]);
var inst_62392 = (state_62436[(8)]);
var inst_62391 = (state_62436[(9)]);
var inst_62408 = (function (){var n = inst_62391;
var client_ids_satisfied = inst_62392;
var _QMARK_pulled = inst_62398;
return (function (s,client_id,p__62407){
var vec__62438 = p__62407;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62438,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62438,(1),null);
var sent_QMARK_ = (function (){var temp__5735__auto__ = _QMARK_sch;
if(cljs.core.truth_(temp__5735__auto__)){
var sch = temp__5735__auto__;
return taoensso.sente.interfaces.sch_send_BANG_(_QMARK_sch,cljs.core.not(new cljs.core.Keyword(null,"websocket","websocket",-1714963101)),buffered_evs_pstr);
} else {
return null;
}
})();
if(cljs.core.truth_(sent_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,client_id);
} else {
return s;
}
});
})();
var inst_62409 = cljs.core.PersistentHashSet.EMPTY;
var inst_62410 = cljs.core.reduce_kv(inst_62408,inst_62409,inst_62398);
var state_62436__$1 = state_62436;
var statearr_62441_63212 = state_62436__$1;
(statearr_62441_63212[(2)] = inst_62410);

(statearr_62441_63212[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62437 === (1))){
var inst_62390 = cljs.core.PersistentHashSet.EMPTY;
var inst_62391 = (0);
var inst_62392 = inst_62390;
var state_62436__$1 = (function (){var statearr_62442 = state_62436;
(statearr_62442[(8)] = inst_62392);

(statearr_62442[(9)] = inst_62391);

return statearr_62442;
})();
var statearr_62443_63214 = state_62436__$1;
(statearr_62443_63214[(2)] = null);

(statearr_62443_63214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62437 === (4))){
var state_62436__$1 = state_62436;
var statearr_62444_63215 = state_62436__$1;
(statearr_62444_63215[(2)] = true);

(statearr_62444_63215[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62437 === (15))){
var inst_62429 = (state_62436[(2)]);
var state_62436__$1 = state_62436;
var statearr_62445_63218 = state_62436__$1;
(statearr_62445_63218[(2)] = inst_62429);

(statearr_62445_63218[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62437 === (13))){
var inst_62415 = (state_62436[(10)]);
var inst_62420 = cljs.core.rand_int(inst_62415);
var inst_62421 = (inst_62415 + inst_62420);
var inst_62422 = cljs.core.async.timeout(inst_62421);
var state_62436__$1 = state_62436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62436__$1,(16),inst_62422);
} else {
if((state_val_62437 === (6))){
var inst_62398 = (state_62436[(7)]);
var inst_62405 = (state_62436[(2)]);
var state_62436__$1 = (function (){var statearr_62446 = state_62436;
(statearr_62446[(11)] = inst_62405);

return statearr_62446;
})();
if(cljs.core.truth_(inst_62398)){
var statearr_62447_63222 = state_62436__$1;
(statearr_62447_63222[(1)] = (7));

} else {
var statearr_62448_63223 = state_62436__$1;
(statearr_62448_63223[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62437 === (3))){
var inst_62434 = (state_62436[(2)]);
var state_62436__$1 = state_62436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62436__$1,inst_62434);
} else {
if((state_val_62437 === (12))){
var inst_62432 = (state_62436[(2)]);
var state_62436__$1 = state_62436;
var statearr_62449_63226 = state_62436__$1;
(statearr_62449_63226[(2)] = inst_62432);

(statearr_62449_63226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62437 === (2))){
var inst_62398 = (state_62436[(7)]);
var inst_62392 = (state_62436[(8)]);
var inst_62391 = (state_62436[(9)]);
var inst_62394 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62395 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_62396 = (new cljs.core.PersistentVector(null,2,(5),inst_62394,inst_62395,null));
var inst_62397 = (function (){var n = inst_62391;
var client_ids_satisfied = inst_62392;
return (function (m){
var ks_to_pull = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(client_ids_satisfied,cljs.core.keys(m));
if(cljs.core.empty_QMARK_(ks_to_pull)){
return taoensso.encore.swapped(m,null);
} else {
return taoensso.encore.swapped(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,k){
var vec__62450 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62450,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62450,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
}),m,ks_to_pull),cljs.core.select_keys(m,ks_to_pull));
}
});
})();
var inst_62398__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_62396,inst_62397);
var inst_62399 = (function (){var n = inst_62391;
var client_ids_satisfied = inst_62392;
var _QMARK_pulled = inst_62398__$1;
return (function (x){
var or__4126__auto__ = (x == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__62454 = taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_);
return (fexpr__62454.cljs$core$IFn$_invoke$arity$1 ? fexpr__62454.cljs$core$IFn$_invoke$arity$1(x) : fexpr__62454.call(null,x));
}
});
})();
var inst_62400 = (inst_62399.cljs$core$IFn$_invoke$arity$1 ? inst_62399.cljs$core$IFn$_invoke$arity$1(inst_62398__$1) : inst_62399.call(null,inst_62398__$1));
var state_62436__$1 = (function (){var statearr_62455 = state_62436;
(statearr_62455[(7)] = inst_62398__$1);

return statearr_62455;
})();
if(cljs.core.truth_(inst_62400)){
var statearr_62456_63236 = state_62436__$1;
(statearr_62456_63236[(1)] = (4));

} else {
var statearr_62457_63237 = state_62436__$1;
(statearr_62457_63237[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62437 === (11))){
var state_62436__$1 = state_62436;
var statearr_62458_63238 = state_62436__$1;
(statearr_62458_63238[(2)] = null);

(statearr_62458_63238[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62437 === (9))){
var inst_62415 = (state_62436[(10)]);
var inst_62392 = (state_62436[(8)]);
var inst_62391 = (state_62436[(9)]);
var inst_62413 = (state_62436[(2)]);
var inst_62414 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_62392,inst_62413);
var inst_62415__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms_backoffs,inst_62391);
var state_62436__$1 = (function (){var statearr_62459 = state_62436;
(statearr_62459[(10)] = inst_62415__$1);

(statearr_62459[(12)] = inst_62414);

return statearr_62459;
})();
if(cljs.core.truth_(inst_62415__$1)){
var statearr_62460_63240 = state_62436__$1;
(statearr_62460_63240[(1)] = (10));

} else {
var statearr_62461_63241 = state_62436__$1;
(statearr_62461_63241[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62437 === (5))){
var inst_62398 = (state_62436[(7)]);
var inst_62403 = taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",723,"([:or nil? map?] ?pulled)",inst_62398,null,null);
var state_62436__$1 = state_62436;
var statearr_62462_63243 = state_62436__$1;
(statearr_62462_63243[(2)] = inst_62403);

(statearr_62462_63243[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62437 === (14))){
var state_62436__$1 = state_62436;
var statearr_62463_63244 = state_62436__$1;
(statearr_62463_63244[(2)] = null);

(statearr_62463_63244[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62437 === (16))){
var inst_62414 = (state_62436[(12)]);
var inst_62391 = (state_62436[(9)]);
var inst_62424 = (state_62436[(2)]);
var inst_62425 = (inst_62391 + (1));
var inst_62391__$1 = inst_62425;
var inst_62392 = inst_62414;
var state_62436__$1 = (function (){var statearr_62464 = state_62436;
(statearr_62464[(13)] = inst_62424);

(statearr_62464[(8)] = inst_62392);

(statearr_62464[(9)] = inst_62391__$1);

return statearr_62464;
})();
var statearr_62465_63247 = state_62436__$1;
(statearr_62465_63247[(2)] = null);

(statearr_62465_63247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62437 === (10))){
var inst_62414 = (state_62436[(12)]);
var inst_62417 = cljs.core.complement(inst_62414);
var inst_62418 = taoensso.encore.rsome(inst_62417,client_ids_unsatisfied);
var state_62436__$1 = state_62436;
if(cljs.core.truth_(inst_62418)){
var statearr_62466_63253 = state_62436__$1;
(statearr_62466_63253[(1)] = (13));

} else {
var statearr_62467_63254 = state_62436__$1;
(statearr_62467_63254[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62437 === (8))){
var state_62436__$1 = state_62436;
var statearr_62468_63255 = state_62436__$1;
(statearr_62468_63255[(2)] = null);

(statearr_62468_63255[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__49411__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__49411__auto____0 = (function (){
var statearr_62469 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62469[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__49411__auto__);

(statearr_62469[(1)] = (1));

return statearr_62469;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__49411__auto____1 = (function (state_62436){
while(true){
var ret_value__49412__auto__ = (function (){try{while(true){
var result__49413__auto__ = switch__49410__auto__(state_62436);
if(cljs.core.keyword_identical_QMARK_(result__49413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49413__auto__;
}
break;
}
}catch (e62470){if((e62470 instanceof Object)){
var ex__49414__auto__ = e62470;
var statearr_62471_63256 = state_62436;
(statearr_62471_63256[(5)] = ex__49414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62470;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63261 = state_62436;
state_62436 = G__63261;
continue;
} else {
return ret_value__49412__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__49411__auto__ = function(state_62436){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__49411__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__49411__auto____1.call(this,state_62436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__49411__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__49411__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__49411__auto__;
})()
})();
var state__49513__auto__ = (function (){var statearr_62472 = (f__49512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49512__auto__.cljs$core$IFn$_invoke$arity$0() : f__49512__auto__.call(null));
(statearr_62472[(6)] = c__49511__auto__);

return statearr_62472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49513__auto__);
}));

return c__49511__auto__;
}
});
/**
 * Alias of `taoensso.encore/ajax-lite`
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_lite;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

var taoensso$sente$IChSocket$_chsk_connect_BANG_$dyn_63262 = (function (chsk){
var x__4428__auto__ = (((chsk == null))?null:chsk);
var m__4429__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__4429__auto__.call(null,chsk));
} else {
var m__4426__auto__ = (taoensso.sente._chsk_connect_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__4426__auto__.call(null,chsk));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-connect!",chsk);
}
}
});
taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
return taoensso$sente$IChSocket$_chsk_connect_BANG_$dyn_63262(chsk);
}
});

var taoensso$sente$IChSocket$_chsk_disconnect_BANG_$dyn_63263 = (function (chsk,reason){
var x__4428__auto__ = (((chsk == null))?null:chsk);
var m__4429__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__4429__auto__.call(null,chsk,reason));
} else {
var m__4426__auto__ = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__4426__auto__.call(null,chsk,reason));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-disconnect!",chsk);
}
}
});
taoensso.sente._chsk_disconnect_BANG_ = (function taoensso$sente$_chsk_disconnect_BANG_(chsk,reason){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(chsk,reason);
} else {
return taoensso$sente$IChSocket$_chsk_disconnect_BANG_$dyn_63263(chsk,reason);
}
});

var taoensso$sente$IChSocket$_chsk_reconnect_BANG_$dyn_63268 = (function (chsk){
var x__4428__auto__ = (((chsk == null))?null:chsk);
var m__4429__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__4429__auto__.call(null,chsk));
} else {
var m__4426__auto__ = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__4426__auto__.call(null,chsk));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-reconnect!",chsk);
}
}
});
taoensso.sente._chsk_reconnect_BANG_ = (function taoensso$sente$_chsk_reconnect_BANG_(chsk){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1(chsk);
} else {
return taoensso$sente$IChSocket$_chsk_reconnect_BANG_$dyn_63268(chsk);
}
});

var taoensso$sente$IChSocket$_chsk_send_BANG_$dyn_63269 = (function (chsk,ev,opts){
var x__4428__auto__ = (((chsk == null))?null:chsk);
var m__4429__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(chsk,ev,opts) : m__4429__auto__.call(null,chsk,ev,opts));
} else {
var m__4426__auto__ = (taoensso.sente._chsk_send_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(chsk,ev,opts) : m__4426__auto__.call(null,chsk,ev,opts));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-send!",chsk);
}
}
});
taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
return taoensso$sente$IChSocket$_chsk_send_BANG_$dyn_63269(chsk,ev,opts);
}
});

taoensso.sente.chsk_connect_BANG_ = (function taoensso$sente$chsk_connect_BANG_(chsk){
return taoensso.sente._chsk_connect_BANG_(chsk);
});

taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
return taoensso.sente._chsk_disconnect_BANG_(chsk,new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641));
});

/**
 * Useful for reauthenticating after login/logout, etc.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
return taoensso.sente._chsk_reconnect_BANG_(chsk);
});

/**
 * Deprecated
 */
taoensso.sente.chsk_destroy_BANG_ = taoensso.sente.chsk_disconnect_BANG_;
/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var G__62474 = arguments.length;
switch (G__62474) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
}));

(taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
}));

(taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,773,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$(new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,1411958354);

return taoensso.sente._chsk_send_BANG_(chsk,ev,opts);
}));

(taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4);

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,778,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,-1388877705);

if(cljs.core.truth_(_QMARK_cb_fn)){
var G__62475_63280 = new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264);
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__62475_63280) : _QMARK_cb_fn.call(null,G__62475_63280));
} else {
}

return false;
});
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event(x);

if((((((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null)))) || (taoensso.encore.nat_int_QMARK_(_QMARK_timeout_ms)))){
} else {
throw (new Error(["Assert failed: ",["cb requires a timeout; timeout-ms should be a +ive integer: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_timeout_ms)].join(''),"\n","(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nat-int? ?timeout-ms)))"].join('')));
}

if((((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_(_QMARK_cb)) || (taoensso.encore.chan_QMARK_(_QMARK_cb)))){
return null;
} else {
throw (new Error(["Assert failed: ",["cb should be nil, an ifn, or a channel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(_QMARK_cb))].join(''),"\n","(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))"].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__5735__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5735__auto__)){
var cb_uuid = temp__5735__auto__;
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),(function (_QMARK_f){
return taoensso.encore.swapped(new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
}));
} else {
return null;
}
});
/**
 * Atomically swaps the value of chk's :state_ atom.
 */
taoensso.sente.swap_chsk_state_BANG_ = (function taoensso$sente$swap_chsk_state_BANG_(chsk,f){
var vec__62476 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_state) : f.call(null,old_state));
var new_state__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),false):new_state);
var new_state__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_state__$1,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)):new_state__$1);
return taoensso.encore.swapped(new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62476,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62476,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_63281 = (function (){try{if(cljs.core.map_QMARK_(state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e62479){if((e62479 instanceof Error)){
var e_63281 = e62479;
return e_63281;
} else {
throw e62479;

}
}})();
if((e_63281 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",825,"(map? state)",state,e_63281,null);
}

var e_63282 = (function (){try{if((function (){var fexpr__62482 = (function (x){
return cljs.core.contains_QMARK_((function (){var G__62483 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641),null,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720),null,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707),null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__62483) : taoensso.truss.impl.set_STAR_.call(null,G__62483));
})(),x);
});
return fexpr__62482(reason);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e62480){if((e62480 instanceof Error)){
var e_63282 = e62480;
return e_63282;
} else {
throw e62480;

}
}})();
if((e_63282 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",826,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_63282,null);
}

if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(reason,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)),new cljs.core.Keyword(null,"open?","open?",1238443125),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"last-close","last-close",-2054255782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null)], 0));
} else {
return state;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if((((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_(_QMARK_cb)))){
return _QMARK_cb;
} else {
var e_63288 = (function (){try{if(taoensso.encore.chan_QMARK_(_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e62484){if((e62484 instanceof Error)){
var e_63288 = e62484;
return e_63288;
} else {
throw e62484;

}
}})();
if((e_63288 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",847,"(enc/chan? ?cb)",_QMARK_cb,e_63288,null);
}

taoensso.sente.assert_event(ev);

var vec__62485 = ev;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62485,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62485,(1),null);
var cb_ch = _QMARK_cb;
return (function (reply){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([taoensso.encore.as_qname(ev_id),".cb"].join('')),reply], null));
});
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,858,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,-742566520);

var buffered_evs = ((cljs.core.vector_QMARK_(clj))?clj:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",859,"(vector? clj)",clj,null,null));
var seq__62488 = cljs.core.seq(buffered_evs);
var chunk__62489 = null;
var count__62490 = (0);
var i__62491 = (0);
while(true){
if((i__62491 < count__62490)){
var ev = chunk__62489.cljs$core$IIndexed$_nth$arity$2(null,i__62491);
taoensso.sente.assert_event(ev);

var vec__62498_63293 = ev;
var id_63294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62498_63293,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_63294),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__63295 = seq__62488;
var G__63296 = chunk__62489;
var G__63297 = count__62490;
var G__63298 = (i__62491 + (1));
seq__62488 = G__63295;
chunk__62489 = G__63296;
count__62490 = G__63297;
i__62491 = G__63298;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__62488);
if(temp__5735__auto__){
var seq__62488__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62488__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__62488__$1);
var G__63299 = cljs.core.chunk_rest(seq__62488__$1);
var G__63300 = c__4556__auto__;
var G__63301 = cljs.core.count(c__4556__auto__);
var G__63302 = (0);
seq__62488 = G__63299;
chunk__62489 = G__63300;
count__62490 = G__63301;
i__62491 = G__63302;
continue;
} else {
var ev = cljs.core.first(seq__62488__$1);
taoensso.sente.assert_event(ev);

var vec__62501_63304 = ev;
var id_63305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62501_63304,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_63305),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__63306 = cljs.core.next(seq__62488__$1);
var G__63307 = null;
var G__63308 = (0);
var G__63309 = (0);
seq__62488 = G__63306;
chunk__62489 = G__63307;
count__62490 = G__63308;
i__62491 = G__63309;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handshake_QMARK_ = (function taoensso$sente$handshake_QMARK_(x){
if(cljs.core.vector_QMARK_(x)){
var vec__62507 = x;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62507,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return false;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_63310 = (function (){try{if((function (){var fexpr__62513 = (function (x){
return cljs.core.contains_QMARK_((function (){var G__62514 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__62514) : taoensso.truss.impl.set_STAR_.call(null,G__62514));
})(),x);
});
return fexpr__62513(chsk_type);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e62511){if((e62511 instanceof Error)){
var e_63310 = e62511;
return e_63310;
} else {
throw e62511;

}
}})();
if((e_63310 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",873,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_63310,null);
}

var e_63311 = (function (){try{if(taoensso.sente.handshake_QMARK_(clj)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e62515){if((e62515 instanceof Error)){
var e_63311 = e62515;
return e_63311;
} else {
throw e62515;

}
}})();
if((e_63311 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",874,"(handshake? clj)",clj,e_63311,null);
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,875,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,-1279024172);

var vec__62516 = clj;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62516,(0),null);
var vec__62519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62516,(1),null);
var _QMARK_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62519,(0),null);
var _QMARK_csrf_token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62519,(1),null);
var _QMARK_handshake_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62519,(2),null);
var map__62522 = chsk;
var map__62522__$1 = (((((!((map__62522 == null))))?(((((map__62522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62522):map__62522);
var chs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62522__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62522__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_(ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event(handshake_ev);

if(clojure.string.blank_QMARK_(_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,894,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
}),null)),null,1415365231);
} else {
}

taoensso.sente.swap_chsk_state_BANG_(chsk,(function (p1__62510_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__62510_SHARP_,new_state], 0));
}));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
});
/**
 * nnil iff the websocket npm library[1] is available.
 *   Easiest way to install:
 *     1. Add the lein-npm[2] plugin to your `project.clj`,
 *     2. Add: `:npm {:dependencies [[websocket "1.0.23"]]}`
 * 
 *   [1] Ref. https://www.npmjs.com/package/websocket
 *   [2] Ref. https://github.com/RyanMcG/lein-npm
 */
taoensso.sente._QMARK_node_npm_websocket_ = (new cljs.core.Delay((function (){
if(((taoensso.sente.node_target_QMARK_) && ((typeof require !== 'undefined')))){
try{return require("websocket");
}catch (e62524){var e = e62524;
return null;
}} else {
return null;
}
}),null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.ws_kalive_ms = ws_kalive_ms;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.retry_count_ = retry_count_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.udt_last_comms_ = udt_last_comms_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k62531,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__62535 = k62531;
var G__62535__$1 = (((G__62535 instanceof cljs.core.Keyword))?G__62535.fqn:null);
switch (G__62535__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "ws-kalive-ms":
return self__.ws_kalive_ms;

break;
case "state_":
return self__.state_;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "socket_":
return self__.socket_;

break;
case "udt-last-comms_":
return self__.udt_last_comms_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k62531,else__4383__auto__);

}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__62536){
var vec__62537 = p__62536;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62537,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62537,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62530){
var self__ = this;
var G__62530__$1 = this;
return (new cljs.core.RecordIter((0),G__62530__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (14 + cljs.core.count(self__.__extmap));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__62540 = (function (coll__4377__auto__){
return (1998688700 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__62540(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this62532,other62533){
var self__ = this;
var this62532__$1 = this;
return (((!((other62533 == null)))) && ((this62532__$1.constructor === other62533.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62532__$1.client_id,other62533.client_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62532__$1.chs,other62533.chs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62532__$1.params,other62533.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62532__$1.packer,other62533.packer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62532__$1.url,other62533.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62532__$1.ws_kalive_ms,other62533.ws_kalive_ms)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62532__$1.state_,other62533.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62532__$1.instance_handle_,other62533.instance_handle_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62532__$1.retry_count_,other62533.retry_count_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62532__$1.ever_opened_QMARK__,other62533.ever_opened_QMARK__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62532__$1.backoff_ms_fn,other62533.backoff_ms_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62532__$1.cbs_waiting_,other62533.cbs_waiting_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62532__$1.socket_,other62533.socket_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62532__$1.udt_last_comms_,other62533.udt_last_comms_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62532__$1.__extmap,other62533.__extmap)));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__62530){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__62541 = cljs.core.keyword_identical_QMARK_;
var expr__62542 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__62544 = new cljs.core.Keyword(null,"client-id","client-id",-464622140);
var G__62545 = expr__62542;
return (pred__62541.cljs$core$IFn$_invoke$arity$2 ? pred__62541.cljs$core$IFn$_invoke$arity$2(G__62544,G__62545) : pred__62541.call(null,G__62544,G__62545));
})())){
return (new taoensso.sente.ChWebSocket(G__62530,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__62546 = new cljs.core.Keyword(null,"chs","chs",376886120);
var G__62547 = expr__62542;
return (pred__62541.cljs$core$IFn$_invoke$arity$2 ? pred__62541.cljs$core$IFn$_invoke$arity$2(G__62546,G__62547) : pred__62541.call(null,G__62546,G__62547));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__62530,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__62548 = new cljs.core.Keyword(null,"params","params",710516235);
var G__62549 = expr__62542;
return (pred__62541.cljs$core$IFn$_invoke$arity$2 ? pred__62541.cljs$core$IFn$_invoke$arity$2(G__62548,G__62549) : pred__62541.call(null,G__62548,G__62549));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__62530,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__62550 = new cljs.core.Keyword(null,"packer","packer",66077544);
var G__62551 = expr__62542;
return (pred__62541.cljs$core$IFn$_invoke$arity$2 ? pred__62541.cljs$core$IFn$_invoke$arity$2(G__62550,G__62551) : pred__62541.call(null,G__62550,G__62551));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__62530,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__62552 = new cljs.core.Keyword(null,"url","url",276297046);
var G__62553 = expr__62542;
return (pred__62541.cljs$core$IFn$_invoke$arity$2 ? pred__62541.cljs$core$IFn$_invoke$arity$2(G__62552,G__62553) : pred__62541.call(null,G__62552,G__62553));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__62530,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__62554 = new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968);
var G__62555 = expr__62542;
return (pred__62541.cljs$core$IFn$_invoke$arity$2 ? pred__62541.cljs$core$IFn$_invoke$arity$2(G__62554,G__62555) : pred__62541.call(null,G__62554,G__62555));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__62530,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__62556 = new cljs.core.Keyword(null,"state_","state_",957667102);
var G__62557 = expr__62542;
return (pred__62541.cljs$core$IFn$_invoke$arity$2 ? pred__62541.cljs$core$IFn$_invoke$arity$2(G__62556,G__62557) : pred__62541.call(null,G__62556,G__62557));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,G__62530,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__62558 = new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457);
var G__62559 = expr__62542;
return (pred__62541.cljs$core$IFn$_invoke$arity$2 ? pred__62541.cljs$core$IFn$_invoke$arity$2(G__62558,G__62559) : pred__62541.call(null,G__62558,G__62559));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__62530,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__62560 = new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093);
var G__62561 = expr__62542;
return (pred__62541.cljs$core$IFn$_invoke$arity$2 ? pred__62541.cljs$core$IFn$_invoke$arity$2(G__62560,G__62561) : pred__62541.call(null,G__62560,G__62561));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__62530,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__62562 = new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913);
var G__62563 = expr__62542;
return (pred__62541.cljs$core$IFn$_invoke$arity$2 ? pred__62541.cljs$core$IFn$_invoke$arity$2(G__62562,G__62563) : pred__62541.call(null,G__62562,G__62563));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__62530,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__62564 = new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955);
var G__62565 = expr__62542;
return (pred__62541.cljs$core$IFn$_invoke$arity$2 ? pred__62541.cljs$core$IFn$_invoke$arity$2(G__62564,G__62565) : pred__62541.call(null,G__62564,G__62565));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__62530,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__62566 = new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061);
var G__62567 = expr__62542;
return (pred__62541.cljs$core$IFn$_invoke$arity$2 ? pred__62541.cljs$core$IFn$_invoke$arity$2(G__62566,G__62567) : pred__62541.call(null,G__62566,G__62567));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__62530,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__62568 = new cljs.core.Keyword(null,"socket_","socket_",-361048908);
var G__62569 = expr__62542;
return (pred__62541.cljs$core$IFn$_invoke$arity$2 ? pred__62541.cljs$core$IFn$_invoke$arity$2(G__62568,G__62569) : pred__62541.call(null,G__62568,G__62569));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__62530,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__62570 = new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639);
var G__62571 = expr__62542;
return (pred__62541.cljs$core$IFn$_invoke$arity$2 ? pred__62541.cljs$core$IFn$_invoke$arity$2(G__62570,G__62571) : pred__62541.call(null,G__62570,G__62571));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__62530,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__62530),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"url","url",276297046),self__.url,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_,null))], null),self__.__extmap));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__62530){
var self__ = this;
var this__4379__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__62530,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_(self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__62525_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__62525_SHARP_,reason);
}));

var temp__5735__auto__ = cljs.core.deref(self__.socket_);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__62572 = opts;
var map__62572__$1 = (((((!((map__62572 == null))))?(((((map__62572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62572):map__62572);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62572__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62572__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62572__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6)):null);
var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,_QMARK_cb_uuid);
var temp__5735__auto___63357 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5735__auto___63357)){
var cb_uuid_63358 = temp__5735__auto___63357;
taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_63358], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e62574){if((e62574 instanceof Error)){
var e = e62574;
return e;
} else {
throw e62574;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",964,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__5735__auto___63359__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__5735__auto___63359__$1)){
var timeout_ms_63360 = temp__5735__auto___63359__$1;
var c__49511__auto___63361 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49512__auto__ = (function (){var switch__49410__auto__ = (function (state_62585){
var state_val_62586 = (state_62585[(1)]);
if((state_val_62586 === (1))){
var inst_62575 = cljs.core.async.timeout(timeout_ms_63360);
var state_62585__$1 = state_62585;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62585__$1,(2),inst_62575);
} else {
if((state_val_62586 === (2))){
var inst_62578 = (state_62585[(7)]);
var inst_62577 = (state_62585[(2)]);
var inst_62578__$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,_QMARK_cb_uuid);
var state_62585__$1 = (function (){var statearr_62587 = state_62585;
(statearr_62587[(8)] = inst_62577);

(statearr_62587[(7)] = inst_62578__$1);

return statearr_62587;
})();
if(cljs.core.truth_(inst_62578__$1)){
var statearr_62588_63362 = state_62585__$1;
(statearr_62588_63362[(1)] = (3));

} else {
var statearr_62589_63363 = state_62585__$1;
(statearr_62589_63363[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62586 === (3))){
var inst_62578 = (state_62585[(7)]);
var inst_62580 = (function (){var G__62590 = new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489);
return (inst_62578.cljs$core$IFn$_invoke$arity$1 ? inst_62578.cljs$core$IFn$_invoke$arity$1(G__62590) : inst_62578.call(null,G__62590));
})();
var state_62585__$1 = state_62585;
var statearr_62591_63364 = state_62585__$1;
(statearr_62591_63364[(2)] = inst_62580);

(statearr_62591_63364[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62586 === (4))){
var state_62585__$1 = state_62585;
var statearr_62592_63365 = state_62585__$1;
(statearr_62592_63365[(2)] = null);

(statearr_62592_63365[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62586 === (5))){
var inst_62583 = (state_62585[(2)]);
var state_62585__$1 = state_62585;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62585__$1,inst_62583);
} else {
return null;
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__49411__auto__ = null;
var taoensso$sente$state_machine__49411__auto____0 = (function (){
var statearr_62593 = [null,null,null,null,null,null,null,null,null];
(statearr_62593[(0)] = taoensso$sente$state_machine__49411__auto__);

(statearr_62593[(1)] = (1));

return statearr_62593;
});
var taoensso$sente$state_machine__49411__auto____1 = (function (state_62585){
while(true){
var ret_value__49412__auto__ = (function (){try{while(true){
var result__49413__auto__ = switch__49410__auto__(state_62585);
if(cljs.core.keyword_identical_QMARK_(result__49413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49413__auto__;
}
break;
}
}catch (e62594){if((e62594 instanceof Object)){
var ex__49414__auto__ = e62594;
var statearr_62595_63366 = state_62585;
(statearr_62595_63366[(5)] = ex__49414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62594;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63367 = state_62585;
state_62585 = G__63367;
continue;
} else {
return ret_value__49412__auto__;
}
break;
}
});
taoensso$sente$state_machine__49411__auto__ = function(state_62585){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__49411__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__49411__auto____1.call(this,state_62585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__49411__auto____0;
taoensso$sente$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__49411__auto____1;
return taoensso$sente$state_machine__49411__auto__;
})()
})();
var state__49513__auto__ = (function (){var statearr_62596 = (f__49512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49512__auto__.cljs$core$IFn$_invoke$arity$0() : f__49512__auto__.call(null));
(statearr_62596[(6)] = c__49511__auto___63361);

return statearr_62596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49513__auto__);
}));

} else {
}
} else {
}

try{cljs.core.deref(self__.socket_).send(ppstr);

cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e62597){var e = e62597;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,976,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
}),null)),null,946369812);

var temp__5735__auto___63368 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5735__auto___63368)){
var cb_uuid_63369 = temp__5735__auto___63368;
var cb_fn_STAR__63370 = (function (){var or__4126__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid_63369);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var e__$1 = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e62598){if((e62598 instanceof Error)){
var e__$1 = e62598;
return e__$1;
} else {
throw e62598;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",979,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
var G__62599_63371 = new cljs.core.Keyword("chsk","error","chsk/error",-984175439);
(cb_fn_STAR__63370.cljs$core$IFn$_invoke$arity$1 ? cb_fn_STAR__63370.cljs$core$IFn$_invoke$arity$1(G__62599_63371) : cb_fn_STAR__63370.call(null,G__62599_63371));
} else {
}

return false;
}}
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__5735__auto__ = (function (){var or__4126__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(goog.global,"WebSocket");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(goog.global,"MozWebSocket");
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(taoensso.sente._QMARK_node_npm_websocket_),"w3cwebsocket");
}
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var WebSocket = temp__5735__auto__;
var instance_handle = cljs.core.reset_BANG_(self__.instance_handle_,taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0());
var have_handle_QMARK_ = (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.instance_handle_),instance_handle);
});
var connect_fn = (function taoensso$sente$connect_fn(){
if(have_handle_QMARK_()){
var retry_fn = (function (){
if(have_handle_QMARK_()){
var retry_count_STAR_ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.retry_count_,cljs.core.inc);
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null,retry_count_STAR_));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1001,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
}),null)),null,1015857868);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__62526_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__62526_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
}));
} else {
return null;
}
});
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string(self__.url,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null)], 0)))));
}catch (e62600){var e = e62600;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1015,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket error"], null);
}),null)),null,-608043825);

return null;
}})();
if(cljs.core.not(_QMARK_socket)){
return retry_fn();
} else {
return cljs.core.reset_BANG_(self__.socket_,(function (){var G__62601 = _QMARK_socket;
(G__62601["onerror"] = (function (ws_ev){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1025,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(ws_ev);
}catch (e62602){var _ = e62602;
return ws_ev;
}})()], null);
}),null)),null,84516252);

var last_ws_error = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null);
return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__62527_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__62527_SHARP_,new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502),last_ws_error);
}));
}));

(G__62601["onmessage"] = (function (ws_ev){
var ppstr = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"data");
var vec__62603 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62603,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62603,(1),null);
cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

var or__4126__auto__ = ((taoensso.sente.handshake_QMARK_(clj))?(function (){
taoensso.sente.receive_handshake_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443),chsk__$1,clj);

cljs.core.reset_BANG_(self__.retry_count_,(0));

return new cljs.core.Keyword(null,"handshake","handshake",68079331);
})()
:null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)))?(function (){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var temp__5733__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5733__auto__)){
var cb_uuid = temp__5733__auto__;
var temp__5733__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__5733__auto____$1)){
var cb_fn = temp__5733__auto____$1;
return (cb_fn.cljs$core$IFn$_invoke$arity$1 ? cb_fn.cljs$core$IFn$_invoke$arity$1(clj) : cb_fn.call(null,clj));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1061,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
}),null)),null,365890574);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
}));

(G__62601["onclose"] = (function (ws_ev){
var clean_QMARK_ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"wasClean");
var code = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"code");
var reason = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"reason");
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev,new cljs.core.Keyword(null,"clean?","clean?",-1675631009),clean_QMARK_,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null);
if(cljs.core.truth_(clean_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,1083,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
}),null)),null,-2037952778);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__62528_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__62528_SHARP_,new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
}));
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__62529_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(taoensso.sente.chsk_state__GT_closed(p1__62529_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424)),new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
}));

return retry_fn();
}
}));

return G__62601;
})());
}
} else {
return null;
}
});
var temp__5735__auto___63374__$1 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__5735__auto___63374__$1)){
var ms_63375 = temp__5735__auto___63374__$1;
var c__49511__auto___63376 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49512__auto__ = (function (){var switch__49410__auto__ = (function (state_62633){
var state_val_62634 = (state_62633[(1)]);
if((state_val_62634 === (7))){
var inst_62629 = (state_62633[(2)]);
var state_62633__$1 = state_62633;
var statearr_62635_63377 = state_62633__$1;
(statearr_62635_63377[(2)] = inst_62629);

(statearr_62635_63377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62634 === (1))){
var state_62633__$1 = state_62633;
var statearr_62636_63378 = state_62633__$1;
(statearr_62636_63378[(2)] = null);

(statearr_62636_63378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62634 === (4))){
var inst_62610 = (state_62633[(2)]);
var inst_62611 = have_handle_QMARK_();
var state_62633__$1 = (function (){var statearr_62637 = state_62633;
(statearr_62637[(7)] = inst_62610);

return statearr_62637;
})();
if(inst_62611){
var statearr_62638_63379 = state_62633__$1;
(statearr_62638_63379[(1)] = (5));

} else {
var statearr_62639_63380 = state_62633__$1;
(statearr_62639_63380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62634 === (6))){
var state_62633__$1 = state_62633;
var statearr_62640_63382 = state_62633__$1;
(statearr_62640_63382[(2)] = null);

(statearr_62640_63382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62634 === (3))){
var inst_62631 = (state_62633[(2)]);
var state_62633__$1 = state_62633;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62633__$1,inst_62631);
} else {
if((state_val_62634 === (2))){
var inst_62607 = cljs.core.deref(self__.udt_last_comms_);
var inst_62608 = cljs.core.async.timeout(ms_63375);
var state_62633__$1 = (function (){var statearr_62641 = state_62633;
(statearr_62641[(8)] = inst_62607);

return statearr_62641;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62633__$1,(4),inst_62608);
} else {
if((state_val_62634 === (9))){
var state_62633__$1 = state_62633;
var statearr_62642_63383 = state_62633__$1;
(statearr_62642_63383[(2)] = null);

(statearr_62642_63383[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62634 === (5))){
var inst_62607 = (state_62633[(8)]);
var inst_62613 = cljs.core.deref(self__.udt_last_comms_);
var inst_62614 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_62607,inst_62613);
var state_62633__$1 = state_62633;
if(inst_62614){
var statearr_62643_63384 = state_62633__$1;
(statearr_62643_63384[(1)] = (8));

} else {
var statearr_62644_63385 = state_62633__$1;
(statearr_62644_63385[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62634 === (10))){
var inst_62625 = (state_62633[(2)]);
var state_62633__$1 = (function (){var statearr_62645 = state_62633;
(statearr_62645[(9)] = inst_62625);

return statearr_62645;
})();
var statearr_62646_63387 = state_62633__$1;
(statearr_62646_63387[(2)] = null);

(statearr_62646_63387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62634 === (8))){
var inst_62616 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62617 = [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)];
var inst_62618 = (new cljs.core.PersistentVector(null,1,(5),inst_62616,inst_62617,null));
var inst_62619 = [new cljs.core.Keyword(null,"flush?","flush?",-108887231)];
var inst_62620 = [true];
var inst_62621 = cljs.core.PersistentHashMap.fromArrays(inst_62619,inst_62620);
var inst_62622 = chsk__$1.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(null,inst_62618,inst_62621);
var state_62633__$1 = state_62633;
var statearr_62647_63388 = state_62633__$1;
(statearr_62647_63388[(2)] = inst_62622);

(statearr_62647_63388[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__49411__auto__ = null;
var taoensso$sente$state_machine__49411__auto____0 = (function (){
var statearr_62648 = [null,null,null,null,null,null,null,null,null,null];
(statearr_62648[(0)] = taoensso$sente$state_machine__49411__auto__);

(statearr_62648[(1)] = (1));

return statearr_62648;
});
var taoensso$sente$state_machine__49411__auto____1 = (function (state_62633){
while(true){
var ret_value__49412__auto__ = (function (){try{while(true){
var result__49413__auto__ = switch__49410__auto__(state_62633);
if(cljs.core.keyword_identical_QMARK_(result__49413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49413__auto__;
}
break;
}
}catch (e62649){if((e62649 instanceof Object)){
var ex__49414__auto__ = e62649;
var statearr_62650_63389 = state_62633;
(statearr_62650_63389[(5)] = ex__49414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62649;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63390 = state_62633;
state_62633 = G__63390;
continue;
} else {
return ret_value__49412__auto__;
}
break;
}
});
taoensso$sente$state_machine__49411__auto__ = function(state_62633){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__49411__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__49411__auto____1.call(this,state_62633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__49411__auto____0;
taoensso$sente$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__49411__auto____1;
return taoensso$sente$state_machine__49411__auto__;
})()
})();
var state__49513__auto__ = (function (){var statearr_62651 = (f__49512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49512__auto__.cljs$core$IFn$_invoke$arity$0() : f__49512__auto__.call(null));
(statearr_62651[(6)] = c__49511__auto___63376);

return statearr_62651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49513__auto__);
}));

} else {
}

cljs.core.reset_BANG_(self__.retry_count_,(0));

connect_fn();

return chsk__$1;
} else {
return null;
}
}));

(taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"ws-kalive-ms","ws-kalive-ms",-1212255801,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"retry-count_","retry-count_",1660769620,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"udt-last-comms_","udt-last-comms_",1494731888,null)], null);
}));

(taoensso.sente.ChWebSocket.cljs$lang$type = true);

(taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChWebSocket",null,(1),null));
}));

(taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"taoensso.sente/ChWebSocket");
}));

/**
 * Positional factory function for taoensso.sente/ChWebSocket.
 */
taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChWebSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__62534){
var extmap__4419__auto__ = (function (){var G__62652 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__62534,new cljs.core.Keyword(null,"client-id","client-id",-464622140),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], 0));
if(cljs.core.record_QMARK_(G__62534)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__62652);
} else {
return G__62652;
}
})();
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__62534),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__62534),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__62534),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__62534),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__62534),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968).cljs$core$IFn$_invoke$arity$1(G__62534),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__62534),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__62534),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__62534),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__62534),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__62534),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__62534),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__62534),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639).cljs$core$IFn$_invoke$arity$1(G__62534),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

taoensso.sente.new_ChWebSocket = (function taoensso$sente$new_ChWebSocket(opts){
return taoensso.sente.map__GT_ChWebSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"socket_","socket_",-361048908),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
/**
 * We must set *some* client-side timeout otherwise an unpredictable (and
 *   probably too short) browser default will be used. Must be > server's
 *   :lp-timeout-ms.
 */
taoensso.sente.default_client_side_ajax_timeout_ms = taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(60)], 0));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k62660,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__62664 = k62660;
var G__62664__$1 = (((G__62664 instanceof cljs.core.Keyword))?G__62664.fqn:null);
switch (G__62664__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "state_":
return self__.state_;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "curr-xhr_":
return self__.curr_xhr_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k62660,else__4383__auto__);

}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__62665){
var vec__62666 = p__62665;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62666,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62666,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62659){
var self__ = this;
var G__62659__$1 = this;
return (new cljs.core.RecordIter((0),G__62659__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (11 + cljs.core.count(self__.__extmap));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__62669 = (function (coll__4377__auto__){
return (-266770752 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__62669(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this62661,other62662){
var self__ = this;
var this62661__$1 = this;
return (((!((other62662 == null)))) && ((this62661__$1.constructor === other62662.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62661__$1.client_id,other62662.client_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62661__$1.chs,other62662.chs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62661__$1.params,other62662.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62661__$1.packer,other62662.packer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62661__$1.url,other62662.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62661__$1.state_,other62662.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62661__$1.instance_handle_,other62662.instance_handle_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62661__$1.ever_opened_QMARK__,other62662.ever_opened_QMARK__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62661__$1.backoff_ms_fn,other62662.backoff_ms_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62661__$1.ajax_opts,other62662.ajax_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62661__$1.curr_xhr_,other62662.curr_xhr_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62661__$1.__extmap,other62662.__extmap)));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__62659){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__62670 = cljs.core.keyword_identical_QMARK_;
var expr__62671 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__62673 = new cljs.core.Keyword(null,"client-id","client-id",-464622140);
var G__62674 = expr__62671;
return (pred__62670.cljs$core$IFn$_invoke$arity$2 ? pred__62670.cljs$core$IFn$_invoke$arity$2(G__62673,G__62674) : pred__62670.call(null,G__62673,G__62674));
})())){
return (new taoensso.sente.ChAjaxSocket(G__62659,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__62675 = new cljs.core.Keyword(null,"chs","chs",376886120);
var G__62676 = expr__62671;
return (pred__62670.cljs$core$IFn$_invoke$arity$2 ? pred__62670.cljs$core$IFn$_invoke$arity$2(G__62675,G__62676) : pred__62670.call(null,G__62675,G__62676));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__62659,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__62677 = new cljs.core.Keyword(null,"params","params",710516235);
var G__62678 = expr__62671;
return (pred__62670.cljs$core$IFn$_invoke$arity$2 ? pred__62670.cljs$core$IFn$_invoke$arity$2(G__62677,G__62678) : pred__62670.call(null,G__62677,G__62678));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__62659,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__62679 = new cljs.core.Keyword(null,"packer","packer",66077544);
var G__62680 = expr__62671;
return (pred__62670.cljs$core$IFn$_invoke$arity$2 ? pred__62670.cljs$core$IFn$_invoke$arity$2(G__62679,G__62680) : pred__62670.call(null,G__62679,G__62680));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__62659,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__62681 = new cljs.core.Keyword(null,"url","url",276297046);
var G__62682 = expr__62671;
return (pred__62670.cljs$core$IFn$_invoke$arity$2 ? pred__62670.cljs$core$IFn$_invoke$arity$2(G__62681,G__62682) : pred__62670.call(null,G__62681,G__62682));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__62659,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__62683 = new cljs.core.Keyword(null,"state_","state_",957667102);
var G__62684 = expr__62671;
return (pred__62670.cljs$core$IFn$_invoke$arity$2 ? pred__62670.cljs$core$IFn$_invoke$arity$2(G__62683,G__62684) : pred__62670.call(null,G__62683,G__62684));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__62659,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__62685 = new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457);
var G__62686 = expr__62671;
return (pred__62670.cljs$core$IFn$_invoke$arity$2 ? pred__62670.cljs$core$IFn$_invoke$arity$2(G__62685,G__62686) : pred__62670.call(null,G__62685,G__62686));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__62659,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__62687 = new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913);
var G__62688 = expr__62671;
return (pred__62670.cljs$core$IFn$_invoke$arity$2 ? pred__62670.cljs$core$IFn$_invoke$arity$2(G__62687,G__62688) : pred__62670.call(null,G__62687,G__62688));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__62659,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__62689 = new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955);
var G__62690 = expr__62671;
return (pred__62670.cljs$core$IFn$_invoke$arity$2 ? pred__62670.cljs$core$IFn$_invoke$arity$2(G__62689,G__62690) : pred__62670.call(null,G__62689,G__62690));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__62659,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__62691 = new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109);
var G__62692 = expr__62671;
return (pred__62670.cljs$core$IFn$_invoke$arity$2 ? pred__62670.cljs$core$IFn$_invoke$arity$2(G__62691,G__62692) : pred__62670.call(null,G__62691,G__62692));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__62659,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__62693 = new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696);
var G__62694 = expr__62671;
return (pred__62670.cljs$core$IFn$_invoke$arity$2 ? pred__62670.cljs$core$IFn$_invoke$arity$2(G__62693,G__62694) : pred__62670.call(null,G__62693,G__62694));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__62659,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__62659),null));
}
}
}
}
}
}
}
}
}
}
}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"url","url",276297046),self__.url,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_,null))], null),self__.__extmap));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__62659){
var self__ = this;
var this__4379__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__62659,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_(self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__62653_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__62653_SHARP_,reason);
}));

var temp__5735__auto__ = cljs.core.deref(self__.curr_xhr_);
if(cljs.core.truth_(temp__5735__auto__)){
var x = temp__5735__auto__;
return x.abort();
} else {
return null;
}
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__62695 = opts;
var map__62695__$1 = (((((!((map__62695 == null))))?(((((map__62695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62695):map__62695);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62695__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62695__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62695__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_));
var G__62697_63392 = self__.url;
var G__62698_63393 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__4126__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token], null)], 0)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null)], 0));
})()], null)], 0));
var G__62699_63394 = (function taoensso$sente$ajax_cb(p__62700){
var map__62701 = p__62700;
var map__62701__$1 = (((((!((map__62701 == null))))?(((((map__62701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62701):map__62701);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62701__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62701__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
var G__62703 = new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489);
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__62703) : _QMARK_cb_fn.call(null,G__62703));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__62654_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__62654_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}));

if(cljs.core.truth_(_QMARK_cb_fn)){
var G__62704 = new cljs.core.Keyword("chsk","error","chsk/error",-984175439);
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__62704) : _QMARK_cb_fn.call(null,G__62704));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__62705 = taoensso.sente.unpack(self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62705,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62705,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(resp_clj) : _QMARK_cb_fn.call(null,resp_clj));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1203,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
}),null)),null,128262619);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__62655_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__62655_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
}));
}
});
(taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__62697_63392,G__62698_63393,G__62699_63394) : taoensso.sente.ajax_lite.call(null,G__62697_63392,G__62698_63393,G__62699_63394));

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var instance_handle = cljs.core.reset_BANG_(self__.instance_handle_,taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0());
var have_handle_QMARK_ = (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.instance_handle_),instance_handle);
});
var poll_fn = (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,1213,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
}),null)),null,-1563437938);

if(have_handle_QMARK_()){
var retry_fn = (function (){
if(have_handle_QMARK_()){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null,retry_count_STAR_));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1221,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
}),null)),null,492625614);

goog.global.setTimeout((function (){
return taoensso$sente$poll_fn(retry_count_STAR_);
}),backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__62656_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__62656_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
}));
} else {
return null;
}
});
return cljs.core.reset_BANG_(self__.curr_xhr_,(function (){var G__62708 = self__.url;
var G__62709 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null))], 0))], null)], 0));
var G__62710 = (function taoensso$sente$poll_fn_$_ajax_cb(p__62711){
var map__62712 = p__62711;
var map__62712__$1 = (((((!((map__62712 == null))))?(((((map__62712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62712):map__62712);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62712__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62712__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn((0));
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__62657_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__62657_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}));

return retry_fn();

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__62714 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62714,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_(clj);
if(handshake_QMARK_){
taoensso.sente.receive_handshake_BANG_(new cljs.core.Keyword(null,"ajax","ajax",814345549),chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__62658_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__62658_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
}));

taoensso$sente$poll_fn((0));

if(handshake_QMARK_){
return null;
} else {
var or__4126__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)))?(function (){
if(cljs.core.truth_(cljs.core.deref(taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_(self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("debug","timeout","debug/timeout",309499949)], null)], null));
} else {
}

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
});
return (taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__62708,G__62709,G__62710) : taoensso.sente.ajax_lite.call(null,G__62708,G__62709,G__62710));
})());
} else {
return null;
}
});
poll_fn((0));

return chsk__$1;
}));

(taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null)], null);
}));

(taoensso.sente.ChAjaxSocket.cljs$lang$type = true);

(taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChAjaxSocket",null,(1),null));
}));

(taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"taoensso.sente/ChAjaxSocket");
}));

/**
 * Positional factory function for taoensso.sente/ChAjaxSocket.
 */
taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChAjaxSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__62663){
var extmap__4419__auto__ = (function (){var G__62717 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__62663,new cljs.core.Keyword(null,"client-id","client-id",-464622140),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], 0));
if(cljs.core.record_QMARK_(G__62663)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__62717);
} else {
return G__62717;
}
})();
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__62663),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__62663),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__62663),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__62663),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__62663),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__62663),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__62663),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__62663),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__62663),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__62663),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__62663),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

taoensso.sente.new_ChAjaxSocket = (function taoensso$sente$new_ChAjaxSocket(opts){
return taoensso.sente.map__GT_ChAjaxSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAutoSocket = (function (ws_chsk_opts,ajax_chsk_opts,state_,impl_,__meta,__extmap,__hash){
this.ws_chsk_opts = ws_chsk_opts;
this.ajax_chsk_opts = ajax_chsk_opts;
this.state_ = state_;
this.impl_ = impl_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k62719,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__62723 = k62719;
var G__62723__$1 = (((G__62723 instanceof cljs.core.Keyword))?G__62723.fqn:null);
switch (G__62723__$1) {
case "ws-chsk-opts":
return self__.ws_chsk_opts;

break;
case "ajax-chsk-opts":
return self__.ajax_chsk_opts;

break;
case "state_":
return self__.state_;

break;
case "impl_":
return self__.impl_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k62719,else__4383__auto__);

}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__62724){
var vec__62725 = p__62724;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62725,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62725,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62718){
var self__ = this;
var G__62718__$1 = this;
return (new cljs.core.RecordIter((0),G__62718__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__62728 = (function (coll__4377__auto__){
return (-1193508708 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__62728(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this62720,other62721){
var self__ = this;
var this62720__$1 = this;
return (((!((other62721 == null)))) && ((this62720__$1.constructor === other62721.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62720__$1.ws_chsk_opts,other62721.ws_chsk_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62720__$1.ajax_chsk_opts,other62721.ajax_chsk_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62720__$1.state_,other62721.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62720__$1.impl_,other62721.impl_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62720__$1.__extmap,other62721.__extmap)));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl_","impl_",1218818179),null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),null,new cljs.core.Keyword(null,"state_","state_",957667102),null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__62718){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__62729 = cljs.core.keyword_identical_QMARK_;
var expr__62730 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__62732 = new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104);
var G__62733 = expr__62730;
return (pred__62729.cljs$core$IFn$_invoke$arity$2 ? pred__62729.cljs$core$IFn$_invoke$arity$2(G__62732,G__62733) : pred__62729.call(null,G__62732,G__62733));
})())){
return (new taoensso.sente.ChAutoSocket(G__62718,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__62734 = new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327);
var G__62735 = expr__62730;
return (pred__62729.cljs$core$IFn$_invoke$arity$2 ? pred__62729.cljs$core$IFn$_invoke$arity$2(G__62734,G__62735) : pred__62729.call(null,G__62734,G__62735));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__62718,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__62736 = new cljs.core.Keyword(null,"state_","state_",957667102);
var G__62737 = expr__62730;
return (pred__62729.cljs$core$IFn$_invoke$arity$2 ? pred__62729.cljs$core$IFn$_invoke$arity$2(G__62736,G__62737) : pred__62729.call(null,G__62736,G__62737));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__62718,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__62738 = new cljs.core.Keyword(null,"impl_","impl_",1218818179);
var G__62739 = expr__62730;
return (pred__62729.cljs$core$IFn$_invoke$arity$2 ? pred__62729.cljs$core$IFn$_invoke$arity$2(G__62738,G__62739) : pred__62729.call(null,G__62738,G__62739));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__62718,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__62718),null));
}
}
}
}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_,null))], null),self__.__extmap));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__62718){
var self__ = this;
var this__4379__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__62718,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
var temp__5735__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5735__auto__)){
var impl = temp__5735__auto__;
return taoensso.sente._chsk_disconnect_BANG_(impl,reason);
} else {
return null;
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__5735__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5735__auto__)){
var impl = temp__5735__auto__;
taoensso.sente._chsk_disconnect_BANG_(impl,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
} else {
return null;
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var temp__5733__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5733__auto__)){
var impl = temp__5733__auto__;
return taoensso.sente._chsk_send_BANG_(impl,ev,opts);
} else {
var map__62740 = opts;
var map__62740__$1 = (((((!((map__62740 == null))))?(((((map__62740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62740):map__62740);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62740__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var ajax_chsk_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ajax_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ws_chsk_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ws_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ajax_conn_BANG_ = (function (){
cljs.core.remove_watch(self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080));

return taoensso.sente.new_ChAjaxSocket(ajax_chsk_opts__$1).taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});
var ws_conn_BANG_ = (function (){
var downgraded_QMARK___63396 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
cljs.core.add_watch(self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080),(function (_,___$1,old_state,new_state){
var temp__5735__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5735__auto__)){
var impl = temp__5735__auto__;
var temp__5735__auto____$1 = new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(impl);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ever_opened_QMARK__ = temp__5735__auto____$1;
if(cljs.core.truth_(cljs.core.deref(ever_opened_QMARK__))){
return null;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502).cljs$core$IFn$_invoke$arity$1(new_state))){
if(cljs.core.compare_and_set_BANG_(downgraded_QMARK___63396,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1349,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
}),null)),null,1749974700);

taoensso.sente._chsk_disconnect_BANG_(impl,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720));

return cljs.core.reset_BANG_(self__.impl_,ajax_conn_BANG_());
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
}));

return taoensso.sente.new_ChWebSocket(ws_chsk_opts__$1).taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});
cljs.core.reset_BANG_(self__.impl_,(function (){var or__4126__auto__ = ws_conn_BANG_();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ajax_conn_BANG_();
}
})());

return chsk__$1;
}));

(taoensso.sente.ChAutoSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ws-chsk-opts","ws-chsk-opts",-349638577,null),new cljs.core.Symbol(null,"ajax-chsk-opts","ajax-chsk-opts",-1051844442,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"impl_","impl_",-1435617590,null)], null);
}));

(taoensso.sente.ChAutoSocket.cljs$lang$type = true);

(taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChAutoSocket",null,(1),null));
}));

(taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"taoensso.sente/ChAutoSocket");
}));

/**
 * Positional factory function for taoensso.sente/ChAutoSocket.
 */
taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChAutoSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__62722){
var extmap__4419__auto__ = (function (){var G__62742 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__62722,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], 0));
if(cljs.core.record_QMARK_(G__62722)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__62742);
} else {
return G__62742;
}
})();
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__62722),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__62722),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__62722),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__62722),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts){
return taoensso.sente.map__GT_ChAutoSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__62743 = protocol;
var G__62743__$1 = (((G__62743 instanceof cljs.core.Keyword))?G__62743.fqn:null);
switch (G__62743__$1) {
case "http":
return "http:";

break;
case "https":
return "https:";

break;
default:
return protocol;

}
})();
var protocol__$2 = (function (){var e = (function (){try{if((function (){var fexpr__62746 = (function (x){
return cljs.core.contains_QMARK_((function (){var G__62747 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__62747) : taoensso.truss.impl.set_STAR_.call(null,G__62747));
})(),x);
});
return fexpr__62746(protocol__$1);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e62744){if((e62744 instanceof Error)){
var e = e62744;
return e;
} else {
throw e62744;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1369,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__62748 = type;
var G__62748__$1 = (((G__62748 instanceof cljs.core.Keyword))?G__62748.fqn:null);
switch (G__62748__$1) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__62749 = protocol__$2;
switch (G__62749) {
case "https:":
return "wss:";

break;
case "http:":
return "ws:";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62749)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62748__$1)].join('')));

}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$3),"//",taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([host,path], 0))].join('');
});
/**
 * Returns nil on failure, or a map with keys:
 *     :ch-recv ; core.async channel to receive `event-msg`s (internal or from
 *              ; clients). May `put!` (inject) arbitrary `event`s to this channel.
 *     :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *     :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *     :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *     :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
 *     :protocol       ; Server protocol, e/o #{:http :https}.
 *     :host           ; Server host (defaults to current page's host).
 *     :params         ; Map of any params to incl. in chsk Ring requests (handy
 *                     ; for application-level auth, etc.).
 *     :packer         ; :edn (default), or an IPacker implementation.
 *     :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`.
 *     :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 *     :ws-kalive-ms   ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to server's :ws-kalive-ms.
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___63400 = arguments.length;
var i__4737__auto___63401 = (0);
while(true){
if((i__4737__auto___63401 < len__4736__auto___63400)){
args__4742__auto__.push((arguments[i__4737__auto___63401]));

var G__63402 = (i__4737__auto___63401 + (1));
i__4737__auto___63401 = G__63402;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__62752){
var vec__62753 = p__62752;
var map__62756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62753,(0),null);
var map__62756__$1 = (((((!((map__62756 == null))))?(((((map__62756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62756):map__62756);
var opts = map__62756__$1;
var ajax_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62756__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62756__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(20)], 0)));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62756__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
}
})());
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62756__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62756__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62756__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62756__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62756__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62756__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer((2048)));
var backoff_ms_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62756__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62756__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62753,(1),null);
var e_63403 = (function (){try{if((function (){var fexpr__62760 = (function (x){
return cljs.core.contains_QMARK_((function (){var G__62761 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__62761) : taoensso.truss.impl.set_STAR_.call(null,G__62761));
})(),x);
});
return fexpr__62760(type);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e62758){if((e62758 instanceof Error)){
var e_63403 = e62758;
return e_63403;
} else {
throw e62758;

}
}})();
if((e_63403 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1411,"([:in #{:ws :ajax :auto}] type)",type,e_63403,null);
}

var e_63404 = (function (){try{if(taoensso.encore.nblank_str_QMARK_(client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e62762){if((e62762 instanceof Error)){
var e_63404 = e62762;
return e_63404;
} else {
throw e62762;

}
}})();
if((e_63404 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1412,"(enc/nblank-str? client-id)",client_id,e_63404,null);
}

if((!((_deprecated_more_opts == null)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1414,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
}),null)),null,-562309239);
} else {
}

if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1415,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
}),null)),null,296238310);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer(packer);
var vec__62763 = (function (){var win_loc = taoensso.encore.get_win_loc();
var path__$1 = (function (){var or__4126__auto__ = path;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
var temp__5733__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__62766 = path__$1;
var G__62767 = win_loc;
var G__62768 = new cljs.core.Keyword(null,"ws","ws",86841443);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__62766,G__62767,G__62768) : f.call(null,G__62766,G__62767,G__62768));
})(),(function (){var G__62769 = path__$1;
var G__62770 = win_loc;
var G__62771 = new cljs.core.Keyword(null,"ajax","ajax",814345549);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__62769,G__62770,G__62771) : f.call(null,G__62769,G__62770,G__62771));
})()], null);
} else {
var protocol__$1 = (function (){var or__4126__auto__ = protocol;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_loc);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"http","http",382524695);
}
}
})();
var host__$1 = (function (){var or__4126__auto__ = host;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url(protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443)),taoensso.sente.get_chsk_url(protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
}
})();
var ws_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62763,(0),null);
var ajax_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62763,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((128))),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),(function (){var buf = cljs.core.async.sliding_buffer((512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
})));
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),ws_url,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null)], 0));
var ajax_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ajax_url,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null)], 0));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),ws_chsk_opts,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_((function (){var G__62772 = type;
var G__62772__$1 = (((G__62772 instanceof cljs.core.Keyword))?G__62772.fqn:null);
switch (G__62772__$1) {
case "ws":
return taoensso.sente.new_ChWebSocket(ws_chsk_opts);

break;
case "ajax":
return taoensso.sente.new_ChAjaxSocket(ajax_chsk_opts);

break;
case "auto":
return taoensso.sente.new_ChAutoSocket(auto_chsk_opts);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62772__$1)].join('')));

}
})());
var temp__5733__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__5733__auto__)){
var chsk = temp__5733__auto__;
var chsk_state_ = new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk);
var internal_ch = new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs);
var send_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs)], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (ev){
var vec__62773 = taoensso.sente.as_event(ev);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62773,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62773,(1),null);
var ev__$1 = vec__62773;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),internal_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),chsk_state_,new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
})));
cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2(ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1503,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
}),null)),null,-1040774144);
}
}));

(taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq62750){
var G__62751 = cljs.core.first(seq62750);
var seq62750__$1 = cljs.core.next(seq62750);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62751,seq62750__$1);
}));

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__62776 = opts;
var map__62776__$1 = (((((!((map__62776 == null))))?(((((map__62776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62776):map__62776);
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62776__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62776__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62776__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
var ch_ctrl = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var execute1 = (function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var c__49511__auto___63406 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49512__auto__ = (function (){var switch__49410__auto__ = (function (state_62825){
var state_val_62826 = (state_62825[(1)]);
if((state_val_62826 === (7))){
var inst_62821 = (state_62825[(2)]);
var state_62825__$1 = state_62825;
var statearr_62827_63407 = state_62825__$1;
(statearr_62827_63407[(2)] = inst_62821);

(statearr_62827_63407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62826 === (1))){
var state_62825__$1 = state_62825;
var statearr_62828_63408 = state_62825__$1;
(statearr_62828_63408[(2)] = null);

(statearr_62828_63408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62826 === (4))){
var inst_62788 = (state_62825[(7)]);
var inst_62787 = (state_62825[(8)]);
var inst_62791 = (state_62825[(9)]);
var inst_62786 = (state_62825[(10)]);
var inst_62786__$1 = (state_62825[(2)]);
var inst_62787__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62786__$1,(0),null);
var inst_62788__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62786__$1,(1),null);
var inst_62789 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_62788__$1,ch_ctrl);
var inst_62790 = (inst_62787__$1 == null);
var inst_62791__$1 = ((inst_62789) || (inst_62790));
var state_62825__$1 = (function (){var statearr_62829 = state_62825;
(statearr_62829[(7)] = inst_62788__$1);

(statearr_62829[(8)] = inst_62787__$1);

(statearr_62829[(9)] = inst_62791__$1);

(statearr_62829[(10)] = inst_62786__$1);

return statearr_62829;
})();
if(cljs.core.truth_(inst_62791__$1)){
var statearr_62830_63409 = state_62825__$1;
(statearr_62830_63409[(1)] = (5));

} else {
var statearr_62831_63410 = state_62825__$1;
(statearr_62831_63410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62826 === (15))){
var inst_62787 = (state_62825[(8)]);
var state_62825__$1 = state_62825;
var statearr_62832_63411 = state_62825__$1;
(statearr_62832_63411[(2)] = inst_62787);

(statearr_62832_63411[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62826 === (13))){
var inst_62807 = (state_62825[(2)]);
var state_62825__$1 = state_62825;
var statearr_62833_63412 = state_62825__$1;
(statearr_62833_63412[(2)] = inst_62807);

(statearr_62833_63412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62826 === (6))){
var inst_62787 = (state_62825[(8)]);
var inst_62796 = (inst_62787 == null);
var inst_62797 = cljs.core.not(inst_62796);
var state_62825__$1 = state_62825;
if(inst_62797){
var statearr_62834_63413 = state_62825__$1;
(statearr_62834_63413[(1)] = (8));

} else {
var statearr_62835_63414 = state_62825__$1;
(statearr_62835_63414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62826 === (3))){
var inst_62823 = (state_62825[(2)]);
var state_62825__$1 = state_62825;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62825__$1,inst_62823);
} else {
if((state_val_62826 === (12))){
var state_62825__$1 = state_62825;
var statearr_62836_63415 = state_62825__$1;
(statearr_62836_63415[(2)] = false);

(statearr_62836_63415[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62826 === (2))){
var inst_62782 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62783 = [ch_recv,ch_ctrl];
var inst_62784 = (new cljs.core.PersistentVector(null,2,(5),inst_62782,inst_62783,null));
var state_62825__$1 = state_62825;
return cljs.core.async.ioc_alts_BANG_(state_62825__$1,(4),inst_62784);
} else {
if((state_val_62826 === (11))){
var state_62825__$1 = state_62825;
var statearr_62837_63416 = state_62825__$1;
(statearr_62837_63416[(2)] = true);

(statearr_62837_63416[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62826 === (9))){
var state_62825__$1 = state_62825;
var statearr_62838_63417 = state_62825__$1;
(statearr_62838_63417[(2)] = false);

(statearr_62838_63417[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62826 === (5))){
var state_62825__$1 = state_62825;
var statearr_62839_63418 = state_62825__$1;
(statearr_62839_63418[(2)] = null);

(statearr_62839_63418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62826 === (14))){
var inst_62787 = (state_62825[(8)]);
var inst_62812 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_62787);
var state_62825__$1 = state_62825;
var statearr_62840_63419 = state_62825__$1;
(statearr_62840_63419[(2)] = inst_62812);

(statearr_62840_63419[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62826 === (16))){
var inst_62788 = (state_62825[(7)]);
var inst_62787 = (state_62825[(8)]);
var inst_62791 = (state_62825[(9)]);
var inst_62786 = (state_62825[(10)]);
var inst_62815 = (state_62825[(2)]);
var inst_62816 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62815,new cljs.core.Keyword(null,"event","event",301435442));
var inst_62817 = (function (){var vec__62779 = inst_62786;
var v = inst_62787;
var p = inst_62788;
var stop_QMARK_ = inst_62791;
var map__62794 = inst_62815;
var event_msg = inst_62815;
var event = inst_62816;
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,1530,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
}),null)),null,171526977);
} else {
}

var G__62843 = (cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(taoensso.sente.server_event_msg_QMARK_(event_msg)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e62844){if((e62844 instanceof Error)){
var e = e62844;
return e;
} else {
throw e62844;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,"taoensso.sente",1533,"(server-event-msg? event-msg)",event_msg,e,null);
}
})():(function (){var e = (function (){try{if(taoensso.sente.client_event_msg_QMARK_(event_msg)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e62845){if((e62845 instanceof Error)){
var e = e62845;
return e;
} else {
throw e62845;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,"taoensso.sente",1534,"(client-event-msg? event-msg)",event_msg,e,null);
}
})());
return (event_msg_handler.cljs$core$IFn$_invoke$arity$1 ? event_msg_handler.cljs$core$IFn$_invoke$arity$1(G__62843) : event_msg_handler.call(null,G__62843));
}catch (e62841){if((e62841 instanceof Error)){
var e1 = e62841;
try{var temp__5733__auto__ = error_handler;
if(cljs.core.truth_(temp__5733__auto__)){
var eh = temp__5733__auto__;
return (error_handler.cljs$core$IFn$_invoke$arity$2 ? error_handler.cljs$core$IFn$_invoke$arity$2(e1,event_msg) : error_handler.call(null,e1,event_msg));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1539,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
}),null)),null,-1633232510);
}
}catch (e62842){if((e62842 instanceof Error)){
var e2 = e62842;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1540,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
}),null)),null,-1399471394);
} else {
throw e62842;

}
}} else {
throw e62841;

}
}});
})();
var inst_62818 = execute1(inst_62817);
var state_62825__$1 = (function (){var statearr_62846 = state_62825;
(statearr_62846[(11)] = inst_62818);

return statearr_62846;
})();
var statearr_62847_63420 = state_62825__$1;
(statearr_62847_63420[(2)] = null);

(statearr_62847_63420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62826 === (10))){
var inst_62810 = (state_62825[(2)]);
var state_62825__$1 = state_62825;
if(cljs.core.truth_(inst_62810)){
var statearr_62848_63421 = state_62825__$1;
(statearr_62848_63421[(1)] = (14));

} else {
var statearr_62849_63422 = state_62825__$1;
(statearr_62849_63422[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62826 === (8))){
var inst_62787 = (state_62825[(8)]);
var inst_62799 = inst_62787.cljs$lang$protocol_mask$partition0$;
var inst_62800 = (inst_62799 & (64));
var inst_62801 = inst_62787.cljs$core$ISeq$;
var inst_62802 = (cljs.core.PROTOCOL_SENTINEL === inst_62801);
var inst_62803 = ((inst_62800) || (inst_62802));
var state_62825__$1 = state_62825;
if(cljs.core.truth_(inst_62803)){
var statearr_62850_63423 = state_62825__$1;
(statearr_62850_63423[(1)] = (11));

} else {
var statearr_62851_63424 = state_62825__$1;
(statearr_62851_63424[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__49411__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__49411__auto____0 = (function (){
var statearr_62852 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62852[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__49411__auto__);

(statearr_62852[(1)] = (1));

return statearr_62852;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__49411__auto____1 = (function (state_62825){
while(true){
var ret_value__49412__auto__ = (function (){try{while(true){
var result__49413__auto__ = switch__49410__auto__(state_62825);
if(cljs.core.keyword_identical_QMARK_(result__49413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49413__auto__;
}
break;
}
}catch (e62853){if((e62853 instanceof Object)){
var ex__49414__auto__ = e62853;
var statearr_62854_63425 = state_62825;
(statearr_62854_63425[(5)] = ex__49414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62853;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63426 = state_62825;
state_62825 = G__63426;
continue;
} else {
return ret_value__49412__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__49411__auto__ = function(state_62825){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__49411__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__49411__auto____1.call(this,state_62825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__49411__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__49411__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__49411__auto__;
})()
})();
var state__49513__auto__ = (function (){var statearr_62855 = (f__49512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49512__auto__.cljs$core$IFn$_invoke$arity$0() : f__49512__auto__.call(null));
(statearr_62855[(6)] = c__49511__auto___63406);

return statearr_62855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49513__auto__);
}));


return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_(ch_ctrl);
});
});
/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 * 
 *   Or for simple automatic future-based threading of every request, enable
 *   the `:simple-auto-threading?` opt (disabled by default).
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___63427 = arguments.length;
var i__4737__auto___63428 = (0);
while(true){
if((i__4737__auto___63428 < len__4736__auto___63427)){
args__4742__auto__.push((arguments[i__4737__auto___63428]));

var G__63429 = (i__4737__auto___63428 + (1));
i__4737__auto___63428 = G__63429;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__62859){
var vec__62860 = p__62859;
var map__62863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62860,(0),null);
var map__62863__$1 = (((((!((map__62863 == null))))?(((((map__62863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62863):map__62863);
var opts = map__62863__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62863__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62863__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62863__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
return taoensso.sente._start_chsk_router_BANG_(new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
}));

(taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq62856){
var G__62857 = cljs.core.first(seq62856);
var seq62856__$1 = cljs.core.next(seq62856);
var G__62858 = cljs.core.first(seq62856__$1);
var seq62856__$2 = cljs.core.next(seq62856__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62857,G__62858,seq62856__$2);
}));

/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___63430 = arguments.length;
var i__4737__auto___63431 = (0);
while(true){
if((i__4737__auto___63431 < len__4736__auto___63430)){
args__4742__auto__.push((arguments[i__4737__auto___63431]));

var G__63432 = (i__4737__auto___63431 + (1));
i__4737__auto___63431 = G__63432;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__62868){
var vec__62869 = p__62868;
var map__62872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62869,(0),null);
var map__62872__$1 = (((((!((map__62872 == null))))?(((((map__62872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62872):map__62872);
var opts = map__62872__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62872__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62872__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_(cljs.core.not(new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
}));

(taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq62865){
var G__62866 = cljs.core.first(seq62865);
var seq62865__$1 = cljs.core.next(seq62865);
var G__62867 = cljs.core.first(seq62865__$1);
var seq62865__$2 = cljs.core.next(seq62865__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62866,G__62867,seq62865__$2);
}));

taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
/**
 * Platform-specific alias for `make-channel-socket-server!` or
 *   `make-channel-socket-client!`. Please see the appropriate aliased fn
 * docstring for details.
 */
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
/**
 * Platform-specific alias for `start-server-chsk-router!` or
 *   `start-client-chsk-router!`. Please see the appropriate aliased fn
 *   docstring for details.
 */
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_(ch_recv,(function (ev_msg){
var G__62874 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg);
var G__62875 = new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg);
return (event_handler.cljs$core$IFn$_invoke$arity$2 ? event_handler.cljs$core$IFn$_invoke$arity$2(G__62874,G__62875) : event_handler.call(null,G__62874,G__62875));
}));
});

/**
 * DEPRECATED. Please use `timbre/set-level!` instead
 */
taoensso.sente.set_logging_level_BANG_ = taoensso.timbre.set_level_BANG_;

/**
 * DEPRECATED: Please use `ajax-lite` instead
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;

/**
 * DEPRECATED
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__62876,websocket_QMARK_){
var map__62877 = p__62876;
var map__62877__$1 = (((((!((map__62877 == null))))?(((((map__62877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62877):map__62877);
var location = map__62877__$1;
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62877__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62877__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62877__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$1),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = path;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=taoensso.sente.js.map
