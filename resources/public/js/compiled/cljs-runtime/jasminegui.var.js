goog.provide('jasminegui.var$');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('re_com.core');
goog.require('re_com.box');
goog.require('re_com.util');
goog.require('re_com.validate');
var module$node_modules$react_table$lib$index=shadow.js.require("module$node_modules$react_table$lib$index", {});
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('jasminegui.mount');
goog.require('jasminegui.tables');
goog.require('jasminegui.static$');
goog.require('jasminegui.charting');
goog.require('oz.core');
var G__54423_54517 = new cljs.core.Keyword("var","table","var/table",-565547877);
var G__54424_54518 = (function (db){
var regression = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword(null,"regression","regression",-431327125)], null));
var risk = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword(null,"risk","risk",2004621358)], null));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"Daily 1y",new cljs.core.Keyword(null,"std","std",2037001211),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"sd-1y","sd-1y",845748778)], null)),new cljs.core.Keyword(null,"beta","beta",455605892),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"beta-1y","beta-1y",-1749293921)], null)),new cljs.core.Keyword(null,"rsq","rsq",243329956),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"rsq-1y","rsq-1y",1982283506)], null)),new cljs.core.Keyword(null,"var95","var95",1809624563),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"var-1y-95pct","var-1y-95pct",999893793)], null)),new cljs.core.Keyword(null,"var99","var99",232222560),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"var-1y-99pct","var-1y-99pct",-551166536)], null)),new cljs.core.Keyword(null,"maxd","maxd",1164559820),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"maxd-1y","maxd-1y",-1112268542)], null))], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"Daily 3y",new cljs.core.Keyword(null,"std","std",2037001211),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"sd-3y","sd-3y",1210482211)], null)),new cljs.core.Keyword(null,"beta","beta",455605892),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"beta-3y","beta-3y",1009686145)], null)),new cljs.core.Keyword(null,"rsq","rsq",243329956),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"rsq-3y","rsq-3y",1277484017)], null)),new cljs.core.Keyword(null,"var95","var95",1809624563),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"var-3y-95pct","var-3y-95pct",1910277682)], null)),new cljs.core.Keyword(null,"var99","var99",232222560),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"var-3y-99pct","var-3y-99pct",264699379)], null)),new cljs.core.Keyword(null,"maxd","maxd",1164559820),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"maxd-3y","maxd-3y",-2129552400)], null))], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"Weekly 1y",new cljs.core.Keyword(null,"std","std",2037001211),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"sd-1y","sd-1y",845748778)], null)),new cljs.core.Keyword(null,"beta","beta",455605892),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"beta-1y","beta-1y",-1749293921)], null)),new cljs.core.Keyword(null,"rsq","rsq",243329956),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"rsq-1y","rsq-1y",1982283506)], null)),new cljs.core.Keyword(null,"var95","var95",1809624563),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"var-1y-95pct","var-1y-95pct",999893793)], null)),new cljs.core.Keyword(null,"var99","var99",232222560),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"var-1y-99pct","var-1y-99pct",-551166536)], null)),new cljs.core.Keyword(null,"maxd","maxd",1164559820),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"maxd-1y","maxd-1y",-1112268542)], null))], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"Weekly 3y",new cljs.core.Keyword(null,"std","std",2037001211),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"sd-3y","sd-3y",1210482211)], null)),new cljs.core.Keyword(null,"beta","beta",455605892),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"beta-3y","beta-3y",1009686145)], null)),new cljs.core.Keyword(null,"rsq","rsq",243329956),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"rsq-3y","rsq-3y",1277484017)], null)),new cljs.core.Keyword(null,"var95","var95",1809624563),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"var-3y-95pct","var-3y-95pct",1910277682)], null)),new cljs.core.Keyword(null,"var99","var99",232222560),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"var-3y-99pct","var-3y-99pct",264699379)], null)),new cljs.core.Keyword(null,"maxd","maxd",1164559820),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"maxd-3y","maxd-3y",-2129552400)], null))], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"Monthly 1y",new cljs.core.Keyword(null,"std","std",2037001211),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"sd-1y","sd-1y",845748778)], null)),new cljs.core.Keyword(null,"beta","beta",455605892),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"beta-1y","beta-1y",-1749293921)], null)),new cljs.core.Keyword(null,"rsq","rsq",243329956),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"rsq-1y","rsq-1y",1982283506)], null)),new cljs.core.Keyword(null,"var95","var95",1809624563),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"var-1y-95pct","var-1y-95pct",999893793)], null)),new cljs.core.Keyword(null,"var99","var99",232222560),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"var-1y-99pct","var-1y-99pct",-551166536)], null)),new cljs.core.Keyword(null,"maxd","maxd",1164559820),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"maxd-1y","maxd-1y",-1112268542)], null))], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"Monthly 3y",new cljs.core.Keyword(null,"std","std",2037001211),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"sd-3y","sd-3y",1210482211)], null)),new cljs.core.Keyword(null,"beta","beta",455605892),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"beta-3y","beta-3y",1009686145)], null)),new cljs.core.Keyword(null,"rsq","rsq",243329956),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"rsq-3y","rsq-3y",1277484017)], null)),new cljs.core.Keyword(null,"var95","var95",1809624563),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"var-3y-95pct","var-3y-95pct",1910277682)], null)),new cljs.core.Keyword(null,"var99","var99",232222560),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"var-3y-99pct","var-3y-99pct",264699379)], null)),new cljs.core.Keyword(null,"maxd","maxd",1164559820),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"maxd-3y","maxd-3y",-2129552400)], null))], null)], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__54423_54517,G__54424_54518) : re_frame.core.reg_sub.call(null,G__54423_54517,G__54424_54518));
var G__54431_54526 = new cljs.core.Keyword("var","portfolio-proxies","var/portfolio-proxies",155524858);
var G__54432_54527 = (function (db){
var all_proxies = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","proxies","var/proxies",-1487962738)], null));
var days_with_data = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword(null,"days-with-data","days-with-data",-737758801)], null));
var total_days = cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword(null,"daily","daily",-697831483)], null)));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$var$iter__54433(s__54434){
return (new cljs.core.LazySeq(null,(function (){
var s__54434__$1 = s__54434;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__54434__$1);
if(temp__5735__auto__){
var s__54434__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54434__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__54434__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__54436 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__54435 = (0);
while(true){
if((i__54435 < size__4528__auto__)){
var vec__54438 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__54435);
var kb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54438,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54438,(1),null);
cljs.core.chunk_append(b__54436,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bond","bond",1505454895),cljs.core.name(kb),new cljs.core.Keyword(null,"days","days",-1394072564),(total_days - d)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(all_proxies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kb], null))], 0)),new cljs.core.Keyword(null,"adjdur","adjdur",-1939650640),cljs.core.str));

var G__54532 = (i__54435 + (1));
i__54435 = G__54532;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54436),jasminegui$var$iter__54433(cljs.core.chunk_rest(s__54434__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54436),null);
}
} else {
var vec__54442 = cljs.core.first(s__54434__$2);
var kb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54442,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54442,(1),null);
return cljs.core.cons(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bond","bond",1505454895),cljs.core.name(kb),new cljs.core.Keyword(null,"days","days",-1394072564),(total_days - d)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(all_proxies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kb], null))], 0)),new cljs.core.Keyword(null,"adjdur","adjdur",-1939650640),cljs.core.str),jasminegui$var$iter__54433(cljs.core.rest(s__54434__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(days_with_data);
})()));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__54431_54526,G__54432_54527) : re_frame.core.reg_sub.call(null,G__54431_54526,G__54432_54527));
jasminegui.var$.nav_var_bar = (function jasminegui$var$nav_var_bar(){
var active_var = cljs.core.deref((function (){var G__54445 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-var","active-var",-1787478523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__54445) : re_frame.core.subscribe.call(null,G__54445));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"class","class",-2030961996),"leftnavbar",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$var$nav_var_bar_$_iter__54446(s__54447){
return (new cljs.core.LazySeq(null,(function (){
var s__54447__$1 = s__54447;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__54447__$1);
if(temp__5735__auto__){
var s__54447__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54447__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__54447__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__54449 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__54448 = (0);
while(true){
if((i__54448 < size__4528__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__54448);
cljs.core.chunk_append(b__54449,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-primary btn-block",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_var,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?" active":null)].join(''),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__54448,item,c__4527__auto__,size__4528__auto__,b__54449,s__54447__$2,temp__5735__auto__,active_var){
return (function (){
var G__54450 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-var","active-var",-1787478523),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__54450) : re_frame.core.dispatch.call(null,G__54450));
});})(i__54448,item,c__4527__auto__,size__4528__auto__,b__54449,s__54447__$2,temp__5735__auto__,active_var))
], null));

var G__54535 = (i__54448 + (1));
i__54448 = G__54535;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54449),jasminegui$var$nav_var_bar_$_iter__54446(cljs.core.chunk_rest(s__54447__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54449),null);
}
} else {
var item = cljs.core.first(s__54447__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-primary btn-block",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_var,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?" active":null)].join(''),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__54447__$2,temp__5735__auto__,active_var){
return (function (){
var G__54451 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-var","active-var",-1787478523),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__54451) : re_frame.core.dispatch.call(null,G__54451));
});})(item,s__54447__$2,temp__5735__auto__,active_var))
], null),jasminegui$var$nav_var_bar_$_iter__54446(cljs.core.rest(s__54447__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(jasminegui.static$.var_navigation);
})())], null)], null)], null);
});
jasminegui.var$.overview = (function jasminegui$var$overview(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"hi"], null);
});
jasminegui.var$.marginal = (function jasminegui$var$marginal(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"hi"], null);
});
jasminegui.var$.portfolio_proxy_table = (function jasminegui$var$portfolio_proxy_table(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.deref((function (){var G__54453 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","portfolio-proxies","var/portfolio-proxies",155524858)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__54453) : re_frame.core.subscribe.call(null,G__54453));
})()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Bond",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"bond",new cljs.core.Keyword(null,"width","width",-384071477),(150)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Days with data",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"days",new cljs.core.Keyword(null,"width","width",-384071477),(150)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Proxy",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"proxy",new cljs.core.Keyword(null,"width","width",-384071477),(150)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Adjust duration?",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"adjdur",new cljs.core.Keyword(null,"width","width",-384071477),(150)], null)], null),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),true,new cljs.core.Keyword(null,"sortable","sortable",2109633621),false,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),true,new cljs.core.Keyword(null,"defaultFilterMethod","defaultFilterMethod",-641971243),jasminegui.tables.case_insensitive_filter,new cljs.core.Keyword(null,"pageSize","pageSize",732080883),(25),new cljs.core.Keyword(null,"className","className",-1983287057),"-striped"], null)], null);
});
jasminegui.var$.var_table = (function jasminegui$var$var_table(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.deref((function (){var G__54455 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","table","var/table",-565547877)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__54455) : re_frame.core.subscribe.call(null,G__54455));
})()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Period",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"id",new cljs.core.Keyword(null,"width","width",-384071477),(90)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Volatility",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"std",new cljs.core.Keyword(null,"width","width",-384071477),(90),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round1pc], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Index Beta",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"beta",new cljs.core.Keyword(null,"width","width",-384071477),(90),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round1], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Index R2",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"rsq",new cljs.core.Keyword(null,"width","width",-384071477),(90),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round0pc], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Header","Header",1255420133),"95% VaR",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"var95",new cljs.core.Keyword(null,"width","width",-384071477),(90),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round1pc], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Header","Header",1255420133),"99% VaR",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"var99",new cljs.core.Keyword(null,"width","width",-384071477),(90),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round1pc], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Max loss (*)",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"maxd",new cljs.core.Keyword(null,"width","width",-384071477),(90),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round1pc], null)], null),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),false,new cljs.core.Keyword(null,"sortable","sortable",2109633621),false,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false,new cljs.core.Keyword(null,"pageSize","pageSize",732080883),(6),new cljs.core.Keyword(null,"className","className",-1983287057),"-striped"], null)], null);
});
jasminegui.var$.standard_box_width = "800px";
jasminegui.var$.dropdown_width = "150px";
jasminegui.var$.var_table_view = (function jasminegui$var$var_table_view(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Backtested VaR",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.var$.var_table], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"(*) Max loss goes backwards in time hence can be smaller than VaR."], null)], null)], null);
});
jasminegui.var$.backtest_chart = (function jasminegui$var$backtest_chart(){
var dates = cljs.core.deref((function (){var G__54457 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","dates","var/dates",-1599746364)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__54457) : re_frame.core.subscribe.call(null,G__54457));
})());
var data = cljs.core.deref((function (){var G__54458 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__54458) : re_frame.core.subscribe.call(null,G__54458));
})());
var chart_period = cljs.core.deref((function (){var G__54459 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__54459) : re_frame.core.subscribe.call(null,G__54459));
})());
var line = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54456_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__54456_SHARP_),chart_period);
}),jasminegui.static$.var_charts_choice_map));
var days = (function (){var G__54460 = (function (){var G__54461 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__54461) : line.call(null,G__54461));
})();
var G__54460__$1 = (((G__54460 instanceof cljs.core.Keyword))?G__54460.fqn:null);
switch (G__54460__$1) {
case "daily":
return ((function (){var G__54462 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__54462) : line.call(null,G__54462));
})() * (250));

