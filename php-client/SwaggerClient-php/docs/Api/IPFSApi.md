# Swagger\Client\IPFSApi

All URIs are relative to *https://hostless.dev*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ipfsPeersGet**](IPFSApi.md#ipfsPeersGet) | **GET** /ipfs/peers | 
[**ipfsPost**](IPFSApi.md#ipfsPost) | **POST** /ipfs | 


# **ipfsPeersGet**
> \Swagger\Client\Model\IPFSPeer[] ipfsPeersGet()



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\IPFSApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->ipfsPeersGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling IPFSApi->ipfsPeersGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**\Swagger\Client\Model\IPFSPeer[]**](../Model/IPFSPeer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=utf-8

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **ipfsPost**
> \Swagger\Client\Model\IPFSAddress ipfsPost($file)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\IPFSApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$file = "file_example"; // string | A file to upload (may also be multipart/form-data)

try {
    $result = $apiInstance->ipfsPost($file);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling IPFSApi->ipfsPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **string**| A file to upload (may also be multipart/form-data) |

### Return type

[**\Swagger\Client\Model\IPFSAddress**](../Model/IPFSAddress.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream, text/plain;charset=utf-8

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

