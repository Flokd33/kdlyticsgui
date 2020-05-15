goog.provide('re_com.popover');
goog.require('cljs.core');
goog.require('re_com.util');
goog.require('re_com.box');
goog.require('re_com.close_button');
goog.require('re_com.validate');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('reagent.ratom');
re_com.popover.point = (function re_com$popover$point(x,y){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)," "].join('');
});
/**
 * Return the vector of the two keywords formed by splitting another keyword 'kw' on an internal delimiter (usually '-')
 * (split-keyword  :above-left  "-") => [:above :left]
 */
re_com.popover.split_keyword = (function re_com$popover$split_keyword(kw,delimiter){
var keywords = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(kw),cljs.core.re_pattern(["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delimiter),":]"].join('')));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((keywords.cljs$core$IFn$_invoke$arity$1 ? keywords.cljs$core$IFn$_invoke$arity$1((1)) : keywords.call(null,(1)))),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((keywords.cljs$core$IFn$_invoke$arity$1 ? keywords.cljs$core$IFn$_invoke$arity$1((2)) : keywords.call(null,(2))))], null);
});
/**
 * Determine values for :left :right :top :bottom CSS styles.
 * - pop-orient    What side of the anchor the popover will be attached to. One of :above :below :left :right
 * - p-width       The px width of the popover after it has been rendered
 * - p-height      The px height of the popover after it has been rendered
 * - pop-offset    The number of pixels the popover is offset from it's natural position in relation to the popover-arrow (ugh, hard to explain)
 * - arrow-length  The px length of the arrow (from the point to middle of arrow base)
 * - arrow-gap     The px distance between the anchor and the arrow tip. Positive numbers push the popover away from the anchor
 *   
 */
re_com.popover.calc_popover_pos = (function re_com$popover$calc_popover_pos(pop_orient,p_width,p_height,pop_offset,arrow_length,arrow_gap){
var total_offset = (arrow_length + arrow_gap);
var popover_left = (function (){var G__43382 = pop_orient;
var G__43382__$1 = (((G__43382 instanceof cljs.core.Keyword))?G__43382.fqn:null);
switch (G__43382__$1) {
case "left":
return "initial";

break;
case "right":
return re_com.util.px(total_offset);

break;
case "above":
case "below":
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((function (){var or__4126__auto__ = pop_offset;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (p_width / (2));
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"negative","negative",-1562068438)], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43382__$1)].join('')));

}
})();
var popover_top = (function (){var G__43383 = pop_orient;
var G__43383__$1 = (((G__43383 instanceof cljs.core.Keyword))?G__43383.fqn:null);
switch (G__43383__$1) {
case "left":
case "right":
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((function (){var or__4126__auto__ = pop_offset;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (p_height / (2));
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"negative","negative",-1562068438)], 0));

break;
case "above":
return "initial";

break;
case "below":
return re_com.util.px(total_offset);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43383__$1)].join('')));

}
})();
var popover_right = (function (){var G__43384 = pop_orient;
var G__43384__$1 = (((G__43384 instanceof cljs.core.Keyword))?G__43384.fqn:null);
switch (G__43384__$1) {
case "left":
return re_com.util.px(total_offset);

break;
case "right":
return null;

break;
case "above":
return null;

break;
case "below":
return null;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43384__$1)].join('')));

}
})();
var popover_bottom = (function (){var G__43385 = pop_orient;
var G__43385__$1 = (((G__43385 instanceof cljs.core.Keyword))?G__43385.fqn:null);
switch (G__43385__$1) {
case "left":
return null;

break;
case "right":
return null;

break;
case "above":
return re_com.util.px(total_offset);

break;
case "below":
return null;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43385__$1)].join('')));

}
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),popover_left,new cljs.core.Keyword(null,"top","top",-1856271961),popover_top,new cljs.core.Keyword(null,"right","right",-452581833),popover_right,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),popover_bottom], null);
});
/**
 * Calculate the optimal :position value that results in the least amount of clipping by the screen edges
 *   Taken from: https://github.com/Lambda-X/cljs-repl-web/blob/0.3.1/src/cljs/cljs_repl_web/views/utils.cljs#L52
 *   Thanks to @richiardiandrea and @tomek for this code
 */
re_com.popover.calculate_optimal_position = (function re_com$popover$calculate_optimal_position(p__43386){
var vec__43387 = p__43386;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43387,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43387,(1),null);
var w = window.innerWidth;
var h = window.innerHeight;
var h_threshold_left = cljs.core.quot(w,(3));
var h_threshold_cent = ((2) * h_threshold_left);
var h_position = (((x < h_threshold_left))?"right":(((x < h_threshold_cent))?"center":"left"
));
var v_threshold = cljs.core.quot(h,(2));
var v_position = (((y < v_threshold))?"below":"above");
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([v_position,"-",h_position].join(''));
});
/**
 * Given a node reference, calculate the absolute x and y coordinates of the node's midpoint
 */
re_com.popover.calc_element_midpoint = (function re_com$popover$calc_element_midpoint(node){
var bounding_rect = node.getBoundingClientRect();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((bounding_rect.right + bounding_rect.left) / (2)),((bounding_rect.bottom + bounding_rect.top) / (2))], null);
});
/**
 * Render the triangle which connects the popover to the anchor (using SVG)
 */
