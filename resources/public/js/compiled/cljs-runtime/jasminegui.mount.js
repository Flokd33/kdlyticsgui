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
jasminegui.mount.server_address = jasminegui.mount.dev_server_address;
jasminegui.mount.default_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword(null,"active-var","active-var",-1787478523),new cljs.core.Keyword("trade-history","active-bond","trade-history/active-bond",-1419462650),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("var","result","var/result",1415073996),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("var","history","var/history",-246458543),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword("trade-history","history","trade-history/history",1084885309),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081)],[(1),new cljs.core.Keyword(null,"summary","summary",380847952),null,null,"Table",new cljs.core.Keyword(null,"overview","overview",-435037267),null,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),true,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),"undefined",cljs.core.PersistentVector.EMPTY,null,cljs.core.set(null),new cljs.core.Keyword(null,"quarter","quarter",-508147616),"Tree",null,new cljs.core.Keyword(null,"nav","nav",719540477),null,(1),"OGEMCORD",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),new cljs.core.Keyword(null,"daily-3y","daily-3y",-2143971824),"None",(1),"One","Tree",null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"home","home",-74557309),null,"OGEMCORD",new cljs.core.Keyword(null,"cembi","cembi",1924920241),cljs.core.PersistentVector.EMPTY,true,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null)]);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jasminegui.mount","initialize-db","jasminegui.mount/initialize-db",-1621527627),(function (_,___$1){
return jasminegui.mount.default_db;
}));
var seq__44050_44286 = cljs.core.seq(cljs.core.keys(jasminegui.mount.default_db));
var chunk__44051_44287 = null;
var count__44052_44288 = (0);
var i__44053_44289 = (0);
while(true){
if((i__44053_44289 < count__44052_44288)){
var k_44290 = chunk__44051_44287.cljs$core$IIndexed$_nth$arity$2(null,i__44053_44289);
var G__44058_44291 = k_44290;
var G__44059_44292 = ((function (seq__44050_44286,chunk__44051_44287,count__44052_44288,i__44053_44289,G__44058_44291,k_44290){
return (function (db){
return (k_44290.cljs$core$IFn$_invoke$arity$1 ? k_44290.cljs$core$IFn$_invoke$arity$1(db) : k_44290.call(null,db));
});})(seq__44050_44286,chunk__44051_44287,count__44052_44288,i__44053_44289,G__44058_44291,k_44290))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__44058_44291,G__44059_44292) : re_frame.core.reg_sub.call(null,G__44058_44291,G__44059_44292));


