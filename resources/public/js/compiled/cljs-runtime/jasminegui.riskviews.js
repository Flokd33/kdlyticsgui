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
var t = cljs.core.deref((function (){var G__47503 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47503) : re_frame.core.subscribe.call(null,G__47503));
})());
return ((function (){var G__47504 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(a);
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(G__47504) : t.call(null,G__47504));
})() <= (function (){var G__47505 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(b);
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(G__47505) : t.call(null,G__47505));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(((x < (0)))?"red":"black")], null)], null),(function (){var G__47510 = fmt;
var G__47511 = ((100) * x);
return goog.string.format(G__47510,G__47511);
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style], null),(function (){var G__47512 = "%.1f%";
var G__47513 = ((100) * x);
return goog.string.format(G__47512,G__47513);
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),c], null)], null),(function (){var G__47516 = "%.0f%";
var G__47517 = ((100) * v);
return goog.string.format(G__47516,G__47517);
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
return reagent.core.as_element([prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__47520 = "%.2f";
var G__47521 = (this$["value"]);
return goog.string.format(G__47520,G__47521);
})())].join(''));
} else {
return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null));
}
});
jasminegui.riskviews.compare_nb = (function jasminegui$riskviews$compare_nb(filterfn,row){

var input = (filterfn["value"]);
var rowval = (row[(filterfn["id"])]);
var G__47522 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(input,(0),(1));
switch (G__47522) {
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
var G__47523 = x;
switch (G__47523) {
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
var total_line = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"jpm-region","jpm-region",-2074265852),"Total",new cljs.core.Keyword(null,"qt-jpm-sector","qt-jpm-sector",1047055349),"Total",new cljs.core.Keyword(null,"qt-risk-country-name","qt-risk-country-name",1182905474),"Total",new cljs.core.Keyword(null,"TICKER","TICKER",-1215969144),"Total",new cljs.core.Keyword(null,"NAME","NAME",-1127916515),"Total",new cljs.core.Keyword(null,"description","description",-1428560544),"Total",new cljs.core.Keyword(null,"isin","isin",-1197420747),"Total"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$riskviews$add_total_line_to_pivot_$_iter__47524(s__47525){
return (new cljs.core.LazySeq(null,(function (){
var s__47525__$1 = s__47525;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47525__$1);
if(temp__5735__auto__){
var s__47525__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47525__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47525__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47527 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47526 = (0);
while(true){
if((i__47526 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__47526);
cljs.core.chunk_append(b__47527,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),pivoted_table))], null));

var G__47702 = (i__47526 + (1));
i__47526 = G__47702;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47527),jasminegui$riskviews$add_total_line_to_pivot_$_iter__47524(cljs.core.chunk_rest(s__47525__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47527),null);
}
} else {
var p = cljs.core.first(s__47525__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),pivoted_table))], null),jasminegui$riskviews$add_total_line_to_pivot_$_iter__47524(cljs.core.rest(s__47525__$2)));
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
var positions = cljs.core.deref((function (){var G__47531 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47531) : re_frame.core.subscribe.call(null,G__47531));
})());
var portfolio = cljs.core.deref((function (){var G__47532 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47532) : re_frame.core.subscribe.call(null,G__47532));
})());
var portfolio_total_line = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var G__47535 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(portfolio);
var fexpr__47534 = cljs.core.deref((function (){var G__47536 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47536) : re_frame.core.subscribe.call(null,G__47536));
})());
return (fexpr__47534.cljs$core$IFn$_invoke$arity$1 ? fexpr__47534.cljs$core$IFn$_invoke$arity$1(G__47535) : fexpr__47534.call(null,G__47535));
})(),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),"Total",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),"00 Total"], 0));
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__47537 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47537) : re_frame.core.subscribe.call(null,G__47537));
})()),"Tree");
var portfolio_positions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__47528_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__47528_SHARP_),portfolio);
}),positions);
var viewable_positions = (cljs.core.truth_((((!(is_tree)))?cljs.core.deref((function (){var G__47539 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47539) : re_frame.core.subscribe.call(null,G__47539));
})()):false))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__47529_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(p1__47529_SHARP_),(0));
}),portfolio_positions):portfolio_positions);
var risk_filter = cljs.core.deref((function (){var G__47540 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47540) : re_frame.core.subscribe.call(null,G__47540));
})());
var risk_choice_1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((1)) : risk_filter.call(null,(1)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((1)) : risk_filter.call(null,(1))):null);
var risk_choice_2 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((2)) : risk_filter.call(null,(2)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((2)) : risk_filter.call(null,(2))):null);
var risk_choice_3 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((3)) : risk_filter.call(null,(3)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((3)) : risk_filter.call(null,(3))):null);
var additional_des_cols = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([risk_choice_3,"None",risk_choice_2,risk_choice_1]),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),jasminegui.static$.risk_choice_map));
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$riskviews$single_portfolio_risk_display_$_iter__47541(s__47542){
return (new cljs.core.LazySeq(null,(function (){
var s__47542__$1 = s__47542;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47542__$1);
if(temp__5735__auto__){
var s__47542__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47542__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47542__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47544 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47543 = (0);
while(true){
if((i__47543 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__47543);
cljs.core.chunk_append(b__47544,(jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.riskviews.table_columns.call(null,r)));

var G__47710 = (i__47543 + (1));
i__47543 = G__47710;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47544),jasminegui$riskviews$single_portfolio_risk_display_$_iter__47541(cljs.core.chunk_rest(s__47542__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47544),null);
}
} else {
var r = cljs.core.first(s__47542__$2);
return cljs.core.cons((jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.riskviews.table_columns.call(null,r)),jasminegui$riskviews$single_portfolio_risk_display_$_iter__47541(cljs.core.rest(s__47542__$2)));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"onFilteredChange","onFilteredChange",-69731355),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"filterable","filterable",-1588312341),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"pageSize","pageSize",732080883),new cljs.core.Keyword(null,"sortable","sortable",2109633621),new cljs.core.Keyword(null,"defaultFilterMethod","defaultFilterMethod",-641971243),new cljs.core.Keyword(null,"defaultFiltered","defaultFiltered",-1057218537),new cljs.core.Keyword(null,"pivotBy","pivotBy",782354495),new cljs.core.Keyword(null,"data","data",-232669377)],[(function (p1__47530_SHARP_){
var G__47545 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),p1__47530_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47545) : re_frame.core.dispatch.call(null,G__47545));
}),(!(is_tree)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Groups",new cljs.core.Keyword(null,"columns","columns",1998437288),grouping_columns], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"NAV",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"bm-weight","bm-weight",217267431),new cljs.core.Keyword(null,"weight-delta","weight-delta",-1239784638)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Duration",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"bm-contrib-eir-duration","bm-contrib-eir-duration",1013923984),new cljs.core.Keyword(null,"mdur-delta","mdur-delta",-395332953)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Yield",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"bm-contrib-yield","bm-contrib-yield",-1399804238)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Z-spread",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Position",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"nominal","nominal",413899877)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),((is_tree)?"Bond analytics (median)":"Bond analytics"),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"yield","yield",177875009),new cljs.core.Keyword(null,"z-spread","z-spread",-1184367967),new cljs.core.Keyword(null,"g-spread","g-spread",973847710),new cljs.core.Keyword(null,"duration","duration",1444101068)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Description",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rating","rating",144173662),new cljs.core.Keyword(null,"isin","isin",-1197420747)], null),additional_des_cols,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",-1428560544)], null)], 0))))], null)], null),(!(is_tree)),"-striped -highlight",((is_tree)?(cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first(accessors_k),portfolio_positions))) + (1)):(25)),(!(is_tree)),jasminegui.riskviews.case_insensitive_filter,((is_tree)?cljs.core.PersistentVector.EMPTY:cljs.core.deref((function (){var G__47546 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47546) : re_frame.core.subscribe.call(null,G__47546));
})())),((is_tree)?accessors:cljs.core.PersistentVector.EMPTY),display])], null);
});
jasminegui.riskviews.multiple_portfolio_risk_display = (function jasminegui$riskviews$multiple_portfolio_risk_display(){
var pivoted_positions = cljs.core.deref((function (){var G__47549 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47549) : re_frame.core.subscribe.call(null,G__47549));
})());
var selected_portfolios = cljs.core.deref((function (){var G__47550 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47550) : re_frame.core.subscribe.call(null,G__47550));
})());
var kselected_portfolios = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,selected_portfolios);
var portfolios = cljs.core.deref((function (){var G__47551 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47551) : re_frame.core.subscribe.call(null,G__47551));
})());
var hide_zero_risk = cljs.core.deref((function (){var G__47552 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47552) : re_frame.core.subscribe.call(null,G__47552));
})());
var number_of_fields = cljs.core.deref((function (){var G__47553 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47553) : re_frame.core.subscribe.call(null,G__47553));
})());
var display_key_one = cljs.core.deref((function (){var G__47554 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47554) : re_frame.core.subscribe.call(null,G__47554));
})());
var cell_one = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_one,new cljs.core.Keyword(null,"Cell","Cell",53644787)], null));
var display_key_two = cljs.core.deref((function (){var G__47555 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47555) : re_frame.core.subscribe.call(null,G__47555));
})());
var cell_two = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_two,new cljs.core.Keyword(null,"Cell","Cell",53644787)], null));
var width_one = (100);
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__47556 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47556) : re_frame.core.subscribe.call(null,G__47556));
})()),"Tree");
var risk_filter = cljs.core.deref((function (){var G__47557 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47557) : re_frame.core.subscribe.call(null,G__47557));
})());
var risk_choice_1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((1)) : risk_filter.call(null,(1)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((1)) : risk_filter.call(null,(1))):null);
var risk_choice_2 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((2)) : risk_filter.call(null,(2)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((2)) : risk_filter.call(null,(2))):null);
var risk_choice_3 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((3)) : risk_filter.call(null,(3)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((3)) : risk_filter.call(null,(3))):null);
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$riskviews$multiple_portfolio_risk_display_$_iter__47558(s__47559){
return (new cljs.core.LazySeq(null,(function (){
var s__47559__$1 = s__47559;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47559__$1);
if(temp__5735__auto__){
var s__47559__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47559__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47559__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47561 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47560 = (0);
while(true){
if((i__47560 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__47560);
cljs.core.chunk_append(b__47561,(jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.riskviews.table_columns.call(null,r)));

var G__47718 = (i__47560 + (1));
i__47560 = G__47718;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47561),jasminegui$riskviews$multiple_portfolio_risk_display_$_iter__47558(cljs.core.chunk_rest(s__47559__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47561),null);
}
} else {
var r = cljs.core.first(s__47559__$2);
return cljs.core.cons((jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.riskviews.table_columns.call(null,r)),jasminegui$riskviews$multiple_portfolio_risk_display_$_iter__47558(cljs.core.rest(s__47559__$2)));
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
var pivoted_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47547_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__47547_SHARP_,(function (){var fexpr__47562 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_one,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__47562.cljs$core$IFn$_invoke$arity$1 ? fexpr__47562.cljs$core$IFn$_invoke$arity$1(p1__47547_SHARP_) : fexpr__47562.call(null,p1__47547_SHARP_));
})()], 0));
}),pivoted_positions);
var thfil = (function (line){
return (!(cljs.core.every_QMARK_(cljs.core.zero_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(line,kselected_portfolios))));
});
var pivoted_data_hide_zero = (cljs.core.truth_((((!(is_tree)))?hide_zero_risk:false))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(thfil,pivoted_data):pivoted_data);
var display_one = jasminegui.riskviews.add_total_line_to_pivot(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),pivoted_data_hide_zero),portfolios);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"onFilteredChange","onFilteredChange",-69731355),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"filterable","filterable",-1588312341),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"pageSize","pageSize",732080883),new cljs.core.Keyword(null,"sortable","sortable",2109633621),new cljs.core.Keyword(null,"defaultFilterMethod","defaultFilterMethod",-641971243),new cljs.core.Keyword(null,"defaultFiltered","defaultFiltered",-1057218537),new cljs.core.Keyword(null,"pivotBy","pivotBy",782354495),new cljs.core.Keyword(null,"data","data",-232669377)],[(function (p1__47548_SHARP_){
var G__47563 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),p1__47548_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47563) : re_frame.core.dispatch.call(null,G__47563));
}),(!(is_tree)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(number_of_fields,"One"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Groups",new cljs.core.Keyword(null,"columns","columns",1998437288),grouping_columns], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),["Portfolio ",cljs.core.name(display_key_one)].join(''),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$riskviews$multiple_portfolio_risk_display_$_iter__47564(s__47565){
return (new cljs.core.LazySeq(null,(function (){
var s__47565__$1 = s__47565;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47565__$1);
if(temp__5735__auto__){
var s__47565__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47565__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47565__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47567 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47566 = (0);
while(true){
if((i__47566 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__47566);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([p]),selected_portfolios))){
cljs.core.chunk_append(b__47567,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),p,new cljs.core.Keyword(null,"accessor","accessor",-25476721),p,new cljs.core.Keyword(null,"width","width",-384071477),width_one,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),cell_one,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null));

var G__47720 = (i__47566 + (1));
i__47566 = G__47720;
continue;
} else {
var G__47721 = (i__47566 + (1));
i__47566 = G__47721;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47567),jasminegui$riskviews$multiple_portfolio_risk_display_$_iter__47564(cljs.core.chunk_rest(s__47565__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47567),null);
}
} else {
var p = cljs.core.first(s__47565__$2);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([p]),selected_portfolios))){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),p,new cljs.core.Keyword(null,"accessor","accessor",-25476721),p,new cljs.core.Keyword(null,"width","width",-384071477),width_one,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),cell_one,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),jasminegui$riskviews$multiple_portfolio_risk_display_$_iter__47564(cljs.core.rest(s__47565__$2)));
} else {
var G__47722 = cljs.core.rest(s__47565__$2);
s__47565__$1 = G__47722;
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
})())], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Description",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rating","rating",144173662),new cljs.core.Keyword(null,"isin","isin",-1197420747),new cljs.core.Keyword(null,"description","description",-1428560544)], null))], null)], null):null),(!(is_tree)),"-striped -highlight",((is_tree)?(cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first(accessors_k),display_one))) + (1)):(25)),(!(is_tree)),jasminegui.riskviews.case_insensitive_filter,((is_tree)?cljs.core.PersistentVector.EMPTY:cljs.core.deref((function (){var G__47568 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47568) : re_frame.core.subscribe.call(null,G__47568));
})())),((is_tree)?accessors:cljs.core.PersistentVector.EMPTY),display_one])], null);
});
jasminegui.riskviews.multiple_portfolio_alignment_risk_display = (function jasminegui$riskviews$multiple_portfolio_alignment_risk_display(){
var group = new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__47569_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__47569_SHARP_),cljs.core.deref((function (){var G__47572 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47572) : re_frame.core.subscribe.call(null,G__47572));
})()));
}),jasminegui.static$.portfolio_alignment_groups)));
var pivoted_positions = cljs.core.deref((function (){var G__47573 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47573) : re_frame.core.subscribe.call(null,G__47573));
})());
var base_portfolio = cljs.core.first(group);
var portfolios = cljs.core.rest(group);
var kportfolios = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,portfolios);
var display_key = cljs.core.deref((function (){var G__47574 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47574) : re_frame.core.subscribe.call(null,G__47574));
})());
var cell_one = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key,new cljs.core.Keyword(null,"Cell","Cell",53644787)], null));
var width_one = (100);
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__47575 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47575) : re_frame.core.subscribe.call(null,G__47575));
})()),"Tree");
var risk_filter = cljs.core.deref((function (){var G__47576 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47576) : re_frame.core.subscribe.call(null,G__47576));
})());
var risk_choice_1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((1)) : risk_filter.call(null,(1)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((1)) : risk_filter.call(null,(1))):null);
var risk_choice_2 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((2)) : risk_filter.call(null,(2)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((2)) : risk_filter.call(null,(2))):null);
var risk_choice_3 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((3)) : risk_filter.call(null,(3)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((3)) : risk_filter.call(null,(3))):null);
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$riskviews$multiple_portfolio_alignment_risk_display_$_iter__47577(s__47578){
return (new cljs.core.LazySeq(null,(function (){
var s__47578__$1 = s__47578;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47578__$1);
if(temp__5735__auto__){
var s__47578__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47578__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47578__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47580 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47579 = (0);
while(true){
if((i__47579 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__47579);
cljs.core.chunk_append(b__47580,(jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.riskviews.table_columns.call(null,r)));

var G__47723 = (i__47579 + (1));
i__47579 = G__47723;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47580),jasminegui$riskviews$multiple_portfolio_alignment_risk_display_$_iter__47577(cljs.core.chunk_rest(s__47578__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47580),null);
}
} else {
var r = cljs.core.first(s__47578__$2);
return cljs.core.cons((jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.riskviews.table_columns.call(null,r)),jasminegui$riskviews$multiple_portfolio_alignment_risk_display_$_iter__47577(cljs.core.rest(s__47578__$2)));
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
var pivoted_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47570_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__47570_SHARP_,(function (){var fexpr__47581 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__47581.cljs$core$IFn$_invoke$arity$1 ? fexpr__47581.cljs$core$IFn$_invoke$arity$1(p1__47570_SHARP_) : fexpr__47581.call(null,p1__47570_SHARP_));
})()], 0));
}),pivoted_positions);
var differentiate = (function (line){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (temp_line,p){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(temp_line,p,((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(temp_line) : p.call(null,temp_line)) - (function (){var fexpr__47582 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(base_portfolio);
return (fexpr__47582.cljs$core$IFn$_invoke$arity$1 ? fexpr__47582.cljs$core$IFn$_invoke$arity$1(temp_line) : fexpr__47582.call(null,temp_line));
})()));
}),line,kportfolios);
});
var pivoted_data_diff = cljs.core.map.cljs$core$IFn$_invoke$arity$2(differentiate,pivoted_data);
var threshold = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__47571_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__47571_SHARP_),cljs.core.deref((function (){var G__47583 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47583) : re_frame.core.subscribe.call(null,G__47583));
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

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"filterable","filterable",-1588312341),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"pageSize","pageSize",732080883),new cljs.core.Keyword(null,"sortable","sortable",2109633621),new cljs.core.Keyword(null,"defaultFilterMethod","defaultFilterMethod",-641971243),new cljs.core.Keyword(null,"pivotBy","pivotBy",782354495),new cljs.core.Keyword(null,"data","data",-232669377)],[(!(is_tree)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Groups",new cljs.core.Keyword(null,"columns","columns",1998437288),grouping_columns], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),["Portfolio ",cljs.core.name(display_key)," vs ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_portfolio)].join(''),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$riskviews$multiple_portfolio_alignment_risk_display_$_iter__47584(s__47585){
return (new cljs.core.LazySeq(null,(function (){
var s__47585__$1 = s__47585;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47585__$1);
if(temp__5735__auto__){
var s__47585__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47585__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47585__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47587 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47586 = (0);
while(true){
if((i__47586 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__47586);
cljs.core.chunk_append(b__47587,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),p,new cljs.core.Keyword(null,"accessor","accessor",-25476721),p,new cljs.core.Keyword(null,"width","width",-384071477),width_one,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),cell_one,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null));

var G__47724 = (i__47586 + (1));
i__47586 = G__47724;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47587),jasminegui$riskviews$multiple_portfolio_alignment_risk_display_$_iter__47584(cljs.core.chunk_rest(s__47585__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47587),null);
}
} else {
var p = cljs.core.first(s__47585__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),p,new cljs.core.Keyword(null,"accessor","accessor",-25476721),p,new cljs.core.Keyword(null,"width","width",-384071477),width_one,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.riskviews.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),cell_one,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),jasminegui$riskviews$multiple_portfolio_alignment_risk_display_$_iter__47584(cljs.core.rest(s__47585__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(portfolios);
})())], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Description",new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"thinkFolio ID",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"description",new cljs.core.Keyword(null,"width","width",-384071477),(500)], null),(function (){var G__47588 = new cljs.core.Keyword(null,"rating","rating",144173662);
return (jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(G__47588) : jasminegui.riskviews.table_columns.call(null,G__47588));
})()], null)], null)], null),(!(is_tree)),"-striped -highlight",((is_tree)?(cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first(accessors_k),display))) + (1)):(25)),(!(is_tree)),jasminegui.riskviews.case_insensitive_filter,((is_tree)?accessors:cljs.core.PersistentVector.EMPTY),display])], null);
});
jasminegui.riskviews.single_portfolio_risk_controller = (function jasminegui$riskviews$single_portfolio_risk_controller(){
var portfolio_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$riskviews$single_portfolio_risk_controller_$_iter__47593(s__47594){
return (new cljs.core.LazySeq(null,(function (){
var s__47594__$1 = s__47594;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47594__$1);
if(temp__5735__auto__){
var s__47594__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47594__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47594__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47596 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47595 = (0);
while(true){
if((i__47595 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__47595);
cljs.core.chunk_append(b__47596,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null));

var G__47725 = (i__47595 + (1));
i__47595 = G__47725;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47596),jasminegui$riskviews$single_portfolio_risk_controller_$_iter__47593(cljs.core.chunk_rest(s__47594__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47596),null);
}
} else {
var p = cljs.core.first(s__47594__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null),jasminegui$riskviews$single_portfolio_risk_controller_$_iter__47593(cljs.core.rest(s__47594__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref((function (){var G__47597 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47597) : re_frame.core.subscribe.call(null,G__47597));
})()));
})());
var display_style = (function (){var G__47598 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47598) : re_frame.core.subscribe.call(null,G__47598));
})();
var portfolio = (function (){var G__47599 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47599) : re_frame.core.subscribe.call(null,G__47599));
})();
var risk_filter = (function (){var G__47600 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47600) : re_frame.core.subscribe.call(null,G__47600));
})();
var hide_zero_risk = (function (){var G__47601 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47601) : re_frame.core.subscribe.call(null,G__47601));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),["Portfolio drill-down ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__47603 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47603) : re_frame.core.subscribe.call(null,G__47603));
})()))].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Display type:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),display_style,new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"Table",new cljs.core.Keyword(null,"label","label",1718410804),"Table"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"Tree",new cljs.core.Keyword(null,"label","label",1718410804),"Tree"], null)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__47589_SHARP_){
var G__47604 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),p1__47589_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47604) : re_frame.core.dispatch.call(null,G__47604));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"50px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Filtering:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),portfolio,new cljs.core.Keyword(null,"choices","choices",1385611597),portfolio_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__47590_SHARP_){
var G__47605 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),p1__47590_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47605) : re_frame.core.dispatch.call(null,G__47605));
})], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$riskviews$single_portfolio_risk_controller_$_iter__47606(s__47607){
return (new cljs.core.LazySeq(null,(function (){
var s__47607__$1 = s__47607;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47607__$1);
if(temp__5735__auto__){
var s__47607__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47607__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47607__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47609 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47608 = (0);
while(true){
if((i__47608 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__47608);
cljs.core.chunk_append(b__47609,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),reagent.core.cursor(risk_filter,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null)),new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.risk_choice_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__47608,i,c__4527__auto__,size__4528__auto__,b__47609,s__47607__$2,temp__5735__auto__,portfolio_map,display_style,portfolio,risk_filter,hide_zero_risk){
return (function (p1__47591_SHARP_){
var G__47610 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),i,p1__47591_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47610) : re_frame.core.dispatch.call(null,G__47610));
});})(i__47608,i,c__4527__auto__,size__4528__auto__,b__47609,s__47607__$2,temp__5735__auto__,portfolio_map,display_style,portfolio,risk_filter,hide_zero_risk))
], null));

