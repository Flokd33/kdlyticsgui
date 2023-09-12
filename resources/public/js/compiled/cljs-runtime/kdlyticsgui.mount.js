goog.provide('kdlyticsgui.mount');
kdlyticsgui.mount.default_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"positions-characteristics","positions-characteristics",-170272672),new cljs.core.Keyword(null,"positions-strategy-exposure","positions-strategy-exposure",1394640320),new cljs.core.Keyword(null,"test-data","test-data",805102338),new cljs.core.Keyword("navigation","success-modal","navigation/success-modal",533446693),new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),new cljs.core.Keyword("navigation","active-section","navigation/active-section",-1272053018),new cljs.core.Keyword("price-history","show-modal","price-history/show-modal",1439463911),new cljs.core.Keyword("navigation","success-compile","navigation/success-compile",33558826),new cljs.core.Keyword(null,"rot13","rot13",-631596017),new cljs.core.Keyword("price-history","data","price-history/data",1268424495),new cljs.core.Keyword("navigation","active-view-cellar","navigation/active-view-cellar",-1146180625),new cljs.core.Keyword("navigation","active-view-vault","navigation/active-view-vault",-1235342702),new cljs.core.Keyword(null,"cellar-summary","cellar-summary",271980210),new cljs.core.Keyword("navigation","active-view-wealth","navigation/active-view-wealth",-1986836686),new cljs.core.Keyword("navigation","active-view-tools","navigation/active-view-tools",-2036856651),new cljs.core.Keyword("navigation","active-view-positions","navigation/active-view-positions",1459188376),new cljs.core.Keyword(null,"wealth-summary","wealth-summary",-699570376),new cljs.core.Keyword("price-history","name","price-history/name",-1535942599),new cljs.core.Keyword("price-history","ticker","price-history/ticker",1464015546),new cljs.core.Keyword(null,"vault-summary","vault-summary",-407259781),new cljs.core.Keyword(null,"positions-top10","positions-top10",-1668533732),new cljs.core.Keyword("price-history","show-throbber","price-history/show-throbber",-2145949059),new cljs.core.Keyword(null,"dummy","dummy",2059765854),new cljs.core.Keyword(null,"positions-summary","positions-summary",-17081762)],[cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show","show",-576705889),false,new cljs.core.Keyword(null,"on-close","on-close",-761178394),null,new cljs.core.Keyword(null,"response","response",-1068424192),null], null),false,new cljs.core.Keyword(null,"entry","entry",505168823),false,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show","show",-576705889),false,new cljs.core.Keyword(null,"on-close","on-close",-761178394),null,new cljs.core.Keyword(null,"response","response",-1068424192),null], null),false,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.Keyword(null,"inventory","inventory",860201871),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"scrapping","scrapping",-1589708187),new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.PersistentVector.EMPTY,null,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,false,null,cljs.core.PersistentVector.EMPTY]);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kdlyticsgui.mount","initialize-db","kdlyticsgui.mount/initialize-db",-798563823),(function (_,___$1){
return kdlyticsgui.mount.default_db;
}));
var seq__34446_35659 = cljs.core.seq(cljs.core.keys(kdlyticsgui.mount.default_db));
var chunk__34447_35660 = null;
var count__34448_35661 = (0);
var i__34449_35662 = (0);
while(true){
if((i__34449_35662 < count__34448_35661)){
var k_35663 = chunk__34447_35660.cljs$core$IIndexed$_nth$arity$2(null,i__34449_35662);
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(k_35663,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (seq__34446_35659,chunk__34447_35660,count__34448_35661,i__34449_35662,k_35663){
return (function (db){
return (k_35663.cljs$core$IFn$_invoke$arity$1 ? k_35663.cljs$core$IFn$_invoke$arity$1(db) : k_35663.call(null,db));
});})(seq__34446_35659,chunk__34447_35660,count__34448_35661,i__34449_35662,k_35663))
], 0));


var G__35664 = seq__34446_35659;
var G__35665 = chunk__34447_35660;
var G__35666 = count__34448_35661;
var G__35667 = (i__34449_35662 + (1));
seq__34446_35659 = G__35664;
chunk__34447_35660 = G__35665;
count__34448_35661 = G__35666;
i__34449_35662 = G__35667;
continue;
} else {
var temp__5804__auto___35668 = cljs.core.seq(seq__34446_35659);
if(temp__5804__auto___35668){
var seq__34446_35669__$1 = temp__5804__auto___35668;
if(cljs.core.chunked_seq_QMARK_(seq__34446_35669__$1)){
var c__5568__auto___35670 = cljs.core.chunk_first(seq__34446_35669__$1);
var G__35671 = cljs.core.chunk_rest(seq__34446_35669__$1);
var G__35672 = c__5568__auto___35670;
var G__35673 = cljs.core.count(c__5568__auto___35670);
var G__35674 = (0);
seq__34446_35659 = G__35671;
chunk__34447_35660 = G__35672;
count__34448_35661 = G__35673;
i__34449_35662 = G__35674;
continue;
} else {
var k_35675 = cljs.core.first(seq__34446_35669__$1);
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(k_35675,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (seq__34446_35659,chunk__34447_35660,count__34448_35661,i__34449_35662,k_35675,seq__34446_35669__$1,temp__5804__auto___35668){
return (function (db){
return (k_35675.cljs$core$IFn$_invoke$arity$1 ? k_35675.cljs$core$IFn$_invoke$arity$1(db) : k_35675.call(null,db));
});})(seq__34446_35659,chunk__34447_35660,count__34448_35661,i__34449_35662,k_35675,seq__34446_35669__$1,temp__5804__auto___35668))
], 0));


