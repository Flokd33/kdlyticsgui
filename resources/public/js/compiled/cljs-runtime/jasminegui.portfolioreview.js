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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-review-summary-data","get-portfolio-review-summary-data",-1339542673),(function (p__54868,p__54869){
var map__54870 = p__54868;
var map__54870__$1 = (((((!((map__54870 == null))))?(((((map__54870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54870):map__54870);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54870__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__54871 = p__54869;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54871,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54871,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"portfolio-review?query-type=summary&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","summary-data","portfolio-review/summary-data",-1362975725)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-review-contribution-chart-data","get-portfolio-review-contribution-chart-data",1350930118),(function (p__54875,p__54876){
var map__54879 = p__54875;
var map__54879__$1 = (((((!((map__54879 == null))))?(((((map__54879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54879):map__54879);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54879__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__54880 = p__54876;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54880,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54880,(1),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54880,(2),null);
var grouping = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54880,(3),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"portfolio-review?query-type=contribution&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period),"&grouping=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(grouping)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","contribution-chart-data","portfolio-review/contribution-chart-data",-581811845)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-review-alpha-chart-data","get-portfolio-review-alpha-chart-data",2022261801),(function (p__54888,p__54889){
var map__54890 = p__54888;
var map__54890__$1 = (((((!((map__54890 == null))))?(((((map__54890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54890):map__54890);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54890__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__54891 = p__54889;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54891,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54891,(1),null);
var grouping = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54891,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"portfolio-review?query-type=alpha&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&grouping=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(grouping)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","alpha-chart-data","portfolio-review/alpha-chart-data",-243291168)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-review-jensen-chart-data","get-portfolio-review-jensen-chart-data",-928743439),(function (p__54901,p__54902){
var map__54903 = p__54901;
var map__54903__$1 = (((((!((map__54903 == null))))?(((((map__54903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54903):map__54903);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54903__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__54904 = p__54902;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54904,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54904,(1),null);
var grouping = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54904,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"portfolio-review?query-type=jensen&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&grouping=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(grouping)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","jensen-chart-data","portfolio-review/jensen-chart-data",-701618636)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-review-marginal-beta-chart-data","get-portfolio-review-marginal-beta-chart-data",-1899990496),(function (p__54913,p__54914){
var map__54915 = p__54913;
var map__54915__$1 = (((((!((map__54915 == null))))?(((((map__54915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54915):map__54915);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54915__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__54916 = p__54914;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54916,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54916,(1),null);
var grouping = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54916,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"portfolio-review?query-type=marginal-beta&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&grouping=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(grouping)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","marginal-beta-chart-data","portfolio-review/marginal-beta-chart-data",40550601)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-review-historical-beta-chart-data","get-portfolio-review-historical-beta-chart-data",-495389657),(function (p__54921,p__54922){
var map__54923 = p__54921;
var map__54923__$1 = (((((!((map__54923 == null))))?(((((map__54923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54923):map__54923);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54923__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__54924 = p__54922;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54924,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54924,(1),null);
var countries = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54924,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"portfolio-review?query-type=historical-beta&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&countries=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(countries)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","historical-beta-chart-data","portfolio-review/historical-beta-chart-data",-1077808147)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-review-historical-performance-chart-data","get-portfolio-review-historical-performance-chart-data",1554435340),(function (p__54929,p__54930){
var map__54931 = p__54929;
var map__54931__$1 = (((((!((map__54931 == null))))?(((((map__54931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54931):map__54931);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54931__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__54932 = p__54930;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54932,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54932,(1),null);
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
var new_data = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__54948_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__54948_SHARP_,new cljs.core.Keyword(null,"order","order",-1254677256),groups.indexOf(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__54948_SHARP_)));
}),data);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"$schema","$schema",1635092088),"https://vega.github.io/schema/vega-lite/v4.json",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),new_data], null),new cljs.core.Keyword(null,"width","width",-384071477),(jasminegui.portfolioreview.standard_box_width_nb - (800)),new cljs.core.Keyword(null,"height","height",1025178622),(jasminegui.portfolioreview.standard_box_height_nb - (400)),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mark","mark",-373816345),"bar",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(60)], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),"performance",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),jasminegui.portfolioreview.chart_text_size,new cljs.core.Keyword(null,"labelAngle","labelAngle",-15299184),(0)], null),new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"performance","performance",1987578184),data)),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"paddingInner","paddingInner",1289231041),0.5], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"value",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),jasminegui.portfolioreview.chart_text_size], null)], null),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"order",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"group",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"domain","domain",1847214937),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),new_data)),new cljs.core.Keyword(null,"range","range",1639692286),colors], null),new cljs.core.Keyword(null,"legend","legend",-1027192245),null], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),jasminegui.portfolioreview.chart_text_size,new cljs.core.Keyword(null,"color","color",1011675173),"white"], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"performance",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),null], null),new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"performance","performance",1987578184),data))], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"mid",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"group",new cljs.core.Keyword(null,"type","type",1174270348),"nominal"], null)], null)], null)], null)], null);
});
jasminegui.portfolioreview.area_chart = (function jasminegui$portfolioreview$area_chart(data){
var nb_countries = cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"country","country",312965309),data)));
var ordered_countries = cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__54956_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__54956_SHARP_,"Rest");
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"country","country",312965309),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),cljs.core.take_last(nb_countries,data)))),"Rest"));
var colors = cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"country","country",312965309),data))),jasminegui.portfolioreview.performance_colors);
var new_data = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__54957_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__54957_SHARP_,new cljs.core.Keyword(null,"order","order",-1254677256),ordered_countries.indexOf(new cljs.core.Keyword(null,"country","country",312965309).cljs$core$IFn$_invoke$arity$1(p1__54957_SHARP_)));
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(line,new cljs.core.Keyword(null,"value","value",305978217),(function (p1__54975_SHARP_){
var G__54982 = (100.0 * p1__54975_SHARP_);
return Math.round(G__54982);
}));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),"YTD",new cljs.core.Keyword(null,"value","value",305978217),(0)], null)], null)));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"$schema","$schema",1635092088),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"data","data",-232669377)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"date",new cljs.core.Keyword(null,"type","type",1174270348),"ordinal",new cljs.core.Keyword(null,"sort","sort",953465918),null,new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"labelAngle","labelAngle",-15299184),(0),new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),jasminegui.portfolioreview.chart_text_size], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),"sum",new cljs.core.Keyword(null,"field","field",-1302436500),"value",new cljs.core.Keyword(null,"as","as",1148689641),"sum"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),"lead",new cljs.core.Keyword(null,"field","field",-1302436500),"date",new cljs.core.Keyword(null,"as","as",1148689641),"lead"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"calculate","calculate",-1224644403),"datum.lead === null ? datum.date : datum.lead",new cljs.core.Keyword(null,"as","as",1148689641),"lead"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"calculate","calculate",-1224644403),"datum.date === 'YTD' ? 0 : datum.sum - datum.value",new cljs.core.Keyword(null,"as","as",1148689641),"previous_sum"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"calculate","calculate",-1224644403),"datum.date === 'YTD' ? datum.sum : datum.value",new cljs.core.Keyword(null,"as","as",1148689641),"value"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"calculate","calculate",-1224644403),"(datum.date !== 'Begin' && datum.date !== 'YTD' && datum.value > 0 ? '+' : '') + datum.value",new cljs.core.Keyword(null,"as","as",1148689641),"text_amount"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"calculate","calculate",-1224644403),"(datum.sum + datum.previous_sum) / 2",new cljs.core.Keyword(null,"as","as",1148689641),"center"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"calculate","calculate",-1224644403),"datum.sum < datum.previous_sum ? datum.sum : ''",new cljs.core.Keyword(null,"as","as",1148689641),"sum_dec"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"calculate","calculate",-1224644403),"datum.sum > datum.previous_sum ? datum.sum : ''",new cljs.core.Keyword(null,"as","as",1148689641),"sum_inc"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"bold",new cljs.core.Keyword(null,"color","color",1011675173),"#404040"], null)], null),(600),null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"size","size",1098693007),(45)], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"previous_sum",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"title","title",636505583),"Effect (bps)",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),jasminegui.portfolioreview.chart_text_size,new cljs.core.Keyword(null,"titleFontSize","titleFontSize",-1632214750),jasminegui.portfolioreview.chart_text_size], null)], null),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"field","field",-1302436500),"sum"], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"condition","condition",1668437652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"test","test",577538877),"datum.date === 'Begin' || datum.date === 'YTD'",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.second(jasminegui.portfolioreview.performance_colors)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"test","test",577538877),"datum.sum < datum.previous_sum",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(jasminegui.portfolioreview.performance_colors,(4))], null)], null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.first(jasminegui.portfolioreview.performance_colors)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"rule",new cljs.core.Keyword(null,"color","color",1011675173),"#404040",new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),(2),new cljs.core.Keyword(null,"xOffset","xOffset",670845631),-22.5,new cljs.core.Keyword(null,"x2Offset","x2Offset",-1958147603),22.5], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"field","field",-1302436500),"lead"], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"sum",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"dy","dy",1719547243),(-4),new cljs.core.Keyword(null,"baseline","baseline",1151033280),"bottom"], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"sum_inc",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"sum_inc",new cljs.core.Keyword(null,"type","type",1174270348),"nominal"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"dy","dy",1719547243),(4),new cljs.core.Keyword(null,"baseline","baseline",1151033280),"top"], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"sum_dec",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"sum_dec",new cljs.core.Keyword(null,"type","type",1174270348),"nominal"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"bold",new cljs.core.Keyword(null,"baseline","baseline",1151033280),"middle"], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"center",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"text_amount",new cljs.core.Keyword(null,"type","type",1174270348),"nominal"], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"condition","condition",1668437652),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"test","test",577538877),"datum.date === 'Begin' || datum.date === 'YTD'",new cljs.core.Keyword(null,"value","value",305978217),"white"], null)], null),new cljs.core.Keyword(null,"value","value",305978217),"white"], null)], null)], null)], null),"https://vega.github.io/schema/vega-lite/v4.json",(jasminegui.portfolioreview.standard_box_height_nb - (400)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),new_data], null)]);
});
jasminegui.portfolioreview.risk_breakdowns = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Region","Region"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Country","Country"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sector","Sector"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Rating","RatingGroup"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Duration","Duration Bucket"], null)], null);
jasminegui.portfolioreview.contribution_pages = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Year to date monthly performance",new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"ytd-performance","ytd-performance",-74679665),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-historical-performance-chart-data","get-portfolio-review-historical-performance-chart-data",1554435340),"portfolio"], null)], null)], null),(function (){var iter__4529__auto__ = (function jasminegui$portfolioreview$iter__54988(s__54989){
return (new cljs.core.LazySeq(null,(function (){
var s__54989__$1 = s__54989;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__54989__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var p = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__54989__$1,p,xs__6292__auto__,temp__5735__auto__){
return (function jasminegui$portfolioreview$iter__54988_$_iter__54990(s__54991){
return (new cljs.core.LazySeq(null,((function (s__54989__$1,p,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__54991__$1 = s__54991;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__54991__$1);
if(temp__5735__auto____$1){
var s__54991__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__54991__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__54991__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__54993 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__54992 = (0);
while(true){
if((i__54992 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__54992);
cljs.core.chunk_append(b__54993,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p))," Contribution by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k))].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"contribution","contribution",-1962459669),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-contribution-chart-data","get-portfolio-review-contribution-chart-data",1350930118),"portfolio",cljs.core.second(p),cljs.core.second(k)], null)], null));

var G__55174 = (i__54992 + (1));
i__54992 = G__55174;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54993),jasminegui$portfolioreview$iter__54988_$_iter__54990(cljs.core.chunk_rest(s__54991__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54993),null);
}
} else {
var k = cljs.core.first(s__54991__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p))," Contribution by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k))].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"contribution","contribution",-1962459669),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-contribution-chart-data","get-portfolio-review-contribution-chart-data",1350930118),"portfolio",cljs.core.second(p),cljs.core.second(k)], null)], null),jasminegui$portfolioreview$iter__54988_$_iter__54990(cljs.core.rest(s__54991__$2)));
}
} else {
return null;
}
break;
}
});})(s__54989__$1,p,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__54989__$1,p,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(jasminegui.portfolioreview.risk_breakdowns));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,jasminegui$portfolioreview$iter__54988(cljs.core.rest(s__54989__$1)));
} else {
var G__55175 = cljs.core.rest(s__54989__$1);
s__54989__$1 = G__55175;
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
jasminegui.portfolioreview.alpha_pages = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$portfolioreview$iter__55005(s__55006){
return (new cljs.core.LazySeq(null,(function (){
var s__55006__$1 = s__55006;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55006__$1);
if(temp__5735__auto__){
var s__55006__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55006__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55006__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55008 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55007 = (0);
while(true){
if((i__55007 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__55007);
cljs.core.chunk_append(b__55008,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),["Alpha by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k))].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-alpha-chart-data","get-portfolio-review-alpha-chart-data",2022261801),"portfolio",cljs.core.second(k)], null)], null));

var G__55176 = (i__55007 + (1));
i__55007 = G__55176;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55008),jasminegui$portfolioreview$iter__55005(cljs.core.chunk_rest(s__55006__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55008),null);
}
} else {
var k = cljs.core.first(s__55006__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),["Alpha by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k))].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-alpha-chart-data","get-portfolio-review-alpha-chart-data",2022261801),"portfolio",cljs.core.second(k)], null)], null),jasminegui$portfolioreview$iter__55005(cljs.core.rest(s__55006__$2)));
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
jasminegui.portfolioreview.top_bottom_pages = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$portfolioreview$iter__55009(s__55010){
return (new cljs.core.LazySeq(null,(function (){
var s__55010__$1 = s__55010;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55010__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var p = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__55010__$1,p,xs__6292__auto__,temp__5735__auto__){
return (function jasminegui$portfolioreview$iter__55009_$_iter__55011(s__55012){
return (new cljs.core.LazySeq(null,((function (s__55010__$1,p,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__55012__$1 = s__55012;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__55012__$1);
if(temp__5735__auto____$1){
var s__55012__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__55012__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55012__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55014 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55013 = (0);
while(true){
if((i__55013 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__55013);
cljs.core.chunk_append(b__55014,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k))," contributors"].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"top-bottom","top-bottom",168796605),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-single-attribution","get-single-attribution",-1620108505),"portfolio",cljs.core.second(p)], null)], null));

var G__55177 = (i__55013 + (1));
i__55013 = G__55177;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55014),jasminegui$portfolioreview$iter__55009_$_iter__55011(cljs.core.chunk_rest(s__55012__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55014),null);
}
} else {
var k = cljs.core.first(s__55012__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k))," contributors"].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"top-bottom","top-bottom",168796605),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-single-attribution","get-single-attribution",-1620108505),"portfolio",cljs.core.second(p)], null)], null),jasminegui$portfolioreview$iter__55009_$_iter__55011(cljs.core.rest(s__55012__$2)));
}
} else {
return null;
}
break;
}
});})(s__55010__$1,p,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__55010__$1,p,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["top","top"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bottom","bottom"], null)], null)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,jasminegui$portfolioreview$iter__55009(cljs.core.rest(s__55010__$1)));
} else {
var G__55178 = cljs.core.rest(s__55010__$1);
s__55010__$1 = G__55178;
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
jasminegui.portfolioreview.jensen_pages = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$portfolioreview$iter__55019(s__55020){
return (new cljs.core.LazySeq(null,(function (){
var s__55020__$1 = s__55020;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55020__$1);
if(temp__5735__auto__){
var s__55020__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55020__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55020__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55022 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55021 = (0);
while(true){
if((i__55021 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__55021);
cljs.core.chunk_append(b__55022,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),["Jensen by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k))].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"jensen","jensen",1152734358),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-jensen-chart-data","get-portfolio-review-jensen-chart-data",-928743439),"portfolio",cljs.core.second(k)], null)], null));

var G__55179 = (i__55021 + (1));
i__55021 = G__55179;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55022),jasminegui$portfolioreview$iter__55019(cljs.core.chunk_rest(s__55020__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55022),null);
}
} else {
var k = cljs.core.first(s__55020__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),["Jensen by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k))].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"jensen","jensen",1152734358),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-jensen-chart-data","get-portfolio-review-jensen-chart-data",-928743439),"portfolio",cljs.core.second(k)], null)], null),jasminegui$portfolioreview$iter__55019(cljs.core.rest(s__55020__$2)));
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
jasminegui.portfolioreview.risk_pages = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Beta evolution over time",new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"risk","risk",2004621358),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-historical-beta-chart-data","get-portfolio-review-historical-beta-chart-data",-495389657),"portfolio",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["BR","CN","AR","TR","MX"], null)], null)], null)], null),(function (){var iter__4529__auto__ = (function jasminegui$portfolioreview$iter__55023(s__55024){
return (new cljs.core.LazySeq(null,(function (){
var s__55024__$1 = s__55024;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55024__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var k = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__55024__$1,k,xs__6292__auto__,temp__5735__auto__){
return (function jasminegui$portfolioreview$iter__55023_$_iter__55025(s__55026){
return (new cljs.core.LazySeq(null,((function (s__55024__$1,k,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__55026__$1 = s__55026;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__55026__$1);
if(temp__5735__auto____$1){
var s__55026__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__55026__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55026__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55028 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55027 = (0);
while(true){
if((i__55027 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__55027);
cljs.core.chunk_append(b__55028,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),["Risk by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"risk","risk",2004621358),new cljs.core.Keyword(null,"grouping","grouping",-1219230389),k,new cljs.core.Keyword(null,"subgrouping","subgrouping",792272151),p,new cljs.core.Keyword(null,"data-request","data-request",-1857027380),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,"beta contribution"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-marginal-beta-chart-data","get-portfolio-review-marginal-beta-chart-data",-1899990496),"portfolio",cljs.core.second(k)], null):null)], null));

var G__55180 = (i__55027 + (1));
i__55027 = G__55180;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55028),jasminegui$portfolioreview$iter__55023_$_iter__55025(cljs.core.chunk_rest(s__55026__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55028),null);
}
} else {
var p = cljs.core.first(s__55026__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),["Risk by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"risk","risk",2004621358),new cljs.core.Keyword(null,"grouping","grouping",-1219230389),k,new cljs.core.Keyword(null,"subgrouping","subgrouping",792272151),p,new cljs.core.Keyword(null,"data-request","data-request",-1857027380),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,"beta contribution"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-marginal-beta-chart-data","get-portfolio-review-marginal-beta-chart-data",-1899990496),"portfolio",cljs.core.second(k)], null):null)], null),jasminegui$portfolioreview$iter__55023_$_iter__55025(cljs.core.rest(s__55026__$2)));
}
} else {
return null;
}
break;
}
});})(s__55024__$1,k,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__55024__$1,k,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["weights","beta contribution","deviation from index"], null)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,jasminegui$portfolioreview$iter__55023(cljs.core.rest(s__55024__$1)));
} else {
var G__55181 = cljs.core.rest(s__55024__$1);
s__55024__$1 = G__55181;
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
jasminegui.portfolioreview.portfolio_review_navigation = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"name","name",1843675177),"Summary",new cljs.core.Keyword(null,"page-start","page-start",873967714),(0)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"contribution","contribution",-1962459669),new cljs.core.Keyword(null,"name","name",1843675177),"Contribution",new cljs.core.Keyword(null,"page-start","page-start",873967714),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55032_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nav-request","nav-request",481763558).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__55032_SHARP_)),new cljs.core.Keyword(null,"contribution","contribution",-1962459669));
}),jasminegui.portfolioreview.pages)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),new cljs.core.Keyword(null,"name","name",1843675177),"Alpha",new cljs.core.Keyword(null,"page-start","page-start",873967714),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55033_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nav-request","nav-request",481763558).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__55033_SHARP_)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
}),jasminegui.portfolioreview.pages)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"top-bottom","top-bottom",168796605),new cljs.core.Keyword(null,"name","name",1843675177),"Top contributors",new cljs.core.Keyword(null,"page-start","page-start",873967714),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55034_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nav-request","nav-request",481763558).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__55034_SHARP_)),new cljs.core.Keyword(null,"top-bottom","top-bottom",168796605));
}),jasminegui.portfolioreview.pages)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"jensen","jensen",1152734358),new cljs.core.Keyword(null,"name","name",1843675177),"Jensen",new cljs.core.Keyword(null,"page-start","page-start",873967714),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55035_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nav-request","nav-request",481763558).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__55035_SHARP_)),new cljs.core.Keyword(null,"jensen","jensen",1152734358));
}),jasminegui.portfolioreview.pages)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"backtest-history","backtest-history",-885251814),new cljs.core.Keyword(null,"name","name",1843675177),"Backtest",new cljs.core.Keyword(null,"page-start","page-start",873967714),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55036_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nav-request","nav-request",481763558).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__55036_SHARP_)),new cljs.core.Keyword(null,"backtest-history","backtest-history",-885251814));
}),jasminegui.portfolioreview.pages)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"risk","risk",2004621358),new cljs.core.Keyword(null,"name","name",1843675177),"Risk",new cljs.core.Keyword(null,"page-start","page-start",873967714),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55037_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nav-request","nav-request",481763558).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__55037_SHARP_)),new cljs.core.Keyword(null,"risk","risk",2004621358));
}),jasminegui.portfolioreview.pages)))], null)], null);
jasminegui.portfolioreview.maximum_page = cljs.core.count(jasminegui.portfolioreview.pages);
jasminegui.portfolioreview.current_page = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
jasminegui.portfolioreview.go_to_page = (function jasminegui$portfolioreview$go_to_page(n,portfolio){
cljs.core.reset_BANG_(jasminegui.portfolioreview.current_page,n);

var temp__5735__auto___55182 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.portfolioreview.pages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,new cljs.core.Keyword(null,"data-request","data-request",-1857027380)], null));
if(cljs.core.truth_(temp__5735__auto___55182)){
var req_55183 = temp__5735__auto___55182;
var G__55039_55184 = cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, ["portfolio",portfolio], null),req_55183);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55039_55184) : re_frame.core.dispatch.call(null,G__55039_55184));
} else {
}

