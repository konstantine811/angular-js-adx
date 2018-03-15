angular.module( 'ixLayer.changePassword', [
    'ui.router',
    'ui.bootstrap'
  ])

  .config(function config( $stateProvider ) {
    $stateProvider.state( 'change_password', {
      url: '/change_password/:activation_key',
      controller: 'ChangePasswordCtrl',
      templateUrl: 'components/change_password/change_password.tpl.html',
      data:{ pageTitle: 'Change Password' }
    });
  })

  .controller( 'ChangePasswordCtrl',  ['$scope', '$stateParams', 'userAccessSrv', function ForgotPasswordCtrl( $scope, $stateParams, userAccessSrv ) {
      $scope.error = null;
      $scope.success = false;

      $scope.changeSubmit = function (userForm) {
          userAccessSrv.changePassword($stateParams.activation_key, userForm.password).then(function (result) {
                $scope.success = true;
              },
              function (error) {
                $scope.error = error;
              }
          );
      };

  }]);