var G__47726 = (i__47608 + (1));
i__47608 = G__47726;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47609),jasminegui$riskviews$single_portfolio_risk_controller_$_iter__47606(cljs.core.chunk_rest(s__47607__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47609),null);
}
} else {
var i = cljs.core.first(s__47607__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),reagent.core.cursor(risk_filter,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null)),new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.risk_choice_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i,s__47607__$2,temp__5735__auto__,portfolio_map,display_style,portfolio,risk_filter,hide_zero_risk){
return (function (p1__47591_SHARP_){
var G__47611 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),i,p1__47591_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47611) : re_frame.core.dispatch.call(null,G__47611));
});})(i,s__47607__$2,temp__5735__auto__,portfolio_map,display_style,portfolio,risk_filter,hide_zero_risk))
], null),jasminegui$riskviews$single_portfolio_risk_controller_$_iter__47606(cljs.core.rest(s__47607__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"50px"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,new cljs.core.Keyword(null,"model","model",331153215),hide_zero_risk,new cljs.core.Keyword(null,"label","label",1718410804),"Hide zero positions in table view",new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(display_style),"Tree"),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__47592_SHARP_){
var G__47612 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),p1__47592_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47612) : re_frame.core.dispatch.call(null,G__47612));
})], null)], null)], 0)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.riskviews.single_portfolio_risk_display], null)], null)], null)], null);
});
jasminegui.riskviews.multiple_portfolio_risk_controller = (function jasminegui$riskviews$multiple_portfolio_risk_controller(){
var portfolio_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$riskviews$multiple_portfolio_risk_controller_$_iter__47618(s__47619){
return (new cljs.core.LazySeq(null,(function (){
var s__47619__$1 = s__47619;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47619__$1);
if(temp__5735__auto__){
var s__47619__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47619__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47619__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47621 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47620 = (0);
while(true){
if((i__47620 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__47620);
cljs.core.chunk_append(b__47621,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null));

var G__47727 = (i__47620 + (1));
i__47620 = G__47727;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47621),jasminegui$riskviews$multiple_portfolio_risk_controller_$_iter__47618(cljs.core.chunk_rest(s__47619__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47621),null);
}
} else {
var p = cljs.core.first(s__47619__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null),jasminegui$riskviews$multiple_portfolio_risk_controller_$_iter__47618(cljs.core.rest(s__47619__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref((function (){var G__47622 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47622) : re_frame.core.subscribe.call(null,G__47622));
})()));
})());
var display_style = (function (){var G__47623 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47623) : re_frame.core.subscribe.call(null,G__47623));
})();
var risk_filter = (function (){var G__47624 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47624) : re_frame.core.subscribe.call(null,G__47624));
})();
var selected_portfolios = (function (){var G__47625 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47625) : re_frame.core.subscribe.call(null,G__47625));
})();
var number_of_fields = (function (){var G__47626 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47626) : re_frame.core.subscribe.call(null,G__47626));
})();
var field_one = (function (){var G__47627 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47627) : re_frame.core.subscribe.call(null,G__47627));
})();
var field_two = (function (){var G__47628 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47628) : re_frame.core.subscribe.call(null,G__47628));
})();
var hide_zero_risk = (function (){var G__47629 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47629) : re_frame.core.subscribe.call(null,G__47629));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),["Portfolio drill-down ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__47631 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47631) : re_frame.core.subscribe.call(null,G__47631));
})()))].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"15px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Display type:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Field:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),display_style,new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"Table",new cljs.core.Keyword(null,"label","label",1718410804),"Table"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"Tree",new cljs.core.Keyword(null,"label","label",1718410804),"Tree"], null)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__47613_SHARP_){
var G__47632 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),p1__47613_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47632) : re_frame.core.dispatch.call(null,G__47632));
})], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),field_one,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.field_choices,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__47614_SHARP_){
var G__47633 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),p1__47614_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47633) : re_frame.core.dispatch.call(null,G__47633));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"50px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Filtering:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.selection_list,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"height","height",1025178622),"250px",new cljs.core.Keyword(null,"model","model",331153215),selected_portfolios,new cljs.core.Keyword(null,"choices","choices",1385611597),portfolio_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__47615_SHARP_){
var G__47634 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),p1__47615_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47634) : re_frame.core.dispatch.call(null,G__47634));
})], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$riskviews$multiple_portfolio_risk_controller_$_iter__47635(s__47636){
return (new cljs.core.LazySeq(null,(function (){
var s__47636__$1 = s__47636;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47636__$1);
if(temp__5735__auto__){
var s__47636__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47636__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47636__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47638 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47637 = (0);
while(true){
if((i__47637 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__47637);
cljs.core.chunk_append(b__47638,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),reagent.core.cursor(risk_filter,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null)),new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.risk_choice_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__47637,i,c__4527__auto__,size__4528__auto__,b__47638,s__47636__$2,temp__5735__auto__,portfolio_map,display_style,risk_filter,selected_portfolios,number_of_fields,field_one,field_two,hide_zero_risk){
return (function (p1__47616_SHARP_){
var G__47639 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),i,p1__47616_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47639) : re_frame.core.dispatch.call(null,G__47639));
});})(i__47637,i,c__4527__auto__,size__4528__auto__,b__47638,s__47636__$2,temp__5735__auto__,portfolio_map,display_style,risk_filter,selected_portfolios,number_of_fields,field_one,field_two,hide_zero_risk))
], null));

