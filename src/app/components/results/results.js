angular.module( 'ixLayer.results', [
  'ui.router',
  'ui.bootstrap',
  'ixlayer.api.results',
  'ngAnimate',
  'gridshore.c3js.chart'
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
        product: ['productsService', '$stateParams', function (productsService, $stateParams) {
          return productsService.getProduct(parseInt($stateParams.id));
        }],
        productStatus: ['productsService', '$stateParams', function (productsService, $stateParams) {
          return productsService.getProductStatus(parseInt($stateParams.id));
        }]
      }
    })
      .state('results.p1', {
        url: '/p1',
        templateUrl: 'components/results/pages/result-p1.tpl.html'
      })
      .state('results.p2', {
        url: '/p2',
        templateUrl: 'components/results/pages/result-p2.tpl.html'
      });
  })
  .controller('ResultsCtrl', ['$scope', '$stateParams', '$state', 'resultsService', 'product', 'productStatus',
    function ResultsCtrl($scope, $stateParams, $state, resultsService, product, productStatus) {

      $scope.results = null;
      console.log(productStatus);
      $scope.noProducts = productStatus === undefined;

      if ($scope.noProducts === false) {
        $scope.consentAgreed = (productStatus.product_consent_agreed_date !== null);
      } else {
        $scope.consentAgreed = false;
      }
      if ($scope.consentAgreed) {
        $scope.needPopup = false;
      } else {
        $scope.needPopup = product.product_consent_needed;
      }

      $scope.$watch('consentAgreed', function () {
        if ($scope.consentAgreed) {
          resultsService.getResults(parseInt($stateParams.id)).then(function (result) {
            $scope.results = result;
          });
        }
      });

      $scope.agree = function(checked) {
        if(checked)  {
          var id = $stateParams.id;
          resultsService.postConsentProduct(id);
          $scope.needPopup = false;
          $scope.consentAgreed = true;
        } else {
          $scope.consentAgreed = false;
        }
      };

      $scope.noAgree = function() {
        $scope.needPopup = false;
        $scope.consentAgreed = false;
      };

      //this is test logic for template and deleted after markup tpl step...
      $scope.preResult = true;
      $scope.preResultSumbit = function() {
        $state.go('results.p1');
        $scope.preResult = false;
      };

    }]);
