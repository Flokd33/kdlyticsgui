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
var seq__55693_56036 = cljs.core.seq(cljs.core.keys(jasminegui.mount.default_db));
var chunk__55694_56037 = null;
var count__55695_56038 = (0);
var i__55696_56039 = (0);
while(true){
if((i__55696_56039 < count__55695_56038)){
var k_56042 = chunk__55694_56037.cljs$core$IIndexed$_nth$arity$2(null,i__55696_56039);
var G__55702_56044 = k_56042;
var G__55703_56045 = ((function (seq__55693_56036,chunk__55694_56037,count__55695_56038,i__55696_56039,G__55702_56044,k_56042){
return (function (db){
return (k_56042.cljs$core$IFn$_invoke$arity$1 ? k_56042.cljs$core$IFn$_invoke$arity$1(db) : k_56042.call(null,db));
});})(seq__55693_56036,chunk__55694_56037,count__55695_56038,i__55696_56039,G__55702_56044,k_56042))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__55702_56044,G__55703_56045) : re_frame.core.reg_sub.call(null,G__55702_56044,G__55703_56045));


var G__56051 = seq__55693_56036;
var G__56052 = chunk__55694_56037;
var G__56053 = count__55695_56038;
var G__56054 = (i__55696_56039 + (1));
seq__55693_56036 = G__56051;
chunk__55694_56037 = G__56052;
count__55695_56038 = G__56053;
i__55696_56039 = G__56054;
continue;
} else {
var temp__5735__auto___56068 = cljs.core.seq(seq__55693_56036);
if(temp__5735__auto___56068){
var seq__55693_56069__$1 = temp__5735__auto___56068;
if(cljs.core.chunked_seq_QMARK_(seq__55693_56069__$1)){
var c__4556__auto___56070 = cljs.core.chunk_first(seq__55693_56069__$1);
var G__56071 = cljs.core.chunk_rest(seq__55693_56069__$1);
var G__56072 = c__4556__auto___56070;
var G__56073 = cljs.core.count(c__4556__auto___56070);
var G__56074 = (0);
seq__55693_56036 = G__56071;
chunk__55694_56037 = G__56072;
count__55695_56038 = G__56073;
i__55696_56039 = G__56074;
continue;
} else {
var k_56088 = cljs.core.first(seq__55693_56069__$1);
var G__55705_56089 = k_56088;
var G__55706_56090 = ((function (seq__55693_56036,chunk__55694_56037,count__55695_56038,i__55696_56039,G__55705_56089,k_56088,seq__55693_56069__$1,temp__5735__auto___56068){
return (function (db){
return (k_56088.cljs$core$IFn$_invoke$arity$1 ? k_56088.cljs$core$IFn$_invoke$arity$1(db) : k_56088.call(null,db));
});})(seq__55693_56036,chunk__55694_56037,count__55695_56038,i__55696_56039,G__55705_56089,k_56088,seq__55693_56069__$1,temp__5735__auto___56068))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__55705_56089,G__55706_56090) : re_frame.core.reg_sub.call(null,G__55705_56089,G__55706_56090));


var G__56157 = cljs.core.next(seq__55693_56069__$1);
var G__56158 = null;
var G__56159 = (0);
var G__56160 = (0);
seq__55693_56036 = G__56157;
chunk__55694_56037 = G__56158;
count__55695_56038 = G__56159;
i__55696_56039 = G__56160;
continue;
}
} else {
}
}
break;
}
var seq__55707_56163 = cljs.core.seq(cljs.core.PersistentVector.fromArray([new cljs.core.Keyword("navigation","active-view","navigation/active-view",800211184),new cljs.core.Keyword("navigation","active-home","navigation/active-home",1949576148),new cljs.core.Keyword("navigation","active-var","navigation/active-var",39797785),new cljs.core.Keyword("navigation","active-attribution","navigation/active-attribution",600082450),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738),new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334),new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679),new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),new cljs.core.Keyword("single-portfolio-attribution","table-filter","single-portfolio-attribution/table-filter",1757441687),new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047),new cljs.core.Keyword("multiple-portfolio-attribution","display-style","multiple-portfolio-attribution/display-style",-767260119),new cljs.core.Keyword("multiple-portfolio-attribution","field-number","multiple-portfolio-attribution/field-number",-1780989148),new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),new cljs.core.Keyword("multiple-portfolio-attribution","field-two","multiple-portfolio-attribution/field-two",-311759422),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),new cljs.core.Keyword("multiple-portfolio-attribution","hide-zero-holdings","multiple-portfolio-attribution/hide-zero-holdings",1677138723),new cljs.core.Keyword("multiple-portfolio-attribution","shortcut","multiple-portfolio-attribution/shortcut",809107380),new cljs.core.Keyword("multiple-portfolio-attribution","table-filter","multiple-portfolio-attribution/table-filter",-9483585),new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705),new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),new cljs.core.Keyword("attribution","summary","attribution/summary",687462095),new cljs.core.Keyword("single-bond-trade-history","show-flat-modal","single-bond-trade-history/show-flat-modal",1072491400),new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181),new cljs.core.Keyword("single-bond-trade-history","show-modal","single-bond-trade-history/show-modal",-1585088359),new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127),new cljs.core.Keyword("single-bond-trade-history","bond","single-bond-trade-history/bond",2015871973),new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865),new cljs.core.Keyword("portfolio-trade-history","portfolio","portfolio-trade-history/portfolio",160136116),new cljs.core.Keyword("portfolio-trade-history","start-date","portfolio-trade-history/start-date",-1590289411),new cljs.core.Keyword("portfolio-trade-history","end-date","portfolio-trade-history/end-date",68061260),new cljs.core.Keyword("portfolio-trade-history","performance","portfolio-trade-history/performance",-2029881566),new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321),new cljs.core.Keyword("portfolio-review","active-tab","portfolio-review/active-tab",1429822843),new cljs.core.Keyword("portfolio-review","summary-data","portfolio-review/summary-data",-1362975725),new cljs.core.Keyword("portfolio-review","contribution-chart-data","portfolio-review/contribution-chart-data",-581811845),new cljs.core.Keyword("portfolio-review","alpha-chart-data","portfolio-review/alpha-chart-data",-243291168),new cljs.core.Keyword("portfolio-review","jensen-chart-data","portfolio-review/jensen-chart-data",-701618636),new cljs.core.Keyword("portfolio-review","marginal-beta-chart-data","portfolio-review/marginal-beta-chart-data",40550601),new cljs.core.Keyword("portfolio-review","historical-beta-chart-data","portfolio-review/historical-beta-chart-data",-1077808147),new cljs.core.Keyword("portfolio-review","historical-performance-chart-data","portfolio-review/historical-performance-chart-data",1185340209),new cljs.core.Keyword("betas","table","betas/table",-390525241)], true));
var chunk__55708_56164 = null;
var count__55709_56165 = (0);
var i__55710_56166 = (0);
while(true){
if((i__55710_56166 < count__55709_56165)){
var k_56181 = chunk__55708_56164.cljs$core$IIndexed$_nth$arity$2(null,i__55710_56166);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_56181,((function (seq__55707_56163,chunk__55708_56164,count__55709_56165,i__55710_56166,k_56181){
return (function (db,p__55719){
var vec__55720 = p__55719;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55720,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55720,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_56181,data);
});})(seq__55707_56163,chunk__55708_56164,count__55709_56165,i__55710_56166,k_56181))
);


