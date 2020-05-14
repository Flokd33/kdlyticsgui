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
jasminegui.mount.default_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081)],[new cljs.core.Keyword(null,"summary","summary",380847952),null,"Table",new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),true,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),"undefined",cljs.core.set(null),new cljs.core.Keyword(null,"quarter","quarter",-508147616),"Tree",new cljs.core.Keyword(null,"nav","nav",719540477),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),"None","One","Tree",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"home","home",-74557309),"OGEMCORD",new cljs.core.Keyword(null,"cembi","cembi",1924920241),cljs.core.PersistentVector.EMPTY,true,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null)]);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jasminegui.mount","initialize-db","jasminegui.mount/initialize-db",-1621527627),(function (_,___$1){
return jasminegui.mount.default_db;
}));
var seq__47307_47449 = cljs.core.seq(cljs.core.keys(jasminegui.mount.default_db));
var chunk__47308_47450 = null;
var count__47309_47451 = (0);
var i__47310_47452 = (0);
while(true){
if((i__47310_47452 < count__47309_47451)){
var k_47453 = chunk__47308_47450.cljs$core$IIndexed$_nth$arity$2(null,i__47310_47452);
var G__47316_47454 = k_47453;
var G__47317_47455 = ((function (seq__47307_47449,chunk__47308_47450,count__47309_47451,i__47310_47452,G__47316_47454,k_47453){
return (function (db){
return (k_47453.cljs$core$IFn$_invoke$arity$1 ? k_47453.cljs$core$IFn$_invoke$arity$1(db) : k_47453.call(null,db));
});})(seq__47307_47449,chunk__47308_47450,count__47309_47451,i__47310_47452,G__47316_47454,k_47453))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__47316_47454,G__47317_47455) : re_frame.core.reg_sub.call(null,G__47316_47454,G__47317_47455));


var G__47456 = seq__47307_47449;
var G__47457 = chunk__47308_47450;
var G__47458 = count__47309_47451;
var G__47459 = (i__47310_47452 + (1));
seq__47307_47449 = G__47456;
chunk__47308_47450 = G__47457;
count__47309_47451 = G__47458;
i__47310_47452 = G__47459;
continue;
} else {
var temp__5735__auto___47460 = cljs.core.seq(seq__47307_47449);
if(temp__5735__auto___47460){
var seq__47307_47461__$1 = temp__5735__auto___47460;
if(cljs.core.chunked_seq_QMARK_(seq__47307_47461__$1)){
var c__4556__auto___47462 = cljs.core.chunk_first(seq__47307_47461__$1);
var G__47463 = cljs.core.chunk_rest(seq__47307_47461__$1);
var G__47464 = c__4556__auto___47462;
var G__47465 = cljs.core.count(c__4556__auto___47462);
var G__47466 = (0);
seq__47307_47449 = G__47463;
chunk__47308_47450 = G__47464;
count__47309_47451 = G__47465;
i__47310_47452 = G__47466;
continue;
} else {
var k_47467 = cljs.core.first(seq__47307_47461__$1);
var G__47318_47468 = k_47467;
var G__47319_47469 = ((function (seq__47307_47449,chunk__47308_47450,count__47309_47451,i__47310_47452,G__47318_47468,k_47467,seq__47307_47461__$1,temp__5735__auto___47460){
return (function (db){
return (k_47467.cljs$core$IFn$_invoke$arity$1 ? k_47467.cljs$core$IFn$_invoke$arity$1(db) : k_47467.call(null,db));
});})(seq__47307_47449,chunk__47308_47450,count__47309_47451,i__47310_47452,G__47318_47468,k_47467,seq__47307_47461__$1,temp__5735__auto___47460))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__47318_47468,G__47319_47469) : re_frame.core.reg_sub.call(null,G__47318_47468,G__47319_47469));


var G__47470 = cljs.core.next(seq__47307_47461__$1);
var G__47471 = null;
var G__47472 = (0);
var G__47473 = (0);
seq__47307_47449 = G__47470;
chunk__47308_47450 = G__47471;
count__47309_47451 = G__47472;
i__47310_47452 = G__47473;
continue;
}
} else {
}
}
break;
}
var seq__47320_47474 = cljs.core.seq(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053)], null));
var chunk__47321_47475 = null;
var count__47322_47476 = (0);
var i__47323_47477 = (0);
while(true){
if((i__47323_47477 < count__47322_47476)){
var k_47478 = chunk__47321_47475.cljs$core$IIndexed$_nth$arity$2(null,i__47323_47477);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_47478,((function (seq__47320_47474,chunk__47321_47475,count__47322_47476,i__47323_47477,k_47478){
return (function (db,p__47332){
var vec__47333 = p__47332;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47333,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47333,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_47478,data);
});})(seq__47320_47474,chunk__47321_47475,count__47322_47476,i__47323_47477,k_47478))
);


