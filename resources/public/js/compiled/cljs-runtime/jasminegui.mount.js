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
jasminegui.mount.default_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081)],[(1),new cljs.core.Keyword(null,"summary","summary",380847952),null,"Table",new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),true,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),"undefined",cljs.core.PersistentVector.EMPTY,cljs.core.set(null),new cljs.core.Keyword(null,"quarter","quarter",-508147616),"Tree",new cljs.core.Keyword(null,"nav","nav",719540477),(1),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),"None",(1),"One","Tree",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"home","home",-74557309),"OGEMCORD",new cljs.core.Keyword(null,"cembi","cembi",1924920241),cljs.core.PersistentVector.EMPTY,true,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null)]);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jasminegui.mount","initialize-db","jasminegui.mount/initialize-db",-1621527627),(function (_,___$1){
return jasminegui.mount.default_db;
}));
var seq__50468_50676 = cljs.core.seq(cljs.core.keys(jasminegui.mount.default_db));
var chunk__50469_50677 = null;
var count__50470_50678 = (0);
var i__50471_50679 = (0);
while(true){
if((i__50471_50679 < count__50470_50678)){
var k_50680 = chunk__50469_50677.cljs$core$IIndexed$_nth$arity$2(null,i__50471_50679);
var G__50476_50681 = k_50680;
var G__50477_50682 = ((function (seq__50468_50676,chunk__50469_50677,count__50470_50678,i__50471_50679,G__50476_50681,k_50680){
return (function (db){
return (k_50680.cljs$core$IFn$_invoke$arity$1 ? k_50680.cljs$core$IFn$_invoke$arity$1(db) : k_50680.call(null,db));
});})(seq__50468_50676,chunk__50469_50677,count__50470_50678,i__50471_50679,G__50476_50681,k_50680))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__50476_50681,G__50477_50682) : re_frame.core.reg_sub.call(null,G__50476_50681,G__50477_50682));