var G__56187 = seq__55707_56163;
var G__56188 = chunk__55708_56164;
var G__56189 = count__55709_56165;
var G__56190 = (i__55710_56166 + (1));
seq__55707_56163 = G__56187;
chunk__55708_56164 = G__56188;
count__55709_56165 = G__56189;
i__55710_56166 = G__56190;
continue;
} else {
var temp__5735__auto___56191 = cljs.core.seq(seq__55707_56163);
if(temp__5735__auto___56191){
var seq__55707_56192__$1 = temp__5735__auto___56191;
if(cljs.core.chunked_seq_QMARK_(seq__55707_56192__$1)){
var c__4556__auto___56194 = cljs.core.chunk_first(seq__55707_56192__$1);
var G__56195 = cljs.core.chunk_rest(seq__55707_56192__$1);
var G__56196 = c__4556__auto___56194;
var G__56197 = cljs.core.count(c__4556__auto___56194);
var G__56198 = (0);
seq__55707_56163 = G__56195;
chunk__55708_56164 = G__56196;
count__55709_56165 = G__56197;
i__55710_56166 = G__56198;
continue;
} else {
var k_56199 = cljs.core.first(seq__55707_56192__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_56199,((function (seq__55707_56163,chunk__55708_56164,count__55709_56165,i__55710_56166,k_56199,seq__55707_56192__$1,temp__5735__auto___56191){
return (function (db,p__55723){
var vec__55724 = p__55723;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55724,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55724,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_56199,data);
});})(seq__55707_56163,chunk__55708_56164,count__55709_56165,i__55710_56166,k_56199,seq__55707_56192__$1,temp__5735__auto___56191))
);


var G__56205 = cljs.core.next(seq__55707_56192__$1);
var G__56206 = null;
var G__56207 = (0);
var G__56208 = (0);
seq__55707_56163 = G__56205;
chunk__55708_56164 = G__56206;
count__55709_56165 = G__56207;
i__55710_56166 = G__56208;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"positions","positions",-1380538434),(function (db,p__55727){
var vec__55728 = p__55727;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55728,(0),null);
var positions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55728,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"positions","positions",-1380538434),positions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"positions-new","positions-new",1631706550),(function (db,p__55731){
var vec__55732 = p__55731;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55732,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55732,(1),null);
var positions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55732,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-new","positions-new",1631706550),portfolio], null),positions),new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),(function (db,p__55735){
var vec__55736 = p__55735;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55736,(0),null);
var portfolios = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55736,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),portfolios,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),cljs.core.set(portfolios),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),cljs.core.set(portfolios)], 0));
}));
var seq__55739_56214 = cljs.core.seq(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219)], null));
var chunk__55740_56215 = null;
var count__55741_56216 = (0);
var i__55742_56217 = (0);
while(true){
if((i__55742_56217 < count__55741_56216)){
var k_56218 = chunk__55740_56215.cljs$core$IIndexed$_nth$arity$2(null,i__55742_56217);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_56218,((function (seq__55739_56214,chunk__55740_56215,count__55741_56216,i__55742_56217,k_56218){
return (function (db,p__55751){
var vec__55752 = p__55751;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55752,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55752,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55752,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_56218,id], null),f);
});})(seq__55739_56214,chunk__55740_56215,count__55741_56216,i__55742_56217,k_56218))
);


