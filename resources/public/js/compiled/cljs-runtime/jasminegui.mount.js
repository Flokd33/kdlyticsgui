goog.provide('jasminegui.mount');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('jasminegui.static$');
goog.require('re_frame.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
jasminegui.mount.dev_server_address = "http://localhost:3501/";
jasminegui.mount.prod_server_address = "http://iamlfilive:3501/";
jasminegui.mount.server_address = jasminegui.mount.dev_server_address;
jasminegui.mount.default_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081)],[new cljs.core.Keyword(null,"summary","summary",380847952),null,"Table",new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),true,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),cljs.core.set(null),new cljs.core.Keyword(null,"quarter","quarter",-508147616),"Tree",new cljs.core.Keyword(null,"nav","nav",719540477),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),"None","One","Tree",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"home","home",-74557309),"OGEMCORD",new cljs.core.Keyword(null,"cembi","cembi",1924920241),cljs.core.PersistentVector.EMPTY,true,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null)]);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jasminegui.mount","initialize-db","jasminegui.mount/initialize-db",-1621527627),(function (_,___$1){
return jasminegui.mount.default_db;
}));
var seq__42197_42326 = cljs.core.seq(cljs.core.keys(jasminegui.mount.default_db));
var chunk__42198_42327 = null;
var count__42199_42328 = (0);
var i__42200_42329 = (0);
while(true){
if((i__42200_42329 < count__42199_42328)){
var k_42330 = chunk__42198_42327.cljs$core$IIndexed$_nth$arity$2(null,i__42200_42329);
var G__42205_42331 = k_42330;
var G__42206_42332 = ((function (seq__42197_42326,chunk__42198_42327,count__42199_42328,i__42200_42329,G__42205_42331,k_42330){
return (function (db){
return (k_42330.cljs$core$IFn$_invoke$arity$1 ? k_42330.cljs$core$IFn$_invoke$arity$1(db) : k_42330.call(null,db));
});})(seq__42197_42326,chunk__42198_42327,count__42199_42328,i__42200_42329,G__42205_42331,k_42330))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42205_42331,G__42206_42332) : re_frame.core.reg_sub.call(null,G__42205_42331,G__42206_42332));


var G__42333 = seq__42197_42326;
var G__42334 = chunk__42198_42327;
var G__42335 = count__42199_42328;
var G__42336 = (i__42200_42329 + (1));
seq__42197_42326 = G__42333;
chunk__42198_42327 = G__42334;
count__42199_42328 = G__42335;
i__42200_42329 = G__42336;
continue;
} else {
var temp__5735__auto___42337 = cljs.core.seq(seq__42197_42326);
if(temp__5735__auto___42337){
var seq__42197_42338__$1 = temp__5735__auto___42337;
if(cljs.core.chunked_seq_QMARK_(seq__42197_42338__$1)){
var c__4550__auto___42339 = cljs.core.chunk_first(seq__42197_42338__$1);
var G__42340 = cljs.core.chunk_rest(seq__42197_42338__$1);
var G__42341 = c__4550__auto___42339;
var G__42342 = cljs.core.count(c__4550__auto___42339);
var G__42343 = (0);
seq__42197_42326 = G__42340;
chunk__42198_42327 = G__42341;
count__42199_42328 = G__42342;
i__42200_42329 = G__42343;
continue;
} else {
var k_42344 = cljs.core.first(seq__42197_42338__$1);
var G__42207_42345 = k_42344;
var G__42208_42346 = ((function (seq__42197_42326,chunk__42198_42327,count__42199_42328,i__42200_42329,G__42207_42345,k_42344,seq__42197_42338__$1,temp__5735__auto___42337){
return (function (db){
return (k_42344.cljs$core$IFn$_invoke$arity$1 ? k_42344.cljs$core$IFn$_invoke$arity$1(db) : k_42344.call(null,db));
});})(seq__42197_42326,chunk__42198_42327,count__42199_42328,i__42200_42329,G__42207_42345,k_42344,seq__42197_42338__$1,temp__5735__auto___42337))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42207_42345,G__42208_42346) : re_frame.core.reg_sub.call(null,G__42207_42345,G__42208_42346));


var G__42347 = cljs.core.next(seq__42197_42338__$1);
var G__42348 = null;
var G__42349 = (0);
var G__42350 = (0);
seq__42197_42326 = G__42347;
chunk__42198_42327 = G__42348;
count__42199_42328 = G__42349;
i__42200_42329 = G__42350;
continue;
}
} else {
}
}
break;
}
var seq__42209_42351 = cljs.core.seq(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053)], null));
var chunk__42210_42352 = null;
var count__42211_42353 = (0);
var i__42212_42354 = (0);
while(true){
if((i__42212_42354 < count__42211_42353)){
var k_42355 = chunk__42210_42352.cljs$core$IIndexed$_nth$arity$2(null,i__42212_42354);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_42355,((function (seq__42209_42351,chunk__42210_42352,count__42211_42353,i__42212_42354,k_42355){
return (function (db,p__42221){
var vec__42222 = p__42221;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42222,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42222,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_42355,data);
});})(seq__42209_42351,chunk__42210_42352,count__42211_42353,i__42212_42354,k_42355))
);


