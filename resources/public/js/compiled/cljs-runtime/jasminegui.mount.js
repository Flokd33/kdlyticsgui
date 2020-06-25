goog.provide('jasminegui.mount');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('jasminegui.static$');
goog.require('re_frame.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('jasminegui.tables');
jasminegui.mount.default_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword("portfolio-review","alpha-chart-data","portfolio-review/alpha-chart-data",-243291168),new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679),new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705),new cljs.core.Keyword("multiple-portfolio-attribution","field-two","multiple-portfolio-attribution/field-two",-311759422),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword("multiple-portfolio-attribution","field-number","multiple-portfolio-attribution/field-number",-1780989148),new cljs.core.Keyword("navigation","success-modal","navigation/success-modal",533446693),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("single-bond-trade-history","bond","single-bond-trade-history/bond",2015871973),new cljs.core.Keyword("trade-history","active-bond","trade-history/active-bond",-1419462650),new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-bond-trade-history","show-flat-modal","single-bond-trade-history/show-flat-modal",1072491400),new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047),new cljs.core.Keyword("portfolio-review","marginal-beta-chart-data","portfolio-review/marginal-beta-chart-data",40550601),new cljs.core.Keyword("multiple-portfolio-attribution","display-style","multiple-portfolio-attribution/display-style",-767260119),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("var","result","var/result",1415073996),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738),new cljs.core.Keyword("attribution","summary","attribution/summary",687462095),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("navigation","active-view","navigation/active-view",800211184),new cljs.core.Keyword("var","history","var/history",-246458543),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("navigation","active-attribution","navigation/active-attribution",600082450),new cljs.core.Keyword("portfolio-review","summary-data","portfolio-review/summary-data",-1362975725),new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181),new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219),new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("portfolio-review","jensen-chart-data","portfolio-review/jensen-chart-data",-701618636),new cljs.core.Keyword("multiple-portfolio-attribution","shortcut","multiple-portfolio-attribution/shortcut",809107380),new cljs.core.Keyword("navigation","active-home","navigation/active-home",1949576148),new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("single-portfolio-attribution","table-filter","single-portfolio-attribution/table-filter",1757441687),new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("navigation","active-var","navigation/active-var",39797785),new cljs.core.Keyword("single-bond-trade-history","show-modal","single-bond-trade-history/show-modal",-1585088359),new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127),new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334),new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("portfolio-review","contribution-chart-data","portfolio-review/contribution-chart-data",-581811845),new cljs.core.Keyword("portfolio-review","active-tab","portfolio-review/active-tab",1429822843),new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),new cljs.core.Keyword("single-portfolio-attribution","shortcut","single-portfolio-attribution/shortcut",-1711481988),new cljs.core.Keyword("trade-history","history","trade-history/history",1084885309),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),new cljs.core.Keyword("multiple-portfolio-attribution","table-filter","multiple-portfolio-attribution/table-filter",-9483585)],[(1),null,"OGEMCORD","Tree",cljs.core.PersistentVector.EMPTY,"None",null,null,"One",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show","show",-576705889),false,new cljs.core.Keyword(null,"on-close","on-close",-761178394),null,new cljs.core.Keyword(null,"response","response",-1068424192),null], null),"Table",null,null,true,"undefined",new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),true,true,false,cljs.core.PersistentVector.EMPTY,null,"Tree",cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),"undefined",cljs.core.PersistentVector.EMPTY,null,cljs.core.set(null),new cljs.core.Keyword(null,"quarter","quarter",-508147616),"Tree",null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"home","home",-74557309),null,(1),new cljs.core.Keyword(null,"summary","summary",380847952),null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),"OGEMCORD",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),null,(1),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"daily-3y","daily-3y",-2143971824),"ytd","None",cljs.core.PersistentVector.EMPTY,(1),"One","Tree",new cljs.core.Keyword(null,"overview","overview",-435037267),false,"OGEMCORD",cljs.core.set(null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),new cljs.core.Keyword(null,"total-effect","total-effect",-967715775),cljs.core.PersistentArrayMap.EMPTY,null,new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.PersistentVector.EMPTY,(1),null,"OGEMCORD",new cljs.core.Keyword(null,"cembi","cembi",1924920241),"ytd",cljs.core.PersistentVector.EMPTY,true,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),cljs.core.PersistentVector.EMPTY]);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jasminegui.mount","initialize-db","jasminegui.mount/initialize-db",-1621527627),(function (_,___$1){
return jasminegui.mount.default_db;
}));
var seq__62954_63272 = cljs.core.seq(cljs.core.keys(jasminegui.mount.default_db));
var chunk__62955_63273 = null;
var count__62956_63274 = (0);
var i__62957_63275 = (0);
while(true){
if((i__62957_63275 < count__62956_63274)){
var k_63277 = chunk__62955_63273.cljs$core$IIndexed$_nth$arity$2(null,i__62957_63275);
var G__62972_63279 = k_63277;
var G__62973_63280 = ((function (seq__62954_63272,chunk__62955_63273,count__62956_63274,i__62957_63275,G__62972_63279,k_63277){
return (function (db){
return (k_63277.cljs$core$IFn$_invoke$arity$1 ? k_63277.cljs$core$IFn$_invoke$arity$1(db) : k_63277.call(null,db));
});})(seq__62954_63272,chunk__62955_63273,count__62956_63274,i__62957_63275,G__62972_63279,k_63277))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__62972_63279,G__62973_63280) : re_frame.core.reg_sub.call(null,G__62972_63279,G__62973_63280));


