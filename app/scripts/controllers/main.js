'use strict';
angular.module('mandysblogApp')
.controller('MainCtrl', function ($scope,ArticleService) {
  ArticleService.getArticles($scope).then(function(promise) {
    $scope.articles  =  promise;
  });
});

