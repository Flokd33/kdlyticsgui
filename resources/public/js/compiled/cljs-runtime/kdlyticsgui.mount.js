goog.provide('kdlyticsgui.mount');
kdlyticsgui.mount.default_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"positions-characteristics","positions-characteristics",-170272672),new cljs.core.Keyword(null,"positions-strategy-exposure","positions-strategy-exposure",1394640320),new cljs.core.Keyword(null,"test-data","test-data",805102338),new cljs.core.Keyword("navigation","success-modal","navigation/success-modal",533446693),new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),new cljs.core.Keyword("navigation","active-section","navigation/active-section",-1272053018),new cljs.core.Keyword("price-history","show-modal","price-history/show-modal",1439463911),new cljs.core.Keyword("navigation","success-compile","navigation/success-compile",33558826),new cljs.core.Keyword(null,"rot13","rot13",-631596017),new cljs.core.Keyword("price-history","data","price-history/data",1268424495),new cljs.core.Keyword("navigation","active-view-cellar","navigation/active-view-cellar",-1146180625),new cljs.core.Keyword("navigation","active-view-vault","navigation/active-view-vault",-1235342702),new cljs.core.Keyword(null,"cellar-summary","cellar-summary",271980210),new cljs.core.Keyword("navigation","active-view-wealth","navigation/active-view-wealth",-1986836686),new cljs.core.Keyword("navigation","active-view-tools","navigation/active-view-tools",-2036856651),new cljs.core.Keyword("navigation","active-view-positions","navigation/active-view-positions",1459188376),new cljs.core.Keyword(null,"wealth-summary","wealth-summary",-699570376),new cljs.core.Keyword("price-history","name","price-history/name",-1535942599),new cljs.core.Keyword("price-history","ticker","price-history/ticker",1464015546),new cljs.core.Keyword(null,"vault-summary","vault-summary",-407259781),new cljs.core.Keyword(null,"positions-top10","positions-top10",-1668533732),new cljs.core.Keyword("price-history","show-throbber","price-history/show-throbber",-2145949059),new cljs.core.Keyword(null,"dummy","dummy",2059765854),new cljs.core.Keyword(null,"positions-summary","positions-summary",-17081762)],[cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show","show",-576705889),false,new cljs.core.Keyword(null,"on-close","on-close",-761178394),null,new cljs.core.Keyword(null,"response","response",-1068424192),null], null),false,new cljs.core.Keyword(null,"entry","entry",505168823),false,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show","show",-576705889),false,new cljs.core.Keyword(null,"on-close","on-close",-761178394),null,new cljs.core.Keyword(null,"response","response",-1068424192),null], null),false,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.Keyword(null,"inventory","inventory",860201871),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"scrapping","scrapping",-1589708187),new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.PersistentVector.EMPTY,null,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,false,null,cljs.core.PersistentVector.EMPTY]);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kdlyticsgui.mount","initialize-db","kdlyticsgui.mount/initialize-db",-798563823),(function (_,___$1){
return kdlyticsgui.mount.default_db;
}));
var seq__62137_63070 = cljs.core.seq(cljs.core.keys(kdlyticsgui.mount.default_db));
var chunk__62138_63071 = null;
var count__62139_63072 = (0);
var i__62140_63073 = (0);
while(true){
if((i__62140_63073 < count__62139_63072)){
var k_63074 = chunk__62138_63071.cljs$core$IIndexed$_nth$arity$2(null,i__62140_63073);
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(k_63074,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (seq__62137_63070,chunk__62138_63071,count__62139_63072,i__62140_63073,k_63074){
return (function (db){
return (k_63074.cljs$core$IFn$_invoke$arity$1 ? k_63074.cljs$core$IFn$_invoke$arity$1(db) : k_63074.call(null,db));
});})(seq__62137_63070,chunk__62138_63071,count__62139_63072,i__62140_63073,k_63074))
], 0));


var G__63075 = seq__62137_63070;
var G__63076 = chunk__62138_63071;
var G__63077 = count__62139_63072;
var G__63078 = (i__62140_63073 + (1));
seq__62137_63070 = G__63075;
chunk__62138_63071 = G__63076;
count__62139_63072 = G__63077;
i__62140_63073 = G__63078;
continue;
} else {
var temp__5804__auto___63079 = cljs.core.seq(seq__62137_63070);
if(temp__5804__auto___63079){
var seq__62137_63080__$1 = temp__5804__auto___63079;
if(cljs.core.chunked_seq_QMARK_(seq__62137_63080__$1)){
var c__5568__auto___63081 = cljs.core.chunk_first(seq__62137_63080__$1);
var G__63082 = cljs.core.chunk_rest(seq__62137_63080__$1);
var G__63083 = c__5568__auto___63081;
var G__63084 = cljs.core.count(c__5568__auto___63081);
var G__63085 = (0);
seq__62137_63070 = G__63082;
chunk__62138_63071 = G__63083;
count__62139_63072 = G__63084;
i__62140_63073 = G__63085;
continue;
} else {
var k_63086 = cljs.core.first(seq__62137_63080__$1);
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(k_63086,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (seq__62137_63070,chunk__62138_63071,count__62139_63072,i__62140_63073,k_63086,seq__62137_63080__$1,temp__5804__auto___63079){
return (function (db){
return (k_63086.cljs$core$IFn$_invoke$arity$1 ? k_63086.cljs$core$IFn$_invoke$arity$1(db) : k_63086.call(null,db));
});})(seq__62137_63070,chunk__62138_63071,count__62139_63072,i__62140_63073,k_63086,seq__62137_63080__$1,temp__5804__auto___63079))
], 0));


