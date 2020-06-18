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
jasminegui.portfolioreview.standard_box_width = "1600px";
jasminegui.portfolioreview.standard_box_height = "1024px";
jasminegui.portfolioreview.standard_box_width_nb = (1600);
jasminegui.portfolioreview.standard_box_height_nb = (1024);
jasminegui.portfolioreview.portfolio_vs_index_horizontal_bars = (function jasminegui$portfolioreview$portfolio_vs_index_horizontal_bars(data){
var individual_height = (((cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),data))) > (10)))?(20):(60));
var text_size = (16);
var scl = (((function (){var x__4214__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),data));
var y__4215__auto__ = (- cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),data)));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() / (30)) | (0));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"$schema","$schema",1635092088),"https://vega.github.io/schema/vega-lite/v4.json",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),data], null),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"calculate","calculate",-1224644403),["datum.value >= 0 ? datum.value + ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scl)," : datum.value - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scl)].join(''),new cljs.core.Keyword(null,"as","as",1148689641),"valuetxt"], null)], null),new cljs.core.Keyword(null,"facet","facet",-801327574),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),"group",new cljs.core.Keyword(null,"type","type",1174270348),"ordinal",new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),data),new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"labelAngle","labelAngle",-15299184),(0),new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),text_size,new cljs.core.Keyword(null,"labelAlign","labelAlign",-1669868327),"left"], null)], null)], null),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mark","mark",-373816345),"bar",new cljs.core.Keyword(null,"width","width",-384071477),(jasminegui.portfolioreview.standard_box_width_nb - (400)),new cljs.core.Keyword(null,"height","height",1025178622),individual_height,new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),"sum",new cljs.core.Keyword(null,"field","field",-1302436500),"value",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Basis points",new cljs.core.Keyword(null,"titleFontSize","titleFontSize",-1632214750),text_size,new cljs.core.Keyword(null,"titleFontWeight","titleFontWeight",-1346956866),"normal",new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),text_size,new cljs.core.Keyword(null,"gridColor","gridColor",-961341892),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"condition","condition",1668437652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"test","test",577538877),"datum.value === 0",new cljs.core.Keyword(null,"value","value",305978217),"black"], null)], null)], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"performance",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"labels","labels",-626734591),false], null)], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),"performance",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"sort","sort",953465918),"descending",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#134848","#009D80"], null)], null),new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"labelFontSize","labelFontSize",717469659),text_size], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),text_size], null),new cljs.core.Keyword(null,"width","width",-384071477),(jasminegui.portfolioreview.standard_box_width_nb - (400)),new cljs.core.Keyword(null,"height","height",1025178622),individual_height,new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),"sum",new cljs.core.Keyword(null,"field","field",-1302436500),"valuetxt",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),null], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"performance",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"labels","labels",-626734591),false], null)], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),"performance",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"sort","sort",953465918),"descending",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#134848","#009D80"], null)], null),new cljs.core.Keyword(null,"legend","legend",-1027192245),null], null),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"value",new cljs.core.Keyword(null,"format","format",-1306924766),".0f"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"transparent"], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"domainWidth","domainWidth",2049565375),(1)], null)], null)], null);
});
jasminegui.portfolioreview.contribution_pages = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$portfolioreview$iter__50389(s__50390){
return (new cljs.core.LazySeq(null,(function (){
var s__50390__$1 = s__50390;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50390__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var p = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__50390__$1,p,xs__6292__auto__,temp__5735__auto__){
return (function jasminegui$portfolioreview$iter__50389_$_iter__50391(s__50392){
return (new cljs.core.LazySeq(null,((function (s__50390__$1,p,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__50392__$1 = s__50392;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__50392__$1);
if(temp__5735__auto____$1){
var s__50392__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50392__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__50392__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__50394 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__50393 = (0);
while(true){
if((i__50393 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__50393);
cljs.core.chunk_append(b__50394,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p))," Contribution by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k))].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"contribution","contribution",-1962459669),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-contribution-chart-data","get-portfolio-review-contribution-chart-data",1350930118),"portfolio",cljs.core.second(p),cljs.core.second(k)], null)], null));

var G__50845 = (i__50393 + (1));
i__50393 = G__50845;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50394),jasminegui$portfolioreview$iter__50389_$_iter__50391(cljs.core.chunk_rest(s__50392__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50394),null);
}
} else {
var k = cljs.core.first(s__50392__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p))," Contribution by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k))].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"contribution","contribution",-1962459669),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-contribution-chart-data","get-portfolio-review-contribution-chart-data",1350930118),"portfolio",cljs.core.second(p),cljs.core.second(k)], null)], null),jasminegui$portfolioreview$iter__50389_$_iter__50391(cljs.core.rest(s__50392__$2)));
}
} else {
return null;
}
break;
}
});})(s__50390__$1,p,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__50390__$1,p,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Region","Region"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Country","Country"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sector","Sector"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Rating","RatingGroup"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Duration","Duration Bucket"], null)], null)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,jasminegui$portfolioreview$iter__50389(cljs.core.rest(s__50390__$1)));
} else {
var G__50853 = cljs.core.rest(s__50390__$1);
s__50390__$1 = G__50853;
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
jasminegui.portfolioreview.alpha_pages = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$portfolioreview$iter__50441(s__50442){
return (new cljs.core.LazySeq(null,(function (){
var s__50442__$1 = s__50442;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50442__$1);
if(temp__5735__auto__){
var s__50442__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50442__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__50442__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__50444 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__50443 = (0);
while(true){
if((i__50443 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__50443);
cljs.core.chunk_append(b__50444,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),["Alpha by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k))].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-alpha-chart-data","get-portfolio-review-alpha-chart-data",2022261801),"portfolio",cljs.core.second(k)], null)], null));

var G__50854 = (i__50443 + (1));
i__50443 = G__50854;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50444),jasminegui$portfolioreview$iter__50441(cljs.core.chunk_rest(s__50442__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50444),null);
}
} else {
var k = cljs.core.first(s__50442__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),["Alpha by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k))].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-alpha-chart-data","get-portfolio-review-alpha-chart-data",2022261801),"portfolio",cljs.core.second(k)], null)], null),jasminegui$portfolioreview$iter__50441(cljs.core.rest(s__50442__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Region","Region"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Country","Country"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sector","Sector"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Rating","RatingGroup"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Duration","Duration Bucket"], null)], null));
})());
jasminegui.portfolioreview.top_bottom_pages = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$portfolioreview$iter__50469(s__50470){
return (new cljs.core.LazySeq(null,(function (){
var s__50470__$1 = s__50470;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50470__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var p = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__50470__$1,p,xs__6292__auto__,temp__5735__auto__){
return (function jasminegui$portfolioreview$iter__50469_$_iter__50471(s__50472){
return (new cljs.core.LazySeq(null,((function (s__50470__$1,p,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__50472__$1 = s__50472;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__50472__$1);
if(temp__5735__auto____$1){
var s__50472__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50472__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__50472__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__50474 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__50473 = (0);
while(true){
if((i__50473 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__50473);
cljs.core.chunk_append(b__50474,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k))," contributors"].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"top-bottom","top-bottom",168796605),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-single-attribution","get-single-attribution",-1620108505),"portfolio",cljs.core.second(p)], null)], null));

var G__50856 = (i__50473 + (1));
i__50473 = G__50856;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50474),jasminegui$portfolioreview$iter__50469_$_iter__50471(cljs.core.chunk_rest(s__50472__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50474),null);
}
} else {
var k = cljs.core.first(s__50472__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k))," contributors"].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"top-bottom","top-bottom",168796605),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-single-attribution","get-single-attribution",-1620108505),"portfolio",cljs.core.second(p)], null)], null),jasminegui$portfolioreview$iter__50469_$_iter__50471(cljs.core.rest(s__50472__$2)));
}
} else {
return null;
}
break;
}
});})(s__50470__$1,p,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__50470__$1,p,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["top","top"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bottom","bottom"], null)], null)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,jasminegui$portfolioreview$iter__50469(cljs.core.rest(s__50470__$1)));
} else {
var G__50857 = cljs.core.rest(s__50470__$1);
s__50470__$1 = G__50857;
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
jasminegui.portfolioreview.jensen_pages = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function jasminegui$portfolioreview$iter__50512(s__50513){
return (new cljs.core.LazySeq(null,(function (){
var s__50513__$1 = s__50513;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50513__$1);
if(temp__5735__auto__){
var s__50513__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50513__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__50513__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__50515 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__50514 = (0);
while(true){
if((i__50514 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__50514);
cljs.core.chunk_append(b__50515,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),["Jensen by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k))].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"jensen","jensen",1152734358),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-jensen-chart-data","get-portfolio-review-jensen-chart-data",-928743439),"portfolio",cljs.core.second(k)], null)], null));

var G__50887 = (i__50514 + (1));
i__50514 = G__50887;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50515),jasminegui$portfolioreview$iter__50512(cljs.core.chunk_rest(s__50513__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50515),null);
}
} else {
var k = cljs.core.first(s__50513__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),["Jensen by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(k))].join(''),new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"jensen","jensen",1152734358),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-review-jensen-chart-data","get-portfolio-review-jensen-chart-data",-928743439),"portfolio",cljs.core.second(k)], null)], null),jasminegui$portfolioreview$iter__50512(cljs.core.rest(s__50513__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Region","Region"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Country","Country"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sector","Sector"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Rating","RatingGroup"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Duration","Duration Bucket"], null)], null));
})());
jasminegui.portfolioreview.pages = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Summary",new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),null], null)], null),jasminegui.portfolioreview.contribution_pages,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([jasminegui.portfolioreview.alpha_pages,jasminegui.portfolioreview.top_bottom_pages,jasminegui.portfolioreview.jensen_pages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Three year daily backtest",new cljs.core.Keyword(null,"nav-request","nav-request",481763558),new cljs.core.Keyword(null,"backtest-history","backtest-history",-885251814),new cljs.core.Keyword(null,"data-request","data-request",-1857027380),null], null)], null)], 0))));
jasminegui.portfolioreview.portfolio_review_navigation = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"name","name",1843675177),"Summary",new cljs.core.Keyword(null,"page-start","page-start",873967714),(0)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"contribution","contribution",-1962459669),new cljs.core.Keyword(null,"name","name",1843675177),"Contribution",new cljs.core.Keyword(null,"page-start","page-start",873967714),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50530_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nav-request","nav-request",481763558).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__50530_SHARP_)),new cljs.core.Keyword(null,"contribution","contribution",-1962459669));
}),jasminegui.portfolioreview.pages)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),new cljs.core.Keyword(null,"name","name",1843675177),"Alpha",new cljs.core.Keyword(null,"page-start","page-start",873967714),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50531_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nav-request","nav-request",481763558).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__50531_SHARP_)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
}),jasminegui.portfolioreview.pages)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"top-bottom","top-bottom",168796605),new cljs.core.Keyword(null,"name","name",1843675177),"Top contributors",new cljs.core.Keyword(null,"page-start","page-start",873967714),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50532_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nav-request","nav-request",481763558).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__50532_SHARP_)),new cljs.core.Keyword(null,"top-bottom","top-bottom",168796605));
}),jasminegui.portfolioreview.pages)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"jensen","jensen",1152734358),new cljs.core.Keyword(null,"name","name",1843675177),"Jensen",new cljs.core.Keyword(null,"page-start","page-start",873967714),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50534_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nav-request","nav-request",481763558).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__50534_SHARP_)),new cljs.core.Keyword(null,"jensen","jensen",1152734358));
}),jasminegui.portfolioreview.pages)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"backtest-history","backtest-history",-885251814),new cljs.core.Keyword(null,"name","name",1843675177),"Backtest",new cljs.core.Keyword(null,"page-start","page-start",873967714),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50535_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nav-request","nav-request",481763558).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__50535_SHARP_)),new cljs.core.Keyword(null,"backtest-history","backtest-history",-885251814));
}),jasminegui.portfolioreview.pages)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"risk","risk",2004621358),new cljs.core.Keyword(null,"name","name",1843675177),"Risk",new cljs.core.Keyword(null,"page-start","page-start",873967714),(40)], null)], null);
jasminegui.portfolioreview.maximum_page = cljs.core.count(jasminegui.portfolioreview.pages);
jasminegui.portfolioreview.current_page = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
jasminegui.portfolioreview.go_to_page = (function jasminegui$portfolioreview$go_to_page(n,portfolio){
cljs.core.reset_BANG_(jasminegui.portfolioreview.current_page,n);

var temp__5735__auto___50891 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.portfolioreview.pages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,new cljs.core.Keyword(null,"data-request","data-request",-1857027380)], null));
if(cljs.core.truth_(temp__5735__auto___50891)){
var req_50892 = temp__5735__auto___50891;
var G__50549_50893 = cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, ["portfolio",portfolio], null),req_50892);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50549_50893) : re_frame.core.dispatch.call(null,G__50549_50893));
} else {
}

