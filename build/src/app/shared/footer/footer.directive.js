angular.module("ixLayer")
  // footer height
  .directive('appFooter', function() {
    return {
      templateUrl: "shared/footer/footer.tpl.html",
      controller: ['$scope', '$transitions', '$location', '$anchorScroll', '$window', function($scope, $transitions, $location, $anchorScroll, $window) {

        $scope.scrollContacts = function() {
          $transitions.onSuccess({}, function() {
            $location.hash('contacts');
            $anchorScroll();
            $location.hash('');
          });
        };
      }]
    };
  });