(function() {
  "use strict";

  function httpService($http) {
    return {
      get: function(url) {
        return $http.get('/' + url);
      },
      post: function(url, data) {
        return $http.post('/' + url, data);
      }
    };
  }
  angular.module('services.http', [])
    .factory('HttpService', httpService);
})();