var G__44293 = seq__44050_44286;
var G__44294 = chunk__44051_44287;
var G__44295 = count__44052_44288;
var G__44296 = (i__44053_44289 + (1));
seq__44050_44286 = G__44293;
chunk__44051_44287 = G__44294;
count__44052_44288 = G__44295;
i__44053_44289 = G__44296;
continue;
} else {
var temp__5735__auto___44297 = cljs.core.seq(seq__44050_44286);
if(temp__5735__auto___44297){
var seq__44050_44298__$1 = temp__5735__auto___44297;
if(cljs.core.chunked_seq_QMARK_(seq__44050_44298__$1)){
var c__4556__auto___44299 = cljs.core.chunk_first(seq__44050_44298__$1);
var G__44300 = cljs.core.chunk_rest(seq__44050_44298__$1);
var G__44301 = c__4556__auto___44299;
var G__44302 = cljs.core.count(c__4556__auto___44299);
var G__44303 = (0);
seq__44050_44286 = G__44300;
chunk__44051_44287 = G__44301;
count__44052_44288 = G__44302;
i__44053_44289 = G__44303;
continue;
} else {
var k_44304 = cljs.core.first(seq__44050_44298__$1);
var G__44060_44305 = k_44304;
var G__44061_44306 = ((function (seq__44050_44286,chunk__44051_44287,count__44052_44288,i__44053_44289,G__44060_44305,k_44304,seq__44050_44298__$1,temp__5735__auto___44297){
return (function (db){
return (k_44304.cljs$core$IFn$_invoke$arity$1 ? k_44304.cljs$core$IFn$_invoke$arity$1(db) : k_44304.call(null,db));
});})(seq__44050_44286,chunk__44051_44287,count__44052_44288,i__44053_44289,G__44060_44305,k_44304,seq__44050_44298__$1,temp__5735__auto___44297))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__44060_44305,G__44061_44306) : re_frame.core.reg_sub.call(null,G__44060_44305,G__44061_44306));


var G__44307 = cljs.core.next(seq__44050_44298__$1);
var G__44308 = null;
var G__44309 = (0);
var G__44310 = (0);
seq__44050_44286 = G__44307;
chunk__44051_44287 = G__44308;
count__44052_44288 = G__44309;
i__44053_44289 = G__44310;
continue;
}
} else {
}
}
break;
}
jasminegui.mount.first_level_sort = (function jasminegui$mount$first_level_sort(x){
var G__44062 = x;
switch (G__44062) {
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
var total_line = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"jpm-region","jpm-region",-2074265852),"Total",new cljs.core.Keyword(null,"qt-jpm-sector","qt-jpm-sector",1047055349),"Total",new cljs.core.Keyword(null,"qt-risk-country-name","qt-risk-country-name",1182905474),"Total",new cljs.core.Keyword(null,"TICKER","TICKER",-1215969144),"Total",new cljs.core.Keyword(null,"NAME","NAME",-1127916515),"Total",new cljs.core.Keyword(null,"description","description",-1428560544),"Total",new cljs.core.Keyword(null,"isin","isin",-1197420747),"Total",new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),"Total"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$add_total_line_to_pivot_$_iter__44063(s__44064){
return (new cljs.core.LazySeq(null,(function (){
var s__44064__$1 = s__44064;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44064__$1);
if(temp__5735__auto__){
var s__44064__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44064__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__44064__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__44066 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__44065 = (0);
while(true){
if((i__44065 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__44065);
cljs.core.chunk_append(b__44066,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(p,pivoted_table))], null));

var G__44312 = (i__44065 + (1));
i__44065 = G__44312;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44066),jasminegui$mount$add_total_line_to_pivot_$_iter__44063(cljs.core.chunk_rest(s__44064__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44066),null);
}
} else {
var p = cljs.core.first(s__44064__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(p,pivoted_table))], null),jasminegui$mount$add_total_line_to_pivot_$_iter__44063(cljs.core.rest(s__44064__$2)));
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
var G__44070_44313 = new cljs.core.Keyword("single-portfolio-risk","table","single-portfolio-risk/table",-637924467);
var G__44071_44314 = (function (db){
var positions = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db);
var portfolio = new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949).cljs$core$IFn$_invoke$arity$1(db);
var portfolio_total_line = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var G__44073 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(portfolio);
var fexpr__44072 = new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db);
return (fexpr__44072.cljs$core$IFn$_invoke$arity$1 ? fexpr__44072.cljs$core$IFn$_invoke$arity$1(G__44073) : fexpr__44072.call(null,G__44073));
})(),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),"Total",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),"00 Total"], 0));
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477).cljs$core$IFn$_invoke$arity$1(db),"Tree");
var portfolio_positions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__44067_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__44067_SHARP_),portfolio);
}),positions);
var viewable_positions = (cljs.core.truth_((((!(is_tree)))?new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951).cljs$core$IFn$_invoke$arity$1(db):false))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__44068_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(p1__44068_SHARP_),(0));
}),portfolio_positions):portfolio_positions);
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__44074 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__44074) : re_frame.core.subscribe.call(null,G__44074));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__44069_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__44069_SHARP_) : rfil.call(null,p1__44069_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__44069_SHARP_) : rfil.call(null,p1__44069_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__44075(s__44076){
return (new cljs.core.LazySeq(null,(function (){
var s__44076__$1 = s__44076;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44076__$1);
if(temp__5735__auto__){
var s__44076__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44076__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__44076__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__44078 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__44077 = (0);
while(true){
if((i__44077 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__44077);
cljs.core.chunk_append(b__44078,(jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)));

var G__44326 = (i__44077 + (1));
i__44077 = G__44326;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44078),jasminegui$mount$iter__44075(cljs.core.chunk_rest(s__44076__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44078),null);
}
} else {
var r = cljs.core.first(s__44076__$2);
return cljs.core.cons((jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)),jasminegui$mount$iter__44075(cljs.core.rest(s__44076__$2)));
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__44070_44313,G__44071_44314) : re_frame.core.reg_sub.call(null,G__44070_44313,G__44071_44314));
var G__44081_44335 = new cljs.core.Keyword("multiple-portfolio-risk","table","multiple-portfolio-risk/table",1962237397);
var G__44082_44336 = (function (db){
var pivoted_positions = new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863).cljs$core$IFn$_invoke$arity$1(db);
var kselected_portfolios = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045).cljs$core$IFn$_invoke$arity$1(db));
var hide_zero_risk = new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337).cljs$core$IFn$_invoke$arity$1(db);
var display_key_one = new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337).cljs$core$IFn$_invoke$arity$1(db);
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547).cljs$core$IFn$_invoke$arity$1(db),"Tree");
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__44083 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__44083) : re_frame.core.subscribe.call(null,G__44083));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__44079_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__44079_SHARP_) : rfil.call(null,p1__44079_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__44079_SHARP_) : rfil.call(null,p1__44079_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__44084(s__44085){
return (new cljs.core.LazySeq(null,(function (){
var s__44085__$1 = s__44085;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44085__$1);
if(temp__5735__auto__){
var s__44085__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44085__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__44085__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__44087 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__44086 = (0);
while(true){
if((i__44086 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__44086);
cljs.core.chunk_append(b__44087,(jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)));

var G__44339 = (i__44086 + (1));
i__44086 = G__44339;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44087),jasminegui$mount$iter__44084(cljs.core.chunk_rest(s__44085__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44087),null);
}
} else {
var r = cljs.core.first(s__44085__$2);
return cljs.core.cons((jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)),jasminegui$mount$iter__44084(cljs.core.rest(s__44085__$2)));
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
var pivoted_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44080_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__44080_SHARP_,(function (){var fexpr__44088 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_one,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__44088.cljs$core$IFn$_invoke$arity$1 ? fexpr__44088.cljs$core$IFn$_invoke$arity$1(p1__44080_SHARP_) : fexpr__44088.call(null,p1__44080_SHARP_));
})()], 0));
}),pivoted_positions);
var thfil = (function (line){
return (!(cljs.core.every_QMARK_(cljs.core.zero_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(line,kselected_portfolios))));
});
var pivoted_data_hide_zero = (cljs.core.truth_((((!(is_tree)))?hide_zero_risk:false))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(thfil,pivoted_data):pivoted_data);
return jasminegui.mount.add_total_line_to_pivot(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.mount.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),pivoted_data_hide_zero),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(db)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__44081_44335,G__44082_44336) : re_frame.core.reg_sub.call(null,G__44081_44335,G__44082_44336));
var G__44093_44348 = new cljs.core.Keyword("portfolio-alignment","table","portfolio-alignment/table",-1411501022);
var G__44094_44349 = (function (db){
var group = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__44089_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__44089_SHARP_),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110).cljs$core$IFn$_invoke$arity$1(db));
}),jasminegui.static$.portfolio_alignment_groups))));
var pivoted_positions = new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863).cljs$core$IFn$_invoke$arity$1(db);
var base_kportfolio = cljs.core.first(group);
var kportfolios = cljs.core.rest(group);
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__44095 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__44095) : re_frame.core.subscribe.call(null,G__44095));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__44090_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__44090_SHARP_) : rfil.call(null,p1__44090_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__44090_SHARP_) : rfil.call(null,p1__44090_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__44096(s__44097){
return (new cljs.core.LazySeq(null,(function (){
var s__44097__$1 = s__44097;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44097__$1);
if(temp__5735__auto__){
var s__44097__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44097__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__44097__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__44099 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__44098 = (0);
while(true){
if((i__44098 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__44098);
cljs.core.chunk_append(b__44099,(jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)));

var G__44372 = (i__44098 + (1));
i__44098 = G__44372;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44099),jasminegui$mount$iter__44096(cljs.core.chunk_rest(s__44097__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44099),null);
}
} else {
var r = cljs.core.first(s__44097__$2);
return cljs.core.cons((jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)),jasminegui$mount$iter__44096(cljs.core.rest(s__44097__$2)));
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
var pivoted_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44091_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__44091_SHARP_,(function (){var fexpr__44100 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__44100.cljs$core$IFn$_invoke$arity$1 ? fexpr__44100.cljs$core$IFn$_invoke$arity$1(p1__44091_SHARP_) : fexpr__44100.call(null,p1__44091_SHARP_));
})()], 0));
}),pivoted_positions);
var differentiate = (function (line){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (temp_line,p){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(temp_line,p,((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(temp_line) : p.call(null,temp_line)) - (base_kportfolio.cljs$core$IFn$_invoke$arity$1 ? base_kportfolio.cljs$core$IFn$_invoke$arity$1(temp_line) : base_kportfolio.call(null,temp_line))));
}),line,kportfolios);
});
var pivoted_data_diff = cljs.core.map.cljs$core$IFn$_invoke$arity$2(differentiate,pivoted_data);
var threshold = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__44092_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__44092_SHARP_),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053).cljs$core$IFn$_invoke$arity$1(db));
}),jasminegui.static$.threshold_choices_alignment))));
var thfil = (function (line){
return cljs.core.some((function (x){
return (((x < (- threshold))) || ((x > threshold)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(line,kportfolios));
});
var pivoted_data_diff_post_th = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(thfil,pivoted_data_diff);
return jasminegui.mount.add_total_line_to_pivot(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.mount.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),pivoted_data_diff_post_th),kportfolios);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__44093_44348,G__44094_44349) : re_frame.core.reg_sub.call(null,G__44093_44348,G__44094_44349));
var G__44102_44481 = new cljs.core.Keyword("summary-display","table","summary-display/table",1149370831);
var G__44103_44482 = (function (db){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__44104(s__44105){
return (new cljs.core.LazySeq(null,(function (){
var s__44105__$1 = s__44105;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44105__$1);
if(temp__5735__auto__){
var s__44105__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44105__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__44105__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__44107 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__44106 = (0);
while(true){
if((i__44106 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__44106);
cljs.core.chunk_append(b__44107,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"portfolio","portfolio",957568598),p], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = ((function (i__44106,p,c__4527__auto__,size__4528__auto__,b__44107,s__44105__$2,temp__5735__auto__,G__44102_44481){
return (function jasminegui$mount$iter__44104_$_iter__44108(s__44109){
return (new cljs.core.LazySeq(null,((function (i__44106,p,c__4527__auto__,size__4528__auto__,b__44107,s__44105__$2,temp__5735__auto__,G__44102_44481){
return (function (){
var s__44109__$1 = s__44109;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__44109__$1);
if(temp__5735__auto____$1){
var s__44109__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__44109__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__44109__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__44111 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__44110 = (0);
while(true){
if((i__44110 < size__4528__auto____$1)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto____$1,i__44110);
cljs.core.chunk_append(b__44111,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null));

var G__44521 = (i__44110 + (1));
i__44110 = G__44521;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44111),jasminegui$mount$iter__44104_$_iter__44108(cljs.core.chunk_rest(s__44109__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44111),null);
}
} else {
var k = cljs.core.first(s__44109__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null),jasminegui$mount$iter__44104_$_iter__44108(cljs.core.rest(s__44109__$2)));
}
} else {
return null;
}
break;
}
});})(i__44106,p,c__4527__auto__,size__4528__auto__,b__44107,s__44105__$2,temp__5735__auto__,G__44102_44481))
,null,null));
});})(i__44106,p,c__4527__auto__,size__4528__auto__,b__44107,s__44105__$2,temp__5735__auto__,G__44102_44481))
;
return iter__4529__auto__(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175),new cljs.core.Keyword(null,"base-value","base-value",921379228),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067),new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030),new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342)], null));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861)], null)) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__44106,p,c__4527__auto__,size__4528__auto__,b__44107,s__44105__$2,temp__5735__auto__,G__44102_44481){
return (function (p1__44101_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__44101_SHARP_),p)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-class","asset-class",1845554418).cljs$core$IFn$_invoke$arity$1(p1__44101_SHARP_),"BONDS")));
});})(i__44106,p,c__4527__auto__,size__4528__auto__,b__44107,s__44105__$2,temp__5735__auto__,G__44102_44481))
,new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db)))))], null)], 0)));

