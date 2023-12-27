goog.provide('kdlyticsgui.guitools');
var module$node_modules$$mui$material$node$index=shadow.js.require("module$node_modules$$mui$material$node$index", {});
kdlyticsgui.guitools.mrt_right_element_box_generic = (function kdlyticsgui$guitools$mrt_right_element_box_generic(id,width,title_str,opts,children){
var show_element = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (function (id__$1,width__$1,title_str__$1,opts__$1,children__$1){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"gap","gap",80255254),"0px",new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),title_str__$1,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"show-hide","show-hide",1629953520).cljs$core$IFn$_invoke$arity$1(opts__$1))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.get_react().createElement(kdlyticsgui.mui.switch$,(function (){var obj37836 = ({"checked-atom":show_element,"default-checked":cljs.core.not(new cljs.core.Keyword(null,"hide-by-default","hide-by-default",1193244557).cljs$core$IFn$_invoke$arity$1(opts__$1))});
return obj37836;
})())], null):null))], null)], null),(cljs.core.truth_(cljs.core.deref(show_element))?children__$1:null))], null);
});
});
kdlyticsgui.guitools.slider_result = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Slider result");
kdlyticsgui.guitools.select_result = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Simple select result");
kdlyticsgui.guitools.grouping_result = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Grouping select result");
kdlyticsgui.guitools.autocomplete_result = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Autocomplete result");
kdlyticsgui.guitools.radio_group_result = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("RadioGroup result");
kdlyticsgui.guitools.button_result = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Button result");
kdlyticsgui.guitools.start_date_result = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Date result");

