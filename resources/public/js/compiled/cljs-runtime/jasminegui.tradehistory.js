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
goog.require('oz.core');
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
jasminegui.tradehistory.facet_trade_history_chart = (function jasminegui$tradehistory$facet_trade_history_chart(){
var data = cljs.core.deref((function (){var G__94464 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-bond-trade-history","chart-data","single-bond-trade-history/chart-data",-652303632)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__94464) : re_frame.core.subscribe.call(null,G__94464));
})());
var ymin = (0.99 * cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"price","price",22129180),data))));
var ymax = (1.01 * cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"price","price",22129180),data))));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"$schema","$schema",1635092088),"https://vega.github.io/schema/vega-lite/v4.json",new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"values","values",372645556),data,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"date","date",-1463434462),"date:'%Y%m%d'",new cljs.core.Keyword(null,"price","price",22129180),"quantitative",new cljs.core.Keyword(null,"buy","buy",-794379565),"quantitative",new cljs.core.Keyword(null,"sell","sell",-1949004143),"quantitative"], null)], null)], null),new cljs.core.Keyword(null,"vconcat","vconcat",-2012274180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mark","mark",-373816345),"line",new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"height","height",1025178622),(400),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"date",new cljs.core.Keyword(null,"type","type",1174270348),"temporal",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"format","format",-1306924766),"%b-%y",new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),(10),new cljs.core.Keyword(null,"title","title",636505583),null], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"price",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ymin,ymax], null)], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Price"], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"point",new cljs.core.Keyword(null,"shape","shape",1190694006),"triangle-up",new cljs.core.Keyword(null,"color","color",1011675173),"green"], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"date",new cljs.core.Keyword(null,"type","type",1174270348),"temporal",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"format","format",-1306924766),"%b-%y",new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),(10),new cljs.core.Keyword(null,"title","title",636505583),null], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"buy",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ymin,ymax], null)], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),null], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"point",new cljs.core.Keyword(null,"shape","shape",1190694006),"triangle-down",new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"date",new cljs.core.Keyword(null,"type","type",1174270348),"temporal",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"format","format",-1306924766),"%b-%y",new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),(10),new cljs.core.Keyword(null,"title","title",636505583),null], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"sell",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ymin,ymax], null)], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),null], null)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mark","mark",-373816345),"line",new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"date",new cljs.core.Keyword(null,"type","type",1174270348),"temporal",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"format","format",-1306924766),"%b-%y",new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),(10),new cljs.core.Keyword(null,"title","title",636505583),null], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"nav",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),((cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nav","nav",719540477),data))) + (1)) | (0))], null)], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"NAV %"], null)], null)], null)], null)], null)], null);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-bond-trade-history","close-modal","single-bond-trade-history/close-modal",1822468773),(function (db,p__94469){
var vec__94470 = p__94469;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94470,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("single-bond-trade-history","bond","single-bond-trade-history/bond",2015871973),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("single-bond-trade-history","show-modal","single-bond-trade-history/show-modal",-1585088359),false,new cljs.core.Keyword("single-bond-trade-history","show-flat-modal","single-bond-trade-history/show-flat-modal",1072491400),false], 0));
}));
var G__94480_94665 = new cljs.core.Keyword("single-bond-trade-history","chart-data","single-bond-trade-history/chart-data",-652303632);
var G__94481_94666 = (function (db){
var portfolio = (function (){var G__94482 = new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949);
return (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(G__94482) : db.call(null,G__94482));
})();
var name = (function (){var G__94487 = new cljs.core.Keyword("bond-price-history","name","bond-price-history/name",-1471022397);
return (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(G__94487) : db.call(null,G__94487));
})();
var data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,new cljs.core.Keyword(null,"price","price",22129180)),(function (){var G__94488 = new cljs.core.Keyword("bond-price-history","price","bond-price-history/price",-601066058);
return (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(G__94488) : db.call(null,G__94488));
})());
var trade_data = cljs.core.reverse(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__94473_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"TransactionTypeName","TransactionTypeName",941925643).cljs$core$IFn$_invoke$arity$1(p1__94473_SHARP_),"Coupon Payment");
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__94489 = new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127);
return (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(G__94489) : db.call(null,G__94489));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(portfolio)], null))));
var buys = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$tradehistory$iter__94490(s__94491){
return (new cljs.core.LazySeq(null,(function (){
var s__94491__$1 = s__94491;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__94491__$1);
if(temp__5735__auto__){
var s__94491__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__94491__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__94491__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__94493 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__94492 = (0);
while(true){
if((i__94492 < size__4528__auto__)){
var line = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__94492);
cljs.core.chunk_append(b__94493,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"date","date",-1463434462),clojure.string.replace(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"TradeDate","TradeDate",-1661497901).cljs$core$IFn$_invoke$arity$1(line),(0),(10)),"-",""),new cljs.core.Keyword(null,"buy","buy",-794379565),new cljs.core.Keyword(null,"PriceLcl","PriceLcl",1537035944).cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"value","value",305978217),((0.01 * new cljs.core.Keyword(null,"PriceLcl","PriceLcl",1537035944).cljs$core$IFn$_invoke$arity$1(line)) * new cljs.core.Keyword(null,"Quantity","Quantity",-1939883397).cljs$core$IFn$_invoke$arity$1(line))], null));

