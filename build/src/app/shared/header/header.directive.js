angular.module("ixLayer")
  // footer height
  .directive('appHeader', function() {
    return {
      templateUrl: "shared/header/header.tpl.html",
      controller: ['$scope', 'djangoAuth', 'userAccessSrv', function($scope, djangoAuth, userAccessSrv) {

        $scope.logged = function() {
          var token = djangoAuth.getToken();
          if(token) {
            return true;
          } else {
            return false;
          }
        };

        $scope.logout = function() {
          userAccessSrv.logout();
          $scope.logged = false;
        };
      }]
    };
  });