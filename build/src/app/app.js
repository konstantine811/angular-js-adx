angular.module( 'ixLayer', [
  'templates-app',
  'ixlayer.config.restangular',
  'ixlayer.config',
  'ixlayer.config.routing',
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

  .controller( 'AppCtrl', ['$scope', '$location', '$state', '$rootScope', 'djangoAuth',  'userAccessSrv', function AppCtrl ( $scope, $location, $state, $rootScope, djangoAuth, userAccessSrv ) {
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
      if ( angular.isDefined( toState.data.pageTitle ) ) {
        $scope.pageTitle = toState.data.pageTitle + ' | ixLayer' ;
      }
    });


    $scope.logged = false;
    $scope.hideSideNavBar = true;

    $scope.$watch(function() {
      return $location.path();
    }, function(value) {
      var path = value.slice(1);
      switch(path) {
        case 'home' :
          $scope.hideSideNavBar = false;
          break;
        default:
          $scope.hideSideNavBar = true;
          break;
      }
    });


      $scope.logged = (function() {
      var token = djangoAuth.getToken();
      if(token) {
        return true;
      } else {
        return false;
      }
    }());

    $rootScope.$on("user_logged_in", function(data) {
      if(data) {
        $scope.logged = true;
      } else {
        $scope.logged = false;
      }
    });

    $rootScope.$on("user_logged_out", function(data) {
      if(data) {
        $scope.logged = false;
      } else {
        $scope.logged = true;
      }
    });
  }
  ]);

// global error handling goes here
angular.module('exceptionOverride', []).factory('$exceptionHandler', function() {
  return function(exception, cause) {
    exception.message += ' (caused by "' + cause + '")';
    throw exception;
  };

});
