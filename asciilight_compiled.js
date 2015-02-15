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
lt.plugins.asciilight.get_adoc = (function get_adoc(){return require(lt.objs.files.join.call(null,lt.plugins.asciilight.plugin_dir,"node_modules/adoc.js"));
});
lt.plugins.asciilight.adoc__GT_html = (function adoc__GT_html(content,base_dir){return clojure.string.replace.call(null,lt.plugins.asciilight.get_adoc.call(null).convert(content,base_dir),/img src=\"*\"/,[cljs.core.str("img src=\""),cljs.core.str(base_dir),cljs.core.str("/")].join(''));
});
lt.plugins.asciilight.setAdocHTML_BANG_ = (function setAdocHTML_BANG_(ed,obj){var html = clojure.string.replace.call(null,lt.plugins.asciilight.adoc__GT_html.call(null,lt.objs.editor.__GT_cm_ed.call(null,ed).getValue(),lt.objs.files.parent.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed))))),/class=\"content\"/,"class=\"adoc-content\"");return lt.object.__GT_content.call(null,obj).innerHTML = html;
});
lt.plugins.asciilight.get_filename = (function get_filename(ed){return new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
});
lt.plugins.asciilight.adoc_skeleton = (function adoc_skeleton(this$){var e__7768__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"adoc"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Asciidoc content coming here"], null)], null));var seq__9177_9183 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9178_9184 = null;var count__9179_9185 = 0;var i__9180_9186 = 0;while(true){
if((i__9180_9186 < count__9179_9185))
{var vec__9181_9187 = cljs.core._nth.call(null,chunk__9178_9184,i__9180_9186);var ev__7769__auto___9188 = cljs.core.nth.call(null,vec__9181_9187,0,null);var func__7770__auto___9189 = cljs.core.nth.call(null,vec__9181_9187,1,null);lt.util.dom.on.call(null,e__7768__auto__,ev__7769__auto___9188,func__7770__auto___9189);
{
var G__9190 = seq__9177_9183;
var G__9191 = chunk__9178_9184;
var G__9192 = count__9179_9185;
var G__9193 = (i__9180_9186 + 1);
seq__9177_9183 = G__9190;
chunk__9178_9184 = G__9191;
count__9179_9185 = G__9192;
i__9180_9186 = G__9193;
continue;
}
} else
{var temp__4092__auto___9194 = cljs.core.seq.call(null,seq__9177_9183);if(temp__4092__auto___9194)
{var seq__9177_9195__$1 = temp__4092__auto___9194;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9177_9195__$1))
{var c__8983__auto___9196 = cljs.core.chunk_first.call(null,seq__9177_9195__$1);{
var G__9197 = cljs.core.chunk_rest.call(null,seq__9177_9195__$1);
var G__9198 = c__8983__auto___9196;
var G__9199 = cljs.core.count.call(null,c__8983__auto___9196);
var G__9200 = 0;
seq__9177_9183 = G__9197;
chunk__9178_9184 = G__9198;
count__9179_9185 = G__9199;
i__9180_9186 = G__9200;
continue;
}
} else
{var vec__9182_9201 = cljs.core.first.call(null,seq__9177_9195__$1);var ev__7769__auto___9202 = cljs.core.nth.call(null,vec__9182_9201,0,null);var func__7770__auto___9203 = cljs.core.nth.call(null,vec__9182_9201,1,null);lt.util.dom.on.call(null,e__7768__auto__,ev__7769__auto___9202,func__7770__auto___9203);
{
var G__9204 = cljs.core.next.call(null,seq__9177_9195__$1);
var G__9205 = null;
var G__9206 = 0;
var G__9207 = 0;
seq__9177_9183 = G__9204;
chunk__9178_9184 = G__9205;
count__9179_9185 = G__9206;
i__9180_9186 = G__9207;
continue;
}
}
} else
{}
}
break;
}
return e__7768__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.asciilight","asciilight","lt.plugins.asciilight/asciilight",3688823062),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"asciilight","asciilight",4275266519)], null),new cljs.core.Keyword(null,"name","name",1017277949),"markdown",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.asciilight","on-close-destroy","lt.plugins.asciilight/on-close-destroy",4775489352)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,filename){lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1017277949)], null),cljs.core.constantly.call(null,[cljs.core.str(filename),cljs.core.str(" - Live")].join('')));
return lt.plugins.asciilight.adoc_skeleton.call(null,this$);
}));
lt.plugins.asciilight.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___9208 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___9208))
{var ts_9209 = temp__4092__auto___9208;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_9209))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_9209);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.asciilight","on-close-destroy","lt.plugins.asciilight/on-close-destroy",4775489352),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.asciilight.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.asciilight.__BEH__read_editor = (function __BEH__read_editor(this$){var adoc_obj = new cljs.core.Keyword(null,"adoc","adoc",1016893609).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return lt.plugins.asciilight.setAdocHTML_BANG_.call(null,this$,adoc_obj);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.asciilight","read-editor","lt.plugins.asciilight/read-editor",1728693299),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.asciilight.__BEH__read_editor,new cljs.core.Keyword(null,"desc","desc",1016984067),"AsciiLight: Read the content inside an editor",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",3947235106),new cljs.core.Keyword("lt.plugins.asciilight","read-editor","lt.plugins.asciilight/read-editor",1728693299)], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.asciilight","watch-editor","lt.plugins.asciilight/watch-editor",558536908),new cljs.core.Keyword(null,"desc","desc",1016984067),"AsciiLight: Watch this editor for changes",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var ed = lt.objs.editor.pool.last_active.call(null);var filename = lt.plugins.asciilight.get_filename.call(null,ed);var adoc_obj = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.asciilight","asciilight","lt.plugins.asciilight/asciilight",3688823062),filename);lt.objs.tabs.add_or_focus_BANG_.call(null,adoc_obj);
lt.object.update_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adoc","adoc",1016893609)], null),((function (ed,filename,adoc_obj){
return (function (){return adoc_obj;
});})(ed,filename,adoc_obj))
);
lt.object.add_behavior_BANG_.call(null,ed,new cljs.core.Keyword("lt.plugins.asciilight","read-editor","lt.plugins.asciilight/read-editor",1728693299));
return lt.object.raise.call(null,ed,new cljs.core.Keyword("lt.plugins.asciilight","read-editor","lt.plugins.asciilight/read-editor",1728693299));
})], null));
}

//# sourceMappingURL=asciilight_compiled.js.map