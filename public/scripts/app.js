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


  function loadTweets() {
      $.ajax({
        type: "GET",
        url: "/tweets",
        success: function (tweets) {
          renderTweets(tweets);
        }
      });
  }

  loadTweets()


});//bracket closing document.ready



function createTweetElement (tweet) {
  let $tweet = `<article class="tweet">
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
    <h5>${tweet.created_at}</h5>
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
   // for (var i = tweets.length; i > 0; --i) {
    var $tweet = createTweetElement(tweets[i]);
    $('#tweets-container').prepend($tweet);
  }
};

// function convertDate() {
//   var unixTime = ${tweet.created_at};
//   var day = unixTime.getDate();
//   console.log(day);
// }