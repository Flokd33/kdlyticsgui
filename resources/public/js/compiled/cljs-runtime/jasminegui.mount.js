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
jasminegui.mount.default_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679),new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705),new cljs.core.Keyword("multiple-portfolio-attribution","field-two","multiple-portfolio-attribution/field-two",-311759422),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword("multiple-portfolio-attribution","field-number","multiple-portfolio-attribution/field-number",-1780989148),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword(null,"active-var","active-var",-1787478523),new cljs.core.Keyword("single-bond-trade-history","bond","single-bond-trade-history/bond",2015871973),new cljs.core.Keyword("trade-history","active-bond","trade-history/active-bond",-1419462650),new cljs.core.Keyword(null,"active-attribution","active-attribution",-792819194),new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-bond-trade-history","show-flat-modal","single-bond-trade-history/show-flat-modal",1072491400),new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047),new cljs.core.Keyword("multiple-portfolio-attribution","display-style","multiple-portfolio-attribution/display-style",-767260119),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("var","result","var/result",1415073996),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738),new cljs.core.Keyword("attribution","summary","attribution/summary",687462095),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("var","history","var/history",-246458543),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181),new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219),new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("multiple-portfolio-attribution","shortcut","multiple-portfolio-attribution/shortcut",809107380),new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("single-portfolio-attribution","table-filter","single-portfolio-attribution/table-filter",1757441687),new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("single-bond-trade-history","show-modal","single-bond-trade-history/show-modal",-1585088359),new cljs.core.Keyword(null,"success-modal","success-modal",-1899350535),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127),new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334),new cljs.core.Keyword(null,"show-mounting-modal","show-mounting-modal",-1469130950),new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword("single-portfolio-attribution","shortcut","single-portfolio-attribution/shortcut",-1711481988),new cljs.core.Keyword("trade-history","history","trade-history/history",1084885309),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),new cljs.core.Keyword("multiple-portfolio-attribution","table-filter","multiple-portfolio-attribution/table-filter",-9483585)],[(1),new cljs.core.Keyword(null,"summary","summary",380847952),"OGEMCORD","Tree",cljs.core.PersistentVector.EMPTY,"None",null,null,"One","Table",new cljs.core.Keyword(null,"overview","overview",-435037267),null,null,new cljs.core.Keyword(null,"summary","summary",380847952),"undefined",new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),true,true,false,cljs.core.PersistentVector.EMPTY,"Tree",cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),"undefined",cljs.core.PersistentVector.EMPTY,null,cljs.core.set(null),new cljs.core.Keyword(null,"quarter","quarter",-508147616),"Tree",null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),null,(1),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),"OGEMCORD",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),(1),new cljs.core.Keyword(null,"daily-3y","daily-3y",-2143971824),"ytd","None",cljs.core.PersistentVector.EMPTY,(1),"One","Tree",false,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show","show",-576705889),false,new cljs.core.Keyword(null,"on-close","on-close",-761178394),null,new cljs.core.Keyword(null,"response","response",-1068424192),null], null),cljs.core.set(null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,true,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),new cljs.core.Keyword(null,"total-effect","total-effect",-967715775),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"home","home",-74557309),(1),null,"OGEMCORD",new cljs.core.Keyword(null,"cembi","cembi",1924920241),"ytd",cljs.core.PersistentVector.EMPTY,true,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),cljs.core.PersistentVector.EMPTY]);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jasminegui.mount","initialize-db","jasminegui.mount/initialize-db",-1621527627),(function (_,___$1){
return jasminegui.mount.default_db;
}));
var seq__42256_43332 = cljs.core.seq(cljs.core.keys(jasminegui.mount.default_db));
var chunk__42257_43333 = null;
var count__42258_43334 = (0);
var i__42259_43335 = (0);
while(true){
if((i__42259_43335 < count__42258_43334)){
var k_43343 = chunk__42257_43333.cljs$core$IIndexed$_nth$arity$2(null,i__42259_43335);
var G__42299_43344 = k_43343;
var G__42300_43345 = ((function (seq__42256_43332,chunk__42257_43333,count__42258_43334,i__42259_43335,G__42299_43344,k_43343){
return (function (db){
return (k_43343.cljs$core$IFn$_invoke$arity$1 ? k_43343.cljs$core$IFn$_invoke$arity$1(db) : k_43343.call(null,db));
});})(seq__42256_43332,chunk__42257_43333,count__42258_43334,i__42259_43335,G__42299_43344,k_43343))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42299_43344,G__42300_43345) : re_frame.core.reg_sub.call(null,G__42299_43344,G__42300_43345));


