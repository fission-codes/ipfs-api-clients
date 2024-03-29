/**
* FISSION
* Easily use IPFS from Web 2.0 applications
*
* OpenAPI spec version: 1.0.0
* Contact: support@fission.codes
*
* NOTE: This class is auto generated by the swagger code generator program.
* https://github.com/swagger-api/swagger-codegen.git
* Do not edit the class manually.
*/
package io.swagger.client.models

import io.swagger.client.models.Secret

/**
 * 
 * @param INTERPLANETARY_FISSION_URL 
 * @param INTERPLANETARY_FISSION_USERNAME 
 * @param INTERPLANETARY_FISSION_PASSWORD 
 */
data class UserConfig (
    val INTERPLANETARY_FISSION_URL: kotlin.String,
    val INTERPLANETARY_FISSION_USERNAME: kotlin.String,
    val INTERPLANETARY_FISSION_PASSWORD: Secret
) {

}

