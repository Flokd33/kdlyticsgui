goog.provide('kdlyticsgui.guitools');
var module$node_modules$$mui$material$node$index=shadow.js.require("module$node_modules$$mui$material$node$index", {});

kdlyticsgui.guitools.switch_helix = (function (){var G__42457 = (function kdlyticsgui$guitools$switch_helix_render(props__29990__auto__,maybe_ref__29991__auto__){
var vec__42458 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__29990__auto__),maybe_ref__29991__auto__], null);
var map__42461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42458,(0),null);
var map__42461__$1 = cljs.core.__destructure_map(map__42461);
var checked_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42461__$1,new cljs.core.Keyword(null,"checked-atom","checked-atom",-1948477891));
var default_checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42461__$1,new cljs.core.Keyword(null,"default-checked","default-checked",1039965863));

var vec__42462 = helix.hooks.use_state(default_checked);
var checked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42462,(0),null);
var setChecked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42462,(1),null);
var x = (function (){var G__42465 = helix.hooks.wrap_fx((function (){
return cljs.core.reset_BANG_(checked_atom,checked);
}));
var G__42466 = [checked];
return (helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__42465,G__42466) : helix.hooks.raw_use_effect.call(null,G__42465,G__42466));
})();
return helix.core.get_react().createElement(module$node_modules$$mui$material$node$index.Switch,(function (){var obj42468 = ({"size":"small","checked":checked,"onChange":(function (e){
var G__42469 = (e["target"]["checked"]);
return (setChecked.cljs$core$IFn$_invoke$arity$1 ? setChecked.cljs$core$IFn$_invoke$arity$1(G__42469) : setChecked.call(null,G__42469));
})});
return obj42468;
})());
});
if(goog.DEBUG === true){
var G__42470 = G__42457;
(G__42470.displayName = "kdlyticsgui.guitools/switch-helix");

return G__42470;
} else {
return G__42457;
}
})();



kdlyticsgui.guitools.mrt_right_element_box_generic = (function kdlyticsgui$guitools$mrt_right_element_box_generic(id,width,title_str,opts,children){
var show_element = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (function (id__$1,width__$1,title_str__$1,opts__$1,children__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id__$1], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rightelement",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),title_str__$1,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"show-hide","show-hide",1629953520).cljs$core$IFn$_invoke$arity$1(opts__$1))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.get_react().createElement(kdlyticsgui.guitools.switch_helix,(function (){var obj42472 = ({"checked-atom":show_element,"default-checked":cljs.core.not(new cljs.core.Keyword(null,"hide-by-default","hide-by-default",1193244557).cljs$core$IFn$_invoke$arity$1(opts__$1))});
return obj42472;
})())], null):null))], null)], null),(cljs.core.truth_(cljs.core.deref(show_element))?children__$1:null))], null)], null);
});
});
kdlyticsgui.guitools.mrt_element_box_generic = (function kdlyticsgui$guitools$mrt_element_box_generic(id,width,title_str,opts,children){
var show_element = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (function (id__$1,width__$1,title_str__$1,opts__$1,children__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id__$1], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.conj.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),title_str__$1,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null)], null))], null)], null),(cljs.core.truth_(cljs.core.deref(show_element))?children__$1:null))], null)], null);
});
});
kdlyticsgui.guitools.mrt_element_box_generic_old = (function kdlyticsgui$guitools$mrt_element_box_generic_old(id,width,title_str,opts,children){
var show_element = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (function (id__$1,width__$1,title_str__$1,opts__$1,children__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id__$1], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),title_str__$1,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810).cljs$core$IFn$_invoke$arity$1(opts__$1))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),["zmdi-collection-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),["Saved view ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),new cljs.core.Keyword(null,"above-center","above-center",1960103104),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810).cljs$core$IFn$_invoke$arity$1(opts__$1)], null))),i))?"active":"default"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810).cljs$core$IFn$_invoke$arity$1(opts__$1),i], null));
})], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(5))):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(new cljs.core.Keyword(null,"show-hide","show-hide",1629953520).cljs$core$IFn$_invoke$arity$1(opts__$1))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.get_react().createElement(kdlyticsgui.guitools.switch_helix,(function (){var obj42474 = ({"checked-atom":show_element,"default-checked":cljs.core.not(new cljs.core.Keyword(null,"hide-by-default","hide-by-default",1193244557).cljs$core$IFn$_invoke$arity$1(opts__$1))});
return obj42474;
})())], null):null)], 0))], null)], null),(cljs.core.truth_(cljs.core.deref(show_element))?children__$1:null))], null)], null);
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
var G__42476 = arguments.length;
switch (G__42476) {
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
var G__42480 = arguments.length;
switch (G__42480) {
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
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),"125px",new cljs.core.Keyword(null,"filter-box?","filter-box?",-1157583688),true,new cljs.core.Keyword(null,"model","model",331153215),re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame_db_key], null)),new cljs.core.Keyword(null,"choices","choices",1385611597),cljs.core.map.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rot13","rot13",-631596017)], null))))?(function (p1__42477_SHARP_){
return clojure.set.rename_keys(p1__42477_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"labelrot13","labelrot13",900679140),new cljs.core.Keyword(null,"label","label",1718410804)], null));
}):cljs.core.identity),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolio-dropdown-map","portfolio-dropdown-map",-593320226)], null)))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__42478_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_change_key_event,p1__42478_SHARP_], null));
})], null);
}));

