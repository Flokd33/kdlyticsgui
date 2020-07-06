goog.provide('jasminegui.portfolioreview');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('re_com.core');
goog.require('re_com.box');
goog.require('re_com.util');
var module$node_modules$react_table$lib$index=shadow.js.require("module$node_modules$react_table$lib$index", {});
goog.require('jasminegui.mount');
goog.require('jasminegui.static$');
goog.require('jasminegui.tools');
goog.require('jasminegui.tables');
goog.require('re_com.validate');
goog.require('oz.core');
goog.require('jasminegui.charting');
goog.require('goog.i18n.NumberFormat');
goog.require('goog.i18n.NumberFormat.Format');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-review-summary-data","get-portfolio-review-summary-data",-1339542673),(function (p__55995,p__55996){
var map__55997 = p__55995;
var map__55997__$1 = (((((!((map__55997 == null))))?(((((map__55997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55997):map__55997);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55997__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55998 = p__55996;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55998,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55998,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"portfolio-review?query-type=summary&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","summary-data","portfolio-review/summary-data",-1362975725)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-review-contribution-chart-data","get-portfolio-review-contribution-chart-data",1350930118),(function (p__56004,p__56005){
var map__56006 = p__56004;
var map__56006__$1 = (((((!((map__56006 == null))))?(((((map__56006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56006):map__56006);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56006__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56007 = p__56005;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56007,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56007,(1),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56007,(2),null);
var grouping = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56007,(3),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"portfolio-review?query-type=contribution&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period),"&grouping=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(grouping)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","contribution-chart-data","portfolio-review/contribution-chart-data",-581811845)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-review-alpha-chart-data","get-portfolio-review-alpha-chart-data",2022261801),(function (p__56018,p__56019){
var map__56023 = p__56018;
var map__56023__$1 = (((((!((map__56023 == null))))?(((((map__56023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56023):map__56023);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56023__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56024 = p__56019;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56024,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56024,(1),null);
var grouping = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56024,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"portfolio-review?query-type=alpha&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&grouping=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(grouping)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","alpha-chart-data","portfolio-review/alpha-chart-data",-243291168)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-review-jensen-chart-data","get-portfolio-review-jensen-chart-data",-928743439),(function (p__56029,p__56030){
var map__56035 = p__56029;
var map__56035__$1 = (((((!((map__56035 == null))))?(((((map__56035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56035):map__56035);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56035__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56036 = p__56030;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56036,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56036,(1),null);
var grouping = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56036,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"portfolio-review?query-type=jensen&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&grouping=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(grouping)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","jensen-chart-data","portfolio-review/jensen-chart-data",-701618636)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-review-marginal-beta-chart-data","get-portfolio-review-marginal-beta-chart-data",-1899990496),(function (p__56041,p__56042){
var map__56043 = p__56041;
var map__56043__$1 = (((((!((map__56043 == null))))?(((((map__56043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56043):map__56043);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56043__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56044 = p__56042;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56044,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56044,(1),null);
var grouping = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56044,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"portfolio-review?query-type=marginal-beta&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&grouping=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(grouping)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","marginal-beta-chart-data","portfolio-review/marginal-beta-chart-data",40550601)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-review-historical-beta-chart-data","get-portfolio-review-historical-beta-chart-data",-495389657),(function (p__56049,p__56050){
var map__56051 = p__56049;
var map__56051__$1 = (((((!((map__56051 == null))))?(((((map__56051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56051):map__56051);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56051__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56052 = p__56050;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56052,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56052,(1),null);
var countries = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56052,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"portfolio-review?query-type=historical-beta&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&countries=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(countries)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","historical-beta-chart-data","portfolio-review/historical-beta-chart-data",-1077808147)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-review-historical-performance-chart-data","get-portfolio-review-historical-performance-chart-data",1554435340),(function (p__56057,p__56058){
var map__56059 = p__56057;
var map__56059__$1 = (((((!((map__56059 == null))))?(((((map__56059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56059):map__56059);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56059__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56060 = p__56058;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56060,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56060,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"attribution?query-type=history&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","historical-performance-chart-data","portfolio-review/historical-performance-chart-data",1185340209)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
jasminegui.portfolioreview.standard_box_width = "1600px";
jasminegui.portfolioreview.standard_box_height = "1024px";
jasminegui.portfolioreview.standard_box_width_nb = (1600);
jasminegui.portfolioreview.standard_box_height_nb = (1024);
jasminegui.portfolioreview.performance_colors = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#134848","#009D80","#FDAA94","#74908D","#591739","#0D3232","#026E62","#C0746D","#54666D","#3C0E2E"], null);
jasminegui.portfolioreview.chart_text_size = (16);
jasminegui.portfolioreview.grouped_horizontal_bars = (function jasminegui$portfolioreview$grouped_horizontal_bars(data,title){

var individual_height = (((cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),data))) > (10)))?(20):(60));
var perf_sort = cljs.core.reverse(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"performance","performance",1987578184),data)));
var colors = cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"performance","performance",1987578184),data))),jasminegui.portfolioreview.performance_colors));
var scl = ((function (){var x__4214__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),data));
var y__4215__auto__ = (- cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),data)));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() / (40));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"$schema","$schema",1635092088),"https://vega.github.io/schema/vega-lite/v4.json",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),data], null),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"calculate","calculate",-1224644403),["datum.value >= 0 ? datum.value + ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scl)," : datum.value - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scl)].join(''),new cljs.core.Keyword(null,"as","as",1148689641),"valuetxt"], null)], null),new cljs.core.Keyword(null,"facet","facet",-801327574),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),"group",new cljs.core.Keyword(null,"type","type",1174270348),"ordinal",new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),data),new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"labelAngle","labelAngle",-15299184),(0),new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),jasminegui.portfolioreview.chart_text_size,new cljs.core.Keyword(null,"labelAlign","labelAlign",-1669868327),"left"], null)], null)], null),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mark","mark",-373816345),"bar",new cljs.core.Keyword(null,"width","width",-384071477),(jasminegui.portfolioreview.standard_box_width_nb - (400)),new cljs.core.Keyword(null,"height","height",1025178622),individual_height,new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),"sum",new cljs.core.Keyword(null,"field","field",-1302436500),"value",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"titleFontSize","titleFontSize",-1632214750),jasminegui.portfolioreview.chart_text_size,new cljs.core.Keyword(null,"titleFontWeight","titleFontWeight",-1346956866),"normal",new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),jasminegui.portfolioreview.chart_text_size,new cljs.core.Keyword(null,"gridColor","gridColor",-961341892),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"condition","condition",1668437652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"test","test",577538877),"datum.value === 0",new cljs.core.Keyword(null,"value","value",305978217),"black"], null)], null)], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"performance",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"sort","sort",953465918),perf_sort,new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"labels","labels",-626734591),false], null)], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"performance",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),colors], null),new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),jasminegui.portfolioreview.chart_text_size], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),jasminegui.portfolioreview.chart_text_size], null),new cljs.core.Keyword(null,"width","width",-384071477),(jasminegui.portfolioreview.standard_box_width_nb - (400)),new cljs.core.Keyword(null,"height","height",1025178622),individual_height,new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),"sum",new cljs.core.Keyword(null,"field","field",-1302436500),"valuetxt",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),null], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"performance",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"sort","sort",953465918),perf_sort,new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"labels","labels",-626734591),false], null)], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"performance",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),colors], null),new cljs.core.Keyword(null,"legend","legend",-1027192245),null], null),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"value",new cljs.core.Keyword(null,"format","format",-1306924766),".0f"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"transparent"], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"domainWidth","domainWidth",2049565375),(1)], null)], null)], null);
});
jasminegui.portfolioreview.simple_horizontal_bars = (function jasminegui$portfolioreview$simple_horizontal_bars(data,title,fmt,dc){

var individual_height = (((cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),data))) > (10)))?(20):(60));
var scl = (dc * ((function (){var x__4214__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),data));
var y__4215__auto__ = (- cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),data)));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() / (40)));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"$schema","$schema",1635092088),"https://vega.github.io/schema/vega-lite/v4.json",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),data], null),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"calculate","calculate",-1224644403),["datum.value >= 0 ? datum.value + ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scl)," : datum.value - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scl)].join(''),new cljs.core.Keyword(null,"as","as",1148689641),"valuetxt"], null)], null),new cljs.core.Keyword(null,"facet","facet",-801327574),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),"group",new cljs.core.Keyword(null,"type","type",1174270348),"ordinal",new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),data),new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"labelAngle","labelAngle",-15299184),(0),new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),jasminegui.portfolioreview.chart_text_size,new cljs.core.Keyword(null,"labelAlign","labelAlign",-1669868327),"left"], null)], null)], null),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mark","mark",-373816345),"bar",new cljs.core.Keyword(null,"width","width",-384071477),((jasminegui.portfolioreview.standard_box_width_nb / (2)) - (250)),new cljs.core.Keyword(null,"height","height",1025178622),individual_height,new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),"sum",new cljs.core.Keyword(null,"field","field",-1302436500),"value",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"titleFontSize","titleFontSize",-1632214750),jasminegui.portfolioreview.chart_text_size,new cljs.core.Keyword(null,"titleFontWeight","titleFontWeight",-1346956866),"normal",new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),jasminegui.portfolioreview.chart_text_size,new cljs.core.Keyword(null,"gridColor","gridColor",-961341892),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"condition","condition",1668437652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"test","test",577538877),"datum.value === 0",new cljs.core.Keyword(null,"value","value",305978217),"black"], null)], null)], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"performance",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"labels","labels",-626734591),false], null)], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"performance",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(jasminegui.portfolioreview.performance_colors)], null)], null),new cljs.core.Keyword(null,"legend","legend",-1027192245),null], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),jasminegui.portfolioreview.chart_text_size], null),new cljs.core.Keyword(null,"width","width",-384071477),((jasminegui.portfolioreview.standard_box_width_nb / (2)) - (250)),new cljs.core.Keyword(null,"height","height",1025178622),individual_height,new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),"sum",new cljs.core.Keyword(null,"field","field",-1302436500),"valuetxt",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),null], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"performance",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"labels","labels",-626734591),false], null)], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"performance",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(jasminegui.portfolioreview.performance_colors)], null)], null),new cljs.core.Keyword(null,"legend","legend",-1027192245),null], null),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"value",new cljs.core.Keyword(null,"format","format",-1306924766),fmt], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"transparent"], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"domainWidth","domainWidth",2049565375),(1)], null)], null)], null);
});
jasminegui.portfolioreview.stacked_vertical_bars = (function jasminegui$portfolioreview$stacked_vertical_bars(data,title){
var groups = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),data));
var colors = cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),data))),jasminegui.portfolioreview.performance_colors);
var new_data = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56081_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56081_SHARP_,new cljs.core.Keyword(null,"order","order",-1254677256),groups.indexOf(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__56081_SHARP_)));
}),data);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"$schema","$schema",1635092088),"https://vega.github.io/schema/vega-lite/v4.json",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),new_data], null),new cljs.core.Keyword(null,"width","width",-384071477),(jasminegui.portfolioreview.standard_box_width_nb - (800)),new cljs.core.Keyword(null,"height","height",1025178622),(jasminegui.portfolioreview.standard_box_height_nb - (400)),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mark","mark",-373816345),"bar",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(60)], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),"performance",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),jasminegui.portfolioreview.chart_text_size,new cljs.core.Keyword(null,"labelAngle","labelAngle",-15299184),(0)], null),new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"performance","performance",1987578184),data)),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"paddingInner","paddingInner",1289231041),0.5], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"value",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),jasminegui.portfolioreview.chart_text_size], null)], null),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"order",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"group",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"domain","domain",1847214937),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),new_data)),new cljs.core.Keyword(null,"range","range",1639692286),colors], null),new cljs.core.Keyword(null,"legend","legend",-1027192245),null], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),jasminegui.portfolioreview.chart_text_size,new cljs.core.Keyword(null,"color","color",1011675173),"white"], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"performance",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),null], null),new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"performance","performance",1987578184),data))], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"mid",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"group",new cljs.core.Keyword(null,"type","type",1174270348),"nominal"], null)], null)], null)], null)], null);
});
jasminegui.portfolioreview.area_chart = (function jasminegui$portfolioreview$area_chart(data){
var nb_countries = cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"country","country",312965309),data)));
var ordered_countries = cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56087_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__56087_SHARP_,"Rest");
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"country","country",312965309),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),cljs.core.take_last(nb_countries,data)))),"Rest"));
var colors = cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"country","country",312965309),data))),jasminegui.portfolioreview.performance_colors);
var new_data = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56088_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56088_SHARP_,new cljs.core.Keyword(null,"order","order",-1254677256),ordered_countries.indexOf(new cljs.core.Keyword(null,"country","country",312965309).cljs$core$IFn$_invoke$arity$1(p1__56088_SHARP_)));
}),data);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"$schema","$schema",1635092088),"https://vega.github.io/schema/vega-lite/v4.json",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"values","values",372645556),new_data,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"date","date",-1463434462),"date:'%Y%m%d'"], null)], null)], null),new cljs.core.Keyword(null,"width","width",-384071477),(jasminegui.portfolioreview.standard_box_width_nb - (400)),new cljs.core.Keyword(null,"height","height",1025178622),(jasminegui.portfolioreview.standard_box_height_nb - (400)),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mark","mark",-373816345),"area",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(60)], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"date",new cljs.core.Keyword(null,"type","type",1174270348),"temporal",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),jasminegui.portfolioreview.chart_text_size,new cljs.core.Keyword(null,"labelAngle","labelAngle",-15299184),(0)], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"value",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),jasminegui.portfolioreview.chart_text_size], null)], null),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"order",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"country",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"domain","domain",1847214937),cljs.core.reverse(ordered_countries),new cljs.core.Keyword(null,"range","range",1639692286),cljs.core.reverse(colors)], null),new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),jasminegui.portfolioreview.chart_text_size], null)], null)], null)], null)], null)], null);
});
jasminegui.portfolioreview.grouped_vertical_bars = (function jasminegui$portfolioreview$grouped_vertical_bars(data,title){

var individual_height = (((cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),data))) > (10)))?(20):(60));
var colors = cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),data))),jasminegui.portfolioreview.performance_colors);
var scl = ((function (){var x__4214__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),data));
var y__4215__auto__ = (- cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),data)));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() / (40));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"$schema","$schema",1635092088),"https://vega.github.io/schema/vega-lite/v4.json",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"values","values",372645556),data,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"date","date",-1463434462),"date:'%Y%m%d'"], null)], null)], null),new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"calculate","calculate",-1224644403),["datum.value >= 0 ? datum.value + ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scl)," : datum.value - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scl)].join(''),new cljs.core.Keyword(null,"as","as",1148689641),"valuetxt"], null)], null),new cljs.core.Keyword(null,"facet","facet",-801327574),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),"date",new cljs.core.Keyword(null,"type","type",1174270348),"temporal",new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),data),new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"labelAngle","labelAngle",-15299184),(0),new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),jasminegui.portfolioreview.chart_text_size,new cljs.core.Keyword(null,"labelAlign","labelAlign",-1669868327),"center",new cljs.core.Keyword(null,"format","format",-1306924766),"%b"], null)], null)], null),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mark","mark",-373816345),"bar",new cljs.core.Keyword(null,"width","width",-384071477),individual_height,new cljs.core.Keyword(null,"height","height",1025178622),(jasminegui.portfolioreview.standard_box_height_nb - (400)),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"group",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),data)),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"titleFontSize","titleFontSize",-1632214750),jasminegui.portfolioreview.chart_text_size,new cljs.core.Keyword(null,"titleFontWeight","titleFontWeight",-1346956866),"normal",new cljs.core.Keyword(null,"labels","labels",-626734591),false,new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),jasminegui.portfolioreview.chart_text_size,new cljs.core.Keyword(null,"gridColor","gridColor",-961341892),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"condition","condition",1668437652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"test","test",577538877),"datum.value === 0",new cljs.core.Keyword(null,"value","value",305978217),"black"], null)], null)], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"value",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Contribution (%)",new cljs.core.Keyword(null,"titleFontSize","titleFontSize",-1632214750),jasminegui.portfolioreview.chart_text_size,new cljs.core.Keyword(null,"labels","labels",-626734591),true,new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),jasminegui.portfolioreview.chart_text_size], null)], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"group",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),cljs.core.reverse(colors)], null),new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),jasminegui.portfolioreview.chart_text_size], null)], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"transparent"], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"domainWidth","domainWidth",2049565375),(1)], null)], null)], null);
});
jasminegui.portfolioreview.vertical_waterfall = (function jasminegui$portfolioreview$vertical_waterfall(data,title){

var individual_height = (((cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),data))) > (10)))?(20):(60));
var new_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (line){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(line,new cljs.core.Keyword(null,"value","value",305978217),(function (p1__56104_SHARP_){
var G__56109 = (100.0 * p1__56104_SHARP_);
return Math.round(G__56109);
}));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),"YTD",new cljs.core.Keyword(null,"value","value",305978217),(0)], null)], null)));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"$schema","$schema",1635092088),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"data","data",-232669377)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"date",new cljs.core.Keyword(null,"type","type",1174270348),"ordinal",new cljs.core.Keyword(null,"sort","sort",953465918),null,new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"labelAngle","labelAngle",-15299184),(0),new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),jasminegui.portfolioreview.chart_text_size], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),"sum",new cljs.core.Keyword(null,"field","field",-1302436500),"value",new cljs.core.Keyword(null,"as","as",1148689641),"sum"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),"lead",new cljs.core.Keyword(null,"field","field",-1302436500),"date",new cljs.core.Keyword(null,"as","as",1148689641),"lead"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"calculate","calculate",-1224644403),"datum.lead === null ? datum.date : datum.lead",new cljs.core.Keyword(null,"as","as",1148689641),"lead"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"calculate","calculate",-1224644403),"datum.date === 'YTD' ? 0 : datum.sum - datum.value",new cljs.core.Keyword(null,"as","as",1148689641),"previous_sum"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"calculate","calculate",-1224644403),"datum.date === 'YTD' ? datum.sum : datum.value",new cljs.core.Keyword(null,"as","as",1148689641),"value"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"calculate","calculate",-1224644403),"(datum.date !== 'Begin' && datum.date !== 'YTD' && datum.value > 0 ? '+' : '') + datum.value",new cljs.core.Keyword(null,"as","as",1148689641),"text_amount"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"calculate","calculate",-1224644403),"(datum.sum + datum.previous_sum) / 2",new cljs.core.Keyword(null,"as","as",1148689641),"center"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"calculate","calculate",-1224644403),"datum.sum < datum.previous_sum ? datum.sum : ''",new cljs.core.Keyword(null,"as","as",1148689641),"sum_dec"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"calculate","calculate",-1224644403),"datum.sum > datum.previous_sum ? datum.sum : ''",new cljs.core.Keyword(null,"as","as",1148689641),"sum_inc"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"bold",new cljs.core.Keyword(null,"color","color",1011675173),"#404040"], null)], null),(600),null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"size","size",1098693007),(45)], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"previous_sum",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"title","title",636505583),"Effect (bps)",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),jasminegui.portfolioreview.chart_text_size,new cljs.core.Keyword(null,"titleFontSize","titleFontSize",-1632214750),jasminegui.portfolioreview.chart_text_size], null)], null),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"field","field",-1302436500),"sum"], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"condition","condition",1668437652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"test","test",577538877),"datum.date === 'Begin' || datum.date === 'YTD'",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.second(jasminegui.portfolioreview.performance_colors)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"test","test",577538877),"datum.sum < datum.previous_sum",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(jasminegui.portfolioreview.performance_colors,(4))], null)], null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.first(jasminegui.portfolioreview.performance_colors)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"rule",new cljs.core.Keyword(null,"color","color",1011675173),"#404040",new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),(2),new cljs.core.Keyword(null,"xOffset","xOffset",670845631),-22.5,new cljs.core.Keyword(null,"x2Offset","x2Offset",-1958147603),22.5], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"field","field",-1302436500),"lead"], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"sum",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"dy","dy",1719547243),(-4),new cljs.core.Keyword(null,"baseline","baseline",1151033280),"bottom"], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"sum_inc",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"sum_inc",new cljs.core.Keyword(null,"type","type",1174270348),"nominal"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"dy","dy",1719547243),(4),new cljs.core.Keyword(null,"baseline","baseline",1151033280),"top"], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"sum_dec",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"sum_dec",new cljs.core.Keyword(null,"type","type",1174270348),"nominal"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"bold",new cljs.core.Keyword(null,"baseline","baseline",1151033280),"middle"], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"center",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"text_amount",new cljs.core.Keyword(null,"type","type",1174270348),"nominal"], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"condition","condition",1668437652),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"test","test",577538877),"datum.date === 'Begin' || datum.date === 'YTD'",new cljs.core.Keyword(null,"value","value",305978217),"white"], null)], null),new cljs.core.Keyword(null,"value","value",305978217),"white"], null)], null)], null)], null),"https://vega.github.io/schema/vega-lite/v4.json",(jasminegui.portfolioreview.standard_box_height_nb - (400)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),new_data], null)]);
});
jasminegui.portfolioreview.risk_breakdowns = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Region","Region"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Country","Country"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sector","Sector"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Rating","RatingGroup"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Duration","Duration Bucket"], null)], null);
jasminegui.portfolioreview.contribution_pages = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Year to date monthly performance",new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"ytd-performance","ytd-performance",-74679665),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-historical-performance-chart-data","get-portfolio-review-historical-performance-chart-data",1554435340),"portfolio"], null)], null)], null),(function (){var iter__4529__auto__ = (function jasminegui$portfolioreview$iter__56115(s__56116){
return (new cljs.core.LazySeq(null,(function (){
var s__56116__$1 = s__56116;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56116__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var p = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__56116__$1,p,xs__6292__auto__,temp__5735__auto__){
return (function jasminegui$portfolioreview$iter__56115_$_iter__56117(s__56118){
return (new cljs.core.LazySeq(null,((function (s__56116__$1,p,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__56118__$1 = s__56118;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__56118__$1);
if(temp__5735__auto____$1){
var s__56118__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56118__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__56118__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__56120 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__56119 = (0);
while(true){
if((i__56119 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__56119);
cljs.core.chunk_append(b__56120,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p))," Contribution by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k))].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"contribution","contribution",-1962459669),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-contribution-chart-data","get-portfolio-review-contribution-chart-data",1350930118),"portfolio",cljs.core.second(p),cljs.core.second(k)], null)], null));

var G__56304 = (i__56119 + (1));
i__56119 = G__56304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56120),jasminegui$portfolioreview$iter__56115_$_iter__56117(cljs.core.chunk_rest(s__56118__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56120),null);
}
} else {
var k = cljs.core.first(s__56118__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p))," Contribution by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k))].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"contribution","contribution",-1962459669),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-contribution-chart-data","get-portfolio-review-contribution-chart-data",1350930118),"portfolio",cljs.core.second(p),cljs.core.second(k)], null)], null),jasminegui$portfolioreview$iter__56115_$_iter__56117(cljs.core.rest(s__56118__$2)));
}
} else {
return null;
}
break;
}
});})(s__56116__$1,p,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__56116__$1,p,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(jasminegui.portfolioreview.risk_breakdowns));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,jasminegui$portfolioreview$iter__56115(cljs.core.rest(s__56116__$1)));
} else {
var G__56305 = cljs.core.rest(s__56116__$1);
s__56116__$1 = G__56305;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MTD","mtd"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["YTD","ytd"], null)], null));
})());
jasminegui.portfolioreview.alpha_pages = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$portfolioreview$iter__56132(s__56133){
return (new cljs.core.LazySeq(null,(function (){
var s__56133__$1 = s__56133;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56133__$1);
if(temp__5735__auto__){
var s__56133__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56133__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__56133__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__56135 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__56134 = (0);
while(true){
if((i__56134 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__56134);
cljs.core.chunk_append(b__56135,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),["Alpha by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k))].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-alpha-chart-data","get-portfolio-review-alpha-chart-data",2022261801),"portfolio",cljs.core.second(k)], null)], null));

var G__56306 = (i__56134 + (1));
i__56134 = G__56306;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56135),jasminegui$portfolioreview$iter__56132(cljs.core.chunk_rest(s__56133__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56135),null);
}
} else {
var k = cljs.core.first(s__56133__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),["Alpha by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k))].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-alpha-chart-data","get-portfolio-review-alpha-chart-data",2022261801),"portfolio",cljs.core.second(k)], null)], null),jasminegui$portfolioreview$iter__56132(cljs.core.rest(s__56133__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(jasminegui.portfolioreview.risk_breakdowns);
})());
jasminegui.portfolioreview.top_bottom_pages = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$portfolioreview$iter__56138(s__56139){
return (new cljs.core.LazySeq(null,(function (){
var s__56139__$1 = s__56139;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56139__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var p = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__56139__$1,p,xs__6292__auto__,temp__5735__auto__){
return (function jasminegui$portfolioreview$iter__56138_$_iter__56140(s__56141){
return (new cljs.core.LazySeq(null,((function (s__56139__$1,p,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__56141__$1 = s__56141;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__56141__$1);
if(temp__5735__auto____$1){
var s__56141__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56141__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__56141__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__56143 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__56142 = (0);
while(true){
if((i__56142 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__56142);
cljs.core.chunk_append(b__56143,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k))," contributors"].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"top-bottom","top-bottom",168796605),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-single-attribution","get-single-attribution",-1620108505),"portfolio",cljs.core.second(p)], null)], null));

var G__56307 = (i__56142 + (1));
i__56142 = G__56307;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56143),jasminegui$portfolioreview$iter__56138_$_iter__56140(cljs.core.chunk_rest(s__56141__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56143),null);
}
} else {
var k = cljs.core.first(s__56141__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k))," contributors"].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"top-bottom","top-bottom",168796605),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-single-attribution","get-single-attribution",-1620108505),"portfolio",cljs.core.second(p)], null)], null),jasminegui$portfolioreview$iter__56138_$_iter__56140(cljs.core.rest(s__56141__$2)));
}
} else {
return null;
}
break;
}
});})(s__56139__$1,p,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__56139__$1,p,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["top","top"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bottom","bottom"], null)], null)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,jasminegui$portfolioreview$iter__56138(cljs.core.rest(s__56139__$1)));
} else {
var G__56308 = cljs.core.rest(s__56139__$1);
s__56139__$1 = G__56308;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MTD","mtd"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["YTD","ytd"], null)], null));
})());
jasminegui.portfolioreview.jensen_pages = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$portfolioreview$iter__56146(s__56147){
return (new cljs.core.LazySeq(null,(function (){
var s__56147__$1 = s__56147;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56147__$1);
if(temp__5735__auto__){
var s__56147__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56147__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__56147__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__56149 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__56148 = (0);
while(true){
if((i__56148 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__56148);
cljs.core.chunk_append(b__56149,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),["Jensen by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k))].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"jensen","jensen",1152734358),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-jensen-chart-data","get-portfolio-review-jensen-chart-data",-928743439),"portfolio",cljs.core.second(k)], null)], null));

var G__56309 = (i__56148 + (1));
i__56148 = G__56309;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56149),jasminegui$portfolioreview$iter__56146(cljs.core.chunk_rest(s__56147__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56149),null);
}
} else {
var k = cljs.core.first(s__56147__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),["Jensen by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k))].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"jensen","jensen",1152734358),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-jensen-chart-data","get-portfolio-review-jensen-chart-data",-928743439),"portfolio",cljs.core.second(k)], null)], null),jasminegui$portfolioreview$iter__56146(cljs.core.rest(s__56147__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(jasminegui.portfolioreview.risk_breakdowns);
})());
jasminegui.portfolioreview.end_page = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"The End",new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),null], null);
jasminegui.portfolioreview.risk_pages = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Beta evolution over time",new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"risk","risk",2004621358),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-historical-beta-chart-data","get-portfolio-review-historical-beta-chart-data",-495389657),"portfolio",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["BR","CN","AR","TR","MX"], null)], null)], null)], null),(function (){var iter__4529__auto__ = (function jasminegui$portfolioreview$iter__56150(s__56151){
return (new cljs.core.LazySeq(null,(function (){
var s__56151__$1 = s__56151;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56151__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var k = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__56151__$1,k,xs__6292__auto__,temp__5735__auto__){
return (function jasminegui$portfolioreview$iter__56150_$_iter__56152(s__56153){
return (new cljs.core.LazySeq(null,((function (s__56151__$1,k,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__56153__$1 = s__56153;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__56153__$1);
if(temp__5735__auto____$1){
var s__56153__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56153__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__56153__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__56155 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__56154 = (0);
while(true){
if((i__56154 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__56154);
cljs.core.chunk_append(b__56155,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),["Risk by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"risk","risk",2004621358),new cljs.core.Keyword(null,"grouping","grouping",-1219230389),k,new cljs.core.Keyword(null,"subgrouping","subgrouping",792272151),p,new cljs.core.Keyword(null,"data-request","data-request",-1857027380),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,"beta contribution"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-marginal-beta-chart-data","get-portfolio-review-marginal-beta-chart-data",-1899990496),"portfolio",cljs.core.second(k)], null):null)], null));

var G__56310 = (i__56154 + (1));
i__56154 = G__56310;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56155),jasminegui$portfolioreview$iter__56150_$_iter__56152(cljs.core.chunk_rest(s__56153__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56155),null);
}
} else {
var p = cljs.core.first(s__56153__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),["Risk by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"risk","risk",2004621358),new cljs.core.Keyword(null,"grouping","grouping",-1219230389),k,new cljs.core.Keyword(null,"subgrouping","subgrouping",792272151),p,new cljs.core.Keyword(null,"data-request","data-request",-1857027380),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,"beta contribution"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-marginal-beta-chart-data","get-portfolio-review-marginal-beta-chart-data",-1899990496),"portfolio",cljs.core.second(k)], null):null)], null),jasminegui$portfolioreview$iter__56150_$_iter__56152(cljs.core.rest(s__56153__$2)));
}
} else {
return null;
}
break;
}
});})(s__56151__$1,k,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__56151__$1,k,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["weights","beta contribution","deviation from index"], null)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,jasminegui$portfolioreview$iter__56150(cljs.core.rest(s__56151__$1)));
} else {
var G__56311 = cljs.core.rest(s__56151__$1);
s__56151__$1 = G__56311;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(jasminegui.portfolioreview.risk_breakdowns);
})()),jasminegui.portfolioreview.end_page);
jasminegui.portfolioreview.pages = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Summary",new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),null], null)], null),jasminegui.portfolioreview.contribution_pages,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([jasminegui.portfolioreview.alpha_pages,jasminegui.portfolioreview.top_bottom_pages,jasminegui.portfolioreview.jensen_pages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Three year daily backtest",new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"backtest-history","backtest-history",-885251814),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),null], null)], null),jasminegui.portfolioreview.risk_pages], 0))));
jasminegui.portfolioreview.portfolio_review_navigation = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"name","name",1843675177),"Summary",new cljs.core.Keyword(null,"page-start","page-start",873967714),(0)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"contribution","contribution",-1962459669),new cljs.core.Keyword(null,"name","name",1843675177),"Contribution",new cljs.core.Keyword(null,"page-start","page-start",873967714),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56158_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nav-request","nav-request",481763558).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__56158_SHARP_)),new cljs.core.Keyword(null,"contribution","contribution",-1962459669));
}),jasminegui.portfolioreview.pages)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),new cljs.core.Keyword(null,"name","name",1843675177),"Alpha",new cljs.core.Keyword(null,"page-start","page-start",873967714),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56159_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nav-request","nav-request",481763558).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__56159_SHARP_)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
}),jasminegui.portfolioreview.pages)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"top-bottom","top-bottom",168796605),new cljs.core.Keyword(null,"name","name",1843675177),"Top contributors",new cljs.core.Keyword(null,"page-start","page-start",873967714),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56160_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nav-request","nav-request",481763558).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__56160_SHARP_)),new cljs.core.Keyword(null,"top-bottom","top-bottom",168796605));
}),jasminegui.portfolioreview.pages)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"jensen","jensen",1152734358),new cljs.core.Keyword(null,"name","name",1843675177),"Jensen",new cljs.core.Keyword(null,"page-start","page-start",873967714),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56161_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nav-request","nav-request",481763558).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__56161_SHARP_)),new cljs.core.Keyword(null,"jensen","jensen",1152734358));
}),jasminegui.portfolioreview.pages)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"backtest-history","backtest-history",-885251814),new cljs.core.Keyword(null,"name","name",1843675177),"Backtest",new cljs.core.Keyword(null,"page-start","page-start",873967714),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56162_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nav-request","nav-request",481763558).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__56162_SHARP_)),new cljs.core.Keyword(null,"backtest-history","backtest-history",-885251814));
}),jasminegui.portfolioreview.pages)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"risk","risk",2004621358),new cljs.core.Keyword(null,"name","name",1843675177),"Risk",new cljs.core.Keyword(null,"page-start","page-start",873967714),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56163_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nav-request","nav-request",481763558).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__56163_SHARP_)),new cljs.core.Keyword(null,"risk","risk",2004621358));
}),jasminegui.portfolioreview.pages)))], null)], null);
jasminegui.portfolioreview.maximum_page = cljs.core.count(jasminegui.portfolioreview.pages);
jasminegui.portfolioreview.current_page = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
jasminegui.portfolioreview.go_to_page = (function jasminegui$portfolioreview$go_to_page(n,portfolio){
cljs.core.reset_BANG_(jasminegui.portfolioreview.current_page,n);

var temp__5735__auto___56312 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.portfolioreview.pages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,new cljs.core.Keyword(null,"data-request","data-request",-1857027380)], null));
if(cljs.core.truth_(temp__5735__auto___56312)){
var req_56313 = temp__5735__auto___56312;
var G__56165_56314 = cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, ["portfolio",portfolio], null),req_56313);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56165_56314) : re_frame.core.dispatch.call(null,G__56165_56314));
} else {
}

