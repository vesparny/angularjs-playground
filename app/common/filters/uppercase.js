(function() {
  'use strict';

  function uppercase() {
    return function(text) {
      return text ? text.toUpperCase() : text;
    };
  }

  angular.module('filters.uppercase', [])
    .filter('uppercase', uppercase);
})();
