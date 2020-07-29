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
jasminegui.mount.default_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword("portfolio-review","alpha-chart-data","portfolio-review/alpha-chart-data",-243291168),new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679),new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705),new cljs.core.Keyword("multiple-portfolio-attribution","field-two","multiple-portfolio-attribution/field-two",-311759422),new cljs.core.Keyword("portfolio-trade-history","performance","portfolio-trade-history/performance",-2029881566),new cljs.core.Keyword("bond-price-history","name","bond-price-history/name",-1471022397),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword("multiple-portfolio-attribution","field-number","multiple-portfolio-attribution/field-number",-1780989148),new cljs.core.Keyword(null,"ex-emcd-portfolios","ex-emcd-portfolios",1425006500),new cljs.core.Keyword("navigation","success-modal","navigation/success-modal",533446693),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("single-bond-trade-history","bond","single-bond-trade-history/bond",2015871973),new cljs.core.Keyword("trade-history","active-bond","trade-history/active-bond",-1419462650),new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),new cljs.core.Keyword("betas","table","betas/table",-390525241),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-bond-trade-history","show-flat-modal","single-bond-trade-history/show-flat-modal",1072491400),new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047),new cljs.core.Keyword("portfolio-review","marginal-beta-chart-data","portfolio-review/marginal-beta-chart-data",40550601),new cljs.core.Keyword("multiple-portfolio-attribution","display-style","multiple-portfolio-attribution/display-style",-767260119),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword("esg","selected-companies","esg/selected-companies",-382224567),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword("esg","refinitiv-ids","esg/refinitiv-ids",13812138),new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("portfolio-trade-history","end-date","portfolio-trade-history/end-date",68061260),new cljs.core.Keyword("var","result","var/result",1415073996),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("portfolio-review","historical-beta-chart-data","portfolio-review/historical-beta-chart-data",-1077808147),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738),new cljs.core.Keyword("attribution","summary","attribution/summary",687462095),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("navigation","active-view","navigation/active-view",800211184),new cljs.core.Keyword("portfolio-review","historical-performance-chart-data","portfolio-review/historical-performance-chart-data",1185340209),new cljs.core.Keyword("var","history","var/history",-246458543),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("navigation","active-attribution","navigation/active-attribution",600082450),new cljs.core.Keyword("portfolio-review","summary-data","portfolio-review/summary-data",-1362975725),new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181),new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219),new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("portfolio-review","jensen-chart-data","portfolio-review/jensen-chart-data",-701618636),new cljs.core.Keyword("portfolio-trade-history","portfolio","portfolio-trade-history/portfolio",160136116),new cljs.core.Keyword("multiple-portfolio-attribution","shortcut","multiple-portfolio-attribution/shortcut",809107380),new cljs.core.Keyword("navigation","active-home","navigation/active-home",1949576148),new cljs.core.Keyword("esg","active-home","esg/active-home",53652341),new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),new cljs.core.Keyword(null,"positions-new","positions-new",1631706550),new cljs.core.Keyword("bond-price-history","price","bond-price-history/price",-601066058),new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("single-portfolio-attribution","table-filter","single-portfolio-attribution/table-filter",1757441687),new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("navigation","active-var","navigation/active-var",39797785),new cljs.core.Keyword("single-bond-trade-history","show-modal","single-bond-trade-history/show-modal",-1585088359),new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),new cljs.core.Keyword("portfolio-trade-history","data","portfolio-trade-history/data",27790297),new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127),new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334),new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("portfolio-review","contribution-chart-data","portfolio-review/contribution-chart-data",-581811845),new cljs.core.Keyword("portfolio-review","active-tab","portfolio-review/active-tab",1429822843),new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),new cljs.core.Keyword("single-portfolio-attribution","shortcut","single-portfolio-attribution/shortcut",-1711481988),new cljs.core.Keyword("trade-history","history","trade-history/history",1084885309),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("portfolio-trade-history","start-date","portfolio-trade-history/start-date",-1590289411),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),new cljs.core.Keyword("multiple-portfolio-attribution","table-filter","multiple-portfolio-attribution/table-filter",-9483585)],[(1),null,"OGEMCORD","Tree",cljs.core.PersistentVector.EMPTY,"None","No",cljs.core.PersistentVector.EMPTY,null,null,"One",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show","show",-576705889),false,new cljs.core.Keyword(null,"on-close","on-close",-761178394),null,new cljs.core.Keyword(null,"response","response",-1068424192),null], null),"Table",null,null,true,"undefined",null,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),false,true,false,cljs.core.PersistentVector.EMPTY,null,"Tree",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),null,"undefined",cljs.core.PersistentVector.EMPTY,jasminegui.tools.int_to_gdate(cljs_time.core.today()),null,cljs.core.set(null),new cljs.core.Keyword(null,"quarter","quarter",-508147616),"Tree",null,null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"home","home",-74557309),null,null,(1),new cljs.core.Keyword(null,"summary","summary",380847952),null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),"OGEMCORD",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),null,"OGEMCORD",(1),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"find-issuers","find-issuers",453068731),new cljs.core.Keyword(null,"daily-3y","daily-3y",-2143971824),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,"ytd","None",cljs.core.PersistentVector.EMPTY,(1),"One","Tree",new cljs.core.Keyword(null,"overview","overview",-435037267),false,"OGEMCORD",cljs.core.set(null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),new cljs.core.Keyword(null,"total-effect","total-effect",-967715775),cljs.core.PersistentArrayMap.EMPTY,null,new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.PersistentVector.EMPTY,(1),null,"OGEMCORD",jasminegui.tools.int_to_gdate((20200101)),new cljs.core.Keyword(null,"cembi","cembi",1924920241),"ytd",cljs.core.PersistentVector.EMPTY,true,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),cljs.core.PersistentVector.EMPTY]);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jasminegui.mount","initialize-db","jasminegui.mount/initialize-db",-1621527627),(function (_,___$1){
return jasminegui.mount.default_db;
}));
var seq__92554_92847 = cljs.core.seq(cljs.core.keys(jasminegui.mount.default_db));
var chunk__92555_92848 = null;
var count__92556_92849 = (0);
var i__92557_92850 = (0);
while(true){
if((i__92557_92850 < count__92556_92849)){
var k_92851 = chunk__92555_92848.cljs$core$IIndexed$_nth$arity$2(null,i__92557_92850);
var G__92564_92852 = k_92851;
var G__92565_92853 = ((function (seq__92554_92847,chunk__92555_92848,count__92556_92849,i__92557_92850,G__92564_92852,k_92851){
return (function (db){
return (k_92851.cljs$core$IFn$_invoke$arity$1 ? k_92851.cljs$core$IFn$_invoke$arity$1(db) : k_92851.call(null,db));
});})(seq__92554_92847,chunk__92555_92848,count__92556_92849,i__92557_92850,G__92564_92852,k_92851))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__92564_92852,G__92565_92853) : re_frame.core.reg_sub.call(null,G__92564_92852,G__92565_92853));