var G__47728 = (i__47637 + (1));
i__47637 = G__47728;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47638),jasminegui$riskviews$multiple_portfolio_risk_controller_$_iter__47635(cljs.core.chunk_rest(s__47636__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47638),null);
}
} else {
var i = cljs.core.first(s__47636__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),reagent.core.cursor(risk_filter,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null)),new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.risk_choice_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i,s__47636__$2,temp__5735__auto__,portfolio_map,display_style,risk_filter,selected_portfolios,number_of_fields,field_one,field_two,hide_zero_risk){
return (function (p1__47616_SHARP_){
var G__47640 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),i,p1__47616_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47640) : re_frame.core.dispatch.call(null,G__47640));
});})(i,s__47636__$2,temp__5735__auto__,portfolio_map,display_style,risk_filter,selected_portfolios,number_of_fields,field_one,field_two,hide_zero_risk))
], null),jasminegui$riskviews$multiple_portfolio_risk_controller_$_iter__47635(cljs.core.rest(s__47636__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"50px"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,new cljs.core.Keyword(null,"model","model",331153215),hide_zero_risk,new cljs.core.Keyword(null,"label","label",1718410804),"Hide zero positions in table view",new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(display_style),"Tree"),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__47617_SHARP_){
var G__47641 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),p1__47617_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47641) : re_frame.core.dispatch.call(null,G__47641));
})], null)], null)], 0)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.riskviews.multiple_portfolio_risk_display], null)], null)], null)], null);
});
jasminegui.riskviews.portfolio_alignment_risk_controller = (function jasminegui$riskviews$portfolio_alignment_risk_controller(){
var display_style = (function (){var G__47647 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47647) : re_frame.core.subscribe.call(null,G__47647));
})();
var risk_filter = (function (){var G__47648 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47648) : re_frame.core.subscribe.call(null,G__47648));
})();
var portfolio_alignment_group = (function (){var G__47649 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47649) : re_frame.core.subscribe.call(null,G__47649));
})();
var field = (function (){var G__47650 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47650) : re_frame.core.subscribe.call(null,G__47650));
})();
var threshold = (function (){var G__47651 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47651) : re_frame.core.subscribe.call(null,G__47651));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),["Portfolio drill-down ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__47653 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47653) : re_frame.core.subscribe.call(null,G__47653));
})()))].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"15px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Display type:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Field:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Threshold:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),display_style,new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"Table",new cljs.core.Keyword(null,"label","label",1718410804),"Table"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"Tree",new cljs.core.Keyword(null,"label","label",1718410804),"Tree"], null)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__47642_SHARP_){
var G__47654 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),p1__47642_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47654) : re_frame.core.dispatch.call(null,G__47654));
})], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),field,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.field_choices_alignment,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__47643_SHARP_){
var G__47655 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),p1__47643_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47655) : re_frame.core.dispatch.call(null,G__47655));
})], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),threshold,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.threshold_choices_alignment,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__47644_SHARP_){
var G__47656 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),p1__47644_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47656) : re_frame.core.dispatch.call(null,G__47656));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"50px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Filtering:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),portfolio_alignment_group,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.portfolio_alignment_groups,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__47645_SHARP_){
var G__47657 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),p1__47645_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47657) : re_frame.core.dispatch.call(null,G__47657));
})], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$riskviews$portfolio_alignment_risk_controller_$_iter__47658(s__47659){
return (new cljs.core.LazySeq(null,(function (){
var s__47659__$1 = s__47659;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47659__$1);
if(temp__5735__auto__){
var s__47659__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47659__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47659__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47661 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47660 = (0);
while(true){
if((i__47660 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__47660);
cljs.core.chunk_append(b__47661,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),reagent.core.cursor(risk_filter,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null)),new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.risk_choice_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__47660,i,c__4527__auto__,size__4528__auto__,b__47661,s__47659__$2,temp__5735__auto__,display_style,risk_filter,portfolio_alignment_group,field,threshold){
return (function (p1__47646_SHARP_){
var G__47662 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),i,p1__47646_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47662) : re_frame.core.dispatch.call(null,G__47662));
});})(i__47660,i,c__4527__auto__,size__4528__auto__,b__47661,s__47659__$2,temp__5735__auto__,display_style,risk_filter,portfolio_alignment_group,field,threshold))
], null));

