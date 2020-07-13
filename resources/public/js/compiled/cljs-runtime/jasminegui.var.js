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
var G__47146_47282 = new cljs.core.Keyword("var","table","var/table",-565547877);
var G__47147_47283 = (function (db){
var regression = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword(null,"regression","regression",-431327125)], null));
var risk = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword(null,"risk","risk",2004621358)], null));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$var$iter__47148(s__47149){
return (new cljs.core.LazySeq(null,(function (){
var s__47149__$1 = s__47149;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47149__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var d = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__47149__$1,d,xs__6292__auto__,temp__5735__auto__,regression,risk,G__47146_47282){
return (function jasminegui$var$iter__47148_$_iter__47150(s__47151){
return (new cljs.core.LazySeq(null,((function (s__47149__$1,d,xs__6292__auto__,temp__5735__auto__,regression,risk,G__47146_47282){
return (function (){
var s__47151__$1 = s__47151;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__47151__$1);
if(temp__5735__auto____$1){
var s__47151__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47151__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47151__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47153 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47152 = (0);
while(true){
if((i__47152 < size__4528__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__47152);
cljs.core.chunk_append(b__47153,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),[clojure.string.capitalize(cljs.core.name(d))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join(''),new cljs.core.Keyword(null,"std","std",2037001211),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["sd-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join(''))], null)),new cljs.core.Keyword(null,"beta","beta",455605892),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["beta-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join(''))], null)),new cljs.core.Keyword(null,"rsq","rsq",243329956),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["rsq-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join(''))], null)),new cljs.core.Keyword(null,"var95","var95",1809624563),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["var-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"-95pct"].join(''))], null)),new cljs.core.Keyword(null,"var99","var99",232222560),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["var-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"-99pct"].join(''))], null)),new cljs.core.Keyword(null,"maxd","maxd",1164559820),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["maxd-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join(''))], null))], null));

var G__47284 = (i__47152 + (1));
i__47152 = G__47284;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47153),jasminegui$var$iter__47148_$_iter__47150(cljs.core.chunk_rest(s__47151__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47153),null);
}
} else {
var y = cljs.core.first(s__47151__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),[clojure.string.capitalize(cljs.core.name(d))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join(''),new cljs.core.Keyword(null,"std","std",2037001211),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["sd-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join(''))], null)),new cljs.core.Keyword(null,"beta","beta",455605892),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["beta-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join(''))], null)),new cljs.core.Keyword(null,"rsq","rsq",243329956),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(regression,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["rsq-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join(''))], null)),new cljs.core.Keyword(null,"var95","var95",1809624563),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["var-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"-95pct"].join(''))], null)),new cljs.core.Keyword(null,"var99","var99",232222560),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["var-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"-99pct"].join(''))], null)),new cljs.core.Keyword(null,"maxd","maxd",1164559820),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(risk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["maxd-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join(''))], null))], null),jasminegui$var$iter__47148_$_iter__47150(cljs.core.rest(s__47151__$2)));
}
} else {
return null;
}
break;
}
});})(s__47149__$1,d,xs__6292__auto__,temp__5735__auto__,regression,risk,G__47146_47282))
,null,null));
});})(s__47149__$1,d,xs__6292__auto__,temp__5735__auto__,regression,risk,G__47146_47282))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1y","3y"], null)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,jasminegui$var$iter__47148(cljs.core.rest(s__47149__$1)));
} else {
var G__47285 = cljs.core.rest(s__47149__$1);
s__47149__$1 = G__47285;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"monthly","monthly",1596693261)], null));
})());
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__47146_47282,G__47147_47283) : re_frame.core.reg_sub.call(null,G__47146_47282,G__47147_47283));
var G__47154_47286 = new cljs.core.Keyword("var","portfolio-proxies","var/portfolio-proxies",155524858);
var G__47155_47287 = (function (db){
var all_proxies = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","proxies","var/proxies",-1487962738)], null));
var days_with_data = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310),new cljs.core.Keyword(null,"days-with-data","days-with-data",-737758801)], null));
var total_days = cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","dates","var/dates",-1599746364),new cljs.core.Keyword(null,"daily","daily",-697831483)], null)));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$var$iter__47156(s__47157){
return (new cljs.core.LazySeq(null,(function (){
var s__47157__$1 = s__47157;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47157__$1);
if(temp__5735__auto__){
var s__47157__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47157__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47157__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47159 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47158 = (0);
while(true){
if((i__47158 < size__4528__auto__)){
var vec__47160 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__47158);
var kb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47160,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47160,(1),null);
cljs.core.chunk_append(b__47159,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bond","bond",1505454895),cljs.core.name(kb),new cljs.core.Keyword(null,"days","days",-1394072564),(total_days - d)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(all_proxies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kb], null))], 0)),new cljs.core.Keyword(null,"adjdur","adjdur",-1939650640),cljs.core.str));

var G__47288 = (i__47158 + (1));
i__47158 = G__47288;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47159),jasminegui$var$iter__47156(cljs.core.chunk_rest(s__47157__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47159),null);
}
} else {
var vec__47163 = cljs.core.first(s__47157__$2);
var kb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47163,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47163,(1),null);
return cljs.core.cons(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bond","bond",1505454895),cljs.core.name(kb),new cljs.core.Keyword(null,"days","days",-1394072564),(total_days - d)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(all_proxies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kb], null))], 0)),new cljs.core.Keyword(null,"adjdur","adjdur",-1939650640),cljs.core.str),jasminegui$var$iter__47156(cljs.core.rest(s__47157__$2)));
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__47154_47286,G__47155_47287) : re_frame.core.reg_sub.call(null,G__47154_47286,G__47155_47287));
jasminegui.var$.nav_var_bar = (function jasminegui$var$nav_var_bar(){
var active_var = cljs.core.deref((function (){var G__47166 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","active-var","navigation/active-var",39797785)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47166) : re_frame.core.subscribe.call(null,G__47166));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"class","class",-2030961996),"leftnavbar",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$var$nav_var_bar_$_iter__47167(s__47168){
return (new cljs.core.LazySeq(null,(function (){
var s__47168__$1 = s__47168;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47168__$1);
if(temp__5735__auto__){
var s__47168__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47168__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47168__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47170 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47169 = (0);
while(true){
if((i__47169 < size__4528__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__47169);
cljs.core.chunk_append(b__47170,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-primary btn-block",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_var,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?" active":null)].join(''),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__47169,item,c__4527__auto__,size__4528__auto__,b__47170,s__47168__$2,temp__5735__auto__,active_var){
return (function (){
var G__47171 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","active-var","navigation/active-var",39797785),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47171) : re_frame.core.dispatch.call(null,G__47171));
});})(i__47169,item,c__4527__auto__,size__4528__auto__,b__47170,s__47168__$2,temp__5735__auto__,active_var))
], null));

var G__47289 = (i__47169 + (1));
i__47169 = G__47289;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47170),jasminegui$var$nav_var_bar_$_iter__47167(cljs.core.chunk_rest(s__47168__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47170),null);
}
} else {
var item = cljs.core.first(s__47168__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-primary btn-block",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_var,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?" active":null)].join(''),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__47168__$2,temp__5735__auto__,active_var){
return (function (){
var G__47172 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","active-var","navigation/active-var",39797785),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47172) : re_frame.core.dispatch.call(null,G__47172));
});})(item,s__47168__$2,temp__5735__auto__,active_var))
], null),jasminegui$var$nav_var_bar_$_iter__47167(cljs.core.rest(s__47168__$2)));
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
jasminegui.var$.portfolio_proxy_table = (function jasminegui$var$portfolio_proxy_table(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.deref((function (){var G__47173 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","portfolio-proxies","var/portfolio-proxies",155524858)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47173) : re_frame.core.subscribe.call(null,G__47173));
})()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Bond",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"bond",new cljs.core.Keyword(null,"width","width",-384071477),(150)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Days with data",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"days",new cljs.core.Keyword(null,"width","width",-384071477),(150)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Proxy",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"proxy",new cljs.core.Keyword(null,"width","width",-384071477),(150)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Adjust duration?",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"adjdur",new cljs.core.Keyword(null,"width","width",-384071477),(150)], null)], null),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),true,new cljs.core.Keyword(null,"sortable","sortable",2109633621),false,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),true,new cljs.core.Keyword(null,"defaultFilterMethod","defaultFilterMethod",-641971243),jasminegui.tables.case_insensitive_filter,new cljs.core.Keyword(null,"pageSize","pageSize",732080883),(25),new cljs.core.Keyword(null,"className","className",-1983287057),"-striped"], null)], null);
});
jasminegui.var$.var_table = (function jasminegui$var$var_table(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.deref((function (){var G__47174 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","table","var/table",-565547877)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47174) : re_frame.core.subscribe.call(null,G__47174));
})()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Period",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"id",new cljs.core.Keyword(null,"width","width",-384071477),(90)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Volatility",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"std",new cljs.core.Keyword(null,"width","width",-384071477),(90),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round1pc], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Index Beta",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"beta",new cljs.core.Keyword(null,"width","width",-384071477),(90),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round1], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Index R2",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"rsq",new cljs.core.Keyword(null,"width","width",-384071477),(90),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round0pc], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Header","Header",1255420133),"95% VaR",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"var95",new cljs.core.Keyword(null,"width","width",-384071477),(90),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round1pc], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Header","Header",1255420133),"99% VaR",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"var99",new cljs.core.Keyword(null,"width","width",-384071477),(90),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round1pc], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Max loss (*)",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"maxd",new cljs.core.Keyword(null,"width","width",-384071477),(90),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round1pc], null)], null),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),false,new cljs.core.Keyword(null,"sortable","sortable",2109633621),false,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false,new cljs.core.Keyword(null,"pageSize","pageSize",732080883),(6),new cljs.core.Keyword(null,"className","className",-1983287057),"-striped"], null)], null);
});
jasminegui.var$.standard_box_width = "800px";
jasminegui.var$.dropdown_width = "150px";
jasminegui.var$.var_table_view = (function jasminegui$var$var_table_view(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Backtested VaR",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.var$.var_table], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"(*) Max loss goes backwards in time hence can be smaller than VaR."], null)], null)], null);
});
jasminegui.var$.backtest_chart = (function jasminegui$var$backtest_chart(){
var dates = cljs.core.deref((function (){var G__47176 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","dates","var/dates",-1599746364)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47176) : re_frame.core.subscribe.call(null,G__47176));
})());
var data = cljs.core.deref((function (){var G__47177 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47177) : re_frame.core.subscribe.call(null,G__47177));
})());
var chart_period = cljs.core.deref((function (){var G__47178 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47178) : re_frame.core.subscribe.call(null,G__47178));
})());
var line = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__47175_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__47175_SHARP_),chart_period);
}),jasminegui.static$.var_charts_choice_map));
var days = (function (){var G__47179 = (function (){var G__47180 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47180) : line.call(null,G__47180));
})();
var G__47179__$1 = (((G__47179 instanceof cljs.core.Keyword))?G__47179.fqn:null);
switch (G__47179__$1) {
case "daily":
return ((function (){var G__47181 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47181) : line.call(null,G__47181));
})() * (250));

