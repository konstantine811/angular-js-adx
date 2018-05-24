angular.module("ixLayer")
// footer height
  .directive('appSideNavbar', function() {
    return {
      templateUrl: "shared/side-navbar/side-navbar.tpl.html",
      controller: ['$scope', '$rootScope', '$state', '$location', '$stateParams', 'userAccessSrv', 'profileService', '$q', function($scope, $rootScope, $state, $location, $stateParams, userAccessSrv, profileService, $q) {

        var defer = $q.defer();
        defer.resolve( userAccessSrv.currentUser() || userAccessSrv.autoLogin());

       defer.promise.then(function(data) {
         $scope.user = data.user;
       });

       $scope.$watch(function() {
         return $stateParams.title;
       }, function(value) {
         $scope.statusTitle = value;
       });


        $scope.logout = function() {
          $rootScope.$broadcast("user_logged_out");
          userAccessSrv.logout();
          $scope.logged = false;
        };

        $scope.show = false;
        $scope.showMenu = function() {
          if (!$scope.show) {
            $scope.show = true;
          } else {
            $scope.show = false;
          }
        };
      }]
    };

  });