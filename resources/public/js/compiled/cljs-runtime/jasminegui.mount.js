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
var seq__41552_41761 = cljs.core.seq(cljs.core.keys(jasminegui.mount.default_db));
var chunk__41553_41762 = null;
var count__41554_41763 = (0);
var i__41555_41764 = (0);
while(true){
if((i__41555_41764 < count__41554_41763)){
var k_41765 = chunk__41553_41762.cljs$core$IIndexed$_nth$arity$2(null,i__41555_41764);
var G__41560_41766 = k_41765;
var G__41561_41767 = ((function (seq__41552_41761,chunk__41553_41762,count__41554_41763,i__41555_41764,G__41560_41766,k_41765){
return (function (db){
return (k_41765.cljs$core$IFn$_invoke$arity$1 ? k_41765.cljs$core$IFn$_invoke$arity$1(db) : k_41765.call(null,db));
});})(seq__41552_41761,chunk__41553_41762,count__41554_41763,i__41555_41764,G__41560_41766,k_41765))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41560_41766,G__41561_41767) : re_frame.core.reg_sub.call(null,G__41560_41766,G__41561_41767));


var G__41770 = seq__41552_41761;
var G__41771 = chunk__41553_41762;
var G__41772 = count__41554_41763;
var G__41773 = (i__41555_41764 + (1));
seq__41552_41761 = G__41770;
chunk__41553_41762 = G__41771;
count__41554_41763 = G__41772;
i__41555_41764 = G__41773;
continue;
} else {
var temp__5735__auto___41774 = cljs.core.seq(seq__41552_41761);
if(temp__5735__auto___41774){
var seq__41552_41775__$1 = temp__5735__auto___41774;
if(cljs.core.chunked_seq_QMARK_(seq__41552_41775__$1)){
var c__4556__auto___41778 = cljs.core.chunk_first(seq__41552_41775__$1);
var G__41779 = cljs.core.chunk_rest(seq__41552_41775__$1);
var G__41780 = c__4556__auto___41778;
var G__41781 = cljs.core.count(c__4556__auto___41778);
var G__41782 = (0);
seq__41552_41761 = G__41779;
chunk__41553_41762 = G__41780;
count__41554_41763 = G__41781;
i__41555_41764 = G__41782;
continue;
} else {
var k_41783 = cljs.core.first(seq__41552_41775__$1);
var G__41563_41784 = k_41783;
var G__41564_41785 = ((function (seq__41552_41761,chunk__41553_41762,count__41554_41763,i__41555_41764,G__41563_41784,k_41783,seq__41552_41775__$1,temp__5735__auto___41774){
return (function (db){
return (k_41783.cljs$core$IFn$_invoke$arity$1 ? k_41783.cljs$core$IFn$_invoke$arity$1(db) : k_41783.call(null,db));
});})(seq__41552_41761,chunk__41553_41762,count__41554_41763,i__41555_41764,G__41563_41784,k_41783,seq__41552_41775__$1,temp__5735__auto___41774))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41563_41784,G__41564_41785) : re_frame.core.reg_sub.call(null,G__41563_41784,G__41564_41785));


var G__41786 = cljs.core.next(seq__41552_41775__$1);
var G__41787 = null;
var G__41788 = (0);
var G__41789 = (0);
seq__41552_41761 = G__41786;
chunk__41553_41762 = G__41787;
count__41554_41763 = G__41788;
i__41555_41764 = G__41789;
continue;
}
} else {
}
}
break;
}
jasminegui.mount.first_level_sort = (function jasminegui$mount$first_level_sort(x){
var G__41565 = x;
switch (G__41565) {
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
var total_line = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"jpm-region","jpm-region",-2074265852),"Total",new cljs.core.Keyword(null,"qt-jpm-sector","qt-jpm-sector",1047055349),"Total",new cljs.core.Keyword(null,"qt-risk-country-name","qt-risk-country-name",1182905474),"Total",new cljs.core.Keyword(null,"TICKER","TICKER",-1215969144),"Total",new cljs.core.Keyword(null,"NAME","NAME",-1127916515),"Total",new cljs.core.Keyword(null,"description","description",-1428560544),"Total",new cljs.core.Keyword(null,"isin","isin",-1197420747),"Total",new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),"Total"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$add_total_line_to_pivot_$_iter__41566(s__41567){
return (new cljs.core.LazySeq(null,(function (){
var s__41567__$1 = s__41567;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41567__$1);
if(temp__5735__auto__){
var s__41567__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41567__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__41567__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__41569 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__41568 = (0);
while(true){
if((i__41568 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__41568);
cljs.core.chunk_append(b__41569,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(p,pivoted_table))], null));

var G__41791 = (i__41568 + (1));
i__41568 = G__41791;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41569),jasminegui$mount$add_total_line_to_pivot_$_iter__41566(cljs.core.chunk_rest(s__41567__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41569),null);
}
} else {
var p = cljs.core.first(s__41567__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(p,pivoted_table))], null),jasminegui$mount$add_total_line_to_pivot_$_iter__41566(cljs.core.rest(s__41567__$2)));
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
var G__41573_41796 = new cljs.core.Keyword("single-portfolio-risk","table","single-portfolio-risk/table",-637924467);
var G__41574_41797 = (function (db){
var positions = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db);
var portfolio = new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949).cljs$core$IFn$_invoke$arity$1(db);
var portfolio_total_line = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var G__41576 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(portfolio);
var fexpr__41575 = new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db);
return (fexpr__41575.cljs$core$IFn$_invoke$arity$1 ? fexpr__41575.cljs$core$IFn$_invoke$arity$1(G__41576) : fexpr__41575.call(null,G__41576));
})(),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),"Total",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),"00 Total"], 0));
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477).cljs$core$IFn$_invoke$arity$1(db),"Tree");
var portfolio_positions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41570_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__41570_SHARP_),portfolio);
}),positions);
var viewable_positions = (cljs.core.truth_((((!(is_tree)))?new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951).cljs$core$IFn$_invoke$arity$1(db):false))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41571_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(p1__41571_SHARP_),(0));
}),portfolio_positions):portfolio_positions);
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__41577 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__41577) : re_frame.core.subscribe.call(null,G__41577));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__41572_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__41572_SHARP_) : rfil.call(null,p1__41572_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__41572_SHARP_) : rfil.call(null,p1__41572_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__41578(s__41579){
return (new cljs.core.LazySeq(null,(function (){
var s__41579__$1 = s__41579;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41579__$1);
if(temp__5735__auto__){
var s__41579__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41579__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__41579__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__41581 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__41580 = (0);
while(true){
if((i__41580 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__41580);
cljs.core.chunk_append(b__41581,(jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)));

var G__41801 = (i__41580 + (1));
i__41580 = G__41801;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41581),jasminegui$mount$iter__41578(cljs.core.chunk_rest(s__41579__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41581),null);
}
} else {
var r = cljs.core.first(s__41579__$2);
return cljs.core.cons((jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)),jasminegui$mount$iter__41578(cljs.core.rest(s__41579__$2)));
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41573_41796,G__41574_41797) : re_frame.core.reg_sub.call(null,G__41573_41796,G__41574_41797));
var G__41584_41810 = new cljs.core.Keyword("multiple-portfolio-risk","table","multiple-portfolio-risk/table",1962237397);
var G__41585_41811 = (function (db){
var pivoted_positions = new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863).cljs$core$IFn$_invoke$arity$1(db);
var kselected_portfolios = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045).cljs$core$IFn$_invoke$arity$1(db));
var hide_zero_risk = new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337).cljs$core$IFn$_invoke$arity$1(db);
var display_key_one = new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337).cljs$core$IFn$_invoke$arity$1(db);
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547).cljs$core$IFn$_invoke$arity$1(db),"Tree");
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__41586 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__41586) : re_frame.core.subscribe.call(null,G__41586));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__41582_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__41582_SHARP_) : rfil.call(null,p1__41582_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__41582_SHARP_) : rfil.call(null,p1__41582_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__41587(s__41588){
return (new cljs.core.LazySeq(null,(function (){
var s__41588__$1 = s__41588;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41588__$1);
if(temp__5735__auto__){
var s__41588__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41588__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__41588__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__41590 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__41589 = (0);
while(true){
if((i__41589 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__41589);
cljs.core.chunk_append(b__41590,(jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)));

var G__41813 = (i__41589 + (1));
i__41589 = G__41813;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41590),jasminegui$mount$iter__41587(cljs.core.chunk_rest(s__41588__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41590),null);
}
} else {
var r = cljs.core.first(s__41588__$2);
return cljs.core.cons((jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)),jasminegui$mount$iter__41587(cljs.core.rest(s__41588__$2)));
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
var pivoted_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41583_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__41583_SHARP_,(function (){var fexpr__41591 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_one,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__41591.cljs$core$IFn$_invoke$arity$1 ? fexpr__41591.cljs$core$IFn$_invoke$arity$1(p1__41583_SHARP_) : fexpr__41591.call(null,p1__41583_SHARP_));
})()], 0));
}),pivoted_positions);
var thfil = (function (line){
return (!(cljs.core.every_QMARK_(cljs.core.zero_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(line,kselected_portfolios))));
});
var pivoted_data_hide_zero = (cljs.core.truth_((((!(is_tree)))?hide_zero_risk:false))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(thfil,pivoted_data):pivoted_data);
return jasminegui.mount.add_total_line_to_pivot(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.mount.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),pivoted_data_hide_zero),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(db)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41584_41810,G__41585_41811) : re_frame.core.reg_sub.call(null,G__41584_41810,G__41585_41811));
var G__41596_41817 = new cljs.core.Keyword("portfolio-alignment","table","portfolio-alignment/table",-1411501022);
var G__41597_41818 = (function (db){
var group = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41592_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__41592_SHARP_),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110).cljs$core$IFn$_invoke$arity$1(db));
}),jasminegui.static$.portfolio_alignment_groups))));
var pivoted_positions = new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863).cljs$core$IFn$_invoke$arity$1(db);
var base_kportfolio = cljs.core.first(group);
var kportfolios = cljs.core.rest(group);
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__41598 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__41598) : re_frame.core.subscribe.call(null,G__41598));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__41593_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__41593_SHARP_) : rfil.call(null,p1__41593_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__41593_SHARP_) : rfil.call(null,p1__41593_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__41599(s__41600){
return (new cljs.core.LazySeq(null,(function (){
var s__41600__$1 = s__41600;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41600__$1);
if(temp__5735__auto__){
var s__41600__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41600__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__41600__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__41602 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__41601 = (0);
while(true){
if((i__41601 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__41601);
cljs.core.chunk_append(b__41602,(jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)));

var G__41822 = (i__41601 + (1));
i__41601 = G__41822;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41602),jasminegui$mount$iter__41599(cljs.core.chunk_rest(s__41600__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41602),null);
}
} else {
var r = cljs.core.first(s__41600__$2);
return cljs.core.cons((jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)),jasminegui$mount$iter__41599(cljs.core.rest(s__41600__$2)));
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
var pivoted_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41594_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__41594_SHARP_,(function (){var fexpr__41603 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__41603.cljs$core$IFn$_invoke$arity$1 ? fexpr__41603.cljs$core$IFn$_invoke$arity$1(p1__41594_SHARP_) : fexpr__41603.call(null,p1__41594_SHARP_));
})()], 0));
}),pivoted_positions);
var differentiate = (function (line){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (temp_line,p){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(temp_line,p,((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(temp_line) : p.call(null,temp_line)) - (base_kportfolio.cljs$core$IFn$_invoke$arity$1 ? base_kportfolio.cljs$core$IFn$_invoke$arity$1(temp_line) : base_kportfolio.call(null,temp_line))));
}),line,kportfolios);
});
var pivoted_data_diff = cljs.core.map.cljs$core$IFn$_invoke$arity$2(differentiate,pivoted_data);
var threshold = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41595_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__41595_SHARP_),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053).cljs$core$IFn$_invoke$arity$1(db));
}),jasminegui.static$.threshold_choices_alignment))));
var thfil = (function (line){
return cljs.core.some((function (x){
return (((x < (- threshold))) || ((x > threshold)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(line,kportfolios));
});
var pivoted_data_diff_post_th = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(thfil,pivoted_data_diff);
return jasminegui.mount.add_total_line_to_pivot(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.mount.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),pivoted_data_diff_post_th),kportfolios);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41596_41817,G__41597_41818) : re_frame.core.reg_sub.call(null,G__41596_41817,G__41597_41818));
var G__41605_41833 = new cljs.core.Keyword("summary-display","table","summary-display/table",1149370831);
var G__41606_41834 = (function (db){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__41607(s__41608){
return (new cljs.core.LazySeq(null,(function (){
var s__41608__$1 = s__41608;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41608__$1);
if(temp__5735__auto__){
var s__41608__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41608__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__41608__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__41610 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__41609 = (0);
while(true){
if((i__41609 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__41609);
cljs.core.chunk_append(b__41610,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"portfolio","portfolio",957568598),p], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = ((function (i__41609,p,c__4527__auto__,size__4528__auto__,b__41610,s__41608__$2,temp__5735__auto__,G__41605_41833){
return (function jasminegui$mount$iter__41607_$_iter__41611(s__41612){
return (new cljs.core.LazySeq(null,((function (i__41609,p,c__4527__auto__,size__4528__auto__,b__41610,s__41608__$2,temp__5735__auto__,G__41605_41833){
return (function (){
var s__41612__$1 = s__41612;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__41612__$1);
if(temp__5735__auto____$1){
var s__41612__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__41612__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__41612__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__41614 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__41613 = (0);
while(true){
if((i__41613 < size__4528__auto____$1)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto____$1,i__41613);
cljs.core.chunk_append(b__41614,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null));

var G__41839 = (i__41613 + (1));
i__41613 = G__41839;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41614),jasminegui$mount$iter__41607_$_iter__41611(cljs.core.chunk_rest(s__41612__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41614),null);
}
} else {
var k = cljs.core.first(s__41612__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null),jasminegui$mount$iter__41607_$_iter__41611(cljs.core.rest(s__41612__$2)));
}
} else {
return null;
}
break;
}
});})(i__41609,p,c__4527__auto__,size__4528__auto__,b__41610,s__41608__$2,temp__5735__auto__,G__41605_41833))
,null,null));
});})(i__41609,p,c__4527__auto__,size__4528__auto__,b__41610,s__41608__$2,temp__5735__auto__,G__41605_41833))
;
return iter__4529__auto__(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175),new cljs.core.Keyword(null,"base-value","base-value",921379228),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067),new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030),new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342)], null));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861)], null)) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__41609,p,c__4527__auto__,size__4528__auto__,b__41610,s__41608__$2,temp__5735__auto__,G__41605_41833){
return (function (p1__41604_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__41604_SHARP_),p)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-class","asset-class",1845554418).cljs$core$IFn$_invoke$arity$1(p1__41604_SHARP_),"BONDS")));
});})(i__41609,p,c__4527__auto__,size__4528__auto__,b__41610,s__41608__$2,temp__5735__auto__,G__41605_41833))
,new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db)))))], null)], 0)));

