angular.module( 'ixlayer.master', [
  'ui.router'
])

  .config(function config( $stateProvider ) {
    $stateProvider.state( 'master', {
      url: '',
      controller: 'MasterCtrl',
      templateUrl: 'components/master/master.tpl.html',
      abstract: true
    });
  })
  .config(function config( $stateProvider ) {
    $stateProvider.state( 'master_signedin', {
      url: '',
      controller: 'MasterCtrl',
      templateUrl: 'components/master/master_signedin.tpl.html',
      abstract: true
    });
  })

  .controller( 'MasterCtrl', ['$scope', '$location', '$state', '$rootScope', '$transitions', '$window', 'djangoAuth',  'userAccessSrv', 'errorHandler',
    function MasterCtrl ( $scope, $location, $state, $rootScope, $transitions, $window, djangoAuth, userAccessSrv, errorHandler ) {

      $scope.logged = false;
      $scope.hideSideNavBar = true;
      $scope.showFooter = true;

       $transitions.onSuccess('transition', function (transition) {
            var title = transition.to().data.pageTitle;
            if (title) {
                if (title instanceof Function) {
                    title = title.call(transition.to(), transition.params());
                }
                $window.document.title = title + ' | ADX Healthcare';
            }
        });

      $scope.$watch(function() {
        return $location.path();
      }, function(value) {
        var pathArray = value.split("/");
        var path = pathArray[1];
        switch(path) {
          case 'home' :
            $scope.hideSideNavBar = false;
            $scope.showFooter = true;
            break;
          case 'login' :
            $scope.hideSideNavBar = false;
            $scope.showFooter = false;
            break;
          case 'forgot-password' :
            $scope.hideSideNavBar = false;
            $scope.showFooter = false;
            break;
          case 'verify-email':
            $scope.hideSideNavBar = false;
            $scope.showFooter = false;
            break;
          case 'register' :
            $scope.hideSideNavBar = false;
            $scope.showFooter = false;
            break;
          case 'about' :
            $scope.hideSideNavBar = false;
            $scope.showFooter = true;
            break;
          case 'products' :
            $scope.hideSideNavBar = false;
            $scope.showFooter = true;
            break;
          case 'science' :
            $scope.hideSideNavBar = false;
            $scope.showFooter = true;
            break;
          case 'FAQ' :
            $scope.hideSideNavBar = false;
            $scope.showFooter = true;
            break;
          case 'contact' :
            $scope.hideSideNavBar = false;
            $scope.showFooter = true;
            break;
          case 'legal' :
            $scope.hideSideNavBar = false;
            $scope.showFooter = true;
            break;
          default:
            $scope.hideSideNavBar = true;
            $scope.showFooter = true;
            break;
        }
      });


      $scope.error = errorHandler.error;

      $scope.closeError = function () {
        errorHandler.cleanError();
      };

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