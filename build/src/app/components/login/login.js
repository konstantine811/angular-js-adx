angular.module( 'ixlayer.login', [
    'ixlayer.useraccess',
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
  })
  
  .controller( 'LoginCtrl', ['$scope', '$state', 'userAccessSrv', function LoginCtrl( $scope, $state, userAccessSrv ) {
      $scope.error = null;

      $scope.loginUser = function (userForm) {
          userAccessSrv.cleanUser();
          userAccessSrv.login(userForm.email, userForm.password).then(function (result) {
                $state.go('master_signedin.dashboard');
              },
              function (error) {
                $scope.error = error;
              }
          );
      };
  }]);