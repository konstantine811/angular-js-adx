angular.module( 'ixLayer.products', [
  'ui.router',
  'ui.bootstrap',
  'ixlayer.api.products',
  'ngAnimate'
])
  .config(function config($stateProvider) {
    $stateProvider.state('products', {
      controller: 'ProductsCtrl',
      templateUrl: 'components/products/products.tpl.html',
      data:{ pageTitle: 'Products' },
      resolve: {
        userInfo: ['userAccessSrv', function (userAccessSrv) {
          return userAccessSrv.currentUser() || userAccessSrv.autoLogin();
        }],
        products: ['productsService', function (productsService) {
          return productsService.getProducts();
        }],
        statusProducts: ['productsService', function(productsService) {
          return productsService.getProductsStatus();
        }]
      }
    })
      .state('products.about', {
        url: '/about-products',
        templateUrl: 'components/products/pages/about-products.tpl.html',
        params : {
          title: 'Current status'
        }
      })
      .state('products.status', {
      url: '/status',
      templateUrl: 'components/products/pages/sequencingStatus.tpl.html',
        params : {
          title: 'Current status'
        }
    })
      .state('products.pre-purchase', {
        url: '/pre-purchase',
        templateUrl: 'components/products/pages/prePurchase.tpl.html',
        params : {
          title: 'Pre-purchase'
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
      },
      params: {
        title : 'Purchase receipts'
      }
    });
  })

  .controller( 'ProductsCtrl', ['$scope', 'products', 'statusProducts', '$state', function ProductsCtrl( $scope, products, statusProducts, $state) {
    $scope.products = products;

    // var product_id = statusProducts[0].product_id;
    //
    // if (statusProducts[0].result_ready) {
    //   $state.go('results', {id: product_id});
    // }
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