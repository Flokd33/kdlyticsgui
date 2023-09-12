goog.provide('kdlyticsgui.tools');
var module$node_modules$react_vega$lib$index=shadow.js.require("module$node_modules$react_vega$lib$index", {});
kdlyticsgui.tools.vega_lite = (function kdlyticsgui$tools$vega_lite(spec){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$react_vega$lib$index.VegaLite,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),spec], null))], null);
});
kdlyticsgui.tools.int__GT_gdate = (function kdlyticsgui$tools$int__GT_gdate(x){
return (new goog.date.UtcDateTime.fromIsoString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)));
});
kdlyticsgui.tools.gdate__GT_yyyyMMdd = (function kdlyticsgui$tools$gdate__GT_yyyyMMdd(x){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(x.toString(),(0),(8));
});
kdlyticsgui.tools.gdate__GT_yyyy_MM_dd = (function kdlyticsgui$tools$gdate__GT_yyyy_MM_dd(x){
var a = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(x.toString(),(0),(8));
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(a,(0),(4)),"-",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(a,(4),(6)),"-",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(a,(6),(8))].join('');
});
kdlyticsgui.tools.ddMMMyyyy__GT_gdate = (function kdlyticsgui$tools$ddMMMyyyy__GT_gdate(x){
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("dd MMMyyyy"),[cljs.core.subs.cljs$core$IFn$_invoke$arity$3(x,(0),(2))," ",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(x,(2))].join(''));
});
kdlyticsgui.tools.gdate__GT_ddMMMyy = (function kdlyticsgui$tools$gdate__GT_ddMMMyy(x){
return cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("ddMMMyy"),x);
});
kdlyticsgui.tools.gdate__GT_MMM_yy = (function kdlyticsgui$tools$gdate__GT_MMM_yy(x){
return cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("MMM-yy"),x);
});
kdlyticsgui.tools.int__GT_dd_MM_yyyy = (function kdlyticsgui$tools$int__GT_dd_MM_yyyy(x){
var sx = cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(sx,(6),(8)),"-",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(sx,(4),(6)),"-",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(sx,(0),(4))].join('');
});
kdlyticsgui.tools.filterkey_EQ_ = (function kdlyticsgui$tools$filterkey_EQ_(k,v,coll){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__34425_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__34425_SHARP_,k),v);
}),coll);
});
/**
 * Chain filter (boolean AND). Defaults to equality if predicate is not a function.
 *   example: (chainfilter {:portfolio #(= % "OGEMCORD") :weight pos?} @positions)
 *   equivalent to (chainfilter {:portfolio "OGEMCORD" :weight pos?} @positions)
 */
kdlyticsgui.tools.chainfilter = (function kdlyticsgui$tools$chainfilter(m,coll){
return cljs.core.reduce_kv((function (erg,k,pred){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__34426_SHARP_){
if(cljs.core.fn_QMARK_(pred)){
var G__34427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__34426_SHARP_,k);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__34427) : pred.call(null,G__34427));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__34426_SHARP_,k));
}
}),erg);
}),coll,m);
});
/**
 * Much less memory hungry, and faster too
 */
kdlyticsgui.tools.vector_of_maps__GT_csv_atomic = (function kdlyticsgui$tools$vector_of_maps__GT_csv_atomic(var_args){
var G__34430 = arguments.length;
switch (G__34430) {
case 1:
return kdlyticsgui.tools.vector_of_maps__GT_csv_atomic.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return kdlyticsgui.tools.vector_of_maps__GT_csv_atomic.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return kdlyticsgui.tools.vector_of_maps__GT_csv_atomic.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kdlyticsgui.tools.vector_of_maps__GT_csv_atomic.cljs$core$IFn$_invoke$arity$1 = (function (vector_of_maps){
return kdlyticsgui.tools.vector_of_maps__GT_csv_atomic.cljs$core$IFn$_invoke$arity$2(vector_of_maps,cljs.core.keys(cljs.core.last(vector_of_maps)));
}));

(kdlyticsgui.tools.vector_of_maps__GT_csv_atomic.cljs$core$IFn$_invoke$arity$2 = (function (vector_of_maps,cols){
return kdlyticsgui.tools.vector_of_maps__GT_csv_atomic.cljs$core$IFn$_invoke$arity$3(vector_of_maps,cols,",");
}));

(kdlyticsgui.tools.vector_of_maps__GT_csv_atomic.cljs$core$IFn$_invoke$arity$3 = (function (vector_of_maps,cols,sep){
var res = cljs.core.atom.cljs$core$IFn$_invoke$arity$1([clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cols)),"\n"].join(''));
var seq__34431_34441 = cljs.core.seq(vector_of_maps);
var chunk__34432_34442 = null;
var count__34433_34443 = (0);
var i__34434_34444 = (0);
while(true){
if((i__34434_34444 < count__34433_34443)){
var line_34445 = chunk__34432_34442.cljs$core$IIndexed$_nth$arity$2(null,i__34434_34444);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(res,cljs.core.str,clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__34431_34441,chunk__34432_34442,count__34433_34443,i__34434_34444,line_34445,res){
return (function (p1__34428_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(line_34445,p1__34428_SHARP_);
});})(seq__34431_34441,chunk__34432_34442,count__34433_34443,i__34434_34444,line_34445,res))
,cols)),"\n");