var G__56219 = seq__55739_56214;
var G__56220 = chunk__55740_56215;
var G__56221 = count__55741_56216;
var G__56222 = (i__55742_56217 + (1));
seq__55739_56214 = G__56219;
chunk__55740_56215 = G__56220;
count__55741_56216 = G__56221;
i__55742_56217 = G__56222;
continue;
} else {
var temp__5735__auto___56223 = cljs.core.seq(seq__55739_56214);
if(temp__5735__auto___56223){
var seq__55739_56224__$1 = temp__5735__auto___56223;
if(cljs.core.chunked_seq_QMARK_(seq__55739_56224__$1)){
var c__4556__auto___56225 = cljs.core.chunk_first(seq__55739_56224__$1);
var G__56226 = cljs.core.chunk_rest(seq__55739_56224__$1);
var G__56227 = c__4556__auto___56225;
var G__56228 = cljs.core.count(c__4556__auto___56225);
var G__56229 = (0);
seq__55739_56214 = G__56226;
chunk__55740_56215 = G__56227;
count__55741_56216 = G__56228;
i__55742_56217 = G__56229;
continue;
} else {
var k_56230 = cljs.core.first(seq__55739_56224__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_56230,((function (seq__55739_56214,chunk__55740_56215,count__55741_56216,i__55742_56217,k_56230,seq__55739_56224__$1,temp__5735__auto___56223){
return (function (db,p__55755){
var vec__55756 = p__55755;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55756,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55756,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55756,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_56230,id], null),f);
});})(seq__55739_56214,chunk__55740_56215,count__55741_56216,i__55742_56217,k_56230,seq__55739_56224__$1,temp__5735__auto___56223))
);