break;
case "weekly":
return ((function (){var G__54463 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__54463) : line.call(null,G__54463));
})() * (52));

break;
case "monthly":
return ((function (){var G__54464 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__54464) : line.call(null,G__54464));
})() * (12));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54460__$1)].join('')));

}
})();
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Backtested portfolio value",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.charting.backtest_chart(cljs.core.take_last(days,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dates,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54465 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__54465) : line.call(null,G__54465));
})()], null))),cljs.core.take_last(days,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolio-value","portfolio-value",-1900674109),(function (){var G__54466 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__54466) : line.call(null,G__54466));
})()], null))),(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(jasminegui.var$.standard_box_width,(0),(3))) - (150)),(550))], null)], null)], null);
});
jasminegui.var$.histogram_chart = (function jasminegui$var$histogram_chart(){
var data = cljs.core.deref((function (){var G__54469 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__54469) : re_frame.core.subscribe.call(null,G__54469));
})());
var chart_period = cljs.core.deref((function (){var G__54470 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__54470) : re_frame.core.subscribe.call(null,G__54470));
})());
var line = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54467_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__54467_SHARP_),chart_period);
}),jasminegui.static$.var_charts_choice_map));
var days = (function (){var G__54471 = (function (){var G__54472 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__54472) : line.call(null,G__54472));
})();
var G__54471__$1 = (((G__54471 instanceof cljs.core.Keyword))?G__54471.fqn:null);
switch (G__54471__$1) {
case "daily":
return ((function (){var G__54473 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__54473) : line.call(null,G__54473));
})() * (250));

