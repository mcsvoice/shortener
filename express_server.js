var express = require("express");
var app = express();
//var PORT = process.env.PORT || 8080; // default port 8080
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.disable('x-powered-by');

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// MORE IMPORTS HERE
//body-parser, cookie-parser, formidable

//bootstrap?

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











// var urlDatabase = {
//   "b2xVn2": "http://www.lighthouselabs.ca",
//   "9sm5xK": "http://www.google.com"
// };


// app.set("view engine", "ejs")

// app.get("/", (req, res) => {
//   res.end("Hello!");
// });

// app.get("/urls", (req, res) => {
//   let templateVars = { urls: urlDatabase };
// });

// app.get("/hello", (req, res) => {
//   res.end("<html><body>Hello <b>World</b></body></html>\n");
// });

// app.listen(PORT, () => {
//   console.log(`Example app listening on port ${PORT}!`);
// });