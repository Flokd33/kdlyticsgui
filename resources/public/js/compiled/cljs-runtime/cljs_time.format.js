goog.provide('cljs_time.format');
goog.require('cljs.core');
goog.require('cljs_time.internal.core');
goog.require('cljs_time.internal.parse');
goog.require('cljs_time.internal.unparse');
goog.require('cljs_time.core');
goog.require('clojure.set');
goog.require('goog.date.duration');
cljs_time.format.months = cljs_time.internal.core.months;
cljs_time.format.days = cljs_time.internal.core.days;
cljs_time.format.skip_timezone_formatter = (function cljs_time$format$skip_timezone_formatter(){
return new cljs.core.PersistentArrayMap(null, 2, ["Z",cljs.core.constantly(""),"ZZ",cljs.core.constantly("")], null);
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
cljs_time.format.Formatter = (function (format_str,overrides,default_year,timezone,__meta,__extmap,__hash){
this.format_str = format_str;
this.overrides = overrides;
this.default_year = default_year;
this.timezone = timezone;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs_time.format.Formatter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs_time.format.Formatter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k56025,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__56040 = k56025;
var G__56040__$1 = (((G__56040 instanceof cljs.core.Keyword))?G__56040.fqn:null);
switch (G__56040__$1) {
case "format-str":
return self__.format_str;

break;
case "overrides":
return self__.overrides;

break;
case "default-year":
return self__.default_year;

break;
case "timezone":
return self__.timezone;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56025,else__4383__auto__);

}
}));

(cljs_time.format.Formatter.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__56043){
var vec__56044 = p__56043;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56044,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56044,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs_time.format.Formatter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs-time.format.Formatter{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"format-str","format-str",695206156),self__.format_str],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"overrides","overrides",1738628867),self__.overrides],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"default-year","default-year",1658037695),self__.default_year],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timezone","timezone",1831928099),self__.timezone],null))], null),self__.__extmap));
}));

(cljs_time.format.Formatter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56024){
var self__ = this;
var G__56024__$1 = this;
return (new cljs.core.RecordIter((0),G__56024__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"format-str","format-str",695206156),new cljs.core.Keyword(null,"overrides","overrides",1738628867),new cljs.core.Keyword(null,"default-year","default-year",1658037695),new cljs.core.Keyword(null,"timezone","timezone",1831928099)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs_time.format.Formatter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs_time.format.Formatter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs_time.format.Formatter(self__.format_str,self__.overrides,self__.default_year,self__.timezone,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs_time.format.Formatter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(cljs_time.format.Formatter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__56059 = (function (coll__4377__auto__){
return (-987738732 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__56059(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs_time.format.Formatter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56026,other56027){
var self__ = this;
var this56026__$1 = this;
return (((!((other56027 == null)))) && ((this56026__$1.constructor === other56027.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56026__$1.format_str,other56027.format_str)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56026__$1.overrides,other56027.overrides)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56026__$1.default_year,other56027.default_year)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56026__$1.timezone,other56027.timezone)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56026__$1.__extmap,other56027.__extmap)));
}));

(cljs_time.format.Formatter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"timezone","timezone",1831928099),null,new cljs.core.Keyword(null,"overrides","overrides",1738628867),null,new cljs.core.Keyword(null,"format-str","format-str",695206156),null,new cljs.core.Keyword(null,"default-year","default-year",1658037695),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs_time.format.Formatter(self__.format_str,self__.overrides,self__.default_year,self__.timezone,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs_time.format.Formatter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__56024){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__56065 = cljs.core.keyword_identical_QMARK_;
var expr__56066 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__56068 = new cljs.core.Keyword(null,"format-str","format-str",695206156);
var G__56069 = expr__56066;
return (pred__56065.cljs$core$IFn$_invoke$arity$2 ? pred__56065.cljs$core$IFn$_invoke$arity$2(G__56068,G__56069) : pred__56065.call(null,G__56068,G__56069));
})())){
return (new cljs_time.format.Formatter(G__56024,self__.overrides,self__.default_year,self__.timezone,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__56070 = new cljs.core.Keyword(null,"overrides","overrides",1738628867);
var G__56071 = expr__56066;
return (pred__56065.cljs$core$IFn$_invoke$arity$2 ? pred__56065.cljs$core$IFn$_invoke$arity$2(G__56070,G__56071) : pred__56065.call(null,G__56070,G__56071));
})())){
return (new cljs_time.format.Formatter(self__.format_str,G__56024,self__.default_year,self__.timezone,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__56072 = new cljs.core.Keyword(null,"default-year","default-year",1658037695);
var G__56073 = expr__56066;
return (pred__56065.cljs$core$IFn$_invoke$arity$2 ? pred__56065.cljs$core$IFn$_invoke$arity$2(G__56072,G__56073) : pred__56065.call(null,G__56072,G__56073));
})())){
return (new cljs_time.format.Formatter(self__.format_str,self__.overrides,G__56024,self__.timezone,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__56074 = new cljs.core.Keyword(null,"timezone","timezone",1831928099);
var G__56075 = expr__56066;
return (pred__56065.cljs$core$IFn$_invoke$arity$2 ? pred__56065.cljs$core$IFn$_invoke$arity$2(G__56074,G__56075) : pred__56065.call(null,G__56074,G__56075));
})())){
return (new cljs_time.format.Formatter(self__.format_str,self__.overrides,self__.default_year,G__56024,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.format.Formatter(self__.format_str,self__.overrides,self__.default_year,self__.timezone,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__56024),null));
}
}
}
}
}));