re_com.popover.popover_arrow = (function re_com$popover$popover_arrow(orientation,pop_offset,arrow_length,arrow_width,grey_arrow_QMARK_,no_border_QMARK_,popover_color,popover_border_color){
var half_arrow_width = (arrow_width / (2));
var arrow_shape = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),[re_com.popover.point((0),(0)),re_com.popover.point(arrow_length,half_arrow_width),re_com.popover.point((0),arrow_width)].join(''),new cljs.core.Keyword(null,"right","right",-452581833),[re_com.popover.point(arrow_length,(0)),re_com.popover.point((0),half_arrow_width),re_com.popover.point(arrow_length,arrow_width)].join(''),new cljs.core.Keyword(null,"above","above",-1286866470),[re_com.popover.point((0),(0)),re_com.popover.point(half_arrow_width,arrow_length),re_com.popover.point(arrow_width,(0))].join(''),new cljs.core.Keyword(null,"below","below",-926774883),[re_com.popover.point((0),arrow_length),re_com.popover.point(half_arrow_width,(0)),re_com.popover.point(arrow_width,arrow_length)].join('')], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"popover-arrow",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",(function (){var G__43393 = orientation;
var G__43393__$1 = (((G__43393 instanceof cljs.core.Keyword))?G__43393.fqn:null);
switch (G__43393__$1) {
case "left":
return new cljs.core.Keyword(null,"right","right",-452581833);

break;
case "right":
return new cljs.core.Keyword(null,"left","left",-399115937);

break;
case "above":
return new cljs.core.Keyword(null,"bottom","bottom",-1550509018);

break;
case "below":
return new cljs.core.Keyword(null,"top","top",-1856271961);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43393__$1)].join('')));

}
})(),re_com.util.px.cljs$core$IFn$_invoke$arity$variadic(arrow_length,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"negative","negative",-1562068438)], 0)),(function (){var G__43394 = orientation;
var G__43394__$1 = (((G__43394 instanceof cljs.core.Keyword))?G__43394.fqn:null);
switch (G__43394__$1) {
case "left":
case "right":
return new cljs.core.Keyword(null,"top","top",-1856271961);

break;
case "above":
case "below":
return new cljs.core.Keyword(null,"left","left",-399115937);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43394__$1)].join('')));

}
})(),(((pop_offset == null))?"50%":re_com.util.px(pop_offset)),(function (){var G__43396 = orientation;
var G__43396__$1 = (((G__43396 instanceof cljs.core.Keyword))?G__43396.fqn:null);
switch (G__43396__$1) {
case "left":
case "right":
return new cljs.core.Keyword(null,"margin-top","margin-top",392161226);

break;
case "above":
case "below":
return new cljs.core.Keyword(null,"margin-left","margin-left",2015598377);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43396__$1)].join('')));

}
})(),re_com.util.px.cljs$core$IFn$_invoke$arity$variadic(half_arrow_width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"negative","negative",-1562068438)], 0)),new cljs.core.Keyword(null,"width","width",-384071477),re_com.util.px((function (){var G__43397 = orientation;
var G__43397__$1 = (((G__43397 instanceof cljs.core.Keyword))?G__43397.fqn:null);
switch (G__43397__$1) {
case "left":
case "right":
return arrow_length;

break;
case "above":
case "below":
return arrow_width;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43397__$1)].join('')));

}
})()),new cljs.core.Keyword(null,"height","height",1025178622),re_com.util.px((function (){var G__43398 = orientation;
var G__43398__$1 = (((G__43398 instanceof cljs.core.Keyword))?G__43398.fqn:null);
switch (G__43398__$1) {
case "left":
case "right":
return arrow_width;

break;
case "above":
case "below":
return arrow_length;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43398__$1)].join('')));

}
})())])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),(arrow_shape.cljs$core$IFn$_invoke$arity$1 ? arrow_shape.cljs$core$IFn$_invoke$arity$1(orientation) : arrow_shape.call(null,orientation)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(popover_color)?popover_color:(cljs.core.truth_(grey_arrow_QMARK_)?"#f7f7f7":"white")),new cljs.core.Keyword(null,"stroke","stroke",1741823555),(function (){var or__4126__auto__ = popover_border_color;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.truth_(no_border_QMARK_)){
return null;
} else {
return "rgba(0, 0, 0, .2)";
}
}
})(),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1"], null)], null)], null)], null);
});
re_com.popover.backdrop_args_desc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),0.0,new cljs.core.Keyword(null,"type","type",1174270348),"double | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"opacity of backdrop from:",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"0.0 (transparent) to 1.0 (opaque)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a function which takes no params and returns nothing. Called when the backdrop is clicked"], null)], null);
/**
 * Renders a backdrop div which fills the entire page and responds to clicks on it. Can also specify how tranparent it should be
 */
re_com.popover.backdrop = (function re_com$popover$backdrop(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43488 = arguments.length;
var i__4737__auto___43489 = (0);
while(true){
if((i__4737__auto___43489 < len__4736__auto___43488)){
args__4742__auto__.push((arguments[i__4737__auto___43489]));

var G__43490 = (i__4737__auto___43489 + (1));
i__4737__auto___43489 = G__43490;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.popover.backdrop.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.popover.backdrop.cljs$core$IFn$_invoke$arity$variadic = (function (p__43402){
var map__43403 = p__43402;
var map__43403__$1 = (((((!((map__43403 == null))))?(((((map__43403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43403):map__43403);
var args = map__43403__$1;
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43403__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43403__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.popover.backdrop_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["backdrop"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro backdrop-args-desc args \"backdrop\")"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rc-backdrop.noselect","div.rc-backdrop.noselect",-530372973),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"top","top",-1856271961),"0px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"opacity","opacity",397153780),(function (){var or__4126__auto__ = opacity;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return 0.0;
}
})()], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
(on_click.cljs$core$IFn$_invoke$arity$0 ? on_click.cljs$core$IFn$_invoke$arity$0() : on_click.call(null));

return null;
})], null)], null);
}));

(re_com.popover.backdrop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.popover.backdrop.cljs$lang$applyTo = (function (seq43399){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43399));
}));

