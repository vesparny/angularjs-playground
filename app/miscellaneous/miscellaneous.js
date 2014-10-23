(function() {
  "use strict";

  function config($stateProvider) {
    $stateProvider
      .state('miscellaneous', {
        url: 'miscellaneous',
        abstract: true,
        views: {
          'header': {
            templateUrl: 'app/common/header.tpl.html',
            controller: 'HeaderCtrl'
          }
        }
      })
      .state('root.miscellaneous', {
        url: '/miscellaneous',
        views: {
          '@': {
            templateUrl: 'app/miscellaneous/miscellaneous.tpl.html',
            controller: 'MiscellaneousCtrl as miscellaneous'
          }
        }
      });
  }

  function miscellaneousCtrl($log, $scope) {
    /*jshint validthis:true */
    var miscellaneous = this;
    miscellaneous.data = {};
    miscellaneous.data.percentage = 10;

    miscellaneous.data.rating = 7;
    miscellaneous.data.rating1 = 4;
    miscellaneous.doSomethingWithRating = function(rating) {
      $log.debug('Rating selected - ' + rating);
    };

    miscellaneous.submit = function() {
      if ($scope.form.$valid) {
        $log.debug('sumitted');
      } else {
        $log.error('invalid');
      }
    };
  }

  angular.module('miscellanoeous', [])
    .config(config)
    .controller('MiscellaneousCtrl', miscellaneousCtrl);
})();
