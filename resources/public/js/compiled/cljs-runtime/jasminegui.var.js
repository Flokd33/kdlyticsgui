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
var G__47226_47308 = new cljs.core.Keyword("var","table","var/table",-565547877);
var G__47227_47309 = (function (db){
var regression = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword(null,"regression","regression",-431327125)], null));
var risk = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword(null,"risk","risk",2004621358)], null));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"Daily 1y",new cljs.core.Keyword(null,"std","std",2037001211),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"sd-1y","sd-1y",845748778)], null)),new cljs.core.Keyword(null,"beta","beta",455605892),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"beta-1y","beta-1y",-1749293921)], null)),new cljs.core.Keyword(null,"rsq","rsq",243329956),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"rsq-1y","rsq-1y",1982283506)], null)),new cljs.core.Keyword(null,"var95","var95",1809624563),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"var-1y-95pct","var-1y-95pct",999893793)], null)),new cljs.core.Keyword(null,"var99","var99",232222560),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"var-1y-99pct","var-1y-99pct",-551166536)], null)),new cljs.core.Keyword(null,"maxd","maxd",1164559820),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"maxd-1y","maxd-1y",-1112268542)], null))], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"Daily 3y",new cljs.core.Keyword(null,"std","std",2037001211),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"sd-3y","sd-3y",1210482211)], null)),new cljs.core.Keyword(null,"beta","beta",455605892),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"beta-3y","beta-3y",1009686145)], null)),new cljs.core.Keyword(null,"rsq","rsq",243329956),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"rsq-3y","rsq-3y",1277484017)], null)),new cljs.core.Keyword(null,"var95","var95",1809624563),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"var-3y-95pct","var-3y-95pct",1910277682)], null)),new cljs.core.Keyword(null,"var99","var99",232222560),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"var-3y-99pct","var-3y-99pct",264699379)], null)),new cljs.core.Keyword(null,"maxd","maxd",1164559820),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"maxd-3y","maxd-3y",-2129552400)], null))], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"Weekly 1y",new cljs.core.Keyword(null,"std","std",2037001211),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"sd-1y","sd-1y",845748778)], null)),new cljs.core.Keyword(null,"beta","beta",455605892),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"beta-1y","beta-1y",-1749293921)], null)),new cljs.core.Keyword(null,"rsq","rsq",243329956),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"rsq-1y","rsq-1y",1982283506)], null)),new cljs.core.Keyword(null,"var95","var95",1809624563),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"var-1y-95pct","var-1y-95pct",999893793)], null)),new cljs.core.Keyword(null,"var99","var99",232222560),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"var-1y-99pct","var-1y-99pct",-551166536)], null)),new cljs.core.Keyword(null,"maxd","maxd",1164559820),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"maxd-1y","maxd-1y",-1112268542)], null))], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"Weekly 3y",new cljs.core.Keyword(null,"std","std",2037001211),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"sd-3y","sd-3y",1210482211)], null)),new cljs.core.Keyword(null,"beta","beta",455605892),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"beta-3y","beta-3y",1009686145)], null)),new cljs.core.Keyword(null,"rsq","rsq",243329956),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"rsq-3y","rsq-3y",1277484017)], null)),new cljs.core.Keyword(null,"var95","var95",1809624563),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"var-3y-95pct","var-3y-95pct",1910277682)], null)),new cljs.core.Keyword(null,"var99","var99",232222560),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"var-3y-99pct","var-3y-99pct",264699379)], null)),new cljs.core.Keyword(null,"maxd","maxd",1164559820),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"maxd-3y","maxd-3y",-2129552400)], null))], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"Monthly 1y",new cljs.core.Keyword(null,"std","std",2037001211),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"sd-1y","sd-1y",845748778)], null)),new cljs.core.Keyword(null,"beta","beta",455605892),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"beta-1y","beta-1y",-1749293921)], null)),new cljs.core.Keyword(null,"rsq","rsq",243329956),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"rsq-1y","rsq-1y",1982283506)], null)),new cljs.core.Keyword(null,"var95","var95",1809624563),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"var-1y-95pct","var-1y-95pct",999893793)], null)),new cljs.core.Keyword(null,"var99","var99",232222560),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"var-1y-99pct","var-1y-99pct",-551166536)], null)),new cljs.core.Keyword(null,"maxd","maxd",1164559820),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"maxd-1y","maxd-1y",-1112268542)], null))], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"Monthly 3y",new cljs.core.Keyword(null,"std","std",2037001211),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"sd-3y","sd-3y",1210482211)], null)),new cljs.core.Keyword(null,"beta","beta",455605892),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"beta-3y","beta-3y",1009686145)], null)),new cljs.core.Keyword(null,"rsq","rsq",243329956),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"rsq-3y","rsq-3y",1277484017)], null)),new cljs.core.Keyword(null,"var95","var95",1809624563),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"var-3y-95pct","var-3y-95pct",1910277682)], null)),new cljs.core.Keyword(null,"var99","var99",232222560),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"var-3y-99pct","var-3y-99pct",264699379)], null)),new cljs.core.Keyword(null,"maxd","maxd",1164559820),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"maxd-3y","maxd-3y",-2129552400)], null))], null)], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__47226_47308,G__47227_47309) : re_frame.core.reg_sub.call(null,G__47226_47308,G__47227_47309));
var G__47229_47317 = new cljs.core.Keyword("var","portfolio-proxies","var/portfolio-proxies",155524858);
var G__47230_47318 = (function (db){
var all_proxies = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","proxies","var/proxies",-1487962738)], null));
var days_with_data = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword(null,"days-with-data","days-with-data",-737758801)], null));
var total_days = cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword(null,"daily","daily",-697831483)], null)));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$var$iter__47231(s__47232){
return (new cljs.core.LazySeq(null,(function (){
var s__47232__$1 = s__47232;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47232__$1);
if(temp__5735__auto__){
var s__47232__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47232__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47232__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47234 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47233 = (0);
while(true){
if((i__47233 < size__4528__auto__)){
var vec__47235 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__47233);
var kb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47235,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47235,(1),null);
cljs.core.chunk_append(b__47234,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bond","bond",1505454895),cljs.core.name(kb),new cljs.core.Keyword(null,"days","days",-1394072564),(total_days - d)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(all_proxies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kb], null))], 0)),new cljs.core.Keyword(null,"adjdur","adjdur",-1939650640),cljs.core.str));

var G__47323 = (i__47233 + (1));
i__47233 = G__47323;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47234),jasminegui$var$iter__47231(cljs.core.chunk_rest(s__47232__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47234),null);
}
} else {
var vec__47238 = cljs.core.first(s__47232__$2);
var kb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47238,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47238,(1),null);
return cljs.core.cons(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bond","bond",1505454895),cljs.core.name(kb),new cljs.core.Keyword(null,"days","days",-1394072564),(total_days - d)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(all_proxies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kb], null))], 0)),new cljs.core.Keyword(null,"adjdur","adjdur",-1939650640),cljs.core.str),jasminegui$var$iter__47231(cljs.core.rest(s__47232__$2)));
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__47229_47317,G__47230_47318) : re_frame.core.reg_sub.call(null,G__47229_47317,G__47230_47318));
jasminegui.var$.nav_var_bar = (function jasminegui$var$nav_var_bar(){
var active_var = cljs.core.deref((function (){var G__47241 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-var","active-var",-1787478523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47241) : re_frame.core.subscribe.call(null,G__47241));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"class","class",-2030961996),"leftnavbar",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$var$nav_var_bar_$_iter__47242(s__47243){
return (new cljs.core.LazySeq(null,(function (){
var s__47243__$1 = s__47243;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47243__$1);
if(temp__5735__auto__){
var s__47243__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47243__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47243__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47245 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47244 = (0);
while(true){
if((i__47244 < size__4528__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__47244);
cljs.core.chunk_append(b__47245,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-primary btn-block",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_var,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?" active":null)].join(''),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__47244,item,c__4527__auto__,size__4528__auto__,b__47245,s__47243__$2,temp__5735__auto__,active_var){
return (function (){
var G__47246 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-var","active-var",-1787478523),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47246) : re_frame.core.dispatch.call(null,G__47246));
});})(i__47244,item,c__4527__auto__,size__4528__auto__,b__47245,s__47243__$2,temp__5735__auto__,active_var))
], null));

var G__47327 = (i__47244 + (1));
i__47244 = G__47327;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47245),jasminegui$var$nav_var_bar_$_iter__47242(cljs.core.chunk_rest(s__47243__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47245),null);
}
} else {
var item = cljs.core.first(s__47243__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-primary btn-block",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_var,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?" active":null)].join(''),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__47243__$2,temp__5735__auto__,active_var){
return (function (){
var G__47247 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-var","active-var",-1787478523),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47247) : re_frame.core.dispatch.call(null,G__47247));
});})(item,s__47243__$2,temp__5735__auto__,active_var))
], null),jasminegui$var$nav_var_bar_$_iter__47242(cljs.core.rest(s__47243__$2)));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.deref((function (){var G__47248 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","portfolio-proxies","var/portfolio-proxies",155524858)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47248) : re_frame.core.subscribe.call(null,G__47248));
})()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Bond",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"bond",new cljs.core.Keyword(null,"width","width",-384071477),(150)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Days with data",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"days",new cljs.core.Keyword(null,"width","width",-384071477),(150)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Proxy",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"proxy",new cljs.core.Keyword(null,"width","width",-384071477),(150)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Adjust duration?",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"adjdur",new cljs.core.Keyword(null,"width","width",-384071477),(150)], null)], null),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),true,new cljs.core.Keyword(null,"sortable","sortable",2109633621),false,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),true,new cljs.core.Keyword(null,"defaultFilterMethod","defaultFilterMethod",-641971243),jasminegui.tables.case_insensitive_filter,new cljs.core.Keyword(null,"pageSize","pageSize",732080883),(25),new cljs.core.Keyword(null,"className","className",-1983287057),"-striped"], null)], null);
});
jasminegui.var$.var_table = (function jasminegui$var$var_table(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.deref((function (){var G__47249 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","table","var/table",-565547877)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47249) : re_frame.core.subscribe.call(null,G__47249));
})()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Period",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"id",new cljs.core.Keyword(null,"width","width",-384071477),(90)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Volatility",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"std",new cljs.core.Keyword(null,"width","width",-384071477),(90),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round1pc], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Index Beta",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"beta",new cljs.core.Keyword(null,"width","width",-384071477),(90),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round1], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Index R2",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"rsq",new cljs.core.Keyword(null,"width","width",-384071477),(90),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round0pc], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Header","Header",1255420133),"95% VaR",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"var95",new cljs.core.Keyword(null,"width","width",-384071477),(90),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round1pc], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Header","Header",1255420133),"99% VaR",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"var99",new cljs.core.Keyword(null,"width","width",-384071477),(90),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round1pc], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Max loss (*)",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"maxd",new cljs.core.Keyword(null,"width","width",-384071477),(90),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round1pc], null)], null),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),false,new cljs.core.Keyword(null,"sortable","sortable",2109633621),false,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false,new cljs.core.Keyword(null,"pageSize","pageSize",732080883),(6),new cljs.core.Keyword(null,"className","className",-1983287057),"-striped"], null)], null);
});
jasminegui.var$.standard_box_width = "800px";
jasminegui.var$.dropdown_width = "150px";
jasminegui.var$.var_table_view = (function jasminegui$var$var_table_view(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Backtested VaR",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.var$.var_table], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"(*) Max loss goes backwards in time hence can be smaller than VaR."], null)], null)], null);
});
jasminegui.var$.backtest_chart = (function jasminegui$var$backtest_chart(){
var dates = cljs.core.deref((function (){var G__47251 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","dates","var/dates",-1599746364)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47251) : re_frame.core.subscribe.call(null,G__47251));
})());
var data = cljs.core.deref((function (){var G__47252 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47252) : re_frame.core.subscribe.call(null,G__47252));
})());
var chart_period = cljs.core.deref((function (){var G__47253 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47253) : re_frame.core.subscribe.call(null,G__47253));
})());
var line = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__47250_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__47250_SHARP_),chart_period);
}),jasminegui.static$.var_charts_choice_map));
var days = (function (){var G__47254 = (function (){var G__47255 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47255) : line.call(null,G__47255));
})();
var G__47254__$1 = (((G__47254 instanceof cljs.core.Keyword))?G__47254.fqn:null);
switch (G__47254__$1) {
case "daily":
return ((function (){var G__47256 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47256) : line.call(null,G__47256));
})() * (250));

