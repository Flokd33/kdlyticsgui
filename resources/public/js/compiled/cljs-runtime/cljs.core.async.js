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
var G__49428 = arguments.length;
switch (G__49428) {
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

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49429 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49429 = (function (f,blockable,meta49430){
this.f = f;
this.blockable = blockable;
this.meta49430 = meta49430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49431,meta49430__$1){
var self__ = this;
var _49431__$1 = this;
return (new cljs.core.async.t_cljs$core$async49429(self__.f,self__.blockable,meta49430__$1));
});

cljs.core.async.t_cljs$core$async49429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49431){
var self__ = this;
var _49431__$1 = this;
return self__.meta49430;
});

cljs.core.async.t_cljs$core$async49429.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49429.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async49429.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async49429.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async49429.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta49430","meta49430",-2024231194,null)], null);
});

cljs.core.async.t_cljs$core$async49429.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49429.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49429";

cljs.core.async.t_cljs$core$async49429.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async49429");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49429.
 */
cljs.core.async.__GT_t_cljs$core$async49429 = (function cljs$core$async$__GT_t_cljs$core$async49429(f__$1,blockable__$1,meta49430){
return (new cljs.core.async.t_cljs$core$async49429(f__$1,blockable__$1,meta49430));
});

}

return (new cljs.core.async.t_cljs$core$async49429(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

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
var G__49434 = arguments.length;
switch (G__49434) {
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

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__49436 = arguments.length;
switch (G__49436) {
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

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

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
var G__49438 = arguments.length;
switch (G__49438) {
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

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_50868 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_50868) : fn1.call(null,val_50868));
} else {
cljs.core.async.impl.dispatch.run(((function (val_50868,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_50868) : fn1.call(null,val_50868));
});})(val_50868,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

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
var G__49440 = arguments.length;
switch (G__49440) {
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

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5733__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___50870 = n;
var x_50871 = (0);
while(true){
if((x_50871 < n__4607__auto___50870)){
(a[x_50871] = x_50871);

var G__50872 = (x_50871 + (1));
x_50871 = G__50872;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49441 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49441 = (function (flag,meta49442){
this.flag = flag;
this.meta49442 = meta49442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_49443,meta49442__$1){
var self__ = this;
var _49443__$1 = this;
return (new cljs.core.async.t_cljs$core$async49441(self__.flag,meta49442__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async49441.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_49443){
var self__ = this;
var _49443__$1 = this;
return self__.meta49442;
});})(flag))
;

cljs.core.async.t_cljs$core$async49441.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49441.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async49441.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async49441.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async49441.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta49442","meta49442",1937819511,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async49441.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49441";

cljs.core.async.t_cljs$core$async49441.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async49441");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49441.
 */
cljs.core.async.__GT_t_cljs$core$async49441 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async49441(flag__$1,meta49442){
return (new cljs.core.async.t_cljs$core$async49441(flag__$1,meta49442));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async49441(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49444 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49444 = (function (flag,cb,meta49445){
this.flag = flag;
this.cb = cb;
this.meta49445 = meta49445;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49446,meta49445__$1){
var self__ = this;
var _49446__$1 = this;
return (new cljs.core.async.t_cljs$core$async49444(self__.flag,self__.cb,meta49445__$1));
});

cljs.core.async.t_cljs$core$async49444.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49446){
var self__ = this;
var _49446__$1 = this;
return self__.meta49445;
});

cljs.core.async.t_cljs$core$async49444.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49444.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async49444.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async49444.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async49444.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta49445","meta49445",455044187,null)], null);
});

cljs.core.async.t_cljs$core$async49444.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49444.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49444";

cljs.core.async.t_cljs$core$async49444.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async49444");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49444.
 */
cljs.core.async.__GT_t_cljs$core$async49444 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async49444(flag__$1,cb__$1,meta49445){
return (new cljs.core.async.t_cljs$core$async49444(flag__$1,cb__$1,meta49445));
});

}

