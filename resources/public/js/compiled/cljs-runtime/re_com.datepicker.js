goog.provide('re_com.datepicker');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs_time.core');
goog.require('re_com.validate');
goog.require('cljs_time.predicates');
goog.require('cljs_time.format');
goog.require('re_com.box');
goog.require('re_com.util');
goog.require('re_com.popover');
re_com.datepicker.month_format = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("MMMM yyyy");
re_com.datepicker.week_format = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("ww");
re_com.datepicker.date_format = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy MMM dd");
re_com.datepicker.iso8601__GT_date = (function re_com$datepicker$iso8601__GT_date(iso8601){
if(cljs.core.seq(iso8601)){
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2((function (){var G__44122 = new cljs.core.Keyword(null,"basic-date","basic-date",1566551506);
return (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(G__44122) : cljs_time.format.formatters.call(null,G__44122));
})(),iso8601);
} else {
return null;
}
});
re_com.datepicker.month_label = (function re_com$datepicker$month_label(date){
return cljs_time.format.unparse(re_com.datepicker.month_format,date);
});
re_com.datepicker.dec_month = (function re_com$datepicker$dec_month(date){
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(date,cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((1)));
});
re_com.datepicker.inc_month = (function re_com$datepicker$inc_month(date){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(date,cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((1)));
});
re_com.datepicker.inc_date = (function re_com$datepicker$inc_date(date,n){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(date,cljs_time.core.days.cljs$core$IFn$_invoke$arity$1(n));
});
/**
 * If date fails pred, subtract period until true, otherwise answer date
 */
re_com.datepicker.previous = (function re_com$datepicker$previous(var_args){
var G__44124 = arguments.length;
switch (G__44124) {
case 1:
return re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$2(pred,re_com.util.now__GT_utc());
});

re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$2 = (function (pred,date){
return re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$3(pred,date,cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1)));
});

re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$3 = (function (pred,date,period){
while(true){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(date) : pred.call(null,date)))){
return date;
} else {
var G__44156 = pred;
var G__44157 = cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(date,period);
var G__44158 = period;
pred = G__44156;
date = G__44157;
period = G__44158;
continue;
}
break;
}
});

re_com.datepicker.previous.cljs$lang$maxFixedArity = 3;

re_com.datepicker._EQ_date = (function re_com$datepicker$_EQ_date(date1,date2){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.year(date1),cljs_time.core.year(date2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.month(date1),cljs_time.core.month(date2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.day(date1),cljs_time.core.day(date2))));
});
re_com.datepicker._LT__EQ_date = (function re_com$datepicker$_LT__EQ_date(date1,date2){
var or__4131__auto__ = re_com.datepicker._EQ_date(date1,date2);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs_time.core.before_QMARK_(date1,date2);
}
});
re_com.datepicker._GT__EQ_date = (function re_com$datepicker$_GT__EQ_date(date1,date2){
var or__4131__auto__ = re_com.datepicker._EQ_date(date1,date2);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs_time.core.after_QMARK_(date1,date2);
}
});
re_com.datepicker.days_vector = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"Mo","Mo",706762113),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"M",new cljs.core.Keyword(null,"name","name",1843675177),"MON"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"Tu","Tu",-1088052995),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"T",new cljs.core.Keyword(null,"name","name",1843675177),"TUE"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"We","We",-705480743),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"W",new cljs.core.Keyword(null,"name","name",1843675177),"WED"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"Th","Th",1409372402),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"T",new cljs.core.Keyword(null,"name","name",1843675177),"THU"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"Fr","Fr",1051514106),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"F",new cljs.core.Keyword(null,"name","name",1843675177),"FRI"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"Sa","Sa",1909936819),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"S",new cljs.core.Keyword(null,"name","name",1843675177),"SAT"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"Su","Su",1604604633),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"S",new cljs.core.Keyword(null,"name","name",1843675177),"SUN"], null)], null);
re_com.datepicker.rotate = (function re_com$datepicker$rotate(n,coll){
var c = cljs.core.count(coll);
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(c,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.mod(n,c),cljs.core.cycle(coll)));
});
re_com.datepicker.is_day_pred = (function re_com$datepicker$is_day_pred(d){
return (function (p1__44125_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.day_of_week(p1__44125_SHARP_),(d + (1)));
});
});
re_com.datepicker.main_div_with = (function re_com$datepicker$main_div_with(table_div,hide_border_QMARK_,class$,style,attr){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-datepicker-wrapper",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.border,new cljs.core.Keyword(null,"radius","radius",-2073122258),"4px",new cljs.core.Keyword(null,"size","size",1098693007),"none",new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(hide_border_QMARK_)?"none":null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-datepicker datepicker noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"13px",new cljs.core.Keyword(null,"position","position",-2011731912),"static"], null),style], 0))], null),attr], 0)),table_div], null)], null)], null)], null);
});
/**
 * Answer 2 x rows showing month with nav buttons and days NOTE: not internationalized
 */
