goog.provide('kdlyticsgui.mrttables');
goog.scope(function(){
  kdlyticsgui.mrttables.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$material_react_table$dist$cjs$index=shadow.js.require("module$node_modules$material_react_table$dist$cjs$index", {});
var module$node_modules$$mui$material$node$index=shadow.js.require("module$node_modules$$mui$material$node$index", {});
var module$node_modules$$mui$icons_material$PhotoCamera=shadow.js.require("module$node_modules$$mui$icons_material$PhotoCamera", {});
var module$node_modules$$mui$icons_material$Download=shadow.js.require("module$node_modules$$mui$icons_material$Download", {});
var module$node_modules$$mui$icons_material$SystemUpdateAlt=shadow.js.require("module$node_modules$$mui$icons_material$SystemUpdateAlt", {});
var module$node_modules$$mui$icons_material$Star=shadow.js.require("module$node_modules$$mui$icons_material$Star", {});
var module$node_modules$$mui$icons_material$StarBorder=shadow.js.require("module$node_modules$$mui$icons_material$StarBorder", {});
var module$node_modules$$mui$icons_material$FilterListOff=shadow.js.require("module$node_modules$$mui$icons_material$FilterListOff", {});
var module$node_modules$$mui$icons_material$Filter1=shadow.js.require("module$node_modules$$mui$icons_material$Filter1", {});
var module$node_modules$$mui$icons_material$Filter2=shadow.js.require("module$node_modules$$mui$icons_material$Filter2", {});
var module$node_modules$$mui$icons_material$Filter3=shadow.js.require("module$node_modules$$mui$icons_material$Filter3", {});
var module$node_modules$$mui$icons_material$Filter4=shadow.js.require("module$node_modules$$mui$icons_material$Filter4", {});
var module$node_modules$$mui$icons_material$HelpCenter=shadow.js.require("module$node_modules$$mui$icons_material$HelpCenter", {});
var module$node_modules$$mui$icons_material$CallEnd=shadow.js.require("module$node_modules$$mui$icons_material$CallEnd", {});
var module$node_modules$$mui$icons_material$Flag=shadow.js.require("module$node_modules$$mui$icons_material$Flag", {});
var module$node_modules$$mui$icons_material$Workspaces=shadow.js.require("module$node_modules$$mui$icons_material$Workspaces", {});
var module$node_modules$$mui$icons_material$BarChart=shadow.js.require("module$node_modules$$mui$icons_material$BarChart", {});
var module$node_modules$$mui$icons_material$PieChart=shadow.js.require("module$node_modules$$mui$icons_material$PieChart", {});
var module$node_modules$$mui$icons_material$Expand=shadow.js.require("module$node_modules$$mui$icons_material$Expand", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
kdlyticsgui.mrttables.cell_value = (function kdlyticsgui$mrttables$cell_value(c){
return c.cell.getValue();
});
kdlyticsgui.mrttables.get_js_row_key = (function kdlyticsgui$mrttables$get_js_row_key(row,key){
return kdlyticsgui.mrttables.goog$module$goog$object.getValueByKeys(row,"row","original",key);
});
/**
 * right align, with red text if negative
 */
kdlyticsgui.mrttables.red_negatives = (function kdlyticsgui$mrttables$red_negatives(cell){
if((((!((cell == null)))) && ((kdlyticsgui.mrttables.cell_value(cell) < (0))))){
return ({"align": "right", "sx": ({"color": "red", "borderRight": "1px solid rgba(113,113,113,0.5)", "borderBottom": "1px solid rgba(113,113,113,0.5)"})});
} else {
return ({"align": "right", "sx": ({"color": "white", "borderRight": "1px solid rgba(113,113,113,0.5)", "borderBottom": "1px solid rgba(113,113,113,0.5)"})});
}
});
kdlyticsgui.mrttables.allocation_delta_formatting = (function kdlyticsgui$mrttables$allocation_delta_formatting(this$){
var temp__5802__auto__ = kdlyticsgui.mrttables.get_js_row_key(this$,"alloc-strat-delta");
if(cljs.core.truth_(temp__5802__auto__)){
var x = temp__5802__auto__;
var pred__36833 = cljs.core._GT_;
var expr__36834 = x;
if(cljs.core.truth_((pred__36833.cljs$core$IFn$_invoke$arity$2 ? pred__36833.cljs$core$IFn$_invoke$arity$2((-500),expr__36834) : pred__36833.call(null,(-500),expr__36834)))){
return ({"sx": ({"color": "white", "backgroundColor": "#f08080", "borderRight": "1px solid rgba(113,113,113,0.5)", "borderBottom": "1px solid rgba(113,113,113,0.5)"})});
} else {
if(cljs.core.truth_((pred__36833.cljs$core$IFn$_invoke$arity$2 ? pred__36833.cljs$core$IFn$_invoke$arity$2((500),expr__36834) : pred__36833.call(null,(500),expr__36834)))){
return ({"sx": ({"color": "white", "backgroundColor": "#4e4e4e", "borderRight": "1px solid rgba(113,113,113,0.5)", "borderBottom": "1px solid rgba(113,113,113,0.5)"})});
} else {
return ({"sx": ({"color": "white", "backgroundColor": "#9CD7AB", "borderRight": "1px solid rgba(113,113,113,0.5)", "borderBottom": "1px solid rgba(113,113,113,0.5)"})});
}
}
} else {
return ({});
}
});
kdlyticsgui.mrttables.positions_full_row_formatting = (function kdlyticsgui$mrttables$positions_full_row_formatting(this$){

var G__36836 = kdlyticsgui.mrttables.get_js_row_key(this$,"shortName");
switch (G__36836) {
case "CASH":
return ({"sx": ({"cursor": "pointer", "backgroundColor": "#696969"}), "onClick": (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-price-history","get-price-history",-1088732947),kdlyticsgui.mrttables.get_js_row_key(this$,"ticker"),kdlyticsgui.mrttables.get_js_row_key(this$,"shortName")], null));
})});

break;
default:
return ({"sx": ({"cursor": "pointer", "backgroundColor": "#4e4e4e"}), "onClick": (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-price-history","get-price-history",-1088732947),kdlyticsgui.mrttables.get_js_row_key(this$,"ticker"),kdlyticsgui.mrttables.get_js_row_key(this$,"shortName")], null));
})});

}
});
kdlyticsgui.mrttables.cellar_row_formatting = (function kdlyticsgui$mrttables$cellar_row_formatting(this$){

var G__36837 = kdlyticsgui.mrttables.get_js_row_key(this$,"type");
switch (G__36837) {
case "red":
return ({"sx": ({"cursor": "pointer", "backgroundColor": "#b42421"})});

break;
case "white":
return ({"sx": ({"cursor": "pointer", "backgroundColor": "#f1f285"})});

break;
case "sweet":
return ({"sx": ({"cursor": "pointer", "backgroundColor": "#eccd13"})});

break;
case "champagne":
return ({"sx": ({"cursor": "pointer", "backgroundColor": "#F7E7CE"})});

break;
default:
return ({"sx": ({"cursor": "pointer"})});

}
});
/**
 * if status = 0 green background, if status = 1 orange (warning) background,if status = 2 (breach) red background,
 */
kdlyticsgui.mrttables.breach_status_color_nb = (function kdlyticsgui$mrttables$breach_status_color_nb(cell){
var G__36838 = kdlyticsgui.mrttables.cell_value(cell);
switch (G__36838) {
case (0):
return ({"sx": ({"color": "Chartreuse", "backgroundColor": "Chartreuse", "textAlign": "center"})});

break;
case (1):
return ({"sx": ({"color": "DarkOrange", "backgroundColor": "DarkOrange", "textAlign": "center"})});

break;
case (2):
return ({"sx": ({"color": "Crimson", "backgroundColor": "Crimson", "textAlign": "center"})});

break;
default:
return ({});

}
});
kdlyticsgui.mrttables.breach_status_color_txt = (function kdlyticsgui$mrttables$breach_status_color_txt(cell){
var G__36839 = kdlyticsgui.mrttables.cell_value(cell);
switch (G__36839) {
case "Y":
return ({"sx": ({"color": "Chartreuse", "backgroundColor": "Chartreuse", "textAlign": "center"})});

break;
case "N":
return ({"sx": ({"color": "Crimson", "backgroundColor": "Crimson", "textAlign": "center"})});

break;
default:
return ({});

}
});
kdlyticsgui.mrttables.breach_status_color_boolean = (function kdlyticsgui$mrttables$breach_status_color_boolean(cell){
var G__36840 = kdlyticsgui.mrttables.cell_value(cell);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__36840)){
return ({"sx": ({"color": "Chartreuse", "backgroundColor": "Chartreuse", "textAlign": "center"})});
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__36840)){
return ({"sx": ({"color": "Crimson", "backgroundColor": "Crimson", "textAlign": "center"})});
} else {
return ({});

}
}
});
kdlyticsgui.mrttables.breach_status_color_scale = (function kdlyticsgui$mrttables$breach_status_color_scale(cell){
var pred__36841 = cljs.core._GT_;
var expr__36842 = kdlyticsgui.mrttables.cell_value(cell);
if(cljs.core.truth_((pred__36841.cljs$core$IFn$_invoke$arity$2 ? pred__36841.cljs$core$IFn$_invoke$arity$2((1),expr__36842) : pred__36841.call(null,(1),expr__36842)))){
return ({"sx": ({"color": "Chartreuse", "backgroundColor": "Chartreuse", "textAlign": "center"})});
} else {
if(cljs.core.truth_((pred__36841.cljs$core$IFn$_invoke$arity$2 ? pred__36841.cljs$core$IFn$_invoke$arity$2((10),expr__36842) : pred__36841.call(null,(10),expr__36842)))){
return ({"sx": ({"color": "DarkOrange", "backgroundColor": "DarkOrange", "textAlign": "center"})});
} else {
if(cljs.core.truth_((pred__36841.cljs$core$IFn$_invoke$arity$2 ? pred__36841.cljs$core$IFn$_invoke$arity$2((999),expr__36842) : pred__36841.call(null,(999),expr__36842)))){
return ({"sx": ({"color": "Crimson", "backgroundColor": "Crimson", "textAlign": "center"})});
} else {
return ({"sx": ({"color": "darkmagenta", "backgroundColor": "darkmagenta", "textAlign": "center"})});
}
}
}
});
kdlyticsgui.mrttables.median = (function kdlyticsgui$mrttables$median(coll){
var sorted = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,coll));
var cnt = cljs.core.count(sorted);
var halfway = cljs.core.quot(cnt,(2));
if((cnt === (0))){
return null;
} else {
if(cljs.core.odd_QMARK_(cnt)){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sorted,halfway);
} else {
var bottom = (halfway - (1));
var bottom_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sorted,bottom);
var top_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sorted,halfway);
return (0.5 * (bottom_val + top_val));

}
}
});
kdlyticsgui.mrttables.mrt_median = (function kdlyticsgui$mrttables$mrt_median(columnId,leafRows,childRows){
return kdlyticsgui.mrttables.median(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36844_SHARP_){
return p1__36844_SHARP_.getValue(columnId);
}),leafRows));
});
kdlyticsgui.mrttables.nff = (new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL));
/**
 * This will write a single cell.
 */
