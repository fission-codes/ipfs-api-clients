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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.FissionsIpfsApi) {
      root.FissionsIpfsApi = {};
    }
    root.FissionsIpfsApi.Tier = factory(root.FissionsIpfsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class Tier.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "test"
     * @const
     */
    "test": "test",
    /**
     * value: "free"
     * @const
     */
    "free": "free"  };

  /**
   * Returns a <code>Tier</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/Tier} The enum <code>Tier</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