break;
case "weekly":
return ((function (){var G__54474 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__54474) : line.call(null,G__54474));
})() * (52));

break;
case "monthly":
return ((function (){var G__54475 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__54475) : line.call(null,G__54475));
})() * (12));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54471__$1)].join('')));

}
})();
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Return histogram",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.charting.return_histogram(cljs.core.take_last(days,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolio-returns","portfolio-returns",1969280703),(function (){var G__54476 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__54476) : line.call(null,G__54476));
})()], null))),(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(jasminegui.var$.standard_box_width,(0),(3))) - (150)),(550))], null)], null)], null);
});
jasminegui.var$.regression_chart = (function jasminegui$var$regression_chart(){
var data = cljs.core.deref((function (){var G__54479 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__54479) : re_frame.core.subscribe.call(null,G__54479));
})());
var chart_period = cljs.core.deref((function (){var G__54480 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__54480) : re_frame.core.subscribe.call(null,G__54480));
})());
var line = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54477_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__54477_SHARP_),chart_period);
}),jasminegui.static$.var_charts_choice_map));
var days = (function (){var G__54481 = (function (){var G__54482 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__54482) : line.call(null,G__54482));
})();
var G__54481__$1 = (((G__54481 instanceof cljs.core.Keyword))?G__54481.fqn:null);
switch (G__54481__$1) {
case "daily":
return ((function (){var G__54483 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__54483) : line.call(null,G__54483));
})() * (250));

