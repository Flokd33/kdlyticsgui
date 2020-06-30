goog.provide('jasminegui.mount');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('jasminegui.static$');
goog.require('re_frame.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('jasminegui.tables');
jasminegui.mount.default_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword("portfolio-review","alpha-chart-data","portfolio-review/alpha-chart-data",-243291168),new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679),new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705),new cljs.core.Keyword("multiple-portfolio-attribution","field-two","multiple-portfolio-attribution/field-two",-311759422),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword("multiple-portfolio-attribution","field-number","multiple-portfolio-attribution/field-number",-1780989148),new cljs.core.Keyword("navigation","success-modal","navigation/success-modal",533446693),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("single-bond-trade-history","bond","single-bond-trade-history/bond",2015871973),new cljs.core.Keyword("trade-history","active-bond","trade-history/active-bond",-1419462650),new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-bond-trade-history","show-flat-modal","single-bond-trade-history/show-flat-modal",1072491400),new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047),new cljs.core.Keyword("portfolio-review","marginal-beta-chart-data","portfolio-review/marginal-beta-chart-data",40550601),new cljs.core.Keyword("multiple-portfolio-attribution","display-style","multiple-portfolio-attribution/display-style",-767260119),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("var","result","var/result",1415073996),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("portfolio-review","historical-beta-chart-data","portfolio-review/historical-beta-chart-data",-1077808147),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738),new cljs.core.Keyword("attribution","summary","attribution/summary",687462095),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("navigation","active-view","navigation/active-view",800211184),new cljs.core.Keyword("portfolio-review","historical-performance-chart-data","portfolio-review/historical-performance-chart-data",1185340209),new cljs.core.Keyword("var","history","var/history",-246458543),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("navigation","active-attribution","navigation/active-attribution",600082450),new cljs.core.Keyword("portfolio-review","summary-data","portfolio-review/summary-data",-1362975725),new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181),new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219),new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("portfolio-review","jensen-chart-data","portfolio-review/jensen-chart-data",-701618636),new cljs.core.Keyword("multiple-portfolio-attribution","shortcut","multiple-portfolio-attribution/shortcut",809107380),new cljs.core.Keyword("navigation","active-home","navigation/active-home",1949576148),new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("single-portfolio-attribution","table-filter","single-portfolio-attribution/table-filter",1757441687),new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("navigation","active-var","navigation/active-var",39797785),new cljs.core.Keyword("single-bond-trade-history","show-modal","single-bond-trade-history/show-modal",-1585088359),new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127),new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334),new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("portfolio-review","contribution-chart-data","portfolio-review/contribution-chart-data",-581811845),new cljs.core.Keyword("portfolio-review","active-tab","portfolio-review/active-tab",1429822843),new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),new cljs.core.Keyword("single-portfolio-attribution","shortcut","single-portfolio-attribution/shortcut",-1711481988),new cljs.core.Keyword("trade-history","history","trade-history/history",1084885309),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),new cljs.core.Keyword("multiple-portfolio-attribution","table-filter","multiple-portfolio-attribution/table-filter",-9483585)],[(1),null,"OGEMCORD","Tree",cljs.core.PersistentVector.EMPTY,"None",null,null,"One",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show","show",-576705889),false,new cljs.core.Keyword(null,"on-close","on-close",-761178394),null,new cljs.core.Keyword(null,"response","response",-1068424192),null], null),"Table",null,null,true,"undefined",new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),true,true,false,cljs.core.PersistentVector.EMPTY,null,"Tree",cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),"undefined",cljs.core.PersistentVector.EMPTY,null,cljs.core.set(null),new cljs.core.Keyword(null,"quarter","quarter",-508147616),"Tree",null,null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"home","home",-74557309),null,null,(1),new cljs.core.Keyword(null,"summary","summary",380847952),null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),"OGEMCORD",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),null,(1),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"daily-3y","daily-3y",-2143971824),"ytd","None",cljs.core.PersistentVector.EMPTY,(1),"One","Tree",new cljs.core.Keyword(null,"overview","overview",-435037267),false,"OGEMCORD",cljs.core.set(null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),new cljs.core.Keyword(null,"total-effect","total-effect",-967715775),cljs.core.PersistentArrayMap.EMPTY,null,new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.PersistentVector.EMPTY,(1),null,"OGEMCORD",new cljs.core.Keyword(null,"cembi","cembi",1924920241),"ytd",cljs.core.PersistentVector.EMPTY,true,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),cljs.core.PersistentVector.EMPTY]);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jasminegui.mount","initialize-db","jasminegui.mount/initialize-db",-1621527627),(function (_,___$1){
return jasminegui.mount.default_db;
}));
var seq__42260_42973 = cljs.core.seq(cljs.core.keys(jasminegui.mount.default_db));
var chunk__42261_42974 = null;
var count__42262_42975 = (0);
var i__42263_42976 = (0);
while(true){
if((i__42263_42976 < count__42262_42975)){
var k_42986 = chunk__42261_42974.cljs$core$IIndexed$_nth$arity$2(null,i__42263_42976);
var G__42301_42987 = k_42986;
var G__42302_42988 = ((function (seq__42260_42973,chunk__42261_42974,count__42262_42975,i__42263_42976,G__42301_42987,k_42986){
return (function (db){
return (k_42986.cljs$core$IFn$_invoke$arity$1 ? k_42986.cljs$core$IFn$_invoke$arity$1(db) : k_42986.call(null,db));
});})(seq__42260_42973,chunk__42261_42974,count__42262_42975,i__42263_42976,G__42301_42987,k_42986))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42301_42987,G__42302_42988) : re_frame.core.reg_sub.call(null,G__42301_42987,G__42302_42988));


