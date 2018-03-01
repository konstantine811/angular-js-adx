

angular.module('ixlayer.api.products', [
  'ixlayer.endpoints'
])

.factory('productsService',['productsResource', '$q', function (productResource, $q) {
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

  return {
    getProducts: getProducts
  };

}]);
