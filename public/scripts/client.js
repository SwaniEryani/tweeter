/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/
const escape = function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

const renderTweets = function(tweetData) {
  const $continer = $('#tweets-container');
  $continer.empty();
  for (const tweet of tweetData) {
    const $tweet = createTweetElement(tweet);
    $('#tweets-container').prepend($tweet);
  }
};

const createTweetElement = function (tweet) {
  let name = tweet.user.name;
  let text = tweet.content.text;
  let avatars = tweet.user.avatars;
  let handle = tweet.user.handle;
  let today = new Date();
  let created = tweet.created_at;
  const diffTime = Math.abs(today - created);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  let $tweet = `<article class="tweets-article">
        <header class="tweets-header">
          <span>
            <img src="${avatars}">
            <label>
              ${name}
            </label>
          </span>
          <span class="handle">
            ${handle}
          </span>
        </header>
      
        <p class ="tweet-content">
          ${escape(text)}
        </p>
        <footer class ="tweets-footer">
          <span>${diffDays} days ago</span>
          <span class= "icons">
            <a href=""></a><i class= "fa fa-flag"></i></a>
            <a href=""></a><i class= "fa fa-retweet"></i></a>
            <a href=""></a><i class= "fa fa-heart"></i></a>
          </span>
        </footer>
      </article>`;
  return $tweet;
};
const loadTweets = function() {
  $.get('/tweets', function() {
    $.ajax({
      url: '/tweets',
      method: 'GET'
    }).then((tweet) => renderTweets(tweet));
  });

};
// any post needs a get :P
//
// function getTweets() {
//   $.ajax({
//     url: '/tweets',
//     method: 'GET'
//     }).then((tweet)=>createTweetElement(tweet));
// }


$(document).ready(() => {

  $('.new-tweet').css('visibility', 'hidden');
  $('.new-tweet').slideUp();
  $('#Toggle-Button').css('visibility', 'hidden');
  $('#error-continare').slideUp();
  $('.tweet-form').on('submit', (evt) => {
    evt.preventDefault();
    //ajax POST request
    let val = $('.tweet-text').val();
    if (val.length <= 140 && val.length > 0) {
      $.ajax({
        url: '/tweets',
        method: 'POST',
        data: $(".tweet-form").serialize()
      }).then(function () {
        loadTweets();
        $('.tweet-text').val('');
        $('#error-continare-').slideUp();
        $('#error-continare').empty();
        $('.counter').html('140');
      }).catch(e => {//.reject (new Error('fail'));
        alert('<h1>SOMETHING WENT WRONG!!</h1>');
      });
    } else if (val === "" || val === null) {

      $('#error-continare').slideDown();
      $('#error-continare').html('<p class = "error">🤓🤓Where is the tweet I can\'t see it?  </p>');

    } else if (val.length > 140) {
      $('#error-continare').slideDown();
      $('#error-continare').html('<p class = "error">😫😫Oh! no I can\'t remember all of this. Please make it shorter! </p>');
    }

  });
  // event handler for composer to show the form
  $('.left-nav').on('click', function() {
    if ($('.new-tweet').css('visibility') === 'visible'){
      $('.new-tweet').css('visibility', 'hidden');
      $('.new-tweet').slideUp();
    }else {
      $('.new-tweet').css('visibility', 'visible');
      $('.tweet-text').focus();
      $('.new-tweet').slideDown();
    }
    
  });

  // event handler for toggling compose button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#Toggle-Button').css('visibility', 'visible');
      $('#Toggle-Button').fadeIn();
    } else {
      $('#Toggle-Button').css('visibility', 'hidden');
      $('#Toggle-Button').fadeOut();
    }
  });

  //Click event to scroll to top
  $('#Toggle-Button').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });
  loadTweets();
});

