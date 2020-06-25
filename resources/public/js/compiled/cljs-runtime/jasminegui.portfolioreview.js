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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-review-summary-data","get-portfolio-review-summary-data",-1339542673),(function (p__63254,p__63257){
var map__63258 = p__63254;
var map__63258__$1 = (((((!((map__63258 == null))))?(((((map__63258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63258):map__63258);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63258__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63260 = p__63257;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63260,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63260,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"portfolio-review?query-type=summary&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","summary-data","portfolio-review/summary-data",-1362975725)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-review-contribution-chart-data","get-portfolio-review-contribution-chart-data",1350930118),(function (p__63283,p__63284){
var map__63289 = p__63283;
var map__63289__$1 = (((((!((map__63289 == null))))?(((((map__63289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63289):map__63289);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63289__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63294 = p__63284;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63294,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63294,(1),null);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63294,(2),null);
var grouping = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63294,(3),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"portfolio-review?query-type=contribution&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period),"&grouping=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(grouping)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","contribution-chart-data","portfolio-review/contribution-chart-data",-581811845)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-review-alpha-chart-data","get-portfolio-review-alpha-chart-data",2022261801),(function (p__63319,p__63320){
var map__63328 = p__63319;
var map__63328__$1 = (((((!((map__63328 == null))))?(((((map__63328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63328):map__63328);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63328__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63329 = p__63320;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63329,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63329,(1),null);
var grouping = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63329,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"portfolio-review?query-type=alpha&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&grouping=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(grouping)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","alpha-chart-data","portfolio-review/alpha-chart-data",-243291168)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-review-jensen-chart-data","get-portfolio-review-jensen-chart-data",-928743439),(function (p__63354,p__63355){
var map__63360 = p__63354;
var map__63360__$1 = (((((!((map__63360 == null))))?(((((map__63360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63360):map__63360);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63360__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63361 = p__63355;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63361,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63361,(1),null);
var grouping = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63361,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"portfolio-review?query-type=jensen&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&grouping=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(grouping)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","jensen-chart-data","portfolio-review/jensen-chart-data",-701618636)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolio-review-marginal-beta-chart-data","get-portfolio-review-marginal-beta-chart-data",-1899990496),(function (p__63389,p__63390){
var map__63395 = p__63389;
var map__63395__$1 = (((((!((map__63395 == null))))?(((((map__63395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63395):map__63395);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63395__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63396 = p__63390;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63396,(0),null);
var portfolio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63396,(1),null);
var grouping = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63396,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.static$.server_address),"portfolio-review?query-type=marginal-beta&portfolio=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio),"&grouping=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(grouping)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","marginal-beta-chart-data","portfolio-review/marginal-beta-chart-data",40550601)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
jasminegui.portfolioreview.standard_box_width = "1600px";
jasminegui.portfolioreview.standard_box_height = "1024px";
jasminegui.portfolioreview.standard_box_width_nb = (1600);
jasminegui.portfolioreview.standard_box_height_nb = (1024);
jasminegui.portfolioreview.performance_colors = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#134848","#009D80","#FDAA94","#74908D","#591739","#0D3232","#026E62","#C0746D","#54666D","#3C0E2E"], null);
jasminegui.portfolioreview.grouped_horizontal_bars = (function jasminegui$portfolioreview$grouped_horizontal_bars(data,title){

var individual_height = (((cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),data))) > (10)))?(20):(60));
var text_size = (16);
var perf_sort = cljs.core.reverse(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"performance","performance",1987578184),data)));
var colors = cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"performance","performance",1987578184),data))),jasminegui.portfolioreview.performance_colors));
var scl = ((function (){var x__4214__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),data));
var y__4215__auto__ = (- cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),data)));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() / (40));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"$schema","$schema",1635092088),"https://vega.github.io/schema/vega-lite/v4.json",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),data], null),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"calculate","calculate",-1224644403),["datum.value >= 0 ? datum.value + ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scl)," : datum.value - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scl)].join(''),new cljs.core.Keyword(null,"as","as",1148689641),"valuetxt"], null)], null),new cljs.core.Keyword(null,"facet","facet",-801327574),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),"group",new cljs.core.Keyword(null,"type","type",1174270348),"ordinal",new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),data),new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"labelAngle","labelAngle",-15299184),(0),new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),text_size,new cljs.core.Keyword(null,"labelAlign","labelAlign",-1669868327),"left"], null)], null)], null),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mark","mark",-373816345),"bar",new cljs.core.Keyword(null,"width","width",-384071477),(jasminegui.portfolioreview.standard_box_width_nb - (400)),new cljs.core.Keyword(null,"height","height",1025178622),individual_height,new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),"sum",new cljs.core.Keyword(null,"field","field",-1302436500),"value",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"titleFontSize","titleFontSize",-1632214750),text_size,new cljs.core.Keyword(null,"titleFontWeight","titleFontWeight",-1346956866),"normal",new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),text_size,new cljs.core.Keyword(null,"gridColor","gridColor",-961341892),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"condition","condition",1668437652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"test","test",577538877),"datum.value === 0",new cljs.core.Keyword(null,"value","value",305978217),"black"], null)], null)], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"performance",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"sort","sort",953465918),perf_sort,new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"labels","labels",-626734591),false], null)], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"performance",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),colors], null),new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),text_size], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),text_size], null),new cljs.core.Keyword(null,"width","width",-384071477),(jasminegui.portfolioreview.standard_box_width_nb - (400)),new cljs.core.Keyword(null,"height","height",1025178622),individual_height,new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),"sum",new cljs.core.Keyword(null,"field","field",-1302436500),"valuetxt",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),null], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"performance",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"sort","sort",953465918),perf_sort,new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"labels","labels",-626734591),false], null)], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"performance",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),colors], null),new cljs.core.Keyword(null,"legend","legend",-1027192245),null], null),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"value",new cljs.core.Keyword(null,"format","format",-1306924766),".0f"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"transparent"], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"domainWidth","domainWidth",2049565375),(1)], null)], null)], null);
});
jasminegui.portfolioreview.simple_horizontal_bars = (function jasminegui$portfolioreview$simple_horizontal_bars(data,title,fmt,dc){

var individual_height = (((cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),data))) > (10)))?(20):(60));
var text_size = (16);
var scl = (dc * ((function (){var x__4214__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),data));
var y__4215__auto__ = (- cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),data)));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() / (40)));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"$schema","$schema",1635092088),"https://vega.github.io/schema/vega-lite/v4.json",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),data], null),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"calculate","calculate",-1224644403),["datum.value >= 0 ? datum.value + ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scl)," : datum.value - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scl)].join(''),new cljs.core.Keyword(null,"as","as",1148689641),"valuetxt"], null)], null),new cljs.core.Keyword(null,"facet","facet",-801327574),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),"group",new cljs.core.Keyword(null,"type","type",1174270348),"ordinal",new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),data),new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"labelAngle","labelAngle",-15299184),(0),new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),text_size,new cljs.core.Keyword(null,"labelAlign","labelAlign",-1669868327),"left"], null)], null)], null),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mark","mark",-373816345),"bar",new cljs.core.Keyword(null,"width","width",-384071477),((jasminegui.portfolioreview.standard_box_width_nb / (2)) - (250)),new cljs.core.Keyword(null,"height","height",1025178622),individual_height,new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),"sum",new cljs.core.Keyword(null,"field","field",-1302436500),"value",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"titleFontSize","titleFontSize",-1632214750),text_size,new cljs.core.Keyword(null,"titleFontWeight","titleFontWeight",-1346956866),"normal",new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),text_size,new cljs.core.Keyword(null,"gridColor","gridColor",-961341892),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"condition","condition",1668437652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"test","test",577538877),"datum.value === 0",new cljs.core.Keyword(null,"value","value",305978217),"black"], null)], null)], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"performance",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"labels","labels",-626734591),false], null)], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"performance",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(jasminegui.portfolioreview.performance_colors)], null)], null),new cljs.core.Keyword(null,"legend","legend",-1027192245),null], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),text_size], null),new cljs.core.Keyword(null,"width","width",-384071477),((jasminegui.portfolioreview.standard_box_width_nb / (2)) - (250)),new cljs.core.Keyword(null,"height","height",1025178622),individual_height,new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),"sum",new cljs.core.Keyword(null,"field","field",-1302436500),"valuetxt",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),null], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"performance",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"labels","labels",-626734591),false], null)], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"performance",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(jasminegui.portfolioreview.performance_colors)], null)], null),new cljs.core.Keyword(null,"legend","legend",-1027192245),null], null),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"value",new cljs.core.Keyword(null,"format","format",-1306924766),fmt], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"transparent"], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"domainWidth","domainWidth",2049565375),(1)], null)], null)], null);
});
jasminegui.portfolioreview.stacked_vertical_bars = (function jasminegui$portfolioreview$stacked_vertical_bars(data,title){
var text_size = (16);
var groups = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),data));
var colors = cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),data))),jasminegui.portfolioreview.performance_colors);
var new_data = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__63475_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__63475_SHARP_,new cljs.core.Keyword(null,"order","order",-1254677256),groups.indexOf(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__63475_SHARP_)));
}),data);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_data,colors], 0));

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"$schema","$schema",1635092088),"https://vega.github.io/schema/vega-lite/v4.json",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),new_data], null),new cljs.core.Keyword(null,"width","width",-384071477),(jasminegui.portfolioreview.standard_box_width_nb - (800)),new cljs.core.Keyword(null,"height","height",1025178622),(jasminegui.portfolioreview.standard_box_height_nb - (400)),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mark","mark",-373816345),"bar",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(60)], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),"performance",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),text_size,new cljs.core.Keyword(null,"labelAngle","labelAngle",-15299184),(0)], null),new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"performance","performance",1987578184),data)),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"paddingInner","paddingInner",1289231041),0.5], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"value",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),text_size], null)], null),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"order",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"group",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"domain","domain",1847214937),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),new_data)),new cljs.core.Keyword(null,"range","range",1639692286),colors], null),new cljs.core.Keyword(null,"legend","legend",-1027192245),null], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),text_size,new cljs.core.Keyword(null,"color","color",1011675173),"white"], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"performance",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),null], null),new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"performance","performance",1987578184),data))], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"mid",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"group",new cljs.core.Keyword(null,"type","type",1174270348),"nominal"], null)], null)], null)], null)], null);
});
jasminegui.portfolioreview.risk_breakdowns = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Region","Region"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Country","Country"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sector","Sector"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Rating","RatingGroup"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Duration","Duration Bucket"], null)], null);
jasminegui.portfolioreview.contribution_pages = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$portfolioreview$iter__63499(s__63500){
return (new cljs.core.LazySeq(null,(function (){
var s__63500__$1 = s__63500;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63500__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var p = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__63500__$1,p,xs__6292__auto__,temp__5735__auto__){
return (function jasminegui$portfolioreview$iter__63499_$_iter__63501(s__63502){
return (new cljs.core.LazySeq(null,((function (s__63500__$1,p,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__63502__$1 = s__63502;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__63502__$1);
if(temp__5735__auto____$1){
var s__63502__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__63502__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__63502__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__63504 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__63503 = (0);
while(true){
if((i__63503 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__63503);
cljs.core.chunk_append(b__63504,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p))," Contribution by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k))].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"contribution","contribution",-1962459669),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-contribution-chart-data","get-portfolio-review-contribution-chart-data",1350930118),"portfolio",cljs.core.second(p),cljs.core.second(k)], null)], null));

var G__63991 = (i__63503 + (1));
i__63503 = G__63991;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63504),jasminegui$portfolioreview$iter__63499_$_iter__63501(cljs.core.chunk_rest(s__63502__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63504),null);
}
} else {
var k = cljs.core.first(s__63502__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p))," Contribution by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k))].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"contribution","contribution",-1962459669),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-contribution-chart-data","get-portfolio-review-contribution-chart-data",1350930118),"portfolio",cljs.core.second(p),cljs.core.second(k)], null)], null),jasminegui$portfolioreview$iter__63499_$_iter__63501(cljs.core.rest(s__63502__$2)));
}
} else {
return null;
}
break;
}
});})(s__63500__$1,p,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__63500__$1,p,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(jasminegui.portfolioreview.risk_breakdowns));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,jasminegui$portfolioreview$iter__63499(cljs.core.rest(s__63500__$1)));
} else {
var G__63995 = cljs.core.rest(s__63500__$1);
s__63500__$1 = G__63995;
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
jasminegui.portfolioreview.alpha_pages = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$portfolioreview$iter__63532(s__63533){
return (new cljs.core.LazySeq(null,(function (){
var s__63533__$1 = s__63533;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63533__$1);
if(temp__5735__auto__){
var s__63533__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63533__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__63533__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__63535 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__63534 = (0);
while(true){
if((i__63534 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__63534);
cljs.core.chunk_append(b__63535,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),["Alpha by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k))].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-alpha-chart-data","get-portfolio-review-alpha-chart-data",2022261801),"portfolio",cljs.core.second(k)], null)], null));

var G__64001 = (i__63534 + (1));
i__63534 = G__64001;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63535),jasminegui$portfolioreview$iter__63532(cljs.core.chunk_rest(s__63533__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63535),null);
}
} else {
var k = cljs.core.first(s__63533__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),["Alpha by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k))].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-alpha-chart-data","get-portfolio-review-alpha-chart-data",2022261801),"portfolio",cljs.core.second(k)], null)], null),jasminegui$portfolioreview$iter__63532(cljs.core.rest(s__63533__$2)));
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
jasminegui.portfolioreview.top_bottom_pages = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$portfolioreview$iter__63559(s__63560){
return (new cljs.core.LazySeq(null,(function (){
var s__63560__$1 = s__63560;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63560__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var p = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__63560__$1,p,xs__6292__auto__,temp__5735__auto__){
return (function jasminegui$portfolioreview$iter__63559_$_iter__63561(s__63562){
return (new cljs.core.LazySeq(null,((function (s__63560__$1,p,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__63562__$1 = s__63562;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__63562__$1);
if(temp__5735__auto____$1){
var s__63562__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__63562__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__63562__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__63564 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__63563 = (0);
while(true){
if((i__63563 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__63563);
cljs.core.chunk_append(b__63564,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k))," contributors"].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"top-bottom","top-bottom",168796605),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-single-attribution","get-single-attribution",-1620108505),"portfolio",cljs.core.second(p)], null)], null));

var G__64003 = (i__63563 + (1));
i__63563 = G__64003;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63564),jasminegui$portfolioreview$iter__63559_$_iter__63561(cljs.core.chunk_rest(s__63562__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63564),null);
}
} else {
var k = cljs.core.first(s__63562__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k))," contributors"].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"top-bottom","top-bottom",168796605),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-single-attribution","get-single-attribution",-1620108505),"portfolio",cljs.core.second(p)], null)], null),jasminegui$portfolioreview$iter__63559_$_iter__63561(cljs.core.rest(s__63562__$2)));
}
} else {
return null;
}
break;
}
});})(s__63560__$1,p,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__63560__$1,p,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["top","top"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bottom","bottom"], null)], null)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,jasminegui$portfolioreview$iter__63559(cljs.core.rest(s__63560__$1)));
} else {
var G__64007 = cljs.core.rest(s__63560__$1);
s__63560__$1 = G__64007;
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
jasminegui.portfolioreview.jensen_pages = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$portfolioreview$iter__63611(s__63612){
return (new cljs.core.LazySeq(null,(function (){
var s__63612__$1 = s__63612;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63612__$1);
if(temp__5735__auto__){
var s__63612__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63612__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__63612__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__63614 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__63613 = (0);
while(true){
if((i__63613 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__63613);
cljs.core.chunk_append(b__63614,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),["Jensen by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k))].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"jensen","jensen",1152734358),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-jensen-chart-data","get-portfolio-review-jensen-chart-data",-928743439),"portfolio",cljs.core.second(k)], null)], null));

var G__64014 = (i__63613 + (1));
i__63613 = G__64014;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63614),jasminegui$portfolioreview$iter__63611(cljs.core.chunk_rest(s__63612__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63614),null);
}
} else {
var k = cljs.core.first(s__63612__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),["Jensen by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k))].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"jensen","jensen",1152734358),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-jensen-chart-data","get-portfolio-review-jensen-chart-data",-928743439),"portfolio",cljs.core.second(k)], null)], null),jasminegui$portfolioreview$iter__63611(cljs.core.rest(s__63612__$2)));
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
jasminegui.portfolioreview.risk_pages = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$portfolioreview$iter__63629(s__63630){
return (new cljs.core.LazySeq(null,(function (){
var s__63630__$1 = s__63630;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63630__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var k = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__63630__$1,k,xs__6292__auto__,temp__5735__auto__){
return (function jasminegui$portfolioreview$iter__63629_$_iter__63631(s__63632){
return (new cljs.core.LazySeq(null,((function (s__63630__$1,k,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__63632__$1 = s__63632;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__63632__$1);
if(temp__5735__auto____$1){
var s__63632__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__63632__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__63632__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__63634 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__63633 = (0);
while(true){
if((i__63633 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__63633);
cljs.core.chunk_append(b__63634,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),["Risk by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"risk","risk",2004621358),new cljs.core.Keyword(null,"grouping","grouping",-1219230389),k,new cljs.core.Keyword(null,"subgrouping","subgrouping",792272151),p,new cljs.core.Keyword(null,"data-request","data-request",-1857027380),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,"beta contribution"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-marginal-beta-chart-data","get-portfolio-review-marginal-beta-chart-data",-1899990496),"portfolio",cljs.core.second(k)], null):null)], null));

var G__64034 = (i__63633 + (1));
i__63633 = G__64034;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63634),jasminegui$portfolioreview$iter__63629_$_iter__63631(cljs.core.chunk_rest(s__63632__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63634),null);
}
} else {
var p = cljs.core.first(s__63632__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),["Risk by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"risk","risk",2004621358),new cljs.core.Keyword(null,"grouping","grouping",-1219230389),k,new cljs.core.Keyword(null,"subgrouping","subgrouping",792272151),p,new cljs.core.Keyword(null,"data-request","data-request",-1857027380),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,"beta contribution"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-marginal-beta-chart-data","get-portfolio-review-marginal-beta-chart-data",-1899990496),"portfolio",cljs.core.second(k)], null):null)], null),jasminegui$portfolioreview$iter__63629_$_iter__63631(cljs.core.rest(s__63632__$2)));
}
} else {
return null;
}
break;
}
});})(s__63630__$1,k,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__63630__$1,k,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["weights","beta contribution","deviation from index"], null)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,jasminegui$portfolioreview$iter__63629(cljs.core.rest(s__63630__$1)));
} else {
var G__64035 = cljs.core.rest(s__63630__$1);
s__63630__$1 = G__64035;
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
})());
jasminegui.portfolioreview.pages = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Summary",new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),null], null)], null),jasminegui.portfolioreview.contribution_pages,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([jasminegui.portfolioreview.alpha_pages,jasminegui.portfolioreview.top_bottom_pages,jasminegui.portfolioreview.jensen_pages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Three year daily backtest",new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"backtest-history","backtest-history",-885251814),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),null], null)], null),jasminegui.portfolioreview.risk_pages], 0))));
jasminegui.portfolioreview.portfolio_review_navigation = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"name","name",1843675177),"Summary",new cljs.core.Keyword(null,"page-start","page-start",873967714),(0)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"contribution","contribution",-1962459669),new cljs.core.Keyword(null,"name","name",1843675177),"Contribution",new cljs.core.Keyword(null,"page-start","page-start",873967714),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__63663_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nav-request","nav-request",481763558).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__63663_SHARP_)),new cljs.core.Keyword(null,"contribution","contribution",-1962459669));
}),jasminegui.portfolioreview.pages)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),new cljs.core.Keyword(null,"name","name",1843675177),"Alpha",new cljs.core.Keyword(null,"page-start","page-start",873967714),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__63664_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nav-request","nav-request",481763558).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__63664_SHARP_)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
}),jasminegui.portfolioreview.pages)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"top-bottom","top-bottom",168796605),new cljs.core.Keyword(null,"name","name",1843675177),"Top contributors",new cljs.core.Keyword(null,"page-start","page-start",873967714),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__63665_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nav-request","nav-request",481763558).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__63665_SHARP_)),new cljs.core.Keyword(null,"top-bottom","top-bottom",168796605));
}),jasminegui.portfolioreview.pages)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"jensen","jensen",1152734358),new cljs.core.Keyword(null,"name","name",1843675177),"Jensen",new cljs.core.Keyword(null,"page-start","page-start",873967714),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__63666_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nav-request","nav-request",481763558).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__63666_SHARP_)),new cljs.core.Keyword(null,"jensen","jensen",1152734358));
}),jasminegui.portfolioreview.pages)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"backtest-history","backtest-history",-885251814),new cljs.core.Keyword(null,"name","name",1843675177),"Backtest",new cljs.core.Keyword(null,"page-start","page-start",873967714),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__63667_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nav-request","nav-request",481763558).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__63667_SHARP_)),new cljs.core.Keyword(null,"backtest-history","backtest-history",-885251814));
}),jasminegui.portfolioreview.pages)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"risk","risk",2004621358),new cljs.core.Keyword(null,"name","name",1843675177),"Risk",new cljs.core.Keyword(null,"page-start","page-start",873967714),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__63668_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nav-request","nav-request",481763558).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__63668_SHARP_)),new cljs.core.Keyword(null,"risk","risk",2004621358));
}),jasminegui.portfolioreview.pages)))], null)], null);
jasminegui.portfolioreview.maximum_page = cljs.core.count(jasminegui.portfolioreview.pages);
jasminegui.portfolioreview.current_page = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
jasminegui.portfolioreview.go_to_page = (function jasminegui$portfolioreview$go_to_page(n,portfolio){
cljs.core.reset_BANG_(jasminegui.portfolioreview.current_page,n);

var temp__5735__auto___64044 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.portfolioreview.pages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,new cljs.core.Keyword(null,"data-request","data-request",-1857027380)], null));
if(cljs.core.truth_(temp__5735__auto___64044)){
var req_64045 = temp__5735__auto___64044;
var G__63678_64046 = cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, ["portfolio",portfolio], null),req_64045);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63678_64046) : re_frame.core.dispatch.call(null,G__63678_64046));
} else {
}

