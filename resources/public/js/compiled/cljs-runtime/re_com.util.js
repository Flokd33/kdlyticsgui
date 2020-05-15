goog.provide('re_com.util');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('reagent.ratom');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
/**
 * Takes a function 'f' amd a map 'm'.  Applies 'f' to each value in 'm' and returns.
 * (fmap  inc  {:a 4  :b 2})   =>   {:a 5  :b 3}
 */
re_com.util.fmap = (function re_com$util$fmap(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function re_com$util$fmap_$_iter__42925(s__42926){
return (new cljs.core.LazySeq(null,(function (){
var s__42926__$1 = s__42926;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42926__$1);
if(temp__5735__auto__){
var s__42926__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42926__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42926__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42928 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42927 = (0);
while(true){
if((i__42927 < size__4528__auto__)){
var vec__42929 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__42927);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42929,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42929,(1),null);
cljs.core.chunk_append(b__42928,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(val) : f.call(null,val))], null));

var G__42981 = (i__42927 + (1));
i__42927 = G__42981;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42928),re_com$util$fmap_$_iter__42925(cljs.core.chunk_rest(s__42926__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42928),null);
}
} else {
var vec__42932 = cljs.core.first(s__42926__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42932,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42932,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(val) : f.call(null,val))], null),re_com$util$fmap_$_iter__42925(cljs.core.rest(s__42926__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(m);
})());
});
/**
 * Recursively merges maps. If vals are not maps, the last value wins.
 */
re_com.util.deep_merge = (function re_com$util$deep_merge(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42982 = arguments.length;
var i__4737__auto___42983 = (0);
while(true){
if((i__4737__auto___42983 < len__4736__auto___42982)){
args__4742__auto__.push((arguments[i__4737__auto___42983]));

var G__42984 = (i__4737__auto___42983 + (1));
i__4737__auto___42983 = G__42984;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,vals)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,re_com.util.deep_merge,vals);
} else {
return cljs.core.last(vals);
}
}));

(re_com.util.deep_merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.util.deep_merge.cljs$lang$applyTo = (function (seq42935){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42935));
}));

/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's a Reagent object that supports IDeref, returns the value inside it by derefing
 *   
 */
re_com.util.deref_or_value = (function re_com$util$deref_or_value(val_or_atom){
if((((!((val_or_atom == null))))?(((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$))))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,val_or_atom))){
return cljs.core.deref(val_or_atom);
} else {
return val_or_atom;
}
});
/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's a Reagent object that supports IDeref, returns the value inside it, but WITHOUT derefing
 * 
 *   The arg validation code uses this, since calling deref-or-value adds this arg to the watched ratom list for the component
 *   in question, which in turn can cause different rendering behaviour between dev (where we validate) and prod (where we don't).
 * 
 *   This was experienced in popover-content-wrapper with the position-injected atom which was not derefed there, however
 *   the dev-only validation caused it to be derefed, modifying its render behaviour and causing mayhem and madness for the developer.
 * 
 *   See below that different Reagent types have different ways of retrieving the value without causing capture, although in the case of
 *   Track, we just deref it as there is no peek or state, so hopefully this won't cause issues (surely this is used very rarely).
 *   
 */
re_com.util.deref_or_value_peek = (function re_com$util$deref_or_value_peek(val_or_atom){
if((((!((val_or_atom == null))))?(((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$))))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,val_or_atom))){
if((val_or_atom instanceof reagent.ratom.RAtom)){
return val_or_atom.state;
} else {
if((val_or_atom instanceof reagent.ratom.Reaction)){
return val_or_atom._peek_at();
} else {
if((val_or_atom instanceof reagent.ratom.RCursor)){
return val_or_atom._peek();
} else {
if((val_or_atom instanceof reagent.ratom.Track)){
return cljs.core.deref(val_or_atom);
} else {
if((val_or_atom instanceof reagent.ratom.Wrapper)){
return val_or_atom.state;
} else {
throw (new Error("Unknown reactive data type"));

}
}
}
}
}
} else {
return val_or_atom;
}
});
re_com.util.get_element_by_id = (function re_com$util$get_element_by_id(id){
return document.getElementById(id);
});
/**
 * Left pad a string 's' with '0', until 's' has length 'len'. Return 's' unchanged, if it is already len or greater
 */
re_com.util.pad_zero = (function re_com$util$pad_zero(s,len){
if((cljs.core.count(s) < len)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_last(len,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(len,"0"),s)));
} else {
return s;
}
});
/**
 * return 'num' as a string of 'len' characters, left padding with '0' as necessary
 */
re_com.util.pad_zero_number = (function re_com$util$pad_zero_number(num,len){
return re_com.util.pad_zero(cljs.core.str.cljs$core$IFn$_invoke$arity$1(num),len);
});
/**
 * takes a number (and optional :negative keyword to indicate a negative value) and returns that number as a string with 'px' at the end
 */
re_com.util.px = (function re_com$util$px(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42989 = arguments.length;
var i__4737__auto___42990 = (0);
while(true){
if((i__4737__auto___42990 < len__4736__auto___42989)){
args__4742__auto__.push((arguments[i__4737__auto___42990]));

var G__42992 = (i__4737__auto___42990 + (1));
i__4737__auto___42990 = G__42992;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(re_com.util.px.cljs$core$IFn$_invoke$arity$variadic = (function (val,negative){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(negative)?(- val):val)),"px"].join('');
}));

(re_com.util.px.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_com.util.px.cljs$lang$applyTo = (function (seq42941){
var G__42942 = cljs.core.first(seq42941);
var seq42941__$1 = cljs.core.next(seq42941);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42942,seq42941__$1);
}));

