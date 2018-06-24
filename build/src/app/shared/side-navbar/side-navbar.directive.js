angular.module("ixLayer")
// footer height
  .directive('appSideNavbar', function() {
    return {
      templateUrl: "shared/side-navbar/side-navbar.tpl.html",
      controller: ['$scope', '$rootScope', '$state', '$location', '$stateParams', 'userAccessSrv', 'profileService', '$q',
        function($scope, $rootScope, $state, $location, $stateParams, userAccessSrv, profileService, $q) {

          var defer = $q.defer();
          defer.resolve( userAccessSrv.currentUser() || userAccessSrv.autoLogin());

          defer.promise.then(function(data) {
            $scope.user = data.user;
          });

          var status = 'pre-purchase';
          $scope.showResults = false;
          $scope.activeHome = false;

          if (status === 'results') {
            $scope.showResults = true;
            $scope.activeHome = false;
          } else {
            $scope.showResults = false;
            $scope.activeHome = true;
          }

          $scope.homeTransition = function(e) {
            e.preventDefault();
            switch (status) {
              case 'pre-purchase':
                $state.go('master_signedin.results.pre-purchase');
                $scope.showResults = false;
                $scope.activeHome = true;
                break;
              case 'status-kit':
                $state.go('master_signedin.results.status');
                $scope.showResults = false;
                $scope.activeHome = true;
                break;
              case 'results':
                $state.go('master_signedin.results.p1');
                $scope.showResults = true;
                $scope.activeHome = false;
                break;
            }
          };

          $scope.clickedResults = function() {
            $scope.activeHome = false;
          };

          $scope.$watch(function() {
            return $stateParams.title;
          }, function(value) {
            $scope.statusTitle = value;
          });


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