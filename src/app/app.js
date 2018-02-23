angular.module( 'ixLayer', [
  'templates-app',
  'ixLayer.home',
  'ixLayer.about',
  'ixLayer.products',
  'ixLayer.FAQ',
  'ixLayer.contact',
  'ixLayer.auth',
  'ixLayer.profile',
  'ixLayer.login',
  'ixLayer.legal',
  'ixLayer.dashboard',
  'ixLayer.verifyEmail',
  'ixLayer.forgotPassword',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ixLayer' ;
    }
  });
})

;