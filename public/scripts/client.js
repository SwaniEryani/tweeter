/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData =[
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];
// $(document).ready( () => {
// const createTweetElement= function (tweetData){
//   const name = tweetData.user.name;
//   const text = tweetData.content.text;
//   const avatars = tweetData.user.avatars;
//   const handle = tweetData.user.handle;
//   const created_at = tweetData.created_at;
//   const content =`<article class="tweets-article">
//   <header class="tweets-header">
//     <span>
//       <img src="${avatars}">
//       <label>
//         ${name}
//       </label>
//     </span>
//     <span class="handle">
//       ${handle}
//     </span>
//   </header>
 
//   <p class ="tweet-content">
//     ${text}
//   </p>
//   <footer class ="tweets-footer">
//     <span>10 days ago</span>
//     <span class= "icons">
//       <a href=""></a><i class= "fa fa-flag"></i></a>
//       <a href=""></a><i class= "fa fa-retweet"></i></a>
//       <a href=""></a><i class= "fa fa-heart"></i></a>
//     </span>
//   </footer>
// </article>`;

// return content;
// };

// const renderTweets = function(tweets) {
//   for( const user in tweets){
//   const $tweet = createTweetElement(tweetData);
//   $('#tweets-container').append($tweet);
//   }
// }

//   renderTweets (tweetData);
// });

const renderTweets = function(tweetData) {
  for( const tweet of tweetData){
    const $tweet = createTweetElement(tweet);
    $('#tweets-container').append($tweet);
    }
};

const createTweetElement = function(tweet) {
  let name = tweet.user.name;
  let text = tweet.content.text;
  let avatars = tweet.user.avatars;
  let handle = tweet.user.handle;
  let today = new Date();
  let created_at = today - tweet.created_at;
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
    ${text}
  </p>
  <footer class ="tweets-footer">
    <span>${created_at} days ago</span>
    <span class= "icons">
      <a href=""></a><i class= "fa fa-flag"></i></a>
      <a href=""></a><i class= "fa fa-retweet"></i></a>
      <a href=""></a><i class= "fa fa-heart"></i></a>
    </span>
  </footer>
</article>`;
  return $tweet;
};

$(document).ready( () => {
renderTweets(tweetData);
});