var G__35676 = cljs.core.next(seq__34446_35669__$1);
var G__35677 = null;
var G__35678 = (0);
var G__35679 = (0);
seq__34446_35659 = G__35676;
chunk__34447_35660 = G__35677;
count__34448_35661 = G__35678;
i__34449_35662 = G__35679;
continue;
}
} else {
}
}
break;
}
var seq__34467_35680 = cljs.core.seq(new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rot13","rot13",-631596017),new cljs.core.Keyword(null,"test-data","test-data",805102338),new cljs.core.Keyword("navigation","active-section","navigation/active-section",-1272053018),new cljs.core.Keyword("navigation","active-view-wealth","navigation/active-view-wealth",-1986836686),new cljs.core.Keyword("navigation","active-view-positions","navigation/active-view-positions",1459188376),new cljs.core.Keyword("navigation","active-view-vault","navigation/active-view-vault",-1235342702),new cljs.core.Keyword("navigation","active-view-cellar","navigation/active-view-cellar",-1146180625),new cljs.core.Keyword("navigation","active-view-tools","navigation/active-view-tools",-2036856651),new cljs.core.Keyword(null,"wealth-summary","wealth-summary",-699570376),new cljs.core.Keyword(null,"positions-summary","positions-summary",-17081762),new cljs.core.Keyword(null,"positions-top10","positions-top10",-1668533732),new cljs.core.Keyword(null,"positions-characteristics","positions-characteristics",-170272672),new cljs.core.Keyword(null,"positions-strategy-exposure","positions-strategy-exposure",1394640320),new cljs.core.Keyword(null,"cellar-summary","cellar-summary",271980210),new cljs.core.Keyword(null,"vault-summary","vault-summary",-407259781),new cljs.core.Keyword("price-history","data","price-history/data",1268424495),new cljs.core.Keyword("price-history","ticker","price-history/ticker",1464015546),new cljs.core.Keyword("price-history","name","price-history/name",-1535942599),new cljs.core.Keyword("price-history","show-modal","price-history/show-modal",1439463911),new cljs.core.Keyword("price-history","show-throbber","price-history/show-throbber",-2145949059),new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254)], null));
var chunk__34468_35681 = null;
var count__34469_35682 = (0);
var i__34470_35683 = (0);
while(true){
if((i__34470_35683 < count__34469_35682)){
var k_35684 = chunk__34468_35681.cljs$core$IIndexed$_nth$arity$2(null,i__34470_35683);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_35684,((function (seq__34467_35680,chunk__34468_35681,count__34469_35682,i__34470_35683,k_35684){
return (function (db,p__34483){
var vec__34484 = p__34483;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34484,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34484,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_35684,data);
});})(seq__34467_35680,chunk__34468_35681,count__34469_35682,i__34470_35683,k_35684))
);


var G__35685 = seq__34467_35680;
var G__35686 = chunk__34468_35681;
var G__35687 = count__34469_35682;
var G__35688 = (i__34470_35683 + (1));
seq__34467_35680 = G__35685;
chunk__34468_35681 = G__35686;
count__34469_35682 = G__35687;
i__34470_35683 = G__35688;
continue;
} else {
var temp__5804__auto___35689 = cljs.core.seq(seq__34467_35680);
if(temp__5804__auto___35689){
var seq__34467_35690__$1 = temp__5804__auto___35689;
if(cljs.core.chunked_seq_QMARK_(seq__34467_35690__$1)){
var c__5568__auto___35691 = cljs.core.chunk_first(seq__34467_35690__$1);
var G__35692 = cljs.core.chunk_rest(seq__34467_35690__$1);
var G__35693 = c__5568__auto___35691;
var G__35694 = cljs.core.count(c__5568__auto___35691);
var G__35695 = (0);
seq__34467_35680 = G__35692;
chunk__34468_35681 = G__35693;
count__34469_35682 = G__35694;
i__34470_35683 = G__35695;
continue;
} else {
var k_35696 = cljs.core.first(seq__34467_35690__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_35696,((function (seq__34467_35680,chunk__34468_35681,count__34469_35682,i__34470_35683,k_35696,seq__34467_35690__$1,temp__5804__auto___35689){
return (function (db,p__34489){
var vec__34490 = p__34489;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34490,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34490,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_35696,data);
});})(seq__34467_35680,chunk__34468_35681,count__34469_35682,i__34470_35683,k_35696,seq__34467_35690__$1,temp__5804__auto___35689))
);


var G__35697 = cljs.core.next(seq__34467_35690__$1);
var G__35698 = null;
var G__35699 = (0);
var G__35700 = (0);
seq__34467_35680 = G__35697;
chunk__34468_35681 = G__35698;
count__34469_35682 = G__35699;
i__34470_35683 = G__35700;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("navigation","active","navigation/active",-1285216),(function (db,p__34494){
var vec__34495 = p__34494;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34495,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34495,(1),null);
var sub_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34495,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","active","navigation/active",-1285216),page], null),sub_page);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"instruments","instruments",-69874543),(function (p__34500,p__34501){
var map__34505 = p__34500;
var map__34505__$1 = cljs.core.__destructure_map(map__34505);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34505__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34506 = p__34501;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34506,(0),null);
var instruments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34506,(1),null);
var positions = (cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(db),cljs.core.PersistentVector.EMPTY);
if(and__5043__auto__){
return new cljs.core.Keyword(null,"naked-positions","naked-positions",-1170378384).cljs$core$IFn$_invoke$arity$1(db);
} else {
return and__5043__auto__;
}
})())?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__34499_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__34499_SHARP_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instruments","instruments",-69874543),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__34499_SHARP_)], null))], 0));
}),new cljs.core.Keyword(null,"naked-positions","naked-positions",-1170378384).cljs$core$IFn$_invoke$arity$1(db)):cljs.core.PersistentVector.EMPTY);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"all-instrument-ids","all-instrument-ids",-1013285519),cljs.core.keys(instruments),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"instruments","instruments",-69874543),instruments,new cljs.core.Keyword(null,"positions","positions",-1380538434),positions,new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(positions,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("implementation","live-positions","implementation/live-positions",1202101052),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function kdlyticsgui$mount$iter__34509(s__34510){
return (new cljs.core.LazySeq(null,(function (){
var s__34510__$1 = s__34510;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__34510__$1);
if(temp__5804__auto__){
var s__34510__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34510__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__34510__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__34512 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__34511 = (0);
while(true){
if((i__34511 < size__5522__auto__)){
var vec__34514 = cljs.core._nth(c__5521__auto__,i__34511);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34514,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34514,(1),null);
cljs.core.chunk_append(b__34512,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = ((function (i__34511,vec__34514,p,g,c__5521__auto__,size__5522__auto__,b__34512,s__34510__$2,temp__5804__auto__,positions,map__34505,map__34505__$1,db,vec__34506,_,instruments){
return (function kdlyticsgui$mount$iter__34509_$_iter__34517(s__34518){
return (new cljs.core.LazySeq(null,((function (i__34511,vec__34514,p,g,c__5521__auto__,size__5522__auto__,b__34512,s__34510__$2,temp__5804__auto__,positions,map__34505,map__34505__$1,db,vec__34506,_,instruments){
return (function (){
var s__34518__$1 = s__34518;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__34518__$1);
if(temp__5804__auto____$1){
var s__34518__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34518__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__34518__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__34520 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__34519 = (0);
while(true){
if((i__34519 < size__5522__auto____$1)){
var line = cljs.core._nth(c__5521__auto____$1,i__34519);
if((((!((new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line) == null)))) && ((new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line) > (0))))){
cljs.core.chunk_append(b__34520,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line)], null));

var G__35701 = (i__34519 + (1));
i__34519 = G__35701;
continue;
} else {
var G__35702 = (i__34519 + (1));
i__34519 = G__35702;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34520),kdlyticsgui$mount$iter__34509_$_iter__34517(cljs.core.chunk_rest(s__34518__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34520),null);
}
} else {
var line = cljs.core.first(s__34518__$2);
if((((!((new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line) == null)))) && ((new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line) > (0))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line)], null),kdlyticsgui$mount$iter__34509_$_iter__34517(cljs.core.rest(s__34518__$2)));
} else {
var G__35703 = cljs.core.rest(s__34518__$2);
s__34518__$1 = G__35703;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__34511,vec__34514,p,g,c__5521__auto__,size__5522__auto__,b__34512,s__34510__$2,temp__5804__auto__,positions,map__34505,map__34505__$1,db,vec__34506,_,instruments))
,null,null));
});})(i__34511,vec__34514,p,g,c__5521__auto__,size__5522__auto__,b__34512,s__34510__$2,temp__5804__auto__,positions,map__34505,map__34505__$1,db,vec__34506,_,instruments))
;
return iter__5523__auto__(g);
})())], null));

var G__35704 = (i__34511 + (1));
i__34511 = G__35704;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34512),kdlyticsgui$mount$iter__34509(cljs.core.chunk_rest(s__34510__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34512),null);
}
} else {
var vec__34531 = cljs.core.first(s__34510__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34531,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34531,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = ((function (vec__34531,p,g,s__34510__$2,temp__5804__auto__,positions,map__34505,map__34505__$1,db,vec__34506,_,instruments){
return (function kdlyticsgui$mount$iter__34509_$_iter__34534(s__34535){
return (new cljs.core.LazySeq(null,(function (){
var s__34535__$1 = s__34535;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__34535__$1);
if(temp__5804__auto____$1){
var s__34535__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34535__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__34535__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__34537 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__34536 = (0);
while(true){
if((i__34536 < size__5522__auto__)){
var line = cljs.core._nth(c__5521__auto__,i__34536);
if((((!((new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line) == null)))) && ((new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line) > (0))))){
cljs.core.chunk_append(b__34537,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line)], null));

var G__35705 = (i__34536 + (1));
i__34536 = G__35705;
continue;
} else {
var G__35706 = (i__34536 + (1));
i__34536 = G__35706;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34537),kdlyticsgui$mount$iter__34509_$_iter__34534(cljs.core.chunk_rest(s__34535__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34537),null);
}
} else {
var line = cljs.core.first(s__34535__$2);
if((((!((new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line) == null)))) && ((new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line) > (0))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isin","isin",-1197420747).cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(line)], null),kdlyticsgui$mount$iter__34509_$_iter__34534(cljs.core.rest(s__34535__$2)));
} else {
var G__35707 = cljs.core.rest(s__34535__$2);
s__34535__$1 = G__35707;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__34531,p,g,s__34510__$2,temp__5804__auto__,positions,map__34505,map__34505__$1,db,vec__34506,_,instruments))
;
return iter__5523__auto__(g);
})())], null),kdlyticsgui$mount$iter__34509(cljs.core.rest(s__34510__$2)));
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
var seq__34542_35708 = cljs.core.seq(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267),new cljs.core.Keyword("multiple-portfolio-attribution","filter","multiple-portfolio-attribution/filter",760871219),new cljs.core.Keyword("portfolio-history","filter","portfolio-history/filter",1821014145),new cljs.core.Keyword("attribution-history","filter","attribution-history/filter",-868840340)], null));
var chunk__34543_35709 = null;
var count__34544_35710 = (0);
var i__34545_35711 = (0);
while(true){
if((i__34545_35711 < count__34544_35710)){
var k_35712 = chunk__34543_35709.cljs$core$IIndexed$_nth$arity$2(null,i__34545_35711);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_35712,((function (seq__34542_35708,chunk__34543_35709,count__34544_35710,i__34545_35711,k_35712){
return (function (db,p__34559){
var vec__34560 = p__34559;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34560,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34560,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34560,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_35712,id], null),f);
});})(seq__34542_35708,chunk__34543_35709,count__34544_35710,i__34545_35711,k_35712))
);


var G__35713 = seq__34542_35708;
var G__35714 = chunk__34543_35709;
var G__35715 = count__34544_35710;
var G__35716 = (i__34545_35711 + (1));
seq__34542_35708 = G__35713;
chunk__34543_35709 = G__35714;
count__34544_35710 = G__35715;
i__34545_35711 = G__35716;
continue;
} else {
var temp__5804__auto___35717 = cljs.core.seq(seq__34542_35708);
if(temp__5804__auto___35717){
var seq__34542_35718__$1 = temp__5804__auto___35717;
if(cljs.core.chunked_seq_QMARK_(seq__34542_35718__$1)){
var c__5568__auto___35719 = cljs.core.chunk_first(seq__34542_35718__$1);
var G__35720 = cljs.core.chunk_rest(seq__34542_35718__$1);
var G__35721 = c__5568__auto___35719;
var G__35722 = cljs.core.count(c__5568__auto___35719);
var G__35723 = (0);
seq__34542_35708 = G__35720;
chunk__34543_35709 = G__35721;
count__34544_35710 = G__35722;
i__34545_35711 = G__35723;
continue;
} else {
var k_35724 = cljs.core.first(seq__34542_35718__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_35724,((function (seq__34542_35708,chunk__34543_35709,count__34544_35710,i__34545_35711,k_35724,seq__34542_35718__$1,temp__5804__auto___35717){
return (function (db,p__34563){
var vec__34564 = p__34563;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34564,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34564,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34564,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_35724,id], null),f);
});})(seq__34542_35708,chunk__34543_35709,count__34544_35710,i__34545_35711,k_35724,seq__34542_35718__$1,temp__5804__auto___35717))
);


