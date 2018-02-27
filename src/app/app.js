angular.module( 'ixLayer', [
  'templates-app',
  'ixlayer.config.restangular',
  'ixlayer.config',
  'ixLayer.home',
  'ixLayer.about',
  'ixLayer.products',
  'ixLayer.FAQ',
  'ixLayer.contact',
  'ixLayer.register',
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

// @if ENVIRONMENT == 'PROD'
.config( function() {
  Raven.config('https://8dd8866b009e4720929420b24d838f1f@sentry.io/292860',{
    ignoreErrors: [
      // Random plugins/extensions
      'top.GLOBALS',
      // See: http://blog.errorception.com/2012/03/tale-of-unfindable-js-error. html
      'originalCreateNotification',
      'ERR_INTERNET_DISCONNECTED'
    ],
    tags: {
      application: 'ixlayer-web-angular'
    }
  }).install();
})
// @endif

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ixLayer' ;
    }
  });
});

// global error handling goes here
angular.module('exceptionOverride', []).factory('$exceptionHandler', function() {
  return function(exception, cause) {
    exception.message += ' (caused by "' + cause + '")';
    throw exception;
  };

});
