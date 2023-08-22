goog.provide('kdlyticsgui.guitools');
var module$node_modules$$mui$material$node$index=shadow.js.require("module$node_modules$$mui$material$node$index", {});

kdlyticsgui.guitools.switch_helix = (function (){var G__33004 = (function kdlyticsgui$guitools$switch_helix_render(props__29224__auto__,maybe_ref__29225__auto__){
var vec__33005 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__29224__auto__),maybe_ref__29225__auto__], null);
var map__33008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33005,(0),null);
var map__33008__$1 = cljs.core.__destructure_map(map__33008);
var checked_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33008__$1,new cljs.core.Keyword(null,"checked-atom","checked-atom",-1948477891));
var default_checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33008__$1,new cljs.core.Keyword(null,"default-checked","default-checked",1039965863));

var vec__33009 = helix.hooks.use_state(default_checked);
var checked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33009,(0),null);
var setChecked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33009,(1),null);
var x = (function (){var G__33012 = helix.hooks.wrap_fx((function (){
return cljs.core.reset_BANG_(checked_atom,checked);
}));
var G__33013 = [checked];
return (helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__33012,G__33013) : helix.hooks.raw_use_effect.call(null,G__33012,G__33013));
})();
return helix.core.get_react().createElement(module$node_modules$$mui$material$node$index.Switch,(function (){var obj33015 = ({"size":"small","checked":checked,"onChange":(function (e){
var G__33016 = (e["target"]["checked"]);
return (setChecked.cljs$core$IFn$_invoke$arity$1 ? setChecked.cljs$core$IFn$_invoke$arity$1(G__33016) : setChecked.call(null,G__33016));
})});
return obj33015;
})());
});
if(goog.DEBUG === true){
var G__33017 = G__33004;
(G__33017.displayName = "kdlyticsgui.guitools/switch-helix");

return G__33017;
} else {
return G__33004;
}
})();



kdlyticsgui.guitools.mrt_right_element_box_generic = (function kdlyticsgui$guitools$mrt_right_element_box_generic(id,width,title_str,opts,children){
var show_element = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (function (id__$1,width__$1,title_str__$1,opts__$1,children__$1){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rightelement",new cljs.core.Keyword(null,"gap","gap",80255254),"0px",new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),title_str__$1,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"show-hide","show-hide",1629953520).cljs$core$IFn$_invoke$arity$1(opts__$1))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.get_react().createElement(kdlyticsgui.guitools.switch_helix,(function (){var obj33020 = ({"checked-atom":show_element,"default-checked":cljs.core.not(new cljs.core.Keyword(null,"hide-by-default","hide-by-default",1193244557).cljs$core$IFn$_invoke$arity$1(opts__$1))});
return obj33020;
})())], null):null))], null)], null),(cljs.core.truth_(cljs.core.deref(show_element))?children__$1:null))], null);
});
});
kdlyticsgui.guitools.mrt_element_box_generic = (function kdlyticsgui$guitools$mrt_element_box_generic(id,width,title_str,opts,children){
var show_element = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (function (id__$1,width__$1,title_str__$1,opts__$1,children__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id__$1], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.conj.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),title_str__$1,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null)], null))], null)], null),(cljs.core.truth_(cljs.core.deref(show_element))?children__$1:null))], null)], null);
});
});
/**
 * opts will have either :download-table or :on-click-action, and can have target-id
 *   
 */
kdlyticsgui.guitools.element_box_generic = (function kdlyticsgui$guitools$element_box_generic(id,width,title_str,opts,children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),title_str,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),["zmdi-collection-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),["Saved view ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),new cljs.core.Keyword(null,"above-center","above-center",1960103104),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810).cljs$core$IFn$_invoke$arity$1(opts)], null))),i))?"active":"default"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810).cljs$core$IFn$_invoke$arity$1(opts),i], null));
})], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(5))):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.not(new cljs.core.Keyword(null,"no-icons","no-icons",-326180685).cljs$core$IFn$_invoke$arity$1(opts)))?cljs.core.PersistentVector.EMPTY:null)], 0))], null)], null),children)], null)], null);
});
kdlyticsgui.guitools.element_box = (function kdlyticsgui$guitools$element_box(var_args){
var G__33027 = arguments.length;
switch (G__33027) {
case 5:
return kdlyticsgui.guitools.element_box.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return kdlyticsgui.guitools.element_box.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kdlyticsgui.guitools.element_box.cljs$core$IFn$_invoke$arity$5 = (function (id,width,title_str,download_table,children){
return kdlyticsgui.guitools.element_box_generic(id,width,title_str,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"download-table","download-table",-2071629103),download_table], null),children);
}));

