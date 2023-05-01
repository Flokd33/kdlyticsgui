goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5804__auto__ = (function (){var fexpr__41950 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__41950.cljs$core$IFn$_invoke$arity$1 ? fexpr__41950.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__41950.call(null,channel));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var req = temp__5804__auto__;
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
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41951){
var vec__41952 = p__41951;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41952,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41952,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__41955 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__41955)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__41955)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__41955)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__41955)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__41955)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__41955)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41955)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__41956){
var map__41957 = p__41956;
var map__41957__$1 = cljs.core.__destructure_map(map__41957);
var request = map__41957__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41957__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41957__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41957__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__41958 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__41958,default_headers);

cljs_http.core.apply_response_type_BANG_(G__41958,response_type);

G__41958.setTimeoutInterval(timeout);

G__41958.setWithCredentials(send_credentials);

return G__41958;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__41959){
var map__41960 = p__41959;
var map__41960__$1 = cljs.core.__destructure_map(map__41960);
var request = map__41960__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41960__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41960__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41960__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41960__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41960__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41960__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__5045__auto__ = request_method;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__41961 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__41961) : cljs_http.core.error_kw.call(null,G__41961));
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
}));

if(cljs.core.truth_(progress)){
var listener_42001 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__41962_42002 = xhr;
G__41962_42002.setProgressEventsEnabled(true);

G__41962_42002.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_42001,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__41962_42002.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_42001,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__41282__auto___42003 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41283__auto__ = (function (){var switch__35484__auto__ = (function (state_41973){
var state_val_41974 = (state_41973[(1)]);
if((state_val_41974 === (1))){
var state_41973__$1 = state_41973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41973__$1,(2),cancel);
} else {
if((state_val_41974 === (2))){
var inst_41964 = (state_41973[(2)]);
var inst_41965 = xhr.isComplete();
var inst_41966 = cljs.core.not(inst_41965);
var state_41973__$1 = (function (){var statearr_41975 = state_41973;
(statearr_41975[(7)] = inst_41964);

return statearr_41975;
})();
if(inst_41966){
var statearr_41976_42004 = state_41973__$1;
(statearr_41976_42004[(1)] = (3));

} else {
var statearr_41977_42005 = state_41973__$1;
(statearr_41977_42005[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41974 === (3))){
var inst_41968 = xhr.abort();
var state_41973__$1 = state_41973;
var statearr_41978_42006 = state_41973__$1;
(statearr_41978_42006[(2)] = inst_41968);

(statearr_41978_42006[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41974 === (4))){
var state_41973__$1 = state_41973;
var statearr_41979_42007 = state_41973__$1;
(statearr_41979_42007[(2)] = null);

(statearr_41979_42007[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41974 === (5))){
var inst_41971 = (state_41973[(2)]);
var state_41973__$1 = state_41973;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41973__$1,inst_41971);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__35485__auto__ = null;
var cljs_http$core$xhr_$_state_machine__35485__auto____0 = (function (){
var statearr_41980 = [null,null,null,null,null,null,null,null];
(statearr_41980[(0)] = cljs_http$core$xhr_$_state_machine__35485__auto__);

(statearr_41980[(1)] = (1));

return statearr_41980;
});
var cljs_http$core$xhr_$_state_machine__35485__auto____1 = (function (state_41973){
while(true){
var ret_value__35486__auto__ = (function (){try{while(true){
var result__35487__auto__ = switch__35484__auto__(state_41973);
if(cljs.core.keyword_identical_QMARK_(result__35487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35487__auto__;
}
break;
}
}catch (e41981){var ex__35488__auto__ = e41981;
var statearr_41982_42010 = state_41973;
(statearr_41982_42010[(2)] = ex__35488__auto__);


if(cljs.core.seq((state_41973[(4)]))){
var statearr_41983_42011 = state_41973;
(statearr_41983_42011[(1)] = cljs.core.first((state_41973[(4)])));

} else {
throw ex__35488__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42012 = state_41973;
state_41973 = G__42012;
continue;
} else {
return ret_value__35486__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__35485__auto__ = function(state_41973){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__35485__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__35485__auto____1.call(this,state_41973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__35485__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__35485__auto____0;
cljs_http$core$xhr_$_state_machine__35485__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__35485__auto____1;
return cljs_http$core$xhr_$_state_machine__35485__auto__;
})()
})();
var state__41284__auto__ = (function (){var statearr_41984 = f__41283__auto__();
(statearr_41984[(6)] = c__41282__auto___42003);

return statearr_41984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41284__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__41985){
var map__41986 = p__41985;
var map__41986__$1 = cljs.core.__destructure_map(map__41986);
var request = map__41986__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41986__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41986__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41986__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41986__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_42016 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_42016], null));

if(cljs.core.truth_(cancel)){
var c__41282__auto___42017 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41283__auto__ = (function (){var switch__35484__auto__ = (function (state_41991){
var state_val_41992 = (state_41991[(1)]);
if((state_val_41992 === (1))){
var state_41991__$1 = state_41991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41991__$1,(2),cancel);
} else {
if((state_val_41992 === (2))){
var inst_41988 = (state_41991[(2)]);
var inst_41989 = jsonp.cancel(req_42016);
var state_41991__$1 = (function (){var statearr_41993 = state_41991;
(statearr_41993[(7)] = inst_41988);

return statearr_41993;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41991__$1,inst_41989);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__35485__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__35485__auto____0 = (function (){
var statearr_41994 = [null,null,null,null,null,null,null,null];
(statearr_41994[(0)] = cljs_http$core$jsonp_$_state_machine__35485__auto__);

(statearr_41994[(1)] = (1));

return statearr_41994;
});
var cljs_http$core$jsonp_$_state_machine__35485__auto____1 = (function (state_41991){
while(true){
var ret_value__35486__auto__ = (function (){try{while(true){
var result__35487__auto__ = switch__35484__auto__(state_41991);
if(cljs.core.keyword_identical_QMARK_(result__35487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35487__auto__;
}
break;
}
}catch (e41995){var ex__35488__auto__ = e41995;
var statearr_41996_42018 = state_41991;
(statearr_41996_42018[(2)] = ex__35488__auto__);


if(cljs.core.seq((state_41991[(4)]))){
var statearr_41997_42019 = state_41991;
(statearr_41997_42019[(1)] = cljs.core.first((state_41991[(4)])));

} else {
throw ex__35488__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42020 = state_41991;
state_41991 = G__42020;
continue;
} else {
return ret_value__35486__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__35485__auto__ = function(state_41991){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__35485__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__35485__auto____1.call(this,state_41991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__35485__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__35485__auto____0;
cljs_http$core$jsonp_$_state_machine__35485__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__35485__auto____1;
return cljs_http$core$jsonp_$_state_machine__35485__auto__;
})()
})();
var state__41284__auto__ = (function (){var statearr_41998 = f__41283__auto__();
(statearr_41998[(6)] = c__41282__auto___42017);

return statearr_41998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41284__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__41999){
var map__42000 = p__41999;
var map__42000__$1 = cljs.core.__destructure_map(map__42000);
var request = map__42000__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42000__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