break;
case "weekly":
return ((function (){var G__47257 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47257) : line.call(null,G__47257));
})() * (52));

break;
case "monthly":
return ((function (){var G__47258 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47258) : line.call(null,G__47258));
})() * (12));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47254__$1)].join('')));

}
})();
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Backtested portfolio value",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.charting.backtest_chart(cljs.core.take_last(days,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dates,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47259 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47259) : line.call(null,G__47259));
})()], null))),cljs.core.take_last(days,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolio-value","portfolio-value",-1900674109),(function (){var G__47260 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47260) : line.call(null,G__47260));
})()], null))),(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(jasminegui.var$.standard_box_width,(0),(3))) - (150)),(550))], null)], null)], null);
});
jasminegui.var$.histogram_chart = (function jasminegui$var$histogram_chart(){
var data = cljs.core.deref((function (){var G__47262 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47262) : re_frame.core.subscribe.call(null,G__47262));
})());
var chart_period = cljs.core.deref((function (){var G__47263 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47263) : re_frame.core.subscribe.call(null,G__47263));
})());
var line = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__47261_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__47261_SHARP_),chart_period);
}),jasminegui.static$.var_charts_choice_map));
var days = (function (){var G__47264 = (function (){var G__47265 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47265) : line.call(null,G__47265));
})();
var G__47264__$1 = (((G__47264 instanceof cljs.core.Keyword))?G__47264.fqn:null);
switch (G__47264__$1) {
case "daily":
return ((function (){var G__47266 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47266) : line.call(null,G__47266));
})() * (250));