var G__42356 = seq__42209_42351;
var G__42357 = chunk__42210_42352;
var G__42358 = count__42211_42353;
var G__42359 = (i__42212_42354 + (1));
seq__42209_42351 = G__42356;
chunk__42210_42352 = G__42357;
count__42211_42353 = G__42358;
i__42212_42354 = G__42359;
continue;
} else {
var temp__5735__auto___42360 = cljs.core.seq(seq__42209_42351);
if(temp__5735__auto___42360){
var seq__42209_42361__$1 = temp__5735__auto___42360;
if(cljs.core.chunked_seq_QMARK_(seq__42209_42361__$1)){
var c__4550__auto___42362 = cljs.core.chunk_first(seq__42209_42361__$1);
var G__42363 = cljs.core.chunk_rest(seq__42209_42361__$1);
var G__42364 = c__4550__auto___42362;
var G__42365 = cljs.core.count(c__4550__auto___42362);
var G__42366 = (0);
seq__42209_42351 = G__42363;
chunk__42210_42352 = G__42364;
count__42211_42353 = G__42365;
i__42212_42354 = G__42366;
continue;
} else {
var k_42367 = cljs.core.first(seq__42209_42361__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_42367,((function (seq__42209_42351,chunk__42210_42352,count__42211_42353,i__42212_42354,k_42367,seq__42209_42361__$1,temp__5735__auto___42360){
return (function (db,p__42225){
var vec__42226 = p__42225;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42226,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42226,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_42367,data);
});})(seq__42209_42351,chunk__42210_42352,count__42211_42353,i__42212_42354,k_42367,seq__42209_42361__$1,temp__5735__auto___42360))
);


var G__42368 = cljs.core.next(seq__42209_42361__$1);
var G__42369 = null;
var G__42370 = (0);
var G__42371 = (0);
seq__42209_42351 = G__42368;
chunk__42210_42352 = G__42369;
count__42211_42353 = G__42370;
i__42212_42354 = G__42371;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),(function (db,p__42229){
var vec__42230 = p__42229;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42230,(0),null);
var portfolios = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42230,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),portfolios,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),cljs.core.set(portfolios)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),(function (db,p__42233){
var vec__42234 = p__42233;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42234,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42234,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42234,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),(function (db,p__42237){
var vec__42238 = p__42237;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42238,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42238,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42238,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),(function (db,p__42241){
var vec__42242 = p__42241;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42242,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42242,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42242,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),id], null),f);
}));
jasminegui.mount.http_get_dispatch = (function jasminegui$mount$http_get_dispatch(request){
var c__41812__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__41812__auto__){
return (function (){
var f__41813__auto__ = (function (){var switch__41638__auto__ = ((function (c__41812__auto__){
return (function (state_42273){
var state_val_42274 = (state_42273[(1)]);
if((state_val_42274 === (1))){
var inst_42245 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_42246 = cljs_http.client.get(inst_42245);
var state_42273__$1 = state_42273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42273__$1,(2),inst_42246);
} else {
if((state_val_42274 === (2))){
var inst_42248 = (state_42273[(2)]);
var inst_42249 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_42250 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_42273__$1 = (function (){var statearr_42275 = state_42273;
(statearr_42275[(7)] = inst_42249);

(statearr_42275[(8)] = inst_42248);

return statearr_42275;
})();
if(cljs.core.truth_(inst_42250)){
var statearr_42276_42372 = state_42273__$1;
(statearr_42276_42372[(1)] = (3));

} else {
var statearr_42277_42373 = state_42273__$1;
(statearr_42277_42373[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42274 === (3))){
var inst_42248 = (state_42273[(8)]);
var inst_42252 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_42248);
var inst_42253 = JSON.parse(inst_42252);
var inst_42254 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_42253,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_42273__$1 = state_42273;
var statearr_42278_42374 = state_42273__$1;
(statearr_42278_42374[(2)] = inst_42254);

(statearr_42278_42374[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42274 === (4))){
var inst_42248 = (state_42273[(8)]);
var inst_42256 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_42248);
var state_42273__$1 = state_42273;
var statearr_42279_42375 = state_42273__$1;
(statearr_42279_42375[(2)] = inst_42256);

(statearr_42279_42375[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42274 === (5))){
var inst_42249 = (state_42273[(7)]);
var inst_42258 = (state_42273[(2)]);
var inst_42259 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_42249,inst_42258);
var inst_42260 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_42259) : re_frame.core.dispatch.call(null,inst_42259));
var inst_42261 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_42273__$1 = (function (){var statearr_42280 = state_42273;
(statearr_42280[(9)] = inst_42260);

return statearr_42280;
})();
if(cljs.core.truth_(inst_42261)){
var statearr_42281_42376 = state_42273__$1;
(statearr_42281_42376[(1)] = (6));

} else {
var statearr_42282_42377 = state_42273__$1;
(statearr_42282_42377[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42274 === (6))){
var inst_42263 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42264 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_42265 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_42266 = [inst_42264,inst_42265];
var inst_42267 = (new cljs.core.PersistentVector(null,2,(5),inst_42263,inst_42266,null));
var inst_42268 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_42267) : re_frame.core.dispatch.call(null,inst_42267));
var state_42273__$1 = state_42273;
var statearr_42283_42378 = state_42273__$1;
(statearr_42283_42378[(2)] = inst_42268);

(statearr_42283_42378[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42274 === (7))){
var state_42273__$1 = state_42273;
var statearr_42284_42379 = state_42273__$1;
(statearr_42284_42379[(2)] = null);

(statearr_42284_42379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42274 === (8))){
var inst_42271 = (state_42273[(2)]);
var state_42273__$1 = state_42273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42273__$1,inst_42271);
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
});})(c__41812__auto__))
;
return ((function (switch__41638__auto__,c__41812__auto__){
return (function() {
var jasminegui$mount$http_get_dispatch_$_state_machine__41639__auto__ = null;
var jasminegui$mount$http_get_dispatch_$_state_machine__41639__auto____0 = (function (){
var statearr_42285 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42285[(0)] = jasminegui$mount$http_get_dispatch_$_state_machine__41639__auto__);

(statearr_42285[(1)] = (1));

return statearr_42285;
});
var jasminegui$mount$http_get_dispatch_$_state_machine__41639__auto____1 = (function (state_42273){
while(true){
var ret_value__41640__auto__ = (function (){try{while(true){
var result__41641__auto__ = switch__41638__auto__(state_42273);
if(cljs.core.keyword_identical_QMARK_(result__41641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41641__auto__;
}
break;
}
}catch (e42286){if((e42286 instanceof Object)){
var ex__41642__auto__ = e42286;
var statearr_42287_42380 = state_42273;
(statearr_42287_42380[(5)] = ex__41642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42286;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42381 = state_42273;
state_42273 = G__42381;
continue;
} else {
return ret_value__41640__auto__;
}
break;
}
});
jasminegui$mount$http_get_dispatch_$_state_machine__41639__auto__ = function(state_42273){
switch(arguments.length){
case 0:
return jasminegui$mount$http_get_dispatch_$_state_machine__41639__auto____0.call(this);
case 1:
return jasminegui$mount$http_get_dispatch_$_state_machine__41639__auto____1.call(this,state_42273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_get_dispatch_$_state_machine__41639__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_get_dispatch_$_state_machine__41639__auto____0;
jasminegui$mount$http_get_dispatch_$_state_machine__41639__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_get_dispatch_$_state_machine__41639__auto____1;
return jasminegui$mount$http_get_dispatch_$_state_machine__41639__auto__;
})()
;})(switch__41638__auto__,c__41812__auto__))
})();
var state__41814__auto__ = (function (){var statearr_42288 = (f__41813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41813__auto__.cljs$core$IFn$_invoke$arity$0() : f__41813__auto__.call(null));
(statearr_42288[(6)] = c__41812__auto__);

return statearr_42288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41814__auto__);
});})(c__41812__auto__))
);

return c__41812__auto__;
});
var G__42289_42382 = new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518);
var G__42290_42383 = jasminegui.mount.http_get_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__42289_42382,G__42290_42383) : re_frame.core.reg_fx.call(null,G__42289_42382,G__42290_42383));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions","get-positions",1610972586),(function (p__42291,p__42292){
var map__42293 = p__42291;
var map__42293__$1 = (((((!((map__42293 == null))))?(((((map__42293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42293):map__42293);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42293__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42294 = p__42292;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42294,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-rating-to-score","get-rating-to-score",391912155),(function (p__42298,p__42299){
var map__42300 = p__42298;
var map__42300__$1 = (((((!((map__42300 == null))))?(((((map__42300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42300):map__42300);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42300__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42301 = p__42299;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42301,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"rating-to-score"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472),(function (p__42305,p__42306){
var map__42307 = p__42305;
var map__42307__$1 = (((((!((map__42307 == null))))?(((((map__42307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42307):map__42307);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42307__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42308 = p__42306;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42308,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"portfolios"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-pivoted-positions","get-pivoted-positions",2145025131),(function (p__42312,p__42313){
var map__42314 = p__42312;
var map__42314__$1 = (((((!((map__42314 == null))))?(((((map__42314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42314):map__42314);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42314__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42315 = p__42313;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42315,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"pivoted-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-total-positions","get-total-positions",-698807167),(function (p__42319,p__42320){
var map__42321 = p__42319;
var map__42321__$1 = (((((!((map__42321 == null))))?(((((map__42321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42321):map__42321);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42321__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42322 = p__42320;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42322,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"total-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));

//# sourceMappingURL=jasminegui.mount.js.map
