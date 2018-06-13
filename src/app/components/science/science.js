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

  .controller( 'ScienceCtrl', ['$scope', function ProductsCtrl( $scope) {

    $scope.$watch('active', function(newIndex, oldIndex) {
      if (Number.isFinite(newIndex) && newIndex!==oldIndex) {
        $scope.slideIndex = newIndex + 1;
      }
    });

  }]);