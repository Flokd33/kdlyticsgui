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

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__51114 = coll;
var G__51115 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__51114,G__51115) : shadow.dom.lazy_native_coll_seq.call(null,G__51114,G__51115));
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
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

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
var G__51133 = arguments.length;
switch (G__51133) {
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

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__51142 = arguments.length;
switch (G__51142) {
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

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__51149 = arguments.length;
switch (G__51149) {
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

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__51157 = arguments.length;
switch (G__51157) {
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

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__51166 = arguments.length;
switch (G__51166) {
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

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__51169 = document;
var G__51170 = shadow.dom.dom_node(el);
return goog.dom.contains(G__51169,G__51170);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__51172 = shadow.dom.dom_node(parent);
var G__51173 = shadow.dom.dom_node(el);
return goog.dom.contains(G__51172,G__51173);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__51175 = shadow.dom.dom_node(el);
var G__51176 = cls;
return goog.dom.classlist.add(G__51175,G__51176);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__51177 = shadow.dom.dom_node(el);
var G__51178 = cls;
return goog.dom.classlist.remove(G__51177,G__51178);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__51182 = arguments.length;
switch (G__51182) {
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

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__51184 = shadow.dom.dom_node(el);
var G__51185 = cls;
return goog.dom.classlist.toggle(G__51184,G__51185);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e51186){if((e51186 instanceof Object)){
var e = e51186;
return console.log("didnt support attachEvent",el,e);
} else {
throw e51186;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__51187 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__51188 = null;
var count__51189 = (0);
var i__51190 = (0);
while(true){
if((i__51190 < count__51189)){
var el = chunk__51188.cljs$core$IIndexed$_nth$arity$2(null,i__51190);
var handler_51733__$1 = ((function (seq__51187,chunk__51188,count__51189,i__51190,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__51187,chunk__51188,count__51189,i__51190,el))
;
var G__51203_51734 = el;
var G__51204_51735 = cljs.core.name(ev);
var G__51205_51736 = handler_51733__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__51203_51734,G__51204_51735,G__51205_51736) : shadow.dom.dom_listen.call(null,G__51203_51734,G__51204_51735,G__51205_51736));


var G__51737 = seq__51187;
var G__51738 = chunk__51188;
var G__51739 = count__51189;
var G__51740 = (i__51190 + (1));
seq__51187 = G__51737;
chunk__51188 = G__51738;
count__51189 = G__51739;
i__51190 = G__51740;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51187);
if(temp__5735__auto__){
var seq__51187__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51187__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51187__$1);
var G__51741 = cljs.core.chunk_rest(seq__51187__$1);
var G__51742 = c__4550__auto__;
var G__51743 = cljs.core.count(c__4550__auto__);
var G__51744 = (0);
seq__51187 = G__51741;
chunk__51188 = G__51742;
count__51189 = G__51743;
i__51190 = G__51744;
continue;
} else {
var el = cljs.core.first(seq__51187__$1);
var handler_51745__$1 = ((function (seq__51187,chunk__51188,count__51189,i__51190,el,seq__51187__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__51187,chunk__51188,count__51189,i__51190,el,seq__51187__$1,temp__5735__auto__))
;
var G__51206_51746 = el;
var G__51207_51747 = cljs.core.name(ev);
var G__51208_51748 = handler_51745__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__51206_51746,G__51207_51747,G__51208_51748) : shadow.dom.dom_listen.call(null,G__51206_51746,G__51207_51747,G__51208_51748));


var G__51749 = cljs.core.next(seq__51187__$1);
var G__51750 = null;
var G__51751 = (0);
var G__51752 = (0);
seq__51187 = G__51749;
chunk__51188 = G__51750;
count__51189 = G__51751;
i__51190 = G__51752;
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
var G__51210 = arguments.length;
switch (G__51210) {
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

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__51211 = shadow.dom.dom_node(el);
var G__51212 = cljs.core.name(ev);
var G__51213 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__51211,G__51212,G__51213) : shadow.dom.dom_listen.call(null,G__51211,G__51212,G__51213));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__51214 = shadow.dom.dom_node(el);
var G__51215 = cljs.core.name(ev);
var G__51216 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__51214,G__51215,G__51216) : shadow.dom.dom_listen_remove.call(null,G__51214,G__51215,G__51216));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__51217 = cljs.core.seq(events);
var chunk__51218 = null;
var count__51219 = (0);
var i__51220 = (0);
while(true){
if((i__51220 < count__51219)){
var vec__51231 = chunk__51218.cljs$core$IIndexed$_nth$arity$2(null,i__51220);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51231,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51231,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51754 = seq__51217;
var G__51755 = chunk__51218;
var G__51756 = count__51219;
var G__51757 = (i__51220 + (1));
seq__51217 = G__51754;
chunk__51218 = G__51755;
count__51219 = G__51756;
i__51220 = G__51757;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51217);
if(temp__5735__auto__){
var seq__51217__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51217__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51217__$1);
var G__51758 = cljs.core.chunk_rest(seq__51217__$1);
var G__51759 = c__4550__auto__;
var G__51760 = cljs.core.count(c__4550__auto__);
var G__51761 = (0);
seq__51217 = G__51758;
chunk__51218 = G__51759;
count__51219 = G__51760;
i__51220 = G__51761;
continue;
} else {
var vec__51237 = cljs.core.first(seq__51217__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51237,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51237,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51762 = cljs.core.next(seq__51217__$1);
var G__51763 = null;
var G__51764 = (0);
var G__51765 = (0);
seq__51217 = G__51762;
chunk__51218 = G__51763;
count__51219 = G__51764;
i__51220 = G__51765;
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
var seq__51244 = cljs.core.seq(styles);
var chunk__51245 = null;
var count__51246 = (0);
var i__51247 = (0);
while(true){
if((i__51247 < count__51246)){
var vec__51266 = chunk__51245.cljs$core$IIndexed$_nth$arity$2(null,i__51247);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51266,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51266,(1),null);
var G__51269_51766 = dom;
var G__51270_51767 = cljs.core.name(k);
var G__51271_51768 = (((v == null))?"":v);
goog.style.setStyle(G__51269_51766,G__51270_51767,G__51271_51768);


var G__51769 = seq__51244;
var G__51770 = chunk__51245;
var G__51771 = count__51246;
var G__51772 = (i__51247 + (1));
seq__51244 = G__51769;
chunk__51245 = G__51770;
count__51246 = G__51771;
i__51247 = G__51772;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51244);
if(temp__5735__auto__){
var seq__51244__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51244__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51244__$1);
var G__51773 = cljs.core.chunk_rest(seq__51244__$1);
var G__51774 = c__4550__auto__;
var G__51775 = cljs.core.count(c__4550__auto__);
var G__51776 = (0);
seq__51244 = G__51773;
chunk__51245 = G__51774;
count__51246 = G__51775;
i__51247 = G__51776;
continue;
} else {
var vec__51276 = cljs.core.first(seq__51244__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51276,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51276,(1),null);
var G__51279_51777 = dom;
var G__51280_51778 = cljs.core.name(k);
var G__51281_51779 = (((v == null))?"":v);
goog.style.setStyle(G__51279_51777,G__51280_51778,G__51281_51779);


var G__51780 = cljs.core.next(seq__51244__$1);
var G__51781 = null;
var G__51782 = (0);
var G__51783 = (0);
seq__51244 = G__51780;
chunk__51245 = G__51781;
count__51246 = G__51782;
i__51247 = G__51783;
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
var G__51287_51784 = key;
var G__51287_51785__$1 = (((G__51287_51784 instanceof cljs.core.Keyword))?G__51287_51784.fqn:null);
switch (G__51287_51785__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

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
var ks_51787 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_51787,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_51787,"aria-");
}
})())){
el.setAttribute(ks_51787,value);
} else {
(el[ks_51787] = value);
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
var G__51302 = shadow.dom.dom_node(el);
var G__51303 = cls;
return goog.dom.classlist.contains(G__51302,G__51303);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__51311){
var map__51312 = p__51311;
var map__51312__$1 = (((((!((map__51312 == null))))?(((((map__51312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51312):map__51312);
var props = map__51312__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51312__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__51315 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51315,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51315,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51315,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__51319 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__51319,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__51319;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__51321 = arguments.length;
switch (G__51321) {
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

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
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
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
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
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__51323){
var vec__51324 = p__51323;
var seq__51325 = cljs.core.seq(vec__51324);
var first__51326 = cljs.core.first(seq__51325);
var seq__51325__$1 = cljs.core.next(seq__51325);
var nn = first__51326;
var first__51326__$1 = cljs.core.first(seq__51325__$1);
var seq__51325__$2 = cljs.core.next(seq__51325__$1);
var np = first__51326__$1;
var nc = seq__51325__$2;
var node = vec__51324;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51327 = nn;
var G__51328 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__51327,G__51328) : create_fn.call(null,G__51327,G__51328));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51329 = nn;
var G__51330 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__51329,G__51330) : create_fn.call(null,G__51329,G__51330));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__51332 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51332,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51332,(1),null);
var seq__51335_51789 = cljs.core.seq(node_children);
var chunk__51336_51790 = null;
var count__51337_51791 = (0);
var i__51338_51792 = (0);
while(true){
if((i__51338_51792 < count__51337_51791)){
var child_struct_51793 = chunk__51336_51790.cljs$core$IIndexed$_nth$arity$2(null,i__51338_51792);
var children_51794 = shadow.dom.dom_node(child_struct_51793);
if(cljs.core.seq_QMARK_(children_51794)){
var seq__51358_51795 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51794));
var chunk__51360_51796 = null;
var count__51361_51797 = (0);
var i__51362_51798 = (0);
while(true){
if((i__51362_51798 < count__51361_51797)){
var child_51799 = chunk__51360_51796.cljs$core$IIndexed$_nth$arity$2(null,i__51362_51798);
if(cljs.core.truth_(child_51799)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51799);


var G__51800 = seq__51358_51795;
var G__51801 = chunk__51360_51796;
var G__51802 = count__51361_51797;
var G__51803 = (i__51362_51798 + (1));
seq__51358_51795 = G__51800;
chunk__51360_51796 = G__51801;
count__51361_51797 = G__51802;
i__51362_51798 = G__51803;
continue;
} else {
var G__51804 = seq__51358_51795;
var G__51805 = chunk__51360_51796;
var G__51806 = count__51361_51797;
var G__51807 = (i__51362_51798 + (1));
seq__51358_51795 = G__51804;
chunk__51360_51796 = G__51805;
count__51361_51797 = G__51806;
i__51362_51798 = G__51807;
continue;
}
} else {
var temp__5735__auto___51808 = cljs.core.seq(seq__51358_51795);
if(temp__5735__auto___51808){
var seq__51358_51809__$1 = temp__5735__auto___51808;
if(cljs.core.chunked_seq_QMARK_(seq__51358_51809__$1)){
var c__4550__auto___51810 = cljs.core.chunk_first(seq__51358_51809__$1);
var G__51811 = cljs.core.chunk_rest(seq__51358_51809__$1);
var G__51812 = c__4550__auto___51810;
var G__51813 = cljs.core.count(c__4550__auto___51810);
var G__51814 = (0);
seq__51358_51795 = G__51811;
chunk__51360_51796 = G__51812;
count__51361_51797 = G__51813;
i__51362_51798 = G__51814;
continue;
} else {
var child_51815 = cljs.core.first(seq__51358_51809__$1);
if(cljs.core.truth_(child_51815)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51815);


var G__51816 = cljs.core.next(seq__51358_51809__$1);
var G__51817 = null;
var G__51818 = (0);
var G__51819 = (0);
seq__51358_51795 = G__51816;
chunk__51360_51796 = G__51817;
count__51361_51797 = G__51818;
i__51362_51798 = G__51819;
continue;
} else {
var G__51820 = cljs.core.next(seq__51358_51809__$1);
var G__51821 = null;
var G__51822 = (0);
var G__51823 = (0);
seq__51358_51795 = G__51820;
chunk__51360_51796 = G__51821;
count__51361_51797 = G__51822;
i__51362_51798 = G__51823;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51794);
}


var G__51824 = seq__51335_51789;
var G__51825 = chunk__51336_51790;
var G__51826 = count__51337_51791;
var G__51827 = (i__51338_51792 + (1));
seq__51335_51789 = G__51824;
chunk__51336_51790 = G__51825;
count__51337_51791 = G__51826;
i__51338_51792 = G__51827;
continue;
} else {
var temp__5735__auto___51828 = cljs.core.seq(seq__51335_51789);
if(temp__5735__auto___51828){
var seq__51335_51829__$1 = temp__5735__auto___51828;
if(cljs.core.chunked_seq_QMARK_(seq__51335_51829__$1)){
var c__4550__auto___51830 = cljs.core.chunk_first(seq__51335_51829__$1);
var G__51831 = cljs.core.chunk_rest(seq__51335_51829__$1);
var G__51832 = c__4550__auto___51830;
var G__51833 = cljs.core.count(c__4550__auto___51830);
var G__51834 = (0);
seq__51335_51789 = G__51831;
chunk__51336_51790 = G__51832;
count__51337_51791 = G__51833;
i__51338_51792 = G__51834;
continue;
} else {
var child_struct_51835 = cljs.core.first(seq__51335_51829__$1);
var children_51836 = shadow.dom.dom_node(child_struct_51835);
if(cljs.core.seq_QMARK_(children_51836)){
var seq__51373_51837 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51836));
var chunk__51375_51838 = null;
var count__51376_51839 = (0);
var i__51377_51840 = (0);
while(true){
if((i__51377_51840 < count__51376_51839)){
var child_51841 = chunk__51375_51838.cljs$core$IIndexed$_nth$arity$2(null,i__51377_51840);
if(cljs.core.truth_(child_51841)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51841);


var G__51842 = seq__51373_51837;
var G__51843 = chunk__51375_51838;
var G__51844 = count__51376_51839;
var G__51845 = (i__51377_51840 + (1));
seq__51373_51837 = G__51842;
chunk__51375_51838 = G__51843;
count__51376_51839 = G__51844;
i__51377_51840 = G__51845;
continue;
} else {
var G__51846 = seq__51373_51837;
var G__51847 = chunk__51375_51838;
var G__51848 = count__51376_51839;
var G__51849 = (i__51377_51840 + (1));
seq__51373_51837 = G__51846;
chunk__51375_51838 = G__51847;
count__51376_51839 = G__51848;
i__51377_51840 = G__51849;
continue;
}
} else {
var temp__5735__auto___51850__$1 = cljs.core.seq(seq__51373_51837);
if(temp__5735__auto___51850__$1){
var seq__51373_51851__$1 = temp__5735__auto___51850__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51373_51851__$1)){
var c__4550__auto___51852 = cljs.core.chunk_first(seq__51373_51851__$1);
var G__51853 = cljs.core.chunk_rest(seq__51373_51851__$1);
var G__51854 = c__4550__auto___51852;
var G__51855 = cljs.core.count(c__4550__auto___51852);
var G__51856 = (0);
seq__51373_51837 = G__51853;
chunk__51375_51838 = G__51854;
count__51376_51839 = G__51855;
i__51377_51840 = G__51856;
continue;
} else {
var child_51857 = cljs.core.first(seq__51373_51851__$1);
if(cljs.core.truth_(child_51857)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51857);


var G__51858 = cljs.core.next(seq__51373_51851__$1);
var G__51859 = null;
var G__51860 = (0);
var G__51861 = (0);
seq__51373_51837 = G__51858;
chunk__51375_51838 = G__51859;
count__51376_51839 = G__51860;
i__51377_51840 = G__51861;
continue;
} else {
var G__51862 = cljs.core.next(seq__51373_51851__$1);
var G__51863 = null;
var G__51864 = (0);
var G__51865 = (0);
seq__51373_51837 = G__51862;
chunk__51375_51838 = G__51863;
count__51376_51839 = G__51864;
i__51377_51840 = G__51865;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51836);
}


var G__51866 = cljs.core.next(seq__51335_51829__$1);
var G__51867 = null;
var G__51868 = (0);
var G__51869 = (0);
seq__51335_51789 = G__51866;
chunk__51336_51790 = G__51867;
count__51337_51791 = G__51868;
i__51338_51792 = G__51869;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__51392 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__51392);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__51395 = cljs.core.seq(node);
var chunk__51396 = null;
var count__51397 = (0);
var i__51398 = (0);
while(true){
if((i__51398 < count__51397)){
var n = chunk__51396.cljs$core$IIndexed$_nth$arity$2(null,i__51398);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__51870 = seq__51395;
var G__51871 = chunk__51396;
var G__51872 = count__51397;
var G__51873 = (i__51398 + (1));
seq__51395 = G__51870;
chunk__51396 = G__51871;
count__51397 = G__51872;
i__51398 = G__51873;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51395);
if(temp__5735__auto__){
var seq__51395__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51395__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51395__$1);
var G__51874 = cljs.core.chunk_rest(seq__51395__$1);
var G__51875 = c__4550__auto__;
var G__51876 = cljs.core.count(c__4550__auto__);
var G__51877 = (0);
seq__51395 = G__51874;
chunk__51396 = G__51875;
count__51397 = G__51876;
i__51398 = G__51877;
continue;
} else {
var n = cljs.core.first(seq__51395__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__51878 = cljs.core.next(seq__51395__$1);
var G__51879 = null;
var G__51880 = (0);
var G__51881 = (0);
seq__51395 = G__51878;
chunk__51396 = G__51879;
count__51397 = G__51880;
i__51398 = G__51881;
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
var G__51402 = shadow.dom.dom_node(new$);
var G__51403 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__51402,G__51403);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__51406 = arguments.length;
switch (G__51406) {
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

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__51409 = arguments.length;
switch (G__51409) {
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

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

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
var G__51422 = arguments.length;
switch (G__51422) {
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

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

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
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___51887 = arguments.length;
var i__4731__auto___51888 = (0);
while(true){
if((i__4731__auto___51888 < len__4730__auto___51887)){
args__4736__auto__.push((arguments[i__4731__auto___51888]));

var G__51889 = (i__4731__auto___51888 + (1));
i__4731__auto___51888 = G__51889;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__51435_51890 = cljs.core.seq(nodes);
var chunk__51436_51891 = null;
var count__51437_51892 = (0);
var i__51438_51893 = (0);
while(true){
if((i__51438_51893 < count__51437_51892)){
var node_51894 = chunk__51436_51891.cljs$core$IIndexed$_nth$arity$2(null,i__51438_51893);
fragment.appendChild(shadow.dom._to_dom(node_51894));


var G__51895 = seq__51435_51890;
var G__51896 = chunk__51436_51891;
var G__51897 = count__51437_51892;
var G__51898 = (i__51438_51893 + (1));
seq__51435_51890 = G__51895;
chunk__51436_51891 = G__51896;
count__51437_51892 = G__51897;
i__51438_51893 = G__51898;
continue;
} else {
var temp__5735__auto___51899 = cljs.core.seq(seq__51435_51890);
if(temp__5735__auto___51899){
var seq__51435_51900__$1 = temp__5735__auto___51899;
if(cljs.core.chunked_seq_QMARK_(seq__51435_51900__$1)){
var c__4550__auto___51901 = cljs.core.chunk_first(seq__51435_51900__$1);
var G__51902 = cljs.core.chunk_rest(seq__51435_51900__$1);
var G__51903 = c__4550__auto___51901;
var G__51904 = cljs.core.count(c__4550__auto___51901);
var G__51905 = (0);
seq__51435_51890 = G__51902;
chunk__51436_51891 = G__51903;
count__51437_51892 = G__51904;
i__51438_51893 = G__51905;
continue;
} else {
var node_51906 = cljs.core.first(seq__51435_51900__$1);
fragment.appendChild(shadow.dom._to_dom(node_51906));


var G__51907 = cljs.core.next(seq__51435_51900__$1);
var G__51908 = null;
var G__51909 = (0);
var G__51910 = (0);
seq__51435_51890 = G__51907;
chunk__51436_51891 = G__51908;
count__51437_51892 = G__51909;
i__51438_51893 = G__51910;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq51431){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51431));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__51445_51911 = cljs.core.seq(scripts);
var chunk__51446_51912 = null;
var count__51447_51913 = (0);
var i__51448_51914 = (0);
while(true){
if((i__51448_51914 < count__51447_51913)){
var vec__51456_51915 = chunk__51446_51912.cljs$core$IIndexed$_nth$arity$2(null,i__51448_51914);
var script_tag_51916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51456_51915,(0),null);
var script_body_51917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51456_51915,(1),null);
eval(script_body_51917);


var G__51918 = seq__51445_51911;
var G__51919 = chunk__51446_51912;
var G__51920 = count__51447_51913;
var G__51921 = (i__51448_51914 + (1));
seq__51445_51911 = G__51918;
chunk__51446_51912 = G__51919;
count__51447_51913 = G__51920;
i__51448_51914 = G__51921;
continue;
} else {
var temp__5735__auto___51923 = cljs.core.seq(seq__51445_51911);
if(temp__5735__auto___51923){
var seq__51445_51924__$1 = temp__5735__auto___51923;
if(cljs.core.chunked_seq_QMARK_(seq__51445_51924__$1)){
var c__4550__auto___51925 = cljs.core.chunk_first(seq__51445_51924__$1);
var G__51926 = cljs.core.chunk_rest(seq__51445_51924__$1);
var G__51927 = c__4550__auto___51925;
var G__51928 = cljs.core.count(c__4550__auto___51925);
var G__51929 = (0);
seq__51445_51911 = G__51926;
chunk__51446_51912 = G__51927;
count__51447_51913 = G__51928;
i__51448_51914 = G__51929;
continue;
} else {
var vec__51461_51931 = cljs.core.first(seq__51445_51924__$1);
var script_tag_51932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51461_51931,(0),null);
var script_body_51933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51461_51931,(1),null);
eval(script_body_51933);


var G__51934 = cljs.core.next(seq__51445_51924__$1);
var G__51935 = null;
var G__51936 = (0);
var G__51937 = (0);
seq__51445_51911 = G__51934;
chunk__51446_51912 = G__51935;
count__51447_51913 = G__51936;
i__51448_51914 = G__51937;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__51464){
var vec__51465 = p__51464;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51465,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51465,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__51474 = shadow.dom.dom_node(el);
var G__51475 = cls;
return goog.dom.getAncestorByClass(G__51474,G__51475);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__51479 = arguments.length;
switch (G__51479) {
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

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__51482 = shadow.dom.dom_node(el);
var G__51483 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__51482,G__51483);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__51486 = shadow.dom.dom_node(el);
var G__51487 = cljs.core.name(tag);
var G__51488 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__51486,G__51487,G__51488);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__51489 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__51489);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__51492 = shadow.dom.dom_node(dom);
var G__51493 = value;
return goog.dom.forms.setValue(G__51492,G__51493);
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
var seq__51494 = cljs.core.seq(style_keys);
var chunk__51495 = null;
var count__51496 = (0);
var i__51497 = (0);
while(true){
if((i__51497 < count__51496)){
var it = chunk__51495.cljs$core$IIndexed$_nth$arity$2(null,i__51497);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__51942 = seq__51494;
var G__51943 = chunk__51495;
var G__51944 = count__51496;
var G__51945 = (i__51497 + (1));
seq__51494 = G__51942;
chunk__51495 = G__51943;
count__51496 = G__51944;
i__51497 = G__51945;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51494);
if(temp__5735__auto__){
var seq__51494__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51494__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51494__$1);
var G__51946 = cljs.core.chunk_rest(seq__51494__$1);
var G__51947 = c__4550__auto__;
var G__51948 = cljs.core.count(c__4550__auto__);
var G__51949 = (0);
seq__51494 = G__51946;
chunk__51495 = G__51947;
count__51496 = G__51948;
i__51497 = G__51949;
continue;
} else {
var it = cljs.core.first(seq__51494__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__51950 = cljs.core.next(seq__51494__$1);
var G__51951 = null;
var G__51952 = (0);
var G__51953 = (0);
seq__51494 = G__51950;
chunk__51495 = G__51951;
count__51496 = G__51952;
i__51497 = G__51953;
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
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k51499,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__51503 = k51499;
var G__51503__$1 = (((G__51503 instanceof cljs.core.Keyword))?G__51503.fqn:null);
switch (G__51503__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51499,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__51504){
var vec__51505 = p__51504;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51505,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51505,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51498){
var self__ = this;
var G__51498__$1 = this;
return (new cljs.core.RecordIter((0),G__51498__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__51518 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__51518(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51500,other51501){
var self__ = this;
var this51500__$1 = this;
return (((!((other51501 == null)))) && ((this51500__$1.constructor === other51501.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51500__$1.x,other51501.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51500__$1.y,other51501.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51500__$1.__extmap,other51501.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__51498){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__51523 = cljs.core.keyword_identical_QMARK_;
var expr__51524 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__51526 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__51527 = expr__51524;
return (pred__51523.cljs$core$IFn$_invoke$arity$2 ? pred__51523.cljs$core$IFn$_invoke$arity$2(G__51526,G__51527) : pred__51523.call(null,G__51526,G__51527));
})())){
return (new shadow.dom.Coordinate(G__51498,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__51529 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__51530 = expr__51524;
return (pred__51523.cljs$core$IFn$_invoke$arity$2 ? pred__51523.cljs$core$IFn$_invoke$arity$2(G__51529,G__51530) : pred__51523.call(null,G__51529,G__51530));
})())){
return (new shadow.dom.Coordinate(self__.x,G__51498,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__51498),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__51498){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__51498,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__51502){
var extmap__4424__auto__ = (function (){var G__51534 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51502,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__51502)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51534);
} else {
return G__51534;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__51502),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__51502),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__51538 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__51538);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__51540 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__51540);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__51541 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__51541);
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
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k51544,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__51551 = k51544;
var G__51551__$1 = (((G__51551 instanceof cljs.core.Keyword))?G__51551.fqn:null);
switch (G__51551__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51544,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__51554){
var vec__51556 = p__51554;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51556,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51556,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51543){
var self__ = this;
var G__51543__$1 = this;
return (new cljs.core.RecordIter((0),G__51543__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__51569 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__51569(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51545,other51546){
var self__ = this;
var this51545__$1 = this;
return (((!((other51546 == null)))) && ((this51545__$1.constructor === other51546.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51545__$1.w,other51546.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51545__$1.h,other51546.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51545__$1.__extmap,other51546.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__51543){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__51573 = cljs.core.keyword_identical_QMARK_;
var expr__51574 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__51576 = new cljs.core.Keyword(null,"w","w",354169001);
var G__51577 = expr__51574;
return (pred__51573.cljs$core$IFn$_invoke$arity$2 ? pred__51573.cljs$core$IFn$_invoke$arity$2(G__51576,G__51577) : pred__51573.call(null,G__51576,G__51577));
})())){
return (new shadow.dom.Size(G__51543,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__51578 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__51579 = expr__51574;
return (pred__51573.cljs$core$IFn$_invoke$arity$2 ? pred__51573.cljs$core$IFn$_invoke$arity$2(G__51578,G__51579) : pred__51573.call(null,G__51578,G__51579));
})())){
return (new shadow.dom.Size(self__.w,G__51543,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__51543),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__51543){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__51543,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__51548){
var extmap__4424__auto__ = (function (){var G__51583 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51548,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__51548)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51583);
} else {
return G__51583;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__51548),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__51548),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__51586 = shadow.dom.dom_node(el);
return goog.style.getSize(G__51586);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
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
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__51989 = (i + (1));
var G__51990 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__51989;
ret = G__51990;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51599){
var vec__51600 = p__51599;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51600,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51600,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__51606 = arguments.length;
switch (G__51606) {
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

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__51614_51999 = new_node;
var G__51615_52000 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__51614_51999,G__51615_52000);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__51619_52001 = new_node;
var G__51620_52002 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__51619_52001,G__51620_52002);

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
var G__52006 = ps;
var G__52007 = (i + (1));
el__$1 = G__52006;
i = G__52007;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__51625 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__51625);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__51629 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__51629);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__51631 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__51631);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__51633 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51633,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51633,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51633,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__51636_52014 = cljs.core.seq(props);
var chunk__51637_52015 = null;
var count__51638_52016 = (0);
var i__51639_52017 = (0);
while(true){
if((i__51639_52017 < count__51638_52016)){
var vec__51653_52018 = chunk__51637_52015.cljs$core$IIndexed$_nth$arity$2(null,i__51639_52017);
var k_52019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51653_52018,(0),null);
var v_52020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51653_52018,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_52019);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_52019),v_52020);


var G__52021 = seq__51636_52014;
var G__52022 = chunk__51637_52015;
var G__52023 = count__51638_52016;
var G__52024 = (i__51639_52017 + (1));
seq__51636_52014 = G__52021;
chunk__51637_52015 = G__52022;
count__51638_52016 = G__52023;
i__51639_52017 = G__52024;
continue;
} else {
var temp__5735__auto___52025 = cljs.core.seq(seq__51636_52014);
if(temp__5735__auto___52025){
var seq__51636_52026__$1 = temp__5735__auto___52025;
if(cljs.core.chunked_seq_QMARK_(seq__51636_52026__$1)){
var c__4550__auto___52027 = cljs.core.chunk_first(seq__51636_52026__$1);
var G__52028 = cljs.core.chunk_rest(seq__51636_52026__$1);
var G__52029 = c__4550__auto___52027;
var G__52030 = cljs.core.count(c__4550__auto___52027);
var G__52031 = (0);
seq__51636_52014 = G__52028;
chunk__51637_52015 = G__52029;
count__51638_52016 = G__52030;
i__51639_52017 = G__52031;
continue;
} else {
var vec__51658_52032 = cljs.core.first(seq__51636_52026__$1);
var k_52033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51658_52032,(0),null);
var v_52034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51658_52032,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_52033);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_52033),v_52034);


var G__52039 = cljs.core.next(seq__51636_52026__$1);
var G__52040 = null;
var G__52041 = (0);
var G__52042 = (0);
seq__51636_52014 = G__52039;
chunk__51637_52015 = G__52040;
count__51638_52016 = G__52041;
i__51639_52017 = G__52042;
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
var vec__51667 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51667,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51667,(1),null);
var seq__51670_52043 = cljs.core.seq(node_children);
var chunk__51672_52044 = null;
var count__51673_52045 = (0);
var i__51674_52046 = (0);
while(true){
if((i__51674_52046 < count__51673_52045)){
var child_struct_52047 = chunk__51672_52044.cljs$core$IIndexed$_nth$arity$2(null,i__51674_52046);
if((!((child_struct_52047 == null)))){
if(typeof child_struct_52047 === 'string'){
var text_52048 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_52048),child_struct_52047].join(''));
} else {
var children_52049 = shadow.dom.svg_node(child_struct_52047);
if(cljs.core.seq_QMARK_(children_52049)){
var seq__51691_52050 = cljs.core.seq(children_52049);
var chunk__51693_52051 = null;
var count__51694_52052 = (0);
var i__51695_52053 = (0);
while(true){
if((i__51695_52053 < count__51694_52052)){
var child_52054 = chunk__51693_52051.cljs$core$IIndexed$_nth$arity$2(null,i__51695_52053);
if(cljs.core.truth_(child_52054)){
node.appendChild(child_52054);


var G__52057 = seq__51691_52050;
var G__52058 = chunk__51693_52051;
var G__52059 = count__51694_52052;
var G__52060 = (i__51695_52053 + (1));
seq__51691_52050 = G__52057;
chunk__51693_52051 = G__52058;
count__51694_52052 = G__52059;
i__51695_52053 = G__52060;
continue;
} else {
var G__52061 = seq__51691_52050;
var G__52062 = chunk__51693_52051;
var G__52063 = count__51694_52052;
var G__52064 = (i__51695_52053 + (1));
seq__51691_52050 = G__52061;
chunk__51693_52051 = G__52062;
count__51694_52052 = G__52063;
i__51695_52053 = G__52064;
continue;
}
} else {
var temp__5735__auto___52065 = cljs.core.seq(seq__51691_52050);
if(temp__5735__auto___52065){
var seq__51691_52066__$1 = temp__5735__auto___52065;
if(cljs.core.chunked_seq_QMARK_(seq__51691_52066__$1)){
var c__4550__auto___52067 = cljs.core.chunk_first(seq__51691_52066__$1);
var G__52068 = cljs.core.chunk_rest(seq__51691_52066__$1);
var G__52069 = c__4550__auto___52067;
var G__52070 = cljs.core.count(c__4550__auto___52067);
var G__52071 = (0);
seq__51691_52050 = G__52068;
chunk__51693_52051 = G__52069;
count__51694_52052 = G__52070;
i__51695_52053 = G__52071;
continue;
} else {
var child_52072 = cljs.core.first(seq__51691_52066__$1);
if(cljs.core.truth_(child_52072)){
node.appendChild(child_52072);


var G__52073 = cljs.core.next(seq__51691_52066__$1);
var G__52074 = null;
var G__52075 = (0);
var G__52076 = (0);
seq__51691_52050 = G__52073;
chunk__51693_52051 = G__52074;
count__51694_52052 = G__52075;
i__51695_52053 = G__52076;
continue;
} else {
var G__52077 = cljs.core.next(seq__51691_52066__$1);
var G__52078 = null;
var G__52079 = (0);
var G__52080 = (0);
seq__51691_52050 = G__52077;
chunk__51693_52051 = G__52078;
count__51694_52052 = G__52079;
i__51695_52053 = G__52080;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_52049);
}
}


var G__52081 = seq__51670_52043;
var G__52082 = chunk__51672_52044;
var G__52083 = count__51673_52045;
var G__52084 = (i__51674_52046 + (1));
seq__51670_52043 = G__52081;
chunk__51672_52044 = G__52082;
count__51673_52045 = G__52083;
i__51674_52046 = G__52084;
continue;
} else {
var G__52085 = seq__51670_52043;
var G__52086 = chunk__51672_52044;
var G__52087 = count__51673_52045;
var G__52088 = (i__51674_52046 + (1));
seq__51670_52043 = G__52085;
chunk__51672_52044 = G__52086;
count__51673_52045 = G__52087;
i__51674_52046 = G__52088;
continue;
}
} else {
var temp__5735__auto___52089 = cljs.core.seq(seq__51670_52043);
if(temp__5735__auto___52089){
var seq__51670_52090__$1 = temp__5735__auto___52089;
if(cljs.core.chunked_seq_QMARK_(seq__51670_52090__$1)){
var c__4550__auto___52092 = cljs.core.chunk_first(seq__51670_52090__$1);
var G__52093 = cljs.core.chunk_rest(seq__51670_52090__$1);
var G__52094 = c__4550__auto___52092;
var G__52095 = cljs.core.count(c__4550__auto___52092);
var G__52096 = (0);
seq__51670_52043 = G__52093;
chunk__51672_52044 = G__52094;
count__51673_52045 = G__52095;
i__51674_52046 = G__52096;
continue;
} else {
var child_struct_52097 = cljs.core.first(seq__51670_52090__$1);
if((!((child_struct_52097 == null)))){
if(typeof child_struct_52097 === 'string'){
var text_52098 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_52098),child_struct_52097].join(''));
} else {
var children_52099 = shadow.dom.svg_node(child_struct_52097);
if(cljs.core.seq_QMARK_(children_52099)){
var seq__51697_52100 = cljs.core.seq(children_52099);
var chunk__51699_52101 = null;
var count__51700_52102 = (0);
var i__51701_52103 = (0);
while(true){
if((i__51701_52103 < count__51700_52102)){
var child_52104 = chunk__51699_52101.cljs$core$IIndexed$_nth$arity$2(null,i__51701_52103);
if(cljs.core.truth_(child_52104)){
node.appendChild(child_52104);


var G__52105 = seq__51697_52100;
var G__52106 = chunk__51699_52101;
var G__52107 = count__51700_52102;
var G__52108 = (i__51701_52103 + (1));
seq__51697_52100 = G__52105;
chunk__51699_52101 = G__52106;
count__51700_52102 = G__52107;
i__51701_52103 = G__52108;
continue;
} else {
var G__52109 = seq__51697_52100;
var G__52110 = chunk__51699_52101;
var G__52111 = count__51700_52102;
var G__52112 = (i__51701_52103 + (1));
seq__51697_52100 = G__52109;
chunk__51699_52101 = G__52110;
count__51700_52102 = G__52111;
i__51701_52103 = G__52112;
continue;
}
} else {
var temp__5735__auto___52113__$1 = cljs.core.seq(seq__51697_52100);
if(temp__5735__auto___52113__$1){
var seq__51697_52114__$1 = temp__5735__auto___52113__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51697_52114__$1)){
var c__4550__auto___52115 = cljs.core.chunk_first(seq__51697_52114__$1);
var G__52116 = cljs.core.chunk_rest(seq__51697_52114__$1);
var G__52117 = c__4550__auto___52115;
var G__52118 = cljs.core.count(c__4550__auto___52115);
var G__52119 = (0);
seq__51697_52100 = G__52116;
chunk__51699_52101 = G__52117;
count__51700_52102 = G__52118;
i__51701_52103 = G__52119;
continue;
} else {
var child_52120 = cljs.core.first(seq__51697_52114__$1);
if(cljs.core.truth_(child_52120)){
node.appendChild(child_52120);


var G__52121 = cljs.core.next(seq__51697_52114__$1);
var G__52122 = null;
var G__52123 = (0);
var G__52124 = (0);
seq__51697_52100 = G__52121;
chunk__51699_52101 = G__52122;
count__51700_52102 = G__52123;
i__51701_52103 = G__52124;
continue;
} else {
var G__52125 = cljs.core.next(seq__51697_52114__$1);
var G__52126 = null;
var G__52127 = (0);
var G__52128 = (0);
seq__51697_52100 = G__52125;
chunk__51699_52101 = G__52126;
count__51700_52102 = G__52127;
i__51701_52103 = G__52128;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_52099);
}
}


var G__52129 = cljs.core.next(seq__51670_52090__$1);
var G__52130 = null;
var G__52131 = (0);
var G__52132 = (0);
seq__51670_52043 = G__52129;
chunk__51672_52044 = G__52130;
count__51673_52045 = G__52131;
i__51674_52046 = G__52132;
continue;
} else {
var G__52133 = cljs.core.next(seq__51670_52090__$1);
var G__52134 = null;
var G__52135 = (0);
var G__52136 = (0);
seq__51670_52043 = G__52133;
chunk__51672_52044 = G__52134;
count__51673_52045 = G__52135;
i__51674_52046 = G__52136;
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

var G__51703_52137 = shadow.dom._to_svg;
var G__51704_52138 = "string";
var G__51705_52139 = ((function (G__51703_52137,G__51704_52138){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__51703_52137,G__51704_52138))
;
goog.object.set(G__51703_52137,G__51704_52138,G__51705_52139);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__51706_52140 = shadow.dom._to_svg;
var G__51707_52141 = "null";
var G__51708_52142 = ((function (G__51706_52140,G__51707_52141){
return (function (_){
return null;
});})(G__51706_52140,G__51707_52141))
;
goog.object.set(G__51706_52140,G__51707_52141,G__51708_52142);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52144 = arguments.length;
var i__4731__auto___52145 = (0);
while(true){
if((i__4731__auto___52145 < len__4730__auto___52144)){
args__4736__auto__.push((arguments[i__4731__auto___52145]));

var G__52146 = (i__4731__auto___52145 + (1));
i__4731__auto___52145 = G__52146;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq51709){
var G__51710 = cljs.core.first(seq51709);
var seq51709__$1 = cljs.core.next(seq51709);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51710,seq51709__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__51712 = arguments.length;
switch (G__51712) {
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

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__51713_52150 = shadow.dom.dom_node(el);
var G__51714_52151 = cljs.core.name(event);
var G__51715_52152 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__51713_52150,G__51714_52151,G__51715_52152) : shadow.dom.dom_listen.call(null,G__51713_52150,G__51714_52151,G__51715_52152));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__49370__auto___52157 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49370__auto___52157,buf,chan,event_fn){
return (function (){
var f__49371__auto__ = (function (){var switch__49300__auto__ = ((function (c__49370__auto___52157,buf,chan,event_fn){
return (function (state_51720){
var state_val_51721 = (state_51720[(1)]);
if((state_val_51721 === (1))){
var state_51720__$1 = state_51720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51720__$1,(2),once_or_cleanup);
} else {
if((state_val_51721 === (2))){
var inst_51717 = (state_51720[(2)]);
var inst_51718 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_51720__$1 = (function (){var statearr_51722 = state_51720;
(statearr_51722[(7)] = inst_51717);

return statearr_51722;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51720__$1,inst_51718);
} else {
return null;
}
}
});})(c__49370__auto___52157,buf,chan,event_fn))
;
return ((function (switch__49300__auto__,c__49370__auto___52157,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__49301__auto__ = null;
var shadow$dom$state_machine__49301__auto____0 = (function (){
var statearr_51723 = [null,null,null,null,null,null,null,null];
(statearr_51723[(0)] = shadow$dom$state_machine__49301__auto__);

(statearr_51723[(1)] = (1));

return statearr_51723;
});
var shadow$dom$state_machine__49301__auto____1 = (function (state_51720){
while(true){
var ret_value__49302__auto__ = (function (){try{while(true){
var result__49303__auto__ = switch__49300__auto__(state_51720);
if(cljs.core.keyword_identical_QMARK_(result__49303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49303__auto__;
}
break;
}
}catch (e51724){if((e51724 instanceof Object)){
var ex__49304__auto__ = e51724;
var statearr_51725_52159 = state_51720;
(statearr_51725_52159[(5)] = ex__49304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51724;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52161 = state_51720;
state_51720 = G__52161;
continue;
} else {
return ret_value__49302__auto__;
}
break;
}
});
shadow$dom$state_machine__49301__auto__ = function(state_51720){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__49301__auto____0.call(this);
case 1:
return shadow$dom$state_machine__49301__auto____1.call(this,state_51720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__49301__auto____0;
shadow$dom$state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__49301__auto____1;
return shadow$dom$state_machine__49301__auto__;
})()
;})(switch__49300__auto__,c__49370__auto___52157,buf,chan,event_fn))
})();
var state__49372__auto__ = (function (){var statearr_51726 = (f__49371__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49371__auto__.cljs$core$IFn$_invoke$arity$0() : f__49371__auto__.call(null));
(statearr_51726[(6)] = c__49370__auto___52157);

return statearr_51726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49372__auto__);
});})(c__49370__auto___52157,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