var G__63087 = cljs.core.next(seq__62137_63080__$1);
var G__63088 = null;
var G__63089 = (0);
var G__63090 = (0);
seq__62137_63070 = G__63087;
chunk__62138_63071 = G__63088;
count__62139_63072 = G__63089;
i__62140_63073 = G__63090;
continue;
}
} else {
}
}
break;
}
var seq__62141_63091 = cljs.core.seq(new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rot13","rot13",-631596017),new cljs.core.Keyword(null,"test-data","test-data",805102338),new cljs.core.Keyword("navigation","active-section","navigation/active-section",-1272053018),new cljs.core.Keyword("navigation","active-view-wealth","navigation/active-view-wealth",-1986836686),new cljs.core.Keyword("navigation","active-view-positions","navigation/active-view-positions",1459188376),new cljs.core.Keyword("navigation","active-view-vault","navigation/active-view-vault",-1235342702),new cljs.core.Keyword("navigation","active-view-cellar","navigation/active-view-cellar",-1146180625),new cljs.core.Keyword("navigation","active-view-tools","navigation/active-view-tools",-2036856651),new cljs.core.Keyword(null,"wealth-summary","wealth-summary",-699570376),new cljs.core.Keyword(null,"positions-summary","positions-summary",-17081762),new cljs.core.Keyword(null,"positions-top10","positions-top10",-1668533732),new cljs.core.Keyword(null,"positions-characteristics","positions-characteristics",-170272672),new cljs.core.Keyword(null,"positions-strategy-exposure","positions-strategy-exposure",1394640320),new cljs.core.Keyword(null,"cellar-summary","cellar-summary",271980210),new cljs.core.Keyword(null,"vault-summary","vault-summary",-407259781),new cljs.core.Keyword("price-history","data","price-history/data",1268424495),new cljs.core.Keyword("price-history","ticker","price-history/ticker",1464015546),new cljs.core.Keyword("price-history","name","price-history/name",-1535942599),new cljs.core.Keyword("price-history","show-modal","price-history/show-modal",1439463911),new cljs.core.Keyword("price-history","show-throbber","price-history/show-throbber",-2145949059),new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254)], null));
var chunk__62142_63092 = null;
var count__62143_63093 = (0);
var i__62144_63094 = (0);
while(true){
if((i__62144_63094 < count__62143_63093)){
var k_63095 = chunk__62142_63092.cljs$core$IIndexed$_nth$arity$2(null,i__62144_63094);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_63095,((function (seq__62141_63091,chunk__62142_63092,count__62143_63093,i__62144_63094,k_63095){
return (function (db,p__62157){
var vec__62158 = p__62157;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62158,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62158,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_63095,data);
});})(seq__62141_63091,chunk__62142_63092,count__62143_63093,i__62144_63094,k_63095))
);


var G__63100 = seq__62141_63091;
var G__63101 = chunk__62142_63092;
var G__63102 = count__62143_63093;
var G__63103 = (i__62144_63094 + (1));
seq__62141_63091 = G__63100;
chunk__62142_63092 = G__63101;
count__62143_63093 = G__63102;
i__62144_63094 = G__63103;
continue;
} else {
var temp__5804__auto___63104 = cljs.core.seq(seq__62141_63091);
if(temp__5804__auto___63104){
var seq__62141_63105__$1 = temp__5804__auto___63104;
if(cljs.core.chunked_seq_QMARK_(seq__62141_63105__$1)){
var c__5568__auto___63106 = cljs.core.chunk_first(seq__62141_63105__$1);
var G__63107 = cljs.core.chunk_rest(seq__62141_63105__$1);
var G__63108 = c__5568__auto___63106;
var G__63109 = cljs.core.count(c__5568__auto___63106);
var G__63110 = (0);
seq__62141_63091 = G__63107;
chunk__62142_63092 = G__63108;
count__62143_63093 = G__63109;
i__62144_63094 = G__63110;
continue;
} else {
var k_63111 = cljs.core.first(seq__62141_63105__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_63111,((function (seq__62141_63091,chunk__62142_63092,count__62143_63093,i__62144_63094,k_63111,seq__62141_63105__$1,temp__5804__auto___63104){
return (function (db,p__62161){
var vec__62162 = p__62161;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62162,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62162,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_63111,data);
});})(seq__62141_63091,chunk__62142_63092,count__62143_63093,i__62144_63094,k_63111,seq__62141_63105__$1,temp__5804__auto___63104))
);


var G__63112 = cljs.core.next(seq__62141_63105__$1);
var G__63113 = null;
var G__63114 = (0);
var G__63115 = (0);
seq__62141_63091 = G__63112;
chunk__62142_63092 = G__63113;
count__62143_63093 = G__63114;
i__62144_63094 = G__63115;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("navigation","active","navigation/active",-1285216),(function (db,p__62165){
var vec__62166 = p__62165;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62166,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62166,(1),null);
var sub_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62166,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","active","navigation/active",-1285216),page], null),sub_page);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"instruments","instruments",-69874543),(function (p__62170,p__62171){
var map__62172 = p__62170;
var map__62172__$1 = cljs.core.__destructure_map(map__62172);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62172__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__62173 = p__62171;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62173,(0),null);
var instruments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62173,(1),null);
var positions = (cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db),cljs.core.PersistentVector.EMPTY);
if(and__5043__auto__){
return new cljs.core.Keyword(null,"naked-positions","naked-positions",-1170378384).cljs$core$IFn$_invoke$arity$1(db);
} else {
return and__5043__auto__;
}
})())?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__62169_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__62169_SHARP_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instruments","instruments",-69874543),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__62169_SHARP_)], null))], 0));
}),new cljs.core.Keyword(null,"naked-positions","naked-positions",-1170378384).cljs$core$IFn$_invoke$arity$1(db)):cljs.core.PersistentVector.EMPTY);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"all-instrument-ids","all-instrument-ids",-1013285519),cljs.core.keys(instruments),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"instruments","instruments",-69874543),instruments,new cljs.core.Keyword(null,"positions","positions",-1380538434),positions,new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(positions,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("implementation","live-positions","implementation/live-positions",1202101052),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function kdlyticsgui$mount$iter__62176(s__62177){
return (new cljs.core.LazySeq(null,(function (){
var s__62177__$1 = s__62177;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__62177__$1);
if(temp__5804__auto__){
var s__62177__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62177__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__62177__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__62179 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__62178 = (0);
while(true){
if((i__62178 < size__5522__auto__)){
var vec__62180 = cljs.core._nth(c__5521__auto__,i__62178);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62180,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62180,(1),null);
cljs.core.chunk_append(b__62179,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = ((function (i__62178,vec__62180,p,g,c__5521__auto__,size__5522__auto__,b__62179,s__62177__$2,temp__5804__auto__,positions,map__62172,map__62172__$1,db,vec__62173,_,instruments){
return (function kdlyticsgui$mount$iter__62176_$_iter__62183(s__62184){
return (new cljs.core.LazySeq(null,((function (i__62178,vec__62180,p,g,c__5521__auto__,size__5522__auto__,b__62179,s__62177__$2,temp__5804__auto__,positions,map__62172,map__62172__$1,db,vec__62173,_,instruments){
return (function (){
var s__62184__$1 = s__62184;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__62184__$1);
if(temp__5804__auto____$1){
var s__62184__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__62184__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__62184__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__62186 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__62185 = (0);
while(true){
if((i__62185 < size__5522__auto____$1)){
var line = cljs.core._nth(c__5521__auto____$1,i__62185);
if((((!((new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line) == null)))) && ((new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line) > (0))))){
cljs.core.chunk_append(b__62186,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line)], null));

var G__63116 = (i__62185 + (1));
i__62185 = G__63116;
continue;
} else {
var G__63117 = (i__62185 + (1));
i__62185 = G__63117;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62186),kdlyticsgui$mount$iter__62176_$_iter__62183(cljs.core.chunk_rest(s__62184__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62186),null);
}
} else {
var line = cljs.core.first(s__62184__$2);
if((((!((new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line) == null)))) && ((new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line) > (0))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line)], null),kdlyticsgui$mount$iter__62176_$_iter__62183(cljs.core.rest(s__62184__$2)));
} else {
var G__63118 = cljs.core.rest(s__62184__$2);
s__62184__$1 = G__63118;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__62178,vec__62180,p,g,c__5521__auto__,size__5522__auto__,b__62179,s__62177__$2,temp__5804__auto__,positions,map__62172,map__62172__$1,db,vec__62173,_,instruments))
,null,null));
});})(i__62178,vec__62180,p,g,c__5521__auto__,size__5522__auto__,b__62179,s__62177__$2,temp__5804__auto__,positions,map__62172,map__62172__$1,db,vec__62173,_,instruments))
;
return iter__5523__auto__(g);
})())], null));

var G__63119 = (i__62178 + (1));
i__62178 = G__63119;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62179),kdlyticsgui$mount$iter__62176(cljs.core.chunk_rest(s__62177__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62179),null);
}
} else {
var vec__62187 = cljs.core.first(s__62177__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62187,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62187,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = ((function (vec__62187,p,g,s__62177__$2,temp__5804__auto__,positions,map__62172,map__62172__$1,db,vec__62173,_,instruments){
return (function kdlyticsgui$mount$iter__62176_$_iter__62190(s__62191){
return (new cljs.core.LazySeq(null,(function (){
var s__62191__$1 = s__62191;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__62191__$1);
if(temp__5804__auto____$1){
var s__62191__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__62191__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__62191__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__62193 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__62192 = (0);
while(true){
if((i__62192 < size__5522__auto__)){
var line = cljs.core._nth(c__5521__auto__,i__62192);
if((((!((new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line) == null)))) && ((new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line) > (0))))){
cljs.core.chunk_append(b__62193,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line)], null));

var G__63124 = (i__62192 + (1));
i__62192 = G__63124;
continue;
} else {
var G__63125 = (i__62192 + (1));
i__62192 = G__63125;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62193),kdlyticsgui$mount$iter__62176_$_iter__62190(cljs.core.chunk_rest(s__62191__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62193),null);
}
} else {
var line = cljs.core.first(s__62191__$2);
if((((!((new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line) == null)))) && ((new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line) > (0))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line)], null),kdlyticsgui$mount$iter__62176_$_iter__62190(cljs.core.rest(s__62191__$2)));
} else {
var G__63126 = cljs.core.rest(s__62191__$2);
s__62191__$1 = G__63126;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__62187,p,g,s__62177__$2,temp__5804__auto__,positions,map__62172,map__62172__$1,db,vec__62173,_,instruments))
;
return iter__5523__auto__(g);
})())], null),kdlyticsgui$mount$iter__62176(cljs.core.rest(s__62177__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.group_by(new cljs.core.Keyword(null,"portfolio","portfolio",957568598),positions));
})())], 0))], null);
}));
var seq__62194_63127 = cljs.core.seq(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219),new cljs.core.Keyword("portfolio-history","filter","portfolio-history/filter",1821014145),new cljs.core.Keyword("attribution-history","filter","attribution-history/filter",-868840340)], null));
var chunk__62195_63128 = null;
var count__62196_63129 = (0);
var i__62197_63130 = (0);
while(true){
if((i__62197_63130 < count__62196_63129)){
var k_63131 = chunk__62195_63128.cljs$core$IIndexed$_nth$arity$2(null,i__62197_63130);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_63131,((function (seq__62194_63127,chunk__62195_63128,count__62196_63129,i__62197_63130,k_63131){
return (function (db,p__62206){
var vec__62207 = p__62206;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62207,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62207,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62207,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_63131,id], null),f);
});})(seq__62194_63127,chunk__62195_63128,count__62196_63129,i__62197_63130,k_63131))
);


var G__63132 = seq__62194_63127;
var G__63133 = chunk__62195_63128;
var G__63134 = count__62196_63129;
var G__63135 = (i__62197_63130 + (1));
seq__62194_63127 = G__63132;
chunk__62195_63128 = G__63133;
count__62196_63129 = G__63134;
i__62197_63130 = G__63135;
continue;
} else {
var temp__5804__auto___63136 = cljs.core.seq(seq__62194_63127);
if(temp__5804__auto___63136){
var seq__62194_63137__$1 = temp__5804__auto___63136;
if(cljs.core.chunked_seq_QMARK_(seq__62194_63137__$1)){
var c__5568__auto___63138 = cljs.core.chunk_first(seq__62194_63137__$1);
var G__63139 = cljs.core.chunk_rest(seq__62194_63137__$1);
var G__63140 = c__5568__auto___63138;
var G__63141 = cljs.core.count(c__5568__auto___63138);
var G__63142 = (0);
seq__62194_63127 = G__63139;
chunk__62195_63128 = G__63140;
count__62196_63129 = G__63141;
i__62197_63130 = G__63142;
continue;
} else {
var k_63143 = cljs.core.first(seq__62194_63137__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_63143,((function (seq__62194_63127,chunk__62195_63128,count__62196_63129,i__62197_63130,k_63143,seq__62194_63137__$1,temp__5804__auto___63136){
return (function (db,p__62210){
var vec__62211 = p__62210;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62211,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62211,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62211,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_63143,id], null),f);
});})(seq__62194_63127,chunk__62195_63128,count__62196_63129,i__62197_63130,k_63143,seq__62194_63137__$1,temp__5804__auto___63136))
);


