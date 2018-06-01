angular.module( 'ixLayer.science', [
  'ui.router',
  'ui.bootstrap',
  'ngAnimate'
])
  .config(function config($stateProvider) {
    $stateProvider.state('science', {
      url: '/science',
      controller: 'ScienceCtrl',
      templateUrl: 'components/science/science.tpl.html',
      data: {pageTitle: 'Science'}
    });
  })

  .controller( 'ScienceCtrl', ['$scope', function ProductsCtrl( $scope) {

  }]);