var G__50551 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","active-tab","portfolio-review/active-tab",1429822843),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.portfolioreview.pages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,new cljs.core.Keyword(null,"nav-request","nav-request",481763558)], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50551) : re_frame.core.dispatch.call(null,G__50551));
});
jasminegui.portfolioreview.next_page_BANG_ = (function jasminegui$portfolioreview$next_page_BANG_(){
if((cljs.core.deref(jasminegui.portfolioreview.current_page) < (jasminegui.portfolioreview.maximum_page - (1)))){
return jasminegui.portfolioreview.go_to_page((cljs.core.deref(jasminegui.portfolioreview.current_page) + (1)),cljs.core.deref((function (){var G__50553 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50553) : re_frame.core.subscribe.call(null,G__50553));
})()));
} else {
return null;
}
});
jasminegui.portfolioreview.previous_page_BANG_ = (function jasminegui$portfolioreview$previous_page_BANG_(){
if((cljs.core.deref(jasminegui.portfolioreview.current_page) > (0))){
return jasminegui.portfolioreview.go_to_page((cljs.core.deref(jasminegui.portfolioreview.current_page) - (1)),cljs.core.deref((function (){var G__50568 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50568) : re_frame.core.subscribe.call(null,G__50568));
})()));
} else {
return null;
}
});
jasminegui.portfolioreview.go_to_block_BANG_ = (function jasminegui$portfolioreview$go_to_block_BANG_(x){
return jasminegui.portfolioreview.go_to_page(new cljs.core.Keyword(null,"page-start","page-start",873967714).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50571_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(p1__50571_SHARP_),x);
}),jasminegui.portfolioreview.portfolio_review_navigation))),cljs.core.deref((function (){var G__50583 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50583) : re_frame.core.subscribe.call(null,G__50583));
})()));
});
jasminegui.portfolioreview.heading_box = (function jasminegui$portfolioreview$heading_box(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"37px",new cljs.core.Keyword(null,"height","height",1025178622),"64px",new cljs.core.Keyword(null,"src","src",-1651076051),"../assets/91-logo-green.png"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.portfolioreview.pages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(jasminegui.portfolioreview.current_page),new cljs.core.Keyword(null,"title","title",636505583)], null)),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null)], null)], null);
});
jasminegui.portfolioreview.summary_text = (function jasminegui$portfolioreview$summary_text(){
var portfolio = cljs.core.deref((function (){var G__50599 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50599) : re_frame.core.subscribe.call(null,G__50599));
})());
var data = cljs.core.deref((function (){var G__50601 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","summary-data","portfolio-review/summary-data",-1362975725)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50601) : re_frame.core.subscribe.call(null,G__50601));
})());
var f = (function (x){
var G__50602 = "%.0fbps";
var G__50603 = ((100) * x);
return goog.string.format(G__50602,G__50603);
});
var g = (function (x){
return goog.string.format("%.2f",x);
});
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.portfolioreview.standard_box_width,new cljs.core.Keyword(null,"height","height",1025178622),jasminegui.portfolioreview.standard_box_height,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"40px",new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.heading_box], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"label","label",1718410804),["MTD, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)," returned ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mtd","mtd",1767968809),new cljs.core.Keyword(null,"portfolio","portfolio",957568598)], null))))," vs ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mtd","mtd",1767968809),new cljs.core.Keyword(null,"index","index",-1531685915)], null))))," for the index, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mtd","mtd",1767968809),new cljs.core.Keyword(null,"alpha","alpha",-1574982441)], null))))," of alpha."].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"label","label",1718410804),["YTD, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio)," returned ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ytd","ytd",-2122596689),new cljs.core.Keyword(null,"portfolio","portfolio",957568598)], null))))," vs ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ytd","ytd",-2122596689),new cljs.core.Keyword(null,"index","index",-1531685915)], null))))," for the index, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ytd","ytd",-2122596689),new cljs.core.Keyword(null,"alpha","alpha",-1574982441)], null))))," of alpha."].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"label","label",1718410804),["We currently run a beta of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta","beta",455605892),new cljs.core.Keyword(null,"total","total",1916810418)], null)))),"x with top contributors being ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta","beta",455605892),new cljs.core.Keyword(null,"country-1","country-1",-1630306057)], null)))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta","beta",455605892),new cljs.core.Keyword(null,"value-1","value-1",-268597519)], null)))),"x), ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta","beta",455605892),new cljs.core.Keyword(null,"country-2","country-2",-1097494746)], null)))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta","beta",455605892),new cljs.core.Keyword(null,"value-2","value-2",1137844714)], null)))),"x), and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta","beta",455605892),new cljs.core.Keyword(null,"country-3","country-3",-1101991015)], null)))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta","beta",455605892),new cljs.core.Keyword(null,"value-3","value-3",-1646268361)], null)))),"x)."].join('')], null)], null)], null)], null);
});
jasminegui.portfolioreview.contribution_or_alpha_chart = (function jasminegui$portfolioreview$contribution_or_alpha_chart(data){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.portfolioreview.standard_box_width,new cljs.core.Keyword(null,"height","height",1025178622),jasminegui.portfolioreview.standard_box_height,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"40px",new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.heading_box], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.portfolioreview.portfolio_vs_index_horizontal_bars(data)], null)], null)], null)], null);
});
jasminegui.portfolioreview.top_contributors = (function jasminegui$portfolioreview$top_contributors(){
var display = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"Total-Effect","Total-Effect",-621899613),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50638_SHARP_){
var or__4126__auto__ = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"Sector","Sector",-1076571408).cljs$core$IFn$_invoke$arity$1(p1__50638_SHARP_)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Total"], null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"Security","Security",-778594986).cljs$core$IFn$_invoke$arity$1(p1__50638_SHARP_),(0),(16)),"Foreign Currency")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"Security","Security",-778594986).cljs$core$IFn$_invoke$arity$1(p1__50638_SHARP_),(4),(22)),"Settlement Account")));
}
}),cljs.core.deref((function (){var G__50642 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","clean-table","single-portfolio-attribution/clean-table",-391468387)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50642) : re_frame.core.subscribe.call(null,G__50642));
})())));
var ttl = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jasminegui.portfolioreview.pages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(jasminegui.portfolioreview.current_page),new cljs.core.Keyword(null,"title","title",636505583)], null));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.portfolioreview.standard_box_width,new cljs.core.Keyword(null,"height","height",1025178622),jasminegui.portfolioreview.standard_box_height,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.heading_box], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_table$lib$index.default,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.take.cljs$core$IFn$_invoke$arity$2((20),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ttl,(4),(7)),"top"))?cljs.core.reverse(display):display)),new cljs.core.Keyword(null,"defaultFilterMethod","defaultFilterMethod",-641971243),jasminegui.tables.case_insensitive_filter,new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Bond  ",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"security","security",886963079),new cljs.core.Keyword(null,"country","country",312965309),new cljs.core.Keyword(null,"sector","sector",-1444247062)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Effect",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-effect","total-effect",-967715775)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Contribution",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contribution","contribution",-1962459669),new cljs.core.Keyword(null,"bm-contribution","bm-contribution",961434966)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Header","Header",1255420133),"Weight",new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(jasminegui.tables.attribution_table_columns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xs-weight","xs-weight",2029728902),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"bm-weight","bm-weight",217267431)], null))], null)], null),new cljs.core.Keyword(null,"showPagination","showPagination",-548223258),false,new cljs.core.Keyword(null,"sortable","sortable",2109633621),false,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),false,new cljs.core.Keyword(null,"pageSize","pageSize",732080883),(20),new cljs.core.Keyword(null,"className","className",-1983287057),"-striped -highlight"], null)], null)], null)], null)], null);
});
jasminegui.portfolioreview.backtest_history = (function jasminegui$portfolioreview$backtest_history(){
var G__50652_50902 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-portfolio-var","get-portfolio-var",1001711662),cljs.core.deref((function (){var G__50653 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","portfolio","portfolio-review/portfolio",613543321)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50653) : re_frame.core.subscribe.call(null,G__50653));
})())], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50652_50902) : re_frame.core.dispatch.call(null,G__50652_50902));

