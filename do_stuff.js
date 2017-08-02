const random = require("string-random");

function generateRandomString() {
  //make this thing return if it's invoked with no value in it
  var stringToReturn = 0;
  stringToReturn = random(8, {numbers: false});
  console.log("Generated randomised string: " + stringToReturn);
  return stringToReturn;
}

function snagURL(url, callback) {

}