angular.module( 'ixLayer.register', [
    'ui.router',
    'ixlayer.djangoAuth',
    'placeholders',
    'ui.bootstrap'
  ])
  
  .config(function config( $stateProvider ) {
    $stateProvider.state( 'register', {
      url: '/register',
      views: {
        "main": {
          controller: 'RegisterCtrl',
          templateUrl: 'components/register/register.tpl.html'
        }
      },
      data:{ pageTitle: 'Register' }
    });
  })
  
  .controller( 'RegisterCtrl', ['$scope', 'userAccessSrv', function RegisterCtrl($scope, userAccessSrv) {

    $scope.complete = false;
    $scope.errors = null;

    $scope.submitForm = function (form) {
      userAccessSrv.register(form.first_name, form.last_name,
                             form.email, form.password,
                             {'consent':1, 'terms':1}).then(function(result) {
        $scope.complete = true;

      }, function(error) {
        $scope.errors = error;
      });
    };

  }]);