goog.provide('jasminegui.mount');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('jasminegui.static$');
goog.require('re_frame.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
jasminegui.mount.default_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081)],[new cljs.core.Keyword(null,"summary","summary",380847952),null,"Table",new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),true,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),cljs.core.set(null),new cljs.core.Keyword(null,"quarter","quarter",-508147616),"Tree",new cljs.core.Keyword(null,"nav","nav",719540477),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),"None","One","Tree",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"home","home",-74557309),"OGEMCORD",new cljs.core.Keyword(null,"cembi","cembi",1924920241),cljs.core.PersistentVector.EMPTY,true,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null)]);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jasminegui.mount","initialize-db","jasminegui.mount/initialize-db",-1621527627),(function (_,___$1){
return jasminegui.mount.default_db;
}));
var seq__43912_44055 = cljs.core.seq(cljs.core.keys(jasminegui.mount.default_db));
var chunk__43913_44056 = null;
var count__43914_44057 = (0);
var i__43915_44058 = (0);
while(true){
if((i__43915_44058 < count__43914_44057)){
var k_44059 = chunk__43913_44056.cljs$core$IIndexed$_nth$arity$2(null,i__43915_44058);
var G__43920_44060 = k_44059;
var G__43921_44061 = ((function (seq__43912_44055,chunk__43913_44056,count__43914_44057,i__43915_44058,G__43920_44060,k_44059){
return (function (db){
return (k_44059.cljs$core$IFn$_invoke$arity$1 ? k_44059.cljs$core$IFn$_invoke$arity$1(db) : k_44059.call(null,db));
});})(seq__43912_44055,chunk__43913_44056,count__43914_44057,i__43915_44058,G__43920_44060,k_44059))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__43920_44060,G__43921_44061) : re_frame.core.reg_sub.call(null,G__43920_44060,G__43921_44061));


var G__44062 = seq__43912_44055;
var G__44063 = chunk__43913_44056;
var G__44064 = count__43914_44057;
var G__44065 = (i__43915_44058 + (1));
seq__43912_44055 = G__44062;
chunk__43913_44056 = G__44063;
count__43914_44057 = G__44064;
i__43915_44058 = G__44065;
continue;
} else {
var temp__5735__auto___44066 = cljs.core.seq(seq__43912_44055);
if(temp__5735__auto___44066){
var seq__43912_44067__$1 = temp__5735__auto___44066;
if(cljs.core.chunked_seq_QMARK_(seq__43912_44067__$1)){
var c__4550__auto___44068 = cljs.core.chunk_first(seq__43912_44067__$1);
var G__44069 = cljs.core.chunk_rest(seq__43912_44067__$1);
var G__44070 = c__4550__auto___44068;
var G__44071 = cljs.core.count(c__4550__auto___44068);
var G__44072 = (0);
seq__43912_44055 = G__44069;
chunk__43913_44056 = G__44070;
count__43914_44057 = G__44071;
i__43915_44058 = G__44072;
continue;
} else {
var k_44073 = cljs.core.first(seq__43912_44067__$1);
var G__43922_44074 = k_44073;
var G__43923_44075 = ((function (seq__43912_44055,chunk__43913_44056,count__43914_44057,i__43915_44058,G__43922_44074,k_44073,seq__43912_44067__$1,temp__5735__auto___44066){
return (function (db){
return (k_44073.cljs$core$IFn$_invoke$arity$1 ? k_44073.cljs$core$IFn$_invoke$arity$1(db) : k_44073.call(null,db));
});})(seq__43912_44055,chunk__43913_44056,count__43914_44057,i__43915_44058,G__43922_44074,k_44073,seq__43912_44067__$1,temp__5735__auto___44066))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__43922_44074,G__43923_44075) : re_frame.core.reg_sub.call(null,G__43922_44074,G__43923_44075));


var G__44076 = cljs.core.next(seq__43912_44067__$1);
var G__44077 = null;
var G__44078 = (0);
var G__44079 = (0);
seq__43912_44055 = G__44076;
chunk__43913_44056 = G__44077;
count__43914_44057 = G__44078;
i__43915_44058 = G__44079;
continue;
}
} else {
}
}
break;
}
var seq__43924_44080 = cljs.core.seq(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053)], null));
var chunk__43925_44081 = null;
var count__43926_44082 = (0);
var i__43927_44083 = (0);
while(true){
if((i__43927_44083 < count__43926_44082)){
var k_44084 = chunk__43925_44081.cljs$core$IIndexed$_nth$arity$2(null,i__43927_44083);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_44084,((function (seq__43924_44080,chunk__43925_44081,count__43926_44082,i__43927_44083,k_44084){
return (function (db,p__43940){
var vec__43941 = p__43940;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43941,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43941,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_44084,data);
});})(seq__43924_44080,chunk__43925_44081,count__43926_44082,i__43927_44083,k_44084))
);


