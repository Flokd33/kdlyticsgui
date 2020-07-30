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
jasminegui.mount.default_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword("portfolio-review","alpha-chart-data","portfolio-review/alpha-chart-data",-243291168),new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679),new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705),new cljs.core.Keyword("multiple-portfolio-attribution","field-two","multiple-portfolio-attribution/field-two",-311759422),new cljs.core.Keyword("portfolio-trade-history","performance","portfolio-trade-history/performance",-2029881566),new cljs.core.Keyword("bond-price-history","name","bond-price-history/name",-1471022397),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword("multiple-portfolio-attribution","field-number","multiple-portfolio-attribution/field-number",-1780989148),new cljs.core.Keyword(null,"ex-emcd-portfolios","ex-emcd-portfolios",1425006500),new cljs.core.Keyword("navigation","success-modal","navigation/success-modal",533446693),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("single-bond-trade-history","bond","single-bond-trade-history/bond",2015871973),new cljs.core.Keyword("trade-history","active-bond","trade-history/active-bond",-1419462650),new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),new cljs.core.Keyword("betas","table","betas/table",-390525241),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-bond-trade-history","show-flat-modal","single-bond-trade-history/show-flat-modal",1072491400),new cljs.core.Keyword("esg","data","esg/data",-232765496),new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047),new cljs.core.Keyword("portfolio-review","marginal-beta-chart-data","portfolio-review/marginal-beta-chart-data",40550601),new cljs.core.Keyword("multiple-portfolio-attribution","display-style","multiple-portfolio-attribution/display-style",-767260119),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword("esg","selected-companies","esg/selected-companies",-382224567),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword("esg","refinitiv-ids","esg/refinitiv-ids",13812138),new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("portfolio-trade-history","end-date","portfolio-trade-history/end-date",68061260),new cljs.core.Keyword("var","result","var/result",1415073996),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("portfolio-review","historical-beta-chart-data","portfolio-review/historical-beta-chart-data",-1077808147),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738),new cljs.core.Keyword("attribution","summary","attribution/summary",687462095),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("navigation","active-view","navigation/active-view",800211184),new cljs.core.Keyword("portfolio-review","historical-performance-chart-data","portfolio-review/historical-performance-chart-data",1185340209),new cljs.core.Keyword("var","history","var/history",-246458543),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("navigation","active-attribution","navigation/active-attribution",600082450),new cljs.core.Keyword("portfolio-review","summary-data","portfolio-review/summary-data",-1362975725),new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181),new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219),new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("portfolio-review","jensen-chart-data","portfolio-review/jensen-chart-data",-701618636),new cljs.core.Keyword("portfolio-trade-history","portfolio","portfolio-trade-history/portfolio",160136116),new cljs.core.Keyword("multiple-portfolio-attribution","shortcut","multiple-portfolio-attribution/shortcut",809107380),new cljs.core.Keyword("navigation","active-home","navigation/active-home",1949576148),new cljs.core.Keyword("esg","active-home","esg/active-home",53652341),new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),new cljs.core.Keyword(null,"positions-new","positions-new",1631706550),new cljs.core.Keyword("bond-price-history","price","bond-price-history/price",-601066058),new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("single-portfolio-attribution","table-filter","single-portfolio-attribution/table-filter",1757441687),new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("navigation","active-var","navigation/active-var",39797785),new cljs.core.Keyword("single-bond-trade-history","show-modal","single-bond-trade-history/show-modal",-1585088359),new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),new cljs.core.Keyword("portfolio-trade-history","data","portfolio-trade-history/data",27790297),new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127),new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334),new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("portfolio-review","contribution-chart-data","portfolio-review/contribution-chart-data",-581811845),new cljs.core.Keyword("portfolio-review","active-tab","portfolio-review/active-tab",1429822843),new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),new cljs.core.Keyword("single-portfolio-attribution","shortcut","single-portfolio-attribution/shortcut",-1711481988),new cljs.core.Keyword("trade-history","history","trade-history/history",1084885309),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("portfolio-trade-history","start-date","portfolio-trade-history/start-date",-1590289411),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),new cljs.core.Keyword("multiple-portfolio-attribution","table-filter","multiple-portfolio-attribution/table-filter",-9483585)],[(1),null,"OGEMCORD","Tree",cljs.core.PersistentVector.EMPTY,"None","No",cljs.core.PersistentVector.EMPTY,null,null,"One",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show","show",-576705889),false,new cljs.core.Keyword(null,"on-close","on-close",-761178394),null,new cljs.core.Keyword(null,"response","response",-1068424192),null], null),"Table",null,null,true,"undefined",null,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),false,true,false,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,"Tree",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),null,"undefined",cljs.core.PersistentVector.EMPTY,jasminegui.tools.int_to_gdate(cljs_time.core.today()),null,cljs.core.set(null),new cljs.core.Keyword(null,"quarter","quarter",-508147616),"Tree",null,null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"home","home",-74557309),null,null,(1),new cljs.core.Keyword(null,"summary","summary",380847952),null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),"OGEMCORD",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),null,"OGEMCORD",(1),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"find-issuers","find-issuers",453068731),new cljs.core.Keyword(null,"daily-3y","daily-3y",-2143971824),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,"ytd","None",cljs.core.PersistentVector.EMPTY,(1),"One","Tree",new cljs.core.Keyword(null,"overview","overview",-435037267),false,"OGEMCORD",cljs.core.set(null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),new cljs.core.Keyword(null,"total-effect","total-effect",-967715775),cljs.core.PersistentArrayMap.EMPTY,null,new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.PersistentVector.EMPTY,(1),null,"OGEMCORD",jasminegui.tools.int_to_gdate((20200101)),new cljs.core.Keyword(null,"cembi","cembi",1924920241),"ytd",cljs.core.PersistentVector.EMPTY,true,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),cljs.core.PersistentVector.EMPTY]);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jasminegui.mount","initialize-db","jasminegui.mount/initialize-db",-1621527627),(function (_,___$1){
return jasminegui.mount.default_db;
}));
var seq__91261_91590 = cljs.core.seq(cljs.core.keys(jasminegui.mount.default_db));
var chunk__91262_91591 = null;
var count__91263_91592 = (0);
var i__91264_91593 = (0);
while(true){
if((i__91264_91593 < count__91263_91592)){
var k_91599 = chunk__91262_91591.cljs$core$IIndexed$_nth$arity$2(null,i__91264_91593);
var G__91270_91606 = k_91599;
var G__91271_91607 = ((function (seq__91261_91590,chunk__91262_91591,count__91263_91592,i__91264_91593,G__91270_91606,k_91599){
return (function (db){
return (k_91599.cljs$core$IFn$_invoke$arity$1 ? k_91599.cljs$core$IFn$_invoke$arity$1(db) : k_91599.call(null,db));
});})(seq__91261_91590,chunk__91262_91591,count__91263_91592,i__91264_91593,G__91270_91606,k_91599))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__91270_91606,G__91271_91607) : re_frame.core.reg_sub.call(null,G__91270_91606,G__91271_91607));


