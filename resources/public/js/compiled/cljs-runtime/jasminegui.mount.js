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
jasminegui.mount.default_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword("portfolio-review","alpha-chart-data","portfolio-review/alpha-chart-data",-243291168),new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679),new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705),new cljs.core.Keyword("multiple-portfolio-attribution","field-two","multiple-portfolio-attribution/field-two",-311759422),new cljs.core.Keyword("portfolio-trade-history","performance","portfolio-trade-history/performance",-2029881566),new cljs.core.Keyword("bond-price-history","name","bond-price-history/name",-1471022397),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword("multiple-portfolio-attribution","field-number","multiple-portfolio-attribution/field-number",-1780989148),new cljs.core.Keyword(null,"ex-emcd-portfolios","ex-emcd-portfolios",1425006500),new cljs.core.Keyword("navigation","success-modal","navigation/success-modal",533446693),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("single-bond-trade-history","bond","single-bond-trade-history/bond",2015871973),new cljs.core.Keyword("trade-history","active-bond","trade-history/active-bond",-1419462650),new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),new cljs.core.Keyword("betas","table","betas/table",-390525241),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-bond-trade-history","show-flat-modal","single-bond-trade-history/show-flat-modal",1072491400),new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047),new cljs.core.Keyword("portfolio-review","marginal-beta-chart-data","portfolio-review/marginal-beta-chart-data",40550601),new cljs.core.Keyword("multiple-portfolio-attribution","display-style","multiple-portfolio-attribution/display-style",-767260119),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("portfolio-trade-history","end-date","portfolio-trade-history/end-date",68061260),new cljs.core.Keyword("var","result","var/result",1415073996),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("portfolio-review","historical-beta-chart-data","portfolio-review/historical-beta-chart-data",-1077808147),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738),new cljs.core.Keyword("attribution","summary","attribution/summary",687462095),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("navigation","active-view","navigation/active-view",800211184),new cljs.core.Keyword("portfolio-review","historical-performance-chart-data","portfolio-review/historical-performance-chart-data",1185340209),new cljs.core.Keyword("var","history","var/history",-246458543),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("navigation","active-attribution","navigation/active-attribution",600082450),new cljs.core.Keyword("portfolio-review","summary-data","portfolio-review/summary-data",-1362975725),new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181),new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219),new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("portfolio-review","jensen-chart-data","portfolio-review/jensen-chart-data",-701618636),new cljs.core.Keyword("portfolio-trade-history","portfolio","portfolio-trade-history/portfolio",160136116),new cljs.core.Keyword("multiple-portfolio-attribution","shortcut","multiple-portfolio-attribution/shortcut",809107380),new cljs.core.Keyword("navigation","active-home","navigation/active-home",1949576148),new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),new cljs.core.Keyword(null,"positions-new","positions-new",1631706550),new cljs.core.Keyword("bond-price-history","price","bond-price-history/price",-601066058),new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("single-portfolio-attribution","table-filter","single-portfolio-attribution/table-filter",1757441687),new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("navigation","active-var","navigation/active-var",39797785),new cljs.core.Keyword("single-bond-trade-history","show-modal","single-bond-trade-history/show-modal",-1585088359),new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),new cljs.core.Keyword("portfolio-trade-history","data","portfolio-trade-history/data",27790297),new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127),new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334),new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("portfolio-review","contribution-chart-data","portfolio-review/contribution-chart-data",-581811845),new cljs.core.Keyword("portfolio-review","active-tab","portfolio-review/active-tab",1429822843),new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),new cljs.core.Keyword("single-portfolio-attribution","shortcut","single-portfolio-attribution/shortcut",-1711481988),new cljs.core.Keyword("trade-history","history","trade-history/history",1084885309),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("portfolio-trade-history","start-date","portfolio-trade-history/start-date",-1590289411),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),new cljs.core.Keyword("multiple-portfolio-attribution","table-filter","multiple-portfolio-attribution/table-filter",-9483585)],[(1),null,"OGEMCORD","Tree",cljs.core.PersistentVector.EMPTY,"None","No",cljs.core.PersistentVector.EMPTY,null,null,"One",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show","show",-576705889),false,new cljs.core.Keyword(null,"on-close","on-close",-761178394),null,new cljs.core.Keyword(null,"response","response",-1068424192),null], null),"Table",null,null,true,"undefined",null,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),false,true,false,cljs.core.PersistentVector.EMPTY,null,"Tree",cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),"undefined",cljs.core.PersistentVector.EMPTY,jasminegui.tools.int_to_gdate(cljs_time.core.today()),null,cljs.core.set(null),new cljs.core.Keyword(null,"quarter","quarter",-508147616),"Tree",null,null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"home","home",-74557309),null,null,(1),new cljs.core.Keyword(null,"summary","summary",380847952),null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),"OGEMCORD",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),null,"OGEMCORD",(1),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"daily-3y","daily-3y",-2143971824),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,"ytd","None",cljs.core.PersistentVector.EMPTY,(1),"One","Tree",new cljs.core.Keyword(null,"overview","overview",-435037267),false,"OGEMCORD",cljs.core.set(null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),new cljs.core.Keyword(null,"total-effect","total-effect",-967715775),cljs.core.PersistentArrayMap.EMPTY,null,new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.PersistentVector.EMPTY,(1),null,"OGEMCORD",jasminegui.tools.int_to_gdate((20200101)),new cljs.core.Keyword(null,"cembi","cembi",1924920241),"ytd",cljs.core.PersistentVector.EMPTY,true,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),cljs.core.PersistentVector.EMPTY]);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jasminegui.mount","initialize-db","jasminegui.mount/initialize-db",-1621527627),(function (_,___$1){
return jasminegui.mount.default_db;
}));
var seq__51530_51871 = cljs.core.seq(cljs.core.keys(jasminegui.mount.default_db));
var chunk__51531_51872 = null;
var count__51532_51873 = (0);
var i__51533_51874 = (0);
while(true){
if((i__51533_51874 < count__51532_51873)){
var k_51878 = chunk__51531_51872.cljs$core$IIndexed$_nth$arity$2(null,i__51533_51874);
var G__51538_51879 = k_51878;
var G__51539_51880 = ((function (seq__51530_51871,chunk__51531_51872,count__51532_51873,i__51533_51874,G__51538_51879,k_51878){
return (function (db){
return (k_51878.cljs$core$IFn$_invoke$arity$1 ? k_51878.cljs$core$IFn$_invoke$arity$1(db) : k_51878.call(null,db));
});})(seq__51530_51871,chunk__51531_51872,count__51532_51873,i__51533_51874,G__51538_51879,k_51878))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__51538_51879,G__51539_51880) : re_frame.core.reg_sub.call(null,G__51538_51879,G__51539_51880));


