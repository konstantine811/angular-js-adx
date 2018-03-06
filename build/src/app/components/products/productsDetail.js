/*
angular.module( 'ixLayer.productDetail', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'ixlayer.api.products'
])

  .config(function config($stateProvider) {
    $stateProvider.state('productDetail', {
      url: '/product/{productId}',
      controller: 'ProductDetailCtrl',
      templateUrl: 'components/products/productsDetail.tpl.html',
      data:{ pageTitle: 'Product Detail' }
    });
  })

  .controller('ProductDetailCtrl', ['$scope', '$stateParams', function ProductDetailCtrl($scope, $stateParams) {
    $scope.product = productsService.getProduct($stateParams.productId);
  }]);
*/