(function() {
  'use strict';

  function percentage(version) {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attr, ngModel) {
        function fromUser(text) {
          return text.replace('%', '');
        }

        function toUser(text) {
          return text + '%';
        }

        ngModel.$parsers.push(fromUser);
        ngModel.$formatters.push(toUser);

        element.on('change', function() {
          element.val(element.val().replace('%', '') + '%');
        });
      }
    };
  }

  angular.module('directives.percentage', [])
    .directive('percentage', percentage);
})();
