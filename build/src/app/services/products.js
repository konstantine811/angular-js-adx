

angular.module('ixlayer.api.products', [
  'ixlayer.endpoints'
])

  .factory('productsService', [
    'productsResource', 'productStatusResource', '$q',
    function (productResource, productStatusResource,  $q) {
      var productsList = null;
      var statusList = null;

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

      var getProductsStatus = function() {
        // cache products
        if (statusList) {
          return $q.when(statusList);
        } else {
          return productStatusResource.service.getList({page_size: 'max'}).then( function(result) {
            statusList = result.plain();
            return statusList;
          });
        }
      };

      var getProductStatus = function(productId) {
        return getProductsStatus().then(function(statuses) {
          return statuses.find(function(status) {
            return status.product_id === productId;
          });
        });
      };

      return {
        getProducts: getProducts,
        getProduct: getProduct,
        getProductsStatus: getProductsStatus,
        getProductStatus: getProductStatus
      };

    }]);
