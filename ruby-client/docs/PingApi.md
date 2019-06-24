# SwaggerClient::PingApi

All URIs are relative to *https://hostless.dev*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ping_get**](PingApi.md#ping_get) | **GET** /ping | 


# **ping_get**
> Pong ping_get



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::PingApi.new

begin
  result = api_instance.ping_get
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling PingApi->ping_get: #{e}"
end
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Pong**](Pong.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=utf-8, text/plain;charset=utf-8



