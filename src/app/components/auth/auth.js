angular.module( 'ixLayer.auth', [
    'ui.router',
    'placeholders',
    'ui.bootstrap'
  ])
  
  .config(function config( $stateProvider ) {
    $stateProvider.state( 'auth', {
      url: '/auth',
      views: {
        "main": {
          controller: 'AuthCtrl',
          templateUrl: 'components/auth/auth.tpl.html'
        }
      },
      data:{ pageTitle: 'Auth' }
    });
  })
  
  .controller( 'AuthCtrl', function AuthCtrl( $scope ) {
    
    

    
  });