angular.module("ixLayer").
directive('contactsScroll', ['$state', '$transitions', '$location', '$anchorScroll', '$timeout',
  function($state, $transitions, $location, $anchorScroll, $timeout) {

  return {
    restrict: 'A',
    link: function($scope, element, attr) {
      element.on('click', function() {
        var path = $location.path().slice(1);
        if (path === 'about') {
          $anchorScroll.yOffset = 0;
          $location.hash('contacts');
          $anchorScroll();
          $location.hash('');
          $location.replace();
        }
         else {
          $state.go('master.about');
          $transitions.onSuccess({to: 'master.about'}, function(transitions) {
            transitions.promise.then(function() {
              $location.hash('contacts');
              $anchorScroll();
            });
          });
        }
      });
    }
  };
}]);