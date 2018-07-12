angular.module( 'ixlayer.config', [
  'ui.bootstrap'
])

  .config(function($locationProvider) {
    $locationProvider.hashPrefix('');
  })

  .constant('globals', function() {
    return {
      order_url_with_kit: 'https://www.helix.com',
      order_url_without_kit: 'https://www.helix.com',
    };
  })

  .constant('appConfig', (function() {

    var config = {};

    // The global appConfig is loaded from the "env.js" in the "index.js". This is how the "build time configuration" is loaded.
    if(window.appConfig) {
      Object.assign(config, window.appConfig);
      config.restAPIBaseUrl = config.schema + '://' + config.host + '/api';
      config.socketUrl = config.websocketSchema + '://' + config.host + '/ws';
    }

    return config;
  })());