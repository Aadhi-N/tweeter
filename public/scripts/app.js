
$(document).ready(function() {
  // Toggle element when compose button clicked
  $("button").click(function() {
    $(".new-tweet").slideToggle("fast");
    $("textarea").focus();
  });

  // Form submission error handling
  $("form").submit(function(event) {
    event.preventDefault();
    let textarea = $("form textarea");
    if (textarea.val() == "" || textarea.val() == null) {
      alert("Please enter some text!");
    } else if (textarea.val().length > 140) {
      alert("Your comment is too long!")
    } else {
      $.ajax({
        type: "POST",
        url: "/tweets",
        data: $(this).serialize(),
        success: function(data) {
          $("main .container").empty();
          $("textarea").val("");
          loadTweets(); //this makes the new tweet show up on the page. 
        }
      }); 
    }
  }); 

  // GET request to load tweets 
  function loadTweets() {
    $.ajax({
      type: "GET",
      url: "/tweets",
      success: function (tweets) {
        renderTweets(tweets);
      }
    });
  };
  loadTweets() // when document loads, GET tweets
});

// Function that generates HTML for tweet tile to render
function createTweetElement(tweet) {
  let $tweet = `
    <article class="tweet">
      <header>
        <img class="user" src="${tweet.user.avatars.small}">
        <h2>${tweet.user.name}</h2>
        <span class="handle">${tweet.user.handle}</span>
      </header>
      <p>${escape(tweet.content.text)}</p>
      <footer>
        <i class="fas fa-heart"></i>
        <i class="fas fa-share-alt"></i>
        <i class="fas fa-flag"></i>
        <h5>${convertDate(tweet.created_at)}</h5>
      </footer>
    </article>
    `
    return $tweet;
};

// Append new div containing tweet content
function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

// Generate HTML for rendered tweets
function renderTweets(tweets) {
  $("#tweets-container").empty();
  tweets.forEach(tweet => {
    const eachTweet = createTweetElement(tweet);
    $("#tweets-container").prepend(eachTweet);
  });
};

// Format timestamp for tweets
function convertDate(timestamp) {
  const today = new Date(timestamp);
  return today.toLocaleString();
};
