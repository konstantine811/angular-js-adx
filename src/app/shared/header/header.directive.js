angular.module("ixLayer")
  // footer height
  .directive('appHeader', function() {
    return {
      templateUrl: "shared/header/header.tpl.html",
      controller: ['$scope', '$rootScope', 'userAccessSrv', function($scope, $rootScope, userAccessSrv) {

        $scope.logged = false;
        $rootScope.$on("user_logged_in", function(event, data) {
          if(data.token) {
            $scope.logged = true;
          }
        });

        $scope.logout = function(event) {
          userAccessSrv.logout();
          $scope.logged = false;
        };
      }]
    };
  });