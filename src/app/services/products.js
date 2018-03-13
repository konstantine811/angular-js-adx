

angular.module('ixlayer.api.products', [
  'ixlayer.endpoints'
])

.factory('productsService', ['productsResource', '$q', function (productResource, $q) {
  var productsList = null;


  var getProducts = function() {
    
    // cache products
    if (productsList) {
      return $q.when(productsList);
    } else {
      return productResource.service.getList({page_size: 'max'}).then( function(result) {
        productsList = result.plain();
        return productsList;
      });
    }
  };

  var getProduct = function(productId) {
    return getProducts().then(function(products) {
      return products.find(function(product) {
        return product.id === productId;
      });
    });
  };

  var postConsentProduct = function(productId) {
    productResource.service.all('api/product/' + productId + '/consent_to_product')
      .withHttpConfig({transformRequest: angular.identity})
      .customPOST(undefined, undefined, undefined, {'Content-Type': undefined});
  };

  return {
    getProducts: getProducts,
    getProduct: getProduct,
    postConsentProduct: postConsentProduct
  };

}]);
