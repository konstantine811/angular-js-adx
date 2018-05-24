angular.module('ixlayer.api.location', [
  'ui.router'
])
  .factory('locationService', ['$location', '$state', function($location, $state) {

    var getLocation = function() {
      console.log('sdfsdf');
      console.log($state);
    };


    return {
      getLocation: getLocation
    };
  }]);