goog.provide('kdlyticsgui.wealth');
kdlyticsgui.wealth.halfrw = "850px";
kdlyticsgui.wealth.maxrw = "1790px";
kdlyticsgui.wealth.summary_display = (function kdlyticsgui$wealth$summary_display(){
var data = null;
var columns = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",119441134),"Description",new cljs.core.Keyword(null,"id","id",-1388402092),"description",new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Ticker","ticker",(60)),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Cat.","asset-class",(60)),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Acc.","account",(60)),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("CCY","currency",(60)),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Name","shortName",(200))], null)], null)], null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.guitools.mrt_right_element_box_generic,"wealth-summary",kdlyticsgui.wealth.maxrw,"W summary",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY], null);
});
kdlyticsgui.wealth.projection_display = (function kdlyticsgui$wealth$projection_display(){
var data = null;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"child","child",623967545),kdlyticsgui.guitools.element_box.cljs$core$IFn$_invoke$arity$5("summary","100%","Projection ",data,cljs.core.PersistentVector.EMPTY)], null);
});

//# sourceMappingURL=kdlyticsgui.wealth.js.map
