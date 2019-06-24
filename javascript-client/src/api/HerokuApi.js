/**
 * FISSION's IPFS API
 * Easily use IPFS from Web 2.0 applications
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@fission.codes
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/HerokuProvision', 'model/ProvisionRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/HerokuProvision'), require('../model/ProvisionRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.FissionsIpfsApi) {
      root.FissionsIpfsApi = {};
    }
    root.FissionsIpfsApi.HerokuApi = factory(root.FissionsIpfsApi.ApiClient, root.FissionsIpfsApi.HerokuProvision, root.FissionsIpfsApi.ProvisionRequest);
  }
}(this, function(ApiClient, HerokuProvision, ProvisionRequest) {
  'use strict';

  /**
   * Heroku service.
   * @module api/HerokuApi
   * @version 1.0.0
   */

  /**
   * Constructs a new HerokuApi. 
   * @alias module:api/HerokuApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the herokuResourcesPost operation.
     * @callback module:api/HerokuApi~herokuResourcesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HerokuProvision} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/ProvisionRequest} body 
     * @param {module:api/HerokuApi~herokuResourcesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HerokuProvision}
     */
    this.herokuResourcesPost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling herokuResourcesPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/vnd.heroku-addons+json;version=3'];
      var returnType = HerokuProvision;

      return this.apiClient.callApi(
        '/heroku/resources', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));