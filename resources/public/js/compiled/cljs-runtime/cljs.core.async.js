goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__49571 = arguments.length;
switch (G__49571) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49572 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49572 = (function (f,blockable,meta49573){
this.f = f;
this.blockable = blockable;
this.meta49573 = meta49573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49574,meta49573__$1){
var self__ = this;
var _49574__$1 = this;
return (new cljs.core.async.t_cljs$core$async49572(self__.f,self__.blockable,meta49573__$1));
}));

(cljs.core.async.t_cljs$core$async49572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49574){
var self__ = this;
var _49574__$1 = this;
return self__.meta49573;
}));

(cljs.core.async.t_cljs$core$async49572.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49572.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49572.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async49572.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async49572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta49573","meta49573",-755996108,null)], null);
}));

(cljs.core.async.t_cljs$core$async49572.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49572");

(cljs.core.async.t_cljs$core$async49572.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async49572");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49572.
 */
cljs.core.async.__GT_t_cljs$core$async49572 = (function cljs$core$async$__GT_t_cljs$core$async49572(f__$1,blockable__$1,meta49573){
return (new cljs.core.async.t_cljs$core$async49572(f__$1,blockable__$1,meta49573));
});

}

return (new cljs.core.async.t_cljs$core$async49572(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__49577 = arguments.length;
switch (G__49577) {
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
var G__49579 = arguments.length;
switch (G__49579) {
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
var G__49581 = arguments.length;
switch (G__49581) {
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
var val_51017 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_51017) : fn1.call(null,val_51017));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_51017) : fn1.call(null,val_51017));
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
var G__49583 = arguments.length;
switch (G__49583) {
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
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
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
var n__4613__auto___51030 = n;
var x_51031 = (0);
while(true){
if((x_51031 < n__4613__auto___51030)){
(a[x_51031] = x_51031);

var G__51033 = (x_51031 + (1));
x_51031 = G__51033;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49584 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49584 = (function (flag,meta49585){
this.flag = flag;
this.meta49585 = meta49585;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49586,meta49585__$1){
var self__ = this;
var _49586__$1 = this;
return (new cljs.core.async.t_cljs$core$async49584(self__.flag,meta49585__$1));
}));

(cljs.core.async.t_cljs$core$async49584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49586){
var self__ = this;
var _49586__$1 = this;
return self__.meta49585;
}));

(cljs.core.async.t_cljs$core$async49584.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49584.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async49584.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49584.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async49584.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta49585","meta49585",-1008638570,null)], null);
}));

(cljs.core.async.t_cljs$core$async49584.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49584.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49584");

(cljs.core.async.t_cljs$core$async49584.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async49584");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49584.
 */
cljs.core.async.__GT_t_cljs$core$async49584 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async49584(flag__$1,meta49585){
return (new cljs.core.async.t_cljs$core$async49584(flag__$1,meta49585));
});

}

return (new cljs.core.async.t_cljs$core$async49584(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49587 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49587 = (function (flag,cb,meta49588){
this.flag = flag;
this.cb = cb;
this.meta49588 = meta49588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49589,meta49588__$1){
var self__ = this;
var _49589__$1 = this;
return (new cljs.core.async.t_cljs$core$async49587(self__.flag,self__.cb,meta49588__$1));
}));

(cljs.core.async.t_cljs$core$async49587.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49589){
var self__ = this;
var _49589__$1 = this;
return self__.meta49588;
}));

(cljs.core.async.t_cljs$core$async49587.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49587.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async49587.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49587.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async49587.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta49588","meta49588",1819675119,null)], null);
}));

(cljs.core.async.t_cljs$core$async49587.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49587.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49587");

(cljs.core.async.t_cljs$core$async49587.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async49587");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49587.
 */
cljs.core.async.__GT_t_cljs$core$async49587 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async49587(flag__$1,cb__$1,meta49588){
return (new cljs.core.async.t_cljs$core$async49587(flag__$1,cb__$1,meta49588));
});

}

