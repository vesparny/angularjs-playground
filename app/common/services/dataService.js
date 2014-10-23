(function() {
  'use strict';

  var STORAGE_ID = 'app-';

  function dataServiceProvider() {
    var forceLocal;
    // this is configurable in module config by calling DataServiceProvider.forceLocalStorage(val);
    this.forceLocalStorage = function(val) {
      forceLocal = val;
    };

    this.$get = ['$injector', function($injector) {
      if (forceLocal) {
        return $injector.get('DataServiceLocalStorageImpl');
      } else {
        return $injector.get('DataServiceHttpImpl');
      }
    }];

  }

  function dataServiceHttpImpl($http) {
    return {
      get: function(url) {
        return $http.get('/' + url);
      },
      post: function(url, data) {
        return $http.post('/+' + url, data);
      }
    };
  }


  function dataServiceLocalStorageImpl($q, $timeout) {
    return {
      get: function() {
        var deferred = $q.defer();

        $timeout(function() {
          var data = JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
          deferred.resolve(data);
        }, 200);

        return deferred.promise;
      },
      post: function(elems) {
        var deferred = $q.defer();
        $timeout(function() {
          localStorage.setItem(STORAGE_ID, JSON.stringify(elems));
          deferred.resolve();
        }, 200);

        return deferred.promise;
      }
    };
  }

  angular.module('services.data', [])
    .provider('DataService', dataServiceProvider)
    .factory('DataServiceHttpImpl', dataServiceHttpImpl)
    .factory('DataServiceLocalStorageImpl', dataServiceLocalStorageImpl);
})();
