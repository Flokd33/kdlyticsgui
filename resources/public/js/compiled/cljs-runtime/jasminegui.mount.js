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
jasminegui.mount.default_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword("portfolio-review","alpha-chart-data","portfolio-review/alpha-chart-data",-243291168),new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679),new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705),new cljs.core.Keyword("multiple-portfolio-attribution","field-two","multiple-portfolio-attribution/field-two",-311759422),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword("multiple-portfolio-attribution","field-number","multiple-portfolio-attribution/field-number",-1780989148),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword(null,"active-var","active-var",-1787478523),new cljs.core.Keyword("single-bond-trade-history","bond","single-bond-trade-history/bond",2015871973),new cljs.core.Keyword("trade-history","active-bond","trade-history/active-bond",-1419462650),new cljs.core.Keyword(null,"active-attribution","active-attribution",-792819194),new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-bond-trade-history","show-flat-modal","single-bond-trade-history/show-flat-modal",1072491400),new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047),new cljs.core.Keyword("multiple-portfolio-attribution","display-style","multiple-portfolio-attribution/display-style",-767260119),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("var","result","var/result",1415073996),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738),new cljs.core.Keyword("attribution","summary","attribution/summary",687462095),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("var","history","var/history",-246458543),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("portfolio-review","summary-data","portfolio-review/summary-data",-1362975725),new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181),new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219),new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("portfolio-review","jensen-chart-data","portfolio-review/jensen-chart-data",-701618636),new cljs.core.Keyword("multiple-portfolio-attribution","shortcut","multiple-portfolio-attribution/shortcut",809107380),new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("single-portfolio-attribution","table-filter","single-portfolio-attribution/table-filter",1757441687),new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("single-bond-trade-history","show-modal","single-bond-trade-history/show-modal",-1585088359),new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321),new cljs.core.Keyword(null,"success-modal","success-modal",-1899350535),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127),new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334),new cljs.core.Keyword(null,"show-mounting-modal","show-mounting-modal",-1469130950),new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("portfolio-review","contribution-chart-data","portfolio-review/contribution-chart-data",-581811845),new cljs.core.Keyword("portfolio-review","active-tab","portfolio-review/active-tab",1429822843),new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword("single-portfolio-attribution","shortcut","single-portfolio-attribution/shortcut",-1711481988),new cljs.core.Keyword("trade-history","history","trade-history/history",1084885309),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),new cljs.core.Keyword("multiple-portfolio-attribution","table-filter","multiple-portfolio-attribution/table-filter",-9483585)],[(1),new cljs.core.Keyword(null,"summary","summary",380847952),null,"OGEMCORD","Tree",cljs.core.PersistentVector.EMPTY,"None",null,null,"One","Table",new cljs.core.Keyword(null,"overview","overview",-435037267),null,null,new cljs.core.Keyword(null,"summary","summary",380847952),"undefined",new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),true,true,false,cljs.core.PersistentVector.EMPTY,"Tree",cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),"undefined",cljs.core.PersistentVector.EMPTY,null,cljs.core.set(null),new cljs.core.Keyword(null,"quarter","quarter",-508147616),"Tree",null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),null,(1),null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),"OGEMCORD",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),null,(1),new cljs.core.Keyword(null,"daily-3y","daily-3y",-2143971824),"ytd","None",cljs.core.PersistentVector.EMPTY,(1),"One","Tree",false,"OGEMCORD",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show","show",-576705889),false,new cljs.core.Keyword(null,"on-close","on-close",-761178394),null,new cljs.core.Keyword(null,"response","response",-1068424192),null], null),cljs.core.set(null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,true,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),new cljs.core.Keyword(null,"total-effect","total-effect",-967715775),cljs.core.PersistentArrayMap.EMPTY,null,new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"home","home",-74557309),(1),null,"OGEMCORD",new cljs.core.Keyword(null,"cembi","cembi",1924920241),"ytd",cljs.core.PersistentVector.EMPTY,true,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),cljs.core.PersistentVector.EMPTY]);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jasminegui.mount","initialize-db","jasminegui.mount/initialize-db",-1621527627),(function (_,___$1){
return jasminegui.mount.default_db;
}));
var seq__51508_52215 = cljs.core.seq(cljs.core.keys(jasminegui.mount.default_db));
var chunk__51509_52216 = null;
var count__51510_52217 = (0);
var i__51511_52218 = (0);
while(true){
if((i__51511_52218 < count__51510_52217)){
var k_52219 = chunk__51509_52216.cljs$core$IIndexed$_nth$arity$2(null,i__51511_52218);
var G__51516_52234 = k_52219;
var G__51517_52235 = ((function (seq__51508_52215,chunk__51509_52216,count__51510_52217,i__51511_52218,G__51516_52234,k_52219){
return (function (db){
return (k_52219.cljs$core$IFn$_invoke$arity$1 ? k_52219.cljs$core$IFn$_invoke$arity$1(db) : k_52219.call(null,db));
});})(seq__51508_52215,chunk__51509_52216,count__51510_52217,i__51511_52218,G__51516_52234,k_52219))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__51516_52234,G__51517_52235) : re_frame.core.reg_sub.call(null,G__51516_52234,G__51517_52235));