var G__55040 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","active-tab","portfolio-review/active-tab",1429822843),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.portfolioreview.pages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,new cljs.core.Keyword(null,"nav-request","nav-request",481763558)], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55040) : re_frame.core.dispatch.call(null,G__55040));
});
jasminegui.portfolioreview.next_page_BANG_ = (function jasminegui$portfolioreview$next_page_BANG_(){
if((cljs.core.deref(jasminegui.portfolioreview.current_page) < (jasminegui.portfolioreview.maximum_page - (1)))){
return jasminegui.portfolioreview.go_to_page((cljs.core.deref(jasminegui.portfolioreview.current_page) + (1)),cljs.core.deref((function (){var G__55041 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55041) : re_frame.core.subscribe.call(null,G__55041));
})()));
} else {
return null;
}
});
jasminegui.portfolioreview.previous_page_BANG_ = (function jasminegui$portfolioreview$previous_page_BANG_(){
if((cljs.core.deref(jasminegui.portfolioreview.current_page) > (0))){
return jasminegui.portfolioreview.go_to_page((cljs.core.deref(jasminegui.portfolioreview.current_page) - (1)),cljs.core.deref((function (){var G__55042 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55042) : re_frame.core.subscribe.call(null,G__55042));
})()));
} else {
return null;
}
});
jasminegui.portfolioreview.go_to_block_BANG_ = (function jasminegui$portfolioreview$go_to_block_BANG_(x){
return jasminegui.portfolioreview.go_to_page(new cljs.core.Keyword(null,"page-start","page-start",873967714).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55043_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(p1__55043_SHARP_),x);
}),jasminegui.portfolioreview.portfolio_review_navigation))),cljs.core.deref((function (){var G__55044 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55044) : re_frame.core.subscribe.call(null,G__55044));
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
var portfolio = cljs.core.deref((function (){var G__55047 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55047) : re_frame.core.subscribe.call(null,G__55047));
})());
var data = cljs.core.deref((function (){var G__55048 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","summary-data","portfolio-review/summary-data",-1362975725)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55048) : re_frame.core.subscribe.call(null,G__55048));
})());
var positions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55045_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__55045_SHARP_),portfolio);
}),cljs.core.deref((function (){var G__55049 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55049) : re_frame.core.subscribe.call(null,G__55049));
})()));
var f = (function (x){
var G__55050 = "%.0fbps";
var G__55051 = ((100) * x);
return goog.string.format(G__55050,G__55051);
});
var g = (function (x){
return goog.string.format("%.2f",x);
});
var h = (function (x){
return goog.string.format("%.1f",x);
});
return jasminegui.portfolioreview.portfolio_review_box_template(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"label","label",1718410804),["MTD, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)," returned ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mtd","mtd",1767968809),new cljs.core.Keyword(null,"portfolio","portfolio",957568598)], null))))," vs ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mtd","mtd",1767968809),new cljs.core.Keyword(null,"index","index",-1531685915)], null))))," for the index, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mtd","mtd",1767968809),new cljs.core.Keyword(null,"alpha","alpha",-1574982441)], null))))," of alpha."].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"label","label",1718410804),["YTD, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)," returned ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ytd","ytd",-2122596689),new cljs.core.Keyword(null,"portfolio","portfolio",957568598)], null))))," vs ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ytd","ytd",-2122596689),new cljs.core.Keyword(null,"index","index",-1531685915)], null))))," for the index, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ytd","ytd",-2122596689),new cljs.core.Keyword(null,"alpha","alpha",-1574982441)], null))))," of alpha."].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"label","label",1718410804),["The portfolio yield is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g(((100) * cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),positions))))),"% vs ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g(((100) * cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bm-contrib-yield","bm-contrib-yield",-1399804238),positions))))),"% for the index."].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"label","label",1718410804),["Our duration is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),positions))))," vs ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bm-contrib-eir-duration","bm-contrib-eir-duration",1013923984),positions))))," for the index."].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"label","label",1718410804),["We currently run a beta of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta","beta",455605892),new cljs.core.Keyword(null,"total","total",1916810418)], null)))),"x with top contributors being ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta","beta",455605892),new cljs.core.Keyword(null,"country-1","country-1",-1630306057)], null)))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta","beta",455605892),new cljs.core.Keyword(null,"value-1","value-1",-268597519)], null)))),"x), ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta","beta",455605892),new cljs.core.Keyword(null,"country-2","country-2",-1097494746)], null)))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta","beta",455605892),new cljs.core.Keyword(null,"value-2","value-2",1137844714)], null)))),"x), and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta","beta",455605892),new cljs.core.Keyword(null,"country-3","country-3",-1101991015)], null)))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta","beta",455605892),new cljs.core.Keyword(null,"value-3","value-3",-1646268361)], null)))),"x)."].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,["Performance data as of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__55055 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55055) : re_frame.core.subscribe.call(null,G__55055));
})())),". Risk data as of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__55057 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55057) : re_frame.core.subscribe.call(null,G__55057));
})())),"."].join('')], null)], null));
});
jasminegui.portfolioreview.ytd_performance = (function jasminegui$portfolioreview$ytd_performance(){
var data = cljs.core.deref((function (){var G__55062 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","historical-performance-chart-data","portfolio-review/historical-performance-chart-data",1185340209)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55062) : re_frame.core.subscribe.call(null,G__55062));
})());
var monthmap = cljs.core.PersistentHashMap.fromArrays(["03","09","06","07","12","05","02","11","04","01","08","10"],["Mar","Sep","Jun","Jul","Dec","May","Feb","Nov","Apr","Jan","Aug","Oct"]);
return jasminegui.portfolioreview.portfolio_review_box_template(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.portfolioreview.grouped_vertical_bars(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"date","date",-1463434462),(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(x),"Index")){
return (2);
} else {
return (1);
}
})),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (line){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(line,new cljs.core.Keyword(null,"group","group",582596132),(function (p1__55058_SHARP_){
var fexpr__55064 = new cljs.core.PersistentArrayMap(null, 3, ["Fund-Contribution",cljs.core.deref((function (){var G__55065 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55065) : re_frame.core.subscribe.call(null,G__55065));
})()),"Index-Contribution","Index",new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162),true], null);
return (fexpr__55064.cljs$core$IFn$_invoke$arity$1 ? fexpr__55064.cljs$core$IFn$_invoke$arity$1(p1__55058_SHARP_) : fexpr__55064.call(null,p1__55058_SHARP_));
}));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__55059_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__55059_SHARP_),"Total-Effect");
}),data))),"Basis points")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.portfolioreview.vertical_waterfall(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (line){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(line,new cljs.core.Keyword(null,"date","date",-1463434462),(function (p1__55060_SHARP_){
var G__55066 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__55060_SHARP_,(4),(6));
return (monthmap.cljs$core$IFn$_invoke$arity$1 ? monthmap.cljs$core$IFn$_invoke$arity$1(G__55066) : monthmap.call(null,G__55066));
}));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55061_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__55061_SHARP_),"Total-Effect");
}),data)),"")], null)], null)], null)], null));
});
jasminegui.portfolioreview.contribution_or_alpha_chart = (function jasminegui$portfolioreview$contribution_or_alpha_chart(data){
return jasminegui.portfolioreview.portfolio_review_box_template(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.portfolioreview.grouped_horizontal_bars(data,"Basis points")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(500)], null)], null),"UST categorized as cash"], null)], null)], null));
});
jasminegui.portfolioreview.historical_beta = (function jasminegui$portfolioreview$historical_beta(){
return jasminegui.portfolioreview.portfolio_review_box_template(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.portfolioreview.area_chart(cljs.core.deref((function (){var G__55068 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","historical-beta-chart-data","portfolio-review/historical-beta-chart-data",-1077808147)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55068) : re_frame.core.subscribe.call(null,G__55068));
})()))], null)], null));
});
jasminegui.portfolioreview.top_contributors = (function jasminegui$portfolioreview$top_contributors(){
var display = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"Total-Effect","Total-Effect",-621899613),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__55069_SHARP_){
var or__4126__auto__ = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"Sector","Sector",-1076571408).cljs$core$IFn$_invoke$arity$1(p1__55069_SHARP_)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Total"], null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"Sector","Sector",-1076571408).cljs$core$IFn$_invoke$arity$1(p1__55069_SHARP_),"Cash")) && ((!((new cljs.core.Keyword(null,"Security","Security",-778594986).cljs$core$IFn$_invoke$arity$1(p1__55069_SHARP_) == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("T",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"Security","Security",-778594986).cljs$core$IFn$_invoke$arity$1(p1__55069_SHARP_),(0),(1)))));
}
}),cljs.core.deref((function (){var G__55070 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","clean-table","single-portfolio-attribution/clean-table",-391468387)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55070) : re_frame.core.subscribe.call(null,G__55070));
})())));
return jasminegui.portfolioreview.portfolio_review_box_template(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"width","width",-384071477),"850px",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.take.cljs$core$IFn$_invoke$arity$2((20),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.portfolioreview.pages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(jasminegui.portfolioreview.current_page),new cljs.core.Keyword(null,"title","title",636505583)], null)),(4),(7)),"top"))?cljs.core.reverse(display):display)),new cljs.core.Keyword(null,"defaultFilterMethod","defaultFilterMethod",-641971243),jasminegui.tables.case_insensitive_filter,new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Bond  ",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"security","security",886963079),new cljs.core.Keyword(null,"country","country",312965309),new cljs.core.Keyword(null,"sector","sector",-1444247062)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Effect",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-effect","total-effect",-967715775)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Contribution",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contribution","contribution",-1962459669),new cljs.core.Keyword(null,"bm-contribution","bm-contribution",961434966)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Weight",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xs-weight","xs-weight",2029728902),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"bm-weight","bm-weight",217267431)], null))], null)], null),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),false,new cljs.core.Keyword(null,"sortable","sortable",2109633621),false,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false,new cljs.core.Keyword(null,"pageSize","pageSize",732080883),(20),new cljs.core.Keyword(null,"className","className",-1983287057),"-striped -highlight"], null)], null)], null)], null));
});
jasminegui.portfolioreview.backtest_history = (function jasminegui$portfolioreview$backtest_history(){
var G__55072_55185 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-var","get-portfolio-var",1001711662),cljs.core.deref((function (){var G__55073 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55073) : re_frame.core.subscribe.call(null,G__55073));
})())], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55072_55185) : re_frame.core.dispatch.call(null,G__55072_55185));

