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
jasminegui.mount.default_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679),new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705),new cljs.core.Keyword("multiple-portfolio-attribution","field-two","multiple-portfolio-attribution/field-two",-311759422),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword("multiple-portfolio-attribution","field-number","multiple-portfolio-attribution/field-number",-1780989148),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword(null,"active-var","active-var",-1787478523),new cljs.core.Keyword("single-bond-trade-history","bond","single-bond-trade-history/bond",2015871973),new cljs.core.Keyword("trade-history","active-bond","trade-history/active-bond",-1419462650),new cljs.core.Keyword(null,"active-attribution","active-attribution",-792819194),new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-bond-trade-history","show-flat-modal","single-bond-trade-history/show-flat-modal",1072491400),new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047),new cljs.core.Keyword("multiple-portfolio-attribution","display-style","multiple-portfolio-attribution/display-style",-767260119),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("var","result","var/result",1415073996),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738),new cljs.core.Keyword("attribution","summary","attribution/summary",687462095),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("var","history","var/history",-246458543),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181),new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219),new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("multiple-portfolio-attribution","shortcut","multiple-portfolio-attribution/shortcut",809107380),new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("single-portfolio-attribution","table-filter","single-portfolio-attribution/table-filter",1757441687),new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("single-bond-trade-history","show-modal","single-bond-trade-history/show-modal",-1585088359),new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321),new cljs.core.Keyword(null,"success-modal","success-modal",-1899350535),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127),new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334),new cljs.core.Keyword(null,"show-mounting-modal","show-mounting-modal",-1469130950),new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("portfolio-review","active-tab","portfolio-review/active-tab",1429822843),new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword("single-portfolio-attribution","shortcut","single-portfolio-attribution/shortcut",-1711481988),new cljs.core.Keyword("trade-history","history","trade-history/history",1084885309),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),new cljs.core.Keyword("multiple-portfolio-attribution","table-filter","multiple-portfolio-attribution/table-filter",-9483585)],[(1),new cljs.core.Keyword(null,"summary","summary",380847952),"OGEMCORD","Tree",cljs.core.PersistentVector.EMPTY,"None",null,null,"One","Table",new cljs.core.Keyword(null,"overview","overview",-435037267),null,null,new cljs.core.Keyword(null,"summary","summary",380847952),"undefined",new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),true,true,false,cljs.core.PersistentVector.EMPTY,"Tree",cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),"undefined",cljs.core.PersistentVector.EMPTY,null,cljs.core.set(null),new cljs.core.Keyword(null,"quarter","quarter",-508147616),"Tree",null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),null,(1),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),"OGEMCORD",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),(1),new cljs.core.Keyword(null,"daily-3y","daily-3y",-2143971824),"ytd","None",cljs.core.PersistentVector.EMPTY,(1),"One","Tree",false,"OGEMCORD",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show","show",-576705889),false,new cljs.core.Keyword(null,"on-close","on-close",-761178394),null,new cljs.core.Keyword(null,"response","response",-1068424192),null], null),cljs.core.set(null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,true,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),new cljs.core.Keyword(null,"total-effect","total-effect",-967715775),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"home","home",-74557309),(1),null,"OGEMCORD",new cljs.core.Keyword(null,"cembi","cembi",1924920241),"ytd",cljs.core.PersistentVector.EMPTY,true,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),cljs.core.PersistentVector.EMPTY]);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jasminegui.mount","initialize-db","jasminegui.mount/initialize-db",-1621527627),(function (_,___$1){
return jasminegui.mount.default_db;
}));
var seq__49419_49886 = cljs.core.seq(cljs.core.keys(jasminegui.mount.default_db));
var chunk__49420_49887 = null;
var count__49421_49888 = (0);
var i__49422_49889 = (0);
while(true){
if((i__49422_49889 < count__49421_49888)){
var k_49897 = chunk__49420_49887.cljs$core$IIndexed$_nth$arity$2(null,i__49422_49889);
var G__49431_49898 = k_49897;
var G__49432_49899 = ((function (seq__49419_49886,chunk__49420_49887,count__49421_49888,i__49422_49889,G__49431_49898,k_49897){
return (function (db){
return (k_49897.cljs$core$IFn$_invoke$arity$1 ? k_49897.cljs$core$IFn$_invoke$arity$1(db) : k_49897.call(null,db));
});})(seq__49419_49886,chunk__49420_49887,count__49421_49888,i__49422_49889,G__49431_49898,k_49897))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49431_49898,G__49432_49899) : re_frame.core.reg_sub.call(null,G__49431_49898,G__49432_49899));


