goog.provide('jasminegui.mount');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('jasminegui.static$');
goog.require('re_frame.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
jasminegui.mount.dev_server_address = "http://localhost:3501/";
jasminegui.mount.prod_server_address = "http://iamlfilive:3501/";
jasminegui.mount.server_address = jasminegui.mount.prod_server_address;
jasminegui.mount.default_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081)],[(1),new cljs.core.Keyword(null,"summary","summary",380847952),null,"Table",new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),true,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),"undefined",cljs.core.set(null),new cljs.core.Keyword(null,"quarter","quarter",-508147616),"Tree",new cljs.core.Keyword(null,"nav","nav",719540477),(1),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),"None",(1),"One","Tree",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"home","home",-74557309),"OGEMCORD",new cljs.core.Keyword(null,"cembi","cembi",1924920241),cljs.core.PersistentVector.EMPTY,true,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null)]);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jasminegui.mount","initialize-db","jasminegui.mount/initialize-db",-1621527627),(function (_,___$1){
return jasminegui.mount.default_db;
}));
var seq__43990_44229 = cljs.core.seq(cljs.core.keys(jasminegui.mount.default_db));
var chunk__43991_44230 = null;
var count__43992_44231 = (0);
var i__43993_44232 = (0);
while(true){
if((i__43993_44232 < count__43992_44231)){
var k_44233 = chunk__43991_44230.cljs$core$IIndexed$_nth$arity$2(null,i__43993_44232);
var G__43998_44234 = k_44233;
var G__43999_44235 = ((function (seq__43990_44229,chunk__43991_44230,count__43992_44231,i__43993_44232,G__43998_44234,k_44233){
return (function (db){
return (k_44233.cljs$core$IFn$_invoke$arity$1 ? k_44233.cljs$core$IFn$_invoke$arity$1(db) : k_44233.call(null,db));
});})(seq__43990_44229,chunk__43991_44230,count__43992_44231,i__43993_44232,G__43998_44234,k_44233))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__43998_44234,G__43999_44235) : re_frame.core.reg_sub.call(null,G__43998_44234,G__43999_44235));


var G__44236 = seq__43990_44229;
var G__44237 = chunk__43991_44230;
var G__44238 = count__43992_44231;
var G__44239 = (i__43993_44232 + (1));
seq__43990_44229 = G__44236;
chunk__43991_44230 = G__44237;
count__43992_44231 = G__44238;
i__43993_44232 = G__44239;
continue;
} else {
var temp__5735__auto___44240 = cljs.core.seq(seq__43990_44229);
if(temp__5735__auto___44240){
var seq__43990_44241__$1 = temp__5735__auto___44240;
if(cljs.core.chunked_seq_QMARK_(seq__43990_44241__$1)){
var c__4556__auto___44242 = cljs.core.chunk_first(seq__43990_44241__$1);
var G__44243 = cljs.core.chunk_rest(seq__43990_44241__$1);
var G__44244 = c__4556__auto___44242;
var G__44245 = cljs.core.count(c__4556__auto___44242);
var G__44246 = (0);
seq__43990_44229 = G__44243;
chunk__43991_44230 = G__44244;
count__43992_44231 = G__44245;
i__43993_44232 = G__44246;
continue;
} else {
var k_44247 = cljs.core.first(seq__43990_44241__$1);
var G__44000_44248 = k_44247;
var G__44001_44249 = ((function (seq__43990_44229,chunk__43991_44230,count__43992_44231,i__43993_44232,G__44000_44248,k_44247,seq__43990_44241__$1,temp__5735__auto___44240){
return (function (db){
return (k_44247.cljs$core$IFn$_invoke$arity$1 ? k_44247.cljs$core$IFn$_invoke$arity$1(db) : k_44247.call(null,db));
});})(seq__43990_44229,chunk__43991_44230,count__43992_44231,i__43993_44232,G__44000_44248,k_44247,seq__43990_44241__$1,temp__5735__auto___44240))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__44000_44248,G__44001_44249) : re_frame.core.reg_sub.call(null,G__44000_44248,G__44001_44249));


var G__44250 = cljs.core.next(seq__43990_44241__$1);
var G__44251 = null;
var G__44252 = (0);
var G__44253 = (0);
seq__43990_44229 = G__44250;
chunk__43991_44230 = G__44251;
count__43992_44231 = G__44252;
i__43993_44232 = G__44253;
continue;
}
} else {
}
}
break;
}
var seq__44002_44254 = cljs.core.seq(new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143)], null));
var chunk__44003_44255 = null;
var count__44004_44256 = (0);
var i__44005_44257 = (0);
while(true){
if((i__44005_44257 < count__44004_44256)){
var k_44259 = chunk__44003_44255.cljs$core$IIndexed$_nth$arity$2(null,i__44005_44257);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_44259,((function (seq__44002_44254,chunk__44003_44255,count__44004_44256,i__44005_44257,k_44259){
return (function (db,p__44017){
var vec__44018 = p__44017;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44018,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44018,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_44259,data);
});})(seq__44002_44254,chunk__44003_44255,count__44004_44256,i__44005_44257,k_44259))
);


