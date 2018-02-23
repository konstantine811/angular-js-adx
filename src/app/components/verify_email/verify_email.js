angular.module( 'ixLayer.verifyEmail', [
    'ui.router',
    'placeholders',
    'ui.bootstrap'
  ])
  
  .config(function config( $stateProvider ) {
    $stateProvider.state( 'verify_email', {
      url: '/verify_email',
      views: {
        "main": {
          controller: 'VerifyEmailCtrl',
          templateUrl: 'components/verify_email/verify_email.tpl.html'
        }
      },
      data:{ pageTitle: 'verifyEmail' }
    });
  })
  
  .controller( 'VerifyEmailCtrl', function VerifyEmailCtrl( $scope ) {
    
  });