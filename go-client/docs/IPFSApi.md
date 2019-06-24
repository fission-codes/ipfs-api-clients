# \IPFSApi

All URIs are relative to *https://hostless.dev*

Method | HTTP request | Description
------------- | ------------- | -------------
[**IpfsPeersGet**](IPFSApi.md#IpfsPeersGet) | **Get** /ipfs/peers | 
[**IpfsPost**](IPFSApi.md#IpfsPost) | **Post** /ipfs | 


# **IpfsPeersGet**
> []IpfsPeer IpfsPeersGet(ctx, )


### Required Parameters
This endpoint does not need any parameter.

### Return type

[**[]IpfsPeer**](IPFSPeer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=utf-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **IpfsPost**
> IpfsAddress IpfsPost(ctx, file)


### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **file** | **string**| A file to upload (may also be multipart/form-data) | 

### Return type

[**IpfsAddress**](IPFSAddress.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream, text/plain;charset=utf-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