var G__92854 = seq__92554_92847;
var G__92855 = chunk__92555_92848;
var G__92856 = count__92556_92849;
var G__92857 = (i__92557_92850 + (1));
seq__92554_92847 = G__92854;
chunk__92555_92848 = G__92855;
count__92556_92849 = G__92856;
i__92557_92850 = G__92857;
continue;
} else {
var temp__5735__auto___92859 = cljs.core.seq(seq__92554_92847);
if(temp__5735__auto___92859){
var seq__92554_92862__$1 = temp__5735__auto___92859;
if(cljs.core.chunked_seq_QMARK_(seq__92554_92862__$1)){
var c__4556__auto___92864 = cljs.core.chunk_first(seq__92554_92862__$1);
var G__92870 = cljs.core.chunk_rest(seq__92554_92862__$1);
var G__92871 = c__4556__auto___92864;
var G__92872 = cljs.core.count(c__4556__auto___92864);
var G__92873 = (0);
seq__92554_92847 = G__92870;
chunk__92555_92848 = G__92871;
count__92556_92849 = G__92872;
i__92557_92850 = G__92873;
continue;
} else {
var k_92886 = cljs.core.first(seq__92554_92862__$1);
var G__92566_92888 = k_92886;
var G__92567_92889 = ((function (seq__92554_92847,chunk__92555_92848,count__92556_92849,i__92557_92850,G__92566_92888,k_92886,seq__92554_92862__$1,temp__5735__auto___92859){
return (function (db){
return (k_92886.cljs$core$IFn$_invoke$arity$1 ? k_92886.cljs$core$IFn$_invoke$arity$1(db) : k_92886.call(null,db));
});})(seq__92554_92847,chunk__92555_92848,count__92556_92849,i__92557_92850,G__92566_92888,k_92886,seq__92554_92862__$1,temp__5735__auto___92859))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__92566_92888,G__92567_92889) : re_frame.core.reg_sub.call(null,G__92566_92888,G__92567_92889));


var G__92908 = cljs.core.next(seq__92554_92862__$1);
var G__92909 = null;
var G__92910 = (0);
var G__92911 = (0);
seq__92554_92847 = G__92908;
chunk__92555_92848 = G__92909;
count__92556_92849 = G__92910;
i__92557_92850 = G__92911;
continue;
}
} else {
}
}
break;
}
var seq__92568_92923 = cljs.core.seq(cljs.core.PersistentVector.fromArray([new cljs.core.Keyword("navigation","active-view","navigation/active-view",800211184),new cljs.core.Keyword("navigation","active-home","navigation/active-home",1949576148),new cljs.core.Keyword("navigation","active-var","navigation/active-var",39797785),new cljs.core.Keyword("navigation","active-attribution","navigation/active-attribution",600082450),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738),new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334),new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679),new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),new cljs.core.Keyword("single-portfolio-attribution","table-filter","single-portfolio-attribution/table-filter",1757441687),new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047),new cljs.core.Keyword("multiple-portfolio-attribution","display-style","multiple-portfolio-attribution/display-style",-767260119),new cljs.core.Keyword("multiple-portfolio-attribution","field-number","multiple-portfolio-attribution/field-number",-1780989148),new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),new cljs.core.Keyword("multiple-portfolio-attribution","field-two","multiple-portfolio-attribution/field-two",-311759422),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),new cljs.core.Keyword("multiple-portfolio-attribution","hide-zero-holdings","multiple-portfolio-attribution/hide-zero-holdings",1677138723),new cljs.core.Keyword("multiple-portfolio-attribution","shortcut","multiple-portfolio-attribution/shortcut",809107380),new cljs.core.Keyword("multiple-portfolio-attribution","table-filter","multiple-portfolio-attribution/table-filter",-9483585),new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705),new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),new cljs.core.Keyword("attribution","summary","attribution/summary",687462095),new cljs.core.Keyword("single-bond-trade-history","show-flat-modal","single-bond-trade-history/show-flat-modal",1072491400),new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181),new cljs.core.Keyword("single-bond-trade-history","show-modal","single-bond-trade-history/show-modal",-1585088359),new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127),new cljs.core.Keyword("single-bond-trade-history","bond","single-bond-trade-history/bond",2015871973),new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865),new cljs.core.Keyword("portfolio-trade-history","portfolio","portfolio-trade-history/portfolio",160136116),new cljs.core.Keyword("portfolio-trade-history","start-date","portfolio-trade-history/start-date",-1590289411),new cljs.core.Keyword("portfolio-trade-history","end-date","portfolio-trade-history/end-date",68061260),new cljs.core.Keyword("portfolio-trade-history","performance","portfolio-trade-history/performance",-2029881566),new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321),new cljs.core.Keyword("portfolio-review","active-tab","portfolio-review/active-tab",1429822843),new cljs.core.Keyword("portfolio-review","summary-data","portfolio-review/summary-data",-1362975725),new cljs.core.Keyword("portfolio-review","contribution-chart-data","portfolio-review/contribution-chart-data",-581811845),new cljs.core.Keyword("portfolio-review","alpha-chart-data","portfolio-review/alpha-chart-data",-243291168),new cljs.core.Keyword("portfolio-review","jensen-chart-data","portfolio-review/jensen-chart-data",-701618636),new cljs.core.Keyword("portfolio-review","marginal-beta-chart-data","portfolio-review/marginal-beta-chart-data",40550601),new cljs.core.Keyword("portfolio-review","historical-beta-chart-data","portfolio-review/historical-beta-chart-data",-1077808147),new cljs.core.Keyword("portfolio-review","historical-performance-chart-data","portfolio-review/historical-performance-chart-data",1185340209),new cljs.core.Keyword("betas","table","betas/table",-390525241),new cljs.core.Keyword("bond-price-history","price","bond-price-history/price",-601066058),new cljs.core.Keyword("bond-price-history","name","bond-price-history/name",-1471022397),new cljs.core.Keyword("esg","refinitiv-ids","esg/refinitiv-ids",13812138),new cljs.core.Keyword("esg","active-home","esg/active-home",53652341)], true));
var chunk__92569_92924 = null;
var count__92570_92925 = (0);
var i__92571_92926 = (0);
while(true){
if((i__92571_92926 < count__92570_92925)){
var k_92980 = chunk__92569_92924.cljs$core$IIndexed$_nth$arity$2(null,i__92571_92926);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_92980,((function (seq__92568_92923,chunk__92569_92924,count__92570_92925,i__92571_92926,k_92980){
return (function (db,p__92580){
var vec__92581 = p__92580;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92581,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92581,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_92980,data);
});})(seq__92568_92923,chunk__92569_92924,count__92570_92925,i__92571_92926,k_92980))
);


