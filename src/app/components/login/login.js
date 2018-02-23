angular.module( 'ixLayer.login', [
    'ixlayer.useraccess',
    'ui.router',
    'placeholders',
    'ui.bootstrap'
  ])
  
  .config(function config( $stateProvider ) {
    $stateProvider.state( 'login', {
      url: '/login',
      views: {
        "main": {
          controller: 'LoginCtrl',
          templateUrl: 'components/login/login.tpl.html'
        }
      },
      data:{ pageTitle: 'Login' }
    });
  })
  
  .controller( 'LoginCtrl', ['$scope', 'userAccessSrv', function LoginCtrl( $scope, userAccessSrv ) {
    
  }]);