var G__55074_55186 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),new cljs.core.Keyword(null,"daily-3y","daily-3y",-2143971824)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55074_55186) : re_frame.core.dispatch.call(null,G__55074_55186));

var dates = cljs.core.deref((function (){var G__55075 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","dates","var/dates",-1599746364)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55075) : re_frame.core.subscribe.call(null,G__55075));
})());
var data = cljs.core.deref((function (){var G__55076 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55076) : re_frame.core.subscribe.call(null,G__55076));
})());
var chart_period = cljs.core.deref((function (){var G__55078 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55078) : re_frame.core.subscribe.call(null,G__55078));
})());
var line = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55071_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55071_SHARP_),chart_period);
}),jasminegui.static$.var_charts_choice_map));
var days = (function (){var G__55079 = (function (){var G__55080 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__55080) : line.call(null,G__55080));
})();
var G__55079__$1 = (((G__55079 instanceof cljs.core.Keyword))?G__55079.fqn:null);
switch (G__55079__$1) {
case "daily":
return ((function (){var G__55081 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__55081) : line.call(null,G__55081));
})() * (250));

break;
case "weekly":
return ((function (){var G__55082 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__55082) : line.call(null,G__55082));
})() * (52));

break;
case "monthly":
return ((function (){var G__55083 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__55083) : line.call(null,G__55083));
})() * (12));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55079__$1)].join('')));

}
})();
return jasminegui.portfolioreview.portfolio_review_box_template(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.charting.backtest_chart(cljs.core.take_last(days,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dates,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__55084 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__55084) : line.call(null,G__55084));
})()], null))),cljs.core.take_last(days,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolio-value","portfolio-value",-1900674109),(function (){var G__55085 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__55085) : line.call(null,G__55085));
})()], null))),(jasminegui.portfolioreview.standard_box_width_nb - (200)),(jasminegui.portfolioreview.standard_box_height_nb - (300)))], null)], null));
});
jasminegui.portfolioreview.risk_betas = (function jasminegui$portfolioreview$risk_betas(){
var data = cljs.core.deref((function (){var G__55087 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","marginal-beta-chart-data","portfolio-review/marginal-beta-chart-data",40550601)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55087) : re_frame.core.subscribe.call(null,G__55087));
})());
var groups = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),data));
var new_data = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55086_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__55086_SHARP_,new cljs.core.Keyword(null,"order","order",-1254677256),groups.indexOf(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__55086_SHARP_)));
}),data);
return jasminegui.portfolioreview.portfolio_review_box_template(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.portfolioreview.stacked_vertical_bars(new_data,"Beta contribution")], null)], null));
});
jasminegui.portfolioreview.risk_weights = (function jasminegui$portfolioreview$risk_weights(){
var g = cljs.core.second(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.portfolioreview.pages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(jasminegui.portfolioreview.current_page),new cljs.core.Keyword(null,"grouping","grouping",-1219230389)], null)));
var grouping = (function (){var G__55095 = g;
switch (G__55095) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55095)].join('')));

}
})();
var data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55088_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__55088_SHARP_),cljs.core.deref((function (){var G__55096 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55096) : re_frame.core.subscribe.call(null,G__55096));
})()));
}),cljs.core.deref((function (){var G__55098 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55098) : re_frame.core.subscribe.call(null,G__55098));
})()));
var totals = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__55099 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55099) : re_frame.core.subscribe.call(null,G__55099));
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__55100 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55100) : re_frame.core.subscribe.call(null,G__55100));
})()))], null));
var grp = cljs.core.group_by(grouping,data);
var risks = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["weight",new cljs.core.Keyword(null,"weight","weight",-1262796205)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mod duration",new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["duration x spread",new cljs.core.Keyword(null,"duration-times-spread-weight","duration-times-spread-weight",1895429644)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["beta",new cljs.core.Keyword(null,"contrib-beta-1y-daily","contrib-beta-1y-daily",259924328)], null)], null);
var chart_data = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$portfolioreview$risk_weights_$_iter__55101(s__55102){
return (new cljs.core.LazySeq(null,(function (){
var s__55102__$1 = s__55102;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55102__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__55107 = cljs.core.first(xs__6292__auto__);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55107,(0),null);
var g__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55107,(1),null);
var iterys__4525__auto__ = ((function (s__55102__$1,vec__55107,k,g__$1,xs__6292__auto__,temp__5735__auto__,g,grouping,data,totals,grp,risks){
return (function jasminegui$portfolioreview$risk_weights_$_iter__55101_$_iter__55103(s__55104){
return (new cljs.core.LazySeq(null,((function (s__55102__$1,vec__55107,k,g__$1,xs__6292__auto__,temp__5735__auto__,g,grouping,data,totals,grp,risks){
return (function (){
var s__55104__$1 = s__55104;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__55104__$1);
if(temp__5735__auto____$1){
var s__55104__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__55104__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55104__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55106 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55105 = (0);
while(true){
if((i__55105 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__55105);
cljs.core.chunk_append(b__55106,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"group","group",582596132),k,new cljs.core.Keyword(null,"performance","performance",1987578184),cljs.core.first(r),new cljs.core.Keyword(null,"value","value",305978217),((100) * (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second(r),g__$1)) / (function (){var fexpr__55110 = cljs.core.second(r);
return (fexpr__55110.cljs$core$IFn$_invoke$arity$1 ? fexpr__55110.cljs$core$IFn$_invoke$arity$1(totals) : fexpr__55110.call(null,totals));
})()))], null));

var G__55189 = (i__55105 + (1));
i__55105 = G__55189;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55106),jasminegui$portfolioreview$risk_weights_$_iter__55101_$_iter__55103(cljs.core.chunk_rest(s__55104__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55106),null);
}
} else {
var r = cljs.core.first(s__55104__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"group","group",582596132),k,new cljs.core.Keyword(null,"performance","performance",1987578184),cljs.core.first(r),new cljs.core.Keyword(null,"value","value",305978217),((100) * (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second(r),g__$1)) / (function (){var fexpr__55111 = cljs.core.second(r);
return (fexpr__55111.cljs$core$IFn$_invoke$arity$1 ? fexpr__55111.cljs$core$IFn$_invoke$arity$1(totals) : fexpr__55111.call(null,totals));
})()))], null),jasminegui$portfolioreview$risk_weights_$_iter__55101_$_iter__55103(cljs.core.rest(s__55104__$2)));
}
} else {
return null;
}
break;
}
});})(s__55102__$1,vec__55107,k,g__$1,xs__6292__auto__,temp__5735__auto__,g,grouping,data,totals,grp,risks))
,null,null));
});})(s__55102__$1,vec__55107,k,g__$1,xs__6292__auto__,temp__5735__auto__,g,grouping,data,totals,grp,risks))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(risks));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,jasminegui$portfolioreview$risk_weights_$_iter__55101(cljs.core.rest(s__55102__$1)));
} else {
var G__55190 = cljs.core.rest(s__55102__$1);
s__55102__$1 = G__55190;
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
var clean_data = (function (){var G__55112 = g;
switch (G__55112) {
case "Region":
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__55089_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__55089_SHARP_)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Collateral","Forwards","Equities"], null));
}),chart_data);

