angular.module( 'ixlayer.register', [
  'ui.router',
  'ixlayer.djangoAuth',
  'ui.bootstrap',
  'ngAnimate'
])
  .config(function config( $stateProvider ) {
    $stateProvider.state( 'master.register', {
      url: '/register',
      controller: 'RegisterCtrl',
      templateUrl: 'components/register/register.tpl.html',
      data:{ pageTitle: 'Register' },
      params: {
        complete: false,
        errors: null
      }
    });
  })

  .controller( 'RegisterCtrl', ['$scope', 'userAccessSrv',  function RegisterCtrl($scope, userAccessSrv) {
    $scope.complete = false;
    $scope.error = null;
    $scope.showPopup = false;
    $scope.notChecked = false;

    $scope.submitForm = function (form) {
      $scope.showPopup = true;
      $scope.submitConsent = function() {
        $scope.showPopup = false;
        userAccessSrv.register(form.first_name, form.last_name, form.email, form.password,  {'consent': 1, 'terms': 1}).then(function (result) {
          $scope.complete = true;
        }, function (error) {
            if (error.status === 0) {
              $scope.error = {detail:  'Please check your Internet connection.'};
            } else
            {
              $scope.error = error;
            }
        });
      };
    };

  }]);