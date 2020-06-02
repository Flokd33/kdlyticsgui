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
var seq__49090_49373 = cljs.core.seq(cljs.core.keys(jasminegui.mount.default_db));
var chunk__49091_49374 = null;
var count__49092_49375 = (0);
var i__49093_49376 = (0);
while(true){
if((i__49093_49376 < count__49092_49375)){
var k_49378 = chunk__49091_49374.cljs$core$IIndexed$_nth$arity$2(null,i__49093_49376);
var G__49098_49385 = k_49378;
var G__49099_49386 = ((function (seq__49090_49373,chunk__49091_49374,count__49092_49375,i__49093_49376,G__49098_49385,k_49378){
return (function (db){
return (k_49378.cljs$core$IFn$_invoke$arity$1 ? k_49378.cljs$core$IFn$_invoke$arity$1(db) : k_49378.call(null,db));
});})(seq__49090_49373,chunk__49091_49374,count__49092_49375,i__49093_49376,G__49098_49385,k_49378))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49098_49385,G__49099_49386) : re_frame.core.reg_sub.call(null,G__49098_49385,G__49099_49386));


var G__49387 = seq__49090_49373;
var G__49388 = chunk__49091_49374;
var G__49389 = count__49092_49375;
var G__49390 = (i__49093_49376 + (1));
seq__49090_49373 = G__49387;
chunk__49091_49374 = G__49388;
count__49092_49375 = G__49389;
i__49093_49376 = G__49390;
continue;
} else {
var temp__5735__auto___49391 = cljs.core.seq(seq__49090_49373);
if(temp__5735__auto___49391){
var seq__49090_49392__$1 = temp__5735__auto___49391;
if(cljs.core.chunked_seq_QMARK_(seq__49090_49392__$1)){
var c__4556__auto___49393 = cljs.core.chunk_first(seq__49090_49392__$1);
var G__49395 = cljs.core.chunk_rest(seq__49090_49392__$1);
var G__49396 = c__4556__auto___49393;
var G__49397 = cljs.core.count(c__4556__auto___49393);
var G__49398 = (0);
seq__49090_49373 = G__49395;
chunk__49091_49374 = G__49396;
count__49092_49375 = G__49397;
i__49093_49376 = G__49398;
continue;
} else {
var k_49399 = cljs.core.first(seq__49090_49392__$1);
var G__49100_49400 = k_49399;
var G__49101_49401 = ((function (seq__49090_49373,chunk__49091_49374,count__49092_49375,i__49093_49376,G__49100_49400,k_49399,seq__49090_49392__$1,temp__5735__auto___49391){
return (function (db){
return (k_49399.cljs$core$IFn$_invoke$arity$1 ? k_49399.cljs$core$IFn$_invoke$arity$1(db) : k_49399.call(null,db));
});})(seq__49090_49373,chunk__49091_49374,count__49092_49375,i__49093_49376,G__49100_49400,k_49399,seq__49090_49392__$1,temp__5735__auto___49391))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49100_49400,G__49101_49401) : re_frame.core.reg_sub.call(null,G__49100_49400,G__49101_49401));


var G__49402 = cljs.core.next(seq__49090_49392__$1);
var G__49403 = null;
var G__49404 = (0);
var G__49405 = (0);
seq__49090_49373 = G__49402;
chunk__49091_49374 = G__49403;
count__49092_49375 = G__49404;
i__49093_49376 = G__49405;
continue;
}
} else {
}
}
break;
}
jasminegui.mount.first_level_sort = (function jasminegui$mount$first_level_sort(x){
var G__49102 = x;
switch (G__49102) {
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
var total_line = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"jpm-region","jpm-region",-2074265852),"Total",new cljs.core.Keyword(null,"qt-jpm-sector","qt-jpm-sector",1047055349),"Total",new cljs.core.Keyword(null,"qt-risk-country-name","qt-risk-country-name",1182905474),"Total",new cljs.core.Keyword(null,"TICKER","TICKER",-1215969144),"Total",new cljs.core.Keyword(null,"NAME","NAME",-1127916515),"Total",new cljs.core.Keyword(null,"description","description",-1428560544),"Total",new cljs.core.Keyword(null,"isin","isin",-1197420747),"Total",new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),"Total"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$add_total_line_to_pivot_$_iter__49103(s__49104){
return (new cljs.core.LazySeq(null,(function (){
var s__49104__$1 = s__49104;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49104__$1);
if(temp__5735__auto__){
var s__49104__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49104__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49104__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49106 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49105 = (0);
while(true){
if((i__49105 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__49105);
cljs.core.chunk_append(b__49106,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(p,pivoted_table))], null));

var G__49413 = (i__49105 + (1));
i__49105 = G__49413;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49106),jasminegui$mount$add_total_line_to_pivot_$_iter__49103(cljs.core.chunk_rest(s__49104__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49106),null);
}
} else {
var p = cljs.core.first(s__49104__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(p,pivoted_table))], null),jasminegui$mount$add_total_line_to_pivot_$_iter__49103(cljs.core.rest(s__49104__$2)));
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
var G__49123_49420 = new cljs.core.Keyword("single-portfolio-risk","table","single-portfolio-risk/table",-637924467);
var G__49124_49421 = (function (db){
var positions = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db);
var portfolio = new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949).cljs$core$IFn$_invoke$arity$1(db);
var portfolio_total_line = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var G__49126 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(portfolio);
var fexpr__49125 = new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db);
return (fexpr__49125.cljs$core$IFn$_invoke$arity$1 ? fexpr__49125.cljs$core$IFn$_invoke$arity$1(G__49126) : fexpr__49125.call(null,G__49126));
})(),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),"Total",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),"00 Total"], 0));
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477).cljs$core$IFn$_invoke$arity$1(db),"Tree");
var portfolio_positions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49120_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__49120_SHARP_),portfolio);
}),positions);
var viewable_positions = (cljs.core.truth_((((!(is_tree)))?new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951).cljs$core$IFn$_invoke$arity$1(db):false))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49121_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(p1__49121_SHARP_),(0));
}),portfolio_positions):portfolio_positions);
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__49127 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49127) : re_frame.core.subscribe.call(null,G__49127));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49122_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__49122_SHARP_) : rfil.call(null,p1__49122_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__49122_SHARP_) : rfil.call(null,p1__49122_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__49129(s__49130){
return (new cljs.core.LazySeq(null,(function (){
var s__49130__$1 = s__49130;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49130__$1);
if(temp__5735__auto__){
var s__49130__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49130__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49130__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49132 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49131 = (0);
while(true){
if((i__49131 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__49131);
cljs.core.chunk_append(b__49132,(jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)));

var G__49439 = (i__49131 + (1));
i__49131 = G__49439;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49132),jasminegui$mount$iter__49129(cljs.core.chunk_rest(s__49130__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49132),null);
}
} else {
var r = cljs.core.first(s__49130__$2);
return cljs.core.cons((jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)),jasminegui$mount$iter__49129(cljs.core.rest(s__49130__$2)));
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49123_49420,G__49124_49421) : re_frame.core.reg_sub.call(null,G__49123_49420,G__49124_49421));
var G__49135_49447 = new cljs.core.Keyword("multiple-portfolio-risk","table","multiple-portfolio-risk/table",1962237397);
var G__49136_49448 = (function (db){
var pivoted_positions = new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863).cljs$core$IFn$_invoke$arity$1(db);
var kselected_portfolios = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045).cljs$core$IFn$_invoke$arity$1(db));
var hide_zero_risk = new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337).cljs$core$IFn$_invoke$arity$1(db);
var display_key_one = new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337).cljs$core$IFn$_invoke$arity$1(db);
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547).cljs$core$IFn$_invoke$arity$1(db),"Tree");
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__49137 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49137) : re_frame.core.subscribe.call(null,G__49137));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49133_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__49133_SHARP_) : rfil.call(null,p1__49133_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__49133_SHARP_) : rfil.call(null,p1__49133_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__49138(s__49139){
return (new cljs.core.LazySeq(null,(function (){
var s__49139__$1 = s__49139;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49139__$1);
if(temp__5735__auto__){
var s__49139__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49139__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49139__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49141 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49140 = (0);
while(true){
if((i__49140 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__49140);
cljs.core.chunk_append(b__49141,(jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)));

var G__49454 = (i__49140 + (1));
i__49140 = G__49454;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49141),jasminegui$mount$iter__49138(cljs.core.chunk_rest(s__49139__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49141),null);
}
} else {
var r = cljs.core.first(s__49139__$2);
return cljs.core.cons((jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)),jasminegui$mount$iter__49138(cljs.core.rest(s__49139__$2)));
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
var pivoted_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49134_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__49134_SHARP_,(function (){var fexpr__49142 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_one,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__49142.cljs$core$IFn$_invoke$arity$1 ? fexpr__49142.cljs$core$IFn$_invoke$arity$1(p1__49134_SHARP_) : fexpr__49142.call(null,p1__49134_SHARP_));
})()], 0));
}),pivoted_positions);
var thfil = (function (line){
return (!(cljs.core.every_QMARK_(cljs.core.zero_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(line,kselected_portfolios))));
});
var pivoted_data_hide_zero = (cljs.core.truth_((((!(is_tree)))?hide_zero_risk:false))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(thfil,pivoted_data):pivoted_data);
return jasminegui.mount.add_total_line_to_pivot(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.mount.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),pivoted_data_hide_zero),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(db)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49135_49447,G__49136_49448) : re_frame.core.reg_sub.call(null,G__49135_49447,G__49136_49448));
var G__49147_49455 = new cljs.core.Keyword("portfolio-alignment","table","portfolio-alignment/table",-1411501022);
var G__49148_49456 = (function (db){
var group = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49143_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__49143_SHARP_),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110).cljs$core$IFn$_invoke$arity$1(db));
}),jasminegui.static$.portfolio_alignment_groups))));
var pivoted_positions = new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863).cljs$core$IFn$_invoke$arity$1(db);
var base_kportfolio = cljs.core.first(group);
var kportfolios = cljs.core.rest(group);
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__49149 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49149) : re_frame.core.subscribe.call(null,G__49149));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49144_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__49144_SHARP_) : rfil.call(null,p1__49144_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__49144_SHARP_) : rfil.call(null,p1__49144_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__49150(s__49151){
return (new cljs.core.LazySeq(null,(function (){
var s__49151__$1 = s__49151;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49151__$1);
if(temp__5735__auto__){
var s__49151__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49151__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49151__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49153 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49152 = (0);
while(true){
if((i__49152 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__49152);
cljs.core.chunk_append(b__49153,(jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)));

var G__49457 = (i__49152 + (1));
i__49152 = G__49457;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49153),jasminegui$mount$iter__49150(cljs.core.chunk_rest(s__49151__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49153),null);
}
} else {
var r = cljs.core.first(s__49151__$2);
return cljs.core.cons((jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)),jasminegui$mount$iter__49150(cljs.core.rest(s__49151__$2)));
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
var pivoted_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49145_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__49145_SHARP_,(function (){var fexpr__49154 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__49154.cljs$core$IFn$_invoke$arity$1 ? fexpr__49154.cljs$core$IFn$_invoke$arity$1(p1__49145_SHARP_) : fexpr__49154.call(null,p1__49145_SHARP_));
})()], 0));
}),pivoted_positions);
var differentiate = (function (line){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (temp_line,p){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(temp_line,p,((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(temp_line) : p.call(null,temp_line)) - (base_kportfolio.cljs$core$IFn$_invoke$arity$1 ? base_kportfolio.cljs$core$IFn$_invoke$arity$1(temp_line) : base_kportfolio.call(null,temp_line))));
}),line,kportfolios);
});
var pivoted_data_diff = cljs.core.map.cljs$core$IFn$_invoke$arity$2(differentiate,pivoted_data);
var threshold = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49146_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__49146_SHARP_),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053).cljs$core$IFn$_invoke$arity$1(db));
}),jasminegui.static$.threshold_choices_alignment))));
var thfil = (function (line){
return cljs.core.some((function (x){
return (((x < (- threshold))) || ((x > threshold)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(line,kportfolios));
});
var pivoted_data_diff_post_th = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(thfil,pivoted_data_diff);
return jasminegui.mount.add_total_line_to_pivot(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.mount.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),pivoted_data_diff_post_th),kportfolios);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49147_49455,G__49148_49456) : re_frame.core.reg_sub.call(null,G__49147_49455,G__49148_49456));
var G__49156_49490 = new cljs.core.Keyword("summary-display","table","summary-display/table",1149370831);
var G__49157_49491 = (function (db){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__49158(s__49159){
return (new cljs.core.LazySeq(null,(function (){
var s__49159__$1 = s__49159;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49159__$1);
if(temp__5735__auto__){
var s__49159__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49159__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49159__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49161 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49160 = (0);
while(true){
if((i__49160 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__49160);
cljs.core.chunk_append(b__49161,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"portfolio","portfolio",957568598),p], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = ((function (i__49160,p,c__4527__auto__,size__4528__auto__,b__49161,s__49159__$2,temp__5735__auto__,G__49156_49490){
return (function jasminegui$mount$iter__49158_$_iter__49162(s__49163){
return (new cljs.core.LazySeq(null,((function (i__49160,p,c__4527__auto__,size__4528__auto__,b__49161,s__49159__$2,temp__5735__auto__,G__49156_49490){
return (function (){
var s__49163__$1 = s__49163;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__49163__$1);
if(temp__5735__auto____$1){
var s__49163__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49163__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__49163__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__49165 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__49164 = (0);
while(true){
if((i__49164 < size__4528__auto____$1)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto____$1,i__49164);
cljs.core.chunk_append(b__49165,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null));

var G__49505 = (i__49164 + (1));
i__49164 = G__49505;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49165),jasminegui$mount$iter__49158_$_iter__49162(cljs.core.chunk_rest(s__49163__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49165),null);
}
} else {
var k = cljs.core.first(s__49163__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null),jasminegui$mount$iter__49158_$_iter__49162(cljs.core.rest(s__49163__$2)));
}
} else {
return null;
}
break;
}
});})(i__49160,p,c__4527__auto__,size__4528__auto__,b__49161,s__49159__$2,temp__5735__auto__,G__49156_49490))
,null,null));
});})(i__49160,p,c__4527__auto__,size__4528__auto__,b__49161,s__49159__$2,temp__5735__auto__,G__49156_49490))
;
return iter__4529__auto__(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175),new cljs.core.Keyword(null,"base-value","base-value",921379228),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067),new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030),new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342)], null));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861)], null)) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__49160,p,c__4527__auto__,size__4528__auto__,b__49161,s__49159__$2,temp__5735__auto__,G__49156_49490){
return (function (p1__49155_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__49155_SHARP_),p)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-class","asset-class",1845554418).cljs$core$IFn$_invoke$arity$1(p1__49155_SHARP_),"BONDS")));
});})(i__49160,p,c__4527__auto__,size__4528__auto__,b__49161,s__49159__$2,temp__5735__auto__,G__49156_49490))
,new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db)))))], null)], 0)));