var G__63290 = seq__62954_63272;
var G__63291 = chunk__62955_63273;
var G__63292 = count__62956_63274;
var G__63293 = (i__62957_63275 + (1));
seq__62954_63272 = G__63290;
chunk__62955_63273 = G__63291;
count__62956_63274 = G__63292;
i__62957_63275 = G__63293;
continue;
} else {
var temp__5735__auto___63300 = cljs.core.seq(seq__62954_63272);
if(temp__5735__auto___63300){
var seq__62954_63301__$1 = temp__5735__auto___63300;
if(cljs.core.chunked_seq_QMARK_(seq__62954_63301__$1)){
var c__4556__auto___63302 = cljs.core.chunk_first(seq__62954_63301__$1);
var G__63303 = cljs.core.chunk_rest(seq__62954_63301__$1);
var G__63304 = c__4556__auto___63302;
var G__63305 = cljs.core.count(c__4556__auto___63302);
var G__63306 = (0);
seq__62954_63272 = G__63303;
chunk__62955_63273 = G__63304;
count__62956_63274 = G__63305;
i__62957_63275 = G__63306;
continue;
} else {
var k_63312 = cljs.core.first(seq__62954_63301__$1);
var G__62974_63313 = k_63312;
var G__62975_63314 = ((function (seq__62954_63272,chunk__62955_63273,count__62956_63274,i__62957_63275,G__62974_63313,k_63312,seq__62954_63301__$1,temp__5735__auto___63300){
return (function (db){
return (k_63312.cljs$core$IFn$_invoke$arity$1 ? k_63312.cljs$core$IFn$_invoke$arity$1(db) : k_63312.call(null,db));
});})(seq__62954_63272,chunk__62955_63273,count__62956_63274,i__62957_63275,G__62974_63313,k_63312,seq__62954_63301__$1,temp__5735__auto___63300))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__62974_63313,G__62975_63314) : re_frame.core.reg_sub.call(null,G__62974_63313,G__62975_63314));


var G__63315 = cljs.core.next(seq__62954_63301__$1);
var G__63316 = null;
var G__63317 = (0);
var G__63318 = (0);
seq__62954_63272 = G__63315;
chunk__62955_63273 = G__63316;
count__62956_63274 = G__63317;
i__62957_63275 = G__63318;
continue;
}
} else {
}
}
break;
}
var seq__62980_63324 = cljs.core.seq(cljs.core.PersistentVector.fromArray([new cljs.core.Keyword("navigation","active-view","navigation/active-view",800211184),new cljs.core.Keyword("navigation","active-home","navigation/active-home",1949576148),new cljs.core.Keyword("navigation","active-var","navigation/active-var",39797785),new cljs.core.Keyword("navigation","active-attribution","navigation/active-attribution",600082450),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738),new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334),new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679),new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),new cljs.core.Keyword("single-portfolio-attribution","table-filter","single-portfolio-attribution/table-filter",1757441687),new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047),new cljs.core.Keyword("multiple-portfolio-attribution","display-style","multiple-portfolio-attribution/display-style",-767260119),new cljs.core.Keyword("multiple-portfolio-attribution","field-number","multiple-portfolio-attribution/field-number",-1780989148),new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),new cljs.core.Keyword("multiple-portfolio-attribution","field-two","multiple-portfolio-attribution/field-two",-311759422),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),new cljs.core.Keyword("multiple-portfolio-attribution","hide-zero-holdings","multiple-portfolio-attribution/hide-zero-holdings",1677138723),new cljs.core.Keyword("multiple-portfolio-attribution","shortcut","multiple-portfolio-attribution/shortcut",809107380),new cljs.core.Keyword("multiple-portfolio-attribution","table-filter","multiple-portfolio-attribution/table-filter",-9483585),new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705),new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),new cljs.core.Keyword("attribution","summary","attribution/summary",687462095),new cljs.core.Keyword("single-bond-trade-history","show-flat-modal","single-bond-trade-history/show-flat-modal",1072491400),new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181),new cljs.core.Keyword("single-bond-trade-history","show-modal","single-bond-trade-history/show-modal",-1585088359),new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127),new cljs.core.Keyword("single-bond-trade-history","bond","single-bond-trade-history/bond",2015871973),new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865),new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321),new cljs.core.Keyword("portfolio-review","active-tab","portfolio-review/active-tab",1429822843),new cljs.core.Keyword("portfolio-review","summary-data","portfolio-review/summary-data",-1362975725),new cljs.core.Keyword("portfolio-review","contribution-chart-data","portfolio-review/contribution-chart-data",-581811845),new cljs.core.Keyword("portfolio-review","alpha-chart-data","portfolio-review/alpha-chart-data",-243291168),new cljs.core.Keyword("portfolio-review","jensen-chart-data","portfolio-review/jensen-chart-data",-701618636),new cljs.core.Keyword("portfolio-review","marginal-beta-chart-data","portfolio-review/marginal-beta-chart-data",40550601)], true));
var chunk__62981_63325 = null;
var count__62982_63326 = (0);
var i__62983_63327 = (0);
while(true){
if((i__62983_63327 < count__62982_63326)){
var k_63424 = chunk__62981_63325.cljs$core$IIndexed$_nth$arity$2(null,i__62983_63327);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_63424,((function (seq__62980_63324,chunk__62981_63325,count__62982_63326,i__62983_63327,k_63424){
return (function (db,p__62993){
var vec__62994 = p__62993;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62994,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62994,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_63424,data);
});})(seq__62980_63324,chunk__62981_63325,count__62982_63326,i__62983_63327,k_63424))
);


