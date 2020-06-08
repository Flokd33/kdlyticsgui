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
jasminegui.mount.default_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword(null,"active-var","active-var",-1787478523),new cljs.core.Keyword("trade-history","active-bond","trade-history/active-bond",-1419462650),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("var","result","var/result",1415073996),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("var","history","var/history",-246458543),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword("trade-history","history","trade-history/history",1084885309),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081)],[(1),new cljs.core.Keyword(null,"summary","summary",380847952),null,null,"Table",new cljs.core.Keyword(null,"overview","overview",-435037267),null,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),true,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),"undefined",cljs.core.PersistentVector.EMPTY,null,cljs.core.set(null),new cljs.core.Keyword(null,"quarter","quarter",-508147616),"Tree",null,new cljs.core.Keyword(null,"nav","nav",719540477),null,(1),"OGEMCORD",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),new cljs.core.Keyword(null,"daily-3y","daily-3y",-2143971824),"None",(1),"One","Tree",null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"home","home",-74557309),null,"OGEMCORD",new cljs.core.Keyword(null,"cembi","cembi",1924920241),cljs.core.PersistentVector.EMPTY,true,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null)]);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jasminegui.mount","initialize-db","jasminegui.mount/initialize-db",-1621527627),(function (_,___$1){
return jasminegui.mount.default_db;
}));
var seq__48961_49250 = cljs.core.seq(cljs.core.keys(jasminegui.mount.default_db));
var chunk__48962_49251 = null;
var count__48963_49252 = (0);
var i__48964_49253 = (0);
while(true){
if((i__48964_49253 < count__48963_49252)){
var k_49254 = chunk__48962_49251.cljs$core$IIndexed$_nth$arity$2(null,i__48964_49253);
var G__48969_49255 = k_49254;
var G__48970_49256 = ((function (seq__48961_49250,chunk__48962_49251,count__48963_49252,i__48964_49253,G__48969_49255,k_49254){
return (function (db){
return (k_49254.cljs$core$IFn$_invoke$arity$1 ? k_49254.cljs$core$IFn$_invoke$arity$1(db) : k_49254.call(null,db));
});})(seq__48961_49250,chunk__48962_49251,count__48963_49252,i__48964_49253,G__48969_49255,k_49254))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__48969_49255,G__48970_49256) : re_frame.core.reg_sub.call(null,G__48969_49255,G__48970_49256));


