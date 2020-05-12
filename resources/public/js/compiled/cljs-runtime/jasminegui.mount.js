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
jasminegui.mount.default_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081)],[new cljs.core.Keyword(null,"summary","summary",380847952),null,"Table",new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),true,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),"undefined",cljs.core.set(null),new cljs.core.Keyword(null,"quarter","quarter",-508147616),"Tree",new cljs.core.Keyword(null,"nav","nav",719540477),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),"None","One","Tree",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"home","home",-74557309),"OGEMCORD",new cljs.core.Keyword(null,"cembi","cembi",1924920241),cljs.core.PersistentVector.EMPTY,true,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null)]);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jasminegui.mount","initialize-db","jasminegui.mount/initialize-db",-1621527627),(function (_,___$1){
return jasminegui.mount.default_db;
}));
var seq__56856_56996 = cljs.core.seq(cljs.core.keys(jasminegui.mount.default_db));
var chunk__56857_56997 = null;
var count__56858_56998 = (0);
var i__56859_56999 = (0);
while(true){
if((i__56859_56999 < count__56858_56998)){
var k_57000 = chunk__56857_56997.cljs$core$IIndexed$_nth$arity$2(null,i__56859_56999);
var G__56864_57001 = k_57000;
var G__56865_57002 = ((function (seq__56856_56996,chunk__56857_56997,count__56858_56998,i__56859_56999,G__56864_57001,k_57000){
return (function (db){
return (k_57000.cljs$core$IFn$_invoke$arity$1 ? k_57000.cljs$core$IFn$_invoke$arity$1(db) : k_57000.call(null,db));
});})(seq__56856_56996,chunk__56857_56997,count__56858_56998,i__56859_56999,G__56864_57001,k_57000))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__56864_57001,G__56865_57002) : re_frame.core.reg_sub.call(null,G__56864_57001,G__56865_57002));


var G__57003 = seq__56856_56996;
var G__57004 = chunk__56857_56997;
var G__57005 = count__56858_56998;
var G__57006 = (i__56859_56999 + (1));
seq__56856_56996 = G__57003;
chunk__56857_56997 = G__57004;
count__56858_56998 = G__57005;
i__56859_56999 = G__57006;
continue;
} else {
var temp__5735__auto___57007 = cljs.core.seq(seq__56856_56996);
if(temp__5735__auto___57007){
var seq__56856_57008__$1 = temp__5735__auto___57007;
if(cljs.core.chunked_seq_QMARK_(seq__56856_57008__$1)){
var c__4556__auto___57009 = cljs.core.chunk_first(seq__56856_57008__$1);
var G__57010 = cljs.core.chunk_rest(seq__56856_57008__$1);
var G__57011 = c__4556__auto___57009;
var G__57012 = cljs.core.count(c__4556__auto___57009);
var G__57013 = (0);
seq__56856_56996 = G__57010;
chunk__56857_56997 = G__57011;
count__56858_56998 = G__57012;
i__56859_56999 = G__57013;
continue;
} else {
var k_57014 = cljs.core.first(seq__56856_57008__$1);
var G__56866_57015 = k_57014;
var G__56867_57016 = ((function (seq__56856_56996,chunk__56857_56997,count__56858_56998,i__56859_56999,G__56866_57015,k_57014,seq__56856_57008__$1,temp__5735__auto___57007){
return (function (db){
return (k_57014.cljs$core$IFn$_invoke$arity$1 ? k_57014.cljs$core$IFn$_invoke$arity$1(db) : k_57014.call(null,db));
});})(seq__56856_56996,chunk__56857_56997,count__56858_56998,i__56859_56999,G__56866_57015,k_57014,seq__56856_57008__$1,temp__5735__auto___57007))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__56866_57015,G__56867_57016) : re_frame.core.reg_sub.call(null,G__56866_57015,G__56867_57016));


var G__57017 = cljs.core.next(seq__56856_57008__$1);
var G__57018 = null;
var G__57019 = (0);
var G__57020 = (0);
seq__56856_56996 = G__57017;
chunk__56857_56997 = G__57018;
count__56858_56998 = G__57019;
i__56859_56999 = G__57020;
continue;
}
} else {
}
}
break;
}
var seq__56868_57021 = cljs.core.seq(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053)], null));
var chunk__56869_57022 = null;
var count__56870_57023 = (0);
var i__56871_57024 = (0);
while(true){
if((i__56871_57024 < count__56870_57023)){
var k_57025 = chunk__56869_57022.cljs$core$IIndexed$_nth$arity$2(null,i__56871_57024);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_57025,((function (seq__56868_57021,chunk__56869_57022,count__56870_57023,i__56871_57024,k_57025){
return (function (db,p__56880){
var vec__56881 = p__56880;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56881,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56881,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_57025,data);
});})(seq__56868_57021,chunk__56869_57022,count__56870_57023,i__56871_57024,k_57025))
);


