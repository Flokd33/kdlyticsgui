goog.provide('jasminegui.tools');
goog.require('cljs.core');
jasminegui.tools.vector_of_maps__GT_csv = (function jasminegui$tools$vector_of_maps__GT_csv(vector_of_maps){
var cols = cljs.core.keys(cljs.core.last(vector_of_maps));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__52675_SHARP_,p2__52676_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__52675_SHARP_),clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(p2__52676_SHARP_,cols)),"\n"].join('');
}),[clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cols)),"\n"].join(''),vector_of_maps);
});
jasminegui.tools.download_object_as_csv = (function jasminegui$tools$download_object_as_csv(text,export_name){

var data_blob = (new Blob([text],({"type": "text/csv"})));
var link = document.createElement("a");
(link.href = URL.createObjectURL(data_blob));

link.setAttribute("download",export_name);

document.body.appendChild(link);

link.click();

return document.body.removeChild(link);
});
jasminegui.tools.csv_link = (function jasminegui$tools$csv_link(data,filename){
return jasminegui.tools.download_object_as_csv(cljs.core.clj__GT_js(jasminegui.tools.vector_of_maps__GT_csv(data)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename),".csv"].join(''));
});

//# sourceMappingURL=jasminegui.tools.js.map
