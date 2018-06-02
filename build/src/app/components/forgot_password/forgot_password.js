angular.module( 'ixLayer.forgotPassword', [
    'ui.router',
    'ui.bootstrap'
  ])
  
  .config(function config( $stateProvider ) {
    $stateProvider.state( 'master.forgot_password', {
      url: '/forgot_password',
      controller: 'ForgotPasswordCtrl',
      templateUrl: 'components/forgot_password/forgot_password.tpl.html',
      data:{ pageTitle: 'Forgot Password' }
    });
  })
  
  .controller( 'ForgotPasswordCtrl',  ['$scope', '$state', 'userAccessSrv', function ForgotPasswordCtrl( $scope, $state, userAccessSrv ) {
      $scope.error = null;
      $scope.success = false;

      $scope.forgotSubmit = function () {
          userAccessSrv.resetPassword($scope.forgotForm.email).then(function (result) {
                $scope.success = true;
              },
              function (error) {
                $scope.error = error;
              }
          );
      };

  }]);