goog.provide('jasminegui.mount');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('jasminegui.static$');
goog.require('re_frame.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('jasminegui.tables');
jasminegui.mount.dev_server_address = "http://localhost:3501/";
jasminegui.mount.prod_server_address = "http://iamlfilive:3501/";
jasminegui.mount.server_address = jasminegui.mount.prod_server_address;
jasminegui.mount.default_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword("portfolio-review","alpha-chart-data","portfolio-review/alpha-chart-data",-243291168),new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679),new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705),new cljs.core.Keyword("multiple-portfolio-attribution","field-two","multiple-portfolio-attribution/field-two",-311759422),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword("multiple-portfolio-attribution","field-number","multiple-portfolio-attribution/field-number",-1780989148),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword(null,"active-var","active-var",-1787478523),new cljs.core.Keyword("single-bond-trade-history","bond","single-bond-trade-history/bond",2015871973),new cljs.core.Keyword("trade-history","active-bond","trade-history/active-bond",-1419462650),new cljs.core.Keyword(null,"active-attribution","active-attribution",-792819194),new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-bond-trade-history","show-flat-modal","single-bond-trade-history/show-flat-modal",1072491400),new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047),new cljs.core.Keyword("multiple-portfolio-attribution","display-style","multiple-portfolio-attribution/display-style",-767260119),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("var","result","var/result",1415073996),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738),new cljs.core.Keyword("attribution","summary","attribution/summary",687462095),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("var","history","var/history",-246458543),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("portfolio-review","summary-data","portfolio-review/summary-data",-1362975725),new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181),new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219),new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("multiple-portfolio-attribution","shortcut","multiple-portfolio-attribution/shortcut",809107380),new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("single-portfolio-attribution","table-filter","single-portfolio-attribution/table-filter",1757441687),new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("single-bond-trade-history","show-modal","single-bond-trade-history/show-modal",-1585088359),new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321),new cljs.core.Keyword(null,"success-modal","success-modal",-1899350535),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127),new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334),new cljs.core.Keyword(null,"show-mounting-modal","show-mounting-modal",-1469130950),new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("portfolio-review","contribution-chart-data","portfolio-review/contribution-chart-data",-581811845),new cljs.core.Keyword("portfolio-review","active-tab","portfolio-review/active-tab",1429822843),new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword("single-portfolio-attribution","shortcut","single-portfolio-attribution/shortcut",-1711481988),new cljs.core.Keyword("trade-history","history","trade-history/history",1084885309),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),new cljs.core.Keyword("multiple-portfolio-attribution","table-filter","multiple-portfolio-attribution/table-filter",-9483585)],[(1),new cljs.core.Keyword(null,"summary","summary",380847952),null,"OGEMCORD","Tree",cljs.core.PersistentVector.EMPTY,"None",null,null,"One","Table",new cljs.core.Keyword(null,"overview","overview",-435037267),null,null,new cljs.core.Keyword(null,"summary","summary",380847952),"undefined",new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),true,true,false,cljs.core.PersistentVector.EMPTY,"Tree",cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),"undefined",cljs.core.PersistentVector.EMPTY,null,cljs.core.set(null),new cljs.core.Keyword(null,"quarter","quarter",-508147616),"Tree",null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),null,(1),null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),"OGEMCORD",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),(1),new cljs.core.Keyword(null,"daily-3y","daily-3y",-2143971824),"ytd","None",cljs.core.PersistentVector.EMPTY,(1),"One","Tree",false,"OGEMCORD",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show","show",-576705889),false,new cljs.core.Keyword(null,"on-close","on-close",-761178394),null,new cljs.core.Keyword(null,"response","response",-1068424192),null], null),cljs.core.set(null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,true,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),new cljs.core.Keyword(null,"total-effect","total-effect",-967715775),cljs.core.PersistentArrayMap.EMPTY,null,new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"home","home",-74557309),(1),null,"OGEMCORD",new cljs.core.Keyword(null,"cembi","cembi",1924920241),"ytd",cljs.core.PersistentVector.EMPTY,true,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),cljs.core.PersistentVector.EMPTY]);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jasminegui.mount","initialize-db","jasminegui.mount/initialize-db",-1621527627),(function (_,___$1){
return jasminegui.mount.default_db;
}));
var seq__49578_50041 = cljs.core.seq(cljs.core.keys(jasminegui.mount.default_db));
var chunk__49579_50042 = null;
var count__49580_50043 = (0);
var i__49581_50044 = (0);
while(true){
if((i__49581_50044 < count__49580_50043)){
var k_50048 = chunk__49579_50042.cljs$core$IIndexed$_nth$arity$2(null,i__49581_50044);
var G__49586_50049 = k_50048;
var G__49587_50050 = ((function (seq__49578_50041,chunk__49579_50042,count__49580_50043,i__49581_50044,G__49586_50049,k_50048){
return (function (db){
return (k_50048.cljs$core$IFn$_invoke$arity$1 ? k_50048.cljs$core$IFn$_invoke$arity$1(db) : k_50048.call(null,db));
});})(seq__49578_50041,chunk__49579_50042,count__49580_50043,i__49581_50044,G__49586_50049,k_50048))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49586_50049,G__49587_50050) : re_frame.core.reg_sub.call(null,G__49586_50049,G__49587_50050));


