if(!lt.util.load.provided_QMARK_('lt.plugins.asciilight')) {
goog.provide('lt.plugins.asciilight');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('clojure.string');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.plugins');
goog.require('clojure.string');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.asciilight.plugin_dir = lt.objs.plugins.find_plugin.call(null,"AsciiLight");
lt.plugins.asciilight.css_path = lt.objs.files.join.call(null,lt.plugins.asciilight.plugin_dir,"css/asciidoctor.css");
lt.plugins.asciilight.style = new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,lt.plugins.asciilight.css_path));
lt.plugins.asciilight.adoc_path = lt.objs.files.join.call(null,lt.plugins.asciilight.plugin_dir,"node_modules/adoc.js");
lt.plugins.asciilight.adoc__GT_html = lt.objs.thread.thread_STAR_.call(null,(function tfun6365(){var orig__6354__auto__ = argsArray(arguments);var msg__6355__auto__ = orig__6354__auto__.shift();var args__6356__auto__ = orig__6354__auto__.map(cljs.reader.read_string);var raise = ((function (orig__6354__auto__,msg__6355__auto__,args__6356__auto__){
return (function (obj__6357__auto__,k__6358__auto__,v__6359__auto__){return _send(obj__6357__auto__,k__6358__auto__,cljs.core.pr_str.call(null,v__6359__auto__),"clj");
});})(orig__6354__auto__,msg__6355__auto__,args__6356__auto__))
;args__6356__auto__.unshift(msg__6355__auto__.obj);
return ((function (orig__6354__auto__,msg__6355__auto__,args__6356__auto__,raise){
return (function (obj_id,p__6368){var map__6369 = p__6368;var map__6369__$1 = ((cljs.core.seq_QMARK_.call(null,map__6369))?cljs.core.apply.call(null,cljs.core.hash_map,map__6369):map__6369);var content = cljs.core.get.call(null,map__6369__$1,new cljs.core.Keyword(null,"content","content",1965434859));var base_dir = cljs.core.get.call(null,map__6369__$1,new cljs.core.Keyword(null,"base-dir","base-dir",3586204419));var node_path = cljs.core.get.call(null,map__6369__$1,new cljs.core.Keyword(null,"node-path","node-path",1433418882));var adoc = require(node_path);var res = clojure.string.replace.call(null,adoc.convert(content,base_dir),/img src=\"*\"/,[cljs.core.str("img src=\""),cljs.core.str(base_dir),cljs.core.str("/")].join(''));return _send(obj_id,new cljs.core.Keyword(null,"asciidoc-res","asciidoc-res",1513155980),res);
});})(orig__6354__auto__,msg__6355__auto__,args__6356__auto__,raise))
.apply(null,args__6356__auto__);
}));
lt.plugins.asciilight.get_filename = (function get_filename(ed){return new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
});
lt.plugins.asciilight.adoc_skeleton = (function adoc_skeleton(this$){var e__6281__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"adoc"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Asciidoc content coming here..."], null)], null));var seq__6376_6400 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__6377_6401 = null;var count__6378_6402 = 0;var i__6379_6403 = 0;while(true){
if((i__6379_6403 < count__6378_6402))
{var vec__6380_6404 = cljs.core._nth.call(null,chunk__6377_6401,i__6379_6403);var ev__6282__auto___6405 = cljs.core.nth.call(null,vec__6380_6404,0,null);var func__6283__auto___6406 = cljs.core.nth.call(null,vec__6380_6404,1,null);lt.util.dom.on.call(null,e__6281__auto__,ev__6282__auto___6405,func__6283__auto___6406);
{
var G__6407 = seq__6376_6400;
var G__6408 = chunk__6377_6401;
var G__6409 = count__6378_6402;
var G__6410 = (i__6379_6403 + 1);
seq__6376_6400 = G__6407;
chunk__6377_6401 = G__6408;
count__6378_6402 = G__6409;
i__6379_6403 = G__6410;
continue;
}
} else
{var temp__4092__auto___6411 = cljs.core.seq.call(null,seq__6376_6400);if(temp__4092__auto___6411)
{var seq__6376_6412__$1 = temp__4092__auto___6411;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6376_6412__$1))
{var c__5632__auto___6413 = cljs.core.chunk_first.call(null,seq__6376_6412__$1);{
var G__6414 = cljs.core.chunk_rest.call(null,seq__6376_6412__$1);
var G__6415 = c__5632__auto___6413;
var G__6416 = cljs.core.count.call(null,c__5632__auto___6413);
var G__6417 = 0;
seq__6376_6400 = G__6414;
chunk__6377_6401 = G__6415;
count__6378_6402 = G__6416;
i__6379_6403 = G__6417;
continue;
}
} else
{var vec__6381_6418 = cljs.core.first.call(null,seq__6376_6412__$1);var ev__6282__auto___6419 = cljs.core.nth.call(null,vec__6381_6418,0,null);var func__6283__auto___6420 = cljs.core.nth.call(null,vec__6381_6418,1,null);lt.util.dom.on.call(null,e__6281__auto__,ev__6282__auto___6419,func__6283__auto___6420);
{
var G__6421 = cljs.core.next.call(null,seq__6376_6412__$1);
var G__6422 = null;
var G__6423 = 0;
var G__6424 = 0;
seq__6376_6400 = G__6421;
chunk__6377_6401 = G__6422;
count__6378_6402 = G__6423;
i__6379_6403 = G__6424;
continue;
}
}
} else
{}
}
break;
}
return e__6281__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.asciilight","asciilight","lt.plugins.asciilight/asciilight",3688823062),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"asciilight","asciilight",4275266519)], null),new cljs.core.Keyword(null,"name","name",1017277949),"asciilight",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.asciilight","on-close-destroy","lt.plugins.asciilight/on-close-destroy",4775489352),new cljs.core.Keyword("lt.plugins.asciilight","on-adoc-result","lt.plugins.asciilight/on-adoc-result",784612150)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,filename){lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1017277949)], null),cljs.core.constantly.call(null,[cljs.core.str(filename),cljs.core.str(" - Live")].join('')));
return lt.plugins.asciilight.adoc_skeleton.call(null,this$);
}));
lt.plugins.asciilight.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___6425 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___6425))
{var ts_6426 = temp__4092__auto___6425;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_6426))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_6426);
} else
{}
} else
{}
var temp__4092__auto___6427 = new cljs.core.Keyword(null,"owner-ed","owner-ed",2677003627).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___6427))
{var ed_6428 = temp__4092__auto___6427;lt.object.assoc_in_BANG_.call(null,ed_6428,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adoc","adoc",1016893609)], null),null);
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.asciilight","on-close-destroy","lt.plugins.asciilight/on-close-destroy",4775489352),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.asciilight.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.asciilight.__BEH__on_adoc_result = (function __BEH__on_adoc_result(this$,html){var container = lt.object.__GT_content.call(null,this$);container.innerHTML = clojure.string.replace.call(null,html,/class=\"content\"/,"class=\"adoc-content\"");
var seq__6386 = cljs.core.seq.call(null,lt.util.dom.$$.call(null,"pre code",container));var chunk__6387 = null;var count__6388 = 0;var i__6389 = 0;while(true){
if((i__6389 < count__6388))
{var block = cljs.core._nth.call(null,chunk__6387,i__6389);hljs.highlightBlock(block);
{
var G__6429 = seq__6386;
var G__6430 = chunk__6387;
var G__6431 = count__6388;
var G__6432 = (i__6389 + 1);
seq__6386 = G__6429;
chunk__6387 = G__6430;
count__6388 = G__6431;
i__6389 = G__6432;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6386);if(temp__4092__auto__)
{var seq__6386__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6386__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__6386__$1);{
var G__6433 = cljs.core.chunk_rest.call(null,seq__6386__$1);
var G__6434 = c__5632__auto__;
var G__6435 = cljs.core.count.call(null,c__5632__auto__);
var G__6436 = 0;
seq__6386 = G__6433;
chunk__6387 = G__6434;
count__6388 = G__6435;
i__6389 = G__6436;
continue;
}
} else
{var block = cljs.core.first.call(null,seq__6386__$1);hljs.highlightBlock(block);
{
var G__6437 = cljs.core.next.call(null,seq__6386__$1);
var G__6438 = null;
var G__6439 = 0;
var G__6440 = 0;
seq__6386 = G__6437;
chunk__6387 = G__6438;
count__6388 = G__6439;
i__6389 = G__6440;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.asciilight","on-adoc-result","lt.plugins.asciilight/on-adoc-result",784612150),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.asciilight.__BEH__on_adoc_result,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"asciidoc-res","asciidoc-res",1513155980),null], null), null));
lt.plugins.asciilight.__BEH__read_editor = (function __BEH__read_editor(this$){var temp__4092__auto__ = new cljs.core.Keyword(null,"adoc","adoc",1016893609).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto__))
{var adoc_obj = temp__4092__auto__;return lt.plugins.asciilight.adoc__GT_html.call(null,adoc_obj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node-path","node-path",1433418882),lt.plugins.asciilight.adoc_path,new cljs.core.Keyword(null,"base-dir","base-dir",3586204419),lt.objs.files.parent.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))),new cljs.core.Keyword(null,"content","content",1965434859),lt.objs.editor.__GT_cm_ed.call(null,this$).getValue()], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.asciilight","read-editor","lt.plugins.asciilight/read-editor",1728693299),new cljs.core.Keyword(null,"throttle","throttle",2497347228),200,new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.asciilight.__BEH__read_editor,new cljs.core.Keyword(null,"desc","desc",1016984067),"AsciiLight: Read the content inside an editor and trigger adoc conversion",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",3947235106),new cljs.core.Keyword("lt.plugins.asciilight","read-editor","lt.plugins.asciilight/read-editor",1728693299)], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.asciilight","watch-editor","lt.plugins.asciilight/watch-editor",558536908),new cljs.core.Keyword(null,"desc","desc",1016984067),"AsciiLight: Watch this editor for changes",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var ed = lt.objs.editor.pool.last_active.call(null);var filename = lt.plugins.asciilight.get_filename.call(null,ed);var adoc_obj = (function (){var or__4884__auto__ = new cljs.core.Keyword(null,"adoc","adoc",1016893609).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.asciilight","asciilight","lt.plugins.asciilight/asciilight",3688823062),filename);
}
})();lt.objs.tabs.add_or_focus_BANG_.call(null,adoc_obj);
lt.object.assoc_in_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adoc","adoc",1016893609)], null),adoc_obj);
lt.object.assoc_in_BANG_.call(null,adoc_obj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"owner-ed","owner-ed",2677003627)], null),ed);
lt.object.add_behavior_BANG_.call(null,ed,new cljs.core.Keyword("lt.plugins.asciilight","read-editor","lt.plugins.asciilight/read-editor",1728693299));
return lt.object.raise.call(null,ed,new cljs.core.Keyword("lt.plugins.asciilight","read-editor","lt.plugins.asciilight/read-editor",1728693299));
})], null));
}

//# sourceMappingURL=asciilight_compiled.js.map