var G__56166 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","active-tab","portfolio-review/active-tab",1429822843),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.portfolioreview.pages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,new cljs.core.Keyword(null,"nav-request","nav-request",481763558)], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56166) : re_frame.core.dispatch.call(null,G__56166));
});
jasminegui.portfolioreview.next_page_BANG_ = (function jasminegui$portfolioreview$next_page_BANG_(){
if((cljs.core.deref(jasminegui.portfolioreview.current_page) < (jasminegui.portfolioreview.maximum_page - (1)))){
return jasminegui.portfolioreview.go_to_page((cljs.core.deref(jasminegui.portfolioreview.current_page) + (1)),cljs.core.deref((function (){var G__56168 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56168) : re_frame.core.subscribe.call(null,G__56168));
})()));
} else {
return null;
}
});
jasminegui.portfolioreview.previous_page_BANG_ = (function jasminegui$portfolioreview$previous_page_BANG_(){
if((cljs.core.deref(jasminegui.portfolioreview.current_page) > (0))){
return jasminegui.portfolioreview.go_to_page((cljs.core.deref(jasminegui.portfolioreview.current_page) - (1)),cljs.core.deref((function (){var G__56169 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56169) : re_frame.core.subscribe.call(null,G__56169));
})()));
} else {
return null;
}
});
jasminegui.portfolioreview.go_to_block_BANG_ = (function jasminegui$portfolioreview$go_to_block_BANG_(x){
return jasminegui.portfolioreview.go_to_page(new cljs.core.Keyword(null,"page-start","page-start",873967714).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56170_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(p1__56170_SHARP_),x);
}),jasminegui.portfolioreview.portfolio_review_navigation))),cljs.core.deref((function (){var G__56171 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56171) : re_frame.core.subscribe.call(null,G__56171));
})()));
});
jasminegui.portfolioreview.heading_box = (function jasminegui$portfolioreview$heading_box(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"37px",new cljs.core.Keyword(null,"height","height",1025178622),"64px",new cljs.core.Keyword(null,"src","src",-1651076051),"assets/91-logo-green.png"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.portfolioreview.pages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(jasminegui.portfolioreview.current_page),new cljs.core.Keyword(null,"title","title",636505583)], null)),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null)], null)], null);
});
jasminegui.portfolioreview.portfolio_review_box_template = (function jasminegui$portfolioreview$portfolio_review_box_template(children){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.portfolioreview.standard_box_width,new cljs.core.Keyword(null,"height","height",1025178622),jasminegui.portfolioreview.standard_box_height,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"40px",new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.heading_box], null)], null),children)], null)], null);
});
jasminegui.portfolioreview.end = (function jasminegui$portfolioreview$end(){
return jasminegui.portfolioreview.portfolio_review_box_template(null);
});
jasminegui.portfolioreview.summary_text = (function jasminegui$portfolioreview$summary_text(){
var portfolio = cljs.core.deref((function (){var G__56173 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56173) : re_frame.core.subscribe.call(null,G__56173));
})());
var data = cljs.core.deref((function (){var G__56174 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","summary-data","portfolio-review/summary-data",-1362975725)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56174) : re_frame.core.subscribe.call(null,G__56174));
})());
var positions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56172_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__56172_SHARP_),portfolio);
}),cljs.core.deref((function (){var G__56175 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56175) : re_frame.core.subscribe.call(null,G__56175));
})()));
var f = (function (x){
var G__56177 = "%.0fbps";
var G__56178 = ((100) * x);
return goog.string.format(G__56177,G__56178);
});
var g = (function (x){
return goog.string.format("%.2f",x);
});
var h = (function (x){
return goog.string.format("%.1f",x);
});
return jasminegui.portfolioreview.portfolio_review_box_template(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"label","label",1718410804),["MTD, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)," returned ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mtd","mtd",1767968809),new cljs.core.Keyword(null,"portfolio","portfolio",957568598)], null))))," vs ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mtd","mtd",1767968809),new cljs.core.Keyword(null,"index","index",-1531685915)], null))))," for the index, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mtd","mtd",1767968809),new cljs.core.Keyword(null,"alpha","alpha",-1574982441)], null))))," of alpha."].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"label","label",1718410804),["YTD, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)," returned ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ytd","ytd",-2122596689),new cljs.core.Keyword(null,"portfolio","portfolio",957568598)], null))))," vs ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ytd","ytd",-2122596689),new cljs.core.Keyword(null,"index","index",-1531685915)], null))))," for the index, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ytd","ytd",-2122596689),new cljs.core.Keyword(null,"alpha","alpha",-1574982441)], null))))," of alpha."].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"label","label",1718410804),["The portfolio yield is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g(((100) * cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),positions))))),"% vs ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g(((100) * cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bm-contrib-yield","bm-contrib-yield",-1399804238),positions))))),"% for the index."].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"label","label",1718410804),["Our duration is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),positions))))," vs ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bm-contrib-eir-duration","bm-contrib-eir-duration",1013923984),positions))))," for the index."].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"label","label",1718410804),["We currently run a beta of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta","beta",455605892),new cljs.core.Keyword(null,"total","total",1916810418)], null)))),"x with top contributors being ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta","beta",455605892),new cljs.core.Keyword(null,"country-1","country-1",-1630306057)], null)))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta","beta",455605892),new cljs.core.Keyword(null,"value-1","value-1",-268597519)], null)))),"x), ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta","beta",455605892),new cljs.core.Keyword(null,"country-2","country-2",-1097494746)], null)))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta","beta",455605892),new cljs.core.Keyword(null,"value-2","value-2",1137844714)], null)))),"x), and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta","beta",455605892),new cljs.core.Keyword(null,"country-3","country-3",-1101991015)], null)))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta","beta",455605892),new cljs.core.Keyword(null,"value-3","value-3",-1646268361)], null)))),"x)."].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,["Performance data as of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__56182 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56182) : re_frame.core.subscribe.call(null,G__56182));
})())),". Risk data as of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__56183 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56183) : re_frame.core.subscribe.call(null,G__56183));
})())),"."].join('')], null)], null));
});
jasminegui.portfolioreview.ytd_performance = (function jasminegui$portfolioreview$ytd_performance(){
var data = cljs.core.deref((function (){var G__56189 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","historical-performance-chart-data","portfolio-review/historical-performance-chart-data",1185340209)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56189) : re_frame.core.subscribe.call(null,G__56189));
})());
var monthmap = cljs.core.PersistentHashMap.fromArrays(["03","09","06","07","12","05","02","11","04","01","08","10"],["Mar","Sep","Jun","Jul","Dec","May","Feb","Nov","Apr","Jan","Aug","Oct"]);
var total_alpha = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__56190 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","summary-data","portfolio-review/summary-data",-1362975725)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56190) : re_frame.core.subscribe.call(null,G__56190));
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ytd","ytd",-2122596689),new cljs.core.Keyword(null,"alpha","alpha",-1574982441)], null));
var gamma = (total_alpha - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56184_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__56184_SHARP_),"Total-Effect");
}),data))));
return jasminegui.portfolioreview.portfolio_review_box_template(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.portfolioreview.grouped_vertical_bars(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"date","date",-1463434462),(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(x),"Index")){
return (2);
} else {
return (1);
}
})),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (line){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(line,new cljs.core.Keyword(null,"group","group",582596132),(function (p1__56185_SHARP_){
var fexpr__56193 = new cljs.core.PersistentArrayMap(null, 3, ["Fund-Contribution",cljs.core.deref((function (){var G__56194 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56194) : re_frame.core.subscribe.call(null,G__56194));
})()),"Index-Contribution","Index",new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162),true], null);
return (fexpr__56193.cljs$core$IFn$_invoke$arity$1 ? fexpr__56193.cljs$core$IFn$_invoke$arity$1(p1__56185_SHARP_) : fexpr__56193.call(null,p1__56185_SHARP_));
}));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56186_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__56186_SHARP_),"Total-Effect");
}),data))),"Basis points")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.portfolioreview.vertical_waterfall(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (line){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(line,new cljs.core.Keyword(null,"date","date",-1463434462),(function (p1__56187_SHARP_){
var G__56195 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__56187_SHARP_,(4),(6));
return (monthmap.cljs$core$IFn$_invoke$arity$1 ? monthmap.cljs$core$IFn$_invoke$arity$1(G__56195) : monthmap.call(null,G__56195));
}));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56188_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__56188_SHARP_),"Total-Effect");
}),data)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"date","date",-1463434462),"Gamma",new cljs.core.Keyword(null,"group","group",582596132),"Total-Effect",new cljs.core.Keyword(null,"value","value",305978217),gamma], null)], null)),"")], null)], null)], null)], null));
});
jasminegui.portfolioreview.contribution_or_alpha_chart = (function jasminegui$portfolioreview$contribution_or_alpha_chart(data){
return jasminegui.portfolioreview.portfolio_review_box_template(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.portfolioreview.grouped_horizontal_bars(data,"Basis points")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"gap","gap",80255254),"0px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(500)], null)], null),cljs.core.deref((function (){var G__56196 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56196) : re_frame.core.subscribe.call(null,G__56196));
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(500)], null)], null),"UST categorized as cash"], null)], null)], null)], null));
});
jasminegui.portfolioreview.historical_beta = (function jasminegui$portfolioreview$historical_beta(){
return jasminegui.portfolioreview.portfolio_review_box_template(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.portfolioreview.area_chart(cljs.core.deref((function (){var G__56197 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","historical-beta-chart-data","portfolio-review/historical-beta-chart-data",-1077808147)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56197) : re_frame.core.subscribe.call(null,G__56197));
})()))], null)], null));
});
jasminegui.portfolioreview.top_contributors = (function jasminegui$portfolioreview$top_contributors(){
var display = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"Total-Effect","Total-Effect",-621899613),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56198_SHARP_){
var or__4126__auto__ = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"Sector","Sector",-1076571408).cljs$core$IFn$_invoke$arity$1(p1__56198_SHARP_)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Total"], null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"Sector","Sector",-1076571408).cljs$core$IFn$_invoke$arity$1(p1__56198_SHARP_),"Cash")) && ((!((new cljs.core.Keyword(null,"Security","Security",-778594986).cljs$core$IFn$_invoke$arity$1(p1__56198_SHARP_) == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("T",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"Security","Security",-778594986).cljs$core$IFn$_invoke$arity$1(p1__56198_SHARP_),(0),(1)))));
}
}),cljs.core.deref((function (){var G__56200 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","clean-table","single-portfolio-attribution/clean-table",-391468387)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56200) : re_frame.core.subscribe.call(null,G__56200));
})())));
return jasminegui.portfolioreview.portfolio_review_box_template(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"width","width",-384071477),"850px",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.take.cljs$core$IFn$_invoke$arity$2((20),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.portfolioreview.pages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(jasminegui.portfolioreview.current_page),new cljs.core.Keyword(null,"title","title",636505583)], null)),(4),(7)),"top"))?cljs.core.reverse(display):display)),new cljs.core.Keyword(null,"defaultFilterMethod","defaultFilterMethod",-641971243),jasminegui.tables.case_insensitive_filter,new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Bond  ",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"security","security",886963079),new cljs.core.Keyword(null,"country","country",312965309),new cljs.core.Keyword(null,"sector","sector",-1444247062)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Effect",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-effect","total-effect",-967715775)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Contribution",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contribution","contribution",-1962459669),new cljs.core.Keyword(null,"bm-contribution","bm-contribution",961434966)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Weight",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xs-weight","xs-weight",2029728902),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"bm-weight","bm-weight",217267431)], null))], null)], null),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),false,new cljs.core.Keyword(null,"sortable","sortable",2109633621),false,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false,new cljs.core.Keyword(null,"pageSize","pageSize",732080883),(20),new cljs.core.Keyword(null,"className","className",-1983287057),"-striped -highlight"], null)], null)], null)], null));
});
jasminegui.portfolioreview.backtest_history = (function jasminegui$portfolioreview$backtest_history(){
var G__56202_56315 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-var","get-portfolio-var",1001711662),cljs.core.deref((function (){var G__56203 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56203) : re_frame.core.subscribe.call(null,G__56203));
})())], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56202_56315) : re_frame.core.dispatch.call(null,G__56202_56315));