var G__92994 = seq__92568_92923;
var G__92995 = chunk__92569_92924;
var G__92996 = count__92570_92925;
var G__92997 = (i__92571_92926 + (1));
seq__92568_92923 = G__92994;
chunk__92569_92924 = G__92995;
count__92570_92925 = G__92996;
i__92571_92926 = G__92997;
continue;
} else {
var temp__5735__auto___93003 = cljs.core.seq(seq__92568_92923);
if(temp__5735__auto___93003){
var seq__92568_93010__$1 = temp__5735__auto___93003;
if(cljs.core.chunked_seq_QMARK_(seq__92568_93010__$1)){
var c__4556__auto___93011 = cljs.core.chunk_first(seq__92568_93010__$1);
var G__93018 = cljs.core.chunk_rest(seq__92568_93010__$1);
var G__93019 = c__4556__auto___93011;
var G__93020 = cljs.core.count(c__4556__auto___93011);
var G__93021 = (0);
seq__92568_92923 = G__93018;
chunk__92569_92924 = G__93019;
count__92570_92925 = G__93020;
i__92571_92926 = G__93021;
continue;
} else {
var k_93023 = cljs.core.first(seq__92568_93010__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_93023,((function (seq__92568_92923,chunk__92569_92924,count__92570_92925,i__92571_92926,k_93023,seq__92568_93010__$1,temp__5735__auto___93003){
return (function (db,p__92584){
var vec__92585 = p__92584;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92585,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92585,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_93023,data);
});})(seq__92568_92923,chunk__92569_92924,count__92570_92925,i__92571_92926,k_93023,seq__92568_93010__$1,temp__5735__auto___93003))
);


var G__93036 = cljs.core.next(seq__92568_93010__$1);
var G__93037 = null;
var G__93038 = (0);
var G__93039 = (0);
seq__92568_92923 = G__93036;
chunk__92569_92924 = G__93037;
count__92570_92925 = G__93038;
i__92571_92926 = G__93039;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"positions","positions",-1380538434),(function (db,p__92588){
var vec__92589 = p__92588;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92589,(0),null);
var positions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92589,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"positions","positions",-1380538434),positions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"positions-new","positions-new",1631706550),(function (db,p__92592){
var vec__92593 = p__92592;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92593,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92593,(1),null);
var positions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92593,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-new","positions-new",1631706550),portfolio], null),positions),new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),(function (db,p__92596){
var vec__92597 = p__92596;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92597,(0),null);
var portfolios = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92597,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),portfolios,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),cljs.core.set(portfolios),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),cljs.core.set(portfolios)], 0));
}));
var seq__92600_93075 = cljs.core.seq(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219)], null));
var chunk__92601_93076 = null;
var count__92602_93077 = (0);
var i__92603_93078 = (0);
while(true){
if((i__92603_93078 < count__92602_93077)){
var k_93079 = chunk__92601_93076.cljs$core$IIndexed$_nth$arity$2(null,i__92603_93078);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_93079,((function (seq__92600_93075,chunk__92601_93076,count__92602_93077,i__92603_93078,k_93079){
return (function (db,p__92612){
var vec__92613 = p__92612;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92613,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92613,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92613,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_93079,id], null),f);
});})(seq__92600_93075,chunk__92601_93076,count__92602_93077,i__92603_93078,k_93079))
);