var G__52236 = seq__51508_52215;
var G__52237 = chunk__51509_52216;
var G__52238 = count__51510_52217;
var G__52239 = (i__51511_52218 + (1));
seq__51508_52215 = G__52236;
chunk__51509_52216 = G__52237;
count__51510_52217 = G__52238;
i__51511_52218 = G__52239;
continue;
} else {
var temp__5735__auto___52240 = cljs.core.seq(seq__51508_52215);
if(temp__5735__auto___52240){
var seq__51508_52241__$1 = temp__5735__auto___52240;
if(cljs.core.chunked_seq_QMARK_(seq__51508_52241__$1)){
var c__4556__auto___52242 = cljs.core.chunk_first(seq__51508_52241__$1);
var G__52243 = cljs.core.chunk_rest(seq__51508_52241__$1);
var G__52244 = c__4556__auto___52242;
var G__52245 = cljs.core.count(c__4556__auto___52242);
var G__52246 = (0);
seq__51508_52215 = G__52243;
chunk__51509_52216 = G__52244;
count__51510_52217 = G__52245;
i__51511_52218 = G__52246;
continue;
} else {
var k_52250 = cljs.core.first(seq__51508_52241__$1);
var G__51518_52251 = k_52250;
var G__51519_52252 = ((function (seq__51508_52215,chunk__51509_52216,count__51510_52217,i__51511_52218,G__51518_52251,k_52250,seq__51508_52241__$1,temp__5735__auto___52240){
return (function (db){
return (k_52250.cljs$core$IFn$_invoke$arity$1 ? k_52250.cljs$core$IFn$_invoke$arity$1(db) : k_52250.call(null,db));
});})(seq__51508_52215,chunk__51509_52216,count__51510_52217,i__51511_52218,G__51518_52251,k_52250,seq__51508_52241__$1,temp__5735__auto___52240))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__51518_52251,G__51519_52252) : re_frame.core.reg_sub.call(null,G__51518_52251,G__51519_52252));


var G__52253 = cljs.core.next(seq__51508_52241__$1);
var G__52254 = null;
var G__52255 = (0);
var G__52256 = (0);
seq__51508_52215 = G__52253;
chunk__51509_52216 = G__52254;
count__51510_52217 = G__52255;
i__51511_52218 = G__52256;
continue;
}
} else {
}
}
break;
}
jasminegui.mount.first_level_sort = (function jasminegui$mount$first_level_sort(x){
var G__51524 = x;
switch (G__51524) {
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
var total_line = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"jpm-region","jpm-region",-2074265852),"Total",new cljs.core.Keyword(null,"qt-jpm-sector","qt-jpm-sector",1047055349),"Total",new cljs.core.Keyword(null,"qt-risk-country-name","qt-risk-country-name",1182905474),"Total",new cljs.core.Keyword(null,"TICKER","TICKER",-1215969144),"Total",new cljs.core.Keyword(null,"NAME","NAME",-1127916515),"Total",new cljs.core.Keyword(null,"description","description",-1428560544),"Total",new cljs.core.Keyword(null,"isin","isin",-1197420747),"Total",new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),"Total"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$add_total_line_to_pivot_$_iter__51525(s__51526){
return (new cljs.core.LazySeq(null,(function (){
var s__51526__$1 = s__51526;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51526__$1);
if(temp__5735__auto__){
var s__51526__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51526__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51526__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51528 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51527 = (0);
while(true){
if((i__51527 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__51527);
cljs.core.chunk_append(b__51528,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(p,pivoted_table))], null));

var G__52356 = (i__51527 + (1));
i__51527 = G__52356;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51528),jasminegui$mount$add_total_line_to_pivot_$_iter__51525(cljs.core.chunk_rest(s__51526__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51528),null);
}
} else {
var p = cljs.core.first(s__51526__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(p,pivoted_table))], null),jasminegui$mount$add_total_line_to_pivot_$_iter__51525(cljs.core.rest(s__51526__$2)));
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
var template = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$add_total_line_to_attribution_pivot_$_iter__51538(s__51539){
return (new cljs.core.LazySeq(null,(function (){
var s__51539__$1 = s__51539;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51539__$1);
if(temp__5735__auto__){
var s__51539__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51539__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51539__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51541 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51540 = (0);
while(true){
if((i__51540 < size__4528__auto__)){
var vec__51542 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__51540);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51542,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51542,(1),null);
cljs.core.chunk_append(b__51541,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,"Total"], null));

var G__52381 = (i__51540 + (1));
i__51540 = G__52381;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51541),jasminegui$mount$add_total_line_to_attribution_pivot_$_iter__51538(cljs.core.chunk_rest(s__51539__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51541),null);
}
} else {
var vec__51545 = cljs.core.first(s__51539__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51545,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51545,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,"Total"], null),jasminegui$mount$add_total_line_to_attribution_pivot_$_iter__51538(cljs.core.rest(s__51539__$2)));
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
var total_line = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([template,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$add_total_line_to_attribution_pivot_$_iter__51548(s__51549){
return (new cljs.core.LazySeq(null,(function (){
var s__51549__$1 = s__51549;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51549__$1);
if(temp__5735__auto__){
var s__51549__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51549__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51549__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51551 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51550 = (0);
while(true){
if((i__51550 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__51550);
cljs.core.chunk_append(b__51551,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(p,pivoted_table))], null));

var G__52391 = (i__51550 + (1));
i__51550 = G__52391;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51551),jasminegui$mount$add_total_line_to_attribution_pivot_$_iter__51548(cljs.core.chunk_rest(s__51549__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51551),null);
}
} else {
var p = cljs.core.first(s__51549__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(p,pivoted_table))], null),jasminegui$mount$add_total_line_to_attribution_pivot_$_iter__51548(cljs.core.rest(s__51549__$2)));
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
var G__51556_52395 = new cljs.core.Keyword("single-portfolio-risk","table","single-portfolio-risk/table",-637924467);
var G__51557_52396 = (function (db){
var positions = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db);
var portfolio = new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949).cljs$core$IFn$_invoke$arity$1(db);
var portfolio_total_line = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var G__51559 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(portfolio);
var fexpr__51558 = new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db);
return (fexpr__51558.cljs$core$IFn$_invoke$arity$1 ? fexpr__51558.cljs$core$IFn$_invoke$arity$1(G__51559) : fexpr__51558.call(null,G__51559));
})(),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),"Total",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),"00 Total"], 0));
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477).cljs$core$IFn$_invoke$arity$1(db),"Tree");
var portfolio_positions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51552_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__51552_SHARP_),portfolio);
}),positions);
var viewable_positions = (cljs.core.truth_((((!(is_tree)))?new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951).cljs$core$IFn$_invoke$arity$1(db):false))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51553_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(p1__51553_SHARP_),(0));
}),portfolio_positions):portfolio_positions);
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__51560 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51560) : re_frame.core.subscribe.call(null,G__51560));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__51555_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__51555_SHARP_) : rfil.call(null,p1__51555_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__51555_SHARP_) : rfil.call(null,p1__51555_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__51561(s__51562){
return (new cljs.core.LazySeq(null,(function (){
var s__51562__$1 = s__51562;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51562__$1);
if(temp__5735__auto__){
var s__51562__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51562__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51562__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51564 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51563 = (0);
while(true){
if((i__51563 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__51563);
cljs.core.chunk_append(b__51564,(jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.risk_table_columns.call(null,r)));

var G__52412 = (i__51563 + (1));
i__51563 = G__52412;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51564),jasminegui$mount$iter__51561(cljs.core.chunk_rest(s__51562__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51564),null);
}
} else {
var r = cljs.core.first(s__51562__$2);
return cljs.core.cons((jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.risk_table_columns.call(null,r)),jasminegui$mount$iter__51561(cljs.core.rest(s__51562__$2)));
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__51556_52395,G__51557_52396) : re_frame.core.reg_sub.call(null,G__51556_52395,G__51557_52396));
var G__51566_52477 = new cljs.core.Keyword("single-portfolio-attribution","clean-table","single-portfolio-attribution/clean-table",-391468387);
var G__51567_52478 = (function (db){
var data = new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047).cljs$core$IFn$_invoke$arity$1(db);
var template = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__51568(s__51569){
return (new cljs.core.LazySeq(null,(function (){
var s__51569__$1 = s__51569;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51569__$1);
if(temp__5735__auto__){
var s__51569__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51569__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51569__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51571 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51570 = (0);
while(true){
if((i__51570 < size__4528__auto__)){
var vec__51572 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__51570);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51572,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51572,(1),null);
cljs.core.chunk_append(b__51571,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,"Total"], null));

var G__52487 = (i__51570 + (1));
i__51570 = G__52487;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51571),jasminegui$mount$iter__51568(cljs.core.chunk_rest(s__51569__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51571),null);
}
} else {
var vec__51575 = cljs.core.first(s__51569__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51575,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51575,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,"Total"], null),jasminegui$mount$iter__51568(cljs.core.rest(s__51569__$2)));
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__51565_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__51565_SHARP_) : rfil.call(null,p1__51565_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__51565_SHARP_) : rfil.call(null,p1__51565_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__51578(s__51579){
return (new cljs.core.LazySeq(null,(function (){
var s__51579__$1 = s__51579;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51579__$1);
if(temp__5735__auto__){
var s__51579__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51579__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51579__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51581 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51580 = (0);
while(true){
if((i__51580 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__51580);
cljs.core.chunk_append(b__51581,(jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.attribution_table_columns.call(null,r)));

var G__52491 = (i__51580 + (1));
i__51580 = G__52491;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51581),jasminegui$mount$iter__51578(cljs.core.chunk_rest(s__51579__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51581),null);
}
} else {
var r = cljs.core.first(s__51579__$2);
return cljs.core.cons((jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.attribution_table_columns.call(null,r)),jasminegui$mount$iter__51578(cljs.core.rest(s__51579__$2)));
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__51566_52477,G__51567_52478) : re_frame.core.reg_sub.call(null,G__51566_52477,G__51567_52478));
var G__51584_52509 = new cljs.core.Keyword("multiple-portfolio-risk","table","multiple-portfolio-risk/table",1962237397);
var G__51585_52510 = (function (db){
var pivoted_positions = new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863).cljs$core$IFn$_invoke$arity$1(db);
var kselected_portfolios = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045).cljs$core$IFn$_invoke$arity$1(db));
var hide_zero_risk = new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337).cljs$core$IFn$_invoke$arity$1(db);
var display_key_one = new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337).cljs$core$IFn$_invoke$arity$1(db);
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547).cljs$core$IFn$_invoke$arity$1(db),"Tree");
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__51586 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51586) : re_frame.core.subscribe.call(null,G__51586));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__51582_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__51582_SHARP_) : rfil.call(null,p1__51582_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__51582_SHARP_) : rfil.call(null,p1__51582_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__51587(s__51588){
return (new cljs.core.LazySeq(null,(function (){
var s__51588__$1 = s__51588;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51588__$1);
if(temp__5735__auto__){
var s__51588__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51588__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51588__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51590 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51589 = (0);
while(true){
if((i__51589 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__51589);
cljs.core.chunk_append(b__51590,(jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.risk_table_columns.call(null,r)));

var G__52528 = (i__51589 + (1));
i__51589 = G__52528;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51590),jasminegui$mount$iter__51587(cljs.core.chunk_rest(s__51588__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51590),null);
}
} else {
var r = cljs.core.first(s__51588__$2);
return cljs.core.cons((jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.risk_table_columns.call(null,r)),jasminegui$mount$iter__51587(cljs.core.rest(s__51588__$2)));
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
var pivoted_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51583_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__51583_SHARP_,(function (){var fexpr__51591 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.risk_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_one,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__51591.cljs$core$IFn$_invoke$arity$1 ? fexpr__51591.cljs$core$IFn$_invoke$arity$1(p1__51583_SHARP_) : fexpr__51591.call(null,p1__51583_SHARP_));
})()], 0));
}),pivoted_positions);
var thfil = (function (line){
return (!(cljs.core.every_QMARK_(cljs.core.zero_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(line,kselected_portfolios))));
});
var pivoted_data_hide_zero = (cljs.core.truth_((((!(is_tree)))?hide_zero_risk:false))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(thfil,pivoted_data):pivoted_data);
return jasminegui.mount.add_total_line_to_pivot(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.mount.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),pivoted_data_hide_zero),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(db)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__51584_52509,G__51585_52510) : re_frame.core.reg_sub.call(null,G__51584_52509,G__51585_52510));
var G__51594_52549 = new cljs.core.Keyword("multiple-portfolio-attribution","clean-table","multiple-portfolio-attribution/clean-table",-1066824107);
var G__51595_52550 = (function (db){
var pivoted_positions = new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705).cljs$core$IFn$_invoke$arity$1(db);
var kselected_portfolios = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959).cljs$core$IFn$_invoke$arity$1(db));
var display_key_one = new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707).cljs$core$IFn$_invoke$arity$1(db);
var attribution_choices = (function (){var rfil = cljs.core.deref((function (){var G__51596 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51596) : re_frame.core.subscribe.call(null,G__51596));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__51592_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__51592_SHARP_) : rfil.call(null,p1__51592_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__51592_SHARP_) : rfil.call(null,p1__51592_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__51597(s__51598){
return (new cljs.core.LazySeq(null,(function (){
var s__51598__$1 = s__51598;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51598__$1);
if(temp__5735__auto__){
var s__51598__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51598__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51598__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51600 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51599 = (0);
while(true){
if((i__51599 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__51599);
cljs.core.chunk_append(b__51600,(jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.attribution_table_columns.call(null,r)));

var G__52555 = (i__51599 + (1));
i__51599 = G__52555;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51600),jasminegui$mount$iter__51597(cljs.core.chunk_rest(s__51598__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51600),null);
}
} else {
var r = cljs.core.first(s__51598__$2);
return cljs.core.cons((jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.attribution_table_columns.call(null,r)),jasminegui$mount$iter__51597(cljs.core.rest(s__51598__$2)));
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
var pivoted_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51593_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__51593_SHARP_,(function (){var fexpr__51601 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_one,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__51601.cljs$core$IFn$_invoke$arity$1 ? fexpr__51601.cljs$core$IFn$_invoke$arity$1(p1__51593_SHARP_) : fexpr__51601.call(null,p1__51593_SHARP_));
})()], 0));
}),pivoted_positions);
return jasminegui.mount.add_total_line_to_attribution_pivot(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.mount.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),pivoted_data),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(db)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__51594_52549,G__51595_52550) : re_frame.core.reg_sub.call(null,G__51594_52549,G__51595_52550));
var G__51606_52556 = new cljs.core.Keyword("portfolio-alignment","table","portfolio-alignment/table",-1411501022);
var G__51607_52557 = (function (db){
var group = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51602_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__51602_SHARP_),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110).cljs$core$IFn$_invoke$arity$1(db));
}),jasminegui.static$.portfolio_alignment_groups))));
var pivoted_positions = new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863).cljs$core$IFn$_invoke$arity$1(db);
var base_kportfolio = cljs.core.first(group);
var kportfolios = cljs.core.rest(group);
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__51608 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51608) : re_frame.core.subscribe.call(null,G__51608));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__51603_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__51603_SHARP_) : rfil.call(null,p1__51603_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__51603_SHARP_) : rfil.call(null,p1__51603_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__51609(s__51610){
return (new cljs.core.LazySeq(null,(function (){
var s__51610__$1 = s__51610;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51610__$1);
if(temp__5735__auto__){
var s__51610__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51610__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51610__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51612 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51611 = (0);
while(true){
if((i__51611 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__51611);
cljs.core.chunk_append(b__51612,(jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.risk_table_columns.call(null,r)));

var G__52586 = (i__51611 + (1));
i__51611 = G__52586;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51612),jasminegui$mount$iter__51609(cljs.core.chunk_rest(s__51610__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51612),null);
}
} else {
var r = cljs.core.first(s__51610__$2);
return cljs.core.cons((jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.risk_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.risk_table_columns.call(null,r)),jasminegui$mount$iter__51609(cljs.core.rest(s__51610__$2)));
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
var pivoted_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51604_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__51604_SHARP_,(function (){var fexpr__51613 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.risk_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__51613.cljs$core$IFn$_invoke$arity$1 ? fexpr__51613.cljs$core$IFn$_invoke$arity$1(p1__51604_SHARP_) : fexpr__51613.call(null,p1__51604_SHARP_));
})()], 0));
}),pivoted_positions);
var differentiate = (function (line){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (temp_line,p){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(temp_line,p,((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(temp_line) : p.call(null,temp_line)) - (base_kportfolio.cljs$core$IFn$_invoke$arity$1 ? base_kportfolio.cljs$core$IFn$_invoke$arity$1(temp_line) : base_kportfolio.call(null,temp_line))));
}),line,kportfolios);
});
var pivoted_data_diff = cljs.core.map.cljs$core$IFn$_invoke$arity$2(differentiate,pivoted_data);
var threshold = (0.01 * cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51605_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__51605_SHARP_),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053).cljs$core$IFn$_invoke$arity$1(db));
}),jasminegui.static$.threshold_choices_alignment)))));
var thfil = (function (line){
return cljs.core.some((function (x){
return (((x < (- threshold))) || ((x > threshold)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(line,kportfolios));
});
var pivoted_data_diff_post_th = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(thfil,pivoted_data_diff);
return jasminegui.mount.add_total_line_to_pivot(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.mount.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),pivoted_data_diff_post_th),kportfolios);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__51606_52556,G__51607_52557) : re_frame.core.reg_sub.call(null,G__51606_52556,G__51607_52557));
var G__51615_52606 = new cljs.core.Keyword("summary-display","table","summary-display/table",1149370831);
var G__51616_52607 = (function (db){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__51617(s__51618){
return (new cljs.core.LazySeq(null,(function (){
var s__51618__$1 = s__51618;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51618__$1);
if(temp__5735__auto__){
var s__51618__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51618__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51618__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51620 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51619 = (0);
while(true){
if((i__51619 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__51619);
cljs.core.chunk_append(b__51620,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"portfolio","portfolio",957568598),p], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = ((function (i__51619,p,c__4527__auto__,size__4528__auto__,b__51620,s__51618__$2,temp__5735__auto__,G__51615_52606){
return (function jasminegui$mount$iter__51617_$_iter__51621(s__51622){
return (new cljs.core.LazySeq(null,((function (i__51619,p,c__4527__auto__,size__4528__auto__,b__51620,s__51618__$2,temp__5735__auto__,G__51615_52606){
return (function (){
var s__51622__$1 = s__51622;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__51622__$1);
if(temp__5735__auto____$1){
var s__51622__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51622__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__51622__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__51624 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__51623 = (0);
while(true){
if((i__51623 < size__4528__auto____$1)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto____$1,i__51623);
cljs.core.chunk_append(b__51624,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null));

var G__52608 = (i__51623 + (1));
i__51623 = G__52608;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51624),jasminegui$mount$iter__51617_$_iter__51621(cljs.core.chunk_rest(s__51622__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51624),null);
}
} else {
var k = cljs.core.first(s__51622__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null),jasminegui$mount$iter__51617_$_iter__51621(cljs.core.rest(s__51622__$2)));
}
} else {
return null;
}
break;
}
});})(i__51619,p,c__4527__auto__,size__4528__auto__,b__51620,s__51618__$2,temp__5735__auto__,G__51615_52606))
,null,null));
});})(i__51619,p,c__4527__auto__,size__4528__auto__,b__51620,s__51618__$2,temp__5735__auto__,G__51615_52606))
;
return iter__4529__auto__(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175),new cljs.core.Keyword(null,"base-value","base-value",921379228),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067),new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030),new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),new cljs.core.Keyword(null,"contrib-beta-1y-daily","contrib-beta-1y-daily",259924328)], null));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861)], null)) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__51619,p,c__4527__auto__,size__4528__auto__,b__51620,s__51618__$2,temp__5735__auto__,G__51615_52606){
return (function (p1__51614_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__51614_SHARP_),p)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-class","asset-class",1845554418).cljs$core$IFn$_invoke$arity$1(p1__51614_SHARP_),"BONDS")));
});})(i__51619,p,c__4527__auto__,size__4528__auto__,b__51620,s__51618__$2,temp__5735__auto__,G__51615_52606))
,new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db)))))], null)], 0)));

