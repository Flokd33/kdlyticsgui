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
jasminegui.mount.server_address = jasminegui.mount.dev_server_address;
jasminegui.mount.default_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679),new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705),new cljs.core.Keyword("multiple-portfolio-attribution","field-two","multiple-portfolio-attribution/field-two",-311759422),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword("multiple-portfolio-attribution","field-number","multiple-portfolio-attribution/field-number",-1780989148),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword(null,"active-var","active-var",-1787478523),new cljs.core.Keyword("trade-history","active-bond","trade-history/active-bond",-1419462650),new cljs.core.Keyword(null,"active-attribution","active-attribution",-792819194),new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047),new cljs.core.Keyword("multiple-portfolio-attribution","display-style","multiple-portfolio-attribution/display-style",-767260119),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("var","result","var/result",1415073996),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("var","history","var/history",-246458543),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219),new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("multiple-portfolio-attribution","shortcut","multiple-portfolio-attribution/shortcut",809107380),new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("single-portfolio-attribution","table-filter","single-portfolio-attribution/table-filter",1757441687),new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334),new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword("single-portfolio-attribution","shortcut","single-portfolio-attribution/shortcut",-1711481988),new cljs.core.Keyword("trade-history","history","trade-history/history",1084885309),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),new cljs.core.Keyword("multiple-portfolio-attribution","table-filter","multiple-portfolio-attribution/table-filter",-9483585)],[(1),new cljs.core.Keyword(null,"summary","summary",380847952),"OGEMCORD","Tree",cljs.core.PersistentVector.EMPTY,"None",null,null,"One","Table",new cljs.core.Keyword(null,"overview","overview",-435037267),null,new cljs.core.Keyword(null,"summary","summary",380847952),"undefined",new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),true,cljs.core.PersistentVector.EMPTY,"Tree",cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),"undefined",cljs.core.PersistentVector.EMPTY,null,cljs.core.set(null),new cljs.core.Keyword(null,"quarter","quarter",-508147616),"Tree",null,new cljs.core.Keyword(null,"nav","nav",719540477),null,(1),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),"OGEMCORD",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),(1),new cljs.core.Keyword(null,"daily-3y","daily-3y",-2143971824),"ytd","None",cljs.core.PersistentVector.EMPTY,(1),"One","Tree",cljs.core.set(null),null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),new cljs.core.Keyword(null,"total-effect","total-effect",-967715775),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"home","home",-74557309),(1),null,"OGEMCORD",new cljs.core.Keyword(null,"cembi","cembi",1924920241),"ytd",cljs.core.PersistentVector.EMPTY,true,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),cljs.core.PersistentVector.EMPTY]);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jasminegui.mount","initialize-db","jasminegui.mount/initialize-db",-1621527627),(function (_,___$1){
return jasminegui.mount.default_db;
}));
var seq__55478_55830 = cljs.core.seq(cljs.core.keys(jasminegui.mount.default_db));
var chunk__55479_55831 = null;
var count__55480_55832 = (0);
var i__55481_55833 = (0);
while(true){
if((i__55481_55833 < count__55480_55832)){
var k_55834 = chunk__55479_55831.cljs$core$IIndexed$_nth$arity$2(null,i__55481_55833);
var G__55486_55835 = k_55834;
var G__55487_55836 = ((function (seq__55478_55830,chunk__55479_55831,count__55480_55832,i__55481_55833,G__55486_55835,k_55834){
return (function (db){
return (k_55834.cljs$core$IFn$_invoke$arity$1 ? k_55834.cljs$core$IFn$_invoke$arity$1(db) : k_55834.call(null,db));
});})(seq__55478_55830,chunk__55479_55831,count__55480_55832,i__55481_55833,G__55486_55835,k_55834))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__55486_55835,G__55487_55836) : re_frame.core.reg_sub.call(null,G__55486_55835,G__55487_55836));


