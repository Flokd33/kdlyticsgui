goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = (function (){var fexpr__55038 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__55038.cljs$core$IFn$_invoke$arity$1 ? fexpr__55038.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__55038.call(null,channel));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var req = temp__5735__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (formatted_h){
return (function (p__55039){
var vec__55040 = p__55039;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55040,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55040,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__55043 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__55043)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__55043)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__55043)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__55043)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__55043)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__55043)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55043)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__55044){
var map__55045 = p__55044;
var map__55045__$1 = (((((!((map__55045 == null))))?(((((map__55045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55045):map__55045);
var request = map__55045__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55045__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55045__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55045__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__55047 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__55047,default_headers);

cljs_http.core.apply_response_type_BANG_(G__55047,response_type);

G__55047.setTimeoutInterval(timeout);

G__55047.setWithCredentials(send_credentials);

return G__55047;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__55048){
var map__55049 = p__55048;
var map__55049__$1 = (((((!((map__55049 == null))))?(((((map__55049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55049):map__55049);
var request = map__55049__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55049__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55049__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55049__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55049__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55049__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55049__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4131__auto__ = request_method;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__55049,map__55049__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__55051 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__55051) : cljs_http.core.error_kw.call(null,G__55051));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,request_url,method,headers__$1,xhr,map__55049,map__55049__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_55091 = ((function (channel,request_url,method,headers__$1,xhr,map__55049,map__55049__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});})(channel,request_url,method,headers__$1,xhr,map__55049,map__55049__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__55052_55092 = xhr;
G__55052_55092.setProgressEventsEnabled(true);

G__55052_55092.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_55091,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__55052_55092.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_55091,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__49370__auto___55093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49370__auto___55093,channel,request_url,method,headers__$1,xhr,map__55049,map__55049__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__49371__auto__ = (function (){var switch__49300__auto__ = ((function (c__49370__auto___55093,channel,request_url,method,headers__$1,xhr,map__55049,map__55049__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_55063){
var state_val_55064 = (state_55063[(1)]);
if((state_val_55064 === (1))){
var state_55063__$1 = state_55063;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55063__$1,(2),cancel);
} else {
if((state_val_55064 === (2))){
var inst_55054 = (state_55063[(2)]);
var inst_55055 = xhr.isComplete();
var inst_55056 = cljs.core.not(inst_55055);
var state_55063__$1 = (function (){var statearr_55065 = state_55063;
(statearr_55065[(7)] = inst_55054);

return statearr_55065;
})();
if(inst_55056){
var statearr_55066_55094 = state_55063__$1;
(statearr_55066_55094[(1)] = (3));

} else {
var statearr_55067_55095 = state_55063__$1;
(statearr_55067_55095[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55064 === (3))){
var inst_55058 = xhr.abort();
var state_55063__$1 = state_55063;
var statearr_55068_55096 = state_55063__$1;
(statearr_55068_55096[(2)] = inst_55058);

(statearr_55068_55096[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55064 === (4))){
var state_55063__$1 = state_55063;
var statearr_55069_55097 = state_55063__$1;
(statearr_55069_55097[(2)] = null);

(statearr_55069_55097[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55064 === (5))){
var inst_55061 = (state_55063[(2)]);
var state_55063__$1 = state_55063;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55063__$1,inst_55061);
} else {
return null;
}
}
}
}
}
});})(c__49370__auto___55093,channel,request_url,method,headers__$1,xhr,map__55049,map__55049__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__49300__auto__,c__49370__auto___55093,channel,request_url,method,headers__$1,xhr,map__55049,map__55049__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__49301__auto__ = null;
var cljs_http$core$xhr_$_state_machine__49301__auto____0 = (function (){
var statearr_55070 = [null,null,null,null,null,null,null,null];
(statearr_55070[(0)] = cljs_http$core$xhr_$_state_machine__49301__auto__);

(statearr_55070[(1)] = (1));

return statearr_55070;
});
var cljs_http$core$xhr_$_state_machine__49301__auto____1 = (function (state_55063){
while(true){
var ret_value__49302__auto__ = (function (){try{while(true){
var result__49303__auto__ = switch__49300__auto__(state_55063);
if(cljs.core.keyword_identical_QMARK_(result__49303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49303__auto__;
}
break;
}
}catch (e55071){if((e55071 instanceof Object)){
var ex__49304__auto__ = e55071;
var statearr_55072_55098 = state_55063;
(statearr_55072_55098[(5)] = ex__49304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55071;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55099 = state_55063;
state_55063 = G__55099;
continue;
} else {
return ret_value__49302__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__49301__auto__ = function(state_55063){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__49301__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__49301__auto____1.call(this,state_55063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__49301__auto____0;
cljs_http$core$xhr_$_state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__49301__auto____1;
return cljs_http$core$xhr_$_state_machine__49301__auto__;
})()
;})(switch__49300__auto__,c__49370__auto___55093,channel,request_url,method,headers__$1,xhr,map__55049,map__55049__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__49372__auto__ = (function (){var statearr_55073 = (f__49371__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49371__auto__.cljs$core$IFn$_invoke$arity$0() : f__49371__auto__.call(null));
(statearr_55073[(6)] = c__49370__auto___55093);

return statearr_55073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49372__auto__);
});})(c__49370__auto___55093,channel,request_url,method,headers__$1,xhr,map__55049,map__55049__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__55074){
var map__55075 = p__55074;
var map__55075__$1 = (((((!((map__55075 == null))))?(((((map__55075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55075):map__55075);
var request = map__55075__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55075__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55075__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55075__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55075__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_55100 = jsonp.send(null,((function (channel,jsonp,map__55075,map__55075__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__55075,map__55075__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__55075,map__55075__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__55075,map__55075__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_55100], null));

if(cljs.core.truth_(cancel)){
var c__49370__auto___55101 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49370__auto___55101,req_55100,channel,jsonp,map__55075,map__55075__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__49371__auto__ = (function (){var switch__49300__auto__ = ((function (c__49370__auto___55101,req_55100,channel,jsonp,map__55075,map__55075__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_55081){
var state_val_55082 = (state_55081[(1)]);
if((state_val_55082 === (1))){
var state_55081__$1 = state_55081;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55081__$1,(2),cancel);
} else {
if((state_val_55082 === (2))){
var inst_55078 = (state_55081[(2)]);
var inst_55079 = jsonp.cancel(req_55100);
var state_55081__$1 = (function (){var statearr_55083 = state_55081;
(statearr_55083[(7)] = inst_55078);

return statearr_55083;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_55081__$1,inst_55079);
} else {
return null;
}
}
});})(c__49370__auto___55101,req_55100,channel,jsonp,map__55075,map__55075__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__49300__auto__,c__49370__auto___55101,req_55100,channel,jsonp,map__55075,map__55075__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__49301__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__49301__auto____0 = (function (){
var statearr_55084 = [null,null,null,null,null,null,null,null];
(statearr_55084[(0)] = cljs_http$core$jsonp_$_state_machine__49301__auto__);

(statearr_55084[(1)] = (1));

return statearr_55084;
});
var cljs_http$core$jsonp_$_state_machine__49301__auto____1 = (function (state_55081){
while(true){
var ret_value__49302__auto__ = (function (){try{while(true){
var result__49303__auto__ = switch__49300__auto__(state_55081);
if(cljs.core.keyword_identical_QMARK_(result__49303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49303__auto__;
}
break;
}
}catch (e55085){if((e55085 instanceof Object)){
var ex__49304__auto__ = e55085;
var statearr_55086_55102 = state_55081;
(statearr_55086_55102[(5)] = ex__49304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55085;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55103 = state_55081;
state_55081 = G__55103;
continue;
} else {
return ret_value__49302__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__49301__auto__ = function(state_55081){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__49301__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__49301__auto____1.call(this,state_55081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__49301__auto____0;
cljs_http$core$jsonp_$_state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__49301__auto____1;
return cljs_http$core$jsonp_$_state_machine__49301__auto__;
})()
;})(switch__49300__auto__,c__49370__auto___55101,req_55100,channel,jsonp,map__55075,map__55075__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__49372__auto__ = (function (){var statearr_55087 = (f__49371__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49371__auto__.cljs$core$IFn$_invoke$arity$0() : f__49371__auto__.call(null));
(statearr_55087[(6)] = c__49370__auto___55101);

return statearr_55087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49372__auto__);
});})(c__49370__auto___55101,req_55100,channel,jsonp,map__55075,map__55075__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__55088){
var map__55089 = p__55088;
var map__55089__$1 = (((((!((map__55089 == null))))?(((((map__55089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55089):map__55089);
var request = map__55089__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55089__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