var G__94670 = (i__94492 + (1));
i__94492 = G__94670;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__94493),jasminegui$tradehistory$iter__94490(cljs.core.chunk_rest(s__94491__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__94493),null);
}
} else {
var line = cljs.core.first(s__94491__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"date","date",-1463434462),clojure.string.replace(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"TradeDate","TradeDate",-1661497901).cljs$core$IFn$_invoke$arity$1(line),(0),(10)),"-",""),new cljs.core.Keyword(null,"buy","buy",-794379565),new cljs.core.Keyword(null,"PriceLcl","PriceLcl",1537035944).cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"value","value",305978217),((0.01 * new cljs.core.Keyword(null,"PriceLcl","PriceLcl",1537035944).cljs$core$IFn$_invoke$arity$1(line)) * new cljs.core.Keyword(null,"Quantity","Quantity",-1939883397).cljs$core$IFn$_invoke$arity$1(line))], null),jasminegui$tradehistory$iter__94490(cljs.core.rest(s__94491__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pos_QMARK_,new cljs.core.Keyword(null,"Quantity","Quantity",-1939883397)),trade_data));
})());
var sells = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$tradehistory$iter__94513(s__94514){
return (new cljs.core.LazySeq(null,(function (){
var s__94514__$1 = s__94514;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__94514__$1);
if(temp__5735__auto__){
var s__94514__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__94514__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__94514__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__94516 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__94515 = (0);
while(true){
if((i__94515 < size__4528__auto__)){
var line = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__94515);
cljs.core.chunk_append(b__94516,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"date","date",-1463434462),clojure.string.replace(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"TradeDate","TradeDate",-1661497901).cljs$core$IFn$_invoke$arity$1(line),(0),(10)),"-",""),new cljs.core.Keyword(null,"sell","sell",-1949004143),new cljs.core.Keyword(null,"PriceLcl","PriceLcl",1537035944).cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"value","value",305978217),((0.01 * new cljs.core.Keyword(null,"PriceLcl","PriceLcl",1537035944).cljs$core$IFn$_invoke$arity$1(line)) * new cljs.core.Keyword(null,"Quantity","Quantity",-1939883397).cljs$core$IFn$_invoke$arity$1(line))], null));

