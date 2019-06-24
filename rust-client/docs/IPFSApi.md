# \IPFSApi

All URIs are relative to *https://hostless.dev*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ipfs_peers_get**](IPFSApi.md#ipfs_peers_get) | **Get** /ipfs/peers | 
[**ipfs_post**](IPFSApi.md#ipfs_post) | **Post** /ipfs | 


# **ipfs_peers_get**
> Vec<::models::IpfsPeer> ipfs_peers_get()


### Required Parameters
This endpoint does not need any parameter.

### Return type

[**Vec<::models::IpfsPeer>**](IPFSPeer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=utf-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ipfs_post**
> ::models::IpfsAddress ipfs_post(file)


### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
  **file** | **String**| A file to upload (may also be multipart/form-data) | 

### Return type

[**::models::IpfsAddress**](IPFSAddress.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream, text/plain;charset=utf-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

