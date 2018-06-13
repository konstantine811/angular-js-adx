angular.module( 'ixlayer.products', [
  'ui.router',
  'ui.bootstrap',
  'ixlayer.api.products',
  'ngAnimate'
])
  .config(function config($stateProvider) {
    $stateProvider.state('master.products', {
      controller: 'ProductsCtrl',
      templateUrl: 'components/products/products.tpl.html',
      data:{ pageTitle: 'Products' },
      resolve: {
        products: ['productsService', function (productsService) {
          return productsService.getProducts();
        }]
      }
    })
      .state('master.products.about', {
        url: '/products',
        templateUrl: 'components/products/pages/about-products.tpl.html',
        params : {
          title: 'Products'
        }
      });
  })

  .config(function config($stateProvider) {
    $stateProvider.state('master.productDetail', {
      url: '/product/{productId}',
      controller: 'ProductDetailCtrl',
      templateUrl: 'components/products/productsDetail.tpl.html',
      data: {pageTitle: 'Product Detail'},
      resolve: {
        product: ['productsService', '$stateParams', function (productsService, $stateParams) {
          return productsService.getProduct(parseInt($stateParams.productId));
        }]
      },
      params: {
        title : 'Purchase receipts'
      }
    });
  })

  .controller( 'ProductsCtrl', ['$scope', 'products', '$state', function ProductsCtrl( $scope, products, $state) {
    $scope.products = products;

    // var product_id = statusProducts[0].product_id;
    //
    // if (statusProducts[0].result_ready) {
    //   $state.go('results', {id: product_id});
    // }

    $scope.tab = 1;

    $scope.setTab = function(newTab){
      $scope.tab = newTab;
    };

    $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    };

  }])

  .controller('ProductDetailCtrl', ['$scope',  'product', function ProductDetailCtrl($scope, product) {

    $scope.product = product;
    $scope.metadata = product.content.metadata;
    console.log(product);

    var contentEmpty = (function() {
      var obj = product.content;
      return JSON.stringify(obj) === '{}';
    }());


  }]);