goog.provide('jasminegui.tradehistory');
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
var module$node_modules$react_table$lib$index=shadow.js.require("module$node_modules$react_table$lib$index", {});
goog.require('re_com.validate');
goog.require('jasminegui.tables');
goog.require('jasminegui.tools');
jasminegui.tradehistory.subs10 = (function jasminegui$tradehistory$subs10(this$){
return reagent.core.as_element((function (){var temp__5733__auto__ = (this$["value"]);
if(cljs.core.truth_(temp__5733__auto__)){
var x = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(x,(0),(10))], null);
} else {
return "-";
}
})());
});
jasminegui.tradehistory.nfh = (function jasminegui$tradehistory$nfh(this$){
return reagent.core.as_element((function (){var temp__5733__auto__ = (this$["value"]);
if(cljs.core.truth_(temp__5733__auto__)){
var x = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),jasminegui.tables.nf(x)], null);
} else {
return "";
}
})());
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-bond-trade-history","close-modal","single-bond-trade-history/close-modal",1822468773),(function (db,p__44437){
var vec__44438 = p__44437;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44438,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("single-bond-trade-history","bond","single-bond-trade-history/bond",2015871973),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("single-bond-trade-history","show-modal","single-bond-trade-history/show-modal",-1585088359),false,new cljs.core.Keyword("single-bond-trade-history","show-flat-modal","single-bond-trade-history/show-flat-modal",1072491400),false], 0));
}));
jasminegui.tradehistory.modal_single_bond_trade_history = (function jasminegui$tradehistory$modal_single_bond_trade_history(){
var modal_data = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__44443 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__44443) : re_frame.core.subscribe.call(null,G__44443));
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__44449 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__44449) : re_frame.core.subscribe.call(null,G__44449));
})()))], null));
var show_modal = cljs.core.deref((function (){var G__44455 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-bond-trade-history","show-modal","single-bond-trade-history/show-modal",-1585088359)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__44455) : re_frame.core.subscribe.call(null,G__44455));
})());
var display = cljs.core.reverse(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__44442_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"TransactionTypeName","TransactionTypeName",941925643).cljs$core$IFn$_invoke$arity$1(p1__44442_SHARP_),"Coupon Payment");
}),modal_data));
if(cljs.core.truth_(show_modal)){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.modal_panel,new cljs.core.Keyword(null,"wrap-nicely?","wrap-nicely?",85012288),true,new cljs.core.Keyword(null,"backdrop-on-click","backdrop-on-click",-1460240426),(function (){
var G__44457 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-bond-trade-history","close-modal","single-bond-trade-history/close-modal",1822468773)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__44457) : re_frame.core.dispatch.call(null,G__44457));
}),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__44460 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-bond-trade-history","bond","single-bond-trade-history/bond",2015871973)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__44460) : re_frame.core.subscribe.call(null,G__44460));
})()))," trades since 2019-01-01"].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-download",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return jasminegui.tools.csv_link.cljs$core$IFn$_invoke$arity$2(display,"trade-history");
})], null)], null)], null),(cljs.core.truth_(cljs.core.deref((function (){var G__44465 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__44465) : re_frame.core.subscribe.call(null,G__44465));
})()))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"large","large",-196820544)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data","data",-232669377),display,new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Date",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"TradeDate",new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tradehistory.subs10], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Type",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"TransactionTypeName",new cljs.core.Keyword(null,"width","width",-384071477),(100)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Notional",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"Quantity",new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tradehistory.nfh], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Price",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"PriceLcl",new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round2], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Counterparty",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"counterparty_code",new cljs.core.Keyword(null,"width","width",-384071477),(100)], null)], null),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),false,new cljs.core.Keyword(null,"pageSize","pageSize",732080883),cljs.core.count(display),new cljs.core.Keyword(null,"className","className",-1983287057),"-striped -highlight"], null)], null))], null)], null)], null);
} else {
return null;
}
});
jasminegui.tradehistory.modal_single_bond_flat_trade_history = (function jasminegui$tradehistory$modal_single_bond_flat_trade_history(){
var modal_data = cljs.core.deref((function (){var G__44474 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__44474) : re_frame.core.subscribe.call(null,G__44474));
})());
var show_modal = cljs.core.deref((function (){var G__44475 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-bond-trade-history","show-flat-modal","single-bond-trade-history/show-flat-modal",1072491400)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__44475) : re_frame.core.subscribe.call(null,G__44475));
})());
var bond_name = cljs.core.deref((function (){var G__44476 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-bond-trade-history","bond","single-bond-trade-history/bond",2015871973)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__44476) : re_frame.core.subscribe.call(null,G__44476));
})());
var display = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"date","date",-1463434462),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__44467_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"trade","trade",123337743).cljs$core$IFn$_invoke$arity$1(p1__44467_SHARP_)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Coupon Payment","Scrip Transfer"], null));
}),modal_data)));
if(cljs.core.truth_(show_modal)){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.modal_panel,new cljs.core.Keyword(null,"wrap-nicely?","wrap-nicely?",85012288),true,new cljs.core.Keyword(null,"backdrop-on-click","backdrop-on-click",-1460240426),(function (){
var G__44479 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-bond-trade-history","close-modal","single-bond-trade-history/close-modal",1822468773)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__44479) : re_frame.core.dispatch.call(null,G__44479));
}),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(bond_name)," trades since 2019-01-01"].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-download",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return jasminegui.tools.csv_link.cljs$core$IFn$_invoke$arity$3(display,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(bond_name),"-trade-history"].join(''),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"trade","trade",123337743),new cljs.core.Keyword(null,"price","price",22129180)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.deref((function (){var G__44483 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__44483) : re_frame.core.subscribe.call(null,G__44483));
})()))));
})], null)], null)], null),(cljs.core.truth_(cljs.core.deref((function (){var G__44484 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__44484) : re_frame.core.subscribe.call(null,G__44484));
})()))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"large","large",-196820544)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data","data",-232669377),display,new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Date",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"date",new cljs.core.Keyword(null,"width","width",-384071477),(100)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Type",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"trade",new cljs.core.Keyword(null,"width","width",-384071477),(75)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Price",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"price",new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round2], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Portfolio",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$tradehistory$modal_single_bond_flat_trade_history_$_iter__44494(s__44495){
return (new cljs.core.LazySeq(null,(function (){
var s__44495__$1 = s__44495;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44495__$1);
if(temp__5735__auto__){
var s__44495__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44495__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__44495__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__44497 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__44496 = (0);
while(true){
if((i__44496 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__44496);
cljs.core.chunk_append(b__44497,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Header","Header",1255420133),p,new cljs.core.Keyword(null,"accessor","accessor",-25476721),p,new cljs.core.Keyword(null,"width","width",-384071477),(90),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tradehistory.nfh], null));

var G__44856 = (i__44496 + (1));
i__44496 = G__44856;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44497),jasminegui$tradehistory$modal_single_bond_flat_trade_history_$_iter__44494(cljs.core.chunk_rest(s__44495__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44497),null);
}
} else {
var p = cljs.core.first(s__44495__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Header","Header",1255420133),p,new cljs.core.Keyword(null,"accessor","accessor",-25476721),p,new cljs.core.Keyword(null,"width","width",-384071477),(90),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tradehistory.nfh], null),jasminegui$tradehistory$modal_single_bond_flat_trade_history_$_iter__44494(cljs.core.rest(s__44495__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref((function (){var G__44593 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__44593) : re_frame.core.subscribe.call(null,G__44593));
})()));
})())], null)], null),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),false,new cljs.core.Keyword(null,"pageSize","pageSize",732080883),cljs.core.count(display),new cljs.core.Keyword(null,"className","className",-1983287057),"-striped -highlight"], null)], null))], null)], null)], null);
} else {
return null;
}
});

//# sourceMappingURL=jasminegui.tradehistory.js.map