break;
case "weekly":
return ((function (){var G__47182 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47182) : line.call(null,G__47182));
})() * (52));

break;
case "monthly":
return ((function (){var G__47183 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47183) : line.call(null,G__47183));
})() * (12));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47179__$1)].join('')));

}
})();
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Backtested portfolio value",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.charting.backtest_chart(cljs.core.take_last(days,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dates,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47184 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47184) : line.call(null,G__47184));
})()], null))),cljs.core.take_last(days,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolio-value","portfolio-value",-1900674109),(function (){var G__47187 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47187) : line.call(null,G__47187));
})()], null))),(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(jasminegui.var$.standard_box_width,(0),(3))) - (150)),(550))], null)], null)], null);
});
jasminegui.var$.histogram_chart = (function jasminegui$var$histogram_chart(){
var data = cljs.core.deref((function (){var G__47194 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47194) : re_frame.core.subscribe.call(null,G__47194));
})());
var chart_period = cljs.core.deref((function (){var G__47195 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47195) : re_frame.core.subscribe.call(null,G__47195));
})());
var line = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__47193_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__47193_SHARP_),chart_period);
}),jasminegui.static$.var_charts_choice_map));
var days = (function (){var G__47202 = (function (){var G__47204 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47204) : line.call(null,G__47204));
})();
var G__47202__$1 = (((G__47202 instanceof cljs.core.Keyword))?G__47202.fqn:null);
switch (G__47202__$1) {
case "daily":
return ((function (){var G__47205 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47205) : line.call(null,G__47205));
})() * (250));

