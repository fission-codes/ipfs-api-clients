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

import io.swagger.client.models.Region
import io.swagger.client.models.Tier

/**
 * Request from Heroku to provision a new user
 * @param callbackUrl 
 * @param name 
 * @param plan 
 * @param region 
 * @param uuid 
 */
data class ProvisionRequest (
    val callbackUrl: kotlin.String,
    val name: kotlin.String,
    val plan: Tier,
    val region: Region,
    val uuid: java.util.UUID
) {

}

