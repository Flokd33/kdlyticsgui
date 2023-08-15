(defproject kdlyticsgui "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [org.clojure/clojurescript "1.11.60"
                  :exclusions [com.google.javascript/closure-compiler-unshaded
                               org.clojure/google-closure-library]]
                 [thheller/shadow-cljs "2.25.0"]
                 [reagent "1.2.0"]
                 [re-frame "1.3.0"]
                 [re-com "2.13.2"]
                 [cljs-http "0.1.46"]
                 [re-pressed "0.3.2"]
                 [cljs-drag-n-drop/cljs-drag-n-drop "0.1.0"]
                 [org.clojars.frozenlock/reagent-contextmenu "0.4.3"]
                 [lilactown/helix "0.1.9"]
                 [binaryage/devtools "1.0.6"]
                 ]

  ;npm i react react-dom
  ;npm ad react
  ;mpm install react-dom

  ;add in html head the bootstrap href (see comment in re-com.css)

  ;https://www.material-react-table.com/docs/getting-started/install
  ;npm install material-react-table @mui/material @mui/icons-material @emotion/react @emotion/styled

  :plugins []
  :min-lein-version "2.5.3"
  :source-paths ["src/clj" "src/cljs"]
  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]
  :aliases {"dev"  ["with-profile" "dev" "run" "-m" "shadow.cljs.devtools.cli" "watch" "app"]
            "prod" ["with-profile" "prod" "run" "-m" "shadow.cljs.devtools.cli" "release" "app"]}
  :profiles {:dev {:dependencies []} :prod {}})
