angular.module( 'ixLayer.products', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'ixlayer.api.products'
])

  .config(function config( $stateProvider ) {
      var states;
      states = [
          {
              name: 'products',
              url: '/products',
              controller: 'ProductsCtrl',
              templateUrl: 'components/products/products.tpl.html',
              data:{ pageTitle: 'Products' },
              resolve: {
                  products: ['productsService', function (productsService) {
                      return productsService.getProducts();
                  }]
              }
          },
          {
              name: 'productDetail',
              ulr: '/products/{productId}',
              controller: 'ProductDetailCtrl',
              templateUrl: 'components/products/productsDetail.tpl.html',
              resolve: {
                  product: ['productsService', function(productsService, $stateParams) {
                      return productsService.detailProduct($stateParams.id);
                  }]
              }
          }
      ];
    states.forEach(function(state) {
        $stateProvider.state(state);
    });

  })

  .controller( 'ProductsCtrl', ['$scope', 'products', function ProductsCtrl( $scope, products ) {
    $scope.products = products;
  }]);