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
var t = cljs.core.deref((function (){var G__64108 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64108) : re_frame.core.subscribe.call(null,G__64108));
})());
return ((function (){var G__64109 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(a);
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(G__64109) : t.call(null,G__64109));
})() <= (function (){var G__64110 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(b);
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(G__64110) : t.call(null,G__64110));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(((x < (0)))?"red":"black")], null)], null),(function (){var G__64111 = fmt;
var G__64112 = ((100) * x);
return goog.string.format(G__64111,G__64112);
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style], null),(function (){var G__64113 = "%.1f%";
var G__64114 = ((100) * x);
return goog.string.format(G__64113,G__64114);
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
var colorize = (function jasminegui$riskviews$round0pc_trigger_$_colorize(c,v){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),c], null)], null),(function (){var G__64117 = "%.0f%";
var G__64118 = ((100) * v);
return goog.string.format(G__64117,G__64118);
})()], null);
});
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
return reagent.core.as_element([prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__64121 = "%.2f";
var G__64122 = (this$["value"]);
return goog.string.format(G__64121,G__64122);
})())].join(''));
} else {
return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null));
}
});
jasminegui.riskviews.compare_nb = (function jasminegui$riskviews$compare_nb(filterfn,row){

var input = (filterfn["value"]);
var rowval = (row[(filterfn["id"])]);
var G__64123 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(input,(0),(1));
switch (G__64123) {
case ">":
return (rowval > cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(input,(1))));

break;
case "<":
return (rowval < cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(input,(1))));

break;
default:
return (rowval > cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(input));

}
});
jasminegui.riskviews.rating_score_to_string = (function jasminegui$riskviews$rating_score_to_string(this$){
return (this$["row"]["qt-iam-int-lt-median-rating"]);
});
jasminegui.riskviews.table_columns = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"yield","yield",177875009),new cljs.core.Keyword(null,"z-spread","z-spread",-1184367967),new cljs.core.Keyword(null,"weight-delta","weight-delta",-1239784638),new cljs.core.Keyword(null,"nominal","nominal",413899877),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067),new cljs.core.Keyword(null,"bm-weight","bm-weight",217267431),new cljs.core.Keyword(null,"mdur-delta","mdur-delta",-395332953),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sector","sector",-1444247062),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175),new cljs.core.Keyword(null,"bm-contrib-eir-duration","bm-contrib-eir-duration",1013923984),new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030),new cljs.core.Keyword(null,"bm-contrib-yield","bm-contrib-yield",-1399804238),new cljs.core.Keyword(null,"id-show","id-show",1455582548),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"rating-score","rating-score",1260592885),new cljs.core.Keyword(null,"isin","isin",-1197420747),new cljs.core.Keyword(null,"issuer","issuer",-1199257898),new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737),new cljs.core.Keyword(null,"country","country",312965309),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"g-spread","g-spread",973847710),new cljs.core.Keyword(null,"rating","rating",144173662)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"thinkFolio ID",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"description",new cljs.core.Keyword(null,"width","width",-384071477),(500)], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Yield",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"qt-yield",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.median,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.round2pc,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),true,new cljs.core.Keyword(null,"filterMethod","filterMethod",-1560228661),jasminegui.riskviews.compare_nb], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Z-spread",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"qt-libor-spread",new cljs.core.Keyword(null,"width","width",-384071477),(80),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.median,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.nfcell,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),true,new cljs.core.Keyword(null,"filterMethod","filterMethod",-1560228661),jasminegui.riskviews.compare_nb], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Delta",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"weight-delta",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.round2,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),true,new cljs.core.Keyword(null,"filterMethod","filterMethod",-1560228661),jasminegui.riskviews.compare_nb], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Nominal",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"original-quantity",new cljs.core.Keyword(null,"width","width",-384071477),(120),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.nfcell,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),true,new cljs.core.Keyword(null,"filterMethod","filterMethod",-1560228661),jasminegui.riskviews.compare_nb], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Fund",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"contrib-yield",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.round2pc,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Fund",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"contrib-zspread",new cljs.core.Keyword(null,"width","width",-384071477),(80),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.round1,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Index",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"bm-weight",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.round2,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),true,new cljs.core.Keyword(null,"filterMethod","filterMethod",-1560228661),jasminegui.riskviews.compare_nb], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Delta",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"mdur-delta",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.round2,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Name",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"NAME",new cljs.core.Keyword(null,"width","width",-384071477),(140)], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Value",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"base-value",new cljs.core.Keyword(null,"width","width",-384071477),(120),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.nfcell,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),true,new cljs.core.Keyword(null,"filterMethod","filterMethod",-1560228661),jasminegui.riskviews.compare_nb], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Sector",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"qt-jpm-sector",new cljs.core.Keyword(null,"width","width",-384071477),(140)], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"Header","Header",1255420133),"M dur",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"qt-modified-duration",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.median,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.round2,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),true,new cljs.core.Keyword(null,"filterMethod","filterMethod",-1560228661),jasminegui.riskviews.compare_nb], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Cash",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"cash-pct",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.yield_format,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Index",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"bm-contrib-eir-duration",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.round2,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Region",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"jpm-region",new cljs.core.Keyword(null,"width","width",-384071477),(140)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Fund",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"contrib-mdur",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.round2,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),"G-spread",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"contrib-gspread",new cljs.core.Keyword(null,"width","width",-384071477),(80),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.round1,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Index",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"bm-contrib-yield",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.round2pc,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"ID",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"id",new cljs.core.Keyword(null,"width","width",-384071477),(75)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"ID",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"id",new cljs.core.Keyword(null,"show","show",-576705889),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Rating",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"qt-iam-int-lt-median-rating-score",new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.rating_score_to_string,new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),cljs.core.first], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"ISIN",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"isin",new cljs.core.Keyword(null,"width","width",-384071477),(125)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Issuer",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"TICKER",new cljs.core.Keyword(null,"width","width",-384071477),(140)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Bond yield",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"contrib-bond-yield",new cljs.core.Keyword(null,"width","width",-384071477),(80),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.round2pc,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Country",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"qt-risk-country-name",new cljs.core.Keyword(null,"width","width",-384071477),(140)], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Fund",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"weight",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.round2,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),true,new cljs.core.Keyword(null,"filterMethod","filterMethod",-1560228661),jasminegui.riskviews.compare_nb], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"Header","Header",1255420133),"G-spread",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"qt-govt-spread",new cljs.core.Keyword(null,"width","width",-384071477),(80),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.median,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.riskviews.nfcell,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),true,new cljs.core.Keyword(null,"filterMethod","filterMethod",-1560228661),jasminegui.riskviews.compare_nb], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Rating",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"qt-iam-int-lt-median-rating",new cljs.core.Keyword(null,"show","show",-576705889),false], null)]);
jasminegui.riskviews.first_level_sort = (function jasminegui$riskviews$first_level_sort(x){
var G__64124 = x;
switch (G__64124) {
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
var total_line = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"jpm-region","jpm-region",-2074265852),"Total",new cljs.core.Keyword(null,"qt-jpm-sector","qt-jpm-sector",1047055349),"Total",new cljs.core.Keyword(null,"qt-risk-country-name","qt-risk-country-name",1182905474),"Total",new cljs.core.Keyword(null,"TICKER","TICKER",-1215969144),"Total",new cljs.core.Keyword(null,"NAME","NAME",-1127916515),"Total",new cljs.core.Keyword(null,"description","description",-1428560544),"Total",new cljs.core.Keyword(null,"isin","isin",-1197420747),"Total",new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),"Total"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$riskviews$add_total_line_to_pivot_$_iter__64125(s__64126){
return (new cljs.core.LazySeq(null,(function (){
var s__64126__$1 = s__64126;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__64126__$1);
if(temp__5735__auto__){
var s__64126__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64126__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__64126__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__64128 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__64127 = (0);
while(true){
if((i__64127 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__64127);
cljs.core.chunk_append(b__64128,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),pivoted_table))], null));

var G__64308 = (i__64127 + (1));
i__64127 = G__64308;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64128),jasminegui$riskviews$add_total_line_to_pivot_$_iter__64125(cljs.core.chunk_rest(s__64126__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64128),null);
}
} else {
var p = cljs.core.first(s__64126__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),pivoted_table))], null),jasminegui$riskviews$add_total_line_to_pivot_$_iter__64125(cljs.core.rest(s__64126__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(portfolios);
})())], 0));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pivoted_table,total_line);
});
jasminegui.riskviews.dropdown_width = "150px";
jasminegui.riskviews.single_portfolio_risk_display = (function jasminegui$riskviews$single_portfolio_risk_display(){
var positions = cljs.core.deref((function (){var G__64132 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64132) : re_frame.core.subscribe.call(null,G__64132));
})());
var portfolio = cljs.core.deref((function (){var G__64133 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64133) : re_frame.core.subscribe.call(null,G__64133));
})());
var portfolio_total_line = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var G__64136 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(portfolio);
var fexpr__64135 = cljs.core.deref((function (){var G__64137 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64137) : re_frame.core.subscribe.call(null,G__64137));
})());
return (fexpr__64135.cljs$core$IFn$_invoke$arity$1 ? fexpr__64135.cljs$core$IFn$_invoke$arity$1(G__64136) : fexpr__64135.call(null,G__64136));
})(),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),"Total",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),"00 Total"], 0));
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__64138 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64138) : re_frame.core.subscribe.call(null,G__64138));
})()),"Tree");
var portfolio_positions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__64129_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__64129_SHARP_),portfolio);
}),positions);
var viewable_positions = (cljs.core.truth_((((!(is_tree)))?cljs.core.deref((function (){var G__64140 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64140) : re_frame.core.subscribe.call(null,G__64140));
})()):false))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__64130_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(p1__64130_SHARP_),(0));
}),portfolio_positions):portfolio_positions);
var risk_filter = cljs.core.deref((function (){var G__64141 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64141) : re_frame.core.subscribe.call(null,G__64141));
})());
var risk_choice_1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((1)) : risk_filter.call(null,(1)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((1)) : risk_filter.call(null,(1))):null);
var risk_choice_2 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((2)) : risk_filter.call(null,(2)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((2)) : risk_filter.call(null,(2))):null);
var risk_choice_3 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((3)) : risk_filter.call(null,(3)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((3)) : risk_filter.call(null,(3))):null);
var additional_des_cols = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([risk_choice_3,"None",risk_choice_2,risk_choice_1]),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),jasminegui.static$.risk_choice_map));
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$riskviews$single_portfolio_risk_display_$_iter__64142(s__64143){
return (new cljs.core.LazySeq(null,(function (){
var s__64143__$1 = s__64143;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__64143__$1);
if(temp__5735__auto__){
var s__64143__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64143__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__64143__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__64145 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__64144 = (0);
while(true){
if((i__64144 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__64144);
cljs.core.chunk_append(b__64145,(jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.riskviews.table_columns.call(null,r)));

var G__64311 = (i__64144 + (1));
i__64144 = G__64311;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64145),jasminegui$riskviews$single_portfolio_risk_display_$_iter__64142(cljs.core.chunk_rest(s__64143__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64145),null);
}
} else {
var r = cljs.core.first(s__64143__$2);
return cljs.core.cons((jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.riskviews.table_columns.call(null,r)),jasminegui$riskviews$single_portfolio_risk_display_$_iter__64142(cljs.core.rest(s__64143__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [risk_choice_1,risk_choice_2,risk_choice_3,new cljs.core.Keyword(null,"name","name",1843675177)], null)));
})());
var accessors = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accessor","accessor",-25476721),grouping_columns);
var accessors_k = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,accessors);
var display = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),viewable_positions),portfolio_total_line);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"onFilteredChange","onFilteredChange",-69731355),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"filterable","filterable",-1588312341),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"pageSize","pageSize",732080883),new cljs.core.Keyword(null,"sortable","sortable",2109633621),new cljs.core.Keyword(null,"defaultFilterMethod","defaultFilterMethod",-641971243),new cljs.core.Keyword(null,"defaultFiltered","defaultFiltered",-1057218537),new cljs.core.Keyword(null,"pivotBy","pivotBy",782354495),new cljs.core.Keyword(null,"data","data",-232669377)],[(function (p1__64131_SHARP_){
var G__64146 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),p1__64131_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64146) : re_frame.core.dispatch.call(null,G__64146));
}),(!(is_tree)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Groups",new cljs.core.Keyword(null,"columns","columns",1998437288),grouping_columns], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"NAV",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"bm-weight","bm-weight",217267431),new cljs.core.Keyword(null,"weight-delta","weight-delta",-1239784638)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Duration",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"bm-contrib-eir-duration","bm-contrib-eir-duration",1013923984),new cljs.core.Keyword(null,"mdur-delta","mdur-delta",-395332953)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Yield",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"bm-contrib-yield","bm-contrib-yield",-1399804238)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Z-spread",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Position",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"nominal","nominal",413899877)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),((is_tree)?"Bond analytics (median)":"Bond analytics"),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"yield","yield",177875009),new cljs.core.Keyword(null,"z-spread","z-spread",-1184367967),new cljs.core.Keyword(null,"g-spread","g-spread",973847710),new cljs.core.Keyword(null,"duration","duration",1444101068)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Description",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rating","rating",144173662),new cljs.core.Keyword(null,"isin","isin",-1197420747)], null),additional_des_cols,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",-1428560544)], null)], 0))))], null)], null),(!(is_tree)),"-striped -highlight",((is_tree)?(cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first(accessors_k),portfolio_positions))) + (1)):(25)),(!(is_tree)),jasminegui.riskviews.case_insensitive_filter,((is_tree)?cljs.core.PersistentVector.EMPTY:cljs.core.deref((function (){var G__64147 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64147) : re_frame.core.subscribe.call(null,G__64147));
})())),((is_tree)?accessors:cljs.core.PersistentVector.EMPTY),display])], null);
});
jasminegui.riskviews.multiple_portfolio_risk_display = (function jasminegui$riskviews$multiple_portfolio_risk_display(){
var pivoted_positions = cljs.core.deref((function (){var G__64150 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64150) : re_frame.core.subscribe.call(null,G__64150));
})());
var selected_portfolios = cljs.core.deref((function (){var G__64151 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64151) : re_frame.core.subscribe.call(null,G__64151));
})());
var kselected_portfolios = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,selected_portfolios);
var portfolios = cljs.core.deref((function (){var G__64152 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64152) : re_frame.core.subscribe.call(null,G__64152));
})());
var hide_zero_risk = cljs.core.deref((function (){var G__64153 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64153) : re_frame.core.subscribe.call(null,G__64153));
})());
var number_of_fields = cljs.core.deref((function (){var G__64154 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64154) : re_frame.core.subscribe.call(null,G__64154));
})());
var display_key_one = cljs.core.deref((function (){var G__64155 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64155) : re_frame.core.subscribe.call(null,G__64155));
})());
var cell_one = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_one,new cljs.core.Keyword(null,"Cell","Cell",53644787)], null));
var display_key_two = cljs.core.deref((function (){var G__64156 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64156) : re_frame.core.subscribe.call(null,G__64156));
})());
var cell_two = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_two,new cljs.core.Keyword(null,"Cell","Cell",53644787)], null));
var width_one = (100);
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__64157 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64157) : re_frame.core.subscribe.call(null,G__64157));
})()),"Tree");
var risk_filter = cljs.core.deref((function (){var G__64158 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64158) : re_frame.core.subscribe.call(null,G__64158));
})());
var risk_choice_1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((1)) : risk_filter.call(null,(1)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((1)) : risk_filter.call(null,(1))):null);
var risk_choice_2 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((2)) : risk_filter.call(null,(2)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((2)) : risk_filter.call(null,(2))):null);
var risk_choice_3 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((3)) : risk_filter.call(null,(3)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((3)) : risk_filter.call(null,(3))):null);
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$riskviews$multiple_portfolio_risk_display_$_iter__64159(s__64160){
return (new cljs.core.LazySeq(null,(function (){
var s__64160__$1 = s__64160;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__64160__$1);
if(temp__5735__auto__){
var s__64160__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64160__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__64160__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__64162 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__64161 = (0);
while(true){
if((i__64161 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__64161);
cljs.core.chunk_append(b__64162,(jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.riskviews.table_columns.call(null,r)));

var G__64312 = (i__64161 + (1));
i__64161 = G__64312;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64162),jasminegui$riskviews$multiple_portfolio_risk_display_$_iter__64159(cljs.core.chunk_rest(s__64160__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64162),null);
}
} else {
var r = cljs.core.first(s__64160__$2);
return cljs.core.cons((jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.riskviews.table_columns.call(null,r)),jasminegui$riskviews$multiple_portfolio_risk_display_$_iter__64159(cljs.core.rest(s__64160__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [risk_choice_1,risk_choice_2,risk_choice_3,new cljs.core.Keyword(null,"name","name",1843675177)], null)));
})());
var accessors = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accessor","accessor",-25476721),grouping_columns);
var accessors_k = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,accessors);
var pivoted_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64148_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__64148_SHARP_,(function (){var fexpr__64163 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_one,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__64163.cljs$core$IFn$_invoke$arity$1 ? fexpr__64163.cljs$core$IFn$_invoke$arity$1(p1__64148_SHARP_) : fexpr__64163.call(null,p1__64148_SHARP_));
})()], 0));
}),pivoted_positions);
var thfil = (function (line){
return (!(cljs.core.every_QMARK_(cljs.core.zero_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(line,kselected_portfolios))));
});
var pivoted_data_hide_zero = (cljs.core.truth_((((!(is_tree)))?hide_zero_risk:false))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(thfil,pivoted_data):pivoted_data);
var display_one = jasminegui.riskviews.add_total_line_to_pivot(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),pivoted_data_hide_zero),portfolios);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"onFilteredChange","onFilteredChange",-69731355),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"filterable","filterable",-1588312341),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"pageSize","pageSize",732080883),new cljs.core.Keyword(null,"sortable","sortable",2109633621),new cljs.core.Keyword(null,"defaultFilterMethod","defaultFilterMethod",-641971243),new cljs.core.Keyword(null,"defaultFiltered","defaultFiltered",-1057218537),new cljs.core.Keyword(null,"pivotBy","pivotBy",782354495),new cljs.core.Keyword(null,"data","data",-232669377)],[(function (p1__64149_SHARP_){
var G__64164 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),p1__64149_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64164) : re_frame.core.dispatch.call(null,G__64164));
}),(!(is_tree)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(number_of_fields,"One"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Groups",new cljs.core.Keyword(null,"columns","columns",1998437288),grouping_columns], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),["Portfolio ",cljs.core.name(display_key_one)].join(''),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$riskviews$multiple_portfolio_risk_display_$_iter__64165(s__64166){
return (new cljs.core.LazySeq(null,(function (){
var s__64166__$1 = s__64166;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__64166__$1);
if(temp__5735__auto__){
var s__64166__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64166__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__64166__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__64168 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__64167 = (0);
while(true){
if((i__64167 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__64167);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([p]),selected_portfolios))){
cljs.core.chunk_append(b__64168,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),p,new cljs.core.Keyword(null,"accessor","accessor",-25476721),p,new cljs.core.Keyword(null,"width","width",-384071477),width_one,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),cell_one,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null));

var G__64313 = (i__64167 + (1));
i__64167 = G__64313;
continue;
} else {
var G__64314 = (i__64167 + (1));
i__64167 = G__64314;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64168),jasminegui$riskviews$multiple_portfolio_risk_display_$_iter__64165(cljs.core.chunk_rest(s__64166__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64168),null);
}
} else {
var p = cljs.core.first(s__64166__$2);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([p]),selected_portfolios))){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),p,new cljs.core.Keyword(null,"accessor","accessor",-25476721),p,new cljs.core.Keyword(null,"width","width",-384071477),width_one,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),cell_one,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),jasminegui$riskviews$multiple_portfolio_risk_display_$_iter__64165(cljs.core.rest(s__64166__$2)));
} else {
var G__64315 = cljs.core.rest(s__64166__$2);
s__64166__$1 = G__64315;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(portfolios);
})())], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Description",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rating","rating",144173662),new cljs.core.Keyword(null,"isin","isin",-1197420747),new cljs.core.Keyword(null,"description","description",-1428560544)], null))], null)], null):null),(!(is_tree)),"-striped -highlight",((is_tree)?(cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first(accessors_k),display_one))) + (1)):(25)),(!(is_tree)),jasminegui.riskviews.case_insensitive_filter,((is_tree)?cljs.core.PersistentVector.EMPTY:cljs.core.deref((function (){var G__64169 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64169) : re_frame.core.subscribe.call(null,G__64169));
})())),((is_tree)?accessors:cljs.core.PersistentVector.EMPTY),display_one])], null);
});
jasminegui.riskviews.multiple_portfolio_alignment_risk_display = (function jasminegui$riskviews$multiple_portfolio_alignment_risk_display(){
var group = new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__64170_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__64170_SHARP_),cljs.core.deref((function (){var G__64173 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64173) : re_frame.core.subscribe.call(null,G__64173));
})()));
}),jasminegui.static$.portfolio_alignment_groups)));
var pivoted_positions = cljs.core.deref((function (){var G__64174 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64174) : re_frame.core.subscribe.call(null,G__64174));
})());
var base_portfolio = cljs.core.first(group);
var portfolios = cljs.core.rest(group);
var kportfolios = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,portfolios);
var display_key = cljs.core.deref((function (){var G__64175 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64175) : re_frame.core.subscribe.call(null,G__64175));
})());
var cell_one = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key,new cljs.core.Keyword(null,"Cell","Cell",53644787)], null));
var width_one = (100);
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__64176 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64176) : re_frame.core.subscribe.call(null,G__64176));
})()),"Tree");
var risk_filter = cljs.core.deref((function (){var G__64177 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64177) : re_frame.core.subscribe.call(null,G__64177));
})());
var risk_choice_1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((1)) : risk_filter.call(null,(1)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((1)) : risk_filter.call(null,(1))):null);
var risk_choice_2 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((2)) : risk_filter.call(null,(2)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((2)) : risk_filter.call(null,(2))):null);
var risk_choice_3 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((3)) : risk_filter.call(null,(3)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((3)) : risk_filter.call(null,(3))):null);
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$riskviews$multiple_portfolio_alignment_risk_display_$_iter__64178(s__64179){
return (new cljs.core.LazySeq(null,(function (){
var s__64179__$1 = s__64179;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__64179__$1);
if(temp__5735__auto__){
var s__64179__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64179__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__64179__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__64181 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__64180 = (0);
while(true){
if((i__64180 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__64180);
cljs.core.chunk_append(b__64181,(jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.riskviews.table_columns.call(null,r)));

var G__64316 = (i__64180 + (1));
i__64180 = G__64316;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64181),jasminegui$riskviews$multiple_portfolio_alignment_risk_display_$_iter__64178(cljs.core.chunk_rest(s__64179__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64181),null);
}
} else {
var r = cljs.core.first(s__64179__$2);
return cljs.core.cons((jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.riskviews.table_columns.call(null,r)),jasminegui$riskviews$multiple_portfolio_alignment_risk_display_$_iter__64178(cljs.core.rest(s__64179__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [risk_choice_1,risk_choice_2,risk_choice_3,new cljs.core.Keyword(null,"name","name",1843675177)], null)));
})());
var accessors = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accessor","accessor",-25476721),grouping_columns);
var accessors_k = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,accessors);
var pivoted_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64171_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__64171_SHARP_,(function (){var fexpr__64182 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__64182.cljs$core$IFn$_invoke$arity$1 ? fexpr__64182.cljs$core$IFn$_invoke$arity$1(p1__64171_SHARP_) : fexpr__64182.call(null,p1__64171_SHARP_));
})()], 0));
}),pivoted_positions);
var differentiate = (function (line){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (temp_line,p){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(temp_line,p,((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(temp_line) : p.call(null,temp_line)) - (function (){var fexpr__64183 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(base_portfolio);
return (fexpr__64183.cljs$core$IFn$_invoke$arity$1 ? fexpr__64183.cljs$core$IFn$_invoke$arity$1(temp_line) : fexpr__64183.call(null,temp_line));
})()));
}),line,kportfolios);
});
var pivoted_data_diff = cljs.core.map.cljs$core$IFn$_invoke$arity$2(differentiate,pivoted_data);
var threshold = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__64172_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__64172_SHARP_),cljs.core.deref((function (){var G__64184 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64184) : re_frame.core.subscribe.call(null,G__64184));
})()));
}),jasminegui.static$.threshold_choices_alignment))));
var thfil = (function (line){
return cljs.core.some((function (x){
return (((x < (- threshold))) || ((x > threshold)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(line,kportfolios));
});
var pivoted_data_diff_post_th = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(thfil,pivoted_data_diff);
var display = jasminegui.riskviews.add_total_line_to_pivot(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),pivoted_data_diff_post_th),portfolios);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kportfolios], 0));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"filterable","filterable",-1588312341),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"pageSize","pageSize",732080883),new cljs.core.Keyword(null,"sortable","sortable",2109633621),new cljs.core.Keyword(null,"defaultFilterMethod","defaultFilterMethod",-641971243),new cljs.core.Keyword(null,"pivotBy","pivotBy",782354495),new cljs.core.Keyword(null,"data","data",-232669377)],[(!(is_tree)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Groups",new cljs.core.Keyword(null,"columns","columns",1998437288),grouping_columns], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),["Portfolio ",cljs.core.name(display_key)," vs ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_portfolio)].join(''),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$riskviews$multiple_portfolio_alignment_risk_display_$_iter__64185(s__64186){
return (new cljs.core.LazySeq(null,(function (){
var s__64186__$1 = s__64186;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__64186__$1);
if(temp__5735__auto__){
var s__64186__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64186__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__64186__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__64188 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__64187 = (0);
while(true){
if((i__64187 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__64187);
cljs.core.chunk_append(b__64188,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),p,new cljs.core.Keyword(null,"accessor","accessor",-25476721),p,new cljs.core.Keyword(null,"width","width",-384071477),width_one,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),cell_one,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null));

var G__64317 = (i__64187 + (1));
i__64187 = G__64317;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64188),jasminegui$riskviews$multiple_portfolio_alignment_risk_display_$_iter__64185(cljs.core.chunk_rest(s__64186__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64188),null);
}
} else {
var p = cljs.core.first(s__64186__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),p,new cljs.core.Keyword(null,"accessor","accessor",-25476721),p,new cljs.core.Keyword(null,"width","width",-384071477),width_one,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),cell_one,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),jasminegui$riskviews$multiple_portfolio_alignment_risk_display_$_iter__64185(cljs.core.rest(s__64186__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(portfolios);
})())], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Description",new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"thinkFolio ID",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"description",new cljs.core.Keyword(null,"width","width",-384071477),(500)], null),(function (){var G__64189 = new cljs.core.Keyword(null,"rating","rating",144173662);
return (jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(G__64189) : jasminegui.riskviews.table_columns.call(null,G__64189));
})()], null)], null)], null),(!(is_tree)),"-striped -highlight",((is_tree)?(cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first(accessors_k),display))) + (1)):(25)),(!(is_tree)),jasminegui.riskviews.case_insensitive_filter,((is_tree)?accessors:cljs.core.PersistentVector.EMPTY),display])], null);
});
jasminegui.riskviews.shortcut_row = (function jasminegui$riskviews$shortcut_row(key){
var shortcut = (function (){var G__64190 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64190) : re_frame.core.subscribe.call(null,G__64190));
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Shortcuts:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$riskviews$shortcut_row_$_iter__64191(s__64192){
return (new cljs.core.LazySeq(null,(function (){
var s__64192__$1 = s__64192;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__64192__$1);
if(temp__5735__auto__){
var s__64192__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64192__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__64192__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__64194 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__64193 = (0);
while(true){
if((i__64193 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__64193);
cljs.core.chunk_append(b__64194,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),["zmdi-collection-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shortcut),i))?"active":"default"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__64193,i,c__4527__auto__,size__4528__auto__,b__64194,s__64192__$2,temp__5735__auto__,shortcut){
return (function (){
var G__64195 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,i], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64195) : re_frame.core.dispatch.call(null,G__64195));
});})(i__64193,i,c__4527__auto__,size__4528__auto__,b__64194,s__64192__$2,temp__5735__auto__,shortcut))
], null));

var G__64318 = (i__64193 + (1));
i__64193 = G__64318;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64194),jasminegui$riskviews$shortcut_row_$_iter__64191(cljs.core.chunk_rest(s__64192__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64194),null);
}
} else {
var i = cljs.core.first(s__64192__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),["zmdi-collection-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shortcut),i))?"active":"default"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i,s__64192__$2,temp__5735__auto__,shortcut){
return (function (){
var G__64196 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,i], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64196) : re_frame.core.dispatch.call(null,G__64196));
});})(i,s__64192__$2,temp__5735__auto__,shortcut))
], null),jasminegui$riskviews$shortcut_row_$_iter__64191(cljs.core.rest(s__64192__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(5)));
})())));
});
jasminegui.riskviews.filtering_row = (function jasminegui$riskviews$filtering_row(key){
var risk_filter = (function (){var G__64198 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64198) : re_frame.core.subscribe.call(null,G__64198));
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$riskviews$filtering_row_$_iter__64199(s__64200){
return (new cljs.core.LazySeq(null,(function (){
var s__64200__$1 = s__64200;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__64200__$1);
if(temp__5735__auto__){
var s__64200__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64200__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__64200__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__64202 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__64201 = (0);
while(true){
if((i__64201 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__64201);
cljs.core.chunk_append(b__64202,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),reagent.core.cursor(risk_filter,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null)),new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.risk_choice_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__64201,i,c__4527__auto__,size__4528__auto__,b__64202,s__64200__$2,temp__5735__auto__,risk_filter){
return (function (p1__64197_SHARP_){
var G__64203 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,i,p1__64197_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64203) : re_frame.core.dispatch.call(null,G__64203));
});})(i__64201,i,c__4527__auto__,size__4528__auto__,b__64202,s__64200__$2,temp__5735__auto__,risk_filter))
], null));