var G__63679 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","active-tab","portfolio-review/active-tab",1429822843),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.portfolioreview.pages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,new cljs.core.Keyword(null,"nav-request","nav-request",481763558)], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63679) : re_frame.core.dispatch.call(null,G__63679));
});
jasminegui.portfolioreview.next_page_BANG_ = (function jasminegui$portfolioreview$next_page_BANG_(){
if((cljs.core.deref(jasminegui.portfolioreview.current_page) < (jasminegui.portfolioreview.maximum_page - (1)))){
return jasminegui.portfolioreview.go_to_page((cljs.core.deref(jasminegui.portfolioreview.current_page) + (1)),cljs.core.deref((function (){var G__63688 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63688) : re_frame.core.subscribe.call(null,G__63688));
})()));
} else {
return null;
}
});
jasminegui.portfolioreview.previous_page_BANG_ = (function jasminegui$portfolioreview$previous_page_BANG_(){
if((cljs.core.deref(jasminegui.portfolioreview.current_page) > (0))){
return jasminegui.portfolioreview.go_to_page((cljs.core.deref(jasminegui.portfolioreview.current_page) - (1)),cljs.core.deref((function (){var G__63692 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63692) : re_frame.core.subscribe.call(null,G__63692));
})()));
} else {
return null;
}
});
jasminegui.portfolioreview.go_to_block_BANG_ = (function jasminegui$portfolioreview$go_to_block_BANG_(x){
return jasminegui.portfolioreview.go_to_page(new cljs.core.Keyword(null,"page-start","page-start",873967714).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__63696_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(p1__63696_SHARP_),x);
}),jasminegui.portfolioreview.portfolio_review_navigation))),cljs.core.deref((function (){var G__63704 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63704) : re_frame.core.subscribe.call(null,G__63704));
})()));
});
jasminegui.portfolioreview.heading_box = (function jasminegui$portfolioreview$heading_box(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"37px",new cljs.core.Keyword(null,"height","height",1025178622),"64px",new cljs.core.Keyword(null,"src","src",-1651076051),"assets/91-logo-green.png"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.portfolioreview.pages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(jasminegui.portfolioreview.current_page),new cljs.core.Keyword(null,"title","title",636505583)], null)),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null)], null)], null);
});
jasminegui.portfolioreview.summary_text = (function jasminegui$portfolioreview$summary_text(){
var portfolio = cljs.core.deref((function (){var G__63730 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63730) : re_frame.core.subscribe.call(null,G__63730));
})());
var data = cljs.core.deref((function (){var G__63731 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","summary-data","portfolio-review/summary-data",-1362975725)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63731) : re_frame.core.subscribe.call(null,G__63731));
})());
var positions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__63713_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__63713_SHARP_),portfolio);
}),cljs.core.deref((function (){var G__63732 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63732) : re_frame.core.subscribe.call(null,G__63732));
})()));
var f = (function (x){
var G__63737 = "%.0fbps";
var G__63738 = ((100) * x);
return goog.string.format(G__63737,G__63738);
});
var g = (function (x){
return goog.string.format("%.2f",x);
});
var h = (function (x){
return goog.string.format("%.1f",x);
});
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.portfolioreview.standard_box_width,new cljs.core.Keyword(null,"height","height",1025178622),jasminegui.portfolioreview.standard_box_height,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"40px",new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.heading_box], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"label","label",1718410804),["MTD, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)," returned ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mtd","mtd",1767968809),new cljs.core.Keyword(null,"portfolio","portfolio",957568598)], null))))," vs ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mtd","mtd",1767968809),new cljs.core.Keyword(null,"index","index",-1531685915)], null))))," for the index, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mtd","mtd",1767968809),new cljs.core.Keyword(null,"alpha","alpha",-1574982441)], null))))," of alpha."].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"label","label",1718410804),["YTD, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)," returned ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ytd","ytd",-2122596689),new cljs.core.Keyword(null,"portfolio","portfolio",957568598)], null))))," vs ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ytd","ytd",-2122596689),new cljs.core.Keyword(null,"index","index",-1531685915)], null))))," for the index, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ytd","ytd",-2122596689),new cljs.core.Keyword(null,"alpha","alpha",-1574982441)], null))))," of alpha."].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"label","label",1718410804),["The portfolio yield is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g(((100) * cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),positions))))),"% vs ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g(((100) * cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bm-contrib-yield","bm-contrib-yield",-1399804238),positions))))),"% for the index."].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"label","label",1718410804),["Our duration is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),positions))))," vs ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bm-contrib-eir-duration","bm-contrib-eir-duration",1013923984),positions))))," for the index."].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"label","label",1718410804),["We currently run a beta of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta","beta",455605892),new cljs.core.Keyword(null,"total","total",1916810418)], null)))),"x with top contributors being ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta","beta",455605892),new cljs.core.Keyword(null,"country-1","country-1",-1630306057)], null)))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta","beta",455605892),new cljs.core.Keyword(null,"value-1","value-1",-268597519)], null)))),"x), ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta","beta",455605892),new cljs.core.Keyword(null,"country-2","country-2",-1097494746)], null)))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta","beta",455605892),new cljs.core.Keyword(null,"value-2","value-2",1137844714)], null)))),"x), and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta","beta",455605892),new cljs.core.Keyword(null,"country-3","country-3",-1101991015)], null)))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta","beta",455605892),new cljs.core.Keyword(null,"value-3","value-3",-1646268361)], null)))),"x)."].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,["Performance data as of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__63763 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63763) : re_frame.core.subscribe.call(null,G__63763));
})())),". Risk data as of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__63764 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63764) : re_frame.core.subscribe.call(null,G__63764));
})())),"."].join('')], null)], null)], null)], null);
});
jasminegui.portfolioreview.contribution_or_alpha_chart = (function jasminegui$portfolioreview$contribution_or_alpha_chart(data){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.portfolioreview.standard_box_width,new cljs.core.Keyword(null,"height","height",1025178622),jasminegui.portfolioreview.standard_box_height,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"40px",new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.heading_box], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.portfolioreview.grouped_horizontal_bars(data,"Basis points")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(500)], null)], null),"UST categorized as cash"], null)], null)], null)], null)], null);
});
jasminegui.portfolioreview.top_contributors = (function jasminegui$portfolioreview$top_contributors(){
var display = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"Total-Effect","Total-Effect",-621899613),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__63780_SHARP_){
var or__4126__auto__ = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"Sector","Sector",-1076571408).cljs$core$IFn$_invoke$arity$1(p1__63780_SHARP_)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Total"], null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"Security","Security",-778594986).cljs$core$IFn$_invoke$arity$1(p1__63780_SHARP_),(0),(16)),"Foreign Currency")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"Security","Security",-778594986).cljs$core$IFn$_invoke$arity$1(p1__63780_SHARP_),(4),(22)),"Settlement Account")));
}
}),cljs.core.deref((function (){var G__63782 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","clean-table","single-portfolio-attribution/clean-table",-391468387)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63782) : re_frame.core.subscribe.call(null,G__63782));
})())));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.portfolioreview.standard_box_width,new cljs.core.Keyword(null,"height","height",1025178622),jasminegui.portfolioreview.standard_box_height,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.heading_box], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"width","width",-384071477),"850px",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.take.cljs$core$IFn$_invoke$arity$2((20),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.portfolioreview.pages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(jasminegui.portfolioreview.current_page),new cljs.core.Keyword(null,"title","title",636505583)], null)),(4),(7)),"top"))?cljs.core.reverse(display):display)),new cljs.core.Keyword(null,"defaultFilterMethod","defaultFilterMethod",-641971243),jasminegui.tables.case_insensitive_filter,new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Bond  ",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"security","security",886963079),new cljs.core.Keyword(null,"country","country",312965309),new cljs.core.Keyword(null,"sector","sector",-1444247062)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Effect",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-effect","total-effect",-967715775)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Contribution",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contribution","contribution",-1962459669),new cljs.core.Keyword(null,"bm-contribution","bm-contribution",961434966)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Weight",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xs-weight","xs-weight",2029728902),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"bm-weight","bm-weight",217267431)], null))], null)], null),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),false,new cljs.core.Keyword(null,"sortable","sortable",2109633621),false,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false,new cljs.core.Keyword(null,"pageSize","pageSize",732080883),(20),new cljs.core.Keyword(null,"className","className",-1983287057),"-striped -highlight"], null)], null)], null)], null)], null)], null);
});
jasminegui.portfolioreview.backtest_history = (function jasminegui$portfolioreview$backtest_history(){
var G__63785_64096 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-var","get-portfolio-var",1001711662),cljs.core.deref((function (){var G__63787 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63787) : re_frame.core.subscribe.call(null,G__63787));
})())], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63785_64096) : re_frame.core.dispatch.call(null,G__63785_64096));

