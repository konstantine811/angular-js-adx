angular.module("ixLayer")
  .directive('appHeader', function() {
    return {
      templateUrl: "shared/header/header.tpl.html",
      controller: ['$scope', '$location', '$timeout', function($scope) {

        $scope.show = false;
          $scope.showMenu = function() {
            if (!$scope.show) {
              $scope.show = true
            } else {
              $scope.show = false;
            }
        };
      }]
    };
  });