goog.provide('kdlyticsgui.views');
kdlyticsgui.views.main_navigation = (function (){var home_events = null;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"wealth","wealth",-1566112704),new cljs.core.Keyword(null,"name","name",1843675177),"Wealth",new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"wealth","wealth",-1566112704),new cljs.core.Keyword(null,"subs","subs",-186681991),null,new cljs.core.Keyword(null,"load-events","load-events",851978219),home_events,new cljs.core.Keyword(null,"mounting-modal","mounting-modal",-1411315623),true], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword(null,"name","name",1843675177),"Positions",new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword(null,"subs","subs",-186681991),null,new cljs.core.Keyword(null,"load-events","load-events",851978219),home_events,new cljs.core.Keyword(null,"mounting-modal","mounting-modal",-1411315623),true], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"vault","vault",-1319204928),new cljs.core.Keyword(null,"name","name",1843675177),"Vault",new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"vault","vault",-1319204928),new cljs.core.Keyword(null,"subs","subs",-186681991),null,new cljs.core.Keyword(null,"load-events","load-events",851978219),home_events,new cljs.core.Keyword(null,"mounting-modal","mounting-modal",-1411315623),true], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"cellar","cellar",1465745525),new cljs.core.Keyword(null,"name","name",1843675177),"Cellar",new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"cellar","cellar",1465745525),new cljs.core.Keyword(null,"subs","subs",-186681991),null,new cljs.core.Keyword(null,"load-events","load-events",851978219),home_events,new cljs.core.Keyword(null,"mounting-modal","mounting-modal",-1411315623),true], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"tools","tools",-1241731990),new cljs.core.Keyword(null,"name","name",1843675177),"Tools",new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"tools","tools",-1241731990),new cljs.core.Keyword(null,"subs","subs",-186681991),null,new cljs.core.Keyword(null,"load-events","load-events",851978219),home_events,new cljs.core.Keyword(null,"mounting-modal","mounting-modal",-1411315623),true], null)], null);
})();
kdlyticsgui.views.modal_mounting = (function kdlyticsgui$views$modal_mounting(){
if(cljs.core.truth_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254)], null))))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.modal_panel,new cljs.core.Keyword(null,"wrap-nicely?","wrap-nicely?",85012288),false,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.alert_box,new cljs.core.Keyword(null,"padding","padding",1660304693),"15px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"120px"], null),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"large","large",-196820544)], null)], null),new cljs.core.Keyword(null,"closeable?","closeable?",1490064409),false], null)], null);
} else {
return null;
}
});
kdlyticsgui.views.entry = (function kdlyticsgui$views$entry(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"padding","padding",1660304693),"280px 0px",new cljs.core.Keyword(null,"class","class",-2030961996),"subbody",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"class","class",-2030961996),"titlescreen",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"titlescreen"], null),"kdlytics"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),""], null)], null)], null)], null);
});
/**
 * This is really not pure. But it saves loading time at mount.
 */
