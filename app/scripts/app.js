'use strict';

angular.module('mandysblogApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/metropolitan/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/overview', {
        templateUrl: '/metropolitan/views/overview.html',
        controller: 'OverviewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