var G__50051 = seq__49578_50041;
var G__50052 = chunk__49579_50042;
var G__50053 = count__49580_50043;
var G__50054 = (i__49581_50044 + (1));
seq__49578_50041 = G__50051;
chunk__49579_50042 = G__50052;
count__49580_50043 = G__50053;
i__49581_50044 = G__50054;
continue;
} else {
var temp__5735__auto___50056 = cljs.core.seq(seq__49578_50041);
if(temp__5735__auto___50056){
var seq__49578_50057__$1 = temp__5735__auto___50056;
if(cljs.core.chunked_seq_QMARK_(seq__49578_50057__$1)){
var c__4556__auto___50058 = cljs.core.chunk_first(seq__49578_50057__$1);
var G__50059 = cljs.core.chunk_rest(seq__49578_50057__$1);
var G__50060 = c__4556__auto___50058;
var G__50061 = cljs.core.count(c__4556__auto___50058);
var G__50062 = (0);
seq__49578_50041 = G__50059;
chunk__49579_50042 = G__50060;
count__49580_50043 = G__50061;
i__49581_50044 = G__50062;
continue;
} else {
var k_50063 = cljs.core.first(seq__49578_50057__$1);
var G__49588_50064 = k_50063;
var G__49589_50065 = ((function (seq__49578_50041,chunk__49579_50042,count__49580_50043,i__49581_50044,G__49588_50064,k_50063,seq__49578_50057__$1,temp__5735__auto___50056){
return (function (db){
return (k_50063.cljs$core$IFn$_invoke$arity$1 ? k_50063.cljs$core$IFn$_invoke$arity$1(db) : k_50063.call(null,db));
});})(seq__49578_50041,chunk__49579_50042,count__49580_50043,i__49581_50044,G__49588_50064,k_50063,seq__49578_50057__$1,temp__5735__auto___50056))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49588_50064,G__49589_50065) : re_frame.core.reg_sub.call(null,G__49588_50064,G__49589_50065));


var G__50077 = cljs.core.next(seq__49578_50057__$1);
var G__50078 = null;
var G__50079 = (0);
var G__50080 = (0);
seq__49578_50041 = G__50077;
chunk__49579_50042 = G__50078;
count__49580_50043 = G__50079;
i__49581_50044 = G__50080;
continue;
}
} else {
}
}
break;
}
jasminegui.mount.first_level_sort = (function jasminegui$mount$first_level_sort(x){
var G__49590 = x;
switch (G__49590) {
case "Cash":
return "AAA";

break;
case "Collateral":
return "ZZZ";

break;
case "Forwards":
return "ZZZ";

break;
case "Equities":
return "ZZZ";

break;
default:
return x;

}
});
jasminegui.mount.add_total_line_to_pivot = (function jasminegui$mount$add_total_line_to_pivot(pivoted_table,kportfolios){
var total_line = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"jpm-region","jpm-region",-2074265852),"Total",new cljs.core.Keyword(null,"qt-jpm-sector","qt-jpm-sector",1047055349),"Total",new cljs.core.Keyword(null,"qt-risk-country-name","qt-risk-country-name",1182905474),"Total",new cljs.core.Keyword(null,"TICKER","TICKER",-1215969144),"Total",new cljs.core.Keyword(null,"NAME","NAME",-1127916515),"Total",new cljs.core.Keyword(null,"description","description",-1428560544),"Total",new cljs.core.Keyword(null,"isin","isin",-1197420747),"Total",new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),"Total"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$add_total_line_to_pivot_$_iter__49592(s__49593){
return (new cljs.core.LazySeq(null,(function (){
var s__49593__$1 = s__49593;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49593__$1);
if(temp__5735__auto__){
var s__49593__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49593__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49593__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49595 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49594 = (0);
while(true){
if((i__49594 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__49594);
cljs.core.chunk_append(b__49595,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(p,pivoted_table))], null));

var G__50086 = (i__49594 + (1));
i__49594 = G__50086;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49595),jasminegui$mount$add_total_line_to_pivot_$_iter__49592(cljs.core.chunk_rest(s__49593__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49595),null);
}
} else {
var p = cljs.core.first(s__49593__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(p,pivoted_table))], null),jasminegui$mount$add_total_line_to_pivot_$_iter__49592(cljs.core.rest(s__49593__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(kportfolios);
})())], 0));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pivoted_table,total_line);
});
jasminegui.mount.add_total_line_to_attribution_pivot = (function jasminegui$mount$add_total_line_to_attribution_pivot(pivoted_table,kportfolios){
var template = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$add_total_line_to_attribution_pivot_$_iter__49596(s__49597){
return (new cljs.core.LazySeq(null,(function (){
var s__49597__$1 = s__49597;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49597__$1);
if(temp__5735__auto__){
var s__49597__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49597__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49597__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49599 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49598 = (0);
while(true){
if((i__49598 < size__4528__auto__)){
var vec__49600 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__49598);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49600,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49600,(1),null);
cljs.core.chunk_append(b__49599,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,"Total"], null));

var G__50134 = (i__49598 + (1));
i__49598 = G__50134;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49599),jasminegui$mount$add_total_line_to_attribution_pivot_$_iter__49596(cljs.core.chunk_rest(s__49597__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49599),null);
}
} else {
var vec__49603 = cljs.core.first(s__49597__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49603,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49603,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,"Total"], null),jasminegui$mount$add_total_line_to_attribution_pivot_$_iter__49596(cljs.core.rest(s__49597__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.first(pivoted_table));
})());
var total_line = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([template,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$add_total_line_to_attribution_pivot_$_iter__49606(s__49607){
return (new cljs.core.LazySeq(null,(function (){
var s__49607__$1 = s__49607;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49607__$1);
if(temp__5735__auto__){
var s__49607__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49607__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49607__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49609 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49608 = (0);
while(true){
if((i__49608 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__49608);
cljs.core.chunk_append(b__49609,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(p,pivoted_table))], null));

var G__50158 = (i__49608 + (1));
i__49608 = G__50158;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49609),jasminegui$mount$add_total_line_to_attribution_pivot_$_iter__49606(cljs.core.chunk_rest(s__49607__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49609),null);
}
} else {
var p = cljs.core.first(s__49607__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(p,pivoted_table))], null),jasminegui$mount$add_total_line_to_attribution_pivot_$_iter__49606(cljs.core.rest(s__49607__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(kportfolios);
})())], 0));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pivoted_table,total_line);
});
var G__49613_50164 = new cljs.core.Keyword("single-portfolio-risk","table","single-portfolio-risk/table",-637924467);
var G__49614_50165 = (function (db){
var positions = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db);
var portfolio = new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949).cljs$core$IFn$_invoke$arity$1(db);
var portfolio_total_line = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var G__49616 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(portfolio);
var fexpr__49615 = new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db);
return (fexpr__49615.cljs$core$IFn$_invoke$arity$1 ? fexpr__49615.cljs$core$IFn$_invoke$arity$1(G__49616) : fexpr__49615.call(null,G__49616));
})(),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),"Total",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),"00 Total"], 0));
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477).cljs$core$IFn$_invoke$arity$1(db),"Tree");
var portfolio_positions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49610_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__49610_SHARP_),portfolio);
}),positions);
var viewable_positions = (cljs.core.truth_((((!(is_tree)))?new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951).cljs$core$IFn$_invoke$arity$1(db):false))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49611_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(p1__49611_SHARP_),(0));
}),portfolio_positions):portfolio_positions);
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__49618 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49618) : re_frame.core.subscribe.call(null,G__49618));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49612_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__49612_SHARP_) : rfil.call(null,p1__49612_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__49612_SHARP_) : rfil.call(null,p1__49612_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__49619(s__49620){
return (new cljs.core.LazySeq(null,(function (){
var s__49620__$1 = s__49620;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49620__$1);
if(temp__5735__auto__){
var s__49620__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49620__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49620__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49622 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49621 = (0);
while(true){
if((i__49621 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__49621);
cljs.core.chunk_append(b__49622,(jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.risk_table_columns.call(null,r)));

var G__50179 = (i__49621 + (1));
i__49621 = G__50179;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49622),jasminegui$mount$iter__49619(cljs.core.chunk_rest(s__49620__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49622),null);
}
} else {
var r = cljs.core.first(s__49620__$2);
return cljs.core.cons((jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.risk_table_columns.call(null,r)),jasminegui$mount$iter__49619(cljs.core.rest(s__49620__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(risk_choices,new cljs.core.Keyword(null,"name","name",1843675177))));
})());
var accessors_k = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accessor","accessor",-25476721),grouping_columns));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.mount.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),viewable_positions),portfolio_total_line);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49613_50164,G__49614_50165) : re_frame.core.reg_sub.call(null,G__49613_50164,G__49614_50165));
var G__49624_50180 = new cljs.core.Keyword("single-portfolio-attribution","clean-table","single-portfolio-attribution/clean-table",-391468387);
var G__49625_50181 = (function (db){
var data = new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047).cljs$core$IFn$_invoke$arity$1(db);
var template = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__49626(s__49627){
return (new cljs.core.LazySeq(null,(function (){
var s__49627__$1 = s__49627;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49627__$1);
if(temp__5735__auto__){
var s__49627__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49627__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49627__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49629 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49628 = (0);
while(true){
if((i__49628 < size__4528__auto__)){
var vec__49630 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__49628);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49630,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49630,(1),null);
cljs.core.chunk_append(b__49629,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,"Total"], null));

var G__50183 = (i__49628 + (1));
i__49628 = G__50183;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49629),jasminegui$mount$iter__49626(cljs.core.chunk_rest(s__49627__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49629),null);
}
} else {
var vec__49633 = cljs.core.first(s__49627__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49633,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49633,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,"Total"], null),jasminegui$mount$iter__49626(cljs.core.rest(s__49627__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.first(data));
})());
var portfolio_total_line = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(template,new cljs.core.Keyword(null,"Total-Effect","Total-Effect",-621899613),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"Total-Effect","Total-Effect",-621899613),data)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"Average-Excess-Weight","Average-Excess-Weight",-1096499622),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"Average-Excess-Weight","Average-Excess-Weight",-1096499622),data)),new cljs.core.Keyword(null,"Average-Fund-Weight","Average-Fund-Weight",-1002752835),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"Average-Fund-Weight","Average-Fund-Weight",-1002752835),data)),new cljs.core.Keyword(null,"Average-Index-Weight","Average-Index-Weight",-2015235776),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"Average-Index-Weight","Average-Index-Weight",-2015235776),data)),new cljs.core.Keyword(null,"Fund-Contribution","Fund-Contribution",-1707307960),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"Fund-Contribution","Fund-Contribution",-1707307960),data)),new cljs.core.Keyword(null,"Index-Contribution","Index-Contribution",-1911809958),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"Index-Contribution","Index-Contribution",-1911809958),data))], 0));
var risk_choices = (function (){var rfil = new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49623_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__49623_SHARP_) : rfil.call(null,p1__49623_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__49623_SHARP_) : rfil.call(null,p1__49623_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__49636(s__49637){
return (new cljs.core.LazySeq(null,(function (){
var s__49637__$1 = s__49637;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49637__$1);
if(temp__5735__auto__){
var s__49637__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49637__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49637__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49639 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49638 = (0);
while(true){
if((i__49638 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__49638);
cljs.core.chunk_append(b__49639,(jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.attribution_table_columns.call(null,r)));

var G__50187 = (i__49638 + (1));
i__49638 = G__50187;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49639),jasminegui$mount$iter__49636(cljs.core.chunk_rest(s__49637__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49639),null);
}
} else {
var r = cljs.core.first(s__49637__$2);
return cljs.core.cons((jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.attribution_table_columns.call(null,r)),jasminegui$mount$iter__49636(cljs.core.rest(s__49637__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(risk_choices,new cljs.core.Keyword(null,"security","security",886963079))));
})());
var accessors_k = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accessor","accessor",-25476721),grouping_columns));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.mount.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),data),portfolio_total_line);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49624_50180,G__49625_50181) : re_frame.core.reg_sub.call(null,G__49624_50180,G__49625_50181));
var G__49642_50193 = new cljs.core.Keyword("multiple-portfolio-risk","table","multiple-portfolio-risk/table",1962237397);
var G__49643_50194 = (function (db){
var pivoted_positions = new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863).cljs$core$IFn$_invoke$arity$1(db);
var kselected_portfolios = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045).cljs$core$IFn$_invoke$arity$1(db));
var hide_zero_risk = new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337).cljs$core$IFn$_invoke$arity$1(db);
var display_key_one = new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337).cljs$core$IFn$_invoke$arity$1(db);
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547).cljs$core$IFn$_invoke$arity$1(db),"Tree");
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__49644 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49644) : re_frame.core.subscribe.call(null,G__49644));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49640_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__49640_SHARP_) : rfil.call(null,p1__49640_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__49640_SHARP_) : rfil.call(null,p1__49640_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__49645(s__49646){
return (new cljs.core.LazySeq(null,(function (){
var s__49646__$1 = s__49646;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49646__$1);
if(temp__5735__auto__){
var s__49646__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49646__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49646__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49648 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49647 = (0);
while(true){
if((i__49647 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__49647);
cljs.core.chunk_append(b__49648,(jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.risk_table_columns.call(null,r)));

var G__50206 = (i__49647 + (1));
i__49647 = G__50206;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49648),jasminegui$mount$iter__49645(cljs.core.chunk_rest(s__49646__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49648),null);
}
} else {
var r = cljs.core.first(s__49646__$2);
return cljs.core.cons((jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.risk_table_columns.call(null,r)),jasminegui$mount$iter__49645(cljs.core.rest(s__49646__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(risk_choices,new cljs.core.Keyword(null,"name","name",1843675177))));
})());
var accessors_k = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accessor","accessor",-25476721),grouping_columns));
var pivoted_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49641_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__49641_SHARP_,(function (){var fexpr__49649 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.risk_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_one,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__49649.cljs$core$IFn$_invoke$arity$1 ? fexpr__49649.cljs$core$IFn$_invoke$arity$1(p1__49641_SHARP_) : fexpr__49649.call(null,p1__49641_SHARP_));
})()], 0));
}),pivoted_positions);
var thfil = (function (line){
return (!(cljs.core.every_QMARK_(cljs.core.zero_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(line,kselected_portfolios))));
});
var pivoted_data_hide_zero = (cljs.core.truth_((((!(is_tree)))?hide_zero_risk:false))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(thfil,pivoted_data):pivoted_data);
return jasminegui.mount.add_total_line_to_pivot(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.mount.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),pivoted_data_hide_zero),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(db)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49642_50193,G__49643_50194) : re_frame.core.reg_sub.call(null,G__49642_50193,G__49643_50194));
var G__49652_50216 = new cljs.core.Keyword("multiple-portfolio-attribution","clean-table","multiple-portfolio-attribution/clean-table",-1066824107);
var G__49653_50217 = (function (db){
var pivoted_positions = new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705).cljs$core$IFn$_invoke$arity$1(db);
var kselected_portfolios = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959).cljs$core$IFn$_invoke$arity$1(db));
var display_key_one = new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707).cljs$core$IFn$_invoke$arity$1(db);
var attribution_choices = (function (){var rfil = cljs.core.deref((function (){var G__49654 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49654) : re_frame.core.subscribe.call(null,G__49654));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49650_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__49650_SHARP_) : rfil.call(null,p1__49650_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__49650_SHARP_) : rfil.call(null,p1__49650_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__49655(s__49656){
return (new cljs.core.LazySeq(null,(function (){
var s__49656__$1 = s__49656;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49656__$1);
if(temp__5735__auto__){
var s__49656__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49656__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49656__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49658 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49657 = (0);
while(true){
if((i__49657 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__49657);
cljs.core.chunk_append(b__49658,(jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.attribution_table_columns.call(null,r)));

var G__50223 = (i__49657 + (1));
i__49657 = G__50223;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49658),jasminegui$mount$iter__49655(cljs.core.chunk_rest(s__49656__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49658),null);
}
} else {
var r = cljs.core.first(s__49656__$2);
return cljs.core.cons((jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.attribution_table_columns.call(null,r)),jasminegui$mount$iter__49655(cljs.core.rest(s__49656__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attribution_choices,new cljs.core.Keyword(null,"security","security",886963079))));
})());
var accessors_k = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accessor","accessor",-25476721),grouping_columns));
var pivoted_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49651_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__49651_SHARP_,(function (){var fexpr__49659 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_one,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__49659.cljs$core$IFn$_invoke$arity$1 ? fexpr__49659.cljs$core$IFn$_invoke$arity$1(p1__49651_SHARP_) : fexpr__49659.call(null,p1__49651_SHARP_));
})()], 0));
}),pivoted_positions);
return jasminegui.mount.add_total_line_to_attribution_pivot(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.mount.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),pivoted_data),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(db)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49652_50216,G__49653_50217) : re_frame.core.reg_sub.call(null,G__49652_50216,G__49653_50217));
var G__49664_50226 = new cljs.core.Keyword("portfolio-alignment","table","portfolio-alignment/table",-1411501022);
var G__49665_50227 = (function (db){
var group = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49660_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__49660_SHARP_),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110).cljs$core$IFn$_invoke$arity$1(db));
}),jasminegui.static$.portfolio_alignment_groups))));
var pivoted_positions = new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863).cljs$core$IFn$_invoke$arity$1(db);
var base_kportfolio = cljs.core.first(group);
var kportfolios = cljs.core.rest(group);
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__49666 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49666) : re_frame.core.subscribe.call(null,G__49666));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49661_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__49661_SHARP_) : rfil.call(null,p1__49661_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__49661_SHARP_) : rfil.call(null,p1__49661_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__49667(s__49668){
return (new cljs.core.LazySeq(null,(function (){
var s__49668__$1 = s__49668;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49668__$1);
if(temp__5735__auto__){
var s__49668__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49668__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49668__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49670 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49669 = (0);
while(true){
if((i__49669 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__49669);
cljs.core.chunk_append(b__49670,(jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.risk_table_columns.call(null,r)));

var G__50232 = (i__49669 + (1));
i__49669 = G__50232;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49670),jasminegui$mount$iter__49667(cljs.core.chunk_rest(s__49668__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49670),null);
}
} else {
var r = cljs.core.first(s__49668__$2);
return cljs.core.cons((jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.risk_table_columns.call(null,r)),jasminegui$mount$iter__49667(cljs.core.rest(s__49668__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(risk_choices,new cljs.core.Keyword(null,"name","name",1843675177))));
})());
var accessors_k = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accessor","accessor",-25476721),grouping_columns));
var pivoted_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49662_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__49662_SHARP_,(function (){var fexpr__49671 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.risk_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__49671.cljs$core$IFn$_invoke$arity$1 ? fexpr__49671.cljs$core$IFn$_invoke$arity$1(p1__49662_SHARP_) : fexpr__49671.call(null,p1__49662_SHARP_));
})()], 0));
}),pivoted_positions);
var differentiate = (function (line){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (temp_line,p){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(temp_line,p,((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(temp_line) : p.call(null,temp_line)) - (base_kportfolio.cljs$core$IFn$_invoke$arity$1 ? base_kportfolio.cljs$core$IFn$_invoke$arity$1(temp_line) : base_kportfolio.call(null,temp_line))));
}),line,kportfolios);
});
var pivoted_data_diff = cljs.core.map.cljs$core$IFn$_invoke$arity$2(differentiate,pivoted_data);
var threshold = (0.01 * cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49663_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__49663_SHARP_),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053).cljs$core$IFn$_invoke$arity$1(db));
}),jasminegui.static$.threshold_choices_alignment)))));
var thfil = (function (line){
return cljs.core.some((function (x){
return (((x < (- threshold))) || ((x > threshold)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(line,kportfolios));
});
var pivoted_data_diff_post_th = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(thfil,pivoted_data_diff);
return jasminegui.mount.add_total_line_to_pivot(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.mount.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),pivoted_data_diff_post_th),kportfolios);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49664_50226,G__49665_50227) : re_frame.core.reg_sub.call(null,G__49664_50226,G__49665_50227));
var G__49673_50246 = new cljs.core.Keyword("summary-display","table","summary-display/table",1149370831);
var G__49674_50247 = (function (db){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__49675(s__49676){
return (new cljs.core.LazySeq(null,(function (){
var s__49676__$1 = s__49676;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49676__$1);
if(temp__5735__auto__){
var s__49676__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49676__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49676__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49678 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49677 = (0);
while(true){
if((i__49677 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__49677);
cljs.core.chunk_append(b__49678,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"portfolio","portfolio",957568598),p], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = ((function (i__49677,p,c__4527__auto__,size__4528__auto__,b__49678,s__49676__$2,temp__5735__auto__,G__49673_50246){
return (function jasminegui$mount$iter__49675_$_iter__49679(s__49680){
return (new cljs.core.LazySeq(null,((function (i__49677,p,c__4527__auto__,size__4528__auto__,b__49678,s__49676__$2,temp__5735__auto__,G__49673_50246){
return (function (){
var s__49680__$1 = s__49680;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__49680__$1);
if(temp__5735__auto____$1){
var s__49680__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49680__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__49680__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__49682 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__49681 = (0);
while(true){
if((i__49681 < size__4528__auto____$1)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto____$1,i__49681);
cljs.core.chunk_append(b__49682,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null));

var G__50259 = (i__49681 + (1));
i__49681 = G__50259;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49682),jasminegui$mount$iter__49675_$_iter__49679(cljs.core.chunk_rest(s__49680__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49682),null);
}
} else {
var k = cljs.core.first(s__49680__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null),jasminegui$mount$iter__49675_$_iter__49679(cljs.core.rest(s__49680__$2)));
}
} else {
return null;
}
break;
}
});})(i__49677,p,c__4527__auto__,size__4528__auto__,b__49678,s__49676__$2,temp__5735__auto__,G__49673_50246))
,null,null));
});})(i__49677,p,c__4527__auto__,size__4528__auto__,b__49678,s__49676__$2,temp__5735__auto__,G__49673_50246))
;
return iter__4529__auto__(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175),new cljs.core.Keyword(null,"base-value","base-value",921379228),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067),new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030),new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),new cljs.core.Keyword(null,"contrib-beta-1y-daily","contrib-beta-1y-daily",259924328)], null));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861)], null)) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__49677,p,c__4527__auto__,size__4528__auto__,b__49678,s__49676__$2,temp__5735__auto__,G__49673_50246){
return (function (p1__49672_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__49672_SHARP_),p)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-class","asset-class",1845554418).cljs$core$IFn$_invoke$arity$1(p1__49672_SHARP_),"BONDS")));
});})(i__49677,p,c__4527__auto__,size__4528__auto__,b__49678,s__49676__$2,temp__5735__auto__,G__49673_50246))
,new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db)))))], null)], 0)));

