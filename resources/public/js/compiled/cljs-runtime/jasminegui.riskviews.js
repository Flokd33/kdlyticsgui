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
var t = cljs.core.deref((function (){var G__45149 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45149) : re_frame.core.subscribe.call(null,G__45149));
})());
return ((function (){var G__45150 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(a);
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(G__45150) : t.call(null,G__45150));
})() <= (function (){var G__45151 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(b);
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(G__45151) : t.call(null,G__45151));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(((x < (0)))?"red":"black")], null)], null),(function (){var G__45152 = fmt;
var G__45153 = ((100) * x);
return goog.string.format(G__45152,G__45153);
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style], null),(function (){var G__45154 = "%.1f%";
var G__45155 = ((100) * x);
return goog.string.format(G__45154,G__45155);
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),c], null)], null),(function (){var G__45158 = "%.0f%";
var G__45159 = ((100) * v);
return goog.string.format(G__45158,G__45159);
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
return reagent.core.as_element([prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__45162 = "%.2f";
var G__45163 = (this$["value"]);
return goog.string.format(G__45162,G__45163);
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
var G__45164 = x;
switch (G__45164) {
case "Cash":
return "AAA";

break;
case "Collateral":
return "AAA";

break;
case "Forwards":
return "AAA";

break;
case "Equities":
return "AAA";

break;
default:
return x;

}
});
jasminegui.riskviews.add_total_line_to_pivot = (function jasminegui$riskviews$add_total_line_to_pivot(pivoted_table,portfolios){
var total_line = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"jpm-region","jpm-region",-2074265852),"Total",new cljs.core.Keyword(null,"qt-jpm-sector","qt-jpm-sector",1047055349),"Total",new cljs.core.Keyword(null,"qt-risk-country-name","qt-risk-country-name",1182905474),"Total",new cljs.core.Keyword(null,"TICKER","TICKER",-1215969144),"Total",new cljs.core.Keyword(null,"NAME","NAME",-1127916515),"Total",new cljs.core.Keyword(null,"description","description",-1428560544),"Total",new cljs.core.Keyword(null,"isin","isin",-1197420747),"Total"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function jasminegui$riskviews$add_total_line_to_pivot_$_iter__45165(s__45166){
return (new cljs.core.LazySeq(null,(function (){
var s__45166__$1 = s__45166;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45166__$1);
if(temp__5735__auto__){
var s__45166__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45166__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__45166__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__45168 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__45167 = (0);
while(true){
if((i__45167 < size__4522__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__45167);
cljs.core.chunk_append(b__45168,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),pivoted_table))], null));

var G__45340 = (i__45167 + (1));
i__45167 = G__45340;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45168),jasminegui$riskviews$add_total_line_to_pivot_$_iter__45165(cljs.core.chunk_rest(s__45166__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45168),null);
}
} else {
var p = cljs.core.first(s__45166__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),pivoted_table))], null),jasminegui$riskviews$add_total_line_to_pivot_$_iter__45165(cljs.core.rest(s__45166__$2)));
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
var positions = cljs.core.deref((function (){var G__45172 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45172) : re_frame.core.subscribe.call(null,G__45172));
})());
var portfolio = cljs.core.deref((function (){var G__45173 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45173) : re_frame.core.subscribe.call(null,G__45173));
})());
var portfolio_total_line = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var G__45176 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(portfolio);
var fexpr__45175 = cljs.core.deref((function (){var G__45177 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45177) : re_frame.core.subscribe.call(null,G__45177));
})());
return (fexpr__45175.cljs$core$IFn$_invoke$arity$1 ? fexpr__45175.cljs$core$IFn$_invoke$arity$1(G__45176) : fexpr__45175.call(null,G__45176));
})(),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),"Total",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),"00 Total"], 0));
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__45178 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45178) : re_frame.core.subscribe.call(null,G__45178));
})()),"Tree");
var portfolio_positions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (positions,portfolio,portfolio_total_line,is_tree){
return (function (p1__45169_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__45169_SHARP_),portfolio);
});})(positions,portfolio,portfolio_total_line,is_tree))
,positions);
var viewable_positions = (cljs.core.truth_((function (){var and__4120__auto__ = (!(is_tree));
if(and__4120__auto__){
return cljs.core.deref((function (){var G__45180 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45180) : re_frame.core.subscribe.call(null,G__45180));
})());
} else {
return and__4120__auto__;
}
})())?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (positions,portfolio,portfolio_total_line,is_tree,portfolio_positions){
return (function (p1__45170_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(p1__45170_SHARP_),(0));
});})(positions,portfolio,portfolio_total_line,is_tree,portfolio_positions))
,portfolio_positions):portfolio_positions);
var risk_filter = cljs.core.deref((function (){var G__45181 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45181) : re_frame.core.subscribe.call(null,G__45181));
})());
var risk_choice_1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((1)) : risk_filter.call(null,(1)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((1)) : risk_filter.call(null,(1))):null);
var risk_choice_2 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((2)) : risk_filter.call(null,(2)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((2)) : risk_filter.call(null,(2))):null);
var risk_choice_3 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((3)) : risk_filter.call(null,(3)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((3)) : risk_filter.call(null,(3))):null);
var additional_des_cols = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([risk_choice_3,"None",risk_choice_2,risk_choice_1]),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),jasminegui.static$.risk_choice_map));
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = ((function (positions,portfolio,portfolio_total_line,is_tree,portfolio_positions,viewable_positions,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,additional_des_cols){
return (function jasminegui$riskviews$single_portfolio_risk_display_$_iter__45182(s__45183){
return (new cljs.core.LazySeq(null,((function (positions,portfolio,portfolio_total_line,is_tree,portfolio_positions,viewable_positions,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,additional_des_cols){
return (function (){
var s__45183__$1 = s__45183;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45183__$1);
if(temp__5735__auto__){
var s__45183__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45183__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__45183__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__45185 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__45184 = (0);
while(true){
if((i__45184 < size__4522__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__45184);
cljs.core.chunk_append(b__45185,(jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.riskviews.table_columns.call(null,r)));

var G__45343 = (i__45184 + (1));
i__45184 = G__45343;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45185),jasminegui$riskviews$single_portfolio_risk_display_$_iter__45182(cljs.core.chunk_rest(s__45183__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45185),null);
}
} else {
var r = cljs.core.first(s__45183__$2);
return cljs.core.cons((jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.riskviews.table_columns.call(null,r)),jasminegui$riskviews$single_portfolio_risk_display_$_iter__45182(cljs.core.rest(s__45183__$2)));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"onFilteredChange","onFilteredChange",-69731355),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"filterable","filterable",-1588312341),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"pageSize","pageSize",732080883),new cljs.core.Keyword(null,"sortable","sortable",2109633621),new cljs.core.Keyword(null,"defaultFilterMethod","defaultFilterMethod",-641971243),new cljs.core.Keyword(null,"defaultFiltered","defaultFiltered",-1057218537),new cljs.core.Keyword(null,"pivotBy","pivotBy",782354495),new cljs.core.Keyword(null,"data","data",-232669377)],[((function (positions,portfolio,portfolio_total_line,is_tree,portfolio_positions,viewable_positions,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,additional_des_cols,grouping_columns,accessors,accessors_k,display){
return (function (p1__45171_SHARP_){
var G__45186 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),p1__45171_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45186) : re_frame.core.dispatch.call(null,G__45186));
});})(positions,portfolio,portfolio_total_line,is_tree,portfolio_positions,viewable_positions,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,additional_des_cols,grouping_columns,accessors,accessors_k,display))
,(!(is_tree)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Groups",new cljs.core.Keyword(null,"columns","columns",1998437288),grouping_columns], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"NAV",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"bm-weight","bm-weight",217267431),new cljs.core.Keyword(null,"weight-delta","weight-delta",-1239784638)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Duration",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"bm-contrib-eir-duration","bm-contrib-eir-duration",1013923984),new cljs.core.Keyword(null,"mdur-delta","mdur-delta",-395332953)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Yield",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"bm-contrib-yield","bm-contrib-yield",-1399804238)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Z-spread",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Position",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"nominal","nominal",413899877)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),((is_tree)?"Bond analytics (median)":"Bond analytics"),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"yield","yield",177875009),new cljs.core.Keyword(null,"z-spread","z-spread",-1184367967),new cljs.core.Keyword(null,"g-spread","g-spread",973847710),new cljs.core.Keyword(null,"duration","duration",1444101068)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Description",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rating","rating",144173662),new cljs.core.Keyword(null,"isin","isin",-1197420747)], null),additional_des_cols,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",-1428560544)], null)], 0))))], null)], null),(!(is_tree)),"-striped -highlight",((is_tree)?(cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first(accessors_k),portfolio_positions))) + (1)):(25)),(!(is_tree)),jasminegui.riskviews.case_insensitive_filter,((is_tree)?cljs.core.PersistentVector.EMPTY:cljs.core.deref((function (){var G__45187 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45187) : re_frame.core.subscribe.call(null,G__45187));
})())),((is_tree)?accessors:cljs.core.PersistentVector.EMPTY),display])], null);
});
jasminegui.riskviews.multiple_portfolio_risk_display = (function jasminegui$riskviews$multiple_portfolio_risk_display(){
var pivoted_positions = cljs.core.deref((function (){var G__45190 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45190) : re_frame.core.subscribe.call(null,G__45190));
})());
var selected_portfolios = cljs.core.deref((function (){var G__45191 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45191) : re_frame.core.subscribe.call(null,G__45191));
})());
var kselected_portfolios = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,selected_portfolios);
var portfolios = cljs.core.deref((function (){var G__45192 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45192) : re_frame.core.subscribe.call(null,G__45192));
})());
var hide_zero_risk = cljs.core.deref((function (){var G__45193 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45193) : re_frame.core.subscribe.call(null,G__45193));
})());
var number_of_fields = cljs.core.deref((function (){var G__45194 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45194) : re_frame.core.subscribe.call(null,G__45194));
})());
var display_key_one = cljs.core.deref((function (){var G__45195 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45195) : re_frame.core.subscribe.call(null,G__45195));
})());
var cell_one = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_one,new cljs.core.Keyword(null,"Cell","Cell",53644787)], null));
var display_key_two = cljs.core.deref((function (){var G__45196 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45196) : re_frame.core.subscribe.call(null,G__45196));
})());
var cell_two = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_two,new cljs.core.Keyword(null,"Cell","Cell",53644787)], null));
var width_one = (100);
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__45197 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45197) : re_frame.core.subscribe.call(null,G__45197));
})()),"Tree");
var risk_filter = cljs.core.deref((function (){var G__45198 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45198) : re_frame.core.subscribe.call(null,G__45198));
})());
var risk_choice_1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((1)) : risk_filter.call(null,(1)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((1)) : risk_filter.call(null,(1))):null);
var risk_choice_2 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((2)) : risk_filter.call(null,(2)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((2)) : risk_filter.call(null,(2))):null);
var risk_choice_3 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((3)) : risk_filter.call(null,(3)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((3)) : risk_filter.call(null,(3))):null);
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = ((function (pivoted_positions,selected_portfolios,kselected_portfolios,portfolios,hide_zero_risk,number_of_fields,display_key_one,cell_one,display_key_two,cell_two,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3){
return (function jasminegui$riskviews$multiple_portfolio_risk_display_$_iter__45199(s__45200){
return (new cljs.core.LazySeq(null,((function (pivoted_positions,selected_portfolios,kselected_portfolios,portfolios,hide_zero_risk,number_of_fields,display_key_one,cell_one,display_key_two,cell_two,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3){
return (function (){
var s__45200__$1 = s__45200;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45200__$1);
if(temp__5735__auto__){
var s__45200__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45200__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__45200__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__45202 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__45201 = (0);
while(true){
if((i__45201 < size__4522__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__45201);
cljs.core.chunk_append(b__45202,(jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.riskviews.table_columns.call(null,r)));

var G__45344 = (i__45201 + (1));
i__45201 = G__45344;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45202),jasminegui$riskviews$multiple_portfolio_risk_display_$_iter__45199(cljs.core.chunk_rest(s__45200__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45202),null);
}
} else {
var r = cljs.core.first(s__45200__$2);
return cljs.core.cons((jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.riskviews.table_columns.call(null,r)),jasminegui$riskviews$multiple_portfolio_risk_display_$_iter__45199(cljs.core.rest(s__45200__$2)));
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
return (function (p1__45188_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__45188_SHARP_,(function (){var fexpr__45203 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_one,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__45203.cljs$core$IFn$_invoke$arity$1 ? fexpr__45203.cljs$core$IFn$_invoke$arity$1(p1__45188_SHARP_) : fexpr__45203.call(null,p1__45188_SHARP_));
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
return (function (p1__45189_SHARP_){
var G__45204 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),p1__45189_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45204) : re_frame.core.dispatch.call(null,G__45204));
});})(pivoted_positions,selected_portfolios,kselected_portfolios,portfolios,hide_zero_risk,number_of_fields,display_key_one,cell_one,display_key_two,cell_two,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k,pivoted_data,thfil,pivoted_data_hide_zero,display_one))
,(!(is_tree)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(number_of_fields,"One"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Groups",new cljs.core.Keyword(null,"columns","columns",1998437288),grouping_columns], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),["Portfolio ",cljs.core.name(display_key_one)].join(''),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = ((function (pivoted_positions,selected_portfolios,kselected_portfolios,portfolios,hide_zero_risk,number_of_fields,display_key_one,cell_one,display_key_two,cell_two,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k,pivoted_data,thfil,pivoted_data_hide_zero,display_one){
return (function jasminegui$riskviews$multiple_portfolio_risk_display_$_iter__45205(s__45206){
return (new cljs.core.LazySeq(null,((function (pivoted_positions,selected_portfolios,kselected_portfolios,portfolios,hide_zero_risk,number_of_fields,display_key_one,cell_one,display_key_two,cell_two,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k,pivoted_data,thfil,pivoted_data_hide_zero,display_one){
return (function (){
var s__45206__$1 = s__45206;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45206__$1);
if(temp__5735__auto__){
var s__45206__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45206__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__45206__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__45208 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__45207 = (0);
while(true){
if((i__45207 < size__4522__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__45207);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([p]),selected_portfolios))){
cljs.core.chunk_append(b__45208,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),p,new cljs.core.Keyword(null,"accessor","accessor",-25476721),p,new cljs.core.Keyword(null,"width","width",-384071477),width_one,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),cell_one,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null));

var G__45345 = (i__45207 + (1));
i__45207 = G__45345;
continue;
} else {
var G__45346 = (i__45207 + (1));
i__45207 = G__45346;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45208),jasminegui$riskviews$multiple_portfolio_risk_display_$_iter__45205(cljs.core.chunk_rest(s__45206__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45208),null);
}
} else {
var p = cljs.core.first(s__45206__$2);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([p]),selected_portfolios))){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),p,new cljs.core.Keyword(null,"accessor","accessor",-25476721),p,new cljs.core.Keyword(null,"width","width",-384071477),width_one,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),cell_one,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),jasminegui$riskviews$multiple_portfolio_risk_display_$_iter__45205(cljs.core.rest(s__45206__$2)));
} else {
var G__45347 = cljs.core.rest(s__45206__$2);
s__45206__$1 = G__45347;
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
})())], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Description",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rating","rating",144173662),new cljs.core.Keyword(null,"isin","isin",-1197420747),new cljs.core.Keyword(null,"description","description",-1428560544)], null))], null)], null):null),(!(is_tree)),"-striped -highlight",((is_tree)?(cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first(accessors_k),display_one))) + (1)):(25)),(!(is_tree)),jasminegui.riskviews.case_insensitive_filter,((is_tree)?cljs.core.PersistentVector.EMPTY:cljs.core.deref((function (){var G__45209 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45209) : re_frame.core.subscribe.call(null,G__45209));
})())),((is_tree)?accessors:cljs.core.PersistentVector.EMPTY),display_one])], null);
});
jasminegui.riskviews.multiple_portfolio_alignment_risk_display = (function jasminegui$riskviews$multiple_portfolio_alignment_risk_display(){
var group = new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__45210_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__45210_SHARP_),cljs.core.deref((function (){var G__45213 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45213) : re_frame.core.subscribe.call(null,G__45213));
})()));
}),jasminegui.static$.portfolio_alignment_groups)));
var pivoted_positions = cljs.core.deref((function (){var G__45214 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45214) : re_frame.core.subscribe.call(null,G__45214));
})());
var base_portfolio = cljs.core.first(group);
var portfolios = cljs.core.rest(group);
var kportfolios = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,portfolios);
var display_key = cljs.core.deref((function (){var G__45215 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45215) : re_frame.core.subscribe.call(null,G__45215));
})());
var cell_one = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key,new cljs.core.Keyword(null,"Cell","Cell",53644787)], null));
var width_one = (100);
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__45216 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45216) : re_frame.core.subscribe.call(null,G__45216));
})()),"Tree");
var risk_filter = cljs.core.deref((function (){var G__45217 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45217) : re_frame.core.subscribe.call(null,G__45217));
})());
var risk_choice_1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((1)) : risk_filter.call(null,(1)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((1)) : risk_filter.call(null,(1))):null);
var risk_choice_2 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((2)) : risk_filter.call(null,(2)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((2)) : risk_filter.call(null,(2))):null);
var risk_choice_3 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((3)) : risk_filter.call(null,(3)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((3)) : risk_filter.call(null,(3))):null);
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = ((function (group,pivoted_positions,base_portfolio,portfolios,kportfolios,display_key,cell_one,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3){
return (function jasminegui$riskviews$multiple_portfolio_alignment_risk_display_$_iter__45218(s__45219){
return (new cljs.core.LazySeq(null,((function (group,pivoted_positions,base_portfolio,portfolios,kportfolios,display_key,cell_one,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3){
return (function (){
var s__45219__$1 = s__45219;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45219__$1);
if(temp__5735__auto__){
var s__45219__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45219__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__45219__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__45221 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__45220 = (0);
while(true){
if((i__45220 < size__4522__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__45220);
cljs.core.chunk_append(b__45221,(jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.riskviews.table_columns.call(null,r)));

var G__45348 = (i__45220 + (1));
i__45220 = G__45348;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45221),jasminegui$riskviews$multiple_portfolio_alignment_risk_display_$_iter__45218(cljs.core.chunk_rest(s__45219__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45221),null);
}
} else {
var r = cljs.core.first(s__45219__$2);
return cljs.core.cons((jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.riskviews.table_columns.call(null,r)),jasminegui$riskviews$multiple_portfolio_alignment_risk_display_$_iter__45218(cljs.core.rest(s__45219__$2)));
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
return (function (p1__45211_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__45211_SHARP_,(function (){var fexpr__45222 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__45222.cljs$core$IFn$_invoke$arity$1 ? fexpr__45222.cljs$core$IFn$_invoke$arity$1(p1__45211_SHARP_) : fexpr__45222.call(null,p1__45211_SHARP_));
})()], 0));
});})(group,pivoted_positions,base_portfolio,portfolios,kportfolios,display_key,cell_one,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k))
,pivoted_positions);
var differentiate = ((function (group,pivoted_positions,base_portfolio,portfolios,kportfolios,display_key,cell_one,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k,pivoted_data){
return (function (line){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (group,pivoted_positions,base_portfolio,portfolios,kportfolios,display_key,cell_one,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k,pivoted_data){
return (function (temp_line,p){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(temp_line,p,((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(temp_line) : p.call(null,temp_line)) - (function (){var fexpr__45223 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(base_portfolio);
return (fexpr__45223.cljs$core$IFn$_invoke$arity$1 ? fexpr__45223.cljs$core$IFn$_invoke$arity$1(temp_line) : fexpr__45223.call(null,temp_line));
})()));
});})(group,pivoted_positions,base_portfolio,portfolios,kportfolios,display_key,cell_one,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k,pivoted_data))
,line,kportfolios);
});})(group,pivoted_positions,base_portfolio,portfolios,kportfolios,display_key,cell_one,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k,pivoted_data))
;
var pivoted_data_diff = cljs.core.map.cljs$core$IFn$_invoke$arity$2(differentiate,pivoted_data);
var threshold = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (group,pivoted_positions,base_portfolio,portfolios,kportfolios,display_key,cell_one,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k,pivoted_data,differentiate,pivoted_data_diff){
return (function (p1__45212_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__45212_SHARP_),cljs.core.deref((function (){var G__45224 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45224) : re_frame.core.subscribe.call(null,G__45224));
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
return (function jasminegui$riskviews$multiple_portfolio_alignment_risk_display_$_iter__45225(s__45226){
return (new cljs.core.LazySeq(null,((function (group,pivoted_positions,base_portfolio,portfolios,kportfolios,display_key,cell_one,width_one,is_tree,risk_filter,risk_choice_1,risk_choice_2,risk_choice_3,grouping_columns,accessors,accessors_k,pivoted_data,differentiate,pivoted_data_diff,threshold,thfil,pivoted_data_diff_post_th,display){
return (function (){
var s__45226__$1 = s__45226;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45226__$1);
if(temp__5735__auto__){
var s__45226__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45226__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__45226__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__45228 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__45227 = (0);
while(true){
if((i__45227 < size__4522__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__45227);
cljs.core.chunk_append(b__45228,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),p,new cljs.core.Keyword(null,"accessor","accessor",-25476721),p,new cljs.core.Keyword(null,"width","width",-384071477),width_one,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),cell_one,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null));

var G__45349 = (i__45227 + (1));
i__45227 = G__45349;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45228),jasminegui$riskviews$multiple_portfolio_alignment_risk_display_$_iter__45225(cljs.core.chunk_rest(s__45226__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45228),null);
}
} else {
var p = cljs.core.first(s__45226__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),p,new cljs.core.Keyword(null,"accessor","accessor",-25476721),p,new cljs.core.Keyword(null,"width","width",-384071477),width_one,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),cell_one,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),jasminegui$riskviews$multiple_portfolio_alignment_risk_display_$_iter__45225(cljs.core.rest(s__45226__$2)));
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
})())], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Description",new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"thinkFolio ID",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"description",new cljs.core.Keyword(null,"width","width",-384071477),(500)], null),(function (){var G__45229 = new cljs.core.Keyword(null,"rating","rating",144173662);
return (jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(G__45229) : jasminegui.riskviews.table_columns.call(null,G__45229));
})()], null)], null)], null),(!(is_tree)),"-striped -highlight",((is_tree)?(cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first(accessors_k),display))) + (1)):(25)),(!(is_tree)),jasminegui.riskviews.case_insensitive_filter,((is_tree)?accessors:cljs.core.PersistentVector.EMPTY),display])], null);
});
jasminegui.riskviews.single_portfolio_risk_controller = (function jasminegui$riskviews$single_portfolio_risk_controller(){
var portfolio_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = (function jasminegui$riskviews$single_portfolio_risk_controller_$_iter__45234(s__45235){
return (new cljs.core.LazySeq(null,(function (){
var s__45235__$1 = s__45235;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45235__$1);
if(temp__5735__auto__){
var s__45235__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45235__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__45235__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__45237 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__45236 = (0);
while(true){
if((i__45236 < size__4522__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__45236);
cljs.core.chunk_append(b__45237,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null));

var G__45350 = (i__45236 + (1));
i__45236 = G__45350;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45237),jasminegui$riskviews$single_portfolio_risk_controller_$_iter__45234(cljs.core.chunk_rest(s__45235__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45237),null);
}
} else {
var p = cljs.core.first(s__45235__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null),jasminegui$riskviews$single_portfolio_risk_controller_$_iter__45234(cljs.core.rest(s__45235__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.deref((function (){var G__45238 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45238) : re_frame.core.subscribe.call(null,G__45238));
})()));
})());
var display_style = (function (){var G__45239 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45239) : re_frame.core.subscribe.call(null,G__45239));
})();
var portfolio = (function (){var G__45240 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45240) : re_frame.core.subscribe.call(null,G__45240));
})();
var risk_filter = (function (){var G__45241 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45241) : re_frame.core.subscribe.call(null,G__45241));
})();
var hide_zero_risk = (function (){var G__45242 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45242) : re_frame.core.subscribe.call(null,G__45242));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),["Portfolio drill-down ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__45244 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45244) : re_frame.core.subscribe.call(null,G__45244));
})()))].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Display type:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),display_style,new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"Table",new cljs.core.Keyword(null,"label","label",1718410804),"Table"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"Tree",new cljs.core.Keyword(null,"label","label",1718410804),"Tree"], null)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (portfolio_map,display_style,portfolio,risk_filter,hide_zero_risk){
return (function (p1__45230_SHARP_){
var G__45245 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),p1__45230_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45245) : re_frame.core.dispatch.call(null,G__45245));
});})(portfolio_map,display_style,portfolio,risk_filter,hide_zero_risk))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"50px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Filtering:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),portfolio,new cljs.core.Keyword(null,"choices","choices",1385611597),portfolio_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (portfolio_map,display_style,portfolio,risk_filter,hide_zero_risk){
return (function (p1__45231_SHARP_){
var G__45246 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),p1__45231_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45246) : re_frame.core.dispatch.call(null,G__45246));
});})(portfolio_map,display_style,portfolio,risk_filter,hide_zero_risk))
], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = ((function (portfolio_map,display_style,portfolio,risk_filter,hide_zero_risk){
return (function jasminegui$riskviews$single_portfolio_risk_controller_$_iter__45247(s__45248){
return (new cljs.core.LazySeq(null,((function (portfolio_map,display_style,portfolio,risk_filter,hide_zero_risk){
return (function (){
var s__45248__$1 = s__45248;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45248__$1);
if(temp__5735__auto__){
var s__45248__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45248__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__45248__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__45250 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__45249 = (0);
while(true){
if((i__45249 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__45249);
cljs.core.chunk_append(b__45250,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),reagent.core.cursor(risk_filter,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null)),new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.risk_choice_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__45249,i,c__4521__auto__,size__4522__auto__,b__45250,s__45248__$2,temp__5735__auto__,portfolio_map,display_style,portfolio,risk_filter,hide_zero_risk){
return (function (p1__45232_SHARP_){
var G__45251 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),i,p1__45232_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45251) : re_frame.core.dispatch.call(null,G__45251));
});})(i__45249,i,c__4521__auto__,size__4522__auto__,b__45250,s__45248__$2,temp__5735__auto__,portfolio_map,display_style,portfolio,risk_filter,hide_zero_risk))
], null));

var G__45351 = (i__45249 + (1));
i__45249 = G__45351;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45250),jasminegui$riskviews$single_portfolio_risk_controller_$_iter__45247(cljs.core.chunk_rest(s__45248__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45250),null);
}
} else {
var i = cljs.core.first(s__45248__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),reagent.core.cursor(risk_filter,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null)),new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.risk_choice_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i,s__45248__$2,temp__5735__auto__,portfolio_map,display_style,portfolio,risk_filter,hide_zero_risk){
return (function (p1__45232_SHARP_){
var G__45252 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),i,p1__45232_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45252) : re_frame.core.dispatch.call(null,G__45252));
});})(i,s__45248__$2,temp__5735__auto__,portfolio_map,display_style,portfolio,risk_filter,hide_zero_risk))
], null),jasminegui$riskviews$single_portfolio_risk_controller_$_iter__45247(cljs.core.rest(s__45248__$2)));
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
return (function (p1__45233_SHARP_){
var G__45253 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),p1__45233_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45253) : re_frame.core.dispatch.call(null,G__45253));
});})(portfolio_map,display_style,portfolio,risk_filter,hide_zero_risk))
], null)], null)], 0)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.riskviews.single_portfolio_risk_display], null)], null)], null)], null);
});
jasminegui.riskviews.multiple_portfolio_risk_controller = (function jasminegui$riskviews$multiple_portfolio_risk_controller(){
var portfolio_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = (function jasminegui$riskviews$multiple_portfolio_risk_controller_$_iter__45259(s__45260){
return (new cljs.core.LazySeq(null,(function (){
var s__45260__$1 = s__45260;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45260__$1);
if(temp__5735__auto__){
var s__45260__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45260__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__45260__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__45262 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__45261 = (0);
while(true){
if((i__45261 < size__4522__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__45261);
cljs.core.chunk_append(b__45262,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null));

var G__45352 = (i__45261 + (1));
i__45261 = G__45352;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45262),jasminegui$riskviews$multiple_portfolio_risk_controller_$_iter__45259(cljs.core.chunk_rest(s__45260__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45262),null);
}
} else {
var p = cljs.core.first(s__45260__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null),jasminegui$riskviews$multiple_portfolio_risk_controller_$_iter__45259(cljs.core.rest(s__45260__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.deref((function (){var G__45263 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45263) : re_frame.core.subscribe.call(null,G__45263));
})()));
})());
var display_style = (function (){var G__45264 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45264) : re_frame.core.subscribe.call(null,G__45264));
})();
var risk_filter = (function (){var G__45265 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45265) : re_frame.core.subscribe.call(null,G__45265));
})();
var selected_portfolios = (function (){var G__45266 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45266) : re_frame.core.subscribe.call(null,G__45266));
})();
var number_of_fields = (function (){var G__45267 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45267) : re_frame.core.subscribe.call(null,G__45267));
})();
var field_one = (function (){var G__45268 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45268) : re_frame.core.subscribe.call(null,G__45268));
})();
var field_two = (function (){var G__45269 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45269) : re_frame.core.subscribe.call(null,G__45269));
})();
var hide_zero_risk = (function (){var G__45270 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45270) : re_frame.core.subscribe.call(null,G__45270));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),["Portfolio drill-down ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__45272 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45272) : re_frame.core.subscribe.call(null,G__45272));
})()))].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"15px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Display type:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Field:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),display_style,new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"Table",new cljs.core.Keyword(null,"label","label",1718410804),"Table"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"Tree",new cljs.core.Keyword(null,"label","label",1718410804),"Tree"], null)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (portfolio_map,display_style,risk_filter,selected_portfolios,number_of_fields,field_one,field_two,hide_zero_risk){
return (function (p1__45254_SHARP_){
var G__45273 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),p1__45254_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45273) : re_frame.core.dispatch.call(null,G__45273));
});})(portfolio_map,display_style,risk_filter,selected_portfolios,number_of_fields,field_one,field_two,hide_zero_risk))
], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),field_one,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.field_choices,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (portfolio_map,display_style,risk_filter,selected_portfolios,number_of_fields,field_one,field_two,hide_zero_risk){
return (function (p1__45255_SHARP_){
var G__45274 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),p1__45255_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45274) : re_frame.core.dispatch.call(null,G__45274));
});})(portfolio_map,display_style,risk_filter,selected_portfolios,number_of_fields,field_one,field_two,hide_zero_risk))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"50px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Filtering:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.selection_list,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"height","height",1025178622),"250px",new cljs.core.Keyword(null,"model","model",331153215),selected_portfolios,new cljs.core.Keyword(null,"choices","choices",1385611597),portfolio_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (portfolio_map,display_style,risk_filter,selected_portfolios,number_of_fields,field_one,field_two,hide_zero_risk){
return (function (p1__45256_SHARP_){
var G__45275 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),p1__45256_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45275) : re_frame.core.dispatch.call(null,G__45275));
});})(portfolio_map,display_style,risk_filter,selected_portfolios,number_of_fields,field_one,field_two,hide_zero_risk))
], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = ((function (portfolio_map,display_style,risk_filter,selected_portfolios,number_of_fields,field_one,field_two,hide_zero_risk){
return (function jasminegui$riskviews$multiple_portfolio_risk_controller_$_iter__45276(s__45277){
return (new cljs.core.LazySeq(null,((function (portfolio_map,display_style,risk_filter,selected_portfolios,number_of_fields,field_one,field_two,hide_zero_risk){
return (function (){
var s__45277__$1 = s__45277;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45277__$1);
if(temp__5735__auto__){
var s__45277__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45277__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__45277__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__45279 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__45278 = (0);
while(true){
if((i__45278 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__45278);
cljs.core.chunk_append(b__45279,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),reagent.core.cursor(risk_filter,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null)),new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.risk_choice_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__45278,i,c__4521__auto__,size__4522__auto__,b__45279,s__45277__$2,temp__5735__auto__,portfolio_map,display_style,risk_filter,selected_portfolios,number_of_fields,field_one,field_two,hide_zero_risk){
return (function (p1__45257_SHARP_){
var G__45280 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),i,p1__45257_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45280) : re_frame.core.dispatch.call(null,G__45280));
});})(i__45278,i,c__4521__auto__,size__4522__auto__,b__45279,s__45277__$2,temp__5735__auto__,portfolio_map,display_style,risk_filter,selected_portfolios,number_of_fields,field_one,field_two,hide_zero_risk))
], null));

var G__45353 = (i__45278 + (1));
i__45278 = G__45353;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45279),jasminegui$riskviews$multiple_portfolio_risk_controller_$_iter__45276(cljs.core.chunk_rest(s__45277__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45279),null);
}
} else {
var i = cljs.core.first(s__45277__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),reagent.core.cursor(risk_filter,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null)),new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.risk_choice_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i,s__45277__$2,temp__5735__auto__,portfolio_map,display_style,risk_filter,selected_portfolios,number_of_fields,field_one,field_two,hide_zero_risk){
return (function (p1__45257_SHARP_){
var G__45281 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),i,p1__45257_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45281) : re_frame.core.dispatch.call(null,G__45281));
});})(i,s__45277__$2,temp__5735__auto__,portfolio_map,display_style,risk_filter,selected_portfolios,number_of_fields,field_one,field_two,hide_zero_risk))
], null),jasminegui$riskviews$multiple_portfolio_risk_controller_$_iter__45276(cljs.core.rest(s__45277__$2)));
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
return (function (p1__45258_SHARP_){
var G__45282 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),p1__45258_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45282) : re_frame.core.dispatch.call(null,G__45282));
});})(portfolio_map,display_style,risk_filter,selected_portfolios,number_of_fields,field_one,field_two,hide_zero_risk))
], null)], null)], 0)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.riskviews.multiple_portfolio_risk_display], null)], null)], null)], null);
});
jasminegui.riskviews.portfolio_alignment_risk_controller = (function jasminegui$riskviews$portfolio_alignment_risk_controller(){
var display_style = (function (){var G__45288 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45288) : re_frame.core.subscribe.call(null,G__45288));
})();
var risk_filter = (function (){var G__45289 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45289) : re_frame.core.subscribe.call(null,G__45289));
})();
var portfolio_alignment_group = (function (){var G__45290 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45290) : re_frame.core.subscribe.call(null,G__45290));
})();
var field = (function (){var G__45291 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45291) : re_frame.core.subscribe.call(null,G__45291));
})();
var threshold = (function (){var G__45292 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45292) : re_frame.core.subscribe.call(null,G__45292));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),["Portfolio drill-down ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__45294 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45294) : re_frame.core.subscribe.call(null,G__45294));
})()))].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"15px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Display type:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Field:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Threshold:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),display_style,new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"Table",new cljs.core.Keyword(null,"label","label",1718410804),"Table"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"Tree",new cljs.core.Keyword(null,"label","label",1718410804),"Tree"], null)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (display_style,risk_filter,portfolio_alignment_group,field,threshold){
return (function (p1__45283_SHARP_){
var G__45295 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),p1__45283_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45295) : re_frame.core.dispatch.call(null,G__45295));
});})(display_style,risk_filter,portfolio_alignment_group,field,threshold))
], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),field,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.field_choices_alignment,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (display_style,risk_filter,portfolio_alignment_group,field,threshold){
return (function (p1__45284_SHARP_){
var G__45296 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),p1__45284_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45296) : re_frame.core.dispatch.call(null,G__45296));
});})(display_style,risk_filter,portfolio_alignment_group,field,threshold))
], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),threshold,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.threshold_choices_alignment,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (display_style,risk_filter,portfolio_alignment_group,field,threshold){
return (function (p1__45285_SHARP_){
var G__45297 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),p1__45285_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45297) : re_frame.core.dispatch.call(null,G__45297));
});})(display_style,risk_filter,portfolio_alignment_group,field,threshold))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"50px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Filtering:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),portfolio_alignment_group,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.portfolio_alignment_groups,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (display_style,risk_filter,portfolio_alignment_group,field,threshold){
return (function (p1__45286_SHARP_){
var G__45298 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),p1__45286_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45298) : re_frame.core.dispatch.call(null,G__45298));
});})(display_style,risk_filter,portfolio_alignment_group,field,threshold))
], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = ((function (display_style,risk_filter,portfolio_alignment_group,field,threshold){
return (function jasminegui$riskviews$portfolio_alignment_risk_controller_$_iter__45299(s__45300){
return (new cljs.core.LazySeq(null,((function (display_style,risk_filter,portfolio_alignment_group,field,threshold){
return (function (){
var s__45300__$1 = s__45300;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45300__$1);
if(temp__5735__auto__){
var s__45300__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45300__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__45300__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__45302 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__45301 = (0);
while(true){
if((i__45301 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__45301);
cljs.core.chunk_append(b__45302,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),reagent.core.cursor(risk_filter,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null)),new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.risk_choice_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__45301,i,c__4521__auto__,size__4522__auto__,b__45302,s__45300__$2,temp__5735__auto__,display_style,risk_filter,portfolio_alignment_group,field,threshold){
return (function (p1__45287_SHARP_){
var G__45303 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),i,p1__45287_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45303) : re_frame.core.dispatch.call(null,G__45303));
});})(i__45301,i,c__4521__auto__,size__4522__auto__,b__45302,s__45300__$2,temp__5735__auto__,display_style,risk_filter,portfolio_alignment_group,field,threshold))
], null));

var G__45354 = (i__45301 + (1));
i__45301 = G__45354;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45302),jasminegui$riskviews$portfolio_alignment_risk_controller_$_iter__45299(cljs.core.chunk_rest(s__45300__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45302),null);
}
} else {
var i = cljs.core.first(s__45300__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),reagent.core.cursor(risk_filter,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null)),new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.risk_choice_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i,s__45300__$2,temp__5735__auto__,display_style,risk_filter,portfolio_alignment_group,field,threshold){
return (function (p1__45287_SHARP_){
var G__45304 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),i,p1__45287_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45304) : re_frame.core.dispatch.call(null,G__45304));
});})(i,s__45300__$2,temp__5735__auto__,display_style,risk_filter,portfolio_alignment_group,field,threshold))
], null),jasminegui$riskviews$portfolio_alignment_risk_controller_$_iter__45299(cljs.core.rest(s__45300__$2)));
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
var positions = cljs.core.deref((function (){var G__45306 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45306) : re_frame.core.subscribe.call(null,G__45306));
})());
var portfolios = cljs.core.deref((function (){var G__45307 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45307) : re_frame.core.subscribe.call(null,G__45307));
})());
var totals = cljs.core.deref((function (){var G__45308 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45308) : re_frame.core.subscribe.call(null,G__45308));
})());
var display = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = ((function (positions,portfolios,totals){
return (function jasminegui$riskviews$summary_display_$_iter__45309(s__45310){
return (new cljs.core.LazySeq(null,((function (positions,portfolios,totals){
return (function (){
var s__45310__$1 = s__45310;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45310__$1);
if(temp__5735__auto__){
var s__45310__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45310__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__45310__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__45312 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__45311 = (0);
while(true){
if((i__45311 < size__4522__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__45311);
cljs.core.chunk_append(b__45312,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"portfolio","portfolio",957568598),p], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = ((function (i__45311,p,c__4521__auto__,size__4522__auto__,b__45312,s__45310__$2,temp__5735__auto__,positions,portfolios,totals){
return (function jasminegui$riskviews$summary_display_$_iter__45309_$_iter__45313(s__45314){
return (new cljs.core.LazySeq(null,((function (i__45311,p,c__4521__auto__,size__4522__auto__,b__45312,s__45310__$2,temp__5735__auto__,positions,portfolios,totals){
return (function (){
var s__45314__$1 = s__45314;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__45314__$1);
if(temp__5735__auto____$1){
var s__45314__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45314__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__45314__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__45316 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__45315 = (0);
while(true){
if((i__45315 < size__4522__auto____$1)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__45315);
cljs.core.chunk_append(b__45316,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(totals,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null));

var G__45355 = (i__45315 + (1));
i__45315 = G__45355;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45316),jasminegui$riskviews$summary_display_$_iter__45309_$_iter__45313(cljs.core.chunk_rest(s__45314__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45316),null);
}
} else {
var k = cljs.core.first(s__45314__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(totals,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null),jasminegui$riskviews$summary_display_$_iter__45309_$_iter__45313(cljs.core.rest(s__45314__$2)));
}
} else {
return null;
}
break;
}
});})(i__45311,p,c__4521__auto__,size__4522__auto__,b__45312,s__45310__$2,temp__5735__auto__,positions,portfolios,totals))
,null,null));
});})(i__45311,p,c__4521__auto__,size__4522__auto__,b__45312,s__45310__$2,temp__5735__auto__,positions,portfolios,totals))
;
return iter__4523__auto__(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175),new cljs.core.Keyword(null,"base-value","base-value",921379228),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067),new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030),new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342)], null));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(totals,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861)], null)) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__45311,p,c__4521__auto__,size__4522__auto__,b__45312,s__45310__$2,temp__5735__auto__,positions,portfolios,totals){
return (function (p1__45305_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__45305_SHARP_),p)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jpm-region","jpm-region",-2074265852).cljs$core$IFn$_invoke$arity$1(p1__45305_SHARP_),"Cash")));
});})(i__45311,p,c__4521__auto__,size__4522__auto__,b__45312,s__45310__$2,temp__5735__auto__,positions,portfolios,totals))
,positions))))], null)], 0)));

