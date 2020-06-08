goog.provide('jasminegui.tables');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.i18n.NumberFormat');
goog.require('goog.i18n.NumberFormat.Format');
jasminegui.tables.sum_rows = (function jasminegui$tables$sum_rows(vals){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,vals);
});
jasminegui.tables.median = (function jasminegui$tables$median(coll){
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
jasminegui.tables.nff = (new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL));
jasminegui.tables.nf = (function jasminegui$tables$nf(x){
return jasminegui.tables.nff.format(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
});
jasminegui.tables.round_to_thousand = (function jasminegui$tables$round_to_thousand(x){
return ((1000) * ((x / 1000.0) | (0)));
});
jasminegui.tables.tnfmt = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.nf,jasminegui.tables.round_to_thousand);
jasminegui.tables.nfcell = (function jasminegui$tables$nfcell(this$){
return reagent.core.as_element((function (){var temp__5733__auto__ = (this$["value"]);
if(cljs.core.truth_(temp__5733__auto__)){
var x = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),jasminegui.tables.nf((x | (0)))], null);
} else {
return "-";
}
})());
});
jasminegui.tables.case_insensitive_filter = (function jasminegui$tables$case_insensitive_filter(filterfn,row){

return cljs.core.str.cljs$core$IFn$_invoke$arity$1((row[(filterfn["id"])])).toLowerCase().includes((filterfn["value"]).toLowerCase());
});
jasminegui.tables.txt_format = (function jasminegui$tables$txt_format(fmt,m,this$){
return reagent.core.as_element((function (){var temp__5733__auto__ = (this$["value"]);
if(cljs.core.truth_(temp__5733__auto__)){
var x = temp__5733__auto__;
var G__42254 = fmt;
var G__42255 = (m * x);
return goog.string.format(G__42254,G__42255);
} else {
return "-";
}
})());
});
jasminegui.tables.round3 = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(jasminegui.tables.txt_format,"%.3f",1.0);
jasminegui.tables.round2 = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(jasminegui.tables.txt_format,"%.2f",1.0);
jasminegui.tables.round1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(jasminegui.tables.txt_format,"%.1f",1.0);
jasminegui.tables.yield_format = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(jasminegui.tables.txt_format,"%.2f%",1.0);
jasminegui.tables.zspread_format = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(jasminegui.tables.txt_format,"%.0fbps",1.0);
jasminegui.tables.round2_STAR_100 = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(jasminegui.tables.txt_format,"%.2f",100.0);
jasminegui.tables.rating_sort = (function jasminegui$tables$rating_sort(a,b){
var t = cljs.core.deref((function (){var G__42256 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42256) : re_frame.core.subscribe.call(null,G__42256));
})());
return ((function (){var G__42257 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(a);
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(G__42257) : t.call(null,G__42257));
})() <= (function (){var G__42258 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(b);
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(G__42258) : t.call(null,G__42258));
})());
});
jasminegui.tables.roundpc = (function jasminegui$tables$roundpc(fmt,this$){
return reagent.core.as_element((function (){var temp__5733__auto__ = (this$["value"]);
if(cljs.core.truth_(temp__5733__auto__)){
var x = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(((x < (0)))?"red":"black")], null)], null),(function (){var G__42259 = fmt;
var G__42260 = ((100) * x);
return goog.string.format(G__42259,G__42260);
})()], null);
} else {
return "-";
}
})());
});
jasminegui.tables.round0pc = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.roundpc,"%.0f%");
jasminegui.tables.round1pc = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.roundpc,"%.1f%");
jasminegui.tables.round2pc = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.roundpc,"%.2f%");
jasminegui.tables.round1pcytd = (function jasminegui$tables$round1pcytd(this$){
return reagent.core.as_element((function (){var temp__5733__auto__ = (this$["value"]);
if(cljs.core.truth_(temp__5733__auto__)){
var x = temp__5733__auto__;
var style = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((x < (0)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)),(cljs.core.truth_((this$["row"]["thisyear"]))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic"], null):cljs.core.PersistentArrayMap.EMPTY)], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style], null),(function (){var G__42261 = "%.1f%";
var G__42262 = ((100) * x);
return goog.string.format(G__42261,G__42262);
})()], null);
} else {
return "-";
}
})());
});
jasminegui.tables.compare_nb = (function jasminegui$tables$compare_nb(filterfn,row){

var input = (filterfn["value"]);
var rowval = (row[(filterfn["id"])]);
var G__42265 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(input,(0),(1));
switch (G__42265) {
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
jasminegui.tables.rating_score_to_string = (function jasminegui$tables$rating_score_to_string(this$){
return (this$["row"]["qt-iam-int-lt-median-rating"]);
});
jasminegui.tables.table_columns = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"yield","yield",177875009),new cljs.core.Keyword(null,"z-spread","z-spread",-1184367967),new cljs.core.Keyword(null,"weight-delta","weight-delta",-1239784638),new cljs.core.Keyword(null,"nominal","nominal",413899877),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067),new cljs.core.Keyword(null,"bm-weight","bm-weight",217267431),new cljs.core.Keyword(null,"mdur-delta","mdur-delta",-395332953),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"maturity-band","maturity-band",760694665),new cljs.core.Keyword(null,"sector","sector",-1444247062),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175),new cljs.core.Keyword(null,"bm-contrib-eir-duration","bm-contrib-eir-duration",1013923984),new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030),new cljs.core.Keyword(null,"bm-contrib-yield","bm-contrib-yield",-1399804238),new cljs.core.Keyword(null,"id-show","id-show",1455582548),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"rating-score","rating-score",1260592885),new cljs.core.Keyword(null,"isin","isin",-1197420747),new cljs.core.Keyword(null,"issuer","issuer",-1199257898),new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737),new cljs.core.Keyword(null,"country","country",312965309),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"g-spread","g-spread",973847710),new cljs.core.Keyword(null,"contrib-beta","contrib-beta",-2120440514),new cljs.core.Keyword(null,"rating","rating",144173662)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"thinkFolio ID",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"description",new cljs.core.Keyword(null,"width","width",-384071477),(500)], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Yield",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"qt-yield",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.tables.median,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round2pc,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),true,new cljs.core.Keyword(null,"filterMethod","filterMethod",-1560228661),jasminegui.tables.compare_nb], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Z-spread",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"qt-libor-spread",new cljs.core.Keyword(null,"width","width",-384071477),(80),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.tables.median,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.nfcell,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),true,new cljs.core.Keyword(null,"filterMethod","filterMethod",-1560228661),jasminegui.tables.compare_nb], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Delta",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"weight-delta",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.tables.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round2_STAR_100,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),true,new cljs.core.Keyword(null,"filterMethod","filterMethod",-1560228661),jasminegui.tables.compare_nb], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Nominal",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"original-quantity",new cljs.core.Keyword(null,"width","width",-384071477),(120),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.tables.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.nfcell,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),true,new cljs.core.Keyword(null,"filterMethod","filterMethod",-1560228661),jasminegui.tables.compare_nb], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Fund",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"contrib-yield",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.tables.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round2pc,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Fund",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"contrib-zspread",new cljs.core.Keyword(null,"width","width",-384071477),(80),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.tables.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round1,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Index",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"bm-weight",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.tables.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round2_STAR_100,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),true,new cljs.core.Keyword(null,"filterMethod","filterMethod",-1560228661),jasminegui.tables.compare_nb], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Delta",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"mdur-delta",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.tables.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round2,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Name",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"NAME",new cljs.core.Keyword(null,"width","width",-384071477),(140)], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Value",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"base-value",new cljs.core.Keyword(null,"width","width",-384071477),(120),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.tables.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.nfcell,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),true,new cljs.core.Keyword(null,"filterMethod","filterMethod",-1560228661),jasminegui.tables.compare_nb], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Maturity",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"qt-final-maturity-band",new cljs.core.Keyword(null,"width","width",-384071477),(140)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Sector",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"qt-jpm-sector",new cljs.core.Keyword(null,"width","width",-384071477),(140)], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"Header","Header",1255420133),"M dur",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"qt-modified-duration",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.tables.median,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round2,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),true,new cljs.core.Keyword(null,"filterMethod","filterMethod",-1560228661),jasminegui.tables.compare_nb], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Cash",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"cash-pct",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round2pc,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Index",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"bm-contrib-eir-duration",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.tables.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round2,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Region",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"jpm-region",new cljs.core.Keyword(null,"width","width",-384071477),(140)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Fund",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"contrib-mdur",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.tables.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round2,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),"G-spread",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"contrib-gspread",new cljs.core.Keyword(null,"width","width",-384071477),(80),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.tables.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round1,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Index",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"bm-contrib-yield",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.tables.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round2pc,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"ID",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"id",new cljs.core.Keyword(null,"width","width",-384071477),(75)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"ID",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"id",new cljs.core.Keyword(null,"show","show",-576705889),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Rating",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"qt-iam-int-lt-median-rating-score",new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.rating_score_to_string,new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),cljs.core.first], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"ISIN",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"isin",new cljs.core.Keyword(null,"width","width",-384071477),(125)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Issuer",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"TICKER",new cljs.core.Keyword(null,"width","width",-384071477),(140)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Bond yield",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"contrib-bond-yield",new cljs.core.Keyword(null,"width","width",-384071477),(80),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round2pc,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Country",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"qt-risk-country-name",new cljs.core.Keyword(null,"width","width",-384071477),(140)], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Fund",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"weight",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.tables.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round2_STAR_100,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),true,new cljs.core.Keyword(null,"filterMethod","filterMethod",-1560228661),jasminegui.tables.compare_nb], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"Header","Header",1255420133),"G-spread",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"qt-govt-spread",new cljs.core.Keyword(null,"width","width",-384071477),(80),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.tables.median,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.nfcell,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),true,new cljs.core.Keyword(null,"filterMethod","filterMethod",-1560228661),jasminegui.tables.compare_nb], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Fund",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"contrib-beta-1y-daily",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.tables.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round2,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Rating",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"qt-iam-int-lt-median-rating",new cljs.core.Keyword(null,"show","show",-576705889),false], null)]);

//# sourceMappingURL=jasminegui.tables.js.map
