angular.module( 'ixLayer.dashboard', [
    'ui.router',
    'placeholders',
    'ui.bootstrap'
  ])
  
  .config(function config( $stateProvider ) {
    $stateProvider.state( 'dashboard', {
      url: '/dashboard',
      controller: 'DashboardCtrl',
      templateUrl: 'components/dashboard/dashboard.tpl.html',
      data:{ pageTitle: 'Dashboard' }
    });
  })
  
  .controller( 'DashboardCtrl', function DashboardCtrl( $scope ) {
    
  });