# IPFSApi

All URIs are relative to *https://hostless.dev*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ipfsPeersGet**](IPFSApi.md#ipfsPeersGet) | **GET** /ipfs/peers | 
[**ipfsPost**](IPFSApi.md#ipfsPost) | **POST** /ipfs | 


<a name="ipfsPeersGet"></a>
# **ipfsPeersGet**
> kotlin.Array&lt;IPFSPeer&gt; ipfsPeersGet()



### Example
```kotlin
// Import classes:
//import io.swagger.client.infrastructure.*
//import io.swagger.client.models.*

val apiInstance = IPFSApi()
try {
    val result : kotlin.Array<IPFSPeer> = apiInstance.ipfsPeersGet()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling IPFSApi#ipfsPeersGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling IPFSApi#ipfsPeersGet")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**kotlin.Array&lt;IPFSPeer&gt;**](IPFSPeer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=utf-8

<a name="ipfsPost"></a>
# **ipfsPost**
> IPFSAddress ipfsPost(file)



### Example
```kotlin
// Import classes:
//import io.swagger.client.infrastructure.*
//import io.swagger.client.models.*

val apiInstance = IPFSApi()
val file : kotlin.String = file_example // kotlin.String | A file to upload (may also be multipart/form-data)
try {
    val result : IPFSAddress = apiInstance.ipfsPost(file)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling IPFSApi#ipfsPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling IPFSApi#ipfsPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **kotlin.String**| A file to upload (may also be multipart/form-data) |

### Return type

[**IPFSAddress**](IPFSAddress.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream, text/plain;charset=utf-8