break;
case "weekly":
return ((function (){var G__54484 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__54484) : line.call(null,G__54484));
})() * (52));

break;
case "monthly":
return ((function (){var G__54485 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__54485) : line.call(null,G__54485));
})() * (12));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54481__$1)].join('')));

}
})();
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Regression",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.charting.regression_output(cljs.core.take_last(days,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolio-returns","portfolio-returns",1969280703),(function (){var G__54486 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__54486) : line.call(null,G__54486));
})()], null))),cljs.core.take_last(days,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"benchmark-returns","benchmark-returns",-1631663598),(function (){var G__54487 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__54487) : line.call(null,G__54487));
})()], null))),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"regression","regression",-431327125),(function (){var G__54488 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__54488) : line.call(null,G__54488));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),(function (){var G__54489 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__54489) : line.call(null,G__54489));
})()))?new cljs.core.Keyword(null,"alpha-3y","alpha-3y",-1942119421):new cljs.core.Keyword(null,"alpha-1y","alpha-1y",-1600722615))], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"regression","regression",-431327125),(function (){var G__54490 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__54490) : line.call(null,G__54490));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),(function (){var G__54492 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__54492) : line.call(null,G__54492));
})()))?new cljs.core.Keyword(null,"beta-3y","beta-3y",1009686145):new cljs.core.Keyword(null,"beta-1y","beta-1y",-1749293921))], null)),(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(jasminegui.var$.standard_box_width,(0),(3))) - (150)),(550))], null)], null)], null);
});
jasminegui.var$.var_controller = (function jasminegui$var$var_controller(){
var portfolio_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$var$var_controller_$_iter__54495(s__54496){
return (new cljs.core.LazySeq(null,(function (){
var s__54496__$1 = s__54496;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__54496__$1);
if(temp__5735__auto__){
var s__54496__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54496__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__54496__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__54498 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__54497 = (0);
while(true){
if((i__54497 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__54497);
cljs.core.chunk_append(b__54498,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null));

var G__54541 = (i__54497 + (1));
i__54497 = G__54541;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54498),jasminegui$var$var_controller_$_iter__54495(cljs.core.chunk_rest(s__54496__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54498),null);
}
} else {
var p = cljs.core.first(s__54496__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null),jasminegui$var$var_controller_$_iter__54495(cljs.core.rest(s__54496__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref((function (){var G__54499 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__54499) : re_frame.core.subscribe.call(null,G__54499));
})()));
})());
var portfolio = (function (){var G__54500 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","portfolio","var/portfolio",957702515)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__54500) : re_frame.core.subscribe.call(null,G__54500));
})();
var chart_period = (function (){var G__54501 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__54501) : re_frame.core.subscribe.call(null,G__54501));
})();
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Display selection",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 20px 0px 0px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Portfolio:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.var$.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),portfolio,new cljs.core.Keyword(null,"choices","choices",1385611597),portfolio_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__54493_SHARP_){
var G__54502 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-var","get-portfolio-var",1001711662),p1__54493_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__54502) : re_frame.core.dispatch.call(null,G__54502));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"20px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Chart period:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.var$.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),chart_period,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.var_charts_choice_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__54494_SHARP_){
var G__54503 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),p1__54494_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__54503) : re_frame.core.dispatch.call(null,G__54503));
})], null)], null)], null)], null)], null);
});
jasminegui.var$.proxy_table = (function jasminegui$var$proxy_table(){
var data = cljs.core.deref((function (){var G__54504 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","proxies","var/proxies",-1487962738)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__54504) : re_frame.core.subscribe.call(null,G__54504));
})());
var display = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bond","bond",1505454895),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$var$proxy_table_$_iter__54505(s__54506){
return (new cljs.core.LazySeq(null,(function (){
var s__54506__$1 = s__54506;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__54506__$1);
if(temp__5735__auto__){
var s__54506__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54506__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__54506__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__54508 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__54507 = (0);
while(true){
if((i__54507 < size__4528__auto__)){
var vec__54509 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__54507);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54509,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54509,(1),null);
cljs.core.chunk_append(b__54508,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bond","bond",1505454895),k], null),v], 0)),new cljs.core.Keyword(null,"adjdur","adjdur",-1939650640),cljs.core.str));

var G__54542 = (i__54507 + (1));
i__54507 = G__54542;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54508),jasminegui$var$proxy_table_$_iter__54505(cljs.core.chunk_rest(s__54506__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54508),null);
}
} else {
var vec__54512 = cljs.core.first(s__54506__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54512,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54512,(1),null);
return cljs.core.cons(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bond","bond",1505454895),k], null),v], 0)),new cljs.core.Keyword(null,"adjdur","adjdur",-1939650640),cljs.core.str),jasminegui$var$proxy_table_$_iter__54505(cljs.core.rest(s__54506__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(data);
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"data","data",-232669377),display,new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Bond",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"bond",new cljs.core.Keyword(null,"width","width",-384071477),(150)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Proxy",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"proxy",new cljs.core.Keyword(null,"width","width",-384071477),(150)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Adjust duration?",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"adjdur",new cljs.core.Keyword(null,"width","width",-384071477),(150)], null)], null),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),true,new cljs.core.Keyword(null,"sortable","sortable",2109633621),false,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),true,new cljs.core.Keyword(null,"defaultFilterMethod","defaultFilterMethod",-641971243),jasminegui.tables.case_insensitive_filter,new cljs.core.Keyword(null,"pageSize","pageSize",732080883),(25),new cljs.core.Keyword(null,"className","className",-1983287057),"-striped"], null)], null);
});
jasminegui.var$.proxy_table_view = (function jasminegui$var$proxy_table_view(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Bond proxies",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.var$.proxy_table], null)], null)], null)], null);
});
jasminegui.var$.portfolio_proxies = (function jasminegui$var$portfolio_proxies(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Bond proxies",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.var$.portfolio_proxy_table], null)], null)], null);
});
jasminegui.var$.active_home = (function jasminegui$var$active_home(){
var active_var = cljs.core.deref((function (){var G__54515 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-var","active-var",-1787478523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__54515) : re_frame.core.subscribe.call(null,G__54515));
})());
window.scrollTo((0),(0));

var G__54516 = active_var;
var G__54516__$1 = (((G__54516 instanceof cljs.core.Keyword))?G__54516.fqn:null);
switch (G__54516__$1) {
case "overview":
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.var$.standard_box_width,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"padding","padding",1660304693),"80px 20px",new cljs.core.Keyword(null,"class","class",-2030961996),"rightelement",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.var$.var_controller], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.var$.var_table_view], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.var$.backtest_chart], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.var$.histogram_chart], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.var$.regression_chart], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.var$.portfolio_proxies], null)], null)], null)], null)], null);

break;
case "marginal":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.var$.marginal], null);

break;
case "proxies":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.var$.proxy_table_view], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.output","div.output",1460347316),"nothing to display"], null);

}
});
jasminegui.var$.var_view = (function jasminegui$var$var_view(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.var$.nav_var_bar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.var$.active_home], null)], null)], null);
});

//# sourceMappingURL=jasminegui.var.js.map
