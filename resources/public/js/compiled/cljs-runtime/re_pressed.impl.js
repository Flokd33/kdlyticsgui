goog.provide('re_pressed.impl');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('goog.events');
re_pressed.impl.ns_root = "re-pressed.core/";
re_pressed.impl.max_record = (25);
re_pressed.impl.modifier_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(91),null,(17),null,(16),null,(18),null], null), null);
re_pressed.impl.__GT_ns_keyword = (function re_pressed$impl$__GT_ns_keyword(event_type){
return (function() {
var re_pressed$impl$__GT_ns_keyword_$_ns_keyword = null;
var re_pressed$impl$__GT_ns_keyword_$_ns_keyword__0 = (function (){
return re_pressed$impl$__GT_ns_keyword_$_ns_keyword.cljs$core$IFn$_invoke$arity$1(null);
});
var re_pressed$impl$__GT_ns_keyword_$_ns_keyword__1 = (function (suffix){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([re_pressed.impl.ns_root,cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_type),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''));
});
re_pressed$impl$__GT_ns_keyword_$_ns_keyword = function(suffix){
switch(arguments.length){
case 0:
return re_pressed$impl$__GT_ns_keyword_$_ns_keyword__0.call(this);
case 1:
return re_pressed$impl$__GT_ns_keyword_$_ns_keyword__1.call(this,suffix);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_pressed$impl$__GT_ns_keyword_$_ns_keyword.cljs$core$IFn$_invoke$arity$0 = re_pressed$impl$__GT_ns_keyword_$_ns_keyword__0;
re_pressed$impl$__GT_ns_keyword_$_ns_keyword.cljs$core$IFn$_invoke$arity$1 = re_pressed$impl$__GT_ns_keyword_$_ns_keyword__1;
return re_pressed$impl$__GT_ns_keyword_$_ns_keyword;
})()
});
re_pressed.impl.is_key_QMARK_ = (function re_pressed$impl$is_key_QMARK_(recent_key,key_map){
return cljs.core.every_QMARK_((function (p__40132){
var vec__40133 = p__40132;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40133,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40133,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(recent_key,k),v);
}),key_map);
});
re_pressed.impl.register_subs = (function re_pressed$impl$register_subs(event_type){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
var G__40136_40233 = (ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-keys") : ns_keyword.call(null,"-keys"));
var G__40137_40234 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$0 ? ns_keyword.cljs$core$IFn$_invoke$arity$0() : ns_keyword.call(null)),new cljs.core.Keyword(null,"keys","keys",1068423698)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__40136_40233,G__40137_40234) : re_frame.core.reg_sub.call(null,G__40136_40233,G__40137_40234));

var G__40138_40235 = (ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-event-keys") : ns_keyword.call(null,"-event-keys"));
var G__40139_40236 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$0 ? ns_keyword.cljs$core$IFn$_invoke$arity$0() : ns_keyword.call(null)),new cljs.core.Keyword(null,"event-keys","event-keys",-835966631)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__40138_40235,G__40139_40236) : re_frame.core.reg_sub.call(null,G__40138_40235,G__40139_40236));

var G__40140_40237 = (ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-clear-keys") : ns_keyword.call(null,"-clear-keys"));
var G__40141_40238 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$0 ? ns_keyword.cljs$core$IFn$_invoke$arity$0() : ns_keyword.call(null)),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__40140_40237,G__40141_40238) : re_frame.core.reg_sub.call(null,G__40140_40237,G__40141_40238));

