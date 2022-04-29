(ns jasminegui.ta2022.tables)

(def strategy-choices [
                       {:id "Growth risk on"          :label "Growth risk on"         :group "Top down"             :shortcut "TD growth" :order 5}
                       {:id "Duration risk on"        :label "Duration risk on"       :group "Top down"             :shortcut "TD duration" :order 6}
                       {:id "Risk off"                :label "Risk off"               :group "Top down"             :shortcut "TD risk off" :order 7}
                       {:id "Long end technical bid"  :label "Long end technical bid" :group "Top down"             :shortcut "TD lifers" :order 8}
                       {:id "Momentum"                :label "Momentum"               :group "Bottom up"            :shortcut "BU momentum" :order 4}
                       {:id "Value high conviction"   :label "Value high conviction"  :group "Bottom up"            :shortcut "BU HC" :order 1}
                       {:id "Value relative"          :label "Value relative"         :group "Bottom up"            :shortcut "BU relval" :order 2}
                       {:id "Value low conviction"    :label "Value low conviction"   :group "Bottom up"            :shortcut "BU LC" :order 3}
                       {:id "Market perform"          :label "Market perform"         :group "Market perform"       :shortcut "MP" :order 11}
                       {:id "Cash proxy"              :label "Cash proxy"             :group "Available for sale"   :shortcut "FS cash" :order 12}
                       {:id "Keen to sell"            :label "Keen to sell"           :group "Available for sale"   :shortcut "FS keen" :order 13}
                       {:id "Active exit"             :label "Active exit"            :group "Available for sale"   :shortcut "FS exit" :order 14}
                       {:id "Hedging"                 :label "Hedging"                :group "Other"                :shortcut "Oth hedge" :order 9}
                       {:id "Event driven"            :label "Event driven"           :group "Other"                :shortcut "Oth event" :order 10}
                       ])

(def strategy->shortcut (into {} (for [line strategy-choices] [(:id line) (:shortcut line)])))

(def ordered-strategy-names (map :id (sort-by :order strategy-choices)))

(defn strategy-sort [data]
  (sort-by #(.indexOf ordered-strategy-names (:strategy %)) data))
