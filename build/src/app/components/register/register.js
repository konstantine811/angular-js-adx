angular.module( 'ixLayer.register', [
    'ui.router',
    'ixlayer.djangoAuth',
    'ui.bootstrap',
    'ngAnimate'
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
    });
  })
  
  .controller( 'RegisterCtrl', ['$scope', 'userAccessSrv',  function RegisterCtrl($scope, userAccessSrv) {
    var vm = $scope;

    vm.complete = false;
    vm.errors = null;
    vm.showPopup = false;
    vm.notChecked = false;


    vm.submitForm = function (form) {
      vm.showPopup = true;
      vm.signConsent = function() {
        vm.showPopup = false;
        userAccessSrv.register(form.first_name, form.last_name,
          form.email, form.password,
          {'consent': 1, 'terms': 1}).then(function (result) {
          vm.complete = true;
        }, function (error) {
          vm.errors = error;
          console.log(vm.errors);
        });
      };
    };



  }]);