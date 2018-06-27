angular.module( 'ixlayer.results', [
  'ui.router',
  'ui.bootstrap',
  'ixlayer.api.results',
  'ngAnimate'
])
  .config(function config($stateProvider) {
    $stateProvider.state('master_signedin.results', {
      url: '/results/:page',
      controller: 'ResultsCtrl',
      templateUrl: 'components/results/results.tpl.html',
      data:{ pageTitle: 'Products Results' },
      abstract: false,
      resolve: {
        userInfo: ['userAccessSrv', function (userAccessSrv) {
          return userAccessSrv.currentUser() || userAccessSrv.autoLogin();
        }],
        product: ['productsService', '$stateParams', function (productsService, $stateParams) {
          return productsService.getProduct(parseInt(1));
        }],
        results: ['resultsService', '$stateParams', function (resultsService, $stateParams) {
          return resultsService.getResults(1);
        }]
      }
    });
  })

  .controller('ResultsCtrl', ['$scope', '$stateParams', '$state', 'resultsService', 'product', 'profileService', 'userInfo', '$window', 'results',
    function ResultsCtrl($scope, $stateParams, $state, resultsService, product, profileService, userInfo,  $window, results) {

      $scope.results = null;
      $scope.hasProducts = false;
      $scope.consentAgreed = false;
      $scope.resultReady = false;
      $scope.user = userInfo.user;
      $scope.showMobileMenu = false;

      $scope.showSubPages = function (page) {

        // figure out the current status
        $scope.profileLinked = $scope.profile.helix_profile !== null;
        if ($scope.profileLinked) {
          $scope.hasProducts = $scope.profile.helix_profile.product_status.length > 0;
          if ($scope.hasProducts) {
            $scope.consentAgreed = $scope.profile.helix_profile.product_status[0].product_consent_agreed_date !== null;
            if ($scope.consentAgreed)
            {
              $scope.resultReady = $scope.profile.helix_profile.product_status[0].product_status === 'result_ready';
            }
          }
        }

        $scope.resultReady = true;

        // figure out what to show based on the current status
        if ($scope.resultReady) {
          if (!$scope.consentAgreed) {
            $scope.page = 'consent';
          } else {
            if ($stateParams.page !== '') {
              $scope.page = $stateParams.page;
            } else {
              $scope.page = 'p1';
            }
            $scope.$parent.showResults = true;
            $scope.$parent.menuTitle = 'Results';
            $scope.$parent.isResultsActive = true;
          }
        } else if ($scope.hasProducts && !$scope.resultReady) {
          $scope.page = 'sequencing-status';
          $scope.$parent.showResults = false;
          $scope.$parent.menuTitle = 'Home';
          $scope.$parent.isResultsActive = true;
        } else if (!$scope.hasProducts) {
          $scope.page = 'pre-purchase';
          $scope.$parent.showResults = false;
          $scope.$parent.menuTitle = 'Home';
          $scope.$parent.isResultsActive = true;
        }

        // status specific
        if (['sharing', 'science', 'questions'].includes($scope.page)) {
          $scope.$parent.isResultsActive = false;
        }
        if ($scope.page === 'sequencing-status') {
          var productStatus = profile.helix_profile.product_status[0];
          $scope.schedule_link = 'https://gc.pwnhealth.com/c/intake/partners/affirmativdx/new?confirmation_code=' +
            productStatus.custom_data['confirmation_code'] + '&req_number=' +
            productStatus.custom_data['requisition_num'] + '&service_id=results-delivery-30&state_id=';
          if (results.length > 0) {
            $scope.download_link = results[0].report;
          } else {
            $scope.download_link = '';
          }
          switch (productStatus.product_status) {
            case 'ldt_submitted':
              break;
            case 'ldt_approved':
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
      };

      $scope.reloadProfile = function (page) {
        profileService.getProfile().then(function (result){
          $scope.profile = result;
          $scope.showSubPages(page);
        });
      };

      $scope.viewResultsClicked = function(consentResults) {
        if(consentResults.checkReview && consentResults.checkUnderstood)  {
          resultsService.postConsentProduct(1);
          $scope.needPopup = false;
          $scope.consentAgreed = true;

          $window.scrollTo(0,0);
          $scope.reloadProfile('p1');
        } else {
          $scope.consentAgreed = false;
        }
      };

      $scope.reloadProfile($scope.page);

      //tabs results
      $scope.tab = 1;

      $scope.setTab = function(newTab){
        $scope.tab = newTab;
      };

      $scope.isSet = function(tabNum){
        return $scope.tab === tabNum;
      };

    }]);