var G__50683 = seq__50468_50676;
var G__50684 = chunk__50469_50677;
var G__50685 = count__50470_50678;
var G__50686 = (i__50471_50679 + (1));
seq__50468_50676 = G__50683;
chunk__50469_50677 = G__50684;
count__50470_50678 = G__50685;
i__50471_50679 = G__50686;
continue;
} else {
var temp__5735__auto___50687 = cljs.core.seq(seq__50468_50676);
if(temp__5735__auto___50687){
var seq__50468_50688__$1 = temp__5735__auto___50687;
if(cljs.core.chunked_seq_QMARK_(seq__50468_50688__$1)){
var c__4556__auto___50689 = cljs.core.chunk_first(seq__50468_50688__$1);
var G__50690 = cljs.core.chunk_rest(seq__50468_50688__$1);
var G__50691 = c__4556__auto___50689;
var G__50692 = cljs.core.count(c__4556__auto___50689);
var G__50693 = (0);
seq__50468_50676 = G__50690;
chunk__50469_50677 = G__50691;
count__50470_50678 = G__50692;
i__50471_50679 = G__50693;
continue;
} else {
var k_50694 = cljs.core.first(seq__50468_50688__$1);
var G__50478_50695 = k_50694;
var G__50479_50696 = ((function (seq__50468_50676,chunk__50469_50677,count__50470_50678,i__50471_50679,G__50478_50695,k_50694,seq__50468_50688__$1,temp__5735__auto___50687){
return (function (db){
return (k_50694.cljs$core$IFn$_invoke$arity$1 ? k_50694.cljs$core$IFn$_invoke$arity$1(db) : k_50694.call(null,db));
});})(seq__50468_50676,chunk__50469_50677,count__50470_50678,i__50471_50679,G__50478_50695,k_50694,seq__50468_50688__$1,temp__5735__auto___50687))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__50478_50695,G__50479_50696) : re_frame.core.reg_sub.call(null,G__50478_50695,G__50479_50696));


var G__50708 = cljs.core.next(seq__50468_50688__$1);
var G__50709 = null;
var G__50710 = (0);
var G__50711 = (0);
seq__50468_50676 = G__50708;
chunk__50469_50677 = G__50709;
count__50470_50678 = G__50710;
i__50471_50679 = G__50711;
continue;
}
} else {
}
}
break;
}
jasminegui.mount.first_level_sort = (function jasminegui$mount$first_level_sort(x){
var G__50480 = x;
switch (G__50480) {
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
var total_line = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"jpm-region","jpm-region",-2074265852),"Total",new cljs.core.Keyword(null,"qt-jpm-sector","qt-jpm-sector",1047055349),"Total",new cljs.core.Keyword(null,"qt-risk-country-name","qt-risk-country-name",1182905474),"Total",new cljs.core.Keyword(null,"TICKER","TICKER",-1215969144),"Total",new cljs.core.Keyword(null,"NAME","NAME",-1127916515),"Total",new cljs.core.Keyword(null,"description","description",-1428560544),"Total",new cljs.core.Keyword(null,"isin","isin",-1197420747),"Total",new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),"Total"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$add_total_line_to_pivot_$_iter__50481(s__50482){
return (new cljs.core.LazySeq(null,(function (){
var s__50482__$1 = s__50482;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50482__$1);
if(temp__5735__auto__){
var s__50482__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50482__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__50482__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__50484 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__50483 = (0);
while(true){
if((i__50483 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__50483);
cljs.core.chunk_append(b__50484,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(p,pivoted_table))], null));

var G__50721 = (i__50483 + (1));
i__50483 = G__50721;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50484),jasminegui$mount$add_total_line_to_pivot_$_iter__50481(cljs.core.chunk_rest(s__50482__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50484),null);
}
} else {
var p = cljs.core.first(s__50482__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(p,pivoted_table))], null),jasminegui$mount$add_total_line_to_pivot_$_iter__50481(cljs.core.rest(s__50482__$2)));
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
var G__50488_50722 = new cljs.core.Keyword("single-portfolio-risk","table","single-portfolio-risk/table",-637924467);
var G__50489_50723 = (function (db){
var positions = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db);
var portfolio = new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949).cljs$core$IFn$_invoke$arity$1(db);
var portfolio_total_line = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var G__50491 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(portfolio);
var fexpr__50490 = new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db);
return (fexpr__50490.cljs$core$IFn$_invoke$arity$1 ? fexpr__50490.cljs$core$IFn$_invoke$arity$1(G__50491) : fexpr__50490.call(null,G__50491));
})(),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),"Total",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),"00 Total"], 0));
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477).cljs$core$IFn$_invoke$arity$1(db),"Tree");
var portfolio_positions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50485_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__50485_SHARP_),portfolio);
}),positions);
var viewable_positions = (cljs.core.truth_((((!(is_tree)))?new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951).cljs$core$IFn$_invoke$arity$1(db):false))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50486_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(p1__50486_SHARP_),(0));
}),portfolio_positions):portfolio_positions);
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__50492 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50492) : re_frame.core.subscribe.call(null,G__50492));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__50487_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__50487_SHARP_) : rfil.call(null,p1__50487_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__50487_SHARP_) : rfil.call(null,p1__50487_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__50493(s__50494){
return (new cljs.core.LazySeq(null,(function (){
var s__50494__$1 = s__50494;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50494__$1);
if(temp__5735__auto__){
var s__50494__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50494__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__50494__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__50496 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__50495 = (0);
while(true){
if((i__50495 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__50495);
cljs.core.chunk_append(b__50496,(jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)));

var G__50728 = (i__50495 + (1));
i__50495 = G__50728;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50496),jasminegui$mount$iter__50493(cljs.core.chunk_rest(s__50494__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50496),null);
}
} else {
var r = cljs.core.first(s__50494__$2);
return cljs.core.cons((jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)),jasminegui$mount$iter__50493(cljs.core.rest(s__50494__$2)));
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__50488_50722,G__50489_50723) : re_frame.core.reg_sub.call(null,G__50488_50722,G__50489_50723));
var G__50499_50733 = new cljs.core.Keyword("multiple-portfolio-risk","table","multiple-portfolio-risk/table",1962237397);
var G__50500_50734 = (function (db){
var pivoted_positions = new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863).cljs$core$IFn$_invoke$arity$1(db);
var kselected_portfolios = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045).cljs$core$IFn$_invoke$arity$1(db));
var hide_zero_risk = new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337).cljs$core$IFn$_invoke$arity$1(db);
var display_key_one = new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337).cljs$core$IFn$_invoke$arity$1(db);
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547).cljs$core$IFn$_invoke$arity$1(db),"Tree");
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__50501 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50501) : re_frame.core.subscribe.call(null,G__50501));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__50497_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__50497_SHARP_) : rfil.call(null,p1__50497_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__50497_SHARP_) : rfil.call(null,p1__50497_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__50502(s__50503){
return (new cljs.core.LazySeq(null,(function (){
var s__50503__$1 = s__50503;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50503__$1);
if(temp__5735__auto__){
var s__50503__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50503__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__50503__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__50505 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__50504 = (0);
while(true){
if((i__50504 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__50504);
cljs.core.chunk_append(b__50505,(jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)));

var G__50739 = (i__50504 + (1));
i__50504 = G__50739;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50505),jasminegui$mount$iter__50502(cljs.core.chunk_rest(s__50503__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50505),null);
}
} else {
var r = cljs.core.first(s__50503__$2);
return cljs.core.cons((jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)),jasminegui$mount$iter__50502(cljs.core.rest(s__50503__$2)));
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
var pivoted_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50498_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__50498_SHARP_,(function (){var fexpr__50506 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_one,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__50506.cljs$core$IFn$_invoke$arity$1 ? fexpr__50506.cljs$core$IFn$_invoke$arity$1(p1__50498_SHARP_) : fexpr__50506.call(null,p1__50498_SHARP_));
})()], 0));
}),pivoted_positions);
var thfil = (function (line){
return (!(cljs.core.every_QMARK_(cljs.core.zero_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(line,kselected_portfolios))));
});
var pivoted_data_hide_zero = (cljs.core.truth_((((!(is_tree)))?hide_zero_risk:false))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(thfil,pivoted_data):pivoted_data);
return jasminegui.mount.add_total_line_to_pivot(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.mount.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),pivoted_data_hide_zero),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(db)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__50499_50733,G__50500_50734) : re_frame.core.reg_sub.call(null,G__50499_50733,G__50500_50734));
var G__50511_50746 = new cljs.core.Keyword("portfolio-alignment","table","portfolio-alignment/table",-1411501022);
var G__50512_50747 = (function (db){
var group = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50507_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__50507_SHARP_),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110).cljs$core$IFn$_invoke$arity$1(db));
}),jasminegui.static$.portfolio_alignment_groups))));
var pivoted_positions = new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863).cljs$core$IFn$_invoke$arity$1(db);
var base_kportfolio = cljs.core.first(group);
var kportfolios = cljs.core.rest(group);
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__50513 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50513) : re_frame.core.subscribe.call(null,G__50513));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__50508_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__50508_SHARP_) : rfil.call(null,p1__50508_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__50508_SHARP_) : rfil.call(null,p1__50508_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__50514(s__50515){
return (new cljs.core.LazySeq(null,(function (){
var s__50515__$1 = s__50515;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50515__$1);
if(temp__5735__auto__){
var s__50515__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50515__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__50515__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__50517 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__50516 = (0);
while(true){
if((i__50516 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__50516);
cljs.core.chunk_append(b__50517,(jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)));

var G__50753 = (i__50516 + (1));
i__50516 = G__50753;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50517),jasminegui$mount$iter__50514(cljs.core.chunk_rest(s__50515__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50517),null);
}
} else {
var r = cljs.core.first(s__50515__$2);
return cljs.core.cons((jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)),jasminegui$mount$iter__50514(cljs.core.rest(s__50515__$2)));
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
var pivoted_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50509_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__50509_SHARP_,(function (){var fexpr__50518 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__50518.cljs$core$IFn$_invoke$arity$1 ? fexpr__50518.cljs$core$IFn$_invoke$arity$1(p1__50509_SHARP_) : fexpr__50518.call(null,p1__50509_SHARP_));
})()], 0));
}),pivoted_positions);
var differentiate = (function (line){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (temp_line,p){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(temp_line,p,((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(temp_line) : p.call(null,temp_line)) - (base_kportfolio.cljs$core$IFn$_invoke$arity$1 ? base_kportfolio.cljs$core$IFn$_invoke$arity$1(temp_line) : base_kportfolio.call(null,temp_line))));
}),line,kportfolios);
});
var pivoted_data_diff = cljs.core.map.cljs$core$IFn$_invoke$arity$2(differentiate,pivoted_data);
var threshold = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50510_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__50510_SHARP_),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053).cljs$core$IFn$_invoke$arity$1(db));
}),jasminegui.static$.threshold_choices_alignment))));
var thfil = (function (line){
return cljs.core.some((function (x){
return (((x < (- threshold))) || ((x > threshold)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(line,kportfolios));
});
var pivoted_data_diff_post_th = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(thfil,pivoted_data_diff);
return jasminegui.mount.add_total_line_to_pivot(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.mount.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),pivoted_data_diff_post_th),kportfolios);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__50511_50746,G__50512_50747) : re_frame.core.reg_sub.call(null,G__50511_50746,G__50512_50747));
var G__50520_50764 = new cljs.core.Keyword("summary-display","table","summary-display/table",1149370831);
var G__50521_50765 = (function (db){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__50522(s__50523){
return (new cljs.core.LazySeq(null,(function (){
var s__50523__$1 = s__50523;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50523__$1);
if(temp__5735__auto__){
var s__50523__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50523__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__50523__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__50525 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__50524 = (0);
while(true){
if((i__50524 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__50524);
cljs.core.chunk_append(b__50525,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"portfolio","portfolio",957568598),p], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = ((function (i__50524,p,c__4527__auto__,size__4528__auto__,b__50525,s__50523__$2,temp__5735__auto__,G__50520_50764){
return (function jasminegui$mount$iter__50522_$_iter__50526(s__50527){
return (new cljs.core.LazySeq(null,((function (i__50524,p,c__4527__auto__,size__4528__auto__,b__50525,s__50523__$2,temp__5735__auto__,G__50520_50764){
return (function (){
var s__50527__$1 = s__50527;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__50527__$1);
if(temp__5735__auto____$1){
var s__50527__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50527__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__50527__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__50529 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__50528 = (0);
while(true){
if((i__50528 < size__4528__auto____$1)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto____$1,i__50528);
cljs.core.chunk_append(b__50529,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null));

var G__50772 = (i__50528 + (1));
i__50528 = G__50772;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50529),jasminegui$mount$iter__50522_$_iter__50526(cljs.core.chunk_rest(s__50527__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50529),null);
}
} else {
var k = cljs.core.first(s__50527__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null),jasminegui$mount$iter__50522_$_iter__50526(cljs.core.rest(s__50527__$2)));
}
} else {
return null;
}
break;
}
});})(i__50524,p,c__4527__auto__,size__4528__auto__,b__50525,s__50523__$2,temp__5735__auto__,G__50520_50764))
,null,null));
});})(i__50524,p,c__4527__auto__,size__4528__auto__,b__50525,s__50523__$2,temp__5735__auto__,G__50520_50764))
;
return iter__4529__auto__(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175),new cljs.core.Keyword(null,"base-value","base-value",921379228),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067),new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030),new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342)], null));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861)], null)) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__50524,p,c__4527__auto__,size__4528__auto__,b__50525,s__50523__$2,temp__5735__auto__,G__50520_50764){
return (function (p1__50519_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__50519_SHARP_),p)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-class","asset-class",1845554418).cljs$core$IFn$_invoke$arity$1(p1__50519_SHARP_),"BONDS")));
});})(i__50524,p,c__4527__auto__,size__4528__auto__,b__50525,s__50523__$2,temp__5735__auto__,G__50520_50764))
,new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db)))))], null)], 0)));