var G__51894 = seq__51530_51871;
var G__51895 = chunk__51531_51872;
var G__51896 = count__51532_51873;
var G__51897 = (i__51533_51874 + (1));
seq__51530_51871 = G__51894;
chunk__51531_51872 = G__51895;
count__51532_51873 = G__51896;
i__51533_51874 = G__51897;
continue;
} else {
var temp__5735__auto___51906 = cljs.core.seq(seq__51530_51871);
if(temp__5735__auto___51906){
var seq__51530_51907__$1 = temp__5735__auto___51906;
if(cljs.core.chunked_seq_QMARK_(seq__51530_51907__$1)){
var c__4556__auto___51908 = cljs.core.chunk_first(seq__51530_51907__$1);
var G__51909 = cljs.core.chunk_rest(seq__51530_51907__$1);
var G__51910 = c__4556__auto___51908;
var G__51911 = cljs.core.count(c__4556__auto___51908);
var G__51912 = (0);
seq__51530_51871 = G__51909;
chunk__51531_51872 = G__51910;
count__51532_51873 = G__51911;
i__51533_51874 = G__51912;
continue;
} else {
var k_51917 = cljs.core.first(seq__51530_51907__$1);
var G__51540_51919 = k_51917;
var G__51541_51920 = ((function (seq__51530_51871,chunk__51531_51872,count__51532_51873,i__51533_51874,G__51540_51919,k_51917,seq__51530_51907__$1,temp__5735__auto___51906){
return (function (db){
return (k_51917.cljs$core$IFn$_invoke$arity$1 ? k_51917.cljs$core$IFn$_invoke$arity$1(db) : k_51917.call(null,db));
});})(seq__51530_51871,chunk__51531_51872,count__51532_51873,i__51533_51874,G__51540_51919,k_51917,seq__51530_51907__$1,temp__5735__auto___51906))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__51540_51919,G__51541_51920) : re_frame.core.reg_sub.call(null,G__51540_51919,G__51541_51920));


var G__51928 = cljs.core.next(seq__51530_51907__$1);
var G__51929 = null;
var G__51930 = (0);
var G__51931 = (0);
seq__51530_51871 = G__51928;
chunk__51531_51872 = G__51929;
count__51532_51873 = G__51930;
i__51533_51874 = G__51931;
continue;
}
} else {
}
}
break;
}
var seq__51546_51932 = cljs.core.seq(cljs.core.PersistentVector.fromArray([new cljs.core.Keyword("navigation","active-view","navigation/active-view",800211184),new cljs.core.Keyword("navigation","active-home","navigation/active-home",1949576148),new cljs.core.Keyword("navigation","active-var","navigation/active-var",39797785),new cljs.core.Keyword("navigation","active-attribution","navigation/active-attribution",600082450),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738),new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334),new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679),new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),new cljs.core.Keyword("single-portfolio-attribution","table-filter","single-portfolio-attribution/table-filter",1757441687),new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047),new cljs.core.Keyword("multiple-portfolio-attribution","display-style","multiple-portfolio-attribution/display-style",-767260119),new cljs.core.Keyword("multiple-portfolio-attribution","field-number","multiple-portfolio-attribution/field-number",-1780989148),new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),new cljs.core.Keyword("multiple-portfolio-attribution","field-two","multiple-portfolio-attribution/field-two",-311759422),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),new cljs.core.Keyword("multiple-portfolio-attribution","hide-zero-holdings","multiple-portfolio-attribution/hide-zero-holdings",1677138723),new cljs.core.Keyword("multiple-portfolio-attribution","shortcut","multiple-portfolio-attribution/shortcut",809107380),new cljs.core.Keyword("multiple-portfolio-attribution","table-filter","multiple-portfolio-attribution/table-filter",-9483585),new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705),new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),new cljs.core.Keyword("attribution","summary","attribution/summary",687462095),new cljs.core.Keyword("single-bond-trade-history","show-flat-modal","single-bond-trade-history/show-flat-modal",1072491400),new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181),new cljs.core.Keyword("single-bond-trade-history","show-modal","single-bond-trade-history/show-modal",-1585088359),new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127),new cljs.core.Keyword("single-bond-trade-history","bond","single-bond-trade-history/bond",2015871973),new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865),new cljs.core.Keyword("portfolio-trade-history","portfolio","portfolio-trade-history/portfolio",160136116),new cljs.core.Keyword("portfolio-trade-history","start-date","portfolio-trade-history/start-date",-1590289411),new cljs.core.Keyword("portfolio-trade-history","end-date","portfolio-trade-history/end-date",68061260),new cljs.core.Keyword("portfolio-trade-history","performance","portfolio-trade-history/performance",-2029881566),new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321),new cljs.core.Keyword("portfolio-review","active-tab","portfolio-review/active-tab",1429822843),new cljs.core.Keyword("portfolio-review","summary-data","portfolio-review/summary-data",-1362975725),new cljs.core.Keyword("portfolio-review","contribution-chart-data","portfolio-review/contribution-chart-data",-581811845),new cljs.core.Keyword("portfolio-review","alpha-chart-data","portfolio-review/alpha-chart-data",-243291168),new cljs.core.Keyword("portfolio-review","jensen-chart-data","portfolio-review/jensen-chart-data",-701618636),new cljs.core.Keyword("portfolio-review","marginal-beta-chart-data","portfolio-review/marginal-beta-chart-data",40550601),new cljs.core.Keyword("portfolio-review","historical-beta-chart-data","portfolio-review/historical-beta-chart-data",-1077808147),new cljs.core.Keyword("portfolio-review","historical-performance-chart-data","portfolio-review/historical-performance-chart-data",1185340209),new cljs.core.Keyword("betas","table","betas/table",-390525241),new cljs.core.Keyword("bond-price-history","price","bond-price-history/price",-601066058),new cljs.core.Keyword("bond-price-history","name","bond-price-history/name",-1471022397)], true));
var chunk__51547_51934 = null;
var count__51548_51936 = (0);
var i__51549_51937 = (0);
while(true){
if((i__51549_51937 < count__51548_51936)){
var k_51963 = chunk__51547_51934.cljs$core$IIndexed$_nth$arity$2(null,i__51549_51937);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_51963,((function (seq__51546_51932,chunk__51547_51934,count__51548_51936,i__51549_51937,k_51963){
return (function (db,p__51567){
var vec__51568 = p__51567;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51568,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51568,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_51963,data);
});})(seq__51546_51932,chunk__51547_51934,count__51548_51936,i__51549_51937,k_51963))
);


