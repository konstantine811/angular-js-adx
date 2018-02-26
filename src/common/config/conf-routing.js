
angular.module( 'ixlayer.config.routing', [
  'restangular',
  'ui.router',
  'ixlayer.useraccess'
])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {
  $urlRouterProvider.otherwise('/login');

  $locationProvider.html5Mode(true);

}]);

