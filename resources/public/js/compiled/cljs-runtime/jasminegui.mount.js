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
jasminegui.mount.default_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081)],[(1),new cljs.core.Keyword(null,"summary","summary",380847952),null,"Table",new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),true,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),"undefined",cljs.core.set(null),new cljs.core.Keyword(null,"quarter","quarter",-508147616),"Tree",new cljs.core.Keyword(null,"nav","nav",719540477),(1),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),"None",(1),"One","Tree",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"home","home",-74557309),"OGEMCORD",new cljs.core.Keyword(null,"cembi","cembi",1924920241),cljs.core.PersistentVector.EMPTY,true,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null)]);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jasminegui.mount","initialize-db","jasminegui.mount/initialize-db",-1621527627),(function (_,___$1){
return jasminegui.mount.default_db;
}));
var seq__42790_42957 = cljs.core.seq(cljs.core.keys(jasminegui.mount.default_db));
var chunk__42791_42958 = null;
var count__42792_42959 = (0);
var i__42793_42960 = (0);
while(true){
if((i__42793_42960 < count__42792_42959)){
var k_42961 = chunk__42791_42958.cljs$core$IIndexed$_nth$arity$2(null,i__42793_42960);
var G__42798_42962 = k_42961;
var G__42799_42963 = ((function (seq__42790_42957,chunk__42791_42958,count__42792_42959,i__42793_42960,G__42798_42962,k_42961){
return (function (db){
return (k_42961.cljs$core$IFn$_invoke$arity$1 ? k_42961.cljs$core$IFn$_invoke$arity$1(db) : k_42961.call(null,db));
});})(seq__42790_42957,chunk__42791_42958,count__42792_42959,i__42793_42960,G__42798_42962,k_42961))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42798_42962,G__42799_42963) : re_frame.core.reg_sub.call(null,G__42798_42962,G__42799_42963));


