goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_37324 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_37324(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_37325 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_37325(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__36091 = coll;
var G__36092 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__36091,G__36092) : shadow.dom.lazy_native_coll_seq.call(null,G__36091,G__36092));
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
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
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
var G__36118 = arguments.length;
switch (G__36118) {
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
var G__36147 = arguments.length;
switch (G__36147) {
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
var G__36167 = arguments.length;
switch (G__36167) {
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
var G__36213 = arguments.length;
switch (G__36213) {
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
var G__36257 = arguments.length;
switch (G__36257) {
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
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__36292 = arguments.length;
switch (G__36292) {
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
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e36307){if((e36307 instanceof Object)){
var e = e36307;
return console.log("didnt support attachEvent",el,e);
} else {
throw e36307;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__36324 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__36325 = null;
var count__36326 = (0);
var i__36327 = (0);
while(true){
if((i__36327 < count__36326)){
var el = chunk__36325.cljs$core$IIndexed$_nth$arity$2(null,i__36327);
var handler_37338__$1 = ((function (seq__36324,chunk__36325,count__36326,i__36327,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36324,chunk__36325,count__36326,i__36327,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37338__$1);


var G__37339 = seq__36324;
var G__37340 = chunk__36325;
var G__37341 = count__36326;
var G__37342 = (i__36327 + (1));
seq__36324 = G__37339;
chunk__36325 = G__37340;
count__36326 = G__37341;
i__36327 = G__37342;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36324);
if(temp__5804__auto__){
var seq__36324__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36324__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36324__$1);
var G__37343 = cljs.core.chunk_rest(seq__36324__$1);
var G__37344 = c__5568__auto__;
var G__37345 = cljs.core.count(c__5568__auto__);
var G__37346 = (0);
seq__36324 = G__37343;
chunk__36325 = G__37344;
count__36326 = G__37345;
i__36327 = G__37346;
continue;
} else {
var el = cljs.core.first(seq__36324__$1);
var handler_37347__$1 = ((function (seq__36324,chunk__36325,count__36326,i__36327,el,seq__36324__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36324,chunk__36325,count__36326,i__36327,el,seq__36324__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37347__$1);


var G__37349 = cljs.core.next(seq__36324__$1);
var G__37350 = null;
var G__37351 = (0);
var G__37352 = (0);
seq__36324 = G__37349;
chunk__36325 = G__37350;
count__36326 = G__37351;
i__36327 = G__37352;
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
var G__36390 = arguments.length;
switch (G__36390) {
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
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__36425 = cljs.core.seq(events);
var chunk__36426 = null;
var count__36427 = (0);
var i__36428 = (0);
while(true){
if((i__36428 < count__36427)){
var vec__36498 = chunk__36426.cljs$core$IIndexed$_nth$arity$2(null,i__36428);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36498,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36498,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37354 = seq__36425;
var G__37355 = chunk__36426;
var G__37356 = count__36427;
var G__37357 = (i__36428 + (1));
seq__36425 = G__37354;
chunk__36426 = G__37355;
count__36427 = G__37356;
i__36428 = G__37357;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36425);
if(temp__5804__auto__){
var seq__36425__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36425__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36425__$1);
var G__37359 = cljs.core.chunk_rest(seq__36425__$1);
var G__37360 = c__5568__auto__;
var G__37361 = cljs.core.count(c__5568__auto__);
var G__37362 = (0);
seq__36425 = G__37359;
chunk__36426 = G__37360;
count__36427 = G__37361;
i__36428 = G__37362;
continue;
} else {
var vec__36501 = cljs.core.first(seq__36425__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36501,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36501,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37363 = cljs.core.next(seq__36425__$1);
var G__37364 = null;
var G__37365 = (0);
var G__37366 = (0);
seq__36425 = G__37363;
chunk__36426 = G__37364;
count__36427 = G__37365;
i__36428 = G__37366;
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
var seq__36511 = cljs.core.seq(styles);
var chunk__36512 = null;
var count__36513 = (0);
var i__36514 = (0);
while(true){
if((i__36514 < count__36513)){
var vec__36534 = chunk__36512.cljs$core$IIndexed$_nth$arity$2(null,i__36514);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36534,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36534,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37367 = seq__36511;
var G__37368 = chunk__36512;
var G__37369 = count__36513;
var G__37370 = (i__36514 + (1));
seq__36511 = G__37367;
chunk__36512 = G__37368;
count__36513 = G__37369;
i__36514 = G__37370;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36511);
if(temp__5804__auto__){
var seq__36511__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36511__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36511__$1);
var G__37371 = cljs.core.chunk_rest(seq__36511__$1);
var G__37372 = c__5568__auto__;
var G__37373 = cljs.core.count(c__5568__auto__);
var G__37374 = (0);
seq__36511 = G__37371;
chunk__36512 = G__37372;
count__36513 = G__37373;
i__36514 = G__37374;
continue;
} else {
var vec__36541 = cljs.core.first(seq__36511__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36541,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36541,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37376 = cljs.core.next(seq__36511__$1);
var G__37377 = null;
var G__37378 = (0);
var G__37379 = (0);
seq__36511 = G__37376;
chunk__36512 = G__37377;
count__36513 = G__37378;
i__36514 = G__37379;
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
var G__36555_37380 = key;
var G__36555_37381__$1 = (((G__36555_37380 instanceof cljs.core.Keyword))?G__36555_37380.fqn:null);
switch (G__36555_37381__$1) {
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
var ks_37388 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_37388,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_37388,"aria-");
}
})())){
el.setAttribute(ks_37388,value);
} else {
(el[ks_37388] = value);
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
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__36602){
var map__36603 = p__36602;
var map__36603__$1 = cljs.core.__destructure_map(map__36603);
var props = map__36603__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36603__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__36604 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36604,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36604,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36604,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__36608 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__36608,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__36608;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__36613 = arguments.length;
switch (G__36613) {
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
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
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
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__36626){
var vec__36627 = p__36626;
var seq__36628 = cljs.core.seq(vec__36627);
var first__36629 = cljs.core.first(seq__36628);
var seq__36628__$1 = cljs.core.next(seq__36628);
var nn = first__36629;
var first__36629__$1 = cljs.core.first(seq__36628__$1);
var seq__36628__$2 = cljs.core.next(seq__36628__$1);
var np = first__36629__$1;
var nc = seq__36628__$2;
var node = vec__36627;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36630 = nn;
var G__36631 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36630,G__36631) : create_fn.call(null,G__36630,G__36631));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36633 = nn;
var G__36634 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36633,G__36634) : create_fn.call(null,G__36633,G__36634));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__36645 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36645,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36645,(1),null);
var seq__36648_37411 = cljs.core.seq(node_children);
var chunk__36649_37412 = null;
var count__36650_37413 = (0);
var i__36651_37414 = (0);
while(true){
if((i__36651_37414 < count__36650_37413)){
var child_struct_37415 = chunk__36649_37412.cljs$core$IIndexed$_nth$arity$2(null,i__36651_37414);
var children_37416 = shadow.dom.dom_node(child_struct_37415);
if(cljs.core.seq_QMARK_(children_37416)){
var seq__36701_37417 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37416));
var chunk__36703_37418 = null;
var count__36704_37419 = (0);
var i__36705_37420 = (0);
while(true){
if((i__36705_37420 < count__36704_37419)){
var child_37421 = chunk__36703_37418.cljs$core$IIndexed$_nth$arity$2(null,i__36705_37420);
if(cljs.core.truth_(child_37421)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37421);


var G__37422 = seq__36701_37417;
var G__37423 = chunk__36703_37418;
var G__37424 = count__36704_37419;
var G__37425 = (i__36705_37420 + (1));
seq__36701_37417 = G__37422;
chunk__36703_37418 = G__37423;
count__36704_37419 = G__37424;
i__36705_37420 = G__37425;
continue;
} else {
var G__37426 = seq__36701_37417;
var G__37427 = chunk__36703_37418;
var G__37428 = count__36704_37419;
var G__37429 = (i__36705_37420 + (1));
seq__36701_37417 = G__37426;
chunk__36703_37418 = G__37427;
count__36704_37419 = G__37428;
i__36705_37420 = G__37429;
continue;
}
} else {
var temp__5804__auto___37430 = cljs.core.seq(seq__36701_37417);
if(temp__5804__auto___37430){
var seq__36701_37431__$1 = temp__5804__auto___37430;
if(cljs.core.chunked_seq_QMARK_(seq__36701_37431__$1)){
var c__5568__auto___37432 = cljs.core.chunk_first(seq__36701_37431__$1);
var G__37433 = cljs.core.chunk_rest(seq__36701_37431__$1);
var G__37434 = c__5568__auto___37432;
var G__37435 = cljs.core.count(c__5568__auto___37432);
var G__37436 = (0);
seq__36701_37417 = G__37433;
chunk__36703_37418 = G__37434;
count__36704_37419 = G__37435;
i__36705_37420 = G__37436;
continue;
} else {
var child_37437 = cljs.core.first(seq__36701_37431__$1);
if(cljs.core.truth_(child_37437)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37437);


var G__37438 = cljs.core.next(seq__36701_37431__$1);
var G__37439 = null;
var G__37440 = (0);
var G__37441 = (0);
seq__36701_37417 = G__37438;
chunk__36703_37418 = G__37439;
count__36704_37419 = G__37440;
i__36705_37420 = G__37441;
continue;
} else {
var G__37442 = cljs.core.next(seq__36701_37431__$1);
var G__37443 = null;
var G__37444 = (0);
var G__37445 = (0);
seq__36701_37417 = G__37442;
chunk__36703_37418 = G__37443;
count__36704_37419 = G__37444;
i__36705_37420 = G__37445;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37416);
}


var G__37446 = seq__36648_37411;
var G__37447 = chunk__36649_37412;
var G__37448 = count__36650_37413;
var G__37449 = (i__36651_37414 + (1));
seq__36648_37411 = G__37446;
chunk__36649_37412 = G__37447;
count__36650_37413 = G__37448;
i__36651_37414 = G__37449;
continue;
} else {
var temp__5804__auto___37450 = cljs.core.seq(seq__36648_37411);
if(temp__5804__auto___37450){
var seq__36648_37456__$1 = temp__5804__auto___37450;
if(cljs.core.chunked_seq_QMARK_(seq__36648_37456__$1)){
var c__5568__auto___37458 = cljs.core.chunk_first(seq__36648_37456__$1);
var G__37459 = cljs.core.chunk_rest(seq__36648_37456__$1);
var G__37460 = c__5568__auto___37458;
var G__37461 = cljs.core.count(c__5568__auto___37458);
var G__37462 = (0);
seq__36648_37411 = G__37459;
chunk__36649_37412 = G__37460;
count__36650_37413 = G__37461;
i__36651_37414 = G__37462;
continue;
} else {
var child_struct_37463 = cljs.core.first(seq__36648_37456__$1);
var children_37464 = shadow.dom.dom_node(child_struct_37463);
if(cljs.core.seq_QMARK_(children_37464)){
var seq__36737_37465 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37464));
var chunk__36739_37466 = null;
var count__36740_37467 = (0);
var i__36741_37468 = (0);
while(true){
if((i__36741_37468 < count__36740_37467)){
var child_37469 = chunk__36739_37466.cljs$core$IIndexed$_nth$arity$2(null,i__36741_37468);
if(cljs.core.truth_(child_37469)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37469);


var G__37470 = seq__36737_37465;
var G__37471 = chunk__36739_37466;
var G__37472 = count__36740_37467;
var G__37473 = (i__36741_37468 + (1));
seq__36737_37465 = G__37470;
chunk__36739_37466 = G__37471;
count__36740_37467 = G__37472;
i__36741_37468 = G__37473;
continue;
} else {
var G__37474 = seq__36737_37465;
var G__37475 = chunk__36739_37466;
var G__37476 = count__36740_37467;
var G__37477 = (i__36741_37468 + (1));
seq__36737_37465 = G__37474;
chunk__36739_37466 = G__37475;
count__36740_37467 = G__37476;
i__36741_37468 = G__37477;
continue;
}
} else {
var temp__5804__auto___37478__$1 = cljs.core.seq(seq__36737_37465);
if(temp__5804__auto___37478__$1){
var seq__36737_37479__$1 = temp__5804__auto___37478__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36737_37479__$1)){
var c__5568__auto___37480 = cljs.core.chunk_first(seq__36737_37479__$1);
var G__37481 = cljs.core.chunk_rest(seq__36737_37479__$1);
var G__37482 = c__5568__auto___37480;
var G__37483 = cljs.core.count(c__5568__auto___37480);
var G__37484 = (0);
seq__36737_37465 = G__37481;
chunk__36739_37466 = G__37482;
count__36740_37467 = G__37483;
i__36741_37468 = G__37484;
continue;
} else {
var child_37485 = cljs.core.first(seq__36737_37479__$1);
if(cljs.core.truth_(child_37485)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37485);


var G__37486 = cljs.core.next(seq__36737_37479__$1);
var G__37487 = null;
var G__37488 = (0);
var G__37489 = (0);
seq__36737_37465 = G__37486;
chunk__36739_37466 = G__37487;
count__36740_37467 = G__37488;
i__36741_37468 = G__37489;
continue;
} else {
var G__37490 = cljs.core.next(seq__36737_37479__$1);
var G__37491 = null;
var G__37492 = (0);
var G__37493 = (0);
seq__36737_37465 = G__37490;
chunk__36739_37466 = G__37491;
count__36740_37467 = G__37492;
i__36741_37468 = G__37493;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37464);
}


var G__37494 = cljs.core.next(seq__36648_37456__$1);
var G__37495 = null;
var G__37496 = (0);
var G__37497 = (0);
seq__36648_37411 = G__37494;
chunk__36649_37412 = G__37495;
count__36650_37413 = G__37496;
i__36651_37414 = G__37497;
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
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__36767 = cljs.core.seq(node);
var chunk__36768 = null;
var count__36769 = (0);
var i__36770 = (0);
while(true){
if((i__36770 < count__36769)){
var n = chunk__36768.cljs$core$IIndexed$_nth$arity$2(null,i__36770);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37502 = seq__36767;
var G__37503 = chunk__36768;
var G__37504 = count__36769;
var G__37505 = (i__36770 + (1));
seq__36767 = G__37502;
chunk__36768 = G__37503;
count__36769 = G__37504;
i__36770 = G__37505;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36767);
if(temp__5804__auto__){
var seq__36767__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36767__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36767__$1);
var G__37506 = cljs.core.chunk_rest(seq__36767__$1);
var G__37507 = c__5568__auto__;
var G__37508 = cljs.core.count(c__5568__auto__);
var G__37509 = (0);
seq__36767 = G__37506;
chunk__36768 = G__37507;
count__36769 = G__37508;
i__36770 = G__37509;
continue;
} else {
var n = cljs.core.first(seq__36767__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37518 = cljs.core.next(seq__36767__$1);
var G__37519 = null;
var G__37520 = (0);
var G__37521 = (0);
seq__36767 = G__37518;
chunk__36768 = G__37519;
count__36769 = G__37520;
i__36770 = G__37521;
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
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__36785 = arguments.length;
switch (G__36785) {
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
var G__36794 = arguments.length;
switch (G__36794) {
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
var G__36796 = arguments.length;
switch (G__36796) {
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
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
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
var args__5775__auto__ = [];
var len__5769__auto___37527 = arguments.length;
var i__5770__auto___37528 = (0);
while(true){
if((i__5770__auto___37528 < len__5769__auto___37527)){
args__5775__auto__.push((arguments[i__5770__auto___37528]));

var G__37529 = (i__5770__auto___37528 + (1));
i__5770__auto___37528 = G__37529;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__36827_37530 = cljs.core.seq(nodes);
var chunk__36828_37531 = null;
var count__36829_37532 = (0);
var i__36830_37533 = (0);
while(true){
if((i__36830_37533 < count__36829_37532)){
var node_37534 = chunk__36828_37531.cljs$core$IIndexed$_nth$arity$2(null,i__36830_37533);
fragment.appendChild(shadow.dom._to_dom(node_37534));


var G__37535 = seq__36827_37530;
var G__37536 = chunk__36828_37531;
var G__37537 = count__36829_37532;
var G__37538 = (i__36830_37533 + (1));
seq__36827_37530 = G__37535;
chunk__36828_37531 = G__37536;
count__36829_37532 = G__37537;
i__36830_37533 = G__37538;
continue;
} else {
var temp__5804__auto___37539 = cljs.core.seq(seq__36827_37530);
if(temp__5804__auto___37539){
var seq__36827_37540__$1 = temp__5804__auto___37539;
if(cljs.core.chunked_seq_QMARK_(seq__36827_37540__$1)){
var c__5568__auto___37541 = cljs.core.chunk_first(seq__36827_37540__$1);
var G__37542 = cljs.core.chunk_rest(seq__36827_37540__$1);
var G__37543 = c__5568__auto___37541;
var G__37544 = cljs.core.count(c__5568__auto___37541);
var G__37545 = (0);
seq__36827_37530 = G__37542;
chunk__36828_37531 = G__37543;
count__36829_37532 = G__37544;
i__36830_37533 = G__37545;
continue;
} else {
var node_37546 = cljs.core.first(seq__36827_37540__$1);
fragment.appendChild(shadow.dom._to_dom(node_37546));


var G__37547 = cljs.core.next(seq__36827_37540__$1);
var G__37548 = null;
var G__37549 = (0);
var G__37550 = (0);
seq__36827_37530 = G__37547;
chunk__36828_37531 = G__37548;
count__36829_37532 = G__37549;
i__36830_37533 = G__37550;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq36816){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36816));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__36840_37552 = cljs.core.seq(scripts);
var chunk__36841_37553 = null;
var count__36842_37554 = (0);
var i__36843_37555 = (0);
while(true){
if((i__36843_37555 < count__36842_37554)){
var vec__36852_37556 = chunk__36841_37553.cljs$core$IIndexed$_nth$arity$2(null,i__36843_37555);
var script_tag_37557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36852_37556,(0),null);
var script_body_37558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36852_37556,(1),null);
eval(script_body_37558);


var G__37560 = seq__36840_37552;
var G__37561 = chunk__36841_37553;
var G__37562 = count__36842_37554;
var G__37563 = (i__36843_37555 + (1));
seq__36840_37552 = G__37560;
chunk__36841_37553 = G__37561;
count__36842_37554 = G__37562;
i__36843_37555 = G__37563;
continue;
} else {
var temp__5804__auto___37564 = cljs.core.seq(seq__36840_37552);
if(temp__5804__auto___37564){
var seq__36840_37565__$1 = temp__5804__auto___37564;
if(cljs.core.chunked_seq_QMARK_(seq__36840_37565__$1)){
var c__5568__auto___37568 = cljs.core.chunk_first(seq__36840_37565__$1);
var G__37569 = cljs.core.chunk_rest(seq__36840_37565__$1);
var G__37570 = c__5568__auto___37568;
var G__37571 = cljs.core.count(c__5568__auto___37568);
var G__37572 = (0);
seq__36840_37552 = G__37569;
chunk__36841_37553 = G__37570;
count__36842_37554 = G__37571;
i__36843_37555 = G__37572;
continue;
} else {
var vec__36861_37574 = cljs.core.first(seq__36840_37565__$1);
var script_tag_37575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36861_37574,(0),null);
var script_body_37576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36861_37574,(1),null);
eval(script_body_37576);


var G__37577 = cljs.core.next(seq__36840_37565__$1);
var G__37578 = null;
var G__37579 = (0);
var G__37580 = (0);
seq__36840_37552 = G__37577;
chunk__36841_37553 = G__37578;
count__36842_37554 = G__37579;
i__36843_37555 = G__37580;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__36875){
var vec__36877 = p__36875;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36877,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36877,(1),null);
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
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__36913 = arguments.length;
switch (G__36913) {
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
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
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
var seq__36945 = cljs.core.seq(style_keys);
var chunk__36946 = null;
var count__36947 = (0);
var i__36948 = (0);
while(true){
if((i__36948 < count__36947)){
var it = chunk__36946.cljs$core$IIndexed$_nth$arity$2(null,i__36948);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37600 = seq__36945;
var G__37601 = chunk__36946;
var G__37602 = count__36947;
var G__37603 = (i__36948 + (1));
seq__36945 = G__37600;
chunk__36946 = G__37601;
count__36947 = G__37602;
i__36948 = G__37603;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36945);
if(temp__5804__auto__){
var seq__36945__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36945__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36945__$1);
var G__37604 = cljs.core.chunk_rest(seq__36945__$1);
var G__37605 = c__5568__auto__;
var G__37606 = cljs.core.count(c__5568__auto__);
var G__37607 = (0);
seq__36945 = G__37604;
chunk__36946 = G__37605;
count__36947 = G__37606;
i__36948 = G__37607;
continue;
} else {
var it = cljs.core.first(seq__36945__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37608 = cljs.core.next(seq__36945__$1);
var G__37609 = null;
var G__37610 = (0);
var G__37611 = (0);
seq__36945 = G__37608;
chunk__36946 = G__37609;
count__36947 = G__37610;
i__36948 = G__37611;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k36962,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__36979 = k36962;
var G__36979__$1 = (((G__36979 instanceof cljs.core.Keyword))?G__36979.fqn:null);
switch (G__36979__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36962,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__36988){
var vec__36989 = p__36988;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36989,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36989,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36961){
var self__ = this;
var G__36961__$1 = this;
return (new cljs.core.RecordIter((0),G__36961__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36963,other36964){
var self__ = this;
var this36963__$1 = this;
return (((!((other36964 == null)))) && ((((this36963__$1.constructor === other36964.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36963__$1.x,other36964.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36963__$1.y,other36964.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36963__$1.__extmap,other36964.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k36962){
var self__ = this;
var this__5350__auto____$1 = this;
var G__37035 = k36962;
var G__37035__$1 = (((G__37035 instanceof cljs.core.Keyword))?G__37035.fqn:null);
switch (G__37035__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36962);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__36961){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__37054 = cljs.core.keyword_identical_QMARK_;
var expr__37055 = k__5352__auto__;
if(cljs.core.truth_((pred__37054.cljs$core$IFn$_invoke$arity$2 ? pred__37054.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__37055) : pred__37054.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__37055)))){
return (new shadow.dom.Coordinate(G__36961,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37054.cljs$core$IFn$_invoke$arity$2 ? pred__37054.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__37055) : pred__37054.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__37055)))){
return (new shadow.dom.Coordinate(self__.x,G__36961,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__36961),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__36961){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__36961,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__36966){
var extmap__5385__auto__ = (function (){var G__37068 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36966,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__36966)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37068);
} else {
return G__37068;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__36966),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__36966),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k37081,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__37085 = k37081;
var G__37085__$1 = (((G__37085 instanceof cljs.core.Keyword))?G__37085.fqn:null);
switch (G__37085__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37081,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__37092){
var vec__37095 = p__37092;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37095,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37095,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37080){
var self__ = this;
var G__37080__$1 = this;
return (new cljs.core.RecordIter((0),G__37080__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37082,other37083){
var self__ = this;
var this37082__$1 = this;
return (((!((other37083 == null)))) && ((((this37082__$1.constructor === other37083.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37082__$1.w,other37083.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37082__$1.h,other37083.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37082__$1.__extmap,other37083.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k37081){
var self__ = this;
var this__5350__auto____$1 = this;
var G__37136 = k37081;
var G__37136__$1 = (((G__37136 instanceof cljs.core.Keyword))?G__37136.fqn:null);
switch (G__37136__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37081);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__37080){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__37140 = cljs.core.keyword_identical_QMARK_;
var expr__37141 = k__5352__auto__;
if(cljs.core.truth_((pred__37140.cljs$core$IFn$_invoke$arity$2 ? pred__37140.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__37141) : pred__37140.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__37141)))){
return (new shadow.dom.Size(G__37080,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37140.cljs$core$IFn$_invoke$arity$2 ? pred__37140.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__37141) : pred__37140.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__37141)))){
return (new shadow.dom.Size(self__.w,G__37080,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__37080),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__37080){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__37080,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__37084){
var extmap__5385__auto__ = (function (){var G__37155 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37084,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__37084)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37155);
} else {
return G__37155;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__37084),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__37084),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
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
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__37628 = (i + (1));
var G__37629 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__37628;
ret = G__37629;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37177){
var vec__37178 = p__37177;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37178,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37178,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__37182 = arguments.length;
switch (G__37182) {
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
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
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
var G__37634 = ps;
var G__37635 = (i + (1));
el__$1 = G__37634;
i = G__37635;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
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
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__37207 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37207,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37207,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37207,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__37210_37636 = cljs.core.seq(props);
var chunk__37211_37637 = null;
var count__37212_37638 = (0);
var i__37213_37639 = (0);
while(true){
if((i__37213_37639 < count__37212_37638)){
var vec__37220_37640 = chunk__37211_37637.cljs$core$IIndexed$_nth$arity$2(null,i__37213_37639);
var k_37641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37220_37640,(0),null);
var v_37642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37220_37640,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_37641);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37641),v_37642);


var G__37643 = seq__37210_37636;
var G__37644 = chunk__37211_37637;
var G__37645 = count__37212_37638;
var G__37646 = (i__37213_37639 + (1));
seq__37210_37636 = G__37643;
chunk__37211_37637 = G__37644;
count__37212_37638 = G__37645;
i__37213_37639 = G__37646;
continue;
} else {
var temp__5804__auto___37647 = cljs.core.seq(seq__37210_37636);
if(temp__5804__auto___37647){
var seq__37210_37648__$1 = temp__5804__auto___37647;
if(cljs.core.chunked_seq_QMARK_(seq__37210_37648__$1)){
var c__5568__auto___37649 = cljs.core.chunk_first(seq__37210_37648__$1);
var G__37650 = cljs.core.chunk_rest(seq__37210_37648__$1);
var G__37651 = c__5568__auto___37649;
var G__37652 = cljs.core.count(c__5568__auto___37649);
var G__37653 = (0);
seq__37210_37636 = G__37650;
chunk__37211_37637 = G__37651;
count__37212_37638 = G__37652;
i__37213_37639 = G__37653;
continue;
} else {
var vec__37223_37654 = cljs.core.first(seq__37210_37648__$1);
var k_37655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37223_37654,(0),null);
var v_37656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37223_37654,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_37655);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37655),v_37656);


var G__37657 = cljs.core.next(seq__37210_37648__$1);
var G__37658 = null;
var G__37659 = (0);
var G__37660 = (0);
seq__37210_37636 = G__37657;
chunk__37211_37637 = G__37658;
count__37212_37638 = G__37659;
i__37213_37639 = G__37660;
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
var vec__37248 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37248,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37248,(1),null);
var seq__37251_37661 = cljs.core.seq(node_children);
var chunk__37253_37662 = null;
var count__37254_37663 = (0);
var i__37255_37664 = (0);
while(true){
if((i__37255_37664 < count__37254_37663)){
var child_struct_37665 = chunk__37253_37662.cljs$core$IIndexed$_nth$arity$2(null,i__37255_37664);
if((!((child_struct_37665 == null)))){
if(typeof child_struct_37665 === 'string'){
var text_37666 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37666),child_struct_37665].join(''));
} else {
var children_37667 = shadow.dom.svg_node(child_struct_37665);
if(cljs.core.seq_QMARK_(children_37667)){
var seq__37274_37668 = cljs.core.seq(children_37667);
var chunk__37276_37669 = null;
var count__37277_37670 = (0);
var i__37278_37671 = (0);
while(true){
if((i__37278_37671 < count__37277_37670)){
var child_37672 = chunk__37276_37669.cljs$core$IIndexed$_nth$arity$2(null,i__37278_37671);
if(cljs.core.truth_(child_37672)){
node.appendChild(child_37672);


var G__37673 = seq__37274_37668;
var G__37674 = chunk__37276_37669;
var G__37675 = count__37277_37670;
var G__37676 = (i__37278_37671 + (1));
seq__37274_37668 = G__37673;
chunk__37276_37669 = G__37674;
count__37277_37670 = G__37675;
i__37278_37671 = G__37676;
continue;
} else {
var G__37677 = seq__37274_37668;
var G__37678 = chunk__37276_37669;
var G__37679 = count__37277_37670;
var G__37680 = (i__37278_37671 + (1));
seq__37274_37668 = G__37677;
chunk__37276_37669 = G__37678;
count__37277_37670 = G__37679;
i__37278_37671 = G__37680;
continue;
}
} else {
var temp__5804__auto___37681 = cljs.core.seq(seq__37274_37668);
if(temp__5804__auto___37681){
var seq__37274_37682__$1 = temp__5804__auto___37681;
if(cljs.core.chunked_seq_QMARK_(seq__37274_37682__$1)){
var c__5568__auto___37683 = cljs.core.chunk_first(seq__37274_37682__$1);
var G__37684 = cljs.core.chunk_rest(seq__37274_37682__$1);
var G__37685 = c__5568__auto___37683;
var G__37686 = cljs.core.count(c__5568__auto___37683);
var G__37687 = (0);
seq__37274_37668 = G__37684;
chunk__37276_37669 = G__37685;
count__37277_37670 = G__37686;
i__37278_37671 = G__37687;
continue;
} else {
var child_37688 = cljs.core.first(seq__37274_37682__$1);
if(cljs.core.truth_(child_37688)){
node.appendChild(child_37688);


var G__37689 = cljs.core.next(seq__37274_37682__$1);
var G__37690 = null;
var G__37691 = (0);
var G__37692 = (0);
seq__37274_37668 = G__37689;
chunk__37276_37669 = G__37690;
count__37277_37670 = G__37691;
i__37278_37671 = G__37692;
continue;
} else {
var G__37693 = cljs.core.next(seq__37274_37682__$1);
var G__37694 = null;
var G__37695 = (0);
var G__37696 = (0);
seq__37274_37668 = G__37693;
chunk__37276_37669 = G__37694;
count__37277_37670 = G__37695;
i__37278_37671 = G__37696;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37667);
}
}


var G__37697 = seq__37251_37661;
var G__37698 = chunk__37253_37662;
var G__37699 = count__37254_37663;
var G__37700 = (i__37255_37664 + (1));
seq__37251_37661 = G__37697;
chunk__37253_37662 = G__37698;
count__37254_37663 = G__37699;
i__37255_37664 = G__37700;
continue;
} else {
var G__37701 = seq__37251_37661;
var G__37702 = chunk__37253_37662;
var G__37703 = count__37254_37663;
var G__37704 = (i__37255_37664 + (1));
seq__37251_37661 = G__37701;
chunk__37253_37662 = G__37702;
count__37254_37663 = G__37703;
i__37255_37664 = G__37704;
continue;
}
} else {
var temp__5804__auto___37705 = cljs.core.seq(seq__37251_37661);
if(temp__5804__auto___37705){
var seq__37251_37706__$1 = temp__5804__auto___37705;
if(cljs.core.chunked_seq_QMARK_(seq__37251_37706__$1)){
var c__5568__auto___37707 = cljs.core.chunk_first(seq__37251_37706__$1);
var G__37708 = cljs.core.chunk_rest(seq__37251_37706__$1);
var G__37709 = c__5568__auto___37707;
var G__37710 = cljs.core.count(c__5568__auto___37707);
var G__37711 = (0);
seq__37251_37661 = G__37708;
chunk__37253_37662 = G__37709;
count__37254_37663 = G__37710;
i__37255_37664 = G__37711;
continue;
} else {
var child_struct_37712 = cljs.core.first(seq__37251_37706__$1);
if((!((child_struct_37712 == null)))){
if(typeof child_struct_37712 === 'string'){
var text_37713 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37713),child_struct_37712].join(''));
} else {
var children_37714 = shadow.dom.svg_node(child_struct_37712);
if(cljs.core.seq_QMARK_(children_37714)){
var seq__37281_37715 = cljs.core.seq(children_37714);
var chunk__37283_37716 = null;
var count__37284_37717 = (0);
var i__37285_37718 = (0);
while(true){
if((i__37285_37718 < count__37284_37717)){
var child_37719 = chunk__37283_37716.cljs$core$IIndexed$_nth$arity$2(null,i__37285_37718);
if(cljs.core.truth_(child_37719)){
node.appendChild(child_37719);


var G__37720 = seq__37281_37715;
var G__37721 = chunk__37283_37716;
var G__37722 = count__37284_37717;
var G__37723 = (i__37285_37718 + (1));
seq__37281_37715 = G__37720;
chunk__37283_37716 = G__37721;
count__37284_37717 = G__37722;
i__37285_37718 = G__37723;
continue;
} else {
var G__37724 = seq__37281_37715;
var G__37725 = chunk__37283_37716;
var G__37726 = count__37284_37717;
var G__37727 = (i__37285_37718 + (1));
seq__37281_37715 = G__37724;
chunk__37283_37716 = G__37725;
count__37284_37717 = G__37726;
i__37285_37718 = G__37727;
continue;
}
} else {
var temp__5804__auto___37728__$1 = cljs.core.seq(seq__37281_37715);
if(temp__5804__auto___37728__$1){
var seq__37281_37729__$1 = temp__5804__auto___37728__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37281_37729__$1)){
var c__5568__auto___37730 = cljs.core.chunk_first(seq__37281_37729__$1);
var G__37731 = cljs.core.chunk_rest(seq__37281_37729__$1);
var G__37732 = c__5568__auto___37730;
var G__37733 = cljs.core.count(c__5568__auto___37730);
var G__37734 = (0);
seq__37281_37715 = G__37731;
chunk__37283_37716 = G__37732;
count__37284_37717 = G__37733;
i__37285_37718 = G__37734;
continue;
} else {
var child_37735 = cljs.core.first(seq__37281_37729__$1);
if(cljs.core.truth_(child_37735)){
node.appendChild(child_37735);


var G__37736 = cljs.core.next(seq__37281_37729__$1);
var G__37737 = null;
var G__37738 = (0);
var G__37739 = (0);
seq__37281_37715 = G__37736;
chunk__37283_37716 = G__37737;
count__37284_37717 = G__37738;
i__37285_37718 = G__37739;
continue;
} else {
var G__37740 = cljs.core.next(seq__37281_37729__$1);
var G__37741 = null;
var G__37742 = (0);
var G__37743 = (0);
seq__37281_37715 = G__37740;
chunk__37283_37716 = G__37741;
count__37284_37717 = G__37742;
i__37285_37718 = G__37743;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37714);
}
}


var G__37744 = cljs.core.next(seq__37251_37706__$1);
var G__37745 = null;
var G__37746 = (0);
var G__37747 = (0);
seq__37251_37661 = G__37744;
chunk__37253_37662 = G__37745;
count__37254_37663 = G__37746;
i__37255_37664 = G__37747;
continue;
} else {
var G__37748 = cljs.core.next(seq__37251_37706__$1);
var G__37749 = null;
var G__37750 = (0);
var G__37751 = (0);
seq__37251_37661 = G__37748;
chunk__37253_37662 = G__37749;
count__37254_37663 = G__37750;
i__37255_37664 = G__37751;
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
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

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

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37752 = arguments.length;
var i__5770__auto___37753 = (0);
while(true){
if((i__5770__auto___37753 < len__5769__auto___37752)){
args__5775__auto__.push((arguments[i__5770__auto___37753]));

var G__37754 = (i__5770__auto___37753 + (1));
i__5770__auto___37753 = G__37754;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq37292){
var G__37293 = cljs.core.first(seq37292);
var seq37292__$1 = cljs.core.next(seq37292);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37293,seq37292__$1);
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
var G__37295 = arguments.length;
switch (G__37295) {
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
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__33547__auto___37756 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33548__auto__ = (function (){var switch__33408__auto__ = (function (state_37308){
var state_val_37309 = (state_37308[(1)]);
if((state_val_37309 === (1))){
var state_37308__$1 = state_37308;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37308__$1,(2),once_or_cleanup);
} else {
if((state_val_37309 === (2))){
var inst_37305 = (state_37308[(2)]);
var inst_37306 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_37308__$1 = (function (){var statearr_37312 = state_37308;
(statearr_37312[(7)] = inst_37305);

return statearr_37312;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37308__$1,inst_37306);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33409__auto__ = null;
var shadow$dom$state_machine__33409__auto____0 = (function (){
var statearr_37313 = [null,null,null,null,null,null,null,null];
(statearr_37313[(0)] = shadow$dom$state_machine__33409__auto__);

(statearr_37313[(1)] = (1));

return statearr_37313;
});
var shadow$dom$state_machine__33409__auto____1 = (function (state_37308){
while(true){
var ret_value__33410__auto__ = (function (){try{while(true){
var result__33411__auto__ = switch__33408__auto__(state_37308);
if(cljs.core.keyword_identical_QMARK_(result__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33411__auto__;
}
break;
}
}catch (e37314){var ex__33412__auto__ = e37314;
var statearr_37315_37760 = state_37308;
(statearr_37315_37760[(2)] = ex__33412__auto__);


if(cljs.core.seq((state_37308[(4)]))){
var statearr_37316_37761 = state_37308;
(statearr_37316_37761[(1)] = cljs.core.first((state_37308[(4)])));

} else {
throw ex__33412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37762 = state_37308;
state_37308 = G__37762;
continue;
} else {
return ret_value__33410__auto__;
}
break;
}
});
shadow$dom$state_machine__33409__auto__ = function(state_37308){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33409__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33409__auto____1.call(this,state_37308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33409__auto____0;
shadow$dom$state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33409__auto____1;
return shadow$dom$state_machine__33409__auto__;
})()
})();
var state__33549__auto__ = (function (){var statearr_37319 = f__33548__auto__();
(statearr_37319[(6)] = c__33547__auto___37756);

return statearr_37319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33549__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
