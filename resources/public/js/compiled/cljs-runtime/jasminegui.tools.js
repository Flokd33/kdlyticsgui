goog.provide('jasminegui.tools');
goog.require('cljs.core');
jasminegui.tools.int_to_gdate = (function jasminegui$tools$int_to_gdate(x){
return (new goog.date.UtcDateTime.fromIsoString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)));
});
jasminegui.tools.gdate_to_yyyymmdd = (function jasminegui$tools$gdate_to_yyyymmdd(x){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(x.toString(),(0),(8));
});
jasminegui.tools.vector_of_maps__GT_csv = (function jasminegui$tools$vector_of_maps__GT_csv(var_args){
var G__42255 = arguments.length;
switch (G__42255) {
case 1:
return jasminegui.tools.vector_of_maps__GT_csv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jasminegui.tools.vector_of_maps__GT_csv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jasminegui.tools.vector_of_maps__GT_csv.cljs$core$IFn$_invoke$arity$1 = (function (vector_of_maps){
return jasminegui.tools.vector_of_maps__GT_csv.cljs$core$IFn$_invoke$arity$2(vector_of_maps,cljs.core.keys(cljs.core.last(vector_of_maps)));
}));

(jasminegui.tools.vector_of_maps__GT_csv.cljs$core$IFn$_invoke$arity$2 = (function (vector_of_maps,cols){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__42252_SHARP_,p2__42253_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42252_SHARP_),clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(p2__42253_SHARP_,cols)),"\n"].join('');
}),[clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cols)),"\n"].join(''),vector_of_maps);
}));

(jasminegui.tools.vector_of_maps__GT_csv.cljs$lang$maxFixedArity = 2);

jasminegui.tools.download_object_as_csv = (function jasminegui$tools$download_object_as_csv(text,export_name){

var data_blob = (new Blob([text],({"type": "text/csv"})));
var link = document.createElement("a");
(link.href = URL.createObjectURL(data_blob));

link.setAttribute("download",export_name);

document.body.appendChild(link);

link.click();

return document.body.removeChild(link);
});
jasminegui.tools.csv_link = (function jasminegui$tools$csv_link(var_args){
var G__42257 = arguments.length;
switch (G__42257) {
case 2:
return jasminegui.tools.csv_link.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jasminegui.tools.csv_link.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jasminegui.tools.csv_link.cljs$core$IFn$_invoke$arity$2 = (function (data,filename){
return jasminegui.tools.download_object_as_csv(cljs.core.clj__GT_js(jasminegui.tools.vector_of_maps__GT_csv.cljs$core$IFn$_invoke$arity$1(data)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename),".csv"].join(''));
}));

(jasminegui.tools.csv_link.cljs$core$IFn$_invoke$arity$3 = (function (data,filename,cols){
return jasminegui.tools.download_object_as_csv(cljs.core.clj__GT_js(jasminegui.tools.vector_of_maps__GT_csv.cljs$core$IFn$_invoke$arity$2(data,cols)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename),".csv"].join(''));
}));

(jasminegui.tools.csv_link.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=jasminegui.tools.js.map
