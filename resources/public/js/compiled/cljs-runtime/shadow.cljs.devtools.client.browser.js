goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39011 = arguments.length;
var i__5770__auto___39012 = (0);
while(true){
if((i__5770__auto___39012 < len__5769__auto___39011)){
args__5775__auto__.push((arguments[i__5770__auto___39012]));

var G__39013 = (i__5770__auto___39012 + (1));
i__5770__auto___39012 = G__39013;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq38562){
var G__38563 = cljs.core.first(seq38562);
var seq38562__$1 = cljs.core.next(seq38562);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38563,seq38562__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__38566 = cljs.core.seq(sources);
var chunk__38567 = null;
var count__38568 = (0);
var i__38569 = (0);
while(true){
if((i__38569 < count__38568)){
var map__38584 = chunk__38567.cljs$core$IIndexed$_nth$arity$2(null,i__38569);
var map__38584__$1 = cljs.core.__destructure_map(map__38584);
var src = map__38584__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38584__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38584__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38584__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38584__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38586){var e_39014 = e38586;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39014);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39014.message)].join('')));
}

var G__39015 = seq__38566;
var G__39016 = chunk__38567;
var G__39017 = count__38568;
var G__39018 = (i__38569 + (1));
seq__38566 = G__39015;
chunk__38567 = G__39016;
count__38568 = G__39017;
i__38569 = G__39018;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38566);
if(temp__5804__auto__){
var seq__38566__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38566__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38566__$1);
var G__39019 = cljs.core.chunk_rest(seq__38566__$1);
var G__39020 = c__5568__auto__;
var G__39021 = cljs.core.count(c__5568__auto__);
var G__39022 = (0);
seq__38566 = G__39019;
chunk__38567 = G__39020;
count__38568 = G__39021;
i__38569 = G__39022;
continue;
} else {
var map__38587 = cljs.core.first(seq__38566__$1);
var map__38587__$1 = cljs.core.__destructure_map(map__38587);
var src = map__38587__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38587__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38587__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38587__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38587__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38590){var e_39023 = e38590;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39023);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39023.message)].join('')));
}

var G__39024 = cljs.core.next(seq__38566__$1);
var G__39025 = null;
var G__39026 = (0);
var G__39027 = (0);
seq__38566 = G__39024;
chunk__38567 = G__39025;
count__38568 = G__39026;
i__38569 = G__39027;
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
return null;
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
var seq__38593 = cljs.core.seq(js_requires);
var chunk__38594 = null;
var count__38595 = (0);
var i__38596 = (0);
while(true){
if((i__38596 < count__38595)){
var js_ns = chunk__38594.cljs$core$IIndexed$_nth$arity$2(null,i__38596);
var require_str_39028 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39028);


var G__39029 = seq__38593;
var G__39030 = chunk__38594;
var G__39031 = count__38595;
var G__39032 = (i__38596 + (1));
seq__38593 = G__39029;
chunk__38594 = G__39030;
count__38595 = G__39031;
i__38596 = G__39032;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38593);
if(temp__5804__auto__){
var seq__38593__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38593__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38593__$1);
var G__39033 = cljs.core.chunk_rest(seq__38593__$1);
var G__39034 = c__5568__auto__;
var G__39035 = cljs.core.count(c__5568__auto__);
var G__39036 = (0);
seq__38593 = G__39033;
chunk__38594 = G__39034;
count__38595 = G__39035;
i__38596 = G__39036;
continue;
} else {
var js_ns = cljs.core.first(seq__38593__$1);
var require_str_39037 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39037);


