angular.module('ixlayer.api.results', [
  'ixlayer.endpoints'
])

  .factory('resultsService', ['resultsResource', 'productStatusResource', '$q',
    function (resultsResource, productStatusResource, $q) {
      var results = null;

      var getResults = function(id) {
        if(results) {
          return $q.when(results);
        } else {
          return resultsResource.service.getList({product: id}).then(function(result) {
            var results = result.plain();
            return results;
          });
        }
      };

      var postConsentProduct = function(productId) {
        productStatusResource.service.all().one(productId + '/consent_to_product/')
          .withHttpConfig({transformRequest: angular.identity})
          .customPOST(undefined, undefined, undefined, {'Content-Type': undefined});
      };

      return {
        postConsentProduct: postConsentProduct,
        getResults: getResults
      };

    }]);