var G__55837 = seq__55478_55830;
var G__55838 = chunk__55479_55831;
var G__55839 = count__55480_55832;
var G__55840 = (i__55481_55833 + (1));
seq__55478_55830 = G__55837;
chunk__55479_55831 = G__55838;
count__55480_55832 = G__55839;
i__55481_55833 = G__55840;
continue;
} else {
var temp__5735__auto___55841 = cljs.core.seq(seq__55478_55830);
if(temp__5735__auto___55841){
var seq__55478_55842__$1 = temp__5735__auto___55841;
if(cljs.core.chunked_seq_QMARK_(seq__55478_55842__$1)){
var c__4556__auto___55843 = cljs.core.chunk_first(seq__55478_55842__$1);
var G__55844 = cljs.core.chunk_rest(seq__55478_55842__$1);
var G__55845 = c__4556__auto___55843;
var G__55846 = cljs.core.count(c__4556__auto___55843);
var G__55847 = (0);
seq__55478_55830 = G__55844;
chunk__55479_55831 = G__55845;
count__55480_55832 = G__55846;
i__55481_55833 = G__55847;
continue;
} else {
var k_55848 = cljs.core.first(seq__55478_55842__$1);
var G__55488_55849 = k_55848;
var G__55489_55850 = ((function (seq__55478_55830,chunk__55479_55831,count__55480_55832,i__55481_55833,G__55488_55849,k_55848,seq__55478_55842__$1,temp__5735__auto___55841){
return (function (db){
return (k_55848.cljs$core$IFn$_invoke$arity$1 ? k_55848.cljs$core$IFn$_invoke$arity$1(db) : k_55848.call(null,db));
});})(seq__55478_55830,chunk__55479_55831,count__55480_55832,i__55481_55833,G__55488_55849,k_55848,seq__55478_55842__$1,temp__5735__auto___55841))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__55488_55849,G__55489_55850) : re_frame.core.reg_sub.call(null,G__55488_55849,G__55489_55850));


var G__55851 = cljs.core.next(seq__55478_55842__$1);
var G__55852 = null;
var G__55853 = (0);
var G__55854 = (0);
seq__55478_55830 = G__55851;
chunk__55479_55831 = G__55852;
count__55480_55832 = G__55853;
i__55481_55833 = G__55854;
continue;
}
} else {
}
}
break;
}
jasminegui.mount.first_level_sort = (function jasminegui$mount$first_level_sort(x){
var G__55490 = x;
switch (G__55490) {
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
jasminegui.mount.add_total_line_to_pivot = (function jasminegui$mount$add_total_line_to_pivot(pivoted_table,kportfolios){
var total_line = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"jpm-region","jpm-region",-2074265852),"Total",new cljs.core.Keyword(null,"qt-jpm-sector","qt-jpm-sector",1047055349),"Total",new cljs.core.Keyword(null,"qt-risk-country-name","qt-risk-country-name",1182905474),"Total",new cljs.core.Keyword(null,"TICKER","TICKER",-1215969144),"Total",new cljs.core.Keyword(null,"NAME","NAME",-1127916515),"Total",new cljs.core.Keyword(null,"description","description",-1428560544),"Total",new cljs.core.Keyword(null,"isin","isin",-1197420747),"Total",new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),"Total"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$add_total_line_to_pivot_$_iter__55495(s__55496){
return (new cljs.core.LazySeq(null,(function (){
var s__55496__$1 = s__55496;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55496__$1);
if(temp__5735__auto__){
var s__55496__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55496__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55496__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55498 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55497 = (0);
while(true){
if((i__55497 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__55497);
cljs.core.chunk_append(b__55498,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(p,pivoted_table))], null));

var G__55868 = (i__55497 + (1));
i__55497 = G__55868;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55498),jasminegui$mount$add_total_line_to_pivot_$_iter__55495(cljs.core.chunk_rest(s__55496__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55498),null);
}
} else {
var p = cljs.core.first(s__55496__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(p,pivoted_table))], null),jasminegui$mount$add_total_line_to_pivot_$_iter__55495(cljs.core.rest(s__55496__$2)));
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
var template = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$add_total_line_to_attribution_pivot_$_iter__55508(s__55509){
return (new cljs.core.LazySeq(null,(function (){
var s__55509__$1 = s__55509;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55509__$1);
if(temp__5735__auto__){
var s__55509__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55509__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55509__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55511 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55510 = (0);
while(true){
if((i__55510 < size__4528__auto__)){
var vec__55512 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__55510);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55512,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55512,(1),null);
cljs.core.chunk_append(b__55511,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,"Total"], null));

var G__55893 = (i__55510 + (1));
i__55510 = G__55893;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55511),jasminegui$mount$add_total_line_to_attribution_pivot_$_iter__55508(cljs.core.chunk_rest(s__55509__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55511),null);
}
} else {
var vec__55515 = cljs.core.first(s__55509__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55515,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55515,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,"Total"], null),jasminegui$mount$add_total_line_to_attribution_pivot_$_iter__55508(cljs.core.rest(s__55509__$2)));
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
var total_line = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([template,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$add_total_line_to_attribution_pivot_$_iter__55518(s__55519){
return (new cljs.core.LazySeq(null,(function (){
var s__55519__$1 = s__55519;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55519__$1);
if(temp__5735__auto__){
var s__55519__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55519__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55519__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55521 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55520 = (0);
while(true){
if((i__55520 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__55520);
cljs.core.chunk_append(b__55521,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(p,pivoted_table))], null));

var G__55908 = (i__55520 + (1));
i__55520 = G__55908;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55521),jasminegui$mount$add_total_line_to_attribution_pivot_$_iter__55518(cljs.core.chunk_rest(s__55519__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55521),null);
}
} else {
var p = cljs.core.first(s__55519__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(p,pivoted_table))], null),jasminegui$mount$add_total_line_to_attribution_pivot_$_iter__55518(cljs.core.rest(s__55519__$2)));
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
var G__55526_55911 = new cljs.core.Keyword("single-portfolio-risk","table","single-portfolio-risk/table",-637924467);
var G__55527_55912 = (function (db){
var positions = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db);
var portfolio = new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949).cljs$core$IFn$_invoke$arity$1(db);
var portfolio_total_line = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var G__55529 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(portfolio);
var fexpr__55528 = new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db);
return (fexpr__55528.cljs$core$IFn$_invoke$arity$1 ? fexpr__55528.cljs$core$IFn$_invoke$arity$1(G__55529) : fexpr__55528.call(null,G__55529));
})(),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),"Total",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),"00 Total"], 0));
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477).cljs$core$IFn$_invoke$arity$1(db),"Tree");
var portfolio_positions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55523_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__55523_SHARP_),portfolio);
}),positions);
var viewable_positions = (cljs.core.truth_((((!(is_tree)))?new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951).cljs$core$IFn$_invoke$arity$1(db):false))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55524_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(p1__55524_SHARP_),(0));
}),portfolio_positions):portfolio_positions);
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__55530 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55530) : re_frame.core.subscribe.call(null,G__55530));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55525_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__55525_SHARP_) : rfil.call(null,p1__55525_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__55525_SHARP_) : rfil.call(null,p1__55525_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__55531(s__55532){
return (new cljs.core.LazySeq(null,(function (){
var s__55532__$1 = s__55532;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55532__$1);
if(temp__5735__auto__){
var s__55532__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55532__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55532__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55534 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55533 = (0);
while(true){
if((i__55533 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__55533);
cljs.core.chunk_append(b__55534,(jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.risk_table_columns.call(null,r)));

var G__55926 = (i__55533 + (1));
i__55533 = G__55926;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55534),jasminegui$mount$iter__55531(cljs.core.chunk_rest(s__55532__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55534),null);
}
} else {
var r = cljs.core.first(s__55532__$2);
return cljs.core.cons((jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.risk_table_columns.call(null,r)),jasminegui$mount$iter__55531(cljs.core.rest(s__55532__$2)));
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__55526_55911,G__55527_55912) : re_frame.core.reg_sub.call(null,G__55526_55911,G__55527_55912));
var G__55536_55941 = new cljs.core.Keyword("single-portfolio-attribution","clean-table","single-portfolio-attribution/clean-table",-391468387);
var G__55537_55942 = (function (db){
var data = new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047).cljs$core$IFn$_invoke$arity$1(db);
var template = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__55538(s__55539){
return (new cljs.core.LazySeq(null,(function (){
var s__55539__$1 = s__55539;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55539__$1);
if(temp__5735__auto__){
var s__55539__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55539__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55539__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55541 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55540 = (0);
while(true){
if((i__55540 < size__4528__auto__)){
var vec__55542 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__55540);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55542,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55542,(1),null);
cljs.core.chunk_append(b__55541,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,"Total"], null));

var G__55948 = (i__55540 + (1));
i__55540 = G__55948;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55541),jasminegui$mount$iter__55538(cljs.core.chunk_rest(s__55539__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55541),null);
}
} else {
var vec__55545 = cljs.core.first(s__55539__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55545,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55545,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,"Total"], null),jasminegui$mount$iter__55538(cljs.core.rest(s__55539__$2)));
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55535_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__55535_SHARP_) : rfil.call(null,p1__55535_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__55535_SHARP_) : rfil.call(null,p1__55535_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__55548(s__55549){
return (new cljs.core.LazySeq(null,(function (){
var s__55549__$1 = s__55549;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55549__$1);
if(temp__5735__auto__){
var s__55549__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55549__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55549__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55551 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55550 = (0);
while(true){
if((i__55550 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__55550);
cljs.core.chunk_append(b__55551,(jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.attribution_table_columns.call(null,r)));

var G__55981 = (i__55550 + (1));
i__55550 = G__55981;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55551),jasminegui$mount$iter__55548(cljs.core.chunk_rest(s__55549__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55551),null);
}
} else {
var r = cljs.core.first(s__55549__$2);
return cljs.core.cons((jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.attribution_table_columns.call(null,r)),jasminegui$mount$iter__55548(cljs.core.rest(s__55549__$2)));
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__55536_55941,G__55537_55942) : re_frame.core.reg_sub.call(null,G__55536_55941,G__55537_55942));
var G__55554_55991 = new cljs.core.Keyword("multiple-portfolio-risk","table","multiple-portfolio-risk/table",1962237397);
var G__55555_55992 = (function (db){
var pivoted_positions = new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863).cljs$core$IFn$_invoke$arity$1(db);
var kselected_portfolios = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045).cljs$core$IFn$_invoke$arity$1(db));
var hide_zero_risk = new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337).cljs$core$IFn$_invoke$arity$1(db);
var display_key_one = new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337).cljs$core$IFn$_invoke$arity$1(db);
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547).cljs$core$IFn$_invoke$arity$1(db),"Tree");
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__55556 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55556) : re_frame.core.subscribe.call(null,G__55556));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55552_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__55552_SHARP_) : rfil.call(null,p1__55552_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__55552_SHARP_) : rfil.call(null,p1__55552_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__55557(s__55558){
return (new cljs.core.LazySeq(null,(function (){
var s__55558__$1 = s__55558;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55558__$1);
if(temp__5735__auto__){
var s__55558__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55558__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55558__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55560 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55559 = (0);
while(true){
if((i__55559 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__55559);
cljs.core.chunk_append(b__55560,(jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.risk_table_columns.call(null,r)));

var G__56017 = (i__55559 + (1));
i__55559 = G__56017;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55560),jasminegui$mount$iter__55557(cljs.core.chunk_rest(s__55558__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55560),null);
}
} else {
var r = cljs.core.first(s__55558__$2);
return cljs.core.cons((jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.risk_table_columns.call(null,r)),jasminegui$mount$iter__55557(cljs.core.rest(s__55558__$2)));
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
var pivoted_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55553_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__55553_SHARP_,(function (){var fexpr__55561 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.risk_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_one,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__55561.cljs$core$IFn$_invoke$arity$1 ? fexpr__55561.cljs$core$IFn$_invoke$arity$1(p1__55553_SHARP_) : fexpr__55561.call(null,p1__55553_SHARP_));
})()], 0));
}),pivoted_positions);
var thfil = (function (line){
return (!(cljs.core.every_QMARK_(cljs.core.zero_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(line,kselected_portfolios))));
});
var pivoted_data_hide_zero = (cljs.core.truth_((((!(is_tree)))?hide_zero_risk:false))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(thfil,pivoted_data):pivoted_data);
return jasminegui.mount.add_total_line_to_pivot(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.mount.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),pivoted_data_hide_zero),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(db)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__55554_55991,G__55555_55992) : re_frame.core.reg_sub.call(null,G__55554_55991,G__55555_55992));
var G__55564_56037 = new cljs.core.Keyword("multiple-portfolio-attribution","clean-table","multiple-portfolio-attribution/clean-table",-1066824107);
var G__55565_56038 = (function (db){
var pivoted_positions = new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705).cljs$core$IFn$_invoke$arity$1(db);
var kselected_portfolios = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959).cljs$core$IFn$_invoke$arity$1(db));
var display_key_one = new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707).cljs$core$IFn$_invoke$arity$1(db);
var attribution_choices = (function (){var rfil = cljs.core.deref((function (){var G__55566 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55566) : re_frame.core.subscribe.call(null,G__55566));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55562_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__55562_SHARP_) : rfil.call(null,p1__55562_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__55562_SHARP_) : rfil.call(null,p1__55562_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__55567(s__55568){
return (new cljs.core.LazySeq(null,(function (){
var s__55568__$1 = s__55568;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55568__$1);
if(temp__5735__auto__){
var s__55568__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55568__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55568__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55570 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55569 = (0);
while(true){
if((i__55569 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__55569);
cljs.core.chunk_append(b__55570,(jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.attribution_table_columns.call(null,r)));

var G__56064 = (i__55569 + (1));
i__55569 = G__56064;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55570),jasminegui$mount$iter__55567(cljs.core.chunk_rest(s__55568__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55570),null);
}
} else {
var r = cljs.core.first(s__55568__$2);
return cljs.core.cons((jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.attribution_table_columns.call(null,r)),jasminegui$mount$iter__55567(cljs.core.rest(s__55568__$2)));
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
var pivoted_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55563_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__55563_SHARP_,(function (){var fexpr__55571 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_one,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__55571.cljs$core$IFn$_invoke$arity$1 ? fexpr__55571.cljs$core$IFn$_invoke$arity$1(p1__55563_SHARP_) : fexpr__55571.call(null,p1__55563_SHARP_));
})()], 0));
}),pivoted_positions);
return jasminegui.mount.add_total_line_to_attribution_pivot(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.mount.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),pivoted_data),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(db)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__55564_56037,G__55565_56038) : re_frame.core.reg_sub.call(null,G__55564_56037,G__55565_56038));
var G__55576_56075 = new cljs.core.Keyword("portfolio-alignment","table","portfolio-alignment/table",-1411501022);
var G__55577_56076 = (function (db){
var group = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55572_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55572_SHARP_),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110).cljs$core$IFn$_invoke$arity$1(db));
}),jasminegui.static$.portfolio_alignment_groups))));
var pivoted_positions = new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863).cljs$core$IFn$_invoke$arity$1(db);
var base_kportfolio = cljs.core.first(group);
var kportfolios = cljs.core.rest(group);
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__55578 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55578) : re_frame.core.subscribe.call(null,G__55578));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55573_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__55573_SHARP_) : rfil.call(null,p1__55573_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__55573_SHARP_) : rfil.call(null,p1__55573_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__55579(s__55580){
return (new cljs.core.LazySeq(null,(function (){
var s__55580__$1 = s__55580;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55580__$1);
if(temp__5735__auto__){
var s__55580__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55580__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55580__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55582 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55581 = (0);
while(true){
if((i__55581 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__55581);
cljs.core.chunk_append(b__55582,(jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.risk_table_columns.call(null,r)));

var G__56092 = (i__55581 + (1));
i__55581 = G__56092;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55582),jasminegui$mount$iter__55579(cljs.core.chunk_rest(s__55580__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55582),null);
}
} else {
var r = cljs.core.first(s__55580__$2);
return cljs.core.cons((jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.risk_table_columns.call(null,r)),jasminegui$mount$iter__55579(cljs.core.rest(s__55580__$2)));
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
var pivoted_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55574_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__55574_SHARP_,(function (){var fexpr__55583 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.risk_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__55583.cljs$core$IFn$_invoke$arity$1 ? fexpr__55583.cljs$core$IFn$_invoke$arity$1(p1__55574_SHARP_) : fexpr__55583.call(null,p1__55574_SHARP_));
})()], 0));
}),pivoted_positions);
var differentiate = (function (line){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (temp_line,p){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(temp_line,p,((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(temp_line) : p.call(null,temp_line)) - (base_kportfolio.cljs$core$IFn$_invoke$arity$1 ? base_kportfolio.cljs$core$IFn$_invoke$arity$1(temp_line) : base_kportfolio.call(null,temp_line))));
}),line,kportfolios);
});
var pivoted_data_diff = cljs.core.map.cljs$core$IFn$_invoke$arity$2(differentiate,pivoted_data);
var threshold = (0.01 * cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55575_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55575_SHARP_),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053).cljs$core$IFn$_invoke$arity$1(db));
}),jasminegui.static$.threshold_choices_alignment)))));
var thfil = (function (line){
return cljs.core.some((function (x){
return (((x < (- threshold))) || ((x > threshold)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(line,kportfolios));
});
var pivoted_data_diff_post_th = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(thfil,pivoted_data_diff);
return jasminegui.mount.add_total_line_to_pivot(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.mount.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),pivoted_data_diff_post_th),kportfolios);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__55576_56075,G__55577_56076) : re_frame.core.reg_sub.call(null,G__55576_56075,G__55577_56076));
var G__55585_56114 = new cljs.core.Keyword("summary-display","table","summary-display/table",1149370831);
var G__55586_56115 = (function (db){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__55587(s__55588){
return (new cljs.core.LazySeq(null,(function (){
var s__55588__$1 = s__55588;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55588__$1);
if(temp__5735__auto__){
var s__55588__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55588__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55588__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55590 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55589 = (0);
while(true){
if((i__55589 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__55589);
cljs.core.chunk_append(b__55590,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"portfolio","portfolio",957568598),p], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = ((function (i__55589,p,c__4527__auto__,size__4528__auto__,b__55590,s__55588__$2,temp__5735__auto__,G__55585_56114){
return (function jasminegui$mount$iter__55587_$_iter__55591(s__55592){
return (new cljs.core.LazySeq(null,((function (i__55589,p,c__4527__auto__,size__4528__auto__,b__55590,s__55588__$2,temp__5735__auto__,G__55585_56114){
return (function (){
var s__55592__$1 = s__55592;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__55592__$1);
if(temp__5735__auto____$1){
var s__55592__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__55592__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__55592__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__55594 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__55593 = (0);
while(true){
if((i__55593 < size__4528__auto____$1)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto____$1,i__55593);
cljs.core.chunk_append(b__55594,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null));

var G__56134 = (i__55593 + (1));
i__55593 = G__56134;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55594),jasminegui$mount$iter__55587_$_iter__55591(cljs.core.chunk_rest(s__55592__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55594),null);
}
} else {
var k = cljs.core.first(s__55592__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null),jasminegui$mount$iter__55587_$_iter__55591(cljs.core.rest(s__55592__$2)));
}
} else {
return null;
}
break;
}
});})(i__55589,p,c__4527__auto__,size__4528__auto__,b__55590,s__55588__$2,temp__5735__auto__,G__55585_56114))
,null,null));
});})(i__55589,p,c__4527__auto__,size__4528__auto__,b__55590,s__55588__$2,temp__5735__auto__,G__55585_56114))
;
return iter__4529__auto__(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175),new cljs.core.Keyword(null,"base-value","base-value",921379228),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067),new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030),new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),new cljs.core.Keyword(null,"contrib-beta-1y-daily","contrib-beta-1y-daily",259924328)], null));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861)], null)) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__55589,p,c__4527__auto__,size__4528__auto__,b__55590,s__55588__$2,temp__5735__auto__,G__55585_56114){
return (function (p1__55584_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__55584_SHARP_),p)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-class","asset-class",1845554418).cljs$core$IFn$_invoke$arity$1(p1__55584_SHARP_),"BONDS")));
});})(i__55589,p,c__4527__auto__,size__4528__auto__,b__55590,s__55588__$2,temp__5735__auto__,G__55585_56114))
,new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db)))))], null)], 0)));

