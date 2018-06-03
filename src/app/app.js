angular.module( 'ixLayer', [
  'templates-app',
  'ixlayer.config.restangular',
  'ixlayer.config',
  'ixlayer.config.routing',
  'ixLayer.master',
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
  'ixLayer.changePassword',
  'ixLayer.results',
  'ixLayer.science',
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



.run( function run ($rootScope, $document, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $rootScope.$on('$stateChangeSuccess', function() {
    $document[0].body.scrollTop = $document[0].documentElement.scrollTop = 0;
  });
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
