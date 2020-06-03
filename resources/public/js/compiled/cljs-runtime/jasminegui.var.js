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
var G__51321_51403 = new cljs.core.Keyword("var","table","var/table",-565547877);
var G__51322_51404 = (function (db){
var regression = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword(null,"regression","regression",-431327125)], null));
var risk = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword(null,"risk","risk",2004621358)], null));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"Daily 1y",new cljs.core.Keyword(null,"std","std",2037001211),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"sd-1y","sd-1y",845748778)], null)),new cljs.core.Keyword(null,"beta","beta",455605892),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"beta-1y","beta-1y",-1749293921)], null)),new cljs.core.Keyword(null,"rsq","rsq",243329956),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"rsq-1y","rsq-1y",1982283506)], null)),new cljs.core.Keyword(null,"var95","var95",1809624563),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"var-1y-95pct","var-1y-95pct",999893793)], null)),new cljs.core.Keyword(null,"var99","var99",232222560),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"var-1y-99pct","var-1y-99pct",-551166536)], null)),new cljs.core.Keyword(null,"maxd","maxd",1164559820),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"maxd-1y","maxd-1y",-1112268542)], null))], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"Daily 3y",new cljs.core.Keyword(null,"std","std",2037001211),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"sd-3y","sd-3y",1210482211)], null)),new cljs.core.Keyword(null,"beta","beta",455605892),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"beta-3y","beta-3y",1009686145)], null)),new cljs.core.Keyword(null,"rsq","rsq",243329956),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"rsq-3y","rsq-3y",1277484017)], null)),new cljs.core.Keyword(null,"var95","var95",1809624563),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"var-3y-95pct","var-3y-95pct",1910277682)], null)),new cljs.core.Keyword(null,"var99","var99",232222560),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"var-3y-99pct","var-3y-99pct",264699379)], null)),new cljs.core.Keyword(null,"maxd","maxd",1164559820),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"maxd-3y","maxd-3y",-2129552400)], null))], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"Weekly 1y",new cljs.core.Keyword(null,"std","std",2037001211),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"sd-1y","sd-1y",845748778)], null)),new cljs.core.Keyword(null,"beta","beta",455605892),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"beta-1y","beta-1y",-1749293921)], null)),new cljs.core.Keyword(null,"rsq","rsq",243329956),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"rsq-1y","rsq-1y",1982283506)], null)),new cljs.core.Keyword(null,"var95","var95",1809624563),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"var-1y-95pct","var-1y-95pct",999893793)], null)),new cljs.core.Keyword(null,"var99","var99",232222560),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"var-1y-99pct","var-1y-99pct",-551166536)], null)),new cljs.core.Keyword(null,"maxd","maxd",1164559820),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"maxd-1y","maxd-1y",-1112268542)], null))], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"Weekly 3y",new cljs.core.Keyword(null,"std","std",2037001211),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"sd-3y","sd-3y",1210482211)], null)),new cljs.core.Keyword(null,"beta","beta",455605892),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"beta-3y","beta-3y",1009686145)], null)),new cljs.core.Keyword(null,"rsq","rsq",243329956),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"rsq-3y","rsq-3y",1277484017)], null)),new cljs.core.Keyword(null,"var95","var95",1809624563),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"var-3y-95pct","var-3y-95pct",1910277682)], null)),new cljs.core.Keyword(null,"var99","var99",232222560),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"var-3y-99pct","var-3y-99pct",264699379)], null)),new cljs.core.Keyword(null,"maxd","maxd",1164559820),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"maxd-3y","maxd-3y",-2129552400)], null))], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"Monthly 1y",new cljs.core.Keyword(null,"std","std",2037001211),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"sd-1y","sd-1y",845748778)], null)),new cljs.core.Keyword(null,"beta","beta",455605892),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"beta-1y","beta-1y",-1749293921)], null)),new cljs.core.Keyword(null,"rsq","rsq",243329956),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"rsq-1y","rsq-1y",1982283506)], null)),new cljs.core.Keyword(null,"var95","var95",1809624563),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"var-1y-95pct","var-1y-95pct",999893793)], null)),new cljs.core.Keyword(null,"var99","var99",232222560),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"var-1y-99pct","var-1y-99pct",-551166536)], null)),new cljs.core.Keyword(null,"maxd","maxd",1164559820),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"maxd-1y","maxd-1y",-1112268542)], null))], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"Monthly 3y",new cljs.core.Keyword(null,"std","std",2037001211),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"sd-3y","sd-3y",1210482211)], null)),new cljs.core.Keyword(null,"beta","beta",455605892),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"beta-3y","beta-3y",1009686145)], null)),new cljs.core.Keyword(null,"rsq","rsq",243329956),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"rsq-3y","rsq-3y",1277484017)], null)),new cljs.core.Keyword(null,"var95","var95",1809624563),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"var-3y-95pct","var-3y-95pct",1910277682)], null)),new cljs.core.Keyword(null,"var99","var99",232222560),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"var-3y-99pct","var-3y-99pct",264699379)], null)),new cljs.core.Keyword(null,"maxd","maxd",1164559820),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"maxd-3y","maxd-3y",-2129552400)], null))], null)], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__51321_51403,G__51322_51404) : re_frame.core.reg_sub.call(null,G__51321_51403,G__51322_51404));
var G__51324_51412 = new cljs.core.Keyword("var","portfolio-proxies","var/portfolio-proxies",155524858);
var G__51325_51413 = (function (db){
var all_proxies = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","proxies","var/proxies",-1487962738)], null));
var days_with_data = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword(null,"days-with-data","days-with-data",-737758801)], null));
var total_days = cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword(null,"daily","daily",-697831483)], null)));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$var$iter__51326(s__51327){
return (new cljs.core.LazySeq(null,(function (){
var s__51327__$1 = s__51327;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51327__$1);
if(temp__5735__auto__){
var s__51327__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51327__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51327__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51329 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51328 = (0);
while(true){
if((i__51328 < size__4528__auto__)){
var vec__51330 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__51328);
var kb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51330,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51330,(1),null);
cljs.core.chunk_append(b__51329,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bond","bond",1505454895),cljs.core.name(kb),new cljs.core.Keyword(null,"days","days",-1394072564),(total_days - d)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(all_proxies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kb], null))], 0)),new cljs.core.Keyword(null,"adjdur","adjdur",-1939650640),cljs.core.str));

var G__51418 = (i__51328 + (1));
i__51328 = G__51418;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51329),jasminegui$var$iter__51326(cljs.core.chunk_rest(s__51327__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51329),null);
}
} else {
var vec__51333 = cljs.core.first(s__51327__$2);
var kb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51333,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51333,(1),null);
return cljs.core.cons(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bond","bond",1505454895),cljs.core.name(kb),new cljs.core.Keyword(null,"days","days",-1394072564),(total_days - d)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(all_proxies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kb], null))], 0)),new cljs.core.Keyword(null,"adjdur","adjdur",-1939650640),cljs.core.str),jasminegui$var$iter__51326(cljs.core.rest(s__51327__$2)));
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__51324_51412,G__51325_51413) : re_frame.core.reg_sub.call(null,G__51324_51412,G__51325_51413));
jasminegui.var$.nav_var_bar = (function jasminegui$var$nav_var_bar(){
var active_var = cljs.core.deref((function (){var G__51336 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-var","active-var",-1787478523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51336) : re_frame.core.subscribe.call(null,G__51336));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"class","class",-2030961996),"leftnavbar",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$var$nav_var_bar_$_iter__51337(s__51338){
return (new cljs.core.LazySeq(null,(function (){
var s__51338__$1 = s__51338;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51338__$1);
if(temp__5735__auto__){
var s__51338__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51338__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51338__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51340 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51339 = (0);
while(true){
if((i__51339 < size__4528__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__51339);
cljs.core.chunk_append(b__51340,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-primary btn-block",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_var,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?" active":null)].join(''),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__51339,item,c__4527__auto__,size__4528__auto__,b__51340,s__51338__$2,temp__5735__auto__,active_var){
return (function (){
var G__51341 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-var","active-var",-1787478523),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51341) : re_frame.core.dispatch.call(null,G__51341));
});})(i__51339,item,c__4527__auto__,size__4528__auto__,b__51340,s__51338__$2,temp__5735__auto__,active_var))
], null));

var G__51422 = (i__51339 + (1));
i__51339 = G__51422;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51340),jasminegui$var$nav_var_bar_$_iter__51337(cljs.core.chunk_rest(s__51338__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51340),null);
}
} else {
var item = cljs.core.first(s__51338__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-primary btn-block",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_var,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?" active":null)].join(''),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__51338__$2,temp__5735__auto__,active_var){
return (function (){
var G__51342 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-var","active-var",-1787478523),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51342) : re_frame.core.dispatch.call(null,G__51342));
});})(item,s__51338__$2,temp__5735__auto__,active_var))
], null),jasminegui$var$nav_var_bar_$_iter__51337(cljs.core.rest(s__51338__$2)));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.deref((function (){var G__51343 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","portfolio-proxies","var/portfolio-proxies",155524858)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51343) : re_frame.core.subscribe.call(null,G__51343));
})()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Bond",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"bond",new cljs.core.Keyword(null,"width","width",-384071477),(150)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Days with data",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"days",new cljs.core.Keyword(null,"width","width",-384071477),(150)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Proxy",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"proxy",new cljs.core.Keyword(null,"width","width",-384071477),(150)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Adjust duration?",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"adjdur",new cljs.core.Keyword(null,"width","width",-384071477),(150)], null)], null),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),true,new cljs.core.Keyword(null,"sortable","sortable",2109633621),false,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),true,new cljs.core.Keyword(null,"defaultFilterMethod","defaultFilterMethod",-641971243),jasminegui.tables.case_insensitive_filter,new cljs.core.Keyword(null,"pageSize","pageSize",732080883),(25),new cljs.core.Keyword(null,"className","className",-1983287057),"-striped"], null)], null);
});
jasminegui.var$.var_table = (function jasminegui$var$var_table(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.deref((function (){var G__51344 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","table","var/table",-565547877)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51344) : re_frame.core.subscribe.call(null,G__51344));
})()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Period",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"id",new cljs.core.Keyword(null,"width","width",-384071477),(90)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Volatility",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"std",new cljs.core.Keyword(null,"width","width",-384071477),(90),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round1pc], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Index Beta",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"beta",new cljs.core.Keyword(null,"width","width",-384071477),(90),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round1], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Index R2",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"rsq",new cljs.core.Keyword(null,"width","width",-384071477),(90),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round0pc], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Header","Header",1255420133),"95% VaR",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"var95",new cljs.core.Keyword(null,"width","width",-384071477),(90),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round1pc], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Header","Header",1255420133),"99% VaR",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"var99",new cljs.core.Keyword(null,"width","width",-384071477),(90),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round1pc], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Max loss (*)",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"maxd",new cljs.core.Keyword(null,"width","width",-384071477),(90),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round1pc], null)], null),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),false,new cljs.core.Keyword(null,"sortable","sortable",2109633621),false,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false,new cljs.core.Keyword(null,"pageSize","pageSize",732080883),(6),new cljs.core.Keyword(null,"className","className",-1983287057),"-striped"], null)], null);
});
jasminegui.var$.standard_box_width = "800px";
jasminegui.var$.dropdown_width = "150px";
jasminegui.var$.var_table_view = (function jasminegui$var$var_table_view(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Backtested VaR",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.var$.var_table], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"(*) Max loss goes backwards in time hence can be smaller than VaR."], null)], null)], null);
});
jasminegui.var$.backtest_chart = (function jasminegui$var$backtest_chart(){
var dates = cljs.core.deref((function (){var G__51346 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","dates","var/dates",-1599746364)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51346) : re_frame.core.subscribe.call(null,G__51346));
})());
var data = cljs.core.deref((function (){var G__51347 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51347) : re_frame.core.subscribe.call(null,G__51347));
})());
var chart_period = cljs.core.deref((function (){var G__51348 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51348) : re_frame.core.subscribe.call(null,G__51348));
})());
var line = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51345_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__51345_SHARP_),chart_period);
}),jasminegui.static$.var_charts_choice_map));
var days = (function (){var G__51349 = (function (){var G__51350 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__51350) : line.call(null,G__51350));
})();
var G__51349__$1 = (((G__51349 instanceof cljs.core.Keyword))?G__51349.fqn:null);
switch (G__51349__$1) {
case "daily":
return ((function (){var G__51351 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__51351) : line.call(null,G__51351));
})() * (250));