var G__34450 = seq__34431_34441;
var G__34451 = chunk__34432_34442;
var G__34452 = count__34433_34443;
var G__34453 = (i__34434_34444 + (1));
seq__34431_34441 = G__34450;
chunk__34432_34442 = G__34451;
count__34433_34443 = G__34452;
i__34434_34444 = G__34453;
continue;
} else {
var temp__5804__auto___34454 = cljs.core.seq(seq__34431_34441);
if(temp__5804__auto___34454){
var seq__34431_34455__$1 = temp__5804__auto___34454;
if(cljs.core.chunked_seq_QMARK_(seq__34431_34455__$1)){
var c__5568__auto___34456 = cljs.core.chunk_first(seq__34431_34455__$1);
var G__34457 = cljs.core.chunk_rest(seq__34431_34455__$1);
var G__34458 = c__5568__auto___34456;
var G__34459 = cljs.core.count(c__5568__auto___34456);
var G__34460 = (0);
seq__34431_34441 = G__34457;
chunk__34432_34442 = G__34458;
count__34433_34443 = G__34459;
i__34434_34444 = G__34460;
continue;
} else {
var line_34461 = cljs.core.first(seq__34431_34455__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(res,cljs.core.str,clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__34431_34441,chunk__34432_34442,count__34433_34443,i__34434_34444,line_34461,seq__34431_34455__$1,temp__5804__auto___34454,res){
return (function (p1__34428_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(line_34461,p1__34428_SHARP_);
});})(seq__34431_34441,chunk__34432_34442,count__34433_34443,i__34434_34444,line_34461,seq__34431_34455__$1,temp__5804__auto___34454,res))
,cols)),"\n");


var G__34462 = cljs.core.next(seq__34431_34455__$1);
var G__34463 = null;
var G__34464 = (0);
var G__34465 = (0);
seq__34431_34441 = G__34462;
chunk__34432_34442 = G__34463;
count__34433_34443 = G__34464;
i__34434_34444 = G__34465;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(res);
}));

(kdlyticsgui.tools.vector_of_maps__GT_csv_atomic.cljs$lang$maxFixedArity = 3);

/**
 * This creates a temporary download link
 */
kdlyticsgui.tools.download_object_as_csv = (function kdlyticsgui$tools$download_object_as_csv(text,export_name){
var data_blob = (new Blob([text],({"type": "text/csv"})));
var link = document.createElement("a");
(link.href = URL.createObjectURL(data_blob));

link.setAttribute("download",export_name);

document.body.appendChild(link);

link.click();

return document.body.removeChild(link);
});
kdlyticsgui.tools.csv_link = (function kdlyticsgui$tools$csv_link(var_args){
var G__34436 = arguments.length;
switch (G__34436) {
case 2:
return kdlyticsgui.tools.csv_link.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return kdlyticsgui.tools.csv_link.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return kdlyticsgui.tools.csv_link.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kdlyticsgui.tools.csv_link.cljs$core$IFn$_invoke$arity$2 = (function (data,filename){
return kdlyticsgui.tools.download_object_as_csv(cljs.core.clj__GT_js(kdlyticsgui.tools.vector_of_maps__GT_csv_atomic.cljs$core$IFn$_invoke$arity$1(data)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename),".csv"].join(''));
}));

(kdlyticsgui.tools.csv_link.cljs$core$IFn$_invoke$arity$3 = (function (data,filename,cols){
return kdlyticsgui.tools.csv_link.cljs$core$IFn$_invoke$arity$4(data,filename,cols,",");
}));

(kdlyticsgui.tools.csv_link.cljs$core$IFn$_invoke$arity$4 = (function (data,filename,cols,sep){
return kdlyticsgui.tools.download_object_as_csv(cljs.core.clj__GT_js(kdlyticsgui.tools.vector_of_maps__GT_csv_atomic.cljs$core$IFn$_invoke$arity$3(data,cols,sep)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename),".csv"].join(''));
}));

(kdlyticsgui.tools.csv_link.cljs$lang$maxFixedArity = 4);

