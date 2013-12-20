//angular.module('mandysblogApp')
//.factory('ArticleService', function($http) {
//return {
//getArticles: function() {
//return $http.get('/ghost/api/v0.1/posts')
//.then(function(result) {
//return result.data;
//})
//.then(function(result) {
//angular.forEach(result.posts, function(post, key){
//post.parsed_html = $('<div/>').append(post.html);
//main_image = post.parsed_html.find('img')[0];
//intro_text = post.parsed_html.find('.intro_text').first();
//if(intro_text) {
//post.intro_text = intro_text.text();
//intro_text.remove();
//}
//if(main_image) {
//post.main_image_url = main_image.src;
//main_image.remove();
//}
//});
//return result;
//})
//}
//}
//});

angular.module('mandysblogApp')
.factory('ArticleService', function($http,$q) {
  return {
    parseArticles: function(xml_node) {
        parsed_html = $('<div>').append($(xml_node).html())
        result = [];
        $.each($(parsed_html).find('post'), function(key, postNode){
          postNode = $(postNode);
          post = {};
          post.parsed_html = $('<div>').append(postNode.find('html_content').contents());
          main_image = post.parsed_html.find('img')[0];
          intro_text = post.parsed_html.find('.intro_text').first();
          published_at = postNode.find('published_at');
          title = postNode.find('title');
          if(title) {
            post.title = $.trim(title.text());
          }
          if(published_at) {
            post.published_at = Date.parse(published_at.text());
          }
          if(intro_text) {
            post.intro_text = $.trim(intro_text.text());
            intro_text.remove();
          }
          if(main_image) {
            post.main_image_url = main_image.src;
            main_image.remove();
          }
          result.push(post);
        });
        var deferred = $q.defer();
        deferred.resolve(result);
        return deferred.promise;
    },

    getArticles: function(scope) {
      _this = this;
      doc = $(document).find('script#posts');
      if(doc.length > 0) {
        return _this.parseArticles(doc);
      }
      return $http.get('/')
      .then(function(result) {
        return result.data;
      })
      .then(function(result) {
        xml_node = $.filter('script#posts', $.parseHTML(result))[0];
        return _this.parseArticles(xml_node);
      })
    }
  }
});