break;
case "weekly":
return ((function (){var G__51352 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__51352) : line.call(null,G__51352));
})() * (52));

break;
case "monthly":
return ((function (){var G__51353 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__51353) : line.call(null,G__51353));
})() * (12));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51349__$1)].join('')));

}
})();
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Backtested portfolio value",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.charting.backtest_chart(cljs.core.take_last(days,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dates,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51354 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__51354) : line.call(null,G__51354));
})()], null))),cljs.core.take_last(days,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolio-value","portfolio-value",-1900674109),(function (){var G__51355 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__51355) : line.call(null,G__51355));
})()], null))),(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(jasminegui.var$.standard_box_width,(0),(3))) - (150)),(550))], null)], null)], null);
});
jasminegui.var$.histogram_chart = (function jasminegui$var$histogram_chart(){
var data = cljs.core.deref((function (){var G__51357 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51357) : re_frame.core.subscribe.call(null,G__51357));
})());
var chart_period = cljs.core.deref((function (){var G__51358 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51358) : re_frame.core.subscribe.call(null,G__51358));
})());
var line = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51356_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__51356_SHARP_),chart_period);
}),jasminegui.static$.var_charts_choice_map));
var days = (function (){var G__51359 = (function (){var G__51360 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__51360) : line.call(null,G__51360));
})();
var G__51359__$1 = (((G__51359 instanceof cljs.core.Keyword))?G__51359.fqn:null);
switch (G__51359__$1) {
case "daily":
return ((function (){var G__51361 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__51361) : line.call(null,G__51361));
})() * (250));

