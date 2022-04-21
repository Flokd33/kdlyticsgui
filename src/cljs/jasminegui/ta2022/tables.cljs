(ns jasminegui.ta2022.tables)

(def strategy-choices [
                       {:id "Growth risk on"          :label "Growth risk on"         :group "Top down"             :shortcut "TD growth"}
                       {:id "Duration risk on"        :label "Duration risk on"       :group "Top down"             :shortcut "TD duration"}
                       {:id "Risk off"                :label "Risk off"               :group "Top down"             :shortcut "TD risk off"}
                       {:id "Long end technical bid"  :label "Long end technical bid" :group "Top down"             :shortcut "TD lifers"}
                       {:id "Momentum"                :label "Momentum"               :group "Bottom up"            :shortcut "BU momentum"}
                       {:id "Value high conviction"   :label "Value high conviction"  :group "Bottom up"            :shortcut "BU HC"}
                       {:id "Value relative"          :label "Value relative"         :group "Bottom up"            :shortcut "BU relval"}
                       {:id "Value low conviction"    :label "Value low conviction"   :group "Bottom up"            :shortcut "BU LC"}
                       {:id "Market perform"          :label "Market perform"         :group "Market perform"       :shortcut "MP"}
                       {:id "Cash proxy"              :label "Cash proxy"             :group "Available for sale"   :shortcut "FS cash"}
                       {:id "Keen to sell"            :label "Keen to sell"           :group "Available for sale"   :shortcut "FS keen"}
                       {:id "Active exit"             :label "Active exit"            :group "Available for sale"   :shortcut "FS exit"}
                       {:id "Hedging"                 :label "Hedging"                :group "Other"                :shortcut "Oth hedge"}
                       {:id "Event driven"            :label "Event driven"           :group "Other"                :shortcut "Oth event"}
                       ])

(def strategy->shortcut (into {} (for [line strategy-choices] [(:id line) (:shortcut line)])))