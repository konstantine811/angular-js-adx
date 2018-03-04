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
              url: '/profile',
              views: {
                  "main": {
                      controller: 'ProfileCtrl',
                      templateUrl: 'components/profile/profile.tpl.html'
                  }
              },
              data: {pageTitle: 'Profile'},
              resolve: {
                  userInfo: ['profileService', function (profileService) {
                      return profileService.getProfile();
                  }]
              }
          },
          {
              name: 'profile.profileView',
              url: '/view',
              views: {
                  "content@": {
                      controller: 'ProfileViewCtrl',
                      templateUrl: 'components/profile-view/profileView.html'
                  }
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