var G__47479 = seq__47320_47474;
var G__47480 = chunk__47321_47475;
var G__47481 = count__47322_47476;
var G__47482 = (i__47323_47477 + (1));
seq__47320_47474 = G__47479;
chunk__47321_47475 = G__47480;
count__47322_47476 = G__47481;
i__47323_47477 = G__47482;
continue;
} else {
var temp__5735__auto___47483 = cljs.core.seq(seq__47320_47474);
if(temp__5735__auto___47483){
var seq__47320_47484__$1 = temp__5735__auto___47483;
if(cljs.core.chunked_seq_QMARK_(seq__47320_47484__$1)){
var c__4556__auto___47485 = cljs.core.chunk_first(seq__47320_47484__$1);
var G__47486 = cljs.core.chunk_rest(seq__47320_47484__$1);
var G__47487 = c__4556__auto___47485;
var G__47488 = cljs.core.count(c__4556__auto___47485);
var G__47489 = (0);
seq__47320_47474 = G__47486;
chunk__47321_47475 = G__47487;
count__47322_47476 = G__47488;
i__47323_47477 = G__47489;
continue;
} else {
var k_47490 = cljs.core.first(seq__47320_47484__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_47490,((function (seq__47320_47474,chunk__47321_47475,count__47322_47476,i__47323_47477,k_47490,seq__47320_47484__$1,temp__5735__auto___47483){
return (function (db,p__47336){
var vec__47337 = p__47336;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47337,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47337,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_47490,data);
});})(seq__47320_47474,chunk__47321_47475,count__47322_47476,i__47323_47477,k_47490,seq__47320_47484__$1,temp__5735__auto___47483))
);


var G__47491 = cljs.core.next(seq__47320_47484__$1);
var G__47492 = null;
var G__47493 = (0);
var G__47494 = (0);
seq__47320_47474 = G__47491;
chunk__47321_47475 = G__47492;
count__47322_47476 = G__47493;
i__47323_47477 = G__47494;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),(function (db,p__47341){
var vec__47342 = p__47341;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47342,(0),null);
var portfolios = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47342,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),portfolios,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),cljs.core.set(portfolios)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),(function (db,p__47345){
var vec__47346 = p__47345;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47346,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47346,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47346,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),(function (db,p__47349){
var vec__47350 = p__47349;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47350,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47350,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47350,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),(function (db,p__47353){
var vec__47354 = p__47353;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47354,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47354,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47354,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),(function (db,p__47357){
var vec__47358 = p__47357;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47358,(0),null);
var qt_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47358,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),clojure.string.replace(qt_date,"\"",""));
}));
jasminegui.mount.http_get_dispatch = (function jasminegui$mount$http_get_dispatch(request){
var c__41878__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41879__auto__ = (function (){var switch__41719__auto__ = (function (state_47389){
var state_val_47390 = (state_47389[(1)]);
if((state_val_47390 === (1))){
var inst_47361 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_47362 = cljs_http.client.get(inst_47361);
var state_47389__$1 = state_47389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47389__$1,(2),inst_47362);
} else {
if((state_val_47390 === (2))){
var inst_47364 = (state_47389[(2)]);
var inst_47365 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_47366 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_47389__$1 = (function (){var statearr_47391 = state_47389;
(statearr_47391[(7)] = inst_47364);

(statearr_47391[(8)] = inst_47365);

return statearr_47391;
})();
if(cljs.core.truth_(inst_47366)){
var statearr_47392_47495 = state_47389__$1;
(statearr_47392_47495[(1)] = (3));

} else {
var statearr_47393_47496 = state_47389__$1;
(statearr_47393_47496[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47390 === (3))){
var inst_47364 = (state_47389[(7)]);
var inst_47368 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_47364);
var inst_47369 = JSON.parse(inst_47368);
var inst_47370 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_47369,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_47389__$1 = state_47389;
var statearr_47394_47497 = state_47389__$1;
(statearr_47394_47497[(2)] = inst_47370);

(statearr_47394_47497[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47390 === (4))){
var inst_47364 = (state_47389[(7)]);
var inst_47372 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_47364);
var state_47389__$1 = state_47389;
var statearr_47395_47498 = state_47389__$1;
(statearr_47395_47498[(2)] = inst_47372);

(statearr_47395_47498[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47390 === (5))){
var inst_47365 = (state_47389[(8)]);
var inst_47374 = (state_47389[(2)]);
var inst_47375 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_47365,inst_47374);
var inst_47376 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_47375) : re_frame.core.dispatch.call(null,inst_47375));
var inst_47377 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_47389__$1 = (function (){var statearr_47396 = state_47389;
(statearr_47396[(9)] = inst_47376);

return statearr_47396;
})();
if(cljs.core.truth_(inst_47377)){
var statearr_47397_47499 = state_47389__$1;
(statearr_47397_47499[(1)] = (6));

} else {
var statearr_47398_47500 = state_47389__$1;
(statearr_47398_47500[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47390 === (6))){
var inst_47379 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47380 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_47381 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_47382 = [inst_47380,inst_47381];
var inst_47383 = (new cljs.core.PersistentVector(null,2,(5),inst_47379,inst_47382,null));
var inst_47384 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_47383) : re_frame.core.dispatch.call(null,inst_47383));
var state_47389__$1 = state_47389;
var statearr_47399_47501 = state_47389__$1;
(statearr_47399_47501[(2)] = inst_47384);

(statearr_47399_47501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47390 === (7))){
var state_47389__$1 = state_47389;
var statearr_47400_47502 = state_47389__$1;
(statearr_47400_47502[(2)] = null);

(statearr_47400_47502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47390 === (8))){
var inst_47387 = (state_47389[(2)]);
var state_47389__$1 = state_47389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47389__$1,inst_47387);
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
var statearr_47401 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47401[(0)] = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__);

(statearr_47401[(1)] = (1));

return statearr_47401;
});
var jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1 = (function (state_47389){
while(true){
var ret_value__41721__auto__ = (function (){try{while(true){
var result__41722__auto__ = switch__41719__auto__(state_47389);
if(cljs.core.keyword_identical_QMARK_(result__41722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41722__auto__;
}
break;
}
}catch (e47402){if((e47402 instanceof Object)){
var ex__41723__auto__ = e47402;
var statearr_47403_47506 = state_47389;
(statearr_47403_47506[(5)] = ex__41723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47402;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47507 = state_47389;
state_47389 = G__47507;
continue;
} else {
return ret_value__41721__auto__;
}
break;
}
});
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__ = function(state_47389){
switch(arguments.length){
case 0:
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____0.call(this);
case 1:
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1.call(this,state_47389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____0;
jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto____1;
return jasminegui$mount$http_get_dispatch_$_state_machine__41720__auto__;
})()
})();
var state__41880__auto__ = (function (){var statearr_47404 = (f__41879__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41879__auto__.cljs$core$IFn$_invoke$arity$0() : f__41879__auto__.call(null));
(statearr_47404[(6)] = c__41878__auto__);

return statearr_47404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41880__auto__);
}));

return c__41878__auto__;
});
var G__47405_47508 = new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518);
var G__47406_47509 = jasminegui.mount.http_get_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__47405_47508,G__47406_47509) : re_frame.core.reg_fx.call(null,G__47405_47508,G__47406_47509));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions","get-positions",1610972586),(function (p__47407,p__47408){
var map__47409 = p__47407;
var map__47409__$1 = (((((!((map__47409 == null))))?(((((map__47409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47409):map__47409);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47409__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47410 = p__47408;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47410,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-rating-to-score","get-rating-to-score",391912155),(function (p__47414,p__47415){
var map__47416 = p__47414;
var map__47416__$1 = (((((!((map__47416 == null))))?(((((map__47416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47416):map__47416);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47416__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47417 = p__47415;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47417,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"rating-to-score"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472),(function (p__47421,p__47422){
var map__47423 = p__47421;
var map__47423__$1 = (((((!((map__47423 == null))))?(((((map__47423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47423):map__47423);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47423__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47424 = p__47422;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47424,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"portfolios"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-pivoted-positions","get-pivoted-positions",2145025131),(function (p__47428,p__47429){
var map__47430 = p__47428;
var map__47430__$1 = (((((!((map__47430 == null))))?(((((map__47430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47430):map__47430);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47430__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47431 = p__47429;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47431,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"pivoted-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-total-positions","get-total-positions",-698807167),(function (p__47435,p__47436){
var map__47437 = p__47435;
var map__47437__$1 = (((((!((map__47437 == null))))?(((((map__47437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47437):map__47437);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47437__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47438 = p__47436;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47438,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"total-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-qt-date","get-qt-date",-1072332881),(function (p__47442,p__47443){
var map__47444 = p__47442;
var map__47444__$1 = (((((!((map__47444 == null))))?(((((map__47444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47444):map__47444);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47444__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47445 = p__47443;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47445,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"qt-date"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),false], null)], null);
}));

//# sourceMappingURL=jasminegui.mount.js.map
