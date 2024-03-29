{-
   FISSION
   Easily use IPFS from Web 2.0 applications

   OpenAPI spec version: 1.0.0
   Contact: support@fission.codes

   NOTE: This file is auto generated by the swagger code generator program.
   https://github.com/swagger-api/swagger-codegen.git
   Do not edit this file manually.
-}


module Data.Pong exposing (Pong, pongDecoder, pongEncoder)

import Json.Decode as Decode exposing (Decoder)
import Json.Decode.Pipeline exposing (decode, optional, required)
import Json.Encode as Encode
import Maybe exposing (map, withDefault)


{-
   A simple response
-}


type alias Pong
    = String


pongDecoder : Decoder Pong
pongDecoder =
    Decode.string


pongEncoder : Pong -> Encode.Value
pongEncoder =
    Encode.string
