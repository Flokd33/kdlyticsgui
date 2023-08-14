goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33606 = (function (f,blockable,meta33607){
this.f = f;
this.blockable = blockable;
this.meta33607 = meta33607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33608,meta33607__$1){
var self__ = this;
var _33608__$1 = this;
return (new cljs.core.async.t_cljs$core$async33606(self__.f,self__.blockable,meta33607__$1));
}));

(cljs.core.async.t_cljs$core$async33606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33608){
var self__ = this;
var _33608__$1 = this;
return self__.meta33607;
}));

(cljs.core.async.t_cljs$core$async33606.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33606.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33606.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33606.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33606.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33607","meta33607",924142241,null)], null);
}));

(cljs.core.async.t_cljs$core$async33606.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33606.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33606");

(cljs.core.async.t_cljs$core$async33606.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33606");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33606.
 */
cljs.core.async.__GT_t_cljs$core$async33606 = (function cljs$core$async$__GT_t_cljs$core$async33606(f,blockable,meta33607){
return (new cljs.core.async.t_cljs$core$async33606(f,blockable,meta33607));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33605 = arguments.length;
switch (G__33605) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async33606(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33615 = arguments.length;
switch (G__33615) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33619 = arguments.length;
switch (G__33619) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33627 = arguments.length;
switch (G__33627) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_36098 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36098) : fn1.call(null,val_36098));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36098) : fn1.call(null,val_36098));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33631 = arguments.length;
switch (G__33631) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___36106 = n;
var x_36107 = (0);
while(true){
if((x_36107 < n__5636__auto___36106)){
(a[x_36107] = x_36107);

var G__36108 = (x_36107 + (1));
x_36107 = G__36108;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33664 = (function (flag,meta33665){
this.flag = flag;
this.meta33665 = meta33665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33666,meta33665__$1){
var self__ = this;
var _33666__$1 = this;
return (new cljs.core.async.t_cljs$core$async33664(self__.flag,meta33665__$1));
}));

(cljs.core.async.t_cljs$core$async33664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33666){
var self__ = this;
var _33666__$1 = this;
return self__.meta33665;
}));

(cljs.core.async.t_cljs$core$async33664.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33664.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33664.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33664.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33664.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33665","meta33665",-1025670817,null)], null);
}));

(cljs.core.async.t_cljs$core$async33664.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33664.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33664");

(cljs.core.async.t_cljs$core$async33664.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33664");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33664.
 */
cljs.core.async.__GT_t_cljs$core$async33664 = (function cljs$core$async$__GT_t_cljs$core$async33664(flag,meta33665){
return (new cljs.core.async.t_cljs$core$async33664(flag,meta33665));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async33664(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33884 = (function (flag,cb,meta33885){
this.flag = flag;
this.cb = cb;
this.meta33885 = meta33885;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33886,meta33885__$1){
var self__ = this;
var _33886__$1 = this;
return (new cljs.core.async.t_cljs$core$async33884(self__.flag,self__.cb,meta33885__$1));
}));

(cljs.core.async.t_cljs$core$async33884.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33886){
var self__ = this;
var _33886__$1 = this;
return self__.meta33885;
}));

(cljs.core.async.t_cljs$core$async33884.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33884.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33884.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33884.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33884.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33885","meta33885",1780550340,null)], null);
}));