re_com.popover.popover_title_args_desc = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"showing?","showing?",2094921488),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean atom",new cljs.core.Keyword(null,"description","description",-1428560544),"an atom. When the value is true, the popover shows."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"describes the title of the popover. Default font size is 18px to make it stand out"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, displays the close button"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"close-callback","close-callback",651188974),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"a function which takes no params and returns nothing. Called when the close button is pressed. Not required if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":showing?"], null)," atom passed in OR ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":close-button?"], null)," is set to false"], null)], null)], null);
/**
 * Renders a title at the top of a popover with an optional close button on the far right
 */
re_com.popover.popover_title = (function re_com$popover$popover_title(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43492 = arguments.length;
var i__4737__auto___43493 = (0);
while(true){
if((i__4737__auto___43493 < len__4736__auto___43492)){
args__4742__auto__.push((arguments[i__4737__auto___43493]));

var G__43494 = (i__4737__auto___43493 + (1));
i__4737__auto___43493 = G__43494;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.popover.popover_title.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.popover.popover_title.cljs$core$IFn$_invoke$arity$variadic = (function (p__43406){
var map__43407 = p__43406;
var map__43407__$1 = (((((!((map__43407 == null))))?(((((map__43407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43407):map__43407);
var args = map__43407__$1;
var showing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43407__$1,new cljs.core.Keyword(null,"showing?","showing?",2094921488));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43407__$1,new cljs.core.Keyword(null,"title","title",636505583));
var close_button_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43407__$1,new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687));
var close_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43407__$1,new cljs.core.Keyword(null,"close-callback","close-callback",651188974));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.popover.popover_title_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["popover-title"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro popover-title-args-desc args \"popover-title\")"));
}

if(cljs.core.truth_((function (){var or__4126__auto__ = (function (){var fexpr__43410 = cljs.core.complement(cljs.core.nil_QMARK_);
return (fexpr__43410.cljs$core$IFn$_invoke$arity$1 ? fexpr__43410.cljs$core$IFn$_invoke$arity$1(showing_QMARK_) : fexpr__43410.call(null,showing_QMARK_));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var fexpr__43413 = cljs.core.complement(cljs.core.nil_QMARK_);
return (fexpr__43413.cljs$core$IFn$_invoke$arity$1 ? fexpr__43413.cljs$core$IFn$_invoke$arity$1(close_callback) : fexpr__43413.call(null,close_callback));
}
})())){
} else {
throw (new Error(["Assert failed: ","Must specify either showing? OR close-callback","\n","(or ((complement nil?) showing?) ((complement nil?) close-callback))"].join('')));
}

var close_button_QMARK___$1 = (((close_button_QMARK_ == null))?true:close_button_QMARK_);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.popover-title","h3.popover-title",126205197),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("inherit"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"18px"], null)], 0))], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,(cljs.core.truth_(close_button_QMARK___$1)?new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.close_button.close_button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(close_callback)){
return (close_callback.cljs$core$IFn$_invoke$arity$0 ? close_callback.cljs$core$IFn$_invoke$arity$0() : close_callback.call(null));
} else {
return cljs.core.reset_BANG_(showing_QMARK_,false);
}
}),new cljs.core.Keyword(null,"div-size","div-size",1661625995),(0),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(26),new cljs.core.Keyword(null,"top-offset","top-offset",1235816245),(-1),new cljs.core.Keyword(null,"left-offset","left-offset",-331155643),(-5)], null):null)], null)], null)], null);
}));

(re_com.popover.popover_title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.popover.popover_title.cljs$lang$applyTo = (function (seq43405){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43405));
}));