break;
case "weekly":
return ((function (){var G__51362 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__51362) : line.call(null,G__51362));
})() * (52));

break;
case "monthly":
return ((function (){var G__51363 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__51363) : line.call(null,G__51363));
})() * (12));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51359__$1)].join('')));

}
})();
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Return histogram",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.charting.return_histogram(cljs.core.take_last(days,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolio-returns","portfolio-returns",1969280703),(function (){var G__51364 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__51364) : line.call(null,G__51364));
})()], null))),(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(jasminegui.var$.standard_box_width,(0),(3))) - (150)),(550))], null)], null)], null);
});
jasminegui.var$.regression_chart = (function jasminegui$var$regression_chart(){
var data = cljs.core.deref((function (){var G__51366 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51366) : re_frame.core.subscribe.call(null,G__51366));
})());
var chart_period = cljs.core.deref((function (){var G__51367 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51367) : re_frame.core.subscribe.call(null,G__51367));
})());
var line = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51365_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__51365_SHARP_),chart_period);
}),jasminegui.static$.var_charts_choice_map));
var days = (function (){var G__51368 = (function (){var G__51369 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__51369) : line.call(null,G__51369));
})();
var G__51368__$1 = (((G__51368 instanceof cljs.core.Keyword))?G__51368.fqn:null);
switch (G__51368__$1) {
case "daily":
return ((function (){var G__51370 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__51370) : line.call(null,G__51370));
})() * (250));

