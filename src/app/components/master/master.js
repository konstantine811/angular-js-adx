angular.module( 'ixLayer.master', [
  'ui.router'
])

  .config(function config( $stateProvider ) {
  $stateProvider.state( 'master', {
    url: '',
    controller: 'MasterCtrl',
    templateUrl: 'components/master/master.tpl.html',
    abstract: true
  });
})

  .controller( 'MasterCtrl', ['$scope', '$location', '$state', '$rootScope', 'djangoAuth',  'userAccessSrv',
    function AppCtrl ( $scope, $location, $state, $rootScope, djangoAuth, userAccessSrv ) {

    $scope.logged = false;
    $scope.hideSideNavBar = true;

    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
      if ( angular.isDefined( toState.data.pageTitle ) ) {
        $scope.pageTitle = toState.data.pageTitle + ' | ixLayer' ;
      }
    });

    $scope.$watch(function() {
      return $location.path();
    }, function(value) {
      var path = value.slice(1);

      switch(path) {
        case 'home' :
          $scope.hideSideNavBar = false;
          break;
        case 'login' :
          $scope.hideSideNavBar = false;
          break;
        case 'register' :
          $scope.hideSideNavBar = false;
          break;
        case 'about' :
          $scope.hideSideNavBar = false;
          break;
        case 'products' :
          $scope.hideSideNavBar = false;
          break;
        case 'science' :
          $scope.hideSideNavBar = false;
          break;
        case 'FAQ' :
          $scope.hideSideNavBar = false;
          break;
        case 'contact' :
          $scope.hideSideNavBar = false;
          break;
        case 'legal' :
          $scope.hideSideNavBar = false;
          break;
        default:
          $scope.hideSideNavBar = true;
          break;
      }
    });


      $scope.logged = (function() {
      var token = djangoAuth.getToken();
      if(token) {
        return true;
      } else {
        return false;
      }
    }());

    $rootScope.$on("user_logged_in", function(data) {
      if(data) {
        $scope.logged = true;
      } else {
        $scope.logged = false;
      }
    });

    $rootScope.$on("user_logged_out", function(data) {
      if(data) {
        $scope.logged = false;
      } else {
        $scope.logged = true;
      }
    });
  }
  ]);