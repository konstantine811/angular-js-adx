angular.module("ixLayer")
  .directive('appHeader', function() {
    return {
      restrict : 'E',
      scope: false,
      templateUrl: "shared/header/header.tpl.html",

      controller: ['$scope',  function($scope) {

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