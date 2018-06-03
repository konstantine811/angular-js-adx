angular.module( 'ixLayer.contact', [
    'ui.router',
    'ui.bootstrap'
  ])
  
  .config(function config( $stateProvider ) {
    $stateProvider.state( 'master.contact', {
      url: '/contact',
      controller: 'ContactCtrl',
      templateUrl: 'components/contact/contact.tpl.html',
      data:{ pageTitle: 'Contact' }
    });
  })
  
  .controller( 'ContactCtrl', function ContactCtrl( $scope ) {
    
  });
  