var G__56149 = (i__55589 + (1));
i__55589 = G__56149;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55590),jasminegui$mount$iter__55587(cljs.core.chunk_rest(s__55588__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55590),null);
}
} else {
var p = cljs.core.first(s__55588__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"portfolio","portfolio",957568598),p], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = ((function (p,s__55588__$2,temp__5735__auto__,G__55585_56114){
return (function jasminegui$mount$iter__55587_$_iter__55595(s__55596){
return (new cljs.core.LazySeq(null,(function (){
var s__55596__$1 = s__55596;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__55596__$1);
if(temp__5735__auto____$1){
var s__55596__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__55596__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55596__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55598 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55597 = (0);
while(true){
if((i__55597 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__55597);
cljs.core.chunk_append(b__55598,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null));

var G__56157 = (i__55597 + (1));
i__55597 = G__56157;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55598),jasminegui$mount$iter__55587_$_iter__55595(cljs.core.chunk_rest(s__55596__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55598),null);
}
} else {
var k = cljs.core.first(s__55596__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null),jasminegui$mount$iter__55587_$_iter__55595(cljs.core.rest(s__55596__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(p,s__55588__$2,temp__5735__auto__,G__55585_56114))
;
return iter__4529__auto__(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175),new cljs.core.Keyword(null,"base-value","base-value",921379228),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067),new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030),new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),new cljs.core.Keyword(null,"contrib-beta-1y-daily","contrib-beta-1y-daily",259924328)], null));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861)], null)) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (p,s__55588__$2,temp__5735__auto__,G__55585_56114){
return (function (p1__55584_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__55584_SHARP_),p)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-class","asset-class",1845554418).cljs$core$IFn$_invoke$arity$1(p1__55584_SHARP_),"BONDS")));
});})(p,s__55588__$2,temp__5735__auto__,G__55585_56114))
,new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db)))))], null)], 0)),jasminegui$mount$iter__55587(cljs.core.rest(s__55588__$2)));
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__55585_56114,G__55586_56115) : re_frame.core.reg_sub.call(null,G__55585_56114,G__55586_56115));
var seq__55599_56170 = cljs.core.seq(cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword(null,"active-var","active-var",-1787478523),new cljs.core.Keyword(null,"active-attribution","active-attribution",-792819194),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738),new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334),new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679),new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),new cljs.core.Keyword("single-portfolio-attribution","table-filter","single-portfolio-attribution/table-filter",1757441687),new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047),new cljs.core.Keyword("multiple-portfolio-attribution","display-style","multiple-portfolio-attribution/display-style",-767260119),new cljs.core.Keyword("multiple-portfolio-attribution","field-number","multiple-portfolio-attribution/field-number",-1780989148),new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),new cljs.core.Keyword("multiple-portfolio-attribution","field-two","multiple-portfolio-attribution/field-two",-311759422),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),new cljs.core.Keyword("multiple-portfolio-attribution","hide-zero-holdings","multiple-portfolio-attribution/hide-zero-holdings",1677138723),new cljs.core.Keyword("multiple-portfolio-attribution","shortcut","multiple-portfolio-attribution/shortcut",809107380),new cljs.core.Keyword("multiple-portfolio-attribution","table-filter","multiple-portfolio-attribution/table-filter",-9483585),new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705),new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154)], true));
var chunk__55600_56171 = null;
var count__55601_56172 = (0);
var i__55602_56173 = (0);
while(true){
if((i__55602_56173 < count__55601_56172)){
var k_56185 = chunk__55600_56171.cljs$core$IIndexed$_nth$arity$2(null,i__55602_56173);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_56185,((function (seq__55599_56170,chunk__55600_56171,count__55601_56172,i__55602_56173,k_56185){
return (function (db,p__55611){
var vec__55612 = p__55611;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55612,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55612,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_56185,data);
});})(seq__55599_56170,chunk__55600_56171,count__55601_56172,i__55602_56173,k_56185))
);


