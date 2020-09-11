$( document ).ready(function() {
  // counter turnes red when the text is over 140 char
  $(".tweet-text").keyup(function(){
    let count = 140 -$(this).val().length;
   if (count >= 0) {
      $('.counter').removeClass("red");
    } else {
      $('.counter').addClass("red");
    }
    $('.counter').html(count);
  });
});