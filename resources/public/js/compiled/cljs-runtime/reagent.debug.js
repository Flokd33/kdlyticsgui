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
o.warn = ((function (o){
return (function() { 
var G__53193__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__53193 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53194__i = 0, G__53194__a = new Array(arguments.length -  0);
while (G__53194__i < G__53194__a.length) {G__53194__a[G__53194__i] = arguments[G__53194__i + 0]; ++G__53194__i;}
  args = new cljs.core.IndexedSeq(G__53194__a,0,null);
} 
return G__53193__delegate.call(this,args);};
G__53193.cljs$lang$maxFixedArity = 0;
G__53193.cljs$lang$applyTo = (function (arglist__53195){
var args = cljs.core.seq(arglist__53195);
return G__53193__delegate(args);
});
G__53193.cljs$core$IFn$_invoke$arity$variadic = G__53193__delegate;
return G__53193;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__53196__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__53196 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53197__i = 0, G__53197__a = new Array(arguments.length -  0);
while (G__53197__i < G__53197__a.length) {G__53197__a[G__53197__i] = arguments[G__53197__i + 0]; ++G__53197__i;}
  args = new cljs.core.IndexedSeq(G__53197__a,0,null);
} 
return G__53196__delegate.call(this,args);};
G__53196.cljs$lang$maxFixedArity = 0;
G__53196.cljs$lang$applyTo = (function (arglist__53198){
var args = cljs.core.seq(arglist__53198);
return G__53196__delegate(args);
});
G__53196.cljs$core$IFn$_invoke$arity$variadic = G__53196__delegate;
return G__53196;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
