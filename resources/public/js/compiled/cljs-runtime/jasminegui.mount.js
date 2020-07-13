goog.provide('jasminegui.mount');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('jasminegui.static$');
goog.require('re_frame.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('jasminegui.tables');
goog.require('jasminegui.tools');
goog.require('cljs_time.core');
jasminegui.mount.default_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword("portfolio-review","alpha-chart-data","portfolio-review/alpha-chart-data",-243291168),new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679),new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705),new cljs.core.Keyword("multiple-portfolio-attribution","field-two","multiple-portfolio-attribution/field-two",-311759422),new cljs.core.Keyword("portfolio-trade-history","performance","portfolio-trade-history/performance",-2029881566),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword("multiple-portfolio-attribution","field-number","multiple-portfolio-attribution/field-number",-1780989148),new cljs.core.Keyword(null,"ex-emcd-portfolios","ex-emcd-portfolios",1425006500),new cljs.core.Keyword("navigation","success-modal","navigation/success-modal",533446693),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("single-bond-trade-history","bond","single-bond-trade-history/bond",2015871973),new cljs.core.Keyword("trade-history","active-bond","trade-history/active-bond",-1419462650),new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),new cljs.core.Keyword("betas","table","betas/table",-390525241),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-bond-trade-history","show-flat-modal","single-bond-trade-history/show-flat-modal",1072491400),new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047),new cljs.core.Keyword("portfolio-review","marginal-beta-chart-data","portfolio-review/marginal-beta-chart-data",40550601),new cljs.core.Keyword("multiple-portfolio-attribution","display-style","multiple-portfolio-attribution/display-style",-767260119),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("portfolio-trade-history","end-date","portfolio-trade-history/end-date",68061260),new cljs.core.Keyword("var","result","var/result",1415073996),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("portfolio-review","historical-beta-chart-data","portfolio-review/historical-beta-chart-data",-1077808147),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738),new cljs.core.Keyword("attribution","summary","attribution/summary",687462095),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("navigation","active-view","navigation/active-view",800211184),new cljs.core.Keyword("portfolio-review","historical-performance-chart-data","portfolio-review/historical-performance-chart-data",1185340209),new cljs.core.Keyword("var","history","var/history",-246458543),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("navigation","active-attribution","navigation/active-attribution",600082450),new cljs.core.Keyword("portfolio-review","summary-data","portfolio-review/summary-data",-1362975725),new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181),new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219),new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("portfolio-review","jensen-chart-data","portfolio-review/jensen-chart-data",-701618636),new cljs.core.Keyword("portfolio-trade-history","portfolio","portfolio-trade-history/portfolio",160136116),new cljs.core.Keyword("multiple-portfolio-attribution","shortcut","multiple-portfolio-attribution/shortcut",809107380),new cljs.core.Keyword("navigation","active-home","navigation/active-home",1949576148),new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),new cljs.core.Keyword(null,"positions-new","positions-new",1631706550),new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("single-portfolio-attribution","table-filter","single-portfolio-attribution/table-filter",1757441687),new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("navigation","active-var","navigation/active-var",39797785),new cljs.core.Keyword("single-bond-trade-history","show-modal","single-bond-trade-history/show-modal",-1585088359),new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),new cljs.core.Keyword("portfolio-trade-history","data","portfolio-trade-history/data",27790297),new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127),new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334),new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("portfolio-review","contribution-chart-data","portfolio-review/contribution-chart-data",-581811845),new cljs.core.Keyword("portfolio-review","active-tab","portfolio-review/active-tab",1429822843),new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),new cljs.core.Keyword("single-portfolio-attribution","shortcut","single-portfolio-attribution/shortcut",-1711481988),new cljs.core.Keyword("trade-history","history","trade-history/history",1084885309),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("portfolio-trade-history","start-date","portfolio-trade-history/start-date",-1590289411),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),new cljs.core.Keyword("multiple-portfolio-attribution","table-filter","multiple-portfolio-attribution/table-filter",-9483585)],[(1),null,"OGEMCORD","Tree",cljs.core.PersistentVector.EMPTY,"None","No",null,null,"One",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show","show",-576705889),false,new cljs.core.Keyword(null,"on-close","on-close",-761178394),null,new cljs.core.Keyword(null,"response","response",-1068424192),null], null),"Table",null,null,true,"undefined",null,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),false,true,false,cljs.core.PersistentVector.EMPTY,null,"Tree",cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),"undefined",cljs.core.PersistentVector.EMPTY,jasminegui.tools.int_to_gdate(cljs_time.core.today()),null,cljs.core.set(null),new cljs.core.Keyword(null,"quarter","quarter",-508147616),"Tree",null,null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"home","home",-74557309),null,null,(1),new cljs.core.Keyword(null,"summary","summary",380847952),null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),"OGEMCORD",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),null,"OGEMCORD",(1),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"daily-3y","daily-3y",-2143971824),cljs.core.PersistentArrayMap.EMPTY,"ytd","None",cljs.core.PersistentVector.EMPTY,(1),"One","Tree",new cljs.core.Keyword(null,"overview","overview",-435037267),false,"OGEMCORD",cljs.core.set(null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),new cljs.core.Keyword(null,"total-effect","total-effect",-967715775),cljs.core.PersistentArrayMap.EMPTY,null,new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.PersistentVector.EMPTY,(1),null,"OGEMCORD",jasminegui.tools.int_to_gdate((20200101)),new cljs.core.Keyword(null,"cembi","cembi",1924920241),"ytd",cljs.core.PersistentVector.EMPTY,true,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),cljs.core.PersistentVector.EMPTY]);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jasminegui.mount","initialize-db","jasminegui.mount/initialize-db",-1621527627),(function (_,___$1){
return jasminegui.mount.default_db;
}));
var seq__44043_44334 = cljs.core.seq(cljs.core.keys(jasminegui.mount.default_db));
var chunk__44044_44335 = null;
var count__44045_44336 = (0);
var i__44046_44337 = (0);
while(true){
if((i__44046_44337 < count__44045_44336)){
var k_44338 = chunk__44044_44335.cljs$core$IIndexed$_nth$arity$2(null,i__44046_44337);
var G__44051_44339 = k_44338;
var G__44052_44340 = ((function (seq__44043_44334,chunk__44044_44335,count__44045_44336,i__44046_44337,G__44051_44339,k_44338){
return (function (db){
return (k_44338.cljs$core$IFn$_invoke$arity$1 ? k_44338.cljs$core$IFn$_invoke$arity$1(db) : k_44338.call(null,db));
});})(seq__44043_44334,chunk__44044_44335,count__44045_44336,i__44046_44337,G__44051_44339,k_44338))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__44051_44339,G__44052_44340) : re_frame.core.reg_sub.call(null,G__44051_44339,G__44052_44340));


