goog.provide('jasminegui.charting');
goog.require('cljs.core');
goog.require('jasminegui.static$');
jasminegui.charting.backtest_chart = (function jasminegui$charting$backtest_chart(portfolio_dates,portfolio_value,width,height){
var data = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (a,b){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),a,new cljs.core.Keyword(null,"price","price",22129180),((100) * b)], null);
}),portfolio_dates,portfolio_value);
var ymin = (0.99 * cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"price","price",22129180),data)));
var ymax = (1.01 * cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"price","price",22129180),data)));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"$schema","$schema",1635092088),"https://vega.github.io/schema/vega-lite/v4.json",new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"values","values",372645556),data,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),"date:'%Y-%m-%d'",new cljs.core.Keyword(null,"return","return",-1891502105),"quantitative"], null)], null)], null),new cljs.core.Keyword(null,"mark","mark",-373816345),"line",new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"date",new cljs.core.Keyword(null,"type","type",1174270348),"temporal",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"format","format",-1306924766),"%b-%y",new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),(12),new cljs.core.Keyword(null,"title","title",636505583),null], null),new cljs.core.Keyword(null,"sort","sort",953465918),"descending"], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"price",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ymin,ymax], null)], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),(12),new cljs.core.Keyword(null,"title","title",636505583),null], null)], null)], null)], null);
});

//# sourceMappingURL=jasminegui.charting.js.map