var G__50260 = (i__49677 + (1));
i__49677 = G__50260;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49678),jasminegui$mount$iter__49675(cljs.core.chunk_rest(s__49676__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49678),null);
}
} else {
var p = cljs.core.first(s__49676__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"portfolio","portfolio",957568598),p], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = ((function (p,s__49676__$2,temp__5735__auto__,G__49673_50246){
return (function jasminegui$mount$iter__49675_$_iter__49683(s__49684){
return (new cljs.core.LazySeq(null,(function (){
var s__49684__$1 = s__49684;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__49684__$1);
if(temp__5735__auto____$1){
var s__49684__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49684__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49684__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49686 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49685 = (0);
while(true){
if((i__49685 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__49685);
cljs.core.chunk_append(b__49686,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null));

var G__50267 = (i__49685 + (1));
i__49685 = G__50267;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49686),jasminegui$mount$iter__49675_$_iter__49683(cljs.core.chunk_rest(s__49684__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49686),null);
}
} else {
var k = cljs.core.first(s__49684__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null),jasminegui$mount$iter__49675_$_iter__49683(cljs.core.rest(s__49684__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(p,s__49676__$2,temp__5735__auto__,G__49673_50246))
;
return iter__4529__auto__(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175),new cljs.core.Keyword(null,"base-value","base-value",921379228),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067),new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030),new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),new cljs.core.Keyword(null,"contrib-beta-1y-daily","contrib-beta-1y-daily",259924328)], null));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861)], null)) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (p,s__49676__$2,temp__5735__auto__,G__49673_50246){
return (function (p1__49672_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__49672_SHARP_),p)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-class","asset-class",1845554418).cljs$core$IFn$_invoke$arity$1(p1__49672_SHARP_),"BONDS")));
});})(p,s__49676__$2,temp__5735__auto__,G__49673_50246))
,new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db)))))], null)], 0)),jasminegui$mount$iter__49675(cljs.core.rest(s__49676__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(db));
})());
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49673_50246,G__49674_50247) : re_frame.core.reg_sub.call(null,G__49673_50246,G__49674_50247));
var seq__49687_50275 = cljs.core.seq(cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword(null,"active-var","active-var",-1787478523),new cljs.core.Keyword(null,"active-attribution","active-attribution",-792819194),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738),new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334),new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679),new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),new cljs.core.Keyword("single-portfolio-attribution","table-filter","single-portfolio-attribution/table-filter",1757441687),new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047),new cljs.core.Keyword("multiple-portfolio-attribution","display-style","multiple-portfolio-attribution/display-style",-767260119),new cljs.core.Keyword("multiple-portfolio-attribution","field-number","multiple-portfolio-attribution/field-number",-1780989148),new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),new cljs.core.Keyword("multiple-portfolio-attribution","field-two","multiple-portfolio-attribution/field-two",-311759422),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),new cljs.core.Keyword("multiple-portfolio-attribution","hide-zero-holdings","multiple-portfolio-attribution/hide-zero-holdings",1677138723),new cljs.core.Keyword("multiple-portfolio-attribution","shortcut","multiple-portfolio-attribution/shortcut",809107380),new cljs.core.Keyword("multiple-portfolio-attribution","table-filter","multiple-portfolio-attribution/table-filter",-9483585),new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705),new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),new cljs.core.Keyword("attribution","summary","attribution/summary",687462095),new cljs.core.Keyword("single-bond-trade-history","show-flat-modal","single-bond-trade-history/show-flat-modal",1072491400),new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181),new cljs.core.Keyword("single-bond-trade-history","show-modal","single-bond-trade-history/show-modal",-1585088359),new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127),new cljs.core.Keyword("single-bond-trade-history","bond","single-bond-trade-history/bond",2015871973),new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865),new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321),new cljs.core.Keyword("portfolio-review","active-tab","portfolio-review/active-tab",1429822843),new cljs.core.Keyword("portfolio-review","summary-data","portfolio-review/summary-data",-1362975725),new cljs.core.Keyword("portfolio-review","contribution-chart-data","portfolio-review/contribution-chart-data",-581811845),new cljs.core.Keyword("portfolio-review","alpha-chart-data","portfolio-review/alpha-chart-data",-243291168)], true));
var chunk__49688_50276 = null;
var count__49689_50277 = (0);
var i__49690_50278 = (0);
while(true){
if((i__49690_50278 < count__49689_50277)){
var k_50289 = chunk__49688_50276.cljs$core$IIndexed$_nth$arity$2(null,i__49690_50278);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_50289,((function (seq__49687_50275,chunk__49688_50276,count__49689_50277,i__49690_50278,k_50289){
return (function (db,p__49699){
var vec__49700 = p__49699;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49700,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49700,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_50289,data);
});})(seq__49687_50275,chunk__49688_50276,count__49689_50277,i__49690_50278,k_50289))
);


