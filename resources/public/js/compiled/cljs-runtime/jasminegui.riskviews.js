goog.provide('jasminegui.riskviews');
goog.require('cljs.core');
goog.require('oz.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('re_com.core');
goog.require('re_com.box');
goog.require('re_com.util');
var module$node_modules$react_table$lib$index=shadow.js.require("module$node_modules$react_table$lib$index", {});
goog.require('jasminegui.mount');
goog.require('jasminegui.static$');
goog.require('re_com.validate');
goog.require('goog.i18n.NumberFormat');
goog.require('goog.i18n.NumberFormat.Format');
jasminegui.riskviews.nff = (new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL));
jasminegui.riskviews.nf = (function jasminegui$riskviews$nf(x){
return jasminegui.riskviews.nff.format(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
});
jasminegui.riskviews.round_to_thousand = (function jasminegui$riskviews$round_to_thousand(x){
return ((1000) * ((x / 1000.0) | (0)));
});
jasminegui.riskviews.tnfmt = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.nf,jasminegui.riskviews.round_to_thousand);
jasminegui.riskviews.nfcell = (function jasminegui$riskviews$nfcell(this$){
return reagent.core.as_element((function (){var temp__5733__auto__ = (this$["value"]);
if(cljs.core.truth_(temp__5733__auto__)){
var x = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),jasminegui.riskviews.nf((x | (0)))], null);
} else {
return "-";
}
})());
});
jasminegui.riskviews.case_insensitive_filter = (function jasminegui$riskviews$case_insensitive_filter(filterfn,row){

return cljs.core.str.cljs$core$IFn$_invoke$arity$1((row[(filterfn["id"])])).toLowerCase().includes((filterfn["value"]).toLowerCase());
});
jasminegui.riskviews.txt_format = (function jasminegui$riskviews$txt_format(fmt,this$){
return reagent.core.as_element((function (){var temp__5733__auto__ = (this$["value"]);
if(cljs.core.truth_(temp__5733__auto__)){
var x = temp__5733__auto__;
return goog.string.format(fmt,x);
} else {
return "-";
}
})());
});
jasminegui.riskviews.round3 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.txt_format,"%.3f");
jasminegui.riskviews.round2 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.txt_format,"%.2f");
jasminegui.riskviews.round1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.txt_format,"%.1f");
jasminegui.riskviews.yield_format = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.txt_format,"%.2f%");
jasminegui.riskviews.zspread_format = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.txt_format,"%.0fbps");
jasminegui.riskviews.rating_sort = (function jasminegui$riskviews$rating_sort(a,b){
var t = cljs.core.deref((function (){var G__45017 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45017) : re_frame.core.subscribe.call(null,G__45017));
})());
return ((function (){var G__45018 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(a);
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(G__45018) : t.call(null,G__45018));
})() <= (function (){var G__45019 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(b);
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(G__45019) : t.call(null,G__45019));
})());
});
jasminegui.riskviews.sum_rows = (function jasminegui$riskviews$sum_rows(vals){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,vals);
});
jasminegui.riskviews.median = (function jasminegui$riskviews$median(coll){
var sorted = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,coll));
var cnt = cljs.core.count(sorted);
var halfway = cljs.core.quot(cnt,(2));
if((cnt === (0))){
return null;
} else {
if(cljs.core.odd_QMARK_(cnt)){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sorted,halfway);
} else {
var bottom = (halfway - (1));
var bottom_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sorted,bottom);
var top_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sorted,halfway);
return (0.5 * (bottom_val + top_val));

}
}
});
jasminegui.riskviews.roundpc = (function jasminegui$riskviews$roundpc(fmt,this$){
return reagent.core.as_element((function (){var temp__5733__auto__ = (this$["value"]);
if(cljs.core.truth_(temp__5733__auto__)){
var x = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(((x < (0)))?"red":"black")], null)], null),(function (){var G__45020 = fmt;
var G__45021 = ((100) * x);
return goog.string.format(G__45020,G__45021);
})()], null);
} else {
return "-";
}
})());
});
jasminegui.riskviews.round1pc = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.roundpc,"%.1f%");
jasminegui.riskviews.round2pc = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.roundpc,"%.2f%");
jasminegui.riskviews.round1pcytd = (function jasminegui$riskviews$round1pcytd(this$){
return reagent.core.as_element((function (){var temp__5733__auto__ = (this$["value"]);
if(cljs.core.truth_(temp__5733__auto__)){
var x = temp__5733__auto__;
var style = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((x < (0)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)),(cljs.core.truth_((this$["row"]["thisyear"]))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic"], null):cljs.core.PersistentArrayMap.EMPTY)], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style], null),(function (){var G__45022 = "%.1f%";
var G__45023 = ((100) * x);
return goog.string.format(G__45022,G__45023);
})()], null);
} else {
return "-";
}
})());
});
jasminegui.riskviews.round0pc_trigger = (function jasminegui$riskviews$round0pc_trigger(this$){
return reagent.core.as_element((function (){var temp__5733__auto__ = (this$["value"]);
if(cljs.core.truth_(temp__5733__auto__)){
var x = temp__5733__auto__;
var colorize = ((function (x,temp__5733__auto__){
return (function jasminegui$riskviews$round0pc_trigger_$_colorize(c,v){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),c], null)], null),(function (){var G__45026 = "%.0f%";
var G__45027 = ((100) * v);
return goog.string.format(G__45026,G__45027);
})()], null);
});})(x,temp__5733__auto__))
;
if((x >= 1.0)){
return colorize("red",x);
} else {
if((x >= 0.5)){
return colorize("orange",x);
} else {
if((x >= 0.0)){
return colorize("black",x);
} else {
if((x < 0.0)){
return "<0%";
} else {
return "-";

}
}
}
}
} else {
return "-";
}
})());
});
jasminegui.riskviews.strategy_pop_up = (function jasminegui$riskviews$strategy_pop_up(this$){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),(this$["row"]["strategy"])], null),(this$["row"]["strategy-shortcut"])], null)], null));
});
jasminegui.riskviews.last_price_props = (function jasminegui$riskviews$last_price_props(this$){
if((!((this$ == null)))){
var status = (this$["row"]["status"]);
var prefix = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,"CLOSED"))?"(c) ":"");
return reagent.core.as_element([prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__45030 = "%.2f";
var G__45031 = (this$["value"]);
return goog.string.format(G__45030,G__45031);
})())].join(''));
} else {
return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null));
}
});
jasminegui.riskviews.bigger_than = (function jasminegui$riskviews$bigger_than(filterfn,row){

return ((row["weight"]) > (filterfn["value"]));
});
jasminegui.riskviews.rating_score_to_string = (function jasminegui$riskviews$rating_score_to_string(this$){
return (this$["row"]["qt-iam-int-lt-median-rating"]);
});
jasminegui.riskviews.table_columns = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"yield","yield",177875009),new cljs.core.Keyword(null,"z-spread","z-spread",-1184367967),new cljs.core.Keyword(null,"weight-delta","weight-delta",-1239784638),new cljs.core.Keyword(null,"nominal","nominal",413899877),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067),new cljs.core.Keyword(null,"bm-weight","bm-weight",217267431),new cljs.core.Keyword(null,"mdur-delta","mdur-delta",-395332953),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sector","sector",-1444247062),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175),new cljs.core.Keyword(null,"bm-contrib-eir-duration","bm-contrib-eir-duration",1013923984),new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030),new cljs.core.Keyword(null,"bm-contrib-yield","bm-contrib-yield",-1399804238),new cljs.core.Keyword(null,"id-show","id-show",1455582548),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"rating-score","rating-score",1260592885),new cljs.core.Keyword(null,"isin","isin",-1197420747),new cljs.core.Keyword(null,"issuer","issuer",-1199257898),new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737),new cljs.core.Keyword(null,"country","country",312965309),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"g-spread","g-spread",973847710),new cljs.core.Keyword(null,"rating","rating",144173662)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"thinkFolio ID",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"description",new cljs.core.Keyword(null,"width","width",-384071477),(500)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Yield",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"qt-yield",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.median,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.round2pc,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Z-spread",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"qt-libor-spread",new cljs.core.Keyword(null,"width","width",-384071477),(80),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.median,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.nfcell,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Delta",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"weight-delta",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.round2,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Nominal",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"original-quantity",new cljs.core.Keyword(null,"width","width",-384071477),(120),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.nfcell,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),true,new cljs.core.Keyword(null,"filterMethod","filterMethod",-1560228661),jasminegui.riskviews.bigger_than], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Fund",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"contrib-yield",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.round2pc,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Fund",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"contrib-zspread",new cljs.core.Keyword(null,"width","width",-384071477),(80),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.round1,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Index",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"bm-weight",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.round2,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Delta",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"mdur-delta",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.round2,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Name",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"NAME",new cljs.core.Keyword(null,"width","width",-384071477),(140)], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Value",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"base-value",new cljs.core.Keyword(null,"width","width",-384071477),(120),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.nfcell,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),true,new cljs.core.Keyword(null,"filterMethod","filterMethod",-1560228661),jasminegui.riskviews.bigger_than], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Sector",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"qt-jpm-sector",new cljs.core.Keyword(null,"width","width",-384071477),(140)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),"M dur",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"qt-modified-duration",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.median,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.round2,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Cash",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"cash-pct",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.yield_format,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Index",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"bm-contrib-eir-duration",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.round2,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Region",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"jpm-region",new cljs.core.Keyword(null,"width","width",-384071477),(140)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Fund",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"contrib-mdur",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.round2,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),"G-spread",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"contrib-gspread",new cljs.core.Keyword(null,"width","width",-384071477),(80),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.round1,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Index",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"bm-contrib-yield",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.round2pc,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"ID",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"id",new cljs.core.Keyword(null,"width","width",-384071477),(75)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"ID",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"id",new cljs.core.Keyword(null,"show","show",-576705889),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Rating",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"qt-iam-int-lt-median-rating-score",new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.rating_score_to_string,new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),cljs.core.first], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"ISIN",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"isin",new cljs.core.Keyword(null,"width","width",-384071477),(125)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Issuer",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"TICKER",new cljs.core.Keyword(null,"width","width",-384071477),(140)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Bond yield",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"contrib-bond-yield",new cljs.core.Keyword(null,"width","width",-384071477),(80),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.round2pc,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Country",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"qt-risk-country-name",new cljs.core.Keyword(null,"width","width",-384071477),(140)], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Fund",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"weight",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.round2,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),true,new cljs.core.Keyword(null,"filterMethod","filterMethod",-1560228661),jasminegui.riskviews.bigger_than], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),"G-spread",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"qt-govt-spread",new cljs.core.Keyword(null,"width","width",-384071477),(80),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.median,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.nfcell,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Rating",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"qt-iam-int-lt-median-rating",new cljs.core.Keyword(null,"show","show",-576705889),false], null)]);
jasminegui.riskviews.first_level_sort = (function jasminegui$riskviews$first_level_sort(x){
var G__45032 = x;
switch (G__45032) {
case "Cash":
return "AAA";

break;
default:
return x;

}
});
jasminegui.riskviews.add_total_line_to_pivot = (function jasminegui$riskviews$add_total_line_to_pivot(pivoted_table,portfolios){
var total_line = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"jpm-region","jpm-region",-2074265852),"Total",new cljs.core.Keyword(null,"qt-jpm-sector","qt-jpm-sector",1047055349),"Total",new cljs.core.Keyword(null,"qt-risk-country-name","qt-risk-country-name",1182905474),"Total",new cljs.core.Keyword(null,"TICKER","TICKER",-1215969144),"Total",new cljs.core.Keyword(null,"NAME","NAME",-1127916515),"Total",new cljs.core.Keyword(null,"description","description",-1428560544),"Total"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function jasminegui$riskviews$add_total_line_to_pivot_$_iter__45033(s__45034){
return (new cljs.core.LazySeq(null,(function (){
var s__45034__$1 = s__45034;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45034__$1);
if(temp__5735__auto__){
var s__45034__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45034__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__45034__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__45036 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__45035 = (0);
while(true){
if((i__45035 < size__4522__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__45035);
cljs.core.chunk_append(b__45036,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),pivoted_table))], null));

var G__45197 = (i__45035 + (1));
i__45035 = G__45197;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45036),jasminegui$riskviews$add_total_line_to_pivot_$_iter__45033(cljs.core.chunk_rest(s__45034__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45036),null);
}
} else {
var p = cljs.core.first(s__45034__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),pivoted_table))], null),jasminegui$riskviews$add_total_line_to_pivot_$_iter__45033(cljs.core.rest(s__45034__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(portfolios);
})())], 0));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pivoted_table,total_line);
});
jasminegui.riskviews.dropdown_width = "150px";
jasminegui.riskviews.single_portfolio_risk_display = (function jasminegui$riskviews$single_portfolio_risk_display(){
var positions = cljs.core.deref((function (){var G__45040 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45040) : re_frame.core.subscribe.call(null,G__45040));
})());
var portfolio = cljs.core.deref((function (){var G__45041 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45041) : re_frame.core.subscribe.call(null,G__45041));
})());
var portfolio_total_line = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var G__45044 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(portfolio);
var fexpr__45043 = cljs.core.deref((function (){var G__45045 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45045) : re_frame.core.subscribe.call(null,G__45045));
})());
return (fexpr__45043.cljs$core$IFn$_invoke$arity$1 ? fexpr__45043.cljs$core$IFn$_invoke$arity$1(G__45044) : fexpr__45043.call(null,G__45044));
})(),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),"Total",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),"00 Total"], 0));
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__45046 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45046) : re_frame.core.subscribe.call(null,G__45046));
})()),"Tree");
var portfolio_positions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (positions,portfolio,portfolio_total_line,is_tree){
return (function (p1__45037_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__45037_SHARP_),portfolio);
});})(positions,portfolio,portfolio_total_line,is_tree))
,positions);
var viewable_positions = (cljs.core.truth_((function (){var and__4120__auto__ = (!(is_tree));
if(and__4120__auto__){
return cljs.core.deref((function (){var G__45048 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45048) : re_frame.core.subscribe.call(null,G__45048));
})());
} else {
return and__4120__auto__;
}
})())?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (positions,portfolio,portfolio_total_line,is_tree,portfolio_positions){
return (function (p1__45038_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(p1__45038_SHARP_),(0));
});})(positions,portfolio,portfolio_total_line,is_tree,portfolio_positions))
,portfolio_positions):portfolio_positions);
var risk_filter = cljs.core.deref((function (){var G__45049 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45049) : re_frame.core.subscribe.call(null,G__45049));
})());
var risk_choice_1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((1)) : risk_filter.call(null,(1)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((1)) : risk_filter.call(null,(1))):null);
var risk_choice_2 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((2)) : risk_filter.call(null,(2)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((2)) : risk_filter.call(null,(2))):null);
var risk_choice_3 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((3)) : risk_filter.call(null,(3)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((3)) : risk_filter.call(null,(3))):null);
var additional_des_cols = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([risk_choice_3,"None",risk_choice_2,risk_choice_1]),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),jasminegui.static$.risk_choice_map));
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = ((function (positions,portfolio,portfolio_total_line,is_tree,portfolio_positions,viewable_positions,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,additional_des_cols){
return (function jasminegui$riskviews$single_portfolio_risk_display_$_iter__45050(s__45051){
return (new cljs.core.LazySeq(null,((function (positions,portfolio,portfolio_total_line,is_tree,portfolio_positions,viewable_positions,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,additional_des_cols){
return (function (){
var s__45051__$1 = s__45051;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45051__$1);
if(temp__5735__auto__){
var s__45051__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45051__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__45051__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__45053 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__45052 = (0);
while(true){
if((i__45052 < size__4522__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__45052);
cljs.core.chunk_append(b__45053,(jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.riskviews.table_columns.call(null,r)));

var G__45202 = (i__45052 + (1));
i__45052 = G__45202;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45053),jasminegui$riskviews$single_portfolio_risk_display_$_iter__45050(cljs.core.chunk_rest(s__45051__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45053),null);
}
} else {
var r = cljs.core.first(s__45051__$2);
return cljs.core.cons((jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.riskviews.table_columns.call(null,r)),jasminegui$riskviews$single_portfolio_risk_display_$_iter__45050(cljs.core.rest(s__45051__$2)));
}
} else {
return null;
}
break;
}
});})(positions,portfolio,portfolio_total_line,is_tree,portfolio_positions,viewable_positions,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,additional_des_cols))
,null,null));
});})(positions,portfolio,portfolio_total_line,is_tree,portfolio_positions,viewable_positions,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,additional_des_cols))
;
return iter__4523__auto__(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [risk_choice_1,risk_choice_2,risk_choice_3,new cljs.core.Keyword(null,"name","name",1843675177)], null)));
})());
var accessors = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accessor","accessor",-25476721),grouping_columns);
var accessors_k = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,accessors);
var display = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),viewable_positions),portfolio_total_line);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref((function (){var G__45054 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45054) : re_frame.core.subscribe.call(null,G__45054));
})())], 0));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"onFilteredChange","onFilteredChange",-69731355),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"filterable","filterable",-1588312341),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"pageSize","pageSize",732080883),new cljs.core.Keyword(null,"sortable","sortable",2109633621),new cljs.core.Keyword(null,"defaultFilterMethod","defaultFilterMethod",-641971243),new cljs.core.Keyword(null,"defaultFiltered","defaultFiltered",-1057218537),new cljs.core.Keyword(null,"pivotBy","pivotBy",782354495),new cljs.core.Keyword(null,"data","data",-232669377)],[((function (positions,portfolio,portfolio_total_line,is_tree,portfolio_positions,viewable_positions,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,additional_des_cols,grouping_columns,accessors,accessors_k,display){
return (function (p1__45039_SHARP_){
var G__45055 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),p1__45039_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45055) : re_frame.core.dispatch.call(null,G__45055));
});})(positions,portfolio,portfolio_total_line,is_tree,portfolio_positions,viewable_positions,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,additional_des_cols,grouping_columns,accessors,accessors_k,display))
,(!(is_tree)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Groups",new cljs.core.Keyword(null,"columns","columns",1998437288),grouping_columns], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"NAV",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"bm-weight","bm-weight",217267431),new cljs.core.Keyword(null,"weight-delta","weight-delta",-1239784638)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Duration",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"bm-contrib-eir-duration","bm-contrib-eir-duration",1013923984),new cljs.core.Keyword(null,"mdur-delta","mdur-delta",-395332953)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Yield",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"bm-contrib-yield","bm-contrib-yield",-1399804238)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Z-spread",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Position",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"nominal","nominal",413899877)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),((is_tree)?"Bond analytics (median)":"Bond analytics"),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"yield","yield",177875009),new cljs.core.Keyword(null,"z-spread","z-spread",-1184367967),new cljs.core.Keyword(null,"g-spread","g-spread",973847710),new cljs.core.Keyword(null,"duration","duration",1444101068)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Description",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rating","rating",144173662),new cljs.core.Keyword(null,"isin","isin",-1197420747)], null),additional_des_cols,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",-1428560544)], null)], 0))))], null)], null),(!(is_tree)),"-striped -highlight",((is_tree)?(cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first(accessors_k),portfolio_positions))) + (1)):(25)),(!(is_tree)),jasminegui.riskviews.case_insensitive_filter,((is_tree)?cljs.core.PersistentVector.EMPTY:cljs.core.deref((function (){var G__45056 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45056) : re_frame.core.subscribe.call(null,G__45056));
})())),((is_tree)?accessors:cljs.core.PersistentVector.EMPTY),display])], null);
});
jasminegui.riskviews.multiple_portfolio_risk_display = (function jasminegui$riskviews$multiple_portfolio_risk_display(){
var pivoted_positions = cljs.core.deref((function (){var G__45059 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45059) : re_frame.core.subscribe.call(null,G__45059));
})());
var selected_portfolios = cljs.core.deref((function (){var G__45060 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45060) : re_frame.core.subscribe.call(null,G__45060));
})());
var kselected_portfolios = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,selected_portfolios);
var portfolios = cljs.core.deref((function (){var G__45061 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45061) : re_frame.core.subscribe.call(null,G__45061));
})());
var hide_zero_risk = cljs.core.deref((function (){var G__45062 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45062) : re_frame.core.subscribe.call(null,G__45062));
})());
var number_of_fields = cljs.core.deref((function (){var G__45063 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45063) : re_frame.core.subscribe.call(null,G__45063));
})());
var display_key_one = cljs.core.deref((function (){var G__45064 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45064) : re_frame.core.subscribe.call(null,G__45064));
})());
var cell_one = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_one,new cljs.core.Keyword(null,"Cell","Cell",53644787)], null));
var display_key_two = cljs.core.deref((function (){var G__45065 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45065) : re_frame.core.subscribe.call(null,G__45065));
})());
var cell_two = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_two,new cljs.core.Keyword(null,"Cell","Cell",53644787)], null));
var width_one = (100);
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__45066 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45066) : re_frame.core.subscribe.call(null,G__45066));
})()),"Tree");
var risk_filter = cljs.core.deref((function (){var G__45067 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45067) : re_frame.core.subscribe.call(null,G__45067));
})());
var risk_choice_1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((1)) : risk_filter.call(null,(1)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((1)) : risk_filter.call(null,(1))):null);
var risk_choice_2 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((2)) : risk_filter.call(null,(2)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((2)) : risk_filter.call(null,(2))):null);
var risk_choice_3 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((3)) : risk_filter.call(null,(3)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((3)) : risk_filter.call(null,(3))):null);
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = ((function (pivoted_positions,selected_portfolios,kselected_portfolios,portfolios,hide_zero_risk,number_of_fields,display_key_one,cell_one,display_key_two,cell_two,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3){
return (function jasminegui$riskviews$multiple_portfolio_risk_display_$_iter__45068(s__45069){
return (new cljs.core.LazySeq(null,((function (pivoted_positions,selected_portfolios,kselected_portfolios,portfolios,hide_zero_risk,number_of_fields,display_key_one,cell_one,display_key_two,cell_two,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3){
return (function (){
var s__45069__$1 = s__45069;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45069__$1);
if(temp__5735__auto__){
var s__45069__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45069__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__45069__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__45071 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__45070 = (0);
while(true){
if((i__45070 < size__4522__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__45070);
cljs.core.chunk_append(b__45071,(jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.riskviews.table_columns.call(null,r)));

var G__45204 = (i__45070 + (1));
i__45070 = G__45204;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45071),jasminegui$riskviews$multiple_portfolio_risk_display_$_iter__45068(cljs.core.chunk_rest(s__45069__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45071),null);
}
} else {
var r = cljs.core.first(s__45069__$2);
return cljs.core.cons((jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.riskviews.table_columns.call(null,r)),jasminegui$riskviews$multiple_portfolio_risk_display_$_iter__45068(cljs.core.rest(s__45069__$2)));
}
} else {
return null;
}
break;
}
});})(pivoted_positions,selected_portfolios,kselected_portfolios,portfolios,hide_zero_risk,number_of_fields,display_key_one,cell_one,display_key_two,cell_two,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3))
,null,null));
});})(pivoted_positions,selected_portfolios,kselected_portfolios,portfolios,hide_zero_risk,number_of_fields,display_key_one,cell_one,display_key_two,cell_two,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3))
;
return iter__4523__auto__(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [risk_choice_1,risk_choice_2,risk_choice_3,new cljs.core.Keyword(null,"name","name",1843675177)], null)));
})());
var accessors = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accessor","accessor",-25476721),grouping_columns);
var accessors_k = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,accessors);
var pivoted_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pivoted_positions,selected_portfolios,kselected_portfolios,portfolios,hide_zero_risk,number_of_fields,display_key_one,cell_one,display_key_two,cell_two,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k){
return (function (p1__45057_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__45057_SHARP_,(function (){var fexpr__45072 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_one,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__45072.cljs$core$IFn$_invoke$arity$1 ? fexpr__45072.cljs$core$IFn$_invoke$arity$1(p1__45057_SHARP_) : fexpr__45072.call(null,p1__45057_SHARP_));
})()], 0));
});})(pivoted_positions,selected_portfolios,kselected_portfolios,portfolios,hide_zero_risk,number_of_fields,display_key_one,cell_one,display_key_two,cell_two,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k))
,pivoted_positions);
var thfil = ((function (pivoted_positions,selected_portfolios,kselected_portfolios,portfolios,hide_zero_risk,number_of_fields,display_key_one,cell_one,display_key_two,cell_two,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k,pivoted_data){
return (function (line){
return (!(cljs.core.every_QMARK_(cljs.core.zero_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(line,kselected_portfolios))));
});})(pivoted_positions,selected_portfolios,kselected_portfolios,portfolios,hide_zero_risk,number_of_fields,display_key_one,cell_one,display_key_two,cell_two,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k,pivoted_data))
;
var pivoted_data_hide_zero = (cljs.core.truth_((function (){var and__4120__auto__ = (!(is_tree));
if(and__4120__auto__){
return hide_zero_risk;
} else {
return and__4120__auto__;
}
})())?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(thfil,pivoted_data):pivoted_data);
var display_one = jasminegui.riskviews.add_total_line_to_pivot(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),pivoted_data_hide_zero),portfolios);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"onFilteredChange","onFilteredChange",-69731355),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"filterable","filterable",-1588312341),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"pageSize","pageSize",732080883),new cljs.core.Keyword(null,"sortable","sortable",2109633621),new cljs.core.Keyword(null,"defaultFilterMethod","defaultFilterMethod",-641971243),new cljs.core.Keyword(null,"defaultFiltered","defaultFiltered",-1057218537),new cljs.core.Keyword(null,"pivotBy","pivotBy",782354495),new cljs.core.Keyword(null,"data","data",-232669377)],[((function (pivoted_positions,selected_portfolios,kselected_portfolios,portfolios,hide_zero_risk,number_of_fields,display_key_one,cell_one,display_key_two,cell_two,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k,pivoted_data,thfil,pivoted_data_hide_zero,display_one){
return (function (p1__45058_SHARP_){
var G__45073 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),p1__45058_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45073) : re_frame.core.dispatch.call(null,G__45073));
});})(pivoted_positions,selected_portfolios,kselected_portfolios,portfolios,hide_zero_risk,number_of_fields,display_key_one,cell_one,display_key_two,cell_two,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k,pivoted_data,thfil,pivoted_data_hide_zero,display_one))
,(!(is_tree)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(number_of_fields,"One"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Groups",new cljs.core.Keyword(null,"columns","columns",1998437288),grouping_columns], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),["Portfolio ",cljs.core.name(display_key_one)].join(''),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = ((function (pivoted_positions,selected_portfolios,kselected_portfolios,portfolios,hide_zero_risk,number_of_fields,display_key_one,cell_one,display_key_two,cell_two,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k,pivoted_data,thfil,pivoted_data_hide_zero,display_one){
return (function jasminegui$riskviews$multiple_portfolio_risk_display_$_iter__45074(s__45075){
return (new cljs.core.LazySeq(null,((function (pivoted_positions,selected_portfolios,kselected_portfolios,portfolios,hide_zero_risk,number_of_fields,display_key_one,cell_one,display_key_two,cell_two,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k,pivoted_data,thfil,pivoted_data_hide_zero,display_one){
return (function (){
var s__45075__$1 = s__45075;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45075__$1);
if(temp__5735__auto__){
var s__45075__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45075__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__45075__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__45077 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__45076 = (0);
while(true){
if((i__45076 < size__4522__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__45076);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([p]),selected_portfolios))){
cljs.core.chunk_append(b__45077,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),p,new cljs.core.Keyword(null,"accessor","accessor",-25476721),p,new cljs.core.Keyword(null,"width","width",-384071477),width_one,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),cell_one,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null));

var G__45206 = (i__45076 + (1));
i__45076 = G__45206;
continue;
} else {
var G__45207 = (i__45076 + (1));
i__45076 = G__45207;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45077),jasminegui$riskviews$multiple_portfolio_risk_display_$_iter__45074(cljs.core.chunk_rest(s__45075__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45077),null);
}
} else {
var p = cljs.core.first(s__45075__$2);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([p]),selected_portfolios))){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),p,new cljs.core.Keyword(null,"accessor","accessor",-25476721),p,new cljs.core.Keyword(null,"width","width",-384071477),width_one,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),cell_one,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),jasminegui$riskviews$multiple_portfolio_risk_display_$_iter__45074(cljs.core.rest(s__45075__$2)));
} else {
var G__45208 = cljs.core.rest(s__45075__$2);
s__45075__$1 = G__45208;
continue;
}
}
} else {
return null;
}
break;
}
});})(pivoted_positions,selected_portfolios,kselected_portfolios,portfolios,hide_zero_risk,number_of_fields,display_key_one,cell_one,display_key_two,cell_two,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k,pivoted_data,thfil,pivoted_data_hide_zero,display_one))
,null,null));
});})(pivoted_positions,selected_portfolios,kselected_portfolios,portfolios,hide_zero_risk,number_of_fields,display_key_one,cell_one,display_key_two,cell_two,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k,pivoted_data,thfil,pivoted_data_hide_zero,display_one))
;
return iter__4523__auto__(portfolios);
})())], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Description",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rating","rating",144173662),new cljs.core.Keyword(null,"isin","isin",-1197420747),new cljs.core.Keyword(null,"description","description",-1428560544)], null))], null)], null):null),(!(is_tree)),"-striped -highlight",((is_tree)?(cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first(accessors_k),display_one))) + (1)):(25)),(!(is_tree)),jasminegui.riskviews.case_insensitive_filter,((is_tree)?cljs.core.PersistentVector.EMPTY:cljs.core.deref((function (){var G__45078 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45078) : re_frame.core.subscribe.call(null,G__45078));
})())),((is_tree)?accessors:cljs.core.PersistentVector.EMPTY),display_one])], null);
});
jasminegui.riskviews.multiple_portfolio_alignment_risk_display = (function jasminegui$riskviews$multiple_portfolio_alignment_risk_display(){
var group = new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__45079_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__45079_SHARP_),cljs.core.deref((function (){var G__45082 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45082) : re_frame.core.subscribe.call(null,G__45082));
})()));
}),jasminegui.static$.portfolio_alignment_groups)));
var pivoted_positions = cljs.core.deref((function (){var G__45083 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45083) : re_frame.core.subscribe.call(null,G__45083));
})());
var base_portfolio = cljs.core.first(group);
var portfolios = cljs.core.rest(group);
var kportfolios = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,portfolios);
var display_key = cljs.core.deref((function (){var G__45084 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45084) : re_frame.core.subscribe.call(null,G__45084));
})());
var cell_one = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key,new cljs.core.Keyword(null,"Cell","Cell",53644787)], null));
var width_one = (100);
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__45085 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45085) : re_frame.core.subscribe.call(null,G__45085));
})()),"Tree");
var risk_filter = cljs.core.deref((function (){var G__45086 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45086) : re_frame.core.subscribe.call(null,G__45086));
})());
var risk_choice_1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((1)) : risk_filter.call(null,(1)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((1)) : risk_filter.call(null,(1))):null);
var risk_choice_2 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((2)) : risk_filter.call(null,(2)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((2)) : risk_filter.call(null,(2))):null);
var risk_choice_3 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((3)) : risk_filter.call(null,(3)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((3)) : risk_filter.call(null,(3))):null);
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = ((function (group,pivoted_positions,base_portfolio,portfolios,kportfolios,display_key,cell_one,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3){
return (function jasminegui$riskviews$multiple_portfolio_alignment_risk_display_$_iter__45087(s__45088){
return (new cljs.core.LazySeq(null,((function (group,pivoted_positions,base_portfolio,portfolios,kportfolios,display_key,cell_one,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3){
return (function (){
var s__45088__$1 = s__45088;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45088__$1);
if(temp__5735__auto__){
var s__45088__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45088__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__45088__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__45090 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__45089 = (0);
while(true){
if((i__45089 < size__4522__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__45089);
cljs.core.chunk_append(b__45090,(jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.riskviews.table_columns.call(null,r)));

var G__45209 = (i__45089 + (1));
i__45089 = G__45209;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45090),jasminegui$riskviews$multiple_portfolio_alignment_risk_display_$_iter__45087(cljs.core.chunk_rest(s__45088__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45090),null);
}
} else {
var r = cljs.core.first(s__45088__$2);
return cljs.core.cons((jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.riskviews.table_columns.call(null,r)),jasminegui$riskviews$multiple_portfolio_alignment_risk_display_$_iter__45087(cljs.core.rest(s__45088__$2)));
}
} else {
return null;
}
break;
}
});})(group,pivoted_positions,base_portfolio,portfolios,kportfolios,display_key,cell_one,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3))
,null,null));
});})(group,pivoted_positions,base_portfolio,portfolios,kportfolios,display_key,cell_one,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3))
;
return iter__4523__auto__(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [risk_choice_1,risk_choice_2,risk_choice_3,new cljs.core.Keyword(null,"name","name",1843675177)], null)));
})());
var accessors = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accessor","accessor",-25476721),grouping_columns);
var accessors_k = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,accessors);
var pivoted_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (group,pivoted_positions,base_portfolio,portfolios,kportfolios,display_key,cell_one,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k){
return (function (p1__45080_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__45080_SHARP_,(function (){var fexpr__45091 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__45091.cljs$core$IFn$_invoke$arity$1 ? fexpr__45091.cljs$core$IFn$_invoke$arity$1(p1__45080_SHARP_) : fexpr__45091.call(null,p1__45080_SHARP_));
})()], 0));
});})(group,pivoted_positions,base_portfolio,portfolios,kportfolios,display_key,cell_one,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k))
,pivoted_positions);
var differentiate = ((function (group,pivoted_positions,base_portfolio,portfolios,kportfolios,display_key,cell_one,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k,pivoted_data){
return (function (line){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (group,pivoted_positions,base_portfolio,portfolios,kportfolios,display_key,cell_one,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k,pivoted_data){
return (function (temp_line,p){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(temp_line,p,((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(temp_line) : p.call(null,temp_line)) - (function (){var fexpr__45092 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(base_portfolio);
return (fexpr__45092.cljs$core$IFn$_invoke$arity$1 ? fexpr__45092.cljs$core$IFn$_invoke$arity$1(temp_line) : fexpr__45092.call(null,temp_line));
})()));
});})(group,pivoted_positions,base_portfolio,portfolios,kportfolios,display_key,cell_one,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k,pivoted_data))
,line,kportfolios);
});})(group,pivoted_positions,base_portfolio,portfolios,kportfolios,display_key,cell_one,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k,pivoted_data))
;
var pivoted_data_diff = cljs.core.map.cljs$core$IFn$_invoke$arity$2(differentiate,pivoted_data);
var threshold = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (group,pivoted_positions,base_portfolio,portfolios,kportfolios,display_key,cell_one,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k,pivoted_data,differentiate,pivoted_data_diff){
return (function (p1__45081_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__45081_SHARP_),cljs.core.deref((function (){var G__45093 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45093) : re_frame.core.subscribe.call(null,G__45093));
})()));
});})(group,pivoted_positions,base_portfolio,portfolios,kportfolios,display_key,cell_one,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k,pivoted_data,differentiate,pivoted_data_diff))
,jasminegui.static$.threshold_choices_alignment))));
var thfil = ((function (group,pivoted_positions,base_portfolio,portfolios,kportfolios,display_key,cell_one,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k,pivoted_data,differentiate,pivoted_data_diff,threshold){
return (function (line){
return cljs.core.some(((function (group,pivoted_positions,base_portfolio,portfolios,kportfolios,display_key,cell_one,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k,pivoted_data,differentiate,pivoted_data_diff,threshold){
return (function (x){
return (((x < (- threshold))) || ((x > threshold)));
});})(group,pivoted_positions,base_portfolio,portfolios,kportfolios,display_key,cell_one,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k,pivoted_data,differentiate,pivoted_data_diff,threshold))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(line,kportfolios));
});})(group,pivoted_positions,base_portfolio,portfolios,kportfolios,display_key,cell_one,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k,pivoted_data,differentiate,pivoted_data_diff,threshold))
;
var pivoted_data_diff_post_th = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(thfil,pivoted_data_diff);
var display = jasminegui.riskviews.add_total_line_to_pivot(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),pivoted_data_diff_post_th),portfolios);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kportfolios], 0));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"filterable","filterable",-1588312341),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"pageSize","pageSize",732080883),new cljs.core.Keyword(null,"sortable","sortable",2109633621),new cljs.core.Keyword(null,"defaultFilterMethod","defaultFilterMethod",-641971243),new cljs.core.Keyword(null,"pivotBy","pivotBy",782354495),new cljs.core.Keyword(null,"data","data",-232669377)],[(!(is_tree)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Groups",new cljs.core.Keyword(null,"columns","columns",1998437288),grouping_columns], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),["Portfolio ",cljs.core.name(display_key)," vs ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_portfolio)].join(''),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = ((function (group,pivoted_positions,base_portfolio,portfolios,kportfolios,display_key,cell_one,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k,pivoted_data,differentiate,pivoted_data_diff,threshold,thfil,pivoted_data_diff_post_th,display){
return (function jasminegui$riskviews$multiple_portfolio_alignment_risk_display_$_iter__45094(s__45095){
return (new cljs.core.LazySeq(null,((function (group,pivoted_positions,base_portfolio,portfolios,kportfolios,display_key,cell_one,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k,pivoted_data,differentiate,pivoted_data_diff,threshold,thfil,pivoted_data_diff_post_th,display){
return (function (){
var s__45095__$1 = s__45095;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45095__$1);
if(temp__5735__auto__){
var s__45095__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45095__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__45095__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__45097 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__45096 = (0);
while(true){
if((i__45096 < size__4522__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__45096);
cljs.core.chunk_append(b__45097,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),p,new cljs.core.Keyword(null,"accessor","accessor",-25476721),p,new cljs.core.Keyword(null,"width","width",-384071477),width_one,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),cell_one,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null));

var G__45210 = (i__45096 + (1));
i__45096 = G__45210;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45097),jasminegui$riskviews$multiple_portfolio_alignment_risk_display_$_iter__45094(cljs.core.chunk_rest(s__45095__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45097),null);
}
} else {
var p = cljs.core.first(s__45095__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),p,new cljs.core.Keyword(null,"accessor","accessor",-25476721),p,new cljs.core.Keyword(null,"width","width",-384071477),width_one,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),cell_one,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),jasminegui$riskviews$multiple_portfolio_alignment_risk_display_$_iter__45094(cljs.core.rest(s__45095__$2)));
}
} else {
return null;
}
break;
}
});})(group,pivoted_positions,base_portfolio,portfolios,kportfolios,display_key,cell_one,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k,pivoted_data,differentiate,pivoted_data_diff,threshold,thfil,pivoted_data_diff_post_th,display))
,null,null));
});})(group,pivoted_positions,base_portfolio,portfolios,kportfolios,display_key,cell_one,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k,pivoted_data,differentiate,pivoted_data_diff,threshold,thfil,pivoted_data_diff_post_th,display))
;
return iter__4523__auto__(portfolios);
})())], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Description",new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"thinkFolio ID",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"description",new cljs.core.Keyword(null,"width","width",-384071477),(500)], null),(function (){var G__45098 = new cljs.core.Keyword(null,"rating","rating",144173662);
return (jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(G__45098) : jasminegui.riskviews.table_columns.call(null,G__45098));
})()], null)], null)], null),(!(is_tree)),"-striped -highlight",((is_tree)?(cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first(accessors_k),display))) + (1)):(25)),(!(is_tree)),jasminegui.riskviews.case_insensitive_filter,((is_tree)?accessors:cljs.core.PersistentVector.EMPTY),display])], null);
});
jasminegui.riskviews.single_portfolio_risk_controller = (function jasminegui$riskviews$single_portfolio_risk_controller(){
var portfolio_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = (function jasminegui$riskviews$single_portfolio_risk_controller_$_iter__45103(s__45104){
return (new cljs.core.LazySeq(null,(function (){
var s__45104__$1 = s__45104;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45104__$1);
if(temp__5735__auto__){
var s__45104__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45104__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__45104__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__45106 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__45105 = (0);
while(true){
if((i__45105 < size__4522__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__45105);
cljs.core.chunk_append(b__45106,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null));

var G__45211 = (i__45105 + (1));
i__45105 = G__45211;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45106),jasminegui$riskviews$single_portfolio_risk_controller_$_iter__45103(cljs.core.chunk_rest(s__45104__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45106),null);
}
} else {
var p = cljs.core.first(s__45104__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null),jasminegui$riskviews$single_portfolio_risk_controller_$_iter__45103(cljs.core.rest(s__45104__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.deref((function (){var G__45107 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45107) : re_frame.core.subscribe.call(null,G__45107));
})()));
})());
var display_style = (function (){var G__45108 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45108) : re_frame.core.subscribe.call(null,G__45108));
})();
var portfolio = (function (){var G__45109 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45109) : re_frame.core.subscribe.call(null,G__45109));
})();
var risk_filter = (function (){var G__45110 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45110) : re_frame.core.subscribe.call(null,G__45110));
})();
var hide_zero_risk = (function (){var G__45111 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45111) : re_frame.core.subscribe.call(null,G__45111));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Portfolio drill-down",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Display type:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),display_style,new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"Table",new cljs.core.Keyword(null,"label","label",1718410804),"Table"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"Tree",new cljs.core.Keyword(null,"label","label",1718410804),"Tree"], null)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (portfolio_map,display_style,portfolio,risk_filter,hide_zero_risk){
return (function (p1__45099_SHARP_){
var G__45112 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),p1__45099_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45112) : re_frame.core.dispatch.call(null,G__45112));
});})(portfolio_map,display_style,portfolio,risk_filter,hide_zero_risk))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"50px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Filtering:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),portfolio,new cljs.core.Keyword(null,"choices","choices",1385611597),portfolio_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (portfolio_map,display_style,portfolio,risk_filter,hide_zero_risk){
return (function (p1__45100_SHARP_){
var G__45113 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),p1__45100_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45113) : re_frame.core.dispatch.call(null,G__45113));
});})(portfolio_map,display_style,portfolio,risk_filter,hide_zero_risk))
], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = ((function (portfolio_map,display_style,portfolio,risk_filter,hide_zero_risk){
return (function jasminegui$riskviews$single_portfolio_risk_controller_$_iter__45114(s__45115){
return (new cljs.core.LazySeq(null,((function (portfolio_map,display_style,portfolio,risk_filter,hide_zero_risk){
return (function (){
var s__45115__$1 = s__45115;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45115__$1);
if(temp__5735__auto__){
var s__45115__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45115__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__45115__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__45117 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__45116 = (0);
while(true){
if((i__45116 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__45116);
cljs.core.chunk_append(b__45117,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),reagent.core.cursor(risk_filter,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null)),new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.risk_choice_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__45116,i,c__4521__auto__,size__4522__auto__,b__45117,s__45115__$2,temp__5735__auto__,portfolio_map,display_style,portfolio,risk_filter,hide_zero_risk){
return (function (p1__45101_SHARP_){
var G__45118 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),i,p1__45101_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45118) : re_frame.core.dispatch.call(null,G__45118));
});})(i__45116,i,c__4521__auto__,size__4522__auto__,b__45117,s__45115__$2,temp__5735__auto__,portfolio_map,display_style,portfolio,risk_filter,hide_zero_risk))
], null));

var G__45212 = (i__45116 + (1));
i__45116 = G__45212;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45117),jasminegui$riskviews$single_portfolio_risk_controller_$_iter__45114(cljs.core.chunk_rest(s__45115__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45117),null);
}
} else {
var i = cljs.core.first(s__45115__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),reagent.core.cursor(risk_filter,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null)),new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.risk_choice_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i,s__45115__$2,temp__5735__auto__,portfolio_map,display_style,portfolio,risk_filter,hide_zero_risk){
return (function (p1__45101_SHARP_){
var G__45119 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),i,p1__45101_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45119) : re_frame.core.dispatch.call(null,G__45119));
});})(i,s__45115__$2,temp__5735__auto__,portfolio_map,display_style,portfolio,risk_filter,hide_zero_risk))
], null),jasminegui$riskviews$single_portfolio_risk_controller_$_iter__45114(cljs.core.rest(s__45115__$2)));
}
} else {
return null;
}
break;
}
});})(portfolio_map,display_style,portfolio,risk_filter,hide_zero_risk))
,null,null));
});})(portfolio_map,display_style,portfolio,risk_filter,hide_zero_risk))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"50px"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,new cljs.core.Keyword(null,"model","model",331153215),hide_zero_risk,new cljs.core.Keyword(null,"label","label",1718410804),"Hide zero positions in table view",new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(display_style),"Tree"),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (portfolio_map,display_style,portfolio,risk_filter,hide_zero_risk){
return (function (p1__45102_SHARP_){
var G__45120 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),p1__45102_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45120) : re_frame.core.dispatch.call(null,G__45120));
});})(portfolio_map,display_style,portfolio,risk_filter,hide_zero_risk))
], null)], null)], 0)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.riskviews.single_portfolio_risk_display], null)], null)], null)], null);
});
jasminegui.riskviews.multiple_portfolio_risk_controller = (function jasminegui$riskviews$multiple_portfolio_risk_controller(){
var portfolio_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = (function jasminegui$riskviews$multiple_portfolio_risk_controller_$_iter__45126(s__45127){
return (new cljs.core.LazySeq(null,(function (){
var s__45127__$1 = s__45127;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45127__$1);
if(temp__5735__auto__){
var s__45127__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45127__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__45127__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__45129 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__45128 = (0);
while(true){
if((i__45128 < size__4522__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__45128);
cljs.core.chunk_append(b__45129,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null));

var G__45213 = (i__45128 + (1));
i__45128 = G__45213;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45129),jasminegui$riskviews$multiple_portfolio_risk_controller_$_iter__45126(cljs.core.chunk_rest(s__45127__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45129),null);
}
} else {
var p = cljs.core.first(s__45127__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null),jasminegui$riskviews$multiple_portfolio_risk_controller_$_iter__45126(cljs.core.rest(s__45127__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.deref((function (){var G__45130 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45130) : re_frame.core.subscribe.call(null,G__45130));
})()));
})());
var display_style = (function (){var G__45131 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45131) : re_frame.core.subscribe.call(null,G__45131));
})();
var risk_filter = (function (){var G__45132 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45132) : re_frame.core.subscribe.call(null,G__45132));
})();
var selected_portfolios = (function (){var G__45133 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45133) : re_frame.core.subscribe.call(null,G__45133));
})();
var number_of_fields = (function (){var G__45134 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45134) : re_frame.core.subscribe.call(null,G__45134));
})();
var field_one = (function (){var G__45135 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45135) : re_frame.core.subscribe.call(null,G__45135));
})();
var field_two = (function (){var G__45136 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45136) : re_frame.core.subscribe.call(null,G__45136));
})();
var hide_zero_risk = (function (){var G__45137 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45137) : re_frame.core.subscribe.call(null,G__45137));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Portfolio drill-down",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"15px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Display type:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Field:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),display_style,new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"Table",new cljs.core.Keyword(null,"label","label",1718410804),"Table"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"Tree",new cljs.core.Keyword(null,"label","label",1718410804),"Tree"], null)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (portfolio_map,display_style,risk_filter,selected_portfolios,number_of_fields,field_one,field_two,hide_zero_risk){
return (function (p1__45121_SHARP_){
var G__45138 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),p1__45121_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45138) : re_frame.core.dispatch.call(null,G__45138));
});})(portfolio_map,display_style,risk_filter,selected_portfolios,number_of_fields,field_one,field_two,hide_zero_risk))
], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),field_one,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.field_choices,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (portfolio_map,display_style,risk_filter,selected_portfolios,number_of_fields,field_one,field_two,hide_zero_risk){
return (function (p1__45122_SHARP_){
var G__45139 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),p1__45122_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45139) : re_frame.core.dispatch.call(null,G__45139));
});})(portfolio_map,display_style,risk_filter,selected_portfolios,number_of_fields,field_one,field_two,hide_zero_risk))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"50px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Filtering:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.selection_list,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"height","height",1025178622),"250px",new cljs.core.Keyword(null,"model","model",331153215),selected_portfolios,new cljs.core.Keyword(null,"choices","choices",1385611597),portfolio_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (portfolio_map,display_style,risk_filter,selected_portfolios,number_of_fields,field_one,field_two,hide_zero_risk){
return (function (p1__45123_SHARP_){
var G__45140 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),p1__45123_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45140) : re_frame.core.dispatch.call(null,G__45140));
});})(portfolio_map,display_style,risk_filter,selected_portfolios,number_of_fields,field_one,field_two,hide_zero_risk))
], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = ((function (portfolio_map,display_style,risk_filter,selected_portfolios,number_of_fields,field_one,field_two,hide_zero_risk){
return (function jasminegui$riskviews$multiple_portfolio_risk_controller_$_iter__45141(s__45142){
return (new cljs.core.LazySeq(null,((function (portfolio_map,display_style,risk_filter,selected_portfolios,number_of_fields,field_one,field_two,hide_zero_risk){
return (function (){
var s__45142__$1 = s__45142;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45142__$1);
if(temp__5735__auto__){
var s__45142__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45142__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__45142__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__45144 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__45143 = (0);
while(true){
if((i__45143 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__45143);
cljs.core.chunk_append(b__45144,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),reagent.core.cursor(risk_filter,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null)),new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.risk_choice_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__45143,i,c__4521__auto__,size__4522__auto__,b__45144,s__45142__$2,temp__5735__auto__,portfolio_map,display_style,risk_filter,selected_portfolios,number_of_fields,field_one,field_two,hide_zero_risk){
return (function (p1__45124_SHARP_){
var G__45145 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),i,p1__45124_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45145) : re_frame.core.dispatch.call(null,G__45145));
});})(i__45143,i,c__4521__auto__,size__4522__auto__,b__45144,s__45142__$2,temp__5735__auto__,portfolio_map,display_style,risk_filter,selected_portfolios,number_of_fields,field_one,field_two,hide_zero_risk))
], null));

var G__45214 = (i__45143 + (1));
i__45143 = G__45214;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45144),jasminegui$riskviews$multiple_portfolio_risk_controller_$_iter__45141(cljs.core.chunk_rest(s__45142__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45144),null);
}
} else {
var i = cljs.core.first(s__45142__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),reagent.core.cursor(risk_filter,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null)),new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.risk_choice_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i,s__45142__$2,temp__5735__auto__,portfolio_map,display_style,risk_filter,selected_portfolios,number_of_fields,field_one,field_two,hide_zero_risk){
return (function (p1__45124_SHARP_){
var G__45146 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),i,p1__45124_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45146) : re_frame.core.dispatch.call(null,G__45146));
});})(i,s__45142__$2,temp__5735__auto__,portfolio_map,display_style,risk_filter,selected_portfolios,number_of_fields,field_one,field_two,hide_zero_risk))
], null),jasminegui$riskviews$multiple_portfolio_risk_controller_$_iter__45141(cljs.core.rest(s__45142__$2)));
}
} else {
return null;
}
break;
}
});})(portfolio_map,display_style,risk_filter,selected_portfolios,number_of_fields,field_one,field_two,hide_zero_risk))
,null,null));
});})(portfolio_map,display_style,risk_filter,selected_portfolios,number_of_fields,field_one,field_two,hide_zero_risk))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"50px"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,new cljs.core.Keyword(null,"model","model",331153215),hide_zero_risk,new cljs.core.Keyword(null,"label","label",1718410804),"Hide zero positions in table view",new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(display_style),"Tree"),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (portfolio_map,display_style,risk_filter,selected_portfolios,number_of_fields,field_one,field_two,hide_zero_risk){
return (function (p1__45125_SHARP_){
var G__45147 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),p1__45125_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45147) : re_frame.core.dispatch.call(null,G__45147));
});})(portfolio_map,display_style,risk_filter,selected_portfolios,number_of_fields,field_one,field_two,hide_zero_risk))
], null)], null)], 0)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.riskviews.multiple_portfolio_risk_display], null)], null)], null)], null);
});
jasminegui.riskviews.portfolio_alignment_risk_controller = (function jasminegui$riskviews$portfolio_alignment_risk_controller(){
var display_style = (function (){var G__45153 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45153) : re_frame.core.subscribe.call(null,G__45153));
})();
var risk_filter = (function (){var G__45154 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45154) : re_frame.core.subscribe.call(null,G__45154));
})();
var portfolio_alignment_group = (function (){var G__45155 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45155) : re_frame.core.subscribe.call(null,G__45155));
})();
var field = (function (){var G__45156 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45156) : re_frame.core.subscribe.call(null,G__45156));
})();
var threshold = (function (){var G__45157 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45157) : re_frame.core.subscribe.call(null,G__45157));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Portfolio drill-down",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"15px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Display type:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Field:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Threshold:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),display_style,new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"Table",new cljs.core.Keyword(null,"label","label",1718410804),"Table"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"Tree",new cljs.core.Keyword(null,"label","label",1718410804),"Tree"], null)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (display_style,risk_filter,portfolio_alignment_group,field,threshold){
return (function (p1__45148_SHARP_){
var G__45158 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),p1__45148_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45158) : re_frame.core.dispatch.call(null,G__45158));
});})(display_style,risk_filter,portfolio_alignment_group,field,threshold))
], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),field,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.field_choices_alignment,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (display_style,risk_filter,portfolio_alignment_group,field,threshold){
return (function (p1__45149_SHARP_){
var G__45159 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),p1__45149_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45159) : re_frame.core.dispatch.call(null,G__45159));
});})(display_style,risk_filter,portfolio_alignment_group,field,threshold))
], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),threshold,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.threshold_choices_alignment,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (display_style,risk_filter,portfolio_alignment_group,field,threshold){
return (function (p1__45150_SHARP_){
var G__45160 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),p1__45150_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45160) : re_frame.core.dispatch.call(null,G__45160));
});})(display_style,risk_filter,portfolio_alignment_group,field,threshold))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"50px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Filtering:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),portfolio_alignment_group,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.portfolio_alignment_groups,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (display_style,risk_filter,portfolio_alignment_group,field,threshold){
return (function (p1__45151_SHARP_){
var G__45161 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),p1__45151_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45161) : re_frame.core.dispatch.call(null,G__45161));
});})(display_style,risk_filter,portfolio_alignment_group,field,threshold))
], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = ((function (display_style,risk_filter,portfolio_alignment_group,field,threshold){
return (function jasminegui$riskviews$portfolio_alignment_risk_controller_$_iter__45162(s__45163){
return (new cljs.core.LazySeq(null,((function (display_style,risk_filter,portfolio_alignment_group,field,threshold){
return (function (){
var s__45163__$1 = s__45163;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45163__$1);
if(temp__5735__auto__){
var s__45163__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45163__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__45163__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__45165 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__45164 = (0);
while(true){
if((i__45164 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__45164);
cljs.core.chunk_append(b__45165,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),reagent.core.cursor(risk_filter,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null)),new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.risk_choice_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__45164,i,c__4521__auto__,size__4522__auto__,b__45165,s__45163__$2,temp__5735__auto__,display_style,risk_filter,portfolio_alignment_group,field,threshold){
return (function (p1__45152_SHARP_){
var G__45166 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),i,p1__45152_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45166) : re_frame.core.dispatch.call(null,G__45166));
});})(i__45164,i,c__4521__auto__,size__4522__auto__,b__45165,s__45163__$2,temp__5735__auto__,display_style,risk_filter,portfolio_alignment_group,field,threshold))
], null));

var G__45215 = (i__45164 + (1));
i__45164 = G__45215;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45165),jasminegui$riskviews$portfolio_alignment_risk_controller_$_iter__45162(cljs.core.chunk_rest(s__45163__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45165),null);
}
} else {
var i = cljs.core.first(s__45163__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),reagent.core.cursor(risk_filter,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null)),new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.risk_choice_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i,s__45163__$2,temp__5735__auto__,display_style,risk_filter,portfolio_alignment_group,field,threshold){
return (function (p1__45152_SHARP_){
var G__45167 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),i,p1__45152_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45167) : re_frame.core.dispatch.call(null,G__45167));
});})(i,s__45163__$2,temp__5735__auto__,display_style,risk_filter,portfolio_alignment_group,field,threshold))
], null),jasminegui$riskviews$portfolio_alignment_risk_controller_$_iter__45162(cljs.core.rest(s__45163__$2)));
}
} else {
return null;
}
break;
}
});})(display_style,risk_filter,portfolio_alignment_group,field,threshold))
,null,null));
});})(display_style,risk_filter,portfolio_alignment_group,field,threshold))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})())))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.riskviews.multiple_portfolio_alignment_risk_display], null)], null)], null)], null);
});
jasminegui.riskviews.summary_display = (function jasminegui$riskviews$summary_display(){
var positions = cljs.core.deref((function (){var G__45169 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45169) : re_frame.core.subscribe.call(null,G__45169));
})());
var portfolios = cljs.core.deref((function (){var G__45170 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45170) : re_frame.core.subscribe.call(null,G__45170));
})());
var totals = cljs.core.deref((function (){var G__45171 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45171) : re_frame.core.subscribe.call(null,G__45171));
})());
var display = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = ((function (positions,portfolios,totals){
return (function jasminegui$riskviews$summary_display_$_iter__45172(s__45173){
return (new cljs.core.LazySeq(null,((function (positions,portfolios,totals){
return (function (){
var s__45173__$1 = s__45173;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45173__$1);
if(temp__5735__auto__){
var s__45173__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45173__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__45173__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__45175 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__45174 = (0);
while(true){
if((i__45174 < size__4522__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__45174);
cljs.core.chunk_append(b__45175,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"portfolio","portfolio",957568598),p], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = ((function (i__45174,p,c__4521__auto__,size__4522__auto__,b__45175,s__45173__$2,temp__5735__auto__,positions,portfolios,totals){
return (function jasminegui$riskviews$summary_display_$_iter__45172_$_iter__45176(s__45177){
return (new cljs.core.LazySeq(null,((function (i__45174,p,c__4521__auto__,size__4522__auto__,b__45175,s__45173__$2,temp__5735__auto__,positions,portfolios,totals){
return (function (){
var s__45177__$1 = s__45177;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__45177__$1);
if(temp__5735__auto____$1){
var s__45177__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45177__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__45177__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__45179 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__45178 = (0);
while(true){
if((i__45178 < size__4522__auto____$1)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__45178);
cljs.core.chunk_append(b__45179,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(totals,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null));

var G__45216 = (i__45178 + (1));
i__45178 = G__45216;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45179),jasminegui$riskviews$summary_display_$_iter__45172_$_iter__45176(cljs.core.chunk_rest(s__45177__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45179),null);
}
} else {
var k = cljs.core.first(s__45177__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(totals,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null),jasminegui$riskviews$summary_display_$_iter__45172_$_iter__45176(cljs.core.rest(s__45177__$2)));
}
} else {
return null;
}
break;
}
});})(i__45174,p,c__4521__auto__,size__4522__auto__,b__45175,s__45173__$2,temp__5735__auto__,positions,portfolios,totals))
,null,null));
});})(i__45174,p,c__4521__auto__,size__4522__auto__,b__45175,s__45173__$2,temp__5735__auto__,positions,portfolios,totals))
;
return iter__4523__auto__(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175),new cljs.core.Keyword(null,"base-value","base-value",921379228),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067),new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030),new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342)], null));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(totals,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861)], null)) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__45174,p,c__4521__auto__,size__4522__auto__,b__45175,s__45173__$2,temp__5735__auto__,positions,portfolios,totals){
return (function (p1__45168_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__45168_SHARP_),p)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jpm-region","jpm-region",-2074265852).cljs$core$IFn$_invoke$arity$1(p1__45168_SHARP_),"Cash")));
});})(i__45174,p,c__4521__auto__,size__4522__auto__,b__45175,s__45173__$2,temp__5735__auto__,positions,portfolios,totals))
,positions))))], null)], 0)));