var G__63144 = cljs.core.next(seq__62194_63137__$1);
var G__63145 = null;
var G__63146 = (0);
var G__63147 = (0);
seq__62194_63127 = G__63144;
chunk__62195_63128 = G__63145;
count__62196_63129 = G__63146;
i__62197_63130 = G__63147;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),(function (db,p__62214){
var vec__62215 = p__62214;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62215,(0),null);
var qt_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62215,(1),null);
var dt = qt_date.replace("\"","");
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),dt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("portfolio-history","end-period","portfolio-history/end-period",1624676397),kdlyticsgui.tools.gdate__GT_yyyyMMdd(kdlyticsgui.tools.ddMMMyyyy__GT_gdate(dt))], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),(function (db,p__62218){
var vec__62219 = p__62218;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62219,(0),null);
var attribution_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62219,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),attribution_date.replace("\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),(function (db,p__62222){
var vec__62223 = p__62222;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62223,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62223,(1),null);
var G__62226 = snapshot;
switch (G__62226) {
case (1):
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),snapshot,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),"Table",new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),true,new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null)], 0));

break;
case (2):
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),snapshot,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),"Tree",new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),true,new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"country","country",312965309),(2),new cljs.core.Keyword(null,"sector","sector",-1444247062),(3),"None"], null)], 0));

break;
case (3):
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),snapshot,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),"Tree",new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),true,new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"sector","sector",-1444247062),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),"None"], null)], 0));

break;
case (4):
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),snapshot,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),"Tree",new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),true,new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"sector","sector",-1444247062),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null)], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62226)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),(function (db,p__62227){
var vec__62228 = p__62227;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62228,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62228,(1),null);
var G__62231 = snapshot;
switch (G__62231) {
case (1):
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),snapshot,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),"Table",new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),true,new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null)], 0));

break;
case (2):
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),snapshot,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),"Tree",new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),true,new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"country","country",312965309),(2),new cljs.core.Keyword(null,"issuer","issuer",-1199257898),(3),"None"], null)], 0));

break;
case (3):
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),snapshot,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),"Tree",new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),true,new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"sector","sector",-1444247062),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),"None"], null)], 0));

break;
case (4):
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),snapshot);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62231)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),(function (db,p__62232){
var vec__62233 = p__62232;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62233,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62233,(1),null);
var G__62236 = snapshot;
switch (G__62236) {
case (1):
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),snapshot,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),"Table",new cljs.core.Keyword("portfolio-alignment","field-one","portfolio-alignment/field-one",-1606109924),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null)], 0));

break;
case (2):
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),snapshot,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),"Tree",new cljs.core.Keyword("portfolio-alignment","field-one","portfolio-alignment/field-one",-1606109924),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"country","country",312965309),(2),new cljs.core.Keyword(null,"issuer","issuer",-1199257898),(3),"None"], null)], 0));

break;
case (3):
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),snapshot,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),"Tree",new cljs.core.Keyword("portfolio-alignment","field-one","portfolio-alignment/field-one",-1606109924),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"sector","sector",-1444247062),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null)], 0));

break;
case (4):
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),snapshot);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62236)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cycle-shortcut","cycle-shortcut",-1617058214),(function (db,p__62237){
var vec__62238 = p__62237;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62238,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62238,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62238,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword("navigation","active-view","navigation/active-view",800211184).cljs$core$IFn$_invoke$arity$1(db)),"-risk/shortcut"].join(''));
var shortcut_value = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
if((shortcut_value < (4))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(shortcut_value + (1)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(1));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tree-table","tree-table",-1263002012),(function (db,p__62241){
var vec__62242 = p__62241;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62242,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62242,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62242,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword("navigation","active-view","navigation/active-view",800211184).cljs$core$IFn$_invoke$arity$1(db)),"-risk/display-style"].join(''));
var G__62245 = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
switch (G__62245) {
case "Tree":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Table");

break;
case "Table":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Tree");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62245)].join('')));

}
}));
/**
 * if response header is application/json keys will get keywordized automatically - otherwise send as text/plain
 */