var G__94676 = (i__94515 + (1));
i__94515 = G__94676;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__94516),jasminegui$tradehistory$iter__94513(cljs.core.chunk_rest(s__94514__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__94516),null);
}
} else {
var line = cljs.core.first(s__94514__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"date","date",-1463434462),clojure.string.replace(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"TradeDate","TradeDate",-1661497901).cljs$core$IFn$_invoke$arity$1(line),(0),(10)),"-",""),new cljs.core.Keyword(null,"sell","sell",-1949004143),new cljs.core.Keyword(null,"PriceLcl","PriceLcl",1537035944).cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"value","value",305978217),((0.01 * new cljs.core.Keyword(null,"PriceLcl","PriceLcl",1537035944).cljs$core$IFn$_invoke$arity$1(line)) * new cljs.core.Keyword(null,"Quantity","Quantity",-1939883397).cljs$core$IFn$_invoke$arity$1(line))], null),jasminegui$tradehistory$iter__94513(cljs.core.rest(s__94514__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.neg_QMARK_,new cljs.core.Keyword(null,"Quantity","Quantity",-1939883397)),trade_data));
})());
var all_data = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(data,buys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sells], 0));
var bydate = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"date","date",-1463434462),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,cljs.core.merge),cljs.core.vals(cljs.core.group_by(new cljs.core.Keyword(null,"date","date",-1463434462),all_data))));
var pos_line = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__94474_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"NAME","NAME",-1127916515).cljs$core$IFn$_invoke$arity$1(p1__94474_SHARP_),name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__94474_SHARP_),portfolio)));
}),(function (){var G__94537 = new cljs.core.Keyword(null,"positions","positions",-1380538434);
return (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(G__94537) : db.call(null,G__94537));
})()));
var nav = new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(pos_line);
var fund_nav = (new cljs.core.Keyword(null,"local-value","local-value",-748647010).cljs$core$IFn$_invoke$arity$1(pos_line) / nav);
var rbydate = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__94475_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__94475_SHARP_,new cljs.core.Keyword(null,"trade-nav","trade-nav",895783743),(function (){var temp__5733__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__94475_SHARP_);
if(cljs.core.truth_(temp__5733__auto__)){
var x = temp__5733__auto__;
return (x / fund_nav);
} else {
return 0.0;
}
})());
}),cljs.core.reverse(bydate));
var rwchange = cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__94476_SHARP_,p2__94477_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__94476_SHARP_,new cljs.core.Keyword(null,"nav","nav",719540477),(nav - p2__94477_SHARP_));
}),rbydate,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"trade-nav","trade-nav",895783743),rbydate))),(0))));
var final$ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__94479_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__94479_SHARP_,new cljs.core.Keyword(null,"nav","nav",719540477),cljs.core._STAR_,(100));
}),rwchange);
return final$;
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__94480_94665,G__94481_94666) : re_frame.core.reg_sub.call(null,G__94480_94665,G__94481_94666));
jasminegui.tradehistory.modal_single_bond_trade_history = (function jasminegui$tradehistory$modal_single_bond_trade_history(){
var modal_data = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__94547 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-bond-trade-history","data","single-bond-trade-history/data",-806149127)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__94547) : re_frame.core.subscribe.call(null,G__94547));
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__94548 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__94548) : re_frame.core.subscribe.call(null,G__94548));
})()))], null));
var show_modal = cljs.core.deref((function (){var G__94549 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-bond-trade-history","show-modal","single-bond-trade-history/show-modal",-1585088359)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__94549) : re_frame.core.subscribe.call(null,G__94549));
})());
var display = cljs.core.reverse(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__94544_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"TransactionTypeName","TransactionTypeName",941925643).cljs$core$IFn$_invoke$arity$1(p1__94544_SHARP_),"Coupon Payment");
}),modal_data));
cljs.core.deref((function (){var G__94551 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-bond-trade-history","chart-data","single-bond-trade-history/chart-data",-652303632)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__94551) : re_frame.core.subscribe.call(null,G__94551));
})());