kdlyticsgui.mrttables.nb_thousand_cell_format = (function kdlyticsgui$mrttables$nb_thousand_cell_format(this$){
var x = kdlyticsgui.mrttables.cell_value(this$);
if(cljs.core.truth_(isNaN(x))){
return "-";
} else {
return kdlyticsgui.mrttables.nff.format(cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(x)));
}
});
/**
 * This will write a single cell.
 *   Note that [this] has access to the full row so conditional evaluation is possible (e.g. change col B based on values in col A)
 *   Here we take the input value if it's there, scale it (useful for percentages) and format it.
 */
kdlyticsgui.mrttables.nb_cell_format = (function kdlyticsgui$mrttables$nb_cell_format(fmt,m,this$){
var x = kdlyticsgui.mrttables.cell_value(this$);
if(cljs.core.truth_(isNaN(x))){
return "-";
} else {
return goog.string.format(fmt,(m * x));
}
});
kdlyticsgui.mrttables.round0 = (function kdlyticsgui$mrttables$round0(p1__36845_SHARP_){
return kdlyticsgui.mrttables.nb_cell_format("%.0f",1.0,p1__36845_SHARP_);
});
kdlyticsgui.mrttables.round1 = (function kdlyticsgui$mrttables$round1(p1__36846_SHARP_){
return kdlyticsgui.mrttables.nb_cell_format("%.1f",1.0,p1__36846_SHARP_);
});
kdlyticsgui.mrttables.round2 = (function kdlyticsgui$mrttables$round2(p1__36847_SHARP_){
return kdlyticsgui.mrttables.nb_cell_format("%.2f",1.0,p1__36847_SHARP_);
});
kdlyticsgui.mrttables.round0pc = (function kdlyticsgui$mrttables$round0pc(p1__36848_SHARP_){
return kdlyticsgui.mrttables.nb_cell_format("%.0f%",1.0,p1__36848_SHARP_);
});
kdlyticsgui.mrttables.round1pc = (function kdlyticsgui$mrttables$round1pc(p1__36849_SHARP_){
return kdlyticsgui.mrttables.nb_cell_format("%.1f%",1.0,p1__36849_SHARP_);
});
kdlyticsgui.mrttables.round2pc = (function kdlyticsgui$mrttables$round2pc(p1__36850_SHARP_){
return kdlyticsgui.mrttables.nb_cell_format("%.2f%",1.0,p1__36850_SHARP_);
});
kdlyticsgui.mrttables.round0pc100 = (function kdlyticsgui$mrttables$round0pc100(p1__36851_SHARP_){
return kdlyticsgui.mrttables.nb_cell_format("%.0f%",100.0,p1__36851_SHARP_);
});
kdlyticsgui.mrttables.round1pc100 = (function kdlyticsgui$mrttables$round1pc100(p1__36852_SHARP_){
return kdlyticsgui.mrttables.nb_cell_format("%.1f%",100.0,p1__36852_SHARP_);
});
kdlyticsgui.mrttables.round2pc100 = (function kdlyticsgui$mrttables$round2pc100(p1__36853_SHARP_){
return kdlyticsgui.mrttables.nb_cell_format("%.2f%",100.0,p1__36853_SHARP_);
});
/**
 * Checks if s (already assumed lower case) is in value. If s starts by -, excludes it
 */