var G__49258 = seq__48961_49250;
var G__49259 = chunk__48962_49251;
var G__49260 = count__48963_49252;
var G__49261 = (i__48964_49253 + (1));
seq__48961_49250 = G__49258;
chunk__48962_49251 = G__49259;
count__48963_49252 = G__49260;
i__48964_49253 = G__49261;
continue;
} else {
var temp__5735__auto___49262 = cljs.core.seq(seq__48961_49250);
if(temp__5735__auto___49262){
var seq__48961_49263__$1 = temp__5735__auto___49262;
if(cljs.core.chunked_seq_QMARK_(seq__48961_49263__$1)){
var c__4556__auto___49265 = cljs.core.chunk_first(seq__48961_49263__$1);
var G__49266 = cljs.core.chunk_rest(seq__48961_49263__$1);
var G__49267 = c__4556__auto___49265;
var G__49268 = cljs.core.count(c__4556__auto___49265);
var G__49269 = (0);
seq__48961_49250 = G__49266;
chunk__48962_49251 = G__49267;
count__48963_49252 = G__49268;
i__48964_49253 = G__49269;
continue;
} else {
var k_49271 = cljs.core.first(seq__48961_49263__$1);
var G__48971_49272 = k_49271;
var G__48972_49273 = ((function (seq__48961_49250,chunk__48962_49251,count__48963_49252,i__48964_49253,G__48971_49272,k_49271,seq__48961_49263__$1,temp__5735__auto___49262){
return (function (db){
return (k_49271.cljs$core$IFn$_invoke$arity$1 ? k_49271.cljs$core$IFn$_invoke$arity$1(db) : k_49271.call(null,db));
});})(seq__48961_49250,chunk__48962_49251,count__48963_49252,i__48964_49253,G__48971_49272,k_49271,seq__48961_49263__$1,temp__5735__auto___49262))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__48971_49272,G__48972_49273) : re_frame.core.reg_sub.call(null,G__48971_49272,G__48972_49273));


var G__49274 = cljs.core.next(seq__48961_49263__$1);
var G__49275 = null;
var G__49276 = (0);
var G__49277 = (0);
seq__48961_49250 = G__49274;
chunk__48962_49251 = G__49275;
count__48963_49252 = G__49276;
i__48964_49253 = G__49277;
continue;
}
} else {
}
}
break;
}
jasminegui.mount.first_level_sort = (function jasminegui$mount$first_level_sort(x){
var G__48973 = x;
switch (G__48973) {
case "Cash":
return "AAA";

break;
case "Collateral":
return "AAA";

break;
case "Forwards":
return "AAA";

break;
case "Equities":
return "AAA";

break;
default:
return x;

}
});
jasminegui.mount.add_total_line_to_pivot = (function jasminegui$mount$add_total_line_to_pivot(pivoted_table,kportfolios){
var total_line = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"jpm-region","jpm-region",-2074265852),"Total",new cljs.core.Keyword(null,"qt-jpm-sector","qt-jpm-sector",1047055349),"Total",new cljs.core.Keyword(null,"qt-risk-country-name","qt-risk-country-name",1182905474),"Total",new cljs.core.Keyword(null,"TICKER","TICKER",-1215969144),"Total",new cljs.core.Keyword(null,"NAME","NAME",-1127916515),"Total",new cljs.core.Keyword(null,"description","description",-1428560544),"Total",new cljs.core.Keyword(null,"isin","isin",-1197420747),"Total",new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),"Total"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$add_total_line_to_pivot_$_iter__48974(s__48975){
return (new cljs.core.LazySeq(null,(function (){
var s__48975__$1 = s__48975;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__48975__$1);
if(temp__5735__auto__){
var s__48975__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48975__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__48975__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__48977 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__48976 = (0);
while(true){
if((i__48976 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__48976);
cljs.core.chunk_append(b__48977,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(p,pivoted_table))], null));

var G__49282 = (i__48976 + (1));
i__48976 = G__49282;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48977),jasminegui$mount$add_total_line_to_pivot_$_iter__48974(cljs.core.chunk_rest(s__48975__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48977),null);
}
} else {
var p = cljs.core.first(s__48975__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(p,pivoted_table))], null),jasminegui$mount$add_total_line_to_pivot_$_iter__48974(cljs.core.rest(s__48975__$2)));
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
var G__48985_49286 = new cljs.core.Keyword("single-portfolio-risk","table","single-portfolio-risk/table",-637924467);
var G__48986_49287 = (function (db){
var positions = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db);
var portfolio = new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949).cljs$core$IFn$_invoke$arity$1(db);
var portfolio_total_line = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var G__48988 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(portfolio);
var fexpr__48987 = new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db);
return (fexpr__48987.cljs$core$IFn$_invoke$arity$1 ? fexpr__48987.cljs$core$IFn$_invoke$arity$1(G__48988) : fexpr__48987.call(null,G__48988));
})(),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),"Total",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),"00 Total"], 0));
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477).cljs$core$IFn$_invoke$arity$1(db),"Tree");
var portfolio_positions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48982_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__48982_SHARP_),portfolio);
}),positions);
var viewable_positions = (cljs.core.truth_((((!(is_tree)))?new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951).cljs$core$IFn$_invoke$arity$1(db):false))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48983_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(p1__48983_SHARP_),(0));
}),portfolio_positions):portfolio_positions);
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__48993 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__48993) : re_frame.core.subscribe.call(null,G__48993));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__48984_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__48984_SHARP_) : rfil.call(null,p1__48984_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__48984_SHARP_) : rfil.call(null,p1__48984_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__48994(s__48995){
return (new cljs.core.LazySeq(null,(function (){
var s__48995__$1 = s__48995;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__48995__$1);
if(temp__5735__auto__){
var s__48995__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48995__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__48995__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__48997 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__48996 = (0);
while(true){
if((i__48996 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__48996);
cljs.core.chunk_append(b__48997,(jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)));

var G__49299 = (i__48996 + (1));
i__48996 = G__49299;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48997),jasminegui$mount$iter__48994(cljs.core.chunk_rest(s__48995__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48997),null);
}
} else {
var r = cljs.core.first(s__48995__$2);
return cljs.core.cons((jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)),jasminegui$mount$iter__48994(cljs.core.rest(s__48995__$2)));
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__48985_49286,G__48986_49287) : re_frame.core.reg_sub.call(null,G__48985_49286,G__48986_49287));
var G__49005_49304 = new cljs.core.Keyword("multiple-portfolio-risk","table","multiple-portfolio-risk/table",1962237397);
var G__49006_49305 = (function (db){
var pivoted_positions = new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863).cljs$core$IFn$_invoke$arity$1(db);
var kselected_portfolios = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045).cljs$core$IFn$_invoke$arity$1(db));
var hide_zero_risk = new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337).cljs$core$IFn$_invoke$arity$1(db);
var display_key_one = new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337).cljs$core$IFn$_invoke$arity$1(db);
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547).cljs$core$IFn$_invoke$arity$1(db),"Tree");
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__49007 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49007) : re_frame.core.subscribe.call(null,G__49007));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49003_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__49003_SHARP_) : rfil.call(null,p1__49003_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__49003_SHARP_) : rfil.call(null,p1__49003_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__49008(s__49009){
return (new cljs.core.LazySeq(null,(function (){
var s__49009__$1 = s__49009;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49009__$1);
if(temp__5735__auto__){
var s__49009__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49009__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49009__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49011 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49010 = (0);
while(true){
if((i__49010 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__49010);
cljs.core.chunk_append(b__49011,(jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)));

var G__49310 = (i__49010 + (1));
i__49010 = G__49310;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49011),jasminegui$mount$iter__49008(cljs.core.chunk_rest(s__49009__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49011),null);
}
} else {
var r = cljs.core.first(s__49009__$2);
return cljs.core.cons((jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)),jasminegui$mount$iter__49008(cljs.core.rest(s__49009__$2)));
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
var pivoted_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49004_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__49004_SHARP_,(function (){var fexpr__49012 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_one,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__49012.cljs$core$IFn$_invoke$arity$1 ? fexpr__49012.cljs$core$IFn$_invoke$arity$1(p1__49004_SHARP_) : fexpr__49012.call(null,p1__49004_SHARP_));
})()], 0));
}),pivoted_positions);
var thfil = (function (line){
return (!(cljs.core.every_QMARK_(cljs.core.zero_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(line,kselected_portfolios))));
});
var pivoted_data_hide_zero = (cljs.core.truth_((((!(is_tree)))?hide_zero_risk:false))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(thfil,pivoted_data):pivoted_data);
return jasminegui.mount.add_total_line_to_pivot(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.mount.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),pivoted_data_hide_zero),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(db)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49005_49304,G__49006_49305) : re_frame.core.reg_sub.call(null,G__49005_49304,G__49006_49305));
var G__49017_49319 = new cljs.core.Keyword("portfolio-alignment","table","portfolio-alignment/table",-1411501022);
var G__49018_49320 = (function (db){
var group = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49013_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__49013_SHARP_),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110).cljs$core$IFn$_invoke$arity$1(db));
}),jasminegui.static$.portfolio_alignment_groups))));
var pivoted_positions = new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863).cljs$core$IFn$_invoke$arity$1(db);
var base_kportfolio = cljs.core.first(group);
var kportfolios = cljs.core.rest(group);
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__49019 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49019) : re_frame.core.subscribe.call(null,G__49019));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49014_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__49014_SHARP_) : rfil.call(null,p1__49014_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__49014_SHARP_) : rfil.call(null,p1__49014_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__49020(s__49021){
return (new cljs.core.LazySeq(null,(function (){
var s__49021__$1 = s__49021;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49021__$1);
if(temp__5735__auto__){
var s__49021__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49021__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49021__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49023 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49022 = (0);
while(true){
if((i__49022 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__49022);
cljs.core.chunk_append(b__49023,(jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)));

var G__49327 = (i__49022 + (1));
i__49022 = G__49327;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49023),jasminegui$mount$iter__49020(cljs.core.chunk_rest(s__49021__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49023),null);
}
} else {
var r = cljs.core.first(s__49021__$2);
return cljs.core.cons((jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)),jasminegui$mount$iter__49020(cljs.core.rest(s__49021__$2)));
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
var pivoted_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49015_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__49015_SHARP_,(function (){var fexpr__49024 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__49024.cljs$core$IFn$_invoke$arity$1 ? fexpr__49024.cljs$core$IFn$_invoke$arity$1(p1__49015_SHARP_) : fexpr__49024.call(null,p1__49015_SHARP_));
})()], 0));
}),pivoted_positions);
var differentiate = (function (line){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (temp_line,p){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(temp_line,p,((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(temp_line) : p.call(null,temp_line)) - (base_kportfolio.cljs$core$IFn$_invoke$arity$1 ? base_kportfolio.cljs$core$IFn$_invoke$arity$1(temp_line) : base_kportfolio.call(null,temp_line))));
}),line,kportfolios);
});
var pivoted_data_diff = cljs.core.map.cljs$core$IFn$_invoke$arity$2(differentiate,pivoted_data);
var threshold = (0.01 * cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49016_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__49016_SHARP_),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053).cljs$core$IFn$_invoke$arity$1(db));
}),jasminegui.static$.threshold_choices_alignment)))));
var thfil = (function (line){
return cljs.core.some((function (x){
return (((x < (- threshold))) || ((x > threshold)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(line,kportfolios));
});
var pivoted_data_diff_post_th = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(thfil,pivoted_data_diff);
return jasminegui.mount.add_total_line_to_pivot(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.mount.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),pivoted_data_diff_post_th),kportfolios);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49017_49319,G__49018_49320) : re_frame.core.reg_sub.call(null,G__49017_49319,G__49018_49320));
var G__49026_49330 = new cljs.core.Keyword("summary-display","table","summary-display/table",1149370831);
var G__49027_49331 = (function (db){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__49028(s__49029){
return (new cljs.core.LazySeq(null,(function (){
var s__49029__$1 = s__49029;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49029__$1);
if(temp__5735__auto__){
var s__49029__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49029__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49029__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49031 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49030 = (0);
while(true){
if((i__49030 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__49030);
cljs.core.chunk_append(b__49031,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"portfolio","portfolio",957568598),p], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = ((function (i__49030,p,c__4527__auto__,size__4528__auto__,b__49031,s__49029__$2,temp__5735__auto__,G__49026_49330){
return (function jasminegui$mount$iter__49028_$_iter__49032(s__49033){
return (new cljs.core.LazySeq(null,((function (i__49030,p,c__4527__auto__,size__4528__auto__,b__49031,s__49029__$2,temp__5735__auto__,G__49026_49330){
return (function (){
var s__49033__$1 = s__49033;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__49033__$1);
if(temp__5735__auto____$1){
var s__49033__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49033__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__49033__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__49035 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__49034 = (0);
while(true){
if((i__49034 < size__4528__auto____$1)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto____$1,i__49034);
cljs.core.chunk_append(b__49035,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null));

var G__49341 = (i__49034 + (1));
i__49034 = G__49341;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49035),jasminegui$mount$iter__49028_$_iter__49032(cljs.core.chunk_rest(s__49033__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49035),null);
}
} else {
var k = cljs.core.first(s__49033__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null),jasminegui$mount$iter__49028_$_iter__49032(cljs.core.rest(s__49033__$2)));
}
} else {
return null;
}
break;
}
});})(i__49030,p,c__4527__auto__,size__4528__auto__,b__49031,s__49029__$2,temp__5735__auto__,G__49026_49330))
,null,null));
});})(i__49030,p,c__4527__auto__,size__4528__auto__,b__49031,s__49029__$2,temp__5735__auto__,G__49026_49330))
;
return iter__4529__auto__(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175),new cljs.core.Keyword(null,"base-value","base-value",921379228),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067),new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030),new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),new cljs.core.Keyword(null,"contrib-beta-1y-daily","contrib-beta-1y-daily",259924328)], null));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861)], null)) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__49030,p,c__4527__auto__,size__4528__auto__,b__49031,s__49029__$2,temp__5735__auto__,G__49026_49330){
return (function (p1__49025_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__49025_SHARP_),p)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-class","asset-class",1845554418).cljs$core$IFn$_invoke$arity$1(p1__49025_SHARP_),"BONDS")));
});})(i__49030,p,c__4527__auto__,size__4528__auto__,b__49031,s__49029__$2,temp__5735__auto__,G__49026_49330))
,new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db)))))], null)], 0)));

