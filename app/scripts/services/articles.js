angular.module('mandysblogApp')
  .factory('ArticleService', function($http) {
     return {
       getArticles: function() {
         return $http.get('/ghost/api/v0.1/posts')
         .then(function(result) {
           return result.data;
         })
         .then(function(result) {
           angular.forEach(result.posts, function(post, key){
             post.parsed_html = $('<div/>').append(post.html);
             main_image = post.parsed_html.find('img')[0];
             intro_text = post.parsed_html.find('.intro_text').first();
             if(intro_text) {
                post.intro_text = intro_text.text();
                intro_text.remove();
             }
             if(main_image) {
                post.main_image_url = main_image.src;
                main_image.remove();
              }
           });
          return result;
         })
       }
     }
  });
