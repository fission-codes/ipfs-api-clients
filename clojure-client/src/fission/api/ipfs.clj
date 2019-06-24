(ns fission.api.ipfs
  (:require [fission.core :refer [call-api check-required-params with-collection-format]])
  (:import (java.io File)))

(defn ipfs-peers-get-with-http-info
  ""
  []
  (call-api "/ipfs/peers" :get
            {:path-params   {}
             :header-params {}
             :query-params  {}
             :form-params   {}
             :content-types []
             :accepts       ["application/json;charset=utf-8"]
             :auth-names    []}))

(defn ipfs-peers-get
  ""
  []
  (:data (ipfs-peers-get-with-http-info)))

(defn ipfs-post-with-http-info
  ""
  [file ]
  (check-required-params file)
  (call-api "/ipfs" :post
            {:path-params   {}
             :header-params {}
             :query-params  {"file" file }
             :form-params   {}
             :content-types ["multipart/form-data"]
             :accepts       ["application/octet-stream" "text/plain;charset=utf-8"]
             :auth-names    []}))

(defn ipfs-post
  ""
  [file ]
  (:data (ipfs-post-with-http-info file)))