if(cljs.core.truth_(show_modal)){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.modal_panel,new cljs.core.Keyword(null,"wrap-nicely?","wrap-nicely?",85012288),true,new cljs.core.Keyword(null,"backdrop-on-click","backdrop-on-click",-1460240426),(function (){
var G__94560 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-bond-trade-history","close-modal","single-bond-trade-history/close-modal",1822468773)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__94560) : re_frame.core.dispatch.call(null,G__94560));
}),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__94562 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-bond-trade-history","bond","single-bond-trade-history/bond",2015871973)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__94562) : re_frame.core.subscribe.call(null,G__94562));
})()))," trades since 2019-01-01"].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-download",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return jasminegui.tools.csv_link.cljs$core$IFn$_invoke$arity$2(display,"trade-history");
})], null)], null)], null),(cljs.core.truth_(cljs.core.deref((function (){var G__94576 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__94576) : re_frame.core.subscribe.call(null,G__94576));
})()))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"large","large",-196820544)], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data","data",-232669377),display,new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Date",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"TradeDate",new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tradehistory.subs10], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Type",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"TransactionTypeName",new cljs.core.Keyword(null,"width","width",-384071477),(100)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Notional",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"Quantity",new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tradehistory.nfh], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Price",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"PriceLcl",new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round2], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Counterparty",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"counterparty_code",new cljs.core.Keyword(null,"width","width",-384071477),(100)], null)], null),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),false,new cljs.core.Keyword(null,"pageSize","pageSize",732080883),cljs.core.count(display),new cljs.core.Keyword(null,"className","className",-1983287057),"-striped -highlight"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.tradehistory.facet_trade_history_chart()], null)], null)], null))], null)], null)], null);
} else {
return null;
}
});
jasminegui.tradehistory.modal_single_bond_flat_trade_history = (function jasminegui$tradehistory$modal_single_bond_flat_trade_history(){
var modal_data = cljs.core.deref((function (){var G__94592 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-bond-trade-history","flat-data","single-bond-trade-history/flat-data",-296971181)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__94592) : re_frame.core.subscribe.call(null,G__94592));
})());
var show_modal = cljs.core.deref((function (){var G__94596 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-bond-trade-history","show-flat-modal","single-bond-trade-history/show-flat-modal",1072491400)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__94596) : re_frame.core.subscribe.call(null,G__94596));
})());
var bond_name = cljs.core.deref((function (){var G__94602 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-bond-trade-history","bond","single-bond-trade-history/bond",2015871973)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__94602) : re_frame.core.subscribe.call(null,G__94602));
})());
var display = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"date","date",-1463434462),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__94590_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"trade","trade",123337743).cljs$core$IFn$_invoke$arity$1(p1__94590_SHARP_)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Coupon Payment","Scrip Transfer"], null));
}),modal_data)));
if(cljs.core.truth_(show_modal)){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.modal_panel,new cljs.core.Keyword(null,"wrap-nicely?","wrap-nicely?",85012288),true,new cljs.core.Keyword(null,"backdrop-on-click","backdrop-on-click",-1460240426),(function (){
var G__94604 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-bond-trade-history","close-modal","single-bond-trade-history/close-modal",1822468773)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__94604) : re_frame.core.dispatch.call(null,G__94604));
}),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(bond_name)," trades since 2019-01-01"].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-download",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return jasminegui.tools.csv_link.cljs$core$IFn$_invoke$arity$3(display,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(bond_name),"-trade-history"].join(''),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"trade","trade",123337743),new cljs.core.Keyword(null,"price","price",22129180)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.deref((function (){var G__94607 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__94607) : re_frame.core.subscribe.call(null,G__94607));
})()))));
})], null)], null)], null),(cljs.core.truth_(cljs.core.deref((function (){var G__94608 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-bond-trade-history","show-throbber","single-bond-trade-history/show-throbber",-76615865)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__94608) : re_frame.core.subscribe.call(null,G__94608));
})()))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"large","large",-196820544)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data","data",-232669377),display,new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Date",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"date",new cljs.core.Keyword(null,"width","width",-384071477),(100)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Type",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"trade",new cljs.core.Keyword(null,"width","width",-384071477),(75)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Price",new cljs.core.Keyword(null,"accessor","accessor",-25476721),"price",new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tables.round2], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Portfolio",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$tradehistory$modal_single_bond_flat_trade_history_$_iter__94611(s__94612){
return (new cljs.core.LazySeq(null,(function (){
var s__94612__$1 = s__94612;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__94612__$1);
if(temp__5735__auto__){
var s__94612__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__94612__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__94612__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__94614 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__94613 = (0);
while(true){
if((i__94613 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__94613);
cljs.core.chunk_append(b__94614,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Header","Header",1255420133),p,new cljs.core.Keyword(null,"accessor","accessor",-25476721),p,new cljs.core.Keyword(null,"width","width",-384071477),(90),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tradehistory.nfh], null));

var G__94702 = (i__94613 + (1));
i__94613 = G__94702;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__94614),jasminegui$tradehistory$modal_single_bond_flat_trade_history_$_iter__94611(cljs.core.chunk_rest(s__94612__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__94614),null);
}
} else {
var p = cljs.core.first(s__94612__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Header","Header",1255420133),p,new cljs.core.Keyword(null,"accessor","accessor",-25476721),p,new cljs.core.Keyword(null,"width","width",-384071477),(90),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null),new cljs.core.Keyword(null,"Cell","Cell",53644787),jasminegui.tradehistory.nfh], null),jasminegui$tradehistory$modal_single_bond_flat_trade_history_$_iter__94611(cljs.core.rest(s__94612__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref((function (){var G__94634 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__94634) : re_frame.core.subscribe.call(null,G__94634));
})()));
})())], null)], null),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),false,new cljs.core.Keyword(null,"pageSize","pageSize",732080883),cljs.core.count(display),new cljs.core.Keyword(null,"className","className",-1983287057),"-striped -highlight"], null)], null))], null)], null)], null);
} else {
return null;
}
});

//# sourceMappingURL=jasminegui.tradehistory.js.map