var G__43356 = seq__42256_43332;
var G__43357 = chunk__42257_43333;
var G__43358 = count__42258_43334;
var G__43359 = (i__42259_43335 + (1));
seq__42256_43332 = G__43356;
chunk__42257_43333 = G__43357;
count__42258_43334 = G__43358;
i__42259_43335 = G__43359;
continue;
} else {
var temp__5735__auto___43360 = cljs.core.seq(seq__42256_43332);
if(temp__5735__auto___43360){
var seq__42256_43361__$1 = temp__5735__auto___43360;
if(cljs.core.chunked_seq_QMARK_(seq__42256_43361__$1)){
var c__4556__auto___43362 = cljs.core.chunk_first(seq__42256_43361__$1);
var G__43363 = cljs.core.chunk_rest(seq__42256_43361__$1);
var G__43364 = c__4556__auto___43362;
var G__43365 = cljs.core.count(c__4556__auto___43362);
var G__43366 = (0);
seq__42256_43332 = G__43363;
chunk__42257_43333 = G__43364;
count__42258_43334 = G__43365;
i__42259_43335 = G__43366;
continue;
} else {
var k_43370 = cljs.core.first(seq__42256_43361__$1);
var G__42303_43371 = k_43370;
var G__42304_43372 = ((function (seq__42256_43332,chunk__42257_43333,count__42258_43334,i__42259_43335,G__42303_43371,k_43370,seq__42256_43361__$1,temp__5735__auto___43360){
return (function (db){
return (k_43370.cljs$core$IFn$_invoke$arity$1 ? k_43370.cljs$core$IFn$_invoke$arity$1(db) : k_43370.call(null,db));
});})(seq__42256_43332,chunk__42257_43333,count__42258_43334,i__42259_43335,G__42303_43371,k_43370,seq__42256_43361__$1,temp__5735__auto___43360))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42303_43371,G__42304_43372) : re_frame.core.reg_sub.call(null,G__42303_43371,G__42304_43372));


var G__43378 = cljs.core.next(seq__42256_43361__$1);
var G__43379 = null;
var G__43380 = (0);
var G__43381 = (0);
seq__42256_43332 = G__43378;
chunk__42257_43333 = G__43379;
count__42258_43334 = G__43380;
i__42259_43335 = G__43381;
continue;
}
} else {
}
}
break;
}
jasminegui.mount.first_level_sort = (function jasminegui$mount$first_level_sort(x){
var G__42308 = x;
switch (G__42308) {
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
var total_line = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"jpm-region","jpm-region",-2074265852),"Total",new cljs.core.Keyword(null,"qt-jpm-sector","qt-jpm-sector",1047055349),"Total",new cljs.core.Keyword(null,"qt-risk-country-name","qt-risk-country-name",1182905474),"Total",new cljs.core.Keyword(null,"TICKER","TICKER",-1215969144),"Total",new cljs.core.Keyword(null,"NAME","NAME",-1127916515),"Total",new cljs.core.Keyword(null,"description","description",-1428560544),"Total",new cljs.core.Keyword(null,"isin","isin",-1197420747),"Total",new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),"Total"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$add_total_line_to_pivot_$_iter__42336(s__42337){
return (new cljs.core.LazySeq(null,(function (){
var s__42337__$1 = s__42337;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42337__$1);
if(temp__5735__auto__){
var s__42337__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42337__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42337__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42343 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42342 = (0);
while(true){
if((i__42342 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__42342);
cljs.core.chunk_append(b__42343,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(p,pivoted_table))], null));

var G__43393 = (i__42342 + (1));
i__42342 = G__43393;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42343),jasminegui$mount$add_total_line_to_pivot_$_iter__42336(cljs.core.chunk_rest(s__42337__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42343),null);
}
} else {
var p = cljs.core.first(s__42337__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(p,pivoted_table))], null),jasminegui$mount$add_total_line_to_pivot_$_iter__42336(cljs.core.rest(s__42337__$2)));
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
var template = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$add_total_line_to_attribution_pivot_$_iter__42356(s__42357){
return (new cljs.core.LazySeq(null,(function (){
var s__42357__$1 = s__42357;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42357__$1);
if(temp__5735__auto__){
var s__42357__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42357__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42357__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42359 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42358 = (0);
while(true){
if((i__42358 < size__4528__auto__)){
var vec__42366 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__42358);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42366,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42366,(1),null);
cljs.core.chunk_append(b__42359,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,"Total"], null));

var G__43403 = (i__42358 + (1));
i__42358 = G__43403;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42359),jasminegui$mount$add_total_line_to_attribution_pivot_$_iter__42356(cljs.core.chunk_rest(s__42357__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42359),null);
}
} else {
var vec__42373 = cljs.core.first(s__42357__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42373,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42373,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,"Total"], null),jasminegui$mount$add_total_line_to_attribution_pivot_$_iter__42356(cljs.core.rest(s__42357__$2)));
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
var total_line = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([template,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$add_total_line_to_attribution_pivot_$_iter__42378(s__42379){
return (new cljs.core.LazySeq(null,(function (){
var s__42379__$1 = s__42379;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42379__$1);
if(temp__5735__auto__){
var s__42379__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42379__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42379__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42381 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42380 = (0);
while(true){
if((i__42380 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__42380);
cljs.core.chunk_append(b__42381,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(p,pivoted_table))], null));

var G__43407 = (i__42380 + (1));
i__42380 = G__43407;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42381),jasminegui$mount$add_total_line_to_attribution_pivot_$_iter__42378(cljs.core.chunk_rest(s__42379__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42381),null);
}
} else {
var p = cljs.core.first(s__42379__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(p,pivoted_table))], null),jasminegui$mount$add_total_line_to_attribution_pivot_$_iter__42378(cljs.core.rest(s__42379__$2)));
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
var G__42388_43413 = new cljs.core.Keyword("single-portfolio-risk","table","single-portfolio-risk/table",-637924467);
var G__42389_43414 = (function (db){
var positions = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db);
var portfolio = new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949).cljs$core$IFn$_invoke$arity$1(db);
var portfolio_total_line = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var G__42391 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(portfolio);
var fexpr__42390 = new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db);
return (fexpr__42390.cljs$core$IFn$_invoke$arity$1 ? fexpr__42390.cljs$core$IFn$_invoke$arity$1(G__42391) : fexpr__42390.call(null,G__42391));
})(),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),"Total",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),"00 Total"], 0));
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477).cljs$core$IFn$_invoke$arity$1(db),"Tree");
var portfolio_positions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__42385_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__42385_SHARP_),portfolio);
}),positions);
var viewable_positions = (cljs.core.truth_((((!(is_tree)))?new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951).cljs$core$IFn$_invoke$arity$1(db):false))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__42386_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(p1__42386_SHARP_),(0));
}),portfolio_positions):portfolio_positions);
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__42392 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42392) : re_frame.core.subscribe.call(null,G__42392));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__42387_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__42387_SHARP_) : rfil.call(null,p1__42387_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__42387_SHARP_) : rfil.call(null,p1__42387_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__42393(s__42394){
return (new cljs.core.LazySeq(null,(function (){
var s__42394__$1 = s__42394;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42394__$1);
if(temp__5735__auto__){
var s__42394__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42394__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42394__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42396 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42395 = (0);
while(true){
if((i__42395 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__42395);
cljs.core.chunk_append(b__42396,(jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.risk_table_columns.call(null,r)));

var G__43422 = (i__42395 + (1));
i__42395 = G__43422;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42396),jasminegui$mount$iter__42393(cljs.core.chunk_rest(s__42394__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42396),null);
}
} else {
var r = cljs.core.first(s__42394__$2);
return cljs.core.cons((jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.risk_table_columns.call(null,r)),jasminegui$mount$iter__42393(cljs.core.rest(s__42394__$2)));
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42388_43413,G__42389_43414) : re_frame.core.reg_sub.call(null,G__42388_43413,G__42389_43414));
var G__42415_43429 = new cljs.core.Keyword("single-portfolio-attribution","clean-table","single-portfolio-attribution/clean-table",-391468387);
var G__42416_43430 = (function (db){
var data = new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047).cljs$core$IFn$_invoke$arity$1(db);
var template = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__42421(s__42422){
return (new cljs.core.LazySeq(null,(function (){
var s__42422__$1 = s__42422;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42422__$1);
if(temp__5735__auto__){
var s__42422__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42422__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42422__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42424 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42423 = (0);
while(true){
if((i__42423 < size__4528__auto__)){
var vec__42430 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__42423);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42430,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42430,(1),null);
cljs.core.chunk_append(b__42424,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,"Total"], null));

var G__43437 = (i__42423 + (1));
i__42423 = G__43437;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42424),jasminegui$mount$iter__42421(cljs.core.chunk_rest(s__42422__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42424),null);
}
} else {
var vec__42437 = cljs.core.first(s__42422__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42437,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42437,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,"Total"], null),jasminegui$mount$iter__42421(cljs.core.rest(s__42422__$2)));
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__42413_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__42413_SHARP_) : rfil.call(null,p1__42413_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__42413_SHARP_) : rfil.call(null,p1__42413_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__42451(s__42452){
return (new cljs.core.LazySeq(null,(function (){
var s__42452__$1 = s__42452;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42452__$1);
if(temp__5735__auto__){
var s__42452__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42452__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42452__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42454 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42453 = (0);
while(true){
if((i__42453 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__42453);
cljs.core.chunk_append(b__42454,(jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.attribution_table_columns.call(null,r)));

var G__43461 = (i__42453 + (1));
i__42453 = G__43461;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42454),jasminegui$mount$iter__42451(cljs.core.chunk_rest(s__42452__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42454),null);
}
} else {
var r = cljs.core.first(s__42452__$2);
return cljs.core.cons((jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.attribution_table_columns.call(null,r)),jasminegui$mount$iter__42451(cljs.core.rest(s__42452__$2)));
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42415_43429,G__42416_43430) : re_frame.core.reg_sub.call(null,G__42415_43429,G__42416_43430));
var G__42476_43469 = new cljs.core.Keyword("multiple-portfolio-risk","table","multiple-portfolio-risk/table",1962237397);
var G__42477_43470 = (function (db){
var pivoted_positions = new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863).cljs$core$IFn$_invoke$arity$1(db);
var kselected_portfolios = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045).cljs$core$IFn$_invoke$arity$1(db));
var hide_zero_risk = new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337).cljs$core$IFn$_invoke$arity$1(db);
var display_key_one = new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337).cljs$core$IFn$_invoke$arity$1(db);
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547).cljs$core$IFn$_invoke$arity$1(db),"Tree");
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__42481 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42481) : re_frame.core.subscribe.call(null,G__42481));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__42473_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__42473_SHARP_) : rfil.call(null,p1__42473_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__42473_SHARP_) : rfil.call(null,p1__42473_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__42483(s__42484){
return (new cljs.core.LazySeq(null,(function (){
var s__42484__$1 = s__42484;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42484__$1);
if(temp__5735__auto__){
var s__42484__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42484__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42484__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42486 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42485 = (0);
while(true){
if((i__42485 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__42485);
cljs.core.chunk_append(b__42486,(jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.risk_table_columns.call(null,r)));

var G__43481 = (i__42485 + (1));
i__42485 = G__43481;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42486),jasminegui$mount$iter__42483(cljs.core.chunk_rest(s__42484__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42486),null);
}
} else {
var r = cljs.core.first(s__42484__$2);
return cljs.core.cons((jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.risk_table_columns.call(null,r)),jasminegui$mount$iter__42483(cljs.core.rest(s__42484__$2)));
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
var pivoted_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42474_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__42474_SHARP_,(function (){var fexpr__42492 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.risk_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_one,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__42492.cljs$core$IFn$_invoke$arity$1 ? fexpr__42492.cljs$core$IFn$_invoke$arity$1(p1__42474_SHARP_) : fexpr__42492.call(null,p1__42474_SHARP_));
})()], 0));
}),pivoted_positions);
var thfil = (function (line){
return (!(cljs.core.every_QMARK_(cljs.core.zero_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(line,kselected_portfolios))));
});
var pivoted_data_hide_zero = (cljs.core.truth_((((!(is_tree)))?hide_zero_risk:false))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(thfil,pivoted_data):pivoted_data);
return jasminegui.mount.add_total_line_to_pivot(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.mount.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),pivoted_data_hide_zero),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(db)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42476_43469,G__42477_43470) : re_frame.core.reg_sub.call(null,G__42476_43469,G__42477_43470));
var G__42504_43495 = new cljs.core.Keyword("multiple-portfolio-attribution","clean-table","multiple-portfolio-attribution/clean-table",-1066824107);
var G__42505_43496 = (function (db){
var pivoted_positions = new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705).cljs$core$IFn$_invoke$arity$1(db);
var kselected_portfolios = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959).cljs$core$IFn$_invoke$arity$1(db));
var display_key_one = new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707).cljs$core$IFn$_invoke$arity$1(db);
var attribution_choices = (function (){var rfil = cljs.core.deref((function (){var G__42507 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42507) : re_frame.core.subscribe.call(null,G__42507));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__42500_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__42500_SHARP_) : rfil.call(null,p1__42500_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__42500_SHARP_) : rfil.call(null,p1__42500_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__42512(s__42513){
return (new cljs.core.LazySeq(null,(function (){
var s__42513__$1 = s__42513;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42513__$1);
if(temp__5735__auto__){
var s__42513__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42513__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42513__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42515 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42514 = (0);
while(true){
if((i__42514 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__42514);
cljs.core.chunk_append(b__42515,(jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.attribution_table_columns.call(null,r)));

var G__43511 = (i__42514 + (1));
i__42514 = G__43511;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42515),jasminegui$mount$iter__42512(cljs.core.chunk_rest(s__42513__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42515),null);
}
} else {
var r = cljs.core.first(s__42513__$2);
return cljs.core.cons((jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.attribution_table_columns.call(null,r)),jasminegui$mount$iter__42512(cljs.core.rest(s__42513__$2)));
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
var pivoted_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42503_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__42503_SHARP_,(function (){var fexpr__42526 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_one,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__42526.cljs$core$IFn$_invoke$arity$1 ? fexpr__42526.cljs$core$IFn$_invoke$arity$1(p1__42503_SHARP_) : fexpr__42526.call(null,p1__42503_SHARP_));
})()], 0));
}),pivoted_positions);
return jasminegui.mount.add_total_line_to_attribution_pivot(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.mount.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),pivoted_data),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(db)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42504_43495,G__42505_43496) : re_frame.core.reg_sub.call(null,G__42504_43495,G__42505_43496));
var G__42535_43524 = new cljs.core.Keyword("portfolio-alignment","table","portfolio-alignment/table",-1411501022);
var G__42536_43525 = (function (db){
var group = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__42531_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__42531_SHARP_),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110).cljs$core$IFn$_invoke$arity$1(db));
}),jasminegui.static$.portfolio_alignment_groups))));
var pivoted_positions = new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863).cljs$core$IFn$_invoke$arity$1(db);
var base_kportfolio = cljs.core.first(group);
var kportfolios = cljs.core.rest(group);
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__42540 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42540) : re_frame.core.subscribe.call(null,G__42540));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__42532_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__42532_SHARP_) : rfil.call(null,p1__42532_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__42532_SHARP_) : rfil.call(null,p1__42532_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__42543(s__42544){
return (new cljs.core.LazySeq(null,(function (){
var s__42544__$1 = s__42544;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42544__$1);
if(temp__5735__auto__){
var s__42544__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42544__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42544__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42546 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42545 = (0);
while(true){
if((i__42545 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__42545);
cljs.core.chunk_append(b__42546,(jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.risk_table_columns.call(null,r)));

var G__43531 = (i__42545 + (1));
i__42545 = G__43531;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42546),jasminegui$mount$iter__42543(cljs.core.chunk_rest(s__42544__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42546),null);
}
} else {
var r = cljs.core.first(s__42544__$2);
return cljs.core.cons((jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.risk_table_columns.call(null,r)),jasminegui$mount$iter__42543(cljs.core.rest(s__42544__$2)));
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
var pivoted_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42533_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__42533_SHARP_,(function (){var fexpr__42564 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.risk_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__42564.cljs$core$IFn$_invoke$arity$1 ? fexpr__42564.cljs$core$IFn$_invoke$arity$1(p1__42533_SHARP_) : fexpr__42564.call(null,p1__42533_SHARP_));
})()], 0));
}),pivoted_positions);
var differentiate = (function (line){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (temp_line,p){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(temp_line,p,((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(temp_line) : p.call(null,temp_line)) - (base_kportfolio.cljs$core$IFn$_invoke$arity$1 ? base_kportfolio.cljs$core$IFn$_invoke$arity$1(temp_line) : base_kportfolio.call(null,temp_line))));
}),line,kportfolios);
});
var pivoted_data_diff = cljs.core.map.cljs$core$IFn$_invoke$arity$2(differentiate,pivoted_data);
var threshold = (0.01 * cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__42534_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__42534_SHARP_),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053).cljs$core$IFn$_invoke$arity$1(db));
}),jasminegui.static$.threshold_choices_alignment)))));
var thfil = (function (line){
return cljs.core.some((function (x){
return (((x < (- threshold))) || ((x > threshold)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(line,kportfolios));
});
var pivoted_data_diff_post_th = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(thfil,pivoted_data_diff);
return jasminegui.mount.add_total_line_to_pivot(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.mount.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),pivoted_data_diff_post_th),kportfolios);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42535_43524,G__42536_43525) : re_frame.core.reg_sub.call(null,G__42535_43524,G__42536_43525));
var G__42581_43543 = new cljs.core.Keyword("summary-display","table","summary-display/table",1149370831);
var G__42582_43544 = (function (db){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__42585(s__42586){
return (new cljs.core.LazySeq(null,(function (){
var s__42586__$1 = s__42586;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42586__$1);
if(temp__5735__auto__){
var s__42586__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42586__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42586__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42588 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42587 = (0);
while(true){
if((i__42587 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__42587);
cljs.core.chunk_append(b__42588,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"portfolio","portfolio",957568598),p], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = ((function (i__42587,p,c__4527__auto__,size__4528__auto__,b__42588,s__42586__$2,temp__5735__auto__,G__42581_43543){
return (function jasminegui$mount$iter__42585_$_iter__42594(s__42595){
return (new cljs.core.LazySeq(null,((function (i__42587,p,c__4527__auto__,size__4528__auto__,b__42588,s__42586__$2,temp__5735__auto__,G__42581_43543){
return (function (){
var s__42595__$1 = s__42595;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__42595__$1);
if(temp__5735__auto____$1){
var s__42595__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42595__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__42595__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__42597 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__42596 = (0);
while(true){
if((i__42596 < size__4528__auto____$1)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto____$1,i__42596);
cljs.core.chunk_append(b__42597,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null));

var G__43547 = (i__42596 + (1));
i__42596 = G__43547;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42597),jasminegui$mount$iter__42585_$_iter__42594(cljs.core.chunk_rest(s__42595__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42597),null);
}
} else {
var k = cljs.core.first(s__42595__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null),jasminegui$mount$iter__42585_$_iter__42594(cljs.core.rest(s__42595__$2)));
}
} else {
return null;
}
break;
}
});})(i__42587,p,c__4527__auto__,size__4528__auto__,b__42588,s__42586__$2,temp__5735__auto__,G__42581_43543))
,null,null));
});})(i__42587,p,c__4527__auto__,size__4528__auto__,b__42588,s__42586__$2,temp__5735__auto__,G__42581_43543))
;
return iter__4529__auto__(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175),new cljs.core.Keyword(null,"base-value","base-value",921379228),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067),new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030),new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),new cljs.core.Keyword(null,"contrib-beta-1y-daily","contrib-beta-1y-daily",259924328)], null));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861)], null)) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__42587,p,c__4527__auto__,size__4528__auto__,b__42588,s__42586__$2,temp__5735__auto__,G__42581_43543){
return (function (p1__42580_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__42580_SHARP_),p)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-class","asset-class",1845554418).cljs$core$IFn$_invoke$arity$1(p1__42580_SHARP_),"BONDS")));
});})(i__42587,p,c__4527__auto__,size__4528__auto__,b__42588,s__42586__$2,temp__5735__auto__,G__42581_43543))
,new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db)))))], null)], 0)));