(cljs.core.async.t_cljs$core$async33884.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33884.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33884");

(cljs.core.async.t_cljs$core$async33884.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33884");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33884.
 */
cljs.core.async.__GT_t_cljs$core$async33884 = (function cljs$core$async$__GT_t_cljs$core$async33884(flag,cb,meta33885){
return (new cljs.core.async.t_cljs$core$async33884(flag,cb,meta33885));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async33884(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33887_SHARP_){
var G__33889 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33887_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33889) : fret.call(null,G__33889));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33888_SHARP_){
var G__33890 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33888_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33890) : fret.call(null,G__33890));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36112 = (i + (1));
i = G__36112;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36114 = arguments.length;
var i__5770__auto___36115 = (0);
while(true){
if((i__5770__auto___36115 < len__5769__auto___36114)){
args__5775__auto__.push((arguments[i__5770__auto___36115]));

var G__36116 = (i__5770__auto___36115 + (1));
i__5770__auto___36115 = G__36116;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33893){
var map__33894 = p__33893;
var map__33894__$1 = cljs.core.__destructure_map(map__33894);
var opts = map__33894__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33891){
var G__33892 = cljs.core.first(seq33891);
var seq33891__$1 = cljs.core.next(seq33891);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33892,seq33891__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33897 = arguments.length;
switch (G__33897) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33547__auto___36120 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33548__auto__ = (function (){var switch__33408__auto__ = (function (state_33922){
var state_val_33923 = (state_33922[(1)]);
if((state_val_33923 === (7))){
var inst_33918 = (state_33922[(2)]);
var state_33922__$1 = state_33922;
var statearr_33925_36121 = state_33922__$1;
(statearr_33925_36121[(2)] = inst_33918);

(statearr_33925_36121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33923 === (1))){
var state_33922__$1 = state_33922;
var statearr_33926_36122 = state_33922__$1;
(statearr_33926_36122[(2)] = null);

(statearr_33926_36122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33923 === (4))){
var inst_33900 = (state_33922[(7)]);
var inst_33900__$1 = (state_33922[(2)]);
var inst_33901 = (inst_33900__$1 == null);
var state_33922__$1 = (function (){var statearr_33927 = state_33922;
(statearr_33927[(7)] = inst_33900__$1);

return statearr_33927;
})();
if(cljs.core.truth_(inst_33901)){
var statearr_33928_36123 = state_33922__$1;
(statearr_33928_36123[(1)] = (5));

} else {
var statearr_33935_36128 = state_33922__$1;
(statearr_33935_36128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33923 === (13))){
var state_33922__$1 = state_33922;
var statearr_33936_36129 = state_33922__$1;
(statearr_33936_36129[(2)] = null);

(statearr_33936_36129[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33923 === (6))){
var inst_33900 = (state_33922[(7)]);
var state_33922__$1 = state_33922;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33922__$1,(11),to,inst_33900);
} else {
if((state_val_33923 === (3))){
var inst_33920 = (state_33922[(2)]);
var state_33922__$1 = state_33922;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33922__$1,inst_33920);
} else {
if((state_val_33923 === (12))){
var state_33922__$1 = state_33922;
var statearr_33937_36143 = state_33922__$1;
(statearr_33937_36143[(2)] = null);

(statearr_33937_36143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33923 === (2))){
var state_33922__$1 = state_33922;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33922__$1,(4),from);
} else {
if((state_val_33923 === (11))){
var inst_33910 = (state_33922[(2)]);
var state_33922__$1 = state_33922;
if(cljs.core.truth_(inst_33910)){
var statearr_33938_36145 = state_33922__$1;
(statearr_33938_36145[(1)] = (12));

} else {
var statearr_33939_36146 = state_33922__$1;
(statearr_33939_36146[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33923 === (9))){
var state_33922__$1 = state_33922;
var statearr_33940_36148 = state_33922__$1;
(statearr_33940_36148[(2)] = null);

(statearr_33940_36148[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33923 === (5))){
var state_33922__$1 = state_33922;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33941_36153 = state_33922__$1;
(statearr_33941_36153[(1)] = (8));

} else {
var statearr_33942_36154 = state_33922__$1;
(statearr_33942_36154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33923 === (14))){
var inst_33916 = (state_33922[(2)]);
var state_33922__$1 = state_33922;
var statearr_33943_36155 = state_33922__$1;
(statearr_33943_36155[(2)] = inst_33916);

(statearr_33943_36155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33923 === (10))){
var inst_33907 = (state_33922[(2)]);
var state_33922__$1 = state_33922;
var statearr_33944_36159 = state_33922__$1;
(statearr_33944_36159[(2)] = inst_33907);

(statearr_33944_36159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33923 === (8))){
var inst_33904 = cljs.core.async.close_BANG_(to);
var state_33922__$1 = state_33922;
var statearr_33945_36165 = state_33922__$1;
(statearr_33945_36165[(2)] = inst_33904);

(statearr_33945_36165[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__33409__auto__ = null;
var cljs$core$async$state_machine__33409__auto____0 = (function (){
var statearr_33946 = [null,null,null,null,null,null,null,null];
(statearr_33946[(0)] = cljs$core$async$state_machine__33409__auto__);

(statearr_33946[(1)] = (1));

return statearr_33946;
});
var cljs$core$async$state_machine__33409__auto____1 = (function (state_33922){
while(true){
var ret_value__33410__auto__ = (function (){try{while(true){
var result__33411__auto__ = switch__33408__auto__(state_33922);
if(cljs.core.keyword_identical_QMARK_(result__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33411__auto__;
}
break;
}
}catch (e33947){var ex__33412__auto__ = e33947;
var statearr_33948_36177 = state_33922;
(statearr_33948_36177[(2)] = ex__33412__auto__);


if(cljs.core.seq((state_33922[(4)]))){
var statearr_33949_36178 = state_33922;
(statearr_33949_36178[(1)] = cljs.core.first((state_33922[(4)])));

} else {
throw ex__33412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36183 = state_33922;
state_33922 = G__36183;
continue;
} else {
return ret_value__33410__auto__;
}
break;
}
});
cljs$core$async$state_machine__33409__auto__ = function(state_33922){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33409__auto____1.call(this,state_33922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33409__auto____0;
cljs$core$async$state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33409__auto____1;
return cljs$core$async$state_machine__33409__auto__;
})()
})();
var state__33549__auto__ = (function (){var statearr_33951 = f__33548__auto__();
(statearr_33951[(6)] = c__33547__auto___36120);

return statearr_33951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33549__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__33953){
var vec__33954 = p__33953;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33954,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33954,(1),null);
var job = vec__33954;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33547__auto___36204 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33548__auto__ = (function (){var switch__33408__auto__ = (function (state_33961){
var state_val_33962 = (state_33961[(1)]);
if((state_val_33962 === (1))){
var state_33961__$1 = state_33961;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33961__$1,(2),res,v);
} else {
if((state_val_33962 === (2))){
var inst_33958 = (state_33961[(2)]);
var inst_33959 = cljs.core.async.close_BANG_(res);
var state_33961__$1 = (function (){var statearr_33964 = state_33961;
(statearr_33964[(7)] = inst_33958);

return statearr_33964;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33961__$1,inst_33959);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33409__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33409__auto____0 = (function (){
var statearr_33965 = [null,null,null,null,null,null,null,null];
(statearr_33965[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33409__auto__);

(statearr_33965[(1)] = (1));

return statearr_33965;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33409__auto____1 = (function (state_33961){
while(true){
var ret_value__33410__auto__ = (function (){try{while(true){
var result__33411__auto__ = switch__33408__auto__(state_33961);
if(cljs.core.keyword_identical_QMARK_(result__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33411__auto__;
}
break;
}
}catch (e33966){var ex__33412__auto__ = e33966;
var statearr_33967_36214 = state_33961;
(statearr_33967_36214[(2)] = ex__33412__auto__);


if(cljs.core.seq((state_33961[(4)]))){
var statearr_33968_36219 = state_33961;
(statearr_33968_36219[(1)] = cljs.core.first((state_33961[(4)])));

} else {
throw ex__33412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36223 = state_33961;
state_33961 = G__36223;
continue;
} else {
return ret_value__33410__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33409__auto__ = function(state_33961){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33409__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33409__auto____1.call(this,state_33961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33409__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33409__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33409__auto__;
})()
})();
var state__33549__auto__ = (function (){var statearr_33969 = f__33548__auto__();
(statearr_33969[(6)] = c__33547__auto___36204);

return statearr_33969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33549__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33970){
var vec__33971 = p__33970;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33971,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33971,(1),null);
var job = vec__33971;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___36239 = n;
var __36240 = (0);
while(true){
if((__36240 < n__5636__auto___36239)){
var G__33974_36241 = type;
var G__33974_36242__$1 = (((G__33974_36241 instanceof cljs.core.Keyword))?G__33974_36241.fqn:null);
switch (G__33974_36242__$1) {
case "compute":
var c__33547__auto___36244 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36240,c__33547__auto___36244,G__33974_36241,G__33974_36242__$1,n__5636__auto___36239,jobs,results,process__$1,async){
return (function (){
var f__33548__auto__ = (function (){var switch__33408__auto__ = ((function (__36240,c__33547__auto___36244,G__33974_36241,G__33974_36242__$1,n__5636__auto___36239,jobs,results,process__$1,async){
return (function (state_33988){
var state_val_33989 = (state_33988[(1)]);
if((state_val_33989 === (1))){
var state_33988__$1 = state_33988;
var statearr_33991_36251 = state_33988__$1;
(statearr_33991_36251[(2)] = null);

(statearr_33991_36251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33989 === (2))){
var state_33988__$1 = state_33988;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33988__$1,(4),jobs);
} else {
if((state_val_33989 === (3))){
var inst_33986 = (state_33988[(2)]);
var state_33988__$1 = state_33988;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33988__$1,inst_33986);
} else {
if((state_val_33989 === (4))){
var inst_33978 = (state_33988[(2)]);
var inst_33979 = process__$1(inst_33978);
var state_33988__$1 = state_33988;
if(cljs.core.truth_(inst_33979)){
var statearr_33992_36253 = state_33988__$1;
(statearr_33992_36253[(1)] = (5));

} else {
var statearr_33993_36254 = state_33988__$1;
(statearr_33993_36254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33989 === (5))){
var state_33988__$1 = state_33988;
var statearr_33994_36259 = state_33988__$1;
(statearr_33994_36259[(2)] = null);

(statearr_33994_36259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33989 === (6))){
var state_33988__$1 = state_33988;
var statearr_33995_36261 = state_33988__$1;
(statearr_33995_36261[(2)] = null);

(statearr_33995_36261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33989 === (7))){
var inst_33984 = (state_33988[(2)]);
var state_33988__$1 = state_33988;
var statearr_33996_36262 = state_33988__$1;
(statearr_33996_36262[(2)] = inst_33984);

(statearr_33996_36262[(1)] = (3));


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
});})(__36240,c__33547__auto___36244,G__33974_36241,G__33974_36242__$1,n__5636__auto___36239,jobs,results,process__$1,async))
;
return ((function (__36240,switch__33408__auto__,c__33547__auto___36244,G__33974_36241,G__33974_36242__$1,n__5636__auto___36239,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33409__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33409__auto____0 = (function (){
var statearr_33998 = [null,null,null,null,null,null,null];
(statearr_33998[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33409__auto__);

(statearr_33998[(1)] = (1));

return statearr_33998;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33409__auto____1 = (function (state_33988){
while(true){
var ret_value__33410__auto__ = (function (){try{while(true){
var result__33411__auto__ = switch__33408__auto__(state_33988);
if(cljs.core.keyword_identical_QMARK_(result__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33411__auto__;
}
break;
}
}catch (e33999){var ex__33412__auto__ = e33999;
var statearr_34000_36265 = state_33988;
(statearr_34000_36265[(2)] = ex__33412__auto__);


if(cljs.core.seq((state_33988[(4)]))){
var statearr_34001_36266 = state_33988;
(statearr_34001_36266[(1)] = cljs.core.first((state_33988[(4)])));

} else {
throw ex__33412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36267 = state_33988;
state_33988 = G__36267;
continue;
} else {
return ret_value__33410__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33409__auto__ = function(state_33988){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33409__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33409__auto____1.call(this,state_33988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33409__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33409__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33409__auto__;
})()
;})(__36240,switch__33408__auto__,c__33547__auto___36244,G__33974_36241,G__33974_36242__$1,n__5636__auto___36239,jobs,results,process__$1,async))
})();
var state__33549__auto__ = (function (){var statearr_34002 = f__33548__auto__();
(statearr_34002[(6)] = c__33547__auto___36244);

return statearr_34002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33549__auto__);
});})(__36240,c__33547__auto___36244,G__33974_36241,G__33974_36242__$1,n__5636__auto___36239,jobs,results,process__$1,async))
);


break;
case "async":
var c__33547__auto___36269 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36240,c__33547__auto___36269,G__33974_36241,G__33974_36242__$1,n__5636__auto___36239,jobs,results,process__$1,async){
return (function (){
var f__33548__auto__ = (function (){var switch__33408__auto__ = ((function (__36240,c__33547__auto___36269,G__33974_36241,G__33974_36242__$1,n__5636__auto___36239,jobs,results,process__$1,async){
return (function (state_34015){
var state_val_34016 = (state_34015[(1)]);
if((state_val_34016 === (1))){
var state_34015__$1 = state_34015;
var statearr_34018_36271 = state_34015__$1;
(statearr_34018_36271[(2)] = null);

(statearr_34018_36271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34016 === (2))){
var state_34015__$1 = state_34015;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34015__$1,(4),jobs);
} else {
if((state_val_34016 === (3))){
var inst_34013 = (state_34015[(2)]);
var state_34015__$1 = state_34015;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34015__$1,inst_34013);
} else {
if((state_val_34016 === (4))){
var inst_34005 = (state_34015[(2)]);
var inst_34006 = async(inst_34005);
var state_34015__$1 = state_34015;
if(cljs.core.truth_(inst_34006)){
var statearr_34019_36274 = state_34015__$1;
(statearr_34019_36274[(1)] = (5));

} else {
var statearr_34020_36275 = state_34015__$1;
(statearr_34020_36275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34016 === (5))){
var state_34015__$1 = state_34015;
var statearr_34021_36276 = state_34015__$1;
(statearr_34021_36276[(2)] = null);

(statearr_34021_36276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34016 === (6))){
var state_34015__$1 = state_34015;
var statearr_34022_36278 = state_34015__$1;
(statearr_34022_36278[(2)] = null);

(statearr_34022_36278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34016 === (7))){
var inst_34011 = (state_34015[(2)]);
var state_34015__$1 = state_34015;
var statearr_34023_36279 = state_34015__$1;
(statearr_34023_36279[(2)] = inst_34011);

(statearr_34023_36279[(1)] = (3));


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
});})(__36240,c__33547__auto___36269,G__33974_36241,G__33974_36242__$1,n__5636__auto___36239,jobs,results,process__$1,async))
;
return ((function (__36240,switch__33408__auto__,c__33547__auto___36269,G__33974_36241,G__33974_36242__$1,n__5636__auto___36239,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33409__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33409__auto____0 = (function (){
var statearr_34024 = [null,null,null,null,null,null,null];
(statearr_34024[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33409__auto__);

(statearr_34024[(1)] = (1));

return statearr_34024;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33409__auto____1 = (function (state_34015){
while(true){
var ret_value__33410__auto__ = (function (){try{while(true){
var result__33411__auto__ = switch__33408__auto__(state_34015);
if(cljs.core.keyword_identical_QMARK_(result__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33411__auto__;
}
break;
}
}catch (e34025){var ex__33412__auto__ = e34025;
var statearr_34026_36282 = state_34015;
(statearr_34026_36282[(2)] = ex__33412__auto__);


if(cljs.core.seq((state_34015[(4)]))){
var statearr_34027_36283 = state_34015;
(statearr_34027_36283[(1)] = cljs.core.first((state_34015[(4)])));

} else {
throw ex__33412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36288 = state_34015;
state_34015 = G__36288;
continue;
} else {
return ret_value__33410__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33409__auto__ = function(state_34015){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33409__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33409__auto____1.call(this,state_34015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33409__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33409__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33409__auto__;
})()
;})(__36240,switch__33408__auto__,c__33547__auto___36269,G__33974_36241,G__33974_36242__$1,n__5636__auto___36239,jobs,results,process__$1,async))
})();
var state__33549__auto__ = (function (){var statearr_34029 = f__33548__auto__();
(statearr_34029[(6)] = c__33547__auto___36269);

return statearr_34029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33549__auto__);
});})(__36240,c__33547__auto___36269,G__33974_36241,G__33974_36242__$1,n__5636__auto___36239,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33974_36242__$1)].join('')));

}

var G__36290 = (__36240 + (1));
__36240 = G__36290;
continue;
} else {
}
break;
}

var c__33547__auto___36291 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33548__auto__ = (function (){var switch__33408__auto__ = (function (state_34051){
var state_val_34052 = (state_34051[(1)]);
if((state_val_34052 === (7))){
var inst_34047 = (state_34051[(2)]);
var state_34051__$1 = state_34051;
var statearr_34054_36293 = state_34051__$1;
(statearr_34054_36293[(2)] = inst_34047);

(statearr_34054_36293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34052 === (1))){
var state_34051__$1 = state_34051;
var statearr_34055_36295 = state_34051__$1;
(statearr_34055_36295[(2)] = null);

(statearr_34055_36295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34052 === (4))){
var inst_34032 = (state_34051[(7)]);
var inst_34032__$1 = (state_34051[(2)]);
var inst_34033 = (inst_34032__$1 == null);
var state_34051__$1 = (function (){var statearr_34056 = state_34051;
(statearr_34056[(7)] = inst_34032__$1);

return statearr_34056;
})();
if(cljs.core.truth_(inst_34033)){
var statearr_34057_36296 = state_34051__$1;
(statearr_34057_36296[(1)] = (5));

} else {
var statearr_34058_36297 = state_34051__$1;
(statearr_34058_36297[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34052 === (6))){
var inst_34032 = (state_34051[(7)]);
var inst_34037 = (state_34051[(8)]);
var inst_34037__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34038 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34039 = [inst_34032,inst_34037__$1];
var inst_34040 = (new cljs.core.PersistentVector(null,2,(5),inst_34038,inst_34039,null));
var state_34051__$1 = (function (){var statearr_34059 = state_34051;
(statearr_34059[(8)] = inst_34037__$1);

return statearr_34059;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34051__$1,(8),jobs,inst_34040);
} else {
if((state_val_34052 === (3))){
var inst_34049 = (state_34051[(2)]);
var state_34051__$1 = state_34051;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34051__$1,inst_34049);
} else {
if((state_val_34052 === (2))){
var state_34051__$1 = state_34051;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34051__$1,(4),from);
} else {
if((state_val_34052 === (9))){
var inst_34044 = (state_34051[(2)]);
var state_34051__$1 = (function (){var statearr_34061 = state_34051;
(statearr_34061[(9)] = inst_34044);

return statearr_34061;
})();
var statearr_34062_36302 = state_34051__$1;
(statearr_34062_36302[(2)] = null);

(statearr_34062_36302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34052 === (5))){
var inst_34035 = cljs.core.async.close_BANG_(jobs);
var state_34051__$1 = state_34051;
var statearr_34063_36304 = state_34051__$1;
(statearr_34063_36304[(2)] = inst_34035);

(statearr_34063_36304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34052 === (8))){
var inst_34037 = (state_34051[(8)]);
var inst_34042 = (state_34051[(2)]);
var state_34051__$1 = (function (){var statearr_34065 = state_34051;
(statearr_34065[(10)] = inst_34042);

return statearr_34065;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34051__$1,(9),results,inst_34037);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33409__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33409__auto____0 = (function (){
var statearr_34066 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34066[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33409__auto__);

(statearr_34066[(1)] = (1));

return statearr_34066;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33409__auto____1 = (function (state_34051){
while(true){
var ret_value__33410__auto__ = (function (){try{while(true){
var result__33411__auto__ = switch__33408__auto__(state_34051);
if(cljs.core.keyword_identical_QMARK_(result__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33411__auto__;
}
break;
}
}catch (e34068){var ex__33412__auto__ = e34068;
var statearr_34069_36306 = state_34051;
(statearr_34069_36306[(2)] = ex__33412__auto__);


if(cljs.core.seq((state_34051[(4)]))){
var statearr_34070_36308 = state_34051;
(statearr_34070_36308[(1)] = cljs.core.first((state_34051[(4)])));

} else {
throw ex__33412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36309 = state_34051;
state_34051 = G__36309;
continue;
} else {
return ret_value__33410__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33409__auto__ = function(state_34051){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33409__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33409__auto____1.call(this,state_34051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33409__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33409__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33409__auto__;
})()
})();
var state__33549__auto__ = (function (){var statearr_34071 = f__33548__auto__();
(statearr_34071[(6)] = c__33547__auto___36291);

return statearr_34071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33549__auto__);
}));


var c__33547__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33548__auto__ = (function (){var switch__33408__auto__ = (function (state_34110){
var state_val_34111 = (state_34110[(1)]);
if((state_val_34111 === (7))){
var inst_34106 = (state_34110[(2)]);
var state_34110__$1 = state_34110;
var statearr_34112_36311 = state_34110__$1;
(statearr_34112_36311[(2)] = inst_34106);

(statearr_34112_36311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (20))){
var state_34110__$1 = state_34110;
var statearr_34113_36312 = state_34110__$1;
(statearr_34113_36312[(2)] = null);

(statearr_34113_36312[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (1))){
var state_34110__$1 = state_34110;
var statearr_34114_36313 = state_34110__$1;
(statearr_34114_36313[(2)] = null);

(statearr_34114_36313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (4))){
var inst_34074 = (state_34110[(7)]);
var inst_34074__$1 = (state_34110[(2)]);
var inst_34075 = (inst_34074__$1 == null);
var state_34110__$1 = (function (){var statearr_34116 = state_34110;
(statearr_34116[(7)] = inst_34074__$1);

return statearr_34116;
})();
if(cljs.core.truth_(inst_34075)){
var statearr_34117_36314 = state_34110__$1;
(statearr_34117_36314[(1)] = (5));

} else {
var statearr_34118_36315 = state_34110__$1;
(statearr_34118_36315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (15))){
var inst_34088 = (state_34110[(8)]);
var state_34110__$1 = state_34110;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34110__$1,(18),to,inst_34088);
} else {
if((state_val_34111 === (21))){
var inst_34101 = (state_34110[(2)]);
var state_34110__$1 = state_34110;
var statearr_34119_36316 = state_34110__$1;
(statearr_34119_36316[(2)] = inst_34101);

(statearr_34119_36316[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (13))){
var inst_34103 = (state_34110[(2)]);
var state_34110__$1 = (function (){var statearr_34121 = state_34110;
(statearr_34121[(9)] = inst_34103);

return statearr_34121;
})();
var statearr_34122_36317 = state_34110__$1;
(statearr_34122_36317[(2)] = null);

(statearr_34122_36317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (6))){
var inst_34074 = (state_34110[(7)]);
var state_34110__$1 = state_34110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34110__$1,(11),inst_34074);
} else {
if((state_val_34111 === (17))){
var inst_34096 = (state_34110[(2)]);
var state_34110__$1 = state_34110;
if(cljs.core.truth_(inst_34096)){
var statearr_34123_36319 = state_34110__$1;
(statearr_34123_36319[(1)] = (19));

} else {
var statearr_34124_36320 = state_34110__$1;
(statearr_34124_36320[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (3))){
var inst_34108 = (state_34110[(2)]);
var state_34110__$1 = state_34110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34110__$1,inst_34108);
} else {
if((state_val_34111 === (12))){
var inst_34084 = (state_34110[(10)]);
var state_34110__$1 = state_34110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34110__$1,(14),inst_34084);
} else {
if((state_val_34111 === (2))){
var state_34110__$1 = state_34110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34110__$1,(4),results);
} else {
if((state_val_34111 === (19))){
var state_34110__$1 = state_34110;
var statearr_34125_36328 = state_34110__$1;
(statearr_34125_36328[(2)] = null);

(statearr_34125_36328[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (11))){
var inst_34084 = (state_34110[(2)]);
var state_34110__$1 = (function (){var statearr_34126 = state_34110;
(statearr_34126[(10)] = inst_34084);

return statearr_34126;
})();
var statearr_34127_36329 = state_34110__$1;
(statearr_34127_36329[(2)] = null);

(statearr_34127_36329[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (9))){
var state_34110__$1 = state_34110;
var statearr_34128_36330 = state_34110__$1;
(statearr_34128_36330[(2)] = null);

(statearr_34128_36330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (5))){
var state_34110__$1 = state_34110;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34129_36331 = state_34110__$1;
(statearr_34129_36331[(1)] = (8));

} else {
var statearr_34130_36332 = state_34110__$1;
(statearr_34130_36332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (14))){
var inst_34088 = (state_34110[(8)]);
var inst_34090 = (state_34110[(11)]);
var inst_34088__$1 = (state_34110[(2)]);
var inst_34089 = (inst_34088__$1 == null);
var inst_34090__$1 = cljs.core.not(inst_34089);
var state_34110__$1 = (function (){var statearr_34131 = state_34110;
(statearr_34131[(8)] = inst_34088__$1);

(statearr_34131[(11)] = inst_34090__$1);

return statearr_34131;
})();
if(inst_34090__$1){
var statearr_34132_36337 = state_34110__$1;
(statearr_34132_36337[(1)] = (15));

} else {
var statearr_34133_36338 = state_34110__$1;
(statearr_34133_36338[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (16))){
var inst_34090 = (state_34110[(11)]);
var state_34110__$1 = state_34110;
var statearr_34134_36352 = state_34110__$1;
(statearr_34134_36352[(2)] = inst_34090);

(statearr_34134_36352[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (10))){
var inst_34081 = (state_34110[(2)]);
var state_34110__$1 = state_34110;
var statearr_34136_36353 = state_34110__$1;
(statearr_34136_36353[(2)] = inst_34081);

(statearr_34136_36353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (18))){
var inst_34093 = (state_34110[(2)]);
var state_34110__$1 = state_34110;
var statearr_34137_36354 = state_34110__$1;
(statearr_34137_36354[(2)] = inst_34093);

(statearr_34137_36354[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (8))){
var inst_34078 = cljs.core.async.close_BANG_(to);
var state_34110__$1 = state_34110;
var statearr_34138_36360 = state_34110__$1;
(statearr_34138_36360[(2)] = inst_34078);

(statearr_34138_36360[(1)] = (10));


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
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33409__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33409__auto____0 = (function (){
var statearr_34139 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34139[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33409__auto__);

(statearr_34139[(1)] = (1));

return statearr_34139;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33409__auto____1 = (function (state_34110){
while(true){
var ret_value__33410__auto__ = (function (){try{while(true){
var result__33411__auto__ = switch__33408__auto__(state_34110);
if(cljs.core.keyword_identical_QMARK_(result__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33411__auto__;
}
break;
}
}catch (e34140){var ex__33412__auto__ = e34140;
var statearr_34141_36371 = state_34110;
(statearr_34141_36371[(2)] = ex__33412__auto__);


if(cljs.core.seq((state_34110[(4)]))){
var statearr_34142_36372 = state_34110;
(statearr_34142_36372[(1)] = cljs.core.first((state_34110[(4)])));

} else {
throw ex__33412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36373 = state_34110;
state_34110 = G__36373;
continue;
} else {
return ret_value__33410__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33409__auto__ = function(state_34110){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33409__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33409__auto____1.call(this,state_34110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33409__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33409__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33409__auto__;
})()
})();
var state__33549__auto__ = (function (){var statearr_34143 = f__33548__auto__();
(statearr_34143[(6)] = c__33547__auto__);

return statearr_34143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33549__auto__);
}));

return c__33547__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34146 = arguments.length;
switch (G__34146) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34149 = arguments.length;
switch (G__34149) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34152 = arguments.length;
switch (G__34152) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33547__auto___36392 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33548__auto__ = (function (){var switch__33408__auto__ = (function (state_34178){
var state_val_34179 = (state_34178[(1)]);
if((state_val_34179 === (7))){
var inst_34174 = (state_34178[(2)]);
var state_34178__$1 = state_34178;
var statearr_34181_36393 = state_34178__$1;
(statearr_34181_36393[(2)] = inst_34174);

(statearr_34181_36393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34179 === (1))){
var state_34178__$1 = state_34178;
var statearr_34182_36394 = state_34178__$1;
(statearr_34182_36394[(2)] = null);

(statearr_34182_36394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34179 === (4))){
var inst_34155 = (state_34178[(7)]);
var inst_34155__$1 = (state_34178[(2)]);
var inst_34156 = (inst_34155__$1 == null);
var state_34178__$1 = (function (){var statearr_34183 = state_34178;
(statearr_34183[(7)] = inst_34155__$1);

return statearr_34183;
})();
if(cljs.core.truth_(inst_34156)){
var statearr_34184_36395 = state_34178__$1;
(statearr_34184_36395[(1)] = (5));

} else {
var statearr_34185_36396 = state_34178__$1;
(statearr_34185_36396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34179 === (13))){
var state_34178__$1 = state_34178;
var statearr_34186_36397 = state_34178__$1;
(statearr_34186_36397[(2)] = null);

(statearr_34186_36397[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34179 === (6))){
var inst_34155 = (state_34178[(7)]);
var inst_34161 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34155) : p.call(null,inst_34155));
var state_34178__$1 = state_34178;
if(cljs.core.truth_(inst_34161)){
var statearr_34188_36398 = state_34178__$1;
(statearr_34188_36398[(1)] = (9));

} else {
var statearr_34189_36399 = state_34178__$1;
(statearr_34189_36399[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34179 === (3))){
var inst_34176 = (state_34178[(2)]);
var state_34178__$1 = state_34178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34178__$1,inst_34176);
} else {
if((state_val_34179 === (12))){
var state_34178__$1 = state_34178;
var statearr_34190_36400 = state_34178__$1;
(statearr_34190_36400[(2)] = null);

(statearr_34190_36400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34179 === (2))){
var state_34178__$1 = state_34178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34178__$1,(4),ch);
} else {
if((state_val_34179 === (11))){
var inst_34155 = (state_34178[(7)]);
var inst_34165 = (state_34178[(2)]);
var state_34178__$1 = state_34178;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34178__$1,(8),inst_34165,inst_34155);
} else {
if((state_val_34179 === (9))){
var state_34178__$1 = state_34178;
var statearr_34191_36406 = state_34178__$1;
(statearr_34191_36406[(2)] = tc);

(statearr_34191_36406[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34179 === (5))){
var inst_34158 = cljs.core.async.close_BANG_(tc);
var inst_34159 = cljs.core.async.close_BANG_(fc);
var state_34178__$1 = (function (){var statearr_34192 = state_34178;
(statearr_34192[(8)] = inst_34158);

return statearr_34192;
})();
var statearr_34193_36414 = state_34178__$1;
(statearr_34193_36414[(2)] = inst_34159);

(statearr_34193_36414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34179 === (14))){
var inst_34172 = (state_34178[(2)]);
var state_34178__$1 = state_34178;
var statearr_34194_36424 = state_34178__$1;
(statearr_34194_36424[(2)] = inst_34172);

(statearr_34194_36424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34179 === (10))){
var state_34178__$1 = state_34178;
var statearr_34196_36430 = state_34178__$1;
(statearr_34196_36430[(2)] = fc);

(statearr_34196_36430[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34179 === (8))){
var inst_34167 = (state_34178[(2)]);
var state_34178__$1 = state_34178;
if(cljs.core.truth_(inst_34167)){
var statearr_34197_36431 = state_34178__$1;
(statearr_34197_36431[(1)] = (12));

} else {
var statearr_34198_36432 = state_34178__$1;
(statearr_34198_36432[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__33409__auto__ = null;
var cljs$core$async$state_machine__33409__auto____0 = (function (){
var statearr_34199 = [null,null,null,null,null,null,null,null,null];
(statearr_34199[(0)] = cljs$core$async$state_machine__33409__auto__);

(statearr_34199[(1)] = (1));

return statearr_34199;
});
var cljs$core$async$state_machine__33409__auto____1 = (function (state_34178){
while(true){
var ret_value__33410__auto__ = (function (){try{while(true){
var result__33411__auto__ = switch__33408__auto__(state_34178);
if(cljs.core.keyword_identical_QMARK_(result__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33411__auto__;
}
break;
}
}catch (e34200){var ex__33412__auto__ = e34200;
var statearr_34201_36468 = state_34178;
(statearr_34201_36468[(2)] = ex__33412__auto__);


if(cljs.core.seq((state_34178[(4)]))){
var statearr_34202_36469 = state_34178;
(statearr_34202_36469[(1)] = cljs.core.first((state_34178[(4)])));

} else {
throw ex__33412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36470 = state_34178;
state_34178 = G__36470;
continue;
} else {
return ret_value__33410__auto__;
}
break;
}
});
cljs$core$async$state_machine__33409__auto__ = function(state_34178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33409__auto____1.call(this,state_34178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33409__auto____0;
cljs$core$async$state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33409__auto____1;
return cljs$core$async$state_machine__33409__auto__;
})()
})();
var state__33549__auto__ = (function (){var statearr_34203 = f__33548__auto__();
(statearr_34203[(6)] = c__33547__auto___36392);

return statearr_34203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33549__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33547__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33548__auto__ = (function (){var switch__33408__auto__ = (function (state_34228){
var state_val_34229 = (state_34228[(1)]);
if((state_val_34229 === (7))){
var inst_34224 = (state_34228[(2)]);
var state_34228__$1 = state_34228;
var statearr_34231_36482 = state_34228__$1;
(statearr_34231_36482[(2)] = inst_34224);

(statearr_34231_36482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34229 === (1))){
var inst_34207 = init;
var inst_34208 = inst_34207;
var state_34228__$1 = (function (){var statearr_34232 = state_34228;
(statearr_34232[(7)] = inst_34208);

return statearr_34232;
})();
var statearr_34233_36488 = state_34228__$1;
(statearr_34233_36488[(2)] = null);

(statearr_34233_36488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34229 === (4))){
var inst_34211 = (state_34228[(8)]);
var inst_34211__$1 = (state_34228[(2)]);
var inst_34212 = (inst_34211__$1 == null);
var state_34228__$1 = (function (){var statearr_34234 = state_34228;
(statearr_34234[(8)] = inst_34211__$1);

return statearr_34234;
})();
if(cljs.core.truth_(inst_34212)){
var statearr_34235_36489 = state_34228__$1;
(statearr_34235_36489[(1)] = (5));

} else {
var statearr_34236_36490 = state_34228__$1;
(statearr_34236_36490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34229 === (6))){
var inst_34211 = (state_34228[(8)]);
var inst_34208 = (state_34228[(7)]);
var inst_34215 = (state_34228[(9)]);
var inst_34215__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34208,inst_34211) : f.call(null,inst_34208,inst_34211));
var inst_34216 = cljs.core.reduced_QMARK_(inst_34215__$1);
var state_34228__$1 = (function (){var statearr_34237 = state_34228;
(statearr_34237[(9)] = inst_34215__$1);

return statearr_34237;
})();
if(inst_34216){
var statearr_34238_36494 = state_34228__$1;
(statearr_34238_36494[(1)] = (8));

} else {
var statearr_34239_36495 = state_34228__$1;
(statearr_34239_36495[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34229 === (3))){
var inst_34226 = (state_34228[(2)]);
var state_34228__$1 = state_34228;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34228__$1,inst_34226);
} else {
if((state_val_34229 === (2))){
var state_34228__$1 = state_34228;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34228__$1,(4),ch);
} else {
if((state_val_34229 === (9))){
var inst_34215 = (state_34228[(9)]);
var inst_34208 = inst_34215;
var state_34228__$1 = (function (){var statearr_34241 = state_34228;
(statearr_34241[(7)] = inst_34208);

return statearr_34241;
})();
var statearr_34242_36505 = state_34228__$1;
(statearr_34242_36505[(2)] = null);

(statearr_34242_36505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34229 === (5))){
var inst_34208 = (state_34228[(7)]);
var state_34228__$1 = state_34228;
var statearr_34243_36506 = state_34228__$1;
(statearr_34243_36506[(2)] = inst_34208);

(statearr_34243_36506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34229 === (10))){
var inst_34222 = (state_34228[(2)]);
var state_34228__$1 = state_34228;
var statearr_34244_36507 = state_34228__$1;
(statearr_34244_36507[(2)] = inst_34222);

(statearr_34244_36507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34229 === (8))){
var inst_34215 = (state_34228[(9)]);
var inst_34218 = cljs.core.deref(inst_34215);
var state_34228__$1 = state_34228;
var statearr_34245_36508 = state_34228__$1;
(statearr_34245_36508[(2)] = inst_34218);

(statearr_34245_36508[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__33409__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33409__auto____0 = (function (){
var statearr_34246 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34246[(0)] = cljs$core$async$reduce_$_state_machine__33409__auto__);

(statearr_34246[(1)] = (1));

return statearr_34246;
});
var cljs$core$async$reduce_$_state_machine__33409__auto____1 = (function (state_34228){
while(true){
var ret_value__33410__auto__ = (function (){try{while(true){
var result__33411__auto__ = switch__33408__auto__(state_34228);
if(cljs.core.keyword_identical_QMARK_(result__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33411__auto__;
}
break;
}
}catch (e34247){var ex__33412__auto__ = e34247;
var statearr_34248_36509 = state_34228;
(statearr_34248_36509[(2)] = ex__33412__auto__);


if(cljs.core.seq((state_34228[(4)]))){
var statearr_34250_36510 = state_34228;
(statearr_34250_36510[(1)] = cljs.core.first((state_34228[(4)])));

} else {
throw ex__33412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36517 = state_34228;
state_34228 = G__36517;
continue;
} else {
return ret_value__33410__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33409__auto__ = function(state_34228){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33409__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33409__auto____1.call(this,state_34228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33409__auto____0;
cljs$core$async$reduce_$_state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33409__auto____1;
return cljs$core$async$reduce_$_state_machine__33409__auto__;
})()
})();
var state__33549__auto__ = (function (){var statearr_34251 = f__33548__auto__();
(statearr_34251[(6)] = c__33547__auto__);

return statearr_34251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33549__auto__);
}));

return c__33547__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33547__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33548__auto__ = (function (){var switch__33408__auto__ = (function (state_34257){
var state_val_34258 = (state_34257[(1)]);
if((state_val_34258 === (1))){
var inst_34252 = cljs.core.async.reduce(f__$1,init,ch);
var state_34257__$1 = state_34257;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34257__$1,(2),inst_34252);
} else {
if((state_val_34258 === (2))){
var inst_34254 = (state_34257[(2)]);
var inst_34255 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34254) : f__$1.call(null,inst_34254));
var state_34257__$1 = state_34257;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34257__$1,inst_34255);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33409__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33409__auto____0 = (function (){
var statearr_34260 = [null,null,null,null,null,null,null];
(statearr_34260[(0)] = cljs$core$async$transduce_$_state_machine__33409__auto__);

(statearr_34260[(1)] = (1));

return statearr_34260;
});
var cljs$core$async$transduce_$_state_machine__33409__auto____1 = (function (state_34257){
while(true){
var ret_value__33410__auto__ = (function (){try{while(true){
var result__33411__auto__ = switch__33408__auto__(state_34257);
if(cljs.core.keyword_identical_QMARK_(result__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33411__auto__;
}
break;
}
}catch (e34261){var ex__33412__auto__ = e34261;
var statearr_34262_36530 = state_34257;
(statearr_34262_36530[(2)] = ex__33412__auto__);


if(cljs.core.seq((state_34257[(4)]))){
var statearr_34263_36531 = state_34257;
(statearr_34263_36531[(1)] = cljs.core.first((state_34257[(4)])));

} else {
throw ex__33412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36532 = state_34257;
state_34257 = G__36532;
continue;
} else {
return ret_value__33410__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33409__auto__ = function(state_34257){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33409__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33409__auto____1.call(this,state_34257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33409__auto____0;
cljs$core$async$transduce_$_state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33409__auto____1;
return cljs$core$async$transduce_$_state_machine__33409__auto__;
})()
})();
var state__33549__auto__ = (function (){var statearr_34264 = f__33548__auto__();
(statearr_34264[(6)] = c__33547__auto__);

return statearr_34264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33549__auto__);
}));

return c__33547__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__34267 = arguments.length;
switch (G__34267) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33547__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33548__auto__ = (function (){var switch__33408__auto__ = (function (state_34295){
var state_val_34296 = (state_34295[(1)]);
if((state_val_34296 === (7))){
var inst_34277 = (state_34295[(2)]);
var state_34295__$1 = state_34295;
var statearr_34298_36539 = state_34295__$1;
(statearr_34298_36539[(2)] = inst_34277);

(statearr_34298_36539[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34296 === (1))){
var inst_34268 = cljs.core.seq(coll);
var inst_34269 = inst_34268;
var state_34295__$1 = (function (){var statearr_34299 = state_34295;
(statearr_34299[(7)] = inst_34269);

return statearr_34299;
})();
var statearr_34300_36540 = state_34295__$1;
(statearr_34300_36540[(2)] = null);

(statearr_34300_36540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34296 === (4))){
var inst_34269 = (state_34295[(7)]);
var inst_34275 = cljs.core.first(inst_34269);
var state_34295__$1 = state_34295;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34295__$1,(7),ch,inst_34275);
} else {
if((state_val_34296 === (13))){
var inst_34289 = (state_34295[(2)]);
var state_34295__$1 = state_34295;
var statearr_34303_36544 = state_34295__$1;
(statearr_34303_36544[(2)] = inst_34289);

(statearr_34303_36544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34296 === (6))){
var inst_34280 = (state_34295[(2)]);
var state_34295__$1 = state_34295;
if(cljs.core.truth_(inst_34280)){
var statearr_34304_36545 = state_34295__$1;
(statearr_34304_36545[(1)] = (8));

} else {
var statearr_34305_36546 = state_34295__$1;
(statearr_34305_36546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34296 === (3))){
var inst_34293 = (state_34295[(2)]);
var state_34295__$1 = state_34295;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34295__$1,inst_34293);
} else {
if((state_val_34296 === (12))){
var state_34295__$1 = state_34295;
var statearr_34306_36547 = state_34295__$1;
(statearr_34306_36547[(2)] = null);

(statearr_34306_36547[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34296 === (2))){
var inst_34269 = (state_34295[(7)]);
var state_34295__$1 = state_34295;
if(cljs.core.truth_(inst_34269)){
var statearr_34307_36548 = state_34295__$1;
(statearr_34307_36548[(1)] = (4));

} else {
var statearr_34308_36549 = state_34295__$1;
(statearr_34308_36549[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34296 === (11))){
var inst_34286 = cljs.core.async.close_BANG_(ch);
var state_34295__$1 = state_34295;
var statearr_34309_36550 = state_34295__$1;
(statearr_34309_36550[(2)] = inst_34286);

(statearr_34309_36550[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34296 === (9))){
var state_34295__$1 = state_34295;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34310_36551 = state_34295__$1;
(statearr_34310_36551[(1)] = (11));

} else {
var statearr_34311_36552 = state_34295__$1;
(statearr_34311_36552[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34296 === (5))){
var inst_34269 = (state_34295[(7)]);
var state_34295__$1 = state_34295;
var statearr_34313_36553 = state_34295__$1;
(statearr_34313_36553[(2)] = inst_34269);

(statearr_34313_36553[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34296 === (10))){
var inst_34291 = (state_34295[(2)]);
var state_34295__$1 = state_34295;
var statearr_34314_36554 = state_34295__$1;
(statearr_34314_36554[(2)] = inst_34291);

(statearr_34314_36554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34296 === (8))){
var inst_34269 = (state_34295[(7)]);
var inst_34282 = cljs.core.next(inst_34269);
var inst_34269__$1 = inst_34282;
var state_34295__$1 = (function (){var statearr_34315 = state_34295;
(statearr_34315[(7)] = inst_34269__$1);

return statearr_34315;
})();
var statearr_34316_36556 = state_34295__$1;
(statearr_34316_36556[(2)] = null);

(statearr_34316_36556[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__33409__auto__ = null;
var cljs$core$async$state_machine__33409__auto____0 = (function (){
var statearr_34317 = [null,null,null,null,null,null,null,null];
(statearr_34317[(0)] = cljs$core$async$state_machine__33409__auto__);

(statearr_34317[(1)] = (1));

return statearr_34317;
});
var cljs$core$async$state_machine__33409__auto____1 = (function (state_34295){
while(true){
var ret_value__33410__auto__ = (function (){try{while(true){
var result__33411__auto__ = switch__33408__auto__(state_34295);
if(cljs.core.keyword_identical_QMARK_(result__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33411__auto__;
}
break;
}
}catch (e34318){var ex__33412__auto__ = e34318;
var statearr_34319_36558 = state_34295;
(statearr_34319_36558[(2)] = ex__33412__auto__);


if(cljs.core.seq((state_34295[(4)]))){
var statearr_34320_36559 = state_34295;
(statearr_34320_36559[(1)] = cljs.core.first((state_34295[(4)])));

} else {
throw ex__33412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36560 = state_34295;
state_34295 = G__36560;
continue;
} else {
return ret_value__33410__auto__;
}
break;
}
});
cljs$core$async$state_machine__33409__auto__ = function(state_34295){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33409__auto____1.call(this,state_34295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33409__auto____0;
cljs$core$async$state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33409__auto____1;
return cljs$core$async$state_machine__33409__auto__;
})()
})();
var state__33549__auto__ = (function (){var statearr_34322 = f__33548__auto__();
(statearr_34322[(6)] = c__33547__auto__);

return statearr_34322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33549__auto__);
}));

return c__33547__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34324 = arguments.length;
switch (G__34324) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_36563 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_36563(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_36568 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_36568(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_36569 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_36569(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_36570 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_36570(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34328 = (function (ch,cs,meta34329){
this.ch = ch;
this.cs = cs;
this.meta34329 = meta34329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34330,meta34329__$1){
var self__ = this;
var _34330__$1 = this;
return (new cljs.core.async.t_cljs$core$async34328(self__.ch,self__.cs,meta34329__$1));
}));

(cljs.core.async.t_cljs$core$async34328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34330){
var self__ = this;
var _34330__$1 = this;
return self__.meta34329;
}));

(cljs.core.async.t_cljs$core$async34328.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34328.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34328.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34328.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34328.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34328.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34328.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34329","meta34329",-1253183027,null)], null);
}));

(cljs.core.async.t_cljs$core$async34328.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34328");

(cljs.core.async.t_cljs$core$async34328.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34328");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34328.
 */
cljs.core.async.__GT_t_cljs$core$async34328 = (function cljs$core$async$__GT_t_cljs$core$async34328(ch,cs,meta34329){
return (new cljs.core.async.t_cljs$core$async34328(ch,cs,meta34329));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async34328(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33547__auto___36580 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33548__auto__ = (function (){var switch__33408__auto__ = (function (state_34468){
var state_val_34469 = (state_34468[(1)]);
if((state_val_34469 === (7))){
var inst_34464 = (state_34468[(2)]);
var state_34468__$1 = state_34468;
var statearr_34470_36581 = state_34468__$1;
(statearr_34470_36581[(2)] = inst_34464);

(statearr_34470_36581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (20))){
var inst_34369 = (state_34468[(7)]);
var inst_34381 = cljs.core.first(inst_34369);
var inst_34382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34381,(0),null);
var inst_34383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34381,(1),null);
var state_34468__$1 = (function (){var statearr_34471 = state_34468;
(statearr_34471[(8)] = inst_34382);

return statearr_34471;
})();
if(cljs.core.truth_(inst_34383)){
var statearr_34472_36582 = state_34468__$1;
(statearr_34472_36582[(1)] = (22));

} else {
var statearr_34473_36583 = state_34468__$1;
(statearr_34473_36583[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (27))){
var inst_34411 = (state_34468[(9)]);
var inst_34338 = (state_34468[(10)]);
var inst_34413 = (state_34468[(11)]);
var inst_34418 = (state_34468[(12)]);
var inst_34418__$1 = cljs.core._nth(inst_34411,inst_34413);
var inst_34419 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34418__$1,inst_34338,done);
var state_34468__$1 = (function (){var statearr_34474 = state_34468;
(statearr_34474[(12)] = inst_34418__$1);

return statearr_34474;
})();
if(cljs.core.truth_(inst_34419)){
var statearr_34475_36588 = state_34468__$1;
(statearr_34475_36588[(1)] = (30));

} else {
var statearr_34476_36589 = state_34468__$1;
(statearr_34476_36589[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (1))){
var state_34468__$1 = state_34468;
var statearr_34480_36590 = state_34468__$1;
(statearr_34480_36590[(2)] = null);

(statearr_34480_36590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (24))){
var inst_34369 = (state_34468[(7)]);
var inst_34388 = (state_34468[(2)]);
var inst_34389 = cljs.core.next(inst_34369);
var inst_34347 = inst_34389;
var inst_34348 = null;
var inst_34349 = (0);
var inst_34350 = (0);
var state_34468__$1 = (function (){var statearr_34483 = state_34468;
(statearr_34483[(13)] = inst_34349);

(statearr_34483[(14)] = inst_34347);

(statearr_34483[(15)] = inst_34388);

(statearr_34483[(16)] = inst_34348);

(statearr_34483[(17)] = inst_34350);

return statearr_34483;
})();
var statearr_34485_36592 = state_34468__$1;
(statearr_34485_36592[(2)] = null);

(statearr_34485_36592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (39))){
var state_34468__$1 = state_34468;
var statearr_34489_36596 = state_34468__$1;
(statearr_34489_36596[(2)] = null);

(statearr_34489_36596[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (4))){
var inst_34338 = (state_34468[(10)]);
var inst_34338__$1 = (state_34468[(2)]);
var inst_34339 = (inst_34338__$1 == null);
var state_34468__$1 = (function (){var statearr_34490 = state_34468;
(statearr_34490[(10)] = inst_34338__$1);

return statearr_34490;
})();
if(cljs.core.truth_(inst_34339)){
var statearr_34491_36597 = state_34468__$1;
(statearr_34491_36597[(1)] = (5));

} else {
var statearr_34492_36598 = state_34468__$1;
(statearr_34492_36598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (15))){
var inst_34349 = (state_34468[(13)]);
var inst_34347 = (state_34468[(14)]);
var inst_34348 = (state_34468[(16)]);
var inst_34350 = (state_34468[(17)]);
var inst_34365 = (state_34468[(2)]);
var inst_34366 = (inst_34350 + (1));
var tmp34486 = inst_34349;
var tmp34487 = inst_34347;
var tmp34488 = inst_34348;
var inst_34347__$1 = tmp34487;
var inst_34348__$1 = tmp34488;
var inst_34349__$1 = tmp34486;
var inst_34350__$1 = inst_34366;
var state_34468__$1 = (function (){var statearr_34493 = state_34468;
(statearr_34493[(13)] = inst_34349__$1);

(statearr_34493[(14)] = inst_34347__$1);

(statearr_34493[(18)] = inst_34365);

(statearr_34493[(16)] = inst_34348__$1);

(statearr_34493[(17)] = inst_34350__$1);

return statearr_34493;
})();
var statearr_34497_36600 = state_34468__$1;
(statearr_34497_36600[(2)] = null);

(statearr_34497_36600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (21))){
var inst_34392 = (state_34468[(2)]);
var state_34468__$1 = state_34468;
var statearr_34501_36601 = state_34468__$1;
(statearr_34501_36601[(2)] = inst_34392);

(statearr_34501_36601[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (31))){
var inst_34418 = (state_34468[(12)]);
var inst_34422 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34418);
var state_34468__$1 = state_34468;
var statearr_34502_36607 = state_34468__$1;
(statearr_34502_36607[(2)] = inst_34422);

(statearr_34502_36607[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (32))){
var inst_34410 = (state_34468[(19)]);
var inst_34411 = (state_34468[(9)]);
var inst_34412 = (state_34468[(20)]);
var inst_34413 = (state_34468[(11)]);
var inst_34424 = (state_34468[(2)]);
var inst_34425 = (inst_34413 + (1));
var tmp34498 = inst_34410;
var tmp34499 = inst_34411;
var tmp34500 = inst_34412;
var inst_34410__$1 = tmp34498;
var inst_34411__$1 = tmp34499;
var inst_34412__$1 = tmp34500;
var inst_34413__$1 = inst_34425;
var state_34468__$1 = (function (){var statearr_34504 = state_34468;
(statearr_34504[(19)] = inst_34410__$1);

(statearr_34504[(9)] = inst_34411__$1);

(statearr_34504[(21)] = inst_34424);

(statearr_34504[(20)] = inst_34412__$1);

(statearr_34504[(11)] = inst_34413__$1);

return statearr_34504;
})();
var statearr_34507_36609 = state_34468__$1;
(statearr_34507_36609[(2)] = null);

(statearr_34507_36609[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (40))){
var inst_34437 = (state_34468[(22)]);
var inst_34441 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34437);
var state_34468__$1 = state_34468;
var statearr_34509_36611 = state_34468__$1;
(statearr_34509_36611[(2)] = inst_34441);

(statearr_34509_36611[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (33))){
var inst_34428 = (state_34468[(23)]);
var inst_34430 = cljs.core.chunked_seq_QMARK_(inst_34428);
var state_34468__$1 = state_34468;
if(inst_34430){
var statearr_34514_36614 = state_34468__$1;
(statearr_34514_36614[(1)] = (36));

} else {
var statearr_34516_36615 = state_34468__$1;
(statearr_34516_36615[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (13))){
var inst_34359 = (state_34468[(24)]);
var inst_34362 = cljs.core.async.close_BANG_(inst_34359);
var state_34468__$1 = state_34468;
var statearr_34521_36616 = state_34468__$1;
(statearr_34521_36616[(2)] = inst_34362);

(statearr_34521_36616[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (22))){
var inst_34382 = (state_34468[(8)]);
var inst_34385 = cljs.core.async.close_BANG_(inst_34382);
var state_34468__$1 = state_34468;
var statearr_34525_36617 = state_34468__$1;
(statearr_34525_36617[(2)] = inst_34385);

(statearr_34525_36617[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (36))){
var inst_34428 = (state_34468[(23)]);
var inst_34432 = cljs.core.chunk_first(inst_34428);
var inst_34433 = cljs.core.chunk_rest(inst_34428);
var inst_34434 = cljs.core.count(inst_34432);
var inst_34410 = inst_34433;
var inst_34411 = inst_34432;
var inst_34412 = inst_34434;
var inst_34413 = (0);
var state_34468__$1 = (function (){var statearr_34527 = state_34468;
(statearr_34527[(19)] = inst_34410);

(statearr_34527[(9)] = inst_34411);

(statearr_34527[(20)] = inst_34412);

(statearr_34527[(11)] = inst_34413);

return statearr_34527;
})();
var statearr_34530_36621 = state_34468__$1;
(statearr_34530_36621[(2)] = null);

(statearr_34530_36621[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (41))){
var inst_34428 = (state_34468[(23)]);
var inst_34443 = (state_34468[(2)]);
var inst_34444 = cljs.core.next(inst_34428);
var inst_34410 = inst_34444;
var inst_34411 = null;
var inst_34412 = (0);
var inst_34413 = (0);
var state_34468__$1 = (function (){var statearr_34532 = state_34468;
(statearr_34532[(19)] = inst_34410);

(statearr_34532[(25)] = inst_34443);

(statearr_34532[(9)] = inst_34411);

(statearr_34532[(20)] = inst_34412);

(statearr_34532[(11)] = inst_34413);

return statearr_34532;
})();
var statearr_34533_36622 = state_34468__$1;
(statearr_34533_36622[(2)] = null);

(statearr_34533_36622[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (43))){
var state_34468__$1 = state_34468;
var statearr_34535_36623 = state_34468__$1;
(statearr_34535_36623[(2)] = null);

(statearr_34535_36623[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (29))){
var inst_34452 = (state_34468[(2)]);
var state_34468__$1 = state_34468;
var statearr_34539_36624 = state_34468__$1;
(statearr_34539_36624[(2)] = inst_34452);

(statearr_34539_36624[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (44))){
var inst_34461 = (state_34468[(2)]);
var state_34468__$1 = (function (){var statearr_34541 = state_34468;
(statearr_34541[(26)] = inst_34461);

return statearr_34541;
})();
var statearr_34542_36625 = state_34468__$1;
(statearr_34542_36625[(2)] = null);

(statearr_34542_36625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (6))){
var inst_34402 = (state_34468[(27)]);
var inst_34401 = cljs.core.deref(cs);
var inst_34402__$1 = cljs.core.keys(inst_34401);
var inst_34403 = cljs.core.count(inst_34402__$1);
var inst_34404 = cljs.core.reset_BANG_(dctr,inst_34403);
var inst_34409 = cljs.core.seq(inst_34402__$1);
var inst_34410 = inst_34409;
var inst_34411 = null;
var inst_34412 = (0);
var inst_34413 = (0);
var state_34468__$1 = (function (){var statearr_34547 = state_34468;
(statearr_34547[(19)] = inst_34410);

(statearr_34547[(27)] = inst_34402__$1);

(statearr_34547[(9)] = inst_34411);

(statearr_34547[(20)] = inst_34412);

(statearr_34547[(11)] = inst_34413);

(statearr_34547[(28)] = inst_34404);

return statearr_34547;
})();
var statearr_34548_36632 = state_34468__$1;
(statearr_34548_36632[(2)] = null);

(statearr_34548_36632[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (28))){
var inst_34410 = (state_34468[(19)]);
var inst_34428 = (state_34468[(23)]);
var inst_34428__$1 = cljs.core.seq(inst_34410);
var state_34468__$1 = (function (){var statearr_34552 = state_34468;
(statearr_34552[(23)] = inst_34428__$1);

return statearr_34552;
})();
if(inst_34428__$1){
var statearr_34553_36635 = state_34468__$1;
(statearr_34553_36635[(1)] = (33));

} else {
var statearr_34555_36636 = state_34468__$1;
(statearr_34555_36636[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (25))){
var inst_34412 = (state_34468[(20)]);
var inst_34413 = (state_34468[(11)]);
var inst_34415 = (inst_34413 < inst_34412);
var inst_34416 = inst_34415;
var state_34468__$1 = state_34468;
if(cljs.core.truth_(inst_34416)){
var statearr_34568_36637 = state_34468__$1;
(statearr_34568_36637[(1)] = (27));

} else {
var statearr_34569_36638 = state_34468__$1;
(statearr_34569_36638[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (34))){
var state_34468__$1 = state_34468;
var statearr_34570_36639 = state_34468__$1;
(statearr_34570_36639[(2)] = null);

(statearr_34570_36639[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (17))){
var state_34468__$1 = state_34468;
var statearr_34574_36640 = state_34468__$1;
(statearr_34574_36640[(2)] = null);

(statearr_34574_36640[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (3))){
var inst_34466 = (state_34468[(2)]);
var state_34468__$1 = state_34468;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34468__$1,inst_34466);
} else {
if((state_val_34469 === (12))){
var inst_34397 = (state_34468[(2)]);
var state_34468__$1 = state_34468;
var statearr_34578_36642 = state_34468__$1;
(statearr_34578_36642[(2)] = inst_34397);

(statearr_34578_36642[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (2))){
var state_34468__$1 = state_34468;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34468__$1,(4),ch);
} else {
if((state_val_34469 === (23))){
var state_34468__$1 = state_34468;
var statearr_34583_36643 = state_34468__$1;
(statearr_34583_36643[(2)] = null);

(statearr_34583_36643[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (35))){
var inst_34450 = (state_34468[(2)]);
var state_34468__$1 = state_34468;
var statearr_34585_36644 = state_34468__$1;
(statearr_34585_36644[(2)] = inst_34450);

(statearr_34585_36644[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (19))){
var inst_34369 = (state_34468[(7)]);
var inst_34373 = cljs.core.chunk_first(inst_34369);
var inst_34374 = cljs.core.chunk_rest(inst_34369);
var inst_34375 = cljs.core.count(inst_34373);
var inst_34347 = inst_34374;
var inst_34348 = inst_34373;
var inst_34349 = inst_34375;
var inst_34350 = (0);
var state_34468__$1 = (function (){var statearr_34594 = state_34468;
(statearr_34594[(13)] = inst_34349);

(statearr_34594[(14)] = inst_34347);

(statearr_34594[(16)] = inst_34348);

(statearr_34594[(17)] = inst_34350);

return statearr_34594;
})();
var statearr_34596_36652 = state_34468__$1;
(statearr_34596_36652[(2)] = null);

(statearr_34596_36652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (11))){
var inst_34347 = (state_34468[(14)]);
var inst_34369 = (state_34468[(7)]);
var inst_34369__$1 = cljs.core.seq(inst_34347);
var state_34468__$1 = (function (){var statearr_34696 = state_34468;
(statearr_34696[(7)] = inst_34369__$1);

return statearr_34696;
})();
if(inst_34369__$1){
var statearr_34700_36653 = state_34468__$1;
(statearr_34700_36653[(1)] = (16));

} else {
var statearr_34702_36660 = state_34468__$1;
(statearr_34702_36660[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (9))){
var inst_34399 = (state_34468[(2)]);
var state_34468__$1 = state_34468;
var statearr_34703_36661 = state_34468__$1;
(statearr_34703_36661[(2)] = inst_34399);

(statearr_34703_36661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (5))){
var inst_34345 = cljs.core.deref(cs);
var inst_34346 = cljs.core.seq(inst_34345);
var inst_34347 = inst_34346;
var inst_34348 = null;
var inst_34349 = (0);
var inst_34350 = (0);
var state_34468__$1 = (function (){var statearr_34704 = state_34468;
(statearr_34704[(13)] = inst_34349);

(statearr_34704[(14)] = inst_34347);

(statearr_34704[(16)] = inst_34348);

(statearr_34704[(17)] = inst_34350);

return statearr_34704;
})();
var statearr_34705_36662 = state_34468__$1;
(statearr_34705_36662[(2)] = null);

(statearr_34705_36662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (14))){
var state_34468__$1 = state_34468;
var statearr_34706_36665 = state_34468__$1;
(statearr_34706_36665[(2)] = null);

(statearr_34706_36665[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (45))){
var inst_34458 = (state_34468[(2)]);
var state_34468__$1 = state_34468;
var statearr_34709_36666 = state_34468__$1;
(statearr_34709_36666[(2)] = inst_34458);

(statearr_34709_36666[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (26))){
var inst_34402 = (state_34468[(27)]);
var inst_34454 = (state_34468[(2)]);
var inst_34455 = cljs.core.seq(inst_34402);
var state_34468__$1 = (function (){var statearr_34729 = state_34468;
(statearr_34729[(29)] = inst_34454);

return statearr_34729;
})();
if(inst_34455){
var statearr_34730_36667 = state_34468__$1;
(statearr_34730_36667[(1)] = (42));

} else {
var statearr_34731_36668 = state_34468__$1;
(statearr_34731_36668[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (16))){
var inst_34369 = (state_34468[(7)]);
var inst_34371 = cljs.core.chunked_seq_QMARK_(inst_34369);
var state_34468__$1 = state_34468;
if(inst_34371){
var statearr_34739_36669 = state_34468__$1;
(statearr_34739_36669[(1)] = (19));

} else {
var statearr_34740_36670 = state_34468__$1;
(statearr_34740_36670[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (38))){
var inst_34447 = (state_34468[(2)]);
var state_34468__$1 = state_34468;
var statearr_34742_36671 = state_34468__$1;
(statearr_34742_36671[(2)] = inst_34447);

(statearr_34742_36671[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (30))){
var state_34468__$1 = state_34468;
var statearr_34743_36672 = state_34468__$1;
(statearr_34743_36672[(2)] = null);

(statearr_34743_36672[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (10))){
var inst_34348 = (state_34468[(16)]);
var inst_34350 = (state_34468[(17)]);
var inst_34358 = cljs.core._nth(inst_34348,inst_34350);
var inst_34359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34358,(0),null);
var inst_34360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34358,(1),null);
var state_34468__$1 = (function (){var statearr_34748 = state_34468;
(statearr_34748[(24)] = inst_34359);

return statearr_34748;
})();
if(cljs.core.truth_(inst_34360)){
var statearr_34749_36673 = state_34468__$1;
(statearr_34749_36673[(1)] = (13));

} else {
var statearr_34754_36674 = state_34468__$1;
(statearr_34754_36674[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (18))){
var inst_34395 = (state_34468[(2)]);
var state_34468__$1 = state_34468;
var statearr_34755_36675 = state_34468__$1;
(statearr_34755_36675[(2)] = inst_34395);

(statearr_34755_36675[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (42))){
var state_34468__$1 = state_34468;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34468__$1,(45),dchan);
} else {
if((state_val_34469 === (37))){
var inst_34338 = (state_34468[(10)]);
var inst_34428 = (state_34468[(23)]);
var inst_34437 = (state_34468[(22)]);
var inst_34437__$1 = cljs.core.first(inst_34428);
var inst_34438 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34437__$1,inst_34338,done);
var state_34468__$1 = (function (){var statearr_34760 = state_34468;
(statearr_34760[(22)] = inst_34437__$1);

return statearr_34760;
})();
if(cljs.core.truth_(inst_34438)){
var statearr_34762_36676 = state_34468__$1;
(statearr_34762_36676[(1)] = (39));

} else {
var statearr_34763_36677 = state_34468__$1;
(statearr_34763_36677[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (8))){
var inst_34349 = (state_34468[(13)]);
var inst_34350 = (state_34468[(17)]);
var inst_34352 = (inst_34350 < inst_34349);
var inst_34353 = inst_34352;
var state_34468__$1 = state_34468;
if(cljs.core.truth_(inst_34353)){
var statearr_34772_36678 = state_34468__$1;
(statearr_34772_36678[(1)] = (10));

} else {
var statearr_34777_36679 = state_34468__$1;
(statearr_34777_36679[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__33409__auto__ = null;
var cljs$core$async$mult_$_state_machine__33409__auto____0 = (function (){
var statearr_34785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34785[(0)] = cljs$core$async$mult_$_state_machine__33409__auto__);

(statearr_34785[(1)] = (1));

return statearr_34785;
});
var cljs$core$async$mult_$_state_machine__33409__auto____1 = (function (state_34468){
while(true){
var ret_value__33410__auto__ = (function (){try{while(true){
var result__33411__auto__ = switch__33408__auto__(state_34468);
if(cljs.core.keyword_identical_QMARK_(result__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33411__auto__;
}
break;
}
}catch (e34787){var ex__33412__auto__ = e34787;
var statearr_34788_36680 = state_34468;
(statearr_34788_36680[(2)] = ex__33412__auto__);


if(cljs.core.seq((state_34468[(4)]))){
var statearr_34789_36681 = state_34468;
(statearr_34789_36681[(1)] = cljs.core.first((state_34468[(4)])));

} else {
throw ex__33412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36688 = state_34468;
state_34468 = G__36688;
continue;
} else {
return ret_value__33410__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33409__auto__ = function(state_34468){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33409__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33409__auto____1.call(this,state_34468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33409__auto____0;
cljs$core$async$mult_$_state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33409__auto____1;
return cljs$core$async$mult_$_state_machine__33409__auto__;
})()
})();
var state__33549__auto__ = (function (){var statearr_34791 = f__33548__auto__();
(statearr_34791[(6)] = c__33547__auto___36580);

return statearr_34791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33549__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34801 = arguments.length;
switch (G__34801) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_36692 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_36692(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_36694 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_36694(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_36713 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_36713(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_36714 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_36714(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_36718 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_36718(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36733 = arguments.length;
var i__5770__auto___36734 = (0);
while(true){
if((i__5770__auto___36734 < len__5769__auto___36733)){
args__5775__auto__.push((arguments[i__5770__auto___36734]));

var G__36735 = (i__5770__auto___36734 + (1));
i__5770__auto___36734 = G__36735;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34910){
var map__34911 = p__34910;
var map__34911__$1 = cljs.core.__destructure_map(map__34911);
var opts = map__34911__$1;
var statearr_34912_36736 = state;
(statearr_34912_36736[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_34913_36743 = state;
(statearr_34913_36743[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_34914_36744 = state;
(statearr_34914_36744[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34846){
var G__34847 = cljs.core.first(seq34846);
var seq34846__$1 = cljs.core.next(seq34846);
var G__34848 = cljs.core.first(seq34846__$1);
var seq34846__$2 = cljs.core.next(seq34846__$1);
var G__34849 = cljs.core.first(seq34846__$2);
var seq34846__$3 = cljs.core.next(seq34846__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34847,G__34848,G__34849,seq34846__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34922 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34923){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34923 = meta34923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34924,meta34923__$1){
var self__ = this;
var _34924__$1 = this;
return (new cljs.core.async.t_cljs$core$async34922(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34923__$1));
}));

(cljs.core.async.t_cljs$core$async34922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34924){
var self__ = this;
var _34924__$1 = this;
return self__.meta34923;
}));

(cljs.core.async.t_cljs$core$async34922.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34922.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34922.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34922.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34922.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34922.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34922.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34922.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34922.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34923","meta34923",-34664307,null)], null);
}));

(cljs.core.async.t_cljs$core$async34922.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34922.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34922");

(cljs.core.async.t_cljs$core$async34922.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34922");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34922.
 */
cljs.core.async.__GT_t_cljs$core$async34922 = (function cljs$core$async$__GT_t_cljs$core$async34922(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34923){
return (new cljs.core.async.t_cljs$core$async34922(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34923));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async34922(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__33547__auto___36746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33548__auto__ = (function (){var switch__33408__auto__ = (function (state_35004){
var state_val_35005 = (state_35004[(1)]);
if((state_val_35005 === (7))){
var inst_34964 = (state_35004[(2)]);
var state_35004__$1 = state_35004;
if(cljs.core.truth_(inst_34964)){
var statearr_35006_36747 = state_35004__$1;
(statearr_35006_36747[(1)] = (8));

} else {
var statearr_35007_36748 = state_35004__$1;
(statearr_35007_36748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (20))){
var inst_34953 = (state_35004[(7)]);
var state_35004__$1 = state_35004;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35004__$1,(23),out,inst_34953);
} else {
if((state_val_35005 === (1))){
var inst_34935 = calc_state();
var inst_34936 = cljs.core.__destructure_map(inst_34935);
var inst_34937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34936,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34936,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34939 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34936,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34940 = inst_34935;
var state_35004__$1 = (function (){var statearr_35008 = state_35004;
(statearr_35008[(8)] = inst_34937);

(statearr_35008[(9)] = inst_34940);

(statearr_35008[(10)] = inst_34938);

(statearr_35008[(11)] = inst_34939);

return statearr_35008;
})();
var statearr_35009_36751 = state_35004__$1;
(statearr_35009_36751[(2)] = null);

(statearr_35009_36751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (24))){
var inst_34943 = (state_35004[(12)]);
var inst_34940 = inst_34943;
var state_35004__$1 = (function (){var statearr_35010 = state_35004;
(statearr_35010[(9)] = inst_34940);

return statearr_35010;
})();
var statearr_35011_36752 = state_35004__$1;
(statearr_35011_36752[(2)] = null);

(statearr_35011_36752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (4))){
var inst_34956 = (state_35004[(13)]);
var inst_34953 = (state_35004[(7)]);
var inst_34952 = (state_35004[(2)]);
var inst_34953__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34952,(0),null);
var inst_34955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34952,(1),null);
var inst_34956__$1 = (inst_34953__$1 == null);
var state_35004__$1 = (function (){var statearr_35012 = state_35004;
(statearr_35012[(13)] = inst_34956__$1);

(statearr_35012[(14)] = inst_34955);

(statearr_35012[(7)] = inst_34953__$1);

return statearr_35012;
})();
if(cljs.core.truth_(inst_34956__$1)){
var statearr_35013_36771 = state_35004__$1;
(statearr_35013_36771[(1)] = (5));

} else {
var statearr_35014_36772 = state_35004__$1;
(statearr_35014_36772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (15))){
var inst_34944 = (state_35004[(15)]);
var inst_34978 = (state_35004[(16)]);
var inst_34978__$1 = cljs.core.empty_QMARK_(inst_34944);
var state_35004__$1 = (function (){var statearr_35015 = state_35004;
(statearr_35015[(16)] = inst_34978__$1);

return statearr_35015;
})();
if(inst_34978__$1){
var statearr_35017_36776 = state_35004__$1;
(statearr_35017_36776[(1)] = (17));

} else {
var statearr_35018_36777 = state_35004__$1;
(statearr_35018_36777[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (21))){
var inst_34943 = (state_35004[(12)]);
var inst_34940 = inst_34943;
var state_35004__$1 = (function (){var statearr_35022 = state_35004;
(statearr_35022[(9)] = inst_34940);

return statearr_35022;
})();
var statearr_35023_36778 = state_35004__$1;
(statearr_35023_36778[(2)] = null);

(statearr_35023_36778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (13))){
var inst_34971 = (state_35004[(2)]);
var inst_34972 = calc_state();
var inst_34940 = inst_34972;
var state_35004__$1 = (function (){var statearr_35024 = state_35004;
(statearr_35024[(17)] = inst_34971);

(statearr_35024[(9)] = inst_34940);

return statearr_35024;
})();
var statearr_35025_36779 = state_35004__$1;
(statearr_35025_36779[(2)] = null);

(statearr_35025_36779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (22))){
var inst_34998 = (state_35004[(2)]);
var state_35004__$1 = state_35004;
var statearr_35026_36780 = state_35004__$1;
(statearr_35026_36780[(2)] = inst_34998);

(statearr_35026_36780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (6))){
var inst_34955 = (state_35004[(14)]);
var inst_34962 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34955,change);
var state_35004__$1 = state_35004;
var statearr_35027_36781 = state_35004__$1;
(statearr_35027_36781[(2)] = inst_34962);

(statearr_35027_36781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (25))){
var state_35004__$1 = state_35004;
var statearr_35032_36782 = state_35004__$1;
(statearr_35032_36782[(2)] = null);

(statearr_35032_36782[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (17))){
var inst_34946 = (state_35004[(18)]);
var inst_34955 = (state_35004[(14)]);
var inst_34980 = (inst_34946.cljs$core$IFn$_invoke$arity$1 ? inst_34946.cljs$core$IFn$_invoke$arity$1(inst_34955) : inst_34946.call(null,inst_34955));
var inst_34981 = cljs.core.not(inst_34980);
var state_35004__$1 = state_35004;
var statearr_35033_36787 = state_35004__$1;
(statearr_35033_36787[(2)] = inst_34981);

(statearr_35033_36787[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (3))){
var inst_35002 = (state_35004[(2)]);
var state_35004__$1 = state_35004;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35004__$1,inst_35002);
} else {
if((state_val_35005 === (12))){
var state_35004__$1 = state_35004;
var statearr_35034_36788 = state_35004__$1;
(statearr_35034_36788[(2)] = null);

(statearr_35034_36788[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (2))){
var inst_34940 = (state_35004[(9)]);
var inst_34943 = (state_35004[(12)]);
var inst_34943__$1 = cljs.core.__destructure_map(inst_34940);
var inst_34944 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34943__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34943__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34943__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35004__$1 = (function (){var statearr_35035 = state_35004;
(statearr_35035[(18)] = inst_34946);

(statearr_35035[(15)] = inst_34944);

(statearr_35035[(12)] = inst_34943__$1);

return statearr_35035;
})();
return cljs.core.async.ioc_alts_BANG_(state_35004__$1,(4),inst_34947);
} else {
if((state_val_35005 === (23))){
var inst_34989 = (state_35004[(2)]);
var state_35004__$1 = state_35004;
if(cljs.core.truth_(inst_34989)){
var statearr_35036_36791 = state_35004__$1;
(statearr_35036_36791[(1)] = (24));

} else {
var statearr_35037_36792 = state_35004__$1;
(statearr_35037_36792[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (19))){
var inst_34984 = (state_35004[(2)]);
var state_35004__$1 = state_35004;
var statearr_35038_36797 = state_35004__$1;
(statearr_35038_36797[(2)] = inst_34984);

(statearr_35038_36797[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (11))){
var inst_34955 = (state_35004[(14)]);
var inst_34968 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34955);
var state_35004__$1 = state_35004;
var statearr_35039_36804 = state_35004__$1;
(statearr_35039_36804[(2)] = inst_34968);

(statearr_35039_36804[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (9))){
var inst_34975 = (state_35004[(19)]);
var inst_34944 = (state_35004[(15)]);
var inst_34955 = (state_35004[(14)]);
var inst_34975__$1 = (inst_34944.cljs$core$IFn$_invoke$arity$1 ? inst_34944.cljs$core$IFn$_invoke$arity$1(inst_34955) : inst_34944.call(null,inst_34955));
var state_35004__$1 = (function (){var statearr_35040 = state_35004;
(statearr_35040[(19)] = inst_34975__$1);

return statearr_35040;
})();
if(cljs.core.truth_(inst_34975__$1)){
var statearr_35041_36805 = state_35004__$1;
(statearr_35041_36805[(1)] = (14));

} else {
var statearr_35042_36806 = state_35004__$1;
(statearr_35042_36806[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (5))){
var inst_34956 = (state_35004[(13)]);
var state_35004__$1 = state_35004;
var statearr_35043_36807 = state_35004__$1;
(statearr_35043_36807[(2)] = inst_34956);

(statearr_35043_36807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (14))){
var inst_34975 = (state_35004[(19)]);
var state_35004__$1 = state_35004;
var statearr_35044_36808 = state_35004__$1;
(statearr_35044_36808[(2)] = inst_34975);

(statearr_35044_36808[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (26))){
var inst_34994 = (state_35004[(2)]);
var state_35004__$1 = state_35004;
var statearr_35045_36809 = state_35004__$1;
(statearr_35045_36809[(2)] = inst_34994);

(statearr_35045_36809[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (16))){
var inst_34986 = (state_35004[(2)]);
var state_35004__$1 = state_35004;
if(cljs.core.truth_(inst_34986)){
var statearr_35046_36810 = state_35004__$1;
(statearr_35046_36810[(1)] = (20));

} else {
var statearr_35047_36811 = state_35004__$1;
(statearr_35047_36811[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (10))){
var inst_35000 = (state_35004[(2)]);
var state_35004__$1 = state_35004;
var statearr_35048_36812 = state_35004__$1;
(statearr_35048_36812[(2)] = inst_35000);

(statearr_35048_36812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (18))){
var inst_34978 = (state_35004[(16)]);
var state_35004__$1 = state_35004;
var statearr_35049_36813 = state_35004__$1;
(statearr_35049_36813[(2)] = inst_34978);

(statearr_35049_36813[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (8))){
var inst_34953 = (state_35004[(7)]);
var inst_34966 = (inst_34953 == null);
var state_35004__$1 = state_35004;
if(cljs.core.truth_(inst_34966)){
var statearr_35050_36814 = state_35004__$1;
(statearr_35050_36814[(1)] = (11));

} else {
var statearr_35051_36815 = state_35004__$1;
(statearr_35051_36815[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__33409__auto__ = null;
var cljs$core$async$mix_$_state_machine__33409__auto____0 = (function (){
var statearr_35052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35052[(0)] = cljs$core$async$mix_$_state_machine__33409__auto__);

(statearr_35052[(1)] = (1));

return statearr_35052;
});
var cljs$core$async$mix_$_state_machine__33409__auto____1 = (function (state_35004){
while(true){
var ret_value__33410__auto__ = (function (){try{while(true){
var result__33411__auto__ = switch__33408__auto__(state_35004);
if(cljs.core.keyword_identical_QMARK_(result__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33411__auto__;
}
break;
}
}catch (e35053){var ex__33412__auto__ = e35053;
var statearr_35054_36823 = state_35004;
(statearr_35054_36823[(2)] = ex__33412__auto__);


if(cljs.core.seq((state_35004[(4)]))){
var statearr_35056_36824 = state_35004;
(statearr_35056_36824[(1)] = cljs.core.first((state_35004[(4)])));

} else {
throw ex__33412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36825 = state_35004;
state_35004 = G__36825;
continue;
} else {
return ret_value__33410__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33409__auto__ = function(state_35004){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33409__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33409__auto____1.call(this,state_35004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33409__auto____0;
cljs$core$async$mix_$_state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33409__auto____1;
return cljs$core$async$mix_$_state_machine__33409__auto__;
})()
})();
var state__33549__auto__ = (function (){var statearr_35058 = f__33548__auto__();
(statearr_35058[(6)] = c__33547__auto___36746);

return statearr_35058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33549__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_36831 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_36831(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_36834 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_36834(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_36835 = (function() {
var G__36836 = null;
var G__36836__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__36836__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__36836 = function(p,v){
switch(arguments.length){
case 1:
return G__36836__1.call(this,p);
case 2:
return G__36836__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36836.cljs$core$IFn$_invoke$arity$1 = G__36836__1;
G__36836.cljs$core$IFn$_invoke$arity$2 = G__36836__2;
return G__36836;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35063 = arguments.length;
switch (G__35063) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36835(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36835(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35075 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35076){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35076 = meta35076;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35077,meta35076__$1){
var self__ = this;
var _35077__$1 = this;
return (new cljs.core.async.t_cljs$core$async35075(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35076__$1));
}));

(cljs.core.async.t_cljs$core$async35075.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35077){
var self__ = this;
var _35077__$1 = this;
return self__.meta35076;
}));

(cljs.core.async.t_cljs$core$async35075.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35075.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35075.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35075.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35075.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async35075.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35075.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35075.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35076","meta35076",406250169,null)], null);
}));

(cljs.core.async.t_cljs$core$async35075.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35075.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35075");

(cljs.core.async.t_cljs$core$async35075.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35075");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35075.
 */
cljs.core.async.__GT_t_cljs$core$async35075 = (function cljs$core$async$__GT_t_cljs$core$async35075(ch,topic_fn,buf_fn,mults,ensure_mult,meta35076){
return (new cljs.core.async.t_cljs$core$async35075(ch,topic_fn,buf_fn,mults,ensure_mult,meta35076));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__35070 = arguments.length;
switch (G__35070) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35065_SHARP_){
if(cljs.core.truth_((p1__35065_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35065_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35065_SHARP_.call(null,topic)))){
return p1__35065_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35065_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async35075(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__33547__auto___36857 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33548__auto__ = (function (){var switch__33408__auto__ = (function (state_35195){
var state_val_35196 = (state_35195[(1)]);
if((state_val_35196 === (7))){
var inst_35191 = (state_35195[(2)]);
var state_35195__$1 = state_35195;
var statearr_35208_36860 = state_35195__$1;
(statearr_35208_36860[(2)] = inst_35191);

(statearr_35208_36860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (20))){
var state_35195__$1 = state_35195;
var statearr_35209_36864 = state_35195__$1;
(statearr_35209_36864[(2)] = null);

(statearr_35209_36864[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (1))){
var state_35195__$1 = state_35195;
var statearr_35210_36865 = state_35195__$1;
(statearr_35210_36865[(2)] = null);

(statearr_35210_36865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (24))){
var inst_35174 = (state_35195[(7)]);
var inst_35183 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35174);
var state_35195__$1 = state_35195;
var statearr_35211_36866 = state_35195__$1;
(statearr_35211_36866[(2)] = inst_35183);

(statearr_35211_36866[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (4))){
var inst_35100 = (state_35195[(8)]);
var inst_35100__$1 = (state_35195[(2)]);
var inst_35101 = (inst_35100__$1 == null);
var state_35195__$1 = (function (){var statearr_35212 = state_35195;
(statearr_35212[(8)] = inst_35100__$1);

return statearr_35212;
})();
if(cljs.core.truth_(inst_35101)){
var statearr_35213_36873 = state_35195__$1;
(statearr_35213_36873[(1)] = (5));

} else {
var statearr_35214_36874 = state_35195__$1;
(statearr_35214_36874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (15))){
var inst_35168 = (state_35195[(2)]);
var state_35195__$1 = state_35195;
var statearr_35215_36876 = state_35195__$1;
(statearr_35215_36876[(2)] = inst_35168);

(statearr_35215_36876[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (21))){
var inst_35188 = (state_35195[(2)]);
var state_35195__$1 = (function (){var statearr_35216 = state_35195;
(statearr_35216[(9)] = inst_35188);

return statearr_35216;
})();
var statearr_35217_36880 = state_35195__$1;
(statearr_35217_36880[(2)] = null);

(statearr_35217_36880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (13))){
var inst_35146 = (state_35195[(10)]);
var inst_35148 = cljs.core.chunked_seq_QMARK_(inst_35146);
var state_35195__$1 = state_35195;
if(inst_35148){
var statearr_35218_36881 = state_35195__$1;
(statearr_35218_36881[(1)] = (16));

} else {
var statearr_35219_36882 = state_35195__$1;
(statearr_35219_36882[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (22))){
var inst_35180 = (state_35195[(2)]);
var state_35195__$1 = state_35195;
if(cljs.core.truth_(inst_35180)){
var statearr_35220_36883 = state_35195__$1;
(statearr_35220_36883[(1)] = (23));

} else {
var statearr_35222_36884 = state_35195__$1;
(statearr_35222_36884[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (6))){
var inst_35174 = (state_35195[(7)]);
var inst_35176 = (state_35195[(11)]);
var inst_35100 = (state_35195[(8)]);
var inst_35174__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35100) : topic_fn.call(null,inst_35100));
var inst_35175 = cljs.core.deref(mults);
var inst_35176__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35175,inst_35174__$1);
var state_35195__$1 = (function (){var statearr_35224 = state_35195;
(statearr_35224[(7)] = inst_35174__$1);

(statearr_35224[(11)] = inst_35176__$1);

return statearr_35224;
})();
if(cljs.core.truth_(inst_35176__$1)){
var statearr_35225_36892 = state_35195__$1;
(statearr_35225_36892[(1)] = (19));

} else {
var statearr_35226_36893 = state_35195__$1;
(statearr_35226_36893[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (25))){
var inst_35185 = (state_35195[(2)]);
var state_35195__$1 = state_35195;
var statearr_35227_36894 = state_35195__$1;
(statearr_35227_36894[(2)] = inst_35185);

(statearr_35227_36894[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (17))){
var inst_35146 = (state_35195[(10)]);
var inst_35159 = cljs.core.first(inst_35146);
var inst_35160 = cljs.core.async.muxch_STAR_(inst_35159);
var inst_35161 = cljs.core.async.close_BANG_(inst_35160);
var inst_35162 = cljs.core.next(inst_35146);
var inst_35118 = inst_35162;
var inst_35119 = null;
var inst_35120 = (0);
var inst_35121 = (0);
var state_35195__$1 = (function (){var statearr_35230 = state_35195;
(statearr_35230[(12)] = inst_35120);

(statearr_35230[(13)] = inst_35121);

(statearr_35230[(14)] = inst_35119);

(statearr_35230[(15)] = inst_35161);

(statearr_35230[(16)] = inst_35118);

return statearr_35230;
})();
var statearr_35232_36895 = state_35195__$1;
(statearr_35232_36895[(2)] = null);

(statearr_35232_36895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (3))){
var inst_35193 = (state_35195[(2)]);
var state_35195__$1 = state_35195;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35195__$1,inst_35193);
} else {
if((state_val_35196 === (12))){
var inst_35170 = (state_35195[(2)]);
var state_35195__$1 = state_35195;
var statearr_35234_36899 = state_35195__$1;
(statearr_35234_36899[(2)] = inst_35170);

(statearr_35234_36899[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (2))){
var state_35195__$1 = state_35195;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35195__$1,(4),ch);
} else {
if((state_val_35196 === (23))){
var state_35195__$1 = state_35195;
var statearr_35235_36906 = state_35195__$1;
(statearr_35235_36906[(2)] = null);

(statearr_35235_36906[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (19))){
var inst_35176 = (state_35195[(11)]);
var inst_35100 = (state_35195[(8)]);
var inst_35178 = cljs.core.async.muxch_STAR_(inst_35176);
var state_35195__$1 = state_35195;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35195__$1,(22),inst_35178,inst_35100);
} else {
if((state_val_35196 === (11))){
var inst_35146 = (state_35195[(10)]);
var inst_35118 = (state_35195[(16)]);
var inst_35146__$1 = cljs.core.seq(inst_35118);
var state_35195__$1 = (function (){var statearr_35238 = state_35195;
(statearr_35238[(10)] = inst_35146__$1);

return statearr_35238;
})();
if(inst_35146__$1){
var statearr_35239_36920 = state_35195__$1;
(statearr_35239_36920[(1)] = (13));

} else {
var statearr_35240_36921 = state_35195__$1;
(statearr_35240_36921[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (9))){
var inst_35172 = (state_35195[(2)]);
var state_35195__$1 = state_35195;
var statearr_35241_36922 = state_35195__$1;
(statearr_35241_36922[(2)] = inst_35172);

(statearr_35241_36922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (5))){
var inst_35107 = cljs.core.deref(mults);
var inst_35108 = cljs.core.vals(inst_35107);
var inst_35109 = cljs.core.seq(inst_35108);
var inst_35118 = inst_35109;
var inst_35119 = null;
var inst_35120 = (0);
var inst_35121 = (0);
var state_35195__$1 = (function (){var statearr_35242 = state_35195;
(statearr_35242[(12)] = inst_35120);

(statearr_35242[(13)] = inst_35121);

(statearr_35242[(14)] = inst_35119);

(statearr_35242[(16)] = inst_35118);

return statearr_35242;
})();
var statearr_35243_36924 = state_35195__$1;
(statearr_35243_36924[(2)] = null);

(statearr_35243_36924[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (14))){
var state_35195__$1 = state_35195;
var statearr_35247_36938 = state_35195__$1;
(statearr_35247_36938[(2)] = null);

(statearr_35247_36938[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (16))){
var inst_35146 = (state_35195[(10)]);
var inst_35154 = cljs.core.chunk_first(inst_35146);
var inst_35155 = cljs.core.chunk_rest(inst_35146);
var inst_35156 = cljs.core.count(inst_35154);
var inst_35118 = inst_35155;
var inst_35119 = inst_35154;
var inst_35120 = inst_35156;
var inst_35121 = (0);
var state_35195__$1 = (function (){var statearr_35248 = state_35195;
(statearr_35248[(12)] = inst_35120);

(statearr_35248[(13)] = inst_35121);

(statearr_35248[(14)] = inst_35119);

(statearr_35248[(16)] = inst_35118);

return statearr_35248;
})();
var statearr_35249_36943 = state_35195__$1;
(statearr_35249_36943[(2)] = null);

(statearr_35249_36943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (10))){
var inst_35120 = (state_35195[(12)]);
var inst_35121 = (state_35195[(13)]);
var inst_35119 = (state_35195[(14)]);
var inst_35118 = (state_35195[(16)]);
var inst_35132 = cljs.core._nth(inst_35119,inst_35121);
var inst_35133 = cljs.core.async.muxch_STAR_(inst_35132);
var inst_35134 = cljs.core.async.close_BANG_(inst_35133);
var inst_35141 = (inst_35121 + (1));
var tmp35244 = inst_35120;
var tmp35245 = inst_35119;
var tmp35246 = inst_35118;
var inst_35118__$1 = tmp35246;
var inst_35119__$1 = tmp35245;
var inst_35120__$1 = tmp35244;
var inst_35121__$1 = inst_35141;
var state_35195__$1 = (function (){var statearr_35250 = state_35195;
(statearr_35250[(12)] = inst_35120__$1);

(statearr_35250[(17)] = inst_35134);

(statearr_35250[(13)] = inst_35121__$1);

(statearr_35250[(14)] = inst_35119__$1);

(statearr_35250[(16)] = inst_35118__$1);

return statearr_35250;
})();
var statearr_35254_36944 = state_35195__$1;
(statearr_35254_36944[(2)] = null);

(statearr_35254_36944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (18))){
var inst_35165 = (state_35195[(2)]);
var state_35195__$1 = state_35195;
var statearr_35255_36949 = state_35195__$1;
(statearr_35255_36949[(2)] = inst_35165);

(statearr_35255_36949[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (8))){
var inst_35120 = (state_35195[(12)]);
var inst_35121 = (state_35195[(13)]);
var inst_35129 = (inst_35121 < inst_35120);
var inst_35130 = inst_35129;
var state_35195__$1 = state_35195;
if(cljs.core.truth_(inst_35130)){
var statearr_35256_36950 = state_35195__$1;
(statearr_35256_36950[(1)] = (10));

} else {
var statearr_35257_36951 = state_35195__$1;
(statearr_35257_36951[(1)] = (11));

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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33409__auto__ = null;
var cljs$core$async$state_machine__33409__auto____0 = (function (){
var statearr_35258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35258[(0)] = cljs$core$async$state_machine__33409__auto__);

(statearr_35258[(1)] = (1));

return statearr_35258;
});
var cljs$core$async$state_machine__33409__auto____1 = (function (state_35195){
while(true){
var ret_value__33410__auto__ = (function (){try{while(true){
var result__33411__auto__ = switch__33408__auto__(state_35195);
if(cljs.core.keyword_identical_QMARK_(result__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33411__auto__;
}
break;
}
}catch (e35259){var ex__33412__auto__ = e35259;
var statearr_35260_36952 = state_35195;
(statearr_35260_36952[(2)] = ex__33412__auto__);


if(cljs.core.seq((state_35195[(4)]))){
var statearr_35261_36953 = state_35195;
(statearr_35261_36953[(1)] = cljs.core.first((state_35195[(4)])));

} else {
throw ex__33412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36956 = state_35195;
state_35195 = G__36956;
continue;
} else {
return ret_value__33410__auto__;
}
break;
}
});
cljs$core$async$state_machine__33409__auto__ = function(state_35195){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33409__auto____1.call(this,state_35195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33409__auto____0;
cljs$core$async$state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33409__auto____1;
return cljs$core$async$state_machine__33409__auto__;
})()
})();
var state__33549__auto__ = (function (){var statearr_35262 = f__33548__auto__();
(statearr_35262[(6)] = c__33547__auto___36857);

return statearr_35262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33549__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35277 = arguments.length;
switch (G__35277) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35289 = arguments.length;
switch (G__35289) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__35308 = arguments.length;
switch (G__35308) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__33547__auto___36982 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33548__auto__ = (function (){var switch__33408__auto__ = (function (state_35353){
var state_val_35354 = (state_35353[(1)]);
if((state_val_35354 === (7))){
var state_35353__$1 = state_35353;
var statearr_35355_36983 = state_35353__$1;
(statearr_35355_36983[(2)] = null);

(statearr_35355_36983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35354 === (1))){
var state_35353__$1 = state_35353;
var statearr_35356_36984 = state_35353__$1;
(statearr_35356_36984[(2)] = null);

(statearr_35356_36984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35354 === (4))){
var inst_35313 = (state_35353[(7)]);
var inst_35314 = (state_35353[(8)]);
var inst_35316 = (inst_35314 < inst_35313);
var state_35353__$1 = state_35353;
if(cljs.core.truth_(inst_35316)){
var statearr_35357_36986 = state_35353__$1;
(statearr_35357_36986[(1)] = (6));

} else {
var statearr_35358_36987 = state_35353__$1;
(statearr_35358_36987[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35354 === (15))){
var inst_35339 = (state_35353[(9)]);
var inst_35344 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35339);
var state_35353__$1 = state_35353;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35353__$1,(17),out,inst_35344);
} else {
if((state_val_35354 === (13))){
var inst_35339 = (state_35353[(9)]);
var inst_35339__$1 = (state_35353[(2)]);
var inst_35340 = cljs.core.some(cljs.core.nil_QMARK_,inst_35339__$1);
var state_35353__$1 = (function (){var statearr_35359 = state_35353;
(statearr_35359[(9)] = inst_35339__$1);

return statearr_35359;
})();
if(cljs.core.truth_(inst_35340)){
var statearr_35360_36993 = state_35353__$1;
(statearr_35360_36993[(1)] = (14));

} else {
var statearr_35361_36994 = state_35353__$1;
(statearr_35361_36994[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35354 === (6))){
var state_35353__$1 = state_35353;
var statearr_35362_36996 = state_35353__$1;
(statearr_35362_36996[(2)] = null);

(statearr_35362_36996[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35354 === (17))){
var inst_35346 = (state_35353[(2)]);
var state_35353__$1 = (function (){var statearr_35364 = state_35353;
(statearr_35364[(10)] = inst_35346);

return statearr_35364;
})();
var statearr_35366_37001 = state_35353__$1;
(statearr_35366_37001[(2)] = null);

(statearr_35366_37001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35354 === (3))){
var inst_35351 = (state_35353[(2)]);
var state_35353__$1 = state_35353;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35353__$1,inst_35351);
} else {
if((state_val_35354 === (12))){
var _ = (function (){var statearr_35368 = state_35353;
(statearr_35368[(4)] = cljs.core.rest((state_35353[(4)])));

return statearr_35368;
})();
var state_35353__$1 = state_35353;
var ex35363 = (state_35353__$1[(2)]);
var statearr_35369_37002 = state_35353__$1;
(statearr_35369_37002[(5)] = ex35363);


if((ex35363 instanceof Object)){
var statearr_35370_37003 = state_35353__$1;
(statearr_35370_37003[(1)] = (11));

(statearr_35370_37003[(5)] = null);

} else {
throw ex35363;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35354 === (2))){
var inst_35312 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35313 = cnt;
var inst_35314 = (0);
var state_35353__$1 = (function (){var statearr_35382 = state_35353;
(statearr_35382[(7)] = inst_35313);

(statearr_35382[(11)] = inst_35312);

(statearr_35382[(8)] = inst_35314);

return statearr_35382;
})();
var statearr_35383_37004 = state_35353__$1;
(statearr_35383_37004[(2)] = null);

(statearr_35383_37004[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35354 === (11))){
var inst_35318 = (state_35353[(2)]);
var inst_35319 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35353__$1 = (function (){var statearr_35385 = state_35353;
(statearr_35385[(12)] = inst_35318);

return statearr_35385;
})();
var statearr_35386_37009 = state_35353__$1;
(statearr_35386_37009[(2)] = inst_35319);

(statearr_35386_37009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35354 === (9))){
var inst_35314 = (state_35353[(8)]);
var _ = (function (){var statearr_35387 = state_35353;
(statearr_35387[(4)] = cljs.core.cons((12),(state_35353[(4)])));

return statearr_35387;
})();
var inst_35325 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35314) : chs__$1.call(null,inst_35314));
var inst_35326 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35314) : done.call(null,inst_35314));
var inst_35327 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35325,inst_35326);
var ___$1 = (function (){var statearr_35389 = state_35353;
(statearr_35389[(4)] = cljs.core.rest((state_35353[(4)])));

return statearr_35389;
})();
var state_35353__$1 = state_35353;
var statearr_35390_37013 = state_35353__$1;
(statearr_35390_37013[(2)] = inst_35327);

(statearr_35390_37013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35354 === (5))){
var inst_35337 = (state_35353[(2)]);
var state_35353__$1 = (function (){var statearr_35391 = state_35353;
(statearr_35391[(13)] = inst_35337);

return statearr_35391;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35353__$1,(13),dchan);
} else {
if((state_val_35354 === (14))){
var inst_35342 = cljs.core.async.close_BANG_(out);
var state_35353__$1 = state_35353;
var statearr_35392_37017 = state_35353__$1;
(statearr_35392_37017[(2)] = inst_35342);

(statearr_35392_37017[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35354 === (16))){
var inst_35349 = (state_35353[(2)]);
var state_35353__$1 = state_35353;
var statearr_35393_37018 = state_35353__$1;
(statearr_35393_37018[(2)] = inst_35349);

(statearr_35393_37018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35354 === (10))){
var inst_35314 = (state_35353[(8)]);
var inst_35330 = (state_35353[(2)]);
var inst_35331 = (inst_35314 + (1));
var inst_35314__$1 = inst_35331;
var state_35353__$1 = (function (){var statearr_35394 = state_35353;
(statearr_35394[(14)] = inst_35330);

(statearr_35394[(8)] = inst_35314__$1);

return statearr_35394;
})();
var statearr_35395_37019 = state_35353__$1;
(statearr_35395_37019[(2)] = null);

(statearr_35395_37019[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35354 === (8))){
var inst_35335 = (state_35353[(2)]);
var state_35353__$1 = state_35353;
var statearr_35396_37020 = state_35353__$1;
(statearr_35396_37020[(2)] = inst_35335);

(statearr_35396_37020[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__33409__auto__ = null;
var cljs$core$async$state_machine__33409__auto____0 = (function (){
var statearr_35397 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35397[(0)] = cljs$core$async$state_machine__33409__auto__);

(statearr_35397[(1)] = (1));

return statearr_35397;
});
var cljs$core$async$state_machine__33409__auto____1 = (function (state_35353){
while(true){
var ret_value__33410__auto__ = (function (){try{while(true){
var result__33411__auto__ = switch__33408__auto__(state_35353);
if(cljs.core.keyword_identical_QMARK_(result__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33411__auto__;
}
break;
}
}catch (e35398){var ex__33412__auto__ = e35398;
var statearr_35399_37024 = state_35353;
(statearr_35399_37024[(2)] = ex__33412__auto__);


if(cljs.core.seq((state_35353[(4)]))){
var statearr_35400_37025 = state_35353;
(statearr_35400_37025[(1)] = cljs.core.first((state_35353[(4)])));

} else {
throw ex__33412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37026 = state_35353;
state_35353 = G__37026;
continue;
} else {
return ret_value__33410__auto__;
}
break;
}
});
cljs$core$async$state_machine__33409__auto__ = function(state_35353){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33409__auto____1.call(this,state_35353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33409__auto____0;
cljs$core$async$state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33409__auto____1;
return cljs$core$async$state_machine__33409__auto__;
})()
})();
var state__33549__auto__ = (function (){var statearr_35401 = f__33548__auto__();
(statearr_35401[(6)] = c__33547__auto___36982);

return statearr_35401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33549__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__35404 = arguments.length;
switch (G__35404) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33547__auto___37031 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33548__auto__ = (function (){var switch__33408__auto__ = (function (state_35438){
var state_val_35439 = (state_35438[(1)]);
if((state_val_35439 === (7))){
var inst_35416 = (state_35438[(7)]);
var inst_35415 = (state_35438[(8)]);
var inst_35415__$1 = (state_35438[(2)]);
var inst_35416__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35415__$1,(0),null);
var inst_35417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35415__$1,(1),null);
var inst_35418 = (inst_35416__$1 == null);
var state_35438__$1 = (function (){var statearr_35441 = state_35438;
(statearr_35441[(7)] = inst_35416__$1);

(statearr_35441[(8)] = inst_35415__$1);

(statearr_35441[(9)] = inst_35417);

return statearr_35441;
})();
if(cljs.core.truth_(inst_35418)){
var statearr_35442_37032 = state_35438__$1;
(statearr_35442_37032[(1)] = (8));

} else {
var statearr_35443_37033 = state_35438__$1;
(statearr_35443_37033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (1))){
var inst_35405 = cljs.core.vec(chs);
var inst_35406 = inst_35405;
var state_35438__$1 = (function (){var statearr_35444 = state_35438;
(statearr_35444[(10)] = inst_35406);

return statearr_35444;
})();
var statearr_35445_37034 = state_35438__$1;
(statearr_35445_37034[(2)] = null);

(statearr_35445_37034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (4))){
var inst_35406 = (state_35438[(10)]);
var state_35438__$1 = state_35438;
return cljs.core.async.ioc_alts_BANG_(state_35438__$1,(7),inst_35406);
} else {
if((state_val_35439 === (6))){
var inst_35434 = (state_35438[(2)]);
var state_35438__$1 = state_35438;
var statearr_35446_37038 = state_35438__$1;
(statearr_35446_37038[(2)] = inst_35434);

(statearr_35446_37038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (3))){
var inst_35436 = (state_35438[(2)]);
var state_35438__$1 = state_35438;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35438__$1,inst_35436);
} else {
if((state_val_35439 === (2))){
var inst_35406 = (state_35438[(10)]);
var inst_35408 = cljs.core.count(inst_35406);
var inst_35409 = (inst_35408 > (0));
var state_35438__$1 = state_35438;
if(cljs.core.truth_(inst_35409)){
var statearr_35460_37039 = state_35438__$1;
(statearr_35460_37039[(1)] = (4));

} else {
var statearr_35461_37040 = state_35438__$1;
(statearr_35461_37040[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (11))){
var inst_35406 = (state_35438[(10)]);
var inst_35427 = (state_35438[(2)]);
var tmp35447 = inst_35406;
var inst_35406__$1 = tmp35447;
var state_35438__$1 = (function (){var statearr_35462 = state_35438;
(statearr_35462[(11)] = inst_35427);

(statearr_35462[(10)] = inst_35406__$1);

return statearr_35462;
})();
var statearr_35463_37041 = state_35438__$1;
(statearr_35463_37041[(2)] = null);

(statearr_35463_37041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (9))){
var inst_35416 = (state_35438[(7)]);
var state_35438__$1 = state_35438;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35438__$1,(11),out,inst_35416);
} else {
if((state_val_35439 === (5))){
var inst_35432 = cljs.core.async.close_BANG_(out);
var state_35438__$1 = state_35438;
var statearr_35464_37057 = state_35438__$1;
(statearr_35464_37057[(2)] = inst_35432);

(statearr_35464_37057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (10))){
var inst_35430 = (state_35438[(2)]);
var state_35438__$1 = state_35438;
var statearr_35465_37058 = state_35438__$1;
(statearr_35465_37058[(2)] = inst_35430);

(statearr_35465_37058[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (8))){
var inst_35416 = (state_35438[(7)]);
var inst_35415 = (state_35438[(8)]);
var inst_35417 = (state_35438[(9)]);
var inst_35406 = (state_35438[(10)]);
var inst_35420 = (function (){var cs = inst_35406;
var vec__35411 = inst_35415;
var v = inst_35416;
var c = inst_35417;
return (function (p1__35402_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35402_SHARP_);
});
})();
var inst_35422 = cljs.core.filterv(inst_35420,inst_35406);
var inst_35406__$1 = inst_35422;
var state_35438__$1 = (function (){var statearr_35466 = state_35438;
(statearr_35466[(10)] = inst_35406__$1);

return statearr_35466;
})();
var statearr_35467_37059 = state_35438__$1;
(statearr_35467_37059[(2)] = null);

(statearr_35467_37059[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__33409__auto__ = null;
var cljs$core$async$state_machine__33409__auto____0 = (function (){
var statearr_35468 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35468[(0)] = cljs$core$async$state_machine__33409__auto__);

(statearr_35468[(1)] = (1));

return statearr_35468;
});
var cljs$core$async$state_machine__33409__auto____1 = (function (state_35438){
while(true){
var ret_value__33410__auto__ = (function (){try{while(true){
var result__33411__auto__ = switch__33408__auto__(state_35438);
if(cljs.core.keyword_identical_QMARK_(result__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33411__auto__;
}
break;
}
}catch (e35469){var ex__33412__auto__ = e35469;
var statearr_35470_37060 = state_35438;
(statearr_35470_37060[(2)] = ex__33412__auto__);


if(cljs.core.seq((state_35438[(4)]))){
var statearr_35471_37061 = state_35438;
(statearr_35471_37061[(1)] = cljs.core.first((state_35438[(4)])));

} else {
throw ex__33412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37062 = state_35438;
state_35438 = G__37062;
continue;
} else {
return ret_value__33410__auto__;
}
break;
}
});
cljs$core$async$state_machine__33409__auto__ = function(state_35438){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33409__auto____1.call(this,state_35438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33409__auto____0;
cljs$core$async$state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33409__auto____1;
return cljs$core$async$state_machine__33409__auto__;
})()
})();
var state__33549__auto__ = (function (){var statearr_35472 = f__33548__auto__();
(statearr_35472[(6)] = c__33547__auto___37031);

return statearr_35472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33549__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__35474 = arguments.length;
switch (G__35474) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33547__auto___37064 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33548__auto__ = (function (){var switch__33408__auto__ = (function (state_35500){
var state_val_35501 = (state_35500[(1)]);
if((state_val_35501 === (7))){
var inst_35482 = (state_35500[(7)]);
var inst_35482__$1 = (state_35500[(2)]);
var inst_35483 = (inst_35482__$1 == null);
var inst_35484 = cljs.core.not(inst_35483);
var state_35500__$1 = (function (){var statearr_35502 = state_35500;
(statearr_35502[(7)] = inst_35482__$1);

return statearr_35502;
})();
if(inst_35484){
var statearr_35503_37065 = state_35500__$1;
(statearr_35503_37065[(1)] = (8));

} else {
var statearr_35504_37066 = state_35500__$1;
(statearr_35504_37066[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35501 === (1))){
var inst_35477 = (0);
var state_35500__$1 = (function (){var statearr_35505 = state_35500;
(statearr_35505[(8)] = inst_35477);

return statearr_35505;
})();
var statearr_35506_37067 = state_35500__$1;
(statearr_35506_37067[(2)] = null);

(statearr_35506_37067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35501 === (4))){
var state_35500__$1 = state_35500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35500__$1,(7),ch);
} else {
if((state_val_35501 === (6))){
var inst_35495 = (state_35500[(2)]);
var state_35500__$1 = state_35500;
var statearr_35507_37069 = state_35500__$1;
(statearr_35507_37069[(2)] = inst_35495);

(statearr_35507_37069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35501 === (3))){
var inst_35497 = (state_35500[(2)]);
var inst_35498 = cljs.core.async.close_BANG_(out);
var state_35500__$1 = (function (){var statearr_35515 = state_35500;
(statearr_35515[(9)] = inst_35497);

return statearr_35515;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35500__$1,inst_35498);
} else {
if((state_val_35501 === (2))){
var inst_35477 = (state_35500[(8)]);
var inst_35479 = (inst_35477 < n);
var state_35500__$1 = state_35500;
if(cljs.core.truth_(inst_35479)){
var statearr_35517_37070 = state_35500__$1;
(statearr_35517_37070[(1)] = (4));

} else {
var statearr_35518_37072 = state_35500__$1;
(statearr_35518_37072[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35501 === (11))){
var inst_35477 = (state_35500[(8)]);
var inst_35487 = (state_35500[(2)]);
var inst_35488 = (inst_35477 + (1));
var inst_35477__$1 = inst_35488;
var state_35500__$1 = (function (){var statearr_35519 = state_35500;
(statearr_35519[(8)] = inst_35477__$1);

(statearr_35519[(10)] = inst_35487);

return statearr_35519;
})();
var statearr_35520_37073 = state_35500__$1;
(statearr_35520_37073[(2)] = null);

(statearr_35520_37073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35501 === (9))){
var state_35500__$1 = state_35500;
var statearr_35521_37074 = state_35500__$1;
(statearr_35521_37074[(2)] = null);

(statearr_35521_37074[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35501 === (5))){
var state_35500__$1 = state_35500;
var statearr_35531_37075 = state_35500__$1;
(statearr_35531_37075[(2)] = null);

(statearr_35531_37075[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35501 === (10))){
var inst_35492 = (state_35500[(2)]);
var state_35500__$1 = state_35500;
var statearr_35532_37076 = state_35500__$1;
(statearr_35532_37076[(2)] = inst_35492);

(statearr_35532_37076[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35501 === (8))){
var inst_35482 = (state_35500[(7)]);
var state_35500__$1 = state_35500;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35500__$1,(11),out,inst_35482);
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
});
return (function() {
var cljs$core$async$state_machine__33409__auto__ = null;
var cljs$core$async$state_machine__33409__auto____0 = (function (){
var statearr_35533 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35533[(0)] = cljs$core$async$state_machine__33409__auto__);

(statearr_35533[(1)] = (1));

return statearr_35533;
});
var cljs$core$async$state_machine__33409__auto____1 = (function (state_35500){
while(true){
var ret_value__33410__auto__ = (function (){try{while(true){
var result__33411__auto__ = switch__33408__auto__(state_35500);
if(cljs.core.keyword_identical_QMARK_(result__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33411__auto__;
}
break;
}
}catch (e35534){var ex__33412__auto__ = e35534;
var statearr_35535_37077 = state_35500;
(statearr_35535_37077[(2)] = ex__33412__auto__);


if(cljs.core.seq((state_35500[(4)]))){
var statearr_35536_37078 = state_35500;
(statearr_35536_37078[(1)] = cljs.core.first((state_35500[(4)])));

} else {
throw ex__33412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37079 = state_35500;
state_35500 = G__37079;
continue;
} else {
return ret_value__33410__auto__;
}
break;
}
});
cljs$core$async$state_machine__33409__auto__ = function(state_35500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33409__auto____1.call(this,state_35500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33409__auto____0;
cljs$core$async$state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33409__auto____1;
return cljs$core$async$state_machine__33409__auto__;
})()
})();
var state__33549__auto__ = (function (){var statearr_35537 = f__33548__auto__();
(statearr_35537[(6)] = c__33547__auto___37064);

return statearr_35537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33549__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35554 = (function (f,ch,meta35540,_,fn1,meta35555){
this.f = f;
this.ch = ch;
this.meta35540 = meta35540;
this._ = _;
this.fn1 = fn1;
this.meta35555 = meta35555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35556,meta35555__$1){
var self__ = this;
var _35556__$1 = this;
return (new cljs.core.async.t_cljs$core$async35554(self__.f,self__.ch,self__.meta35540,self__._,self__.fn1,meta35555__$1));
}));

(cljs.core.async.t_cljs$core$async35554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35556){
var self__ = this;
var _35556__$1 = this;
return self__.meta35555;
}));

(cljs.core.async.t_cljs$core$async35554.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35554.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async35554.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35554.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__35538_SHARP_){
var G__35557 = (((p1__35538_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35538_SHARP_) : self__.f.call(null,p1__35538_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35557) : f1.call(null,G__35557));
});
}));

(cljs.core.async.t_cljs$core$async35554.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35540","meta35540",-2076741831,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35539","cljs.core.async/t_cljs$core$async35539",1270689068,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35555","meta35555",458759673,null)], null);
}));

(cljs.core.async.t_cljs$core$async35554.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35554.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35554");

(cljs.core.async.t_cljs$core$async35554.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35554");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35554.
 */
cljs.core.async.__GT_t_cljs$core$async35554 = (function cljs$core$async$__GT_t_cljs$core$async35554(f,ch,meta35540,_,fn1,meta35555){
return (new cljs.core.async.t_cljs$core$async35554(f,ch,meta35540,_,fn1,meta35555));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35539 = (function (f,ch,meta35540){
this.f = f;
this.ch = ch;
this.meta35540 = meta35540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35541,meta35540__$1){
var self__ = this;
var _35541__$1 = this;
return (new cljs.core.async.t_cljs$core$async35539(self__.f,self__.ch,meta35540__$1));
}));

(cljs.core.async.t_cljs$core$async35539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35541){
var self__ = this;
var _35541__$1 = this;
return self__.meta35540;
}));

(cljs.core.async.t_cljs$core$async35539.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35539.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35539.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35539.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35539.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async35554(self__.f,self__.ch,self__.meta35540,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35566 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35566) : self__.f.call(null,G__35566));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async35539.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35539.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async35539.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35540","meta35540",-2076741831,null)], null);
}));

(cljs.core.async.t_cljs$core$async35539.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35539.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35539");

(cljs.core.async.t_cljs$core$async35539.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35539");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35539.
 */
cljs.core.async.__GT_t_cljs$core$async35539 = (function cljs$core$async$__GT_t_cljs$core$async35539(f,ch,meta35540){
return (new cljs.core.async.t_cljs$core$async35539(f,ch,meta35540));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async35539(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35571 = (function (f,ch,meta35572){
this.f = f;
this.ch = ch;
this.meta35572 = meta35572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35573,meta35572__$1){
var self__ = this;
var _35573__$1 = this;
return (new cljs.core.async.t_cljs$core$async35571(self__.f,self__.ch,meta35572__$1));
}));

(cljs.core.async.t_cljs$core$async35571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35573){
var self__ = this;
var _35573__$1 = this;
return self__.meta35572;
}));

(cljs.core.async.t_cljs$core$async35571.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35571.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35571.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35571.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35571.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35571.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async35571.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35572","meta35572",139752229,null)], null);
}));

(cljs.core.async.t_cljs$core$async35571.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35571");

(cljs.core.async.t_cljs$core$async35571.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35571");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35571.
 */
cljs.core.async.__GT_t_cljs$core$async35571 = (function cljs$core$async$__GT_t_cljs$core$async35571(f,ch,meta35572){
return (new cljs.core.async.t_cljs$core$async35571(f,ch,meta35572));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async35571(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35575 = (function (p,ch,meta35576){
this.p = p;
this.ch = ch;
this.meta35576 = meta35576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35577,meta35576__$1){
var self__ = this;
var _35577__$1 = this;
return (new cljs.core.async.t_cljs$core$async35575(self__.p,self__.ch,meta35576__$1));
}));

(cljs.core.async.t_cljs$core$async35575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35577){
var self__ = this;
var _35577__$1 = this;
return self__.meta35576;
}));

(cljs.core.async.t_cljs$core$async35575.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35575.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35575.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35575.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35575.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35575.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35575.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async35575.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35576","meta35576",454693793,null)], null);
}));

(cljs.core.async.t_cljs$core$async35575.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35575");

(cljs.core.async.t_cljs$core$async35575.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35575");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35575.
 */
cljs.core.async.__GT_t_cljs$core$async35575 = (function cljs$core$async$__GT_t_cljs$core$async35575(p,ch,meta35576){
return (new cljs.core.async.t_cljs$core$async35575(p,ch,meta35576));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async35575(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__35593 = arguments.length;
switch (G__35593) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33547__auto___37087 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33548__auto__ = (function (){var switch__33408__auto__ = (function (state_35614){
var state_val_35615 = (state_35614[(1)]);
if((state_val_35615 === (7))){
var inst_35610 = (state_35614[(2)]);
var state_35614__$1 = state_35614;
var statearr_35616_37088 = state_35614__$1;
(statearr_35616_37088[(2)] = inst_35610);

(statearr_35616_37088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35615 === (1))){
var state_35614__$1 = state_35614;
var statearr_35621_37089 = state_35614__$1;
(statearr_35621_37089[(2)] = null);

(statearr_35621_37089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35615 === (4))){
var inst_35596 = (state_35614[(7)]);
var inst_35596__$1 = (state_35614[(2)]);
var inst_35597 = (inst_35596__$1 == null);
var state_35614__$1 = (function (){var statearr_35622 = state_35614;
(statearr_35622[(7)] = inst_35596__$1);

return statearr_35622;
})();
if(cljs.core.truth_(inst_35597)){
var statearr_35623_37090 = state_35614__$1;
(statearr_35623_37090[(1)] = (5));

} else {
var statearr_35624_37091 = state_35614__$1;
(statearr_35624_37091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35615 === (6))){
var inst_35596 = (state_35614[(7)]);
var inst_35601 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35596) : p.call(null,inst_35596));
var state_35614__$1 = state_35614;
if(cljs.core.truth_(inst_35601)){
var statearr_35626_37093 = state_35614__$1;
(statearr_35626_37093[(1)] = (8));

} else {
var statearr_35627_37094 = state_35614__$1;
(statearr_35627_37094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35615 === (3))){
var inst_35612 = (state_35614[(2)]);
var state_35614__$1 = state_35614;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35614__$1,inst_35612);
} else {
if((state_val_35615 === (2))){
var state_35614__$1 = state_35614;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35614__$1,(4),ch);
} else {
if((state_val_35615 === (11))){
var inst_35604 = (state_35614[(2)]);
var state_35614__$1 = state_35614;
var statearr_35628_37098 = state_35614__$1;
(statearr_35628_37098[(2)] = inst_35604);

(statearr_35628_37098[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35615 === (9))){
var state_35614__$1 = state_35614;
var statearr_35635_37099 = state_35614__$1;
(statearr_35635_37099[(2)] = null);

(statearr_35635_37099[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35615 === (5))){
var inst_35599 = cljs.core.async.close_BANG_(out);
var state_35614__$1 = state_35614;
var statearr_35636_37100 = state_35614__$1;
(statearr_35636_37100[(2)] = inst_35599);

(statearr_35636_37100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35615 === (10))){
var inst_35607 = (state_35614[(2)]);
var state_35614__$1 = (function (){var statearr_35640 = state_35614;
(statearr_35640[(8)] = inst_35607);

return statearr_35640;
})();
var statearr_35641_37101 = state_35614__$1;
(statearr_35641_37101[(2)] = null);

(statearr_35641_37101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35615 === (8))){
var inst_35596 = (state_35614[(7)]);
var state_35614__$1 = state_35614;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35614__$1,(11),out,inst_35596);
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
});
return (function() {
var cljs$core$async$state_machine__33409__auto__ = null;
var cljs$core$async$state_machine__33409__auto____0 = (function (){
var statearr_35646 = [null,null,null,null,null,null,null,null,null];
(statearr_35646[(0)] = cljs$core$async$state_machine__33409__auto__);

(statearr_35646[(1)] = (1));

return statearr_35646;
});
var cljs$core$async$state_machine__33409__auto____1 = (function (state_35614){
while(true){
var ret_value__33410__auto__ = (function (){try{while(true){
var result__33411__auto__ = switch__33408__auto__(state_35614);
if(cljs.core.keyword_identical_QMARK_(result__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33411__auto__;
}
break;
}
}catch (e35647){var ex__33412__auto__ = e35647;
var statearr_35648_37102 = state_35614;
(statearr_35648_37102[(2)] = ex__33412__auto__);


if(cljs.core.seq((state_35614[(4)]))){
var statearr_35649_37103 = state_35614;
(statearr_35649_37103[(1)] = cljs.core.first((state_35614[(4)])));

} else {
throw ex__33412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37104 = state_35614;
state_35614 = G__37104;
continue;
} else {
return ret_value__33410__auto__;
}
break;
}
});
cljs$core$async$state_machine__33409__auto__ = function(state_35614){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33409__auto____1.call(this,state_35614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33409__auto____0;
cljs$core$async$state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33409__auto____1;
return cljs$core$async$state_machine__33409__auto__;
})()
})();
var state__33549__auto__ = (function (){var statearr_35650 = f__33548__auto__();
(statearr_35650[(6)] = c__33547__auto___37087);

return statearr_35650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33549__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35658 = arguments.length;
switch (G__35658) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33547__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33548__auto__ = (function (){var switch__33408__auto__ = (function (state_35720){
var state_val_35721 = (state_35720[(1)]);
if((state_val_35721 === (7))){
var inst_35716 = (state_35720[(2)]);
var state_35720__$1 = state_35720;
var statearr_35728_37106 = state_35720__$1;
(statearr_35728_37106[(2)] = inst_35716);

(statearr_35728_37106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (20))){
var inst_35686 = (state_35720[(7)]);
var inst_35697 = (state_35720[(2)]);
var inst_35698 = cljs.core.next(inst_35686);
var inst_35672 = inst_35698;
var inst_35673 = null;
var inst_35674 = (0);
var inst_35675 = (0);
var state_35720__$1 = (function (){var statearr_35730 = state_35720;
(statearr_35730[(8)] = inst_35673);

(statearr_35730[(9)] = inst_35674);

(statearr_35730[(10)] = inst_35697);

(statearr_35730[(11)] = inst_35675);

(statearr_35730[(12)] = inst_35672);

return statearr_35730;
})();
var statearr_35732_37107 = state_35720__$1;
(statearr_35732_37107[(2)] = null);

(statearr_35732_37107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (1))){
var state_35720__$1 = state_35720;
var statearr_35733_37108 = state_35720__$1;
(statearr_35733_37108[(2)] = null);

(statearr_35733_37108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (4))){
var inst_35661 = (state_35720[(13)]);
var inst_35661__$1 = (state_35720[(2)]);
var inst_35662 = (inst_35661__$1 == null);
var state_35720__$1 = (function (){var statearr_35734 = state_35720;
(statearr_35734[(13)] = inst_35661__$1);

return statearr_35734;
})();
if(cljs.core.truth_(inst_35662)){
var statearr_35735_37109 = state_35720__$1;
(statearr_35735_37109[(1)] = (5));

} else {
var statearr_35736_37110 = state_35720__$1;
(statearr_35736_37110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (15))){
var state_35720__$1 = state_35720;
var statearr_35745_37111 = state_35720__$1;
(statearr_35745_37111[(2)] = null);

(statearr_35745_37111[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (21))){
var state_35720__$1 = state_35720;
var statearr_35751_37112 = state_35720__$1;
(statearr_35751_37112[(2)] = null);

(statearr_35751_37112[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (13))){
var inst_35673 = (state_35720[(8)]);
var inst_35674 = (state_35720[(9)]);
var inst_35675 = (state_35720[(11)]);
var inst_35672 = (state_35720[(12)]);
var inst_35682 = (state_35720[(2)]);
var inst_35683 = (inst_35675 + (1));
var tmp35737 = inst_35673;
var tmp35738 = inst_35674;
var tmp35739 = inst_35672;
var inst_35672__$1 = tmp35739;
var inst_35673__$1 = tmp35737;
var inst_35674__$1 = tmp35738;
var inst_35675__$1 = inst_35683;
var state_35720__$1 = (function (){var statearr_35752 = state_35720;
(statearr_35752[(8)] = inst_35673__$1);

(statearr_35752[(14)] = inst_35682);

(statearr_35752[(9)] = inst_35674__$1);

(statearr_35752[(11)] = inst_35675__$1);

(statearr_35752[(12)] = inst_35672__$1);

return statearr_35752;
})();
var statearr_35753_37113 = state_35720__$1;
(statearr_35753_37113[(2)] = null);

(statearr_35753_37113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (22))){
var state_35720__$1 = state_35720;
var statearr_35754_37114 = state_35720__$1;
(statearr_35754_37114[(2)] = null);

(statearr_35754_37114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (6))){
var inst_35661 = (state_35720[(13)]);
var inst_35670 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35661) : f.call(null,inst_35661));
var inst_35671 = cljs.core.seq(inst_35670);
var inst_35672 = inst_35671;
var inst_35673 = null;
var inst_35674 = (0);
var inst_35675 = (0);
var state_35720__$1 = (function (){var statearr_35755 = state_35720;
(statearr_35755[(8)] = inst_35673);

(statearr_35755[(9)] = inst_35674);

(statearr_35755[(11)] = inst_35675);

(statearr_35755[(12)] = inst_35672);

return statearr_35755;
})();
var statearr_35756_37115 = state_35720__$1;
(statearr_35756_37115[(2)] = null);

(statearr_35756_37115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (17))){
var inst_35686 = (state_35720[(7)]);
var inst_35690 = cljs.core.chunk_first(inst_35686);
var inst_35691 = cljs.core.chunk_rest(inst_35686);
var inst_35692 = cljs.core.count(inst_35690);
var inst_35672 = inst_35691;
var inst_35673 = inst_35690;
var inst_35674 = inst_35692;
var inst_35675 = (0);
var state_35720__$1 = (function (){var statearr_35757 = state_35720;
(statearr_35757[(8)] = inst_35673);

(statearr_35757[(9)] = inst_35674);

(statearr_35757[(11)] = inst_35675);

(statearr_35757[(12)] = inst_35672);

return statearr_35757;
})();
var statearr_35758_37116 = state_35720__$1;
(statearr_35758_37116[(2)] = null);

(statearr_35758_37116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (3))){
var inst_35718 = (state_35720[(2)]);
var state_35720__$1 = state_35720;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35720__$1,inst_35718);
} else {
if((state_val_35721 === (12))){
var inst_35706 = (state_35720[(2)]);
var state_35720__$1 = state_35720;
var statearr_35759_37117 = state_35720__$1;
(statearr_35759_37117[(2)] = inst_35706);

(statearr_35759_37117[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (2))){
var state_35720__$1 = state_35720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35720__$1,(4),in$);
} else {
if((state_val_35721 === (23))){
var inst_35714 = (state_35720[(2)]);
var state_35720__$1 = state_35720;
var statearr_35761_37118 = state_35720__$1;
(statearr_35761_37118[(2)] = inst_35714);

(statearr_35761_37118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (19))){
var inst_35701 = (state_35720[(2)]);
var state_35720__$1 = state_35720;
var statearr_35762_37119 = state_35720__$1;
(statearr_35762_37119[(2)] = inst_35701);

(statearr_35762_37119[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (11))){
var inst_35686 = (state_35720[(7)]);
var inst_35672 = (state_35720[(12)]);
var inst_35686__$1 = cljs.core.seq(inst_35672);
var state_35720__$1 = (function (){var statearr_35764 = state_35720;
(statearr_35764[(7)] = inst_35686__$1);

return statearr_35764;
})();
if(inst_35686__$1){
var statearr_35765_37120 = state_35720__$1;
(statearr_35765_37120[(1)] = (14));

} else {
var statearr_35766_37121 = state_35720__$1;
(statearr_35766_37121[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (9))){
var inst_35708 = (state_35720[(2)]);
var inst_35709 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_35720__$1 = (function (){var statearr_35767 = state_35720;
(statearr_35767[(15)] = inst_35708);

return statearr_35767;
})();
if(cljs.core.truth_(inst_35709)){
var statearr_35773_37122 = state_35720__$1;
(statearr_35773_37122[(1)] = (21));

} else {
var statearr_35774_37123 = state_35720__$1;
(statearr_35774_37123[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (5))){
var inst_35664 = cljs.core.async.close_BANG_(out);
var state_35720__$1 = state_35720;
var statearr_35775_37124 = state_35720__$1;
(statearr_35775_37124[(2)] = inst_35664);

(statearr_35775_37124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (14))){
var inst_35686 = (state_35720[(7)]);
var inst_35688 = cljs.core.chunked_seq_QMARK_(inst_35686);
var state_35720__$1 = state_35720;
if(inst_35688){
var statearr_35776_37125 = state_35720__$1;
(statearr_35776_37125[(1)] = (17));

} else {
var statearr_35777_37126 = state_35720__$1;
(statearr_35777_37126[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (16))){
var inst_35704 = (state_35720[(2)]);
var state_35720__$1 = state_35720;
var statearr_35778_37127 = state_35720__$1;
(statearr_35778_37127[(2)] = inst_35704);

(statearr_35778_37127[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (10))){
var inst_35673 = (state_35720[(8)]);
var inst_35675 = (state_35720[(11)]);
var inst_35680 = cljs.core._nth(inst_35673,inst_35675);
var state_35720__$1 = state_35720;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35720__$1,(13),out,inst_35680);
} else {
if((state_val_35721 === (18))){
var inst_35686 = (state_35720[(7)]);
var inst_35695 = cljs.core.first(inst_35686);
var state_35720__$1 = state_35720;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35720__$1,(20),out,inst_35695);
} else {
if((state_val_35721 === (8))){
var inst_35674 = (state_35720[(9)]);
var inst_35675 = (state_35720[(11)]);
var inst_35677 = (inst_35675 < inst_35674);
var inst_35678 = inst_35677;
var state_35720__$1 = state_35720;
if(cljs.core.truth_(inst_35678)){
var statearr_35783_37128 = state_35720__$1;
(statearr_35783_37128[(1)] = (10));

} else {
var statearr_35784_37129 = state_35720__$1;
(statearr_35784_37129[(1)] = (11));

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
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33409__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33409__auto____0 = (function (){
var statearr_35785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35785[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33409__auto__);

(statearr_35785[(1)] = (1));

return statearr_35785;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33409__auto____1 = (function (state_35720){
while(true){
var ret_value__33410__auto__ = (function (){try{while(true){
var result__33411__auto__ = switch__33408__auto__(state_35720);
if(cljs.core.keyword_identical_QMARK_(result__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33411__auto__;
}
break;
}
}catch (e35786){var ex__33412__auto__ = e35786;
var statearr_35791_37130 = state_35720;
(statearr_35791_37130[(2)] = ex__33412__auto__);


if(cljs.core.seq((state_35720[(4)]))){
var statearr_35798_37131 = state_35720;
(statearr_35798_37131[(1)] = cljs.core.first((state_35720[(4)])));

} else {
throw ex__33412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37132 = state_35720;
state_35720 = G__37132;
continue;
} else {
return ret_value__33410__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33409__auto__ = function(state_35720){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33409__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33409__auto____1.call(this,state_35720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33409__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33409__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33409__auto__;
})()
})();
var state__33549__auto__ = (function (){var statearr_35799 = f__33548__auto__();
(statearr_35799[(6)] = c__33547__auto__);

return statearr_35799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33549__auto__);
}));

return c__33547__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35801 = arguments.length;
switch (G__35801) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__35806 = arguments.length;
switch (G__35806) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__35808 = arguments.length;
switch (G__35808) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33547__auto___37137 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33548__auto__ = (function (){var switch__33408__auto__ = (function (state_35832){
var state_val_35833 = (state_35832[(1)]);
if((state_val_35833 === (7))){
var inst_35827 = (state_35832[(2)]);
var state_35832__$1 = state_35832;
var statearr_35834_37138 = state_35832__$1;
(statearr_35834_37138[(2)] = inst_35827);

(statearr_35834_37138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35833 === (1))){
var inst_35809 = null;
var state_35832__$1 = (function (){var statearr_35835 = state_35832;
(statearr_35835[(7)] = inst_35809);

return statearr_35835;
})();
var statearr_35836_37139 = state_35832__$1;
(statearr_35836_37139[(2)] = null);

(statearr_35836_37139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35833 === (4))){
var inst_35812 = (state_35832[(8)]);
var inst_35812__$1 = (state_35832[(2)]);
var inst_35813 = (inst_35812__$1 == null);
var inst_35814 = cljs.core.not(inst_35813);
var state_35832__$1 = (function (){var statearr_35837 = state_35832;
(statearr_35837[(8)] = inst_35812__$1);

return statearr_35837;
})();
if(inst_35814){
var statearr_35839_37143 = state_35832__$1;
(statearr_35839_37143[(1)] = (5));

} else {
var statearr_35840_37144 = state_35832__$1;
(statearr_35840_37144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35833 === (6))){
var state_35832__$1 = state_35832;
var statearr_35841_37145 = state_35832__$1;
(statearr_35841_37145[(2)] = null);

(statearr_35841_37145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35833 === (3))){
var inst_35829 = (state_35832[(2)]);
var inst_35830 = cljs.core.async.close_BANG_(out);
var state_35832__$1 = (function (){var statearr_35842 = state_35832;
(statearr_35842[(9)] = inst_35829);

return statearr_35842;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35832__$1,inst_35830);
} else {
if((state_val_35833 === (2))){
var state_35832__$1 = state_35832;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35832__$1,(4),ch);
} else {
if((state_val_35833 === (11))){
var inst_35812 = (state_35832[(8)]);
var inst_35821 = (state_35832[(2)]);
var inst_35809 = inst_35812;
var state_35832__$1 = (function (){var statearr_35846 = state_35832;
(statearr_35846[(10)] = inst_35821);

(statearr_35846[(7)] = inst_35809);

return statearr_35846;
})();
var statearr_35847_37146 = state_35832__$1;
(statearr_35847_37146[(2)] = null);

(statearr_35847_37146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35833 === (9))){
var inst_35812 = (state_35832[(8)]);
var state_35832__$1 = state_35832;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35832__$1,(11),out,inst_35812);
} else {
if((state_val_35833 === (5))){
var inst_35809 = (state_35832[(7)]);
var inst_35812 = (state_35832[(8)]);
var inst_35816 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35812,inst_35809);
var state_35832__$1 = state_35832;
if(inst_35816){
var statearr_35849_37147 = state_35832__$1;
(statearr_35849_37147[(1)] = (8));

} else {
var statearr_35850_37148 = state_35832__$1;
(statearr_35850_37148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35833 === (10))){
var inst_35824 = (state_35832[(2)]);
var state_35832__$1 = state_35832;
var statearr_35854_37149 = state_35832__$1;
(statearr_35854_37149[(2)] = inst_35824);

(statearr_35854_37149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35833 === (8))){
var inst_35809 = (state_35832[(7)]);
var tmp35848 = inst_35809;
var inst_35809__$1 = tmp35848;
var state_35832__$1 = (function (){var statearr_35855 = state_35832;
(statearr_35855[(7)] = inst_35809__$1);

return statearr_35855;
})();
var statearr_35856_37150 = state_35832__$1;
(statearr_35856_37150[(2)] = null);

(statearr_35856_37150[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__33409__auto__ = null;
var cljs$core$async$state_machine__33409__auto____0 = (function (){
var statearr_35857 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35857[(0)] = cljs$core$async$state_machine__33409__auto__);

(statearr_35857[(1)] = (1));

return statearr_35857;
});
var cljs$core$async$state_machine__33409__auto____1 = (function (state_35832){
while(true){
var ret_value__33410__auto__ = (function (){try{while(true){
var result__33411__auto__ = switch__33408__auto__(state_35832);
if(cljs.core.keyword_identical_QMARK_(result__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33411__auto__;
}
break;
}
}catch (e35858){var ex__33412__auto__ = e35858;
var statearr_35859_37151 = state_35832;
(statearr_35859_37151[(2)] = ex__33412__auto__);


if(cljs.core.seq((state_35832[(4)]))){
var statearr_35860_37152 = state_35832;
(statearr_35860_37152[(1)] = cljs.core.first((state_35832[(4)])));

} else {
throw ex__33412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37153 = state_35832;
state_35832 = G__37153;
continue;
} else {
return ret_value__33410__auto__;
}
break;
}
});
cljs$core$async$state_machine__33409__auto__ = function(state_35832){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33409__auto____1.call(this,state_35832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33409__auto____0;
cljs$core$async$state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33409__auto____1;
return cljs$core$async$state_machine__33409__auto__;
})()
})();
var state__33549__auto__ = (function (){var statearr_35861 = f__33548__auto__();
(statearr_35861[(6)] = c__33547__auto___37137);

return statearr_35861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33549__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35864 = arguments.length;
switch (G__35864) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33547__auto___37156 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33548__auto__ = (function (){var switch__33408__auto__ = (function (state_35906){
var state_val_35907 = (state_35906[(1)]);
if((state_val_35907 === (7))){
var inst_35902 = (state_35906[(2)]);
var state_35906__$1 = state_35906;
var statearr_35912_37157 = state_35906__$1;
(statearr_35912_37157[(2)] = inst_35902);

(statearr_35912_37157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35907 === (1))){
var inst_35865 = (new Array(n));
var inst_35866 = inst_35865;
var inst_35867 = (0);
var state_35906__$1 = (function (){var statearr_35913 = state_35906;
(statearr_35913[(7)] = inst_35867);

(statearr_35913[(8)] = inst_35866);

return statearr_35913;
})();
var statearr_35914_37158 = state_35906__$1;
(statearr_35914_37158[(2)] = null);

(statearr_35914_37158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35907 === (4))){
var inst_35870 = (state_35906[(9)]);
var inst_35870__$1 = (state_35906[(2)]);
var inst_35871 = (inst_35870__$1 == null);
var inst_35872 = cljs.core.not(inst_35871);
var state_35906__$1 = (function (){var statearr_35915 = state_35906;
(statearr_35915[(9)] = inst_35870__$1);

return statearr_35915;
})();
if(inst_35872){
var statearr_35916_37159 = state_35906__$1;
(statearr_35916_37159[(1)] = (5));

} else {
var statearr_35917_37160 = state_35906__$1;
(statearr_35917_37160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35907 === (15))){
var inst_35896 = (state_35906[(2)]);
var state_35906__$1 = state_35906;
var statearr_35918_37161 = state_35906__$1;
(statearr_35918_37161[(2)] = inst_35896);

(statearr_35918_37161[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35907 === (13))){
var state_35906__$1 = state_35906;
var statearr_35919_37162 = state_35906__$1;
(statearr_35919_37162[(2)] = null);

(statearr_35919_37162[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35907 === (6))){
var inst_35867 = (state_35906[(7)]);
var inst_35892 = (inst_35867 > (0));
var state_35906__$1 = state_35906;
if(cljs.core.truth_(inst_35892)){
var statearr_35920_37163 = state_35906__$1;
(statearr_35920_37163[(1)] = (12));

} else {
var statearr_35921_37164 = state_35906__$1;
(statearr_35921_37164[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35907 === (3))){
var inst_35904 = (state_35906[(2)]);
var state_35906__$1 = state_35906;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35906__$1,inst_35904);
} else {
if((state_val_35907 === (12))){
var inst_35866 = (state_35906[(8)]);
var inst_35894 = cljs.core.vec(inst_35866);
var state_35906__$1 = state_35906;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35906__$1,(15),out,inst_35894);
} else {
if((state_val_35907 === (2))){
var state_35906__$1 = state_35906;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35906__$1,(4),ch);
} else {
if((state_val_35907 === (11))){
var inst_35882 = (state_35906[(2)]);
var inst_35887 = (new Array(n));
var inst_35866 = inst_35887;
var inst_35867 = (0);
var state_35906__$1 = (function (){var statearr_35922 = state_35906;
(statearr_35922[(7)] = inst_35867);

(statearr_35922[(10)] = inst_35882);

(statearr_35922[(8)] = inst_35866);

return statearr_35922;
})();
var statearr_35923_37165 = state_35906__$1;
(statearr_35923_37165[(2)] = null);

(statearr_35923_37165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35907 === (9))){
var inst_35866 = (state_35906[(8)]);
var inst_35880 = cljs.core.vec(inst_35866);
var state_35906__$1 = state_35906;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35906__$1,(11),out,inst_35880);
} else {
if((state_val_35907 === (5))){
var inst_35867 = (state_35906[(7)]);
var inst_35875 = (state_35906[(11)]);
var inst_35866 = (state_35906[(8)]);
var inst_35870 = (state_35906[(9)]);
var inst_35874 = (inst_35866[inst_35867] = inst_35870);
var inst_35875__$1 = (inst_35867 + (1));
var inst_35876 = (inst_35875__$1 < n);
var state_35906__$1 = (function (){var statearr_35926 = state_35906;
(statearr_35926[(11)] = inst_35875__$1);

(statearr_35926[(12)] = inst_35874);

return statearr_35926;
})();
if(cljs.core.truth_(inst_35876)){
var statearr_35927_37166 = state_35906__$1;
(statearr_35927_37166[(1)] = (8));

} else {
var statearr_35928_37167 = state_35906__$1;
(statearr_35928_37167[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35907 === (14))){
var inst_35899 = (state_35906[(2)]);
var inst_35900 = cljs.core.async.close_BANG_(out);
var state_35906__$1 = (function (){var statearr_35930 = state_35906;
(statearr_35930[(13)] = inst_35899);

return statearr_35930;
})();
var statearr_35931_37168 = state_35906__$1;
(statearr_35931_37168[(2)] = inst_35900);

(statearr_35931_37168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35907 === (10))){
var inst_35890 = (state_35906[(2)]);
var state_35906__$1 = state_35906;
var statearr_35932_37169 = state_35906__$1;
(statearr_35932_37169[(2)] = inst_35890);

(statearr_35932_37169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35907 === (8))){
var inst_35875 = (state_35906[(11)]);
var inst_35866 = (state_35906[(8)]);
var tmp35929 = inst_35866;
var inst_35866__$1 = tmp35929;
var inst_35867 = inst_35875;
var state_35906__$1 = (function (){var statearr_35933 = state_35906;
(statearr_35933[(7)] = inst_35867);

(statearr_35933[(8)] = inst_35866__$1);

return statearr_35933;
})();
var statearr_35934_37170 = state_35906__$1;
(statearr_35934_37170[(2)] = null);

(statearr_35934_37170[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__33409__auto__ = null;
var cljs$core$async$state_machine__33409__auto____0 = (function (){
var statearr_35935 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35935[(0)] = cljs$core$async$state_machine__33409__auto__);

(statearr_35935[(1)] = (1));

return statearr_35935;
});
var cljs$core$async$state_machine__33409__auto____1 = (function (state_35906){
while(true){
var ret_value__33410__auto__ = (function (){try{while(true){
var result__33411__auto__ = switch__33408__auto__(state_35906);
if(cljs.core.keyword_identical_QMARK_(result__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33411__auto__;
}
break;
}
}catch (e35936){var ex__33412__auto__ = e35936;
var statearr_35937_37171 = state_35906;
(statearr_35937_37171[(2)] = ex__33412__auto__);


if(cljs.core.seq((state_35906[(4)]))){
var statearr_35938_37172 = state_35906;
(statearr_35938_37172[(1)] = cljs.core.first((state_35906[(4)])));

} else {
throw ex__33412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37183 = state_35906;
state_35906 = G__37183;
continue;
} else {
return ret_value__33410__auto__;
}
break;
}
});
cljs$core$async$state_machine__33409__auto__ = function(state_35906){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33409__auto____1.call(this,state_35906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33409__auto____0;
cljs$core$async$state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33409__auto____1;
return cljs$core$async$state_machine__33409__auto__;
})()
})();
var state__33549__auto__ = (function (){var statearr_35939 = f__33548__auto__();
(statearr_35939[(6)] = c__33547__auto___37156);

return statearr_35939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33549__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35941 = arguments.length;
switch (G__35941) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33547__auto___37185 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33548__auto__ = (function (){var switch__33408__auto__ = (function (state_35994){
var state_val_35995 = (state_35994[(1)]);
if((state_val_35995 === (7))){
var inst_35990 = (state_35994[(2)]);
var state_35994__$1 = state_35994;
var statearr_35996_37186 = state_35994__$1;
(statearr_35996_37186[(2)] = inst_35990);

(statearr_35996_37186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35995 === (1))){
var inst_35949 = [];
var inst_35950 = inst_35949;
var inst_35951 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35994__$1 = (function (){var statearr_35997 = state_35994;
(statearr_35997[(7)] = inst_35950);

(statearr_35997[(8)] = inst_35951);

return statearr_35997;
})();
var statearr_35998_37187 = state_35994__$1;
(statearr_35998_37187[(2)] = null);

(statearr_35998_37187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35995 === (4))){
var inst_35954 = (state_35994[(9)]);
var inst_35954__$1 = (state_35994[(2)]);
var inst_35955 = (inst_35954__$1 == null);
var inst_35956 = cljs.core.not(inst_35955);
var state_35994__$1 = (function (){var statearr_35999 = state_35994;
(statearr_35999[(9)] = inst_35954__$1);

return statearr_35999;
})();
if(inst_35956){
var statearr_36000_37188 = state_35994__$1;
(statearr_36000_37188[(1)] = (5));

} else {
var statearr_36001_37189 = state_35994__$1;
(statearr_36001_37189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35995 === (15))){
var inst_35950 = (state_35994[(7)]);
var inst_35982 = cljs.core.vec(inst_35950);
var state_35994__$1 = state_35994;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35994__$1,(18),out,inst_35982);
} else {
if((state_val_35995 === (13))){
var inst_35977 = (state_35994[(2)]);
var state_35994__$1 = state_35994;
var statearr_36002_37190 = state_35994__$1;
(statearr_36002_37190[(2)] = inst_35977);

(statearr_36002_37190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35995 === (6))){
var inst_35950 = (state_35994[(7)]);
var inst_35979 = inst_35950.length;
var inst_35980 = (inst_35979 > (0));
var state_35994__$1 = state_35994;
if(cljs.core.truth_(inst_35980)){
var statearr_36006_37191 = state_35994__$1;
(statearr_36006_37191[(1)] = (15));

} else {
var statearr_36007_37192 = state_35994__$1;
(statearr_36007_37192[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35995 === (17))){
var inst_35987 = (state_35994[(2)]);
var inst_35988 = cljs.core.async.close_BANG_(out);
var state_35994__$1 = (function (){var statearr_36008 = state_35994;
(statearr_36008[(10)] = inst_35987);

return statearr_36008;
})();
var statearr_36009_37193 = state_35994__$1;
(statearr_36009_37193[(2)] = inst_35988);

(statearr_36009_37193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35995 === (3))){
var inst_35992 = (state_35994[(2)]);
var state_35994__$1 = state_35994;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35994__$1,inst_35992);
} else {
if((state_val_35995 === (12))){
var inst_35950 = (state_35994[(7)]);
var inst_35970 = cljs.core.vec(inst_35950);
var state_35994__$1 = state_35994;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35994__$1,(14),out,inst_35970);
} else {
if((state_val_35995 === (2))){
var state_35994__$1 = state_35994;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35994__$1,(4),ch);
} else {
if((state_val_35995 === (11))){
var inst_35954 = (state_35994[(9)]);
var inst_35958 = (state_35994[(11)]);
var inst_35950 = (state_35994[(7)]);
var inst_35967 = inst_35950.push(inst_35954);
var tmp36010 = inst_35950;
var inst_35950__$1 = tmp36010;
var inst_35951 = inst_35958;
var state_35994__$1 = (function (){var statearr_36011 = state_35994;
(statearr_36011[(12)] = inst_35967);

(statearr_36011[(7)] = inst_35950__$1);

(statearr_36011[(8)] = inst_35951);

return statearr_36011;
})();
var statearr_36012_37194 = state_35994__$1;
(statearr_36012_37194[(2)] = null);

(statearr_36012_37194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35995 === (9))){
var inst_35951 = (state_35994[(8)]);
var inst_35963 = cljs.core.keyword_identical_QMARK_(inst_35951,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_35994__$1 = state_35994;
var statearr_36013_37195 = state_35994__$1;
(statearr_36013_37195[(2)] = inst_35963);

(statearr_36013_37195[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35995 === (5))){
var inst_35954 = (state_35994[(9)]);
var inst_35958 = (state_35994[(11)]);
var inst_35959 = (state_35994[(13)]);
var inst_35951 = (state_35994[(8)]);
var inst_35958__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35954) : f.call(null,inst_35954));
var inst_35959__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35958__$1,inst_35951);
var state_35994__$1 = (function (){var statearr_36014 = state_35994;
(statearr_36014[(11)] = inst_35958__$1);

(statearr_36014[(13)] = inst_35959__$1);

return statearr_36014;
})();
if(inst_35959__$1){
var statearr_36015_37196 = state_35994__$1;
(statearr_36015_37196[(1)] = (8));

} else {
var statearr_36016_37197 = state_35994__$1;
(statearr_36016_37197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35995 === (14))){
var inst_35954 = (state_35994[(9)]);
var inst_35958 = (state_35994[(11)]);
var inst_35972 = (state_35994[(2)]);
var inst_35973 = [];
var inst_35974 = inst_35973.push(inst_35954);
var inst_35950 = inst_35973;
var inst_35951 = inst_35958;
var state_35994__$1 = (function (){var statearr_36017 = state_35994;
(statearr_36017[(14)] = inst_35972);

(statearr_36017[(15)] = inst_35974);

(statearr_36017[(7)] = inst_35950);

(statearr_36017[(8)] = inst_35951);

return statearr_36017;
})();
var statearr_36018_37198 = state_35994__$1;
(statearr_36018_37198[(2)] = null);

(statearr_36018_37198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35995 === (16))){
var state_35994__$1 = state_35994;
var statearr_36019_37199 = state_35994__$1;
(statearr_36019_37199[(2)] = null);

(statearr_36019_37199[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35995 === (10))){
var inst_35965 = (state_35994[(2)]);
var state_35994__$1 = state_35994;
if(cljs.core.truth_(inst_35965)){
var statearr_36020_37200 = state_35994__$1;
(statearr_36020_37200[(1)] = (11));

} else {
var statearr_36021_37201 = state_35994__$1;
(statearr_36021_37201[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35995 === (18))){
var inst_35984 = (state_35994[(2)]);
var state_35994__$1 = state_35994;
var statearr_36022_37202 = state_35994__$1;
(statearr_36022_37202[(2)] = inst_35984);

(statearr_36022_37202[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35995 === (8))){
var inst_35959 = (state_35994[(13)]);
var state_35994__$1 = state_35994;
var statearr_36023_37203 = state_35994__$1;
(statearr_36023_37203[(2)] = inst_35959);

(statearr_36023_37203[(1)] = (10));


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
var cljs$core$async$state_machine__33409__auto__ = null;
var cljs$core$async$state_machine__33409__auto____0 = (function (){
var statearr_36024 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36024[(0)] = cljs$core$async$state_machine__33409__auto__);

(statearr_36024[(1)] = (1));

return statearr_36024;
});
var cljs$core$async$state_machine__33409__auto____1 = (function (state_35994){
while(true){
var ret_value__33410__auto__ = (function (){try{while(true){
var result__33411__auto__ = switch__33408__auto__(state_35994);
if(cljs.core.keyword_identical_QMARK_(result__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33411__auto__;
}
break;
}
}catch (e36025){var ex__33412__auto__ = e36025;
var statearr_36026_37204 = state_35994;
(statearr_36026_37204[(2)] = ex__33412__auto__);


if(cljs.core.seq((state_35994[(4)]))){
var statearr_36027_37205 = state_35994;
(statearr_36027_37205[(1)] = cljs.core.first((state_35994[(4)])));

} else {
throw ex__33412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37206 = state_35994;
state_35994 = G__37206;
continue;
} else {
return ret_value__33410__auto__;
}
break;
}
});
cljs$core$async$state_machine__33409__auto__ = function(state_35994){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33409__auto____1.call(this,state_35994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33409__auto____0;
cljs$core$async$state_machine__33409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33409__auto____1;
return cljs$core$async$state_machine__33409__auto__;
})()
})();
var state__33549__auto__ = (function (){var statearr_36028 = f__33548__auto__();
(statearr_36028[(6)] = c__33547__auto___37185);

return statearr_36028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33549__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