kdlyticsgui.mrttables.lower_case_s_in_value_QMARK_ = (function kdlyticsgui$mrttables$lower_case_s_in_value_QMARK_(s,value){
if(cljs.core.truth_(value)){
var G__36854 = s.charAt((0));
switch (G__36854) {
case ">":
return (value > parseFloat(s.substring((1))));

break;
case "<":
return (value < parseFloat(s.substring((1))));

break;
case "-":
return cljs.core.not(value.toLowerCase().includes(s.substring((1))));

break;
default:
if(cljs.core.truth_(isNaN(value))){
return value.toLowerCase().includes(s);
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parseFloat(s),value);
}

}
} else {
return null;
}
});
kdlyticsgui.mrttables.ampersand_truth = (function kdlyticsgui$mrttables$ampersand_truth(id,line){
return line.split("&").every((function (p1__36855_SHARP_){
return kdlyticsgui.mrttables.lower_case_s_in_value_QMARK_(p1__36855_SHARP_,id);
}));
});
/**
 * OR through comma separation, AND through &
 */
kdlyticsgui.mrttables.text_filter_OR = (function kdlyticsgui$mrttables$text_filter_OR(row,id,filterValue){
return filterValue.toLowerCase().replaceAll(" ","").split(",").some((function (p1__36856_SHARP_){
return kdlyticsgui.mrttables.ampersand_truth((function (){var temp__5802__auto__ = row.getValue(id);
if(cljs.core.truth_(temp__5802__auto__)){
var v = temp__5802__auto__;
return v;
} else {
return "";
}
})().toLowerCase(),p1__36856_SHARP_);
}));
});
kdlyticsgui.mrttables.comparator_read = (function kdlyticsgui$mrttables$comparator_read(var_args){
var G__36858 = arguments.length;
switch (G__36858) {
case 3:
return kdlyticsgui.mrttables.comparator_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return kdlyticsgui.mrttables.comparator_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kdlyticsgui.mrttables.comparator_read.cljs$core$IFn$_invoke$arity$3 = (function (rowval,input,mult){
var G__36859 = input.substring((0),(1));
switch (G__36859) {
case ">":
return (rowval > (mult * parseFloat(input.substring((1)))));

break;
case "<":
return (rowval < (mult * parseFloat(input.substring((1)))));

break;
default:
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rowval,(mult * parseFloat(input)));

}
}));

(kdlyticsgui.mrttables.comparator_read.cljs$core$IFn$_invoke$arity$2 = (function (rowval,input){
return kdlyticsgui.mrttables.comparator_read.cljs$core$IFn$_invoke$arity$3(rowval,input,1.0);
}));

(kdlyticsgui.mrttables.comparator_read.cljs$lang$maxFixedArity = 3);

kdlyticsgui.mrttables.ampersand_comp = (function kdlyticsgui$mrttables$ampersand_comp(compread,line){
return line.split("&").every(compread);
});
/**
 * filterfn is {id: column_name value: text_in_filter_box
 *   comma separation is OR. Within comma separation, & is AND.
 */
kdlyticsgui.mrttables.nb_filter_OR_AND = (function kdlyticsgui$mrttables$nb_filter_OR_AND(row,id,filterValue){
var compread = (function (p1__36860_SHARP_){
return kdlyticsgui.mrttables.comparator_read.cljs$core$IFn$_invoke$arity$2(row.getValue(id),p1__36860_SHARP_);
});
return filterValue.toLowerCase().split(",").some((function (p1__36861_SHARP_){
return kdlyticsgui.mrttables.ampersand_comp(compread,p1__36861_SHARP_);
}));
});
/**
 * Simple text column in MRT
 */
kdlyticsgui.mrttables.text_col = (function kdlyticsgui$mrttables$text_col(var_args){
var G__36863 = arguments.length;
switch (G__36863) {
case 3:
return kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3 = (function (header,accessor,width){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"header","header",119441134),header,new cljs.core.Keyword(null,"accessorKey","accessorKey",-1383292807),accessor,new cljs.core.Keyword(null,"size","size",1098693007),width,new cljs.core.Keyword(null,"enablePinning","enablePinning",-1460484884),false,new cljs.core.Keyword(null,"muiTableHeadCellFilterTextFieldProps","muiTableHeadCellFilterTextFieldProps",-1058769236),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"",new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"minWidth","minWidth",-204293526),"0px"], null)], null),new cljs.core.Keyword(null,"filterFn","filterFn",-164359859),kdlyticsgui.mrttables.text_filter_OR,new cljs.core.Keyword(null,"muiTableBodyRowProps","muiTableBodyRowProps",206441877),({"sx": ({"cursor": "pointer", "backgroundColor": "#8cecff"})}),new cljs.core.Keyword(null,"muiTableBodyCellProps","muiTableBodyCellProps",-1647659966),({"sx": ({"color": "white", "borderRight": "1px solid rgba(113,113,113,0.5)", "borderBottom": "1px solid rgba(113,113,113,0.5)", "backgroundColor": "inherit"})})], null);
}));

(kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$5 = (function (header,accessor,width,cell,black_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3(header,accessor,width),new cljs.core.Keyword(null,"Cell","Cell",53644787),cell);
}));

(kdlyticsgui.mrttables.text_col.cljs$lang$maxFixedArity = 5);

/**
 * Simple number column in MRT, by default aligned right with red negatives
 */
kdlyticsgui.mrttables.nb_col = (function kdlyticsgui$mrttables$nb_col(var_args){
var G__36865 = arguments.length;
switch (G__36865) {
case 6:
return kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 5:
return kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$6 = (function (header,accessor,width,cell,aggregate,AggregatedCell){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4(header,accessor,width,cell),new cljs.core.Keyword(null,"aggregationFn","aggregationFn",1224116254),aggregate,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"AggregatedCell","AggregatedCell",246177755),AggregatedCell], 0));
}));

(kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5 = (function (header,accessor,width,cell,aggregate){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4(header,accessor,width,cell),new cljs.core.Keyword(null,"aggregationFn","aggregationFn",1224116254),aggregate,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"AggregatedCell","AggregatedCell",246177755),cell], 0));
}));

(kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4 = (function (header,accessor,width,cell){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"header","header",119441134),header,new cljs.core.Keyword(null,"accessorKey","accessorKey",-1383292807),accessor,new cljs.core.Keyword(null,"size","size",1098693007),width,new cljs.core.Keyword(null,"muiTableBodyCellProps","muiTableBodyCellProps",-1647659966),kdlyticsgui.mrttables.red_negatives,new cljs.core.Keyword(null,"Cell","Cell",53644787),cell,new cljs.core.Keyword(null,"enablePinning","enablePinning",-1460484884),false,new cljs.core.Keyword(null,"muiTableHeadCellFilterTextFieldProps","muiTableHeadCellFilterTextFieldProps",-1058769236),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"",new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"minWidth","minWidth",-204293526),"0px"], null)], null),new cljs.core.Keyword(null,"filterFn","filterFn",-164359859),kdlyticsgui.mrttables.nb_filter_OR_AND], null);
}));

(kdlyticsgui.mrttables.nb_col.cljs$lang$maxFixedArity = 6);


kdlyticsgui.mrttables.icon_element_button_helix = (function (){var G__36867 = (function kdlyticsgui$mrttables$icon_element_button_helix_render(props__29207__auto__,maybe_ref__29208__auto__){
var vec__36868 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__29207__auto__),maybe_ref__29208__auto__], null);
var map__36871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36868,(0),null);
var map__36871__$1 = cljs.core.__destructure_map(map__36871);
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36871__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var tooltip_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36871__$1,new cljs.core.Keyword(null,"tooltip-text","tooltip-text",-2102487661));
var on_click_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36871__$1,new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852));

return helix.core.get_react().createElement(module$node_modules$$mui$material$node$index.Tooltip,(function (){var obj36873 = ({"arrow":true,"title":tooltip_text,"key":tooltip_text});
return obj36873;
})(),helix.core.get_react().createElement(module$node_modules$$mui$material$node$index.IconButton,(function (){var obj36875 = ({"onClick":on_click_fn});
return obj36875;
})(),helix.core.get_react().createElement(icon,null)));
});
if(goog.DEBUG === true){
var G__36876 = G__36867;
(G__36876.displayName = "kdlyticsgui.mrttables/icon-element-button-helix");

return G__36876;
} else {
return G__36867;
}
})();



