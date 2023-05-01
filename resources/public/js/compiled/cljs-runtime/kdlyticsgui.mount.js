goog.provide('kdlyticsgui.mount');
kdlyticsgui.mount.default_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"test-data","test-data",805102338),new cljs.core.Keyword("navigation","success-modal","navigation/success-modal",533446693),new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),new cljs.core.Keyword("navigation","active-section","navigation/active-section",-1272053018),new cljs.core.Keyword("navigation","success-compile","navigation/success-compile",33558826),new cljs.core.Keyword(null,"rot13","rot13",-631596017),new cljs.core.Keyword("navigation","active-view-cellar","navigation/active-view-cellar",-1146180625),new cljs.core.Keyword("navigation","active-view-vault","navigation/active-view-vault",-1235342702),new cljs.core.Keyword("navigation","active-view-wealth","navigation/active-view-wealth",-1986836686),new cljs.core.Keyword("navigation","active-view-tools","navigation/active-view-tools",-2036856651),new cljs.core.Keyword("navigation","active-view-positions","navigation/active-view-positions",1459188376),new cljs.core.Keyword(null,"dummy","dummy",2059765854)],[null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show","show",-576705889),false,new cljs.core.Keyword(null,"on-close","on-close",-761178394),null,new cljs.core.Keyword(null,"response","response",-1068424192),null], null),false,new cljs.core.Keyword(null,"entry","entry",505168823),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show","show",-576705889),false,new cljs.core.Keyword(null,"on-close","on-close",-761178394),null,new cljs.core.Keyword(null,"response","response",-1068424192),null], null),false,new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"scrapping","scrapping",-1589708187),new cljs.core.Keyword(null,"summary","summary",380847952),null]);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kdlyticsgui.mount","initialize-db","kdlyticsgui.mount/initialize-db",-798563823),(function (_,___$1){
return kdlyticsgui.mount.default_db;
}));
var seq__47609_48430 = cljs.core.seq(cljs.core.keys(kdlyticsgui.mount.default_db));
var chunk__47610_48431 = null;
var count__47611_48432 = (0);
var i__47612_48433 = (0);
while(true){
if((i__47612_48433 < count__47611_48432)){
var k_48434 = chunk__47610_48431.cljs$core$IIndexed$_nth$arity$2(null,i__47612_48433);
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(k_48434,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (seq__47609_48430,chunk__47610_48431,count__47611_48432,i__47612_48433,k_48434){
return (function (db){
return (k_48434.cljs$core$IFn$_invoke$arity$1 ? k_48434.cljs$core$IFn$_invoke$arity$1(db) : k_48434.call(null,db));
});})(seq__47609_48430,chunk__47610_48431,count__47611_48432,i__47612_48433,k_48434))
], 0));


var G__48435 = seq__47609_48430;
var G__48436 = chunk__47610_48431;
var G__48437 = count__47611_48432;
var G__48438 = (i__47612_48433 + (1));
seq__47609_48430 = G__48435;
chunk__47610_48431 = G__48436;
count__47611_48432 = G__48437;
i__47612_48433 = G__48438;
continue;
} else {
var temp__5804__auto___48439 = cljs.core.seq(seq__47609_48430);
if(temp__5804__auto___48439){
var seq__47609_48440__$1 = temp__5804__auto___48439;
if(cljs.core.chunked_seq_QMARK_(seq__47609_48440__$1)){
var c__5568__auto___48441 = cljs.core.chunk_first(seq__47609_48440__$1);
var G__48442 = cljs.core.chunk_rest(seq__47609_48440__$1);
var G__48443 = c__5568__auto___48441;
var G__48444 = cljs.core.count(c__5568__auto___48441);
var G__48445 = (0);
seq__47609_48430 = G__48442;
chunk__47610_48431 = G__48443;
count__47611_48432 = G__48444;
i__47612_48433 = G__48445;
continue;
} else {
var k_48446 = cljs.core.first(seq__47609_48440__$1);
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(k_48446,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (seq__47609_48430,chunk__47610_48431,count__47611_48432,i__47612_48433,k_48446,seq__47609_48440__$1,temp__5804__auto___48439){
return (function (db){
return (k_48446.cljs$core$IFn$_invoke$arity$1 ? k_48446.cljs$core$IFn$_invoke$arity$1(db) : k_48446.call(null,db));
});})(seq__47609_48430,chunk__47610_48431,count__47611_48432,i__47612_48433,k_48446,seq__47609_48440__$1,temp__5804__auto___48439))
], 0));


var G__48447 = cljs.core.next(seq__47609_48440__$1);
var G__48448 = null;
var G__48449 = (0);
var G__48450 = (0);
seq__47609_48430 = G__48447;
chunk__47610_48431 = G__48448;
count__47611_48432 = G__48449;
i__47612_48433 = G__48450;
continue;
}
} else {
}
}
break;
}
var seq__47613_48451 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rot13","rot13",-631596017),new cljs.core.Keyword(null,"test-data","test-data",805102338),new cljs.core.Keyword("navigation","active-section","navigation/active-section",-1272053018),new cljs.core.Keyword("navigation","active-view-wealth","navigation/active-view-wealth",-1986836686),new cljs.core.Keyword("navigation","active-view-positions","navigation/active-view-positions",1459188376),new cljs.core.Keyword("navigation","active-view-vault","navigation/active-view-vault",-1235342702),new cljs.core.Keyword("navigation","active-view-cellar","navigation/active-view-cellar",-1146180625),new cljs.core.Keyword("navigation","active-view-tools","navigation/active-view-tools",-2036856651),new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254)], null));
var chunk__47614_48452 = null;
var count__47615_48453 = (0);
var i__47616_48454 = (0);
while(true){
if((i__47616_48454 < count__47615_48453)){
var k_48455 = chunk__47614_48452.cljs$core$IIndexed$_nth$arity$2(null,i__47616_48454);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_48455,((function (seq__47613_48451,chunk__47614_48452,count__47615_48453,i__47616_48454,k_48455){
return (function (db,p__47625){
var vec__47626 = p__47625;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47626,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47626,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_48455,data);
});})(seq__47613_48451,chunk__47614_48452,count__47615_48453,i__47616_48454,k_48455))
);