var G__35725 = cljs.core.next(seq__34542_35718__$1);
var G__35726 = null;
var G__35727 = (0);
var G__35728 = (0);
seq__34542_35708 = G__35725;
chunk__34543_35709 = G__35726;
count__34544_35710 = G__35727;
i__34545_35711 = G__35728;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),(function (db,p__34569){
var vec__34570 = p__34569;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34570,(0),null);
var qt_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34570,(1),null);
var dt = qt_date.replace("\"","");
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),dt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("portfolio-history","end-period","portfolio-history/end-period",1624676397),kdlyticsgui.tools.gdate__GT_yyyyMMdd(kdlyticsgui.tools.ddMMMyyyy__GT_gdate(dt))], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),(function (db,p__34573){
var vec__34574 = p__34573;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34574,(0),null);
var attribution_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34574,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"attribution-date","attribution-date",1619846503),attribution_date.replace("\"",""));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),(function (db,p__34577){
var vec__34578 = p__34577;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34578,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34578,(1),null);
var G__34581 = snapshot;
switch (G__34581) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34581)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),(function (db,p__34584){
var vec__34585 = p__34584;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34585,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34585,(1),null);
var G__34588 = snapshot;
switch (G__34588) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34588)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("portfolio-alignment","shortcut","portfolio-alignment/shortcut",-1561132143),(function (db,p__34589){
var vec__34590 = p__34589;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34590,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34590,(1),null);
var G__34594 = snapshot;
switch (G__34594) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34594)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cycle-shortcut","cycle-shortcut",-1617058214),(function (db,p__34602){
var vec__34603 = p__34602;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34603,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34603,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34603,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword("navigation","active-view","navigation/active-view",800211184).cljs$core$IFn$_invoke$arity$1(db)),"-risk/shortcut"].join(''));
var shortcut_value = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
if((shortcut_value < (4))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(shortcut_value + (1)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,(1));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tree-table","tree-table",-1263002012),(function (db,p__34613){
var vec__34614 = p__34613;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34614,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34614,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34614,(2),null);
var shortcut_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword("navigation","active-view","navigation/active-view",800211184).cljs$core$IFn$_invoke$arity$1(db)),"-risk/display-style"].join(''));
var G__34617 = (shortcut_key.cljs$core$IFn$_invoke$arity$1 ? shortcut_key.cljs$core$IFn$_invoke$arity$1(db) : shortcut_key.call(null,db));
switch (G__34617) {
case "Tree":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Table");

break;
case "Table":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,shortcut_key,"Tree");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34617)].join('')));

}
}));
/**
 * if response header is application/json keys will get keywordized automatically - otherwise send as text/plain
 */