return (new cljs.core.async.t_cljs$core$async49587(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__49590_SHARP_){
var G__49592 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49590_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__49592) : fret.call(null,G__49592));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__49591_SHARP_){
var G__49593 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49591_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__49593) : fret.call(null,G__49593));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__51058 = (i + (1));
i = G__51058;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
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
var args__4742__auto__ = [];
var len__4736__auto___51060 = arguments.length;
var i__4737__auto___51062 = (0);
while(true){
if((i__4737__auto___51062 < len__4736__auto___51060)){
args__4742__auto__.push((arguments[i__4737__auto___51062]));

var G__51064 = (i__4737__auto___51062 + (1));
i__4737__auto___51062 = G__51064;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__49596){
var map__49597 = p__49596;
var map__49597__$1 = (((((!((map__49597 == null))))?(((((map__49597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49597):map__49597);
var opts = map__49597__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq49594){
var G__49595 = cljs.core.first(seq49594);
var seq49594__$1 = cljs.core.next(seq49594);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49595,seq49594__$1);
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
var G__49600 = arguments.length;
switch (G__49600) {
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
var c__49511__auto___51076 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49512__auto__ = (function (){var switch__49410__auto__ = (function (state_49624){
var state_val_49625 = (state_49624[(1)]);
if((state_val_49625 === (7))){
var inst_49620 = (state_49624[(2)]);
var state_49624__$1 = state_49624;
var statearr_49626_51077 = state_49624__$1;
(statearr_49626_51077[(2)] = inst_49620);

(statearr_49626_51077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49625 === (1))){
var state_49624__$1 = state_49624;
var statearr_49627_51078 = state_49624__$1;
(statearr_49627_51078[(2)] = null);

(statearr_49627_51078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49625 === (4))){
var inst_49603 = (state_49624[(7)]);
var inst_49603__$1 = (state_49624[(2)]);
var inst_49604 = (inst_49603__$1 == null);
var state_49624__$1 = (function (){var statearr_49628 = state_49624;
(statearr_49628[(7)] = inst_49603__$1);

return statearr_49628;
})();
if(cljs.core.truth_(inst_49604)){
var statearr_49629_51079 = state_49624__$1;
(statearr_49629_51079[(1)] = (5));

} else {
var statearr_49630_51080 = state_49624__$1;
(statearr_49630_51080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49625 === (13))){
var state_49624__$1 = state_49624;
var statearr_49631_51081 = state_49624__$1;
(statearr_49631_51081[(2)] = null);

(statearr_49631_51081[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49625 === (6))){
var inst_49603 = (state_49624[(7)]);
var state_49624__$1 = state_49624;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49624__$1,(11),to,inst_49603);
} else {
if((state_val_49625 === (3))){
var inst_49622 = (state_49624[(2)]);
var state_49624__$1 = state_49624;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49624__$1,inst_49622);
} else {
if((state_val_49625 === (12))){
var state_49624__$1 = state_49624;
var statearr_49632_51087 = state_49624__$1;
(statearr_49632_51087[(2)] = null);

(statearr_49632_51087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49625 === (2))){
var state_49624__$1 = state_49624;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49624__$1,(4),from);
} else {
if((state_val_49625 === (11))){
var inst_49613 = (state_49624[(2)]);
var state_49624__$1 = state_49624;
if(cljs.core.truth_(inst_49613)){
var statearr_49633_51094 = state_49624__$1;
(statearr_49633_51094[(1)] = (12));

} else {
var statearr_49634_51095 = state_49624__$1;
(statearr_49634_51095[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49625 === (9))){
var state_49624__$1 = state_49624;
var statearr_49635_51096 = state_49624__$1;
(statearr_49635_51096[(2)] = null);

(statearr_49635_51096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49625 === (5))){
var state_49624__$1 = state_49624;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49636_51097 = state_49624__$1;
(statearr_49636_51097[(1)] = (8));

} else {
var statearr_49637_51098 = state_49624__$1;
(statearr_49637_51098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49625 === (14))){
var inst_49618 = (state_49624[(2)]);
var state_49624__$1 = state_49624;
var statearr_49638_51102 = state_49624__$1;
(statearr_49638_51102[(2)] = inst_49618);

(statearr_49638_51102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49625 === (10))){
var inst_49610 = (state_49624[(2)]);
var state_49624__$1 = state_49624;
var statearr_49639_51104 = state_49624__$1;
(statearr_49639_51104[(2)] = inst_49610);

(statearr_49639_51104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49625 === (8))){
var inst_49607 = cljs.core.async.close_BANG_(to);
var state_49624__$1 = state_49624;
var statearr_49640_51111 = state_49624__$1;
(statearr_49640_51111[(2)] = inst_49607);

(statearr_49640_51111[(1)] = (10));


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
var cljs$core$async$state_machine__49411__auto__ = null;
var cljs$core$async$state_machine__49411__auto____0 = (function (){
var statearr_49641 = [null,null,null,null,null,null,null,null];
(statearr_49641[(0)] = cljs$core$async$state_machine__49411__auto__);

(statearr_49641[(1)] = (1));

return statearr_49641;
});
var cljs$core$async$state_machine__49411__auto____1 = (function (state_49624){
while(true){
var ret_value__49412__auto__ = (function (){try{while(true){
var result__49413__auto__ = switch__49410__auto__(state_49624);
if(cljs.core.keyword_identical_QMARK_(result__49413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49413__auto__;
}
break;
}
}catch (e49642){if((e49642 instanceof Object)){
var ex__49414__auto__ = e49642;
var statearr_49643_51112 = state_49624;
(statearr_49643_51112[(5)] = ex__49414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49642;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51113 = state_49624;
state_49624 = G__51113;
continue;
} else {
return ret_value__49412__auto__;
}
break;
}
});
cljs$core$async$state_machine__49411__auto__ = function(state_49624){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49411__auto____1.call(this,state_49624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49411__auto____0;
cljs$core$async$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49411__auto____1;
return cljs$core$async$state_machine__49411__auto__;
})()
})();
var state__49513__auto__ = (function (){var statearr_49644 = (f__49512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49512__auto__.cljs$core$IFn$_invoke$arity$0() : f__49512__auto__.call(null));
(statearr_49644[(6)] = c__49511__auto___51076);

return statearr_49644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49513__auto__);
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
var process = (function (p__49645){
var vec__49646 = p__49645;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49646,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49646,(1),null);
var job = vec__49646;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__49511__auto___51122 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49512__auto__ = (function (){var switch__49410__auto__ = (function (state_49653){
var state_val_49654 = (state_49653[(1)]);
if((state_val_49654 === (1))){
var state_49653__$1 = state_49653;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49653__$1,(2),res,v);
} else {
if((state_val_49654 === (2))){
var inst_49650 = (state_49653[(2)]);
var inst_49651 = cljs.core.async.close_BANG_(res);
var state_49653__$1 = (function (){var statearr_49655 = state_49653;
(statearr_49655[(7)] = inst_49650);

return statearr_49655;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49653__$1,inst_49651);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49411__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49411__auto____0 = (function (){
var statearr_49656 = [null,null,null,null,null,null,null,null];
(statearr_49656[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49411__auto__);

(statearr_49656[(1)] = (1));

return statearr_49656;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49411__auto____1 = (function (state_49653){
while(true){
var ret_value__49412__auto__ = (function (){try{while(true){
var result__49413__auto__ = switch__49410__auto__(state_49653);
if(cljs.core.keyword_identical_QMARK_(result__49413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49413__auto__;
}
break;
}
}catch (e49657){if((e49657 instanceof Object)){
var ex__49414__auto__ = e49657;
var statearr_49658_51124 = state_49653;
(statearr_49658_51124[(5)] = ex__49414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49657;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51125 = state_49653;
state_49653 = G__51125;
continue;
} else {
return ret_value__49412__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49411__auto__ = function(state_49653){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49411__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49411__auto____1.call(this,state_49653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49411__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49411__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49411__auto__;
})()
})();
var state__49513__auto__ = (function (){var statearr_49659 = (f__49512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49512__auto__.cljs$core$IFn$_invoke$arity$0() : f__49512__auto__.call(null));
(statearr_49659[(6)] = c__49511__auto___51122);

return statearr_49659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49513__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__49660){
var vec__49661 = p__49660;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49661,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49661,(1),null);
var job = vec__49661;
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
var n__4613__auto___51128 = n;
var __51129 = (0);
while(true){
if((__51129 < n__4613__auto___51128)){
var G__49664_51130 = type;
var G__49664_51131__$1 = (((G__49664_51130 instanceof cljs.core.Keyword))?G__49664_51130.fqn:null);
switch (G__49664_51131__$1) {
case "compute":
var c__49511__auto___51133 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__51129,c__49511__auto___51133,G__49664_51130,G__49664_51131__$1,n__4613__auto___51128,jobs,results,process,async){
return (function (){
var f__49512__auto__ = (function (){var switch__49410__auto__ = ((function (__51129,c__49511__auto___51133,G__49664_51130,G__49664_51131__$1,n__4613__auto___51128,jobs,results,process,async){
return (function (state_49677){
var state_val_49678 = (state_49677[(1)]);
if((state_val_49678 === (1))){
var state_49677__$1 = state_49677;
var statearr_49679_51134 = state_49677__$1;
(statearr_49679_51134[(2)] = null);

(statearr_49679_51134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49678 === (2))){
var state_49677__$1 = state_49677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49677__$1,(4),jobs);
} else {
if((state_val_49678 === (3))){
var inst_49675 = (state_49677[(2)]);
var state_49677__$1 = state_49677;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49677__$1,inst_49675);
} else {
if((state_val_49678 === (4))){
var inst_49667 = (state_49677[(2)]);
var inst_49668 = process(inst_49667);
var state_49677__$1 = state_49677;
if(cljs.core.truth_(inst_49668)){
var statearr_49680_51135 = state_49677__$1;
(statearr_49680_51135[(1)] = (5));

} else {
var statearr_49681_51136 = state_49677__$1;
(statearr_49681_51136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49678 === (5))){
var state_49677__$1 = state_49677;
var statearr_49682_51137 = state_49677__$1;
(statearr_49682_51137[(2)] = null);

(statearr_49682_51137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49678 === (6))){
var state_49677__$1 = state_49677;
var statearr_49683_51138 = state_49677__$1;
(statearr_49683_51138[(2)] = null);

(statearr_49683_51138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49678 === (7))){
var inst_49673 = (state_49677[(2)]);
var state_49677__$1 = state_49677;
var statearr_49684_51143 = state_49677__$1;
(statearr_49684_51143[(2)] = inst_49673);

(statearr_49684_51143[(1)] = (3));


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
});})(__51129,c__49511__auto___51133,G__49664_51130,G__49664_51131__$1,n__4613__auto___51128,jobs,results,process,async))
;
return ((function (__51129,switch__49410__auto__,c__49511__auto___51133,G__49664_51130,G__49664_51131__$1,n__4613__auto___51128,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49411__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49411__auto____0 = (function (){
var statearr_49685 = [null,null,null,null,null,null,null];
(statearr_49685[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49411__auto__);

(statearr_49685[(1)] = (1));

return statearr_49685;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49411__auto____1 = (function (state_49677){
while(true){
var ret_value__49412__auto__ = (function (){try{while(true){
var result__49413__auto__ = switch__49410__auto__(state_49677);
if(cljs.core.keyword_identical_QMARK_(result__49413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49413__auto__;
}
break;
}
}catch (e49686){if((e49686 instanceof Object)){
var ex__49414__auto__ = e49686;
var statearr_49687_51147 = state_49677;
(statearr_49687_51147[(5)] = ex__49414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49686;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51150 = state_49677;
state_49677 = G__51150;
continue;
} else {
return ret_value__49412__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49411__auto__ = function(state_49677){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49411__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49411__auto____1.call(this,state_49677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49411__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49411__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49411__auto__;
})()
;})(__51129,switch__49410__auto__,c__49511__auto___51133,G__49664_51130,G__49664_51131__$1,n__4613__auto___51128,jobs,results,process,async))
})();
var state__49513__auto__ = (function (){var statearr_49688 = (f__49512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49512__auto__.cljs$core$IFn$_invoke$arity$0() : f__49512__auto__.call(null));
(statearr_49688[(6)] = c__49511__auto___51133);

return statearr_49688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49513__auto__);
});})(__51129,c__49511__auto___51133,G__49664_51130,G__49664_51131__$1,n__4613__auto___51128,jobs,results,process,async))
);


break;
case "async":
var c__49511__auto___51152 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__51129,c__49511__auto___51152,G__49664_51130,G__49664_51131__$1,n__4613__auto___51128,jobs,results,process,async){
return (function (){
var f__49512__auto__ = (function (){var switch__49410__auto__ = ((function (__51129,c__49511__auto___51152,G__49664_51130,G__49664_51131__$1,n__4613__auto___51128,jobs,results,process,async){
return (function (state_49701){
var state_val_49702 = (state_49701[(1)]);
if((state_val_49702 === (1))){
var state_49701__$1 = state_49701;
var statearr_49703_51155 = state_49701__$1;
(statearr_49703_51155[(2)] = null);

(statearr_49703_51155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49702 === (2))){
var state_49701__$1 = state_49701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49701__$1,(4),jobs);
} else {
if((state_val_49702 === (3))){
var inst_49699 = (state_49701[(2)]);
var state_49701__$1 = state_49701;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49701__$1,inst_49699);
} else {
if((state_val_49702 === (4))){
var inst_49691 = (state_49701[(2)]);
var inst_49692 = async(inst_49691);
var state_49701__$1 = state_49701;
if(cljs.core.truth_(inst_49692)){
var statearr_49704_51156 = state_49701__$1;
(statearr_49704_51156[(1)] = (5));

} else {
var statearr_49705_51157 = state_49701__$1;
(statearr_49705_51157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49702 === (5))){
var state_49701__$1 = state_49701;
var statearr_49706_51159 = state_49701__$1;
(statearr_49706_51159[(2)] = null);

(statearr_49706_51159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49702 === (6))){
var state_49701__$1 = state_49701;
var statearr_49707_51163 = state_49701__$1;
(statearr_49707_51163[(2)] = null);

(statearr_49707_51163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49702 === (7))){
var inst_49697 = (state_49701[(2)]);
var state_49701__$1 = state_49701;
var statearr_49708_51165 = state_49701__$1;
(statearr_49708_51165[(2)] = inst_49697);

(statearr_49708_51165[(1)] = (3));


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
});})(__51129,c__49511__auto___51152,G__49664_51130,G__49664_51131__$1,n__4613__auto___51128,jobs,results,process,async))
;
return ((function (__51129,switch__49410__auto__,c__49511__auto___51152,G__49664_51130,G__49664_51131__$1,n__4613__auto___51128,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49411__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49411__auto____0 = (function (){
var statearr_49709 = [null,null,null,null,null,null,null];
(statearr_49709[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49411__auto__);

(statearr_49709[(1)] = (1));

return statearr_49709;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49411__auto____1 = (function (state_49701){
while(true){
var ret_value__49412__auto__ = (function (){try{while(true){
var result__49413__auto__ = switch__49410__auto__(state_49701);
if(cljs.core.keyword_identical_QMARK_(result__49413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49413__auto__;
}
break;
}
}catch (e49710){if((e49710 instanceof Object)){
var ex__49414__auto__ = e49710;
var statearr_49711_51167 = state_49701;
(statearr_49711_51167[(5)] = ex__49414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49710;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51168 = state_49701;
state_49701 = G__51168;
continue;
} else {
return ret_value__49412__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49411__auto__ = function(state_49701){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49411__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49411__auto____1.call(this,state_49701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49411__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49411__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49411__auto__;
})()
;})(__51129,switch__49410__auto__,c__49511__auto___51152,G__49664_51130,G__49664_51131__$1,n__4613__auto___51128,jobs,results,process,async))
})();
var state__49513__auto__ = (function (){var statearr_49712 = (f__49512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49512__auto__.cljs$core$IFn$_invoke$arity$0() : f__49512__auto__.call(null));
(statearr_49712[(6)] = c__49511__auto___51152);

return statearr_49712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49513__auto__);
});})(__51129,c__49511__auto___51152,G__49664_51130,G__49664_51131__$1,n__4613__auto___51128,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49664_51131__$1)].join('')));

}

var G__51171 = (__51129 + (1));
__51129 = G__51171;
continue;
} else {
}
break;
}

var c__49511__auto___51172 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49512__auto__ = (function (){var switch__49410__auto__ = (function (state_49734){
var state_val_49735 = (state_49734[(1)]);
if((state_val_49735 === (7))){
var inst_49730 = (state_49734[(2)]);
var state_49734__$1 = state_49734;
var statearr_49736_51174 = state_49734__$1;
(statearr_49736_51174[(2)] = inst_49730);

(statearr_49736_51174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49735 === (1))){
var state_49734__$1 = state_49734;
var statearr_49737_51177 = state_49734__$1;
(statearr_49737_51177[(2)] = null);

(statearr_49737_51177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49735 === (4))){
var inst_49715 = (state_49734[(7)]);
var inst_49715__$1 = (state_49734[(2)]);
var inst_49716 = (inst_49715__$1 == null);
var state_49734__$1 = (function (){var statearr_49738 = state_49734;
(statearr_49738[(7)] = inst_49715__$1);

return statearr_49738;
})();
if(cljs.core.truth_(inst_49716)){
var statearr_49739_51178 = state_49734__$1;
(statearr_49739_51178[(1)] = (5));

} else {
var statearr_49740_51179 = state_49734__$1;
(statearr_49740_51179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49735 === (6))){
var inst_49720 = (state_49734[(8)]);
var inst_49715 = (state_49734[(7)]);
var inst_49720__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_49721 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49722 = [inst_49715,inst_49720__$1];
var inst_49723 = (new cljs.core.PersistentVector(null,2,(5),inst_49721,inst_49722,null));
var state_49734__$1 = (function (){var statearr_49741 = state_49734;
(statearr_49741[(8)] = inst_49720__$1);

return statearr_49741;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49734__$1,(8),jobs,inst_49723);
} else {
if((state_val_49735 === (3))){
var inst_49732 = (state_49734[(2)]);
var state_49734__$1 = state_49734;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49734__$1,inst_49732);
} else {
if((state_val_49735 === (2))){
var state_49734__$1 = state_49734;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49734__$1,(4),from);
} else {
if((state_val_49735 === (9))){
var inst_49727 = (state_49734[(2)]);
var state_49734__$1 = (function (){var statearr_49742 = state_49734;
(statearr_49742[(9)] = inst_49727);

return statearr_49742;
})();
var statearr_49743_51191 = state_49734__$1;
(statearr_49743_51191[(2)] = null);

(statearr_49743_51191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49735 === (5))){
var inst_49718 = cljs.core.async.close_BANG_(jobs);
var state_49734__$1 = state_49734;
var statearr_49744_51193 = state_49734__$1;
(statearr_49744_51193[(2)] = inst_49718);

(statearr_49744_51193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49735 === (8))){
var inst_49720 = (state_49734[(8)]);
var inst_49725 = (state_49734[(2)]);
var state_49734__$1 = (function (){var statearr_49745 = state_49734;
(statearr_49745[(10)] = inst_49725);

return statearr_49745;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49734__$1,(9),results,inst_49720);
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
var cljs$core$async$pipeline_STAR__$_state_machine__49411__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49411__auto____0 = (function (){
var statearr_49746 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49746[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49411__auto__);

(statearr_49746[(1)] = (1));

return statearr_49746;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49411__auto____1 = (function (state_49734){
while(true){
var ret_value__49412__auto__ = (function (){try{while(true){
var result__49413__auto__ = switch__49410__auto__(state_49734);
if(cljs.core.keyword_identical_QMARK_(result__49413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49413__auto__;
}
break;
}
}catch (e49747){if((e49747 instanceof Object)){
var ex__49414__auto__ = e49747;
var statearr_49748_51196 = state_49734;
(statearr_49748_51196[(5)] = ex__49414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49747;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51197 = state_49734;
state_49734 = G__51197;
continue;
} else {
return ret_value__49412__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49411__auto__ = function(state_49734){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49411__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49411__auto____1.call(this,state_49734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49411__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49411__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49411__auto__;
})()
})();
var state__49513__auto__ = (function (){var statearr_49749 = (f__49512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49512__auto__.cljs$core$IFn$_invoke$arity$0() : f__49512__auto__.call(null));
(statearr_49749[(6)] = c__49511__auto___51172);

return statearr_49749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49513__auto__);
}));


var c__49511__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49512__auto__ = (function (){var switch__49410__auto__ = (function (state_49787){
var state_val_49788 = (state_49787[(1)]);
if((state_val_49788 === (7))){
var inst_49783 = (state_49787[(2)]);
var state_49787__$1 = state_49787;
var statearr_49789_51198 = state_49787__$1;
(statearr_49789_51198[(2)] = inst_49783);

(statearr_49789_51198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49788 === (20))){
var state_49787__$1 = state_49787;
var statearr_49790_51199 = state_49787__$1;
(statearr_49790_51199[(2)] = null);

(statearr_49790_51199[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49788 === (1))){
var state_49787__$1 = state_49787;
var statearr_49791_51200 = state_49787__$1;
(statearr_49791_51200[(2)] = null);

(statearr_49791_51200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49788 === (4))){
var inst_49752 = (state_49787[(7)]);
var inst_49752__$1 = (state_49787[(2)]);
var inst_49753 = (inst_49752__$1 == null);
var state_49787__$1 = (function (){var statearr_49792 = state_49787;
(statearr_49792[(7)] = inst_49752__$1);

return statearr_49792;
})();
if(cljs.core.truth_(inst_49753)){
var statearr_49793_51201 = state_49787__$1;
(statearr_49793_51201[(1)] = (5));

} else {
var statearr_49794_51202 = state_49787__$1;
(statearr_49794_51202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49788 === (15))){
var inst_49765 = (state_49787[(8)]);
var state_49787__$1 = state_49787;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49787__$1,(18),to,inst_49765);
} else {
if((state_val_49788 === (21))){
var inst_49778 = (state_49787[(2)]);
var state_49787__$1 = state_49787;
var statearr_49795_51203 = state_49787__$1;
(statearr_49795_51203[(2)] = inst_49778);

(statearr_49795_51203[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49788 === (13))){
var inst_49780 = (state_49787[(2)]);
var state_49787__$1 = (function (){var statearr_49796 = state_49787;
(statearr_49796[(9)] = inst_49780);

return statearr_49796;
})();
var statearr_49797_51204 = state_49787__$1;
(statearr_49797_51204[(2)] = null);

(statearr_49797_51204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49788 === (6))){
var inst_49752 = (state_49787[(7)]);
var state_49787__$1 = state_49787;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49787__$1,(11),inst_49752);
} else {
if((state_val_49788 === (17))){
var inst_49773 = (state_49787[(2)]);
var state_49787__$1 = state_49787;
if(cljs.core.truth_(inst_49773)){
var statearr_49798_51205 = state_49787__$1;
(statearr_49798_51205[(1)] = (19));

} else {
var statearr_49799_51206 = state_49787__$1;
(statearr_49799_51206[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49788 === (3))){
var inst_49785 = (state_49787[(2)]);
var state_49787__$1 = state_49787;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49787__$1,inst_49785);
} else {
if((state_val_49788 === (12))){
var inst_49762 = (state_49787[(10)]);
var state_49787__$1 = state_49787;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49787__$1,(14),inst_49762);
} else {
if((state_val_49788 === (2))){
var state_49787__$1 = state_49787;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49787__$1,(4),results);
} else {
if((state_val_49788 === (19))){
var state_49787__$1 = state_49787;
var statearr_49800_51208 = state_49787__$1;
(statearr_49800_51208[(2)] = null);

(statearr_49800_51208[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49788 === (11))){
var inst_49762 = (state_49787[(2)]);
var state_49787__$1 = (function (){var statearr_49801 = state_49787;
(statearr_49801[(10)] = inst_49762);

return statearr_49801;
})();
var statearr_49802_51209 = state_49787__$1;
(statearr_49802_51209[(2)] = null);

(statearr_49802_51209[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49788 === (9))){
var state_49787__$1 = state_49787;
var statearr_49803_51217 = state_49787__$1;
(statearr_49803_51217[(2)] = null);

(statearr_49803_51217[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49788 === (5))){
var state_49787__$1 = state_49787;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49804_51221 = state_49787__$1;
(statearr_49804_51221[(1)] = (8));

} else {
var statearr_49805_51222 = state_49787__$1;
(statearr_49805_51222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49788 === (14))){
var inst_49765 = (state_49787[(8)]);
var inst_49765__$1 = (state_49787[(2)]);
var inst_49766 = (inst_49765__$1 == null);
var inst_49767 = cljs.core.not(inst_49766);
var state_49787__$1 = (function (){var statearr_49806 = state_49787;
(statearr_49806[(8)] = inst_49765__$1);

return statearr_49806;
})();
if(inst_49767){
var statearr_49807_51226 = state_49787__$1;
(statearr_49807_51226[(1)] = (15));

} else {
var statearr_49808_51227 = state_49787__$1;
(statearr_49808_51227[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49788 === (16))){
var state_49787__$1 = state_49787;
var statearr_49809_51228 = state_49787__$1;
(statearr_49809_51228[(2)] = false);

(statearr_49809_51228[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49788 === (10))){
var inst_49759 = (state_49787[(2)]);
var state_49787__$1 = state_49787;
var statearr_49810_51232 = state_49787__$1;
(statearr_49810_51232[(2)] = inst_49759);

(statearr_49810_51232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49788 === (18))){
var inst_49770 = (state_49787[(2)]);
var state_49787__$1 = state_49787;
var statearr_49811_51233 = state_49787__$1;
(statearr_49811_51233[(2)] = inst_49770);

(statearr_49811_51233[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49788 === (8))){
var inst_49756 = cljs.core.async.close_BANG_(to);
var state_49787__$1 = state_49787;
var statearr_49812_51236 = state_49787__$1;
(statearr_49812_51236[(2)] = inst_49756);

(statearr_49812_51236[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__49411__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49411__auto____0 = (function (){
var statearr_49813 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49813[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49411__auto__);

(statearr_49813[(1)] = (1));

return statearr_49813;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49411__auto____1 = (function (state_49787){
while(true){
var ret_value__49412__auto__ = (function (){try{while(true){
var result__49413__auto__ = switch__49410__auto__(state_49787);
if(cljs.core.keyword_identical_QMARK_(result__49413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49413__auto__;
}
break;
}
}catch (e49814){if((e49814 instanceof Object)){
var ex__49414__auto__ = e49814;
var statearr_49815_51338 = state_49787;
(statearr_49815_51338[(5)] = ex__49414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49814;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51339 = state_49787;
state_49787 = G__51339;
continue;
} else {
return ret_value__49412__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49411__auto__ = function(state_49787){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49411__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49411__auto____1.call(this,state_49787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49411__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49411__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49411__auto__;
})()
})();
var state__49513__auto__ = (function (){var statearr_49816 = (f__49512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49512__auto__.cljs$core$IFn$_invoke$arity$0() : f__49512__auto__.call(null));
(statearr_49816[(6)] = c__49511__auto__);

return statearr_49816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49513__auto__);
}));

return c__49511__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__49818 = arguments.length;
switch (G__49818) {
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
var G__49820 = arguments.length;
switch (G__49820) {
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
var G__49822 = arguments.length;
switch (G__49822) {
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
var c__49511__auto___51354 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49512__auto__ = (function (){var switch__49410__auto__ = (function (state_49848){
var state_val_49849 = (state_49848[(1)]);
if((state_val_49849 === (7))){
var inst_49844 = (state_49848[(2)]);
var state_49848__$1 = state_49848;
var statearr_49850_51356 = state_49848__$1;
(statearr_49850_51356[(2)] = inst_49844);

(statearr_49850_51356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49849 === (1))){
var state_49848__$1 = state_49848;
var statearr_49851_51357 = state_49848__$1;
(statearr_49851_51357[(2)] = null);

(statearr_49851_51357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49849 === (4))){
var inst_49825 = (state_49848[(7)]);
var inst_49825__$1 = (state_49848[(2)]);
var inst_49826 = (inst_49825__$1 == null);
var state_49848__$1 = (function (){var statearr_49852 = state_49848;
(statearr_49852[(7)] = inst_49825__$1);

return statearr_49852;
})();
if(cljs.core.truth_(inst_49826)){
var statearr_49853_51358 = state_49848__$1;
(statearr_49853_51358[(1)] = (5));

} else {
var statearr_49854_51359 = state_49848__$1;
(statearr_49854_51359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49849 === (13))){
var state_49848__$1 = state_49848;
var statearr_49855_51362 = state_49848__$1;
(statearr_49855_51362[(2)] = null);

(statearr_49855_51362[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49849 === (6))){
var inst_49825 = (state_49848[(7)]);
var inst_49831 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_49825) : p.call(null,inst_49825));
var state_49848__$1 = state_49848;
if(cljs.core.truth_(inst_49831)){
var statearr_49856_51363 = state_49848__$1;
(statearr_49856_51363[(1)] = (9));

} else {
var statearr_49857_51364 = state_49848__$1;
(statearr_49857_51364[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49849 === (3))){
var inst_49846 = (state_49848[(2)]);
var state_49848__$1 = state_49848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49848__$1,inst_49846);
} else {
if((state_val_49849 === (12))){
var state_49848__$1 = state_49848;
var statearr_49858_51365 = state_49848__$1;
(statearr_49858_51365[(2)] = null);

(statearr_49858_51365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49849 === (2))){
var state_49848__$1 = state_49848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49848__$1,(4),ch);
} else {
if((state_val_49849 === (11))){
var inst_49825 = (state_49848[(7)]);
var inst_49835 = (state_49848[(2)]);
var state_49848__$1 = state_49848;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49848__$1,(8),inst_49835,inst_49825);
} else {
if((state_val_49849 === (9))){
var state_49848__$1 = state_49848;
var statearr_49859_51391 = state_49848__$1;
(statearr_49859_51391[(2)] = tc);

(statearr_49859_51391[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49849 === (5))){
var inst_49828 = cljs.core.async.close_BANG_(tc);
var inst_49829 = cljs.core.async.close_BANG_(fc);
var state_49848__$1 = (function (){var statearr_49860 = state_49848;
(statearr_49860[(8)] = inst_49828);

return statearr_49860;
})();
var statearr_49861_51392 = state_49848__$1;
(statearr_49861_51392[(2)] = inst_49829);

(statearr_49861_51392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49849 === (14))){
var inst_49842 = (state_49848[(2)]);
var state_49848__$1 = state_49848;
var statearr_49862_51393 = state_49848__$1;
(statearr_49862_51393[(2)] = inst_49842);

(statearr_49862_51393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49849 === (10))){
var state_49848__$1 = state_49848;
var statearr_49863_51442 = state_49848__$1;
(statearr_49863_51442[(2)] = fc);

(statearr_49863_51442[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49849 === (8))){
var inst_49837 = (state_49848[(2)]);
var state_49848__$1 = state_49848;
if(cljs.core.truth_(inst_49837)){
var statearr_49864_51443 = state_49848__$1;
(statearr_49864_51443[(1)] = (12));

} else {
var statearr_49865_51444 = state_49848__$1;
(statearr_49865_51444[(1)] = (13));

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
var cljs$core$async$state_machine__49411__auto__ = null;
var cljs$core$async$state_machine__49411__auto____0 = (function (){
var statearr_49866 = [null,null,null,null,null,null,null,null,null];
(statearr_49866[(0)] = cljs$core$async$state_machine__49411__auto__);

(statearr_49866[(1)] = (1));

return statearr_49866;
});
var cljs$core$async$state_machine__49411__auto____1 = (function (state_49848){
while(true){
var ret_value__49412__auto__ = (function (){try{while(true){
var result__49413__auto__ = switch__49410__auto__(state_49848);
if(cljs.core.keyword_identical_QMARK_(result__49413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49413__auto__;
}
break;
}
}catch (e49867){if((e49867 instanceof Object)){
var ex__49414__auto__ = e49867;
var statearr_49868_51446 = state_49848;
(statearr_49868_51446[(5)] = ex__49414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49867;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51447 = state_49848;
state_49848 = G__51447;
continue;
} else {
return ret_value__49412__auto__;
}
break;
}
});
cljs$core$async$state_machine__49411__auto__ = function(state_49848){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49411__auto____1.call(this,state_49848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49411__auto____0;
cljs$core$async$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49411__auto____1;
return cljs$core$async$state_machine__49411__auto__;
})()
})();
var state__49513__auto__ = (function (){var statearr_49869 = (f__49512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49512__auto__.cljs$core$IFn$_invoke$arity$0() : f__49512__auto__.call(null));
(statearr_49869[(6)] = c__49511__auto___51354);

return statearr_49869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49513__auto__);
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
var c__49511__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49512__auto__ = (function (){var switch__49410__auto__ = (function (state_49890){
var state_val_49891 = (state_49890[(1)]);
if((state_val_49891 === (7))){
var inst_49886 = (state_49890[(2)]);
var state_49890__$1 = state_49890;
var statearr_49892_51455 = state_49890__$1;
(statearr_49892_51455[(2)] = inst_49886);

(statearr_49892_51455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49891 === (1))){
var inst_49870 = init;
var state_49890__$1 = (function (){var statearr_49893 = state_49890;
(statearr_49893[(7)] = inst_49870);

return statearr_49893;
})();
var statearr_49894_51456 = state_49890__$1;
(statearr_49894_51456[(2)] = null);

(statearr_49894_51456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49891 === (4))){
var inst_49873 = (state_49890[(8)]);
var inst_49873__$1 = (state_49890[(2)]);
var inst_49874 = (inst_49873__$1 == null);
var state_49890__$1 = (function (){var statearr_49895 = state_49890;
(statearr_49895[(8)] = inst_49873__$1);

return statearr_49895;
})();
if(cljs.core.truth_(inst_49874)){
var statearr_49896_51457 = state_49890__$1;
(statearr_49896_51457[(1)] = (5));

} else {
var statearr_49897_51459 = state_49890__$1;
(statearr_49897_51459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49891 === (6))){
var inst_49870 = (state_49890[(7)]);
var inst_49877 = (state_49890[(9)]);
var inst_49873 = (state_49890[(8)]);
var inst_49877__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_49870,inst_49873) : f.call(null,inst_49870,inst_49873));
var inst_49878 = cljs.core.reduced_QMARK_(inst_49877__$1);
var state_49890__$1 = (function (){var statearr_49898 = state_49890;
(statearr_49898[(9)] = inst_49877__$1);

return statearr_49898;
})();
if(inst_49878){
var statearr_49899_51460 = state_49890__$1;
(statearr_49899_51460[(1)] = (8));

} else {
var statearr_49900_51461 = state_49890__$1;
(statearr_49900_51461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49891 === (3))){
var inst_49888 = (state_49890[(2)]);
var state_49890__$1 = state_49890;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49890__$1,inst_49888);
} else {
if((state_val_49891 === (2))){
var state_49890__$1 = state_49890;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49890__$1,(4),ch);
} else {
if((state_val_49891 === (9))){
var inst_49877 = (state_49890[(9)]);
var inst_49870 = inst_49877;
var state_49890__$1 = (function (){var statearr_49901 = state_49890;
(statearr_49901[(7)] = inst_49870);

return statearr_49901;
})();
var statearr_49902_51463 = state_49890__$1;
(statearr_49902_51463[(2)] = null);

(statearr_49902_51463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49891 === (5))){
var inst_49870 = (state_49890[(7)]);
var state_49890__$1 = state_49890;
var statearr_49903_51464 = state_49890__$1;
(statearr_49903_51464[(2)] = inst_49870);

(statearr_49903_51464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49891 === (10))){
var inst_49884 = (state_49890[(2)]);
var state_49890__$1 = state_49890;
var statearr_49904_51465 = state_49890__$1;
(statearr_49904_51465[(2)] = inst_49884);

(statearr_49904_51465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49891 === (8))){
var inst_49877 = (state_49890[(9)]);
var inst_49880 = cljs.core.deref(inst_49877);
var state_49890__$1 = state_49890;
var statearr_49905_51466 = state_49890__$1;
(statearr_49905_51466[(2)] = inst_49880);

(statearr_49905_51466[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__49411__auto__ = null;
var cljs$core$async$reduce_$_state_machine__49411__auto____0 = (function (){
var statearr_49906 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49906[(0)] = cljs$core$async$reduce_$_state_machine__49411__auto__);

(statearr_49906[(1)] = (1));

return statearr_49906;
});
var cljs$core$async$reduce_$_state_machine__49411__auto____1 = (function (state_49890){
while(true){
var ret_value__49412__auto__ = (function (){try{while(true){
var result__49413__auto__ = switch__49410__auto__(state_49890);
if(cljs.core.keyword_identical_QMARK_(result__49413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49413__auto__;
}
break;
}
}catch (e49907){if((e49907 instanceof Object)){
var ex__49414__auto__ = e49907;
var statearr_49908_51467 = state_49890;
(statearr_49908_51467[(5)] = ex__49414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49907;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51468 = state_49890;
state_49890 = G__51468;
continue;
} else {
return ret_value__49412__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__49411__auto__ = function(state_49890){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__49411__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__49411__auto____1.call(this,state_49890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__49411__auto____0;
cljs$core$async$reduce_$_state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__49411__auto____1;
return cljs$core$async$reduce_$_state_machine__49411__auto__;
})()
})();
var state__49513__auto__ = (function (){var statearr_49909 = (f__49512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49512__auto__.cljs$core$IFn$_invoke$arity$0() : f__49512__auto__.call(null));
(statearr_49909[(6)] = c__49511__auto__);

return statearr_49909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49513__auto__);
}));

return c__49511__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__49511__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49512__auto__ = (function (){var switch__49410__auto__ = (function (state_49915){
var state_val_49916 = (state_49915[(1)]);
if((state_val_49916 === (1))){
var inst_49910 = cljs.core.async.reduce(f__$1,init,ch);
var state_49915__$1 = state_49915;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49915__$1,(2),inst_49910);
} else {
if((state_val_49916 === (2))){
var inst_49912 = (state_49915[(2)]);
var inst_49913 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_49912) : f__$1.call(null,inst_49912));
var state_49915__$1 = state_49915;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49915__$1,inst_49913);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__49411__auto__ = null;
var cljs$core$async$transduce_$_state_machine__49411__auto____0 = (function (){
var statearr_49917 = [null,null,null,null,null,null,null];
(statearr_49917[(0)] = cljs$core$async$transduce_$_state_machine__49411__auto__);

(statearr_49917[(1)] = (1));

return statearr_49917;
});
var cljs$core$async$transduce_$_state_machine__49411__auto____1 = (function (state_49915){
while(true){
var ret_value__49412__auto__ = (function (){try{while(true){
var result__49413__auto__ = switch__49410__auto__(state_49915);
if(cljs.core.keyword_identical_QMARK_(result__49413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49413__auto__;
}
break;
}
}catch (e49918){if((e49918 instanceof Object)){
var ex__49414__auto__ = e49918;
var statearr_49919_51479 = state_49915;
(statearr_49919_51479[(5)] = ex__49414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49918;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51480 = state_49915;
state_49915 = G__51480;
continue;
} else {
return ret_value__49412__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__49411__auto__ = function(state_49915){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__49411__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__49411__auto____1.call(this,state_49915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__49411__auto____0;
cljs$core$async$transduce_$_state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__49411__auto____1;
return cljs$core$async$transduce_$_state_machine__49411__auto__;
})()
})();
var state__49513__auto__ = (function (){var statearr_49920 = (f__49512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49512__auto__.cljs$core$IFn$_invoke$arity$0() : f__49512__auto__.call(null));
(statearr_49920[(6)] = c__49511__auto__);

return statearr_49920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49513__auto__);
}));

return c__49511__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__49922 = arguments.length;
switch (G__49922) {
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
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__49511__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49512__auto__ = (function (){var switch__49410__auto__ = (function (state_49947){
var state_val_49948 = (state_49947[(1)]);
if((state_val_49948 === (7))){
var inst_49929 = (state_49947[(2)]);
var state_49947__$1 = state_49947;
var statearr_49949_51486 = state_49947__$1;
(statearr_49949_51486[(2)] = inst_49929);

(statearr_49949_51486[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49948 === (1))){
var inst_49923 = cljs.core.seq(coll);
var inst_49924 = inst_49923;
var state_49947__$1 = (function (){var statearr_49950 = state_49947;
(statearr_49950[(7)] = inst_49924);

return statearr_49950;
})();
var statearr_49951_51487 = state_49947__$1;
(statearr_49951_51487[(2)] = null);

(statearr_49951_51487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49948 === (4))){
var inst_49924 = (state_49947[(7)]);
var inst_49927 = cljs.core.first(inst_49924);
var state_49947__$1 = state_49947;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49947__$1,(7),ch,inst_49927);
} else {
if((state_val_49948 === (13))){
var inst_49941 = (state_49947[(2)]);
var state_49947__$1 = state_49947;
var statearr_49952_51488 = state_49947__$1;
(statearr_49952_51488[(2)] = inst_49941);

(statearr_49952_51488[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49948 === (6))){
var inst_49932 = (state_49947[(2)]);
var state_49947__$1 = state_49947;
if(cljs.core.truth_(inst_49932)){
var statearr_49953_51489 = state_49947__$1;
(statearr_49953_51489[(1)] = (8));

} else {
var statearr_49954_51490 = state_49947__$1;
(statearr_49954_51490[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49948 === (3))){
var inst_49945 = (state_49947[(2)]);
var state_49947__$1 = state_49947;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49947__$1,inst_49945);
} else {
if((state_val_49948 === (12))){
var state_49947__$1 = state_49947;
var statearr_49955_51491 = state_49947__$1;
(statearr_49955_51491[(2)] = null);

(statearr_49955_51491[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49948 === (2))){
var inst_49924 = (state_49947[(7)]);
var state_49947__$1 = state_49947;
if(cljs.core.truth_(inst_49924)){
var statearr_49956_51492 = state_49947__$1;
(statearr_49956_51492[(1)] = (4));

} else {
var statearr_49957_51493 = state_49947__$1;
(statearr_49957_51493[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49948 === (11))){
var inst_49938 = cljs.core.async.close_BANG_(ch);
var state_49947__$1 = state_49947;
var statearr_49958_51495 = state_49947__$1;
(statearr_49958_51495[(2)] = inst_49938);

(statearr_49958_51495[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49948 === (9))){
var state_49947__$1 = state_49947;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49959_51496 = state_49947__$1;
(statearr_49959_51496[(1)] = (11));

} else {
var statearr_49960_51497 = state_49947__$1;
(statearr_49960_51497[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49948 === (5))){
var inst_49924 = (state_49947[(7)]);
var state_49947__$1 = state_49947;
var statearr_49961_51510 = state_49947__$1;
(statearr_49961_51510[(2)] = inst_49924);

(statearr_49961_51510[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49948 === (10))){
var inst_49943 = (state_49947[(2)]);
var state_49947__$1 = state_49947;
var statearr_49962_51511 = state_49947__$1;
(statearr_49962_51511[(2)] = inst_49943);

(statearr_49962_51511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49948 === (8))){
var inst_49924 = (state_49947[(7)]);
var inst_49934 = cljs.core.next(inst_49924);
var inst_49924__$1 = inst_49934;
var state_49947__$1 = (function (){var statearr_49963 = state_49947;
(statearr_49963[(7)] = inst_49924__$1);

return statearr_49963;
})();
var statearr_49964_51515 = state_49947__$1;
(statearr_49964_51515[(2)] = null);

(statearr_49964_51515[(1)] = (2));


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
var cljs$core$async$state_machine__49411__auto__ = null;
var cljs$core$async$state_machine__49411__auto____0 = (function (){
var statearr_49965 = [null,null,null,null,null,null,null,null];
(statearr_49965[(0)] = cljs$core$async$state_machine__49411__auto__);

(statearr_49965[(1)] = (1));

return statearr_49965;
});
var cljs$core$async$state_machine__49411__auto____1 = (function (state_49947){
while(true){
var ret_value__49412__auto__ = (function (){try{while(true){
var result__49413__auto__ = switch__49410__auto__(state_49947);
if(cljs.core.keyword_identical_QMARK_(result__49413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49413__auto__;
}
break;
}
}catch (e49966){if((e49966 instanceof Object)){
var ex__49414__auto__ = e49966;
var statearr_49967_51519 = state_49947;
(statearr_49967_51519[(5)] = ex__49414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49966;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51520 = state_49947;
state_49947 = G__51520;
continue;
} else {
return ret_value__49412__auto__;
}
break;
}
});
cljs$core$async$state_machine__49411__auto__ = function(state_49947){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49411__auto____1.call(this,state_49947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49411__auto____0;
cljs$core$async$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49411__auto____1;
return cljs$core$async$state_machine__49411__auto__;
})()
})();
var state__49513__auto__ = (function (){var statearr_49968 = (f__49512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49512__auto__.cljs$core$IFn$_invoke$arity$0() : f__49512__auto__.call(null));
(statearr_49968[(6)] = c__49511__auto__);

return statearr_49968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49513__auto__);
}));

return c__49511__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_51524 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_51524(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_51526 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_51526(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_51527 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_51527(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_51537 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_51537(m);
}
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
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49969 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49969 = (function (ch,cs,meta49970){
this.ch = ch;
this.cs = cs;
this.meta49970 = meta49970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49971,meta49970__$1){
var self__ = this;
var _49971__$1 = this;
return (new cljs.core.async.t_cljs$core$async49969(self__.ch,self__.cs,meta49970__$1));
}));

(cljs.core.async.t_cljs$core$async49969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49971){
var self__ = this;
var _49971__$1 = this;
return self__.meta49970;
}));

(cljs.core.async.t_cljs$core$async49969.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49969.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async49969.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49969.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async49969.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async49969.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async49969.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta49970","meta49970",1093019237,null)], null);
}));

(cljs.core.async.t_cljs$core$async49969.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49969.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49969");

(cljs.core.async.t_cljs$core$async49969.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async49969");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49969.
 */
cljs.core.async.__GT_t_cljs$core$async49969 = (function cljs$core$async$mult_$___GT_t_cljs$core$async49969(ch__$1,cs__$1,meta49970){
return (new cljs.core.async.t_cljs$core$async49969(ch__$1,cs__$1,meta49970));
});

}

return (new cljs.core.async.t_cljs$core$async49969(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__49511__auto___51544 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49512__auto__ = (function (){var switch__49410__auto__ = (function (state_50106){
var state_val_50107 = (state_50106[(1)]);
if((state_val_50107 === (7))){
var inst_50102 = (state_50106[(2)]);
var state_50106__$1 = state_50106;
var statearr_50108_51545 = state_50106__$1;
(statearr_50108_51545[(2)] = inst_50102);

(statearr_50108_51545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (20))){
var inst_50005 = (state_50106[(7)]);
var inst_50017 = cljs.core.first(inst_50005);
var inst_50018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50017,(0),null);
var inst_50019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50017,(1),null);
var state_50106__$1 = (function (){var statearr_50109 = state_50106;
(statearr_50109[(8)] = inst_50018);

return statearr_50109;
})();
if(cljs.core.truth_(inst_50019)){
var statearr_50110_51546 = state_50106__$1;
(statearr_50110_51546[(1)] = (22));

} else {
var statearr_50111_51547 = state_50106__$1;
(statearr_50111_51547[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (27))){
var inst_50054 = (state_50106[(9)]);
var inst_50047 = (state_50106[(10)]);
var inst_49974 = (state_50106[(11)]);
var inst_50049 = (state_50106[(12)]);
var inst_50054__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_50047,inst_50049);
var inst_50055 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50054__$1,inst_49974,done);
var state_50106__$1 = (function (){var statearr_50112 = state_50106;
(statearr_50112[(9)] = inst_50054__$1);

return statearr_50112;
})();
if(cljs.core.truth_(inst_50055)){
var statearr_50113_51548 = state_50106__$1;
(statearr_50113_51548[(1)] = (30));

} else {
var statearr_50114_51549 = state_50106__$1;
(statearr_50114_51549[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (1))){
var state_50106__$1 = state_50106;
var statearr_50115_51550 = state_50106__$1;
(statearr_50115_51550[(2)] = null);

(statearr_50115_51550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (24))){
var inst_50005 = (state_50106[(7)]);
var inst_50024 = (state_50106[(2)]);
var inst_50025 = cljs.core.next(inst_50005);
var inst_49983 = inst_50025;
var inst_49984 = null;
var inst_49985 = (0);
var inst_49986 = (0);
var state_50106__$1 = (function (){var statearr_50116 = state_50106;
(statearr_50116[(13)] = inst_49984);

(statearr_50116[(14)] = inst_49983);

(statearr_50116[(15)] = inst_49986);

(statearr_50116[(16)] = inst_49985);

(statearr_50116[(17)] = inst_50024);

return statearr_50116;
})();
var statearr_50117_51551 = state_50106__$1;
(statearr_50117_51551[(2)] = null);

(statearr_50117_51551[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (39))){
var state_50106__$1 = state_50106;
var statearr_50121_51558 = state_50106__$1;
(statearr_50121_51558[(2)] = null);

(statearr_50121_51558[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (4))){
var inst_49974 = (state_50106[(11)]);
var inst_49974__$1 = (state_50106[(2)]);
var inst_49975 = (inst_49974__$1 == null);
var state_50106__$1 = (function (){var statearr_50122 = state_50106;
(statearr_50122[(11)] = inst_49974__$1);

return statearr_50122;
})();
if(cljs.core.truth_(inst_49975)){
var statearr_50123_51559 = state_50106__$1;
(statearr_50123_51559[(1)] = (5));

} else {
var statearr_50124_51560 = state_50106__$1;
(statearr_50124_51560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (15))){
var inst_49984 = (state_50106[(13)]);
var inst_49983 = (state_50106[(14)]);
var inst_49986 = (state_50106[(15)]);
var inst_49985 = (state_50106[(16)]);
var inst_50001 = (state_50106[(2)]);
var inst_50002 = (inst_49986 + (1));
var tmp50118 = inst_49984;
var tmp50119 = inst_49983;
var tmp50120 = inst_49985;
var inst_49983__$1 = tmp50119;
var inst_49984__$1 = tmp50118;
var inst_49985__$1 = tmp50120;
var inst_49986__$1 = inst_50002;
var state_50106__$1 = (function (){var statearr_50125 = state_50106;
(statearr_50125[(18)] = inst_50001);

(statearr_50125[(13)] = inst_49984__$1);

(statearr_50125[(14)] = inst_49983__$1);

(statearr_50125[(15)] = inst_49986__$1);

(statearr_50125[(16)] = inst_49985__$1);

return statearr_50125;
})();
var statearr_50126_51561 = state_50106__$1;
(statearr_50126_51561[(2)] = null);

(statearr_50126_51561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (21))){
var inst_50028 = (state_50106[(2)]);
var state_50106__$1 = state_50106;
var statearr_50130_51562 = state_50106__$1;
(statearr_50130_51562[(2)] = inst_50028);

(statearr_50130_51562[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (31))){
var inst_50054 = (state_50106[(9)]);
var inst_50058 = done(null);
var inst_50059 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50054);
var state_50106__$1 = (function (){var statearr_50131 = state_50106;
(statearr_50131[(19)] = inst_50058);

return statearr_50131;
})();
var statearr_50132_51563 = state_50106__$1;
(statearr_50132_51563[(2)] = inst_50059);

(statearr_50132_51563[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (32))){
var inst_50047 = (state_50106[(10)]);
var inst_50046 = (state_50106[(20)]);
var inst_50048 = (state_50106[(21)]);
var inst_50049 = (state_50106[(12)]);
var inst_50061 = (state_50106[(2)]);
var inst_50062 = (inst_50049 + (1));
var tmp50127 = inst_50047;
var tmp50128 = inst_50046;
var tmp50129 = inst_50048;
var inst_50046__$1 = tmp50128;
var inst_50047__$1 = tmp50127;
var inst_50048__$1 = tmp50129;
var inst_50049__$1 = inst_50062;
var state_50106__$1 = (function (){var statearr_50133 = state_50106;
(statearr_50133[(10)] = inst_50047__$1);

(statearr_50133[(20)] = inst_50046__$1);

(statearr_50133[(22)] = inst_50061);

(statearr_50133[(21)] = inst_50048__$1);

(statearr_50133[(12)] = inst_50049__$1);

return statearr_50133;
})();
var statearr_50134_51570 = state_50106__$1;
(statearr_50134_51570[(2)] = null);

(statearr_50134_51570[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (40))){
var inst_50074 = (state_50106[(23)]);
var inst_50078 = done(null);
var inst_50079 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50074);
var state_50106__$1 = (function (){var statearr_50135 = state_50106;
(statearr_50135[(24)] = inst_50078);

return statearr_50135;
})();
var statearr_50136_51571 = state_50106__$1;
(statearr_50136_51571[(2)] = inst_50079);

(statearr_50136_51571[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (33))){
var inst_50065 = (state_50106[(25)]);
var inst_50067 = cljs.core.chunked_seq_QMARK_(inst_50065);
var state_50106__$1 = state_50106;
if(inst_50067){
var statearr_50137_51572 = state_50106__$1;
(statearr_50137_51572[(1)] = (36));

} else {
var statearr_50138_51573 = state_50106__$1;
(statearr_50138_51573[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (13))){
var inst_49995 = (state_50106[(26)]);
var inst_49998 = cljs.core.async.close_BANG_(inst_49995);
var state_50106__$1 = state_50106;
var statearr_50139_51574 = state_50106__$1;
(statearr_50139_51574[(2)] = inst_49998);

(statearr_50139_51574[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (22))){
var inst_50018 = (state_50106[(8)]);
var inst_50021 = cljs.core.async.close_BANG_(inst_50018);
var state_50106__$1 = state_50106;
var statearr_50140_51575 = state_50106__$1;
(statearr_50140_51575[(2)] = inst_50021);

(statearr_50140_51575[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (36))){
var inst_50065 = (state_50106[(25)]);
var inst_50069 = cljs.core.chunk_first(inst_50065);
var inst_50070 = cljs.core.chunk_rest(inst_50065);
var inst_50071 = cljs.core.count(inst_50069);
var inst_50046 = inst_50070;
var inst_50047 = inst_50069;
var inst_50048 = inst_50071;
var inst_50049 = (0);
var state_50106__$1 = (function (){var statearr_50141 = state_50106;
(statearr_50141[(10)] = inst_50047);

(statearr_50141[(20)] = inst_50046);

(statearr_50141[(21)] = inst_50048);

(statearr_50141[(12)] = inst_50049);

return statearr_50141;
})();
var statearr_50142_51576 = state_50106__$1;
(statearr_50142_51576[(2)] = null);

(statearr_50142_51576[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (41))){
var inst_50065 = (state_50106[(25)]);
var inst_50081 = (state_50106[(2)]);
var inst_50082 = cljs.core.next(inst_50065);
var inst_50046 = inst_50082;
var inst_50047 = null;
var inst_50048 = (0);
var inst_50049 = (0);
var state_50106__$1 = (function (){var statearr_50143 = state_50106;
(statearr_50143[(10)] = inst_50047);

(statearr_50143[(20)] = inst_50046);

(statearr_50143[(21)] = inst_50048);

(statearr_50143[(12)] = inst_50049);

(statearr_50143[(27)] = inst_50081);

return statearr_50143;
})();
var statearr_50144_51577 = state_50106__$1;
(statearr_50144_51577[(2)] = null);

(statearr_50144_51577[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (43))){
var state_50106__$1 = state_50106;
var statearr_50145_51578 = state_50106__$1;
(statearr_50145_51578[(2)] = null);

(statearr_50145_51578[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (29))){
var inst_50090 = (state_50106[(2)]);
var state_50106__$1 = state_50106;
var statearr_50146_51579 = state_50106__$1;
(statearr_50146_51579[(2)] = inst_50090);

(statearr_50146_51579[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (44))){
var inst_50099 = (state_50106[(2)]);
var state_50106__$1 = (function (){var statearr_50147 = state_50106;
(statearr_50147[(28)] = inst_50099);

return statearr_50147;
})();
var statearr_50148_51580 = state_50106__$1;
(statearr_50148_51580[(2)] = null);

(statearr_50148_51580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (6))){
var inst_50038 = (state_50106[(29)]);
var inst_50037 = cljs.core.deref(cs);
var inst_50038__$1 = cljs.core.keys(inst_50037);
var inst_50039 = cljs.core.count(inst_50038__$1);
var inst_50040 = cljs.core.reset_BANG_(dctr,inst_50039);
var inst_50045 = cljs.core.seq(inst_50038__$1);
var inst_50046 = inst_50045;
var inst_50047 = null;
var inst_50048 = (0);
var inst_50049 = (0);
var state_50106__$1 = (function (){var statearr_50149 = state_50106;
(statearr_50149[(10)] = inst_50047);

(statearr_50149[(20)] = inst_50046);

(statearr_50149[(30)] = inst_50040);

(statearr_50149[(21)] = inst_50048);

(statearr_50149[(12)] = inst_50049);

(statearr_50149[(29)] = inst_50038__$1);

return statearr_50149;
})();
var statearr_50150_51587 = state_50106__$1;
(statearr_50150_51587[(2)] = null);

(statearr_50150_51587[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (28))){
var inst_50046 = (state_50106[(20)]);
var inst_50065 = (state_50106[(25)]);
var inst_50065__$1 = cljs.core.seq(inst_50046);
var state_50106__$1 = (function (){var statearr_50151 = state_50106;
(statearr_50151[(25)] = inst_50065__$1);

return statearr_50151;
})();
if(inst_50065__$1){
var statearr_50152_51588 = state_50106__$1;
(statearr_50152_51588[(1)] = (33));

} else {
var statearr_50153_51589 = state_50106__$1;
(statearr_50153_51589[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (25))){
var inst_50048 = (state_50106[(21)]);
var inst_50049 = (state_50106[(12)]);
var inst_50051 = (inst_50049 < inst_50048);
var inst_50052 = inst_50051;
var state_50106__$1 = state_50106;
if(cljs.core.truth_(inst_50052)){
var statearr_50154_51593 = state_50106__$1;
(statearr_50154_51593[(1)] = (27));

} else {
var statearr_50155_51594 = state_50106__$1;
(statearr_50155_51594[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (34))){
var state_50106__$1 = state_50106;
var statearr_50156_51595 = state_50106__$1;
(statearr_50156_51595[(2)] = null);

(statearr_50156_51595[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (17))){
var state_50106__$1 = state_50106;
var statearr_50157_51596 = state_50106__$1;
(statearr_50157_51596[(2)] = null);

(statearr_50157_51596[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (3))){
var inst_50104 = (state_50106[(2)]);
var state_50106__$1 = state_50106;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50106__$1,inst_50104);
} else {
if((state_val_50107 === (12))){
var inst_50033 = (state_50106[(2)]);
var state_50106__$1 = state_50106;
var statearr_50158_51597 = state_50106__$1;
(statearr_50158_51597[(2)] = inst_50033);

(statearr_50158_51597[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (2))){
var state_50106__$1 = state_50106;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50106__$1,(4),ch);
} else {
if((state_val_50107 === (23))){
var state_50106__$1 = state_50106;
var statearr_50159_51601 = state_50106__$1;
(statearr_50159_51601[(2)] = null);

(statearr_50159_51601[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (35))){
var inst_50088 = (state_50106[(2)]);
var state_50106__$1 = state_50106;
var statearr_50160_51604 = state_50106__$1;
(statearr_50160_51604[(2)] = inst_50088);

(statearr_50160_51604[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (19))){
var inst_50005 = (state_50106[(7)]);
var inst_50009 = cljs.core.chunk_first(inst_50005);
var inst_50010 = cljs.core.chunk_rest(inst_50005);
var inst_50011 = cljs.core.count(inst_50009);
var inst_49983 = inst_50010;
var inst_49984 = inst_50009;
var inst_49985 = inst_50011;
var inst_49986 = (0);
var state_50106__$1 = (function (){var statearr_50161 = state_50106;
(statearr_50161[(13)] = inst_49984);

(statearr_50161[(14)] = inst_49983);

(statearr_50161[(15)] = inst_49986);

(statearr_50161[(16)] = inst_49985);

return statearr_50161;
})();
var statearr_50162_51605 = state_50106__$1;
(statearr_50162_51605[(2)] = null);

(statearr_50162_51605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (11))){
var inst_49983 = (state_50106[(14)]);
var inst_50005 = (state_50106[(7)]);
var inst_50005__$1 = cljs.core.seq(inst_49983);
var state_50106__$1 = (function (){var statearr_50163 = state_50106;
(statearr_50163[(7)] = inst_50005__$1);

return statearr_50163;
})();
if(inst_50005__$1){
var statearr_50164_51606 = state_50106__$1;
(statearr_50164_51606[(1)] = (16));

} else {
var statearr_50165_51607 = state_50106__$1;
(statearr_50165_51607[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (9))){
var inst_50035 = (state_50106[(2)]);
var state_50106__$1 = state_50106;
var statearr_50166_51608 = state_50106__$1;
(statearr_50166_51608[(2)] = inst_50035);

(statearr_50166_51608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (5))){
var inst_49981 = cljs.core.deref(cs);
var inst_49982 = cljs.core.seq(inst_49981);
var inst_49983 = inst_49982;
var inst_49984 = null;
var inst_49985 = (0);
var inst_49986 = (0);
var state_50106__$1 = (function (){var statearr_50167 = state_50106;
(statearr_50167[(13)] = inst_49984);

(statearr_50167[(14)] = inst_49983);

(statearr_50167[(15)] = inst_49986);

(statearr_50167[(16)] = inst_49985);

return statearr_50167;
})();
var statearr_50168_51611 = state_50106__$1;
(statearr_50168_51611[(2)] = null);

(statearr_50168_51611[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (14))){
var state_50106__$1 = state_50106;
var statearr_50169_51612 = state_50106__$1;
(statearr_50169_51612[(2)] = null);

(statearr_50169_51612[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (45))){
var inst_50096 = (state_50106[(2)]);
var state_50106__$1 = state_50106;
var statearr_50170_51613 = state_50106__$1;
(statearr_50170_51613[(2)] = inst_50096);

(statearr_50170_51613[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (26))){
var inst_50038 = (state_50106[(29)]);
var inst_50092 = (state_50106[(2)]);
var inst_50093 = cljs.core.seq(inst_50038);
var state_50106__$1 = (function (){var statearr_50171 = state_50106;
(statearr_50171[(31)] = inst_50092);

return statearr_50171;
})();
if(inst_50093){
var statearr_50172_51614 = state_50106__$1;
(statearr_50172_51614[(1)] = (42));

} else {
var statearr_50173_51615 = state_50106__$1;
(statearr_50173_51615[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (16))){
var inst_50005 = (state_50106[(7)]);
var inst_50007 = cljs.core.chunked_seq_QMARK_(inst_50005);
var state_50106__$1 = state_50106;
if(inst_50007){
var statearr_50174_51616 = state_50106__$1;
(statearr_50174_51616[(1)] = (19));

} else {
var statearr_50175_51617 = state_50106__$1;
(statearr_50175_51617[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (38))){
var inst_50085 = (state_50106[(2)]);
var state_50106__$1 = state_50106;
var statearr_50176_51618 = state_50106__$1;
(statearr_50176_51618[(2)] = inst_50085);

(statearr_50176_51618[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (30))){
var state_50106__$1 = state_50106;
var statearr_50177_51622 = state_50106__$1;
(statearr_50177_51622[(2)] = null);

(statearr_50177_51622[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (10))){
var inst_49984 = (state_50106[(13)]);
var inst_49986 = (state_50106[(15)]);
var inst_49994 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_49984,inst_49986);
var inst_49995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49994,(0),null);
var inst_49996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49994,(1),null);
var state_50106__$1 = (function (){var statearr_50178 = state_50106;
(statearr_50178[(26)] = inst_49995);

return statearr_50178;
})();
if(cljs.core.truth_(inst_49996)){
var statearr_50179_51625 = state_50106__$1;
(statearr_50179_51625[(1)] = (13));

} else {
var statearr_50180_51630 = state_50106__$1;
(statearr_50180_51630[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (18))){
var inst_50031 = (state_50106[(2)]);
var state_50106__$1 = state_50106;
var statearr_50181_51631 = state_50106__$1;
(statearr_50181_51631[(2)] = inst_50031);

(statearr_50181_51631[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (42))){
var state_50106__$1 = state_50106;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50106__$1,(45),dchan);
} else {
if((state_val_50107 === (37))){
var inst_50074 = (state_50106[(23)]);
var inst_49974 = (state_50106[(11)]);
var inst_50065 = (state_50106[(25)]);
var inst_50074__$1 = cljs.core.first(inst_50065);
var inst_50075 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50074__$1,inst_49974,done);
var state_50106__$1 = (function (){var statearr_50182 = state_50106;
(statearr_50182[(23)] = inst_50074__$1);

return statearr_50182;
})();
if(cljs.core.truth_(inst_50075)){
var statearr_50183_51633 = state_50106__$1;
(statearr_50183_51633[(1)] = (39));

} else {
var statearr_50184_51634 = state_50106__$1;
(statearr_50184_51634[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (8))){
var inst_49986 = (state_50106[(15)]);
var inst_49985 = (state_50106[(16)]);
var inst_49988 = (inst_49986 < inst_49985);
var inst_49989 = inst_49988;
var state_50106__$1 = state_50106;
if(cljs.core.truth_(inst_49989)){
var statearr_50185_51636 = state_50106__$1;
(statearr_50185_51636[(1)] = (10));

} else {
var statearr_50186_51638 = state_50106__$1;
(statearr_50186_51638[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__49411__auto__ = null;
var cljs$core$async$mult_$_state_machine__49411__auto____0 = (function (){
var statearr_50187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50187[(0)] = cljs$core$async$mult_$_state_machine__49411__auto__);

(statearr_50187[(1)] = (1));

return statearr_50187;
});
var cljs$core$async$mult_$_state_machine__49411__auto____1 = (function (state_50106){
while(true){
var ret_value__49412__auto__ = (function (){try{while(true){
var result__49413__auto__ = switch__49410__auto__(state_50106);
if(cljs.core.keyword_identical_QMARK_(result__49413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49413__auto__;
}
break;
}
}catch (e50188){if((e50188 instanceof Object)){
var ex__49414__auto__ = e50188;
var statearr_50189_51643 = state_50106;
(statearr_50189_51643[(5)] = ex__49414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50188;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51644 = state_50106;
state_50106 = G__51644;
continue;
} else {
return ret_value__49412__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__49411__auto__ = function(state_50106){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__49411__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__49411__auto____1.call(this,state_50106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__49411__auto____0;
cljs$core$async$mult_$_state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__49411__auto____1;
return cljs$core$async$mult_$_state_machine__49411__auto__;
})()
})();
var state__49513__auto__ = (function (){var statearr_50190 = (f__49512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49512__auto__.cljs$core$IFn$_invoke$arity$0() : f__49512__auto__.call(null));
(statearr_50190[(6)] = c__49511__auto___51544);

return statearr_50190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49513__auto__);
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
var G__50192 = arguments.length;
switch (G__50192) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_51646 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_51646(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_51647 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_51647(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_51650 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_51650(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_51653 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_51653(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_51655 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_51655(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51658 = arguments.length;
var i__4737__auto___51660 = (0);
while(true){
if((i__4737__auto___51660 < len__4736__auto___51658)){
args__4742__auto__.push((arguments[i__4737__auto___51660]));

var G__51661 = (i__4737__auto___51660 + (1));
i__4737__auto___51660 = G__51661;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__50197){
var map__50198 = p__50197;
var map__50198__$1 = (((((!((map__50198 == null))))?(((((map__50198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50198):map__50198);
var opts = map__50198__$1;
var statearr_50200_51662 = state;
(statearr_50200_51662[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_50201_51664 = state;
(statearr_50201_51664[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_50202_51667 = state;
(statearr_50202_51667[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq50193){
var G__50194 = cljs.core.first(seq50193);
var seq50193__$1 = cljs.core.next(seq50193);
var G__50195 = cljs.core.first(seq50193__$1);
var seq50193__$2 = cljs.core.next(seq50193__$1);
var G__50196 = cljs.core.first(seq50193__$2);
var seq50193__$3 = cljs.core.next(seq50193__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50194,G__50195,G__50196,seq50193__$3);
}));

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
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
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
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50203 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50203 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta50204){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta50204 = meta50204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50205,meta50204__$1){
var self__ = this;
var _50205__$1 = this;
return (new cljs.core.async.t_cljs$core$async50203(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta50204__$1));
}));

(cljs.core.async.t_cljs$core$async50203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50205){
var self__ = this;
var _50205__$1 = this;
return self__.meta50204;
}));

(cljs.core.async.t_cljs$core$async50203.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50203.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async50203.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50203.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50203.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50203.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50203.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50203.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50203.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta50204","meta50204",-1774408456,null)], null);
}));

(cljs.core.async.t_cljs$core$async50203.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50203");

(cljs.core.async.t_cljs$core$async50203.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50203");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50203.
 */
cljs.core.async.__GT_t_cljs$core$async50203 = (function cljs$core$async$mix_$___GT_t_cljs$core$async50203(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50204){
return (new cljs.core.async.t_cljs$core$async50203(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50204));
});

}

return (new cljs.core.async.t_cljs$core$async50203(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49511__auto___51714 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49512__auto__ = (function (){var switch__49410__auto__ = (function (state_50307){
var state_val_50308 = (state_50307[(1)]);
if((state_val_50308 === (7))){
var inst_50222 = (state_50307[(2)]);
var state_50307__$1 = state_50307;
var statearr_50309_51718 = state_50307__$1;
(statearr_50309_51718[(2)] = inst_50222);

(statearr_50309_51718[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (20))){
var inst_50234 = (state_50307[(7)]);
var state_50307__$1 = state_50307;
var statearr_50310_51723 = state_50307__$1;
(statearr_50310_51723[(2)] = inst_50234);

(statearr_50310_51723[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (27))){
var state_50307__$1 = state_50307;
var statearr_50311_51724 = state_50307__$1;
(statearr_50311_51724[(2)] = null);

(statearr_50311_51724[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (1))){
var inst_50209 = (state_50307[(8)]);
var inst_50209__$1 = calc_state();
var inst_50211 = (inst_50209__$1 == null);
var inst_50212 = cljs.core.not(inst_50211);
var state_50307__$1 = (function (){var statearr_50312 = state_50307;
(statearr_50312[(8)] = inst_50209__$1);

return statearr_50312;
})();
if(inst_50212){
var statearr_50313_51732 = state_50307__$1;
(statearr_50313_51732[(1)] = (2));

} else {
var statearr_50314_51736 = state_50307__$1;
(statearr_50314_51736[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (24))){
var inst_50281 = (state_50307[(9)]);
var inst_50258 = (state_50307[(10)]);
var inst_50267 = (state_50307[(11)]);
var inst_50281__$1 = (inst_50258.cljs$core$IFn$_invoke$arity$1 ? inst_50258.cljs$core$IFn$_invoke$arity$1(inst_50267) : inst_50258.call(null,inst_50267));
var state_50307__$1 = (function (){var statearr_50315 = state_50307;
(statearr_50315[(9)] = inst_50281__$1);

return statearr_50315;
})();
if(cljs.core.truth_(inst_50281__$1)){
var statearr_50316_51744 = state_50307__$1;
(statearr_50316_51744[(1)] = (29));

} else {
var statearr_50317_51746 = state_50307__$1;
(statearr_50317_51746[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (4))){
var inst_50225 = (state_50307[(2)]);
var state_50307__$1 = state_50307;
if(cljs.core.truth_(inst_50225)){
var statearr_50318_51747 = state_50307__$1;
(statearr_50318_51747[(1)] = (8));

} else {
var statearr_50319_51748 = state_50307__$1;
(statearr_50319_51748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (15))){
var inst_50252 = (state_50307[(2)]);
var state_50307__$1 = state_50307;
if(cljs.core.truth_(inst_50252)){
var statearr_50320_51749 = state_50307__$1;
(statearr_50320_51749[(1)] = (19));

} else {
var statearr_50321_51751 = state_50307__$1;
(statearr_50321_51751[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (21))){
var inst_50257 = (state_50307[(12)]);
var inst_50257__$1 = (state_50307[(2)]);
var inst_50258 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50257__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_50259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50257__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_50260 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50257__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_50307__$1 = (function (){var statearr_50322 = state_50307;
(statearr_50322[(13)] = inst_50259);

(statearr_50322[(10)] = inst_50258);

(statearr_50322[(12)] = inst_50257__$1);

return statearr_50322;
})();
return cljs.core.async.ioc_alts_BANG_(state_50307__$1,(22),inst_50260);
} else {
if((state_val_50308 === (31))){
var inst_50289 = (state_50307[(2)]);
var state_50307__$1 = state_50307;
if(cljs.core.truth_(inst_50289)){
var statearr_50323_51756 = state_50307__$1;
(statearr_50323_51756[(1)] = (32));

} else {
var statearr_50324_51757 = state_50307__$1;
(statearr_50324_51757[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (32))){
var inst_50266 = (state_50307[(14)]);
var state_50307__$1 = state_50307;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50307__$1,(35),out,inst_50266);
} else {
if((state_val_50308 === (33))){
var inst_50257 = (state_50307[(12)]);
var inst_50234 = inst_50257;
var state_50307__$1 = (function (){var statearr_50325 = state_50307;
(statearr_50325[(7)] = inst_50234);

return statearr_50325;
})();
var statearr_50326_51758 = state_50307__$1;
(statearr_50326_51758[(2)] = null);

(statearr_50326_51758[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (13))){
var inst_50234 = (state_50307[(7)]);
var inst_50241 = inst_50234.cljs$lang$protocol_mask$partition0$;
var inst_50242 = (inst_50241 & (64));
var inst_50243 = inst_50234.cljs$core$ISeq$;
var inst_50244 = (cljs.core.PROTOCOL_SENTINEL === inst_50243);
var inst_50245 = ((inst_50242) || (inst_50244));
var state_50307__$1 = state_50307;
if(cljs.core.truth_(inst_50245)){
var statearr_50327_51762 = state_50307__$1;
(statearr_50327_51762[(1)] = (16));

} else {
var statearr_50328_51764 = state_50307__$1;
(statearr_50328_51764[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (22))){
var inst_50267 = (state_50307[(11)]);
var inst_50266 = (state_50307[(14)]);
var inst_50265 = (state_50307[(2)]);
var inst_50266__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50265,(0),null);
var inst_50267__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50265,(1),null);
var inst_50268 = (inst_50266__$1 == null);
var inst_50269 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50267__$1,change);
var inst_50270 = ((inst_50268) || (inst_50269));
var state_50307__$1 = (function (){var statearr_50329 = state_50307;
(statearr_50329[(11)] = inst_50267__$1);

(statearr_50329[(14)] = inst_50266__$1);

return statearr_50329;
})();
if(cljs.core.truth_(inst_50270)){
var statearr_50330_51767 = state_50307__$1;
(statearr_50330_51767[(1)] = (23));

} else {
var statearr_50331_51768 = state_50307__$1;
(statearr_50331_51768[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (36))){
var inst_50257 = (state_50307[(12)]);
var inst_50234 = inst_50257;
var state_50307__$1 = (function (){var statearr_50332 = state_50307;
(statearr_50332[(7)] = inst_50234);

return statearr_50332;
})();
var statearr_50333_51772 = state_50307__$1;
(statearr_50333_51772[(2)] = null);

(statearr_50333_51772[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (29))){
var inst_50281 = (state_50307[(9)]);
var state_50307__$1 = state_50307;
var statearr_50334_51773 = state_50307__$1;
(statearr_50334_51773[(2)] = inst_50281);

(statearr_50334_51773[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (6))){
var state_50307__$1 = state_50307;
var statearr_50335_51774 = state_50307__$1;
(statearr_50335_51774[(2)] = false);

(statearr_50335_51774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (28))){
var inst_50277 = (state_50307[(2)]);
var inst_50278 = calc_state();
var inst_50234 = inst_50278;
var state_50307__$1 = (function (){var statearr_50336 = state_50307;
(statearr_50336[(15)] = inst_50277);

(statearr_50336[(7)] = inst_50234);

return statearr_50336;
})();
var statearr_50337_51775 = state_50307__$1;
(statearr_50337_51775[(2)] = null);

(statearr_50337_51775[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (25))){
var inst_50303 = (state_50307[(2)]);
var state_50307__$1 = state_50307;
var statearr_50338_51776 = state_50307__$1;
(statearr_50338_51776[(2)] = inst_50303);

(statearr_50338_51776[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (34))){
var inst_50301 = (state_50307[(2)]);
var state_50307__$1 = state_50307;
var statearr_50339_51777 = state_50307__$1;
(statearr_50339_51777[(2)] = inst_50301);

(statearr_50339_51777[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (17))){
var state_50307__$1 = state_50307;
var statearr_50340_51778 = state_50307__$1;
(statearr_50340_51778[(2)] = false);

(statearr_50340_51778[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (3))){
var state_50307__$1 = state_50307;
var statearr_50341_51780 = state_50307__$1;
(statearr_50341_51780[(2)] = false);

(statearr_50341_51780[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (12))){
var inst_50305 = (state_50307[(2)]);
var state_50307__$1 = state_50307;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50307__$1,inst_50305);
} else {
if((state_val_50308 === (2))){
var inst_50209 = (state_50307[(8)]);
var inst_50214 = inst_50209.cljs$lang$protocol_mask$partition0$;
var inst_50215 = (inst_50214 & (64));
var inst_50216 = inst_50209.cljs$core$ISeq$;
var inst_50217 = (cljs.core.PROTOCOL_SENTINEL === inst_50216);
var inst_50218 = ((inst_50215) || (inst_50217));
var state_50307__$1 = state_50307;
if(cljs.core.truth_(inst_50218)){
var statearr_50342_51781 = state_50307__$1;
(statearr_50342_51781[(1)] = (5));

} else {
var statearr_50343_51782 = state_50307__$1;
(statearr_50343_51782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (23))){
var inst_50266 = (state_50307[(14)]);
var inst_50272 = (inst_50266 == null);
var state_50307__$1 = state_50307;
if(cljs.core.truth_(inst_50272)){
var statearr_50344_51783 = state_50307__$1;
(statearr_50344_51783[(1)] = (26));

} else {
var statearr_50345_51784 = state_50307__$1;
(statearr_50345_51784[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (35))){
var inst_50292 = (state_50307[(2)]);
var state_50307__$1 = state_50307;
if(cljs.core.truth_(inst_50292)){
var statearr_50346_51788 = state_50307__$1;
(statearr_50346_51788[(1)] = (36));

} else {
var statearr_50347_51789 = state_50307__$1;
(statearr_50347_51789[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (19))){
var inst_50234 = (state_50307[(7)]);
var inst_50254 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50234);
var state_50307__$1 = state_50307;
var statearr_50348_51791 = state_50307__$1;
(statearr_50348_51791[(2)] = inst_50254);

(statearr_50348_51791[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (11))){
var inst_50234 = (state_50307[(7)]);
var inst_50238 = (inst_50234 == null);
var inst_50239 = cljs.core.not(inst_50238);
var state_50307__$1 = state_50307;
if(inst_50239){
var statearr_50349_51804 = state_50307__$1;
(statearr_50349_51804[(1)] = (13));

} else {
var statearr_50350_51805 = state_50307__$1;
(statearr_50350_51805[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (9))){
var inst_50209 = (state_50307[(8)]);
var state_50307__$1 = state_50307;
var statearr_50351_51811 = state_50307__$1;
(statearr_50351_51811[(2)] = inst_50209);

(statearr_50351_51811[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (5))){
var state_50307__$1 = state_50307;
var statearr_50352_51823 = state_50307__$1;
(statearr_50352_51823[(2)] = true);

(statearr_50352_51823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (14))){
var state_50307__$1 = state_50307;
var statearr_50353_51824 = state_50307__$1;
(statearr_50353_51824[(2)] = false);

(statearr_50353_51824[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (26))){
var inst_50267 = (state_50307[(11)]);
var inst_50274 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_50267);
var state_50307__$1 = state_50307;
var statearr_50354_51835 = state_50307__$1;
(statearr_50354_51835[(2)] = inst_50274);

(statearr_50354_51835[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (16))){
var state_50307__$1 = state_50307;
var statearr_50355_51843 = state_50307__$1;
(statearr_50355_51843[(2)] = true);

(statearr_50355_51843[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (38))){
var inst_50297 = (state_50307[(2)]);
var state_50307__$1 = state_50307;
var statearr_50356_51852 = state_50307__$1;
(statearr_50356_51852[(2)] = inst_50297);

(statearr_50356_51852[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (30))){
var inst_50259 = (state_50307[(13)]);
var inst_50258 = (state_50307[(10)]);
var inst_50267 = (state_50307[(11)]);
var inst_50284 = cljs.core.empty_QMARK_(inst_50258);
var inst_50285 = (inst_50259.cljs$core$IFn$_invoke$arity$1 ? inst_50259.cljs$core$IFn$_invoke$arity$1(inst_50267) : inst_50259.call(null,inst_50267));
var inst_50286 = cljs.core.not(inst_50285);
var inst_50287 = ((inst_50284) && (inst_50286));
var state_50307__$1 = state_50307;
var statearr_50357_51856 = state_50307__$1;
(statearr_50357_51856[(2)] = inst_50287);

(statearr_50357_51856[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (10))){
var inst_50209 = (state_50307[(8)]);
var inst_50230 = (state_50307[(2)]);
var inst_50231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50230,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_50232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50230,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_50233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50230,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_50234 = inst_50209;
var state_50307__$1 = (function (){var statearr_50358 = state_50307;
(statearr_50358[(16)] = inst_50231);

(statearr_50358[(7)] = inst_50234);

(statearr_50358[(17)] = inst_50233);

(statearr_50358[(18)] = inst_50232);

return statearr_50358;
})();
var statearr_50359_51874 = state_50307__$1;
(statearr_50359_51874[(2)] = null);

(statearr_50359_51874[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (18))){
var inst_50249 = (state_50307[(2)]);
var state_50307__$1 = state_50307;
var statearr_50360_51875 = state_50307__$1;
(statearr_50360_51875[(2)] = inst_50249);

(statearr_50360_51875[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (37))){
var state_50307__$1 = state_50307;
var statearr_50361_51880 = state_50307__$1;
(statearr_50361_51880[(2)] = null);

(statearr_50361_51880[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (8))){
var inst_50209 = (state_50307[(8)]);
var inst_50227 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50209);
var state_50307__$1 = state_50307;
var statearr_50362_51886 = state_50307__$1;
(statearr_50362_51886[(2)] = inst_50227);

(statearr_50362_51886[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__49411__auto__ = null;
var cljs$core$async$mix_$_state_machine__49411__auto____0 = (function (){
var statearr_50363 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50363[(0)] = cljs$core$async$mix_$_state_machine__49411__auto__);

(statearr_50363[(1)] = (1));

return statearr_50363;
});
var cljs$core$async$mix_$_state_machine__49411__auto____1 = (function (state_50307){
while(true){
var ret_value__49412__auto__ = (function (){try{while(true){
var result__49413__auto__ = switch__49410__auto__(state_50307);
if(cljs.core.keyword_identical_QMARK_(result__49413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49413__auto__;
}
break;
}
}catch (e50364){if((e50364 instanceof Object)){
var ex__49414__auto__ = e50364;
var statearr_50365_51907 = state_50307;
(statearr_50365_51907[(5)] = ex__49414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50364;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51909 = state_50307;
state_50307 = G__51909;
continue;
} else {
return ret_value__49412__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__49411__auto__ = function(state_50307){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__49411__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__49411__auto____1.call(this,state_50307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__49411__auto____0;
cljs$core$async$mix_$_state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__49411__auto____1;
return cljs$core$async$mix_$_state_machine__49411__auto__;
})()
})();
var state__49513__auto__ = (function (){var statearr_50366 = (f__49512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49512__auto__.cljs$core$IFn$_invoke$arity$0() : f__49512__auto__.call(null));
(statearr_50366[(6)] = c__49511__auto___51714);

return statearr_50366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49513__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_51918 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_51918(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_51924 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_51924(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_51940 = (function() {
var G__51941 = null;
var G__51941__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__51941__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__51941 = function(p,v){
switch(arguments.length){
case 1:
return G__51941__1.call(this,p);
case 2:
return G__51941__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__51941.cljs$core$IFn$_invoke$arity$1 = G__51941__1;
G__51941.cljs$core$IFn$_invoke$arity$2 = G__51941__2;
return G__51941;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__50368 = arguments.length;
switch (G__50368) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_51940.cljs$core$IFn$_invoke$arity$1(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_51940.cljs$core$IFn$_invoke$arity$2(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__50371 = arguments.length;
switch (G__50371) {
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
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__50369_SHARP_){
if(cljs.core.truth_((p1__50369_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__50369_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__50369_SHARP_.call(null,topic)))){
return p1__50369_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__50369_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50372 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50372 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta50373){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta50373 = meta50373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50374,meta50373__$1){
var self__ = this;
var _50374__$1 = this;
return (new cljs.core.async.t_cljs$core$async50372(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta50373__$1));
}));

(cljs.core.async.t_cljs$core$async50372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50374){
var self__ = this;
var _50374__$1 = this;
return self__.meta50373;
}));

(cljs.core.async.t_cljs$core$async50372.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50372.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async50372.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50372.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async50372.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async50372.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async50372.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async50372.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta50373","meta50373",1919594420,null)], null);
}));

(cljs.core.async.t_cljs$core$async50372.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50372.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50372");

(cljs.core.async.t_cljs$core$async50372.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50372");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50372.
 */
cljs.core.async.__GT_t_cljs$core$async50372 = (function cljs$core$async$__GT_t_cljs$core$async50372(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta50373){
return (new cljs.core.async.t_cljs$core$async50372(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta50373));
});

}

return (new cljs.core.async.t_cljs$core$async50372(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49511__auto___51972 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49512__auto__ = (function (){var switch__49410__auto__ = (function (state_50446){
var state_val_50447 = (state_50446[(1)]);
if((state_val_50447 === (7))){
var inst_50442 = (state_50446[(2)]);
var state_50446__$1 = state_50446;
var statearr_50448_51975 = state_50446__$1;
(statearr_50448_51975[(2)] = inst_50442);

(statearr_50448_51975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50447 === (20))){
var state_50446__$1 = state_50446;
var statearr_50449_51976 = state_50446__$1;
(statearr_50449_51976[(2)] = null);

(statearr_50449_51976[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50447 === (1))){
var state_50446__$1 = state_50446;
var statearr_50450_51977 = state_50446__$1;
(statearr_50450_51977[(2)] = null);

(statearr_50450_51977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50447 === (24))){
var inst_50425 = (state_50446[(7)]);
var inst_50434 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_50425);
var state_50446__$1 = state_50446;
var statearr_50451_51982 = state_50446__$1;
(statearr_50451_51982[(2)] = inst_50434);

(statearr_50451_51982[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50447 === (4))){
var inst_50377 = (state_50446[(8)]);
var inst_50377__$1 = (state_50446[(2)]);
var inst_50378 = (inst_50377__$1 == null);
var state_50446__$1 = (function (){var statearr_50452 = state_50446;
(statearr_50452[(8)] = inst_50377__$1);

return statearr_50452;
})();
if(cljs.core.truth_(inst_50378)){
var statearr_50453_51989 = state_50446__$1;
(statearr_50453_51989[(1)] = (5));

} else {
var statearr_50454_51990 = state_50446__$1;
(statearr_50454_51990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50447 === (15))){
var inst_50419 = (state_50446[(2)]);
var state_50446__$1 = state_50446;
var statearr_50455_51996 = state_50446__$1;
(statearr_50455_51996[(2)] = inst_50419);

(statearr_50455_51996[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50447 === (21))){
var inst_50439 = (state_50446[(2)]);
var state_50446__$1 = (function (){var statearr_50456 = state_50446;
(statearr_50456[(9)] = inst_50439);

return statearr_50456;
})();
var statearr_50457_52000 = state_50446__$1;
(statearr_50457_52000[(2)] = null);

(statearr_50457_52000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50447 === (13))){
var inst_50401 = (state_50446[(10)]);
var inst_50403 = cljs.core.chunked_seq_QMARK_(inst_50401);
var state_50446__$1 = state_50446;
if(inst_50403){
var statearr_50458_52003 = state_50446__$1;
(statearr_50458_52003[(1)] = (16));

} else {
var statearr_50459_52008 = state_50446__$1;
(statearr_50459_52008[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50447 === (22))){
var inst_50431 = (state_50446[(2)]);
var state_50446__$1 = state_50446;
if(cljs.core.truth_(inst_50431)){
var statearr_50460_52011 = state_50446__$1;
(statearr_50460_52011[(1)] = (23));

} else {
var statearr_50461_52016 = state_50446__$1;
(statearr_50461_52016[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50447 === (6))){
var inst_50377 = (state_50446[(8)]);
var inst_50427 = (state_50446[(11)]);
var inst_50425 = (state_50446[(7)]);
var inst_50425__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_50377) : topic_fn.call(null,inst_50377));
var inst_50426 = cljs.core.deref(mults);
var inst_50427__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50426,inst_50425__$1);
var state_50446__$1 = (function (){var statearr_50462 = state_50446;
(statearr_50462[(11)] = inst_50427__$1);

(statearr_50462[(7)] = inst_50425__$1);

return statearr_50462;
})();
if(cljs.core.truth_(inst_50427__$1)){
var statearr_50463_52030 = state_50446__$1;
(statearr_50463_52030[(1)] = (19));

} else {
var statearr_50464_52031 = state_50446__$1;
(statearr_50464_52031[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50447 === (25))){
var inst_50436 = (state_50446[(2)]);
var state_50446__$1 = state_50446;
var statearr_50465_52036 = state_50446__$1;
(statearr_50465_52036[(2)] = inst_50436);

(statearr_50465_52036[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50447 === (17))){
var inst_50401 = (state_50446[(10)]);
var inst_50410 = cljs.core.first(inst_50401);
var inst_50411 = cljs.core.async.muxch_STAR_(inst_50410);
var inst_50412 = cljs.core.async.close_BANG_(inst_50411);
var inst_50413 = cljs.core.next(inst_50401);
var inst_50387 = inst_50413;
var inst_50388 = null;
var inst_50389 = (0);
var inst_50390 = (0);
var state_50446__$1 = (function (){var statearr_50466 = state_50446;
(statearr_50466[(12)] = inst_50389);

(statearr_50466[(13)] = inst_50390);

(statearr_50466[(14)] = inst_50388);

(statearr_50466[(15)] = inst_50387);

(statearr_50466[(16)] = inst_50412);

return statearr_50466;
})();
var statearr_50467_52054 = state_50446__$1;
(statearr_50467_52054[(2)] = null);

(statearr_50467_52054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50447 === (3))){
var inst_50444 = (state_50446[(2)]);
var state_50446__$1 = state_50446;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50446__$1,inst_50444);
} else {
if((state_val_50447 === (12))){
var inst_50421 = (state_50446[(2)]);
var state_50446__$1 = state_50446;
var statearr_50468_52055 = state_50446__$1;
(statearr_50468_52055[(2)] = inst_50421);

(statearr_50468_52055[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50447 === (2))){
var state_50446__$1 = state_50446;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50446__$1,(4),ch);
} else {
if((state_val_50447 === (23))){
var state_50446__$1 = state_50446;
var statearr_50469_52056 = state_50446__$1;
(statearr_50469_52056[(2)] = null);

(statearr_50469_52056[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50447 === (19))){
var inst_50377 = (state_50446[(8)]);
var inst_50427 = (state_50446[(11)]);
var inst_50429 = cljs.core.async.muxch_STAR_(inst_50427);
var state_50446__$1 = state_50446;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50446__$1,(22),inst_50429,inst_50377);
} else {
if((state_val_50447 === (11))){
var inst_50401 = (state_50446[(10)]);
var inst_50387 = (state_50446[(15)]);
var inst_50401__$1 = cljs.core.seq(inst_50387);
var state_50446__$1 = (function (){var statearr_50470 = state_50446;
(statearr_50470[(10)] = inst_50401__$1);

return statearr_50470;
})();
if(inst_50401__$1){
var statearr_50471_52068 = state_50446__$1;
(statearr_50471_52068[(1)] = (13));

} else {
var statearr_50472_52069 = state_50446__$1;
(statearr_50472_52069[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50447 === (9))){
var inst_50423 = (state_50446[(2)]);
var state_50446__$1 = state_50446;
var statearr_50473_52071 = state_50446__$1;
(statearr_50473_52071[(2)] = inst_50423);

(statearr_50473_52071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50447 === (5))){
var inst_50384 = cljs.core.deref(mults);
var inst_50385 = cljs.core.vals(inst_50384);
var inst_50386 = cljs.core.seq(inst_50385);
var inst_50387 = inst_50386;
var inst_50388 = null;
var inst_50389 = (0);
var inst_50390 = (0);
var state_50446__$1 = (function (){var statearr_50474 = state_50446;
(statearr_50474[(12)] = inst_50389);

(statearr_50474[(13)] = inst_50390);

(statearr_50474[(14)] = inst_50388);

(statearr_50474[(15)] = inst_50387);

return statearr_50474;
})();
var statearr_50475_52072 = state_50446__$1;
(statearr_50475_52072[(2)] = null);

(statearr_50475_52072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50447 === (14))){
var state_50446__$1 = state_50446;
var statearr_50479_52073 = state_50446__$1;
(statearr_50479_52073[(2)] = null);

(statearr_50479_52073[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50447 === (16))){
var inst_50401 = (state_50446[(10)]);
var inst_50405 = cljs.core.chunk_first(inst_50401);
var inst_50406 = cljs.core.chunk_rest(inst_50401);
var inst_50407 = cljs.core.count(inst_50405);
var inst_50387 = inst_50406;
var inst_50388 = inst_50405;
var inst_50389 = inst_50407;
var inst_50390 = (0);
var state_50446__$1 = (function (){var statearr_50480 = state_50446;
(statearr_50480[(12)] = inst_50389);

(statearr_50480[(13)] = inst_50390);

(statearr_50480[(14)] = inst_50388);

(statearr_50480[(15)] = inst_50387);

return statearr_50480;
})();
var statearr_50481_52077 = state_50446__$1;
(statearr_50481_52077[(2)] = null);

(statearr_50481_52077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50447 === (10))){
var inst_50389 = (state_50446[(12)]);
var inst_50390 = (state_50446[(13)]);
var inst_50388 = (state_50446[(14)]);
var inst_50387 = (state_50446[(15)]);
var inst_50395 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_50388,inst_50390);
var inst_50396 = cljs.core.async.muxch_STAR_(inst_50395);
var inst_50397 = cljs.core.async.close_BANG_(inst_50396);
var inst_50398 = (inst_50390 + (1));
var tmp50476 = inst_50389;
var tmp50477 = inst_50388;
var tmp50478 = inst_50387;
var inst_50387__$1 = tmp50478;
var inst_50388__$1 = tmp50477;
var inst_50389__$1 = tmp50476;
var inst_50390__$1 = inst_50398;
var state_50446__$1 = (function (){var statearr_50482 = state_50446;
(statearr_50482[(12)] = inst_50389__$1);

(statearr_50482[(17)] = inst_50397);

(statearr_50482[(13)] = inst_50390__$1);

(statearr_50482[(14)] = inst_50388__$1);

(statearr_50482[(15)] = inst_50387__$1);

return statearr_50482;
})();
var statearr_50483_52081 = state_50446__$1;
(statearr_50483_52081[(2)] = null);

(statearr_50483_52081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50447 === (18))){
var inst_50416 = (state_50446[(2)]);
var state_50446__$1 = state_50446;
var statearr_50484_52082 = state_50446__$1;
(statearr_50484_52082[(2)] = inst_50416);

(statearr_50484_52082[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50447 === (8))){
var inst_50389 = (state_50446[(12)]);
var inst_50390 = (state_50446[(13)]);
var inst_50392 = (inst_50390 < inst_50389);
var inst_50393 = inst_50392;
var state_50446__$1 = state_50446;
if(cljs.core.truth_(inst_50393)){
var statearr_50485_52083 = state_50446__$1;
(statearr_50485_52083[(1)] = (10));

} else {
var statearr_50486_52084 = state_50446__$1;
(statearr_50486_52084[(1)] = (11));

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
var cljs$core$async$state_machine__49411__auto__ = null;
var cljs$core$async$state_machine__49411__auto____0 = (function (){
var statearr_50487 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50487[(0)] = cljs$core$async$state_machine__49411__auto__);

(statearr_50487[(1)] = (1));

return statearr_50487;
});
var cljs$core$async$state_machine__49411__auto____1 = (function (state_50446){
while(true){
var ret_value__49412__auto__ = (function (){try{while(true){
var result__49413__auto__ = switch__49410__auto__(state_50446);
if(cljs.core.keyword_identical_QMARK_(result__49413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49413__auto__;
}
break;
}
}catch (e50488){if((e50488 instanceof Object)){
var ex__49414__auto__ = e50488;
var statearr_50489_52100 = state_50446;
(statearr_50489_52100[(5)] = ex__49414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50488;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52102 = state_50446;
state_50446 = G__52102;
continue;
} else {
return ret_value__49412__auto__;
}
break;
}
});
cljs$core$async$state_machine__49411__auto__ = function(state_50446){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49411__auto____1.call(this,state_50446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49411__auto____0;
cljs$core$async$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49411__auto____1;
return cljs$core$async$state_machine__49411__auto__;
})()
})();
var state__49513__auto__ = (function (){var statearr_50490 = (f__49512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49512__auto__.cljs$core$IFn$_invoke$arity$0() : f__49512__auto__.call(null));
(statearr_50490[(6)] = c__49511__auto___51972);

return statearr_50490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49513__auto__);
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
var G__50492 = arguments.length;
switch (G__50492) {
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
var G__50494 = arguments.length;
switch (G__50494) {
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
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__50496 = arguments.length;
switch (G__50496) {
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
var c__49511__auto___52116 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49512__auto__ = (function (){var switch__49410__auto__ = (function (state_50535){
var state_val_50536 = (state_50535[(1)]);
if((state_val_50536 === (7))){
var state_50535__$1 = state_50535;
var statearr_50537_52117 = state_50535__$1;
(statearr_50537_52117[(2)] = null);

(statearr_50537_52117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50536 === (1))){
var state_50535__$1 = state_50535;
var statearr_50538_52118 = state_50535__$1;
(statearr_50538_52118[(2)] = null);

(statearr_50538_52118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50536 === (4))){
var inst_50499 = (state_50535[(7)]);
var inst_50501 = (inst_50499 < cnt);
var state_50535__$1 = state_50535;
if(cljs.core.truth_(inst_50501)){
var statearr_50539_52120 = state_50535__$1;
(statearr_50539_52120[(1)] = (6));

} else {
var statearr_50540_52122 = state_50535__$1;
(statearr_50540_52122[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50536 === (15))){
var inst_50531 = (state_50535[(2)]);
var state_50535__$1 = state_50535;
var statearr_50541_52123 = state_50535__$1;
(statearr_50541_52123[(2)] = inst_50531);

(statearr_50541_52123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50536 === (13))){
var inst_50524 = cljs.core.async.close_BANG_(out);
var state_50535__$1 = state_50535;
var statearr_50542_52124 = state_50535__$1;
(statearr_50542_52124[(2)] = inst_50524);

(statearr_50542_52124[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50536 === (6))){
var state_50535__$1 = state_50535;
var statearr_50543_52125 = state_50535__$1;
(statearr_50543_52125[(2)] = null);

(statearr_50543_52125[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50536 === (3))){
var inst_50533 = (state_50535[(2)]);
var state_50535__$1 = state_50535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50535__$1,inst_50533);
} else {
if((state_val_50536 === (12))){
var inst_50521 = (state_50535[(8)]);
var inst_50521__$1 = (state_50535[(2)]);
var inst_50522 = cljs.core.some(cljs.core.nil_QMARK_,inst_50521__$1);
var state_50535__$1 = (function (){var statearr_50544 = state_50535;
(statearr_50544[(8)] = inst_50521__$1);

return statearr_50544;
})();
if(cljs.core.truth_(inst_50522)){
var statearr_50545_52126 = state_50535__$1;
(statearr_50545_52126[(1)] = (13));

} else {
var statearr_50546_52127 = state_50535__$1;
(statearr_50546_52127[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50536 === (2))){
var inst_50498 = cljs.core.reset_BANG_(dctr,cnt);
var inst_50499 = (0);
var state_50535__$1 = (function (){var statearr_50547 = state_50535;
(statearr_50547[(9)] = inst_50498);

(statearr_50547[(7)] = inst_50499);

return statearr_50547;
})();
var statearr_50548_52129 = state_50535__$1;
(statearr_50548_52129[(2)] = null);

(statearr_50548_52129[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50536 === (11))){
var inst_50499 = (state_50535[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50535,(10),Object,null,(9));
var inst_50508 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_50499) : chs__$1.call(null,inst_50499));
var inst_50509 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_50499) : done.call(null,inst_50499));
var inst_50510 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_50508,inst_50509);
var state_50535__$1 = state_50535;
var statearr_50549_52130 = state_50535__$1;
(statearr_50549_52130[(2)] = inst_50510);


cljs.core.async.impl.ioc_helpers.process_exception(state_50535__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50536 === (9))){
var inst_50499 = (state_50535[(7)]);
var inst_50512 = (state_50535[(2)]);
var inst_50513 = (inst_50499 + (1));
var inst_50499__$1 = inst_50513;
var state_50535__$1 = (function (){var statearr_50550 = state_50535;
(statearr_50550[(10)] = inst_50512);

(statearr_50550[(7)] = inst_50499__$1);

return statearr_50550;
})();
var statearr_50551_52131 = state_50535__$1;
(statearr_50551_52131[(2)] = null);

(statearr_50551_52131[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50536 === (5))){
var inst_50519 = (state_50535[(2)]);
var state_50535__$1 = (function (){var statearr_50552 = state_50535;
(statearr_50552[(11)] = inst_50519);

return statearr_50552;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50535__$1,(12),dchan);
} else {
if((state_val_50536 === (14))){
var inst_50521 = (state_50535[(8)]);
var inst_50526 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_50521);
var state_50535__$1 = state_50535;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50535__$1,(16),out,inst_50526);
} else {
if((state_val_50536 === (16))){
var inst_50528 = (state_50535[(2)]);
var state_50535__$1 = (function (){var statearr_50553 = state_50535;
(statearr_50553[(12)] = inst_50528);

return statearr_50553;
})();
var statearr_50554_52132 = state_50535__$1;
(statearr_50554_52132[(2)] = null);

(statearr_50554_52132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50536 === (10))){
var inst_50503 = (state_50535[(2)]);
var inst_50504 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_50535__$1 = (function (){var statearr_50555 = state_50535;
(statearr_50555[(13)] = inst_50503);

return statearr_50555;
})();
var statearr_50556_52134 = state_50535__$1;
(statearr_50556_52134[(2)] = inst_50504);


cljs.core.async.impl.ioc_helpers.process_exception(state_50535__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50536 === (8))){
var inst_50517 = (state_50535[(2)]);
var state_50535__$1 = state_50535;
var statearr_50557_52136 = state_50535__$1;
(statearr_50557_52136[(2)] = inst_50517);

(statearr_50557_52136[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__49411__auto__ = null;
var cljs$core$async$state_machine__49411__auto____0 = (function (){
var statearr_50558 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50558[(0)] = cljs$core$async$state_machine__49411__auto__);

(statearr_50558[(1)] = (1));

return statearr_50558;
});
var cljs$core$async$state_machine__49411__auto____1 = (function (state_50535){
while(true){
var ret_value__49412__auto__ = (function (){try{while(true){
var result__49413__auto__ = switch__49410__auto__(state_50535);
if(cljs.core.keyword_identical_QMARK_(result__49413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49413__auto__;
}
break;
}
}catch (e50559){if((e50559 instanceof Object)){
var ex__49414__auto__ = e50559;
var statearr_50560_52139 = state_50535;
(statearr_50560_52139[(5)] = ex__49414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50559;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52144 = state_50535;
state_50535 = G__52144;
continue;
} else {
return ret_value__49412__auto__;
}
break;
}
});
cljs$core$async$state_machine__49411__auto__ = function(state_50535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49411__auto____1.call(this,state_50535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49411__auto____0;
cljs$core$async$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49411__auto____1;
return cljs$core$async$state_machine__49411__auto__;
})()
})();
var state__49513__auto__ = (function (){var statearr_50561 = (f__49512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49512__auto__.cljs$core$IFn$_invoke$arity$0() : f__49512__auto__.call(null));
(statearr_50561[(6)] = c__49511__auto___52116);

return statearr_50561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49513__auto__);
}));


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
var G__50564 = arguments.length;
switch (G__50564) {
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
var c__49511__auto___52146 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49512__auto__ = (function (){var switch__49410__auto__ = (function (state_50596){
var state_val_50597 = (state_50596[(1)]);
if((state_val_50597 === (7))){
var inst_50575 = (state_50596[(7)]);
var inst_50576 = (state_50596[(8)]);
var inst_50575__$1 = (state_50596[(2)]);
var inst_50576__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50575__$1,(0),null);
var inst_50577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50575__$1,(1),null);
var inst_50578 = (inst_50576__$1 == null);
var state_50596__$1 = (function (){var statearr_50598 = state_50596;
(statearr_50598[(7)] = inst_50575__$1);

(statearr_50598[(9)] = inst_50577);

(statearr_50598[(8)] = inst_50576__$1);

return statearr_50598;
})();
if(cljs.core.truth_(inst_50578)){
var statearr_50599_52148 = state_50596__$1;
(statearr_50599_52148[(1)] = (8));

} else {
var statearr_50600_52149 = state_50596__$1;
(statearr_50600_52149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50597 === (1))){
var inst_50565 = cljs.core.vec(chs);
var inst_50566 = inst_50565;
var state_50596__$1 = (function (){var statearr_50601 = state_50596;
(statearr_50601[(10)] = inst_50566);

return statearr_50601;
})();
var statearr_50602_52151 = state_50596__$1;
(statearr_50602_52151[(2)] = null);

(statearr_50602_52151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50597 === (4))){
var inst_50566 = (state_50596[(10)]);
var state_50596__$1 = state_50596;
return cljs.core.async.ioc_alts_BANG_(state_50596__$1,(7),inst_50566);
} else {
if((state_val_50597 === (6))){
var inst_50592 = (state_50596[(2)]);
var state_50596__$1 = state_50596;
var statearr_50603_52152 = state_50596__$1;
(statearr_50603_52152[(2)] = inst_50592);

(statearr_50603_52152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50597 === (3))){
var inst_50594 = (state_50596[(2)]);
var state_50596__$1 = state_50596;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50596__$1,inst_50594);
} else {
if((state_val_50597 === (2))){
var inst_50566 = (state_50596[(10)]);
var inst_50568 = cljs.core.count(inst_50566);
var inst_50569 = (inst_50568 > (0));
var state_50596__$1 = state_50596;
if(cljs.core.truth_(inst_50569)){
var statearr_50605_52157 = state_50596__$1;
(statearr_50605_52157[(1)] = (4));

} else {
var statearr_50606_52158 = state_50596__$1;
(statearr_50606_52158[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50597 === (11))){
var inst_50566 = (state_50596[(10)]);
var inst_50585 = (state_50596[(2)]);
var tmp50604 = inst_50566;
var inst_50566__$1 = tmp50604;
var state_50596__$1 = (function (){var statearr_50607 = state_50596;
(statearr_50607[(11)] = inst_50585);

(statearr_50607[(10)] = inst_50566__$1);

return statearr_50607;
})();
var statearr_50608_52159 = state_50596__$1;
(statearr_50608_52159[(2)] = null);

(statearr_50608_52159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50597 === (9))){
var inst_50576 = (state_50596[(8)]);
var state_50596__$1 = state_50596;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50596__$1,(11),out,inst_50576);
} else {
if((state_val_50597 === (5))){
var inst_50590 = cljs.core.async.close_BANG_(out);
var state_50596__$1 = state_50596;
var statearr_50609_52160 = state_50596__$1;
(statearr_50609_52160[(2)] = inst_50590);

(statearr_50609_52160[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50597 === (10))){
var inst_50588 = (state_50596[(2)]);
var state_50596__$1 = state_50596;
var statearr_50610_52161 = state_50596__$1;
(statearr_50610_52161[(2)] = inst_50588);

(statearr_50610_52161[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50597 === (8))){
var inst_50575 = (state_50596[(7)]);
var inst_50577 = (state_50596[(9)]);
var inst_50566 = (state_50596[(10)]);
var inst_50576 = (state_50596[(8)]);
var inst_50580 = (function (){var cs = inst_50566;
var vec__50571 = inst_50575;
var v = inst_50576;
var c = inst_50577;
return (function (p1__50562_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__50562_SHARP_);
});
})();
var inst_50581 = cljs.core.filterv(inst_50580,inst_50566);
var inst_50566__$1 = inst_50581;
var state_50596__$1 = (function (){var statearr_50611 = state_50596;
(statearr_50611[(10)] = inst_50566__$1);

return statearr_50611;
})();
var statearr_50612_52162 = state_50596__$1;
(statearr_50612_52162[(2)] = null);

(statearr_50612_52162[(1)] = (2));


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
var cljs$core$async$state_machine__49411__auto__ = null;
var cljs$core$async$state_machine__49411__auto____0 = (function (){
var statearr_50613 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50613[(0)] = cljs$core$async$state_machine__49411__auto__);

(statearr_50613[(1)] = (1));

return statearr_50613;
});
var cljs$core$async$state_machine__49411__auto____1 = (function (state_50596){
while(true){
var ret_value__49412__auto__ = (function (){try{while(true){
var result__49413__auto__ = switch__49410__auto__(state_50596);
if(cljs.core.keyword_identical_QMARK_(result__49413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49413__auto__;
}
break;
}
}catch (e50614){if((e50614 instanceof Object)){
var ex__49414__auto__ = e50614;
var statearr_50615_52163 = state_50596;
(statearr_50615_52163[(5)] = ex__49414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50614;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52165 = state_50596;
state_50596 = G__52165;
continue;
} else {
return ret_value__49412__auto__;
}
break;
}
});
cljs$core$async$state_machine__49411__auto__ = function(state_50596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49411__auto____1.call(this,state_50596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49411__auto____0;
cljs$core$async$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49411__auto____1;
return cljs$core$async$state_machine__49411__auto__;
})()
})();
var state__49513__auto__ = (function (){var statearr_50616 = (f__49512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49512__auto__.cljs$core$IFn$_invoke$arity$0() : f__49512__auto__.call(null));
(statearr_50616[(6)] = c__49511__auto___52146);

return statearr_50616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49513__auto__);
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
var G__50618 = arguments.length;
switch (G__50618) {
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
var c__49511__auto___52171 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49512__auto__ = (function (){var switch__49410__auto__ = (function (state_50642){
var state_val_50643 = (state_50642[(1)]);
if((state_val_50643 === (7))){
var inst_50624 = (state_50642[(7)]);
var inst_50624__$1 = (state_50642[(2)]);
var inst_50625 = (inst_50624__$1 == null);
var inst_50626 = cljs.core.not(inst_50625);
var state_50642__$1 = (function (){var statearr_50644 = state_50642;
(statearr_50644[(7)] = inst_50624__$1);

return statearr_50644;
})();
if(inst_50626){
var statearr_50645_52175 = state_50642__$1;
(statearr_50645_52175[(1)] = (8));

} else {
var statearr_50646_52180 = state_50642__$1;
(statearr_50646_52180[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50643 === (1))){
var inst_50619 = (0);
var state_50642__$1 = (function (){var statearr_50647 = state_50642;
(statearr_50647[(8)] = inst_50619);

return statearr_50647;
})();
var statearr_50648_52182 = state_50642__$1;
(statearr_50648_52182[(2)] = null);

(statearr_50648_52182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50643 === (4))){
var state_50642__$1 = state_50642;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50642__$1,(7),ch);
} else {
if((state_val_50643 === (6))){
var inst_50637 = (state_50642[(2)]);
var state_50642__$1 = state_50642;
var statearr_50649_52183 = state_50642__$1;
(statearr_50649_52183[(2)] = inst_50637);

(statearr_50649_52183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50643 === (3))){
var inst_50639 = (state_50642[(2)]);
var inst_50640 = cljs.core.async.close_BANG_(out);
var state_50642__$1 = (function (){var statearr_50650 = state_50642;
(statearr_50650[(9)] = inst_50639);

return statearr_50650;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50642__$1,inst_50640);
} else {
if((state_val_50643 === (2))){
var inst_50619 = (state_50642[(8)]);
var inst_50621 = (inst_50619 < n);
var state_50642__$1 = state_50642;
if(cljs.core.truth_(inst_50621)){
var statearr_50651_52186 = state_50642__$1;
(statearr_50651_52186[(1)] = (4));

} else {
var statearr_50652_52187 = state_50642__$1;
(statearr_50652_52187[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50643 === (11))){
var inst_50619 = (state_50642[(8)]);
var inst_50629 = (state_50642[(2)]);
var inst_50630 = (inst_50619 + (1));
var inst_50619__$1 = inst_50630;
var state_50642__$1 = (function (){var statearr_50653 = state_50642;
(statearr_50653[(10)] = inst_50629);

(statearr_50653[(8)] = inst_50619__$1);

return statearr_50653;
})();
var statearr_50654_52190 = state_50642__$1;
(statearr_50654_52190[(2)] = null);

(statearr_50654_52190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50643 === (9))){
var state_50642__$1 = state_50642;
var statearr_50655_52193 = state_50642__$1;
(statearr_50655_52193[(2)] = null);

(statearr_50655_52193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50643 === (5))){
var state_50642__$1 = state_50642;
var statearr_50656_52194 = state_50642__$1;
(statearr_50656_52194[(2)] = null);

(statearr_50656_52194[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50643 === (10))){
var inst_50634 = (state_50642[(2)]);
var state_50642__$1 = state_50642;
var statearr_50657_52195 = state_50642__$1;
(statearr_50657_52195[(2)] = inst_50634);

(statearr_50657_52195[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50643 === (8))){
var inst_50624 = (state_50642[(7)]);
var state_50642__$1 = state_50642;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50642__$1,(11),out,inst_50624);
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
var cljs$core$async$state_machine__49411__auto__ = null;
var cljs$core$async$state_machine__49411__auto____0 = (function (){
var statearr_50658 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50658[(0)] = cljs$core$async$state_machine__49411__auto__);

(statearr_50658[(1)] = (1));

return statearr_50658;
});
var cljs$core$async$state_machine__49411__auto____1 = (function (state_50642){
while(true){
var ret_value__49412__auto__ = (function (){try{while(true){
var result__49413__auto__ = switch__49410__auto__(state_50642);
if(cljs.core.keyword_identical_QMARK_(result__49413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49413__auto__;
}
break;
}
}catch (e50659){if((e50659 instanceof Object)){
var ex__49414__auto__ = e50659;
var statearr_50660_52200 = state_50642;
(statearr_50660_52200[(5)] = ex__49414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50659;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52201 = state_50642;
state_50642 = G__52201;
continue;
} else {
return ret_value__49412__auto__;
}
break;
}
});
cljs$core$async$state_machine__49411__auto__ = function(state_50642){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49411__auto____1.call(this,state_50642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49411__auto____0;
cljs$core$async$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49411__auto____1;
return cljs$core$async$state_machine__49411__auto__;
})()
})();
var state__49513__auto__ = (function (){var statearr_50661 = (f__49512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49512__auto__.cljs$core$IFn$_invoke$arity$0() : f__49512__auto__.call(null));
(statearr_50661[(6)] = c__49511__auto___52171);

return statearr_50661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49513__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50663 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50663 = (function (f,ch,meta50664){
this.f = f;
this.ch = ch;
this.meta50664 = meta50664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50665,meta50664__$1){
var self__ = this;
var _50665__$1 = this;
return (new cljs.core.async.t_cljs$core$async50663(self__.f,self__.ch,meta50664__$1));
}));

(cljs.core.async.t_cljs$core$async50663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50665){
var self__ = this;
var _50665__$1 = this;
return self__.meta50664;
}));

(cljs.core.async.t_cljs$core$async50663.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50663.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async50663.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async50663.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50663.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50666 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50666 = (function (f,ch,meta50664,_,fn1,meta50667){
this.f = f;
this.ch = ch;
this.meta50664 = meta50664;
this._ = _;
this.fn1 = fn1;
this.meta50667 = meta50667;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50668,meta50667__$1){
var self__ = this;
var _50668__$1 = this;
return (new cljs.core.async.t_cljs$core$async50666(self__.f,self__.ch,self__.meta50664,self__._,self__.fn1,meta50667__$1));
}));

(cljs.core.async.t_cljs$core$async50666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50668){
var self__ = this;
var _50668__$1 = this;
return self__.meta50667;
}));

(cljs.core.async.t_cljs$core$async50666.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50666.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async50666.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50666.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__50662_SHARP_){
var G__50669 = (((p1__50662_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__50662_SHARP_) : self__.f.call(null,p1__50662_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__50669) : f1.call(null,G__50669));
});
}));

(cljs.core.async.t_cljs$core$async50666.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50664","meta50664",1477363641,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async50663","cljs.core.async/t_cljs$core$async50663",659577045,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta50667","meta50667",-1902694623,null)], null);
}));

(cljs.core.async.t_cljs$core$async50666.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50666.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50666");

(cljs.core.async.t_cljs$core$async50666.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50666");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50666.
 */
cljs.core.async.__GT_t_cljs$core$async50666 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async50666(f__$1,ch__$1,meta50664__$1,___$2,fn1__$1,meta50667){
return (new cljs.core.async.t_cljs$core$async50666(f__$1,ch__$1,meta50664__$1,___$2,fn1__$1,meta50667));
});

}

return (new cljs.core.async.t_cljs$core$async50666(self__.f,self__.ch,self__.meta50664,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__50670 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__50670) : self__.f.call(null,G__50670));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async50663.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50663.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async50663.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50664","meta50664",1477363641,null)], null);
}));

(cljs.core.async.t_cljs$core$async50663.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50663.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50663");

(cljs.core.async.t_cljs$core$async50663.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50663");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50663.
 */
cljs.core.async.__GT_t_cljs$core$async50663 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async50663(f__$1,ch__$1,meta50664){
return (new cljs.core.async.t_cljs$core$async50663(f__$1,ch__$1,meta50664));
});

}

return (new cljs.core.async.t_cljs$core$async50663(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50671 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50671 = (function (f,ch,meta50672){
this.f = f;
this.ch = ch;
this.meta50672 = meta50672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50673,meta50672__$1){
var self__ = this;
var _50673__$1 = this;
return (new cljs.core.async.t_cljs$core$async50671(self__.f,self__.ch,meta50672__$1));
}));

(cljs.core.async.t_cljs$core$async50671.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50673){
var self__ = this;
var _50673__$1 = this;
return self__.meta50672;
}));

(cljs.core.async.t_cljs$core$async50671.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50671.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async50671.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50671.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async50671.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50671.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async50671.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50672","meta50672",-2146991169,null)], null);
}));

(cljs.core.async.t_cljs$core$async50671.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50671.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50671");

(cljs.core.async.t_cljs$core$async50671.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50671");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50671.
 */
cljs.core.async.__GT_t_cljs$core$async50671 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async50671(f__$1,ch__$1,meta50672){
return (new cljs.core.async.t_cljs$core$async50671(f__$1,ch__$1,meta50672));
});

}

return (new cljs.core.async.t_cljs$core$async50671(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50674 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50674 = (function (p,ch,meta50675){
this.p = p;
this.ch = ch;
this.meta50675 = meta50675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50676,meta50675__$1){
var self__ = this;
var _50676__$1 = this;
return (new cljs.core.async.t_cljs$core$async50674(self__.p,self__.ch,meta50675__$1));
}));

(cljs.core.async.t_cljs$core$async50674.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50676){
var self__ = this;
var _50676__$1 = this;
return self__.meta50675;
}));

(cljs.core.async.t_cljs$core$async50674.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50674.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async50674.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async50674.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50674.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async50674.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50674.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async50674.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50675","meta50675",-1729578578,null)], null);
}));

(cljs.core.async.t_cljs$core$async50674.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50674.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50674");

(cljs.core.async.t_cljs$core$async50674.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50674");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50674.
 */
cljs.core.async.__GT_t_cljs$core$async50674 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async50674(p__$1,ch__$1,meta50675){
return (new cljs.core.async.t_cljs$core$async50674(p__$1,ch__$1,meta50675));
});

}

return (new cljs.core.async.t_cljs$core$async50674(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__50678 = arguments.length;
switch (G__50678) {
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
var c__49511__auto___52362 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49512__auto__ = (function (){var switch__49410__auto__ = (function (state_50699){
var state_val_50700 = (state_50699[(1)]);
if((state_val_50700 === (7))){
var inst_50695 = (state_50699[(2)]);
var state_50699__$1 = state_50699;
var statearr_50701_52367 = state_50699__$1;
(statearr_50701_52367[(2)] = inst_50695);

(statearr_50701_52367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50700 === (1))){
var state_50699__$1 = state_50699;
var statearr_50702_52369 = state_50699__$1;
(statearr_50702_52369[(2)] = null);

(statearr_50702_52369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50700 === (4))){
var inst_50681 = (state_50699[(7)]);
var inst_50681__$1 = (state_50699[(2)]);
var inst_50682 = (inst_50681__$1 == null);
var state_50699__$1 = (function (){var statearr_50703 = state_50699;
(statearr_50703[(7)] = inst_50681__$1);

return statearr_50703;
})();
if(cljs.core.truth_(inst_50682)){
var statearr_50704_52370 = state_50699__$1;
(statearr_50704_52370[(1)] = (5));

} else {
var statearr_50705_52373 = state_50699__$1;
(statearr_50705_52373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50700 === (6))){
var inst_50681 = (state_50699[(7)]);
var inst_50686 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_50681) : p.call(null,inst_50681));
var state_50699__$1 = state_50699;
if(cljs.core.truth_(inst_50686)){
var statearr_50706_52377 = state_50699__$1;
(statearr_50706_52377[(1)] = (8));

} else {
var statearr_50707_52378 = state_50699__$1;
(statearr_50707_52378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50700 === (3))){
var inst_50697 = (state_50699[(2)]);
var state_50699__$1 = state_50699;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50699__$1,inst_50697);
} else {
if((state_val_50700 === (2))){
var state_50699__$1 = state_50699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50699__$1,(4),ch);
} else {
if((state_val_50700 === (11))){
var inst_50689 = (state_50699[(2)]);
var state_50699__$1 = state_50699;
var statearr_50708_52379 = state_50699__$1;
(statearr_50708_52379[(2)] = inst_50689);

(statearr_50708_52379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50700 === (9))){
var state_50699__$1 = state_50699;
var statearr_50709_52380 = state_50699__$1;
(statearr_50709_52380[(2)] = null);

(statearr_50709_52380[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50700 === (5))){
var inst_50684 = cljs.core.async.close_BANG_(out);
var state_50699__$1 = state_50699;
var statearr_50710_52381 = state_50699__$1;
(statearr_50710_52381[(2)] = inst_50684);

(statearr_50710_52381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50700 === (10))){
var inst_50692 = (state_50699[(2)]);
var state_50699__$1 = (function (){var statearr_50711 = state_50699;
(statearr_50711[(8)] = inst_50692);

return statearr_50711;
})();
var statearr_50712_52385 = state_50699__$1;
(statearr_50712_52385[(2)] = null);

(statearr_50712_52385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50700 === (8))){
var inst_50681 = (state_50699[(7)]);
var state_50699__$1 = state_50699;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50699__$1,(11),out,inst_50681);
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
var cljs$core$async$state_machine__49411__auto__ = null;
var cljs$core$async$state_machine__49411__auto____0 = (function (){
var statearr_50713 = [null,null,null,null,null,null,null,null,null];
(statearr_50713[(0)] = cljs$core$async$state_machine__49411__auto__);

(statearr_50713[(1)] = (1));

return statearr_50713;
});
var cljs$core$async$state_machine__49411__auto____1 = (function (state_50699){
while(true){
var ret_value__49412__auto__ = (function (){try{while(true){
var result__49413__auto__ = switch__49410__auto__(state_50699);
if(cljs.core.keyword_identical_QMARK_(result__49413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49413__auto__;
}
break;
}
}catch (e50714){if((e50714 instanceof Object)){
var ex__49414__auto__ = e50714;
var statearr_50715_52387 = state_50699;
(statearr_50715_52387[(5)] = ex__49414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50714;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52388 = state_50699;
state_50699 = G__52388;
continue;
} else {
return ret_value__49412__auto__;
}
break;
}
});
cljs$core$async$state_machine__49411__auto__ = function(state_50699){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49411__auto____1.call(this,state_50699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49411__auto____0;
cljs$core$async$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49411__auto____1;
return cljs$core$async$state_machine__49411__auto__;
})()
})();
var state__49513__auto__ = (function (){var statearr_50716 = (f__49512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49512__auto__.cljs$core$IFn$_invoke$arity$0() : f__49512__auto__.call(null));
(statearr_50716[(6)] = c__49511__auto___52362);

return statearr_50716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49513__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__50718 = arguments.length;
switch (G__50718) {
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
var c__49511__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49512__auto__ = (function (){var switch__49410__auto__ = (function (state_50780){
var state_val_50781 = (state_50780[(1)]);
if((state_val_50781 === (7))){
var inst_50776 = (state_50780[(2)]);
var state_50780__$1 = state_50780;
var statearr_50782_52394 = state_50780__$1;
(statearr_50782_52394[(2)] = inst_50776);

(statearr_50782_52394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50781 === (20))){
var inst_50746 = (state_50780[(7)]);
var inst_50757 = (state_50780[(2)]);
var inst_50758 = cljs.core.next(inst_50746);
var inst_50732 = inst_50758;
var inst_50733 = null;
var inst_50734 = (0);
var inst_50735 = (0);
var state_50780__$1 = (function (){var statearr_50783 = state_50780;
(statearr_50783[(8)] = inst_50735);

(statearr_50783[(9)] = inst_50757);

(statearr_50783[(10)] = inst_50734);

(statearr_50783[(11)] = inst_50732);

(statearr_50783[(12)] = inst_50733);

return statearr_50783;
})();
var statearr_50784_52395 = state_50780__$1;
(statearr_50784_52395[(2)] = null);

(statearr_50784_52395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50781 === (1))){
var state_50780__$1 = state_50780;
var statearr_50785_52397 = state_50780__$1;
(statearr_50785_52397[(2)] = null);

(statearr_50785_52397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50781 === (4))){
var inst_50721 = (state_50780[(13)]);
var inst_50721__$1 = (state_50780[(2)]);
var inst_50722 = (inst_50721__$1 == null);
var state_50780__$1 = (function (){var statearr_50786 = state_50780;
(statearr_50786[(13)] = inst_50721__$1);

return statearr_50786;
})();
if(cljs.core.truth_(inst_50722)){
var statearr_50787_52399 = state_50780__$1;
(statearr_50787_52399[(1)] = (5));

} else {
var statearr_50788_52400 = state_50780__$1;
(statearr_50788_52400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50781 === (15))){
var state_50780__$1 = state_50780;
var statearr_50792_52401 = state_50780__$1;
(statearr_50792_52401[(2)] = null);

(statearr_50792_52401[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50781 === (21))){
var state_50780__$1 = state_50780;
var statearr_50793_52402 = state_50780__$1;
(statearr_50793_52402[(2)] = null);

(statearr_50793_52402[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50781 === (13))){
var inst_50735 = (state_50780[(8)]);
var inst_50734 = (state_50780[(10)]);
var inst_50732 = (state_50780[(11)]);
var inst_50733 = (state_50780[(12)]);
var inst_50742 = (state_50780[(2)]);
var inst_50743 = (inst_50735 + (1));
var tmp50789 = inst_50734;
var tmp50790 = inst_50732;
var tmp50791 = inst_50733;
var inst_50732__$1 = tmp50790;
var inst_50733__$1 = tmp50791;
var inst_50734__$1 = tmp50789;
var inst_50735__$1 = inst_50743;
var state_50780__$1 = (function (){var statearr_50794 = state_50780;
(statearr_50794[(8)] = inst_50735__$1);

(statearr_50794[(14)] = inst_50742);

(statearr_50794[(10)] = inst_50734__$1);

(statearr_50794[(11)] = inst_50732__$1);

(statearr_50794[(12)] = inst_50733__$1);

return statearr_50794;
})();
var statearr_50795_52404 = state_50780__$1;
(statearr_50795_52404[(2)] = null);

(statearr_50795_52404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50781 === (22))){
var state_50780__$1 = state_50780;
var statearr_50796_52405 = state_50780__$1;
(statearr_50796_52405[(2)] = null);

(statearr_50796_52405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50781 === (6))){
var inst_50721 = (state_50780[(13)]);
var inst_50730 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_50721) : f.call(null,inst_50721));
var inst_50731 = cljs.core.seq(inst_50730);
var inst_50732 = inst_50731;
var inst_50733 = null;
var inst_50734 = (0);
var inst_50735 = (0);
var state_50780__$1 = (function (){var statearr_50797 = state_50780;
(statearr_50797[(8)] = inst_50735);

(statearr_50797[(10)] = inst_50734);

(statearr_50797[(11)] = inst_50732);

(statearr_50797[(12)] = inst_50733);

return statearr_50797;
})();
var statearr_50798_52406 = state_50780__$1;
(statearr_50798_52406[(2)] = null);

(statearr_50798_52406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50781 === (17))){
var inst_50746 = (state_50780[(7)]);
var inst_50750 = cljs.core.chunk_first(inst_50746);
var inst_50751 = cljs.core.chunk_rest(inst_50746);
var inst_50752 = cljs.core.count(inst_50750);
var inst_50732 = inst_50751;
var inst_50733 = inst_50750;
var inst_50734 = inst_50752;
var inst_50735 = (0);
var state_50780__$1 = (function (){var statearr_50799 = state_50780;
(statearr_50799[(8)] = inst_50735);

(statearr_50799[(10)] = inst_50734);

(statearr_50799[(11)] = inst_50732);

(statearr_50799[(12)] = inst_50733);

return statearr_50799;
})();
var statearr_50800_52407 = state_50780__$1;
(statearr_50800_52407[(2)] = null);

(statearr_50800_52407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50781 === (3))){
var inst_50778 = (state_50780[(2)]);
var state_50780__$1 = state_50780;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50780__$1,inst_50778);
} else {
if((state_val_50781 === (12))){
var inst_50766 = (state_50780[(2)]);
var state_50780__$1 = state_50780;
var statearr_50801_52408 = state_50780__$1;
(statearr_50801_52408[(2)] = inst_50766);

(statearr_50801_52408[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50781 === (2))){
var state_50780__$1 = state_50780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50780__$1,(4),in$);
} else {
if((state_val_50781 === (23))){
var inst_50774 = (state_50780[(2)]);
var state_50780__$1 = state_50780;
var statearr_50802_52409 = state_50780__$1;
(statearr_50802_52409[(2)] = inst_50774);

(statearr_50802_52409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50781 === (19))){
var inst_50761 = (state_50780[(2)]);
var state_50780__$1 = state_50780;
var statearr_50803_52413 = state_50780__$1;
(statearr_50803_52413[(2)] = inst_50761);

(statearr_50803_52413[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50781 === (11))){
var inst_50746 = (state_50780[(7)]);
var inst_50732 = (state_50780[(11)]);
var inst_50746__$1 = cljs.core.seq(inst_50732);
var state_50780__$1 = (function (){var statearr_50804 = state_50780;
(statearr_50804[(7)] = inst_50746__$1);

return statearr_50804;
})();
if(inst_50746__$1){
var statearr_50805_52414 = state_50780__$1;
(statearr_50805_52414[(1)] = (14));

} else {
var statearr_50806_52415 = state_50780__$1;
(statearr_50806_52415[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50781 === (9))){
var inst_50768 = (state_50780[(2)]);
var inst_50769 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_50780__$1 = (function (){var statearr_50807 = state_50780;
(statearr_50807[(15)] = inst_50768);

return statearr_50807;
})();
if(cljs.core.truth_(inst_50769)){
var statearr_50808_52416 = state_50780__$1;
(statearr_50808_52416[(1)] = (21));

} else {
var statearr_50809_52417 = state_50780__$1;
(statearr_50809_52417[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50781 === (5))){
var inst_50724 = cljs.core.async.close_BANG_(out);
var state_50780__$1 = state_50780;
var statearr_50810_52418 = state_50780__$1;
(statearr_50810_52418[(2)] = inst_50724);

(statearr_50810_52418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50781 === (14))){
var inst_50746 = (state_50780[(7)]);
var inst_50748 = cljs.core.chunked_seq_QMARK_(inst_50746);
var state_50780__$1 = state_50780;
if(inst_50748){
var statearr_50811_52419 = state_50780__$1;
(statearr_50811_52419[(1)] = (17));

} else {
var statearr_50812_52420 = state_50780__$1;
(statearr_50812_52420[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50781 === (16))){
var inst_50764 = (state_50780[(2)]);
var state_50780__$1 = state_50780;
var statearr_50813_52421 = state_50780__$1;
(statearr_50813_52421[(2)] = inst_50764);

(statearr_50813_52421[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50781 === (10))){
var inst_50735 = (state_50780[(8)]);
var inst_50733 = (state_50780[(12)]);
var inst_50740 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_50733,inst_50735);
var state_50780__$1 = state_50780;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50780__$1,(13),out,inst_50740);
} else {
if((state_val_50781 === (18))){
var inst_50746 = (state_50780[(7)]);
var inst_50755 = cljs.core.first(inst_50746);
var state_50780__$1 = state_50780;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50780__$1,(20),out,inst_50755);
} else {
if((state_val_50781 === (8))){
var inst_50735 = (state_50780[(8)]);
var inst_50734 = (state_50780[(10)]);
var inst_50737 = (inst_50735 < inst_50734);
var inst_50738 = inst_50737;
var state_50780__$1 = state_50780;
if(cljs.core.truth_(inst_50738)){
var statearr_50814_52427 = state_50780__$1;
(statearr_50814_52427[(1)] = (10));

} else {
var statearr_50815_52431 = state_50780__$1;
(statearr_50815_52431[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__49411__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__49411__auto____0 = (function (){
var statearr_50816 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50816[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__49411__auto__);

(statearr_50816[(1)] = (1));

return statearr_50816;
});
var cljs$core$async$mapcat_STAR__$_state_machine__49411__auto____1 = (function (state_50780){
while(true){
var ret_value__49412__auto__ = (function (){try{while(true){
var result__49413__auto__ = switch__49410__auto__(state_50780);
if(cljs.core.keyword_identical_QMARK_(result__49413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49413__auto__;
}
break;
}
}catch (e50817){if((e50817 instanceof Object)){
var ex__49414__auto__ = e50817;
var statearr_50818_52435 = state_50780;
(statearr_50818_52435[(5)] = ex__49414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50817;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52436 = state_50780;
state_50780 = G__52436;
continue;
} else {
return ret_value__49412__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__49411__auto__ = function(state_50780){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__49411__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__49411__auto____1.call(this,state_50780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__49411__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__49411__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__49411__auto__;
})()
})();
var state__49513__auto__ = (function (){var statearr_50819 = (f__49512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49512__auto__.cljs$core$IFn$_invoke$arity$0() : f__49512__auto__.call(null));
(statearr_50819[(6)] = c__49511__auto__);

return statearr_50819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49513__auto__);
}));

return c__49511__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__50821 = arguments.length;
switch (G__50821) {
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
var G__50823 = arguments.length;
switch (G__50823) {
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
var G__50825 = arguments.length;
switch (G__50825) {
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
var c__49511__auto___52452 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49512__auto__ = (function (){var switch__49410__auto__ = (function (state_50849){
var state_val_50850 = (state_50849[(1)]);
if((state_val_50850 === (7))){
var inst_50844 = (state_50849[(2)]);
var state_50849__$1 = state_50849;
var statearr_50851_52453 = state_50849__$1;
(statearr_50851_52453[(2)] = inst_50844);

(statearr_50851_52453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50850 === (1))){
var inst_50826 = null;
var state_50849__$1 = (function (){var statearr_50852 = state_50849;
(statearr_50852[(7)] = inst_50826);

return statearr_50852;
})();
var statearr_50853_52455 = state_50849__$1;
(statearr_50853_52455[(2)] = null);

(statearr_50853_52455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50850 === (4))){
var inst_50829 = (state_50849[(8)]);
var inst_50829__$1 = (state_50849[(2)]);
var inst_50830 = (inst_50829__$1 == null);
var inst_50831 = cljs.core.not(inst_50830);
var state_50849__$1 = (function (){var statearr_50854 = state_50849;
(statearr_50854[(8)] = inst_50829__$1);

return statearr_50854;
})();
if(inst_50831){
var statearr_50855_52456 = state_50849__$1;
(statearr_50855_52456[(1)] = (5));

} else {
var statearr_50856_52457 = state_50849__$1;
(statearr_50856_52457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50850 === (6))){
var state_50849__$1 = state_50849;
var statearr_50857_52459 = state_50849__$1;
(statearr_50857_52459[(2)] = null);

(statearr_50857_52459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50850 === (3))){
var inst_50846 = (state_50849[(2)]);
var inst_50847 = cljs.core.async.close_BANG_(out);
var state_50849__$1 = (function (){var statearr_50858 = state_50849;
(statearr_50858[(9)] = inst_50846);

return statearr_50858;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50849__$1,inst_50847);
} else {
if((state_val_50850 === (2))){
var state_50849__$1 = state_50849;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50849__$1,(4),ch);
} else {
if((state_val_50850 === (11))){
var inst_50829 = (state_50849[(8)]);
var inst_50838 = (state_50849[(2)]);
var inst_50826 = inst_50829;
var state_50849__$1 = (function (){var statearr_50859 = state_50849;
(statearr_50859[(10)] = inst_50838);

(statearr_50859[(7)] = inst_50826);

return statearr_50859;
})();
var statearr_50860_52462 = state_50849__$1;
(statearr_50860_52462[(2)] = null);

(statearr_50860_52462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50850 === (9))){
var inst_50829 = (state_50849[(8)]);
var state_50849__$1 = state_50849;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50849__$1,(11),out,inst_50829);
} else {
if((state_val_50850 === (5))){
var inst_50829 = (state_50849[(8)]);
var inst_50826 = (state_50849[(7)]);
var inst_50833 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50829,inst_50826);
var state_50849__$1 = state_50849;
if(inst_50833){
var statearr_50862_52465 = state_50849__$1;
(statearr_50862_52465[(1)] = (8));

} else {
var statearr_50863_52467 = state_50849__$1;
(statearr_50863_52467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50850 === (10))){
var inst_50841 = (state_50849[(2)]);
var state_50849__$1 = state_50849;
var statearr_50864_52469 = state_50849__$1;
(statearr_50864_52469[(2)] = inst_50841);

(statearr_50864_52469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50850 === (8))){
var inst_50826 = (state_50849[(7)]);
var tmp50861 = inst_50826;
var inst_50826__$1 = tmp50861;
var state_50849__$1 = (function (){var statearr_50865 = state_50849;
(statearr_50865[(7)] = inst_50826__$1);

return statearr_50865;
})();
var statearr_50866_52471 = state_50849__$1;
(statearr_50866_52471[(2)] = null);

(statearr_50866_52471[(1)] = (2));


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
var cljs$core$async$state_machine__49411__auto__ = null;
var cljs$core$async$state_machine__49411__auto____0 = (function (){
var statearr_50867 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50867[(0)] = cljs$core$async$state_machine__49411__auto__);

(statearr_50867[(1)] = (1));

return statearr_50867;
});
var cljs$core$async$state_machine__49411__auto____1 = (function (state_50849){
while(true){
var ret_value__49412__auto__ = (function (){try{while(true){
var result__49413__auto__ = switch__49410__auto__(state_50849);
if(cljs.core.keyword_identical_QMARK_(result__49413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49413__auto__;
}
break;
}
}catch (e50868){if((e50868 instanceof Object)){
var ex__49414__auto__ = e50868;
var statearr_50869_52477 = state_50849;
(statearr_50869_52477[(5)] = ex__49414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50868;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52478 = state_50849;
state_50849 = G__52478;
continue;
} else {
return ret_value__49412__auto__;
}
break;
}
});
cljs$core$async$state_machine__49411__auto__ = function(state_50849){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49411__auto____1.call(this,state_50849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49411__auto____0;
cljs$core$async$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49411__auto____1;
return cljs$core$async$state_machine__49411__auto__;
})()
})();
var state__49513__auto__ = (function (){var statearr_50870 = (f__49512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49512__auto__.cljs$core$IFn$_invoke$arity$0() : f__49512__auto__.call(null));
(statearr_50870[(6)] = c__49511__auto___52452);

return statearr_50870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49513__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__50872 = arguments.length;
switch (G__50872) {
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
var c__49511__auto___52482 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49512__auto__ = (function (){var switch__49410__auto__ = (function (state_50910){
var state_val_50911 = (state_50910[(1)]);
if((state_val_50911 === (7))){
var inst_50906 = (state_50910[(2)]);
var state_50910__$1 = state_50910;
var statearr_50912_52484 = state_50910__$1;
(statearr_50912_52484[(2)] = inst_50906);

(statearr_50912_52484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50911 === (1))){
var inst_50873 = (new Array(n));
var inst_50874 = inst_50873;
var inst_50875 = (0);
var state_50910__$1 = (function (){var statearr_50913 = state_50910;
(statearr_50913[(7)] = inst_50875);

(statearr_50913[(8)] = inst_50874);

return statearr_50913;
})();
var statearr_50914_52485 = state_50910__$1;
(statearr_50914_52485[(2)] = null);

(statearr_50914_52485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50911 === (4))){
var inst_50878 = (state_50910[(9)]);
var inst_50878__$1 = (state_50910[(2)]);
var inst_50879 = (inst_50878__$1 == null);
var inst_50880 = cljs.core.not(inst_50879);
var state_50910__$1 = (function (){var statearr_50915 = state_50910;
(statearr_50915[(9)] = inst_50878__$1);

return statearr_50915;
})();
if(inst_50880){
var statearr_50916_52486 = state_50910__$1;
(statearr_50916_52486[(1)] = (5));

} else {
var statearr_50917_52488 = state_50910__$1;
(statearr_50917_52488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50911 === (15))){
var inst_50900 = (state_50910[(2)]);
var state_50910__$1 = state_50910;
var statearr_50918_52492 = state_50910__$1;
(statearr_50918_52492[(2)] = inst_50900);

(statearr_50918_52492[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50911 === (13))){
var state_50910__$1 = state_50910;
var statearr_50919_52498 = state_50910__$1;
(statearr_50919_52498[(2)] = null);

(statearr_50919_52498[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50911 === (6))){
var inst_50875 = (state_50910[(7)]);
var inst_50896 = (inst_50875 > (0));
var state_50910__$1 = state_50910;
if(cljs.core.truth_(inst_50896)){
var statearr_50920_52499 = state_50910__$1;
(statearr_50920_52499[(1)] = (12));

} else {
var statearr_50921_52500 = state_50910__$1;
(statearr_50921_52500[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50911 === (3))){
var inst_50908 = (state_50910[(2)]);
var state_50910__$1 = state_50910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50910__$1,inst_50908);
} else {
if((state_val_50911 === (12))){
var inst_50874 = (state_50910[(8)]);
var inst_50898 = cljs.core.vec(inst_50874);
var state_50910__$1 = state_50910;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50910__$1,(15),out,inst_50898);
} else {
if((state_val_50911 === (2))){
var state_50910__$1 = state_50910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50910__$1,(4),ch);
} else {
if((state_val_50911 === (11))){
var inst_50890 = (state_50910[(2)]);
var inst_50891 = (new Array(n));
var inst_50874 = inst_50891;
var inst_50875 = (0);
var state_50910__$1 = (function (){var statearr_50922 = state_50910;
(statearr_50922[(7)] = inst_50875);

(statearr_50922[(10)] = inst_50890);

(statearr_50922[(8)] = inst_50874);

return statearr_50922;
})();
var statearr_50923_52502 = state_50910__$1;
(statearr_50923_52502[(2)] = null);

(statearr_50923_52502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50911 === (9))){
var inst_50874 = (state_50910[(8)]);
var inst_50888 = cljs.core.vec(inst_50874);
var state_50910__$1 = state_50910;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50910__$1,(11),out,inst_50888);
} else {
if((state_val_50911 === (5))){
var inst_50875 = (state_50910[(7)]);
var inst_50874 = (state_50910[(8)]);
var inst_50883 = (state_50910[(11)]);
var inst_50878 = (state_50910[(9)]);
var inst_50882 = (inst_50874[inst_50875] = inst_50878);
var inst_50883__$1 = (inst_50875 + (1));
var inst_50884 = (inst_50883__$1 < n);
var state_50910__$1 = (function (){var statearr_50924 = state_50910;
(statearr_50924[(12)] = inst_50882);

(statearr_50924[(11)] = inst_50883__$1);

return statearr_50924;
})();
if(cljs.core.truth_(inst_50884)){
var statearr_50925_52510 = state_50910__$1;
(statearr_50925_52510[(1)] = (8));

} else {
var statearr_50926_52511 = state_50910__$1;
(statearr_50926_52511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50911 === (14))){
var inst_50903 = (state_50910[(2)]);
var inst_50904 = cljs.core.async.close_BANG_(out);
var state_50910__$1 = (function (){var statearr_50928 = state_50910;
(statearr_50928[(13)] = inst_50903);

return statearr_50928;
})();
var statearr_50929_52512 = state_50910__$1;
(statearr_50929_52512[(2)] = inst_50904);

(statearr_50929_52512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50911 === (10))){
var inst_50894 = (state_50910[(2)]);
var state_50910__$1 = state_50910;
var statearr_50930_52513 = state_50910__$1;
(statearr_50930_52513[(2)] = inst_50894);

(statearr_50930_52513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50911 === (8))){
var inst_50874 = (state_50910[(8)]);
var inst_50883 = (state_50910[(11)]);
var tmp50927 = inst_50874;
var inst_50874__$1 = tmp50927;
var inst_50875 = inst_50883;
var state_50910__$1 = (function (){var statearr_50931 = state_50910;
(statearr_50931[(7)] = inst_50875);

(statearr_50931[(8)] = inst_50874__$1);

return statearr_50931;
})();
var statearr_50932_52514 = state_50910__$1;
(statearr_50932_52514[(2)] = null);

(statearr_50932_52514[(1)] = (2));


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
var cljs$core$async$state_machine__49411__auto__ = null;
var cljs$core$async$state_machine__49411__auto____0 = (function (){
var statearr_50933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50933[(0)] = cljs$core$async$state_machine__49411__auto__);

(statearr_50933[(1)] = (1));

return statearr_50933;
});
var cljs$core$async$state_machine__49411__auto____1 = (function (state_50910){
while(true){
var ret_value__49412__auto__ = (function (){try{while(true){
var result__49413__auto__ = switch__49410__auto__(state_50910);
if(cljs.core.keyword_identical_QMARK_(result__49413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49413__auto__;
}
break;
}
}catch (e50934){if((e50934 instanceof Object)){
var ex__49414__auto__ = e50934;
var statearr_50935_52519 = state_50910;
(statearr_50935_52519[(5)] = ex__49414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50934;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52524 = state_50910;
state_50910 = G__52524;
continue;
} else {
return ret_value__49412__auto__;
}
break;
}
});
cljs$core$async$state_machine__49411__auto__ = function(state_50910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49411__auto____1.call(this,state_50910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49411__auto____0;
cljs$core$async$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49411__auto____1;
return cljs$core$async$state_machine__49411__auto__;
})()
})();
var state__49513__auto__ = (function (){var statearr_50936 = (f__49512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49512__auto__.cljs$core$IFn$_invoke$arity$0() : f__49512__auto__.call(null));
(statearr_50936[(6)] = c__49511__auto___52482);

return statearr_50936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49513__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__50938 = arguments.length;
switch (G__50938) {
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
var c__49511__auto___52555 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49512__auto__ = (function (){var switch__49410__auto__ = (function (state_50980){
var state_val_50981 = (state_50980[(1)]);
if((state_val_50981 === (7))){
var inst_50976 = (state_50980[(2)]);
var state_50980__$1 = state_50980;
var statearr_50982_52557 = state_50980__$1;
(statearr_50982_52557[(2)] = inst_50976);

(statearr_50982_52557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50981 === (1))){
var inst_50939 = [];
var inst_50940 = inst_50939;
var inst_50941 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_50980__$1 = (function (){var statearr_50983 = state_50980;
(statearr_50983[(7)] = inst_50941);

(statearr_50983[(8)] = inst_50940);

return statearr_50983;
})();
var statearr_50984_52558 = state_50980__$1;
(statearr_50984_52558[(2)] = null);

(statearr_50984_52558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50981 === (4))){
var inst_50944 = (state_50980[(9)]);
var inst_50944__$1 = (state_50980[(2)]);
var inst_50945 = (inst_50944__$1 == null);
var inst_50946 = cljs.core.not(inst_50945);
var state_50980__$1 = (function (){var statearr_50985 = state_50980;
(statearr_50985[(9)] = inst_50944__$1);

return statearr_50985;
})();
if(inst_50946){
var statearr_50986_52559 = state_50980__$1;
(statearr_50986_52559[(1)] = (5));

} else {
var statearr_50987_52560 = state_50980__$1;
(statearr_50987_52560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50981 === (15))){
var inst_50970 = (state_50980[(2)]);
var state_50980__$1 = state_50980;
var statearr_50988_52562 = state_50980__$1;
(statearr_50988_52562[(2)] = inst_50970);

(statearr_50988_52562[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50981 === (13))){
var state_50980__$1 = state_50980;
var statearr_50989_52563 = state_50980__$1;
(statearr_50989_52563[(2)] = null);

(statearr_50989_52563[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50981 === (6))){
var inst_50940 = (state_50980[(8)]);
var inst_50965 = inst_50940.length;
var inst_50966 = (inst_50965 > (0));
var state_50980__$1 = state_50980;
if(cljs.core.truth_(inst_50966)){
var statearr_50990_52565 = state_50980__$1;
(statearr_50990_52565[(1)] = (12));

} else {
var statearr_50991_52566 = state_50980__$1;
(statearr_50991_52566[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50981 === (3))){
var inst_50978 = (state_50980[(2)]);
var state_50980__$1 = state_50980;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50980__$1,inst_50978);
} else {
if((state_val_50981 === (12))){
var inst_50940 = (state_50980[(8)]);
var inst_50968 = cljs.core.vec(inst_50940);
var state_50980__$1 = state_50980;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50980__$1,(15),out,inst_50968);
} else {
if((state_val_50981 === (2))){
var state_50980__$1 = state_50980;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50980__$1,(4),ch);
} else {
if((state_val_50981 === (11))){
var inst_50944 = (state_50980[(9)]);
var inst_50948 = (state_50980[(10)]);
var inst_50958 = (state_50980[(2)]);
var inst_50959 = [];
var inst_50960 = inst_50959.push(inst_50944);
var inst_50940 = inst_50959;
var inst_50941 = inst_50948;
var state_50980__$1 = (function (){var statearr_50992 = state_50980;
(statearr_50992[(11)] = inst_50958);

(statearr_50992[(7)] = inst_50941);

(statearr_50992[(12)] = inst_50960);

(statearr_50992[(8)] = inst_50940);

return statearr_50992;
})();
var statearr_50993_52614 = state_50980__$1;
(statearr_50993_52614[(2)] = null);

(statearr_50993_52614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50981 === (9))){
var inst_50940 = (state_50980[(8)]);
var inst_50956 = cljs.core.vec(inst_50940);
var state_50980__$1 = state_50980;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50980__$1,(11),out,inst_50956);
} else {
if((state_val_50981 === (5))){
var inst_50941 = (state_50980[(7)]);
var inst_50944 = (state_50980[(9)]);
var inst_50948 = (state_50980[(10)]);
var inst_50948__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_50944) : f.call(null,inst_50944));
var inst_50949 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50948__$1,inst_50941);
var inst_50950 = cljs.core.keyword_identical_QMARK_(inst_50941,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_50951 = ((inst_50949) || (inst_50950));
var state_50980__$1 = (function (){var statearr_50994 = state_50980;
(statearr_50994[(10)] = inst_50948__$1);

return statearr_50994;
})();
if(cljs.core.truth_(inst_50951)){
var statearr_50995_52646 = state_50980__$1;
(statearr_50995_52646[(1)] = (8));

} else {
var statearr_50996_52647 = state_50980__$1;
(statearr_50996_52647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50981 === (14))){
var inst_50973 = (state_50980[(2)]);
var inst_50974 = cljs.core.async.close_BANG_(out);
var state_50980__$1 = (function (){var statearr_50998 = state_50980;
(statearr_50998[(13)] = inst_50973);

return statearr_50998;
})();
var statearr_50999_52652 = state_50980__$1;
(statearr_50999_52652[(2)] = inst_50974);

(statearr_50999_52652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50981 === (10))){
var inst_50963 = (state_50980[(2)]);
var state_50980__$1 = state_50980;
var statearr_51000_52654 = state_50980__$1;
(statearr_51000_52654[(2)] = inst_50963);

(statearr_51000_52654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50981 === (8))){
var inst_50944 = (state_50980[(9)]);
var inst_50940 = (state_50980[(8)]);
var inst_50948 = (state_50980[(10)]);
var inst_50953 = inst_50940.push(inst_50944);
var tmp50997 = inst_50940;
var inst_50940__$1 = tmp50997;
var inst_50941 = inst_50948;
var state_50980__$1 = (function (){var statearr_51001 = state_50980;
(statearr_51001[(7)] = inst_50941);

(statearr_51001[(14)] = inst_50953);

(statearr_51001[(8)] = inst_50940__$1);

return statearr_51001;
})();
var statearr_51002_52657 = state_50980__$1;
(statearr_51002_52657[(2)] = null);

(statearr_51002_52657[(1)] = (2));


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
var cljs$core$async$state_machine__49411__auto__ = null;
var cljs$core$async$state_machine__49411__auto____0 = (function (){
var statearr_51003 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51003[(0)] = cljs$core$async$state_machine__49411__auto__);

(statearr_51003[(1)] = (1));

return statearr_51003;
});
var cljs$core$async$state_machine__49411__auto____1 = (function (state_50980){
while(true){
var ret_value__49412__auto__ = (function (){try{while(true){
var result__49413__auto__ = switch__49410__auto__(state_50980);
if(cljs.core.keyword_identical_QMARK_(result__49413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49413__auto__;
}
break;
}
}catch (e51004){if((e51004 instanceof Object)){
var ex__49414__auto__ = e51004;
var statearr_51005_52658 = state_50980;
(statearr_51005_52658[(5)] = ex__49414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51004;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52659 = state_50980;
state_50980 = G__52659;
continue;
} else {
return ret_value__49412__auto__;
}
break;
}
});
cljs$core$async$state_machine__49411__auto__ = function(state_50980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49411__auto____1.call(this,state_50980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49411__auto____0;
cljs$core$async$state_machine__49411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49411__auto____1;
return cljs$core$async$state_machine__49411__auto__;
})()
})();
var state__49513__auto__ = (function (){var statearr_51006 = (f__49512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49512__auto__.cljs$core$IFn$_invoke$arity$0() : f__49512__auto__.call(null));
(statearr_51006[(6)] = c__49511__auto___52555);

return statearr_51006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49513__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
