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
var args__4742__auto__ = [];
var len__4736__auto___53368 = arguments.length;
var i__4737__auto___53369 = (0);
while(true){
if((i__4737__auto___53369 < len__4736__auto___53368)){
args__4742__auto__.push((arguments[i__4737__auto___53369]));

var G__53370 = (i__4737__auto___53369 + (1));
i__4737__auto___53369 = G__53370;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq53219){
var G__53220 = cljs.core.first(seq53219);
var seq53219__$1 = cljs.core.next(seq53219);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53220,seq53219__$1);
}));

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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__53221){
var map__53222 = p__53221;
var map__53222__$1 = (((((!((map__53222 == null))))?(((((map__53222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53222):map__53222);
var src = map__53222__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53222__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53222__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4126__auto__){
return or__4126__auto__;
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
var seq__53224 = cljs.core.seq(sources);
var chunk__53225 = null;
var count__53226 = (0);
var i__53227 = (0);
while(true){
if((i__53227 < count__53226)){
var map__53234 = chunk__53225.cljs$core$IIndexed$_nth$arity$2(null,i__53227);
var map__53234__$1 = (((((!((map__53234 == null))))?(((((map__53234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53234):map__53234);
var src = map__53234__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53234__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53234__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53234__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53234__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e53236){var e_53371 = e53236;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_53371);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_53371.message)].join('')));
}

var G__53372 = seq__53224;
var G__53373 = chunk__53225;
var G__53374 = count__53226;
var G__53375 = (i__53227 + (1));
seq__53224 = G__53372;
chunk__53225 = G__53373;
count__53226 = G__53374;
i__53227 = G__53375;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53224);
if(temp__5735__auto__){
var seq__53224__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53224__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53224__$1);
var G__53376 = cljs.core.chunk_rest(seq__53224__$1);
var G__53377 = c__4556__auto__;
var G__53378 = cljs.core.count(c__4556__auto__);
var G__53379 = (0);
seq__53224 = G__53376;
chunk__53225 = G__53377;
count__53226 = G__53378;
i__53227 = G__53379;
continue;
} else {
var map__53237 = cljs.core.first(seq__53224__$1);
var map__53237__$1 = (((((!((map__53237 == null))))?(((((map__53237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53237):map__53237);
var src = map__53237__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53237__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53237__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53237__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53237__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e53239){var e_53380 = e53239;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_53380);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_53380.message)].join('')));
}

var G__53381 = cljs.core.next(seq__53224__$1);
var G__53382 = null;
var G__53383 = (0);
var G__53384 = (0);
seq__53224 = G__53381;
chunk__53225 = G__53382;
count__53226 = G__53383;
i__53227 = G__53384;
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
var seq__53240 = cljs.core.seq(js_requires);
var chunk__53241 = null;
var count__53242 = (0);
var i__53243 = (0);
while(true){
if((i__53243 < count__53242)){
var js_ns = chunk__53241.cljs$core$IIndexed$_nth$arity$2(null,i__53243);
var require_str_53385 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_53385);


var G__53386 = seq__53240;
var G__53387 = chunk__53241;
var G__53388 = count__53242;
var G__53389 = (i__53243 + (1));
seq__53240 = G__53386;
chunk__53241 = G__53387;
count__53242 = G__53388;
i__53243 = G__53389;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53240);
if(temp__5735__auto__){
var seq__53240__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53240__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53240__$1);
var G__53390 = cljs.core.chunk_rest(seq__53240__$1);
var G__53391 = c__4556__auto__;
var G__53392 = cljs.core.count(c__4556__auto__);
var G__53393 = (0);
seq__53240 = G__53390;
chunk__53241 = G__53391;
count__53242 = G__53392;
i__53243 = G__53393;
continue;
} else {
var js_ns = cljs.core.first(seq__53240__$1);
var require_str_53394 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_53394);


var G__53395 = cljs.core.next(seq__53240__$1);
var G__53396 = null;
var G__53397 = (0);
var G__53398 = (0);
seq__53240 = G__53395;
chunk__53241 = G__53396;
count__53242 = G__53397;
i__53243 = G__53398;
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
var G__53244 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__53244) : callback.call(null,G__53244));
} else {
var G__53245 = shadow.cljs.devtools.client.env.files_url();
var G__53246 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__53247 = "POST";
var G__53248 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__53249 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__53245,G__53246,G__53247,G__53248,G__53249);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__53251){
var map__53252 = p__53251;
var map__53252__$1 = (((((!((map__53252 == null))))?(((((map__53252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53252):map__53252);
var msg = map__53252__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53252__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53252__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__53254 = info;
var map__53254__$1 = (((((!((map__53254 == null))))?(((((map__53254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53254):map__53254);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53254__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53254__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53256(s__53257){
return (new cljs.core.LazySeq(null,(function (){
var s__53257__$1 = s__53257;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__53257__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__53262 = cljs.core.first(xs__6292__auto__);
var map__53262__$1 = (((((!((map__53262 == null))))?(((((map__53262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53262):map__53262);
var src = map__53262__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53262__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53262__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__53257__$1,map__53262,map__53262__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__53254,map__53254__$1,sources,compiled,map__53252,map__53252__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53256_$_iter__53258(s__53259){
return (new cljs.core.LazySeq(null,((function (s__53257__$1,map__53262,map__53262__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__53254,map__53254__$1,sources,compiled,map__53252,map__53252__$1,msg,info,reload_info){
return (function (){
var s__53259__$1 = s__53259;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__53259__$1);
if(temp__5735__auto____$1){
var s__53259__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53259__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__53259__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__53261 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__53260 = (0);
while(true){
if((i__53260 < size__4528__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__53260);
cljs.core.chunk_append(b__53261,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__53399 = (i__53260 + (1));
i__53260 = G__53399;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53261),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53256_$_iter__53258(cljs.core.chunk_rest(s__53259__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53261),null);
}
} else {
var warning = cljs.core.first(s__53259__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53256_$_iter__53258(cljs.core.rest(s__53259__$2)));
}
} else {
return null;
}
break;
}
});})(s__53257__$1,map__53262,map__53262__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__53254,map__53254__$1,sources,compiled,map__53252,map__53252__$1,msg,info,reload_info))
,null,null));
});})(s__53257__$1,map__53262,map__53262__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__53254,map__53254__$1,sources,compiled,map__53252,map__53252__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53256(cljs.core.rest(s__53257__$1)));
} else {
var G__53400 = cljs.core.rest(s__53257__$1);
s__53257__$1 = G__53400;
continue;
}
} else {
var G__53401 = cljs.core.rest(s__53257__$1);
s__53257__$1 = G__53401;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(sources);
})()));
var seq__53264_53402 = cljs.core.seq(warnings);
var chunk__53265_53403 = null;
var count__53266_53404 = (0);
var i__53267_53405 = (0);
while(true){
if((i__53267_53405 < count__53266_53404)){
var map__53272_53406 = chunk__53265_53403.cljs$core$IIndexed$_nth$arity$2(null,i__53267_53405);
var map__53272_53407__$1 = (((((!((map__53272_53406 == null))))?(((((map__53272_53406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53272_53406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53272_53406):map__53272_53406);
var w_53408 = map__53272_53407__$1;
var msg_53409__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53272_53407__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_53410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53272_53407__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53272_53407__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_53412 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53272_53407__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_53412)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_53410),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_53411),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_53409__$1)].join(''));


var G__53413 = seq__53264_53402;
var G__53414 = chunk__53265_53403;
var G__53415 = count__53266_53404;
var G__53416 = (i__53267_53405 + (1));
seq__53264_53402 = G__53413;
chunk__53265_53403 = G__53414;
count__53266_53404 = G__53415;
i__53267_53405 = G__53416;
continue;
} else {
var temp__5735__auto___53417 = cljs.core.seq(seq__53264_53402);
if(temp__5735__auto___53417){
var seq__53264_53418__$1 = temp__5735__auto___53417;
if(cljs.core.chunked_seq_QMARK_(seq__53264_53418__$1)){
var c__4556__auto___53419 = cljs.core.chunk_first(seq__53264_53418__$1);
var G__53420 = cljs.core.chunk_rest(seq__53264_53418__$1);
var G__53421 = c__4556__auto___53419;
var G__53422 = cljs.core.count(c__4556__auto___53419);
var G__53423 = (0);
seq__53264_53402 = G__53420;
chunk__53265_53403 = G__53421;
count__53266_53404 = G__53422;
i__53267_53405 = G__53423;
continue;
} else {
var map__53274_53424 = cljs.core.first(seq__53264_53418__$1);
var map__53274_53425__$1 = (((((!((map__53274_53424 == null))))?(((((map__53274_53424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53274_53424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53274_53424):map__53274_53424);
var w_53426 = map__53274_53425__$1;
var msg_53427__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53274_53425__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_53428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53274_53425__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53274_53425__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_53430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53274_53425__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_53430)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_53428),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_53429),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_53427__$1)].join(''));


var G__53431 = cljs.core.next(seq__53264_53418__$1);
var G__53432 = null;
var G__53433 = (0);
var G__53434 = (0);
seq__53264_53402 = G__53431;
chunk__53265_53403 = G__53432;
count__53266_53404 = G__53433;
i__53267_53405 = G__53434;
continue;
}
} else {
}
}
break;
}

if(cljs.core.not(shadow.cljs.devtools.client.env.autoload)){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.empty_QMARK_(warnings);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return shadow.cljs.devtools.client.env.ignore_warnings;
}
})())){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__53276){
var map__53277 = p__53276;
var map__53277__$1 = (((((!((map__53277 == null))))?(((((map__53277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53277):map__53277);
var src = map__53277__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53277__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53277__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__53279){
var map__53280 = p__53279;
var map__53280__$1 = (((((!((map__53280 == null))))?(((((map__53280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53280):map__53280);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53280__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__53282){
var map__53283 = p__53282;
var map__53283__$1 = (((((!((map__53283 == null))))?(((((map__53283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53283):map__53283);
var rc = map__53283__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53283__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__53250_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__53250_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
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
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__53285){
var map__53286 = p__53285;
var map__53286__$1 = (((((!((map__53286 == null))))?(((((map__53286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53286):map__53286);
var msg = map__53286__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53286__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__53288 = cljs.core.seq(updates);
var chunk__53290 = null;
var count__53291 = (0);
var i__53292 = (0);
while(true){
if((i__53292 < count__53291)){
var path = chunk__53290.cljs$core$IIndexed$_nth$arity$2(null,i__53292);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__53318_53435 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__53321_53436 = null;
var count__53322_53437 = (0);
var i__53323_53438 = (0);
while(true){
if((i__53323_53438 < count__53322_53437)){
var node_53439 = chunk__53321_53436.cljs$core$IIndexed$_nth$arity$2(null,i__53323_53438);
var path_match_53440 = shadow.cljs.devtools.client.browser.match_paths(node_53439.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53440)){
var new_link_53441 = (function (){var G__53328 = node_53439.cloneNode(true);
G__53328.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53440),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53328;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53440], 0));

goog.dom.insertSiblingAfter(new_link_53441,node_53439);

goog.dom.removeNode(node_53439);


var G__53442 = seq__53318_53435;
var G__53443 = chunk__53321_53436;
var G__53444 = count__53322_53437;
var G__53445 = (i__53323_53438 + (1));
seq__53318_53435 = G__53442;
chunk__53321_53436 = G__53443;
count__53322_53437 = G__53444;
i__53323_53438 = G__53445;
continue;
} else {
var G__53446 = seq__53318_53435;
var G__53447 = chunk__53321_53436;
var G__53448 = count__53322_53437;
var G__53449 = (i__53323_53438 + (1));
seq__53318_53435 = G__53446;
chunk__53321_53436 = G__53447;
count__53322_53437 = G__53448;
i__53323_53438 = G__53449;
continue;
}
} else {
var temp__5735__auto___53450 = cljs.core.seq(seq__53318_53435);
if(temp__5735__auto___53450){
var seq__53318_53451__$1 = temp__5735__auto___53450;
if(cljs.core.chunked_seq_QMARK_(seq__53318_53451__$1)){
var c__4556__auto___53452 = cljs.core.chunk_first(seq__53318_53451__$1);
var G__53453 = cljs.core.chunk_rest(seq__53318_53451__$1);
var G__53454 = c__4556__auto___53452;
var G__53455 = cljs.core.count(c__4556__auto___53452);
var G__53456 = (0);
seq__53318_53435 = G__53453;
chunk__53321_53436 = G__53454;
count__53322_53437 = G__53455;
i__53323_53438 = G__53456;
continue;
} else {
var node_53457 = cljs.core.first(seq__53318_53451__$1);
var path_match_53458 = shadow.cljs.devtools.client.browser.match_paths(node_53457.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53458)){
var new_link_53459 = (function (){var G__53329 = node_53457.cloneNode(true);
G__53329.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53458),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53329;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53458], 0));

goog.dom.insertSiblingAfter(new_link_53459,node_53457);

goog.dom.removeNode(node_53457);


var G__53460 = cljs.core.next(seq__53318_53451__$1);
var G__53461 = null;
var G__53462 = (0);
var G__53463 = (0);
seq__53318_53435 = G__53460;
chunk__53321_53436 = G__53461;
count__53322_53437 = G__53462;
i__53323_53438 = G__53463;
continue;
} else {
var G__53464 = cljs.core.next(seq__53318_53451__$1);
var G__53465 = null;
var G__53466 = (0);
var G__53467 = (0);
seq__53318_53435 = G__53464;
chunk__53321_53436 = G__53465;
count__53322_53437 = G__53466;
i__53323_53438 = G__53467;
continue;
}
}
} else {
}
}
break;
}


var G__53468 = seq__53288;
var G__53469 = chunk__53290;
var G__53470 = count__53291;
var G__53471 = (i__53292 + (1));
seq__53288 = G__53468;
chunk__53290 = G__53469;
count__53291 = G__53470;
i__53292 = G__53471;
continue;
} else {
var G__53472 = seq__53288;
var G__53473 = chunk__53290;
var G__53474 = count__53291;
var G__53475 = (i__53292 + (1));
seq__53288 = G__53472;
chunk__53290 = G__53473;
count__53291 = G__53474;
i__53292 = G__53475;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53288);
if(temp__5735__auto__){
var seq__53288__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53288__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53288__$1);
var G__53476 = cljs.core.chunk_rest(seq__53288__$1);
var G__53477 = c__4556__auto__;
var G__53478 = cljs.core.count(c__4556__auto__);
var G__53479 = (0);
seq__53288 = G__53476;
chunk__53290 = G__53477;
count__53291 = G__53478;
i__53292 = G__53479;
continue;
} else {
var path = cljs.core.first(seq__53288__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__53330_53480 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__53333_53481 = null;
var count__53334_53482 = (0);
var i__53335_53483 = (0);
while(true){
if((i__53335_53483 < count__53334_53482)){
var node_53484 = chunk__53333_53481.cljs$core$IIndexed$_nth$arity$2(null,i__53335_53483);
var path_match_53485 = shadow.cljs.devtools.client.browser.match_paths(node_53484.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53485)){
var new_link_53486 = (function (){var G__53340 = node_53484.cloneNode(true);
G__53340.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53485),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53340;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53485], 0));

goog.dom.insertSiblingAfter(new_link_53486,node_53484);

goog.dom.removeNode(node_53484);


var G__53487 = seq__53330_53480;
var G__53488 = chunk__53333_53481;
var G__53489 = count__53334_53482;
var G__53490 = (i__53335_53483 + (1));
seq__53330_53480 = G__53487;
chunk__53333_53481 = G__53488;
count__53334_53482 = G__53489;
i__53335_53483 = G__53490;
continue;
} else {
var G__53491 = seq__53330_53480;
var G__53492 = chunk__53333_53481;
var G__53493 = count__53334_53482;
var G__53494 = (i__53335_53483 + (1));
seq__53330_53480 = G__53491;
chunk__53333_53481 = G__53492;
count__53334_53482 = G__53493;
i__53335_53483 = G__53494;
continue;
}
} else {
var temp__5735__auto___53495__$1 = cljs.core.seq(seq__53330_53480);
if(temp__5735__auto___53495__$1){
var seq__53330_53496__$1 = temp__5735__auto___53495__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53330_53496__$1)){
var c__4556__auto___53497 = cljs.core.chunk_first(seq__53330_53496__$1);
var G__53498 = cljs.core.chunk_rest(seq__53330_53496__$1);
var G__53499 = c__4556__auto___53497;
var G__53500 = cljs.core.count(c__4556__auto___53497);
var G__53501 = (0);
seq__53330_53480 = G__53498;
chunk__53333_53481 = G__53499;
count__53334_53482 = G__53500;
i__53335_53483 = G__53501;
continue;
} else {
var node_53502 = cljs.core.first(seq__53330_53496__$1);
var path_match_53503 = shadow.cljs.devtools.client.browser.match_paths(node_53502.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53503)){
var new_link_53504 = (function (){var G__53341 = node_53502.cloneNode(true);
G__53341.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53503),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53341;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53503], 0));

goog.dom.insertSiblingAfter(new_link_53504,node_53502);

goog.dom.removeNode(node_53502);


var G__53505 = cljs.core.next(seq__53330_53496__$1);
var G__53506 = null;
var G__53507 = (0);
var G__53508 = (0);
seq__53330_53480 = G__53505;
chunk__53333_53481 = G__53506;
count__53334_53482 = G__53507;
i__53335_53483 = G__53508;
continue;
} else {
var G__53509 = cljs.core.next(seq__53330_53496__$1);
var G__53510 = null;
var G__53511 = (0);
var G__53512 = (0);
seq__53330_53480 = G__53509;
chunk__53333_53481 = G__53510;
count__53334_53482 = G__53511;
i__53335_53483 = G__53512;
continue;
}
}
} else {
}
}
break;
}


var G__53513 = cljs.core.next(seq__53288__$1);
var G__53514 = null;
var G__53515 = (0);
var G__53516 = (0);
seq__53288 = G__53513;
chunk__53290 = G__53514;
count__53291 = G__53515;
i__53292 = G__53516;
continue;
} else {
var G__53517 = cljs.core.next(seq__53288__$1);
var G__53518 = null;
var G__53519 = (0);
var G__53520 = (0);
seq__53288 = G__53517;
chunk__53290 = G__53518;
count__53291 = G__53519;
i__53292 = G__53520;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__53342){
var map__53343 = p__53342;
var map__53343__$1 = (((((!((map__53343 == null))))?(((((map__53343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53343):map__53343);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53343__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53343__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__53345,done){
var map__53346 = p__53345;
var map__53346__$1 = (((((!((map__53346 == null))))?(((((map__53346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53346):map__53346);
var msg = map__53346__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53346__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53346__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53346__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53346__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__53348){
var map__53349 = p__53348;
var map__53349__$1 = (((((!((map__53349 == null))))?(((((map__53349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53349):map__53349);
var src = map__53349__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53349__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e53351){var e = e53351;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__53352,done){
var map__53353 = p__53352;
var map__53353__$1 = (((((!((map__53353 == null))))?(((((map__53353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53353):map__53353);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53353__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53353__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__53355){
var map__53356 = p__53355;
var map__53356__$1 = (((((!((map__53356 == null))))?(((((map__53356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53356):map__53356);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53356__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53356__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__53358,done){
var map__53359 = p__53358;
var map__53359__$1 = (((((!((map__53359 == null))))?(((((map__53359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53359):map__53359);
var msg = map__53359__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53359__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__53361_53521 = type;
var G__53361_53522__$1 = (((G__53361_53521 instanceof cljs.core.Keyword))?G__53361_53521.fqn:null);
switch (G__53361_53522__$1) {
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
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"\" not running"].join(''));

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
var G__53362 = ["http",(cljs.core.truth_(shadow.cljs.devtools.client.env.ssl)?"s":null),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/browser"].join('');
var G__53363 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__53364 = "POST";
var G__53365 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__53366 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__53362,G__53363,G__53364,G__53365,G__53366);
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4126__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e53367){var e = e53367;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___53524 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___53524)){
var s_53525 = temp__5735__auto___53524;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_53525.onclose = (function (e){
return null;
}));

s_53525.close();

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

if(cljs.core.truth_((function (){var and__4115__auto__ = document;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4115__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
