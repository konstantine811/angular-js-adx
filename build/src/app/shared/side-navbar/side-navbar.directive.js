angular.module("ixLayer")
// footer height
  .directive('appSideNavbar', function() {
    return {
      templateUrl: "shared/side-navbar/side-navbar.tpl.html",
      controller: ['$scope', '$rootScope', 'userAccessSrv', function($scope, $rootScope, userAccessSrv) {

        $scope.logout = function() {
          $rootScope.$broadcast("user_logged_out");
          userAccessSrv.logout();
          $scope.logged = false;
        };
      }]
    };

  });