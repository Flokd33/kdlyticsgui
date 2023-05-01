(ns kdlyticsgui.static)

(def server-address ({:prod "http://xxxxxxxx:3501/"
                      :dev "http://localhost:3501/"} :dev))

(def main-navigation
  (let [home-events [:get-qt-date]]
  [{:code :home        :name "Section 1"          :dispatch :home             :subs nil :load-events home-events :mounting-modal true}
   ]))


(def risk-navigation
  [{:code :summary                :name "View 1"}
   {:code :view2                :name "View 2"}

   ])