var G__44341 = seq__44043_44334;
var G__44342 = chunk__44044_44335;
var G__44343 = count__44045_44336;
var G__44344 = (i__44046_44337 + (1));
seq__44043_44334 = G__44341;
chunk__44044_44335 = G__44342;
count__44045_44336 = G__44343;
i__44046_44337 = G__44344;
continue;
} else {
var temp__5735__auto___44345 = cljs.core.seq(seq__44043_44334);
if(temp__5735__auto___44345){
var seq__44043_44346__$1 = temp__5735__auto___44345;
if(cljs.core.chunked_seq_QMARK_(seq__44043_44346__$1)){
var c__4556__auto___44347 = cljs.core.chunk_first(seq__44043_44346__$1);
var G__44348 = cljs.core.chunk_rest(seq__44043_44346__$1);
var G__44349 = c__4556__auto___44347;
var G__44350 = cljs.core.count(c__4556__auto___44347);
var G__44351 = (0);
seq__44043_44334 = G__44348;
chunk__44044_44335 = G__44349;
count__44045_44336 = G__44350;
i__44046_44337 = G__44351;
continue;
} else {
var k_44352 = cljs.core.first(seq__44043_44346__$1);
var G__44053_44353 = k_44352;
var G__44054_44354 = ((function (seq__44043_44334,chunk__44044_44335,count__44045_44336,i__44046_44337,G__44053_44353,k_44352,seq__44043_44346__$1,temp__5735__auto___44345){
return (function (db){
return (k_44352.cljs$core$IFn$_invoke$arity$1 ? k_44352.cljs$core$IFn$_invoke$arity$1(db) : k_44352.call(null,db));
});})(seq__44043_44334,chunk__44044_44335,count__44045_44336,i__44046_44337,G__44053_44353,k_44352,seq__44043_44346__$1,temp__5735__auto___44345))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__44053_44353,G__44054_44354) : re_frame.core.reg_sub.call(null,G__44053_44353,G__44054_44354));


var G__44355 = cljs.core.next(seq__44043_44346__$1);
var G__44356 = null;
var G__44357 = (0);
var G__44358 = (0);
seq__44043_44334 = G__44355;
chunk__44044_44335 = G__44356;
count__44045_44336 = G__44357;
i__44046_44337 = G__44358;
continue;
}
} else {
}
}
break;
}
var seq__44055_44359 = cljs.core.seq(cljs.core.PersistentVector.fromArray([new cljs.core.Keyword("navigation","active-view","navigation/active-view",800211184),new cljs.core.Keyword("navigation","active-home","navigation/active-home",1949576148),new cljs.core.Keyword("navigation","active-var","navigation/active-var",39797785),new cljs.core.Keyword("navigation","active-attribution","navigation/active-attribution",600082450),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738),new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334),new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679),new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),new cljs.core.Keyword("single-portfolio-attribution","table-filter","single-portfolio-attribution/table-filter",1757441687),new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047),new cljs.core.Keyword("multiple-portfolio-attribution","display-style","multiple-portfolio-attribution/display-style",-767260119),new cljs.core.Keyword("multiple-portfolio-attribution","field-number","multiple-portfolio-attribution/field-number",-1780989148),new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),new cljs.core.Keyword("multiple-portfolio-attribution","field-two","multiple-portfolio-attribution/field-two",-311759422),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),new cljs.core.Keyword("multiple-portfolio-attribution","hide-zero-holdings","multiple-portfolio-attribution/hide-zero-holdings",1677138723),new cljs.core.Keyword("multiple-portfolio-attribution","shortcut","multiple-portfolio-attribution/shortcut",809107380),new cljs.core.Keyword("multiple-portfolio-attribution","table-filter","multiple-portfolio-attribution/table-filter",-9483585),new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705),new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),new cljs.core.Keyword("attribution","summary","attribution/summary",687462095),new cljs.core.Keyword("single-bond-trade-history","show-flat-modal","single-bond-trade-history/show-flat-modal",1072491400),new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181),new cljs.core.Keyword("single-bond-trade-history","show-modal","single-bond-trade-history/show-modal",-1585088359),new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127),new cljs.core.Keyword("single-bond-trade-history","bond","single-bond-trade-history/bond",2015871973),new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865),new cljs.core.Keyword("portfolio-trade-history","portfolio","portfolio-trade-history/portfolio",160136116),new cljs.core.Keyword("portfolio-trade-history","start-date","portfolio-trade-history/start-date",-1590289411),new cljs.core.Keyword("portfolio-trade-history","end-date","portfolio-trade-history/end-date",68061260),new cljs.core.Keyword("portfolio-trade-history","performance","portfolio-trade-history/performance",-2029881566),new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321),new cljs.core.Keyword("portfolio-review","active-tab","portfolio-review/active-tab",1429822843),new cljs.core.Keyword("portfolio-review","summary-data","portfolio-review/summary-data",-1362975725),new cljs.core.Keyword("portfolio-review","contribution-chart-data","portfolio-review/contribution-chart-data",-581811845),new cljs.core.Keyword("portfolio-review","alpha-chart-data","portfolio-review/alpha-chart-data",-243291168),new cljs.core.Keyword("portfolio-review","jensen-chart-data","portfolio-review/jensen-chart-data",-701618636),new cljs.core.Keyword("portfolio-review","marginal-beta-chart-data","portfolio-review/marginal-beta-chart-data",40550601),new cljs.core.Keyword("portfolio-review","historical-beta-chart-data","portfolio-review/historical-beta-chart-data",-1077808147),new cljs.core.Keyword("portfolio-review","historical-performance-chart-data","portfolio-review/historical-performance-chart-data",1185340209),new cljs.core.Keyword("betas","table","betas/table",-390525241)], true));
var chunk__44056_44360 = null;
var count__44057_44361 = (0);
var i__44058_44362 = (0);
while(true){
if((i__44058_44362 < count__44057_44361)){
var k_44363 = chunk__44056_44360.cljs$core$IIndexed$_nth$arity$2(null,i__44058_44362);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_44363,((function (seq__44055_44359,chunk__44056_44360,count__44057_44361,i__44058_44362,k_44363){
return (function (db,p__44067){
var vec__44068 = p__44067;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44068,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44068,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_44363,data);
});})(seq__44055_44359,chunk__44056_44360,count__44057_44361,i__44058_44362,k_44363))
);


