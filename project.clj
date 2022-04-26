(defproject jasminegui "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.11.0"]
                 [org.clojure/clojurescript "1.11.4"
                  :exclusions [com.google.javascript/closure-compiler-unshaded
                               org.clojure/google-closure-library]]
                 [thheller/shadow-cljs "2.17.8"]
                 [reagent "1.1.1"]
                 [re-frame "1.2.0"]
                 [re-com "2.13.2"]
                 [cljs-http "0.1.46"]
                 [re-pressed "0.3.1"]
                 [org.clojars.frozenlock/reagent-contextmenu "0.4.3"]
                 [metasoarous/oz "1.6.0-alpha34"]
                 [lilactown/helix "0.1.5"]
                 [binaryage/devtools "1.0.5"]
                 [day8.re-frame/tracing      "0.6.2"]
                 [day8.re-frame/re-frame-10x "1.2.6"]
                 ]

  :plugins []

  :min-lein-version "2.5.3"

  :source-paths ["src/clj" "src/cljs"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]


  :aliases {"dev"  ["with-profile" "dev" "run" "-m" "shadow.cljs.devtools.cli" "watch" "app"]
            "prod" ["with-profile" "prod" "run" "-m" "shadow.cljs.devtools.cli" "release" "app"]}

  :profiles
  {:dev
   {:dependencies [                                         ;[binaryage/devtools "1.0.3"]
                   ;[day8.re-frame/tracing      "0.6.2"]
                   ;[day8.re-frame/re-frame-10x "1.2.2"]
                   ]}

   :prod { }
   })
