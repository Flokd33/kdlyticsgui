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
kdlyticsgui.mrttables.get_js_row_key = (function kdlyticsgui$mrttables$get_js_row_key(row,key){
return kdlyticsgui.mrttables.goog$module$goog$object.getValueByKeys(row,"row","original",key);
});
kdlyticsgui.mrttables.held_formatting = (function kdlyticsgui$mrttables$held_formatting(row){
var temp__5802__auto__ = kdlyticsgui.mrttables.get_js_row_key(row,"held");
if(cljs.core.truth_(temp__5802__auto__)){
var x = temp__5802__auto__;
var pred__40005 = cljs.core._EQ_;
var expr__40006 = x;
if(cljs.core.truth_((pred__40005.cljs$core$IFn$_invoke$arity$2 ? pred__40005.cljs$core$IFn$_invoke$arity$2((1),expr__40006) : pred__40005.call(null,(1),expr__40006)))){
return ({"sx": ({"cursor": "pointer", "backgroundColor": "#9CD7AB"})});
} else {
if(cljs.core.truth_((pred__40005.cljs$core$IFn$_invoke$arity$2 ? pred__40005.cljs$core$IFn$_invoke$arity$2((0),expr__40006) : pred__40005.call(null,(0),expr__40006)))){
if(cljs.core.odd_QMARK_(row.row.index)){
return ({"sx": ({"cursor": "pointer", "backgroundColor": "#F5F5F5"})});
} else {
return ({"sx": ({"cursor": "pointer"})});
}
} else {
return ({});
}
}
} else {
return ({});
}
});
kdlyticsgui.mrttables.held_formatting_qs = (function kdlyticsgui$mrttables$held_formatting_qs(this$){
var r = this$.row;
var G__40008 = r.original.n91held;
switch (G__40008) {
case (1):
return ({"sx": ({"cursor": "pointer", "backgroundColor": "#9CD7AB"})});

break;
case (0):
if(cljs.core.odd_QMARK_(r.index)){
return ({"sx": ({"cursor": "pointer", "backgroundColor": "#F5F5F5"})});
} else {
return ({"sx": ({"cursor": "pointer"})});
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40008)].join('')));

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
return kdlyticsgui.mrttables.median(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40009_SHARP_){
return p1__40009_SHARP_.getValue(columnId);
}),leafRows));
});
kdlyticsgui.mrttables.nff = (new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL));
kdlyticsgui.mrttables.cell_value = (function kdlyticsgui$mrttables$cell_value(c){
return c.cell.getValue();
});
/**
 * This will write a single cell.
 *   Note that [this] has access to the full row so conditional evaluation is possible (e.g. change column B based on values in column A)
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
/**
 * This will write a single cell.
 *   Note that [this] has access to the full row so conditional evaluation is possible (e.g. change column B based on values in column A)
 *   Here we take the input value if it's there, scale it (useful for percentages) and format it.
 */
kdlyticsgui.mrttables.nb_cell_format_no0 = (function kdlyticsgui$mrttables$nb_cell_format_no0(fmt,m,this$){
var x = kdlyticsgui.mrttables.cell_value(this$);
if(cljs.core.truth_((function (){var or__5045__auto__ = isNaN(x);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (((x === (0))) || ((x == null)));
}
})())){
return "-";
} else {
return goog.string.format(fmt,(m * x));
}
});
kdlyticsgui.mrttables.round2 = (function kdlyticsgui$mrttables$round2(p1__40010_SHARP_){
return kdlyticsgui.mrttables.nb_cell_format("%.2f",1.0,p1__40010_SHARP_);
});
kdlyticsgui.mrttables.round3 = (function kdlyticsgui$mrttables$round3(p1__40011_SHARP_){
return kdlyticsgui.mrttables.nb_cell_format("%.3f",1.0,p1__40011_SHARP_);
});
kdlyticsgui.mrttables.round0 = (function kdlyticsgui$mrttables$round0(p1__40012_SHARP_){
return kdlyticsgui.mrttables.nb_cell_format("%.0f",1.0,p1__40012_SHARP_);
});
kdlyticsgui.mrttables.round1 = (function kdlyticsgui$mrttables$round1(p1__40013_SHARP_){
return kdlyticsgui.mrttables.nb_cell_format("%.1f",1.0,p1__40013_SHARP_);
});
kdlyticsgui.mrttables.round4 = (function kdlyticsgui$mrttables$round4(p1__40014_SHARP_){
return kdlyticsgui.mrttables.nb_cell_format("%.4f",1.0,p1__40014_SHARP_);
});
kdlyticsgui.mrttables.round0pc = (function kdlyticsgui$mrttables$round0pc(p1__40015_SHARP_){
return kdlyticsgui.mrttables.nb_cell_format("%.0f%",1.0,p1__40015_SHARP_);
});
kdlyticsgui.mrttables.round1pc = (function kdlyticsgui$mrttables$round1pc(p1__40016_SHARP_){
return kdlyticsgui.mrttables.nb_cell_format("%.1f%",1.0,p1__40016_SHARP_);
});
kdlyticsgui.mrttables.round2pc = (function kdlyticsgui$mrttables$round2pc(p1__40017_SHARP_){
return kdlyticsgui.mrttables.nb_cell_format("%.2f%",1.0,p1__40017_SHARP_);
});
kdlyticsgui.mrttables.round0_STAR_1000000 = (function kdlyticsgui$mrttables$round0_STAR_1000000(p1__40018_SHARP_){
return kdlyticsgui.mrttables.nb_cell_format("%.2f%",1000000.0,p1__40018_SHARP_);
});
kdlyticsgui.mrttables.round0pc100 = (function kdlyticsgui$mrttables$round0pc100(p1__40019_SHARP_){
return kdlyticsgui.mrttables.nb_cell_format("%.0f%",100.0,p1__40019_SHARP_);
});
kdlyticsgui.mrttables.round1pc100 = (function kdlyticsgui$mrttables$round1pc100(p1__40020_SHARP_){
return kdlyticsgui.mrttables.nb_cell_format("%.1f%",100.0,p1__40020_SHARP_);
});
kdlyticsgui.mrttables.round2pc100 = (function kdlyticsgui$mrttables$round2pc100(p1__40021_SHARP_){
return kdlyticsgui.mrttables.nb_cell_format("%.2f%",100.0,p1__40021_SHARP_);
});
kdlyticsgui.mrttables.round2_STAR_100 = (function kdlyticsgui$mrttables$round2_STAR_100(p1__40022_SHARP_){
return kdlyticsgui.mrttables.nb_cell_format("%.2f",100.0,p1__40022_SHARP_);
});
kdlyticsgui.mrttables.yield_format = (function kdlyticsgui$mrttables$yield_format(p1__40023_SHARP_){
return kdlyticsgui.mrttables.nb_cell_format("%.2f%",1.0,p1__40023_SHARP_);
});
kdlyticsgui.mrttables.round2_no0 = (function kdlyticsgui$mrttables$round2_no0(p1__40024_SHARP_){
return kdlyticsgui.mrttables.nb_cell_format_no0("%.2f",1.0,p1__40024_SHARP_);
});
kdlyticsgui.mrttables.round2pc_no0 = (function kdlyticsgui$mrttables$round2pc_no0(p1__40025_SHARP_){
return kdlyticsgui.mrttables.nb_cell_format_no0("%.2f%",1.0,p1__40025_SHARP_);
});
kdlyticsgui.mrttables.zspread_format = (function kdlyticsgui$mrttables$zspread_format(p1__40026_SHARP_){
return kdlyticsgui.mrttables.nb_cell_format("%.0fbps",1.0,p1__40026_SHARP_);
});
kdlyticsgui.mrttables.performance_attributes_bps = (function kdlyticsgui$mrttables$performance_attributes_bps(p1__40027_SHARP_){
return kdlyticsgui.mrttables.nb_cell_format("%.0fbps",100.0,p1__40027_SHARP_);
});
kdlyticsgui.mrttables.date_sc = (function kdlyticsgui$mrttables$date_sc(p1__40028_SHARP_){
return kdlyticsgui.mrttables.nb_cell_format("%0.0f",1.0,p1__40028_SHARP_);
});
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
 * right align, with red text if negative
 */
kdlyticsgui.mrttables.red_negatives = (function kdlyticsgui$mrttables$red_negatives(cell){
if((((!((cell == null)))) && ((kdlyticsgui.mrttables.cell_value(cell) < (0))))){
return ({"align": "right", "sx": ({"color": "red", "borderRight": "1px solid rgba(224,224,224,1)"})});
} else {
return ({"align": "right", "sx": ({"borderRight": "1px solid rgba(224,224,224,1)"})});
}
});
/**
 * right align, with red text if negative
 */
kdlyticsgui.mrttables.red_negatives_pinned = (function kdlyticsgui$mrttables$red_negatives_pinned(cell){
if((((!((cell == null)))) && ((kdlyticsgui.mrttables.cell_value(cell) < (0))))){
return ({"align": "right", "sx": ({"backgroundColor": "inherit", "color": "red", "borderRight": "1px solid rgba(224,224,224,1)"})});
} else {
return ({"align": "right", "sx": ({"backgroundColor": "inherit", "borderRight": "1px solid rgba(224,224,224,1)"})});
}
});
kdlyticsgui.mrttables.this_year = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.core.today().getYear());
kdlyticsgui.mrttables.ytd_ita = (function kdlyticsgui$mrttables$ytd_ita(cell){
var temp__5802__auto__ = kdlyticsgui.mrttables.get_js_row_key(cell,"FIRST_SETTLE_DT");
if(cljs.core.truth_(temp__5802__auto__)){
var x = temp__5802__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(x,(0),(4)),kdlyticsgui.mrttables.this_year)){
return ({"align": "right", "sx": ({"color": (((((!((cell == null)))) && ((kdlyticsgui.mrttables.cell_value(cell) < (0)))))?"red":"black"), "borderRight": "1px solid rgba(224,224,224,1)", "font-style": "italic"})});
} else {
return ({"align": "right", "sx": ({"color": (((((!((cell == null)))) && ((kdlyticsgui.mrttables.cell_value(cell) < (0)))))?"red":"black"), "borderRight": "1px solid rgba(224,224,224,1)", "font-style": "normal"})});
}
} else {
return null;
}
});
/**
 * Checks if s (already assumed lower case) is in value. If s starts by -, excludes it
 */
kdlyticsgui.mrttables.lower_case_s_in_value_QMARK_ = (function kdlyticsgui$mrttables$lower_case_s_in_value_QMARK_(s,value){
if(cljs.core.truth_(value)){
var G__40029 = s.charAt((0));
switch (G__40029) {
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
return line.split("&").every((function (p1__40030_SHARP_){
return kdlyticsgui.mrttables.lower_case_s_in_value_QMARK_(p1__40030_SHARP_,id);
}));
});
/**
 * OR through comma separation, AND through &
 */
kdlyticsgui.mrttables.text_filter_OR = (function kdlyticsgui$mrttables$text_filter_OR(row,id,filterValue){
return filterValue.toLowerCase().replaceAll(" ","").split(",").some((function (p1__40031_SHARP_){
return kdlyticsgui.mrttables.ampersand_truth((function (){var temp__5802__auto__ = row.getValue(id);
if(cljs.core.truth_(temp__5802__auto__)){
var v = temp__5802__auto__;
return v;
} else {
return "";
}
})().toLowerCase(),p1__40031_SHARP_);
}));
});
kdlyticsgui.mrttables.comparator_read = (function kdlyticsgui$mrttables$comparator_read(var_args){
var G__40033 = arguments.length;
switch (G__40033) {
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
var G__40034 = input.substring((0),(1));
switch (G__40034) {
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
var compread = (function (p1__40035_SHARP_){
return kdlyticsgui.mrttables.comparator_read.cljs$core$IFn$_invoke$arity$2(row.getValue(id),p1__40035_SHARP_);
});
return filterValue.toLowerCase().split(",").some((function (p1__40036_SHARP_){
return kdlyticsgui.mrttables.ampersand_comp(compread,p1__40036_SHARP_);
}));
});
/**
 * Simple text column in MRT
 */
kdlyticsgui.mrttables.ds_text_col = (function kdlyticsgui$mrttables$ds_text_col(header,accessor,width){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"header","header",119441134),header,new cljs.core.Keyword(null,"id","id",-1388402092),accessor,new cljs.core.Keyword(null,"accessorFn","accessorFn",-1315595272),(function (p1__40037_SHARP_){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__40037_SHARP_], 0));

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__40037_SHARP_,accessor);
}),new cljs.core.Keyword(null,"size","size",1098693007),width,new cljs.core.Keyword(null,"muiTableHeadCellFilterTextFieldProps","muiTableHeadCellFilterTextFieldProps",-1058769236),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"",new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"minWidth","minWidth",-204293526),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"px"].join('')], null)], null),new cljs.core.Keyword(null,"filterFn","filterFn",-164359859),kdlyticsgui.mrttables.text_filter_OR], null);
});
/**
 * Simple number column in MRT, by default aligned right with red negatives
 */
