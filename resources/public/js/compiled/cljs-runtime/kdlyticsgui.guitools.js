goog.provide('kdlyticsgui.guitools');
/**
 * opts will have either :download-table or :on-click-action, and can have target-id
 *   
 */
kdlyticsgui.guitools.element_box_generic = (function kdlyticsgui$guitools$element_box_generic(id,width,title_str,opts,children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),title_str,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),["zmdi-collection-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),["Saved view ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),new cljs.core.Keyword(null,"above-center","above-center",1960103104),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810).cljs$core$IFn$_invoke$arity$1(opts)], null))),i))?"active":"default"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810).cljs$core$IFn$_invoke$arity$1(opts),i], null));
})], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(5))):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.not(new cljs.core.Keyword(null,"no-icons","no-icons",-326180685).cljs$core$IFn$_invoke$arity$1(opts)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-download",new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Download table",new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),new cljs.core.Keyword(null,"above-center","above-center",1960103104),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){var temp__5802__auto__ = new cljs.core.Keyword(null,"on-click-action","on-click-action",843467408).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5802__auto__)){
var ocl = temp__5802__auto__;
return ocl;
} else {
return (function (){
return kdlyticsgui.tools.csv_link.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"download-table","download-table",-2071629103).cljs$core$IFn$_invoke$arity$1(opts),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",kdlyticsgui.tools.gdate__GT_yyyyMMdd(cljs_time.core.today())].join(''));
});
}
})()], null)], null):null)], 0))], null)], null),children)], null)], null);
});
/**
 * opts will have either :download-table-fn or :on-click-action, and can have target-id
 *   it can also have :cols and :shortcuts and :no-icons
 */
kdlyticsgui.guitools.element_box_generic_new = (function kdlyticsgui$guitools$element_box_generic_new(id,width,title_str,opts,children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),title_str,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),["zmdi-collection-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),["Saved view ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),new cljs.core.Keyword(null,"above-center","above-center",1960103104),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810).cljs$core$IFn$_invoke$arity$1(opts)], null))),i))?"active":"default"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810).cljs$core$IFn$_invoke$arity$1(opts),i], null));
})], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(5))):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.not(new cljs.core.Keyword(null,"no-icons","no-icons",-326180685).cljs$core$IFn$_invoke$arity$1(opts)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var temp__5802__auto__ = new cljs.core.Keyword(null,"on-click-action","on-click-action",843467408).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5802__auto__)){
var ocl = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-filter-list",new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Download current view",new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),new cljs.core.Keyword(null,"above-center","above-center",1960103104),new cljs.core.Keyword(null,"on-click","on-click",1632826543),ocl], null);
} else {
return null;
}
})(),(function (){var temp__5802__auto__ = new cljs.core.Keyword(null,"download-table-fn","download-table-fn",1303434356).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5802__auto__)){
var x = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-download",new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Download table",new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),new cljs.core.Keyword(null,"above-center","above-center",1960103104),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){var temp__5802__auto____$1 = new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5802__auto____$1)){
var c = temp__5802__auto____$1;
return (function (){
return kdlyticsgui.tools.csv_link.cljs$core$IFn$_invoke$arity$3((x.cljs$core$IFn$_invoke$arity$0 ? x.cljs$core$IFn$_invoke$arity$0() : x.call(null)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",kdlyticsgui.tools.gdate__GT_yyyyMMdd(cljs_time.core.today())].join(''),c);
});
} else {
return (function (){
return kdlyticsgui.tools.csv_link.cljs$core$IFn$_invoke$arity$2((x.cljs$core$IFn$_invoke$arity$0 ? x.cljs$core$IFn$_invoke$arity$0() : x.call(null)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",kdlyticsgui.tools.gdate__GT_yyyyMMdd(cljs_time.core.today())].join(''));
});
}
})()], null);
} else {
return null;
}
})()], null):null)], 0))], null)], null),children)], null)], null);
});
kdlyticsgui.guitools.element_box = (function kdlyticsgui$guitools$element_box(var_args){
var G__32353 = arguments.length;
switch (G__32353) {
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

/**
 * opts will have either :download-table or :on-click-action, and can have target-id
 */
kdlyticsgui.guitools.element_box_generic_with_cols = (function kdlyticsgui$guitools$element_box_generic_with_cols(id,width,title_str,opts,children,cols){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"element",new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),title_str,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),["zmdi-collection-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.key], null))),i))?"active":"default"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.key,i], null));
})], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(5))):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-download",new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Download table",new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),new cljs.core.Keyword(null,"above-center","above-center",1960103104),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){var temp__5802__auto__ = new cljs.core.Keyword(null,"on-click-action","on-click-action",843467408).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5802__auto__)){
var ocl = temp__5802__auto__;
return ocl;
} else {
return (function (){
return kdlyticsgui.tools.csv_link.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"download-table","download-table",-2071629103).cljs$core$IFn$_invoke$arity$1(opts),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",kdlyticsgui.tools.gdate__GT_yyyyMMdd(cljs_time.core.today())].join(''),cols);
});
}
})()], null)], null)], 0))], null)], null),children)], null)], null);
});
kdlyticsgui.guitools.element_box_with_cols = (function kdlyticsgui$guitools$element_box_with_cols(var_args){
var G__32355 = arguments.length;
switch (G__32355) {
case 6:
return kdlyticsgui.guitools.element_box_with_cols.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return kdlyticsgui.guitools.element_box_with_cols.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kdlyticsgui.guitools.element_box_with_cols.cljs$core$IFn$_invoke$arity$6 = (function (id,width,title_str,download_table,children,cols){
return kdlyticsgui.guitools.element_box_generic_with_cols(id,width,title_str,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"download-table","download-table",-2071629103),download_table], null),children,cols);
}));

