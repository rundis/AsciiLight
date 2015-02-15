(ns lt.plugins.asciilight
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.files :as files]
            [lt.objs.tabs :as tabs]
            [lt.objs.plugins :as plugins]
            [lt.util.dom :as dom]
            [clojure.string :as s])
  (:require-macros [lt.macros :refer [defui behavior]]))


(def plugin-dir (plugins/find-plugin "AsciiLight"))
(def css-path (files/join plugin-dir "css/asciidoctor.css"))
(def style (:content (files/open-sync css-path)))

(defn get-adoc []
  (js/require (files/join plugin-dir "node_modules/adoc.js")))


(defn adoc->html [content base-dir]
  (-> (.convert (get-adoc) content base-dir)
      (clojure.string/replace #"img src=\"*\"" (str "img src=\"" base-dir "/"))))


(defn setAdocHTML! [ed obj]
  (let [html (->
              (adoc->html (.getValue (editor/->cm-ed ed))
                          (files/parent (-> @ed :info :path)))
              (clojure.string/replace #"class=\"content\"" "class=\"adoc-content\""))]
    (set! (.-innerHTML (object/->content obj)) html)))

(defn get-filename [ed]
  (-> @ed :info :name))

(defui adoc-skeleton [this]
  [:div {:class "adoc"}
   [:h1 "Asciidoc content coming here"]])

(object/object* ::asciilight
                :tags [:asciilight]
                :name "markdown"
                :behaviors [::on-close-destroy]
                :init (fn [this filename]
                        (object/update! this [:name] (constantly (str filename " - Live")))
                        (adoc-skeleton this)))

(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))

(behavior ::read-editor
          :triggers [:change ::read-editor]
          :desc "AsciiLight: Read the content inside an editor"
          :reaction (fn [this]
                      (let [adoc-obj (:adoc @this)]
                        (setAdocHTML! this adoc-obj))))

(cmd/command {:command ::watch-editor
              :desc "AsciiLight: Watch this editor for changes"
              :exec (fn []
                      (let [ed (pool/last-active)
                            filename (get-filename ed)
                            adoc-obj (object/create ::asciilight filename)]
                        (tabs/add-or-focus! adoc-obj)
                        (object/update! ed [:adoc] (fn [] adoc-obj))
                        (object/add-behavior! ed ::read-editor)
                        (object/raise ed ::read-editor)))})
