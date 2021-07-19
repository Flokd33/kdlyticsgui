(defproject jasminegui "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.10.3"]
                 [org.clojure/clojurescript "1.10.866"
                  :exclusions [com.google.javascript/closure-compiler-unshaded
                               org.clojure/google-closure-library]]
                 [thheller/shadow-cljs "2.11.15"]
                 [reagent "1.1.0"]                         ;was 0.10.0
                 [re-frame "1.2.0"]                        ;was 0.12.0
                 [re-com "2.13.2"]                           ;was 2.8.0
                 [cljs-http "0.1.46"]
                 [re-pressed "0.3.1"]
                 [org.clojars.frozenlock/reagent-contextmenu "0.4.3"]
                 [metasoarous/oz "1.6.0-alpha34"]           ;was alpha6
                 [lilactown/helix "0.1.1"]
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
                   ;[day8.re-frame/re-frame-10x "1.0.2"]
                   ]}

   :prod { }
   })