kdlyticsgui.mrttables.ds_nb_col = (function kdlyticsgui$mrttables$ds_nb_col(var_args){
var G__40040 = arguments.length;
switch (G__40040) {
case 6:
return kdlyticsgui.mrttables.ds_nb_col.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 4:
return kdlyticsgui.mrttables.ds_nb_col.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kdlyticsgui.mrttables.ds_nb_col.cljs$core$IFn$_invoke$arity$6 = (function (header,accessor,width,cell,aggregate,AggregatedCell){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(kdlyticsgui.mrttables.ds_nb_col.cljs$core$IFn$_invoke$arity$4(header,accessor,width,cell),new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),aggregate,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"AggregatedCell","AggregatedCell",246177755),AggregatedCell], 0));
}));

(kdlyticsgui.mrttables.ds_nb_col.cljs$core$IFn$_invoke$arity$4 = (function (header,accessor,width,cell){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"header","header",119441134),header,new cljs.core.Keyword(null,"id","id",-1388402092),accessor,new cljs.core.Keyword(null,"accessorFn","accessorFn",-1315595272),(function (p1__40038_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__40038_SHARP_,accessor);
}),new cljs.core.Keyword(null,"size","size",1098693007),width,new cljs.core.Keyword(null,"muiTableBodyCellProps","muiTableBodyCellProps",-1647659966),kdlyticsgui.mrttables.red_negatives,new cljs.core.Keyword(null,"Cell","Cell",53644787),cell,new cljs.core.Keyword(null,"muiTableHeadCellFilterTextFieldProps","muiTableHeadCellFilterTextFieldProps",-1058769236),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"",new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"minWidth","minWidth",-204293526),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"px"].join('')], null)], null),new cljs.core.Keyword(null,"filterFn","filterFn",-164359859),kdlyticsgui.mrttables.nb_filter_OR_AND], null);
}));

(kdlyticsgui.mrttables.ds_nb_col.cljs$lang$maxFixedArity = 6);

/**
 * Simple text column in MRT
 */
kdlyticsgui.mrttables.text_col_pinned = (function kdlyticsgui$mrttables$text_col_pinned(var_args){
var G__40042 = arguments.length;
switch (G__40042) {
case 3:
return kdlyticsgui.mrttables.text_col_pinned.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return kdlyticsgui.mrttables.text_col_pinned.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kdlyticsgui.mrttables.text_col_pinned.cljs$core$IFn$_invoke$arity$3 = (function (header,accessor,width){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"header","header",119441134),header,new cljs.core.Keyword(null,"accessorKey","accessorKey",-1383292807),accessor,new cljs.core.Keyword(null,"size","size",1098693007),width,new cljs.core.Keyword(null,"enablePinning","enablePinning",-1460484884),false,new cljs.core.Keyword(null,"muiTableHeadCellFilterTextFieldProps","muiTableHeadCellFilterTextFieldProps",-1058769236),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"",new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"minWidth","minWidth",-204293526),"0px"], null)], null),new cljs.core.Keyword(null,"filterFn","filterFn",-164359859),kdlyticsgui.mrttables.text_filter_OR,new cljs.core.Keyword(null,"muiTableBodyCellProps","muiTableBodyCellProps",-1647659966),({"sx": ({"borderRight": "1px solid rgba(224,224,224,1)", "backgroundColor": "inherit"})})], null);
}));

(kdlyticsgui.mrttables.text_col_pinned.cljs$core$IFn$_invoke$arity$4 = (function (header,accessor,width,cell){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(kdlyticsgui.mrttables.text_col_pinned.cljs$core$IFn$_invoke$arity$3(header,accessor,width),new cljs.core.Keyword(null,"Cell","Cell",53644787),cell);
}));

(kdlyticsgui.mrttables.text_col_pinned.cljs$lang$maxFixedArity = 4);

/**
 * Simple text column in MRT
 */
kdlyticsgui.mrttables.text_col = (function kdlyticsgui$mrttables$text_col(var_args){
var G__40044 = arguments.length;
switch (G__40044) {
case 3:
return kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3 = (function (header,accessor,width){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"header","header",119441134),header,new cljs.core.Keyword(null,"accessorKey","accessorKey",-1383292807),accessor,new cljs.core.Keyword(null,"size","size",1098693007),width,new cljs.core.Keyword(null,"enablePinning","enablePinning",-1460484884),false,new cljs.core.Keyword(null,"muiTableHeadCellFilterTextFieldProps","muiTableHeadCellFilterTextFieldProps",-1058769236),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"",new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"minWidth","minWidth",-204293526),"0px"], null)], null),new cljs.core.Keyword(null,"filterFn","filterFn",-164359859),kdlyticsgui.mrttables.text_filter_OR,new cljs.core.Keyword(null,"muiTableBodyCellProps","muiTableBodyCellProps",-1647659966),({"sx": ({"borderRight": "1px solid rgba(224,224,224,1)", "backgroundColor": "inherit"})})], null);
}));

(kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$4 = (function (header,accessor,width,cell){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3(header,accessor,width),new cljs.core.Keyword(null,"Cell","Cell",53644787),cell);
}));

(kdlyticsgui.mrttables.text_col.cljs$lang$maxFixedArity = 4);

/**
 * Simple text column in MRT
 */
kdlyticsgui.mrttables.text_col_multiline = (function kdlyticsgui$mrttables$text_col_multiline(var_args){
var G__40046 = arguments.length;
switch (G__40046) {
case 3:
return kdlyticsgui.mrttables.text_col_multiline.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return kdlyticsgui.mrttables.text_col_multiline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kdlyticsgui.mrttables.text_col_multiline.cljs$core$IFn$_invoke$arity$3 = (function (header,accessor,width){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"header","header",119441134),header,new cljs.core.Keyword(null,"accessorKey","accessorKey",-1383292807),accessor,new cljs.core.Keyword(null,"size","size",1098693007),width,new cljs.core.Keyword(null,"enablePinning","enablePinning",-1460484884),false,new cljs.core.Keyword(null,"muiTableHeadCellFilterTextFieldProps","muiTableHeadCellFilterTextFieldProps",-1058769236),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"",new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"minWidth","minWidth",-204293526),"0px"], null)], null),new cljs.core.Keyword(null,"filterFn","filterFn",-164359859),kdlyticsgui.mrttables.text_filter_OR,new cljs.core.Keyword(null,"muiTableBodyCellProps","muiTableBodyCellProps",-1647659966),({"sx": ({"borderRight": "1px solid rgba(224,224,224,1)", "backgroundColor": "inherit", "wordWrap": "break-word", "whiteSpace": "pre-line"})})], null);
}));

(kdlyticsgui.mrttables.text_col_multiline.cljs$core$IFn$_invoke$arity$4 = (function (header,accessor,width,cell){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(kdlyticsgui.mrttables.text_col_multiline.cljs$core$IFn$_invoke$arity$3(header,accessor,width),new cljs.core.Keyword(null,"Cell","Cell",53644787),cell);
}));

(kdlyticsgui.mrttables.text_col_multiline.cljs$lang$maxFixedArity = 4);

/**
 * Simple number column in MRT, by default aligned right with red negatives
 */
kdlyticsgui.mrttables.nb_col = (function kdlyticsgui$mrttables$nb_col(var_args){
var G__40048 = arguments.length;
switch (G__40048) {
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

/**
 * Simple number column in MRT, by default aligned right with red negatives
 */
kdlyticsgui.mrttables.nb_col_pinned = (function kdlyticsgui$mrttables$nb_col_pinned(var_args){
var G__40050 = arguments.length;
switch (G__40050) {
case 6:
return kdlyticsgui.mrttables.nb_col_pinned.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 5:
return kdlyticsgui.mrttables.nb_col_pinned.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return kdlyticsgui.mrttables.nb_col_pinned.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kdlyticsgui.mrttables.nb_col_pinned.cljs$core$IFn$_invoke$arity$6 = (function (header,accessor,width,cell,aggregate,AggregatedCell){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(kdlyticsgui.mrttables.nb_col_pinned.cljs$core$IFn$_invoke$arity$4(header,accessor,width,cell),new cljs.core.Keyword(null,"aggregationFn","aggregationFn",1224116254),aggregate,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"AggregatedCell","AggregatedCell",246177755),AggregatedCell], 0));
}));

(kdlyticsgui.mrttables.nb_col_pinned.cljs$core$IFn$_invoke$arity$5 = (function (header,accessor,width,cell,aggregate){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(kdlyticsgui.mrttables.nb_col_pinned.cljs$core$IFn$_invoke$arity$4(header,accessor,width,cell),new cljs.core.Keyword(null,"aggregationFn","aggregationFn",1224116254),aggregate,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"AggregatedCell","AggregatedCell",246177755),cell], 0));
}));

(kdlyticsgui.mrttables.nb_col_pinned.cljs$core$IFn$_invoke$arity$4 = (function (header,accessor,width,cell){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"header","header",119441134),header,new cljs.core.Keyword(null,"accessorKey","accessorKey",-1383292807),accessor,new cljs.core.Keyword(null,"size","size",1098693007),width,new cljs.core.Keyword(null,"muiTableBodyCellProps","muiTableBodyCellProps",-1647659966),kdlyticsgui.mrttables.red_negatives_pinned,new cljs.core.Keyword(null,"Cell","Cell",53644787),cell,new cljs.core.Keyword(null,"enablePinning","enablePinning",-1460484884),false,new cljs.core.Keyword(null,"muiTableHeadCellFilterTextFieldProps","muiTableHeadCellFilterTextFieldProps",-1058769236),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"",new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"minWidth","minWidth",-204293526),"0px"], null)], null),new cljs.core.Keyword(null,"filterFn","filterFn",-164359859),kdlyticsgui.mrttables.nb_filter_OR_AND], null);
}));

(kdlyticsgui.mrttables.nb_col_pinned.cljs$lang$maxFixedArity = 6);


kdlyticsgui.mrttables.icon_element_button_helix = (function (){var G__40052 = (function kdlyticsgui$mrttables$icon_element_button_helix_render(props__29990__auto__,maybe_ref__29991__auto__){
var vec__40053 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__29990__auto__),maybe_ref__29991__auto__], null);
var map__40056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40053,(0),null);
var map__40056__$1 = cljs.core.__destructure_map(map__40056);
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40056__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var tooltip_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40056__$1,new cljs.core.Keyword(null,"tooltip-text","tooltip-text",-2102487661));
var on_click_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40056__$1,new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852));

return helix.core.get_react().createElement(module$node_modules$$mui$material$node$index.Tooltip,(function (){var obj40058 = ({"arrow":true,"title":tooltip_text,"key":tooltip_text});
return obj40058;
})(),helix.core.get_react().createElement(module$node_modules$$mui$material$node$index.IconButton,(function (){var obj40060 = ({"onClick":on_click_fn});
return obj40060;
})(),helix.core.get_react().createElement(icon,null)));
});
if(goog.DEBUG === true){
var G__40061 = G__40052;
(G__40061.displayName = "kdlyticsgui.mrttables/icon-element-button-helix");

return G__40061;
} else {
return G__40052;
}
})();