var G__47729 = (i__47660 + (1));
i__47660 = G__47729;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47661),jasminegui$riskviews$portfolio_alignment_risk_controller_$_iter__47658(cljs.core.chunk_rest(s__47659__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47661),null);
}
} else {
var i = cljs.core.first(s__47659__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.riskviews.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),reagent.core.cursor(risk_filter,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null)),new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.risk_choice_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i,s__47659__$2,temp__5735__auto__,display_style,risk_filter,portfolio_alignment_group,field,threshold){
return (function (p1__47646_SHARP_){
var G__47663 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),i,p1__47646_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47663) : re_frame.core.dispatch.call(null,G__47663));
});})(i,s__47659__$2,temp__5735__auto__,display_style,risk_filter,portfolio_alignment_group,field,threshold))
], null),jasminegui$riskviews$portfolio_alignment_risk_controller_$_iter__47658(cljs.core.rest(s__47659__$2)));
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
var positions = cljs.core.deref((function (){var G__47665 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47665) : re_frame.core.subscribe.call(null,G__47665));
})());
var portfolios = cljs.core.deref((function (){var G__47666 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47666) : re_frame.core.subscribe.call(null,G__47666));
})());
var totals = cljs.core.deref((function (){var G__47667 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47667) : re_frame.core.subscribe.call(null,G__47667));
})());
var display = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$riskviews$summary_display_$_iter__47668(s__47669){
return (new cljs.core.LazySeq(null,(function (){
var s__47669__$1 = s__47669;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47669__$1);
if(temp__5735__auto__){
var s__47669__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47669__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47669__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47671 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47670 = (0);
while(true){
if((i__47670 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__47670);
cljs.core.chunk_append(b__47671,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"portfolio","portfolio",957568598),p], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = ((function (i__47670,p,c__4527__auto__,size__4528__auto__,b__47671,s__47669__$2,temp__5735__auto__,positions,portfolios,totals){
return (function jasminegui$riskviews$summary_display_$_iter__47668_$_iter__47672(s__47673){
return (new cljs.core.LazySeq(null,((function (i__47670,p,c__4527__auto__,size__4528__auto__,b__47671,s__47669__$2,temp__5735__auto__,positions,portfolios,totals){
return (function (){
var s__47673__$1 = s__47673;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__47673__$1);
if(temp__5735__auto____$1){
var s__47673__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47673__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__47673__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__47675 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__47674 = (0);
while(true){
if((i__47674 < size__4528__auto____$1)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto____$1,i__47674);
cljs.core.chunk_append(b__47675,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(totals,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null));

var G__47730 = (i__47674 + (1));
i__47674 = G__47730;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47675),jasminegui$riskviews$summary_display_$_iter__47668_$_iter__47672(cljs.core.chunk_rest(s__47673__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47675),null);
}
} else {
var k = cljs.core.first(s__47673__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(totals,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null),jasminegui$riskviews$summary_display_$_iter__47668_$_iter__47672(cljs.core.rest(s__47673__$2)));
}
} else {
return null;
}
break;
}
});})(i__47670,p,c__4527__auto__,size__4528__auto__,b__47671,s__47669__$2,temp__5735__auto__,positions,portfolios,totals))
,null,null));
});})(i__47670,p,c__4527__auto__,size__4528__auto__,b__47671,s__47669__$2,temp__5735__auto__,positions,portfolios,totals))
;
return iter__4529__auto__(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175),new cljs.core.Keyword(null,"base-value","base-value",921379228),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067),new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030),new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342)], null));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(totals,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861)], null)) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__47670,p,c__4527__auto__,size__4528__auto__,b__47671,s__47669__$2,temp__5735__auto__,positions,portfolios,totals){
return (function (p1__47664_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__47664_SHARP_),p)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-class","asset-class",1845554418).cljs$core$IFn$_invoke$arity$1(p1__47664_SHARP_),"BONDS")));
});})(i__47670,p,c__4527__auto__,size__4528__auto__,b__47671,s__47669__$2,temp__5735__auto__,positions,portfolios,totals))
,positions))))], null)], 0)));

