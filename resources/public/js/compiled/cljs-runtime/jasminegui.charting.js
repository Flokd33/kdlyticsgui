goog.provide('jasminegui.charting');
goog.require('cljs.core');
goog.require('jasminegui.static$');
jasminegui.charting.backtest_chart = (function jasminegui$charting$backtest_chart(portfolio_dates,portfolio_value,width,height){
var data = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (a,b){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),a,new cljs.core.Keyword(null,"price","price",22129180),((100) * b)], null);
}),portfolio_dates,portfolio_value);
var ymin = (0.99 * cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"price","price",22129180),data)));
var ymax = (1.01 * cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"price","price",22129180),data)));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"$schema","$schema",1635092088),"https://vega.github.io/schema/vega-lite/v4.json",new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"values","values",372645556),data,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),"date:'%Y-%m-%d'",new cljs.core.Keyword(null,"return","return",-1891502105),"quantitative"], null)], null)], null),new cljs.core.Keyword(null,"mark","mark",-373816345),"line",new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"date",new cljs.core.Keyword(null,"type","type",1174270348),"temporal",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"format","format",-1306924766),"%b-%y",new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),(14),new cljs.core.Keyword(null,"title","title",636505583),null], null),new cljs.core.Keyword(null,"sort","sort",953465918),"descending"], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"price",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ymin,ymax], null)], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),(14),new cljs.core.Keyword(null,"title","title",636505583),null], null)], null)], null)], null);
});
jasminegui.charting.r5 = (function jasminegui$charting$r5(x){
return ((5) * (((x + (4)) / (5)) | (0)));
});
jasminegui.charting.return_histogram = (function jasminegui$charting$return_histogram(returns,width,height){
var data = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),((100) * x)], null);
}),returns);
var absmax = jasminegui.charting.r5((function (){var G__42261 = ((100) * cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42254_SHARP_){
return Math.abs(p1__42254_SHARP_);
}),returns)));
return Math.ceil(G__42261);
})());
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"values","values",372645556),data,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"json",new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),"number"], null)], null)], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"bin","bin",-200999690),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"step","step",1288888124),0.5], null),new cljs.core.Keyword(null,"field","field",-1302436500),"return",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- absmax),absmax], null)], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),(14),new cljs.core.Keyword(null,"values","values",372645556),cljs.core.vec(cljs.core.range.cljs$core$IFn$_invoke$arity$3((- absmax),(absmax + (5)),0.5)),new cljs.core.Keyword(null,"format","format",-1306924766),".1f"], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),"count",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),(14)], null)], null)], null),new cljs.core.Keyword(null,"mark","mark",-373816345),"bar",new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null);
});
jasminegui.charting.regression_output = (function jasminegui$charting$regression_output(portfolio_returns,benchmark_returns,alpha,beta,width,height){
var data = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (y,x){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"portfolio","portfolio",957568598),((100) * y),new cljs.core.Keyword(null,"benchmark","benchmark",667647056),((100) * x),new cljs.core.Keyword(null,"predict","predict",-865237480),((100) * (alpha + (beta * x)))], null);
}),portfolio_returns,benchmark_returns);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"values","values",372645556),data,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"json",new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"portfolio","portfolio",957568598),"number",new cljs.core.Keyword(null,"benchmark","benchmark",667647056),"number",new cljs.core.Keyword(null,"predict","predict",-865237480),"number"], null)], null)], null),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"point",new cljs.core.Keyword(null,"filled","filled",1908725116),true], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"benchmark",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),(14),new cljs.core.Keyword(null,"tickMinStep","tickMinStep",92494958),0.5,new cljs.core.Keyword(null,"format","format",-1306924766),".1f"], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"portfolio",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),(14),new cljs.core.Keyword(null,"tickMinStep","tickMinStep",92494958),0.5,new cljs.core.Keyword(null,"format","format",-1306924766),".1f"], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"line",new cljs.core.Keyword(null,"color","color",1011675173),"firebrick"], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"benchmark",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"predict",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),(14),new cljs.core.Keyword(null,"tickMinStep","tickMinStep",92494958),0.5,new cljs.core.Keyword(null,"format","format",-1306924766),".1f"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null);
});

//# sourceMappingURL=jasminegui.charting.js.map