re_com.datepicker.table_thead = (function re_com$datepicker$table_thead(display_month,p__44126){
var map__44127 = p__44126;
var map__44127__$1 = (((((!((map__44127 == null))))?(((((map__44127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44127):map__44127);
var show_weeks_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44127__$1,new cljs.core.Keyword(null,"show-weeks?","show-weeks?",-1563135221));
var minimum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44127__$1,new cljs.core.Keyword(null,"minimum","minimum",-1621006059));
var maximum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44127__$1,new cljs.core.Keyword(null,"maximum","maximum",573880714));
var start_of_week = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44127__$1,new cljs.core.Keyword(null,"start-of-week","start-of-week",-1590603824));
var prev_date = re_com.datepicker.dec_month(cljs.core.deref(display_month));
var minimum__$1 = re_com.util.deref_or_value(minimum);
var maximum__$1 = re_com.util.deref_or_value(maximum);
var prev_enabled_QMARK_ = (cljs.core.truth_(minimum__$1)?cljs_time.core.after_QMARK_(prev_date,re_com.datepicker.dec_month(minimum__$1)):true);
var next_date = re_com.datepicker.inc_month(cljs.core.deref(display_month));
var next_enabled_QMARK_ = (cljs.core.truth_(maximum__$1)?cljs_time.core.before_QMARK_(next_date,maximum__$1):true);
var template_row = (cljs.core.truth_(show_weeks_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(template_row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["prev ",(cljs.core.truth_(prev_enabled_QMARK_)?"available selectable":"disabled")].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (prev_date,minimum__$1,maximum__$1,prev_enabled_QMARK_,next_date,next_enabled_QMARK_,template_row,map__44127,map__44127__$1,show_weeks_QMARK_,minimum,maximum,start_of_week){
return (function (event){
if(cljs.core.truth_(prev_enabled_QMARK_)){
cljs.core.reset_BANG_(display_month,prev_date);
} else {
}

return null;
});})(prev_date,minimum__$1,maximum__$1,prev_enabled_QMARK_,next_date,next_enabled_QMARK_,template_row,map__44127,map__44127__$1,show_weeks_QMARK_,minimum,maximum,start_of_week))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.zmdi.zmdi-chevron-left","i.zmdi.zmdi-chevron-left",-1877271880),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px"], null)], null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"month",new cljs.core.Keyword(null,"col-span","col-span",-232603210),"5"], null),re_com.datepicker.month_label(cljs.core.deref(display_month))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["next ",(cljs.core.truth_(next_enabled_QMARK_)?"available selectable":"disabled")].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (prev_date,minimum__$1,maximum__$1,prev_enabled_QMARK_,next_date,next_enabled_QMARK_,template_row,map__44127,map__44127__$1,show_weeks_QMARK_,minimum,maximum,start_of_week){
return (function (event){
if(cljs.core.truth_(next_enabled_QMARK_)){
cljs.core.reset_BANG_(display_month,next_date);
} else {
}

return null;
});})(prev_date,minimum__$1,maximum__$1,prev_enabled_QMARK_,next_date,next_enabled_QMARK_,template_row,map__44127,map__44127__$1,show_weeks_QMARK_,minimum,maximum,start_of_week))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.zmdi.zmdi-chevron-right","i.zmdi.zmdi-chevron-right",1358259812),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px"], null)], null)], null)], null)], 0)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(template_row,(function (){var iter__4523__auto__ = ((function (prev_date,minimum__$1,maximum__$1,prev_enabled_QMARK_,next_date,next_enabled_QMARK_,template_row,map__44127,map__44127__$1,show_weeks_QMARK_,minimum,maximum,start_of_week){
return (function re_com$datepicker$table_thead_$_iter__44129(s__44130){
return (new cljs.core.LazySeq(null,((function (prev_date,minimum__$1,maximum__$1,prev_enabled_QMARK_,next_date,next_enabled_QMARK_,template_row,map__44127,map__44127__$1,show_weeks_QMARK_,minimum,maximum,start_of_week){
return (function (){
var s__44130__$1 = s__44130;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44130__$1);
if(temp__5735__auto__){
var s__44130__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44130__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__44130__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__44132 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__44131 = (0);
while(true){
if((i__44131 < size__4522__auto__)){
var day = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__44131);
cljs.core.chunk_append(b__44132,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"day-enabled"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(day))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(day)], null)));

var G__44159 = (i__44131 + (1));
i__44131 = G__44159;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44132),re_com$datepicker$table_thead_$_iter__44129(cljs.core.chunk_rest(s__44130__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44132),null);
}
} else {
var day = cljs.core.first(s__44130__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"day-enabled"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(day))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(day)], null)),re_com$datepicker$table_thead_$_iter__44129(cljs.core.rest(s__44130__$2)));
}
} else {
return null;
}
break;
}
});})(prev_date,minimum__$1,maximum__$1,prev_enabled_QMARK_,next_date,next_enabled_QMARK_,template_row,map__44127,map__44127__$1,show_weeks_QMARK_,minimum,maximum,start_of_week))
,null,null));
});})(prev_date,minimum__$1,maximum__$1,prev_enabled_QMARK_,next_date,next_enabled_QMARK_,template_row,map__44127,map__44127__$1,show_weeks_QMARK_,minimum,maximum,start_of_week))
;
return iter__4523__auto__(re_com.datepicker.rotate(start_of_week,re_com.datepicker.days_vector));
})())], null);
});
re_com.datepicker.selection_changed = (function re_com$datepicker$selection_changed(selection,change_callback){
return (change_callback.cljs$core$IFn$_invoke$arity$1 ? change_callback.cljs$core$IFn$_invoke$arity$1(selection) : change_callback.call(null,selection));
});
re_com.datepicker.table_td = (function re_com$datepicker$table_td(date,focus_month,selected,today,p__44133,disabled_QMARK_,on_change){
var map__44134 = p__44133;
var map__44134__$1 = (((((!((map__44134 == null))))?(((((map__44134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44134):map__44134);
var attributes = map__44134__$1;
var minimum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44134__$1,new cljs.core.Keyword(null,"minimum","minimum",-1621006059));
var maximum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44134__$1,new cljs.core.Keyword(null,"maximum","maximum",573880714));
var minimum__$1 = re_com.util.deref_or_value(minimum);
var maximum__$1 = re_com.util.deref_or_value(maximum);
var enabled_min = (cljs.core.truth_(minimum__$1)?re_com.datepicker._GT__EQ_date(date,minimum__$1):true);
var enabled_max = (cljs.core.truth_(maximum__$1)?re_com.datepicker._LT__EQ_date(date,maximum__$1):true);
var enabled_day = (function (){var and__4120__auto__ = enabled_min;
if(cljs.core.truth_(and__4120__auto__)){
return enabled_max;
} else {
return and__4120__auto__;
}
})();
var disabled_day_QMARK_ = (cljs.core.truth_(enabled_day)?cljs.core.not((function (){var fexpr__44136 = new cljs.core.Keyword(null,"selectable-fn","selectable-fn",-1997365738).cljs$core$IFn$_invoke$arity$1(attributes);
return (fexpr__44136.cljs$core$IFn$_invoke$arity$1 ? fexpr__44136.cljs$core$IFn$_invoke$arity$1(date) : fexpr__44136.call(null,date));
})()):true);
var classes = (cljs.core.truth_(disabled_QMARK_)?"off":((disabled_day_QMARK_)?"off":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(focus_month,cljs_time.core.month(date)))?"available":"available off"
)));
var classes__$1 = (cljs.core.truth_((function (){var and__4120__auto__ = selected;
if(cljs.core.truth_(and__4120__auto__)){
return re_com.datepicker._EQ_date(selected,date);
} else {
return and__4120__auto__;
}
})())?[classes," active start-date end-date"].join(''):(cljs.core.truth_((function (){var and__4120__auto__ = today;
if(cljs.core.truth_(and__4120__auto__)){
return re_com.datepicker._EQ_date(date,today);
} else {
return and__4120__auto__;
}
})())?[classes," today"].join(''):classes
));
var on_click = ((function (minimum__$1,maximum__$1,enabled_min,enabled_max,enabled_day,disabled_day_QMARK_,classes,classes__$1,map__44134,map__44134__$1,attributes,minimum,maximum){
return (function (){
if(cljs.core.truth_((function (){var or__4131__auto__ = disabled_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return disabled_day_QMARK_;
}
})())){
return null;
} else {
return re_com.datepicker.selection_changed(date,on_change);
}
});})(minimum__$1,maximum__$1,enabled_min,enabled_max,enabled_day,disabled_day_QMARK_,classes,classes__$1,map__44134,map__44134__$1,attributes,minimum,maximum))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),classes__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (minimum__$1,maximum__$1,enabled_min,enabled_max,enabled_day,disabled_day_QMARK_,classes,classes__$1,on_click,map__44134,map__44134__$1,attributes,minimum,maximum){
return (function (event){
on_click();

return null;
});})(minimum__$1,maximum__$1,enabled_min,enabled_max,enabled_day,disabled_day_QMARK_,classes,classes__$1,on_click,map__44134,map__44134__$1,attributes,minimum,maximum))
], null),cljs_time.core.day(date)], null);
});
re_com.datepicker.week_td = (function re_com$datepicker$week_td(date){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"week"], null),cljs_time.format.unparse(re_com.datepicker.week_format,date)], null);
});
/**
 * Return 7 columns of date cells from date inclusive
 */
