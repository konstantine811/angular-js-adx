angular.module("ixLayer")
  // footer height
  .directive('appFooter', function() {
    return {
      templateUrl: "shared/footer/footer.tpl.html",
      controller: ['$scope', '$state', '$transitions', '$location', '$anchorScroll', function($scope, $state, $transitions, $location, $anchorScroll) {

        $scope.scrollToContacts = function(e) {
          e.preventDefault();
          var path = $location.path().slice(1);
          if (path === 'about') {
            $location.hash('contacts');
            $anchorScroll();
          } else {
            $state.go('master.about');
            $transitions.onSuccess({to: 'master.about'}, function() {
              $location.hash('contacts');
              $anchorScroll();
            });
          }
        };
      }]
    };
  });