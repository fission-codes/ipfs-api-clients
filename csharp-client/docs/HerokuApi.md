# IO.Swagger.Api.HerokuApi

All URIs are relative to *https://hostless.dev*

Method | HTTP request | Description
------------- | ------------- | -------------
[**HerokuResourcesPost**](HerokuApi.md#herokuresourcespost) | **POST** /heroku/resources | 


<a name="herokuresourcespost"></a>
# **HerokuResourcesPost**
> HerokuProvision HerokuResourcesPost (ProvisionRequest body)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class HerokuResourcesPostExample
    {
        public void main()
        {
            var apiInstance = new HerokuApi();
            var body = new ProvisionRequest(); // ProvisionRequest | 

            try
            {
                HerokuProvision result = apiInstance.HerokuResourcesPost(body);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling HerokuApi.HerokuResourcesPost: " + e.Message );
            }
        }
    }
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

