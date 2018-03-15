angular.module( 'ixLayer.legal', [
    'ui.router',
    'ui.bootstrap'
  ])
  
  .config(function config( $stateProvider ) {
    $stateProvider.state( 'legal', {
      url: '/legal',
      controller: 'LegalCtrl',
      templateUrl: 'components/legal/legal.tpl.html',
      data:{ pageTitle: 'Login' }
    });
  })
  
  .controller( 'LegalCtrl', function LegalCtrl( $scope ) {
    
  });