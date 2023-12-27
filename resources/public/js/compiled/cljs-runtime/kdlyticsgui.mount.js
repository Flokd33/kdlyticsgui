goog.provide('kdlyticsgui.mount');
kdlyticsgui.mount.default_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"positions-characteristics","positions-characteristics",-170272672),new cljs.core.Keyword(null,"positions-strategy-exposure","positions-strategy-exposure",1394640320),new cljs.core.Keyword(null,"test-data","test-data",805102338),new cljs.core.Keyword("navigation","success-modal","navigation/success-modal",533446693),new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),new cljs.core.Keyword("navigation","active-section","navigation/active-section",-1272053018),new cljs.core.Keyword("price-history","show-modal","price-history/show-modal",1439463911),new cljs.core.Keyword("navigation","success-compile","navigation/success-compile",33558826),new cljs.core.Keyword(null,"rot13","rot13",-631596017),new cljs.core.Keyword("price-history","data","price-history/data",1268424495),new cljs.core.Keyword(null,"cellar-summary","cellar-summary",271980210),new cljs.core.Keyword(null,"wealth-summary","wealth-summary",-699570376),new cljs.core.Keyword("price-history","name","price-history/name",-1535942599),new cljs.core.Keyword("price-history","ticker","price-history/ticker",1464015546),new cljs.core.Keyword(null,"vault-summary","vault-summary",-407259781),new cljs.core.Keyword(null,"positions-top10","positions-top10",-1668533732),new cljs.core.Keyword("price-history","show-throbber","price-history/show-throbber",-2145949059),new cljs.core.Keyword(null,"dummy","dummy",2059765854),new cljs.core.Keyword(null,"positions-summary","positions-summary",-17081762)],[cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show","show",-576705889),false,new cljs.core.Keyword(null,"on-close","on-close",-761178394),null,new cljs.core.Keyword(null,"response","response",-1068424192),null], null),false,new cljs.core.Keyword(null,"entry","entry",505168823),false,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show","show",-576705889),false,new cljs.core.Keyword(null,"on-close","on-close",-761178394),null,new cljs.core.Keyword(null,"response","response",-1068424192),null], null),false,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,false,null,cljs.core.PersistentVector.EMPTY]);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kdlyticsgui.mount","initialize-db","kdlyticsgui.mount/initialize-db",-798563823),(function (_,___$1){
return kdlyticsgui.mount.default_db;
}));
var seq__30081_31067 = cljs.core.seq(cljs.core.keys(kdlyticsgui.mount.default_db));
var chunk__30082_31068 = null;
var count__30083_31069 = (0);
var i__30084_31070 = (0);
while(true){
if((i__30084_31070 < count__30083_31069)){
var k_31071 = chunk__30082_31068.cljs$core$IIndexed$_nth$arity$2(null,i__30084_31070);
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(k_31071,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (seq__30081_31067,chunk__30082_31068,count__30083_31069,i__30084_31070,k_31071){
return (function (db){
return (k_31071.cljs$core$IFn$_invoke$arity$1 ? k_31071.cljs$core$IFn$_invoke$arity$1(db) : k_31071.call(null,db));
});})(seq__30081_31067,chunk__30082_31068,count__30083_31069,i__30084_31070,k_31071))
], 0));


var G__31072 = seq__30081_31067;
var G__31073 = chunk__30082_31068;
var G__31074 = count__30083_31069;
var G__31075 = (i__30084_31070 + (1));
seq__30081_31067 = G__31072;
chunk__30082_31068 = G__31073;
count__30083_31069 = G__31074;
i__30084_31070 = G__31075;
continue;
} else {
var temp__5804__auto___31076 = cljs.core.seq(seq__30081_31067);
if(temp__5804__auto___31076){
var seq__30081_31077__$1 = temp__5804__auto___31076;
if(cljs.core.chunked_seq_QMARK_(seq__30081_31077__$1)){
var c__5568__auto___31078 = cljs.core.chunk_first(seq__30081_31077__$1);
var G__31079 = cljs.core.chunk_rest(seq__30081_31077__$1);
var G__31080 = c__5568__auto___31078;
var G__31081 = cljs.core.count(c__5568__auto___31078);
var G__31082 = (0);
seq__30081_31067 = G__31079;
chunk__30082_31068 = G__31080;
count__30083_31069 = G__31081;
i__30084_31070 = G__31082;
continue;
} else {
var k_31083 = cljs.core.first(seq__30081_31077__$1);
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(k_31083,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (seq__30081_31067,chunk__30082_31068,count__30083_31069,i__30084_31070,k_31083,seq__30081_31077__$1,temp__5804__auto___31076){
return (function (db){
return (k_31083.cljs$core$IFn$_invoke$arity$1 ? k_31083.cljs$core$IFn$_invoke$arity$1(db) : k_31083.call(null,db));
});})(seq__30081_31067,chunk__30082_31068,count__30083_31069,i__30084_31070,k_31083,seq__30081_31077__$1,temp__5804__auto___31076))
], 0));


var G__31084 = cljs.core.next(seq__30081_31077__$1);
var G__31085 = null;
var G__31086 = (0);
var G__31087 = (0);
seq__30081_31067 = G__31084;
chunk__30082_31068 = G__31085;
count__30083_31069 = G__31086;
i__30084_31070 = G__31087;
continue;
}
} else {
}
}
break;
}
var seq__30085_31088 = cljs.core.seq(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rot13","rot13",-631596017),new cljs.core.Keyword(null,"test-data","test-data",805102338),new cljs.core.Keyword("navigation","active-section","navigation/active-section",-1272053018),new cljs.core.Keyword(null,"wealth-summary","wealth-summary",-699570376),new cljs.core.Keyword(null,"positions-summary","positions-summary",-17081762),new cljs.core.Keyword(null,"positions-top10","positions-top10",-1668533732),new cljs.core.Keyword(null,"positions-characteristics","positions-characteristics",-170272672),new cljs.core.Keyword(null,"positions-strategy-exposure","positions-strategy-exposure",1394640320),new cljs.core.Keyword(null,"cellar-summary","cellar-summary",271980210),new cljs.core.Keyword(null,"vault-summary","vault-summary",-407259781),new cljs.core.Keyword("price-history","data","price-history/data",1268424495),new cljs.core.Keyword("price-history","ticker","price-history/ticker",1464015546),new cljs.core.Keyword("price-history","name","price-history/name",-1535942599),new cljs.core.Keyword("price-history","show-modal","price-history/show-modal",1439463911),new cljs.core.Keyword("price-history","show-throbber","price-history/show-throbber",-2145949059),new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254)], null));
var chunk__30086_31089 = null;
var count__30087_31090 = (0);
var i__30088_31091 = (0);
while(true){
if((i__30088_31091 < count__30087_31090)){
var k_31092 = chunk__30086_31089.cljs$core$IIndexed$_nth$arity$2(null,i__30088_31091);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_31092,((function (seq__30085_31088,chunk__30086_31089,count__30087_31090,i__30088_31091,k_31092){
return (function (db,p__30097){
var vec__30098 = p__30097;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30098,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30098,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_31092,data);
});})(seq__30085_31088,chunk__30086_31089,count__30087_31090,i__30088_31091,k_31092))
);


var G__31093 = seq__30085_31088;
var G__31094 = chunk__30086_31089;
var G__31095 = count__30087_31090;
var G__31096 = (i__30088_31091 + (1));
seq__30085_31088 = G__31093;
chunk__30086_31089 = G__31094;
count__30087_31090 = G__31095;
i__30088_31091 = G__31096;
continue;
} else {
var temp__5804__auto___31097 = cljs.core.seq(seq__30085_31088);
if(temp__5804__auto___31097){
var seq__30085_31098__$1 = temp__5804__auto___31097;
if(cljs.core.chunked_seq_QMARK_(seq__30085_31098__$1)){
var c__5568__auto___31099 = cljs.core.chunk_first(seq__30085_31098__$1);
var G__31100 = cljs.core.chunk_rest(seq__30085_31098__$1);
var G__31101 = c__5568__auto___31099;
var G__31102 = cljs.core.count(c__5568__auto___31099);
var G__31103 = (0);
seq__30085_31088 = G__31100;
chunk__30086_31089 = G__31101;
count__30087_31090 = G__31102;
i__30088_31091 = G__31103;
continue;
} else {
var k_31104 = cljs.core.first(seq__30085_31098__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_31104,((function (seq__30085_31088,chunk__30086_31089,count__30087_31090,i__30088_31091,k_31104,seq__30085_31098__$1,temp__5804__auto___31097){
return (function (db,p__30101){
var vec__30102 = p__30101;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30102,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30102,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_31104,data);
});})(seq__30085_31088,chunk__30086_31089,count__30087_31090,i__30088_31091,k_31104,seq__30085_31098__$1,temp__5804__auto___31097))
);


var G__31105 = cljs.core.next(seq__30085_31098__$1);
var G__31106 = null;
var G__31107 = (0);
var G__31108 = (0);
seq__30085_31088 = G__31105;
chunk__30086_31089 = G__31106;
count__30087_31090 = G__31107;
i__30088_31091 = G__31108;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("navigation","active","navigation/active",-1285216),(function (db,p__30105){
var vec__30106 = p__30105;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30106,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30106,(1),null);
var sub_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30106,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","active","navigation/active",-1285216),page], null),sub_page);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"instruments","instruments",-69874543),(function (p__30110,p__30111){
var map__30112 = p__30110;
var map__30112__$1 = cljs.core.__destructure_map(map__30112);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30112__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30113 = p__30111;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30113,(0),null);
var instruments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30113,(1),null);
var positions = (cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db),cljs.core.PersistentVector.EMPTY);
if(and__5043__auto__){
return new cljs.core.Keyword(null,"naked-positions","naked-positions",-1170378384).cljs$core$IFn$_invoke$arity$1(db);
} else {
return and__5043__auto__;
}
})())?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30109_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__30109_SHARP_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instruments","instruments",-69874543),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__30109_SHARP_)], null))], 0));
}),new cljs.core.Keyword(null,"naked-positions","naked-positions",-1170378384).cljs$core$IFn$_invoke$arity$1(db)):cljs.core.PersistentVector.EMPTY);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"all-instrument-ids","all-instrument-ids",-1013285519),cljs.core.keys(instruments),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"instruments","instruments",-69874543),instruments,new cljs.core.Keyword(null,"positions","positions",-1380538434),positions,new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(positions,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("implementation","live-positions","implementation/live-positions",1202101052),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function kdlyticsgui$mount$iter__30116(s__30117){
return (new cljs.core.LazySeq(null,(function (){
var s__30117__$1 = s__30117;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30117__$1);
if(temp__5804__auto__){
var s__30117__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30117__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30117__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30119 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30118 = (0);
while(true){
if((i__30118 < size__5522__auto__)){
var vec__30120 = cljs.core._nth(c__5521__auto__,i__30118);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30120,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30120,(1),null);
cljs.core.chunk_append(b__30119,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = ((function (i__30118,vec__30120,p,g,c__5521__auto__,size__5522__auto__,b__30119,s__30117__$2,temp__5804__auto__,positions,map__30112,map__30112__$1,db,vec__30113,_,instruments){
return (function kdlyticsgui$mount$iter__30116_$_iter__30123(s__30124){
return (new cljs.core.LazySeq(null,((function (i__30118,vec__30120,p,g,c__5521__auto__,size__5522__auto__,b__30119,s__30117__$2,temp__5804__auto__,positions,map__30112,map__30112__$1,db,vec__30113,_,instruments){
return (function (){
var s__30124__$1 = s__30124;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__30124__$1);
if(temp__5804__auto____$1){
var s__30124__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30124__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__30124__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__30126 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__30125 = (0);
while(true){
if((i__30125 < size__5522__auto____$1)){
var line = cljs.core._nth(c__5521__auto____$1,i__30125);
if((((!((new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line) == null)))) && ((new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line) > (0))))){
cljs.core.chunk_append(b__30126,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line)], null));

var G__31109 = (i__30125 + (1));
i__30125 = G__31109;
continue;
} else {
var G__31110 = (i__30125 + (1));
i__30125 = G__31110;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30126),kdlyticsgui$mount$iter__30116_$_iter__30123(cljs.core.chunk_rest(s__30124__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30126),null);
}
} else {
var line = cljs.core.first(s__30124__$2);
if((((!((new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line) == null)))) && ((new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line) > (0))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line)], null),kdlyticsgui$mount$iter__30116_$_iter__30123(cljs.core.rest(s__30124__$2)));
} else {
var G__31111 = cljs.core.rest(s__30124__$2);
s__30124__$1 = G__31111;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__30118,vec__30120,p,g,c__5521__auto__,size__5522__auto__,b__30119,s__30117__$2,temp__5804__auto__,positions,map__30112,map__30112__$1,db,vec__30113,_,instruments))
,null,null));
});})(i__30118,vec__30120,p,g,c__5521__auto__,size__5522__auto__,b__30119,s__30117__$2,temp__5804__auto__,positions,map__30112,map__30112__$1,db,vec__30113,_,instruments))
;
return iter__5523__auto__(g);
})())], null));

