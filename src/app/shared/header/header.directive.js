angular.module("ixLayer")
  // footer height
  .directive('appHeader', function() {
    return {
      templateUrl: "shared/header/header.tpl.html",
      controller: ['$scope', function($scope) {

      }]
    };
  });