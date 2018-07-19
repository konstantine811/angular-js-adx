angular.module( 'ixlayer.forgotpassword', [
    'ui.router',
    'ui.bootstrap'
  ])
  
  .config(function config( $stateProvider ) {
    $stateProvider.state( 'master.forgot_password', {
      url: '/forgot-password',
      controller: 'ForgotPasswordCtrl',
      templateUrl: 'components/forgot_password/forgot_password.tpl.html',
      data:{ pageTitle: 'Forgot Password' }
    });
  })
  
  .controller( 'ForgotPasswordCtrl',  ['$scope', '$state', 'userAccessSrv', 'Analytics',
    function ForgotPasswordCtrl( $scope, $state, userAccessSrv, Analytics ) {

      $scope.error = null;
      $scope.success = false;

      $scope.forgotSubmit = function () {
          userAccessSrv.resetPassword($scope.forgotForm.email).then(function (result) {
                $scope.success = true;
                Analytics.trackEvent('forgot_password');
              },
              function (error) {
                $scope.error = error;
              }
          );
      };

  }]);