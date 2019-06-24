(ns fission.api.ping
  (:require [fission.core :refer [call-api check-required-params with-collection-format]])
  (:import (java.io File)))

(defn ping-get-with-http-info
  ""
  []
  (call-api "/ping" :get
            {:path-params   {}
             :header-params {}
             :query-params  {}
             :form-params   {}
             :content-types []
             :accepts       ["application/json;charset=utf-8" "text/plain;charset=utf-8"]
             :auth-names    []}))

(defn ping-get
  ""
  []
  (:data (ping-get-with-http-info)))

