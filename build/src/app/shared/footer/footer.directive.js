angular.module("ixLayer")
  // footer height
  .directive('appFooter', function() {
    return {
      templateUrl: "shared/footer/footer.tpl.html",
      controller: ['$scope', '$state', '$transitions', '$location', '$anchorScroll', '$timeout', function($scope, $state, $transitions, $location, $anchorScroll, $timeout) {

        $scope.scrollToContacts = function(e) {
          e.preventDefault();
          var path = $location.path().slice(1);
          if (path === 'about') {
            $location.hash('contacts');
            $anchorScroll();
            $location.hash('');
            $location.replace();
          } else {
            $state.go('master.about');
            $transitions.onSuccess({to: 'master.about'}, function(transitions) {
              transitions.promise.then(function() {
                $location.hash('contacts');
                $anchorScroll();
              }).then(function() {
                $location.hash('');
                $location.replace();
              });
            });
          }
        };
      }]
    };
  });