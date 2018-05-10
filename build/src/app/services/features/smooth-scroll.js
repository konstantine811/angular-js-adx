

  angular.module('anchorSmoothScroll', []).service('anchorSmoothScroll', ['$document', function($document){

    this.scrollTo = function(eID) {

      // This scrolling function
      // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript

      var startY = currentYPosition();
      var stopY = elmYPosition(eID);

      // setTimeout(window.scrollTo(0, 8000), 1000);
      var distance = stopY > startY ? stopY - startY : startY - stopY;
      if (distance < 100) {
        scrollTo(0, stopY);
        return;
      }
      var speed = Math.round(distance / 100);
      console.log(speed);
      if (speed >= 20) {
        speed = 1000;
      }
      var step = Math.round(distance / 25);
      var leapY = stopY > startY ? startY + step : startY - step;
      var timer = 1;
      console.log(speed);
      if (stopY > startY) {
        for (var i = startY; i < stopY; i += step ) {
          console.log(timer * speed);
          setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
          leapY += step;
          if (leapY > stopY) {
            leapY = stopY; timer++;
          }
        }
        return;
      } else {
        for (var n = startY; n > stopY; n -= step ) {
          setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
          leapY -= step;
          if (leapY < stopY) {
            leapY = stopY; timer++;
          }
        }
      }

      function currentYPosition() {
        // Firefox, Chrome, Opera, Safari
        if (self.pageYOffset) {
          return self.pageYOffset;
        }
        // Internet Explorer 6 - standards mode
        if (document.documentElement && document.documentElement.scrollTop) {
          return (document.documentElement.scrollTop);
        }
        // Internet Explorer 6, 7 and 8
        if (document.body.scrollTop)  {
          return document.body.scrollTop;
        }
        return 0;
      }

      function elmYPosition(eID) {
        var elm = $document[0].getElementById(eID);
        var y = elm.offsetTop;
        var node = elm;
        while (node.offsetParent && node.offsetParent != $document.body) {
          node = node.offsetParent;
          y += node.offsetTop;
        } return y;
      }

    };

  }]);