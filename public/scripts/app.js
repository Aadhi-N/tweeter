$(document).ready(function() {
  

  $("form").submit(function(event) {
    event.preventDefault();

    $.ajax({
      type: "POST",
      url: "/tweets",
      data: $(this).serialize(),
      success: function(data) {
        loadTweets();
      }

    });
  }); //bracket for form.submit

  function loadTweets() {
      $.ajax({
        type: "GET",
        url: "/tweets",
        success: function (tweets) {
          renderTweets(tweets);
        }
      });
  }


});//bracket closing document.ready



function createTweetElement (tweet) {
  let $tweet = `<article class="tweet">
    <header>
    <img class="user" src="${tweet.user.avatars.small}">
    <h2>${tweet.user.name}</h2>
    <span class="handle">${tweet.user.handle}</span>
    </header>
    <p>${tweet.content.text}</p>
    <footer>
    <i class="fas fa-heart"></i>
    <i class="fas fa-share-alt"></i>
    <i class="fas fa-flag"></i>
    <h5>${tweet.created_at}</h5>
    </footer>
    
    </article>`

    return $tweet;

};

function renderTweets(tweets) {
  for (var i = 0; i < tweets.length; i++) {
    var $tweet = createTweetElement(tweets[i]);
    $('#tweets-container').append($tweet);
  }
}


