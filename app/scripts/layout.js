$(function() {
  $(window).scroll(function() {
    if($(document).scrollTop() > 100) {
      if($('body').hasClass('big')) {
        $('body').removeClass('big');
        $('body').addClass('small');
      }
    }
    else {
      if($('body').hasClass('small')) {
        $('body').removeClass('small');
        $('body').addClass('big');
      }
    }
  });
});

