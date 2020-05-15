goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__41984__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__41984 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41985__i = 0, G__41985__a = new Array(arguments.length -  0);
while (G__41985__i < G__41985__a.length) {G__41985__a[G__41985__i] = arguments[G__41985__i + 0]; ++G__41985__i;}
  args = new cljs.core.IndexedSeq(G__41985__a,0,null);
} 
return G__41984__delegate.call(this,args);};
G__41984.cljs$lang$maxFixedArity = 0;
G__41984.cljs$lang$applyTo = (function (arglist__41986){
var args = cljs.core.seq(arglist__41986);
return G__41984__delegate(args);
});
G__41984.cljs$core$IFn$_invoke$arity$variadic = G__41984__delegate;
return G__41984;
})()
);

(o.error = (function() { 
var G__41987__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__41987 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41988__i = 0, G__41988__a = new Array(arguments.length -  0);
while (G__41988__i < G__41988__a.length) {G__41988__a[G__41988__i] = arguments[G__41988__i + 0]; ++G__41988__i;}
  args = new cljs.core.IndexedSeq(G__41988__a,0,null);
} 
return G__41987__delegate.call(this,args);};
G__41987.cljs$lang$maxFixedArity = 0;
G__41987.cljs$lang$applyTo = (function (arglist__41989){
var args = cljs.core.seq(arglist__41989);
return G__41987__delegate(args);
});
G__41987.cljs$core$IFn$_invoke$arity$variadic = G__41987__delegate;
return G__41987;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