var G__31112 = (i__30118 + (1));
i__30118 = G__31112;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30119),kdlyticsgui$mount$iter__30116(cljs.core.chunk_rest(s__30117__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30119),null);
}
} else {
var vec__30127 = cljs.core.first(s__30117__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30127,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30127,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = ((function (vec__30127,p,g,s__30117__$2,temp__5804__auto__,positions,map__30112,map__30112__$1,db,vec__30113,_,instruments){
return (function kdlyticsgui$mount$iter__30116_$_iter__30130(s__30131){
return (new cljs.core.LazySeq(null,(function (){
var s__30131__$1 = s__30131;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__30131__$1);
if(temp__5804__auto____$1){
var s__30131__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30131__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30131__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30133 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30132 = (0);
while(true){
if((i__30132 < size__5522__auto__)){
var line = cljs.core._nth(c__5521__auto__,i__30132);
if((((!((new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line) == null)))) && ((new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line) > (0))))){
cljs.core.chunk_append(b__30133,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line)], null));

var G__31113 = (i__30132 + (1));
i__30132 = G__31113;
continue;
} else {
var G__31114 = (i__30132 + (1));
i__30132 = G__31114;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30133),kdlyticsgui$mount$iter__30116_$_iter__30130(cljs.core.chunk_rest(s__30131__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30133),null);
}
} else {
var line = cljs.core.first(s__30131__$2);
if((((!((new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line) == null)))) && ((new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line) > (0))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line)], null),kdlyticsgui$mount$iter__30116_$_iter__30130(cljs.core.rest(s__30131__$2)));
} else {
var G__31115 = cljs.core.rest(s__30131__$2);
s__30131__$1 = G__31115;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__30127,p,g,s__30117__$2,temp__5804__auto__,positions,map__30112,map__30112__$1,db,vec__30113,_,instruments))
;
return iter__5523__auto__(g);
})())], null),kdlyticsgui$mount$iter__30116(cljs.core.rest(s__30117__$2)));
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
var seq__30134_31116 = cljs.core.seq(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219),new cljs.core.Keyword("portfolio-history","filter","portfolio-history/filter",1821014145),new cljs.core.Keyword("attribution-history","filter","attribution-history/filter",-868840340)], null));
var chunk__30135_31117 = null;
var count__30136_31118 = (0);
var i__30137_31119 = (0);
while(true){
if((i__30137_31119 < count__30136_31118)){
var k_31120 = chunk__30135_31117.cljs$core$IIndexed$_nth$arity$2(null,i__30137_31119);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_31120,((function (seq__30134_31116,chunk__30135_31117,count__30136_31118,i__30137_31119,k_31120){
return (function (db,p__30146){
var vec__30147 = p__30146;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30147,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30147,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30147,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_31120,id], null),f);
});})(seq__30134_31116,chunk__30135_31117,count__30136_31118,i__30137_31119,k_31120))
);


var G__31121 = seq__30134_31116;
var G__31122 = chunk__30135_31117;
var G__31123 = count__30136_31118;
var G__31124 = (i__30137_31119 + (1));
seq__30134_31116 = G__31121;
chunk__30135_31117 = G__31122;
count__30136_31118 = G__31123;
i__30137_31119 = G__31124;
continue;
} else {
var temp__5804__auto___31125 = cljs.core.seq(seq__30134_31116);
if(temp__5804__auto___31125){
var seq__30134_31126__$1 = temp__5804__auto___31125;
if(cljs.core.chunked_seq_QMARK_(seq__30134_31126__$1)){
var c__5568__auto___31127 = cljs.core.chunk_first(seq__30134_31126__$1);
var G__31128 = cljs.core.chunk_rest(seq__30134_31126__$1);
var G__31129 = c__5568__auto___31127;
var G__31130 = cljs.core.count(c__5568__auto___31127);
var G__31131 = (0);
seq__30134_31116 = G__31128;
chunk__30135_31117 = G__31129;
count__30136_31118 = G__31130;
i__30137_31119 = G__31131;
continue;
} else {
var k_31132 = cljs.core.first(seq__30134_31126__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_31132,((function (seq__30134_31116,chunk__30135_31117,count__30136_31118,i__30137_31119,k_31132,seq__30134_31126__$1,temp__5804__auto___31125){
return (function (db,p__30150){
var vec__30151 = p__30150;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30151,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30151,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30151,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_31132,id], null),f);
});})(seq__30134_31116,chunk__30135_31117,count__30136_31118,i__30137_31119,k_31132,seq__30134_31126__$1,temp__5804__auto___31125))
);