re_com.popover.next_even_integer = (function re_com$popover$next_even_integer(num){
return ((((num + (1)) / (2)) | (0)) * (2));
});
re_com.popover.calc_pop_offset = (function re_com$popover$calc_pop_offset(arrow_pos,position_offset,p_width,p_height){
var G__43415 = arrow_pos;
var G__43415__$1 = (((G__43415 instanceof cljs.core.Keyword))?G__43415.fqn:null);
switch (G__43415__$1) {
case "center":
return null;

break;
case "right":
return ((20) + position_offset);

break;
case "below":
return ((20) + position_offset);

break;
case "left":
if(cljs.core.truth_(p_width)){
return ((p_width - (25)) - position_offset);
} else {
return p_width;
}

break;
case "above":
if(cljs.core.truth_(p_height)){
return ((p_height - (25)) - position_offset);
} else {
return p_height;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43415__$1)].join('')));

}
});
re_com.popover.popover_clipping = (function re_com$popover$popover_clipping(node){
var viewport_width = window.innerWidth;
var viewport_height = window.innerHeight;
var bounding_rect = node.getBoundingClientRect();
var left = bounding_rect.left;
var right = bounding_rect.right;
var top = bounding_rect.top;
var bottom = bounding_rect.bottom;
var clip_left = (((left < (0)))?(- left):null);
var clip_right = (((right > viewport_width))?(right - viewport_width):null);
var clip_top = (((top < (0)))?(- top):null);
var clip_bottom = (((bottom > viewport_height))?(bottom - viewport_height):null);
return (((!((clip_left == null)))) || ((!((clip_right == null)))) || ((!((clip_top == null)))) || ((!((clip_bottom == null)))));
});
re_com.popover.popover_border_args_desc = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.sequential_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a vector of component markups"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"keyword atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.position_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position-offset","position-offset",1257061411),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"px offset of the arrow from its default ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":position"], null)," along the popover border. Is ignored when ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":position"], null)," is one of the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":xxx-center"], null)," variants. Positive numbers slide the popover toward its center"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style describing the popover width"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"auto",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style describing the popover height"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"popover-color","popover-color",-2019049119),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"white",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"fill color of the popover"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"popover-border-color","popover-border-color",2142810267),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"color of the popover border, including the arrow"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(11),new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the length in pixels of the arrow (from pointy part to middle of arrow base)"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(22),new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the width in pixels of arrow base"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"arrow-gap","arrow-gap",1490206257),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(-1),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"px gap between the anchor and the arrow tip. Positive numbers push the popover away from the anchor"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style which overrides the inner padding of the popover"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style describing the horiztonal offset from anchor after position"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style describing the vertical offset from anchor after position"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tooltip-style?","tooltip-style?",1188162527),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"setup popover styles for a tooltip"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | markup",new cljs.core.Keyword(null,"description","description",-1428560544),"describes a title"], null)], null);
/**
 * Renders an element or control along with a Bootstrap popover
 */
re_com.popover.popover_border = (function re_com$popover$popover_border(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43530 = arguments.length;
var i__4737__auto___43531 = (0);
while(true){
if((i__4737__auto___43531 < len__4736__auto___43530)){
args__4742__auto__.push((arguments[i__4737__auto___43531]));

var G__43532 = (i__4737__auto___43531 + (1));
i__4737__auto___43531 = G__43532;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.popover.popover_border.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.popover.popover_border.cljs$core$IFn$_invoke$arity$variadic = (function (p__43418){
var map__43419 = p__43418;
var map__43419__$1 = (((((!((map__43419 == null))))?(((((map__43419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43419):map__43419);
var args = map__43419__$1;
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43419__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var position_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43419__$1,new cljs.core.Keyword(null,"position-offset","position-offset",1257061411));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43419__$1,new cljs.core.Keyword(null,"title","title",636505583));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.popover.popover_border_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["popover-border"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro popover-border-args-desc args \"popover-border\")"));
}

var pop_id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("popover-");
var rendered_once = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var ready_to_show_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var p_width = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var p_height = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var pop_offset = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var found_optimal = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var calc_metrics = (function (pos){
var popover_elem = re_com.util.get_element_by_id(pop_id);
var vec__43422 = re_com.popover.split_keyword(pos,"-");
var orientation = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43422,(0),null);
var arrow_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43422,(1),null);
var grey_arrow_QMARK_ = (function (){var and__4115__auto__ = title;
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orientation,new cljs.core.Keyword(null,"below","below",-926774883))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arrow_pos,new cljs.core.Keyword(null,"below","below",-926774883))));
} else {
return and__4115__auto__;
}
})();
cljs.core.reset_BANG_(p_width,(cljs.core.truth_(popover_elem)?re_com.popover.next_even_integer(popover_elem.clientWidth):(0)));

cljs.core.reset_BANG_(p_height,(cljs.core.truth_(popover_elem)?re_com.popover.next_even_integer(popover_elem.clientHeight):(0)));

cljs.core.reset_BANG_(pop_offset,re_com.popover.calc_pop_offset(arrow_pos,position_offset,cljs.core.deref(p_width),cljs.core.deref(p_height)));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [orientation,grey_arrow_QMARK_], null);
});
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"popover-border",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return cljs.core.reset_BANG_(rendered_once,true);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
var pop_border_node = reagent.dom.dom_node(this$);
var clipped_QMARK_ = re_com.popover.popover_clipping(pop_border_node);
var anchor_node = pop_border_node.parentNode.parentNode.parentNode;
if(((clipped_QMARK_) && (cljs.core.not(cljs.core.deref(found_optimal))))){
cljs.core.reset_BANG_(position,re_com.popover.calculate_optimal_position(re_com.popover.calc_element_midpoint(anchor_node)));

cljs.core.reset_BANG_(found_optimal,true);
} else {
}

calc_metrics(cljs.core.deref(position));

