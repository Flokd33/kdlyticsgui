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
var seq__53161_53320 = cljs.core.seq(cljs.core.keys(jasminegui.mount.default_db));
var chunk__53162_53321 = null;
var count__53163_53322 = (0);
var i__53164_53323 = (0);
while(true){
if((i__53164_53323 < count__53163_53322)){
var k_53324 = chunk__53162_53321.cljs$core$IIndexed$_nth$arity$2(null,i__53164_53323);
var G__53169_53325 = k_53324;
var G__53170_53326 = ((function (seq__53161_53320,chunk__53162_53321,count__53163_53322,i__53164_53323,G__53169_53325,k_53324){
return (function (db){
return (k_53324.cljs$core$IFn$_invoke$arity$1 ? k_53324.cljs$core$IFn$_invoke$arity$1(db) : k_53324.call(null,db));
});})(seq__53161_53320,chunk__53162_53321,count__53163_53322,i__53164_53323,G__53169_53325,k_53324))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53169_53325,G__53170_53326) : re_frame.core.reg_sub.call(null,G__53169_53325,G__53170_53326));


var G__53327 = seq__53161_53320;
var G__53328 = chunk__53162_53321;
var G__53329 = count__53163_53322;
var G__53330 = (i__53164_53323 + (1));
seq__53161_53320 = G__53327;
chunk__53162_53321 = G__53328;
count__53163_53322 = G__53329;
i__53164_53323 = G__53330;
continue;
} else {
var temp__5735__auto___53331 = cljs.core.seq(seq__53161_53320);
if(temp__5735__auto___53331){
var seq__53161_53332__$1 = temp__5735__auto___53331;
if(cljs.core.chunked_seq_QMARK_(seq__53161_53332__$1)){
var c__4556__auto___53333 = cljs.core.chunk_first(seq__53161_53332__$1);
var G__53334 = cljs.core.chunk_rest(seq__53161_53332__$1);
var G__53335 = c__4556__auto___53333;
var G__53336 = cljs.core.count(c__4556__auto___53333);
var G__53337 = (0);
seq__53161_53320 = G__53334;
chunk__53162_53321 = G__53335;
count__53163_53322 = G__53336;
i__53164_53323 = G__53337;
continue;
} else {
var k_53338 = cljs.core.first(seq__53161_53332__$1);
var G__53171_53339 = k_53338;
var G__53172_53340 = ((function (seq__53161_53320,chunk__53162_53321,count__53163_53322,i__53164_53323,G__53171_53339,k_53338,seq__53161_53332__$1,temp__5735__auto___53331){
return (function (db){
return (k_53338.cljs$core$IFn$_invoke$arity$1 ? k_53338.cljs$core$IFn$_invoke$arity$1(db) : k_53338.call(null,db));
});})(seq__53161_53320,chunk__53162_53321,count__53163_53322,i__53164_53323,G__53171_53339,k_53338,seq__53161_53332__$1,temp__5735__auto___53331))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53171_53339,G__53172_53340) : re_frame.core.reg_sub.call(null,G__53171_53339,G__53172_53340));


var G__53341 = cljs.core.next(seq__53161_53332__$1);
var G__53342 = null;
var G__53343 = (0);
var G__53344 = (0);
seq__53161_53320 = G__53341;
chunk__53162_53321 = G__53342;
count__53163_53322 = G__53343;
i__53164_53323 = G__53344;
continue;
}
} else {
}
}
break;
}
var seq__53173_53345 = cljs.core.seq(new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143)], null));
var chunk__53174_53346 = null;
var count__53175_53347 = (0);
var i__53176_53348 = (0);
while(true){
if((i__53176_53348 < count__53175_53347)){
var k_53349 = chunk__53174_53346.cljs$core$IIndexed$_nth$arity$2(null,i__53176_53348);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_53349,((function (seq__53173_53345,chunk__53174_53346,count__53175_53347,i__53176_53348,k_53349){
return (function (db,p__53185){
var vec__53186 = p__53185;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53186,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53186,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_53349,data);
});})(seq__53173_53345,chunk__53174_53346,count__53175_53347,i__53176_53348,k_53349))
);