var G__39038 = cljs.core.next(seq__38593__$1);
var G__39039 = null;
var G__39040 = (0);
var G__39041 = (0);
seq__38593 = G__39038;
chunk__38594 = G__39039;
count__38595 = G__39040;
i__38596 = G__39041;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__38598){
var map__38599 = p__38598;
var map__38599__$1 = cljs.core.__destructure_map(map__38599);
var msg = map__38599__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38599__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38599__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38600(s__38601){
return (new cljs.core.LazySeq(null,(function (){
var s__38601__$1 = s__38601;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__38601__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__38606 = cljs.core.first(xs__6360__auto__);
var map__38606__$1 = cljs.core.__destructure_map(map__38606);
var src = map__38606__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38606__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38606__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__38601__$1,map__38606,map__38606__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38599,map__38599__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38600_$_iter__38602(s__38603){
return (new cljs.core.LazySeq(null,((function (s__38601__$1,map__38606,map__38606__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38599,map__38599__$1,msg,info,reload_info){
return (function (){
var s__38603__$1 = s__38603;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__38603__$1);
if(temp__5804__auto____$1){
var s__38603__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38603__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__38603__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__38605 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__38604 = (0);
while(true){
if((i__38604 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__38604);
cljs.core.chunk_append(b__38605,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39043 = (i__38604 + (1));
i__38604 = G__39043;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38605),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38600_$_iter__38602(cljs.core.chunk_rest(s__38603__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38605),null);
}
} else {
var warning = cljs.core.first(s__38603__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38600_$_iter__38602(cljs.core.rest(s__38603__$2)));
}
} else {
return null;
}
break;
}
});})(s__38601__$1,map__38606,map__38606__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38599,map__38599__$1,msg,info,reload_info))
,null,null));
});})(s__38601__$1,map__38606,map__38606__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38599,map__38599__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38600(cljs.core.rest(s__38601__$1)));
} else {
var G__39045 = cljs.core.rest(s__38601__$1);
s__38601__$1 = G__39045;
continue;
}
} else {
var G__39046 = cljs.core.rest(s__38601__$1);
s__38601__$1 = G__39046;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__38607_39047 = cljs.core.seq(warnings);
var chunk__38608_39048 = null;
var count__38609_39049 = (0);
var i__38610_39050 = (0);
while(true){
if((i__38610_39050 < count__38609_39049)){
var map__38617_39051 = chunk__38608_39048.cljs$core$IIndexed$_nth$arity$2(null,i__38610_39050);
var map__38617_39052__$1 = cljs.core.__destructure_map(map__38617_39051);
var w_39053 = map__38617_39052__$1;
var msg_39054__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38617_39052__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39055 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38617_39052__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39056 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38617_39052__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39057 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38617_39052__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39057)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39055),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39056),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39054__$1)].join(''));


var G__39058 = seq__38607_39047;
var G__39059 = chunk__38608_39048;
var G__39060 = count__38609_39049;
var G__39061 = (i__38610_39050 + (1));
seq__38607_39047 = G__39058;
chunk__38608_39048 = G__39059;
count__38609_39049 = G__39060;
i__38610_39050 = G__39061;
continue;
} else {
var temp__5804__auto___39062 = cljs.core.seq(seq__38607_39047);
if(temp__5804__auto___39062){
var seq__38607_39066__$1 = temp__5804__auto___39062;
if(cljs.core.chunked_seq_QMARK_(seq__38607_39066__$1)){
var c__5568__auto___39067 = cljs.core.chunk_first(seq__38607_39066__$1);
var G__39068 = cljs.core.chunk_rest(seq__38607_39066__$1);
var G__39069 = c__5568__auto___39067;
var G__39070 = cljs.core.count(c__5568__auto___39067);
var G__39071 = (0);
seq__38607_39047 = G__39068;
chunk__38608_39048 = G__39069;
count__38609_39049 = G__39070;
i__38610_39050 = G__39071;
continue;
} else {
var map__38618_39072 = cljs.core.first(seq__38607_39066__$1);
var map__38618_39073__$1 = cljs.core.__destructure_map(map__38618_39072);
var w_39074 = map__38618_39073__$1;
var msg_39075__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38618_39073__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39076 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38618_39073__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39077 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38618_39073__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38618_39073__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39078)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39076),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39077),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39075__$1)].join(''));