var G__63789_64098 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),new cljs.core.Keyword(null,"daily-3y","daily-3y",-2143971824)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63789_64098) : re_frame.core.dispatch.call(null,G__63789_64098));

var dates = cljs.core.deref((function (){var G__63790 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","dates","var/dates",-1599746364)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63790) : re_frame.core.subscribe.call(null,G__63790));
})());
var data = cljs.core.deref((function (){var G__63792 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63792) : re_frame.core.subscribe.call(null,G__63792));
})());
var chart_period = cljs.core.deref((function (){var G__63793 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63793) : re_frame.core.subscribe.call(null,G__63793));
})());
var line = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__63784_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__63784_SHARP_),chart_period);
}),jasminegui.static$.var_charts_choice_map));
var days = (function (){var G__63794 = (function (){var G__63795 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__63795) : line.call(null,G__63795));
})();
var G__63794__$1 = (((G__63794 instanceof cljs.core.Keyword))?G__63794.fqn:null);
switch (G__63794__$1) {
case "daily":
return ((function (){var G__63796 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__63796) : line.call(null,G__63796));
})() * (250));

break;
case "weekly":
return ((function (){var G__63797 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__63797) : line.call(null,G__63797));
})() * (52));

break;
case "monthly":
return ((function (){var G__63798 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__63798) : line.call(null,G__63798));
})() * (12));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63794__$1)].join('')));

}
})();
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.portfolioreview.standard_box_width,new cljs.core.Keyword(null,"height","height",1025178622),jasminegui.portfolioreview.standard_box_height,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.heading_box], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.charting.backtest_chart(cljs.core.take_last(days,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dates,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__63802 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__63802) : line.call(null,G__63802));
})()], null))),cljs.core.take_last(days,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolio-value","portfolio-value",-1900674109),(function (){var G__63803 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__63803) : line.call(null,G__63803));
})()], null))),(jasminegui.portfolioreview.standard_box_width_nb - (200)),(jasminegui.portfolioreview.standard_box_height_nb - (300)))], null)], null)], null)], null);
});
jasminegui.portfolioreview.risk_betas = (function jasminegui$portfolioreview$risk_betas(){
var data = cljs.core.deref((function (){var G__63807 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","marginal-beta-chart-data","portfolio-review/marginal-beta-chart-data",40550601)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63807) : re_frame.core.subscribe.call(null,G__63807));
})());
var portfolio = cljs.core.deref((function (){var G__63811 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63811) : re_frame.core.subscribe.call(null,G__63811));
})());
var idx = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__63804_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(portfolio,p1__63804_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"performance","performance",1987578184),data)));
var sorted_data = data;
var groups = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),data));
var new_data = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__63805_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__63805_SHARP_,new cljs.core.Keyword(null,"order","order",-1254677256),groups.indexOf(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__63805_SHARP_)));
}),sorted_data);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.portfolioreview.standard_box_width,new cljs.core.Keyword(null,"height","height",1025178622),jasminegui.portfolioreview.standard_box_height,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"40px",new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.heading_box], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.portfolioreview.stacked_vertical_bars(new_data,"Beta contribution")], null)], null)], null)], null);
});
jasminegui.portfolioreview.risk_beta_over_time = (function jasminegui$portfolioreview$risk_beta_over_time(){
return null;
});
jasminegui.portfolioreview.risk_weights = (function jasminegui$portfolioreview$risk_weights(){
var g = cljs.core.second(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.portfolioreview.pages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(jasminegui.portfolioreview.current_page),new cljs.core.Keyword(null,"grouping","grouping",-1219230389)], null)));
var grouping = (function (){var G__63827 = g;
switch (G__63827) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63827)].join('')));

}
})();
var data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__63812_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__63812_SHARP_),cljs.core.deref((function (){var G__63829 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63829) : re_frame.core.subscribe.call(null,G__63829));
})()));
}),cljs.core.deref((function (){var G__63830 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63830) : re_frame.core.subscribe.call(null,G__63830));
})()));
var totals = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__63831 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63831) : re_frame.core.subscribe.call(null,G__63831));
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__63832 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63832) : re_frame.core.subscribe.call(null,G__63832));
})()))], null));
var grp = cljs.core.group_by(grouping,data);
var risks = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["weight",new cljs.core.Keyword(null,"weight","weight",-1262796205)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mod duration",new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["duration x spread",new cljs.core.Keyword(null,"duration-times-spread-weight","duration-times-spread-weight",1895429644)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["beta",new cljs.core.Keyword(null,"contrib-beta-1y-daily","contrib-beta-1y-daily",259924328)], null)], null);
var chart_data = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$portfolioreview$risk_weights_$_iter__63833(s__63834){
return (new cljs.core.LazySeq(null,(function (){
var s__63834__$1 = s__63834;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63834__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__63839 = cljs.core.first(xs__6292__auto__);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63839,(0),null);
var g__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63839,(1),null);
var iterys__4525__auto__ = ((function (s__63834__$1,vec__63839,k,g__$1,xs__6292__auto__,temp__5735__auto__,g,grouping,data,totals,grp,risks){
return (function jasminegui$portfolioreview$risk_weights_$_iter__63833_$_iter__63835(s__63836){
return (new cljs.core.LazySeq(null,((function (s__63834__$1,vec__63839,k,g__$1,xs__6292__auto__,temp__5735__auto__,g,grouping,data,totals,grp,risks){
return (function (){
var s__63836__$1 = s__63836;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__63836__$1);
if(temp__5735__auto____$1){
var s__63836__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__63836__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__63836__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__63838 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__63837 = (0);
while(true){
if((i__63837 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__63837);
cljs.core.chunk_append(b__63838,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"group","group",582596132),k,new cljs.core.Keyword(null,"performance","performance",1987578184),cljs.core.first(r),new cljs.core.Keyword(null,"value","value",305978217),((100) * (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second(r),g__$1)) / (function (){var fexpr__63848 = cljs.core.second(r);
return (fexpr__63848.cljs$core$IFn$_invoke$arity$1 ? fexpr__63848.cljs$core$IFn$_invoke$arity$1(totals) : fexpr__63848.call(null,totals));
})()))], null));

var G__64119 = (i__63837 + (1));
i__63837 = G__64119;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63838),jasminegui$portfolioreview$risk_weights_$_iter__63833_$_iter__63835(cljs.core.chunk_rest(s__63836__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63838),null);
}
} else {
var r = cljs.core.first(s__63836__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"group","group",582596132),k,new cljs.core.Keyword(null,"performance","performance",1987578184),cljs.core.first(r),new cljs.core.Keyword(null,"value","value",305978217),((100) * (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second(r),g__$1)) / (function (){var fexpr__63852 = cljs.core.second(r);
return (fexpr__63852.cljs$core$IFn$_invoke$arity$1 ? fexpr__63852.cljs$core$IFn$_invoke$arity$1(totals) : fexpr__63852.call(null,totals));
})()))], null),jasminegui$portfolioreview$risk_weights_$_iter__63833_$_iter__63835(cljs.core.rest(s__63836__$2)));
}
} else {
return null;
}
break;
}
});})(s__63834__$1,vec__63839,k,g__$1,xs__6292__auto__,temp__5735__auto__,g,grouping,data,totals,grp,risks))
,null,null));
});})(s__63834__$1,vec__63839,k,g__$1,xs__6292__auto__,temp__5735__auto__,g,grouping,data,totals,grp,risks))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(risks));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,jasminegui$portfolioreview$risk_weights_$_iter__63833(cljs.core.rest(s__63834__$1)));
} else {
var G__64120 = cljs.core.rest(s__63834__$1);
s__63834__$1 = G__64120;
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
var clean_data = (function (){var G__63860 = g;
switch (G__63860) {
case "Region":
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__63813_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__63813_SHARP_)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Collateral","Forwards","Equities"], null));
}),chart_data);

