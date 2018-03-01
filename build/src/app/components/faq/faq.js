angular.module( 'ixLayer.FAQ', [
    'ui.router',
    'placeholders',
    'ui.bootstrap'
  ])
  
  .config(function config( $stateProvider ) {
    $stateProvider.state( 'FAQ', {
      url: '/FAQ',
      views: {
        "main": {
          controller: 'FAQCtrl',
          templateUrl: 'components/faq/faq.tpl.html'
        }
      },
      data:{ pageTitle: 'FAQ' }
    });
  })
  
  .controller( 'FAQCtrl', function FAQCtrl( $scope ) {
    
  });