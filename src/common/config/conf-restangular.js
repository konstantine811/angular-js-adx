/**
 * Base Hosts
 **/

var hosts = {
  prod: {
    schema:   'https',
    host:     'app.ixlayer.com'
  },
  dev: {
    schema:   'https',
    host:     'prod.ixlayer.com'
  },
  local: {
    schema:   'http',
    host:     'localhost:8000'
  }
};

/** Select the base host to be used **/
var currentHost = hosts.dev;

var restAPIBaseUrl = currentHost.schema + '://' + currentHost.host + '/api';


angular.module( 'ixlayer.config.restangular', [
  'restangular',
  'ui.router',
])

  .config(['RestangularProvider', '$httpProvider', function(RestangularProvider, $httpProvider) {
    RestangularProvider.setBaseUrl(restAPIBaseUrl);
    RestangularProvider.setRequestSuffix('/');

    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

    RestangularProvider.setDefaultHttpFields({
      cache: false
    })

    //To get the embedded list from the response object. Wirthout it an error occurs (Response for getList SHOULD be an array and not an object or something else)
    .addResponseInterceptor(function(response, operation) {

      if (operation === 'getList') {

        var newResponse = null;
        newResponse = response.results || [];
        newResponse.next = response.next || null;
        newResponse.count =  angular.isUndefined(response.count) ? null : response.count;
        newResponse.previous =  response.previous || null;
        return newResponse;
      }
      return response;
    });

  }]);
