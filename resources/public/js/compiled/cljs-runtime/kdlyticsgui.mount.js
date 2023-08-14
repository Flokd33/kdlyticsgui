goog.provide('kdlyticsgui.mount');
kdlyticsgui.mount.default_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"test-data","test-data",805102338),new cljs.core.Keyword("navigation","success-modal","navigation/success-modal",533446693),new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),new cljs.core.Keyword("navigation","active-section","navigation/active-section",-1272053018),new cljs.core.Keyword("navigation","success-compile","navigation/success-compile",33558826),new cljs.core.Keyword(null,"rot13","rot13",-631596017),new cljs.core.Keyword("navigation","active-view-cellar","navigation/active-view-cellar",-1146180625),new cljs.core.Keyword("navigation","active-view-vault","navigation/active-view-vault",-1235342702),new cljs.core.Keyword("navigation","active-view-wealth","navigation/active-view-wealth",-1986836686),new cljs.core.Keyword("navigation","active-view-tools","navigation/active-view-tools",-2036856651),new cljs.core.Keyword("navigation","active-view-positions","navigation/active-view-positions",1459188376),new cljs.core.Keyword(null,"dummy","dummy",2059765854),new cljs.core.Keyword(null,"positions-summary","positions-summary",-17081762)],[null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show","show",-576705889),false,new cljs.core.Keyword(null,"on-close","on-close",-761178394),null,new cljs.core.Keyword(null,"response","response",-1068424192),null], null),false,new cljs.core.Keyword(null,"entry","entry",505168823),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show","show",-576705889),false,new cljs.core.Keyword(null,"on-close","on-close",-761178394),null,new cljs.core.Keyword(null,"response","response",-1068424192),null], null),false,new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"scrapping","scrapping",-1589708187),new cljs.core.Keyword(null,"summary","summary",380847952),null,cljs.core.PersistentVector.EMPTY]);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kdlyticsgui.mount","initialize-db","kdlyticsgui.mount/initialize-db",-798563823),(function (_,___$1){
return kdlyticsgui.mount.default_db;
}));
var seq__31269_32143 = cljs.core.seq(cljs.core.keys(kdlyticsgui.mount.default_db));
var chunk__31270_32144 = null;
var count__31271_32145 = (0);
var i__31272_32146 = (0);
while(true){
if((i__31272_32146 < count__31271_32145)){
var k_32147 = chunk__31270_32144.cljs$core$IIndexed$_nth$arity$2(null,i__31272_32146);
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(k_32147,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (seq__31269_32143,chunk__31270_32144,count__31271_32145,i__31272_32146,k_32147){
return (function (db){
return (k_32147.cljs$core$IFn$_invoke$arity$1 ? k_32147.cljs$core$IFn$_invoke$arity$1(db) : k_32147.call(null,db));
});})(seq__31269_32143,chunk__31270_32144,count__31271_32145,i__31272_32146,k_32147))
], 0));


var G__32148 = seq__31269_32143;
var G__32149 = chunk__31270_32144;
var G__32150 = count__31271_32145;
var G__32151 = (i__31272_32146 + (1));
seq__31269_32143 = G__32148;
chunk__31270_32144 = G__32149;
count__31271_32145 = G__32150;
i__31272_32146 = G__32151;
continue;
} else {
var temp__5804__auto___32152 = cljs.core.seq(seq__31269_32143);
if(temp__5804__auto___32152){
var seq__31269_32153__$1 = temp__5804__auto___32152;
if(cljs.core.chunked_seq_QMARK_(seq__31269_32153__$1)){
var c__5568__auto___32154 = cljs.core.chunk_first(seq__31269_32153__$1);
var G__32155 = cljs.core.chunk_rest(seq__31269_32153__$1);
var G__32156 = c__5568__auto___32154;
var G__32157 = cljs.core.count(c__5568__auto___32154);
var G__32158 = (0);
seq__31269_32143 = G__32155;
chunk__31270_32144 = G__32156;
count__31271_32145 = G__32157;
i__31272_32146 = G__32158;
continue;
} else {
var k_32159 = cljs.core.first(seq__31269_32153__$1);
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(k_32159,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (seq__31269_32143,chunk__31270_32144,count__31271_32145,i__31272_32146,k_32159,seq__31269_32153__$1,temp__5804__auto___32152){
return (function (db){
return (k_32159.cljs$core$IFn$_invoke$arity$1 ? k_32159.cljs$core$IFn$_invoke$arity$1(db) : k_32159.call(null,db));
});})(seq__31269_32143,chunk__31270_32144,count__31271_32145,i__31272_32146,k_32159,seq__31269_32153__$1,temp__5804__auto___32152))
], 0));