var G__50292 = seq__49687_50275;
var G__50293 = chunk__49688_50276;
var G__50294 = count__49689_50277;
var G__50295 = (i__49690_50278 + (1));
seq__49687_50275 = G__50292;
chunk__49688_50276 = G__50293;
count__49689_50277 = G__50294;
i__49690_50278 = G__50295;
continue;
} else {
var temp__5735__auto___50297 = cljs.core.seq(seq__49687_50275);
if(temp__5735__auto___50297){
var seq__49687_50298__$1 = temp__5735__auto___50297;
if(cljs.core.chunked_seq_QMARK_(seq__49687_50298__$1)){
var c__4556__auto___50300 = cljs.core.chunk_first(seq__49687_50298__$1);
var G__50301 = cljs.core.chunk_rest(seq__49687_50298__$1);
var G__50302 = c__4556__auto___50300;
var G__50303 = cljs.core.count(c__4556__auto___50300);
var G__50304 = (0);
seq__49687_50275 = G__50301;
chunk__49688_50276 = G__50302;
count__49689_50277 = G__50303;
i__49690_50278 = G__50304;
continue;
} else {
var k_50307 = cljs.core.first(seq__49687_50298__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_50307,((function (seq__49687_50275,chunk__49688_50276,count__49689_50277,i__49690_50278,k_50307,seq__49687_50298__$1,temp__5735__auto___50297){
return (function (db,p__49703){
var vec__49704 = p__49703;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49704,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49704,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_50307,data);
});})(seq__49687_50275,chunk__49688_50276,count__49689_50277,i__49690_50278,k_50307,seq__49687_50298__$1,temp__5735__auto___50297))
);


var G__50318 = cljs.core.next(seq__49687_50298__$1);
var G__50319 = null;
var G__50320 = (0);
var G__50321 = (0);
seq__49687_50275 = G__50318;
chunk__49688_50276 = G__50319;
count__49689_50277 = G__50320;
i__49690_50278 = G__50321;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"positions","positions",-1380538434),(function (db,p__49707){
var vec__49708 = p__49707;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49708,(0),null);
var positions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49708,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"positions","positions",-1380538434),positions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-mounting-modal","show-mounting-modal",-1469130950),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127),(function (db,p__49711){
var vec__49712 = p__49711;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49712,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49712,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127),data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181),(function (db,p__49715){
var vec__49716 = p__49715;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49716,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49716,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181),data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),(function (db,p__49719){
var vec__49720 = p__49719;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49720,(0),null);
var portfolios = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49720,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),portfolios,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),cljs.core.set(portfolios),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),cljs.core.set(portfolios)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),(function (db,p__49723){
var vec__49724 = p__49723;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49724,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49724,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49724,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),(function (db,p__49727){
var vec__49728 = p__49727;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49728,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49728,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49728,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),(function (db,p__49731){
var vec__49732 = p__49731;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49732,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49732,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49732,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),(function (db,p__49735){
var vec__49736 = p__49735;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49736,(0),null);
var qt_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49736,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),clojure.string.replace(qt_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),(function (db,p__49739){
var vec__49740 = p__49739;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49740,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49740,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49740,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219),(function (db,p__49743){
var vec__49744 = p__49743;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49744,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49744,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49744,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),(function (db,p__49747){
var vec__49748 = p__49747;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49748,(0),null);
var attribution_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49748,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),clojure.string.replace(attribution_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),(function (db,p__49751){
var vec__49752 = p__49751;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49752,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49752,(1),null);
var G__49755 = snapshot;
switch (G__49755) {
case (1):
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),snapshot);

break;
case (2):
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),snapshot);

break;
case (3):
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),snapshot);

break;
case (4):
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),snapshot);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49755)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cycle-shortcut","cycle-shortcut",-1617058214),(function (db,p__49756){
var vec__49757 = p__49756;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49757,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49757,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49757,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"active-home","active-home",53621216).cljs$core$IFn$_invoke$arity$1(db)),"-risk/shortcut"].join(''));
var shortcut_value = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
if((shortcut_value < (4))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(shortcut_value + (1)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(1));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tree-table","tree-table",-1263002012),(function (db,p__49760){
var vec__49761 = p__49760;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49761,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49761,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49761,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"active-home","active-home",53621216).cljs$core$IFn$_invoke$arity$1(db)),"-risk/display-style"].join(''));
var G__49764 = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
switch (G__49764) {
case "Tree":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Table");

break;
case "Table":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Tree");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49764)].join('')));

}
}));
jasminegui.mount.http_get_dispatch = (function jasminegui$mount$http_get_dispatch(request){
var c__41764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41765__auto__ = (function (){var switch__41741__auto__ = (function (state_49793){
var state_val_49794 = (state_49793[(1)]);
if((state_val_49794 === (1))){
var inst_49765 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_49766 = cljs_http.client.get(inst_49765);
var state_49793__$1 = state_49793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49793__$1,(2),inst_49766);
} else {
if((state_val_49794 === (2))){
var inst_49768 = (state_49793[(2)]);
var inst_49769 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_49770 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_49793__$1 = (function (){var statearr_49795 = state_49793;
(statearr_49795[(7)] = inst_49769);

(statearr_49795[(8)] = inst_49768);

return statearr_49795;
})();
if(cljs.core.truth_(inst_49770)){
var statearr_49796_50346 = state_49793__$1;
(statearr_49796_50346[(1)] = (3));

} else {
var statearr_49797_50347 = state_49793__$1;
(statearr_49797_50347[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (3))){
var inst_49768 = (state_49793[(8)]);
var inst_49772 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_49768);
var inst_49773 = JSON.parse(inst_49772);
var inst_49774 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_49773,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_49793__$1 = state_49793;
var statearr_49798_50349 = state_49793__$1;
(statearr_49798_50349[(2)] = inst_49774);

(statearr_49798_50349[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (4))){
var inst_49768 = (state_49793[(8)]);
var inst_49776 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_49768);
var state_49793__$1 = state_49793;
var statearr_49799_50350 = state_49793__$1;
(statearr_49799_50350[(2)] = inst_49776);

(statearr_49799_50350[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (5))){
var inst_49769 = (state_49793[(7)]);
var inst_49778 = (state_49793[(2)]);
var inst_49779 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_49769,inst_49778);
var inst_49780 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_49779) : re_frame.core.dispatch.call(null,inst_49779));
var inst_49781 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_49793__$1 = (function (){var statearr_49800 = state_49793;
(statearr_49800[(9)] = inst_49780);

return statearr_49800;
})();
if(cljs.core.truth_(inst_49781)){
var statearr_49801_50351 = state_49793__$1;
(statearr_49801_50351[(1)] = (6));

} else {
var statearr_49802_50352 = state_49793__$1;
(statearr_49802_50352[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (6))){
var inst_49783 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49784 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_49785 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_49786 = [inst_49784,inst_49785];
var inst_49787 = (new cljs.core.PersistentVector(null,2,(5),inst_49783,inst_49786,null));
var inst_49788 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_49787) : re_frame.core.dispatch.call(null,inst_49787));
var state_49793__$1 = state_49793;
var statearr_49803_50356 = state_49793__$1;
(statearr_49803_50356[(2)] = inst_49788);

(statearr_49803_50356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (7))){
var state_49793__$1 = state_49793;
var statearr_49804_50357 = state_49793__$1;
(statearr_49804_50357[(2)] = null);

(statearr_49804_50357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (8))){
var inst_49791 = (state_49793[(2)]);
var state_49793__$1 = state_49793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49793__$1,inst_49791);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__ = null;
var jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____0 = (function (){
var statearr_49805 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49805[(0)] = jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__);

(statearr_49805[(1)] = (1));

return statearr_49805;
});
var jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____1 = (function (state_49793){
while(true){
var ret_value__41743__auto__ = (function (){try{while(true){
var result__41744__auto__ = switch__41741__auto__(state_49793);
if(cljs.core.keyword_identical_QMARK_(result__41744__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41744__auto__;
}
break;
}
}catch (e49806){if((e49806 instanceof Object)){
var ex__41745__auto__ = e49806;
var statearr_49807_50379 = state_49793;
(statearr_49807_50379[(5)] = ex__41745__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49806;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50384 = state_49793;
state_49793 = G__50384;
continue;
} else {
return ret_value__41743__auto__;
}
break;
}
});
jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__ = function(state_49793){
switch(arguments.length){
case 0:
return jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____0.call(this);
case 1:
return jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____1.call(this,state_49793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____0;
jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____1;
return jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__;
})()
})();
var state__41766__auto__ = (function (){var statearr_49808 = (f__41765__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41765__auto__.cljs$core$IFn$_invoke$arity$0() : f__41765__auto__.call(null));
(statearr_49808[(6)] = c__41764__auto__);

return statearr_49808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41766__auto__);
}));

return c__41764__auto__;
});
var G__49809_50389 = new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518);
var G__49810_50390 = jasminegui.mount.http_get_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__49809_50389,G__49810_50390) : re_frame.core.reg_fx.call(null,G__49809_50389,G__49810_50390));
jasminegui.mount.http_post_dispatch = (function jasminegui$mount$http_post_dispatch(request){
var c__41764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41765__auto__ = (function (){var switch__41741__auto__ = (function (state_49843){
var state_val_49844 = (state_49843[(1)]);
if((state_val_49844 === (1))){
var inst_49811 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_49812 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_49813 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
var inst_49814 = [inst_49813];
var inst_49815 = cljs.core.PersistentHashMap.fromArrays(inst_49812,inst_49814);
var inst_49816 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_49811,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_49815], 0));
var state_49843__$1 = state_49843;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49843__$1,(2),inst_49816);
} else {
if((state_val_49844 === (2))){
var inst_49818 = (state_49843[(2)]);
var inst_49819 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_49820 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_49843__$1 = (function (){var statearr_49845 = state_49843;
(statearr_49845[(7)] = inst_49819);

(statearr_49845[(8)] = inst_49818);

return statearr_49845;
})();
if(cljs.core.truth_(inst_49820)){
var statearr_49846_50393 = state_49843__$1;
(statearr_49846_50393[(1)] = (3));

} else {
var statearr_49847_50394 = state_49843__$1;
(statearr_49847_50394[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49844 === (3))){
var inst_49818 = (state_49843[(8)]);
var inst_49822 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_49818);
var inst_49823 = JSON.parse(inst_49822);
var inst_49824 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_49823,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_49843__$1 = state_49843;
var statearr_49848_50400 = state_49843__$1;
(statearr_49848_50400[(2)] = inst_49824);

(statearr_49848_50400[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49844 === (4))){
var inst_49818 = (state_49843[(8)]);
var inst_49826 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_49818);
var state_49843__$1 = state_49843;
var statearr_49849_50401 = state_49843__$1;
(statearr_49849_50401[(2)] = inst_49826);

(statearr_49849_50401[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49844 === (5))){
var inst_49819 = (state_49843[(7)]);
var inst_49828 = (state_49843[(2)]);
var inst_49829 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_49819,inst_49828);
var inst_49830 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_49829) : re_frame.core.dispatch.call(null,inst_49829));
var inst_49831 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_49843__$1 = (function (){var statearr_49850 = state_49843;
(statearr_49850[(9)] = inst_49830);

return statearr_49850;
})();
if(cljs.core.truth_(inst_49831)){
var statearr_49851_50402 = state_49843__$1;
(statearr_49851_50402[(1)] = (6));

} else {
var statearr_49852_50403 = state_49843__$1;
(statearr_49852_50403[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49844 === (6))){
var inst_49833 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49834 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_49835 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_49836 = [inst_49834,inst_49835];
var inst_49837 = (new cljs.core.PersistentVector(null,2,(5),inst_49833,inst_49836,null));
var inst_49838 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_49837) : re_frame.core.dispatch.call(null,inst_49837));
var state_49843__$1 = state_49843;
var statearr_49853_50405 = state_49843__$1;
(statearr_49853_50405[(2)] = inst_49838);

(statearr_49853_50405[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49844 === (7))){
var state_49843__$1 = state_49843;
var statearr_49854_50406 = state_49843__$1;
(statearr_49854_50406[(2)] = null);

(statearr_49854_50406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49844 === (8))){
var inst_49841 = (state_49843[(2)]);
var state_49843__$1 = state_49843;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49843__$1,inst_49841);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto__ = null;
var jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto____0 = (function (){
var statearr_49855 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49855[(0)] = jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto__);

(statearr_49855[(1)] = (1));

return statearr_49855;
});
var jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto____1 = (function (state_49843){
while(true){
var ret_value__41743__auto__ = (function (){try{while(true){
var result__41744__auto__ = switch__41741__auto__(state_49843);
if(cljs.core.keyword_identical_QMARK_(result__41744__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41744__auto__;
}
break;
}
}catch (e49856){if((e49856 instanceof Object)){
var ex__41745__auto__ = e49856;
var statearr_49857_50419 = state_49843;
(statearr_49857_50419[(5)] = ex__41745__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49856;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50422 = state_49843;
state_49843 = G__50422;
continue;
} else {
return ret_value__41743__auto__;
}
break;
}
});
jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto__ = function(state_49843){
switch(arguments.length){
case 0:
return jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto____0.call(this);
case 1:
return jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto____1.call(this,state_49843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto____0;
jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto____1;
return jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto__;
})()
})();
var state__41766__auto__ = (function (){var statearr_49858 = (f__41765__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41765__auto__.cljs$core$IFn$_invoke$arity$0() : f__41765__auto__.call(null));
(statearr_49858[(6)] = c__41764__auto__);

return statearr_49858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41766__auto__);
}));

return c__41764__auto__;
});
var G__49859_50425 = new cljs.core.Keyword(null,"http-post-dispatch","http-post-dispatch",2138865017);
var G__49860_50426 = jasminegui.mount.http_post_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__49859_50425,G__49860_50426) : re_frame.core.reg_fx.call(null,G__49859_50425,G__49860_50426));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions","get-positions",1610972586),(function (p__49861,p__49862){
var map__49863 = p__49861;
var map__49863__$1 = (((((!((map__49863 == null))))?(((((map__49863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49863):map__49863);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49863__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49864 = p__49862;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49864,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-rating-to-score","get-rating-to-score",391912155),(function (p__49868,p__49869){
var map__49870 = p__49868;
var map__49870__$1 = (((((!((map__49870 == null))))?(((((map__49870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49870):map__49870);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49870__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49871 = p__49869;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49871,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"rating-to-score"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472),(function (p__49875,p__49876){
var map__49877 = p__49875;
var map__49877__$1 = (((((!((map__49877 == null))))?(((((map__49877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49877):map__49877);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49877__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49878 = p__49876;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49878,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"portfolios"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-pivoted-positions","get-pivoted-positions",2145025131),(function (p__49882,p__49883){
var map__49884 = p__49882;
var map__49884__$1 = (((((!((map__49884 == null))))?(((((map__49884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49884):map__49884);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49884__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49885 = p__49883;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49885,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"pivoted-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-total-positions","get-total-positions",-698807167),(function (p__49889,p__49890){
var map__49891 = p__49889;
var map__49891__$1 = (((((!((map__49891 == null))))?(((((map__49891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49891):map__49891);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49891__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49892 = p__49890;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49892,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"total-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-qt-date","get-qt-date",-1072332881),(function (p__49896,p__49897){
var map__49898 = p__49896;
var map__49898__$1 = (((((!((map__49898 == null))))?(((((map__49898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49898):map__49898);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49898__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49899 = p__49897;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49899,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"qt-date"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),false], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-proxies","get-var-proxies",1252506215),(function (p__49903,p__49904){
var map__49905 = p__49903;
var map__49905__$1 = (((((!((map__49905 == null))))?(((((map__49905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49905):map__49905);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49905__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49906 = p__49904;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49906,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-proxies"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","proxies","var/proxies",-1487962738)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-dates","get-var-dates",-1039695287),(function (p__49910,p__49911){
var map__49912 = p__49910;
var map__49912__$1 = (((((!((map__49912 == null))))?(((((map__49912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49912):map__49912);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49912__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49913 = p__49911;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49913,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-dates"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","dates","var/dates",-1599746364)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-data","get-var-data",837806576),(function (p__49917,p__49918){
var map__49919 = p__49917;
var map__49919__$1 = (((((!((map__49919 == null))))?(((((map__49919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49919):map__49919);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49919__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49920 = p__49918;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49920,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49920,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-data?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-var","get-portfolio-var",1001711662),(function (p__49924,p__49925){
var map__49926 = p__49924;
var map__49926__$1 = (((((!((map__49926 == null))))?(((((map__49926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49926):map__49926);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49926__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49927 = p__49925;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49927,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49927,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),portfolio),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-data?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-attribution-date","get-attribution-date",-1329272944),(function (p__49931,p__49932){
var map__49933 = p__49931;
var map__49933__$1 = (((((!((map__49933 == null))))?(((((map__49933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49933):map__49933);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49933__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49934 = p__49932;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49934,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution?query-type=attribution-date"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),false], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-single-attribution","get-single-attribution",-1620108505),(function (p__49938,p__49939){
var map__49940 = p__49938;
var map__49940__$1 = (((((!((map__49940 == null))))?(((((map__49940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49940):map__49940);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49940__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49941 = p__49939;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49941,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49941,(1),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49941,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-single-attribution-portfolio","change-single-attribution-portfolio",1766745939),(function (p__49945,p__49946){
var map__49947 = p__49945;
var map__49947__$1 = (((((!((map__49947 == null))))?(((((map__49947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49947):map__49947);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49947__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49948 = p__49946;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49948,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49948,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),portfolio),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450).cljs$core$IFn$_invoke$arity$1(db))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-single-attribution-period","change-single-attribution-period",860703642),(function (p__49952,p__49953){
var map__49954 = p__49952;
var map__49954__$1 = (((((!((map__49954 == null))))?(((((map__49954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49954):map__49954);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49954__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49955 = p__49953;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49955,(0),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49955,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),period),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521).cljs$core$IFn$_invoke$arity$1(db)),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-multiple-attribution","get-multiple-attribution",1245740943),(function (p__49959,p__49960){
var map__49961 = p__49959;
var map__49961__$1 = (((((!((map__49961 == null))))?(((((map__49961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49961):map__49961);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49961__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49962 = p__49960;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49962,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49962,(1),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49962,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution?query-type=multiple-portfolio&target=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-multiple-attribution-target","change-multiple-attribution-target",777460289),(function (p__49966,p__49967){
var map__49968 = p__49966;
var map__49968__$1 = (((((!((map__49968 == null))))?(((((map__49968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49968):map__49968);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49968__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49969 = p__49967;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49969,(0),null);
var ktarget = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49969,(1),null);
var target = clojure.string.replace(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ktarget,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)),"-"," ");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),ktarget),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution?query-type=multiple-portfolio&target=",target,"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154).cljs$core$IFn$_invoke$arity$1(db))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-multiple-attribution-period","change-multiple-attribution-period",590435537),(function (p__49973,p__49974){
var map__49975 = p__49973;
var map__49975__$1 = (((((!((map__49975 == null))))?(((((map__49975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49975):map__49975);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49975__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49976 = p__49974;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49976,(0),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49976,(1),null);
var target = clojure.string.replace(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)),"-"," ");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),period),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution?query-type=multiple-portfolio&target=",target,"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-attribution-summary","get-attribution-summary",-27760654),(function (p__49980,p__49981){
var map__49982 = p__49980;
var map__49982__$1 = (((((!((map__49982 == null))))?(((((map__49982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49982):map__49982);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49982__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49983 = p__49981;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49983,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution?query-type=summary"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("attribution","summary","attribution/summary",687462095)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-review-summary-data","get-portfolio-review-summary-data",-1339542673),(function (p__49987,p__49988){
var map__49989 = p__49987;
var map__49989__$1 = (((((!((map__49989 == null))))?(((((map__49989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49989):map__49989);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49989__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49990 = p__49988;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49990,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49990,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"portfolio-review?query-type=summary&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","summary-data","portfolio-review/summary-data",-1362975725)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-review-contribution-chart-data","get-portfolio-review-contribution-chart-data",1350930118),(function (p__49994,p__49995){
var map__49996 = p__49994;
var map__49996__$1 = (((((!((map__49996 == null))))?(((((map__49996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49996):map__49996);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49996__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49997 = p__49995;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49997,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49997,(1),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49997,(2),null);
var grouping = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49997,(3),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"portfolio-review?query-type=contribution&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period),"&grouping=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(grouping)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","contribution-chart-data","portfolio-review/contribution-chart-data",-581811845)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-review-alpha-chart-data","get-portfolio-review-alpha-chart-data",2022261801),(function (p__50001,p__50002){
var map__50003 = p__50001;
var map__50003__$1 = (((((!((map__50003 == null))))?(((((map__50003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50003):map__50003);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50003__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__50004 = p__50002;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50004,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50004,(1),null);
var grouping = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50004,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"portfolio-review?query-type=alpha&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&grouping=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(grouping)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","alpha-chart-data","portfolio-review/alpha-chart-data",-243291168)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));

//# sourceMappingURL=jasminegui.mount.js.map
