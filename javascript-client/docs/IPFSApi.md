# FissionsIpfsApi.IPFSApi

All URIs are relative to *https://hostless.dev*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ipfsPeersGet**](IPFSApi.md#ipfsPeersGet) | **GET** /ipfs/peers | 
[**ipfsPost**](IPFSApi.md#ipfsPost) | **POST** /ipfs | 


<a name="ipfsPeersGet"></a>
# **ipfsPeersGet**
> [IPFSPeer] ipfsPeersGet()



### Example
```javascript
var FissionsIpfsApi = require('fissions_ipfs_api');

var apiInstance = new FissionsIpfsApi.IPFSApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ipfsPeersGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[IPFSPeer]**](IPFSPeer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=utf-8

<a name="ipfsPost"></a>
# **ipfsPost**
> IPFSAddress ipfsPost(file)



### Example
```javascript
var FissionsIpfsApi = require('fissions_ipfs_api');

var apiInstance = new FissionsIpfsApi.IPFSApi();

var file = "file_example"; // String | A file to upload (may also be multipart/form-data)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ipfsPost(file, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **String**| A file to upload (may also be multipart/form-data) | 

### Return type

[**IPFSAddress**](IPFSAddress.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream, text/plain;charset=utf-8

