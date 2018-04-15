angular.module("ixLayer")
  .directive('appHeader', function() {
    return {
      templateUrl: "shared/header/header.tpl.html",
      controller: ['$scope', '$location', '$timeout', function($scope) {

      }]
    };
  });