break;
case "weekly":
return ((function (){var G__51371 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__51371) : line.call(null,G__51371));
})() * (52));

break;
case "monthly":
return ((function (){var G__51372 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__51372) : line.call(null,G__51372));
})() * (12));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51368__$1)].join('')));

}
})();
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Regression",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.charting.regression_output(cljs.core.take_last(days,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolio-returns","portfolio-returns",1969280703),(function (){var G__51373 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__51373) : line.call(null,G__51373));
})()], null))),cljs.core.take_last(days,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"benchmark-returns","benchmark-returns",-1631663598),(function (){var G__51374 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__51374) : line.call(null,G__51374));
})()], null))),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"regression","regression",-431327125),(function (){var G__51375 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__51375) : line.call(null,G__51375));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),(function (){var G__51376 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__51376) : line.call(null,G__51376));
})()))?new cljs.core.Keyword(null,"alpha-3y","alpha-3y",-1942119421):new cljs.core.Keyword(null,"alpha-1y","alpha-1y",-1600722615))], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"regression","regression",-431327125),(function (){var G__51377 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__51377) : line.call(null,G__51377));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),(function (){var G__51378 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__51378) : line.call(null,G__51378));
})()))?new cljs.core.Keyword(null,"beta-3y","beta-3y",1009686145):new cljs.core.Keyword(null,"beta-1y","beta-1y",-1749293921))], null)),(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(jasminegui.var$.standard_box_width,(0),(3))) - (150)),(550))], null)], null)], null);
});
jasminegui.var$.var_controller = (function jasminegui$var$var_controller(){
var portfolio_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$var$var_controller_$_iter__51381(s__51382){
return (new cljs.core.LazySeq(null,(function (){
var s__51382__$1 = s__51382;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51382__$1);
if(temp__5735__auto__){
var s__51382__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51382__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51382__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51384 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51383 = (0);
while(true){
if((i__51383 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__51383);
cljs.core.chunk_append(b__51384,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null));

var G__51427 = (i__51383 + (1));
i__51383 = G__51427;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51384),jasminegui$var$var_controller_$_iter__51381(cljs.core.chunk_rest(s__51382__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51384),null);
}
} else {
var p = cljs.core.first(s__51382__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null),jasminegui$var$var_controller_$_iter__51381(cljs.core.rest(s__51382__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref((function (){var G__51385 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51385) : re_frame.core.subscribe.call(null,G__51385));
})()));
})());
var portfolio = (function (){var G__51386 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","portfolio","var/portfolio",957702515)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51386) : re_frame.core.subscribe.call(null,G__51386));
})();
var chart_period = (function (){var G__51387 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51387) : re_frame.core.subscribe.call(null,G__51387));
})();
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Display selection",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 20px 0px 0px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Portfolio:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.var$.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),portfolio,new cljs.core.Keyword(null,"choices","choices",1385611597),portfolio_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__51379_SHARP_){
var G__51388 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-var","get-portfolio-var",1001711662),p1__51379_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51388) : re_frame.core.dispatch.call(null,G__51388));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"20px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Chart period:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.var$.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),chart_period,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.var_charts_choice_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__51380_SHARP_){
var G__51389 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),p1__51380_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51389) : re_frame.core.dispatch.call(null,G__51389));
})], null)], null)], null)], null)], null);
});
jasminegui.var$.proxy_table = (function jasminegui$var$proxy_table(){
var data = cljs.core.deref((function (){var G__51390 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","proxies","var/proxies",-1487962738)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51390) : re_frame.core.subscribe.call(null,G__51390));
})());
var display = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bond","bond",1505454895),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$var$proxy_table_$_iter__51391(s__51392){
return (new cljs.core.LazySeq(null,(function (){
var s__51392__$1 = s__51392;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51392__$1);
if(temp__5735__auto__){
var s__51392__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51392__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51392__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51394 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51393 = (0);
while(true){
if((i__51393 < size__4528__auto__)){
var vec__51395 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__51393);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51395,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51395,(1),null);
cljs.core.chunk_append(b__51394,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bond","bond",1505454895),k], null),v], 0)),new cljs.core.Keyword(null,"adjdur","adjdur",-1939650640),cljs.core.str));

var G__51428 = (i__51393 + (1));
i__51393 = G__51428;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51394),jasminegui$var$proxy_table_$_iter__51391(cljs.core.chunk_rest(s__51392__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51394),null);
}
} else {
var vec__51398 = cljs.core.first(s__51392__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51398,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51398,(1),null);
return cljs.core.cons(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bond","bond",1505454895),k], null),v], 0)),new cljs.core.Keyword(null,"adjdur","adjdur",-1939650640),cljs.core.str),jasminegui$var$proxy_table_$_iter__51391(cljs.core.rest(s__51392__$2)));
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
var active_var = cljs.core.deref((function (){var G__51401 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-var","active-var",-1787478523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51401) : re_frame.core.subscribe.call(null,G__51401));
})());
window.scrollTo((0),(0));

var G__51402 = active_var;
var G__51402__$1 = (((G__51402 instanceof cljs.core.Keyword))?G__51402.fqn:null);
switch (G__51402__$1) {
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