(kdlyticsgui.guitools.element_box.cljs$core$IFn$_invoke$arity$6 = (function (id,width,title_str,download_table,on_click_action,children){
return kdlyticsgui.guitools.element_box_generic(id,width,title_str,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click-action","on-click-action",843467408),on_click_action], null),children);
}));

(kdlyticsgui.guitools.element_box.cljs$lang$maxFixedArity = 6);

kdlyticsgui.guitools.portfolio_dropdown_selector = (function kdlyticsgui$guitools$portfolio_dropdown_selector(var_args){
var G__33032 = arguments.length;
switch (G__33032) {
case 1:
return kdlyticsgui.guitools.portfolio_dropdown_selector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return kdlyticsgui.guitools.portfolio_dropdown_selector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kdlyticsgui.guitools.portfolio_dropdown_selector.cljs$core$IFn$_invoke$arity$1 = (function (re_frame_db_key){
return kdlyticsgui.guitools.portfolio_dropdown_selector.cljs$core$IFn$_invoke$arity$2(re_frame_db_key,re_frame_db_key);
}));

(kdlyticsgui.guitools.portfolio_dropdown_selector.cljs$core$IFn$_invoke$arity$2 = (function (re_frame_db_key,on_change_key_event){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),"125px",new cljs.core.Keyword(null,"filter-box?","filter-box?",-1157583688),true,new cljs.core.Keyword(null,"model","model",331153215),re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame_db_key], null)),new cljs.core.Keyword(null,"choices","choices",1385611597),cljs.core.map.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rot13","rot13",-631596017)], null))))?(function (p1__33028_SHARP_){
return clojure.set.rename_keys(p1__33028_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"labelrot13","labelrot13",900679140),new cljs.core.Keyword(null,"label","label",1718410804)], null));
}):cljs.core.identity),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolio-dropdown-map","portfolio-dropdown-map",-593320226)], null)))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__33029_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_change_key_event,p1__33029_SHARP_], null));
})], null);
}));

(kdlyticsgui.guitools.portfolio_dropdown_selector.cljs$lang$maxFixedArity = 2);

re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("quant-model-new-bond","save-bond-response","quant-model-new-bond/save-bond-response",1787467136),(function (db,p__33033){
var vec__33034 = p__33033;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33034,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33034,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(data))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("quant-model","new-bond-entry","quant-model/new-bond-entry",-985331617),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("quant-model","new-bond-saved-message","quant-model/new-bond-saved-message",2087064975),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(data)], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("quant-model","new-bond-saved-message","quant-model/new-bond-saved-message",2087064975),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(data));
}
}));
kdlyticsgui.guitools.update_js_map = (function kdlyticsgui$guitools$update_js_map(var_args){
var G__33038 = arguments.length;
switch (G__33038) {
case 3:
return kdlyticsgui.guitools.update_js_map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return kdlyticsgui.guitools.update_js_map.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kdlyticsgui.guitools.update_js_map.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
return cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(m),k,v));
}));

(kdlyticsgui.guitools.update_js_map.cljs$core$IFn$_invoke$arity$5 = (function (m,k1,v1,k2,v2){
return cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(m),k1,v1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k2,v2], 0)));
}));

(kdlyticsgui.guitools.update_js_map.cljs$lang$maxFixedArity = 5);

