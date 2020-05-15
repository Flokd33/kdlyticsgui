goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_51641 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_51641(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_51642 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_51642(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__51126 = coll;
var G__51127 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__51126,G__51127) : shadow.dom.lazy_native_coll_seq.call(null,G__51126,G__51127));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__51149 = arguments.length;
switch (G__51149) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__51154 = arguments.length;
switch (G__51154) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__51164 = arguments.length;
switch (G__51164) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__51170 = arguments.length;
switch (G__51170) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__51181 = arguments.length;
switch (G__51181) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__51182 = document;
var G__51183 = shadow.dom.dom_node(el);
return goog.dom.contains(G__51182,G__51183);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__51184 = shadow.dom.dom_node(parent);
var G__51185 = shadow.dom.dom_node(el);
return goog.dom.contains(G__51184,G__51185);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__51186 = shadow.dom.dom_node(el);
var G__51187 = cls;
return goog.dom.classlist.add(G__51186,G__51187);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__51188 = shadow.dom.dom_node(el);
var G__51189 = cls;
return goog.dom.classlist.remove(G__51188,G__51189);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__51192 = arguments.length;
switch (G__51192) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__51194 = shadow.dom.dom_node(el);
var G__51195 = cls;
return goog.dom.classlist.toggle(G__51194,G__51195);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e51207){if((e51207 instanceof Object)){
var e = e51207;
return console.log("didnt support attachEvent",el,e);
} else {
throw e51207;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__51210 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__51211 = null;
var count__51212 = (0);
var i__51213 = (0);
while(true){
if((i__51213 < count__51212)){
var el = chunk__51211.cljs$core$IIndexed$_nth$arity$2(null,i__51213);
var handler_51669__$1 = ((function (seq__51210,chunk__51211,count__51212,i__51213,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__51210,chunk__51211,count__51212,i__51213,el))
;
var G__51223_51670 = el;
var G__51224_51671 = cljs.core.name(ev);
var G__51225_51672 = handler_51669__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__51223_51670,G__51224_51671,G__51225_51672) : shadow.dom.dom_listen.call(null,G__51223_51670,G__51224_51671,G__51225_51672));


var G__51676 = seq__51210;
var G__51677 = chunk__51211;
var G__51678 = count__51212;
var G__51679 = (i__51213 + (1));
seq__51210 = G__51676;
chunk__51211 = G__51677;
count__51212 = G__51678;
i__51213 = G__51679;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51210);
if(temp__5735__auto__){
var seq__51210__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51210__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51210__$1);
var G__51681 = cljs.core.chunk_rest(seq__51210__$1);
var G__51682 = c__4556__auto__;
var G__51683 = cljs.core.count(c__4556__auto__);
var G__51684 = (0);
seq__51210 = G__51681;
chunk__51211 = G__51682;
count__51212 = G__51683;
i__51213 = G__51684;
continue;
} else {
var el = cljs.core.first(seq__51210__$1);
var handler_51685__$1 = ((function (seq__51210,chunk__51211,count__51212,i__51213,el,seq__51210__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__51210,chunk__51211,count__51212,i__51213,el,seq__51210__$1,temp__5735__auto__))
;
var G__51229_51687 = el;
var G__51230_51688 = cljs.core.name(ev);
var G__51231_51689 = handler_51685__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__51229_51687,G__51230_51688,G__51231_51689) : shadow.dom.dom_listen.call(null,G__51229_51687,G__51230_51688,G__51231_51689));


var G__51690 = cljs.core.next(seq__51210__$1);
var G__51691 = null;
var G__51692 = (0);
var G__51693 = (0);
seq__51210 = G__51690;
chunk__51211 = G__51691;
count__51212 = G__51692;
i__51213 = G__51693;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__51235 = arguments.length;
switch (G__51235) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__51237 = shadow.dom.dom_node(el);
var G__51238 = cljs.core.name(ev);
var G__51239 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__51237,G__51238,G__51239) : shadow.dom.dom_listen.call(null,G__51237,G__51238,G__51239));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__51240 = shadow.dom.dom_node(el);
var G__51241 = cljs.core.name(ev);
var G__51242 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__51240,G__51241,G__51242) : shadow.dom.dom_listen_remove.call(null,G__51240,G__51241,G__51242));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__51243 = cljs.core.seq(events);
var chunk__51244 = null;
var count__51245 = (0);
var i__51246 = (0);
while(true){
if((i__51246 < count__51245)){
var vec__51253 = chunk__51244.cljs$core$IIndexed$_nth$arity$2(null,i__51246);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51253,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51253,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51699 = seq__51243;
var G__51700 = chunk__51244;
var G__51701 = count__51245;
var G__51702 = (i__51246 + (1));
seq__51243 = G__51699;
chunk__51244 = G__51700;
count__51245 = G__51701;
i__51246 = G__51702;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51243);
if(temp__5735__auto__){
var seq__51243__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51243__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51243__$1);
var G__51704 = cljs.core.chunk_rest(seq__51243__$1);
var G__51705 = c__4556__auto__;
var G__51706 = cljs.core.count(c__4556__auto__);
var G__51707 = (0);
seq__51243 = G__51704;
chunk__51244 = G__51705;
count__51245 = G__51706;
i__51246 = G__51707;
continue;
} else {
var vec__51256 = cljs.core.first(seq__51243__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51256,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51256,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51710 = cljs.core.next(seq__51243__$1);
var G__51711 = null;
var G__51712 = (0);
var G__51713 = (0);
seq__51243 = G__51710;
chunk__51244 = G__51711;
count__51245 = G__51712;
i__51246 = G__51713;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__51259 = cljs.core.seq(styles);
var chunk__51260 = null;
var count__51261 = (0);
var i__51262 = (0);
while(true){
if((i__51262 < count__51261)){
var vec__51275 = chunk__51260.cljs$core$IIndexed$_nth$arity$2(null,i__51262);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51275,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51275,(1),null);
var G__51278_51715 = dom;
var G__51279_51716 = cljs.core.name(k);
var G__51280_51717 = (((v == null))?"":v);
goog.style.setStyle(G__51278_51715,G__51279_51716,G__51280_51717);


var G__51719 = seq__51259;
var G__51720 = chunk__51260;
var G__51721 = count__51261;
var G__51722 = (i__51262 + (1));
seq__51259 = G__51719;
chunk__51260 = G__51720;
count__51261 = G__51721;
i__51262 = G__51722;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51259);
if(temp__5735__auto__){
var seq__51259__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51259__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51259__$1);
var G__51725 = cljs.core.chunk_rest(seq__51259__$1);
var G__51726 = c__4556__auto__;
var G__51727 = cljs.core.count(c__4556__auto__);
var G__51728 = (0);
seq__51259 = G__51725;
chunk__51260 = G__51726;
count__51261 = G__51727;
i__51262 = G__51728;
continue;
} else {
var vec__51281 = cljs.core.first(seq__51259__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51281,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51281,(1),null);
var G__51284_51731 = dom;
var G__51285_51733 = cljs.core.name(k);
var G__51286_51734 = (((v == null))?"":v);
goog.style.setStyle(G__51284_51731,G__51285_51733,G__51286_51734);


var G__51737 = cljs.core.next(seq__51259__$1);
var G__51738 = null;
var G__51739 = (0);
var G__51740 = (0);
seq__51259 = G__51737;
chunk__51260 = G__51738;
count__51261 = G__51739;
i__51262 = G__51740;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__51287_51742 = key;
var G__51287_51743__$1 = (((G__51287_51742 instanceof cljs.core.Keyword))?G__51287_51742.fqn:null);
switch (G__51287_51743__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_51755 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_51755,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_51755,"aria-");
}
})())){
el.setAttribute(ks_51755,value);
} else {
(el[ks_51755] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__51288 = shadow.dom.dom_node(el);
var G__51289 = cls;
return goog.dom.classlist.contains(G__51288,G__51289);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__51290){
var map__51291 = p__51290;
var map__51291__$1 = (((((!((map__51291 == null))))?(((((map__51291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51291):map__51291);
var props = map__51291__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51291__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__51293 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51293,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51293,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51293,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__51296 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__51296,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__51296;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__51298 = arguments.length;
switch (G__51298) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__51299){
var vec__51300 = p__51299;
var seq__51301 = cljs.core.seq(vec__51300);
var first__51302 = cljs.core.first(seq__51301);
var seq__51301__$1 = cljs.core.next(seq__51301);
var nn = first__51302;
var first__51302__$1 = cljs.core.first(seq__51301__$1);
var seq__51301__$2 = cljs.core.next(seq__51301__$1);
var np = first__51302__$1;
var nc = seq__51301__$2;
var node = vec__51300;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51303 = nn;
var G__51304 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__51303,G__51304) : create_fn.call(null,G__51303,G__51304));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51305 = nn;
var G__51306 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__51305,G__51306) : create_fn.call(null,G__51305,G__51306));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__51307 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51307,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51307,(1),null);
var seq__51310_51792 = cljs.core.seq(node_children);
var chunk__51311_51793 = null;
var count__51312_51794 = (0);
var i__51313_51795 = (0);
while(true){
if((i__51313_51795 < count__51312_51794)){
var child_struct_51797 = chunk__51311_51793.cljs$core$IIndexed$_nth$arity$2(null,i__51313_51795);
var children_51798 = shadow.dom.dom_node(child_struct_51797);
if(cljs.core.seq_QMARK_(children_51798)){
var seq__51326_51800 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51798));
var chunk__51328_51801 = null;
var count__51329_51802 = (0);
var i__51330_51803 = (0);
while(true){
if((i__51330_51803 < count__51329_51802)){
var child_51806 = chunk__51328_51801.cljs$core$IIndexed$_nth$arity$2(null,i__51330_51803);
if(cljs.core.truth_(child_51806)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51806);


var G__51807 = seq__51326_51800;
var G__51808 = chunk__51328_51801;
var G__51809 = count__51329_51802;
var G__51810 = (i__51330_51803 + (1));
seq__51326_51800 = G__51807;
chunk__51328_51801 = G__51808;
count__51329_51802 = G__51809;
i__51330_51803 = G__51810;
continue;
} else {
var G__51812 = seq__51326_51800;
var G__51813 = chunk__51328_51801;
var G__51814 = count__51329_51802;
var G__51815 = (i__51330_51803 + (1));
seq__51326_51800 = G__51812;
chunk__51328_51801 = G__51813;
count__51329_51802 = G__51814;
i__51330_51803 = G__51815;
continue;
}
} else {
var temp__5735__auto___51816 = cljs.core.seq(seq__51326_51800);
if(temp__5735__auto___51816){
var seq__51326_51817__$1 = temp__5735__auto___51816;
if(cljs.core.chunked_seq_QMARK_(seq__51326_51817__$1)){
var c__4556__auto___51818 = cljs.core.chunk_first(seq__51326_51817__$1);
var G__51819 = cljs.core.chunk_rest(seq__51326_51817__$1);
var G__51820 = c__4556__auto___51818;
var G__51821 = cljs.core.count(c__4556__auto___51818);
var G__51822 = (0);
seq__51326_51800 = G__51819;
chunk__51328_51801 = G__51820;
count__51329_51802 = G__51821;
i__51330_51803 = G__51822;
continue;
} else {
var child_51825 = cljs.core.first(seq__51326_51817__$1);
if(cljs.core.truth_(child_51825)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51825);


var G__51826 = cljs.core.next(seq__51326_51817__$1);
var G__51827 = null;
var G__51828 = (0);
var G__51829 = (0);
seq__51326_51800 = G__51826;
chunk__51328_51801 = G__51827;
count__51329_51802 = G__51828;
i__51330_51803 = G__51829;
continue;
} else {
var G__51831 = cljs.core.next(seq__51326_51817__$1);
var G__51832 = null;
var G__51833 = (0);
var G__51834 = (0);
seq__51326_51800 = G__51831;
chunk__51328_51801 = G__51832;
count__51329_51802 = G__51833;
i__51330_51803 = G__51834;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51798);
}


var G__51836 = seq__51310_51792;
var G__51837 = chunk__51311_51793;
var G__51838 = count__51312_51794;
var G__51839 = (i__51313_51795 + (1));
seq__51310_51792 = G__51836;
chunk__51311_51793 = G__51837;
count__51312_51794 = G__51838;
i__51313_51795 = G__51839;
continue;
} else {
var temp__5735__auto___51842 = cljs.core.seq(seq__51310_51792);
if(temp__5735__auto___51842){
var seq__51310_51844__$1 = temp__5735__auto___51842;
if(cljs.core.chunked_seq_QMARK_(seq__51310_51844__$1)){
var c__4556__auto___51845 = cljs.core.chunk_first(seq__51310_51844__$1);
var G__51846 = cljs.core.chunk_rest(seq__51310_51844__$1);
var G__51847 = c__4556__auto___51845;
var G__51848 = cljs.core.count(c__4556__auto___51845);
var G__51849 = (0);
seq__51310_51792 = G__51846;
chunk__51311_51793 = G__51847;
count__51312_51794 = G__51848;
i__51313_51795 = G__51849;
continue;
} else {
var child_struct_51853 = cljs.core.first(seq__51310_51844__$1);
var children_51854 = shadow.dom.dom_node(child_struct_51853);
if(cljs.core.seq_QMARK_(children_51854)){
var seq__51332_51857 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51854));
var chunk__51334_51858 = null;
var count__51335_51859 = (0);
var i__51336_51860 = (0);
while(true){
if((i__51336_51860 < count__51335_51859)){
var child_51863 = chunk__51334_51858.cljs$core$IIndexed$_nth$arity$2(null,i__51336_51860);
if(cljs.core.truth_(child_51863)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51863);


var G__51866 = seq__51332_51857;
var G__51867 = chunk__51334_51858;
var G__51868 = count__51335_51859;
var G__51869 = (i__51336_51860 + (1));
seq__51332_51857 = G__51866;
chunk__51334_51858 = G__51867;
count__51335_51859 = G__51868;
i__51336_51860 = G__51869;
continue;
} else {
var G__51876 = seq__51332_51857;
var G__51877 = chunk__51334_51858;
var G__51878 = count__51335_51859;
var G__51879 = (i__51336_51860 + (1));
seq__51332_51857 = G__51876;
chunk__51334_51858 = G__51877;
count__51335_51859 = G__51878;
i__51336_51860 = G__51879;
continue;
}
} else {
var temp__5735__auto___51882__$1 = cljs.core.seq(seq__51332_51857);
if(temp__5735__auto___51882__$1){
var seq__51332_51884__$1 = temp__5735__auto___51882__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51332_51884__$1)){
var c__4556__auto___51885 = cljs.core.chunk_first(seq__51332_51884__$1);
var G__51888 = cljs.core.chunk_rest(seq__51332_51884__$1);
var G__51889 = c__4556__auto___51885;
var G__51890 = cljs.core.count(c__4556__auto___51885);
var G__51891 = (0);
seq__51332_51857 = G__51888;
chunk__51334_51858 = G__51889;
count__51335_51859 = G__51890;
i__51336_51860 = G__51891;
continue;
} else {
var child_51897 = cljs.core.first(seq__51332_51884__$1);
if(cljs.core.truth_(child_51897)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51897);


var G__51899 = cljs.core.next(seq__51332_51884__$1);
var G__51900 = null;
var G__51901 = (0);
var G__51902 = (0);
seq__51332_51857 = G__51899;
chunk__51334_51858 = G__51900;
count__51335_51859 = G__51901;
i__51336_51860 = G__51902;
continue;
} else {
var G__51903 = cljs.core.next(seq__51332_51884__$1);
var G__51904 = null;
var G__51905 = (0);
var G__51906 = (0);
seq__51332_51857 = G__51903;
chunk__51334_51858 = G__51904;
count__51335_51859 = G__51905;
i__51336_51860 = G__51906;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51854);
}


var G__51910 = cljs.core.next(seq__51310_51844__$1);
var G__51911 = null;
var G__51912 = (0);
var G__51913 = (0);
seq__51310_51792 = G__51910;
chunk__51311_51793 = G__51911;
count__51312_51794 = G__51912;
i__51313_51795 = G__51913;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__51341 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__51341);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__51344 = cljs.core.seq(node);
var chunk__51345 = null;
var count__51346 = (0);
var i__51347 = (0);
while(true){
if((i__51347 < count__51346)){
var n = chunk__51345.cljs$core$IIndexed$_nth$arity$2(null,i__51347);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__51931 = seq__51344;
var G__51932 = chunk__51345;
var G__51933 = count__51346;
var G__51934 = (i__51347 + (1));
seq__51344 = G__51931;
chunk__51345 = G__51932;
count__51346 = G__51933;
i__51347 = G__51934;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51344);
if(temp__5735__auto__){
var seq__51344__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51344__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51344__$1);
var G__51935 = cljs.core.chunk_rest(seq__51344__$1);
var G__51936 = c__4556__auto__;
var G__51937 = cljs.core.count(c__4556__auto__);
var G__51938 = (0);
seq__51344 = G__51935;
chunk__51345 = G__51936;
count__51346 = G__51937;
i__51347 = G__51938;
continue;
} else {
var n = cljs.core.first(seq__51344__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__51942 = cljs.core.next(seq__51344__$1);
var G__51943 = null;
var G__51944 = (0);
var G__51945 = (0);
seq__51344 = G__51942;
chunk__51345 = G__51943;
count__51346 = G__51944;
i__51347 = G__51945;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__51348 = shadow.dom.dom_node(new$);
var G__51349 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__51348,G__51349);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__51352 = arguments.length;
switch (G__51352) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__51355 = arguments.length;
switch (G__51355) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__51361 = arguments.length;
switch (G__51361) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51979 = arguments.length;
var i__4737__auto___51980 = (0);
while(true){
if((i__4737__auto___51980 < len__4736__auto___51979)){
args__4742__auto__.push((arguments[i__4737__auto___51980]));

var G__51981 = (i__4737__auto___51980 + (1));
i__4737__auto___51980 = G__51981;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__51367_51985 = cljs.core.seq(nodes);
var chunk__51368_51986 = null;
var count__51369_51987 = (0);
var i__51370_51988 = (0);
while(true){
if((i__51370_51988 < count__51369_51987)){
var node_51991 = chunk__51368_51986.cljs$core$IIndexed$_nth$arity$2(null,i__51370_51988);
fragment.appendChild(shadow.dom._to_dom(node_51991));


var G__51992 = seq__51367_51985;
var G__51993 = chunk__51368_51986;
var G__51994 = count__51369_51987;
var G__51995 = (i__51370_51988 + (1));
seq__51367_51985 = G__51992;
chunk__51368_51986 = G__51993;
count__51369_51987 = G__51994;
i__51370_51988 = G__51995;
continue;
} else {
var temp__5735__auto___51999 = cljs.core.seq(seq__51367_51985);
if(temp__5735__auto___51999){
var seq__51367_52001__$1 = temp__5735__auto___51999;
if(cljs.core.chunked_seq_QMARK_(seq__51367_52001__$1)){
var c__4556__auto___52002 = cljs.core.chunk_first(seq__51367_52001__$1);
var G__52004 = cljs.core.chunk_rest(seq__51367_52001__$1);
var G__52005 = c__4556__auto___52002;
var G__52006 = cljs.core.count(c__4556__auto___52002);
var G__52007 = (0);
seq__51367_51985 = G__52004;
chunk__51368_51986 = G__52005;
count__51369_51987 = G__52006;
i__51370_51988 = G__52007;
continue;
} else {
var node_52010 = cljs.core.first(seq__51367_52001__$1);
fragment.appendChild(shadow.dom._to_dom(node_52010));


var G__52012 = cljs.core.next(seq__51367_52001__$1);
var G__52013 = null;
var G__52014 = (0);
var G__52015 = (0);
seq__51367_51985 = G__52012;
chunk__51368_51986 = G__52013;
count__51369_51987 = G__52014;
i__51370_51988 = G__52015;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq51366){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51366));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__51371_52021 = cljs.core.seq(scripts);
var chunk__51372_52022 = null;
var count__51373_52023 = (0);
var i__51374_52024 = (0);
while(true){
if((i__51374_52024 < count__51373_52023)){
var vec__51381_52025 = chunk__51372_52022.cljs$core$IIndexed$_nth$arity$2(null,i__51374_52024);
var script_tag_52026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51381_52025,(0),null);
var script_body_52027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51381_52025,(1),null);
eval(script_body_52027);


var G__52032 = seq__51371_52021;
var G__52033 = chunk__51372_52022;
var G__52034 = count__51373_52023;
var G__52035 = (i__51374_52024 + (1));
seq__51371_52021 = G__52032;
chunk__51372_52022 = G__52033;
count__51373_52023 = G__52034;
i__51374_52024 = G__52035;
continue;
} else {
var temp__5735__auto___52038 = cljs.core.seq(seq__51371_52021);
if(temp__5735__auto___52038){
var seq__51371_52039__$1 = temp__5735__auto___52038;
if(cljs.core.chunked_seq_QMARK_(seq__51371_52039__$1)){
var c__4556__auto___52041 = cljs.core.chunk_first(seq__51371_52039__$1);
var G__52042 = cljs.core.chunk_rest(seq__51371_52039__$1);
var G__52043 = c__4556__auto___52041;
var G__52044 = cljs.core.count(c__4556__auto___52041);
var G__52045 = (0);
seq__51371_52021 = G__52042;
chunk__51372_52022 = G__52043;
count__51373_52023 = G__52044;
i__51374_52024 = G__52045;
continue;
} else {
var vec__51384_52046 = cljs.core.first(seq__51371_52039__$1);
var script_tag_52047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51384_52046,(0),null);
var script_body_52048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51384_52046,(1),null);
eval(script_body_52048);


var G__52050 = cljs.core.next(seq__51371_52039__$1);
var G__52051 = null;
var G__52052 = (0);
var G__52053 = (0);
seq__51371_52021 = G__52050;
chunk__51372_52022 = G__52051;
count__51373_52023 = G__52052;
i__51374_52024 = G__52053;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__51387){
var vec__51388 = p__51387;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51388,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51388,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__51394 = shadow.dom.dom_node(el);
var G__51395 = cls;
return goog.dom.getAncestorByClass(G__51394,G__51395);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__51397 = arguments.length;
switch (G__51397) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__51398 = shadow.dom.dom_node(el);
var G__51399 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__51398,G__51399);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__51400 = shadow.dom.dom_node(el);
var G__51401 = cljs.core.name(tag);
var G__51402 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__51400,G__51401,G__51402);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__51403 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__51403);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__51404 = shadow.dom.dom_node(dom);
var G__51405 = value;
return goog.dom.forms.setValue(G__51404,G__51405);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__51406 = cljs.core.seq(style_keys);
var chunk__51407 = null;
var count__51408 = (0);
var i__51409 = (0);
while(true){
if((i__51409 < count__51408)){
var it = chunk__51407.cljs$core$IIndexed$_nth$arity$2(null,i__51409);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__52088 = seq__51406;
var G__52089 = chunk__51407;
var G__52090 = count__51408;
var G__52091 = (i__51409 + (1));
seq__51406 = G__52088;
chunk__51407 = G__52089;
count__51408 = G__52090;
i__51409 = G__52091;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51406);
if(temp__5735__auto__){
var seq__51406__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51406__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51406__$1);
var G__52092 = cljs.core.chunk_rest(seq__51406__$1);
var G__52093 = c__4556__auto__;
var G__52094 = cljs.core.count(c__4556__auto__);
var G__52095 = (0);
seq__51406 = G__52092;
chunk__51407 = G__52093;
count__51408 = G__52094;
i__51409 = G__52095;
continue;
} else {
var it = cljs.core.first(seq__51406__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__52096 = cljs.core.next(seq__51406__$1);
var G__52097 = null;
var G__52098 = (0);
var G__52099 = (0);
seq__51406 = G__52096;
chunk__51407 = G__52097;
count__51408 = G__52098;
i__51409 = G__52099;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k51411,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__51415 = k51411;
var G__51415__$1 = (((G__51415 instanceof cljs.core.Keyword))?G__51415.fqn:null);
switch (G__51415__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51411,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__51416){
var vec__51417 = p__51416;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51417,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51417,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51410){
var self__ = this;
var G__51410__$1 = this;
return (new cljs.core.RecordIter((0),G__51410__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__51420 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__51420(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51412,other51413){
var self__ = this;
var this51412__$1 = this;
return (((!((other51413 == null)))) && ((this51412__$1.constructor === other51413.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51412__$1.x,other51413.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51412__$1.y,other51413.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51412__$1.__extmap,other51413.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__51410){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__51421 = cljs.core.keyword_identical_QMARK_;
var expr__51422 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__51424 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__51425 = expr__51422;
return (pred__51421.cljs$core$IFn$_invoke$arity$2 ? pred__51421.cljs$core$IFn$_invoke$arity$2(G__51424,G__51425) : pred__51421.call(null,G__51424,G__51425));
})())){
return (new shadow.dom.Coordinate(G__51410,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__51426 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__51427 = expr__51422;
return (pred__51421.cljs$core$IFn$_invoke$arity$2 ? pred__51421.cljs$core$IFn$_invoke$arity$2(G__51426,G__51427) : pred__51421.call(null,G__51426,G__51427));
})())){
return (new shadow.dom.Coordinate(self__.x,G__51410,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__51410),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__51410){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__51410,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__51414){
var extmap__4419__auto__ = (function (){var G__51428 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51414,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__51414)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51428);
} else {
return G__51428;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__51414),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__51414),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__51429 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__51429);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__51430 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__51430);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__51431 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__51431);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k51433,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__51437 = k51433;
var G__51437__$1 = (((G__51437 instanceof cljs.core.Keyword))?G__51437.fqn:null);
switch (G__51437__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51433,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__51438){
var vec__51439 = p__51438;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51439,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51439,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51432){
var self__ = this;
var G__51432__$1 = this;
return (new cljs.core.RecordIter((0),G__51432__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__51445 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__51445(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51434,other51435){
var self__ = this;
var this51434__$1 = this;
return (((!((other51435 == null)))) && ((this51434__$1.constructor === other51435.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51434__$1.w,other51435.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51434__$1.h,other51435.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51434__$1.__extmap,other51435.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__51432){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__51448 = cljs.core.keyword_identical_QMARK_;
var expr__51449 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__51451 = new cljs.core.Keyword(null,"w","w",354169001);
var G__51452 = expr__51449;
return (pred__51448.cljs$core$IFn$_invoke$arity$2 ? pred__51448.cljs$core$IFn$_invoke$arity$2(G__51451,G__51452) : pred__51448.call(null,G__51451,G__51452));
})())){
return (new shadow.dom.Size(G__51432,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__51453 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__51454 = expr__51449;
return (pred__51448.cljs$core$IFn$_invoke$arity$2 ? pred__51448.cljs$core$IFn$_invoke$arity$2(G__51453,G__51454) : pred__51448.call(null,G__51453,G__51454));
})())){
return (new shadow.dom.Size(self__.w,G__51432,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__51432),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__51432){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__51432,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__51436){
var extmap__4419__auto__ = (function (){var G__51458 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51436,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__51436)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51458);
} else {
return G__51458;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__51436),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__51436),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__51462 = shadow.dom.dom_node(el);
return goog.style.getSize(G__51462);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__52167 = (i + (1));
var G__52168 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__52167;
ret = G__52168;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51473){
var vec__51474 = p__51473;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51474,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51474,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__51478 = arguments.length;
switch (G__51478) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__51482_52184 = new_node;
var G__51483_52185 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__51482_52184,G__51483_52185);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__51484_52188 = new_node;
var G__51485_52189 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__51484_52188,G__51485_52189);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__52191 = ps;
var G__52192 = (i + (1));
el__$1 = G__52191;
i = G__52192;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__51494 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__51494);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__51498 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__51498);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__51499 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__51499);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__51500 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51500,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51500,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51500,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__51503_52204 = cljs.core.seq(props);
var chunk__51504_52205 = null;
var count__51505_52206 = (0);
var i__51506_52207 = (0);
while(true){
if((i__51506_52207 < count__51505_52206)){
var vec__51516_52208 = chunk__51504_52205.cljs$core$IIndexed$_nth$arity$2(null,i__51506_52207);
var k_52209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51516_52208,(0),null);
var v_52210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51516_52208,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_52209);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_52209),v_52210);


var G__52211 = seq__51503_52204;
var G__52212 = chunk__51504_52205;
var G__52213 = count__51505_52206;
var G__52214 = (i__51506_52207 + (1));
seq__51503_52204 = G__52211;
chunk__51504_52205 = G__52212;
count__51505_52206 = G__52213;
i__51506_52207 = G__52214;
continue;
} else {
var temp__5735__auto___52215 = cljs.core.seq(seq__51503_52204);
if(temp__5735__auto___52215){
var seq__51503_52216__$1 = temp__5735__auto___52215;
if(cljs.core.chunked_seq_QMARK_(seq__51503_52216__$1)){
var c__4556__auto___52217 = cljs.core.chunk_first(seq__51503_52216__$1);
var G__52218 = cljs.core.chunk_rest(seq__51503_52216__$1);
var G__52219 = c__4556__auto___52217;
var G__52220 = cljs.core.count(c__4556__auto___52217);
var G__52221 = (0);
seq__51503_52204 = G__52218;
chunk__51504_52205 = G__52219;
count__51505_52206 = G__52220;
i__51506_52207 = G__52221;
continue;
} else {
var vec__51521_52222 = cljs.core.first(seq__51503_52216__$1);
var k_52223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51521_52222,(0),null);
var v_52224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51521_52222,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_52223);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_52223),v_52224);


