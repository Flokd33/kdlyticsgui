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
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__51051 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51051) : re_frame.core.subscribe.call(null,G__51051));
})()),"Tree");
var risk_choices = (function (){var rfil = cljs.core.deref((function (){var G__51053 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51053) : re_frame.core.subscribe.call(null,G__51053));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__51040_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__51040_SHARP_) : rfil.call(null,p1__51040_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__51040_SHARP_) : rfil.call(null,p1__51040_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$attribution$single_portfolio_attribution_display_$_iter__51059(s__51060){
return (new cljs.core.LazySeq(null,(function (){
var s__51060__$1 = s__51060;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51060__$1);
if(temp__5735__auto__){
var s__51060__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51060__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51060__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51062 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51061 = (0);
while(true){
if((i__51061 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__51061);
cljs.core.chunk_append(b__51062,(jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.attribution_table_columns.call(null,r)));

var G__51631 = (i__51061 + (1));
i__51061 = G__51631;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51062),jasminegui$attribution$single_portfolio_attribution_display_$_iter__51059(cljs.core.chunk_rest(s__51060__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51062),null);
}
} else {
var r = cljs.core.first(s__51060__$2);
return cljs.core.cons((jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.attribution_table_columns.call(null,r)),jasminegui$attribution$single_portfolio_attribution_display_$_iter__51059(cljs.core.rest(s__51060__$2)));
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
var display = cljs.core.deref((function (){var G__51092 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","clean-table","single-portfolio-attribution/clean-table",-391468387)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51092) : re_frame.core.subscribe.call(null,G__51092));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"onFilteredChange","onFilteredChange",-69731355),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"filterable","filterable",-1588312341),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"pageSize","pageSize",732080883),new cljs.core.Keyword(null,"sortable","sortable",2109633621),new cljs.core.Keyword(null,"defaultFilterMethod","defaultFilterMethod",-641971243),new cljs.core.Keyword(null,"defaultFiltered","defaultFiltered",-1057218537),new cljs.core.Keyword(null,"pivotBy","pivotBy",782354495),new cljs.core.Keyword(null,"data","data",-232669377)],[(function (p1__51041_SHARP_){
var G__51096 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table-filter","single-portfolio-attribution/table-filter",1757441687),p1__51041_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51096) : re_frame.core.dispatch.call(null,G__51096));
}),(!(is_tree)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Groups",new cljs.core.Keyword(null,"columns","columns",1998437288),grouping_columns], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Effect",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-effect","total-effect",-967715775)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Contribution",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contribution","contribution",-1962459669),new cljs.core.Keyword(null,"bm-contribution","bm-contribution",961434966)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Weight",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xs-weight","xs-weight",2029728902),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"bm-weight","bm-weight",217267431)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Additional information",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(additional_des_cols,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"rating","rating",144173662)], null)))], null)], null),(!(is_tree)),"-striped -highlight",((is_tree)?(cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(accessors)),display))) + (1)):(25)),(!(is_tree)),jasminegui.tables.case_insensitive_filter,((is_tree)?cljs.core.PersistentVector.EMPTY:cljs.core.deref((function (){var G__51099 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table-filter","single-portfolio-attribution/table-filter",1757441687)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51099) : re_frame.core.subscribe.call(null,G__51099));
})())),((is_tree)?accessors:cljs.core.PersistentVector.EMPTY),display])], null);
});
jasminegui.attribution.multiple_portfolio_attribution_display = (function jasminegui$attribution$multiple_portfolio_attribution_display(){
var display_key_one = cljs.core.deref((function (){var G__51199 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51199) : re_frame.core.subscribe.call(null,G__51199));
})());
var width_one = (100);
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__51200 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","display-style","multiple-portfolio-attribution/display-style",-767260119)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51200) : re_frame.core.subscribe.call(null,G__51200));
})()),"Tree");
var attribution_choices = (function (){var rfil = cljs.core.deref((function (){var G__51201 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51201) : re_frame.core.subscribe.call(null,G__51201));
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__51101_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__51101_SHARP_) : rfil.call(null,p1__51101_SHARP_)))){
return (rfil.cljs$core$IFn$_invoke$arity$1 ? rfil.cljs$core$IFn$_invoke$arity$1(p1__51101_SHARP_) : rfil.call(null,p1__51101_SHARP_));
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})();
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$attribution$multiple_portfolio_attribution_display_$_iter__51202(s__51203){
return (new cljs.core.LazySeq(null,(function (){
var s__51203__$1 = s__51203;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51203__$1);
if(temp__5735__auto__){
var s__51203__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51203__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51203__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51205 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51204 = (0);
while(true){
if((i__51204 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__51204);
cljs.core.chunk_append(b__51205,(jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.attribution_table_columns.call(null,r)));

var G__51646 = (i__51204 + (1));
i__51204 = G__51646;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51205),jasminegui$attribution$multiple_portfolio_attribution_display_$_iter__51202(cljs.core.chunk_rest(s__51203__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51205),null);
}
} else {
var r = cljs.core.first(s__51203__$2);
return cljs.core.cons((jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.attribution_table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.attribution_table_columns.call(null,r)),jasminegui$attribution$multiple_portfolio_attribution_display_$_iter__51202(cljs.core.rest(s__51203__$2)));
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
var display_one = cljs.core.deref((function (){var G__51212 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","clean-table","multiple-portfolio-attribution/clean-table",-1066824107)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51212) : re_frame.core.subscribe.call(null,G__51212));
})());
var cols = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$attribution$multiple_portfolio_attribution_display_$_iter__51215(s__51216){
return (new cljs.core.LazySeq(null,(function (){
var s__51216__$1 = s__51216;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51216__$1);
if(temp__5735__auto__){
var s__51216__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51216__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51216__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51218 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51217 = (0);
while(true){
if((i__51217 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__51217);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([p]),cljs.core.deref((function (){var G__51225 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51225) : re_frame.core.subscribe.call(null,G__51225));
})())))){
cljs.core.chunk_append(b__51218,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),p,new cljs.core.Keyword(null,"accessor","accessor",-25476721),p,new cljs.core.Keyword(null,"width","width",-384071477),width_one,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.tables.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_one,new cljs.core.Keyword(null,"Cell","Cell",53644787)], null)),new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null));

var G__51668 = (i__51217 + (1));
i__51217 = G__51668;
continue;
} else {
var G__51669 = (i__51217 + (1));
i__51217 = G__51669;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51218),jasminegui$attribution$multiple_portfolio_attribution_display_$_iter__51215(cljs.core.chunk_rest(s__51216__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51218),null);
}
} else {
var p = cljs.core.first(s__51216__$2);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([p]),cljs.core.deref((function (){var G__51229 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51229) : re_frame.core.subscribe.call(null,G__51229));
})())))){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Header","Header",1255420133),p,new cljs.core.Keyword(null,"accessor","accessor",-25476721),p,new cljs.core.Keyword(null,"width","width",-384071477),width_one,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),jasminegui.tables.sum_rows,new cljs.core.Keyword(null,"Cell","Cell",53644787),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_one,new cljs.core.Keyword(null,"Cell","Cell",53644787)], null)),new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false], null),jasminegui$attribution$multiple_portfolio_attribution_display_$_iter__51215(cljs.core.rest(s__51216__$2)));
} else {
var G__51672 = cljs.core.rest(s__51216__$2);
s__51216__$1 = G__51672;
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
return iter__4529__auto__(cljs.core.deref((function (){var G__51234 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51234) : re_frame.core.subscribe.call(null,G__51234));
})()));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"onFilteredChange","onFilteredChange",-69731355),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"filterable","filterable",-1588312341),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"pageSize","pageSize",732080883),new cljs.core.Keyword(null,"sortable","sortable",2109633621),new cljs.core.Keyword(null,"defaultFilterMethod","defaultFilterMethod",-641971243),new cljs.core.Keyword(null,"defaultFiltered","defaultFiltered",-1057218537),new cljs.core.Keyword(null,"pivotBy","pivotBy",782354495),new cljs.core.Keyword(null,"data","data",-232669377)],[(function (p1__51102_SHARP_){
var G__51235 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table-filter","multiple-portfolio-attribution/table-filter",-9483585),p1__51102_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51235) : re_frame.core.dispatch.call(null,G__51235));
}),(!(is_tree)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Groups",new cljs.core.Keyword(null,"columns","columns",1998437288),grouping_columns], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),["Portfolio ",cljs.core.name(display_key_one)].join(''),new cljs.core.Keyword(null,"columns","columns",1998437288),cols], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Description",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"rating","rating",144173662)], null))], null)], null),(!(is_tree)),"-striped -highlight",((is_tree)?(cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(accessors)),display_one))) + (1)):(25)),(!(is_tree)),jasminegui.tables.case_insensitive_filter,((is_tree)?cljs.core.PersistentVector.EMPTY:cljs.core.deref((function (){var G__51237 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table-filter","multiple-portfolio-attribution/table-filter",-9483585)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51237) : re_frame.core.subscribe.call(null,G__51237));
})())),((is_tree)?accessors:cljs.core.PersistentVector.EMPTY),display_one])], null);
});
jasminegui.attribution.shortcut_row = (function jasminegui$attribution$shortcut_row(key){
var shortcut = (function (){var G__51241 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51241) : re_frame.core.subscribe.call(null,G__51241));
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Shortcuts:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$attribution$shortcut_row_$_iter__51244(s__51245){
return (new cljs.core.LazySeq(null,(function (){
var s__51245__$1 = s__51245;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51245__$1);
if(temp__5735__auto__){
var s__51245__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51245__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51245__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51247 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51246 = (0);
while(true){
if((i__51246 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__51246);
cljs.core.chunk_append(b__51247,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),["zmdi-collection-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shortcut),i))?"active":"default"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__51246,i,c__4527__auto__,size__4528__auto__,b__51247,s__51245__$2,temp__5735__auto__,shortcut){
return (function (){
var G__51255 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,i], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51255) : re_frame.core.dispatch.call(null,G__51255));
});})(i__51246,i,c__4527__auto__,size__4528__auto__,b__51247,s__51245__$2,temp__5735__auto__,shortcut))
], null));

var G__51693 = (i__51246 + (1));
i__51246 = G__51693;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51247),jasminegui$attribution$shortcut_row_$_iter__51244(cljs.core.chunk_rest(s__51245__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51247),null);
}
} else {
var i = cljs.core.first(s__51245__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),["zmdi-collection-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shortcut),i))?"active":"default"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i,s__51245__$2,temp__5735__auto__,shortcut){
return (function (){
var G__51260 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,i], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51260) : re_frame.core.dispatch.call(null,G__51260));
});})(i,s__51245__$2,temp__5735__auto__,shortcut))
], null),jasminegui$attribution$shortcut_row_$_iter__51244(cljs.core.rest(s__51245__$2)));
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
var risk_filter = (function (){var G__51379 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51379) : re_frame.core.subscribe.call(null,G__51379));
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$attribution$filtering_row_$_iter__51380(s__51381){
return (new cljs.core.LazySeq(null,(function (){
var s__51381__$1 = s__51381;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51381__$1);
if(temp__5735__auto__){
var s__51381__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51381__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51381__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51383 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51382 = (0);
while(true){
if((i__51382 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__51382);
cljs.core.chunk_append(b__51383,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.attribution.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),reagent.core.cursor(risk_filter,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null)),new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.attribution_choice_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__51382,i,c__4527__auto__,size__4528__auto__,b__51383,s__51381__$2,temp__5735__auto__,risk_filter){
return (function (p1__51378_SHARP_){
var G__51386 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,i,p1__51378_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51386) : re_frame.core.dispatch.call(null,G__51386));
});})(i__51382,i,c__4527__auto__,size__4528__auto__,b__51383,s__51381__$2,temp__5735__auto__,risk_filter))
], null));

