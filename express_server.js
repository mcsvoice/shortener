const express = require("express");
const app = express();
//const PORT = process.env.PORT || 8080; // default port 8080
const handlebars = require('express-handlebars').create({defaultLayout:'main'});
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.disable('x-powered-by');

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// js-cookie, Bootstrap, body-parser and cooke-parser are installed

// MORE IMPORTS HERE
//express-session, express-handlebars, parseurl, formidable,

//get geoip-litec

//response.redirect(303, '/pagename') << will redirect a person, last line in function


app.set('port', process.env.PORT || 8080);

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
  response.render('home');
});

app.get('/about', function(request, response){
  response.render('about');
});

app.get('/contact', function(request, response){
  response.render('contact');
});

app.get('/shorten', function(request, response){
  response.render('shorten');
});

//set up a thank-you file for using the URL shortener

//we need to have an object with all of the short URLs in it, so we can
//dynamically give people access to it

app.use(function(request, response, next) {
  console.log("Looking for: " + request.url);
  next();
});

app.get('/junk', function(request, response, next) {
  console.log('Tried to access Junk');
  throw new Error('/junk doesn\'t exist')
});

app.use(function(error, request, response, next) {
  console.log('Error: ' + error.message);
});

app.listen(app.get('port'), function(){
  console.log("Express running on Localhost: " + app.get('port') + 'press ctrl+c to terminate');
});

app.use(function(request, response){
  response.type('text/html');
  response.status(404);
  response.render('404');
});

app.use(function(error, request, response, next){
  console.error(error.stack);
  response.status(500);
  response.render('500');
});

// URL DB HERE

// this is where my URL db is

var counterSchema = Schema({
  _id: {type: string, required: true},
  seq: {type: number, defaults: 0}
});

var countDB = mongoose.model('urlstore', counterSchema);

var urldb = {
  "aaaaaaaa": "http://www.lighthouselabs.ca",
  "bbbbbbbb": "http://www.google.com"
};

// FUNCTIONS BELOW

const random = require("string-random");

function generateRandomString() {
  //make this thing return if it's invoked with no value in it
  var stringToReturn = 0;
  stringToReturn = random(8, {numbers: false});
  console.log("Generated randomised string: " + stringToReturn);
  return stringToReturn;
};

function snagURL(url, callback) {

};


// var urlDatabase = {
//   "b2xVn2": "http://www.lighthouselabs.ca",
//   "9sm5xK": "http://www.google.com"
// };