var G__44371 = seq__44055_44359;
var G__44372 = chunk__44056_44360;
var G__44373 = count__44057_44361;
var G__44374 = (i__44058_44362 + (1));
seq__44055_44359 = G__44371;
chunk__44056_44360 = G__44372;
count__44057_44361 = G__44373;
i__44058_44362 = G__44374;
continue;
} else {
var temp__5735__auto___44375 = cljs.core.seq(seq__44055_44359);
if(temp__5735__auto___44375){
var seq__44055_44376__$1 = temp__5735__auto___44375;
if(cljs.core.chunked_seq_QMARK_(seq__44055_44376__$1)){
var c__4556__auto___44377 = cljs.core.chunk_first(seq__44055_44376__$1);
var G__44378 = cljs.core.chunk_rest(seq__44055_44376__$1);
var G__44379 = c__4556__auto___44377;
var G__44380 = cljs.core.count(c__4556__auto___44377);
var G__44381 = (0);
seq__44055_44359 = G__44378;
chunk__44056_44360 = G__44379;
count__44057_44361 = G__44380;
i__44058_44362 = G__44381;
continue;
} else {
var k_44388 = cljs.core.first(seq__44055_44376__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_44388,((function (seq__44055_44359,chunk__44056_44360,count__44057_44361,i__44058_44362,k_44388,seq__44055_44376__$1,temp__5735__auto___44375){
return (function (db,p__44071){
var vec__44072 = p__44071;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44072,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44072,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_44388,data);
});})(seq__44055_44359,chunk__44056_44360,count__44057_44361,i__44058_44362,k_44388,seq__44055_44376__$1,temp__5735__auto___44375))
);


var G__44389 = cljs.core.next(seq__44055_44376__$1);
var G__44390 = null;
var G__44391 = (0);
var G__44392 = (0);
seq__44055_44359 = G__44389;
chunk__44056_44360 = G__44390;
count__44057_44361 = G__44391;
i__44058_44362 = G__44392;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"positions","positions",-1380538434),(function (db,p__44075){
var vec__44076 = p__44075;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44076,(0),null);
var positions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44076,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"positions","positions",-1380538434),positions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"positions-new","positions-new",1631706550),(function (db,p__44079){
var vec__44080 = p__44079;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44080,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44080,(1),null);
var positions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44080,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-new","positions-new",1631706550),portfolio], null),positions),new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),(function (db,p__44083){
var vec__44084 = p__44083;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44084,(0),null);
var portfolios = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44084,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),portfolios,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),cljs.core.set(portfolios),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),cljs.core.set(portfolios)], 0));
}));
var seq__44087_44405 = cljs.core.seq(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219)], null));
var chunk__44088_44406 = null;
var count__44089_44407 = (0);
var i__44090_44408 = (0);
while(true){
if((i__44090_44408 < count__44089_44407)){
var k_44409 = chunk__44088_44406.cljs$core$IIndexed$_nth$arity$2(null,i__44090_44408);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_44409,((function (seq__44087_44405,chunk__44088_44406,count__44089_44407,i__44090_44408,k_44409){
return (function (db,p__44099){
var vec__44100 = p__44099;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44100,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44100,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44100,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_44409,id], null),f);
});})(seq__44087_44405,chunk__44088_44406,count__44089_44407,i__44090_44408,k_44409))
);


