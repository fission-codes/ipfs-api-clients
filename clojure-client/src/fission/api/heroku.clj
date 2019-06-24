(ns fission.api.heroku
  (:require [fission.core :refer [call-api check-required-params with-collection-format]])
  (:import (java.io File)))

(defn heroku-resources-post-with-http-info
  ""
  [body ]
  (check-required-params body)
  (call-api "/heroku/resources" :post
            {:path-params   {}
             :header-params {}
             :query-params  {}
             :form-params   {}
             :body-param    body
             :content-types ["application/json;charset=utf-8"]
             :accepts       ["application/vnd.heroku-addons+json;version=3"]
             :auth-names    []}))

(defn heroku-resources-post
  ""
  [body ]
  (:data (heroku-resources-post-with-http-info body)))