var G__39079 = cljs.core.next(seq__38607_39066__$1);
var G__39080 = null;
var G__39081 = (0);
var G__39082 = (0);
seq__38607_39047 = G__39079;
chunk__38608_39048 = G__39080;
count__38609_39049 = G__39081;
i__38610_39050 = G__39082;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__38597_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__38597_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__38624){
var map__38625 = p__38624;
var map__38625__$1 = cljs.core.__destructure_map(map__38625);
var msg = map__38625__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38625__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38625__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__38626 = cljs.core.seq(updates);
var chunk__38628 = null;
var count__38629 = (0);
var i__38630 = (0);
while(true){
if((i__38630 < count__38629)){
var path = chunk__38628.cljs$core$IIndexed$_nth$arity$2(null,i__38630);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38782_39084 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38786_39085 = null;
var count__38787_39086 = (0);
var i__38788_39087 = (0);
while(true){
if((i__38788_39087 < count__38787_39086)){
var node_39088 = chunk__38786_39085.cljs$core$IIndexed$_nth$arity$2(null,i__38788_39087);
if(cljs.core.not(node_39088.shadow$old)){
var path_match_39089 = shadow.cljs.devtools.client.browser.match_paths(node_39088.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39089)){
var new_link_39090 = (function (){var G__38820 = node_39088.cloneNode(true);
G__38820.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39089),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38820;
})();
(node_39088.shadow$old = true);

(new_link_39090.onload = ((function (seq__38782_39084,chunk__38786_39085,count__38787_39086,i__38788_39087,seq__38626,chunk__38628,count__38629,i__38630,new_link_39090,path_match_39089,node_39088,path,map__38625,map__38625__$1,msg,updates,reload_info){
return (function (e){
var seq__38821_39092 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38823_39093 = null;
var count__38824_39094 = (0);
var i__38825_39095 = (0);
while(true){
if((i__38825_39095 < count__38824_39094)){
var map__38829_39096 = chunk__38823_39093.cljs$core$IIndexed$_nth$arity$2(null,i__38825_39095);
var map__38829_39097__$1 = cljs.core.__destructure_map(map__38829_39096);
var task_39098 = map__38829_39097__$1;
var fn_str_39099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38829_39097__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38829_39097__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39101 = goog.getObjectByName(fn_str_39099,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39100)].join(''));

(fn_obj_39101.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39101.cljs$core$IFn$_invoke$arity$2(path,new_link_39090) : fn_obj_39101.call(null,path,new_link_39090));


var G__39102 = seq__38821_39092;
var G__39103 = chunk__38823_39093;
var G__39104 = count__38824_39094;
var G__39105 = (i__38825_39095 + (1));
seq__38821_39092 = G__39102;
chunk__38823_39093 = G__39103;
count__38824_39094 = G__39104;
i__38825_39095 = G__39105;
continue;
} else {
var temp__5804__auto___39106 = cljs.core.seq(seq__38821_39092);
if(temp__5804__auto___39106){
var seq__38821_39107__$1 = temp__5804__auto___39106;
if(cljs.core.chunked_seq_QMARK_(seq__38821_39107__$1)){
var c__5568__auto___39108 = cljs.core.chunk_first(seq__38821_39107__$1);
var G__39109 = cljs.core.chunk_rest(seq__38821_39107__$1);
var G__39110 = c__5568__auto___39108;
var G__39111 = cljs.core.count(c__5568__auto___39108);
var G__39112 = (0);
seq__38821_39092 = G__39109;
chunk__38823_39093 = G__39110;
count__38824_39094 = G__39111;
i__38825_39095 = G__39112;
continue;
} else {
var map__38830_39113 = cljs.core.first(seq__38821_39107__$1);
var map__38830_39114__$1 = cljs.core.__destructure_map(map__38830_39113);
var task_39115 = map__38830_39114__$1;
var fn_str_39116 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38830_39114__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39117 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38830_39114__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39118 = goog.getObjectByName(fn_str_39116,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39117)].join(''));

(fn_obj_39118.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39118.cljs$core$IFn$_invoke$arity$2(path,new_link_39090) : fn_obj_39118.call(null,path,new_link_39090));


var G__39119 = cljs.core.next(seq__38821_39107__$1);
var G__39120 = null;
var G__39121 = (0);
var G__39122 = (0);
seq__38821_39092 = G__39119;
chunk__38823_39093 = G__39120;
count__38824_39094 = G__39121;
i__38825_39095 = G__39122;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39088);
});})(seq__38782_39084,chunk__38786_39085,count__38787_39086,i__38788_39087,seq__38626,chunk__38628,count__38629,i__38630,new_link_39090,path_match_39089,node_39088,path,map__38625,map__38625__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39089], 0));

goog.dom.insertSiblingAfter(new_link_39090,node_39088);


var G__39123 = seq__38782_39084;
var G__39124 = chunk__38786_39085;
var G__39125 = count__38787_39086;
var G__39126 = (i__38788_39087 + (1));
seq__38782_39084 = G__39123;
chunk__38786_39085 = G__39124;
count__38787_39086 = G__39125;
i__38788_39087 = G__39126;
continue;
} else {
var G__39127 = seq__38782_39084;
var G__39128 = chunk__38786_39085;
var G__39129 = count__38787_39086;
var G__39130 = (i__38788_39087 + (1));
seq__38782_39084 = G__39127;
chunk__38786_39085 = G__39128;
count__38787_39086 = G__39129;
i__38788_39087 = G__39130;
continue;
}
} else {
var G__39131 = seq__38782_39084;
var G__39132 = chunk__38786_39085;
var G__39133 = count__38787_39086;
var G__39134 = (i__38788_39087 + (1));
seq__38782_39084 = G__39131;
chunk__38786_39085 = G__39132;
count__38787_39086 = G__39133;
i__38788_39087 = G__39134;
continue;
}
} else {
var temp__5804__auto___39135 = cljs.core.seq(seq__38782_39084);
if(temp__5804__auto___39135){
var seq__38782_39136__$1 = temp__5804__auto___39135;
if(cljs.core.chunked_seq_QMARK_(seq__38782_39136__$1)){
var c__5568__auto___39137 = cljs.core.chunk_first(seq__38782_39136__$1);
var G__39138 = cljs.core.chunk_rest(seq__38782_39136__$1);
var G__39139 = c__5568__auto___39137;
var G__39140 = cljs.core.count(c__5568__auto___39137);
var G__39141 = (0);
seq__38782_39084 = G__39138;
chunk__38786_39085 = G__39139;
count__38787_39086 = G__39140;
i__38788_39087 = G__39141;
continue;
} else {
var node_39142 = cljs.core.first(seq__38782_39136__$1);
if(cljs.core.not(node_39142.shadow$old)){
var path_match_39143 = shadow.cljs.devtools.client.browser.match_paths(node_39142.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39143)){
var new_link_39144 = (function (){var G__38831 = node_39142.cloneNode(true);
G__38831.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39143),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38831;
})();
(node_39142.shadow$old = true);

(new_link_39144.onload = ((function (seq__38782_39084,chunk__38786_39085,count__38787_39086,i__38788_39087,seq__38626,chunk__38628,count__38629,i__38630,new_link_39144,path_match_39143,node_39142,seq__38782_39136__$1,temp__5804__auto___39135,path,map__38625,map__38625__$1,msg,updates,reload_info){
return (function (e){
var seq__38832_39145 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38834_39146 = null;
var count__38835_39147 = (0);
var i__38836_39148 = (0);
while(true){
if((i__38836_39148 < count__38835_39147)){
var map__38840_39149 = chunk__38834_39146.cljs$core$IIndexed$_nth$arity$2(null,i__38836_39148);
var map__38840_39150__$1 = cljs.core.__destructure_map(map__38840_39149);
var task_39151 = map__38840_39150__$1;
var fn_str_39152 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38840_39150__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39153 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38840_39150__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39154 = goog.getObjectByName(fn_str_39152,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39153)].join(''));

(fn_obj_39154.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39154.cljs$core$IFn$_invoke$arity$2(path,new_link_39144) : fn_obj_39154.call(null,path,new_link_39144));


var G__39155 = seq__38832_39145;
var G__39156 = chunk__38834_39146;
var G__39157 = count__38835_39147;
var G__39158 = (i__38836_39148 + (1));
seq__38832_39145 = G__39155;
chunk__38834_39146 = G__39156;
count__38835_39147 = G__39157;
i__38836_39148 = G__39158;
continue;
} else {
var temp__5804__auto___39159__$1 = cljs.core.seq(seq__38832_39145);
if(temp__5804__auto___39159__$1){
var seq__38832_39160__$1 = temp__5804__auto___39159__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38832_39160__$1)){
var c__5568__auto___39161 = cljs.core.chunk_first(seq__38832_39160__$1);
var G__39162 = cljs.core.chunk_rest(seq__38832_39160__$1);
var G__39163 = c__5568__auto___39161;
var G__39164 = cljs.core.count(c__5568__auto___39161);
var G__39165 = (0);
seq__38832_39145 = G__39162;
chunk__38834_39146 = G__39163;
count__38835_39147 = G__39164;
i__38836_39148 = G__39165;
continue;
} else {
var map__38842_39166 = cljs.core.first(seq__38832_39160__$1);
var map__38842_39167__$1 = cljs.core.__destructure_map(map__38842_39166);
var task_39168 = map__38842_39167__$1;
var fn_str_39169 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38842_39167__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39170 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38842_39167__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39171 = goog.getObjectByName(fn_str_39169,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39170)].join(''));

(fn_obj_39171.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39171.cljs$core$IFn$_invoke$arity$2(path,new_link_39144) : fn_obj_39171.call(null,path,new_link_39144));


var G__39172 = cljs.core.next(seq__38832_39160__$1);
var G__39173 = null;
var G__39174 = (0);
var G__39175 = (0);
seq__38832_39145 = G__39172;
chunk__38834_39146 = G__39173;
count__38835_39147 = G__39174;
i__38836_39148 = G__39175;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39142);
});})(seq__38782_39084,chunk__38786_39085,count__38787_39086,i__38788_39087,seq__38626,chunk__38628,count__38629,i__38630,new_link_39144,path_match_39143,node_39142,seq__38782_39136__$1,temp__5804__auto___39135,path,map__38625,map__38625__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39143], 0));

goog.dom.insertSiblingAfter(new_link_39144,node_39142);


var G__39176 = cljs.core.next(seq__38782_39136__$1);
var G__39177 = null;
var G__39178 = (0);
var G__39179 = (0);
seq__38782_39084 = G__39176;
chunk__38786_39085 = G__39177;
count__38787_39086 = G__39178;
i__38788_39087 = G__39179;
continue;
} else {
var G__39180 = cljs.core.next(seq__38782_39136__$1);
var G__39181 = null;
var G__39182 = (0);
var G__39183 = (0);
seq__38782_39084 = G__39180;
chunk__38786_39085 = G__39181;
count__38787_39086 = G__39182;
i__38788_39087 = G__39183;
continue;
}
} else {
var G__39184 = cljs.core.next(seq__38782_39136__$1);
var G__39185 = null;
var G__39186 = (0);
var G__39187 = (0);
seq__38782_39084 = G__39184;
chunk__38786_39085 = G__39185;
count__38787_39086 = G__39186;
i__38788_39087 = G__39187;
continue;
}
}
} else {
}
}
break;
}