break;
case "weekly":
return ((function (){var G__47206 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47206) : line.call(null,G__47206));
})() * (52));

break;
case "monthly":
return ((function (){var G__47207 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47207) : line.call(null,G__47207));
})() * (12));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47202__$1)].join('')));

}
})();
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Return histogram",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.charting.return_histogram(cljs.core.take_last(days,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolio-returns","portfolio-returns",1969280703),(function (){var G__47208 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47208) : line.call(null,G__47208));
})()], null))),(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(jasminegui.var$.standard_box_width,(0),(3))) - (150)),(550))], null)], null)], null);
});
jasminegui.var$.regression_chart = (function jasminegui$var$regression_chart(){
var data = cljs.core.deref((function (){var G__47217 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47217) : re_frame.core.subscribe.call(null,G__47217));
})());
var chart_period = cljs.core.deref((function (){var G__47218 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47218) : re_frame.core.subscribe.call(null,G__47218));
})());
var line = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__47216_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__47216_SHARP_),chart_period);
}),jasminegui.static$.var_charts_choice_map));
var days = (function (){var G__47219 = (function (){var G__47220 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47220) : line.call(null,G__47220));
})();
var G__47219__$1 = (((G__47219 instanceof cljs.core.Keyword))?G__47219.fqn:null);
switch (G__47219__$1) {
case "daily":
return ((function (){var G__47221 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47221) : line.call(null,G__47221));
})() * (250));