kdlyticsgui.views.navigation_event = (function kdlyticsgui$views$navigation_event(item){
(document.title = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item));

var seq__42840_42854 = cljs.core.seq(new cljs.core.Keyword(null,"load-events","load-events",851978219).cljs$core$IFn$_invoke$arity$1(item));
var chunk__42841_42855 = null;
var count__42842_42856 = (0);
var i__42843_42857 = (0);
while(true){
if((i__42843_42857 < count__42842_42856)){
var k_42858 = chunk__42841_42855.cljs$core$IIndexed$_nth$arity$2(null,i__42843_42857);
re_frame.core.dispatch(((cljs.core.vector_QMARK_(k_42858))?k_42858:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_42858], null)));


var G__42859 = seq__42840_42854;
var G__42860 = chunk__42841_42855;
var G__42861 = count__42842_42856;
var G__42862 = (i__42843_42857 + (1));
seq__42840_42854 = G__42859;
chunk__42841_42855 = G__42860;
count__42842_42856 = G__42861;
i__42843_42857 = G__42862;
continue;
} else {
var temp__5804__auto___42863 = cljs.core.seq(seq__42840_42854);
if(temp__5804__auto___42863){
var seq__42840_42864__$1 = temp__5804__auto___42863;
if(cljs.core.chunked_seq_QMARK_(seq__42840_42864__$1)){
var c__5568__auto___42865 = cljs.core.chunk_first(seq__42840_42864__$1);
var G__42866 = cljs.core.chunk_rest(seq__42840_42864__$1);
var G__42867 = c__5568__auto___42865;
var G__42868 = cljs.core.count(c__5568__auto___42865);
var G__42869 = (0);
seq__42840_42854 = G__42866;
chunk__42841_42855 = G__42867;
count__42842_42856 = G__42868;
i__42843_42857 = G__42869;
continue;
} else {
var k_42870 = cljs.core.first(seq__42840_42864__$1);
re_frame.core.dispatch(((cljs.core.vector_QMARK_(k_42870))?k_42870:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_42870], null)));


var G__42871 = cljs.core.next(seq__42840_42864__$1);
var G__42872 = null;
var G__42873 = (0);
var G__42874 = (0);
seq__42840_42854 = G__42871;
chunk__42841_42855 = G__42872;
count__42842_42856 = G__42873;
i__42843_42857 = G__42874;
continue;
}
} else {
}
}
break;
}

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","active-section","navigation/active-section",-1272053018),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)], null));
});
kdlyticsgui.views.top_nav_bar = (function kdlyticsgui$views$top_nav_bar(){
var active_view = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","active-section","navigation/active-section",-1272053018)], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"navbar",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"stretch","stretch",-1888837380),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = (function kdlyticsgui$views$top_nav_bar_$_iter__42844(s__42845){
return (new cljs.core.LazySeq(null,(function (){
var s__42845__$1 = s__42845;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__42845__$1);
if(temp__5804__auto__){
var s__42845__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42845__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__42845__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__42847 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__42846 = (0);
while(true){
if((i__42846 < size__5522__auto__)){
var item = cljs.core._nth(c__5521__auto__,i__42846);
cljs.core.chunk_append(b__42847,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"width","width",-384071477),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"wealth","wealth",-1566112704)))?"175px":"150px"),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_view,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?"dropdown-active":"dropdown"),new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(item)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__42846,item,c__5521__auto__,size__5522__auto__,b__42847,s__42845__$2,temp__5804__auto__,active_view){
return (function (){
return kdlyticsgui.views.navigation_event(item);
});})(i__42846,item,c__5521__auto__,size__5522__auto__,b__42847,s__42845__$2,temp__5804__auto__,active_view))
], null))], null));

