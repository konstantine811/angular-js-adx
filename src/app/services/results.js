angular.module('ixlayer.api.results', [
  'ixlayer.endpoints'
])

  .factory('resultsService', ['productStatusResource', function ( productStatusResource) {


      var postConsentProduct = function(productId) {
        productStatusResource.service.all().one(productId + '/consent_to_product/')
          .withHttpConfig({transformRequest: angular.identity})
          .customPOST(undefined, undefined, undefined, {'Content-Type': undefined});
      };

      return {
        postConsentProduct: postConsentProduct
      };

    }]);