var G__52609 = (i__51619 + (1));
i__51619 = G__52609;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51620),jasminegui$mount$iter__51617(cljs.core.chunk_rest(s__51618__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51620),null);
}
} else {
var p = cljs.core.first(s__51618__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"portfolio","portfolio",957568598),p], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = ((function (p,s__51618__$2,temp__5735__auto__,G__51615_52606){
return (function jasminegui$mount$iter__51617_$_iter__51625(s__51626){
return (new cljs.core.LazySeq(null,(function (){
var s__51626__$1 = s__51626;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__51626__$1);
if(temp__5735__auto____$1){
var s__51626__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51626__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51626__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51628 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51627 = (0);
while(true){
if((i__51627 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__51627);
cljs.core.chunk_append(b__51628,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null));

var G__52610 = (i__51627 + (1));
i__51627 = G__52610;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51628),jasminegui$mount$iter__51617_$_iter__51625(cljs.core.chunk_rest(s__51626__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51628),null);
}
} else {
var k = cljs.core.first(s__51626__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null),jasminegui$mount$iter__51617_$_iter__51625(cljs.core.rest(s__51626__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(p,s__51618__$2,temp__5735__auto__,G__51615_52606))
;
return iter__4529__auto__(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175),new cljs.core.Keyword(null,"base-value","base-value",921379228),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067),new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030),new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),new cljs.core.Keyword(null,"contrib-beta-1y-daily","contrib-beta-1y-daily",259924328)], null));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861)], null)) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (p,s__51618__$2,temp__5735__auto__,G__51615_52606){
return (function (p1__51614_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__51614_SHARP_),p)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-class","asset-class",1845554418).cljs$core$IFn$_invoke$arity$1(p1__51614_SHARP_),"BONDS")));
});})(p,s__51618__$2,temp__5735__auto__,G__51615_52606))
,new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db)))))], null)], 0)),jasminegui$mount$iter__51617(cljs.core.rest(s__51618__$2)));
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__51615_52606,G__51616_52607) : re_frame.core.reg_sub.call(null,G__51615_52606,G__51616_52607));
var seq__51629_52611 = cljs.core.seq(cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword(null,"active-var","active-var",-1787478523),new cljs.core.Keyword(null,"active-attribution","active-attribution",-792819194),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738),new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334),new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679),new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),new cljs.core.Keyword("single-portfolio-attribution","table-filter","single-portfolio-attribution/table-filter",1757441687),new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047),new cljs.core.Keyword("multiple-portfolio-attribution","display-style","multiple-portfolio-attribution/display-style",-767260119),new cljs.core.Keyword("multiple-portfolio-attribution","field-number","multiple-portfolio-attribution/field-number",-1780989148),new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),new cljs.core.Keyword("multiple-portfolio-attribution","field-two","multiple-portfolio-attribution/field-two",-311759422),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),new cljs.core.Keyword("multiple-portfolio-attribution","hide-zero-holdings","multiple-portfolio-attribution/hide-zero-holdings",1677138723),new cljs.core.Keyword("multiple-portfolio-attribution","shortcut","multiple-portfolio-attribution/shortcut",809107380),new cljs.core.Keyword("multiple-portfolio-attribution","table-filter","multiple-portfolio-attribution/table-filter",-9483585),new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705),new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),new cljs.core.Keyword("attribution","summary","attribution/summary",687462095),new cljs.core.Keyword("single-bond-trade-history","show-flat-modal","single-bond-trade-history/show-flat-modal",1072491400),new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181),new cljs.core.Keyword("single-bond-trade-history","show-modal","single-bond-trade-history/show-modal",-1585088359),new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127),new cljs.core.Keyword("single-bond-trade-history","bond","single-bond-trade-history/bond",2015871973),new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865),new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321),new cljs.core.Keyword("portfolio-review","active-tab","portfolio-review/active-tab",1429822843),new cljs.core.Keyword("portfolio-review","summary-data","portfolio-review/summary-data",-1362975725),new cljs.core.Keyword("portfolio-review","contribution-chart-data","portfolio-review/contribution-chart-data",-581811845),new cljs.core.Keyword("portfolio-review","alpha-chart-data","portfolio-review/alpha-chart-data",-243291168),new cljs.core.Keyword("portfolio-review","jensen-chart-data","portfolio-review/jensen-chart-data",-701618636)], true));
var chunk__51630_52612 = null;
var count__51631_52613 = (0);
var i__51632_52614 = (0);
while(true){
if((i__51632_52614 < count__51631_52613)){
var k_52615 = chunk__51630_52612.cljs$core$IIndexed$_nth$arity$2(null,i__51632_52614);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_52615,((function (seq__51629_52611,chunk__51630_52612,count__51631_52613,i__51632_52614,k_52615){
return (function (db,p__51641){
var vec__51642 = p__51641;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51642,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51642,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_52615,data);
});})(seq__51629_52611,chunk__51630_52612,count__51631_52613,i__51632_52614,k_52615))
);


