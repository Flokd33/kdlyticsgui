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
jasminegui.mount.default_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword("portfolio-review","alpha-chart-data","portfolio-review/alpha-chart-data",-243291168),new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679),new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705),new cljs.core.Keyword("multiple-portfolio-attribution","field-two","multiple-portfolio-attribution/field-two",-311759422),new cljs.core.Keyword("portfolio-trade-history","performance","portfolio-trade-history/performance",-2029881566),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword("multiple-portfolio-attribution","field-number","multiple-portfolio-attribution/field-number",-1780989148),new cljs.core.Keyword("navigation","success-modal","navigation/success-modal",533446693),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("single-bond-trade-history","bond","single-bond-trade-history/bond",2015871973),new cljs.core.Keyword("trade-history","active-bond","trade-history/active-bond",-1419462650),new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-bond-trade-history","show-flat-modal","single-bond-trade-history/show-flat-modal",1072491400),new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047),new cljs.core.Keyword("portfolio-review","marginal-beta-chart-data","portfolio-review/marginal-beta-chart-data",40550601),new cljs.core.Keyword("multiple-portfolio-attribution","display-style","multiple-portfolio-attribution/display-style",-767260119),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("portfolio-trade-history","end-date","portfolio-trade-history/end-date",68061260),new cljs.core.Keyword("var","result","var/result",1415073996),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("portfolio-review","historical-beta-chart-data","portfolio-review/historical-beta-chart-data",-1077808147),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738),new cljs.core.Keyword("attribution","summary","attribution/summary",687462095),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("navigation","active-view","navigation/active-view",800211184),new cljs.core.Keyword("portfolio-review","historical-performance-chart-data","portfolio-review/historical-performance-chart-data",1185340209),new cljs.core.Keyword("var","history","var/history",-246458543),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("navigation","active-attribution","navigation/active-attribution",600082450),new cljs.core.Keyword("portfolio-review","summary-data","portfolio-review/summary-data",-1362975725),new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181),new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219),new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("portfolio-review","jensen-chart-data","portfolio-review/jensen-chart-data",-701618636),new cljs.core.Keyword("portfolio-trade-history","portfolio","portfolio-trade-history/portfolio",160136116),new cljs.core.Keyword("multiple-portfolio-attribution","shortcut","multiple-portfolio-attribution/shortcut",809107380),new cljs.core.Keyword("navigation","active-home","navigation/active-home",1949576148),new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("single-portfolio-attribution","table-filter","single-portfolio-attribution/table-filter",1757441687),new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("navigation","active-var","navigation/active-var",39797785),new cljs.core.Keyword("single-bond-trade-history","show-modal","single-bond-trade-history/show-modal",-1585088359),new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),new cljs.core.Keyword("portfolio-trade-history","data","portfolio-trade-history/data",27790297),new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127),new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334),new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("portfolio-review","contribution-chart-data","portfolio-review/contribution-chart-data",-581811845),new cljs.core.Keyword("portfolio-review","active-tab","portfolio-review/active-tab",1429822843),new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),new cljs.core.Keyword("single-portfolio-attribution","shortcut","single-portfolio-attribution/shortcut",-1711481988),new cljs.core.Keyword("trade-history","history","trade-history/history",1084885309),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("portfolio-trade-history","start-date","portfolio-trade-history/start-date",-1590289411),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),new cljs.core.Keyword("multiple-portfolio-attribution","table-filter","multiple-portfolio-attribution/table-filter",-9483585)],[(1),null,"OGEMCORD","Tree",cljs.core.PersistentVector.EMPTY,"None","No",null,null,"One",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show","show",-576705889),false,new cljs.core.Keyword(null,"on-close","on-close",-761178394),null,new cljs.core.Keyword(null,"response","response",-1068424192),null], null),"Table",null,null,true,"undefined",new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),false,true,false,cljs.core.PersistentVector.EMPTY,null,"Tree",cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),"undefined",cljs.core.PersistentVector.EMPTY,jasminegui.tools.int_to_gdate(cljs_time.core.today()),null,cljs.core.set(null),new cljs.core.Keyword(null,"quarter","quarter",-508147616),"Tree",null,null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"home","home",-74557309),null,null,(1),new cljs.core.Keyword(null,"summary","summary",380847952),null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),"OGEMCORD",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),null,"OGEMCORD",(1),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"daily-3y","daily-3y",-2143971824),"ytd","None",cljs.core.PersistentVector.EMPTY,(1),"One","Tree",new cljs.core.Keyword(null,"overview","overview",-435037267),false,"OGEMCORD",cljs.core.set(null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),new cljs.core.Keyword(null,"total-effect","total-effect",-967715775),cljs.core.PersistentArrayMap.EMPTY,null,new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.PersistentVector.EMPTY,(1),null,"OGEMCORD",jasminegui.tools.int_to_gdate((20200101)),new cljs.core.Keyword(null,"cembi","cembi",1924920241),"ytd",cljs.core.PersistentVector.EMPTY,true,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),cljs.core.PersistentVector.EMPTY]);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jasminegui.mount","initialize-db","jasminegui.mount/initialize-db",-1621527627),(function (_,___$1){
return jasminegui.mount.default_db;
}));
var seq__112800_113217 = cljs.core.seq(cljs.core.keys(jasminegui.mount.default_db));
var chunk__112801_113218 = null;
var count__112802_113219 = (0);
var i__112803_113220 = (0);
while(true){
if((i__112803_113220 < count__112802_113219)){
var k_113223 = chunk__112801_113218.cljs$core$IIndexed$_nth$arity$2(null,i__112803_113220);
var G__112808_113224 = k_113223;
var G__112809_113225 = ((function (seq__112800_113217,chunk__112801_113218,count__112802_113219,i__112803_113220,G__112808_113224,k_113223){
return (function (db){
return (k_113223.cljs$core$IFn$_invoke$arity$1 ? k_113223.cljs$core$IFn$_invoke$arity$1(db) : k_113223.call(null,db));
});})(seq__112800_113217,chunk__112801_113218,count__112802_113219,i__112803_113220,G__112808_113224,k_113223))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__112808_113224,G__112809_113225) : re_frame.core.reg_sub.call(null,G__112808_113224,G__112809_113225));


