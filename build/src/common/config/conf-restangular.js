
angular.module( 'ixlayer.config.restangular', [
  'restangular',
  'ui.router',
  'ixlayer.config',
  'ixlayer.errorhandling'
])

  .config(['RestangularProvider', '$httpProvider', 'appConfig', function(RestangularProvider, $httpProvider, appConfig) {
    RestangularProvider.setBaseUrl(appConfig.restAPIBaseUrl);
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

  .run( ['userAccessSrv', 'Restangular', 'errorHandler', "$log", '$state', '$timeout',
    function (userAccess, Restangular, errorHandler, $log, $state, $timeout) {

      var goLoginPage = function(){
        userAccess.cleanUser();
        $log.debug("Go Login!");
        $state.go('master.login');
      };

      var generalErrorHanding = function(response) {

        //Get error message if presented!
        $log.debug("Restangular error occurred", response);
        var errorMessage = null;
        if (response.data) {
          errorMessage = response.data.detail;
        }

        //403 & Missing Authentication credentials -> 401
        if (response.status == 403) {
          $log.debug("403 -> Treated as 401");
          errorMessage = null;
          response.status = 401;
        }

        if (response.status == -1) {
          $log.debug("Connection error!");
          errorHandler.showConnectionError();
          return;
        }
        else if (response.status == 400) {
          $log.debug("Bad request");
          errorMessage = errorMessage || "An error occurred. Please try later.";
        } else if (response.status == 401) {
          goLoginPage();
        }
        else if (response.status == 413) {
          errorMessage = errorMessage || "The selected file is too large.";
        }
        else if (response.status == 404) {
          $log.debug("Resource not available...");
          errorMessage = errorMessage || "Not available.";
          //goLoginPage();
        } else {
          errorMessage = errorMessage || "An error occurred. Please try later.";
          $log.debug("Response received with HTTP error code: " + response.status );
        }
        if(errorMessage) {
          errorHandler.showError(errorMessage);
        }
      };

      Restangular.addErrorInterceptor(
        function(response, deferred, responseHandler) {

          if (response.config.timeout && response.config.timeout.state === 'fulfilled') {
            //The request was cancelled by the client, no error handling at this case
            return;
          }

          var generalHandlerTimer = $timeout(function() {
            generalErrorHanding(response);
          });
          response.cancelGeneralHandler = function() {
            $timeout.cancel(generalHandlerTimer);
          };
          return true; // continue the promise chain
        }
      );

      Restangular.addErrorInterceptor(
        function(response, deferred, responseHandler) {
          if (response.status === 403 && response.data === 'Unauthorized IP') {
            //Cancel the standard error handling
            response.cancelGeneralHandler();

            //Go to the No Permission page
            $state.transitionTo('nopermission');

            return false; // stop the promise chain
          }


          var reportErrorTimer = $timeout(function() {
            Raven.captureException(new Error('HTTP response error'), {
              extra: {
                config: response.config,
                status: response.status
              }
            });
          });

          response.cancelReportingError = function() {
            $timeout.cancel(reportErrorTimer);
          };

          return true; // contiune the promise chain
        }
      );

      Restangular.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
        // Cleanup connection error
        errorHandler.cleanConnectionError();
        return data;
      });

      Restangular.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
        // Let's renew the token on every successfully performed request -> make sure the token will be expired only after a certain amount of *inactive* time.
        // So if the user makes any activity (do some network request, let's renew the valid token
        if (userAccess.isAuthenticated()) {
          userAccess.renewTokenIfNeeded();
        }

        return data;
      });

    }]);

