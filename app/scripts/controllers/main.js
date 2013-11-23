'use strict';

angular.module('mandysblogApp')
  .controller('MainCtrl', function ($scope,ArticleService) {
   ArticleService.getArticles().then(function(promise) {
      $scope.articles  =  promise.posts
    });
  });