return cljs.core.reset_BANG_(ready_to_show_QMARK_,true);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__43548__delegate = function (p__43429){
var map__43430 = p__43429;
var map__43430__$1 = (((((!((map__43430 == null))))?(((((map__43430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43430):map__43430);
var args__$1 = map__43430__$1;
var popover_border_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43430__$1,new cljs.core.Keyword(null,"popover-border-color","popover-border-color",2142810267));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43430__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var tooltip_style_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43430__$1,new cljs.core.Keyword(null,"tooltip-style?","tooltip-style?",1188162527));
var popover_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43430__$1,new cljs.core.Keyword(null,"popover-color","popover-color",-2019049119));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43430__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var arrow_length = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43430__$1,new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),(11));
var position_offset__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43430__$1,new cljs.core.Keyword(null,"position-offset","position-offset",1257061411));
var margin_left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43430__$1,new cljs.core.Keyword(null,"margin-left","margin-left",2015598377));
var arrow_width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43430__$1,new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),(22));
var margin_top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43430__$1,new cljs.core.Keyword(null,"margin-top","margin-top",392161226));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43430__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43430__$1,new cljs.core.Keyword(null,"title","title",636505583));
var arrow_gap = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43430__$1,new cljs.core.Keyword(null,"arrow-gap","arrow-gap",1490206257),(-1));
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43430__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var position__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43430__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.popover.popover_border_args_desc),args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["popover-border"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro popover-border-args-desc args \"popover-border\")"));
}

var vec__43432 = calc_metrics(cljs.core.deref(position__$1));
var orientation = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43432,(0),null);
var grey_arrow_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43432,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.popover.fade.in","div.popover.fade.in",-106226512),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),pop_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.deref(rendered_once))?(cljs.core.truth_(pop_id)?re_com.popover.calc_popover_pos(orientation,cljs.core.deref(p_width),cljs.core.deref(p_height),cljs.core.deref(pop_offset),arrow_length,arrow_gap):null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),"-10000px",new cljs.core.Keyword(null,"left","left",-399115937),"-10000px"], null)),(cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null):null),(cljs.core.truth_(height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height], null):null),(cljs.core.truth_(popover_color)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),popover_color], null):null),(cljs.core.truth_(popover_border_color)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),popover_border_color], null):null),(cljs.core.truth_(tooltip_style_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"none",new cljs.core.Keyword(null,"border","border",1444987323),"none"], null):null),(function (){var G__43435 = orientation;
var G__43435__$1 = (((G__43435 instanceof cljs.core.Keyword))?G__43435.fqn:null);
switch (G__43435__$1) {
case "left":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"-2000px"], null);

break;
case "right":
case "above":
case "below":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"-2000px"], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43435__$1)].join('')));

}
})(),(cljs.core.truth_(margin_left)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),margin_left], null):null),(cljs.core.truth_(margin_top)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),margin_top], null):null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(cljs.core.deref(ready_to_show_QMARK_))?"1":"0"),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"none",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px"], null)], 0))], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_arrow,orientation,cljs.core.deref(pop_offset),arrow_length,arrow_width,grey_arrow_QMARK_,tooltip_style_QMARK_,popover_color,popover_border_color], null),(cljs.core.truth_(title__$1)?title__$1:null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.popover-content","div.popover-content",1045719989),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),padding], null)], null)], null),children)], null);
};
var G__43548 = function (var_args){
var p__43429 = null;
if (arguments.length > 0) {
var G__43560__i = 0, G__43560__a = new Array(arguments.length -  0);
while (G__43560__i < G__43560__a.length) {G__43560__a[G__43560__i] = arguments[G__43560__i + 0]; ++G__43560__i;}
  p__43429 = new cljs.core.IndexedSeq(G__43560__a,0,null);
} 
return G__43548__delegate.call(this,p__43429);};
G__43548.cljs$lang$maxFixedArity = 0;
G__43548.cljs$lang$applyTo = (function (arglist__43561){
var p__43429 = cljs.core.seq(arglist__43561);
return G__43548__delegate(p__43429);
});
G__43548.cljs$core$IFn$_invoke$arity$variadic = G__43548__delegate;
return G__43548;
})()
], null));
}));

(re_com.popover.popover_border.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.popover.popover_border.cljs$lang$applyTo = (function (seq43417){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43417));
}));

re_com.popover.popover_content_wrapper_args_desc = new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"showing-injected?","showing-injected?",-105733250),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"an atom. When the value is true, the popover shows.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"NOTE: "], null),"When used as direct ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":popover"], null)," arg in popover-anchor-wrapper, this arg will be injected automatically by popover-anchor-wrapper. If using your own popover function, you must add this yourself"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position-injected","position-injected",205959080),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"keyword atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.position_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"relative to this anchor. One of ",re_com.validate.position_options_list,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"NOTE: "], null),"See above NOTE for ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":showing-injected?"], null),". Same applies"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position-offset","position-offset",1257061411),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"px offset of the arrow from its default ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":position"], null)," along the popover border. Is ignored when ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":position"], null)," is one of the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":xxx-center"], null)," variants. Positive numbers slide the popover toward its center"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when an anchor is in a scrolling region (e.g. scroller component), the popover can sometimes be clipped. By passing true for this parameter, re-com will use a different CSS method to show the popover. This method is slightly inferior because the popover can't track the anchor if it is repositioned"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style representing the popover width"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style representing the popover height"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"backdrop-opacity","backdrop-opacity",1467395653),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),0.0,new cljs.core.Keyword(null,"type","type",1174270348),"double | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"indicates the opacity of the backdrop where 0.0=transparent, 1.0=opaque"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a function which takes no params and returns nothing. Called when the popover is cancelled (e.g. user clicks away)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"describes the title of the popover. The default font size is 18px to make it stand out"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, displays the close button"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"describes the popover body. Must be a single component"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tooltip-style?","tooltip-style?",1188162527),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"setup popover styles for a tooltip"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"popover-color","popover-color",-2019049119),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"white",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"fill color of the popover"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"popover-border-color","popover-border-color",2142810267),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"color of the popover border, including the arrow"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(11),new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the length in pixels of the arrow (from pointy part to middle of arrow base)"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(22),new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the width in pixels of arrow base"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"arrow-gap","arrow-gap",1490206257),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(-1),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"px gap between the anchor and the arrow tip. Positive numbers push the popover away from the anchor"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style which overrides the inner padding of the popover"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override component style(s) with a style map, only use in case of emergency (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to the outer container)"], null)], null)], null);
/**
 * Abstracts several components to handle the 90% of cases for general popovers and dialog boxes
 */
