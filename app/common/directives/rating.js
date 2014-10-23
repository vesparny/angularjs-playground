/*
inspired by http://www.befundoo.com/university/tutorials/angularjs-directives-tutorial/
*/
(function() {
  'use strict';

  function ratingDirective() {
    return {
      restrict: 'A',
      template: [
        '<ul class="rating">',
        '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">',
        '\u2605',
        '</li>',
        '</ul>',
      ].join(''),
      scope: {
        ratingValue: '=',
        max: '=',
        readonly: '@',
        onRatingSelected: '&'
      },
      link: function(scope, elem, attrs) {
        var updateStars = function() {
          scope.stars = [];
          for (var i = 0; i < scope.max; i++) {
            scope.stars.push({
              filled: i < scope.ratingValue
            });
          }
        };

        scope.toggle = function(index) {
          if (scope.readonly && scope.readonly === 'true') {
            return;
          }
          scope.ratingValue = index + 1;
          scope.onRatingSelected({
            rating: index + 1
          });
        };

        scope.$watch('ratingValue', function(newVal, oldVal) {
          if (newVal || newVal === 0) {
            updateStars();
          }
        });
      }
    };
  }

  angular.module('directives.rating', [])
    .directive('rating', ratingDirective);
})();