break;
case "Country":
var top_countries = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),cljs.core.take_last((8),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__63814_SHARP_){
var G__63861 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__63814_SHARP_);
return Math.abs(G__63861);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"performance","performance",1987578184).cljs$core$IFn$_invoke$arity$1(x),"weight");
}),chart_data))));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__63816_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__63816_SHARP_)]),top_countries);
}),chart_data));

break;
case "RatingGroup":
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__63818_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__63818_SHARP_)]),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["08 C","08 CC","08 D","09 NM"], null));
}),chart_data);

break;
case "Sector":
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__63819_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__63819_SHARP_)]),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Collateral","Forwards","Equities","Cash","Corporate"], null));
}),chart_data);

break;
default:
return chart_data;

}
})();
var clean_data_sorted = (function (){var G__63862 = g;
switch (G__63862) {
case "RatingGroup":
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63821_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__63821_SHARP_,new cljs.core.Keyword(null,"group","group",582596132),cljs.core.subs,(3));
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
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.portfolioreview.standard_box_width,new cljs.core.Keyword(null,"height","height",1025178622),jasminegui.portfolioreview.standard_box_height,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"40px",new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.heading_box], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.portfolioreview.grouped_horizontal_bars(clean_data_sorted,"Share of total risk")], null)], null)], null)], null);
});
jasminegui.portfolioreview.risk_deltas = (function jasminegui$portfolioreview$risk_deltas(){
var g = cljs.core.second(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.portfolioreview.pages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(jasminegui.portfolioreview.current_page),new cljs.core.Keyword(null,"grouping","grouping",-1219230389)], null)));
var grouping = (function (){var G__63872 = g;
switch (G__63872) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63872)].join('')));

}
})();
var data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__63863_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolio","portfolio",957568598).cljs$core$IFn$_invoke$arity$1(p1__63863_SHARP_),cljs.core.deref((function (){var G__63873 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63873) : re_frame.core.subscribe.call(null,G__63873));
})()));
}),cljs.core.deref((function (){var G__63874 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63874) : re_frame.core.subscribe.call(null,G__63874));
})()));
var totals = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__63879 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63879) : re_frame.core.subscribe.call(null,G__63879));
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__63880 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63880) : re_frame.core.subscribe.call(null,G__63880));
})()))], null));
var grp = cljs.core.group_by(grouping,data);
var risks = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["weight",new cljs.core.Keyword(null,"weight-delta","weight-delta",-1239784638)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mod duration",new cljs.core.Keyword(null,"mdur-delta","mdur-delta",-395332953)], null)], null);
var chart_data = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$portfolioreview$risk_deltas_$_iter__63881(s__63882){
return (new cljs.core.LazySeq(null,(function (){
var s__63882__$1 = s__63882;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63882__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__63887 = cljs.core.first(xs__6292__auto__);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63887,(0),null);
var g__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63887,(1),null);
var iterys__4525__auto__ = ((function (s__63882__$1,vec__63887,k,g__$1,xs__6292__auto__,temp__5735__auto__,g,grouping,data,totals,grp,risks){
return (function jasminegui$portfolioreview$risk_deltas_$_iter__63881_$_iter__63883(s__63884){
return (new cljs.core.LazySeq(null,((function (s__63882__$1,vec__63887,k,g__$1,xs__6292__auto__,temp__5735__auto__,g,grouping,data,totals,grp,risks){
return (function (){
var s__63884__$1 = s__63884;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__63884__$1);
if(temp__5735__auto____$1){
var s__63884__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__63884__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__63884__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__63886 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__63885 = (0);
while(true){
if((i__63885 < size__4528__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__63885);
cljs.core.chunk_append(b__63886,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"group","group",582596132),k,new cljs.core.Keyword(null,"performance","performance",1987578184),cljs.core.first(r),new cljs.core.Keyword(null,"value","value",305978217),(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(r),"weight"))?100.0:1.0) * cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second(r),g__$1)))], null));

var G__64143 = (i__63885 + (1));
i__63885 = G__64143;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63886),jasminegui$portfolioreview$risk_deltas_$_iter__63881_$_iter__63883(cljs.core.chunk_rest(s__63884__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63886),null);
}
} else {
var r = cljs.core.first(s__63884__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"group","group",582596132),k,new cljs.core.Keyword(null,"performance","performance",1987578184),cljs.core.first(r),new cljs.core.Keyword(null,"value","value",305978217),(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(r),"weight"))?100.0:1.0) * cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second(r),g__$1)))], null),jasminegui$portfolioreview$risk_deltas_$_iter__63881_$_iter__63883(cljs.core.rest(s__63884__$2)));
}
} else {
return null;
}
break;
}
});})(s__63882__$1,vec__63887,k,g__$1,xs__6292__auto__,temp__5735__auto__,g,grouping,data,totals,grp,risks))
,null,null));
});})(s__63882__$1,vec__63887,k,g__$1,xs__6292__auto__,temp__5735__auto__,g,grouping,data,totals,grp,risks))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(risks));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,jasminegui$portfolioreview$risk_deltas_$_iter__63881(cljs.core.rest(s__63882__$1)));
} else {
var G__64144 = cljs.core.rest(s__63882__$1);
s__63882__$1 = G__64144;
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
var clean_data = (function (){var G__63900 = g;
switch (G__63900) {
case "Region":
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__63864_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__63864_SHARP_)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Collateral","Forwards","Equities"], null));
}),chart_data);

