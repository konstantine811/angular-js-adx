angular.module( 'ixLayer.register', [
    'ui.router',
    'ixlayer.djangoAuth',
    'placeholders',
    'ui.bootstrap',
    'ngAnimate',
    'ngScrollbar'
  ])
  
  .config(function config( $stateProvider ) {
    $stateProvider.state( 'register', {
      url: '/register',
      controller: 'RegisterCtrl',
      templateUrl: 'components/register/register.tpl.html',
      data:{ pageTitle: 'Register' },
      params: {
        complete: false,
        errors: null
      }
    })
      .state('register.userConsent', {
        url: '/user-consent',
        controller: 'UserConsentCtrl',
        templateUrl: 'components/register/user-consent.tpl.html',
        data: { pageTitle: 'User Consent'},
        params: {
          form: ''
        }
      });
  })
  
  .controller( 'RegisterCtrl', ['$scope', '$stateParams', '$state', function RegisterCtrl($scope, $stateParams, $state) {

    $scope.complete = $stateParams.complete;
    $scope.errors = $stateParams.errors;
    console.log($scope.errors);

    $scope.submitForm = function (form) {
      $state.go('register.userConsent', {form: form });
    };

  }])
  .controller('UserConsentCtrl', ['$scope', '$stateParams', '$state', 'userAccessSrv', function UserConsentCtrl($scope, $stateParams, $state, userAccessSrv) {

    var $ctrl = this;
    $scope.checked = false;
    $scope.notChecked = false;


    $ctrl.agree = function() {
      if($scope.checked) {
        var form = $stateParams.form;
        userAccessSrv.register(form.first_name, form.last_name,
                               form.email, form.password,
                               {'consent':1, 'terms':1}).then(function(result) {
          $state.go('register', {complete: true});

        }, function(error) {
          $state.go('register', {errors: error});
        });
      } else {
        $scope.notChecked = true;
      }
    };

    $ctrl.noAgree = function() {
      $state.go('register', {complete: false});
    };

}]);