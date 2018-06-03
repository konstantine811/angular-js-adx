angular.module( 'ixLayer.FAQ', [
    'ui.router',
    'ui.bootstrap'
  ])
  
  .config(function config( $stateProvider ) {
    $stateProvider.state( 'master.FAQ', {
      url: '/FAQ',
      controller: 'FAQCtrl',
      templateUrl: 'components/faq/faq.tpl.html',
      data:{ pageTitle: 'FAQ' }
    });
  })
  
  .controller( 'FAQCtrl', function FAQCtrl( $scope ) {
    
  });