break;
case "weekly":
return ((function (){var G__47222 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47222) : line.call(null,G__47222));
})() * (52));

break;
case "monthly":
return ((function (){var G__47223 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47223) : line.call(null,G__47223));
})() * (12));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47219__$1)].join('')));

}
})();
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Regression",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.charting.regression_output(cljs.core.take_last(days,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolio-returns","portfolio-returns",1969280703),(function (){var G__47224 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47224) : line.call(null,G__47224));
})()], null))),cljs.core.take_last(days,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"benchmark-returns","benchmark-returns",-1631663598),(function (){var G__47225 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47225) : line.call(null,G__47225));
})()], null))),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"regression","regression",-431327125),(function (){var G__47226 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47226) : line.call(null,G__47226));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),(function (){var G__47227 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47227) : line.call(null,G__47227));
})()))?new cljs.core.Keyword(null,"alpha-3y","alpha-3y",-1942119421):new cljs.core.Keyword(null,"alpha-1y","alpha-1y",-1600722615))], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"regression","regression",-431327125),(function (){var G__47228 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47228) : line.call(null,G__47228));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),(function (){var G__47229 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__47229) : line.call(null,G__47229));
})()))?new cljs.core.Keyword(null,"beta-3y","beta-3y",1009686145):new cljs.core.Keyword(null,"beta-1y","beta-1y",-1749293921))], null)),(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(jasminegui.var$.standard_box_width,(0),(3))) - (150)),(550))], null)], null)], null);
});
jasminegui.var$.var_controller = (function jasminegui$var$var_controller(){
var portfolio_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$var$var_controller_$_iter__47239(s__47240){
return (new cljs.core.LazySeq(null,(function (){
var s__47240__$1 = s__47240;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47240__$1);
if(temp__5735__auto__){
var s__47240__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47240__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47240__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47242 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47241 = (0);
while(true){
if((i__47241 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__47241);
cljs.core.chunk_append(b__47242,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null));

var G__47296 = (i__47241 + (1));
i__47241 = G__47296;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47242),jasminegui$var$var_controller_$_iter__47239(cljs.core.chunk_rest(s__47240__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47242),null);
}
} else {
var p = cljs.core.first(s__47240__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null),jasminegui$var$var_controller_$_iter__47239(cljs.core.rest(s__47240__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref((function (){var G__47243 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47243) : re_frame.core.subscribe.call(null,G__47243));
})()));
})());
var portfolio = (function (){var G__47244 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","portfolio","var/portfolio",957702515)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47244) : re_frame.core.subscribe.call(null,G__47244));
})();
var chart_period = (function (){var G__47247 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47247) : re_frame.core.subscribe.call(null,G__47247));
})();
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Display selection",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 20px 0px 0px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Portfolio:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.var$.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),portfolio,new cljs.core.Keyword(null,"choices","choices",1385611597),portfolio_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__47232_SHARP_){
var G__47252 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-var","get-portfolio-var",1001711662),p1__47232_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47252) : re_frame.core.dispatch.call(null,G__47252));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"20px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Chart period:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.var$.dropdown_width,new cljs.core.Keyword(null,"model","model",331153215),chart_period,new cljs.core.Keyword(null,"choices","choices",1385611597),jasminegui.static$.var_charts_choice_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__47233_SHARP_){
var G__47253 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),p1__47233_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47253) : re_frame.core.dispatch.call(null,G__47253));
})], null)], null)], null)], null)], null);
});
jasminegui.var$.proxy_table = (function jasminegui$var$proxy_table(){
var data = cljs.core.deref((function (){var G__47255 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","proxies","var/proxies",-1487962738)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47255) : re_frame.core.subscribe.call(null,G__47255));
})());
var display = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bond","bond",1505454895),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$var$proxy_table_$_iter__47256(s__47257){
return (new cljs.core.LazySeq(null,(function (){
var s__47257__$1 = s__47257;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47257__$1);
if(temp__5735__auto__){
var s__47257__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47257__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47257__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47259 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47258 = (0);
while(true){
if((i__47258 < size__4528__auto__)){
var vec__47262 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__47258);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47262,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47262,(1),null);
cljs.core.chunk_append(b__47259,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bond","bond",1505454895),k], null),v], 0)),new cljs.core.Keyword(null,"adjdur","adjdur",-1939650640),cljs.core.str));

var G__47297 = (i__47258 + (1));
i__47258 = G__47297;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47259),jasminegui$var$proxy_table_$_iter__47256(cljs.core.chunk_rest(s__47257__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47259),null);
}
} else {
var vec__47270 = cljs.core.first(s__47257__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47270,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47270,(1),null);
return cljs.core.cons(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bond","bond",1505454895),k], null),v], 0)),new cljs.core.Keyword(null,"adjdur","adjdur",-1939650640),cljs.core.str),jasminegui$var$proxy_table_$_iter__47256(cljs.core.rest(s__47257__$2)));
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
var active_var = cljs.core.deref((function (){var G__47280 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","active-var","navigation/active-var",39797785)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__47280) : re_frame.core.subscribe.call(null,G__47280));
})());
window.scrollTo((0),(0));

var G__47281 = active_var;
var G__47281__$1 = (((G__47281 instanceof cljs.core.Keyword))?G__47281.fqn:null);
switch (G__47281__$1) {
case "overview":
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.var$.standard_box_width,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"padding","padding",1660304693),"80px 20px",new cljs.core.Keyword(null,"class","class",-2030961996),"rightelement",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.var$.var_controller], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.var$.var_table_view], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.var$.backtest_chart], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.var$.histogram_chart], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.var$.regression_chart], null)], null)], null)], null)], null);

break;
case "proxies":
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.var$.standard_box_width,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"padding","padding",1660304693),"80px 20px",new cljs.core.Keyword(null,"class","class",-2030961996),"rightelement",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.var$.portfolio_proxies], null)], null)], null)], null)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.output","div.output",1460347316),"nothing to display"], null);

}
});
jasminegui.var$.var_view = (function jasminegui$var$var_view(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.var$.nav_var_bar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.var$.active_home], null)], null)], null);
});

//# sourceMappingURL=jasminegui.var.js.map