var G__44529 = (i__44106 + (1));
i__44106 = G__44529;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44107),jasminegui$mount$iter__44104(cljs.core.chunk_rest(s__44105__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44107),null);
}
} else {
var p = cljs.core.first(s__44105__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"portfolio","portfolio",957568598),p], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = ((function (p,s__44105__$2,temp__5735__auto__,G__44102_44481){
return (function jasminegui$mount$iter__44104_$_iter__44112(s__44113){
return (new cljs.core.LazySeq(null,(function (){
var s__44113__$1 = s__44113;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__44113__$1);
if(temp__5735__auto____$1){
var s__44113__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__44113__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__44113__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__44115 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__44114 = (0);
while(true){
if((i__44114 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__44114);
cljs.core.chunk_append(b__44115,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null));

var G__44539 = (i__44114 + (1));
i__44114 = G__44539;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44115),jasminegui$mount$iter__44104_$_iter__44112(cljs.core.chunk_rest(s__44113__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44115),null);
}
} else {
var k = cljs.core.first(s__44113__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null),jasminegui$mount$iter__44104_$_iter__44112(cljs.core.rest(s__44113__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(p,s__44105__$2,temp__5735__auto__,G__44102_44481))
;
return iter__4529__auto__(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175),new cljs.core.Keyword(null,"base-value","base-value",921379228),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067),new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030),new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342)], null));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861)], null)) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (p,s__44105__$2,temp__5735__auto__,G__44102_44481){
return (function (p1__44101_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__44101_SHARP_),p)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-class","asset-class",1845554418).cljs$core$IFn$_invoke$arity$1(p1__44101_SHARP_),"BONDS")));
});})(p,s__44105__$2,temp__5735__auto__,G__44102_44481))
,new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db)))))], null)], 0)),jasminegui$mount$iter__44104(cljs.core.rest(s__44105__$2)));
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__44102_44481,G__44103_44482) : re_frame.core.reg_sub.call(null,G__44102_44481,G__44103_44482));
var seq__44116_44562 = cljs.core.seq(new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword(null,"active-var","active-var",-1787478523),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738),new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334)], null));
var chunk__44117_44563 = null;
var count__44118_44564 = (0);
var i__44119_44565 = (0);
while(true){
if((i__44119_44565 < count__44118_44564)){
var k_44568 = chunk__44117_44563.cljs$core$IIndexed$_nth$arity$2(null,i__44119_44565);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_44568,((function (seq__44116_44562,chunk__44117_44563,count__44118_44564,i__44119_44565,k_44568){
return (function (db,p__44128){
var vec__44129 = p__44128;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44129,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44129,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_44568,data);
});})(seq__44116_44562,chunk__44117_44563,count__44118_44564,i__44119_44565,k_44568))
);