var G__113227 = seq__112800_113217;
var G__113228 = chunk__112801_113218;
var G__113229 = count__112802_113219;
var G__113230 = (i__112803_113220 + (1));
seq__112800_113217 = G__113227;
chunk__112801_113218 = G__113228;
count__112802_113219 = G__113229;
i__112803_113220 = G__113230;
continue;
} else {
var temp__5735__auto___113232 = cljs.core.seq(seq__112800_113217);
if(temp__5735__auto___113232){
var seq__112800_113241__$1 = temp__5735__auto___113232;
if(cljs.core.chunked_seq_QMARK_(seq__112800_113241__$1)){
var c__4556__auto___113243 = cljs.core.chunk_first(seq__112800_113241__$1);
var G__113244 = cljs.core.chunk_rest(seq__112800_113241__$1);
var G__113245 = c__4556__auto___113243;
var G__113246 = cljs.core.count(c__4556__auto___113243);
var G__113247 = (0);
seq__112800_113217 = G__113244;
chunk__112801_113218 = G__113245;
count__112802_113219 = G__113246;
i__112803_113220 = G__113247;
continue;
} else {
var k_113250 = cljs.core.first(seq__112800_113241__$1);
var G__112810_113251 = k_113250;
var G__112811_113252 = ((function (seq__112800_113217,chunk__112801_113218,count__112802_113219,i__112803_113220,G__112810_113251,k_113250,seq__112800_113241__$1,temp__5735__auto___113232){
return (function (db){
return (k_113250.cljs$core$IFn$_invoke$arity$1 ? k_113250.cljs$core$IFn$_invoke$arity$1(db) : k_113250.call(null,db));
});})(seq__112800_113217,chunk__112801_113218,count__112802_113219,i__112803_113220,G__112810_113251,k_113250,seq__112800_113241__$1,temp__5735__auto___113232))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__112810_113251,G__112811_113252) : re_frame.core.reg_sub.call(null,G__112810_113251,G__112811_113252));


var G__113267 = cljs.core.next(seq__112800_113241__$1);
var G__113268 = null;
var G__113269 = (0);
var G__113270 = (0);
seq__112800_113217 = G__113267;
chunk__112801_113218 = G__113268;
count__112802_113219 = G__113269;
i__112803_113220 = G__113270;
continue;
}
} else {
}
}
break;
}
var seq__112812_113271 = cljs.core.seq(cljs.core.PersistentVector.fromArray([new cljs.core.Keyword("navigation","active-view","navigation/active-view",800211184),new cljs.core.Keyword("navigation","active-home","navigation/active-home",1949576148),new cljs.core.Keyword("navigation","active-var","navigation/active-var",39797785),new cljs.core.Keyword("navigation","active-attribution","navigation/active-attribution",600082450),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738),new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334),new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679),new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),new cljs.core.Keyword("single-portfolio-attribution","table-filter","single-portfolio-attribution/table-filter",1757441687),new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047),new cljs.core.Keyword("multiple-portfolio-attribution","display-style","multiple-portfolio-attribution/display-style",-767260119),new cljs.core.Keyword("multiple-portfolio-attribution","field-number","multiple-portfolio-attribution/field-number",-1780989148),new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),new cljs.core.Keyword("multiple-portfolio-attribution","field-two","multiple-portfolio-attribution/field-two",-311759422),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),new cljs.core.Keyword("multiple-portfolio-attribution","hide-zero-holdings","multiple-portfolio-attribution/hide-zero-holdings",1677138723),new cljs.core.Keyword("multiple-portfolio-attribution","shortcut","multiple-portfolio-attribution/shortcut",809107380),new cljs.core.Keyword("multiple-portfolio-attribution","table-filter","multiple-portfolio-attribution/table-filter",-9483585),new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705),new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),new cljs.core.Keyword("attribution","summary","attribution/summary",687462095),new cljs.core.Keyword("single-bond-trade-history","show-flat-modal","single-bond-trade-history/show-flat-modal",1072491400),new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181),new cljs.core.Keyword("single-bond-trade-history","show-modal","single-bond-trade-history/show-modal",-1585088359),new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127),new cljs.core.Keyword("single-bond-trade-history","bond","single-bond-trade-history/bond",2015871973),new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865),new cljs.core.Keyword("portfolio-trade-history","portfolio","portfolio-trade-history/portfolio",160136116),new cljs.core.Keyword("portfolio-trade-history","start-date","portfolio-trade-history/start-date",-1590289411),new cljs.core.Keyword("portfolio-trade-history","end-date","portfolio-trade-history/end-date",68061260),new cljs.core.Keyword("portfolio-trade-history","performance","portfolio-trade-history/performance",-2029881566),new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321),new cljs.core.Keyword("portfolio-review","active-tab","portfolio-review/active-tab",1429822843),new cljs.core.Keyword("portfolio-review","summary-data","portfolio-review/summary-data",-1362975725),new cljs.core.Keyword("portfolio-review","contribution-chart-data","portfolio-review/contribution-chart-data",-581811845),new cljs.core.Keyword("portfolio-review","alpha-chart-data","portfolio-review/alpha-chart-data",-243291168),new cljs.core.Keyword("portfolio-review","jensen-chart-data","portfolio-review/jensen-chart-data",-701618636),new cljs.core.Keyword("portfolio-review","marginal-beta-chart-data","portfolio-review/marginal-beta-chart-data",40550601),new cljs.core.Keyword("portfolio-review","historical-beta-chart-data","portfolio-review/historical-beta-chart-data",-1077808147),new cljs.core.Keyword("portfolio-review","historical-performance-chart-data","portfolio-review/historical-performance-chart-data",1185340209)], true));
var chunk__112813_113272 = null;
var count__112814_113273 = (0);
var i__112815_113274 = (0);
while(true){
if((i__112815_113274 < count__112814_113273)){
var k_113279 = chunk__112813_113272.cljs$core$IIndexed$_nth$arity$2(null,i__112815_113274);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_113279,((function (seq__112812_113271,chunk__112813_113272,count__112814_113273,i__112815_113274,k_113279){
return (function (db,p__112828){
var vec__112830 = p__112828;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__112830,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__112830,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_113279,data);
});})(seq__112812_113271,chunk__112813_113272,count__112814_113273,i__112815_113274,k_113279))
);


