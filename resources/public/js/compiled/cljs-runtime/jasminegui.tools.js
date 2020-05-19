goog.provide('jasminegui.tools');
goog.require('cljs.core');
jasminegui.tools.vector_of_maps__GT_csv = (function jasminegui$tools$vector_of_maps__GT_csv(vector_of_maps){
var cols = cljs.core.keys(cljs.core.first(vector_of_maps));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__42995_SHARP_,p2__42996_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42995_SHARP_),clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(p2__42996_SHARP_,cols)),"\n"].join('');
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

//# sourceMappingURL=jasminegui.tools.js.map