re_com.popover.popover_content_wrapper = (function re_com$popover$popover_content_wrapper(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43587 = arguments.length;
var i__4737__auto___43588 = (0);
while(true){
if((i__4737__auto___43588 < len__4736__auto___43587)){
args__4742__auto__.push((arguments[i__4737__auto___43588]));

var G__43589 = (i__4737__auto___43588 + (1));
i__4737__auto___43588 = G__43589;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.popover.popover_content_wrapper.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.popover.popover_content_wrapper.cljs$core$IFn$_invoke$arity$variadic = (function (p__43439){
var map__43440 = p__43439;
var map__43440__$1 = (((((!((map__43440 == null))))?(((((map__43440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43440):map__43440);
var args = map__43440__$1;
var no_clip_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43440__$1,new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.popover.popover_content_wrapper_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["popover-content-wrapper"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro popover-content-wrapper-args-desc args \"popover-content-wrapper\")"));
}

var left_offset = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var top_offset = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var position_no_clip_popover = (function re_com$popover$position_no_clip_popover(this$){
if(cljs.core.truth_(no_clip_QMARK_)){
var node = reagent.dom.dom_node(this$);
var popover_point_node = node.parentNode;
var bounding_rect = popover_point_node.getBoundingClientRect();
cljs.core.reset_BANG_(left_offset,bounding_rect.left);

return cljs.core.reset_BANG_(top_offset,bounding_rect.top);
} else {
return null;
}
});
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"popover-content-wrapper",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return position_no_clip_popover(this$);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
return position_no_clip_popover(this$);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__43593__delegate = function (p__43442){
var map__43443 = p__43442;
var map__43443__$1 = (((((!((map__43443 == null))))?(((((map__43443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43443):map__43443);
var args__$1 = map__43443__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43443__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var popover_border_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43443__$1,new cljs.core.Keyword(null,"popover-border-color","popover-border-color",2142810267));
var on_cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43443__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932));
var showing_injected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43443__$1,new cljs.core.Keyword(null,"showing-injected?","showing-injected?",-105733250));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43443__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var tooltip_style_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43443__$1,new cljs.core.Keyword(null,"tooltip-style?","tooltip-style?",1188162527));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43443__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var popover_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43443__$1,new cljs.core.Keyword(null,"popover-color","popover-color",-2019049119));
var arrow_length = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43443__$1,new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),(11));
var position_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43443__$1,new cljs.core.Keyword(null,"position-offset","position-offset",1257061411));
var backdrop_opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43443__$1,new cljs.core.Keyword(null,"backdrop-opacity","backdrop-opacity",1467395653));
var position_injected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43443__$1,new cljs.core.Keyword(null,"position-injected","position-injected",205959080));
var no_clip_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43443__$1,new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951));
var close_button_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43443__$1,new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687));
var arrow_width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43443__$1,new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),(22));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43443__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43443__$1,new cljs.core.Keyword(null,"title","title",636505583));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43443__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var arrow_gap = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43443__$1,new cljs.core.Keyword(null,"arrow-gap","arrow-gap",1490206257),(-1));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43443__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43443__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.popover.popover_content_wrapper_args_desc),args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["popover-content-wrapper"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro popover-content-wrapper-args-desc args \"popover-content-wrapper\")"));
}

cljs.core.deref(position_injected);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["popover-content-wrapper ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("inherit"),(cljs.core.truth_(no_clip_QMARK___$1)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),re_com.util.px(cljs.core.deref(left_offset)),new cljs.core.Keyword(null,"top","top",-1856271961),re_com.util.px(cljs.core.deref(top_offset))], null):null),style], 0))], null),attr], 0)),(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.deref(showing_injected_QMARK_);
if(cljs.core.truth_(and__4115__auto__)){
return on_cancel;
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.backdrop,new cljs.core.Keyword(null,"opacity","opacity",397153780),backdrop_opacity,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_cancel], null):null),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_border,new cljs.core.Keyword(null,"position","position",-2011731912),position_injected,new cljs.core.Keyword(null,"position-offset","position-offset",1257061411),position_offset,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"tooltip-style?","tooltip-style?",1188162527),tooltip_style_QMARK_,new cljs.core.Keyword(null,"popover-color","popover-color",-2019049119),popover_color,new cljs.core.Keyword(null,"popover-border-color","popover-border-color",2142810267),popover_border_color,new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),arrow_length,new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),arrow_width,new cljs.core.Keyword(null,"arrow-gap","arrow-gap",1490206257),arrow_gap,new cljs.core.Keyword(null,"padding","padding",1660304693),padding,new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_title,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"showing?","showing?",2094921488),showing_injected_QMARK_,new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687),close_button_QMARK_,new cljs.core.Keyword(null,"close-callback","close-callback",651188974),on_cancel], null):null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body], null)], null)], null);
};
var G__43593 = function (var_args){
var p__43442 = null;
if (arguments.length > 0) {
var G__43609__i = 0, G__43609__a = new Array(arguments.length -  0);
while (G__43609__i < G__43609__a.length) {G__43609__a[G__43609__i] = arguments[G__43609__i + 0]; ++G__43609__i;}
  p__43442 = new cljs.core.IndexedSeq(G__43609__a,0,null);
} 
return G__43593__delegate.call(this,p__43442);};
G__43593.cljs$lang$maxFixedArity = 0;
G__43593.cljs$lang$applyTo = (function (arglist__43610){
var p__43442 = cljs.core.seq(arglist__43610);
return G__43593__delegate(p__43442);
});
G__43593.cljs$core$IFn$_invoke$arity$variadic = G__43593__delegate;
return G__43593;
})()
], null));
}));

