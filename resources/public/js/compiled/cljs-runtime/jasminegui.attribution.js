goog.provide('jasminegui.attribution');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('re_com.core');
goog.require('re_com.box');
goog.require('re_com.util');
var module$node_modules$react_table$lib$index=shadow.js.require("module$node_modules$react_table$lib$index", {});
goog.require('jasminegui.mount');
goog.require('jasminegui.static$');
goog.require('jasminegui.tools');
goog.require('jasminegui.tables');
goog.require('re_com.validate');
goog.require('goog.i18n.NumberFormat');
goog.require('goog.i18n.NumberFormat.Format');
jasminegui.attribution.dropdown_width = "150px";
jasminegui.attribution.single_portfolio_attribution_display = (function jasminegui$attribution$single_portfolio_attribution_display(){
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__63281 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63281) : re_frame.core.subscribe.call(null,G__63281));
})()),"Tree");
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__63282 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63282) : re_frame.core.subscribe.call(null,G__63282));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__63276_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__63276_SHARP_) : rfil.call(null,p1__63276_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__63276_SHARP_) : rfil.call(null,p1__63276_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$attribution$single_portfolio_attribution_display_$_iter__63285(s__63286){
return (new cljs.core.LazySeq(null,(function (){
var s__63286__$1 = s__63286;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63286__$1);
if(temp__5735__auto__){
var s__63286__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63286__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__63286__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__63288 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__63287 = (0);
while(true){
if((i__63287 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__63287);
cljs.core.chunk_append(b__63288,(jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.attribution_table_columns.call(null,r)));

var G__63806 = (i__63287 + (1));
i__63287 = G__63806;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63288),jasminegui$attribution$single_portfolio_attribution_display_$_iter__63285(cljs.core.chunk_rest(s__63286__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63288),null);
}
} else {
var r = cljs.core.first(s__63286__$2);
return cljs.core.cons((jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.attribution_table_columns.call(null,r)),jasminegui$attribution$single_portfolio_attribution_display_$_iter__63285(cljs.core.rest(s__63286__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(risk_choices,new cljs.core.Keyword(null,"security","security",886963079))));
})());
var additional_des_cols = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(risk_choices,"None")),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),jasminegui.static$.attribution_choice_map));
var accessors = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accessor","accessor",-25476721),grouping_columns);
var display = cljs.core.deref((function (){var G__63333 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","clean-table","single-portfolio-attribution/clean-table",-391468387)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63333) : re_frame.core.subscribe.call(null,G__63333));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"onFilteredChange","onFilteredChange",-69731355),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"filterable","filterable",-1588312341),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"pageSize","pageSize",732080883),new cljs.core.Keyword(null,"sortable","sortable",2109633621),new cljs.core.Keyword(null,"defaultFilterMethod","defaultFilterMethod",-641971243),new cljs.core.Keyword(null,"defaultFiltered","defaultFiltered",-1057218537),new cljs.core.Keyword(null,"pivotBy","pivotBy",782354495),new cljs.core.Keyword(null,"data","data",-232669377)],[(function (p1__63278_SHARP_){
var G__63344 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table-filter","single-portfolio-attribution/table-filter",1757441687),p1__63278_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63344) : re_frame.core.dispatch.call(null,G__63344));
}),(!(is_tree)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Groups",new cljs.core.Keyword(null,"columns","columns",1998437288),grouping_columns], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Effect",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-effect","total-effect",-967715775)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Contribution",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contribution","contribution",-1962459669),new cljs.core.Keyword(null,"bm-contribution","bm-contribution",961434966)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Weight",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xs-weight","xs-weight",2029728902),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"bm-weight","bm-weight",217267431)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Additional information",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(additional_des_cols,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"rating","rating",144173662)], null)))], null)], null),(!(is_tree)),"-striped -highlight",((is_tree)?(cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(accessors)),display))) + (1)):(25)),(!(is_tree)),jasminegui.tables.case_insensitive_filter,((is_tree)?cljs.core.PersistentVector.EMPTY:cljs.core.deref((function (){var G__63393 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table-filter","single-portfolio-attribution/table-filter",1757441687)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63393) : re_frame.core.subscribe.call(null,G__63393));
})())),((is_tree)?accessors:cljs.core.PersistentVector.EMPTY),display])], null);
});
jasminegui.attribution.multiple_portfolio_attribution_display = (function jasminegui$attribution$multiple_portfolio_attribution_display(){
var display_key_one = cljs.core.deref((function (){var G__63412 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63412) : re_frame.core.subscribe.call(null,G__63412));
})());
var width_one = (100);
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__63415 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","display-style","multiple-portfolio-attribution/display-style",-767260119)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63415) : re_frame.core.subscribe.call(null,G__63415));
})()),"Tree");
var attribution_choices = (function (){var rfil = cljs.core.deref((function (){var G__63418 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63418) : re_frame.core.subscribe.call(null,G__63418));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__63403_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__63403_SHARP_) : rfil.call(null,p1__63403_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__63403_SHARP_) : rfil.call(null,p1__63403_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$attribution$multiple_portfolio_attribution_display_$_iter__63425(s__63426){
return (new cljs.core.LazySeq(null,(function (){
var s__63426__$1 = s__63426;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63426__$1);
if(temp__5735__auto__){
var s__63426__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63426__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__63426__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__63428 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__63427 = (0);
while(true){
if((i__63427 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__63427);
cljs.core.chunk_append(b__63428,(jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.attribution_table_columns.call(null,r)));

var G__63847 = (i__63427 + (1));
i__63427 = G__63847;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63428),jasminegui$attribution$multiple_portfolio_attribution_display_$_iter__63425(cljs.core.chunk_rest(s__63426__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63428),null);
}
} else {
var r = cljs.core.first(s__63426__$2);
return cljs.core.cons((jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.attribution_table_columns.call(null,r)),jasminegui$attribution$multiple_portfolio_attribution_display_$_iter__63425(cljs.core.rest(s__63426__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attribution_choices,new cljs.core.Keyword(null,"security","security",886963079))));
})());
var accessors = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accessor","accessor",-25476721),grouping_columns);
var display_one = cljs.core.deref((function (){var G__63454 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","clean-table","multiple-portfolio-attribution/clean-table",-1066824107)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63454) : re_frame.core.subscribe.call(null,G__63454));
})());
var cols = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$attribution$multiple_portfolio_attribution_display_$_iter__63455(s__63456){
return (new cljs.core.LazySeq(null,(function (){
var s__63456__$1 = s__63456;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63456__$1);
if(temp__5735__auto__){
var s__63456__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63456__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__63456__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__63458 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__63457 = (0);
while(true){
if((i__63457 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__63457);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([p]),cljs.core.deref((function (){var G__63459 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63459) : re_frame.core.subscribe.call(null,G__63459));
})())))){
cljs.core.chunk_append(b__63458,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),p,new cljs.core.Keyword(null,"accessor","accessor",-25476721),p,new cljs.core.Keyword(null,"width","width",-384071477),width_one,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.tables.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_one,new cljs.core.Keyword(null,"Cell","Cell",53644787)], null)),new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null));

var G__63890 = (i__63457 + (1));
i__63457 = G__63890;
continue;
} else {
var G__63891 = (i__63457 + (1));
i__63457 = G__63891;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63458),jasminegui$attribution$multiple_portfolio_attribution_display_$_iter__63455(cljs.core.chunk_rest(s__63456__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63458),null);
}
} else {
var p = cljs.core.first(s__63456__$2);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([p]),cljs.core.deref((function (){var G__63463 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63463) : re_frame.core.subscribe.call(null,G__63463));
})())))){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),p,new cljs.core.Keyword(null,"accessor","accessor",-25476721),p,new cljs.core.Keyword(null,"width","width",-384071477),width_one,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.tables.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_one,new cljs.core.Keyword(null,"Cell","Cell",53644787)], null)),new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),jasminegui$attribution$multiple_portfolio_attribution_display_$_iter__63455(cljs.core.rest(s__63456__$2)));
} else {
var G__63894 = cljs.core.rest(s__63456__$2);
s__63456__$1 = G__63894;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref((function (){var G__63468 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63468) : re_frame.core.subscribe.call(null,G__63468));
})()));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"onFilteredChange","onFilteredChange",-69731355),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"filterable","filterable",-1588312341),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"pageSize","pageSize",732080883),new cljs.core.Keyword(null,"sortable","sortable",2109633621),new cljs.core.Keyword(null,"defaultFilterMethod","defaultFilterMethod",-641971243),new cljs.core.Keyword(null,"defaultFiltered","defaultFiltered",-1057218537),new cljs.core.Keyword(null,"pivotBy","pivotBy",782354495),new cljs.core.Keyword(null,"data","data",-232669377)],[(function (p1__63409_SHARP_){
var G__63477 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table-filter","multiple-portfolio-attribution/table-filter",-9483585),p1__63409_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63477) : re_frame.core.dispatch.call(null,G__63477));
}),(!(is_tree)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Groups",new cljs.core.Keyword(null,"columns","columns",1998437288),grouping_columns], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),["Portfolio ",cljs.core.name(display_key_one)].join(''),new cljs.core.Keyword(null,"columns","columns",1998437288),cols], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Description",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"rating","rating",144173662)], null))], null)], null),(!(is_tree)),"-striped -highlight",((is_tree)?(cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(accessors)),display_one))) + (1)):(25)),(!(is_tree)),jasminegui.tables.case_insensitive_filter,((is_tree)?cljs.core.PersistentVector.EMPTY:cljs.core.deref((function (){var G__63483 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table-filter","multiple-portfolio-attribution/table-filter",-9483585)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63483) : re_frame.core.subscribe.call(null,G__63483));
})())),((is_tree)?accessors:cljs.core.PersistentVector.EMPTY),display_one])], null);
});
jasminegui.attribution.shortcut_row = (function jasminegui$attribution$shortcut_row(key){
var shortcut = (function (){var G__63489 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63489) : re_frame.core.subscribe.call(null,G__63489));
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Shortcuts:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$attribution$shortcut_row_$_iter__63492(s__63493){
return (new cljs.core.LazySeq(null,(function (){
var s__63493__$1 = s__63493;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63493__$1);
if(temp__5735__auto__){
var s__63493__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63493__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__63493__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__63495 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__63494 = (0);
while(true){
if((i__63494 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__63494);
cljs.core.chunk_append(b__63495,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),["zmdi-collection-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shortcut),i))?"active":"default"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__63494,i,c__4527__auto__,size__4528__auto__,b__63495,s__63493__$2,temp__5735__auto__,shortcut){
return (function (){
var G__63507 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,i], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63507) : re_frame.core.dispatch.call(null,G__63507));
});})(i__63494,i,c__4527__auto__,size__4528__auto__,b__63495,s__63493__$2,temp__5735__auto__,shortcut))
], null));

var G__63901 = (i__63494 + (1));
i__63494 = G__63901;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63495),jasminegui$attribution$shortcut_row_$_iter__63492(cljs.core.chunk_rest(s__63493__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63495),null);
}
} else {
var i = cljs.core.first(s__63493__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),["zmdi-collection-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shortcut),i))?"active":"default"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i,s__63493__$2,temp__5735__auto__,shortcut){
return (function (){
var G__63514 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,i], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63514) : re_frame.core.dispatch.call(null,G__63514));
});})(i,s__63493__$2,temp__5735__auto__,shortcut))
], null),jasminegui$attribution$shortcut_row_$_iter__63492(cljs.core.rest(s__63493__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(5)));
})())));
});
jasminegui.attribution.filtering_row = (function jasminegui$attribution$filtering_row(key){
var risk_filter = (function (){var G__63521 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63521) : re_frame.core.subscribe.call(null,G__63521));
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$attribution$filtering_row_$_iter__63523(s__63524){
return (new cljs.core.LazySeq(null,(function (){
var s__63524__$1 = s__63524;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63524__$1);
if(temp__5735__auto__){
var s__63524__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63524__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__63524__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__63526 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__63525 = (0);
while(true){
if((i__63525 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__63525);
cljs.core.chunk_append(b__63526,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.attribution.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),reagent.core.cursor(risk_filter,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null)),new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.attribution_choice_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__63525,i,c__4527__auto__,size__4528__auto__,b__63526,s__63524__$2,temp__5735__auto__,risk_filter){
return (function (p1__63517_SHARP_){
var G__63541 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,i,p1__63517_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63541) : re_frame.core.dispatch.call(null,G__63541));
});})(i__63525,i,c__4527__auto__,size__4528__auto__,b__63526,s__63524__$2,temp__5735__auto__,risk_filter))
], null));

