angular.module( 'ixLayer', [
  'templates-app',
  'ixlayer.config.restangular',
  'ixLayer.home',
  'ixLayer.about',
  'ixLayer.products',
  'ixLayer.FAQ',
  'ixLayer.contact',
  'ixLayer.auth',
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