var G__45217 = (i__45174 + (1));
i__45174 = G__45217;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45175),jasminegui$riskviews$summary_display_$_iter__45172(cljs.core.chunk_rest(s__45173__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45175),null);
}
} else {
var p = cljs.core.first(s__45173__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"portfolio","portfolio",957568598),p], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = ((function (p,s__45173__$2,temp__5735__auto__,positions,portfolios,totals){
return (function jasminegui$riskviews$summary_display_$_iter__45172_$_iter__45180(s__45181){
return (new cljs.core.LazySeq(null,((function (p,s__45173__$2,temp__5735__auto__,positions,portfolios,totals){
return (function (){
var s__45181__$1 = s__45181;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__45181__$1);
if(temp__5735__auto____$1){
var s__45181__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45181__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__45181__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__45183 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__45182 = (0);
while(true){
if((i__45182 < size__4522__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__45182);
cljs.core.chunk_append(b__45183,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(totals,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null));

var G__45218 = (i__45182 + (1));
i__45182 = G__45218;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45183),jasminegui$riskviews$summary_display_$_iter__45172_$_iter__45180(cljs.core.chunk_rest(s__45181__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45183),null);
}
} else {
var k = cljs.core.first(s__45181__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(totals,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null),jasminegui$riskviews$summary_display_$_iter__45172_$_iter__45180(cljs.core.rest(s__45181__$2)));
}
} else {
return null;
}
break;
}
});})(p,s__45173__$2,temp__5735__auto__,positions,portfolios,totals))
,null,null));
});})(p,s__45173__$2,temp__5735__auto__,positions,portfolios,totals))
;
return iter__4523__auto__(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175),new cljs.core.Keyword(null,"base-value","base-value",921379228),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067),new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030),new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342)], null));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(totals,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861)], null)) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (p,s__45173__$2,temp__5735__auto__,positions,portfolios,totals){
return (function (p1__45168_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__45168_SHARP_),p)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jpm-region","jpm-region",-2074265852).cljs$core$IFn$_invoke$arity$1(p1__45168_SHARP_),"Cash")));
});})(p,s__45173__$2,temp__5735__auto__,positions,portfolios,totals))
,positions))))], null)], 0)),jasminegui$riskviews$summary_display_$_iter__45172(cljs.core.rest(s__45173__$2)));
}
} else {
return null;
}
break;
}
});})(positions,portfolios,totals))
,null,null));
});})(positions,portfolios,totals))
;
return iter__4523__auto__(portfolios);
})());
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Summary",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data","data",-232669377),display,new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Portfolio",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"portfolio",new cljs.core.Keyword(null,"width","width",-384071477),(120)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Balance",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Value",new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45184 = new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861);
return (jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(G__45184) : jasminegui.riskviews.table_columns.call(null,G__45184));
})(),new cljs.core.Keyword(null,"Header","Header",1255420133),"Yield"),(function (){var G__45185 = new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737);
return (jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(G__45185) : jasminegui.riskviews.table_columns.call(null,G__45185));
})(),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45186 = new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105);
return (jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(G__45186) : jasminegui.riskviews.table_columns.call(null,G__45186));
})(),new cljs.core.Keyword(null,"Header","Header",1255420133),"M Dur"),(function (){var G__45187 = new cljs.core.Keyword(null,"rating","rating",144173662);
return (jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(G__45187) : jasminegui.riskviews.table_columns.call(null,G__45187));
})(),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45188 = new cljs.core.Keyword(null,"rating-score","rating-score",1260592885);
return (jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(G__45188) : jasminegui.riskviews.table_columns.call(null,G__45188));
})(),new cljs.core.Keyword(null,"width","width",-384071477),(60)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45189 = new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067);
return (jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(G__45189) : jasminegui.riskviews.table_columns.call(null,G__45189));
})(),new cljs.core.Keyword(null,"Header","Header",1255420133),"Z-spread"),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45190 = new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030);
return (jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(G__45190) : jasminegui.riskviews.table_columns.call(null,G__45190));
})(),new cljs.core.Keyword(null,"Header","Header",1255420133),"G-spread")], null)], null)], null),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),false,new cljs.core.Keyword(null,"pageSize","pageSize",732080883),cljs.core.count(portfolios),new cljs.core.Keyword(null,"className","className",-1983287057),"-striped -highlight"], null)], null)], null)], null)], null);
});

//# sourceMappingURL=jasminegui.riskviews.js.map
