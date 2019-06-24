{-
   FISSION
   Easily use IPFS from Web 2.0 applications

   OpenAPI spec version: 1.0.0
   Contact: support@fission.codes

   NOTE: This file is auto generated by the swagger code generator program.
   https://github.com/swagger-api/swagger-codegen.git
   Do not edit this file manually.
-}


module Data.Secret exposing (Secret, secretDecoder, secretEncoder)

import Json.Decode as Decode exposing (Decoder)
import Json.Decode.Pipeline exposing (decode, optional, required)
import Json.Encode as Encode
import Maybe exposing (map, withDefault)




type alias Secret
    = String


secretDecoder : Decoder Secret
secretDecoder =
    Decode.string


secretEncoder : Secret -> Encode.Value
secretEncoder =
    Encode.string