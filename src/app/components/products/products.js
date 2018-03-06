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
      data:{ pageTitle: 'Product Detail' },
      resolve: {
        product: ['productsService', '$stateParams', function (productsService, $stateParams) {
           return productsService.getProduct(parseInt($stateParams.productId));
        }]
      }
    });
  })

  .controller( 'ProductsCtrl', ['$scope', 'products', function ProductsCtrl( $scope, products ) {
    $scope.products = products;
  }])

  .controller('ProductDetailCtrl', ['$scope', 'product', function ProductDetailCtrl($scope, product) {
    $scope.product = product;
  }]);