re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-table-js-state","update-table-js-state",-120377066),(function (db,p__33040){
var vec__33041 = p__33040;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33041,(0),null);
var table = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33041,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33041,(2),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33041,(3),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(table,"mrt-table-state"),(function (p1__33039_SHARP_){
return cljs.core.clj__GT_js(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,"columnFilters"))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__33039_SHARP_),item,value):cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__33039_SHARP_),item,value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["expanded","dummy:"], 0))));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tree-table-toggle-esg","tree-table-toggle-esg",-2109727108),(function (db,p__33065){
var vec__33066 = p__33065;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33066,(0),null);
var display_style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33066,(1),null);
var grouping = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(display_style,"sector"))?"sector":"country");
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("esg","data-tree","esg/data-tree",1310238199),(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(display_style,"no")))),new cljs.core.Keyword("esg","mrt-table-state","esg/mrt-table-state",-372208931),(function (p1__33056_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(display_style,"no")){
return kdlyticsgui.guitools.update_js_map.cljs$core$IFn$_invoke$arity$5(p1__33056_SHARP_,"grouping",cljs.core.PersistentVector.EMPTY,"expanded",cljs.core.PersistentArrayMap.EMPTY);
} else {
return kdlyticsgui.guitools.update_js_map.cljs$core$IFn$_invoke$arity$5(p1__33056_SHARP_,"grouping",cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grouping], null)),"expanded",cljs.core.PersistentArrayMap.EMPTY);
}
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tree-table-toggle-ta","tree-table-toggle-ta",-997395897),(function (db,p__33074){
var vec__33075 = p__33074;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33075,(0),null);
var grp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33075,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("ta-trade-view","mrt-table-state","ta-trade-view/mrt-table-state",1059210316),(function (p1__33073_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(grp,"No")){
return kdlyticsgui.guitools.update_js_map.cljs$core$IFn$_invoke$arity$5(p1__33073_SHARP_,"grouping",cljs.core.PersistentVector.EMPTY,"expanded",cljs.core.PersistentArrayMap.EMPTY);
} else {
return kdlyticsgui.guitools.update_js_map.cljs$core$IFn$_invoke$arity$5(p1__33073_SHARP_,"grouping",cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dummy"], null)),"expanded",new cljs.core.PersistentArrayMap(null, 1, ["dummy:",true], null));
}
}));
}));
kdlyticsgui.guitools.redesign_table_BANG_ = (function kdlyticsgui$guitools$redesign_table_BANG_(tbl,table_QMARK_,grouping,extra_pins){
var all_cols = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(tbl.getAllColumns().filter((function (p1__33078_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__33078_SHARP_.id,"mrt-row-expand");
})).map((function (c){
return c.columns.map((function (sc){
return sc.id;
}));
})));
var additional_cols = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(grouping,extra_pins)),cljs.core.first(all_cols));
tbl.setGrouping((cljs.core.truth_(table_QMARK_)?[]:cljs.core.clj__GT_js(grouping)));

tbl.setColumnPinning(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(grouping,extra_pins,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(table_QMARK_)?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mrt-row-expand"], null))], 0)),new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.PersistentVector.EMPTY], null)));

tbl.setExpanded(({"dummy:": true}));

tbl.setPagination(({"pageSize": (cljs.core.truth_(table_QMARK_)?(15):(50))}));

tbl.setSorting(cljs.core.clj__GT_js(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (g){
return new cljs.core.PersistentArrayMap(null, 2, ["id",g,"desc",false], null);
}),(function (){var G__33080 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(grouping,extra_pins);
var fexpr__33079 = (cljs.core.truth_(table_QMARK_)?cljs.core.identity:cljs.core.rest);
return (fexpr__33079.cljs$core$IFn$_invoke$arity$1 ? fexpr__33079.cljs$core$IFn$_invoke$arity$1(G__33080) : fexpr__33079.call(null,G__33080));
})())));

tbl.setColumnVisibility((cljs.core.truth_(table_QMARK_)?({"dummy": false, "mrt-row-expand": false}):({"dummy": true, "mrt-row-expand": true})));

return tbl.setColumnOrder(cljs.core.clj__GT_js(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(grouping,extra_pins,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(table_QMARK_)?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mrt-row-expand"], null)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.rest(all_cols)),additional_cols], 0))));
});
kdlyticsgui.guitools.left_nav_bar = (function kdlyticsgui$guitools$left_nav_bar(choices,navigation_key){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"class","class",-2030961996),"leftnavbar",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = (function kdlyticsgui$guitools$left_nav_bar_$_iter__33081(s__33082){
return (new cljs.core.LazySeq(null,(function (){
var s__33082__$1 = s__33082;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33082__$1);
if(temp__5804__auto__){
var s__33082__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33082__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__33082__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__33084 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__33083 = (0);
while(true){
if((i__33083 < size__5522__auto__)){
var item = cljs.core._nth(c__5521__auto__,i__33083);
cljs.core.chunk_append(b__33084,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-primary btn-block",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [navigation_key], null))),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?" active":null)].join(''),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__33083,item,c__5521__auto__,size__5522__auto__,b__33084,s__33082__$2,temp__5804__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [navigation_key,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)], null));
});})(i__33083,item,c__5521__auto__,size__5522__auto__,b__33084,s__33082__$2,temp__5804__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__33099 = (i__33083 + (1));
i__33083 = G__33099;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33084),kdlyticsgui$guitools$left_nav_bar_$_iter__33081(cljs.core.chunk_rest(s__33082__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33084),null);
}
} else {
var item = cljs.core.first(s__33082__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-primary btn-block",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [navigation_key], null))),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?" active":null)].join(''),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__33082__$2,temp__5804__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [navigation_key,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)], null));
});})(item,s__33082__$2,temp__5804__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),kdlyticsgui$guitools$left_nav_bar_$_iter__33081(cljs.core.rest(s__33082__$2)));
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

//# sourceMappingURL=kdlyticsgui.guitools.js.map