kdlyticsgui.mrttables.photo_id__GT_shortcut_key = new cljs.core.PersistentArrayMap(null, 4, ["single-portfolio-risk-table",new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),"multiple-portfolio-risk-table",new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),"single-portfolio-trade-log-table",new cljs.core.Keyword("single-portfolio-trade-log","shortcut","single-portfolio-trade-log/shortcut",-6528992),"single-portfolio-attribution",new cljs.core.Keyword("single-portfolio-attribution","shortcut","single-portfolio-attribution/shortcut",-1711481988)], null);
kdlyticsgui.mrttables.get_pivoted_data = (function kdlyticsgui$mrttables$get_pivoted_data(table){
var leaves = (table.getGroupedRowModel().rows[(0)]).getLeafRows().filter((function (line){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(line.depth,(1));
}));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = (function kdlyticsgui$mrttables$get_pivoted_data_$_iter__36877(s__36878){
return (new cljs.core.LazySeq(null,(function (){
var s__36878__$1 = s__36878;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__36878__$1);
if(temp__5804__auto__){
var s__36878__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36878__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__36878__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__36880 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__36879 = (0);
while(true){
if((i__36879 < size__5522__auto__)){
var leaf = cljs.core._nth(c__5521__auto__,i__36879);
cljs.core.chunk_append(b__36880,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(leaf._groupingValuesCache),"group",leaf.groupingValue));

var G__37000 = (i__36879 + (1));
i__36879 = G__37000;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36880),kdlyticsgui$mrttables$get_pivoted_data_$_iter__36877(cljs.core.chunk_rest(s__36878__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36880),null);
}
} else {
var leaf = cljs.core.first(s__36878__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(leaf._groupingValuesCache),"group",leaf.groupingValue),kdlyticsgui$mrttables$get_pivoted_data_$_iter__36877(cljs.core.rest(s__36878__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(leaves);
})());
});
/**
 * If the table is group, we get the pivoted data, otherwise we use the standard download function
 */
kdlyticsgui.mrttables.download_view = (function kdlyticsgui$mrttables$download_view(table,download_fn,photo_id){
if((cljs.core.count(table.getState().grouping) > (0))){
var dw_cols = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["group"], null),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(table.getAllLeafColumns().filter((function (p1__36881_SHARP_){
return cljs.core.not(p1__36881_SHARP_.getIsGrouped());
})).map((function (p1__36882_SHARP_){
return p1__36882_SHARP_.id;
}))));
return kdlyticsgui.tools.csv_link.cljs$core$IFn$_invoke$arity$3(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(kdlyticsgui.mrttables.get_pivoted_data(table),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], null)], 0)),photo_id,dw_cols);
} else {
var G__36883 = table.getPrePaginationRowModel().rows.map((function (row){
return row.original;
}));
return (download_fn.cljs$core$IFn$_invoke$arity$1 ? download_fn.cljs$core$IFn$_invoke$arity$1(G__36883) : download_fn.call(null,G__36883));
}
});

/**
 * This returns the top right Toolbar function with the standard actions
 */
kdlyticsgui.mrttables.single_risk_table_toolbar = (function (){var G__36885 = (function kdlyticsgui$mrttables$single_risk_table_toolbar_render(props__29207__auto__,maybe_ref__29208__auto__){
var vec__36886 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__29207__auto__),maybe_ref__29208__auto__], null);
var map__36889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36886,(0),null);
var map__36889__$1 = cljs.core.__destructure_map(map__36889);
var table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36889__$1,new cljs.core.Keyword(null,"table","table",-564943036));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36889__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var download_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36889__$1,new cljs.core.Keyword(null,"download-fn","download-fn",386504264));
var photo_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36889__$1,new cljs.core.Keyword(null,"photo-id","photo-id",108052797));

return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj36891 = ({"key":"BarChart","icon":module$node_modules$$mui$icons_material$BarChart.default,"tooltip-text":"Bar chart","on-click-fn":(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","chart","single-portfolio-risk/chart",1018715306),"bar"], null));
})});
return obj36891;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj36893 = ({"key":"PieChart","icon":module$node_modules$$mui$icons_material$PieChart.default,"tooltip-text":"Pie chart","on-click-fn":(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","chart","single-portfolio-risk/chart",1018715306),"pie"], null));
})});
return obj36893;
})()),helix.core.get_react().createElement(module$node_modules$$mui$material$node$index.Divider,(function (){var obj36895 = ({"key":"divider0","variant":"middle","orientation":"vertical"});
return obj36895;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj36897 = ({"key":"Filter1Icon","icon":module$node_modules$$mui$icons_material$Filter1.default,"tooltip-text":"View 1","on-click-fn":(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1 ? kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1(photo_id) : kdlyticsgui.mrttables.photo_id__GT_shortcut_key.call(null,photo_id)),(1),table], null));
})});
return obj36897;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj36899 = ({"key":"Filter2Icon","icon":module$node_modules$$mui$icons_material$Filter2.default,"tooltip-text":"View 2","on-click-fn":(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1 ? kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1(photo_id) : kdlyticsgui.mrttables.photo_id__GT_shortcut_key.call(null,photo_id)),(2),table], null));
})});
return obj36899;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj36901 = ({"key":"Filter3Icon","icon":module$node_modules$$mui$icons_material$Filter3.default,"tooltip-text":"View 3","on-click-fn":(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1 ? kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1(photo_id) : kdlyticsgui.mrttables.photo_id__GT_shortcut_key.call(null,photo_id)),(3),table], null));
})});
return obj36901;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj36903 = ({"key":"Filter4Icon","icon":module$node_modules$$mui$icons_material$Filter4.default,"tooltip-text":"View 4","on-click-fn":(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1 ? kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1(photo_id) : kdlyticsgui.mrttables.photo_id__GT_shortcut_key.call(null,photo_id)),(4),table], null));
})});
return obj36903;
})()),helix.core.get_react().createElement(module$node_modules$$mui$material$node$index.Divider,(function (){var obj36905 = ({"key":"divider1","variant":"middle","orientation":"vertical"});
return obj36905;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj36907 = ({"key":"ExpandIcon","icon":module$node_modules$$mui$icons_material$Expand.default,"tooltip-text":"Show more rows","on-click-fn":(function (){
if((cljs.core.count(table.getState().grouping) > (0))){
return table.setPageSize((50));
} else {
return table.setPageSize(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(table.getState().pagination.pageSize,(200)))?(15):(200)));
}
})});
return obj36907;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj36909 = ({"key":"FilterListOffIcon","icon":module$node_modules$$mui$icons_material$FilterListOff.default,"tooltip-text":"Clear filters","on-click-fn":(function (){
return table.resetColumnFilters([]);
})});
return obj36909;
})()),helix.core.get_react().createElement(module$node_modules$material_react_table$dist$cjs$index.MRT_ShowHideColumnsButton,(function (){var obj36911 = ({"table":table,"key":"show-columns"});
return obj36911;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj36913 = ({"key":"SystemUpdateAltIcon","icon":module$node_modules$$mui$icons_material$SystemUpdateAlt.default,"tooltip-text":"Download view","on-click-fn":(function (){
return kdlyticsgui.mrttables.download_view(table,download_fn,photo_id);
})});
return obj36913;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj36915 = ({"key":"DownloadIcon","icon":module$node_modules$$mui$icons_material$Download.default,"tooltip-text":"Full download","on-click-fn":(function (){
return (download_fn.cljs$core$IFn$_invoke$arity$1 ? download_fn.cljs$core$IFn$_invoke$arity$1(data) : download_fn.call(null,data));
})});
return obj36915;
})())], null);
});
if(goog.DEBUG === true){
var G__36916 = G__36885;
(G__36916.displayName = "kdlyticsgui.mrttables/single-risk-table-toolbar");

return G__36916;
} else {
return G__36885;
}
})();