var G__49908 = seq__49419_49886;
var G__49909 = chunk__49420_49887;
var G__49910 = count__49421_49888;
var G__49911 = (i__49422_49889 + (1));
seq__49419_49886 = G__49908;
chunk__49420_49887 = G__49909;
count__49421_49888 = G__49910;
i__49422_49889 = G__49911;
continue;
} else {
var temp__5735__auto___49915 = cljs.core.seq(seq__49419_49886);
if(temp__5735__auto___49915){
var seq__49419_49916__$1 = temp__5735__auto___49915;
if(cljs.core.chunked_seq_QMARK_(seq__49419_49916__$1)){
var c__4556__auto___49918 = cljs.core.chunk_first(seq__49419_49916__$1);
var G__49919 = cljs.core.chunk_rest(seq__49419_49916__$1);
var G__49920 = c__4556__auto___49918;
var G__49921 = cljs.core.count(c__4556__auto___49918);
var G__49922 = (0);
seq__49419_49886 = G__49919;
chunk__49420_49887 = G__49920;
count__49421_49888 = G__49921;
i__49422_49889 = G__49922;
continue;
} else {
var k_49923 = cljs.core.first(seq__49419_49916__$1);
var G__49433_49925 = k_49923;
var G__49434_49926 = ((function (seq__49419_49886,chunk__49420_49887,count__49421_49888,i__49422_49889,G__49433_49925,k_49923,seq__49419_49916__$1,temp__5735__auto___49915){
return (function (db){
return (k_49923.cljs$core$IFn$_invoke$arity$1 ? k_49923.cljs$core$IFn$_invoke$arity$1(db) : k_49923.call(null,db));
});})(seq__49419_49886,chunk__49420_49887,count__49421_49888,i__49422_49889,G__49433_49925,k_49923,seq__49419_49916__$1,temp__5735__auto___49915))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49433_49925,G__49434_49926) : re_frame.core.reg_sub.call(null,G__49433_49925,G__49434_49926));


var G__49930 = cljs.core.next(seq__49419_49916__$1);
var G__49931 = null;
var G__49932 = (0);
var G__49933 = (0);
seq__49419_49886 = G__49930;
chunk__49420_49887 = G__49931;
count__49421_49888 = G__49932;
i__49422_49889 = G__49933;
continue;
}
} else {
}
}
break;
}
jasminegui.mount.first_level_sort = (function jasminegui$mount$first_level_sort(x){
var G__49439 = x;
switch (G__49439) {
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
var total_line = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"jpm-region","jpm-region",-2074265852),"Total",new cljs.core.Keyword(null,"qt-jpm-sector","qt-jpm-sector",1047055349),"Total",new cljs.core.Keyword(null,"qt-risk-country-name","qt-risk-country-name",1182905474),"Total",new cljs.core.Keyword(null,"TICKER","TICKER",-1215969144),"Total",new cljs.core.Keyword(null,"NAME","NAME",-1127916515),"Total",new cljs.core.Keyword(null,"description","description",-1428560544),"Total",new cljs.core.Keyword(null,"isin","isin",-1197420747),"Total",new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),"Total"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$add_total_line_to_pivot_$_iter__49440(s__49441){
return (new cljs.core.LazySeq(null,(function (){
var s__49441__$1 = s__49441;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49441__$1);
if(temp__5735__auto__){
var s__49441__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49441__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49441__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49443 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49442 = (0);
while(true){
if((i__49442 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__49442);
cljs.core.chunk_append(b__49443,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(p,pivoted_table))], null));

var G__49962 = (i__49442 + (1));
i__49442 = G__49962;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49443),jasminegui$mount$add_total_line_to_pivot_$_iter__49440(cljs.core.chunk_rest(s__49441__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49443),null);
}
} else {
var p = cljs.core.first(s__49441__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(p,pivoted_table))], null),jasminegui$mount$add_total_line_to_pivot_$_iter__49440(cljs.core.rest(s__49441__$2)));
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
var template = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$add_total_line_to_attribution_pivot_$_iter__49449(s__49450){
return (new cljs.core.LazySeq(null,(function (){
var s__49450__$1 = s__49450;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49450__$1);
if(temp__5735__auto__){
var s__49450__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49450__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49450__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49452 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49451 = (0);
while(true){
if((i__49451 < size__4528__auto__)){
var vec__49453 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__49451);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49453,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49453,(1),null);
cljs.core.chunk_append(b__49452,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,"Total"], null));

var G__50158 = (i__49451 + (1));
i__49451 = G__50158;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49452),jasminegui$mount$add_total_line_to_attribution_pivot_$_iter__49449(cljs.core.chunk_rest(s__49450__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49452),null);
}
} else {
var vec__49456 = cljs.core.first(s__49450__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49456,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49456,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,"Total"], null),jasminegui$mount$add_total_line_to_attribution_pivot_$_iter__49449(cljs.core.rest(s__49450__$2)));
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
var total_line = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([template,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$add_total_line_to_attribution_pivot_$_iter__49460(s__49461){
return (new cljs.core.LazySeq(null,(function (){
var s__49461__$1 = s__49461;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49461__$1);
if(temp__5735__auto__){
var s__49461__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49461__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49461__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49463 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49462 = (0);
while(true){
if((i__49462 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__49462);
cljs.core.chunk_append(b__49463,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(p,pivoted_table))], null));

var G__50168 = (i__49462 + (1));
i__49462 = G__50168;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49463),jasminegui$mount$add_total_line_to_attribution_pivot_$_iter__49460(cljs.core.chunk_rest(s__49461__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49463),null);
}
} else {
var p = cljs.core.first(s__49461__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(p,pivoted_table))], null),jasminegui$mount$add_total_line_to_attribution_pivot_$_iter__49460(cljs.core.rest(s__49461__$2)));
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
var G__49467_50170 = new cljs.core.Keyword("single-portfolio-risk","table","single-portfolio-risk/table",-637924467);
var G__49468_50171 = (function (db){
var positions = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db);
var portfolio = new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949).cljs$core$IFn$_invoke$arity$1(db);
var portfolio_total_line = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var G__49470 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(portfolio);
var fexpr__49469 = new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db);
return (fexpr__49469.cljs$core$IFn$_invoke$arity$1 ? fexpr__49469.cljs$core$IFn$_invoke$arity$1(G__49470) : fexpr__49469.call(null,G__49470));
})(),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),"Total",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),"00 Total"], 0));
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477).cljs$core$IFn$_invoke$arity$1(db),"Tree");
var portfolio_positions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49464_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__49464_SHARP_),portfolio);
}),positions);
var viewable_positions = (cljs.core.truth_((((!(is_tree)))?new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951).cljs$core$IFn$_invoke$arity$1(db):false))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49465_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(p1__49465_SHARP_),(0));
}),portfolio_positions):portfolio_positions);
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__49471 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49471) : re_frame.core.subscribe.call(null,G__49471));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49466_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__49466_SHARP_) : rfil.call(null,p1__49466_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__49466_SHARP_) : rfil.call(null,p1__49466_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__49472(s__49473){
return (new cljs.core.LazySeq(null,(function (){
var s__49473__$1 = s__49473;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49473__$1);
if(temp__5735__auto__){
var s__49473__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49473__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49473__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49475 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49474 = (0);
while(true){
if((i__49474 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__49474);
cljs.core.chunk_append(b__49475,(jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.risk_table_columns.call(null,r)));

var G__50184 = (i__49474 + (1));
i__49474 = G__50184;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49475),jasminegui$mount$iter__49472(cljs.core.chunk_rest(s__49473__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49475),null);
}
} else {
var r = cljs.core.first(s__49473__$2);
return cljs.core.cons((jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.risk_table_columns.call(null,r)),jasminegui$mount$iter__49472(cljs.core.rest(s__49473__$2)));
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49467_50170,G__49468_50171) : re_frame.core.reg_sub.call(null,G__49467_50170,G__49468_50171));
var G__49477_50203 = new cljs.core.Keyword("single-portfolio-attribution","clean-table","single-portfolio-attribution/clean-table",-391468387);
var G__49478_50204 = (function (db){
var data = new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047).cljs$core$IFn$_invoke$arity$1(db);
var template = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__49479(s__49480){
return (new cljs.core.LazySeq(null,(function (){
var s__49480__$1 = s__49480;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49480__$1);
if(temp__5735__auto__){
var s__49480__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49480__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49480__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49482 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49481 = (0);
while(true){
if((i__49481 < size__4528__auto__)){
var vec__49483 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__49481);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49483,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49483,(1),null);
cljs.core.chunk_append(b__49482,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,"Total"], null));

var G__50264 = (i__49481 + (1));
i__49481 = G__50264;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49482),jasminegui$mount$iter__49479(cljs.core.chunk_rest(s__49480__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49482),null);
}
} else {
var vec__49486 = cljs.core.first(s__49480__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49486,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49486,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,"Total"], null),jasminegui$mount$iter__49479(cljs.core.rest(s__49480__$2)));
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49476_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__49476_SHARP_) : rfil.call(null,p1__49476_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__49476_SHARP_) : rfil.call(null,p1__49476_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__49489(s__49490){
return (new cljs.core.LazySeq(null,(function (){
var s__49490__$1 = s__49490;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49490__$1);
if(temp__5735__auto__){
var s__49490__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49490__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49490__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49492 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49491 = (0);
while(true){
if((i__49491 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__49491);
cljs.core.chunk_append(b__49492,(jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.attribution_table_columns.call(null,r)));

var G__50269 = (i__49491 + (1));
i__49491 = G__50269;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49492),jasminegui$mount$iter__49489(cljs.core.chunk_rest(s__49490__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49492),null);
}
} else {
var r = cljs.core.first(s__49490__$2);
return cljs.core.cons((jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.attribution_table_columns.call(null,r)),jasminegui$mount$iter__49489(cljs.core.rest(s__49490__$2)));
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49477_50203,G__49478_50204) : re_frame.core.reg_sub.call(null,G__49477_50203,G__49478_50204));
var G__49495_50273 = new cljs.core.Keyword("multiple-portfolio-risk","table","multiple-portfolio-risk/table",1962237397);
var G__49496_50274 = (function (db){
var pivoted_positions = new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863).cljs$core$IFn$_invoke$arity$1(db);
var kselected_portfolios = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045).cljs$core$IFn$_invoke$arity$1(db));
var hide_zero_risk = new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337).cljs$core$IFn$_invoke$arity$1(db);
var display_key_one = new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337).cljs$core$IFn$_invoke$arity$1(db);
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547).cljs$core$IFn$_invoke$arity$1(db),"Tree");
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__49497 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49497) : re_frame.core.subscribe.call(null,G__49497));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49493_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__49493_SHARP_) : rfil.call(null,p1__49493_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__49493_SHARP_) : rfil.call(null,p1__49493_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__49498(s__49499){
return (new cljs.core.LazySeq(null,(function (){
var s__49499__$1 = s__49499;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49499__$1);
if(temp__5735__auto__){
var s__49499__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49499__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49499__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49501 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49500 = (0);
while(true){
if((i__49500 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__49500);
cljs.core.chunk_append(b__49501,(jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.risk_table_columns.call(null,r)));

var G__50283 = (i__49500 + (1));
i__49500 = G__50283;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49501),jasminegui$mount$iter__49498(cljs.core.chunk_rest(s__49499__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49501),null);
}
} else {
var r = cljs.core.first(s__49499__$2);
return cljs.core.cons((jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.risk_table_columns.call(null,r)),jasminegui$mount$iter__49498(cljs.core.rest(s__49499__$2)));
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
var pivoted_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49494_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__49494_SHARP_,(function (){var fexpr__49502 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.risk_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_one,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__49502.cljs$core$IFn$_invoke$arity$1 ? fexpr__49502.cljs$core$IFn$_invoke$arity$1(p1__49494_SHARP_) : fexpr__49502.call(null,p1__49494_SHARP_));
})()], 0));
}),pivoted_positions);
var thfil = (function (line){
return (!(cljs.core.every_QMARK_(cljs.core.zero_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(line,kselected_portfolios))));
});
var pivoted_data_hide_zero = (cljs.core.truth_((((!(is_tree)))?hide_zero_risk:false))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(thfil,pivoted_data):pivoted_data);
return jasminegui.mount.add_total_line_to_pivot(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.mount.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),pivoted_data_hide_zero),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(db)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49495_50273,G__49496_50274) : re_frame.core.reg_sub.call(null,G__49495_50273,G__49496_50274));
var G__49505_50300 = new cljs.core.Keyword("multiple-portfolio-attribution","clean-table","multiple-portfolio-attribution/clean-table",-1066824107);
var G__49506_50301 = (function (db){
var pivoted_positions = new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705).cljs$core$IFn$_invoke$arity$1(db);
var kselected_portfolios = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959).cljs$core$IFn$_invoke$arity$1(db));
var display_key_one = new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707).cljs$core$IFn$_invoke$arity$1(db);
var attribution_choices = (function (){var rfil = cljs.core.deref((function (){var G__49507 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49507) : re_frame.core.subscribe.call(null,G__49507));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49503_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__49503_SHARP_) : rfil.call(null,p1__49503_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__49503_SHARP_) : rfil.call(null,p1__49503_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__49508(s__49509){
return (new cljs.core.LazySeq(null,(function (){
var s__49509__$1 = s__49509;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49509__$1);
if(temp__5735__auto__){
var s__49509__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49509__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49509__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49511 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49510 = (0);
while(true){
if((i__49510 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__49510);
cljs.core.chunk_append(b__49511,(jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.attribution_table_columns.call(null,r)));

var G__50309 = (i__49510 + (1));
i__49510 = G__50309;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49511),jasminegui$mount$iter__49508(cljs.core.chunk_rest(s__49509__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49511),null);
}
} else {
var r = cljs.core.first(s__49509__$2);
return cljs.core.cons((jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.attribution_table_columns.call(null,r)),jasminegui$mount$iter__49508(cljs.core.rest(s__49509__$2)));
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
var pivoted_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49504_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__49504_SHARP_,(function (){var fexpr__49512 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_one,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__49512.cljs$core$IFn$_invoke$arity$1 ? fexpr__49512.cljs$core$IFn$_invoke$arity$1(p1__49504_SHARP_) : fexpr__49512.call(null,p1__49504_SHARP_));
})()], 0));
}),pivoted_positions);
return jasminegui.mount.add_total_line_to_attribution_pivot(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.mount.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),pivoted_data),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(db)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49505_50300,G__49506_50301) : re_frame.core.reg_sub.call(null,G__49505_50300,G__49506_50301));
var G__49517_50312 = new cljs.core.Keyword("portfolio-alignment","table","portfolio-alignment/table",-1411501022);
var G__49518_50313 = (function (db){
var group = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49513_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__49513_SHARP_),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110).cljs$core$IFn$_invoke$arity$1(db));
}),jasminegui.static$.portfolio_alignment_groups))));
var pivoted_positions = new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863).cljs$core$IFn$_invoke$arity$1(db);
var base_kportfolio = cljs.core.first(group);
var kportfolios = cljs.core.rest(group);
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__49519 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49519) : re_frame.core.subscribe.call(null,G__49519));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49514_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__49514_SHARP_) : rfil.call(null,p1__49514_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__49514_SHARP_) : rfil.call(null,p1__49514_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__49520(s__49521){
return (new cljs.core.LazySeq(null,(function (){
var s__49521__$1 = s__49521;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49521__$1);
if(temp__5735__auto__){
var s__49521__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49521__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49521__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49523 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49522 = (0);
while(true){
if((i__49522 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__49522);
cljs.core.chunk_append(b__49523,(jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.risk_table_columns.call(null,r)));

var G__50321 = (i__49522 + (1));
i__49522 = G__50321;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49523),jasminegui$mount$iter__49520(cljs.core.chunk_rest(s__49521__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49523),null);
}
} else {
var r = cljs.core.first(s__49521__$2);
return cljs.core.cons((jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.risk_table_columns.call(null,r)),jasminegui$mount$iter__49520(cljs.core.rest(s__49521__$2)));
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
var pivoted_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49515_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__49515_SHARP_,(function (){var fexpr__49524 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.risk_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__49524.cljs$core$IFn$_invoke$arity$1 ? fexpr__49524.cljs$core$IFn$_invoke$arity$1(p1__49515_SHARP_) : fexpr__49524.call(null,p1__49515_SHARP_));
})()], 0));
}),pivoted_positions);
var differentiate = (function (line){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (temp_line,p){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(temp_line,p,((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(temp_line) : p.call(null,temp_line)) - (base_kportfolio.cljs$core$IFn$_invoke$arity$1 ? base_kportfolio.cljs$core$IFn$_invoke$arity$1(temp_line) : base_kportfolio.call(null,temp_line))));
}),line,kportfolios);
});
var pivoted_data_diff = cljs.core.map.cljs$core$IFn$_invoke$arity$2(differentiate,pivoted_data);
var threshold = (0.01 * cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49516_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__49516_SHARP_),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053).cljs$core$IFn$_invoke$arity$1(db));
}),jasminegui.static$.threshold_choices_alignment)))));
var thfil = (function (line){
return cljs.core.some((function (x){
return (((x < (- threshold))) || ((x > threshold)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(line,kportfolios));
});
var pivoted_data_diff_post_th = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(thfil,pivoted_data_diff);
return jasminegui.mount.add_total_line_to_pivot(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.mount.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),pivoted_data_diff_post_th),kportfolios);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49517_50312,G__49518_50313) : re_frame.core.reg_sub.call(null,G__49517_50312,G__49518_50313));
var G__49526_50330 = new cljs.core.Keyword("summary-display","table","summary-display/table",1149370831);
var G__49527_50331 = (function (db){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__49528(s__49529){
return (new cljs.core.LazySeq(null,(function (){
var s__49529__$1 = s__49529;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49529__$1);
if(temp__5735__auto__){
var s__49529__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49529__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49529__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49531 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49530 = (0);
while(true){
if((i__49530 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__49530);
cljs.core.chunk_append(b__49531,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"portfolio","portfolio",957568598),p], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = ((function (i__49530,p,c__4527__auto__,size__4528__auto__,b__49531,s__49529__$2,temp__5735__auto__,G__49526_50330){
return (function jasminegui$mount$iter__49528_$_iter__49532(s__49533){
return (new cljs.core.LazySeq(null,((function (i__49530,p,c__4527__auto__,size__4528__auto__,b__49531,s__49529__$2,temp__5735__auto__,G__49526_50330){
return (function (){
var s__49533__$1 = s__49533;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__49533__$1);
if(temp__5735__auto____$1){
var s__49533__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49533__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__49533__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__49535 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__49534 = (0);
while(true){
if((i__49534 < size__4528__auto____$1)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto____$1,i__49534);
cljs.core.chunk_append(b__49535,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null));

var G__50335 = (i__49534 + (1));
i__49534 = G__50335;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49535),jasminegui$mount$iter__49528_$_iter__49532(cljs.core.chunk_rest(s__49533__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49535),null);
}
} else {
var k = cljs.core.first(s__49533__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null),jasminegui$mount$iter__49528_$_iter__49532(cljs.core.rest(s__49533__$2)));
}
} else {
return null;
}
break;
}
});})(i__49530,p,c__4527__auto__,size__4528__auto__,b__49531,s__49529__$2,temp__5735__auto__,G__49526_50330))
,null,null));
});})(i__49530,p,c__4527__auto__,size__4528__auto__,b__49531,s__49529__$2,temp__5735__auto__,G__49526_50330))
;
return iter__4529__auto__(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175),new cljs.core.Keyword(null,"base-value","base-value",921379228),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067),new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030),new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),new cljs.core.Keyword(null,"contrib-beta-1y-daily","contrib-beta-1y-daily",259924328)], null));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861)], null)) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__49530,p,c__4527__auto__,size__4528__auto__,b__49531,s__49529__$2,temp__5735__auto__,G__49526_50330){
return (function (p1__49525_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__49525_SHARP_),p)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-class","asset-class",1845554418).cljs$core$IFn$_invoke$arity$1(p1__49525_SHARP_),"BONDS")));
});})(i__49530,p,c__4527__auto__,size__4528__auto__,b__49531,s__49529__$2,temp__5735__auto__,G__49526_50330))
,new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db)))))], null)], 0)));

