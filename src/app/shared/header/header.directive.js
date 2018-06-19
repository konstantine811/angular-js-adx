angular.module("ixLayer")
  .directive('appHeader', function() {
    return {
      templateUrl: "shared/header/header.tpl.html",
      controller: ['$scope', function($scope) {

        $scope.showText = function() {
          console.log('this is header text');
        };

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