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

  ;https://vincentgarreau.com/particles.js/#default
  ;https://codepen.io/VincentGarreau/pen/bGxvQd
  ;https://shekhar-gupta.medium.com/how-to-use-particles-js-and-create-particle-animation-fa3e99187292#:~:text=Start%20by%20including%20the%20HTML,DIV%20element%20with%20id%20particle.&text=Once%20the%20script%20is%20added,event%20to%20load%20our%20particles.
  ;https://vincentgarreau.com/particles.js/
  ;TODO https://stackoverflow.com/questions/45101039/particles-js-as-a-background-for-only-a-specific-section

  ;https://colorffy.com/dark-theme-generator
  ;For Icons setting (used in MRT Table Toolbar) => node_modules\@mui\material\node\SvgIcon\SvgIcon.js
  ;For page number (TablePaginationSelect) and TablePaginationRoot => node_modules\@mui\material\node\TablePagination\TablePagination.js
  ;For MRT Table hover (need hover  to true ?)  => node_modules\@mui\material\node\TableRow\TableRow.js for hover color etc BUT also need to change bootstrap CSS ? NOt TableCell, could be MRT ?
  ;Issue is not with the hover but something else lol
  :plugins []
  :min-lein-version "2.5.3"
  :source-paths ["src/clj" "src/cljs"]
  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]
  :aliases {"dev"  ["with-profile" "dev" "run" "-m" "shadow.cljs.devtools.cli" "watch" "app"]
            "prod" ["with-profile" "prod" "run" "-m" "shadow.cljs.devtools.cli" "release" "app"]}
  :profiles {:dev {:dependencies []} :prod {}})
