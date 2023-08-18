goog.provide('kdlyticsgui.views');
kdlyticsgui.views.main_navigation = (function (){var home_events = null;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"wealth","wealth",-1566112704),new cljs.core.Keyword(null,"name","name",1843675177),"W",new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"wealth","wealth",-1566112704),new cljs.core.Keyword(null,"subs","subs",-186681991),null,new cljs.core.Keyword(null,"load-events","load-events",851978219),home_events,new cljs.core.Keyword(null,"mounting-modal","mounting-modal",-1411315623),true], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword(null,"name","name",1843675177),"P",new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword(null,"subs","subs",-186681991),null,new cljs.core.Keyword(null,"load-events","load-events",851978219),home_events,new cljs.core.Keyword(null,"mounting-modal","mounting-modal",-1411315623),true], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"vault","vault",-1319204928),new cljs.core.Keyword(null,"name","name",1843675177),"V",new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"vault","vault",-1319204928),new cljs.core.Keyword(null,"subs","subs",-186681991),null,new cljs.core.Keyword(null,"load-events","load-events",851978219),home_events,new cljs.core.Keyword(null,"mounting-modal","mounting-modal",-1411315623),true], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"cellar","cellar",1465745525),new cljs.core.Keyword(null,"name","name",1843675177),"C",new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"cellar","cellar",1465745525),new cljs.core.Keyword(null,"subs","subs",-186681991),null,new cljs.core.Keyword(null,"load-events","load-events",851978219),home_events,new cljs.core.Keyword(null,"mounting-modal","mounting-modal",-1411315623),true], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"tools","tools",-1241731990),new cljs.core.Keyword(null,"name","name",1843675177),"T",new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"tools","tools",-1241731990),new cljs.core.Keyword(null,"subs","subs",-186681991),null,new cljs.core.Keyword(null,"load-events","load-events",851978219),home_events,new cljs.core.Keyword(null,"mounting-modal","mounting-modal",-1411315623),true], null)], null);
})();
kdlyticsgui.views.modal_mounting = (function kdlyticsgui$views$modal_mounting(){
if(cljs.core.truth_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","show-mounting-modal","navigation/show-mounting-modal",962641254)], null))))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.modal_panel,new cljs.core.Keyword(null,"wrap-nicely?","wrap-nicely?",85012288),false,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.alert_box,new cljs.core.Keyword(null,"padding","padding",1660304693),"15px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"120px"], null),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"large","large",-196820544)], null)], null),new cljs.core.Keyword(null,"closeable?","closeable?",1490064409),false], null)], null);
} else {
return null;
}
});
kdlyticsgui.views.entry = (function kdlyticsgui$views$entry(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"padding","padding",1660304693),"280px 0px",new cljs.core.Keyword(null,"class","class",-2030961996),"subbody",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"class","class",-2030961996),"titlescreen",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"titlescreen"], null),"Hello"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),""], null)], null)], null)], null);
});
/**
 * This is really not pure. But it saves loading time at mount.
 */
