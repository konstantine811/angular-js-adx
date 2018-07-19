angular.module( 'ixlayer.register', [
  'ui.router',
  'ixlayer.djangoAuth',
  'ui.bootstrap',
  'ngAnimate'
])
  .config(function config( $stateProvider ) {
    $stateProvider.state( 'master.register_with_key', {
      url: '/register/:activation_key',
      controller: 'RegisterCtrl',
      templateUrl: 'components/register/register.tpl.html',
      data:{ pageTitle: 'Register' }
    });
    $stateProvider.state( 'master.register', {
      url: '/register',
      controller: 'RegisterCtrl',
      templateUrl: 'components/register/register.tpl.html',
      data:{ pageTitle: 'Register' },
    });
  })

  .controller( 'RegisterCtrl', ['$scope', 'userAccessSrv', '$stateParams', 'Analytics',
    function RegisterCtrl($scope, userAccessSrv, $stateParams, Analytics) {
    $scope.complete = false;
    $scope.error = null;
    $scope.showPopup = false;
    $scope.notChecked = false;

    $scope.hasToken = $stateParams.activation_key !== "";
    $scope.token = $scope.hasToken? $stateParams.activation_key : null;

    $scope.submitForm = function (form) {
      $scope.showPopup = true;
      $scope.submitConsent = function() {
        $scope.showPopup = false;
        userAccessSrv.register(form.first_name, form.last_name, form.email, form.password,  {
          'consent': 1,
          'terms': 1,
          'token': $scope.token
        } ).then(function (result) {
          $scope.complete = true;
          Analytics.trackEvent('register', { hasToken: $scope.hasToken});
        }, function (error) {
            if (error.status === 0) {
              $scope.error = {detail:  'Please check your Internet connection.'};
            } else
            {
              $scope.error = {detail: error[0]};
            }
        });
      };
    };

  }]);