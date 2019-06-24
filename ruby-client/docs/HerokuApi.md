# SwaggerClient::HerokuApi

All URIs are relative to *https://hostless.dev*

Method | HTTP request | Description
------------- | ------------- | -------------
[**heroku_resources_post**](HerokuApi.md#heroku_resources_post) | **POST** /heroku/resources | 


# **heroku_resources_post**
> HerokuProvision heroku_resources_post(body)



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::HerokuApi.new

body = SwaggerClient::ProvisionRequest.new # ProvisionRequest | 


begin
  result = api_instance.heroku_resources_post(body)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling HerokuApi->heroku_resources_post: #{e}"
end
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



