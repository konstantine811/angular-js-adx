angular.module( 'ixLayer.login', [
    'ixlayer.useraccess',
    'ui.router',
    'ui.bootstrap'
  ])
  
  .config(function config( $stateProvider ) {
    $stateProvider.state( 'login', {
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
                $state.go('dashboard');
              },
              function (error) {
                $scope.error = error;
              }
          );
      };
  }]);