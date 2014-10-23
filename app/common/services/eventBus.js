(function() {
  'use strict';

  function eventBus($rootScope) {
    var eb = {};
    eb.emit = function(msg, data) {
      data = data || {};
      $rootScope.$emit(msg, data);
    };
    eb.on = function(msg, func, scope) {
      var unbind = $rootScope.$on(msg, func);
      if (scope) {
        scope.$on('$destroy', unbind);
      }
    };
    return eb;
  }

  angular.module('services.enventBus', [])
    .factory('EventBus', eventBus);
})();