re_com.datepicker.table_tr = (function re_com$datepicker$table_tr(date,focus_month,selected,attributes,disabled_QMARK_,on_change){
var table_row = (cljs.core.truth_(new cljs.core.Keyword(null,"show-weeks?","show-weeks?",-1563135221).cljs$core$IFn$_invoke$arity$1(attributes))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),re_com.datepicker.week_td(date)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null));
var row_dates = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (table_row){
return (function (p1__44137_SHARP_){
return re_com.datepicker.inc_date(date,p1__44137_SHARP_);
});})(table_row))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1((7)));
var today = (cljs.core.truth_(new cljs.core.Keyword(null,"show-today?","show-today?",513056415).cljs$core$IFn$_invoke$arity$1(attributes))?re_com.util.now__GT_utc():null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(table_row,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (table_row,row_dates,today){
return (function (p1__44138_SHARP_){
return re_com.datepicker.table_td(p1__44138_SHARP_,focus_month,selected,today,attributes,disabled_QMARK_,on_change);
});})(table_row,row_dates,today))
,row_dates));
});
/**
 * Return matrix of 6 rows x 7 cols table cells representing 41 days from start-date inclusive
 */
re_com.datepicker.table_tbody = (function re_com$datepicker$table_tbody(display_month,selected,attributes,disabled_QMARK_,on_change){
var start_of_week = new cljs.core.Keyword(null,"start-of-week","start-of-week",-1590603824).cljs$core$IFn$_invoke$arity$1(attributes);
var current_start = re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$2(re_com.datepicker.is_day_pred(start_of_week),display_month);
var focus_month = cljs_time.core.month(display_month);
var row_start_dates = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (start_of_week,current_start,focus_month){
return (function (p1__44139_SHARP_){
return re_com.datepicker.inc_date(current_start,((7) * p1__44139_SHARP_));
});})(start_of_week,current_start,focus_month))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1((6)));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (start_of_week,current_start,focus_month,row_start_dates){
return (function (p1__44140_SHARP_){
return re_com.datepicker.table_tr(p1__44140_SHARP_,focus_month,selected,attributes,disabled_QMARK_,on_change);
});})(start_of_week,current_start,focus_month,row_start_dates))
,row_start_dates));
});
/**
 * Augment passed attributes with extra info/defaults
 */