var G__44574 = seq__44116_44562;
var G__44575 = chunk__44117_44563;
var G__44576 = count__44118_44564;
var G__44577 = (i__44119_44565 + (1));
seq__44116_44562 = G__44574;
chunk__44117_44563 = G__44575;
count__44118_44564 = G__44576;
i__44119_44565 = G__44577;
continue;
} else {
var temp__5735__auto___44578 = cljs.core.seq(seq__44116_44562);
if(temp__5735__auto___44578){
var seq__44116_44579__$1 = temp__5735__auto___44578;
if(cljs.core.chunked_seq_QMARK_(seq__44116_44579__$1)){
var c__4556__auto___44581 = cljs.core.chunk_first(seq__44116_44579__$1);
var G__44615 = cljs.core.chunk_rest(seq__44116_44579__$1);
var G__44616 = c__4556__auto___44581;
var G__44617 = cljs.core.count(c__4556__auto___44581);
var G__44618 = (0);
seq__44116_44562 = G__44615;
chunk__44117_44563 = G__44616;
count__44118_44564 = G__44617;
i__44119_44565 = G__44618;
continue;
} else {
var k_44619 = cljs.core.first(seq__44116_44579__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_44619,((function (seq__44116_44562,chunk__44117_44563,count__44118_44564,i__44119_44565,k_44619,seq__44116_44579__$1,temp__5735__auto___44578){
return (function (db,p__44132){
var vec__44133 = p__44132;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44133,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44133,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_44619,data);
});})(seq__44116_44562,chunk__44117_44563,count__44118_44564,i__44119_44565,k_44619,seq__44116_44579__$1,temp__5735__auto___44578))
);


var G__44623 = cljs.core.next(seq__44116_44579__$1);
var G__44624 = null;
var G__44625 = (0);
var G__44626 = (0);
seq__44116_44562 = G__44623;
chunk__44117_44563 = G__44624;
count__44118_44564 = G__44625;
i__44119_44565 = G__44626;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),(function (db,p__44136){
var vec__44137 = p__44136;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44137,(0),null);
var portfolios = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44137,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),portfolios,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),cljs.core.set(portfolios)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),(function (db,p__44140){
var vec__44141 = p__44140;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44141,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44141,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44141,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),(function (db,p__44144){
var vec__44145 = p__44144;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44145,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44145,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44145,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),(function (db,p__44148){
var vec__44149 = p__44148;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44149,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44149,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44149,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),(function (db,p__44152){
var vec__44153 = p__44152;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44153,(0),null);
var qt_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44153,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),clojure.string.replace(qt_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),(function (db,p__44156){
var vec__44157 = p__44156;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44157,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44157,(1),null);
var G__44160 = snapshot;
switch (G__44160) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44160)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cycle-shortcut","cycle-shortcut",-1617058214),(function (db,p__44161){
var vec__44162 = p__44161;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44162,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44162,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44162,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"active-home","active-home",53621216).cljs$core$IFn$_invoke$arity$1(db)),"-risk/shortcut"].join(''));
var shortcut_value = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
if((shortcut_value < (4))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(shortcut_value + (1)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(1));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tree-table","tree-table",-1263002012),(function (db,p__44165){
var vec__44166 = p__44165;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44166,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44166,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44166,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"active-home","active-home",53621216).cljs$core$IFn$_invoke$arity$1(db)),"-risk/display-style"].join(''));
var G__44169 = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
switch (G__44169) {
case "Tree":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Table");

break;
case "Table":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Tree");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44169)].join('')));

}
}));
jasminegui.mount.http_get_dispatch = (function jasminegui$mount$http_get_dispatch(request){
var c__41764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41765__auto__ = (function (){var switch__41719__auto__ = (function (state_44198){
var state_val_44199 = (state_44198[(1)]);
if((state_val_44199 === (1))){
var inst_44170 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_44171 = cljs_http.client.get(inst_44170);
var state_44198__$1 = state_44198;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44198__$1,(2),inst_44171);
} else {
if((state_val_44199 === (2))){
var inst_44173 = (state_44198[(2)]);
var inst_44174 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_44175 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_44198__$1 = (function (){var statearr_44200 = state_44198;
(statearr_44200[(7)] = inst_44173);

(statearr_44200[(8)] = inst_44174);

return statearr_44200;
})();
if(cljs.core.truth_(inst_44175)){
var statearr_44201_44679 = state_44198__$1;
(statearr_44201_44679[(1)] = (3));

} else {
var statearr_44202_44681 = state_44198__$1;
(statearr_44202_44681[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44199 === (3))){
var inst_44173 = (state_44198[(7)]);
var inst_44177 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_44173);
var inst_44178 = JSON.parse(inst_44177);
var inst_44179 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_44178,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_44198__$1 = state_44198;
var statearr_44203_44695 = state_44198__$1;
(statearr_44203_44695[(2)] = inst_44179);

(statearr_44203_44695[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44199 === (4))){
var inst_44173 = (state_44198[(7)]);
var inst_44181 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_44173);
var state_44198__$1 = state_44198;
var statearr_44204_44706 = state_44198__$1;
(statearr_44204_44706[(2)] = inst_44181);

(statearr_44204_44706[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44199 === (5))){
var inst_44174 = (state_44198[(8)]);
var inst_44183 = (state_44198[(2)]);
var inst_44184 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_44174,inst_44183);
var inst_44185 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_44184) : re_frame.core.dispatch.call(null,inst_44184));
var inst_44186 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_44198__$1 = (function (){var statearr_44205 = state_44198;
(statearr_44205[(9)] = inst_44185);

return statearr_44205;
})();
if(cljs.core.truth_(inst_44186)){
var statearr_44206_44718 = state_44198__$1;
(statearr_44206_44718[(1)] = (6));

} else {
var statearr_44207_44719 = state_44198__$1;
(statearr_44207_44719[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44199 === (6))){
var inst_44188 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44189 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_44190 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_44191 = [inst_44189,inst_44190];
var inst_44192 = (new cljs.core.PersistentVector(null,2,(5),inst_44188,inst_44191,null));
var inst_44193 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_44192) : re_frame.core.dispatch.call(null,inst_44192));
var state_44198__$1 = state_44198;
var statearr_44208_44727 = state_44198__$1;
(statearr_44208_44727[(2)] = inst_44193);

(statearr_44208_44727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44199 === (7))){
var state_44198__$1 = state_44198;
var statearr_44209_44730 = state_44198__$1;
(statearr_44209_44730[(2)] = null);

(statearr_44209_44730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44199 === (8))){
var inst_44196 = (state_44198[(2)]);
var state_44198__$1 = state_44198;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44198__$1,inst_44196);
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
var statearr_44210 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44210[(0)] = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__);

(statearr_44210[(1)] = (1));

return statearr_44210;
});
var jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1 = (function (state_44198){
while(true){
var ret_value__41721__auto__ = (function (){try{while(true){
var result__41722__auto__ = switch__41719__auto__(state_44198);
if(cljs.core.keyword_identical_QMARK_(result__41722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41722__auto__;
}
break;
}
}catch (e44211){if((e44211 instanceof Object)){
var ex__41723__auto__ = e44211;
var statearr_44212_44744 = state_44198;
(statearr_44212_44744[(5)] = ex__41723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44211;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44745 = state_44198;
state_44198 = G__44745;
continue;
} else {
return ret_value__41721__auto__;
}
break;
}
});
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__ = function(state_44198){
switch(arguments.length){
case 0:
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____0.call(this);
case 1:
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1.call(this,state_44198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____0;
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1;
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__;
})()
})();
var state__41766__auto__ = (function (){var statearr_44213 = (f__41765__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41765__auto__.cljs$core$IFn$_invoke$arity$0() : f__41765__auto__.call(null));
(statearr_44213[(6)] = c__41764__auto__);

return statearr_44213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41766__auto__);
}));

return c__41764__auto__;
});
var G__44214_44751 = new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518);
var G__44215_44752 = jasminegui.mount.http_get_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__44214_44751,G__44215_44752) : re_frame.core.reg_fx.call(null,G__44214_44751,G__44215_44752));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions","get-positions",1610972586),(function (p__44216,p__44217){
var map__44218 = p__44216;
var map__44218__$1 = (((((!((map__44218 == null))))?(((((map__44218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44218):map__44218);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44218__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44219 = p__44217;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44219,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-rating-to-score","get-rating-to-score",391912155),(function (p__44223,p__44224){
var map__44225 = p__44223;
var map__44225__$1 = (((((!((map__44225 == null))))?(((((map__44225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44225):map__44225);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44225__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44226 = p__44224;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44226,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"rating-to-score"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472),(function (p__44230,p__44231){
var map__44232 = p__44230;
var map__44232__$1 = (((((!((map__44232 == null))))?(((((map__44232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44232):map__44232);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44232__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44233 = p__44231;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44233,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"portfolios"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-pivoted-positions","get-pivoted-positions",2145025131),(function (p__44237,p__44238){
var map__44239 = p__44237;
var map__44239__$1 = (((((!((map__44239 == null))))?(((((map__44239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44239):map__44239);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44239__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44240 = p__44238;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44240,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"pivoted-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-total-positions","get-total-positions",-698807167),(function (p__44244,p__44245){
var map__44246 = p__44244;
var map__44246__$1 = (((((!((map__44246 == null))))?(((((map__44246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44246):map__44246);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44246__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44247 = p__44245;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44247,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"total-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-qt-date","get-qt-date",-1072332881),(function (p__44251,p__44252){
var map__44253 = p__44251;
var map__44253__$1 = (((((!((map__44253 == null))))?(((((map__44253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44253):map__44253);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44253__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44254 = p__44252;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44254,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"qt-date"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),false], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-proxies","get-var-proxies",1252506215),(function (p__44258,p__44259){
var map__44260 = p__44258;
var map__44260__$1 = (((((!((map__44260 == null))))?(((((map__44260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44260):map__44260);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44260__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44261 = p__44259;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44261,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-proxies"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","proxies","var/proxies",-1487962738)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-dates","get-var-dates",-1039695287),(function (p__44265,p__44266){
var map__44267 = p__44265;
var map__44267__$1 = (((((!((map__44267 == null))))?(((((map__44267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44267):map__44267);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44267__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44268 = p__44266;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44268,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-dates"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","dates","var/dates",-1599746364)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-data","get-var-data",837806576),(function (p__44272,p__44273){
var map__44274 = p__44272;
var map__44274__$1 = (((((!((map__44274 == null))))?(((((map__44274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44274):map__44274);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44274__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44275 = p__44273;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44275,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44275,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["calling var data"], 0));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-data?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-var","get-portfolio-var",1001711662),(function (p__44279,p__44280){
var map__44281 = p__44279;
var map__44281__$1 = (((((!((map__44281 == null))))?(((((map__44281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44281):map__44281);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44281__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44282 = p__44280;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44282,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44282,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),portfolio),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-data?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));

//# sourceMappingURL=jasminegui.mount.js.map