var G__48456 = seq__47613_48451;
var G__48457 = chunk__47614_48452;
var G__48458 = count__47615_48453;
var G__48459 = (i__47616_48454 + (1));
seq__47613_48451 = G__48456;
chunk__47614_48452 = G__48457;
count__47615_48453 = G__48458;
i__47616_48454 = G__48459;
continue;
} else {
var temp__5804__auto___48460 = cljs.core.seq(seq__47613_48451);
if(temp__5804__auto___48460){
var seq__47613_48461__$1 = temp__5804__auto___48460;
if(cljs.core.chunked_seq_QMARK_(seq__47613_48461__$1)){
var c__5568__auto___48462 = cljs.core.chunk_first(seq__47613_48461__$1);
var G__48463 = cljs.core.chunk_rest(seq__47613_48461__$1);
var G__48464 = c__5568__auto___48462;
var G__48465 = cljs.core.count(c__5568__auto___48462);
var G__48466 = (0);
seq__47613_48451 = G__48463;
chunk__47614_48452 = G__48464;
count__47615_48453 = G__48465;
i__47616_48454 = G__48466;
continue;
} else {
var k_48467 = cljs.core.first(seq__47613_48461__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_48467,((function (seq__47613_48451,chunk__47614_48452,count__47615_48453,i__47616_48454,k_48467,seq__47613_48461__$1,temp__5804__auto___48460){
return (function (db,p__47629){
var vec__47630 = p__47629;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47630,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47630,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_48467,data);
});})(seq__47613_48451,chunk__47614_48452,count__47615_48453,i__47616_48454,k_48467,seq__47613_48461__$1,temp__5804__auto___48460))
);


var G__48468 = cljs.core.next(seq__47613_48461__$1);
var G__48469 = null;
var G__48470 = (0);
var G__48471 = (0);
seq__47613_48451 = G__48468;
chunk__47614_48452 = G__48469;
count__47615_48453 = G__48470;
i__47616_48454 = G__48471;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("navigation","active","navigation/active",-1285216),(function (db,p__47633){
var vec__47634 = p__47633;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47634,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47634,(1),null);
var sub_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47634,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","active","navigation/active",-1285216),page], null),sub_page);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"instruments","instruments",-69874543),(function (p__47638,p__47639){
var map__47640 = p__47638;
var map__47640__$1 = cljs.core.__destructure_map(map__47640);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47640__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47641 = p__47639;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47641,(0),null);
var instruments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47641,(1),null);
var positions = (cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db),cljs.core.PersistentVector.EMPTY);
if(and__5043__auto__){
return new cljs.core.Keyword(null,"naked-positions","naked-positions",-1170378384).cljs$core$IFn$_invoke$arity$1(db);
} else {
return and__5043__auto__;
}
})())?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__47637_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__47637_SHARP_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instruments","instruments",-69874543),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__47637_SHARP_)], null))], 0));
}),new cljs.core.Keyword(null,"naked-positions","naked-positions",-1170378384).cljs$core$IFn$_invoke$arity$1(db)):cljs.core.PersistentVector.EMPTY);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"all-instrument-ids","all-instrument-ids",-1013285519),cljs.core.keys(instruments),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"instruments","instruments",-69874543),instruments,new cljs.core.Keyword(null,"positions","positions",-1380538434),positions,new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(positions,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("implementation","live-positions","implementation/live-positions",1202101052),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function kdlyticsgui$mount$iter__47644(s__47645){
return (new cljs.core.LazySeq(null,(function (){
var s__47645__$1 = s__47645;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__47645__$1);
if(temp__5804__auto__){
var s__47645__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47645__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__47645__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__47647 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__47646 = (0);
while(true){
if((i__47646 < size__5522__auto__)){
var vec__47648 = cljs.core._nth(c__5521__auto__,i__47646);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47648,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47648,(1),null);
cljs.core.chunk_append(b__47647,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = ((function (i__47646,vec__47648,p,g,c__5521__auto__,size__5522__auto__,b__47647,s__47645__$2,temp__5804__auto__,positions,map__47640,map__47640__$1,db,vec__47641,_,instruments){
return (function kdlyticsgui$mount$iter__47644_$_iter__47651(s__47652){
return (new cljs.core.LazySeq(null,((function (i__47646,vec__47648,p,g,c__5521__auto__,size__5522__auto__,b__47647,s__47645__$2,temp__5804__auto__,positions,map__47640,map__47640__$1,db,vec__47641,_,instruments){
return (function (){
var s__47652__$1 = s__47652;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__47652__$1);
if(temp__5804__auto____$1){
var s__47652__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47652__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__47652__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__47654 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__47653 = (0);
while(true){
if((i__47653 < size__5522__auto____$1)){
var line = cljs.core._nth(c__5521__auto____$1,i__47653);
if((((!((new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line) == null)))) && ((new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line) > (0))))){
cljs.core.chunk_append(b__47654,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line)], null));

var G__48476 = (i__47653 + (1));
i__47653 = G__48476;
continue;
} else {
var G__48477 = (i__47653 + (1));
i__47653 = G__48477;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47654),kdlyticsgui$mount$iter__47644_$_iter__47651(cljs.core.chunk_rest(s__47652__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47654),null);
}
} else {
var line = cljs.core.first(s__47652__$2);
if((((!((new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line) == null)))) && ((new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line) > (0))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line)], null),kdlyticsgui$mount$iter__47644_$_iter__47651(cljs.core.rest(s__47652__$2)));
} else {
var G__48478 = cljs.core.rest(s__47652__$2);
s__47652__$1 = G__48478;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__47646,vec__47648,p,g,c__5521__auto__,size__5522__auto__,b__47647,s__47645__$2,temp__5804__auto__,positions,map__47640,map__47640__$1,db,vec__47641,_,instruments))
,null,null));
});})(i__47646,vec__47648,p,g,c__5521__auto__,size__5522__auto__,b__47647,s__47645__$2,temp__5804__auto__,positions,map__47640,map__47640__$1,db,vec__47641,_,instruments))
;
return iter__5523__auto__(g);
})())], null));

var G__48479 = (i__47646 + (1));
i__47646 = G__48479;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47647),kdlyticsgui$mount$iter__47644(cljs.core.chunk_rest(s__47645__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47647),null);
}
} else {
var vec__47655 = cljs.core.first(s__47645__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47655,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47655,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = ((function (vec__47655,p,g,s__47645__$2,temp__5804__auto__,positions,map__47640,map__47640__$1,db,vec__47641,_,instruments){
return (function kdlyticsgui$mount$iter__47644_$_iter__47658(s__47659){
return (new cljs.core.LazySeq(null,(function (){
var s__47659__$1 = s__47659;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__47659__$1);
if(temp__5804__auto____$1){
var s__47659__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47659__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__47659__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__47661 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__47660 = (0);
while(true){
if((i__47660 < size__5522__auto__)){
var line = cljs.core._nth(c__5521__auto__,i__47660);
if((((!((new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line) == null)))) && ((new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line) > (0))))){
cljs.core.chunk_append(b__47661,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line)], null));

var G__48480 = (i__47660 + (1));
i__47660 = G__48480;
continue;
} else {
var G__48481 = (i__47660 + (1));
i__47660 = G__48481;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47661),kdlyticsgui$mount$iter__47644_$_iter__47658(cljs.core.chunk_rest(s__47659__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47661),null);
}
} else {
var line = cljs.core.first(s__47659__$2);
if((((!((new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line) == null)))) && ((new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line) > (0))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line)], null),kdlyticsgui$mount$iter__47644_$_iter__47658(cljs.core.rest(s__47659__$2)));
} else {
var G__48482 = cljs.core.rest(s__47659__$2);
s__47659__$1 = G__48482;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__47655,p,g,s__47645__$2,temp__5804__auto__,positions,map__47640,map__47640__$1,db,vec__47641,_,instruments))
;
return iter__5523__auto__(g);
})())], null),kdlyticsgui$mount$iter__47644(cljs.core.rest(s__47645__$2)));
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
var seq__47662_48483 = cljs.core.seq(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219),new cljs.core.Keyword("portfolio-history","filter","portfolio-history/filter",1821014145),new cljs.core.Keyword("attribution-history","filter","attribution-history/filter",-868840340)], null));
var chunk__47663_48484 = null;
var count__47664_48485 = (0);
var i__47665_48486 = (0);
while(true){
if((i__47665_48486 < count__47664_48485)){
var k_48487 = chunk__47663_48484.cljs$core$IIndexed$_nth$arity$2(null,i__47665_48486);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_48487,((function (seq__47662_48483,chunk__47663_48484,count__47664_48485,i__47665_48486,k_48487){
return (function (db,p__47674){
var vec__47675 = p__47674;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47675,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47675,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47675,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_48487,id], null),f);
});})(seq__47662_48483,chunk__47663_48484,count__47664_48485,i__47665_48486,k_48487))
);


var G__48488 = seq__47662_48483;
var G__48489 = chunk__47663_48484;
var G__48490 = count__47664_48485;
var G__48491 = (i__47665_48486 + (1));
seq__47662_48483 = G__48488;
chunk__47663_48484 = G__48489;
count__47664_48485 = G__48490;
i__47665_48486 = G__48491;
continue;
} else {
var temp__5804__auto___48492 = cljs.core.seq(seq__47662_48483);
if(temp__5804__auto___48492){
var seq__47662_48493__$1 = temp__5804__auto___48492;
if(cljs.core.chunked_seq_QMARK_(seq__47662_48493__$1)){
var c__5568__auto___48494 = cljs.core.chunk_first(seq__47662_48493__$1);
var G__48495 = cljs.core.chunk_rest(seq__47662_48493__$1);
var G__48496 = c__5568__auto___48494;
var G__48497 = cljs.core.count(c__5568__auto___48494);
var G__48498 = (0);
seq__47662_48483 = G__48495;
chunk__47663_48484 = G__48496;
count__47664_48485 = G__48497;
i__47665_48486 = G__48498;
continue;
} else {
var k_48499 = cljs.core.first(seq__47662_48493__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_48499,((function (seq__47662_48483,chunk__47663_48484,count__47664_48485,i__47665_48486,k_48499,seq__47662_48493__$1,temp__5804__auto___48492){
return (function (db,p__47678){
var vec__47679 = p__47678;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47679,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47679,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47679,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_48499,id], null),f);
});})(seq__47662_48483,chunk__47663_48484,count__47664_48485,i__47665_48486,k_48499,seq__47662_48493__$1,temp__5804__auto___48492))
);


