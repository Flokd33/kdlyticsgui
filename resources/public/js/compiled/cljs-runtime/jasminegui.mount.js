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
jasminegui.mount.default_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword(null,"active-var","active-var",-1787478523),new cljs.core.Keyword("trade-history","active-bond","trade-history/active-bond",-1419462650),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("var","result","var/result",1415073996),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("var","history","var/history",-246458543),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword("trade-history","history","trade-history/history",1084885309),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081)],[(1),new cljs.core.Keyword(null,"summary","summary",380847952),null,null,"Table",new cljs.core.Keyword(null,"overview","overview",-435037267),null,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),true,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),"undefined",cljs.core.PersistentVector.EMPTY,null,cljs.core.set(null),new cljs.core.Keyword(null,"quarter","quarter",-508147616),"Tree",null,new cljs.core.Keyword(null,"nav","nav",719540477),null,(1),"OGEMCORD",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),"None",(1),"One","Tree",null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"home","home",-74557309),null,"OGEMCORD",new cljs.core.Keyword(null,"cembi","cembi",1924920241),cljs.core.PersistentVector.EMPTY,true,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null)]);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jasminegui.mount","initialize-db","jasminegui.mount/initialize-db",-1621527627),(function (_,___$1){
return jasminegui.mount.default_db;
}));
var seq__46761_47015 = cljs.core.seq(cljs.core.keys(jasminegui.mount.default_db));
var chunk__46762_47016 = null;
var count__46763_47017 = (0);
var i__46764_47018 = (0);
while(true){
if((i__46764_47018 < count__46763_47017)){
var k_47019 = chunk__46762_47016.cljs$core$IIndexed$_nth$arity$2(null,i__46764_47018);
var G__46773_47020 = k_47019;
var G__46774_47021 = ((function (seq__46761_47015,chunk__46762_47016,count__46763_47017,i__46764_47018,G__46773_47020,k_47019){
return (function (db){
return (k_47019.cljs$core$IFn$_invoke$arity$1 ? k_47019.cljs$core$IFn$_invoke$arity$1(db) : k_47019.call(null,db));
});})(seq__46761_47015,chunk__46762_47016,count__46763_47017,i__46764_47018,G__46773_47020,k_47019))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__46773_47020,G__46774_47021) : re_frame.core.reg_sub.call(null,G__46773_47020,G__46774_47021));