break;
case "weekly":
return ((function (){var G__47267 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47267) : line.call(null,G__47267));
})() * (52));

break;
case "monthly":
return ((function (){var G__47268 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47268) : line.call(null,G__47268));
})() * (12));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47264__$1)].join('')));

}
})();
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Return histogram",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.charting.return_histogram(cljs.core.take_last(days,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolio-returns","portfolio-returns",1969280703),(function (){var G__47269 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47269) : line.call(null,G__47269));
})()], null))),(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(jasminegui.var$.standard_box_width,(0),(3))) - (150)),(550))], null)], null)], null);
});
jasminegui.var$.regression_chart = (function jasminegui$var$regression_chart(){
var data = cljs.core.deref((function (){var G__47271 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47271) : re_frame.core.subscribe.call(null,G__47271));
})());
var chart_period = cljs.core.deref((function (){var G__47272 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47272) : re_frame.core.subscribe.call(null,G__47272));
})());
var line = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__47270_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__47270_SHARP_),chart_period);
}),jasminegui.static$.var_charts_choice_map));
var days = (function (){var G__47273 = (function (){var G__47274 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47274) : line.call(null,G__47274));
})();
var G__47273__$1 = (((G__47273 instanceof cljs.core.Keyword))?G__47273.fqn:null);
switch (G__47273__$1) {
case "daily":
return ((function (){var G__47275 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47275) : line.call(null,G__47275));
})() * (250));

