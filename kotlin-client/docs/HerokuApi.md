# HerokuApi

All URIs are relative to *https://hostless.dev*

Method | HTTP request | Description
------------- | ------------- | -------------
[**herokuResourcesPost**](HerokuApi.md#herokuResourcesPost) | **POST** /heroku/resources | 


<a name="herokuResourcesPost"></a>
# **herokuResourcesPost**
> HerokuProvision herokuResourcesPost(body)



### Example
```kotlin
// Import classes:
//import io.swagger.client.infrastructure.*
//import io.swagger.client.models.*

val apiInstance = HerokuApi()
val body : ProvisionRequest =  // ProvisionRequest | 
try {
    val result : HerokuProvision = apiInstance.herokuResourcesPost(body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling HerokuApi#herokuResourcesPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling HerokuApi#herokuResourcesPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProvisionRequest**](ProvisionRequest.md)|  |

### Return type

[**HerokuProvision**](HerokuProvision.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/vnd.heroku-addons+json;version=3