var G__50655_50903 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490),new cljs.core.Keyword(null,"daily-3y","daily-3y",-2143971824)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50655_50903) : re_frame.core.dispatch.call(null,G__50655_50903));

var dates = cljs.core.deref((function (){var G__50657 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","dates","var/dates",-1599746364)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50657) : re_frame.core.subscribe.call(null,G__50657));
})());
var data = cljs.core.deref((function (){var G__50658 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","data","var/data",-232782310)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50658) : re_frame.core.subscribe.call(null,G__50658));
})());
var chart_period = cljs.core.deref((function (){var G__50662 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","chart-period","var/chart-period",-304892490)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50662) : re_frame.core.subscribe.call(null,G__50662));
})());
var line = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50648_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__50648_SHARP_),chart_period);
}),jasminegui.static$.var_charts_choice_map));
var days = (function (){var G__50667 = (function (){var G__50668 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__50668) : line.call(null,G__50668));
})();
var G__50667__$1 = (((G__50667 instanceof cljs.core.Keyword))?G__50667.fqn:null);
switch (G__50667__$1) {
case "daily":
return ((function (){var G__50669 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__50669) : line.call(null,G__50669));
})() * (250));

break;
case "weekly":
return ((function (){var G__50674 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__50674) : line.call(null,G__50674));
})() * (52));