break;
case "Country":
var top_countries = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),cljs.core.take_last((8),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__55090_SHARP_){
var G__55113 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__55090_SHARP_);
return Math.abs(G__55113);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"performance","performance",1987578184).cljs$core$IFn$_invoke$arity$1(x),"weight");
}),chart_data))));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55091_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__55091_SHARP_)]),top_countries);
}),chart_data));

break;
case "RatingGroup":
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__55092_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__55092_SHARP_)]),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["08 C","08 CC","08 D","09 NM"], null));
}),chart_data);

break;
case "Sector":
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__55093_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__55093_SHARP_)]),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Collateral","Forwards","Equities","Cash","Corporate"], null));
}),chart_data);

break;
default:
return chart_data;

}
})();
var clean_data_sorted = (function (){var G__55114 = g;
switch (G__55114) {
case "RatingGroup":
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55094_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__55094_SHARP_,new cljs.core.Keyword(null,"group","group",582596132),cljs.core.subs,(3));
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
var grouping = (function (){var G__55124 = g;
switch (G__55124) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55124)].join('')));

}
})();
var data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55115_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__55115_SHARP_),cljs.core.deref((function (){var G__55125 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55125) : re_frame.core.subscribe.call(null,G__55125));
})()));
}),cljs.core.deref((function (){var G__55126 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55126) : re_frame.core.subscribe.call(null,G__55126));
})()));
var totals = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__55127 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55127) : re_frame.core.subscribe.call(null,G__55127));
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__55128 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55128) : re_frame.core.subscribe.call(null,G__55128));
})()))], null));
var grp = cljs.core.group_by(grouping,data);
var risks = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["weight",new cljs.core.Keyword(null,"weight-delta","weight-delta",-1239784638)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mod duration",new cljs.core.Keyword(null,"mdur-delta","mdur-delta",-395332953)], null)], null);
var chart_data = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$portfolioreview$risk_deltas_$_iter__55129(s__55130){
return (new cljs.core.LazySeq(null,(function (){
var s__55130__$1 = s__55130;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55130__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__55135 = cljs.core.first(xs__6292__auto__);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55135,(0),null);
var g__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55135,(1),null);
var iterys__4525__auto__ = ((function (s__55130__$1,vec__55135,k,g__$1,xs__6292__auto__,temp__5735__auto__,g,grouping,data,totals,grp,risks){
return (function jasminegui$portfolioreview$risk_deltas_$_iter__55129_$_iter__55131(s__55132){
return (new cljs.core.LazySeq(null,((function (s__55130__$1,vec__55135,k,g__$1,xs__6292__auto__,temp__5735__auto__,g,grouping,data,totals,grp,risks){
return (function (){
var s__55132__$1 = s__55132;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__55132__$1);
if(temp__5735__auto____$1){
var s__55132__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__55132__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55132__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55134 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55133 = (0);
while(true){
if((i__55133 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__55133);
cljs.core.chunk_append(b__55134,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"group","group",582596132),k,new cljs.core.Keyword(null,"performance","performance",1987578184),cljs.core.first(r),new cljs.core.Keyword(null,"value","value",305978217),(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(r),"weight"))?100.0:1.0) * cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second(r),g__$1)))], null));

var G__55194 = (i__55133 + (1));
i__55133 = G__55194;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55134),jasminegui$portfolioreview$risk_deltas_$_iter__55129_$_iter__55131(cljs.core.chunk_rest(s__55132__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55134),null);
}
} else {
var r = cljs.core.first(s__55132__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"group","group",582596132),k,new cljs.core.Keyword(null,"performance","performance",1987578184),cljs.core.first(r),new cljs.core.Keyword(null,"value","value",305978217),(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(r),"weight"))?100.0:1.0) * cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second(r),g__$1)))], null),jasminegui$portfolioreview$risk_deltas_$_iter__55129_$_iter__55131(cljs.core.rest(s__55132__$2)));
}
} else {
return null;
}
break;
}
});})(s__55130__$1,vec__55135,k,g__$1,xs__6292__auto__,temp__5735__auto__,g,grouping,data,totals,grp,risks))
,null,null));
});})(s__55130__$1,vec__55135,k,g__$1,xs__6292__auto__,temp__5735__auto__,g,grouping,data,totals,grp,risks))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(risks));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,jasminegui$portfolioreview$risk_deltas_$_iter__55129(cljs.core.rest(s__55130__$1)));
} else {
var G__55195 = cljs.core.rest(s__55130__$1);
s__55130__$1 = G__55195;
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
var clean_data = (function (){var G__55138 = g;
switch (G__55138) {
case "Region":
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__55116_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__55116_SHARP_)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Collateral","Forwards","Equities"], null));
}),chart_data);