var G__44262 = seq__44002_44254;
var G__44263 = chunk__44003_44255;
var G__44264 = count__44004_44256;
var G__44265 = (i__44005_44257 + (1));
seq__44002_44254 = G__44262;
chunk__44003_44255 = G__44263;
count__44004_44256 = G__44264;
i__44005_44257 = G__44265;
continue;
} else {
var temp__5735__auto___44266 = cljs.core.seq(seq__44002_44254);
if(temp__5735__auto___44266){
var seq__44002_44267__$1 = temp__5735__auto___44266;
if(cljs.core.chunked_seq_QMARK_(seq__44002_44267__$1)){
var c__4556__auto___44268 = cljs.core.chunk_first(seq__44002_44267__$1);
var G__44270 = cljs.core.chunk_rest(seq__44002_44267__$1);
var G__44271 = c__4556__auto___44268;
var G__44272 = cljs.core.count(c__4556__auto___44268);
var G__44273 = (0);
seq__44002_44254 = G__44270;
chunk__44003_44255 = G__44271;
count__44004_44256 = G__44272;
i__44005_44257 = G__44273;
continue;
} else {
var k_44274 = cljs.core.first(seq__44002_44267__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_44274,((function (seq__44002_44254,chunk__44003_44255,count__44004_44256,i__44005_44257,k_44274,seq__44002_44267__$1,temp__5735__auto___44266){
return (function (db,p__44024){
var vec__44035 = p__44024;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44035,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44035,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_44274,data);
});})(seq__44002_44254,chunk__44003_44255,count__44004_44256,i__44005_44257,k_44274,seq__44002_44267__$1,temp__5735__auto___44266))
);


var G__44279 = cljs.core.next(seq__44002_44267__$1);
var G__44280 = null;
var G__44281 = (0);
var G__44282 = (0);
seq__44002_44254 = G__44279;
chunk__44003_44255 = G__44280;
count__44004_44256 = G__44281;
i__44005_44257 = G__44282;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),(function (db,p__44045){
var vec__44046 = p__44045;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44046,(0),null);
var portfolios = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44046,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),portfolios,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),cljs.core.set(portfolios)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),(function (db,p__44089){
var vec__44091 = p__44089;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44091,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44091,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44091,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),(function (db,p__44098){
var vec__44099 = p__44098;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44099,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44099,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44099,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),(function (db,p__44105){
var vec__44106 = p__44105;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44106,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44106,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44106,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),(function (db,p__44112){
var vec__44114 = p__44112;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44114,(0),null);
var qt_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44114,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),clojure.string.replace(qt_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),(function (db,p__44117){
var vec__44118 = p__44117;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44118,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44118,(1),null);
var G__44121 = snapshot;
switch (G__44121) {
case (1):
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),snapshot);

break;
case (2):
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),snapshot);

break;
case (3):
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),snapshot);