var G__56204_56316 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),new cljs.core.Keyword(null,"daily-3y","daily-3y",-2143971824)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56204_56316) : re_frame.core.dispatch.call(null,G__56204_56316));

var dates = cljs.core.deref((function (){var G__56205 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","dates","var/dates",-1599746364)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56205) : re_frame.core.subscribe.call(null,G__56205));
})());
var data = cljs.core.deref((function (){var G__56206 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56206) : re_frame.core.subscribe.call(null,G__56206));
})());
var chart_period = cljs.core.deref((function (){var G__56207 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56207) : re_frame.core.subscribe.call(null,G__56207));
})());
var line = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56201_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56201_SHARP_),chart_period);
}),jasminegui.static$.var_charts_choice_map));
var days = (function (){var G__56208 = (function (){var G__56209 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__56209) : line.call(null,G__56209));
})();
var G__56208__$1 = (((G__56208 instanceof cljs.core.Keyword))?G__56208.fqn:null);
switch (G__56208__$1) {
case "daily":
return ((function (){var G__56211 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__56211) : line.call(null,G__56211));
})() * (250));

break;
case "weekly":
return ((function (){var G__56212 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__56212) : line.call(null,G__56212));
})() * (52));

break;
case "monthly":
return ((function (){var G__56213 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__56213) : line.call(null,G__56213));
})() * (12));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56208__$1)].join('')));

}
})();
return jasminegui.portfolioreview.portfolio_review_box_template(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.charting.backtest_chart(cljs.core.take_last(days,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dates,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__56214 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__56214) : line.call(null,G__56214));
})()], null))),cljs.core.take_last(days,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolio-value","portfolio-value",-1900674109),(function (){var G__56215 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__56215) : line.call(null,G__56215));
})()], null))),(jasminegui.portfolioreview.standard_box_width_nb - (200)),(jasminegui.portfolioreview.standard_box_height_nb - (400)))], null)], null));
});
jasminegui.portfolioreview.risk_betas = (function jasminegui$portfolioreview$risk_betas(){
var data = cljs.core.deref((function (){var G__56217 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","marginal-beta-chart-data","portfolio-review/marginal-beta-chart-data",40550601)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56217) : re_frame.core.subscribe.call(null,G__56217));
})());
var groups = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),data));
var new_data = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56216_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56216_SHARP_,new cljs.core.Keyword(null,"order","order",-1254677256),groups.indexOf(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__56216_SHARP_)));
}),data);
return jasminegui.portfolioreview.portfolio_review_box_template(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.portfolioreview.stacked_vertical_bars(new_data,"Beta contribution")], null)], null));
});
jasminegui.portfolioreview.risk_weights = (function jasminegui$portfolioreview$risk_weights(){
var g = cljs.core.second(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.portfolioreview.pages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(jasminegui.portfolioreview.current_page),new cljs.core.Keyword(null,"grouping","grouping",-1219230389)], null)));
var grouping = (function (){var G__56226 = g;
switch (G__56226) {
case "Region":
return new cljs.core.Keyword(null,"jpm-region","jpm-region",-2074265852);

break;
case "Country":
return new cljs.core.Keyword(null,"qt-risk-country-name","qt-risk-country-name",1182905474);

break;
case "Sector":
return new cljs.core.Keyword(null,"qt-jpm-sector","qt-jpm-sector",1047055349);

break;
case "RatingGroup":
return new cljs.core.Keyword(null,"rating-group","rating-group",-556666182);

break;
case "Duration Bucket":
return new cljs.core.Keyword(null,"qt-final-maturity-band","qt-final-maturity-band",2059738847);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56226)].join('')));

}
})();
var data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56218_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__56218_SHARP_),cljs.core.deref((function (){var G__56227 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56227) : re_frame.core.subscribe.call(null,G__56227));
})()));
}),cljs.core.deref((function (){var G__56228 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56228) : re_frame.core.subscribe.call(null,G__56228));
})()));
var totals = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__56229 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56229) : re_frame.core.subscribe.call(null,G__56229));
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__56230 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56230) : re_frame.core.subscribe.call(null,G__56230));
})()))], null));
var grp = cljs.core.group_by(grouping,data);
var risks = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["weight",new cljs.core.Keyword(null,"weight","weight",-1262796205)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mod duration",new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["duration x spread",new cljs.core.Keyword(null,"duration-times-spread-weight","duration-times-spread-weight",1895429644)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["beta",new cljs.core.Keyword(null,"contrib-beta-1y-daily","contrib-beta-1y-daily",259924328)], null)], null);
var chart_data = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$portfolioreview$risk_weights_$_iter__56231(s__56232){
return (new cljs.core.LazySeq(null,(function (){
var s__56232__$1 = s__56232;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56232__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__56237 = cljs.core.first(xs__6292__auto__);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56237,(0),null);
var g__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56237,(1),null);
var iterys__4525__auto__ = ((function (s__56232__$1,vec__56237,k,g__$1,xs__6292__auto__,temp__5735__auto__,g,grouping,data,totals,grp,risks){
return (function jasminegui$portfolioreview$risk_weights_$_iter__56231_$_iter__56233(s__56234){
return (new cljs.core.LazySeq(null,((function (s__56232__$1,vec__56237,k,g__$1,xs__6292__auto__,temp__5735__auto__,g,grouping,data,totals,grp,risks){
return (function (){
var s__56234__$1 = s__56234;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__56234__$1);
if(temp__5735__auto____$1){
var s__56234__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56234__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__56234__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__56236 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__56235 = (0);
while(true){
if((i__56235 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__56235);
cljs.core.chunk_append(b__56236,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"group","group",582596132),k,new cljs.core.Keyword(null,"performance","performance",1987578184),cljs.core.first(r),new cljs.core.Keyword(null,"value","value",305978217),((100) * (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second(r),g__$1)) / (function (){var fexpr__56240 = cljs.core.second(r);
return (fexpr__56240.cljs$core$IFn$_invoke$arity$1 ? fexpr__56240.cljs$core$IFn$_invoke$arity$1(totals) : fexpr__56240.call(null,totals));
})()))], null));

var G__56319 = (i__56235 + (1));
i__56235 = G__56319;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56236),jasminegui$portfolioreview$risk_weights_$_iter__56231_$_iter__56233(cljs.core.chunk_rest(s__56234__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56236),null);
}
} else {
var r = cljs.core.first(s__56234__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"group","group",582596132),k,new cljs.core.Keyword(null,"performance","performance",1987578184),cljs.core.first(r),new cljs.core.Keyword(null,"value","value",305978217),((100) * (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second(r),g__$1)) / (function (){var fexpr__56241 = cljs.core.second(r);
return (fexpr__56241.cljs$core$IFn$_invoke$arity$1 ? fexpr__56241.cljs$core$IFn$_invoke$arity$1(totals) : fexpr__56241.call(null,totals));
})()))], null),jasminegui$portfolioreview$risk_weights_$_iter__56231_$_iter__56233(cljs.core.rest(s__56234__$2)));
}
} else {
return null;
}
break;
}
});})(s__56232__$1,vec__56237,k,g__$1,xs__6292__auto__,temp__5735__auto__,g,grouping,data,totals,grp,risks))
,null,null));
});})(s__56232__$1,vec__56237,k,g__$1,xs__6292__auto__,temp__5735__auto__,g,grouping,data,totals,grp,risks))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(risks));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,jasminegui$portfolioreview$risk_weights_$_iter__56231(cljs.core.rest(s__56232__$1)));
} else {
var G__56320 = cljs.core.rest(s__56232__$1);
s__56232__$1 = G__56320;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(grp);
})());
var clean_data = (function (){var G__56242 = g;
switch (G__56242) {
case "Region":
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56219_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__56219_SHARP_)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Collateral","Forwards","Equities"], null));
}),chart_data);

