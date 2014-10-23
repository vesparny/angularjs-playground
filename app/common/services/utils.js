(function() {
  'use strict';

  function utils($http) {
    return {
      deepCopy: function(obj) {
        return JSON.parse(JSON.stringify(obj));
      }
    };
  }
  angular.module('services.utils', [])
    .factory('Utils', utils);
})();