/**
 * Removes the item at position n from a vector v, returning a shrunk vector
 */
re_com.util.remove_nth = (function re_com$util$remove_nth(v,n){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),n),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(n + (1)),cljs.core.count(v))));
});
re_com.util.insert_nth = (function re_com$util$insert_nth(vect,index,item){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge,cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(vect,(0),index),item,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(vect,index));
});
/**
 * Takes a vector of maps 'v'. Returns the position of the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.position_for_id = (function re_com$util$position_for_id(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42998 = arguments.length;
var i__4737__auto___42999 = (0);
while(true){
if((i__4737__auto___42999 < len__4736__auto___42998)){
args__4742__auto__.push((arguments[i__4737__auto___42999]));

var G__43000 = (i__4737__auto___42999 + (1));
i__4737__auto___42999 = G__43000;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__42952){
var map__42953 = p__42952;
var map__42953__$1 = (((((!((map__42953 == null))))?(((((map__42953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42953):map__42953);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42953__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var index_fn = (function (index,item){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(item) : id_fn.call(null,item)),id)){
return index;
} else {
return null;
}
});
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(index_fn,v));
}));

(re_com.util.position_for_id.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_com.util.position_for_id.cljs$lang$applyTo = (function (seq42947){
var G__42948 = cljs.core.first(seq42947);
var seq42947__$1 = cljs.core.next(seq42947);
var G__42949 = cljs.core.first(seq42947__$1);
var seq42947__$2 = cljs.core.next(seq42947__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42948,G__42949,seq42947__$2);
}));

/**
 * Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.item_for_id = (function re_com$util$item_for_id(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43001 = arguments.length;
var i__4737__auto___43002 = (0);
while(true){
if((i__4737__auto___43002 < len__4736__auto___43001)){
args__4742__auto__.push((arguments[i__4737__auto___43002]));

var G__43003 = (i__4737__auto___43002 + (1));
i__4737__auto___43002 = G__43003;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__42960){
var map__42961 = p__42960;
var map__42961__$1 = (((((!((map__42961 == null))))?(((((map__42961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42961):map__42961);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42961__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__42956_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__42956_SHARP_) : id_fn.call(null,p1__42956_SHARP_)),id);
}),v));
}));

(re_com.util.item_for_id.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_com.util.item_for_id.cljs$lang$applyTo = (function (seq42957){
var G__42958 = cljs.core.first(seq42957);
var seq42957__$1 = cljs.core.next(seq42957);
var G__42959 = cljs.core.first(seq42957__$1);
var seq42957__$2 = cljs.core.next(seq42957__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42958,G__42959,seq42957__$2);
}));

/**
 * Takes a vector of maps 'v', each of which has an id-fn (default :id) key.
 *   Return v where item matching 'id' is excluded
 */
re_com.util.remove_id_item = (function re_com$util$remove_id_item(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43011 = arguments.length;
var i__4737__auto___43012 = (0);
while(true){
if((i__4737__auto___43012 < len__4736__auto___43011)){
args__4742__auto__.push((arguments[i__4737__auto___43012]));

var G__43013 = (i__4737__auto___43012 + (1));
i__4737__auto___43012 = G__43013;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__42974){
var map__42975 = p__42974;
var map__42975__$1 = (((((!((map__42975 == null))))?(((((map__42975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42975):map__42975);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42975__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.filterv((function (p1__42963_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__42963_SHARP_) : id_fn.call(null,p1__42963_SHARP_)),id);
}),v);
}));

(re_com.util.remove_id_item.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_com.util.remove_id_item.cljs$lang$applyTo = (function (seq42964){
var G__42965 = cljs.core.first(seq42964);
var seq42964__$1 = cljs.core.next(seq42964);
var G__42966 = cljs.core.first(seq42964__$1);
var seq42964__$2 = cljs.core.next(seq42964__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42965,G__42966,seq42964__$2);
}));

/**
 * (for [[index item first? last?] (enumerate coll)] ...)
 */
re_com.util.enumerate = (function re_com$util$enumerate(coll){
var c = (cljs.core.count(coll) - (1));
var f = (function (index,item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,item,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),index),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,index)], null);
});
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(f,coll);
});
/**
 * Given a DOM node, I traverse through all ascendant nodes (until I reach body), summing any scrollLeft and scrollTop values
 * and return these sums in a map
 */
re_com.util.sum_scroll_offsets = (function re_com$util$sum_scroll_offsets(node){
var current_node = node.parentNode;
var sum_scroll_left = (0);
var sum_scroll_top = (0);
while(true){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_node.tagName,"BODY")){
var G__43026 = current_node.parentNode;
var G__43027 = (sum_scroll_left + current_node.scrollLeft);
var G__43028 = (sum_scroll_top + current_node.scrollTop);
current_node = G__43026;
sum_scroll_left = G__43027;
sum_scroll_top = G__43028;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),sum_scroll_left,new cljs.core.Keyword(null,"top","top",-1856271961),sum_scroll_top], null);
}
break;
}
});
/**
 * Return a goog.date.UtcDateTime based on local date/time.
 */
re_com.util.now__GT_utc = (function re_com$util$now__GT_utc(){
var local_date_time = (new goog.date.DateTime());
return (new goog.date.UtcDateTime(local_date_time.getYear(),local_date_time.getMonth(),local_date_time.getDate(),(0),(0),(0),(0)));
});

//# sourceMappingURL=re_com.util.js.map
