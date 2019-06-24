# io.swagger.client - Kotlin client library for FISSION

## Requires

* Kotlin 1.1.2
* Gradle 3.3

## Build

First, create the gradle wrapper script:

```
gradle wrapper
```

Then, run:

```
./gradlew check assemble
```

This runs all tests and packages the library.

## Features/Implementation Notes

* Supports JSON inputs/outputs, File inputs, and Form inputs.
* Supports collection formats for query parameters: csv, tsv, ssv, pipes.
* Some Kotlin and Java types are fully qualified to avoid conflicts with types defined in Swagger definitions.
* Implementation of ApiClient is intended to reduce method counts, specifically to benefit Android targets.

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://hostless.dev*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*HerokuApi* | [**herokuResourcesPost**](docs/HerokuApi.md#herokuresourcespost) | **POST** /heroku/resources | 
*IPFSApi* | [**ipfsPeersGet**](docs/IPFSApi.md#ipfspeersget) | **GET** /ipfs/peers | 
*IPFSApi* | [**ipfsPost**](docs/IPFSApi.md#ipfspost) | **POST** /ipfs | 
*PingApi* | [**pingGet**](docs/PingApi.md#pingget) | **GET** /ping | 


<a name="documentation-for-models"></a>
## Documentation for Models

 - [io.swagger.client.models.HerokuProvision](docs/HerokuProvision.md)
 - [io.swagger.client.models.IPFSAddress](docs/IPFSAddress.md)
 - [io.swagger.client.models.IPFSPeer](docs/IPFSPeer.md)
 - [io.swagger.client.models.Pong](docs/Pong.md)
 - [io.swagger.client.models.ProvisionRequest](docs/ProvisionRequest.md)
 - [io.swagger.client.models.Region](docs/Region.md)
 - [io.swagger.client.models.Secret](docs/Secret.md)
 - [io.swagger.client.models.SerializedFile](docs/SerializedFile.md)
 - [io.swagger.client.models.Tier](docs/Tier.md)
 - [io.swagger.client.models.UserConfig](docs/UserConfig.md)
 - [io.swagger.client.models.UserID](docs/UserID.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="basic"></a>
### basic

- **Type**: HTTP basic authentication

