angular.module("ixlayer.header", [
  'ixlayer.config'
])

  .directive('appHeader', ['globals', function(globals) {
    return {
      restrict : 'E',
      scope: false,
      templateUrl: "shared/header/header.tpl.html",

      controller: ['$scope',  function($scope) {

        $scope.order_url = globals().order_url;

        $scope.show = false;
          $scope.showMenu = function() {
            if (!$scope.show) {
              $scope.show = true;
            } else {
              $scope.show = false;
            }
        };
      }]
    };
  }]);