var G__32160 = cljs.core.next(seq__31269_32153__$1);
var G__32161 = null;
var G__32162 = (0);
var G__32163 = (0);
seq__31269_32143 = G__32160;
chunk__31270_32144 = G__32161;
count__31271_32145 = G__32162;
i__31272_32146 = G__32163;
continue;
}
} else {
}
}
break;
}
var seq__31297_32164 = cljs.core.seq(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rot13","rot13",-631596017),new cljs.core.Keyword(null,"test-data","test-data",805102338),new cljs.core.Keyword("navigation","active-section","navigation/active-section",-1272053018),new cljs.core.Keyword("navigation","active-view-wealth","navigation/active-view-wealth",-1986836686),new cljs.core.Keyword("navigation","active-view-positions","navigation/active-view-positions",1459188376),new cljs.core.Keyword("navigation","active-view-vault","navigation/active-view-vault",-1235342702),new cljs.core.Keyword("navigation","active-view-cellar","navigation/active-view-cellar",-1146180625),new cljs.core.Keyword("navigation","active-view-tools","navigation/active-view-tools",-2036856651),new cljs.core.Keyword(null,"positions-summary","positions-summary",-17081762),new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254)], null));
var chunk__31298_32165 = null;
var count__31299_32166 = (0);
var i__31300_32167 = (0);
while(true){
if((i__31300_32167 < count__31299_32166)){
var k_32168 = chunk__31298_32165.cljs$core$IIndexed$_nth$arity$2(null,i__31300_32167);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_32168,((function (seq__31297_32164,chunk__31298_32165,count__31299_32166,i__31300_32167,k_32168){
return (function (db,p__31311){
var vec__31312 = p__31311;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31312,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31312,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_32168,data);
});})(seq__31297_32164,chunk__31298_32165,count__31299_32166,i__31300_32167,k_32168))
);


var G__32169 = seq__31297_32164;
var G__32170 = chunk__31298_32165;
var G__32171 = count__31299_32166;
var G__32172 = (i__31300_32167 + (1));
seq__31297_32164 = G__32169;
chunk__31298_32165 = G__32170;
count__31299_32166 = G__32171;
i__31300_32167 = G__32172;
continue;
} else {
var temp__5804__auto___32173 = cljs.core.seq(seq__31297_32164);
if(temp__5804__auto___32173){
var seq__31297_32174__$1 = temp__5804__auto___32173;
if(cljs.core.chunked_seq_QMARK_(seq__31297_32174__$1)){
var c__5568__auto___32175 = cljs.core.chunk_first(seq__31297_32174__$1);
var G__32176 = cljs.core.chunk_rest(seq__31297_32174__$1);
var G__32177 = c__5568__auto___32175;
var G__32178 = cljs.core.count(c__5568__auto___32175);
var G__32179 = (0);
seq__31297_32164 = G__32176;
chunk__31298_32165 = G__32177;
count__31299_32166 = G__32178;
i__31300_32167 = G__32179;
continue;
} else {
var k_32180 = cljs.core.first(seq__31297_32174__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_32180,((function (seq__31297_32164,chunk__31298_32165,count__31299_32166,i__31300_32167,k_32180,seq__31297_32174__$1,temp__5804__auto___32173){
return (function (db,p__31316){
var vec__31317 = p__31316;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31317,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31317,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_32180,data);
});})(seq__31297_32164,chunk__31298_32165,count__31299_32166,i__31300_32167,k_32180,seq__31297_32174__$1,temp__5804__auto___32173))
);


var G__32181 = cljs.core.next(seq__31297_32174__$1);
var G__32182 = null;
var G__32183 = (0);
var G__32184 = (0);
seq__31297_32164 = G__32181;
chunk__31298_32165 = G__32182;
count__31299_32166 = G__32183;
i__31300_32167 = G__32184;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("navigation","active","navigation/active",-1285216),(function (db,p__31321){
var vec__31322 = p__31321;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31322,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31322,(1),null);
var sub_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31322,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","active","navigation/active",-1285216),page], null),sub_page);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"instruments","instruments",-69874543),(function (p__31326,p__31327){
var map__31328 = p__31326;
var map__31328__$1 = cljs.core.__destructure_map(map__31328);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31328__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__31329 = p__31327;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31329,(0),null);
var instruments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31329,(1),null);
var positions = (cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db),cljs.core.PersistentVector.EMPTY);
if(and__5043__auto__){
return new cljs.core.Keyword(null,"naked-positions","naked-positions",-1170378384).cljs$core$IFn$_invoke$arity$1(db);
} else {
return and__5043__auto__;
}
})())?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__31325_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__31325_SHARP_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instruments","instruments",-69874543),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__31325_SHARP_)], null))], 0));
}),new cljs.core.Keyword(null,"naked-positions","naked-positions",-1170378384).cljs$core$IFn$_invoke$arity$1(db)):cljs.core.PersistentVector.EMPTY);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"all-instrument-ids","all-instrument-ids",-1013285519),cljs.core.keys(instruments),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"instruments","instruments",-69874543),instruments,new cljs.core.Keyword(null,"positions","positions",-1380538434),positions,new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(positions,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("implementation","live-positions","implementation/live-positions",1202101052),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function kdlyticsgui$mount$iter__31332(s__31333){
return (new cljs.core.LazySeq(null,(function (){
var s__31333__$1 = s__31333;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__31333__$1);
if(temp__5804__auto__){
var s__31333__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31333__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__31333__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__31335 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__31334 = (0);
while(true){
if((i__31334 < size__5522__auto__)){
var vec__31336 = cljs.core._nth(c__5521__auto__,i__31334);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31336,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31336,(1),null);
cljs.core.chunk_append(b__31335,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = ((function (i__31334,vec__31336,p,g,c__5521__auto__,size__5522__auto__,b__31335,s__31333__$2,temp__5804__auto__,positions,map__31328,map__31328__$1,db,vec__31329,_,instruments){
return (function kdlyticsgui$mount$iter__31332_$_iter__31339(s__31340){
return (new cljs.core.LazySeq(null,((function (i__31334,vec__31336,p,g,c__5521__auto__,size__5522__auto__,b__31335,s__31333__$2,temp__5804__auto__,positions,map__31328,map__31328__$1,db,vec__31329,_,instruments){
return (function (){
var s__31340__$1 = s__31340;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__31340__$1);
if(temp__5804__auto____$1){
var s__31340__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__31340__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__31340__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__31342 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__31341 = (0);
while(true){
if((i__31341 < size__5522__auto____$1)){
var line = cljs.core._nth(c__5521__auto____$1,i__31341);
if((((!((new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line) == null)))) && ((new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line) > (0))))){
cljs.core.chunk_append(b__31342,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line)], null));

var G__32185 = (i__31341 + (1));
i__31341 = G__32185;
continue;
} else {
var G__32186 = (i__31341 + (1));
i__31341 = G__32186;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31342),kdlyticsgui$mount$iter__31332_$_iter__31339(cljs.core.chunk_rest(s__31340__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31342),null);
}
} else {
var line = cljs.core.first(s__31340__$2);
if((((!((new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line) == null)))) && ((new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line) > (0))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line)], null),kdlyticsgui$mount$iter__31332_$_iter__31339(cljs.core.rest(s__31340__$2)));
} else {
var G__32187 = cljs.core.rest(s__31340__$2);
s__31340__$1 = G__32187;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__31334,vec__31336,p,g,c__5521__auto__,size__5522__auto__,b__31335,s__31333__$2,temp__5804__auto__,positions,map__31328,map__31328__$1,db,vec__31329,_,instruments))
,null,null));
});})(i__31334,vec__31336,p,g,c__5521__auto__,size__5522__auto__,b__31335,s__31333__$2,temp__5804__auto__,positions,map__31328,map__31328__$1,db,vec__31329,_,instruments))
;
return iter__5523__auto__(g);
})())], null));

var G__32188 = (i__31334 + (1));
i__31334 = G__32188;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31335),kdlyticsgui$mount$iter__31332(cljs.core.chunk_rest(s__31333__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31335),null);
}
} else {
var vec__31347 = cljs.core.first(s__31333__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31347,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31347,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = ((function (vec__31347,p,g,s__31333__$2,temp__5804__auto__,positions,map__31328,map__31328__$1,db,vec__31329,_,instruments){
return (function kdlyticsgui$mount$iter__31332_$_iter__31350(s__31351){
return (new cljs.core.LazySeq(null,(function (){
var s__31351__$1 = s__31351;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__31351__$1);
if(temp__5804__auto____$1){
var s__31351__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__31351__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__31351__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__31353 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__31352 = (0);
while(true){
if((i__31352 < size__5522__auto__)){
var line = cljs.core._nth(c__5521__auto__,i__31352);
if((((!((new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line) == null)))) && ((new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line) > (0))))){
cljs.core.chunk_append(b__31353,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line)], null));

var G__32189 = (i__31352 + (1));
i__31352 = G__32189;
continue;
} else {
var G__32190 = (i__31352 + (1));
i__31352 = G__32190;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31353),kdlyticsgui$mount$iter__31332_$_iter__31350(cljs.core.chunk_rest(s__31351__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31353),null);
}
} else {
var line = cljs.core.first(s__31351__$2);
if((((!((new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line) == null)))) && ((new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line) > (0))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line)], null),kdlyticsgui$mount$iter__31332_$_iter__31350(cljs.core.rest(s__31351__$2)));
} else {
var G__32191 = cljs.core.rest(s__31351__$2);
s__31351__$1 = G__32191;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__31347,p,g,s__31333__$2,temp__5804__auto__,positions,map__31328,map__31328__$1,db,vec__31329,_,instruments))
;
return iter__5523__auto__(g);
})())], null),kdlyticsgui$mount$iter__31332(cljs.core.rest(s__31333__$2)));
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
var seq__31358_32192 = cljs.core.seq(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219),new cljs.core.Keyword("portfolio-history","filter","portfolio-history/filter",1821014145),new cljs.core.Keyword("attribution-history","filter","attribution-history/filter",-868840340)], null));
var chunk__31359_32193 = null;
var count__31360_32194 = (0);
var i__31361_32195 = (0);
while(true){
if((i__31361_32195 < count__31360_32194)){
var k_32196 = chunk__31359_32193.cljs$core$IIndexed$_nth$arity$2(null,i__31361_32195);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_32196,((function (seq__31358_32192,chunk__31359_32193,count__31360_32194,i__31361_32195,k_32196){
return (function (db,p__31375){
var vec__31376 = p__31375;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31376,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31376,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31376,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_32196,id], null),f);
});})(seq__31358_32192,chunk__31359_32193,count__31360_32194,i__31361_32195,k_32196))
);


