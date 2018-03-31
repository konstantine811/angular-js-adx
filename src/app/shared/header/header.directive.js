angular.module("ixLayer")
  .directive('appHeader', function() {
    return {
      templateUrl: "shared/header/header.tpl.html",
      controller: ['$scope', '$location', function($scope, $location) {
          $scope.title = function() {
            var path = $location.$$path.substring(1);
            var title;
            switch(path) {
              case 'home':
                title = 'Title of page';
                break;
              case 'about':
                title = 'Overview';
                break;
              case 'profile/view':
                title = 'Users';
                break;
              case 'dashboard':
                title = 'Customizations';
                break;
              default:
                title = 'Title of page';
            }
            return title;
          };
      }]
    };
  });