var G__53350 = seq__53173_53345;
var G__53351 = chunk__53174_53346;
var G__53352 = count__53175_53347;
var G__53353 = (i__53176_53348 + (1));
seq__53173_53345 = G__53350;
chunk__53174_53346 = G__53351;
count__53175_53347 = G__53352;
i__53176_53348 = G__53353;
continue;
} else {
var temp__5735__auto___53354 = cljs.core.seq(seq__53173_53345);
if(temp__5735__auto___53354){
var seq__53173_53355__$1 = temp__5735__auto___53354;
if(cljs.core.chunked_seq_QMARK_(seq__53173_53355__$1)){
var c__4556__auto___53356 = cljs.core.chunk_first(seq__53173_53355__$1);
var G__53357 = cljs.core.chunk_rest(seq__53173_53355__$1);
var G__53358 = c__4556__auto___53356;
var G__53359 = cljs.core.count(c__4556__auto___53356);
var G__53360 = (0);
seq__53173_53345 = G__53357;
chunk__53174_53346 = G__53358;
count__53175_53347 = G__53359;
i__53176_53348 = G__53360;
continue;
} else {
var k_53361 = cljs.core.first(seq__53173_53355__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_53361,((function (seq__53173_53345,chunk__53174_53346,count__53175_53347,i__53176_53348,k_53361,seq__53173_53355__$1,temp__5735__auto___53354){
return (function (db,p__53189){
var vec__53190 = p__53189;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53190,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53190,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_53361,data);
});})(seq__53173_53345,chunk__53174_53346,count__53175_53347,i__53176_53348,k_53361,seq__53173_53355__$1,temp__5735__auto___53354))
);


var G__53362 = cljs.core.next(seq__53173_53355__$1);
var G__53363 = null;
var G__53364 = (0);
var G__53365 = (0);
seq__53173_53345 = G__53362;
chunk__53174_53346 = G__53363;
count__53175_53347 = G__53364;
i__53176_53348 = G__53365;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),(function (db,p__53193){
var vec__53194 = p__53193;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53194,(0),null);
var portfolios = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53194,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),portfolios,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),cljs.core.set(portfolios)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),(function (db,p__53197){
var vec__53198 = p__53197;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53198,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53198,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53198,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),(function (db,p__53201){
var vec__53202 = p__53201;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53202,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53202,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53202,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),(function (db,p__53206){
var vec__53210 = p__53206;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53210,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53210,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53210,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),(function (db,p__53213){
var vec__53214 = p__53213;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53214,(0),null);
var qt_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53214,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),clojure.string.replace(qt_date,"\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),(function (db,p__53217){
var vec__53218 = p__53217;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53218,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53218,(1),null);
var G__53221 = snapshot;
switch (G__53221) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53221)].join('')));

}
}));
jasminegui.mount.http_get_dispatch = (function jasminegui$mount$http_get_dispatch(request){
var c__41878__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41879__auto__ = (function (){var switch__41719__auto__ = (function (state_53254){
var state_val_53255 = (state_53254[(1)]);
if((state_val_53255 === (1))){
var inst_53222 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_53223 = cljs_http.client.get(inst_53222);
var state_53254__$1 = state_53254;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53254__$1,(2),inst_53223);
} else {
if((state_val_53255 === (2))){
var inst_53226 = (state_53254[(2)]);
var inst_53227 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_53228 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_53254__$1 = (function (){var statearr_53256 = state_53254;
(statearr_53256[(7)] = inst_53227);

(statearr_53256[(8)] = inst_53226);

return statearr_53256;
})();
if(cljs.core.truth_(inst_53228)){
var statearr_53257_53367 = state_53254__$1;
(statearr_53257_53367[(1)] = (3));

} else {
var statearr_53258_53368 = state_53254__$1;
(statearr_53258_53368[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53255 === (3))){
var inst_53226 = (state_53254[(8)]);
var inst_53230 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_53226);
var inst_53231 = JSON.parse(inst_53230);
var inst_53232 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_53231,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_53254__$1 = state_53254;
var statearr_53259_53369 = state_53254__$1;
(statearr_53259_53369[(2)] = inst_53232);

(statearr_53259_53369[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53255 === (4))){
var inst_53226 = (state_53254[(8)]);
var inst_53234 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_53226);
var state_53254__$1 = state_53254;
var statearr_53264_53370 = state_53254__$1;
(statearr_53264_53370[(2)] = inst_53234);

(statearr_53264_53370[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53255 === (5))){
var inst_53227 = (state_53254[(7)]);
var inst_53239 = (state_53254[(2)]);
var inst_53240 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_53227,inst_53239);
var inst_53241 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_53240) : re_frame.core.dispatch.call(null,inst_53240));
var inst_53242 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_53254__$1 = (function (){var statearr_53266 = state_53254;
(statearr_53266[(9)] = inst_53241);

return statearr_53266;
})();
if(cljs.core.truth_(inst_53242)){
var statearr_53267_53374 = state_53254__$1;
(statearr_53267_53374[(1)] = (6));

} else {
var statearr_53268_53375 = state_53254__$1;
(statearr_53268_53375[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53255 === (6))){
var inst_53244 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53245 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_53246 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_53247 = [inst_53245,inst_53246];
var inst_53248 = (new cljs.core.PersistentVector(null,2,(5),inst_53244,inst_53247,null));
var inst_53249 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_53248) : re_frame.core.dispatch.call(null,inst_53248));
var state_53254__$1 = state_53254;
var statearr_53269_53376 = state_53254__$1;
(statearr_53269_53376[(2)] = inst_53249);

(statearr_53269_53376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53255 === (7))){
var state_53254__$1 = state_53254;
var statearr_53270_53377 = state_53254__$1;
(statearr_53270_53377[(2)] = null);

(statearr_53270_53377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53255 === (8))){
var inst_53252 = (state_53254[(2)]);
var state_53254__$1 = state_53254;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53254__$1,inst_53252);
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
var jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__ = null;
var jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____0 = (function (){
var statearr_53271 = [null,null,null,null,null,null,null,null,null,null];
(statearr_53271[(0)] = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__);

(statearr_53271[(1)] = (1));

return statearr_53271;
});
var jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1 = (function (state_53254){
while(true){
var ret_value__41721__auto__ = (function (){try{while(true){
var result__41722__auto__ = switch__41719__auto__(state_53254);
if(cljs.core.keyword_identical_QMARK_(result__41722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41722__auto__;
}
break;
}
}catch (e53272){if((e53272 instanceof Object)){
var ex__41723__auto__ = e53272;
var statearr_53273_53380 = state_53254;
(statearr_53273_53380[(5)] = ex__41723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53272;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53381 = state_53254;
state_53254 = G__53381;
continue;
} else {
return ret_value__41721__auto__;
}
break;
}
});
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__ = function(state_53254){
switch(arguments.length){
case 0:
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____0.call(this);
case 1:
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1.call(this,state_53254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____0;
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1;
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__;
})()
})();
var state__41880__auto__ = (function (){var statearr_53274 = (f__41879__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41879__auto__.cljs$core$IFn$_invoke$arity$0() : f__41879__auto__.call(null));
(statearr_53274[(6)] = c__41878__auto__);

return statearr_53274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41880__auto__);
}));

return c__41878__auto__;
});
var G__53275_53382 = new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518);
var G__53276_53383 = jasminegui.mount.http_get_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__53275_53382,G__53276_53383) : re_frame.core.reg_fx.call(null,G__53275_53382,G__53276_53383));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions","get-positions",1610972586),(function (p__53277,p__53278){
var map__53279 = p__53277;
var map__53279__$1 = (((((!((map__53279 == null))))?(((((map__53279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53279):map__53279);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53279__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53280 = p__53278;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53280,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-rating-to-score","get-rating-to-score",391912155),(function (p__53284,p__53285){
var map__53286 = p__53284;
var map__53286__$1 = (((((!((map__53286 == null))))?(((((map__53286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53286):map__53286);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53286__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53287 = p__53285;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53287,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"rating-to-score"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472),(function (p__53292,p__53293){
var map__53294 = p__53292;
var map__53294__$1 = (((((!((map__53294 == null))))?(((((map__53294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53294):map__53294);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53294__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53295 = p__53293;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53295,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"portfolios"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-pivoted-positions","get-pivoted-positions",2145025131),(function (p__53299,p__53300){
var map__53301 = p__53299;
var map__53301__$1 = (((((!((map__53301 == null))))?(((((map__53301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53301):map__53301);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53301__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53302 = p__53300;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53302,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"pivoted-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-total-positions","get-total-positions",-698807167),(function (p__53306,p__53307){
var map__53308 = p__53306;
var map__53308__$1 = (((((!((map__53308 == null))))?(((((map__53308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53308):map__53308);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53308__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53309 = p__53307;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53309,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"total-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-qt-date","get-qt-date",-1072332881),(function (p__53313,p__53314){
var map__53315 = p__53313;
var map__53315__$1 = (((((!((map__53315 == null))))?(((((map__53315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53315):map__53315);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53315__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53316 = p__53314;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53316,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"qt-date"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),false], null)], null);
}));

//# sourceMappingURL=jasminegui.mount.js.map
