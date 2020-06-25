goog.provide('jasminegui.administration');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('re_com.core');
goog.require('re_com.box');
goog.require('re_com.util');
goog.require('jasminegui.mount');
goog.require('jasminegui.static$');
goog.require('re_com.validate');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rebuild","rebuild",1564457427),(function (p__63342,p__63343){
var map__63348 = p__63342;
var map__63348__$1 = (((((!((map__63348 == null))))?(((((map__63348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63348):map__63348);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63348__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63349 = p__63343;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63349,(0),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("navigation","success-modal","navigation/success-modal",533446693),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show","show",-576705889),true,new cljs.core.Keyword(null,"on-close","on-close",-761178394),new cljs.core.Keyword(null,"close-rebuild","close-rebuild",-1528570346),new cljs.core.Keyword(null,"response","response",-1068424192),null], null)),new cljs.core.Keyword(null,"http-post-dispatch","http-post-dispatch",2138865017),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"rebuild"].join(''),new cljs.core.Keyword(null,"edn-params","edn-params",894273052),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"has-rebuilt","has-rebuilt",-1330843444)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"has-rebuilt","has-rebuilt",-1330843444),(function (db,p__63371){
var vec__63373 = p__63371;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63373,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63373,(1),null);
var G__63377_63473 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63377_63473) : re_frame.core.dispatch.call(null,G__63377_63473));

var G__63379_63474 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-positions","get-positions",1610972586)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63379_63474) : re_frame.core.dispatch.call(null,G__63379_63474));

var G__63380_63478 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-pivoted-positions","get-pivoted-positions",2145025131)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63380_63478) : re_frame.core.dispatch.call(null,G__63380_63478));

var G__63381_63479 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-total-positions","get-total-positions",-698807167)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63381_63479) : re_frame.core.dispatch.call(null,G__63381_63479));

var G__63388_63480 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-rating-to-score","get-rating-to-score",391912155)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63388_63480) : re_frame.core.dispatch.call(null,G__63388_63480));

var G__63391_63481 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-qt-date","get-qt-date",-1072332881)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63391_63481) : re_frame.core.dispatch.call(null,G__63391_63481));

var G__63394_63482 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-var-proxies","get-var-proxies",1252506215)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63394_63482) : re_frame.core.dispatch.call(null,G__63394_63482));

var G__63400_63484 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-var-dates","get-var-dates",-1039695287)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63400_63484) : re_frame.core.dispatch.call(null,G__63400_63484));

var G__63401_63485 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-var","get-portfolio-var",1001711662),"OGEMCORD"], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63401_63485) : re_frame.core.dispatch.call(null,G__63401_63485));

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","success-modal","navigation/success-modal",533446693),new cljs.core.Keyword(null,"response","response",-1068424192)], null),new cljs.core.Keyword(null,"text-response","text-response",-1856873194).cljs$core$IFn$_invoke$arity$1(data));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"close-rebuild","close-rebuild",-1528570346),(function (db,p__63405){
var vec__63406 = p__63405;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63406,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("navigation","success-modal","navigation/success-modal",533446693),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show","show",-576705889),false,new cljs.core.Keyword(null,"on-close","on-close",-761178394),null,new cljs.core.Keyword(null,"response","response",-1068424192),null], null));
}));
jasminegui.administration.modal_success = (function jasminegui$administration$modal_success(){
var modal_data = cljs.core.deref((function (){var G__63411 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","success-modal","navigation/success-modal",533446693)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63411) : re_frame.core.subscribe.call(null,G__63411));
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"show","show",-576705889).cljs$core$IFn$_invoke$arity$1(modal_data))){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.modal_panel,new cljs.core.Keyword(null,"wrap-nicely?","wrap-nicely?",85012288),false,new cljs.core.Keyword(null,"backdrop-on-click","backdrop-on-click",-1460240426),(function (){
var G__63413 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-close","on-close",-761178394).cljs$core$IFn$_invoke$arity$1(modal_data)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63413) : re_frame.core.dispatch.call(null,G__63413));
}),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.alert_box,new cljs.core.Keyword(null,"padding","padding",1660304693),"15px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"450px"], null),new cljs.core.Keyword(null,"heading","heading",-1312171873),(function (){var temp__5733__auto__ = new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(modal_data);
if(cljs.core.truth_(temp__5733__auto__)){
var x = temp__5733__auto__;
return x;
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"large","large",-196820544)], null)], null);
}
})(),new cljs.core.Keyword(null,"closeable?","closeable?",1490064409),true,new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (){
var G__63416 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-close","on-close",-761178394).cljs$core$IFn$_invoke$arity$1(modal_data)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63416) : re_frame.core.dispatch.call(null,G__63416));
})], null)], null);
} else {
return null;
}
});
jasminegui.administration.debug_operations = (function jasminegui$administration$debug_operations(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"width","width",-384071477),"400px",new cljs.core.Keyword(null,"class","class",-2030961996),"subbody element",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Debug operations",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Rebuild positions and VaR:"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"label","label",1718410804),"Do it!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__63429 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rebuild","rebuild",1564457427)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63429) : re_frame.core.dispatch.call(null,G__63429));
})], null)], null)], null)], null)], null)], null);
});
jasminegui.administration.administration_view = (function jasminegui$administration$administration_view(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"padding","padding",1660304693),"80px 25px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.administration.modal_success], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.administration.debug_operations], null)], null)], null);
});

//# sourceMappingURL=jasminegui.administration.js.map