break;
case "Country":
var top_countries = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),cljs.core.take_last((8),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__56220_SHARP_){
var G__56243 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__56220_SHARP_);
return Math.abs(G__56243);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"performance","performance",1987578184).cljs$core$IFn$_invoke$arity$1(x),"weight");
}),chart_data))));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56221_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__56221_SHARP_)]),top_countries);
}),chart_data));

break;
case "RatingGroup":
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56222_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__56222_SHARP_)]),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["08 C","08 CC","08 D","09 NM"], null));
}),chart_data);

break;
case "Sector":
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56223_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__56223_SHARP_)]),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Collateral","Forwards","Equities","Cash","Corporate"], null));
}),chart_data);

break;
default:
return chart_data;

}
})();
var clean_data_sorted = (function (){var G__56244 = g;
switch (G__56244) {
case "RatingGroup":
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56224_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__56224_SHARP_,new cljs.core.Keyword(null,"group","group",582596132),cljs.core.subs,(3));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"performance","performance",1987578184),clean_data))));

break;
case "Duration Bucket":
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0 - 1 year","1 - 3 years","3 - 5 years","5 - 7 years","7 - 10 years","10 - 20 years","20 years +"], null).indexOf(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(x));
}),cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"performance","performance",1987578184),clean_data)));

break;
default:
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"performance","performance",1987578184),clean_data)));

}
})();
return jasminegui.portfolioreview.portfolio_review_box_template(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.portfolioreview.grouped_horizontal_bars(clean_data_sorted,"Share of total risk")], null)], null));
});
jasminegui.portfolioreview.risk_deltas = (function jasminegui$portfolioreview$risk_deltas(){
var g = cljs.core.second(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.portfolioreview.pages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(jasminegui.portfolioreview.current_page),new cljs.core.Keyword(null,"grouping","grouping",-1219230389)], null)));
var grouping = (function (){var G__56254 = g;
switch (G__56254) {
case "Region":
return new cljs.core.Keyword(null,"jpm-region","jpm-region",-2074265852);

break;
case "Country":
return new cljs.core.Keyword(null,"qt-risk-country-name","qt-risk-country-name",1182905474);

break;
case "Sector":
return new cljs.core.Keyword(null,"qt-jpm-sector","qt-jpm-sector",1047055349);

break;
case "RatingGroup":
return new cljs.core.Keyword(null,"rating-group","rating-group",-556666182);

break;
case "Duration Bucket":
return new cljs.core.Keyword(null,"qt-final-maturity-band","qt-final-maturity-band",2059738847);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56254)].join('')));

}
})();
var data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56245_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__56245_SHARP_),cljs.core.deref((function (){var G__56255 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56255) : re_frame.core.subscribe.call(null,G__56255));
})()));
}),cljs.core.deref((function (){var G__56256 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56256) : re_frame.core.subscribe.call(null,G__56256));
})()));
var totals = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__56257 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56257) : re_frame.core.subscribe.call(null,G__56257));
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__56258 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56258) : re_frame.core.subscribe.call(null,G__56258));
})()))], null));
var grp = cljs.core.group_by(grouping,data);
var risks = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["weight",new cljs.core.Keyword(null,"weight-delta","weight-delta",-1239784638)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mod duration",new cljs.core.Keyword(null,"mdur-delta","mdur-delta",-395332953)], null)], null);
var chart_data = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$portfolioreview$risk_deltas_$_iter__56259(s__56260){
return (new cljs.core.LazySeq(null,(function (){
var s__56260__$1 = s__56260;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56260__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__56265 = cljs.core.first(xs__6292__auto__);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56265,(0),null);
var g__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56265,(1),null);
var iterys__4525__auto__ = ((function (s__56260__$1,vec__56265,k,g__$1,xs__6292__auto__,temp__5735__auto__,g,grouping,data,totals,grp,risks){
return (function jasminegui$portfolioreview$risk_deltas_$_iter__56259_$_iter__56261(s__56262){
return (new cljs.core.LazySeq(null,((function (s__56260__$1,vec__56265,k,g__$1,xs__6292__auto__,temp__5735__auto__,g,grouping,data,totals,grp,risks){
return (function (){
var s__56262__$1 = s__56262;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__56262__$1);
if(temp__5735__auto____$1){
var s__56262__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56262__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__56262__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__56264 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__56263 = (0);
while(true){
if((i__56263 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__56263);
cljs.core.chunk_append(b__56264,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"group","group",582596132),k,new cljs.core.Keyword(null,"performance","performance",1987578184),cljs.core.first(r),new cljs.core.Keyword(null,"value","value",305978217),(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(r),"weight"))?100.0:1.0) * cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second(r),g__$1)))], null));

var G__56324 = (i__56263 + (1));
i__56263 = G__56324;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56264),jasminegui$portfolioreview$risk_deltas_$_iter__56259_$_iter__56261(cljs.core.chunk_rest(s__56262__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56264),null);
}
} else {
var r = cljs.core.first(s__56262__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"group","group",582596132),k,new cljs.core.Keyword(null,"performance","performance",1987578184),cljs.core.first(r),new cljs.core.Keyword(null,"value","value",305978217),(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(r),"weight"))?100.0:1.0) * cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second(r),g__$1)))], null),jasminegui$portfolioreview$risk_deltas_$_iter__56259_$_iter__56261(cljs.core.rest(s__56262__$2)));
}
} else {
return null;
}
break;
}
});})(s__56260__$1,vec__56265,k,g__$1,xs__6292__auto__,temp__5735__auto__,g,grouping,data,totals,grp,risks))
,null,null));
});})(s__56260__$1,vec__56265,k,g__$1,xs__6292__auto__,temp__5735__auto__,g,grouping,data,totals,grp,risks))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(risks));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,jasminegui$portfolioreview$risk_deltas_$_iter__56259(cljs.core.rest(s__56260__$1)));
} else {
var G__56325 = cljs.core.rest(s__56260__$1);
s__56260__$1 = G__56325;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(grp);
})());
var clean_data = (function (){var G__56268 = g;
switch (G__56268) {
case "Region":
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56246_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__56246_SHARP_)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Collateral","Forwards","Equities"], null));
}),chart_data);

