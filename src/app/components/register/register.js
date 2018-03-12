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
    });
  })
  
  .controller( 'RegisterCtrl', ['$scope', 'userAccessSrv',  function RegisterCtrl($scope, userAccessSrv) {
    var $ctrl = this;
    var vm = $scope;

    vm.complete = false;
    vm.errors = null;
    vm.showPopup = false;

    $ctrl.submitForm = function (form) {
      vm.showPopup = true;
      $ctrl.agree = function() {
        if($ctrl.checked) {
          vm.showPopup = false;
          userAccessSrv.register(form.first_name, form.last_name,
            form.email, form.password,
            {'consent':1, 'terms':1}).then(function(result) {
            vm.complete = true;
          }, function(error) {
            vm.errors = error;
          });
        } else {
          vm.notChecked = true;
        }
      };
    };


    $ctrl.noAgree = function() {
      vm.showPopup = false;
    };

  }]);