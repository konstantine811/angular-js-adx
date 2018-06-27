angular.module( 'ixlayer.profile', [
  'ixlayer.api.profile',
  'ixlayer.useraccess',
  'ui.router',
  'ui.bootstrap'
])

  .config(function config( $stateProvider ) {

    var states;
    states = [
      {
        name: 'master_signedin.profile',
        url: '/profile/view',
        controller: 'ProfileViewCtrl',
        templateUrl: 'components/profile/profileView.tpl.html',
        resolve: {
          userInfo: ['userAccessSrv', function (userAccessSrv) {
            return userAccessSrv.currentUser() || userAccessSrv.autoLogin();
          }],
          profile: ['profileService', function (profileService) {
            return profileService.getProfile();
          }]
        },
        data: {pageTitle: 'View Profile'},
        params: {
          title: "Account info"
        }
      },
      {
        name: 'master_signedin.profileEdit',
        url: '/profile/edit',
        controller: 'ProfileEditCtrl',
        templateUrl: 'components/profile/profileEdit.tpl.html',
        resolve: {
          userInfo: ['userAccessSrv', function (userAccessSrv) {
            return userAccessSrv.currentUser() || userAccessSrv.autoLogin();
          }],
          profile: ['profileService', function (profileService) {
            return profileService.getProfile();
          }]
        },
        data: {pageTitle: 'Edit Profile'},
        params: {
          title: "Personal info"
        }
      }
    ];
    states.forEach(function(state) {
      $stateProvider.state(state);
    });
  })

  .controller('ProfileViewCtrl', ['$scope', 'profile',
    function ProfileViewCtrl($scope, profile) {
    $scope.profile = profile;

  }])

  .controller('ProfileEditCtrl', ['$scope', '$state', 'profile', 'profileService',
    function ProfileEditCtrl($scope, $state, profile, profileService) {

    $scope.profile = profile;

    $scope.submitForm = function(data) {
      profileService.updateProfile(data).then(function(result) {
        $state.go('master_signedin.profile');
      });
    };

  }]);