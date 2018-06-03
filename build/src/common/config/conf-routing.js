
angular.module( 'ixlayer.config.routing', [
  'restangular',
  'ui.router',
  'ixlayer.useraccess'
])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {
  $urlRouterProvider.otherwise('/login');

  $locationProvider.html5Mode(true);

}])


.run( ['$transitions', '$window', function run ($transitions, $window) {

  //Scroll to top on each state
  $transitions.onSuccess({}, function() {
    $window.scrollTo(0,0);
  });

}])

// Migrate to: UI-Router 1.0 Trace service
.run(function($trace) {
  $trace.enable('TRANSITION');
});