var G__91609 = seq__91261_91590;
var G__91610 = chunk__91262_91591;
var G__91611 = count__91263_91592;
var G__91612 = (i__91264_91593 + (1));
seq__91261_91590 = G__91609;
chunk__91262_91591 = G__91610;
count__91263_91592 = G__91611;
i__91264_91593 = G__91612;
continue;
} else {
var temp__5735__auto___91613 = cljs.core.seq(seq__91261_91590);
if(temp__5735__auto___91613){
var seq__91261_91616__$1 = temp__5735__auto___91613;
if(cljs.core.chunked_seq_QMARK_(seq__91261_91616__$1)){
var c__4556__auto___91621 = cljs.core.chunk_first(seq__91261_91616__$1);
var G__91623 = cljs.core.chunk_rest(seq__91261_91616__$1);
var G__91624 = c__4556__auto___91621;
var G__91625 = cljs.core.count(c__4556__auto___91621);
var G__91626 = (0);
seq__91261_91590 = G__91623;
chunk__91262_91591 = G__91624;
count__91263_91592 = G__91625;
i__91264_91593 = G__91626;
continue;
} else {
var k_91627 = cljs.core.first(seq__91261_91616__$1);
var G__91273_91629 = k_91627;
var G__91274_91630 = ((function (seq__91261_91590,chunk__91262_91591,count__91263_91592,i__91264_91593,G__91273_91629,k_91627,seq__91261_91616__$1,temp__5735__auto___91613){
return (function (db){
return (k_91627.cljs$core$IFn$_invoke$arity$1 ? k_91627.cljs$core$IFn$_invoke$arity$1(db) : k_91627.call(null,db));
});})(seq__91261_91590,chunk__91262_91591,count__91263_91592,i__91264_91593,G__91273_91629,k_91627,seq__91261_91616__$1,temp__5735__auto___91613))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__91273_91629,G__91274_91630) : re_frame.core.reg_sub.call(null,G__91273_91629,G__91274_91630));


var G__91631 = cljs.core.next(seq__91261_91616__$1);
var G__91632 = null;
var G__91633 = (0);
var G__91634 = (0);
seq__91261_91590 = G__91631;
chunk__91262_91591 = G__91632;
count__91263_91592 = G__91633;
i__91264_91593 = G__91634;
continue;
}
} else {
}
}
break;
}
var seq__91275_91669 = cljs.core.seq(cljs.core.PersistentVector.fromArray([new cljs.core.Keyword("navigation","active-view","navigation/active-view",800211184),new cljs.core.Keyword("navigation","active-home","navigation/active-home",1949576148),new cljs.core.Keyword("navigation","active-var","navigation/active-var",39797785),new cljs.core.Keyword("navigation","active-attribution","navigation/active-attribution",600082450),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738),new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334),new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679),new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),new cljs.core.Keyword("single-portfolio-attribution","table-filter","single-portfolio-attribution/table-filter",1757441687),new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047),new cljs.core.Keyword("multiple-portfolio-attribution","display-style","multiple-portfolio-attribution/display-style",-767260119),new cljs.core.Keyword("multiple-portfolio-attribution","field-number","multiple-portfolio-attribution/field-number",-1780989148),new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),new cljs.core.Keyword("multiple-portfolio-attribution","field-two","multiple-portfolio-attribution/field-two",-311759422),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),new cljs.core.Keyword("multiple-portfolio-attribution","hide-zero-holdings","multiple-portfolio-attribution/hide-zero-holdings",1677138723),new cljs.core.Keyword("multiple-portfolio-attribution","shortcut","multiple-portfolio-attribution/shortcut",809107380),new cljs.core.Keyword("multiple-portfolio-attribution","table-filter","multiple-portfolio-attribution/table-filter",-9483585),new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705),new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),new cljs.core.Keyword("attribution","summary","attribution/summary",687462095),new cljs.core.Keyword("single-bond-trade-history","show-flat-modal","single-bond-trade-history/show-flat-modal",1072491400),new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181),new cljs.core.Keyword("single-bond-trade-history","show-modal","single-bond-trade-history/show-modal",-1585088359),new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127),new cljs.core.Keyword("single-bond-trade-history","bond","single-bond-trade-history/bond",2015871973),new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865),new cljs.core.Keyword("portfolio-trade-history","portfolio","portfolio-trade-history/portfolio",160136116),new cljs.core.Keyword("portfolio-trade-history","start-date","portfolio-trade-history/start-date",-1590289411),new cljs.core.Keyword("portfolio-trade-history","end-date","portfolio-trade-history/end-date",68061260),new cljs.core.Keyword("portfolio-trade-history","performance","portfolio-trade-history/performance",-2029881566),new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321),new cljs.core.Keyword("portfolio-review","active-tab","portfolio-review/active-tab",1429822843),new cljs.core.Keyword("portfolio-review","summary-data","portfolio-review/summary-data",-1362975725),new cljs.core.Keyword("portfolio-review","contribution-chart-data","portfolio-review/contribution-chart-data",-581811845),new cljs.core.Keyword("portfolio-review","alpha-chart-data","portfolio-review/alpha-chart-data",-243291168),new cljs.core.Keyword("portfolio-review","jensen-chart-data","portfolio-review/jensen-chart-data",-701618636),new cljs.core.Keyword("portfolio-review","marginal-beta-chart-data","portfolio-review/marginal-beta-chart-data",40550601),new cljs.core.Keyword("portfolio-review","historical-beta-chart-data","portfolio-review/historical-beta-chart-data",-1077808147),new cljs.core.Keyword("portfolio-review","historical-performance-chart-data","portfolio-review/historical-performance-chart-data",1185340209),new cljs.core.Keyword("betas","table","betas/table",-390525241),new cljs.core.Keyword("bond-price-history","price","bond-price-history/price",-601066058),new cljs.core.Keyword("bond-price-history","name","bond-price-history/name",-1471022397),new cljs.core.Keyword("esg","refinitiv-ids","esg/refinitiv-ids",13812138),new cljs.core.Keyword("esg","active-home","esg/active-home",53652341)], true));
var chunk__91276_91670 = null;
var count__91277_91671 = (0);
var i__91278_91672 = (0);
while(true){
if((i__91278_91672 < count__91277_91671)){
var k_91676 = chunk__91276_91670.cljs$core$IIndexed$_nth$arity$2(null,i__91278_91672);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_91676,((function (seq__91275_91669,chunk__91276_91670,count__91277_91671,i__91278_91672,k_91676){
return (function (db,p__91287){
var vec__91288 = p__91287;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91288,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91288,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_91676,data);
});})(seq__91275_91669,chunk__91276_91670,count__91277_91671,i__91278_91672,k_91676))
);