(cljs_time.format.Formatter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"format-str","format-str",695206156),self__.format_str,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"overrides","overrides",1738628867),self__.overrides,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"default-year","default-year",1658037695),self__.default_year,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"timezone","timezone",1831928099),self__.timezone,null))], null),self__.__extmap));
}));

(cljs_time.format.Formatter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__56024){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs_time.format.Formatter(self__.format_str,self__.overrides,self__.default_year,self__.timezone,G__56024,self__.__extmap,self__.__hash));
}));

(cljs_time.format.Formatter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs_time.format.Formatter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"format-str","format-str",-1959229613,null),new cljs.core.Symbol(null,"overrides","overrides",-915806902,null),new cljs.core.Symbol(null,"default-year","default-year",-996398074,null),new cljs.core.Symbol(null,"timezone","timezone",-822507670,null)], null);
}));

(cljs_time.format.Formatter.cljs$lang$type = true);

(cljs_time.format.Formatter.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs-time.format/Formatter",null,(1),null));
}));

(cljs_time.format.Formatter.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs-time.format/Formatter");
}));

/**
 * Positional factory function for cljs-time.format/Formatter.
 */
cljs_time.format.__GT_Formatter = (function cljs_time$format$__GT_Formatter(format_str,overrides,default_year,timezone){
return (new cljs_time.format.Formatter(format_str,overrides,default_year,timezone,null,null,null));
});

/**
 * Factory function for cljs-time.format/Formatter, taking a map of keywords to field values.
 */
cljs_time.format.map__GT_Formatter = (function cljs_time$format$map__GT_Formatter(G__56028){
var extmap__4419__auto__ = (function (){var G__56078 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56028,new cljs.core.Keyword(null,"format-str","format-str",695206156),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"overrides","overrides",1738628867),new cljs.core.Keyword(null,"default-year","default-year",1658037695),new cljs.core.Keyword(null,"timezone","timezone",1831928099)], 0));
if(cljs.core.record_QMARK_(G__56028)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56078);
} else {
return G__56078;
}
})();
return (new cljs_time.format.Formatter(new cljs.core.Keyword(null,"format-str","format-str",695206156).cljs$core$IFn$_invoke$arity$1(G__56028),new cljs.core.Keyword(null,"overrides","overrides",1738628867).cljs$core$IFn$_invoke$arity$1(G__56028),new cljs.core.Keyword(null,"default-year","default-year",1658037695).cljs$core$IFn$_invoke$arity$1(G__56028),new cljs.core.Keyword(null,"timezone","timezone",1831928099).cljs$core$IFn$_invoke$arity$1(G__56028),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs_time.format.formatter = (function cljs_time$format$formatter(var_args){
var G__56087 = arguments.length;
switch (G__56087) {
case 1:
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1 = (function (fmts){
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$2(fmts,cljs_time.core.utc);
}));

(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$2 = (function (fmts,dtz){
return cljs_time.format.map__GT_Formatter(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"format-str","format-str",695206156),fmts,new cljs.core.Keyword(null,"timezone","timezone",1831928099),dtz], null));
}));

(cljs_time.format.formatter.cljs$lang$maxFixedArity = 2);

cljs_time.format.formatter_local = (function cljs_time$format$formatter_local(fmts){
return cljs_time.format.map__GT_Formatter(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"format-str","format-str",695206156),fmts,new cljs.core.Keyword(null,"overrides","overrides",1738628867),cljs_time.format.skip_timezone_formatter()], null));
});
/**
 * Return a copy of a formatter that uses the given default year.
 */
