  function createTweetElement(tweet) {
    // let $tweet = $('<article>').addClass('tweet');
    let $tweet = `<article class="tweet">
    <header>
    <img class="user" src="/images/user.png">
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


  // console.log($tweet);




  function renderTweets(tweets) {
    for (i = 0; i < tweets.length; i++) { 
      var $tweet = createTweetElement(tweets[i]);
      $("#tweets-container").append($tweet); 
    }
  };


  


  const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
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
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
    ];


    $(document).ready(function() {

      renderTweets(data);

    });