var G__41842 = (i__41609 + (1));
i__41609 = G__41842;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41610),jasminegui$mount$iter__41607(cljs.core.chunk_rest(s__41608__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41610),null);
}
} else {
var p = cljs.core.first(s__41608__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"portfolio","portfolio",957568598),p], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = ((function (p,s__41608__$2,temp__5735__auto__,G__41605_41833){
return (function jasminegui$mount$iter__41607_$_iter__41615(s__41616){
return (new cljs.core.LazySeq(null,(function (){
var s__41616__$1 = s__41616;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__41616__$1);
if(temp__5735__auto____$1){
var s__41616__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__41616__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__41616__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__41618 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__41617 = (0);
while(true){
if((i__41617 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__41617);
cljs.core.chunk_append(b__41618,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null));

var G__41845 = (i__41617 + (1));
i__41617 = G__41845;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41618),jasminegui$mount$iter__41607_$_iter__41615(cljs.core.chunk_rest(s__41616__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41618),null);
}
} else {
var k = cljs.core.first(s__41616__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),k], null))], null),jasminegui$mount$iter__41607_$_iter__41615(cljs.core.rest(s__41616__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(p,s__41608__$2,temp__5735__auto__,G__41605_41833))
;
return iter__4529__auto__(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175),new cljs.core.Keyword(null,"base-value","base-value",921379228),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067),new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030),new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating","qt-iam-int-lt-median-rating",26215930),new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342)], null));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contrib-bond-yield","contrib-bond-yield",1317107737),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861)], null)) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (p,s__41608__$2,temp__5735__auto__,G__41605_41833){
return (function (p1__41604_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__41604_SHARP_),p)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-class","asset-class",1845554418).cljs$core$IFn$_invoke$arity$1(p1__41604_SHARP_),"BONDS")));
});})(p,s__41608__$2,temp__5735__auto__,G__41605_41833))
,new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db)))))], null)], 0)),jasminegui$mount$iter__41607(cljs.core.rest(s__41608__$2)));
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41605_41833,G__41606_41834) : re_frame.core.reg_sub.call(null,G__41605_41833,G__41606_41834));
var seq__41619_41854 = cljs.core.seq(new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword("multiple-portfolio-risk","table-filter","multiple-portfolio-risk/table-filter",-790978389),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("portfolio-alignment","table-filter","portfolio-alignment/table-filter",-1781119334)], null));
var chunk__41620_41855 = null;
var count__41621_41856 = (0);
var i__41622_41857 = (0);
while(true){
if((i__41622_41857 < count__41621_41856)){
var k_41858 = chunk__41620_41855.cljs$core$IIndexed$_nth$arity$2(null,i__41622_41857);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_41858,((function (seq__41619_41854,chunk__41620_41855,count__41621_41856,i__41622_41857,k_41858){
return (function (db,p__41631){
var vec__41632 = p__41631;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41632,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41632,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_41858,data);
});})(seq__41619_41854,chunk__41620_41855,count__41621_41856,i__41622_41857,k_41858))
);


