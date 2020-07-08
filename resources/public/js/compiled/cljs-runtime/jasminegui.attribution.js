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
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__55998 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55998) : re_frame.core.subscribe.call(null,G__55998));
})()),"Tree");
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__56004 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56004) : re_frame.core.subscribe.call(null,G__56004));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55986_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__55986_SHARP_) : rfil.call(null,p1__55986_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__55986_SHARP_) : rfil.call(null,p1__55986_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$attribution$single_portfolio_attribution_display_$_iter__56005(s__56006){
return (new cljs.core.LazySeq(null,(function (){
var s__56006__$1 = s__56006;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56006__$1);
if(temp__5735__auto__){
var s__56006__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56006__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__56006__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__56008 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__56007 = (0);
while(true){
if((i__56007 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__56007);
cljs.core.chunk_append(b__56008,(jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.attribution_table_columns.call(null,r)));

var G__56577 = (i__56007 + (1));
i__56007 = G__56577;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56008),jasminegui$attribution$single_portfolio_attribution_display_$_iter__56005(cljs.core.chunk_rest(s__56006__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56008),null);
}
} else {
var r = cljs.core.first(s__56006__$2);
return cljs.core.cons((jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.attribution_table_columns.call(null,r)),jasminegui$attribution$single_portfolio_attribution_display_$_iter__56005(cljs.core.rest(s__56006__$2)));
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
var display = cljs.core.deref((function (){var G__56049 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","clean-table","single-portfolio-attribution/clean-table",-391468387)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56049) : re_frame.core.subscribe.call(null,G__56049));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"onFilteredChange","onFilteredChange",-69731355),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"filterable","filterable",-1588312341),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"pageSize","pageSize",732080883),new cljs.core.Keyword(null,"sortable","sortable",2109633621),new cljs.core.Keyword(null,"defaultFilterMethod","defaultFilterMethod",-641971243),new cljs.core.Keyword(null,"defaultFiltered","defaultFiltered",-1057218537),new cljs.core.Keyword(null,"pivotBy","pivotBy",782354495),new cljs.core.Keyword(null,"data","data",-232669377)],[(function (p1__55995_SHARP_){
var G__56057 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table-filter","single-portfolio-attribution/table-filter",1757441687),p1__55995_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56057) : re_frame.core.dispatch.call(null,G__56057));
}),(!(is_tree)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Groups",new cljs.core.Keyword(null,"columns","columns",1998437288),grouping_columns], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Effect",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-effect","total-effect",-967715775)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Contribution",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contribution","contribution",-1962459669),new cljs.core.Keyword(null,"bm-contribution","bm-contribution",961434966)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Weight",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xs-weight","xs-weight",2029728902),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"bm-weight","bm-weight",217267431)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Additional information",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(additional_des_cols,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"rating","rating",144173662)], null)))], null)], null),(!(is_tree)),"-striped -highlight",((is_tree)?(cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(accessors)),display))) + (1)):(25)),(!(is_tree)),jasminegui.tables.case_insensitive_filter,((is_tree)?cljs.core.PersistentVector.EMPTY:cljs.core.deref((function (){var G__56080 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table-filter","single-portfolio-attribution/table-filter",1757441687)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56080) : re_frame.core.subscribe.call(null,G__56080));
})())),((is_tree)?accessors:cljs.core.PersistentVector.EMPTY),display])], null);
});
jasminegui.attribution.multiple_portfolio_attribution_display = (function jasminegui$attribution$multiple_portfolio_attribution_display(){
var display_key_one = cljs.core.deref((function (){var G__56117 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56117) : re_frame.core.subscribe.call(null,G__56117));
})());
var width_one = (100);
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__56122 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","display-style","multiple-portfolio-attribution/display-style",-767260119)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56122) : re_frame.core.subscribe.call(null,G__56122));
})()),"Tree");
var attribution_choices = (function (){var rfil = cljs.core.deref((function (){var G__56127 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56127) : re_frame.core.subscribe.call(null,G__56127));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56087_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__56087_SHARP_) : rfil.call(null,p1__56087_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__56087_SHARP_) : rfil.call(null,p1__56087_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$attribution$multiple_portfolio_attribution_display_$_iter__56135(s__56136){
return (new cljs.core.LazySeq(null,(function (){
var s__56136__$1 = s__56136;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56136__$1);
if(temp__5735__auto__){
var s__56136__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56136__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__56136__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__56138 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__56137 = (0);
while(true){
if((i__56137 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__56137);
cljs.core.chunk_append(b__56138,(jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.attribution_table_columns.call(null,r)));

var G__56615 = (i__56137 + (1));
i__56137 = G__56615;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56138),jasminegui$attribution$multiple_portfolio_attribution_display_$_iter__56135(cljs.core.chunk_rest(s__56136__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56138),null);
}
} else {
var r = cljs.core.first(s__56136__$2);
return cljs.core.cons((jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.attribution_table_columns.call(null,r)),jasminegui$attribution$multiple_portfolio_attribution_display_$_iter__56135(cljs.core.rest(s__56136__$2)));
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
var display_one = cljs.core.deref((function (){var G__56176 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","clean-table","multiple-portfolio-attribution/clean-table",-1066824107)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56176) : re_frame.core.subscribe.call(null,G__56176));
})());
var cols = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$attribution$multiple_portfolio_attribution_display_$_iter__56177(s__56178){
return (new cljs.core.LazySeq(null,(function (){
var s__56178__$1 = s__56178;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56178__$1);
if(temp__5735__auto__){
var s__56178__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56178__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__56178__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__56180 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__56179 = (0);
while(true){
if((i__56179 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__56179);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([p]),cljs.core.deref((function (){var G__56182 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56182) : re_frame.core.subscribe.call(null,G__56182));
})())))){
cljs.core.chunk_append(b__56180,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),p,new cljs.core.Keyword(null,"accessor","accessor",-25476721),p,new cljs.core.Keyword(null,"width","width",-384071477),width_one,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.tables.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_one,new cljs.core.Keyword(null,"Cell","Cell",53644787)], null)),new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null));

var G__56631 = (i__56179 + (1));
i__56179 = G__56631;
continue;
} else {
var G__56632 = (i__56179 + (1));
i__56179 = G__56632;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56180),jasminegui$attribution$multiple_portfolio_attribution_display_$_iter__56177(cljs.core.chunk_rest(s__56178__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56180),null);
}
} else {
var p = cljs.core.first(s__56178__$2);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([p]),cljs.core.deref((function (){var G__56193 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56193) : re_frame.core.subscribe.call(null,G__56193));
})())))){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),p,new cljs.core.Keyword(null,"accessor","accessor",-25476721),p,new cljs.core.Keyword(null,"width","width",-384071477),width_one,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.tables.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_one,new cljs.core.Keyword(null,"Cell","Cell",53644787)], null)),new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),jasminegui$attribution$multiple_portfolio_attribution_display_$_iter__56177(cljs.core.rest(s__56178__$2)));
} else {
var G__56633 = cljs.core.rest(s__56178__$2);
s__56178__$1 = G__56633;
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
return iter__4529__auto__(cljs.core.deref((function (){var G__56204 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56204) : re_frame.core.subscribe.call(null,G__56204));
})()));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"onFilteredChange","onFilteredChange",-69731355),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"filterable","filterable",-1588312341),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"pageSize","pageSize",732080883),new cljs.core.Keyword(null,"sortable","sortable",2109633621),new cljs.core.Keyword(null,"defaultFilterMethod","defaultFilterMethod",-641971243),new cljs.core.Keyword(null,"defaultFiltered","defaultFiltered",-1057218537),new cljs.core.Keyword(null,"pivotBy","pivotBy",782354495),new cljs.core.Keyword(null,"data","data",-232669377)],[(function (p1__56094_SHARP_){
var G__56209 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table-filter","multiple-portfolio-attribution/table-filter",-9483585),p1__56094_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56209) : re_frame.core.dispatch.call(null,G__56209));
}),(!(is_tree)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Groups",new cljs.core.Keyword(null,"columns","columns",1998437288),grouping_columns], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),["Portfolio ",cljs.core.name(display_key_one)].join(''),new cljs.core.Keyword(null,"columns","columns",1998437288),cols], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Description",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"rating","rating",144173662)], null))], null)], null),(!(is_tree)),"-striped -highlight",((is_tree)?(cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(accessors)),display_one))) + (1)):(25)),(!(is_tree)),jasminegui.tables.case_insensitive_filter,((is_tree)?cljs.core.PersistentVector.EMPTY:cljs.core.deref((function (){var G__56241 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table-filter","multiple-portfolio-attribution/table-filter",-9483585)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56241) : re_frame.core.subscribe.call(null,G__56241));
})())),((is_tree)?accessors:cljs.core.PersistentVector.EMPTY),display_one])], null);
});
jasminegui.attribution.shortcut_row = (function jasminegui$attribution$shortcut_row(key){
var shortcut = (function (){var G__56244 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56244) : re_frame.core.subscribe.call(null,G__56244));
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Shortcuts:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$attribution$shortcut_row_$_iter__56245(s__56246){
return (new cljs.core.LazySeq(null,(function (){
var s__56246__$1 = s__56246;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56246__$1);
if(temp__5735__auto__){
var s__56246__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56246__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__56246__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__56248 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__56247 = (0);
while(true){
if((i__56247 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__56247);
cljs.core.chunk_append(b__56248,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),["zmdi-collection-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shortcut),i))?"active":"default"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__56247,i,c__4527__auto__,size__4528__auto__,b__56248,s__56246__$2,temp__5735__auto__,shortcut){
return (function (){
var G__56250 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,i], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56250) : re_frame.core.dispatch.call(null,G__56250));
});})(i__56247,i,c__4527__auto__,size__4528__auto__,b__56248,s__56246__$2,temp__5735__auto__,shortcut))
], null));

var G__56655 = (i__56247 + (1));
i__56247 = G__56655;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56248),jasminegui$attribution$shortcut_row_$_iter__56245(cljs.core.chunk_rest(s__56246__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56248),null);
}
} else {
var i = cljs.core.first(s__56246__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),["zmdi-collection-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shortcut),i))?"active":"default"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i,s__56246__$2,temp__5735__auto__,shortcut){
return (function (){
var G__56254 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,i], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56254) : re_frame.core.dispatch.call(null,G__56254));
});})(i,s__56246__$2,temp__5735__auto__,shortcut))
], null),jasminegui$attribution$shortcut_row_$_iter__56245(cljs.core.rest(s__56246__$2)));
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
var risk_filter = (function (){var G__56266 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56266) : re_frame.core.subscribe.call(null,G__56266));
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$attribution$filtering_row_$_iter__56268(s__56269){
return (new cljs.core.LazySeq(null,(function (){
var s__56269__$1 = s__56269;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56269__$1);
if(temp__5735__auto__){
var s__56269__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56269__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__56269__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__56271 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__56270 = (0);
while(true){
if((i__56270 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__56270);
cljs.core.chunk_append(b__56271,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.attribution.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),reagent.core.cursor(risk_filter,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null)),new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.attribution_choice_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__56270,i,c__4527__auto__,size__4528__auto__,b__56271,s__56269__$2,temp__5735__auto__,risk_filter){
return (function (p1__56259_SHARP_){
var G__56273 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,i,p1__56259_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56273) : re_frame.core.dispatch.call(null,G__56273));
});})(i__56270,i,c__4527__auto__,size__4528__auto__,b__56271,s__56269__$2,temp__5735__auto__,risk_filter))
], null));

