# swagger_client.IPFSApi

All URIs are relative to *https://hostless.dev*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ipfs_peers_get**](IPFSApi.md#ipfs_peers_get) | **GET** /ipfs/peers | 
[**ipfs_post**](IPFSApi.md#ipfs_post) | **POST** /ipfs | 


# **ipfs_peers_get**
> list[IPFSPeer] ipfs_peers_get()



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.IPFSApi()

try:
    api_response = api_instance.ipfs_peers_get()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling IPFSApi->ipfs_peers_get: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**list[IPFSPeer]**](IPFSPeer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=utf-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ipfs_post**
> IPFSAddress ipfs_post(file)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.IPFSApi()
file = 'file_example' # str | A file to upload (may also be multipart/form-data)

try:
    api_response = api_instance.ipfs_post(file)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling IPFSApi->ipfs_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **str**| A file to upload (may also be multipart/form-data) | 

### Return type

[**IPFSAddress**](IPFSAddress.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream, text/plain;charset=utf-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