var G__47022 = seq__46761_47015;
var G__47023 = chunk__46762_47016;
var G__47024 = count__46763_47017;
var G__47025 = (i__46764_47018 + (1));
seq__46761_47015 = G__47022;
chunk__46762_47016 = G__47023;
count__46763_47017 = G__47024;
i__46764_47018 = G__47025;
continue;
} else {
var temp__5735__auto___47026 = cljs.core.seq(seq__46761_47015);
if(temp__5735__auto___47026){
var seq__46761_47027__$1 = temp__5735__auto___47026;
if(cljs.core.chunked_seq_QMARK_(seq__46761_47027__$1)){
var c__4556__auto___47030 = cljs.core.chunk_first(seq__46761_47027__$1);
var G__47031 = cljs.core.chunk_rest(seq__46761_47027__$1);
var G__47032 = c__4556__auto___47030;
var G__47033 = cljs.core.count(c__4556__auto___47030);
var G__47034 = (0);
seq__46761_47015 = G__47031;
chunk__46762_47016 = G__47032;
count__46763_47017 = G__47033;
i__46764_47018 = G__47034;
continue;
} else {
var k_47037 = cljs.core.first(seq__46761_47027__$1);
var G__46775_47038 = k_47037;
var G__46776_47039 = ((function (seq__46761_47015,chunk__46762_47016,count__46763_47017,i__46764_47018,G__46775_47038,k_47037,seq__46761_47027__$1,temp__5735__auto___47026){
return (function (db){
return (k_47037.cljs$core$IFn$_invoke$arity$1 ? k_47037.cljs$core$IFn$_invoke$arity$1(db) : k_47037.call(null,db));
});})(seq__46761_47015,chunk__46762_47016,count__46763_47017,i__46764_47018,G__46775_47038,k_47037,seq__46761_47027__$1,temp__5735__auto___47026))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__46775_47038,G__46776_47039) : re_frame.core.reg_sub.call(null,G__46775_47038,G__46776_47039));


var G__47041 = cljs.core.next(seq__46761_47027__$1);
var G__47042 = null;
var G__47043 = (0);
var G__47044 = (0);
seq__46761_47015 = G__47041;
chunk__46762_47016 = G__47042;
count__46763_47017 = G__47043;
i__46764_47018 = G__47044;
continue;
}
} else {
}
}
break;
}
jasminegui.mount.first_level_sort = (function jasminegui$mount$first_level_sort(x){
var G__46781 = x;
switch (G__46781) {
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
var total_line = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"jpm-region","jpm-region",-2074265852),"Total",new cljs.core.Keyword(null,"qt-jpm-sector","qt-jpm-sector",1047055349),"Total",new cljs.core.Keyword(null,"qt-risk-country-name","qt-risk-country-name",1182905474),"Total",new cljs.core.Keyword(null,"TICKER","TICKER",-1215969144),"Total",new cljs.core.Keyword(null,"NAME","NAME",-1127916515),"Total",new cljs.core.Keyword(null,"description","description",-1428560544),"Total",new cljs.core.Keyword(null,"isin","isin",-1197420747),"Total",new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),"Total"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$add_total_line_to_pivot_$_iter__46783(s__46784){
return (new cljs.core.LazySeq(null,(function (){
var s__46784__$1 = s__46784;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46784__$1);
if(temp__5735__auto__){
var s__46784__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46784__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__46784__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__46786 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__46785 = (0);
while(true){
if((i__46785 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__46785);
cljs.core.chunk_append(b__46786,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(p,pivoted_table))], null));

var G__47060 = (i__46785 + (1));
i__46785 = G__47060;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46786),jasminegui$mount$add_total_line_to_pivot_$_iter__46783(cljs.core.chunk_rest(s__46784__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46786),null);
}
} else {
var p = cljs.core.first(s__46784__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(p,pivoted_table))], null),jasminegui$mount$add_total_line_to_pivot_$_iter__46783(cljs.core.rest(s__46784__$2)));
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
var G__46794_47063 = new cljs.core.Keyword("single-portfolio-risk","table","single-portfolio-risk/table",-637924467);
var G__46795_47064 = (function (db){
var positions = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db);
var portfolio = new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949).cljs$core$IFn$_invoke$arity$1(db);
var portfolio_total_line = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var G__46797 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(portfolio);
var fexpr__46796 = new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db);
return (fexpr__46796.cljs$core$IFn$_invoke$arity$1 ? fexpr__46796.cljs$core$IFn$_invoke$arity$1(G__46797) : fexpr__46796.call(null,G__46797));
})(),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),"Total",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),"00 Total"], 0));
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477).cljs$core$IFn$_invoke$arity$1(db),"Tree");
var portfolio_positions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__46791_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__46791_SHARP_),portfolio);
}),positions);
var viewable_positions = (cljs.core.truth_((((!(is_tree)))?new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951).cljs$core$IFn$_invoke$arity$1(db):false))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__46792_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(p1__46792_SHARP_),(0));
}),portfolio_positions):portfolio_positions);
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__46798 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__46798) : re_frame.core.subscribe.call(null,G__46798));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__46793_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__46793_SHARP_) : rfil.call(null,p1__46793_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__46793_SHARP_) : rfil.call(null,p1__46793_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__46799(s__46800){
return (new cljs.core.LazySeq(null,(function (){
var s__46800__$1 = s__46800;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46800__$1);
if(temp__5735__auto__){
var s__46800__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46800__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__46800__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__46802 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__46801 = (0);
while(true){
if((i__46801 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__46801);
cljs.core.chunk_append(b__46802,(jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)));

var G__47093 = (i__46801 + (1));
i__46801 = G__47093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46802),jasminegui$mount$iter__46799(cljs.core.chunk_rest(s__46800__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46802),null);
}
} else {
var r = cljs.core.first(s__46800__$2);
return cljs.core.cons((jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)),jasminegui$mount$iter__46799(cljs.core.rest(s__46800__$2)));
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__46794_47063,G__46795_47064) : re_frame.core.reg_sub.call(null,G__46794_47063,G__46795_47064));
var G__46806_47110 = new cljs.core.Keyword("multiple-portfolio-risk","table","multiple-portfolio-risk/table",1962237397);
var G__46807_47111 = (function (db){
var pivoted_positions = new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863).cljs$core$IFn$_invoke$arity$1(db);
var kselected_portfolios = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045).cljs$core$IFn$_invoke$arity$1(db));
var hide_zero_risk = new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337).cljs$core$IFn$_invoke$arity$1(db);
var display_key_one = new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337).cljs$core$IFn$_invoke$arity$1(db);
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547).cljs$core$IFn$_invoke$arity$1(db),"Tree");
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__46808 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__46808) : re_frame.core.subscribe.call(null,G__46808));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__46804_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__46804_SHARP_) : rfil.call(null,p1__46804_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__46804_SHARP_) : rfil.call(null,p1__46804_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__46809(s__46810){
return (new cljs.core.LazySeq(null,(function (){
var s__46810__$1 = s__46810;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46810__$1);
if(temp__5735__auto__){
var s__46810__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46810__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__46810__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__46812 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__46811 = (0);
while(true){
if((i__46811 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__46811);
cljs.core.chunk_append(b__46812,(jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)));

var G__47119 = (i__46811 + (1));
i__46811 = G__47119;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46812),jasminegui$mount$iter__46809(cljs.core.chunk_rest(s__46810__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46812),null);
}
} else {
var r = cljs.core.first(s__46810__$2);
return cljs.core.cons((jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)),jasminegui$mount$iter__46809(cljs.core.rest(s__46810__$2)));
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
var pivoted_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46805_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__46805_SHARP_,(function (){var fexpr__46813 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_one,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__46813.cljs$core$IFn$_invoke$arity$1 ? fexpr__46813.cljs$core$IFn$_invoke$arity$1(p1__46805_SHARP_) : fexpr__46813.call(null,p1__46805_SHARP_));
})()], 0));
}),pivoted_positions);
var thfil = (function (line){
return (!(cljs.core.every_QMARK_(cljs.core.zero_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(line,kselected_portfolios))));
});
var pivoted_data_hide_zero = (cljs.core.truth_((((!(is_tree)))?hide_zero_risk:false))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(thfil,pivoted_data):pivoted_data);
return jasminegui.mount.add_total_line_to_pivot(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.mount.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),pivoted_data_hide_zero),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(db)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__46806_47110,G__46807_47111) : re_frame.core.reg_sub.call(null,G__46806_47110,G__46807_47111));
var G__46818_47140 = new cljs.core.Keyword("portfolio-alignment","table","portfolio-alignment/table",-1411501022);
var G__46819_47141 = (function (db){
var group = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__46814_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__46814_SHARP_),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110).cljs$core$IFn$_invoke$arity$1(db));
}),jasminegui.static$.portfolio_alignment_groups))));
var pivoted_positions = new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863).cljs$core$IFn$_invoke$arity$1(db);
var base_kportfolio = cljs.core.first(group);
var kportfolios = cljs.core.rest(group);
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__46820 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__46820) : re_frame.core.subscribe.call(null,G__46820));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__46815_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__46815_SHARP_) : rfil.call(null,p1__46815_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__46815_SHARP_) : rfil.call(null,p1__46815_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__46821(s__46822){
return (new cljs.core.LazySeq(null,(function (){
var s__46822__$1 = s__46822;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46822__$1);
if(temp__5735__auto__){
var s__46822__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46822__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__46822__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__46824 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__46823 = (0);
while(true){
if((i__46823 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__46823);
cljs.core.chunk_append(b__46824,(jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)));

var G__47147 = (i__46823 + (1));
i__46823 = G__47147;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46824),jasminegui$mount$iter__46821(cljs.core.chunk_rest(s__46822__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46824),null);
}
} else {
var r = cljs.core.first(s__46822__$2);
return cljs.core.cons((jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)),jasminegui$mount$iter__46821(cljs.core.rest(s__46822__$2)));
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
var pivoted_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46816_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__46816_SHARP_,(function (){var fexpr__46825 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__46825.cljs$core$IFn$_invoke$arity$1 ? fexpr__46825.cljs$core$IFn$_invoke$arity$1(p1__46816_SHARP_) : fexpr__46825.call(null,p1__46816_SHARP_));
})()], 0));
}),pivoted_positions);
var differentiate = (function (line){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (temp_line,p){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(temp_line,p,((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(temp_line) : p.call(null,temp_line)) - (base_kportfolio.cljs$core$IFn$_invoke$arity$1 ? base_kportfolio.cljs$core$IFn$_invoke$arity$1(temp_line) : base_kportfolio.call(null,temp_line))));
}),line,kportfolios);
});
var pivoted_data_diff = cljs.core.map.cljs$core$IFn$_invoke$arity$2(differentiate,pivoted_data);
var threshold = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__46817_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__46817_SHARP_),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053).cljs$core$IFn$_invoke$arity$1(db));
}),jasminegui.static$.threshold_choices_alignment))));
var thfil = (function (line){
return cljs.core.some((function (x){
return (((x < (- threshold))) || ((x > threshold)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(line,kportfolios));
});
var pivoted_data_diff_post_th = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(thfil,pivoted_data_diff);
return jasminegui.mount.add_total_line_to_pivot(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.mount.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),pivoted_data_diff_post_th),kportfolios);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__46818_47140,G__46819_47141) : re_frame.core.reg_sub.call(null,G__46818_47140,G__46819_47141));
var G__46827_47151 = new cljs.core.Keyword("summary-display","table","summary-display/table",1149370831);
var G__46828_47152 = (function (db){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__46829(s__46830){
return (new cljs.core.LazySeq(null,(function (){
var s__46830__$1 = s__46830;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46830__$1);
if(temp__5735__auto__){
var s__46830__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46830__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__46830__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__46832 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__46831 = (0);
while(true){
if((i__46831 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__46831);
cljs.core.chunk_append(b__46832,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"portfolio","portfolio",957568598),p], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = ((function (i__46831,p,c__4527__auto__,size__4528__auto__,b__46832,s__46830__$2,temp__5735__auto__,G__46827_47151){
return (function jasminegui$mount$iter__46829_$_iter__46833(s__46834){
return (new cljs.core.LazySeq(null,((function (i__46831,p,c__4527__auto__,size__4528__auto__,b__46832,s__46830__$2,temp__5735__auto__,G__46827_47151){
return (function (){
var s__46834__$1 = s__46834;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__46834__$1);
if(temp__5735__auto____$1){
var s__46834__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46834__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__46834__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__46836 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__46835 = (0);
while(true){
if((i__46835 < size__4528__auto____$1)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto____$1,i__46835);
cljs.core.chunk_append(b__46836,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null));

var G__47183 = (i__46835 + (1));
i__46835 = G__47183;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46836),jasminegui$mount$iter__46829_$_iter__46833(cljs.core.chunk_rest(s__46834__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46836),null);
}
} else {
var k = cljs.core.first(s__46834__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null),jasminegui$mount$iter__46829_$_iter__46833(cljs.core.rest(s__46834__$2)));
}
} else {
return null;
}
break;
}
});})(i__46831,p,c__4527__auto__,size__4528__auto__,b__46832,s__46830__$2,temp__5735__auto__,G__46827_47151))
,null,null));
});})(i__46831,p,c__4527__auto__,size__4528__auto__,b__46832,s__46830__$2,temp__5735__auto__,G__46827_47151))
;
return iter__4529__auto__(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175),new cljs.core.Keyword(null,"base-value","base-value",921379228),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067),new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030),new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342)], null));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861)], null)) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__46831,p,c__4527__auto__,size__4528__auto__,b__46832,s__46830__$2,temp__5735__auto__,G__46827_47151){
return (function (p1__46826_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__46826_SHARP_),p)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-class","asset-class",1845554418).cljs$core$IFn$_invoke$arity$1(p1__46826_SHARP_),"BONDS")));
});})(i__46831,p,c__4527__auto__,size__4528__auto__,b__46832,s__46830__$2,temp__5735__auto__,G__46827_47151))
,new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db)))))], null)], 0)));