var G__113290 = seq__112812_113271;
var G__113291 = chunk__112813_113272;
var G__113292 = count__112814_113273;
var G__113293 = (i__112815_113274 + (1));
seq__112812_113271 = G__113290;
chunk__112813_113272 = G__113291;
count__112814_113273 = G__113292;
i__112815_113274 = G__113293;
continue;
} else {
var temp__5735__auto___113296 = cljs.core.seq(seq__112812_113271);
if(temp__5735__auto___113296){
var seq__112812_113297__$1 = temp__5735__auto___113296;
if(cljs.core.chunked_seq_QMARK_(seq__112812_113297__$1)){
var c__4556__auto___113298 = cljs.core.chunk_first(seq__112812_113297__$1);
var G__113300 = cljs.core.chunk_rest(seq__112812_113297__$1);
var G__113301 = c__4556__auto___113298;
var G__113302 = cljs.core.count(c__4556__auto___113298);
var G__113303 = (0);
seq__112812_113271 = G__113300;
chunk__112813_113272 = G__113301;
count__112814_113273 = G__113302;
i__112815_113274 = G__113303;
continue;
} else {
var k_113305 = cljs.core.first(seq__112812_113297__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_113305,((function (seq__112812_113271,chunk__112813_113272,count__112814_113273,i__112815_113274,k_113305,seq__112812_113297__$1,temp__5735__auto___113296){
return (function (db,p__112836){
var vec__112837 = p__112836;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__112837,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__112837,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_113305,data);
});})(seq__112812_113271,chunk__112813_113272,count__112814_113273,i__112815_113274,k_113305,seq__112812_113297__$1,temp__5735__auto___113296))
);


var G__113313 = cljs.core.next(seq__112812_113297__$1);
var G__113314 = null;
var G__113315 = (0);
var G__113316 = (0);
seq__112812_113271 = G__113313;
chunk__112813_113272 = G__113314;
count__112814_113273 = G__113315;
i__112815_113274 = G__113316;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"positions","positions",-1380538434),(function (db,p__112844){
var vec__112846 = p__112844;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__112846,(0),null);
var positions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__112846,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"positions","positions",-1380538434),positions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),(function (db,p__112849){
var vec__112850 = p__112849;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__112850,(0),null);
var portfolios = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__112850,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),portfolios,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),cljs.core.set(portfolios),new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),cljs.core.set(portfolios)], 0));
}));
var seq__112853_113350 = cljs.core.seq(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219)], null));
var chunk__112854_113351 = null;
var count__112855_113352 = (0);
var i__112856_113353 = (0);
while(true){
if((i__112856_113353 < count__112855_113352)){
var k_113363 = chunk__112854_113351.cljs$core$IIndexed$_nth$arity$2(null,i__112856_113353);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_113363,((function (seq__112853_113350,chunk__112854_113351,count__112855_113352,i__112856_113353,k_113363){
return (function (db,p__112865){
var vec__112866 = p__112865;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__112866,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__112866,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__112866,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_113363,id], null),f);
});})(seq__112853_113350,chunk__112854_113351,count__112855_113352,i__112856_113353,k_113363))
);


