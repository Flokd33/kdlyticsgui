goog.provide('reagent_contextmenu.menu');
if((typeof reagent_contextmenu !== 'undefined') && (typeof reagent_contextmenu.menu !== 'undefined') && (typeof reagent_contextmenu.menu.default_menu_atom !== 'undefined')){
} else {
reagent_contextmenu.menu.default_menu_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Action",(function (){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["hello"], 0));
})], null)], null),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"display","display",242065432),null], null));
}
reagent_contextmenu.menu.show_context_BANG_ = (function reagent_contextmenu$menu$show_context_BANG_(menu_atom,actions,x,y){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(menu_atom,cljs.core.assoc,new cljs.core.Keyword(null,"actions","actions",-812656882),actions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"left","left",-399115937),(x - (10)),new cljs.core.Keyword(null,"top","top",-1856271961),(y - (10)),new cljs.core.Keyword(null,"display","display",242065432),"block"], 0));
});
reagent_contextmenu.menu.hide_context_BANG_ = (function reagent_contextmenu$menu$hide_context_BANG_(menu_atom){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(menu_atom,cljs.core.assoc,new cljs.core.Keyword(null,"display","display",242065432),null);
});
/**
 * Make sure the dom-node is within the viewport. Update the
 *   `offsets-a' with the necessary :top and :left.
 */
reagent_contextmenu.menu.reposition_BANG_ = (function reagent_contextmenu$menu$reposition_BANG_(offsets_a,dom_node){
var map__40347 = cljs.core.deref(offsets_a);
var map__40347__$1 = cljs.core.__destructure_map(map__40347);
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40347__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40347__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var bcr = dom_node.getBoundingClientRect();
var x = (bcr.right - window.innerWidth);
var y = (bcr.bottom - window.innerHeight);
var vec__40348 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((x > (0)))?x:(0)),(((y > (0)))?y:(0))], null));
var new_left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40348,(0),null);
var new_top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40348,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(offsets_a,cljs.core.assoc,new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),new_left,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new_top], 0));
});
reagent_contextmenu.menu.inner_submenu = (function reagent_contextmenu$menu$inner_submenu(actions_coll,s_menus_a,hide_context_BANG_){
var dom_node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var offsets = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(0),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(0)], null));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return reagent_contextmenu.menu.reposition_BANG_(offsets,cljs.core.deref(dom_node));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
var map__40380 = cljs.core.deref(offsets);
var map__40380__$1 = cljs.core.__destructure_map(map__40380);
var margin_top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40380__$1,new cljs.core.Keyword(null,"margin-top","margin-top",392161226));
var margin_left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40380__$1,new cljs.core.Keyword(null,"margin-left","margin-left",2015598377));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.dropdown-menu.context-menu","ul.dropdown-menu.context-menu",94472963),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),margin_left))?"open-left":null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),margin_top,new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),margin_left], null),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (this$){
return cljs.core.reset_BANG_(dom_node,this$);
})], null),(reagent_contextmenu.menu.actions_to_components.cljs$core$IFn$_invoke$arity$3 ? reagent_contextmenu.menu.actions_to_components.cljs$core$IFn$_invoke$arity$3(actions_coll,s_menus_a,hide_context_BANG_) : reagent_contextmenu.menu.actions_to_components.call(null,actions_coll,s_menus_a,hide_context_BANG_))], null);
})], null));
});
reagent_contextmenu.menu.submenu_component = (function reagent_contextmenu$menu$submenu_component(showing_submenus_atom,id,name,actions_coll,hide_context_BANG_){
var show_QMARK_ = reagent.core.cursor(showing_submenus_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
var s_menus_a = reagent.core.cursor(showing_submenus_atom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),id], null));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return null;
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"context-submenu"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref(show_QMARK_))?"selected":null),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (){
return cljs.core.reset_BANG_(showing_submenus_atom,cljs.core.PersistentArrayMap.createAsIfByAssoc([id,true]));
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__40381_SHARP_){
p1__40381_SHARP_.stopPropagation();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_QMARK_,cljs.core.not);
})], null),name], null),(cljs.core.truth_(cljs.core.deref(show_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_contextmenu.menu.inner_submenu,actions_coll,s_menus_a,hide_context_BANG_], null):null)], null);
})], null));
});
reagent_contextmenu.menu.action_component = (function reagent_contextmenu$menu$action_component(name,action_fn,hide_context_BANG_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__40386_SHARP_){
p1__40386_SHARP_.stopPropagation();

(hide_context_BANG_.cljs$core$IFn$_invoke$arity$0 ? hide_context_BANG_.cljs$core$IFn$_invoke$arity$0() : hide_context_BANG_.call(null));

return (action_fn.cljs$core$IFn$_invoke$arity$1 ? action_fn.cljs$core$IFn$_invoke$arity$1(p1__40386_SHARP_) : action_fn.call(null,p1__40386_SHARP_));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),name], null);
});
reagent_contextmenu.menu.action_or_submenu = (function reagent_contextmenu$menu$action_or_submenu(p__40387,showing_submenus_atom,hide_context_BANG_){
var vec__40392 = p__40387;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40392,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40392,(1),null);
var vec__40395 = item;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40395,(0),null);
var fn_or_sub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40395,(1),null);
var submenu = ((cljs.core.coll_QMARK_(fn_or_sub))?fn_or_sub:null);
var clear_sub_menus_BANG_ = (function (){
return cljs.core.reset_BANG_(showing_submenus_atom,null);
});
if(cljs.core.truth_(submenu)){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_contextmenu.menu.submenu_component,showing_submenus_atom,id,name,submenu,hide_context_BANG_], null);
} else {
if(cljs.core.truth_(fn_or_sub)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),clear_sub_menus_BANG_], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_contextmenu.menu.action_component,name,fn_or_sub,hide_context_BANG_], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),clear_sub_menus_BANG_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),name], null)], null);

}
}
});
reagent_contextmenu.menu.actions_to_components = (function reagent_contextmenu$menu$actions_to_components(actions_coll,showing_submenus_atom,hide_context_BANG_){
var iter__5523__auto__ = (function reagent_contextmenu$menu$actions_to_components_$_iter__40401(s__40402){
return (new cljs.core.LazySeq(null,(function (){
var s__40402__$1 = s__40402;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__40402__$1);
if(temp__5804__auto__){
var s__40402__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40402__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__40402__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__40404 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__40403 = (0);
while(true){
if((i__40403 < size__5522__auto__)){
var vec__40405 = cljs.core._nth(c__5521__auto__,i__40403);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40405,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40405,(1),null);
cljs.core.chunk_append(b__40404,(function (){var clear_sub_menus_BANG_ = ((function (i__40403,vec__40405,id,item,c__5521__auto__,size__5522__auto__,b__40404,s__40402__$2,temp__5804__auto__){
return (function (){
return cljs.core.reset_BANG_(showing_submenus_atom,null);
});})(i__40403,vec__40405,id,item,c__5521__auto__,size__5522__auto__,b__40404,s__40402__$2,temp__5804__auto__))
;
if(cljs.core.coll_QMARK_(item)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_contextmenu.menu.action_or_submenu,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,item], null),showing_submenus_atom,hide_context_BANG_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
} else {
if((item instanceof cljs.core.Keyword)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.divider","li.divider",1214212749),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),clear_sub_menus_BANG_], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.dropdown-header","li.dropdown-header",-1766876328),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"default","default",-1987822328)], null),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),clear_sub_menus_BANG_], null),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));

}
}
})());