var G__50340 = (i__49530 + (1));
i__49530 = G__50340;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49531),jasminegui$mount$iter__49528(cljs.core.chunk_rest(s__49529__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49531),null);
}
} else {
var p = cljs.core.first(s__49529__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"portfolio","portfolio",957568598),p], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = ((function (p,s__49529__$2,temp__5735__auto__,G__49526_50330){
return (function jasminegui$mount$iter__49528_$_iter__49536(s__49537){
return (new cljs.core.LazySeq(null,(function (){
var s__49537__$1 = s__49537;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__49537__$1);
if(temp__5735__auto____$1){
var s__49537__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49537__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49537__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49539 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49538 = (0);
while(true){
if((i__49538 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__49538);
cljs.core.chunk_append(b__49539,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null));

var G__50348 = (i__49538 + (1));
i__49538 = G__50348;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49539),jasminegui$mount$iter__49528_$_iter__49536(cljs.core.chunk_rest(s__49537__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49539),null);
}
} else {
var k = cljs.core.first(s__49537__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null),jasminegui$mount$iter__49528_$_iter__49536(cljs.core.rest(s__49537__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(p,s__49529__$2,temp__5735__auto__,G__49526_50330))
;
return iter__4529__auto__(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175),new cljs.core.Keyword(null,"base-value","base-value",921379228),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067),new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030),new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),new cljs.core.Keyword(null,"contrib-beta-1y-daily","contrib-beta-1y-daily",259924328)], null));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861)], null)) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (p,s__49529__$2,temp__5735__auto__,G__49526_50330){
return (function (p1__49525_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__49525_SHARP_),p)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-class","asset-class",1845554418).cljs$core$IFn$_invoke$arity$1(p1__49525_SHARP_),"BONDS")));
});})(p,s__49529__$2,temp__5735__auto__,G__49526_50330))
,new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db)))))], null)], 0)),jasminegui$mount$iter__49528(cljs.core.rest(s__49529__$2)));
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49526_50330,G__49527_50331) : re_frame.core.reg_sub.call(null,G__49526_50330,G__49527_50331));
var seq__49540_50353 = cljs.core.seq(cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword(null,"active-var","active-var",-1787478523),new cljs.core.Keyword(null,"active-attribution","active-attribution",-792819194),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738),new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334),new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679),new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),new cljs.core.Keyword("single-portfolio-attribution","table-filter","single-portfolio-attribution/table-filter",1757441687),new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047),new cljs.core.Keyword("multiple-portfolio-attribution","display-style","multiple-portfolio-attribution/display-style",-767260119),new cljs.core.Keyword("multiple-portfolio-attribution","field-number","multiple-portfolio-attribution/field-number",-1780989148),new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),new cljs.core.Keyword("multiple-portfolio-attribution","field-two","multiple-portfolio-attribution/field-two",-311759422),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),new cljs.core.Keyword("multiple-portfolio-attribution","hide-zero-holdings","multiple-portfolio-attribution/hide-zero-holdings",1677138723),new cljs.core.Keyword("multiple-portfolio-attribution","shortcut","multiple-portfolio-attribution/shortcut",809107380),new cljs.core.Keyword("multiple-portfolio-attribution","table-filter","multiple-portfolio-attribution/table-filter",-9483585),new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705),new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),new cljs.core.Keyword("attribution","summary","attribution/summary",687462095),new cljs.core.Keyword("single-bond-trade-history","show-flat-modal","single-bond-trade-history/show-flat-modal",1072491400),new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181),new cljs.core.Keyword("single-bond-trade-history","show-modal","single-bond-trade-history/show-modal",-1585088359),new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127),new cljs.core.Keyword("single-bond-trade-history","bond","single-bond-trade-history/bond",2015871973),new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865),new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321),new cljs.core.Keyword("portfolio-review","active-tab","portfolio-review/active-tab",1429822843)], true));
var chunk__49541_50354 = null;
var count__49542_50355 = (0);
var i__49543_50356 = (0);
while(true){
if((i__49543_50356 < count__49542_50355)){
var k_50360 = chunk__49541_50354.cljs$core$IIndexed$_nth$arity$2(null,i__49543_50356);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_50360,((function (seq__49540_50353,chunk__49541_50354,count__49542_50355,i__49543_50356,k_50360){
return (function (db,p__49552){
var vec__49553 = p__49552;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49553,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49553,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_50360,data);
});})(seq__49540_50353,chunk__49541_50354,count__49542_50355,i__49543_50356,k_50360))
);


