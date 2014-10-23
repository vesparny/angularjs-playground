(function() {
  'use strict';

  function utils($http, $window) {
    return {
      deepCopy: function(obj) {
        return JSON.parse(JSON.stringify(obj));
      },
      alertError: function(msg) {
        return $window.alert(msg);
      }
    };
  }
  angular.module('services.utils', [])
    .factory('Utils', utils);
})();
