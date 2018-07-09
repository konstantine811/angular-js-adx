angular.module( 'ixlayer.references', [
    'ui.router',
    'ui.bootstrap'
  ])
  
  .config(function config( $stateProvider ) {
    $stateProvider.state( 'master.references', {
      url: '/references',
      controller: 'ReferencesCtrl',
      templateUrl: 'components/references/references.tpl.html',
      data:{ pageTitle: 'Login' }
    });
  })
  
  .controller( 'ReferencesCtrl', function ReferencesCtrl( $scope ) {
    
  });