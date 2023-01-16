(defproject jasminegui "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [org.clojure/clojurescript "1.11.60"
                  :exclusions [com.google.javascript/closure-compiler-unshaded
                               org.clojure/google-closure-library]]
                 [thheller/shadow-cljs "2.18.0"]
                 [reagent "1.1.1"]
                 [re-frame "1.3.0"]
                 [re-com "2.13.2"]
                 [cljs-http "0.1.46"]
                 [re-pressed "0.3.2"]
                 [cljs-drag-n-drop/cljs-drag-n-drop "0.1.0"]
                 [org.clojars.frozenlock/reagent-contextmenu "0.4.3"]
                 [metasoarous/oz "2.0.0-alpha5"]           ;"1.6.0-alpha34"
                 [lilactown/helix "0.1.9"]
                 [binaryage/devtools "1.0.6"]
                 [day8.re-frame/tracing      "0.6.2"]
                 [day8.re-frame/re-frame-10x "1.5.0"]
                 ;[markdown-clj "1.11.4"]
                 ]

  :plugins []

  :min-lein-version "2.5.3"

  :source-paths ["src/clj" "src/cljs"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]


  :aliases {"dev"  ["with-profile" "dev" "run" "-m" "shadow.cljs.devtools.cli" "watch" "app"]
            "prod" ["with-profile" "prod" "run" "-m" "shadow.cljs.devtools.cli" "release" "app"]}

  :profiles {:dev {:dependencies []} :prod {}})
