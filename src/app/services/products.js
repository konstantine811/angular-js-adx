

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

  var getProduct = function(id) {
     return getProducts().then(function() {
       return productsList.find(function(product) {
         return product.id === id;
       });
     }).then(function(result) {
       return result;
     });
  };


  return {
    getProducts: getProducts,
    getProduct: getProduct
  };

}]);
