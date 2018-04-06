/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'ixLayer.home', [
  'ui.router'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    controller: 'HomeCtrl',
    templateUrl: 'components/home/home.tpl.html',
    data:{ pageTitle: 'Home'}
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', ['$scope', '$timeout', function HomeCtrl( $scope, $timeout ) {
  var chart = c3.generate({
    bindto: '#chart',
    size: {
      height: 42
    },
    data: {
      columns: [
      ],
      colors: {
        data: '#74DFFE'
      },
      types: {
        data: 'bar'
      }
    },
    legend: {
      show: false
    },
    axis: {
      x: {
        show: false
      },
      y: {
        show: false
      }
    },
    transition: {
      duration: 500
    }
  });

  $timeout(function() {
    chart.load({
      columns: [
        ['data', 30, 30, 20, 34, 43, 43, 23, 50, 34, 20, 54, 30, 53, 12]
      ]
    });
  }, 500);
}]);