break;
case "monthly":
return ((function (){var G__50679 = new cljs.core.Keyword(null,"period","period",-352129191);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__50679) : line.call(null,G__50679));
})() * (12));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50667__$1)].join('')));

}
})();
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"width","width",-384071477),jasminegui.portfolioreview.standard_box_width,new cljs.core.Keyword(null,"height","height",1025178622),jasminegui.portfolioreview.standard_box_height,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.heading_box], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,jasminegui.charting.backtest_chart(cljs.core.take_last(days,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dates,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50693 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__50693) : line.call(null,G__50693));
})()], null))),cljs.core.take_last(days,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolio-value","portfolio-value",-1900674109),(function (){var G__50694 = new cljs.core.Keyword(null,"frequency","frequency",-1408891382);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__50694) : line.call(null,G__50694));
})()], null))),(jasminegui.portfolioreview.standard_box_width_nb - (200)),(jasminegui.portfolioreview.standard_box_height_nb - (300)))], null)], null)], null)], null);
});
jasminegui.portfolioreview.active_home = (function jasminegui$portfolioreview$active_home(){
var active_tab = cljs.core.deref((function (){var G__50697 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","active-tab","portfolio-review/active-tab",1429822843)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50697) : re_frame.core.subscribe.call(null,G__50697));
})());
window.scrollTo((0),(0));

var G__50699 = active_tab;
var G__50699__$1 = (((G__50699 instanceof cljs.core.Keyword))?G__50699.fqn:null);
switch (G__50699__$1) {
case "summary":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.summary_text], null);

break;
case "contribution":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.contribution_or_alpha_chart,cljs.core.deref((function (){var G__50710 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","contribution-chart-data","portfolio-review/contribution-chart-data",-581811845)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50710) : re_frame.core.subscribe.call(null,G__50710));
})())], null);