kdlyticsgui.mrttables.photo_id__GT_shortcut_key = new cljs.core.PersistentArrayMap(null, 4, ["single-portfolio-risk-table",new cljs.core.Keyword("single-portfolio-risk","shortcut","single-portfolio-risk/shortcut",-719904680),"multiple-portfolio-risk-table",new cljs.core.Keyword("multiple-portfolio-risk","shortcut","multiple-portfolio-risk/shortcut",1642483104),"single-portfolio-trade-log-table",new cljs.core.Keyword("single-portfolio-trade-log","shortcut","single-portfolio-trade-log/shortcut",-6528992),"single-portfolio-attribution",new cljs.core.Keyword("single-portfolio-attribution","shortcut","single-portfolio-attribution/shortcut",-1711481988)], null);
kdlyticsgui.mrttables.get_pivoted_data = (function kdlyticsgui$mrttables$get_pivoted_data(table){
var leaves = (table.getGroupedRowModel().rows[(0)]).getLeafRows().filter((function (line){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(line.depth,(1));
}));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = (function kdlyticsgui$mrttables$get_pivoted_data_$_iter__40062(s__40063){
return (new cljs.core.LazySeq(null,(function (){
var s__40063__$1 = s__40063;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__40063__$1);
if(temp__5804__auto__){
var s__40063__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40063__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__40063__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__40065 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__40064 = (0);
while(true){
if((i__40064 < size__5522__auto__)){
var leaf = cljs.core._nth(c__5521__auto__,i__40064);
cljs.core.chunk_append(b__40065,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(leaf._groupingValuesCache),"group",leaf.groupingValue));

var G__40409 = (i__40064 + (1));
i__40064 = G__40409;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40065),kdlyticsgui$mrttables$get_pivoted_data_$_iter__40062(cljs.core.chunk_rest(s__40063__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40065),null);
}
} else {
var leaf = cljs.core.first(s__40063__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(leaf._groupingValuesCache),"group",leaf.groupingValue),kdlyticsgui$mrttables$get_pivoted_data_$_iter__40062(cljs.core.rest(s__40063__$2)));
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
var dw_cols = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["group"], null),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(table.getAllLeafColumns().filter((function (p1__40066_SHARP_){
return cljs.core.not(p1__40066_SHARP_.getIsGrouped());
})).map((function (p1__40067_SHARP_){
return p1__40067_SHARP_.id;
}))));
return kdlyticsgui.tools.csv_link.cljs$core$IFn$_invoke$arity$3(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(kdlyticsgui.mrttables.get_pivoted_data(table),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], null)], 0)),photo_id,dw_cols);
} else {
var G__40068 = table.getPrePaginationRowModel().rows.map((function (row){
return row.original;
}));
return (download_fn.cljs$core$IFn$_invoke$arity$1 ? download_fn.cljs$core$IFn$_invoke$arity$1(G__40068) : download_fn.call(null,G__40068));
}
});

/**
 * This returns the top right Toolbar function with the standard actions
 */
kdlyticsgui.mrttables.single_risk_table_toolbar = (function (){var G__40070 = (function kdlyticsgui$mrttables$single_risk_table_toolbar_render(props__29990__auto__,maybe_ref__29991__auto__){
var vec__40071 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__29990__auto__),maybe_ref__29991__auto__], null);
var map__40074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40071,(0),null);
var map__40074__$1 = cljs.core.__destructure_map(map__40074);
var table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40074__$1,new cljs.core.Keyword(null,"table","table",-564943036));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40074__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var download_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40074__$1,new cljs.core.Keyword(null,"download-fn","download-fn",386504264));
var photo_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40074__$1,new cljs.core.Keyword(null,"photo-id","photo-id",108052797));

return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40076 = ({"key":"BarChart","icon":module$node_modules$$mui$icons_material$BarChart.default,"tooltip-text":"Bar chart","on-click-fn":(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","chart","single-portfolio-risk/chart",1018715306),"bar"], null));
})});
return obj40076;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40078 = ({"key":"PieChart","icon":module$node_modules$$mui$icons_material$PieChart.default,"tooltip-text":"Pie chart","on-click-fn":(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","chart","single-portfolio-risk/chart",1018715306),"pie"], null));
})});
return obj40078;
})()),helix.core.get_react().createElement(module$node_modules$$mui$material$node$index.Divider,(function (){var obj40080 = ({"key":"divider0","variant":"middle","orientation":"vertical"});
return obj40080;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40082 = ({"key":"Filter1Icon","icon":module$node_modules$$mui$icons_material$Filter1.default,"tooltip-text":"View 1","on-click-fn":(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1 ? kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1(photo_id) : kdlyticsgui.mrttables.photo_id__GT_shortcut_key.call(null,photo_id)),(1),table], null));
})});
return obj40082;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40084 = ({"key":"Filter2Icon","icon":module$node_modules$$mui$icons_material$Filter2.default,"tooltip-text":"View 2","on-click-fn":(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1 ? kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1(photo_id) : kdlyticsgui.mrttables.photo_id__GT_shortcut_key.call(null,photo_id)),(2),table], null));
})});
return obj40084;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40086 = ({"key":"Filter3Icon","icon":module$node_modules$$mui$icons_material$Filter3.default,"tooltip-text":"View 3","on-click-fn":(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1 ? kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1(photo_id) : kdlyticsgui.mrttables.photo_id__GT_shortcut_key.call(null,photo_id)),(3),table], null));
})});
return obj40086;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40088 = ({"key":"Filter4Icon","icon":module$node_modules$$mui$icons_material$Filter4.default,"tooltip-text":"View 4","on-click-fn":(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1 ? kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1(photo_id) : kdlyticsgui.mrttables.photo_id__GT_shortcut_key.call(null,photo_id)),(4),table], null));
})});
return obj40088;
})()),helix.core.get_react().createElement(module$node_modules$$mui$material$node$index.Divider,(function (){var obj40090 = ({"key":"divider1","variant":"middle","orientation":"vertical"});
return obj40090;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40092 = ({"key":"ExpandIcon","icon":module$node_modules$$mui$icons_material$Expand.default,"tooltip-text":"Show more rows","on-click-fn":(function (){
if((cljs.core.count(table.getState().grouping) > (0))){
return table.setPageSize((50));
} else {
return table.setPageSize(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(table.getState().pagination.pageSize,(200)))?(15):(200)));
}
})});
return obj40092;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40094 = ({"key":"FilterListOffIcon","icon":module$node_modules$$mui$icons_material$FilterListOff.default,"tooltip-text":"Clear filters","on-click-fn":(function (){
return table.resetColumnFilters([]);
})});
return obj40094;
})()),helix.core.get_react().createElement(module$node_modules$material_react_table$dist$cjs$index.MRT_ShowHideColumnsButton,(function (){var obj40096 = ({"table":table,"key":"show-columns"});
return obj40096;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40098 = ({"key":"SystemUpdateAltIcon","icon":module$node_modules$$mui$icons_material$SystemUpdateAlt.default,"tooltip-text":"Download view","on-click-fn":(function (){
return kdlyticsgui.mrttables.download_view(table,download_fn,photo_id);
})});
return obj40098;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40100 = ({"key":"DownloadIcon","icon":module$node_modules$$mui$icons_material$Download.default,"tooltip-text":"Full download","on-click-fn":(function (){
return (download_fn.cljs$core$IFn$_invoke$arity$1 ? download_fn.cljs$core$IFn$_invoke$arity$1(data) : download_fn.call(null,data));
})});
return obj40100;
})())], null);
});
if(goog.DEBUG === true){
var G__40101 = G__40070;
(G__40101.displayName = "kdlyticsgui.mrttables/single-risk-table-toolbar");

return G__40101;
} else {
return G__40070;
}
})();




/**
 * This returns the top right Toolbar function with the standard actions
 */
kdlyticsgui.mrttables.ta_table_toolbar = (function (){var G__40103 = (function kdlyticsgui$mrttables$ta_table_toolbar_render(props__29990__auto__,maybe_ref__29991__auto__){
var vec__40104 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__29990__auto__),maybe_ref__29991__auto__], null);
var map__40107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40104,(0),null);
var map__40107__$1 = cljs.core.__destructure_map(map__40107);
var table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40107__$1,new cljs.core.Keyword(null,"table","table",-564943036));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40107__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var download_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40107__$1,new cljs.core.Keyword(null,"download-fn","download-fn",386504264));
var photo_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40107__$1,new cljs.core.Keyword(null,"photo-id","photo-id",108052797));

return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40109 = ({"key":"BarChart","icon":module$node_modules$$mui$icons_material$BarChart.default,"tooltip-text":"Bar chart","on-click-fn":(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","chart","single-portfolio-risk/chart",1018715306),"bar"], null));
})});
return obj40109;
})()),helix.core.get_react().createElement(module$node_modules$$mui$material$node$index.Divider,(function (){var obj40111 = ({"key":"divider0","variant":"middle","orientation":"vertical"});
return obj40111;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40113 = ({"key":"Filter1Icon","icon":module$node_modules$$mui$icons_material$Filter1.default,"tooltip-text":"View 1","on-click-fn":(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1 ? kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1(photo_id) : kdlyticsgui.mrttables.photo_id__GT_shortcut_key.call(null,photo_id)),(1),table], null));
})});
return obj40113;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40115 = ({"key":"Filter2Icon","icon":module$node_modules$$mui$icons_material$Filter2.default,"tooltip-text":"View 2","on-click-fn":(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1 ? kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1(photo_id) : kdlyticsgui.mrttables.photo_id__GT_shortcut_key.call(null,photo_id)),(2),table], null));
})});
return obj40115;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40117 = ({"key":"Filter3Icon","icon":module$node_modules$$mui$icons_material$Filter3.default,"tooltip-text":"View 3","on-click-fn":(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1 ? kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1(photo_id) : kdlyticsgui.mrttables.photo_id__GT_shortcut_key.call(null,photo_id)),(3),table], null));
})});
return obj40117;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40119 = ({"key":"Filter4Icon","icon":module$node_modules$$mui$icons_material$Filter4.default,"tooltip-text":"View 4","on-click-fn":(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1 ? kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1(photo_id) : kdlyticsgui.mrttables.photo_id__GT_shortcut_key.call(null,photo_id)),(4),table], null));
})});
return obj40119;
})()),helix.core.get_react().createElement(module$node_modules$$mui$material$node$index.Divider,(function (){var obj40121 = ({"key":"divider1","variant":"middle","orientation":"vertical"});
return obj40121;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40123 = ({"key":"ExpandIcon","icon":module$node_modules$$mui$icons_material$Expand.default,"tooltip-text":"Show more rows","on-click-fn":(function (){
if((cljs.core.count(table.getState().grouping) > (0))){
return table.setPageSize((50));
} else {
return table.setPageSize(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(table.getState().pagination.pageSize,(200)))?(15):(200)));
}
})});
return obj40123;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40125 = ({"key":"FilterListOffIcon","icon":module$node_modules$$mui$icons_material$FilterListOff.default,"tooltip-text":"Clear filters","on-click-fn":(function (){
return table.resetColumnFilters([]);
})});
return obj40125;
})()),helix.core.get_react().createElement(module$node_modules$material_react_table$dist$cjs$index.MRT_ShowHideColumnsButton,(function (){var obj40127 = ({"table":table,"key":"show-columns"});
return obj40127;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40129 = ({"key":"SystemUpdateAltIcon","icon":module$node_modules$$mui$icons_material$SystemUpdateAlt.default,"tooltip-text":"Download view","on-click-fn":(function (){
return kdlyticsgui.mrttables.download_view(table,download_fn,photo_id);
})});
return obj40129;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40131 = ({"key":"DownloadIcon","icon":module$node_modules$$mui$icons_material$Download.default,"tooltip-text":"Full download","on-click-fn":(function (){
return (download_fn.cljs$core$IFn$_invoke$arity$1 ? download_fn.cljs$core$IFn$_invoke$arity$1(data) : download_fn.call(null,data));
})});
return obj40131;
})())], null);
});
if(goog.DEBUG === true){
var G__40132 = G__40103;
(G__40132.displayName = "kdlyticsgui.mrttables/ta-table-toolbar");

return G__40132;
} else {
return G__40103;
}
})();




/**
 * This returns the top right Toolbar function with the standard actions
 */
kdlyticsgui.mrttables.single_attribution_table_toolbar = (function (){var G__40134 = (function kdlyticsgui$mrttables$single_attribution_table_toolbar_render(props__29990__auto__,maybe_ref__29991__auto__){
var vec__40135 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__29990__auto__),maybe_ref__29991__auto__], null);
var map__40138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40135,(0),null);
var map__40138__$1 = cljs.core.__destructure_map(map__40138);
var table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40138__$1,new cljs.core.Keyword(null,"table","table",-564943036));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40138__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var download_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40138__$1,new cljs.core.Keyword(null,"download-fn","download-fn",386504264));
var photo_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40138__$1,new cljs.core.Keyword(null,"photo-id","photo-id",108052797));