break;
case (4):
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),snapshot);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44121)].join('')));

}
}));
jasminegui.mount.http_get_dispatch = (function jasminegui$mount$http_get_dispatch(request){
var c__41764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41765__auto__ = (function (){var switch__41741__auto__ = (function (state_44150){
var state_val_44151 = (state_44150[(1)]);
if((state_val_44151 === (1))){
var inst_44122 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_44123 = cljs_http.client.get(inst_44122);
var state_44150__$1 = state_44150;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44150__$1,(2),inst_44123);
} else {
if((state_val_44151 === (2))){
var inst_44125 = (state_44150[(2)]);
var inst_44126 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_44127 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_44150__$1 = (function (){var statearr_44152 = state_44150;
(statearr_44152[(7)] = inst_44125);

(statearr_44152[(8)] = inst_44126);

return statearr_44152;
})();
if(cljs.core.truth_(inst_44127)){
var statearr_44154_44295 = state_44150__$1;
(statearr_44154_44295[(1)] = (3));

} else {
var statearr_44156_44298 = state_44150__$1;
(statearr_44156_44298[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44151 === (3))){
var inst_44125 = (state_44150[(7)]);
var inst_44129 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_44125);
var inst_44130 = JSON.parse(inst_44129);
var inst_44131 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_44130,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_44150__$1 = state_44150;
var statearr_44158_44300 = state_44150__$1;
(statearr_44158_44300[(2)] = inst_44131);

(statearr_44158_44300[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44151 === (4))){
var inst_44125 = (state_44150[(7)]);
var inst_44133 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_44125);
var state_44150__$1 = state_44150;
var statearr_44161_44302 = state_44150__$1;
(statearr_44161_44302[(2)] = inst_44133);

(statearr_44161_44302[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44151 === (5))){
var inst_44126 = (state_44150[(8)]);
var inst_44135 = (state_44150[(2)]);
var inst_44136 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_44126,inst_44135);
var inst_44137 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_44136) : re_frame.core.dispatch.call(null,inst_44136));
var inst_44138 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_44150__$1 = (function (){var statearr_44164 = state_44150;
(statearr_44164[(9)] = inst_44137);

return statearr_44164;
})();
if(cljs.core.truth_(inst_44138)){
var statearr_44165_44307 = state_44150__$1;
(statearr_44165_44307[(1)] = (6));

} else {
var statearr_44166_44308 = state_44150__$1;
(statearr_44166_44308[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44151 === (6))){
var inst_44140 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44141 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_44142 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_44143 = [inst_44141,inst_44142];
var inst_44144 = (new cljs.core.PersistentVector(null,2,(5),inst_44140,inst_44143,null));
var inst_44145 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_44144) : re_frame.core.dispatch.call(null,inst_44144));
var state_44150__$1 = state_44150;
var statearr_44169_44309 = state_44150__$1;
(statearr_44169_44309[(2)] = inst_44145);

(statearr_44169_44309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44151 === (7))){
var state_44150__$1 = state_44150;
var statearr_44171_44310 = state_44150__$1;
(statearr_44171_44310[(2)] = null);

(statearr_44171_44310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44151 === (8))){
var inst_44148 = (state_44150[(2)]);
var state_44150__$1 = state_44150;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44150__$1,inst_44148);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__ = null;
var jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____0 = (function (){
var statearr_44173 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44173[(0)] = jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__);

(statearr_44173[(1)] = (1));

return statearr_44173;
});
var jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____1 = (function (state_44150){
while(true){
var ret_value__41743__auto__ = (function (){try{while(true){
var result__41744__auto__ = switch__41741__auto__(state_44150);
if(cljs.core.keyword_identical_QMARK_(result__41744__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41744__auto__;
}
break;
}
}catch (e44176){if((e44176 instanceof Object)){
var ex__41745__auto__ = e44176;
var statearr_44177_44311 = state_44150;
(statearr_44177_44311[(5)] = ex__41745__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44176;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44312 = state_44150;
state_44150 = G__44312;
continue;
} else {
return ret_value__41743__auto__;
}
break;
}
});
jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__ = function(state_44150){
switch(arguments.length){
case 0:
return jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____0.call(this);
case 1:
return jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____1.call(this,state_44150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____0;
jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto____1;
return jasminegui$mount$http_get_dispatch_$_state_machine__41742__auto__;
})()
})();
var state__41766__auto__ = (function (){var statearr_44180 = (f__41765__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41765__auto__.cljs$core$IFn$_invoke$arity$0() : f__41765__auto__.call(null));
(statearr_44180[(6)] = c__41764__auto__);

return statearr_44180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41766__auto__);
}));

return c__41764__auto__;
});
var G__44183_44313 = new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518);
var G__44184_44314 = jasminegui.mount.http_get_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__44183_44313,G__44184_44314) : re_frame.core.reg_fx.call(null,G__44183_44313,G__44184_44314));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions","get-positions",1610972586),(function (p__44185,p__44186){
var map__44187 = p__44185;
var map__44187__$1 = (((((!((map__44187 == null))))?(((((map__44187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44187):map__44187);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44187__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44188 = p__44186;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44188,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-rating-to-score","get-rating-to-score",391912155),(function (p__44192,p__44193){
var map__44194 = p__44192;
var map__44194__$1 = (((((!((map__44194 == null))))?(((((map__44194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44194):map__44194);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44194__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44195 = p__44193;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44195,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"rating-to-score"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472),(function (p__44199,p__44200){
var map__44201 = p__44199;
var map__44201__$1 = (((((!((map__44201 == null))))?(((((map__44201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44201):map__44201);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44201__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44202 = p__44200;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44202,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"portfolios"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-pivoted-positions","get-pivoted-positions",2145025131),(function (p__44206,p__44207){
var map__44208 = p__44206;
var map__44208__$1 = (((((!((map__44208 == null))))?(((((map__44208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44208):map__44208);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44208__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44209 = p__44207;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44209,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"pivoted-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-total-positions","get-total-positions",-698807167),(function (p__44213,p__44214){
var map__44215 = p__44213;
var map__44215__$1 = (((((!((map__44215 == null))))?(((((map__44215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44215):map__44215);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44215__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44216 = p__44214;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44216,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"total-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-qt-date","get-qt-date",-1072332881),(function (p__44221,p__44222){
var map__44223 = p__44221;
var map__44223__$1 = (((((!((map__44223 == null))))?(((((map__44223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44223):map__44223);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44223__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44224 = p__44222;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44224,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"qt-date"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),false], null)], null);
}));

//# sourceMappingURL=jasminegui.mount.js.map
