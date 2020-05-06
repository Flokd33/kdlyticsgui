goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__44301){
var map__44302 = p__44301;
var map__44302__$1 = (((((!((map__44302 == null))))?(((((map__44302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44302):map__44302);
var args = map__44302__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44302__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44302__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44302__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44302__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44302__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44302__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44302__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44302__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value(model);
var G__44304 = (function (){var c_input = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__4131__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,immediate_model_update_QMARK_,(re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2(c_input,debounce_delay) : re_com.typeahead.debounce.call(null,c_input,debounce_delay)),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value(model),re_com.util.deref_or_value(model)]);
})();
if(cljs.core.truth_(external_model_value)){
return (re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2(G__44304,external_model_value) : re_com.typeahead.display_suggestion.call(null,G__44304,external_model_value));
} else {
return G__44304;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__44305,event){
var map__44306 = p__44305;
var map__44306__$1 = (((((!((map__44306 == null))))?(((((map__44306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44306):map__44306);
var state = map__44306__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44306__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44306__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44306__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var immediate_model_update_QMARK___$1 = re_com.util.deref_or_value(immediate_model_update_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value(rigid_QMARK_);
var G__44308 = event;
var G__44308__$1 = (((G__44308 instanceof cljs.core.Keyword))?G__44308.fqn:null);
switch (G__44308__$1) {
case "input-text-blurred":
var and__4120__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(rigid_QMARK___$1);
} else {
return and__4120__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
case "input-text-changed":
var and__4120__auto__ = cljs.core.not(rigid_QMARK___$1);
if(and__4120__auto__){
var or__4131__auto__ = cljs.core.not(change_on_blur_QMARK___$1);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return immediate_model_update_QMARK___$1;
}
} else {
return and__4120__auto__;
}

break;
default:
return false;

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__44309,event){
var map__44310 = p__44309;
var map__44310__$1 = (((((!((map__44310 == null))))?(((((map__44310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44310):map__44310);
var state = map__44310__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44310__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var G__44312 = event;
var G__44312__$1 = (((G__44312 instanceof cljs.core.Keyword))?G__44312.fqn:null);
switch (G__44312__$1) {
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__44313,new_value){
var map__44314 = p__44313;
var map__44314__$1 = (((((!((map__44314 == null))))?(((((map__44314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44314):map__44314);
var state = map__44314__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44314__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_value) : on_change.call(null,new_value));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__44316,suggestion){
var map__44317 = p__44316;
var map__44317__$1 = (((((!((map__44317 == null))))?(((((map__44317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44317):map__44317);
var state = map__44317__$1;
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44317__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = (suggestion_to_string.cljs$core$IFn$_invoke$arity$1 ? suggestion_to_string.cljs$core$IFn$_invoke$arity$1(suggestion) : suggestion_to_string.call(null,suggestion));
var G__44319 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__44319,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true], 0));
} else {
return G__44319;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728)], 0));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__44320,index){
var map__44321 = p__44320;
var map__44321__$1 = (((((!((map__44321 == null))))?(((((map__44321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44321):map__44321);
var state = map__44321__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44321__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
var G__44323 = state;
var G__44323__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44323,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__44323__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model(G__44323__$1,suggestion):G__44323__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_(state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion(G__44323__$2,suggestion);
} else {
return G__44323__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__44324,index){
var map__44325 = p__44324;
var map__44325__$1 = (((((!((map__44325 == null))))?(((((map__44325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44325):map__44325);
var state = map__44325__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44325__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
return re_com.typeahead.clear_suggestions(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(re_com.typeahead.activate_suggestion_by_index(state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__44327){
var map__44328 = p__44327;
var map__44328__$1 = (((((!((map__44328 == null))))?(((((map__44328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44328):map__44328);
var state = map__44328__$1;
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44328__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__44330 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index(G__44330,suggestion_active_index);
} else {
return G__44330;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod((count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__44331){
var map__44332 = p__44331;
var map__44332__$1 = (((((!((map__44332 == null))))?(((((map__44332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44332):map__44332);
var state = map__44332__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44332__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44332__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__44334 = state;
if(cljs.core.seq(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__44334,re_com.typeahead.wrap(((function (){var or__4131__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count(suggestions)));
} else {
return G__44334;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__44335){
var map__44336 = p__44335;
var map__44336__$1 = (((((!((map__44336 == null))))?(((((map__44336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44336):map__44336);
var state = map__44336__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44336__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44336__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__44338 = state;
if(cljs.core.seq(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__44338,re_com.typeahead.wrap(((function (){var or__4131__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count(suggestions)));
} else {
return G__44338;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__44339 = state;
var G__44339__$1 = re_com.typeahead.clear_suggestions(G__44339)
;
var G__44339__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__44339__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model(G__44339__$2,null);
} else {
return G__44339__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null], 0));
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__44340){
var map__44341 = p__44340;
var map__44341__$1 = (((((!((map__44341 == null))))?(((((map__44341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44341):map__44341);
var state = map__44341__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44341__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44341__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44341__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not(displaying_suggestion_QMARK_);
if(and__4120__auto__){
return re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__4120__auto__;
}
})())){
return re_com.typeahead.update_model(state,input_text);
} else {
return re_com.typeahead.clear_suggestions(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),input_text));

}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_com.typeahead.reset_typeahead(state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(state,new_value),new_value),new cljs.core.Keyword(null,"external-model","external-model",506095421),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__5733__auto__ = (function (){var G__44344 = text;
var G__44345 = ((function (G__44344){
return (function (p1__44343_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,p1__44343_SHARP_);
});})(G__44344))
;
return (data_source.cljs$core$IFn$_invoke$arity$2 ? data_source.cljs$core$IFn$_invoke$arity$2(G__44344,G__44345) : data_source.call(null,G__44344,G__44345));
})();
if(cljs.core.truth_(temp__5733__auto__)){
var return_value = temp__5733__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__41847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__41847__auto__){
return (function (){
var f__41848__auto__ = (function (){var switch__41638__auto__ = ((function (c__41847__auto__){
return (function (state_44363){
var state_val_44364 = (state_44363[(1)]);
if((state_val_44364 === (1))){
var state_44363__$1 = state_44363;
var statearr_44365_44489 = state_44363__$1;
(statearr_44365_44489[(2)] = null);

(statearr_44365_44489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44364 === (2))){
var state_44363__$1 = state_44363;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44363__$1,(4),c_search);
} else {
if((state_val_44364 === (3))){
var inst_44361 = (state_44363[(2)]);
var state_44363__$1 = state_44363;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44363__$1,inst_44361);
} else {
if((state_val_44364 === (4))){
var inst_44348 = (state_44363[(7)]);
var inst_44348__$1 = (state_44363[(2)]);
var inst_44349 = cljs.core.deref(state_atom);
var inst_44350 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_44349);
var inst_44351 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",inst_44348__$1);
var state_44363__$1 = (function (){var statearr_44366 = state_44363;
(statearr_44366[(7)] = inst_44348__$1);

(statearr_44366[(8)] = inst_44350);

return statearr_44366;
})();
if(inst_44351){
var statearr_44367_44490 = state_44363__$1;
(statearr_44367_44490[(1)] = (5));

} else {
var statearr_44368_44491 = state_44363__$1;
(statearr_44368_44491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44364 === (5))){
var inst_44350 = (state_44363[(8)]);
var inst_44353 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.reset_typeahead);
var inst_44354 = re_com.typeahead.search_data_source_BANG_(inst_44350,state_atom,"");
var state_44363__$1 = (function (){var statearr_44369 = state_44363;
(statearr_44369[(9)] = inst_44353);

return statearr_44369;
})();
var statearr_44370_44492 = state_44363__$1;
(statearr_44370_44492[(2)] = inst_44354);

(statearr_44370_44492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44364 === (6))){
var inst_44348 = (state_44363[(7)]);
var inst_44350 = (state_44363[(8)]);
var inst_44356 = re_com.typeahead.search_data_source_BANG_(inst_44350,state_atom,inst_44348);
var state_44363__$1 = state_44363;
var statearr_44371_44493 = state_44363__$1;
(statearr_44371_44493[(2)] = inst_44356);

(statearr_44371_44493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44364 === (7))){
var inst_44358 = (state_44363[(2)]);
var state_44363__$1 = (function (){var statearr_44372 = state_44363;
(statearr_44372[(10)] = inst_44358);

return statearr_44372;
})();
var statearr_44373_44494 = state_44363__$1;
(statearr_44373_44494[(2)] = null);

(statearr_44373_44494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__41847__auto__))
;
return ((function (switch__41638__auto__,c__41847__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__41639__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__41639__auto____0 = (function (){
var statearr_44374 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44374[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__41639__auto__);

(statearr_44374[(1)] = (1));

return statearr_44374;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__41639__auto____1 = (function (state_44363){
while(true){
var ret_value__41640__auto__ = (function (){try{while(true){
var result__41641__auto__ = switch__41638__auto__(state_44363);
if(cljs.core.keyword_identical_QMARK_(result__41641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41641__auto__;
}
break;
}
}catch (e44375){if((e44375 instanceof Object)){
var ex__41642__auto__ = e44375;
var statearr_44376_44495 = state_44363;
(statearr_44376_44495[(5)] = ex__41642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44375;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44496 = state_44363;
state_44363 = G__44496;
continue;
} else {
return ret_value__41640__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__41639__auto__ = function(state_44363){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__41639__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__41639__auto____1.call(this,state_44363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__41639__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__41639__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__41639__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__41639__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__41639__auto__;
})()
;})(switch__41638__auto__,c__41847__auto__))
})();
var state__41849__auto__ = (function (){var statearr_44377 = (f__41848__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41848__auto__.cljs$core$IFn$_invoke$arity$0() : f__41848__auto__.call(null));
(statearr_44377[(6)] = c__41847__auto__);

return statearr_44377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41849__auto__);
});})(c__41847__auto__))
);

return c__41847__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__44379 = cljs.core.deref(state_atom);
var map__44379__$1 = (((((!((map__44379 == null))))?(((((map__44379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44379):map__44379);
var state = map__44379__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44379__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44379__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_text,input_text)){
return state;
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c_input,new_text);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,((function (map__44379,map__44379__$1,state,input_text,c_input){
return (function (p1__44378_SHARP_){
var G__44381 = p1__44378_SHARP_;
var G__44381__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__44381,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model(G__44381__$1,new_text);
} else {
return G__44381__$1;
}
});})(map__44379,map__44379__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__44382 = cljs.core._EQ_;
var expr__44383 = event.which;
if(cljs.core.truth_((pred__44382.cljs$core$IFn$_invoke$arity$2 ? pred__44382.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.UP,expr__44383) : pred__44382.call(null,goog.events.KeyCodes.UP,expr__44383)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_((pred__44382.cljs$core$IFn$_invoke$arity$2 ? pred__44382.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.DOWN,expr__44383) : pred__44382.call(null,goog.events.KeyCodes.DOWN,expr__44383)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_((pred__44382.cljs$core$IFn$_invoke$arity$2 ? pred__44382.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ENTER,expr__44383) : pred__44382.call(null,goog.events.KeyCodes.ENTER,expr__44383)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_((pred__44382.cljs$core$IFn$_invoke$arity$2 ? pred__44382.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ESC,expr__44383) : pred__44382.call(null,goog.events.KeyCodes.ESC,expr__44383)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,cljs.core.PersistentVector.EMPTY);
} else {
if(cljs.core.truth_((pred__44382.cljs$core$IFn$_invoke$arity$2 ? pred__44382.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.TAB,expr__44383) : pred__44382.call(null,goog.events.KeyCodes.TAB,expr__44383)))){
if(cljs.core.truth_(cljs.core.not_empty(new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_atom))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"update model with currently entered text on every keystroke (similar to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," but no changes to model if mouse is over suggestions)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"the initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"after receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"when a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),"the outer container"], null),", rather than the textbox)"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__4736__auto__ = [];
var len__4730__auto___44497 = arguments.length;
var i__4731__auto___44498 = (0);
while(true){
if((i__4731__auto___44498 < len__4730__auto___44497)){
args__4736__auto__.push((arguments[i__4731__auto___44498]));

var G__44499 = (i__4731__auto___44498 + (1));
i__4731__auto___44498 = G__44499;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__44387){
var map__44388 = p__44387;
var map__44388__$1 = (((((!((map__44388 == null))))?(((((map__44388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44388):map__44388);
var args = map__44388__$1;
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["typeahead"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__44390 = re_com.typeahead.make_typeahead_state(args);
var map__44390__$1 = (((((!((map__44390 == null))))?(((((map__44390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44390):map__44390);
var state = map__44390__$1;
var c_search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44390__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44390__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(state);
var input_text_model = reagent.core.cursor(state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_(state_atom,c_search);

return ((function (map__44390,map__44390__$1,state,c_search,c_input,state_atom,input_text_model,map__44388,map__44388__$1,args){
return (function() { 
var G__44500__delegate = function (p__44392){
var map__44393 = p__44392;
var map__44393__$1 = (((((!((map__44393 == null))))?(((((map__44393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44393):map__44393);
var args__$1 = map__44393__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44393__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44393__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44393__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44393__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44393__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44393__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44393__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44393__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44393__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44393__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44393__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44393__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44393__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44393__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44393__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44393__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var _immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44393__$1,new cljs.core.Keyword(null,"_immediate-model-update?","_immediate-model-update?",1035374450));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44393__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44393__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["typeahead"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__44395 = cljs.core.deref(state_atom);
var map__44395__$1 = (((((!((map__44395 == null))))?(((((map__44395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44395):map__44395);
var state__$1 = map__44395__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44395__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44395__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44395__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44395__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value(model);
var width__$1 = (function (){var or__4131__auto__ = width;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(last_data_source,data_source)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(latest_external_model,external_model)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead",new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_key_down_BANG_,state_atom),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (map__44395,map__44395__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__44393,map__44393__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__44390,map__44390__$1,state,c_search,c_input,state_atom,input_text_model,map__44388,map__44388__$1,args){
return (function (){
return cljs.core.List.EMPTY;
});})(map__44395,map__44395__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__44393,map__44393__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__44390,map__44390__$1,state,c_search,c_input,state_atom,input_text_model,map__44388,map__44388__$1,args))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (map__44395,map__44395__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__44393,map__44393__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__44390,map__44390__$1,state,c_search,c_input,state_atom,input_text_model,map__44388,map__44388__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.input_text_will_blur);
});})(map__44395,map__44395__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__44393,map__44393__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__44390,map__44390__$1,state,c_search,c_input,state_atom,input_text_model,map__44388,map__44388__$1,args))
], null)], null),(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.not_empty(suggestions);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__4523__auto__ = ((function (map__44395,map__44395__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__44393,map__44393__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__44390,map__44390__$1,state,c_search,c_input,state_atom,input_text_model,map__44388,map__44388__$1,args){
return (function re_com$typeahead$iter__44397(s__44398){
return (new cljs.core.LazySeq(null,((function (map__44395,map__44395__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__44393,map__44393__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__44390,map__44390__$1,state,c_search,c_input,state_atom,input_text_model,map__44388,map__44388__$1,args){
return (function (){
var s__44398__$1 = s__44398;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44398__$1);
if(temp__5735__auto__){
var s__44398__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44398__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__44398__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__44400 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__44399 = (0);
while(true){
if((i__44399 < size__4522__auto__)){
var vec__44401 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__44399);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44401,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44401,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
cljs.core.chunk_append(b__44400,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",((selected_QMARK_)?" active":null)].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__44399,selected_QMARK_,vec__44401,i,s,c__4521__auto__,size__4522__auto__,b__44400,s__44398__$2,temp__5735__auto__,map__44395,map__44395__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__44393,map__44393__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__44390,map__44390__$1,state,c_search,c_input,state_atom,input_text_model,map__44388,map__44388__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__44399,selected_QMARK_,vec__44401,i,s,c__4521__auto__,size__4522__auto__,b__44400,s__44398__$2,temp__5735__auto__,map__44395,map__44395__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__44393,map__44393__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__44390,map__44390__$1,state,c_search,c_input,state_atom,input_text_model,map__44388,map__44388__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__44399,selected_QMARK_,vec__44401,i,s,c__4521__auto__,size__4522__auto__,b__44400,s__44398__$2,temp__5735__auto__,map__44395,map__44395__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__44393,map__44393__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__44390,map__44390__$1,state,c_search,c_input,state_atom,input_text_model,map__44388,map__44388__$1,args){
return (function (p1__44385_SHARP_){
p1__44385_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__44399,selected_QMARK_,vec__44401,i,s,c__4521__auto__,size__4522__auto__,b__44400,s__44398__$2,temp__5735__auto__,map__44395,map__44395__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__44393,map__44393__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__44390,map__44390__$1,state,c_search,c_input,state_atom,input_text_model,map__44388,map__44388__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__44501 = (i__44399 + (1));
i__44399 = G__44501;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44400),re_com$typeahead$iter__44397(cljs.core.chunk_rest(s__44398__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44400),null);
}
} else {
var vec__44404 = cljs.core.first(s__44398__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44404,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44404,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",((selected_QMARK_)?" active":null)].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__44404,i,s,s__44398__$2,temp__5735__auto__,map__44395,map__44395__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__44393,map__44393__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__44390,map__44390__$1,state,c_search,c_input,state_atom,input_text_model,map__44388,map__44388__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__44404,i,s,s__44398__$2,temp__5735__auto__,map__44395,map__44395__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__44393,map__44393__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__44390,map__44390__$1,state,c_search,c_input,state_atom,input_text_model,map__44388,map__44388__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__44404,i,s,s__44398__$2,temp__5735__auto__,map__44395,map__44395__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__44393,map__44393__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__44390,map__44390__$1,state,c_search,c_input,state_atom,input_text_model,map__44388,map__44388__$1,args){
return (function (p1__44385_SHARP_){
p1__44385_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__44404,i,s,s__44398__$2,temp__5735__auto__,map__44395,map__44395__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__44393,map__44393__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__44390,map__44390__$1,state,c_search,c_input,state_atom,input_text_model,map__44388,map__44388__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__44397(cljs.core.rest(s__44398__$2)));
}
} else {
return null;
}
break;
}
});})(map__44395,map__44395__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__44393,map__44393__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__44390,map__44390__$1,state,c_search,c_input,state_atom,input_text_model,map__44388,map__44388__$1,args))
,null,null));
});})(map__44395,map__44395__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__44393,map__44393__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__44390,map__44390__$1,state,c_search,c_input,state_atom,input_text_model,map__44388,map__44388__$1,args))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__44500 = function (var_args){
var p__44392 = null;
if (arguments.length > 0) {
var G__44502__i = 0, G__44502__a = new Array(arguments.length -  0);
while (G__44502__i < G__44502__a.length) {G__44502__a[G__44502__i] = arguments[G__44502__i + 0]; ++G__44502__i;}
  p__44392 = new cljs.core.IndexedSeq(G__44502__a,0,null);
} 
return G__44500__delegate.call(this,p__44392);};
G__44500.cljs$lang$maxFixedArity = 0;
G__44500.cljs$lang$applyTo = (function (arglist__44503){
var p__44392 = cljs.core.seq(arglist__44503);
return G__44500__delegate(p__44392);
});
G__44500.cljs$core$IFn$_invoke$arity$variadic = G__44500__delegate;
return G__44500;
})()
;
;})(map__44390,map__44390__$1,state,c_search,c_input,state_atom,input_text_model,map__44388,map__44388__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq44386){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44386));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__41847__auto___44504 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__41847__auto___44504,out){
return (function (){
var f__41848__auto__ = (function (){var switch__41638__auto__ = ((function (c__41847__auto___44504,out){
return (function (state_44457){
var state_val_44458 = (state_44457[(1)]);
if((state_val_44458 === (7))){
var inst_44412 = (state_44457[(2)]);
var state_44457__$1 = state_44457;
var statearr_44459_44505 = state_44457__$1;
(statearr_44459_44505[(2)] = inst_44412);

(statearr_44459_44505[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44458 === (1))){
var inst_44407 = null;
var state_44457__$1 = (function (){var statearr_44460 = state_44457;
(statearr_44460[(7)] = inst_44407);

return statearr_44460;
})();
var statearr_44461_44506 = state_44457__$1;
(statearr_44461_44506[(2)] = null);

(statearr_44461_44506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44458 === (4))){
var state_44457__$1 = state_44457;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44457__$1,(7),in$);
} else {
if((state_val_44458 === (15))){
var inst_44442 = (state_44457[(2)]);
var state_44457__$1 = (function (){var statearr_44462 = state_44457;
(statearr_44462[(8)] = inst_44442);

return statearr_44462;
})();
var statearr_44463_44507 = state_44457__$1;
(statearr_44463_44507[(2)] = null);

(statearr_44463_44507[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44458 === (13))){
var inst_44430 = (state_44457[(9)]);
var inst_44444 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44430,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_44457__$1 = state_44457;
if(inst_44444){
var statearr_44464_44508 = state_44457__$1;
(statearr_44464_44508[(1)] = (16));

} else {
var statearr_44465_44509 = state_44457__$1;
(statearr_44465_44509[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44458 === (6))){
var inst_44416 = (state_44457[(10)]);
var inst_44415 = (state_44457[(2)]);
var inst_44416__$1 = cljs.core.async.timeout(ms);
var inst_44424 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44425 = [in$,inst_44416__$1];
var inst_44426 = (new cljs.core.PersistentVector(null,2,(5),inst_44424,inst_44425,null));
var state_44457__$1 = (function (){var statearr_44466 = state_44457;
(statearr_44466[(10)] = inst_44416__$1);

(statearr_44466[(11)] = inst_44415);

return statearr_44466;
})();
return cljs.core.async.ioc_alts_BANG_(state_44457__$1,(8),inst_44426);
} else {
if((state_val_44458 === (17))){
var state_44457__$1 = state_44457;
var statearr_44467_44510 = state_44457__$1;
(statearr_44467_44510[(2)] = null);

(statearr_44467_44510[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44458 === (3))){
var inst_44455 = (state_44457[(2)]);
var state_44457__$1 = state_44457;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44457__$1,inst_44455);
} else {
if((state_val_44458 === (12))){
var inst_44415 = (state_44457[(11)]);
var state_44457__$1 = state_44457;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44457__$1,(15),out,inst_44415);
} else {
if((state_val_44458 === (2))){
var inst_44407 = (state_44457[(7)]);
var inst_44409 = (inst_44407 == null);
var state_44457__$1 = state_44457;
if(cljs.core.truth_(inst_44409)){
var statearr_44468_44511 = state_44457__$1;
(statearr_44468_44511[(1)] = (4));

} else {
var statearr_44469_44512 = state_44457__$1;
(statearr_44469_44512[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44458 === (11))){
var inst_44452 = (state_44457[(2)]);
var inst_44407 = inst_44452;
var state_44457__$1 = (function (){var statearr_44470 = state_44457;
(statearr_44470[(7)] = inst_44407);

return statearr_44470;
})();
var statearr_44471_44513 = state_44457__$1;
(statearr_44471_44513[(2)] = null);

(statearr_44471_44513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44458 === (9))){
var inst_44428 = (state_44457[(12)]);
var inst_44436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44428,(0),null);
var inst_44437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44428,(1),null);
var state_44457__$1 = (function (){var statearr_44472 = state_44457;
(statearr_44472[(13)] = inst_44437);

return statearr_44472;
})();
var statearr_44473_44514 = state_44457__$1;
(statearr_44473_44514[(2)] = inst_44436);

(statearr_44473_44514[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44458 === (5))){
var inst_44407 = (state_44457[(7)]);
var state_44457__$1 = state_44457;
var statearr_44474_44515 = state_44457__$1;
(statearr_44474_44515[(2)] = inst_44407);

(statearr_44474_44515[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44458 === (14))){
var inst_44450 = (state_44457[(2)]);
var state_44457__$1 = state_44457;
var statearr_44475_44516 = state_44457__$1;
(statearr_44475_44516[(2)] = inst_44450);

(statearr_44475_44516[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44458 === (16))){
var inst_44429 = (state_44457[(14)]);
var state_44457__$1 = state_44457;
var statearr_44476_44517 = state_44457__$1;
(statearr_44476_44517[(2)] = inst_44429);

(statearr_44476_44517[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44458 === (10))){
var inst_44416 = (state_44457[(10)]);
var inst_44430 = (state_44457[(9)]);
var inst_44439 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44430,inst_44416);
var state_44457__$1 = state_44457;
if(inst_44439){
var statearr_44477_44518 = state_44457__$1;
(statearr_44477_44518[(1)] = (12));

} else {
var statearr_44478_44519 = state_44457__$1;
(statearr_44478_44519[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44458 === (18))){
var inst_44448 = (state_44457[(2)]);
var state_44457__$1 = state_44457;
var statearr_44479_44520 = state_44457__$1;
(statearr_44479_44520[(2)] = inst_44448);

(statearr_44479_44520[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44458 === (8))){
var inst_44430 = (state_44457[(9)]);
var inst_44428 = (state_44457[(12)]);
var inst_44428__$1 = (state_44457[(2)]);
var inst_44429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44428__$1,(0),null);
var inst_44430__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44428__$1,(1),null);
var inst_44431 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44430__$1,in$);
var state_44457__$1 = (function (){var statearr_44480 = state_44457;
(statearr_44480[(14)] = inst_44429);

(statearr_44480[(9)] = inst_44430__$1);

(statearr_44480[(12)] = inst_44428__$1);

return statearr_44480;
})();
if(inst_44431){
var statearr_44481_44521 = state_44457__$1;
(statearr_44481_44521[(1)] = (9));

} else {
var statearr_44482_44522 = state_44457__$1;
(statearr_44482_44522[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__41847__auto___44504,out))
;
return ((function (switch__41638__auto__,c__41847__auto___44504,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__41639__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__41639__auto____0 = (function (){
var statearr_44483 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44483[(0)] = re_com$typeahead$debounce_$_state_machine__41639__auto__);

(statearr_44483[(1)] = (1));

return statearr_44483;
});
var re_com$typeahead$debounce_$_state_machine__41639__auto____1 = (function (state_44457){
while(true){
var ret_value__41640__auto__ = (function (){try{while(true){
var result__41641__auto__ = switch__41638__auto__(state_44457);
if(cljs.core.keyword_identical_QMARK_(result__41641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41641__auto__;
}
break;
}
}catch (e44484){if((e44484 instanceof Object)){
var ex__41642__auto__ = e44484;
var statearr_44485_44523 = state_44457;
(statearr_44485_44523[(5)] = ex__41642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44484;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44524 = state_44457;
state_44457 = G__44524;
continue;
} else {
return ret_value__41640__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__41639__auto__ = function(state_44457){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__41639__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__41639__auto____1.call(this,state_44457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__41639__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__41639__auto____0;
re_com$typeahead$debounce_$_state_machine__41639__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__41639__auto____1;
return re_com$typeahead$debounce_$_state_machine__41639__auto__;
})()
;})(switch__41638__auto__,c__41847__auto___44504,out))
})();
var state__41849__auto__ = (function (){var statearr_44486 = (f__41848__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41848__auto__.cljs$core$IFn$_invoke$arity$0() : f__41848__auto__.call(null));
(statearr_44486[(6)] = c__41847__auto___44504);

return statearr_44486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41849__auto__);
});})(c__41847__auto___44504,out))
);


return out;
});

//# sourceMappingURL=re_com.typeahead.js.map
