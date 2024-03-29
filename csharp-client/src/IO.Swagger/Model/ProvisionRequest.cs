/* 
 * FISSION
 *
 * Easily use IPFS from Web 2.0 applications
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@fission.codes
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using SwaggerDateConverter = IO.Swagger.Client.SwaggerDateConverter;

namespace IO.Swagger.Model
{
    /// <summary>
    /// Request from Heroku to provision a new user
    /// </summary>
    [DataContract]
    public partial class ProvisionRequest :  IEquatable<ProvisionRequest>, IValidatableObject
    {
        /// <summary>
        /// Gets or Sets Plan
        /// </summary>
        [DataMember(Name="plan", EmitDefaultValue=false)]
        public Tier Plan { get; set; }
        /// <summary>
        /// Gets or Sets Region
        /// </summary>
        [DataMember(Name="region", EmitDefaultValue=false)]
        public Region Region { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="ProvisionRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected ProvisionRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="ProvisionRequest" /> class.
        /// </summary>
        /// <param name="callbackUrl">callbackUrl (required).</param>
        /// <param name="name">name (required).</param>
        /// <param name="plan">plan (required).</param>
        /// <param name="region">region (required).</param>
        /// <param name="uuid">uuid (required).</param>
        public ProvisionRequest(string callbackUrl = default(string), string name = default(string), Tier plan = default(Tier), Region region = default(Region), Guid? uuid = default(Guid?))
        {
            // to ensure "callbackUrl" is required (not null)
            if (callbackUrl == null)
            {
                throw new InvalidDataException("callbackUrl is a required property for ProvisionRequest and cannot be null");
            }
            else
            {
                this.CallbackUrl = callbackUrl;
            }
            // to ensure "name" is required (not null)
            if (name == null)
            {
                throw new InvalidDataException("name is a required property for ProvisionRequest and cannot be null");
            }
            else
            {
                this.Name = name;
            }
            // to ensure "plan" is required (not null)
            if (plan == null)
            {
                throw new InvalidDataException("plan is a required property for ProvisionRequest and cannot be null");
            }
            else
            {
                this.Plan = plan;
            }
            // to ensure "region" is required (not null)
            if (region == null)
            {
                throw new InvalidDataException("region is a required property for ProvisionRequest and cannot be null");
            }
            else
            {
                this.Region = region;
            }
            // to ensure "uuid" is required (not null)
            if (uuid == null)
            {
                throw new InvalidDataException("uuid is a required property for ProvisionRequest and cannot be null");
            }
            else
            {
                this.Uuid = uuid;
            }
        }
        
        /// <summary>
        /// Gets or Sets CallbackUrl
        /// </summary>
        [DataMember(Name="callbackUrl", EmitDefaultValue=false)]
        public string CallbackUrl { get; set; }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name="name", EmitDefaultValue=false)]
        public string Name { get; set; }



        /// <summary>
        /// Gets or Sets Uuid
        /// </summary>
        [DataMember(Name="uuid", EmitDefaultValue=false)]
        public Guid? Uuid { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class ProvisionRequest {\n");
            sb.Append("  CallbackUrl: ").Append(CallbackUrl).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Plan: ").Append(Plan).Append("\n");
            sb.Append("  Region: ").Append(Region).Append("\n");
            sb.Append("  Uuid: ").Append(Uuid).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as ProvisionRequest);
        }

        /// <summary>
        /// Returns true if ProvisionRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of ProvisionRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ProvisionRequest input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.CallbackUrl == input.CallbackUrl ||
                    (this.CallbackUrl != null &&
                    this.CallbackUrl.Equals(input.CallbackUrl))
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.Plan == input.Plan ||
                    (this.Plan != null &&
                    this.Plan.Equals(input.Plan))
                ) && 
                (
                    this.Region == input.Region ||
                    (this.Region != null &&
                    this.Region.Equals(input.Region))
                ) && 
                (
                    this.Uuid == input.Uuid ||
                    (this.Uuid != null &&
                    this.Uuid.Equals(input.Uuid))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.CallbackUrl != null)
                    hashCode = hashCode * 59 + this.CallbackUrl.GetHashCode();
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.Plan != null)
                    hashCode = hashCode * 59 + this.Plan.GetHashCode();
                if (this.Region != null)
                    hashCode = hashCode * 59 + this.Region.GetHashCode();
                if (this.Uuid != null)
                    hashCode = hashCode * 59 + this.Uuid.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