var G__31133 = cljs.core.next(seq__30134_31126__$1);
var G__31134 = null;
var G__31135 = (0);
var G__31136 = (0);
seq__30134_31116 = G__31133;
chunk__30135_31117 = G__31134;
count__30136_31118 = G__31135;
i__30137_31119 = G__31136;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),(function (db,p__30154){
var vec__30155 = p__30154;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30155,(0),null);
var qt_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30155,(1),null);
var dt = qt_date.replace("\"","");
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),dt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("portfolio-history","end-period","portfolio-history/end-period",1624676397),kdlyticsgui.tools.gdate__GT_yyyyMMdd(kdlyticsgui.tools.ddMMMyyyy__GT_gdate(dt))], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),(function (db,p__30158){
var vec__30159 = p__30158;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30159,(0),null);
var attribution_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30159,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),attribution_date.replace("\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),(function (db,p__30162){
var vec__30163 = p__30162;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30163,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30163,(1),null);
var G__30166 = snapshot;
switch (G__30166) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30166)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),(function (db,p__30167){
var vec__30168 = p__30167;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30168,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30168,(1),null);
var G__30171 = snapshot;
switch (G__30171) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30171)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),(function (db,p__30172){
var vec__30173 = p__30172;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30173,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30173,(1),null);
var G__30176 = snapshot;
switch (G__30176) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30176)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cycle-shortcut","cycle-shortcut",-1617058214),(function (db,p__30177){
var vec__30178 = p__30177;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30178,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30178,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30178,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword("navigation","active-view","navigation/active-view",800211184).cljs$core$IFn$_invoke$arity$1(db)),"-risk/shortcut"].join(''));
var shortcut_value = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
if((shortcut_value < (4))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(shortcut_value + (1)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(1));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tree-table","tree-table",-1263002012),(function (db,p__30181){
var vec__30182 = p__30181;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30182,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30182,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30182,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword("navigation","active-view","navigation/active-view",800211184).cljs$core$IFn$_invoke$arity$1(db)),"-risk/display-style"].join(''));
var G__30185 = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
switch (G__30185) {
case "Tree":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Table");

break;
case "Table":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Tree");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30185)].join('')));

}
}));
/**
 * if response header is application/json keys will get keywordized automatically - otherwise send as text/plain
 */
