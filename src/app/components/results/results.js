angular.module( 'ixLayer.results', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'ixlayer.api.results',
  'ngAnimate',
  'ngScrollbar'
])
  .config(function config($stateProvider) {
    $stateProvider.state('results', {
      url: '/results/:id',
      controller: 'ResultsCtrl',
      templateUrl: 'components/results/results.tpl.html',
      data:{ pageTitle: 'Products Results' },
      resolve: {
        userInfo: ['userAccessSrv', function (userAccessSrv) {
          return userAccessSrv.currentUser() || userAccessSrv.autoLogin();
        }],
        results: ['resultsService', '$stateParams', function(resultsService, $stateParams) {
          return resultsService.getResults($stateParams.id);
        }]
      }
    });
  })
  .controller('ResultsCtrl', ['$scope', '$stateParams', 'resultsService', 'results', function ProductResultsCtrl($scope, $stateParams, resultsService, results) {

    $scope.notChecked = false;
    $scope.showPopup = false;

    $scope.showingPopup = function() {
      $scope.showPopup = true;
      $scope.agree = function(checked) {
        if(checked)  {
          var id = $stateParams.id;
          resultsService.postConsentProduct(id);
          $scope.showPopup = false;
          $scope.notChecked = false;
        } else {
          $scope.notChecked = true;
        }
      };
    };

    $scope.noAgree = function() {
      $scope.showPopup = false;
      $scope.notChecked = false;
    };

}]);