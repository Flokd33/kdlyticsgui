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
var G__49553_49569 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jasminegui.mount","initialize-db","jasminegui.mount/initialize-db",-1621527627)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__49553_49569) : re_frame.core.dispatch_sync.call(null,G__49553_49569));

var G__49554_49570 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","add-keyboard-event-listener","re-pressed.core/add-keyboard-event-listener",719500381),"keypress"], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__49554_49570) : re_frame.core.dispatch_sync.call(null,G__49554_49570));

return jasminegui.core.mount_root();
});
var G__49555_49571 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49555_49571) : re_frame.core.dispatch.call(null,G__49555_49571));
var G__49556_49572 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-positions","get-positions",1610972586)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49556_49572) : re_frame.core.dispatch.call(null,G__49556_49572));
var G__49557_49573 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-pivoted-positions","get-pivoted-positions",2145025131)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49557_49573) : re_frame.core.dispatch.call(null,G__49557_49573));
var G__49558_49574 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-total-positions","get-total-positions",-698807167)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49558_49574) : re_frame.core.dispatch.call(null,G__49558_49574));
var G__49560_49575 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-rating-to-score","get-rating-to-score",391912155)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49560_49575) : re_frame.core.dispatch.call(null,G__49560_49575));
var G__49561_49576 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-qt-date","get-qt-date",-1072332881)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49561_49576) : re_frame.core.dispatch.call(null,G__49561_49576));
var G__49564_49577 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-var-proxies","get-var-proxies",1252506215)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49564_49577) : re_frame.core.dispatch.call(null,G__49564_49577));
var G__49565_49578 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-var-dates","get-var-dates",-1039695287)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49565_49578) : re_frame.core.dispatch.call(null,G__49565_49578));
var G__49566_49579 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-var","get-portfolio-var",1001711662),"OGEMCORD"], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49566_49579) : re_frame.core.dispatch.call(null,G__49566_49579));
var G__49567_49580 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","set-keypress-rules","re-pressed.core/set-keypress-rules",1541561860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-keys","event-keys",-835966631),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cycle-shortcut","cycle-shortcut",-1617058214)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(86)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(118)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tree-table","tree-table",-1263002012)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(84)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(116)], null)], null)], null)], null)], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49567_49580) : re_frame.core.dispatch.call(null,G__49567_49580));

//# sourceMappingURL=jasminegui.core.js.map