kdlyticsgui.mount.http_get_dispatch = (function kdlyticsgui$mount$http_get_dispatch(request){
var vr = ((cljs.core.vector_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__30186 = cljs.core.seq(vr);
var chunk__30187 = null;
var count__30188 = (0);
var i__30189 = (0);
while(true){
if((i__30189 < count__30188)){
var r = chunk__30187.cljs$core$IIndexed$_nth$arity$2(null,i__30189);
var c__27979__auto___31156 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__30186,chunk__30187,count__30188,i__30189,c__27979__auto___31156,r,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__30186,chunk__30187,count__30188,i__30189,c__27979__auto___31156,r,vr){
return (function (state_30274){
var state_val_30275 = (state_30274[(1)]);
if((state_val_30275 === (1))){
var inst_30254 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_30255 = cljs_http.client.get(inst_30254);
var state_30274__$1 = state_30274;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30274__$1,(2),inst_30255);
} else {
if((state_val_30275 === (2))){
var inst_30257 = (state_30274[(2)]);
var inst_30258 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_30259 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_30257);
var inst_30260 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_30258,inst_30259);
var inst_30261 = re_frame.core.dispatch(inst_30260);
var inst_30262 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_30274__$1 = (function (){var statearr_30276 = state_30274;
(statearr_30276[(7)] = inst_30261);

return statearr_30276;
})();
if(cljs.core.truth_(inst_30262)){
var statearr_30277_31163 = state_30274__$1;
(statearr_30277_31163[(1)] = (3));

} else {
var statearr_30278_31164 = state_30274__$1;
(statearr_30278_31164[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30275 === (3))){
var inst_30264 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30265 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_30266 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_30267 = [inst_30265,inst_30266];
var inst_30268 = (new cljs.core.PersistentVector(null,2,(5),inst_30264,inst_30267,null));
var inst_30269 = re_frame.core.dispatch(inst_30268);
var state_30274__$1 = state_30274;
var statearr_30279_31165 = state_30274__$1;
(statearr_30279_31165[(2)] = inst_30269);

(statearr_30279_31165[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30275 === (4))){
var state_30274__$1 = state_30274;
var statearr_30280_31166 = state_30274__$1;
(statearr_30280_31166[(2)] = null);

(statearr_30280_31166[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30275 === (5))){
var inst_30272 = (state_30274[(2)]);
var state_30274__$1 = state_30274;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30274__$1,inst_30272);
} else {
return null;
}
}
}
}
}
});})(seq__30186,chunk__30187,count__30188,i__30189,c__27979__auto___31156,r,vr))
;
return ((function (seq__30186,chunk__30187,count__30188,i__30189,switch__27909__auto__,c__27979__auto___31156,r,vr){
return (function() {
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____0 = (function (){
var statearr_30281 = [null,null,null,null,null,null,null,null];
(statearr_30281[(0)] = kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__);

(statearr_30281[(1)] = (1));

return statearr_30281;
});
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____1 = (function (state_30274){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_30274);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e30282){var ex__27913__auto__ = e30282;
var statearr_30283_31167 = state_30274;
(statearr_30283_31167[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_30274[(4)]))){
var statearr_30284_31168 = state_30274;
(statearr_30284_31168[(1)] = cljs.core.first((state_30274[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31169 = state_30274;
state_30274 = G__31169;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__ = function(state_30274){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____1.call(this,state_30274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__;
})()
;})(seq__30186,chunk__30187,count__30188,i__30189,switch__27909__auto__,c__27979__auto___31156,r,vr))
})();
var state__27981__auto__ = (function (){var statearr_30285 = f__27980__auto__();
(statearr_30285[(6)] = c__27979__auto___31156);

return statearr_30285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__30186,chunk__30187,count__30188,i__30189,c__27979__auto___31156,r,vr))
);



var G__31170 = seq__30186;
var G__31171 = chunk__30187;
var G__31172 = count__30188;
var G__31173 = (i__30189 + (1));
seq__30186 = G__31170;
chunk__30187 = G__31171;
count__30188 = G__31172;
i__30189 = G__31173;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30186);
if(temp__5804__auto__){
var seq__30186__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30186__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30186__$1);
var G__31175 = cljs.core.chunk_rest(seq__30186__$1);
var G__31176 = c__5568__auto__;
var G__31177 = cljs.core.count(c__5568__auto__);
var G__31178 = (0);
seq__30186 = G__31175;
chunk__30187 = G__31176;
count__30188 = G__31177;
i__30189 = G__31178;
continue;
} else {
var r = cljs.core.first(seq__30186__$1);
var c__27979__auto___31179 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__30186,chunk__30187,count__30188,i__30189,c__27979__auto___31179,r,seq__30186__$1,temp__5804__auto__,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__30186,chunk__30187,count__30188,i__30189,c__27979__auto___31179,r,seq__30186__$1,temp__5804__auto__,vr){
return (function (state_30306){
var state_val_30307 = (state_30306[(1)]);
if((state_val_30307 === (1))){
var inst_30286 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_30287 = cljs_http.client.get(inst_30286);
var state_30306__$1 = state_30306;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30306__$1,(2),inst_30287);
} else {
if((state_val_30307 === (2))){
var inst_30289 = (state_30306[(2)]);
var inst_30290 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_30291 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_30289);
var inst_30292 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_30290,inst_30291);
var inst_30293 = re_frame.core.dispatch(inst_30292);
var inst_30294 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_30306__$1 = (function (){var statearr_30308 = state_30306;
(statearr_30308[(7)] = inst_30293);

return statearr_30308;
})();
if(cljs.core.truth_(inst_30294)){
var statearr_30309_31180 = state_30306__$1;
(statearr_30309_31180[(1)] = (3));

} else {
var statearr_30310_31181 = state_30306__$1;
(statearr_30310_31181[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30307 === (3))){
var inst_30296 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30297 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_30298 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_30299 = [inst_30297,inst_30298];
var inst_30300 = (new cljs.core.PersistentVector(null,2,(5),inst_30296,inst_30299,null));
var inst_30301 = re_frame.core.dispatch(inst_30300);
var state_30306__$1 = state_30306;
var statearr_30311_31182 = state_30306__$1;
(statearr_30311_31182[(2)] = inst_30301);

(statearr_30311_31182[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30307 === (4))){
var state_30306__$1 = state_30306;
var statearr_30312_31183 = state_30306__$1;
(statearr_30312_31183[(2)] = null);

(statearr_30312_31183[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30307 === (5))){
var inst_30304 = (state_30306[(2)]);
var state_30306__$1 = state_30306;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30306__$1,inst_30304);
} else {
return null;
}
}
}
}
}
});})(seq__30186,chunk__30187,count__30188,i__30189,c__27979__auto___31179,r,seq__30186__$1,temp__5804__auto__,vr))
;
return ((function (seq__30186,chunk__30187,count__30188,i__30189,switch__27909__auto__,c__27979__auto___31179,r,seq__30186__$1,temp__5804__auto__,vr){
return (function() {
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____0 = (function (){
var statearr_30313 = [null,null,null,null,null,null,null,null];
(statearr_30313[(0)] = kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__);

(statearr_30313[(1)] = (1));

return statearr_30313;
});
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____1 = (function (state_30306){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_30306);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e30314){var ex__27913__auto__ = e30314;
var statearr_30315_31184 = state_30306;
(statearr_30315_31184[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_30306[(4)]))){
var statearr_30316_31185 = state_30306;
(statearr_30316_31185[(1)] = cljs.core.first((state_30306[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31186 = state_30306;
state_30306 = G__31186;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__ = function(state_30306){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____1.call(this,state_30306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__;
})()
;})(seq__30186,chunk__30187,count__30188,i__30189,switch__27909__auto__,c__27979__auto___31179,r,seq__30186__$1,temp__5804__auto__,vr))
})();
var state__27981__auto__ = (function (){var statearr_30317 = f__27980__auto__();
(statearr_30317[(6)] = c__27979__auto___31179);

return statearr_30317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__30186,chunk__30187,count__30188,i__30189,c__27979__auto___31179,r,seq__30186__$1,temp__5804__auto__,vr))
);



var G__31187 = cljs.core.next(seq__30186__$1);
var G__31188 = null;
var G__31189 = (0);
var G__31190 = (0);
seq__30186 = G__31187;
chunk__30187 = G__31188;
count__30188 = G__31189;
i__30189 = G__31190;
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
var seq__30318 = cljs.core.seq(vr);
var chunk__30319 = null;
var count__30320 = (0);
var i__30321 = (0);
while(true){
if((i__30321 < count__30320)){
var r = chunk__30319.cljs$core$IIndexed$_nth$arity$2(null,i__30321);
var c__27979__auto___31191 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__30318,chunk__30319,count__30320,i__30321,c__27979__auto___31191,r,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__30318,chunk__30319,count__30320,i__30321,c__27979__auto___31191,r,vr){
return (function (state_30412){
var state_val_30413 = (state_30412[(1)]);
if((state_val_30413 === (1))){
var inst_30390 = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(request);
var inst_30391 = new cljs.core.Keyword(null,"asset","asset",-280274466).cljs$core$IFn$_invoke$arity$1(request);
var inst_30392 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"asset?namespace=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30390),"&asset=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30391)].join('');
var inst_30393 = cljs_http.client.get(inst_30392);
var state_30412__$1 = state_30412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30412__$1,(2),inst_30393);
} else {
if((state_val_30413 === (2))){
var inst_30395 = (state_30412[(2)]);
var inst_30396 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_30397 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_30395);
var inst_30398 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_30396,inst_30397);
var inst_30399 = re_frame.core.dispatch(inst_30398);
var inst_30400 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_30412__$1 = (function (){var statearr_30414 = state_30412;
(statearr_30414[(7)] = inst_30399);

return statearr_30414;
})();
if(cljs.core.truth_(inst_30400)){
var statearr_30415_31192 = state_30412__$1;
(statearr_30415_31192[(1)] = (3));

} else {
var statearr_30416_31193 = state_30412__$1;
(statearr_30416_31193[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (3))){
var inst_30402 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30403 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_30404 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_30405 = [inst_30403,inst_30404];
var inst_30406 = (new cljs.core.PersistentVector(null,2,(5),inst_30402,inst_30405,null));
var inst_30407 = re_frame.core.dispatch(inst_30406);
var state_30412__$1 = state_30412;
var statearr_30417_31194 = state_30412__$1;
(statearr_30417_31194[(2)] = inst_30407);

(statearr_30417_31194[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (4))){
var state_30412__$1 = state_30412;
var statearr_30418_31195 = state_30412__$1;
(statearr_30418_31195[(2)] = null);

(statearr_30418_31195[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (5))){
var inst_30410 = (state_30412[(2)]);
var state_30412__$1 = state_30412;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30412__$1,inst_30410);
} else {
return null;
}
}
}
}
}
});})(seq__30318,chunk__30319,count__30320,i__30321,c__27979__auto___31191,r,vr))
;
return ((function (seq__30318,chunk__30319,count__30320,i__30321,switch__27909__auto__,c__27979__auto___31191,r,vr){
return (function() {
var kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____0 = (function (){
var statearr_30419 = [null,null,null,null,null,null,null,null];
(statearr_30419[(0)] = kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__);

(statearr_30419[(1)] = (1));

return statearr_30419;
});
var kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____1 = (function (state_30412){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_30412);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e30420){var ex__27913__auto__ = e30420;
var statearr_30421_31196 = state_30412;
(statearr_30421_31196[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_30412[(4)]))){
var statearr_30422_31197 = state_30412;
(statearr_30422_31197[(1)] = cljs.core.first((state_30412[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31198 = state_30412;
state_30412 = G__31198;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__ = function(state_30412){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____1.call(this,state_30412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__;
})()
;})(seq__30318,chunk__30319,count__30320,i__30321,switch__27909__auto__,c__27979__auto___31191,r,vr))
})();
var state__27981__auto__ = (function (){var statearr_30423 = f__27980__auto__();
(statearr_30423[(6)] = c__27979__auto___31191);

return statearr_30423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__30318,chunk__30319,count__30320,i__30321,c__27979__auto___31191,r,vr))
);



var G__31199 = seq__30318;
var G__31200 = chunk__30319;
var G__31201 = count__30320;
var G__31202 = (i__30321 + (1));
seq__30318 = G__31199;
chunk__30319 = G__31200;
count__30320 = G__31201;
i__30321 = G__31202;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30318);
if(temp__5804__auto__){
var seq__30318__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30318__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30318__$1);
var G__31203 = cljs.core.chunk_rest(seq__30318__$1);
var G__31204 = c__5568__auto__;
var G__31205 = cljs.core.count(c__5568__auto__);
var G__31206 = (0);
seq__30318 = G__31203;
chunk__30319 = G__31204;
count__30320 = G__31205;
i__30321 = G__31206;
continue;
} else {
var r = cljs.core.first(seq__30318__$1);
var c__27979__auto___31207 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__30318,chunk__30319,count__30320,i__30321,c__27979__auto___31207,r,seq__30318__$1,temp__5804__auto__,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__30318,chunk__30319,count__30320,i__30321,c__27979__auto___31207,r,seq__30318__$1,temp__5804__auto__,vr){
return (function (state_30446){
var state_val_30447 = (state_30446[(1)]);
if((state_val_30447 === (1))){
var inst_30424 = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(request);
var inst_30425 = new cljs.core.Keyword(null,"asset","asset",-280274466).cljs$core$IFn$_invoke$arity$1(request);
var inst_30426 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"asset?namespace=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30424),"&asset=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30425)].join('');
var inst_30427 = cljs_http.client.get(inst_30426);
var state_30446__$1 = state_30446;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30446__$1,(2),inst_30427);
} else {
if((state_val_30447 === (2))){
var inst_30429 = (state_30446[(2)]);
var inst_30430 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_30431 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_30429);
var inst_30432 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_30430,inst_30431);
var inst_30433 = re_frame.core.dispatch(inst_30432);
var inst_30434 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_30446__$1 = (function (){var statearr_30448 = state_30446;
(statearr_30448[(7)] = inst_30433);

return statearr_30448;
})();
if(cljs.core.truth_(inst_30434)){
var statearr_30449_31208 = state_30446__$1;
(statearr_30449_31208[(1)] = (3));

} else {
var statearr_30450_31209 = state_30446__$1;
(statearr_30450_31209[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30447 === (3))){
var inst_30436 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30437 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_30438 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_30439 = [inst_30437,inst_30438];
var inst_30440 = (new cljs.core.PersistentVector(null,2,(5),inst_30436,inst_30439,null));
var inst_30441 = re_frame.core.dispatch(inst_30440);
var state_30446__$1 = state_30446;
var statearr_30451_31210 = state_30446__$1;
(statearr_30451_31210[(2)] = inst_30441);

(statearr_30451_31210[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30447 === (4))){
var state_30446__$1 = state_30446;
var statearr_30452_31211 = state_30446__$1;
(statearr_30452_31211[(2)] = null);

(statearr_30452_31211[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30447 === (5))){
var inst_30444 = (state_30446[(2)]);
var state_30446__$1 = state_30446;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30446__$1,inst_30444);
} else {
return null;
}
}
}
}
}
});})(seq__30318,chunk__30319,count__30320,i__30321,c__27979__auto___31207,r,seq__30318__$1,temp__5804__auto__,vr))
;
return ((function (seq__30318,chunk__30319,count__30320,i__30321,switch__27909__auto__,c__27979__auto___31207,r,seq__30318__$1,temp__5804__auto__,vr){
return (function() {
var kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____0 = (function (){
var statearr_30453 = [null,null,null,null,null,null,null,null];
(statearr_30453[(0)] = kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__);

(statearr_30453[(1)] = (1));

return statearr_30453;
});
var kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____1 = (function (state_30446){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_30446);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e30454){var ex__27913__auto__ = e30454;
var statearr_30455_31212 = state_30446;
(statearr_30455_31212[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_30446[(4)]))){
var statearr_30456_31213 = state_30446;
(statearr_30456_31213[(1)] = cljs.core.first((state_30446[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31214 = state_30446;
state_30446 = G__31214;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__ = function(state_30446){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____1.call(this,state_30446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__;
})()
;})(seq__30318,chunk__30319,count__30320,i__30321,switch__27909__auto__,c__27979__auto___31207,r,seq__30318__$1,temp__5804__auto__,vr))
})();
var state__27981__auto__ = (function (){var statearr_30457 = f__27980__auto__();
(statearr_30457[(6)] = c__27979__auto___31207);

return statearr_30457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__30318,chunk__30319,count__30320,i__30321,c__27979__auto___31207,r,seq__30318__$1,temp__5804__auto__,vr))
);



var G__31215 = cljs.core.next(seq__30318__$1);
var G__31216 = null;
var G__31217 = (0);
var G__31218 = (0);
seq__30318 = G__31215;
chunk__30319 = G__31216;
count__30320 = G__31217;
i__30321 = G__31218;
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
var seq__30458 = cljs.core.seq(vr);
var chunk__30459 = null;
var count__30460 = (0);
var i__30461 = (0);
while(true){
if((i__30461 < count__30460)){
var r = chunk__30459.cljs$core$IIndexed$_nth$arity$2(null,i__30461);
var c__27979__auto___31220 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__30458,chunk__30459,count__30460,i__30461,c__27979__auto___31220,r,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__30458,chunk__30459,count__30460,i__30461,c__27979__auto___31220,r,vr){
return (function (state_30595){
var state_val_30596 = (state_30595[(1)]);
if((state_val_30596 === (1))){
var inst_30562 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_30563 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var state_30595__$1 = (function (){var statearr_30597 = state_30595;
(statearr_30597[(7)] = inst_30562);

return statearr_30597;
})();
if(cljs.core.truth_(inst_30563)){
var statearr_30598_31224 = state_30595__$1;
(statearr_30598_31224[(1)] = (3));

} else {
var statearr_30599_31225 = state_30595__$1;
(statearr_30599_31225[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30596 === (2))){
var inst_30578 = (state_30595[(2)]);
var inst_30579 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_30580 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_30578);
var inst_30581 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_30579,inst_30580);
var inst_30582 = re_frame.core.dispatch(inst_30581);
var inst_30583 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_30595__$1 = (function (){var statearr_30600 = state_30595;
(statearr_30600[(8)] = inst_30582);

return statearr_30600;
})();
if(cljs.core.truth_(inst_30583)){
var statearr_30601_31226 = state_30595__$1;
(statearr_30601_31226[(1)] = (6));

} else {
var statearr_30602_31227 = state_30595__$1;
(statearr_30602_31227[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30596 === (3))){
var inst_30565 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_30566 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var inst_30567 = [inst_30566];
var inst_30568 = cljs.core.PersistentHashMap.fromArrays(inst_30565,inst_30567);
var state_30595__$1 = state_30595;
var statearr_30603_31228 = state_30595__$1;
(statearr_30603_31228[(2)] = inst_30568);

(statearr_30603_31228[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30596 === (4))){
var inst_30570 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_30571 = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(r);
var inst_30572 = [inst_30571];
var inst_30573 = cljs.core.PersistentHashMap.fromArrays(inst_30570,inst_30572);
var state_30595__$1 = state_30595;
var statearr_30604_31229 = state_30595__$1;
(statearr_30604_31229[(2)] = inst_30573);

(statearr_30604_31229[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30596 === (5))){
var inst_30562 = (state_30595[(7)]);
var inst_30575 = (state_30595[(2)]);
var inst_30576 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_30562,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_30575], 0));
var state_30595__$1 = state_30595;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30595__$1,(2),inst_30576);
} else {
if((state_val_30596 === (6))){
var inst_30585 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30586 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_30587 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_30588 = [inst_30586,inst_30587];
var inst_30589 = (new cljs.core.PersistentVector(null,2,(5),inst_30585,inst_30588,null));
var inst_30590 = re_frame.core.dispatch(inst_30589);
var state_30595__$1 = state_30595;
var statearr_30605_31230 = state_30595__$1;
(statearr_30605_31230[(2)] = inst_30590);

(statearr_30605_31230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30596 === (7))){
var state_30595__$1 = state_30595;
var statearr_30606_31231 = state_30595__$1;
(statearr_30606_31231[(2)] = null);

(statearr_30606_31231[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30596 === (8))){
var inst_30593 = (state_30595[(2)]);
var state_30595__$1 = state_30595;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30595__$1,inst_30593);
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
});})(seq__30458,chunk__30459,count__30460,i__30461,c__27979__auto___31220,r,vr))
;
return ((function (seq__30458,chunk__30459,count__30460,i__30461,switch__27909__auto__,c__27979__auto___31220,r,vr){
return (function() {
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____0 = (function (){
var statearr_30609 = [null,null,null,null,null,null,null,null,null];
(statearr_30609[(0)] = kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__);

(statearr_30609[(1)] = (1));

return statearr_30609;
});
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____1 = (function (state_30595){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_30595);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e30610){var ex__27913__auto__ = e30610;
var statearr_30611_31232 = state_30595;
(statearr_30611_31232[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_30595[(4)]))){
var statearr_30612_31233 = state_30595;
(statearr_30612_31233[(1)] = cljs.core.first((state_30595[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31234 = state_30595;
state_30595 = G__31234;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__ = function(state_30595){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____1.call(this,state_30595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__;
})()
;})(seq__30458,chunk__30459,count__30460,i__30461,switch__27909__auto__,c__27979__auto___31220,r,vr))
})();
var state__27981__auto__ = (function (){var statearr_30613 = f__27980__auto__();
(statearr_30613[(6)] = c__27979__auto___31220);

return statearr_30613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__30458,chunk__30459,count__30460,i__30461,c__27979__auto___31220,r,vr))
);



var G__31235 = seq__30458;
var G__31236 = chunk__30459;
var G__31237 = count__30460;
var G__31238 = (i__30461 + (1));
seq__30458 = G__31235;
chunk__30459 = G__31236;
count__30460 = G__31237;
i__30461 = G__31238;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30458);
if(temp__5804__auto__){
var seq__30458__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30458__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30458__$1);
var G__31239 = cljs.core.chunk_rest(seq__30458__$1);
var G__31240 = c__5568__auto__;
var G__31241 = cljs.core.count(c__5568__auto__);
var G__31242 = (0);
seq__30458 = G__31239;
chunk__30459 = G__31240;
count__30460 = G__31241;
i__30461 = G__31242;
continue;
} else {
var r = cljs.core.first(seq__30458__$1);
var c__27979__auto___31243 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__30458,chunk__30459,count__30460,i__30461,c__27979__auto___31243,r,seq__30458__$1,temp__5804__auto__,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__30458,chunk__30459,count__30460,i__30461,c__27979__auto___31243,r,seq__30458__$1,temp__5804__auto__,vr){
return (function (state_30648){
var state_val_30651 = (state_30648[(1)]);
if((state_val_30651 === (1))){
var inst_30614 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_30615 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var state_30648__$1 = (function (){var statearr_30655 = state_30648;
(statearr_30655[(7)] = inst_30614);

return statearr_30655;
})();
if(cljs.core.truth_(inst_30615)){
var statearr_30656_31244 = state_30648__$1;
(statearr_30656_31244[(1)] = (3));

} else {
var statearr_30657_31245 = state_30648__$1;
(statearr_30657_31245[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (2))){
var inst_30630 = (state_30648[(2)]);
var inst_30631 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_30632 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_30630);
var inst_30633 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_30631,inst_30632);
var inst_30634 = re_frame.core.dispatch(inst_30633);
var inst_30635 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_30648__$1 = (function (){var statearr_30658 = state_30648;
(statearr_30658[(8)] = inst_30634);

return statearr_30658;
})();
if(cljs.core.truth_(inst_30635)){
var statearr_30659_31246 = state_30648__$1;
(statearr_30659_31246[(1)] = (6));

} else {
var statearr_30660_31247 = state_30648__$1;
(statearr_30660_31247[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (3))){
var inst_30617 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_30618 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var inst_30619 = [inst_30618];
var inst_30620 = cljs.core.PersistentHashMap.fromArrays(inst_30617,inst_30619);
var state_30648__$1 = state_30648;
var statearr_30661_31252 = state_30648__$1;
(statearr_30661_31252[(2)] = inst_30620);

(statearr_30661_31252[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (4))){
var inst_30622 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_30623 = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(r);
var inst_30624 = [inst_30623];
var inst_30625 = cljs.core.PersistentHashMap.fromArrays(inst_30622,inst_30624);
var state_30648__$1 = state_30648;
var statearr_30662_31253 = state_30648__$1;
(statearr_30662_31253[(2)] = inst_30625);

(statearr_30662_31253[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (5))){
var inst_30614 = (state_30648[(7)]);
var inst_30627 = (state_30648[(2)]);
var inst_30628 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_30614,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_30627], 0));
var state_30648__$1 = state_30648;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30648__$1,(2),inst_30628);
} else {
if((state_val_30651 === (6))){
var inst_30637 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30638 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_30639 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_30640 = [inst_30638,inst_30639];
var inst_30641 = (new cljs.core.PersistentVector(null,2,(5),inst_30637,inst_30640,null));
var inst_30642 = re_frame.core.dispatch(inst_30641);
var state_30648__$1 = state_30648;
var statearr_30663_31254 = state_30648__$1;
(statearr_30663_31254[(2)] = inst_30642);

(statearr_30663_31254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (7))){
var state_30648__$1 = state_30648;
var statearr_30664_31255 = state_30648__$1;
(statearr_30664_31255[(2)] = null);

(statearr_30664_31255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (8))){
var inst_30645 = (state_30648[(2)]);
var state_30648__$1 = state_30648;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30648__$1,inst_30645);
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
});})(seq__30458,chunk__30459,count__30460,i__30461,c__27979__auto___31243,r,seq__30458__$1,temp__5804__auto__,vr))
;
return ((function (seq__30458,chunk__30459,count__30460,i__30461,switch__27909__auto__,c__27979__auto___31243,r,seq__30458__$1,temp__5804__auto__,vr){
return (function() {
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____0 = (function (){
var statearr_30665 = [null,null,null,null,null,null,null,null,null];
(statearr_30665[(0)] = kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__);

(statearr_30665[(1)] = (1));

return statearr_30665;
});
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____1 = (function (state_30648){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_30648);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e30666){var ex__27913__auto__ = e30666;
var statearr_30667_31256 = state_30648;
(statearr_30667_31256[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_30648[(4)]))){
var statearr_30668_31259 = state_30648;
(statearr_30668_31259[(1)] = cljs.core.first((state_30648[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31260 = state_30648;
state_30648 = G__31260;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__ = function(state_30648){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____1.call(this,state_30648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__;
})()
;})(seq__30458,chunk__30459,count__30460,i__30461,switch__27909__auto__,c__27979__auto___31243,r,seq__30458__$1,temp__5804__auto__,vr))
})();
var state__27981__auto__ = (function (){var statearr_30669 = f__27980__auto__();
(statearr_30669[(6)] = c__27979__auto___31243);

return statearr_30669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__30458,chunk__30459,count__30460,i__30461,c__27979__auto___31243,r,seq__30458__$1,temp__5804__auto__,vr))
);



var G__31263 = cljs.core.next(seq__30458__$1);
var G__31264 = null;
var G__31266 = (0);
var G__31267 = (0);
seq__30458 = G__31263;
chunk__30459 = G__31264;
count__30460 = G__31266;
i__30461 = G__31267;
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
var seq__30670 = cljs.core.seq(vr);
var chunk__30671 = null;
var count__30672 = (0);
var i__30673 = (0);
while(true){
if((i__30673 < count__30672)){
var r = chunk__30671.cljs$core$IIndexed$_nth$arity$2(null,i__30673);
var c__27979__auto___31273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__30670,chunk__30671,count__30672,i__30673,c__27979__auto___31273,r,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__30670,chunk__30671,count__30672,i__30673,c__27979__auto___31273,r,vr){
return (function (state_30855){
var state_val_30856 = (state_30855[(1)]);
if((state_val_30856 === (1))){
var inst_30822 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_30823 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var state_30855__$1 = (function (){var statearr_30857 = state_30855;
(statearr_30857[(7)] = inst_30822);

return statearr_30857;
})();
if(cljs.core.truth_(inst_30823)){
var statearr_30858_31276 = state_30855__$1;
(statearr_30858_31276[(1)] = (3));

} else {
var statearr_30859_31277 = state_30855__$1;
(statearr_30859_31277[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (2))){
var inst_30838 = (state_30855[(2)]);
var inst_30839 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_30840 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_30838);
var inst_30841 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_30839,inst_30840);
var inst_30842 = re_frame.core.dispatch(inst_30841);
var inst_30843 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_30855__$1 = (function (){var statearr_30860 = state_30855;
(statearr_30860[(8)] = inst_30842);

return statearr_30860;
})();
if(cljs.core.truth_(inst_30843)){
var statearr_30861_31279 = state_30855__$1;
(statearr_30861_31279[(1)] = (6));

} else {
var statearr_30862_31280 = state_30855__$1;
(statearr_30862_31280[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (3))){
var inst_30825 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052),new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_30826 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var inst_30827 = [inst_30826,"application/json;charset=UTF-8"];
var inst_30828 = cljs.core.PersistentHashMap.fromArrays(inst_30825,inst_30827);
var state_30855__$1 = state_30855;
var statearr_30864_31281 = state_30855__$1;
(statearr_30864_31281[(2)] = inst_30828);

(statearr_30864_31281[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (4))){
var inst_30830 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_30831 = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(r);
var inst_30832 = [inst_30831,"application/json;charset=UTF-8"];
var inst_30833 = cljs.core.PersistentHashMap.fromArrays(inst_30830,inst_30832);
var state_30855__$1 = state_30855;
var statearr_30865_31282 = state_30855__$1;
(statearr_30865_31282[(2)] = inst_30833);

(statearr_30865_31282[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (5))){
var inst_30822 = (state_30855[(7)]);
var inst_30835 = (state_30855[(2)]);
var inst_30836 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_30822,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_30835], 0));
var state_30855__$1 = state_30855;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30855__$1,(2),inst_30836);
} else {
if((state_val_30856 === (6))){
var inst_30845 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30846 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_30847 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_30848 = [inst_30846,inst_30847];
var inst_30849 = (new cljs.core.PersistentVector(null,2,(5),inst_30845,inst_30848,null));
var inst_30850 = re_frame.core.dispatch(inst_30849);
var state_30855__$1 = state_30855;
var statearr_30866_31283 = state_30855__$1;
(statearr_30866_31283[(2)] = inst_30850);

(statearr_30866_31283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (7))){
var state_30855__$1 = state_30855;
var statearr_30867_31284 = state_30855__$1;
(statearr_30867_31284[(2)] = null);

(statearr_30867_31284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (8))){
var inst_30853 = (state_30855[(2)]);
var state_30855__$1 = state_30855;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30855__$1,inst_30853);
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
});})(seq__30670,chunk__30671,count__30672,i__30673,c__27979__auto___31273,r,vr))
;
return ((function (seq__30670,chunk__30671,count__30672,i__30673,switch__27909__auto__,c__27979__auto___31273,r,vr){
return (function() {
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____0 = (function (){
var statearr_30868 = [null,null,null,null,null,null,null,null,null];
(statearr_30868[(0)] = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__);

(statearr_30868[(1)] = (1));

return statearr_30868;
});
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____1 = (function (state_30855){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_30855);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e30869){var ex__27913__auto__ = e30869;
var statearr_30870_31285 = state_30855;
(statearr_30870_31285[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_30855[(4)]))){
var statearr_30871_31286 = state_30855;
(statearr_30871_31286[(1)] = cljs.core.first((state_30855[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31287 = state_30855;
state_30855 = G__31287;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__ = function(state_30855){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____1.call(this,state_30855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__;
})()
;})(seq__30670,chunk__30671,count__30672,i__30673,switch__27909__auto__,c__27979__auto___31273,r,vr))
})();
var state__27981__auto__ = (function (){var statearr_30872 = f__27980__auto__();
(statearr_30872[(6)] = c__27979__auto___31273);

return statearr_30872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__30670,chunk__30671,count__30672,i__30673,c__27979__auto___31273,r,vr))
);



var G__31288 = seq__30670;
var G__31289 = chunk__30671;
var G__31290 = count__30672;
var G__31291 = (i__30673 + (1));
seq__30670 = G__31288;
chunk__30671 = G__31289;
count__30672 = G__31290;
i__30673 = G__31291;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30670);
if(temp__5804__auto__){
var seq__30670__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30670__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30670__$1);
var G__31292 = cljs.core.chunk_rest(seq__30670__$1);
var G__31293 = c__5568__auto__;
var G__31294 = cljs.core.count(c__5568__auto__);
var G__31295 = (0);
seq__30670 = G__31292;
chunk__30671 = G__31293;
count__30672 = G__31294;
i__30673 = G__31295;
continue;
} else {
var r = cljs.core.first(seq__30670__$1);
var c__27979__auto___31296 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__30670,chunk__30671,count__30672,i__30673,c__27979__auto___31296,r,seq__30670__$1,temp__5804__auto__,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__30670,chunk__30671,count__30672,i__30673,c__27979__auto___31296,r,seq__30670__$1,temp__5804__auto__,vr){
return (function (state_30906){
var state_val_30907 = (state_30906[(1)]);
if((state_val_30907 === (1))){
var inst_30873 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_30874 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var state_30906__$1 = (function (){var statearr_30908 = state_30906;
(statearr_30908[(7)] = inst_30873);

return statearr_30908;
})();
if(cljs.core.truth_(inst_30874)){
var statearr_30909_31297 = state_30906__$1;
(statearr_30909_31297[(1)] = (3));

} else {
var statearr_30910_31298 = state_30906__$1;
(statearr_30910_31298[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30907 === (2))){
var inst_30889 = (state_30906[(2)]);
var inst_30890 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_30891 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_30889);
var inst_30892 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_30890,inst_30891);
var inst_30893 = re_frame.core.dispatch(inst_30892);
var inst_30894 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_30906__$1 = (function (){var statearr_30911 = state_30906;
(statearr_30911[(8)] = inst_30893);

return statearr_30911;
})();
if(cljs.core.truth_(inst_30894)){
var statearr_30912_31299 = state_30906__$1;
(statearr_30912_31299[(1)] = (6));

} else {
var statearr_30913_31300 = state_30906__$1;
(statearr_30913_31300[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30907 === (3))){
var inst_30876 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052),new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_30877 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var inst_30878 = [inst_30877,"application/json;charset=UTF-8"];
var inst_30879 = cljs.core.PersistentHashMap.fromArrays(inst_30876,inst_30878);
var state_30906__$1 = state_30906;
var statearr_30914_31301 = state_30906__$1;
(statearr_30914_31301[(2)] = inst_30879);

(statearr_30914_31301[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30907 === (4))){
var inst_30881 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_30882 = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(r);
var inst_30883 = [inst_30882,"application/json;charset=UTF-8"];
var inst_30884 = cljs.core.PersistentHashMap.fromArrays(inst_30881,inst_30883);
var state_30906__$1 = state_30906;
var statearr_30915_31302 = state_30906__$1;
(statearr_30915_31302[(2)] = inst_30884);

(statearr_30915_31302[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30907 === (5))){
var inst_30873 = (state_30906[(7)]);
var inst_30886 = (state_30906[(2)]);
var inst_30887 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_30873,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_30886], 0));
var state_30906__$1 = state_30906;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30906__$1,(2),inst_30887);
} else {
if((state_val_30907 === (6))){
var inst_30896 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30897 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_30898 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_30899 = [inst_30897,inst_30898];
var inst_30900 = (new cljs.core.PersistentVector(null,2,(5),inst_30896,inst_30899,null));
var inst_30901 = re_frame.core.dispatch(inst_30900);
var state_30906__$1 = state_30906;
var statearr_30916_31303 = state_30906__$1;
(statearr_30916_31303[(2)] = inst_30901);

(statearr_30916_31303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30907 === (7))){
var state_30906__$1 = state_30906;
var statearr_30917_31304 = state_30906__$1;
(statearr_30917_31304[(2)] = null);

(statearr_30917_31304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30907 === (8))){
var inst_30904 = (state_30906[(2)]);
var state_30906__$1 = state_30906;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30906__$1,inst_30904);
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
});})(seq__30670,chunk__30671,count__30672,i__30673,c__27979__auto___31296,r,seq__30670__$1,temp__5804__auto__,vr))
;
return ((function (seq__30670,chunk__30671,count__30672,i__30673,switch__27909__auto__,c__27979__auto___31296,r,seq__30670__$1,temp__5804__auto__,vr){
return (function() {
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____0 = (function (){
var statearr_30918 = [null,null,null,null,null,null,null,null,null];
(statearr_30918[(0)] = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__);

(statearr_30918[(1)] = (1));

return statearr_30918;
});
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____1 = (function (state_30906){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_30906);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e30919){var ex__27913__auto__ = e30919;
var statearr_30920_31305 = state_30906;
(statearr_30920_31305[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_30906[(4)]))){
var statearr_30921_31306 = state_30906;
(statearr_30921_31306[(1)] = cljs.core.first((state_30906[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31307 = state_30906;
state_30906 = G__31307;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__ = function(state_30906){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____1.call(this,state_30906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__;
})()
;})(seq__30670,chunk__30671,count__30672,i__30673,switch__27909__auto__,c__27979__auto___31296,r,seq__30670__$1,temp__5804__auto__,vr))
})();
var state__27981__auto__ = (function (){var statearr_30922 = f__27980__auto__();
(statearr_30922[(6)] = c__27979__auto___31296);

return statearr_30922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__30670,chunk__30671,count__30672,i__30673,c__27979__auto___31296,r,seq__30670__$1,temp__5804__auto__,vr))
);



var G__31308 = cljs.core.next(seq__30670__$1);
var G__31309 = null;
var G__31310 = (0);
var G__31311 = (0);
seq__30670 = G__31308;
chunk__30671 = G__31309;
count__30672 = G__31310;
i__30673 = G__31311;
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
var f__27980__auto__ = (function (){var switch__27909__auto__ = (function (state_30947){
var state_val_30948 = (state_30947[(1)]);
if((state_val_30948 === (1))){
var inst_30923 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_30924 = [new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)];
var inst_30925 = new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707).cljs$core$IFn$_invoke$arity$1(request);
var inst_30926 = [inst_30925];
var inst_30927 = cljs.core.PersistentHashMap.fromArrays(inst_30924,inst_30926);
var inst_30928 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_30923,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_30927], 0));
var state_30947__$1 = state_30947;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30947__$1,(2),inst_30928);
} else {
if((state_val_30948 === (2))){
var inst_30930 = (state_30947[(2)]);
var inst_30931 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_30932 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_30930);
var inst_30933 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_30931,inst_30932);
var inst_30934 = re_frame.core.dispatch(inst_30933);
var inst_30935 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_30947__$1 = (function (){var statearr_30949 = state_30947;
(statearr_30949[(7)] = inst_30934);

return statearr_30949;
})();
if(cljs.core.truth_(inst_30935)){
var statearr_30950_31312 = state_30947__$1;
(statearr_30950_31312[(1)] = (3));

} else {
var statearr_30951_31313 = state_30947__$1;
(statearr_30951_31313[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30948 === (3))){
var inst_30937 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30938 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_30939 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_30940 = [inst_30938,inst_30939];
var inst_30941 = (new cljs.core.PersistentVector(null,2,(5),inst_30937,inst_30940,null));
var inst_30942 = re_frame.core.dispatch(inst_30941);
var state_30947__$1 = state_30947;
var statearr_30952_31314 = state_30947__$1;
(statearr_30952_31314[(2)] = inst_30942);

(statearr_30952_31314[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30948 === (4))){
var state_30947__$1 = state_30947;
var statearr_30953_31315 = state_30947__$1;
(statearr_30953_31315[(2)] = null);

(statearr_30953_31315[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30948 === (5))){
var inst_30945 = (state_30947[(2)]);
var state_30947__$1 = state_30947;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30947__$1,inst_30945);
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
var statearr_30954 = [null,null,null,null,null,null,null,null];
(statearr_30954[(0)] = kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto__);

(statearr_30954[(1)] = (1));

return statearr_30954;
});
var kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto____1 = (function (state_30947){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_30947);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e30955){var ex__27913__auto__ = e30955;
var statearr_30956_31316 = state_30947;
(statearr_30956_31316[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_30947[(4)]))){
var statearr_30957_31317 = state_30947;
(statearr_30957_31317[(1)] = cljs.core.first((state_30947[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31318 = state_30947;
state_30947 = G__31318;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto__ = function(state_30947){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto____1.call(this,state_30947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto__;
})()
})();
var state__27981__auto__ = (function (){var statearr_30958 = f__27980__auto__();
(statearr_30958[(6)] = c__27979__auto__);

return statearr_30958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
}));

return c__27979__auto__;
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http-put-dispatch","http-put-dispatch",-484936711),kdlyticsgui.mount.http_put_dispatch);
kdlyticsgui.mount.simple_http_get_events = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-naked-positions","get-naked-positions",851863850),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"naked-position-transit-array",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"naked-positions","naked-positions",-1170378384),new cljs.core.Keyword(null,"mounting-modal","mounting-modal",-1411315623),true], null)], null);
kdlyticsgui.mount.simple_http_assets = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472),new cljs.core.Keyword(null,"namespace","namespace",-377510372),"common.static",new cljs.core.Keyword(null,"asset","asset",-280274466),"portfolios",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null)], null)], null);
var seq__30959_31319 = cljs.core.seq(kdlyticsgui.mount.simple_http_get_events);
var chunk__30960_31320 = null;
var count__30961_31321 = (0);
var i__30962_31322 = (0);
while(true){
if((i__30962_31322 < count__30961_31321)){
var line_31323 = chunk__30960_31320.cljs$core$IIndexed$_nth$arity$2(null,i__30962_31322);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-key","get-key",1436017019).cljs$core$IFn$_invoke$arity$1(line_31323),((function (seq__30959_31319,chunk__30960_31320,count__30961_31321,i__30962_31322,line_31323){
return (function (p__30975,p__30976){
var map__30977 = p__30975;
var map__30977__$1 = cljs.core.__destructure_map(map__30977);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30977__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30978 = p__30976;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30978,(0),null);
if((cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dis-key","dis-key",842897221).cljs$core$IFn$_invoke$arity$1(line_31323)], null))) === (0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(cljs.core.truth_(new cljs.core.Keyword(null,"mounting-modal","mounting-modal",-1411315623).cljs$core$IFn$_invoke$arity$1(line_31323))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),true):db),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url-tail","url-tail",144006528).cljs$core$IFn$_invoke$arity$1(line_31323))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dis-key","dis-key",842897221).cljs$core$IFn$_invoke$arity$1(line_31323)], null)], null)], null);
} else {
return null;
}
});})(seq__30959_31319,chunk__30960_31320,count__30961_31321,i__30962_31322,line_31323))
);


var G__31324 = seq__30959_31319;
var G__31325 = chunk__30960_31320;
var G__31326 = count__30961_31321;
var G__31327 = (i__30962_31322 + (1));
seq__30959_31319 = G__31324;
chunk__30960_31320 = G__31325;
count__30961_31321 = G__31326;
i__30962_31322 = G__31327;
continue;
} else {
var temp__5804__auto___31328 = cljs.core.seq(seq__30959_31319);
if(temp__5804__auto___31328){
var seq__30959_31329__$1 = temp__5804__auto___31328;
if(cljs.core.chunked_seq_QMARK_(seq__30959_31329__$1)){
var c__5568__auto___31330 = cljs.core.chunk_first(seq__30959_31329__$1);
var G__31331 = cljs.core.chunk_rest(seq__30959_31329__$1);
var G__31332 = c__5568__auto___31330;
var G__31333 = cljs.core.count(c__5568__auto___31330);
var G__31334 = (0);
seq__30959_31319 = G__31331;
chunk__30960_31320 = G__31332;
count__30961_31321 = G__31333;
i__30962_31322 = G__31334;
continue;
} else {
var line_31335 = cljs.core.first(seq__30959_31329__$1);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-key","get-key",1436017019).cljs$core$IFn$_invoke$arity$1(line_31335),((function (seq__30959_31319,chunk__30960_31320,count__30961_31321,i__30962_31322,line_31335,seq__30959_31329__$1,temp__5804__auto___31328){
return (function (p__30981,p__30982){
var map__30983 = p__30981;
var map__30983__$1 = cljs.core.__destructure_map(map__30983);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30983__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30984 = p__30982;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30984,(0),null);
if((cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dis-key","dis-key",842897221).cljs$core$IFn$_invoke$arity$1(line_31335)], null))) === (0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(cljs.core.truth_(new cljs.core.Keyword(null,"mounting-modal","mounting-modal",-1411315623).cljs$core$IFn$_invoke$arity$1(line_31335))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),true):db),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url-tail","url-tail",144006528).cljs$core$IFn$_invoke$arity$1(line_31335))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dis-key","dis-key",842897221).cljs$core$IFn$_invoke$arity$1(line_31335)], null)], null)], null);
} else {
return null;
}
});})(seq__30959_31319,chunk__30960_31320,count__30961_31321,i__30962_31322,line_31335,seq__30959_31329__$1,temp__5804__auto___31328))
);


