# PingApi

All URIs are relative to *https://hostless.dev*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pingGet**](PingApi.md#pingGet) | **GET** /ping | 


<a name="pingGet"></a>
# **pingGet**
> String pingGet()



### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.PingApi;


PingApi apiInstance = new PingApi();
try {
    String result = apiInstance.pingGet();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling PingApi#pingGet");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=utf-8, text/plain;charset=utf-8

