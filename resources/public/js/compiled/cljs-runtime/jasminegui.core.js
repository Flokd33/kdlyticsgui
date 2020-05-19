goog.provide('jasminegui.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('re_frame.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('re_pressed.core');
goog.require('jasminegui.views');
goog.require('jasminegui.mount');
jasminegui.core.mount_root = (function jasminegui$core$mount_root(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.views.main_panel], null),document.getElementById("app"));
});
jasminegui.core.init = (function jasminegui$core$init(){
var G__43252_43262 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jasminegui.mount","initialize-db","jasminegui.mount/initialize-db",-1621527627)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__43252_43262) : re_frame.core.dispatch_sync.call(null,G__43252_43262));

var G__43253_43263 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","add-keyboard-event-listener","re-pressed.core/add-keyboard-event-listener",719500381),"keypress"], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__43253_43263) : re_frame.core.dispatch_sync.call(null,G__43253_43263));

return jasminegui.core.mount_root();
});
var G__43254_43264 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43254_43264) : re_frame.core.dispatch.call(null,G__43254_43264));
var G__43255_43265 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-positions","get-positions",1610972586)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43255_43265) : re_frame.core.dispatch.call(null,G__43255_43265));
var G__43256_43266 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-pivoted-positions","get-pivoted-positions",2145025131)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43256_43266) : re_frame.core.dispatch.call(null,G__43256_43266));
var G__43257_43267 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-total-positions","get-total-positions",-698807167)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43257_43267) : re_frame.core.dispatch.call(null,G__43257_43267));
var G__43258_43268 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-rating-to-score","get-rating-to-score",391912155)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43258_43268) : re_frame.core.dispatch.call(null,G__43258_43268));
var G__43260_43269 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-qt-date","get-qt-date",-1072332881)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43260_43269) : re_frame.core.dispatch.call(null,G__43260_43269));
var G__43261_43270 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","set-keypress-rules","re-pressed.core/set-keypress-rules",1541561860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-keys","event-keys",-835966631),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cycle-shortcut","cycle-shortcut",-1617058214)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(86)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(118)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tree-table","tree-table",-1263002012)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(84)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(116)], null)], null)], null)], null)], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43261_43270) : re_frame.core.dispatch.call(null,G__43261_43270));

//# sourceMappingURL=jasminegui.core.js.map
