goog.provide('kdlyticsgui.mount');
kdlyticsgui.mount.default_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"test-data","test-data",805102338),new cljs.core.Keyword("navigation","success-modal","navigation/success-modal",533446693),new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),new cljs.core.Keyword("navigation","active-section","navigation/active-section",-1272053018),new cljs.core.Keyword("navigation","success-compile","navigation/success-compile",33558826),new cljs.core.Keyword(null,"rot13","rot13",-631596017),new cljs.core.Keyword("navigation","active-view-cellar","navigation/active-view-cellar",-1146180625),new cljs.core.Keyword("navigation","active-view-vault","navigation/active-view-vault",-1235342702),new cljs.core.Keyword("navigation","active-view-wealth","navigation/active-view-wealth",-1986836686),new cljs.core.Keyword("navigation","active-view-tools","navigation/active-view-tools",-2036856651),new cljs.core.Keyword("navigation","active-view-positions","navigation/active-view-positions",1459188376),new cljs.core.Keyword(null,"dummy","dummy",2059765854),new cljs.core.Keyword(null,"positions-summary","positions-summary",-17081762)],[null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show","show",-576705889),false,new cljs.core.Keyword(null,"on-close","on-close",-761178394),null,new cljs.core.Keyword(null,"response","response",-1068424192),null], null),false,new cljs.core.Keyword(null,"entry","entry",505168823),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show","show",-576705889),false,new cljs.core.Keyword(null,"on-close","on-close",-761178394),null,new cljs.core.Keyword(null,"response","response",-1068424192),null], null),false,new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"scrapping","scrapping",-1589708187),new cljs.core.Keyword(null,"summary","summary",380847952),null,cljs.core.PersistentVector.EMPTY]);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kdlyticsgui.mount","initialize-db","kdlyticsgui.mount/initialize-db",-798563823),(function (_,___$1){
return kdlyticsgui.mount.default_db;
}));
var seq__38447_39659 = cljs.core.seq(cljs.core.keys(kdlyticsgui.mount.default_db));
var chunk__38448_39660 = null;
var count__38449_39661 = (0);
var i__38450_39662 = (0);
while(true){
if((i__38450_39662 < count__38449_39661)){
var k_39663 = chunk__38448_39660.cljs$core$IIndexed$_nth$arity$2(null,i__38450_39662);
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(k_39663,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (seq__38447_39659,chunk__38448_39660,count__38449_39661,i__38450_39662,k_39663){
return (function (db){
return (k_39663.cljs$core$IFn$_invoke$arity$1 ? k_39663.cljs$core$IFn$_invoke$arity$1(db) : k_39663.call(null,db));
});})(seq__38447_39659,chunk__38448_39660,count__38449_39661,i__38450_39662,k_39663))
], 0));


var G__39664 = seq__38447_39659;
var G__39665 = chunk__38448_39660;
var G__39666 = count__38449_39661;
var G__39667 = (i__38450_39662 + (1));
seq__38447_39659 = G__39664;
chunk__38448_39660 = G__39665;
count__38449_39661 = G__39666;
i__38450_39662 = G__39667;
continue;
} else {
var temp__5804__auto___39668 = cljs.core.seq(seq__38447_39659);
if(temp__5804__auto___39668){
var seq__38447_39669__$1 = temp__5804__auto___39668;
if(cljs.core.chunked_seq_QMARK_(seq__38447_39669__$1)){
var c__5568__auto___39670 = cljs.core.chunk_first(seq__38447_39669__$1);
var G__39671 = cljs.core.chunk_rest(seq__38447_39669__$1);
var G__39672 = c__5568__auto___39670;
var G__39673 = cljs.core.count(c__5568__auto___39670);
var G__39674 = (0);
seq__38447_39659 = G__39671;
chunk__38448_39660 = G__39672;
count__38449_39661 = G__39673;
i__38450_39662 = G__39674;
continue;
} else {
var k_39675 = cljs.core.first(seq__38447_39669__$1);
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(k_39675,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (seq__38447_39659,chunk__38448_39660,count__38449_39661,i__38450_39662,k_39675,seq__38447_39669__$1,temp__5804__auto___39668){
return (function (db){
return (k_39675.cljs$core$IFn$_invoke$arity$1 ? k_39675.cljs$core$IFn$_invoke$arity$1(db) : k_39675.call(null,db));
});})(seq__38447_39659,chunk__38448_39660,count__38449_39661,i__38450_39662,k_39675,seq__38447_39669__$1,temp__5804__auto___39668))
], 0));