var G__64319 = (i__64201 + (1));
i__64201 = G__64319;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64202),jasminegui$riskviews$filtering_row_$_iter__64199(cljs.core.chunk_rest(s__64200__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64202),null);
}
} else {
var i = cljs.core.first(s__64200__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),reagent.core.cursor(risk_filter,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null)),new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.risk_choice_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i,s__64200__$2,temp__5735__auto__,risk_filter){
return (function (p1__64197_SHARP_){
var G__64204 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,i,p1__64197_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64204) : re_frame.core.dispatch.call(null,G__64204));
});})(i,s__64200__$2,temp__5735__auto__,risk_filter))
], null),jasminegui$riskviews$filtering_row_$_iter__64199(cljs.core.rest(s__64200__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})());
});
jasminegui.riskviews.single_portfolio_risk_controller = (function jasminegui$riskviews$single_portfolio_risk_controller(){
var portfolio_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$riskviews$single_portfolio_risk_controller_$_iter__64208(s__64209){
return (new cljs.core.LazySeq(null,(function (){
var s__64209__$1 = s__64209;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__64209__$1);
if(temp__5735__auto__){
var s__64209__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64209__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__64209__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__64211 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__64210 = (0);
while(true){
if((i__64210 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__64210);
cljs.core.chunk_append(b__64211,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null));

var G__64320 = (i__64210 + (1));
i__64210 = G__64320;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64211),jasminegui$riskviews$single_portfolio_risk_controller_$_iter__64208(cljs.core.chunk_rest(s__64209__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64211),null);
}
} else {
var p = cljs.core.first(s__64209__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null),jasminegui$riskviews$single_portfolio_risk_controller_$_iter__64208(cljs.core.rest(s__64209__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref((function (){var G__64212 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64212) : re_frame.core.subscribe.call(null,G__64212));
})()));
})());
var display_style = (function (){var G__64213 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64213) : re_frame.core.subscribe.call(null,G__64213));
})();
var portfolio = (function (){var G__64214 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64214) : re_frame.core.subscribe.call(null,G__64214));
})();
var hide_zero_risk = (function (){var G__64215 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64215) : re_frame.core.subscribe.call(null,G__64215));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),["Portfolio drill-down ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__64217 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64217) : re_frame.core.subscribe.call(null,G__64217));
})()))].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"50px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"15px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Display type:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),display_style,new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"Table",new cljs.core.Keyword(null,"label","label",1718410804),"Table"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"Tree",new cljs.core.Keyword(null,"label","label",1718410804),"Tree"], null)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__64205_SHARP_){
var G__64218 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),p1__64205_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64218) : re_frame.core.dispatch.call(null,G__64218));
})], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,new cljs.core.Keyword(null,"model","model",331153215),hide_zero_risk,new cljs.core.Keyword(null,"label","label",1718410804),"Hide zero positions in table view",new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(display_style),"Tree"),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__64206_SHARP_){
var G__64219 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),p1__64206_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64219) : re_frame.core.dispatch.call(null,G__64219));
})], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Filtering:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),portfolio,new cljs.core.Keyword(null,"choices","choices",1385611597),portfolio_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__64207_SHARP_){
var G__64220 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),p1__64207_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64220) : re_frame.core.dispatch.call(null,G__64220));
})], null)], null),jasminegui.riskviews.filtering_row(new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081))))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.shortcut_row(new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"50px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Download:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-download",new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),true], null)], null)))], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.riskviews.single_portfolio_risk_display], null)], null)], null)], null);
});
jasminegui.riskviews.multiple_portfolio_risk_controller = (function jasminegui$riskviews$multiple_portfolio_risk_controller(){
var portfolio_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$riskviews$multiple_portfolio_risk_controller_$_iter__64225(s__64226){
return (new cljs.core.LazySeq(null,(function (){
var s__64226__$1 = s__64226;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__64226__$1);
if(temp__5735__auto__){
var s__64226__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64226__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__64226__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__64228 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__64227 = (0);
while(true){
if((i__64227 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__64227);
cljs.core.chunk_append(b__64228,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null));

var G__64321 = (i__64227 + (1));
i__64227 = G__64321;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64228),jasminegui$riskviews$multiple_portfolio_risk_controller_$_iter__64225(cljs.core.chunk_rest(s__64226__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64228),null);
}
} else {
var p = cljs.core.first(s__64226__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null),jasminegui$riskviews$multiple_portfolio_risk_controller_$_iter__64225(cljs.core.rest(s__64226__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref((function (){var G__64229 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64229) : re_frame.core.subscribe.call(null,G__64229));
})()));
})());
var display_style = (function (){var G__64230 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64230) : re_frame.core.subscribe.call(null,G__64230));
})();
var risk_filter = (function (){var G__64231 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64231) : re_frame.core.subscribe.call(null,G__64231));
})();
var portfolios = cljs.core.deref((function (){var G__64232 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64232) : re_frame.core.subscribe.call(null,G__64232));
})());
var selected_portfolios = (function (){var G__64233 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64233) : re_frame.core.subscribe.call(null,G__64233));
})();
var number_of_fields = (function (){var G__64234 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64234) : re_frame.core.subscribe.call(null,G__64234));
})();
var field_one = (function (){var G__64235 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64235) : re_frame.core.subscribe.call(null,G__64235));
})();
var field_two = (function (){var G__64236 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64236) : re_frame.core.subscribe.call(null,G__64236));
})();
var hide_zero_risk = (function (){var G__64237 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64237) : re_frame.core.subscribe.call(null,G__64237));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),["Portfolio drill-down ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__64239 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64239) : re_frame.core.subscribe.call(null,G__64239));
})()))].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"50px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Display type:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),display_style,new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"Table",new cljs.core.Keyword(null,"label","label",1718410804),"Table"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"Tree",new cljs.core.Keyword(null,"label","label",1718410804),"Tree"], null)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__64221_SHARP_){
var G__64240 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),p1__64221_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64240) : re_frame.core.dispatch.call(null,G__64240));
})], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,new cljs.core.Keyword(null,"model","model",331153215),hide_zero_risk,new cljs.core.Keyword(null,"label","label",1718410804),"Hide zero positions in table view",new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(display_style),"Tree"),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__64222_SHARP_){
var G__64241 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),p1__64222_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64241) : re_frame.core.dispatch.call(null,G__64241));
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Field:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),field_one,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.field_choices,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__64223_SHARP_){
var G__64242 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),p1__64223_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64242) : re_frame.core.dispatch.call(null,G__64242));
})], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Portfolios:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"label","label",1718410804),"All",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__64243 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),cljs.core.set(portfolios)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64243) : re_frame.core.dispatch.call(null,G__64243));
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"label","label",1718410804),"None",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__64244 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),cljs.core.PersistentHashSet.EMPTY], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64244) : re_frame.core.dispatch.call(null,G__64244));
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"label","label",1718410804),"CEMBI",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__64245 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),cljs.core.set(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"cembi","cembi",1924920241));
}),jasminegui.static$.portfolio_alignment_groups))))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64245) : re_frame.core.dispatch.call(null,G__64245));
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"label","label",1718410804),"Allianz",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__64246 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),cljs.core.set(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"allianz","allianz",-819219390));
}),jasminegui.static$.portfolio_alignment_groups))))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64246) : re_frame.core.dispatch.call(null,G__64246));
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"label","label",1718410804),"IG",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__64247 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),cljs.core.set(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"ig","ig",-1295804776));
}),jasminegui.static$.portfolio_alignment_groups))))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64247) : re_frame.core.dispatch.call(null,G__64247));
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"label","label",1718410804),"Talanx",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__64248 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),cljs.core.set(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"talanx","talanx",-128127782));
}),jasminegui.static$.portfolio_alignment_groups))))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64248) : re_frame.core.dispatch.call(null,G__64248));
})], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.selection_list,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),selected_portfolios,new cljs.core.Keyword(null,"choices","choices",1385611597),portfolio_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__64224_SHARP_){
var G__64249 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),p1__64224_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64249) : re_frame.core.dispatch.call(null,G__64249));
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Filtering:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null)], null),jasminegui.riskviews.filtering_row(new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247))))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),jasminegui.riskviews.shortcut_row(new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Download:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-download",new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),true], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.riskviews.multiple_portfolio_risk_display], null)], null)], null)], null);
});
jasminegui.riskviews.portfolio_alignment_risk_controller = (function jasminegui$riskviews$portfolio_alignment_risk_controller(){
var display_style = (function (){var G__64255 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64255) : re_frame.core.subscribe.call(null,G__64255));
})();
var risk_filter = (function (){var G__64256 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64256) : re_frame.core.subscribe.call(null,G__64256));
})();
var portfolio_alignment_group = (function (){var G__64257 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64257) : re_frame.core.subscribe.call(null,G__64257));
})();
var field = (function (){var G__64258 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64258) : re_frame.core.subscribe.call(null,G__64258));
})();
var threshold = (function (){var G__64259 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64259) : re_frame.core.subscribe.call(null,G__64259));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),["Portfolio drill-down ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__64261 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64261) : re_frame.core.subscribe.call(null,G__64261));
})()))].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"15px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Display type:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Field:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Threshold:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),display_style,new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"Table",new cljs.core.Keyword(null,"label","label",1718410804),"Table"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"Tree",new cljs.core.Keyword(null,"label","label",1718410804),"Tree"], null)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__64250_SHARP_){
var G__64262 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),p1__64250_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64262) : re_frame.core.dispatch.call(null,G__64262));
})], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),field,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.field_choices_alignment,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__64251_SHARP_){
var G__64263 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),p1__64251_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64263) : re_frame.core.dispatch.call(null,G__64263));
})], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),threshold,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.threshold_choices_alignment,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__64252_SHARP_){
var G__64264 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),p1__64252_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64264) : re_frame.core.dispatch.call(null,G__64264));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"50px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Filtering:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),portfolio_alignment_group,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.portfolio_alignment_groups,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__64253_SHARP_){
var G__64265 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),p1__64253_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64265) : re_frame.core.dispatch.call(null,G__64265));
})], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$riskviews$portfolio_alignment_risk_controller_$_iter__64266(s__64267){
return (new cljs.core.LazySeq(null,(function (){
var s__64267__$1 = s__64267;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__64267__$1);
if(temp__5735__auto__){
var s__64267__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64267__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__64267__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__64269 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__64268 = (0);
while(true){
if((i__64268 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__64268);
cljs.core.chunk_append(b__64269,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),reagent.core.cursor(risk_filter,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null)),new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.risk_choice_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__64268,i,c__4527__auto__,size__4528__auto__,b__64269,s__64267__$2,temp__5735__auto__,display_style,risk_filter,portfolio_alignment_group,field,threshold){
return (function (p1__64254_SHARP_){
var G__64270 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),i,p1__64254_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64270) : re_frame.core.dispatch.call(null,G__64270));
});})(i__64268,i,c__4527__auto__,size__4528__auto__,b__64269,s__64267__$2,temp__5735__auto__,display_style,risk_filter,portfolio_alignment_group,field,threshold))
], null));

