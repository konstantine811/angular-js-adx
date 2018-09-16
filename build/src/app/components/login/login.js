angular.module( 'ixlayer.login', [
  'ixlayer.useraccess',
  'ixlayer.api.products',
  'ixlayer.api.results',
  'ui.router',
  'ui.bootstrap'
])

  .config(function config( $stateProvider ) {
    $stateProvider.state( 'master.login', {
      url: '/login',
      controller: 'LoginCtrl',
      templateUrl: 'components/login/login.tpl.html',
      data:{ pageTitle: 'Login' }
    });
    $stateProvider.state( 'master.logout', {
      url: '/logout',
      controller: 'LogoutCtrl',
      data:{ pageTitle: 'Logout' }
    });
  })

  .controller( 'LoginCtrl', ['$scope', '$state', 'userAccessSrv', 'Analytics', 'profileService', 'resultsService',
    function LoginCtrl( $scope, $state, userAccessSrv, Analytics, profileService, resultsService ) {
      $scope.error = null;

      $scope.loginUser = function (userForm) {
        userAccessSrv.cleanUser();
        userAccessSrv.login(userForm.email, userForm.password).then(function (result) {
            Analytics.trackEvent('login_success');
            profileService.clear();
            resultsService.clear();
            $state.go('master_signedin.results', {'page':''});
          },
          function (error) {
            if (error.status === 0) {
              $scope.error = {detail:  'Please check your Internet connection.'};
            } else
            {
              if (error.detail === 'Account closed' || error.detail === 'Account revoked') {
                  $scope.error = {detail: 'Your account has been disabled because you had requested to have your account revoked/closed. If you have any questions please contact support@adxhealthcare.com'};
              } else {
                  $scope.error = error;
              }
            }
            Analytics.trackEvent('login_failed', {error: $scope.error});
          }
        );
      };
    }])

  .controller( 'LogoutCtrl', ['$scope', '$state', '$rootScope', 'userAccessSrv',
    function LogoutCtrl( $scope, $state, $rootScope, userAccessSrv ) {
      $rootScope.$broadcast("user_logged_out");
      userAccessSrv.logout();
      $state.go('master.home');
    }]);