break;
case "weekly":
return ((function (){var G__47276 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47276) : line.call(null,G__47276));
})() * (52));

break;
case "monthly":
return ((function (){var G__47277 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47277) : line.call(null,G__47277));
})() * (12));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47273__$1)].join('')));

}
})();
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Regression",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.charting.regression_output(cljs.core.take_last(days,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolio-returns","portfolio-returns",1969280703),(function (){var G__47278 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47278) : line.call(null,G__47278));
})()], null))),cljs.core.take_last(days,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"benchmark-returns","benchmark-returns",-1631663598),(function (){var G__47279 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47279) : line.call(null,G__47279));
})()], null))),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"regression","regression",-431327125),(function (){var G__47280 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47280) : line.call(null,G__47280));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),(function (){var G__47281 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47281) : line.call(null,G__47281));
})()))?new cljs.core.Keyword(null,"alpha-3y","alpha-3y",-1942119421):new cljs.core.Keyword(null,"alpha-1y","alpha-1y",-1600722615))], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"regression","regression",-431327125),(function (){var G__47282 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47282) : line.call(null,G__47282));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),(function (){var G__47283 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47283) : line.call(null,G__47283));
})()))?new cljs.core.Keyword(null,"beta-3y","beta-3y",1009686145):new cljs.core.Keyword(null,"beta-1y","beta-1y",-1749293921))], null)),(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(jasminegui.var$.standard_box_width,(0),(3))) - (150)),(550))], null)], null)], null);
});
jasminegui.var$.var_controller = (function jasminegui$var$var_controller(){
var portfolio_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$var$var_controller_$_iter__47286(s__47287){
return (new cljs.core.LazySeq(null,(function (){
var s__47287__$1 = s__47287;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47287__$1);
if(temp__5735__auto__){
var s__47287__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47287__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47287__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47289 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47288 = (0);
while(true){
if((i__47288 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__47288);
cljs.core.chunk_append(b__47289,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null));

var G__47364 = (i__47288 + (1));
i__47288 = G__47364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47289),jasminegui$var$var_controller_$_iter__47286(cljs.core.chunk_rest(s__47287__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47289),null);
}
} else {
var p = cljs.core.first(s__47287__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null),jasminegui$var$var_controller_$_iter__47286(cljs.core.rest(s__47287__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref((function (){var G__47290 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47290) : re_frame.core.subscribe.call(null,G__47290));
})()));
})());
var portfolio = (function (){var G__47291 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","portfolio","var/portfolio",957702515)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47291) : re_frame.core.subscribe.call(null,G__47291));
})();
var chart_period = (function (){var G__47292 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47292) : re_frame.core.subscribe.call(null,G__47292));
})();
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Display selection",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 20px 0px 0px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Portfolio:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.var$.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),portfolio,new cljs.core.Keyword(null,"choices","choices",1385611597),portfolio_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__47284_SHARP_){
var G__47293 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-var","get-portfolio-var",1001711662),p1__47284_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47293) : re_frame.core.dispatch.call(null,G__47293));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"20px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Chart period:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.var$.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),chart_period,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.var_charts_choice_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__47285_SHARP_){
var G__47294 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),p1__47285_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47294) : re_frame.core.dispatch.call(null,G__47294));
})], null)], null)], null)], null)], null);
});
jasminegui.var$.proxy_table = (function jasminegui$var$proxy_table(){
var data = cljs.core.deref((function (){var G__47295 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","proxies","var/proxies",-1487962738)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47295) : re_frame.core.subscribe.call(null,G__47295));
})());
var display = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bond","bond",1505454895),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$var$proxy_table_$_iter__47296(s__47297){
return (new cljs.core.LazySeq(null,(function (){
var s__47297__$1 = s__47297;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47297__$1);
if(temp__5735__auto__){
var s__47297__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47297__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47297__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47299 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47298 = (0);
while(true){
if((i__47298 < size__4528__auto__)){
var vec__47300 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__47298);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47300,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47300,(1),null);
cljs.core.chunk_append(b__47299,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bond","bond",1505454895),k], null),v], 0)),new cljs.core.Keyword(null,"adjdur","adjdur",-1939650640),cljs.core.str));

var G__47365 = (i__47298 + (1));
i__47298 = G__47365;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47299),jasminegui$var$proxy_table_$_iter__47296(cljs.core.chunk_rest(s__47297__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47299),null);
}
} else {
var vec__47303 = cljs.core.first(s__47297__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47303,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47303,(1),null);
return cljs.core.cons(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bond","bond",1505454895),k], null),v], 0)),new cljs.core.Keyword(null,"adjdur","adjdur",-1939650640),cljs.core.str),jasminegui$var$proxy_table_$_iter__47296(cljs.core.rest(s__47297__$2)));
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
var active_var = cljs.core.deref((function (){var G__47306 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-var","active-var",-1787478523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47306) : re_frame.core.subscribe.call(null,G__47306));
})());
window.scrollTo((0),(0));

var G__47307 = active_var;
var G__47307__$1 = (((G__47307 instanceof cljs.core.Keyword))?G__47307.fqn:null);
switch (G__47307__$1) {
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
