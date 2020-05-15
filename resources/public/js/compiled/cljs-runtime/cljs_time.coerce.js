goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('goog.date.UtcDateTime');

/**
 * @interface
 */
cljs_time.coerce.ICoerce = function(){};

var cljs_time$coerce$ICoerce$to_date_time$dyn_56229 = (function (obj){
var x__4428__auto__ = (((obj == null))?null:obj);
var m__4429__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__4429__auto__.call(null,obj));
} else {
var m__4426__auto__ = (cljs_time.coerce.to_date_time["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__4426__auto__.call(null,obj));
} else {
throw cljs.core.missing_protocol("ICoerce.to-date-time",obj);
}
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if((((!((obj == null)))) && ((!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null)))))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
return cljs_time$coerce$ICoerce$to_date_time$dyn_56229(obj);
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__56197 = millis;
if((G__56197 == null)){
return null;
} else {
return (goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1 ? goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1(G__56197) : goog.date.UtcDateTime.fromTimestamp.call(null,G__56197));
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first((function (){var iter__4529__auto__ = (function cljs_time$coerce$from_string_$_iter__56198(s__56199){
return (new cljs.core.LazySeq(null,(function (){
var s__56199__$1 = s__56199;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56199__$1);
if(temp__5735__auto__){
var s__56199__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56199__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__56199__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__56201 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__56200 = (0);
while(true){
if((i__56200 < size__4528__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__56200);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e56202){if((e56202 instanceof Error)){
var _ = e56202;
return null;
} else {
throw e56202;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__56201,d);

var G__56234 = (i__56200 + (1));
i__56200 = G__56234;
continue;
} else {
var G__56235 = (i__56200 + (1));
i__56200 = G__56235;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56201),cljs_time$coerce$from_string_$_iter__56198(cljs.core.chunk_rest(s__56199__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56201),null);
}
} else {
var f = cljs.core.first(s__56199__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e56203){if((e56203 instanceof Error)){
var _ = e56203;
return null;
} else {
throw e56203;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$coerce$from_string_$_iter__56198(cljs.core.rest(s__56199__$2)));
} else {
var G__56236 = cljs.core.rest(s__56199__$2);
s__56199__$1 = G__56236;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
} else {
return null;
}
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   js Date object.
 */
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
var G__56204 = date;
var G__56204__$1 = (((G__56204 == null))?null:G__56204.getTime());
if((G__56204__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long(G__56204__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__56208 = obj;
var G__56208__$1 = (((G__56208 == null))?null:cljs_time.coerce.to_date_time(G__56208));
if((G__56208__$1 == null)){
return null;
} else {
return G__56208__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var millis = cljs_time.coerce.to_long(obj);
var and__4115__auto__ = millis;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.quot(millis,(1000));
} else {
return and__4115__auto__;
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__56213 = obj;
var G__56213__$1 = (((G__56213 == null))?null:cljs_time.coerce.to_date_time(G__56213));
var G__56213__$2 = (((G__56213__$1 == null))?null:G__56213__$1.getTime());
if((G__56213__$2 == null)){
return null;
} else {
return (new Date(G__56213__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__56214 = obj;
var G__56214__$1 = (((G__56214 == null))?null:cljs_time.coerce.to_date_time(G__56214));
if((G__56214__$1 == null)){
return null;
} else {
return cljs_time.format.unparse(new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__56214__$1);
}
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.date.Date,cljs.core.type(obj))){
return obj;
} else {
var temp__5733__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5733__auto__)){
var dt = temp__5733__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__5733__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5733__auto__)){
var dt = temp__5733__auto__;
var G__56215 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__56215.setHours(dt.getHours());

G__56215.setMinutes(dt.getMinutes());

G__56215.setSeconds(dt.getSeconds());

G__56215.setMilliseconds(dt.getMilliseconds());

return G__56215;
} else {
return null;
}
} else {
return null;
}
});
goog.object.set(cljs_time.coerce.ICoerce,"null",true);

var G__56216_56246 = cljs_time.coerce.to_date_time;
var G__56217_56247 = "null";
var G__56218_56248 = (function (_){
return null;
});
goog.object.set(G__56216_56246,G__56217_56247,G__56218_56248);

(Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date(date__$1);
}));

(goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
return cljs_time.core.to_utc_time_zone(local_date__$1);
} else {
return null;
}
}));

(goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
return cljs_time.core.to_utc_time_zone(local_date_time__$1);
} else {
return null;
}
}));

(goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
}));

goog.object.set(cljs_time.coerce.ICoerce,"number",true);

var G__56222_56253 = cljs_time.coerce.to_date_time;
var G__56223_56254 = "number";
var G__56224_56255 = (function (long$){
return cljs_time.coerce.from_long(long$);
});
goog.object.set(G__56222_56253,G__56223_56254,G__56224_56255);

goog.object.set(cljs_time.coerce.ICoerce,"string",true);

var G__56225_56256 = cljs_time.coerce.to_date_time;
var G__56226_56257 = "string";
var G__56227_56258 = (function (string){
return cljs_time.coerce.from_string(string);
});
goog.object.set(G__56225_56256,G__56226_56257,G__56227_56258);

//# sourceMappingURL=cljs_time.coerce.js.map