var G__45356 = (i__45311 + (1));
i__45311 = G__45356;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45312),jasminegui$riskviews$summary_display_$_iter__45309(cljs.core.chunk_rest(s__45310__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45312),null);
}
} else {
var p = cljs.core.first(s__45310__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"portfolio","portfolio",957568598),p], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = ((function (p,s__45310__$2,temp__5735__auto__,positions,portfolios,totals){
return (function jasminegui$riskviews$summary_display_$_iter__45309_$_iter__45317(s__45318){
return (new cljs.core.LazySeq(null,((function (p,s__45310__$2,temp__5735__auto__,positions,portfolios,totals){
return (function (){
var s__45318__$1 = s__45318;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__45318__$1);
if(temp__5735__auto____$1){
var s__45318__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45318__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__45318__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__45320 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__45319 = (0);
while(true){
if((i__45319 < size__4522__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__45319);
cljs.core.chunk_append(b__45320,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(totals,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null));

var G__45357 = (i__45319 + (1));
i__45319 = G__45357;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45320),jasminegui$riskviews$summary_display_$_iter__45309_$_iter__45317(cljs.core.chunk_rest(s__45318__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45320),null);
}
} else {
var k = cljs.core.first(s__45318__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(totals,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null),jasminegui$riskviews$summary_display_$_iter__45309_$_iter__45317(cljs.core.rest(s__45318__$2)));
}
} else {
return null;
}
break;
}
});})(p,s__45310__$2,temp__5735__auto__,positions,portfolios,totals))
,null,null));
});})(p,s__45310__$2,temp__5735__auto__,positions,portfolios,totals))
;
return iter__4523__auto__(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175),new cljs.core.Keyword(null,"base-value","base-value",921379228),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067),new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030),new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342)], null));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(totals,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861)], null)) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (p,s__45310__$2,temp__5735__auto__,positions,portfolios,totals){
return (function (p1__45305_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__45305_SHARP_),p)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jpm-region","jpm-region",-2074265852).cljs$core$IFn$_invoke$arity$1(p1__45305_SHARP_),"Cash")));
});})(p,s__45310__$2,temp__5735__auto__,positions,portfolios,totals))
,positions))))], null)], 0)),jasminegui$riskviews$summary_display_$_iter__45309(cljs.core.rest(s__45310__$2)));
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
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),["Summary ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__45322 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45322) : re_frame.core.subscribe.call(null,G__45322));
})()))].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data","data",-232669377),display,new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Portfolio",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"portfolio",new cljs.core.Keyword(null,"width","width",-384071477),(120)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Balance",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Value",new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45323 = new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861);
return (jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(G__45323) : jasminegui.riskviews.table_columns.call(null,G__45323));
})(),new cljs.core.Keyword(null,"Header","Header",1255420133),"Yield"),(function (){var G__45324 = new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737);
return (jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(G__45324) : jasminegui.riskviews.table_columns.call(null,G__45324));
})(),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45325 = new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105);
return (jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(G__45325) : jasminegui.riskviews.table_columns.call(null,G__45325));
})(),new cljs.core.Keyword(null,"Header","Header",1255420133),"M Dur"),(function (){var G__45326 = new cljs.core.Keyword(null,"rating","rating",144173662);
return (jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(G__45326) : jasminegui.riskviews.table_columns.call(null,G__45326));
})(),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45327 = new cljs.core.Keyword(null,"rating-score","rating-score",1260592885);
return (jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(G__45327) : jasminegui.riskviews.table_columns.call(null,G__45327));
})(),new cljs.core.Keyword(null,"width","width",-384071477),(60)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45328 = new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067);
return (jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(G__45328) : jasminegui.riskviews.table_columns.call(null,G__45328));
})(),new cljs.core.Keyword(null,"Header","Header",1255420133),"Z-spread"),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45329 = new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030);
return (jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(G__45329) : jasminegui.riskviews.table_columns.call(null,G__45329));
})(),new cljs.core.Keyword(null,"Header","Header",1255420133),"G-spread")], null)], null)], null),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),false,new cljs.core.Keyword(null,"pageSize","pageSize",732080883),cljs.core.count(portfolios),new cljs.core.Keyword(null,"className","className",-1983287057),"-striped -highlight"], null)], null)], null)], null)], null);
});

//# sourceMappingURL=jasminegui.riskviews.js.map
