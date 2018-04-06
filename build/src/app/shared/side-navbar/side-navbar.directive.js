angular.module("ixLayer")
// footer height
  .directive('appSideNavbar', function() {
    return {
      templateUrl: "shared/side-navbar/side-navbar.tpl.html",
      controller: ['$scope', '$rootScope', 'djangoAuth',  'userAccessSrv', function($scope, $rootScope, djangoAuth, userAccessSrv) {

        $scope.logged = false;
        $scope.showUserInfo = false;

        $scope.logged = function() {
          var token = djangoAuth.getToken();
          if(token) {
            return true;
          } else {
            return false;
          }
        };

        $rootScope.$on("user_logged_in", function(data) {
          if(data) {
            $scope.logged = true;
          } else {
            $scope.logged = false;
          }
        });

        $scope.logout = function() {
          userAccessSrv.logout();
          $scope.logged = false;
        };

      }]
    };

  });