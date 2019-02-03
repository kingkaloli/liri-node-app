
require("dotenv").config();
var keys = require("./keys");
var axios = require("axios");


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

// http://www.omdbapi.com/?t=mr+nobody&apikey=[yourkey] //

axios.get('http://www.omdbapi.com/', {
    params: {
      t:"mr nobody",
      apikey: keys.omdb.id,
    }
  })
  .then(function (response) {
    console.log(response);
//   * Title of the movie.
//   * Year the movie came out.
//   * IMDB Rating of the movie.
//   * Rotten Tomatoes Rating of the movie.
//   * Country where the movie was produced.
//   * Language of the movie.
//   * Plot of the movie.
//   * Actors in the movie.
  })
  .catch(function (error) {
    console.log(error);
  });

