$(document).ready(function() {
  $("button").click(function() {
    $(".new-tweet").slideToggle("fast");
    $("textarea").focus();
  });

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
      }); //ajax bracket
    }
  }); //bracket for form.submit


});//bracket closing document.ready

function loadTweets() {
  $.ajax({
    type: "GET",
    url: "/tweets",
    success: function (tweets) {
      renderTweets(tweets);
      likeTweets();      
    }
  });
}

loadTweets()

function likeTweets() {
  $(".fa-heart").click(function() {
        console.log(clicks)
        $.ajax({
          type: "POST",
          url: "/tweets/likes",
          data: "tweetid=" + $(this).data("id"),
          success: function() {
            console.log("test")
            $("main .container").empty();
            loadTweets();
          }
        })
      });//closes fa-heart 
}


function createTweetElement (tweet) {
  let $tweet = `<article class="tweet">
  <header>
  <img class="user" src="${tweet.user.avatars.small}">
  <h2>${tweet.user.name}</h2>
  <span class="handle">${tweet.user.handle}</span>
  </header>
  <p>${escape(tweet.content.text)}</p>
  <footer>
  <i class="fas fa-heart" data-id=${tweet._id}></i>
  <p><a id="clicks">${tweet.likes}</a> Likes</p>
  <i class="fas fa-share-alt"></i>
  <i class="fas fa-flag"></i>
  <h5>${convertTime(tweet.created_at)}</h5>
  </footer>

  </article>`

  return $tweet;
};




function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}


function renderTweets(tweets) {
  for (var i = 0; i < tweets.length; i++) {
    var $tweet = createTweetElement(tweets[i]);
    $('#tweets-container').prepend($tweet);
  };
}


function convertTime(time) {
  return moment(time).startOf("minute").fromNow();
}