/**
 * This returns the top right Toolbar function with the standard actions
 */
kdlyticsgui.mrttables.mrt_table_toolbar = (function (){var G__36918 = (function kdlyticsgui$mrttables$mrt_table_toolbar_render(props__29207__auto__,maybe_ref__29208__auto__){
var vec__36919 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__29207__auto__),maybe_ref__29208__auto__], null);
var map__36922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36919,(0),null);
var map__36922__$1 = cljs.core.__destructure_map(map__36922);
var table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36922__$1,new cljs.core.Keyword(null,"table","table",-564943036));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36922__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var download_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36922__$1,new cljs.core.Keyword(null,"download-fn","download-fn",386504264));
var photo_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36922__$1,new cljs.core.Keyword(null,"photo-id","photo-id",108052797));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj36924 = ({"key":"FilterListOffIcon","icon":module$node_modules$$mui$icons_material$FilterListOff.default,"tooltip-text":"Clear filters","on-click-fn":(function (){
return table.resetColumnFilters([]);
})});
return obj36924;
})()),helix.core.get_react().createElement(module$node_modules$material_react_table$dist$cjs$index.MRT_ShowHideColumnsButton,(function (){var obj36926 = ({"table":table,"key":"show-columns"});
return obj36926;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj36928 = ({"key":"SystemUpdateAltIcon","icon":module$node_modules$$mui$icons_material$SystemUpdateAlt.default,"tooltip-text":"Download view","on-click-fn":(function (){
return kdlyticsgui.mrttables.download_view(table,download_fn,photo_id);
})});
return obj36928;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj36930 = ({"key":"DownloadIcon","icon":module$node_modules$$mui$icons_material$Download.default,"tooltip-text":"Full download","on-click-fn":(function (){
return (download_fn.cljs$core$IFn$_invoke$arity$1 ? download_fn.cljs$core$IFn$_invoke$arity$1(data) : download_fn.call(null,data));
})});
return obj36930;
})())], null);
});
if(goog.DEBUG === true){
var G__36931 = G__36918;
(G__36931.displayName = "kdlyticsgui.mrttables/mrt-table-toolbar");

return G__36931;
} else {
return G__36918;
}
})();



