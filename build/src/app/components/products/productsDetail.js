angular.module( 'ixLayer.products').controller('ProductDetailCtrl', ['$scope', 'product', function ProductDetailCtrl($scope, product) {
   $scope.product = product;
}]);