var G__63909 = (i__63525 + (1));
i__63525 = G__63909;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63526),jasminegui$attribution$filtering_row_$_iter__63523(cljs.core.chunk_rest(s__63524__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63526),null);
}
} else {
var i = cljs.core.first(s__63524__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.attribution.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),reagent.core.cursor(risk_filter,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null)),new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.attribution_choice_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i,s__63524__$2,temp__5735__auto__,risk_filter){
return (function (p1__63517_SHARP_){
var G__63548 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,i,p1__63517_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63548) : re_frame.core.dispatch.call(null,G__63548));
});})(i,s__63524__$2,temp__5735__auto__,risk_filter))
], null),jasminegui$attribution$filtering_row_$_iter__63523(cljs.core.rest(s__63524__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})());
});
jasminegui.attribution.csv_link = (function jasminegui$attribution$csv_link(data,filename){
return jasminegui.tools.download_object_as_csv(cljs.core.clj__GT_js(jasminegui.tools.vector_of_maps__GT_csv(data)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename),".csv"].join(''));
});
jasminegui.attribution.single_portfolio_attribution_controller = (function jasminegui$attribution$single_portfolio_attribution_controller(){
var portfolio_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$attribution$single_portfolio_attribution_controller_$_iter__63574(s__63575){
return (new cljs.core.LazySeq(null,(function (){
var s__63575__$1 = s__63575;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63575__$1);
if(temp__5735__auto__){
var s__63575__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63575__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__63575__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__63577 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__63576 = (0);
while(true){
if((i__63576 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__63576);
cljs.core.chunk_append(b__63577,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null));

var G__63925 = (i__63576 + (1));
i__63576 = G__63925;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63577),jasminegui$attribution$single_portfolio_attribution_controller_$_iter__63574(cljs.core.chunk_rest(s__63575__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63577),null);
}
} else {
var p = cljs.core.first(s__63575__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null),jasminegui$attribution$single_portfolio_attribution_controller_$_iter__63574(cljs.core.rest(s__63575__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref((function (){var G__63584 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63584) : re_frame.core.subscribe.call(null,G__63584));
})()));
})());
var display_style = (function (){var G__63586 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63586) : re_frame.core.subscribe.call(null,G__63586));
})();
var portfolio = (function (){var G__63589 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63589) : re_frame.core.subscribe.call(null,G__63589));
})();
var period = (function (){var G__63590 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63590) : re_frame.core.subscribe.call(null,G__63590));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),["Attribution drill-down ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__63595 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63595) : re_frame.core.subscribe.call(null,G__63595));
})()))].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"50px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"15px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Display type:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.attribution.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),display_style,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.tree_table_choices,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__63557_SHARP_){
var G__63597 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679),p1__63557_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63597) : re_frame.core.dispatch.call(null,G__63597));
})], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Period:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.attribution.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),period,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.attribution_period_choices,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__63558_SHARP_){
var G__63600 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-single-attribution-period","change-single-attribution-period",860703642),p1__63558_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63600) : re_frame.core.dispatch.call(null,G__63600));
})], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Filtering:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.attribution.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),portfolio,new cljs.core.Keyword(null,"choices","choices",1385611597),portfolio_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__63567_SHARP_){
var G__63603 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-single-attribution-portfolio","change-single-attribution-portfolio",1766745939),p1__63567_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63603) : re_frame.core.dispatch.call(null,G__63603));
})], null)], null),jasminegui.attribution.filtering_row(new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267))))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(jasminegui.attribution.shortcut_row(new cljs.core.Keyword("single-portfolio-attribution","shortcut","single-portfolio-attribution/shortcut",-1711481988)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"50px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Download:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-download",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return jasminegui.attribution.csv_link(cljs.core.deref((function (){var G__63606 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63606) : re_frame.core.subscribe.call(null,G__63606));
})()),cljs.core.deref(portfolio));
})], null)], null)))], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.attribution.single_portfolio_attribution_display], null)], null)], null)], null);
});
jasminegui.attribution.multiple_portfolio_attribution_controller = (function jasminegui$attribution$multiple_portfolio_attribution_controller(){
var portfolio_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$attribution$multiple_portfolio_attribution_controller_$_iter__63618(s__63619){
return (new cljs.core.LazySeq(null,(function (){
var s__63619__$1 = s__63619;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63619__$1);
if(temp__5735__auto__){
var s__63619__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63619__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__63619__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__63621 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__63620 = (0);
while(true){
if((i__63620 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__63620);
cljs.core.chunk_append(b__63621,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null));

var G__63939 = (i__63620 + (1));
i__63620 = G__63939;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63621),jasminegui$attribution$multiple_portfolio_attribution_controller_$_iter__63618(cljs.core.chunk_rest(s__63619__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63621),null);
}
} else {
var p = cljs.core.first(s__63619__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null),jasminegui$attribution$multiple_portfolio_attribution_controller_$_iter__63618(cljs.core.rest(s__63619__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref((function (){var G__63623 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63623) : re_frame.core.subscribe.call(null,G__63623));
})()));
})());
var display_style = (function (){var G__63624 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","display-style","multiple-portfolio-attribution/display-style",-767260119)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63624) : re_frame.core.subscribe.call(null,G__63624));
})();
var portfolios = cljs.core.deref((function (){var G__63625 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63625) : re_frame.core.subscribe.call(null,G__63625));
})());
var selected_portfolios = (function (){var G__63626 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63626) : re_frame.core.subscribe.call(null,G__63626));
})();
var field_one = (function (){var G__63627 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63627) : re_frame.core.subscribe.call(null,G__63627));
})();
var period = (function (){var G__63628 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63628) : re_frame.core.subscribe.call(null,G__63628));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),["Attribution drill-down ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__63636 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63636) : re_frame.core.subscribe.call(null,G__63636));
})()))].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"50px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Display type:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.attribution.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),display_style,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.tree_table_choices,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__63608_SHARP_){
var G__63639 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","display-style","multiple-portfolio-attribution/display-style",-767260119),p1__63608_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63639) : re_frame.core.dispatch.call(null,G__63639));
})], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Period:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.attribution.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),period,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.attribution_period_choices,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__63609_SHARP_){
var G__63640 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-multiple-attribution-period","change-multiple-attribution-period",590435537),p1__63609_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63640) : re_frame.core.dispatch.call(null,G__63640));
})], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Field:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.attribution.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),field_one,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.attribution_field_choices,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__63610_SHARP_){
var G__63641 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-multiple-attribution-target","change-multiple-attribution-target",777460289),p1__63610_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63641) : re_frame.core.dispatch.call(null,G__63641));
})], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Portfolios:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"label","label",1718410804),"All",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__63642 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),cljs.core.set(portfolios)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63642) : re_frame.core.dispatch.call(null,G__63642));
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"label","label",1718410804),"None",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__63645 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),cljs.core.PersistentHashSet.EMPTY], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63645) : re_frame.core.dispatch.call(null,G__63645));
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"label","label",1718410804),"CEMBI",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__63646 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),cljs.core.set(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"cembi","cembi",1924920241));
}),jasminegui.static$.portfolio_alignment_groups))))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63646) : re_frame.core.dispatch.call(null,G__63646));
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"label","label",1718410804),"Allianz",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__63649 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),cljs.core.set(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"allianz","allianz",-819219390));
}),jasminegui.static$.portfolio_alignment_groups))))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63649) : re_frame.core.dispatch.call(null,G__63649));
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"label","label",1718410804),"IG",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__63651 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),cljs.core.set(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"ig","ig",-1295804776));
}),jasminegui.static$.portfolio_alignment_groups))))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63651) : re_frame.core.dispatch.call(null,G__63651));
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"label","label",1718410804),"Talanx",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__63658 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),cljs.core.set(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"talanx","talanx",-128127782));
}),jasminegui.static$.portfolio_alignment_groups))))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63658) : re_frame.core.dispatch.call(null,G__63658));
})], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.selection_list,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.attribution.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),selected_portfolios,new cljs.core.Keyword(null,"choices","choices",1385611597),portfolio_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__63615_SHARP_){
var G__63660 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),p1__63615_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63660) : re_frame.core.dispatch.call(null,G__63660));
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Filtering:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null)], null),jasminegui.attribution.filtering_row(new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219))))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),jasminegui.attribution.shortcut_row(new cljs.core.Keyword("multiple-portfolio-attribution","shortcut","multiple-portfolio-attribution/shortcut",809107380))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Download:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-download",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return jasminegui.attribution.csv_link(cljs.core.deref((function (){var G__63662 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63662) : re_frame.core.subscribe.call(null,G__63662));
})()),"pivot");
})], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.attribution.multiple_portfolio_attribution_display], null)], null)], null)], null);
});
jasminegui.attribution.go_to_attribution_risk = (function jasminegui$attribution$go_to_attribution_risk(state,rowInfo,instance){
return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__63669_63949 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","active-attribution","navigation/active-attribution",600082450),new cljs.core.Keyword(null,"single-portfolio","single-portfolio",-1254194917)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__63669_63949) : re_frame.core.dispatch_sync.call(null,G__63669_63949));

var G__63670 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-single-attribution-portfolio","change-single-attribution-portfolio",1766745939),(rowInfo["row"]["portfolio"])], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63670) : re_frame.core.dispatch.call(null,G__63670));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null));
});
jasminegui.attribution.summary_display = (function jasminegui$attribution$summary_display(){
var fmt = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(90),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round2colpct], null);
var timeframes = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Year to date","ytd"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Month to date","mtd"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Week to date","wtd"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Daily","day"], null)], null);
var targets = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Fund","-Fund-Contribution"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Benchmark","-Index-Contribution"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Relative","-Total-Effect"], null)], null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),["Summary ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__63672 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63672) : re_frame.core.subscribe.call(null,G__63672));
})()))].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.deref((function (){var G__63673 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("attribution","summary","attribution/summary",687462095)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63673) : re_frame.core.subscribe.call(null,G__63673));
})()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Portfolio",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"portfolio",new cljs.core.Keyword(null,"width","width",-384071477),(120)], null)], null),(function (){var iter__4529__auto__ = (function jasminegui$attribution$summary_display_$_iter__63674(s__63675){
return (new cljs.core.LazySeq(null,(function (){
var s__63675__$1 = s__63675;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63675__$1);
if(temp__5735__auto__){
var s__63675__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63675__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__63675__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__63677 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__63676 = (0);
while(true){
if((i__63676 < size__4528__auto__)){
var vec__63680 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__63676);
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63680,(0),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63680,(1),null);
cljs.core.chunk_append(b__63677,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),k1,new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = ((function (i__63676,vec__63680,k1,v1,c__4527__auto__,size__4528__auto__,b__63677,s__63675__$2,temp__5735__auto__,fmt,timeframes,targets){
return (function jasminegui$attribution$summary_display_$_iter__63674_$_iter__63683(s__63684){
return (new cljs.core.LazySeq(null,((function (i__63676,vec__63680,k1,v1,c__4527__auto__,size__4528__auto__,b__63677,s__63675__$2,temp__5735__auto__,fmt,timeframes,targets){
return (function (){
var s__63684__$1 = s__63684;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__63684__$1);
if(temp__5735__auto____$1){
var s__63684__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__63684__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__63684__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__63686 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__63685 = (0);
while(true){
if((i__63685 < size__4528__auto____$1)){
var vec__63693 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto____$1,i__63685);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63693,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63693,(1),null);
cljs.core.chunk_append(b__63686,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),k2,new cljs.core.Keyword(null,"accessor","accessor",-25476721),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v2)].join('')], null),fmt], 0)));

var G__63966 = (i__63685 + (1));
i__63685 = G__63966;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63686),jasminegui$attribution$summary_display_$_iter__63674_$_iter__63683(cljs.core.chunk_rest(s__63684__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63686),null);
}
} else {
var vec__63701 = cljs.core.first(s__63684__$2);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63701,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63701,(1),null);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),k2,new cljs.core.Keyword(null,"accessor","accessor",-25476721),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v2)].join('')], null),fmt], 0)),jasminegui$attribution$summary_display_$_iter__63674_$_iter__63683(cljs.core.rest(s__63684__$2)));
}
} else {
return null;
}
break;
}
});})(i__63676,vec__63680,k1,v1,c__4527__auto__,size__4528__auto__,b__63677,s__63675__$2,temp__5735__auto__,fmt,timeframes,targets))
,null,null));
});})(i__63676,vec__63680,k1,v1,c__4527__auto__,size__4528__auto__,b__63677,s__63675__$2,temp__5735__auto__,fmt,timeframes,targets))
;
return iter__4529__auto__(targets);
})())], null));