var G__44414 = seq__44087_44405;
var G__44415 = chunk__44088_44406;
var G__44416 = count__44089_44407;
var G__44417 = (i__44090_44408 + (1));
seq__44087_44405 = G__44414;
chunk__44088_44406 = G__44415;
count__44089_44407 = G__44416;
i__44090_44408 = G__44417;
continue;
} else {
var temp__5735__auto___44418 = cljs.core.seq(seq__44087_44405);
if(temp__5735__auto___44418){
var seq__44087_44419__$1 = temp__5735__auto___44418;
if(cljs.core.chunked_seq_QMARK_(seq__44087_44419__$1)){
var c__4556__auto___44420 = cljs.core.chunk_first(seq__44087_44419__$1);
var G__44421 = cljs.core.chunk_rest(seq__44087_44419__$1);
var G__44422 = c__4556__auto___44420;
var G__44423 = cljs.core.count(c__4556__auto___44420);
var G__44424 = (0);
seq__44087_44405 = G__44421;
chunk__44088_44406 = G__44422;
count__44089_44407 = G__44423;
i__44090_44408 = G__44424;
continue;
} else {
var k_44426 = cljs.core.first(seq__44087_44419__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_44426,((function (seq__44087_44405,chunk__44088_44406,count__44089_44407,i__44090_44408,k_44426,seq__44087_44419__$1,temp__5735__auto___44418){
return (function (db,p__44103){
var vec__44104 = p__44103;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44104,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44104,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44104,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_44426,id], null),f);
});})(seq__44087_44405,chunk__44088_44406,count__44089_44407,i__44090_44408,k_44426,seq__44087_44419__$1,temp__5735__auto___44418))
);


