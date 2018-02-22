angular.module( 'ixLayer.profile', [
    'ui.router',
    'placeholders',
    'ui.bootstrap'
  ])
  
  .config(function config( $stateProvider ) {
    $stateProvider.state( 'profile', {
      url: '/profile',
      views: {
        "main": {
          controller: 'ProfileCtrl',
          templateUrl: 'components/profile/profile.tpl.html'
        }
      },
      data:{ pageTitle: 'Profile' }
    });
  })
  
  .controller( 'ProfileCtrl', function ProfileCtrl( $scope ) {
    
  });