angular.module( 'ixLayer.products', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'ixlayer.api.products',
  'ngAnimate',
  'ngScrollbar'
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
      data: {pageTitle: 'Product Detail'},
      resolve: {
        product: ['productsService', '$stateParams', function (productsService, $stateParams) {
          return productsService.getProduct(parseInt($stateParams.productId));
        }]
      }
    });
  })
  .config(function config($stateProvider) {
    $stateProvider.state('productDetail.results', {
      url: '/results',
      controller: 'ProductResultsCtrl',
      templateUrl: 'components/products/productResults.tpl.html',
      data:{ pageTitle: 'Products Results' },
      resolve: {
        userInfo: ['userAccessSrv', function (userAccessSrv) {
          return userAccessSrv.currentUser() || userAccessSrv.autoLogin();
        }]
      }
    });
  })

  .controller( 'ProductsCtrl', ['$scope', 'products', function ProductsCtrl( $scope, products) {
    $scope.products = products;
  }])

  .controller('ProductDetailCtrl', ['$scope',  'product', function ProductDetailCtrl($scope, product) {

    $scope.product = product;
    $scope.metadata = product.content.metadata;

    var contentEmpty = (function() {
      var obj = product.content;
      return JSON.stringify(obj) === '{}';
    }());


  }])
    .controller('ProductResultsCtrl', ['$scope', '$state', 'productsService', function ProductResultsCtrl($scope, $state, productsService) {

      $scope.notChecked = false;

      $scope.agree = function(checked) {
        if(checked)  {
          var id = $scope.product.id;
          productsService.postConsentProduct(id);
          $state.go('productDetail');
          $scope.notChecked = false;
        } else {
          $scope.notChecked = true;
        }
      };

      $scope.noAgree = function() {
        $state.go('productDetail');
        $scope.notChecked = false;
      };
  }]);