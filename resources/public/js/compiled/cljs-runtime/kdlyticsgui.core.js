goog.provide('kdlyticsgui.core');
if((typeof kdlyticsgui !== 'undefined') && (typeof kdlyticsgui.core !== 'undefined') && (typeof kdlyticsgui.core.root !== 'undefined')){
} else {
kdlyticsgui.core.root = reagent.dom.client.create_root(document.getElementById("app"));
}
kdlyticsgui.core.mount_root = (function kdlyticsgui$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

return kdlyticsgui.core.root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return kdlyticsgui.views.main_panel;
})], null)));
});
kdlyticsgui.core.init = (function kdlyticsgui$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kdlyticsgui.mount","initialize-db","kdlyticsgui.mount/initialize-db",-798563823)], null));

return kdlyticsgui.core.mount_root();
});

//# sourceMappingURL=kdlyticsgui.core.js.map