(kdlyticsgui.guitools.element_box_with_cols.cljs$core$IFn$_invoke$arity$7 = (function (id,width,title_str,download_table,on_click_action,children,cols){
return kdlyticsgui.guitools.element_box_generic_with_cols(id,width,title_str,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click-action","on-click-action",843467408),on_click_action], null),children,cols);
}));

(kdlyticsgui.guitools.element_box_with_cols.cljs$lang$maxFixedArity = 7);

kdlyticsgui.guitools.portfolio_dropdown_selector = (function kdlyticsgui$guitools$portfolio_dropdown_selector(var_args){
var G__32359 = arguments.length;
switch (G__32359) {
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
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),"125px",new cljs.core.Keyword(null,"filter-box?","filter-box?",-1157583688),true,new cljs.core.Keyword(null,"model","model",331153215),re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame_db_key], null)),new cljs.core.Keyword(null,"choices","choices",1385611597),cljs.core.map.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rot13","rot13",-631596017)], null))))?(function (p1__32356_SHARP_){
return clojure.set.rename_keys(p1__32356_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"labelrot13","labelrot13",900679140),new cljs.core.Keyword(null,"label","label",1718410804)], null));
}):cljs.core.identity),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolio-dropdown-map","portfolio-dropdown-map",-593320226)], null)))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__32357_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_change_key_event,p1__32357_SHARP_], null));
})], null);
}));

(kdlyticsgui.guitools.portfolio_dropdown_selector.cljs$lang$maxFixedArity = 2);

re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("quant-model-new-bond","save-bond-response","quant-model-new-bond/save-bond-response",1787467136),(function (db,p__32360){
var vec__32361 = p__32360;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32361,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32361,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(data))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("quant-model","new-bond-entry","quant-model/new-bond-entry",-985331617),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("quant-model","new-bond-saved-message","quant-model/new-bond-saved-message",2087064975),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(data)], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("quant-model","new-bond-saved-message","quant-model/new-bond-saved-message",2087064975),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(data));
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tree-table-toggle","tree-table-toggle",1639472153),(function (db,p__32364){
var vec__32365 = p__32364;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32365,(0),null);
var table_keyword_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32365,(1),null);
var display_style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32365,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(table_keyword_string,"display-style"),display_style,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(table_keyword_string,"hide-zero-holdings"),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(display_style,"Table")], 0));
}));

//# sourceMappingURL=kdlyticsgui.guitools.js.map
