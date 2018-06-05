angular.module( 'ixLayer.results', [
  'ui.router',
  'ui.bootstrap',
  'ixlayer.api.results',
  'ngAnimate'
])
  .config(function config($stateProvider) {
      $stateProvider.state('master_signedin.results', {
      url: '/results/:id',
      controller: 'ResultsCtrl',
      templateUrl: 'components/results/results.tpl.html',
      data:{ pageTitle: 'Products Results' },
      params : {
        title: 'Pre-result'
      },
      abstract: false,
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
      .state('master_signedin.results.status', {
        url: '/status',
        templateUrl: 'components/products/pages/sequencingStatus.tpl.html',
        resolve: {
          userInfo: ['userAccessSrv', function (userAccessSrv) {
            return userAccessSrv.currentUser() || userAccessSrv.autoLogin();
          }],
          profile: ['profileService', function (profileService) {
            return profileService.getProfile();
          }]
        },
        params : {
          title: 'Current status'
        }
      })
      .state('master_signedin.results.pre-purchase', {
        url: '/pre-purchase',
        templateUrl: 'components/products/pages/prePurchase.tpl.html',
        params : {
          title: 'Pre-purchase'
        }
      })
      .state('home.results.pre', {
        url: '/pre',
        templateUrl: 'components/results/pages/pre-result.tpl.html',
        params: {
          title: 'Pre-result'
        }
      })
      .state('home.results.p1', {
        url: '/p1',
        templateUrl: 'components/results/pages/result-p1.tpl.html',
        params: {
          title: 'Your result'
        }
      })
      .state('home.results.p2', {
        url: '/p2',
        templateUrl: 'components/results/pages/result-p2.tpl.html',
        params: {
          title: 'About'
        }
      })
      .state('home.results.p3', {
        url: '/p3',
        templateUrl: 'components/results/pages/result-p3.tpl.html',
        params: {
          title: 'Lifestyle'
        }
      })
      .state('home.results.p4', {
      url: '/p4',
      templateUrl: 'components/results/pages/result-p4.tpl.html',
        params: {
          title: 'Next steps'
        }
      })
      .state('home.results.science', {
        url: '/science',
        templateUrl: 'components/results/pages/result-science.tpl.html',
        params: {
          title: 'Science'
        }
      })
      .state('home.results.sharing', {
        url: '/sharing',
        templateUrl: 'components/results/pages/result-sharing.tpl.html',
        params: {
          title: 'Share results'
        }
      })
      .state('home.results.questions', {
        url: '/questions',
        templateUrl: 'components/results/pages/result-questions.tpl.html',
        params: {
          title: 'General questions'
        }
      })
      .state('home.results.view', {
        url: '/view',
        templateUrl: 'components/results/pages/result-view.tpl.html',
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


      //tabs results
      $scope.tab = 1;

      $scope.setTab = function(newTab){
        $scope.tab = newTab;
      };

      $scope.isSet = function(tabNum){
        return $scope.tab === tabNum;
      };

    }]);