var G__31336 = cljs.core.next(seq__30959_31329__$1);
var G__31337 = null;
var G__31338 = (0);
var G__31339 = (0);
seq__30959_31319 = G__31336;
chunk__30960_31320 = G__31337;
count__30961_31321 = G__31338;
i__30962_31322 = G__31339;
continue;
}
} else {
}
}
break;
}
var seq__30987_31340 = cljs.core.seq(kdlyticsgui.mount.simple_http_assets);
var chunk__30988_31341 = null;
var count__30989_31342 = (0);
var i__30990_31343 = (0);
while(true){
if((i__30990_31343 < count__30989_31342)){
var line_31344 = chunk__30988_31341.cljs$core$IIndexed$_nth$arity$2(null,i__30990_31343);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-key","get-key",1436017019).cljs$core$IFn$_invoke$arity$1(line_31344),((function (seq__30987_31340,chunk__30988_31341,count__30989_31342,i__30990_31343,line_31344){
return (function (p__31003,p__31004){
var map__31005 = p__31003;
var map__31005__$1 = cljs.core.__destructure_map(map__31005);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31005__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__31006 = p__31004;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31006,(0),null);
if((cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(line_31344))) === (0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(cljs.core.truth_(new cljs.core.Keyword(null,"mounting-modal","mounting-modal",-1411315623).cljs$core$IFn$_invoke$arity$1(line_31344))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),true):db),new cljs.core.Keyword(null,"http-get-asset","http-get-asset",1501716308),line_31344], null);
} else {
return null;
}
});})(seq__30987_31340,chunk__30988_31341,count__30989_31342,i__30990_31343,line_31344))
);