var G__113369 = seq__112853_113350;
var G__113370 = chunk__112854_113351;
var G__113371 = count__112855_113352;
var G__113372 = (i__112856_113353 + (1));
seq__112853_113350 = G__113369;
chunk__112854_113351 = G__113370;
count__112855_113352 = G__113371;
i__112856_113353 = G__113372;
continue;
} else {
var temp__5735__auto___113373 = cljs.core.seq(seq__112853_113350);
if(temp__5735__auto___113373){
var seq__112853_113375__$1 = temp__5735__auto___113373;
if(cljs.core.chunked_seq_QMARK_(seq__112853_113375__$1)){
var c__4556__auto___113376 = cljs.core.chunk_first(seq__112853_113375__$1);
var G__113377 = cljs.core.chunk_rest(seq__112853_113375__$1);
var G__113378 = c__4556__auto___113376;
var G__113379 = cljs.core.count(c__4556__auto___113376);
var G__113380 = (0);
seq__112853_113350 = G__113377;
chunk__112854_113351 = G__113378;
count__112855_113352 = G__113379;
i__112856_113353 = G__113380;
continue;
} else {
var k_113385 = cljs.core.first(seq__112853_113375__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_113385,((function (seq__112853_113350,chunk__112854_113351,count__112855_113352,i__112856_113353,k_113385,seq__112853_113375__$1,temp__5735__auto___113373){
return (function (db,p__112870){
var vec__112871 = p__112870;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__112871,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__112871,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__112871,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_113385,id], null),f);
});})(seq__112853_113350,chunk__112854_113351,count__112855_113352,i__112856_113353,k_113385,seq__112853_113375__$1,temp__5735__auto___113373))
);