var G__63967 = (i__63676 + (1));
i__63676 = G__63967;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63677),jasminegui$attribution$summary_display_$_iter__63674(cljs.core.chunk_rest(s__63675__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63677),null);
}
} else {
var vec__63709 = cljs.core.first(s__63675__$2);
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63709,(0),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63709,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),k1,new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = ((function (vec__63709,k1,v1,s__63675__$2,temp__5735__auto__,fmt,timeframes,targets){
return (function jasminegui$attribution$summary_display_$_iter__63674_$_iter__63714(s__63715){
return (new cljs.core.LazySeq(null,(function (){
var s__63715__$1 = s__63715;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__63715__$1);
if(temp__5735__auto____$1){
var s__63715__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__63715__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__63715__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__63717 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__63716 = (0);
while(true){
if((i__63716 < size__4528__auto__)){
var vec__63727 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__63716);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63727,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63727,(1),null);
cljs.core.chunk_append(b__63717,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),k2,new cljs.core.Keyword(null,"accessor","accessor",-25476721),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v2)].join('')], null),fmt], 0)));

var G__63977 = (i__63716 + (1));
i__63716 = G__63977;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63717),jasminegui$attribution$summary_display_$_iter__63674_$_iter__63714(cljs.core.chunk_rest(s__63715__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63717),null);
}
} else {
var vec__63734 = cljs.core.first(s__63715__$2);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63734,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63734,(1),null);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),k2,new cljs.core.Keyword(null,"accessor","accessor",-25476721),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v2)].join('')], null),fmt], 0)),jasminegui$attribution$summary_display_$_iter__63674_$_iter__63714(cljs.core.rest(s__63715__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__63709,k1,v1,s__63675__$2,temp__5735__auto__,fmt,timeframes,targets))
;
return iter__4529__auto__(targets);
})())], null),jasminegui$attribution$summary_display_$_iter__63674(cljs.core.rest(s__63675__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(timeframes);
})()),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),false,new cljs.core.Keyword(null,"pageSize","pageSize",732080883),cljs.core.count(cljs.core.deref((function (){var G__63757 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("attribution","summary","attribution/summary",687462095)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63757) : re_frame.core.subscribe.call(null,G__63757));
})())),new cljs.core.Keyword(null,"getTrProps","getTrProps",-2009881560),jasminegui.attribution.go_to_attribution_risk,new cljs.core.Keyword(null,"className","className",-1983287057),"-striped -highlight"], null)], null)], null)], null)], null);
});
jasminegui.attribution.nav_attribution_bar = (function jasminegui$attribution$nav_attribution_bar(){
var active_home = cljs.core.deref((function (){var G__63766 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","active-attribution","navigation/active-attribution",600082450)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63766) : re_frame.core.subscribe.call(null,G__63766));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"class","class",-2030961996),"leftnavbar",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$attribution$nav_attribution_bar_$_iter__63768(s__63769){
return (new cljs.core.LazySeq(null,(function (){
var s__63769__$1 = s__63769;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63769__$1);
if(temp__5735__auto__){
var s__63769__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63769__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__63769__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__63771 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__63770 = (0);
while(true){
if((i__63770 < size__4528__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__63770);
cljs.core.chunk_append(b__63771,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-primary btn-block",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_home,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?" active":null)].join(''),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__63770,item,c__4527__auto__,size__4528__auto__,b__63771,s__63769__$2,temp__5735__auto__,active_home){
return (function (){
var G__63781 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","active-attribution","navigation/active-attribution",600082450),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63781) : re_frame.core.dispatch.call(null,G__63781));
});})(i__63770,item,c__4527__auto__,size__4528__auto__,b__63771,s__63769__$2,temp__5735__auto__,active_home))
], null));

var G__63986 = (i__63770 + (1));
i__63770 = G__63986;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63771),jasminegui$attribution$nav_attribution_bar_$_iter__63768(cljs.core.chunk_rest(s__63769__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63771),null);
}
} else {
var item = cljs.core.first(s__63769__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-primary btn-block",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_home,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?" active":null)].join(''),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__63769__$2,temp__5735__auto__,active_home){
return (function (){
var G__63783 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","active-attribution","navigation/active-attribution",600082450),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63783) : re_frame.core.dispatch.call(null,G__63783));
});})(item,s__63769__$2,temp__5735__auto__,active_home))
], null),jasminegui$attribution$nav_attribution_bar_$_iter__63768(cljs.core.rest(s__63769__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(jasminegui.static$.attribution_navigation);
})())], null)], null)], null);
});
jasminegui.attribution.active_home = (function jasminegui$attribution$active_home(){
window.scrollTo((0),(0));

var G__63786 = cljs.core.deref((function (){var G__63788 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","active-attribution","navigation/active-attribution",600082450)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63788) : re_frame.core.subscribe.call(null,G__63788));
})());
var G__63786__$1 = (((G__63786 instanceof cljs.core.Keyword))?G__63786.fqn:null);
switch (G__63786__$1) {
case "summary":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.attribution.summary_display], null);

break;
case "single-portfolio":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.attribution.single_portfolio_attribution_controller], null);

break;
case "all-portfolios":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.attribution.multiple_portfolio_attribution_controller], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.output","div.output",1460347316),"nothing to display"], null);

}
});
jasminegui.attribution.home_view = (function jasminegui$attribution$home_view(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.attribution.nav_attribution_bar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.attribution.active_home], null)], null)], null);
});

//# sourceMappingURL=jasminegui.attribution.js.map