var G__50775 = (i__50524 + (1));
i__50524 = G__50775;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50525),jasminegui$mount$iter__50522(cljs.core.chunk_rest(s__50523__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50525),null);
}
} else {
var p = cljs.core.first(s__50523__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"portfolio","portfolio",957568598),p], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = ((function (p,s__50523__$2,temp__5735__auto__,G__50520_50764){
return (function jasminegui$mount$iter__50522_$_iter__50530(s__50531){
return (new cljs.core.LazySeq(null,(function (){
var s__50531__$1 = s__50531;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__50531__$1);
if(temp__5735__auto____$1){
var s__50531__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50531__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__50531__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__50533 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__50532 = (0);
while(true){
if((i__50532 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__50532);
cljs.core.chunk_append(b__50533,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null));

var G__50782 = (i__50532 + (1));
i__50532 = G__50782;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50533),jasminegui$mount$iter__50522_$_iter__50530(cljs.core.chunk_rest(s__50531__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50533),null);
}
} else {
var k = cljs.core.first(s__50531__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null),jasminegui$mount$iter__50522_$_iter__50530(cljs.core.rest(s__50531__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(p,s__50523__$2,temp__5735__auto__,G__50520_50764))
;
return iter__4529__auto__(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175),new cljs.core.Keyword(null,"base-value","base-value",921379228),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067),new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030),new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342)], null));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861)], null)) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (p,s__50523__$2,temp__5735__auto__,G__50520_50764){
return (function (p1__50519_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__50519_SHARP_),p)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-class","asset-class",1845554418).cljs$core$IFn$_invoke$arity$1(p1__50519_SHARP_),"BONDS")));
});})(p,s__50523__$2,temp__5735__auto__,G__50520_50764))
,new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db)))))], null)], 0)),jasminegui$mount$iter__50522(cljs.core.rest(s__50523__$2)));
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__50520_50764,G__50521_50765) : re_frame.core.reg_sub.call(null,G__50520_50764,G__50521_50765));
var seq__50534_50790 = cljs.core.seq(new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334)], null));
var chunk__50535_50791 = null;
var count__50536_50792 = (0);
var i__50537_50793 = (0);
while(true){
if((i__50537_50793 < count__50536_50792)){
var k_50795 = chunk__50535_50791.cljs$core$IIndexed$_nth$arity$2(null,i__50537_50793);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_50795,((function (seq__50534_50790,chunk__50535_50791,count__50536_50792,i__50537_50793,k_50795){
return (function (db,p__50546){
var vec__50547 = p__50546;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50547,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50547,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_50795,data);
});})(seq__50534_50790,chunk__50535_50791,count__50536_50792,i__50537_50793,k_50795))
);