break;
case "Country":
var top_countries = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),cljs.core.take_last((8),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__55117_SHARP_){
var G__55139 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__55117_SHARP_);
return Math.abs(G__55139);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"performance","performance",1987578184).cljs$core$IFn$_invoke$arity$1(x),"weight");
}),chart_data))));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55118_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__55118_SHARP_)]),top_countries);
}),chart_data));

break;
case "RatingGroup":
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__55119_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__55119_SHARP_)]),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["08 C","08 CC","08 D","09 NM"], null));
}),chart_data);

break;
case "Sector":
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__55120_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__55120_SHARP_)]),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Collateral","Forwards","Equities","Cash","Corporate"], null));
}),chart_data);

break;
default:
return chart_data;

}
})();
var clean_data_sorted = (function (){var G__55140 = g;
switch (G__55140) {
case "RatingGroup":
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55121_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__55121_SHARP_,new cljs.core.Keyword(null,"group","group",582596132),cljs.core.subs,(3));
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
return jasminegui.portfolioreview.portfolio_review_box_template(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.portfolioreview.simple_horizontal_bars(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55122_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"performance","performance",1987578184).cljs$core$IFn$_invoke$arity$1(p1__55122_SHARP_),"weight");
}),clean_data_sorted),"Weight vs index",".0f",1.5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.portfolioreview.simple_horizontal_bars(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55123_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"performance","performance",1987578184).cljs$core$IFn$_invoke$arity$1(p1__55123_SHARP_),"mod duration");
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
var active_tab = cljs.core.deref((function (){var G__55141 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","active-tab","portfolio-review/active-tab",1429822843)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55141) : re_frame.core.subscribe.call(null,G__55141));
})());
window.scrollTo((0),(0));