var G__56233 = cljs.core.next(seq__55739_56224__$1);
var G__56234 = null;
var G__56235 = (0);
var G__56236 = (0);
seq__55739_56214 = G__56233;
chunk__55740_56215 = G__56234;
count__55741_56216 = G__56235;
i__55742_56217 = G__56236;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),(function (db,p__55759){
var vec__55760 = p__55759;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55760,(0),null);
var qt_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55760,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),clojure.string.replace(qt_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),(function (db,p__55763){
var vec__55764 = p__55763;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55764,(0),null);
var attribution_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55764,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),clojure.string.replace(attribution_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),(function (db,p__55767){
var vec__55768 = p__55767;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55768,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55768,(1),null);
var G__55771 = snapshot;
switch (G__55771) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55771)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cycle-shortcut","cycle-shortcut",-1617058214),(function (db,p__55772){
var vec__55773 = p__55772;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55773,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55773,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55773,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword("navigation","active-home","navigation/active-home",1949576148).cljs$core$IFn$_invoke$arity$1(db)),"-risk/shortcut"].join(''));
var shortcut_value = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
if((shortcut_value < (4))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(shortcut_value + (1)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(1));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tree-table","tree-table",-1263002012),(function (db,p__55776){
var vec__55777 = p__55776;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55777,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55777,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55777,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword("navigation","active-home","navigation/active-home",1949576148).cljs$core$IFn$_invoke$arity$1(db)),"-risk/display-style"].join(''));
var G__55780 = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
switch (G__55780) {
case "Tree":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Table");

break;
case "Table":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Tree");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55780)].join('')));

}
}));
jasminegui.mount.http_get_dispatch = (function jasminegui$mount$http_get_dispatch(request){
var c__41764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41765__auto__ = (function (){var switch__41741__auto__ = (function (state_55809){
var state_val_55810 = (state_55809[(1)]);
if((state_val_55810 === (1))){
var inst_55781 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_55782 = cljs_http.client.get(inst_55781);
var state_55809__$1 = state_55809;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55809__$1,(2),inst_55782);
} else {
if((state_val_55810 === (2))){
var inst_55784 = (state_55809[(2)]);
var inst_55785 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_55786 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_55809__$1 = (function (){var statearr_55811 = state_55809;
(statearr_55811[(7)] = inst_55784);

(statearr_55811[(8)] = inst_55785);

return statearr_55811;
})();
if(cljs.core.truth_(inst_55786)){
var statearr_55812_56260 = state_55809__$1;
(statearr_55812_56260[(1)] = (3));

} else {
var statearr_55813_56265 = state_55809__$1;
(statearr_55813_56265[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55810 === (3))){
var inst_55784 = (state_55809[(7)]);
var inst_55788 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_55784);
var inst_55789 = JSON.parse(inst_55788);
var inst_55790 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_55789,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_55809__$1 = state_55809;
var statearr_55814_56288 = state_55809__$1;
(statearr_55814_56288[(2)] = inst_55790);

(statearr_55814_56288[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55810 === (4))){
var inst_55784 = (state_55809[(7)]);
var inst_55792 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_55784);
var state_55809__$1 = state_55809;
var statearr_55815_56290 = state_55809__$1;
(statearr_55815_56290[(2)] = inst_55792);

(statearr_55815_56290[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55810 === (5))){
var inst_55785 = (state_55809[(8)]);
var inst_55794 = (state_55809[(2)]);
var inst_55795 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_55785,inst_55794);
var inst_55796 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_55795) : re_frame.core.dispatch.call(null,inst_55795));
var inst_55797 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_55809__$1 = (function (){var statearr_55816 = state_55809;
(statearr_55816[(9)] = inst_55796);

return statearr_55816;
})();
if(cljs.core.truth_(inst_55797)){
var statearr_55817_56308 = state_55809__$1;
(statearr_55817_56308[(1)] = (6));

} else {
var statearr_55818_56309 = state_55809__$1;
(statearr_55818_56309[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55810 === (6))){
var inst_55799 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55800 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_55801 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_55802 = [inst_55800,inst_55801];
var inst_55803 = (new cljs.core.PersistentVector(null,2,(5),inst_55799,inst_55802,null));
var inst_55804 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_55803) : re_frame.core.dispatch.call(null,inst_55803));
var state_55809__$1 = state_55809;
var statearr_55819_56315 = state_55809__$1;
(statearr_55819_56315[(2)] = inst_55804);

(statearr_55819_56315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55810 === (7))){
var state_55809__$1 = state_55809;
var statearr_55820_56316 = state_55809__$1;
(statearr_55820_56316[(2)] = null);

(statearr_55820_56316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55810 === (8))){
var inst_55807 = (state_55809[(2)]);
var state_55809__$1 = state_55809;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55809__$1,inst_55807);
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
var statearr_55821 = [null,null,null,null,null,null,null,null,null,null];
(statearr_55821[(0)] = jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__);

(statearr_55821[(1)] = (1));

return statearr_55821;
});
var jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____1 = (function (state_55809){
while(true){
var ret_value__41743__auto__ = (function (){try{while(true){
var result__41744__auto__ = switch__41741__auto__(state_55809);
if(cljs.core.keyword_identical_QMARK_(result__41744__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41744__auto__;
}
break;
}
}catch (e55822){if((e55822 instanceof Object)){
var ex__41745__auto__ = e55822;
var statearr_55823_56321 = state_55809;
(statearr_55823_56321[(5)] = ex__41745__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55822;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56322 = state_55809;
state_55809 = G__56322;
continue;
} else {
return ret_value__41743__auto__;
}
break;
}
});
jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__ = function(state_55809){
switch(arguments.length){
case 0:
return jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____0.call(this);
case 1:
return jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____1.call(this,state_55809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____0;
jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____1;
return jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__;
})()
})();
var state__41766__auto__ = (function (){var statearr_55824 = (f__41765__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41765__auto__.cljs$core$IFn$_invoke$arity$0() : f__41765__auto__.call(null));
(statearr_55824[(6)] = c__41764__auto__);

return statearr_55824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41766__auto__);
}));

return c__41764__auto__;
});
var G__55825_56328 = new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518);
var G__55826_56329 = jasminegui.mount.http_get_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__55825_56328,G__55826_56329) : re_frame.core.reg_fx.call(null,G__55825_56328,G__55826_56329));
jasminegui.mount.http_post_dispatch = (function jasminegui$mount$http_post_dispatch(request){
var c__41764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41765__auto__ = (function (){var switch__41741__auto__ = (function (state_55859){
var state_val_55860 = (state_55859[(1)]);
if((state_val_55860 === (1))){
var inst_55827 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_55828 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_55829 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
var inst_55830 = [inst_55829];
var inst_55831 = cljs.core.PersistentHashMap.fromArrays(inst_55828,inst_55830);
var inst_55832 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_55827,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_55831], 0));
var state_55859__$1 = state_55859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55859__$1,(2),inst_55832);
} else {
if((state_val_55860 === (2))){
var inst_55834 = (state_55859[(2)]);
var inst_55835 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_55836 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_55859__$1 = (function (){var statearr_55861 = state_55859;
(statearr_55861[(7)] = inst_55835);

(statearr_55861[(8)] = inst_55834);

return statearr_55861;
})();
if(cljs.core.truth_(inst_55836)){
var statearr_55862_56339 = state_55859__$1;
(statearr_55862_56339[(1)] = (3));

} else {
var statearr_55863_56340 = state_55859__$1;
(statearr_55863_56340[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55860 === (3))){
var inst_55834 = (state_55859[(8)]);
var inst_55838 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_55834);
var inst_55839 = JSON.parse(inst_55838);
var inst_55840 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_55839,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_55859__$1 = state_55859;
var statearr_55864_56342 = state_55859__$1;
(statearr_55864_56342[(2)] = inst_55840);

(statearr_55864_56342[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55860 === (4))){
var inst_55834 = (state_55859[(8)]);
var inst_55842 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_55834);
var state_55859__$1 = state_55859;
var statearr_55865_56343 = state_55859__$1;
(statearr_55865_56343[(2)] = inst_55842);

(statearr_55865_56343[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55860 === (5))){
var inst_55835 = (state_55859[(7)]);
var inst_55844 = (state_55859[(2)]);
var inst_55845 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_55835,inst_55844);
var inst_55846 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_55845) : re_frame.core.dispatch.call(null,inst_55845));
var inst_55847 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_55859__$1 = (function (){var statearr_55866 = state_55859;
(statearr_55866[(9)] = inst_55846);

return statearr_55866;
})();
if(cljs.core.truth_(inst_55847)){
var statearr_55867_56354 = state_55859__$1;
(statearr_55867_56354[(1)] = (6));

} else {
var statearr_55868_56355 = state_55859__$1;
(statearr_55868_56355[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55860 === (6))){
var inst_55849 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55850 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_55851 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_55852 = [inst_55850,inst_55851];
var inst_55853 = (new cljs.core.PersistentVector(null,2,(5),inst_55849,inst_55852,null));
var inst_55854 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_55853) : re_frame.core.dispatch.call(null,inst_55853));
var state_55859__$1 = state_55859;
var statearr_55869_56357 = state_55859__$1;
(statearr_55869_56357[(2)] = inst_55854);

(statearr_55869_56357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55860 === (7))){
var state_55859__$1 = state_55859;
var statearr_55870_56359 = state_55859__$1;
(statearr_55870_56359[(2)] = null);

(statearr_55870_56359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55860 === (8))){
var inst_55857 = (state_55859[(2)]);
var state_55859__$1 = state_55859;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55859__$1,inst_55857);
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
var statearr_55871 = [null,null,null,null,null,null,null,null,null,null];
(statearr_55871[(0)] = jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto__);

(statearr_55871[(1)] = (1));

return statearr_55871;
});
var jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto____1 = (function (state_55859){
while(true){
var ret_value__41743__auto__ = (function (){try{while(true){
var result__41744__auto__ = switch__41741__auto__(state_55859);
if(cljs.core.keyword_identical_QMARK_(result__41744__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41744__auto__;
}
break;
}
}catch (e55872){if((e55872 instanceof Object)){
var ex__41745__auto__ = e55872;
var statearr_55873_56364 = state_55859;
(statearr_55873_56364[(5)] = ex__41745__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55872;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56367 = state_55859;
state_55859 = G__56367;
continue;
} else {
return ret_value__41743__auto__;
}
break;
}
});
jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto__ = function(state_55859){
switch(arguments.length){
case 0:
return jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto____0.call(this);
case 1:
return jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto____1.call(this,state_55859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto____0;
jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto____1;
return jasminegui$mount$http_post_dispatch_$_state_machine__41742__auto__;
})()
})();
var state__41766__auto__ = (function (){var statearr_55874 = (f__41765__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41765__auto__.cljs$core$IFn$_invoke$arity$0() : f__41765__auto__.call(null));
(statearr_55874[(6)] = c__41764__auto__);

return statearr_55874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41766__auto__);
}));

return c__41764__auto__;
});
var G__55875_56372 = new cljs.core.Keyword(null,"http-post-dispatch","http-post-dispatch",2138865017);
var G__55876_56373 = jasminegui.mount.http_post_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__55875_56372,G__55876_56373) : re_frame.core.reg_fx.call(null,G__55875_56372,G__55876_56373));
jasminegui.mount.simple_http_get_events = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-positions","get-positions",1610972586),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"positions",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"positions","positions",-1380538434)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-rating-to-score","get-rating-to-score",391912155),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"rating-to-score",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"portfolios",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-pivoted-positions","get-pivoted-positions",2145025131),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"pivoted-positions",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-total-positions","get-total-positions",-698807167),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"total-positions",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-qt-date","get-qt-date",-1072332881),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"qt-date",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-var-proxies","get-var-proxies",1252506215),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"var-proxies",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-var-dates","get-var-dates",-1039695287),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"var-dates",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword("var","dates","var/dates",-1599746364)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-betas","get-betas",-284291273),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"beta-table",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword("betas","table","betas/table",-390525241)], null)], null);
var seq__55877_56391 = cljs.core.seq(jasminegui.mount.simple_http_get_events);
var chunk__55878_56392 = null;
var count__55879_56393 = (0);
var i__55880_56394 = (0);
while(true){
if((i__55880_56394 < count__55879_56393)){
var line_56403 = chunk__55878_56392.cljs$core$IIndexed$_nth$arity$2(null,i__55880_56394);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-key","get-key",1436017019).cljs$core$IFn$_invoke$arity$1(line_56403),((function (seq__55877_56391,chunk__55878_56392,count__55879_56393,i__55880_56394,line_56403){
return (function (p__55895,p__55896){
var map__55897 = p__55895;
var map__55897__$1 = (((((!((map__55897 == null))))?(((((map__55897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55897):map__55897);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55897__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55898 = p__55896;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55898,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url-tail","url-tail",144006528).cljs$core$IFn$_invoke$arity$1(line_56403))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dis-key","dis-key",842897221).cljs$core$IFn$_invoke$arity$1(line_56403)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
});})(seq__55877_56391,chunk__55878_56392,count__55879_56393,i__55880_56394,line_56403))
);


var G__56407 = seq__55877_56391;
var G__56408 = chunk__55878_56392;
var G__56409 = count__55879_56393;
var G__56410 = (i__55880_56394 + (1));
seq__55877_56391 = G__56407;
chunk__55878_56392 = G__56408;
count__55879_56393 = G__56409;
i__55880_56394 = G__56410;
continue;
} else {
var temp__5735__auto___56412 = cljs.core.seq(seq__55877_56391);
if(temp__5735__auto___56412){
var seq__55877_56413__$1 = temp__5735__auto___56412;
if(cljs.core.chunked_seq_QMARK_(seq__55877_56413__$1)){
var c__4556__auto___56415 = cljs.core.chunk_first(seq__55877_56413__$1);
var G__56417 = cljs.core.chunk_rest(seq__55877_56413__$1);
var G__56418 = c__4556__auto___56415;
var G__56419 = cljs.core.count(c__4556__auto___56415);
var G__56420 = (0);
seq__55877_56391 = G__56417;
chunk__55878_56392 = G__56418;
count__55879_56393 = G__56419;
i__55880_56394 = G__56420;
continue;
} else {
var line_56428 = cljs.core.first(seq__55877_56413__$1);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-key","get-key",1436017019).cljs$core$IFn$_invoke$arity$1(line_56428),((function (seq__55877_56391,chunk__55878_56392,count__55879_56393,i__55880_56394,line_56428,seq__55877_56413__$1,temp__5735__auto___56412){
return (function (p__55902,p__55903){
var map__55904 = p__55902;
var map__55904__$1 = (((((!((map__55904 == null))))?(((((map__55904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55904):map__55904);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55904__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55905 = p__55903;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55905,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url-tail","url-tail",144006528).cljs$core$IFn$_invoke$arity$1(line_56428))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dis-key","dis-key",842897221).cljs$core$IFn$_invoke$arity$1(line_56428)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
});})(seq__55877_56391,chunk__55878_56392,count__55879_56393,i__55880_56394,line_56428,seq__55877_56413__$1,temp__5735__auto___56412))
);


var G__56456 = cljs.core.next(seq__55877_56413__$1);
var G__56457 = null;
var G__56458 = (0);
var G__56459 = (0);
seq__55877_56391 = G__56456;
chunk__55878_56392 = G__56457;
count__55879_56393 = G__56458;
i__55880_56394 = G__56459;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions-new","get-positions-new",1597842964),(function (p__55909,p__55910){
var map__55911 = p__55909;
var map__55911__$1 = (((((!((map__55911 == null))))?(((((map__55911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55911):map__55911);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55911__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55912 = p__55910;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55912,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55912,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"positions-new?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-new","positions-new",1631706550),portfolio], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-data","get-var-data",837806576),(function (p__55916,p__55917){
var map__55918 = p__55916;
var map__55918__$1 = (((((!((map__55918 == null))))?(((((map__55918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55918):map__55918);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55918__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55919 = p__55917;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55919,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55919,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"var-data?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-var","get-portfolio-var",1001711662),(function (p__55923,p__55924){
var map__55925 = p__55923;
var map__55925__$1 = (((((!((map__55925 == null))))?(((((map__55925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55925):map__55925);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55925__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55926 = p__55924;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55926,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55926,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),portfolio),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"var-data?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-attribution-date","get-attribution-date",-1329272944),(function (p__55930,p__55931){
var map__55932 = p__55930;
var map__55932__$1 = (((((!((map__55932 == null))))?(((((map__55932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55932):map__55932);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55932__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55933 = p__55931;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55933,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=attribution-date"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),false], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-single-attribution","get-single-attribution",-1620108505),(function (p__55937,p__55938){
var map__55939 = p__55937;
var map__55939__$1 = (((((!((map__55939 == null))))?(((((map__55939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55939):map__55939);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55939__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55940 = p__55938;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55940,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55940,(1),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55940,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-single-attribution-portfolio","change-single-attribution-portfolio",1766745939),(function (p__55944,p__55945){
var map__55946 = p__55944;
var map__55946__$1 = (((((!((map__55946 == null))))?(((((map__55946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55946):map__55946);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55946__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55947 = p__55945;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55947,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55947,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),portfolio),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450).cljs$core$IFn$_invoke$arity$1(db))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-single-attribution-period","change-single-attribution-period",860703642),(function (p__55951,p__55952){
var map__55953 = p__55951;
var map__55953__$1 = (((((!((map__55953 == null))))?(((((map__55953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55953):map__55953);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55953__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55954 = p__55952;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55954,(0),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55954,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),period),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521).cljs$core$IFn$_invoke$arity$1(db)),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-multiple-attribution","get-multiple-attribution",1245740943),(function (p__55958,p__55959){
var map__55960 = p__55958;
var map__55960__$1 = (((((!((map__55960 == null))))?(((((map__55960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55960):map__55960);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55960__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55961 = p__55959;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55961,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55961,(1),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55961,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=multiple-portfolio&target=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-multiple-attribution-target","change-multiple-attribution-target",777460289),(function (p__55965,p__55966){
var map__55967 = p__55965;
var map__55967__$1 = (((((!((map__55967 == null))))?(((((map__55967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55967):map__55967);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55967__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55968 = p__55966;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55968,(0),null);
var ktarget = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55968,(1),null);
var target = clojure.string.replace(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ktarget,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)),"-"," ");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),ktarget),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=multiple-portfolio&target=",target,"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154).cljs$core$IFn$_invoke$arity$1(db))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-multiple-attribution-period","change-multiple-attribution-period",590435537),(function (p__55972,p__55973){
var map__55974 = p__55972;
var map__55974__$1 = (((((!((map__55974 == null))))?(((((map__55974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55974):map__55974);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55974__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55975 = p__55973;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55975,(0),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55975,(1),null);
var target = clojure.string.replace(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)),"-"," ");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),period),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=multiple-portfolio&target=",target,"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-attribution-summary","get-attribution-summary",-27760654),(function (p__55979,p__55980){
var map__55981 = p__55979;
var map__55981__$1 = (((((!((map__55981 == null))))?(((((map__55981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55981):map__55981);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55981__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55982 = p__55980;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55982,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=summary"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("attribution","summary","attribution/summary",687462095)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));

//# sourceMappingURL=jasminegui.mount.js.map
