angular.module('ixLayer')
  .directive('map', function() {
    return {
     restrict: 'E',
     template: '<div></div>',
     replace: true,
     link: function(scope, element, attrs) {
       var map, infoWindow;
       var markers = [];

       // map config
       var mapOptions = {
         center: new google.maps.LatLng(48.779812, -122.491211),
         zoom: 17,
         mapTypeId: google.maps.MapTypeId.ROADMAP,
         scrollwheel: false,
         zoomControl: true,
         ZoomControlOptions: {

         },
         mapTypeControl: false,
         scaleControl: false,
         streetViewControl:false,
         fullscreenControl: false
       };

       // init the map
       function initMap() {
         if (map === void 0) {
           map = new google.maps.Map(element[0], mapOptions);
         }
       }

       // show the map and place some markers
       initMap();
     }
    };
  });