var G__56706 = (i__56270 + (1));
i__56270 = G__56706;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56271),jasminegui$attribution$filtering_row_$_iter__56268(cljs.core.chunk_rest(s__56269__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56271),null);
}
} else {
var i = cljs.core.first(s__56269__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.attribution.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),reagent.core.cursor(risk_filter,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null)),new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.attribution_choice_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i,s__56269__$2,temp__5735__auto__,risk_filter){
return (function (p1__56259_SHARP_){
var G__56274 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,i,p1__56259_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56274) : re_frame.core.dispatch.call(null,G__56274));
});})(i,s__56269__$2,temp__5735__auto__,risk_filter))
], null),jasminegui$attribution$filtering_row_$_iter__56268(cljs.core.rest(s__56269__$2)));
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
var portfolio_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$attribution$single_portfolio_attribution_controller_$_iter__56294(s__56295){
return (new cljs.core.LazySeq(null,(function (){
var s__56295__$1 = s__56295;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56295__$1);
if(temp__5735__auto__){
var s__56295__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56295__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__56295__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__56297 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__56296 = (0);
while(true){
if((i__56296 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__56296);
cljs.core.chunk_append(b__56297,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null));

var G__56724 = (i__56296 + (1));
i__56296 = G__56724;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56297),jasminegui$attribution$single_portfolio_attribution_controller_$_iter__56294(cljs.core.chunk_rest(s__56295__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56297),null);
}
} else {
var p = cljs.core.first(s__56295__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null),jasminegui$attribution$single_portfolio_attribution_controller_$_iter__56294(cljs.core.rest(s__56295__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref((function (){var G__56302 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56302) : re_frame.core.subscribe.call(null,G__56302));
})()));
})());
var display_style = (function (){var G__56303 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56303) : re_frame.core.subscribe.call(null,G__56303));
})();
var portfolio = (function (){var G__56304 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56304) : re_frame.core.subscribe.call(null,G__56304));
})();
var period = (function (){var G__56305 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56305) : re_frame.core.subscribe.call(null,G__56305));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),["Attribution drill-down ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__56307 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56307) : re_frame.core.subscribe.call(null,G__56307));
})()))].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"50px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"15px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Display type:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.attribution.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),display_style,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.tree_table_choices,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56289_SHARP_){
var G__56310 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679),p1__56289_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56310) : re_frame.core.dispatch.call(null,G__56310));
})], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Period:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.attribution.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),period,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.attribution_period_choices,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56291_SHARP_){
var G__56311 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-single-attribution-period","change-single-attribution-period",860703642),p1__56291_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56311) : re_frame.core.dispatch.call(null,G__56311));
})], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Filtering:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.attribution.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),portfolio,new cljs.core.Keyword(null,"choices","choices",1385611597),portfolio_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56292_SHARP_){
var G__56323 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-single-attribution-portfolio","change-single-attribution-portfolio",1766745939),p1__56292_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56323) : re_frame.core.dispatch.call(null,G__56323));
})], null)], null),jasminegui.attribution.filtering_row(new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267))))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(jasminegui.attribution.shortcut_row(new cljs.core.Keyword("single-portfolio-attribution","shortcut","single-portfolio-attribution/shortcut",-1711481988)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"50px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Download:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-download",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return jasminegui.attribution.csv_link(cljs.core.deref((function (){var G__56333 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56333) : re_frame.core.subscribe.call(null,G__56333));
})()),cljs.core.deref(portfolio));
})], null)], null)))], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.attribution.single_portfolio_attribution_display], null)], null)], null)], null);
});
jasminegui.attribution.multiple_portfolio_attribution_controller = (function jasminegui$attribution$multiple_portfolio_attribution_controller(){
var portfolio_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$attribution$multiple_portfolio_attribution_controller_$_iter__56349(s__56350){
return (new cljs.core.LazySeq(null,(function (){
var s__56350__$1 = s__56350;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56350__$1);
if(temp__5735__auto__){
var s__56350__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56350__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__56350__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__56352 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__56351 = (0);
while(true){
if((i__56351 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__56351);
cljs.core.chunk_append(b__56352,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null));

var G__56791 = (i__56351 + (1));
i__56351 = G__56791;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56352),jasminegui$attribution$multiple_portfolio_attribution_controller_$_iter__56349(cljs.core.chunk_rest(s__56350__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56352),null);
}
} else {
var p = cljs.core.first(s__56350__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null),jasminegui$attribution$multiple_portfolio_attribution_controller_$_iter__56349(cljs.core.rest(s__56350__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref((function (){var G__56368 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56368) : re_frame.core.subscribe.call(null,G__56368));
})()));
})());
var display_style = (function (){var G__56369 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","display-style","multiple-portfolio-attribution/display-style",-767260119)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56369) : re_frame.core.subscribe.call(null,G__56369));
})();
var portfolios = cljs.core.deref((function (){var G__56371 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56371) : re_frame.core.subscribe.call(null,G__56371));
})());
var selected_portfolios = (function (){var G__56375 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56375) : re_frame.core.subscribe.call(null,G__56375));
})();
var field_one = (function (){var G__56376 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56376) : re_frame.core.subscribe.call(null,G__56376));
})();
var period = (function (){var G__56377 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56377) : re_frame.core.subscribe.call(null,G__56377));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),["Attribution drill-down ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__56380 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56380) : re_frame.core.subscribe.call(null,G__56380));
})()))].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"50px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Display type:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.attribution.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),display_style,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.tree_table_choices,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56334_SHARP_){
var G__56382 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","display-style","multiple-portfolio-attribution/display-style",-767260119),p1__56334_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56382) : re_frame.core.dispatch.call(null,G__56382));
})], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Period:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.attribution.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),period,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.attribution_period_choices,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56345_SHARP_){
var G__56429 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-multiple-attribution-period","change-multiple-attribution-period",590435537),p1__56345_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56429) : re_frame.core.dispatch.call(null,G__56429));
})], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Field:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.attribution.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),field_one,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.attribution_field_choices,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56346_SHARP_){
var G__56433 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-multiple-attribution-target","change-multiple-attribution-target",777460289),p1__56346_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56433) : re_frame.core.dispatch.call(null,G__56433));
})], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Portfolios:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"label","label",1718410804),"All",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__56437 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),cljs.core.set(portfolios)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56437) : re_frame.core.dispatch.call(null,G__56437));
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"label","label",1718410804),"None",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__56440 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),cljs.core.PersistentHashSet.EMPTY], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56440) : re_frame.core.dispatch.call(null,G__56440));
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"label","label",1718410804),"CEMBI",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__56445 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),cljs.core.set(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"cembi","cembi",1924920241));
}),jasminegui.static$.portfolio_alignment_groups))))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56445) : re_frame.core.dispatch.call(null,G__56445));
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"label","label",1718410804),"Allianz",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__56453 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),cljs.core.set(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"allianz","allianz",-819219390));
}),jasminegui.static$.portfolio_alignment_groups))))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56453) : re_frame.core.dispatch.call(null,G__56453));
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"label","label",1718410804),"IG",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__56460 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),cljs.core.set(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"ig","ig",-1295804776));
}),jasminegui.static$.portfolio_alignment_groups))))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56460) : re_frame.core.dispatch.call(null,G__56460));
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"label","label",1718410804),"Talanx",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__56462 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),cljs.core.set(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"talanx","talanx",-128127782));
}),jasminegui.static$.portfolio_alignment_groups))))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56462) : re_frame.core.dispatch.call(null,G__56462));
})], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.selection_list,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.attribution.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),selected_portfolios,new cljs.core.Keyword(null,"choices","choices",1385611597),portfolio_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56347_SHARP_){
var G__56467 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),p1__56347_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56467) : re_frame.core.dispatch.call(null,G__56467));
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Filtering:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null)], null),jasminegui.attribution.filtering_row(new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219))))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),jasminegui.attribution.shortcut_row(new cljs.core.Keyword("multiple-portfolio-attribution","shortcut","multiple-portfolio-attribution/shortcut",809107380))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Download:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-download",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return jasminegui.attribution.csv_link(cljs.core.deref((function (){var G__56468 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56468) : re_frame.core.subscribe.call(null,G__56468));
})()),"pivot");
})], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.attribution.multiple_portfolio_attribution_display], null)], null)], null)], null);
});
jasminegui.attribution.go_to_attribution_risk = (function jasminegui$attribution$go_to_attribution_risk(state,rowInfo,instance){
return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__56470_56866 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","active-attribution","navigation/active-attribution",600082450),new cljs.core.Keyword(null,"single-portfolio","single-portfolio",-1254194917)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__56470_56866) : re_frame.core.dispatch_sync.call(null,G__56470_56866));

var G__56472 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-single-attribution-portfolio","change-single-attribution-portfolio",1766745939),(rowInfo["row"]["portfolio"])], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56472) : re_frame.core.dispatch.call(null,G__56472));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null));
});
jasminegui.attribution.summary_display = (function jasminegui$attribution$summary_display(){
var fmt = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(90),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round2colpct], null);
var timeframes = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Year to date","ytd"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Month to date","mtd"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Week to date","wtd"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Daily","day"], null)], null);
var targets = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Fund","-Fund-Contribution"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Benchmark","-Index-Contribution"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Relative","-Total-Effect"], null)], null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),["Summary ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__56478 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56478) : re_frame.core.subscribe.call(null,G__56478));
})()))].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.deref((function (){var G__56483 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("attribution","summary","attribution/summary",687462095)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56483) : re_frame.core.subscribe.call(null,G__56483));
})()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Portfolio",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"portfolio",new cljs.core.Keyword(null,"width","width",-384071477),(120)], null)], null),(function (){var iter__4529__auto__ = (function jasminegui$attribution$summary_display_$_iter__56484(s__56485){
return (new cljs.core.LazySeq(null,(function (){
var s__56485__$1 = s__56485;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56485__$1);
if(temp__5735__auto__){
var s__56485__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56485__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__56485__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__56487 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__56486 = (0);
while(true){
if((i__56486 < size__4528__auto__)){
var vec__56488 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__56486);
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56488,(0),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56488,(1),null);
cljs.core.chunk_append(b__56487,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),k1,new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = ((function (i__56486,vec__56488,k1,v1,c__4527__auto__,size__4528__auto__,b__56487,s__56485__$2,temp__5735__auto__,fmt,timeframes,targets){
return (function jasminegui$attribution$summary_display_$_iter__56484_$_iter__56491(s__56492){
return (new cljs.core.LazySeq(null,((function (i__56486,vec__56488,k1,v1,c__4527__auto__,size__4528__auto__,b__56487,s__56485__$2,temp__5735__auto__,fmt,timeframes,targets){
return (function (){
var s__56492__$1 = s__56492;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__56492__$1);
if(temp__5735__auto____$1){
var s__56492__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56492__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__56492__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__56494 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__56493 = (0);
while(true){
if((i__56493 < size__4528__auto____$1)){
var vec__56524 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto____$1,i__56493);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56524,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56524,(1),null);
cljs.core.chunk_append(b__56494,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),k2,new cljs.core.Keyword(null,"accessor","accessor",-25476721),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v2)].join('')], null),fmt], 0)));

var G__56869 = (i__56493 + (1));
i__56493 = G__56869;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56494),jasminegui$attribution$summary_display_$_iter__56484_$_iter__56491(cljs.core.chunk_rest(s__56492__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56494),null);
}
} else {
var vec__56527 = cljs.core.first(s__56492__$2);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56527,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56527,(1),null);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),k2,new cljs.core.Keyword(null,"accessor","accessor",-25476721),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v2)].join('')], null),fmt], 0)),jasminegui$attribution$summary_display_$_iter__56484_$_iter__56491(cljs.core.rest(s__56492__$2)));
}
} else {
return null;
}
break;
}
});})(i__56486,vec__56488,k1,v1,c__4527__auto__,size__4528__auto__,b__56487,s__56485__$2,temp__5735__auto__,fmt,timeframes,targets))
,null,null));
});})(i__56486,vec__56488,k1,v1,c__4527__auto__,size__4528__auto__,b__56487,s__56485__$2,temp__5735__auto__,fmt,timeframes,targets))
;
return iter__4529__auto__(targets);
})())], null));