var G__48500 = cljs.core.next(seq__47662_48493__$1);
var G__48501 = null;
var G__48502 = (0);
var G__48503 = (0);
seq__47662_48483 = G__48500;
chunk__47663_48484 = G__48501;
count__47664_48485 = G__48502;
i__47665_48486 = G__48503;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),(function (db,p__47682){
var vec__47683 = p__47682;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47683,(0),null);
var qt_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47683,(1),null);
var dt = qt_date.replace("\"","");
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),dt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("portfolio-history","end-period","portfolio-history/end-period",1624676397),kdlyticsgui.tools.gdate__GT_yyyyMMdd(kdlyticsgui.tools.ddMMMyyyy__GT_gdate(dt))], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),(function (db,p__47686){
var vec__47687 = p__47686;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47687,(0),null);
var attribution_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47687,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),attribution_date.replace("\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),(function (db,p__47690){
var vec__47691 = p__47690;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47691,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47691,(1),null);
var G__47694 = snapshot;
switch (G__47694) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47694)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),(function (db,p__47695){
var vec__47696 = p__47695;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47696,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47696,(1),null);
var G__47699 = snapshot;
switch (G__47699) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47699)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),(function (db,p__47700){
var vec__47701 = p__47700;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47701,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47701,(1),null);
var G__47704 = snapshot;
switch (G__47704) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47704)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cycle-shortcut","cycle-shortcut",-1617058214),(function (db,p__47705){
var vec__47706 = p__47705;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47706,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47706,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47706,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword("navigation","active-view","navigation/active-view",800211184).cljs$core$IFn$_invoke$arity$1(db)),"-risk/shortcut"].join(''));
var shortcut_value = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
if((shortcut_value < (4))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(shortcut_value + (1)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(1));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tree-table","tree-table",-1263002012),(function (db,p__47709){
var vec__47710 = p__47709;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47710,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47710,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47710,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword("navigation","active-view","navigation/active-view",800211184).cljs$core$IFn$_invoke$arity$1(db)),"-risk/display-style"].join(''));
var G__47713 = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
switch (G__47713) {
case "Tree":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Table");

break;
case "Table":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Tree");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47713)].join('')));

}
}));
/**
 * if response header is application/json keys will get keywordized automatically - otherwise send as text/plain
 */