var G__31345 = seq__30987_31340;
var G__31346 = chunk__30988_31341;
var G__31347 = count__30989_31342;
var G__31348 = (i__30990_31343 + (1));
seq__30987_31340 = G__31345;
chunk__30988_31341 = G__31346;
count__30989_31342 = G__31347;
i__30990_31343 = G__31348;
continue;
} else {
var temp__5804__auto___31349 = cljs.core.seq(seq__30987_31340);
if(temp__5804__auto___31349){
var seq__30987_31350__$1 = temp__5804__auto___31349;
if(cljs.core.chunked_seq_QMARK_(seq__30987_31350__$1)){
var c__5568__auto___31351 = cljs.core.chunk_first(seq__30987_31350__$1);
var G__31352 = cljs.core.chunk_rest(seq__30987_31350__$1);
var G__31353 = c__5568__auto___31351;
var G__31354 = cljs.core.count(c__5568__auto___31351);
var G__31355 = (0);
seq__30987_31340 = G__31352;
chunk__30988_31341 = G__31353;
count__30989_31342 = G__31354;
i__30990_31343 = G__31355;
continue;
} else {
var line_31356 = cljs.core.first(seq__30987_31350__$1);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-key","get-key",1436017019).cljs$core$IFn$_invoke$arity$1(line_31356),((function (seq__30987_31340,chunk__30988_31341,count__30989_31342,i__30990_31343,line_31356,seq__30987_31350__$1,temp__5804__auto___31349){
return (function (p__31009,p__31010){
var map__31011 = p__31009;
var map__31011__$1 = cljs.core.__destructure_map(map__31011);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31011__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__31012 = p__31010;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31012,(0),null);
if((cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(line_31356))) === (0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(cljs.core.truth_(new cljs.core.Keyword(null,"mounting-modal","mounting-modal",-1411315623).cljs$core$IFn$_invoke$arity$1(line_31356))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),true):db),new cljs.core.Keyword(null,"http-get-asset","http-get-asset",1501716308),line_31356], null);
} else {
return null;
}
});})(seq__30987_31340,chunk__30988_31341,count__30989_31342,i__30990_31343,line_31356,seq__30987_31350__$1,temp__5804__auto___31349))
);