var G__40435 = (i__40403 + (1));
i__40403 = G__40435;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40404),reagent_contextmenu$menu$actions_to_components_$_iter__40401(cljs.core.chunk_rest(s__40402__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40404),null);
}
} else {
var vec__40408 = cljs.core.first(s__40402__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40408,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40408,(1),null);
return cljs.core.cons((function (){var clear_sub_menus_BANG_ = ((function (vec__40408,id,item,s__40402__$2,temp__5804__auto__){
return (function (){
return cljs.core.reset_BANG_(showing_submenus_atom,null);
});})(vec__40408,id,item,s__40402__$2,temp__5804__auto__))
;
if(cljs.core.coll_QMARK_(item)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_contextmenu.menu.action_or_submenu,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,item], null),showing_submenus_atom,hide_context_BANG_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
} else {
if((item instanceof cljs.core.Keyword)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.divider","li.divider",1214212749),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),clear_sub_menus_BANG_], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.dropdown-header","li.dropdown-header",-1766876328),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"default","default",-1987822328)], null),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),clear_sub_menus_BANG_], null),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));

}
}
})(),reagent_contextmenu$menu$actions_to_components_$_iter__40401(cljs.core.rest(s__40402__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,actions_coll));
});
reagent_contextmenu.menu.inner_context_menu = (function reagent_contextmenu$menu$inner_context_menu(menu_atom,hide_context_BANG_){
var dom_node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var showing_submenus_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var offsets = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(0),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(0)], null));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return reagent_contextmenu.menu.reposition_BANG_(offsets,cljs.core.deref(dom_node));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
var map__40412 = cljs.core.deref(menu_atom);
var map__40412__$1 = cljs.core.__destructure_map(map__40412);
var display = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40412__$1,new cljs.core.Keyword(null,"display","display",242065432));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40412__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40412__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40412__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var map__40413 = cljs.core.deref(offsets);
var map__40413__$1 = cljs.core.__destructure_map(map__40413);
var margin_top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40413__$1,new cljs.core.Keyword(null,"margin-top","margin-top",392161226));
var margin_left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40413__$1,new cljs.core.Keyword(null,"margin-left","margin-left",2015598377));
var esc_handler_BANG_ = (function (evt){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(evt.keyCode,(27))){
evt.stopPropagation();

return (hide_context_BANG_.cljs$core$IFn$_invoke$arity$0 ? hide_context_BANG_.cljs$core$IFn$_invoke$arity$0() : hide_context_BANG_.call(null));
} else {
return null;
}
});
var scroll_BANG_ = (function (evt){
var dy = evt.deltaY;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(menu_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top","top",-1856271961)], null),(function (p1__40411_SHARP_){
return (p1__40411_SHARP_ - dy);
}));
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.context-menu-container","div.context-menu-container",-1106598186),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.Keyword(null,"left","left",-399115937),left,new cljs.core.Keyword(null,"top","top",-1856271961),top,new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),margin_left,new cljs.core.Keyword(null,"margin-top","margin-top",392161226),margin_top], null),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),margin_left))?"open-left":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.dropdown-menu.context-menu","ul.dropdown-menu.context-menu",94472963),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (this$){
cljs.core.reset_BANG_(dom_node,this$);

if(cljs.core.truth_(this$)){
return this$.focus();
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),esc_handler_BANG_,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1),new cljs.core.Keyword(null,"role","role",-736691072),"menu",new cljs.core.Keyword(null,"on-wheel","on-wheel",-1971630708),scroll_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),(function (){var or__5045__auto__ = display;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "none";
}
})(),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862)], null)], null),(cljs.core.truth_(actions)?reagent_contextmenu.menu.actions_to_components(actions,showing_submenus_atom,hide_context_BANG_):null)], null)], null);
})], null));
});
/**
 * The context menu component. Will use a default (and global) state
 *   ratom if none is provided.
 */