var G__56189 = seq__55599_56170;
var G__56190 = chunk__55600_56171;
var G__56191 = count__55601_56172;
var G__56192 = (i__55602_56173 + (1));
seq__55599_56170 = G__56189;
chunk__55600_56171 = G__56190;
count__55601_56172 = G__56191;
i__55602_56173 = G__56192;
continue;
} else {
var temp__5735__auto___56194 = cljs.core.seq(seq__55599_56170);
if(temp__5735__auto___56194){
var seq__55599_56195__$1 = temp__5735__auto___56194;
if(cljs.core.chunked_seq_QMARK_(seq__55599_56195__$1)){
var c__4556__auto___56196 = cljs.core.chunk_first(seq__55599_56195__$1);
var G__56197 = cljs.core.chunk_rest(seq__55599_56195__$1);
var G__56198 = c__4556__auto___56196;
var G__56199 = cljs.core.count(c__4556__auto___56196);
var G__56200 = (0);
seq__55599_56170 = G__56197;
chunk__55600_56171 = G__56198;
count__55601_56172 = G__56199;
i__55602_56173 = G__56200;
continue;
} else {
var k_56202 = cljs.core.first(seq__55599_56195__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_56202,((function (seq__55599_56170,chunk__55600_56171,count__55601_56172,i__55602_56173,k_56202,seq__55599_56195__$1,temp__5735__auto___56194){
return (function (db,p__55615){
var vec__55616 = p__55615;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55616,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55616,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_56202,data);
});})(seq__55599_56170,chunk__55600_56171,count__55601_56172,i__55602_56173,k_56202,seq__55599_56195__$1,temp__5735__auto___56194))
);


var G__56203 = cljs.core.next(seq__55599_56195__$1);
var G__56204 = null;
var G__56205 = (0);
var G__56206 = (0);
seq__55599_56170 = G__56203;
chunk__55600_56171 = G__56204;
count__55601_56172 = G__56205;
i__55602_56173 = G__56206;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),(function (db,p__55619){
var vec__55620 = p__55619;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55620,(0),null);
var portfolios = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55620,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),portfolios,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),cljs.core.set(portfolios),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),cljs.core.set(portfolios)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),(function (db,p__55623){
var vec__55624 = p__55623;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55624,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55624,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55624,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),(function (db,p__55627){
var vec__55628 = p__55627;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55628,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55628,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55628,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),(function (db,p__55631){
var vec__55632 = p__55631;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55632,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55632,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55632,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),(function (db,p__55635){
var vec__55636 = p__55635;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55636,(0),null);
var qt_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55636,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),clojure.string.replace(qt_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),(function (db,p__55639){
var vec__55640 = p__55639;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55640,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55640,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55640,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219),(function (db,p__55643){
var vec__55644 = p__55643;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55644,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55644,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55644,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),(function (db,p__55647){
var vec__55648 = p__55647;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55648,(0),null);
var attribution_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55648,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),clojure.string.replace(attribution_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),(function (db,p__55651){
var vec__55652 = p__55651;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55652,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55652,(1),null);
var G__55655 = snapshot;
switch (G__55655) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55655)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cycle-shortcut","cycle-shortcut",-1617058214),(function (db,p__55656){
var vec__55657 = p__55656;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55657,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55657,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55657,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"active-home","active-home",53621216).cljs$core$IFn$_invoke$arity$1(db)),"-risk/shortcut"].join(''));
var shortcut_value = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
if((shortcut_value < (4))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(shortcut_value + (1)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(1));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tree-table","tree-table",-1263002012),(function (db,p__55660){
var vec__55661 = p__55660;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55661,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55661,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55661,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"active-home","active-home",53621216).cljs$core$IFn$_invoke$arity$1(db)),"-risk/display-style"].join(''));
var G__55664 = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
switch (G__55664) {
case "Tree":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Table");

break;
case "Table":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Tree");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55664)].join('')));

}
}));
jasminegui.mount.http_get_dispatch = (function jasminegui$mount$http_get_dispatch(request){
var c__41764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41765__auto__ = (function (){var switch__41719__auto__ = (function (state_55693){
var state_val_55694 = (state_55693[(1)]);
if((state_val_55694 === (1))){
var inst_55665 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_55666 = cljs_http.client.get(inst_55665);
var state_55693__$1 = state_55693;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55693__$1,(2),inst_55666);
} else {
if((state_val_55694 === (2))){
var inst_55668 = (state_55693[(2)]);
var inst_55669 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_55670 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_55693__$1 = (function (){var statearr_55695 = state_55693;
(statearr_55695[(7)] = inst_55669);

(statearr_55695[(8)] = inst_55668);

return statearr_55695;
})();
if(cljs.core.truth_(inst_55670)){
var statearr_55696_56245 = state_55693__$1;
(statearr_55696_56245[(1)] = (3));

} else {
var statearr_55697_56247 = state_55693__$1;
(statearr_55697_56247[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55694 === (3))){
var inst_55668 = (state_55693[(8)]);
var inst_55672 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_55668);
var inst_55673 = JSON.parse(inst_55672);
var inst_55674 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_55673,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_55693__$1 = state_55693;
var statearr_55698_56250 = state_55693__$1;
(statearr_55698_56250[(2)] = inst_55674);

(statearr_55698_56250[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55694 === (4))){
var inst_55668 = (state_55693[(8)]);
var inst_55676 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_55668);
var state_55693__$1 = state_55693;
var statearr_55699_56251 = state_55693__$1;
(statearr_55699_56251[(2)] = inst_55676);

(statearr_55699_56251[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55694 === (5))){
var inst_55669 = (state_55693[(7)]);
var inst_55678 = (state_55693[(2)]);
var inst_55679 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_55669,inst_55678);
var inst_55680 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_55679) : re_frame.core.dispatch.call(null,inst_55679));
var inst_55681 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_55693__$1 = (function (){var statearr_55700 = state_55693;
(statearr_55700[(9)] = inst_55680);

return statearr_55700;
})();
if(cljs.core.truth_(inst_55681)){
var statearr_55701_56272 = state_55693__$1;
(statearr_55701_56272[(1)] = (6));

} else {
var statearr_55702_56273 = state_55693__$1;
(statearr_55702_56273[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55694 === (6))){
var inst_55683 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55684 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_55685 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_55686 = [inst_55684,inst_55685];
var inst_55687 = (new cljs.core.PersistentVector(null,2,(5),inst_55683,inst_55686,null));
var inst_55688 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_55687) : re_frame.core.dispatch.call(null,inst_55687));
var state_55693__$1 = state_55693;
var statearr_55703_56274 = state_55693__$1;
(statearr_55703_56274[(2)] = inst_55688);

(statearr_55703_56274[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55694 === (7))){
var state_55693__$1 = state_55693;
var statearr_55704_56276 = state_55693__$1;
(statearr_55704_56276[(2)] = null);

(statearr_55704_56276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55694 === (8))){
var inst_55691 = (state_55693[(2)]);
var state_55693__$1 = state_55693;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55693__$1,inst_55691);
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
var jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__ = null;
var jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____0 = (function (){
var statearr_55705 = [null,null,null,null,null,null,null,null,null,null];
(statearr_55705[(0)] = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__);

(statearr_55705[(1)] = (1));

return statearr_55705;
});
var jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1 = (function (state_55693){
while(true){
var ret_value__41721__auto__ = (function (){try{while(true){
var result__41722__auto__ = switch__41719__auto__(state_55693);
if(cljs.core.keyword_identical_QMARK_(result__41722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41722__auto__;
}
break;
}
}catch (e55706){if((e55706 instanceof Object)){
var ex__41723__auto__ = e55706;
var statearr_55707_56281 = state_55693;
(statearr_55707_56281[(5)] = ex__41723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55706;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56282 = state_55693;
state_55693 = G__56282;
continue;
} else {
return ret_value__41721__auto__;
}
break;
}
});
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__ = function(state_55693){
switch(arguments.length){
case 0:
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____0.call(this);
case 1:
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1.call(this,state_55693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____0;
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1;
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__;
})()
})();
var state__41766__auto__ = (function (){var statearr_55708 = (f__41765__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41765__auto__.cljs$core$IFn$_invoke$arity$0() : f__41765__auto__.call(null));
(statearr_55708[(6)] = c__41764__auto__);

return statearr_55708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41766__auto__);
}));

return c__41764__auto__;
});
var G__55709_56285 = new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518);
var G__55710_56286 = jasminegui.mount.http_get_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__55709_56285,G__55710_56286) : re_frame.core.reg_fx.call(null,G__55709_56285,G__55710_56286));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions","get-positions",1610972586),(function (p__55711,p__55712){
var map__55713 = p__55711;
var map__55713__$1 = (((((!((map__55713 == null))))?(((((map__55713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55713):map__55713);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55713__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55714 = p__55712;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55714,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-rating-to-score","get-rating-to-score",391912155),(function (p__55718,p__55719){
var map__55720 = p__55718;
var map__55720__$1 = (((((!((map__55720 == null))))?(((((map__55720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55720):map__55720);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55720__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55721 = p__55719;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55721,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"rating-to-score"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472),(function (p__55725,p__55726){
var map__55727 = p__55725;
var map__55727__$1 = (((((!((map__55727 == null))))?(((((map__55727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55727):map__55727);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55727__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55728 = p__55726;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55728,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"portfolios"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-pivoted-positions","get-pivoted-positions",2145025131),(function (p__55732,p__55733){
var map__55734 = p__55732;
var map__55734__$1 = (((((!((map__55734 == null))))?(((((map__55734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55734):map__55734);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55734__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55735 = p__55733;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55735,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"pivoted-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-total-positions","get-total-positions",-698807167),(function (p__55739,p__55740){
var map__55741 = p__55739;
var map__55741__$1 = (((((!((map__55741 == null))))?(((((map__55741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55741):map__55741);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55741__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55742 = p__55740;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55742,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"total-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-qt-date","get-qt-date",-1072332881),(function (p__55746,p__55747){
var map__55748 = p__55746;
var map__55748__$1 = (((((!((map__55748 == null))))?(((((map__55748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55748):map__55748);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55748__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55749 = p__55747;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55749,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"qt-date"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),false], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-proxies","get-var-proxies",1252506215),(function (p__55753,p__55754){
var map__55755 = p__55753;
var map__55755__$1 = (((((!((map__55755 == null))))?(((((map__55755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55755):map__55755);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55755__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55756 = p__55754;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55756,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-proxies"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","proxies","var/proxies",-1487962738)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-dates","get-var-dates",-1039695287),(function (p__55760,p__55761){
var map__55762 = p__55760;
var map__55762__$1 = (((((!((map__55762 == null))))?(((((map__55762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55762):map__55762);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55762__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55763 = p__55761;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55763,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-dates"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","dates","var/dates",-1599746364)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-data","get-var-data",837806576),(function (p__55767,p__55768){
var map__55769 = p__55767;
var map__55769__$1 = (((((!((map__55769 == null))))?(((((map__55769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55769):map__55769);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55769__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55770 = p__55768;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55770,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55770,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-data?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-var","get-portfolio-var",1001711662),(function (p__55774,p__55775){
var map__55776 = p__55774;
var map__55776__$1 = (((((!((map__55776 == null))))?(((((map__55776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55776):map__55776);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55776__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55777 = p__55775;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55777,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55777,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),portfolio),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-data?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-attribution-date","get-attribution-date",-1329272944),(function (p__55781,p__55782){
var map__55783 = p__55781;
var map__55783__$1 = (((((!((map__55783 == null))))?(((((map__55783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55783):map__55783);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55783__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55784 = p__55782;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55784,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution-date"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),false], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-single-attribution","get-single-attribution",-1620108505),(function (p__55788,p__55789){
var map__55790 = p__55788;
var map__55790__$1 = (((((!((map__55790 == null))))?(((((map__55790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55790):map__55790);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55790__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55791 = p__55789;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55791,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55791,(1),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55791,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution-single?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-single-attribution-portfolio","change-single-attribution-portfolio",1766745939),(function (p__55795,p__55796){
var map__55797 = p__55795;
var map__55797__$1 = (((((!((map__55797 == null))))?(((((map__55797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55797):map__55797);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55797__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55798 = p__55796;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55798,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55798,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),portfolio),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution-single?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450).cljs$core$IFn$_invoke$arity$1(db))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-single-attribution-period","change-single-attribution-period",860703642),(function (p__55802,p__55803){
var map__55804 = p__55802;
var map__55804__$1 = (((((!((map__55804 == null))))?(((((map__55804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55804):map__55804);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55804__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55805 = p__55803;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55805,(0),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55805,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),period),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution-single?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521).cljs$core$IFn$_invoke$arity$1(db)),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-multiple-attribution","get-multiple-attribution",1245740943),(function (p__55809,p__55810){
var map__55811 = p__55809;
var map__55811__$1 = (((((!((map__55811 == null))))?(((((map__55811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55811):map__55811);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55811__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55812 = p__55810;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55812,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55812,(1),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55812,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution-multiple?target=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-multiple-attribution-target","change-multiple-attribution-target",777460289),(function (p__55816,p__55817){
var map__55818 = p__55816;
var map__55818__$1 = (((((!((map__55818 == null))))?(((((map__55818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55818):map__55818);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55818__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55819 = p__55817;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55819,(0),null);
var ktarget = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55819,(1),null);
var target = clojure.string.replace(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ktarget,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)),"-"," ");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),ktarget),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution-multiple?target=",target,"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154).cljs$core$IFn$_invoke$arity$1(db))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-multiple-attribution-period","change-multiple-attribution-period",590435537),(function (p__55823,p__55824){
var map__55825 = p__55823;
var map__55825__$1 = (((((!((map__55825 == null))))?(((((map__55825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55825):map__55825);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55825__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55826 = p__55824;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55826,(0),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55826,(1),null);
var target = clojure.string.replace(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)),"-"," ");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),period),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution-multiple?target=",target,"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));

//# sourceMappingURL=jasminegui.mount.js.map
