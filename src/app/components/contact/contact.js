angular.module( 'ixLayer.contact', [
    'ui.router',
    'placeholders',
    'ui.bootstrap'
  ])
  
  .config(function config( $stateProvider ) {
    $stateProvider.state( 'contact', {
      url: '/contact',
      views: {
        "main": {
          controller: 'ContactCtrl',
          templateUrl: 'components/contact/contact.tpl.html'
        }
      },
      data:{ pageTitle: 'Contact' }
    });
  })
  
  .controller( 'ContactCtrl', function ContactCtrl( $scope ) {
    
  });
  