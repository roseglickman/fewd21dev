$(document).ready(function() {
   
   $('.post1 .readMore').click(function(e) {
    e.preventDefault ();
    $('.post1 p').css('height', 'auto');
    $('.post1 .readMore').hide();
    $('.post1 .readLess').show();
   });

   $('.post1 .readLess').click(function(e) {
    e.preventDefault();
    $('.post1 p').css('height', '102px');
    $('.post1 .readLess').hide();
    $('.post1 .readMore').show();
   });

   $('.post2 .readMore').click(function(e) {
    e.preventDefault ();
    $('.post2 p').css('height', 'auto');
    $('.post2 .readMore').hide();
    $('.post2 .readLess').show();
   });

   $('.post2 .readLess').click(function(e) {
    e.preventDefault();
    $('.post2 p').css('height', '102px');
    $('.post2 .readLess').hide();
    $('.post2 .readMore').show();
   });

   $('.relaxrBlurb .learnMore').click(function(e) {
    e.preventDefault ();
    $('.relaxrBlurb p').css('height', 'auto');
    $('.relaxrBlurb .learnMore').hide();
   });


});