kdlyticsgui.views.navigation_event = (function kdlyticsgui$views$navigation_event(item){
(document.title = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item));

var seq__30164_30180 = cljs.core.seq(new cljs.core.Keyword(null,"load-events","load-events",851978219).cljs$core$IFn$_invoke$arity$1(item));
var chunk__30165_30181 = null;
var count__30166_30182 = (0);
var i__30167_30183 = (0);
while(true){
if((i__30167_30183 < count__30166_30182)){
var k_30184 = chunk__30165_30181.cljs$core$IIndexed$_nth$arity$2(null,i__30167_30183);
re_frame.core.dispatch(((cljs.core.vector_QMARK_(k_30184))?k_30184:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_30184], null)));


var G__30185 = seq__30164_30180;
var G__30186 = chunk__30165_30181;
var G__30187 = count__30166_30182;
var G__30188 = (i__30167_30183 + (1));
seq__30164_30180 = G__30185;
chunk__30165_30181 = G__30186;
count__30166_30182 = G__30187;
i__30167_30183 = G__30188;
continue;
} else {
var temp__5804__auto___30189 = cljs.core.seq(seq__30164_30180);
if(temp__5804__auto___30189){
var seq__30164_30190__$1 = temp__5804__auto___30189;
if(cljs.core.chunked_seq_QMARK_(seq__30164_30190__$1)){
var c__5568__auto___30191 = cljs.core.chunk_first(seq__30164_30190__$1);
var G__30192 = cljs.core.chunk_rest(seq__30164_30190__$1);
var G__30193 = c__5568__auto___30191;
var G__30194 = cljs.core.count(c__5568__auto___30191);
var G__30195 = (0);
seq__30164_30180 = G__30192;
chunk__30165_30181 = G__30193;
count__30166_30182 = G__30194;
i__30167_30183 = G__30195;
continue;
} else {
var k_30196 = cljs.core.first(seq__30164_30190__$1);
re_frame.core.dispatch(((cljs.core.vector_QMARK_(k_30196))?k_30196:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_30196], null)));


var G__30197 = cljs.core.next(seq__30164_30190__$1);
var G__30198 = null;
var G__30199 = (0);
var G__30200 = (0);
seq__30164_30180 = G__30197;
chunk__30165_30181 = G__30198;
count__30166_30182 = G__30199;
i__30167_30183 = G__30200;
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
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"navbar",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"stretch","stretch",-1888837380),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = (function kdlyticsgui$views$top_nav_bar_$_iter__30168(s__30169){
return (new cljs.core.LazySeq(null,(function (){
var s__30169__$1 = s__30169;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30169__$1);
if(temp__5804__auto__){
var s__30169__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30169__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30169__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30171 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30170 = (0);
while(true){
if((i__30170 < size__5522__auto__)){
var item = cljs.core._nth(c__5521__auto__,i__30170);
cljs.core.chunk_append(b__30171,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"width","width",-384071477),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"wealth","wealth",-1566112704)))?"175px":"150px"),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_view,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?"dropdown-active":"dropdown"),new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(item)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__30170,item,c__5521__auto__,size__5522__auto__,b__30171,s__30169__$2,temp__5804__auto__,active_view){
return (function (){
return kdlyticsgui.views.navigation_event(item);
});})(i__30170,item,c__5521__auto__,size__5522__auto__,b__30171,s__30169__$2,temp__5804__auto__,active_view))
], null))], null));

var G__30201 = (i__30170 + (1));
i__30170 = G__30201;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30171),kdlyticsgui$views$top_nav_bar_$_iter__30168(cljs.core.chunk_rest(s__30169__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30171),null);
}
} else {
var item = cljs.core.first(s__30169__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"width","width",-384071477),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"wealth","wealth",-1566112704)))?"175px":"150px"),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_view,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?"dropdown-active":"dropdown"),new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(item)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__30169__$2,temp__5804__auto__,active_view){
return (function (){
return kdlyticsgui.views.navigation_event(item);
});})(item,s__30169__$2,temp__5804__auto__,active_view))
], null))], null),kdlyticsgui$views$top_nav_bar_$_iter__30168(cljs.core.rest(s__30169__$2)));
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

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"class","class",-2030961996),"leftnavbar",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = (function kdlyticsgui$views$left_nav_bar_$_iter__30172(s__30173){
return (new cljs.core.LazySeq(null,(function (){
var s__30173__$1 = s__30173;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30173__$1);
if(temp__5804__auto__){
var s__30173__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30173__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30173__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30175 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30174 = (0);
while(true){
if((i__30174 < size__5522__auto__)){
var item = cljs.core._nth(c__5521__auto__,i__30174);
cljs.core.chunk_append(b__30175,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-primary btn-block",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [navigation_key], null))),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?" active":null)].join(''),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__30174,item,c__5521__auto__,size__5522__auto__,b__30175,s__30173__$2,temp__5804__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [navigation_key,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)], null));
});})(i__30174,item,c__5521__auto__,size__5522__auto__,b__30175,s__30173__$2,temp__5804__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__30202 = (i__30174 + (1));
i__30174 = G__30202;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30175),kdlyticsgui$views$left_nav_bar_$_iter__30172(cljs.core.chunk_rest(s__30173__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30175),null);
}
} else {
var item = cljs.core.first(s__30173__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-primary btn-block",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [navigation_key], null))),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?" active":null)].join(''),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__30173__$2,temp__5804__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [navigation_key,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)], null));
});})(item,s__30173__$2,temp__5804__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),kdlyticsgui$views$left_nav_bar_$_iter__30172(cljs.core.rest(s__30173__$2)));
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