var G__49350 = (i__49030 + (1));
i__49030 = G__49350;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49031),jasminegui$mount$iter__49028(cljs.core.chunk_rest(s__49029__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49031),null);
}
} else {
var p = cljs.core.first(s__49029__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"portfolio","portfolio",957568598),p], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = ((function (p,s__49029__$2,temp__5735__auto__,G__49026_49330){
return (function jasminegui$mount$iter__49028_$_iter__49037(s__49038){
return (new cljs.core.LazySeq(null,(function (){
var s__49038__$1 = s__49038;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__49038__$1);
if(temp__5735__auto____$1){
var s__49038__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49038__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49038__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49040 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49039 = (0);
while(true){
if((i__49039 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__49039);
cljs.core.chunk_append(b__49040,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null));

var G__49358 = (i__49039 + (1));
i__49039 = G__49358;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49040),jasminegui$mount$iter__49028_$_iter__49037(cljs.core.chunk_rest(s__49038__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49040),null);
}
} else {
var k = cljs.core.first(s__49038__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null),jasminegui$mount$iter__49028_$_iter__49037(cljs.core.rest(s__49038__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(p,s__49029__$2,temp__5735__auto__,G__49026_49330))
;
return iter__4529__auto__(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175),new cljs.core.Keyword(null,"base-value","base-value",921379228),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067),new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030),new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),new cljs.core.Keyword(null,"contrib-beta-1y-daily","contrib-beta-1y-daily",259924328)], null));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861)], null)) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (p,s__49029__$2,temp__5735__auto__,G__49026_49330){
return (function (p1__49025_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__49025_SHARP_),p)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-class","asset-class",1845554418).cljs$core$IFn$_invoke$arity$1(p1__49025_SHARP_),"BONDS")));
});})(p,s__49029__$2,temp__5735__auto__,G__49026_49330))
,new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db)))))], null)], 0)),jasminegui$mount$iter__49028(cljs.core.rest(s__49029__$2)));
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49026_49330,G__49027_49331) : re_frame.core.reg_sub.call(null,G__49026_49330,G__49027_49331));
var seq__49041_49372 = cljs.core.seq(new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword(null,"active-var","active-var",-1787478523),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738),new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334)], null));
var chunk__49042_49373 = null;
var count__49043_49374 = (0);
var i__49044_49375 = (0);
while(true){
if((i__49044_49375 < count__49043_49374)){
var k_49380 = chunk__49042_49373.cljs$core$IIndexed$_nth$arity$2(null,i__49044_49375);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_49380,((function (seq__49041_49372,chunk__49042_49373,count__49043_49374,i__49044_49375,k_49380){
return (function (db,p__49053){
var vec__49054 = p__49053;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49054,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49054,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_49380,data);
});})(seq__49041_49372,chunk__49042_49373,count__49043_49374,i__49044_49375,k_49380))
);


