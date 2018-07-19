angular.module("ixLayer").
directive('contactsScroll', function($state, $transitions, $location, $anchorScroll) {
  return {
    restrict: 'A',
    link: function($scope, element, attr) {
      element.on('click', function() {
        var path = $location.path().slice(1);
        console.log(path);
        if (path === 'about') {
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
            }).then(function() {
              $location.hash('');
              $location.replace();
            });
          });
        }
      });
    }
  };
});