re_com.datepicker.configure = (function re_com$datepicker$configure(attributes){
var selectable_fn = ((cljs.core.fn_QMARK_(new cljs.core.Keyword(null,"selectable-fn","selectable-fn",-1997365738).cljs$core$IFn$_invoke$arity$1(attributes)))?new cljs.core.Keyword(null,"selectable-fn","selectable-fn",-1997365738).cljs$core$IFn$_invoke$arity$1(attributes):cljs.core.constantly(true));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attributes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selectable-fn","selectable-fn",-1997365738),selectable_fn], null)], 0));
});
re_com.datepicker.datepicker_args_desc = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"satisfies DateTimeProtocol | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.date_like_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"the selected date. If provided, should pass pred ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":selectable-fn"], null),". If not provided, (now->utc) will be used and the returned date will be a ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"goog.date.UtcDateTime"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"satisfies DateTimeProtocol -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"called when a new selection is made. Returned type is the same as model (unless model is nil, in which case it will be ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"goog.date.UtcDateTime"], null),")"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, the user can't select dates but can navigate"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"selectable-fn","selectable-fn",-1997365738),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"(fn [date] true)",new cljs.core.Keyword(null,"type","type",1174270348),"pred",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"Predicate is passed a date. If it answers false, day will be shown disabled and can't be selected."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"show-weeks?","show-weeks?",-1563135221),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, week numbers are shown to the left"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"show-today?","show-today?",513056415),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, today's date is highlighted"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"minimum","minimum",-1621006059),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"satisfies DateTimeProtocol | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.date_like_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"no selection or navigation before this date"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"maximum","maximum",573880714),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"satisfies DateTimeProtocol | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.date_like_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"no selection or navigation after this date"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"start-of-week","start-of-week",-1590603824),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(6),new cljs.core.Keyword(null,"type","type",1174270348),"int",new cljs.core.Keyword(null,"description","description",-1428560544),"first day of week (Monday = 0 ... Sunday = 6)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, the border is not displayed"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the outer border div, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (applies to the outer border div, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null)," allowed (applies to the outer border div, not the wrapping div)"], null)], null)], null);
re_com.datepicker.datepicker = (function re_com$datepicker$datepicker(var_args){
var args__4736__auto__ = [];
var len__4730__auto___44160 = arguments.length;
var i__4731__auto___44161 = (0);
while(true){
if((i__4731__auto___44161 < len__4730__auto___44160)){
args__4736__auto__.push((arguments[i__4731__auto___44161]));

var G__44162 = (i__4731__auto___44161 + (1));
i__4731__auto___44161 = G__44162;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.datepicker.datepicker.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.datepicker.datepicker.cljs$core$IFn$_invoke$arity$variadic = (function (p__44142){
var map__44143 = p__44142;
var map__44143__$1 = (((((!((map__44143 == null))))?(((((map__44143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44143):map__44143);
var args = map__44143__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44143__$1,new cljs.core.Keyword(null,"model","model",331153215));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.datepicker.datepicker_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["datepicker"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro datepicker-args-desc args \"datepicker\")"));
}

var external_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(model));
var internal_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(external_model));
var display_month = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = cljs.core.deref(internal_model);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return re_com.util.now__GT_utc();
}
})()));
return ((function (external_model,internal_model,display_month,map__44143,map__44143__$1,args,model){
return (function() { 
var re_com$datepicker$datepicker_component__delegate = function (p__44145){
var map__44146 = p__44145;
var map__44146__$1 = (((((!((map__44146 == null))))?(((((map__44146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44146):map__44146);
var args__$1 = map__44146__$1;
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44146__$1,new cljs.core.Keyword(null,"model","model",331153215));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44146__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44146__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var start_of_week = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44146__$1,new cljs.core.Keyword(null,"start-of-week","start-of-week",-1590603824),(6));
var hide_border_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44146__$1,new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44146__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44146__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44146__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.datepicker.datepicker_args_desc),args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["datepicker"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro datepicker-args-desc args \"datepicker\")"));
}

var latest_ext_model = re_com.util.deref_or_value(model__$1);
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var props_with_defaults = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start-of-week","start-of-week",-1590603824),start_of_week], null)], 0));
var configuration = re_com.datepicker.configure(props_with_defaults);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(external_model),latest_ext_model)){
cljs.core.reset_BANG_(external_model,latest_ext_model);

cljs.core.reset_BANG_(internal_model,latest_ext_model);

cljs.core.reset_BANG_(display_month,cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = cljs.core.deref(internal_model);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return re_com.util.now__GT_utc();
}
})()));
} else {
}

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.main_div_with,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"table-condensed"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.table_thead,display_month,configuration], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.table_tbody,cljs.core.deref(display_month),cljs.core.deref(internal_model),configuration,disabled_QMARK___$1,on_change], null)], null),hide_border_QMARK_,class$,style,attr], null);
};
var re_com$datepicker$datepicker_component = function (var_args){
var p__44145 = null;
if (arguments.length > 0) {
var G__44163__i = 0, G__44163__a = new Array(arguments.length -  0);
while (G__44163__i < G__44163__a.length) {G__44163__a[G__44163__i] = arguments[G__44163__i + 0]; ++G__44163__i;}
  p__44145 = new cljs.core.IndexedSeq(G__44163__a,0,null);
} 
return re_com$datepicker$datepicker_component__delegate.call(this,p__44145);};
re_com$datepicker$datepicker_component.cljs$lang$maxFixedArity = 0;
re_com$datepicker$datepicker_component.cljs$lang$applyTo = (function (arglist__44164){
var p__44145 = cljs.core.seq(arglist__44164);
return re_com$datepicker$datepicker_component__delegate(p__44145);
});
re_com$datepicker$datepicker_component.cljs$core$IFn$_invoke$arity$variadic = re_com$datepicker$datepicker_component__delegate;
return re_com$datepicker$datepicker_component;
})()
;
;})(external_model,internal_model,display_month,map__44143,map__44143__$1,args,model))
});