var G__51968 = seq__51546_51932;
var G__51969 = chunk__51547_51934;
var G__51970 = count__51548_51936;
var G__51971 = (i__51549_51937 + (1));
seq__51546_51932 = G__51968;
chunk__51547_51934 = G__51969;
count__51548_51936 = G__51970;
i__51549_51937 = G__51971;
continue;
} else {
var temp__5735__auto___51972 = cljs.core.seq(seq__51546_51932);
if(temp__5735__auto___51972){
var seq__51546_51973__$1 = temp__5735__auto___51972;
if(cljs.core.chunked_seq_QMARK_(seq__51546_51973__$1)){
var c__4556__auto___51974 = cljs.core.chunk_first(seq__51546_51973__$1);
var G__51975 = cljs.core.chunk_rest(seq__51546_51973__$1);
var G__51976 = c__4556__auto___51974;
var G__51977 = cljs.core.count(c__4556__auto___51974);
var G__51978 = (0);
seq__51546_51932 = G__51975;
chunk__51547_51934 = G__51976;
count__51548_51936 = G__51977;
i__51549_51937 = G__51978;
continue;
} else {
var k_51983 = cljs.core.first(seq__51546_51973__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_51983,((function (seq__51546_51932,chunk__51547_51934,count__51548_51936,i__51549_51937,k_51983,seq__51546_51973__$1,temp__5735__auto___51972){
return (function (db,p__51571){
var vec__51572 = p__51571;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51572,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51572,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_51983,data);
});})(seq__51546_51932,chunk__51547_51934,count__51548_51936,i__51549_51937,k_51983,seq__51546_51973__$1,temp__5735__auto___51972))
);


var G__51990 = cljs.core.next(seq__51546_51973__$1);
var G__51991 = null;
var G__51992 = (0);
var G__51993 = (0);
seq__51546_51932 = G__51990;
chunk__51547_51934 = G__51991;
count__51548_51936 = G__51992;
i__51549_51937 = G__51993;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"positions","positions",-1380538434),(function (db,p__51575){
var vec__51576 = p__51575;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51576,(0),null);
var positions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51576,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"positions","positions",-1380538434),positions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"positions-new","positions-new",1631706550),(function (db,p__51579){
var vec__51580 = p__51579;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51580,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51580,(1),null);
var positions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51580,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-new","positions-new",1631706550),portfolio], null),positions),new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),(function (db,p__51583){
var vec__51584 = p__51583;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51584,(0),null);
var portfolios = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51584,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),portfolios,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),cljs.core.set(portfolios),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),cljs.core.set(portfolios)], 0));
}));
var seq__51587_52019 = cljs.core.seq(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219)], null));
var chunk__51588_52020 = null;
var count__51589_52021 = (0);
var i__51590_52022 = (0);
while(true){
if((i__51590_52022 < count__51589_52021)){
var k_52028 = chunk__51588_52020.cljs$core$IIndexed$_nth$arity$2(null,i__51590_52022);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_52028,((function (seq__51587_52019,chunk__51588_52020,count__51589_52021,i__51590_52022,k_52028){
return (function (db,p__51600){
var vec__51601 = p__51600;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51601,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51601,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51601,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_52028,id], null),f);
});})(seq__51587_52019,chunk__51588_52020,count__51589_52021,i__51590_52022,k_52028))
);