var G__63431 = seq__62980_63324;
var G__63432 = chunk__62981_63325;
var G__63433 = count__62982_63326;
var G__63434 = (i__62983_63327 + (1));
seq__62980_63324 = G__63431;
chunk__62981_63325 = G__63432;
count__62982_63326 = G__63433;
i__62983_63327 = G__63434;
continue;
} else {
var temp__5735__auto___63437 = cljs.core.seq(seq__62980_63324);
if(temp__5735__auto___63437){
var seq__62980_63438__$1 = temp__5735__auto___63437;
if(cljs.core.chunked_seq_QMARK_(seq__62980_63438__$1)){
var c__4556__auto___63439 = cljs.core.chunk_first(seq__62980_63438__$1);
var G__63440 = cljs.core.chunk_rest(seq__62980_63438__$1);
var G__63441 = c__4556__auto___63439;
var G__63442 = cljs.core.count(c__4556__auto___63439);
var G__63443 = (0);
seq__62980_63324 = G__63440;
chunk__62981_63325 = G__63441;
count__62982_63326 = G__63442;
i__62983_63327 = G__63443;
continue;
} else {
var k_63445 = cljs.core.first(seq__62980_63438__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_63445,((function (seq__62980_63324,chunk__62981_63325,count__62982_63326,i__62983_63327,k_63445,seq__62980_63438__$1,temp__5735__auto___63437){
return (function (db,p__62997){
var vec__62998 = p__62997;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62998,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62998,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_63445,data);
});})(seq__62980_63324,chunk__62981_63325,count__62982_63326,i__62983_63327,k_63445,seq__62980_63438__$1,temp__5735__auto___63437))
);


var G__63450 = cljs.core.next(seq__62980_63438__$1);
var G__63451 = null;
var G__63452 = (0);
var G__63453 = (0);
seq__62980_63324 = G__63450;
chunk__62981_63325 = G__63451;
count__62982_63326 = G__63452;
i__62983_63327 = G__63453;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"positions","positions",-1380538434),(function (db,p__63001){
var vec__63002 = p__63001;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63002,(0),null);
var positions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63002,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"positions","positions",-1380538434),positions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),(function (db,p__63005){
var vec__63006 = p__63005;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63006,(0),null);
var portfolios = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63006,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),portfolios,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),cljs.core.set(portfolios),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),cljs.core.set(portfolios)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),(function (db,p__63010){
var vec__63011 = p__63010;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63011,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63011,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63011,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),(function (db,p__63014){
var vec__63015 = p__63014;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63015,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63015,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63015,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),(function (db,p__63018){
var vec__63019 = p__63018;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63019,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63019,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63019,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),(function (db,p__63022){
var vec__63023 = p__63022;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63023,(0),null);
var qt_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63023,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),clojure.string.replace(qt_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),(function (db,p__63026){
var vec__63027 = p__63026;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63027,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63027,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63027,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219),(function (db,p__63030){
var vec__63031 = p__63030;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63031,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63031,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63031,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),(function (db,p__63034){
var vec__63035 = p__63034;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63035,(0),null);
var attribution_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63035,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),clojure.string.replace(attribution_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),(function (db,p__63038){
var vec__63039 = p__63038;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63039,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63039,(1),null);
var G__63042 = snapshot;
switch (G__63042) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63042)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cycle-shortcut","cycle-shortcut",-1617058214),(function (db,p__63043){
var vec__63044 = p__63043;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63044,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63044,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63044,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword("navigation","active-home","navigation/active-home",1949576148).cljs$core$IFn$_invoke$arity$1(db)),"-risk/shortcut"].join(''));
var shortcut_value = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
if((shortcut_value < (4))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(shortcut_value + (1)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(1));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tree-table","tree-table",-1263002012),(function (db,p__63047){
var vec__63048 = p__63047;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63048,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63048,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63048,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword("navigation","active-home","navigation/active-home",1949576148).cljs$core$IFn$_invoke$arity$1(db)),"-risk/display-style"].join(''));
var G__63051 = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
switch (G__63051) {
case "Tree":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Table");

break;
case "Table":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Tree");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63051)].join('')));

}
}));
jasminegui.mount.http_get_dispatch = (function jasminegui$mount$http_get_dispatch(request){
var c__41764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41765__auto__ = (function (){var switch__41719__auto__ = (function (state_63080){
var state_val_63081 = (state_63080[(1)]);
if((state_val_63081 === (1))){
var inst_63052 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_63053 = cljs_http.client.get(inst_63052);
var state_63080__$1 = state_63080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63080__$1,(2),inst_63053);
} else {
if((state_val_63081 === (2))){
var inst_63055 = (state_63080[(2)]);
var inst_63056 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_63057 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_63080__$1 = (function (){var statearr_63082 = state_63080;
(statearr_63082[(7)] = inst_63055);

(statearr_63082[(8)] = inst_63056);

return statearr_63082;
})();
if(cljs.core.truth_(inst_63057)){
var statearr_63083_63566 = state_63080__$1;
(statearr_63083_63566[(1)] = (3));

} else {
var statearr_63084_63572 = state_63080__$1;
(statearr_63084_63572[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63081 === (3))){
var inst_63055 = (state_63080[(7)]);
var inst_63059 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_63055);
var inst_63060 = JSON.parse(inst_63059);
var inst_63061 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_63060,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_63080__$1 = state_63080;
var statearr_63085_63578 = state_63080__$1;
(statearr_63085_63578[(2)] = inst_63061);

(statearr_63085_63578[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63081 === (4))){
var inst_63055 = (state_63080[(7)]);
var inst_63063 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_63055);
var state_63080__$1 = state_63080;
var statearr_63086_63579 = state_63080__$1;
(statearr_63086_63579[(2)] = inst_63063);

(statearr_63086_63579[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63081 === (5))){
var inst_63056 = (state_63080[(8)]);
var inst_63065 = (state_63080[(2)]);
var inst_63066 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_63056,inst_63065);
var inst_63067 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_63066) : re_frame.core.dispatch.call(null,inst_63066));
var inst_63068 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_63080__$1 = (function (){var statearr_63087 = state_63080;
(statearr_63087[(9)] = inst_63067);

return statearr_63087;
})();
if(cljs.core.truth_(inst_63068)){
var statearr_63088_63585 = state_63080__$1;
(statearr_63088_63585[(1)] = (6));

} else {
var statearr_63089_63588 = state_63080__$1;
(statearr_63089_63588[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63081 === (6))){
var inst_63070 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63071 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_63072 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_63073 = [inst_63071,inst_63072];
var inst_63074 = (new cljs.core.PersistentVector(null,2,(5),inst_63070,inst_63073,null));
var inst_63075 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_63074) : re_frame.core.dispatch.call(null,inst_63074));
var state_63080__$1 = state_63080;
var statearr_63090_63596 = state_63080__$1;
(statearr_63090_63596[(2)] = inst_63075);

(statearr_63090_63596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63081 === (7))){
var state_63080__$1 = state_63080;
var statearr_63091_63599 = state_63080__$1;
(statearr_63091_63599[(2)] = null);

(statearr_63091_63599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63081 === (8))){
var inst_63078 = (state_63080[(2)]);
var state_63080__$1 = state_63080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63080__$1,inst_63078);
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
var statearr_63092 = [null,null,null,null,null,null,null,null,null,null];
(statearr_63092[(0)] = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__);

(statearr_63092[(1)] = (1));

return statearr_63092;
});
var jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1 = (function (state_63080){
while(true){
var ret_value__41721__auto__ = (function (){try{while(true){
var result__41722__auto__ = switch__41719__auto__(state_63080);
if(cljs.core.keyword_identical_QMARK_(result__41722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41722__auto__;
}
break;
}
}catch (e63093){if((e63093 instanceof Object)){
var ex__41723__auto__ = e63093;
var statearr_63094_63617 = state_63080;
(statearr_63094_63617[(5)] = ex__41723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_63080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63093;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63622 = state_63080;
state_63080 = G__63622;
continue;
} else {
return ret_value__41721__auto__;
}
break;
}
});
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__ = function(state_63080){
switch(arguments.length){
case 0:
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____0.call(this);
case 1:
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1.call(this,state_63080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____0;
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1;
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__;
})()
})();
var state__41766__auto__ = (function (){var statearr_63095 = (f__41765__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41765__auto__.cljs$core$IFn$_invoke$arity$0() : f__41765__auto__.call(null));
(statearr_63095[(6)] = c__41764__auto__);

return statearr_63095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41766__auto__);
}));

return c__41764__auto__;
});
var G__63096_63637 = new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518);
var G__63097_63638 = jasminegui.mount.http_get_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__63096_63637,G__63097_63638) : re_frame.core.reg_fx.call(null,G__63096_63637,G__63097_63638));
jasminegui.mount.http_post_dispatch = (function jasminegui$mount$http_post_dispatch(request){
var c__41764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41765__auto__ = (function (){var switch__41719__auto__ = (function (state_63130){
var state_val_63131 = (state_63130[(1)]);
if((state_val_63131 === (1))){
var inst_63098 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_63099 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_63100 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
var inst_63101 = [inst_63100];
var inst_63102 = cljs.core.PersistentHashMap.fromArrays(inst_63099,inst_63101);
var inst_63103 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_63098,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_63102], 0));
var state_63130__$1 = state_63130;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63130__$1,(2),inst_63103);
} else {
if((state_val_63131 === (2))){
var inst_63105 = (state_63130[(2)]);
var inst_63106 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_63107 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_63130__$1 = (function (){var statearr_63132 = state_63130;
(statearr_63132[(7)] = inst_63106);

(statearr_63132[(8)] = inst_63105);

return statearr_63132;
})();
if(cljs.core.truth_(inst_63107)){
var statearr_63133_63643 = state_63130__$1;
(statearr_63133_63643[(1)] = (3));

} else {
var statearr_63134_63644 = state_63130__$1;
(statearr_63134_63644[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63131 === (3))){
var inst_63105 = (state_63130[(8)]);
var inst_63109 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_63105);
var inst_63110 = JSON.parse(inst_63109);
var inst_63111 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_63110,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_63130__$1 = state_63130;
var statearr_63135_63647 = state_63130__$1;
(statearr_63135_63647[(2)] = inst_63111);

(statearr_63135_63647[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63131 === (4))){
var inst_63105 = (state_63130[(8)]);
var inst_63113 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_63105);
var state_63130__$1 = state_63130;
var statearr_63136_63650 = state_63130__$1;
(statearr_63136_63650[(2)] = inst_63113);

(statearr_63136_63650[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63131 === (5))){
var inst_63106 = (state_63130[(7)]);
var inst_63115 = (state_63130[(2)]);
var inst_63116 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_63106,inst_63115);
var inst_63117 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_63116) : re_frame.core.dispatch.call(null,inst_63116));
var inst_63118 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_63130__$1 = (function (){var statearr_63137 = state_63130;
(statearr_63137[(9)] = inst_63117);

return statearr_63137;
})();
if(cljs.core.truth_(inst_63118)){
var statearr_63138_63656 = state_63130__$1;
(statearr_63138_63656[(1)] = (6));

} else {
var statearr_63139_63657 = state_63130__$1;
(statearr_63139_63657[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63131 === (6))){
var inst_63120 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63121 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_63122 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_63123 = [inst_63121,inst_63122];
var inst_63124 = (new cljs.core.PersistentVector(null,2,(5),inst_63120,inst_63123,null));
var inst_63125 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_63124) : re_frame.core.dispatch.call(null,inst_63124));
var state_63130__$1 = state_63130;
var statearr_63140_63659 = state_63130__$1;
(statearr_63140_63659[(2)] = inst_63125);

(statearr_63140_63659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63131 === (7))){
var state_63130__$1 = state_63130;
var statearr_63141_63661 = state_63130__$1;
(statearr_63141_63661[(2)] = null);

(statearr_63141_63661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63131 === (8))){
var inst_63128 = (state_63130[(2)]);
var state_63130__$1 = state_63130;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63130__$1,inst_63128);
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
var statearr_63142 = [null,null,null,null,null,null,null,null,null,null];
(statearr_63142[(0)] = jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__);

(statearr_63142[(1)] = (1));

return statearr_63142;
});
var jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____1 = (function (state_63130){
while(true){
var ret_value__41721__auto__ = (function (){try{while(true){
var result__41722__auto__ = switch__41719__auto__(state_63130);
if(cljs.core.keyword_identical_QMARK_(result__41722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41722__auto__;
}
break;
}
}catch (e63143){if((e63143 instanceof Object)){
var ex__41723__auto__ = e63143;
var statearr_63144_63687 = state_63130;
(statearr_63144_63687[(5)] = ex__41723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_63130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63143;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63689 = state_63130;
state_63130 = G__63689;
continue;
} else {
return ret_value__41721__auto__;
}
break;
}
});
jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__ = function(state_63130){
switch(arguments.length){
case 0:
return jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____0.call(this);
case 1:
return jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____1.call(this,state_63130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____0;
jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____1;
return jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__;
})()
})();
var state__41766__auto__ = (function (){var statearr_63145 = (f__41765__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41765__auto__.cljs$core$IFn$_invoke$arity$0() : f__41765__auto__.call(null));
(statearr_63145[(6)] = c__41764__auto__);

return statearr_63145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41766__auto__);
}));

return c__41764__auto__;
});
var G__63146_63690 = new cljs.core.Keyword(null,"http-post-dispatch","http-post-dispatch",2138865017);
var G__63147_63691 = jasminegui.mount.http_post_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__63146_63690,G__63147_63691) : re_frame.core.reg_fx.call(null,G__63146_63690,G__63147_63691));
jasminegui.mount.simple_http_get_events = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-positions","get-positions",1610972586),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"positions",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"positions","positions",-1380538434)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-rating-to-score","get-rating-to-score",391912155),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"rating-to-score",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"portfolios",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-pivoted-positions","get-pivoted-positions",2145025131),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"pivoted-positions",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-total-positions","get-total-positions",-698807167),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"total-positions",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-qt-date","get-qt-date",-1072332881),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"qt-date",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-var-proxies","get-var-proxies",1252506215),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"var-proxies",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-var-dates","get-var-dates",-1039695287),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"var-dates",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword("var","dates","var/dates",-1599746364)], null)], null);
var seq__63148_63705 = cljs.core.seq(jasminegui.mount.simple_http_get_events);
var chunk__63149_63706 = null;
var count__63150_63707 = (0);
var i__63151_63708 = (0);
while(true){
if((i__63151_63708 < count__63150_63707)){
var line_63718 = chunk__63149_63706.cljs$core$IIndexed$_nth$arity$2(null,i__63151_63708);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-key","get-key",1436017019).cljs$core$IFn$_invoke$arity$1(line_63718),((function (seq__63148_63705,chunk__63149_63706,count__63150_63707,i__63151_63708,line_63718){
return (function (p__63166,p__63167){
var map__63168 = p__63166;
var map__63168__$1 = (((((!((map__63168 == null))))?(((((map__63168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63168):map__63168);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63168__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63169 = p__63167;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63169,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url-tail","url-tail",144006528).cljs$core$IFn$_invoke$arity$1(line_63718))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dis-key","dis-key",842897221).cljs$core$IFn$_invoke$arity$1(line_63718)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
});})(seq__63148_63705,chunk__63149_63706,count__63150_63707,i__63151_63708,line_63718))
);


var G__63739 = seq__63148_63705;
var G__63740 = chunk__63149_63706;
var G__63741 = count__63150_63707;
var G__63742 = (i__63151_63708 + (1));
seq__63148_63705 = G__63739;
chunk__63149_63706 = G__63740;
count__63150_63707 = G__63741;
i__63151_63708 = G__63742;
continue;
} else {
var temp__5735__auto___63743 = cljs.core.seq(seq__63148_63705);
if(temp__5735__auto___63743){
var seq__63148_63744__$1 = temp__5735__auto___63743;
if(cljs.core.chunked_seq_QMARK_(seq__63148_63744__$1)){
var c__4556__auto___63745 = cljs.core.chunk_first(seq__63148_63744__$1);
var G__63746 = cljs.core.chunk_rest(seq__63148_63744__$1);
var G__63747 = c__4556__auto___63745;
var G__63748 = cljs.core.count(c__4556__auto___63745);
var G__63749 = (0);
seq__63148_63705 = G__63746;
chunk__63149_63706 = G__63747;
count__63150_63707 = G__63748;
i__63151_63708 = G__63749;
continue;
} else {
var line_63750 = cljs.core.first(seq__63148_63744__$1);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-key","get-key",1436017019).cljs$core$IFn$_invoke$arity$1(line_63750),((function (seq__63148_63705,chunk__63149_63706,count__63150_63707,i__63151_63708,line_63750,seq__63148_63744__$1,temp__5735__auto___63743){
return (function (p__63173,p__63174){
var map__63175 = p__63173;
var map__63175__$1 = (((((!((map__63175 == null))))?(((((map__63175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63175):map__63175);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63175__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63176 = p__63174;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63176,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url-tail","url-tail",144006528).cljs$core$IFn$_invoke$arity$1(line_63750))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dis-key","dis-key",842897221).cljs$core$IFn$_invoke$arity$1(line_63750)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
});})(seq__63148_63705,chunk__63149_63706,count__63150_63707,i__63151_63708,line_63750,seq__63148_63744__$1,temp__5735__auto___63743))
);


var G__63753 = cljs.core.next(seq__63148_63744__$1);
var G__63754 = null;
var G__63755 = (0);
var G__63756 = (0);
seq__63148_63705 = G__63753;
chunk__63149_63706 = G__63754;
count__63150_63707 = G__63755;
i__63151_63708 = G__63756;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-data","get-var-data",837806576),(function (p__63180,p__63181){
var map__63182 = p__63180;
var map__63182__$1 = (((((!((map__63182 == null))))?(((((map__63182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63182):map__63182);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63182__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63183 = p__63181;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63183,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63183,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"var-data?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-var","get-portfolio-var",1001711662),(function (p__63187,p__63188){
var map__63189 = p__63187;
var map__63189__$1 = (((((!((map__63189 == null))))?(((((map__63189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63189):map__63189);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63189__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63190 = p__63188;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63190,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63190,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),portfolio),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"var-data?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-attribution-date","get-attribution-date",-1329272944),(function (p__63194,p__63195){
var map__63196 = p__63194;
var map__63196__$1 = (((((!((map__63196 == null))))?(((((map__63196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63196):map__63196);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63196__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63197 = p__63195;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63197,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=attribution-date"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),false], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-single-attribution","get-single-attribution",-1620108505),(function (p__63201,p__63202){
var map__63203 = p__63201;
var map__63203__$1 = (((((!((map__63203 == null))))?(((((map__63203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63203):map__63203);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63203__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63204 = p__63202;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63204,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63204,(1),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63204,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-single-attribution-portfolio","change-single-attribution-portfolio",1766745939),(function (p__63208,p__63209){
var map__63210 = p__63208;
var map__63210__$1 = (((((!((map__63210 == null))))?(((((map__63210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63210):map__63210);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63210__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63211 = p__63209;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63211,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63211,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),portfolio),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450).cljs$core$IFn$_invoke$arity$1(db))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-single-attribution-period","change-single-attribution-period",860703642),(function (p__63215,p__63216){
var map__63217 = p__63215;
var map__63217__$1 = (((((!((map__63217 == null))))?(((((map__63217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63217):map__63217);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63217__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63218 = p__63216;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63218,(0),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63218,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),period),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521).cljs$core$IFn$_invoke$arity$1(db)),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-multiple-attribution","get-multiple-attribution",1245740943),(function (p__63222,p__63223){
var map__63224 = p__63222;
var map__63224__$1 = (((((!((map__63224 == null))))?(((((map__63224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63224):map__63224);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63224__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63225 = p__63223;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63225,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63225,(1),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63225,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=multiple-portfolio&target=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-multiple-attribution-target","change-multiple-attribution-target",777460289),(function (p__63229,p__63230){
var map__63231 = p__63229;
var map__63231__$1 = (((((!((map__63231 == null))))?(((((map__63231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63231):map__63231);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63231__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63232 = p__63230;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63232,(0),null);
var ktarget = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63232,(1),null);
var target = clojure.string.replace(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ktarget,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)),"-"," ");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),ktarget),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=multiple-portfolio&target=",target,"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154).cljs$core$IFn$_invoke$arity$1(db))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-multiple-attribution-period","change-multiple-attribution-period",590435537),(function (p__63236,p__63237){
var map__63238 = p__63236;
var map__63238__$1 = (((((!((map__63238 == null))))?(((((map__63238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63238):map__63238);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63238__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63239 = p__63237;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63239,(0),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63239,(1),null);
var target = clojure.string.replace(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)),"-"," ");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),period),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=multiple-portfolio&target=",target,"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-attribution-summary","get-attribution-summary",-27760654),(function (p__63243,p__63244){
var map__63245 = p__63243;
var map__63245__$1 = (((((!((map__63245 == null))))?(((((map__63245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63245):map__63245);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63245__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63246 = p__63244;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63246,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=summary"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("attribution","summary","attribution/summary",687462095)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));

//# sourceMappingURL=jasminegui.mount.js.map
