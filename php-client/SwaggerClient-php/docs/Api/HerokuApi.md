# Swagger\Client\HerokuApi

All URIs are relative to *https://hostless.dev*

Method | HTTP request | Description
------------- | ------------- | -------------
[**herokuResourcesPost**](HerokuApi.md#herokuResourcesPost) | **POST** /heroku/resources | 


# **herokuResourcesPost**
> \Swagger\Client\Model\HerokuProvision herokuResourcesPost($body)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\HerokuApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \Swagger\Client\Model\ProvisionRequest(); // \Swagger\Client\Model\ProvisionRequest | 

try {
    $result = $apiInstance->herokuResourcesPost($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HerokuApi->herokuResourcesPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\ProvisionRequest**](../Model/ProvisionRequest.md)|  |

### Return type

[**\Swagger\Client\Model\HerokuProvision**](../Model/HerokuProvision.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/vnd.heroku-addons+json;version=3

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

