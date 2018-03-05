angular.module( 'ixLayer.products', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'ixlayer.api.products'
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
      data:{ pageTitle: 'Products' },
      resolve: {
        products: ['productsService', function (productsService) {
          return productsService.getProducts();
        }]
      }
    });
  })

  .controller( 'ProductsCtrl', ['$scope', 'products', function ProductsCtrl( $scope, products ) {
    $scope.products = products;
    console.log(products);
  }]);