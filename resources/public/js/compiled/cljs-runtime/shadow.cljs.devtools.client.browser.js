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
var len__4736__auto___53648 = arguments.length;
var i__4737__auto___53649 = (0);
while(true){
if((i__4737__auto___53649 < len__4736__auto___53648)){
args__4742__auto__.push((arguments[i__4737__auto___53649]));

var G__53650 = (i__4737__auto___53649 + (1));
i__4737__auto___53649 = G__53650;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq53341){
var G__53342 = cljs.core.first(seq53341);
var seq53341__$1 = cljs.core.next(seq53341);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53342,seq53341__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__53366){
var map__53367 = p__53366;
var map__53367__$1 = (((((!((map__53367 == null))))?(((((map__53367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53367):map__53367);
var src = map__53367__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53367__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53367__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__53372 = cljs.core.seq(sources);
var chunk__53373 = null;
var count__53374 = (0);
var i__53375 = (0);
while(true){
if((i__53375 < count__53374)){
var map__53386 = chunk__53373.cljs$core$IIndexed$_nth$arity$2(null,i__53375);
var map__53386__$1 = (((((!((map__53386 == null))))?(((((map__53386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53386):map__53386);
var src = map__53386__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53386__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53386__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53386__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53386__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e53388){var e_53652 = e53388;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_53652);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_53652.message)].join('')));
}

var G__53653 = seq__53372;
var G__53654 = chunk__53373;
var G__53655 = count__53374;
var G__53656 = (i__53375 + (1));
seq__53372 = G__53653;
chunk__53373 = G__53654;
count__53374 = G__53655;
i__53375 = G__53656;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53372);
if(temp__5735__auto__){
var seq__53372__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53372__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53372__$1);
var G__53658 = cljs.core.chunk_rest(seq__53372__$1);
var G__53659 = c__4556__auto__;
var G__53660 = cljs.core.count(c__4556__auto__);
var G__53661 = (0);
seq__53372 = G__53658;
chunk__53373 = G__53659;
count__53374 = G__53660;
i__53375 = G__53661;
continue;
} else {
var map__53391 = cljs.core.first(seq__53372__$1);
var map__53391__$1 = (((((!((map__53391 == null))))?(((((map__53391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53391):map__53391);
var src = map__53391__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53391__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53391__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53391__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53391__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e53393){var e_53666 = e53393;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_53666);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_53666.message)].join('')));
}

var G__53667 = cljs.core.next(seq__53372__$1);
var G__53668 = null;
var G__53669 = (0);
var G__53670 = (0);
seq__53372 = G__53667;
chunk__53373 = G__53668;
count__53374 = G__53669;
i__53375 = G__53670;
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
var seq__53394 = cljs.core.seq(js_requires);
var chunk__53395 = null;
var count__53396 = (0);
var i__53397 = (0);
while(true){
if((i__53397 < count__53396)){
var js_ns = chunk__53395.cljs$core$IIndexed$_nth$arity$2(null,i__53397);
var require_str_53673 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_53673);


var G__53674 = seq__53394;
var G__53675 = chunk__53395;
var G__53676 = count__53396;
var G__53677 = (i__53397 + (1));
seq__53394 = G__53674;
chunk__53395 = G__53675;
count__53396 = G__53676;
i__53397 = G__53677;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53394);
if(temp__5735__auto__){
var seq__53394__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53394__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53394__$1);
var G__53678 = cljs.core.chunk_rest(seq__53394__$1);
var G__53679 = c__4556__auto__;
var G__53680 = cljs.core.count(c__4556__auto__);
var G__53681 = (0);
seq__53394 = G__53678;
chunk__53395 = G__53679;
count__53396 = G__53680;
i__53397 = G__53681;
continue;
} else {
var js_ns = cljs.core.first(seq__53394__$1);
var require_str_53685 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_53685);


var G__53686 = cljs.core.next(seq__53394__$1);
var G__53687 = null;
var G__53688 = (0);
var G__53689 = (0);
seq__53394 = G__53686;
chunk__53395 = G__53687;
count__53396 = G__53688;
i__53397 = G__53689;
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
var G__53398 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__53398) : callback.call(null,G__53398));
} else {
var G__53399 = shadow.cljs.devtools.client.env.files_url();
var G__53400 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__53401 = "POST";
var G__53402 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__53403 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__53399,G__53400,G__53401,G__53402,G__53403);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__53406){
var map__53407 = p__53406;
var map__53407__$1 = (((((!((map__53407 == null))))?(((((map__53407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53407):map__53407);
var msg = map__53407__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53407__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53407__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__53409 = info;
var map__53409__$1 = (((((!((map__53409 == null))))?(((((map__53409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53409):map__53409);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53409__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53409__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53411(s__53412){
return (new cljs.core.LazySeq(null,(function (){
var s__53412__$1 = s__53412;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__53412__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__53417 = cljs.core.first(xs__6292__auto__);
var map__53417__$1 = (((((!((map__53417 == null))))?(((((map__53417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53417):map__53417);
var src = map__53417__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53417__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53417__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__53412__$1,map__53417,map__53417__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__53409,map__53409__$1,sources,compiled,map__53407,map__53407__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53411_$_iter__53413(s__53414){
return (new cljs.core.LazySeq(null,((function (s__53412__$1,map__53417,map__53417__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__53409,map__53409__$1,sources,compiled,map__53407,map__53407__$1,msg,info,reload_info){
return (function (){
var s__53414__$1 = s__53414;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__53414__$1);
if(temp__5735__auto____$1){
var s__53414__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53414__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__53414__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__53416 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__53415 = (0);
while(true){
if((i__53415 < size__4528__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__53415);
cljs.core.chunk_append(b__53416,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__53697 = (i__53415 + (1));
i__53415 = G__53697;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53416),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53411_$_iter__53413(cljs.core.chunk_rest(s__53414__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53416),null);
}
} else {
var warning = cljs.core.first(s__53414__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53411_$_iter__53413(cljs.core.rest(s__53414__$2)));
}
} else {
return null;
}
break;
}
});})(s__53412__$1,map__53417,map__53417__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__53409,map__53409__$1,sources,compiled,map__53407,map__53407__$1,msg,info,reload_info))
,null,null));
});})(s__53412__$1,map__53417,map__53417__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__53409,map__53409__$1,sources,compiled,map__53407,map__53407__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53411(cljs.core.rest(s__53412__$1)));
} else {
var G__53698 = cljs.core.rest(s__53412__$1);
s__53412__$1 = G__53698;
continue;
}
} else {
var G__53699 = cljs.core.rest(s__53412__$1);
s__53412__$1 = G__53699;
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
var seq__53424_53700 = cljs.core.seq(warnings);
var chunk__53425_53701 = null;
var count__53426_53702 = (0);
var i__53427_53703 = (0);
while(true){
if((i__53427_53703 < count__53426_53702)){
var map__53440_53704 = chunk__53425_53701.cljs$core$IIndexed$_nth$arity$2(null,i__53427_53703);
var map__53440_53705__$1 = (((((!((map__53440_53704 == null))))?(((((map__53440_53704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53440_53704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53440_53704):map__53440_53704);
var w_53706 = map__53440_53705__$1;
var msg_53707__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53440_53705__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_53708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53440_53705__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53440_53705__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_53710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53440_53705__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_53710)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_53708),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_53709),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_53707__$1)].join(''));


var G__53712 = seq__53424_53700;
var G__53713 = chunk__53425_53701;
var G__53714 = count__53426_53702;
var G__53715 = (i__53427_53703 + (1));
seq__53424_53700 = G__53712;
chunk__53425_53701 = G__53713;
count__53426_53702 = G__53714;
i__53427_53703 = G__53715;
continue;
} else {
var temp__5735__auto___53716 = cljs.core.seq(seq__53424_53700);
if(temp__5735__auto___53716){
var seq__53424_53717__$1 = temp__5735__auto___53716;
if(cljs.core.chunked_seq_QMARK_(seq__53424_53717__$1)){
var c__4556__auto___53718 = cljs.core.chunk_first(seq__53424_53717__$1);
var G__53719 = cljs.core.chunk_rest(seq__53424_53717__$1);
var G__53720 = c__4556__auto___53718;
var G__53721 = cljs.core.count(c__4556__auto___53718);
var G__53722 = (0);
seq__53424_53700 = G__53719;
chunk__53425_53701 = G__53720;
count__53426_53702 = G__53721;
i__53427_53703 = G__53722;
continue;
} else {
var map__53442_53723 = cljs.core.first(seq__53424_53717__$1);
var map__53442_53724__$1 = (((((!((map__53442_53723 == null))))?(((((map__53442_53723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53442_53723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53442_53723):map__53442_53723);
var w_53725 = map__53442_53724__$1;
var msg_53726__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53442_53724__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_53727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53442_53724__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53442_53724__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_53729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53442_53724__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_53729)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_53727),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_53728),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_53726__$1)].join(''));


var G__53731 = cljs.core.next(seq__53424_53717__$1);
var G__53732 = null;
var G__53733 = (0);
var G__53734 = (0);
seq__53424_53700 = G__53731;
chunk__53425_53701 = G__53732;
count__53426_53702 = G__53733;
i__53427_53703 = G__53734;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__53448){
var map__53449 = p__53448;
var map__53449__$1 = (((((!((map__53449 == null))))?(((((map__53449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53449):map__53449);
var src = map__53449__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53449__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53449__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__53451){
var map__53452 = p__53451;
var map__53452__$1 = (((((!((map__53452 == null))))?(((((map__53452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53452):map__53452);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53452__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__53456){
var map__53458 = p__53456;
var map__53458__$1 = (((((!((map__53458 == null))))?(((((map__53458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53458):map__53458);
var rc = map__53458__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53458__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__53405_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__53405_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__53466){
var map__53467 = p__53466;
var map__53467__$1 = (((((!((map__53467 == null))))?(((((map__53467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53467):map__53467);
var msg = map__53467__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53467__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__53471 = cljs.core.seq(updates);
var chunk__53473 = null;
var count__53474 = (0);
var i__53475 = (0);
while(true){
if((i__53475 < count__53474)){
var path = chunk__53473.cljs$core$IIndexed$_nth$arity$2(null,i__53475);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__53508_53740 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__53511_53741 = null;
var count__53512_53742 = (0);
var i__53513_53743 = (0);
while(true){
if((i__53513_53743 < count__53512_53742)){
var node_53744 = chunk__53511_53741.cljs$core$IIndexed$_nth$arity$2(null,i__53513_53743);
var path_match_53745 = shadow.cljs.devtools.client.browser.match_paths(node_53744.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53745)){
var new_link_53746 = (function (){var G__53524 = node_53744.cloneNode(true);
G__53524.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53745),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53524;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53745], 0));

goog.dom.insertSiblingAfter(new_link_53746,node_53744);

goog.dom.removeNode(node_53744);


var G__53747 = seq__53508_53740;
var G__53748 = chunk__53511_53741;
var G__53749 = count__53512_53742;
var G__53750 = (i__53513_53743 + (1));
seq__53508_53740 = G__53747;
chunk__53511_53741 = G__53748;
count__53512_53742 = G__53749;
i__53513_53743 = G__53750;
continue;
} else {
var G__53751 = seq__53508_53740;
var G__53752 = chunk__53511_53741;
var G__53753 = count__53512_53742;
var G__53754 = (i__53513_53743 + (1));
seq__53508_53740 = G__53751;
chunk__53511_53741 = G__53752;
count__53512_53742 = G__53753;
i__53513_53743 = G__53754;
continue;
}
} else {
var temp__5735__auto___53755 = cljs.core.seq(seq__53508_53740);
if(temp__5735__auto___53755){
var seq__53508_53756__$1 = temp__5735__auto___53755;
if(cljs.core.chunked_seq_QMARK_(seq__53508_53756__$1)){
var c__4556__auto___53757 = cljs.core.chunk_first(seq__53508_53756__$1);
var G__53758 = cljs.core.chunk_rest(seq__53508_53756__$1);
var G__53759 = c__4556__auto___53757;
var G__53760 = cljs.core.count(c__4556__auto___53757);
var G__53761 = (0);
seq__53508_53740 = G__53758;
chunk__53511_53741 = G__53759;
count__53512_53742 = G__53760;
i__53513_53743 = G__53761;
continue;
} else {
var node_53762 = cljs.core.first(seq__53508_53756__$1);
var path_match_53763 = shadow.cljs.devtools.client.browser.match_paths(node_53762.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53763)){
var new_link_53764 = (function (){var G__53543 = node_53762.cloneNode(true);
G__53543.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53763),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53543;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53763], 0));

goog.dom.insertSiblingAfter(new_link_53764,node_53762);

goog.dom.removeNode(node_53762);


var G__53765 = cljs.core.next(seq__53508_53756__$1);
var G__53766 = null;
var G__53767 = (0);
var G__53768 = (0);
seq__53508_53740 = G__53765;
chunk__53511_53741 = G__53766;
count__53512_53742 = G__53767;
i__53513_53743 = G__53768;
continue;
} else {
var G__53769 = cljs.core.next(seq__53508_53756__$1);
var G__53770 = null;
var G__53771 = (0);
var G__53772 = (0);
seq__53508_53740 = G__53769;
chunk__53511_53741 = G__53770;
count__53512_53742 = G__53771;
i__53513_53743 = G__53772;
continue;
}
}
} else {
}
}
break;
}


var G__53773 = seq__53471;
var G__53774 = chunk__53473;
var G__53775 = count__53474;
var G__53776 = (i__53475 + (1));
seq__53471 = G__53773;
chunk__53473 = G__53774;
count__53474 = G__53775;
i__53475 = G__53776;
continue;
} else {
var G__53778 = seq__53471;
var G__53779 = chunk__53473;
var G__53780 = count__53474;
var G__53781 = (i__53475 + (1));
seq__53471 = G__53778;
chunk__53473 = G__53779;
count__53474 = G__53780;
i__53475 = G__53781;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53471);
if(temp__5735__auto__){
var seq__53471__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53471__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53471__$1);
var G__53782 = cljs.core.chunk_rest(seq__53471__$1);
var G__53783 = c__4556__auto__;
var G__53784 = cljs.core.count(c__4556__auto__);
var G__53785 = (0);
seq__53471 = G__53782;
chunk__53473 = G__53783;
count__53474 = G__53784;
i__53475 = G__53785;
continue;
} else {
var path = cljs.core.first(seq__53471__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__53552_53786 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__53555_53787 = null;
var count__53556_53788 = (0);
var i__53557_53789 = (0);
while(true){
if((i__53557_53789 < count__53556_53788)){
var node_53790 = chunk__53555_53787.cljs$core$IIndexed$_nth$arity$2(null,i__53557_53789);
var path_match_53791 = shadow.cljs.devtools.client.browser.match_paths(node_53790.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53791)){
var new_link_53792 = (function (){var G__53567 = node_53790.cloneNode(true);
G__53567.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53791),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53567;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53791], 0));

goog.dom.insertSiblingAfter(new_link_53792,node_53790);

goog.dom.removeNode(node_53790);


var G__53793 = seq__53552_53786;
var G__53794 = chunk__53555_53787;
var G__53795 = count__53556_53788;
var G__53796 = (i__53557_53789 + (1));
seq__53552_53786 = G__53793;
chunk__53555_53787 = G__53794;
count__53556_53788 = G__53795;
i__53557_53789 = G__53796;
continue;
} else {
var G__53797 = seq__53552_53786;
var G__53798 = chunk__53555_53787;
var G__53799 = count__53556_53788;
var G__53800 = (i__53557_53789 + (1));
seq__53552_53786 = G__53797;
chunk__53555_53787 = G__53798;
count__53556_53788 = G__53799;
i__53557_53789 = G__53800;
continue;
}
} else {
var temp__5735__auto___53801__$1 = cljs.core.seq(seq__53552_53786);
if(temp__5735__auto___53801__$1){
var seq__53552_53802__$1 = temp__5735__auto___53801__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53552_53802__$1)){
var c__4556__auto___53804 = cljs.core.chunk_first(seq__53552_53802__$1);
var G__53805 = cljs.core.chunk_rest(seq__53552_53802__$1);
var G__53806 = c__4556__auto___53804;
var G__53807 = cljs.core.count(c__4556__auto___53804);
var G__53808 = (0);
seq__53552_53786 = G__53805;
chunk__53555_53787 = G__53806;
count__53556_53788 = G__53807;
i__53557_53789 = G__53808;
continue;
} else {
var node_53809 = cljs.core.first(seq__53552_53802__$1);
var path_match_53810 = shadow.cljs.devtools.client.browser.match_paths(node_53809.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53810)){
var new_link_53811 = (function (){var G__53568 = node_53809.cloneNode(true);
G__53568.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53810),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53568;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53810], 0));

goog.dom.insertSiblingAfter(new_link_53811,node_53809);

goog.dom.removeNode(node_53809);


var G__53812 = cljs.core.next(seq__53552_53802__$1);
var G__53813 = null;
var G__53814 = (0);
var G__53815 = (0);
seq__53552_53786 = G__53812;
chunk__53555_53787 = G__53813;
count__53556_53788 = G__53814;
i__53557_53789 = G__53815;
continue;
} else {
var G__53816 = cljs.core.next(seq__53552_53802__$1);
var G__53817 = null;
var G__53818 = (0);
var G__53819 = (0);
seq__53552_53786 = G__53816;
chunk__53555_53787 = G__53817;
count__53556_53788 = G__53818;
i__53557_53789 = G__53819;
continue;
}
}
} else {
}
}
break;
}


var G__53820 = cljs.core.next(seq__53471__$1);
var G__53821 = null;
var G__53822 = (0);
var G__53823 = (0);
seq__53471 = G__53820;
chunk__53473 = G__53821;
count__53474 = G__53822;
i__53475 = G__53823;
continue;
} else {
var G__53824 = cljs.core.next(seq__53471__$1);
var G__53825 = null;
var G__53826 = (0);
var G__53827 = (0);
seq__53471 = G__53824;
chunk__53473 = G__53825;
count__53474 = G__53826;
i__53475 = G__53827;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__53609){
var map__53611 = p__53609;
var map__53611__$1 = (((((!((map__53611 == null))))?(((((map__53611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53611):map__53611);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53611__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53611__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__53621,done){
var map__53622 = p__53621;
var map__53622__$1 = (((((!((map__53622 == null))))?(((((map__53622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53622):map__53622);
var msg = map__53622__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53622__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53622__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53622__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53622__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__53624){
var map__53625 = p__53624;
var map__53625__$1 = (((((!((map__53625 == null))))?(((((map__53625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53625):map__53625);
var src = map__53625__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53625__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
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
}catch (e53627){var e = e53627;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__53628,done){
var map__53629 = p__53628;
var map__53629__$1 = (((((!((map__53629 == null))))?(((((map__53629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53629):map__53629);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53629__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53629__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__53631){
var map__53632 = p__53631;
var map__53632__$1 = (((((!((map__53632 == null))))?(((((map__53632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53632):map__53632);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53632__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53632__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__53636,done){
var map__53637 = p__53636;
var map__53637__$1 = (((((!((map__53637 == null))))?(((((map__53637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53637):map__53637);
var msg = map__53637__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53637__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__53639_53834 = type;
var G__53639_53835__$1 = (((G__53639_53834 instanceof cljs.core.Keyword))?G__53639_53834.fqn:null);
switch (G__53639_53835__$1) {
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
var G__53640 = ["http",(cljs.core.truth_(shadow.cljs.devtools.client.env.ssl)?"s":null),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/browser"].join('');
var G__53641 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__53642 = "POST";
var G__53643 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__53644 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__53640,G__53641,G__53642,G__53643,G__53644);
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
}catch (e53645){var e = e53645;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___53840 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___53840)){
var s_53841 = temp__5735__auto___53840;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_53841.onclose = (function (e){
return null;
}));

s_53841.close();

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