var G__39188 = seq__38626;
var G__39189 = chunk__38628;
var G__39190 = count__38629;
var G__39191 = (i__38630 + (1));
seq__38626 = G__39188;
chunk__38628 = G__39189;
count__38629 = G__39190;
i__38630 = G__39191;
continue;
} else {
var G__39192 = seq__38626;
var G__39193 = chunk__38628;
var G__39194 = count__38629;
var G__39195 = (i__38630 + (1));
seq__38626 = G__39192;
chunk__38628 = G__39193;
count__38629 = G__39194;
i__38630 = G__39195;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38626);
if(temp__5804__auto__){
var seq__38626__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38626__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38626__$1);
var G__39196 = cljs.core.chunk_rest(seq__38626__$1);
var G__39197 = c__5568__auto__;
var G__39198 = cljs.core.count(c__5568__auto__);
var G__39199 = (0);
seq__38626 = G__39196;
chunk__38628 = G__39197;
count__38629 = G__39198;
i__38630 = G__39199;
continue;
} else {
var path = cljs.core.first(seq__38626__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38845_39200 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38850_39201 = null;
var count__38851_39202 = (0);
var i__38852_39203 = (0);
while(true){
if((i__38852_39203 < count__38851_39202)){
var node_39204 = chunk__38850_39201.cljs$core$IIndexed$_nth$arity$2(null,i__38852_39203);
if(cljs.core.not(node_39204.shadow$old)){
var path_match_39205 = shadow.cljs.devtools.client.browser.match_paths(node_39204.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39205)){
var new_link_39206 = (function (){var G__38892 = node_39204.cloneNode(true);
G__38892.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39205),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38892;
})();
(node_39204.shadow$old = true);

(new_link_39206.onload = ((function (seq__38845_39200,chunk__38850_39201,count__38851_39202,i__38852_39203,seq__38626,chunk__38628,count__38629,i__38630,new_link_39206,path_match_39205,node_39204,path,seq__38626__$1,temp__5804__auto__,map__38625,map__38625__$1,msg,updates,reload_info){
return (function (e){
var seq__38893_39207 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38895_39208 = null;
var count__38896_39209 = (0);
var i__38897_39210 = (0);
while(true){
if((i__38897_39210 < count__38896_39209)){
var map__38901_39211 = chunk__38895_39208.cljs$core$IIndexed$_nth$arity$2(null,i__38897_39210);
var map__38901_39212__$1 = cljs.core.__destructure_map(map__38901_39211);
var task_39213 = map__38901_39212__$1;
var fn_str_39214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38901_39212__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38901_39212__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39216 = goog.getObjectByName(fn_str_39214,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39215)].join(''));

(fn_obj_39216.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39216.cljs$core$IFn$_invoke$arity$2(path,new_link_39206) : fn_obj_39216.call(null,path,new_link_39206));


var G__39217 = seq__38893_39207;
var G__39218 = chunk__38895_39208;
var G__39219 = count__38896_39209;
var G__39220 = (i__38897_39210 + (1));
seq__38893_39207 = G__39217;
chunk__38895_39208 = G__39218;
count__38896_39209 = G__39219;
i__38897_39210 = G__39220;
continue;
} else {
var temp__5804__auto___39221__$1 = cljs.core.seq(seq__38893_39207);
if(temp__5804__auto___39221__$1){
var seq__38893_39222__$1 = temp__5804__auto___39221__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38893_39222__$1)){
var c__5568__auto___39223 = cljs.core.chunk_first(seq__38893_39222__$1);
var G__39224 = cljs.core.chunk_rest(seq__38893_39222__$1);
var G__39225 = c__5568__auto___39223;
var G__39226 = cljs.core.count(c__5568__auto___39223);
var G__39227 = (0);
seq__38893_39207 = G__39224;
chunk__38895_39208 = G__39225;
count__38896_39209 = G__39226;
i__38897_39210 = G__39227;
continue;
} else {
var map__38904_39228 = cljs.core.first(seq__38893_39222__$1);
var map__38904_39229__$1 = cljs.core.__destructure_map(map__38904_39228);
var task_39230 = map__38904_39229__$1;
var fn_str_39231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38904_39229__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38904_39229__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39233 = goog.getObjectByName(fn_str_39231,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39232)].join(''));

(fn_obj_39233.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39233.cljs$core$IFn$_invoke$arity$2(path,new_link_39206) : fn_obj_39233.call(null,path,new_link_39206));


var G__39234 = cljs.core.next(seq__38893_39222__$1);
var G__39235 = null;
var G__39236 = (0);
var G__39237 = (0);
seq__38893_39207 = G__39234;
chunk__38895_39208 = G__39235;
count__38896_39209 = G__39236;
i__38897_39210 = G__39237;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39204);
});})(seq__38845_39200,chunk__38850_39201,count__38851_39202,i__38852_39203,seq__38626,chunk__38628,count__38629,i__38630,new_link_39206,path_match_39205,node_39204,path,seq__38626__$1,temp__5804__auto__,map__38625,map__38625__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39205], 0));

goog.dom.insertSiblingAfter(new_link_39206,node_39204);


var G__39238 = seq__38845_39200;
var G__39239 = chunk__38850_39201;
var G__39240 = count__38851_39202;
var G__39241 = (i__38852_39203 + (1));
seq__38845_39200 = G__39238;
chunk__38850_39201 = G__39239;
count__38851_39202 = G__39240;
i__38852_39203 = G__39241;
continue;
} else {
var G__39242 = seq__38845_39200;
var G__39243 = chunk__38850_39201;
var G__39244 = count__38851_39202;
var G__39245 = (i__38852_39203 + (1));
seq__38845_39200 = G__39242;
chunk__38850_39201 = G__39243;
count__38851_39202 = G__39244;
i__38852_39203 = G__39245;
continue;
}
} else {
var G__39246 = seq__38845_39200;
var G__39247 = chunk__38850_39201;
var G__39248 = count__38851_39202;
var G__39249 = (i__38852_39203 + (1));
seq__38845_39200 = G__39246;
chunk__38850_39201 = G__39247;
count__38851_39202 = G__39248;
i__38852_39203 = G__39249;
continue;
}
} else {
var temp__5804__auto___39250__$1 = cljs.core.seq(seq__38845_39200);
if(temp__5804__auto___39250__$1){
var seq__38845_39251__$1 = temp__5804__auto___39250__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38845_39251__$1)){
var c__5568__auto___39252 = cljs.core.chunk_first(seq__38845_39251__$1);
var G__39253 = cljs.core.chunk_rest(seq__38845_39251__$1);
var G__39254 = c__5568__auto___39252;
var G__39255 = cljs.core.count(c__5568__auto___39252);
var G__39256 = (0);
seq__38845_39200 = G__39253;
chunk__38850_39201 = G__39254;
count__38851_39202 = G__39255;
i__38852_39203 = G__39256;
continue;
} else {
var node_39257 = cljs.core.first(seq__38845_39251__$1);
if(cljs.core.not(node_39257.shadow$old)){
var path_match_39258 = shadow.cljs.devtools.client.browser.match_paths(node_39257.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39258)){
var new_link_39259 = (function (){var G__38907 = node_39257.cloneNode(true);
G__38907.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39258),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38907;
})();
(node_39257.shadow$old = true);

(new_link_39259.onload = ((function (seq__38845_39200,chunk__38850_39201,count__38851_39202,i__38852_39203,seq__38626,chunk__38628,count__38629,i__38630,new_link_39259,path_match_39258,node_39257,seq__38845_39251__$1,temp__5804__auto___39250__$1,path,seq__38626__$1,temp__5804__auto__,map__38625,map__38625__$1,msg,updates,reload_info){
return (function (e){
var seq__38908_39261 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38910_39262 = null;
var count__38911_39263 = (0);
var i__38912_39264 = (0);
while(true){
if((i__38912_39264 < count__38911_39263)){
var map__38953_39265 = chunk__38910_39262.cljs$core$IIndexed$_nth$arity$2(null,i__38912_39264);
var map__38953_39266__$1 = cljs.core.__destructure_map(map__38953_39265);
var task_39267 = map__38953_39266__$1;
var fn_str_39268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38953_39266__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38953_39266__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39270 = goog.getObjectByName(fn_str_39268,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39269)].join(''));

(fn_obj_39270.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39270.cljs$core$IFn$_invoke$arity$2(path,new_link_39259) : fn_obj_39270.call(null,path,new_link_39259));


var G__39272 = seq__38908_39261;
var G__39273 = chunk__38910_39262;
var G__39274 = count__38911_39263;
var G__39275 = (i__38912_39264 + (1));
seq__38908_39261 = G__39272;
chunk__38910_39262 = G__39273;
count__38911_39263 = G__39274;
i__38912_39264 = G__39275;
continue;
} else {
var temp__5804__auto___39278__$2 = cljs.core.seq(seq__38908_39261);
if(temp__5804__auto___39278__$2){
var seq__38908_39281__$1 = temp__5804__auto___39278__$2;
if(cljs.core.chunked_seq_QMARK_(seq__38908_39281__$1)){
var c__5568__auto___39282 = cljs.core.chunk_first(seq__38908_39281__$1);
var G__39283 = cljs.core.chunk_rest(seq__38908_39281__$1);
var G__39284 = c__5568__auto___39282;
var G__39285 = cljs.core.count(c__5568__auto___39282);
var G__39286 = (0);
seq__38908_39261 = G__39283;
chunk__38910_39262 = G__39284;
count__38911_39263 = G__39285;
i__38912_39264 = G__39286;
continue;
} else {
var map__38954_39287 = cljs.core.first(seq__38908_39281__$1);
var map__38954_39288__$1 = cljs.core.__destructure_map(map__38954_39287);
var task_39289 = map__38954_39288__$1;
var fn_str_39290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38954_39288__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38954_39288__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39292 = goog.getObjectByName(fn_str_39290,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39291)].join(''));

(fn_obj_39292.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39292.cljs$core$IFn$_invoke$arity$2(path,new_link_39259) : fn_obj_39292.call(null,path,new_link_39259));


var G__39293 = cljs.core.next(seq__38908_39281__$1);
var G__39294 = null;
var G__39295 = (0);
var G__39296 = (0);
seq__38908_39261 = G__39293;
chunk__38910_39262 = G__39294;
count__38911_39263 = G__39295;
i__38912_39264 = G__39296;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39257);
});})(seq__38845_39200,chunk__38850_39201,count__38851_39202,i__38852_39203,seq__38626,chunk__38628,count__38629,i__38630,new_link_39259,path_match_39258,node_39257,seq__38845_39251__$1,temp__5804__auto___39250__$1,path,seq__38626__$1,temp__5804__auto__,map__38625,map__38625__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39258], 0));