var G__51711 = (i__51382 + (1));
i__51382 = G__51711;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51383),jasminegui$attribution$filtering_row_$_iter__51380(cljs.core.chunk_rest(s__51381__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51383),null);
}
} else {
var i = cljs.core.first(s__51381__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.attribution.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),reagent.core.cursor(risk_filter,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null)),new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.attribution_choice_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i,s__51381__$2,temp__5735__auto__,risk_filter){
return (function (p1__51378_SHARP_){
var G__51387 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,i,p1__51378_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51387) : re_frame.core.dispatch.call(null,G__51387));
});})(i,s__51381__$2,temp__5735__auto__,risk_filter))
], null),jasminegui$attribution$filtering_row_$_iter__51380(cljs.core.rest(s__51381__$2)));
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
var portfolio_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$attribution$single_portfolio_attribution_controller_$_iter__51411(s__51412){
return (new cljs.core.LazySeq(null,(function (){
var s__51412__$1 = s__51412;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51412__$1);
if(temp__5735__auto__){
var s__51412__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51412__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51412__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51414 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51413 = (0);
while(true){
if((i__51413 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__51413);
cljs.core.chunk_append(b__51414,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null));

var G__51724 = (i__51413 + (1));
i__51413 = G__51724;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51414),jasminegui$attribution$single_portfolio_attribution_controller_$_iter__51411(cljs.core.chunk_rest(s__51412__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51414),null);
}
} else {
var p = cljs.core.first(s__51412__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null),jasminegui$attribution$single_portfolio_attribution_controller_$_iter__51411(cljs.core.rest(s__51412__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref((function (){var G__51418 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51418) : re_frame.core.subscribe.call(null,G__51418));
})()));
})());
var display_style = (function (){var G__51419 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51419) : re_frame.core.subscribe.call(null,G__51419));
})();
var portfolio = (function (){var G__51426 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","portfolio","single-portfolio-attribution/portfolio",1724759521)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51426) : re_frame.core.subscribe.call(null,G__51426));
})();
var period = (function (){var G__51441 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","period","single-portfolio-attribution/period",-1722853450)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51441) : re_frame.core.subscribe.call(null,G__51441));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),["Attribution drill-down ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__51449 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51449) : re_frame.core.subscribe.call(null,G__51449));
})()))].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"50px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"15px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Display type:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.attribution.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),display_style,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.tree_table_choices,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__51396_SHARP_){
var G__51451 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679),p1__51396_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51451) : re_frame.core.dispatch.call(null,G__51451));
})], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Period:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.attribution.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),period,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.attribution_period_choices,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__51397_SHARP_){
var G__51454 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-single-attribution-period","change-single-attribution-period",860703642),p1__51397_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51454) : re_frame.core.dispatch.call(null,G__51454));
})], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Filtering:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.attribution.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),portfolio,new cljs.core.Keyword(null,"choices","choices",1385611597),portfolio_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__51398_SHARP_){
var G__51456 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-single-attribution-portfolio","change-single-attribution-portfolio",1766745939),p1__51398_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51456) : re_frame.core.dispatch.call(null,G__51456));
})], null)], null),jasminegui.attribution.filtering_row(new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267))))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(jasminegui.attribution.shortcut_row(new cljs.core.Keyword("single-portfolio-attribution","shortcut","single-portfolio-attribution/shortcut",-1711481988)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"50px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Download:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-download",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return jasminegui.attribution.csv_link(cljs.core.deref((function (){var G__51461 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","table","single-portfolio-attribution/table",-1660761047)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51461) : re_frame.core.subscribe.call(null,G__51461));
})()),cljs.core.deref(portfolio));
})], null)], null)))], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.attribution.single_portfolio_attribution_display], null)], null)], null)], null);
});
jasminegui.attribution.multiple_portfolio_attribution_controller = (function jasminegui$attribution$multiple_portfolio_attribution_controller(){
var portfolio_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$attribution$multiple_portfolio_attribution_controller_$_iter__51470(s__51471){
return (new cljs.core.LazySeq(null,(function (){
var s__51471__$1 = s__51471;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51471__$1);
if(temp__5735__auto__){
var s__51471__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51471__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51471__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51473 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51472 = (0);
while(true){
if((i__51472 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__51472);
cljs.core.chunk_append(b__51473,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null));

var G__51781 = (i__51472 + (1));
i__51472 = G__51781;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51473),jasminegui$attribution$multiple_portfolio_attribution_controller_$_iter__51470(cljs.core.chunk_rest(s__51471__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51473),null);
}
} else {
var p = cljs.core.first(s__51471__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null),jasminegui$attribution$multiple_portfolio_attribution_controller_$_iter__51470(cljs.core.rest(s__51471__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref((function (){var G__51481 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51481) : re_frame.core.subscribe.call(null,G__51481));
})()));
})());
var display_style = (function (){var G__51482 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","display-style","multiple-portfolio-attribution/display-style",-767260119)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51482) : re_frame.core.subscribe.call(null,G__51482));
})();
var portfolios = cljs.core.deref((function (){var G__51483 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51483) : re_frame.core.subscribe.call(null,G__51483));
})());
var selected_portfolios = (function (){var G__51484 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51484) : re_frame.core.subscribe.call(null,G__51484));
})();
var field_one = (function (){var G__51485 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","field-one","multiple-portfolio-attribution/field-one",871483707)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51485) : re_frame.core.subscribe.call(null,G__51485));
})();
var period = (function (){var G__51486 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","period","multiple-portfolio-attribution/period",-1324453154)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51486) : re_frame.core.subscribe.call(null,G__51486));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),["Attribution drill-down ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__51491 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51491) : re_frame.core.subscribe.call(null,G__51491));
})()))].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"50px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Display type:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.attribution.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),display_style,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.tree_table_choices,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__51466_SHARP_){
var G__51494 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","display-style","multiple-portfolio-attribution/display-style",-767260119),p1__51466_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51494) : re_frame.core.dispatch.call(null,G__51494));
})], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Period:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.attribution.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),period,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.attribution_period_choices,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__51467_SHARP_){
var G__51496 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-multiple-attribution-period","change-multiple-attribution-period",590435537),p1__51467_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51496) : re_frame.core.dispatch.call(null,G__51496));
})], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Field:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.attribution.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),field_one,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.attribution_field_choices,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__51468_SHARP_){
var G__51498 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-multiple-attribution-target","change-multiple-attribution-target",777460289),p1__51468_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51498) : re_frame.core.dispatch.call(null,G__51498));
})], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Portfolios:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"label","label",1718410804),"All",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__51503 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),cljs.core.set(portfolios)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51503) : re_frame.core.dispatch.call(null,G__51503));
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"label","label",1718410804),"None",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__51504 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),cljs.core.PersistentHashSet.EMPTY], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51504) : re_frame.core.dispatch.call(null,G__51504));
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"label","label",1718410804),"CEMBI",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__51505 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),cljs.core.set(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"cembi","cembi",1924920241));
}),jasminegui.static$.portfolio_alignment_groups))))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51505) : re_frame.core.dispatch.call(null,G__51505));
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"label","label",1718410804),"Allianz",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__51507 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),cljs.core.set(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"allianz","allianz",-819219390));
}),jasminegui.static$.portfolio_alignment_groups))))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51507) : re_frame.core.dispatch.call(null,G__51507));
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"label","label",1718410804),"IG",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__51512 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),cljs.core.set(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"ig","ig",-1295804776));
}),jasminegui.static$.portfolio_alignment_groups))))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51512) : re_frame.core.dispatch.call(null,G__51512));
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"label","label",1718410804),"Talanx",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__51513 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),cljs.core.set(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"talanx","talanx",-128127782));
}),jasminegui.static$.portfolio_alignment_groups))))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51513) : re_frame.core.dispatch.call(null,G__51513));
})], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.selection_list,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.attribution.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),selected_portfolios,new cljs.core.Keyword(null,"choices","choices",1385611597),portfolio_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__51469_SHARP_){
var G__51514 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","selected-portfolios","multiple-portfolio-attribution/selected-portfolios",-2104217959),p1__51469_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51514) : re_frame.core.dispatch.call(null,G__51514));
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Filtering:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null)], null),jasminegui.attribution.filtering_row(new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219))))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),jasminegui.attribution.shortcut_row(new cljs.core.Keyword("multiple-portfolio-attribution","shortcut","multiple-portfolio-attribution/shortcut",809107380))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Download:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-download",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return jasminegui.attribution.csv_link(cljs.core.deref((function (){var G__51515 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-attribution","table","multiple-portfolio-attribution/table",1145120705)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51515) : re_frame.core.subscribe.call(null,G__51515));
})()),"pivot");
})], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.attribution.multiple_portfolio_attribution_display], null)], null)], null)], null);
});
jasminegui.attribution.go_to_attribution_risk = (function jasminegui$attribution$go_to_attribution_risk(state,rowInfo,instance){
return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__51523_51874 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","active-attribution","navigation/active-attribution",600082450),new cljs.core.Keyword(null,"single-portfolio","single-portfolio",-1254194917)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__51523_51874) : re_frame.core.dispatch_sync.call(null,G__51523_51874));

var G__51524 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-single-attribution-portfolio","change-single-attribution-portfolio",1766745939),(rowInfo["row"]["portfolio"])], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51524) : re_frame.core.dispatch.call(null,G__51524));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null));
});
jasminegui.attribution.summary_display = (function jasminegui$attribution$summary_display(){
var fmt = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(90),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round2colpct], null);
var timeframes = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Year to date","ytd"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Month to date","mtd"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Week to date","wtd"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Daily","day"], null)], null);
var targets = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Fund","-Fund-Contribution"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Benchmark","-Index-Contribution"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Relative","-Total-Effect"], null)], null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),["Summary ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__51526 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51526) : re_frame.core.subscribe.call(null,G__51526));
})()))].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.deref((function (){var G__51545 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("attribution","summary","attribution/summary",687462095)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51545) : re_frame.core.subscribe.call(null,G__51545));
})()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Portfolio",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"portfolio",new cljs.core.Keyword(null,"width","width",-384071477),(120)], null)], null),(function (){var iter__4529__auto__ = (function jasminegui$attribution$summary_display_$_iter__51546(s__51547){
return (new cljs.core.LazySeq(null,(function (){
var s__51547__$1 = s__51547;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51547__$1);
if(temp__5735__auto__){
var s__51547__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51547__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51547__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51549 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51548 = (0);
while(true){
if((i__51548 < size__4528__auto__)){
var vec__51550 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__51548);
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51550,(0),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51550,(1),null);
cljs.core.chunk_append(b__51549,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),k1,new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = ((function (i__51548,vec__51550,k1,v1,c__4527__auto__,size__4528__auto__,b__51549,s__51547__$2,temp__5735__auto__,fmt,timeframes,targets){
return (function jasminegui$attribution$summary_display_$_iter__51546_$_iter__51554(s__51555){
return (new cljs.core.LazySeq(null,((function (i__51548,vec__51550,k1,v1,c__4527__auto__,size__4528__auto__,b__51549,s__51547__$2,temp__5735__auto__,fmt,timeframes,targets){
return (function (){
var s__51555__$1 = s__51555;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__51555__$1);
if(temp__5735__auto____$1){
var s__51555__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51555__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__51555__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__51557 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__51556 = (0);
while(true){
if((i__51556 < size__4528__auto____$1)){
var vec__51558 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto____$1,i__51556);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51558,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51558,(1),null);
cljs.core.chunk_append(b__51557,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),k2,new cljs.core.Keyword(null,"accessor","accessor",-25476721),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v2)].join('')], null),fmt], 0)));

var G__51885 = (i__51556 + (1));
i__51556 = G__51885;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51557),jasminegui$attribution$summary_display_$_iter__51546_$_iter__51554(cljs.core.chunk_rest(s__51555__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51557),null);
}
} else {
var vec__51561 = cljs.core.first(s__51555__$2);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51561,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51561,(1),null);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),k2,new cljs.core.Keyword(null,"accessor","accessor",-25476721),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v2)].join('')], null),fmt], 0)),jasminegui$attribution$summary_display_$_iter__51546_$_iter__51554(cljs.core.rest(s__51555__$2)));
}
} else {
return null;
}
break;
}
});})(i__51548,vec__51550,k1,v1,c__4527__auto__,size__4528__auto__,b__51549,s__51547__$2,temp__5735__auto__,fmt,timeframes,targets))
,null,null));
});})(i__51548,vec__51550,k1,v1,c__4527__auto__,size__4528__auto__,b__51549,s__51547__$2,temp__5735__auto__,fmt,timeframes,targets))
;
return iter__4529__auto__(targets);
})())], null));