var G__44430 = cljs.core.next(seq__44087_44419__$1);
var G__44431 = null;
var G__44432 = (0);
var G__44433 = (0);
seq__44087_44405 = G__44430;
chunk__44088_44406 = G__44431;
count__44089_44407 = G__44432;
i__44090_44408 = G__44433;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),(function (db,p__44107){
var vec__44108 = p__44107;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44108,(0),null);
var qt_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44108,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),clojure.string.replace(qt_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),(function (db,p__44111){
var vec__44112 = p__44111;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44112,(0),null);
var attribution_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44112,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),clojure.string.replace(attribution_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),(function (db,p__44115){
var vec__44116 = p__44115;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44116,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44116,(1),null);
var G__44119 = snapshot;
switch (G__44119) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44119)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cycle-shortcut","cycle-shortcut",-1617058214),(function (db,p__44120){
var vec__44121 = p__44120;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44121,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44121,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44121,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword("navigation","active-home","navigation/active-home",1949576148).cljs$core$IFn$_invoke$arity$1(db)),"-risk/shortcut"].join(''));
var shortcut_value = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
if((shortcut_value < (4))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(shortcut_value + (1)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(1));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tree-table","tree-table",-1263002012),(function (db,p__44124){
var vec__44125 = p__44124;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44125,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44125,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44125,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword("navigation","active-home","navigation/active-home",1949576148).cljs$core$IFn$_invoke$arity$1(db)),"-risk/display-style"].join(''));
var G__44128 = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
switch (G__44128) {
case "Tree":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Table");

break;
case "Table":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Tree");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44128)].join('')));

}
}));
jasminegui.mount.http_get_dispatch = (function jasminegui$mount$http_get_dispatch(request){
var c__41764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41765__auto__ = (function (){var switch__41719__auto__ = (function (state_44157){
var state_val_44158 = (state_44157[(1)]);
if((state_val_44158 === (1))){
var inst_44129 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_44130 = cljs_http.client.get(inst_44129);
var state_44157__$1 = state_44157;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44157__$1,(2),inst_44130);
} else {
if((state_val_44158 === (2))){
var inst_44132 = (state_44157[(2)]);
var inst_44133 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_44134 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_44157__$1 = (function (){var statearr_44159 = state_44157;
(statearr_44159[(7)] = inst_44133);

(statearr_44159[(8)] = inst_44132);

return statearr_44159;
})();
if(cljs.core.truth_(inst_44134)){
var statearr_44160_44561 = state_44157__$1;
(statearr_44160_44561[(1)] = (3));

} else {
var statearr_44161_44562 = state_44157__$1;
(statearr_44161_44562[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44158 === (3))){
var inst_44132 = (state_44157[(8)]);
var inst_44136 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_44132);
var inst_44137 = JSON.parse(inst_44136);
var inst_44138 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_44137,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_44157__$1 = state_44157;
var statearr_44162_44568 = state_44157__$1;
(statearr_44162_44568[(2)] = inst_44138);

(statearr_44162_44568[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44158 === (4))){
var inst_44132 = (state_44157[(8)]);
var inst_44140 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_44132);
var state_44157__$1 = state_44157;
var statearr_44163_44569 = state_44157__$1;
(statearr_44163_44569[(2)] = inst_44140);

(statearr_44163_44569[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44158 === (5))){
var inst_44133 = (state_44157[(7)]);
var inst_44142 = (state_44157[(2)]);
var inst_44143 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_44133,inst_44142);
var inst_44144 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_44143) : re_frame.core.dispatch.call(null,inst_44143));
var inst_44145 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_44157__$1 = (function (){var statearr_44164 = state_44157;
(statearr_44164[(9)] = inst_44144);

return statearr_44164;
})();
if(cljs.core.truth_(inst_44145)){
var statearr_44165_44577 = state_44157__$1;
(statearr_44165_44577[(1)] = (6));

} else {
var statearr_44166_44579 = state_44157__$1;
(statearr_44166_44579[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44158 === (6))){
var inst_44147 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44148 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_44149 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_44150 = [inst_44148,inst_44149];
var inst_44151 = (new cljs.core.PersistentVector(null,2,(5),inst_44147,inst_44150,null));
var inst_44152 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_44151) : re_frame.core.dispatch.call(null,inst_44151));
var state_44157__$1 = state_44157;
var statearr_44167_44600 = state_44157__$1;
(statearr_44167_44600[(2)] = inst_44152);

(statearr_44167_44600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44158 === (7))){
var state_44157__$1 = state_44157;
var statearr_44168_44607 = state_44157__$1;
(statearr_44168_44607[(2)] = null);

(statearr_44168_44607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44158 === (8))){
var inst_44155 = (state_44157[(2)]);
var state_44157__$1 = state_44157;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44157__$1,inst_44155);
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
var statearr_44169 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44169[(0)] = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__);

(statearr_44169[(1)] = (1));

return statearr_44169;
});
var jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1 = (function (state_44157){
while(true){
var ret_value__41721__auto__ = (function (){try{while(true){
var result__41722__auto__ = switch__41719__auto__(state_44157);
if(cljs.core.keyword_identical_QMARK_(result__41722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41722__auto__;
}
break;
}
}catch (e44170){if((e44170 instanceof Object)){
var ex__41723__auto__ = e44170;
var statearr_44171_44629 = state_44157;
(statearr_44171_44629[(5)] = ex__41723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44170;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44639 = state_44157;
state_44157 = G__44639;
continue;
} else {
return ret_value__41721__auto__;
}
break;
}
});
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__ = function(state_44157){
switch(arguments.length){
case 0:
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____0.call(this);
case 1:
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1.call(this,state_44157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____0;
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1;
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__;
})()
})();
var state__41766__auto__ = (function (){var statearr_44172 = (f__41765__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41765__auto__.cljs$core$IFn$_invoke$arity$0() : f__41765__auto__.call(null));
(statearr_44172[(6)] = c__41764__auto__);

return statearr_44172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41766__auto__);
}));

return c__41764__auto__;
});
var G__44173_44645 = new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518);
var G__44174_44646 = jasminegui.mount.http_get_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__44173_44645,G__44174_44646) : re_frame.core.reg_fx.call(null,G__44173_44645,G__44174_44646));
jasminegui.mount.http_post_dispatch = (function jasminegui$mount$http_post_dispatch(request){
var c__41764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41765__auto__ = (function (){var switch__41719__auto__ = (function (state_44207){
var state_val_44208 = (state_44207[(1)]);
if((state_val_44208 === (1))){
var inst_44175 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_44176 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_44177 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
var inst_44178 = [inst_44177];
var inst_44179 = cljs.core.PersistentHashMap.fromArrays(inst_44176,inst_44178);
var inst_44180 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_44175,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_44179], 0));
var state_44207__$1 = state_44207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44207__$1,(2),inst_44180);
} else {
if((state_val_44208 === (2))){
var inst_44182 = (state_44207[(2)]);
var inst_44183 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_44184 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_44207__$1 = (function (){var statearr_44209 = state_44207;
(statearr_44209[(7)] = inst_44183);

(statearr_44209[(8)] = inst_44182);

return statearr_44209;
})();
if(cljs.core.truth_(inst_44184)){
var statearr_44210_44663 = state_44207__$1;
(statearr_44210_44663[(1)] = (3));

} else {
var statearr_44211_44664 = state_44207__$1;
(statearr_44211_44664[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44208 === (3))){
var inst_44182 = (state_44207[(8)]);
var inst_44186 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_44182);
var inst_44187 = JSON.parse(inst_44186);
var inst_44188 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_44187,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_44207__$1 = state_44207;
var statearr_44212_44765 = state_44207__$1;
(statearr_44212_44765[(2)] = inst_44188);

(statearr_44212_44765[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44208 === (4))){
var inst_44182 = (state_44207[(8)]);
var inst_44190 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_44182);
var state_44207__$1 = state_44207;
var statearr_44213_44767 = state_44207__$1;
(statearr_44213_44767[(2)] = inst_44190);

(statearr_44213_44767[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44208 === (5))){
var inst_44183 = (state_44207[(7)]);
var inst_44192 = (state_44207[(2)]);
var inst_44193 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_44183,inst_44192);
var inst_44194 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_44193) : re_frame.core.dispatch.call(null,inst_44193));
var inst_44195 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_44207__$1 = (function (){var statearr_44214 = state_44207;
(statearr_44214[(9)] = inst_44194);

return statearr_44214;
})();
if(cljs.core.truth_(inst_44195)){
var statearr_44215_44795 = state_44207__$1;
(statearr_44215_44795[(1)] = (6));

} else {
var statearr_44216_44798 = state_44207__$1;
(statearr_44216_44798[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44208 === (6))){
var inst_44197 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44198 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_44199 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_44200 = [inst_44198,inst_44199];
var inst_44201 = (new cljs.core.PersistentVector(null,2,(5),inst_44197,inst_44200,null));
var inst_44202 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_44201) : re_frame.core.dispatch.call(null,inst_44201));
var state_44207__$1 = state_44207;
var statearr_44217_44805 = state_44207__$1;
(statearr_44217_44805[(2)] = inst_44202);

(statearr_44217_44805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44208 === (7))){
var state_44207__$1 = state_44207;
var statearr_44218_44809 = state_44207__$1;
(statearr_44218_44809[(2)] = null);

(statearr_44218_44809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44208 === (8))){
var inst_44205 = (state_44207[(2)]);
var state_44207__$1 = state_44207;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44207__$1,inst_44205);
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
var statearr_44219 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44219[(0)] = jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__);

(statearr_44219[(1)] = (1));

return statearr_44219;
});
var jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____1 = (function (state_44207){
while(true){
var ret_value__41721__auto__ = (function (){try{while(true){
var result__41722__auto__ = switch__41719__auto__(state_44207);
if(cljs.core.keyword_identical_QMARK_(result__41722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41722__auto__;
}
break;
}
}catch (e44220){if((e44220 instanceof Object)){
var ex__41723__auto__ = e44220;
var statearr_44221_44852 = state_44207;
(statearr_44221_44852[(5)] = ex__41723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44220;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44853 = state_44207;
state_44207 = G__44853;
continue;
} else {
return ret_value__41721__auto__;
}
break;
}
});
jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__ = function(state_44207){
switch(arguments.length){
case 0:
return jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____0.call(this);
case 1:
return jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____1.call(this,state_44207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____0;
jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____1;
return jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__;
})()
})();
var state__41766__auto__ = (function (){var statearr_44222 = (f__41765__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41765__auto__.cljs$core$IFn$_invoke$arity$0() : f__41765__auto__.call(null));
(statearr_44222[(6)] = c__41764__auto__);

return statearr_44222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41766__auto__);
}));

return c__41764__auto__;
});
var G__44223_44854 = new cljs.core.Keyword(null,"http-post-dispatch","http-post-dispatch",2138865017);
var G__44224_44855 = jasminegui.mount.http_post_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__44223_44854,G__44224_44855) : re_frame.core.reg_fx.call(null,G__44223_44854,G__44224_44855));
jasminegui.mount.simple_http_get_events = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-positions","get-positions",1610972586),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"positions",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"positions","positions",-1380538434)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-rating-to-score","get-rating-to-score",391912155),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"rating-to-score",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"portfolios",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-pivoted-positions","get-pivoted-positions",2145025131),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"pivoted-positions",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-total-positions","get-total-positions",-698807167),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"total-positions",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-qt-date","get-qt-date",-1072332881),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"qt-date",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-var-proxies","get-var-proxies",1252506215),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"var-proxies",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-var-dates","get-var-dates",-1039695287),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"var-dates",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword("var","dates","var/dates",-1599746364)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-betas","get-betas",-284291273),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"beta-table",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword("betas","table","betas/table",-390525241)], null)], null);
var seq__44225_44857 = cljs.core.seq(jasminegui.mount.simple_http_get_events);
var chunk__44226_44858 = null;
var count__44227_44859 = (0);
var i__44228_44860 = (0);
while(true){
if((i__44228_44860 < count__44227_44859)){
var line_44861 = chunk__44226_44858.cljs$core$IIndexed$_nth$arity$2(null,i__44228_44860);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-key","get-key",1436017019).cljs$core$IFn$_invoke$arity$1(line_44861),((function (seq__44225_44857,chunk__44226_44858,count__44227_44859,i__44228_44860,line_44861){
return (function (p__44243,p__44244){
var map__44245 = p__44243;
var map__44245__$1 = (((((!((map__44245 == null))))?(((((map__44245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44245):map__44245);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44245__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44246 = p__44244;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44246,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url-tail","url-tail",144006528).cljs$core$IFn$_invoke$arity$1(line_44861))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dis-key","dis-key",842897221).cljs$core$IFn$_invoke$arity$1(line_44861)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
});})(seq__44225_44857,chunk__44226_44858,count__44227_44859,i__44228_44860,line_44861))
);


var G__44863 = seq__44225_44857;
var G__44864 = chunk__44226_44858;
var G__44865 = count__44227_44859;
var G__44866 = (i__44228_44860 + (1));
seq__44225_44857 = G__44863;
chunk__44226_44858 = G__44864;
count__44227_44859 = G__44865;
i__44228_44860 = G__44866;
continue;
} else {
var temp__5735__auto___44867 = cljs.core.seq(seq__44225_44857);
if(temp__5735__auto___44867){
var seq__44225_44868__$1 = temp__5735__auto___44867;
if(cljs.core.chunked_seq_QMARK_(seq__44225_44868__$1)){
var c__4556__auto___44869 = cljs.core.chunk_first(seq__44225_44868__$1);
var G__44870 = cljs.core.chunk_rest(seq__44225_44868__$1);
var G__44871 = c__4556__auto___44869;
var G__44872 = cljs.core.count(c__4556__auto___44869);
var G__44873 = (0);
seq__44225_44857 = G__44870;
chunk__44226_44858 = G__44871;
count__44227_44859 = G__44872;
i__44228_44860 = G__44873;
continue;
} else {
var line_44874 = cljs.core.first(seq__44225_44868__$1);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-key","get-key",1436017019).cljs$core$IFn$_invoke$arity$1(line_44874),((function (seq__44225_44857,chunk__44226_44858,count__44227_44859,i__44228_44860,line_44874,seq__44225_44868__$1,temp__5735__auto___44867){
return (function (p__44250,p__44251){
var map__44252 = p__44250;
var map__44252__$1 = (((((!((map__44252 == null))))?(((((map__44252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44252):map__44252);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44252__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44253 = p__44251;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44253,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url-tail","url-tail",144006528).cljs$core$IFn$_invoke$arity$1(line_44874))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dis-key","dis-key",842897221).cljs$core$IFn$_invoke$arity$1(line_44874)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
});})(seq__44225_44857,chunk__44226_44858,count__44227_44859,i__44228_44860,line_44874,seq__44225_44868__$1,temp__5735__auto___44867))
);


var G__44896 = cljs.core.next(seq__44225_44868__$1);
var G__44897 = null;
var G__44898 = (0);
var G__44899 = (0);
seq__44225_44857 = G__44896;
chunk__44226_44858 = G__44897;
count__44227_44859 = G__44898;
i__44228_44860 = G__44899;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions-new","get-positions-new",1597842964),(function (p__44257,p__44258){
var map__44259 = p__44257;
var map__44259__$1 = (((((!((map__44259 == null))))?(((((map__44259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44259):map__44259);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44259__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44260 = p__44258;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44260,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44260,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"positions-new?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-new","positions-new",1631706550),portfolio], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-data","get-var-data",837806576),(function (p__44264,p__44265){
var map__44266 = p__44264;
var map__44266__$1 = (((((!((map__44266 == null))))?(((((map__44266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44266):map__44266);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44266__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44267 = p__44265;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44267,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44267,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"var-data?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-var","get-portfolio-var",1001711662),(function (p__44271,p__44272){
var map__44273 = p__44271;
var map__44273__$1 = (((((!((map__44273 == null))))?(((((map__44273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44273):map__44273);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44273__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44274 = p__44272;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44274,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44274,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),portfolio),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"var-data?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-attribution-date","get-attribution-date",-1329272944),(function (p__44278,p__44279){
var map__44280 = p__44278;
var map__44280__$1 = (((((!((map__44280 == null))))?(((((map__44280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44280):map__44280);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44280__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44281 = p__44279;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44281,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=attribution-date"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),false], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-single-attribution","get-single-attribution",-1620108505),(function (p__44285,p__44286){
var map__44287 = p__44285;
var map__44287__$1 = (((((!((map__44287 == null))))?(((((map__44287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44287):map__44287);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44287__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44288 = p__44286;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44288,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44288,(1),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44288,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-single-attribution-portfolio","change-single-attribution-portfolio",1766745939),(function (p__44292,p__44293){
var map__44294 = p__44292;
var map__44294__$1 = (((((!((map__44294 == null))))?(((((map__44294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44294):map__44294);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44294__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44295 = p__44293;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44295,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44295,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),portfolio),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450).cljs$core$IFn$_invoke$arity$1(db))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-single-attribution-period","change-single-attribution-period",860703642),(function (p__44299,p__44300){
var map__44301 = p__44299;
var map__44301__$1 = (((((!((map__44301 == null))))?(((((map__44301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44301):map__44301);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44301__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44302 = p__44300;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44302,(0),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44302,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),period),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521).cljs$core$IFn$_invoke$arity$1(db)),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-multiple-attribution","get-multiple-attribution",1245740943),(function (p__44306,p__44307){
var map__44308 = p__44306;
var map__44308__$1 = (((((!((map__44308 == null))))?(((((map__44308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44308):map__44308);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44308__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44309 = p__44307;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44309,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44309,(1),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44309,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=multiple-portfolio&target=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-multiple-attribution-target","change-multiple-attribution-target",777460289),(function (p__44313,p__44314){
var map__44315 = p__44313;
var map__44315__$1 = (((((!((map__44315 == null))))?(((((map__44315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44315):map__44315);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44315__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44316 = p__44314;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44316,(0),null);
var ktarget = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44316,(1),null);
var target = clojure.string.replace(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ktarget,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)),"-"," ");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),ktarget),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=multiple-portfolio&target=",target,"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154).cljs$core$IFn$_invoke$arity$1(db))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-multiple-attribution-period","change-multiple-attribution-period",590435537),(function (p__44320,p__44321){
var map__44322 = p__44320;
var map__44322__$1 = (((((!((map__44322 == null))))?(((((map__44322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44322):map__44322);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44322__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44323 = p__44321;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44323,(0),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44323,(1),null);
var target = clojure.string.replace(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)),"-"," ");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),period),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=multiple-portfolio&target=",target,"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-attribution-summary","get-attribution-summary",-27760654),(function (p__44327,p__44328){
var map__44329 = p__44327;
var map__44329__$1 = (((((!((map__44329 == null))))?(((((map__44329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44329):map__44329);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44329__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44330 = p__44328;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44330,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=summary"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("attribution","summary","attribution/summary",687462095)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));

//# sourceMappingURL=jasminegui.mount.js.map