kdlyticsgui.mrttables.mrt_default_download_fn = (function kdlyticsgui$mrttables$mrt_default_download_fn(id,clj_cols){
var nested_QMARK_ = cljs.core.contains_QMARK_(cljs.core.first(clj_cols),new cljs.core.Keyword(null,"columns","columns",1998437288));
var dw_cols = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accessorKey","accessorKey",-1383292807),((nested_QMARK_)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"columns","columns",1998437288),clj_cols)):clj_cols)));
return (function (js_data){
return kdlyticsgui.tools.csv_link.cljs$core$IFn$_invoke$arity$3(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(js_data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], null)], 0)),id,dw_cols);
});
});
kdlyticsgui.mrttables.show_if_any_is_hidden = (function kdlyticsgui$mrttables$show_if_any_is_hidden(table,groupset){
var visible_ids = cljs.core.set(table.getVisibleLeafColumns().map((function (p1__36932_SHARP_){
return p1__36932_SHARP_.id;
})));
var group_visible_QMARK_ = clojure.set.subset_QMARK_(groupset,visible_ids);
if(group_visible_QMARK_){
var seq__36933 = cljs.core.seq(groupset);
var chunk__36934 = null;
var count__36935 = (0);
var i__36936 = (0);
while(true){
if((i__36936 < count__36935)){
var id = chunk__36934.cljs$core$IIndexed$_nth$arity$2(null,i__36936);
table.getColumn(id).toggleVisibility(false);


var G__37023 = seq__36933;
var G__37024 = chunk__36934;
var G__37025 = count__36935;
var G__37026 = (i__36936 + (1));
seq__36933 = G__37023;
chunk__36934 = G__37024;
count__36935 = G__37025;
i__36936 = G__37026;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36933);
if(temp__5804__auto__){
var seq__36933__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36933__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36933__$1);
var G__37027 = cljs.core.chunk_rest(seq__36933__$1);
var G__37028 = c__5568__auto__;
var G__37029 = cljs.core.count(c__5568__auto__);
var G__37030 = (0);
seq__36933 = G__37027;
chunk__36934 = G__37028;
count__36935 = G__37029;
i__36936 = G__37030;
continue;
} else {
var id = cljs.core.first(seq__36933__$1);
table.getColumn(id).toggleVisibility(false);


var G__37031 = cljs.core.next(seq__36933__$1);
var G__37032 = null;
var G__37033 = (0);
var G__37034 = (0);
seq__36933 = G__37031;
chunk__36934 = G__37032;
count__36935 = G__37033;
i__36936 = G__37034;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var seq__36937 = cljs.core.seq(groupset);
var chunk__36938 = null;
var count__36939 = (0);
var i__36940 = (0);
while(true){
if((i__36940 < count__36939)){
var id = chunk__36938.cljs$core$IIndexed$_nth$arity$2(null,i__36940);
table.getColumn(id).toggleVisibility(true);


var G__37035 = seq__36937;
var G__37036 = chunk__36938;
var G__37037 = count__36939;
var G__37038 = (i__36940 + (1));
seq__36937 = G__37035;
chunk__36938 = G__37036;
count__36939 = G__37037;
i__36940 = G__37038;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36937);
if(temp__5804__auto__){
var seq__36937__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36937__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36937__$1);
var G__37071 = cljs.core.chunk_rest(seq__36937__$1);
var G__37072 = c__5568__auto__;
var G__37073 = cljs.core.count(c__5568__auto__);
var G__37074 = (0);
seq__36937 = G__37071;
chunk__36938 = G__37072;
count__36939 = G__37073;
i__36940 = G__37074;
continue;
} else {
var id = cljs.core.first(seq__36937__$1);
table.getColumn(id).toggleVisibility(true);


var G__37075 = cljs.core.next(seq__36937__$1);
var G__37076 = null;
var G__37077 = (0);
var G__37078 = (0);
seq__36937 = G__37075;
chunk__36938 = G__37076;
count__36939 = G__37077;
i__36940 = G__37078;
continue;
}
} else {
return null;
}
}
break;
}
}
});
kdlyticsgui.mrttables.help_modal = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Help",new cljs.core.Keyword(null,"throbber","throbber",-1896677161),false,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"Use , for OR. Use & for AND. Use - to exclude. Examples: AR,BR for Argentina or Brazil. >200&<300 for spreads between 200bps and 300bps. >0 to only see bonds in an index. -Sov to exclude sovereigns, -CN&-HK to exclude both countries."], null)], null);
/**
 * Takes a table ref and a column. Returns a cljs seq of the viewable (filtered and sorted) column values
 */
kdlyticsgui.mrttables.mrt_ref__GT_filtered_col_seq = (function kdlyticsgui$mrttables$mrt_ref__GT_filtered_col_seq(ref,col){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((ref["current"]).getPrePaginationRowModel().rows.map((function (row){
return (row.original[col]);
})));
});
kdlyticsgui.mrttables.mrt_ref__GT_filtered_rows_seq = (function kdlyticsgui$mrttables$mrt_ref__GT_filtered_rows_seq(ref){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic((ref["current"]).getPrePaginationRowModel().rows.map((function (row){
return row.original;
})),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], null)], 0));
});
/**
 * note use of or as subsitute for (if value-is-not-nil value default). This is to make the basic table subset of fast table
 */
kdlyticsgui.mrttables.base_props_dark = (function kdlyticsgui$mrttables$base_props_dark(mdata,mcolumns,clj_option_map,js_initial_state,toolbar,download_fn,photo_id){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"muiTableHeadCellProps","muiTableHeadCellProps",373931073),new cljs.core.Keyword(null,"muiTableBodyCellProps","muiTableBodyCellProps",-1647659966),new cljs.core.Keyword(null,"muiTableBodyContainerProps","muiTableBodyContainerProps",1650075875),new cljs.core.Keyword(null,"initialState","initialState",-1307412411),new cljs.core.Keyword(null,"displayColumnDefOptions","displayColumnDefOptions",-361117435),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"enableColumnActions","enableColumnActions",960040394),new cljs.core.Keyword(null,"muiTopToolbarProps","muiTopToolbarProps",-584649078),new cljs.core.Keyword(null,"muiTableContainerProps","muiTableContainerProps",1798703060),new cljs.core.Keyword(null,"renderToolbarInternalActions","renderToolbarInternalActions",2044346935),new cljs.core.Keyword(null,"muiBottomToolbarProps","muiBottomToolbarProps",1726006712),new cljs.core.Keyword(null,"muiTableBodyProps","muiTableBodyProps",-1884785223),new cljs.core.Keyword(null,"muiTablePaginationProps","muiTablePaginationProps",690014362),new cljs.core.Keyword(null,"muiTablePaperProps","muiTablePaperProps",-1923464292),new cljs.core.Keyword(null,"data","data",-232669377)],[({"sx": ({"borderRight": "1px solid rgba(113,113,113,0.5)", "borderBottom": "1px solid rgba(113,113,113,0.5)", "color": "white", "backgroundColor": "#3f3f3f"})}),({"sx": ({"borderRight": "1px solid rgba(113,113,113,0.5)", "backgroundColor": "#3f3f3f"})}),({"sx": ({"backgroundColor": "#3f3f3f"})}),(function (){var or__5045__auto__ = js_initial_state;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ({"density": "compact", "showColumnFilters": true, "columnFilters": [], "pagination": ({})});
}
})(),({"mrt-row-expand": ({"size": (75), "muiTableBodyCellProps": ({"sx": ({"backgroundColor": "inherit"})})})}),mcolumns,false,({"sx": ({"backgroundColor": "#3f3f3f", "borderTopLeftRadius": "15px", "borderTopRightRadius": "15px"})}),({"sx": ({"backgroundColor": "#3f3f3f"})}),(function (x){
return helix.core.get_react().createElement((function (){var or__5045__auto__ = toolbar;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return kdlyticsgui.mrttables.mrt_table_toolbar;
}
})(),(function (){var obj36942 = ({"table":x.table,"data":mdata,"download-fn":(function (){var or__5045__auto__ = download_fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return kdlyticsgui.mrttables.mrt_default_download_fn(photo_id,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(mcolumns,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], null)], 0)));
}
})(),"photo-id":photo_id});
return obj36942;
})());
}),({"sx": ({"backgroundColor": "#3f3f3f", "borderBottomLeftRadius": "15px", "borderBottomRightRadius": "15px"})}),({"sx": ({"backgroundColor": "#3f3f3f"})}),({"sx": ({"backgroundColor": "#3f3f3f"})}),({"sx": ({"backgroundColor": "#1e1e1e"})}),mdata]),clj_option_map], 0));
});

