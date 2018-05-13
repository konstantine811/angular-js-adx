angular.module("ixLayer")
// footer height
  .directive('appSideNavbar', function() {
    return {
      templateUrl: "shared/side-navbar/side-navbar.tpl.html",
      controller: ['$scope', '$rootScope', '$state', 'userAccessSrv', 'profileService', '$q', function($scope, $rootScope, $state, userAccessSrv, profileService, $q) {

        var defer = $q.defer();
        defer.resolve( userAccessSrv.currentUser() || userAccessSrv.autoLogin());

       defer.promise.then(function(data) {
         $scope.user = data.user;
       });

        $scope.logout = function() {
          $rootScope.$broadcast("user_logged_out");
          userAccessSrv.logout();
          $scope.logged = false;
        };
      }]
    };

  });