var G__44085 = seq__43924_44080;
var G__44086 = chunk__43925_44081;
var G__44087 = count__43926_44082;
var G__44088 = (i__43927_44083 + (1));
seq__43924_44080 = G__44085;
chunk__43925_44081 = G__44086;
count__43926_44082 = G__44087;
i__43927_44083 = G__44088;
continue;
} else {
var temp__5735__auto___44089 = cljs.core.seq(seq__43924_44080);
if(temp__5735__auto___44089){
var seq__43924_44090__$1 = temp__5735__auto___44089;
if(cljs.core.chunked_seq_QMARK_(seq__43924_44090__$1)){
var c__4550__auto___44091 = cljs.core.chunk_first(seq__43924_44090__$1);
var G__44092 = cljs.core.chunk_rest(seq__43924_44090__$1);
var G__44093 = c__4550__auto___44091;
var G__44094 = cljs.core.count(c__4550__auto___44091);
var G__44095 = (0);
seq__43924_44080 = G__44092;
chunk__43925_44081 = G__44093;
count__43926_44082 = G__44094;
i__43927_44083 = G__44095;
continue;
} else {
var k_44096 = cljs.core.first(seq__43924_44090__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_44096,((function (seq__43924_44080,chunk__43925_44081,count__43926_44082,i__43927_44083,k_44096,seq__43924_44090__$1,temp__5735__auto___44089){
return (function (db,p__43948){
var vec__43949 = p__43948;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43949,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43949,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_44096,data);
});})(seq__43924_44080,chunk__43925_44081,count__43926_44082,i__43927_44083,k_44096,seq__43924_44090__$1,temp__5735__auto___44089))
);


var G__44097 = cljs.core.next(seq__43924_44090__$1);
var G__44098 = null;
var G__44099 = (0);
var G__44100 = (0);
seq__43924_44080 = G__44097;
chunk__43925_44081 = G__44098;
count__43926_44082 = G__44099;
i__43927_44083 = G__44100;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),(function (db,p__43952){
var vec__43953 = p__43952;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43953,(0),null);
var portfolios = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43953,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),portfolios,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),cljs.core.set(portfolios)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),(function (db,p__43960){
var vec__43962 = p__43960;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43962,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43962,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43962,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),(function (db,p__43965){
var vec__43966 = p__43965;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43966,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43966,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43966,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),(function (db,p__43969){
var vec__43970 = p__43969;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43970,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43970,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43970,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),id], null),f);
}));
jasminegui.mount.http_get_dispatch = (function jasminegui$mount$http_get_dispatch(request){
var c__41812__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__41812__auto__){
return (function (){
var f__41813__auto__ = (function (){var switch__41653__auto__ = ((function (c__41812__auto__){
return (function (state_44001){
var state_val_44002 = (state_44001[(1)]);
if((state_val_44002 === (1))){
var inst_43973 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_43974 = cljs_http.client.get(inst_43973);
var state_44001__$1 = state_44001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44001__$1,(2),inst_43974);
} else {
if((state_val_44002 === (2))){
var inst_43976 = (state_44001[(2)]);
var inst_43977 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_43978 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_44001__$1 = (function (){var statearr_44004 = state_44001;
(statearr_44004[(7)] = inst_43977);

(statearr_44004[(8)] = inst_43976);

return statearr_44004;
})();
if(cljs.core.truth_(inst_43978)){
var statearr_44005_44101 = state_44001__$1;
(statearr_44005_44101[(1)] = (3));

} else {
var statearr_44006_44102 = state_44001__$1;
(statearr_44006_44102[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44002 === (3))){
var inst_43976 = (state_44001[(8)]);
var inst_43980 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_43976);
var inst_43981 = JSON.parse(inst_43980);
var inst_43982 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_43981,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_44001__$1 = state_44001;
var statearr_44007_44103 = state_44001__$1;
(statearr_44007_44103[(2)] = inst_43982);

(statearr_44007_44103[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44002 === (4))){
var inst_43976 = (state_44001[(8)]);
var inst_43984 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_43976);
var state_44001__$1 = state_44001;
var statearr_44008_44104 = state_44001__$1;
(statearr_44008_44104[(2)] = inst_43984);

(statearr_44008_44104[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44002 === (5))){
var inst_43977 = (state_44001[(7)]);
var inst_43986 = (state_44001[(2)]);
var inst_43987 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_43977,inst_43986);
var inst_43988 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_43987) : re_frame.core.dispatch.call(null,inst_43987));
var inst_43989 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_44001__$1 = (function (){var statearr_44009 = state_44001;
(statearr_44009[(9)] = inst_43988);

return statearr_44009;
})();
if(cljs.core.truth_(inst_43989)){
var statearr_44010_44105 = state_44001__$1;
(statearr_44010_44105[(1)] = (6));

} else {
var statearr_44011_44106 = state_44001__$1;
(statearr_44011_44106[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44002 === (6))){
var inst_43991 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43992 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_43993 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_43994 = [inst_43992,inst_43993];
var inst_43995 = (new cljs.core.PersistentVector(null,2,(5),inst_43991,inst_43994,null));
var inst_43996 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_43995) : re_frame.core.dispatch.call(null,inst_43995));
var state_44001__$1 = state_44001;
var statearr_44012_44107 = state_44001__$1;
(statearr_44012_44107[(2)] = inst_43996);

(statearr_44012_44107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44002 === (7))){
var state_44001__$1 = state_44001;
var statearr_44013_44108 = state_44001__$1;
(statearr_44013_44108[(2)] = null);

(statearr_44013_44108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44002 === (8))){
var inst_43999 = (state_44001[(2)]);
var state_44001__$1 = state_44001;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44001__$1,inst_43999);
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
return ((function (switch__41653__auto__,c__41812__auto__){
return (function() {
var jasminegui$mount$http_get_dispatch_$_state_machine__41654__auto__ = null;
var jasminegui$mount$http_get_dispatch_$_state_machine__41654__auto____0 = (function (){
var statearr_44014 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44014[(0)] = jasminegui$mount$http_get_dispatch_$_state_machine__41654__auto__);

(statearr_44014[(1)] = (1));

return statearr_44014;
});
var jasminegui$mount$http_get_dispatch_$_state_machine__41654__auto____1 = (function (state_44001){
while(true){
var ret_value__41655__auto__ = (function (){try{while(true){
var result__41656__auto__ = switch__41653__auto__(state_44001);
if(cljs.core.keyword_identical_QMARK_(result__41656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41656__auto__;
}
break;
}
}catch (e44015){if((e44015 instanceof Object)){
var ex__41657__auto__ = e44015;
var statearr_44016_44109 = state_44001;
(statearr_44016_44109[(5)] = ex__41657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44015;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44110 = state_44001;
state_44001 = G__44110;
continue;
} else {
return ret_value__41655__auto__;
}
break;
}
});
jasminegui$mount$http_get_dispatch_$_state_machine__41654__auto__ = function(state_44001){
switch(arguments.length){
case 0:
return jasminegui$mount$http_get_dispatch_$_state_machine__41654__auto____0.call(this);
case 1:
return jasminegui$mount$http_get_dispatch_$_state_machine__41654__auto____1.call(this,state_44001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_get_dispatch_$_state_machine__41654__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_get_dispatch_$_state_machine__41654__auto____0;
jasminegui$mount$http_get_dispatch_$_state_machine__41654__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_get_dispatch_$_state_machine__41654__auto____1;
return jasminegui$mount$http_get_dispatch_$_state_machine__41654__auto__;
})()
;})(switch__41653__auto__,c__41812__auto__))
})();
var state__41814__auto__ = (function (){var statearr_44017 = (f__41813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41813__auto__.cljs$core$IFn$_invoke$arity$0() : f__41813__auto__.call(null));
(statearr_44017[(6)] = c__41812__auto__);

return statearr_44017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41814__auto__);
});})(c__41812__auto__))
);

return c__41812__auto__;
});
var G__44018_44111 = new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518);
var G__44019_44112 = jasminegui.mount.http_get_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__44018_44111,G__44019_44112) : re_frame.core.reg_fx.call(null,G__44018_44111,G__44019_44112));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions","get-positions",1610972586),(function (p__44020,p__44021){
var map__44022 = p__44020;
var map__44022__$1 = (((((!((map__44022 == null))))?(((((map__44022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44022):map__44022);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44022__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44023 = p__44021;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44023,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),"http://localhost:3501/positions",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-rating-to-score","get-rating-to-score",391912155),(function (p__44027,p__44028){
var map__44029 = p__44027;
var map__44029__$1 = (((((!((map__44029 == null))))?(((((map__44029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44029):map__44029);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44029__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44030 = p__44028;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44030,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),"http://localhost:3501/rating-to-score",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472),(function (p__44034,p__44035){
var map__44036 = p__44034;
var map__44036__$1 = (((((!((map__44036 == null))))?(((((map__44036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44036):map__44036);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44036__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44037 = p__44035;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44037,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),"http://localhost:3501/portfolios",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-pivoted-positions","get-pivoted-positions",2145025131),(function (p__44041,p__44042){
var map__44043 = p__44041;
var map__44043__$1 = (((((!((map__44043 == null))))?(((((map__44043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44043):map__44043);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44043__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44044 = p__44042;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44044,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),"http://localhost:3501/pivoted-positions",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-total-positions","get-total-positions",-698807167),(function (p__44048,p__44049){
var map__44050 = p__44048;
var map__44050__$1 = (((((!((map__44050 == null))))?(((((map__44050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44050):map__44050);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44050__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44051 = p__44049;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44051,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),"http://localhost:3501/total-positions",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));

//# sourceMappingURL=jasminegui.mount.js.map
