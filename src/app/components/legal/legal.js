angular.module( 'ixLayer.legal', [
    'ui.router',
    'placeholders',
    'ui.bootstrap'
  ])
  
  .config(function config( $stateProvider ) {
    $stateProvider.state( 'legal', {
      url: '/legal',
      views: {
        "main": {
          controller: 'LegalCtrl',
          templateUrl: 'components/legal/legal.tpl.html'
        }
      },
      data:{ pageTitle: 'Login' }
    });
  })
  
  .controller( 'LegalCtrl', function LegalCtrl( $scope ) {
    
  });