var G__49510 = (i__49160 + (1));
i__49160 = G__49510;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49161),jasminegui$mount$iter__49158(cljs.core.chunk_rest(s__49159__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49161),null);
}
} else {
var p = cljs.core.first(s__49159__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"portfolio","portfolio",957568598),p], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = ((function (p,s__49159__$2,temp__5735__auto__,G__49156_49490){
return (function jasminegui$mount$iter__49158_$_iter__49166(s__49167){
return (new cljs.core.LazySeq(null,(function (){
var s__49167__$1 = s__49167;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__49167__$1);
if(temp__5735__auto____$1){
var s__49167__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49167__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49167__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49169 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49168 = (0);
while(true){
if((i__49168 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__49168);
cljs.core.chunk_append(b__49169,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null));

var G__49513 = (i__49168 + (1));
i__49168 = G__49513;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49169),jasminegui$mount$iter__49158_$_iter__49166(cljs.core.chunk_rest(s__49167__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49169),null);
}
} else {
var k = cljs.core.first(s__49167__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null),jasminegui$mount$iter__49158_$_iter__49166(cljs.core.rest(s__49167__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(p,s__49159__$2,temp__5735__auto__,G__49156_49490))
;
return iter__4529__auto__(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175),new cljs.core.Keyword(null,"base-value","base-value",921379228),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067),new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030),new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342)], null));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861)], null)) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (p,s__49159__$2,temp__5735__auto__,G__49156_49490){
return (function (p1__49155_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__49155_SHARP_),p)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-class","asset-class",1845554418).cljs$core$IFn$_invoke$arity$1(p1__49155_SHARP_),"BONDS")));
});})(p,s__49159__$2,temp__5735__auto__,G__49156_49490))
,new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db)))))], null)], 0)),jasminegui$mount$iter__49158(cljs.core.rest(s__49159__$2)));
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49156_49490,G__49157_49491) : re_frame.core.reg_sub.call(null,G__49156_49490,G__49157_49491));
var seq__49170_49544 = cljs.core.seq(new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword(null,"active-var","active-var",-1787478523),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738),new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334)], null));
var chunk__49171_49545 = null;
var count__49172_49546 = (0);
var i__49173_49547 = (0);
while(true){
if((i__49173_49547 < count__49172_49546)){
var k_49552 = chunk__49171_49545.cljs$core$IIndexed$_nth$arity$2(null,i__49173_49547);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_49552,((function (seq__49170_49544,chunk__49171_49545,count__49172_49546,i__49173_49547,k_49552){
return (function (db,p__49182){
var vec__49183 = p__49182;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49183,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49183,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_49552,data);
});})(seq__49170_49544,chunk__49171_49545,count__49172_49546,i__49173_49547,k_49552))
);