(kdlyticsgui.guitools.portfolio_dropdown_selector.cljs$lang$maxFixedArity = 2);

re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("quant-model-new-bond","save-bond-response","quant-model-new-bond/save-bond-response",1787467136),(function (db,p__42481){
var vec__42482 = p__42481;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42482,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42482,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(data))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("quant-model","new-bond-entry","quant-model/new-bond-entry",-985331617),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("quant-model","new-bond-saved-message","quant-model/new-bond-saved-message",2087064975),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(data)], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("quant-model","new-bond-saved-message","quant-model/new-bond-saved-message",2087064975),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(data));
}
}));
kdlyticsgui.guitools.update_js_map = (function kdlyticsgui$guitools$update_js_map(var_args){
var G__42486 = arguments.length;
switch (G__42486) {
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

re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-table-js-state","update-table-js-state",-120377066),(function (db,p__42488){
var vec__42489 = p__42488;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42489,(0),null);
var table = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42489,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42489,(2),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42489,(3),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(table,"mrt-table-state"),(function (p1__42487_SHARP_){
return cljs.core.clj__GT_js(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,"columnFilters"))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__42487_SHARP_),item,value):cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__42487_SHARP_),item,value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["expanded","dummy:"], 0))));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tree-table-toggle","tree-table-toggle",1639472153),(function (db,p__42494){
var vec__42495 = p__42494;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42495,(0),null);
var tbl_kw_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42495,(1),null);
var display_style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42495,(2),null);
var grouping = ((clojure.string.includes_QMARK_(tbl_kw_str,"attribution"))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accessorKey","accessorKey",-1383292807),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(kdlyticsgui.mrttables.attribution_table_columns,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["None",null], null), null),cljs.core.vals(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tbl_kw_str,"filter"))))))),"dummy"):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accessorKey","accessorKey",-1383292807),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(kdlyticsgui.mrttables.risk_table_columns,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["None",null], null), null),cljs.core.vals(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tbl_kw_str,"filter"))))))),"dummy"));
if(clojure.string.includes_QMARK_(tbl_kw_str,"attribution")){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tbl_kw_str,"display-style"),display_style),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tbl_kw_str,"mrt-table-state"),(function (p1__42492_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(display_style,"Table")){
return kdlyticsgui.guitools.update_js_map.cljs$core$IFn$_invoke$arity$5(p1__42492_SHARP_,"grouping",cljs.core.PersistentVector.EMPTY,"expanded",cljs.core.PersistentArrayMap.EMPTY);
} else {
return kdlyticsgui.guitools.update_js_map.cljs$core$IFn$_invoke$arity$5(p1__42492_SHARP_,"grouping",grouping,"expanded",new cljs.core.PersistentArrayMap(null, 1, ["dummy:",true], null));
}
}));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tbl_kw_str,"display-style"),display_style),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tbl_kw_str,"hide-zero-holdings"),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(display_style,"Table")),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tbl_kw_str,"mrt-table-state"),(function (p1__42493_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(display_style,"Table")){
return kdlyticsgui.guitools.update_js_map.cljs$core$IFn$_invoke$arity$5(p1__42493_SHARP_,"grouping",cljs.core.PersistentVector.EMPTY,"expanded",cljs.core.PersistentArrayMap.EMPTY);
} else {
return kdlyticsgui.guitools.update_js_map.cljs$core$IFn$_invoke$arity$5(p1__42493_SHARP_,"grouping",grouping,"expanded",new cljs.core.PersistentArrayMap(null, 1, ["dummy:",true], null));
}
}));
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tree-table-toggle-alignment","tree-table-toggle-alignment",-1566929623),(function (db,p__42500){
var vec__42501 = p__42500;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42501,(0),null);
var tbl_kw_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42501,(1),null);
var display_style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42501,(2),null);
var is_equity_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42501,(3),null);
var risk_choices = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["None",null], null), null),cljs.core.vals(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tbl_kw_str,"filter"))))));
var risk_choices_clean = (cljs.core.truth_(is_equity_QMARK_)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sector","sector",-1444247062),null], null), null),risk_choices),new cljs.core.Keyword(null,"sector","sector",-1444247062)))?cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__42498_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__42498_SHARP_,new cljs.core.Keyword(null,"sector","sector",-1444247062));
}),risk_choices),new cljs.core.Keyword(null,"sector-gics","sector-gics",-543820638)))):risk_choices):risk_choices);
var grouping = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accessorKey","accessorKey",-1383292807),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(kdlyticsgui.mrttables.risk_table_columns,risk_choices_clean)),"dummy");
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tbl_kw_str,"display-style"),display_style),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tbl_kw_str,"mrt-table-state"),(function (p1__42499_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(display_style,"Table")){
return kdlyticsgui.guitools.update_js_map.cljs$core$IFn$_invoke$arity$5(p1__42499_SHARP_,"grouping",cljs.core.PersistentVector.EMPTY,"expanded",cljs.core.PersistentArrayMap.EMPTY);
} else {
return kdlyticsgui.guitools.update_js_map.cljs$core$IFn$_invoke$arity$5(p1__42499_SHARP_,"grouping",grouping,"expanded",new cljs.core.PersistentArrayMap(null, 1, ["dummy:",true], null));
}
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tree-table-toggle-esg","tree-table-toggle-esg",-2109727108),(function (db,p__42505){
var vec__42506 = p__42505;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42506,(0),null);
var display_style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42506,(1),null);
var grouping = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(display_style,"sector"))?"sector":"country");
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("esg","data-tree","esg/data-tree",1310238199),(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(display_style,"no")))),new cljs.core.Keyword("esg","mrt-table-state","esg/mrt-table-state",-372208931),(function (p1__42504_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(display_style,"no")){
return kdlyticsgui.guitools.update_js_map.cljs$core$IFn$_invoke$arity$5(p1__42504_SHARP_,"grouping",cljs.core.PersistentVector.EMPTY,"expanded",cljs.core.PersistentArrayMap.EMPTY);
} else {
return kdlyticsgui.guitools.update_js_map.cljs$core$IFn$_invoke$arity$5(p1__42504_SHARP_,"grouping",cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grouping], null)),"expanded",cljs.core.PersistentArrayMap.EMPTY);
}
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tree-table-toggle-ta","tree-table-toggle-ta",-997395897),(function (db,p__42510){
var vec__42511 = p__42510;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42511,(0),null);
var grp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42511,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("ta-trade-view","mrt-table-state","ta-trade-view/mrt-table-state",1059210316),(function (p1__42509_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(grp,"No")){
return kdlyticsgui.guitools.update_js_map.cljs$core$IFn$_invoke$arity$5(p1__42509_SHARP_,"grouping",cljs.core.PersistentVector.EMPTY,"expanded",cljs.core.PersistentArrayMap.EMPTY);
} else {
return kdlyticsgui.guitools.update_js_map.cljs$core$IFn$_invoke$arity$5(p1__42509_SHARP_,"grouping",cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dummy"], null)),"expanded",new cljs.core.PersistentArrayMap(null, 1, ["dummy:",true], null));
}
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"filtering-row-change","filtering-row-change",1183518055),(function (db,p__42515){
var vec__42516 = p__42515;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42516,(0),null);
var risk_filter_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42516,(1),null);
var risk_filter_nb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42516,(2),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42516,(3),null);
var tbl_kw_str = cljs.core.namespace(risk_filter_key);
var rfv = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,risk_filter_key),risk_filter_nb,value);
var grouping = ((clojure.string.includes_QMARK_(tbl_kw_str,"attribution"))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accessorKey","accessorKey",-1383292807),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(kdlyticsgui.mrttables.attribution_table_columns,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["None",null], null), null),cljs.core.vals(rfv))))),"dummy"):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accessorKey","accessorKey",-1383292807),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(kdlyticsgui.mrttables.risk_table_columns,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["None",null], null), null),cljs.core.vals(rfv))))),"dummy"));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,risk_filter_key,rfv),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tbl_kw_str,"mrt-table-state"),(function (p1__42514_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__42519 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tbl_kw_str,"display-style");
return (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(G__42519) : db.call(null,G__42519));
})(),"Table")){
return cljs.core.identity(p1__42514_SHARP_);
} else {
return kdlyticsgui.guitools.update_js_map.cljs$core$IFn$_invoke$arity$5(p1__42514_SHARP_,"grouping",grouping,"expanded",new cljs.core.PersistentArrayMap(null, 1, ["dummy:",true], null));
}
})),new cljs.core.Keyword("portfolio-history","data","portfolio-history/data",-1727675342),cljs.core.PersistentVector.EMPTY);
}));
kdlyticsgui.guitools.redesign_table_BANG_ = (function kdlyticsgui$guitools$redesign_table_BANG_(tbl,table_QMARK_,grouping,extra_pins){
var all_cols = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(tbl.getAllColumns().filter((function (p1__42520_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__42520_SHARP_.id,"mrt-row-expand");
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
}),(function (){var G__42522 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(grouping,extra_pins);
var fexpr__42521 = (cljs.core.truth_(table_QMARK_)?cljs.core.identity:cljs.core.rest);
return (fexpr__42521.cljs$core$IFn$_invoke$arity$1 ? fexpr__42521.cljs$core$IFn$_invoke$arity$1(G__42522) : fexpr__42521.call(null,G__42522));
})())));

