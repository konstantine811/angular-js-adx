angular.module( 'ixLayer.dashboard', [
    'ui.router',
    'placeholders',
    'ui.bootstrap'
  ])
  
  .config(function config( $stateProvider ) {
    $stateProvider.state( 'dashboard', {
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
  
  .controller( 'DashboardCtrl', ['$scope', 'profile', function DashboardCtrl( $scope, profile) {
      var helix_profile = profile.helix_profile;
      $scope.status = helix_profile;
  }]);