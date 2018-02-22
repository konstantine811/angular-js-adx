angular.module("ixLayer")
  // footer height
  .directive('appFooter', function() {
    return {
      templateUrl: "shared/footer/footer.tpl.html",
      controller: ['$scope', function($scope) {

      }]
    };
  });