var G__56873 = (i__56486 + (1));
i__56486 = G__56873;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56487),jasminegui$attribution$summary_display_$_iter__56484(cljs.core.chunk_rest(s__56485__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56487),null);
}
} else {
var vec__56533 = cljs.core.first(s__56485__$2);
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56533,(0),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56533,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),k1,new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = ((function (vec__56533,k1,v1,s__56485__$2,temp__5735__auto__,fmt,timeframes,targets){
return (function jasminegui$attribution$summary_display_$_iter__56484_$_iter__56541(s__56542){
return (new cljs.core.LazySeq(null,(function (){
var s__56542__$1 = s__56542;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__56542__$1);
if(temp__5735__auto____$1){
var s__56542__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56542__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__56542__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__56544 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__56543 = (0);
while(true){
if((i__56543 < size__4528__auto__)){
var vec__56545 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__56543);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56545,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56545,(1),null);
cljs.core.chunk_append(b__56544,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),k2,new cljs.core.Keyword(null,"accessor","accessor",-25476721),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v2)].join('')], null),fmt], 0)));

var G__56880 = (i__56543 + (1));
i__56543 = G__56880;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56544),jasminegui$attribution$summary_display_$_iter__56484_$_iter__56541(cljs.core.chunk_rest(s__56542__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56544),null);
}
} else {
var vec__56550 = cljs.core.first(s__56542__$2);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56550,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56550,(1),null);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),k2,new cljs.core.Keyword(null,"accessor","accessor",-25476721),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v2)].join('')], null),fmt], 0)),jasminegui$attribution$summary_display_$_iter__56484_$_iter__56541(cljs.core.rest(s__56542__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__56533,k1,v1,s__56485__$2,temp__5735__auto__,fmt,timeframes,targets))
;
return iter__4529__auto__(targets);
})())], null),jasminegui$attribution$summary_display_$_iter__56484(cljs.core.rest(s__56485__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(timeframes);
})()),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),false,new cljs.core.Keyword(null,"pageSize","pageSize",732080883),cljs.core.count(cljs.core.deref((function (){var G__56555 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("attribution","summary","attribution/summary",687462095)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56555) : re_frame.core.subscribe.call(null,G__56555));
})())),new cljs.core.Keyword(null,"getTrProps","getTrProps",-2009881560),jasminegui.attribution.go_to_attribution_risk,new cljs.core.Keyword(null,"className","className",-1983287057),"-striped -highlight"], null)], null)], null)], null)], null);
});
jasminegui.attribution.nav_attribution_bar = (function jasminegui$attribution$nav_attribution_bar(){
var active_home = cljs.core.deref((function (){var G__56556 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","active-attribution","navigation/active-attribution",600082450)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56556) : re_frame.core.subscribe.call(null,G__56556));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"class","class",-2030961996),"leftnavbar",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$attribution$nav_attribution_bar_$_iter__56558(s__56559){
return (new cljs.core.LazySeq(null,(function (){
var s__56559__$1 = s__56559;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56559__$1);
if(temp__5735__auto__){
var s__56559__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56559__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__56559__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__56561 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__56560 = (0);
while(true){
if((i__56560 < size__4528__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__56560);
cljs.core.chunk_append(b__56561,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-primary btn-block",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_home,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?" active":null)].join(''),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__56560,item,c__4527__auto__,size__4528__auto__,b__56561,s__56559__$2,temp__5735__auto__,active_home){
return (function (){
var G__56563 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","active-attribution","navigation/active-attribution",600082450),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56563) : re_frame.core.dispatch.call(null,G__56563));
});})(i__56560,item,c__4527__auto__,size__4528__auto__,b__56561,s__56559__$2,temp__5735__auto__,active_home))
], null));

var G__56896 = (i__56560 + (1));
i__56560 = G__56896;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56561),jasminegui$attribution$nav_attribution_bar_$_iter__56558(cljs.core.chunk_rest(s__56559__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56561),null);
}
} else {
var item = cljs.core.first(s__56559__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-primary btn-block",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_home,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?" active":null)].join(''),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__56559__$2,temp__5735__auto__,active_home){
return (function (){
var G__56564 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","active-attribution","navigation/active-attribution",600082450),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56564) : re_frame.core.dispatch.call(null,G__56564));
});})(item,s__56559__$2,temp__5735__auto__,active_home))
], null),jasminegui$attribution$nav_attribution_bar_$_iter__56558(cljs.core.rest(s__56559__$2)));
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

var G__56568 = cljs.core.deref((function (){var G__56569 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","active-attribution","navigation/active-attribution",600082450)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56569) : re_frame.core.subscribe.call(null,G__56569));
})());
var G__56568__$1 = (((G__56568 instanceof cljs.core.Keyword))?G__56568.fqn:null);
switch (G__56568__$1) {
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