var G__49553 = seq__49170_49544;
var G__49554 = chunk__49171_49545;
var G__49555 = count__49172_49546;
var G__49556 = (i__49173_49547 + (1));
seq__49170_49544 = G__49553;
chunk__49171_49545 = G__49554;
count__49172_49546 = G__49555;
i__49173_49547 = G__49556;
continue;
} else {
var temp__5735__auto___49558 = cljs.core.seq(seq__49170_49544);
if(temp__5735__auto___49558){
var seq__49170_49559__$1 = temp__5735__auto___49558;
if(cljs.core.chunked_seq_QMARK_(seq__49170_49559__$1)){
var c__4556__auto___49560 = cljs.core.chunk_first(seq__49170_49559__$1);
var G__49561 = cljs.core.chunk_rest(seq__49170_49559__$1);
var G__49562 = c__4556__auto___49560;
var G__49563 = cljs.core.count(c__4556__auto___49560);
var G__49564 = (0);
seq__49170_49544 = G__49561;
chunk__49171_49545 = G__49562;
count__49172_49546 = G__49563;
i__49173_49547 = G__49564;
continue;
} else {
var k_49566 = cljs.core.first(seq__49170_49559__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_49566,((function (seq__49170_49544,chunk__49171_49545,count__49172_49546,i__49173_49547,k_49566,seq__49170_49559__$1,temp__5735__auto___49558){
return (function (db,p__49186){
var vec__49187 = p__49186;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49187,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49187,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_49566,data);
});})(seq__49170_49544,chunk__49171_49545,count__49172_49546,i__49173_49547,k_49566,seq__49170_49559__$1,temp__5735__auto___49558))
);


var G__49576 = cljs.core.next(seq__49170_49559__$1);
var G__49577 = null;
var G__49578 = (0);
var G__49579 = (0);
seq__49170_49544 = G__49576;
chunk__49171_49545 = G__49577;
count__49172_49546 = G__49578;
i__49173_49547 = G__49579;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),(function (db,p__49190){
var vec__49191 = p__49190;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49191,(0),null);
var portfolios = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49191,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),portfolios,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),cljs.core.set(portfolios)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),(function (db,p__49194){
var vec__49195 = p__49194;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49195,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49195,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49195,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),(function (db,p__49198){
var vec__49199 = p__49198;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49199,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49199,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49199,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),(function (db,p__49202){
var vec__49203 = p__49202;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49203,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49203,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49203,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),(function (db,p__49206){
var vec__49207 = p__49206;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49207,(0),null);
var qt_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49207,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),clojure.string.replace(qt_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),(function (db,p__49210){
var vec__49211 = p__49210;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49211,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49211,(1),null);
var G__49214 = snapshot;
switch (G__49214) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49214)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cycle-shortcut","cycle-shortcut",-1617058214),(function (db,p__49215){
var vec__49216 = p__49215;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49216,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49216,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49216,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"active-home","active-home",53621216).cljs$core$IFn$_invoke$arity$1(db)),"-risk/shortcut"].join(''));
var shortcut_value = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
if((shortcut_value < (4))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(shortcut_value + (1)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(1));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tree-table","tree-table",-1263002012),(function (db,p__49219){
var vec__49220 = p__49219;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49220,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49220,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49220,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"active-home","active-home",53621216).cljs$core$IFn$_invoke$arity$1(db)),"-risk/display-style"].join(''));
var G__49223 = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
switch (G__49223) {
case "Tree":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Table");

break;
case "Table":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Tree");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49223)].join('')));

}
}));
jasminegui.mount.http_get_dispatch = (function jasminegui$mount$http_get_dispatch(request){
var c__41764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41765__auto__ = (function (){var switch__41719__auto__ = (function (state_49252){
var state_val_49253 = (state_49252[(1)]);
if((state_val_49253 === (1))){
var inst_49224 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_49225 = cljs_http.client.get(inst_49224);
var state_49252__$1 = state_49252;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49252__$1,(2),inst_49225);
} else {
if((state_val_49253 === (2))){
var inst_49227 = (state_49252[(2)]);
var inst_49228 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_49229 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_49252__$1 = (function (){var statearr_49254 = state_49252;
(statearr_49254[(7)] = inst_49228);

(statearr_49254[(8)] = inst_49227);

return statearr_49254;
})();
if(cljs.core.truth_(inst_49229)){
var statearr_49255_49654 = state_49252__$1;
(statearr_49255_49654[(1)] = (3));

} else {
var statearr_49256_49655 = state_49252__$1;
(statearr_49256_49655[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49253 === (3))){
var inst_49227 = (state_49252[(8)]);
var inst_49231 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_49227);
var inst_49232 = JSON.parse(inst_49231);
var inst_49233 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_49232,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_49252__$1 = state_49252;
var statearr_49257_49657 = state_49252__$1;
(statearr_49257_49657[(2)] = inst_49233);

(statearr_49257_49657[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49253 === (4))){
var inst_49227 = (state_49252[(8)]);
var inst_49235 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_49227);
var state_49252__$1 = state_49252;
var statearr_49258_49658 = state_49252__$1;
(statearr_49258_49658[(2)] = inst_49235);

(statearr_49258_49658[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49253 === (5))){
var inst_49228 = (state_49252[(7)]);
var inst_49237 = (state_49252[(2)]);
var inst_49238 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_49228,inst_49237);
var inst_49239 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_49238) : re_frame.core.dispatch.call(null,inst_49238));
var inst_49240 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_49252__$1 = (function (){var statearr_49259 = state_49252;
(statearr_49259[(9)] = inst_49239);

return statearr_49259;
})();
if(cljs.core.truth_(inst_49240)){
var statearr_49260_49659 = state_49252__$1;
(statearr_49260_49659[(1)] = (6));

} else {
var statearr_49261_49660 = state_49252__$1;
(statearr_49261_49660[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49253 === (6))){
var inst_49242 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49243 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_49244 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_49245 = [inst_49243,inst_49244];
var inst_49246 = (new cljs.core.PersistentVector(null,2,(5),inst_49242,inst_49245,null));
var inst_49247 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_49246) : re_frame.core.dispatch.call(null,inst_49246));
var state_49252__$1 = state_49252;
var statearr_49262_49661 = state_49252__$1;
(statearr_49262_49661[(2)] = inst_49247);

(statearr_49262_49661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49253 === (7))){
var state_49252__$1 = state_49252;
var statearr_49263_49663 = state_49252__$1;
(statearr_49263_49663[(2)] = null);

(statearr_49263_49663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49253 === (8))){
var inst_49250 = (state_49252[(2)]);
var state_49252__$1 = state_49252;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49252__$1,inst_49250);
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
var statearr_49264 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49264[(0)] = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__);

(statearr_49264[(1)] = (1));

return statearr_49264;
});
var jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1 = (function (state_49252){
while(true){
var ret_value__41721__auto__ = (function (){try{while(true){
var result__41722__auto__ = switch__41719__auto__(state_49252);
if(cljs.core.keyword_identical_QMARK_(result__41722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41722__auto__;
}
break;
}
}catch (e49265){if((e49265 instanceof Object)){
var ex__41723__auto__ = e49265;
var statearr_49266_49665 = state_49252;
(statearr_49266_49665[(5)] = ex__41723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49265;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49669 = state_49252;
state_49252 = G__49669;
continue;
} else {
return ret_value__41721__auto__;
}
break;
}
});
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__ = function(state_49252){
switch(arguments.length){
case 0:
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____0.call(this);
case 1:
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1.call(this,state_49252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____0;
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1;
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__;
})()
})();
var state__41766__auto__ = (function (){var statearr_49267 = (f__41765__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41765__auto__.cljs$core$IFn$_invoke$arity$0() : f__41765__auto__.call(null));
(statearr_49267[(6)] = c__41764__auto__);

return statearr_49267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41766__auto__);
}));

return c__41764__auto__;
});
var G__49268_49674 = new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518);
var G__49269_49675 = jasminegui.mount.http_get_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__49268_49674,G__49269_49675) : re_frame.core.reg_fx.call(null,G__49268_49674,G__49269_49675));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions","get-positions",1610972586),(function (p__49270,p__49271){
var map__49272 = p__49270;
var map__49272__$1 = (((((!((map__49272 == null))))?(((((map__49272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49272):map__49272);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49272__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49273 = p__49271;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49273,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-rating-to-score","get-rating-to-score",391912155),(function (p__49277,p__49278){
var map__49279 = p__49277;
var map__49279__$1 = (((((!((map__49279 == null))))?(((((map__49279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49279):map__49279);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49279__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49280 = p__49278;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49280,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"rating-to-score"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472),(function (p__49284,p__49285){
var map__49286 = p__49284;
var map__49286__$1 = (((((!((map__49286 == null))))?(((((map__49286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49286):map__49286);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49286__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49287 = p__49285;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49287,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"portfolios"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-pivoted-positions","get-pivoted-positions",2145025131),(function (p__49291,p__49292){
var map__49293 = p__49291;
var map__49293__$1 = (((((!((map__49293 == null))))?(((((map__49293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49293):map__49293);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49293__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49294 = p__49292;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49294,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"pivoted-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-total-positions","get-total-positions",-698807167),(function (p__49298,p__49299){
var map__49300 = p__49298;
var map__49300__$1 = (((((!((map__49300 == null))))?(((((map__49300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49300):map__49300);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49300__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49301 = p__49299;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49301,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"total-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-qt-date","get-qt-date",-1072332881),(function (p__49305,p__49306){
var map__49307 = p__49305;
var map__49307__$1 = (((((!((map__49307 == null))))?(((((map__49307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49307):map__49307);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49307__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49308 = p__49306;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49308,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"qt-date"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),false], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-proxies","get-var-proxies",1252506215),(function (p__49312,p__49313){
var map__49314 = p__49312;
var map__49314__$1 = (((((!((map__49314 == null))))?(((((map__49314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49314):map__49314);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49314__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49315 = p__49313;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49315,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-proxies"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","proxies","var/proxies",-1487962738)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-dates","get-var-dates",-1039695287),(function (p__49319,p__49320){
var map__49321 = p__49319;
var map__49321__$1 = (((((!((map__49321 == null))))?(((((map__49321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49321):map__49321);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49321__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49322 = p__49320;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49322,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-dates"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","dates","var/dates",-1599746364)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-data","get-var-data",837806576),(function (p__49326,p__49327){
var map__49328 = p__49326;
var map__49328__$1 = (((((!((map__49328 == null))))?(((((map__49328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49328):map__49328);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49328__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49329 = p__49327;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49329,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49329,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["calling var data"], 0));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-data?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-var","get-portfolio-var",1001711662),(function (p__49333,p__49334){
var map__49335 = p__49333;
var map__49335__$1 = (((((!((map__49335 == null))))?(((((map__49335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49335):map__49335);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49335__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49336 = p__49334;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49336,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49336,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),portfolio),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-data?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));

//# sourceMappingURL=jasminegui.mount.js.map