kdlyticsgui.mount.http_get_dispatch = (function kdlyticsgui$mount$http_get_dispatch(request){
var vr = ((cljs.core.vector_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__34618 = cljs.core.seq(vr);
var chunk__34619 = null;
var count__34620 = (0);
var i__34621 = (0);
while(true){
if((i__34621 < count__34620)){
var r = chunk__34619.cljs$core$IIndexed$_nth$arity$2(null,i__34621);
var c__27979__auto___35733 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__34618,chunk__34619,count__34620,i__34621,c__27979__auto___35733,r,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__34618,chunk__34619,count__34620,i__34621,c__27979__auto___35733,r,vr){
return (function (state_34766){
var state_val_34767 = (state_34766[(1)]);
if((state_val_34767 === (1))){
var inst_34746 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_34747 = cljs_http.client.get(inst_34746);
var state_34766__$1 = state_34766;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34766__$1,(2),inst_34747);
} else {
if((state_val_34767 === (2))){
var inst_34749 = (state_34766[(2)]);
var inst_34750 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_34751 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_34749);
var inst_34752 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_34750,inst_34751);
var inst_34753 = re_frame.core.dispatch(inst_34752);
var inst_34754 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_34766__$1 = (function (){var statearr_34768 = state_34766;
(statearr_34768[(7)] = inst_34753);

return statearr_34768;
})();
if(cljs.core.truth_(inst_34754)){
var statearr_34769_35734 = state_34766__$1;
(statearr_34769_35734[(1)] = (3));

} else {
var statearr_34770_35735 = state_34766__$1;
(statearr_34770_35735[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (3))){
var inst_34756 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34757 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_34758 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_34759 = [inst_34757,inst_34758];
var inst_34760 = (new cljs.core.PersistentVector(null,2,(5),inst_34756,inst_34759,null));
var inst_34761 = re_frame.core.dispatch(inst_34760);
var state_34766__$1 = state_34766;
var statearr_34771_35736 = state_34766__$1;
(statearr_34771_35736[(2)] = inst_34761);

(statearr_34771_35736[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (4))){
var state_34766__$1 = state_34766;
var statearr_34772_35737 = state_34766__$1;
(statearr_34772_35737[(2)] = null);

(statearr_34772_35737[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (5))){
var inst_34764 = (state_34766[(2)]);
var state_34766__$1 = state_34766;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34766__$1,inst_34764);
} else {
return null;
}
}
}
}
}
});})(seq__34618,chunk__34619,count__34620,i__34621,c__27979__auto___35733,r,vr))
;
return ((function (seq__34618,chunk__34619,count__34620,i__34621,switch__27909__auto__,c__27979__auto___35733,r,vr){
return (function() {
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____0 = (function (){
var statearr_34773 = [null,null,null,null,null,null,null,null];
(statearr_34773[(0)] = kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__);

(statearr_34773[(1)] = (1));

return statearr_34773;
});
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____1 = (function (state_34766){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_34766);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e34776){var ex__27913__auto__ = e34776;
var statearr_34777_35738 = state_34766;
(statearr_34777_35738[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_34766[(4)]))){
var statearr_34778_35739 = state_34766;
(statearr_34778_35739[(1)] = cljs.core.first((state_34766[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35740 = state_34766;
state_34766 = G__35740;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__ = function(state_34766){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____1.call(this,state_34766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__;
})()
;})(seq__34618,chunk__34619,count__34620,i__34621,switch__27909__auto__,c__27979__auto___35733,r,vr))
})();
var state__27981__auto__ = (function (){var statearr_34779 = f__27980__auto__();
(statearr_34779[(6)] = c__27979__auto___35733);

return statearr_34779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__34618,chunk__34619,count__34620,i__34621,c__27979__auto___35733,r,vr))
);



var G__35741 = seq__34618;
var G__35742 = chunk__34619;
var G__35743 = count__34620;
var G__35744 = (i__34621 + (1));
seq__34618 = G__35741;
chunk__34619 = G__35742;
count__34620 = G__35743;
i__34621 = G__35744;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34618);
if(temp__5804__auto__){
var seq__34618__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34618__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34618__$1);
var G__35745 = cljs.core.chunk_rest(seq__34618__$1);
var G__35746 = c__5568__auto__;
var G__35747 = cljs.core.count(c__5568__auto__);
var G__35748 = (0);
seq__34618 = G__35745;
chunk__34619 = G__35746;
count__34620 = G__35747;
i__34621 = G__35748;
continue;
} else {
var r = cljs.core.first(seq__34618__$1);
var c__27979__auto___35749 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__34618,chunk__34619,count__34620,i__34621,c__27979__auto___35749,r,seq__34618__$1,temp__5804__auto__,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__34618,chunk__34619,count__34620,i__34621,c__27979__auto___35749,r,seq__34618__$1,temp__5804__auto__,vr){
return (function (state_34804){
var state_val_34805 = (state_34804[(1)]);
if((state_val_34805 === (1))){
var inst_34783 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_34784 = cljs_http.client.get(inst_34783);
var state_34804__$1 = state_34804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34804__$1,(2),inst_34784);
} else {
if((state_val_34805 === (2))){
var inst_34786 = (state_34804[(2)]);
var inst_34787 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_34788 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_34786);
var inst_34789 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_34787,inst_34788);
var inst_34790 = re_frame.core.dispatch(inst_34789);
var inst_34791 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_34804__$1 = (function (){var statearr_34819 = state_34804;
(statearr_34819[(7)] = inst_34790);

return statearr_34819;
})();
if(cljs.core.truth_(inst_34791)){
var statearr_34820_35750 = state_34804__$1;
(statearr_34820_35750[(1)] = (3));

} else {
var statearr_34821_35751 = state_34804__$1;
(statearr_34821_35751[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34805 === (3))){
var inst_34794 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34795 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_34796 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_34797 = [inst_34795,inst_34796];
var inst_34798 = (new cljs.core.PersistentVector(null,2,(5),inst_34794,inst_34797,null));
var inst_34799 = re_frame.core.dispatch(inst_34798);
var state_34804__$1 = state_34804;
var statearr_34822_35752 = state_34804__$1;
(statearr_34822_35752[(2)] = inst_34799);

(statearr_34822_35752[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34805 === (4))){
var state_34804__$1 = state_34804;
var statearr_34825_35753 = state_34804__$1;
(statearr_34825_35753[(2)] = null);

(statearr_34825_35753[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34805 === (5))){
var inst_34802 = (state_34804[(2)]);
var state_34804__$1 = state_34804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34804__$1,inst_34802);
} else {
return null;
}
}
}
}
}
});})(seq__34618,chunk__34619,count__34620,i__34621,c__27979__auto___35749,r,seq__34618__$1,temp__5804__auto__,vr))
;
return ((function (seq__34618,chunk__34619,count__34620,i__34621,switch__27909__auto__,c__27979__auto___35749,r,seq__34618__$1,temp__5804__auto__,vr){
return (function() {
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____0 = (function (){
var statearr_34826 = [null,null,null,null,null,null,null,null];
(statearr_34826[(0)] = kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__);

(statearr_34826[(1)] = (1));

return statearr_34826;
});
var kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____1 = (function (state_34804){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_34804);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e34829){var ex__27913__auto__ = e34829;
var statearr_34830_35754 = state_34804;
(statearr_34830_35754[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_34804[(4)]))){
var statearr_34833_35755 = state_34804;
(statearr_34833_35755[(1)] = cljs.core.first((state_34804[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35756 = state_34804;
state_34804 = G__35756;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__ = function(state_34804){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____1.call(this,state_34804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_get_dispatch_$_state_machine__27910__auto__;
})()
;})(seq__34618,chunk__34619,count__34620,i__34621,switch__27909__auto__,c__27979__auto___35749,r,seq__34618__$1,temp__5804__auto__,vr))
})();
var state__27981__auto__ = (function (){var statearr_34834 = f__27980__auto__();
(statearr_34834[(6)] = c__27979__auto___35749);

return statearr_34834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__34618,chunk__34619,count__34620,i__34621,c__27979__auto___35749,r,seq__34618__$1,temp__5804__auto__,vr))
);



var G__35757 = cljs.core.next(seq__34618__$1);
var G__35758 = null;
var G__35759 = (0);
var G__35760 = (0);
seq__34618 = G__35757;
chunk__34619 = G__35758;
count__34620 = G__35759;
i__34621 = G__35760;
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
var seq__34840 = cljs.core.seq(vr);
var chunk__34841 = null;
var count__34842 = (0);
var i__34843 = (0);
while(true){
if((i__34843 < count__34842)){
var r = chunk__34841.cljs$core$IIndexed$_nth$arity$2(null,i__34843);
var c__27979__auto___35761 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__34840,chunk__34841,count__34842,i__34843,c__27979__auto___35761,r,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__34840,chunk__34841,count__34842,i__34843,c__27979__auto___35761,r,vr){
return (function (state_34982){
var state_val_34983 = (state_34982[(1)]);
if((state_val_34983 === (1))){
var inst_34957 = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(request);
var inst_34958 = new cljs.core.Keyword(null,"asset","asset",-280274466).cljs$core$IFn$_invoke$arity$1(request);
var inst_34959 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"asset?namespace=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34957),"&asset=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34958)].join('');
var inst_34960 = cljs_http.client.get(inst_34959);
var state_34982__$1 = state_34982;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34982__$1,(2),inst_34960);
} else {
if((state_val_34983 === (2))){
var inst_34962 = (state_34982[(2)]);
var inst_34963 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_34964 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_34962);
var inst_34965 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_34963,inst_34964);
var inst_34966 = re_frame.core.dispatch(inst_34965);
var inst_34967 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_34982__$1 = (function (){var statearr_34987 = state_34982;
(statearr_34987[(7)] = inst_34966);

return statearr_34987;
})();
if(cljs.core.truth_(inst_34967)){
var statearr_34988_35762 = state_34982__$1;
(statearr_34988_35762[(1)] = (3));

} else {
var statearr_34989_35763 = state_34982__$1;
(statearr_34989_35763[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (3))){
var inst_34970 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34971 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_34972 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_34973 = [inst_34971,inst_34972];
var inst_34974 = (new cljs.core.PersistentVector(null,2,(5),inst_34970,inst_34973,null));
var inst_34975 = re_frame.core.dispatch(inst_34974);
var state_34982__$1 = state_34982;
var statearr_34990_35764 = state_34982__$1;
(statearr_34990_35764[(2)] = inst_34975);

(statearr_34990_35764[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (4))){
var state_34982__$1 = state_34982;
var statearr_34992_35765 = state_34982__$1;
(statearr_34992_35765[(2)] = null);

(statearr_34992_35765[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (5))){
var inst_34978 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34982__$1,inst_34978);
} else {
return null;
}
}
}
}
}
});})(seq__34840,chunk__34841,count__34842,i__34843,c__27979__auto___35761,r,vr))
;
return ((function (seq__34840,chunk__34841,count__34842,i__34843,switch__27909__auto__,c__27979__auto___35761,r,vr){
return (function() {
var kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____0 = (function (){
var statearr_34994 = [null,null,null,null,null,null,null,null];
(statearr_34994[(0)] = kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__);

(statearr_34994[(1)] = (1));

return statearr_34994;
});
var kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____1 = (function (state_34982){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_34982);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e34995){var ex__27913__auto__ = e34995;
var statearr_34996_35766 = state_34982;
(statearr_34996_35766[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_34982[(4)]))){
var statearr_34997_35767 = state_34982;
(statearr_34997_35767[(1)] = cljs.core.first((state_34982[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35768 = state_34982;
state_34982 = G__35768;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__ = function(state_34982){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____1.call(this,state_34982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__;
})()
;})(seq__34840,chunk__34841,count__34842,i__34843,switch__27909__auto__,c__27979__auto___35761,r,vr))
})();
var state__27981__auto__ = (function (){var statearr_35000 = f__27980__auto__();
(statearr_35000[(6)] = c__27979__auto___35761);

return statearr_35000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__34840,chunk__34841,count__34842,i__34843,c__27979__auto___35761,r,vr))
);



var G__35769 = seq__34840;
var G__35770 = chunk__34841;
var G__35771 = count__34842;
var G__35772 = (i__34843 + (1));
seq__34840 = G__35769;
chunk__34841 = G__35770;
count__34842 = G__35771;
i__34843 = G__35772;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34840);
if(temp__5804__auto__){
var seq__34840__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34840__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34840__$1);
var G__35773 = cljs.core.chunk_rest(seq__34840__$1);
var G__35774 = c__5568__auto__;
var G__35775 = cljs.core.count(c__5568__auto__);
var G__35776 = (0);
seq__34840 = G__35773;
chunk__34841 = G__35774;
count__34842 = G__35775;
i__34843 = G__35776;
continue;
} else {
var r = cljs.core.first(seq__34840__$1);
var c__27979__auto___35777 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__34840,chunk__34841,count__34842,i__34843,c__27979__auto___35777,r,seq__34840__$1,temp__5804__auto__,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__34840,chunk__34841,count__34842,i__34843,c__27979__auto___35777,r,seq__34840__$1,temp__5804__auto__,vr){
return (function (state_35027){
var state_val_35028 = (state_35027[(1)]);
if((state_val_35028 === (1))){
var inst_35002 = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(request);
var inst_35003 = new cljs.core.Keyword(null,"asset","asset",-280274466).cljs$core$IFn$_invoke$arity$1(request);
var inst_35004 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"asset?namespace=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35002),"&asset=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35003)].join('');
var inst_35005 = cljs_http.client.get(inst_35004);
var state_35027__$1 = state_35027;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35027__$1,(2),inst_35005);
} else {
if((state_val_35028 === (2))){
var inst_35007 = (state_35027[(2)]);
var inst_35008 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_35010 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_35007);
var inst_35011 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_35008,inst_35010);
var inst_35012 = re_frame.core.dispatch(inst_35011);
var inst_35013 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_35027__$1 = (function (){var statearr_35030 = state_35027;
(statearr_35030[(7)] = inst_35012);

return statearr_35030;
})();
if(cljs.core.truth_(inst_35013)){
var statearr_35031_35778 = state_35027__$1;
(statearr_35031_35778[(1)] = (3));

} else {
var statearr_35032_35779 = state_35027__$1;
(statearr_35032_35779[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35028 === (3))){
var inst_35016 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35017 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_35018 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_35019 = [inst_35017,inst_35018];
var inst_35020 = (new cljs.core.PersistentVector(null,2,(5),inst_35016,inst_35019,null));
var inst_35021 = re_frame.core.dispatch(inst_35020);
var state_35027__$1 = state_35027;
var statearr_35037_35780 = state_35027__$1;
(statearr_35037_35780[(2)] = inst_35021);

(statearr_35037_35780[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35028 === (4))){
var state_35027__$1 = state_35027;
var statearr_35038_35781 = state_35027__$1;
(statearr_35038_35781[(2)] = null);

(statearr_35038_35781[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35028 === (5))){
var inst_35024 = (state_35027[(2)]);
var state_35027__$1 = state_35027;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35027__$1,inst_35024);
} else {
return null;
}
}
}
}
}
});})(seq__34840,chunk__34841,count__34842,i__34843,c__27979__auto___35777,r,seq__34840__$1,temp__5804__auto__,vr))
;
return ((function (seq__34840,chunk__34841,count__34842,i__34843,switch__27909__auto__,c__27979__auto___35777,r,seq__34840__$1,temp__5804__auto__,vr){
return (function() {
var kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____0 = (function (){
var statearr_35040 = [null,null,null,null,null,null,null,null];
(statearr_35040[(0)] = kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__);

(statearr_35040[(1)] = (1));

return statearr_35040;
});
var kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____1 = (function (state_35027){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_35027);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e35042){var ex__27913__auto__ = e35042;
var statearr_35043_35782 = state_35027;
(statearr_35043_35782[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_35027[(4)]))){
var statearr_35044_35783 = state_35027;
(statearr_35044_35783[(1)] = cljs.core.first((state_35027[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35784 = state_35027;
state_35027 = G__35784;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__ = function(state_35027){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____1.call(this,state_35027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_get_asset_$_state_machine__27910__auto__;
})()
;})(seq__34840,chunk__34841,count__34842,i__34843,switch__27909__auto__,c__27979__auto___35777,r,seq__34840__$1,temp__5804__auto__,vr))
})();
var state__27981__auto__ = (function (){var statearr_35049 = f__27980__auto__();
(statearr_35049[(6)] = c__27979__auto___35777);

return statearr_35049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__34840,chunk__34841,count__34842,i__34843,c__27979__auto___35777,r,seq__34840__$1,temp__5804__auto__,vr))
);



var G__35785 = cljs.core.next(seq__34840__$1);
var G__35786 = null;
var G__35787 = (0);
var G__35788 = (0);
seq__34840 = G__35785;
chunk__34841 = G__35786;
count__34842 = G__35787;
i__34843 = G__35788;
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
var seq__35071 = cljs.core.seq(vr);
var chunk__35072 = null;
var count__35073 = (0);
var i__35074 = (0);
while(true){
if((i__35074 < count__35073)){
var r = chunk__35072.cljs$core$IIndexed$_nth$arity$2(null,i__35074);
var c__27979__auto___35789 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__35071,chunk__35072,count__35073,i__35074,c__27979__auto___35789,r,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__35071,chunk__35072,count__35073,i__35074,c__27979__auto___35789,r,vr){
return (function (state_35239){
var state_val_35240 = (state_35239[(1)]);
if((state_val_35240 === (1))){
var inst_35206 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_35207 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var state_35239__$1 = (function (){var statearr_35242 = state_35239;
(statearr_35242[(7)] = inst_35206);

return statearr_35242;
})();
if(cljs.core.truth_(inst_35207)){
var statearr_35243_35790 = state_35239__$1;
(statearr_35243_35790[(1)] = (3));

} else {
var statearr_35244_35791 = state_35239__$1;
(statearr_35244_35791[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35240 === (2))){
var inst_35222 = (state_35239[(2)]);
var inst_35223 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_35224 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_35222);
var inst_35225 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_35223,inst_35224);
var inst_35226 = re_frame.core.dispatch(inst_35225);
var inst_35227 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_35239__$1 = (function (){var statearr_35245 = state_35239;
(statearr_35245[(8)] = inst_35226);

return statearr_35245;
})();
if(cljs.core.truth_(inst_35227)){
var statearr_35246_35792 = state_35239__$1;
(statearr_35246_35792[(1)] = (6));

} else {
var statearr_35249_35793 = state_35239__$1;
(statearr_35249_35793[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35240 === (3))){
var inst_35209 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_35210 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var inst_35211 = [inst_35210];
var inst_35212 = cljs.core.PersistentHashMap.fromArrays(inst_35209,inst_35211);
var state_35239__$1 = state_35239;
var statearr_35250_35794 = state_35239__$1;
(statearr_35250_35794[(2)] = inst_35212);

(statearr_35250_35794[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35240 === (4))){
var inst_35214 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_35215 = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(r);
var inst_35216 = [inst_35215];
var inst_35217 = cljs.core.PersistentHashMap.fromArrays(inst_35214,inst_35216);
var state_35239__$1 = state_35239;
var statearr_35251_35795 = state_35239__$1;
(statearr_35251_35795[(2)] = inst_35217);

(statearr_35251_35795[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35240 === (5))){
var inst_35206 = (state_35239[(7)]);
var inst_35219 = (state_35239[(2)]);
var inst_35220 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_35206,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_35219], 0));
var state_35239__$1 = state_35239;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35239__$1,(2),inst_35220);
} else {
if((state_val_35240 === (6))){
var inst_35229 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35230 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_35231 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_35232 = [inst_35230,inst_35231];
var inst_35233 = (new cljs.core.PersistentVector(null,2,(5),inst_35229,inst_35232,null));
var inst_35234 = re_frame.core.dispatch(inst_35233);
var state_35239__$1 = state_35239;
var statearr_35254_35796 = state_35239__$1;
(statearr_35254_35796[(2)] = inst_35234);

(statearr_35254_35796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35240 === (7))){
var state_35239__$1 = state_35239;
var statearr_35255_35797 = state_35239__$1;
(statearr_35255_35797[(2)] = null);

(statearr_35255_35797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35240 === (8))){
var inst_35237 = (state_35239[(2)]);
var state_35239__$1 = state_35239;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35239__$1,inst_35237);
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
});})(seq__35071,chunk__35072,count__35073,i__35074,c__27979__auto___35789,r,vr))
;
return ((function (seq__35071,chunk__35072,count__35073,i__35074,switch__27909__auto__,c__27979__auto___35789,r,vr){
return (function() {
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____0 = (function (){
var statearr_35256 = [null,null,null,null,null,null,null,null,null];
(statearr_35256[(0)] = kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__);

(statearr_35256[(1)] = (1));

return statearr_35256;
});
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____1 = (function (state_35239){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_35239);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e35257){var ex__27913__auto__ = e35257;
var statearr_35258_35798 = state_35239;
(statearr_35258_35798[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_35239[(4)]))){
var statearr_35259_35799 = state_35239;
(statearr_35259_35799[(1)] = cljs.core.first((state_35239[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35800 = state_35239;
state_35239 = G__35800;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__ = function(state_35239){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____1.call(this,state_35239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__;
})()
;})(seq__35071,chunk__35072,count__35073,i__35074,switch__27909__auto__,c__27979__auto___35789,r,vr))
})();
var state__27981__auto__ = (function (){var statearr_35260 = f__27980__auto__();
(statearr_35260[(6)] = c__27979__auto___35789);

return statearr_35260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__35071,chunk__35072,count__35073,i__35074,c__27979__auto___35789,r,vr))
);



var G__35801 = seq__35071;
var G__35802 = chunk__35072;
var G__35803 = count__35073;
var G__35804 = (i__35074 + (1));
seq__35071 = G__35801;
chunk__35072 = G__35802;
count__35073 = G__35803;
i__35074 = G__35804;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35071);
if(temp__5804__auto__){
var seq__35071__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35071__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35071__$1);
var G__35805 = cljs.core.chunk_rest(seq__35071__$1);
var G__35806 = c__5568__auto__;
var G__35807 = cljs.core.count(c__5568__auto__);
var G__35808 = (0);
seq__35071 = G__35805;
chunk__35072 = G__35806;
count__35073 = G__35807;
i__35074 = G__35808;
continue;
} else {
var r = cljs.core.first(seq__35071__$1);
var c__27979__auto___35809 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__35071,chunk__35072,count__35073,i__35074,c__27979__auto___35809,r,seq__35071__$1,temp__5804__auto__,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__35071,chunk__35072,count__35073,i__35074,c__27979__auto___35809,r,seq__35071__$1,temp__5804__auto__,vr){
return (function (state_35294){
var state_val_35295 = (state_35294[(1)]);
if((state_val_35295 === (1))){
var inst_35261 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_35262 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var state_35294__$1 = (function (){var statearr_35296 = state_35294;
(statearr_35296[(7)] = inst_35261);

return statearr_35296;
})();
if(cljs.core.truth_(inst_35262)){
var statearr_35297_35810 = state_35294__$1;
(statearr_35297_35810[(1)] = (3));

} else {
var statearr_35298_35811 = state_35294__$1;
(statearr_35298_35811[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35295 === (2))){
var inst_35277 = (state_35294[(2)]);
var inst_35278 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_35279 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_35277);
var inst_35280 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_35278,inst_35279);
var inst_35281 = re_frame.core.dispatch(inst_35280);
var inst_35282 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_35294__$1 = (function (){var statearr_35299 = state_35294;
(statearr_35299[(8)] = inst_35281);

return statearr_35299;
})();
if(cljs.core.truth_(inst_35282)){
var statearr_35300_35812 = state_35294__$1;
(statearr_35300_35812[(1)] = (6));

} else {
var statearr_35301_35813 = state_35294__$1;
(statearr_35301_35813[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35295 === (3))){
var inst_35264 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_35265 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var inst_35266 = [inst_35265];
var inst_35267 = cljs.core.PersistentHashMap.fromArrays(inst_35264,inst_35266);
var state_35294__$1 = state_35294;
var statearr_35302_35814 = state_35294__$1;
(statearr_35302_35814[(2)] = inst_35267);

(statearr_35302_35814[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35295 === (4))){
var inst_35269 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_35270 = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(r);
var inst_35271 = [inst_35270];
var inst_35272 = cljs.core.PersistentHashMap.fromArrays(inst_35269,inst_35271);
var state_35294__$1 = state_35294;
var statearr_35303_35815 = state_35294__$1;
(statearr_35303_35815[(2)] = inst_35272);

(statearr_35303_35815[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35295 === (5))){
var inst_35261 = (state_35294[(7)]);
var inst_35274 = (state_35294[(2)]);
var inst_35275 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_35261,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_35274], 0));
var state_35294__$1 = state_35294;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35294__$1,(2),inst_35275);
} else {
if((state_val_35295 === (6))){
var inst_35284 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35285 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_35286 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_35287 = [inst_35285,inst_35286];
var inst_35288 = (new cljs.core.PersistentVector(null,2,(5),inst_35284,inst_35287,null));
var inst_35289 = re_frame.core.dispatch(inst_35288);
var state_35294__$1 = state_35294;
var statearr_35304_35816 = state_35294__$1;
(statearr_35304_35816[(2)] = inst_35289);

(statearr_35304_35816[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35295 === (7))){
var state_35294__$1 = state_35294;
var statearr_35305_35817 = state_35294__$1;
(statearr_35305_35817[(2)] = null);

(statearr_35305_35817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35295 === (8))){
var inst_35292 = (state_35294[(2)]);
var state_35294__$1 = state_35294;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35294__$1,inst_35292);
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
});})(seq__35071,chunk__35072,count__35073,i__35074,c__27979__auto___35809,r,seq__35071__$1,temp__5804__auto__,vr))
;
return ((function (seq__35071,chunk__35072,count__35073,i__35074,switch__27909__auto__,c__27979__auto___35809,r,seq__35071__$1,temp__5804__auto__,vr){
return (function() {
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____0 = (function (){
var statearr_35306 = [null,null,null,null,null,null,null,null,null];
(statearr_35306[(0)] = kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__);

(statearr_35306[(1)] = (1));

return statearr_35306;
});
var kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____1 = (function (state_35294){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_35294);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e35307){var ex__27913__auto__ = e35307;
var statearr_35308_35818 = state_35294;
(statearr_35308_35818[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_35294[(4)]))){
var statearr_35309_35819 = state_35294;
(statearr_35309_35819[(1)] = cljs.core.first((state_35294[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35820 = state_35294;
state_35294 = G__35820;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__ = function(state_35294){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____1.call(this,state_35294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_post_dispatch_$_state_machine__27910__auto__;
})()
;})(seq__35071,chunk__35072,count__35073,i__35074,switch__27909__auto__,c__27979__auto___35809,r,seq__35071__$1,temp__5804__auto__,vr))
})();
var state__27981__auto__ = (function (){var statearr_35310 = f__27980__auto__();
(statearr_35310[(6)] = c__27979__auto___35809);

return statearr_35310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__35071,chunk__35072,count__35073,i__35074,c__27979__auto___35809,r,seq__35071__$1,temp__5804__auto__,vr))
);



var G__35821 = cljs.core.next(seq__35071__$1);
var G__35822 = null;
var G__35823 = (0);
var G__35824 = (0);
seq__35071 = G__35821;
chunk__35072 = G__35822;
count__35073 = G__35823;
i__35074 = G__35824;
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
var seq__35311 = cljs.core.seq(vr);
var chunk__35312 = null;
var count__35313 = (0);
var i__35314 = (0);
while(true){
if((i__35314 < count__35313)){
var r = chunk__35312.cljs$core$IIndexed$_nth$arity$2(null,i__35314);
var c__27979__auto___35825 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__35311,chunk__35312,count__35313,i__35314,c__27979__auto___35825,r,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__35311,chunk__35312,count__35313,i__35314,c__27979__auto___35825,r,vr){
return (function (state_35448){
var state_val_35449 = (state_35448[(1)]);
if((state_val_35449 === (1))){
var inst_35415 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_35416 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var state_35448__$1 = (function (){var statearr_35450 = state_35448;
(statearr_35450[(7)] = inst_35415);

return statearr_35450;
})();
if(cljs.core.truth_(inst_35416)){
var statearr_35451_35826 = state_35448__$1;
(statearr_35451_35826[(1)] = (3));

} else {
var statearr_35452_35827 = state_35448__$1;
(statearr_35452_35827[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (2))){
var inst_35431 = (state_35448[(2)]);
var inst_35432 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_35433 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_35431);
var inst_35434 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_35432,inst_35433);
var inst_35435 = re_frame.core.dispatch(inst_35434);
var inst_35436 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_35448__$1 = (function (){var statearr_35453 = state_35448;
(statearr_35453[(8)] = inst_35435);

return statearr_35453;
})();
if(cljs.core.truth_(inst_35436)){
var statearr_35454_35828 = state_35448__$1;
(statearr_35454_35828[(1)] = (6));

} else {
var statearr_35455_35829 = state_35448__$1;
(statearr_35455_35829[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (3))){
var inst_35418 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052),new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_35419 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var inst_35420 = [inst_35419,"application/json;charset=UTF-8"];
var inst_35421 = cljs.core.PersistentHashMap.fromArrays(inst_35418,inst_35420);
var state_35448__$1 = state_35448;
var statearr_35456_35830 = state_35448__$1;
(statearr_35456_35830[(2)] = inst_35421);

(statearr_35456_35830[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (4))){
var inst_35423 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_35424 = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(r);
var inst_35425 = [inst_35424,"application/json;charset=UTF-8"];
var inst_35426 = cljs.core.PersistentHashMap.fromArrays(inst_35423,inst_35425);
var state_35448__$1 = state_35448;
var statearr_35457_35831 = state_35448__$1;
(statearr_35457_35831[(2)] = inst_35426);

(statearr_35457_35831[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (5))){
var inst_35415 = (state_35448[(7)]);
var inst_35428 = (state_35448[(2)]);
var inst_35429 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_35415,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_35428], 0));
var state_35448__$1 = state_35448;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35448__$1,(2),inst_35429);
} else {
if((state_val_35449 === (6))){
var inst_35438 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35439 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_35440 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_35441 = [inst_35439,inst_35440];
var inst_35442 = (new cljs.core.PersistentVector(null,2,(5),inst_35438,inst_35441,null));
var inst_35443 = re_frame.core.dispatch(inst_35442);
var state_35448__$1 = state_35448;
var statearr_35458_35832 = state_35448__$1;
(statearr_35458_35832[(2)] = inst_35443);

(statearr_35458_35832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (7))){
var state_35448__$1 = state_35448;
var statearr_35459_35833 = state_35448__$1;
(statearr_35459_35833[(2)] = null);

(statearr_35459_35833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (8))){
var inst_35446 = (state_35448[(2)]);
var state_35448__$1 = state_35448;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35448__$1,inst_35446);
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
});})(seq__35311,chunk__35312,count__35313,i__35314,c__27979__auto___35825,r,vr))
;
return ((function (seq__35311,chunk__35312,count__35313,i__35314,switch__27909__auto__,c__27979__auto___35825,r,vr){
return (function() {
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____0 = (function (){
var statearr_35460 = [null,null,null,null,null,null,null,null,null];
(statearr_35460[(0)] = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__);

(statearr_35460[(1)] = (1));

return statearr_35460;
});
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____1 = (function (state_35448){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_35448);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e35461){var ex__27913__auto__ = e35461;
var statearr_35462_35834 = state_35448;
(statearr_35462_35834[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_35448[(4)]))){
var statearr_35463_35835 = state_35448;
(statearr_35463_35835[(1)] = cljs.core.first((state_35448[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35836 = state_35448;
state_35448 = G__35836;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__ = function(state_35448){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____1.call(this,state_35448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__;
})()
;})(seq__35311,chunk__35312,count__35313,i__35314,switch__27909__auto__,c__27979__auto___35825,r,vr))
})();
var state__27981__auto__ = (function (){var statearr_35464 = f__27980__auto__();
(statearr_35464[(6)] = c__27979__auto___35825);

return statearr_35464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__35311,chunk__35312,count__35313,i__35314,c__27979__auto___35825,r,vr))
);



var G__35837 = seq__35311;
var G__35838 = chunk__35312;
var G__35839 = count__35313;
var G__35840 = (i__35314 + (1));
seq__35311 = G__35837;
chunk__35312 = G__35838;
count__35313 = G__35839;
i__35314 = G__35840;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35311);
if(temp__5804__auto__){
var seq__35311__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35311__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35311__$1);
var G__35841 = cljs.core.chunk_rest(seq__35311__$1);
var G__35842 = c__5568__auto__;
var G__35843 = cljs.core.count(c__5568__auto__);
var G__35844 = (0);
seq__35311 = G__35841;
chunk__35312 = G__35842;
count__35313 = G__35843;
i__35314 = G__35844;
continue;
} else {
var r = cljs.core.first(seq__35311__$1);
var c__27979__auto___35845 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__35311,chunk__35312,count__35313,i__35314,c__27979__auto___35845,r,seq__35311__$1,temp__5804__auto__,vr){
return (function (){
var f__27980__auto__ = (function (){var switch__27909__auto__ = ((function (seq__35311,chunk__35312,count__35313,i__35314,c__27979__auto___35845,r,seq__35311__$1,temp__5804__auto__,vr){
return (function (state_35498){
var state_val_35499 = (state_35498[(1)]);
if((state_val_35499 === (1))){
var inst_35465 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r);
var inst_35466 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var state_35498__$1 = (function (){var statearr_35500 = state_35498;
(statearr_35500[(7)] = inst_35465);

return statearr_35500;
})();
if(cljs.core.truth_(inst_35466)){
var statearr_35501_35846 = state_35498__$1;
(statearr_35501_35846[(1)] = (3));

} else {
var statearr_35502_35847 = state_35498__$1;
(statearr_35502_35847[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35499 === (2))){
var inst_35481 = (state_35498[(2)]);
var inst_35482 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(r);
var inst_35483 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_35481);
var inst_35484 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_35482,inst_35483);
var inst_35485 = re_frame.core.dispatch(inst_35484);
var inst_35486 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var state_35498__$1 = (function (){var statearr_35503 = state_35498;
(statearr_35503[(8)] = inst_35485);

return statearr_35503;
})();
if(cljs.core.truth_(inst_35486)){
var statearr_35504_35848 = state_35498__$1;
(statearr_35504_35848[(1)] = (6));

} else {
var statearr_35505_35849 = state_35498__$1;
(statearr_35505_35849[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35499 === (3))){
var inst_35468 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052),new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_35469 = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(r);
var inst_35470 = [inst_35469,"application/json;charset=UTF-8"];
var inst_35471 = cljs.core.PersistentHashMap.fromArrays(inst_35468,inst_35470);
var state_35498__$1 = state_35498;
var statearr_35506_35850 = state_35498__$1;
(statearr_35506_35850[(2)] = inst_35471);

(statearr_35506_35850[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35499 === (4))){
var inst_35473 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_35474 = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(r);
var inst_35475 = [inst_35474,"application/json;charset=UTF-8"];
var inst_35476 = cljs.core.PersistentHashMap.fromArrays(inst_35473,inst_35475);
var state_35498__$1 = state_35498;
var statearr_35507_35851 = state_35498__$1;
(statearr_35507_35851[(2)] = inst_35476);

(statearr_35507_35851[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35499 === (5))){
var inst_35465 = (state_35498[(7)]);
var inst_35478 = (state_35498[(2)]);
var inst_35479 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_35465,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_35478], 0));
var state_35498__$1 = state_35498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35498__$1,(2),inst_35479);
} else {
if((state_val_35499 === (6))){
var inst_35488 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35489 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(r);
var inst_35490 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(r);
var inst_35491 = [inst_35489,inst_35490];
var inst_35492 = (new cljs.core.PersistentVector(null,2,(5),inst_35488,inst_35491,null));
var inst_35493 = re_frame.core.dispatch(inst_35492);
var state_35498__$1 = state_35498;
var statearr_35508_35852 = state_35498__$1;
(statearr_35508_35852[(2)] = inst_35493);

(statearr_35508_35852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35499 === (7))){
var state_35498__$1 = state_35498;
var statearr_35509_35853 = state_35498__$1;
(statearr_35509_35853[(2)] = null);

(statearr_35509_35853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35499 === (8))){
var inst_35496 = (state_35498[(2)]);
var state_35498__$1 = state_35498;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35498__$1,inst_35496);
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
});})(seq__35311,chunk__35312,count__35313,i__35314,c__27979__auto___35845,r,seq__35311__$1,temp__5804__auto__,vr))
;
return ((function (seq__35311,chunk__35312,count__35313,i__35314,switch__27909__auto__,c__27979__auto___35845,r,seq__35311__$1,temp__5804__auto__,vr){
return (function() {
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__ = null;
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____0 = (function (){
var statearr_35510 = [null,null,null,null,null,null,null,null,null];
(statearr_35510[(0)] = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__);

(statearr_35510[(1)] = (1));

return statearr_35510;
});
var kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____1 = (function (state_35498){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_35498);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e35511){var ex__27913__auto__ = e35511;
var statearr_35512_35854 = state_35498;
(statearr_35512_35854[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_35498[(4)]))){
var statearr_35513_35855 = state_35498;
(statearr_35513_35855[(1)] = cljs.core.first((state_35498[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35856 = state_35498;
state_35498 = G__35856;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__ = function(state_35498){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____1.call(this,state_35498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_post_dispatch_test_$_state_machine__27910__auto__;
})()
;})(seq__35311,chunk__35312,count__35313,i__35314,switch__27909__auto__,c__27979__auto___35845,r,seq__35311__$1,temp__5804__auto__,vr))
})();
var state__27981__auto__ = (function (){var statearr_35514 = f__27980__auto__();
(statearr_35514[(6)] = c__27979__auto___35845);

return statearr_35514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
});})(seq__35311,chunk__35312,count__35313,i__35314,c__27979__auto___35845,r,seq__35311__$1,temp__5804__auto__,vr))
);



var G__35857 = cljs.core.next(seq__35311__$1);
var G__35858 = null;
var G__35859 = (0);
var G__35860 = (0);
seq__35311 = G__35857;
chunk__35312 = G__35858;
count__35313 = G__35859;
i__35314 = G__35860;
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
var f__27980__auto__ = (function (){var switch__27909__auto__ = (function (state_35539){
var state_val_35540 = (state_35539[(1)]);
if((state_val_35540 === (1))){
var inst_35515 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_35516 = [new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)];
var inst_35517 = new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707).cljs$core$IFn$_invoke$arity$1(request);
var inst_35518 = [inst_35517];
var inst_35519 = cljs.core.PersistentHashMap.fromArrays(inst_35516,inst_35518);
var inst_35520 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_35515,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_35519], 0));
var state_35539__$1 = state_35539;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35539__$1,(2),inst_35520);
} else {
if((state_val_35540 === (2))){
var inst_35522 = (state_35539[(2)]);
var inst_35523 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_35524 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_35522);
var inst_35525 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_35523,inst_35524);
var inst_35526 = re_frame.core.dispatch(inst_35525);
var inst_35527 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_35539__$1 = (function (){var statearr_35541 = state_35539;
(statearr_35541[(7)] = inst_35526);

return statearr_35541;
})();
if(cljs.core.truth_(inst_35527)){
var statearr_35542_35861 = state_35539__$1;
(statearr_35542_35861[(1)] = (3));

} else {
var statearr_35543_35862 = state_35539__$1;
(statearr_35543_35862[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35540 === (3))){
var inst_35529 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35530 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_35531 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_35532 = [inst_35530,inst_35531];
var inst_35533 = (new cljs.core.PersistentVector(null,2,(5),inst_35529,inst_35532,null));
var inst_35534 = re_frame.core.dispatch(inst_35533);
var state_35539__$1 = state_35539;
var statearr_35544_35863 = state_35539__$1;
(statearr_35544_35863[(2)] = inst_35534);

(statearr_35544_35863[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35540 === (4))){
var state_35539__$1 = state_35539;
var statearr_35545_35864 = state_35539__$1;
(statearr_35545_35864[(2)] = null);

(statearr_35545_35864[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35540 === (5))){
var inst_35537 = (state_35539[(2)]);
var state_35539__$1 = state_35539;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35539__$1,inst_35537);
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
var statearr_35546 = [null,null,null,null,null,null,null,null];
(statearr_35546[(0)] = kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto__);

(statearr_35546[(1)] = (1));

return statearr_35546;
});
var kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto____1 = (function (state_35539){
while(true){
var ret_value__27911__auto__ = (function (){try{while(true){
var result__27912__auto__ = switch__27909__auto__(state_35539);
if(cljs.core.keyword_identical_QMARK_(result__27912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27912__auto__;
}
break;
}
}catch (e35547){var ex__27913__auto__ = e35547;
var statearr_35548_35865 = state_35539;
(statearr_35548_35865[(2)] = ex__27913__auto__);


if(cljs.core.seq((state_35539[(4)]))){
var statearr_35549_35866 = state_35539;
(statearr_35549_35866[(1)] = cljs.core.first((state_35539[(4)])));

} else {
throw ex__27913__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35867 = state_35539;
state_35539 = G__35867;
continue;
} else {
return ret_value__27911__auto__;
}
break;
}
});
kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto__ = function(state_35539){
switch(arguments.length){
case 0:
return kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto____0.call(this);
case 1:
return kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto____1.call(this,state_35539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$0 = kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto____0;
kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto__.cljs$core$IFn$_invoke$arity$1 = kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto____1;
return kdlyticsgui$mount$http_put_dispatch_$_state_machine__27910__auto__;
})()
})();
var state__27981__auto__ = (function (){var statearr_35550 = f__27980__auto__();
(statearr_35550[(6)] = c__27979__auto__);

return statearr_35550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27981__auto__);
}));

return c__27979__auto__;
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http-put-dispatch","http-put-dispatch",-484936711),kdlyticsgui.mount.http_put_dispatch);
kdlyticsgui.mount.simple_http_get_events = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-naked-positions","get-naked-positions",851863850),new cljs.core.Keyword(null,"url-tail","url-tail",144006528),"naked-position-transit-array",new cljs.core.Keyword(null,"dis-key","dis-key",842897221),new cljs.core.Keyword(null,"naked-positions","naked-positions",-1170378384),new cljs.core.Keyword(null,"mounting-modal","mounting-modal",-1411315623),true], null)], null);
kdlyticsgui.mount.simple_http_assets = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get-key","get-key",1436017019),new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472),new cljs.core.Keyword(null,"namespace","namespace",-377510372),"common.static",new cljs.core.Keyword(null,"asset","asset",-280274466),"portfolios",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null)], null)], null);
var seq__35551_35868 = cljs.core.seq(kdlyticsgui.mount.simple_http_get_events);
var chunk__35552_35869 = null;
var count__35553_35870 = (0);
var i__35554_35871 = (0);
while(true){
if((i__35554_35871 < count__35553_35870)){
var line_35872 = chunk__35552_35869.cljs$core$IIndexed$_nth$arity$2(null,i__35554_35871);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-key","get-key",1436017019).cljs$core$IFn$_invoke$arity$1(line_35872),((function (seq__35551_35868,chunk__35552_35869,count__35553_35870,i__35554_35871,line_35872){
return (function (p__35567,p__35568){
var map__35569 = p__35567;
var map__35569__$1 = cljs.core.__destructure_map(map__35569);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35569__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35570 = p__35568;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35570,(0),null);
if((cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dis-key","dis-key",842897221).cljs$core$IFn$_invoke$arity$1(line_35872)], null))) === (0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(cljs.core.truth_(new cljs.core.Keyword(null,"mounting-modal","mounting-modal",-1411315623).cljs$core$IFn$_invoke$arity$1(line_35872))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),true):db),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url-tail","url-tail",144006528).cljs$core$IFn$_invoke$arity$1(line_35872))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dis-key","dis-key",842897221).cljs$core$IFn$_invoke$arity$1(line_35872)], null)], null)], null);
} else {
return null;
}
});})(seq__35551_35868,chunk__35552_35869,count__35553_35870,i__35554_35871,line_35872))
);


var G__35873 = seq__35551_35868;
var G__35874 = chunk__35552_35869;
var G__35875 = count__35553_35870;
var G__35876 = (i__35554_35871 + (1));
seq__35551_35868 = G__35873;
chunk__35552_35869 = G__35874;
count__35553_35870 = G__35875;
i__35554_35871 = G__35876;
continue;
} else {
var temp__5804__auto___35877 = cljs.core.seq(seq__35551_35868);
if(temp__5804__auto___35877){
var seq__35551_35878__$1 = temp__5804__auto___35877;
if(cljs.core.chunked_seq_QMARK_(seq__35551_35878__$1)){
var c__5568__auto___35879 = cljs.core.chunk_first(seq__35551_35878__$1);
var G__35880 = cljs.core.chunk_rest(seq__35551_35878__$1);
var G__35881 = c__5568__auto___35879;
var G__35882 = cljs.core.count(c__5568__auto___35879);
var G__35883 = (0);
seq__35551_35868 = G__35880;
chunk__35552_35869 = G__35881;
count__35553_35870 = G__35882;
i__35554_35871 = G__35883;
continue;
} else {
var line_35884 = cljs.core.first(seq__35551_35878__$1);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-key","get-key",1436017019).cljs$core$IFn$_invoke$arity$1(line_35884),((function (seq__35551_35868,chunk__35552_35869,count__35553_35870,i__35554_35871,line_35884,seq__35551_35878__$1,temp__5804__auto___35877){
return (function (p__35573,p__35574){
var map__35575 = p__35573;
var map__35575__$1 = cljs.core.__destructure_map(map__35575);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35575__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35576 = p__35574;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35576,(0),null);
if((cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dis-key","dis-key",842897221).cljs$core$IFn$_invoke$arity$1(line_35884)], null))) === (0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(cljs.core.truth_(new cljs.core.Keyword(null,"mounting-modal","mounting-modal",-1411315623).cljs$core$IFn$_invoke$arity$1(line_35884))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),true):db),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url-tail","url-tail",144006528).cljs$core$IFn$_invoke$arity$1(line_35884))].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dis-key","dis-key",842897221).cljs$core$IFn$_invoke$arity$1(line_35884)], null)], null)], null);
} else {
return null;
}
});})(seq__35551_35868,chunk__35552_35869,count__35553_35870,i__35554_35871,line_35884,seq__35551_35878__$1,temp__5804__auto___35877))
);


var G__35885 = cljs.core.next(seq__35551_35878__$1);
var G__35886 = null;
var G__35887 = (0);
var G__35888 = (0);
seq__35551_35868 = G__35885;
chunk__35552_35869 = G__35886;
count__35553_35870 = G__35887;
i__35554_35871 = G__35888;
continue;
}
} else {
}
}
break;
}
var seq__35579_35889 = cljs.core.seq(kdlyticsgui.mount.simple_http_assets);
var chunk__35580_35890 = null;
var count__35581_35891 = (0);
var i__35582_35892 = (0);
while(true){
if((i__35582_35892 < count__35581_35891)){
var line_35893 = chunk__35580_35890.cljs$core$IIndexed$_nth$arity$2(null,i__35582_35892);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-key","get-key",1436017019).cljs$core$IFn$_invoke$arity$1(line_35893),((function (seq__35579_35889,chunk__35580_35890,count__35581_35891,i__35582_35892,line_35893){
return (function (p__35595,p__35596){
var map__35597 = p__35595;
var map__35597__$1 = cljs.core.__destructure_map(map__35597);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35597__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35598 = p__35596;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35598,(0),null);
if((cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(line_35893))) === (0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(cljs.core.truth_(new cljs.core.Keyword(null,"mounting-modal","mounting-modal",-1411315623).cljs$core$IFn$_invoke$arity$1(line_35893))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),true):db),new cljs.core.Keyword(null,"http-get-asset","http-get-asset",1501716308),line_35893], null);
} else {
return null;
}
});})(seq__35579_35889,chunk__35580_35890,count__35581_35891,i__35582_35892,line_35893))
);


