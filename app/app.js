(function() {
  "use strict";

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
  });

  function config($stateProvider, $urlRouterProvider, $logProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');
    $logProvider.debugEnabled(true);
    $httpProvider.interceptors.push("httpInterceptor");
  }

  function run($log) {
    $log.debug('App is running!');
  }

  angular.module('app', [
    'ui.router',
    'home',
    'miscellanoeous',
    'header',
    'services.http',
    'services.utils',
    'interceptors.http',
    'directives.version',
    'directives.percentage',
    'directives.rating',
    'filters.uppercase'
  ])
  .config(config)
  .run(run)
  .value('version','0.0.1');
})();
