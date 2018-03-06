angular.module( 'ixLayer.forgotPassword', [
    'ui.router',
    'placeholders',
    'ui.bootstrap'
  ])
  
  .config(function config( $stateProvider ) {
    $stateProvider.state( 'forgot_password', {
      url: '/forgot_password',
      controller: 'ForgotPasswordCtrl',
      templateUrl: 'components/forgot_password/forgot_password.tpl.html',
      data:{ pageTitle: 'ForgotPassword' }
    });
  })
  
  .controller( 'ForgotPassword', function ForgotPasswordCtrl( $scope ) {
    
  });