var G__47731 = (i__47670 + (1));
i__47670 = G__47731;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47671),jasminegui$riskviews$summary_display_$_iter__47668(cljs.core.chunk_rest(s__47669__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47671),null);
}
} else {
var p = cljs.core.first(s__47669__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"portfolio","portfolio",957568598),p], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = ((function (p,s__47669__$2,temp__5735__auto__,positions,portfolios,totals){
return (function jasminegui$riskviews$summary_display_$_iter__47668_$_iter__47676(s__47677){
return (new cljs.core.LazySeq(null,(function (){
var s__47677__$1 = s__47677;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__47677__$1);
if(temp__5735__auto____$1){
var s__47677__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47677__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47677__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47679 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47678 = (0);
while(true){
if((i__47678 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__47678);
cljs.core.chunk_append(b__47679,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(totals,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null));

var G__47732 = (i__47678 + (1));
i__47678 = G__47732;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47679),jasminegui$riskviews$summary_display_$_iter__47668_$_iter__47676(cljs.core.chunk_rest(s__47677__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47679),null);
}
} else {
var k = cljs.core.first(s__47677__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(totals,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null),jasminegui$riskviews$summary_display_$_iter__47668_$_iter__47676(cljs.core.rest(s__47677__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(p,s__47669__$2,temp__5735__auto__,positions,portfolios,totals))
;
return iter__4529__auto__(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175),new cljs.core.Keyword(null,"base-value","base-value",921379228),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067),new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030),new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342)], null));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(totals,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861)], null)) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (p,s__47669__$2,temp__5735__auto__,positions,portfolios,totals){
return (function (p1__47664_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__47664_SHARP_),p)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-class","asset-class",1845554418).cljs$core$IFn$_invoke$arity$1(p1__47664_SHARP_),"BONDS")));
});})(p,s__47669__$2,temp__5735__auto__,positions,portfolios,totals))
,positions))))], null)], 0)),jasminegui$riskviews$summary_display_$_iter__47668(cljs.core.rest(s__47669__$2)));
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
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),["Summary ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__47681 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47681) : re_frame.core.subscribe.call(null,G__47681));
})()))].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data","data",-232669377),display,new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Portfolio",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"portfolio",new cljs.core.Keyword(null,"width","width",-384071477),(120)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Balance",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.riskviews.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Value",new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__47682 = new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861);
return (jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(G__47682) : jasminegui.riskviews.table_columns.call(null,G__47682));
})(),new cljs.core.Keyword(null,"Header","Header",1255420133),"Yield"),(function (){var G__47683 = new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737);
return (jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(G__47683) : jasminegui.riskviews.table_columns.call(null,G__47683));
})(),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__47684 = new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105);
return (jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(G__47684) : jasminegui.riskviews.table_columns.call(null,G__47684));
})(),new cljs.core.Keyword(null,"Header","Header",1255420133),"M Dur"),(function (){var G__47685 = new cljs.core.Keyword(null,"rating","rating",144173662);
return (jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(G__47685) : jasminegui.riskviews.table_columns.call(null,G__47685));
})(),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__47686 = new cljs.core.Keyword(null,"rating-score","rating-score",1260592885);
return (jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(G__47686) : jasminegui.riskviews.table_columns.call(null,G__47686));
})(),new cljs.core.Keyword(null,"width","width",-384071477),(60)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__47687 = new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067);
return (jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(G__47687) : jasminegui.riskviews.table_columns.call(null,G__47687));
})(),new cljs.core.Keyword(null,"Header","Header",1255420133),"Z-spread"),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__47688 = new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030);
return (jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.riskviews.table_columns.cljs$core$IFn$_invoke$arity$1(G__47688) : jasminegui.riskviews.table_columns.call(null,G__47688));
})(),new cljs.core.Keyword(null,"Header","Header",1255420133),"G-spread")], null)], null)], null),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),false,new cljs.core.Keyword(null,"pageSize","pageSize",732080883),cljs.core.count(portfolios),new cljs.core.Keyword(null,"className","className",-1983287057),"-striped -highlight"], null)], null)], null)], null)], null);
});

//# sourceMappingURL=jasminegui.riskviews.js.map