var G__50796 = seq__50534_50790;
var G__50797 = chunk__50535_50791;
var G__50798 = count__50536_50792;
var G__50799 = (i__50537_50793 + (1));
seq__50534_50790 = G__50796;
chunk__50535_50791 = G__50797;
count__50536_50792 = G__50798;
i__50537_50793 = G__50799;
continue;
} else {
var temp__5735__auto___50801 = cljs.core.seq(seq__50534_50790);
if(temp__5735__auto___50801){
var seq__50534_50802__$1 = temp__5735__auto___50801;
if(cljs.core.chunked_seq_QMARK_(seq__50534_50802__$1)){
var c__4556__auto___50803 = cljs.core.chunk_first(seq__50534_50802__$1);
var G__50804 = cljs.core.chunk_rest(seq__50534_50802__$1);
var G__50805 = c__4556__auto___50803;
var G__50806 = cljs.core.count(c__4556__auto___50803);
var G__50807 = (0);
seq__50534_50790 = G__50804;
chunk__50535_50791 = G__50805;
count__50536_50792 = G__50806;
i__50537_50793 = G__50807;
continue;
} else {
var k_50808 = cljs.core.first(seq__50534_50802__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_50808,((function (seq__50534_50790,chunk__50535_50791,count__50536_50792,i__50537_50793,k_50808,seq__50534_50802__$1,temp__5735__auto___50801){
return (function (db,p__50550){
var vec__50551 = p__50550;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50551,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50551,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_50808,data);
});})(seq__50534_50790,chunk__50535_50791,count__50536_50792,i__50537_50793,k_50808,seq__50534_50802__$1,temp__5735__auto___50801))
);


var G__50809 = cljs.core.next(seq__50534_50802__$1);
var G__50810 = null;
var G__50811 = (0);
var G__50812 = (0);
seq__50534_50790 = G__50809;
chunk__50535_50791 = G__50810;
count__50536_50792 = G__50811;
i__50537_50793 = G__50812;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),(function (db,p__50554){
var vec__50555 = p__50554;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50555,(0),null);
var portfolios = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50555,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),portfolios,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),cljs.core.set(portfolios)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),(function (db,p__50558){
var vec__50559 = p__50558;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50559,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50559,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50559,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),(function (db,p__50562){
var vec__50563 = p__50562;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50563,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50563,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50563,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),(function (db,p__50566){
var vec__50567 = p__50566;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50567,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50567,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50567,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),(function (db,p__50570){
var vec__50571 = p__50570;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50571,(0),null);
var qt_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50571,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),clojure.string.replace(qt_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),(function (db,p__50574){
var vec__50575 = p__50574;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50575,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50575,(1),null);
var G__50578 = snapshot;
switch (G__50578) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50578)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cycle-shortcut","cycle-shortcut",-1617058214),(function (db,p__50579){
var vec__50580 = p__50579;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50580,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50580,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50580,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"active-home","active-home",53621216).cljs$core$IFn$_invoke$arity$1(db)),"-risk/shortcut"].join(''));
var shortcut_value = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
if((shortcut_value < (4))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(shortcut_value + (1)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(1));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tree-table","tree-table",-1263002012),(function (db,p__50583){
var vec__50584 = p__50583;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50584,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50584,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50584,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"active-home","active-home",53621216).cljs$core$IFn$_invoke$arity$1(db)),"-risk/display-style"].join(''));
var G__50587 = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
switch (G__50587) {
case "Tree":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Table");

break;
case "Table":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Tree");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50587)].join('')));

}
}));
jasminegui.mount.http_get_dispatch = (function jasminegui$mount$http_get_dispatch(request){
var c__39340__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39341__auto__ = (function (){var switch__39317__auto__ = (function (state_50616){
var state_val_50617 = (state_50616[(1)]);
if((state_val_50617 === (1))){
var inst_50588 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_50589 = cljs_http.client.get(inst_50588);
var state_50616__$1 = state_50616;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50616__$1,(2),inst_50589);
} else {
if((state_val_50617 === (2))){
var inst_50591 = (state_50616[(2)]);
var inst_50592 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_50593 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_50616__$1 = (function (){var statearr_50618 = state_50616;
(statearr_50618[(7)] = inst_50591);

(statearr_50618[(8)] = inst_50592);

return statearr_50618;
})();
if(cljs.core.truth_(inst_50593)){
var statearr_50619_50840 = state_50616__$1;
(statearr_50619_50840[(1)] = (3));

} else {
var statearr_50620_50841 = state_50616__$1;
(statearr_50620_50841[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50617 === (3))){
var inst_50591 = (state_50616[(7)]);
var inst_50595 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_50591);
var inst_50596 = JSON.parse(inst_50595);
var inst_50597 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_50596,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_50616__$1 = state_50616;
var statearr_50621_50842 = state_50616__$1;
(statearr_50621_50842[(2)] = inst_50597);

(statearr_50621_50842[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50617 === (4))){
var inst_50591 = (state_50616[(7)]);
var inst_50599 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_50591);
var state_50616__$1 = state_50616;
var statearr_50622_50843 = state_50616__$1;
(statearr_50622_50843[(2)] = inst_50599);

(statearr_50622_50843[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50617 === (5))){
var inst_50592 = (state_50616[(8)]);
var inst_50601 = (state_50616[(2)]);
var inst_50602 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_50592,inst_50601);
var inst_50603 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_50602) : re_frame.core.dispatch.call(null,inst_50602));
var inst_50604 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_50616__$1 = (function (){var statearr_50623 = state_50616;
(statearr_50623[(9)] = inst_50603);

return statearr_50623;
})();
if(cljs.core.truth_(inst_50604)){
var statearr_50624_50851 = state_50616__$1;
(statearr_50624_50851[(1)] = (6));

} else {
var statearr_50625_50853 = state_50616__$1;
(statearr_50625_50853[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50617 === (6))){
var inst_50606 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50607 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_50608 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_50609 = [inst_50607,inst_50608];
var inst_50610 = (new cljs.core.PersistentVector(null,2,(5),inst_50606,inst_50609,null));
var inst_50611 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_50610) : re_frame.core.dispatch.call(null,inst_50610));
var state_50616__$1 = state_50616;
var statearr_50626_50856 = state_50616__$1;
(statearr_50626_50856[(2)] = inst_50611);

(statearr_50626_50856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50617 === (7))){
var state_50616__$1 = state_50616;
var statearr_50627_50858 = state_50616__$1;
(statearr_50627_50858[(2)] = null);

(statearr_50627_50858[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50617 === (8))){
var inst_50614 = (state_50616[(2)]);
var state_50616__$1 = state_50616;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50616__$1,inst_50614);
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
var jasminegui$mount$http_get_dispatch_$_state_machine__39318__auto__ = null;
var jasminegui$mount$http_get_dispatch_$_state_machine__39318__auto____0 = (function (){
var statearr_50628 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50628[(0)] = jasminegui$mount$http_get_dispatch_$_state_machine__39318__auto__);

(statearr_50628[(1)] = (1));

return statearr_50628;
});
var jasminegui$mount$http_get_dispatch_$_state_machine__39318__auto____1 = (function (state_50616){
while(true){
var ret_value__39319__auto__ = (function (){try{while(true){
var result__39320__auto__ = switch__39317__auto__(state_50616);
if(cljs.core.keyword_identical_QMARK_(result__39320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39320__auto__;
}
break;
}
}catch (e50629){if((e50629 instanceof Object)){
var ex__39321__auto__ = e50629;
var statearr_50630_50861 = state_50616;
(statearr_50630_50861[(5)] = ex__39321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50629;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50862 = state_50616;
state_50616 = G__50862;
continue;
} else {
return ret_value__39319__auto__;
}
break;
}
});
jasminegui$mount$http_get_dispatch_$_state_machine__39318__auto__ = function(state_50616){
switch(arguments.length){
case 0:
return jasminegui$mount$http_get_dispatch_$_state_machine__39318__auto____0.call(this);
case 1:
return jasminegui$mount$http_get_dispatch_$_state_machine__39318__auto____1.call(this,state_50616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_get_dispatch_$_state_machine__39318__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_get_dispatch_$_state_machine__39318__auto____0;
jasminegui$mount$http_get_dispatch_$_state_machine__39318__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_get_dispatch_$_state_machine__39318__auto____1;
return jasminegui$mount$http_get_dispatch_$_state_machine__39318__auto__;
})()
})();
var state__39342__auto__ = (function (){var statearr_50631 = (f__39341__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39341__auto__.cljs$core$IFn$_invoke$arity$0() : f__39341__auto__.call(null));
(statearr_50631[(6)] = c__39340__auto__);

return statearr_50631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39342__auto__);
}));

return c__39340__auto__;
});
var G__50632_50864 = new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518);
var G__50633_50865 = jasminegui.mount.http_get_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__50632_50864,G__50633_50865) : re_frame.core.reg_fx.call(null,G__50632_50864,G__50633_50865));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions","get-positions",1610972586),(function (p__50634,p__50635){
var map__50636 = p__50634;
var map__50636__$1 = (((((!((map__50636 == null))))?(((((map__50636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50636):map__50636);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50636__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__50637 = p__50635;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50637,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-rating-to-score","get-rating-to-score",391912155),(function (p__50641,p__50642){
var map__50643 = p__50641;
var map__50643__$1 = (((((!((map__50643 == null))))?(((((map__50643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50643):map__50643);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50643__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__50644 = p__50642;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50644,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"rating-to-score"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472),(function (p__50648,p__50649){
var map__50650 = p__50648;
var map__50650__$1 = (((((!((map__50650 == null))))?(((((map__50650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50650):map__50650);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50650__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__50651 = p__50649;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50651,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"portfolios"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-pivoted-positions","get-pivoted-positions",2145025131),(function (p__50655,p__50656){
var map__50657 = p__50655;
var map__50657__$1 = (((((!((map__50657 == null))))?(((((map__50657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50657):map__50657);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50657__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__50658 = p__50656;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50658,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"pivoted-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-total-positions","get-total-positions",-698807167),(function (p__50662,p__50663){
var map__50664 = p__50662;
var map__50664__$1 = (((((!((map__50664 == null))))?(((((map__50664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50664):map__50664);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50664__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__50665 = p__50663;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50665,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"total-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-qt-date","get-qt-date",-1072332881),(function (p__50669,p__50670){
var map__50671 = p__50669;
var map__50671__$1 = (((((!((map__50671 == null))))?(((((map__50671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50671):map__50671);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50671__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__50672 = p__50670;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50672,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"qt-date"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),false], null)], null);
}));

//# sourceMappingURL=jasminegui.mount.js.map