var G__40142_40239 = (ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-always-listen-keys") : ns_keyword.call(null,"-always-listen-keys"));
var G__40143_40240 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$0 ? ns_keyword.cljs$core$IFn$_invoke$arity$0() : ns_keyword.call(null)),new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__40142_40239,G__40143_40240) : re_frame.core.reg_sub.call(null,G__40142_40239,G__40143_40240));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",event_type)){
var G__40144 = (ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-prevent-default-keys") : ns_keyword.call(null,"-prevent-default-keys"));
var G__40145 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$0 ? ns_keyword.cljs$core$IFn$_invoke$arity$0() : ns_keyword.call(null)),new cljs.core.Keyword(null,"prevent-default-keys","prevent-default-keys",1744205310)], null));
});
return (re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__40144,G__40145) : re_frame.core.reg_sub.call(null,G__40144,G__40145));
} else {
return null;
}
});
re_pressed.impl.__GT_set_key_BANG_ = (function re_pressed$impl$__GT_set_key_BANG_(event_type){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
return (function re_pressed$impl$__GT_set_key_BANG__$_set_key_BANG_(p__40146,p__40147){
var map__40148 = p__40146;
var map__40148__$1 = (((((!((map__40148 == null))))?(((((map__40148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40148):map__40148);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40148__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40149 = p__40147;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40149,(0),null);
var key_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40149,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$0 ? ns_keyword.cljs$core$IFn$_invoke$arity$0() : ns_keyword.call(null)),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),(function (key_maps){
var keys = (cljs.core.truth_(key_map)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = key_maps;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),key_map):key_maps);

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take_last(re_pressed.impl.max_record,keys));
}))], null);
});
});
re_pressed.impl.__GT_clear_keys_BANG_ = (function re_pressed$impl$__GT_clear_keys_BANG_(event_type){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
return (function re_pressed$impl$__GT_clear_keys_BANG__$_clear_keys_BANG_(p__40153,p__40154){
var map__40155 = p__40153;
var map__40155__$1 = (((((!((map__40155 == null))))?(((((map__40155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40155):map__40155);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40155__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40156 = p__40154;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40156,(0),null);
var key_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40156,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$0 ? ns_keyword.cljs$core$IFn$_invoke$arity$0() : ns_keyword.call(null)),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),cljs.core.PersistentVector.EMPTY)], null);
});
});
re_pressed.impl.prevent_default_keys_BANG_ = (function re_pressed$impl$prevent_default_keys_BANG_(_,p__40160){
var vec__40161 = p__40160;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40161,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40161,(1),null);
var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([re_pressed.impl.ns_root,"prevent-default"].join(''));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,e]);
});
re_pressed.impl.register_events = (function re_pressed$impl$register_events(event_type){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-set-key") : ns_keyword.call(null,"-set-key")),re_pressed.impl.__GT_set_key_BANG_(event_type));

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-clear-keys") : ns_keyword.call(null,"-clear-keys")),re_pressed.impl.__GT_clear_keys_BANG_(event_type));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",event_type)){
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-prevent-default-keys") : ns_keyword.call(null,"-prevent-default-keys")),re_pressed.impl.prevent_default_keys_BANG_);
} else {
return null;
}
});
re_pressed.impl.register_effects = (function re_pressed$impl$register_effects(event_type){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",event_type)){
var G__40164 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([re_pressed.impl.ns_root,"prevent-default"].join(''));
var G__40165 = (function (e){
return e.preventDefault();
});
return (re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__40164,G__40165) : re_frame.core.reg_fx.call(null,G__40164,G__40165));
} else {
return null;
}
});
var G__40171_40251 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([re_pressed.impl.ns_root,"keyboard-event"].join(''));
var G__40172_40252 = (function (p__40173){
var map__40174 = p__40173;
var map__40174__$1 = (((((!((map__40174 == null))))?(((((map__40174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40174):map__40174);
var event_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40174__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
re_pressed.impl.register_subs(event_type);

re_pressed.impl.register_events(event_type);

re_pressed.impl.register_effects(event_type);

var G__40176 = document;
var G__40177 = event_type;
var G__40178 = (function (e){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
var e_key = e.keyCode;
var modifier_key_QMARK_ = (re_pressed.impl.modifier_keys.cljs$core$IFn$_invoke$arity$1 ? re_pressed.impl.modifier_keys.cljs$core$IFn$_invoke$arity$1(e_key) : re_pressed.impl.modifier_keys.call(null,e_key));
var tag_name = e.target.tagName;
var entering_input_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["SELECT",null,"INPUT",null,"TEXTAREA",null], null), null),tag_name);
var hit_key = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"altKey","altKey",-670253656),e.altKey,new cljs.core.Keyword(null,"ctrlKey","ctrlKey",430760908),e.ctrlKey,new cljs.core.Keyword(null,"metaKey","metaKey",1006742180),e.metaKey,new cljs.core.Keyword(null,"shiftKey","shiftKey",1716666823),e.shiftKey,new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),e.keyCode], null);
var always_listen_keys = cljs.core.deref((function (){var G__40179 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-always-listen-keys") : ns_keyword.call(null,"-always-listen-keys"))], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__40179) : re_frame.core.subscribe.call(null,G__40179));
})());
var always_listen_QMARK_ = cljs.core.some((function (p1__40166_SHARP_){
return re_pressed.impl.is_key_QMARK_(hit_key,p1__40166_SHARP_);
}),always_listen_keys);
if(cljs.core.truth_((function (){var or__4126__auto__ = ((cljs.core.not(modifier_key_QMARK_)) && ((!(entering_input_QMARK_))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return always_listen_QMARK_;
}
})())){
var G__40180_40275 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-set-key") : ns_keyword.call(null,"-set-key")),hit_key], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__40180_40275) : re_frame.core.dispatch_sync.call(null,G__40180_40275));

var recent_keys = cljs.core.deref((function (){var G__40184 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-keys") : ns_keyword.call(null,"-keys"))], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__40184) : re_frame.core.subscribe.call(null,G__40184));
})());
var event_keys = cljs.core.deref((function (){var G__40185 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-event-keys") : ns_keyword.call(null,"-event-keys"))], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__40185) : re_frame.core.subscribe.call(null,G__40185));
})());
var clear_keys = cljs.core.deref((function (){var G__40186 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-clear-keys") : ns_keyword.call(null,"-clear-keys"))], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__40186) : re_frame.core.subscribe.call(null,G__40186));
})());
var recent_key = cljs.core.last(recent_keys);
var is_key_sequence_QMARK_ = (function (key_maps){
return cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p1__40167_SHARP_,p2__40168_SHARP_){
return re_pressed.impl.is_key_QMARK_(p1__40167_SHARP_,p2__40168_SHARP_);
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse(recent_keys),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(re_pressed.impl.max_record,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.reverse(key_maps)));
});
var check_events = cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function re_pressed$impl$iter__40187(s__40188){
return (new cljs.core.LazySeq(null,(function (){
var s__40188__$1 = s__40188;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40188__$1);
if(temp__5735__auto__){
var s__40188__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40188__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__40188__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__40190 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__40189 = (0);
while(true){
if((i__40189 < size__4528__auto__)){
var vec__40191 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__40189);
var seq__40192 = cljs.core.seq(vec__40191);
var first__40193 = cljs.core.first(seq__40192);
var seq__40192__$1 = cljs.core.next(seq__40192);
var trigger_event = first__40193;
var ks = seq__40192__$1;
cljs.core.chunk_append(b__40190,(function (){var triggered_QMARK_ = cljs.core.some(is_key_sequence_QMARK_,ks);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[trigger_event,triggered_QMARK_],null));
})());

var G__40296 = (i__40189 + (1));
i__40189 = G__40296;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40190),re_pressed$impl$iter__40187(cljs.core.chunk_rest(s__40188__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40190),null);
}
} else {
var vec__40194 = cljs.core.first(s__40188__$2);
var seq__40195 = cljs.core.seq(vec__40194);
var first__40196 = cljs.core.first(seq__40195);
var seq__40195__$1 = cljs.core.next(seq__40195);
var trigger_event = first__40196;
var ks = seq__40195__$1;
return cljs.core.cons((function (){var triggered_QMARK_ = cljs.core.some(is_key_sequence_QMARK_,ks);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[trigger_event,triggered_QMARK_],null));
})(),re_pressed$impl$iter__40187(cljs.core.rest(s__40188__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(event_keys);
})());
var vec__40181 = (function (){var G__40197 = check_events;
var G__40197__$1 = (((G__40197 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__40169_SHARP_){
return cljs.core.second(p1__40169_SHARP_) === true;
}),G__40197));
if((G__40197__$1 == null)){
return null;
} else {
return cljs.core.first(G__40197__$1);
}
})();
var triggered_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40181,(0),null);
var event_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40181,(1),null);
var clear_QMARK_ = cljs.core.some(is_key_sequence_QMARK_,clear_keys);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",event_type)){
var prevent_default_keys_40302 = cljs.core.deref((function (){var G__40198 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-prevent-default-keys") : ns_keyword.call(null,"-prevent-default-keys"))], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__40198) : re_frame.core.subscribe.call(null,G__40198));
})());
var prevent_default_QMARK__40303 = cljs.core.some((function (p1__40170_SHARP_){
return re_pressed.impl.is_key_QMARK_(recent_key,p1__40170_SHARP_);
}),prevent_default_keys_40302);
if(cljs.core.truth_(prevent_default_QMARK__40303)){
var G__40199_40304 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-prevent-default-keys") : ns_keyword.call(null,"-prevent-default-keys")),e], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__40199_40304) : re_frame.core.dispatch_sync.call(null,G__40199_40304));
} else {
}
} else {
}

if(cljs.core.truth_(clear_QMARK_)){
var G__40200 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-clear-keys") : ns_keyword.call(null,"-clear-keys"))], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__40200) : re_frame.core.dispatch_sync.call(null,G__40200));
} else {
if(cljs.core.truth_(event_QMARK_)){
var G__40201 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(triggered_event,e,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([recent_keys], 0));
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__40201) : re_frame.core.dispatch_sync.call(null,G__40201));
} else {
return null;

}
}
} else {
return null;
}
});
return goog.events.listen(G__40176,G__40177,G__40178);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__40171_40251,G__40172_40252) : re_frame.core.reg_fx.call(null,G__40171_40251,G__40172_40252));

//# sourceMappingURL=re_pressed.impl.js.map