var G__52616 = seq__51629_52611;
var G__52617 = chunk__51630_52612;
var G__52618 = count__51631_52613;
var G__52619 = (i__51632_52614 + (1));
seq__51629_52611 = G__52616;
chunk__51630_52612 = G__52617;
count__51631_52613 = G__52618;
i__51632_52614 = G__52619;
continue;
} else {
var temp__5735__auto___52620 = cljs.core.seq(seq__51629_52611);
if(temp__5735__auto___52620){
var seq__51629_52621__$1 = temp__5735__auto___52620;
if(cljs.core.chunked_seq_QMARK_(seq__51629_52621__$1)){
var c__4556__auto___52622 = cljs.core.chunk_first(seq__51629_52621__$1);
var G__52623 = cljs.core.chunk_rest(seq__51629_52621__$1);
var G__52624 = c__4556__auto___52622;
var G__52625 = cljs.core.count(c__4556__auto___52622);
var G__52626 = (0);
seq__51629_52611 = G__52623;
chunk__51630_52612 = G__52624;
count__51631_52613 = G__52625;
i__51632_52614 = G__52626;
continue;
} else {
var k_52627 = cljs.core.first(seq__51629_52621__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_52627,((function (seq__51629_52611,chunk__51630_52612,count__51631_52613,i__51632_52614,k_52627,seq__51629_52621__$1,temp__5735__auto___52620){
return (function (db,p__51645){
var vec__51646 = p__51645;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51646,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51646,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_52627,data);
});})(seq__51629_52611,chunk__51630_52612,count__51631_52613,i__51632_52614,k_52627,seq__51629_52621__$1,temp__5735__auto___52620))
);


var G__52628 = cljs.core.next(seq__51629_52621__$1);
var G__52629 = null;
var G__52630 = (0);
var G__52631 = (0);
seq__51629_52611 = G__52628;
chunk__51630_52612 = G__52629;
count__51631_52613 = G__52630;
i__51632_52614 = G__52631;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"positions","positions",-1380538434),(function (db,p__51649){
var vec__51650 = p__51649;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51650,(0),null);
var positions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51650,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"positions","positions",-1380538434),positions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-mounting-modal","show-mounting-modal",-1469130950),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127),(function (db,p__51653){
var vec__51654 = p__51653;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51654,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51654,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127),data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181),(function (db,p__51657){
var vec__51658 = p__51657;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51658,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51658,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181),data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),(function (db,p__51661){
var vec__51662 = p__51661;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51662,(0),null);
var portfolios = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51662,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),portfolios,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),cljs.core.set(portfolios),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),cljs.core.set(portfolios)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),(function (db,p__51665){
var vec__51666 = p__51665;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51666,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51666,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51666,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),(function (db,p__51669){
var vec__51670 = p__51669;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51670,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51670,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51670,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),(function (db,p__51673){
var vec__51674 = p__51673;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51674,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51674,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51674,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),(function (db,p__51677){
var vec__51678 = p__51677;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51678,(0),null);
var qt_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51678,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),clojure.string.replace(qt_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),(function (db,p__51681){
var vec__51682 = p__51681;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51682,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51682,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51682,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219),(function (db,p__51685){
var vec__51686 = p__51685;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51686,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51686,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51686,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),(function (db,p__51689){
var vec__51690 = p__51689;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51690,(0),null);
var attribution_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51690,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),clojure.string.replace(attribution_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),(function (db,p__51693){
var vec__51694 = p__51693;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51694,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51694,(1),null);
var G__51697 = snapshot;
switch (G__51697) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51697)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cycle-shortcut","cycle-shortcut",-1617058214),(function (db,p__51698){
var vec__51699 = p__51698;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51699,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51699,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51699,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"active-home","active-home",53621216).cljs$core$IFn$_invoke$arity$1(db)),"-risk/shortcut"].join(''));
var shortcut_value = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
if((shortcut_value < (4))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(shortcut_value + (1)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(1));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tree-table","tree-table",-1263002012),(function (db,p__51702){
var vec__51703 = p__51702;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51703,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51703,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51703,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"active-home","active-home",53621216).cljs$core$IFn$_invoke$arity$1(db)),"-risk/display-style"].join(''));
var G__51706 = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
switch (G__51706) {
case "Tree":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Table");

break;
case "Table":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Tree");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51706)].join('')));

}
}));
jasminegui.mount.http_get_dispatch = (function jasminegui$mount$http_get_dispatch(request){
var c__41764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41765__auto__ = (function (){var switch__41719__auto__ = (function (state_51735){
var state_val_51736 = (state_51735[(1)]);
if((state_val_51736 === (1))){
var inst_51707 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_51708 = cljs_http.client.get(inst_51707);
var state_51735__$1 = state_51735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51735__$1,(2),inst_51708);
} else {
if((state_val_51736 === (2))){
var inst_51710 = (state_51735[(2)]);
var inst_51711 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_51712 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_51735__$1 = (function (){var statearr_51737 = state_51735;
(statearr_51737[(7)] = inst_51710);

(statearr_51737[(8)] = inst_51711);

return statearr_51737;
})();
if(cljs.core.truth_(inst_51712)){
var statearr_51738_52634 = state_51735__$1;
(statearr_51738_52634[(1)] = (3));

} else {
var statearr_51739_52635 = state_51735__$1;
(statearr_51739_52635[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51736 === (3))){
var inst_51710 = (state_51735[(7)]);
var inst_51714 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_51710);
var inst_51715 = JSON.parse(inst_51714);
var inst_51716 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_51715,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_51735__$1 = state_51735;
var statearr_51740_52636 = state_51735__$1;
(statearr_51740_52636[(2)] = inst_51716);

(statearr_51740_52636[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51736 === (4))){
var inst_51710 = (state_51735[(7)]);
var inst_51718 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_51710);
var state_51735__$1 = state_51735;
var statearr_51741_52637 = state_51735__$1;
(statearr_51741_52637[(2)] = inst_51718);

(statearr_51741_52637[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51736 === (5))){
var inst_51711 = (state_51735[(8)]);
var inst_51720 = (state_51735[(2)]);
var inst_51721 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_51711,inst_51720);
var inst_51722 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_51721) : re_frame.core.dispatch.call(null,inst_51721));
var inst_51723 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_51735__$1 = (function (){var statearr_51742 = state_51735;
(statearr_51742[(9)] = inst_51722);

return statearr_51742;
})();
if(cljs.core.truth_(inst_51723)){
var statearr_51743_52638 = state_51735__$1;
(statearr_51743_52638[(1)] = (6));

} else {
var statearr_51744_52639 = state_51735__$1;
(statearr_51744_52639[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51736 === (6))){
var inst_51725 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51726 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_51727 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_51728 = [inst_51726,inst_51727];
var inst_51729 = (new cljs.core.PersistentVector(null,2,(5),inst_51725,inst_51728,null));
var inst_51730 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_51729) : re_frame.core.dispatch.call(null,inst_51729));
var state_51735__$1 = state_51735;
var statearr_51745_52640 = state_51735__$1;
(statearr_51745_52640[(2)] = inst_51730);

(statearr_51745_52640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51736 === (7))){
var state_51735__$1 = state_51735;
var statearr_51746_52641 = state_51735__$1;
(statearr_51746_52641[(2)] = null);

(statearr_51746_52641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51736 === (8))){
var inst_51733 = (state_51735[(2)]);
var state_51735__$1 = state_51735;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51735__$1,inst_51733);
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
var statearr_51747 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51747[(0)] = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__);

(statearr_51747[(1)] = (1));

return statearr_51747;
});
var jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1 = (function (state_51735){
while(true){
var ret_value__41721__auto__ = (function (){try{while(true){
var result__41722__auto__ = switch__41719__auto__(state_51735);
if(cljs.core.keyword_identical_QMARK_(result__41722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41722__auto__;
}
break;
}
}catch (e51748){if((e51748 instanceof Object)){
var ex__41723__auto__ = e51748;
var statearr_51749_52642 = state_51735;
(statearr_51749_52642[(5)] = ex__41723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51748;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52643 = state_51735;
state_51735 = G__52643;
continue;
} else {
return ret_value__41721__auto__;
}
break;
}
});
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__ = function(state_51735){
switch(arguments.length){
case 0:
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____0.call(this);
case 1:
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1.call(this,state_51735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____0;
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1;
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__;
})()
})();
var state__41766__auto__ = (function (){var statearr_51750 = (f__41765__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41765__auto__.cljs$core$IFn$_invoke$arity$0() : f__41765__auto__.call(null));
(statearr_51750[(6)] = c__41764__auto__);

return statearr_51750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41766__auto__);
}));

return c__41764__auto__;
});
var G__51751_52644 = new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518);
var G__51752_52645 = jasminegui.mount.http_get_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__51751_52644,G__51752_52645) : re_frame.core.reg_fx.call(null,G__51751_52644,G__51752_52645));
jasminegui.mount.http_post_dispatch = (function jasminegui$mount$http_post_dispatch(request){
var c__41764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41765__auto__ = (function (){var switch__41719__auto__ = (function (state_51785){
var state_val_51786 = (state_51785[(1)]);
if((state_val_51786 === (1))){
var inst_51753 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_51754 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_51755 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
var inst_51756 = [inst_51755];
var inst_51757 = cljs.core.PersistentHashMap.fromArrays(inst_51754,inst_51756);
var inst_51758 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_51753,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_51757], 0));
var state_51785__$1 = state_51785;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51785__$1,(2),inst_51758);
} else {
if((state_val_51786 === (2))){
var inst_51760 = (state_51785[(2)]);
var inst_51761 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_51762 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_51785__$1 = (function (){var statearr_51787 = state_51785;
(statearr_51787[(7)] = inst_51761);

(statearr_51787[(8)] = inst_51760);

return statearr_51787;
})();
if(cljs.core.truth_(inst_51762)){
var statearr_51788_52646 = state_51785__$1;
(statearr_51788_52646[(1)] = (3));

} else {
var statearr_51789_52647 = state_51785__$1;
(statearr_51789_52647[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51786 === (3))){
var inst_51760 = (state_51785[(8)]);
var inst_51764 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_51760);
var inst_51765 = JSON.parse(inst_51764);
var inst_51766 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_51765,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_51785__$1 = state_51785;
var statearr_51790_52648 = state_51785__$1;
(statearr_51790_52648[(2)] = inst_51766);

(statearr_51790_52648[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51786 === (4))){
var inst_51760 = (state_51785[(8)]);
var inst_51768 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_51760);
var state_51785__$1 = state_51785;
var statearr_51791_52649 = state_51785__$1;
(statearr_51791_52649[(2)] = inst_51768);

(statearr_51791_52649[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51786 === (5))){
var inst_51761 = (state_51785[(7)]);
var inst_51770 = (state_51785[(2)]);
var inst_51771 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_51761,inst_51770);
var inst_51772 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_51771) : re_frame.core.dispatch.call(null,inst_51771));
var inst_51773 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_51785__$1 = (function (){var statearr_51792 = state_51785;
(statearr_51792[(9)] = inst_51772);

return statearr_51792;
})();
if(cljs.core.truth_(inst_51773)){
var statearr_51793_52650 = state_51785__$1;
(statearr_51793_52650[(1)] = (6));

} else {
var statearr_51794_52651 = state_51785__$1;
(statearr_51794_52651[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51786 === (6))){
var inst_51775 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51776 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_51777 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_51778 = [inst_51776,inst_51777];
var inst_51779 = (new cljs.core.PersistentVector(null,2,(5),inst_51775,inst_51778,null));
var inst_51780 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_51779) : re_frame.core.dispatch.call(null,inst_51779));
var state_51785__$1 = state_51785;
var statearr_51795_52652 = state_51785__$1;
(statearr_51795_52652[(2)] = inst_51780);

(statearr_51795_52652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51786 === (7))){
var state_51785__$1 = state_51785;
var statearr_51796_52653 = state_51785__$1;
(statearr_51796_52653[(2)] = null);

(statearr_51796_52653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51786 === (8))){
var inst_51783 = (state_51785[(2)]);
var state_51785__$1 = state_51785;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51785__$1,inst_51783);
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
var statearr_51797 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51797[(0)] = jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__);

(statearr_51797[(1)] = (1));

return statearr_51797;
});
var jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____1 = (function (state_51785){
while(true){
var ret_value__41721__auto__ = (function (){try{while(true){
var result__41722__auto__ = switch__41719__auto__(state_51785);
if(cljs.core.keyword_identical_QMARK_(result__41722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41722__auto__;
}
break;
}
}catch (e51798){if((e51798 instanceof Object)){
var ex__41723__auto__ = e51798;
var statearr_51799_52654 = state_51785;
(statearr_51799_52654[(5)] = ex__41723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51798;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52655 = state_51785;
state_51785 = G__52655;
continue;
} else {
return ret_value__41721__auto__;
}
break;
}
});
jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__ = function(state_51785){
switch(arguments.length){
case 0:
return jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____0.call(this);
case 1:
return jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____1.call(this,state_51785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____0;
jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____1;
return jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__;
})()
})();
var state__41766__auto__ = (function (){var statearr_51800 = (f__41765__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41765__auto__.cljs$core$IFn$_invoke$arity$0() : f__41765__auto__.call(null));
(statearr_51800[(6)] = c__41764__auto__);

return statearr_51800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41766__auto__);
}));

return c__41764__auto__;
});
var G__51801_52656 = new cljs.core.Keyword(null,"http-post-dispatch","http-post-dispatch",2138865017);
var G__51802_52657 = jasminegui.mount.http_post_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__51801_52656,G__51802_52657) : re_frame.core.reg_fx.call(null,G__51801_52656,G__51802_52657));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions","get-positions",1610972586),(function (p__51803,p__51804){
var map__51805 = p__51803;
var map__51805__$1 = (((((!((map__51805 == null))))?(((((map__51805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51805):map__51805);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51805__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51806 = p__51804;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51806,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-rating-to-score","get-rating-to-score",391912155),(function (p__51810,p__51811){
var map__51812 = p__51810;
var map__51812__$1 = (((((!((map__51812 == null))))?(((((map__51812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51812):map__51812);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51812__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51813 = p__51811;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51813,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"rating-to-score"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472),(function (p__51817,p__51818){
var map__51819 = p__51817;
var map__51819__$1 = (((((!((map__51819 == null))))?(((((map__51819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51819):map__51819);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51819__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51820 = p__51818;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51820,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"portfolios"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-pivoted-positions","get-pivoted-positions",2145025131),(function (p__51824,p__51825){
var map__51826 = p__51824;
var map__51826__$1 = (((((!((map__51826 == null))))?(((((map__51826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51826):map__51826);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51826__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51827 = p__51825;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51827,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"pivoted-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-total-positions","get-total-positions",-698807167),(function (p__51831,p__51832){
var map__51833 = p__51831;
var map__51833__$1 = (((((!((map__51833 == null))))?(((((map__51833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51833):map__51833);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51833__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51834 = p__51832;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51834,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"total-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-qt-date","get-qt-date",-1072332881),(function (p__51838,p__51839){
var map__51840 = p__51838;
var map__51840__$1 = (((((!((map__51840 == null))))?(((((map__51840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51840):map__51840);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51840__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51841 = p__51839;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51841,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"qt-date"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),false], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-proxies","get-var-proxies",1252506215),(function (p__51845,p__51846){
var map__51847 = p__51845;
var map__51847__$1 = (((((!((map__51847 == null))))?(((((map__51847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51847):map__51847);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51847__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51848 = p__51846;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51848,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-proxies"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","proxies","var/proxies",-1487962738)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-dates","get-var-dates",-1039695287),(function (p__51852,p__51853){
var map__51854 = p__51852;
var map__51854__$1 = (((((!((map__51854 == null))))?(((((map__51854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51854):map__51854);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51854__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51855 = p__51853;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51855,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-dates"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","dates","var/dates",-1599746364)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-data","get-var-data",837806576),(function (p__51859,p__51860){
var map__51861 = p__51859;
var map__51861__$1 = (((((!((map__51861 == null))))?(((((map__51861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51861):map__51861);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51861__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51862 = p__51860;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51862,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51862,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-data?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-var","get-portfolio-var",1001711662),(function (p__51866,p__51867){
var map__51868 = p__51866;
var map__51868__$1 = (((((!((map__51868 == null))))?(((((map__51868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51868):map__51868);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51868__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51869 = p__51867;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51869,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51869,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),portfolio),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-data?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-attribution-date","get-attribution-date",-1329272944),(function (p__51873,p__51874){
var map__51875 = p__51873;
var map__51875__$1 = (((((!((map__51875 == null))))?(((((map__51875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51875):map__51875);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51875__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51876 = p__51874;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51876,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution?query-type=attribution-date"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),false], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-single-attribution","get-single-attribution",-1620108505),(function (p__51880,p__51881){
var map__51882 = p__51880;
var map__51882__$1 = (((((!((map__51882 == null))))?(((((map__51882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51882):map__51882);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51882__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51883 = p__51881;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51883,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51883,(1),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51883,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-single-attribution-portfolio","change-single-attribution-portfolio",1766745939),(function (p__51887,p__51888){
var map__51889 = p__51887;
var map__51889__$1 = (((((!((map__51889 == null))))?(((((map__51889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51889):map__51889);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51889__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51890 = p__51888;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51890,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51890,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),portfolio),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450).cljs$core$IFn$_invoke$arity$1(db))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-single-attribution-period","change-single-attribution-period",860703642),(function (p__51894,p__51895){
var map__51896 = p__51894;
var map__51896__$1 = (((((!((map__51896 == null))))?(((((map__51896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51896):map__51896);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51896__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51897 = p__51895;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51897,(0),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51897,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),period),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521).cljs$core$IFn$_invoke$arity$1(db)),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-multiple-attribution","get-multiple-attribution",1245740943),(function (p__51901,p__51902){
var map__51903 = p__51901;
var map__51903__$1 = (((((!((map__51903 == null))))?(((((map__51903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51903):map__51903);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51903__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51904 = p__51902;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51904,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51904,(1),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51904,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution?query-type=multiple-portfolio&target=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-multiple-attribution-target","change-multiple-attribution-target",777460289),(function (p__51908,p__51909){
var map__51910 = p__51908;
var map__51910__$1 = (((((!((map__51910 == null))))?(((((map__51910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51910):map__51910);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51910__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51911 = p__51909;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51911,(0),null);
var ktarget = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51911,(1),null);
var target = clojure.string.replace(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ktarget,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)),"-"," ");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),ktarget),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution?query-type=multiple-portfolio&target=",target,"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154).cljs$core$IFn$_invoke$arity$1(db))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-multiple-attribution-period","change-multiple-attribution-period",590435537),(function (p__51915,p__51916){
var map__51917 = p__51915;
var map__51917__$1 = (((((!((map__51917 == null))))?(((((map__51917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51917):map__51917);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51917__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51918 = p__51916;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51918,(0),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51918,(1),null);
var target = clojure.string.replace(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)),"-"," ");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),period),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution?query-type=multiple-portfolio&target=",target,"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-attribution-summary","get-attribution-summary",-27760654),(function (p__51922,p__51923){
var map__51924 = p__51922;
var map__51924__$1 = (((((!((map__51924 == null))))?(((((map__51924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51924):map__51924);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51924__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51925 = p__51923;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51925,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"attribution?query-type=summary"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("attribution","summary","attribution/summary",687462095)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-review-summary-data","get-portfolio-review-summary-data",-1339542673),(function (p__51929,p__51930){
var map__51931 = p__51929;
var map__51931__$1 = (((((!((map__51931 == null))))?(((((map__51931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51931):map__51931);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51931__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51932 = p__51930;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51932,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51932,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"portfolio-review?query-type=summary&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","summary-data","portfolio-review/summary-data",-1362975725)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-review-contribution-chart-data","get-portfolio-review-contribution-chart-data",1350930118),(function (p__51936,p__51937){
var map__51938 = p__51936;
var map__51938__$1 = (((((!((map__51938 == null))))?(((((map__51938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51938):map__51938);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51938__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51939 = p__51937;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51939,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51939,(1),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51939,(2),null);
var grouping = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51939,(3),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"portfolio-review?query-type=contribution&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period),"&grouping=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(grouping)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","contribution-chart-data","portfolio-review/contribution-chart-data",-581811845)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-review-alpha-chart-data","get-portfolio-review-alpha-chart-data",2022261801),(function (p__51943,p__51944){
var map__51945 = p__51943;
var map__51945__$1 = (((((!((map__51945 == null))))?(((((map__51945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51945):map__51945);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51945__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51946 = p__51944;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51946,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51946,(1),null);
var grouping = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51946,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"portfolio-review?query-type=alpha&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&grouping=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(grouping)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","alpha-chart-data","portfolio-review/alpha-chart-data",-243291168)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-review-jensen-chart-data","get-portfolio-review-jensen-chart-data",-928743439),(function (p__51950,p__51951){
var map__51952 = p__51950;
var map__51952__$1 = (((((!((map__51952 == null))))?(((((map__51952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51952):map__51952);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51952__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51953 = p__51951;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51953,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51953,(1),null);
var grouping = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51953,(2),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[jasminegui.mount.server_address,"portfolio-review?query-type=jensen&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&grouping=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(grouping)].join('')], 0));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"portfolio-review?query-type=jensen&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&grouping=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(grouping)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","jensen-chart-data","portfolio-review/jensen-chart-data",-701618636)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));

//# sourceMappingURL=jasminegui.mount.js.map