var G__93082 = seq__92600_93075;
var G__93083 = chunk__92601_93076;
var G__93084 = count__92602_93077;
var G__93085 = (i__92603_93078 + (1));
seq__92600_93075 = G__93082;
chunk__92601_93076 = G__93083;
count__92602_93077 = G__93084;
i__92603_93078 = G__93085;
continue;
} else {
var temp__5735__auto___93089 = cljs.core.seq(seq__92600_93075);
if(temp__5735__auto___93089){
var seq__92600_93094__$1 = temp__5735__auto___93089;
if(cljs.core.chunked_seq_QMARK_(seq__92600_93094__$1)){
var c__4556__auto___93095 = cljs.core.chunk_first(seq__92600_93094__$1);
var G__93096 = cljs.core.chunk_rest(seq__92600_93094__$1);
var G__93098 = c__4556__auto___93095;
var G__93099 = cljs.core.count(c__4556__auto___93095);
var G__93100 = (0);
seq__92600_93075 = G__93096;
chunk__92601_93076 = G__93098;
count__92602_93077 = G__93099;
i__92603_93078 = G__93100;
continue;
} else {
var k_93101 = cljs.core.first(seq__92600_93094__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_93101,((function (seq__92600_93075,chunk__92601_93076,count__92602_93077,i__92603_93078,k_93101,seq__92600_93094__$1,temp__5735__auto___93089){
return (function (db,p__92616){
var vec__92617 = p__92616;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92617,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92617,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92617,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_93101,id], null),f);
});})(seq__92600_93075,chunk__92601_93076,count__92602_93077,i__92603_93078,k_93101,seq__92600_93094__$1,temp__5735__auto___93089))
);