var G__32197 = seq__31358_32192;
var G__32198 = chunk__31359_32193;
var G__32199 = count__31360_32194;
var G__32200 = (i__31361_32195 + (1));
seq__31358_32192 = G__32197;
chunk__31359_32193 = G__32198;
count__31360_32194 = G__32199;
i__31361_32195 = G__32200;
continue;
} else {
var temp__5804__auto___32201 = cljs.core.seq(seq__31358_32192);
if(temp__5804__auto___32201){
var seq__31358_32202__$1 = temp__5804__auto___32201;
if(cljs.core.chunked_seq_QMARK_(seq__31358_32202__$1)){
var c__5568__auto___32203 = cljs.core.chunk_first(seq__31358_32202__$1);
var G__32204 = cljs.core.chunk_rest(seq__31358_32202__$1);
var G__32205 = c__5568__auto___32203;
var G__32206 = cljs.core.count(c__5568__auto___32203);
var G__32207 = (0);
seq__31358_32192 = G__32204;
chunk__31359_32193 = G__32205;
count__31360_32194 = G__32206;
i__31361_32195 = G__32207;
continue;
} else {
var k_32208 = cljs.core.first(seq__31358_32202__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_32208,((function (seq__31358_32192,chunk__31359_32193,count__31360_32194,i__31361_32195,k_32208,seq__31358_32202__$1,temp__5804__auto___32201){
return (function (db,p__31382){
var vec__31383 = p__31382;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31383,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31383,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31383,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_32208,id], null),f);
});})(seq__31358_32192,chunk__31359_32193,count__31360_32194,i__31361_32195,k_32208,seq__31358_32202__$1,temp__5804__auto___32201))
);


var G__32209 = cljs.core.next(seq__31358_32202__$1);
var G__32210 = null;
var G__32211 = (0);
var G__32212 = (0);
seq__31358_32192 = G__32209;
chunk__31359_32193 = G__32210;
count__31360_32194 = G__32211;
i__31361_32195 = G__32212;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),(function (db,p__31386){
var vec__31387 = p__31386;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31387,(0),null);
var qt_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31387,(1),null);
var dt = qt_date.replace("\"","");
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),dt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("portfolio-history","end-period","portfolio-history/end-period",1624676397),kdlyticsgui.tools.gdate__GT_yyyyMMdd(kdlyticsgui.tools.ddMMMyyyy__GT_gdate(dt))], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),(function (db,p__31390){
var vec__31391 = p__31390;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31391,(0),null);
var attribution_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31391,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),attribution_date.replace("\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),(function (db,p__31395){
var vec__31396 = p__31395;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31396,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31396,(1),null);
var G__31399 = snapshot;
switch (G__31399) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31399)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),(function (db,p__31401){
var vec__31402 = p__31401;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31402,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31402,(1),null);
var G__31405 = snapshot;
switch (G__31405) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31405)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),(function (db,p__31407){
var vec__31408 = p__31407;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31408,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31408,(1),null);
var G__31411 = snapshot;
switch (G__31411) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31411)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cycle-shortcut","cycle-shortcut",-1617058214),(function (db,p__31412){
var vec__31413 = p__31412;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31413,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31413,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31413,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword("navigation","active-view","navigation/active-view",800211184).cljs$core$IFn$_invoke$arity$1(db)),"-risk/shortcut"].join(''));
var shortcut_value = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
if((shortcut_value < (4))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(shortcut_value + (1)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(1));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tree-table","tree-table",-1263002012),(function (db,p__31416){
var vec__31417 = p__31416;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31417,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31417,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31417,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword("navigation","active-view","navigation/active-view",800211184).cljs$core$IFn$_invoke$arity$1(db)),"-risk/display-style"].join(''));
var G__31420 = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
switch (G__31420) {
case "Tree":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Table");

break;
case "Table":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Tree");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31420)].join('')));

}
}));
/**
 * if response header is application/json keys will get keywordized automatically - otherwise send as text/plain
 */