break;
case "Country":
var top_countries = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),cljs.core.take_last((8),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__56247_SHARP_){
var G__56269 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__56247_SHARP_);
return Math.abs(G__56269);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"performance","performance",1987578184).cljs$core$IFn$_invoke$arity$1(x),"weight");
}),chart_data))));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56248_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__56248_SHARP_)]),top_countries);
}),chart_data));

break;
case "RatingGroup":
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56249_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__56249_SHARP_)]),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["08 C","08 CC","08 D","09 NM"], null));
}),chart_data);

break;
case "Sector":
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56250_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__56250_SHARP_)]),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Collateral","Forwards","Equities","Cash","Corporate"], null));
}),chart_data);

break;
default:
return chart_data;

}
})();
var clean_data_sorted = (function (){var G__56270 = g;
switch (G__56270) {
case "RatingGroup":
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56251_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__56251_SHARP_,new cljs.core.Keyword(null,"group","group",582596132),cljs.core.subs,(3));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"performance","performance",1987578184),clean_data))));

break;
case "Duration Bucket":
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0 - 1 year","1 - 3 years","3 - 5 years","5 - 7 years","7 - 10 years","10 - 20 years","20 years +"], null).indexOf(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(x));
}),cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"performance","performance",1987578184),clean_data)));

break;
default:
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"performance","performance",1987578184),clean_data)));

}
})();
return jasminegui.portfolioreview.portfolio_review_box_template(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.portfolioreview.simple_horizontal_bars(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56252_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"performance","performance",1987578184).cljs$core$IFn$_invoke$arity$1(p1__56252_SHARP_),"weight");
}),clean_data_sorted),"Weight vs index",".0f",1.5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.portfolioreview.simple_horizontal_bars(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56253_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"performance","performance",1987578184).cljs$core$IFn$_invoke$arity$1(p1__56253_SHARP_),"mod duration");
}),clean_data_sorted),"Duration vs index",".1f",2.0)], null)], null)], null)], null));
});
jasminegui.portfolioreview.risk = (function jasminegui$portfolioreview$risk(){
if(clojure.string.includes_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.portfolioreview.pages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(jasminegui.portfolioreview.current_page),new cljs.core.Keyword(null,"title","title",636505583)], null)),"evolution")){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.historical_beta], null);
} else {
if(clojure.string.includes_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.portfolioreview.pages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(jasminegui.portfolioreview.current_page),new cljs.core.Keyword(null,"title","title",636505583)], null)),"weights")){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.risk_weights], null);
} else {
if(clojure.string.includes_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.portfolioreview.pages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(jasminegui.portfolioreview.current_page),new cljs.core.Keyword(null,"title","title",636505583)], null)),"beta")){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.risk_betas], null);
} else {
if(clojure.string.includes_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.portfolioreview.pages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(jasminegui.portfolioreview.current_page),new cljs.core.Keyword(null,"title","title",636505583)], null)),"deviation")){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.risk_deltas], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"no data"], null);

}
}
}
}
});
jasminegui.portfolioreview.active_home = (function jasminegui$portfolioreview$active_home(){
var active_tab = cljs.core.deref((function (){var G__56271 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","active-tab","portfolio-review/active-tab",1429822843)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56271) : re_frame.core.subscribe.call(null,G__56271));
})());
window.scrollTo((0),(0));

var G__56272 = active_tab;
var G__56272__$1 = (((G__56272 instanceof cljs.core.Keyword))?G__56272.fqn:null);
switch (G__56272__$1) {
case "summary":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.summary_text], null);

break;
case "ytd-performance":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.ytd_performance], null);