kdlyticsgui.tools.copy_to_clipboard = (function kdlyticsgui$tools$copy_to_clipboard(val){
var el = document.createElement("textarea");
(el.value = val);

document.body.appendChild(el);

el.select();

document.execCommand("copy");

return document.body.removeChild(el);
});
kdlyticsgui.tools.semi_bond_modified_duration = (function kdlyticsgui$tools$semi_bond_modified_duration(years,coupon){
var periods = ((2) * years);
var semi_coupon = (0.5 * coupon);
var discount_at_period = (function (n){
return ((1) / Math.pow((semi_coupon + (1)),n));
});
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34437_SHARP_){
return (((0.5 * p1__34437_SHARP_) * semi_coupon) * discount_at_period(p1__34437_SHARP_));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(periods + (1)))),((0.5 * periods) * discount_at_period(periods)))) / (semi_coupon + (1)));
});
/**
 * We care about top ranks, so we replace nil values accordingly
 *   BUGS: some nil comes as Double/NaN which also needs to be filtered for
 */
kdlyticsgui.tools.naive_rank = (function kdlyticsgui$tools$naive_rank(coll,ascending_QMARK_){
var clean_coll = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34438_SHARP_){
if((!((p1__34438_SHARP_ == null)))){
return p1__34438_SHARP_;
} else {
if(cljs.core.truth_(ascending_QMARK_)){
return Infinity;
} else {
return (- Infinity);
}
}
}),coll);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.second),cljs.core.group_by(cljs.core.second,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.sort.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(ascending_QMARK_)?cljs.core._LT_:cljs.core._GT_),clean_coll)))))),clean_coll));
});
/**
 * From https://stackoverflow.com/questions/31656689/how-to-save-img-to-users-local-computer-using-html2canvas
 */
kdlyticsgui.tools.save_png = (function kdlyticsgui$tools$save_png(uri,filename){
var el = document.createElement("a");
(el.href = uri);

(el.download = filename);

document.body.appendChild(el);

el.click();

return document.body.removeChild(el);
});
/**
 * Set `key' in browser's localStorage to `val`.
 */
kdlyticsgui.tools.local_storage_set_item_BANG_ = (function kdlyticsgui$tools$local_storage_set_item_BANG_(key,val){
return window.localStorage.setItem(key,val);
});
/**
 * Returns value of `key' from browser's localStorage.
 */
kdlyticsgui.tools.local_storage_get_item = (function kdlyticsgui$tools$local_storage_get_item(key){
return window.localStorage.getItem(key);
});
/**
 * Remove the browser's localStorage value for the given `key`
 */
kdlyticsgui.tools.local_storage_remove_item_BANG_ = (function kdlyticsgui$tools$local_storage_remove_item_BANG_(key){
return window.localStorage.removeItem(key);
});
kdlyticsgui.tools.nff = (new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL));
kdlyticsgui.tools.nf = (function kdlyticsgui$tools$nf(x){
return kdlyticsgui.tools.nff.format(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
});
kdlyticsgui.tools.round_to_thousand = (function kdlyticsgui$tools$round_to_thousand(x){
return ((1000) * ((x / 1000.0) | (0)));
});
kdlyticsgui.tools.tnfmt = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(kdlyticsgui.tools.nf,kdlyticsgui.tools.round_to_thousand);
kdlyticsgui.tools.not_number_m100_to_100_error_status = (function kdlyticsgui$tools$not_number_m100_to_100_error_status(s){
try{var k = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(s);
if((!(((typeof k === 'number') && (((((-100) <= k)) && ((k <= (100))))))))){
return new cljs.core.Keyword(null,"error","error",-978969032);
} else {
return null;
}
}catch (e34439){var e = e34439;
return new cljs.core.Keyword(null,"error","error",-978969032);
}});
/**
 * ax2 + bx + c = 0. Delta = b2 - 4ac, solution = [-b +/- srqt(delta)] / 2a
 */
kdlyticsgui.tools.new_spread_from_new_price = (function kdlyticsgui$tools$new_spread_from_new_price(target_price,clean_price,current_spread,modified_duration,convexity){
var a = ((convexity * 0.5) * 1.0E-6);
var b = (modified_duration * 1.0E-4);
var c = ((clean_price - target_price) / clean_price);
var delta = ((b * b) - (((4) * a) * c));
var s1 = (((- b) + Math.sqrt(delta)) / ((2) * a));
return (current_spread - s1);
});
kdlyticsgui.tools.rot13 = (function kdlyticsgui$tools$rot13(text){
var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var cipher = cljs.core.zipmap(alphabet,cljs.core.take.cljs$core$IFn$_invoke$arity$2((52),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((13),cljs.core.cycle(alphabet))));
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cipher,text));
});

//# sourceMappingURL=kdlyticsgui.tools.js.map
