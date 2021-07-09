"use strict";

// Basic express setup:
const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


// MongoDB setup:
const Mongo = require("mongodb");
const MongoClient = Mongo.MongoClient;
const MONGODB_URI = ("mongodb://localhost:27017/tweets");

MongoClient.connect(MONGODB_URI, (err, db) => {
	if (err) throw err; 
	console.log(`Connected to mongodb: ${MONGODB_URI}`);

	const DataHelpers = require("./lib/data-helpers.js")(db);

	const tweetsRoutes = require("./routes/tweets")(DataHelpers);

	app.use("/tweets", tweetsRoutes);

	app.listen(PORT, () => {
	  console.log("Tweeter app listening on port " + PORT);
	});

});