var G__64322 = (i__64268 + (1));
i__64268 = G__64322;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64269),jasminegui$riskviews$portfolio_alignment_risk_controller_$_iter__64266(cljs.core.chunk_rest(s__64267__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64269),null);
}
} else {
var i = cljs.core.first(s__64267__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),reagent.core.cursor(risk_filter,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null)),new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.risk_choice_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i,s__64267__$2,temp__5735__auto__,display_style,risk_filter,portfolio_alignment_group,field,threshold){
return (function (p1__64254_SHARP_){
var G__64271 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),i,p1__64254_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64271) : re_frame.core.dispatch.call(null,G__64271));
});})(i,s__64267__$2,temp__5735__auto__,display_style,risk_filter,portfolio_alignment_group,field,threshold))
], null),jasminegui$riskviews$portfolio_alignment_risk_controller_$_iter__64266(cljs.core.rest(s__64267__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})())))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.riskviews.multiple_portfolio_alignment_risk_display], null)], null)], null)], null);
});
jasminegui.riskviews.summary_display = (function jasminegui$riskviews$summary_display(){
var positions = cljs.core.deref((function (){var G__64273 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64273) : re_frame.core.subscribe.call(null,G__64273));
})());
var portfolios = cljs.core.deref((function (){var G__64274 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64274) : re_frame.core.subscribe.call(null,G__64274));
})());
var totals = cljs.core.deref((function (){var G__64275 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64275) : re_frame.core.subscribe.call(null,G__64275));
})());
var display = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$riskviews$summary_display_$_iter__64276(s__64277){
return (new cljs.core.LazySeq(null,(function (){
var s__64277__$1 = s__64277;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__64277__$1);
if(temp__5735__auto__){
var s__64277__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64277__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__64277__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__64279 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__64278 = (0);
while(true){
if((i__64278 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__64278);
cljs.core.chunk_append(b__64279,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"portfolio","portfolio",957568598),p], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = ((function (i__64278,p,c__4527__auto__,size__4528__auto__,b__64279,s__64277__$2,temp__5735__auto__,positions,portfolios,totals){
return (function jasminegui$riskviews$summary_display_$_iter__64276_$_iter__64280(s__64281){
return (new cljs.core.LazySeq(null,((function (i__64278,p,c__4527__auto__,size__4528__auto__,b__64279,s__64277__$2,temp__5735__auto__,positions,portfolios,totals){
return (function (){
var s__64281__$1 = s__64281;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__64281__$1);
if(temp__5735__auto____$1){
var s__64281__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__64281__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__64281__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__64283 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__64282 = (0);
while(true){
if((i__64282 < size__4528__auto____$1)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto____$1,i__64282);
cljs.core.chunk_append(b__64283,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(totals,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null));

var G__64323 = (i__64282 + (1));
i__64282 = G__64323;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64283),jasminegui$riskviews$summary_display_$_iter__64276_$_iter__64280(cljs.core.chunk_rest(s__64281__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64283),null);
}
} else {
var k = cljs.core.first(s__64281__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(totals,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null),jasminegui$riskviews$summary_display_$_iter__64276_$_iter__64280(cljs.core.rest(s__64281__$2)));
}
} else {
return null;
}
break;
}
});})(i__64278,p,c__4527__auto__,size__4528__auto__,b__64279,s__64277__$2,temp__5735__auto__,positions,portfolios,totals))
,null,null));
});})(i__64278,p,c__4527__auto__,size__4528__auto__,b__64279,s__64277__$2,temp__5735__auto__,positions,portfolios,totals))
;
return iter__4529__auto__(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175),new cljs.core.Keyword(null,"base-value","base-value",921379228),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067),new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030),new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342)], null));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(totals,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861)], null)) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__64278,p,c__4527__auto__,size__4528__auto__,b__64279,s__64277__$2,temp__5735__auto__,positions,portfolios,totals){
return (function (p1__64272_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__64272_SHARP_),p)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-class","asset-class",1845554418).cljs$core$IFn$_invoke$arity$1(p1__64272_SHARP_),"BONDS")));
});})(i__64278,p,c__4527__auto__,size__4528__auto__,b__64279,s__64277__$2,temp__5735__auto__,positions,portfolios,totals))
,positions))))], null)], 0)));