var G__35894 = seq__35579_35889;
var G__35895 = chunk__35580_35890;
var G__35896 = count__35581_35891;
var G__35897 = (i__35582_35892 + (1));
seq__35579_35889 = G__35894;
chunk__35580_35890 = G__35895;
count__35581_35891 = G__35896;
i__35582_35892 = G__35897;
continue;
} else {
var temp__5804__auto___35898 = cljs.core.seq(seq__35579_35889);
if(temp__5804__auto___35898){
var seq__35579_35899__$1 = temp__5804__auto___35898;
if(cljs.core.chunked_seq_QMARK_(seq__35579_35899__$1)){
var c__5568__auto___35900 = cljs.core.chunk_first(seq__35579_35899__$1);
var G__35901 = cljs.core.chunk_rest(seq__35579_35899__$1);
var G__35902 = c__5568__auto___35900;
var G__35903 = cljs.core.count(c__5568__auto___35900);
var G__35904 = (0);
seq__35579_35889 = G__35901;
chunk__35580_35890 = G__35902;
count__35581_35891 = G__35903;
i__35582_35892 = G__35904;
continue;
} else {
var line_35905 = cljs.core.first(seq__35579_35899__$1);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-key","get-key",1436017019).cljs$core$IFn$_invoke$arity$1(line_35905),((function (seq__35579_35889,chunk__35580_35890,count__35581_35891,i__35582_35892,line_35905,seq__35579_35899__$1,temp__5804__auto___35898){
return (function (p__35601,p__35602){
var map__35603 = p__35601;
var map__35603__$1 = cljs.core.__destructure_map(map__35603);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35603__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35604 = p__35602;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35604,(0),null);
if((cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(line_35905))) === (0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(cljs.core.truth_(new cljs.core.Keyword(null,"mounting-modal","mounting-modal",-1411315623).cljs$core$IFn$_invoke$arity$1(line_35905))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254),true):db),new cljs.core.Keyword(null,"http-get-asset","http-get-asset",1501716308),line_35905], null);
} else {
return null;
}
});})(seq__35579_35889,chunk__35580_35890,count__35581_35891,i__35582_35892,line_35905,seq__35579_35899__$1,temp__5804__auto___35898))
);


