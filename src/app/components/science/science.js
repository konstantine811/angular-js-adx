angular.module( 'ixlayer.science', [
  'ui.router',
  'ui.bootstrap',
  'ngAnimate'
])
  .config(function config($stateProvider) {
    $stateProvider.state('master.science', {
      url: '/science',
      controller: 'ScienceCtrl',
      templateUrl: 'components/science/science.tpl.html',
      data: {pageTitle: 'Science'}
    });
  })

  .controller( 'ScienceCtrl', ['$scope', '$state', '$transitions', '$anchorScroll', '$location',
    function ProductsCtrl($scope, $state, $transitions, $anchorScroll, $location) {

    $scope.$watch('active', function(newIndex, oldIndex) {
      if (Number.isFinite(newIndex) && newIndex!==oldIndex) {
        $scope.slideIndex = newIndex + 1;
      }
    });

    $scope.refScroll = function($event, num) {
      $event.preventDefault();
      $state.go('master.references');
      $transitions.onSuccess({to: 'master.references'}, function(transitions) {
        $anchorScroll.yOffset = 200;
        transitions.promise.then(function() {
          $location.hash(num);
          $anchorScroll();
        });
      });
    };

  }]);