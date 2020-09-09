$( document ).ready(function() {

  $("#tweet-text").keyup(function(){
    let count = 140 -$(this).val().length

   
   if (count >= 0) {
    $('.counter').removeClass("red");
  } else {
    $('.counter').addClass("red");
  }
  $('.counter').html(count);
});
});