var G__43559 = (i__42587 + (1));
i__42587 = G__43559;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42588),jasminegui$mount$iter__42585(cljs.core.chunk_rest(s__42586__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42588),null);
}
} else {
var p = cljs.core.first(s__42586__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"portfolio","portfolio",957568598),p], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = ((function (p,s__42586__$2,temp__5735__auto__,G__42581_43543){
return (function jasminegui$mount$iter__42585_$_iter__42626(s__42627){
return (new cljs.core.LazySeq(null,(function (){
var s__42627__$1 = s__42627;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__42627__$1);
if(temp__5735__auto____$1){
var s__42627__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42627__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42627__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42629 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42628 = (0);
while(true){
if((i__42628 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__42628);
cljs.core.chunk_append(b__42629,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null));

var G__43569 = (i__42628 + (1));
i__42628 = G__43569;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42629),jasminegui$mount$iter__42585_$_iter__42626(cljs.core.chunk_rest(s__42627__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42629),null);
}
} else {
var k = cljs.core.first(s__42627__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null),jasminegui$mount$iter__42585_$_iter__42626(cljs.core.rest(s__42627__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(p,s__42586__$2,temp__5735__auto__,G__42581_43543))
;
return iter__4529__auto__(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175),new cljs.core.Keyword(null,"base-value","base-value",921379228),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067),new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030),new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),new cljs.core.Keyword(null,"contrib-beta-1y-daily","contrib-beta-1y-daily",259924328)], null));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861)], null)) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (p,s__42586__$2,temp__5735__auto__,G__42581_43543){
return (function (p1__42580_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__42580_SHARP_),p)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-class","asset-class",1845554418).cljs$core$IFn$_invoke$arity$1(p1__42580_SHARP_),"BONDS")));
});})(p,s__42586__$2,temp__5735__auto__,G__42581_43543))
,new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db)))))], null)], 0)),jasminegui$mount$iter__42585(cljs.core.rest(s__42586__$2)));
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42581_43543,G__42582_43544) : re_frame.core.reg_sub.call(null,G__42581_43543,G__42582_43544));
var seq__42655_43580 = cljs.core.seq(cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword(null,"active-var","active-var",-1787478523),new cljs.core.Keyword(null,"active-attribution","active-attribution",-792819194),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738),new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334),new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679),new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),new cljs.core.Keyword("single-portfolio-attribution","table-filter","single-portfolio-attribution/table-filter",1757441687),new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047),new cljs.core.Keyword("multiple-portfolio-attribution","display-style","multiple-portfolio-attribution/display-style",-767260119),new cljs.core.Keyword("multiple-portfolio-attribution","field-number","multiple-portfolio-attribution/field-number",-1780989148),new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),new cljs.core.Keyword("multiple-portfolio-attribution","field-two","multiple-portfolio-attribution/field-two",-311759422),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),new cljs.core.Keyword("multiple-portfolio-attribution","hide-zero-holdings","multiple-portfolio-attribution/hide-zero-holdings",1677138723),new cljs.core.Keyword("multiple-portfolio-attribution","shortcut","multiple-portfolio-attribution/shortcut",809107380),new cljs.core.Keyword("multiple-portfolio-attribution","table-filter","multiple-portfolio-attribution/table-filter",-9483585),new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705),new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),new cljs.core.Keyword("attribution","summary","attribution/summary",687462095),new cljs.core.Keyword("single-bond-trade-history","show-flat-modal","single-bond-trade-history/show-flat-modal",1072491400),new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181),new cljs.core.Keyword("single-bond-trade-history","show-modal","single-bond-trade-history/show-modal",-1585088359),new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127),new cljs.core.Keyword("single-bond-trade-history","bond","single-bond-trade-history/bond",2015871973),new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865)], true));
var chunk__42656_43581 = null;
var count__42657_43582 = (0);
var i__42658_43583 = (0);
while(true){
if((i__42658_43583 < count__42657_43582)){
var k_43595 = chunk__42656_43581.cljs$core$IIndexed$_nth$arity$2(null,i__42658_43583);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_43595,((function (seq__42655_43580,chunk__42656_43581,count__42657_43582,i__42658_43583,k_43595){
return (function (db,p__42691){
var vec__42692 = p__42691;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42692,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42692,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_43595,data);
});})(seq__42655_43580,chunk__42656_43581,count__42657_43582,i__42658_43583,k_43595))
);