return (new cljs.core.async.t_cljs$core$async49444(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__49447_SHARP_){
var G__49449 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49447_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__49449) : fret.call(null,G__49449));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__49448_SHARP_){
var G__49450 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49448_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__49450) : fret.call(null,G__49450));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__50873 = (i + (1));
i = G__50873;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
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
var args__4736__auto__ = [];
var len__4730__auto___50874 = arguments.length;
var i__4731__auto___50875 = (0);
while(true){
if((i__4731__auto___50875 < len__4730__auto___50874)){
args__4736__auto__.push((arguments[i__4731__auto___50875]));

var G__50876 = (i__4731__auto___50875 + (1));
i__4731__auto___50875 = G__50876;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__49453){
var map__49454 = p__49453;
var map__49454__$1 = (((((!((map__49454 == null))))?(((((map__49454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49454):map__49454);
var opts = map__49454__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq49451){
var G__49452 = cljs.core.first(seq49451);
var seq49451__$1 = cljs.core.next(seq49451);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49452,seq49451__$1);
});

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
var G__49457 = arguments.length;
switch (G__49457) {
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

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__49370__auto___50878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49370__auto___50878){
return (function (){
var f__49371__auto__ = (function (){var switch__49300__auto__ = ((function (c__49370__auto___50878){
return (function (state_49481){
var state_val_49482 = (state_49481[(1)]);
if((state_val_49482 === (7))){
var inst_49477 = (state_49481[(2)]);
var state_49481__$1 = state_49481;
var statearr_49483_50879 = state_49481__$1;
(statearr_49483_50879[(2)] = inst_49477);

(statearr_49483_50879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49482 === (1))){
var state_49481__$1 = state_49481;
var statearr_49484_50880 = state_49481__$1;
(statearr_49484_50880[(2)] = null);

(statearr_49484_50880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49482 === (4))){
var inst_49460 = (state_49481[(7)]);
var inst_49460__$1 = (state_49481[(2)]);
var inst_49461 = (inst_49460__$1 == null);
var state_49481__$1 = (function (){var statearr_49485 = state_49481;
(statearr_49485[(7)] = inst_49460__$1);

return statearr_49485;
})();
if(cljs.core.truth_(inst_49461)){
var statearr_49486_50881 = state_49481__$1;
(statearr_49486_50881[(1)] = (5));

} else {
var statearr_49487_50882 = state_49481__$1;
(statearr_49487_50882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49482 === (13))){
var state_49481__$1 = state_49481;
var statearr_49488_50883 = state_49481__$1;
(statearr_49488_50883[(2)] = null);

(statearr_49488_50883[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49482 === (6))){
var inst_49460 = (state_49481[(7)]);
var state_49481__$1 = state_49481;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49481__$1,(11),to,inst_49460);
} else {
if((state_val_49482 === (3))){
var inst_49479 = (state_49481[(2)]);
var state_49481__$1 = state_49481;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49481__$1,inst_49479);
} else {
if((state_val_49482 === (12))){
var state_49481__$1 = state_49481;
var statearr_49489_50884 = state_49481__$1;
(statearr_49489_50884[(2)] = null);

(statearr_49489_50884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49482 === (2))){
var state_49481__$1 = state_49481;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49481__$1,(4),from);
} else {
if((state_val_49482 === (11))){
var inst_49470 = (state_49481[(2)]);
var state_49481__$1 = state_49481;
if(cljs.core.truth_(inst_49470)){
var statearr_49490_50885 = state_49481__$1;
(statearr_49490_50885[(1)] = (12));

} else {
var statearr_49491_50886 = state_49481__$1;
(statearr_49491_50886[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49482 === (9))){
var state_49481__$1 = state_49481;
var statearr_49492_50887 = state_49481__$1;
(statearr_49492_50887[(2)] = null);

(statearr_49492_50887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49482 === (5))){
var state_49481__$1 = state_49481;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49493_50888 = state_49481__$1;
(statearr_49493_50888[(1)] = (8));

} else {
var statearr_49494_50889 = state_49481__$1;
(statearr_49494_50889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49482 === (14))){
var inst_49475 = (state_49481[(2)]);
var state_49481__$1 = state_49481;
var statearr_49495_50890 = state_49481__$1;
(statearr_49495_50890[(2)] = inst_49475);

(statearr_49495_50890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49482 === (10))){
var inst_49467 = (state_49481[(2)]);
var state_49481__$1 = state_49481;
var statearr_49496_50891 = state_49481__$1;
(statearr_49496_50891[(2)] = inst_49467);

(statearr_49496_50891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49482 === (8))){
var inst_49464 = cljs.core.async.close_BANG_(to);
var state_49481__$1 = state_49481;
var statearr_49497_50892 = state_49481__$1;
(statearr_49497_50892[(2)] = inst_49464);

(statearr_49497_50892[(1)] = (10));


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
});})(c__49370__auto___50878))
;
return ((function (switch__49300__auto__,c__49370__auto___50878){
return (function() {
var cljs$core$async$state_machine__49301__auto__ = null;
var cljs$core$async$state_machine__49301__auto____0 = (function (){
var statearr_49498 = [null,null,null,null,null,null,null,null];
(statearr_49498[(0)] = cljs$core$async$state_machine__49301__auto__);

(statearr_49498[(1)] = (1));

return statearr_49498;
});
var cljs$core$async$state_machine__49301__auto____1 = (function (state_49481){
while(true){
var ret_value__49302__auto__ = (function (){try{while(true){
var result__49303__auto__ = switch__49300__auto__(state_49481);
if(cljs.core.keyword_identical_QMARK_(result__49303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49303__auto__;
}
break;
}
}catch (e49499){if((e49499 instanceof Object)){
var ex__49304__auto__ = e49499;
var statearr_49500_50893 = state_49481;
(statearr_49500_50893[(5)] = ex__49304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49499;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50894 = state_49481;
state_49481 = G__50894;
continue;
} else {
return ret_value__49302__auto__;
}
break;
}
});
cljs$core$async$state_machine__49301__auto__ = function(state_49481){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49301__auto____1.call(this,state_49481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49301__auto____0;
cljs$core$async$state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49301__auto____1;
return cljs$core$async$state_machine__49301__auto__;
})()
;})(switch__49300__auto__,c__49370__auto___50878))
})();
var state__49372__auto__ = (function (){var statearr_49501 = (f__49371__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49371__auto__.cljs$core$IFn$_invoke$arity$0() : f__49371__auto__.call(null));
(statearr_49501[(6)] = c__49370__auto___50878);

return statearr_49501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49372__auto__);
});})(c__49370__auto___50878))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__49502){
var vec__49503 = p__49502;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49503,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49503,(1),null);
var job = vec__49503;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__49370__auto___50895 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49370__auto___50895,res,vec__49503,v,p,job,jobs,results){
return (function (){
var f__49371__auto__ = (function (){var switch__49300__auto__ = ((function (c__49370__auto___50895,res,vec__49503,v,p,job,jobs,results){
return (function (state_49510){
var state_val_49511 = (state_49510[(1)]);
if((state_val_49511 === (1))){
var state_49510__$1 = state_49510;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49510__$1,(2),res,v);
} else {
if((state_val_49511 === (2))){
var inst_49507 = (state_49510[(2)]);
var inst_49508 = cljs.core.async.close_BANG_(res);
var state_49510__$1 = (function (){var statearr_49512 = state_49510;
(statearr_49512[(7)] = inst_49507);

return statearr_49512;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49510__$1,inst_49508);
} else {
return null;
}
}
});})(c__49370__auto___50895,res,vec__49503,v,p,job,jobs,results))
;
return ((function (switch__49300__auto__,c__49370__auto___50895,res,vec__49503,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49301__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49301__auto____0 = (function (){
var statearr_49513 = [null,null,null,null,null,null,null,null];
(statearr_49513[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49301__auto__);

(statearr_49513[(1)] = (1));

return statearr_49513;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49301__auto____1 = (function (state_49510){
while(true){
var ret_value__49302__auto__ = (function (){try{while(true){
var result__49303__auto__ = switch__49300__auto__(state_49510);
if(cljs.core.keyword_identical_QMARK_(result__49303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49303__auto__;
}
break;
}
}catch (e49514){if((e49514 instanceof Object)){
var ex__49304__auto__ = e49514;
var statearr_49515_50896 = state_49510;
(statearr_49515_50896[(5)] = ex__49304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49514;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50897 = state_49510;
state_49510 = G__50897;
continue;
} else {
return ret_value__49302__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49301__auto__ = function(state_49510){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49301__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49301__auto____1.call(this,state_49510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49301__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49301__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49301__auto__;
})()
;})(switch__49300__auto__,c__49370__auto___50895,res,vec__49503,v,p,job,jobs,results))
})();
var state__49372__auto__ = (function (){var statearr_49516 = (f__49371__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49371__auto__.cljs$core$IFn$_invoke$arity$0() : f__49371__auto__.call(null));
(statearr_49516[(6)] = c__49370__auto___50895);

return statearr_49516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49372__auto__);
});})(c__49370__auto___50895,res,vec__49503,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__49517){
var vec__49518 = p__49517;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49518,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49518,(1),null);
var job = vec__49518;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___50898 = n;
var __50899 = (0);
while(true){
if((__50899 < n__4607__auto___50898)){
var G__49521_50900 = type;
var G__49521_50901__$1 = (((G__49521_50900 instanceof cljs.core.Keyword))?G__49521_50900.fqn:null);
switch (G__49521_50901__$1) {
case "compute":
var c__49370__auto___50903 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__50899,c__49370__auto___50903,G__49521_50900,G__49521_50901__$1,n__4607__auto___50898,jobs,results,process,async){
return (function (){
var f__49371__auto__ = (function (){var switch__49300__auto__ = ((function (__50899,c__49370__auto___50903,G__49521_50900,G__49521_50901__$1,n__4607__auto___50898,jobs,results,process,async){
return (function (state_49534){
var state_val_49535 = (state_49534[(1)]);
if((state_val_49535 === (1))){
var state_49534__$1 = state_49534;
var statearr_49536_50904 = state_49534__$1;
(statearr_49536_50904[(2)] = null);

(statearr_49536_50904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49535 === (2))){
var state_49534__$1 = state_49534;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49534__$1,(4),jobs);
} else {
if((state_val_49535 === (3))){
var inst_49532 = (state_49534[(2)]);
var state_49534__$1 = state_49534;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49534__$1,inst_49532);
} else {
if((state_val_49535 === (4))){
var inst_49524 = (state_49534[(2)]);
var inst_49525 = process(inst_49524);
var state_49534__$1 = state_49534;
if(cljs.core.truth_(inst_49525)){
var statearr_49537_50905 = state_49534__$1;
(statearr_49537_50905[(1)] = (5));

} else {
var statearr_49538_50906 = state_49534__$1;
(statearr_49538_50906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49535 === (5))){
var state_49534__$1 = state_49534;
var statearr_49539_50907 = state_49534__$1;
(statearr_49539_50907[(2)] = null);

(statearr_49539_50907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49535 === (6))){
var state_49534__$1 = state_49534;
var statearr_49540_50908 = state_49534__$1;
(statearr_49540_50908[(2)] = null);

(statearr_49540_50908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49535 === (7))){
var inst_49530 = (state_49534[(2)]);
var state_49534__$1 = state_49534;
var statearr_49541_50909 = state_49534__$1;
(statearr_49541_50909[(2)] = inst_49530);

(statearr_49541_50909[(1)] = (3));


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
});})(__50899,c__49370__auto___50903,G__49521_50900,G__49521_50901__$1,n__4607__auto___50898,jobs,results,process,async))
;
return ((function (__50899,switch__49300__auto__,c__49370__auto___50903,G__49521_50900,G__49521_50901__$1,n__4607__auto___50898,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49301__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49301__auto____0 = (function (){
var statearr_49542 = [null,null,null,null,null,null,null];
(statearr_49542[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49301__auto__);

(statearr_49542[(1)] = (1));

return statearr_49542;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49301__auto____1 = (function (state_49534){
while(true){
var ret_value__49302__auto__ = (function (){try{while(true){
var result__49303__auto__ = switch__49300__auto__(state_49534);
if(cljs.core.keyword_identical_QMARK_(result__49303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49303__auto__;
}
break;
}
}catch (e49543){if((e49543 instanceof Object)){
var ex__49304__auto__ = e49543;
var statearr_49544_50910 = state_49534;
(statearr_49544_50910[(5)] = ex__49304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49543;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50911 = state_49534;
state_49534 = G__50911;
continue;
} else {
return ret_value__49302__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49301__auto__ = function(state_49534){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49301__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49301__auto____1.call(this,state_49534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49301__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49301__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49301__auto__;
})()
;})(__50899,switch__49300__auto__,c__49370__auto___50903,G__49521_50900,G__49521_50901__$1,n__4607__auto___50898,jobs,results,process,async))
})();
var state__49372__auto__ = (function (){var statearr_49545 = (f__49371__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49371__auto__.cljs$core$IFn$_invoke$arity$0() : f__49371__auto__.call(null));
(statearr_49545[(6)] = c__49370__auto___50903);

return statearr_49545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49372__auto__);
});})(__50899,c__49370__auto___50903,G__49521_50900,G__49521_50901__$1,n__4607__auto___50898,jobs,results,process,async))
);


break;
case "async":
var c__49370__auto___50912 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__50899,c__49370__auto___50912,G__49521_50900,G__49521_50901__$1,n__4607__auto___50898,jobs,results,process,async){
return (function (){
var f__49371__auto__ = (function (){var switch__49300__auto__ = ((function (__50899,c__49370__auto___50912,G__49521_50900,G__49521_50901__$1,n__4607__auto___50898,jobs,results,process,async){
return (function (state_49558){
var state_val_49559 = (state_49558[(1)]);
if((state_val_49559 === (1))){
var state_49558__$1 = state_49558;
var statearr_49560_50913 = state_49558__$1;
(statearr_49560_50913[(2)] = null);

(statearr_49560_50913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49559 === (2))){
var state_49558__$1 = state_49558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49558__$1,(4),jobs);
} else {
if((state_val_49559 === (3))){
var inst_49556 = (state_49558[(2)]);
var state_49558__$1 = state_49558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49558__$1,inst_49556);
} else {
if((state_val_49559 === (4))){
var inst_49548 = (state_49558[(2)]);
var inst_49549 = async(inst_49548);
var state_49558__$1 = state_49558;
if(cljs.core.truth_(inst_49549)){
var statearr_49561_50914 = state_49558__$1;
(statearr_49561_50914[(1)] = (5));

} else {
var statearr_49562_50915 = state_49558__$1;
(statearr_49562_50915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49559 === (5))){
var state_49558__$1 = state_49558;
var statearr_49563_50916 = state_49558__$1;
(statearr_49563_50916[(2)] = null);

(statearr_49563_50916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49559 === (6))){
var state_49558__$1 = state_49558;
var statearr_49564_50917 = state_49558__$1;
(statearr_49564_50917[(2)] = null);

(statearr_49564_50917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49559 === (7))){
var inst_49554 = (state_49558[(2)]);
var state_49558__$1 = state_49558;
var statearr_49565_50918 = state_49558__$1;
(statearr_49565_50918[(2)] = inst_49554);

(statearr_49565_50918[(1)] = (3));


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
});})(__50899,c__49370__auto___50912,G__49521_50900,G__49521_50901__$1,n__4607__auto___50898,jobs,results,process,async))
;
return ((function (__50899,switch__49300__auto__,c__49370__auto___50912,G__49521_50900,G__49521_50901__$1,n__4607__auto___50898,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49301__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49301__auto____0 = (function (){
var statearr_49566 = [null,null,null,null,null,null,null];
(statearr_49566[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49301__auto__);

(statearr_49566[(1)] = (1));

return statearr_49566;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49301__auto____1 = (function (state_49558){
while(true){
var ret_value__49302__auto__ = (function (){try{while(true){
var result__49303__auto__ = switch__49300__auto__(state_49558);
if(cljs.core.keyword_identical_QMARK_(result__49303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49303__auto__;
}
break;
}
}catch (e49567){if((e49567 instanceof Object)){
var ex__49304__auto__ = e49567;
var statearr_49568_50919 = state_49558;
(statearr_49568_50919[(5)] = ex__49304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49567;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50920 = state_49558;
state_49558 = G__50920;
continue;
} else {
return ret_value__49302__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49301__auto__ = function(state_49558){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49301__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49301__auto____1.call(this,state_49558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49301__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49301__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49301__auto__;
})()
;})(__50899,switch__49300__auto__,c__49370__auto___50912,G__49521_50900,G__49521_50901__$1,n__4607__auto___50898,jobs,results,process,async))
})();
var state__49372__auto__ = (function (){var statearr_49569 = (f__49371__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49371__auto__.cljs$core$IFn$_invoke$arity$0() : f__49371__auto__.call(null));
(statearr_49569[(6)] = c__49370__auto___50912);

return statearr_49569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49372__auto__);
});})(__50899,c__49370__auto___50912,G__49521_50900,G__49521_50901__$1,n__4607__auto___50898,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49521_50901__$1)].join('')));

}

var G__50921 = (__50899 + (1));
__50899 = G__50921;
continue;
} else {
}
break;
}

var c__49370__auto___50922 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49370__auto___50922,jobs,results,process,async){
return (function (){
var f__49371__auto__ = (function (){var switch__49300__auto__ = ((function (c__49370__auto___50922,jobs,results,process,async){
return (function (state_49591){
var state_val_49592 = (state_49591[(1)]);
if((state_val_49592 === (7))){
var inst_49587 = (state_49591[(2)]);
var state_49591__$1 = state_49591;
var statearr_49593_50923 = state_49591__$1;
(statearr_49593_50923[(2)] = inst_49587);

(statearr_49593_50923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (1))){
var state_49591__$1 = state_49591;
var statearr_49594_50924 = state_49591__$1;
(statearr_49594_50924[(2)] = null);

(statearr_49594_50924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (4))){
var inst_49572 = (state_49591[(7)]);
var inst_49572__$1 = (state_49591[(2)]);
var inst_49573 = (inst_49572__$1 == null);
var state_49591__$1 = (function (){var statearr_49595 = state_49591;
(statearr_49595[(7)] = inst_49572__$1);

return statearr_49595;
})();
if(cljs.core.truth_(inst_49573)){
var statearr_49596_50925 = state_49591__$1;
(statearr_49596_50925[(1)] = (5));

} else {
var statearr_49597_50926 = state_49591__$1;
(statearr_49597_50926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (6))){
var inst_49577 = (state_49591[(8)]);
var inst_49572 = (state_49591[(7)]);
var inst_49577__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_49578 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49579 = [inst_49572,inst_49577__$1];
var inst_49580 = (new cljs.core.PersistentVector(null,2,(5),inst_49578,inst_49579,null));
var state_49591__$1 = (function (){var statearr_49598 = state_49591;
(statearr_49598[(8)] = inst_49577__$1);

return statearr_49598;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49591__$1,(8),jobs,inst_49580);
} else {
if((state_val_49592 === (3))){
var inst_49589 = (state_49591[(2)]);
var state_49591__$1 = state_49591;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49591__$1,inst_49589);
} else {
if((state_val_49592 === (2))){
var state_49591__$1 = state_49591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49591__$1,(4),from);
} else {
if((state_val_49592 === (9))){
var inst_49584 = (state_49591[(2)]);
var state_49591__$1 = (function (){var statearr_49599 = state_49591;
(statearr_49599[(9)] = inst_49584);

return statearr_49599;
})();
var statearr_49600_50929 = state_49591__$1;
(statearr_49600_50929[(2)] = null);

(statearr_49600_50929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (5))){
var inst_49575 = cljs.core.async.close_BANG_(jobs);
var state_49591__$1 = state_49591;
var statearr_49601_50930 = state_49591__$1;
(statearr_49601_50930[(2)] = inst_49575);

(statearr_49601_50930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (8))){
var inst_49577 = (state_49591[(8)]);
var inst_49582 = (state_49591[(2)]);
var state_49591__$1 = (function (){var statearr_49602 = state_49591;
(statearr_49602[(10)] = inst_49582);

return statearr_49602;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49591__$1,(9),results,inst_49577);
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
});})(c__49370__auto___50922,jobs,results,process,async))
;
return ((function (switch__49300__auto__,c__49370__auto___50922,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49301__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49301__auto____0 = (function (){
var statearr_49603 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49603[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49301__auto__);

(statearr_49603[(1)] = (1));

return statearr_49603;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49301__auto____1 = (function (state_49591){
while(true){
var ret_value__49302__auto__ = (function (){try{while(true){
var result__49303__auto__ = switch__49300__auto__(state_49591);
if(cljs.core.keyword_identical_QMARK_(result__49303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49303__auto__;
}
break;
}
}catch (e49604){if((e49604 instanceof Object)){
var ex__49304__auto__ = e49604;
var statearr_49605_50935 = state_49591;
(statearr_49605_50935[(5)] = ex__49304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49604;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50936 = state_49591;
state_49591 = G__50936;
continue;
} else {
return ret_value__49302__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49301__auto__ = function(state_49591){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49301__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49301__auto____1.call(this,state_49591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49301__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49301__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49301__auto__;
})()
;})(switch__49300__auto__,c__49370__auto___50922,jobs,results,process,async))
})();
var state__49372__auto__ = (function (){var statearr_49606 = (f__49371__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49371__auto__.cljs$core$IFn$_invoke$arity$0() : f__49371__auto__.call(null));
(statearr_49606[(6)] = c__49370__auto___50922);

return statearr_49606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49372__auto__);
});})(c__49370__auto___50922,jobs,results,process,async))
);


var c__49370__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49370__auto__,jobs,results,process,async){
return (function (){
var f__49371__auto__ = (function (){var switch__49300__auto__ = ((function (c__49370__auto__,jobs,results,process,async){
return (function (state_49644){
var state_val_49645 = (state_49644[(1)]);
if((state_val_49645 === (7))){
var inst_49640 = (state_49644[(2)]);
var state_49644__$1 = state_49644;
var statearr_49646_50941 = state_49644__$1;
(statearr_49646_50941[(2)] = inst_49640);

(statearr_49646_50941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (20))){
var state_49644__$1 = state_49644;
var statearr_49647_50942 = state_49644__$1;
(statearr_49647_50942[(2)] = null);

(statearr_49647_50942[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (1))){
var state_49644__$1 = state_49644;
var statearr_49648_50944 = state_49644__$1;
(statearr_49648_50944[(2)] = null);

(statearr_49648_50944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (4))){
var inst_49609 = (state_49644[(7)]);
var inst_49609__$1 = (state_49644[(2)]);
var inst_49610 = (inst_49609__$1 == null);
var state_49644__$1 = (function (){var statearr_49649 = state_49644;
(statearr_49649[(7)] = inst_49609__$1);

return statearr_49649;
})();
if(cljs.core.truth_(inst_49610)){
var statearr_49650_50951 = state_49644__$1;
(statearr_49650_50951[(1)] = (5));

} else {
var statearr_49651_50952 = state_49644__$1;
(statearr_49651_50952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (15))){
var inst_49622 = (state_49644[(8)]);
var state_49644__$1 = state_49644;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49644__$1,(18),to,inst_49622);
} else {
if((state_val_49645 === (21))){
var inst_49635 = (state_49644[(2)]);
var state_49644__$1 = state_49644;
var statearr_49652_50954 = state_49644__$1;
(statearr_49652_50954[(2)] = inst_49635);

(statearr_49652_50954[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (13))){
var inst_49637 = (state_49644[(2)]);
var state_49644__$1 = (function (){var statearr_49653 = state_49644;
(statearr_49653[(9)] = inst_49637);

return statearr_49653;
})();
var statearr_49654_50956 = state_49644__$1;
(statearr_49654_50956[(2)] = null);

(statearr_49654_50956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (6))){
var inst_49609 = (state_49644[(7)]);
var state_49644__$1 = state_49644;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49644__$1,(11),inst_49609);
} else {
if((state_val_49645 === (17))){
var inst_49630 = (state_49644[(2)]);
var state_49644__$1 = state_49644;
if(cljs.core.truth_(inst_49630)){
var statearr_49655_50961 = state_49644__$1;
(statearr_49655_50961[(1)] = (19));

} else {
var statearr_49656_50963 = state_49644__$1;
(statearr_49656_50963[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (3))){
var inst_49642 = (state_49644[(2)]);
var state_49644__$1 = state_49644;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49644__$1,inst_49642);
} else {
if((state_val_49645 === (12))){
var inst_49619 = (state_49644[(10)]);
var state_49644__$1 = state_49644;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49644__$1,(14),inst_49619);
} else {
if((state_val_49645 === (2))){
var state_49644__$1 = state_49644;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49644__$1,(4),results);
} else {
if((state_val_49645 === (19))){
var state_49644__$1 = state_49644;
var statearr_49657_50968 = state_49644__$1;
(statearr_49657_50968[(2)] = null);

(statearr_49657_50968[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (11))){
var inst_49619 = (state_49644[(2)]);
var state_49644__$1 = (function (){var statearr_49658 = state_49644;
(statearr_49658[(10)] = inst_49619);

return statearr_49658;
})();
var statearr_49659_50971 = state_49644__$1;
(statearr_49659_50971[(2)] = null);

(statearr_49659_50971[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (9))){
var state_49644__$1 = state_49644;
var statearr_49660_50974 = state_49644__$1;
(statearr_49660_50974[(2)] = null);

(statearr_49660_50974[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (5))){
var state_49644__$1 = state_49644;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49661_50975 = state_49644__$1;
(statearr_49661_50975[(1)] = (8));

} else {
var statearr_49662_50976 = state_49644__$1;
(statearr_49662_50976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (14))){
var inst_49624 = (state_49644[(11)]);
var inst_49622 = (state_49644[(8)]);
var inst_49622__$1 = (state_49644[(2)]);
var inst_49623 = (inst_49622__$1 == null);
var inst_49624__$1 = cljs.core.not(inst_49623);
var state_49644__$1 = (function (){var statearr_49663 = state_49644;
(statearr_49663[(11)] = inst_49624__$1);

(statearr_49663[(8)] = inst_49622__$1);

return statearr_49663;
})();
if(inst_49624__$1){
var statearr_49664_50978 = state_49644__$1;
(statearr_49664_50978[(1)] = (15));

} else {
var statearr_49665_50979 = state_49644__$1;
(statearr_49665_50979[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (16))){
var inst_49624 = (state_49644[(11)]);
var state_49644__$1 = state_49644;
var statearr_49666_50980 = state_49644__$1;
(statearr_49666_50980[(2)] = inst_49624);

(statearr_49666_50980[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (10))){
var inst_49616 = (state_49644[(2)]);
var state_49644__$1 = state_49644;
var statearr_49667_50983 = state_49644__$1;
(statearr_49667_50983[(2)] = inst_49616);

(statearr_49667_50983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (18))){
var inst_49627 = (state_49644[(2)]);
var state_49644__$1 = state_49644;
var statearr_49668_50986 = state_49644__$1;
(statearr_49668_50986[(2)] = inst_49627);

(statearr_49668_50986[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (8))){
var inst_49613 = cljs.core.async.close_BANG_(to);
var state_49644__$1 = state_49644;
var statearr_49669_50988 = state_49644__$1;
(statearr_49669_50988[(2)] = inst_49613);

(statearr_49669_50988[(1)] = (10));


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
});})(c__49370__auto__,jobs,results,process,async))
;
return ((function (switch__49300__auto__,c__49370__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49301__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49301__auto____0 = (function (){
var statearr_49670 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49670[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49301__auto__);

(statearr_49670[(1)] = (1));

return statearr_49670;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49301__auto____1 = (function (state_49644){
while(true){
var ret_value__49302__auto__ = (function (){try{while(true){
var result__49303__auto__ = switch__49300__auto__(state_49644);
if(cljs.core.keyword_identical_QMARK_(result__49303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49303__auto__;
}
break;
}
}catch (e49671){if((e49671 instanceof Object)){
var ex__49304__auto__ = e49671;
var statearr_49672_50994 = state_49644;
(statearr_49672_50994[(5)] = ex__49304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49671;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50995 = state_49644;
state_49644 = G__50995;
continue;
} else {
return ret_value__49302__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49301__auto__ = function(state_49644){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49301__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49301__auto____1.call(this,state_49644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49301__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49301__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49301__auto__;
})()
;})(switch__49300__auto__,c__49370__auto__,jobs,results,process,async))
})();
var state__49372__auto__ = (function (){var statearr_49673 = (f__49371__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49371__auto__.cljs$core$IFn$_invoke$arity$0() : f__49371__auto__.call(null));
(statearr_49673[(6)] = c__49370__auto__);

return statearr_49673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49372__auto__);
});})(c__49370__auto__,jobs,results,process,async))
);

return c__49370__auto__;
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
var G__49675 = arguments.length;
switch (G__49675) {
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

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__49677 = arguments.length;
switch (G__49677) {
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

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__49679 = arguments.length;
switch (G__49679) {
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

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__49370__auto___51011 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49370__auto___51011,tc,fc){
return (function (){
var f__49371__auto__ = (function (){var switch__49300__auto__ = ((function (c__49370__auto___51011,tc,fc){
return (function (state_49705){
var state_val_49706 = (state_49705[(1)]);
if((state_val_49706 === (7))){
var inst_49701 = (state_49705[(2)]);
var state_49705__$1 = state_49705;
var statearr_49707_51012 = state_49705__$1;
(statearr_49707_51012[(2)] = inst_49701);

(statearr_49707_51012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49706 === (1))){
var state_49705__$1 = state_49705;
var statearr_49708_51013 = state_49705__$1;
(statearr_49708_51013[(2)] = null);

(statearr_49708_51013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49706 === (4))){
var inst_49682 = (state_49705[(7)]);
var inst_49682__$1 = (state_49705[(2)]);
var inst_49683 = (inst_49682__$1 == null);
var state_49705__$1 = (function (){var statearr_49709 = state_49705;
(statearr_49709[(7)] = inst_49682__$1);

return statearr_49709;
})();
if(cljs.core.truth_(inst_49683)){
var statearr_49710_51015 = state_49705__$1;
(statearr_49710_51015[(1)] = (5));

} else {
var statearr_49711_51016 = state_49705__$1;
(statearr_49711_51016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49706 === (13))){
var state_49705__$1 = state_49705;
var statearr_49712_51017 = state_49705__$1;
(statearr_49712_51017[(2)] = null);

(statearr_49712_51017[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49706 === (6))){
var inst_49682 = (state_49705[(7)]);
var inst_49688 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_49682) : p.call(null,inst_49682));
var state_49705__$1 = state_49705;
if(cljs.core.truth_(inst_49688)){
var statearr_49713_51018 = state_49705__$1;
(statearr_49713_51018[(1)] = (9));

} else {
var statearr_49714_51019 = state_49705__$1;
(statearr_49714_51019[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49706 === (3))){
var inst_49703 = (state_49705[(2)]);
var state_49705__$1 = state_49705;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49705__$1,inst_49703);
} else {
if((state_val_49706 === (12))){
var state_49705__$1 = state_49705;
var statearr_49715_51020 = state_49705__$1;
(statearr_49715_51020[(2)] = null);

(statearr_49715_51020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49706 === (2))){
var state_49705__$1 = state_49705;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49705__$1,(4),ch);
} else {
if((state_val_49706 === (11))){
var inst_49682 = (state_49705[(7)]);
var inst_49692 = (state_49705[(2)]);
var state_49705__$1 = state_49705;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49705__$1,(8),inst_49692,inst_49682);
} else {
if((state_val_49706 === (9))){
var state_49705__$1 = state_49705;
var statearr_49716_51022 = state_49705__$1;
(statearr_49716_51022[(2)] = tc);

(statearr_49716_51022[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49706 === (5))){
var inst_49685 = cljs.core.async.close_BANG_(tc);
var inst_49686 = cljs.core.async.close_BANG_(fc);
var state_49705__$1 = (function (){var statearr_49717 = state_49705;
(statearr_49717[(8)] = inst_49685);

return statearr_49717;
})();
var statearr_49718_51023 = state_49705__$1;
(statearr_49718_51023[(2)] = inst_49686);

(statearr_49718_51023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49706 === (14))){
var inst_49699 = (state_49705[(2)]);
var state_49705__$1 = state_49705;
var statearr_49719_51024 = state_49705__$1;
(statearr_49719_51024[(2)] = inst_49699);

(statearr_49719_51024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49706 === (10))){
var state_49705__$1 = state_49705;
var statearr_49720_51025 = state_49705__$1;
(statearr_49720_51025[(2)] = fc);

(statearr_49720_51025[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49706 === (8))){
var inst_49694 = (state_49705[(2)]);
var state_49705__$1 = state_49705;
if(cljs.core.truth_(inst_49694)){
var statearr_49721_51026 = state_49705__$1;
(statearr_49721_51026[(1)] = (12));

} else {
var statearr_49722_51027 = state_49705__$1;
(statearr_49722_51027[(1)] = (13));

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
});})(c__49370__auto___51011,tc,fc))
;
return ((function (switch__49300__auto__,c__49370__auto___51011,tc,fc){
return (function() {
var cljs$core$async$state_machine__49301__auto__ = null;
var cljs$core$async$state_machine__49301__auto____0 = (function (){
var statearr_49723 = [null,null,null,null,null,null,null,null,null];
(statearr_49723[(0)] = cljs$core$async$state_machine__49301__auto__);

(statearr_49723[(1)] = (1));

return statearr_49723;
});
var cljs$core$async$state_machine__49301__auto____1 = (function (state_49705){
while(true){
var ret_value__49302__auto__ = (function (){try{while(true){
var result__49303__auto__ = switch__49300__auto__(state_49705);
if(cljs.core.keyword_identical_QMARK_(result__49303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49303__auto__;
}
break;
}
}catch (e49724){if((e49724 instanceof Object)){
var ex__49304__auto__ = e49724;
var statearr_49725_51028 = state_49705;
(statearr_49725_51028[(5)] = ex__49304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49724;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51029 = state_49705;
state_49705 = G__51029;
continue;
} else {
return ret_value__49302__auto__;
}
break;
}
});
cljs$core$async$state_machine__49301__auto__ = function(state_49705){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49301__auto____1.call(this,state_49705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49301__auto____0;
cljs$core$async$state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49301__auto____1;
return cljs$core$async$state_machine__49301__auto__;
})()
;})(switch__49300__auto__,c__49370__auto___51011,tc,fc))
})();
var state__49372__auto__ = (function (){var statearr_49726 = (f__49371__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49371__auto__.cljs$core$IFn$_invoke$arity$0() : f__49371__auto__.call(null));
(statearr_49726[(6)] = c__49370__auto___51011);

return statearr_49726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49372__auto__);
});})(c__49370__auto___51011,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__49370__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49370__auto__){
return (function (){
var f__49371__auto__ = (function (){var switch__49300__auto__ = ((function (c__49370__auto__){
return (function (state_49747){
var state_val_49748 = (state_49747[(1)]);
if((state_val_49748 === (7))){
var inst_49743 = (state_49747[(2)]);
var state_49747__$1 = state_49747;
var statearr_49749_51030 = state_49747__$1;
(statearr_49749_51030[(2)] = inst_49743);

(statearr_49749_51030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49748 === (1))){
var inst_49727 = init;
var state_49747__$1 = (function (){var statearr_49750 = state_49747;
(statearr_49750[(7)] = inst_49727);

return statearr_49750;
})();
var statearr_49751_51039 = state_49747__$1;
(statearr_49751_51039[(2)] = null);

(statearr_49751_51039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49748 === (4))){
var inst_49730 = (state_49747[(8)]);
var inst_49730__$1 = (state_49747[(2)]);
var inst_49731 = (inst_49730__$1 == null);
var state_49747__$1 = (function (){var statearr_49752 = state_49747;
(statearr_49752[(8)] = inst_49730__$1);

return statearr_49752;
})();
if(cljs.core.truth_(inst_49731)){
var statearr_49753_51041 = state_49747__$1;
(statearr_49753_51041[(1)] = (5));

} else {
var statearr_49754_51042 = state_49747__$1;
(statearr_49754_51042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49748 === (6))){
var inst_49727 = (state_49747[(7)]);
var inst_49730 = (state_49747[(8)]);
var inst_49734 = (state_49747[(9)]);
var inst_49734__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_49727,inst_49730) : f.call(null,inst_49727,inst_49730));
var inst_49735 = cljs.core.reduced_QMARK_(inst_49734__$1);
var state_49747__$1 = (function (){var statearr_49755 = state_49747;
(statearr_49755[(9)] = inst_49734__$1);

return statearr_49755;
})();
if(inst_49735){
var statearr_49756_51043 = state_49747__$1;
(statearr_49756_51043[(1)] = (8));

} else {
var statearr_49757_51044 = state_49747__$1;
(statearr_49757_51044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49748 === (3))){
var inst_49745 = (state_49747[(2)]);
var state_49747__$1 = state_49747;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49747__$1,inst_49745);
} else {
if((state_val_49748 === (2))){
var state_49747__$1 = state_49747;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49747__$1,(4),ch);
} else {
if((state_val_49748 === (9))){
var inst_49734 = (state_49747[(9)]);
var inst_49727 = inst_49734;
var state_49747__$1 = (function (){var statearr_49758 = state_49747;
(statearr_49758[(7)] = inst_49727);

return statearr_49758;
})();
var statearr_49759_51045 = state_49747__$1;
(statearr_49759_51045[(2)] = null);

(statearr_49759_51045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49748 === (5))){
var inst_49727 = (state_49747[(7)]);
var state_49747__$1 = state_49747;
var statearr_49760_51046 = state_49747__$1;
(statearr_49760_51046[(2)] = inst_49727);

(statearr_49760_51046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49748 === (10))){
var inst_49741 = (state_49747[(2)]);
var state_49747__$1 = state_49747;
var statearr_49761_51047 = state_49747__$1;
(statearr_49761_51047[(2)] = inst_49741);

(statearr_49761_51047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49748 === (8))){
var inst_49734 = (state_49747[(9)]);
var inst_49737 = cljs.core.deref(inst_49734);
var state_49747__$1 = state_49747;
var statearr_49762_51048 = state_49747__$1;
(statearr_49762_51048[(2)] = inst_49737);

(statearr_49762_51048[(1)] = (10));


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
});})(c__49370__auto__))
;
return ((function (switch__49300__auto__,c__49370__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__49301__auto__ = null;
var cljs$core$async$reduce_$_state_machine__49301__auto____0 = (function (){
var statearr_49763 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49763[(0)] = cljs$core$async$reduce_$_state_machine__49301__auto__);

(statearr_49763[(1)] = (1));

return statearr_49763;
});
var cljs$core$async$reduce_$_state_machine__49301__auto____1 = (function (state_49747){
while(true){
var ret_value__49302__auto__ = (function (){try{while(true){
var result__49303__auto__ = switch__49300__auto__(state_49747);
if(cljs.core.keyword_identical_QMARK_(result__49303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49303__auto__;
}
break;
}
}catch (e49764){if((e49764 instanceof Object)){
var ex__49304__auto__ = e49764;
var statearr_49765_51049 = state_49747;
(statearr_49765_51049[(5)] = ex__49304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49764;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51050 = state_49747;
state_49747 = G__51050;
continue;
} else {
return ret_value__49302__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__49301__auto__ = function(state_49747){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__49301__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__49301__auto____1.call(this,state_49747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__49301__auto____0;
cljs$core$async$reduce_$_state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__49301__auto____1;
return cljs$core$async$reduce_$_state_machine__49301__auto__;
})()
;})(switch__49300__auto__,c__49370__auto__))
})();
var state__49372__auto__ = (function (){var statearr_49766 = (f__49371__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49371__auto__.cljs$core$IFn$_invoke$arity$0() : f__49371__auto__.call(null));
(statearr_49766[(6)] = c__49370__auto__);

return statearr_49766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49372__auto__);
});})(c__49370__auto__))
);

return c__49370__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__49370__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49370__auto__,f__$1){
return (function (){
var f__49371__auto__ = (function (){var switch__49300__auto__ = ((function (c__49370__auto__,f__$1){
return (function (state_49772){
var state_val_49773 = (state_49772[(1)]);
if((state_val_49773 === (1))){
var inst_49767 = cljs.core.async.reduce(f__$1,init,ch);
var state_49772__$1 = state_49772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49772__$1,(2),inst_49767);
} else {
if((state_val_49773 === (2))){
var inst_49769 = (state_49772[(2)]);
var inst_49770 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_49769) : f__$1.call(null,inst_49769));
var state_49772__$1 = state_49772;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49772__$1,inst_49770);
} else {
return null;
}
}
});})(c__49370__auto__,f__$1))
;
return ((function (switch__49300__auto__,c__49370__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__49301__auto__ = null;
var cljs$core$async$transduce_$_state_machine__49301__auto____0 = (function (){
var statearr_49774 = [null,null,null,null,null,null,null];
(statearr_49774[(0)] = cljs$core$async$transduce_$_state_machine__49301__auto__);

(statearr_49774[(1)] = (1));

return statearr_49774;
});
var cljs$core$async$transduce_$_state_machine__49301__auto____1 = (function (state_49772){
while(true){
var ret_value__49302__auto__ = (function (){try{while(true){
var result__49303__auto__ = switch__49300__auto__(state_49772);
if(cljs.core.keyword_identical_QMARK_(result__49303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49303__auto__;
}
break;
}
}catch (e49775){if((e49775 instanceof Object)){
var ex__49304__auto__ = e49775;
var statearr_49776_51052 = state_49772;
(statearr_49776_51052[(5)] = ex__49304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49775;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51056 = state_49772;
state_49772 = G__51056;
continue;
} else {
return ret_value__49302__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__49301__auto__ = function(state_49772){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__49301__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__49301__auto____1.call(this,state_49772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__49301__auto____0;
cljs$core$async$transduce_$_state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__49301__auto____1;
return cljs$core$async$transduce_$_state_machine__49301__auto__;
})()
;})(switch__49300__auto__,c__49370__auto__,f__$1))
})();
var state__49372__auto__ = (function (){var statearr_49777 = (f__49371__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49371__auto__.cljs$core$IFn$_invoke$arity$0() : f__49371__auto__.call(null));
(statearr_49777[(6)] = c__49370__auto__);

return statearr_49777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49372__auto__);
});})(c__49370__auto__,f__$1))
);

return c__49370__auto__;
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
var G__49779 = arguments.length;
switch (G__49779) {
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

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__49370__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49370__auto__){
return (function (){
var f__49371__auto__ = (function (){var switch__49300__auto__ = ((function (c__49370__auto__){
return (function (state_49804){
var state_val_49805 = (state_49804[(1)]);
if((state_val_49805 === (7))){
var inst_49786 = (state_49804[(2)]);
var state_49804__$1 = state_49804;
var statearr_49806_51061 = state_49804__$1;
(statearr_49806_51061[(2)] = inst_49786);

(statearr_49806_51061[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49805 === (1))){
var inst_49780 = cljs.core.seq(coll);
var inst_49781 = inst_49780;
var state_49804__$1 = (function (){var statearr_49807 = state_49804;
(statearr_49807[(7)] = inst_49781);

return statearr_49807;
})();
var statearr_49808_51062 = state_49804__$1;
(statearr_49808_51062[(2)] = null);

(statearr_49808_51062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49805 === (4))){
var inst_49781 = (state_49804[(7)]);
var inst_49784 = cljs.core.first(inst_49781);
var state_49804__$1 = state_49804;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49804__$1,(7),ch,inst_49784);
} else {
if((state_val_49805 === (13))){
var inst_49798 = (state_49804[(2)]);
var state_49804__$1 = state_49804;
var statearr_49809_51066 = state_49804__$1;
(statearr_49809_51066[(2)] = inst_49798);

(statearr_49809_51066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49805 === (6))){
var inst_49789 = (state_49804[(2)]);
var state_49804__$1 = state_49804;
if(cljs.core.truth_(inst_49789)){
var statearr_49810_51067 = state_49804__$1;
(statearr_49810_51067[(1)] = (8));

} else {
var statearr_49811_51068 = state_49804__$1;
(statearr_49811_51068[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49805 === (3))){
var inst_49802 = (state_49804[(2)]);
var state_49804__$1 = state_49804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49804__$1,inst_49802);
} else {
if((state_val_49805 === (12))){
var state_49804__$1 = state_49804;
var statearr_49812_51070 = state_49804__$1;
(statearr_49812_51070[(2)] = null);

(statearr_49812_51070[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49805 === (2))){
var inst_49781 = (state_49804[(7)]);
var state_49804__$1 = state_49804;
if(cljs.core.truth_(inst_49781)){
var statearr_49813_51071 = state_49804__$1;
(statearr_49813_51071[(1)] = (4));

} else {
var statearr_49814_51074 = state_49804__$1;
(statearr_49814_51074[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49805 === (11))){
var inst_49795 = cljs.core.async.close_BANG_(ch);
var state_49804__$1 = state_49804;
var statearr_49815_51076 = state_49804__$1;
(statearr_49815_51076[(2)] = inst_49795);

(statearr_49815_51076[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49805 === (9))){
var state_49804__$1 = state_49804;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49816_51077 = state_49804__$1;
(statearr_49816_51077[(1)] = (11));

} else {
var statearr_49817_51078 = state_49804__$1;
(statearr_49817_51078[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49805 === (5))){
var inst_49781 = (state_49804[(7)]);
var state_49804__$1 = state_49804;
var statearr_49818_51079 = state_49804__$1;
(statearr_49818_51079[(2)] = inst_49781);

(statearr_49818_51079[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49805 === (10))){
var inst_49800 = (state_49804[(2)]);
var state_49804__$1 = state_49804;
var statearr_49819_51080 = state_49804__$1;
(statearr_49819_51080[(2)] = inst_49800);

(statearr_49819_51080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49805 === (8))){
var inst_49781 = (state_49804[(7)]);
var inst_49791 = cljs.core.next(inst_49781);
var inst_49781__$1 = inst_49791;
var state_49804__$1 = (function (){var statearr_49820 = state_49804;
(statearr_49820[(7)] = inst_49781__$1);

return statearr_49820;
})();
var statearr_49821_51083 = state_49804__$1;
(statearr_49821_51083[(2)] = null);

(statearr_49821_51083[(1)] = (2));


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
});})(c__49370__auto__))
;
return ((function (switch__49300__auto__,c__49370__auto__){
return (function() {
var cljs$core$async$state_machine__49301__auto__ = null;
var cljs$core$async$state_machine__49301__auto____0 = (function (){
var statearr_49822 = [null,null,null,null,null,null,null,null];
(statearr_49822[(0)] = cljs$core$async$state_machine__49301__auto__);

(statearr_49822[(1)] = (1));

return statearr_49822;
});
var cljs$core$async$state_machine__49301__auto____1 = (function (state_49804){
while(true){
var ret_value__49302__auto__ = (function (){try{while(true){
var result__49303__auto__ = switch__49300__auto__(state_49804);
if(cljs.core.keyword_identical_QMARK_(result__49303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49303__auto__;
}
break;
}
}catch (e49823){if((e49823 instanceof Object)){
var ex__49304__auto__ = e49823;
var statearr_49824_51085 = state_49804;
(statearr_49824_51085[(5)] = ex__49304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49823;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51088 = state_49804;
state_49804 = G__51088;
continue;
} else {
return ret_value__49302__auto__;
}
break;
}
});
cljs$core$async$state_machine__49301__auto__ = function(state_49804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49301__auto____1.call(this,state_49804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49301__auto____0;
cljs$core$async$state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49301__auto____1;
return cljs$core$async$state_machine__49301__auto__;
})()
;})(switch__49300__auto__,c__49370__auto__))
})();
var state__49372__auto__ = (function (){var statearr_49825 = (f__49371__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49371__auto__.cljs$core$IFn$_invoke$arity$0() : f__49371__auto__.call(null));
(statearr_49825[(6)] = c__49370__auto__);

return statearr_49825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49372__auto__);
});})(c__49370__auto__))
);

return c__49370__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

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

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49826 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49826 = (function (ch,cs,meta49827){
this.ch = ch;
this.cs = cs;
this.meta49827 = meta49827;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_49828,meta49827__$1){
var self__ = this;
var _49828__$1 = this;
return (new cljs.core.async.t_cljs$core$async49826(self__.ch,self__.cs,meta49827__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async49826.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_49828){
var self__ = this;
var _49828__$1 = this;
return self__.meta49827;
});})(cs))
;

cljs.core.async.t_cljs$core$async49826.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49826.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async49826.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49826.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async49826.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async49826.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async49826.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta49827","meta49827",-1627075699,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async49826.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49826.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49826";

cljs.core.async.t_cljs$core$async49826.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async49826");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49826.
 */
cljs.core.async.__GT_t_cljs$core$async49826 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async49826(ch__$1,cs__$1,meta49827){
return (new cljs.core.async.t_cljs$core$async49826(ch__$1,cs__$1,meta49827));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async49826(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__49370__auto___51103 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49370__auto___51103,cs,m,dchan,dctr,done){
return (function (){
var f__49371__auto__ = (function (){var switch__49300__auto__ = ((function (c__49370__auto___51103,cs,m,dchan,dctr,done){
return (function (state_49963){
var state_val_49964 = (state_49963[(1)]);
if((state_val_49964 === (7))){
var inst_49959 = (state_49963[(2)]);
var state_49963__$1 = state_49963;
var statearr_49965_51104 = state_49963__$1;
(statearr_49965_51104[(2)] = inst_49959);

(statearr_49965_51104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (20))){
var inst_49862 = (state_49963[(7)]);
var inst_49874 = cljs.core.first(inst_49862);
var inst_49875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49874,(0),null);
var inst_49876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49874,(1),null);
var state_49963__$1 = (function (){var statearr_49966 = state_49963;
(statearr_49966[(8)] = inst_49875);

return statearr_49966;
})();
if(cljs.core.truth_(inst_49876)){
var statearr_49967_51105 = state_49963__$1;
(statearr_49967_51105[(1)] = (22));

} else {
var statearr_49968_51106 = state_49963__$1;
(statearr_49968_51106[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (27))){
var inst_49911 = (state_49963[(9)]);
var inst_49906 = (state_49963[(10)]);
var inst_49831 = (state_49963[(11)]);
var inst_49904 = (state_49963[(12)]);
var inst_49911__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_49904,inst_49906);
var inst_49912 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_49911__$1,inst_49831,done);
var state_49963__$1 = (function (){var statearr_49969 = state_49963;
(statearr_49969[(9)] = inst_49911__$1);

return statearr_49969;
})();
if(cljs.core.truth_(inst_49912)){
var statearr_49970_51107 = state_49963__$1;
(statearr_49970_51107[(1)] = (30));

} else {
var statearr_49971_51108 = state_49963__$1;
(statearr_49971_51108[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (1))){
var state_49963__$1 = state_49963;
var statearr_49972_51109 = state_49963__$1;
(statearr_49972_51109[(2)] = null);

(statearr_49972_51109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (24))){
var inst_49862 = (state_49963[(7)]);
var inst_49881 = (state_49963[(2)]);
var inst_49882 = cljs.core.next(inst_49862);
var inst_49840 = inst_49882;
var inst_49841 = null;
var inst_49842 = (0);
var inst_49843 = (0);
var state_49963__$1 = (function (){var statearr_49973 = state_49963;
(statearr_49973[(13)] = inst_49843);

(statearr_49973[(14)] = inst_49841);

(statearr_49973[(15)] = inst_49881);

(statearr_49973[(16)] = inst_49840);

(statearr_49973[(17)] = inst_49842);

return statearr_49973;
})();
var statearr_49974_51110 = state_49963__$1;
(statearr_49974_51110[(2)] = null);

(statearr_49974_51110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (39))){
var state_49963__$1 = state_49963;
var statearr_49978_51111 = state_49963__$1;
(statearr_49978_51111[(2)] = null);

(statearr_49978_51111[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (4))){
var inst_49831 = (state_49963[(11)]);
var inst_49831__$1 = (state_49963[(2)]);
var inst_49832 = (inst_49831__$1 == null);
var state_49963__$1 = (function (){var statearr_49979 = state_49963;
(statearr_49979[(11)] = inst_49831__$1);

return statearr_49979;
})();
if(cljs.core.truth_(inst_49832)){
var statearr_49980_51112 = state_49963__$1;
(statearr_49980_51112[(1)] = (5));

} else {
var statearr_49981_51113 = state_49963__$1;
(statearr_49981_51113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (15))){
var inst_49843 = (state_49963[(13)]);
var inst_49841 = (state_49963[(14)]);
var inst_49840 = (state_49963[(16)]);
var inst_49842 = (state_49963[(17)]);
var inst_49858 = (state_49963[(2)]);
var inst_49859 = (inst_49843 + (1));
var tmp49975 = inst_49841;
var tmp49976 = inst_49840;
var tmp49977 = inst_49842;
var inst_49840__$1 = tmp49976;
var inst_49841__$1 = tmp49975;
var inst_49842__$1 = tmp49977;
var inst_49843__$1 = inst_49859;
var state_49963__$1 = (function (){var statearr_49982 = state_49963;
(statearr_49982[(13)] = inst_49843__$1);

(statearr_49982[(14)] = inst_49841__$1);

(statearr_49982[(18)] = inst_49858);

(statearr_49982[(16)] = inst_49840__$1);

(statearr_49982[(17)] = inst_49842__$1);

return statearr_49982;
})();
var statearr_49983_51116 = state_49963__$1;
(statearr_49983_51116[(2)] = null);

(statearr_49983_51116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (21))){
var inst_49885 = (state_49963[(2)]);
var state_49963__$1 = state_49963;
var statearr_49987_51117 = state_49963__$1;
(statearr_49987_51117[(2)] = inst_49885);

(statearr_49987_51117[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (31))){
var inst_49911 = (state_49963[(9)]);
var inst_49915 = done(null);
var inst_49916 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_49911);
var state_49963__$1 = (function (){var statearr_49988 = state_49963;
(statearr_49988[(19)] = inst_49915);

return statearr_49988;
})();
var statearr_49989_51118 = state_49963__$1;
(statearr_49989_51118[(2)] = inst_49916);

(statearr_49989_51118[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (32))){
var inst_49903 = (state_49963[(20)]);
var inst_49905 = (state_49963[(21)]);
var inst_49906 = (state_49963[(10)]);
var inst_49904 = (state_49963[(12)]);
var inst_49918 = (state_49963[(2)]);
var inst_49919 = (inst_49906 + (1));
var tmp49984 = inst_49903;
var tmp49985 = inst_49905;
var tmp49986 = inst_49904;
var inst_49903__$1 = tmp49984;
var inst_49904__$1 = tmp49986;
var inst_49905__$1 = tmp49985;
var inst_49906__$1 = inst_49919;
var state_49963__$1 = (function (){var statearr_49990 = state_49963;
(statearr_49990[(20)] = inst_49903__$1);

(statearr_49990[(22)] = inst_49918);

(statearr_49990[(21)] = inst_49905__$1);

(statearr_49990[(10)] = inst_49906__$1);

(statearr_49990[(12)] = inst_49904__$1);

return statearr_49990;
})();
var statearr_49991_51119 = state_49963__$1;
(statearr_49991_51119[(2)] = null);

(statearr_49991_51119[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (40))){
var inst_49931 = (state_49963[(23)]);
var inst_49935 = done(null);
var inst_49936 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_49931);
var state_49963__$1 = (function (){var statearr_49992 = state_49963;
(statearr_49992[(24)] = inst_49935);

return statearr_49992;
})();
var statearr_49993_51120 = state_49963__$1;
(statearr_49993_51120[(2)] = inst_49936);

(statearr_49993_51120[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (33))){
var inst_49922 = (state_49963[(25)]);
var inst_49924 = cljs.core.chunked_seq_QMARK_(inst_49922);
var state_49963__$1 = state_49963;
if(inst_49924){
var statearr_49994_51121 = state_49963__$1;
(statearr_49994_51121[(1)] = (36));

} else {
var statearr_49995_51122 = state_49963__$1;
(statearr_49995_51122[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (13))){
var inst_49852 = (state_49963[(26)]);
var inst_49855 = cljs.core.async.close_BANG_(inst_49852);
var state_49963__$1 = state_49963;
var statearr_49996_51123 = state_49963__$1;
(statearr_49996_51123[(2)] = inst_49855);

(statearr_49996_51123[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (22))){
var inst_49875 = (state_49963[(8)]);
var inst_49878 = cljs.core.async.close_BANG_(inst_49875);
var state_49963__$1 = state_49963;
var statearr_49997_51124 = state_49963__$1;
(statearr_49997_51124[(2)] = inst_49878);

(statearr_49997_51124[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (36))){
var inst_49922 = (state_49963[(25)]);
var inst_49926 = cljs.core.chunk_first(inst_49922);
var inst_49927 = cljs.core.chunk_rest(inst_49922);
var inst_49928 = cljs.core.count(inst_49926);
var inst_49903 = inst_49927;
var inst_49904 = inst_49926;
var inst_49905 = inst_49928;
var inst_49906 = (0);
var state_49963__$1 = (function (){var statearr_49998 = state_49963;
(statearr_49998[(20)] = inst_49903);

(statearr_49998[(21)] = inst_49905);

(statearr_49998[(10)] = inst_49906);

(statearr_49998[(12)] = inst_49904);

return statearr_49998;
})();
var statearr_49999_51125 = state_49963__$1;
(statearr_49999_51125[(2)] = null);

(statearr_49999_51125[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (41))){
var inst_49922 = (state_49963[(25)]);
var inst_49938 = (state_49963[(2)]);
var inst_49939 = cljs.core.next(inst_49922);
var inst_49903 = inst_49939;
var inst_49904 = null;
var inst_49905 = (0);
var inst_49906 = (0);
var state_49963__$1 = (function (){var statearr_50000 = state_49963;
(statearr_50000[(27)] = inst_49938);

(statearr_50000[(20)] = inst_49903);

(statearr_50000[(21)] = inst_49905);

(statearr_50000[(10)] = inst_49906);

(statearr_50000[(12)] = inst_49904);

return statearr_50000;
})();
var statearr_50001_51126 = state_49963__$1;
(statearr_50001_51126[(2)] = null);

(statearr_50001_51126[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (43))){
var state_49963__$1 = state_49963;
var statearr_50002_51127 = state_49963__$1;
(statearr_50002_51127[(2)] = null);

(statearr_50002_51127[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (29))){
var inst_49947 = (state_49963[(2)]);
var state_49963__$1 = state_49963;
var statearr_50003_51128 = state_49963__$1;
(statearr_50003_51128[(2)] = inst_49947);

(statearr_50003_51128[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (44))){
var inst_49956 = (state_49963[(2)]);
var state_49963__$1 = (function (){var statearr_50004 = state_49963;
(statearr_50004[(28)] = inst_49956);

return statearr_50004;
})();
var statearr_50005_51130 = state_49963__$1;
(statearr_50005_51130[(2)] = null);

(statearr_50005_51130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (6))){
var inst_49895 = (state_49963[(29)]);
var inst_49894 = cljs.core.deref(cs);
var inst_49895__$1 = cljs.core.keys(inst_49894);
var inst_49896 = cljs.core.count(inst_49895__$1);
var inst_49897 = cljs.core.reset_BANG_(dctr,inst_49896);
var inst_49902 = cljs.core.seq(inst_49895__$1);
var inst_49903 = inst_49902;
var inst_49904 = null;
var inst_49905 = (0);
var inst_49906 = (0);
var state_49963__$1 = (function (){var statearr_50006 = state_49963;
(statearr_50006[(29)] = inst_49895__$1);

(statearr_50006[(20)] = inst_49903);

(statearr_50006[(21)] = inst_49905);

(statearr_50006[(30)] = inst_49897);

(statearr_50006[(10)] = inst_49906);

(statearr_50006[(12)] = inst_49904);

return statearr_50006;
})();
var statearr_50007_51131 = state_49963__$1;
(statearr_50007_51131[(2)] = null);

(statearr_50007_51131[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (28))){
var inst_49903 = (state_49963[(20)]);
var inst_49922 = (state_49963[(25)]);
var inst_49922__$1 = cljs.core.seq(inst_49903);
var state_49963__$1 = (function (){var statearr_50008 = state_49963;
(statearr_50008[(25)] = inst_49922__$1);

return statearr_50008;
})();
if(inst_49922__$1){
var statearr_50009_51134 = state_49963__$1;
(statearr_50009_51134[(1)] = (33));

} else {
var statearr_50010_51135 = state_49963__$1;
(statearr_50010_51135[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (25))){
var inst_49905 = (state_49963[(21)]);
var inst_49906 = (state_49963[(10)]);
var inst_49908 = (inst_49906 < inst_49905);
var inst_49909 = inst_49908;
var state_49963__$1 = state_49963;
if(cljs.core.truth_(inst_49909)){
var statearr_50011_51136 = state_49963__$1;
(statearr_50011_51136[(1)] = (27));

} else {
var statearr_50012_51137 = state_49963__$1;
(statearr_50012_51137[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (34))){
var state_49963__$1 = state_49963;
var statearr_50013_51138 = state_49963__$1;
(statearr_50013_51138[(2)] = null);

(statearr_50013_51138[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (17))){
var state_49963__$1 = state_49963;
var statearr_50014_51139 = state_49963__$1;
(statearr_50014_51139[(2)] = null);

(statearr_50014_51139[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (3))){
var inst_49961 = (state_49963[(2)]);
var state_49963__$1 = state_49963;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49963__$1,inst_49961);
} else {
if((state_val_49964 === (12))){
var inst_49890 = (state_49963[(2)]);
var state_49963__$1 = state_49963;
var statearr_50015_51140 = state_49963__$1;
(statearr_50015_51140[(2)] = inst_49890);

(statearr_50015_51140[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (2))){
var state_49963__$1 = state_49963;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49963__$1,(4),ch);
} else {
if((state_val_49964 === (23))){
var state_49963__$1 = state_49963;
var statearr_50016_51143 = state_49963__$1;
(statearr_50016_51143[(2)] = null);

(statearr_50016_51143[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (35))){
var inst_49945 = (state_49963[(2)]);
var state_49963__$1 = state_49963;
var statearr_50017_51144 = state_49963__$1;
(statearr_50017_51144[(2)] = inst_49945);

(statearr_50017_51144[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (19))){
var inst_49862 = (state_49963[(7)]);
var inst_49866 = cljs.core.chunk_first(inst_49862);
var inst_49867 = cljs.core.chunk_rest(inst_49862);
var inst_49868 = cljs.core.count(inst_49866);
var inst_49840 = inst_49867;
var inst_49841 = inst_49866;
var inst_49842 = inst_49868;
var inst_49843 = (0);
var state_49963__$1 = (function (){var statearr_50018 = state_49963;
(statearr_50018[(13)] = inst_49843);

(statearr_50018[(14)] = inst_49841);

(statearr_50018[(16)] = inst_49840);

(statearr_50018[(17)] = inst_49842);

return statearr_50018;
})();
var statearr_50019_51145 = state_49963__$1;
(statearr_50019_51145[(2)] = null);

(statearr_50019_51145[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (11))){
var inst_49862 = (state_49963[(7)]);
var inst_49840 = (state_49963[(16)]);
var inst_49862__$1 = cljs.core.seq(inst_49840);
var state_49963__$1 = (function (){var statearr_50020 = state_49963;
(statearr_50020[(7)] = inst_49862__$1);

return statearr_50020;
})();
if(inst_49862__$1){
var statearr_50021_51147 = state_49963__$1;
(statearr_50021_51147[(1)] = (16));

} else {
var statearr_50022_51148 = state_49963__$1;
(statearr_50022_51148[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (9))){
var inst_49892 = (state_49963[(2)]);
var state_49963__$1 = state_49963;
var statearr_50023_51150 = state_49963__$1;
(statearr_50023_51150[(2)] = inst_49892);

(statearr_50023_51150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (5))){
var inst_49838 = cljs.core.deref(cs);
var inst_49839 = cljs.core.seq(inst_49838);
var inst_49840 = inst_49839;
var inst_49841 = null;
var inst_49842 = (0);
var inst_49843 = (0);
var state_49963__$1 = (function (){var statearr_50024 = state_49963;
(statearr_50024[(13)] = inst_49843);

(statearr_50024[(14)] = inst_49841);

(statearr_50024[(16)] = inst_49840);

(statearr_50024[(17)] = inst_49842);

return statearr_50024;
})();
var statearr_50025_51151 = state_49963__$1;
(statearr_50025_51151[(2)] = null);

(statearr_50025_51151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (14))){
var state_49963__$1 = state_49963;
var statearr_50026_51152 = state_49963__$1;
(statearr_50026_51152[(2)] = null);

(statearr_50026_51152[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (45))){
var inst_49953 = (state_49963[(2)]);
var state_49963__$1 = state_49963;
var statearr_50027_51153 = state_49963__$1;
(statearr_50027_51153[(2)] = inst_49953);

(statearr_50027_51153[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (26))){
var inst_49895 = (state_49963[(29)]);
var inst_49949 = (state_49963[(2)]);
var inst_49950 = cljs.core.seq(inst_49895);
var state_49963__$1 = (function (){var statearr_50028 = state_49963;
(statearr_50028[(31)] = inst_49949);

return statearr_50028;
})();
if(inst_49950){
var statearr_50029_51155 = state_49963__$1;
(statearr_50029_51155[(1)] = (42));

} else {
var statearr_50030_51156 = state_49963__$1;
(statearr_50030_51156[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (16))){
var inst_49862 = (state_49963[(7)]);
var inst_49864 = cljs.core.chunked_seq_QMARK_(inst_49862);
var state_49963__$1 = state_49963;
if(inst_49864){
var statearr_50031_51158 = state_49963__$1;
(statearr_50031_51158[(1)] = (19));

} else {
var statearr_50032_51159 = state_49963__$1;
(statearr_50032_51159[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (38))){
var inst_49942 = (state_49963[(2)]);
var state_49963__$1 = state_49963;
var statearr_50033_51160 = state_49963__$1;
(statearr_50033_51160[(2)] = inst_49942);

(statearr_50033_51160[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (30))){
var state_49963__$1 = state_49963;
var statearr_50034_51161 = state_49963__$1;
(statearr_50034_51161[(2)] = null);

(statearr_50034_51161[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (10))){
var inst_49843 = (state_49963[(13)]);
var inst_49841 = (state_49963[(14)]);
var inst_49851 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_49841,inst_49843);
var inst_49852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49851,(0),null);
var inst_49853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49851,(1),null);
var state_49963__$1 = (function (){var statearr_50035 = state_49963;
(statearr_50035[(26)] = inst_49852);

return statearr_50035;
})();
if(cljs.core.truth_(inst_49853)){
var statearr_50036_51162 = state_49963__$1;
(statearr_50036_51162[(1)] = (13));

} else {
var statearr_50037_51163 = state_49963__$1;
(statearr_50037_51163[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (18))){
var inst_49888 = (state_49963[(2)]);
var state_49963__$1 = state_49963;
var statearr_50038_51164 = state_49963__$1;
(statearr_50038_51164[(2)] = inst_49888);

(statearr_50038_51164[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (42))){
var state_49963__$1 = state_49963;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49963__$1,(45),dchan);
} else {
if((state_val_49964 === (37))){
var inst_49922 = (state_49963[(25)]);
var inst_49831 = (state_49963[(11)]);
var inst_49931 = (state_49963[(23)]);
var inst_49931__$1 = cljs.core.first(inst_49922);
var inst_49932 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_49931__$1,inst_49831,done);
var state_49963__$1 = (function (){var statearr_50039 = state_49963;
(statearr_50039[(23)] = inst_49931__$1);

return statearr_50039;
})();
if(cljs.core.truth_(inst_49932)){
var statearr_50040_51167 = state_49963__$1;
(statearr_50040_51167[(1)] = (39));

} else {
var statearr_50041_51168 = state_49963__$1;
(statearr_50041_51168[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49964 === (8))){
var inst_49843 = (state_49963[(13)]);
var inst_49842 = (state_49963[(17)]);
var inst_49845 = (inst_49843 < inst_49842);
var inst_49846 = inst_49845;
var state_49963__$1 = state_49963;
if(cljs.core.truth_(inst_49846)){
var statearr_50042_51171 = state_49963__$1;
(statearr_50042_51171[(1)] = (10));

} else {
var statearr_50043_51174 = state_49963__$1;
(statearr_50043_51174[(1)] = (11));

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
});})(c__49370__auto___51103,cs,m,dchan,dctr,done))
;
return ((function (switch__49300__auto__,c__49370__auto___51103,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__49301__auto__ = null;
var cljs$core$async$mult_$_state_machine__49301__auto____0 = (function (){
var statearr_50044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50044[(0)] = cljs$core$async$mult_$_state_machine__49301__auto__);

(statearr_50044[(1)] = (1));

return statearr_50044;
});
var cljs$core$async$mult_$_state_machine__49301__auto____1 = (function (state_49963){
while(true){
var ret_value__49302__auto__ = (function (){try{while(true){
var result__49303__auto__ = switch__49300__auto__(state_49963);
if(cljs.core.keyword_identical_QMARK_(result__49303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49303__auto__;
}
break;
}
}catch (e50045){if((e50045 instanceof Object)){
var ex__49304__auto__ = e50045;
var statearr_50046_51179 = state_49963;
(statearr_50046_51179[(5)] = ex__49304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50045;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51180 = state_49963;
state_49963 = G__51180;
continue;
} else {
return ret_value__49302__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__49301__auto__ = function(state_49963){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__49301__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__49301__auto____1.call(this,state_49963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__49301__auto____0;
cljs$core$async$mult_$_state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__49301__auto____1;
return cljs$core$async$mult_$_state_machine__49301__auto__;
})()
;})(switch__49300__auto__,c__49370__auto___51103,cs,m,dchan,dctr,done))
})();
var state__49372__auto__ = (function (){var statearr_50047 = (f__49371__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49371__auto__.cljs$core$IFn$_invoke$arity$0() : f__49371__auto__.call(null));
(statearr_50047[(6)] = c__49370__auto___51103);

return statearr_50047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49372__auto__);
});})(c__49370__auto___51103,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__50049 = arguments.length;
switch (G__50049) {
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

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

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

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___51194 = arguments.length;
var i__4731__auto___51195 = (0);
while(true){
if((i__4731__auto___51195 < len__4730__auto___51194)){
args__4736__auto__.push((arguments[i__4731__auto___51195]));

var G__51196 = (i__4731__auto___51195 + (1));
i__4731__auto___51195 = G__51196;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__50054){
var map__50055 = p__50054;
var map__50055__$1 = (((((!((map__50055 == null))))?(((((map__50055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50055):map__50055);
var opts = map__50055__$1;
var statearr_50057_51197 = state;
(statearr_50057_51197[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__50055,map__50055__$1,opts){
return (function (val){
var statearr_50058_51201 = state;
(statearr_50058_51201[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__50055,map__50055__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_50059_51202 = state;
(statearr_50059_51202[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq50050){
var G__50051 = cljs.core.first(seq50050);
var seq50050__$1 = cljs.core.next(seq50050);
var G__50052 = cljs.core.first(seq50050__$1);
var seq50050__$2 = cljs.core.next(seq50050__$1);
var G__50053 = cljs.core.first(seq50050__$2);
var seq50050__$3 = cljs.core.next(seq50050__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50051,G__50052,G__50053,seq50050__$3);
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
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50060 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50060 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta50061){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta50061 = meta50061;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_50062,meta50061__$1){
var self__ = this;
var _50062__$1 = this;
return (new cljs.core.async.t_cljs$core$async50060(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta50061__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50060.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_50062){
var self__ = this;
var _50062__$1 = this;
return self__.meta50061;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50060.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50060.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50060.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50060.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50060.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50060.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50060.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50060.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50060.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta50061","meta50061",-828148550,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50060.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50060.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50060";

cljs.core.async.t_cljs$core$async50060.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async50060");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50060.
 */
cljs.core.async.__GT_t_cljs$core$async50060 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async50060(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50061){
return (new cljs.core.async.t_cljs$core$async50060(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50061));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async50060(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49370__auto___51224 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49370__auto___51224,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__49371__auto__ = (function (){var switch__49300__auto__ = ((function (c__49370__auto___51224,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_50164){
var state_val_50165 = (state_50164[(1)]);
if((state_val_50165 === (7))){
var inst_50079 = (state_50164[(2)]);
var state_50164__$1 = state_50164;
var statearr_50166_51228 = state_50164__$1;
(statearr_50166_51228[(2)] = inst_50079);

(statearr_50166_51228[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50165 === (20))){
var inst_50091 = (state_50164[(7)]);
var state_50164__$1 = state_50164;
var statearr_50167_51229 = state_50164__$1;
(statearr_50167_51229[(2)] = inst_50091);

(statearr_50167_51229[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50165 === (27))){
var state_50164__$1 = state_50164;
var statearr_50168_51230 = state_50164__$1;
(statearr_50168_51230[(2)] = null);

(statearr_50168_51230[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50165 === (1))){
var inst_50066 = (state_50164[(8)]);
var inst_50066__$1 = calc_state();
var inst_50068 = (inst_50066__$1 == null);
var inst_50069 = cljs.core.not(inst_50068);
var state_50164__$1 = (function (){var statearr_50169 = state_50164;
(statearr_50169[(8)] = inst_50066__$1);

return statearr_50169;
})();
if(inst_50069){
var statearr_50170_51234 = state_50164__$1;
(statearr_50170_51234[(1)] = (2));

} else {
var statearr_50171_51235 = state_50164__$1;
(statearr_50171_51235[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50165 === (24))){
var inst_50115 = (state_50164[(9)]);
var inst_50138 = (state_50164[(10)]);
var inst_50124 = (state_50164[(11)]);
var inst_50138__$1 = (inst_50115.cljs$core$IFn$_invoke$arity$1 ? inst_50115.cljs$core$IFn$_invoke$arity$1(inst_50124) : inst_50115.call(null,inst_50124));
var state_50164__$1 = (function (){var statearr_50172 = state_50164;
(statearr_50172[(10)] = inst_50138__$1);

return statearr_50172;
})();
if(cljs.core.truth_(inst_50138__$1)){
var statearr_50173_51236 = state_50164__$1;
(statearr_50173_51236[(1)] = (29));

} else {
var statearr_50174_51240 = state_50164__$1;
(statearr_50174_51240[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50165 === (4))){
var inst_50082 = (state_50164[(2)]);
var state_50164__$1 = state_50164;
if(cljs.core.truth_(inst_50082)){
var statearr_50175_51241 = state_50164__$1;
(statearr_50175_51241[(1)] = (8));

} else {
var statearr_50176_51242 = state_50164__$1;
(statearr_50176_51242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50165 === (15))){
var inst_50109 = (state_50164[(2)]);
var state_50164__$1 = state_50164;
if(cljs.core.truth_(inst_50109)){
var statearr_50177_51243 = state_50164__$1;
(statearr_50177_51243[(1)] = (19));

} else {
var statearr_50178_51248 = state_50164__$1;
(statearr_50178_51248[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50165 === (21))){
var inst_50114 = (state_50164[(12)]);
var inst_50114__$1 = (state_50164[(2)]);
var inst_50115 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50114__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_50116 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50114__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_50117 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50114__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_50164__$1 = (function (){var statearr_50179 = state_50164;
(statearr_50179[(12)] = inst_50114__$1);

(statearr_50179[(13)] = inst_50116);

(statearr_50179[(9)] = inst_50115);

return statearr_50179;
})();
return cljs.core.async.ioc_alts_BANG_(state_50164__$1,(22),inst_50117);
} else {
if((state_val_50165 === (31))){
var inst_50146 = (state_50164[(2)]);
var state_50164__$1 = state_50164;
if(cljs.core.truth_(inst_50146)){
var statearr_50180_51255 = state_50164__$1;
(statearr_50180_51255[(1)] = (32));

} else {
var statearr_50181_51256 = state_50164__$1;
(statearr_50181_51256[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50165 === (32))){
var inst_50123 = (state_50164[(14)]);
var state_50164__$1 = state_50164;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50164__$1,(35),out,inst_50123);
} else {
if((state_val_50165 === (33))){
var inst_50114 = (state_50164[(12)]);
var inst_50091 = inst_50114;
var state_50164__$1 = (function (){var statearr_50182 = state_50164;
(statearr_50182[(7)] = inst_50091);

return statearr_50182;
})();
var statearr_50183_51257 = state_50164__$1;
(statearr_50183_51257[(2)] = null);

(statearr_50183_51257[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50165 === (13))){
var inst_50091 = (state_50164[(7)]);
var inst_50098 = inst_50091.cljs$lang$protocol_mask$partition0$;
var inst_50099 = (inst_50098 & (64));
var inst_50100 = inst_50091.cljs$core$ISeq$;
var inst_50101 = (cljs.core.PROTOCOL_SENTINEL === inst_50100);
var inst_50102 = ((inst_50099) || (inst_50101));
var state_50164__$1 = state_50164;
if(cljs.core.truth_(inst_50102)){
var statearr_50184_51264 = state_50164__$1;
(statearr_50184_51264[(1)] = (16));

} else {
var statearr_50185_51265 = state_50164__$1;
(statearr_50185_51265[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50165 === (22))){
var inst_50123 = (state_50164[(14)]);
var inst_50124 = (state_50164[(11)]);
var inst_50122 = (state_50164[(2)]);
var inst_50123__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50122,(0),null);
var inst_50124__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50122,(1),null);
var inst_50125 = (inst_50123__$1 == null);
var inst_50126 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50124__$1,change);
var inst_50127 = ((inst_50125) || (inst_50126));
var state_50164__$1 = (function (){var statearr_50186 = state_50164;
(statearr_50186[(14)] = inst_50123__$1);

(statearr_50186[(11)] = inst_50124__$1);

return statearr_50186;
})();
if(cljs.core.truth_(inst_50127)){
var statearr_50187_51272 = state_50164__$1;
(statearr_50187_51272[(1)] = (23));

} else {
var statearr_50188_51273 = state_50164__$1;
(statearr_50188_51273[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50165 === (36))){
var inst_50114 = (state_50164[(12)]);
var inst_50091 = inst_50114;
var state_50164__$1 = (function (){var statearr_50189 = state_50164;
(statearr_50189[(7)] = inst_50091);

return statearr_50189;
})();
var statearr_50190_51274 = state_50164__$1;
(statearr_50190_51274[(2)] = null);

(statearr_50190_51274[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50165 === (29))){
var inst_50138 = (state_50164[(10)]);
var state_50164__$1 = state_50164;
var statearr_50191_51275 = state_50164__$1;
(statearr_50191_51275[(2)] = inst_50138);

(statearr_50191_51275[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50165 === (6))){
var state_50164__$1 = state_50164;
var statearr_50192_51282 = state_50164__$1;
(statearr_50192_51282[(2)] = false);

(statearr_50192_51282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50165 === (28))){
var inst_50134 = (state_50164[(2)]);
var inst_50135 = calc_state();
var inst_50091 = inst_50135;
var state_50164__$1 = (function (){var statearr_50193 = state_50164;
(statearr_50193[(7)] = inst_50091);

(statearr_50193[(15)] = inst_50134);

return statearr_50193;
})();
var statearr_50194_51283 = state_50164__$1;
(statearr_50194_51283[(2)] = null);

(statearr_50194_51283[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50165 === (25))){
var inst_50160 = (state_50164[(2)]);
var state_50164__$1 = state_50164;
var statearr_50195_51284 = state_50164__$1;
(statearr_50195_51284[(2)] = inst_50160);

(statearr_50195_51284[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50165 === (34))){
var inst_50158 = (state_50164[(2)]);
var state_50164__$1 = state_50164;
var statearr_50196_51285 = state_50164__$1;
(statearr_50196_51285[(2)] = inst_50158);

(statearr_50196_51285[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50165 === (17))){
var state_50164__$1 = state_50164;
var statearr_50197_51286 = state_50164__$1;
(statearr_50197_51286[(2)] = false);

(statearr_50197_51286[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50165 === (3))){
var state_50164__$1 = state_50164;
var statearr_50198_51288 = state_50164__$1;
(statearr_50198_51288[(2)] = false);

(statearr_50198_51288[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50165 === (12))){
var inst_50162 = (state_50164[(2)]);
var state_50164__$1 = state_50164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50164__$1,inst_50162);
} else {
if((state_val_50165 === (2))){
var inst_50066 = (state_50164[(8)]);
var inst_50071 = inst_50066.cljs$lang$protocol_mask$partition0$;
var inst_50072 = (inst_50071 & (64));
var inst_50073 = inst_50066.cljs$core$ISeq$;
var inst_50074 = (cljs.core.PROTOCOL_SENTINEL === inst_50073);
var inst_50075 = ((inst_50072) || (inst_50074));
var state_50164__$1 = state_50164;
if(cljs.core.truth_(inst_50075)){
var statearr_50199_51289 = state_50164__$1;
(statearr_50199_51289[(1)] = (5));

} else {
var statearr_50200_51290 = state_50164__$1;
(statearr_50200_51290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50165 === (23))){
var inst_50123 = (state_50164[(14)]);
var inst_50129 = (inst_50123 == null);
var state_50164__$1 = state_50164;
if(cljs.core.truth_(inst_50129)){
var statearr_50201_51291 = state_50164__$1;
(statearr_50201_51291[(1)] = (26));

} else {
var statearr_50202_51292 = state_50164__$1;
(statearr_50202_51292[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50165 === (35))){
var inst_50149 = (state_50164[(2)]);
var state_50164__$1 = state_50164;
if(cljs.core.truth_(inst_50149)){
var statearr_50203_51293 = state_50164__$1;
(statearr_50203_51293[(1)] = (36));

} else {
var statearr_50204_51294 = state_50164__$1;
(statearr_50204_51294[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50165 === (19))){
var inst_50091 = (state_50164[(7)]);
var inst_50111 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50091);
var state_50164__$1 = state_50164;
var statearr_50205_51295 = state_50164__$1;
(statearr_50205_51295[(2)] = inst_50111);

(statearr_50205_51295[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50165 === (11))){
var inst_50091 = (state_50164[(7)]);
var inst_50095 = (inst_50091 == null);
var inst_50096 = cljs.core.not(inst_50095);
var state_50164__$1 = state_50164;
if(inst_50096){
var statearr_50206_51296 = state_50164__$1;
(statearr_50206_51296[(1)] = (13));

} else {
var statearr_50207_51297 = state_50164__$1;
(statearr_50207_51297[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50165 === (9))){
var inst_50066 = (state_50164[(8)]);
var state_50164__$1 = state_50164;
var statearr_50208_51298 = state_50164__$1;
(statearr_50208_51298[(2)] = inst_50066);

(statearr_50208_51298[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50165 === (5))){
var state_50164__$1 = state_50164;
var statearr_50209_51299 = state_50164__$1;
(statearr_50209_51299[(2)] = true);

(statearr_50209_51299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50165 === (14))){
var state_50164__$1 = state_50164;
var statearr_50210_51300 = state_50164__$1;
(statearr_50210_51300[(2)] = false);

(statearr_50210_51300[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50165 === (26))){
var inst_50124 = (state_50164[(11)]);
var inst_50131 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_50124);
var state_50164__$1 = state_50164;
var statearr_50211_51301 = state_50164__$1;
(statearr_50211_51301[(2)] = inst_50131);

(statearr_50211_51301[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50165 === (16))){
var state_50164__$1 = state_50164;
var statearr_50212_51304 = state_50164__$1;
(statearr_50212_51304[(2)] = true);

(statearr_50212_51304[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50165 === (38))){
var inst_50154 = (state_50164[(2)]);
var state_50164__$1 = state_50164;
var statearr_50213_51305 = state_50164__$1;
(statearr_50213_51305[(2)] = inst_50154);

(statearr_50213_51305[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50165 === (30))){
var inst_50116 = (state_50164[(13)]);
var inst_50115 = (state_50164[(9)]);
var inst_50124 = (state_50164[(11)]);
var inst_50141 = cljs.core.empty_QMARK_(inst_50115);
var inst_50142 = (inst_50116.cljs$core$IFn$_invoke$arity$1 ? inst_50116.cljs$core$IFn$_invoke$arity$1(inst_50124) : inst_50116.call(null,inst_50124));
var inst_50143 = cljs.core.not(inst_50142);
var inst_50144 = ((inst_50141) && (inst_50143));
var state_50164__$1 = state_50164;
var statearr_50214_51306 = state_50164__$1;
(statearr_50214_51306[(2)] = inst_50144);

(statearr_50214_51306[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50165 === (10))){
var inst_50066 = (state_50164[(8)]);
var inst_50087 = (state_50164[(2)]);
var inst_50088 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50087,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_50089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50087,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_50090 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50087,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_50091 = inst_50066;
var state_50164__$1 = (function (){var statearr_50215 = state_50164;
(statearr_50215[(7)] = inst_50091);

(statearr_50215[(16)] = inst_50090);

(statearr_50215[(17)] = inst_50088);

(statearr_50215[(18)] = inst_50089);

return statearr_50215;
})();
var statearr_50216_51307 = state_50164__$1;
(statearr_50216_51307[(2)] = null);

(statearr_50216_51307[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50165 === (18))){
var inst_50106 = (state_50164[(2)]);
var state_50164__$1 = state_50164;
var statearr_50217_51308 = state_50164__$1;
(statearr_50217_51308[(2)] = inst_50106);

(statearr_50217_51308[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50165 === (37))){
var state_50164__$1 = state_50164;
var statearr_50218_51309 = state_50164__$1;
(statearr_50218_51309[(2)] = null);

(statearr_50218_51309[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50165 === (8))){
var inst_50066 = (state_50164[(8)]);
var inst_50084 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50066);
var state_50164__$1 = state_50164;
var statearr_50219_51310 = state_50164__$1;
(statearr_50219_51310[(2)] = inst_50084);

(statearr_50219_51310[(1)] = (10));


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
});})(c__49370__auto___51224,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__49300__auto__,c__49370__auto___51224,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__49301__auto__ = null;
var cljs$core$async$mix_$_state_machine__49301__auto____0 = (function (){
var statearr_50220 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50220[(0)] = cljs$core$async$mix_$_state_machine__49301__auto__);

(statearr_50220[(1)] = (1));

return statearr_50220;
});
var cljs$core$async$mix_$_state_machine__49301__auto____1 = (function (state_50164){
while(true){
var ret_value__49302__auto__ = (function (){try{while(true){
var result__49303__auto__ = switch__49300__auto__(state_50164);
if(cljs.core.keyword_identical_QMARK_(result__49303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49303__auto__;
}
break;
}
}catch (e50221){if((e50221 instanceof Object)){
var ex__49304__auto__ = e50221;
var statearr_50222_51314 = state_50164;
(statearr_50222_51314[(5)] = ex__49304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50221;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51318 = state_50164;
state_50164 = G__51318;
continue;
} else {
return ret_value__49302__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__49301__auto__ = function(state_50164){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__49301__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__49301__auto____1.call(this,state_50164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__49301__auto____0;
cljs$core$async$mix_$_state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__49301__auto____1;
return cljs$core$async$mix_$_state_machine__49301__auto__;
})()
;})(switch__49300__auto__,c__49370__auto___51224,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__49372__auto__ = (function (){var statearr_50223 = (f__49371__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49371__auto__.cljs$core$IFn$_invoke$arity$0() : f__49371__auto__.call(null));
(statearr_50223[(6)] = c__49370__auto___51224);

return statearr_50223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49372__auto__);
});})(c__49370__auto___51224,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


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

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__50225 = arguments.length;
switch (G__50225) {
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

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__50228 = arguments.length;
switch (G__50228) {
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

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__50226_SHARP_){
if(cljs.core.truth_((p1__50226_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__50226_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__50226_SHARP_.call(null,topic)))){
return p1__50226_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__50226_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50229 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50229 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta50230){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta50230 = meta50230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_50231,meta50230__$1){
var self__ = this;
var _50231__$1 = this;
return (new cljs.core.async.t_cljs$core$async50229(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta50230__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50229.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_50231){
var self__ = this;
var _50231__$1 = this;
return self__.meta50230;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50229.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50229.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50229.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50229.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50229.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50229.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50229.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50229.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta50230","meta50230",-1981756026,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50229.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50229.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50229";

cljs.core.async.t_cljs$core$async50229.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async50229");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50229.
 */
cljs.core.async.__GT_t_cljs$core$async50229 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async50229(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta50230){
return (new cljs.core.async.t_cljs$core$async50229(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta50230));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async50229(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49370__auto___51351 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49370__auto___51351,mults,ensure_mult,p){
return (function (){
var f__49371__auto__ = (function (){var switch__49300__auto__ = ((function (c__49370__auto___51351,mults,ensure_mult,p){
return (function (state_50303){
var state_val_50304 = (state_50303[(1)]);
if((state_val_50304 === (7))){
var inst_50299 = (state_50303[(2)]);
var state_50303__$1 = state_50303;
var statearr_50305_51352 = state_50303__$1;
(statearr_50305_51352[(2)] = inst_50299);

(statearr_50305_51352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50304 === (20))){
var state_50303__$1 = state_50303;
var statearr_50306_51353 = state_50303__$1;
(statearr_50306_51353[(2)] = null);

(statearr_50306_51353[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50304 === (1))){
var state_50303__$1 = state_50303;
var statearr_50307_51354 = state_50303__$1;
(statearr_50307_51354[(2)] = null);

(statearr_50307_51354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50304 === (24))){
var inst_50282 = (state_50303[(7)]);
var inst_50291 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_50282);
var state_50303__$1 = state_50303;
var statearr_50308_51355 = state_50303__$1;
(statearr_50308_51355[(2)] = inst_50291);

(statearr_50308_51355[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50304 === (4))){
var inst_50234 = (state_50303[(8)]);
var inst_50234__$1 = (state_50303[(2)]);
var inst_50235 = (inst_50234__$1 == null);
var state_50303__$1 = (function (){var statearr_50309 = state_50303;
(statearr_50309[(8)] = inst_50234__$1);

return statearr_50309;
})();
if(cljs.core.truth_(inst_50235)){
var statearr_50310_51356 = state_50303__$1;
(statearr_50310_51356[(1)] = (5));

} else {
var statearr_50311_51357 = state_50303__$1;
(statearr_50311_51357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50304 === (15))){
var inst_50276 = (state_50303[(2)]);
var state_50303__$1 = state_50303;
var statearr_50312_51364 = state_50303__$1;
(statearr_50312_51364[(2)] = inst_50276);

(statearr_50312_51364[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50304 === (21))){
var inst_50296 = (state_50303[(2)]);
var state_50303__$1 = (function (){var statearr_50313 = state_50303;
(statearr_50313[(9)] = inst_50296);

return statearr_50313;
})();
var statearr_50314_51365 = state_50303__$1;
(statearr_50314_51365[(2)] = null);

(statearr_50314_51365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50304 === (13))){
var inst_50258 = (state_50303[(10)]);
var inst_50260 = cljs.core.chunked_seq_QMARK_(inst_50258);
var state_50303__$1 = state_50303;
if(inst_50260){
var statearr_50315_51366 = state_50303__$1;
(statearr_50315_51366[(1)] = (16));

} else {
var statearr_50316_51367 = state_50303__$1;
(statearr_50316_51367[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50304 === (22))){
var inst_50288 = (state_50303[(2)]);
var state_50303__$1 = state_50303;
if(cljs.core.truth_(inst_50288)){
var statearr_50317_51368 = state_50303__$1;
(statearr_50317_51368[(1)] = (23));

} else {
var statearr_50318_51369 = state_50303__$1;
(statearr_50318_51369[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50304 === (6))){
var inst_50282 = (state_50303[(7)]);
var inst_50284 = (state_50303[(11)]);
var inst_50234 = (state_50303[(8)]);
var inst_50282__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_50234) : topic_fn.call(null,inst_50234));
var inst_50283 = cljs.core.deref(mults);
var inst_50284__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50283,inst_50282__$1);
var state_50303__$1 = (function (){var statearr_50319 = state_50303;
(statearr_50319[(7)] = inst_50282__$1);

(statearr_50319[(11)] = inst_50284__$1);

return statearr_50319;
})();
if(cljs.core.truth_(inst_50284__$1)){
var statearr_50320_51370 = state_50303__$1;
(statearr_50320_51370[(1)] = (19));

} else {
var statearr_50321_51371 = state_50303__$1;
(statearr_50321_51371[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50304 === (25))){
var inst_50293 = (state_50303[(2)]);
var state_50303__$1 = state_50303;
var statearr_50322_51372 = state_50303__$1;
(statearr_50322_51372[(2)] = inst_50293);

(statearr_50322_51372[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50304 === (17))){
var inst_50258 = (state_50303[(10)]);
var inst_50267 = cljs.core.first(inst_50258);
var inst_50268 = cljs.core.async.muxch_STAR_(inst_50267);
var inst_50269 = cljs.core.async.close_BANG_(inst_50268);
var inst_50270 = cljs.core.next(inst_50258);
var inst_50244 = inst_50270;
var inst_50245 = null;
var inst_50246 = (0);
var inst_50247 = (0);
var state_50303__$1 = (function (){var statearr_50323 = state_50303;
(statearr_50323[(12)] = inst_50247);

(statearr_50323[(13)] = inst_50244);

(statearr_50323[(14)] = inst_50245);

(statearr_50323[(15)] = inst_50269);

(statearr_50323[(16)] = inst_50246);

return statearr_50323;
})();
var statearr_50324_51379 = state_50303__$1;
(statearr_50324_51379[(2)] = null);

(statearr_50324_51379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50304 === (3))){
var inst_50301 = (state_50303[(2)]);
var state_50303__$1 = state_50303;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50303__$1,inst_50301);
} else {
if((state_val_50304 === (12))){
var inst_50278 = (state_50303[(2)]);
var state_50303__$1 = state_50303;
var statearr_50325_51380 = state_50303__$1;
(statearr_50325_51380[(2)] = inst_50278);

(statearr_50325_51380[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50304 === (2))){
var state_50303__$1 = state_50303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50303__$1,(4),ch);
} else {
if((state_val_50304 === (23))){
var state_50303__$1 = state_50303;
var statearr_50326_51381 = state_50303__$1;
(statearr_50326_51381[(2)] = null);

(statearr_50326_51381[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50304 === (19))){
var inst_50284 = (state_50303[(11)]);
var inst_50234 = (state_50303[(8)]);
var inst_50286 = cljs.core.async.muxch_STAR_(inst_50284);
var state_50303__$1 = state_50303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50303__$1,(22),inst_50286,inst_50234);
} else {
if((state_val_50304 === (11))){
var inst_50258 = (state_50303[(10)]);
var inst_50244 = (state_50303[(13)]);
var inst_50258__$1 = cljs.core.seq(inst_50244);
var state_50303__$1 = (function (){var statearr_50327 = state_50303;
(statearr_50327[(10)] = inst_50258__$1);

return statearr_50327;
})();
if(inst_50258__$1){
var statearr_50328_51382 = state_50303__$1;
(statearr_50328_51382[(1)] = (13));

} else {
var statearr_50329_51383 = state_50303__$1;
(statearr_50329_51383[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50304 === (9))){
var inst_50280 = (state_50303[(2)]);
var state_50303__$1 = state_50303;
var statearr_50330_51384 = state_50303__$1;
(statearr_50330_51384[(2)] = inst_50280);

(statearr_50330_51384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50304 === (5))){
var inst_50241 = cljs.core.deref(mults);
var inst_50242 = cljs.core.vals(inst_50241);
var inst_50243 = cljs.core.seq(inst_50242);
var inst_50244 = inst_50243;
var inst_50245 = null;
var inst_50246 = (0);
var inst_50247 = (0);
var state_50303__$1 = (function (){var statearr_50331 = state_50303;
(statearr_50331[(12)] = inst_50247);

(statearr_50331[(13)] = inst_50244);

(statearr_50331[(14)] = inst_50245);

(statearr_50331[(16)] = inst_50246);

return statearr_50331;
})();
var statearr_50332_51385 = state_50303__$1;
(statearr_50332_51385[(2)] = null);

(statearr_50332_51385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50304 === (14))){
var state_50303__$1 = state_50303;
var statearr_50336_51386 = state_50303__$1;
(statearr_50336_51386[(2)] = null);

(statearr_50336_51386[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50304 === (16))){
var inst_50258 = (state_50303[(10)]);
var inst_50262 = cljs.core.chunk_first(inst_50258);
var inst_50263 = cljs.core.chunk_rest(inst_50258);
var inst_50264 = cljs.core.count(inst_50262);
var inst_50244 = inst_50263;
var inst_50245 = inst_50262;
var inst_50246 = inst_50264;
var inst_50247 = (0);
var state_50303__$1 = (function (){var statearr_50337 = state_50303;
(statearr_50337[(12)] = inst_50247);

(statearr_50337[(13)] = inst_50244);

(statearr_50337[(14)] = inst_50245);

(statearr_50337[(16)] = inst_50246);

return statearr_50337;
})();
var statearr_50338_51387 = state_50303__$1;
(statearr_50338_51387[(2)] = null);

(statearr_50338_51387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50304 === (10))){
var inst_50247 = (state_50303[(12)]);
var inst_50244 = (state_50303[(13)]);
var inst_50245 = (state_50303[(14)]);
var inst_50246 = (state_50303[(16)]);
var inst_50252 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_50245,inst_50247);
var inst_50253 = cljs.core.async.muxch_STAR_(inst_50252);
var inst_50254 = cljs.core.async.close_BANG_(inst_50253);
var inst_50255 = (inst_50247 + (1));
var tmp50333 = inst_50244;
var tmp50334 = inst_50245;
var tmp50335 = inst_50246;
var inst_50244__$1 = tmp50333;
var inst_50245__$1 = tmp50334;
var inst_50246__$1 = tmp50335;
var inst_50247__$1 = inst_50255;
var state_50303__$1 = (function (){var statearr_50339 = state_50303;
(statearr_50339[(12)] = inst_50247__$1);

(statearr_50339[(13)] = inst_50244__$1);

(statearr_50339[(14)] = inst_50245__$1);

(statearr_50339[(16)] = inst_50246__$1);

(statearr_50339[(17)] = inst_50254);

return statearr_50339;
})();
var statearr_50340_51388 = state_50303__$1;
(statearr_50340_51388[(2)] = null);

(statearr_50340_51388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50304 === (18))){
var inst_50273 = (state_50303[(2)]);
var state_50303__$1 = state_50303;
var statearr_50341_51389 = state_50303__$1;
(statearr_50341_51389[(2)] = inst_50273);

(statearr_50341_51389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50304 === (8))){
var inst_50247 = (state_50303[(12)]);
var inst_50246 = (state_50303[(16)]);
var inst_50249 = (inst_50247 < inst_50246);
var inst_50250 = inst_50249;
var state_50303__$1 = state_50303;
if(cljs.core.truth_(inst_50250)){
var statearr_50342_51390 = state_50303__$1;
(statearr_50342_51390[(1)] = (10));

} else {
var statearr_50343_51391 = state_50303__$1;
(statearr_50343_51391[(1)] = (11));

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
});})(c__49370__auto___51351,mults,ensure_mult,p))
;
return ((function (switch__49300__auto__,c__49370__auto___51351,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__49301__auto__ = null;
var cljs$core$async$state_machine__49301__auto____0 = (function (){
var statearr_50344 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50344[(0)] = cljs$core$async$state_machine__49301__auto__);

(statearr_50344[(1)] = (1));

return statearr_50344;
});
var cljs$core$async$state_machine__49301__auto____1 = (function (state_50303){
while(true){
var ret_value__49302__auto__ = (function (){try{while(true){
var result__49303__auto__ = switch__49300__auto__(state_50303);
if(cljs.core.keyword_identical_QMARK_(result__49303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49303__auto__;
}
break;
}
}catch (e50345){if((e50345 instanceof Object)){
var ex__49304__auto__ = e50345;
var statearr_50346_51394 = state_50303;
(statearr_50346_51394[(5)] = ex__49304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50345;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51399 = state_50303;
state_50303 = G__51399;
continue;
} else {
return ret_value__49302__auto__;
}
break;
}
});
cljs$core$async$state_machine__49301__auto__ = function(state_50303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49301__auto____1.call(this,state_50303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49301__auto____0;
cljs$core$async$state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49301__auto____1;
return cljs$core$async$state_machine__49301__auto__;
})()
;})(switch__49300__auto__,c__49370__auto___51351,mults,ensure_mult,p))
})();
var state__49372__auto__ = (function (){var statearr_50347 = (f__49371__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49371__auto__.cljs$core$IFn$_invoke$arity$0() : f__49371__auto__.call(null));
(statearr_50347[(6)] = c__49370__auto___51351);

return statearr_50347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49372__auto__);
});})(c__49370__auto___51351,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__50349 = arguments.length;
switch (G__50349) {
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

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

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
var G__50351 = arguments.length;
switch (G__50351) {
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

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__50353 = arguments.length;
switch (G__50353) {
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

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__49370__auto___51408 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49370__auto___51408,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__49371__auto__ = (function (){var switch__49300__auto__ = ((function (c__49370__auto___51408,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_50392){
var state_val_50393 = (state_50392[(1)]);
if((state_val_50393 === (7))){
var state_50392__$1 = state_50392;
var statearr_50394_51410 = state_50392__$1;
(statearr_50394_51410[(2)] = null);

(statearr_50394_51410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50393 === (1))){
var state_50392__$1 = state_50392;
var statearr_50395_51411 = state_50392__$1;
(statearr_50395_51411[(2)] = null);

(statearr_50395_51411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50393 === (4))){
var inst_50356 = (state_50392[(7)]);
var inst_50358 = (inst_50356 < cnt);
var state_50392__$1 = state_50392;
if(cljs.core.truth_(inst_50358)){
var statearr_50396_51412 = state_50392__$1;
(statearr_50396_51412[(1)] = (6));

} else {
var statearr_50397_51413 = state_50392__$1;
(statearr_50397_51413[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50393 === (15))){
var inst_50388 = (state_50392[(2)]);
var state_50392__$1 = state_50392;
var statearr_50398_51414 = state_50392__$1;
(statearr_50398_51414[(2)] = inst_50388);

(statearr_50398_51414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50393 === (13))){
var inst_50381 = cljs.core.async.close_BANG_(out);
var state_50392__$1 = state_50392;
var statearr_50399_51415 = state_50392__$1;
(statearr_50399_51415[(2)] = inst_50381);

(statearr_50399_51415[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50393 === (6))){
var state_50392__$1 = state_50392;
var statearr_50400_51416 = state_50392__$1;
(statearr_50400_51416[(2)] = null);

(statearr_50400_51416[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50393 === (3))){
var inst_50390 = (state_50392[(2)]);
var state_50392__$1 = state_50392;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50392__$1,inst_50390);
} else {
if((state_val_50393 === (12))){
var inst_50378 = (state_50392[(8)]);
var inst_50378__$1 = (state_50392[(2)]);
var inst_50379 = cljs.core.some(cljs.core.nil_QMARK_,inst_50378__$1);
var state_50392__$1 = (function (){var statearr_50401 = state_50392;
(statearr_50401[(8)] = inst_50378__$1);

return statearr_50401;
})();
if(cljs.core.truth_(inst_50379)){
var statearr_50402_51417 = state_50392__$1;
(statearr_50402_51417[(1)] = (13));

} else {
var statearr_50403_51418 = state_50392__$1;
(statearr_50403_51418[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50393 === (2))){
var inst_50355 = cljs.core.reset_BANG_(dctr,cnt);
var inst_50356 = (0);
var state_50392__$1 = (function (){var statearr_50404 = state_50392;
(statearr_50404[(9)] = inst_50355);

(statearr_50404[(7)] = inst_50356);

return statearr_50404;
})();
var statearr_50405_51419 = state_50392__$1;
(statearr_50405_51419[(2)] = null);

(statearr_50405_51419[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50393 === (11))){
var inst_50356 = (state_50392[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50392,(10),Object,null,(9));
var inst_50365 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_50356) : chs__$1.call(null,inst_50356));
var inst_50366 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_50356) : done.call(null,inst_50356));
var inst_50367 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_50365,inst_50366);
var state_50392__$1 = state_50392;
var statearr_50406_51420 = state_50392__$1;
(statearr_50406_51420[(2)] = inst_50367);


cljs.core.async.impl.ioc_helpers.process_exception(state_50392__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50393 === (9))){
var inst_50356 = (state_50392[(7)]);
var inst_50369 = (state_50392[(2)]);
var inst_50370 = (inst_50356 + (1));
var inst_50356__$1 = inst_50370;
var state_50392__$1 = (function (){var statearr_50407 = state_50392;
(statearr_50407[(7)] = inst_50356__$1);

(statearr_50407[(10)] = inst_50369);

return statearr_50407;
})();
var statearr_50408_51423 = state_50392__$1;
(statearr_50408_51423[(2)] = null);

(statearr_50408_51423[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50393 === (5))){
var inst_50376 = (state_50392[(2)]);
var state_50392__$1 = (function (){var statearr_50409 = state_50392;
(statearr_50409[(11)] = inst_50376);

return statearr_50409;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50392__$1,(12),dchan);
} else {
if((state_val_50393 === (14))){
var inst_50378 = (state_50392[(8)]);
var inst_50383 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_50378);
var state_50392__$1 = state_50392;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50392__$1,(16),out,inst_50383);
} else {
if((state_val_50393 === (16))){
var inst_50385 = (state_50392[(2)]);
var state_50392__$1 = (function (){var statearr_50410 = state_50392;
(statearr_50410[(12)] = inst_50385);

return statearr_50410;
})();
var statearr_50411_51424 = state_50392__$1;
(statearr_50411_51424[(2)] = null);

(statearr_50411_51424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50393 === (10))){
var inst_50360 = (state_50392[(2)]);
var inst_50361 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_50392__$1 = (function (){var statearr_50412 = state_50392;
(statearr_50412[(13)] = inst_50360);

return statearr_50412;
})();
var statearr_50413_51425 = state_50392__$1;
(statearr_50413_51425[(2)] = inst_50361);


cljs.core.async.impl.ioc_helpers.process_exception(state_50392__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50393 === (8))){
var inst_50374 = (state_50392[(2)]);
var state_50392__$1 = state_50392;
var statearr_50414_51426 = state_50392__$1;
(statearr_50414_51426[(2)] = inst_50374);

(statearr_50414_51426[(1)] = (5));


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
});})(c__49370__auto___51408,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__49300__auto__,c__49370__auto___51408,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__49301__auto__ = null;
var cljs$core$async$state_machine__49301__auto____0 = (function (){
var statearr_50415 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50415[(0)] = cljs$core$async$state_machine__49301__auto__);

(statearr_50415[(1)] = (1));

return statearr_50415;
});
var cljs$core$async$state_machine__49301__auto____1 = (function (state_50392){
while(true){
var ret_value__49302__auto__ = (function (){try{while(true){
var result__49303__auto__ = switch__49300__auto__(state_50392);
if(cljs.core.keyword_identical_QMARK_(result__49303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49303__auto__;
}
break;
}
}catch (e50416){if((e50416 instanceof Object)){
var ex__49304__auto__ = e50416;
var statearr_50417_51427 = state_50392;
(statearr_50417_51427[(5)] = ex__49304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50416;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51428 = state_50392;
state_50392 = G__51428;
continue;
} else {
return ret_value__49302__auto__;
}
break;
}
});
cljs$core$async$state_machine__49301__auto__ = function(state_50392){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49301__auto____1.call(this,state_50392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49301__auto____0;
cljs$core$async$state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49301__auto____1;
return cljs$core$async$state_machine__49301__auto__;
})()
;})(switch__49300__auto__,c__49370__auto___51408,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__49372__auto__ = (function (){var statearr_50418 = (f__49371__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49371__auto__.cljs$core$IFn$_invoke$arity$0() : f__49371__auto__.call(null));
(statearr_50418[(6)] = c__49370__auto___51408);

return statearr_50418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49372__auto__);
});})(c__49370__auto___51408,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__50421 = arguments.length;
switch (G__50421) {
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

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49370__auto___51430 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49370__auto___51430,out){
return (function (){
var f__49371__auto__ = (function (){var switch__49300__auto__ = ((function (c__49370__auto___51430,out){
return (function (state_50453){
var state_val_50454 = (state_50453[(1)]);
if((state_val_50454 === (7))){
var inst_50432 = (state_50453[(7)]);
var inst_50433 = (state_50453[(8)]);
var inst_50432__$1 = (state_50453[(2)]);
var inst_50433__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50432__$1,(0),null);
var inst_50434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50432__$1,(1),null);
var inst_50435 = (inst_50433__$1 == null);
var state_50453__$1 = (function (){var statearr_50455 = state_50453;
(statearr_50455[(9)] = inst_50434);

(statearr_50455[(7)] = inst_50432__$1);

(statearr_50455[(8)] = inst_50433__$1);

return statearr_50455;
})();
if(cljs.core.truth_(inst_50435)){
var statearr_50456_51432 = state_50453__$1;
(statearr_50456_51432[(1)] = (8));

} else {
var statearr_50457_51433 = state_50453__$1;
(statearr_50457_51433[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50454 === (1))){
var inst_50422 = cljs.core.vec(chs);
var inst_50423 = inst_50422;
var state_50453__$1 = (function (){var statearr_50458 = state_50453;
(statearr_50458[(10)] = inst_50423);

return statearr_50458;
})();
var statearr_50459_51434 = state_50453__$1;
(statearr_50459_51434[(2)] = null);

(statearr_50459_51434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50454 === (4))){
var inst_50423 = (state_50453[(10)]);
var state_50453__$1 = state_50453;
return cljs.core.async.ioc_alts_BANG_(state_50453__$1,(7),inst_50423);
} else {
if((state_val_50454 === (6))){
var inst_50449 = (state_50453[(2)]);
var state_50453__$1 = state_50453;
var statearr_50460_51439 = state_50453__$1;
(statearr_50460_51439[(2)] = inst_50449);

(statearr_50460_51439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50454 === (3))){
var inst_50451 = (state_50453[(2)]);
var state_50453__$1 = state_50453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50453__$1,inst_50451);
} else {
if((state_val_50454 === (2))){
var inst_50423 = (state_50453[(10)]);
var inst_50425 = cljs.core.count(inst_50423);
var inst_50426 = (inst_50425 > (0));
var state_50453__$1 = state_50453;
if(cljs.core.truth_(inst_50426)){
var statearr_50462_51440 = state_50453__$1;
(statearr_50462_51440[(1)] = (4));

} else {
var statearr_50463_51441 = state_50453__$1;
(statearr_50463_51441[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50454 === (11))){
var inst_50423 = (state_50453[(10)]);
var inst_50442 = (state_50453[(2)]);
var tmp50461 = inst_50423;
var inst_50423__$1 = tmp50461;
var state_50453__$1 = (function (){var statearr_50464 = state_50453;
(statearr_50464[(10)] = inst_50423__$1);

(statearr_50464[(11)] = inst_50442);

return statearr_50464;
})();
var statearr_50465_51442 = state_50453__$1;
(statearr_50465_51442[(2)] = null);

(statearr_50465_51442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50454 === (9))){
var inst_50433 = (state_50453[(8)]);
var state_50453__$1 = state_50453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50453__$1,(11),out,inst_50433);
} else {
if((state_val_50454 === (5))){
var inst_50447 = cljs.core.async.close_BANG_(out);
var state_50453__$1 = state_50453;
var statearr_50466_51443 = state_50453__$1;
(statearr_50466_51443[(2)] = inst_50447);

(statearr_50466_51443[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50454 === (10))){
var inst_50445 = (state_50453[(2)]);
var state_50453__$1 = state_50453;
var statearr_50467_51444 = state_50453__$1;
(statearr_50467_51444[(2)] = inst_50445);

(statearr_50467_51444[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50454 === (8))){
var inst_50434 = (state_50453[(9)]);
var inst_50432 = (state_50453[(7)]);
var inst_50423 = (state_50453[(10)]);
var inst_50433 = (state_50453[(8)]);
var inst_50437 = (function (){var cs = inst_50423;
var vec__50428 = inst_50432;
var v = inst_50433;
var c = inst_50434;
return ((function (cs,vec__50428,v,c,inst_50434,inst_50432,inst_50423,inst_50433,state_val_50454,c__49370__auto___51430,out){
return (function (p1__50419_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__50419_SHARP_);
});
;})(cs,vec__50428,v,c,inst_50434,inst_50432,inst_50423,inst_50433,state_val_50454,c__49370__auto___51430,out))
})();
var inst_50438 = cljs.core.filterv(inst_50437,inst_50423);
var inst_50423__$1 = inst_50438;
var state_50453__$1 = (function (){var statearr_50468 = state_50453;
(statearr_50468[(10)] = inst_50423__$1);

return statearr_50468;
})();
var statearr_50469_51449 = state_50453__$1;
(statearr_50469_51449[(2)] = null);

(statearr_50469_51449[(1)] = (2));


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
});})(c__49370__auto___51430,out))
;
return ((function (switch__49300__auto__,c__49370__auto___51430,out){
return (function() {
var cljs$core$async$state_machine__49301__auto__ = null;
var cljs$core$async$state_machine__49301__auto____0 = (function (){
var statearr_50470 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50470[(0)] = cljs$core$async$state_machine__49301__auto__);

(statearr_50470[(1)] = (1));

return statearr_50470;
});
var cljs$core$async$state_machine__49301__auto____1 = (function (state_50453){
while(true){
var ret_value__49302__auto__ = (function (){try{while(true){
var result__49303__auto__ = switch__49300__auto__(state_50453);
if(cljs.core.keyword_identical_QMARK_(result__49303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49303__auto__;
}
break;
}
}catch (e50471){if((e50471 instanceof Object)){
var ex__49304__auto__ = e50471;
var statearr_50472_51459 = state_50453;
(statearr_50472_51459[(5)] = ex__49304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50471;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51460 = state_50453;
state_50453 = G__51460;
continue;
} else {
return ret_value__49302__auto__;
}
break;
}
});
cljs$core$async$state_machine__49301__auto__ = function(state_50453){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49301__auto____1.call(this,state_50453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49301__auto____0;
cljs$core$async$state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49301__auto____1;
return cljs$core$async$state_machine__49301__auto__;
})()
;})(switch__49300__auto__,c__49370__auto___51430,out))
})();
var state__49372__auto__ = (function (){var statearr_50473 = (f__49371__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49371__auto__.cljs$core$IFn$_invoke$arity$0() : f__49371__auto__.call(null));
(statearr_50473[(6)] = c__49370__auto___51430);

return statearr_50473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49372__auto__);
});})(c__49370__auto___51430,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

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
var G__50475 = arguments.length;
switch (G__50475) {
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49370__auto___51469 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49370__auto___51469,out){
return (function (){
var f__49371__auto__ = (function (){var switch__49300__auto__ = ((function (c__49370__auto___51469,out){
return (function (state_50499){
var state_val_50500 = (state_50499[(1)]);
if((state_val_50500 === (7))){
var inst_50481 = (state_50499[(7)]);
var inst_50481__$1 = (state_50499[(2)]);
var inst_50482 = (inst_50481__$1 == null);
var inst_50483 = cljs.core.not(inst_50482);
var state_50499__$1 = (function (){var statearr_50501 = state_50499;
(statearr_50501[(7)] = inst_50481__$1);

return statearr_50501;
})();
if(inst_50483){
var statearr_50502_51470 = state_50499__$1;
(statearr_50502_51470[(1)] = (8));

} else {
var statearr_50503_51471 = state_50499__$1;
(statearr_50503_51471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50500 === (1))){
var inst_50476 = (0);
var state_50499__$1 = (function (){var statearr_50504 = state_50499;
(statearr_50504[(8)] = inst_50476);

return statearr_50504;
})();
var statearr_50505_51472 = state_50499__$1;
(statearr_50505_51472[(2)] = null);

(statearr_50505_51472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50500 === (4))){
var state_50499__$1 = state_50499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50499__$1,(7),ch);
} else {
if((state_val_50500 === (6))){
var inst_50494 = (state_50499[(2)]);
var state_50499__$1 = state_50499;
var statearr_50506_51473 = state_50499__$1;
(statearr_50506_51473[(2)] = inst_50494);

(statearr_50506_51473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50500 === (3))){
var inst_50496 = (state_50499[(2)]);
var inst_50497 = cljs.core.async.close_BANG_(out);
var state_50499__$1 = (function (){var statearr_50507 = state_50499;
(statearr_50507[(9)] = inst_50496);

return statearr_50507;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50499__$1,inst_50497);
} else {
if((state_val_50500 === (2))){
var inst_50476 = (state_50499[(8)]);
var inst_50478 = (inst_50476 < n);
var state_50499__$1 = state_50499;
if(cljs.core.truth_(inst_50478)){
var statearr_50508_51477 = state_50499__$1;
(statearr_50508_51477[(1)] = (4));

} else {
var statearr_50509_51478 = state_50499__$1;
(statearr_50509_51478[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50500 === (11))){
var inst_50476 = (state_50499[(8)]);
var inst_50486 = (state_50499[(2)]);
var inst_50487 = (inst_50476 + (1));
var inst_50476__$1 = inst_50487;
var state_50499__$1 = (function (){var statearr_50510 = state_50499;
(statearr_50510[(8)] = inst_50476__$1);

(statearr_50510[(10)] = inst_50486);

return statearr_50510;
})();
var statearr_50511_51480 = state_50499__$1;
(statearr_50511_51480[(2)] = null);

(statearr_50511_51480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50500 === (9))){
var state_50499__$1 = state_50499;
var statearr_50512_51481 = state_50499__$1;
(statearr_50512_51481[(2)] = null);

(statearr_50512_51481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50500 === (5))){
var state_50499__$1 = state_50499;
var statearr_50513_51484 = state_50499__$1;
(statearr_50513_51484[(2)] = null);

(statearr_50513_51484[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50500 === (10))){
var inst_50491 = (state_50499[(2)]);
var state_50499__$1 = state_50499;
var statearr_50514_51485 = state_50499__$1;
(statearr_50514_51485[(2)] = inst_50491);

(statearr_50514_51485[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50500 === (8))){
var inst_50481 = (state_50499[(7)]);
var state_50499__$1 = state_50499;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50499__$1,(11),out,inst_50481);
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
});})(c__49370__auto___51469,out))
;
return ((function (switch__49300__auto__,c__49370__auto___51469,out){
return (function() {
var cljs$core$async$state_machine__49301__auto__ = null;
var cljs$core$async$state_machine__49301__auto____0 = (function (){
var statearr_50515 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50515[(0)] = cljs$core$async$state_machine__49301__auto__);

(statearr_50515[(1)] = (1));

return statearr_50515;
});
var cljs$core$async$state_machine__49301__auto____1 = (function (state_50499){
while(true){
var ret_value__49302__auto__ = (function (){try{while(true){
var result__49303__auto__ = switch__49300__auto__(state_50499);
if(cljs.core.keyword_identical_QMARK_(result__49303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49303__auto__;
}
break;
}
}catch (e50516){if((e50516 instanceof Object)){
var ex__49304__auto__ = e50516;
var statearr_50517_51490 = state_50499;
(statearr_50517_51490[(5)] = ex__49304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50516;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51491 = state_50499;
state_50499 = G__51491;
continue;
} else {
return ret_value__49302__auto__;
}
break;
}
});
cljs$core$async$state_machine__49301__auto__ = function(state_50499){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49301__auto____1.call(this,state_50499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49301__auto____0;
cljs$core$async$state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49301__auto____1;
return cljs$core$async$state_machine__49301__auto__;
})()
;})(switch__49300__auto__,c__49370__auto___51469,out))
})();
var state__49372__auto__ = (function (){var statearr_50518 = (f__49371__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49371__auto__.cljs$core$IFn$_invoke$arity$0() : f__49371__auto__.call(null));
(statearr_50518[(6)] = c__49370__auto___51469);

return statearr_50518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49372__auto__);
});})(c__49370__auto___51469,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50520 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50520 = (function (f,ch,meta50521){
this.f = f;
this.ch = ch;
this.meta50521 = meta50521;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50522,meta50521__$1){
var self__ = this;
var _50522__$1 = this;
return (new cljs.core.async.t_cljs$core$async50520(self__.f,self__.ch,meta50521__$1));
});

cljs.core.async.t_cljs$core$async50520.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50522){
var self__ = this;
var _50522__$1 = this;
return self__.meta50521;
});

cljs.core.async.t_cljs$core$async50520.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50520.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async50520.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async50520.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50520.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50523 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50523 = (function (f,ch,meta50521,_,fn1,meta50524){
this.f = f;
this.ch = ch;
this.meta50521 = meta50521;
this._ = _;
this.fn1 = fn1;
this.meta50524 = meta50524;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_50525,meta50524__$1){
var self__ = this;
var _50525__$1 = this;
return (new cljs.core.async.t_cljs$core$async50523(self__.f,self__.ch,self__.meta50521,self__._,self__.fn1,meta50524__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async50523.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_50525){
var self__ = this;
var _50525__$1 = this;
return self__.meta50524;
});})(___$1))
;

cljs.core.async.t_cljs$core$async50523.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50523.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async50523.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async50523.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__50519_SHARP_){
var G__50526 = (((p1__50519_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__50519_SHARP_) : self__.f.call(null,p1__50519_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__50526) : f1.call(null,G__50526));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async50523.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50521","meta50521",1768701660,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async50520","cljs.core.async/t_cljs$core$async50520",-1947534052,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta50524","meta50524",-1365476221,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async50523.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50523.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50523";

cljs.core.async.t_cljs$core$async50523.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async50523");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50523.
 */
cljs.core.async.__GT_t_cljs$core$async50523 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async50523(f__$1,ch__$1,meta50521__$1,___$2,fn1__$1,meta50524){
return (new cljs.core.async.t_cljs$core$async50523(f__$1,ch__$1,meta50521__$1,___$2,fn1__$1,meta50524));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async50523(self__.f,self__.ch,self__.meta50521,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__50527 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__50527) : self__.f.call(null,G__50527));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async50520.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50520.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async50520.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50521","meta50521",1768701660,null)], null);
});

cljs.core.async.t_cljs$core$async50520.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50520.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50520";

cljs.core.async.t_cljs$core$async50520.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async50520");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50520.
 */
cljs.core.async.__GT_t_cljs$core$async50520 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async50520(f__$1,ch__$1,meta50521){
return (new cljs.core.async.t_cljs$core$async50520(f__$1,ch__$1,meta50521));
});

}

return (new cljs.core.async.t_cljs$core$async50520(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50528 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50528 = (function (f,ch,meta50529){
this.f = f;
this.ch = ch;
this.meta50529 = meta50529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50530,meta50529__$1){
var self__ = this;
var _50530__$1 = this;
return (new cljs.core.async.t_cljs$core$async50528(self__.f,self__.ch,meta50529__$1));
});

cljs.core.async.t_cljs$core$async50528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50530){
var self__ = this;
var _50530__$1 = this;
return self__.meta50529;
});

cljs.core.async.t_cljs$core$async50528.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50528.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async50528.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50528.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async50528.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50528.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async50528.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50529","meta50529",-477824830,null)], null);
});

cljs.core.async.t_cljs$core$async50528.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50528.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50528";

cljs.core.async.t_cljs$core$async50528.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async50528");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50528.
 */
cljs.core.async.__GT_t_cljs$core$async50528 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async50528(f__$1,ch__$1,meta50529){
return (new cljs.core.async.t_cljs$core$async50528(f__$1,ch__$1,meta50529));
});

}

return (new cljs.core.async.t_cljs$core$async50528(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50531 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50531 = (function (p,ch,meta50532){
this.p = p;
this.ch = ch;
this.meta50532 = meta50532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50533,meta50532__$1){
var self__ = this;
var _50533__$1 = this;
return (new cljs.core.async.t_cljs$core$async50531(self__.p,self__.ch,meta50532__$1));
});

cljs.core.async.t_cljs$core$async50531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50533){
var self__ = this;
var _50533__$1 = this;
return self__.meta50532;
});

cljs.core.async.t_cljs$core$async50531.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50531.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async50531.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async50531.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50531.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async50531.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50531.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async50531.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50532","meta50532",-898721596,null)], null);
});

cljs.core.async.t_cljs$core$async50531.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50531.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50531";

cljs.core.async.t_cljs$core$async50531.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async50531");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50531.
 */
cljs.core.async.__GT_t_cljs$core$async50531 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async50531(p__$1,ch__$1,meta50532){
return (new cljs.core.async.t_cljs$core$async50531(p__$1,ch__$1,meta50532));
});

}

return (new cljs.core.async.t_cljs$core$async50531(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__50535 = arguments.length;
switch (G__50535) {
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

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49370__auto___51509 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49370__auto___51509,out){
return (function (){
var f__49371__auto__ = (function (){var switch__49300__auto__ = ((function (c__49370__auto___51509,out){
return (function (state_50556){
var state_val_50557 = (state_50556[(1)]);
if((state_val_50557 === (7))){
var inst_50552 = (state_50556[(2)]);
var state_50556__$1 = state_50556;
var statearr_50558_51510 = state_50556__$1;
(statearr_50558_51510[(2)] = inst_50552);

(statearr_50558_51510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50557 === (1))){
var state_50556__$1 = state_50556;
var statearr_50559_51511 = state_50556__$1;
(statearr_50559_51511[(2)] = null);

(statearr_50559_51511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50557 === (4))){
var inst_50538 = (state_50556[(7)]);
var inst_50538__$1 = (state_50556[(2)]);
var inst_50539 = (inst_50538__$1 == null);
var state_50556__$1 = (function (){var statearr_50560 = state_50556;
(statearr_50560[(7)] = inst_50538__$1);

return statearr_50560;
})();
if(cljs.core.truth_(inst_50539)){
var statearr_50561_51512 = state_50556__$1;
(statearr_50561_51512[(1)] = (5));

} else {
var statearr_50562_51513 = state_50556__$1;
(statearr_50562_51513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50557 === (6))){
var inst_50538 = (state_50556[(7)]);
var inst_50543 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_50538) : p.call(null,inst_50538));
var state_50556__$1 = state_50556;
if(cljs.core.truth_(inst_50543)){
var statearr_50563_51514 = state_50556__$1;
(statearr_50563_51514[(1)] = (8));

} else {
var statearr_50564_51515 = state_50556__$1;
(statearr_50564_51515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50557 === (3))){
var inst_50554 = (state_50556[(2)]);
var state_50556__$1 = state_50556;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50556__$1,inst_50554);
} else {
if((state_val_50557 === (2))){
var state_50556__$1 = state_50556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50556__$1,(4),ch);
} else {
if((state_val_50557 === (11))){
var inst_50546 = (state_50556[(2)]);
var state_50556__$1 = state_50556;
var statearr_50565_51516 = state_50556__$1;
(statearr_50565_51516[(2)] = inst_50546);

(statearr_50565_51516[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50557 === (9))){
var state_50556__$1 = state_50556;
var statearr_50566_51517 = state_50556__$1;
(statearr_50566_51517[(2)] = null);

(statearr_50566_51517[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50557 === (5))){
var inst_50541 = cljs.core.async.close_BANG_(out);
var state_50556__$1 = state_50556;
var statearr_50567_51519 = state_50556__$1;
(statearr_50567_51519[(2)] = inst_50541);

(statearr_50567_51519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50557 === (10))){
var inst_50549 = (state_50556[(2)]);
var state_50556__$1 = (function (){var statearr_50568 = state_50556;
(statearr_50568[(8)] = inst_50549);

return statearr_50568;
})();
var statearr_50569_51520 = state_50556__$1;
(statearr_50569_51520[(2)] = null);

(statearr_50569_51520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50557 === (8))){
var inst_50538 = (state_50556[(7)]);
var state_50556__$1 = state_50556;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50556__$1,(11),out,inst_50538);
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
});})(c__49370__auto___51509,out))
;
return ((function (switch__49300__auto__,c__49370__auto___51509,out){
return (function() {
var cljs$core$async$state_machine__49301__auto__ = null;
var cljs$core$async$state_machine__49301__auto____0 = (function (){
var statearr_50570 = [null,null,null,null,null,null,null,null,null];
(statearr_50570[(0)] = cljs$core$async$state_machine__49301__auto__);

(statearr_50570[(1)] = (1));

return statearr_50570;
});
var cljs$core$async$state_machine__49301__auto____1 = (function (state_50556){
while(true){
var ret_value__49302__auto__ = (function (){try{while(true){
var result__49303__auto__ = switch__49300__auto__(state_50556);
if(cljs.core.keyword_identical_QMARK_(result__49303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49303__auto__;
}
break;
}
}catch (e50571){if((e50571 instanceof Object)){
var ex__49304__auto__ = e50571;
var statearr_50572_51521 = state_50556;
(statearr_50572_51521[(5)] = ex__49304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50571;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51522 = state_50556;
state_50556 = G__51522;
continue;
} else {
return ret_value__49302__auto__;
}
break;
}
});
cljs$core$async$state_machine__49301__auto__ = function(state_50556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49301__auto____1.call(this,state_50556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49301__auto____0;
cljs$core$async$state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49301__auto____1;
return cljs$core$async$state_machine__49301__auto__;
})()
;})(switch__49300__auto__,c__49370__auto___51509,out))
})();
var state__49372__auto__ = (function (){var statearr_50573 = (f__49371__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49371__auto__.cljs$core$IFn$_invoke$arity$0() : f__49371__auto__.call(null));
(statearr_50573[(6)] = c__49370__auto___51509);

return statearr_50573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49372__auto__);
});})(c__49370__auto___51509,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__50575 = arguments.length;
switch (G__50575) {
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

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__49370__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49370__auto__){
return (function (){
var f__49371__auto__ = (function (){var switch__49300__auto__ = ((function (c__49370__auto__){
return (function (state_50637){
var state_val_50638 = (state_50637[(1)]);
if((state_val_50638 === (7))){
var inst_50633 = (state_50637[(2)]);
var state_50637__$1 = state_50637;
var statearr_50639_51531 = state_50637__$1;
(statearr_50639_51531[(2)] = inst_50633);

(statearr_50639_51531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50638 === (20))){
var inst_50603 = (state_50637[(7)]);
var inst_50614 = (state_50637[(2)]);
var inst_50615 = cljs.core.next(inst_50603);
var inst_50589 = inst_50615;
var inst_50590 = null;
var inst_50591 = (0);
var inst_50592 = (0);
var state_50637__$1 = (function (){var statearr_50640 = state_50637;
(statearr_50640[(8)] = inst_50590);

(statearr_50640[(9)] = inst_50589);

(statearr_50640[(10)] = inst_50591);

(statearr_50640[(11)] = inst_50592);

(statearr_50640[(12)] = inst_50614);

return statearr_50640;
})();
var statearr_50641_51532 = state_50637__$1;
(statearr_50641_51532[(2)] = null);

(statearr_50641_51532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50638 === (1))){
var state_50637__$1 = state_50637;
var statearr_50642_51533 = state_50637__$1;
(statearr_50642_51533[(2)] = null);

(statearr_50642_51533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50638 === (4))){
var inst_50578 = (state_50637[(13)]);
var inst_50578__$1 = (state_50637[(2)]);
var inst_50579 = (inst_50578__$1 == null);
var state_50637__$1 = (function (){var statearr_50643 = state_50637;
(statearr_50643[(13)] = inst_50578__$1);

return statearr_50643;
})();
if(cljs.core.truth_(inst_50579)){
var statearr_50644_51535 = state_50637__$1;
(statearr_50644_51535[(1)] = (5));

} else {
var statearr_50645_51536 = state_50637__$1;
(statearr_50645_51536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50638 === (15))){
var state_50637__$1 = state_50637;
var statearr_50649_51537 = state_50637__$1;
(statearr_50649_51537[(2)] = null);

(statearr_50649_51537[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50638 === (21))){
var state_50637__$1 = state_50637;
var statearr_50650_51539 = state_50637__$1;
(statearr_50650_51539[(2)] = null);

(statearr_50650_51539[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50638 === (13))){
var inst_50590 = (state_50637[(8)]);
var inst_50589 = (state_50637[(9)]);
var inst_50591 = (state_50637[(10)]);
var inst_50592 = (state_50637[(11)]);
var inst_50599 = (state_50637[(2)]);
var inst_50600 = (inst_50592 + (1));
var tmp50646 = inst_50590;
var tmp50647 = inst_50589;
var tmp50648 = inst_50591;
var inst_50589__$1 = tmp50647;
var inst_50590__$1 = tmp50646;
var inst_50591__$1 = tmp50648;
var inst_50592__$1 = inst_50600;
var state_50637__$1 = (function (){var statearr_50651 = state_50637;
(statearr_50651[(8)] = inst_50590__$1);

(statearr_50651[(9)] = inst_50589__$1);

(statearr_50651[(10)] = inst_50591__$1);

(statearr_50651[(11)] = inst_50592__$1);

(statearr_50651[(14)] = inst_50599);

return statearr_50651;
})();
var statearr_50652_51542 = state_50637__$1;
(statearr_50652_51542[(2)] = null);

(statearr_50652_51542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50638 === (22))){
var state_50637__$1 = state_50637;
var statearr_50653_51547 = state_50637__$1;
(statearr_50653_51547[(2)] = null);

(statearr_50653_51547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50638 === (6))){
var inst_50578 = (state_50637[(13)]);
var inst_50587 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_50578) : f.call(null,inst_50578));
var inst_50588 = cljs.core.seq(inst_50587);
var inst_50589 = inst_50588;
var inst_50590 = null;
var inst_50591 = (0);
var inst_50592 = (0);
var state_50637__$1 = (function (){var statearr_50654 = state_50637;
(statearr_50654[(8)] = inst_50590);

(statearr_50654[(9)] = inst_50589);

(statearr_50654[(10)] = inst_50591);

(statearr_50654[(11)] = inst_50592);

return statearr_50654;
})();
var statearr_50655_51549 = state_50637__$1;
(statearr_50655_51549[(2)] = null);

(statearr_50655_51549[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50638 === (17))){
var inst_50603 = (state_50637[(7)]);
var inst_50607 = cljs.core.chunk_first(inst_50603);
var inst_50608 = cljs.core.chunk_rest(inst_50603);
var inst_50609 = cljs.core.count(inst_50607);
var inst_50589 = inst_50608;
var inst_50590 = inst_50607;
var inst_50591 = inst_50609;
var inst_50592 = (0);
var state_50637__$1 = (function (){var statearr_50656 = state_50637;
(statearr_50656[(8)] = inst_50590);

(statearr_50656[(9)] = inst_50589);

(statearr_50656[(10)] = inst_50591);

(statearr_50656[(11)] = inst_50592);

return statearr_50656;
})();
var statearr_50657_51550 = state_50637__$1;
(statearr_50657_51550[(2)] = null);

(statearr_50657_51550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50638 === (3))){
var inst_50635 = (state_50637[(2)]);
var state_50637__$1 = state_50637;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50637__$1,inst_50635);
} else {
if((state_val_50638 === (12))){
var inst_50623 = (state_50637[(2)]);
var state_50637__$1 = state_50637;
var statearr_50658_51552 = state_50637__$1;
(statearr_50658_51552[(2)] = inst_50623);

(statearr_50658_51552[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50638 === (2))){
var state_50637__$1 = state_50637;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50637__$1,(4),in$);
} else {
if((state_val_50638 === (23))){
var inst_50631 = (state_50637[(2)]);
var state_50637__$1 = state_50637;
var statearr_50659_51553 = state_50637__$1;
(statearr_50659_51553[(2)] = inst_50631);

(statearr_50659_51553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50638 === (19))){
var inst_50618 = (state_50637[(2)]);
var state_50637__$1 = state_50637;
var statearr_50660_51555 = state_50637__$1;
(statearr_50660_51555[(2)] = inst_50618);

(statearr_50660_51555[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50638 === (11))){
var inst_50589 = (state_50637[(9)]);
var inst_50603 = (state_50637[(7)]);
var inst_50603__$1 = cljs.core.seq(inst_50589);
var state_50637__$1 = (function (){var statearr_50661 = state_50637;
(statearr_50661[(7)] = inst_50603__$1);

return statearr_50661;
})();
if(inst_50603__$1){
var statearr_50662_51559 = state_50637__$1;
(statearr_50662_51559[(1)] = (14));

} else {
var statearr_50663_51560 = state_50637__$1;
(statearr_50663_51560[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50638 === (9))){
var inst_50625 = (state_50637[(2)]);
var inst_50626 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_50637__$1 = (function (){var statearr_50664 = state_50637;
(statearr_50664[(15)] = inst_50625);

return statearr_50664;
})();
if(cljs.core.truth_(inst_50626)){
var statearr_50665_51561 = state_50637__$1;
(statearr_50665_51561[(1)] = (21));

} else {
var statearr_50666_51562 = state_50637__$1;
(statearr_50666_51562[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50638 === (5))){
var inst_50581 = cljs.core.async.close_BANG_(out);
var state_50637__$1 = state_50637;
var statearr_50667_51563 = state_50637__$1;
(statearr_50667_51563[(2)] = inst_50581);

(statearr_50667_51563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50638 === (14))){
var inst_50603 = (state_50637[(7)]);
var inst_50605 = cljs.core.chunked_seq_QMARK_(inst_50603);
var state_50637__$1 = state_50637;
if(inst_50605){
var statearr_50668_51564 = state_50637__$1;
(statearr_50668_51564[(1)] = (17));

} else {
var statearr_50669_51565 = state_50637__$1;
(statearr_50669_51565[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50638 === (16))){
var inst_50621 = (state_50637[(2)]);
var state_50637__$1 = state_50637;
var statearr_50670_51566 = state_50637__$1;
(statearr_50670_51566[(2)] = inst_50621);

(statearr_50670_51566[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50638 === (10))){
var inst_50590 = (state_50637[(8)]);
var inst_50592 = (state_50637[(11)]);
var inst_50597 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_50590,inst_50592);
var state_50637__$1 = state_50637;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50637__$1,(13),out,inst_50597);
} else {
if((state_val_50638 === (18))){
var inst_50603 = (state_50637[(7)]);
var inst_50612 = cljs.core.first(inst_50603);
var state_50637__$1 = state_50637;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50637__$1,(20),out,inst_50612);
} else {
if((state_val_50638 === (8))){
var inst_50591 = (state_50637[(10)]);
var inst_50592 = (state_50637[(11)]);
var inst_50594 = (inst_50592 < inst_50591);
var inst_50595 = inst_50594;
var state_50637__$1 = state_50637;
if(cljs.core.truth_(inst_50595)){
var statearr_50671_51567 = state_50637__$1;
(statearr_50671_51567[(1)] = (10));

} else {
var statearr_50672_51568 = state_50637__$1;
(statearr_50672_51568[(1)] = (11));

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
});})(c__49370__auto__))
;
return ((function (switch__49300__auto__,c__49370__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__49301__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__49301__auto____0 = (function (){
var statearr_50673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50673[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__49301__auto__);

(statearr_50673[(1)] = (1));

return statearr_50673;
});
var cljs$core$async$mapcat_STAR__$_state_machine__49301__auto____1 = (function (state_50637){
while(true){
var ret_value__49302__auto__ = (function (){try{while(true){
var result__49303__auto__ = switch__49300__auto__(state_50637);
if(cljs.core.keyword_identical_QMARK_(result__49303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49303__auto__;
}
break;
}
}catch (e50674){if((e50674 instanceof Object)){
var ex__49304__auto__ = e50674;
var statearr_50675_51570 = state_50637;
(statearr_50675_51570[(5)] = ex__49304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50674;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51571 = state_50637;
state_50637 = G__51571;
continue;
} else {
return ret_value__49302__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__49301__auto__ = function(state_50637){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__49301__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__49301__auto____1.call(this,state_50637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__49301__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__49301__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__49301__auto__;
})()
;})(switch__49300__auto__,c__49370__auto__))
})();
var state__49372__auto__ = (function (){var statearr_50676 = (f__49371__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49371__auto__.cljs$core$IFn$_invoke$arity$0() : f__49371__auto__.call(null));
(statearr_50676[(6)] = c__49370__auto__);

return statearr_50676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49372__auto__);
});})(c__49370__auto__))
);

return c__49370__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__50678 = arguments.length;
switch (G__50678) {
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

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__50680 = arguments.length;
switch (G__50680) {
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

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__50682 = arguments.length;
switch (G__50682) {
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

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49370__auto___51582 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49370__auto___51582,out){
return (function (){
var f__49371__auto__ = (function (){var switch__49300__auto__ = ((function (c__49370__auto___51582,out){
return (function (state_50706){
var state_val_50707 = (state_50706[(1)]);
if((state_val_50707 === (7))){
var inst_50701 = (state_50706[(2)]);
var state_50706__$1 = state_50706;
var statearr_50708_51584 = state_50706__$1;
(statearr_50708_51584[(2)] = inst_50701);

(statearr_50708_51584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50707 === (1))){
var inst_50683 = null;
var state_50706__$1 = (function (){var statearr_50709 = state_50706;
(statearr_50709[(7)] = inst_50683);

return statearr_50709;
})();
var statearr_50710_51585 = state_50706__$1;
(statearr_50710_51585[(2)] = null);

(statearr_50710_51585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50707 === (4))){
var inst_50686 = (state_50706[(8)]);
var inst_50686__$1 = (state_50706[(2)]);
var inst_50687 = (inst_50686__$1 == null);
var inst_50688 = cljs.core.not(inst_50687);
var state_50706__$1 = (function (){var statearr_50711 = state_50706;
(statearr_50711[(8)] = inst_50686__$1);

return statearr_50711;
})();
if(inst_50688){
var statearr_50712_51587 = state_50706__$1;
(statearr_50712_51587[(1)] = (5));

} else {
var statearr_50713_51588 = state_50706__$1;
(statearr_50713_51588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50707 === (6))){
var state_50706__$1 = state_50706;
var statearr_50714_51589 = state_50706__$1;
(statearr_50714_51589[(2)] = null);

(statearr_50714_51589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50707 === (3))){
var inst_50703 = (state_50706[(2)]);
var inst_50704 = cljs.core.async.close_BANG_(out);
var state_50706__$1 = (function (){var statearr_50715 = state_50706;
(statearr_50715[(9)] = inst_50703);

return statearr_50715;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50706__$1,inst_50704);
} else {
if((state_val_50707 === (2))){
var state_50706__$1 = state_50706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50706__$1,(4),ch);
} else {
if((state_val_50707 === (11))){
var inst_50686 = (state_50706[(8)]);
var inst_50695 = (state_50706[(2)]);
var inst_50683 = inst_50686;
var state_50706__$1 = (function (){var statearr_50716 = state_50706;
(statearr_50716[(10)] = inst_50695);

(statearr_50716[(7)] = inst_50683);

return statearr_50716;
})();
var statearr_50717_51590 = state_50706__$1;
(statearr_50717_51590[(2)] = null);

(statearr_50717_51590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50707 === (9))){
var inst_50686 = (state_50706[(8)]);
var state_50706__$1 = state_50706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50706__$1,(11),out,inst_50686);
} else {
if((state_val_50707 === (5))){
var inst_50683 = (state_50706[(7)]);
var inst_50686 = (state_50706[(8)]);
var inst_50690 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50686,inst_50683);
var state_50706__$1 = state_50706;
if(inst_50690){
var statearr_50719_51591 = state_50706__$1;
(statearr_50719_51591[(1)] = (8));

} else {
var statearr_50720_51593 = state_50706__$1;
(statearr_50720_51593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50707 === (10))){
var inst_50698 = (state_50706[(2)]);
var state_50706__$1 = state_50706;
var statearr_50721_51597 = state_50706__$1;
(statearr_50721_51597[(2)] = inst_50698);

(statearr_50721_51597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50707 === (8))){
var inst_50683 = (state_50706[(7)]);
var tmp50718 = inst_50683;
var inst_50683__$1 = tmp50718;
var state_50706__$1 = (function (){var statearr_50722 = state_50706;
(statearr_50722[(7)] = inst_50683__$1);

return statearr_50722;
})();
var statearr_50723_51598 = state_50706__$1;
(statearr_50723_51598[(2)] = null);

(statearr_50723_51598[(1)] = (2));


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
});})(c__49370__auto___51582,out))
;
return ((function (switch__49300__auto__,c__49370__auto___51582,out){
return (function() {
var cljs$core$async$state_machine__49301__auto__ = null;
var cljs$core$async$state_machine__49301__auto____0 = (function (){
var statearr_50724 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50724[(0)] = cljs$core$async$state_machine__49301__auto__);

(statearr_50724[(1)] = (1));

return statearr_50724;
});
var cljs$core$async$state_machine__49301__auto____1 = (function (state_50706){
while(true){
var ret_value__49302__auto__ = (function (){try{while(true){
var result__49303__auto__ = switch__49300__auto__(state_50706);
if(cljs.core.keyword_identical_QMARK_(result__49303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49303__auto__;
}
break;
}
}catch (e50725){if((e50725 instanceof Object)){
var ex__49304__auto__ = e50725;
var statearr_50726_51603 = state_50706;
(statearr_50726_51603[(5)] = ex__49304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50725;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51605 = state_50706;
state_50706 = G__51605;
continue;
} else {
return ret_value__49302__auto__;
}
break;
}
});
cljs$core$async$state_machine__49301__auto__ = function(state_50706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49301__auto____1.call(this,state_50706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49301__auto____0;
cljs$core$async$state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49301__auto____1;
return cljs$core$async$state_machine__49301__auto__;
})()
;})(switch__49300__auto__,c__49370__auto___51582,out))
})();
var state__49372__auto__ = (function (){var statearr_50727 = (f__49371__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49371__auto__.cljs$core$IFn$_invoke$arity$0() : f__49371__auto__.call(null));
(statearr_50727[(6)] = c__49370__auto___51582);

return statearr_50727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49372__auto__);
});})(c__49370__auto___51582,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__50729 = arguments.length;
switch (G__50729) {
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

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49370__auto___51608 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49370__auto___51608,out){
return (function (){
var f__49371__auto__ = (function (){var switch__49300__auto__ = ((function (c__49370__auto___51608,out){
return (function (state_50767){
var state_val_50768 = (state_50767[(1)]);
if((state_val_50768 === (7))){
var inst_50763 = (state_50767[(2)]);
var state_50767__$1 = state_50767;
var statearr_50769_51609 = state_50767__$1;
(statearr_50769_51609[(2)] = inst_50763);

(statearr_50769_51609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50768 === (1))){
var inst_50730 = (new Array(n));
var inst_50731 = inst_50730;
var inst_50732 = (0);
var state_50767__$1 = (function (){var statearr_50770 = state_50767;
(statearr_50770[(7)] = inst_50731);

(statearr_50770[(8)] = inst_50732);

return statearr_50770;
})();
var statearr_50771_51610 = state_50767__$1;
(statearr_50771_51610[(2)] = null);

(statearr_50771_51610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50768 === (4))){
var inst_50735 = (state_50767[(9)]);
var inst_50735__$1 = (state_50767[(2)]);
var inst_50736 = (inst_50735__$1 == null);
var inst_50737 = cljs.core.not(inst_50736);
var state_50767__$1 = (function (){var statearr_50772 = state_50767;
(statearr_50772[(9)] = inst_50735__$1);

return statearr_50772;
})();
if(inst_50737){
var statearr_50773_51611 = state_50767__$1;
(statearr_50773_51611[(1)] = (5));

} else {
var statearr_50774_51612 = state_50767__$1;
(statearr_50774_51612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50768 === (15))){
var inst_50757 = (state_50767[(2)]);
var state_50767__$1 = state_50767;
var statearr_50775_51613 = state_50767__$1;
(statearr_50775_51613[(2)] = inst_50757);

(statearr_50775_51613[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50768 === (13))){
var state_50767__$1 = state_50767;
var statearr_50776_51616 = state_50767__$1;
(statearr_50776_51616[(2)] = null);

(statearr_50776_51616[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50768 === (6))){
var inst_50732 = (state_50767[(8)]);
var inst_50753 = (inst_50732 > (0));
var state_50767__$1 = state_50767;
if(cljs.core.truth_(inst_50753)){
var statearr_50777_51617 = state_50767__$1;
(statearr_50777_51617[(1)] = (12));

} else {
var statearr_50778_51618 = state_50767__$1;
(statearr_50778_51618[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50768 === (3))){
var inst_50765 = (state_50767[(2)]);
var state_50767__$1 = state_50767;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50767__$1,inst_50765);
} else {
if((state_val_50768 === (12))){
var inst_50731 = (state_50767[(7)]);
var inst_50755 = cljs.core.vec(inst_50731);
var state_50767__$1 = state_50767;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50767__$1,(15),out,inst_50755);
} else {
if((state_val_50768 === (2))){
var state_50767__$1 = state_50767;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50767__$1,(4),ch);
} else {
if((state_val_50768 === (11))){
var inst_50747 = (state_50767[(2)]);
var inst_50748 = (new Array(n));
var inst_50731 = inst_50748;
var inst_50732 = (0);
var state_50767__$1 = (function (){var statearr_50779 = state_50767;
(statearr_50779[(10)] = inst_50747);

(statearr_50779[(7)] = inst_50731);

(statearr_50779[(8)] = inst_50732);

return statearr_50779;
})();
var statearr_50780_51621 = state_50767__$1;
(statearr_50780_51621[(2)] = null);

(statearr_50780_51621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50768 === (9))){
var inst_50731 = (state_50767[(7)]);
var inst_50745 = cljs.core.vec(inst_50731);
var state_50767__$1 = state_50767;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50767__$1,(11),out,inst_50745);
} else {
if((state_val_50768 === (5))){
var inst_50731 = (state_50767[(7)]);
var inst_50740 = (state_50767[(11)]);
var inst_50735 = (state_50767[(9)]);
var inst_50732 = (state_50767[(8)]);
var inst_50739 = (inst_50731[inst_50732] = inst_50735);
var inst_50740__$1 = (inst_50732 + (1));
var inst_50741 = (inst_50740__$1 < n);
var state_50767__$1 = (function (){var statearr_50781 = state_50767;
(statearr_50781[(11)] = inst_50740__$1);

(statearr_50781[(12)] = inst_50739);

return statearr_50781;
})();
if(cljs.core.truth_(inst_50741)){
var statearr_50782_51622 = state_50767__$1;
(statearr_50782_51622[(1)] = (8));

} else {
var statearr_50783_51623 = state_50767__$1;
(statearr_50783_51623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50768 === (14))){
var inst_50760 = (state_50767[(2)]);
var inst_50761 = cljs.core.async.close_BANG_(out);
var state_50767__$1 = (function (){var statearr_50785 = state_50767;
(statearr_50785[(13)] = inst_50760);

return statearr_50785;
})();
var statearr_50786_51624 = state_50767__$1;
(statearr_50786_51624[(2)] = inst_50761);

(statearr_50786_51624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50768 === (10))){
var inst_50751 = (state_50767[(2)]);
var state_50767__$1 = state_50767;
var statearr_50787_51626 = state_50767__$1;
(statearr_50787_51626[(2)] = inst_50751);

(statearr_50787_51626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50768 === (8))){
var inst_50731 = (state_50767[(7)]);
var inst_50740 = (state_50767[(11)]);
var tmp50784 = inst_50731;
var inst_50731__$1 = tmp50784;
var inst_50732 = inst_50740;
var state_50767__$1 = (function (){var statearr_50788 = state_50767;
(statearr_50788[(7)] = inst_50731__$1);

(statearr_50788[(8)] = inst_50732);

return statearr_50788;
})();
var statearr_50789_51627 = state_50767__$1;
(statearr_50789_51627[(2)] = null);

(statearr_50789_51627[(1)] = (2));


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
});})(c__49370__auto___51608,out))
;
return ((function (switch__49300__auto__,c__49370__auto___51608,out){
return (function() {
var cljs$core$async$state_machine__49301__auto__ = null;
var cljs$core$async$state_machine__49301__auto____0 = (function (){
var statearr_50790 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50790[(0)] = cljs$core$async$state_machine__49301__auto__);

(statearr_50790[(1)] = (1));

return statearr_50790;
});
var cljs$core$async$state_machine__49301__auto____1 = (function (state_50767){
while(true){
var ret_value__49302__auto__ = (function (){try{while(true){
var result__49303__auto__ = switch__49300__auto__(state_50767);
if(cljs.core.keyword_identical_QMARK_(result__49303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49303__auto__;
}
break;
}
}catch (e50791){if((e50791 instanceof Object)){
var ex__49304__auto__ = e50791;
var statearr_50792_51628 = state_50767;
(statearr_50792_51628[(5)] = ex__49304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50791;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51630 = state_50767;
state_50767 = G__51630;
continue;
} else {
return ret_value__49302__auto__;
}
break;
}
});
cljs$core$async$state_machine__49301__auto__ = function(state_50767){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49301__auto____1.call(this,state_50767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49301__auto____0;
cljs$core$async$state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49301__auto____1;
return cljs$core$async$state_machine__49301__auto__;
})()
;})(switch__49300__auto__,c__49370__auto___51608,out))
})();
var state__49372__auto__ = (function (){var statearr_50793 = (f__49371__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49371__auto__.cljs$core$IFn$_invoke$arity$0() : f__49371__auto__.call(null));
(statearr_50793[(6)] = c__49370__auto___51608);

return statearr_50793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49372__auto__);
});})(c__49370__auto___51608,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__50795 = arguments.length;
switch (G__50795) {
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

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49370__auto___51640 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49370__auto___51640,out){
return (function (){
var f__49371__auto__ = (function (){var switch__49300__auto__ = ((function (c__49370__auto___51640,out){
return (function (state_50837){
var state_val_50838 = (state_50837[(1)]);
if((state_val_50838 === (7))){
var inst_50833 = (state_50837[(2)]);
var state_50837__$1 = state_50837;
var statearr_50839_51644 = state_50837__$1;
(statearr_50839_51644[(2)] = inst_50833);

(statearr_50839_51644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50838 === (1))){
var inst_50796 = [];
var inst_50797 = inst_50796;
var inst_50798 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_50837__$1 = (function (){var statearr_50840 = state_50837;
(statearr_50840[(7)] = inst_50797);

(statearr_50840[(8)] = inst_50798);

return statearr_50840;
})();
var statearr_50841_51645 = state_50837__$1;
(statearr_50841_51645[(2)] = null);

(statearr_50841_51645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50838 === (4))){
var inst_50801 = (state_50837[(9)]);
var inst_50801__$1 = (state_50837[(2)]);
var inst_50802 = (inst_50801__$1 == null);
var inst_50803 = cljs.core.not(inst_50802);
var state_50837__$1 = (function (){var statearr_50842 = state_50837;
(statearr_50842[(9)] = inst_50801__$1);

return statearr_50842;
})();
if(inst_50803){
var statearr_50843_51649 = state_50837__$1;
(statearr_50843_51649[(1)] = (5));

} else {
var statearr_50844_51650 = state_50837__$1;
(statearr_50844_51650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50838 === (15))){
var inst_50827 = (state_50837[(2)]);
var state_50837__$1 = state_50837;
var statearr_50845_51651 = state_50837__$1;
(statearr_50845_51651[(2)] = inst_50827);

(statearr_50845_51651[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50838 === (13))){
var state_50837__$1 = state_50837;
var statearr_50846_51652 = state_50837__$1;
(statearr_50846_51652[(2)] = null);

(statearr_50846_51652[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50838 === (6))){
var inst_50797 = (state_50837[(7)]);
var inst_50822 = inst_50797.length;
var inst_50823 = (inst_50822 > (0));
var state_50837__$1 = state_50837;
if(cljs.core.truth_(inst_50823)){
var statearr_50847_51656 = state_50837__$1;
(statearr_50847_51656[(1)] = (12));

} else {
var statearr_50848_51657 = state_50837__$1;
(statearr_50848_51657[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50838 === (3))){
var inst_50835 = (state_50837[(2)]);
var state_50837__$1 = state_50837;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50837__$1,inst_50835);
} else {
if((state_val_50838 === (12))){
var inst_50797 = (state_50837[(7)]);
var inst_50825 = cljs.core.vec(inst_50797);
var state_50837__$1 = state_50837;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50837__$1,(15),out,inst_50825);
} else {
if((state_val_50838 === (2))){
var state_50837__$1 = state_50837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50837__$1,(4),ch);
} else {
if((state_val_50838 === (11))){
var inst_50801 = (state_50837[(9)]);
var inst_50805 = (state_50837[(10)]);
var inst_50815 = (state_50837[(2)]);
var inst_50816 = [];
var inst_50817 = inst_50816.push(inst_50801);
var inst_50797 = inst_50816;
var inst_50798 = inst_50805;
var state_50837__$1 = (function (){var statearr_50849 = state_50837;
(statearr_50849[(11)] = inst_50815);

(statearr_50849[(7)] = inst_50797);

(statearr_50849[(8)] = inst_50798);

(statearr_50849[(12)] = inst_50817);

return statearr_50849;
})();
var statearr_50850_51661 = state_50837__$1;
(statearr_50850_51661[(2)] = null);

(statearr_50850_51661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50838 === (9))){
var inst_50797 = (state_50837[(7)]);
var inst_50813 = cljs.core.vec(inst_50797);
var state_50837__$1 = state_50837;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50837__$1,(11),out,inst_50813);
} else {
if((state_val_50838 === (5))){
var inst_50798 = (state_50837[(8)]);
var inst_50801 = (state_50837[(9)]);
var inst_50805 = (state_50837[(10)]);
var inst_50805__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_50801) : f.call(null,inst_50801));
var inst_50806 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50805__$1,inst_50798);
var inst_50807 = cljs.core.keyword_identical_QMARK_(inst_50798,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_50808 = ((inst_50806) || (inst_50807));
var state_50837__$1 = (function (){var statearr_50851 = state_50837;
(statearr_50851[(10)] = inst_50805__$1);

return statearr_50851;
})();
if(cljs.core.truth_(inst_50808)){
var statearr_50852_51663 = state_50837__$1;
(statearr_50852_51663[(1)] = (8));

} else {
var statearr_50853_51664 = state_50837__$1;
(statearr_50853_51664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50838 === (14))){
var inst_50830 = (state_50837[(2)]);
var inst_50831 = cljs.core.async.close_BANG_(out);
var state_50837__$1 = (function (){var statearr_50855 = state_50837;
(statearr_50855[(13)] = inst_50830);

return statearr_50855;
})();
var statearr_50856_51665 = state_50837__$1;
(statearr_50856_51665[(2)] = inst_50831);

(statearr_50856_51665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50838 === (10))){
var inst_50820 = (state_50837[(2)]);
var state_50837__$1 = state_50837;
var statearr_50857_51666 = state_50837__$1;
(statearr_50857_51666[(2)] = inst_50820);

(statearr_50857_51666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50838 === (8))){
var inst_50797 = (state_50837[(7)]);
var inst_50801 = (state_50837[(9)]);
var inst_50805 = (state_50837[(10)]);
var inst_50810 = inst_50797.push(inst_50801);
var tmp50854 = inst_50797;
var inst_50797__$1 = tmp50854;
var inst_50798 = inst_50805;
var state_50837__$1 = (function (){var statearr_50858 = state_50837;
(statearr_50858[(7)] = inst_50797__$1);

(statearr_50858[(8)] = inst_50798);

(statearr_50858[(14)] = inst_50810);

return statearr_50858;
})();
var statearr_50859_51676 = state_50837__$1;
(statearr_50859_51676[(2)] = null);

(statearr_50859_51676[(1)] = (2));


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
});})(c__49370__auto___51640,out))
;
return ((function (switch__49300__auto__,c__49370__auto___51640,out){
return (function() {
var cljs$core$async$state_machine__49301__auto__ = null;
var cljs$core$async$state_machine__49301__auto____0 = (function (){
var statearr_50860 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50860[(0)] = cljs$core$async$state_machine__49301__auto__);

(statearr_50860[(1)] = (1));

return statearr_50860;
});
var cljs$core$async$state_machine__49301__auto____1 = (function (state_50837){
while(true){
var ret_value__49302__auto__ = (function (){try{while(true){
var result__49303__auto__ = switch__49300__auto__(state_50837);
if(cljs.core.keyword_identical_QMARK_(result__49303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49303__auto__;
}
break;
}
}catch (e50861){if((e50861 instanceof Object)){
var ex__49304__auto__ = e50861;
var statearr_50862_51683 = state_50837;
(statearr_50862_51683[(5)] = ex__49304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50861;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51684 = state_50837;
state_50837 = G__51684;
continue;
} else {
return ret_value__49302__auto__;
}
break;
}
});
cljs$core$async$state_machine__49301__auto__ = function(state_50837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49301__auto____1.call(this,state_50837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49301__auto____0;
cljs$core$async$state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49301__auto____1;
return cljs$core$async$state_machine__49301__auto__;
})()
;})(switch__49300__auto__,c__49370__auto___51640,out))
})();
var state__49372__auto__ = (function (){var statearr_50863 = (f__49371__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49371__auto__.cljs$core$IFn$_invoke$arity$0() : f__49371__auto__.call(null));
(statearr_50863[(6)] = c__49370__auto___51640);

return statearr_50863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49372__auto__);
});})(c__49370__auto___51640,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
