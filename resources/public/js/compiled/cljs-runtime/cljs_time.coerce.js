goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('goog.date.UtcDateTime');

/**
 * @interface
 */
cljs_time.coerce.ICoerce = function(){};

/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if((((!((obj == null)))) && ((!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null)))))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
var x__4433__auto__ = (((obj == null))?null:obj);
var m__4434__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__4434__auto__.call(null,obj));
} else {
var m__4431__auto__ = (cljs_time.coerce.to_date_time["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__4431__auto__.call(null,obj));
} else {
throw cljs.core.missing_protocol("ICoerce.to-date-time",obj);
}
}
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__56935 = millis;
if((G__56935 == null)){
return null;
} else {
return (goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1 ? goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1(G__56935) : goog.date.UtcDateTime.fromTimestamp.call(null,G__56935));
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first((function (){var iter__4523__auto__ = (function cljs_time$coerce$from_string_$_iter__56936(s__56937){
return (new cljs.core.LazySeq(null,(function (){
var s__56937__$1 = s__56937;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56937__$1);
if(temp__5735__auto__){
var s__56937__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56937__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__56937__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__56939 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__56938 = (0);
while(true){
if((i__56938 < size__4522__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__56938);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e56940){if((e56940 instanceof Error)){
var _ = e56940;
return null;
} else {
throw e56940;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__56939,d);

var G__56956 = (i__56938 + (1));
i__56938 = G__56956;
continue;
} else {
var G__56957 = (i__56938 + (1));
i__56938 = G__56957;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56939),cljs_time$coerce$from_string_$_iter__56936(cljs.core.chunk_rest(s__56937__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56939),null);
}
} else {
var f = cljs.core.first(s__56937__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e56941){if((e56941 instanceof Error)){
var _ = e56941;
return null;
} else {
throw e56941;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$coerce$from_string_$_iter__56936(cljs.core.rest(s__56937__$2)));
} else {
var G__56958 = cljs.core.rest(s__56937__$2);
s__56937__$1 = G__56958;
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
return iter__4523__auto__(cljs.core.vals(cljs_time.format.formatters));
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
var G__56942 = date;
var G__56942__$1 = (((G__56942 == null))?null:G__56942.getTime());
if((G__56942__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long(G__56942__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__56943 = obj;
var G__56943__$1 = (((G__56943 == null))?null:cljs_time.coerce.to_date_time(G__56943));
if((G__56943__$1 == null)){
return null;
} else {
return G__56943__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var millis = cljs_time.coerce.to_long(obj);
var and__4120__auto__ = millis;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.quot(millis,(1000));
} else {
return and__4120__auto__;
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__56944 = obj;
var G__56944__$1 = (((G__56944 == null))?null:cljs_time.coerce.to_date_time(G__56944));
var G__56944__$2 = (((G__56944__$1 == null))?null:G__56944__$1.getTime());
if((G__56944__$2 == null)){
return null;
} else {
return (new Date(G__56944__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__56945 = obj;
var G__56945__$1 = (((G__56945 == null))?null:cljs_time.coerce.to_date_time(G__56945));
if((G__56945__$1 == null)){
return null;
} else {
return cljs_time.format.unparse(new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__56945__$1);
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
var G__56946 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__56946.setHours(dt.getHours());

G__56946.setMinutes(dt.getMinutes());

G__56946.setSeconds(dt.getSeconds());

G__56946.setMilliseconds(dt.getMilliseconds());

return G__56946;
} else {
return null;
}
} else {
return null;
}
});
goog.object.set(cljs_time.coerce.ICoerce,"null",true);

var G__56947_56959 = cljs_time.coerce.to_date_time;
var G__56948_56960 = "null";
var G__56949_56961 = ((function (G__56947_56959,G__56948_56960){
return (function (_){
return null;
});})(G__56947_56959,G__56948_56960))
;
goog.object.set(G__56947_56959,G__56948_56960,G__56949_56961);

Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date(date__$1);
});

goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
return cljs_time.core.to_utc_time_zone(local_date__$1);
} else {
return null;
}
});

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
return cljs_time.core.to_utc_time_zone(local_date_time__$1);
} else {
return null;
}
});

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
});

goog.object.set(cljs_time.coerce.ICoerce,"number",true);

var G__56950_56962 = cljs_time.coerce.to_date_time;
var G__56951_56963 = "number";
var G__56952_56964 = ((function (G__56950_56962,G__56951_56963){
return (function (long$){
return cljs_time.coerce.from_long(long$);
});})(G__56950_56962,G__56951_56963))
;
goog.object.set(G__56950_56962,G__56951_56963,G__56952_56964);

goog.object.set(cljs_time.coerce.ICoerce,"string",true);

var G__56953_56965 = cljs_time.coerce.to_date_time;
var G__56954_56966 = "string";
var G__56955_56967 = ((function (G__56953_56965,G__56954_56966){
return (function (string){
return cljs_time.coerce.from_string(string);
});})(G__56953_56965,G__56954_56966))
;
goog.object.set(G__56953_56965,G__56954_56966,G__56955_56967);

//# sourceMappingURL=cljs_time.coerce.js.map