var G__91679 = seq__91275_91669;
var G__91680 = chunk__91276_91670;
var G__91681 = count__91277_91671;
var G__91682 = (i__91278_91672 + (1));
seq__91275_91669 = G__91679;
chunk__91276_91670 = G__91680;
count__91277_91671 = G__91681;
i__91278_91672 = G__91682;
continue;
} else {
var temp__5735__auto___91689 = cljs.core.seq(seq__91275_91669);
if(temp__5735__auto___91689){
var seq__91275_91690__$1 = temp__5735__auto___91689;
if(cljs.core.chunked_seq_QMARK_(seq__91275_91690__$1)){
var c__4556__auto___91691 = cljs.core.chunk_first(seq__91275_91690__$1);
var G__91692 = cljs.core.chunk_rest(seq__91275_91690__$1);
var G__91693 = c__4556__auto___91691;
var G__91694 = cljs.core.count(c__4556__auto___91691);
var G__91695 = (0);
seq__91275_91669 = G__91692;
chunk__91276_91670 = G__91693;
count__91277_91671 = G__91694;
i__91278_91672 = G__91695;
continue;
} else {
var k_91696 = cljs.core.first(seq__91275_91690__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_91696,((function (seq__91275_91669,chunk__91276_91670,count__91277_91671,i__91278_91672,k_91696,seq__91275_91690__$1,temp__5735__auto___91689){
return (function (db,p__91291){
var vec__91292 = p__91291;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91292,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91292,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_91696,data);
});})(seq__91275_91669,chunk__91276_91670,count__91277_91671,i__91278_91672,k_91696,seq__91275_91690__$1,temp__5735__auto___91689))
);


var G__91697 = cljs.core.next(seq__91275_91690__$1);
var G__91698 = null;
var G__91699 = (0);
var G__91700 = (0);
seq__91275_91669 = G__91697;
chunk__91276_91670 = G__91698;
count__91277_91671 = G__91699;
i__91278_91672 = G__91700;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"positions","positions",-1380538434),(function (db,p__91295){
var vec__91296 = p__91295;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91296,(0),null);
var positions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91296,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"positions","positions",-1380538434),positions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"positions-new","positions-new",1631706550),(function (db,p__91299){
var vec__91300 = p__91299;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91300,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91300,(1),null);
var positions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91300,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-new","positions-new",1631706550),portfolio], null),positions),new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),(function (db,p__91303){
var vec__91304 = p__91303;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91304,(0),null);
var portfolios = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91304,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),portfolios,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),cljs.core.set(portfolios),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),cljs.core.set(portfolios)], 0));
}));
var seq__91307_91710 = cljs.core.seq(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219)], null));
var chunk__91308_91711 = null;
var count__91309_91712 = (0);
var i__91310_91713 = (0);
while(true){
if((i__91310_91713 < count__91309_91712)){
var k_91714 = chunk__91308_91711.cljs$core$IIndexed$_nth$arity$2(null,i__91310_91713);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_91714,((function (seq__91307_91710,chunk__91308_91711,count__91309_91712,i__91310_91713,k_91714){
return (function (db,p__91319){
var vec__91320 = p__91319;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91320,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91320,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91320,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_91714,id], null),f);
});})(seq__91307_91710,chunk__91308_91711,count__91309_91712,i__91310_91713,k_91714))
);