kdlyticsgui.mount.http_get_dispatch = (function kdlyticsgui$mount$http_get_dispatch(request){
var vr = ((cljs.core.vector_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__62246 = cljs.core.seq(vr);
var chunk__62247 = null;
var count__62248 = (0);
var i__62249 = (0);
while(true){
if((i__62249 < count__62248)){
var r = chunk__62247.cljs$core$IIndexed$_nth$arity$2(null,i__62249);
var c__27979__auto___63156 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__62246,chunk__62247,count__62248,i__62249,c__27979__auto___63156,r,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__62246,chunk__62247,count__62248,i__62249,c__27979__auto___63156,r,vr){
return (function (state_62334){
var state_val_62335 = (state_62334[(1)]);
if((state_val_62335 === (1))){
var inst_62314 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_62315 = cljs_http.client.get(inst_62314);
var state_62334__$1 = state_62334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62334__$1,(2),inst_62315);
} else {
if((state_val_62335 === (2))){
var inst_62317 = (state_62334[(2)]);
var inst_62318 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_62319 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_62317);
var inst_62320 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_62318,inst_62319);
var inst_62321 = re_frame.core.dispatch(inst_62320);
var inst_62322 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_62334__$1 = (function (){var statearr_62336 = state_62334;
(statearr_62336[(7)] = inst_62321);

return statearr_62336;
})();
if(cljs.core.truth_(inst_62322)){
var statearr_62337_63158 = state_62334__$1;
(statearr_62337_63158[(1)] = (3));

} else {
var statearr_62338_63159 = state_62334__$1;
(statearr_62338_63159[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62335 === (3))){
var inst_62324 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62325 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_62326 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_62327 = [inst_62325,inst_62326];
var inst_62328 = (new cljs.core.PersistentVector(null,2,(5),inst_62324,inst_62327,null));
var inst_62329 = re_frame.core.dispatch(inst_62328);
var state_62334__$1 = state_62334;
var statearr_62339_63160 = state_62334__$1;
(statearr_62339_63160[(2)] = inst_62329);

(statearr_62339_63160[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62335 === (4))){
var state_62334__$1 = state_62334;
var statearr_62340_63161 = state_62334__$1;
(statearr_62340_63161[(2)] = null);

(statearr_62340_63161[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62335 === (5))){
var inst_62332 = (state_62334[(2)]);
var state_62334__$1 = state_62334;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62334__$1,inst_62332);
} else {
return null;
}
}
}
}
}
});})(seq__62246,chunk__62247,count__62248,i__62249,c__27979__auto___63156,r,vr))
;
return ((function (seq__62246,chunk__62247,count__62248,i__62249,switch__27909__auto__,c__27979__auto___63156,r,vr){
return (function() {
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____0 = (function (){
var statearr_62341 = [null,null,null,null,null,null,null,null];
(statearr_62341[(0)] = kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__);

(statearr_62341[(1)] = (1));

return statearr_62341;
});
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____1 = (function (state_62334){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_62334);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e62342){var ex__27913__auto__ = e62342;
var statearr_62343_63163 = state_62334;
(statearr_62343_63163[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_62334[(4)]))){
var statearr_62344_63164 = state_62334;
(statearr_62344_63164[(1)] = cljs.core.first((state_62334[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63165 = state_62334;
state_62334 = G__63165;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__ = function(state_62334){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____1.call(this,state_62334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__;
})()
;})(seq__62246,chunk__62247,count__62248,i__62249,switch__27909__auto__,c__27979__auto___63156,r,vr))
})();
var state__27981__auto__ = (function (){var statearr_62345 = f__27980__auto__();
(statearr_62345[(6)] = c__27979__auto___63156);

return statearr_62345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__62246,chunk__62247,count__62248,i__62249,c__27979__auto___63156,r,vr))
);



var G__63166 = seq__62246;
var G__63167 = chunk__62247;
var G__63168 = count__62248;
var G__63169 = (i__62249 + (1));
seq__62246 = G__63166;
chunk__62247 = G__63167;
count__62248 = G__63168;
i__62249 = G__63169;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__62246);
if(temp__5804__auto__){
var seq__62246__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62246__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__62246__$1);
var G__63170 = cljs.core.chunk_rest(seq__62246__$1);
var G__63171 = c__5568__auto__;
var G__63172 = cljs.core.count(c__5568__auto__);
var G__63173 = (0);
seq__62246 = G__63170;
chunk__62247 = G__63171;
count__62248 = G__63172;
i__62249 = G__63173;
continue;
} else {
var r = cljs.core.first(seq__62246__$1);
var c__27979__auto___63174 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__62246,chunk__62247,count__62248,i__62249,c__27979__auto___63174,r,seq__62246__$1,temp__5804__auto__,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__62246,chunk__62247,count__62248,i__62249,c__27979__auto___63174,r,seq__62246__$1,temp__5804__auto__,vr){
return (function (state_62366){
var state_val_62367 = (state_62366[(1)]);
if((state_val_62367 === (1))){
var inst_62346 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_62347 = cljs_http.client.get(inst_62346);
var state_62366__$1 = state_62366;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62366__$1,(2),inst_62347);
} else {
if((state_val_62367 === (2))){
var inst_62349 = (state_62366[(2)]);
var inst_62350 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_62351 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_62349);
var inst_62352 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_62350,inst_62351);
var inst_62353 = re_frame.core.dispatch(inst_62352);
var inst_62354 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_62366__$1 = (function (){var statearr_62368 = state_62366;
(statearr_62368[(7)] = inst_62353);

return statearr_62368;
})();
if(cljs.core.truth_(inst_62354)){
var statearr_62369_63175 = state_62366__$1;
(statearr_62369_63175[(1)] = (3));

} else {
var statearr_62370_63177 = state_62366__$1;
(statearr_62370_63177[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62367 === (3))){
var inst_62356 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62357 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_62358 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_62359 = [inst_62357,inst_62358];
var inst_62360 = (new cljs.core.PersistentVector(null,2,(5),inst_62356,inst_62359,null));
var inst_62361 = re_frame.core.dispatch(inst_62360);
var state_62366__$1 = state_62366;
var statearr_62371_63178 = state_62366__$1;
(statearr_62371_63178[(2)] = inst_62361);

(statearr_62371_63178[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62367 === (4))){
var state_62366__$1 = state_62366;
var statearr_62372_63179 = state_62366__$1;
(statearr_62372_63179[(2)] = null);

(statearr_62372_63179[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62367 === (5))){
var inst_62364 = (state_62366[(2)]);
var state_62366__$1 = state_62366;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62366__$1,inst_62364);
} else {
return null;
}
}
}
}
}
});})(seq__62246,chunk__62247,count__62248,i__62249,c__27979__auto___63174,r,seq__62246__$1,temp__5804__auto__,vr))
;
return ((function (seq__62246,chunk__62247,count__62248,i__62249,switch__27909__auto__,c__27979__auto___63174,r,seq__62246__$1,temp__5804__auto__,vr){
return (function() {
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____0 = (function (){
var statearr_62373 = [null,null,null,null,null,null,null,null];
(statearr_62373[(0)] = kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__);

(statearr_62373[(1)] = (1));

return statearr_62373;
});
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____1 = (function (state_62366){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_62366);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e62374){var ex__27913__auto__ = e62374;
var statearr_62375_63180 = state_62366;
(statearr_62375_63180[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_62366[(4)]))){
var statearr_62376_63181 = state_62366;
(statearr_62376_63181[(1)] = cljs.core.first((state_62366[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63182 = state_62366;
state_62366 = G__63182;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__ = function(state_62366){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____1.call(this,state_62366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__;
})()
;})(seq__62246,chunk__62247,count__62248,i__62249,switch__27909__auto__,c__27979__auto___63174,r,seq__62246__$1,temp__5804__auto__,vr))
})();
var state__27981__auto__ = (function (){var statearr_62377 = f__27980__auto__();
(statearr_62377[(6)] = c__27979__auto___63174);

return statearr_62377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__62246,chunk__62247,count__62248,i__62249,c__27979__auto___63174,r,seq__62246__$1,temp__5804__auto__,vr))
);



var G__63183 = cljs.core.next(seq__62246__$1);
var G__63184 = null;
var G__63185 = (0);
var G__63186 = (0);
seq__62246 = G__63183;
chunk__62247 = G__63184;
count__62248 = G__63185;
i__62249 = G__63186;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),kdlyticsgui.mount.http_get_dispatch);
/**
 * if response header is application/json keys will get keywordized automatically - otherwise send as text/plain
 */
kdlyticsgui.mount.http_get_asset = (function kdlyticsgui$mount$http_get_asset(request){
var vr = ((cljs.core.vector_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__62378 = cljs.core.seq(vr);
var chunk__62379 = null;
var count__62380 = (0);
var i__62381 = (0);
while(true){
if((i__62381 < count__62380)){
var r = chunk__62379.cljs$core$IIndexed$_nth$arity$2(null,i__62381);
var c__27979__auto___63188 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__62378,chunk__62379,count__62380,i__62381,c__27979__auto___63188,r,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__62378,chunk__62379,count__62380,i__62381,c__27979__auto___63188,r,vr){
return (function (state_62472){
var state_val_62473 = (state_62472[(1)]);
if((state_val_62473 === (1))){
var inst_62450 = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(request);
var inst_62451 = new cljs.core.Keyword(null,"asset","asset",-280274466).cljs$core$IFn$_invoke$arity$1(request);
var inst_62452 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"asset?namespace=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_62450),"&asset=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_62451)].join('');
var inst_62453 = cljs_http.client.get(inst_62452);
var state_62472__$1 = state_62472;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62472__$1,(2),inst_62453);
} else {
if((state_val_62473 === (2))){
var inst_62455 = (state_62472[(2)]);
var inst_62456 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_62457 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_62455);
var inst_62458 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_62456,inst_62457);
var inst_62459 = re_frame.core.dispatch(inst_62458);
var inst_62460 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_62472__$1 = (function (){var statearr_62474 = state_62472;
(statearr_62474[(7)] = inst_62459);

return statearr_62474;
})();
if(cljs.core.truth_(inst_62460)){
var statearr_62475_63189 = state_62472__$1;
(statearr_62475_63189[(1)] = (3));

} else {
var statearr_62476_63190 = state_62472__$1;
(statearr_62476_63190[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62473 === (3))){
var inst_62462 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62463 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_62464 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_62465 = [inst_62463,inst_62464];
var inst_62466 = (new cljs.core.PersistentVector(null,2,(5),inst_62462,inst_62465,null));
var inst_62467 = re_frame.core.dispatch(inst_62466);
var state_62472__$1 = state_62472;
var statearr_62477_63191 = state_62472__$1;
(statearr_62477_63191[(2)] = inst_62467);

(statearr_62477_63191[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62473 === (4))){
var state_62472__$1 = state_62472;
var statearr_62478_63192 = state_62472__$1;
(statearr_62478_63192[(2)] = null);

(statearr_62478_63192[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62473 === (5))){
var inst_62470 = (state_62472[(2)]);
var state_62472__$1 = state_62472;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62472__$1,inst_62470);
} else {
return null;
}
}
}
}
}
});})(seq__62378,chunk__62379,count__62380,i__62381,c__27979__auto___63188,r,vr))
;
return ((function (seq__62378,chunk__62379,count__62380,i__62381,switch__27909__auto__,c__27979__auto___63188,r,vr){
return (function() {
var kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____0 = (function (){
var statearr_62479 = [null,null,null,null,null,null,null,null];
(statearr_62479[(0)] = kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__);

(statearr_62479[(1)] = (1));

return statearr_62479;
});
var kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____1 = (function (state_62472){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_62472);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e62480){var ex__27913__auto__ = e62480;
var statearr_62481_63193 = state_62472;
(statearr_62481_63193[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_62472[(4)]))){
var statearr_62482_63194 = state_62472;
(statearr_62482_63194[(1)] = cljs.core.first((state_62472[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63195 = state_62472;
state_62472 = G__63195;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__ = function(state_62472){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____1.call(this,state_62472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__;
})()
;})(seq__62378,chunk__62379,count__62380,i__62381,switch__27909__auto__,c__27979__auto___63188,r,vr))
})();
var state__27981__auto__ = (function (){var statearr_62483 = f__27980__auto__();
(statearr_62483[(6)] = c__27979__auto___63188);

return statearr_62483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__62378,chunk__62379,count__62380,i__62381,c__27979__auto___63188,r,vr))
);



var G__63196 = seq__62378;
var G__63197 = chunk__62379;
var G__63198 = count__62380;
var G__63199 = (i__62381 + (1));
seq__62378 = G__63196;
chunk__62379 = G__63197;
count__62380 = G__63198;
i__62381 = G__63199;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__62378);
if(temp__5804__auto__){
var seq__62378__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62378__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__62378__$1);
var G__63200 = cljs.core.chunk_rest(seq__62378__$1);
var G__63201 = c__5568__auto__;
var G__63202 = cljs.core.count(c__5568__auto__);
var G__63203 = (0);
seq__62378 = G__63200;
chunk__62379 = G__63201;
count__62380 = G__63202;
i__62381 = G__63203;
continue;
} else {
var r = cljs.core.first(seq__62378__$1);
var c__27979__auto___63204 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__62378,chunk__62379,count__62380,i__62381,c__27979__auto___63204,r,seq__62378__$1,temp__5804__auto__,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__62378,chunk__62379,count__62380,i__62381,c__27979__auto___63204,r,seq__62378__$1,temp__5804__auto__,vr){
return (function (state_62506){
var state_val_62507 = (state_62506[(1)]);
if((state_val_62507 === (1))){
var inst_62484 = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(request);
var inst_62485 = new cljs.core.Keyword(null,"asset","asset",-280274466).cljs$core$IFn$_invoke$arity$1(request);
var inst_62486 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"asset?namespace=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_62484),"&asset=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_62485)].join('');
var inst_62487 = cljs_http.client.get(inst_62486);
var state_62506__$1 = state_62506;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62506__$1,(2),inst_62487);
} else {
if((state_val_62507 === (2))){
var inst_62489 = (state_62506[(2)]);
var inst_62490 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_62491 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_62489);
var inst_62492 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_62490,inst_62491);
var inst_62493 = re_frame.core.dispatch(inst_62492);
var inst_62494 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_62506__$1 = (function (){var statearr_62508 = state_62506;
(statearr_62508[(7)] = inst_62493);

return statearr_62508;
})();
if(cljs.core.truth_(inst_62494)){
var statearr_62509_63214 = state_62506__$1;
(statearr_62509_63214[(1)] = (3));

} else {
var statearr_62510_63216 = state_62506__$1;
(statearr_62510_63216[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62507 === (3))){
var inst_62496 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62497 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_62498 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_62499 = [inst_62497,inst_62498];
var inst_62500 = (new cljs.core.PersistentVector(null,2,(5),inst_62496,inst_62499,null));
var inst_62501 = re_frame.core.dispatch(inst_62500);
var state_62506__$1 = state_62506;
var statearr_62511_63228 = state_62506__$1;
(statearr_62511_63228[(2)] = inst_62501);

(statearr_62511_63228[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62507 === (4))){
var state_62506__$1 = state_62506;
var statearr_62512_63229 = state_62506__$1;
(statearr_62512_63229[(2)] = null);

(statearr_62512_63229[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62507 === (5))){
var inst_62504 = (state_62506[(2)]);
var state_62506__$1 = state_62506;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62506__$1,inst_62504);
} else {
return null;
}
}
}
}
}
});})(seq__62378,chunk__62379,count__62380,i__62381,c__27979__auto___63204,r,seq__62378__$1,temp__5804__auto__,vr))
;
return ((function (seq__62378,chunk__62379,count__62380,i__62381,switch__27909__auto__,c__27979__auto___63204,r,seq__62378__$1,temp__5804__auto__,vr){
return (function() {
var kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____0 = (function (){
var statearr_62513 = [null,null,null,null,null,null,null,null];
(statearr_62513[(0)] = kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__);

(statearr_62513[(1)] = (1));

return statearr_62513;
});
var kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____1 = (function (state_62506){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_62506);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e62514){var ex__27913__auto__ = e62514;
var statearr_62515_63230 = state_62506;
(statearr_62515_63230[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_62506[(4)]))){
var statearr_62516_63232 = state_62506;
(statearr_62516_63232[(1)] = cljs.core.first((state_62506[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63233 = state_62506;
state_62506 = G__63233;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__ = function(state_62506){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____1.call(this,state_62506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__;
})()
;})(seq__62378,chunk__62379,count__62380,i__62381,switch__27909__auto__,c__27979__auto___63204,r,seq__62378__$1,temp__5804__auto__,vr))
})();
var state__27981__auto__ = (function (){var statearr_62517 = f__27980__auto__();
(statearr_62517[(6)] = c__27979__auto___63204);

return statearr_62517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__62378,chunk__62379,count__62380,i__62381,c__27979__auto___63204,r,seq__62378__$1,temp__5804__auto__,vr))
);



var G__63234 = cljs.core.next(seq__62378__$1);
var G__63235 = null;
var G__63236 = (0);
var G__63237 = (0);
seq__62378 = G__63234;
chunk__62379 = G__63235;
count__62380 = G__63236;
i__62381 = G__63237;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http-get-asset","http-get-asset",1501716308),kdlyticsgui.mount.http_get_asset);
/**
 * if response header is application/json keys will get keywordized automatically - otherwise send as text/plain
 */
kdlyticsgui.mount.http_post_dispatch = (function kdlyticsgui$mount$http_post_dispatch(request){
var vr = ((cljs.core.vector_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__62518 = cljs.core.seq(vr);
var chunk__62519 = null;
var count__62520 = (0);
var i__62521 = (0);
while(true){
if((i__62521 < count__62520)){
var r = chunk__62519.cljs$core$IIndexed$_nth$arity$2(null,i__62521);
var c__27979__auto___63238 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__62518,chunk__62519,count__62520,i__62521,c__27979__auto___63238,r,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__62518,chunk__62519,count__62520,i__62521,c__27979__auto___63238,r,vr){
return (function (state_62655){
var state_val_62656 = (state_62655[(1)]);
if((state_val_62656 === (1))){
var inst_62622 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_62623 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var state_62655__$1 = (function (){var statearr_62657 = state_62655;
(statearr_62657[(7)] = inst_62622);

return statearr_62657;
})();
if(cljs.core.truth_(inst_62623)){
var statearr_62658_63239 = state_62655__$1;
(statearr_62658_63239[(1)] = (3));

} else {
var statearr_62659_63240 = state_62655__$1;
(statearr_62659_63240[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62656 === (2))){
var inst_62638 = (state_62655[(2)]);
var inst_62639 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_62640 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_62638);
var inst_62641 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_62639,inst_62640);
var inst_62642 = re_frame.core.dispatch(inst_62641);
var inst_62643 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_62655__$1 = (function (){var statearr_62660 = state_62655;
(statearr_62660[(8)] = inst_62642);

return statearr_62660;
})();
if(cljs.core.truth_(inst_62643)){
var statearr_62661_63241 = state_62655__$1;
(statearr_62661_63241[(1)] = (6));

} else {
var statearr_62662_63242 = state_62655__$1;
(statearr_62662_63242[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62656 === (3))){
var inst_62625 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_62626 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var inst_62627 = [inst_62626];
var inst_62628 = cljs.core.PersistentHashMap.fromArrays(inst_62625,inst_62627);
var state_62655__$1 = state_62655;
var statearr_62663_63244 = state_62655__$1;
(statearr_62663_63244[(2)] = inst_62628);

(statearr_62663_63244[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62656 === (4))){
var inst_62630 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_62631 = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(r);
var inst_62632 = [inst_62631];
var inst_62633 = cljs.core.PersistentHashMap.fromArrays(inst_62630,inst_62632);
var state_62655__$1 = state_62655;
var statearr_62664_63245 = state_62655__$1;
(statearr_62664_63245[(2)] = inst_62633);

(statearr_62664_63245[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62656 === (5))){
var inst_62622 = (state_62655[(7)]);
var inst_62635 = (state_62655[(2)]);
var inst_62636 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_62622,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_62635], 0));
var state_62655__$1 = state_62655;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62655__$1,(2),inst_62636);
} else {
if((state_val_62656 === (6))){
var inst_62645 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62646 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_62647 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_62648 = [inst_62646,inst_62647];
var inst_62649 = (new cljs.core.PersistentVector(null,2,(5),inst_62645,inst_62648,null));
var inst_62650 = re_frame.core.dispatch(inst_62649);
var state_62655__$1 = state_62655;
var statearr_62665_63246 = state_62655__$1;
(statearr_62665_63246[(2)] = inst_62650);

(statearr_62665_63246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62656 === (7))){
var state_62655__$1 = state_62655;
var statearr_62666_63247 = state_62655__$1;
(statearr_62666_63247[(2)] = null);

(statearr_62666_63247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62656 === (8))){
var inst_62653 = (state_62655[(2)]);
var state_62655__$1 = state_62655;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62655__$1,inst_62653);
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
});})(seq__62518,chunk__62519,count__62520,i__62521,c__27979__auto___63238,r,vr))
;
return ((function (seq__62518,chunk__62519,count__62520,i__62521,switch__27909__auto__,c__27979__auto___63238,r,vr){
return (function() {
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____0 = (function (){
var statearr_62667 = [null,null,null,null,null,null,null,null,null];
(statearr_62667[(0)] = kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__);

(statearr_62667[(1)] = (1));

return statearr_62667;
});
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____1 = (function (state_62655){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_62655);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e62668){var ex__27913__auto__ = e62668;
var statearr_62669_63248 = state_62655;
(statearr_62669_63248[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_62655[(4)]))){
var statearr_62670_63249 = state_62655;
(statearr_62670_63249[(1)] = cljs.core.first((state_62655[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63250 = state_62655;
state_62655 = G__63250;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__ = function(state_62655){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____1.call(this,state_62655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__;
})()
;})(seq__62518,chunk__62519,count__62520,i__62521,switch__27909__auto__,c__27979__auto___63238,r,vr))
})();
var state__27981__auto__ = (function (){var statearr_62671 = f__27980__auto__();
(statearr_62671[(6)] = c__27979__auto___63238);

return statearr_62671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__62518,chunk__62519,count__62520,i__62521,c__27979__auto___63238,r,vr))
);



var G__63251 = seq__62518;
var G__63252 = chunk__62519;
var G__63253 = count__62520;
var G__63254 = (i__62521 + (1));
seq__62518 = G__63251;
chunk__62519 = G__63252;
count__62520 = G__63253;
i__62521 = G__63254;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__62518);
if(temp__5804__auto__){
var seq__62518__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62518__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__62518__$1);
var G__63256 = cljs.core.chunk_rest(seq__62518__$1);
var G__63257 = c__5568__auto__;
var G__63258 = cljs.core.count(c__5568__auto__);
var G__63259 = (0);
seq__62518 = G__63256;
chunk__62519 = G__63257;
count__62520 = G__63258;
i__62521 = G__63259;
continue;
} else {
var r = cljs.core.first(seq__62518__$1);
var c__27979__auto___63260 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__62518,chunk__62519,count__62520,i__62521,c__27979__auto___63260,r,seq__62518__$1,temp__5804__auto__,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__62518,chunk__62519,count__62520,i__62521,c__27979__auto___63260,r,seq__62518__$1,temp__5804__auto__,vr){
return (function (state_62705){
var state_val_62706 = (state_62705[(1)]);
if((state_val_62706 === (1))){
var inst_62672 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_62673 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var state_62705__$1 = (function (){var statearr_62707 = state_62705;
(statearr_62707[(7)] = inst_62672);

return statearr_62707;
})();
if(cljs.core.truth_(inst_62673)){
var statearr_62708_63261 = state_62705__$1;
(statearr_62708_63261[(1)] = (3));

} else {
var statearr_62709_63262 = state_62705__$1;
(statearr_62709_63262[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62706 === (2))){
var inst_62688 = (state_62705[(2)]);
var inst_62689 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_62690 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_62688);
var inst_62691 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_62689,inst_62690);
var inst_62692 = re_frame.core.dispatch(inst_62691);
var inst_62693 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_62705__$1 = (function (){var statearr_62710 = state_62705;
(statearr_62710[(8)] = inst_62692);

return statearr_62710;
})();
if(cljs.core.truth_(inst_62693)){
var statearr_62711_63264 = state_62705__$1;
(statearr_62711_63264[(1)] = (6));

} else {
var statearr_62712_63265 = state_62705__$1;
(statearr_62712_63265[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62706 === (3))){
var inst_62675 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_62676 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var inst_62677 = [inst_62676];
var inst_62678 = cljs.core.PersistentHashMap.fromArrays(inst_62675,inst_62677);
var state_62705__$1 = state_62705;
var statearr_62713_63266 = state_62705__$1;
(statearr_62713_63266[(2)] = inst_62678);

(statearr_62713_63266[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62706 === (4))){
var inst_62680 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_62681 = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(r);
var inst_62682 = [inst_62681];
var inst_62683 = cljs.core.PersistentHashMap.fromArrays(inst_62680,inst_62682);
var state_62705__$1 = state_62705;
var statearr_62714_63268 = state_62705__$1;
(statearr_62714_63268[(2)] = inst_62683);

(statearr_62714_63268[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62706 === (5))){
var inst_62672 = (state_62705[(7)]);
var inst_62685 = (state_62705[(2)]);
var inst_62686 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_62672,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_62685], 0));
var state_62705__$1 = state_62705;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62705__$1,(2),inst_62686);
} else {
if((state_val_62706 === (6))){
var inst_62695 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62696 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_62697 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_62698 = [inst_62696,inst_62697];
var inst_62699 = (new cljs.core.PersistentVector(null,2,(5),inst_62695,inst_62698,null));
var inst_62700 = re_frame.core.dispatch(inst_62699);
var state_62705__$1 = state_62705;
var statearr_62715_63269 = state_62705__$1;
(statearr_62715_63269[(2)] = inst_62700);

(statearr_62715_63269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62706 === (7))){
var state_62705__$1 = state_62705;
var statearr_62716_63270 = state_62705__$1;
(statearr_62716_63270[(2)] = null);

(statearr_62716_63270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62706 === (8))){
var inst_62703 = (state_62705[(2)]);
var state_62705__$1 = state_62705;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62705__$1,inst_62703);
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
});})(seq__62518,chunk__62519,count__62520,i__62521,c__27979__auto___63260,r,seq__62518__$1,temp__5804__auto__,vr))
;
return ((function (seq__62518,chunk__62519,count__62520,i__62521,switch__27909__auto__,c__27979__auto___63260,r,seq__62518__$1,temp__5804__auto__,vr){
return (function() {
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____0 = (function (){
var statearr_62717 = [null,null,null,null,null,null,null,null,null];
(statearr_62717[(0)] = kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__);

(statearr_62717[(1)] = (1));

return statearr_62717;
});
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____1 = (function (state_62705){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_62705);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e62718){var ex__27913__auto__ = e62718;
var statearr_62719_63272 = state_62705;
(statearr_62719_63272[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_62705[(4)]))){
var statearr_62720_63273 = state_62705;
(statearr_62720_63273[(1)] = cljs.core.first((state_62705[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63274 = state_62705;
state_62705 = G__63274;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__ = function(state_62705){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____1.call(this,state_62705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__;
})()
;})(seq__62518,chunk__62519,count__62520,i__62521,switch__27909__auto__,c__27979__auto___63260,r,seq__62518__$1,temp__5804__auto__,vr))
})();
var state__27981__auto__ = (function (){var statearr_62721 = f__27980__auto__();
(statearr_62721[(6)] = c__27979__auto___63260);

return statearr_62721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__62518,chunk__62519,count__62520,i__62521,c__27979__auto___63260,r,seq__62518__$1,temp__5804__auto__,vr))
);



var G__63275 = cljs.core.next(seq__62518__$1);
var G__63276 = null;
var G__63277 = (0);
var G__63278 = (0);
seq__62518 = G__63275;
chunk__62519 = G__63276;
count__62520 = G__63277;
i__62521 = G__63278;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http-post-dispatch","http-post-dispatch",2138865017),kdlyticsgui.mount.http_post_dispatch);
/**
 * if response header is application/json keys will get keywordized automatically - otherwise send as text/plain
 */
kdlyticsgui.mount.http_post_dispatch_test = (function kdlyticsgui$mount$http_post_dispatch_test(request){
var vr = ((cljs.core.vector_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__62722 = cljs.core.seq(vr);
var chunk__62723 = null;
var count__62724 = (0);
var i__62725 = (0);
while(true){
if((i__62725 < count__62724)){
var r = chunk__62723.cljs$core$IIndexed$_nth$arity$2(null,i__62725);
var c__27979__auto___63279 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__62722,chunk__62723,count__62724,i__62725,c__27979__auto___63279,r,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__62722,chunk__62723,count__62724,i__62725,c__27979__auto___63279,r,vr){
return (function (state_62859){
var state_val_62860 = (state_62859[(1)]);
if((state_val_62860 === (1))){
var inst_62826 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_62827 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var state_62859__$1 = (function (){var statearr_62861 = state_62859;
(statearr_62861[(7)] = inst_62826);

return statearr_62861;
})();
if(cljs.core.truth_(inst_62827)){
var statearr_62862_63280 = state_62859__$1;
(statearr_62862_63280[(1)] = (3));

} else {
var statearr_62863_63281 = state_62859__$1;
(statearr_62863_63281[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62860 === (2))){
var inst_62842 = (state_62859[(2)]);
var inst_62843 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_62844 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_62842);
var inst_62845 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_62843,inst_62844);
var inst_62846 = re_frame.core.dispatch(inst_62845);
var inst_62847 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_62859__$1 = (function (){var statearr_62864 = state_62859;
(statearr_62864[(8)] = inst_62846);

return statearr_62864;
})();
if(cljs.core.truth_(inst_62847)){
var statearr_62865_63282 = state_62859__$1;
(statearr_62865_63282[(1)] = (6));

} else {
var statearr_62866_63283 = state_62859__$1;
(statearr_62866_63283[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62860 === (3))){
var inst_62829 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052),new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_62830 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var inst_62831 = [inst_62830,"application/json;charset=UTF-8"];
var inst_62832 = cljs.core.PersistentHashMap.fromArrays(inst_62829,inst_62831);
var state_62859__$1 = state_62859;
var statearr_62867_63284 = state_62859__$1;
(statearr_62867_63284[(2)] = inst_62832);

(statearr_62867_63284[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62860 === (4))){
var inst_62834 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_62835 = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(r);
var inst_62836 = [inst_62835,"application/json;charset=UTF-8"];
var inst_62837 = cljs.core.PersistentHashMap.fromArrays(inst_62834,inst_62836);
var state_62859__$1 = state_62859;
var statearr_62868_63285 = state_62859__$1;
(statearr_62868_63285[(2)] = inst_62837);

(statearr_62868_63285[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62860 === (5))){
var inst_62826 = (state_62859[(7)]);
var inst_62839 = (state_62859[(2)]);
var inst_62840 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_62826,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_62839], 0));
var state_62859__$1 = state_62859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62859__$1,(2),inst_62840);
} else {
if((state_val_62860 === (6))){
var inst_62849 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62850 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_62851 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_62852 = [inst_62850,inst_62851];
var inst_62853 = (new cljs.core.PersistentVector(null,2,(5),inst_62849,inst_62852,null));
var inst_62854 = re_frame.core.dispatch(inst_62853);
var state_62859__$1 = state_62859;
var statearr_62869_63286 = state_62859__$1;
(statearr_62869_63286[(2)] = inst_62854);

(statearr_62869_63286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62860 === (7))){
var state_62859__$1 = state_62859;
var statearr_62870_63287 = state_62859__$1;
(statearr_62870_63287[(2)] = null);

(statearr_62870_63287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62860 === (8))){
var inst_62857 = (state_62859[(2)]);
var state_62859__$1 = state_62859;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62859__$1,inst_62857);
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
});})(seq__62722,chunk__62723,count__62724,i__62725,c__27979__auto___63279,r,vr))
;
return ((function (seq__62722,chunk__62723,count__62724,i__62725,switch__27909__auto__,c__27979__auto___63279,r,vr){
return (function() {
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____0 = (function (){
var statearr_62871 = [null,null,null,null,null,null,null,null,null];
(statearr_62871[(0)] = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__);

(statearr_62871[(1)] = (1));

return statearr_62871;
});
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____1 = (function (state_62859){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_62859);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e62872){var ex__27913__auto__ = e62872;
var statearr_62873_63288 = state_62859;
(statearr_62873_63288[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_62859[(4)]))){
var statearr_62874_63289 = state_62859;
(statearr_62874_63289[(1)] = cljs.core.first((state_62859[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63290 = state_62859;
state_62859 = G__63290;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__ = function(state_62859){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____1.call(this,state_62859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__;
})()
;})(seq__62722,chunk__62723,count__62724,i__62725,switch__27909__auto__,c__27979__auto___63279,r,vr))
})();
var state__27981__auto__ = (function (){var statearr_62875 = f__27980__auto__();
(statearr_62875[(6)] = c__27979__auto___63279);

return statearr_62875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__62722,chunk__62723,count__62724,i__62725,c__27979__auto___63279,r,vr))
);



var G__63291 = seq__62722;
var G__63292 = chunk__62723;
var G__63293 = count__62724;
var G__63294 = (i__62725 + (1));
seq__62722 = G__63291;
chunk__62723 = G__63292;
count__62724 = G__63293;
i__62725 = G__63294;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__62722);
if(temp__5804__auto__){
var seq__62722__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62722__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__62722__$1);
var G__63295 = cljs.core.chunk_rest(seq__62722__$1);
var G__63296 = c__5568__auto__;
var G__63297 = cljs.core.count(c__5568__auto__);
var G__63298 = (0);
seq__62722 = G__63295;
chunk__62723 = G__63296;
count__62724 = G__63297;
i__62725 = G__63298;
continue;
} else {
var r = cljs.core.first(seq__62722__$1);
var c__27979__auto___63299 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__62722,chunk__62723,count__62724,i__62725,c__27979__auto___63299,r,seq__62722__$1,temp__5804__auto__,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__62722,chunk__62723,count__62724,i__62725,c__27979__auto___63299,r,seq__62722__$1,temp__5804__auto__,vr){
return (function (state_62909){
var state_val_62910 = (state_62909[(1)]);
if((state_val_62910 === (1))){
var inst_62876 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_62877 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var state_62909__$1 = (function (){var statearr_62911 = state_62909;
(statearr_62911[(7)] = inst_62876);

return statearr_62911;
})();
if(cljs.core.truth_(inst_62877)){
var statearr_62912_63300 = state_62909__$1;
(statearr_62912_63300[(1)] = (3));

} else {
var statearr_62913_63301 = state_62909__$1;
(statearr_62913_63301[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62910 === (2))){
var inst_62892 = (state_62909[(2)]);
var inst_62893 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_62894 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_62892);
var inst_62895 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_62893,inst_62894);
var inst_62896 = re_frame.core.dispatch(inst_62895);
var inst_62897 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_62909__$1 = (function (){var statearr_62914 = state_62909;
(statearr_62914[(8)] = inst_62896);

return statearr_62914;
})();
if(cljs.core.truth_(inst_62897)){
var statearr_62915_63302 = state_62909__$1;
(statearr_62915_63302[(1)] = (6));

} else {
var statearr_62916_63303 = state_62909__$1;
(statearr_62916_63303[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62910 === (3))){
var inst_62879 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052),new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_62880 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var inst_62881 = [inst_62880,"application/json;charset=UTF-8"];
var inst_62882 = cljs.core.PersistentHashMap.fromArrays(inst_62879,inst_62881);
var state_62909__$1 = state_62909;
var statearr_62917_63304 = state_62909__$1;
(statearr_62917_63304[(2)] = inst_62882);

(statearr_62917_63304[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62910 === (4))){
var inst_62884 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_62885 = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(r);
var inst_62886 = [inst_62885,"application/json;charset=UTF-8"];
var inst_62887 = cljs.core.PersistentHashMap.fromArrays(inst_62884,inst_62886);
var state_62909__$1 = state_62909;
var statearr_62918_63305 = state_62909__$1;
(statearr_62918_63305[(2)] = inst_62887);

(statearr_62918_63305[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62910 === (5))){
var inst_62876 = (state_62909[(7)]);
var inst_62889 = (state_62909[(2)]);
var inst_62890 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_62876,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_62889], 0));
var state_62909__$1 = state_62909;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62909__$1,(2),inst_62890);
} else {
if((state_val_62910 === (6))){
var inst_62899 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62900 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_62901 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_62902 = [inst_62900,inst_62901];
var inst_62903 = (new cljs.core.PersistentVector(null,2,(5),inst_62899,inst_62902,null));
var inst_62904 = re_frame.core.dispatch(inst_62903);
var state_62909__$1 = state_62909;
var statearr_62919_63306 = state_62909__$1;
(statearr_62919_63306[(2)] = inst_62904);

(statearr_62919_63306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62910 === (7))){
var state_62909__$1 = state_62909;
var statearr_62920_63307 = state_62909__$1;
(statearr_62920_63307[(2)] = null);

(statearr_62920_63307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62910 === (8))){
var inst_62907 = (state_62909[(2)]);
var state_62909__$1 = state_62909;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62909__$1,inst_62907);
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
});})(seq__62722,chunk__62723,count__62724,i__62725,c__27979__auto___63299,r,seq__62722__$1,temp__5804__auto__,vr))
;
return ((function (seq__62722,chunk__62723,count__62724,i__62725,switch__27909__auto__,c__27979__auto___63299,r,seq__62722__$1,temp__5804__auto__,vr){
return (function() {
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____0 = (function (){
var statearr_62921 = [null,null,null,null,null,null,null,null,null];
(statearr_62921[(0)] = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__);

(statearr_62921[(1)] = (1));

return statearr_62921;
});
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____1 = (function (state_62909){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_62909);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e62922){var ex__27913__auto__ = e62922;
var statearr_62923_63308 = state_62909;
(statearr_62923_63308[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_62909[(4)]))){
var statearr_62924_63309 = state_62909;
(statearr_62924_63309[(1)] = cljs.core.first((state_62909[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63310 = state_62909;
state_62909 = G__63310;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__ = function(state_62909){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____1.call(this,state_62909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__;
})()
;})(seq__62722,chunk__62723,count__62724,i__62725,switch__27909__auto__,c__27979__auto___63299,r,seq__62722__$1,temp__5804__auto__,vr))
})();
var state__27981__auto__ = (function (){var statearr_62925 = f__27980__auto__();
(statearr_62925[(6)] = c__27979__auto___63299);

return statearr_62925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__62722,chunk__62723,count__62724,i__62725,c__27979__auto___63299,r,seq__62722__$1,temp__5804__auto__,vr))
);



var G__63311 = cljs.core.next(seq__62722__$1);
var G__63312 = null;
var G__63313 = (0);
var G__63314 = (0);
seq__62722 = G__63311;
chunk__62723 = G__63312;
count__62724 = G__63313;
i__62725 = G__63314;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http-post-dispatch-test","http-post-dispatch-test",144067535),kdlyticsgui.mount.http_post_dispatch_test);
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http-json-post-dispatch","http-json-post-dispatch",1122041007),kdlyticsgui.mount.http_post_dispatch);
kdlyticsgui.mount.http_put_dispatch = (function kdlyticsgui$mount$http_put_dispatch(request){
var c__27979__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = (function (state_62950){
var state_val_62951 = (state_62950[(1)]);
if((state_val_62951 === (1))){
var inst_62926 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_62927 = [new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)];
var inst_62928 = new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707).cljs$core$IFn$_invoke$arity$1(request);
var inst_62929 = [inst_62928];
var inst_62930 = cljs.core.PersistentHashMap.fromArrays(inst_62927,inst_62929);
var inst_62931 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_62926,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_62930], 0));
var state_62950__$1 = state_62950;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62950__$1,(2),inst_62931);
} else {
if((state_val_62951 === (2))){
var inst_62933 = (state_62950[(2)]);
var inst_62934 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_62935 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_62933);
var inst_62936 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_62934,inst_62935);
var inst_62937 = re_frame.core.dispatch(inst_62936);
var inst_62938 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_62950__$1 = (function (){var statearr_62952 = state_62950;
(statearr_62952[(7)] = inst_62937);

return statearr_62952;
})();
if(cljs.core.truth_(inst_62938)){
var statearr_62953_63315 = state_62950__$1;
(statearr_62953_63315[(1)] = (3));

} else {
var statearr_62954_63316 = state_62950__$1;
(statearr_62954_63316[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62951 === (3))){
var inst_62940 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62941 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_62942 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_62943 = [inst_62941,inst_62942];
var inst_62944 = (new cljs.core.PersistentVector(null,2,(5),inst_62940,inst_62943,null));
var inst_62945 = re_frame.core.dispatch(inst_62944);
var state_62950__$1 = state_62950;
var statearr_62955_63317 = state_62950__$1;
(statearr_62955_63317[(2)] = inst_62945);

(statearr_62955_63317[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62951 === (4))){
var state_62950__$1 = state_62950;
var statearr_62956_63318 = state_62950__$1;
(statearr_62956_63318[(2)] = null);

(statearr_62956_63318[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62951 === (5))){
var inst_62948 = (state_62950[(2)]);
var state_62950__$1 = state_62950;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62950__$1,inst_62948);
} else {
return null;
}
}
}
}
}
});
return (function() {
var kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto____0 = (function (){
var statearr_62957 = [null,null,null,null,null,null,null,null];
(statearr_62957[(0)] = kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto__);

(statearr_62957[(1)] = (1));

return statearr_62957;
});
var kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto____1 = (function (state_62950){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_62950);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e62958){var ex__27913__auto__ = e62958;
var statearr_62959_63319 = state_62950;
(statearr_62959_63319[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_62950[(4)]))){
var statearr_62960_63320 = state_62950;
(statearr_62960_63320[(1)] = cljs.core.first((state_62950[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63321 = state_62950;
state_62950 = G__63321;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto__ = function(state_62950){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto____1.call(this,state_62950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto__;
})()
})();
var state__27981__auto__ = (function (){var statearr_62961 = f__27980__auto__();
(statearr_62961[(6)] = c__27979__auto__);

return statearr_62961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
}));

return c__27979__auto__;
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http-put-dispatch","http-put-dispatch",-484936711),kdlyticsgui.mount.http_put_dispatch);
kdlyticsgui.mount.simple_http_get_events = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-naked-positions","get-naked-positions",851863850),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"naked-position-transit-array",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"naked-positions","naked-positions",-1170378384),new cljs.core.Keyword(null,"mounting-modal","mounting-modal",-1411315623),true], null)], null);
kdlyticsgui.mount.simple_http_assets = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472),new cljs.core.Keyword(null,"namespace","namespace",-377510372),"common.static",new cljs.core.Keyword(null,"asset","asset",-280274466),"portfolios",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null)], null)], null);
var seq__62962_63322 = cljs.core.seq(kdlyticsgui.mount.simple_http_get_events);
var chunk__62963_63323 = null;
var count__62964_63324 = (0);
var i__62965_63325 = (0);
while(true){
if((i__62965_63325 < count__62964_63324)){
var line_63326 = chunk__62963_63323.cljs$core$IIndexed$_nth$arity$2(null,i__62965_63325);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-key","get-key",1436017019).cljs$core$IFn$_invoke$arity$1(line_63326),((function (seq__62962_63322,chunk__62963_63323,count__62964_63324,i__62965_63325,line_63326){
return (function (p__62978,p__62979){
var map__62980 = p__62978;
var map__62980__$1 = cljs.core.__destructure_map(map__62980);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62980__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__62981 = p__62979;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62981,(0),null);
if((cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dis-key","dis-key",842897221).cljs$core$IFn$_invoke$arity$1(line_63326)], null))) === (0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(cljs.core.truth_(new cljs.core.Keyword(null,"mounting-modal","mounting-modal",-1411315623).cljs$core$IFn$_invoke$arity$1(line_63326))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),true):db),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url-tail","url-tail",144006528).cljs$core$IFn$_invoke$arity$1(line_63326))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dis-key","dis-key",842897221).cljs$core$IFn$_invoke$arity$1(line_63326)], null)], null)], null);
} else {
return null;
}
});})(seq__62962_63322,chunk__62963_63323,count__62964_63324,i__62965_63325,line_63326))
);


var G__63327 = seq__62962_63322;
var G__63328 = chunk__62963_63323;
var G__63329 = count__62964_63324;
var G__63330 = (i__62965_63325 + (1));
seq__62962_63322 = G__63327;
chunk__62963_63323 = G__63328;
count__62964_63324 = G__63329;
i__62965_63325 = G__63330;
continue;
} else {
var temp__5804__auto___63331 = cljs.core.seq(seq__62962_63322);
if(temp__5804__auto___63331){
var seq__62962_63332__$1 = temp__5804__auto___63331;
if(cljs.core.chunked_seq_QMARK_(seq__62962_63332__$1)){
var c__5568__auto___63333 = cljs.core.chunk_first(seq__62962_63332__$1);
var G__63334 = cljs.core.chunk_rest(seq__62962_63332__$1);
var G__63335 = c__5568__auto___63333;
var G__63336 = cljs.core.count(c__5568__auto___63333);
var G__63337 = (0);
seq__62962_63322 = G__63334;
chunk__62963_63323 = G__63335;
count__62964_63324 = G__63336;
i__62965_63325 = G__63337;
continue;
} else {
var line_63338 = cljs.core.first(seq__62962_63332__$1);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-key","get-key",1436017019).cljs$core$IFn$_invoke$arity$1(line_63338),((function (seq__62962_63322,chunk__62963_63323,count__62964_63324,i__62965_63325,line_63338,seq__62962_63332__$1,temp__5804__auto___63331){
return (function (p__62984,p__62985){
var map__62986 = p__62984;
var map__62986__$1 = cljs.core.__destructure_map(map__62986);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62986__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__62987 = p__62985;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62987,(0),null);
if((cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dis-key","dis-key",842897221).cljs$core$IFn$_invoke$arity$1(line_63338)], null))) === (0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(cljs.core.truth_(new cljs.core.Keyword(null,"mounting-modal","mounting-modal",-1411315623).cljs$core$IFn$_invoke$arity$1(line_63338))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),true):db),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url-tail","url-tail",144006528).cljs$core$IFn$_invoke$arity$1(line_63338))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dis-key","dis-key",842897221).cljs$core$IFn$_invoke$arity$1(line_63338)], null)], null)], null);
} else {
return null;
}
});})(seq__62962_63322,chunk__62963_63323,count__62964_63324,i__62965_63325,line_63338,seq__62962_63332__$1,temp__5804__auto___63331))
);


var G__63339 = cljs.core.next(seq__62962_63332__$1);
var G__63340 = null;
var G__63341 = (0);
var G__63342 = (0);
seq__62962_63322 = G__63339;
chunk__62963_63323 = G__63340;
count__62964_63324 = G__63341;
i__62965_63325 = G__63342;
continue;
}
} else {
}
}
break;
}
var seq__62990_63343 = cljs.core.seq(kdlyticsgui.mount.simple_http_assets);
var chunk__62991_63344 = null;
var count__62992_63345 = (0);
var i__62993_63346 = (0);
while(true){
if((i__62993_63346 < count__62992_63345)){
var line_63347 = chunk__62991_63344.cljs$core$IIndexed$_nth$arity$2(null,i__62993_63346);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-key","get-key",1436017019).cljs$core$IFn$_invoke$arity$1(line_63347),((function (seq__62990_63343,chunk__62991_63344,count__62992_63345,i__62993_63346,line_63347){
return (function (p__63006,p__63007){
var map__63008 = p__63006;
var map__63008__$1 = cljs.core.__destructure_map(map__63008);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63008__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63009 = p__63007;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63009,(0),null);
if((cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(line_63347))) === (0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(cljs.core.truth_(new cljs.core.Keyword(null,"mounting-modal","mounting-modal",-1411315623).cljs$core$IFn$_invoke$arity$1(line_63347))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),true):db),new cljs.core.Keyword(null,"http-get-asset","http-get-asset",1501716308),line_63347], null);
} else {
return null;
}
});})(seq__62990_63343,chunk__62991_63344,count__62992_63345,i__62993_63346,line_63347))
);


