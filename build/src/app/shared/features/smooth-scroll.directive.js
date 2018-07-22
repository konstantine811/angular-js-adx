angular.module("ixLayer").
  directive('smoothScroll', [function() {
    return {
      restrict: 'A',
      scope: {
        'model': '='
      },
      link: function() {
        $('a[href*=\\#]').on('click', function(event){
          event.preventDefault();
          $('html,body').animate({scrollTop:$(this.hash).offset().top-100}, 200);
        });
      }
    };
}]);