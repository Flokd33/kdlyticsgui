goog.provide('reagent.debug');
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
var G__37938__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__37938 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37939__i = 0, G__37939__a = new Array(arguments.length -  0);
while (G__37939__i < G__37939__a.length) {G__37939__a[G__37939__i] = arguments[G__37939__i + 0]; ++G__37939__i;}
  args = new cljs.core.IndexedSeq(G__37939__a,0,null);
} 
return G__37938__delegate.call(this,args);};
G__37938.cljs$lang$maxFixedArity = 0;
G__37938.cljs$lang$applyTo = (function (arglist__37940){
var args = cljs.core.seq(arglist__37940);
return G__37938__delegate(args);
});
G__37938.cljs$core$IFn$_invoke$arity$variadic = G__37938__delegate;
return G__37938;
})()
);

(o.error = (function() { 
var G__37941__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__37941 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37942__i = 0, G__37942__a = new Array(arguments.length -  0);
while (G__37942__i < G__37942__a.length) {G__37942__a[G__37942__i] = arguments[G__37942__i + 0]; ++G__37942__i;}
  args = new cljs.core.IndexedSeq(G__37942__a,0,null);
} 
return G__37941__delegate.call(this,args);};
G__37941.cljs$lang$maxFixedArity = 0;
G__37941.cljs$lang$applyTo = (function (arglist__37943){
var args = cljs.core.seq(arglist__37943);
return G__37941__delegate(args);
});
G__37941.cljs$core$IFn$_invoke$arity$variadic = G__37941__delegate;
return G__37941;
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