var G__30176 = active_view;
var G__30176__$1 = (((G__30176 instanceof cljs.core.Keyword))?G__30176.fqn:null);
switch (G__30176__$1) {
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
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.views.left_nav_bar,kdlyticsgui.views.wealth_navigation,new cljs.core.Keyword("navigation","active-view-wealth","navigation/active-view-wealth",-1986836686)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.views.wealth_active_view], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_contextmenu.menu.context_menu], null)], null)], null);
});
kdlyticsgui.views.positions_navigation = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"name","name",1843675177),"Summary"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"trades","trades",1895557244),new cljs.core.Keyword(null,"name","name",1843675177),"Trades"], null)], null);
kdlyticsgui.views.positions_active_view = (function kdlyticsgui$views$positions_active_view(){
var active_view = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","active-view-positions","navigation/active-view-positions",1459188376)], null)));
window.scrollTo((0),(0));

var G__30177 = active_view;
var G__30177__$1 = (((G__30177 instanceof cljs.core.Keyword))?G__30177.fqn:null);
switch (G__30177__$1) {
case "summary":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.positions.summary_display], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.output","div.output",1460347316),"nothing to display"], null);

}
});
kdlyticsgui.views.positions_view = (function kdlyticsgui$views$positions_view(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.views.left_nav_bar,kdlyticsgui.views.positions_navigation,new cljs.core.Keyword("navigation","active-view-positions","navigation/active-view-positions",1459188376)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.views.positions_active_view], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.positions.modal_price_history], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_contextmenu.menu.context_menu], null)], null)], null);
});
kdlyticsgui.views.vault_navigation = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.Keyword(null,"name","name",1843675177),"Inventory"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"transaction","transaction",1777321997),new cljs.core.Keyword(null,"name","name",1843675177),"Transactions"], null)], null);
kdlyticsgui.views.vault_view = (function kdlyticsgui$views$vault_view(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.views.left_nav_bar,kdlyticsgui.views.vault_navigation,new cljs.core.Keyword("navigation","active-view-vault","navigation/active-view-vault",-1235342702)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_contextmenu.menu.context_menu], null)], null)], null);
});
kdlyticsgui.views.cellar_navigation = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.Keyword(null,"name","name",1843675177),"Inventory"], null)], null);
kdlyticsgui.views.cellar_active_view = (function kdlyticsgui$views$cellar_active_view(){
var active_view = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","active-view-cellar","navigation/active-view-cellar",-1146180625)], null)));
window.scrollTo((0),(0));

var G__30178 = active_view;
var G__30178__$1 = (((G__30178 instanceof cljs.core.Keyword))?G__30178.fqn:null);
switch (G__30178__$1) {
case "inventory":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.cellar.summary_display], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.output","div.output",1460347316),"nothing to display"], null);

}
});
kdlyticsgui.views.cellar_view = (function kdlyticsgui$views$cellar_view(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.views.left_nav_bar,kdlyticsgui.views.cellar_navigation,new cljs.core.Keyword("navigation","active-view-cellar","navigation/active-view-cellar",-1146180625)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.views.cellar_active_view], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_contextmenu.menu.context_menu], null)], null)], null);
});
kdlyticsgui.views.tools_navigation = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"scrapping","scrapping",-1589708187),new cljs.core.Keyword(null,"name","name",1843675177),"Scraper"], null)], null);
kdlyticsgui.views.tools_view = (function kdlyticsgui$views$tools_view(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.views.left_nav_bar,kdlyticsgui.views.tools_navigation,new cljs.core.Keyword("navigation","active-view-tools","navigation/active-view-tools",-2036856651)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_contextmenu.menu.context_menu], null)], null)], null);
});
kdlyticsgui.views.active_section = (function kdlyticsgui$views$active_section(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["HELLO"], 0));

window.scrollTo((0),(0));

var G__30179 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","active-section","navigation/active-section",-1272053018)], null)));
var G__30179__$1 = (((G__30179 instanceof cljs.core.Keyword))?G__30179.fqn:null);
switch (G__30179__$1) {
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
