angular.module( 'ixLayer.dashboard', [
    'ui.router',
    'placeholders',
    'ui.bootstrap'
  ])
  
  .config(function config( $stateProvider ) {
    $stateProvider.state( 'dashboard', {
      url: '/dashboard',
      views: {
        "main": {
          controller: 'DashboardCtrl',
          templateUrl: 'components/dashboard/dashboard.tpl.html'
        }
      },
      data:{ pageTitle: 'Dashboard' }
    });
  })
  
  .controller( 'DashboardCtrl', function DashboardCtrl( $scope ) {
    
  });