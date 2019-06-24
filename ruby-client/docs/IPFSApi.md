# SwaggerClient::IPFSApi

All URIs are relative to *https://hostless.dev*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ipfs_peers_get**](IPFSApi.md#ipfs_peers_get) | **GET** /ipfs/peers | 
[**ipfs_post**](IPFSApi.md#ipfs_post) | **POST** /ipfs | 


# **ipfs_peers_get**
> Array&lt;IPFSPeer&gt; ipfs_peers_get



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::IPFSApi.new

begin
  result = api_instance.ipfs_peers_get
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling IPFSApi->ipfs_peers_get: #{e}"
end
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Array&lt;IPFSPeer&gt;**](IPFSPeer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=utf-8



# **ipfs_post**
> IPFSAddress ipfs_post(file)



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::IPFSApi.new

file = 'file_example' # String | A file to upload (may also be multipart/form-data)


begin
  result = api_instance.ipfs_post(file)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling IPFSApi->ipfs_post: #{e}"
end
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