kdlyticsgui.mount.http_get_dispatch = (function kdlyticsgui$mount$http_get_dispatch(request){
var vr = ((cljs.core.vector_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__31421 = cljs.core.seq(vr);
var chunk__31422 = null;
var count__31423 = (0);
var i__31424 = (0);
while(true){
if((i__31424 < count__31423)){
var r = chunk__31422.cljs$core$IIndexed$_nth$arity$2(null,i__31424);
var c__27979__auto___32217 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__31421,chunk__31422,count__31423,i__31424,c__27979__auto___32217,r,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__31421,chunk__31422,count__31423,i__31424,c__27979__auto___32217,r,vr){
return (function (state_31509){
var state_val_31510 = (state_31509[(1)]);
if((state_val_31510 === (1))){
var inst_31489 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_31490 = cljs_http.client.get(inst_31489);
var state_31509__$1 = state_31509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31509__$1,(2),inst_31490);
} else {
if((state_val_31510 === (2))){
var inst_31492 = (state_31509[(2)]);
var inst_31493 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_31494 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_31492);
var inst_31495 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_31493,inst_31494);
var inst_31496 = re_frame.core.dispatch(inst_31495);
var inst_31497 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_31509__$1 = (function (){var statearr_31511 = state_31509;
(statearr_31511[(7)] = inst_31496);

return statearr_31511;
})();
if(cljs.core.truth_(inst_31497)){
var statearr_31512_32218 = state_31509__$1;
(statearr_31512_32218[(1)] = (3));

} else {
var statearr_31513_32219 = state_31509__$1;
(statearr_31513_32219[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (3))){
var inst_31499 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31500 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_31501 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_31502 = [inst_31500,inst_31501];
var inst_31503 = (new cljs.core.PersistentVector(null,2,(5),inst_31499,inst_31502,null));
var inst_31504 = re_frame.core.dispatch(inst_31503);
var state_31509__$1 = state_31509;
var statearr_31514_32220 = state_31509__$1;
(statearr_31514_32220[(2)] = inst_31504);

(statearr_31514_32220[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (4))){
var state_31509__$1 = state_31509;
var statearr_31515_32221 = state_31509__$1;
(statearr_31515_32221[(2)] = null);

(statearr_31515_32221[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (5))){
var inst_31507 = (state_31509[(2)]);
var state_31509__$1 = state_31509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31509__$1,inst_31507);
} else {
return null;
}
}
}
}
}
});})(seq__31421,chunk__31422,count__31423,i__31424,c__27979__auto___32217,r,vr))
;
return ((function (seq__31421,chunk__31422,count__31423,i__31424,switch__27909__auto__,c__27979__auto___32217,r,vr){
return (function() {
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____0 = (function (){
var statearr_31516 = [null,null,null,null,null,null,null,null];
(statearr_31516[(0)] = kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__);

(statearr_31516[(1)] = (1));

return statearr_31516;
});
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____1 = (function (state_31509){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_31509);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e31517){var ex__27913__auto__ = e31517;
var statearr_31518_32222 = state_31509;
(statearr_31518_32222[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_31509[(4)]))){
var statearr_31519_32223 = state_31509;
(statearr_31519_32223[(1)] = cljs.core.first((state_31509[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32224 = state_31509;
state_31509 = G__32224;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__ = function(state_31509){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____1.call(this,state_31509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__;
})()
;})(seq__31421,chunk__31422,count__31423,i__31424,switch__27909__auto__,c__27979__auto___32217,r,vr))
})();
var state__27981__auto__ = (function (){var statearr_31520 = f__27980__auto__();
(statearr_31520[(6)] = c__27979__auto___32217);

return statearr_31520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__31421,chunk__31422,count__31423,i__31424,c__27979__auto___32217,r,vr))
);



var G__32225 = seq__31421;
var G__32226 = chunk__31422;
var G__32227 = count__31423;
var G__32228 = (i__31424 + (1));
seq__31421 = G__32225;
chunk__31422 = G__32226;
count__31423 = G__32227;
i__31424 = G__32228;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31421);
if(temp__5804__auto__){
var seq__31421__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31421__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__31421__$1);
var G__32229 = cljs.core.chunk_rest(seq__31421__$1);
var G__32230 = c__5568__auto__;
var G__32231 = cljs.core.count(c__5568__auto__);
var G__32232 = (0);
seq__31421 = G__32229;
chunk__31422 = G__32230;
count__31423 = G__32231;
i__31424 = G__32232;
continue;
} else {
var r = cljs.core.first(seq__31421__$1);
var c__27979__auto___32233 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__31421,chunk__31422,count__31423,i__31424,c__27979__auto___32233,r,seq__31421__$1,temp__5804__auto__,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__31421,chunk__31422,count__31423,i__31424,c__27979__auto___32233,r,seq__31421__$1,temp__5804__auto__,vr){
return (function (state_31541){
var state_val_31542 = (state_31541[(1)]);
if((state_val_31542 === (1))){
var inst_31521 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_31522 = cljs_http.client.get(inst_31521);
var state_31541__$1 = state_31541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31541__$1,(2),inst_31522);
} else {
if((state_val_31542 === (2))){
var inst_31524 = (state_31541[(2)]);
var inst_31525 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_31526 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_31524);
var inst_31527 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_31525,inst_31526);
var inst_31528 = re_frame.core.dispatch(inst_31527);
var inst_31529 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_31541__$1 = (function (){var statearr_31543 = state_31541;
(statearr_31543[(7)] = inst_31528);

return statearr_31543;
})();
if(cljs.core.truth_(inst_31529)){
var statearr_31544_32234 = state_31541__$1;
(statearr_31544_32234[(1)] = (3));

} else {
var statearr_31545_32235 = state_31541__$1;
(statearr_31545_32235[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (3))){
var inst_31531 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31532 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_31533 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_31534 = [inst_31532,inst_31533];
var inst_31535 = (new cljs.core.PersistentVector(null,2,(5),inst_31531,inst_31534,null));
var inst_31536 = re_frame.core.dispatch(inst_31535);
var state_31541__$1 = state_31541;
var statearr_31546_32236 = state_31541__$1;
(statearr_31546_32236[(2)] = inst_31536);

(statearr_31546_32236[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (4))){
var state_31541__$1 = state_31541;
var statearr_31547_32237 = state_31541__$1;
(statearr_31547_32237[(2)] = null);

(statearr_31547_32237[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (5))){
var inst_31539 = (state_31541[(2)]);
var state_31541__$1 = state_31541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31541__$1,inst_31539);
} else {
return null;
}
}
}
}
}
});})(seq__31421,chunk__31422,count__31423,i__31424,c__27979__auto___32233,r,seq__31421__$1,temp__5804__auto__,vr))
;
return ((function (seq__31421,chunk__31422,count__31423,i__31424,switch__27909__auto__,c__27979__auto___32233,r,seq__31421__$1,temp__5804__auto__,vr){
return (function() {
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____0 = (function (){
var statearr_31548 = [null,null,null,null,null,null,null,null];
(statearr_31548[(0)] = kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__);

(statearr_31548[(1)] = (1));

return statearr_31548;
});
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____1 = (function (state_31541){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_31541);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e31549){var ex__27913__auto__ = e31549;
var statearr_31550_32238 = state_31541;
(statearr_31550_32238[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_31541[(4)]))){
var statearr_31551_32239 = state_31541;
(statearr_31551_32239[(1)] = cljs.core.first((state_31541[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32240 = state_31541;
state_31541 = G__32240;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__ = function(state_31541){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____1.call(this,state_31541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__;
})()
;})(seq__31421,chunk__31422,count__31423,i__31424,switch__27909__auto__,c__27979__auto___32233,r,seq__31421__$1,temp__5804__auto__,vr))
})();
var state__27981__auto__ = (function (){var statearr_31552 = f__27980__auto__();
(statearr_31552[(6)] = c__27979__auto___32233);

return statearr_31552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__31421,chunk__31422,count__31423,i__31424,c__27979__auto___32233,r,seq__31421__$1,temp__5804__auto__,vr))
);



var G__32241 = cljs.core.next(seq__31421__$1);
var G__32242 = null;
var G__32243 = (0);
var G__32244 = (0);
seq__31421 = G__32241;
chunk__31422 = G__32242;
count__31423 = G__32243;
i__31424 = G__32244;
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
var seq__31553 = cljs.core.seq(vr);
var chunk__31554 = null;
var count__31555 = (0);
var i__31556 = (0);
while(true){
if((i__31556 < count__31555)){
var r = chunk__31554.cljs$core$IIndexed$_nth$arity$2(null,i__31556);
var c__27979__auto___32245 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__31553,chunk__31554,count__31555,i__31556,c__27979__auto___32245,r,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__31553,chunk__31554,count__31555,i__31556,c__27979__auto___32245,r,vr){
return (function (state_31647){
var state_val_31648 = (state_31647[(1)]);
if((state_val_31648 === (1))){
var inst_31625 = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(request);
var inst_31626 = new cljs.core.Keyword(null,"asset","asset",-280274466).cljs$core$IFn$_invoke$arity$1(request);
var inst_31627 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"asset?namespace=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31625),"&asset=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31626)].join('');
var inst_31628 = cljs_http.client.get(inst_31627);
var state_31647__$1 = state_31647;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31647__$1,(2),inst_31628);
} else {
if((state_val_31648 === (2))){
var inst_31630 = (state_31647[(2)]);
var inst_31631 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_31632 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_31630);
var inst_31633 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_31631,inst_31632);
var inst_31634 = re_frame.core.dispatch(inst_31633);
var inst_31635 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_31647__$1 = (function (){var statearr_31649 = state_31647;
(statearr_31649[(7)] = inst_31634);

return statearr_31649;
})();
if(cljs.core.truth_(inst_31635)){
var statearr_31650_32246 = state_31647__$1;
(statearr_31650_32246[(1)] = (3));

} else {
var statearr_31651_32247 = state_31647__$1;
(statearr_31651_32247[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (3))){
var inst_31637 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31638 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_31639 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_31640 = [inst_31638,inst_31639];
var inst_31641 = (new cljs.core.PersistentVector(null,2,(5),inst_31637,inst_31640,null));
var inst_31642 = re_frame.core.dispatch(inst_31641);
var state_31647__$1 = state_31647;
var statearr_31652_32248 = state_31647__$1;
(statearr_31652_32248[(2)] = inst_31642);

(statearr_31652_32248[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (4))){
var state_31647__$1 = state_31647;
var statearr_31653_32249 = state_31647__$1;
(statearr_31653_32249[(2)] = null);

(statearr_31653_32249[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (5))){
var inst_31645 = (state_31647[(2)]);
var state_31647__$1 = state_31647;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31647__$1,inst_31645);
} else {
return null;
}
}
}
}
}
});})(seq__31553,chunk__31554,count__31555,i__31556,c__27979__auto___32245,r,vr))
;
return ((function (seq__31553,chunk__31554,count__31555,i__31556,switch__27909__auto__,c__27979__auto___32245,r,vr){
return (function() {
var kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____0 = (function (){
var statearr_31654 = [null,null,null,null,null,null,null,null];
(statearr_31654[(0)] = kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__);

(statearr_31654[(1)] = (1));

return statearr_31654;
});
var kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____1 = (function (state_31647){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_31647);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e31655){var ex__27913__auto__ = e31655;
var statearr_31656_32250 = state_31647;
(statearr_31656_32250[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_31647[(4)]))){
var statearr_31657_32251 = state_31647;
(statearr_31657_32251[(1)] = cljs.core.first((state_31647[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32252 = state_31647;
state_31647 = G__32252;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__ = function(state_31647){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____1.call(this,state_31647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__;
})()
;})(seq__31553,chunk__31554,count__31555,i__31556,switch__27909__auto__,c__27979__auto___32245,r,vr))
})();
var state__27981__auto__ = (function (){var statearr_31658 = f__27980__auto__();
(statearr_31658[(6)] = c__27979__auto___32245);

return statearr_31658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__31553,chunk__31554,count__31555,i__31556,c__27979__auto___32245,r,vr))
);



var G__32253 = seq__31553;
var G__32254 = chunk__31554;
var G__32255 = count__31555;
var G__32256 = (i__31556 + (1));
seq__31553 = G__32253;
chunk__31554 = G__32254;
count__31555 = G__32255;
i__31556 = G__32256;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31553);
if(temp__5804__auto__){
var seq__31553__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31553__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__31553__$1);
var G__32257 = cljs.core.chunk_rest(seq__31553__$1);
var G__32258 = c__5568__auto__;
var G__32259 = cljs.core.count(c__5568__auto__);
var G__32260 = (0);
seq__31553 = G__32257;
chunk__31554 = G__32258;
count__31555 = G__32259;
i__31556 = G__32260;
continue;
} else {
var r = cljs.core.first(seq__31553__$1);
var c__27979__auto___32261 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__31553,chunk__31554,count__31555,i__31556,c__27979__auto___32261,r,seq__31553__$1,temp__5804__auto__,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__31553,chunk__31554,count__31555,i__31556,c__27979__auto___32261,r,seq__31553__$1,temp__5804__auto__,vr){
return (function (state_31681){
var state_val_31682 = (state_31681[(1)]);
if((state_val_31682 === (1))){
var inst_31659 = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(request);
var inst_31660 = new cljs.core.Keyword(null,"asset","asset",-280274466).cljs$core$IFn$_invoke$arity$1(request);
var inst_31661 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"asset?namespace=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31659),"&asset=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31660)].join('');
var inst_31662 = cljs_http.client.get(inst_31661);
var state_31681__$1 = state_31681;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31681__$1,(2),inst_31662);
} else {
if((state_val_31682 === (2))){
var inst_31664 = (state_31681[(2)]);
var inst_31665 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_31666 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_31664);
var inst_31667 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_31665,inst_31666);
var inst_31668 = re_frame.core.dispatch(inst_31667);
var inst_31669 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_31681__$1 = (function (){var statearr_31683 = state_31681;
(statearr_31683[(7)] = inst_31668);

return statearr_31683;
})();
if(cljs.core.truth_(inst_31669)){
var statearr_31684_32262 = state_31681__$1;
(statearr_31684_32262[(1)] = (3));

} else {
var statearr_31685_32263 = state_31681__$1;
(statearr_31685_32263[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (3))){
var inst_31671 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31672 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_31673 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_31674 = [inst_31672,inst_31673];
var inst_31675 = (new cljs.core.PersistentVector(null,2,(5),inst_31671,inst_31674,null));
var inst_31676 = re_frame.core.dispatch(inst_31675);
var state_31681__$1 = state_31681;
var statearr_31686_32264 = state_31681__$1;
(statearr_31686_32264[(2)] = inst_31676);

(statearr_31686_32264[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (4))){
var state_31681__$1 = state_31681;
var statearr_31687_32265 = state_31681__$1;
(statearr_31687_32265[(2)] = null);

(statearr_31687_32265[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (5))){
var inst_31679 = (state_31681[(2)]);
var state_31681__$1 = state_31681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31681__$1,inst_31679);
} else {
return null;
}
}
}
}
}
});})(seq__31553,chunk__31554,count__31555,i__31556,c__27979__auto___32261,r,seq__31553__$1,temp__5804__auto__,vr))
;
return ((function (seq__31553,chunk__31554,count__31555,i__31556,switch__27909__auto__,c__27979__auto___32261,r,seq__31553__$1,temp__5804__auto__,vr){
return (function() {
var kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____0 = (function (){
var statearr_31688 = [null,null,null,null,null,null,null,null];
(statearr_31688[(0)] = kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__);

(statearr_31688[(1)] = (1));

return statearr_31688;
});
var kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____1 = (function (state_31681){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_31681);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e31689){var ex__27913__auto__ = e31689;
var statearr_31690_32266 = state_31681;
(statearr_31690_32266[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_31681[(4)]))){
var statearr_31691_32267 = state_31681;
(statearr_31691_32267[(1)] = cljs.core.first((state_31681[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32268 = state_31681;
state_31681 = G__32268;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__ = function(state_31681){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____1.call(this,state_31681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__;
})()
;})(seq__31553,chunk__31554,count__31555,i__31556,switch__27909__auto__,c__27979__auto___32261,r,seq__31553__$1,temp__5804__auto__,vr))
})();
var state__27981__auto__ = (function (){var statearr_31692 = f__27980__auto__();
(statearr_31692[(6)] = c__27979__auto___32261);

return statearr_31692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__31553,chunk__31554,count__31555,i__31556,c__27979__auto___32261,r,seq__31553__$1,temp__5804__auto__,vr))
);



var G__32269 = cljs.core.next(seq__31553__$1);
var G__32270 = null;
var G__32271 = (0);
var G__32272 = (0);
seq__31553 = G__32269;
chunk__31554 = G__32270;
count__31555 = G__32271;
i__31556 = G__32272;
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
var seq__31693 = cljs.core.seq(vr);
var chunk__31694 = null;
var count__31695 = (0);
var i__31696 = (0);
while(true){
if((i__31696 < count__31695)){
var r = chunk__31694.cljs$core$IIndexed$_nth$arity$2(null,i__31696);
var c__27979__auto___32273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__31693,chunk__31694,count__31695,i__31696,c__27979__auto___32273,r,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__31693,chunk__31694,count__31695,i__31696,c__27979__auto___32273,r,vr){
return (function (state_31830){
var state_val_31831 = (state_31830[(1)]);
if((state_val_31831 === (1))){
var inst_31797 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_31798 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var state_31830__$1 = (function (){var statearr_31832 = state_31830;
(statearr_31832[(7)] = inst_31797);

return statearr_31832;
})();
if(cljs.core.truth_(inst_31798)){
var statearr_31833_32274 = state_31830__$1;
(statearr_31833_32274[(1)] = (3));

} else {
var statearr_31834_32275 = state_31830__$1;
(statearr_31834_32275[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31831 === (2))){
var inst_31813 = (state_31830[(2)]);
var inst_31814 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_31815 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_31813);
var inst_31816 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_31814,inst_31815);
var inst_31817 = re_frame.core.dispatch(inst_31816);
var inst_31818 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_31830__$1 = (function (){var statearr_31835 = state_31830;
(statearr_31835[(8)] = inst_31817);

return statearr_31835;
})();
if(cljs.core.truth_(inst_31818)){
var statearr_31836_32276 = state_31830__$1;
(statearr_31836_32276[(1)] = (6));

} else {
var statearr_31837_32277 = state_31830__$1;
(statearr_31837_32277[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31831 === (3))){
var inst_31800 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_31801 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var inst_31802 = [inst_31801];
var inst_31803 = cljs.core.PersistentHashMap.fromArrays(inst_31800,inst_31802);
var state_31830__$1 = state_31830;
var statearr_31838_32278 = state_31830__$1;
(statearr_31838_32278[(2)] = inst_31803);

(statearr_31838_32278[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31831 === (4))){
var inst_31805 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_31806 = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(r);
var inst_31807 = [inst_31806];
var inst_31808 = cljs.core.PersistentHashMap.fromArrays(inst_31805,inst_31807);
var state_31830__$1 = state_31830;
var statearr_31839_32279 = state_31830__$1;
(statearr_31839_32279[(2)] = inst_31808);

(statearr_31839_32279[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31831 === (5))){
var inst_31797 = (state_31830[(7)]);
var inst_31810 = (state_31830[(2)]);
var inst_31811 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_31797,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_31810], 0));
var state_31830__$1 = state_31830;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31830__$1,(2),inst_31811);
} else {
if((state_val_31831 === (6))){
var inst_31820 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31821 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_31822 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_31823 = [inst_31821,inst_31822];
var inst_31824 = (new cljs.core.PersistentVector(null,2,(5),inst_31820,inst_31823,null));
var inst_31825 = re_frame.core.dispatch(inst_31824);
var state_31830__$1 = state_31830;
var statearr_31840_32280 = state_31830__$1;
(statearr_31840_32280[(2)] = inst_31825);

(statearr_31840_32280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31831 === (7))){
var state_31830__$1 = state_31830;
var statearr_31841_32281 = state_31830__$1;
(statearr_31841_32281[(2)] = null);

(statearr_31841_32281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31831 === (8))){
var inst_31828 = (state_31830[(2)]);
var state_31830__$1 = state_31830;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31830__$1,inst_31828);
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
});})(seq__31693,chunk__31694,count__31695,i__31696,c__27979__auto___32273,r,vr))
;
return ((function (seq__31693,chunk__31694,count__31695,i__31696,switch__27909__auto__,c__27979__auto___32273,r,vr){
return (function() {
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____0 = (function (){
var statearr_31842 = [null,null,null,null,null,null,null,null,null];
(statearr_31842[(0)] = kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__);

(statearr_31842[(1)] = (1));

return statearr_31842;
});
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____1 = (function (state_31830){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_31830);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e31843){var ex__27913__auto__ = e31843;
var statearr_31844_32282 = state_31830;
(statearr_31844_32282[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_31830[(4)]))){
var statearr_31845_32283 = state_31830;
(statearr_31845_32283[(1)] = cljs.core.first((state_31830[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32284 = state_31830;
state_31830 = G__32284;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__ = function(state_31830){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____1.call(this,state_31830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__;
})()
;})(seq__31693,chunk__31694,count__31695,i__31696,switch__27909__auto__,c__27979__auto___32273,r,vr))
})();
var state__27981__auto__ = (function (){var statearr_31846 = f__27980__auto__();
(statearr_31846[(6)] = c__27979__auto___32273);

return statearr_31846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__31693,chunk__31694,count__31695,i__31696,c__27979__auto___32273,r,vr))
);



var G__32285 = seq__31693;
var G__32286 = chunk__31694;
var G__32287 = count__31695;
var G__32288 = (i__31696 + (1));
seq__31693 = G__32285;
chunk__31694 = G__32286;
count__31695 = G__32287;
i__31696 = G__32288;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31693);
if(temp__5804__auto__){
var seq__31693__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31693__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__31693__$1);
var G__32289 = cljs.core.chunk_rest(seq__31693__$1);
var G__32290 = c__5568__auto__;
var G__32291 = cljs.core.count(c__5568__auto__);
var G__32292 = (0);
seq__31693 = G__32289;
chunk__31694 = G__32290;
count__31695 = G__32291;
i__31696 = G__32292;
continue;
} else {
var r = cljs.core.first(seq__31693__$1);
var c__27979__auto___32293 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__31693,chunk__31694,count__31695,i__31696,c__27979__auto___32293,r,seq__31693__$1,temp__5804__auto__,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__31693,chunk__31694,count__31695,i__31696,c__27979__auto___32293,r,seq__31693__$1,temp__5804__auto__,vr){
return (function (state_31880){
var state_val_31881 = (state_31880[(1)]);
if((state_val_31881 === (1))){
var inst_31847 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_31848 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var state_31880__$1 = (function (){var statearr_31882 = state_31880;
(statearr_31882[(7)] = inst_31847);

return statearr_31882;
})();
if(cljs.core.truth_(inst_31848)){
var statearr_31883_32294 = state_31880__$1;
(statearr_31883_32294[(1)] = (3));

} else {
var statearr_31884_32295 = state_31880__$1;
(statearr_31884_32295[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (2))){
var inst_31863 = (state_31880[(2)]);
var inst_31864 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_31865 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_31863);
var inst_31866 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_31864,inst_31865);
var inst_31867 = re_frame.core.dispatch(inst_31866);
var inst_31868 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_31880__$1 = (function (){var statearr_31885 = state_31880;
(statearr_31885[(8)] = inst_31867);

return statearr_31885;
})();
if(cljs.core.truth_(inst_31868)){
var statearr_31886_32296 = state_31880__$1;
(statearr_31886_32296[(1)] = (6));

} else {
var statearr_31887_32297 = state_31880__$1;
(statearr_31887_32297[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (3))){
var inst_31850 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_31851 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var inst_31852 = [inst_31851];
var inst_31853 = cljs.core.PersistentHashMap.fromArrays(inst_31850,inst_31852);
var state_31880__$1 = state_31880;
var statearr_31888_32298 = state_31880__$1;
(statearr_31888_32298[(2)] = inst_31853);

(statearr_31888_32298[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (4))){
var inst_31855 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_31856 = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(r);
var inst_31857 = [inst_31856];
var inst_31858 = cljs.core.PersistentHashMap.fromArrays(inst_31855,inst_31857);
var state_31880__$1 = state_31880;
var statearr_31889_32299 = state_31880__$1;
(statearr_31889_32299[(2)] = inst_31858);

(statearr_31889_32299[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (5))){
var inst_31847 = (state_31880[(7)]);
var inst_31860 = (state_31880[(2)]);
var inst_31861 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_31847,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_31860], 0));
var state_31880__$1 = state_31880;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31880__$1,(2),inst_31861);
} else {
if((state_val_31881 === (6))){
var inst_31870 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31871 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_31872 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_31873 = [inst_31871,inst_31872];
var inst_31874 = (new cljs.core.PersistentVector(null,2,(5),inst_31870,inst_31873,null));
var inst_31875 = re_frame.core.dispatch(inst_31874);
var state_31880__$1 = state_31880;
var statearr_31890_32300 = state_31880__$1;
(statearr_31890_32300[(2)] = inst_31875);

(statearr_31890_32300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (7))){
var state_31880__$1 = state_31880;
var statearr_31891_32301 = state_31880__$1;
(statearr_31891_32301[(2)] = null);

(statearr_31891_32301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (8))){
var inst_31878 = (state_31880[(2)]);
var state_31880__$1 = state_31880;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31880__$1,inst_31878);
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
});})(seq__31693,chunk__31694,count__31695,i__31696,c__27979__auto___32293,r,seq__31693__$1,temp__5804__auto__,vr))
;
return ((function (seq__31693,chunk__31694,count__31695,i__31696,switch__27909__auto__,c__27979__auto___32293,r,seq__31693__$1,temp__5804__auto__,vr){
return (function() {
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____0 = (function (){
var statearr_31892 = [null,null,null,null,null,null,null,null,null];
(statearr_31892[(0)] = kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__);

(statearr_31892[(1)] = (1));

return statearr_31892;
});
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____1 = (function (state_31880){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_31880);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e31893){var ex__27913__auto__ = e31893;
var statearr_31894_32302 = state_31880;
(statearr_31894_32302[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_31880[(4)]))){
var statearr_31895_32303 = state_31880;
(statearr_31895_32303[(1)] = cljs.core.first((state_31880[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32304 = state_31880;
state_31880 = G__32304;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__ = function(state_31880){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____1.call(this,state_31880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__;
})()
;})(seq__31693,chunk__31694,count__31695,i__31696,switch__27909__auto__,c__27979__auto___32293,r,seq__31693__$1,temp__5804__auto__,vr))
})();
var state__27981__auto__ = (function (){var statearr_31896 = f__27980__auto__();
(statearr_31896[(6)] = c__27979__auto___32293);

return statearr_31896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__31693,chunk__31694,count__31695,i__31696,c__27979__auto___32293,r,seq__31693__$1,temp__5804__auto__,vr))
);



var G__32305 = cljs.core.next(seq__31693__$1);
var G__32306 = null;
var G__32307 = (0);
var G__32308 = (0);
seq__31693 = G__32305;
chunk__31694 = G__32306;
count__31695 = G__32307;
i__31696 = G__32308;
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
var seq__31897 = cljs.core.seq(vr);
var chunk__31898 = null;
var count__31899 = (0);
var i__31900 = (0);
while(true){
if((i__31900 < count__31899)){
var r = chunk__31898.cljs$core$IIndexed$_nth$arity$2(null,i__31900);
var c__27979__auto___32309 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__31897,chunk__31898,count__31899,i__31900,c__27979__auto___32309,r,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__31897,chunk__31898,count__31899,i__31900,c__27979__auto___32309,r,vr){
return (function (state_32034){
var state_val_32035 = (state_32034[(1)]);
if((state_val_32035 === (1))){
var inst_32001 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_32002 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var state_32034__$1 = (function (){var statearr_32036 = state_32034;
(statearr_32036[(7)] = inst_32001);

return statearr_32036;
})();
if(cljs.core.truth_(inst_32002)){
var statearr_32037_32310 = state_32034__$1;
(statearr_32037_32310[(1)] = (3));

} else {
var statearr_32038_32311 = state_32034__$1;
(statearr_32038_32311[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (2))){
var inst_32017 = (state_32034[(2)]);
var inst_32018 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_32019 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_32017);
var inst_32020 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_32018,inst_32019);
var inst_32021 = re_frame.core.dispatch(inst_32020);
var inst_32022 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_32034__$1 = (function (){var statearr_32039 = state_32034;
(statearr_32039[(8)] = inst_32021);

return statearr_32039;
})();
if(cljs.core.truth_(inst_32022)){
var statearr_32040_32312 = state_32034__$1;
(statearr_32040_32312[(1)] = (6));

} else {
var statearr_32041_32313 = state_32034__$1;
(statearr_32041_32313[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (3))){
var inst_32004 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052),new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_32005 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var inst_32006 = [inst_32005,"application/json;charset=UTF-8"];
var inst_32007 = cljs.core.PersistentHashMap.fromArrays(inst_32004,inst_32006);
var state_32034__$1 = state_32034;
var statearr_32042_32314 = state_32034__$1;
(statearr_32042_32314[(2)] = inst_32007);

(statearr_32042_32314[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (4))){
var inst_32009 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_32010 = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(r);
var inst_32011 = [inst_32010,"application/json;charset=UTF-8"];
var inst_32012 = cljs.core.PersistentHashMap.fromArrays(inst_32009,inst_32011);
var state_32034__$1 = state_32034;
var statearr_32043_32315 = state_32034__$1;
(statearr_32043_32315[(2)] = inst_32012);

(statearr_32043_32315[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (5))){
var inst_32001 = (state_32034[(7)]);
var inst_32014 = (state_32034[(2)]);
var inst_32015 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_32001,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_32014], 0));
var state_32034__$1 = state_32034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32034__$1,(2),inst_32015);
} else {
if((state_val_32035 === (6))){
var inst_32024 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32025 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_32026 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_32027 = [inst_32025,inst_32026];
var inst_32028 = (new cljs.core.PersistentVector(null,2,(5),inst_32024,inst_32027,null));
var inst_32029 = re_frame.core.dispatch(inst_32028);
var state_32034__$1 = state_32034;
var statearr_32044_32316 = state_32034__$1;
(statearr_32044_32316[(2)] = inst_32029);

(statearr_32044_32316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (7))){
var state_32034__$1 = state_32034;
var statearr_32045_32317 = state_32034__$1;
(statearr_32045_32317[(2)] = null);

(statearr_32045_32317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (8))){
var inst_32032 = (state_32034[(2)]);
var state_32034__$1 = state_32034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32034__$1,inst_32032);
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
});})(seq__31897,chunk__31898,count__31899,i__31900,c__27979__auto___32309,r,vr))
;
return ((function (seq__31897,chunk__31898,count__31899,i__31900,switch__27909__auto__,c__27979__auto___32309,r,vr){
return (function() {
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____0 = (function (){
var statearr_32046 = [null,null,null,null,null,null,null,null,null];
(statearr_32046[(0)] = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__);

(statearr_32046[(1)] = (1));

return statearr_32046;
});
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____1 = (function (state_32034){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_32034);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e32047){var ex__27913__auto__ = e32047;
var statearr_32048_32318 = state_32034;
(statearr_32048_32318[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_32034[(4)]))){
var statearr_32049_32319 = state_32034;
(statearr_32049_32319[(1)] = cljs.core.first((state_32034[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32320 = state_32034;
state_32034 = G__32320;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__ = function(state_32034){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____1.call(this,state_32034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__;
})()
;})(seq__31897,chunk__31898,count__31899,i__31900,switch__27909__auto__,c__27979__auto___32309,r,vr))
})();
var state__27981__auto__ = (function (){var statearr_32050 = f__27980__auto__();
(statearr_32050[(6)] = c__27979__auto___32309);

return statearr_32050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__31897,chunk__31898,count__31899,i__31900,c__27979__auto___32309,r,vr))
);



var G__32321 = seq__31897;
var G__32322 = chunk__31898;
var G__32323 = count__31899;
var G__32324 = (i__31900 + (1));
seq__31897 = G__32321;
chunk__31898 = G__32322;
count__31899 = G__32323;
i__31900 = G__32324;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31897);
if(temp__5804__auto__){
var seq__31897__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31897__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__31897__$1);
var G__32325 = cljs.core.chunk_rest(seq__31897__$1);
var G__32326 = c__5568__auto__;
var G__32327 = cljs.core.count(c__5568__auto__);
var G__32328 = (0);
seq__31897 = G__32325;
chunk__31898 = G__32326;
count__31899 = G__32327;
i__31900 = G__32328;
continue;
} else {
var r = cljs.core.first(seq__31897__$1);
var c__27979__auto___32329 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__31897,chunk__31898,count__31899,i__31900,c__27979__auto___32329,r,seq__31897__$1,temp__5804__auto__,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__31897,chunk__31898,count__31899,i__31900,c__27979__auto___32329,r,seq__31897__$1,temp__5804__auto__,vr){
return (function (state_32084){
var state_val_32085 = (state_32084[(1)]);
if((state_val_32085 === (1))){
var inst_32051 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_32052 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var state_32084__$1 = (function (){var statearr_32086 = state_32084;
(statearr_32086[(7)] = inst_32051);

return statearr_32086;
})();
if(cljs.core.truth_(inst_32052)){
var statearr_32087_32330 = state_32084__$1;
(statearr_32087_32330[(1)] = (3));

} else {
var statearr_32088_32331 = state_32084__$1;
(statearr_32088_32331[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32085 === (2))){
var inst_32067 = (state_32084[(2)]);
var inst_32068 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_32069 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_32067);
var inst_32070 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_32068,inst_32069);
var inst_32071 = re_frame.core.dispatch(inst_32070);
var inst_32072 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_32084__$1 = (function (){var statearr_32089 = state_32084;
(statearr_32089[(8)] = inst_32071);

return statearr_32089;
})();
if(cljs.core.truth_(inst_32072)){
var statearr_32090_32332 = state_32084__$1;
(statearr_32090_32332[(1)] = (6));

} else {
var statearr_32091_32333 = state_32084__$1;
(statearr_32091_32333[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32085 === (3))){
var inst_32054 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052),new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_32055 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var inst_32056 = [inst_32055,"application/json;charset=UTF-8"];
var inst_32057 = cljs.core.PersistentHashMap.fromArrays(inst_32054,inst_32056);
var state_32084__$1 = state_32084;
var statearr_32092_32334 = state_32084__$1;
(statearr_32092_32334[(2)] = inst_32057);

(statearr_32092_32334[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32085 === (4))){
var inst_32059 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_32060 = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(r);
var inst_32061 = [inst_32060,"application/json;charset=UTF-8"];
var inst_32062 = cljs.core.PersistentHashMap.fromArrays(inst_32059,inst_32061);
var state_32084__$1 = state_32084;
var statearr_32093_32335 = state_32084__$1;
(statearr_32093_32335[(2)] = inst_32062);

(statearr_32093_32335[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32085 === (5))){
var inst_32051 = (state_32084[(7)]);
var inst_32064 = (state_32084[(2)]);
var inst_32065 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_32051,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_32064], 0));
var state_32084__$1 = state_32084;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32084__$1,(2),inst_32065);
} else {
if((state_val_32085 === (6))){
var inst_32074 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32075 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_32076 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_32077 = [inst_32075,inst_32076];
var inst_32078 = (new cljs.core.PersistentVector(null,2,(5),inst_32074,inst_32077,null));
var inst_32079 = re_frame.core.dispatch(inst_32078);
var state_32084__$1 = state_32084;
var statearr_32094_32336 = state_32084__$1;
(statearr_32094_32336[(2)] = inst_32079);

(statearr_32094_32336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32085 === (7))){
var state_32084__$1 = state_32084;
var statearr_32095_32337 = state_32084__$1;
(statearr_32095_32337[(2)] = null);

(statearr_32095_32337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32085 === (8))){
var inst_32082 = (state_32084[(2)]);
var state_32084__$1 = state_32084;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32084__$1,inst_32082);
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
});})(seq__31897,chunk__31898,count__31899,i__31900,c__27979__auto___32329,r,seq__31897__$1,temp__5804__auto__,vr))
;
return ((function (seq__31897,chunk__31898,count__31899,i__31900,switch__27909__auto__,c__27979__auto___32329,r,seq__31897__$1,temp__5804__auto__,vr){
return (function() {
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____0 = (function (){
var statearr_32096 = [null,null,null,null,null,null,null,null,null];
(statearr_32096[(0)] = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__);

(statearr_32096[(1)] = (1));

return statearr_32096;
});
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____1 = (function (state_32084){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_32084);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e32097){var ex__27913__auto__ = e32097;
var statearr_32098_32338 = state_32084;
(statearr_32098_32338[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_32084[(4)]))){
var statearr_32099_32339 = state_32084;
(statearr_32099_32339[(1)] = cljs.core.first((state_32084[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32340 = state_32084;
state_32084 = G__32340;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__ = function(state_32084){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____1.call(this,state_32084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__;
})()
;})(seq__31897,chunk__31898,count__31899,i__31900,switch__27909__auto__,c__27979__auto___32329,r,seq__31897__$1,temp__5804__auto__,vr))
})();
var state__27981__auto__ = (function (){var statearr_32100 = f__27980__auto__();
(statearr_32100[(6)] = c__27979__auto___32329);

return statearr_32100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__31897,chunk__31898,count__31899,i__31900,c__27979__auto___32329,r,seq__31897__$1,temp__5804__auto__,vr))
);



var G__32341 = cljs.core.next(seq__31897__$1);
var G__32342 = null;
var G__32343 = (0);
var G__32344 = (0);
seq__31897 = G__32341;
chunk__31898 = G__32342;
count__31899 = G__32343;
i__31900 = G__32344;
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
var f__27980__auto__ = (function (){var switch__27909__auto__ = (function (state_32125){
var state_val_32126 = (state_32125[(1)]);
if((state_val_32126 === (1))){
var inst_32101 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_32102 = [new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)];
var inst_32103 = new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707).cljs$core$IFn$_invoke$arity$1(request);
var inst_32104 = [inst_32103];
var inst_32105 = cljs.core.PersistentHashMap.fromArrays(inst_32102,inst_32104);
var inst_32106 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_32101,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_32105], 0));
var state_32125__$1 = state_32125;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32125__$1,(2),inst_32106);
} else {
if((state_val_32126 === (2))){
var inst_32108 = (state_32125[(2)]);
var inst_32109 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_32110 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_32108);
var inst_32111 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_32109,inst_32110);
var inst_32112 = re_frame.core.dispatch(inst_32111);
var inst_32113 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_32125__$1 = (function (){var statearr_32127 = state_32125;
(statearr_32127[(7)] = inst_32112);

return statearr_32127;
})();
if(cljs.core.truth_(inst_32113)){
var statearr_32128_32345 = state_32125__$1;
(statearr_32128_32345[(1)] = (3));

} else {
var statearr_32129_32346 = state_32125__$1;
(statearr_32129_32346[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (3))){
var inst_32115 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32116 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_32117 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_32118 = [inst_32116,inst_32117];
var inst_32119 = (new cljs.core.PersistentVector(null,2,(5),inst_32115,inst_32118,null));
var inst_32120 = re_frame.core.dispatch(inst_32119);
var state_32125__$1 = state_32125;
var statearr_32130_32347 = state_32125__$1;
(statearr_32130_32347[(2)] = inst_32120);

(statearr_32130_32347[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (4))){
var state_32125__$1 = state_32125;
var statearr_32131_32348 = state_32125__$1;
(statearr_32131_32348[(2)] = null);

(statearr_32131_32348[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (5))){
var inst_32123 = (state_32125[(2)]);
var state_32125__$1 = state_32125;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32125__$1,inst_32123);
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
var statearr_32132 = [null,null,null,null,null,null,null,null];
(statearr_32132[(0)] = kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto__);

(statearr_32132[(1)] = (1));

return statearr_32132;
});
var kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto____1 = (function (state_32125){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_32125);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e32133){var ex__27913__auto__ = e32133;
var statearr_32134_32349 = state_32125;
(statearr_32134_32349[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_32125[(4)]))){
var statearr_32135_32350 = state_32125;
(statearr_32135_32350[(1)] = cljs.core.first((state_32125[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32351 = state_32125;
state_32125 = G__32351;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto__ = function(state_32125){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto____1.call(this,state_32125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto__;
})()
})();
var state__27981__auto__ = (function (){var statearr_32136 = f__27980__auto__();
(statearr_32136[(6)] = c__27979__auto__);

return statearr_32136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
}));

return c__27979__auto__;
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http-put-dispatch","http-put-dispatch",-484936711),kdlyticsgui.mount.http_put_dispatch);
kdlyticsgui.mount.simple_http_get_events = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-naked-positions","get-naked-positions",851863850),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"naked-position-transit-array",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"naked-positions","naked-positions",-1170378384),new cljs.core.Keyword(null,"mounting-modal","mounting-modal",-1411315623),true], null)], null);
kdlyticsgui.mount.simple_http_assets = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472),new cljs.core.Keyword(null,"namespace","namespace",-377510372),"common.static",new cljs.core.Keyword(null,"asset","asset",-280274466),"portfolios",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null)], null)], null);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions-summary","get-positions-summary",1710688354),(function (p__32137,p__32138){
var map__32139 = p__32137;
var map__32139__$1 = cljs.core.__destructure_map(map__32139);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32139__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32140 = p__32138;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32140,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"positions-summary"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-summary","positions-summary",-17081762)], null)], null)], null);
}));

//# sourceMappingURL=kdlyticsgui.mount.js.map