reagent_contextmenu.menu.context_menu = (function reagent_contextmenu$menu$context_menu(var_args){
var G__40415 = arguments.length;
switch (G__40415) {
case 0:
return reagent_contextmenu.menu.context_menu.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return reagent_contextmenu.menu.context_menu.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent_contextmenu.menu.context_menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return reagent_contextmenu.menu.context_menu.cljs$core$IFn$_invoke$arity$1(reagent_contextmenu.menu.default_menu_atom);
}));

(reagent_contextmenu.menu.context_menu.cljs$core$IFn$_invoke$arity$1 = (function (menu_atom){
var hide_context_BANG_ = (function (){
return reagent_contextmenu.menu.hide_context_BANG_(menu_atom);
});
var display = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(menu_atom),new cljs.core.Keyword(null,"display","display",242065432));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(display)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.context-menu-backdrop","div.context-menu-backdrop",-713956658),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),(function (e){
hide_context_BANG_();

return e.preventDefault();
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),hide_context_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"width","width",-384071477),"100vw",new cljs.core.Keyword(null,"height","height",1025178622),"100vh"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_contextmenu.menu.inner_context_menu,menu_atom,hide_context_BANG_], null)], null):null)], null);
}));

(reagent_contextmenu.menu.context_menu.cljs$lang$maxFixedArity = 1);

/**
 * Update the context menu with a collection of [name function] pairs.
 *   When function is nil, consider the button as 'disabled' and do not
 *   allow any click.  
 * 
 *   When passed a keyword instead of [name function], a divider is
 *   inserted.
 * 
 *   If a string is passed, convert it into a header.
 * 
 *   ["Menu header"
 * [my-fn #(+ 1 2)]
 * :divider
 * [my-other-fn #(prn (str 1 2 3))]]
 */
reagent_contextmenu.menu.context_BANG_ = (function reagent_contextmenu$menu$context_BANG_(var_args){
var G__40420 = arguments.length;
switch (G__40420) {
case 2:
return reagent_contextmenu.menu.context_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent_contextmenu.menu.context_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent_contextmenu.menu.context_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (evt,name_fn_coll){
return reagent_contextmenu.menu.context_BANG_.cljs$core$IFn$_invoke$arity$3(evt,reagent_contextmenu.menu.default_menu_atom,name_fn_coll);
}));

(reagent_contextmenu.menu.context_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (evt,menu_atom,name_fn_coll){
reagent_contextmenu.menu.show_context_BANG_(menu_atom,name_fn_coll,evt.clientX,evt.clientY);

return evt.preventDefault();
}));

(reagent_contextmenu.menu.context_BANG_.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=reagent_contextmenu.menu.js.map
