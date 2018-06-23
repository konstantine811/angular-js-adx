angular.module( 'ixlayer.errorhandling', [
  'restangular'
])

  .service('errorHandler',['Restangular', '$timeout', function (Restangular, $timeout){

    var ERROR_TIMEOUT_MS = 2000;

    var self = this;

    this.error = {
      displayMessage : null
    };

    var timeoutPromise = null;
    var hasConnectionError = false;

    function resetAutoCleanup() {
      $timeout.cancel(timeoutPromise);
      timeoutPromise = $timeout(function(){
        self.error.displayMessage = null;
      },ERROR_TIMEOUT_MS);
    }

    function setError(error) {
      self.error.displayMessage = error;
    }

    this.showError = function(error, autoClear) {
      setError(error);
      if (autoClear) {
        resetAutoCleanup();
      }
    };

    this.cleanError = function(){
      self.error.displayMessage = null;
      hasConnectionError = false;
      $timeout.cancel(timeoutPromise);
    };


    this.showConnectionError = function() {
      if (!hasConnectionError) {
        hasConnectionError = true;
        var errorMessage = "Please check your internet connection.";
        setError(errorMessage);
      }
    };

    this.cleanConnectionError = function() {
      if (hasConnectionError) {
        self.cleanError();
      }
    };

  }]);