var G__93107 = cljs.core.next(seq__92600_93094__$1);
var G__93108 = null;
var G__93109 = (0);
var G__93110 = (0);
seq__92600_93075 = G__93107;
chunk__92601_93076 = G__93108;
count__92602_93077 = G__93109;
i__92603_93078 = G__93110;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),(function (db,p__92620){
var vec__92621 = p__92620;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92621,(0),null);
var qt_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92621,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),clojure.string.replace(qt_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),(function (db,p__92624){
var vec__92625 = p__92624;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92625,(0),null);
var attribution_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92625,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),clojure.string.replace(attribution_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),(function (db,p__92628){
var vec__92629 = p__92628;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92629,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92629,(1),null);
var G__92632 = snapshot;
switch (G__92632) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__92632)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cycle-shortcut","cycle-shortcut",-1617058214),(function (db,p__92633){
var vec__92634 = p__92633;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92634,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92634,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92634,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword("navigation","active-home","navigation/active-home",1949576148).cljs$core$IFn$_invoke$arity$1(db)),"-risk/shortcut"].join(''));
var shortcut_value = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
if((shortcut_value < (4))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(shortcut_value + (1)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(1));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tree-table","tree-table",-1263002012),(function (db,p__92637){
var vec__92638 = p__92637;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92638,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92638,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92638,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword("navigation","active-home","navigation/active-home",1949576148).cljs$core$IFn$_invoke$arity$1(db)),"-risk/display-style"].join(''));
var G__92641 = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
switch (G__92641) {
case "Tree":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Table");

break;
case "Table":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Tree");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__92641)].join('')));

}
}));
jasminegui.mount.http_get_dispatch = (function jasminegui$mount$http_get_dispatch(request){
var c__41764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41765__auto__ = (function (){var switch__41741__auto__ = (function (state_92670){
var state_val_92671 = (state_92670[(1)]);
if((state_val_92671 === (1))){
var inst_92642 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_92643 = cljs_http.client.get(inst_92642);
var state_92670__$1 = state_92670;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_92670__$1,(2),inst_92643);
} else {
if((state_val_92671 === (2))){
var inst_92645 = (state_92670[(2)]);
var inst_92646 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_92647 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_92670__$1 = (function (){var statearr_92672 = state_92670;
(statearr_92672[(7)] = inst_92645);

(statearr_92672[(8)] = inst_92646);

return statearr_92672;
})();
if(cljs.core.truth_(inst_92647)){
var statearr_92673_93149 = state_92670__$1;
(statearr_92673_93149[(1)] = (3));

} else {
var statearr_92674_93154 = state_92670__$1;
(statearr_92674_93154[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92671 === (3))){
var inst_92645 = (state_92670[(7)]);
var inst_92649 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_92645);
var inst_92650 = JSON.parse(inst_92649);
var inst_92651 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_92650,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_92670__$1 = state_92670;
var statearr_92675_93157 = state_92670__$1;
(statearr_92675_93157[(2)] = inst_92651);

(statearr_92675_93157[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92671 === (4))){
var inst_92645 = (state_92670[(7)]);
var inst_92653 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_92645);
var state_92670__$1 = state_92670;
var statearr_92676_93161 = state_92670__$1;
(statearr_92676_93161[(2)] = inst_92653);

(statearr_92676_93161[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92671 === (5))){
var inst_92646 = (state_92670[(8)]);
var inst_92655 = (state_92670[(2)]);
var inst_92656 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_92646,inst_92655);
var inst_92657 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_92656) : re_frame.core.dispatch.call(null,inst_92656));
var inst_92658 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_92670__$1 = (function (){var statearr_92677 = state_92670;
(statearr_92677[(9)] = inst_92657);

return statearr_92677;
})();
if(cljs.core.truth_(inst_92658)){
var statearr_92678_93171 = state_92670__$1;
(statearr_92678_93171[(1)] = (6));

} else {
var statearr_92679_93172 = state_92670__$1;
(statearr_92679_93172[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92671 === (6))){
var inst_92660 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_92661 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_92662 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_92663 = [inst_92661,inst_92662];
var inst_92664 = (new cljs.core.PersistentVector(null,2,(5),inst_92660,inst_92663,null));
var inst_92665 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_92664) : re_frame.core.dispatch.call(null,inst_92664));
var state_92670__$1 = state_92670;
var statearr_92680_93176 = state_92670__$1;
(statearr_92680_93176[(2)] = inst_92665);

(statearr_92680_93176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92671 === (7))){
var state_92670__$1 = state_92670;
var statearr_92681_93178 = state_92670__$1;
(statearr_92681_93178[(2)] = null);

(statearr_92681_93178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92671 === (8))){
var inst_92668 = (state_92670[(2)]);
var state_92670__$1 = state_92670;
return cljs.core.async.impl.ioc_helpers.return_chan(state_92670__$1,inst_92668);
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
var statearr_92682 = [null,null,null,null,null,null,null,null,null,null];
(statearr_92682[(0)] = jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__);

(statearr_92682[(1)] = (1));

return statearr_92682;
});
var jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____1 = (function (state_92670){
while(true){
var ret_value__41743__auto__ = (function (){try{while(true){
var result__41744__auto__ = switch__41741__auto__(state_92670);
if(cljs.core.keyword_identical_QMARK_(result__41744__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41744__auto__;
}
break;
}
}catch (e92683){if((e92683 instanceof Object)){
var ex__41745__auto__ = e92683;
var statearr_92684_93181 = state_92670;
(statearr_92684_93181[(5)] = ex__41745__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_92670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92683;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93189 = state_92670;
state_92670 = G__93189;
continue;
} else {
return ret_value__41743__auto__;
}
break;
}
});
jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__ = function(state_92670){
switch(arguments.length){
case 0:
return jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____0.call(this);
case 1:
return jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____1.call(this,state_92670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____0;
jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____1;
return jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__;
})()
})();
var state__41766__auto__ = (function (){var statearr_92685 = (f__41765__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41765__auto__.cljs$core$IFn$_invoke$arity$0() : f__41765__auto__.call(null));
(statearr_92685[(6)] = c__41764__auto__);

return statearr_92685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41766__auto__);
}));

return c__41764__auto__;
});
var G__92686_93192 = new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518);
var G__92687_93193 = jasminegui.mount.http_get_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__92686_93192,G__92687_93193) : re_frame.core.reg_fx.call(null,G__92686_93192,G__92687_93193));
jasminegui.mount.http_post_dispatch = (function jasminegui$mount$http_post_dispatch(request){
var c__41764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41765__auto__ = (function (){var switch__41741__auto__ = (function (state_92720){
var state_val_92721 = (state_92720[(1)]);
if((state_val_92721 === (1))){
var inst_92688 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_92689 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_92690 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
var inst_92691 = [inst_92690];
var inst_92692 = cljs.core.PersistentHashMap.fromArrays(inst_92689,inst_92691);
var inst_92693 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_92688,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_92692], 0));
var state_92720__$1 = state_92720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_92720__$1,(2),inst_92693);
} else {
if((state_val_92721 === (2))){
var inst_92695 = (state_92720[(2)]);
var inst_92696 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_92697 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_92720__$1 = (function (){var statearr_92722 = state_92720;
(statearr_92722[(7)] = inst_92695);

(statearr_92722[(8)] = inst_92696);

return statearr_92722;
})();
if(cljs.core.truth_(inst_92697)){
var statearr_92723_93198 = state_92720__$1;
(statearr_92723_93198[(1)] = (3));

} else {
var statearr_92724_93199 = state_92720__$1;
(statearr_92724_93199[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92721 === (3))){
var inst_92695 = (state_92720[(7)]);
var inst_92699 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_92695);
var inst_92700 = JSON.parse(inst_92699);
var inst_92701 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_92700,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_92720__$1 = state_92720;
var statearr_92725_93201 = state_92720__$1;
(statearr_92725_93201[(2)] = inst_92701);

(statearr_92725_93201[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92721 === (4))){
var inst_92695 = (state_92720[(7)]);
var inst_92703 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_92695);
var state_92720__$1 = state_92720;
var statearr_92726_93203 = state_92720__$1;
(statearr_92726_93203[(2)] = inst_92703);

(statearr_92726_93203[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92721 === (5))){
var inst_92696 = (state_92720[(8)]);
var inst_92705 = (state_92720[(2)]);
var inst_92706 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_92696,inst_92705);
var inst_92707 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_92706) : re_frame.core.dispatch.call(null,inst_92706));
var inst_92708 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_92720__$1 = (function (){var statearr_92727 = state_92720;
(statearr_92727[(9)] = inst_92707);

return statearr_92727;
})();
if(cljs.core.truth_(inst_92708)){
var statearr_92728_93232 = state_92720__$1;
(statearr_92728_93232[(1)] = (6));

} else {
var statearr_92729_93233 = state_92720__$1;
(statearr_92729_93233[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92721 === (6))){
var inst_92710 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_92711 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_92712 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_92713 = [inst_92711,inst_92712];
var inst_92714 = (new cljs.core.PersistentVector(null,2,(5),inst_92710,inst_92713,null));
var inst_92715 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_92714) : re_frame.core.dispatch.call(null,inst_92714));
var state_92720__$1 = state_92720;
var statearr_92730_93243 = state_92720__$1;
(statearr_92730_93243[(2)] = inst_92715);

(statearr_92730_93243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92721 === (7))){
var state_92720__$1 = state_92720;
var statearr_92731_93249 = state_92720__$1;
(statearr_92731_93249[(2)] = null);

(statearr_92731_93249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92721 === (8))){
var inst_92718 = (state_92720[(2)]);
var state_92720__$1 = state_92720;
return cljs.core.async.impl.ioc_helpers.return_chan(state_92720__$1,inst_92718);
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
var statearr_92732 = [null,null,null,null,null,null,null,null,null,null];
(statearr_92732[(0)] = jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto__);

(statearr_92732[(1)] = (1));

return statearr_92732;
});
var jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto____1 = (function (state_92720){
while(true){
var ret_value__41743__auto__ = (function (){try{while(true){
var result__41744__auto__ = switch__41741__auto__(state_92720);
if(cljs.core.keyword_identical_QMARK_(result__41744__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41744__auto__;
}
break;
}
}catch (e92733){if((e92733 instanceof Object)){
var ex__41745__auto__ = e92733;
var statearr_92734_93250 = state_92720;
(statearr_92734_93250[(5)] = ex__41745__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_92720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92733;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93264 = state_92720;
state_92720 = G__93264;
continue;
} else {
return ret_value__41743__auto__;
}
break;
}
});
jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto__ = function(state_92720){
switch(arguments.length){
case 0:
return jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto____0.call(this);
case 1:
return jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto____1.call(this,state_92720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto____0;
jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto____1;
return jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto__;
})()
})();
var state__41766__auto__ = (function (){var statearr_92735 = (f__41765__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41765__auto__.cljs$core$IFn$_invoke$arity$0() : f__41765__auto__.call(null));
(statearr_92735[(6)] = c__41764__auto__);

return statearr_92735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41766__auto__);
}));

return c__41764__auto__;
});
var G__92736_93278 = new cljs.core.Keyword(null,"http-post-dispatch","http-post-dispatch",2138865017);
var G__92737_93279 = jasminegui.mount.http_post_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__92736_93278,G__92737_93279) : re_frame.core.reg_fx.call(null,G__92736_93278,G__92737_93279));
jasminegui.mount.simple_http_get_events = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-positions","get-positions",1610972586),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"positions",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"positions","positions",-1380538434)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-rating-to-score","get-rating-to-score",391912155),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"rating-to-score",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"portfolios",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-pivoted-positions","get-pivoted-positions",2145025131),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"pivoted-positions",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-total-positions","get-total-positions",-698807167),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"total-positions",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-qt-date","get-qt-date",-1072332881),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"qt-date",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-var-proxies","get-var-proxies",1252506215),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"var-proxies",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-var-dates","get-var-dates",-1039695287),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"var-dates",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword("var","dates","var/dates",-1599746364)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-betas","get-betas",-284291273),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"beta-table",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword("betas","table","betas/table",-390525241)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-refinitiv-ids","get-refinitiv-ids",-1673756915),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"refinitiv-ids",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword("esg","refinitiv-ids","esg/refinitiv-ids",13812138)], null)], null);
var seq__92738_93308 = cljs.core.seq(jasminegui.mount.simple_http_get_events);
var chunk__92739_93309 = null;
var count__92740_93310 = (0);
var i__92741_93311 = (0);
while(true){
if((i__92741_93311 < count__92740_93310)){
var line_93318 = chunk__92739_93309.cljs$core$IIndexed$_nth$arity$2(null,i__92741_93311);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-key","get-key",1436017019).cljs$core$IFn$_invoke$arity$1(line_93318),((function (seq__92738_93308,chunk__92739_93309,count__92740_93310,i__92741_93311,line_93318){
return (function (p__92756,p__92757){
var map__92758 = p__92756;
var map__92758__$1 = (((((!((map__92758 == null))))?(((((map__92758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__92758):map__92758);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92758__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__92759 = p__92757;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92759,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url-tail","url-tail",144006528).cljs$core$IFn$_invoke$arity$1(line_93318))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dis-key","dis-key",842897221).cljs$core$IFn$_invoke$arity$1(line_93318)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
});})(seq__92738_93308,chunk__92739_93309,count__92740_93310,i__92741_93311,line_93318))
);


var G__93325 = seq__92738_93308;
var G__93326 = chunk__92739_93309;
var G__93327 = count__92740_93310;
var G__93328 = (i__92741_93311 + (1));
seq__92738_93308 = G__93325;
chunk__92739_93309 = G__93326;
count__92740_93310 = G__93327;
i__92741_93311 = G__93328;
continue;
} else {
var temp__5735__auto___93329 = cljs.core.seq(seq__92738_93308);
if(temp__5735__auto___93329){
var seq__92738_93330__$1 = temp__5735__auto___93329;
if(cljs.core.chunked_seq_QMARK_(seq__92738_93330__$1)){
var c__4556__auto___93331 = cljs.core.chunk_first(seq__92738_93330__$1);
var G__93332 = cljs.core.chunk_rest(seq__92738_93330__$1);
var G__93333 = c__4556__auto___93331;
var G__93334 = cljs.core.count(c__4556__auto___93331);
var G__93335 = (0);
seq__92738_93308 = G__93332;
chunk__92739_93309 = G__93333;
count__92740_93310 = G__93334;
i__92741_93311 = G__93335;
continue;
} else {
var line_93336 = cljs.core.first(seq__92738_93330__$1);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-key","get-key",1436017019).cljs$core$IFn$_invoke$arity$1(line_93336),((function (seq__92738_93308,chunk__92739_93309,count__92740_93310,i__92741_93311,line_93336,seq__92738_93330__$1,temp__5735__auto___93329){
return (function (p__92763,p__92764){
var map__92765 = p__92763;
var map__92765__$1 = (((((!((map__92765 == null))))?(((((map__92765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__92765):map__92765);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92765__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__92766 = p__92764;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92766,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url-tail","url-tail",144006528).cljs$core$IFn$_invoke$arity$1(line_93336))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dis-key","dis-key",842897221).cljs$core$IFn$_invoke$arity$1(line_93336)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
});})(seq__92738_93308,chunk__92739_93309,count__92740_93310,i__92741_93311,line_93336,seq__92738_93330__$1,temp__5735__auto___93329))
);


var G__93344 = cljs.core.next(seq__92738_93330__$1);
var G__93345 = null;
var G__93346 = (0);
var G__93347 = (0);
seq__92738_93308 = G__93344;
chunk__92739_93309 = G__93345;
count__92740_93310 = G__93346;
i__92741_93311 = G__93347;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions-new","get-positions-new",1597842964),(function (p__92770,p__92771){
var map__92772 = p__92770;
var map__92772__$1 = (((((!((map__92772 == null))))?(((((map__92772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__92772):map__92772);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92772__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__92773 = p__92771;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92773,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92773,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"positions-new?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-new","positions-new",1631706550),portfolio], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-data","get-var-data",837806576),(function (p__92777,p__92778){
var map__92779 = p__92777;
var map__92779__$1 = (((((!((map__92779 == null))))?(((((map__92779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__92779):map__92779);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92779__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__92780 = p__92778;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92780,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92780,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"var-data?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-var","get-portfolio-var",1001711662),(function (p__92784,p__92785){
var map__92786 = p__92784;
var map__92786__$1 = (((((!((map__92786 == null))))?(((((map__92786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__92786):map__92786);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92786__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__92787 = p__92785;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92787,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92787,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),portfolio),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"var-data?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-attribution-date","get-attribution-date",-1329272944),(function (p__92791,p__92792){
var map__92793 = p__92791;
var map__92793__$1 = (((((!((map__92793 == null))))?(((((map__92793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__92793):map__92793);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92793__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__92794 = p__92792;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92794,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=attribution-date"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),false], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-single-attribution","get-single-attribution",-1620108505),(function (p__92798,p__92799){
var map__92800 = p__92798;
var map__92800__$1 = (((((!((map__92800 == null))))?(((((map__92800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__92800):map__92800);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92800__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__92801 = p__92799;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92801,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92801,(1),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92801,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-single-attribution-portfolio","change-single-attribution-portfolio",1766745939),(function (p__92805,p__92806){
var map__92807 = p__92805;
var map__92807__$1 = (((((!((map__92807 == null))))?(((((map__92807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__92807):map__92807);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92807__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__92808 = p__92806;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92808,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92808,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),portfolio),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450).cljs$core$IFn$_invoke$arity$1(db))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-single-attribution-period","change-single-attribution-period",860703642),(function (p__92812,p__92813){
var map__92814 = p__92812;
var map__92814__$1 = (((((!((map__92814 == null))))?(((((map__92814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__92814):map__92814);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92814__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__92815 = p__92813;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92815,(0),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92815,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),period),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521).cljs$core$IFn$_invoke$arity$1(db)),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-multiple-attribution","get-multiple-attribution",1245740943),(function (p__92819,p__92820){
var map__92821 = p__92819;
var map__92821__$1 = (((((!((map__92821 == null))))?(((((map__92821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__92821):map__92821);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92821__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__92822 = p__92820;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92822,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92822,(1),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92822,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=multiple-portfolio&target=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-multiple-attribution-target","change-multiple-attribution-target",777460289),(function (p__92826,p__92827){
var map__92828 = p__92826;
var map__92828__$1 = (((((!((map__92828 == null))))?(((((map__92828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__92828):map__92828);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92828__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__92829 = p__92827;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92829,(0),null);
var ktarget = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92829,(1),null);
var target = clojure.string.replace(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ktarget,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)),"-"," ");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),ktarget),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=multiple-portfolio&target=",target,"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154).cljs$core$IFn$_invoke$arity$1(db))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-multiple-attribution-period","change-multiple-attribution-period",590435537),(function (p__92833,p__92834){
var map__92835 = p__92833;
var map__92835__$1 = (((((!((map__92835 == null))))?(((((map__92835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__92835):map__92835);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92835__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__92836 = p__92834;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92836,(0),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92836,(1),null);
var target = clojure.string.replace(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)),"-"," ");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),period),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=multiple-portfolio&target=",target,"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-attribution-summary","get-attribution-summary",-27760654),(function (p__92840,p__92841){
var map__92842 = p__92840;
var map__92842__$1 = (((((!((map__92842 == null))))?(((((map__92842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__92842):map__92842);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92842__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__92843 = p__92841;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92843,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=summary"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("attribution","summary","attribution/summary",687462095)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));

//# sourceMappingURL=jasminegui.mount.js.map
