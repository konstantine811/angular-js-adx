angular.module( 'ixlayer.legal', [
    'ui.router',
    'ui.bootstrap'
  ])
  
  .config(function config( $stateProvider ) {
    $stateProvider.state( 'master.legal', {
      url: '/legal',
      controller: 'LegalCtrl',
      templateUrl: 'components/legal/legal.tpl.html',
      data:{ pageTitle: 'Login' }
    });
  })
  
  .controller( 'LegalCtrl', function LegalCtrl( $scope ) {
    
  });