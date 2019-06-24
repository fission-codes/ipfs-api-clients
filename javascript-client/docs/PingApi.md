# FissionsIpfsApi.PingApi

All URIs are relative to *https://hostless.dev*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pingGet**](PingApi.md#pingGet) | **GET** /ping | 


<a name="pingGet"></a>
# **pingGet**
> Pong pingGet()



### Example
```javascript
var FissionsIpfsApi = require('fissions_ipfs_api');

var apiInstance = new FissionsIpfsApi.PingApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.pingGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Pong**](Pong.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=utf-8, text/plain;charset=utf-8