goog.dom.insertSiblingAfter(new_link_39259,node_39257);


var G__39297 = cljs.core.next(seq__38845_39251__$1);
var G__39298 = null;
var G__39299 = (0);
var G__39300 = (0);
seq__38845_39200 = G__39297;
chunk__38850_39201 = G__39298;
count__38851_39202 = G__39299;
i__38852_39203 = G__39300;
continue;
} else {
var G__39301 = cljs.core.next(seq__38845_39251__$1);
var G__39302 = null;
var G__39303 = (0);
var G__39304 = (0);
seq__38845_39200 = G__39301;
chunk__38850_39201 = G__39302;
count__38851_39202 = G__39303;
i__38852_39203 = G__39304;
continue;
}
} else {
var G__39305 = cljs.core.next(seq__38845_39251__$1);
var G__39306 = null;
var G__39307 = (0);
var G__39308 = (0);
seq__38845_39200 = G__39305;
chunk__38850_39201 = G__39306;
count__38851_39202 = G__39307;
i__38852_39203 = G__39308;
continue;
}
}
} else {
}
}
break;
}


var G__39309 = cljs.core.next(seq__38626__$1);
var G__39310 = null;
var G__39311 = (0);
var G__39312 = (0);
seq__38626 = G__39309;
chunk__38628 = G__39310;
count__38629 = G__39311;
i__38630 = G__39312;
continue;
} else {
var G__39313 = cljs.core.next(seq__38626__$1);
var G__39314 = null;
var G__39315 = (0);
var G__39316 = (0);
seq__38626 = G__39313;
chunk__38628 = G__39314;
count__38629 = G__39315;
i__38630 = G__39316;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__38993){
var map__38994 = p__38993;
var map__38994__$1 = cljs.core.__destructure_map(map__38994);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38994__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__38995,done,error){
var map__38996 = p__38995;
var map__38996__$1 = cljs.core.__destructure_map(map__38996);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38996__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__38997,done,error){
var map__38998 = p__38997;
var map__38998__$1 = cljs.core.__destructure_map(map__38998);
var msg = map__38998__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38998__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38998__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38998__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38999){
var map__39000 = p__38999;
var map__39000__$1 = cljs.core.__destructure_map(map__39000);
var src = map__39000__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39000__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__39001 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__39001) : done.call(null,G__39001));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__39002){
var map__39003 = p__39002;
var map__39003__$1 = cljs.core.__destructure_map(map__39003);
var msg__$1 = map__39003__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39003__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e39004){var ex = e39004;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__39005){
var map__39006 = p__39005;
var map__39006__$1 = cljs.core.__destructure_map(map__39006);
var env = map__39006__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39006__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__39007){
var map__39008 = p__39007;
var map__39008__$1 = cljs.core.__destructure_map(map__39008);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39008__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39008__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__39009){
var map__39010 = p__39009;
var map__39010__$1 = cljs.core.__destructure_map(map__39010);
var svc = map__39010__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39010__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
