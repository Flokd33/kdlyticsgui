goog.provide('jasminegui.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('re_com.box');
goog.require('re_com.util');
goog.require('re_com.validate');
goog.require('jasminegui.mount');
goog.require('jasminegui.static$');
goog.require('jasminegui.home');
jasminegui.views.nav_bar = (function jasminegui$views$nav_bar(){
var active_view = cljs.core.deref((function (){var G__44300 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-view","active-view",-1531689252)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__44300) : re_frame.core.subscribe.call(null,G__44300));
})());
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"navbar",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"stretch","stretch",-1888837380),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__4523__auto__ = ((function (active_view){
return (function jasminegui$views$nav_bar_$_iter__44301(s__44302){
return (new cljs.core.LazySeq(null,((function (active_view){
return (function (){
var s__44302__$1 = s__44302;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44302__$1);
if(temp__5735__auto__){
var s__44302__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44302__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__44302__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__44304 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__44303 = (0);
while(true){
if((i__44303 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__44303);
cljs.core.chunk_append(b__44304,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"width","width",-384071477),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"home","home",-74557309)))?"250px":"150px"),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_view,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?"dropdown-active":"dropdown"),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__44303,item,c__4521__auto__,size__4522__auto__,b__44304,s__44302__$2,temp__5735__auto__,active_view){
return (function (){
var G__44306 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__44306) : re_frame.core.dispatch.call(null,G__44306));
});})(i__44303,item,c__4521__auto__,size__4522__auto__,b__44304,s__44302__$2,temp__5735__auto__,active_view))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__44314 = (i__44303 + (1));
i__44303 = G__44314;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44304),jasminegui$views$nav_bar_$_iter__44301(cljs.core.chunk_rest(s__44302__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44304),null);
}
} else {
var item = cljs.core.first(s__44302__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"width","width",-384071477),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"home","home",-74557309)))?"250px":"150px"),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_view,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?"dropdown-active":"dropdown"),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__44302__$2,temp__5735__auto__,active_view){
return (function (){
var G__44307 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__44307) : re_frame.core.dispatch.call(null,G__44307));
});})(item,s__44302__$2,temp__5735__auto__,active_view))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)], null)),jasminegui$views$nav_bar_$_iter__44301(cljs.core.rest(s__44302__$2)));
}
} else {
return null;
}
break;
}
});})(active_view))
,null,null));
});})(active_view))
;
return iter__4523__auto__(jasminegui.static$.main_navigation);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"height","height",1025178622),"50%",new cljs.core.Keyword(null,"width","width",-384071477),"3px",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"color","color",1011675173),"#CA3E47",new cljs.core.Keyword(null,"size","size",1098693007),"3px"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"width","width",-384071477),"3px",new cljs.core.Keyword(null,"child","child",623967545),""], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"width","width",-384071477),"150px",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.Keyword(null,"label","label",1718410804),"Jasmine",new cljs.core.Keyword(null,"on-click","on-click",1632826543),null], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"color","color",1011675173),"#CA3E47",new cljs.core.Keyword(null,"class","class",-2030961996),"separatorline"], null)], null)], null);
});
jasminegui.views.modal_global_password = (function jasminegui$views$modal_global_password(){
if(cljs.core.truth_(cljs.core.deref((function (){var G__44309 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-global-password-modal","show-global-password-modal",-1909135661)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__44309) : re_frame.core.subscribe.call(null,G__44309));
})()))){
var pw = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.modal_panel,new cljs.core.Keyword(null,"wrap-nicely?","wrap-nicely?",85012288),true,new cljs.core.Keyword(null,"backdrop-opacity","backdrop-opacity",1467395653),"1.0",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"width","width",-384071477),"250px",new cljs.core.Keyword(null,"height","height",1025178622),"75px",new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Team password:"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_password,new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"model","model",331153215),pw,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (pw){
return (function (p1__44308_SHARP_){
cljs.core.reset_BANG_(pw,p1__44308_SHARP_);

var G__44310 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global-password-check","global-password-check",-431762211),p1__44308_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__44310) : re_frame.core.dispatch.call(null,G__44310));
});})(pw))
], null)], null)], null)], null);
} else {
return null;
}
});
jasminegui.views.modal_mounting = (function jasminegui$views$modal_mounting(){
if(cljs.core.truth_(cljs.core.deref((function (){var G__44311 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-mounting-modal","show-mounting-modal",-1469130950)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__44311) : re_frame.core.subscribe.call(null,G__44311));
})()))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.modal_panel,new cljs.core.Keyword(null,"wrap-nicely?","wrap-nicely?",85012288),false,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.alert_box,new cljs.core.Keyword(null,"padding","padding",1660304693),"15px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"120px"], null),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"large","large",-196820544)], null)], null),new cljs.core.Keyword(null,"closeable?","closeable?",1490064409),false], null)], null);
} else {
return null;
}
});
jasminegui.views.active_view = (function jasminegui$views$active_view(){
var active_view = cljs.core.deref((function (){var G__44312 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-view","active-view",-1531689252)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__44312) : re_frame.core.subscribe.call(null,G__44312));
})());
window.scrollTo((0),(0));

var G__44313 = active_view;
var G__44313__$1 = (((G__44313 instanceof cljs.core.Keyword))?G__44313.fqn:null);
switch (G__44313__$1) {
case "home":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.home.home_view], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.output","div.output",1460347316),"nothing to display"], null);

}
});
jasminegui.views.main_panel = (function jasminegui$views$main_panel(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"0px",new cljs.core.Keyword(null,"class","class",-2030961996),"body",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.views.nav_bar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.views.active_view], null)], null)], null);
});

//# sourceMappingURL=jasminegui.views.js.map
