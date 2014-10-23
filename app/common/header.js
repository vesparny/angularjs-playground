(function() {
  'use strict';

  function headerCtrl($log) {
    $log.debug('Header loaded');
  }

  angular.module('header', [])
    .controller('HeaderCtrl', headerCtrl);
})();
