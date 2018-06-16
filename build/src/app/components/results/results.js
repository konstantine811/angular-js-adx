angular.module( 'ixlayer.results', [
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
        }],
        results: ['resultsService', '$stateParams', function (resultsService, $stateParams) {
          return resultsService.getResults(parseInt($stateParams.id));
        }]
      }
    })
      .state('master_signedin.results.status', {
        url: '/status',
        templateUrl: 'components/results/pages/sequencingStatus.tpl.html',
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
        templateUrl: 'components/results/pages/prePurchase.tpl.html',
        params : {
          title: 'Pre-purchase'
        }
      })
      .state('master_signedin.results.p1', {
        url: '/p1',
        templateUrl: 'components/results/pages/result-p1.tpl.html',
        params: {
          title: 'Your result'
        }
      })
      .state('master_signedin.results.p2', {
        url: '/p2',
        templateUrl: 'components/results/pages/result-p2.tpl.html',
        params: {
          title: 'About'
        }
      })
      .state('master_signedin.results.p3', {
        url: '/p3',
        templateUrl: 'components/results/pages/result-p3.tpl.html',
        params: {
          title: 'Lifestyle'
        }
      })
      .state('master_signedin.results.p4', {
        url: '/p4',
        templateUrl: 'components/results/pages/result-p4.tpl.html',
        params: {
          title: 'Next steps'
        }
      })
      .state('master_signedin.results.science', {
        url: '/science',
        templateUrl: 'components/results/pages/result-science.tpl.html',
        params: {
          title: 'Science'
        }
      })
      .state('master_signedin.results.sharing', {
        url: '/sharing',
        templateUrl: 'components/results/pages/result-sharing.tpl.html',
        params: {
          title: 'Family'
        }
      })
      .state('master_signedin.results.questions', {
        url: '/questions',
        templateUrl: 'components/results/pages/result-questions.tpl.html',
        params: {
          title: 'General questions'
        }
      })
      .state('master_signedin.results.view', {
        url: '/view',
        templateUrl: 'components/results/pages/result-view.tpl.html',
        params: {
          title: 'Welcome'
        }
      });
  })

  .controller('ResultsCtrl', ['$scope', '$stateParams', '$state', 'resultsService', 'product', 'productStatus', 'userInfo', '$window', 'results',
    function ResultsCtrl($scope, $stateParams, $state, resultsService, product, productStatus, userInfo,  $window, results) {


      $scope.results = null;
      $scope.user = userInfo.user;
      $scope.noProducts = productStatus === undefined;
      $scope.showResult = false;
      var userGender = userInfo.gender;

      // set tabs for genders
      if(userGender === 'male') {
        $scope.activeTabGender = 0;
      }
      else if (userGender === 'female') {
        $scope.activeTabGender = 1;
      }


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

      if (userInfo.helix_profile !== null) {
        $scope.seqStatus = userInfo.helix_profile.seq_status;
        switch (userInfo.helix_profile.seq_status) {
          /* TODO */
          case 'order_cancelled':
            break;
          case 'account_revoked':
            break;
          case 'account_closed':
            break;
          case 'physician_review': {
            $scope.iconStatus = [true, false, false, false, false, false];
            $scope.iconCurrent = [true, false, false, false, false, false];
            break;
          }
          case 'kit_registered': {
            $scope.iconStatus = [true, true, false, false, false, false];
            $scope.iconCurrent = [false, true, false, false, false, false];
            break;
          }
          case 'manifest_uploaded': {
            $scope.iconStatus = [true, true, true, false, false, false];
            $scope.iconCurrent = [false, false, true, false, false, false];
            break;
          }
          case 'dna_extraction_completed': {
            $scope.iconStatus = [true, true, true, true, false, false];
            $scope.iconCurrent = [false, false, false, true, false, false];
            break;
          }
          case 'dna_delivery_completed': {
            $scope.iconStatus = [true, true, true, true, true, false];
            $scope.iconCurrent = [false, false, false, false, true, false];
            break;
          }
          case 'result_ready': {
            $scope.iconStatus = [true, true, true, true, true, true];
            $scope.iconCurrent = [false, false, false, false, false, true];
            break;
          }
        }
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

      $scope.showResults = function() {
        $scope.showResult = true;
        $window.scrollTo(0,0);
      };

    }]);
