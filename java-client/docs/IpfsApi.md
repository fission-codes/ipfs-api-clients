# IpfsApi

All URIs are relative to *https://hostless.dev*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ipfsPeersGet**](IpfsApi.md#ipfsPeersGet) | **GET** /ipfs/peers | 
[**ipfsPost**](IpfsApi.md#ipfsPost) | **POST** /ipfs | 


<a name="ipfsPeersGet"></a>
# **ipfsPeersGet**
> List&lt;String&gt; ipfsPeersGet()



### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.IpfsApi;


IpfsApi apiInstance = new IpfsApi();
try {
    List<String> result = apiInstance.ipfsPeersGet();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling IpfsApi#ipfsPeersGet");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**List&lt;String&gt;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=utf-8

<a name="ipfsPost"></a>
# **ipfsPost**
> String ipfsPost(file)



### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.IpfsApi;


IpfsApi apiInstance = new IpfsApi();
String file = "file_example"; // String | A file to upload (may also be multipart/form-data)
try {
    String result = apiInstance.ipfsPost(file);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling IpfsApi#ipfsPost");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **String**| A file to upload (may also be multipart/form-data) |

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream, text/plain;charset=utf-8

