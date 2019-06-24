# IO.Swagger.Api.IPFSApi

All URIs are relative to *https://hostless.dev*

Method | HTTP request | Description
------------- | ------------- | -------------
[**IpfsPeersGet**](IPFSApi.md#ipfspeersget) | **GET** /ipfs/peers | 
[**IpfsPost**](IPFSApi.md#ipfspost) | **POST** /ipfs | 


<a name="ipfspeersget"></a>
# **IpfsPeersGet**
> List<IPFSPeer> IpfsPeersGet ()



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class IpfsPeersGetExample
    {
        public void main()
        {
            var apiInstance = new IPFSApi();

            try
            {
                List&lt;IPFSPeer&gt; result = apiInstance.IpfsPeersGet();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling IPFSApi.IpfsPeersGet: " + e.Message );
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List<IPFSPeer>**](IPFSPeer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=utf-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="ipfspost"></a>
# **IpfsPost**
> IPFSAddress IpfsPost (string file)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class IpfsPostExample
    {
        public void main()
        {
            var apiInstance = new IPFSApi();
            var file = file_example;  // string | A file to upload (may also be multipart/form-data)

            try
            {
                IPFSAddress result = apiInstance.IpfsPost(file);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling IPFSApi.IpfsPost: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **string**| A file to upload (may also be multipart/form-data) | 

### Return type

[**IPFSAddress**](IPFSAddress.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream, text/plain;charset=utf-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