break;
case "Country":
var top_countries = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),cljs.core.take_last((8),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__63865_SHARP_){
var G__63902 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__63865_SHARP_);
return Math.abs(G__63902);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"performance","performance",1987578184).cljs$core$IFn$_invoke$arity$1(x),"weight");
}),chart_data))));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__63866_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__63866_SHARP_)]),top_countries);
}),chart_data));

break;
case "RatingGroup":
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__63867_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__63867_SHARP_)]),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["08 C","08 CC","08 D","09 NM"], null));
}),chart_data);

break;
case "Sector":
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__63868_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__63868_SHARP_)]),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Collateral","Forwards","Equities","Cash","Corporate"], null));
}),chart_data);

break;
default:
return chart_data;

}
})();
var clean_data_sorted = (function (){var G__63903 = g;
switch (G__63903) {
case "RatingGroup":
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63869_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__63869_SHARP_,new cljs.core.Keyword(null,"group","group",582596132),cljs.core.subs,(3));
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
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.portfolioreview.standard_box_width,new cljs.core.Keyword(null,"height","height",1025178622),jasminegui.portfolioreview.standard_box_height,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"40px",new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.heading_box], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.portfolioreview.simple_horizontal_bars(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__63870_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"performance","performance",1987578184).cljs$core$IFn$_invoke$arity$1(p1__63870_SHARP_),"weight");
}),clean_data_sorted),"Weight vs index",".0f",1.5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.portfolioreview.simple_horizontal_bars(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__63871_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"performance","performance",1987578184).cljs$core$IFn$_invoke$arity$1(p1__63871_SHARP_),"mod duration");
}),clean_data_sorted),"Duration vs index",".1f",2.0)], null)], null)], null)], null)], null)], null);
});
jasminegui.portfolioreview.risk = (function jasminegui$portfolioreview$risk(){
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
});
jasminegui.portfolioreview.active_home = (function jasminegui$portfolioreview$active_home(){
var active_tab = cljs.core.deref((function (){var G__63915 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","active-tab","portfolio-review/active-tab",1429822843)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63915) : re_frame.core.subscribe.call(null,G__63915));
})());
window.scrollTo((0),(0));

var G__63917 = active_tab;
var G__63917__$1 = (((G__63917 instanceof cljs.core.Keyword))?G__63917.fqn:null);
switch (G__63917__$1) {
case "summary":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.summary_text], null);

break;
case "contribution":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.contribution_or_alpha_chart,cljs.core.deref((function (){var G__63922 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","contribution-chart-data","portfolio-review/contribution-chart-data",-581811845)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63922) : re_frame.core.subscribe.call(null,G__63922));
})())], null);

