(function() {
  "use strict";

  function config($stateProvider) {
    $stateProvider
      .state('root', {
        url: '',
        abstract: true,
        views: {
          'header': {
            templateUrl: 'app/common/header.tpl.html',
            controller: 'HeaderCtrl'
          }
        }
      })
      .state('root.home', {
        url: '/',
        views: {
          '@': {
            templateUrl: 'app/home/home.tpl.html',
            controller: 'HomeCtrl as home',
            resolve: {
              data: function(DataService){
                return DataService.get('data.json');
              }
            }
          }
        }
      });
  }

  function homeCtrl(data) {
    /*jshint validthis:true */
    var home = this;
    this.data = data.data;
  }

  angular.module('home', [])
    .config(config)
    .controller('HomeCtrl', homeCtrl);
})();
