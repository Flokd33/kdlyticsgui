goog.provide('oz.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('taoensso.timbre');
goog.require('taoensso.sente');
goog.require('taoensso.sente.packers.transit');
goog.require('cljsjs.vega');
goog.require('cljsjs.vega_lite');
goog.require('cljsjs.vega_embed');
goog.require('cljsjs.vega_tooltip');
taoensso.timbre.set_level_BANG_(new cljs.core.Keyword(null,"info","info",-317069002));
cljs.core.enable_console_print_BANG_();
oz.core.log = (function oz$core$log(a_thing){
return console.log(a_thing);
});
oz.core.render_vega_lite = (function oz$core$render_vega_lite(spec,elem){
if(cljs.core.truth_(spec)){
var spec__$1 = cljs.core.clj__GT_js(spec);
var opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"renderer","renderer",336841071),"canvas",new cljs.core.Keyword(null,"mode","mode",654403691),"vega-lite"], null);
return vegaEmbed(elem,spec__$1,cljs.core.clj__GT_js(opts)).then((function (res){
return vegaTooltip.vegaLite(res.view,spec__$1);
})).catch((function (err){
return oz.core.log(err);
}));
} else {
return null;
}
});
oz.core.render_vega = (function oz$core$render_vega(spec,elem){
if(cljs.core.truth_(spec)){
var spec__$1 = cljs.core.clj__GT_js(spec);
var opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"renderer","renderer",336841071),"canvas",new cljs.core.Keyword(null,"mode","mode",654403691),"vega"], null);
return vegaEmbed(elem,spec__$1,cljs.core.clj__GT_js(opts)).then((function (res){
return vegaTooltip.vega(res.view,spec__$1);
})).catch((function (err){
return oz.core.log(err);
}));
} else {
return null;
}
});
/**
 * Reagent component that renders vega-lite.
 */
oz.core.vega_lite = (function oz$core$vega_lite(spec){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"vega-lite",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return oz.core.render_vega_lite(spec,reagent.core.dom_node(this$));
}),new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),(function (this$,p__62961){
var vec__62962 = p__62961;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62962,(0),null);
var new_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62962,(1),null);
return oz.core.render_vega_lite(new_spec,reagent.core.dom_node(this$));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (spec__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#vis","div#vis",730109291)], null);
})], null));
});
/**
 * Reagent component that renders vega
 */
oz.core.vega = (function oz$core$vega(spec){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"vega",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return oz.core.render_vega(spec,reagent.core.dom_node(this$));
}),new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),(function (this$,p__62968){
var vec__62969 = p__62968;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62969,(0),null);
var new_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62969,(1),null);
return oz.core.render_vega(new_spec,reagent.core.dom_node(this$));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (spec__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#vis","div#vis",730109291)], null);
})], null));
});
oz.core.view_spec = (function oz$core$view_spec(spec){
return clojure.walk.prewalk((function (x){
if(cljs.core.truth_(((cljs.core.coll_QMARK_(x))?(function (){var G__62979 = cljs.core.first(x);
var fexpr__62978 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vega","vega",-1657843081),null,new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),null], null), null);
return (fexpr__62978.cljs$core$IFn$_invoke$arity$1 ? fexpr__62978.cljs$core$IFn$_invoke$arity$1(G__62979) : fexpr__62978.call(null,G__62979));
})():false))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__62984 = cljs.core.first(x);
var G__62984__$1 = (((G__62984 instanceof cljs.core.Keyword))?G__62984.fqn:null);
switch (G__62984__$1) {
case "vega":
return oz.core.vega;

break;
case "vega-lite":
return oz.core.vega_lite;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62984__$1)].join('')));

}
})(),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.rest(x))], null);
} else {
return x;
}
}),spec);
});

//# sourceMappingURL=oz.core.js.map