return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40140 = ({"key":"BarChart","icon":module$node_modules$$mui$icons_material$BarChart.default,"tooltip-text":"Bar chart","on-click-fn":(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-attribution","modal","single-portfolio-attribution/modal",-1816156233),"bar"], null));
})});
return obj40140;
})()),helix.core.get_react().createElement(module$node_modules$$mui$material$node$index.Divider,(function (){var obj40142 = ({"key":"divider0","variant":"middle","orientation":"vertical"});
return obj40142;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40144 = ({"key":"Filter1Icon","icon":module$node_modules$$mui$icons_material$Filter1.default,"tooltip-text":"View 1","on-click-fn":(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1 ? kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1(photo_id) : kdlyticsgui.mrttables.photo_id__GT_shortcut_key.call(null,photo_id)),(1),table], null));
})});
return obj40144;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40146 = ({"key":"Filter2Icon","icon":module$node_modules$$mui$icons_material$Filter2.default,"tooltip-text":"View 2","on-click-fn":(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1 ? kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1(photo_id) : kdlyticsgui.mrttables.photo_id__GT_shortcut_key.call(null,photo_id)),(2),table], null));
})});
return obj40146;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40148 = ({"key":"Filter3Icon","icon":module$node_modules$$mui$icons_material$Filter3.default,"tooltip-text":"View 3","on-click-fn":(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1 ? kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1(photo_id) : kdlyticsgui.mrttables.photo_id__GT_shortcut_key.call(null,photo_id)),(3),table], null));
})});
return obj40148;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40150 = ({"key":"Filter4Icon","icon":module$node_modules$$mui$icons_material$Filter4.default,"tooltip-text":"View 4","on-click-fn":(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1 ? kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1(photo_id) : kdlyticsgui.mrttables.photo_id__GT_shortcut_key.call(null,photo_id)),(4),table], null));
})});
return obj40150;
})()),helix.core.get_react().createElement(module$node_modules$$mui$material$node$index.Divider,(function (){var obj40152 = ({"key":"divider1","variant":"middle","orientation":"vertical"});
return obj40152;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40154 = ({"key":"ExpandIcon","icon":module$node_modules$$mui$icons_material$Expand.default,"tooltip-text":"Show more rows","on-click-fn":(function (){
if((cljs.core.count(table.getState().grouping) > (0))){
return table.setPageSize((50));
} else {
return table.setPageSize(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(table.getState().pagination.pageSize,(200)))?(15):(200)));
}
})});
return obj40154;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40156 = ({"key":"FilterListOffIcon","icon":module$node_modules$$mui$icons_material$FilterListOff.default,"tooltip-text":"Clear filters","on-click-fn":(function (){
return table.resetColumnFilters([]);
})});
return obj40156;
})()),helix.core.get_react().createElement(module$node_modules$material_react_table$dist$cjs$index.MRT_ShowHideColumnsButton,(function (){var obj40158 = ({"table":table,"key":"show-columns"});
return obj40158;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40160 = ({"key":"SystemUpdateAltIcon","icon":module$node_modules$$mui$icons_material$SystemUpdateAlt.default,"tooltip-text":"Download view","on-click-fn":(function (){
return kdlyticsgui.mrttables.download_view(table,download_fn,photo_id);
})});
return obj40160;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40162 = ({"key":"DownloadIcon","icon":module$node_modules$$mui$icons_material$Download.default,"tooltip-text":"Full download","on-click-fn":(function (){
return (download_fn.cljs$core$IFn$_invoke$arity$1 ? download_fn.cljs$core$IFn$_invoke$arity$1(data) : download_fn.call(null,data));
})});
return obj40162;
})())], null);
});
if(goog.DEBUG === true){
var G__40163 = G__40134;
(G__40163.displayName = "kdlyticsgui.mrttables/single-attribution-table-toolbar");

return G__40163;
} else {
return G__40134;
}
})();




/**
 * This returns the top right Toolbar function with the standard actions
 */
kdlyticsgui.mrttables.risk_table_toolbar = (function (){var G__40165 = (function kdlyticsgui$mrttables$risk_table_toolbar_render(props__29990__auto__,maybe_ref__29991__auto__){
var vec__40166 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__29990__auto__),maybe_ref__29991__auto__], null);
var map__40169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40166,(0),null);
var map__40169__$1 = cljs.core.__destructure_map(map__40169);
var table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40169__$1,new cljs.core.Keyword(null,"table","table",-564943036));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40169__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var download_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40169__$1,new cljs.core.Keyword(null,"download-fn","download-fn",386504264));
var photo_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40169__$1,new cljs.core.Keyword(null,"photo-id","photo-id",108052797));

return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40171 = ({"key":"Filter1Icon","icon":module$node_modules$$mui$icons_material$Filter1.default,"tooltip-text":"View 1","on-click-fn":(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1 ? kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1(photo_id) : kdlyticsgui.mrttables.photo_id__GT_shortcut_key.call(null,photo_id)),(1),table], null));
})});
return obj40171;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40173 = ({"key":"Filter2Icon","icon":module$node_modules$$mui$icons_material$Filter2.default,"tooltip-text":"View 2","on-click-fn":(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1 ? kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1(photo_id) : kdlyticsgui.mrttables.photo_id__GT_shortcut_key.call(null,photo_id)),(2),table], null));
})});
return obj40173;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40175 = ({"key":"Filter3Icon","icon":module$node_modules$$mui$icons_material$Filter3.default,"tooltip-text":"View 3","on-click-fn":(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1 ? kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1(photo_id) : kdlyticsgui.mrttables.photo_id__GT_shortcut_key.call(null,photo_id)),(3),table], null));
})});
return obj40175;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40177 = ({"key":"Filter4Icon","icon":module$node_modules$$mui$icons_material$Filter4.default,"tooltip-text":"View 4","on-click-fn":(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1 ? kdlyticsgui.mrttables.photo_id__GT_shortcut_key.cljs$core$IFn$_invoke$arity$1(photo_id) : kdlyticsgui.mrttables.photo_id__GT_shortcut_key.call(null,photo_id)),(4),table], null));
})});
return obj40177;
})()),helix.core.get_react().createElement(module$node_modules$$mui$material$node$index.Divider,(function (){var obj40179 = ({"key":"divider","variant":"middle","orientation":"vertical"});
return obj40179;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40181 = ({"key":"ExpandIcon","icon":module$node_modules$$mui$icons_material$Expand.default,"tooltip-text":"Show more rows","on-click-fn":(function (){
if((cljs.core.count(table.getState().grouping) > (0))){
return table.setPageSize((50));
} else {
return table.setPageSize(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(table.getState().pagination.pageSize,(200)))?(15):(200)));
}
})});
return obj40181;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40183 = ({"key":"FilterListOffIcon","icon":module$node_modules$$mui$icons_material$FilterListOff.default,"tooltip-text":"Clear filters","on-click-fn":(function (){
return table.resetColumnFilters([]);
})});
return obj40183;
})()),helix.core.get_react().createElement(module$node_modules$material_react_table$dist$cjs$index.MRT_ShowHideColumnsButton,(function (){var obj40185 = ({"table":table,"key":"show-columns"});
return obj40185;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40187 = ({"key":"SystemUpdateAltIcon","icon":module$node_modules$$mui$icons_material$SystemUpdateAlt.default,"tooltip-text":"Download view","on-click-fn":(function (){
return kdlyticsgui.mrttables.download_view(table,download_fn,photo_id);
})});
return obj40187;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40189 = ({"key":"DownloadIcon","icon":module$node_modules$$mui$icons_material$Download.default,"tooltip-text":"Full download","on-click-fn":(function (){
return (download_fn.cljs$core$IFn$_invoke$arity$1 ? download_fn.cljs$core$IFn$_invoke$arity$1(data) : download_fn.call(null,data));
})});
return obj40189;
})())], null);
});
if(goog.DEBUG === true){
var G__40190 = G__40165;
(G__40190.displayName = "kdlyticsgui.mrttables/risk-table-toolbar");

return G__40190;
} else {
return G__40165;
}
})();




/**
 * This returns the top right Toolbar function with the standard actions
 */
kdlyticsgui.mrttables.mrt_table_toolbar = (function (){var G__40192 = (function kdlyticsgui$mrttables$mrt_table_toolbar_render(props__29990__auto__,maybe_ref__29991__auto__){
var vec__40193 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__29990__auto__),maybe_ref__29991__auto__], null);
var map__40196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40193,(0),null);
var map__40196__$1 = cljs.core.__destructure_map(map__40196);
var table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40196__$1,new cljs.core.Keyword(null,"table","table",-564943036));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40196__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var download_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40196__$1,new cljs.core.Keyword(null,"download-fn","download-fn",386504264));
var photo_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40196__$1,new cljs.core.Keyword(null,"photo-id","photo-id",108052797));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40198 = ({"key":"FilterListOffIcon","icon":module$node_modules$$mui$icons_material$FilterListOff.default,"tooltip-text":"Clear filters","on-click-fn":(function (){
return table.resetColumnFilters([]);
})});
return obj40198;
})()),helix.core.get_react().createElement(module$node_modules$material_react_table$dist$cjs$index.MRT_ShowHideColumnsButton,(function (){var obj40200 = ({"table":table,"key":"show-columns"});
return obj40200;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40202 = ({"key":"SystemUpdateAltIcon","icon":module$node_modules$$mui$icons_material$SystemUpdateAlt.default,"tooltip-text":"Download view","on-click-fn":(function (){
return kdlyticsgui.mrttables.download_view(table,download_fn,photo_id);
})});
return obj40202;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40204 = ({"key":"DownloadIcon","icon":module$node_modules$$mui$icons_material$Download.default,"tooltip-text":"Full download","on-click-fn":(function (){
return (download_fn.cljs$core$IFn$_invoke$arity$1 ? download_fn.cljs$core$IFn$_invoke$arity$1(data) : download_fn.call(null,data));
})});
return obj40204;
})())], null);
});
if(goog.DEBUG === true){
var G__40205 = G__40192;
(G__40205.displayName = "kdlyticsgui.mrttables/mrt-table-toolbar");

return G__40205;
} else {
return G__40192;
}
})();