cljs_time.format.with_default_year = (function cljs_time$format$with_default_year(f,default_year){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"default-year","default-year",1658037695),default_year);
});
cljs_time.format.not_implemented = (function cljs_time$format$not_implemented(sym){
return (function (){
throw ({"name": new cljs.core.Keyword(null,"not-implemented","not-implemented",1918806714), "message": cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%s not implemented yet",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sym)], 0))});
});
});
/**
 * **Note: not all formatters have been implemented yet.**
 * 
 *   Map of ISO 8601 and a single RFC 822 formatters that can be used
 *   for parsing and, in most cases, printing.
 *   
 *   Note: due to current implementation limitations, timezone information
 *   cannot be kept. Although the correct offset will be applied to UTC
 *   time if supplied.
 * 
 *   The pattern syntax is mostly compatible with java.text.SimpleDateFormat -
 *   time zone names cannot be parsed and a few more symbols are supported. All
 *   ASCII letters are reserved as pattern letters, which are defined as follows:
 * 
 * ```
 *  Symbol  Meaning                      Presentation  Examples
 *  ------  -------                      ------------  -------
 *  G       era                          text          AD
 *  C       century of era (>=0)         number        20
 *  Y       year of era (>=0)            year          1996
 * 
 *  x       weekyear                     year          1996
 *  w       week of weekyear             number        27
 *  e       day of week                  number        2
 *  E       day of week                  text          Tuesday; Tue
 * 
 *  y       year                         year          1996
 *  D       day of year                  number        189
 *  M       month of year                month         July; Jul; 07
 *  d       day of month                 number        10
 * 
 *  a       halfday of day               text          PM
 *  K       hour of halfday (0~11)       number        0
 *  h       clockhour of halfday (1~12)  number        12
 * 
 *  H       hour of day (0~23)           number        0
 *  k       clockhour of day (1~24)      number        24
 *  m       minute of hour               number        30
 *  s       second of minute             number        55
 *  S       fraction of second           number        978
 *  a       meridiem                     text          am; pm
 *  A       meridiem                     text          AM; PM
 * 
 *  z       time zone                    text          Pacific Standard Time; PST
 *  Z       time zone offset/id          zone          -0800; -08:00; America/Los_Angeles
 * 
 *  '       escape for text              delimiter
 *  ''      single quote                 literal       '
 * 
 *  cljs-time additions:
 *  ------  -------                      ------------  -------
 *  Symbol  Meaning                      Presentation  Examples
 *  ------  -------                      ------------  -------
 *  o       ordinal suffix               text          st nd rd th (E.G., 1st, 2nd, 3rd, 4th)
 * ```
 * 
 *   The count of pattern letters determine the format.
 * 
 *   **Text:** If the number of pattern letters is 4 or more, the full form is used;
 *   otherwise a short or abbreviated form is used if available.
 * 
 *   **Number:** The minimum number of digits. Shorter numbers are zero-padded to this
 *   amount.
 * 
 *   **Year:** Numeric presentation for year and weekyear fields are handled
 *   specially. For example, if the count of `y` is 2, the year will be displayed
 *   as the zero-based year of the century, which is two digits.
 * 
 *   **Month:** 3 or over, use text, otherwise use number.
 * 
 *   **Zone:** `Z` outputs offset without a colon, `ZZ` outputs the offset with a
 *   colon, `ZZZ` or more outputs the zone id.
 * 
 *   **Zone names:** Time zone names ('z') cannot be parsed.
 * 
 *   Any characters in the pattern that are not in the ranges of `['a'..'z']` and
 *   `['A'..'Z']` will be treated as quoted text. For instance, characters like `:`,
 *   `.`, `<space>`, `#` and `?` will appear in the resulting time text even they are
 *   not embraced within single quotes.
 */
cljs_time.format.formatters = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"date-element-parser","date-element-parser",2072167040),new cljs.core.Keyword(null,"hour-minute","hour-minute",-1164421312),new cljs.core.Keyword(null,"t-time","t-time",-42016318),new cljs.core.Keyword(null,"basic-ordinal-date","basic-ordinal-date",243220162),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"hour","hour",-555989214),new cljs.core.Keyword(null,"time-no-ms","time-no-ms",870271683),new cljs.core.Keyword(null,"weekyear-week-day","weekyear-week-day",-740233533),new cljs.core.Keyword(null,"week-date-time","week-date-time",540228836),new cljs.core.Keyword(null,"date-hour-minute-second-fraction","date-hour-minute-second-fraction",1937143076),new cljs.core.Keyword(null,"basic-date-time","basic-date-time",1525413604),new cljs.core.Keyword(null,"date-time","date-time",177938180),new cljs.core.Keyword(null,"basic-time-no-ms","basic-time-no-ms",-1720654076),new cljs.core.Keyword(null,"date-parser","date-parser",-981534587),new cljs.core.Keyword(null,"basic-week-date","basic-week-date",1775847845),new cljs.core.Keyword(null,"basic-t-time-no-ms","basic-t-time-no-ms",-424650106),new cljs.core.Keyword(null,"local-time","local-time",-1873195290),new cljs.core.Keyword(null,"date-time-no-ms","date-time-no-ms",1655953671),new cljs.core.Keyword(null,"year-month-day","year-month-day",-415594169),new cljs.core.Keyword(null,"date-opt-time","date-opt-time",-1507102105),new cljs.core.Keyword(null,"rfc822","rfc822",-404628697),new cljs.core.Keyword(null,"date-hour-minute-second-ms","date-hour-minute-second-ms",-425334775),new cljs.core.Keyword(null,"basic-ordinal-date-time","basic-ordinal-date-time",1054564521),new cljs.core.Keyword(null,"ordinal-date","ordinal-date",-77899447),new cljs.core.Keyword(null,"hour-minute-second-fraction","hour-minute-second-fraction",-1253038551),new cljs.core.Keyword(null,"date-hour-minute","date-hour-minute",1629918346),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"basic-week-date-time","basic-week-date-time",-502077622),new cljs.core.Keyword(null,"weekyear","weekyear",-74064500),new cljs.core.Keyword(null,"basic-time","basic-time",-923134899),new cljs.core.Keyword(null,"hour-minute-second","hour-minute-second",-1906654770),new cljs.core.Keyword(null,"ordinal-date-time","ordinal-date-time",-1386753458),new cljs.core.Keyword(null,"ordinal-date-time-no-ms","ordinal-date-time-no-ms",-1539005490),new cljs.core.Keyword(null,"hour-minute-second-ms","hour-minute-second-ms",1209749775),new cljs.core.Keyword(null,"time-parser","time-parser",-1636511536),new cljs.core.Keyword(null,"date-time-parser","date-time-parser",-656147568),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"t-time-no-ms","t-time-no-ms",990689905),new cljs.core.Keyword(null,"basic-week-date-time-no-ms","basic-week-date-time-no-ms",-2043113679),new cljs.core.Keyword(null,"basic-date","basic-date",1566551506),new cljs.core.Keyword(null,"weekyear-week","weekyear-week",795291571),new cljs.core.Keyword(null,"local-date","local-date",1829761428),new cljs.core.Keyword(null,"basic-ordinal-date-time-no-ms","basic-ordinal-date-time-no-ms",-395135436),new cljs.core.Keyword(null,"year-month","year-month",735283381),new cljs.core.Keyword(null,"local-date-opt-time","local-date-opt-time",1178432599),new cljs.core.Keyword(null,"week-date","week-date",-1176745129),new cljs.core.Keyword(null,"date-hour","date-hour",-344234471),new cljs.core.Keyword(null,"time-element-parser","time-element-parser",-2042883205),new cljs.core.Keyword(null,"date-hour-minute-second","date-hour-minute-second",-1565419364),new cljs.core.Keyword(null,"week-date-time-no-ms","week-date-time-no-ms",-1226853060),new cljs.core.Keyword(null,"basic-date-time-no-ms","basic-date-time-no-ms",-899402179),new cljs.core.Keyword(null,"mysql","mysql",-1431590210),new cljs.core.Keyword(null,"basic-t-time","basic-t-time",191791391)],[cljs_time.format.not_implemented(new cljs.core.Symbol(null,"dateElementParser","dateElementParser",984800945,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HHmmssZ"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"dateParser","dateParser",-1248418930,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HHmmssZ"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"localTimeParser","localTimeParser",-1738135328,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"dateOptionalTimeParser","dateOptionalTimeParser",1783230854,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("EEE, dd MMM yyyy HH:mm:ss Z"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"timeParser","timeParser",1585048034,null)),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"dateTimeParser","dateTimeParser",-1493718282,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"localDateParser","localDateParser",477820077,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"localDateOptionalTimeParser","localDateOptionalTimeParser",435955537,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"timeElementParser","timeElementParser",302132553,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HHmmss.SSSZ")]);
cljs_time.format.parsers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"date-element-parser","date-element-parser",2072167040),null,new cljs.core.Keyword(null,"date-parser","date-parser",-981534587),null,new cljs.core.Keyword(null,"local-time","local-time",-1873195290),null,new cljs.core.Keyword(null,"date-opt-time","date-opt-time",-1507102105),null,new cljs.core.Keyword(null,"time-parser","time-parser",-1636511536),null,new cljs.core.Keyword(null,"date-time-parser","date-time-parser",-656147568),null,new cljs.core.Keyword(null,"local-date","local-date",1829761428),null,new cljs.core.Keyword(null,"local-date-opt-time","local-date-opt-time",1178432599),null,new cljs.core.Keyword(null,"time-element-parser","time-element-parser",-2042883205),null], null), null);
cljs_time.format.printers = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(cljs_time.format.formatters)),cljs_time.format.parsers);
/**
 * Returns a DateTime instance in the UTC time zone obtained by parsing the
 *   given string according to the given formatter.
 */