var G__52225 = cljs.core.next(seq__51503_52216__$1);
var G__52226 = null;
var G__52227 = (0);
var G__52228 = (0);
seq__51503_52204 = G__52225;
chunk__51504_52205 = G__52226;
count__51505_52206 = G__52227;
i__51506_52207 = G__52228;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__51528 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51528,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51528,(1),null);
var seq__51531_52233 = cljs.core.seq(node_children);
var chunk__51533_52234 = null;
var count__51534_52235 = (0);
var i__51535_52236 = (0);
while(true){
if((i__51535_52236 < count__51534_52235)){
var child_struct_52237 = chunk__51533_52234.cljs$core$IIndexed$_nth$arity$2(null,i__51535_52236);
if((!((child_struct_52237 == null)))){
if(typeof child_struct_52237 === 'string'){
var text_52238 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_52238),child_struct_52237].join(''));
} else {
var children_52239 = shadow.dom.svg_node(child_struct_52237);
if(cljs.core.seq_QMARK_(children_52239)){
var seq__51564_52240 = cljs.core.seq(children_52239);
var chunk__51566_52241 = null;
var count__51567_52242 = (0);
var i__51568_52243 = (0);
while(true){
if((i__51568_52243 < count__51567_52242)){
var child_52244 = chunk__51566_52241.cljs$core$IIndexed$_nth$arity$2(null,i__51568_52243);
if(cljs.core.truth_(child_52244)){
node.appendChild(child_52244);


var G__52246 = seq__51564_52240;
var G__52247 = chunk__51566_52241;
var G__52248 = count__51567_52242;
var G__52249 = (i__51568_52243 + (1));
seq__51564_52240 = G__52246;
chunk__51566_52241 = G__52247;
count__51567_52242 = G__52248;
i__51568_52243 = G__52249;
continue;
} else {
var G__52250 = seq__51564_52240;
var G__52251 = chunk__51566_52241;
var G__52252 = count__51567_52242;
var G__52253 = (i__51568_52243 + (1));
seq__51564_52240 = G__52250;
chunk__51566_52241 = G__52251;
count__51567_52242 = G__52252;
i__51568_52243 = G__52253;
continue;
}
} else {
var temp__5735__auto___52254 = cljs.core.seq(seq__51564_52240);
if(temp__5735__auto___52254){
var seq__51564_52255__$1 = temp__5735__auto___52254;
if(cljs.core.chunked_seq_QMARK_(seq__51564_52255__$1)){
var c__4556__auto___52256 = cljs.core.chunk_first(seq__51564_52255__$1);
var G__52257 = cljs.core.chunk_rest(seq__51564_52255__$1);
var G__52258 = c__4556__auto___52256;
var G__52259 = cljs.core.count(c__4556__auto___52256);
var G__52260 = (0);
seq__51564_52240 = G__52257;
chunk__51566_52241 = G__52258;
count__51567_52242 = G__52259;
i__51568_52243 = G__52260;
continue;
} else {
var child_52261 = cljs.core.first(seq__51564_52255__$1);
if(cljs.core.truth_(child_52261)){
node.appendChild(child_52261);


var G__52262 = cljs.core.next(seq__51564_52255__$1);
var G__52263 = null;
var G__52264 = (0);
var G__52265 = (0);
seq__51564_52240 = G__52262;
chunk__51566_52241 = G__52263;
count__51567_52242 = G__52264;
i__51568_52243 = G__52265;
continue;
} else {
var G__52266 = cljs.core.next(seq__51564_52255__$1);
var G__52267 = null;
var G__52268 = (0);
var G__52269 = (0);
seq__51564_52240 = G__52266;
chunk__51566_52241 = G__52267;
count__51567_52242 = G__52268;
i__51568_52243 = G__52269;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_52239);
}
}


var G__52270 = seq__51531_52233;
var G__52271 = chunk__51533_52234;
var G__52272 = count__51534_52235;
var G__52273 = (i__51535_52236 + (1));
seq__51531_52233 = G__52270;
chunk__51533_52234 = G__52271;
count__51534_52235 = G__52272;
i__51535_52236 = G__52273;
continue;
} else {
var G__52274 = seq__51531_52233;
var G__52275 = chunk__51533_52234;
var G__52276 = count__51534_52235;
var G__52277 = (i__51535_52236 + (1));
seq__51531_52233 = G__52274;
chunk__51533_52234 = G__52275;
count__51534_52235 = G__52276;
i__51535_52236 = G__52277;
continue;
}
} else {
var temp__5735__auto___52278 = cljs.core.seq(seq__51531_52233);
if(temp__5735__auto___52278){
var seq__51531_52279__$1 = temp__5735__auto___52278;
if(cljs.core.chunked_seq_QMARK_(seq__51531_52279__$1)){
var c__4556__auto___52280 = cljs.core.chunk_first(seq__51531_52279__$1);
var G__52281 = cljs.core.chunk_rest(seq__51531_52279__$1);
var G__52282 = c__4556__auto___52280;
var G__52283 = cljs.core.count(c__4556__auto___52280);
var G__52284 = (0);
seq__51531_52233 = G__52281;
chunk__51533_52234 = G__52282;
count__51534_52235 = G__52283;
i__51535_52236 = G__52284;
continue;
} else {
var child_struct_52289 = cljs.core.first(seq__51531_52279__$1);
if((!((child_struct_52289 == null)))){
if(typeof child_struct_52289 === 'string'){
var text_52292 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_52292),child_struct_52289].join(''));
} else {
var children_52293 = shadow.dom.svg_node(child_struct_52289);
if(cljs.core.seq_QMARK_(children_52293)){
var seq__51581_52296 = cljs.core.seq(children_52293);
var chunk__51583_52297 = null;
var count__51584_52298 = (0);
var i__51585_52299 = (0);
while(true){
if((i__51585_52299 < count__51584_52298)){
var child_52302 = chunk__51583_52297.cljs$core$IIndexed$_nth$arity$2(null,i__51585_52299);
if(cljs.core.truth_(child_52302)){
node.appendChild(child_52302);


var G__52303 = seq__51581_52296;
var G__52304 = chunk__51583_52297;
var G__52305 = count__51584_52298;
var G__52306 = (i__51585_52299 + (1));
seq__51581_52296 = G__52303;
chunk__51583_52297 = G__52304;
count__51584_52298 = G__52305;
i__51585_52299 = G__52306;
continue;
} else {
var G__52307 = seq__51581_52296;
var G__52308 = chunk__51583_52297;
var G__52309 = count__51584_52298;
var G__52310 = (i__51585_52299 + (1));
seq__51581_52296 = G__52307;
chunk__51583_52297 = G__52308;
count__51584_52298 = G__52309;
i__51585_52299 = G__52310;
continue;
}
} else {
var temp__5735__auto___52311__$1 = cljs.core.seq(seq__51581_52296);
if(temp__5735__auto___52311__$1){
var seq__51581_52312__$1 = temp__5735__auto___52311__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51581_52312__$1)){
var c__4556__auto___52314 = cljs.core.chunk_first(seq__51581_52312__$1);
var G__52316 = cljs.core.chunk_rest(seq__51581_52312__$1);
var G__52317 = c__4556__auto___52314;
var G__52318 = cljs.core.count(c__4556__auto___52314);
var G__52319 = (0);
seq__51581_52296 = G__52316;
chunk__51583_52297 = G__52317;
count__51584_52298 = G__52318;
i__51585_52299 = G__52319;
continue;
} else {
var child_52320 = cljs.core.first(seq__51581_52312__$1);
if(cljs.core.truth_(child_52320)){
node.appendChild(child_52320);


var G__52321 = cljs.core.next(seq__51581_52312__$1);
var G__52322 = null;
var G__52323 = (0);
var G__52324 = (0);
seq__51581_52296 = G__52321;
chunk__51583_52297 = G__52322;
count__51584_52298 = G__52323;
i__51585_52299 = G__52324;
continue;
} else {
var G__52325 = cljs.core.next(seq__51581_52312__$1);
var G__52326 = null;
var G__52327 = (0);
var G__52328 = (0);
seq__51581_52296 = G__52325;
chunk__51583_52297 = G__52326;
count__51584_52298 = G__52327;
i__51585_52299 = G__52328;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_52293);
}
}


var G__52332 = cljs.core.next(seq__51531_52279__$1);
var G__52333 = null;
var G__52334 = (0);
var G__52335 = (0);
seq__51531_52233 = G__52332;
chunk__51533_52234 = G__52333;
count__51534_52235 = G__52334;
i__51535_52236 = G__52335;
continue;
} else {
var G__52337 = cljs.core.next(seq__51531_52279__$1);
var G__52338 = null;
var G__52339 = (0);
var G__52340 = (0);
seq__51531_52233 = G__52337;
chunk__51533_52234 = G__52338;
count__51534_52235 = G__52339;
i__51535_52236 = G__52340;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__51590_52343 = shadow.dom._to_svg;
var G__51591_52344 = "string";
var G__51592_52345 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__51590_52343,G__51591_52344,G__51592_52345);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__51598_52352 = shadow.dom._to_svg;
var G__51599_52353 = "null";
var G__51600_52354 = (function (_){
return null;
});
goog.object.set(G__51598_52352,G__51599_52353,G__51600_52354);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52356 = arguments.length;
var i__4737__auto___52357 = (0);
while(true){
if((i__4737__auto___52357 < len__4736__auto___52356)){
args__4742__auto__.push((arguments[i__4737__auto___52357]));

var G__52358 = (i__4737__auto___52357 + (1));
i__4737__auto___52357 = G__52358;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq51602){
var G__51603 = cljs.core.first(seq51602);
var seq51602__$1 = cljs.core.next(seq51602);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51603,seq51602__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__51610 = arguments.length;
switch (G__51610) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__51619_52382 = shadow.dom.dom_node(el);
var G__51620_52383 = cljs.core.name(event);
var G__51621_52384 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__51619_52382,G__51620_52383,G__51621_52384) : shadow.dom.dom_listen.call(null,G__51619_52382,G__51620_52383,G__51621_52384));

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__49511__auto___52386 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49512__auto__ = (function (){var switch__49410__auto__ = (function (state_51628){
var state_val_51629 = (state_51628[(1)]);
if((state_val_51629 === (1))){
var state_51628__$1 = state_51628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51628__$1,(2),once_or_cleanup);
} else {
if((state_val_51629 === (2))){
var inst_51624 = (state_51628[(2)]);
var inst_51626 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_51628__$1 = (function (){var statearr_51632 = state_51628;
(statearr_51632[(7)] = inst_51624);

return statearr_51632;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51628__$1,inst_51626);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__49411__auto__ = null;
var shadow$dom$state_machine__49411__auto____0 = (function (){
var statearr_51635 = [null,null,null,null,null,null,null,null];
(statearr_51635[(0)] = shadow$dom$state_machine__49411__auto__);

(statearr_51635[(1)] = (1));

return statearr_51635;
});
var shadow$dom$state_machine__49411__auto____1 = (function (state_51628){
while(true){
var ret_value__49412__auto__ = (function (){try{while(true){
var result__49413__auto__ = switch__49410__auto__(state_51628);
if(cljs.core.keyword_identical_QMARK_(result__49413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49413__auto__;
}
break;
}
}catch (e51637){if((e51637 instanceof Object)){
var ex__49414__auto__ = e51637;
var statearr_51639_52392 = state_51628;
(statearr_51639_52392[(5)] = ex__49414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51637;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52393 = state_51628;
state_51628 = G__52393;
continue;
} else {
return ret_value__49412__auto__;
}
break;
}
});
shadow$dom$state_machine__49411__auto__ = function(state_51628){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__49411__auto____0.call(this);
case 1:
return shadow$dom$state_machine__49411__auto____1.call(this,state_51628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__49411__auto____0;
shadow$dom$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__49411__auto____1;
return shadow$dom$state_machine__49411__auto__;
})()
})();
var state__49513__auto__ = (function (){var statearr_51640 = (f__49512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49512__auto__.cljs$core$IFn$_invoke$arity$0() : f__49512__auto__.call(null));
(statearr_51640[(6)] = c__49511__auto___52386);

return statearr_51640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49513__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
