(function() {
  "use strict";

  function httpInterceptor($q, $log) {
    return {
      request: function(config) {
        $log.debug(config);
        return config;
      },
      requestError: function(rejection) {
        $log.debug(rejection);
        return $q.reject(rejection);
      },
      response: function(response) {
        $log.debug(response);
        return response;
      },
      responseError: function(rejection) {
        $log.debug(rejection);
        return $q.reject(rejection);
      }
    };
  }
  
  angular.module('interceptors.http', [])
    .factory('httpInterceptor', httpInterceptor);
})();