var G__63348 = seq__62990_63343;
var G__63349 = chunk__62991_63344;
var G__63350 = count__62992_63345;
var G__63351 = (i__62993_63346 + (1));
seq__62990_63343 = G__63348;
chunk__62991_63344 = G__63349;
count__62992_63345 = G__63350;
i__62993_63346 = G__63351;
continue;
} else {
var temp__5804__auto___63352 = cljs.core.seq(seq__62990_63343);
if(temp__5804__auto___63352){
var seq__62990_63353__$1 = temp__5804__auto___63352;
if(cljs.core.chunked_seq_QMARK_(seq__62990_63353__$1)){
var c__5568__auto___63354 = cljs.core.chunk_first(seq__62990_63353__$1);
var G__63355 = cljs.core.chunk_rest(seq__62990_63353__$1);
var G__63356 = c__5568__auto___63354;
var G__63357 = cljs.core.count(c__5568__auto___63354);
var G__63358 = (0);
seq__62990_63343 = G__63355;
chunk__62991_63344 = G__63356;
count__62992_63345 = G__63357;
i__62993_63346 = G__63358;
continue;
} else {
var line_63359 = cljs.core.first(seq__62990_63353__$1);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-key","get-key",1436017019).cljs$core$IFn$_invoke$arity$1(line_63359),((function (seq__62990_63343,chunk__62991_63344,count__62992_63345,i__62993_63346,line_63359,seq__62990_63353__$1,temp__5804__auto___63352){
return (function (p__63012,p__63013){
var map__63014 = p__63012;
var map__63014__$1 = cljs.core.__destructure_map(map__63014);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63014__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63015 = p__63013;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63015,(0),null);
if((cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(line_63359))) === (0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(cljs.core.truth_(new cljs.core.Keyword(null,"mounting-modal","mounting-modal",-1411315623).cljs$core$IFn$_invoke$arity$1(line_63359))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),true):db),new cljs.core.Keyword(null,"http-get-asset","http-get-asset",1501716308),line_63359], null);
} else {
return null;
}
});})(seq__62990_63343,chunk__62991_63344,count__62992_63345,i__62993_63346,line_63359,seq__62990_63353__$1,temp__5804__auto___63352))
);


