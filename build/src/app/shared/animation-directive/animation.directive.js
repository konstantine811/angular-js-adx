angular.module("ixLayer")
  .directive('animationOnChange', ['timeout',
    function($timeout) {
    
    return function(scope, element, attr) {
     scope.$watch(attr.animationOnChange, function(nv, ov) {
       if(nv!=ov) {
         element.addClass('changed');
         $timeout(function() {
           element.removeClass('changed');
         }, 0);
       }
     });
    };
  }]);