kdlyticsgui.mrttables.mrt_default_download_fn = (function kdlyticsgui$mrttables$mrt_default_download_fn(id,clj_cols){
var nested_QMARK_ = cljs.core.contains_QMARK_(cljs.core.first(clj_cols),new cljs.core.Keyword(null,"columns","columns",1998437288));
var dw_cols = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accessorKey","accessorKey",-1383292807),((nested_QMARK_)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"columns","columns",1998437288),clj_cols)):clj_cols)));
return (function (js_data){
return kdlyticsgui.tools.csv_link.cljs$core$IFn$_invoke$arity$3(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(js_data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], null)], 0)),id,dw_cols);
});
});
kdlyticsgui.mrttables.mrt_th_download_fn = (function kdlyticsgui$mrttables$mrt_th_download_fn(id,clj_cols){
var nested_QMARK_ = cljs.core.contains_QMARK_(cljs.core.first(clj_cols),new cljs.core.Keyword(null,"columns","columns",1998437288));
var dw_cols = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accessorKey","accessorKey",-1383292807),((nested_QMARK_)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"columns","columns",1998437288),clj_cols)):clj_cols)));
return (function (js_data){
return kdlyticsgui.tools.csv_link.cljs$core$IFn$_invoke$arity$4(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(js_data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], null)], 0)),id,dw_cols,"|");
});
});
kdlyticsgui.mrttables.show_if_any_is_hidden = (function kdlyticsgui$mrttables$show_if_any_is_hidden(table,groupset){
var visible_ids = cljs.core.set(table.getVisibleLeafColumns().map((function (p1__40206_SHARP_){
return p1__40206_SHARP_.id;
})));
var group_visible_QMARK_ = clojure.set.subset_QMARK_(groupset,visible_ids);
if(group_visible_QMARK_){
var seq__40207 = cljs.core.seq(groupset);
var chunk__40208 = null;
var count__40209 = (0);
var i__40210 = (0);
while(true){
if((i__40210 < count__40209)){
var id = chunk__40208.cljs$core$IIndexed$_nth$arity$2(null,i__40210);
table.getColumn(id).toggleVisibility(false);


var G__40439 = seq__40207;
var G__40440 = chunk__40208;
var G__40441 = count__40209;
var G__40442 = (i__40210 + (1));
seq__40207 = G__40439;
chunk__40208 = G__40440;
count__40209 = G__40441;
i__40210 = G__40442;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40207);
if(temp__5804__auto__){
var seq__40207__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40207__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40207__$1);
var G__40443 = cljs.core.chunk_rest(seq__40207__$1);
var G__40444 = c__5568__auto__;
var G__40445 = cljs.core.count(c__5568__auto__);
var G__40446 = (0);
seq__40207 = G__40443;
chunk__40208 = G__40444;
count__40209 = G__40445;
i__40210 = G__40446;
continue;
} else {
var id = cljs.core.first(seq__40207__$1);
table.getColumn(id).toggleVisibility(false);


var G__40447 = cljs.core.next(seq__40207__$1);
var G__40448 = null;
var G__40449 = (0);
var G__40450 = (0);
seq__40207 = G__40447;
chunk__40208 = G__40448;
count__40209 = G__40449;
i__40210 = G__40450;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var seq__40211 = cljs.core.seq(groupset);
var chunk__40212 = null;
var count__40213 = (0);
var i__40214 = (0);
while(true){
if((i__40214 < count__40213)){
var id = chunk__40212.cljs$core$IIndexed$_nth$arity$2(null,i__40214);
table.getColumn(id).toggleVisibility(true);


var G__40452 = seq__40211;
var G__40453 = chunk__40212;
var G__40454 = count__40213;
var G__40455 = (i__40214 + (1));
seq__40211 = G__40452;
chunk__40212 = G__40453;
count__40213 = G__40454;
i__40214 = G__40455;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40211);
if(temp__5804__auto__){
var seq__40211__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40211__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40211__$1);
var G__40456 = cljs.core.chunk_rest(seq__40211__$1);
var G__40457 = c__5568__auto__;
var G__40458 = cljs.core.count(c__5568__auto__);
var G__40459 = (0);
seq__40211 = G__40456;
chunk__40212 = G__40457;
count__40213 = G__40458;
i__40214 = G__40459;
continue;
} else {
var id = cljs.core.first(seq__40211__$1);
table.getColumn(id).toggleVisibility(true);


var G__40461 = cljs.core.next(seq__40211__$1);
var G__40462 = null;
var G__40463 = (0);
var G__40464 = (0);
seq__40211 = G__40461;
chunk__40212 = G__40462;
count__40213 = G__40463;
i__40214 = G__40464;
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
 * This returns the top right Toolbar function with the standard actions
 */
kdlyticsgui.mrttables.mrt_qs_table_toolbar = (function (){var G__40216 = (function kdlyticsgui$mrttables$mrt_qs_table_toolbar_render(props__29990__auto__,maybe_ref__29991__auto__){
var vec__40217 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__29990__auto__),maybe_ref__29991__auto__], null);
var map__40220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40217,(0),null);
var map__40220__$1 = cljs.core.__destructure_map(map__40220);
var table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40220__$1,new cljs.core.Keyword(null,"table","table",-564943036));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40220__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var download_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40220__$1,new cljs.core.Keyword(null,"download-fn","download-fn",386504264));
var photo_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40220__$1,new cljs.core.Keyword(null,"photo-id","photo-id",108052797));
var stars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40220__$1,new cljs.core.Keyword(null,"stars","stars",-556837771));

return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40222 = ({"key":"HelpCenter","icon":module$node_modules$$mui$icons_material$HelpCenter.default,"tooltip-text":"Help","on-click-fn":(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"generic-modal","generic-modal",472636301),kdlyticsgui.mrttables.help_modal], null));
})});
return obj40222;
})()),helix.core.get_react().createElement(module$node_modules$$mui$material$node$index.Divider,(function (){var obj40224 = ({"key":"divider1","variant":"middle","orientation":"vertical"});
return obj40224;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40226 = ({"key":"Flag","icon":module$node_modules$$mui$icons_material$Flag.default,"tooltip-text":"Show flags","on-click-fn":(function (){
return kdlyticsgui.mrttables.show_if_any_is_hidden(table,cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"SENIOR-WIDE","SENIOR-WIDE",-1442582607),new cljs.core.Keyword(null,"BASEL_III_DESIGNATION","BASEL_III_DESIGNATION",-956105965),new cljs.core.Keyword(null,"CAPITAL_TRIGGER_TYPE","CAPITAL_TRIGGER_TYPE",-176989636),new cljs.core.Keyword(null,"HYBRID-WIDE","HYBRID-WIDE",86574970),new cljs.core.Keyword(null,"INTERNATIONAL_SUKUK","INTERNATIONAL_SUKUK",1346917446),new cljs.core.Keyword(null,"ESG","ESG",-809698),new cljs.core.Keyword(null,"MSCI-SCORE","MSCI-SCORE",1736373352),new cljs.core.Keyword(null,"Transition_finance_universe","Transition_finance_universe",2136897928)], null))));
})});
return obj40226;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40228 = ({"key":"WorkSpaces","icon":module$node_modules$$mui$icons_material$Workspaces.default,"tooltip-text":"Show index membership","on-click-fn":(function (){
return kdlyticsgui.mrttables.show_if_any_is_hidden(table,cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cembi","cembi",1924920241),new cljs.core.Keyword(null,"cembi-ig","cembi-ig",36303355),new cljs.core.Keyword(null,"embi","embi",306226696),new cljs.core.Keyword(null,"embi-ig","embi-ig",-1527513480),new cljs.core.Keyword(null,"us-agg","us-agg",-1120832322),new cljs.core.Keyword(null,"global-agg","global-agg",1175551163),new cljs.core.Keyword(null,"jaci","jaci",-148116884)], null))));
})});
return obj40228;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40230 = ({"key":"CallEnd","icon":module$node_modules$$mui$icons_material$CallEnd.default,"tooltip-text":"Show calls","on-click-fn":(function (){
return kdlyticsgui.mrttables.show_if_any_is_hidden(table,cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NXT_CALL_DT","NXT_CALL_DT",-1417211252),new cljs.core.Keyword(null,"NXT_CALL_PX","NXT_CALL_PX",-718484060),new cljs.core.Keyword(null,"days-to-call","days-to-call",1433683749),new cljs.core.Keyword(null,"price-vs-call","price-vs-call",626161736),new cljs.core.Keyword(null,"MATURITY","MATURITY",1469675090)], null))));
})});
return obj40230;
})()),helix.core.get_react().createElement(module$node_modules$$mui$material$node$index.Divider,(function (){var obj40232 = ({"key":"divider2","variant":"middle","orientation":"vertical"});
return obj40232;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40234 = ({"key":"StarIcon","icon":module$node_modules$$mui$icons_material$Star.default,"tooltip-text":"Filter stars","on-click-fn":(function (){
return table.setColumnFilters([({"id": "star", "value": clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.deref(stars))})]);
})});
return obj40234;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40236 = ({"key":"FilterListOffIcon","icon":module$node_modules$$mui$icons_material$FilterListOff.default,"tooltip-text":"Clear filters","on-click-fn":(function (){
return table.resetColumnFilters([]);
})});
return obj40236;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40238 = ({"key":"StarBorderIcon","icon":module$node_modules$$mui$icons_material$StarBorder.default,"tooltip-text":"Clear stars","on-click-fn":(function (){
return cljs.core.reset_BANG_(stars,cljs.core.set(null));
})});
return obj40238;
})()),helix.core.get_react().createElement(module$node_modules$$mui$material$node$index.Divider,(function (){var obj40240 = ({"key":"divider3","variant":"middle","orientation":"vertical"});
return obj40240;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40242 = ({"key":"ExpandIcon","icon":module$node_modules$$mui$icons_material$Expand.default,"tooltip-text":"Show more rows","on-click-fn":(function (){
return table.setPageSize(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(table.getState().pagination.pageSize,(200)))?(15):(200)));
})});
return obj40242;
})()),helix.core.get_react().createElement(module$node_modules$material_react_table$dist$cjs$index.MRT_ShowHideColumnsButton,(function (){var obj40244 = ({"table":table,"key":"show-columns"});
return obj40244;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40246 = ({"key":"SystemUpdateAltIcon","icon":module$node_modules$$mui$icons_material$SystemUpdateAlt.default,"tooltip-text":"Download view","on-click-fn":(function (){
var G__40247 = table.getPrePaginationRowModel().rows.map((function (row){
return row.original;
}));
return (download_fn.cljs$core$IFn$_invoke$arity$1 ? download_fn.cljs$core$IFn$_invoke$arity$1(G__40247) : download_fn.call(null,G__40247));
})});
return obj40246;
})()),helix.core.get_react().createElement(kdlyticsgui.mrttables.icon_element_button_helix,(function (){var obj40249 = ({"key":"DownloadIcon","icon":module$node_modules$$mui$icons_material$Download.default,"tooltip-text":"Full download","on-click-fn":(function (){
return (download_fn.cljs$core$IFn$_invoke$arity$1 ? download_fn.cljs$core$IFn$_invoke$arity$1(data) : download_fn.call(null,data));
})});
return obj40249;
})())], null);
});
if(goog.DEBUG === true){
var G__40250 = G__40216;
(G__40250.displayName = "kdlyticsgui.mrttables/mrt-qs-table-toolbar");

return G__40250;
} else {
return G__40216;
}
})();



kdlyticsgui.mrttables.advanced_spot_chart_isins = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
/**
 * note use of or as subsitute for (if value-is-not-nil value default). This is to make the basic table subset of fast table
 */
kdlyticsgui.mrttables.base_props = (function kdlyticsgui$mrttables$base_props(mdata,mcolumns,clj_option_map,js_initial_state,toolbar,download_fn,photo_id){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"muiTableHeadCellProps","muiTableHeadCellProps",373931073),new cljs.core.Keyword(null,"muiTableBodyCellProps","muiTableBodyCellProps",-1647659966),new cljs.core.Keyword(null,"initialState","initialState",-1307412411),new cljs.core.Keyword(null,"displayColumnDefOptions","displayColumnDefOptions",-361117435),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"enableColumnActions","enableColumnActions",960040394),new cljs.core.Keyword(null,"renderToolbarInternalActions","renderToolbarInternalActions",2044346935),new cljs.core.Keyword(null,"muiTableBodyProps","muiTableBodyProps",-1884785223),new cljs.core.Keyword(null,"data","data",-232669377)],[({"sx": ({"borderRight": "1px solid rgba(224,224,224,1)"})}),({"sx": ({"borderRight": "1px solid rgba(224,224,224,1)"})}),(function (){var or__5045__auto__ = js_initial_state;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ({"density": "compact", "showColumnFilters": true, "columnFilters": [], "pagination": ({})});
}
})(),({"mrt-row-expand": ({"size": (75), "muiTableBodyCellProps": ({"sx": ({"backgroundColor": "inherit"})})})}),mcolumns,false,(function (x){
return helix.core.get_react().createElement((function (){var or__5045__auto__ = toolbar;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return kdlyticsgui.mrttables.mrt_table_toolbar;
}
})(),(function (){var obj40252 = ({"table":x.table,"data":mdata,"download-fn":(function (){var or__5045__auto__ = download_fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return kdlyticsgui.mrttables.mrt_default_download_fn(photo_id,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(mcolumns,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], null)], 0)));
}
})(),"photo-id":photo_id});
return obj40252;
})());
}),({"sx": ({"& tr:nth-of-type(odd)": ({"backgroundColor": "#f5f5f5"})})}),mdata]),clj_option_map], 0));
});

/**
 * The magic is in useEffect which will communicate back and forth with reagent
 *   Note you need to add extra key with a dummy value that changes every time you want full re-render!!!
 *   
 */
kdlyticsgui.mrttables.material_react_table_template = (function (){var G__40256 = (function kdlyticsgui$mrttables$material_react_table_template_render(props__29990__auto__,maybe_ref__29991__auto__){
var vec__40257 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__29990__auto__),maybe_ref__29991__auto__], null);
var map__40260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40257,(0),null);
var map__40260__$1 = cljs.core.__destructure_map(map__40260);
var clj_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40260__$1,new cljs.core.Keyword(null,"clj-columns","clj-columns",678745596));
var photo_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40260__$1,new cljs.core.Keyword(null,"photo-id","photo-id",108052797));
var external_state_reference = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40260__$1,new cljs.core.Keyword(null,"external-state-reference","external-state-reference",-1421880032));
var initial_external_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40260__$1,new cljs.core.Keyword(null,"initial-external-state","initial-external-state",690996258));
var download_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40260__$1,new cljs.core.Keyword(null,"download-fn","download-fn",386504264));
var clj_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40260__$1,new cljs.core.Keyword(null,"clj-data","clj-data",-774432148));
var clj_option_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40260__$1,new cljs.core.Keyword(null,"clj-option-map","clj-option-map",1277941618));
var toolbar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40260__$1,new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065));
var js_initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40260__$1,new cljs.core.Keyword(null,"js-initial-state","js-initial-state",234739608));