var G__47194 = (i__46831 + (1));
i__46831 = G__47194;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46832),jasminegui$mount$iter__46829(cljs.core.chunk_rest(s__46830__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46832),null);
}
} else {
var p = cljs.core.first(s__46830__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"portfolio","portfolio",957568598),p], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = ((function (p,s__46830__$2,temp__5735__auto__,G__46827_47151){
return (function jasminegui$mount$iter__46829_$_iter__46837(s__46838){
return (new cljs.core.LazySeq(null,(function (){
var s__46838__$1 = s__46838;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__46838__$1);
if(temp__5735__auto____$1){
var s__46838__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46838__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__46838__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__46840 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__46839 = (0);
while(true){
if((i__46839 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__46839);
cljs.core.chunk_append(b__46840,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null));

var G__47201 = (i__46839 + (1));
i__46839 = G__47201;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46840),jasminegui$mount$iter__46829_$_iter__46837(cljs.core.chunk_rest(s__46838__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46840),null);
}
} else {
var k = cljs.core.first(s__46838__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null),jasminegui$mount$iter__46829_$_iter__46837(cljs.core.rest(s__46838__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(p,s__46830__$2,temp__5735__auto__,G__46827_47151))
;
return iter__4529__auto__(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175),new cljs.core.Keyword(null,"base-value","base-value",921379228),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067),new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030),new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342)], null));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861)], null)) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (p,s__46830__$2,temp__5735__auto__,G__46827_47151){
return (function (p1__46826_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__46826_SHARP_),p)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-class","asset-class",1845554418).cljs$core$IFn$_invoke$arity$1(p1__46826_SHARP_),"BONDS")));
});})(p,s__46830__$2,temp__5735__auto__,G__46827_47151))
,new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db)))))], null)], 0)),jasminegui$mount$iter__46829(cljs.core.rest(s__46830__$2)));
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__46827_47151,G__46828_47152) : re_frame.core.reg_sub.call(null,G__46827_47151,G__46828_47152));
var seq__46841_47205 = cljs.core.seq(new cljs.core.PersistentVector(null, 29, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword(null,"active-var","active-var",-1787478523),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("var","proxies","var/proxies",-1487962738),new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword("var","portfolio","var/portfolio",957702515),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334)], null));
var chunk__46842_47206 = null;
var count__46843_47207 = (0);
var i__46844_47208 = (0);
while(true){
if((i__46844_47208 < count__46843_47207)){
var k_47213 = chunk__46842_47206.cljs$core$IIndexed$_nth$arity$2(null,i__46844_47208);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_47213,((function (seq__46841_47205,chunk__46842_47206,count__46843_47207,i__46844_47208,k_47213){
return (function (db,p__46853){
var vec__46854 = p__46853;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46854,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46854,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_47213,data);
});})(seq__46841_47205,chunk__46842_47206,count__46843_47207,i__46844_47208,k_47213))
);