var G__49386 = seq__49041_49372;
var G__49387 = chunk__49042_49373;
var G__49388 = count__49043_49374;
var G__49389 = (i__49044_49375 + (1));
seq__49041_49372 = G__49386;
chunk__49042_49373 = G__49387;
count__49043_49374 = G__49388;
i__49044_49375 = G__49389;
continue;
} else {
var temp__5735__auto___49391 = cljs.core.seq(seq__49041_49372);
if(temp__5735__auto___49391){
var seq__49041_49392__$1 = temp__5735__auto___49391;
if(cljs.core.chunked_seq_QMARK_(seq__49041_49392__$1)){
var c__4556__auto___49393 = cljs.core.chunk_first(seq__49041_49392__$1);
var G__49395 = cljs.core.chunk_rest(seq__49041_49392__$1);
var G__49396 = c__4556__auto___49393;
var G__49397 = cljs.core.count(c__4556__auto___49393);
var G__49398 = (0);
seq__49041_49372 = G__49395;
chunk__49042_49373 = G__49396;
count__49043_49374 = G__49397;
i__49044_49375 = G__49398;
continue;
} else {
var k_49400 = cljs.core.first(seq__49041_49392__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_49400,((function (seq__49041_49372,chunk__49042_49373,count__49043_49374,i__49044_49375,k_49400,seq__49041_49392__$1,temp__5735__auto___49391){
return (function (db,p__49057){
var vec__49058 = p__49057;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49058,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49058,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_49400,data);
});})(seq__49041_49372,chunk__49042_49373,count__49043_49374,i__49044_49375,k_49400,seq__49041_49392__$1,temp__5735__auto___49391))
);


var G__49403 = cljs.core.next(seq__49041_49392__$1);
var G__49404 = null;
var G__49405 = (0);
var G__49406 = (0);
seq__49041_49372 = G__49403;
chunk__49042_49373 = G__49404;
count__49043_49374 = G__49405;
i__49044_49375 = G__49406;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),(function (db,p__49061){
var vec__49062 = p__49061;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49062,(0),null);
var portfolios = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49062,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),portfolios,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),cljs.core.set(portfolios)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),(function (db,p__49065){
var vec__49066 = p__49065;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49066,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49066,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49066,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),(function (db,p__49069){
var vec__49070 = p__49069;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49070,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49070,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49070,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),(function (db,p__49073){
var vec__49074 = p__49073;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49074,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49074,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49074,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),(function (db,p__49077){
var vec__49078 = p__49077;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49078,(0),null);
var qt_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49078,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),clojure.string.replace(qt_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),(function (db,p__49081){
var vec__49082 = p__49081;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49082,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49082,(1),null);
var G__49085 = snapshot;
switch (G__49085) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49085)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cycle-shortcut","cycle-shortcut",-1617058214),(function (db,p__49086){
var vec__49087 = p__49086;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49087,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49087,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49087,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"active-home","active-home",53621216).cljs$core$IFn$_invoke$arity$1(db)),"-risk/shortcut"].join(''));
var shortcut_value = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
if((shortcut_value < (4))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(shortcut_value + (1)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(1));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tree-table","tree-table",-1263002012),(function (db,p__49090){
var vec__49091 = p__49090;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49091,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49091,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49091,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"active-home","active-home",53621216).cljs$core$IFn$_invoke$arity$1(db)),"-risk/display-style"].join(''));
var G__49094 = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
switch (G__49094) {
case "Tree":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Table");

break;
case "Table":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Tree");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49094)].join('')));

}
}));
jasminegui.mount.http_get_dispatch = (function jasminegui$mount$http_get_dispatch(request){
var c__41764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41765__auto__ = (function (){var switch__41719__auto__ = (function (state_49123){
var state_val_49124 = (state_49123[(1)]);
if((state_val_49124 === (1))){
var inst_49095 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_49096 = cljs_http.client.get(inst_49095);
var state_49123__$1 = state_49123;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49123__$1,(2),inst_49096);
} else {
if((state_val_49124 === (2))){
var inst_49098 = (state_49123[(2)]);
var inst_49099 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_49100 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_49123__$1 = (function (){var statearr_49125 = state_49123;
(statearr_49125[(7)] = inst_49098);

(statearr_49125[(8)] = inst_49099);

return statearr_49125;
})();
if(cljs.core.truth_(inst_49100)){
var statearr_49126_49494 = state_49123__$1;
(statearr_49126_49494[(1)] = (3));

} else {
var statearr_49127_49495 = state_49123__$1;
(statearr_49127_49495[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49124 === (3))){
var inst_49098 = (state_49123[(7)]);
var inst_49102 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_49098);
var inst_49103 = JSON.parse(inst_49102);
var inst_49104 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_49103,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_49123__$1 = state_49123;
var statearr_49128_49496 = state_49123__$1;
(statearr_49128_49496[(2)] = inst_49104);

(statearr_49128_49496[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49124 === (4))){
var inst_49098 = (state_49123[(7)]);
var inst_49106 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_49098);
var state_49123__$1 = state_49123;
var statearr_49129_49497 = state_49123__$1;
(statearr_49129_49497[(2)] = inst_49106);

(statearr_49129_49497[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49124 === (5))){
var inst_49099 = (state_49123[(8)]);
var inst_49108 = (state_49123[(2)]);
var inst_49109 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_49099,inst_49108);
var inst_49110 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_49109) : re_frame.core.dispatch.call(null,inst_49109));
var inst_49111 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_49123__$1 = (function (){var statearr_49130 = state_49123;
(statearr_49130[(9)] = inst_49110);

return statearr_49130;
})();
if(cljs.core.truth_(inst_49111)){
var statearr_49131_49498 = state_49123__$1;
(statearr_49131_49498[(1)] = (6));

} else {
var statearr_49132_49499 = state_49123__$1;
(statearr_49132_49499[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49124 === (6))){
var inst_49113 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49114 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_49115 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_49116 = [inst_49114,inst_49115];
var inst_49117 = (new cljs.core.PersistentVector(null,2,(5),inst_49113,inst_49116,null));
var inst_49118 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_49117) : re_frame.core.dispatch.call(null,inst_49117));
var state_49123__$1 = state_49123;
var statearr_49133_49500 = state_49123__$1;
(statearr_49133_49500[(2)] = inst_49118);

(statearr_49133_49500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49124 === (7))){
var state_49123__$1 = state_49123;
var statearr_49134_49501 = state_49123__$1;
(statearr_49134_49501[(2)] = null);

(statearr_49134_49501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49124 === (8))){
var inst_49121 = (state_49123[(2)]);
var state_49123__$1 = state_49123;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49123__$1,inst_49121);
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
var statearr_49135 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49135[(0)] = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__);

(statearr_49135[(1)] = (1));

return statearr_49135;
});
var jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1 = (function (state_49123){
while(true){
var ret_value__41721__auto__ = (function (){try{while(true){
var result__41722__auto__ = switch__41719__auto__(state_49123);
if(cljs.core.keyword_identical_QMARK_(result__41722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41722__auto__;
}
break;
}
}catch (e49136){if((e49136 instanceof Object)){
var ex__41723__auto__ = e49136;
var statearr_49137_49504 = state_49123;
(statearr_49137_49504[(5)] = ex__41723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49136;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49505 = state_49123;
state_49123 = G__49505;
continue;
} else {
return ret_value__41721__auto__;
}
break;
}
});
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__ = function(state_49123){
switch(arguments.length){
case 0:
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____0.call(this);
case 1:
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1.call(this,state_49123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____0;
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1;
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__;
})()
})();
var state__41766__auto__ = (function (){var statearr_49138 = (f__41765__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41765__auto__.cljs$core$IFn$_invoke$arity$0() : f__41765__auto__.call(null));
(statearr_49138[(6)] = c__41764__auto__);

return statearr_49138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41766__auto__);
}));

return c__41764__auto__;
});
var G__49139_49506 = new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518);
var G__49140_49507 = jasminegui.mount.http_get_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__49139_49506,G__49140_49507) : re_frame.core.reg_fx.call(null,G__49139_49506,G__49140_49507));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions","get-positions",1610972586),(function (p__49141,p__49142){
var map__49143 = p__49141;
var map__49143__$1 = (((((!((map__49143 == null))))?(((((map__49143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49143):map__49143);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49143__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49144 = p__49142;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49144,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-rating-to-score","get-rating-to-score",391912155),(function (p__49148,p__49149){
var map__49150 = p__49148;
var map__49150__$1 = (((((!((map__49150 == null))))?(((((map__49150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49150):map__49150);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49150__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49151 = p__49149;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49151,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"rating-to-score"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472),(function (p__49155,p__49156){
var map__49157 = p__49155;
var map__49157__$1 = (((((!((map__49157 == null))))?(((((map__49157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49157):map__49157);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49157__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49158 = p__49156;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49158,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"portfolios"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-pivoted-positions","get-pivoted-positions",2145025131),(function (p__49162,p__49163){
var map__49164 = p__49162;
var map__49164__$1 = (((((!((map__49164 == null))))?(((((map__49164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49164):map__49164);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49164__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49165 = p__49163;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49165,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"pivoted-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-total-positions","get-total-positions",-698807167),(function (p__49169,p__49170){
var map__49171 = p__49169;
var map__49171__$1 = (((((!((map__49171 == null))))?(((((map__49171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49171):map__49171);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49171__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49172 = p__49170;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49172,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"total-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-qt-date","get-qt-date",-1072332881),(function (p__49176,p__49177){
var map__49178 = p__49176;
var map__49178__$1 = (((((!((map__49178 == null))))?(((((map__49178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49178):map__49178);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49178__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49179 = p__49177;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49179,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"qt-date"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),false], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-proxies","get-var-proxies",1252506215),(function (p__49183,p__49184){
var map__49185 = p__49183;
var map__49185__$1 = (((((!((map__49185 == null))))?(((((map__49185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49185):map__49185);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49185__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49186 = p__49184;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49186,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-proxies"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","proxies","var/proxies",-1487962738)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-dates","get-var-dates",-1039695287),(function (p__49190,p__49191){
var map__49192 = p__49190;
var map__49192__$1 = (((((!((map__49192 == null))))?(((((map__49192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49192):map__49192);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49192__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49193 = p__49191;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49193,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-dates"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","dates","var/dates",-1599746364)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-data","get-var-data",837806576),(function (p__49197,p__49198){
var map__49199 = p__49197;
var map__49199__$1 = (((((!((map__49199 == null))))?(((((map__49199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49199):map__49199);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49199__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49200 = p__49198;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49200,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49200,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["calling var data"], 0));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-data?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-var","get-portfolio-var",1001711662),(function (p__49204,p__49205){
var map__49206 = p__49204;
var map__49206__$1 = (((((!((map__49206 == null))))?(((((map__49206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49206):map__49206);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49206__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49207 = p__49205;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49207,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49207,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),portfolio),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-data?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));

//# sourceMappingURL=jasminegui.mount.js.map