var G__43601 = seq__42655_43580;
var G__43602 = chunk__42656_43581;
var G__43603 = count__42657_43582;
var G__43604 = (i__42658_43583 + (1));
seq__42655_43580 = G__43601;
chunk__42656_43581 = G__43602;
count__42657_43582 = G__43603;
i__42658_43583 = G__43604;
continue;
} else {
var temp__5735__auto___43605 = cljs.core.seq(seq__42655_43580);
if(temp__5735__auto___43605){
var seq__42655_43607__$1 = temp__5735__auto___43605;
if(cljs.core.chunked_seq_QMARK_(seq__42655_43607__$1)){
var c__4556__auto___43610 = cljs.core.chunk_first(seq__42655_43607__$1);
var G__43611 = cljs.core.chunk_rest(seq__42655_43607__$1);
var G__43612 = c__4556__auto___43610;
var G__43613 = cljs.core.count(c__4556__auto___43610);
var G__43614 = (0);
seq__42655_43580 = G__43611;
chunk__42656_43581 = G__43612;
count__42657_43582 = G__43613;
i__42658_43583 = G__43614;
continue;
} else {
var k_43615 = cljs.core.first(seq__42655_43607__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_43615,((function (seq__42655_43580,chunk__42656_43581,count__42657_43582,i__42658_43583,k_43615,seq__42655_43607__$1,temp__5735__auto___43605){
return (function (db,p__42697){
var vec__42698 = p__42697;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42698,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42698,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_43615,data);
});})(seq__42655_43580,chunk__42656_43581,count__42657_43582,i__42658_43583,k_43615,seq__42655_43607__$1,temp__5735__auto___43605))
);


var G__43619 = cljs.core.next(seq__42655_43607__$1);
var G__43620 = null;
var G__43621 = (0);
var G__43622 = (0);
seq__42655_43580 = G__43619;
chunk__42656_43581 = G__43620;
count__42657_43582 = G__43621;
i__42658_43583 = G__43622;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"positions","positions",-1380538434),(function (db,p__42702){
var vec__42703 = p__42702;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42703,(0),null);
var positions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42703,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"positions","positions",-1380538434),positions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-mounting-modal","show-mounting-modal",-1469130950),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127),(function (db,p__42709){
var vec__42710 = p__42709;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42710,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42710,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127),data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181),(function (db,p__42713){
var vec__42714 = p__42713;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42714,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42714,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181),data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),(function (db,p__42717){
var vec__42718 = p__42717;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42718,(0),null);
var portfolios = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42718,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),portfolios,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),cljs.core.set(portfolios),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),cljs.core.set(portfolios)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),(function (db,p__42722){
var vec__42724 = p__42722;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42724,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42724,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42724,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),(function (db,p__42731){
var vec__42733 = p__42731;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42733,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42733,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42733,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),(function (db,p__42740){
var vec__42741 = p__42740;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42741,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42741,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42741,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),(function (db,p__42747){
var vec__42748 = p__42747;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42748,(0),null);
var qt_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42748,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),clojure.string.replace(qt_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),(function (db,p__42751){
var vec__42754 = p__42751;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42754,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42754,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42754,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219),(function (db,p__42759){
var vec__42761 = p__42759;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42761,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42761,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42761,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),(function (db,p__42766){
var vec__42767 = p__42766;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42767,(0),null);
var attribution_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42767,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),clojure.string.replace(attribution_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),(function (db,p__42773){
var vec__42775 = p__42773;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42775,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42775,(1),null);
var G__42779 = snapshot;
switch (G__42779) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42779)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cycle-shortcut","cycle-shortcut",-1617058214),(function (db,p__42789){
var vec__42790 = p__42789;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42790,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42790,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42790,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"active-home","active-home",53621216).cljs$core$IFn$_invoke$arity$1(db)),"-risk/shortcut"].join(''));
var shortcut_value = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
if((shortcut_value < (4))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(shortcut_value + (1)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(1));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tree-table","tree-table",-1263002012),(function (db,p__42798){
var vec__42799 = p__42798;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42799,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42799,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42799,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"active-home","active-home",53621216).cljs$core$IFn$_invoke$arity$1(db)),"-risk/display-style"].join(''));
var G__42804 = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
switch (G__42804) {
case "Tree":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Table");

break;
case "Table":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Tree");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42804)].join('')));

}
}));
jasminegui.mount.http_get_dispatch = (function jasminegui$mount$http_get_dispatch(request){
var c__41764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41765__auto__ = (function (){var switch__41719__auto__ = (function (state_42871){
var state_val_42874 = (state_42871[(1)]);
if((state_val_42874 === (1))){
var inst_42829 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_42832 = cljs_http.client.get(inst_42829);
var state_42871__$1 = state_42871;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42871__$1,(2),inst_42832);
} else {
if((state_val_42874 === (2))){
var inst_42834 = (state_42871[(2)]);
var inst_42837 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_42838 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_42871__$1 = (function (){var statearr_42887 = state_42871;
(statearr_42887[(7)] = inst_42834);

(statearr_42887[(8)] = inst_42837);

return statearr_42887;
})();
if(cljs.core.truth_(inst_42838)){
var statearr_42889_43678 = state_42871__$1;
(statearr_42889_43678[(1)] = (3));

} else {
var statearr_42890_43680 = state_42871__$1;
(statearr_42890_43680[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42874 === (3))){
var inst_42834 = (state_42871[(7)]);
var inst_42842 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_42834);
var inst_42843 = JSON.parse(inst_42842);
var inst_42844 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_42843,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_42871__$1 = state_42871;
var statearr_42894_43683 = state_42871__$1;
(statearr_42894_43683[(2)] = inst_42844);

(statearr_42894_43683[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42874 === (4))){
var inst_42834 = (state_42871[(7)]);
var inst_42846 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_42834);
var state_42871__$1 = state_42871;
var statearr_42896_43684 = state_42871__$1;
(statearr_42896_43684[(2)] = inst_42846);

(statearr_42896_43684[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42874 === (5))){
var inst_42837 = (state_42871[(8)]);
var inst_42850 = (state_42871[(2)]);
var inst_42851 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_42837,inst_42850);
var inst_42852 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_42851) : re_frame.core.dispatch.call(null,inst_42851));
var inst_42853 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_42871__$1 = (function (){var statearr_42900 = state_42871;
(statearr_42900[(9)] = inst_42852);

return statearr_42900;
})();
if(cljs.core.truth_(inst_42853)){
var statearr_42901_43687 = state_42871__$1;
(statearr_42901_43687[(1)] = (6));

} else {
var statearr_42902_43688 = state_42871__$1;
(statearr_42902_43688[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42874 === (6))){
var inst_42857 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42858 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_42859 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_42860 = [inst_42858,inst_42859];
var inst_42861 = (new cljs.core.PersistentVector(null,2,(5),inst_42857,inst_42860,null));
var inst_42862 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_42861) : re_frame.core.dispatch.call(null,inst_42861));
var state_42871__$1 = state_42871;
var statearr_42906_43690 = state_42871__$1;
(statearr_42906_43690[(2)] = inst_42862);

(statearr_42906_43690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42874 === (7))){
var state_42871__$1 = state_42871;
var statearr_42909_43693 = state_42871__$1;
(statearr_42909_43693[(2)] = null);

(statearr_42909_43693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42874 === (8))){
var inst_42865 = (state_42871[(2)]);
var state_42871__$1 = state_42871;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42871__$1,inst_42865);
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
var statearr_42912 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42912[(0)] = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__);

(statearr_42912[(1)] = (1));

return statearr_42912;
});
var jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1 = (function (state_42871){
while(true){
var ret_value__41721__auto__ = (function (){try{while(true){
var result__41722__auto__ = switch__41719__auto__(state_42871);
if(cljs.core.keyword_identical_QMARK_(result__41722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41722__auto__;
}
break;
}
}catch (e42927){if((e42927 instanceof Object)){
var ex__41723__auto__ = e42927;
var statearr_42931_43707 = state_42871;
(statearr_42931_43707[(5)] = ex__41723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42927;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43710 = state_42871;
state_42871 = G__43710;
continue;
} else {
return ret_value__41721__auto__;
}
break;
}
});
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__ = function(state_42871){
switch(arguments.length){
case 0:
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____0.call(this);
case 1:
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1.call(this,state_42871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____0;
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1;
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__;
})()
})();
var state__41766__auto__ = (function (){var statearr_42935 = (f__41765__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41765__auto__.cljs$core$IFn$_invoke$arity$0() : f__41765__auto__.call(null));
(statearr_42935[(6)] = c__41764__auto__);

return statearr_42935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41766__auto__);
}));

return c__41764__auto__;
});
var G__42936_43712 = new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518);
var G__42937_43713 = jasminegui.mount.http_get_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__42936_43712,G__42937_43713) : re_frame.core.reg_fx.call(null,G__42936_43712,G__42937_43713));
jasminegui.mount.http_post_dispatch = (function jasminegui$mount$http_post_dispatch(request){
var c__41764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41765__auto__ = (function (){var switch__41719__auto__ = (function (state_42973){
var state_val_42974 = (state_42973[(1)]);
if((state_val_42974 === (1))){
var inst_42939 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_42940 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_42941 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
var inst_42942 = [inst_42941];
var inst_42943 = cljs.core.PersistentHashMap.fromArrays(inst_42940,inst_42942);
var inst_42944 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_42939,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_42943], 0));
var state_42973__$1 = state_42973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42973__$1,(2),inst_42944);
} else {
if((state_val_42974 === (2))){
var inst_42946 = (state_42973[(2)]);
var inst_42947 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_42948 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_42973__$1 = (function (){var statearr_42981 = state_42973;
(statearr_42981[(7)] = inst_42946);

(statearr_42981[(8)] = inst_42947);

return statearr_42981;
})();
if(cljs.core.truth_(inst_42948)){
var statearr_42984_43728 = state_42973__$1;
(statearr_42984_43728[(1)] = (3));

} else {
var statearr_42985_43729 = state_42973__$1;
(statearr_42985_43729[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42974 === (3))){
var inst_42946 = (state_42973[(7)]);
var inst_42951 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_42946);
var inst_42952 = JSON.parse(inst_42951);
var inst_42954 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_42952,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_42973__$1 = state_42973;
var statearr_42988_43733 = state_42973__$1;
(statearr_42988_43733[(2)] = inst_42954);

(statearr_42988_43733[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42974 === (4))){
var inst_42946 = (state_42973[(7)]);
var inst_42956 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_42946);
var state_42973__$1 = state_42973;
var statearr_42991_43737 = state_42973__$1;
(statearr_42991_43737[(2)] = inst_42956);

(statearr_42991_43737[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42974 === (5))){
var inst_42947 = (state_42973[(8)]);
var inst_42958 = (state_42973[(2)]);
var inst_42959 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_42947,inst_42958);
var inst_42960 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_42959) : re_frame.core.dispatch.call(null,inst_42959));
var inst_42961 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_42973__$1 = (function (){var statearr_42994 = state_42973;
(statearr_42994[(9)] = inst_42960);

return statearr_42994;
})();
if(cljs.core.truth_(inst_42961)){
var statearr_42997_43741 = state_42973__$1;
(statearr_42997_43741[(1)] = (6));

} else {
var statearr_42998_43742 = state_42973__$1;
(statearr_42998_43742[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42974 === (6))){
var inst_42963 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42964 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_42965 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_42966 = [inst_42964,inst_42965];
var inst_42967 = (new cljs.core.PersistentVector(null,2,(5),inst_42963,inst_42966,null));
var inst_42968 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_42967) : re_frame.core.dispatch.call(null,inst_42967));
var state_42973__$1 = state_42973;
var statearr_43001_43745 = state_42973__$1;
(statearr_43001_43745[(2)] = inst_42968);

(statearr_43001_43745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42974 === (7))){
var state_42973__$1 = state_42973;
var statearr_43004_43749 = state_42973__$1;
(statearr_43004_43749[(2)] = null);

(statearr_43004_43749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42974 === (8))){
var inst_42971 = (state_42973[(2)]);
var state_42973__$1 = state_42973;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42973__$1,inst_42971);
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
var jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__ = null;
var jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____0 = (function (){
var statearr_43007 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43007[(0)] = jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__);

(statearr_43007[(1)] = (1));

return statearr_43007;
});
var jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____1 = (function (state_42973){
while(true){
var ret_value__41721__auto__ = (function (){try{while(true){
var result__41722__auto__ = switch__41719__auto__(state_42973);
if(cljs.core.keyword_identical_QMARK_(result__41722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41722__auto__;
}
break;
}
}catch (e43010){if((e43010 instanceof Object)){
var ex__41723__auto__ = e43010;
var statearr_43011_43755 = state_42973;
(statearr_43011_43755[(5)] = ex__41723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43010;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43756 = state_42973;
state_42973 = G__43756;
continue;
} else {
return ret_value__41721__auto__;
}
break;
}
});
jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__ = function(state_42973){
switch(arguments.length){
case 0:
return jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____0.call(this);
case 1:
return jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____1.call(this,state_42973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____0;
jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____1;
return jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__;
})()
})();
var state__41766__auto__ = (function (){var statearr_43014 = (f__41765__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41765__auto__.cljs$core$IFn$_invoke$arity$0() : f__41765__auto__.call(null));
(statearr_43014[(6)] = c__41764__auto__);

return statearr_43014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41766__auto__);
}));

return c__41764__auto__;
});
var G__43017_43760 = new cljs.core.Keyword(null,"http-post-dispatch","http-post-dispatch",2138865017);
var G__43018_43761 = jasminegui.mount.http_post_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__43017_43760,G__43018_43761) : re_frame.core.reg_fx.call(null,G__43017_43760,G__43018_43761));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions","get-positions",1610972586),(function (p__43021,p__43022){
var map__43023 = p__43021;
var map__43023__$1 = (((((!((map__43023 == null))))?(((((map__43023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43023):map__43023);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43023__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43033 = p__43022;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43033,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-rating-to-score","get-rating-to-score",391912155),(function (p__43044,p__43045){
var map__43047 = p__43044;
var map__43047__$1 = (((((!((map__43047 == null))))?(((((map__43047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43047):map__43047);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43047__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43050 = p__43045;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43050,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"rating-to-score"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472),(function (p__43059,p__43060){
var map__43062 = p__43059;
var map__43062__$1 = (((((!((map__43062 == null))))?(((((map__43062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43062):map__43062);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43062__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43063 = p__43060;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43063,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"portfolios"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-pivoted-positions","get-pivoted-positions",2145025131),(function (p__43070,p__43071){
var map__43072 = p__43070;
var map__43072__$1 = (((((!((map__43072 == null))))?(((((map__43072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43072):map__43072);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43072__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43073 = p__43071;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43073,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"pivoted-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-total-positions","get-total-positions",-698807167),(function (p__43081,p__43082){
var map__43083 = p__43081;
var map__43083__$1 = (((((!((map__43083 == null))))?(((((map__43083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43083):map__43083);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43083__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43084 = p__43082;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43084,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"total-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-qt-date","get-qt-date",-1072332881),(function (p__43095,p__43096){
var map__43099 = p__43095;
var map__43099__$1 = (((((!((map__43099 == null))))?(((((map__43099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43099):map__43099);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43099__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43100 = p__43096;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43100,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"qt-date"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),false], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-proxies","get-var-proxies",1252506215),(function (p__43107,p__43108){
var map__43111 = p__43107;
var map__43111__$1 = (((((!((map__43111 == null))))?(((((map__43111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43111):map__43111);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43111__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43112 = p__43108;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43112,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-proxies"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","proxies","var/proxies",-1487962738)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-dates","get-var-dates",-1039695287),(function (p__43119,p__43120){
var map__43121 = p__43119;
var map__43121__$1 = (((((!((map__43121 == null))))?(((((map__43121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43121):map__43121);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43121__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43122 = p__43120;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43122,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-dates"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","dates","var/dates",-1599746364)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-data","get-var-data",837806576),(function (p__43126,p__43127){
var map__43128 = p__43126;
var map__43128__$1 = (((((!((map__43128 == null))))?(((((map__43128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43128):map__43128);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43128__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43129 = p__43127;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43129,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43129,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-data?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-var","get-portfolio-var",1001711662),(function (p__43141,p__43142){
var map__43143 = p__43141;
var map__43143__$1 = (((((!((map__43143 == null))))?(((((map__43143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43143):map__43143);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43143__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43144 = p__43142;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43144,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43144,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),portfolio),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-data?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-attribution-date","get-attribution-date",-1329272944),(function (p__43151,p__43152){
var map__43154 = p__43151;
var map__43154__$1 = (((((!((map__43154 == null))))?(((((map__43154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43154):map__43154);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43154__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43155 = p__43152;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43155,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution?query-type=attribution-date"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),false], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-single-attribution","get-single-attribution",-1620108505),(function (p__43171,p__43172){
var map__43175 = p__43171;
var map__43175__$1 = (((((!((map__43175 == null))))?(((((map__43175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43175):map__43175);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43175__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43176 = p__43172;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43176,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43176,(1),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43176,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-single-attribution-portfolio","change-single-attribution-portfolio",1766745939),(function (p__43186,p__43187){
var map__43189 = p__43186;
var map__43189__$1 = (((((!((map__43189 == null))))?(((((map__43189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43189):map__43189);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43189__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43190 = p__43187;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43190,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43190,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),portfolio),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450).cljs$core$IFn$_invoke$arity$1(db))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-single-attribution-period","change-single-attribution-period",860703642),(function (p__43202,p__43203){
var map__43204 = p__43202;
var map__43204__$1 = (((((!((map__43204 == null))))?(((((map__43204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43204):map__43204);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43204__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43205 = p__43203;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43205,(0),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43205,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),period),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521).cljs$core$IFn$_invoke$arity$1(db)),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-multiple-attribution","get-multiple-attribution",1245740943),(function (p__43216,p__43217){
var map__43220 = p__43216;
var map__43220__$1 = (((((!((map__43220 == null))))?(((((map__43220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43220):map__43220);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43220__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43221 = p__43217;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43221,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43221,(1),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43221,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution?query-type=multiple-portfolio&target=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-multiple-attribution-target","change-multiple-attribution-target",777460289),(function (p__43231,p__43232){
var map__43233 = p__43231;
var map__43233__$1 = (((((!((map__43233 == null))))?(((((map__43233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43233):map__43233);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43233__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43234 = p__43232;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43234,(0),null);
var ktarget = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43234,(1),null);
var target = clojure.string.replace(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ktarget,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)),"-"," ");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),ktarget),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution?query-type=multiple-portfolio&target=",target,"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154).cljs$core$IFn$_invoke$arity$1(db))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-multiple-attribution-period","change-multiple-attribution-period",590435537),(function (p__43251,p__43252){
var map__43253 = p__43251;
var map__43253__$1 = (((((!((map__43253 == null))))?(((((map__43253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43253):map__43253);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43253__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43254 = p__43252;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43254,(0),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43254,(1),null);
var target = clojure.string.replace(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)),"-"," ");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),period),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution?query-type=multiple-portfolio&target=",target,"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-attribution-summary","get-attribution-summary",-27760654),(function (p__43273,p__43274){
var map__43277 = p__43273;
var map__43277__$1 = (((((!((map__43277 == null))))?(((((map__43277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43277):map__43277);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43277__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43278 = p__43274;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43278,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution?query-type=summary"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("attribution","summary","attribution/summary",687462095)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));

//# sourceMappingURL=jasminegui.mount.js.map
