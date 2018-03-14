angular.module('ixlayer.api.results', [
  'ixlayer.endpoints'
])

  .factory('resultsService', ['resultsResource', 'productStatusResource', function (resultsResource, productStatusResource) {

      var getResults = function(id) {
        resultsResource.service.one().get({product: id}).then(function(result) {
          console.log(result);

        });
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