break;
case "contribution":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.contribution_or_alpha_chart,cljs.core.deref((function (){var G__56273 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","contribution-chart-data","portfolio-review/contribution-chart-data",-581811845)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56273) : re_frame.core.subscribe.call(null,G__56273));
})())], null);

break;
case "alpha":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.contribution_or_alpha_chart,cljs.core.deref((function (){var G__56274 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","alpha-chart-data","portfolio-review/alpha-chart-data",-243291168)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56274) : re_frame.core.subscribe.call(null,G__56274));
})())], null);

break;
case "top-bottom":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.top_contributors], null);

break;
case "jensen":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.contribution_or_alpha_chart,cljs.core.deref((function (){var G__56275 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","jensen-chart-data","portfolio-review/jensen-chart-data",-701618636)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56275) : re_frame.core.subscribe.call(null,G__56275));
})())], null);

break;
case "backtest-history":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.backtest_history], null);

break;
case "risk":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.risk], null);

break;
case "end":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.end], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.output","div.output",1460347316),"nothing to display"], null);

}
});
jasminegui.portfolioreview.portfolio_change = (function jasminegui$portfolioreview$portfolio_change(portfolio){
var G__56276_56329 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321),portfolio], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56276_56329) : re_frame.core.dispatch.call(null,G__56276_56329));