tbl.setColumnVisibility((cljs.core.truth_(table_QMARK_)?({"dummy": false, "mrt-row-expand": false}):({"dummy": true, "mrt-row-expand": true})));

return tbl.setColumnOrder(cljs.core.clj__GT_js(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(grouping,extra_pins,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(table_QMARK_)?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mrt-row-expand"], null)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.rest(all_cols)),additional_cols], 0))));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"filtering-row-change-managed","filtering-row-change-managed",254844995),(function (p__42524,p__42525){
var map__42526 = p__42524;
var map__42526__$1 = cljs.core.__destructure_map(map__42526);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42526__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42527 = p__42525;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42527,(0),null);
var risk_filter_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42527,(1),null);
var risk_filter_nb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42527,(2),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42527,(3),null);
var tbl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42527,(4),null);
var tbl_kw_str = cljs.core.namespace(risk_filter_key);
var rfv = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,risk_filter_key),risk_filter_nb,value);
var grouping = ((clojure.string.includes_QMARK_(tbl_kw_str,"attribution"))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accessorKey","accessorKey",-1383292807),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(kdlyticsgui.mrttables.attribution_table_columns,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["None",null], null), null),cljs.core.vals(rfv))))),"dummy"):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accessorKey","accessorKey",-1383292807),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(kdlyticsgui.mrttables.risk_table_columns,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["None",null], null), null),cljs.core.vals(rfv))))),"dummy"));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,risk_filter_key,rfv),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tbl_kw_str,"mrt-table-state"),(function (p1__42523_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__42530 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tbl_kw_str,"display-style");
return (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(G__42530) : db.call(null,G__42530));
})(),"Table")){
return cljs.core.identity(p1__42523_SHARP_);
} else {
return kdlyticsgui.guitools.update_js_map.cljs$core$IFn$_invoke$arity$5(p1__42523_SHARP_,"grouping",grouping,"expanded",new cljs.core.PersistentArrayMap(null, 1, ["dummy:",true], null));
}
})),new cljs.core.Keyword("portfolio-history","data","portfolio-history/data",-1727675342),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((clojure.string.includes_QMARK_(tbl_kw_str,"attribution"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"redesign-single-attribution-table","redesign-single-attribution-table",2022136712),tbl], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"redesign-single-portfolio-table","redesign-single-portfolio-table",644891693),tbl], null)], null))], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tree-table-toggle-managed","tree-table-toggle-managed",1598666646),(function (p__42533,p__42534){
var map__42535 = p__42533;
var map__42535__$1 = cljs.core.__destructure_map(map__42535);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42535__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42536 = p__42534;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42536,(0),null);
var tbl_kw_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42536,(1),null);
var display_style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42536,(2),null);
var tbl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42536,(3),null);
var grouping = ((clojure.string.includes_QMARK_(tbl_kw_str,"attribution"))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accessorKey","accessorKey",-1383292807),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(kdlyticsgui.mrttables.attribution_table_columns,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["None",null], null), null),cljs.core.vals(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tbl_kw_str,"filter"))))))),"dummy"):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accessorKey","accessorKey",-1383292807),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(kdlyticsgui.mrttables.risk_table_columns,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["None",null], null), null),cljs.core.vals(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tbl_kw_str,"filter"))))))),"dummy"));
var extra_pins = ((clojure.string.includes_QMARK_(tbl_kw_str,"attribution"))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NAME","NAME",-1127916515)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),((clojure.string.includes_QMARK_(tbl_kw_str,"attribution"))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tbl_kw_str,"display-style"),display_style),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tbl_kw_str,"mrt-table-state"),(function (p1__42531_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(display_style,"Table")){
return kdlyticsgui.guitools.update_js_map.cljs$core$IFn$_invoke$arity$5(p1__42531_SHARP_,"grouping",cljs.core.PersistentVector.EMPTY,"expanded",cljs.core.PersistentArrayMap.EMPTY);
} else {
return kdlyticsgui.guitools.update_js_map.cljs$core$IFn$_invoke$arity$5(p1__42531_SHARP_,"grouping",grouping,"expanded",new cljs.core.PersistentArrayMap(null, 1, ["dummy:",true], null));
}
})):cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tbl_kw_str,"display-style"),display_style),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tbl_kw_str,"hide-zero-holdings"),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(display_style,"Table")),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tbl_kw_str,"mrt-table-state"),(function (p1__42532_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(display_style,"Table")){
return kdlyticsgui.guitools.update_js_map.cljs$core$IFn$_invoke$arity$5(p1__42532_SHARP_,"grouping",cljs.core.PersistentVector.EMPTY,"expanded",cljs.core.PersistentArrayMap.EMPTY);
} else {
return kdlyticsgui.guitools.update_js_map.cljs$core$IFn$_invoke$arity$5(p1__42532_SHARP_,"grouping",grouping,"expanded",new cljs.core.PersistentArrayMap(null, 1, ["dummy:",true], null));
}
}))),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((clojure.string.includes_QMARK_(tbl_kw_str,"attribution"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"redesign-single-attribution-table","redesign-single-attribution-table",2022136712),tbl], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"redesign-single-portfolio-table","redesign-single-portfolio-table",644891693),tbl], null)], null))], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"redesign-single-portfolio-table","redesign-single-portfolio-table",644891693),(function (db,p__42539){
var vec__42540 = p__42539;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42540,(0),null);
var tbl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42540,(1),null);
kdlyticsgui.guitools.redesign_table_BANG_(tbl,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477)) : db.call(null,new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477))),"Table"),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accessorKey","accessorKey",-1383292807),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(kdlyticsgui.mrttables.risk_table_columns,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["None",null], null), null),cljs.core.vals((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081)) : db.call(null,new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081)))))))),"dummy"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NAME","NAME",-1127916515)], null));

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"redesign-single-attribution-table","redesign-single-attribution-table",2022136712),(function (db,p__42543){
var vec__42544 = p__42543;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42544,(0),null);
var tbl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42544,(1),null);
kdlyticsgui.guitools.redesign_table_BANG_(tbl,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679)) : db.call(null,new cljs.core.Keyword("single-portfolio-attribution","display-style","single-portfolio-attribution/display-style",-1971083679))),"Table"),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accessorKey","accessorKey",-1383292807),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(kdlyticsgui.mrttables.attribution_table_columns,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["None",null], null), null),cljs.core.vals((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267)) : db.call(null,new cljs.core.Keyword("single-portfolio-attribution","filter","single-portfolio-attribution/filter",1964674267)))))))),"dummy"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Security","Security",-778594986)], null));

