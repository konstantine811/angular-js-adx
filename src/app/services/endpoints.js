/**
 * This file specifies all the endpoints and resources
 */

function createResource(ServiceFactory, url) {
    return {
        service: ServiceFactory.createService(url)
    };
}

angular.module( 'ixlayer.endpoints', [
    'restangular'
])

/**
 * Factory to create Restangular services for a given route. Also extend the service with utility functions.
 **/
.factory('ServiceFactory', ['Restangular', function(Restangular){

  return {
    createService : function(route) {
      var service = Restangular.service(route);

      /** Hide Restangular extendModel **/
      service.extendModel = function(extenderFn) {
        Restangular.extendModel(route, extenderFn);
      };

      //In the RestAngular 1.5, the service has no all function: https://github.com/mgonto/restangular/issues/46
      service.all = function() {
        return Restangular.all(route);
      };

      service.uploadForm = function(uploadData) {

        var formData = new FormData();

        for (var key in uploadData) {
          if (uploadData.hasOwnProperty(key)) {
            formData.append(key, uploadData[key]);
          }
        }

        return service.one()
            .withHttpConfig({transformRequest: angular.identity})
            .customPOST(formData, undefined, undefined, { 'Content-Type': undefined });

      };

      return service;
    }
  };

}])

.constant('URL_PROFILE', '/profile')
.factory('profileResource',['ServiceFactory',   'URL_PROFILE', createResource])

.constant('URL_PRODUCT', '/helix/product')
.factory('productsResource',['ServiceFactory',   'URL_PRODUCT', createResource]);



