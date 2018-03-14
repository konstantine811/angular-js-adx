

angular.module('ixlayer.api.products', [
  'ixlayer.endpoints'
])

.factory('productsService', [
  'productsResource', 'productStatusResource', 'URL_PRODUCTSTATUS', '$q',
  function (productResource, productStatusResource, URL_PRODUCTSTATUS, $q) {
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

  return {
    getProducts: getProducts,
    getProduct: getProduct
  };

}]);