return db;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),(function (p__42550,p__42551){
var map__42552 = p__42550;
var map__42552__$1 = cljs.core.__destructure_map(map__42552);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42552__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42553 = p__42551;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42553,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42553,(1),null);
var tbl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42553,(2),null);
var shortcuts = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"empty","empty",767870958),(0)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-style","display-style",1017712310),"Table",new cljs.core.Keyword(null,"hide-zero-holdings","hide-zero-holdings",1575598000),true,new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),new cljs.core.Keyword(null,"mrt-table-state","mrt-table-state",-372042346),({"columnFilters": [], "grouping": [], "expanded": ({})})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-style","display-style",1017712310),"Tree",new cljs.core.Keyword(null,"hide-zero-holdings","hide-zero-holdings",1575598000),false,new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"country","country",312965309),(2),new cljs.core.Keyword(null,"sector","sector",-1444247062),(3),"None"], null),new cljs.core.Keyword(null,"mrt-table-state","mrt-table-state",-372042346),({"columnFilters": [], "grouping": ["dummy","qt-risk-country-name","qt-jpm-sector"], "expanded": ({"dummy:": true})})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-style","display-style",1017712310),"Tree",new cljs.core.Keyword(null,"hide-zero-holdings","hide-zero-holdings",1575598000),false,new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"sector","sector",-1444247062),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),"None"], null),new cljs.core.Keyword(null,"mrt-table-state","mrt-table-state",-372042346),({"columnFilters": [], "grouping": ["dummy","qt-jpm-sector","qt-risk-country-name"], "expanded": ({"dummy:": true})})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-style","display-style",1017712310),"Tree",new cljs.core.Keyword(null,"hide-zero-holdings","hide-zero-holdings",1575598000),false,new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"sector","sector",-1444247062),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),new cljs.core.Keyword(null,"mrt-table-state","mrt-table-state",-372042346),({"columnFilters": [], "grouping": ["dummy","qt-jpm-sector","qt-risk-country-name","TICKER"], "expanded": ({"dummy:": true})})], null)], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.reduce_kv((function (p1__42547_SHARP_,p2__42548_SHARP_,p3__42549_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42547_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("single-portfolio-risk",cljs.core.name(p2__42548_SHARP_)),p3__42549_SHARP_);
}),db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(shortcuts,snapshot),"shortcut",snapshot)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"redesign-single-portfolio-table","redesign-single-portfolio-table",644891693),tbl], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-attribution","shortcut","single-portfolio-attribution/shortcut",-1711481988),(function (p__42559,p__42560){
var map__42561 = p__42559;
var map__42561__$1 = cljs.core.__destructure_map(map__42561);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42561__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42562 = p__42560;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42562,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42562,(1),null);
var tbl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42562,(2),null);
var shortcuts = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"empty","empty",767870958),(0)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-style","display-style",1017712310),"Tree",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),new cljs.core.Keyword(null,"mrt-table-state","mrt-table-state",-372042346),({"columnFilters": [], "grouping": ["dummy","Region","Country","Issuer"], "expanded": ({"dummy:": true})})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-style","display-style",1017712310),"Tree",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"country","country",312965309),(2),new cljs.core.Keyword(null,"sector","sector",-1444247062),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),new cljs.core.Keyword(null,"mrt-table-state","mrt-table-state",-372042346),({"columnFilters": [], "grouping": ["dummy","Region","Sector","Issuer"], "expanded": ({"dummy:": true})})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-style","display-style",1017712310),"Tree",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"sector","sector",-1444247062),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),new cljs.core.Keyword(null,"mrt-table-state","mrt-table-state",-372042346),({"columnFilters": [], "grouping": ["dummy","Sector","Country","Issuer"], "expanded": ({"dummy:": true})})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-style","display-style",1017712310),"Tree",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"issuer","issuer",-1199257898),(2),"None",(3),"None"], null),new cljs.core.Keyword(null,"mrt-table-state","mrt-table-state",-372042346),({"columnFilters": [], "grouping": ["dummy","Issuer"], "expanded": ({"dummy:": true})})], null)], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.reduce_kv((function (p1__42556_SHARP_,p2__42557_SHARP_,p3__42558_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42556_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("single-portfolio-attribution",cljs.core.name(p2__42557_SHARP_)),p3__42558_SHARP_);
}),db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(shortcuts,snapshot),"shortcut",snapshot)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"redesign-single-attribution-table","redesign-single-attribution-table",2022136712),tbl], null)], null)], null)], null);
}));
kdlyticsgui.guitools.left_nav_bar = (function kdlyticsgui$guitools$left_nav_bar(choices,navigation_key){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"class","class",-2030961996),"leftnavbar",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = (function kdlyticsgui$guitools$left_nav_bar_$_iter__42565(s__42566){
return (new cljs.core.LazySeq(null,(function (){
var s__42566__$1 = s__42566;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__42566__$1);
if(temp__5804__auto__){
var s__42566__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42566__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__42566__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__42568 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__42567 = (0);
while(true){
if((i__42567 < size__5522__auto__)){
var item = cljs.core._nth(c__5521__auto__,i__42567);
cljs.core.chunk_append(b__42568,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-primary btn-block",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [navigation_key], null))),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?" active":null)].join(''),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__42567,item,c__5521__auto__,size__5522__auto__,b__42568,s__42566__$2,temp__5804__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [navigation_key,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)], null));
});})(i__42567,item,c__5521__auto__,size__5522__auto__,b__42568,s__42566__$2,temp__5804__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__42585 = (i__42567 + (1));
i__42567 = G__42585;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42568),kdlyticsgui$guitools$left_nav_bar_$_iter__42565(cljs.core.chunk_rest(s__42566__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42568),null);
}
} else {
var item = cljs.core.first(s__42566__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-primary btn-block",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [navigation_key], null))),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)))?" active":null)].join(''),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__42566__$2,temp__5804__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [navigation_key,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item)], null));
});})(item,s__42566__$2,temp__5804__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),kdlyticsgui$guitools$left_nav_bar_$_iter__42565(cljs.core.rest(s__42566__$2)));
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