var G__52098 = seq__51587_52019;
var G__52099 = chunk__51588_52020;
var G__52100 = count__51589_52021;
var G__52101 = (i__51590_52022 + (1));
seq__51587_52019 = G__52098;
chunk__51588_52020 = G__52099;
count__51589_52021 = G__52100;
i__51590_52022 = G__52101;
continue;
} else {
var temp__5735__auto___52104 = cljs.core.seq(seq__51587_52019);
if(temp__5735__auto___52104){
var seq__51587_52110__$1 = temp__5735__auto___52104;
if(cljs.core.chunked_seq_QMARK_(seq__51587_52110__$1)){
var c__4556__auto___52112 = cljs.core.chunk_first(seq__51587_52110__$1);
var G__52113 = cljs.core.chunk_rest(seq__51587_52110__$1);
var G__52114 = c__4556__auto___52112;
var G__52115 = cljs.core.count(c__4556__auto___52112);
var G__52116 = (0);
seq__51587_52019 = G__52113;
chunk__51588_52020 = G__52114;
count__51589_52021 = G__52115;
i__51590_52022 = G__52116;
continue;
} else {
var k_52117 = cljs.core.first(seq__51587_52110__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_52117,((function (seq__51587_52019,chunk__51588_52020,count__51589_52021,i__51590_52022,k_52117,seq__51587_52110__$1,temp__5735__auto___52104){
return (function (db,p__51604){
var vec__51605 = p__51604;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51605,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51605,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51605,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_52117,id], null),f);
});})(seq__51587_52019,chunk__51588_52020,count__51589_52021,i__51590_52022,k_52117,seq__51587_52110__$1,temp__5735__auto___52104))
);


