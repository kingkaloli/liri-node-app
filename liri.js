
require("dotenv").config();
var keys = require("./keys");


var Spotify = require('node-spotify-api');
 
var spotify = new Spotify(keys.spotify);
 
spotify.search({ type: 'track', query: 'The Sign Ace of Base.' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 

var find = data.tracks.items[0];
var songname = find.name;
var preview= find.preview_url;
var album = find.album.name;
var artists = find.artists;

for (var i = 0; i < artists.length; i++) {
    console.log(artists[i].name);
}
console.log(songname);
console.log(preview);
console.log(album);



});







//  `concert-this`

//  `spotify-this-song`

//  `movie-this`

//  `do-what-it-says`