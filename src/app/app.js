angular.module( 'ixLayer', [
  'templates-app',
  'ixlayer.config.restangular',
  'ixlayer.config',
  'ixlayer.config.routing',
  'ixlayer.master',
  'ixlayer.header',
  'ixlayer.home',
  'ixlayer.about',
  'ixlayer.products',
  'ixlayer.FAQ',
  'ixlayer.contact',
  'ixlayer.register',
  'ixlayer.profile',
  'ixlayer.login',
  'ixlayer.legal',
  'ixlayer.references',
  'ixlayer.dashboard',
  'ixlayer.verifyemail',
  'ixlayer.forgotpassword',
  'ixlayer.changepassword',
  'ixlayer.results',
  'ixlayer.science',
  'ui.router',
  'ngAnimate',
  'angular-google-analytics',
  'updateMeta',
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

.config(['AnalyticsProvider', function (AnalyticsProvider) {
   // Add configuration code as desired
   AnalyticsProvider.setAccount('UA-113183089-2');
   AnalyticsProvider.trackPages(true);
}]).run(['Analytics', function(Analytics) { }])

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

