angular.module("ixLayer")
  .directive('animationOnChange', function($timeout) {
    return function(scope, element, attr) {
     scope.$watch(attr.animationOnChange, function(nv, ov) {
       console.log(nv + ' :nv');
       console.log(ov + ' : ov');
       if(nv!=ov) {
         element.addClass('changed');
         $timeout(function() {
           element.removeClass('changed');
         }, 0);
       }
     });
    };
  });