var G__39676 = cljs.core.next(seq__38447_39669__$1);
var G__39677 = null;
var G__39678 = (0);
var G__39679 = (0);
seq__38447_39659 = G__39676;
chunk__38448_39660 = G__39677;
count__38449_39661 = G__39678;
i__38450_39662 = G__39679;
continue;
}
} else {
}
}
break;
}
var seq__38455_39680 = cljs.core.seq(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rot13","rot13",-631596017),new cljs.core.Keyword(null,"test-data","test-data",805102338),new cljs.core.Keyword("navigation","active-section","navigation/active-section",-1272053018),new cljs.core.Keyword("navigation","active-view-wealth","navigation/active-view-wealth",-1986836686),new cljs.core.Keyword("navigation","active-view-positions","navigation/active-view-positions",1459188376),new cljs.core.Keyword("navigation","active-view-vault","navigation/active-view-vault",-1235342702),new cljs.core.Keyword("navigation","active-view-cellar","navigation/active-view-cellar",-1146180625),new cljs.core.Keyword("navigation","active-view-tools","navigation/active-view-tools",-2036856651),new cljs.core.Keyword(null,"positions-summary","positions-summary",-17081762),new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254)], null));
var chunk__38456_39681 = null;
var count__38457_39682 = (0);
var i__38458_39683 = (0);
while(true){
if((i__38458_39683 < count__38457_39682)){
var k_39684 = chunk__38456_39681.cljs$core$IIndexed$_nth$arity$2(null,i__38458_39683);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_39684,((function (seq__38455_39680,chunk__38456_39681,count__38457_39682,i__38458_39683,k_39684){
return (function (db,p__38468){
var vec__38469 = p__38468;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38469,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38469,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_39684,data);
});})(seq__38455_39680,chunk__38456_39681,count__38457_39682,i__38458_39683,k_39684))
);


var G__39685 = seq__38455_39680;
var G__39686 = chunk__38456_39681;
var G__39687 = count__38457_39682;
var G__39688 = (i__38458_39683 + (1));
seq__38455_39680 = G__39685;
chunk__38456_39681 = G__39686;
count__38457_39682 = G__39687;
i__38458_39683 = G__39688;
continue;
} else {
var temp__5804__auto___39689 = cljs.core.seq(seq__38455_39680);
if(temp__5804__auto___39689){
var seq__38455_39690__$1 = temp__5804__auto___39689;
if(cljs.core.chunked_seq_QMARK_(seq__38455_39690__$1)){
var c__5568__auto___39691 = cljs.core.chunk_first(seq__38455_39690__$1);
var G__39692 = cljs.core.chunk_rest(seq__38455_39690__$1);
var G__39693 = c__5568__auto___39691;
var G__39694 = cljs.core.count(c__5568__auto___39691);
var G__39695 = (0);
seq__38455_39680 = G__39692;
chunk__38456_39681 = G__39693;
count__38457_39682 = G__39694;
i__38458_39683 = G__39695;
continue;
} else {
var k_39696 = cljs.core.first(seq__38455_39690__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_39696,((function (seq__38455_39680,chunk__38456_39681,count__38457_39682,i__38458_39683,k_39696,seq__38455_39690__$1,temp__5804__auto___39689){
return (function (db,p__38472){
var vec__38473 = p__38472;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38473,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38473,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_39696,data);
});})(seq__38455_39680,chunk__38456_39681,count__38457_39682,i__38458_39683,k_39696,seq__38455_39690__$1,temp__5804__auto___39689))
);


var G__39697 = cljs.core.next(seq__38455_39690__$1);
var G__39698 = null;
var G__39699 = (0);
var G__39700 = (0);
seq__38455_39680 = G__39697;
chunk__38456_39681 = G__39698;
count__38457_39682 = G__39699;
i__38458_39683 = G__39700;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("navigation","active","navigation/active",-1285216),(function (db,p__38479){
var vec__38481 = p__38479;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38481,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38481,(1),null);
var sub_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38481,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","active","navigation/active",-1285216),page], null),sub_page);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"instruments","instruments",-69874543),(function (p__38489,p__38490){
var map__38492 = p__38489;
var map__38492__$1 = cljs.core.__destructure_map(map__38492);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38492__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__38493 = p__38490;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38493,(0),null);
var instruments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38493,(1),null);
var positions = (cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db),cljs.core.PersistentVector.EMPTY);
if(and__5043__auto__){
return new cljs.core.Keyword(null,"naked-positions","naked-positions",-1170378384).cljs$core$IFn$_invoke$arity$1(db);
} else {
return and__5043__auto__;
}
})())?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38486_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__38486_SHARP_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instruments","instruments",-69874543),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__38486_SHARP_)], null))], 0));
}),new cljs.core.Keyword(null,"naked-positions","naked-positions",-1170378384).cljs$core$IFn$_invoke$arity$1(db)):cljs.core.PersistentVector.EMPTY);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"all-instrument-ids","all-instrument-ids",-1013285519),cljs.core.keys(instruments),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"instruments","instruments",-69874543),instruments,new cljs.core.Keyword(null,"positions","positions",-1380538434),positions,new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(positions,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("implementation","live-positions","implementation/live-positions",1202101052),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function kdlyticsgui$mount$iter__38501(s__38502){
return (new cljs.core.LazySeq(null,(function (){
var s__38502__$1 = s__38502;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__38502__$1);
if(temp__5804__auto__){
var s__38502__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38502__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__38502__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__38504 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__38503 = (0);
while(true){
if((i__38503 < size__5522__auto__)){
var vec__38510 = cljs.core._nth(c__5521__auto__,i__38503);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38510,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38510,(1),null);
cljs.core.chunk_append(b__38504,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = ((function (i__38503,vec__38510,p,g,c__5521__auto__,size__5522__auto__,b__38504,s__38502__$2,temp__5804__auto__,positions,map__38492,map__38492__$1,db,vec__38493,_,instruments){
return (function kdlyticsgui$mount$iter__38501_$_iter__38513(s__38514){
return (new cljs.core.LazySeq(null,((function (i__38503,vec__38510,p,g,c__5521__auto__,size__5522__auto__,b__38504,s__38502__$2,temp__5804__auto__,positions,map__38492,map__38492__$1,db,vec__38493,_,instruments){
return (function (){
var s__38514__$1 = s__38514;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__38514__$1);
if(temp__5804__auto____$1){
var s__38514__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38514__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__38514__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__38516 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__38515 = (0);
while(true){
if((i__38515 < size__5522__auto____$1)){
var line = cljs.core._nth(c__5521__auto____$1,i__38515);
if((((!((new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line) == null)))) && ((new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line) > (0))))){
cljs.core.chunk_append(b__38516,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line)], null));

var G__39703 = (i__38515 + (1));
i__38515 = G__39703;
continue;
} else {
var G__39704 = (i__38515 + (1));
i__38515 = G__39704;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38516),kdlyticsgui$mount$iter__38501_$_iter__38513(cljs.core.chunk_rest(s__38514__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38516),null);
}
} else {
var line = cljs.core.first(s__38514__$2);
if((((!((new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line) == null)))) && ((new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line) > (0))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line)], null),kdlyticsgui$mount$iter__38501_$_iter__38513(cljs.core.rest(s__38514__$2)));
} else {
var G__39705 = cljs.core.rest(s__38514__$2);
s__38514__$1 = G__39705;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__38503,vec__38510,p,g,c__5521__auto__,size__5522__auto__,b__38504,s__38502__$2,temp__5804__auto__,positions,map__38492,map__38492__$1,db,vec__38493,_,instruments))
,null,null));
});})(i__38503,vec__38510,p,g,c__5521__auto__,size__5522__auto__,b__38504,s__38502__$2,temp__5804__auto__,positions,map__38492,map__38492__$1,db,vec__38493,_,instruments))
;
return iter__5523__auto__(g);
})())], null));

var G__39706 = (i__38503 + (1));
i__38503 = G__39706;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38504),kdlyticsgui$mount$iter__38501(cljs.core.chunk_rest(s__38502__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38504),null);
}
} else {
var vec__38517 = cljs.core.first(s__38502__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38517,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38517,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = ((function (vec__38517,p,g,s__38502__$2,temp__5804__auto__,positions,map__38492,map__38492__$1,db,vec__38493,_,instruments){
return (function kdlyticsgui$mount$iter__38501_$_iter__38520(s__38521){
return (new cljs.core.LazySeq(null,(function (){
var s__38521__$1 = s__38521;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__38521__$1);
if(temp__5804__auto____$1){
var s__38521__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38521__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__38521__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__38523 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__38522 = (0);
while(true){
if((i__38522 < size__5522__auto__)){
var line = cljs.core._nth(c__5521__auto__,i__38522);
if((((!((new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line) == null)))) && ((new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line) > (0))))){
cljs.core.chunk_append(b__38523,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line)], null));

var G__39707 = (i__38522 + (1));
i__38522 = G__39707;
continue;
} else {
var G__39708 = (i__38522 + (1));
i__38522 = G__39708;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38523),kdlyticsgui$mount$iter__38501_$_iter__38520(cljs.core.chunk_rest(s__38521__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38523),null);
}
} else {
var line = cljs.core.first(s__38521__$2);
if((((!((new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line) == null)))) && ((new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line) > (0))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line)], null),kdlyticsgui$mount$iter__38501_$_iter__38520(cljs.core.rest(s__38521__$2)));
} else {
var G__39709 = cljs.core.rest(s__38521__$2);
s__38521__$1 = G__39709;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__38517,p,g,s__38502__$2,temp__5804__auto__,positions,map__38492,map__38492__$1,db,vec__38493,_,instruments))
;
return iter__5523__auto__(g);
})())], null),kdlyticsgui$mount$iter__38501(cljs.core.rest(s__38502__$2)));
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
var seq__38526_39711 = cljs.core.seq(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219),new cljs.core.Keyword("portfolio-history","filter","portfolio-history/filter",1821014145),new cljs.core.Keyword("attribution-history","filter","attribution-history/filter",-868840340)], null));
var chunk__38527_39712 = null;
var count__38528_39713 = (0);
var i__38529_39714 = (0);
while(true){
if((i__38529_39714 < count__38528_39713)){
var k_39716 = chunk__38527_39712.cljs$core$IIndexed$_nth$arity$2(null,i__38529_39714);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_39716,((function (seq__38526_39711,chunk__38527_39712,count__38528_39713,i__38529_39714,k_39716){
return (function (db,p__38540){
var vec__38542 = p__38540;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38542,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38542,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38542,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_39716,id], null),f);
});})(seq__38526_39711,chunk__38527_39712,count__38528_39713,i__38529_39714,k_39716))
);


