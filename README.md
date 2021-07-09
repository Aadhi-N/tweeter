# Tweeter Project

## Overview
Tweeter is a single-page AJAX-based Twitter clone that uses jQuery, HTML5, and CSS.

It uses a simplistic "in-memory" database using MongoDB. 

Users are dynamically created after tweet submission, using [Chance](https://www.npmjs.com/package/chance).

## Preview of App

#### Write a tweet and dynamically generate a random user along with tweet.
!["Screenshot of tweeter app"](https://github.com/Fathima-N/tweeter/blob/master/screenshots/tweeter.gif)


#### Run project locally:

Clone the repo to your local machine.
```
git clone https://github.com/Aadhi-N/tweeter
cd tweeter
```
Install MongoDB in order to run 'in-memory' database: https://docs.mongodb.com/v5.0/installation/

Install all dependencies (using the `npm install` command).

Start the server:
```
npm run local
open http://localhost:8080
```

### Dependencies

* JQuery
* MongoDB
* Express