var G__42991 = seq__42260_42973;
var G__42992 = chunk__42261_42974;
var G__42993 = count__42262_42975;
var G__42994 = (i__42263_42976 + (1));
seq__42260_42973 = G__42991;
chunk__42261_42974 = G__42992;
count__42262_42975 = G__42993;
i__42263_42976 = G__42994;
continue;
} else {
var temp__5735__auto___42996 = cljs.core.seq(seq__42260_42973);
if(temp__5735__auto___42996){
var seq__42260_42998__$1 = temp__5735__auto___42996;
if(cljs.core.chunked_seq_QMARK_(seq__42260_42998__$1)){
var c__4556__auto___42999 = cljs.core.chunk_first(seq__42260_42998__$1);
var G__43000 = cljs.core.chunk_rest(seq__42260_42998__$1);
var G__43001 = c__4556__auto___42999;
var G__43002 = cljs.core.count(c__4556__auto___42999);
var G__43003 = (0);
seq__42260_42973 = G__43000;
chunk__42261_42974 = G__43001;
count__42262_42975 = G__43002;
i__42263_42976 = G__43003;
continue;
} else {
var k_43005 = cljs.core.first(seq__42260_42998__$1);
var G__42303_43006 = k_43005;
var G__42304_43007 = ((function (seq__42260_42973,chunk__42261_42974,count__42262_42975,i__42263_42976,G__42303_43006,k_43005,seq__42260_42998__$1,temp__5735__auto___42996){
return (function (db){
return (k_43005.cljs$core$IFn$_invoke$arity$1 ? k_43005.cljs$core$IFn$_invoke$arity$1(db) : k_43005.call(null,db));
});})(seq__42260_42973,chunk__42261_42974,count__42262_42975,i__42263_42976,G__42303_43006,k_43005,seq__42260_42998__$1,temp__5735__auto___42996))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42303_43006,G__42304_43007) : re_frame.core.reg_sub.call(null,G__42303_43006,G__42304_43007));


var G__43009 = cljs.core.next(seq__42260_42998__$1);
var G__43010 = null;
var G__43011 = (0);
var G__43012 = (0);
seq__42260_42973 = G__43009;
chunk__42261_42974 = G__43010;
count__42262_42975 = G__43011;
i__42263_42976 = G__43012;
continue;
}
} else {
}
}
break;
}
var seq__42309_43015 = cljs.core.seq(cljs.core.PersistentVector.fromArray([new cljs.core.Keyword("navigation","active-view","navigation/active-view",800211184),new cljs.core.Keyword("navigation","active-home","navigation/active-home",1949576148),new cljs.core.Keyword("navigation","active-var","navigation/active-var",39797785),new cljs.core.Keyword("navigation","active-attribution","navigation/active-attribution",600082450),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738),new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334),new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679),new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),new cljs.core.Keyword("single-portfolio-attribution","table-filter","single-portfolio-attribution/table-filter",1757441687),new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047),new cljs.core.Keyword("multiple-portfolio-attribution","display-style","multiple-portfolio-attribution/display-style",-767260119),new cljs.core.Keyword("multiple-portfolio-attribution","field-number","multiple-portfolio-attribution/field-number",-1780989148),new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),new cljs.core.Keyword("multiple-portfolio-attribution","field-two","multiple-portfolio-attribution/field-two",-311759422),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),new cljs.core.Keyword("multiple-portfolio-attribution","hide-zero-holdings","multiple-portfolio-attribution/hide-zero-holdings",1677138723),new cljs.core.Keyword("multiple-portfolio-attribution","shortcut","multiple-portfolio-attribution/shortcut",809107380),new cljs.core.Keyword("multiple-portfolio-attribution","table-filter","multiple-portfolio-attribution/table-filter",-9483585),new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705),new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),new cljs.core.Keyword("attribution","summary","attribution/summary",687462095),new cljs.core.Keyword("single-bond-trade-history","show-flat-modal","single-bond-trade-history/show-flat-modal",1072491400),new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181),new cljs.core.Keyword("single-bond-trade-history","show-modal","single-bond-trade-history/show-modal",-1585088359),new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127),new cljs.core.Keyword("single-bond-trade-history","bond","single-bond-trade-history/bond",2015871973),new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865),new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321),new cljs.core.Keyword("portfolio-review","active-tab","portfolio-review/active-tab",1429822843),new cljs.core.Keyword("portfolio-review","summary-data","portfolio-review/summary-data",-1362975725),new cljs.core.Keyword("portfolio-review","contribution-chart-data","portfolio-review/contribution-chart-data",-581811845),new cljs.core.Keyword("portfolio-review","alpha-chart-data","portfolio-review/alpha-chart-data",-243291168),new cljs.core.Keyword("portfolio-review","jensen-chart-data","portfolio-review/jensen-chart-data",-701618636),new cljs.core.Keyword("portfolio-review","marginal-beta-chart-data","portfolio-review/marginal-beta-chart-data",40550601),new cljs.core.Keyword("portfolio-review","historical-beta-chart-data","portfolio-review/historical-beta-chart-data",-1077808147),new cljs.core.Keyword("portfolio-review","historical-performance-chart-data","portfolio-review/historical-performance-chart-data",1185340209)], true));
var chunk__42310_43016 = null;
var count__42311_43017 = (0);
var i__42312_43018 = (0);
while(true){
if((i__42312_43018 < count__42311_43017)){
var k_43033 = chunk__42310_43016.cljs$core$IIndexed$_nth$arity$2(null,i__42312_43018);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_43033,((function (seq__42309_43015,chunk__42310_43016,count__42311_43017,i__42312_43018,k_43033){
return (function (db,p__42334){
var vec__42335 = p__42334;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42335,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42335,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_43033,data);
});})(seq__42309_43015,chunk__42310_43016,count__42311_43017,i__42312_43018,k_43033))
);


