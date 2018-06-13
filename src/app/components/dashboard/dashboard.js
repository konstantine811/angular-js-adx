angular.module( 'ixlayer.dashboard', [
    'ui.router',
    'ui.bootstrap'
  ])
  
  .config(function config( $stateProvider ) {
    $stateProvider.state( 'master_signedin.dashboard', {
      url: '/dashboard',
      controller: 'DashboardCtrl',
      templateUrl: 'components/dashboard/dashboard.tpl.html',
      data:{ pageTitle: 'Dashboard' },
      resolve: {
        userInfo: ['userAccessSrv', function (userAccessSrv) {
          return userAccessSrv.currentUser() || userAccessSrv.autoLogin();
        }],
        profile: ['profileService', function (profileService) {
          return profileService.getProfile();
        }]
      }
    });
  })
  
  .controller( 'DashboardCtrl', ['$scope', 'profile', '$state', function DashboardCtrl( $scope, profile, $state) {
      var helix_profile = profile.helix_profile;
      $scope.status = helix_profile;

      if (helix_profile !== null && helix_profile.product_status.length > 0) {
        $state.go('master_signedin.results.status', {'id':1});
      } else {
        $state.go('master_signedin.results.pre-purchase', {'id':1});
      }

  }]);