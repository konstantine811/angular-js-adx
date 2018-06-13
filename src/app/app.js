angular.module( 'ixLayer', [
  'templates-app',
  'ixlayer.config.restangular',
  'ixlayer.config',
  'ixlayer.config.routing',
  'ixlayer.master',
  'ixlayer.home',
  'ixlayer.about',
  'ixlayer.products',
  'ixlayer.FAQ',
  'ixlayer.contact',
  'ixlayer.register',
  'ixlayer.profile',
  'ixlayer.login',
  'ixlayer.legal',
  'ixlayer.dashboard',
  'ixlayer.verifyemail',
  'ixlayer.forgotpassword',
  'ixlayer.changepassword',
  'ixlayer.results',
  'ixlayer.science',
  'ui.router',
  'ngAnimate',
  'ui.bootstrap'
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



.run( function run () {
})

  .controller( 'AppCtrl', ['$scope', '$location', '$state', '$rootScope', 'djangoAuth',  'userAccessSrv',
    function AppCtrl ( $scope, $location, $state, $rootScope, djangoAuth, userAccessSrv ) {
    }
  ]);

// global error handling goes here
angular.module('exceptionOverride', []).factory('$exceptionHandler', function() {
  return function(exception, cause) {
    exception.message += ' (caused by "' + cause + '")';
    throw exception;
  };

});
