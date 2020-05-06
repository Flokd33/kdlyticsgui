goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53186 = arguments.length;
var i__4731__auto___53188 = (0);
while(true){
if((i__4731__auto___53188 < len__4730__auto___53186)){
args__4736__auto__.push((arguments[i__4731__auto___53188]));

var G__53190 = (i__4731__auto___53188 + (1));
i__4731__auto___53188 = G__53190;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq52954){
var G__52955 = cljs.core.first(seq52954);
var seq52954__$1 = cljs.core.next(seq52954);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52955,seq52954__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__52958){
var map__52959 = p__52958;
var map__52959__$1 = (((((!((map__52959 == null))))?(((((map__52959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52959):map__52959);
var src = map__52959__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52959__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52959__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__52961 = cljs.core.seq(sources);
var chunk__52962 = null;
var count__52963 = (0);
var i__52964 = (0);
while(true){
if((i__52964 < count__52963)){
var map__52971 = chunk__52962.cljs$core$IIndexed$_nth$arity$2(null,i__52964);
var map__52971__$1 = (((((!((map__52971 == null))))?(((((map__52971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52971):map__52971);
var src = map__52971__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52971__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52971__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52971__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52971__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e52973){var e_53199 = e52973;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_53199);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_53199.message)].join('')));
}

var G__53200 = seq__52961;
var G__53201 = chunk__52962;
var G__53202 = count__52963;
var G__53203 = (i__52964 + (1));
seq__52961 = G__53200;
chunk__52962 = G__53201;
count__52963 = G__53202;
i__52964 = G__53203;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52961);
if(temp__5735__auto__){
var seq__52961__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52961__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__52961__$1);
var G__53204 = cljs.core.chunk_rest(seq__52961__$1);
var G__53205 = c__4550__auto__;
var G__53206 = cljs.core.count(c__4550__auto__);
var G__53207 = (0);
seq__52961 = G__53204;
chunk__52962 = G__53205;
count__52963 = G__53206;
i__52964 = G__53207;
continue;
} else {
var map__52974 = cljs.core.first(seq__52961__$1);
var map__52974__$1 = (((((!((map__52974 == null))))?(((((map__52974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52974):map__52974);
var src = map__52974__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52974__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52974__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52974__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52974__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e52976){var e_53208 = e52976;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_53208);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_53208.message)].join('')));
}

var G__53209 = cljs.core.next(seq__52961__$1);
var G__53210 = null;
var G__53211 = (0);
var G__53212 = (0);
seq__52961 = G__53209;
chunk__52962 = G__53210;
count__52963 = G__53211;
i__52964 = G__53212;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__52977 = cljs.core.seq(js_requires);
var chunk__52978 = null;
var count__52979 = (0);
var i__52980 = (0);
while(true){
if((i__52980 < count__52979)){
var js_ns = chunk__52978.cljs$core$IIndexed$_nth$arity$2(null,i__52980);
var require_str_53213 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_53213);


var G__53214 = seq__52977;
var G__53215 = chunk__52978;
var G__53216 = count__52979;
var G__53217 = (i__52980 + (1));
seq__52977 = G__53214;
chunk__52978 = G__53215;
count__52979 = G__53216;
i__52980 = G__53217;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52977);
if(temp__5735__auto__){
var seq__52977__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52977__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__52977__$1);
var G__53218 = cljs.core.chunk_rest(seq__52977__$1);
var G__53219 = c__4550__auto__;
var G__53220 = cljs.core.count(c__4550__auto__);
var G__53221 = (0);
seq__52977 = G__53218;
chunk__52978 = G__53219;
count__52979 = G__53220;
i__52980 = G__53221;
continue;
} else {
var js_ns = cljs.core.first(seq__52977__$1);
var require_str_53222 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_53222);


var G__53223 = cljs.core.next(seq__52977__$1);
var G__53224 = null;
var G__53225 = (0);
var G__53226 = (0);
seq__52977 = G__53223;
chunk__52978 = G__53224;
count__52979 = G__53225;
i__52980 = G__53226;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__52983 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__52983) : callback.call(null,G__52983));
} else {
var G__52984 = shadow.cljs.devtools.client.env.files_url();
var G__52985 = ((function (G__52984){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__52984))
;
var G__52986 = "POST";
var G__52987 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__52988 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__52984,G__52985,G__52986,G__52987,G__52988);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__52990){
var map__52991 = p__52990;
var map__52991__$1 = (((((!((map__52991 == null))))?(((((map__52991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52991):map__52991);
var msg = map__52991__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52991__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52991__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__52993 = info;
var map__52993__$1 = (((((!((map__52993 == null))))?(((((map__52993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52993):map__52993);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52993__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52993__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__52993,map__52993__$1,sources,compiled,map__52991,map__52991__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52995(s__52996){
return (new cljs.core.LazySeq(null,((function (map__52993,map__52993__$1,sources,compiled,map__52991,map__52991__$1,msg,info,reload_info){
return (function (){
var s__52996__$1 = s__52996;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52996__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__53001 = cljs.core.first(xs__6292__auto__);
var map__53001__$1 = (((((!((map__53001 == null))))?(((((map__53001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53001):map__53001);
var src = map__53001__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53001__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53001__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__52996__$1,map__53001,map__53001__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__52993,map__52993__$1,sources,compiled,map__52991,map__52991__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52995_$_iter__52997(s__52998){
return (new cljs.core.LazySeq(null,((function (s__52996__$1,map__53001,map__53001__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__52993,map__52993__$1,sources,compiled,map__52991,map__52991__$1,msg,info,reload_info){
return (function (){
var s__52998__$1 = s__52998;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__52998__$1);
if(temp__5735__auto____$1){
var s__52998__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52998__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__52998__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__53000 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__52999 = (0);
while(true){
if((i__52999 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__52999);
cljs.core.chunk_append(b__53000,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__53227 = (i__52999 + (1));
i__52999 = G__53227;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53000),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52995_$_iter__52997(cljs.core.chunk_rest(s__52998__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53000),null);
}
} else {
var warning = cljs.core.first(s__52998__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52995_$_iter__52997(cljs.core.rest(s__52998__$2)));
}
} else {
return null;
}
break;
}
});})(s__52996__$1,map__53001,map__53001__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__52993,map__52993__$1,sources,compiled,map__52991,map__52991__$1,msg,info,reload_info))
,null,null));
});})(s__52996__$1,map__53001,map__53001__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__52993,map__52993__$1,sources,compiled,map__52991,map__52991__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52995(cljs.core.rest(s__52996__$1)));
} else {
var G__53228 = cljs.core.rest(s__52996__$1);
s__52996__$1 = G__53228;
continue;
}
} else {
var G__53229 = cljs.core.rest(s__52996__$1);
s__52996__$1 = G__53229;
continue;
}
} else {
return null;
}
break;
}
});})(map__52993,map__52993__$1,sources,compiled,map__52991,map__52991__$1,msg,info,reload_info))
,null,null));
});})(map__52993,map__52993__$1,sources,compiled,map__52991,map__52991__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__53003_53230 = cljs.core.seq(warnings);
var chunk__53004_53231 = null;
var count__53005_53232 = (0);
var i__53006_53233 = (0);
while(true){
if((i__53006_53233 < count__53005_53232)){
var map__53011_53234 = chunk__53004_53231.cljs$core$IIndexed$_nth$arity$2(null,i__53006_53233);
var map__53011_53235__$1 = (((((!((map__53011_53234 == null))))?(((((map__53011_53234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53011_53234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53011_53234):map__53011_53234);
var w_53236 = map__53011_53235__$1;
var msg_53237__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53011_53235__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_53238 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53011_53235__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53011_53235__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_53240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53011_53235__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_53240)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_53238),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_53239),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_53237__$1)].join(''));


var G__53241 = seq__53003_53230;
var G__53242 = chunk__53004_53231;
var G__53243 = count__53005_53232;
var G__53244 = (i__53006_53233 + (1));
seq__53003_53230 = G__53241;
chunk__53004_53231 = G__53242;
count__53005_53232 = G__53243;
i__53006_53233 = G__53244;
continue;
} else {
var temp__5735__auto___53245 = cljs.core.seq(seq__53003_53230);
if(temp__5735__auto___53245){
var seq__53003_53246__$1 = temp__5735__auto___53245;
if(cljs.core.chunked_seq_QMARK_(seq__53003_53246__$1)){
var c__4550__auto___53247 = cljs.core.chunk_first(seq__53003_53246__$1);
var G__53248 = cljs.core.chunk_rest(seq__53003_53246__$1);
var G__53249 = c__4550__auto___53247;
var G__53250 = cljs.core.count(c__4550__auto___53247);
var G__53251 = (0);
seq__53003_53230 = G__53248;
chunk__53004_53231 = G__53249;
count__53005_53232 = G__53250;
i__53006_53233 = G__53251;
continue;
} else {
var map__53013_53252 = cljs.core.first(seq__53003_53246__$1);
var map__53013_53253__$1 = (((((!((map__53013_53252 == null))))?(((((map__53013_53252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53013_53252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53013_53252):map__53013_53252);
var w_53254 = map__53013_53253__$1;
var msg_53255__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53013_53253__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_53256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53013_53253__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53013_53253__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_53258 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53013_53253__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_53258)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_53256),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_53257),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_53255__$1)].join(''));


var G__53259 = cljs.core.next(seq__53003_53246__$1);
var G__53260 = null;
var G__53261 = (0);
var G__53262 = (0);
seq__53003_53230 = G__53259;
chunk__53004_53231 = G__53260;
count__53005_53232 = G__53261;
i__53006_53233 = G__53262;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__52993,map__52993__$1,sources,compiled,warnings,map__52991,map__52991__$1,msg,info,reload_info){
return (function (p__53015){
var map__53016 = p__53015;
var map__53016__$1 = (((((!((map__53016 == null))))?(((((map__53016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53016):map__53016);
var src = map__53016__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53016__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53016__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__52993,map__52993__$1,sources,compiled,warnings,map__52991,map__52991__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__52993,map__52993__$1,sources,compiled,warnings,map__52991,map__52991__$1,msg,info,reload_info){
return (function (p__53018){
var map__53019 = p__53018;
var map__53019__$1 = (((((!((map__53019 == null))))?(((((map__53019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53019):map__53019);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53019__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__52993,map__52993__$1,sources,compiled,warnings,map__52991,map__52991__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__52993,map__52993__$1,sources,compiled,warnings,map__52991,map__52991__$1,msg,info,reload_info){
return (function (p__53021){
var map__53022 = p__53021;
var map__53022__$1 = (((((!((map__53022 == null))))?(((((map__53022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53022):map__53022);
var rc = map__53022__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53022__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__52993,map__52993__$1,sources,compiled,warnings,map__52991,map__52991__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__52993,map__52993__$1,sources,compiled,warnings,map__52991,map__52991__$1,msg,info,reload_info){
return (function (p1__52989_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__52989_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__52993,map__52993__$1,sources,compiled,warnings,map__52991,map__52991__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__53024){
var map__53025 = p__53024;
var map__53025__$1 = (((((!((map__53025 == null))))?(((((map__53025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53025):map__53025);
var msg = map__53025__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53025__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__53027 = cljs.core.seq(updates);
var chunk__53029 = null;
var count__53030 = (0);
var i__53031 = (0);
while(true){
if((i__53031 < count__53030)){
var path = chunk__53029.cljs$core$IIndexed$_nth$arity$2(null,i__53031);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__53057_53263 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__53060_53264 = null;
var count__53061_53265 = (0);
var i__53062_53266 = (0);
while(true){
if((i__53062_53266 < count__53061_53265)){
var node_53267 = chunk__53060_53264.cljs$core$IIndexed$_nth$arity$2(null,i__53062_53266);
var path_match_53268 = shadow.cljs.devtools.client.browser.match_paths(node_53267.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53268)){
var new_link_53269 = (function (){var G__53073 = node_53267.cloneNode(true);
G__53073.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53268),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53073;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53268], 0));

goog.dom.insertSiblingAfter(new_link_53269,node_53267);

goog.dom.removeNode(node_53267);


var G__53270 = seq__53057_53263;
var G__53271 = chunk__53060_53264;
var G__53272 = count__53061_53265;
var G__53273 = (i__53062_53266 + (1));
seq__53057_53263 = G__53270;
chunk__53060_53264 = G__53271;
count__53061_53265 = G__53272;
i__53062_53266 = G__53273;
continue;
} else {
var G__53274 = seq__53057_53263;
var G__53275 = chunk__53060_53264;
var G__53276 = count__53061_53265;
var G__53277 = (i__53062_53266 + (1));
seq__53057_53263 = G__53274;
chunk__53060_53264 = G__53275;
count__53061_53265 = G__53276;
i__53062_53266 = G__53277;
continue;
}
} else {
var temp__5735__auto___53278 = cljs.core.seq(seq__53057_53263);
if(temp__5735__auto___53278){
var seq__53057_53279__$1 = temp__5735__auto___53278;
if(cljs.core.chunked_seq_QMARK_(seq__53057_53279__$1)){
var c__4550__auto___53280 = cljs.core.chunk_first(seq__53057_53279__$1);
var G__53281 = cljs.core.chunk_rest(seq__53057_53279__$1);
var G__53282 = c__4550__auto___53280;
var G__53283 = cljs.core.count(c__4550__auto___53280);
var G__53284 = (0);
seq__53057_53263 = G__53281;
chunk__53060_53264 = G__53282;
count__53061_53265 = G__53283;
i__53062_53266 = G__53284;
continue;
} else {
var node_53285 = cljs.core.first(seq__53057_53279__$1);
var path_match_53286 = shadow.cljs.devtools.client.browser.match_paths(node_53285.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53286)){
var new_link_53287 = (function (){var G__53078 = node_53285.cloneNode(true);
G__53078.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53286),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53078;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53286], 0));

goog.dom.insertSiblingAfter(new_link_53287,node_53285);

goog.dom.removeNode(node_53285);


var G__53288 = cljs.core.next(seq__53057_53279__$1);
var G__53289 = null;
var G__53290 = (0);
var G__53291 = (0);
seq__53057_53263 = G__53288;
chunk__53060_53264 = G__53289;
count__53061_53265 = G__53290;
i__53062_53266 = G__53291;
continue;
} else {
var G__53292 = cljs.core.next(seq__53057_53279__$1);
var G__53293 = null;
var G__53294 = (0);
var G__53295 = (0);
seq__53057_53263 = G__53292;
chunk__53060_53264 = G__53293;
count__53061_53265 = G__53294;
i__53062_53266 = G__53295;
continue;
}
}
} else {
}
}
break;
}


var G__53296 = seq__53027;
var G__53297 = chunk__53029;
var G__53298 = count__53030;
var G__53299 = (i__53031 + (1));
seq__53027 = G__53296;
chunk__53029 = G__53297;
count__53030 = G__53298;
i__53031 = G__53299;
continue;
} else {
var G__53300 = seq__53027;
var G__53301 = chunk__53029;
var G__53302 = count__53030;
var G__53303 = (i__53031 + (1));
seq__53027 = G__53300;
chunk__53029 = G__53301;
count__53030 = G__53302;
i__53031 = G__53303;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53027);
if(temp__5735__auto__){
var seq__53027__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53027__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__53027__$1);
var G__53304 = cljs.core.chunk_rest(seq__53027__$1);
var G__53305 = c__4550__auto__;
var G__53306 = cljs.core.count(c__4550__auto__);
var G__53307 = (0);
seq__53027 = G__53304;
chunk__53029 = G__53305;
count__53030 = G__53306;
i__53031 = G__53307;
continue;
} else {
var path = cljs.core.first(seq__53027__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__53080_53308 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__53083_53309 = null;
var count__53084_53310 = (0);
var i__53085_53311 = (0);
while(true){
if((i__53085_53311 < count__53084_53310)){
var node_53312 = chunk__53083_53309.cljs$core$IIndexed$_nth$arity$2(null,i__53085_53311);
var path_match_53313 = shadow.cljs.devtools.client.browser.match_paths(node_53312.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53313)){
var new_link_53314 = (function (){var G__53098 = node_53312.cloneNode(true);
G__53098.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53313),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53098;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53313], 0));

goog.dom.insertSiblingAfter(new_link_53314,node_53312);

goog.dom.removeNode(node_53312);


var G__53315 = seq__53080_53308;
var G__53316 = chunk__53083_53309;
var G__53317 = count__53084_53310;
var G__53318 = (i__53085_53311 + (1));
seq__53080_53308 = G__53315;
chunk__53083_53309 = G__53316;
count__53084_53310 = G__53317;
i__53085_53311 = G__53318;
continue;
} else {
var G__53319 = seq__53080_53308;
var G__53320 = chunk__53083_53309;
var G__53321 = count__53084_53310;
var G__53322 = (i__53085_53311 + (1));
seq__53080_53308 = G__53319;
chunk__53083_53309 = G__53320;
count__53084_53310 = G__53321;
i__53085_53311 = G__53322;
continue;
}
} else {
var temp__5735__auto___53323__$1 = cljs.core.seq(seq__53080_53308);
if(temp__5735__auto___53323__$1){
var seq__53080_53324__$1 = temp__5735__auto___53323__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53080_53324__$1)){
var c__4550__auto___53325 = cljs.core.chunk_first(seq__53080_53324__$1);
var G__53326 = cljs.core.chunk_rest(seq__53080_53324__$1);
var G__53327 = c__4550__auto___53325;
var G__53328 = cljs.core.count(c__4550__auto___53325);
var G__53329 = (0);
seq__53080_53308 = G__53326;
chunk__53083_53309 = G__53327;
count__53084_53310 = G__53328;
i__53085_53311 = G__53329;
continue;
} else {
var node_53330 = cljs.core.first(seq__53080_53324__$1);
var path_match_53331 = shadow.cljs.devtools.client.browser.match_paths(node_53330.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53331)){
var new_link_53332 = (function (){var G__53101 = node_53330.cloneNode(true);
G__53101.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53331),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53101;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53331], 0));

goog.dom.insertSiblingAfter(new_link_53332,node_53330);

goog.dom.removeNode(node_53330);


var G__53333 = cljs.core.next(seq__53080_53324__$1);
var G__53334 = null;
var G__53335 = (0);
var G__53336 = (0);
seq__53080_53308 = G__53333;
chunk__53083_53309 = G__53334;
count__53084_53310 = G__53335;
i__53085_53311 = G__53336;
continue;
} else {
var G__53337 = cljs.core.next(seq__53080_53324__$1);
var G__53338 = null;
var G__53339 = (0);
var G__53340 = (0);
seq__53080_53308 = G__53337;
chunk__53083_53309 = G__53338;
count__53084_53310 = G__53339;
i__53085_53311 = G__53340;
continue;
}
}
} else {
}
}
break;
}


var G__53341 = cljs.core.next(seq__53027__$1);
var G__53342 = null;
var G__53343 = (0);
var G__53344 = (0);
seq__53027 = G__53341;
chunk__53029 = G__53342;
count__53030 = G__53343;
i__53031 = G__53344;
continue;
} else {
var G__53345 = cljs.core.next(seq__53027__$1);
var G__53346 = null;
var G__53347 = (0);
var G__53348 = (0);
seq__53027 = G__53345;
chunk__53029 = G__53346;
count__53030 = G__53347;
i__53031 = G__53348;
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
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
return (0,eval)(js);;
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__53112){
var map__53113 = p__53112;
var map__53113__$1 = (((((!((map__53113 == null))))?(((((map__53113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53113):map__53113);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53113__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53113__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__53113,map__53113__$1,id,js){
return (function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
});})(map__53113,map__53113__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__53119,done){
var map__53121 = p__53119;
var map__53121__$1 = (((((!((map__53121 == null))))?(((((map__53121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53121):map__53121);
var msg = map__53121__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53121__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53121__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53121__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53121__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__53121,map__53121__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__53127){
var map__53128 = p__53127;
var map__53128__$1 = (((((!((map__53128 == null))))?(((((map__53128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53128):map__53128);
var src = map__53128__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53128__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__53121,map__53121__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__53121,map__53121__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e53131){var e = e53131;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}});})(sources_to_load,map__53121,map__53121__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__53133,done){
var map__53134 = p__53133;
var map__53134__$1 = (((((!((map__53134 == null))))?(((((map__53134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53134):map__53134);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53134__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53134__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__53134,map__53134__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(map__53134,map__53134__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__53141){
var map__53142 = p__53141;
var map__53142__$1 = (((((!((map__53142 == null))))?(((((map__53142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53142):map__53142);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53142__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53142__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__53150,done){
var map__53151 = p__53150;
var map__53151__$1 = (((((!((map__53151 == null))))?(((((map__53151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53151):map__53151);
var msg = map__53151__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53151__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__53153_53349 = type;
var G__53153_53350__$1 = (((G__53153_53349 instanceof cljs.core.Keyword))?G__53153_53349.fqn:null);
switch (G__53153_53350__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__53159 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__53160 = ((function (G__53159){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__53159))
;
var G__53161 = "POST";
var G__53162 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__53163 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__53159,G__53160,G__53161,G__53162,G__53163);
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

return socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;
}catch (e53169){var e = e53169;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___53352 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___53352)){
var s_53353 = temp__5735__auto___53352;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_53353.onclose = ((function (s_53353,temp__5735__auto___53352){
return (function (e){
return null;
});})(s_53353,temp__5735__auto___53352))
;

s_53353.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