var G__42875 = (i__42846 + (1));
i__42846 = G__42875;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42847),kdlyticsgui$views$top_nav_bar_$_iter__42844(cljs.core.chunk_rest(s__42845__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42847),null);
}
} else {
var item = cljs.core.first(s__42845__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"width","width",-384071477),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"wealth","wealth",-1566112704)))?"175px":"150px"),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_view,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?"dropdown-active":"dropdown"),new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(item)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__42845__$2,temp__5804__auto__,active_view){
return (function (){
return kdlyticsgui.views.navigation_event(item);
});})(item,s__42845__$2,temp__5804__auto__,active_view))
], null))], null),kdlyticsgui$views$top_nav_bar_$_iter__42844(cljs.core.rest(s__42845__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(kdlyticsgui.views.main_navigation);
})()),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"height","height",1025178622),"50%",new cljs.core.Keyword(null,"width","width",-384071477),"3px",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"color","color",1011675173),"#C33345",new cljs.core.Keyword(null,"size","size",1098693007),"3px"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"width","width",-384071477),"3px",new cljs.core.Keyword(null,"child","child",623967545),""], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"width","width",-384071477),"150px",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.Keyword(null,"label","label",1718410804),goog.string.unescapeEntities("kdlytics &trade;"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(document.title = "kdlytics");

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","active-section","navigation/active-section",-1272053018),new cljs.core.Keyword(null,"entry","entry",505168823)], null));
})], null)], null)], null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"color","color",1011675173),"#C33345",new cljs.core.Keyword(null,"class","class",-2030961996),"separatorline"], null)], null)], null);
});
kdlyticsgui.views.left_nav_bar = (function kdlyticsgui$views$left_nav_bar(choices,navigation_key){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([navigation_key], 0));

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"class","class",-2030961996),"leftnavbar",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = (function kdlyticsgui$views$left_nav_bar_$_iter__42848(s__42849){
return (new cljs.core.LazySeq(null,(function (){
var s__42849__$1 = s__42849;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__42849__$1);
if(temp__5804__auto__){
var s__42849__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42849__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__42849__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__42851 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__42850 = (0);
while(true){
if((i__42850 < size__5522__auto__)){
var item = cljs.core._nth(c__5521__auto__,i__42850);
cljs.core.chunk_append(b__42851,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-primary btn-block",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [navigation_key], null))),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?" active":null)].join(''),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__42850,item,c__5521__auto__,size__5522__auto__,b__42851,s__42849__$2,temp__5804__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [navigation_key,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)], null));
});})(i__42850,item,c__5521__auto__,size__5522__auto__,b__42851,s__42849__$2,temp__5804__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__42876 = (i__42850 + (1));
i__42850 = G__42876;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42851),kdlyticsgui$views$left_nav_bar_$_iter__42848(cljs.core.chunk_rest(s__42849__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42851),null);
}
} else {
var item = cljs.core.first(s__42849__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-primary btn-block",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [navigation_key], null))),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?" active":null)].join(''),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__42849__$2,temp__5804__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [navigation_key,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)], null));
});})(item,s__42849__$2,temp__5804__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),kdlyticsgui$views$left_nav_bar_$_iter__42848(cljs.core.rest(s__42849__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(choices);
})())], null);
});
kdlyticsgui.views.wealth_navigation = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"name","name",1843675177),"Summary"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"projection","projection",-412523042),new cljs.core.Keyword(null,"name","name",1843675177),"Projection"], null)], null);
kdlyticsgui.views.wealth_active_view = (function kdlyticsgui$views$wealth_active_view(){
var active_view = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","active-view-wealth","navigation/active-view-wealth",-1986836686)], null)));
window.scrollTo((0),(0));

var G__42852 = active_view;
var G__42852__$1 = (((G__42852 instanceof cljs.core.Keyword))?G__42852.fqn:null);
switch (G__42852__$1) {
case "summary":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.wealth.summary_display], null);

break;
case "projection":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.wealth.projection_display], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.output","div.output",1460347316),"nothing to display"], null);

}
});
kdlyticsgui.views.wealth_view = (function kdlyticsgui$views$wealth_view(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.views.left_nav_bar,kdlyticsgui.views.wealth_navigation,new cljs.core.Keyword("navigation","active-view-wealth","navigation/active-view-wealth",-1986836686)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.views.wealth_active_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_contextmenu.menu.context_menu], null)], null)], null);
});
kdlyticsgui.views.positions_navigation = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"name","name",1843675177),"Summary"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"trades","trades",1895557244),new cljs.core.Keyword(null,"name","name",1843675177),"Trades"], null)], null);
kdlyticsgui.views.positions_view = (function kdlyticsgui$views$positions_view(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.views.left_nav_bar,kdlyticsgui.views.positions_navigation,new cljs.core.Keyword("navigation","active-view-positions","navigation/active-view-positions",1459188376)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_contextmenu.menu.context_menu], null)], null)], null);
});
kdlyticsgui.views.vault_navigation = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.Keyword(null,"name","name",1843675177),"Inventory"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"transaction","transaction",1777321997),new cljs.core.Keyword(null,"name","name",1843675177),"Transactions"], null)], null);
kdlyticsgui.views.vault_view = (function kdlyticsgui$views$vault_view(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.views.left_nav_bar,kdlyticsgui.views.vault_navigation,new cljs.core.Keyword("navigation","active-view-vault","navigation/active-view-vault",-1235342702)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_contextmenu.menu.context_menu], null)], null)], null);
});
kdlyticsgui.views.cellar_navigation = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.Keyword(null,"name","name",1843675177),"Inventory"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"transaction","transaction",1777321997),new cljs.core.Keyword(null,"name","name",1843675177),"Transactions"], null)], null);
kdlyticsgui.views.cellar_view = (function kdlyticsgui$views$cellar_view(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.views.left_nav_bar,kdlyticsgui.views.cellar_navigation,new cljs.core.Keyword("navigation","active-view-cellar","navigation/active-view-cellar",-1146180625)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_contextmenu.menu.context_menu], null)], null)], null);
});
kdlyticsgui.views.tools_navigation = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"scrapping","scrapping",-1589708187),new cljs.core.Keyword(null,"name","name",1843675177),"Scraper"], null)], null);
kdlyticsgui.views.tools_view = (function kdlyticsgui$views$tools_view(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.views.left_nav_bar,kdlyticsgui.views.tools_navigation,new cljs.core.Keyword("navigation","active-view-tools","navigation/active-view-tools",-2036856651)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_contextmenu.menu.context_menu], null)], null)], null);
});
kdlyticsgui.views.active_section = (function kdlyticsgui$views$active_section(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["HELLO"], 0));

window.scrollTo((0),(0));

var G__42853 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","active-section","navigation/active-section",-1272053018)], null)));
var G__42853__$1 = (((G__42853 instanceof cljs.core.Keyword))?G__42853.fqn:null);
switch (G__42853__$1) {
case "entry":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.views.entry], null);

break;
case "wealth":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.views.wealth_view], null);

break;
case "positions":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.views.positions_view], null);

break;
case "vault":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.views.vault_view], null);

break;
case "cellar":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.views.cellar_view], null);

break;
case "tools":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.views.tools_view], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.output","div.output",1460347316),"nothing to display"], null);

}
});
kdlyticsgui.views.main_panel = (function kdlyticsgui$views$main_panel(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"0px",new cljs.core.Keyword(null,"class","class",-2030961996),"body",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.views.modal_mounting], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.views.top_nav_bar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.views.active_section], null)], null)], null);
});

//# sourceMappingURL=kdlyticsgui.views.js.map
