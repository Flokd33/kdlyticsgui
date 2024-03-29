goog.provide('kdlyticsgui.cellar');

kdlyticsgui.cellar.summary_display = (function (){var G__37895 = (function kdlyticsgui$cellar$summary_display_render(props__29207__auto__,maybe_ref__29208__auto__){
var vec__37900 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__29207__auto__),maybe_ref__29208__auto__], null);

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-cellar-summary","get-cellar-summary",644275392)], null));

var data = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cellar-summary","cellar-summary",271980210)], null)));
var columns = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",119441134),"Description",new cljs.core.Keyword(null,"id","id",-1388402092),"description",new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Name","name",(60)),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Type","type",(60)),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Description","description",(100))], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",119441134),"Position & PnL",new cljs.core.Keyword(null,"id","id",-1388402092),"position",new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("Qt","quantity",(50),kdlyticsgui.mrttables.round0),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("CPU","cost_per_unit",(50),kdlyticsgui.mrttables.round1),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("Market Price","market_price",(50),kdlyticsgui.mrttables.round1)], null)], null)], null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.mui.right_element_box_generic("cellar","1700px","My cellar",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.get_react().createElement(kdlyticsgui.mui.my_grid,(function (){var obj37905 = ({"direction":"row","gap":"30px","children":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.get_react().createElement(kdlyticsgui.mrttables.material_react_table_template_fast,(function (){var obj37908 = ({"clj-data":data,"clj-columns":columns,"clj-option-map":new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enableGrouping","enableGrouping",1673342785),true,new cljs.core.Keyword(null,"enablePinning","enablePinning",-1460484884),true,new cljs.core.Keyword(null,"enablePagination","enablePagination",594938512),false,new cljs.core.Keyword(null,"muiTableBodyRowProps","muiTableBodyRowProps",206441877),kdlyticsgui.mrttables.cellar_row_formatting,new cljs.core.Keyword(null,"muiTableBodyProps","muiTableBodyProps",-1884785223),null], null),"js-initial-state":({"density": "compact", "showColumnFilters": true, "pagination": ({"pageSize": (20)}), "grouping": [], "columnVisibility": ({"type": false})}),"toolbar":kdlyticsgui.mrttables.mrt_table_toolbar,"download-fn":kdlyticsgui.mrttables.mrt_default_download_fn("cellar-summary",columns),"photo-id":"cellar-summary"});
return obj37908;
})())], null)});
return obj37905;
})())], null))], null);
});
if(goog.DEBUG === true){
var G__37909 = G__37895;
(G__37909.displayName = "kdlyticsgui.cellar/summary-display");

return G__37909;
} else {
return G__37895;
}
})();




//# sourceMappingURL=kdlyticsgui.cellar.js.map
