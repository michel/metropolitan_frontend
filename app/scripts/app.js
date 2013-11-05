'use strict';

angular.module('mandysblogApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/overview', {
        templateUrl: 'views/overview.html',
        controller: 'OverviewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
