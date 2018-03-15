/**
 * Created by nbalazs on 2/11/15.
 */


angular.module('ixlayer.useraccess', [
    'restangular',
    'ixlayer.djangoAuth'
  ])

  .constant('URL_PATH', {
    USERS: '/users/',
    AUTH: 'auth',
    MY_USERS: "me"
  })

  .factory('userAccessSrv', ['Restangular', '$q', 'URL_PATH', '$log', '$state', 'djangoAuth',
     function (Restangular, $q, URL_PATH, $log, $state, djangoAuth) {

    // callbacks
    var loginCallbacks = [];
    var logoutCallbacks = [];
    var tokenRenewedCallbacks = [];

    //Cache the logged in user
    var currentUser = null,
      loginPromise = null;

    // Is the current user authenticated?
    var isAuthenticated = function () {
      return !!currentUser;
    };

    // Attempt to authenticate a user by the given email and password
    var login = function (username, password) {
      cleanUser();
      return initURL().then(function () {
        return djangoAuth.login(username, password);
      });

    };

    // Logout the current user and redirect
    var logout = function () {

      return initURL().then(function () {
        return djangoAuth.logout().then(function () {
          var promise = $q.resolve();

          if (currentUser) {
            promise = $state.go('home');
          }

          promise.then(function () {
            cleanUser();
          });
          return promise;
        });
      });

    };

    var initURL = function () {
      return djangoAuth.initialize(restAPIBaseUrl, false);
    };

    var resetPassword = function (username) {
      $log.debug("inint djangoAuth");
      return initURL().then(function () {
        return djangoAuth.resetPassword(username);
      });
    };

    var changePassword = function (activation_key, password) {
      $log.debug("Initiated the change password");
      return initURL().then(function () {
        return djangoAuth.changePassword(activation_key, password);
      });
    };

    var autoLogin = function (forceToAuthenticate) {
      forceToAuthenticate = angular.isUndefined(forceToAuthenticate) ? true : forceToAuthenticate;
      $log.debug("inint djangoAuth");
      return loginPromise = initURL().then(function (authenticated) {

        if (!authenticated && forceToAuthenticate) {
          $log.debug("User is not authenticated!");
          $state.go('login');
          return $q.reject();
        }

        $log.debug("try autoLogin");
        return requestCurrentUserDetails();
      }, function (response) {
        $log.debug("autoLogin - failed");
        $state.go('login');
      });
    };

    //To download the conditions recursively:
    var requestCurrentUserDetails = function () {
      return Restangular.one('/profile').get().then(function (response) {

          currentUser = response;

          //TO MOCK PP QUESTIONNAIRE:
          // currentUser.network.config.enable_patient_questionnaires = 0;
          //TO MOCK THE RATING FEATURE:
          // currentUser.network.config.enable_treatmentplan_rating = 1;

          Raven.setUserContext({
            profile_id: currentUser.id,
            email: currentUser.user.email,
            token: djangoAuth.getToken()
          });

          // Notify about login
          loginCallbacks.forEach(function (cb) {
            cb(currentUser);
          });

          return currentUser;

      });
    };


    var cleanUser = function () {
      djangoAuth.invalidateToken();
      Raven.setUserContext();
      currentUser = null;

      // Notify about logout
      logoutCallbacks.forEach(function (cb) {
        cb();
      });

    };

    var currentUserName = function () {
      var name = this.currentUser();
      return name.user.first_name + ' ' + name.user.last_name;
    };

    var renewTokenIfNeeded = function () {
      return initURL().then(function () {
        return djangoAuth.renewTokenIfNeeded().then(function(tokenRenewed) {
          if (tokenRenewed) {
            tokenRenewedCallbacks.forEach(function (cb) {
              cb();
            });
          }
          return tokenRenewed;
        });
      });
    };

    var register = function (first_name, last_name, email, password, more) {
      return initURL().then(function () {
        return djangoAuth.register(first_name, last_name, email, password, email, more);
      });
    };

    var getToken = function () {
      return djangoAuth.getToken();
    };

    var verifyEmail = function(activation_key) {
      return initURL().then(function () {
        return djangoAuth.verifyEmail(activation_key);
      });
    };

    /**
     * Outer services can register callback about logout & login!
     **/
    var addLoginCallback = function(callback) {
      loginCallbacks.push(callback);
      return this;
    };

    var addLogoutCallback = function(callback) {
      logoutCallbacks.push(callback);
      return this;
    };

    var addTokenRenewedCallback = function(callback) {
     tokenRenewedCallbacks.push(callback);
      return this;
    };

    return {
      currentUser: function () {
        return currentUser;
      },
      isAuthenticated: isAuthenticated,
      getLoginPromise: function () {
        return loginPromise;
      },
      cleanUser: cleanUser,
      login: login,
      logout: logout,
      autoLogin: autoLogin,
      resetPassword: resetPassword,
      currentUserName: currentUserName,
      changePassword: changePassword,
      requestCurrentUserDetails: requestCurrentUserDetails,
      getToken: getToken,
      addLoginCallback: addLoginCallback,
      addTokenRenewedCallback: addTokenRenewedCallback,
      addLogoutCallback: addLogoutCallback,
      renewTokenIfNeeded: renewTokenIfNeeded,
      register: register,
      verifyEmail: verifyEmail
    };
  }])

  .factory('userAuthorize', ['userAccessSrv','$q', '$log', '$state', '$timeout', 'roleHandlingService', function (userAccessSrv, $q, $log, $state, $timeout, roleHandlingService) {

    var authorizeByRule = function(ruleFunction) {
      var defer = $q.defer();

      var authorize = function(user){
        if(ruleFunction(roleHandlingService, user)) {
          defer.resolve();
        } else {

          //This function can be called during a state change. More secure to call the redirect in a timeout
          $timeout(function () {

            //Check Login state to avoid a possible scenario:
            // the user is on the login screen, BUT the state (requested by URL) is not available for him/her.
            // At this case DO NOT take the user back to the login screen (de to the user is already there), then take him/her to the Home screen

            if ($state.$current.name !== 'login') {
              //Maybe go to a 'not-authorized' page?
              $state.go('login');
            }
            else {
              $state.go('home');
            }
          });
          defer.reject();
        }
      };

      var loggedInUser = userAccessSrv.currentUser();
      var loginPromise = userAccessSrv.getLoginPromise();

      if (!loggedInUser) {
        if (!loginPromise) {
          //The user is not logged in, let's go login (keep the last unresolved state)
          $timeout(function () {
            //This function can be called during a state change. More secure to call the redirect in a timeout
            $state.go('login');
          });
          defer.reject();
        }
        else {
          loginPromise.then(function(user) {
            authorize(user);
          });
        }
      }
      else {
        authorize(loggedInUser);
      }

      return defer.promise;
    };


    return {
      authorizeByRule: authorizeByRule
    };


  }]);