var G__41859 = seq__41619_41854;
var G__41860 = chunk__41620_41855;
var G__41861 = count__41621_41856;
var G__41862 = (i__41622_41857 + (1));
seq__41619_41854 = G__41859;
chunk__41620_41855 = G__41860;
count__41621_41856 = G__41861;
i__41622_41857 = G__41862;
continue;
} else {
var temp__5735__auto___41863 = cljs.core.seq(seq__41619_41854);
if(temp__5735__auto___41863){
var seq__41619_41864__$1 = temp__5735__auto___41863;
if(cljs.core.chunked_seq_QMARK_(seq__41619_41864__$1)){
var c__4556__auto___41865 = cljs.core.chunk_first(seq__41619_41864__$1);
var G__41866 = cljs.core.chunk_rest(seq__41619_41864__$1);
var G__41867 = c__4556__auto___41865;
var G__41868 = cljs.core.count(c__4556__auto___41865);
var G__41869 = (0);
seq__41619_41854 = G__41866;
chunk__41620_41855 = G__41867;
count__41621_41856 = G__41868;
i__41622_41857 = G__41869;
continue;
} else {
var k_41871 = cljs.core.first(seq__41619_41864__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_41871,((function (seq__41619_41854,chunk__41620_41855,count__41621_41856,i__41622_41857,k_41871,seq__41619_41864__$1,temp__5735__auto___41863){
return (function (db,p__41635){
var vec__41636 = p__41635;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41636,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41636,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_41871,data);
});})(seq__41619_41854,chunk__41620_41855,count__41621_41856,i__41622_41857,k_41871,seq__41619_41864__$1,temp__5735__auto___41863))
);


var G__41877 = cljs.core.next(seq__41619_41864__$1);
var G__41878 = null;
var G__41879 = (0);
var G__41880 = (0);
seq__41619_41854 = G__41877;
chunk__41620_41855 = G__41878;
count__41621_41856 = G__41879;
i__41622_41857 = G__41880;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),(function (db,p__41639){
var vec__41640 = p__41639;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41640,(0),null);
var portfolios = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41640,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),portfolios,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),cljs.core.set(portfolios)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),(function (db,p__41643){
var vec__41644 = p__41643;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41644,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41644,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41644,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),(function (db,p__41647){
var vec__41648 = p__41647;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41648,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41648,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41648,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),(function (db,p__41651){
var vec__41652 = p__41651;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41652,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41652,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41652,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),(function (db,p__41655){
var vec__41656 = p__41655;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41656,(0),null);
var qt_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41656,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),clojure.string.replace(qt_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),(function (db,p__41659){
var vec__41660 = p__41659;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41660,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41660,(1),null);
var G__41663 = snapshot;
switch (G__41663) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41663)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cycle-shortcut","cycle-shortcut",-1617058214),(function (db,p__41664){
var vec__41665 = p__41664;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41665,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41665,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41665,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"active-home","active-home",53621216).cljs$core$IFn$_invoke$arity$1(db)),"-risk/shortcut"].join(''));
var shortcut_value = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
if((shortcut_value < (4))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(shortcut_value + (1)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(1));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tree-table","tree-table",-1263002012),(function (db,p__41668){
var vec__41669 = p__41668;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41669,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41669,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41669,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"active-home","active-home",53621216).cljs$core$IFn$_invoke$arity$1(db)),"-risk/display-style"].join(''));
var G__41672 = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
switch (G__41672) {
case "Tree":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Table");

break;
case "Table":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Tree");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41672)].join('')));

}
}));
jasminegui.mount.http_get_dispatch = (function jasminegui$mount$http_get_dispatch(request){
var c__39340__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39341__auto__ = (function (){var switch__39295__auto__ = (function (state_41701){
var state_val_41702 = (state_41701[(1)]);
if((state_val_41702 === (1))){
var inst_41673 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_41674 = cljs_http.client.get(inst_41673);
var state_41701__$1 = state_41701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41701__$1,(2),inst_41674);
} else {
if((state_val_41702 === (2))){
var inst_41676 = (state_41701[(2)]);
var inst_41677 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_41678 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_41701__$1 = (function (){var statearr_41703 = state_41701;
(statearr_41703[(7)] = inst_41676);

(statearr_41703[(8)] = inst_41677);

return statearr_41703;
})();
if(cljs.core.truth_(inst_41678)){
var statearr_41704_41898 = state_41701__$1;
(statearr_41704_41898[(1)] = (3));

} else {
var statearr_41705_41899 = state_41701__$1;
(statearr_41705_41899[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41702 === (3))){
var inst_41676 = (state_41701[(7)]);
var inst_41680 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_41676);
var inst_41681 = JSON.parse(inst_41680);
var inst_41682 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_41681,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_41701__$1 = state_41701;
var statearr_41706_41901 = state_41701__$1;
(statearr_41706_41901[(2)] = inst_41682);

(statearr_41706_41901[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41702 === (4))){
var inst_41676 = (state_41701[(7)]);
var inst_41684 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_41676);
var state_41701__$1 = state_41701;
var statearr_41707_41902 = state_41701__$1;
(statearr_41707_41902[(2)] = inst_41684);

(statearr_41707_41902[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41702 === (5))){
var inst_41677 = (state_41701[(8)]);
var inst_41686 = (state_41701[(2)]);
var inst_41687 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_41677,inst_41686);
var inst_41688 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_41687) : re_frame.core.dispatch.call(null,inst_41687));
var inst_41689 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_41701__$1 = (function (){var statearr_41708 = state_41701;
(statearr_41708[(9)] = inst_41688);

return statearr_41708;
})();
if(cljs.core.truth_(inst_41689)){
var statearr_41709_41903 = state_41701__$1;
(statearr_41709_41903[(1)] = (6));

} else {
var statearr_41710_41904 = state_41701__$1;
(statearr_41710_41904[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41702 === (6))){
var inst_41691 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41692 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_41693 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_41694 = [inst_41692,inst_41693];
var inst_41695 = (new cljs.core.PersistentVector(null,2,(5),inst_41691,inst_41694,null));
var inst_41696 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_41695) : re_frame.core.dispatch.call(null,inst_41695));
var state_41701__$1 = state_41701;
var statearr_41711_41906 = state_41701__$1;
(statearr_41711_41906[(2)] = inst_41696);

(statearr_41711_41906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41702 === (7))){
var state_41701__$1 = state_41701;
var statearr_41712_41907 = state_41701__$1;
(statearr_41712_41907[(2)] = null);

(statearr_41712_41907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41702 === (8))){
var inst_41699 = (state_41701[(2)]);
var state_41701__$1 = state_41701;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41701__$1,inst_41699);
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
var jasminegui$mount$http_get_dispatch_$_state_machine__39296__auto__ = null;
var jasminegui$mount$http_get_dispatch_$_state_machine__39296__auto____0 = (function (){
var statearr_41713 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41713[(0)] = jasminegui$mount$http_get_dispatch_$_state_machine__39296__auto__);

(statearr_41713[(1)] = (1));

return statearr_41713;
});
var jasminegui$mount$http_get_dispatch_$_state_machine__39296__auto____1 = (function (state_41701){
while(true){
var ret_value__39297__auto__ = (function (){try{while(true){
var result__39298__auto__ = switch__39295__auto__(state_41701);
if(cljs.core.keyword_identical_QMARK_(result__39298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39298__auto__;
}
break;
}
}catch (e41714){if((e41714 instanceof Object)){
var ex__39299__auto__ = e41714;
var statearr_41715_41915 = state_41701;
(statearr_41715_41915[(5)] = ex__39299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41714;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41916 = state_41701;
state_41701 = G__41916;
continue;
} else {
return ret_value__39297__auto__;
}
break;
}
});
jasminegui$mount$http_get_dispatch_$_state_machine__39296__auto__ = function(state_41701){
switch(arguments.length){
case 0:
return jasminegui$mount$http_get_dispatch_$_state_machine__39296__auto____0.call(this);
case 1:
return jasminegui$mount$http_get_dispatch_$_state_machine__39296__auto____1.call(this,state_41701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_get_dispatch_$_state_machine__39296__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_get_dispatch_$_state_machine__39296__auto____0;
jasminegui$mount$http_get_dispatch_$_state_machine__39296__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_get_dispatch_$_state_machine__39296__auto____1;
return jasminegui$mount$http_get_dispatch_$_state_machine__39296__auto__;
})()
})();
var state__39342__auto__ = (function (){var statearr_41716 = (f__39341__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39341__auto__.cljs$core$IFn$_invoke$arity$0() : f__39341__auto__.call(null));
(statearr_41716[(6)] = c__39340__auto__);

return statearr_41716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39342__auto__);
}));

return c__39340__auto__;
});
var G__41717_41917 = new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518);
var G__41718_41918 = jasminegui.mount.http_get_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__41717_41917,G__41718_41918) : re_frame.core.reg_fx.call(null,G__41717_41917,G__41718_41918));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions","get-positions",1610972586),(function (p__41719,p__41720){
var map__41721 = p__41719;
var map__41721__$1 = (((((!((map__41721 == null))))?(((((map__41721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41721):map__41721);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41721__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41722 = p__41720;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41722,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-rating-to-score","get-rating-to-score",391912155),(function (p__41726,p__41727){
var map__41728 = p__41726;
var map__41728__$1 = (((((!((map__41728 == null))))?(((((map__41728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41728):map__41728);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41728__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41729 = p__41727;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41729,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"rating-to-score"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472),(function (p__41733,p__41734){
var map__41735 = p__41733;
var map__41735__$1 = (((((!((map__41735 == null))))?(((((map__41735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41735):map__41735);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41735__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41736 = p__41734;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41736,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"portfolios"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-pivoted-positions","get-pivoted-positions",2145025131),(function (p__41740,p__41741){
var map__41742 = p__41740;
var map__41742__$1 = (((((!((map__41742 == null))))?(((((map__41742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41742):map__41742);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41742__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41743 = p__41741;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41743,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"pivoted-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-total-positions","get-total-positions",-698807167),(function (p__41747,p__41748){
var map__41749 = p__41747;
var map__41749__$1 = (((((!((map__41749 == null))))?(((((map__41749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41749):map__41749);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41749__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41750 = p__41748;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41750,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"total-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-qt-date","get-qt-date",-1072332881),(function (p__41754,p__41755){
var map__41756 = p__41754;
var map__41756__$1 = (((((!((map__41756 == null))))?(((((map__41756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41756):map__41756);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41756__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41757 = p__41755;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41757,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"qt-date"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),false], null)], null);
}));

//# sourceMappingURL=jasminegui.mount.js.map