var pinned_cols = cljs.core.clj__GT_js(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accessorKey","accessorKey",-1383292807),new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(cljs.core.first(clj_columns))),"mrt-row-expand"));
var vec__40261 = helix.hooks.use_state(initial_external_state.columnFilters);
var ffilter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40261,(0),null);
var setFilter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40261,(1),null);
var vec__40264 = helix.hooks.use_state(initial_external_state.grouping);
var grouping = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40264,(0),null);
var setGrouping = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40264,(1),null);
var vec__40267 = helix.hooks.use_state(initial_external_state.expanded);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40267,(0),null);
var setExpanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40267,(1),null);
var mdata = (function (){var G__40270 = (function (){
if(cljs.core.array_QMARK_(clj_data)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"enableGrouping","enableGrouping",1673342785).cljs$core$IFn$_invoke$arity$1(clj_option_map))){
clj_data.forEach((function (p1__40253_SHARP_){
return (p1__40253_SHARP_["dummy"] = "");
}));
} else {
}

return clj_data;
} else {
return cljs.core.clj__GT_js((cljs.core.truth_(new cljs.core.Keyword(null,"enableGrouping","enableGrouping",1673342785).cljs$core$IFn$_invoke$arity$1(clj_option_map))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40254_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40254_SHARP_,new cljs.core.Keyword(null,"dummy","dummy",2059765854),"");
}),clj_data):clj_data));
}
});
var G__40271 = [clj_data,clj_option_map];
return (helix.hooks.raw_use_memo.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_memo.cljs$core$IFn$_invoke$arity$2(G__40270,G__40271) : helix.hooks.raw_use_memo.call(null,G__40270,G__40271));
})();
var mcolumns = (function (){var G__40272 = (function (){
return cljs.core.clj__GT_js(clj_columns);
});
var G__40273 = [clj_columns];
return (helix.hooks.raw_use_memo.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_memo.cljs$core$IFn$_invoke$arity$2(G__40272,G__40273) : helix.hooks.raw_use_memo.call(null,G__40272,G__40273));
})();
var x = (function (){var G__40274 = helix.hooks.wrap_fx((function (){
var target = ({"columnFilters": ffilter, "grouping": grouping, "expanded": expanded});
if((external_state_reference instanceof cljs.core.Keyword)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [external_state_reference,target], null));
} else {
return cljs.core.reset_BANG_(external_state_reference,target);
}
}));
var G__40275 = [ffilter,grouping,expanded];
return (helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__40274,G__40275) : helix.hooks.raw_use_effect.call(null,G__40274,G__40275));
})();
var props = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kdlyticsgui.mrttables.base_props(mdata,mcolumns,clj_option_map,js_initial_state,toolbar,download_fn,photo_id),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"onGroupingChange","onGroupingChange",-251588025),setGrouping,new cljs.core.Keyword(null,"onColumnFiltersChange","onColumnFiltersChange",877398013),setFilter,new cljs.core.Keyword(null,"onExpandedChange","onExpandedChange",-1363025082),setExpanded,new cljs.core.Keyword(null,"state","state",-1988618099),({"columnFilters": ffilter, "grouping": grouping, "expanded": expanded, "columnPinning": ({"left": pinned_cols, "right": []})})], null)], 0));
return helix.core.get_react().createElement("div",(function (){var obj40277 = ({"id":photo_id});
return obj40277;
})(),helix.core.get_react().createElement(module$node_modules$material_react_table$dist$cjs$index.default,helix.impl.props.merge_obj(({}),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(props))));
});
if(goog.DEBUG === true){
var G__40280 = G__40256;
(G__40280.displayName = "kdlyticsgui.mrttables/material-react-table-template");

return G__40280;
} else {
return G__40256;
}
})();




/**
 * The magic is in useEffect which will communicate back and forth with reagent
 *   Note you need to add extra key with a dummy value that changes every time you want full re-render!!!
 *   
 */
kdlyticsgui.mrttables.material_react_table_template_managed = (function (){var G__40282 = (function kdlyticsgui$mrttables$material_react_table_template_managed_render(props__29990__auto__,maybe_ref__29991__auto__){
var vec__40283 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__29990__auto__),maybe_ref__29991__auto__], null);
var map__40286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40283,(0),null);
var map__40286__$1 = cljs.core.__destructure_map(map__40286);
var clj_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40286__$1,new cljs.core.Keyword(null,"clj-data","clj-data",-774432148));
var clj_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40286__$1,new cljs.core.Keyword(null,"clj-columns","clj-columns",678745596));
var clj_option_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40286__$1,new cljs.core.Keyword(null,"clj-option-map","clj-option-map",1277941618));
var js_initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40286__$1,new cljs.core.Keyword(null,"js-initial-state","js-initial-state",234739608));
var external_state_reference = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40286__$1,new cljs.core.Keyword(null,"external-state-reference","external-state-reference",-1421880032));
var toolbar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40286__$1,new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065));
var download_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40286__$1,new cljs.core.Keyword(null,"download-fn","download-fn",386504264));
var photo_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40286__$1,new cljs.core.Keyword(null,"photo-id","photo-id",108052797));

var vec__40287 = helix.hooks.use_state(js_initial_state.columnFilters);
var ffilter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40287,(0),null);
var setFilter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40287,(1),null);
var vec__40290 = helix.hooks.use_state(js_initial_state.grouping);
var grouping = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40290,(0),null);
var setGrouping = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40290,(1),null);
var vec__40293 = helix.hooks.use_state(js_initial_state.expanded);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40293,(0),null);
var setExpanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40293,(1),null);
var mdata = (function (){var G__40296 = (function (){
if(cljs.core.array_QMARK_(clj_data)){
return clj_data;
} else {
return cljs.core.clj__GT_js(clj_data);
}
});
var G__40297 = [clj_data];
return (helix.hooks.raw_use_memo.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_memo.cljs$core$IFn$_invoke$arity$2(G__40296,G__40297) : helix.hooks.raw_use_memo.call(null,G__40296,G__40297));
})();
var mcolumns = (function (){var G__40298 = (function (){
return cljs.core.clj__GT_js(clj_columns);
});
var G__40299 = [clj_columns];
return (helix.hooks.raw_use_memo.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_memo.cljs$core$IFn$_invoke$arity$2(G__40298,G__40299) : helix.hooks.raw_use_memo.call(null,G__40298,G__40299));
})();
var x = (function (){var G__40300 = helix.hooks.wrap_fx((function (){
var target = ({"columnFilters": ffilter, "grouping": grouping, "expanded": expanded});
if((external_state_reference instanceof cljs.core.Keyword)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [external_state_reference,target], null));
} else {
return cljs.core.reset_BANG_(external_state_reference,target);
}
}));
var G__40301 = [ffilter,grouping,expanded];
return (helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__40300,G__40301) : helix.hooks.raw_use_effect.call(null,G__40300,G__40301));
})();
var props = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kdlyticsgui.mrttables.base_props(mdata,mcolumns,clj_option_map,js_initial_state,toolbar,download_fn,photo_id),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"enableGrouping","enableGrouping",1673342785),true,new cljs.core.Keyword(null,"enableExpanding","enableExpanding",-1928610430),true,new cljs.core.Keyword(null,"enablePinning","enablePinning",-1460484884),true,new cljs.core.Keyword(null,"onGroupingChange","onGroupingChange",-251588025),setGrouping,new cljs.core.Keyword(null,"onColumnFiltersChange","onColumnFiltersChange",877398013),setFilter,new cljs.core.Keyword(null,"onExpandedChange","onExpandedChange",-1363025082),setExpanded,new cljs.core.Keyword(null,"state","state",-1988618099),({"columnFilters": ffilter, "grouping": grouping, "expanded": expanded})], null)], 0));
return helix.core.get_react().createElement("div",(function (){var obj40303 = ({"id":photo_id});
return obj40303;
})(),helix.core.get_react().createElement(module$node_modules$material_react_table$dist$cjs$index.default,helix.impl.props.merge_obj(({}),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(props))));
});
if(goog.DEBUG === true){
var G__40306 = G__40282;
(G__40306.displayName = "kdlyticsgui.mrttables/material-react-table-template-managed");

return G__40306;
} else {
return G__40282;
}
})();




/**
 * Same as material-react-table-template + only pin grouping
 *   
 */
kdlyticsgui.mrttables.material_react_table_template_ta = (function (){var G__40310 = (function kdlyticsgui$mrttables$material_react_table_template_ta_render(props__29990__auto__,maybe_ref__29991__auto__){
var vec__40311 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__29990__auto__),maybe_ref__29991__auto__], null);
var map__40314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40311,(0),null);
var map__40314__$1 = cljs.core.__destructure_map(map__40314);
var clj_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40314__$1,new cljs.core.Keyword(null,"clj-columns","clj-columns",678745596));
var photo_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40314__$1,new cljs.core.Keyword(null,"photo-id","photo-id",108052797));
var external_state_reference = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40314__$1,new cljs.core.Keyword(null,"external-state-reference","external-state-reference",-1421880032));
var initial_external_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40314__$1,new cljs.core.Keyword(null,"initial-external-state","initial-external-state",690996258));
var download_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40314__$1,new cljs.core.Keyword(null,"download-fn","download-fn",386504264));
var clj_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40314__$1,new cljs.core.Keyword(null,"clj-data","clj-data",-774432148));
var clj_option_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40314__$1,new cljs.core.Keyword(null,"clj-option-map","clj-option-map",1277941618));
var toolbar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40314__$1,new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065));
var js_initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40314__$1,new cljs.core.Keyword(null,"js-initial-state","js-initial-state",234739608));

var pinned_cols = cljs.core.clj__GT_js(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accessorKey","accessorKey",-1383292807),new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(cljs.core.first(clj_columns))),"mrt-row-expand"));
var vec__40315 = helix.hooks.use_state(initial_external_state.columnFilters);
var ffilter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40315,(0),null);
var setFilter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40315,(1),null);
var vec__40318 = helix.hooks.use_state(initial_external_state.grouping);
var grouping = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40318,(0),null);
var setGrouping = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40318,(1),null);
var vec__40321 = helix.hooks.use_state(initial_external_state.expanded);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40321,(0),null);
var setExpanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40321,(1),null);
var mdata = (function (){var G__40324 = (function (){
if(cljs.core.array_QMARK_(clj_data)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"enableGrouping","enableGrouping",1673342785).cljs$core$IFn$_invoke$arity$1(clj_option_map))){
clj_data.forEach((function (p1__40307_SHARP_){
return (p1__40307_SHARP_["dummy"] = "");
}));
} else {
}

return clj_data;
} else {
return cljs.core.clj__GT_js((cljs.core.truth_(new cljs.core.Keyword(null,"enableGrouping","enableGrouping",1673342785).cljs$core$IFn$_invoke$arity$1(clj_option_map))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40308_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40308_SHARP_,new cljs.core.Keyword(null,"dummy","dummy",2059765854),"");
}),clj_data):clj_data));
}
});
var G__40325 = [clj_data,clj_option_map];
return (helix.hooks.raw_use_memo.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_memo.cljs$core$IFn$_invoke$arity$2(G__40324,G__40325) : helix.hooks.raw_use_memo.call(null,G__40324,G__40325));
})();
var mcolumns = (function (){var G__40326 = (function (){
return cljs.core.clj__GT_js(clj_columns);
});
var G__40327 = [clj_columns];
return (helix.hooks.raw_use_memo.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_memo.cljs$core$IFn$_invoke$arity$2(G__40326,G__40327) : helix.hooks.raw_use_memo.call(null,G__40326,G__40327));
})();
var x = (function (){var G__40328 = helix.hooks.wrap_fx((function (){
var target = ({"columnFilters": ffilter, "grouping": grouping, "expanded": expanded});
if((external_state_reference instanceof cljs.core.Keyword)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [external_state_reference,target], null));
} else {
return cljs.core.reset_BANG_(external_state_reference,target);
}
}));
var G__40329 = [ffilter,grouping,expanded];
return (helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__40328,G__40329) : helix.hooks.raw_use_effect.call(null,G__40328,G__40329));
})();
var props = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kdlyticsgui.mrttables.base_props(mdata,mcolumns,clj_option_map,js_initial_state,toolbar,download_fn,photo_id),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"onGroupingChange","onGroupingChange",-251588025),setGrouping,new cljs.core.Keyword(null,"onColumnFiltersChange","onColumnFiltersChange",877398013),setFilter,new cljs.core.Keyword(null,"onExpandedChange","onExpandedChange",-1363025082),setExpanded,new cljs.core.Keyword(null,"state","state",-1988618099),({"columnFilters": ffilter, "grouping": grouping, "expanded": expanded, "columnPinning": ({"left": grouping, "right": []})})], null)], 0));
return helix.core.get_react().createElement("div",(function (){var obj40331 = ({"id":photo_id});
return obj40331;
})(),helix.core.get_react().createElement(module$node_modules$material_react_table$dist$cjs$index.default,helix.impl.props.merge_obj(({}),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(props))));
});
if(goog.DEBUG === true){
var G__40334 = G__40310;
(G__40334.displayName = "kdlyticsgui.mrttables/material-react-table-template-ta");

return G__40334;
} else {
return G__40310;
}
})();




