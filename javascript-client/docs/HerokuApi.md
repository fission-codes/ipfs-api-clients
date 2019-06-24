# FissionsIpfsApi.HerokuApi

All URIs are relative to *https://hostless.dev*

Method | HTTP request | Description
------------- | ------------- | -------------
[**herokuResourcesPost**](HerokuApi.md#herokuResourcesPost) | **POST** /heroku/resources | 


<a name="herokuResourcesPost"></a>
# **herokuResourcesPost**
> HerokuProvision herokuResourcesPost(body)



### Example
```javascript
var FissionsIpfsApi = require('fissions_ipfs_api');

var apiInstance = new FissionsIpfsApi.HerokuApi();

var body = new FissionsIpfsApi.ProvisionRequest(); // ProvisionRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.herokuResourcesPost(body, callback);
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