var G__39717 = seq__38526_39711;
var G__39718 = chunk__38527_39712;
var G__39719 = count__38528_39713;
var G__39720 = (i__38529_39714 + (1));
seq__38526_39711 = G__39717;
chunk__38527_39712 = G__39718;
count__38528_39713 = G__39719;
i__38529_39714 = G__39720;
continue;
} else {
var temp__5804__auto___39721 = cljs.core.seq(seq__38526_39711);
if(temp__5804__auto___39721){
var seq__38526_39722__$1 = temp__5804__auto___39721;
if(cljs.core.chunked_seq_QMARK_(seq__38526_39722__$1)){
var c__5568__auto___39723 = cljs.core.chunk_first(seq__38526_39722__$1);
var G__39724 = cljs.core.chunk_rest(seq__38526_39722__$1);
var G__39725 = c__5568__auto___39723;
var G__39726 = cljs.core.count(c__5568__auto___39723);
var G__39727 = (0);
seq__38526_39711 = G__39724;
chunk__38527_39712 = G__39725;
count__38528_39713 = G__39726;
i__38529_39714 = G__39727;
continue;
} else {
var k_39728 = cljs.core.first(seq__38526_39722__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_39728,((function (seq__38526_39711,chunk__38527_39712,count__38528_39713,i__38529_39714,k_39728,seq__38526_39722__$1,temp__5804__auto___39721){
return (function (db,p__38546){
var vec__38547 = p__38546;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38547,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38547,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38547,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_39728,id], null),f);
});})(seq__38526_39711,chunk__38527_39712,count__38528_39713,i__38529_39714,k_39728,seq__38526_39722__$1,temp__5804__auto___39721))
);


var G__39730 = cljs.core.next(seq__38526_39722__$1);
var G__39731 = null;
var G__39732 = (0);
var G__39733 = (0);
seq__38526_39711 = G__39730;
chunk__38527_39712 = G__39731;
count__38528_39713 = G__39732;
i__38529_39714 = G__39733;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),(function (db,p__38550){
var vec__38551 = p__38550;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38551,(0),null);
var qt_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38551,(1),null);
var dt = qt_date.replace("\"","");
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),dt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("portfolio-history","end-period","portfolio-history/end-period",1624676397),kdlyticsgui.tools.gdate__GT_yyyyMMdd(kdlyticsgui.tools.ddMMMyyyy__GT_gdate(dt))], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),(function (db,p__38556){
var vec__38557 = p__38556;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38557,(0),null);
var attribution_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38557,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),attribution_date.replace("\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),(function (db,p__38561){
var vec__38562 = p__38561;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38562,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38562,(1),null);
var G__38565 = snapshot;
switch (G__38565) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38565)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),(function (db,p__38567){
var vec__38568 = p__38567;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38568,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38568,(1),null);
var G__38572 = snapshot;
switch (G__38572) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38572)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),(function (db,p__38574){
var vec__38575 = p__38574;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38575,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38575,(1),null);
var G__38578 = snapshot;
switch (G__38578) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38578)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cycle-shortcut","cycle-shortcut",-1617058214),(function (db,p__38579){
var vec__38580 = p__38579;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38580,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38580,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38580,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword("navigation","active-view","navigation/active-view",800211184).cljs$core$IFn$_invoke$arity$1(db)),"-risk/shortcut"].join(''));
var shortcut_value = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
if((shortcut_value < (4))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(shortcut_value + (1)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(1));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tree-table","tree-table",-1263002012),(function (db,p__38585){
var vec__38586 = p__38585;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38586,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38586,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38586,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword("navigation","active-view","navigation/active-view",800211184).cljs$core$IFn$_invoke$arity$1(db)),"-risk/display-style"].join(''));
var G__38589 = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
switch (G__38589) {
case "Tree":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Table");

break;
case "Table":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Tree");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38589)].join('')));

}
}));
/**
 * if response header is application/json keys will get keywordized automatically - otherwise send as text/plain
 */