/**
 * No external state hence a lot faster
 *   Note you need to add extra key with a dummy value that changes every time you want full re-render!!!
 */
kdlyticsgui.mrttables.material_react_table_template_fast = (function (){var G__40338 = (function kdlyticsgui$mrttables$material_react_table_template_fast_render(props__29990__auto__,maybe_ref__29991__auto__){
var vec__40339 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__29990__auto__),maybe_ref__29991__auto__], null);
var map__40342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40339,(0),null);
var map__40342__$1 = cljs.core.__destructure_map(map__40342);
var clj_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40342__$1,new cljs.core.Keyword(null,"clj-data","clj-data",-774432148));
var clj_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40342__$1,new cljs.core.Keyword(null,"clj-columns","clj-columns",678745596));
var clj_option_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40342__$1,new cljs.core.Keyword(null,"clj-option-map","clj-option-map",1277941618));
var js_initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40342__$1,new cljs.core.Keyword(null,"js-initial-state","js-initial-state",234739608));
var toolbar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40342__$1,new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065));
var download_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40342__$1,new cljs.core.Keyword(null,"download-fn","download-fn",386504264));
var photo_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40342__$1,new cljs.core.Keyword(null,"photo-id","photo-id",108052797));

var pinned_cols = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accessorKey","accessorKey",-1383292807),new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(cljs.core.first(clj_columns)));
var mdata = (function (){var G__40343 = (function (){
if(cljs.core.array_QMARK_(clj_data)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"enableGrouping","enableGrouping",1673342785).cljs$core$IFn$_invoke$arity$1(clj_option_map))){
clj_data.forEach((function (p1__40335_SHARP_){
return (p1__40335_SHARP_["dummy"] = "");
}));
} else {
}

return clj_data;
} else {
return cljs.core.clj__GT_js((cljs.core.truth_(new cljs.core.Keyword(null,"enableGrouping","enableGrouping",1673342785).cljs$core$IFn$_invoke$arity$1(clj_option_map))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__40336_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40336_SHARP_,new cljs.core.Keyword(null,"dummy","dummy",2059765854),"");
}),clj_data):clj_data));
}
});
var G__40344 = [clj_data,clj_option_map];
return (helix.hooks.raw_use_memo.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_memo.cljs$core$IFn$_invoke$arity$2(G__40343,G__40344) : helix.hooks.raw_use_memo.call(null,G__40343,G__40344));
})();
var mcolumns = (function (){var G__40345 = (function (){
return cljs.core.clj__GT_js(clj_columns);
});
var G__40346 = [clj_columns];
return (helix.hooks.raw_use_memo.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_memo.cljs$core$IFn$_invoke$arity$2(G__40345,G__40346) : helix.hooks.raw_use_memo.call(null,G__40345,G__40346));
})();
var props = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kdlyticsgui.mrttables.base_props(mdata,mcolumns,clj_option_map,js_initial_state,toolbar,download_fn,photo_id),((cljs.core.seq(pinned_cols))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),({"columnPinning": ({"left": cljs.core.clj__GT_js(pinned_cols), "right": []})})], null):null)], 0));
return helix.core.get_react().createElement("div",(function (){var obj40348 = ({"id":photo_id});
return obj40348;
})(),helix.core.get_react().createElement(module$node_modules$material_react_table$dist$cjs$index.default,helix.impl.props.merge_obj(({}),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(props))));
});
if(goog.DEBUG === true){
var G__40351 = G__40338;
(G__40351.displayName = "kdlyticsgui.mrttables/material-react-table-template-fast");

return G__40351;
} else {
return G__40338;
}
})();




kdlyticsgui.mrttables.material_react_table_template_basic = (function (){var G__40354 = (function kdlyticsgui$mrttables$material_react_table_template_basic_render(props__29990__auto__,maybe_ref__29991__auto__){
var vec__40355 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__29990__auto__),maybe_ref__29991__auto__], null);
var argument_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40355,(0),null);

return helix.core.get_react().createElement(kdlyticsgui.mrttables.material_react_table_template_fast,helix.impl.props.merge_obj(({}),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(cljs.core.update.cljs$core$IFn$_invoke$arity$3(argument_map,new cljs.core.Keyword(null,"clj-option-map","clj-option-map",1277941618),(function (p1__40352_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enablePagination","enablePagination",594938512),false,new cljs.core.Keyword(null,"enableBottomToolbar","enableBottomToolbar",-255865294),false], null),p1__40352_SHARP_], 0));
})))));
});
if(goog.DEBUG === true){
var G__40360 = G__40354;
(G__40360.displayName = "kdlyticsgui.mrttables/material-react-table-template-basic");

return G__40360;
} else {
return G__40354;
}
})();