var G__42964 = seq__42790_42957;
var G__42965 = chunk__42791_42958;
var G__42966 = count__42792_42959;
var G__42967 = (i__42793_42960 + (1));
seq__42790_42957 = G__42964;
chunk__42791_42958 = G__42965;
count__42792_42959 = G__42966;
i__42793_42960 = G__42967;
continue;
} else {
var temp__5735__auto___42968 = cljs.core.seq(seq__42790_42957);
if(temp__5735__auto___42968){
var seq__42790_42969__$1 = temp__5735__auto___42968;
if(cljs.core.chunked_seq_QMARK_(seq__42790_42969__$1)){
var c__4556__auto___42970 = cljs.core.chunk_first(seq__42790_42969__$1);
var G__42971 = cljs.core.chunk_rest(seq__42790_42969__$1);
var G__42973 = c__4556__auto___42970;
var G__42974 = cljs.core.count(c__4556__auto___42970);
var G__42975 = (0);
seq__42790_42957 = G__42971;
chunk__42791_42958 = G__42973;
count__42792_42959 = G__42974;
i__42793_42960 = G__42975;
continue;
} else {
var k_42977 = cljs.core.first(seq__42790_42969__$1);
var G__42800_42978 = k_42977;
var G__42801_42979 = ((function (seq__42790_42957,chunk__42791_42958,count__42792_42959,i__42793_42960,G__42800_42978,k_42977,seq__42790_42969__$1,temp__5735__auto___42968){
return (function (db){
return (k_42977.cljs$core$IFn$_invoke$arity$1 ? k_42977.cljs$core$IFn$_invoke$arity$1(db) : k_42977.call(null,db));
});})(seq__42790_42957,chunk__42791_42958,count__42792_42959,i__42793_42960,G__42800_42978,k_42977,seq__42790_42969__$1,temp__5735__auto___42968))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42800_42978,G__42801_42979) : re_frame.core.reg_sub.call(null,G__42800_42978,G__42801_42979));


var G__42982 = cljs.core.next(seq__42790_42969__$1);
var G__42983 = null;
var G__42984 = (0);
var G__42985 = (0);
seq__42790_42957 = G__42982;
chunk__42791_42958 = G__42983;
count__42792_42959 = G__42984;
i__42793_42960 = G__42985;
continue;
}
} else {
}
}
break;
}
jasminegui.mount.first_level_sort = (function jasminegui$mount$first_level_sort(x){
var G__42802 = x;
switch (G__42802) {
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
jasminegui.mount.add_total_line_to_pivot = (function jasminegui$mount$add_total_line_to_pivot(pivoted_table,portfolios){
var total_line = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"jpm-region","jpm-region",-2074265852),"Total",new cljs.core.Keyword(null,"qt-jpm-sector","qt-jpm-sector",1047055349),"Total",new cljs.core.Keyword(null,"qt-risk-country-name","qt-risk-country-name",1182905474),"Total",new cljs.core.Keyword(null,"TICKER","TICKER",-1215969144),"Total",new cljs.core.Keyword(null,"NAME","NAME",-1127916515),"Total",new cljs.core.Keyword(null,"description","description",-1428560544),"Total",new cljs.core.Keyword(null,"isin","isin",-1197420747),"Total",new cljs.core.Keyword(null,"qt-iam-int-lt-median-rating-score","qt-iam-int-lt-median-rating-score",1104976342),"Total"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$add_total_line_to_pivot_$_iter__42803(s__42804){
return (new cljs.core.LazySeq(null,(function (){
var s__42804__$1 = s__42804;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42804__$1);
if(temp__5735__auto__){
var s__42804__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42804__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42804__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42806 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42805 = (0);
while(true){
if((i__42805 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__42805);
cljs.core.chunk_append(b__42806,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),pivoted_table))], null));

var G__42991 = (i__42805 + (1));
i__42805 = G__42991;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42806),jasminegui$mount$add_total_line_to_pivot_$_iter__42803(cljs.core.chunk_rest(s__42804__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42806),null);
}
} else {
var p = cljs.core.first(s__42804__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),pivoted_table))], null),jasminegui$mount$add_total_line_to_pivot_$_iter__42803(cljs.core.rest(s__42804__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(portfolios);
})())], 0));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pivoted_table,total_line);
});
var G__42808_42997 = new cljs.core.Keyword("multiple-portfolio-risk","table","multiple-portfolio-risk/table",1962237397);
var G__42809_42998 = (function (db){
var pivoted_positions = new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863).cljs$core$IFn$_invoke$arity$1(db);
var kselected_portfolios = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045).cljs$core$IFn$_invoke$arity$1(db));
var portfolios = new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213).cljs$core$IFn$_invoke$arity$1(db);
var hide_zero_risk = new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337).cljs$core$IFn$_invoke$arity$1(db);
var display_key_one = new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337).cljs$core$IFn$_invoke$arity$1(db);
var is_tree = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547).cljs$core$IFn$_invoke$arity$1(db),"Tree");
var risk_filter = new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247).cljs$core$IFn$_invoke$arity$1(db);
var risk_choice_1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((1)) : risk_filter.call(null,(1)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((1)) : risk_filter.call(null,(1))):null);
var risk_choice_2 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((2)) : risk_filter.call(null,(2)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((2)) : risk_filter.call(null,(2))):null);
var risk_choice_3 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("None",(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((3)) : risk_filter.call(null,(3)))))?(risk_filter.cljs$core$IFn$_invoke$arity$1 ? risk_filter.cljs$core$IFn$_invoke$arity$1((3)) : risk_filter.call(null,(3))):null);
var grouping_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$mount$iter__42810(s__42811){
return (new cljs.core.LazySeq(null,(function (){
var s__42811__$1 = s__42811;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42811__$1);
if(temp__5735__auto__){
var s__42811__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42811__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42811__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42813 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42812 = (0);
while(true){
if((i__42812 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__42812);
cljs.core.chunk_append(b__42813,(jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)));

var G__43011 = (i__42812 + (1));
i__42812 = G__43011;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42813),jasminegui$mount$iter__42810(cljs.core.chunk_rest(s__42811__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42813),null);
}
} else {
var r = cljs.core.first(s__42811__$2);
return cljs.core.cons((jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1 ? jasminegui.tables.table_columns.cljs$core$IFn$_invoke$arity$1(r) : jasminegui.tables.table_columns.call(null,r)),jasminegui$mount$iter__42810(cljs.core.rest(s__42811__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [risk_choice_1,risk_choice_2,risk_choice_3,new cljs.core.Keyword(null,"name","name",1843675177)], null)));
})());
var accessors_k = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accessor","accessor",-25476721),grouping_columns));
var pivoted_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42807_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__42807_SHARP_,(function (){var fexpr__42814 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_key_one,new cljs.core.Keyword(null,"accessor","accessor",-25476721)], null)));
return (fexpr__42814.cljs$core$IFn$_invoke$arity$1 ? fexpr__42814.cljs$core$IFn$_invoke$arity$1(p1__42807_SHARP_) : fexpr__42814.call(null,p1__42807_SHARP_));
})()], 0));
}),pivoted_positions);
var thfil = (function (line){
return (!(cljs.core.every_QMARK_(cljs.core.zero_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(line,kselected_portfolios))));
});
var pivoted_data_hide_zero = (cljs.core.truth_((((!(is_tree)))?hide_zero_risk:false))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(thfil,pivoted_data):pivoted_data);
return jasminegui.mount.add_total_line_to_pivot(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.comp.cljs$core$IFn$_invoke$arity$2(jasminegui.mount.first_level_sort,cljs.core.first(accessors_k))], null),cljs.core.rest(accessors_k))),pivoted_data_hide_zero),portfolios);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42808_42997,G__42809_42998) : re_frame.core.reg_sub.call(null,G__42808_42997,G__42809_42998));
var seq__42815_43012 = cljs.core.seq(new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143)], null));
var chunk__42816_43013 = null;
var count__42817_43014 = (0);
var i__42818_43015 = (0);
while(true){
if((i__42818_43015 < count__42817_43014)){
var k_43017 = chunk__42816_43013.cljs$core$IIndexed$_nth$arity$2(null,i__42818_43015);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_43017,((function (seq__42815_43012,chunk__42816_43013,count__42817_43014,i__42818_43015,k_43017){
return (function (db,p__42827){
var vec__42828 = p__42827;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42828,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42828,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_43017,data);
});})(seq__42815_43012,chunk__42816_43013,count__42817_43014,i__42818_43015,k_43017))
);