cljs_time.format.parse = (function cljs_time$format$parse(var_args){
var G__56094 = arguments.length;
switch (G__56094) {
case 2:
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2 = (function (fmt,s){
return cljs_time.internal.parse.compile(new cljs.core.Keyword(null,"goog.date.UtcDateTime","goog.date.UtcDateTime",731790075),fmt,cljs_time.internal.parse.parse(new cljs.core.Keyword(null,"format-str","format-str",695206156).cljs$core$IFn$_invoke$arity$1(fmt),s));
}));

(cljs_time.format.parse.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.first((function (){var iter__4529__auto__ = (function cljs_time$format$iter__56095(s__56096){
return (new cljs.core.LazySeq(null,(function (){
var s__56096__$1 = s__56096;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56096__$1);
if(temp__5735__auto__){
var s__56096__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56096__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__56096__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__56098 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__56097 = (0);
while(true){
if((i__56097 < size__4528__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__56097);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e56099){var _ = e56099;
return null;
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__56098,d);

var G__56231 = (i__56097 + (1));
i__56097 = G__56231;
continue;
} else {
var G__56232 = (i__56097 + (1));
i__56097 = G__56232;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56098),cljs_time$format$iter__56095(cljs.core.chunk_rest(s__56096__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56098),null);
}
} else {
var f = cljs.core.first(s__56096__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e56101){var _ = e56101;
return null;
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$format$iter__56095(cljs.core.rest(s__56096__$2)));
} else {
var G__56233 = cljs.core.rest(s__56096__$2);
s__56096__$1 = G__56233;
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
}));

(cljs_time.format.parse.cljs$lang$maxFixedArity = 2);

/**
 * Returns a local DateTime instance obtained by parsing the
 *   given string according to the given formatter.
 */
cljs_time.format.parse_local = (function cljs_time$format$parse_local(var_args){
var G__56103 = arguments.length;
switch (G__56103) {
case 2:
return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2 = (function (fmt,s){
return cljs_time.internal.parse.compile(new cljs.core.Keyword(null,"goog.date.DateTime","goog.date.DateTime",515178675),fmt,cljs_time.internal.parse.parse(new cljs.core.Keyword(null,"format-str","format-str",695206156).cljs$core$IFn$_invoke$arity$1(fmt),s));
}));

(cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.first((function (){var iter__4529__auto__ = (function cljs_time$format$iter__56104(s__56105){
return (new cljs.core.LazySeq(null,(function (){
var s__56105__$1 = s__56105;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56105__$1);
if(temp__5735__auto__){
var s__56105__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56105__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__56105__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__56107 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__56106 = (0);
while(true){
if((i__56106 < size__4528__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__56106);
var d = (function (){try{return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e56109){if((e56109 instanceof Error)){
var _ = e56109;
return null;
} else {
throw e56109;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__56107,d);

var G__56249 = (i__56106 + (1));
i__56106 = G__56249;
continue;
} else {
var G__56250 = (i__56106 + (1));
i__56106 = G__56250;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56107),cljs_time$format$iter__56104(cljs.core.chunk_rest(s__56105__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56107),null);
}
} else {
var f = cljs.core.first(s__56105__$2);
var d = (function (){try{return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e56111){if((e56111 instanceof Error)){
var _ = e56111;
return null;
} else {
throw e56111;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$format$iter__56104(cljs.core.rest(s__56105__$2)));
} else {
var G__56251 = cljs.core.rest(s__56105__$2);
s__56105__$1 = G__56251;
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
}));

(cljs_time.format.parse_local.cljs$lang$maxFixedArity = 2);

/**
 * Returns a local Date instance obtained by parsing the
 *   given string according to the given formatter.
 */
cljs_time.format.parse_local_date = (function cljs_time$format$parse_local_date(var_args){
var G__56117 = arguments.length;
switch (G__56117) {
case 2:
return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2 = (function (fmt,s){
return cljs_time.internal.parse.compile(new cljs.core.Keyword(null,"goog.date.Date","goog.date.Date",1041074644),fmt,cljs_time.internal.parse.parse(new cljs.core.Keyword(null,"format-str","format-str",695206156).cljs$core$IFn$_invoke$arity$1(fmt),s));
}));

(cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.first((function (){var iter__4529__auto__ = (function cljs_time$format$iter__56122(s__56123){
return (new cljs.core.LazySeq(null,(function (){
var s__56123__$1 = s__56123;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56123__$1);
if(temp__5735__auto__){
var s__56123__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56123__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__56123__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__56125 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__56124 = (0);
while(true){
if((i__56124 < size__4528__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__56124);
var d = (function (){try{return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e56127){if((e56127 instanceof Error)){
var _ = e56127;
return null;
} else {
throw e56127;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__56125,d);

var G__56259 = (i__56124 + (1));
i__56124 = G__56259;
continue;
} else {
var G__56260 = (i__56124 + (1));
i__56124 = G__56260;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56125),cljs_time$format$iter__56122(cljs.core.chunk_rest(s__56123__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56125),null);
}
} else {
var f = cljs.core.first(s__56123__$2);
var d = (function (){try{return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e56129){if((e56129 instanceof Error)){
var _ = e56129;
return null;
} else {
throw e56129;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$format$iter__56122(cljs.core.rest(s__56123__$2)));
} else {
var G__56261 = cljs.core.rest(s__56123__$2);
s__56123__$1 = G__56261;
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
}));

(cljs_time.format.parse_local_date.cljs$lang$maxFixedArity = 2);

/**
 * Returns a string representing the given DateTime instance in UTC and in the
 * form determined by the given formatter.
 */
cljs_time.format.unparse = (function cljs_time$format$unparse(p__56132,dt){
var map__56133 = p__56132;
var map__56133__$1 = (((((!((map__56133 == null))))?(((((map__56133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56133):map__56133);
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56133__$1,new cljs.core.Keyword(null,"format-str","format-str",695206156));
var formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56133__$1,new cljs.core.Keyword(null,"formatters","formatters",-1875637118));
if((!((dt == null)))){
} else {
throw (new Error("Assert failed: (not (nil? dt))"));
}

if((dt instanceof goog.date.Date)){
} else {
throw (new Error("Assert failed: (instance? goog.date.Date dt)"));
}

return cljs_time.internal.unparse.unparse(format_str,dt);
});
/**
 * Returns a string representing the given local DateTime instance in the
 *   form determined by the given formatter.
 */
cljs_time.format.unparse_local = (function cljs_time$format$unparse_local(p__56139,dt){
var map__56141 = p__56139;
var map__56141__$1 = (((((!((map__56141 == null))))?(((((map__56141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56141):map__56141);
var fmt = map__56141__$1;
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56141__$1,new cljs.core.Keyword(null,"format-str","format-str",695206156));
var formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56141__$1,new cljs.core.Keyword(null,"formatters","formatters",-1875637118));
if((!((dt == null)))){
} else {
throw (new Error("Assert failed: (not (nil? dt))"));
}

if((dt instanceof goog.date.DateTime)){
} else {
throw (new Error("Assert failed: (instance? goog.date.DateTime dt)"));
}

return cljs_time.format.unparse(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fmt,new cljs.core.Keyword(null,"overrides","overrides",1738628867),cljs_time.format.skip_timezone_formatter()),dt);
});
/**
 * Returns a string representing the given local Date instance in the form
 *   determined by the given formatter.
 */
cljs_time.format.unparse_local_date = (function cljs_time$format$unparse_local_date(p__56146,dt){
var map__56147 = p__56146;
var map__56147__$1 = (((((!((map__56147 == null))))?(((((map__56147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56147):map__56147);
var fmt = map__56147__$1;
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56147__$1,new cljs.core.Keyword(null,"format-str","format-str",695206156));
var formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56147__$1,new cljs.core.Keyword(null,"formatters","formatters",-1875637118));
if((!((dt == null)))){
} else {
throw (new Error("Assert failed: (not (nil? dt))"));
}

if((dt instanceof goog.date.Date)){
} else {
throw (new Error("Assert failed: (instance? goog.date.Date dt)"));
}

return cljs_time.format.unparse(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fmt,new cljs.core.Keyword(null,"overrides","overrides",1738628867),cljs_time.format.skip_timezone_formatter()),dt);
});
/**
 * Shows how a given DateTime, or by default the current time, would be
 * formatted with each of the available printing formatters.
 */
cljs_time.format.show_formatters = (function cljs_time$format$show_formatters(var_args){
var G__56154 = arguments.length;
switch (G__56154) {
case 0:
return cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$1(cljs_time.core.now());
}));

(cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$1 = (function (dt){
var seq__56162 = cljs.core.seq(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs_time.format.printers));
var chunk__56163 = null;
var count__56164 = (0);
var i__56165 = (0);
while(true){
if((i__56165 < count__56164)){
var p = chunk__56163.cljs$core$IIndexed$_nth$arity$2(null,i__56165);
var fmt_56277 = (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(p) : cljs_time.format.formatters.call(null,p));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%-40s%s\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p,cljs_time.format.unparse(fmt_56277,dt)], 0))], 0));


var G__56278 = seq__56162;
var G__56279 = chunk__56163;
var G__56280 = count__56164;
var G__56281 = (i__56165 + (1));
seq__56162 = G__56278;
chunk__56163 = G__56279;
count__56164 = G__56280;
i__56165 = G__56281;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56162);
if(temp__5735__auto__){
var seq__56162__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56162__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56162__$1);
var G__56282 = cljs.core.chunk_rest(seq__56162__$1);
var G__56283 = c__4556__auto__;
var G__56284 = cljs.core.count(c__4556__auto__);
var G__56285 = (0);
seq__56162 = G__56282;
chunk__56163 = G__56283;
count__56164 = G__56284;
i__56165 = G__56285;
continue;
} else {
var p = cljs.core.first(seq__56162__$1);
var fmt_56286 = (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(p) : cljs_time.format.formatters.call(null,p));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%-40s%s\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p,cljs_time.format.unparse(fmt_56286,dt)], 0))], 0));


var G__56287 = cljs.core.next(seq__56162__$1);
var G__56288 = null;
var G__56289 = (0);
var G__56290 = (0);
seq__56162 = G__56287;
chunk__56163 = G__56288;
count__56164 = G__56289;
i__56165 = G__56290;
continue;
}
} else {
return null;
}
}
break;
}
}));

(cljs_time.format.show_formatters.cljs$lang$maxFixedArity = 1);


/**
 * @interface
 */
cljs_time.format.Mappable = function(){};

var cljs_time$format$Mappable$instant__GT_map$dyn_56291 = (function (instant){
var x__4428__auto__ = (((instant == null))?null:instant);
var m__4429__auto__ = (cljs_time.format.instant__GT_map[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(instant) : m__4429__auto__.call(null,instant));
} else {
var m__4426__auto__ = (cljs_time.format.instant__GT_map["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(instant) : m__4426__auto__.call(null,instant));
} else {
throw cljs.core.missing_protocol("Mappable.instant->map",instant);
}
}
});
/**
 * Returns a map representation of the given instant.
 *                        It will contain the following keys: :years, :months,
 *                        :days, :hours, :minutes and :seconds.
 */
cljs_time.format.instant__GT_map = (function cljs_time$format$instant__GT_map(instant){
if((((!((instant == null)))) && ((!((instant.cljs_time$format$Mappable$instant__GT_map$arity$1 == null)))))){
return instant.cljs_time$format$Mappable$instant__GT_map$arity$1(instant);
} else {
return cljs_time$format$Mappable$instant__GT_map$dyn_56291(instant);
}
});

/**
 * Accepts a Period or Interval and outputs an absolute duration time
 *   in form of "1 day", "2 hours", "20 minutes", "2 days 1 hour
 *   15 minutes" etc.
 */
cljs_time.format.unparse_duration = (function cljs_time$format$unparse_duration(duration){
var G__56176 = cljs_time.core.in_millis(duration);
return goog.date.duration.format(G__56176);
});
cljs_time.format.to_map = (function cljs_time$format$to_map(years,months,days,hours,minutes,seconds,millis){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"years","years",-1298579689),years,new cljs.core.Keyword(null,"months","months",-45571637),months,new cljs.core.Keyword(null,"days","days",-1394072564),days,new cljs.core.Keyword(null,"hours","hours",58380855),hours,new cljs.core.Keyword(null,"minutes","minutes",1319166394),minutes,new cljs.core.Keyword(null,"seconds","seconds",-445266194),seconds,new cljs.core.Keyword(null,"millis","millis",-1338288387),millis], null);
});
(goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (dt){
var dt__$1 = this;
return cljs_time.format.to_map(dt__$1.getYear(),(dt__$1.getMonth() + (1)),dt__$1.getDate(),dt__$1.getHours(),dt__$1.getMinutes(),dt__$1.getSeconds(),dt__$1.getMilliseconds());
}));

(cljs_time.core.Period.prototype.cljs_time$format$Mappable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs_time.core.Period.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
return cljs_time.core.__GT_period(m__$1);
}));

(cljs_time.core.Interval.prototype.cljs_time$format$Mappable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs_time.core.Interval.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
return cljs_time.core.__GT_period(m__$1);
}));

(cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
var G__56188 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1));
var G__56188__$1 = (((G__56188 instanceof cljs.core.Keyword))?G__56188.fqn:null);
switch (G__56188__$1) {
case "cljs-time.core/period":
return m__$1;

break;
case "cljs-time.core/interval":
return cljs_time.core.__GT_period(m__$1);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56188__$1)].join('')));

}
}));

//# sourceMappingURL=cljs_time.format.js.map
