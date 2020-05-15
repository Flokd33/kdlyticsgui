goog.provide('taoensso.timbre.appenders.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('taoensso.encore');
/**
 * Returns a simple `println` appender for Clojure/Script.
 *   Use with ClojureScript requires that `cljs.core/*print-fn*` be set.
 * 
 *   :stream (clj only) - e/o #{:auto :*out* :*err* :std-err :std-out <io-stream>}.
 */
taoensso.timbre.appenders.core.println_appender = (function taoensso$timbre$appenders$core$println_appender(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59479 = arguments.length;
var i__4737__auto___59480 = (0);
while(true){
if((i__4737__auto___59480 < len__4736__auto___59479)){
args__4742__auto__.push((arguments[i__4737__auto___59480]));

var G__59481 = (i__4737__auto___59480 + (1));
i__4737__auto___59480 = G__59481;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__59464){
var vec__59465 = p__59464;
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59465,(0),null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"async?","async?",1523057758),false,new cljs.core.Keyword(null,"min-level","min-level",1634684919),null,new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022),null,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),new cljs.core.Keyword(null,"inherit","inherit",-1840815422),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (data){
var map__59468 = data;
var map__59468__$1 = (((((!((map__59468 == null))))?(((((map__59468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59468):map__59468);
var output_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59468__$1,new cljs.core.Keyword(null,"output_","output_",-36797880));
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.force(output_)], 0));
})], null);
}));

(taoensso.timbre.appenders.core.println_appender.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.timbre.appenders.core.println_appender.cljs$lang$applyTo = (function (seq59462){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59462));
}));

/**
 * Returns a simple js/console appender for ClojureScript.
 * 
 *   For accurate line numbers in Chrome, add these Blackbox[1] patterns:
 *  `/taoensso/timbre/appenders/core\.js$`
 *  `/taoensso/timbre\.js$`
 *  `/cljs/core\.js$`
 * 
 *   [1] Ref. https://goo.gl/ZejSvR
 */
taoensso.timbre.appenders.core.console_appender = (function taoensso$timbre$appenders$core$console_appender(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59482 = arguments.length;
var i__4737__auto___59483 = (0);
while(true){
if((i__4737__auto___59483 < len__4736__auto___59482)){
args__4742__auto__.push((arguments[i__4737__auto___59483]));

var G__59484 = (i__4737__auto___59483 + (1));
i__4737__auto___59483 = G__59484;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__59471){
var vec__59472 = p__59471;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59472,(0),null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"async?","async?",1523057758),false,new cljs.core.Keyword(null,"min-level","min-level",1634684919),null,new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022),null,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),new cljs.core.Keyword(null,"inherit","inherit",-1840815422),new cljs.core.Keyword(null,"fn","fn",-1175266204),(((typeof console !== 'undefined'))?(function (){var level__GT_logger = (function (level){
var or__4126__auto__ = (function (){var G__59476 = level;
var G__59476__$1 = (((G__59476 instanceof cljs.core.Keyword))?G__59476.fqn:null);
switch (G__59476__$1) {
case "trace":
return console.trace;

break;
case "debug":
return console.debug;

break;
case "info":
return console.info;

break;
case "warn":
return console.warn;

break;
case "error":
return console.error;

break;
case "fatal":
return console.error;

break;
case "report":
return console.info;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59476__$1)].join('')));

}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return console.log;
}
});
return (function (data){
var temp__5735__auto__ = level__GT_logger(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(temp__5735__auto__)){
var logger = temp__5735__auto__;
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"raw-console?","raw-console?",-2061489061).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"?meta","?meta",-793560773),new cljs.core.Keyword(null,"raw-console?","raw-console?",-2061489061)], null));
}
})())){
var output = (function (){var G__59478 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword(null,"msg_","msg_",-1925147000),"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"?err","?err",549653299),null], 0));
var fexpr__59477 = new cljs.core.Keyword(null,"output-fn","output-fn",1600951539).cljs$core$IFn$_invoke$arity$1(data);
return (fexpr__59477.cljs$core$IFn$_invoke$arity$1 ? fexpr__59477.cljs$core$IFn$_invoke$arity$1(G__59478) : fexpr__59477.call(null,G__59478));
})();
var args = (function (){var vargs = new cljs.core.Keyword(null,"vargs","vargs",-966597273).cljs$core$IFn$_invoke$arity$1(data);
var temp__5733__auto__ = new cljs.core.Keyword(null,"?err","?err",549653299).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__5733__auto__)){
var err = temp__5733__auto__;
return cljs.core.cons(output,cljs.core.cons(err,vargs));
} else {
return cljs.core.cons(output,vargs);
}
})();
return logger.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
} else {
return logger.call(console,cljs.core.force(new cljs.core.Keyword(null,"output_","output_",-36797880).cljs$core$IFn$_invoke$arity$1(data)));
}
} else {
return null;
}
});
})():(function (data){
return null;
}))], null);
}));

(taoensso.timbre.appenders.core.console_appender.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.timbre.appenders.core.console_appender.cljs$lang$applyTo = (function (seq59470){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59470));
}));

/**
 * DEPRECATED
 */
taoensso.timbre.appenders.core.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;

//# sourceMappingURL=taoensso.timbre.appenders.core.js.map