break;
case "alpha":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.contribution_or_alpha_chart,cljs.core.deref((function (){var G__63923 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","alpha-chart-data","portfolio-review/alpha-chart-data",-243291168)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63923) : re_frame.core.subscribe.call(null,G__63923));
})())], null);

break;
case "top-bottom":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.top_contributors], null);

break;
case "jensen":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.contribution_or_alpha_chart,cljs.core.deref((function (){var G__63924 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","jensen-chart-data","portfolio-review/jensen-chart-data",-701618636)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63924) : re_frame.core.subscribe.call(null,G__63924));
})())], null);

break;
case "backtest-history":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.backtest_history], null);

break;
case "risk":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.risk], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.output","div.output",1460347316),"nothing to display"], null);

}
});
jasminegui.portfolioreview.portfolio_change = (function jasminegui$portfolioreview$portfolio_change(portfolio){
var G__63926_64151 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321),portfolio], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63926_64151) : re_frame.core.dispatch.call(null,G__63926_64151));

var G__63927 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-summary-data","get-portfolio-review-summary-data",-1339542673),portfolio], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63927) : re_frame.core.dispatch.call(null,G__63927));
});
jasminegui.portfolioreview.nav = (function jasminegui$portfolioreview$nav(){
var active_tab = cljs.core.deref((function (){var G__63928 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","active-tab","portfolio-review/active-tab",1429822843)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63928) : re_frame.core.subscribe.call(null,G__63928));
})());
var portfolio_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$portfolioreview$nav_$_iter__63929(s__63930){
return (new cljs.core.LazySeq(null,(function (){
var s__63930__$1 = s__63930;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63930__$1);
if(temp__5735__auto__){
var s__63930__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63930__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__63930__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__63932 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__63931 = (0);
while(true){
if((i__63931 < size__4528__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__63931);
cljs.core.chunk_append(b__63932,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null));

var G__64152 = (i__63931 + (1));
i__63931 = G__64152;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63932),jasminegui$portfolioreview$nav_$_iter__63929(cljs.core.chunk_rest(s__63930__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63932),null);
}
} else {
var p = cljs.core.first(s__63930__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null),jasminegui$portfolioreview$nav_$_iter__63929(cljs.core.rest(s__63930__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref((function (){var G__63933 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63933) : re_frame.core.subscribe.call(null,G__63933));
})()));
})());
var portfolio = cljs.core.deref((function (){var G__63934 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63934) : re_frame.core.subscribe.call(null,G__63934));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"class","class",-2030961996),"leftnavbar",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"90px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary btn-block",new cljs.core.Keyword(null,"label","label",1718410804),"Previous",new cljs.core.Keyword(null,"on-click","on-click",1632826543),jasminegui.portfolioreview.previous_page_BANG_], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref(jasminegui.portfolioreview.current_page) + (1))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.portfolioreview.maximum_page)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"70px",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"90px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary btn-block",new cljs.core.Keyword(null,"label","label",1718410804),"Next",new cljs.core.Keyword(null,"on-click","on-click",1632826543),jasminegui.portfolioreview.next_page_BANG_], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"color","color",1011675173),"#CA3E47",new cljs.core.Keyword(null,"class","class",-2030961996),"separatornavline"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"model","model",331153215),portfolio,new cljs.core.Keyword(null,"choices","choices",1385611597),portfolio_map,new cljs.core.Keyword(null,"on-change","on-change",-732046149),jasminegui.portfolioreview.portfolio_change], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"color","color",1011675173),"#CA3E47",new cljs.core.Keyword(null,"class","class",-2030961996),"separatornavline"], null)], null),(function (){var iter__4529__auto__ = (function jasminegui$portfolioreview$nav_$_iter__63935(s__63936){
return (new cljs.core.LazySeq(null,(function (){
var s__63936__$1 = s__63936;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63936__$1);
if(temp__5735__auto__){
var s__63936__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63936__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__63936__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__63938 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__63937 = (0);
while(true){
if((i__63937 < size__4528__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__63937);
cljs.core.chunk_append(b__63938,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-primary btn-block",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?" active":null)].join(''),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__63937,item,c__4527__auto__,size__4528__auto__,b__63938,s__63936__$2,temp__5735__auto__,active_tab,portfolio_map,portfolio){
return (function (){
return jasminegui.portfolioreview.go_to_block_BANG_(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item));
});})(i__63937,item,c__4527__auto__,size__4528__auto__,b__63938,s__63936__$2,temp__5735__auto__,active_tab,portfolio_map,portfolio))
], null));

var G__64158 = (i__63937 + (1));
i__63937 = G__64158;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63938),jasminegui$portfolioreview$nav_$_iter__63935(cljs.core.chunk_rest(s__63936__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63938),null);
}
} else {
var item = cljs.core.first(s__63936__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-primary btn-block",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?" active":null)].join(''),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__63936__$2,temp__5735__auto__,active_tab,portfolio_map,portfolio){
return (function (){
return jasminegui.portfolioreview.go_to_block_BANG_(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item));
});})(item,s__63936__$2,temp__5735__auto__,active_tab,portfolio_map,portfolio))
], null),jasminegui$portfolioreview$nav_$_iter__63935(cljs.core.rest(s__63936__$2)));
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
