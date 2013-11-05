$(function() {
  $(window).scroll(function() {
    if($(document).scrollTop() > 100) {
      if($('header').hasClass('big')) {
        $('header').removeClass('big');
        $('header').addClass('small');
        console.log('small');
      }
    }
    else {
      if($('header').hasClass('small')) {
        $('header').removeClass('small');
        $('header').addClass('big');
        console.log('big');
      }
    }
  });
});