var G__43040 = seq__42309_43015;
var G__43041 = chunk__42310_43016;
var G__43042 = count__42311_43017;
var G__43043 = (i__42312_43018 + (1));
seq__42309_43015 = G__43040;
chunk__42310_43016 = G__43041;
count__42311_43017 = G__43042;
i__42312_43018 = G__43043;
continue;
} else {
var temp__5735__auto___43045 = cljs.core.seq(seq__42309_43015);
if(temp__5735__auto___43045){
var seq__42309_43047__$1 = temp__5735__auto___43045;
if(cljs.core.chunked_seq_QMARK_(seq__42309_43047__$1)){
var c__4556__auto___43048 = cljs.core.chunk_first(seq__42309_43047__$1);
var G__43049 = cljs.core.chunk_rest(seq__42309_43047__$1);
var G__43050 = c__4556__auto___43048;
var G__43051 = cljs.core.count(c__4556__auto___43048);
var G__43052 = (0);
seq__42309_43015 = G__43049;
chunk__42310_43016 = G__43050;
count__42311_43017 = G__43051;
i__42312_43018 = G__43052;
continue;
} else {
var k_43053 = cljs.core.first(seq__42309_43047__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_43053,((function (seq__42309_43015,chunk__42310_43016,count__42311_43017,i__42312_43018,k_43053,seq__42309_43047__$1,temp__5735__auto___43045){
return (function (db,p__42345){
var vec__42346 = p__42345;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42346,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42346,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_43053,data);
});})(seq__42309_43015,chunk__42310_43016,count__42311_43017,i__42312_43018,k_43053,seq__42309_43047__$1,temp__5735__auto___43045))
);


var G__43056 = cljs.core.next(seq__42309_43047__$1);
var G__43057 = null;
var G__43058 = (0);
var G__43059 = (0);
seq__42309_43015 = G__43056;
chunk__42310_43016 = G__43057;
count__42311_43017 = G__43058;
i__42312_43018 = G__43059;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"positions","positions",-1380538434),(function (db,p__42350){
var vec__42351 = p__42350;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42351,(0),null);
var positions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42351,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"positions","positions",-1380538434),positions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),(function (db,p__42358){
var vec__42359 = p__42358;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42359,(0),null);
var portfolios = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42359,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),portfolios,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),cljs.core.set(portfolios),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),cljs.core.set(portfolios)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),(function (db,p__42365){
var vec__42368 = p__42365;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42368,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42368,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42368,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),(function (db,p__42371){
var vec__42372 = p__42371;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42372,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42372,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42372,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),(function (db,p__42377){
var vec__42378 = p__42377;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42378,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42378,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42378,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),(function (db,p__42384){
var vec__42385 = p__42384;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42385,(0),null);
var qt_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42385,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),clojure.string.replace(qt_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),(function (db,p__42389){
var vec__42391 = p__42389;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42391,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42391,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42391,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219),(function (db,p__42396){
var vec__42397 = p__42396;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42397,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42397,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42397,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),(function (db,p__42401){
var vec__42402 = p__42401;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42402,(0),null);
var attribution_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42402,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),clojure.string.replace(attribution_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),(function (db,p__42407){
var vec__42409 = p__42407;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42409,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42409,(1),null);
var G__42413 = snapshot;
switch (G__42413) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42413)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cycle-shortcut","cycle-shortcut",-1617058214),(function (db,p__42427){
var vec__42428 = p__42427;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42428,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42428,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42428,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword("navigation","active-home","navigation/active-home",1949576148).cljs$core$IFn$_invoke$arity$1(db)),"-risk/shortcut"].join(''));
var shortcut_value = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
if((shortcut_value < (4))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(shortcut_value + (1)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(1));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tree-table","tree-table",-1263002012),(function (db,p__42431){
var vec__42432 = p__42431;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42432,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42432,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42432,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword("navigation","active-home","navigation/active-home",1949576148).cljs$core$IFn$_invoke$arity$1(db)),"-risk/display-style"].join(''));
var G__42435 = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
switch (G__42435) {
case "Tree":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Table");

break;
case "Table":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Tree");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42435)].join('')));

}
}));
jasminegui.mount.http_get_dispatch = (function jasminegui$mount$http_get_dispatch(request){
var c__41764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41765__auto__ = (function (){var switch__41719__auto__ = (function (state_42515){
var state_val_42516 = (state_42515[(1)]);
if((state_val_42516 === (1))){
var inst_42466 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_42467 = cljs_http.client.get(inst_42466);
var state_42515__$1 = state_42515;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42515__$1,(2),inst_42467);
} else {
if((state_val_42516 === (2))){
var inst_42469 = (state_42515[(2)]);
var inst_42472 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_42473 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_42515__$1 = (function (){var statearr_42532 = state_42515;
(statearr_42532[(7)] = inst_42472);

(statearr_42532[(8)] = inst_42469);

return statearr_42532;
})();
if(cljs.core.truth_(inst_42473)){
var statearr_42535_43114 = state_42515__$1;
(statearr_42535_43114[(1)] = (3));

} else {
var statearr_42536_43116 = state_42515__$1;
(statearr_42536_43116[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42516 === (3))){
var inst_42469 = (state_42515[(8)]);
var inst_42475 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_42469);
var inst_42476 = JSON.parse(inst_42475);
var inst_42477 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_42476,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_42515__$1 = state_42515;
var statearr_42542_43119 = state_42515__$1;
(statearr_42542_43119[(2)] = inst_42477);

(statearr_42542_43119[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42516 === (4))){
var inst_42469 = (state_42515[(8)]);
var inst_42484 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_42469);
var state_42515__$1 = state_42515;
var statearr_42544_43120 = state_42515__$1;
(statearr_42544_43120[(2)] = inst_42484);

(statearr_42544_43120[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42516 === (5))){
var inst_42472 = (state_42515[(7)]);
var inst_42486 = (state_42515[(2)]);
var inst_42487 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_42472,inst_42486);
var inst_42488 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_42487) : re_frame.core.dispatch.call(null,inst_42487));
var inst_42489 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_42515__$1 = (function (){var statearr_42550 = state_42515;
(statearr_42550[(9)] = inst_42488);

return statearr_42550;
})();
if(cljs.core.truth_(inst_42489)){
var statearr_42553_43129 = state_42515__$1;
(statearr_42553_43129[(1)] = (6));

} else {
var statearr_42554_43130 = state_42515__$1;
(statearr_42554_43130[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42516 === (6))){
var inst_42495 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42496 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_42497 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_42498 = [inst_42496,inst_42497];
var inst_42499 = (new cljs.core.PersistentVector(null,2,(5),inst_42495,inst_42498,null));
var inst_42500 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_42499) : re_frame.core.dispatch.call(null,inst_42499));
var state_42515__$1 = state_42515;
var statearr_42560_43138 = state_42515__$1;
(statearr_42560_43138[(2)] = inst_42500);

(statearr_42560_43138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42516 === (7))){
var state_42515__$1 = state_42515;
var statearr_42561_43140 = state_42515__$1;
(statearr_42561_43140[(2)] = null);

(statearr_42561_43140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42516 === (8))){
var inst_42503 = (state_42515[(2)]);
var state_42515__$1 = state_42515;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42515__$1,inst_42503);
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
var statearr_42564 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42564[(0)] = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__);

(statearr_42564[(1)] = (1));

return statearr_42564;
});
var jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1 = (function (state_42515){
while(true){
var ret_value__41721__auto__ = (function (){try{while(true){
var result__41722__auto__ = switch__41719__auto__(state_42515);
if(cljs.core.keyword_identical_QMARK_(result__41722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41722__auto__;
}
break;
}
}catch (e42574){if((e42574 instanceof Object)){
var ex__41723__auto__ = e42574;
var statearr_42580_43158 = state_42515;
(statearr_42580_43158[(5)] = ex__41723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42574;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43161 = state_42515;
state_42515 = G__43161;
continue;
} else {
return ret_value__41721__auto__;
}
break;
}
});
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__ = function(state_42515){
switch(arguments.length){
case 0:
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____0.call(this);
case 1:
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1.call(this,state_42515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____0;
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1;
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__;
})()
})();
var state__41766__auto__ = (function (){var statearr_42592 = (f__41765__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41765__auto__.cljs$core$IFn$_invoke$arity$0() : f__41765__auto__.call(null));
(statearr_42592[(6)] = c__41764__auto__);

return statearr_42592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41766__auto__);
}));

return c__41764__auto__;
});
var G__42601_43165 = new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518);
var G__42602_43166 = jasminegui.mount.http_get_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__42601_43165,G__42602_43166) : re_frame.core.reg_fx.call(null,G__42601_43165,G__42602_43166));
jasminegui.mount.http_post_dispatch = (function jasminegui$mount$http_post_dispatch(request){
var c__41764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41765__auto__ = (function (){var switch__41719__auto__ = (function (state_42639){
var state_val_42640 = (state_42639[(1)]);
if((state_val_42640 === (1))){
var inst_42606 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_42607 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_42608 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
var inst_42609 = [inst_42608];
var inst_42610 = cljs.core.PersistentHashMap.fromArrays(inst_42607,inst_42609);
var inst_42611 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_42606,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_42610], 0));
var state_42639__$1 = state_42639;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42639__$1,(2),inst_42611);
} else {
if((state_val_42640 === (2))){
var inst_42613 = (state_42639[(2)]);
var inst_42614 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_42615 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_42639__$1 = (function (){var statearr_42648 = state_42639;
(statearr_42648[(7)] = inst_42613);

(statearr_42648[(8)] = inst_42614);

return statearr_42648;
})();
if(cljs.core.truth_(inst_42615)){
var statearr_42649_43176 = state_42639__$1;
(statearr_42649_43176[(1)] = (3));

} else {
var statearr_42650_43177 = state_42639__$1;
(statearr_42650_43177[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42640 === (3))){
var inst_42613 = (state_42639[(7)]);
var inst_42617 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_42613);
var inst_42618 = JSON.parse(inst_42617);
var inst_42619 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_42618,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_42639__$1 = state_42639;
var statearr_42655_43180 = state_42639__$1;
(statearr_42655_43180[(2)] = inst_42619);

(statearr_42655_43180[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42640 === (4))){
var inst_42613 = (state_42639[(7)]);
var inst_42621 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_42613);
var state_42639__$1 = state_42639;
var statearr_42661_43182 = state_42639__$1;
(statearr_42661_43182[(2)] = inst_42621);

(statearr_42661_43182[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42640 === (5))){
var inst_42614 = (state_42639[(8)]);
var inst_42623 = (state_42639[(2)]);
var inst_42624 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_42614,inst_42623);
var inst_42625 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_42624) : re_frame.core.dispatch.call(null,inst_42624));
var inst_42626 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_42639__$1 = (function (){var statearr_42665 = state_42639;
(statearr_42665[(9)] = inst_42625);

return statearr_42665;
})();
if(cljs.core.truth_(inst_42626)){
var statearr_42668_43189 = state_42639__$1;
(statearr_42668_43189[(1)] = (6));

} else {
var statearr_42669_43192 = state_42639__$1;
(statearr_42669_43192[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42640 === (6))){
var inst_42628 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42629 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_42630 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_42631 = [inst_42629,inst_42630];
var inst_42632 = (new cljs.core.PersistentVector(null,2,(5),inst_42628,inst_42631,null));
var inst_42633 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_42632) : re_frame.core.dispatch.call(null,inst_42632));
var state_42639__$1 = state_42639;
var statearr_42673_43198 = state_42639__$1;
(statearr_42673_43198[(2)] = inst_42633);

(statearr_42673_43198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42640 === (7))){
var state_42639__$1 = state_42639;
var statearr_42676_43203 = state_42639__$1;
(statearr_42676_43203[(2)] = null);

(statearr_42676_43203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42640 === (8))){
var inst_42636 = (state_42639[(2)]);
var state_42639__$1 = state_42639;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42639__$1,inst_42636);
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
var statearr_42690 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42690[(0)] = jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__);

(statearr_42690[(1)] = (1));

return statearr_42690;
});
var jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____1 = (function (state_42639){
while(true){
var ret_value__41721__auto__ = (function (){try{while(true){
var result__41722__auto__ = switch__41719__auto__(state_42639);
if(cljs.core.keyword_identical_QMARK_(result__41722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41722__auto__;
}
break;
}
}catch (e42693){if((e42693 instanceof Object)){
var ex__41723__auto__ = e42693;
var statearr_42694_43206 = state_42639;
(statearr_42694_43206[(5)] = ex__41723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42693;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43207 = state_42639;
state_42639 = G__43207;
continue;
} else {
return ret_value__41721__auto__;
}
break;
}
});
jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__ = function(state_42639){
switch(arguments.length){
case 0:
return jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____0.call(this);
case 1:
return jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____1.call(this,state_42639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____0;
jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____1;
return jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__;
})()
})();
var state__41766__auto__ = (function (){var statearr_42696 = (f__41765__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41765__auto__.cljs$core$IFn$_invoke$arity$0() : f__41765__auto__.call(null));
(statearr_42696[(6)] = c__41764__auto__);

return statearr_42696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41766__auto__);
}));

return c__41764__auto__;
});
var G__42701_43209 = new cljs.core.Keyword(null,"http-post-dispatch","http-post-dispatch",2138865017);
var G__42702_43210 = jasminegui.mount.http_post_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__42701_43209,G__42702_43210) : re_frame.core.reg_fx.call(null,G__42701_43209,G__42702_43210));
jasminegui.mount.simple_http_get_events = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-positions","get-positions",1610972586),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"positions",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"positions","positions",-1380538434)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-rating-to-score","get-rating-to-score",391912155),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"rating-to-score",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"portfolios",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-pivoted-positions","get-pivoted-positions",2145025131),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"pivoted-positions",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-total-positions","get-total-positions",-698807167),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"total-positions",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-qt-date","get-qt-date",-1072332881),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"qt-date",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-var-proxies","get-var-proxies",1252506215),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"var-proxies",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-var-dates","get-var-dates",-1039695287),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"var-dates",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword("var","dates","var/dates",-1599746364)], null)], null);
var seq__42710_43227 = cljs.core.seq(jasminegui.mount.simple_http_get_events);
var chunk__42711_43228 = null;
var count__42712_43229 = (0);
var i__42713_43230 = (0);
while(true){
if((i__42713_43230 < count__42712_43229)){
var line_43232 = chunk__42711_43228.cljs$core$IIndexed$_nth$arity$2(null,i__42713_43230);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-key","get-key",1436017019).cljs$core$IFn$_invoke$arity$1(line_43232),((function (seq__42710_43227,chunk__42711_43228,count__42712_43229,i__42713_43230,line_43232){
return (function (p__42774,p__42775){
var map__42776 = p__42774;
var map__42776__$1 = (((((!((map__42776 == null))))?(((((map__42776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42776):map__42776);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42776__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42777 = p__42775;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42777,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url-tail","url-tail",144006528).cljs$core$IFn$_invoke$arity$1(line_43232))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dis-key","dis-key",842897221).cljs$core$IFn$_invoke$arity$1(line_43232)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
});})(seq__42710_43227,chunk__42711_43228,count__42712_43229,i__42713_43230,line_43232))
);


var G__43240 = seq__42710_43227;
var G__43241 = chunk__42711_43228;
var G__43242 = count__42712_43229;
var G__43243 = (i__42713_43230 + (1));
seq__42710_43227 = G__43240;
chunk__42711_43228 = G__43241;
count__42712_43229 = G__43242;
i__42713_43230 = G__43243;
continue;
} else {
var temp__5735__auto___43246 = cljs.core.seq(seq__42710_43227);
if(temp__5735__auto___43246){
var seq__42710_43247__$1 = temp__5735__auto___43246;
if(cljs.core.chunked_seq_QMARK_(seq__42710_43247__$1)){
var c__4556__auto___43248 = cljs.core.chunk_first(seq__42710_43247__$1);
var G__43249 = cljs.core.chunk_rest(seq__42710_43247__$1);
var G__43250 = c__4556__auto___43248;
var G__43251 = cljs.core.count(c__4556__auto___43248);
var G__43252 = (0);
seq__42710_43227 = G__43249;
chunk__42711_43228 = G__43250;
count__42712_43229 = G__43251;
i__42713_43230 = G__43252;
continue;
} else {
var line_43254 = cljs.core.first(seq__42710_43247__$1);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-key","get-key",1436017019).cljs$core$IFn$_invoke$arity$1(line_43254),((function (seq__42710_43227,chunk__42711_43228,count__42712_43229,i__42713_43230,line_43254,seq__42710_43247__$1,temp__5735__auto___43246){
return (function (p__42786,p__42787){
var map__42788 = p__42786;
var map__42788__$1 = (((((!((map__42788 == null))))?(((((map__42788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42788):map__42788);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42788__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42789 = p__42787;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42789,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url-tail","url-tail",144006528).cljs$core$IFn$_invoke$arity$1(line_43254))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dis-key","dis-key",842897221).cljs$core$IFn$_invoke$arity$1(line_43254)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
});})(seq__42710_43227,chunk__42711_43228,count__42712_43229,i__42713_43230,line_43254,seq__42710_43247__$1,temp__5735__auto___43246))
);


var G__43262 = cljs.core.next(seq__42710_43247__$1);
var G__43263 = null;
var G__43264 = (0);
var G__43265 = (0);
seq__42710_43227 = G__43262;
chunk__42711_43228 = G__43263;
count__42712_43229 = G__43264;
i__42713_43230 = G__43265;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-data","get-var-data",837806576),(function (p__42797,p__42798){
var map__42799 = p__42797;
var map__42799__$1 = (((((!((map__42799 == null))))?(((((map__42799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42799):map__42799);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42799__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42800 = p__42798;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42800,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42800,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"var-data?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-var","get-portfolio-var",1001711662),(function (p__42806,p__42807){
var map__42808 = p__42806;
var map__42808__$1 = (((((!((map__42808 == null))))?(((((map__42808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42808):map__42808);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42808__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42809 = p__42807;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42809,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42809,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),portfolio),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"var-data?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-attribution-date","get-attribution-date",-1329272944),(function (p__42816,p__42817){
var map__42818 = p__42816;
var map__42818__$1 = (((((!((map__42818 == null))))?(((((map__42818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42818):map__42818);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42818__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42819 = p__42817;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42819,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=attribution-date"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),false], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-single-attribution","get-single-attribution",-1620108505),(function (p__42827,p__42828){
var map__42829 = p__42827;
var map__42829__$1 = (((((!((map__42829 == null))))?(((((map__42829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42829):map__42829);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42829__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42830 = p__42828;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42830,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42830,(1),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42830,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-single-attribution-portfolio","change-single-attribution-portfolio",1766745939),(function (p__42838,p__42839){
var map__42841 = p__42838;
var map__42841__$1 = (((((!((map__42841 == null))))?(((((map__42841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42841):map__42841);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42841__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42842 = p__42839;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42842,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42842,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),portfolio),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450).cljs$core$IFn$_invoke$arity$1(db))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-single-attribution-period","change-single-attribution-period",860703642),(function (p__42852,p__42853){
var map__42854 = p__42852;
var map__42854__$1 = (((((!((map__42854 == null))))?(((((map__42854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42854):map__42854);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42854__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42855 = p__42853;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42855,(0),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42855,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),period),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521).cljs$core$IFn$_invoke$arity$1(db)),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-multiple-attribution","get-multiple-attribution",1245740943),(function (p__42866,p__42867){
var map__42869 = p__42866;
var map__42869__$1 = (((((!((map__42869 == null))))?(((((map__42869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42869):map__42869);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42869__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42870 = p__42867;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42870,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42870,(1),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42870,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=multiple-portfolio&target=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-multiple-attribution-target","change-multiple-attribution-target",777460289),(function (p__42878,p__42879){
var map__42881 = p__42878;
var map__42881__$1 = (((((!((map__42881 == null))))?(((((map__42881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42881):map__42881);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42881__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42882 = p__42879;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42882,(0),null);
var ktarget = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42882,(1),null);
var target = clojure.string.replace(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ktarget,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)),"-"," ");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),ktarget),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=multiple-portfolio&target=",target,"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154).cljs$core$IFn$_invoke$arity$1(db))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-multiple-attribution-period","change-multiple-attribution-period",590435537),(function (p__42896,p__42897){
var map__42900 = p__42896;
var map__42900__$1 = (((((!((map__42900 == null))))?(((((map__42900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42900):map__42900);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42900__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42901 = p__42897;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42901,(0),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42901,(1),null);
var target = clojure.string.replace(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)),"-"," ");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),period),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=multiple-portfolio&target=",target,"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-attribution-summary","get-attribution-summary",-27760654),(function (p__42913,p__42914){
var map__42915 = p__42913;
var map__42915__$1 = (((((!((map__42915 == null))))?(((((map__42915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42915):map__42915);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42915__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42916 = p__42914;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42916,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=summary"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("attribution","summary","attribution/summary",687462095)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));

//# sourceMappingURL=jasminegui.mount.js.map