kdlyticsgui.mount.http_get_dispatch = (function kdlyticsgui$mount$http_get_dispatch(request){
var vr = ((cljs.core.vector_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__47714 = cljs.core.seq(vr);
var chunk__47715 = null;
var count__47716 = (0);
var i__47717 = (0);
while(true){
if((i__47717 < count__47716)){
var r = chunk__47715.cljs$core$IIndexed$_nth$arity$2(null,i__47717);
var c__41282__auto___48512 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__47714,chunk__47715,count__47716,i__47717,c__41282__auto___48512,r,vr){
return (function (){
var f__41283__auto__ = (function (){var switch__35484__auto__ = ((function (seq__47714,chunk__47715,count__47716,i__47717,c__41282__auto___48512,r,vr){
return (function (state_47802){
var state_val_47803 = (state_47802[(1)]);
if((state_val_47803 === (1))){
var inst_47782 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_47783 = cljs_http.client.get(inst_47782);
var state_47802__$1 = state_47802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47802__$1,(2),inst_47783);
} else {
if((state_val_47803 === (2))){
var inst_47785 = (state_47802[(2)]);
var inst_47786 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_47787 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_47785);
var inst_47788 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_47786,inst_47787);
var inst_47789 = re_frame.core.dispatch(inst_47788);
var inst_47790 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_47802__$1 = (function (){var statearr_47804 = state_47802;
(statearr_47804[(7)] = inst_47789);

return statearr_47804;
})();
if(cljs.core.truth_(inst_47790)){
var statearr_47805_48517 = state_47802__$1;
(statearr_47805_48517[(1)] = (3));

} else {
var statearr_47806_48518 = state_47802__$1;
(statearr_47806_48518[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47803 === (3))){
var inst_47792 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47793 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_47794 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_47795 = [inst_47793,inst_47794];
var inst_47796 = (new cljs.core.PersistentVector(null,2,(5),inst_47792,inst_47795,null));
var inst_47797 = re_frame.core.dispatch(inst_47796);
var state_47802__$1 = state_47802;
var statearr_47807_48519 = state_47802__$1;
(statearr_47807_48519[(2)] = inst_47797);

(statearr_47807_48519[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47803 === (4))){
var state_47802__$1 = state_47802;
var statearr_47808_48520 = state_47802__$1;
(statearr_47808_48520[(2)] = null);

(statearr_47808_48520[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47803 === (5))){
var inst_47800 = (state_47802[(2)]);
var state_47802__$1 = state_47802;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47802__$1,inst_47800);
} else {
return null;
}
}
}
}
}
});})(seq__47714,chunk__47715,count__47716,i__47717,c__41282__auto___48512,r,vr))
;
return ((function (seq__47714,chunk__47715,count__47716,i__47717,switch__35484__auto__,c__41282__auto___48512,r,vr){
return (function() {
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__35485__auto__ = null;
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__35485__auto____0 = (function (){
var statearr_47809 = [null,null,null,null,null,null,null,null];
(statearr_47809[(0)] = kdlyticsgui$mount$http_get_dispatch_$_state_machine__35485__auto__);

(statearr_47809[(1)] = (1));

return statearr_47809;
});
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__35485__auto____1 = (function (state_47802){
while(true){
var ret_value__35486__auto__ = (function (){try{while(true){
var result__35487__auto__ = switch__35484__auto__(state_47802);
if(cljs.core.keyword_identical_QMARK_(result__35487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35487__auto__;
}
break;
}
}catch (e47810){var ex__35488__auto__ = e47810;
var statearr_47811_48521 = state_47802;
(statearr_47811_48521[(2)] = ex__35488__auto__);


if(cljs.core.seq((state_47802[(4)]))){
var statearr_47812_48522 = state_47802;
(statearr_47812_48522[(1)] = cljs.core.first((state_47802[(4)])));

} else {
throw ex__35488__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48523 = state_47802;
state_47802 = G__48523;
continue;
} else {
return ret_value__35486__auto__;
}
break;
}
});
kdlyticsgui$mount$http_get_dispatch_$_state_machine__35485__auto__ = function(state_47802){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__35485__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__35485__auto____1.call(this,state_47802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_get_dispatch_$_state_machine__35485__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_get_dispatch_$_state_machine__35485__auto____0;
kdlyticsgui$mount$http_get_dispatch_$_state_machine__35485__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_get_dispatch_$_state_machine__35485__auto____1;
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__35485__auto__;
})()
;})(seq__47714,chunk__47715,count__47716,i__47717,switch__35484__auto__,c__41282__auto___48512,r,vr))
})();
var state__41284__auto__ = (function (){var statearr_47813 = f__41283__auto__();
(statearr_47813[(6)] = c__41282__auto___48512);

return statearr_47813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41284__auto__);
});})(seq__47714,chunk__47715,count__47716,i__47717,c__41282__auto___48512,r,vr))
);



var G__48524 = seq__47714;
var G__48525 = chunk__47715;
var G__48526 = count__47716;
var G__48527 = (i__47717 + (1));
seq__47714 = G__48524;
chunk__47715 = G__48525;
count__47716 = G__48526;
i__47717 = G__48527;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47714);
if(temp__5804__auto__){
var seq__47714__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47714__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47714__$1);
var G__48528 = cljs.core.chunk_rest(seq__47714__$1);
var G__48529 = c__5568__auto__;
var G__48530 = cljs.core.count(c__5568__auto__);
var G__48531 = (0);
seq__47714 = G__48528;
chunk__47715 = G__48529;
count__47716 = G__48530;
i__47717 = G__48531;
continue;
} else {
var r = cljs.core.first(seq__47714__$1);
var c__41282__auto___48532 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__47714,chunk__47715,count__47716,i__47717,c__41282__auto___48532,r,seq__47714__$1,temp__5804__auto__,vr){
return (function (){
var f__41283__auto__ = (function (){var switch__35484__auto__ = ((function (seq__47714,chunk__47715,count__47716,i__47717,c__41282__auto___48532,r,seq__47714__$1,temp__5804__auto__,vr){
return (function (state_47834){
var state_val_47835 = (state_47834[(1)]);
if((state_val_47835 === (1))){
var inst_47814 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_47815 = cljs_http.client.get(inst_47814);
var state_47834__$1 = state_47834;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47834__$1,(2),inst_47815);
} else {
if((state_val_47835 === (2))){
var inst_47817 = (state_47834[(2)]);
var inst_47818 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_47819 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_47817);
var inst_47820 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_47818,inst_47819);
var inst_47821 = re_frame.core.dispatch(inst_47820);
var inst_47822 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_47834__$1 = (function (){var statearr_47836 = state_47834;
(statearr_47836[(7)] = inst_47821);

return statearr_47836;
})();
if(cljs.core.truth_(inst_47822)){
var statearr_47837_48533 = state_47834__$1;
(statearr_47837_48533[(1)] = (3));

} else {
var statearr_47838_48534 = state_47834__$1;
(statearr_47838_48534[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47835 === (3))){
var inst_47824 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47825 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_47826 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_47827 = [inst_47825,inst_47826];
var inst_47828 = (new cljs.core.PersistentVector(null,2,(5),inst_47824,inst_47827,null));
var inst_47829 = re_frame.core.dispatch(inst_47828);
var state_47834__$1 = state_47834;
var statearr_47839_48535 = state_47834__$1;
(statearr_47839_48535[(2)] = inst_47829);

(statearr_47839_48535[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47835 === (4))){
var state_47834__$1 = state_47834;
var statearr_47840_48536 = state_47834__$1;
(statearr_47840_48536[(2)] = null);

(statearr_47840_48536[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47835 === (5))){
var inst_47832 = (state_47834[(2)]);
var state_47834__$1 = state_47834;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47834__$1,inst_47832);
} else {
return null;
}
}
}
}
}
});})(seq__47714,chunk__47715,count__47716,i__47717,c__41282__auto___48532,r,seq__47714__$1,temp__5804__auto__,vr))
;
return ((function (seq__47714,chunk__47715,count__47716,i__47717,switch__35484__auto__,c__41282__auto___48532,r,seq__47714__$1,temp__5804__auto__,vr){
return (function() {
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__35485__auto__ = null;
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__35485__auto____0 = (function (){
var statearr_47841 = [null,null,null,null,null,null,null,null];
(statearr_47841[(0)] = kdlyticsgui$mount$http_get_dispatch_$_state_machine__35485__auto__);

(statearr_47841[(1)] = (1));

return statearr_47841;
});
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__35485__auto____1 = (function (state_47834){
while(true){
var ret_value__35486__auto__ = (function (){try{while(true){
var result__35487__auto__ = switch__35484__auto__(state_47834);
if(cljs.core.keyword_identical_QMARK_(result__35487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35487__auto__;
}
break;
}
}catch (e47842){var ex__35488__auto__ = e47842;
var statearr_47843_48537 = state_47834;
(statearr_47843_48537[(2)] = ex__35488__auto__);


if(cljs.core.seq((state_47834[(4)]))){
var statearr_47844_48539 = state_47834;
(statearr_47844_48539[(1)] = cljs.core.first((state_47834[(4)])));

} else {
throw ex__35488__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48540 = state_47834;
state_47834 = G__48540;
continue;
} else {
return ret_value__35486__auto__;
}
break;
}
});
kdlyticsgui$mount$http_get_dispatch_$_state_machine__35485__auto__ = function(state_47834){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__35485__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__35485__auto____1.call(this,state_47834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_get_dispatch_$_state_machine__35485__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_get_dispatch_$_state_machine__35485__auto____0;
kdlyticsgui$mount$http_get_dispatch_$_state_machine__35485__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_get_dispatch_$_state_machine__35485__auto____1;
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__35485__auto__;
})()
;})(seq__47714,chunk__47715,count__47716,i__47717,switch__35484__auto__,c__41282__auto___48532,r,seq__47714__$1,temp__5804__auto__,vr))
})();
var state__41284__auto__ = (function (){var statearr_47845 = f__41283__auto__();
(statearr_47845[(6)] = c__41282__auto___48532);

return statearr_47845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41284__auto__);
});})(seq__47714,chunk__47715,count__47716,i__47717,c__41282__auto___48532,r,seq__47714__$1,temp__5804__auto__,vr))
);



var G__48541 = cljs.core.next(seq__47714__$1);
var G__48542 = null;
var G__48543 = (0);
var G__48544 = (0);
seq__47714 = G__48541;
chunk__47715 = G__48542;
count__47716 = G__48543;
i__47717 = G__48544;
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
var seq__47846 = cljs.core.seq(vr);
var chunk__47847 = null;
var count__47848 = (0);
var i__47849 = (0);
while(true){
if((i__47849 < count__47848)){
var r = chunk__47847.cljs$core$IIndexed$_nth$arity$2(null,i__47849);
var c__41282__auto___48545 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__47846,chunk__47847,count__47848,i__47849,c__41282__auto___48545,r,vr){
return (function (){
var f__41283__auto__ = (function (){var switch__35484__auto__ = ((function (seq__47846,chunk__47847,count__47848,i__47849,c__41282__auto___48545,r,vr){
return (function (state_47940){
var state_val_47941 = (state_47940[(1)]);
if((state_val_47941 === (1))){
var inst_47918 = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(request);
var inst_47919 = new cljs.core.Keyword(null,"asset","asset",-280274466).cljs$core$IFn$_invoke$arity$1(request);
var inst_47920 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"asset?namespace=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47918),"&asset=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47919)].join('');
var inst_47921 = cljs_http.client.get(inst_47920);
var state_47940__$1 = state_47940;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47940__$1,(2),inst_47921);
} else {
if((state_val_47941 === (2))){
var inst_47923 = (state_47940[(2)]);
var inst_47924 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_47925 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_47923);
var inst_47926 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_47924,inst_47925);
var inst_47927 = re_frame.core.dispatch(inst_47926);
var inst_47928 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_47940__$1 = (function (){var statearr_47942 = state_47940;
(statearr_47942[(7)] = inst_47927);

return statearr_47942;
})();
if(cljs.core.truth_(inst_47928)){
var statearr_47943_48546 = state_47940__$1;
(statearr_47943_48546[(1)] = (3));

} else {
var statearr_47944_48547 = state_47940__$1;
(statearr_47944_48547[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (3))){
var inst_47930 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47931 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_47932 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_47933 = [inst_47931,inst_47932];
var inst_47934 = (new cljs.core.PersistentVector(null,2,(5),inst_47930,inst_47933,null));
var inst_47935 = re_frame.core.dispatch(inst_47934);
var state_47940__$1 = state_47940;
var statearr_47945_48548 = state_47940__$1;
(statearr_47945_48548[(2)] = inst_47935);

(statearr_47945_48548[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (4))){
var state_47940__$1 = state_47940;
var statearr_47946_48549 = state_47940__$1;
(statearr_47946_48549[(2)] = null);

(statearr_47946_48549[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (5))){
var inst_47938 = (state_47940[(2)]);
var state_47940__$1 = state_47940;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47940__$1,inst_47938);
} else {
return null;
}
}
}
}
}
});})(seq__47846,chunk__47847,count__47848,i__47849,c__41282__auto___48545,r,vr))
;
return ((function (seq__47846,chunk__47847,count__47848,i__47849,switch__35484__auto__,c__41282__auto___48545,r,vr){
return (function() {
var kdlyticsgui$mount$http_get_asset_$_state_machine__35485__auto__ = null;
var kdlyticsgui$mount$http_get_asset_$_state_machine__35485__auto____0 = (function (){
var statearr_47947 = [null,null,null,null,null,null,null,null];
(statearr_47947[(0)] = kdlyticsgui$mount$http_get_asset_$_state_machine__35485__auto__);

(statearr_47947[(1)] = (1));

return statearr_47947;
});
var kdlyticsgui$mount$http_get_asset_$_state_machine__35485__auto____1 = (function (state_47940){
while(true){
var ret_value__35486__auto__ = (function (){try{while(true){
var result__35487__auto__ = switch__35484__auto__(state_47940);
if(cljs.core.keyword_identical_QMARK_(result__35487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35487__auto__;
}
break;
}
}catch (e47948){var ex__35488__auto__ = e47948;
var statearr_47949_48550 = state_47940;
(statearr_47949_48550[(2)] = ex__35488__auto__);


if(cljs.core.seq((state_47940[(4)]))){
var statearr_47950_48551 = state_47940;
(statearr_47950_48551[(1)] = cljs.core.first((state_47940[(4)])));

} else {
throw ex__35488__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48552 = state_47940;
state_47940 = G__48552;
continue;
} else {
return ret_value__35486__auto__;
}
break;
}
});
kdlyticsgui$mount$http_get_asset_$_state_machine__35485__auto__ = function(state_47940){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_get_asset_$_state_machine__35485__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_get_asset_$_state_machine__35485__auto____1.call(this,state_47940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_get_asset_$_state_machine__35485__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_get_asset_$_state_machine__35485__auto____0;
kdlyticsgui$mount$http_get_asset_$_state_machine__35485__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_get_asset_$_state_machine__35485__auto____1;
return kdlyticsgui$mount$http_get_asset_$_state_machine__35485__auto__;
})()
;})(seq__47846,chunk__47847,count__47848,i__47849,switch__35484__auto__,c__41282__auto___48545,r,vr))
})();
var state__41284__auto__ = (function (){var statearr_47951 = f__41283__auto__();
(statearr_47951[(6)] = c__41282__auto___48545);

return statearr_47951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41284__auto__);
});})(seq__47846,chunk__47847,count__47848,i__47849,c__41282__auto___48545,r,vr))
);



var G__48553 = seq__47846;
var G__48554 = chunk__47847;
var G__48555 = count__47848;
var G__48556 = (i__47849 + (1));
seq__47846 = G__48553;
chunk__47847 = G__48554;
count__47848 = G__48555;
i__47849 = G__48556;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47846);
if(temp__5804__auto__){
var seq__47846__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47846__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47846__$1);
var G__48557 = cljs.core.chunk_rest(seq__47846__$1);
var G__48558 = c__5568__auto__;
var G__48559 = cljs.core.count(c__5568__auto__);
var G__48560 = (0);
seq__47846 = G__48557;
chunk__47847 = G__48558;
count__47848 = G__48559;
i__47849 = G__48560;
continue;
} else {
var r = cljs.core.first(seq__47846__$1);
var c__41282__auto___48561 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__47846,chunk__47847,count__47848,i__47849,c__41282__auto___48561,r,seq__47846__$1,temp__5804__auto__,vr){
return (function (){
var f__41283__auto__ = (function (){var switch__35484__auto__ = ((function (seq__47846,chunk__47847,count__47848,i__47849,c__41282__auto___48561,r,seq__47846__$1,temp__5804__auto__,vr){
return (function (state_47974){
var state_val_47975 = (state_47974[(1)]);
if((state_val_47975 === (1))){
var inst_47952 = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(request);
var inst_47953 = new cljs.core.Keyword(null,"asset","asset",-280274466).cljs$core$IFn$_invoke$arity$1(request);
var inst_47954 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"asset?namespace=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47952),"&asset=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47953)].join('');
var inst_47955 = cljs_http.client.get(inst_47954);
var state_47974__$1 = state_47974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47974__$1,(2),inst_47955);
} else {
if((state_val_47975 === (2))){
var inst_47957 = (state_47974[(2)]);
var inst_47958 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_47959 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_47957);
var inst_47960 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_47958,inst_47959);
var inst_47961 = re_frame.core.dispatch(inst_47960);
var inst_47962 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_47974__$1 = (function (){var statearr_47976 = state_47974;
(statearr_47976[(7)] = inst_47961);

return statearr_47976;
})();
if(cljs.core.truth_(inst_47962)){
var statearr_47977_48562 = state_47974__$1;
(statearr_47977_48562[(1)] = (3));

} else {
var statearr_47978_48563 = state_47974__$1;
(statearr_47978_48563[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47975 === (3))){
var inst_47964 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47965 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_47966 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_47967 = [inst_47965,inst_47966];
var inst_47968 = (new cljs.core.PersistentVector(null,2,(5),inst_47964,inst_47967,null));
var inst_47969 = re_frame.core.dispatch(inst_47968);
var state_47974__$1 = state_47974;
var statearr_47979_48565 = state_47974__$1;
(statearr_47979_48565[(2)] = inst_47969);

(statearr_47979_48565[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47975 === (4))){
var state_47974__$1 = state_47974;
var statearr_47980_48566 = state_47974__$1;
(statearr_47980_48566[(2)] = null);

(statearr_47980_48566[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47975 === (5))){
var inst_47972 = (state_47974[(2)]);
var state_47974__$1 = state_47974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47974__$1,inst_47972);
} else {
return null;
}
}
}
}
}
});})(seq__47846,chunk__47847,count__47848,i__47849,c__41282__auto___48561,r,seq__47846__$1,temp__5804__auto__,vr))
;
return ((function (seq__47846,chunk__47847,count__47848,i__47849,switch__35484__auto__,c__41282__auto___48561,r,seq__47846__$1,temp__5804__auto__,vr){
return (function() {
var kdlyticsgui$mount$http_get_asset_$_state_machine__35485__auto__ = null;
var kdlyticsgui$mount$http_get_asset_$_state_machine__35485__auto____0 = (function (){
var statearr_47981 = [null,null,null,null,null,null,null,null];
(statearr_47981[(0)] = kdlyticsgui$mount$http_get_asset_$_state_machine__35485__auto__);

(statearr_47981[(1)] = (1));

return statearr_47981;
});
var kdlyticsgui$mount$http_get_asset_$_state_machine__35485__auto____1 = (function (state_47974){
while(true){
var ret_value__35486__auto__ = (function (){try{while(true){
var result__35487__auto__ = switch__35484__auto__(state_47974);
if(cljs.core.keyword_identical_QMARK_(result__35487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35487__auto__;
}
break;
}
}catch (e47982){var ex__35488__auto__ = e47982;
var statearr_47983_48567 = state_47974;
(statearr_47983_48567[(2)] = ex__35488__auto__);


if(cljs.core.seq((state_47974[(4)]))){
var statearr_47984_48568 = state_47974;
(statearr_47984_48568[(1)] = cljs.core.first((state_47974[(4)])));

} else {
throw ex__35488__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48569 = state_47974;
state_47974 = G__48569;
continue;
} else {
return ret_value__35486__auto__;
}
break;
}
});
kdlyticsgui$mount$http_get_asset_$_state_machine__35485__auto__ = function(state_47974){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_get_asset_$_state_machine__35485__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_get_asset_$_state_machine__35485__auto____1.call(this,state_47974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_get_asset_$_state_machine__35485__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_get_asset_$_state_machine__35485__auto____0;
kdlyticsgui$mount$http_get_asset_$_state_machine__35485__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_get_asset_$_state_machine__35485__auto____1;
return kdlyticsgui$mount$http_get_asset_$_state_machine__35485__auto__;
})()
;})(seq__47846,chunk__47847,count__47848,i__47849,switch__35484__auto__,c__41282__auto___48561,r,seq__47846__$1,temp__5804__auto__,vr))
})();
var state__41284__auto__ = (function (){var statearr_47985 = f__41283__auto__();
(statearr_47985[(6)] = c__41282__auto___48561);

return statearr_47985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41284__auto__);
});})(seq__47846,chunk__47847,count__47848,i__47849,c__41282__auto___48561,r,seq__47846__$1,temp__5804__auto__,vr))
);



var G__48570 = cljs.core.next(seq__47846__$1);
var G__48571 = null;
var G__48572 = (0);
var G__48573 = (0);
seq__47846 = G__48570;
chunk__47847 = G__48571;
count__47848 = G__48572;
i__47849 = G__48573;
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
var seq__47986 = cljs.core.seq(vr);
var chunk__47987 = null;
var count__47988 = (0);
var i__47989 = (0);
while(true){
if((i__47989 < count__47988)){
var r = chunk__47987.cljs$core$IIndexed$_nth$arity$2(null,i__47989);
var c__41282__auto___48574 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__47986,chunk__47987,count__47988,i__47989,c__41282__auto___48574,r,vr){
return (function (){
var f__41283__auto__ = (function (){var switch__35484__auto__ = ((function (seq__47986,chunk__47987,count__47988,i__47989,c__41282__auto___48574,r,vr){
return (function (state_48123){
var state_val_48124 = (state_48123[(1)]);
if((state_val_48124 === (1))){
var inst_48090 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_48091 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var state_48123__$1 = (function (){var statearr_48125 = state_48123;
(statearr_48125[(7)] = inst_48090);

return statearr_48125;
})();
if(cljs.core.truth_(inst_48091)){
var statearr_48126_48575 = state_48123__$1;
(statearr_48126_48575[(1)] = (3));

} else {
var statearr_48127_48576 = state_48123__$1;
(statearr_48127_48576[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48124 === (2))){
var inst_48106 = (state_48123[(2)]);
var inst_48107 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_48108 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_48106);
var inst_48109 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_48107,inst_48108);
var inst_48110 = re_frame.core.dispatch(inst_48109);
var inst_48111 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_48123__$1 = (function (){var statearr_48128 = state_48123;
(statearr_48128[(8)] = inst_48110);

return statearr_48128;
})();
if(cljs.core.truth_(inst_48111)){
var statearr_48129_48577 = state_48123__$1;
(statearr_48129_48577[(1)] = (6));

} else {
var statearr_48130_48578 = state_48123__$1;
(statearr_48130_48578[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48124 === (3))){
var inst_48093 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_48094 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var inst_48095 = [inst_48094];
var inst_48096 = cljs.core.PersistentHashMap.fromArrays(inst_48093,inst_48095);
var state_48123__$1 = state_48123;
var statearr_48131_48579 = state_48123__$1;
(statearr_48131_48579[(2)] = inst_48096);

(statearr_48131_48579[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48124 === (4))){
var inst_48098 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_48099 = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(r);
var inst_48100 = [inst_48099];
var inst_48101 = cljs.core.PersistentHashMap.fromArrays(inst_48098,inst_48100);
var state_48123__$1 = state_48123;
var statearr_48132_48580 = state_48123__$1;
(statearr_48132_48580[(2)] = inst_48101);

(statearr_48132_48580[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48124 === (5))){
var inst_48090 = (state_48123[(7)]);
var inst_48103 = (state_48123[(2)]);
var inst_48104 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_48090,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_48103], 0));
var state_48123__$1 = state_48123;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48123__$1,(2),inst_48104);
} else {
if((state_val_48124 === (6))){
var inst_48113 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48114 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_48115 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_48116 = [inst_48114,inst_48115];
var inst_48117 = (new cljs.core.PersistentVector(null,2,(5),inst_48113,inst_48116,null));
var inst_48118 = re_frame.core.dispatch(inst_48117);
var state_48123__$1 = state_48123;
var statearr_48133_48592 = state_48123__$1;
(statearr_48133_48592[(2)] = inst_48118);

(statearr_48133_48592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48124 === (7))){
var state_48123__$1 = state_48123;
var statearr_48134_48599 = state_48123__$1;
(statearr_48134_48599[(2)] = null);

(statearr_48134_48599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48124 === (8))){
var inst_48121 = (state_48123[(2)]);
var state_48123__$1 = state_48123;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48123__$1,inst_48121);
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
});})(seq__47986,chunk__47987,count__47988,i__47989,c__41282__auto___48574,r,vr))
;
return ((function (seq__47986,chunk__47987,count__47988,i__47989,switch__35484__auto__,c__41282__auto___48574,r,vr){
return (function() {
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__35485__auto__ = null;
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__35485__auto____0 = (function (){
var statearr_48135 = [null,null,null,null,null,null,null,null,null];
(statearr_48135[(0)] = kdlyticsgui$mount$http_post_dispatch_$_state_machine__35485__auto__);

(statearr_48135[(1)] = (1));

return statearr_48135;
});
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__35485__auto____1 = (function (state_48123){
while(true){
var ret_value__35486__auto__ = (function (){try{while(true){
var result__35487__auto__ = switch__35484__auto__(state_48123);
if(cljs.core.keyword_identical_QMARK_(result__35487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35487__auto__;
}
break;
}
}catch (e48136){var ex__35488__auto__ = e48136;
var statearr_48137_48604 = state_48123;
(statearr_48137_48604[(2)] = ex__35488__auto__);


if(cljs.core.seq((state_48123[(4)]))){
var statearr_48138_48605 = state_48123;
(statearr_48138_48605[(1)] = cljs.core.first((state_48123[(4)])));

} else {
throw ex__35488__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48606 = state_48123;
state_48123 = G__48606;
continue;
} else {
return ret_value__35486__auto__;
}
break;
}
});
kdlyticsgui$mount$http_post_dispatch_$_state_machine__35485__auto__ = function(state_48123){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__35485__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__35485__auto____1.call(this,state_48123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_post_dispatch_$_state_machine__35485__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_post_dispatch_$_state_machine__35485__auto____0;
kdlyticsgui$mount$http_post_dispatch_$_state_machine__35485__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_post_dispatch_$_state_machine__35485__auto____1;
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__35485__auto__;
})()
;})(seq__47986,chunk__47987,count__47988,i__47989,switch__35484__auto__,c__41282__auto___48574,r,vr))
})();
var state__41284__auto__ = (function (){var statearr_48139 = f__41283__auto__();
(statearr_48139[(6)] = c__41282__auto___48574);

return statearr_48139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41284__auto__);
});})(seq__47986,chunk__47987,count__47988,i__47989,c__41282__auto___48574,r,vr))
);



var G__48607 = seq__47986;
var G__48608 = chunk__47987;
var G__48609 = count__47988;
var G__48610 = (i__47989 + (1));
seq__47986 = G__48607;
chunk__47987 = G__48608;
count__47988 = G__48609;
i__47989 = G__48610;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47986);
if(temp__5804__auto__){
var seq__47986__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47986__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47986__$1);
var G__48611 = cljs.core.chunk_rest(seq__47986__$1);
var G__48612 = c__5568__auto__;
var G__48613 = cljs.core.count(c__5568__auto__);
var G__48614 = (0);
seq__47986 = G__48611;
chunk__47987 = G__48612;
count__47988 = G__48613;
i__47989 = G__48614;
continue;
} else {
var r = cljs.core.first(seq__47986__$1);
var c__41282__auto___48615 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__47986,chunk__47987,count__47988,i__47989,c__41282__auto___48615,r,seq__47986__$1,temp__5804__auto__,vr){
return (function (){
var f__41283__auto__ = (function (){var switch__35484__auto__ = ((function (seq__47986,chunk__47987,count__47988,i__47989,c__41282__auto___48615,r,seq__47986__$1,temp__5804__auto__,vr){
return (function (state_48173){
var state_val_48174 = (state_48173[(1)]);
if((state_val_48174 === (1))){
var inst_48140 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_48141 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var state_48173__$1 = (function (){var statearr_48175 = state_48173;
(statearr_48175[(7)] = inst_48140);

return statearr_48175;
})();
if(cljs.core.truth_(inst_48141)){
var statearr_48176_48617 = state_48173__$1;
(statearr_48176_48617[(1)] = (3));

} else {
var statearr_48177_48618 = state_48173__$1;
(statearr_48177_48618[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48174 === (2))){
var inst_48156 = (state_48173[(2)]);
var inst_48157 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_48158 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_48156);
var inst_48159 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_48157,inst_48158);
var inst_48160 = re_frame.core.dispatch(inst_48159);
var inst_48161 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_48173__$1 = (function (){var statearr_48178 = state_48173;
(statearr_48178[(8)] = inst_48160);

return statearr_48178;
})();
if(cljs.core.truth_(inst_48161)){
var statearr_48179_48619 = state_48173__$1;
(statearr_48179_48619[(1)] = (6));

} else {
var statearr_48180_48620 = state_48173__$1;
(statearr_48180_48620[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48174 === (3))){
var inst_48143 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_48144 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var inst_48145 = [inst_48144];
var inst_48146 = cljs.core.PersistentHashMap.fromArrays(inst_48143,inst_48145);
var state_48173__$1 = state_48173;
var statearr_48181_48621 = state_48173__$1;
(statearr_48181_48621[(2)] = inst_48146);

(statearr_48181_48621[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48174 === (4))){
var inst_48148 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_48149 = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(r);
var inst_48150 = [inst_48149];
var inst_48151 = cljs.core.PersistentHashMap.fromArrays(inst_48148,inst_48150);
var state_48173__$1 = state_48173;
var statearr_48182_48622 = state_48173__$1;
(statearr_48182_48622[(2)] = inst_48151);

(statearr_48182_48622[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48174 === (5))){
var inst_48140 = (state_48173[(7)]);
var inst_48153 = (state_48173[(2)]);
var inst_48154 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_48140,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_48153], 0));
var state_48173__$1 = state_48173;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48173__$1,(2),inst_48154);
} else {
if((state_val_48174 === (6))){
var inst_48163 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48164 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_48165 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_48166 = [inst_48164,inst_48165];
var inst_48167 = (new cljs.core.PersistentVector(null,2,(5),inst_48163,inst_48166,null));
var inst_48168 = re_frame.core.dispatch(inst_48167);
var state_48173__$1 = state_48173;
var statearr_48183_48623 = state_48173__$1;
(statearr_48183_48623[(2)] = inst_48168);

(statearr_48183_48623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48174 === (7))){
var state_48173__$1 = state_48173;
var statearr_48184_48624 = state_48173__$1;
(statearr_48184_48624[(2)] = null);

(statearr_48184_48624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48174 === (8))){
var inst_48171 = (state_48173[(2)]);
var state_48173__$1 = state_48173;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48173__$1,inst_48171);
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
});})(seq__47986,chunk__47987,count__47988,i__47989,c__41282__auto___48615,r,seq__47986__$1,temp__5804__auto__,vr))
;
return ((function (seq__47986,chunk__47987,count__47988,i__47989,switch__35484__auto__,c__41282__auto___48615,r,seq__47986__$1,temp__5804__auto__,vr){
return (function() {
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__35485__auto__ = null;
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__35485__auto____0 = (function (){
var statearr_48185 = [null,null,null,null,null,null,null,null,null];
(statearr_48185[(0)] = kdlyticsgui$mount$http_post_dispatch_$_state_machine__35485__auto__);

(statearr_48185[(1)] = (1));

return statearr_48185;
});
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__35485__auto____1 = (function (state_48173){
while(true){
var ret_value__35486__auto__ = (function (){try{while(true){
var result__35487__auto__ = switch__35484__auto__(state_48173);
if(cljs.core.keyword_identical_QMARK_(result__35487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35487__auto__;
}
break;
}
}catch (e48186){var ex__35488__auto__ = e48186;
var statearr_48187_48626 = state_48173;
(statearr_48187_48626[(2)] = ex__35488__auto__);


if(cljs.core.seq((state_48173[(4)]))){
var statearr_48188_48627 = state_48173;
(statearr_48188_48627[(1)] = cljs.core.first((state_48173[(4)])));

} else {
throw ex__35488__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48628 = state_48173;
state_48173 = G__48628;
continue;
} else {
return ret_value__35486__auto__;
}
break;
}
});
kdlyticsgui$mount$http_post_dispatch_$_state_machine__35485__auto__ = function(state_48173){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__35485__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__35485__auto____1.call(this,state_48173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_post_dispatch_$_state_machine__35485__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_post_dispatch_$_state_machine__35485__auto____0;
kdlyticsgui$mount$http_post_dispatch_$_state_machine__35485__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_post_dispatch_$_state_machine__35485__auto____1;
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__35485__auto__;
})()
;})(seq__47986,chunk__47987,count__47988,i__47989,switch__35484__auto__,c__41282__auto___48615,r,seq__47986__$1,temp__5804__auto__,vr))
})();
var state__41284__auto__ = (function (){var statearr_48189 = f__41283__auto__();
(statearr_48189[(6)] = c__41282__auto___48615);

return statearr_48189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41284__auto__);
});})(seq__47986,chunk__47987,count__47988,i__47989,c__41282__auto___48615,r,seq__47986__$1,temp__5804__auto__,vr))
);



var G__48629 = cljs.core.next(seq__47986__$1);
var G__48630 = null;
var G__48631 = (0);
var G__48632 = (0);
seq__47986 = G__48629;
chunk__47987 = G__48630;
count__47988 = G__48631;
i__47989 = G__48632;
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
var seq__48190 = cljs.core.seq(vr);
var chunk__48191 = null;
var count__48192 = (0);
var i__48193 = (0);
while(true){
if((i__48193 < count__48192)){
var r = chunk__48191.cljs$core$IIndexed$_nth$arity$2(null,i__48193);
var c__41282__auto___48634 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__48190,chunk__48191,count__48192,i__48193,c__41282__auto___48634,r,vr){
return (function (){
var f__41283__auto__ = (function (){var switch__35484__auto__ = ((function (seq__48190,chunk__48191,count__48192,i__48193,c__41282__auto___48634,r,vr){
return (function (state_48327){
var state_val_48328 = (state_48327[(1)]);
if((state_val_48328 === (1))){
var inst_48294 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_48295 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var state_48327__$1 = (function (){var statearr_48329 = state_48327;
(statearr_48329[(7)] = inst_48294);

return statearr_48329;
})();
if(cljs.core.truth_(inst_48295)){
var statearr_48330_48635 = state_48327__$1;
(statearr_48330_48635[(1)] = (3));

} else {
var statearr_48331_48636 = state_48327__$1;
(statearr_48331_48636[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (2))){
var inst_48310 = (state_48327[(2)]);
var inst_48311 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_48312 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_48310);
var inst_48313 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_48311,inst_48312);
var inst_48314 = re_frame.core.dispatch(inst_48313);
var inst_48315 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_48327__$1 = (function (){var statearr_48332 = state_48327;
(statearr_48332[(8)] = inst_48314);

return statearr_48332;
})();
if(cljs.core.truth_(inst_48315)){
var statearr_48333_48637 = state_48327__$1;
(statearr_48333_48637[(1)] = (6));

} else {
var statearr_48334_48638 = state_48327__$1;
(statearr_48334_48638[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (3))){
var inst_48297 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052),new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_48298 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var inst_48299 = [inst_48298,"application/json;charset=UTF-8"];
var inst_48300 = cljs.core.PersistentHashMap.fromArrays(inst_48297,inst_48299);
var state_48327__$1 = state_48327;
var statearr_48335_48640 = state_48327__$1;
(statearr_48335_48640[(2)] = inst_48300);

(statearr_48335_48640[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (4))){
var inst_48302 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_48303 = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(r);
var inst_48304 = [inst_48303,"application/json;charset=UTF-8"];
var inst_48305 = cljs.core.PersistentHashMap.fromArrays(inst_48302,inst_48304);
var state_48327__$1 = state_48327;
var statearr_48336_48641 = state_48327__$1;
(statearr_48336_48641[(2)] = inst_48305);

(statearr_48336_48641[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (5))){
var inst_48294 = (state_48327[(7)]);
var inst_48307 = (state_48327[(2)]);
var inst_48308 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_48294,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_48307], 0));
var state_48327__$1 = state_48327;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48327__$1,(2),inst_48308);
} else {
if((state_val_48328 === (6))){
var inst_48317 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48318 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_48319 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_48320 = [inst_48318,inst_48319];
var inst_48321 = (new cljs.core.PersistentVector(null,2,(5),inst_48317,inst_48320,null));
var inst_48322 = re_frame.core.dispatch(inst_48321);
var state_48327__$1 = state_48327;
var statearr_48337_48642 = state_48327__$1;
(statearr_48337_48642[(2)] = inst_48322);

(statearr_48337_48642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (7))){
var state_48327__$1 = state_48327;
var statearr_48338_48643 = state_48327__$1;
(statearr_48338_48643[(2)] = null);

(statearr_48338_48643[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (8))){
var inst_48325 = (state_48327[(2)]);
var state_48327__$1 = state_48327;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48327__$1,inst_48325);
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
});})(seq__48190,chunk__48191,count__48192,i__48193,c__41282__auto___48634,r,vr))
;
return ((function (seq__48190,chunk__48191,count__48192,i__48193,switch__35484__auto__,c__41282__auto___48634,r,vr){
return (function() {
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__35485__auto__ = null;
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__35485__auto____0 = (function (){
var statearr_48339 = [null,null,null,null,null,null,null,null,null];
(statearr_48339[(0)] = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__35485__auto__);

(statearr_48339[(1)] = (1));

return statearr_48339;
});
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__35485__auto____1 = (function (state_48327){
while(true){
var ret_value__35486__auto__ = (function (){try{while(true){
var result__35487__auto__ = switch__35484__auto__(state_48327);
if(cljs.core.keyword_identical_QMARK_(result__35487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35487__auto__;
}
break;
}
}catch (e48340){var ex__35488__auto__ = e48340;
var statearr_48341_48644 = state_48327;
(statearr_48341_48644[(2)] = ex__35488__auto__);


if(cljs.core.seq((state_48327[(4)]))){
var statearr_48342_48645 = state_48327;
(statearr_48342_48645[(1)] = cljs.core.first((state_48327[(4)])));

} else {
throw ex__35488__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48646 = state_48327;
state_48327 = G__48646;
continue;
} else {
return ret_value__35486__auto__;
}
break;
}
});
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__35485__auto__ = function(state_48327){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__35485__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__35485__auto____1.call(this,state_48327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__35485__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__35485__auto____0;
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__35485__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__35485__auto____1;
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__35485__auto__;
})()
;})(seq__48190,chunk__48191,count__48192,i__48193,switch__35484__auto__,c__41282__auto___48634,r,vr))
})();
var state__41284__auto__ = (function (){var statearr_48343 = f__41283__auto__();
(statearr_48343[(6)] = c__41282__auto___48634);

return statearr_48343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41284__auto__);
});})(seq__48190,chunk__48191,count__48192,i__48193,c__41282__auto___48634,r,vr))
);



var G__48647 = seq__48190;
var G__48648 = chunk__48191;
var G__48649 = count__48192;
var G__48650 = (i__48193 + (1));
seq__48190 = G__48647;
chunk__48191 = G__48648;
count__48192 = G__48649;
i__48193 = G__48650;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48190);
if(temp__5804__auto__){
var seq__48190__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48190__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48190__$1);
var G__48651 = cljs.core.chunk_rest(seq__48190__$1);
var G__48652 = c__5568__auto__;
var G__48653 = cljs.core.count(c__5568__auto__);
var G__48654 = (0);
seq__48190 = G__48651;
chunk__48191 = G__48652;
count__48192 = G__48653;
i__48193 = G__48654;
continue;
} else {
var r = cljs.core.first(seq__48190__$1);
var c__41282__auto___48655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__48190,chunk__48191,count__48192,i__48193,c__41282__auto___48655,r,seq__48190__$1,temp__5804__auto__,vr){
return (function (){
var f__41283__auto__ = (function (){var switch__35484__auto__ = ((function (seq__48190,chunk__48191,count__48192,i__48193,c__41282__auto___48655,r,seq__48190__$1,temp__5804__auto__,vr){
return (function (state_48377){
var state_val_48378 = (state_48377[(1)]);
if((state_val_48378 === (1))){
var inst_48344 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_48345 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var state_48377__$1 = (function (){var statearr_48379 = state_48377;
(statearr_48379[(7)] = inst_48344);

return statearr_48379;
})();
if(cljs.core.truth_(inst_48345)){
var statearr_48380_48656 = state_48377__$1;
(statearr_48380_48656[(1)] = (3));

} else {
var statearr_48381_48657 = state_48377__$1;
(statearr_48381_48657[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48378 === (2))){
var inst_48360 = (state_48377[(2)]);
var inst_48361 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_48362 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_48360);
var inst_48363 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_48361,inst_48362);
var inst_48364 = re_frame.core.dispatch(inst_48363);
var inst_48365 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_48377__$1 = (function (){var statearr_48382 = state_48377;
(statearr_48382[(8)] = inst_48364);

return statearr_48382;
})();
if(cljs.core.truth_(inst_48365)){
var statearr_48383_48658 = state_48377__$1;
(statearr_48383_48658[(1)] = (6));

} else {
var statearr_48384_48659 = state_48377__$1;
(statearr_48384_48659[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48378 === (3))){
var inst_48347 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052),new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_48348 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var inst_48349 = [inst_48348,"application/json;charset=UTF-8"];
var inst_48350 = cljs.core.PersistentHashMap.fromArrays(inst_48347,inst_48349);
var state_48377__$1 = state_48377;
var statearr_48385_48660 = state_48377__$1;
(statearr_48385_48660[(2)] = inst_48350);

(statearr_48385_48660[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48378 === (4))){
var inst_48352 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_48353 = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(r);
var inst_48354 = [inst_48353,"application/json;charset=UTF-8"];
var inst_48355 = cljs.core.PersistentHashMap.fromArrays(inst_48352,inst_48354);
var state_48377__$1 = state_48377;
var statearr_48386_48661 = state_48377__$1;
(statearr_48386_48661[(2)] = inst_48355);

(statearr_48386_48661[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48378 === (5))){
var inst_48344 = (state_48377[(7)]);
var inst_48357 = (state_48377[(2)]);
var inst_48358 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_48344,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_48357], 0));
var state_48377__$1 = state_48377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48377__$1,(2),inst_48358);
} else {
if((state_val_48378 === (6))){
var inst_48367 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48368 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_48369 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_48370 = [inst_48368,inst_48369];
var inst_48371 = (new cljs.core.PersistentVector(null,2,(5),inst_48367,inst_48370,null));
var inst_48372 = re_frame.core.dispatch(inst_48371);
var state_48377__$1 = state_48377;
var statearr_48387_48662 = state_48377__$1;
(statearr_48387_48662[(2)] = inst_48372);

(statearr_48387_48662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48378 === (7))){
var state_48377__$1 = state_48377;
var statearr_48388_48663 = state_48377__$1;
(statearr_48388_48663[(2)] = null);

(statearr_48388_48663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48378 === (8))){
var inst_48375 = (state_48377[(2)]);
var state_48377__$1 = state_48377;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48377__$1,inst_48375);
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
});})(seq__48190,chunk__48191,count__48192,i__48193,c__41282__auto___48655,r,seq__48190__$1,temp__5804__auto__,vr))
;
return ((function (seq__48190,chunk__48191,count__48192,i__48193,switch__35484__auto__,c__41282__auto___48655,r,seq__48190__$1,temp__5804__auto__,vr){
return (function() {
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__35485__auto__ = null;
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__35485__auto____0 = (function (){
var statearr_48389 = [null,null,null,null,null,null,null,null,null];
(statearr_48389[(0)] = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__35485__auto__);

(statearr_48389[(1)] = (1));

return statearr_48389;
});
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__35485__auto____1 = (function (state_48377){
while(true){
var ret_value__35486__auto__ = (function (){try{while(true){
var result__35487__auto__ = switch__35484__auto__(state_48377);
if(cljs.core.keyword_identical_QMARK_(result__35487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35487__auto__;
}
break;
}
}catch (e48390){var ex__35488__auto__ = e48390;
var statearr_48391_48664 = state_48377;
(statearr_48391_48664[(2)] = ex__35488__auto__);


if(cljs.core.seq((state_48377[(4)]))){
var statearr_48392_48665 = state_48377;
(statearr_48392_48665[(1)] = cljs.core.first((state_48377[(4)])));

} else {
throw ex__35488__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48666 = state_48377;
state_48377 = G__48666;
continue;
} else {
return ret_value__35486__auto__;
}
break;
}
});
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__35485__auto__ = function(state_48377){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__35485__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__35485__auto____1.call(this,state_48377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__35485__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__35485__auto____0;
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__35485__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__35485__auto____1;
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__35485__auto__;
})()
;})(seq__48190,chunk__48191,count__48192,i__48193,switch__35484__auto__,c__41282__auto___48655,r,seq__48190__$1,temp__5804__auto__,vr))
})();
var state__41284__auto__ = (function (){var statearr_48393 = f__41283__auto__();
(statearr_48393[(6)] = c__41282__auto___48655);

return statearr_48393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41284__auto__);
});})(seq__48190,chunk__48191,count__48192,i__48193,c__41282__auto___48655,r,seq__48190__$1,temp__5804__auto__,vr))
);



var G__48667 = cljs.core.next(seq__48190__$1);
var G__48668 = null;
var G__48669 = (0);
var G__48670 = (0);
seq__48190 = G__48667;
chunk__48191 = G__48668;
count__48192 = G__48669;
i__48193 = G__48670;
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
var c__41282__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41283__auto__ = (function (){var switch__35484__auto__ = (function (state_48418){
var state_val_48419 = (state_48418[(1)]);
if((state_val_48419 === (1))){
var inst_48394 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_48395 = [new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)];
var inst_48396 = new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707).cljs$core$IFn$_invoke$arity$1(request);
var inst_48397 = [inst_48396];
var inst_48398 = cljs.core.PersistentHashMap.fromArrays(inst_48395,inst_48397);
var inst_48399 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_48394,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_48398], 0));
var state_48418__$1 = state_48418;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48418__$1,(2),inst_48399);
} else {
if((state_val_48419 === (2))){
var inst_48401 = (state_48418[(2)]);
var inst_48402 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_48403 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_48401);
var inst_48404 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_48402,inst_48403);
var inst_48405 = re_frame.core.dispatch(inst_48404);
var inst_48406 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_48418__$1 = (function (){var statearr_48420 = state_48418;
(statearr_48420[(7)] = inst_48405);

return statearr_48420;
})();
if(cljs.core.truth_(inst_48406)){
var statearr_48421_48671 = state_48418__$1;
(statearr_48421_48671[(1)] = (3));

} else {
var statearr_48422_48672 = state_48418__$1;
(statearr_48422_48672[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48419 === (3))){
var inst_48408 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48409 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_48410 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_48411 = [inst_48409,inst_48410];
var inst_48412 = (new cljs.core.PersistentVector(null,2,(5),inst_48408,inst_48411,null));
var inst_48413 = re_frame.core.dispatch(inst_48412);
var state_48418__$1 = state_48418;
var statearr_48423_48673 = state_48418__$1;
(statearr_48423_48673[(2)] = inst_48413);

(statearr_48423_48673[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48419 === (4))){
var state_48418__$1 = state_48418;
var statearr_48424_48674 = state_48418__$1;
(statearr_48424_48674[(2)] = null);

(statearr_48424_48674[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48419 === (5))){
var inst_48416 = (state_48418[(2)]);
var state_48418__$1 = state_48418;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48418__$1,inst_48416);
} else {
return null;
}
}
}
}
}
});
return (function() {
var kdlyticsgui$mount$http_put_dispatch_$_state_machine__35485__auto__ = null;
var kdlyticsgui$mount$http_put_dispatch_$_state_machine__35485__auto____0 = (function (){
var statearr_48425 = [null,null,null,null,null,null,null,null];
(statearr_48425[(0)] = kdlyticsgui$mount$http_put_dispatch_$_state_machine__35485__auto__);

(statearr_48425[(1)] = (1));

return statearr_48425;
});
var kdlyticsgui$mount$http_put_dispatch_$_state_machine__35485__auto____1 = (function (state_48418){
while(true){
var ret_value__35486__auto__ = (function (){try{while(true){
var result__35487__auto__ = switch__35484__auto__(state_48418);
if(cljs.core.keyword_identical_QMARK_(result__35487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35487__auto__;
}
break;
}
}catch (e48426){var ex__35488__auto__ = e48426;
var statearr_48427_48675 = state_48418;
(statearr_48427_48675[(2)] = ex__35488__auto__);


if(cljs.core.seq((state_48418[(4)]))){
var statearr_48428_48676 = state_48418;
(statearr_48428_48676[(1)] = cljs.core.first((state_48418[(4)])));

} else {
throw ex__35488__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48677 = state_48418;
state_48418 = G__48677;
continue;
} else {
return ret_value__35486__auto__;
}
break;
}
});
kdlyticsgui$mount$http_put_dispatch_$_state_machine__35485__auto__ = function(state_48418){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_put_dispatch_$_state_machine__35485__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_put_dispatch_$_state_machine__35485__auto____1.call(this,state_48418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_put_dispatch_$_state_machine__35485__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_put_dispatch_$_state_machine__35485__auto____0;
kdlyticsgui$mount$http_put_dispatch_$_state_machine__35485__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_put_dispatch_$_state_machine__35485__auto____1;
return kdlyticsgui$mount$http_put_dispatch_$_state_machine__35485__auto__;
})()
})();
var state__41284__auto__ = (function (){var statearr_48429 = f__41283__auto__();
(statearr_48429[(6)] = c__41282__auto__);

return statearr_48429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41284__auto__);
}));

return c__41282__auto__;
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http-put-dispatch","http-put-dispatch",-484936711),kdlyticsgui.mount.http_put_dispatch);
kdlyticsgui.mount.simple_http_get_events = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-naked-positions","get-naked-positions",851863850),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"naked-position-transit-array",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"naked-positions","naked-positions",-1170378384),new cljs.core.Keyword(null,"mounting-modal","mounting-modal",-1411315623),true], null)], null);
kdlyticsgui.mount.simple_http_assets = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472),new cljs.core.Keyword(null,"namespace","namespace",-377510372),"common.static",new cljs.core.Keyword(null,"asset","asset",-280274466),"portfolios",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null)], null)], null);

//# sourceMappingURL=kdlyticsgui.mount.js.map