var G__63360 = cljs.core.next(seq__62990_63353__$1);
var G__63361 = null;
var G__63362 = (0);
var G__63363 = (0);
seq__62990_63343 = G__63360;
chunk__62991_63344 = G__63361;
count__62992_63345 = G__63362;
i__62993_63346 = G__63363;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-wealth-summary","get-wealth-summary",1541098912),(function (p__63018,p__63019){
var map__63020 = p__63018;
var map__63020__$1 = cljs.core.__destructure_map(map__63020);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63020__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63021 = p__63019;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63021,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"wealth-summary"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-summary","positions-summary",-17081762)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions-summary","get-positions-summary",1710688354),(function (p__63024,p__63025){
var map__63026 = p__63024;
var map__63026__$1 = cljs.core.__destructure_map(map__63026);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63026__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63027 = p__63025;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63027,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"positions-summary"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-summary","positions-summary",-17081762)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions-top10","get-positions-top10",585407224),(function (p__63030,p__63031){
var map__63032 = p__63030;
var map__63032__$1 = cljs.core.__destructure_map(map__63032);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63032__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63033 = p__63031;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63033,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"positions-top10"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-top10","positions-top10",-1668533732)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions-characteristics","get-positions-characteristics",749074961),(function (p__63036,p__63037){
var map__63038 = p__63036;
var map__63038__$1 = cljs.core.__destructure_map(map__63038);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63038__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63039 = p__63037;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63039,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"positions-characteristics"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-characteristics","positions-characteristics",-170272672)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions-strategy-exposure","get-positions-strategy-exposure",-931353461),(function (p__63042,p__63043){
var map__63044 = p__63042;
var map__63044__$1 = cljs.core.__destructure_map(map__63044);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63044__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63045 = p__63043;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63045,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"positions-strategy-exposure"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-strategy-exposure","positions-strategy-exposure",1394640320)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-vault-summary","get-vault-summary",1161003768),(function (p__63048,p__63049){
var map__63050 = p__63048;
var map__63050__$1 = cljs.core.__destructure_map(map__63050);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63050__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63051 = p__63049;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63051,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"vault-summary"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vault-summary","vault-summary",-407259781)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-cellar-summary","get-cellar-summary",644275392),(function (p__63054,p__63055){
var map__63056 = p__63054;
var map__63056__$1 = cljs.core.__destructure_map(map__63056);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63056__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63057 = p__63055;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63057,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"cellar-summary"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cellar-summary","cellar-summary",271980210)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"receive-price-history-data","receive-price-history-data",1513500215),(function (db,p__63060){
var vec__63061 = p__63060;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63061,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63061,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("price-history","data","price-history/data",1268424495),data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("price-history","show-throbber","price-history/show-throbber",-2145949059),false], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-price-history","get-price-history",-1088732947),(function (p__63064,p__63065){
var map__63066 = p__63064;
var map__63066__$1 = cljs.core.__destructure_map(map__63066);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63066__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63067 = p__63065;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63067,(0),null);
var ticker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63067,(1),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63067,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("price-history","ticker","price-history/ticker",1464015546),ticker,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("price-history","name","price-history/name",-1535942599),name,new cljs.core.Keyword("price-history","show-modal","price-history/show-modal",1439463911),true,new cljs.core.Keyword("price-history","show-throbber","price-history/show-throbber",-2145949059),true], 0)),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"price-history?ticker=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ticker)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"receive-price-history-data","receive-price-history-data",1513500215)], null)], null)], null);
}));

//# sourceMappingURL=kdlyticsgui.mount.js.map
