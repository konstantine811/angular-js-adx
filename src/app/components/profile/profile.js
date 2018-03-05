angular.module( 'ixLayer.profile', [
    'ui.router',
    'placeholders',
    'ui.bootstrap',
    'ixlayer.api.profile'
  ])
  
  .config(function config( $stateProvider ) {

      var states;
      states = [
          {
              name: 'profile',
              url: '/profile/view',
              views: {
                  "main": {
                      controller: 'ProfileCtrl',
                      templateUrl: 'components/profile/profile.tpl.html'
                  }
              },
              resolve: {
                  userInfo: ['profileService', function (profileService) {
                      return profileService.getProfile();
                  }]
              },
              data: {pageTitle: 'Profile'}
          },
          {
              name: 'profileEdit',
              url: '/profile/edit',
              views: {
                  "main": {
                      controller: 'ProfileEditCtrl',
                      templateUrl: 'components/profile/profileEdit.tpl.html'
                  }
              },
              resolve: {
                  userInfo: ['profileService', function (profileService) {
                      return profileService.getProfile();
                  }]
              }
          }
      ];
    states.forEach(function(state) {
        $stateProvider.state(state);
    });
  })
  
  .controller( 'ProfileCtrl', ['$scope', 'userInfo', function ProfileCtrl( $scope, userInfo ) {
      $scope.user = userInfo.user;
  }]);