var G__50361 = seq__49540_50353;
var G__50362 = chunk__49541_50354;
var G__50363 = count__49542_50355;
var G__50364 = (i__49543_50356 + (1));
seq__49540_50353 = G__50361;
chunk__49541_50354 = G__50362;
count__49542_50355 = G__50363;
i__49543_50356 = G__50364;
continue;
} else {
var temp__5735__auto___50365 = cljs.core.seq(seq__49540_50353);
if(temp__5735__auto___50365){
var seq__49540_50366__$1 = temp__5735__auto___50365;
if(cljs.core.chunked_seq_QMARK_(seq__49540_50366__$1)){
var c__4556__auto___50367 = cljs.core.chunk_first(seq__49540_50366__$1);
var G__50368 = cljs.core.chunk_rest(seq__49540_50366__$1);
var G__50369 = c__4556__auto___50367;
var G__50370 = cljs.core.count(c__4556__auto___50367);
var G__50371 = (0);
seq__49540_50353 = G__50368;
chunk__49541_50354 = G__50369;
count__49542_50355 = G__50370;
i__49543_50356 = G__50371;
continue;
} else {
var k_50372 = cljs.core.first(seq__49540_50366__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_50372,((function (seq__49540_50353,chunk__49541_50354,count__49542_50355,i__49543_50356,k_50372,seq__49540_50366__$1,temp__5735__auto___50365){
return (function (db,p__49556){
var vec__49557 = p__49556;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49557,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49557,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_50372,data);
});})(seq__49540_50353,chunk__49541_50354,count__49542_50355,i__49543_50356,k_50372,seq__49540_50366__$1,temp__5735__auto___50365))
);


var G__50373 = cljs.core.next(seq__49540_50366__$1);
var G__50374 = null;
var G__50375 = (0);
var G__50376 = (0);
seq__49540_50353 = G__50373;
chunk__49541_50354 = G__50374;
count__49542_50355 = G__50375;
i__49543_50356 = G__50376;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"positions","positions",-1380538434),(function (db,p__49560){
var vec__49561 = p__49560;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49561,(0),null);
var positions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49561,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"positions","positions",-1380538434),positions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-mounting-modal","show-mounting-modal",-1469130950),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127),(function (db,p__49564){
var vec__49565 = p__49564;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49565,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49565,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127),data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181),(function (db,p__49568){
var vec__49569 = p__49568;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49569,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49569,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181),data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),(function (db,p__49572){
var vec__49573 = p__49572;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49573,(0),null);
var portfolios = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49573,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),portfolios,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),cljs.core.set(portfolios),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),cljs.core.set(portfolios)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),(function (db,p__49576){
var vec__49577 = p__49576;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49577,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49577,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49577,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),(function (db,p__49580){
var vec__49581 = p__49580;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49581,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49581,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49581,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),(function (db,p__49584){
var vec__49585 = p__49584;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49585,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49585,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49585,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),(function (db,p__49588){
var vec__49589 = p__49588;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49589,(0),null);
var qt_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49589,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),clojure.string.replace(qt_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),(function (db,p__49592){
var vec__49593 = p__49592;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49593,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49593,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49593,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219),(function (db,p__49596){
var vec__49597 = p__49596;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49597,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49597,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49597,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),(function (db,p__49600){
var vec__49601 = p__49600;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49601,(0),null);
var attribution_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49601,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),clojure.string.replace(attribution_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),(function (db,p__49604){
var vec__49605 = p__49604;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49605,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49605,(1),null);
var G__49608 = snapshot;
switch (G__49608) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49608)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cycle-shortcut","cycle-shortcut",-1617058214),(function (db,p__49609){
var vec__49610 = p__49609;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49610,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49610,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49610,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"active-home","active-home",53621216).cljs$core$IFn$_invoke$arity$1(db)),"-risk/shortcut"].join(''));
var shortcut_value = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
if((shortcut_value < (4))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(shortcut_value + (1)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(1));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tree-table","tree-table",-1263002012),(function (db,p__49613){
var vec__49614 = p__49613;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49614,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49614,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49614,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"active-home","active-home",53621216).cljs$core$IFn$_invoke$arity$1(db)),"-risk/display-style"].join(''));
var G__49617 = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
switch (G__49617) {
case "Tree":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Table");

break;
case "Table":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Tree");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49617)].join('')));

}
}));
jasminegui.mount.http_get_dispatch = (function jasminegui$mount$http_get_dispatch(request){
var c__41764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41765__auto__ = (function (){var switch__41741__auto__ = (function (state_49646){
var state_val_49647 = (state_49646[(1)]);
if((state_val_49647 === (1))){
var inst_49618 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_49619 = cljs_http.client.get(inst_49618);
var state_49646__$1 = state_49646;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49646__$1,(2),inst_49619);
} else {
if((state_val_49647 === (2))){
var inst_49621 = (state_49646[(2)]);
var inst_49622 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_49623 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_49646__$1 = (function (){var statearr_49648 = state_49646;
(statearr_49648[(7)] = inst_49621);

(statearr_49648[(8)] = inst_49622);

return statearr_49648;
})();
if(cljs.core.truth_(inst_49623)){
var statearr_49649_50416 = state_49646__$1;
(statearr_49649_50416[(1)] = (3));

} else {
var statearr_49650_50417 = state_49646__$1;
(statearr_49650_50417[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49647 === (3))){
var inst_49621 = (state_49646[(7)]);
var inst_49625 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_49621);
var inst_49626 = JSON.parse(inst_49625);
var inst_49627 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_49626,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_49646__$1 = state_49646;
var statearr_49651_50419 = state_49646__$1;
(statearr_49651_50419[(2)] = inst_49627);

(statearr_49651_50419[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49647 === (4))){
var inst_49621 = (state_49646[(7)]);
var inst_49629 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_49621);
var state_49646__$1 = state_49646;
var statearr_49652_50420 = state_49646__$1;
(statearr_49652_50420[(2)] = inst_49629);

(statearr_49652_50420[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49647 === (5))){
var inst_49622 = (state_49646[(8)]);
var inst_49631 = (state_49646[(2)]);
var inst_49632 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_49622,inst_49631);
var inst_49633 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_49632) : re_frame.core.dispatch.call(null,inst_49632));
var inst_49634 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_49646__$1 = (function (){var statearr_49653 = state_49646;
(statearr_49653[(9)] = inst_49633);

return statearr_49653;
})();
if(cljs.core.truth_(inst_49634)){
var statearr_49654_50426 = state_49646__$1;
(statearr_49654_50426[(1)] = (6));

} else {
var statearr_49655_50427 = state_49646__$1;
(statearr_49655_50427[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49647 === (6))){
var inst_49636 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49637 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_49638 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_49639 = [inst_49637,inst_49638];
var inst_49640 = (new cljs.core.PersistentVector(null,2,(5),inst_49636,inst_49639,null));
var inst_49641 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_49640) : re_frame.core.dispatch.call(null,inst_49640));
var state_49646__$1 = state_49646;
var statearr_49656_50432 = state_49646__$1;
(statearr_49656_50432[(2)] = inst_49641);

(statearr_49656_50432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49647 === (7))){
var state_49646__$1 = state_49646;
var statearr_49657_50433 = state_49646__$1;
(statearr_49657_50433[(2)] = null);

(statearr_49657_50433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49647 === (8))){
var inst_49644 = (state_49646[(2)]);
var state_49646__$1 = state_49646;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49646__$1,inst_49644);
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
var statearr_49658 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49658[(0)] = jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__);

(statearr_49658[(1)] = (1));

return statearr_49658;
});
var jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____1 = (function (state_49646){
while(true){
var ret_value__41743__auto__ = (function (){try{while(true){
var result__41744__auto__ = switch__41741__auto__(state_49646);
if(cljs.core.keyword_identical_QMARK_(result__41744__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41744__auto__;
}
break;
}
}catch (e49659){if((e49659 instanceof Object)){
var ex__41745__auto__ = e49659;
var statearr_49660_50440 = state_49646;
(statearr_49660_50440[(5)] = ex__41745__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49659;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50441 = state_49646;
state_49646 = G__50441;
continue;
} else {
return ret_value__41743__auto__;
}
break;
}
});
jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__ = function(state_49646){
switch(arguments.length){
case 0:
return jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____0.call(this);
case 1:
return jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____1.call(this,state_49646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____0;
jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____1;
return jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__;
})()
})();
var state__41766__auto__ = (function (){var statearr_49661 = (f__41765__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41765__auto__.cljs$core$IFn$_invoke$arity$0() : f__41765__auto__.call(null));
(statearr_49661[(6)] = c__41764__auto__);

return statearr_49661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41766__auto__);
}));

return c__41764__auto__;
});
var G__49662_50443 = new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518);
var G__49663_50444 = jasminegui.mount.http_get_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__49662_50443,G__49663_50444) : re_frame.core.reg_fx.call(null,G__49662_50443,G__49663_50444));
jasminegui.mount.http_post_dispatch = (function jasminegui$mount$http_post_dispatch(request){
var c__41764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41765__auto__ = (function (){var switch__41741__auto__ = (function (state_49696){
var state_val_49697 = (state_49696[(1)]);
if((state_val_49697 === (1))){
var inst_49664 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_49665 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_49666 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
var inst_49667 = [inst_49666];
var inst_49668 = cljs.core.PersistentHashMap.fromArrays(inst_49665,inst_49667);
var inst_49669 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_49664,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_49668], 0));
var state_49696__$1 = state_49696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49696__$1,(2),inst_49669);
} else {
if((state_val_49697 === (2))){
var inst_49671 = (state_49696[(2)]);
var inst_49672 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_49673 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_49696__$1 = (function (){var statearr_49698 = state_49696;
(statearr_49698[(7)] = inst_49672);

(statearr_49698[(8)] = inst_49671);

return statearr_49698;
})();
if(cljs.core.truth_(inst_49673)){
var statearr_49699_50454 = state_49696__$1;
(statearr_49699_50454[(1)] = (3));

} else {
var statearr_49700_50456 = state_49696__$1;
(statearr_49700_50456[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49697 === (3))){
var inst_49671 = (state_49696[(8)]);
var inst_49675 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_49671);
var inst_49676 = JSON.parse(inst_49675);
var inst_49677 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_49676,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_49696__$1 = state_49696;
var statearr_49701_50461 = state_49696__$1;
(statearr_49701_50461[(2)] = inst_49677);

(statearr_49701_50461[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49697 === (4))){
var inst_49671 = (state_49696[(8)]);
var inst_49679 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_49671);
var state_49696__$1 = state_49696;
var statearr_49702_50463 = state_49696__$1;
(statearr_49702_50463[(2)] = inst_49679);

(statearr_49702_50463[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49697 === (5))){
var inst_49672 = (state_49696[(7)]);
var inst_49681 = (state_49696[(2)]);
var inst_49682 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_49672,inst_49681);
var inst_49683 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_49682) : re_frame.core.dispatch.call(null,inst_49682));
var inst_49684 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_49696__$1 = (function (){var statearr_49703 = state_49696;
(statearr_49703[(9)] = inst_49683);

return statearr_49703;
})();
if(cljs.core.truth_(inst_49684)){
var statearr_49704_50469 = state_49696__$1;
(statearr_49704_50469[(1)] = (6));

} else {
var statearr_49705_50470 = state_49696__$1;
(statearr_49705_50470[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49697 === (6))){
var inst_49686 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49687 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_49688 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_49689 = [inst_49687,inst_49688];
var inst_49690 = (new cljs.core.PersistentVector(null,2,(5),inst_49686,inst_49689,null));
var inst_49691 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_49690) : re_frame.core.dispatch.call(null,inst_49690));
var state_49696__$1 = state_49696;
var statearr_49706_50472 = state_49696__$1;
(statearr_49706_50472[(2)] = inst_49691);

(statearr_49706_50472[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49697 === (7))){
var state_49696__$1 = state_49696;
var statearr_49707_50473 = state_49696__$1;
(statearr_49707_50473[(2)] = null);

(statearr_49707_50473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49697 === (8))){
var inst_49694 = (state_49696[(2)]);
var state_49696__$1 = state_49696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49696__$1,inst_49694);
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
var statearr_49708 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49708[(0)] = jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto__);

(statearr_49708[(1)] = (1));

return statearr_49708;
});
var jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto____1 = (function (state_49696){
while(true){
var ret_value__41743__auto__ = (function (){try{while(true){
var result__41744__auto__ = switch__41741__auto__(state_49696);
if(cljs.core.keyword_identical_QMARK_(result__41744__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41744__auto__;
}
break;
}
}catch (e49709){if((e49709 instanceof Object)){
var ex__41745__auto__ = e49709;
var statearr_49710_50477 = state_49696;
(statearr_49710_50477[(5)] = ex__41745__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49709;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50479 = state_49696;
state_49696 = G__50479;
continue;
} else {
return ret_value__41743__auto__;
}
break;
}
});
jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto__ = function(state_49696){
switch(arguments.length){
case 0:
return jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto____0.call(this);
case 1:
return jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto____1.call(this,state_49696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto____0;
jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto____1;
return jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto__;
})()
})();
var state__41766__auto__ = (function (){var statearr_49711 = (f__41765__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41765__auto__.cljs$core$IFn$_invoke$arity$0() : f__41765__auto__.call(null));
(statearr_49711[(6)] = c__41764__auto__);

return statearr_49711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41766__auto__);
}));

return c__41764__auto__;
});
var G__49712_50481 = new cljs.core.Keyword(null,"http-post-dispatch","http-post-dispatch",2138865017);
var G__49713_50482 = jasminegui.mount.http_post_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__49712_50481,G__49713_50482) : re_frame.core.reg_fx.call(null,G__49712_50481,G__49713_50482));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions","get-positions",1610972586),(function (p__49714,p__49715){
var map__49716 = p__49714;
var map__49716__$1 = (((((!((map__49716 == null))))?(((((map__49716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49716):map__49716);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49716__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49717 = p__49715;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49717,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-rating-to-score","get-rating-to-score",391912155),(function (p__49721,p__49722){
var map__49723 = p__49721;
var map__49723__$1 = (((((!((map__49723 == null))))?(((((map__49723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49723):map__49723);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49723__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49724 = p__49722;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49724,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"rating-to-score"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472),(function (p__49728,p__49729){
var map__49730 = p__49728;
var map__49730__$1 = (((((!((map__49730 == null))))?(((((map__49730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49730):map__49730);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49730__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49731 = p__49729;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49731,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"portfolios"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-pivoted-positions","get-pivoted-positions",2145025131),(function (p__49735,p__49736){
var map__49737 = p__49735;
var map__49737__$1 = (((((!((map__49737 == null))))?(((((map__49737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49737):map__49737);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49737__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49738 = p__49736;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49738,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"pivoted-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-total-positions","get-total-positions",-698807167),(function (p__49742,p__49743){
var map__49744 = p__49742;
var map__49744__$1 = (((((!((map__49744 == null))))?(((((map__49744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49744):map__49744);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49744__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49745 = p__49743;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49745,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"total-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-qt-date","get-qt-date",-1072332881),(function (p__49749,p__49750){
var map__49751 = p__49749;
var map__49751__$1 = (((((!((map__49751 == null))))?(((((map__49751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49751):map__49751);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49751__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49752 = p__49750;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49752,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"qt-date"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),false], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-proxies","get-var-proxies",1252506215),(function (p__49756,p__49757){
var map__49758 = p__49756;
var map__49758__$1 = (((((!((map__49758 == null))))?(((((map__49758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49758):map__49758);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49758__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49759 = p__49757;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49759,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-proxies"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","proxies","var/proxies",-1487962738)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-dates","get-var-dates",-1039695287),(function (p__49763,p__49764){
var map__49765 = p__49763;
var map__49765__$1 = (((((!((map__49765 == null))))?(((((map__49765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49765):map__49765);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49765__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49766 = p__49764;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49766,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-dates"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","dates","var/dates",-1599746364)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-data","get-var-data",837806576),(function (p__49770,p__49771){
var map__49772 = p__49770;
var map__49772__$1 = (((((!((map__49772 == null))))?(((((map__49772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49772):map__49772);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49772__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49773 = p__49771;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49773,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49773,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-data?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-var","get-portfolio-var",1001711662),(function (p__49777,p__49778){
var map__49779 = p__49777;
var map__49779__$1 = (((((!((map__49779 == null))))?(((((map__49779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49779):map__49779);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49779__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49780 = p__49778;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49780,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49780,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),portfolio),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-data?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-attribution-date","get-attribution-date",-1329272944),(function (p__49784,p__49785){
var map__49786 = p__49784;
var map__49786__$1 = (((((!((map__49786 == null))))?(((((map__49786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49786):map__49786);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49786__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49787 = p__49785;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49787,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution?query-type=attribution-date"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),false], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-single-attribution","get-single-attribution",-1620108505),(function (p__49791,p__49792){
var map__49793 = p__49791;
var map__49793__$1 = (((((!((map__49793 == null))))?(((((map__49793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49793):map__49793);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49793__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49794 = p__49792;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49794,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49794,(1),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49794,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-single-attribution-portfolio","change-single-attribution-portfolio",1766745939),(function (p__49798,p__49799){
var map__49800 = p__49798;
var map__49800__$1 = (((((!((map__49800 == null))))?(((((map__49800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49800):map__49800);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49800__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49801 = p__49799;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49801,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49801,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),portfolio),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450).cljs$core$IFn$_invoke$arity$1(db))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-single-attribution-period","change-single-attribution-period",860703642),(function (p__49805,p__49806){
var map__49807 = p__49805;
var map__49807__$1 = (((((!((map__49807 == null))))?(((((map__49807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49807):map__49807);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49807__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49808 = p__49806;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49808,(0),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49808,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),period),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521).cljs$core$IFn$_invoke$arity$1(db)),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-multiple-attribution","get-multiple-attribution",1245740943),(function (p__49812,p__49813){
var map__49814 = p__49812;
var map__49814__$1 = (((((!((map__49814 == null))))?(((((map__49814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49814):map__49814);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49814__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49815 = p__49813;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49815,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49815,(1),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49815,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution?query-type=multiple-portfolio&target=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-multiple-attribution-target","change-multiple-attribution-target",777460289),(function (p__49819,p__49820){
var map__49821 = p__49819;
var map__49821__$1 = (((((!((map__49821 == null))))?(((((map__49821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49821):map__49821);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49821__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49822 = p__49820;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49822,(0),null);
var ktarget = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49822,(1),null);
var target = clojure.string.replace(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ktarget,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)),"-"," ");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),ktarget),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution?query-type=multiple-portfolio&target=",target,"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154).cljs$core$IFn$_invoke$arity$1(db))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-multiple-attribution-period","change-multiple-attribution-period",590435537),(function (p__49826,p__49827){
var map__49828 = p__49826;
var map__49828__$1 = (((((!((map__49828 == null))))?(((((map__49828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49828):map__49828);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49828__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49829 = p__49827;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49829,(0),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49829,(1),null);
var target = clojure.string.replace(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)),"-"," ");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),period),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution?query-type=multiple-portfolio&target=",target,"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-attribution-summary","get-attribution-summary",-27760654),(function (p__49833,p__49834){
var map__49835 = p__49833;
var map__49835__$1 = (((((!((map__49835 == null))))?(((((map__49835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49835):map__49835);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49835__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49836 = p__49834;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49836,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution?query-type=summary"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("attribution","summary","attribution/summary",687462095)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));

//# sourceMappingURL=jasminegui.mount.js.map
