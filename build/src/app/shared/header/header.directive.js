angular.module("ixLayer")
  .directive('appHeader', function() {
    return {
      templateUrl: "shared/header/header.tpl.html",
      controller: ['$scope', '$location', function($scope, $location) {

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
  });