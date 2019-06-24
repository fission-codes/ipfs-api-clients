# swagger_client.HerokuApi

All URIs are relative to *https://hostless.dev*

Method | HTTP request | Description
------------- | ------------- | -------------
[**heroku_resources_post**](HerokuApi.md#heroku_resources_post) | **POST** /heroku/resources | 


# **heroku_resources_post**
> HerokuProvision heroku_resources_post(body)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.HerokuApi()
body = swagger_client.ProvisionRequest() # ProvisionRequest | 

try:
    api_response = api_instance.heroku_resources_post(body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling HerokuApi->heroku_resources_post: %s\n" % e)
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