var G__91718 = seq__91307_91710;
var G__91719 = chunk__91308_91711;
var G__91720 = count__91309_91712;
var G__91721 = (i__91310_91713 + (1));
seq__91307_91710 = G__91718;
chunk__91308_91711 = G__91719;
count__91309_91712 = G__91720;
i__91310_91713 = G__91721;
continue;
} else {
var temp__5735__auto___91722 = cljs.core.seq(seq__91307_91710);
if(temp__5735__auto___91722){
var seq__91307_91723__$1 = temp__5735__auto___91722;
if(cljs.core.chunked_seq_QMARK_(seq__91307_91723__$1)){
var c__4556__auto___91724 = cljs.core.chunk_first(seq__91307_91723__$1);
var G__91725 = cljs.core.chunk_rest(seq__91307_91723__$1);
var G__91726 = c__4556__auto___91724;
var G__91727 = cljs.core.count(c__4556__auto___91724);
var G__91728 = (0);
seq__91307_91710 = G__91725;
chunk__91308_91711 = G__91726;
count__91309_91712 = G__91727;
i__91310_91713 = G__91728;
continue;
} else {
var k_91729 = cljs.core.first(seq__91307_91723__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_91729,((function (seq__91307_91710,chunk__91308_91711,count__91309_91712,i__91310_91713,k_91729,seq__91307_91723__$1,temp__5735__auto___91722){
return (function (db,p__91323){
var vec__91324 = p__91323;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91324,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91324,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91324,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_91729,id], null),f);
});})(seq__91307_91710,chunk__91308_91711,count__91309_91712,i__91310_91713,k_91729,seq__91307_91723__$1,temp__5735__auto___91722))
);