kdlyticsgui.mount.http_get_dispatch = (function kdlyticsgui$mount$http_get_dispatch(request){
var vr = ((cljs.core.vector_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__38592 = cljs.core.seq(vr);
var chunk__38593 = null;
var count__38594 = (0);
var i__38595 = (0);
while(true){
if((i__38595 < count__38594)){
var r = chunk__38593.cljs$core$IIndexed$_nth$arity$2(null,i__38595);
var c__27979__auto___39753 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__38592,chunk__38593,count__38594,i__38595,c__27979__auto___39753,r,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__38592,chunk__38593,count__38594,i__38595,c__27979__auto___39753,r,vr){
return (function (state_38697){
var state_val_38698 = (state_38697[(1)]);
if((state_val_38698 === (1))){
var inst_38677 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_38678 = cljs_http.client.get(inst_38677);
var state_38697__$1 = state_38697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38697__$1,(2),inst_38678);
} else {
if((state_val_38698 === (2))){
var inst_38680 = (state_38697[(2)]);
var inst_38681 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_38682 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_38680);
var inst_38683 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_38681,inst_38682);
var inst_38684 = re_frame.core.dispatch(inst_38683);
var inst_38685 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_38697__$1 = (function (){var statearr_38703 = state_38697;
(statearr_38703[(7)] = inst_38684);

return statearr_38703;
})();
if(cljs.core.truth_(inst_38685)){
var statearr_38704_39756 = state_38697__$1;
(statearr_38704_39756[(1)] = (3));

} else {
var statearr_38705_39757 = state_38697__$1;
(statearr_38705_39757[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (3))){
var inst_38687 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38688 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_38689 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_38690 = [inst_38688,inst_38689];
var inst_38691 = (new cljs.core.PersistentVector(null,2,(5),inst_38687,inst_38690,null));
var inst_38692 = re_frame.core.dispatch(inst_38691);
var state_38697__$1 = state_38697;
var statearr_38708_39758 = state_38697__$1;
(statearr_38708_39758[(2)] = inst_38692);

(statearr_38708_39758[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (4))){
var state_38697__$1 = state_38697;
var statearr_38709_39759 = state_38697__$1;
(statearr_38709_39759[(2)] = null);

(statearr_38709_39759[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (5))){
var inst_38695 = (state_38697[(2)]);
var state_38697__$1 = state_38697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38697__$1,inst_38695);
} else {
return null;
}
}
}
}
}
});})(seq__38592,chunk__38593,count__38594,i__38595,c__27979__auto___39753,r,vr))
;
return ((function (seq__38592,chunk__38593,count__38594,i__38595,switch__27909__auto__,c__27979__auto___39753,r,vr){
return (function() {
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____0 = (function (){
var statearr_38711 = [null,null,null,null,null,null,null,null];
(statearr_38711[(0)] = kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__);

(statearr_38711[(1)] = (1));

return statearr_38711;
});
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____1 = (function (state_38697){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_38697);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e38712){var ex__27913__auto__ = e38712;
var statearr_38713_39761 = state_38697;
(statearr_38713_39761[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_38697[(4)]))){
var statearr_38714_39762 = state_38697;
(statearr_38714_39762[(1)] = cljs.core.first((state_38697[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39763 = state_38697;
state_38697 = G__39763;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__ = function(state_38697){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____1.call(this,state_38697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__;
})()
;})(seq__38592,chunk__38593,count__38594,i__38595,switch__27909__auto__,c__27979__auto___39753,r,vr))
})();
var state__27981__auto__ = (function (){var statearr_38716 = f__27980__auto__();
(statearr_38716[(6)] = c__27979__auto___39753);

return statearr_38716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__38592,chunk__38593,count__38594,i__38595,c__27979__auto___39753,r,vr))
);



var G__39769 = seq__38592;
var G__39770 = chunk__38593;
var G__39771 = count__38594;
var G__39772 = (i__38595 + (1));
seq__38592 = G__39769;
chunk__38593 = G__39770;
count__38594 = G__39771;
i__38595 = G__39772;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38592);
if(temp__5804__auto__){
var seq__38592__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38592__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38592__$1);
var G__39773 = cljs.core.chunk_rest(seq__38592__$1);
var G__39774 = c__5568__auto__;
var G__39775 = cljs.core.count(c__5568__auto__);
var G__39776 = (0);
seq__38592 = G__39773;
chunk__38593 = G__39774;
count__38594 = G__39775;
i__38595 = G__39776;
continue;
} else {
var r = cljs.core.first(seq__38592__$1);
var c__27979__auto___39777 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__38592,chunk__38593,count__38594,i__38595,c__27979__auto___39777,r,seq__38592__$1,temp__5804__auto__,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__38592,chunk__38593,count__38594,i__38595,c__27979__auto___39777,r,seq__38592__$1,temp__5804__auto__,vr){
return (function (state_38738){
var state_val_38739 = (state_38738[(1)]);
if((state_val_38739 === (1))){
var inst_38717 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_38718 = cljs_http.client.get(inst_38717);
var state_38738__$1 = state_38738;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38738__$1,(2),inst_38718);
} else {
if((state_val_38739 === (2))){
var inst_38720 = (state_38738[(2)]);
var inst_38721 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_38722 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_38720);
var inst_38723 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_38721,inst_38722);
var inst_38724 = re_frame.core.dispatch(inst_38723);
var inst_38725 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_38738__$1 = (function (){var statearr_38747 = state_38738;
(statearr_38747[(7)] = inst_38724);

return statearr_38747;
})();
if(cljs.core.truth_(inst_38725)){
var statearr_38749_39779 = state_38738__$1;
(statearr_38749_39779[(1)] = (3));

} else {
var statearr_38750_39780 = state_38738__$1;
(statearr_38750_39780[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38739 === (3))){
var inst_38727 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38728 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_38729 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_38730 = [inst_38728,inst_38729];
var inst_38731 = (new cljs.core.PersistentVector(null,2,(5),inst_38727,inst_38730,null));
var inst_38732 = re_frame.core.dispatch(inst_38731);
var state_38738__$1 = state_38738;
var statearr_38755_39781 = state_38738__$1;
(statearr_38755_39781[(2)] = inst_38732);

(statearr_38755_39781[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38739 === (4))){
var state_38738__$1 = state_38738;
var statearr_38758_39782 = state_38738__$1;
(statearr_38758_39782[(2)] = null);

(statearr_38758_39782[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38739 === (5))){
var inst_38735 = (state_38738[(2)]);
var state_38738__$1 = state_38738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38738__$1,inst_38735);
} else {
return null;
}
}
}
}
}
});})(seq__38592,chunk__38593,count__38594,i__38595,c__27979__auto___39777,r,seq__38592__$1,temp__5804__auto__,vr))
;
return ((function (seq__38592,chunk__38593,count__38594,i__38595,switch__27909__auto__,c__27979__auto___39777,r,seq__38592__$1,temp__5804__auto__,vr){
return (function() {
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____0 = (function (){
var statearr_38763 = [null,null,null,null,null,null,null,null];
(statearr_38763[(0)] = kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__);

(statearr_38763[(1)] = (1));

return statearr_38763;
});
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____1 = (function (state_38738){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_38738);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e38764){var ex__27913__auto__ = e38764;
var statearr_38767_39785 = state_38738;
(statearr_38767_39785[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_38738[(4)]))){
var statearr_38768_39786 = state_38738;
(statearr_38768_39786[(1)] = cljs.core.first((state_38738[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39787 = state_38738;
state_38738 = G__39787;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__ = function(state_38738){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____1.call(this,state_38738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__;
})()
;})(seq__38592,chunk__38593,count__38594,i__38595,switch__27909__auto__,c__27979__auto___39777,r,seq__38592__$1,temp__5804__auto__,vr))
})();
var state__27981__auto__ = (function (){var statearr_38771 = f__27980__auto__();
(statearr_38771[(6)] = c__27979__auto___39777);

return statearr_38771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__38592,chunk__38593,count__38594,i__38595,c__27979__auto___39777,r,seq__38592__$1,temp__5804__auto__,vr))
);



var G__39788 = cljs.core.next(seq__38592__$1);
var G__39789 = null;
var G__39790 = (0);
var G__39791 = (0);
seq__38592 = G__39788;
chunk__38593 = G__39789;
count__38594 = G__39790;
i__38595 = G__39791;
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
var seq__38774 = cljs.core.seq(vr);
var chunk__38775 = null;
var count__38776 = (0);
var i__38777 = (0);
while(true){
if((i__38777 < count__38776)){
var r = chunk__38775.cljs$core$IIndexed$_nth$arity$2(null,i__38777);
var c__27979__auto___39792 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__38774,chunk__38775,count__38776,i__38777,c__27979__auto___39792,r,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__38774,chunk__38775,count__38776,i__38777,c__27979__auto___39792,r,vr){
return (function (state_38905){
var state_val_38906 = (state_38905[(1)]);
if((state_val_38906 === (1))){
var inst_38881 = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(request);
var inst_38882 = new cljs.core.Keyword(null,"asset","asset",-280274466).cljs$core$IFn$_invoke$arity$1(request);
var inst_38883 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"asset?namespace=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38881),"&asset=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38882)].join('');
var inst_38884 = cljs_http.client.get(inst_38883);
var state_38905__$1 = state_38905;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38905__$1,(2),inst_38884);
} else {
if((state_val_38906 === (2))){
var inst_38886 = (state_38905[(2)]);
var inst_38887 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_38888 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_38886);
var inst_38889 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_38887,inst_38888);
var inst_38890 = re_frame.core.dispatch(inst_38889);
var inst_38891 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_38905__$1 = (function (){var statearr_38909 = state_38905;
(statearr_38909[(7)] = inst_38890);

return statearr_38909;
})();
if(cljs.core.truth_(inst_38891)){
var statearr_38910_39793 = state_38905__$1;
(statearr_38910_39793[(1)] = (3));

} else {
var statearr_38911_39794 = state_38905__$1;
(statearr_38911_39794[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38906 === (3))){
var inst_38893 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38894 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_38895 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_38896 = [inst_38894,inst_38895];
var inst_38897 = (new cljs.core.PersistentVector(null,2,(5),inst_38893,inst_38896,null));
var inst_38898 = re_frame.core.dispatch(inst_38897);
var state_38905__$1 = state_38905;
var statearr_38912_39795 = state_38905__$1;
(statearr_38912_39795[(2)] = inst_38898);

(statearr_38912_39795[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38906 === (4))){
var state_38905__$1 = state_38905;
var statearr_38913_39796 = state_38905__$1;
(statearr_38913_39796[(2)] = null);

(statearr_38913_39796[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38906 === (5))){
var inst_38901 = (state_38905[(2)]);
var state_38905__$1 = state_38905;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38905__$1,inst_38901);
} else {
return null;
}
}
}
}
}
});})(seq__38774,chunk__38775,count__38776,i__38777,c__27979__auto___39792,r,vr))
;
return ((function (seq__38774,chunk__38775,count__38776,i__38777,switch__27909__auto__,c__27979__auto___39792,r,vr){
return (function() {
var kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____0 = (function (){
var statearr_38914 = [null,null,null,null,null,null,null,null];
(statearr_38914[(0)] = kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__);

(statearr_38914[(1)] = (1));

return statearr_38914;
});
var kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____1 = (function (state_38905){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_38905);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e38916){var ex__27913__auto__ = e38916;
var statearr_38917_39797 = state_38905;
(statearr_38917_39797[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_38905[(4)]))){
var statearr_38918_39798 = state_38905;
(statearr_38918_39798[(1)] = cljs.core.first((state_38905[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39799 = state_38905;
state_38905 = G__39799;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__ = function(state_38905){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____1.call(this,state_38905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__;
})()
;})(seq__38774,chunk__38775,count__38776,i__38777,switch__27909__auto__,c__27979__auto___39792,r,vr))
})();
var state__27981__auto__ = (function (){var statearr_38923 = f__27980__auto__();
(statearr_38923[(6)] = c__27979__auto___39792);

return statearr_38923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__38774,chunk__38775,count__38776,i__38777,c__27979__auto___39792,r,vr))
);



var G__39801 = seq__38774;
var G__39802 = chunk__38775;
var G__39803 = count__38776;
var G__39804 = (i__38777 + (1));
seq__38774 = G__39801;
chunk__38775 = G__39802;
count__38776 = G__39803;
i__38777 = G__39804;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38774);
if(temp__5804__auto__){
var seq__38774__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38774__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38774__$1);
var G__39808 = cljs.core.chunk_rest(seq__38774__$1);
var G__39809 = c__5568__auto__;
var G__39810 = cljs.core.count(c__5568__auto__);
var G__39811 = (0);
seq__38774 = G__39808;
chunk__38775 = G__39809;
count__38776 = G__39810;
i__38777 = G__39811;
continue;
} else {
var r = cljs.core.first(seq__38774__$1);
var c__27979__auto___39812 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__38774,chunk__38775,count__38776,i__38777,c__27979__auto___39812,r,seq__38774__$1,temp__5804__auto__,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__38774,chunk__38775,count__38776,i__38777,c__27979__auto___39812,r,seq__38774__$1,temp__5804__auto__,vr){
return (function (state_38952){
var state_val_38953 = (state_38952[(1)]);
if((state_val_38953 === (1))){
var inst_38928 = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(request);
var inst_38929 = new cljs.core.Keyword(null,"asset","asset",-280274466).cljs$core$IFn$_invoke$arity$1(request);
var inst_38930 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"asset?namespace=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38928),"&asset=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38929)].join('');
var inst_38931 = cljs_http.client.get(inst_38930);
var state_38952__$1 = state_38952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38952__$1,(2),inst_38931);
} else {
if((state_val_38953 === (2))){
var inst_38933 = (state_38952[(2)]);
var inst_38934 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_38935 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_38933);
var inst_38936 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_38934,inst_38935);
var inst_38937 = re_frame.core.dispatch(inst_38936);
var inst_38938 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_38952__$1 = (function (){var statearr_38964 = state_38952;
(statearr_38964[(7)] = inst_38937);

return statearr_38964;
})();
if(cljs.core.truth_(inst_38938)){
var statearr_38965_39813 = state_38952__$1;
(statearr_38965_39813[(1)] = (3));

} else {
var statearr_38966_39814 = state_38952__$1;
(statearr_38966_39814[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (3))){
var inst_38940 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38943 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_38944 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_38945 = [inst_38943,inst_38944];
var inst_38946 = (new cljs.core.PersistentVector(null,2,(5),inst_38940,inst_38945,null));
var inst_38947 = re_frame.core.dispatch(inst_38946);
var state_38952__$1 = state_38952;
var statearr_38971_39815 = state_38952__$1;
(statearr_38971_39815[(2)] = inst_38947);

(statearr_38971_39815[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (4))){
var state_38952__$1 = state_38952;
var statearr_38974_39816 = state_38952__$1;
(statearr_38974_39816[(2)] = null);

(statearr_38974_39816[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (5))){
var inst_38950 = (state_38952[(2)]);
var state_38952__$1 = state_38952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38952__$1,inst_38950);
} else {
return null;
}
}
}
}
}
});})(seq__38774,chunk__38775,count__38776,i__38777,c__27979__auto___39812,r,seq__38774__$1,temp__5804__auto__,vr))
;
return ((function (seq__38774,chunk__38775,count__38776,i__38777,switch__27909__auto__,c__27979__auto___39812,r,seq__38774__$1,temp__5804__auto__,vr){
return (function() {
var kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____0 = (function (){
var statearr_38978 = [null,null,null,null,null,null,null,null];
(statearr_38978[(0)] = kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__);

(statearr_38978[(1)] = (1));

return statearr_38978;
});
var kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____1 = (function (state_38952){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_38952);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e38980){var ex__27913__auto__ = e38980;
var statearr_38981_39817 = state_38952;
(statearr_38981_39817[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_38952[(4)]))){
var statearr_38991_39818 = state_38952;
(statearr_38991_39818[(1)] = cljs.core.first((state_38952[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39819 = state_38952;
state_38952 = G__39819;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__ = function(state_38952){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____1.call(this,state_38952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__;
})()
;})(seq__38774,chunk__38775,count__38776,i__38777,switch__27909__auto__,c__27979__auto___39812,r,seq__38774__$1,temp__5804__auto__,vr))
})();
var state__27981__auto__ = (function (){var statearr_38996 = f__27980__auto__();
(statearr_38996[(6)] = c__27979__auto___39812);

return statearr_38996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__38774,chunk__38775,count__38776,i__38777,c__27979__auto___39812,r,seq__38774__$1,temp__5804__auto__,vr))
);



var G__39820 = cljs.core.next(seq__38774__$1);
var G__39821 = null;
var G__39822 = (0);
var G__39823 = (0);
seq__38774 = G__39820;
chunk__38775 = G__39821;
count__38776 = G__39822;
i__38777 = G__39823;
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
var seq__39005 = cljs.core.seq(vr);
var chunk__39008 = null;
var count__39009 = (0);
var i__39010 = (0);
while(true){
if((i__39010 < count__39009)){
var r = chunk__39008.cljs$core$IIndexed$_nth$arity$2(null,i__39010);
var c__27979__auto___39825 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__39005,chunk__39008,count__39009,i__39010,c__27979__auto___39825,r,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__39005,chunk__39008,count__39009,i__39010,c__27979__auto___39825,r,vr){
return (function (state_39183){
var state_val_39184 = (state_39183[(1)]);
if((state_val_39184 === (1))){
var inst_39148 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_39149 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var state_39183__$1 = (function (){var statearr_39187 = state_39183;
(statearr_39187[(7)] = inst_39148);

return statearr_39187;
})();
if(cljs.core.truth_(inst_39149)){
var statearr_39188_39826 = state_39183__$1;
(statearr_39188_39826[(1)] = (3));

} else {
var statearr_39189_39827 = state_39183__$1;
(statearr_39189_39827[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39184 === (2))){
var inst_39166 = (state_39183[(2)]);
var inst_39167 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_39168 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_39166);
var inst_39169 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_39167,inst_39168);
var inst_39170 = re_frame.core.dispatch(inst_39169);
var inst_39171 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_39183__$1 = (function (){var statearr_39192 = state_39183;
(statearr_39192[(8)] = inst_39170);

return statearr_39192;
})();
if(cljs.core.truth_(inst_39171)){
var statearr_39193_39829 = state_39183__$1;
(statearr_39193_39829[(1)] = (6));

} else {
var statearr_39194_39830 = state_39183__$1;
(statearr_39194_39830[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39184 === (3))){
var inst_39151 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_39154 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var inst_39155 = [inst_39154];
var inst_39156 = cljs.core.PersistentHashMap.fromArrays(inst_39151,inst_39155);
var state_39183__$1 = state_39183;
var statearr_39197_39831 = state_39183__$1;
(statearr_39197_39831[(2)] = inst_39156);

(statearr_39197_39831[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39184 === (4))){
var inst_39158 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_39159 = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(r);
var inst_39160 = [inst_39159];
var inst_39161 = cljs.core.PersistentHashMap.fromArrays(inst_39158,inst_39160);
var state_39183__$1 = state_39183;
var statearr_39200_39832 = state_39183__$1;
(statearr_39200_39832[(2)] = inst_39161);

(statearr_39200_39832[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39184 === (5))){
var inst_39148 = (state_39183[(7)]);
var inst_39163 = (state_39183[(2)]);
var inst_39164 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_39148,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_39163], 0));
var state_39183__$1 = state_39183;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39183__$1,(2),inst_39164);
} else {
if((state_val_39184 === (6))){
var inst_39173 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39174 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_39175 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_39176 = [inst_39174,inst_39175];
var inst_39177 = (new cljs.core.PersistentVector(null,2,(5),inst_39173,inst_39176,null));
var inst_39178 = re_frame.core.dispatch(inst_39177);
var state_39183__$1 = state_39183;
var statearr_39203_39834 = state_39183__$1;
(statearr_39203_39834[(2)] = inst_39178);

(statearr_39203_39834[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39184 === (7))){
var state_39183__$1 = state_39183;
var statearr_39206_39838 = state_39183__$1;
(statearr_39206_39838[(2)] = null);

(statearr_39206_39838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39184 === (8))){
var inst_39181 = (state_39183[(2)]);
var state_39183__$1 = state_39183;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39183__$1,inst_39181);
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
});})(seq__39005,chunk__39008,count__39009,i__39010,c__27979__auto___39825,r,vr))
;
return ((function (seq__39005,chunk__39008,count__39009,i__39010,switch__27909__auto__,c__27979__auto___39825,r,vr){
return (function() {
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____0 = (function (){
var statearr_39209 = [null,null,null,null,null,null,null,null,null];
(statearr_39209[(0)] = kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__);

(statearr_39209[(1)] = (1));

return statearr_39209;
});
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____1 = (function (state_39183){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_39183);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e39212){var ex__27913__auto__ = e39212;
var statearr_39213_39839 = state_39183;
(statearr_39213_39839[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_39183[(4)]))){
var statearr_39214_39840 = state_39183;
(statearr_39214_39840[(1)] = cljs.core.first((state_39183[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39841 = state_39183;
state_39183 = G__39841;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__ = function(state_39183){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____1.call(this,state_39183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__;
})()
;})(seq__39005,chunk__39008,count__39009,i__39010,switch__27909__auto__,c__27979__auto___39825,r,vr))
})();
var state__27981__auto__ = (function (){var statearr_39219 = f__27980__auto__();
(statearr_39219[(6)] = c__27979__auto___39825);

return statearr_39219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__39005,chunk__39008,count__39009,i__39010,c__27979__auto___39825,r,vr))
);



var G__39842 = seq__39005;
var G__39843 = chunk__39008;
var G__39844 = count__39009;
var G__39845 = (i__39010 + (1));
seq__39005 = G__39842;
chunk__39008 = G__39843;
count__39009 = G__39844;
i__39010 = G__39845;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39005);
if(temp__5804__auto__){
var seq__39005__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39005__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39005__$1);
var G__39846 = cljs.core.chunk_rest(seq__39005__$1);
var G__39847 = c__5568__auto__;
var G__39848 = cljs.core.count(c__5568__auto__);
var G__39849 = (0);
seq__39005 = G__39846;
chunk__39008 = G__39847;
count__39009 = G__39848;
i__39010 = G__39849;
continue;
} else {
var r = cljs.core.first(seq__39005__$1);
var c__27979__auto___39850 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__39005,chunk__39008,count__39009,i__39010,c__27979__auto___39850,r,seq__39005__$1,temp__5804__auto__,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__39005,chunk__39008,count__39009,i__39010,c__27979__auto___39850,r,seq__39005__$1,temp__5804__auto__,vr){
return (function (state_39253){
var state_val_39254 = (state_39253[(1)]);
if((state_val_39254 === (1))){
var inst_39220 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_39221 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var state_39253__$1 = (function (){var statearr_39258 = state_39253;
(statearr_39258[(7)] = inst_39220);

return statearr_39258;
})();
if(cljs.core.truth_(inst_39221)){
var statearr_39259_39851 = state_39253__$1;
(statearr_39259_39851[(1)] = (3));

} else {
var statearr_39262_39852 = state_39253__$1;
(statearr_39262_39852[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39254 === (2))){
var inst_39236 = (state_39253[(2)]);
var inst_39237 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_39238 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_39236);
var inst_39239 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_39237,inst_39238);
var inst_39240 = re_frame.core.dispatch(inst_39239);
var inst_39241 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_39253__$1 = (function (){var statearr_39264 = state_39253;
(statearr_39264[(8)] = inst_39240);

return statearr_39264;
})();
if(cljs.core.truth_(inst_39241)){
var statearr_39265_39854 = state_39253__$1;
(statearr_39265_39854[(1)] = (6));

} else {
var statearr_39266_39855 = state_39253__$1;
(statearr_39266_39855[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39254 === (3))){
var inst_39223 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_39224 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var inst_39225 = [inst_39224];
var inst_39226 = cljs.core.PersistentHashMap.fromArrays(inst_39223,inst_39225);
var state_39253__$1 = state_39253;
var statearr_39267_39860 = state_39253__$1;
(statearr_39267_39860[(2)] = inst_39226);

(statearr_39267_39860[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39254 === (4))){
var inst_39228 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_39229 = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(r);
var inst_39230 = [inst_39229];
var inst_39231 = cljs.core.PersistentHashMap.fromArrays(inst_39228,inst_39230);
var state_39253__$1 = state_39253;
var statearr_39268_39861 = state_39253__$1;
(statearr_39268_39861[(2)] = inst_39231);

(statearr_39268_39861[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39254 === (5))){
var inst_39220 = (state_39253[(7)]);
var inst_39233 = (state_39253[(2)]);
var inst_39234 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_39220,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_39233], 0));
var state_39253__$1 = state_39253;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39253__$1,(2),inst_39234);
} else {
if((state_val_39254 === (6))){
var inst_39243 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39244 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_39245 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_39246 = [inst_39244,inst_39245];
var inst_39247 = (new cljs.core.PersistentVector(null,2,(5),inst_39243,inst_39246,null));
var inst_39248 = re_frame.core.dispatch(inst_39247);
var state_39253__$1 = state_39253;
var statearr_39269_39867 = state_39253__$1;
(statearr_39269_39867[(2)] = inst_39248);

(statearr_39269_39867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39254 === (7))){
var state_39253__$1 = state_39253;
var statearr_39272_39868 = state_39253__$1;
(statearr_39272_39868[(2)] = null);

(statearr_39272_39868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39254 === (8))){
var inst_39251 = (state_39253[(2)]);
var state_39253__$1 = state_39253;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39253__$1,inst_39251);
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
});})(seq__39005,chunk__39008,count__39009,i__39010,c__27979__auto___39850,r,seq__39005__$1,temp__5804__auto__,vr))
;
return ((function (seq__39005,chunk__39008,count__39009,i__39010,switch__27909__auto__,c__27979__auto___39850,r,seq__39005__$1,temp__5804__auto__,vr){
return (function() {
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____0 = (function (){
var statearr_39275 = [null,null,null,null,null,null,null,null,null];
(statearr_39275[(0)] = kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__);

(statearr_39275[(1)] = (1));

return statearr_39275;
});
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____1 = (function (state_39253){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_39253);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e39277){var ex__27913__auto__ = e39277;
var statearr_39278_39869 = state_39253;
(statearr_39278_39869[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_39253[(4)]))){
var statearr_39279_39875 = state_39253;
(statearr_39279_39875[(1)] = cljs.core.first((state_39253[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39876 = state_39253;
state_39253 = G__39876;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__ = function(state_39253){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____1.call(this,state_39253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__;
})()
;})(seq__39005,chunk__39008,count__39009,i__39010,switch__27909__auto__,c__27979__auto___39850,r,seq__39005__$1,temp__5804__auto__,vr))
})();
var state__27981__auto__ = (function (){var statearr_39281 = f__27980__auto__();
(statearr_39281[(6)] = c__27979__auto___39850);

return statearr_39281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__39005,chunk__39008,count__39009,i__39010,c__27979__auto___39850,r,seq__39005__$1,temp__5804__auto__,vr))
);



var G__39886 = cljs.core.next(seq__39005__$1);
var G__39887 = null;
var G__39888 = (0);
var G__39889 = (0);
seq__39005 = G__39886;
chunk__39008 = G__39887;
count__39009 = G__39888;
i__39010 = G__39889;
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
var seq__39295 = cljs.core.seq(vr);
var chunk__39296 = null;
var count__39297 = (0);
var i__39298 = (0);
while(true){
if((i__39298 < count__39297)){
var r = chunk__39296.cljs$core$IIndexed$_nth$arity$2(null,i__39298);
var c__27979__auto___39897 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__39295,chunk__39296,count__39297,i__39298,c__27979__auto___39897,r,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__39295,chunk__39296,count__39297,i__39298,c__27979__auto___39897,r,vr){
return (function (state_39499){
var state_val_39500 = (state_39499[(1)]);
if((state_val_39500 === (1))){
var inst_39463 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_39464 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var state_39499__$1 = (function (){var statearr_39503 = state_39499;
(statearr_39503[(7)] = inst_39463);

return statearr_39503;
})();
if(cljs.core.truth_(inst_39464)){
var statearr_39504_39906 = state_39499__$1;
(statearr_39504_39906[(1)] = (3));

} else {
var statearr_39509_39907 = state_39499__$1;
(statearr_39509_39907[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39500 === (2))){
var inst_39480 = (state_39499[(2)]);
var inst_39481 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_39482 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_39480);
var inst_39483 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_39481,inst_39482);
var inst_39484 = re_frame.core.dispatch(inst_39483);
var inst_39485 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_39499__$1 = (function (){var statearr_39510 = state_39499;
(statearr_39510[(8)] = inst_39484);

return statearr_39510;
})();
if(cljs.core.truth_(inst_39485)){
var statearr_39511_39908 = state_39499__$1;
(statearr_39511_39908[(1)] = (6));

} else {
var statearr_39512_39910 = state_39499__$1;
(statearr_39512_39910[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39500 === (3))){
var inst_39467 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052),new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_39468 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var inst_39469 = [inst_39468,"application/json;charset=UTF-8"];
var inst_39470 = cljs.core.PersistentHashMap.fromArrays(inst_39467,inst_39469);
var state_39499__$1 = state_39499;
var statearr_39513_39911 = state_39499__$1;
(statearr_39513_39911[(2)] = inst_39470);

(statearr_39513_39911[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39500 === (4))){
var inst_39472 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_39473 = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(r);
var inst_39474 = [inst_39473,"application/json;charset=UTF-8"];
var inst_39475 = cljs.core.PersistentHashMap.fromArrays(inst_39472,inst_39474);
var state_39499__$1 = state_39499;
var statearr_39514_39913 = state_39499__$1;
(statearr_39514_39913[(2)] = inst_39475);

(statearr_39514_39913[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39500 === (5))){
var inst_39463 = (state_39499[(7)]);
var inst_39477 = (state_39499[(2)]);
var inst_39478 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_39463,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_39477], 0));
var state_39499__$1 = state_39499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39499__$1,(2),inst_39478);
} else {
if((state_val_39500 === (6))){
var inst_39487 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39488 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_39489 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_39490 = [inst_39488,inst_39489];
var inst_39491 = (new cljs.core.PersistentVector(null,2,(5),inst_39487,inst_39490,null));
var inst_39492 = re_frame.core.dispatch(inst_39491);
var state_39499__$1 = state_39499;
var statearr_39517_39914 = state_39499__$1;
(statearr_39517_39914[(2)] = inst_39492);

(statearr_39517_39914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39500 === (7))){
var state_39499__$1 = state_39499;
var statearr_39528_39915 = state_39499__$1;
(statearr_39528_39915[(2)] = null);

(statearr_39528_39915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39500 === (8))){
var inst_39495 = (state_39499[(2)]);
var state_39499__$1 = state_39499;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39499__$1,inst_39495);
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
});})(seq__39295,chunk__39296,count__39297,i__39298,c__27979__auto___39897,r,vr))
;
return ((function (seq__39295,chunk__39296,count__39297,i__39298,switch__27909__auto__,c__27979__auto___39897,r,vr){
return (function() {
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____0 = (function (){
var statearr_39532 = [null,null,null,null,null,null,null,null,null];
(statearr_39532[(0)] = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__);

(statearr_39532[(1)] = (1));

return statearr_39532;
});
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____1 = (function (state_39499){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_39499);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e39533){var ex__27913__auto__ = e39533;
var statearr_39536_39916 = state_39499;
(statearr_39536_39916[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_39499[(4)]))){
var statearr_39537_39917 = state_39499;
(statearr_39537_39917[(1)] = cljs.core.first((state_39499[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39918 = state_39499;
state_39499 = G__39918;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__ = function(state_39499){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____1.call(this,state_39499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__;
})()
;})(seq__39295,chunk__39296,count__39297,i__39298,switch__27909__auto__,c__27979__auto___39897,r,vr))
})();
var state__27981__auto__ = (function (){var statearr_39539 = f__27980__auto__();
(statearr_39539[(6)] = c__27979__auto___39897);

return statearr_39539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__39295,chunk__39296,count__39297,i__39298,c__27979__auto___39897,r,vr))
);



var G__39919 = seq__39295;
var G__39920 = chunk__39296;
var G__39921 = count__39297;
var G__39922 = (i__39298 + (1));
seq__39295 = G__39919;
chunk__39296 = G__39920;
count__39297 = G__39921;
i__39298 = G__39922;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39295);
if(temp__5804__auto__){
var seq__39295__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39295__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39295__$1);
var G__39923 = cljs.core.chunk_rest(seq__39295__$1);
var G__39924 = c__5568__auto__;
var G__39925 = cljs.core.count(c__5568__auto__);
var G__39926 = (0);
seq__39295 = G__39923;
chunk__39296 = G__39924;
count__39297 = G__39925;
i__39298 = G__39926;
continue;
} else {
var r = cljs.core.first(seq__39295__$1);
var c__27979__auto___39927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__39295,chunk__39296,count__39297,i__39298,c__27979__auto___39927,r,seq__39295__$1,temp__5804__auto__,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__39295,chunk__39296,count__39297,i__39298,c__27979__auto___39927,r,seq__39295__$1,temp__5804__auto__,vr){
return (function (state_39575){
var state_val_39576 = (state_39575[(1)]);
if((state_val_39576 === (1))){
var inst_39542 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_39543 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var state_39575__$1 = (function (){var statearr_39577 = state_39575;
(statearr_39577[(7)] = inst_39542);

return statearr_39577;
})();
if(cljs.core.truth_(inst_39543)){
var statearr_39578_39928 = state_39575__$1;
(statearr_39578_39928[(1)] = (3));

} else {
var statearr_39579_39929 = state_39575__$1;
(statearr_39579_39929[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39576 === (2))){
var inst_39558 = (state_39575[(2)]);
var inst_39559 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_39560 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_39558);
var inst_39561 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_39559,inst_39560);
var inst_39562 = re_frame.core.dispatch(inst_39561);
var inst_39563 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_39575__$1 = (function (){var statearr_39580 = state_39575;
(statearr_39580[(8)] = inst_39562);

return statearr_39580;
})();
if(cljs.core.truth_(inst_39563)){
var statearr_39581_39930 = state_39575__$1;
(statearr_39581_39930[(1)] = (6));

} else {
var statearr_39582_39931 = state_39575__$1;
(statearr_39582_39931[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39576 === (3))){
var inst_39545 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052),new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_39546 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var inst_39547 = [inst_39546,"application/json;charset=UTF-8"];
var inst_39548 = cljs.core.PersistentHashMap.fromArrays(inst_39545,inst_39547);
var state_39575__$1 = state_39575;
var statearr_39583_39932 = state_39575__$1;
(statearr_39583_39932[(2)] = inst_39548);

(statearr_39583_39932[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39576 === (4))){
var inst_39550 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_39551 = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(r);
var inst_39552 = [inst_39551,"application/json;charset=UTF-8"];
var inst_39553 = cljs.core.PersistentHashMap.fromArrays(inst_39550,inst_39552);
var state_39575__$1 = state_39575;
var statearr_39584_39933 = state_39575__$1;
(statearr_39584_39933[(2)] = inst_39553);

(statearr_39584_39933[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39576 === (5))){
var inst_39542 = (state_39575[(7)]);
var inst_39555 = (state_39575[(2)]);
var inst_39556 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_39542,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_39555], 0));
var state_39575__$1 = state_39575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39575__$1,(2),inst_39556);
} else {
if((state_val_39576 === (6))){
var inst_39565 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39566 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_39567 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_39568 = [inst_39566,inst_39567];
var inst_39569 = (new cljs.core.PersistentVector(null,2,(5),inst_39565,inst_39568,null));
var inst_39570 = re_frame.core.dispatch(inst_39569);
var state_39575__$1 = state_39575;
var statearr_39585_39934 = state_39575__$1;
(statearr_39585_39934[(2)] = inst_39570);

(statearr_39585_39934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39576 === (7))){
var state_39575__$1 = state_39575;
var statearr_39586_39935 = state_39575__$1;
(statearr_39586_39935[(2)] = null);

(statearr_39586_39935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39576 === (8))){
var inst_39573 = (state_39575[(2)]);
var state_39575__$1 = state_39575;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39575__$1,inst_39573);
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
});})(seq__39295,chunk__39296,count__39297,i__39298,c__27979__auto___39927,r,seq__39295__$1,temp__5804__auto__,vr))
;
return ((function (seq__39295,chunk__39296,count__39297,i__39298,switch__27909__auto__,c__27979__auto___39927,r,seq__39295__$1,temp__5804__auto__,vr){
return (function() {
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____0 = (function (){
var statearr_39587 = [null,null,null,null,null,null,null,null,null];
(statearr_39587[(0)] = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__);

(statearr_39587[(1)] = (1));

return statearr_39587;
});
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____1 = (function (state_39575){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_39575);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e39588){var ex__27913__auto__ = e39588;
var statearr_39589_39936 = state_39575;
(statearr_39589_39936[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_39575[(4)]))){
var statearr_39590_39937 = state_39575;
(statearr_39590_39937[(1)] = cljs.core.first((state_39575[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39938 = state_39575;
state_39575 = G__39938;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__ = function(state_39575){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____1.call(this,state_39575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__;
})()
;})(seq__39295,chunk__39296,count__39297,i__39298,switch__27909__auto__,c__27979__auto___39927,r,seq__39295__$1,temp__5804__auto__,vr))
})();
var state__27981__auto__ = (function (){var statearr_39591 = f__27980__auto__();
(statearr_39591[(6)] = c__27979__auto___39927);

return statearr_39591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__39295,chunk__39296,count__39297,i__39298,c__27979__auto___39927,r,seq__39295__$1,temp__5804__auto__,vr))
);



var G__39939 = cljs.core.next(seq__39295__$1);
var G__39940 = null;
var G__39941 = (0);
var G__39942 = (0);
seq__39295 = G__39939;
chunk__39296 = G__39940;
count__39297 = G__39941;
i__39298 = G__39942;
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
var f__27980__auto__ = (function (){var switch__27909__auto__ = (function (state_39616){
var state_val_39617 = (state_39616[(1)]);
if((state_val_39617 === (1))){
var inst_39592 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_39593 = [new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)];
var inst_39594 = new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707).cljs$core$IFn$_invoke$arity$1(request);
var inst_39595 = [inst_39594];
var inst_39596 = cljs.core.PersistentHashMap.fromArrays(inst_39593,inst_39595);
var inst_39597 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_39592,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_39596], 0));
var state_39616__$1 = state_39616;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39616__$1,(2),inst_39597);
} else {
if((state_val_39617 === (2))){
var inst_39599 = (state_39616[(2)]);
var inst_39600 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_39601 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_39599);
var inst_39602 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_39600,inst_39601);
var inst_39603 = re_frame.core.dispatch(inst_39602);
var inst_39604 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_39616__$1 = (function (){var statearr_39619 = state_39616;
(statearr_39619[(7)] = inst_39603);

return statearr_39619;
})();
if(cljs.core.truth_(inst_39604)){
var statearr_39620_39945 = state_39616__$1;
(statearr_39620_39945[(1)] = (3));

} else {
var statearr_39621_39946 = state_39616__$1;
(statearr_39621_39946[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39617 === (3))){
var inst_39606 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39607 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_39608 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_39609 = [inst_39607,inst_39608];
var inst_39610 = (new cljs.core.PersistentVector(null,2,(5),inst_39606,inst_39609,null));
var inst_39611 = re_frame.core.dispatch(inst_39610);
var state_39616__$1 = state_39616;
var statearr_39623_39948 = state_39616__$1;
(statearr_39623_39948[(2)] = inst_39611);

(statearr_39623_39948[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39617 === (4))){
var state_39616__$1 = state_39616;
var statearr_39624_39949 = state_39616__$1;
(statearr_39624_39949[(2)] = null);

(statearr_39624_39949[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39617 === (5))){
var inst_39614 = (state_39616[(2)]);
var state_39616__$1 = state_39616;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39616__$1,inst_39614);
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
var statearr_39626 = [null,null,null,null,null,null,null,null];
(statearr_39626[(0)] = kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto__);

(statearr_39626[(1)] = (1));

return statearr_39626;
});
var kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto____1 = (function (state_39616){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_39616);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e39628){var ex__27913__auto__ = e39628;
var statearr_39629_39956 = state_39616;
(statearr_39629_39956[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_39616[(4)]))){
var statearr_39630_39957 = state_39616;
(statearr_39630_39957[(1)] = cljs.core.first((state_39616[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39958 = state_39616;
state_39616 = G__39958;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto__ = function(state_39616){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto____1.call(this,state_39616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto__;
})()
})();
var state__27981__auto__ = (function (){var statearr_39634 = f__27980__auto__();
(statearr_39634[(6)] = c__27979__auto__);

return statearr_39634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
}));

return c__27979__auto__;
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http-put-dispatch","http-put-dispatch",-484936711),kdlyticsgui.mount.http_put_dispatch);
kdlyticsgui.mount.simple_http_get_events = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-naked-positions","get-naked-positions",851863850),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"naked-position-transit-array",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"naked-positions","naked-positions",-1170378384),new cljs.core.Keyword(null,"mounting-modal","mounting-modal",-1411315623),true], null)], null);
kdlyticsgui.mount.simple_http_assets = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472),new cljs.core.Keyword(null,"namespace","namespace",-377510372),"common.static",new cljs.core.Keyword(null,"asset","asset",-280274466),"portfolios",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null)], null)], null);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions-summary","get-positions-summary",1710688354),(function (p__39635,p__39636){
var map__39637 = p__39635;
var map__39637__$1 = cljs.core.__destructure_map(map__39637);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39637__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__39638 = p__39636;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39638,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"positions-summary"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-summary","positions-summary",-17081762)], null)], null)], null);
}));

//# sourceMappingURL=kdlyticsgui.mount.js.map
