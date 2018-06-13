angular.module( 'ixlayer.about', [
  'ui.router',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'master.about', {
    url: '/about',
    controller: 'AboutCtrl',
    templateUrl: 'components/about/about.tpl.html',
    data:{ pageTitle: 'About' }
  });
})

.controller( 'AboutCtrl', ['$scope', function AboutCtrl( $scope ) {
}]);