var G__56277 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-summary-data","get-portfolio-review-summary-data",-1339542673),portfolio], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56277) : re_frame.core.dispatch.call(null,G__56277));
});
jasminegui.portfolioreview.nav = (function jasminegui$portfolioreview$nav(){
var active_tab = cljs.core.deref((function (){var G__56278 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","active-tab","portfolio-review/active-tab",1429822843)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56278) : re_frame.core.subscribe.call(null,G__56278));
})());
var portfolio_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$portfolioreview$nav_$_iter__56279(s__56280){
return (new cljs.core.LazySeq(null,(function (){
var s__56280__$1 = s__56280;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56280__$1);
if(temp__5735__auto__){
var s__56280__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56280__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__56280__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__56282 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__56281 = (0);
while(true){
if((i__56281 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__56281);
cljs.core.chunk_append(b__56282,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null));

var G__56330 = (i__56281 + (1));
i__56281 = G__56330;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56282),jasminegui$portfolioreview$nav_$_iter__56279(cljs.core.chunk_rest(s__56280__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56282),null);
}
} else {
var p = cljs.core.first(s__56280__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null),jasminegui$portfolioreview$nav_$_iter__56279(cljs.core.rest(s__56280__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref((function (){var G__56283 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56283) : re_frame.core.subscribe.call(null,G__56283));
})()));
})());
var portfolio = cljs.core.deref((function (){var G__56284 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56284) : re_frame.core.subscribe.call(null,G__56284));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"class","class",-2030961996),"leftnavbar",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"90px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary btn-block",new cljs.core.Keyword(null,"label","label",1718410804),"Previous",new cljs.core.Keyword(null,"on-click","on-click",1632826543),jasminegui.portfolioreview.previous_page_BANG_], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref(jasminegui.portfolioreview.current_page) + (1))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.portfolioreview.maximum_page)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"70px",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"90px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary btn-block",new cljs.core.Keyword(null,"label","label",1718410804),"Next",new cljs.core.Keyword(null,"on-click","on-click",1632826543),jasminegui.portfolioreview.next_page_BANG_], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"color","color",1011675173),"#CA3E47",new cljs.core.Keyword(null,"class","class",-2030961996),"separatornavline"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"model","model",331153215),portfolio,new cljs.core.Keyword(null,"choices","choices",1385611597),portfolio_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),jasminegui.portfolioreview.portfolio_change], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"color","color",1011675173),"#CA3E47",new cljs.core.Keyword(null,"class","class",-2030961996),"separatornavline"], null)], null),(function (){var iter__4529__auto__ = (function jasminegui$portfolioreview$nav_$_iter__56285(s__56286){
return (new cljs.core.LazySeq(null,(function (){
var s__56286__$1 = s__56286;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56286__$1);
if(temp__5735__auto__){
var s__56286__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56286__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__56286__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__56288 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__56287 = (0);
while(true){
if((i__56287 < size__4528__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__56287);
cljs.core.chunk_append(b__56288,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-primary btn-block",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?" active":null)].join(''),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__56287,item,c__4527__auto__,size__4528__auto__,b__56288,s__56286__$2,temp__5735__auto__,active_tab,portfolio_map,portfolio){
return (function (){
return jasminegui.portfolioreview.go_to_block_BANG_(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item));
});})(i__56287,item,c__4527__auto__,size__4528__auto__,b__56288,s__56286__$2,temp__5735__auto__,active_tab,portfolio_map,portfolio))
], null));

var G__56331 = (i__56287 + (1));
i__56287 = G__56331;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56288),jasminegui$portfolioreview$nav_$_iter__56285(cljs.core.chunk_rest(s__56286__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56288),null);
}
} else {
var item = cljs.core.first(s__56286__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-primary btn-block",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?" active":null)].join(''),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__56286__$2,temp__5735__auto__,active_tab,portfolio_map,portfolio){
return (function (){
return jasminegui.portfolioreview.go_to_block_BANG_(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item));
});})(item,s__56286__$2,temp__5735__auto__,active_tab,portfolio_map,portfolio))
], null),jasminegui$portfolioreview$nav_$_iter__56285(cljs.core.rest(s__56286__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(jasminegui.portfolioreview.portfolio_review_navigation);
})())], null)], null)], null);
});
jasminegui.portfolioreview.view = (function jasminegui$portfolioreview$view(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.nav], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.active_home], null)], null)], null);
});

//# sourceMappingURL=jasminegui.portfolioreview.js.map