var G__52158 = cljs.core.next(seq__51587_52110__$1);
var G__52159 = null;
var G__52160 = (0);
var G__52161 = (0);
seq__51587_52019 = G__52158;
chunk__51588_52020 = G__52159;
count__51589_52021 = G__52160;
i__51590_52022 = G__52161;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),(function (db,p__51608){
var vec__51609 = p__51608;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51609,(0),null);
var qt_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51609,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),clojure.string.replace(qt_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),(function (db,p__51612){
var vec__51613 = p__51612;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51613,(0),null);
var attribution_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51613,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),clojure.string.replace(attribution_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),(function (db,p__51616){
var vec__51617 = p__51616;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51617,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51617,(1),null);
var G__51620 = snapshot;
switch (G__51620) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51620)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cycle-shortcut","cycle-shortcut",-1617058214),(function (db,p__51621){
var vec__51622 = p__51621;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51622,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51622,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51622,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword("navigation","active-home","navigation/active-home",1949576148).cljs$core$IFn$_invoke$arity$1(db)),"-risk/shortcut"].join(''));
var shortcut_value = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
if((shortcut_value < (4))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(shortcut_value + (1)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(1));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tree-table","tree-table",-1263002012),(function (db,p__51625){
var vec__51626 = p__51625;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51626,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51626,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51626,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword("navigation","active-home","navigation/active-home",1949576148).cljs$core$IFn$_invoke$arity$1(db)),"-risk/display-style"].join(''));
var G__51629 = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
switch (G__51629) {
case "Tree":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Table");

break;
case "Table":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Tree");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51629)].join('')));

}
}));
jasminegui.mount.http_get_dispatch = (function jasminegui$mount$http_get_dispatch(request){
var c__41764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41765__auto__ = (function (){var switch__41719__auto__ = (function (state_51658){
var state_val_51659 = (state_51658[(1)]);
if((state_val_51659 === (1))){
var inst_51630 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_51631 = cljs_http.client.get(inst_51630);
var state_51658__$1 = state_51658;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51658__$1,(2),inst_51631);
} else {
if((state_val_51659 === (2))){
var inst_51633 = (state_51658[(2)]);
var inst_51634 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_51635 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_51658__$1 = (function (){var statearr_51660 = state_51658;
(statearr_51660[(7)] = inst_51634);

(statearr_51660[(8)] = inst_51633);

return statearr_51660;
})();
if(cljs.core.truth_(inst_51635)){
var statearr_51661_52221 = state_51658__$1;
(statearr_51661_52221[(1)] = (3));

} else {
var statearr_51662_52222 = state_51658__$1;
(statearr_51662_52222[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51659 === (3))){
var inst_51633 = (state_51658[(8)]);
var inst_51637 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_51633);
var inst_51638 = JSON.parse(inst_51637);
var inst_51639 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_51638,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_51658__$1 = state_51658;
var statearr_51663_52228 = state_51658__$1;
(statearr_51663_52228[(2)] = inst_51639);

(statearr_51663_52228[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51659 === (4))){
var inst_51633 = (state_51658[(8)]);
var inst_51641 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_51633);
var state_51658__$1 = state_51658;
var statearr_51664_52239 = state_51658__$1;
(statearr_51664_52239[(2)] = inst_51641);

(statearr_51664_52239[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51659 === (5))){
var inst_51634 = (state_51658[(7)]);
var inst_51643 = (state_51658[(2)]);
var inst_51644 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_51634,inst_51643);
var inst_51645 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_51644) : re_frame.core.dispatch.call(null,inst_51644));
var inst_51646 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_51658__$1 = (function (){var statearr_51665 = state_51658;
(statearr_51665[(9)] = inst_51645);

return statearr_51665;
})();
if(cljs.core.truth_(inst_51646)){
var statearr_51666_52247 = state_51658__$1;
(statearr_51666_52247[(1)] = (6));

} else {
var statearr_51667_52249 = state_51658__$1;
(statearr_51667_52249[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51659 === (6))){
var inst_51648 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51649 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_51650 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_51651 = [inst_51649,inst_51650];
var inst_51652 = (new cljs.core.PersistentVector(null,2,(5),inst_51648,inst_51651,null));
var inst_51653 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_51652) : re_frame.core.dispatch.call(null,inst_51652));
var state_51658__$1 = state_51658;
var statearr_51668_52258 = state_51658__$1;
(statearr_51668_52258[(2)] = inst_51653);

(statearr_51668_52258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51659 === (7))){
var state_51658__$1 = state_51658;
var statearr_51669_52260 = state_51658__$1;
(statearr_51669_52260[(2)] = null);

(statearr_51669_52260[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51659 === (8))){
var inst_51656 = (state_51658[(2)]);
var state_51658__$1 = state_51658;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51658__$1,inst_51656);
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
var statearr_51670 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51670[(0)] = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__);

(statearr_51670[(1)] = (1));

return statearr_51670;
});
var jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1 = (function (state_51658){
while(true){
var ret_value__41721__auto__ = (function (){try{while(true){
var result__41722__auto__ = switch__41719__auto__(state_51658);
if(cljs.core.keyword_identical_QMARK_(result__41722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41722__auto__;
}
break;
}
}catch (e51671){if((e51671 instanceof Object)){
var ex__41723__auto__ = e51671;
var statearr_51672_52271 = state_51658;
(statearr_51672_52271[(5)] = ex__41723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51671;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52277 = state_51658;
state_51658 = G__52277;
continue;
} else {
return ret_value__41721__auto__;
}
break;
}
});
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__ = function(state_51658){
switch(arguments.length){
case 0:
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____0.call(this);
case 1:
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1.call(this,state_51658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____0;
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1;
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__;
})()
})();
var state__41766__auto__ = (function (){var statearr_51673 = (f__41765__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41765__auto__.cljs$core$IFn$_invoke$arity$0() : f__41765__auto__.call(null));
(statearr_51673[(6)] = c__41764__auto__);

return statearr_51673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41766__auto__);
}));

return c__41764__auto__;
});
var G__51674_52283 = new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518);
var G__51675_52284 = jasminegui.mount.http_get_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__51674_52283,G__51675_52284) : re_frame.core.reg_fx.call(null,G__51674_52283,G__51675_52284));
jasminegui.mount.http_post_dispatch = (function jasminegui$mount$http_post_dispatch(request){
var c__41764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41765__auto__ = (function (){var switch__41719__auto__ = (function (state_51708){
var state_val_51709 = (state_51708[(1)]);
if((state_val_51709 === (1))){
var inst_51676 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_51677 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_51678 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
var inst_51679 = [inst_51678];
var inst_51680 = cljs.core.PersistentHashMap.fromArrays(inst_51677,inst_51679);
var inst_51681 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_51676,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_51680], 0));
var state_51708__$1 = state_51708;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51708__$1,(2),inst_51681);
} else {
if((state_val_51709 === (2))){
var inst_51683 = (state_51708[(2)]);
var inst_51684 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_51685 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_51708__$1 = (function (){var statearr_51710 = state_51708;
(statearr_51710[(7)] = inst_51684);

(statearr_51710[(8)] = inst_51683);

return statearr_51710;
})();
if(cljs.core.truth_(inst_51685)){
var statearr_51711_52301 = state_51708__$1;
(statearr_51711_52301[(1)] = (3));

} else {
var statearr_51712_52302 = state_51708__$1;
(statearr_51712_52302[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51709 === (3))){
var inst_51683 = (state_51708[(8)]);
var inst_51687 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_51683);
var inst_51688 = JSON.parse(inst_51687);
var inst_51689 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_51688,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_51708__$1 = state_51708;
var statearr_51713_52303 = state_51708__$1;
(statearr_51713_52303[(2)] = inst_51689);

(statearr_51713_52303[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51709 === (4))){
var inst_51683 = (state_51708[(8)]);
var inst_51691 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_51683);
var state_51708__$1 = state_51708;
var statearr_51714_52304 = state_51708__$1;
(statearr_51714_52304[(2)] = inst_51691);

(statearr_51714_52304[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51709 === (5))){
var inst_51684 = (state_51708[(7)]);
var inst_51693 = (state_51708[(2)]);
var inst_51694 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_51684,inst_51693);
var inst_51695 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_51694) : re_frame.core.dispatch.call(null,inst_51694));
var inst_51696 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_51708__$1 = (function (){var statearr_51715 = state_51708;
(statearr_51715[(9)] = inst_51695);

return statearr_51715;
})();
if(cljs.core.truth_(inst_51696)){
var statearr_51716_52307 = state_51708__$1;
(statearr_51716_52307[(1)] = (6));

} else {
var statearr_51717_52308 = state_51708__$1;
(statearr_51717_52308[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51709 === (6))){
var inst_51698 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51699 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_51700 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_51701 = [inst_51699,inst_51700];
var inst_51702 = (new cljs.core.PersistentVector(null,2,(5),inst_51698,inst_51701,null));
var inst_51703 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_51702) : re_frame.core.dispatch.call(null,inst_51702));
var state_51708__$1 = state_51708;
var statearr_51718_52320 = state_51708__$1;
(statearr_51718_52320[(2)] = inst_51703);

(statearr_51718_52320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51709 === (7))){
var state_51708__$1 = state_51708;
var statearr_51719_52328 = state_51708__$1;
(statearr_51719_52328[(2)] = null);

(statearr_51719_52328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51709 === (8))){
var inst_51706 = (state_51708[(2)]);
var state_51708__$1 = state_51708;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51708__$1,inst_51706);
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
var statearr_51720 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51720[(0)] = jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__);

(statearr_51720[(1)] = (1));

return statearr_51720;
});
var jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____1 = (function (state_51708){
while(true){
var ret_value__41721__auto__ = (function (){try{while(true){
var result__41722__auto__ = switch__41719__auto__(state_51708);
if(cljs.core.keyword_identical_QMARK_(result__41722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41722__auto__;
}
break;
}
}catch (e51721){if((e51721 instanceof Object)){
var ex__41723__auto__ = e51721;
var statearr_51722_52331 = state_51708;
(statearr_51722_52331[(5)] = ex__41723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51721;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52332 = state_51708;
state_51708 = G__52332;
continue;
} else {
return ret_value__41721__auto__;
}
break;
}
});
jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__ = function(state_51708){
switch(arguments.length){
case 0:
return jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____0.call(this);
case 1:
return jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____1.call(this,state_51708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____0;
jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____1;
return jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__;
})()
})();
var state__41766__auto__ = (function (){var statearr_51723 = (f__41765__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41765__auto__.cljs$core$IFn$_invoke$arity$0() : f__41765__auto__.call(null));
(statearr_51723[(6)] = c__41764__auto__);

return statearr_51723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41766__auto__);
}));

return c__41764__auto__;
});
var G__51724_52334 = new cljs.core.Keyword(null,"http-post-dispatch","http-post-dispatch",2138865017);
var G__51725_52335 = jasminegui.mount.http_post_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__51724_52334,G__51725_52335) : re_frame.core.reg_fx.call(null,G__51724_52334,G__51725_52335));
jasminegui.mount.simple_http_get_events = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-positions","get-positions",1610972586),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"positions",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"positions","positions",-1380538434)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-rating-to-score","get-rating-to-score",391912155),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"rating-to-score",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"portfolios",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-pivoted-positions","get-pivoted-positions",2145025131),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"pivoted-positions",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-total-positions","get-total-positions",-698807167),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"total-positions",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-qt-date","get-qt-date",-1072332881),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"qt-date",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-var-proxies","get-var-proxies",1252506215),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"var-proxies",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-var-dates","get-var-dates",-1039695287),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"var-dates",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword("var","dates","var/dates",-1599746364)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-betas","get-betas",-284291273),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"beta-table",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword("betas","table","betas/table",-390525241)], null)], null);
var seq__51726_52339 = cljs.core.seq(jasminegui.mount.simple_http_get_events);
var chunk__51727_52340 = null;
var count__51728_52341 = (0);
var i__51729_52342 = (0);
while(true){
if((i__51729_52342 < count__51728_52341)){
var line_52344 = chunk__51727_52340.cljs$core$IIndexed$_nth$arity$2(null,i__51729_52342);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-key","get-key",1436017019).cljs$core$IFn$_invoke$arity$1(line_52344),((function (seq__51726_52339,chunk__51727_52340,count__51728_52341,i__51729_52342,line_52344){
return (function (p__51744,p__51745){
var map__51746 = p__51744;
var map__51746__$1 = (((((!((map__51746 == null))))?(((((map__51746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51746):map__51746);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51746__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51747 = p__51745;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51747,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url-tail","url-tail",144006528).cljs$core$IFn$_invoke$arity$1(line_52344))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dis-key","dis-key",842897221).cljs$core$IFn$_invoke$arity$1(line_52344)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
});})(seq__51726_52339,chunk__51727_52340,count__51728_52341,i__51729_52342,line_52344))
);


var G__52351 = seq__51726_52339;
var G__52352 = chunk__51727_52340;
var G__52353 = count__51728_52341;
var G__52354 = (i__51729_52342 + (1));
seq__51726_52339 = G__52351;
chunk__51727_52340 = G__52352;
count__51728_52341 = G__52353;
i__51729_52342 = G__52354;
continue;
} else {
var temp__5735__auto___52359 = cljs.core.seq(seq__51726_52339);
if(temp__5735__auto___52359){
var seq__51726_52360__$1 = temp__5735__auto___52359;
if(cljs.core.chunked_seq_QMARK_(seq__51726_52360__$1)){
var c__4556__auto___52361 = cljs.core.chunk_first(seq__51726_52360__$1);
var G__52362 = cljs.core.chunk_rest(seq__51726_52360__$1);
var G__52363 = c__4556__auto___52361;
var G__52364 = cljs.core.count(c__4556__auto___52361);
var G__52365 = (0);
seq__51726_52339 = G__52362;
chunk__51727_52340 = G__52363;
count__51728_52341 = G__52364;
i__51729_52342 = G__52365;
continue;
} else {
var line_52366 = cljs.core.first(seq__51726_52360__$1);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-key","get-key",1436017019).cljs$core$IFn$_invoke$arity$1(line_52366),((function (seq__51726_52339,chunk__51727_52340,count__51728_52341,i__51729_52342,line_52366,seq__51726_52360__$1,temp__5735__auto___52359){
return (function (p__51751,p__51752){
var map__51753 = p__51751;
var map__51753__$1 = (((((!((map__51753 == null))))?(((((map__51753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51753):map__51753);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51753__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51754 = p__51752;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51754,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url-tail","url-tail",144006528).cljs$core$IFn$_invoke$arity$1(line_52366))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dis-key","dis-key",842897221).cljs$core$IFn$_invoke$arity$1(line_52366)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
});})(seq__51726_52339,chunk__51727_52340,count__51728_52341,i__51729_52342,line_52366,seq__51726_52360__$1,temp__5735__auto___52359))
);


var G__52375 = cljs.core.next(seq__51726_52360__$1);
var G__52376 = null;
var G__52377 = (0);
var G__52378 = (0);
seq__51726_52339 = G__52375;
chunk__51727_52340 = G__52376;
count__51728_52341 = G__52377;
i__51729_52342 = G__52378;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions-new","get-positions-new",1597842964),(function (p__51758,p__51759){
var map__51760 = p__51758;
var map__51760__$1 = (((((!((map__51760 == null))))?(((((map__51760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51760):map__51760);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51760__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51761 = p__51759;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51761,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51761,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"positions-new?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-new","positions-new",1631706550),portfolio], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-data","get-var-data",837806576),(function (p__51765,p__51766){
var map__51767 = p__51765;
var map__51767__$1 = (((((!((map__51767 == null))))?(((((map__51767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51767):map__51767);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51767__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51768 = p__51766;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51768,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51768,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"var-data?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-var","get-portfolio-var",1001711662),(function (p__51772,p__51773){
var map__51774 = p__51772;
var map__51774__$1 = (((((!((map__51774 == null))))?(((((map__51774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51774):map__51774);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51774__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51775 = p__51773;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51775,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51775,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),portfolio),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"var-data?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-attribution-date","get-attribution-date",-1329272944),(function (p__51779,p__51780){
var map__51781 = p__51779;
var map__51781__$1 = (((((!((map__51781 == null))))?(((((map__51781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51781):map__51781);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51781__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51782 = p__51780;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51782,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=attribution-date"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),false], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-single-attribution","get-single-attribution",-1620108505),(function (p__51786,p__51787){
var map__51788 = p__51786;
var map__51788__$1 = (((((!((map__51788 == null))))?(((((map__51788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51788):map__51788);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51788__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51789 = p__51787;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51789,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51789,(1),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51789,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-single-attribution-portfolio","change-single-attribution-portfolio",1766745939),(function (p__51793,p__51794){
var map__51795 = p__51793;
var map__51795__$1 = (((((!((map__51795 == null))))?(((((map__51795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51795):map__51795);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51795__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51796 = p__51794;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51796,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51796,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),portfolio),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450).cljs$core$IFn$_invoke$arity$1(db))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-single-attribution-period","change-single-attribution-period",860703642),(function (p__51800,p__51801){
var map__51802 = p__51800;
var map__51802__$1 = (((((!((map__51802 == null))))?(((((map__51802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51802):map__51802);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51802__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51803 = p__51801;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51803,(0),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51803,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),period),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521).cljs$core$IFn$_invoke$arity$1(db)),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-multiple-attribution","get-multiple-attribution",1245740943),(function (p__51807,p__51808){
var map__51809 = p__51807;
var map__51809__$1 = (((((!((map__51809 == null))))?(((((map__51809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51809):map__51809);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51809__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51810 = p__51808;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51810,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51810,(1),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51810,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=multiple-portfolio&target=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-multiple-attribution-target","change-multiple-attribution-target",777460289),(function (p__51814,p__51815){
var map__51816 = p__51814;
var map__51816__$1 = (((((!((map__51816 == null))))?(((((map__51816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51816):map__51816);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51816__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51817 = p__51815;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51817,(0),null);
var ktarget = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51817,(1),null);
var target = clojure.string.replace(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ktarget,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)),"-"," ");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),ktarget),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=multiple-portfolio&target=",target,"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154).cljs$core$IFn$_invoke$arity$1(db))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-multiple-attribution-period","change-multiple-attribution-period",590435537),(function (p__51821,p__51822){
var map__51823 = p__51821;
var map__51823__$1 = (((((!((map__51823 == null))))?(((((map__51823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51823):map__51823);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51823__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51824 = p__51822;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51824,(0),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51824,(1),null);
var target = clojure.string.replace(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)),"-"," ");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),period),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=multiple-portfolio&target=",target,"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-attribution-summary","get-attribution-summary",-27760654),(function (p__51828,p__51829){
var map__51830 = p__51828;
var map__51830__$1 = (((((!((map__51830 == null))))?(((((map__51830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51830):map__51830);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51830__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51831 = p__51829;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51831,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=summary"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("attribution","summary","attribution/summary",687462095)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));

//# sourceMappingURL=jasminegui.mount.js.map