var G__51887 = (i__51548 + (1));
i__51548 = G__51887;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51549),jasminegui$attribution$summary_display_$_iter__51546(cljs.core.chunk_rest(s__51547__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51549),null);
}
} else {
var vec__51567 = cljs.core.first(s__51547__$2);
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51567,(0),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51567,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),k1,new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = ((function (vec__51567,k1,v1,s__51547__$2,temp__5735__auto__,fmt,timeframes,targets){
return (function jasminegui$attribution$summary_display_$_iter__51546_$_iter__51570(s__51571){
return (new cljs.core.LazySeq(null,(function (){
var s__51571__$1 = s__51571;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__51571__$1);
if(temp__5735__auto____$1){
var s__51571__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51571__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51571__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51573 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51572 = (0);
while(true){
if((i__51572 < size__4528__auto__)){
var vec__51578 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__51572);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51578,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51578,(1),null);
cljs.core.chunk_append(b__51573,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),k2,new cljs.core.Keyword(null,"accessor","accessor",-25476721),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v2)].join('')], null),fmt], 0)));

var G__51904 = (i__51572 + (1));
i__51572 = G__51904;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51573),jasminegui$attribution$summary_display_$_iter__51546_$_iter__51570(cljs.core.chunk_rest(s__51571__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51573),null);
}
} else {
var vec__51585 = cljs.core.first(s__51571__$2);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51585,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51585,(1),null);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),k2,new cljs.core.Keyword(null,"accessor","accessor",-25476721),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v2)].join('')], null),fmt], 0)),jasminegui$attribution$summary_display_$_iter__51546_$_iter__51570(cljs.core.rest(s__51571__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__51567,k1,v1,s__51547__$2,temp__5735__auto__,fmt,timeframes,targets))
;
return iter__4529__auto__(targets);
})())], null),jasminegui$attribution$summary_display_$_iter__51546(cljs.core.rest(s__51547__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(timeframes);
})()),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),false,new cljs.core.Keyword(null,"pageSize","pageSize",732080883),cljs.core.count(cljs.core.deref((function (){var G__51591 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("attribution","summary","attribution/summary",687462095)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51591) : re_frame.core.subscribe.call(null,G__51591));
})())),new cljs.core.Keyword(null,"getTrProps","getTrProps",-2009881560),jasminegui.attribution.go_to_attribution_risk,new cljs.core.Keyword(null,"className","className",-1983287057),"-striped -highlight"], null)], null)], null)], null)], null);
});
jasminegui.attribution.nav_attribution_bar = (function jasminegui$attribution$nav_attribution_bar(){
var active_home = cljs.core.deref((function (){var G__51593 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","active-attribution","navigation/active-attribution",600082450)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51593) : re_frame.core.subscribe.call(null,G__51593));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"class","class",-2030961996),"leftnavbar",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$attribution$nav_attribution_bar_$_iter__51594(s__51595){
return (new cljs.core.LazySeq(null,(function (){
var s__51595__$1 = s__51595;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51595__$1);
if(temp__5735__auto__){
var s__51595__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51595__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51595__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51597 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51596 = (0);
while(true){
if((i__51596 < size__4528__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__51596);
cljs.core.chunk_append(b__51597,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-primary btn-block",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_home,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?" active":null)].join(''),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__51596,item,c__4527__auto__,size__4528__auto__,b__51597,s__51595__$2,temp__5735__auto__,active_home){
return (function (){
var G__51603 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","active-attribution","navigation/active-attribution",600082450),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51603) : re_frame.core.dispatch.call(null,G__51603));
});})(i__51596,item,c__4527__auto__,size__4528__auto__,b__51597,s__51595__$2,temp__5735__auto__,active_home))
], null));

var G__51909 = (i__51596 + (1));
i__51596 = G__51909;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51597),jasminegui$attribution$nav_attribution_bar_$_iter__51594(cljs.core.chunk_rest(s__51595__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51597),null);
}
} else {
var item = cljs.core.first(s__51595__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-primary btn-block",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_home,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?" active":null)].join(''),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__51595__$2,temp__5735__auto__,active_home){
return (function (){
var G__51606 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","active-attribution","navigation/active-attribution",600082450),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51606) : re_frame.core.dispatch.call(null,G__51606));
});})(item,s__51595__$2,temp__5735__auto__,active_home))
], null),jasminegui$attribution$nav_attribution_bar_$_iter__51594(cljs.core.rest(s__51595__$2)));
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

var G__51614 = cljs.core.deref((function (){var G__51615 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","active-attribution","navigation/active-attribution",600082450)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51615) : re_frame.core.subscribe.call(null,G__51615));
})());
var G__51614__$1 = (((G__51614 instanceof cljs.core.Keyword))?G__51614.fqn:null);
switch (G__51614__$1) {
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