var G__47216 = seq__46841_47205;
var G__47217 = chunk__46842_47206;
var G__47218 = count__46843_47207;
var G__47219 = (i__46844_47208 + (1));
seq__46841_47205 = G__47216;
chunk__46842_47206 = G__47217;
count__46843_47207 = G__47218;
i__46844_47208 = G__47219;
continue;
} else {
var temp__5735__auto___47221 = cljs.core.seq(seq__46841_47205);
if(temp__5735__auto___47221){
var seq__46841_47222__$1 = temp__5735__auto___47221;
if(cljs.core.chunked_seq_QMARK_(seq__46841_47222__$1)){
var c__4556__auto___47224 = cljs.core.chunk_first(seq__46841_47222__$1);
var G__47225 = cljs.core.chunk_rest(seq__46841_47222__$1);
var G__47226 = c__4556__auto___47224;
var G__47227 = cljs.core.count(c__4556__auto___47224);
var G__47228 = (0);
seq__46841_47205 = G__47225;
chunk__46842_47206 = G__47226;
count__46843_47207 = G__47227;
i__46844_47208 = G__47228;
continue;
} else {
var k_47229 = cljs.core.first(seq__46841_47222__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_47229,((function (seq__46841_47205,chunk__46842_47206,count__46843_47207,i__46844_47208,k_47229,seq__46841_47222__$1,temp__5735__auto___47221){
return (function (db,p__46857){
var vec__46858 = p__46857;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46858,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46858,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_47229,data);
});})(seq__46841_47205,chunk__46842_47206,count__46843_47207,i__46844_47208,k_47229,seq__46841_47222__$1,temp__5735__auto___47221))
);


var G__47230 = cljs.core.next(seq__46841_47222__$1);
var G__47231 = null;
var G__47232 = (0);
var G__47233 = (0);
seq__46841_47205 = G__47230;
chunk__46842_47206 = G__47231;
count__46843_47207 = G__47232;
i__46844_47208 = G__47233;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),(function (db,p__46861){
var vec__46862 = p__46861;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46862,(0),null);
var portfolios = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46862,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),portfolios,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),cljs.core.set(portfolios)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),(function (db,p__46865){
var vec__46866 = p__46865;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46866,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46866,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46866,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),(function (db,p__46869){
var vec__46870 = p__46869;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46870,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46870,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46870,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),(function (db,p__46873){
var vec__46874 = p__46873;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46874,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46874,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46874,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),(function (db,p__46877){
var vec__46878 = p__46877;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46878,(0),null);
var qt_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46878,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),clojure.string.replace(qt_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),(function (db,p__46881){
var vec__46882 = p__46881;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46882,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46882,(1),null);
var G__46885 = snapshot;
switch (G__46885) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46885)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cycle-shortcut","cycle-shortcut",-1617058214),(function (db,p__46886){
var vec__46887 = p__46886;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46887,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46887,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46887,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"active-home","active-home",53621216).cljs$core$IFn$_invoke$arity$1(db)),"-risk/shortcut"].join(''));
var shortcut_value = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
if((shortcut_value < (4))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(shortcut_value + (1)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(1));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tree-table","tree-table",-1263002012),(function (db,p__46890){
var vec__46891 = p__46890;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46891,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46891,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46891,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"active-home","active-home",53621216).cljs$core$IFn$_invoke$arity$1(db)),"-risk/display-style"].join(''));
var G__46894 = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
switch (G__46894) {
case "Tree":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Table");

break;
case "Table":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Tree");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46894)].join('')));

}
}));
jasminegui.mount.http_get_dispatch = (function jasminegui$mount$http_get_dispatch(request){
var c__41764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41765__auto__ = (function (){var switch__41741__auto__ = (function (state_46923){
var state_val_46924 = (state_46923[(1)]);
if((state_val_46924 === (1))){
var inst_46895 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_46896 = cljs_http.client.get(inst_46895);
var state_46923__$1 = state_46923;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46923__$1,(2),inst_46896);
} else {
if((state_val_46924 === (2))){
var inst_46898 = (state_46923[(2)]);
var inst_46899 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_46900 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_46923__$1 = (function (){var statearr_46925 = state_46923;
(statearr_46925[(7)] = inst_46898);

(statearr_46925[(8)] = inst_46899);

return statearr_46925;
})();
if(cljs.core.truth_(inst_46900)){
var statearr_46926_47256 = state_46923__$1;
(statearr_46926_47256[(1)] = (3));

} else {
var statearr_46927_47257 = state_46923__$1;
(statearr_46927_47257[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46924 === (3))){
var inst_46898 = (state_46923[(7)]);
var inst_46902 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_46898);
var inst_46903 = JSON.parse(inst_46902);
var inst_46904 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_46903,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_46923__$1 = state_46923;
var statearr_46928_47258 = state_46923__$1;
(statearr_46928_47258[(2)] = inst_46904);

(statearr_46928_47258[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46924 === (4))){
var inst_46898 = (state_46923[(7)]);
var inst_46906 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_46898);
var state_46923__$1 = state_46923;
var statearr_46929_47259 = state_46923__$1;
(statearr_46929_47259[(2)] = inst_46906);

(statearr_46929_47259[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46924 === (5))){
var inst_46899 = (state_46923[(8)]);
var inst_46908 = (state_46923[(2)]);
var inst_46909 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_46899,inst_46908);
var inst_46910 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_46909) : re_frame.core.dispatch.call(null,inst_46909));
var inst_46911 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_46923__$1 = (function (){var statearr_46930 = state_46923;
(statearr_46930[(9)] = inst_46910);

return statearr_46930;
})();
if(cljs.core.truth_(inst_46911)){
var statearr_46931_47265 = state_46923__$1;
(statearr_46931_47265[(1)] = (6));

} else {
var statearr_46932_47266 = state_46923__$1;
(statearr_46932_47266[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46924 === (6))){
var inst_46913 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46914 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_46915 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_46916 = [inst_46914,inst_46915];
var inst_46917 = (new cljs.core.PersistentVector(null,2,(5),inst_46913,inst_46916,null));
var inst_46918 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_46917) : re_frame.core.dispatch.call(null,inst_46917));
var state_46923__$1 = state_46923;
var statearr_46933_47268 = state_46923__$1;
(statearr_46933_47268[(2)] = inst_46918);

(statearr_46933_47268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46924 === (7))){
var state_46923__$1 = state_46923;
var statearr_46934_47269 = state_46923__$1;
(statearr_46934_47269[(2)] = null);

(statearr_46934_47269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46924 === (8))){
var inst_46921 = (state_46923[(2)]);
var state_46923__$1 = state_46923;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46923__$1,inst_46921);
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
var statearr_46935 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46935[(0)] = jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__);

(statearr_46935[(1)] = (1));

return statearr_46935;
});
var jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____1 = (function (state_46923){
while(true){
var ret_value__41743__auto__ = (function (){try{while(true){
var result__41744__auto__ = switch__41741__auto__(state_46923);
if(cljs.core.keyword_identical_QMARK_(result__41744__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41744__auto__;
}
break;
}
}catch (e46936){if((e46936 instanceof Object)){
var ex__41745__auto__ = e46936;
var statearr_46937_47273 = state_46923;
(statearr_46937_47273[(5)] = ex__41745__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46936;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47274 = state_46923;
state_46923 = G__47274;
continue;
} else {
return ret_value__41743__auto__;
}
break;
}
});
jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__ = function(state_46923){
switch(arguments.length){
case 0:
return jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____0.call(this);
case 1:
return jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____1.call(this,state_46923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____0;
jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____1;
return jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__;
})()
})();
var state__41766__auto__ = (function (){var statearr_46938 = (f__41765__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41765__auto__.cljs$core$IFn$_invoke$arity$0() : f__41765__auto__.call(null));
(statearr_46938[(6)] = c__41764__auto__);

return statearr_46938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41766__auto__);
}));

return c__41764__auto__;
});
var G__46939_47276 = new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518);
var G__46940_47277 = jasminegui.mount.http_get_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__46939_47276,G__46940_47277) : re_frame.core.reg_fx.call(null,G__46939_47276,G__46940_47277));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions","get-positions",1610972586),(function (p__46941,p__46942){
var map__46943 = p__46941;
var map__46943__$1 = (((((!((map__46943 == null))))?(((((map__46943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46943):map__46943);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46943__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__46944 = p__46942;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46944,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-rating-to-score","get-rating-to-score",391912155),(function (p__46948,p__46949){
var map__46950 = p__46948;
var map__46950__$1 = (((((!((map__46950 == null))))?(((((map__46950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46950):map__46950);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46950__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__46951 = p__46949;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46951,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"rating-to-score"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472),(function (p__46955,p__46956){
var map__46957 = p__46955;
var map__46957__$1 = (((((!((map__46957 == null))))?(((((map__46957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46957):map__46957);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46957__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__46958 = p__46956;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46958,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"portfolios"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-pivoted-positions","get-pivoted-positions",2145025131),(function (p__46962,p__46963){
var map__46964 = p__46962;
var map__46964__$1 = (((((!((map__46964 == null))))?(((((map__46964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46964):map__46964);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46964__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__46965 = p__46963;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46965,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"pivoted-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-total-positions","get-total-positions",-698807167),(function (p__46969,p__46970){
var map__46971 = p__46969;
var map__46971__$1 = (((((!((map__46971 == null))))?(((((map__46971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46971):map__46971);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46971__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__46972 = p__46970;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46972,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"total-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-qt-date","get-qt-date",-1072332881),(function (p__46976,p__46977){
var map__46978 = p__46976;
var map__46978__$1 = (((((!((map__46978 == null))))?(((((map__46978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46978):map__46978);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46978__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__46979 = p__46977;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46979,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"qt-date"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),false], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-proxies","get-var-proxies",1252506215),(function (p__46983,p__46984){
var map__46985 = p__46983;
var map__46985__$1 = (((((!((map__46985 == null))))?(((((map__46985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46985):map__46985);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46985__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__46986 = p__46984;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46986,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-proxies"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","proxies","var/proxies",-1487962738)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-dates","get-var-dates",-1039695287),(function (p__46990,p__46991){
var map__46992 = p__46990;
var map__46992__$1 = (((((!((map__46992 == null))))?(((((map__46992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46992):map__46992);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46992__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__46993 = p__46991;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46993,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-dates"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","dates","var/dates",-1599746364)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-var-data","get-var-data",837806576),(function (p__46997,p__46998){
var map__46999 = p__46997;
var map__46999__$1 = (((((!((map__46999 == null))))?(((((map__46999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46999):map__46999);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46999__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47000 = p__46998;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47000,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47000,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["calling var data"], 0));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"var-data?portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));

//# sourceMappingURL=jasminegui.mount.js.map
