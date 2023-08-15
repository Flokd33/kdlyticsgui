goog.provide('kdlyticsgui.wealth');
kdlyticsgui.wealth.summary_display = (function kdlyticsgui$wealth$summary_display(){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-positions-summary","get-positions-summary",1710688354)], null));

var data = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-summary","positions-summary",-17081762)], null)));
var columns = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",119441134),"Description",new cljs.core.Keyword(null,"id","id",-1388402092),"description",new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Ticker","ticker",(50)),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Name","shortName",(50)),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Asset class","asset-class",(50)),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Acc.","account",(50)),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("CCY","currency",(50))], null)], null)], null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.guitools.mrt_right_element_box_generic,"wealth-summary","100%","BLABLA",cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.get_react().createElement(kdlyticsgui.mrttables.material_react_table_template_fast,(function (){var obj30079 = ({"clj-data":data,"clj-columns":columns,"clj-option-map":new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"enableGrouping","enableGrouping",1673342785),false,new cljs.core.Keyword(null,"enablePinning","enablePinning",-1460484884),true,new cljs.core.Keyword(null,"enablePagination","enablePagination",594938512),false], null),"js-initial-state":({"density": "compact", "showColumnFilters": true, "pagination": ({"pageSize": (50)}), "grouping": []}),"toolbar":kdlyticsgui.mrttables.mrt_table_toolbar,"download-fn":kdlyticsgui.mrttables.mrt_default_download_fn("wealth-summary",columns),"photo-id":"wealth-summary"});
return obj30079;
})())], null)], null);
});
kdlyticsgui.wealth.projection_display = (function kdlyticsgui$wealth$projection_display(){
var data = null;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"child","child",623967545),kdlyticsgui.guitools.element_box.cljs$core$IFn$_invoke$arity$5("summary","100%","Projection ",data,cljs.core.PersistentVector.EMPTY)], null);
});

//# sourceMappingURL=kdlyticsgui.wealth.js.map