break;
case "alpha":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.contribution_or_alpha_chart,cljs.core.deref((function (){var G__50712 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","alpha-chart-data","portfolio-review/alpha-chart-data",-243291168)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50712) : re_frame.core.subscribe.call(null,G__50712));
})())], null);

break;
case "top-bottom":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.top_contributors], null);

break;
case "jensen":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.contribution_or_alpha_chart,cljs.core.deref((function (){var G__50715 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","jensen-chart-data","portfolio-review/jensen-chart-data",-701618636)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50715) : re_frame.core.subscribe.call(null,G__50715));
})())], null);

break;
case "backtest-history":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jasminegui.portfolioreview.backtest_history], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.output","div.output",1460347316),"nothing to display"], null);

}
});
jasminegui.portfolioreview.nav = (function jasminegui$portfolioreview$nav(){
var active_tab = cljs.core.deref((function (){var G__50718 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-review","active-tab","portfolio-review/active-tab",1429822843)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50718) : re_frame.core.subscribe.call(null,G__50718));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"class","class",-2030961996),"leftnavbar",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"90px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary btn-block",new cljs.core.Keyword(null,"label","label",1718410804),"Previous",new cljs.core.Keyword(null,"on-click","on-click",1632826543),jasminegui.portfolioreview.previous_page_BANG_], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref(jasminegui.portfolioreview.current_page) + (1))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(jasminegui.portfolioreview.maximum_page)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"70px",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"90px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary btn-block",new cljs.core.Keyword(null,"label","label",1718410804),"Next",new cljs.core.Keyword(null,"on-click","on-click",1632826543),jasminegui.portfolioreview.next_page_BANG_], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"color","color",1011675173),"#CA3E47",new cljs.core.Keyword(null,"class","class",-2030961996),"separatornavline"], null)], null),(function (){var iter__4529__auto__ = (function jasminegui$portfolioreview$nav_$_iter__50732(s__50733){
return (new cljs.core.LazySeq(null,(function (){
var s__50733__$1 = s__50733;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50733__$1);
if(temp__5735__auto__){
var s__50733__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50733__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__50733__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__50735 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__50734 = (0);
while(true){
if((i__50734 < size__4528__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__50734);
cljs.core.chunk_append(b__50735,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-primary btn-block",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?" active":null)].join(''),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__50734,item,c__4527__auto__,size__4528__auto__,b__50735,s__50733__$2,temp__5735__auto__,active_tab){
return (function (){
return jasminegui.portfolioreview.go_to_block_BANG_(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item));
});})(i__50734,item,c__4527__auto__,size__4528__auto__,b__50735,s__50733__$2,temp__5735__auto__,active_tab))
], null));

var G__50926 = (i__50734 + (1));
i__50734 = G__50926;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50735),jasminegui$portfolioreview$nav_$_iter__50732(cljs.core.chunk_rest(s__50733__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50735),null);
}
} else {
var item = cljs.core.first(s__50733__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-primary btn-block",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?" active":null)].join(''),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__50733__$2,temp__5735__auto__,active_tab){
return (function (){
return jasminegui.portfolioreview.go_to_block_BANG_(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item));
});})(item,s__50733__$2,temp__5735__auto__,active_tab))
], null),jasminegui$portfolioreview$nav_$_iter__50732(cljs.core.rest(s__50733__$2)));
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
