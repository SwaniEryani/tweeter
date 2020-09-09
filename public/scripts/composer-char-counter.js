$( document ).ready(function() {

  $("#tweet-text").keyup(function(){
    let count = 140 -$(this).val().length

   
   if (count >= 0) {
    $('.counter').html(count);
    $('.counter').removeClass("red");
  } else {
    $('.counter').html(count);
    $('.counter').addClass("red");
  }
});
});