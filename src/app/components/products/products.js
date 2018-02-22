angular.module( 'ixLayer.products', [
    'ui.router',
    'placeholders',
    'ui.bootstrap'
  ])
  
  .config(function config( $stateProvider ) {
    $stateProvider.state( 'products', {
      url: '/products',
      views: {
        "main": {
          controller: 'ProductsCtrl',
          templateUrl: 'components/products/products.tpl.html'
        }
      },
      data:{ pageTitle: 'Products' }
    });
  })
  
  .controller( 'ProductsCtrl', function ProductsCtrl( $scope ) {
    
  });