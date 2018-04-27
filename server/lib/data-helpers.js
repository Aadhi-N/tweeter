"use strict";
var ObjectId = require("mongodb").ObjectID;

const simulateDelay = require("./util/simulate-delay");

module.exports = function makeDataHelpers(db) {
  return {

    saveTweet: function(newTweet, callback) {
        db.collection("tweets").insertOne(newTweet, callback); 
    },

    getTweets: function(callback) {
      db.collection("tweets").find().toArray(callback);
    },

    likeTweet: function(tweetid) {
      db.collection("tweets").update (
        {_id: new ObjectId(tweetid)},
        // [['_id', 'asc']],
        {$inc: {likes: 1}},
        // {"upsert": true, "new": true },
        // function(err, object) {
        //   if (err) {
        //     console.log("error", err);
        //   } else {
        //     console.log(object);
        //   }
        // }
      );

    }
  };
}