re_com.datepicker.datepicker.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.datepicker.datepicker.cljs$lang$applyTo = (function (seq44141){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44141));
});

/**
 * Provide clickable field with current date label and dropdown button e.g. [ 2014 Sep 17 | # ]
 */
re_com.datepicker.anchor_button = (function re_com$datepicker$anchor_button(shown_QMARK_,model,format,placeholder){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-datepicker-dropdown-anchor input-group display-flex noselect",new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style("none"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shown_QMARK_,cljs.core.not);

return null;
})], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"class","class",-2030961996),"noselect",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"10em",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"10em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control dropdown-button"], null),((re_com.validate.date_like_QMARK_(re_com.util.deref_or_value(model)))?cljs_time.format.unparse(((cljs.core.seq(format))?cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(format):re_com.datepicker.date_format),re_com.util.deref_or_value(model)):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),placeholder], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.dropdown-button.activator.input-group-addon","span.dropdown-button.activator.input-group-addon",-1049661492),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"3px 0px 0px 0px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.zmdi.zmdi-apps","i.zmdi.zmdi-apps",-641069407),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px"], null)], null)], null)], null)], null)], null)], null);
});
re_com.datepicker.datepicker_dropdown_args_desc = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(re_com.datepicker.datepicker_args_desc,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"yyyy MMM dd",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"description","description",-1428560544),"[datepicker-dropdown only] a representation of a date format. See cljs_time.format"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"[datepicker-dropdown only] when an anchor is in a scrolling region (e.g. scroller component), the popover can sometimes be clipped. When this parameter is true (which is the default), re-com will use a different CSS method to show the popover. This method is slightly inferior because the popover can't track the anchor if it is repositioned"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"description","description",-1428560544),"[datepicker-dropdown only] placeholder text for when a date is not selected."], null)], 0));
re_com.datepicker.datepicker_dropdown = (function re_com$datepicker$datepicker_dropdown(var_args){
var args__4736__auto__ = [];
var len__4730__auto___44165 = arguments.length;
var i__4731__auto___44166 = (0);
while(true){
if((i__4731__auto___44166 < len__4730__auto___44165)){
args__4736__auto__.push((arguments[i__4731__auto___44166]));

var G__44167 = (i__4731__auto___44166 + (1));
i__4731__auto___44166 = G__44167;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.datepicker.datepicker_dropdown.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.datepicker.datepicker_dropdown.cljs$core$IFn$_invoke$arity$variadic = (function (p__44149){
var map__44150 = p__44149;
var map__44150__$1 = (((((!((map__44150 == null))))?(((((map__44150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44150):map__44150);
var args = map__44150__$1;
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.datepicker.datepicker_dropdown_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["datepicker-dropdown"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro datepicker-dropdown-args-desc args \"datepicker-dropdown\")"));
}

var shown_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var cancel_popover = ((function (shown_QMARK_,map__44150,map__44150__$1,args){
return (function (){
return cljs.core.reset_BANG_(shown_QMARK_,false);
});})(shown_QMARK_,map__44150,map__44150__$1,args))
;
var position = new cljs.core.Keyword(null,"below-left","below-left",1233934732);
return ((function (shown_QMARK_,cancel_popover,position,map__44150,map__44150__$1,args){
return (function() { 
var G__44168__delegate = function (p__44152){
var map__44153 = p__44152;
var map__44153__$1 = (((((!((map__44153 == null))))?(((((map__44153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44153):map__44153);
var passthrough_args = map__44153__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44153__$1,new cljs.core.Keyword(null,"model","model",331153215));
var show_weeks_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44153__$1,new cljs.core.Keyword(null,"show-weeks?","show-weeks?",-1563135221));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44153__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44153__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var no_clip_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44153__$1,new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),true);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44153__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var collapse_on_select = ((function (map__44153,map__44153__$1,passthrough_args,model,show_weeks_QMARK_,on_change,format,no_clip_QMARK_,placeholder,shown_QMARK_,cancel_popover,position,map__44150,map__44150__$1,args){
return (function (new_model){
cljs.core.reset_BANG_(shown_QMARK_,false);

if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_model) : on_change.call(null,new_model));
} else {
return null;
}
});})(map__44153,map__44153__$1,passthrough_args,model,show_weeks_QMARK_,on_change,format,no_clip_QMARK_,placeholder,shown_QMARK_,cancel_popover,position,map__44150,map__44150__$1,args))
;
var passthrough_args__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(passthrough_args,new cljs.core.Keyword(null,"format","format",-1306924766),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083)], 0));
var passthrough_args__$2 = cljs.core.flatten(cljs.core.vec(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922),true], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(passthrough_args__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),collapse_on_select)], 0))));
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_anchor_wrapper,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-datepicker-dropdown-wrapper",new cljs.core.Keyword(null,"showing?","showing?",2094921488),shown_QMARK_,new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.anchor_button,shown_QMARK_,model,format,placeholder], null),new cljs.core.Keyword(null,"popover","popover",-1809582136),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_content_wrapper,new cljs.core.Keyword(null,"position-offset","position-offset",1257061411),(cljs.core.truth_(show_weeks_QMARK_)?(43):(44)),new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),no_clip_QMARK_,new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),(0),new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),(0),new cljs.core.Keyword(null,"arrow-gap","arrow-gap",1490206257),(3),new cljs.core.Keyword(null,"padding","padding",1660304693),"0px",new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),cancel_popover,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.datepicker], null),passthrough_args__$2)], null)], null);
};
var G__44168 = function (var_args){
var p__44152 = null;
if (arguments.length > 0) {
var G__44169__i = 0, G__44169__a = new Array(arguments.length -  0);
while (G__44169__i < G__44169__a.length) {G__44169__a[G__44169__i] = arguments[G__44169__i + 0]; ++G__44169__i;}
  p__44152 = new cljs.core.IndexedSeq(G__44169__a,0,null);
} 
return G__44168__delegate.call(this,p__44152);};
G__44168.cljs$lang$maxFixedArity = 0;
G__44168.cljs$lang$applyTo = (function (arglist__44170){
var p__44152 = cljs.core.seq(arglist__44170);
return G__44168__delegate(p__44152);
});
G__44168.cljs$core$IFn$_invoke$arity$variadic = G__44168__delegate;
return G__44168;
})()
;
;})(shown_QMARK_,cancel_popover,position,map__44150,map__44150__$1,args))
});

re_com.datepicker.datepicker_dropdown.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.datepicker.datepicker_dropdown.cljs$lang$applyTo = (function (seq44148){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44148));
});


//# sourceMappingURL=re_com.datepicker.js.map