var G__64324 = (i__64278 + (1));
i__64278 = G__64324;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64279),jasminegui$riskviews$summary_display_$_iter__64276(cljs.core.chunk_rest(s__64277__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64279),null);
}
} else {
var p = cljs.core.first(s__64277__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"portfolio","portfolio",957568598),p], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = ((function (p,s__64277__$2,temp__5735__auto__,positions,portfolios,totals){
return (function jasminegui$riskviews$summary_display_$_iter__64276_$_iter__64284(s__64285){
return (new cljs.core.LazySeq(null,(function (){
var s__64285__$1 = s__64285;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__64285__$1);
if(temp__5735__auto____$1){
var s__64285__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__64285__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__64285__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__64287 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__64286 = (0);
while(true){
if((i__64286 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__64286);
cljs.core.chunk_append(b__64287,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(totals,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null));

var G__64325 = (i__64286 + (1));
i__64286 = G__64325;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64287),jasminegui$riskviews$summary_display_$_iter__64276_$_iter__64284(cljs.core.chunk_rest(s__64285__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64287),null);
}
} else {
var k = cljs.core.first(s__64285__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(totals,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null),jasminegui$riskviews$summary_display_$_iter__64276_$_iter__64284(cljs.core.rest(s__64285__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(p,s__64277__$2,temp__5735__auto__,positions,portfolios,totals))
;
return iter__4529__auto__(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175),new cljs.core.Keyword(null,"base-value","base-value",921379228),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067),new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030),new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342)], null));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(totals,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861)], null)) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (p,s__64277__$2,temp__5735__auto__,positions,portfolios,totals){
return (function (p1__64272_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__64272_SHARP_),p)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-class","asset-class",1845554418).cljs$core$IFn$_invoke$arity$1(p1__64272_SHARP_),"BONDS")));
});})(p,s__64277__$2,temp__5735__auto__,positions,portfolios,totals))
,positions))))], null)], 0)),jasminegui$riskviews$summary_display_$_iter__64276(cljs.core.rest(s__64277__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(portfolios);
})());
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),["Summary ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__64289 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__64289) : re_frame.core.subscribe.call(null,G__64289));
})()))].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data","data",-232669377),display,new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Portfolio",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"portfolio",new cljs.core.Keyword(null,"width","width",-384071477),(120)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Balance",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Value",new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__64290 = new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861);
return (jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(G__64290) : jasminegui.riskviews.table_columns.call(null,G__64290));
})(),new cljs.core.Keyword(null,"Header","Header",1255420133),"Yield"),(function (){var G__64291 = new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737);
return (jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(G__64291) : jasminegui.riskviews.table_columns.call(null,G__64291));
})(),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__64292 = new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105);
return (jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(G__64292) : jasminegui.riskviews.table_columns.call(null,G__64292));
})(),new cljs.core.Keyword(null,"Header","Header",1255420133),"M Dur"),(function (){var G__64293 = new cljs.core.Keyword(null,"rating","rating",144173662);
return (jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(G__64293) : jasminegui.riskviews.table_columns.call(null,G__64293));
})(),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__64294 = new cljs.core.Keyword(null,"rating-score","rating-score",1260592885);
return (jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(G__64294) : jasminegui.riskviews.table_columns.call(null,G__64294));
})(),new cljs.core.Keyword(null,"width","width",-384071477),(60)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__64295 = new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067);
return (jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(G__64295) : jasminegui.riskviews.table_columns.call(null,G__64295));
})(),new cljs.core.Keyword(null,"Header","Header",1255420133),"Z-spread"),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__64296 = new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030);
return (jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(G__64296) : jasminegui.riskviews.table_columns.call(null,G__64296));
})(),new cljs.core.Keyword(null,"Header","Header",1255420133),"G-spread")], null)], null)], null),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),false,new cljs.core.Keyword(null,"pageSize","pageSize",732080883),cljs.core.count(portfolios),new cljs.core.Keyword(null,"className","className",-1983287057),"-striped -highlight"], null)], null)], null)], null)], null);
});

//# sourceMappingURL=jasminegui.riskviews.js.map