(re_com.popover.popover_content_wrapper.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.popover.popover_content_wrapper.cljs$lang$applyTo = (function (seq43436){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43436));
}));

re_com.popover.popover_anchor_wrapper_args_desc = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"showing?","showing?",2094921488),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean atom",new cljs.core.Keyword(null,"description","description",-1428560544),"an atom. When the value is true, the popover shows"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.position_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the component the popover is attached to"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"popover","popover",-1809582136),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the popover body component"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override component style(s) with a style map, only use in case of emergency (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to the outer container)"], null)], null)], null);
/**
 * Renders an element or control along with a Bootstrap popover
 */
re_com.popover.popover_anchor_wrapper = (function re_com$popover$popover_anchor_wrapper(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43615 = arguments.length;
var i__4737__auto___43616 = (0);
while(true){
if((i__4737__auto___43616 < len__4736__auto___43615)){
args__4742__auto__.push((arguments[i__4737__auto___43616]));

var G__43617 = (i__4737__auto___43616 + (1));
i__4737__auto___43616 = G__43617;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.popover.popover_anchor_wrapper.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.popover.popover_anchor_wrapper.cljs$core$IFn$_invoke$arity$variadic = (function (p__43446){
var map__43447 = p__43446;
var map__43447__$1 = (((((!((map__43447 == null))))?(((((map__43447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43447):map__43447);
var args = map__43447__$1;
var showing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43447__$1,new cljs.core.Keyword(null,"showing?","showing?",2094921488));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43447__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.popover.popover_anchor_wrapper_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["popover-anchor-wrapper"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro popover-anchor-wrapper-args-desc args \"popover-anchor-wrapper\")"));
}

var external_position = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(position);
var internal_position = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(external_position));
var reset_on_hide = reagent.ratom.make_reaction((function (){
if(cljs.core.truth_(cljs.core.deref(showing_QMARK_))){
return null;
} else {
return cljs.core.reset_BANG_(internal_position,cljs.core.deref(external_position));
}
}));
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"popover-anchor-wrapper",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__43618__delegate = function (p__43449){
var map__43450 = p__43449;
var map__43450__$1 = (((((!((map__43450 == null))))?(((((map__43450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43450):map__43450);
var args__$1 = map__43450__$1;
var showing_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43450__$1,new cljs.core.Keyword(null,"showing?","showing?",2094921488));
var position__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43450__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var anchor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43450__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var popover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43450__$1,new cljs.core.Keyword(null,"popover","popover",-1809582136));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43450__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43450__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43450__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.popover.popover_anchor_wrapper_args_desc),args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["popover-anchor-wrapper"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro popover-anchor-wrapper-args-desc args \"popover-anchor-wrapper\")"));
}

cljs.core.deref(reset_on_hide);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(external_position),position__$1)){
cljs.core.reset_BANG_(external_position,position__$1);

cljs.core.reset_BANG_(internal_position,cljs.core.deref(external_position));
} else {
}

var vec__43452 = re_com.popover.split_keyword(cljs.core.deref(internal_position),"-");
var orientation = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43452,(0),null);
var _arrow_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43452,(1),null);
var place_anchor_before_QMARK_ = (function (){var G__43455 = orientation;
var G__43455__$1 = (((G__43455 instanceof cljs.core.Keyword))?G__43455.fqn:null);
switch (G__43455__$1) {
case "left":
case "above":
return false;

break;
default:
return true;

}
})();
var flex_flow = (function (){var G__43456 = orientation;
var G__43456__$1 = (((G__43456 instanceof cljs.core.Keyword))?G__43456.fqn:null);
switch (G__43456__$1) {
case "left":
case "right":
return "row";

break;
default:
return "column";

}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-popover-anchor-wrapper display-inline-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("inherit"),style], 0))], null),attr], 0)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-point-wrapper display-inline-flex",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("auto"),re_com.box.flex_flow_style(flex_flow),re_com.box.align_style(new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368))], 0))], null),(cljs.core.truth_(place_anchor_before_QMARK_)?anchor:null),(cljs.core.truth_(cljs.core.deref(showing_QMARK___$1))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-popover-point display-inline-flex",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("auto"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(4)], null)], 0))], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(popover,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"showing-injected?","showing-injected?",-105733250),showing_QMARK___$1,new cljs.core.Keyword(null,"position-injected","position-injected",205959080),internal_position], null))], null):null),(cljs.core.truth_(place_anchor_before_QMARK_)?null:anchor)], null)], null);
};
var G__43618 = function (var_args){
var p__43449 = null;
if (arguments.length > 0) {
var G__43632__i = 0, G__43632__a = new Array(arguments.length -  0);
while (G__43632__i < G__43632__a.length) {G__43632__a[G__43632__i] = arguments[G__43632__i + 0]; ++G__43632__i;}
  p__43449 = new cljs.core.IndexedSeq(G__43632__a,0,null);
} 
return G__43618__delegate.call(this,p__43449);};
G__43618.cljs$lang$maxFixedArity = 0;
G__43618.cljs$lang$applyTo = (function (arglist__43633){
var p__43449 = cljs.core.seq(arglist__43633);
return G__43618__delegate(p__43449);
});
G__43618.cljs$core$IFn$_invoke$arity$variadic = G__43618__delegate;
return G__43618;
})()
], null));
}));