kdlyticsgui.guitools.mui_dev = (function (){var G__37844 = (function kdlyticsgui$guitools$mui_dev_render(props__29207__auto__,maybe_ref__29208__auto__){
var vec__37845 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__29207__auto__),maybe_ref__29208__auto__], null);

var portfolio = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["PORTFOLIO 1","PORTFOLIO 2"], null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.mui.right_element_box_generic("test","1800px","My Components",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.get_react().createElement(kdlyticsgui.mui.my_grid,(function (){var obj37849 = ({"direction":"row","gap":"30px","children":new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.get_react().createElement(kdlyticsgui.mui.my_grid,(function (){var obj37851 = ({"direction":"column","gap":"20px","children":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.get_react().createElement(kdlyticsgui.mui.select_input_simple,(function (){var obj37853 = ({"label-text":"Portfolio","choices":cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = (function kdlyticsgui$guitools$mui_dev_render_$_iter__37855(s__37856){
return (new cljs.core.LazySeq(null,(function (){
var s__37856__$1 = s__37856;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__37856__$1);
if(temp__5804__auto__){
var s__37856__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37856__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__37856__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__37858 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__37857 = (0);
while(true){
if((i__37857 < size__5522__auto__)){
var p = cljs.core._nth(c__5521__auto__,i__37857);
cljs.core.chunk_append(b__37858,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null));

var G__37903 = (i__37857 + (1));
i__37857 = G__37903;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37858),kdlyticsgui$guitools$mui_dev_render_$_iter__37855(cljs.core.chunk_rest(s__37856__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37858),null);
}
} else {
var p = cljs.core.first(s__37856__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null),kdlyticsgui$guitools$mui_dev_render_$_iter__37855(cljs.core.rest(s__37856__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(portfolio);
})()),"on-change":(function (p1__37837_SHARP_){
return cljs.core.reset_BANG_(kdlyticsgui.guitools.select_result,kdlyticsgui.mui.event_value(p1__37837_SHARP_));
})});
return obj37853;
})()),helix.core.get_react().createElement(kdlyticsgui.mui.text_simple,(function (){var obj37861 = ({"variant":"body1","text":cljs.core.deref(kdlyticsgui.guitools.select_result),"color":"white"});
return obj37861;
})())], null)});
return obj37851;
})()),helix.core.get_react().createElement(kdlyticsgui.mui.my_grid,(function (){var obj37863 = ({"direction":"column","gap":"20px","children":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.get_react().createElement(kdlyticsgui.mui.select_input_search,(function (){var obj37865 = ({"label-text":"Select a portfolio","choices":cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = (function kdlyticsgui$guitools$mui_dev_render_$_iter__37866(s__37867){
return (new cljs.core.LazySeq(null,(function (){
var s__37867__$1 = s__37867;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__37867__$1);
if(temp__5804__auto__){
var s__37867__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37867__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__37867__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__37869 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__37868 = (0);
while(true){
if((i__37868 < size__5522__auto__)){
var p = cljs.core._nth(c__5521__auto__,i__37868);
cljs.core.chunk_append(b__37869,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null));

var G__37906 = (i__37868 + (1));
i__37868 = G__37906;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37869),kdlyticsgui$guitools$mui_dev_render_$_iter__37866(cljs.core.chunk_rest(s__37867__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37869),null);
}
} else {
var p = cljs.core.first(s__37867__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p], null),kdlyticsgui$guitools$mui_dev_render_$_iter__37866(cljs.core.rest(s__37867__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(portfolio);
})()),"on-change":(function (p1__37839_SHARP_,p2__37838_SHARP_){
return cljs.core.reset_BANG_(kdlyticsgui.guitools.autocomplete_result,kdlyticsgui.mui.synthetic_event_value(p2__37838_SHARP_));
})});
return obj37865;
})()),helix.core.get_react().createElement(kdlyticsgui.mui.text_simple,(function (){var obj37872 = ({"variant":"body1","text":cljs.core.deref(kdlyticsgui.guitools.autocomplete_result),"color":"white"});
return obj37872;
})())], null)});
return obj37863;
})()),helix.core.get_react().createElement(kdlyticsgui.mui.my_grid,(function (){var obj37874 = ({"direction":"column","gap":"20px","children":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.get_react().createElement(kdlyticsgui.mui.radio_group_button,(function (){var obj37876 = ({"title":"Make a choice","list":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"choice1",new cljs.core.Keyword(null,"label","label",1718410804),"Choice 1"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"choice2",new cljs.core.Keyword(null,"label","label",1718410804),"Choice 2"], null)], null),"on-change":(function (p1__37840_SHARP_){
return cljs.core.reset_BANG_(kdlyticsgui.guitools.radio_group_result,kdlyticsgui.mui.event_value(p1__37840_SHARP_));
})});
return obj37876;
})()),helix.core.get_react().createElement(kdlyticsgui.mui.text_simple,(function (){var obj37878 = ({"variant":"body1","text":cljs.core.deref(kdlyticsgui.guitools.radio_group_result),"color":"white"});
return obj37878;
})())], null)});
return obj37874;
})()),helix.core.get_react().createElement(kdlyticsgui.mui.my_grid,(function (){var obj37880 = ({"direction":"column","gap":"20px","children":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.get_react().createElement(kdlyticsgui.mui.slider_simple,(function (){var obj37882 = ({"width":"200px","on-change":(function (p1__37841_SHARP_){
return cljs.core.reset_BANG_(kdlyticsgui.guitools.slider_result,kdlyticsgui.mui.event_value(p1__37841_SHARP_));
})});
return obj37882;
})()),helix.core.get_react().createElement(kdlyticsgui.mui.text_simple,(function (){var obj37884 = ({"variant":"body1","text":cljs.core.deref(kdlyticsgui.guitools.slider_result),"color":"white"});
return obj37884;
})())], null)});
return obj37880;
})()),helix.core.get_react().createElement(kdlyticsgui.mui.my_grid,(function (){var obj37886 = ({"direction":"column","gap":"20px","children":new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.get_react().createElement(kdlyticsgui.mui.button_simple,(function (){var obj37888 = ({"variant":"contained","text":"Fetch","on-click":(function (){
return cljs.core.reset_BANG_(kdlyticsgui.guitools.button_result,"Fetch");
})});
return obj37888;
})()),helix.core.get_react().createElement(kdlyticsgui.mui.button_simple,(function (){var obj37890 = ({"variant":"outlined","text":"Refresh","on-click":(function (){
return cljs.core.reset_BANG_(kdlyticsgui.guitools.button_result,"Refresh");
})});
return obj37890;
})()),helix.core.get_react().createElement(kdlyticsgui.mui.text_simple,(function (){var obj37892 = ({"variant":"body1","text":cljs.core.deref(kdlyticsgui.guitools.button_result),"color":"white"});
return obj37892;
})())], null)});
return obj37886;
})())], null)});
return obj37849;
})())], null))], null);
});
if(goog.DEBUG === true){
var G__37893 = G__37844;
(G__37893.displayName = "kdlyticsgui.guitools/mui-dev");

return G__37893;
} else {
return G__37844;
}
})();




//# sourceMappingURL=kdlyticsgui.guitools.js.map