var G__31357 = cljs.core.next(seq__30987_31350__$1);
var G__31358 = null;
var G__31359 = (0);
var G__31360 = (0);
seq__30987_31340 = G__31357;
chunk__30988_31341 = G__31358;
count__30989_31342 = G__31359;
i__30990_31343 = G__31360;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-wealth-summary","get-wealth-summary",1541098912),(function (p__31015,p__31016){
var map__31017 = p__31015;
var map__31017__$1 = cljs.core.__destructure_map(map__31017);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31017__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__31018 = p__31016;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31018,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"wealth-summary"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-summary","positions-summary",-17081762)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions-summary","get-positions-summary",1710688354),(function (p__31021,p__31022){
var map__31023 = p__31021;
var map__31023__$1 = cljs.core.__destructure_map(map__31023);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31023__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__31024 = p__31022;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31024,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"positions-summary"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-summary","positions-summary",-17081762)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions-top10","get-positions-top10",585407224),(function (p__31027,p__31028){
var map__31029 = p__31027;
var map__31029__$1 = cljs.core.__destructure_map(map__31029);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31029__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__31030 = p__31028;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31030,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"positions-top10"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-top10","positions-top10",-1668533732)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions-characteristics","get-positions-characteristics",749074961),(function (p__31033,p__31034){
var map__31035 = p__31033;
var map__31035__$1 = cljs.core.__destructure_map(map__31035);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31035__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__31036 = p__31034;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31036,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"positions-characteristics"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-characteristics","positions-characteristics",-170272672)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions-strategy-exposure","get-positions-strategy-exposure",-931353461),(function (p__31039,p__31040){
var map__31041 = p__31039;
var map__31041__$1 = cljs.core.__destructure_map(map__31041);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31041__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__31042 = p__31040;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31042,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"positions-strategy-exposure"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-strategy-exposure","positions-strategy-exposure",1394640320)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-vault-summary","get-vault-summary",1161003768),(function (p__31045,p__31046){
var map__31047 = p__31045;
var map__31047__$1 = cljs.core.__destructure_map(map__31047);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31047__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__31048 = p__31046;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31048,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"vault-summary"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vault-summary","vault-summary",-407259781)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-cellar-summary","get-cellar-summary",644275392),(function (p__31051,p__31052){
var map__31053 = p__31051;
var map__31053__$1 = cljs.core.__destructure_map(map__31053);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31053__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__31054 = p__31052;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31054,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"cellar-summary"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cellar-summary","cellar-summary",271980210)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"receive-price-history-data","receive-price-history-data",1513500215),(function (db,p__31057){
var vec__31058 = p__31057;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31058,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31058,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DATA RECEIVED"], 0));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("price-history","data","price-history/data",1268424495),data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("price-history","show-throbber","price-history/show-throbber",-2145949059),false], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-price-history","get-price-history",-1088732947),(function (p__31061,p__31062){
var map__31063 = p__31061;
var map__31063__$1 = cljs.core.__destructure_map(map__31063);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31063__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__31064 = p__31062;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31064,(0),null);
var ticker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31064,(1),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31064,(2),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["GO MODAL"], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("price-history","ticker","price-history/ticker",1464015546),ticker,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("price-history","name","price-history/name",-1535942599),name,new cljs.core.Keyword("price-history","show-modal","price-history/show-modal",1439463911),true,new cljs.core.Keyword("price-history","show-throbber","price-history/show-throbber",-2145949059),true], 0)),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"price-history?ticker=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ticker)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"receive-price-history-data","receive-price-history-data",1513500215)], null)], null)], null);
}));

//# sourceMappingURL=kdlyticsgui.mount.js.map