var G__55142 = active_tab;
var G__55142__$1 = (((G__55142 instanceof cljs.core.Keyword))?G__55142.fqn:null);
switch (G__55142__$1) {
case "summary":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.summary_text], null);

break;
case "ytd-performance":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.ytd_performance], null);

break;
case "contribution":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.contribution_or_alpha_chart,cljs.core.deref((function (){var G__55143 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","contribution-chart-data","portfolio-review/contribution-chart-data",-581811845)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55143) : re_frame.core.subscribe.call(null,G__55143));
})())], null);

break;
case "alpha":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.contribution_or_alpha_chart,cljs.core.deref((function (){var G__55144 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","alpha-chart-data","portfolio-review/alpha-chart-data",-243291168)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55144) : re_frame.core.subscribe.call(null,G__55144));
})())], null);

break;
case "top-bottom":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.top_contributors], null);

break;
case "jensen":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.contribution_or_alpha_chart,cljs.core.deref((function (){var G__55145 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","jensen-chart-data","portfolio-review/jensen-chart-data",-701618636)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55145) : re_frame.core.subscribe.call(null,G__55145));
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
var G__55146_55199 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321),portfolio], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55146_55199) : re_frame.core.dispatch.call(null,G__55146_55199));

var G__55147 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-summary-data","get-portfolio-review-summary-data",-1339542673),portfolio], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55147) : re_frame.core.dispatch.call(null,G__55147));
});
jasminegui.portfolioreview.nav = (function jasminegui$portfolioreview$nav(){
var active_tab = cljs.core.deref((function (){var G__55148 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","active-tab","portfolio-review/active-tab",1429822843)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55148) : re_frame.core.subscribe.call(null,G__55148));
})());
var portfolio_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$portfolioreview$nav_$_iter__55149(s__55150){
return (new cljs.core.LazySeq(null,(function (){
var s__55150__$1 = s__55150;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55150__$1);
if(temp__5735__auto__){
var s__55150__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55150__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55150__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55152 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55151 = (0);
while(true){
if((i__55151 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__55151);
cljs.core.chunk_append(b__55152,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null));

var G__55200 = (i__55151 + (1));
i__55151 = G__55200;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55152),jasminegui$portfolioreview$nav_$_iter__55149(cljs.core.chunk_rest(s__55150__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55152),null);
}
} else {
var p = cljs.core.first(s__55150__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null),jasminegui$portfolioreview$nav_$_iter__55149(cljs.core.rest(s__55150__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref((function (){var G__55153 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55153) : re_frame.core.subscribe.call(null,G__55153));
})()));
})());
var portfolio = cljs.core.deref((function (){var G__55154 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55154) : re_frame.core.subscribe.call(null,G__55154));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"class","class",-2030961996),"leftnavbar",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"90px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary btn-block",new cljs.core.Keyword(null,"label","label",1718410804),"Previous",new cljs.core.Keyword(null,"on-click","on-click",1632826543),jasminegui.portfolioreview.previous_page_BANG_], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref(jasminegui.portfolioreview.current_page) + (1))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.portfolioreview.maximum_page)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"70px",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"90px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary btn-block",new cljs.core.Keyword(null,"label","label",1718410804),"Next",new cljs.core.Keyword(null,"on-click","on-click",1632826543),jasminegui.portfolioreview.next_page_BANG_], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"color","color",1011675173),"#CA3E47",new cljs.core.Keyword(null,"class","class",-2030961996),"separatornavline"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"model","model",331153215),portfolio,new cljs.core.Keyword(null,"choices","choices",1385611597),portfolio_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),jasminegui.portfolioreview.portfolio_change], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"color","color",1011675173),"#CA3E47",new cljs.core.Keyword(null,"class","class",-2030961996),"separatornavline"], null)], null),(function (){var iter__4529__auto__ = (function jasminegui$portfolioreview$nav_$_iter__55155(s__55156){
return (new cljs.core.LazySeq(null,(function (){
var s__55156__$1 = s__55156;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55156__$1);
if(temp__5735__auto__){
var s__55156__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55156__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55156__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55158 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55157 = (0);
while(true){
if((i__55157 < size__4528__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__55157);
cljs.core.chunk_append(b__55158,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-primary btn-block",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?" active":null)].join(''),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55157,item,c__4527__auto__,size__4528__auto__,b__55158,s__55156__$2,temp__5735__auto__,active_tab,portfolio_map,portfolio){
return (function (){
return jasminegui.portfolioreview.go_to_block_BANG_(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item));
});})(i__55157,item,c__4527__auto__,size__4528__auto__,b__55158,s__55156__$2,temp__5735__auto__,active_tab,portfolio_map,portfolio))
], null));

var G__55201 = (i__55157 + (1));
i__55157 = G__55201;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55158),jasminegui$portfolioreview$nav_$_iter__55155(cljs.core.chunk_rest(s__55156__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55158),null);
}
} else {
var item = cljs.core.first(s__55156__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-primary btn-block",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?" active":null)].join(''),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__55156__$2,temp__5735__auto__,active_tab,portfolio_map,portfolio){
return (function (){
return jasminegui.portfolioreview.go_to_block_BANG_(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item));
});})(item,s__55156__$2,temp__5735__auto__,active_tab,portfolio_map,portfolio))
], null),jasminegui$portfolioreview$nav_$_iter__55155(cljs.core.rest(s__55156__$2)));
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