var G__43018 = seq__42815_43012;
var G__43019 = chunk__42816_43013;
var G__43020 = count__42817_43014;
var G__43021 = (i__42818_43015 + (1));
seq__42815_43012 = G__43018;
chunk__42816_43013 = G__43019;
count__42817_43014 = G__43020;
i__42818_43015 = G__43021;
continue;
} else {
var temp__5735__auto___43022 = cljs.core.seq(seq__42815_43012);
if(temp__5735__auto___43022){
var seq__42815_43023__$1 = temp__5735__auto___43022;
if(cljs.core.chunked_seq_QMARK_(seq__42815_43023__$1)){
var c__4556__auto___43025 = cljs.core.chunk_first(seq__42815_43023__$1);
var G__43026 = cljs.core.chunk_rest(seq__42815_43023__$1);
var G__43027 = c__4556__auto___43025;
var G__43028 = cljs.core.count(c__4556__auto___43025);
var G__43029 = (0);
seq__42815_43012 = G__43026;
chunk__42816_43013 = G__43027;
count__42817_43014 = G__43028;
i__42818_43015 = G__43029;
continue;
} else {
var k_43030 = cljs.core.first(seq__42815_43023__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_43030,((function (seq__42815_43012,chunk__42816_43013,count__42817_43014,i__42818_43015,k_43030,seq__42815_43023__$1,temp__5735__auto___43022){
return (function (db,p__42831){
var vec__42832 = p__42831;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42832,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42832,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_43030,data);
});})(seq__42815_43012,chunk__42816_43013,count__42817_43014,i__42818_43015,k_43030,seq__42815_43023__$1,temp__5735__auto___43022))
);


var G__43032 = cljs.core.next(seq__42815_43023__$1);
var G__43033 = null;
var G__43034 = (0);
var G__43035 = (0);
seq__42815_43012 = G__43032;
chunk__42816_43013 = G__43033;
count__42817_43014 = G__43034;
i__42818_43015 = G__43035;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),(function (db,p__42835){
var vec__42836 = p__42835;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42836,(0),null);
var portfolios = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42836,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),portfolios,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),cljs.core.set(portfolios)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),(function (db,p__42839){
var vec__42840 = p__42839;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42840,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42840,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42840,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),(function (db,p__42843){
var vec__42844 = p__42843;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42844,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42844,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42844,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),(function (db,p__42847){
var vec__42848 = p__42847;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42848,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42848,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42848,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),(function (db,p__42851){
var vec__42852 = p__42851;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42852,(0),null);
var qt_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42852,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),clojure.string.replace(qt_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),(function (db,p__42855){
var vec__42856 = p__42855;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42856,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42856,(1),null);
var G__42859 = snapshot;
switch (G__42859) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42859)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cycle-shortcut","cycle-shortcut",-1617058214),(function (db,p__42860){
var vec__42861 = p__42860;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42861,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42861,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42861,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"active-home","active-home",53621216).cljs$core$IFn$_invoke$arity$1(db)),"-risk/shortcut"].join(''));
var shortcut_value = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
if((shortcut_value < (4))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(shortcut_value + (1)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(1));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tree-table","tree-table",-1263002012),(function (db,p__42864){
var vec__42865 = p__42864;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42865,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42865,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42865,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"active-home","active-home",53621216).cljs$core$IFn$_invoke$arity$1(db)),"-risk/display-style"].join(''));
var G__42868 = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
switch (G__42868) {
case "Tree":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Table");

break;
case "Table":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Tree");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42868)].join('')));

}
}));
jasminegui.mount.http_get_dispatch = (function jasminegui$mount$http_get_dispatch(request){
var c__39340__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39341__auto__ = (function (){var switch__39317__auto__ = (function (state_42897){
var state_val_42898 = (state_42897[(1)]);
if((state_val_42898 === (1))){
var inst_42869 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_42870 = cljs_http.client.get(inst_42869);
var state_42897__$1 = state_42897;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42897__$1,(2),inst_42870);
} else {
if((state_val_42898 === (2))){
var inst_42872 = (state_42897[(2)]);
var inst_42873 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_42874 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_42897__$1 = (function (){var statearr_42899 = state_42897;
(statearr_42899[(7)] = inst_42872);

(statearr_42899[(8)] = inst_42873);

return statearr_42899;
})();
if(cljs.core.truth_(inst_42874)){
var statearr_42900_43053 = state_42897__$1;
(statearr_42900_43053[(1)] = (3));

} else {
var statearr_42901_43055 = state_42897__$1;
(statearr_42901_43055[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42898 === (3))){
var inst_42872 = (state_42897[(7)]);
var inst_42876 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_42872);
var inst_42877 = JSON.parse(inst_42876);
var inst_42878 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_42877,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_42897__$1 = state_42897;
var statearr_42902_43057 = state_42897__$1;
(statearr_42902_43057[(2)] = inst_42878);

(statearr_42902_43057[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42898 === (4))){
var inst_42872 = (state_42897[(7)]);
var inst_42880 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_42872);
var state_42897__$1 = state_42897;
var statearr_42903_43059 = state_42897__$1;
(statearr_42903_43059[(2)] = inst_42880);

(statearr_42903_43059[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42898 === (5))){
var inst_42873 = (state_42897[(8)]);
var inst_42882 = (state_42897[(2)]);
var inst_42883 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_42873,inst_42882);
var inst_42884 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_42883) : re_frame.core.dispatch.call(null,inst_42883));
var inst_42885 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_42897__$1 = (function (){var statearr_42904 = state_42897;
(statearr_42904[(9)] = inst_42884);

return statearr_42904;
})();
if(cljs.core.truth_(inst_42885)){
var statearr_42905_43069 = state_42897__$1;
(statearr_42905_43069[(1)] = (6));

} else {
var statearr_42906_43070 = state_42897__$1;
(statearr_42906_43070[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42898 === (6))){
var inst_42887 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42888 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_42889 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_42890 = [inst_42888,inst_42889];
var inst_42891 = (new cljs.core.PersistentVector(null,2,(5),inst_42887,inst_42890,null));
var inst_42892 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_42891) : re_frame.core.dispatch.call(null,inst_42891));
var state_42897__$1 = state_42897;
var statearr_42907_43071 = state_42897__$1;
(statearr_42907_43071[(2)] = inst_42892);

(statearr_42907_43071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42898 === (7))){
var state_42897__$1 = state_42897;
var statearr_42908_43072 = state_42897__$1;
(statearr_42908_43072[(2)] = null);

(statearr_42908_43072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42898 === (8))){
var inst_42895 = (state_42897[(2)]);
var state_42897__$1 = state_42897;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42897__$1,inst_42895);
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
var statearr_42909 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42909[(0)] = jasminegui$mount$http_get_dispatch_$_state_machine__39318__auto__);

(statearr_42909[(1)] = (1));

return statearr_42909;
});
var jasminegui$mount$http_get_dispatch_$_state_machine__39318__auto____1 = (function (state_42897){
while(true){
var ret_value__39319__auto__ = (function (){try{while(true){
var result__39320__auto__ = switch__39317__auto__(state_42897);
if(cljs.core.keyword_identical_QMARK_(result__39320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39320__auto__;
}
break;
}
}catch (e42910){if((e42910 instanceof Object)){
var ex__39321__auto__ = e42910;
var statearr_42911_43077 = state_42897;
(statearr_42911_43077[(5)] = ex__39321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42910;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43078 = state_42897;
state_42897 = G__43078;
continue;
} else {
return ret_value__39319__auto__;
}
break;
}
});
jasminegui$mount$http_get_dispatch_$_state_machine__39318__auto__ = function(state_42897){
switch(arguments.length){
case 0:
return jasminegui$mount$http_get_dispatch_$_state_machine__39318__auto____0.call(this);
case 1:
return jasminegui$mount$http_get_dispatch_$_state_machine__39318__auto____1.call(this,state_42897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_get_dispatch_$_state_machine__39318__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_get_dispatch_$_state_machine__39318__auto____0;
jasminegui$mount$http_get_dispatch_$_state_machine__39318__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_get_dispatch_$_state_machine__39318__auto____1;
return jasminegui$mount$http_get_dispatch_$_state_machine__39318__auto__;
})()
})();
var state__39342__auto__ = (function (){var statearr_42912 = (f__39341__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39341__auto__.cljs$core$IFn$_invoke$arity$0() : f__39341__auto__.call(null));
(statearr_42912[(6)] = c__39340__auto__);

return statearr_42912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39342__auto__);
}));

return c__39340__auto__;
});
var G__42913_43079 = new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518);
var G__42914_43080 = jasminegui.mount.http_get_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__42913_43079,G__42914_43080) : re_frame.core.reg_fx.call(null,G__42913_43079,G__42914_43080));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions","get-positions",1610972586),(function (p__42915,p__42916){
var map__42917 = p__42915;
var map__42917__$1 = (((((!((map__42917 == null))))?(((((map__42917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42917):map__42917);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42917__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42918 = p__42916;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42918,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-rating-to-score","get-rating-to-score",391912155),(function (p__42922,p__42923){
var map__42924 = p__42922;
var map__42924__$1 = (((((!((map__42924 == null))))?(((((map__42924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42924):map__42924);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42924__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42925 = p__42923;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42925,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"rating-to-score"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472),(function (p__42929,p__42930){
var map__42931 = p__42929;
var map__42931__$1 = (((((!((map__42931 == null))))?(((((map__42931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42931):map__42931);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42931__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42932 = p__42930;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42932,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"portfolios"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-pivoted-positions","get-pivoted-positions",2145025131),(function (p__42936,p__42937){
var map__42938 = p__42936;
var map__42938__$1 = (((((!((map__42938 == null))))?(((((map__42938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42938):map__42938);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42938__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42939 = p__42937;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42939,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"pivoted-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-total-positions","get-total-positions",-698807167),(function (p__42943,p__42944){
var map__42945 = p__42943;
var map__42945__$1 = (((((!((map__42945 == null))))?(((((map__42945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42945):map__42945);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42945__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42946 = p__42944;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42946,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"total-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-qt-date","get-qt-date",-1072332881),(function (p__42950,p__42951){
var map__42952 = p__42950;
var map__42952__$1 = (((((!((map__42952 == null))))?(((((map__42952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42952):map__42952);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42952__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42953 = p__42951;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42953,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"qt-date"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),false], null)], null);
}));

//# sourceMappingURL=jasminegui.mount.js.map