var G__57026 = seq__56868_57021;
var G__57027 = chunk__56869_57022;
var G__57028 = count__56870_57023;
var G__57029 = (i__56871_57024 + (1));
seq__56868_57021 = G__57026;
chunk__56869_57022 = G__57027;
count__56870_57023 = G__57028;
i__56871_57024 = G__57029;
continue;
} else {
var temp__5735__auto___57030 = cljs.core.seq(seq__56868_57021);
if(temp__5735__auto___57030){
var seq__56868_57031__$1 = temp__5735__auto___57030;
if(cljs.core.chunked_seq_QMARK_(seq__56868_57031__$1)){
var c__4556__auto___57032 = cljs.core.chunk_first(seq__56868_57031__$1);
var G__57033 = cljs.core.chunk_rest(seq__56868_57031__$1);
var G__57034 = c__4556__auto___57032;
var G__57035 = cljs.core.count(c__4556__auto___57032);
var G__57036 = (0);
seq__56868_57021 = G__57033;
chunk__56869_57022 = G__57034;
count__56870_57023 = G__57035;
i__56871_57024 = G__57036;
continue;
} else {
var k_57037 = cljs.core.first(seq__56868_57031__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_57037,((function (seq__56868_57021,chunk__56869_57022,count__56870_57023,i__56871_57024,k_57037,seq__56868_57031__$1,temp__5735__auto___57030){
return (function (db,p__56884){
var vec__56885 = p__56884;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56885,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56885,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_57037,data);
});})(seq__56868_57021,chunk__56869_57022,count__56870_57023,i__56871_57024,k_57037,seq__56868_57031__$1,temp__5735__auto___57030))
);


var G__57038 = cljs.core.next(seq__56868_57031__$1);
var G__57039 = null;
var G__57040 = (0);
var G__57041 = (0);
seq__56868_57021 = G__57038;
chunk__56869_57022 = G__57039;
count__56870_57023 = G__57040;
i__56871_57024 = G__57041;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),(function (db,p__56888){
var vec__56889 = p__56888;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56889,(0),null);
var portfolios = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56889,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),portfolios,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),cljs.core.set(portfolios)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),(function (db,p__56892){
var vec__56893 = p__56892;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56893,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56893,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56893,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),(function (db,p__56896){
var vec__56897 = p__56896;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56897,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56897,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56897,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),(function (db,p__56900){
var vec__56901 = p__56900;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56901,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56901,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56901,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),(function (db,p__56904){
var vec__56905 = p__56904;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56905,(0),null);
var qt_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56905,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),clojure.string.replace(qt_date,"\"",""));
}));
jasminegui.mount.http_get_dispatch = (function jasminegui$mount$http_get_dispatch(request){
var c__49513__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49514__auto__ = (function (){var switch__49443__auto__ = (function (state_56936){
var state_val_56937 = (state_56936[(1)]);
if((state_val_56937 === (1))){
var inst_56908 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_56909 = cljs_http.client.get(inst_56908);
var state_56936__$1 = state_56936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56936__$1,(2),inst_56909);
} else {
if((state_val_56937 === (2))){
var inst_56911 = (state_56936[(2)]);
var inst_56912 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_56913 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_56936__$1 = (function (){var statearr_56938 = state_56936;
(statearr_56938[(7)] = inst_56911);

(statearr_56938[(8)] = inst_56912);

return statearr_56938;
})();
if(cljs.core.truth_(inst_56913)){
var statearr_56939_57042 = state_56936__$1;
(statearr_56939_57042[(1)] = (3));

} else {
var statearr_56940_57043 = state_56936__$1;
(statearr_56940_57043[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56937 === (3))){
var inst_56911 = (state_56936[(7)]);
var inst_56915 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_56911);
var inst_56916 = JSON.parse(inst_56915);
var inst_56917 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_56916,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_56936__$1 = state_56936;
var statearr_56941_57044 = state_56936__$1;
(statearr_56941_57044[(2)] = inst_56917);

(statearr_56941_57044[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56937 === (4))){
var inst_56911 = (state_56936[(7)]);
var inst_56919 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_56911);
var state_56936__$1 = state_56936;
var statearr_56942_57045 = state_56936__$1;
(statearr_56942_57045[(2)] = inst_56919);

(statearr_56942_57045[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56937 === (5))){
var inst_56912 = (state_56936[(8)]);
var inst_56921 = (state_56936[(2)]);
var inst_56922 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_56912,inst_56921);
var inst_56923 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_56922) : re_frame.core.dispatch.call(null,inst_56922));
var inst_56924 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_56936__$1 = (function (){var statearr_56943 = state_56936;
(statearr_56943[(9)] = inst_56923);

return statearr_56943;
})();
if(cljs.core.truth_(inst_56924)){
var statearr_56944_57046 = state_56936__$1;
(statearr_56944_57046[(1)] = (6));

} else {
var statearr_56945_57047 = state_56936__$1;
(statearr_56945_57047[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56937 === (6))){
var inst_56926 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56927 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_56928 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_56929 = [inst_56927,inst_56928];
var inst_56930 = (new cljs.core.PersistentVector(null,2,(5),inst_56926,inst_56929,null));
var inst_56931 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_56930) : re_frame.core.dispatch.call(null,inst_56930));
var state_56936__$1 = state_56936;
var statearr_56946_57048 = state_56936__$1;
(statearr_56946_57048[(2)] = inst_56931);

(statearr_56946_57048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56937 === (7))){
var state_56936__$1 = state_56936;
var statearr_56947_57049 = state_56936__$1;
(statearr_56947_57049[(2)] = null);

(statearr_56947_57049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56937 === (8))){
var inst_56934 = (state_56936[(2)]);
var state_56936__$1 = state_56936;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56936__$1,inst_56934);
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
var jasminegui$mount$http_get_dispatch_$_state_machine__49444__auto__ = null;
var jasminegui$mount$http_get_dispatch_$_state_machine__49444__auto____0 = (function (){
var statearr_56948 = [null,null,null,null,null,null,null,null,null,null];
(statearr_56948[(0)] = jasminegui$mount$http_get_dispatch_$_state_machine__49444__auto__);

(statearr_56948[(1)] = (1));

return statearr_56948;
});
var jasminegui$mount$http_get_dispatch_$_state_machine__49444__auto____1 = (function (state_56936){
while(true){
var ret_value__49445__auto__ = (function (){try{while(true){
var result__49446__auto__ = switch__49443__auto__(state_56936);
if(cljs.core.keyword_identical_QMARK_(result__49446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49446__auto__;
}
break;
}
}catch (e56949){if((e56949 instanceof Object)){
var ex__49447__auto__ = e56949;
var statearr_56950_57050 = state_56936;
(statearr_56950_57050[(5)] = ex__49447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56949;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57051 = state_56936;
state_56936 = G__57051;
continue;
} else {
return ret_value__49445__auto__;
}
break;
}
});
jasminegui$mount$http_get_dispatch_$_state_machine__49444__auto__ = function(state_56936){
switch(arguments.length){
case 0:
return jasminegui$mount$http_get_dispatch_$_state_machine__49444__auto____0.call(this);
case 1:
return jasminegui$mount$http_get_dispatch_$_state_machine__49444__auto____1.call(this,state_56936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_get_dispatch_$_state_machine__49444__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_get_dispatch_$_state_machine__49444__auto____0;
jasminegui$mount$http_get_dispatch_$_state_machine__49444__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_get_dispatch_$_state_machine__49444__auto____1;
return jasminegui$mount$http_get_dispatch_$_state_machine__49444__auto__;
})()
})();
var state__49515__auto__ = (function (){var statearr_56951 = (f__49514__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49514__auto__.cljs$core$IFn$_invoke$arity$0() : f__49514__auto__.call(null));
(statearr_56951[(6)] = c__49513__auto__);

return statearr_56951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49515__auto__);
}));

return c__49513__auto__;
});
var G__56952_57052 = new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518);
var G__56953_57053 = jasminegui.mount.http_get_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__56952_57052,G__56953_57053) : re_frame.core.reg_fx.call(null,G__56952_57052,G__56953_57053));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions","get-positions",1610972586),(function (p__56954,p__56955){
var map__56956 = p__56954;
var map__56956__$1 = (((((!((map__56956 == null))))?(((((map__56956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56956):map__56956);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56956__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56957 = p__56955;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56957,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-rating-to-score","get-rating-to-score",391912155),(function (p__56961,p__56962){
var map__56963 = p__56961;
var map__56963__$1 = (((((!((map__56963 == null))))?(((((map__56963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56963):map__56963);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56963__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56964 = p__56962;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56964,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"rating-to-score"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472),(function (p__56968,p__56969){
var map__56970 = p__56968;
var map__56970__$1 = (((((!((map__56970 == null))))?(((((map__56970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56970):map__56970);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56970__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56971 = p__56969;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56971,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"portfolios"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-pivoted-positions","get-pivoted-positions",2145025131),(function (p__56975,p__56976){
var map__56977 = p__56975;
var map__56977__$1 = (((((!((map__56977 == null))))?(((((map__56977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56977):map__56977);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56977__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56978 = p__56976;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56978,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"pivoted-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-total-positions","get-total-positions",-698807167),(function (p__56982,p__56983){
var map__56984 = p__56982;
var map__56984__$1 = (((((!((map__56984 == null))))?(((((map__56984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56984):map__56984);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56984__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56985 = p__56983;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56985,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"total-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-qt-date","get-qt-date",-1072332881),(function (p__56989,p__56990){
var map__56991 = p__56989;
var map__56991__$1 = (((((!((map__56991 == null))))?(((((map__56991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56991):map__56991);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56991__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56992 = p__56990;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56992,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"qt-date"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),false], null)], null);
}));

//# sourceMappingURL=jasminegui.mount.js.map
