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
  (:require-macros [lt.macros :refer [defui behavior background]]))


(def plugin-dir (plugins/find-plugin "AsciiLight"))
(def css-path (files/join plugin-dir "css/asciidoctor.css"))
(def style (:content (files/open-sync css-path)))
(def adoc-path (files/join plugin-dir "node_modules/adoc.js"))


(def adoc->html (background (fn [obj-id {:keys [node-path base-dir content]}]
                              (let [adoc (js/require node-path)
                                    res (-> (.convert adoc content base-dir)
                                            (clojure.string/replace #"img src=\"*\"" (str "img src=\"" base-dir "/")))]
                                (js/_send obj-id :asciidoc-res res)))))

(defn get-filename [ed]
  (-> @ed :info :name))

(defui adoc-skeleton [this]
  [:div {:class "adoc"}
   [:h1 "Asciidoc content coming here..."]])

(object/object* ::asciilight
                :tags [:asciilight]
                :name "asciilight"
                :behaviors [::on-close-destroy ::on-adoc-result]
                :init (fn [this filename]
                        (object/update! this [:name] (constantly (str filename " - Live")))
                        (adoc-skeleton this)))

(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (when-let [ed (:owner-ed @this)]
                        (object/assoc-in! ed [:adoc] nil))
                      (object/raise this :destroy)))

(behavior ::on-adoc-result
          :triggers #{:asciidoc-res}
          :reaction (fn [this html]
                      (let [container (object/->content this)]
                        (set! (.-innerHTML container) (clojure.string/replace html #"class=\"content\"" "class=\"adoc-content\""))
                        (doseq [block (dom/$$ "pre code" container)]
                          (.highlightBlock js/hljs block)))))

(behavior ::read-editor
          :triggers [:change ::read-editor]
          :throttle 200
          :desc "AsciiLight: Read the content inside an editor and trigger adoc conversion"
          :reaction (fn [this]
                      (when-let [adoc-obj (:adoc @this)]
                        (adoc->html adoc-obj {:node-path adoc-path
                                              :base-dir (files/parent (-> @this :info :path))
                                              :content (.getValue (editor/->cm-ed this))}))))

(cmd/command {:command ::watch-editor
              :desc "AsciiLight: Watch this editor for changes"
              :exec (fn []
                      (let [ed (pool/last-active)
                            filename (get-filename ed)
                            adoc-obj (or (:adoc @ed) (object/create ::asciilight filename))]
                        (tabs/add-or-focus! adoc-obj)
                        (object/assoc-in! ed [:adoc] adoc-obj)
                        (object/assoc-in! adoc-obj [:owner-ed] ed)
                        (object/add-behavior! ed ::read-editor)
                        (object/raise ed ::read-editor)))})