(re_com.popover.popover_anchor_wrapper.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.popover.popover_anchor_wrapper.cljs$lang$applyTo = (function (seq43445){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43445));
}));

re_com.popover.popover_tooltip_args_desc = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the text (or component) for the tooltip"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"showing?","showing?",2094921488),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean atom",new cljs.core.Keyword(null,"description","description",-1428560544),"an atom. When the value is true, the tooltip shows"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a function which takes no params and returns nothing. Called when the popover is cancelled (e.g. user clicks away)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, displays the close button"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.popover_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"controls background color of the tooltip. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for black or one of ",re_com.validate.popover_status_types_list," (although ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":validating"], null)," is only used by the input-text component)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the component the tooltip is attached to"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"below-center","below-center",-2126885397),new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.position_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when an anchor is in a scrolling region (e.g. scroller component), the popover can sometimes be clipped. When this parameter is true (which is the default), re-com will use a different CSS method to show the popover. This method is slightly inferior because the popover can't track the anchor if it is repositioned"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"specifies width of the tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to popover-anchor-wrapper component)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override component style(s) with a style map, only use in case of emergency (applies to popover-anchor-wrapper component)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to popover-anchor-wrapper component)"], null)], null)], null);
/**
 * Renders text as a tooltip in Bootstrap popover style
 */
re_com.popover.popover_tooltip = (function re_com$popover$popover_tooltip(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43669 = arguments.length;
var i__4737__auto___43670 = (0);
while(true){
if((i__4737__auto___43670 < len__4736__auto___43669)){
args__4742__auto__.push((arguments[i__4737__auto___43670]));

var G__43671 = (i__4737__auto___43670 + (1));
i__4737__auto___43670 = G__43671;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.popover.popover_tooltip.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.popover.popover_tooltip.cljs$core$IFn$_invoke$arity$variadic = (function (p__43458){
var map__43459 = p__43458;
var map__43459__$1 = (((((!((map__43459 == null))))?(((((map__43459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43459):map__43459);
var args = map__43459__$1;
var anchor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43459__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var on_cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43459__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43459__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var no_clip_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43459__$1,new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),true);
var close_button_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43459__$1,new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43459__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var showing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43459__$1,new cljs.core.Keyword(null,"showing?","showing?",2094921488));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43459__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43459__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43459__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43459__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43459__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.popover.popover_tooltip_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["popover-tooltip"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro popover-tooltip-args-desc args \"popover-tooltip\")"));
}

var label__$1 = re_com.util.deref_or_value(label);
var popover_color = (function (){var G__43461 = status;
var G__43461__$1 = (((G__43461 instanceof cljs.core.Keyword))?G__43461.fqn:null);
switch (G__43461__$1) {
case "warning":
return "#f57c00";

break;
case "error":
return "#d50000";

break;
case "info":
return "#333333";

break;
case "success":
return "#13C200";

break;
default:
return "black";

}
})();
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_anchor_wrapper,new cljs.core.Keyword(null,"showing?","showing?",2094921488),showing_QMARK_,new cljs.core.Keyword(null,"position","position",-2011731912),(function (){var or__4126__auto__ = position;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"below-center","below-center",-2126885397);
}
})(),new cljs.core.Keyword(null,"anchor","anchor",1549638489),anchor,new cljs.core.Keyword(null,"class","class",-2030961996),["rc-popover-tooltip ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"popover","popover",-1809582136),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_content_wrapper,new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),no_clip_QMARK_,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),on_cancel,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"tooltip-style?","tooltip-style?",1188162527),true,new cljs.core.Keyword(null,"popover-color","popover-color",-2019049119),popover_color,new cljs.core.Keyword(null,"padding","padding",1660304693),"3px 8px",new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),(6),new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),(12),new cljs.core.Keyword(null,"arrow-gap","arrow-gap",1490206257),(4),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"info","info",-317069002)))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"padding","padding",1660304693),"4px"], null):new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(close_button_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.close_button.close_button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(on_cancel)){
return (on_cancel.cljs$core$IFn$_invoke$arity$0 ? on_cancel.cljs$core$IFn$_invoke$arity$0() : on_cancel.call(null));
} else {
return cljs.core.reset_BANG_(showing_QMARK_,false);
}
}),new cljs.core.Keyword(null,"div-size","div-size",1661625995),(15),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20),new cljs.core.Keyword(null,"left-offset","left-offset",-331155643),(5)], null)], null):null),label__$1], null)], null)], null)], null);
}));

(re_com.popover.popover_tooltip.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.popover.popover_tooltip.cljs$lang$applyTo = (function (seq43457){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43457));
}));


//# sourceMappingURL=re_com.popover.js.map