/**
 * No external state hence a lot faster
 *   Note you need to add extra key with a dummy value that changes every time you want full re-render!!!
 */
kdlyticsgui.mrttables.material_react_table_template_fast = (function (){var G__36946 = (function kdlyticsgui$mrttables$material_react_table_template_fast_render(props__29207__auto__,maybe_ref__29208__auto__){
var vec__36947 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__29207__auto__),maybe_ref__29208__auto__], null);
var map__36950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36947,(0),null);
var map__36950__$1 = cljs.core.__destructure_map(map__36950);
var clj_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36950__$1,new cljs.core.Keyword(null,"clj-data","clj-data",-774432148));
var clj_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36950__$1,new cljs.core.Keyword(null,"clj-columns","clj-columns",678745596));
var clj_option_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36950__$1,new cljs.core.Keyword(null,"clj-option-map","clj-option-map",1277941618));
var js_initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36950__$1,new cljs.core.Keyword(null,"js-initial-state","js-initial-state",234739608));
var toolbar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36950__$1,new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065));
var download_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36950__$1,new cljs.core.Keyword(null,"download-fn","download-fn",386504264));
var photo_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36950__$1,new cljs.core.Keyword(null,"photo-id","photo-id",108052797));

var pinned_cols = cljs.core.clj__GT_js(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accessorKey","accessorKey",-1383292807),new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(cljs.core.first(clj_columns))),"mrt-row-expand"));
var mdata = (function (){var G__36951 = (function (){
if(cljs.core.array_QMARK_(clj_data)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"enableGrouping","enableGrouping",1673342785).cljs$core$IFn$_invoke$arity$1(clj_option_map))){
clj_data.forEach((function (p1__36943_SHARP_){
return (p1__36943_SHARP_["dummy"] = "");
}));
} else {
}

return clj_data;
} else {
return cljs.core.clj__GT_js((cljs.core.truth_(new cljs.core.Keyword(null,"enableGrouping","enableGrouping",1673342785).cljs$core$IFn$_invoke$arity$1(clj_option_map))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__36944_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__36944_SHARP_,new cljs.core.Keyword(null,"dummy","dummy",2059765854),"");
}),clj_data):clj_data));
}
});
var G__36952 = [clj_data,clj_option_map];
return (helix.hooks.raw_use_memo.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_memo.cljs$core$IFn$_invoke$arity$2(G__36951,G__36952) : helix.hooks.raw_use_memo.call(null,G__36951,G__36952));
})();
var mcolumns = (function (){var G__36953 = (function (){
return cljs.core.clj__GT_js(clj_columns);
});
var G__36954 = [clj_columns];
return (helix.hooks.raw_use_memo.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_memo.cljs$core$IFn$_invoke$arity$2(G__36953,G__36954) : helix.hooks.raw_use_memo.call(null,G__36953,G__36954));
})();
var props = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kdlyticsgui.mrttables.base_props_dark(mdata,mcolumns,clj_option_map,js_initial_state,toolbar,download_fn,photo_id),((cljs.core.seq(pinned_cols))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),({"columnPinning": ({"left": pinned_cols, "right": []})})], null):null)], 0));
return helix.core.get_react().createElement("div",(function (){var obj36956 = ({"id":photo_id,"className":helix.impl.props.normalize_class(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(photo_id,"cellar-summary"))?"mrt-table-dark-cellar":"mrt-table-dark"))});
return obj36956;
})(),helix.core.get_react().createElement(module$node_modules$material_react_table$dist$cjs$index.default,helix.impl.props.merge_obj(({}),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(props))));
});
if(goog.DEBUG === true){
var G__36959 = G__36946;
(G__36959.displayName = "kdlyticsgui.mrttables/material-react-table-template-fast");

return G__36959;
} else {
return G__36946;
}
})();




kdlyticsgui.mrttables.material_react_table_template_basic = (function (){var G__36962 = (function kdlyticsgui$mrttables$material_react_table_template_basic_render(props__29207__auto__,maybe_ref__29208__auto__){
var vec__36963 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__29207__auto__),maybe_ref__29208__auto__], null);
var argument_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36963,(0),null);

return helix.core.get_react().createElement(kdlyticsgui.mrttables.material_react_table_template_fast,helix.impl.props.merge_obj(({}),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(cljs.core.update.cljs$core$IFn$_invoke$arity$3(argument_map,new cljs.core.Keyword(null,"clj-option-map","clj-option-map",1277941618),(function (p1__36960_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enablePagination","enablePagination",594938512),false,new cljs.core.Keyword(null,"enableBottomToolbar","enableBottomToolbar",-255865294),false], null),p1__36960_SHARP_], 0));
})))));
});
if(goog.DEBUG === true){
var G__36968 = G__36962;
(G__36968.displayName = "kdlyticsgui.mrttables/material-react-table-template-basic");

return G__36968;
} else {
return G__36962;
}
})();




//# sourceMappingURL=kdlyticsgui.mrttables.js.map
