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
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__43678){
var map__43679 = p__43678;
var map__43679__$1 = (((((!((map__43679 == null))))?(((((map__43679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43679):map__43679);
var args = map__43679__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43679__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43679__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43679__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43679__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43679__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43679__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43679__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43679__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value(model);
var G__43681 = (function (){var c_input = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__4126__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,immediate_model_update_QMARK_,(re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2(c_input,debounce_delay) : re_com.typeahead.debounce.call(null,c_input,debounce_delay)),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value(model),re_com.util.deref_or_value(model)]);
})();
if(cljs.core.truth_(external_model_value)){
return (re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2(G__43681,external_model_value) : re_com.typeahead.display_suggestion.call(null,G__43681,external_model_value));
} else {
return G__43681;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__43682,event){
var map__43683 = p__43682;
var map__43683__$1 = (((((!((map__43683 == null))))?(((((map__43683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43683):map__43683);
var state = map__43683__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43683__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43683__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43683__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var immediate_model_update_QMARK___$1 = re_com.util.deref_or_value(immediate_model_update_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value(rigid_QMARK_);
var G__43714 = event;
var G__43714__$1 = (((G__43714 instanceof cljs.core.Keyword))?G__43714.fqn:null);
switch (G__43714__$1) {
case "input-text-blurred":
var and__4115__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(rigid_QMARK___$1);
} else {
return and__4115__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
case "input-text-changed":
if(cljs.core.not(rigid_QMARK___$1)){
var or__4126__auto__ = cljs.core.not(change_on_blur_QMARK___$1);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return immediate_model_update_QMARK___$1;
}
} else {
return false;
}

break;
default:
return false;

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__43715,event){
var map__43716 = p__43715;
var map__43716__$1 = (((((!((map__43716 == null))))?(((((map__43716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43716):map__43716);
var state = map__43716__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43716__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var G__43718 = event;
var G__43718__$1 = (((G__43718 instanceof cljs.core.Keyword))?G__43718.fqn:null);
switch (G__43718__$1) {
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
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__43719,new_value){
var map__43720 = p__43719;
var map__43720__$1 = (((((!((map__43720 == null))))?(((((map__43720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43720):map__43720);
var state = map__43720__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43720__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_value) : on_change.call(null,new_value));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__43724,suggestion){
var map__43725 = p__43724;
var map__43725__$1 = (((((!((map__43725 == null))))?(((((map__43725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43725):map__43725);
var state = map__43725__$1;
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43725__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = (suggestion_to_string.cljs$core$IFn$_invoke$arity$1 ? suggestion_to_string.cljs$core$IFn$_invoke$arity$1(suggestion) : suggestion_to_string.call(null,suggestion));
var G__43727 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__43727,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true], 0));
} else {
return G__43727;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728)], 0));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__43728,index){
var map__43729 = p__43728;
var map__43729__$1 = (((((!((map__43729 == null))))?(((((map__43729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43729):map__43729);
var state = map__43729__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43729__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
var G__43733 = state;
var G__43733__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43733,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__43733__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model(G__43733__$1,suggestion):G__43733__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_(state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion(G__43733__$2,suggestion);
} else {
return G__43733__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__43751,index){
var map__43752 = p__43751;
var map__43752__$1 = (((((!((map__43752 == null))))?(((((map__43752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43752):map__43752);
var state = map__43752__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43752__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
return re_com.typeahead.clear_suggestions(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(re_com.typeahead.activate_suggestion_by_index(state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__43756){
var map__43757 = p__43756;
var map__43757__$1 = (((((!((map__43757 == null))))?(((((map__43757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43757):map__43757);
var state = map__43757__$1;
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43757__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__43759 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index(G__43759,suggestion_active_index);
} else {
return G__43759;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod((count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__43760){
var map__43763 = p__43760;
var map__43763__$1 = (((((!((map__43763 == null))))?(((((map__43763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43763):map__43763);
var state = map__43763__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43763__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43763__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__43765 = state;
if(cljs.core.seq(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__43765,re_com.typeahead.wrap(((function (){var or__4126__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count(suggestions)));
} else {
return G__43765;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__43766){
var map__43767 = p__43766;
var map__43767__$1 = (((((!((map__43767 == null))))?(((((map__43767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43767):map__43767);
var state = map__43767__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43767__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43767__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__43769 = state;
if(cljs.core.seq(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__43769,re_com.typeahead.wrap(((function (){var or__4126__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count(suggestions)));
} else {
return G__43769;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__43770 = state;
var G__43770__$1 = re_com.typeahead.clear_suggestions(G__43770)
;
var G__43770__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__43770__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model(G__43770__$2,null);
} else {
return G__43770__$2;
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
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__43790){
var map__43791 = p__43790;
var map__43791__$1 = (((((!((map__43791 == null))))?(((((map__43791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43791):map__43791);
var state = map__43791__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43791__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43791__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43791__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_(((cljs.core.not(displaying_suggestion_QMARK_))?re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307)):false))){
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
var temp__5733__auto__ = (function (){var G__43802 = text;
var G__43803 = (function (p1__43798_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,p1__43798_SHARP_);
});
return (data_source.cljs$core$IFn$_invoke$arity$2 ? data_source.cljs$core$IFn$_invoke$arity$2(G__43802,G__43803) : data_source.call(null,G__43802,G__43803));
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
var c__41764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41765__auto__ = (function (){var switch__41741__auto__ = (function (state_43851){
var state_val_43852 = (state_43851[(1)]);
if((state_val_43852 === (1))){
var state_43851__$1 = state_43851;
var statearr_43858_44258 = state_43851__$1;
(statearr_43858_44258[(2)] = null);

(statearr_43858_44258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43852 === (2))){
var state_43851__$1 = state_43851;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43851__$1,(4),c_search);
} else {
if((state_val_43852 === (3))){
var inst_43847 = (state_43851[(2)]);
var state_43851__$1 = state_43851;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43851__$1,inst_43847);
} else {
if((state_val_43852 === (4))){
var inst_43829 = (state_43851[(7)]);
var inst_43829__$1 = (state_43851[(2)]);
var inst_43830 = cljs.core.deref(state_atom);
var inst_43831 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_43830);
var inst_43836 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",inst_43829__$1);
var state_43851__$1 = (function (){var statearr_43859 = state_43851;
(statearr_43859[(8)] = inst_43831);

(statearr_43859[(7)] = inst_43829__$1);

return statearr_43859;
})();
if(inst_43836){
var statearr_43860_44260 = state_43851__$1;
(statearr_43860_44260[(1)] = (5));

} else {
var statearr_43861_44261 = state_43851__$1;
(statearr_43861_44261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43852 === (5))){
var inst_43831 = (state_43851[(8)]);
var inst_43838 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.reset_typeahead);
var inst_43839 = re_com.typeahead.search_data_source_BANG_(inst_43831,state_atom,"");
var state_43851__$1 = (function (){var statearr_43864 = state_43851;
(statearr_43864[(9)] = inst_43838);

return statearr_43864;
})();
var statearr_43867_44269 = state_43851__$1;
(statearr_43867_44269[(2)] = inst_43839);

(statearr_43867_44269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43852 === (6))){
var inst_43831 = (state_43851[(8)]);
var inst_43829 = (state_43851[(7)]);
var inst_43841 = re_com.typeahead.search_data_source_BANG_(inst_43831,state_atom,inst_43829);
var state_43851__$1 = state_43851;
var statearr_43869_44275 = state_43851__$1;
(statearr_43869_44275[(2)] = inst_43841);

(statearr_43869_44275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43852 === (7))){
var inst_43843 = (state_43851[(2)]);
var state_43851__$1 = (function (){var statearr_43870 = state_43851;
(statearr_43870[(10)] = inst_43843);

return statearr_43870;
})();
var statearr_43871_44276 = state_43851__$1;
(statearr_43871_44276[(2)] = null);

(statearr_43871_44276[(1)] = (2));


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
});
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__41742__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__41742__auto____0 = (function (){
var statearr_43872 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43872[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__41742__auto__);

(statearr_43872[(1)] = (1));

return statearr_43872;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__41742__auto____1 = (function (state_43851){
while(true){
var ret_value__41743__auto__ = (function (){try{while(true){
var result__41744__auto__ = switch__41741__auto__(state_43851);
if(cljs.core.keyword_identical_QMARK_(result__41744__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41744__auto__;
}
break;
}
}catch (e43873){if((e43873 instanceof Object)){
var ex__41745__auto__ = e43873;
var statearr_43875_44277 = state_43851;
(statearr_43875_44277[(5)] = ex__41745__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43873;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44278 = state_43851;
state_43851 = G__44278;
continue;
} else {
return ret_value__41743__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__41742__auto__ = function(state_43851){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__41742__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__41742__auto____1.call(this,state_43851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__41742__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__41742__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__41742__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__41742__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__41742__auto__;
})()
})();
var state__41766__auto__ = (function (){var statearr_43876 = (f__41765__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41765__auto__.cljs$core$IFn$_invoke$arity$0() : f__41765__auto__.call(null));
(statearr_43876[(6)] = c__41764__auto__);

return statearr_43876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41766__auto__);
}));

return c__41764__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__43878 = cljs.core.deref(state_atom);
var map__43878__$1 = (((((!((map__43878 == null))))?(((((map__43878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43878):map__43878);
var state = map__43878__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43878__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43878__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_text,input_text)){
return state;
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c_input,new_text);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,(function (p1__43877_SHARP_){
var G__43911 = p1__43877_SHARP_;
var G__43911__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__43911,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model(G__43911__$1,new_text);
} else {
return G__43911__$1;
}
}));
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__43912 = cljs.core._EQ_;
var expr__43913 = event.which;
if(cljs.core.truth_((pred__43912.cljs$core$IFn$_invoke$arity$2 ? pred__43912.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.UP,expr__43913) : pred__43912.call(null,goog.events.KeyCodes.UP,expr__43913)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_((pred__43912.cljs$core$IFn$_invoke$arity$2 ? pred__43912.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.DOWN,expr__43913) : pred__43912.call(null,goog.events.KeyCodes.DOWN,expr__43913)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_((pred__43912.cljs$core$IFn$_invoke$arity$2 ? pred__43912.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ENTER,expr__43913) : pred__43912.call(null,goog.events.KeyCodes.ENTER,expr__43913)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_((pred__43912.cljs$core$IFn$_invoke$arity$2 ? pred__43912.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ESC,expr__43913) : pred__43912.call(null,goog.events.KeyCodes.ESC,expr__43913)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,cljs.core.PersistentVector.EMPTY);
} else {
if(cljs.core.truth_((pred__43912.cljs$core$IFn$_invoke$arity$2 ? pred__43912.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.TAB,expr__43913) : pred__43912.call(null,goog.events.KeyCodes.TAB,expr__43913)))){
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
var args__4742__auto__ = [];
var len__4736__auto___44303 = arguments.length;
var i__4737__auto___44304 = (0);
while(true){
if((i__4737__auto___44304 < len__4736__auto___44303)){
args__4742__auto__.push((arguments[i__4737__auto___44304]));

var G__44305 = (i__4737__auto___44304 + (1));
i__4737__auto___44304 = G__44305;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__43933){
var map__43935 = p__43933;
var map__43935__$1 = (((((!((map__43935 == null))))?(((((map__43935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43935):map__43935);
var args = map__43935__$1;
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["typeahead"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__43938 = re_com.typeahead.make_typeahead_state(args);
var map__43938__$1 = (((((!((map__43938 == null))))?(((((map__43938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43938):map__43938);
var state = map__43938__$1;
var c_search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43938__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43938__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(state);
var input_text_model = reagent.core.cursor(state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_(state_atom,c_search);

return (function() { 
var G__44318__delegate = function (p__43960){
var map__43961 = p__43960;
var map__43961__$1 = (((((!((map__43961 == null))))?(((((map__43961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43961):map__43961);
var args__$1 = map__43961__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43961__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43961__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43961__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43961__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43961__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43961__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43961__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43961__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43961__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43961__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43961__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43961__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43961__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43961__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43961__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43961__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var _immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43961__$1,new cljs.core.Keyword(null,"_immediate-model-update?","_immediate-model-update?",1035374450));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43961__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43961__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["typeahead"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__43966 = cljs.core.deref(state_atom);
var map__43966__$1 = (((((!((map__43966 == null))))?(((((map__43966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43966):map__43966);
var state__$1 = map__43966__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43966__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43966__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43966__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43966__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value(model);
var width__$1 = (function (){var or__4126__auto__ = width;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead",new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_key_down_BANG_,state_atom),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (){
return cljs.core.List.EMPTY;
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.input_text_will_blur);
})], null)], null),(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.not_empty(suggestions);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__4529__auto__ = (function re_com$typeahead$iter__43969(s__43970){
return (new cljs.core.LazySeq(null,(function (){
var s__43970__$1 = s__43970;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43970__$1);
if(temp__5735__auto__){
var s__43970__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43970__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__43970__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__43972 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__43971 = (0);
while(true){
if((i__43971 < size__4528__auto__)){
var vec__43974 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__43971);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43974,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43974,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
cljs.core.chunk_append(b__43972,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",((selected_QMARK_)?" active":null)].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__43971,selected_QMARK_,vec__43974,i,s,c__4527__auto__,size__4528__auto__,b__43972,s__43970__$2,temp__5735__auto__,map__43966,map__43966__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__43961,map__43961__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__43938,map__43938__$1,state,c_search,c_input,state_atom,input_text_model,map__43935,map__43935__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__43971,selected_QMARK_,vec__43974,i,s,c__4527__auto__,size__4528__auto__,b__43972,s__43970__$2,temp__5735__auto__,map__43966,map__43966__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__43961,map__43961__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__43938,map__43938__$1,state,c_search,c_input,state_atom,input_text_model,map__43935,map__43935__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__43971,selected_QMARK_,vec__43974,i,s,c__4527__auto__,size__4528__auto__,b__43972,s__43970__$2,temp__5735__auto__,map__43966,map__43966__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__43961,map__43961__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__43938,map__43938__$1,state,c_search,c_input,state_atom,input_text_model,map__43935,map__43935__$1,args){
return (function (p1__43930_SHARP_){
p1__43930_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__43971,selected_QMARK_,vec__43974,i,s,c__4527__auto__,size__4528__auto__,b__43972,s__43970__$2,temp__5735__auto__,map__43966,map__43966__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__43961,map__43961__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__43938,map__43938__$1,state,c_search,c_input,state_atom,input_text_model,map__43935,map__43935__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__44338 = (i__43971 + (1));
i__43971 = G__44338;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43972),re_com$typeahead$iter__43969(cljs.core.chunk_rest(s__43970__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43972),null);
}
} else {
var vec__43980 = cljs.core.first(s__43970__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43980,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43980,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",((selected_QMARK_)?" active":null)].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__43980,i,s,s__43970__$2,temp__5735__auto__,map__43966,map__43966__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__43961,map__43961__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__43938,map__43938__$1,state,c_search,c_input,state_atom,input_text_model,map__43935,map__43935__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__43980,i,s,s__43970__$2,temp__5735__auto__,map__43966,map__43966__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__43961,map__43961__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__43938,map__43938__$1,state,c_search,c_input,state_atom,input_text_model,map__43935,map__43935__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__43980,i,s,s__43970__$2,temp__5735__auto__,map__43966,map__43966__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__43961,map__43961__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__43938,map__43938__$1,state,c_search,c_input,state_atom,input_text_model,map__43935,map__43935__$1,args){
return (function (p1__43930_SHARP_){
p1__43930_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__43980,i,s,s__43970__$2,temp__5735__auto__,map__43966,map__43966__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__43961,map__43961__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__43938,map__43938__$1,state,c_search,c_input,state_atom,input_text_model,map__43935,map__43935__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__43969(cljs.core.rest(s__43970__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__44318 = function (var_args){
var p__43960 = null;
if (arguments.length > 0) {
var G__44342__i = 0, G__44342__a = new Array(arguments.length -  0);
while (G__44342__i < G__44342__a.length) {G__44342__a[G__44342__i] = arguments[G__44342__i + 0]; ++G__44342__i;}
  p__43960 = new cljs.core.IndexedSeq(G__44342__a,0,null);
} 
return G__44318__delegate.call(this,p__43960);};
G__44318.cljs$lang$maxFixedArity = 0;
G__44318.cljs$lang$applyTo = (function (arglist__44343){
var p__43960 = cljs.core.seq(arglist__44343);
return G__44318__delegate(p__43960);
});
G__44318.cljs$core$IFn$_invoke$arity$variadic = G__44318__delegate;
return G__44318;
})()
;
}));

(re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq43931){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43931));
}));

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__41764__auto___44344 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41765__auto__ = (function (){var switch__41741__auto__ = (function (state_44082){
var state_val_44083 = (state_44082[(1)]);
if((state_val_44083 === (7))){
var inst_44030 = (state_44082[(2)]);
var state_44082__$1 = state_44082;
var statearr_44084_44345 = state_44082__$1;
(statearr_44084_44345[(2)] = inst_44030);

(statearr_44084_44345[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (1))){
var inst_44025 = null;
var state_44082__$1 = (function (){var statearr_44085 = state_44082;
(statearr_44085[(7)] = inst_44025);

return statearr_44085;
})();
var statearr_44086_44346 = state_44082__$1;
(statearr_44086_44346[(2)] = null);

(statearr_44086_44346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (4))){
var state_44082__$1 = state_44082;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44082__$1,(7),in$);
} else {
if((state_val_44083 === (15))){
var inst_44067 = (state_44082[(2)]);
var state_44082__$1 = (function (){var statearr_44094 = state_44082;
(statearr_44094[(8)] = inst_44067);

return statearr_44094;
})();
var statearr_44095_44347 = state_44082__$1;
(statearr_44095_44347[(2)] = null);

(statearr_44095_44347[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (13))){
var inst_44055 = (state_44082[(9)]);
var inst_44069 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44055,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_44082__$1 = state_44082;
if(inst_44069){
var statearr_44096_44348 = state_44082__$1;
(statearr_44096_44348[(1)] = (16));

} else {
var statearr_44097_44349 = state_44082__$1;
(statearr_44097_44349[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (6))){
var inst_44034 = (state_44082[(10)]);
var inst_44033 = (state_44082[(2)]);
var inst_44034__$1 = cljs.core.async.timeout(ms);
var inst_44049 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44050 = [in$,inst_44034__$1];
var inst_44051 = (new cljs.core.PersistentVector(null,2,(5),inst_44049,inst_44050,null));
var state_44082__$1 = (function (){var statearr_44102 = state_44082;
(statearr_44102[(10)] = inst_44034__$1);

(statearr_44102[(11)] = inst_44033);

return statearr_44102;
})();
return cljs.core.async.ioc_alts_BANG_(state_44082__$1,(8),inst_44051);
} else {
if((state_val_44083 === (17))){
var state_44082__$1 = state_44082;
var statearr_44104_44350 = state_44082__$1;
(statearr_44104_44350[(2)] = null);

(statearr_44104_44350[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (3))){
var inst_44080 = (state_44082[(2)]);
var state_44082__$1 = state_44082;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44082__$1,inst_44080);
} else {
if((state_val_44083 === (12))){
var inst_44033 = (state_44082[(11)]);
var state_44082__$1 = state_44082;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44082__$1,(15),out,inst_44033);
} else {
if((state_val_44083 === (2))){
var inst_44025 = (state_44082[(7)]);
var inst_44027 = (inst_44025 == null);
var state_44082__$1 = state_44082;
if(cljs.core.truth_(inst_44027)){
var statearr_44111_44351 = state_44082__$1;
(statearr_44111_44351[(1)] = (4));

} else {
var statearr_44113_44352 = state_44082__$1;
(statearr_44113_44352[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (11))){
var inst_44077 = (state_44082[(2)]);
var inst_44025 = inst_44077;
var state_44082__$1 = (function (){var statearr_44153 = state_44082;
(statearr_44153[(7)] = inst_44025);

return statearr_44153;
})();
var statearr_44155_44353 = state_44082__$1;
(statearr_44155_44353[(2)] = null);

(statearr_44155_44353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (9))){
var inst_44053 = (state_44082[(12)]);
var inst_44061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44053,(0),null);
var inst_44062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44053,(1),null);
var state_44082__$1 = (function (){var statearr_44157 = state_44082;
(statearr_44157[(13)] = inst_44062);

return statearr_44157;
})();
var statearr_44159_44354 = state_44082__$1;
(statearr_44159_44354[(2)] = inst_44061);

(statearr_44159_44354[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (5))){
var inst_44025 = (state_44082[(7)]);
var state_44082__$1 = state_44082;
var statearr_44160_44355 = state_44082__$1;
(statearr_44160_44355[(2)] = inst_44025);

(statearr_44160_44355[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (14))){
var inst_44075 = (state_44082[(2)]);
var state_44082__$1 = state_44082;
var statearr_44162_44356 = state_44082__$1;
(statearr_44162_44356[(2)] = inst_44075);

(statearr_44162_44356[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (16))){
var inst_44054 = (state_44082[(14)]);
var state_44082__$1 = state_44082;
var statearr_44163_44357 = state_44082__$1;
(statearr_44163_44357[(2)] = inst_44054);

(statearr_44163_44357[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (10))){
var inst_44034 = (state_44082[(10)]);
var inst_44055 = (state_44082[(9)]);
var inst_44064 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44055,inst_44034);
var state_44082__$1 = state_44082;
if(inst_44064){
var statearr_44167_44358 = state_44082__$1;
(statearr_44167_44358[(1)] = (12));

} else {
var statearr_44168_44359 = state_44082__$1;
(statearr_44168_44359[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (18))){
var inst_44073 = (state_44082[(2)]);
var state_44082__$1 = state_44082;
var statearr_44170_44360 = state_44082__$1;
(statearr_44170_44360[(2)] = inst_44073);

(statearr_44170_44360[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (8))){
var inst_44055 = (state_44082[(9)]);
var inst_44053 = (state_44082[(12)]);
var inst_44053__$1 = (state_44082[(2)]);
var inst_44054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44053__$1,(0),null);
var inst_44055__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44053__$1,(1),null);
var inst_44056 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44055__$1,in$);
var state_44082__$1 = (function (){var statearr_44172 = state_44082;
(statearr_44172[(14)] = inst_44054);

(statearr_44172[(9)] = inst_44055__$1);

(statearr_44172[(12)] = inst_44053__$1);

return statearr_44172;
})();
if(inst_44056){
var statearr_44174_44361 = state_44082__$1;
(statearr_44174_44361[(1)] = (9));

} else {
var statearr_44175_44362 = state_44082__$1;
(statearr_44175_44362[(1)] = (10));

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
});
return (function() {
var re_com$typeahead$debounce_$_state_machine__41742__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__41742__auto____0 = (function (){
var statearr_44178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44178[(0)] = re_com$typeahead$debounce_$_state_machine__41742__auto__);

(statearr_44178[(1)] = (1));

return statearr_44178;
});
var re_com$typeahead$debounce_$_state_machine__41742__auto____1 = (function (state_44082){
while(true){
var ret_value__41743__auto__ = (function (){try{while(true){
var result__41744__auto__ = switch__41741__auto__(state_44082);
if(cljs.core.keyword_identical_QMARK_(result__41744__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41744__auto__;
}
break;
}
}catch (e44179){if((e44179 instanceof Object)){
var ex__41745__auto__ = e44179;
var statearr_44181_44363 = state_44082;
(statearr_44181_44363[(5)] = ex__41745__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44179;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44364 = state_44082;
state_44082 = G__44364;
continue;
} else {
return ret_value__41743__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__41742__auto__ = function(state_44082){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__41742__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__41742__auto____1.call(this,state_44082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__41742__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__41742__auto____0;
re_com$typeahead$debounce_$_state_machine__41742__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__41742__auto____1;
return re_com$typeahead$debounce_$_state_machine__41742__auto__;
})()
})();
var state__41766__auto__ = (function (){var statearr_44182 = (f__41765__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41765__auto__.cljs$core$IFn$_invoke$arity$0() : f__41765__auto__.call(null));
(statearr_44182[(6)] = c__41764__auto___44344);

return statearr_44182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41766__auto__);
}));


return out;
});

//# sourceMappingURL=re_com.typeahead.js.map
