/**
 * Created by nbalazs on 2/11/15.
 */


angular.module('wanda.useraccess', [
    'restangular',
    'wanda.djangoAuth',
    'wanda.api.collaborator',
    'wanda.roles',
    'wanda.api.saml'
  ])

  .constant('URL_PATH', {
    USERS: '/users/',
    AUTH: 'auth',
    MY_USERS: "me"
  })

  .factory('userAccessSrv', ['Restangular', '$q', 'URL_PATH', '$log', '$state', 'djangoAuth', 'collaboratorService', 'samlAccessService',
     function (Restangular, $q, URL_PATH, $log, $state, djangoAuth, collaboratorService, samlAccessService) {

    var conditionResource = Restangular.all(URL_PATH.USERS);

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

          if (currentUser && currentUser.is_saml_user) {
            samlAccessService.logout(currentUser.network.id);
          }
          else {
            // This will trigger to cleanup the current view and scope, which may use the `currentUser()`
            promise = $state.goLoginThenGoHomeState();
          }

          promise.then(function () {
            cleanUser();
          });
          return promise;
        });
      });

    };

    var initURL = function () {
      return djangoAuth.initialize(restAPIBaseUrl + '/auth', false);
    };

    var resetPassword = function (username) {
      $log.debug("inint djangoAuth");
      return initURL().then(function () {
        return djangoAuth.resetPassword(username);
      });
    };

    var changePassword = function (new_password, current_password) {
      $log.debug("Initiated the change password");
      return initURL().then(function () {
        return djangoAuth.changePassword(new_password, current_password);
      });
    };

    var autoLogin = function (forceToAuthenticate) {
      forceToAuthenticate = angular.isUndefined(forceToAuthenticate) ? true : forceToAuthenticate;
      $log.debug("inint djangoAuth");
      return loginPromise = initURL().then(function (authenticated) {

        if (!authenticated && forceToAuthenticate) {
          $log.debug("User is not authenticated!");
          $state.goLogin();
          return $q.reject();
        }

        $log.debug("try autoLogin");
        return requestCurrentUserDetails();
      }, function (response) {
        $log.debug("autoLogin - failed");
        $state.goLogin();
      });
    };

    //To download the conditions recursively:
    var requestCurrentUserDetails = function () {
      return Restangular.one('/me').get().then(function (response) {

        return collaboratorService.getAllCollaboratorsOfUser(response).then(function (collaborators){

          currentUser = response;
          currentUser.doctorName = doctorName;

          //TO MOCK PP QUESTIONNAIRE:
          // currentUser.network.config.enable_patient_questionnaires = 0;
          //TO MOCK THE RATING FEATURE:
          // currentUser.network.config.enable_treatmentplan_rating = 1;

          currentUser.collaborators.forEach(function (doctor) {
            doctor.doctorName = doctorName;
          });

          Raven.setUserContext({
            oncoverse_id: currentUser.oncoverse_id,
            email: currentUser.user.email,
            token: djangoAuth.getToken()
          });

          // Notify about login
          loginCallbacks.forEach(function (cb) {
            cb(currentUser);
          });

          return currentUser;

        });

      });
    };

    var updateUserAvailableForReview = function (availableForReview) {
      //Restangular must update the user:
      return currentUser.patch({'available_for_reviews': availableForReview}).then(function (result) {
        currentUser.available_for_reviews = availableForReview;
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

    var doctorName = function (user) {
      if (!user || !user.user) {
        return "";
      }

      if (user.title) {
        return user.title + ' ' + user.user.first_name + ' ' + user.user.last_name;
      }
      return user.user.first_name + ' ' + user.user.last_name;
    };

    var doctorInitial = function(user) {
      if (!user || !user.user) {
        return "";
      }

      return user.user.first_name.charAt(0) + ' ' + user.user.last_name.charAt(0);
    };

    var currentUserName = function () {
      var name = this.currentUser();
      if (name.title) {
        return name.title + ' ' + name.user.first_name + ' ' + name.user.last_name;
      }
      return name.user.first_name + ' ' + name.user.last_name;
    };

    // This is because SAML token can be added
    var samlLoginCompleted = function(token) {
      djangoAuth.setToken(token);
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


    var getToken = function () {
      return djangoAuth.getToken();
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
      getConfig : function() {
        return currentUser.network.config || {};
      },
      cleanUser: cleanUser,
      login: login,
      logout: logout,
      autoLogin: autoLogin,
      resetPassword: resetPassword,
      updateUserAvailableForReview: updateUserAvailableForReview,
      doctorName: doctorName,
      doctorInitial: doctorInitial,
      currentUserName: currentUserName,
      changePassword: changePassword,
      requestCurrentUserDetails: requestCurrentUserDetails,
      samlLogin: samlAccessService.login,
      samlLoginCompleted: samlLoginCompleted,
      samlLogout: samlAccessService.logout,
      getToken: getToken,
      addLoginCallback: addLoginCallback,
      addTokenRenewedCallback: addTokenRenewedCallback,
      addLogoutCallback: addLogoutCallback,
      renewTokenIfNeeded: renewTokenIfNeeded
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
              $state.goLoginThenGoHomeState();
            }
            else {
              $state.goHome();
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
            $state.goLogin();
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
