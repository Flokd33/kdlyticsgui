goog.provide('jasminegui.home');
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
goog.require('jasminegui.static$');
goog.require('jasminegui.riskviews');
jasminegui.home.nav_home_bar = (function jasminegui$home$nav_home_bar(){
var active_home = cljs.core.deref((function (){var G__74834 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-home","active-home",53621216)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__74834) : re_frame.core.subscribe.call(null,G__74834));
})());
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([active_home], 0));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"class","class",-2030961996),"leftnavbar",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$home$nav_home_bar_$_iter__74835(s__74836){
return (new cljs.core.LazySeq(null,(function (){
var s__74836__$1 = s__74836;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__74836__$1);
if(temp__5735__auto__){
var s__74836__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__74836__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__74836__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__74838 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__74837 = (0);
while(true){
if((i__74837 < size__4528__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__74837);
cljs.core.chunk_append(b__74838,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-primary btn-block",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_home,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?" active":null)].join(''),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__74837,item,c__4527__auto__,size__4528__auto__,b__74838,s__74836__$2,temp__5735__auto__,active_home){
return (function (){
var G__74840 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74840) : re_frame.core.dispatch.call(null,G__74840));
});})(i__74837,item,c__4527__auto__,size__4528__auto__,b__74838,s__74836__$2,temp__5735__auto__,active_home))
], null));

var G__74848 = (i__74837 + (1));
i__74837 = G__74848;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74838),jasminegui$home$nav_home_bar_$_iter__74835(cljs.core.chunk_rest(s__74836__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74838),null);
}
} else {
var item = cljs.core.first(s__74836__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-primary btn-block",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_home,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?" active":null)].join(''),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__74836__$2,temp__5735__auto__,active_home){
return (function (){
var G__74842 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74842) : re_frame.core.dispatch.call(null,G__74842));
});})(item,s__74836__$2,temp__5735__auto__,active_home))
], null),jasminegui$home$nav_home_bar_$_iter__74835(cljs.core.rest(s__74836__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(jasminegui.static$.risk_navigation);
})())], null)], null)], null);
});
jasminegui.home.active_home = (function jasminegui$home$active_home(){
var active_home = cljs.core.deref((function (){var G__74844 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-home","active-home",53621216)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__74844) : re_frame.core.subscribe.call(null,G__74844));
})());
window.scrollTo((0),(0));

var G__74845 = active_home;
var G__74845__$1 = (((G__74845 instanceof cljs.core.Keyword))?G__74845.fqn:null);
switch (G__74845__$1) {
case "summary":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.riskviews.summary_display], null);

break;
case "single-portfolio":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.riskviews.single_portfolio_risk_controller], null);

break;
case "all-portfolios":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.riskviews.multiple_portfolio_risk_controller], null);

break;
case "portfolio-alignment":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.riskviews.portfolio_alignment_risk_controller], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.output","div.output",1460347316),"nothing to display"], null);

}
});
jasminegui.home.home_view = (function jasminegui$home$home_view(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.home.nav_home_bar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.home.active_home], null)], null)], null);
});

//# sourceMappingURL=jasminegui.home.js.map
