angular.module( 'ixLayer.results', [
  'ui.router',
  'ui.bootstrap',
  'ixlayer.api.results',
  'ngAnimate'
])
  .config(function config($stateProvider) {
    $stateProvider.state('results', {
      url: '/results/:id',
      controller: 'ResultsCtrl',
      templateUrl: 'components/results/results.tpl.html',
      data:{ pageTitle: 'Products Results' },
      params : {
        title: 'Pre-result'
      },
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
        templateUrl: 'components/results/pages/result-p1.tpl.html',
        params: {
          title: 'Your result'
        }
      })
      .state('results.p2', {
        url: '/p2',
        templateUrl: 'components/results/pages/result-p2.tpl.html',
        params: {
          title: 'About'
        }
      })
      .state('results.p3', {
        url: '/p3',
        templateUrl: 'components/results/pages/result-p3.tpl.html',
        params: {
          title: 'Lifestyle'
        }
      })
      .state('results.p4', {
      url: '/p4',
      templateUrl: 'components/results/pages/result-p4.tpl.html',
        params: {
          title: 'Next steps'
        }
      })
      .state('results.p5', {
        url: '/p5',
        templateUrl: 'components/results/pages/result-p5.tpl.html',
        params: {
          title: 'Science'
        }
      })
      .state('results.p6', {
        url: '/p6',
        templateUrl: 'components/results/pages/result-p6.tpl.html',
        params: {
          title: 'Share results'
        }
      })
      .state('results.p7', {
        url: '/p7',
        templateUrl: 'components/results/pages/result-p7.tpl.html',
        params: {
          title: 'General questions'
        }
      })
      .state('results.p8', {
        url: '/p8',
        templateUrl: 'components/results/pages/result-p8.tpl.html',
        params: {
          title: 'Welcome'
        }
      });
  })
  .controller('ResultsCtrl', ['$scope', '$stateParams', '$state', 'resultsService', 'product', 'productStatus', 'userInfo',
    function ResultsCtrl($scope, $stateParams, $state, resultsService, product, productStatus, userInfo) {

      $scope.results = null;
      $scope.user = userInfo.user;
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
