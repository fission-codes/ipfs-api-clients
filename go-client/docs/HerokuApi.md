# \HerokuApi

All URIs are relative to *https://hostless.dev*

Method | HTTP request | Description
------------- | ------------- | -------------
[**HerokuResourcesPost**](HerokuApi.md#HerokuResourcesPost) | **Post** /heroku/resources | 


# **HerokuResourcesPost**
> HerokuProvision HerokuResourcesPost(ctx, body)


### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**ProvisionRequest**](ProvisionRequest.md)|  | 

### Return type

[**HerokuProvision**](HerokuProvision.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/vnd.heroku-addons+json;version=3

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