var G__91735 = cljs.core.next(seq__91307_91723__$1);
var G__91736 = null;
var G__91737 = (0);
var G__91738 = (0);
seq__91307_91710 = G__91735;
chunk__91308_91711 = G__91736;
count__91309_91712 = G__91737;
i__91310_91713 = G__91738;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),(function (db,p__91327){
var vec__91328 = p__91327;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91328,(0),null);
var qt_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91328,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),clojure.string.replace(qt_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),(function (db,p__91331){
var vec__91332 = p__91331;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91332,(0),null);
var attribution_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91332,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),clojure.string.replace(attribution_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),(function (db,p__91335){
var vec__91336 = p__91335;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91336,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91336,(1),null);
var G__91339 = snapshot;
switch (G__91339) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__91339)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cycle-shortcut","cycle-shortcut",-1617058214),(function (db,p__91340){
var vec__91341 = p__91340;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91341,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91341,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91341,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword("navigation","active-home","navigation/active-home",1949576148).cljs$core$IFn$_invoke$arity$1(db)),"-risk/shortcut"].join(''));
var shortcut_value = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
if((shortcut_value < (4))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(shortcut_value + (1)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(1));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tree-table","tree-table",-1263002012),(function (db,p__91344){
var vec__91345 = p__91344;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91345,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91345,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91345,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword("navigation","active-home","navigation/active-home",1949576148).cljs$core$IFn$_invoke$arity$1(db)),"-risk/display-style"].join(''));
var G__91348 = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
switch (G__91348) {
case "Tree":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Table");

break;
case "Table":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Tree");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__91348)].join('')));

}
}));
jasminegui.mount.http_get_dispatch = (function jasminegui$mount$http_get_dispatch(request){
var c__41764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41765__auto__ = (function (){var switch__41741__auto__ = (function (state_91377){
var state_val_91378 = (state_91377[(1)]);
if((state_val_91378 === (1))){
var inst_91349 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_91350 = cljs_http.client.get(inst_91349);
var state_91377__$1 = state_91377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_91377__$1,(2),inst_91350);
} else {
if((state_val_91378 === (2))){
var inst_91352 = (state_91377[(2)]);
var inst_91353 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_91354 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_91377__$1 = (function (){var statearr_91379 = state_91377;
(statearr_91379[(7)] = inst_91353);

(statearr_91379[(8)] = inst_91352);

return statearr_91379;
})();
if(cljs.core.truth_(inst_91354)){
var statearr_91380_91775 = state_91377__$1;
(statearr_91380_91775[(1)] = (3));

} else {
var statearr_91381_91776 = state_91377__$1;
(statearr_91381_91776[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91378 === (3))){
var inst_91352 = (state_91377[(8)]);
var inst_91356 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_91352);
var inst_91357 = JSON.parse(inst_91356);
var inst_91358 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_91357,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_91377__$1 = state_91377;
var statearr_91382_91777 = state_91377__$1;
(statearr_91382_91777[(2)] = inst_91358);

(statearr_91382_91777[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91378 === (4))){
var inst_91352 = (state_91377[(8)]);
var inst_91360 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_91352);
var state_91377__$1 = state_91377;
var statearr_91383_91778 = state_91377__$1;
(statearr_91383_91778[(2)] = inst_91360);

(statearr_91383_91778[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91378 === (5))){
var inst_91353 = (state_91377[(7)]);
var inst_91362 = (state_91377[(2)]);
var inst_91363 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_91353,inst_91362);
var inst_91364 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_91363) : re_frame.core.dispatch.call(null,inst_91363));
var inst_91365 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_91377__$1 = (function (){var statearr_91384 = state_91377;
(statearr_91384[(9)] = inst_91364);

return statearr_91384;
})();
if(cljs.core.truth_(inst_91365)){
var statearr_91385_91779 = state_91377__$1;
(statearr_91385_91779[(1)] = (6));

} else {
var statearr_91386_91780 = state_91377__$1;
(statearr_91386_91780[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91378 === (6))){
var inst_91367 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91368 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_91369 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_91370 = [inst_91368,inst_91369];
var inst_91371 = (new cljs.core.PersistentVector(null,2,(5),inst_91367,inst_91370,null));
var inst_91372 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_91371) : re_frame.core.dispatch.call(null,inst_91371));
var state_91377__$1 = state_91377;
var statearr_91387_91789 = state_91377__$1;
(statearr_91387_91789[(2)] = inst_91372);

(statearr_91387_91789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91378 === (7))){
var state_91377__$1 = state_91377;
var statearr_91388_91790 = state_91377__$1;
(statearr_91388_91790[(2)] = null);

(statearr_91388_91790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91378 === (8))){
var inst_91375 = (state_91377[(2)]);
var state_91377__$1 = state_91377;
return cljs.core.async.impl.ioc_helpers.return_chan(state_91377__$1,inst_91375);
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
var statearr_91389 = [null,null,null,null,null,null,null,null,null,null];
(statearr_91389[(0)] = jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__);

(statearr_91389[(1)] = (1));

return statearr_91389;
});
var jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____1 = (function (state_91377){
while(true){
var ret_value__41743__auto__ = (function (){try{while(true){
var result__41744__auto__ = switch__41741__auto__(state_91377);
if(cljs.core.keyword_identical_QMARK_(result__41744__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41744__auto__;
}
break;
}
}catch (e91390){if((e91390 instanceof Object)){
var ex__41745__auto__ = e91390;
var statearr_91391_91791 = state_91377;
(statearr_91391_91791[(5)] = ex__41745__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_91377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91390;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91792 = state_91377;
state_91377 = G__91792;
continue;
} else {
return ret_value__41743__auto__;
}
break;
}
});
jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__ = function(state_91377){
switch(arguments.length){
case 0:
return jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____0.call(this);
case 1:
return jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____1.call(this,state_91377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____0;
jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____1;
return jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__;
})()
})();
var state__41766__auto__ = (function (){var statearr_91392 = (f__41765__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41765__auto__.cljs$core$IFn$_invoke$arity$0() : f__41765__auto__.call(null));
(statearr_91392[(6)] = c__41764__auto__);

return statearr_91392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41766__auto__);
}));

return c__41764__auto__;
});
var G__91393_91793 = new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518);
var G__91394_91794 = jasminegui.mount.http_get_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__91393_91793,G__91394_91794) : re_frame.core.reg_fx.call(null,G__91393_91793,G__91394_91794));
jasminegui.mount.http_post_dispatch = (function jasminegui$mount$http_post_dispatch(request){
var c__41764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41765__auto__ = (function (){var switch__41741__auto__ = (function (state_91427){
var state_val_91428 = (state_91427[(1)]);
if((state_val_91428 === (1))){
var inst_91395 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_91396 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_91397 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
var inst_91398 = [inst_91397];
var inst_91399 = cljs.core.PersistentHashMap.fromArrays(inst_91396,inst_91398);
var inst_91400 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_91395,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_91399], 0));
var state_91427__$1 = state_91427;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_91427__$1,(2),inst_91400);
} else {
if((state_val_91428 === (2))){
var inst_91402 = (state_91427[(2)]);
var inst_91403 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_91404 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_91427__$1 = (function (){var statearr_91429 = state_91427;
(statearr_91429[(7)] = inst_91403);

(statearr_91429[(8)] = inst_91402);

return statearr_91429;
})();
if(cljs.core.truth_(inst_91404)){
var statearr_91430_91806 = state_91427__$1;
(statearr_91430_91806[(1)] = (3));

} else {
var statearr_91431_91807 = state_91427__$1;
(statearr_91431_91807[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91428 === (3))){
var inst_91402 = (state_91427[(8)]);
var inst_91406 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_91402);
var inst_91407 = JSON.parse(inst_91406);
var inst_91408 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_91407,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_91427__$1 = state_91427;
var statearr_91432_91808 = state_91427__$1;
(statearr_91432_91808[(2)] = inst_91408);

(statearr_91432_91808[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91428 === (4))){
var inst_91402 = (state_91427[(8)]);
var inst_91410 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_91402);
var state_91427__$1 = state_91427;
var statearr_91433_91809 = state_91427__$1;
(statearr_91433_91809[(2)] = inst_91410);

(statearr_91433_91809[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91428 === (5))){
var inst_91403 = (state_91427[(7)]);
var inst_91412 = (state_91427[(2)]);
var inst_91413 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_91403,inst_91412);
var inst_91414 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_91413) : re_frame.core.dispatch.call(null,inst_91413));
var inst_91415 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_91427__$1 = (function (){var statearr_91434 = state_91427;
(statearr_91434[(9)] = inst_91414);

return statearr_91434;
})();
if(cljs.core.truth_(inst_91415)){
var statearr_91435_91810 = state_91427__$1;
(statearr_91435_91810[(1)] = (6));

} else {
var statearr_91436_91811 = state_91427__$1;
(statearr_91436_91811[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91428 === (6))){
var inst_91417 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91418 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_91419 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_91420 = [inst_91418,inst_91419];
var inst_91421 = (new cljs.core.PersistentVector(null,2,(5),inst_91417,inst_91420,null));
var inst_91422 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_91421) : re_frame.core.dispatch.call(null,inst_91421));
var state_91427__$1 = state_91427;
var statearr_91437_91812 = state_91427__$1;
(statearr_91437_91812[(2)] = inst_91422);

(statearr_91437_91812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91428 === (7))){
var state_91427__$1 = state_91427;
var statearr_91438_91813 = state_91427__$1;
(statearr_91438_91813[(2)] = null);

(statearr_91438_91813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91428 === (8))){
var inst_91425 = (state_91427[(2)]);
var state_91427__$1 = state_91427;
return cljs.core.async.impl.ioc_helpers.return_chan(state_91427__$1,inst_91425);
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
var statearr_91439 = [null,null,null,null,null,null,null,null,null,null];
(statearr_91439[(0)] = jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto__);

(statearr_91439[(1)] = (1));

return statearr_91439;
});
var jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto____1 = (function (state_91427){
while(true){
var ret_value__41743__auto__ = (function (){try{while(true){
var result__41744__auto__ = switch__41741__auto__(state_91427);
if(cljs.core.keyword_identical_QMARK_(result__41744__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41744__auto__;
}
break;
}
}catch (e91440){if((e91440 instanceof Object)){
var ex__41745__auto__ = e91440;
var statearr_91441_91821 = state_91427;
(statearr_91441_91821[(5)] = ex__41745__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_91427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91440;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91822 = state_91427;
state_91427 = G__91822;
continue;
} else {
return ret_value__41743__auto__;
}
break;
}
});
jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto__ = function(state_91427){
switch(arguments.length){
case 0:
return jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto____0.call(this);
case 1:
return jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto____1.call(this,state_91427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto____0;
jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto____1;
return jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto__;
})()
})();
var state__41766__auto__ = (function (){var statearr_91442 = (f__41765__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41765__auto__.cljs$core$IFn$_invoke$arity$0() : f__41765__auto__.call(null));
(statearr_91442[(6)] = c__41764__auto__);

return statearr_91442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41766__auto__);
}));

return c__41764__auto__;
});
var G__91443_91823 = new cljs.core.Keyword(null,"http-post-dispatch","http-post-dispatch",2138865017);
var G__91444_91824 = jasminegui.mount.http_post_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__91443_91823,G__91444_91824) : re_frame.core.reg_fx.call(null,G__91443_91823,G__91444_91824));
jasminegui.mount.simple_http_get_events = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-positions","get-positions",1610972586),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"positions",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"positions","positions",-1380538434)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-rating-to-score","get-rating-to-score",391912155),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"rating-to-score",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"portfolios",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-pivoted-positions","get-pivoted-positions",2145025131),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"pivoted-positions",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-total-positions","get-total-positions",-698807167),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"total-positions",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-qt-date","get-qt-date",-1072332881),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"qt-date",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-var-proxies","get-var-proxies",1252506215),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"var-proxies",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-var-dates","get-var-dates",-1039695287),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"var-dates",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword("var","dates","var/dates",-1599746364)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-betas","get-betas",-284291273),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"beta-table",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword("betas","table","betas/table",-390525241)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-refinitiv-ids","get-refinitiv-ids",-1673756915),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"refinitiv-ids",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword("esg","refinitiv-ids","esg/refinitiv-ids",13812138)], null)], null);
var seq__91445_91826 = cljs.core.seq(jasminegui.mount.simple_http_get_events);
var chunk__91446_91827 = null;
var count__91447_91828 = (0);
var i__91448_91829 = (0);
while(true){
if((i__91448_91829 < count__91447_91828)){
var line_91831 = chunk__91446_91827.cljs$core$IIndexed$_nth$arity$2(null,i__91448_91829);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-key","get-key",1436017019).cljs$core$IFn$_invoke$arity$1(line_91831),((function (seq__91445_91826,chunk__91446_91827,count__91447_91828,i__91448_91829,line_91831){
return (function (p__91463,p__91464){
var map__91465 = p__91463;
var map__91465__$1 = (((((!((map__91465 == null))))?(((((map__91465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91465):map__91465);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91465__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__91466 = p__91464;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91466,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url-tail","url-tail",144006528).cljs$core$IFn$_invoke$arity$1(line_91831))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dis-key","dis-key",842897221).cljs$core$IFn$_invoke$arity$1(line_91831)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
});})(seq__91445_91826,chunk__91446_91827,count__91447_91828,i__91448_91829,line_91831))
);


var G__91833 = seq__91445_91826;
var G__91834 = chunk__91446_91827;
var G__91835 = count__91447_91828;
var G__91836 = (i__91448_91829 + (1));
seq__91445_91826 = G__91833;
chunk__91446_91827 = G__91834;
count__91447_91828 = G__91835;
i__91448_91829 = G__91836;
continue;
} else {
var temp__5735__auto___91837 = cljs.core.seq(seq__91445_91826);
if(temp__5735__auto___91837){
var seq__91445_91838__$1 = temp__5735__auto___91837;
if(cljs.core.chunked_seq_QMARK_(seq__91445_91838__$1)){
var c__4556__auto___91839 = cljs.core.chunk_first(seq__91445_91838__$1);
var G__91840 = cljs.core.chunk_rest(seq__91445_91838__$1);
var G__91841 = c__4556__auto___91839;
var G__91842 = cljs.core.count(c__4556__auto___91839);
var G__91843 = (0);
seq__91445_91826 = G__91840;
chunk__91446_91827 = G__91841;
count__91447_91828 = G__91842;
i__91448_91829 = G__91843;
continue;
} else {
var line_91845 = cljs.core.first(seq__91445_91838__$1);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-key","get-key",1436017019).cljs$core$IFn$_invoke$arity$1(line_91845),((function (seq__91445_91826,chunk__91446_91827,count__91447_91828,i__91448_91829,line_91845,seq__91445_91838__$1,temp__5735__auto___91837){
return (function (p__91470,p__91471){
var map__91472 = p__91470;
var map__91472__$1 = (((((!((map__91472 == null))))?(((((map__91472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91472):map__91472);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91472__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__91473 = p__91471;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91473,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url-tail","url-tail",144006528).cljs$core$IFn$_invoke$arity$1(line_91845))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dis-key","dis-key",842897221).cljs$core$IFn$_invoke$arity$1(line_91845)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
});})(seq__91445_91826,chunk__91446_91827,count__91447_91828,i__91448_91829,line_91845,seq__91445_91838__$1,temp__5735__auto___91837))
);


var G__91848 = cljs.core.next(seq__91445_91838__$1);
var G__91849 = null;
var G__91850 = (0);
var G__91851 = (0);
seq__91445_91826 = G__91848;
chunk__91446_91827 = G__91849;
count__91447_91828 = G__91850;
i__91448_91829 = G__91851;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions-new","get-positions-new",1597842964),(function (p__91477,p__91478){
var map__91479 = p__91477;
var map__91479__$1 = (((((!((map__91479 == null))))?(((((map__91479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91479):map__91479);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91479__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__91480 = p__91478;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91480,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91480,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"positions-new?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-new","positions-new",1631706550),portfolio], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-data","get-var-data",837806576),(function (p__91484,p__91485){
var map__91486 = p__91484;
var map__91486__$1 = (((((!((map__91486 == null))))?(((((map__91486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91486):map__91486);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91486__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__91487 = p__91485;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91487,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91487,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"var-data?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-var","get-portfolio-var",1001711662),(function (p__91491,p__91492){
var map__91493 = p__91491;
var map__91493__$1 = (((((!((map__91493 == null))))?(((((map__91493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91493):map__91493);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91493__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__91494 = p__91492;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91494,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91494,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),portfolio),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"var-data?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-attribution-date","get-attribution-date",-1329272944),(function (p__91498,p__91499){
var map__91500 = p__91498;
var map__91500__$1 = (((((!((map__91500 == null))))?(((((map__91500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91500):map__91500);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91500__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__91501 = p__91499;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91501,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=attribution-date"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),false], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-single-attribution","get-single-attribution",-1620108505),(function (p__91505,p__91506){
var map__91507 = p__91505;
var map__91507__$1 = (((((!((map__91507 == null))))?(((((map__91507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91507):map__91507);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91507__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__91508 = p__91506;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91508,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91508,(1),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91508,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-single-attribution-portfolio","change-single-attribution-portfolio",1766745939),(function (p__91512,p__91513){
var map__91514 = p__91512;
var map__91514__$1 = (((((!((map__91514 == null))))?(((((map__91514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91514):map__91514);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91514__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__91515 = p__91513;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91515,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91515,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),portfolio),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450).cljs$core$IFn$_invoke$arity$1(db))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-single-attribution-period","change-single-attribution-period",860703642),(function (p__91519,p__91520){
var map__91521 = p__91519;
var map__91521__$1 = (((((!((map__91521 == null))))?(((((map__91521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91521):map__91521);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91521__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__91522 = p__91520;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91522,(0),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91522,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),period),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521).cljs$core$IFn$_invoke$arity$1(db)),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-multiple-attribution","get-multiple-attribution",1245740943),(function (p__91526,p__91527){
var map__91528 = p__91526;
var map__91528__$1 = (((((!((map__91528 == null))))?(((((map__91528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91528):map__91528);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91528__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__91529 = p__91527;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91529,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91529,(1),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91529,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=multiple-portfolio&target=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-multiple-attribution-target","change-multiple-attribution-target",777460289),(function (p__91533,p__91534){
var map__91535 = p__91533;
var map__91535__$1 = (((((!((map__91535 == null))))?(((((map__91535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91535):map__91535);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91535__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__91536 = p__91534;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91536,(0),null);
var ktarget = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91536,(1),null);
var target = clojure.string.replace(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ktarget,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)),"-"," ");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),ktarget),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=multiple-portfolio&target=",target,"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154).cljs$core$IFn$_invoke$arity$1(db))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-multiple-attribution-period","change-multiple-attribution-period",590435537),(function (p__91540,p__91541){
var map__91542 = p__91540;
var map__91542__$1 = (((((!((map__91542 == null))))?(((((map__91542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91542):map__91542);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91542__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__91543 = p__91541;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91543,(0),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91543,(1),null);
var target = clojure.string.replace(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)),"-"," ");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),period),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=multiple-portfolio&target=",target,"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-attribution-summary","get-attribution-summary",-27760654),(function (p__91547,p__91548){
var map__91549 = p__91547;
var map__91549__$1 = (((((!((map__91549 == null))))?(((((map__91549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91549):map__91549);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91549__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__91550 = p__91548;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91550,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=summary"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("attribution","summary","attribution/summary",687462095)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));

//# sourceMappingURL=jasminegui.mount.js.map