var G__35906 = cljs.core.next(seq__35579_35899__$1);
var G__35907 = null;
var G__35908 = (0);
var G__35909 = (0);
seq__35579_35889 = G__35906;
chunk__35580_35890 = G__35907;
count__35581_35891 = G__35908;
i__35582_35892 = G__35909;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-wealth-summary","get-wealth-summary",1541098912),(function (p__35607,p__35608){
var map__35609 = p__35607;
var map__35609__$1 = cljs.core.__destructure_map(map__35609);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35609__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35610 = p__35608;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35610,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"wealth-summary"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-summary","positions-summary",-17081762)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions-summary","get-positions-summary",1710688354),(function (p__35613,p__35614){
var map__35615 = p__35613;
var map__35615__$1 = cljs.core.__destructure_map(map__35615);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35615__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35616 = p__35614;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35616,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"positions-summary"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-summary","positions-summary",-17081762)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions-top10","get-positions-top10",585407224),(function (p__35619,p__35620){
var map__35621 = p__35619;
var map__35621__$1 = cljs.core.__destructure_map(map__35621);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35621__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35622 = p__35620;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35622,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"positions-top10"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-top10","positions-top10",-1668533732)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions-characteristics","get-positions-characteristics",749074961),(function (p__35625,p__35626){
var map__35627 = p__35625;
var map__35627__$1 = cljs.core.__destructure_map(map__35627);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35627__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35628 = p__35626;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35628,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"positions-characteristics"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-characteristics","positions-characteristics",-170272672)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions-strategy-exposure","get-positions-strategy-exposure",-931353461),(function (p__35631,p__35632){
var map__35633 = p__35631;
var map__35633__$1 = cljs.core.__destructure_map(map__35633);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35633__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35634 = p__35632;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35634,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"positions-strategy-exposure"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-strategy-exposure","positions-strategy-exposure",1394640320)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-vault-summary","get-vault-summary",1161003768),(function (p__35637,p__35638){
var map__35639 = p__35637;
var map__35639__$1 = cljs.core.__destructure_map(map__35639);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35639__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35640 = p__35638;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35640,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"vault-summary"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vault-summary","vault-summary",-407259781)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-cellar-summary","get-cellar-summary",644275392),(function (p__35643,p__35644){
var map__35645 = p__35643;
var map__35645__$1 = cljs.core.__destructure_map(map__35645);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35645__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35646 = p__35644;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35646,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"cellar-summary"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cellar-summary","cellar-summary",271980210)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"receive-price-history-data","receive-price-history-data",1513500215),(function (db,p__35649){
var vec__35650 = p__35649;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35650,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35650,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("price-history","data","price-history/data",1268424495),data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("price-history","show-throbber","price-history/show-throbber",-2145949059),false], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-price-history","get-price-history",-1088732947),(function (p__35653,p__35654){
var map__35655 = p__35653;
var map__35655__$1 = cljs.core.__destructure_map(map__35655);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35655__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35656 = p__35654;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35656,(0),null);
var ticker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35656,(1),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35656,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("price-history","ticker","price-history/ticker",1464015546),ticker,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("price-history","name","price-history/name",-1535942599),name,new cljs.core.Keyword("price-history","show-modal","price-history/show-modal",1439463911),true,new cljs.core.Keyword("price-history","show-throbber","price-history/show-throbber",-2145949059),true], 0)),new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kdlyticsgui.static$.server_address),"price-history?ticker=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ticker)].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"receive-price-history-data","receive-price-history-data",1513500215)], null)], null)], null);
}));

//# sourceMappingURL=kdlyticsgui.mount.js.map