kdlyticsgui.mrttables.risk_table_columns = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"financial-seniority","financial-seniority",-1156812512),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"yield","yield",177875009),new cljs.core.Keyword(null,"z-spread","z-spread",-1184367967),new cljs.core.Keyword(null,"sector-gics","sector-gics",-543820638),new cljs.core.Keyword(null,"weight-delta","weight-delta",-1239784638),new cljs.core.Keyword(null,"contrib-BBG_CEMBI_D1Y_BETA","contrib-BBG_CEMBI_D1Y_BETA",-1997115165),new cljs.core.Keyword(null,"total-return-ytd","total-return-ytd",-1177026717),new cljs.core.Keyword(null,"nominal","nominal",413899877),new cljs.core.Keyword(null,"contrib-yield","contrib-yield",902893861),new cljs.core.Keyword(null,"contrib-zspread","contrib-zspread",-114875067),new cljs.core.Keyword(null,"jensen-ytd","jensen-ytd",-366876154),new cljs.core.Keyword(null,"bm-weight","bm-weight",217267431),new cljs.core.Keyword(null,"mdur-delta","mdur-delta",-395332953),new cljs.core.Keyword(null,"contrib-BBG_EMBI_D1Y_BETA","contrib-BBG_EMBI_D1Y_BETA",-278062136),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"msci-rating","msci-rating",275557481),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"maturity-band","maturity-band",760694665),new cljs.core.Keyword(null,"bm-contrib-BBG_CEMBIIG_D1Y_BETA","bm-contrib-BBG_CEMBIIG_D1Y_BETA",177933578),new cljs.core.Keyword(null,"sector","sector",-1444247062),new cljs.core.Keyword(null,"contrib-delta-BBG_CEMBI_D1Y_BETA","contrib-delta-BBG_CEMBI_D1Y_BETA",1720833994),new cljs.core.Keyword(null,"duration-times-spread-weight","duration-times-spread-weight",1895429644),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"bm-contrib-BBG_CEMBI_D1Y_BETA","bm-contrib-BBG_CEMBI_D1Y_BETA",-2086836499),new cljs.core.Keyword(null,"cash-pct","cash-pct",606312175),new cljs.core.Keyword(null,"bm-contrib-eir-duration","bm-contrib-eir-duration",1013923984),new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"quant-value-4d","quant-value-4d",792434512),new cljs.core.Keyword(null,"contrib-mdur","contrib-mdur",1999017105),new cljs.core.Keyword(null,"quant-value-2d","quant-value-2d",-254987919),new cljs.core.Keyword(null,"contrib-gspread","contrib-gspread",-1345810030),new cljs.core.Keyword(null,"bm-contrib-yield","bm-contrib-yield",-1399804238),new cljs.core.Keyword(null,"sector-baml","sector-baml",1745449075),new cljs.core.Keyword(null,"contrib-delta-BBG_CEMBIIG_D1Y_BETA","contrib-delta-BBG_CEMBIIG_D1Y_BETA",594513619),new cljs.core.Keyword(null,"id-show","id-show",1455582548),new cljs.core.Keyword(null,"emd-region","emd-region",-405932555),new cljs.core.Keyword(null,"rating-score","rating-score",1260592885),new cljs.core.Keyword(null,"isin","isin",-1197420747),new cljs.core.Keyword(null,"issuer","issuer",-1199257898),new cljs.core.Keyword(null,"contrib-bond-yield-summary","contrib-bond-yield-summary",-1647692521),new cljs.core.Keyword(null,"cembi-beta-last-year","cembi-beta-last-year",-1252567592),new cljs.core.Keyword(null,"cembi-beta-previous-year","cembi-beta-previous-year",-81352487),new cljs.core.Keyword(null,"contrib-BBG_CEMBIIG_D1Y_BETA","contrib-BBG_CEMBIIG_D1Y_BETA",-802340039),new cljs.core.Keyword(null,"contrib-delta-BBG_EMBI_D1Y_BETA","contrib-delta-BBG_EMBI_D1Y_BETA",774111514),new cljs.core.Keyword(null,"contrib-yield-summary","contrib-yield-summary",485317050),new cljs.core.Keyword(null,"bm-contrib-BBG_EMBI_D1Y_BETA","bm-contrib-BBG_EMBI_D1Y_BETA",-610564933),new cljs.core.Keyword(null,"country","country",312965309),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"dummy","dummy",2059765854),new cljs.core.Keyword(null,"g-spread","g-spread",973847710),new cljs.core.Keyword(null,"contrib-beta","contrib-beta",-2120440514),new cljs.core.Keyword(null,"rating","rating",144173662)],[kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Style","financial-seniority",(120)),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("thinkFolio ID","description",(400)),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Yield","qt-yield",(45),kdlyticsgui.mrttables.round2_STAR_100,kdlyticsgui.mrttables.median),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Z","qt-libor-spread",(45),kdlyticsgui.mrttables.nb_thousand_cell_format,kdlyticsgui.mrttables.median),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Sector GICS","qt-gics-sector",(120)),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Delta","weight-delta",(50),kdlyticsgui.mrttables.round2,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Fund Bbg","contrib-BBG_CEMBI_D1Y_BETA",(65),kdlyticsgui.mrttables.round2,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("YTD TR","total-return-ytd",(50),(function (p1__40361_SHARP_){
return kdlyticsgui.mrttables.nb_cell_format("%.1f%",100.0,p1__40361_SHARP_);
}),kdlyticsgui.mrttables.median),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Nominal","original-quantity",(100),kdlyticsgui.mrttables.nb_thousand_cell_format,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Fund","contrib-yield",(50),kdlyticsgui.mrttables.round2pc,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Fund","contrib-zspread",(60),kdlyticsgui.mrttables.round0,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Jensen","jensen-ytd",(50),(function (p1__40362_SHARP_){
return kdlyticsgui.mrttables.nb_cell_format("%.1f%",100.0,p1__40362_SHARP_);
}),kdlyticsgui.mrttables.median),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Index","bm-weight",(50),kdlyticsgui.mrttables.round2,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Delta","mdur-delta",(50),kdlyticsgui.mrttables.round2,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Fund Bbg","contrib-BBG_EMBI_D1Y_BETA",(65),kdlyticsgui.mrttables.round2,"sum"),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Name","NAME",(120)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Rating","msci-rating",(75)),new cljs.core.Keyword(null,"sortMethod","sortMethod",1988974304),null),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Value","base-value",(100),kdlyticsgui.mrttables.nb_thousand_cell_format,"sum"),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Maturity","qt-final-maturity-band",(120)),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Index Bbg","bm-contrib-BBG_CEMBIIG_D1Y_BETA",(65),kdlyticsgui.mrttables.round2,"sum"),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Sector","qt-jpm-sector",(120)),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Delta Bbg","contrib-delta-BBG_CEMBI_D1Y_BETA",(65),kdlyticsgui.mrttables.round2,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("DTS","duration-times-spread-weight",(45),kdlyticsgui.mrttables.round0,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("M dur","qt-modified-duration",(45),kdlyticsgui.mrttables.round1,kdlyticsgui.mrttables.median),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Index Bbg","bm-contrib-BBG_CEMBI_D1Y_BETA",(65),kdlyticsgui.mrttables.round2,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Cash","cash-pct",(50),kdlyticsgui.mrttables.round2pc100,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Index","bm-contrib-eir-duration",(50),kdlyticsgui.mrttables.round2,"sum"),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Region","jpm-region",(120)),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("4D","quant-value-4d",(50),kdlyticsgui.mrttables.round2,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Fund","contrib-mdur",(50),kdlyticsgui.mrttables.round2,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("2D","quant-value-2d",(50),kdlyticsgui.mrttables.round2,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("G-spread","contrib-gspread",(60),kdlyticsgui.mrttables.round0,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Index","bm-contrib-yield",(50),kdlyticsgui.mrttables.round2pc,"sum"),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Sector BAML3","qt-BAML-level-3",(120)),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Delta Bbg","contrib-delta-BBG_CEMBIIG_D1Y_BETA",(65),kdlyticsgui.mrttables.round2,"sum"),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("ID","id",(65)),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("EMD region","emd-region",(120)),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Rating","qt-iam-int-lt-median-rating-score",(120)),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("ISIN","isin",(110)),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Issuer","TICKER",(120)),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Bond yield","contrib-bond-yield",(70),kdlyticsgui.mrttables.round2pc100,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5(goog.string.unescapeEntities("&beta;"),"cembi-beta-last-year",(45),kdlyticsgui.mrttables.round1,kdlyticsgui.mrttables.median),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5(goog.string.unescapeEntities("LY &beta;"),"cembi-beta-previous-year",(45),kdlyticsgui.mrttables.round1,kdlyticsgui.mrttables.median),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Fund Bbg","contrib-BBG_CEMBIIG_D1Y_BETA",(65),kdlyticsgui.mrttables.round2,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Delta Bbg","contrib-delta-BBG_EMBI_D1Y_BETA",(65),kdlyticsgui.mrttables.round2,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Fund","contrib-yield",(50),kdlyticsgui.mrttables.round2pc100,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Index Bbg","bm-contrib-BBG_EMBI_D1Y_BETA",(65),kdlyticsgui.mrttables.round2,"sum"),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Country","qt-risk-country-name",(120)),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Fund","weight",(50),kdlyticsgui.mrttables.round2,"sum"),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Total","dummy",(50)),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("G","qt-govt-spread",(45),kdlyticsgui.mrttables.nb_thousand_cell_format,kdlyticsgui.mrttables.median),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("EMCD","contrib-beta-1y-daily",(50),kdlyticsgui.mrttables.round2,"sum"),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Rating","qt-iam-int-lt-median-rating",(60))]);
kdlyticsgui.mrttables.attribution_table_columns = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"total-effect","total-effect",-967715775),new cljs.core.Keyword(null,"contribution-ytd","contribution-ytd",-2119680604),new cljs.core.Keyword(null,"contribution-wtd","contribution-wtd",-1168101532),new cljs.core.Keyword(null,"ighy","ighy",-54482171),new cljs.core.Keyword(null,"xs-weight","xs-weight",2029728902),new cljs.core.Keyword(null,"contribution-pwtd","contribution-pwtd",-686622906),new cljs.core.Keyword(null,"bm-weight","bm-weight",217267431),new cljs.core.Keyword(null,"bm-weight-ytd","bm-weight-ytd",-270149785),new cljs.core.Keyword(null,"security","security",886963079),new cljs.core.Keyword(null,"total-effect-ytd","total-effect-ytd",2095847497),new cljs.core.Keyword(null,"fund-return","fund-return",501786697),new cljs.core.Keyword(null,"maturity-band","maturity-band",760694665),new cljs.core.Keyword(null,"bm-contribution-ytd","bm-contribution-ytd",-431259414),new cljs.core.Keyword(null,"sector","sector",-1444247062),new cljs.core.Keyword(null,"contribution","contribution",-1962459669),new cljs.core.Keyword(null,"bm-contribution-pwtd","bm-contribution-pwtd",1232625227),new cljs.core.Keyword(null,"bm-weight-pwtd","bm-weight-pwtd",-194577621),new cljs.core.Keyword(null,"weight-pwtd","weight-pwtd",-2084903061),new cljs.core.Keyword(null,"index-return","index-return",215767983),new cljs.core.Keyword(null,"weight-wtd","weight-wtd",-598274960),new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"xs-weight-ytd","xs-weight-ytd",517991089),new cljs.core.Keyword(null,"bm-weight-wtd","bm-weight-wtd",500227953),new cljs.core.Keyword(null,"bm-contribution-wtd","bm-contribution-wtd",1004759602),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"xs-weight-pwtd","xs-weight-pwtd",300201204),new cljs.core.Keyword(null,"bm-contribution","bm-contribution",961434966),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"portfolio","portfolio",957568598),new cljs.core.Keyword(null,"issuer","issuer",-1199257898),new cljs.core.Keyword(null,"total-effect-wtd","total-effect-wtd",2026301142),new cljs.core.Keyword(null,"xs-weight-wtd","xs-weight-wtd",-1012739753),new cljs.core.Keyword(null,"total-effect-pwtd","total-effect-pwtd",-419186152),new cljs.core.Keyword(null,"period","period",-352129191),new cljs.core.Keyword(null,"rating-group","rating-group",-556666182),new cljs.core.Keyword(null,"weight-ytd","weight-ytd",-1977111429),new cljs.core.Keyword(null,"country","country",312965309),new cljs.core.Keyword(null,"dummy","dummy",2059765854),new cljs.core.Keyword(null,"rating","rating",144173662),new cljs.core.Keyword(null,"invrtg","invrtg",-902339009)],[kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Fund","Total-Effect",(80),kdlyticsgui.mrttables.round2pc,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Fund cont.","Fund-Contribution-ytd",(70),kdlyticsgui.mrttables.performance_attributes_bps,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Fund cont.","Fund-Contribution-wtd",(70),kdlyticsgui.mrttables.performance_attributes_bps,"sum"),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("IGHY","IGHY",(140)),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Excess","Average-Excess-Weight",(70),kdlyticsgui.mrttables.round2pc,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Fund cont.","Fund-Contribution-pwtd",(70),kdlyticsgui.mrttables.performance_attributes_bps,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Index","Average-Index-Weight",(70),kdlyticsgui.mrttables.round2pc,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Index %","Average-Index-Weight-ytd",(70),kdlyticsgui.mrttables.round2pc,"sum"),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Security","Security",(140)),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Effect","Total-Effect-ytd",(70),kdlyticsgui.mrttables.performance_attributes_bps,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Fund","Fund-Return",(70),kdlyticsgui.mrttables.round2pc,kdlyticsgui.mrttables.median),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Maturity","Duration-Bucket",(140)),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Index cont.","Index-Contribution-ytd",(70),kdlyticsgui.mrttables.performance_attributes_bps,"sum"),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Sector","Sector",(140)),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Fund","Fund-Contribution",(70),kdlyticsgui.mrttables.round2pc,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Index cont.","Index-Contribution-pwtd",(70),kdlyticsgui.mrttables.performance_attributes_bps,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Index","Average-Index-Weight-pwtd",(70),kdlyticsgui.mrttables.round2pc,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Fund","Average-Fund-Weight-pwtd",(70),kdlyticsgui.mrttables.round2pc,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Index","Index-Return",(70),kdlyticsgui.mrttables.round2pc,kdlyticsgui.mrttables.median),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Fund","Average-Fund-Weight-wtd",(70),kdlyticsgui.mrttables.round2pc,"sum"),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Region","Region",(140)),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Excess %","Average-Excess-Weight-ytd",(70),kdlyticsgui.mrttables.round2pc,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Index","Average-Index-Weight-wtd",(70),kdlyticsgui.mrttables.round2pc,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Index cont.","Index-Contribution-wtd",(70),kdlyticsgui.mrttables.performance_attributes_bps,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Fund","Average-Fund-Weight",(70),kdlyticsgui.mrttables.round2pc,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Excess","Average-Excess-Weight-pwtd",(70),kdlyticsgui.mrttables.round2pc,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Index","Index-Contribution",(70),kdlyticsgui.mrttables.round2pc,"sum"),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Code","Code",(140)),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Portfolio","Fund",(140)),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Issuer","Issuer",(140)),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Effect","Total-Effect-wtd",(70),kdlyticsgui.mrttables.performance_attributes_bps,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Excess","Average-Excess-Weight-wtd",(70),kdlyticsgui.mrttables.round2pc,"sum"),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Effect","Total-Effect-pwtd",(70),kdlyticsgui.mrttables.performance_attributes_bps,"sum"),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Period","Period",(140)),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Rating Group","RatingGroup",(140)),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$5("Fund %","Average-Fund-Weight-ytd",(70),kdlyticsgui.mrttables.round2pc,"sum"),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Country","Country",(140)),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Total","dummy",(50)),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Rating","Rating",(140)),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Rating","INVRTG",(140))]);
kdlyticsgui.mrttables.sub_low_level_rating_score_to_string = (function kdlyticsgui$mrttables$sub_low_level_rating_score_to_string(x){
var i = (parseInt(x) - (1));
if(((((0) <= i)) && ((i <= (23))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AAA","AA+","AA","AA-","A+","A","A-","BBB+","BBB","BBB-","BB+","BB","BB-","B+","B","B-","CCC+","CCC","CCC-","CC","C","D","NM","NR"], null),i);
} else {
return "NA";
}
});
kdlyticsgui.mrttables.low_level_rating_score_to_string = (function kdlyticsgui$mrttables$low_level_rating_score_to_string(c){
var temp__5802__auto__ = kdlyticsgui.mrttables.cell_value(c);
if(cljs.core.truth_(temp__5802__auto__)){
var x = temp__5802__auto__;
return kdlyticsgui.mrttables.sub_low_level_rating_score_to_string(x);
} else {
return "NA";
}
});
/**
 * if status = 0 green background, if status = 1 orange (warning) background,if status = 2 (breach) red background,
 */
kdlyticsgui.mrttables.breach_status_color = (function kdlyticsgui$mrttables$breach_status_color(cell){
var G__40363 = kdlyticsgui.mrttables.cell_value(cell);
switch (G__40363) {
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
/**
 * if status = 0 green background, if status = 1 orange (warning) background,if status = 2 (breach) red background,
 */
kdlyticsgui.mrttables.breach_status_color_rules = (function kdlyticsgui$mrttables$breach_status_color_rules(cell){
var G__40364 = kdlyticsgui.mrttables.cell_value(cell);
switch (G__40364) {
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
/**
 * 
 */
kdlyticsgui.mrttables.breach_status_color_true_false = (function kdlyticsgui$mrttables$breach_status_color_true_false(cell){
var G__40365 = kdlyticsgui.mrttables.cell_value(cell);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__40365)){
return ({"sx": ({"color": "Chartreuse", "backgroundColor": "Chartreuse", "textAlign": "center"})});
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__40365)){
return ({"sx": ({"color": "Crimson", "backgroundColor": "Crimson", "textAlign": "center"})});
} else {
return ({});

}
}
});
/**
 * 
 */
kdlyticsgui.mrttables.breach_status_color_is_100 = (function kdlyticsgui$mrttables$breach_status_color_is_100(cell){
var G__40366 = kdlyticsgui.mrttables.cell_value(cell);
switch (G__40366) {
case 100.0:
return ({"sx": ({"color": "Chartreuse", "backgroundColor": "Chartreuse", "textAlign": "center"})});

break;
default:
return ({"sx": ({"color": "Crimson", "backgroundColor": "Crimson", "textAlign": "center"})});

}
});
/**
 * 
 */
kdlyticsgui.mrttables.breach_status_color_attribution_scale = (function kdlyticsgui$mrttables$breach_status_color_attribution_scale(cell){
var pred__40367 = cljs.core._GT_;
var expr__40368 = kdlyticsgui.mrttables.cell_value(cell);
if(cljs.core.truth_((pred__40367.cljs$core$IFn$_invoke$arity$2 ? pred__40367.cljs$core$IFn$_invoke$arity$2((1),expr__40368) : pred__40367.call(null,(1),expr__40368)))){
return ({"sx": ({"color": "Chartreuse", "backgroundColor": "Chartreuse", "textAlign": "center"})});
} else {
if(cljs.core.truth_((pred__40367.cljs$core$IFn$_invoke$arity$2 ? pred__40367.cljs$core$IFn$_invoke$arity$2((10),expr__40368) : pred__40367.call(null,(10),expr__40368)))){
return ({"sx": ({"color": "DarkOrange", "backgroundColor": "DarkOrange", "textAlign": "center"})});
} else {
if(cljs.core.truth_((pred__40367.cljs$core$IFn$_invoke$arity$2 ? pred__40367.cljs$core$IFn$_invoke$arity$2((999),expr__40368) : pred__40367.call(null,(999),expr__40368)))){
return ({"sx": ({"color": "Crimson", "backgroundColor": "Crimson", "textAlign": "center"})});
} else {
return ({"sx": ({"color": "darkmagenta", "backgroundColor": "darkmagenta", "textAlign": "center"})});
}
}
}
});

//# sourceMappingURL=kdlyticsgui.mrttables.js.map
