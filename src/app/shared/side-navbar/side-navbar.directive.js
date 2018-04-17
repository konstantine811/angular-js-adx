angular.module("ixLayer")
// footer height
  .directive('appSideNavbar', function() {
    return {
      templateUrl: "shared/side-navbar/side-navbar.tpl.html",
      controller: ['$scope', '$rootScope', '$state', 'userAccessSrv', function($scope, $rootScope, $state, userAccessSrv) {

        $scope.logout = function() {
          $rootScope.$broadcast("user_logged_out");
          userAccessSrv.logout();
          $scope.logged = false;
          $state.go('about');
        };
      }]
    };

  });