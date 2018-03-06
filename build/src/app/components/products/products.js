angular.module( 'ixLayer.products', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'ixlayer.api.products'
])

  .config(function config($stateProvider) {
    $stateProvider.state('products', {
      url: '/products',
      controller: 'ProductsCtrl',
      templateUrl: 'components/products/products.tpl.html',
      data:{ pageTitle: 'Products' },
      resolve: {
          products: ['productsService', function (productsService) {
              return productsService.getProducts();
          }]
      }
    });
  })

  .config(function config($stateProvider) {
    $stateProvider.state('productDetail', {
      url: '/product/{productId}',
      controller: 'ProductDetailCtrl',
      templateUrl: 'components/products/productsDetail.tpl.html',
      data:{ pageTitle: 'Product Detail' }
    });
  })

  .controller( 'ProductsCtrl', ['$scope', 'products', function ProductsCtrl( $scope, products ) {
    $scope.products = products;
  }])

  .controller('ProductDetailCtrl', ['$scope', '$stateParams', 'productsService', function ProductDetailCtrl($scope, $stateParams, productsService) {
    $scope.product = productsService.getProduct(parseInt($stateParams.productId));
  }]);