var G__113398 = cljs.core.next(seq__112853_113375__$1);
var G__113399 = null;
var G__113400 = (0);
var G__113401 = (0);
seq__112853_113350 = G__113398;
chunk__112854_113351 = G__113399;
count__112855_113352 = G__113400;
i__112856_113353 = G__113401;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),(function (db,p__112874){
var vec__112875 = p__112874;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__112875,(0),null);
var qt_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__112875,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),clojure.string.replace(qt_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),(function (db,p__112878){
var vec__112879 = p__112878;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__112879,(0),null);
var attribution_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__112879,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),clojure.string.replace(attribution_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),(function (db,p__112882){
var vec__112883 = p__112882;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__112883,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__112883,(1),null);
var G__112886 = snapshot;
switch (G__112886) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__112886)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cycle-shortcut","cycle-shortcut",-1617058214),(function (db,p__112887){
var vec__112888 = p__112887;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__112888,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__112888,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__112888,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword("navigation","active-home","navigation/active-home",1949576148).cljs$core$IFn$_invoke$arity$1(db)),"-risk/shortcut"].join(''));
var shortcut_value = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
if((shortcut_value < (4))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(shortcut_value + (1)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(1));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tree-table","tree-table",-1263002012),(function (db,p__112891){
var vec__112892 = p__112891;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__112892,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__112892,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__112892,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword("navigation","active-home","navigation/active-home",1949576148).cljs$core$IFn$_invoke$arity$1(db)),"-risk/display-style"].join(''));
var G__112895 = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
switch (G__112895) {
case "Tree":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Table");

break;
case "Table":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Tree");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__112895)].join('')));

}
}));
jasminegui.mount.http_get_dispatch = (function jasminegui$mount$http_get_dispatch(request){
var c__41764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41765__auto__ = (function (){var switch__41719__auto__ = (function (state_112924){
var state_val_112925 = (state_112924[(1)]);
if((state_val_112925 === (1))){
var inst_112896 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_112897 = cljs_http.client.get(inst_112896);
var state_112924__$1 = state_112924;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_112924__$1,(2),inst_112897);
} else {
if((state_val_112925 === (2))){
var inst_112899 = (state_112924[(2)]);
var inst_112900 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_112901 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_112924__$1 = (function (){var statearr_112926 = state_112924;
(statearr_112926[(7)] = inst_112899);

(statearr_112926[(8)] = inst_112900);

return statearr_112926;
})();
if(cljs.core.truth_(inst_112901)){
var statearr_112927_113457 = state_112924__$1;
(statearr_112927_113457[(1)] = (3));

} else {
var statearr_112928_113458 = state_112924__$1;
(statearr_112928_113458[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112925 === (3))){
var inst_112899 = (state_112924[(7)]);
var inst_112903 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_112899);
var inst_112904 = JSON.parse(inst_112903);
var inst_112905 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_112904,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_112924__$1 = state_112924;
var statearr_112929_113462 = state_112924__$1;
(statearr_112929_113462[(2)] = inst_112905);

(statearr_112929_113462[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112925 === (4))){
var inst_112899 = (state_112924[(7)]);
var inst_112907 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_112899);
var state_112924__$1 = state_112924;
var statearr_112930_113469 = state_112924__$1;
(statearr_112930_113469[(2)] = inst_112907);

(statearr_112930_113469[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112925 === (5))){
var inst_112900 = (state_112924[(8)]);
var inst_112909 = (state_112924[(2)]);
var inst_112910 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_112900,inst_112909);
var inst_112911 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_112910) : re_frame.core.dispatch.call(null,inst_112910));
var inst_112912 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_112924__$1 = (function (){var statearr_112931 = state_112924;
(statearr_112931[(9)] = inst_112911);

return statearr_112931;
})();
if(cljs.core.truth_(inst_112912)){
var statearr_112932_113474 = state_112924__$1;
(statearr_112932_113474[(1)] = (6));

} else {
var statearr_112933_113479 = state_112924__$1;
(statearr_112933_113479[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112925 === (6))){
var inst_112914 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_112915 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_112916 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_112917 = [inst_112915,inst_112916];
var inst_112918 = (new cljs.core.PersistentVector(null,2,(5),inst_112914,inst_112917,null));
var inst_112919 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_112918) : re_frame.core.dispatch.call(null,inst_112918));
var state_112924__$1 = state_112924;
var statearr_112934_113484 = state_112924__$1;
(statearr_112934_113484[(2)] = inst_112919);

(statearr_112934_113484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112925 === (7))){
var state_112924__$1 = state_112924;
var statearr_112935_113485 = state_112924__$1;
(statearr_112935_113485[(2)] = null);

(statearr_112935_113485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112925 === (8))){
var inst_112922 = (state_112924[(2)]);
var state_112924__$1 = state_112924;
return cljs.core.async.impl.ioc_helpers.return_chan(state_112924__$1,inst_112922);
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
var statearr_112936 = [null,null,null,null,null,null,null,null,null,null];
(statearr_112936[(0)] = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__);

(statearr_112936[(1)] = (1));

return statearr_112936;
});
var jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1 = (function (state_112924){
while(true){
var ret_value__41721__auto__ = (function (){try{while(true){
var result__41722__auto__ = switch__41719__auto__(state_112924);
if(cljs.core.keyword_identical_QMARK_(result__41722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41722__auto__;
}
break;
}
}catch (e112937){if((e112937 instanceof Object)){
var ex__41723__auto__ = e112937;
var statearr_112938_113491 = state_112924;
(statearr_112938_113491[(5)] = ex__41723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_112924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e112937;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__113495 = state_112924;
state_112924 = G__113495;
continue;
} else {
return ret_value__41721__auto__;
}
break;
}
});
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__ = function(state_112924){
switch(arguments.length){
case 0:
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____0.call(this);
case 1:
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1.call(this,state_112924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____0;
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1;
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__;
})()
})();
var state__41766__auto__ = (function (){var statearr_112939 = (f__41765__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41765__auto__.cljs$core$IFn$_invoke$arity$0() : f__41765__auto__.call(null));
(statearr_112939[(6)] = c__41764__auto__);

return statearr_112939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41766__auto__);
}));

return c__41764__auto__;
});
var G__112940_113500 = new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518);
var G__112941_113501 = jasminegui.mount.http_get_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__112940_113500,G__112941_113501) : re_frame.core.reg_fx.call(null,G__112940_113500,G__112941_113501));
jasminegui.mount.http_post_dispatch = (function jasminegui$mount$http_post_dispatch(request){
var c__41764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41765__auto__ = (function (){var switch__41719__auto__ = (function (state_112974){
var state_val_112975 = (state_112974[(1)]);
if((state_val_112975 === (1))){
var inst_112942 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_112943 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_112944 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
var inst_112945 = [inst_112944];
var inst_112946 = cljs.core.PersistentHashMap.fromArrays(inst_112943,inst_112945);
var inst_112947 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_112942,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_112946], 0));
var state_112974__$1 = state_112974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_112974__$1,(2),inst_112947);
} else {
if((state_val_112975 === (2))){
var inst_112949 = (state_112974[(2)]);
var inst_112950 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_112951 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_112974__$1 = (function (){var statearr_112976 = state_112974;
(statearr_112976[(7)] = inst_112949);

(statearr_112976[(8)] = inst_112950);

return statearr_112976;
})();
if(cljs.core.truth_(inst_112951)){
var statearr_112977_113517 = state_112974__$1;
(statearr_112977_113517[(1)] = (3));

} else {
var statearr_112978_113518 = state_112974__$1;
(statearr_112978_113518[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112975 === (3))){
var inst_112949 = (state_112974[(7)]);
var inst_112953 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_112949);
var inst_112954 = JSON.parse(inst_112953);
var inst_112955 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_112954,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_112974__$1 = state_112974;
var statearr_112979_113526 = state_112974__$1;
(statearr_112979_113526[(2)] = inst_112955);

(statearr_112979_113526[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112975 === (4))){
var inst_112949 = (state_112974[(7)]);
var inst_112957 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_112949);
var state_112974__$1 = state_112974;
var statearr_112980_113533 = state_112974__$1;
(statearr_112980_113533[(2)] = inst_112957);

(statearr_112980_113533[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112975 === (5))){
var inst_112950 = (state_112974[(8)]);
var inst_112959 = (state_112974[(2)]);
var inst_112960 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_112950,inst_112959);
var inst_112961 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_112960) : re_frame.core.dispatch.call(null,inst_112960));
var inst_112962 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_112974__$1 = (function (){var statearr_112981 = state_112974;
(statearr_112981[(9)] = inst_112961);

return statearr_112981;
})();
if(cljs.core.truth_(inst_112962)){
var statearr_112982_113541 = state_112974__$1;
(statearr_112982_113541[(1)] = (6));

} else {
var statearr_112983_113542 = state_112974__$1;
(statearr_112983_113542[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112975 === (6))){
var inst_112964 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_112965 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_112966 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_112967 = [inst_112965,inst_112966];
var inst_112968 = (new cljs.core.PersistentVector(null,2,(5),inst_112964,inst_112967,null));
var inst_112969 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_112968) : re_frame.core.dispatch.call(null,inst_112968));
var state_112974__$1 = state_112974;
var statearr_112984_113544 = state_112974__$1;
(statearr_112984_113544[(2)] = inst_112969);

(statearr_112984_113544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112975 === (7))){
var state_112974__$1 = state_112974;
var statearr_112985_113545 = state_112974__$1;
(statearr_112985_113545[(2)] = null);

(statearr_112985_113545[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112975 === (8))){
var inst_112972 = (state_112974[(2)]);
var state_112974__$1 = state_112974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_112974__$1,inst_112972);
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
var statearr_112986 = [null,null,null,null,null,null,null,null,null,null];
(statearr_112986[(0)] = jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__);

(statearr_112986[(1)] = (1));

return statearr_112986;
});
var jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____1 = (function (state_112974){
while(true){
var ret_value__41721__auto__ = (function (){try{while(true){
var result__41722__auto__ = switch__41719__auto__(state_112974);
if(cljs.core.keyword_identical_QMARK_(result__41722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41722__auto__;
}
break;
}
}catch (e112987){if((e112987 instanceof Object)){
var ex__41723__auto__ = e112987;
var statearr_112988_113580 = state_112974;
(statearr_112988_113580[(5)] = ex__41723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_112974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e112987;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__113581 = state_112974;
state_112974 = G__113581;
continue;
} else {
return ret_value__41721__auto__;
}
break;
}
});
jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__ = function(state_112974){
switch(arguments.length){
case 0:
return jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____0.call(this);
case 1:
return jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____1.call(this,state_112974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____0;
jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto____1;
return jasminegui$mount$http_post_dispatch_$_state_machine__41720__auto__;
})()
})();
var state__41766__auto__ = (function (){var statearr_112989 = (f__41765__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41765__auto__.cljs$core$IFn$_invoke$arity$0() : f__41765__auto__.call(null));
(statearr_112989[(6)] = c__41764__auto__);

return statearr_112989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41766__auto__);
}));

return c__41764__auto__;
});
var G__112990_113583 = new cljs.core.Keyword(null,"http-post-dispatch","http-post-dispatch",2138865017);
var G__112991_113584 = jasminegui.mount.http_post_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__112990_113583,G__112991_113584) : re_frame.core.reg_fx.call(null,G__112990_113583,G__112991_113584));
jasminegui.mount.simple_http_get_events = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-positions","get-positions",1610972586),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"positions",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"positions","positions",-1380538434)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-rating-to-score","get-rating-to-score",391912155),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"rating-to-score",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"portfolios",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-pivoted-positions","get-pivoted-positions",2145025131),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"pivoted-positions",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-total-positions","get-total-positions",-698807167),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"total-positions",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-qt-date","get-qt-date",-1072332881),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"qt-date",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-var-proxies","get-var-proxies",1252506215),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"var-proxies",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-var-dates","get-var-dates",-1039695287),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"var-dates",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword("var","dates","var/dates",-1599746364)], null)], null);
var seq__112992_113595 = cljs.core.seq(jasminegui.mount.simple_http_get_events);
var chunk__112993_113596 = null;
var count__112994_113597 = (0);
var i__112995_113598 = (0);
while(true){
if((i__112995_113598 < count__112994_113597)){
var line_113599 = chunk__112993_113596.cljs$core$IIndexed$_nth$arity$2(null,i__112995_113598);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-key","get-key",1436017019).cljs$core$IFn$_invoke$arity$1(line_113599),((function (seq__112992_113595,chunk__112993_113596,count__112994_113597,i__112995_113598,line_113599){
return (function (p__113010,p__113011){
var map__113012 = p__113010;
var map__113012__$1 = (((((!((map__113012 == null))))?(((((map__113012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__113012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__113012):map__113012);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113012__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__113013 = p__113011;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113013,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url-tail","url-tail",144006528).cljs$core$IFn$_invoke$arity$1(line_113599))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dis-key","dis-key",842897221).cljs$core$IFn$_invoke$arity$1(line_113599)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
});})(seq__112992_113595,chunk__112993_113596,count__112994_113597,i__112995_113598,line_113599))
);


var G__113610 = seq__112992_113595;
var G__113611 = chunk__112993_113596;
var G__113612 = count__112994_113597;
var G__113613 = (i__112995_113598 + (1));
seq__112992_113595 = G__113610;
chunk__112993_113596 = G__113611;
count__112994_113597 = G__113612;
i__112995_113598 = G__113613;
continue;
} else {
var temp__5735__auto___113614 = cljs.core.seq(seq__112992_113595);
if(temp__5735__auto___113614){
var seq__112992_113615__$1 = temp__5735__auto___113614;
if(cljs.core.chunked_seq_QMARK_(seq__112992_113615__$1)){
var c__4556__auto___113616 = cljs.core.chunk_first(seq__112992_113615__$1);
var G__113620 = cljs.core.chunk_rest(seq__112992_113615__$1);
var G__113621 = c__4556__auto___113616;
var G__113622 = cljs.core.count(c__4556__auto___113616);
var G__113623 = (0);
seq__112992_113595 = G__113620;
chunk__112993_113596 = G__113621;
count__112994_113597 = G__113622;
i__112995_113598 = G__113623;
continue;
} else {
var line_113639 = cljs.core.first(seq__112992_113615__$1);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-key","get-key",1436017019).cljs$core$IFn$_invoke$arity$1(line_113639),((function (seq__112992_113595,chunk__112993_113596,count__112994_113597,i__112995_113598,line_113639,seq__112992_113615__$1,temp__5735__auto___113614){
return (function (p__113017,p__113018){
var map__113019 = p__113017;
var map__113019__$1 = (((((!((map__113019 == null))))?(((((map__113019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__113019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__113019):map__113019);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113019__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__113020 = p__113018;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113020,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url-tail","url-tail",144006528).cljs$core$IFn$_invoke$arity$1(line_113639))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dis-key","dis-key",842897221).cljs$core$IFn$_invoke$arity$1(line_113639)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
});})(seq__112992_113595,chunk__112993_113596,count__112994_113597,i__112995_113598,line_113639,seq__112992_113615__$1,temp__5735__auto___113614))
);


var G__113647 = cljs.core.next(seq__112992_113615__$1);
var G__113648 = null;
var G__113649 = (0);
var G__113650 = (0);
seq__112992_113595 = G__113647;
chunk__112993_113596 = G__113648;
count__112994_113597 = G__113649;
i__112995_113598 = G__113650;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-data","get-var-data",837806576),(function (p__113024,p__113025){
var map__113026 = p__113024;
var map__113026__$1 = (((((!((map__113026 == null))))?(((((map__113026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__113026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__113026):map__113026);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113026__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__113027 = p__113025;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113027,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113027,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"var-data?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-var","get-portfolio-var",1001711662),(function (p__113031,p__113032){
var map__113033 = p__113031;
var map__113033__$1 = (((((!((map__113033 == null))))?(((((map__113033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__113033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__113033):map__113033);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113033__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__113034 = p__113032;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113034,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113034,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),portfolio),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"var-data?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-attribution-date","get-attribution-date",-1329272944),(function (p__113038,p__113039){
var map__113040 = p__113038;
var map__113040__$1 = (((((!((map__113040 == null))))?(((((map__113040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__113040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__113040):map__113040);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113040__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__113041 = p__113039;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113041,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=attribution-date"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),false], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-single-attribution","get-single-attribution",-1620108505),(function (p__113045,p__113046){
var map__113047 = p__113045;
var map__113047__$1 = (((((!((map__113047 == null))))?(((((map__113047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__113047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__113047):map__113047);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113047__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__113048 = p__113046;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113048,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113048,(1),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113048,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-single-attribution-portfolio","change-single-attribution-portfolio",1766745939),(function (p__113052,p__113053){
var map__113054 = p__113052;
var map__113054__$1 = (((((!((map__113054 == null))))?(((((map__113054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__113054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__113054):map__113054);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113054__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__113055 = p__113053;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113055,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113055,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521),portfolio),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450).cljs$core$IFn$_invoke$arity$1(db))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-single-attribution-period","change-single-attribution-period",860703642),(function (p__113059,p__113060){
var map__113061 = p__113059;
var map__113061__$1 = (((((!((map__113061 == null))))?(((((map__113061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__113061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__113061):map__113061);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113061__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__113062 = p__113060;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113062,(0),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113062,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450),period),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=single-portfolio&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521).cljs$core$IFn$_invoke$arity$1(db)),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-multiple-attribution","get-multiple-attribution",1245740943),(function (p__113066,p__113067){
var map__113068 = p__113066;
var map__113068__$1 = (((((!((map__113068 == null))))?(((((map__113068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__113068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__113068):map__113068);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113068__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__113069 = p__113067;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113069,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113069,(1),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113069,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=multiple-portfolio&target=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-multiple-attribution-target","change-multiple-attribution-target",777460289),(function (p__113073,p__113074){
var map__113075 = p__113073;
var map__113075__$1 = (((((!((map__113075 == null))))?(((((map__113075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__113075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__113075):map__113075);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113075__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__113076 = p__113074;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113076,(0),null);
var ktarget = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113076,(1),null);
var target = clojure.string.replace(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ktarget,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)),"-"," ");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707),ktarget),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=multiple-portfolio&target=",target,"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154).cljs$core$IFn$_invoke$arity$1(db))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-multiple-attribution-period","change-multiple-attribution-period",590435537),(function (p__113080,p__113081){
var map__113082 = p__113080;
var map__113082__$1 = (((((!((map__113082 == null))))?(((((map__113082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__113082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__113082):map__113082);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113082__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__113083 = p__113081;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113083,(0),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113083,(1),null);
var target = clojure.string.replace(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)),"-"," ");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154),period),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=multiple-portfolio&target=",target,"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-attribution-summary","get-attribution-summary",-27760654),(function (p__113087,p__113088){
var map__113089 = p__113087;
var map__113089__$1 = (((((!((map__113089 == null))))?(((((map__113089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__113089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__113089):map__113089);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113089__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__113090 = p__113088;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113090,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=summary"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("attribution","summary","attribution/summary",687462095)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));

//# sourceMappingURL=jasminegui.mount.js.map
