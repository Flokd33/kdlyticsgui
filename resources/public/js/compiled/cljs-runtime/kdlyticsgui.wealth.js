goog.provide('kdlyticsgui.wealth');
kdlyticsgui.wealth.summary_display = (function kdlyticsgui$wealth$summary_display(){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-positions-summary","get-positions-summary",1710688354)], null));

var data = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-summary","positions-summary",-17081762)], null)));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"child","child",623967545)], null);
});
kdlyticsgui.wealth.projection_display = (function kdlyticsgui$wealth$projection_display(){
var data = null;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"child","child",623967545),kdlyticsgui.guitools.element_box.cljs$core$IFn$_invoke$arity$5("summary","100%","Projection ",data,cljs.core.PersistentVector.EMPTY)], null);
});

//# sourceMappingURL=kdlyticsgui.wealth.js.map
