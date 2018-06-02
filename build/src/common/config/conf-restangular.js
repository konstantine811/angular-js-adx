/**
 * Base Hosts
 **/

var hosts = {
  prod: {
    schema:   'https',
    host:     'app.ixlayer.com'
  },
  stage: {
    schema:   'https',
    host:     'stage.ixlayer.com'
  },
  dev: {
    schema:   'https',
    host:     'dev.ixlayer.com'
  },
  local: {
    schema:   'http',
    host:     'localhost:8000'
  }
};

/** Select the base host to be used **/
var currentHost = hosts.stage;

var restAPIBaseUrl = currentHost.schema + '://' + currentHost.host + '/api';


angular.module( 'ixlayer.config.restangular', [
  'restangular',
  'ui.router',
  'ixlayer.errorhandling'
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

  }])

  .run( ['userAccessSrv', 'Restangular', 'errorHandler', "$log", '$state', '$timeout', function (userAccess, Restangular, errorHandler, $log, $state, $timeout) {

    var goLoginPage = function(){
      userAccess.cleanUser();
      $log.debug("Go Login!");
      $state.go('master.login');
    };

    Restangular.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
      // Let's renew the token on every successfully performed request -> make sure the token will be expired only after a certain amount of *inactive* time.
      // So if the user makes any activity (do some network request, let's renew the valid token
      if (userAccess.isAuthenticated()) {
        userAccess.renewTokenIfNeeded();
      }

      return data;
    });

  }]);

