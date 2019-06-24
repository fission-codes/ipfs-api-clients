# HerokuApi

All URIs are relative to *https://hostless.dev*

Method | HTTP request | Description
------------- | ------------- | -------------
[**herokuResourcesPost**](HerokuApi.md#herokuResourcesPost) | **POST** /heroku/resources | 


<a name="herokuResourcesPost"></a>
# **herokuResourcesPost**
> HerokuProvision herokuResourcesPost(body)



### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.HerokuApi;


HerokuApi apiInstance = new HerokuApi();
ProvisionRequest body = new ProvisionRequest(); // ProvisionRequest | 
try {
    HerokuProvision result = apiInstance.herokuResourcesPost(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling HerokuApi#herokuResourcesPost");
    e.printStackTrace();
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

