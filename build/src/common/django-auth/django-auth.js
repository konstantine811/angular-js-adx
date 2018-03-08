angular.module('ixlayer.djangoAuth', [
    'ngCookies'
  ])

  .constant("JWT_CONST",{
    renewTimeInMin: 12*60,
    tokenExpirationTimeInDays: 3
  })

  .service('djangoAuth', [
    '$q',
    '$http',
    '$log',
    '$cookies',
    '$rootScope',
    'JWT_CONST',
    function djangoAuth($q, $http, $log, $cookies, $rootScope, JWT_CONST) {

      // AngularJS will instantiate a singleton by calling "new" on this function
      var service = {
        /* START CUSTOMIZATION HERE */
        // Change this to point to your Django REST Auth API
        // e.g. /api/rest-auth  (DO NOT INCLUDE ENDING SLASH)
        'API_URL': '',
        // Set use_session to true to use Django sessions to store security token.
        // Set use_session to false to store the security token locally and transmit it as a custom header.
        'use_session': false,
        /* END OF CUSTOMIZATION */
        'authenticated': null,
        'authPromise': null,
        'request': function (args) {
          // Let's retrieve the token from the cookie, if available
          if ($cookies.get('token')) {
            $http.defaults.headers.common.Authorization = 'JWT ' + $cookies.get('token');
          }
          // Continue

          args = args || {};

          var deferred = $q.defer(),
            url = this.API_URL + args.url,
            method = args.method || "GET",
            params = args.method === "GET" ? args.data : {},
            data = args.data || {},
            ignoreLoadingBar = args.ignoreLoadingBar || false;
          // Fire the request, as configured.
          $http({
            url: url,
            withCredentials: this.use_session,
            method: method.toUpperCase(),
            headers: {'X-CSRFToken': $cookies.get('csrftoken')},
            params: params,
            data: data,
            ignoreLoadingBar: ignoreLoadingBar
          })
            .then(function (response) {
              deferred.resolve(response.data, response.status);
            }, function (response) {
              // Set request status
              var data = response.data;
              var status = response.status;

              if (data && status) {
                data.status = status;
              }
              if (!data || status === 0) {
                if (data === "") {
                  data = {};
                  data['status'] = 0;
                  data['non_field_errors'] = ["Could not connect. Please try again."];
                }
                // or if the data is null, then there was a timeout.
                if (data == null) {
                  // Inject a non field error alerting the user
                  // that there's been a timeout error.
                  data = {};
                  data['status'] = 0;
                  data['non_field_errors'] = ["Please check your internet connection and try again."];
                }
              }
              deferred.reject(data, status, response.headers, response.config);
            });
          return deferred.promise;
        },
        register: function (first_name, last_name, username, password, email, more) {
          var data = {
            'first_name': first_name,
            'last_name': last_name,
            'username': username,
            'password': password,
            'email': email
          };
          data = angular.extend(data, more);
          return this.request({
            'method': "POST",
            'url': "/register/",
            'data': data
          });
        },
        login: function (username, password) {
          var djangoAuth = this;
          return this.request({
            'method': "POST",
            'url': "/login/",
            'data': {
              'email': username,
              'password': password
            }
          }).then(function (data) {
            if (!djangoAuth.use_session) {
              djangoAuth.setToken(data.token);
            }
            djangoAuth.authenticated = true;
            $rootScope.$broadcast("user_logged_in", data);
            return data;
          });
        },
        logout: function () {
          var djangoAuth = this;

          djangoAuth.invalidateToken();

          $rootScope.$broadcast("user_logged_out");

          return $q.resolve();
        },
        changePassword: function (password1, password2) {
          return this.request({
            'method': "POST",
            'url': "/password/",
            'data': {
              'new_password': password1,
              'current_password': password2
            }
          });
        },
        resetPassword: function (email) {
          return this.request({
            'method': "POST",
            'url': "/password/reset/",
            'data': {
              'email': email
            }
          });
        },
        profile: function () {
          return this.request({
            'method': "GET",
            'url': "/profile/"
          });
        },
        updateProfile: function (data) {
          return this.request({
            'method': "PUT",
            'url': "/profile/",
            'data': data
          });
        },
        verifyEmail: function (token) {
          return this.request({
            'method': "POST",
            'url': "/verify-email/" + token,
            'data': {'activation_key': token}
          });
        },
        confirmReset: function (uid, token, password1, password2) {
          return this.request({
            'method': "POST",
            'url': "/password/reset/confirm/",
            'data': {
              'uid': uid,
              'token': token,
              'new_password': password1,
              're_new_password': password2
            }
          });
        },
        authenticationStatus: function (restrict, force) {
          // Set restrict to true to reject the promise if not logged in
          // Set to false or omit to resolve when status is known
          // Set force to true to ignore stored value and query API
          restrict = restrict || false;
          force = force || false;
          if (this.authPromise == null || force) {
            this.authPromise = this.request({
              'method': "GET",
              'url': "/profile/"
            });
          }
          var da = this;
          var getAuthStatus = $q.defer();
          if (this.authenticated != null && !force) {
            // We have a stored value which means we can pass it back right away.
            if (this.authenticated === false && restrict) {
              getAuthStatus.reject("User is not logged in.");
            } else {
              getAuthStatus.resolve(da.authenticated);
            }
          } else {
            // There isn't a stored value, or we're forcing a request back to
            // the API to get the authentication status.
            this.authPromise.then(function (data, status) {
              da.authenticated = true;
              getAuthStatus.resolve(da.authenticated);
            }, function () {
              da.authenticated = false;
              if (restrict) {
                getAuthStatus.reject("User is not logged in.");
              } else {
                getAuthStatus.resolve(da.authenticated);
              }
            });
          }
          return getAuthStatus.promise;
        },
        initialize: function (url, sessions) {
          this.API_URL = url;
          this.use_session = sessions;
          return this.authenticationStatus();
        },
        invalidateToken: function () {
          // JWT - remove the token
          delete $http.defaults.headers.common.Authorization;
          $cookies.remove('token',  {'path':'/'});
          $cookies.remove('last_token_issue_time',  {'path':'/'});
          $cookies.remove('sessionid');
          djangoAuth.authenticated = false;
        },
        isTokenRenewing: false,

        /**
         * Refresh the user auth token if it's close to be expired.
         * Return a Promise<bool>, which is true, if the token was refreshed, false, if the token does needed to be refreshed
         *
         **/
        renewTokenIfNeeded: function () {

          var djangoAuth = this;

          var token = djangoAuth.getToken();
          if (!token) {
            // Not possible to refresh
            return $q.resolve(false);
          }

          if (djangoAuth.shouldRenewToken() && !djangoAuth.isTokenRenewing) {

            // Ensure we get new token only once!
            djangoAuth.isTokenRenewing = true;

            console.log("shouldRenewToken");

            return djangoAuth.request({
              method: "POST",
              url: "/api-token-refresh/",
              data: {
                'token': token
              },
              ignoreLoadingBar: true
            }).then(function (result) {
              if (!djangoAuth.use_session) {
                djangoAuth.setToken(result.token);
              }
              djangoAuth.authenticated = true;
              return true;
            }).finally(function () {
              // Ensure we let the next token renewal!
              djangoAuth.isTokenRenewing = false;
            });
          }

          // Not needed to refresh or it is already in progress
          return $q.resolve(false);
        },
        setToken : function (token) {

          // Check to get valid token!
          if (!token) {
            console.log("Invalid token tried to be saved!!!");
            return;
          }

          $http.defaults.headers.common.Authorization = 'JWT ' + token;

//        ONLY FOR TESTING, expire in 1 minute
//        var expireDate = moment(new Date()).add(1, 'm').toDate();

          // Let's expire it in X days -> the cookie will automatically removed by the browser (no notification about it)
          var expireDate = new Date();
          expireDate.setDate(expireDate.getDate() + JWT_CONST.tokenExpirationTimeInDays);
          $cookies.put('token', token, {'expires': expireDate, 'path':'/'});
          var nowTimestamp = (new Date()).getTime();
          $cookies.put('last_token_issue_time', nowTimestamp , {'path':'/'});
        },
        shouldRenewToken: function () {
          var lastTokenIssuedTimestamp = $cookies.get('last_token_issue_time');
          var lastTokenIssuedTime = moment.unix(lastTokenIssuedTimestamp/1000);
          return (lastTokenIssuedTimestamp && lastTokenIssuedTime.add(JWT_CONST.renewTimeInMin, 'm').isBefore(moment()));
        },
        getToken: function() {
          return $cookies.get('token');
        }
      };
      return service;
    }]);
