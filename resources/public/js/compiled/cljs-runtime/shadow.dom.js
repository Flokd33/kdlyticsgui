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

var shadow$dom$IElement$_to_dom$dyn_51883 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_51883(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_51884 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_51884(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__51372 = coll;
var G__51373 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__51372,G__51373) : shadow.dom.lazy_native_coll_seq.call(null,G__51372,G__51373));
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
var G__51386 = arguments.length;
switch (G__51386) {
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
var G__51395 = arguments.length;
switch (G__51395) {
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
var G__51399 = arguments.length;
switch (G__51399) {
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
var G__51406 = arguments.length;
switch (G__51406) {
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
var G__51411 = arguments.length;
switch (G__51411) {
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
var G__51413 = document;
var G__51414 = shadow.dom.dom_node(el);
return goog.dom.contains(G__51413,G__51414);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__51416 = shadow.dom.dom_node(parent);
var G__51417 = shadow.dom.dom_node(el);
return goog.dom.contains(G__51416,G__51417);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__51420 = shadow.dom.dom_node(el);
var G__51421 = cls;
return goog.dom.classlist.add(G__51420,G__51421);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__51423 = shadow.dom.dom_node(el);
var G__51424 = cls;
return goog.dom.classlist.remove(G__51423,G__51424);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__51428 = arguments.length;
switch (G__51428) {
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
var G__51429 = shadow.dom.dom_node(el);
var G__51430 = cls;
return goog.dom.classlist.toggle(G__51429,G__51430);
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
}catch (e51433){if((e51433 instanceof Object)){
var e = e51433;
return console.log("didnt support attachEvent",el,e);
} else {
throw e51433;

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
var seq__51437 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__51438 = null;
var count__51439 = (0);
var i__51440 = (0);
while(true){
if((i__51440 < count__51439)){
var el = chunk__51438.cljs$core$IIndexed$_nth$arity$2(null,i__51440);
var handler_51891__$1 = ((function (seq__51437,chunk__51438,count__51439,i__51440,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__51437,chunk__51438,count__51439,i__51440,el))
;
var G__51454_51892 = el;
var G__51455_51893 = cljs.core.name(ev);
var G__51456_51894 = handler_51891__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__51454_51892,G__51455_51893,G__51456_51894) : shadow.dom.dom_listen.call(null,G__51454_51892,G__51455_51893,G__51456_51894));


var G__51895 = seq__51437;
var G__51896 = chunk__51438;
var G__51897 = count__51439;
var G__51898 = (i__51440 + (1));
seq__51437 = G__51895;
chunk__51438 = G__51896;
count__51439 = G__51897;
i__51440 = G__51898;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51437);
if(temp__5735__auto__){
var seq__51437__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51437__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51437__$1);
var G__51899 = cljs.core.chunk_rest(seq__51437__$1);
var G__51900 = c__4556__auto__;
var G__51901 = cljs.core.count(c__4556__auto__);
var G__51902 = (0);
seq__51437 = G__51899;
chunk__51438 = G__51900;
count__51439 = G__51901;
i__51440 = G__51902;
continue;
} else {
var el = cljs.core.first(seq__51437__$1);
var handler_51903__$1 = ((function (seq__51437,chunk__51438,count__51439,i__51440,el,seq__51437__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__51437,chunk__51438,count__51439,i__51440,el,seq__51437__$1,temp__5735__auto__))
;
var G__51458_51904 = el;
var G__51459_51905 = cljs.core.name(ev);
var G__51460_51906 = handler_51903__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__51458_51904,G__51459_51905,G__51460_51906) : shadow.dom.dom_listen.call(null,G__51458_51904,G__51459_51905,G__51460_51906));


var G__51907 = cljs.core.next(seq__51437__$1);
var G__51908 = null;
var G__51909 = (0);
var G__51910 = (0);
seq__51437 = G__51907;
chunk__51438 = G__51908;
count__51439 = G__51909;
i__51440 = G__51910;
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
var G__51464 = arguments.length;
switch (G__51464) {
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
var G__51466 = shadow.dom.dom_node(el);
var G__51467 = cljs.core.name(ev);
var G__51468 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__51466,G__51467,G__51468) : shadow.dom.dom_listen.call(null,G__51466,G__51467,G__51468));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__51471 = shadow.dom.dom_node(el);
var G__51472 = cljs.core.name(ev);
var G__51473 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__51471,G__51472,G__51473) : shadow.dom.dom_listen_remove.call(null,G__51471,G__51472,G__51473));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__51474 = cljs.core.seq(events);
var chunk__51475 = null;
var count__51476 = (0);
var i__51477 = (0);
while(true){
if((i__51477 < count__51476)){
var vec__51487 = chunk__51475.cljs$core$IIndexed$_nth$arity$2(null,i__51477);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51487,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51487,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51912 = seq__51474;
var G__51913 = chunk__51475;
var G__51914 = count__51476;
var G__51915 = (i__51477 + (1));
seq__51474 = G__51912;
chunk__51475 = G__51913;
count__51476 = G__51914;
i__51477 = G__51915;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51474);
if(temp__5735__auto__){
var seq__51474__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51474__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51474__$1);
var G__51916 = cljs.core.chunk_rest(seq__51474__$1);
var G__51917 = c__4556__auto__;
var G__51918 = cljs.core.count(c__4556__auto__);
var G__51919 = (0);
seq__51474 = G__51916;
chunk__51475 = G__51917;
count__51476 = G__51918;
i__51477 = G__51919;
continue;
} else {
var vec__51491 = cljs.core.first(seq__51474__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51491,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51491,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51920 = cljs.core.next(seq__51474__$1);
var G__51921 = null;
var G__51922 = (0);
var G__51923 = (0);
seq__51474 = G__51920;
chunk__51475 = G__51921;
count__51476 = G__51922;
i__51477 = G__51923;
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
var seq__51496 = cljs.core.seq(styles);
var chunk__51497 = null;
var count__51498 = (0);
var i__51499 = (0);
while(true){
if((i__51499 < count__51498)){
var vec__51516 = chunk__51497.cljs$core$IIndexed$_nth$arity$2(null,i__51499);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51516,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51516,(1),null);
var G__51520_51924 = dom;
var G__51521_51925 = cljs.core.name(k);
var G__51522_51926 = (((v == null))?"":v);
goog.style.setStyle(G__51520_51924,G__51521_51925,G__51522_51926);


var G__51927 = seq__51496;
var G__51928 = chunk__51497;
var G__51929 = count__51498;
var G__51930 = (i__51499 + (1));
seq__51496 = G__51927;
chunk__51497 = G__51928;
count__51498 = G__51929;
i__51499 = G__51930;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51496);
if(temp__5735__auto__){
var seq__51496__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51496__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51496__$1);
var G__51931 = cljs.core.chunk_rest(seq__51496__$1);
var G__51932 = c__4556__auto__;
var G__51933 = cljs.core.count(c__4556__auto__);
var G__51934 = (0);
seq__51496 = G__51931;
chunk__51497 = G__51932;
count__51498 = G__51933;
i__51499 = G__51934;
continue;
} else {
var vec__51525 = cljs.core.first(seq__51496__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51525,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51525,(1),null);
var G__51528_51935 = dom;
var G__51529_51936 = cljs.core.name(k);
var G__51530_51937 = (((v == null))?"":v);
goog.style.setStyle(G__51528_51935,G__51529_51936,G__51530_51937);


var G__51938 = cljs.core.next(seq__51496__$1);
var G__51939 = null;
var G__51940 = (0);
var G__51941 = (0);
seq__51496 = G__51938;
chunk__51497 = G__51939;
count__51498 = G__51940;
i__51499 = G__51941;
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
var G__51532_51942 = key;
var G__51532_51943__$1 = (((G__51532_51942 instanceof cljs.core.Keyword))?G__51532_51942.fqn:null);
switch (G__51532_51943__$1) {
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
var ks_51945 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_51945,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_51945,"aria-");
}
})())){
el.setAttribute(ks_51945,value);
} else {
(el[ks_51945] = value);
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
var G__51537 = shadow.dom.dom_node(el);
var G__51538 = cls;
return goog.dom.classlist.contains(G__51537,G__51538);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__51549){
var map__51550 = p__51549;
var map__51550__$1 = (((((!((map__51550 == null))))?(((((map__51550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51550):map__51550);
var props = map__51550__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51550__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__51553 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51553,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51553,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51553,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__51557 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__51557,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__51557;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__51559 = arguments.length;
switch (G__51559) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__51560){
var vec__51561 = p__51560;
var seq__51562 = cljs.core.seq(vec__51561);
var first__51563 = cljs.core.first(seq__51562);
var seq__51562__$1 = cljs.core.next(seq__51562);
var nn = first__51563;
var first__51563__$1 = cljs.core.first(seq__51562__$1);
var seq__51562__$2 = cljs.core.next(seq__51562__$1);
var np = first__51563__$1;
var nc = seq__51562__$2;
var node = vec__51561;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51564 = nn;
var G__51565 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__51564,G__51565) : create_fn.call(null,G__51564,G__51565));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51566 = nn;
var G__51567 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__51566,G__51567) : create_fn.call(null,G__51566,G__51567));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__51568 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51568,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51568,(1),null);
var seq__51571_51947 = cljs.core.seq(node_children);
var chunk__51572_51948 = null;
var count__51573_51949 = (0);
var i__51574_51950 = (0);
while(true){
if((i__51574_51950 < count__51573_51949)){
var child_struct_51951 = chunk__51572_51948.cljs$core$IIndexed$_nth$arity$2(null,i__51574_51950);
var children_51952 = shadow.dom.dom_node(child_struct_51951);
if(cljs.core.seq_QMARK_(children_51952)){
var seq__51589_51953 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51952));
var chunk__51591_51954 = null;
var count__51592_51955 = (0);
var i__51593_51956 = (0);
while(true){
if((i__51593_51956 < count__51592_51955)){
var child_51957 = chunk__51591_51954.cljs$core$IIndexed$_nth$arity$2(null,i__51593_51956);
if(cljs.core.truth_(child_51957)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51957);


var G__51958 = seq__51589_51953;
var G__51959 = chunk__51591_51954;
var G__51960 = count__51592_51955;
var G__51961 = (i__51593_51956 + (1));
seq__51589_51953 = G__51958;
chunk__51591_51954 = G__51959;
count__51592_51955 = G__51960;
i__51593_51956 = G__51961;
continue;
} else {
var G__51962 = seq__51589_51953;
var G__51963 = chunk__51591_51954;
var G__51964 = count__51592_51955;
var G__51965 = (i__51593_51956 + (1));
seq__51589_51953 = G__51962;
chunk__51591_51954 = G__51963;
count__51592_51955 = G__51964;
i__51593_51956 = G__51965;
continue;
}
} else {
var temp__5735__auto___51966 = cljs.core.seq(seq__51589_51953);
if(temp__5735__auto___51966){
var seq__51589_51967__$1 = temp__5735__auto___51966;
if(cljs.core.chunked_seq_QMARK_(seq__51589_51967__$1)){
var c__4556__auto___51968 = cljs.core.chunk_first(seq__51589_51967__$1);
var G__51969 = cljs.core.chunk_rest(seq__51589_51967__$1);
var G__51970 = c__4556__auto___51968;
var G__51971 = cljs.core.count(c__4556__auto___51968);
var G__51972 = (0);
seq__51589_51953 = G__51969;
chunk__51591_51954 = G__51970;
count__51592_51955 = G__51971;
i__51593_51956 = G__51972;
continue;
} else {
var child_51973 = cljs.core.first(seq__51589_51967__$1);
if(cljs.core.truth_(child_51973)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51973);


var G__51974 = cljs.core.next(seq__51589_51967__$1);
var G__51975 = null;
var G__51976 = (0);
var G__51977 = (0);
seq__51589_51953 = G__51974;
chunk__51591_51954 = G__51975;
count__51592_51955 = G__51976;
i__51593_51956 = G__51977;
continue;
} else {
var G__51978 = cljs.core.next(seq__51589_51967__$1);
var G__51979 = null;
var G__51980 = (0);
var G__51981 = (0);
seq__51589_51953 = G__51978;
chunk__51591_51954 = G__51979;
count__51592_51955 = G__51980;
i__51593_51956 = G__51981;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51952);
}


var G__51982 = seq__51571_51947;
var G__51983 = chunk__51572_51948;
var G__51984 = count__51573_51949;
var G__51985 = (i__51574_51950 + (1));
seq__51571_51947 = G__51982;
chunk__51572_51948 = G__51983;
count__51573_51949 = G__51984;
i__51574_51950 = G__51985;
continue;
} else {
var temp__5735__auto___51986 = cljs.core.seq(seq__51571_51947);
if(temp__5735__auto___51986){
var seq__51571_51987__$1 = temp__5735__auto___51986;
if(cljs.core.chunked_seq_QMARK_(seq__51571_51987__$1)){
var c__4556__auto___51988 = cljs.core.chunk_first(seq__51571_51987__$1);
var G__51989 = cljs.core.chunk_rest(seq__51571_51987__$1);
var G__51990 = c__4556__auto___51988;
var G__51991 = cljs.core.count(c__4556__auto___51988);
var G__51992 = (0);
seq__51571_51947 = G__51989;
chunk__51572_51948 = G__51990;
count__51573_51949 = G__51991;
i__51574_51950 = G__51992;
continue;
} else {
var child_struct_51993 = cljs.core.first(seq__51571_51987__$1);
var children_51994 = shadow.dom.dom_node(child_struct_51993);
if(cljs.core.seq_QMARK_(children_51994)){
var seq__51604_51995 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51994));
var chunk__51606_51996 = null;
var count__51607_51997 = (0);
var i__51608_51998 = (0);
while(true){
if((i__51608_51998 < count__51607_51997)){
var child_51999 = chunk__51606_51996.cljs$core$IIndexed$_nth$arity$2(null,i__51608_51998);
if(cljs.core.truth_(child_51999)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51999);


var G__52000 = seq__51604_51995;
var G__52001 = chunk__51606_51996;
var G__52002 = count__51607_51997;
var G__52003 = (i__51608_51998 + (1));
seq__51604_51995 = G__52000;
chunk__51606_51996 = G__52001;
count__51607_51997 = G__52002;
i__51608_51998 = G__52003;
continue;
} else {
var G__52004 = seq__51604_51995;
var G__52005 = chunk__51606_51996;
var G__52006 = count__51607_51997;
var G__52007 = (i__51608_51998 + (1));
seq__51604_51995 = G__52004;
chunk__51606_51996 = G__52005;
count__51607_51997 = G__52006;
i__51608_51998 = G__52007;
continue;
}
} else {
var temp__5735__auto___52008__$1 = cljs.core.seq(seq__51604_51995);
if(temp__5735__auto___52008__$1){
var seq__51604_52009__$1 = temp__5735__auto___52008__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51604_52009__$1)){
var c__4556__auto___52010 = cljs.core.chunk_first(seq__51604_52009__$1);
var G__52011 = cljs.core.chunk_rest(seq__51604_52009__$1);
var G__52012 = c__4556__auto___52010;
var G__52013 = cljs.core.count(c__4556__auto___52010);
var G__52014 = (0);
seq__51604_51995 = G__52011;
chunk__51606_51996 = G__52012;
count__51607_51997 = G__52013;
i__51608_51998 = G__52014;
continue;
} else {
var child_52015 = cljs.core.first(seq__51604_52009__$1);
if(cljs.core.truth_(child_52015)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52015);


var G__52016 = cljs.core.next(seq__51604_52009__$1);
var G__52017 = null;
var G__52018 = (0);
var G__52019 = (0);
seq__51604_51995 = G__52016;
chunk__51606_51996 = G__52017;
count__51607_51997 = G__52018;
i__51608_51998 = G__52019;
continue;
} else {
var G__52020 = cljs.core.next(seq__51604_52009__$1);
var G__52021 = null;
var G__52022 = (0);
var G__52023 = (0);
seq__51604_51995 = G__52020;
chunk__51606_51996 = G__52021;
count__51607_51997 = G__52022;
i__51608_51998 = G__52023;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51994);
}


var G__52024 = cljs.core.next(seq__51571_51987__$1);
var G__52025 = null;
var G__52026 = (0);
var G__52027 = (0);
seq__51571_51947 = G__52024;
chunk__51572_51948 = G__52025;
count__51573_51949 = G__52026;
i__51574_51950 = G__52027;
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
var G__51622 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__51622);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__51626 = cljs.core.seq(node);
var chunk__51627 = null;
var count__51628 = (0);
var i__51629 = (0);
while(true){
if((i__51629 < count__51628)){
var n = chunk__51627.cljs$core$IIndexed$_nth$arity$2(null,i__51629);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__52028 = seq__51626;
var G__52029 = chunk__51627;
var G__52030 = count__51628;
var G__52031 = (i__51629 + (1));
seq__51626 = G__52028;
chunk__51627 = G__52029;
count__51628 = G__52030;
i__51629 = G__52031;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51626);
if(temp__5735__auto__){
var seq__51626__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51626__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51626__$1);
var G__52032 = cljs.core.chunk_rest(seq__51626__$1);
var G__52033 = c__4556__auto__;
var G__52034 = cljs.core.count(c__4556__auto__);
var G__52035 = (0);
seq__51626 = G__52032;
chunk__51627 = G__52033;
count__51628 = G__52034;
i__51629 = G__52035;
continue;
} else {
var n = cljs.core.first(seq__51626__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__52036 = cljs.core.next(seq__51626__$1);
var G__52037 = null;
var G__52038 = (0);
var G__52039 = (0);
seq__51626 = G__52036;
chunk__51627 = G__52037;
count__51628 = G__52038;
i__51629 = G__52039;
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
var G__51634 = shadow.dom.dom_node(new$);
var G__51635 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__51634,G__51635);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__51640 = arguments.length;
switch (G__51640) {
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
var G__51647 = arguments.length;
switch (G__51647) {
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
var G__51656 = arguments.length;
switch (G__51656) {
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
var len__4736__auto___52043 = arguments.length;
var i__4737__auto___52044 = (0);
while(true){
if((i__4737__auto___52044 < len__4736__auto___52043)){
args__4742__auto__.push((arguments[i__4737__auto___52044]));

var G__52045 = (i__4737__auto___52044 + (1));
i__4737__auto___52044 = G__52045;
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
var seq__51669_52046 = cljs.core.seq(nodes);
var chunk__51670_52047 = null;
var count__51671_52048 = (0);
var i__51672_52049 = (0);
while(true){
if((i__51672_52049 < count__51671_52048)){
var node_52050 = chunk__51670_52047.cljs$core$IIndexed$_nth$arity$2(null,i__51672_52049);
fragment.appendChild(shadow.dom._to_dom(node_52050));


var G__52051 = seq__51669_52046;
var G__52052 = chunk__51670_52047;
var G__52053 = count__51671_52048;
var G__52054 = (i__51672_52049 + (1));
seq__51669_52046 = G__52051;
chunk__51670_52047 = G__52052;
count__51671_52048 = G__52053;
i__51672_52049 = G__52054;
continue;
} else {
var temp__5735__auto___52055 = cljs.core.seq(seq__51669_52046);
if(temp__5735__auto___52055){
var seq__51669_52057__$1 = temp__5735__auto___52055;
if(cljs.core.chunked_seq_QMARK_(seq__51669_52057__$1)){
var c__4556__auto___52058 = cljs.core.chunk_first(seq__51669_52057__$1);
var G__52059 = cljs.core.chunk_rest(seq__51669_52057__$1);
var G__52060 = c__4556__auto___52058;
var G__52061 = cljs.core.count(c__4556__auto___52058);
var G__52062 = (0);
seq__51669_52046 = G__52059;
chunk__51670_52047 = G__52060;
count__51671_52048 = G__52061;
i__51672_52049 = G__52062;
continue;
} else {
var node_52064 = cljs.core.first(seq__51669_52057__$1);
fragment.appendChild(shadow.dom._to_dom(node_52064));


var G__52065 = cljs.core.next(seq__51669_52057__$1);
var G__52066 = null;
var G__52067 = (0);
var G__52068 = (0);
seq__51669_52046 = G__52065;
chunk__51670_52047 = G__52066;
count__51671_52048 = G__52067;
i__51672_52049 = G__52068;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq51667){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51667));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__51682_52069 = cljs.core.seq(scripts);
var chunk__51683_52070 = null;
var count__51684_52071 = (0);
var i__51685_52072 = (0);
while(true){
if((i__51685_52072 < count__51684_52071)){
var vec__51695_52073 = chunk__51683_52070.cljs$core$IIndexed$_nth$arity$2(null,i__51685_52072);
var script_tag_52074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51695_52073,(0),null);
var script_body_52075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51695_52073,(1),null);
eval(script_body_52075);


var G__52076 = seq__51682_52069;
var G__52077 = chunk__51683_52070;
var G__52078 = count__51684_52071;
var G__52079 = (i__51685_52072 + (1));
seq__51682_52069 = G__52076;
chunk__51683_52070 = G__52077;
count__51684_52071 = G__52078;
i__51685_52072 = G__52079;
continue;
} else {
var temp__5735__auto___52080 = cljs.core.seq(seq__51682_52069);
if(temp__5735__auto___52080){
var seq__51682_52081__$1 = temp__5735__auto___52080;
if(cljs.core.chunked_seq_QMARK_(seq__51682_52081__$1)){
var c__4556__auto___52082 = cljs.core.chunk_first(seq__51682_52081__$1);
var G__52083 = cljs.core.chunk_rest(seq__51682_52081__$1);
var G__52084 = c__4556__auto___52082;
var G__52085 = cljs.core.count(c__4556__auto___52082);
var G__52086 = (0);
seq__51682_52069 = G__52083;
chunk__51683_52070 = G__52084;
count__51684_52071 = G__52085;
i__51685_52072 = G__52086;
continue;
} else {
var vec__51698_52087 = cljs.core.first(seq__51682_52081__$1);
var script_tag_52088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51698_52087,(0),null);
var script_body_52089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51698_52087,(1),null);
eval(script_body_52089);


var G__52090 = cljs.core.next(seq__51682_52081__$1);
var G__52091 = null;
var G__52092 = (0);
var G__52093 = (0);
seq__51682_52069 = G__52090;
chunk__51683_52070 = G__52091;
count__51684_52071 = G__52092;
i__51685_52072 = G__52093;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__51702){
var vec__51703 = p__51702;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51703,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51703,(1),null);
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
var G__51709 = shadow.dom.dom_node(el);
var G__51710 = cls;
return goog.dom.getAncestorByClass(G__51709,G__51710);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__51714 = arguments.length;
switch (G__51714) {
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
var G__51716 = shadow.dom.dom_node(el);
var G__51717 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__51716,G__51717);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__51719 = shadow.dom.dom_node(el);
var G__51720 = cljs.core.name(tag);
var G__51721 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__51719,G__51720,G__51721);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__51723 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__51723);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__51725 = shadow.dom.dom_node(dom);
var G__51726 = value;
return goog.dom.forms.setValue(G__51725,G__51726);
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
var seq__51743 = cljs.core.seq(style_keys);
var chunk__51744 = null;
var count__51745 = (0);
var i__51746 = (0);
while(true){
if((i__51746 < count__51745)){
var it = chunk__51744.cljs$core$IIndexed$_nth$arity$2(null,i__51746);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__52099 = seq__51743;
var G__52100 = chunk__51744;
var G__52101 = count__51745;
var G__52102 = (i__51746 + (1));
seq__51743 = G__52099;
chunk__51744 = G__52100;
count__51745 = G__52101;
i__51746 = G__52102;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51743);
if(temp__5735__auto__){
var seq__51743__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51743__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51743__$1);
var G__52103 = cljs.core.chunk_rest(seq__51743__$1);
var G__52104 = c__4556__auto__;
var G__52105 = cljs.core.count(c__4556__auto__);
var G__52106 = (0);
seq__51743 = G__52103;
chunk__51744 = G__52104;
count__51745 = G__52105;
i__51746 = G__52106;
continue;
} else {
var it = cljs.core.first(seq__51743__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__52107 = cljs.core.next(seq__51743__$1);
var G__52108 = null;
var G__52109 = (0);
var G__52110 = (0);
seq__51743 = G__52107;
chunk__51744 = G__52108;
count__51745 = G__52109;
i__51746 = G__52110;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k51748,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__51752 = k51748;
var G__51752__$1 = (((G__51752 instanceof cljs.core.Keyword))?G__51752.fqn:null);
switch (G__51752__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51748,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__51753){
var vec__51754 = p__51753;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51754,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51754,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51747){
var self__ = this;
var G__51747__$1 = this;
return (new cljs.core.RecordIter((0),G__51747__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4238__auto____$1 = (function (){var fexpr__51757 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__51757(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51749,other51750){
var self__ = this;
var this51749__$1 = this;
return (((!((other51750 == null)))) && ((this51749__$1.constructor === other51750.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51749__$1.x,other51750.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51749__$1.y,other51750.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51749__$1.__extmap,other51750.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__51747){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__51758 = cljs.core.keyword_identical_QMARK_;
var expr__51759 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__51761 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__51762 = expr__51759;
return (pred__51758.cljs$core$IFn$_invoke$arity$2 ? pred__51758.cljs$core$IFn$_invoke$arity$2(G__51761,G__51762) : pred__51758.call(null,G__51761,G__51762));
})())){
return (new shadow.dom.Coordinate(G__51747,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__51763 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__51764 = expr__51759;
return (pred__51758.cljs$core$IFn$_invoke$arity$2 ? pred__51758.cljs$core$IFn$_invoke$arity$2(G__51763,G__51764) : pred__51758.call(null,G__51763,G__51764));
})())){
return (new shadow.dom.Coordinate(self__.x,G__51747,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__51747),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__51747){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__51747,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__51751){
var extmap__4419__auto__ = (function (){var G__51765 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51751,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__51751)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51765);
} else {
return G__51765;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__51751),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__51751),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__51766 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__51766);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__51767 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__51767);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__51768 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__51768);
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k51770,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__51774 = k51770;
var G__51774__$1 = (((G__51774 instanceof cljs.core.Keyword))?G__51774.fqn:null);
switch (G__51774__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51770,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__51775){
var vec__51776 = p__51775;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51776,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51776,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51769){
var self__ = this;
var G__51769__$1 = this;
return (new cljs.core.RecordIter((0),G__51769__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4238__auto____$1 = (function (){var fexpr__51779 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__51779(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51771,other51772){
var self__ = this;
var this51771__$1 = this;
return (((!((other51772 == null)))) && ((this51771__$1.constructor === other51772.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51771__$1.w,other51772.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51771__$1.h,other51772.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51771__$1.__extmap,other51772.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__51769){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__51780 = cljs.core.keyword_identical_QMARK_;
var expr__51781 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__51783 = new cljs.core.Keyword(null,"w","w",354169001);
var G__51784 = expr__51781;
return (pred__51780.cljs$core$IFn$_invoke$arity$2 ? pred__51780.cljs$core$IFn$_invoke$arity$2(G__51783,G__51784) : pred__51780.call(null,G__51783,G__51784));
})())){
return (new shadow.dom.Size(G__51769,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__51785 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__51786 = expr__51781;
return (pred__51780.cljs$core$IFn$_invoke$arity$2 ? pred__51780.cljs$core$IFn$_invoke$arity$2(G__51785,G__51786) : pred__51780.call(null,G__51785,G__51786));
})())){
return (new shadow.dom.Size(self__.w,G__51769,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__51769),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__51769){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__51769,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__51773){
var extmap__4419__auto__ = (function (){var G__51787 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51773,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__51773)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51787);
} else {
return G__51787;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__51773),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__51773),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__51788 = shadow.dom.dom_node(el);
return goog.style.getSize(G__51788);
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
var G__52137 = (i + (1));
var G__52138 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__52137;
ret = G__52138;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51793){
var vec__51794 = p__51793;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51794,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51794,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__51798 = arguments.length;
switch (G__51798) {
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
var G__51799_52143 = new_node;
var G__51800_52144 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__51799_52143,G__51800_52144);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__51801_52145 = new_node;
var G__51802_52146 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__51801_52145,G__51802_52146);

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
var G__52147 = ps;
var G__52148 = (i + (1));
el__$1 = G__52147;
i = G__52148;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__51803 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__51803);
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
var G__51804 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__51804);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__51805 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__51805);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__51806 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51806,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51806,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51806,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__51809_52152 = cljs.core.seq(props);
var chunk__51810_52153 = null;
var count__51811_52154 = (0);
var i__51812_52155 = (0);
while(true){
if((i__51812_52155 < count__51811_52154)){
var vec__51819_52156 = chunk__51810_52153.cljs$core$IIndexed$_nth$arity$2(null,i__51812_52155);
var k_52157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51819_52156,(0),null);
var v_52158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51819_52156,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_52157);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_52157),v_52158);


var G__52159 = seq__51809_52152;
var G__52160 = chunk__51810_52153;
var G__52161 = count__51811_52154;
var G__52162 = (i__51812_52155 + (1));
seq__51809_52152 = G__52159;
chunk__51810_52153 = G__52160;
count__51811_52154 = G__52161;
i__51812_52155 = G__52162;
continue;
} else {
var temp__5735__auto___52163 = cljs.core.seq(seq__51809_52152);
if(temp__5735__auto___52163){
var seq__51809_52164__$1 = temp__5735__auto___52163;
if(cljs.core.chunked_seq_QMARK_(seq__51809_52164__$1)){
var c__4556__auto___52165 = cljs.core.chunk_first(seq__51809_52164__$1);
var G__52166 = cljs.core.chunk_rest(seq__51809_52164__$1);
var G__52167 = c__4556__auto___52165;
var G__52168 = cljs.core.count(c__4556__auto___52165);
var G__52169 = (0);
seq__51809_52152 = G__52166;
chunk__51810_52153 = G__52167;
count__51811_52154 = G__52168;
i__51812_52155 = G__52169;
continue;
} else {
var vec__51822_52170 = cljs.core.first(seq__51809_52164__$1);
var k_52171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51822_52170,(0),null);
var v_52172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51822_52170,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_52171);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_52171),v_52172);


var G__52173 = cljs.core.next(seq__51809_52164__$1);
var G__52174 = null;
var G__52175 = (0);
var G__52176 = (0);
seq__51809_52152 = G__52173;
chunk__51810_52153 = G__52174;
count__51811_52154 = G__52175;
i__51812_52155 = G__52176;
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
var vec__51826 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51826,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51826,(1),null);
var seq__51829_52177 = cljs.core.seq(node_children);
var chunk__51831_52178 = null;
var count__51832_52179 = (0);
var i__51833_52180 = (0);
while(true){
if((i__51833_52180 < count__51832_52179)){
var child_struct_52181 = chunk__51831_52178.cljs$core$IIndexed$_nth$arity$2(null,i__51833_52180);
if((!((child_struct_52181 == null)))){
if(typeof child_struct_52181 === 'string'){
var text_52182 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_52182),child_struct_52181].join(''));
} else {
var children_52183 = shadow.dom.svg_node(child_struct_52181);
if(cljs.core.seq_QMARK_(children_52183)){
var seq__51847_52184 = cljs.core.seq(children_52183);
var chunk__51849_52185 = null;
var count__51850_52186 = (0);
var i__51851_52187 = (0);
while(true){
if((i__51851_52187 < count__51850_52186)){
var child_52190 = chunk__51849_52185.cljs$core$IIndexed$_nth$arity$2(null,i__51851_52187);
if(cljs.core.truth_(child_52190)){
node.appendChild(child_52190);


var G__52191 = seq__51847_52184;
var G__52192 = chunk__51849_52185;
var G__52193 = count__51850_52186;
var G__52194 = (i__51851_52187 + (1));
seq__51847_52184 = G__52191;
chunk__51849_52185 = G__52192;
count__51850_52186 = G__52193;
i__51851_52187 = G__52194;
continue;
} else {
var G__52195 = seq__51847_52184;
var G__52196 = chunk__51849_52185;
var G__52197 = count__51850_52186;
var G__52198 = (i__51851_52187 + (1));
seq__51847_52184 = G__52195;
chunk__51849_52185 = G__52196;
count__51850_52186 = G__52197;
i__51851_52187 = G__52198;
continue;
}
} else {
var temp__5735__auto___52199 = cljs.core.seq(seq__51847_52184);
if(temp__5735__auto___52199){
var seq__51847_52201__$1 = temp__5735__auto___52199;
if(cljs.core.chunked_seq_QMARK_(seq__51847_52201__$1)){
var c__4556__auto___52202 = cljs.core.chunk_first(seq__51847_52201__$1);
var G__52203 = cljs.core.chunk_rest(seq__51847_52201__$1);
var G__52204 = c__4556__auto___52202;
var G__52205 = cljs.core.count(c__4556__auto___52202);
var G__52206 = (0);
seq__51847_52184 = G__52203;
chunk__51849_52185 = G__52204;
count__51850_52186 = G__52205;
i__51851_52187 = G__52206;
continue;
} else {
var child_52208 = cljs.core.first(seq__51847_52201__$1);
if(cljs.core.truth_(child_52208)){
node.appendChild(child_52208);


var G__52209 = cljs.core.next(seq__51847_52201__$1);
var G__52210 = null;
var G__52211 = (0);
var G__52212 = (0);
seq__51847_52184 = G__52209;
chunk__51849_52185 = G__52210;
count__51850_52186 = G__52211;
i__51851_52187 = G__52212;
continue;
} else {
var G__52213 = cljs.core.next(seq__51847_52201__$1);
var G__52214 = null;
var G__52215 = (0);
var G__52216 = (0);
seq__51847_52184 = G__52213;
chunk__51849_52185 = G__52214;
count__51850_52186 = G__52215;
i__51851_52187 = G__52216;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_52183);
}
}


var G__52217 = seq__51829_52177;
var G__52218 = chunk__51831_52178;
var G__52219 = count__51832_52179;
var G__52220 = (i__51833_52180 + (1));
seq__51829_52177 = G__52217;
chunk__51831_52178 = G__52218;
count__51832_52179 = G__52219;
i__51833_52180 = G__52220;
continue;
} else {
var G__52221 = seq__51829_52177;
var G__52222 = chunk__51831_52178;
var G__52223 = count__51832_52179;
var G__52224 = (i__51833_52180 + (1));
seq__51829_52177 = G__52221;
chunk__51831_52178 = G__52222;
count__51832_52179 = G__52223;
i__51833_52180 = G__52224;
continue;
}
} else {
var temp__5735__auto___52225 = cljs.core.seq(seq__51829_52177);
if(temp__5735__auto___52225){
var seq__51829_52226__$1 = temp__5735__auto___52225;
if(cljs.core.chunked_seq_QMARK_(seq__51829_52226__$1)){
var c__4556__auto___52227 = cljs.core.chunk_first(seq__51829_52226__$1);
var G__52228 = cljs.core.chunk_rest(seq__51829_52226__$1);
var G__52229 = c__4556__auto___52227;
var G__52230 = cljs.core.count(c__4556__auto___52227);
var G__52231 = (0);
seq__51829_52177 = G__52228;
chunk__51831_52178 = G__52229;
count__51832_52179 = G__52230;
i__51833_52180 = G__52231;
continue;
} else {
var child_struct_52232 = cljs.core.first(seq__51829_52226__$1);
if((!((child_struct_52232 == null)))){
if(typeof child_struct_52232 === 'string'){
var text_52233 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_52233),child_struct_52232].join(''));
} else {
var children_52234 = shadow.dom.svg_node(child_struct_52232);
if(cljs.core.seq_QMARK_(children_52234)){
var seq__51853_52235 = cljs.core.seq(children_52234);
var chunk__51855_52236 = null;
var count__51856_52237 = (0);
var i__51857_52238 = (0);
while(true){
if((i__51857_52238 < count__51856_52237)){
var child_52243 = chunk__51855_52236.cljs$core$IIndexed$_nth$arity$2(null,i__51857_52238);
if(cljs.core.truth_(child_52243)){
node.appendChild(child_52243);


var G__52244 = seq__51853_52235;
var G__52245 = chunk__51855_52236;
var G__52246 = count__51856_52237;
var G__52247 = (i__51857_52238 + (1));
seq__51853_52235 = G__52244;
chunk__51855_52236 = G__52245;
count__51856_52237 = G__52246;
i__51857_52238 = G__52247;
continue;
} else {
var G__52251 = seq__51853_52235;
var G__52252 = chunk__51855_52236;
var G__52253 = count__51856_52237;
var G__52254 = (i__51857_52238 + (1));
seq__51853_52235 = G__52251;
chunk__51855_52236 = G__52252;
count__51856_52237 = G__52253;
i__51857_52238 = G__52254;
continue;
}
} else {
var temp__5735__auto___52255__$1 = cljs.core.seq(seq__51853_52235);
if(temp__5735__auto___52255__$1){
var seq__51853_52256__$1 = temp__5735__auto___52255__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51853_52256__$1)){
var c__4556__auto___52257 = cljs.core.chunk_first(seq__51853_52256__$1);
var G__52258 = cljs.core.chunk_rest(seq__51853_52256__$1);
var G__52259 = c__4556__auto___52257;
var G__52260 = cljs.core.count(c__4556__auto___52257);
var G__52261 = (0);
seq__51853_52235 = G__52258;
chunk__51855_52236 = G__52259;
count__51856_52237 = G__52260;
i__51857_52238 = G__52261;
continue;
} else {
var child_52262 = cljs.core.first(seq__51853_52256__$1);
if(cljs.core.truth_(child_52262)){
node.appendChild(child_52262);


var G__52263 = cljs.core.next(seq__51853_52256__$1);
var G__52264 = null;
var G__52265 = (0);
var G__52266 = (0);
seq__51853_52235 = G__52263;
chunk__51855_52236 = G__52264;
count__51856_52237 = G__52265;
i__51857_52238 = G__52266;
continue;
} else {
var G__52267 = cljs.core.next(seq__51853_52256__$1);
var G__52268 = null;
var G__52269 = (0);
var G__52270 = (0);
seq__51853_52235 = G__52267;
chunk__51855_52236 = G__52268;
count__51856_52237 = G__52269;
i__51857_52238 = G__52270;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_52234);
}
}


var G__52271 = cljs.core.next(seq__51829_52226__$1);
var G__52272 = null;
var G__52273 = (0);
var G__52274 = (0);
seq__51829_52177 = G__52271;
chunk__51831_52178 = G__52272;
count__51832_52179 = G__52273;
i__51833_52180 = G__52274;
continue;
} else {
var G__52275 = cljs.core.next(seq__51829_52226__$1);
var G__52276 = null;
var G__52277 = (0);
var G__52278 = (0);
seq__51829_52177 = G__52275;
chunk__51831_52178 = G__52276;
count__51832_52179 = G__52277;
i__51833_52180 = G__52278;
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

var G__51859_52282 = shadow.dom._to_svg;
var G__51860_52283 = "string";
var G__51861_52284 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__51859_52282,G__51860_52283,G__51861_52284);

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

var G__51862_52285 = shadow.dom._to_svg;
var G__51863_52286 = "null";
var G__51864_52287 = (function (_){
return null;
});
goog.object.set(G__51862_52285,G__51863_52286,G__51864_52287);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52291 = arguments.length;
var i__4737__auto___52292 = (0);
while(true){
if((i__4737__auto___52292 < len__4736__auto___52291)){
args__4742__auto__.push((arguments[i__4737__auto___52292]));

var G__52293 = (i__4737__auto___52292 + (1));
i__4737__auto___52292 = G__52293;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq51865){
var G__51866 = cljs.core.first(seq51865);
var seq51865__$1 = cljs.core.next(seq51865);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51866,seq51865__$1);
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
var G__51868 = arguments.length;
switch (G__51868) {
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
var G__51869_52298 = shadow.dom.dom_node(el);
var G__51870_52299 = cljs.core.name(event);
var G__51871_52300 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__51869_52298,G__51870_52299,G__51871_52300) : shadow.dom.dom_listen.call(null,G__51869_52298,G__51870_52299,G__51871_52300));

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__49513__auto___52301 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49514__auto__ = (function (){var switch__49443__auto__ = (function (state_51876){
var state_val_51877 = (state_51876[(1)]);
if((state_val_51877 === (1))){
var state_51876__$1 = state_51876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51876__$1,(2),once_or_cleanup);
} else {
if((state_val_51877 === (2))){
var inst_51873 = (state_51876[(2)]);
var inst_51874 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_51876__$1 = (function (){var statearr_51878 = state_51876;
(statearr_51878[(7)] = inst_51873);

return statearr_51878;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51876__$1,inst_51874);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__49444__auto__ = null;
var shadow$dom$state_machine__49444__auto____0 = (function (){
var statearr_51879 = [null,null,null,null,null,null,null,null];
(statearr_51879[(0)] = shadow$dom$state_machine__49444__auto__);

(statearr_51879[(1)] = (1));

return statearr_51879;
});
var shadow$dom$state_machine__49444__auto____1 = (function (state_51876){
while(true){
var ret_value__49445__auto__ = (function (){try{while(true){
var result__49446__auto__ = switch__49443__auto__(state_51876);
if(cljs.core.keyword_identical_QMARK_(result__49446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49446__auto__;
}
break;
}
}catch (e51880){if((e51880 instanceof Object)){
var ex__49447__auto__ = e51880;
var statearr_51881_52302 = state_51876;
(statearr_51881_52302[(5)] = ex__49447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51880;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52303 = state_51876;
state_51876 = G__52303;
continue;
} else {
return ret_value__49445__auto__;
}
break;
}
});
shadow$dom$state_machine__49444__auto__ = function(state_51876){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__49444__auto____0.call(this);
case 1:
return shadow$dom$state_machine__49444__auto____1.call(this,state_51876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__49444__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__49444__auto____0;
shadow$dom$state_machine__49444__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__49444__auto____1;
return shadow$dom$state_machine__49444__auto__;
})()
})();
var state__49515__auto__ = (function (){var statearr_51882 = (f__49514__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49514__auto__.cljs$core$IFn$_invoke$arity$0() : f__49514__auto__.call(null));
(statearr_51882[(6)] = c__49513__auto___52301);

return statearr_51882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49515__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
