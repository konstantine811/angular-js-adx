angular.module( 'ixlayer.config', [
  'ui.bootstrap'
])

.config(function($locationProvider) {
  $locationProvider.hashPrefix('');
});
