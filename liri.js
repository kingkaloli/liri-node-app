require("dotenv").config();
var keys = require("./keys");
var axios = require("axios");
var Spotify = require('node-spotify-api');
var read = process.argv[2];
var query = "";
for (var i = 3; i < process.argv.length; i++) {
    query = query + process.argv[i] + " "

}
console.log(read);
console.log(query);

if (read === "spotify-this-song") {
    spotifySearch(query)

} else if (read === "movie-this") {
    omdbSearch(query)
}


function spotifySearch(songName) {
    var query = 'The Sign Ace of Base.';
    if (songName !== "") {
        query = songName

    }

    var spotify = new Spotify(keys.spotify);

    spotify.search({
        type: 'track',
        query: query
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }


        var find = data.tracks.items[0];
        var songname = find.name;
        var preview = find.preview_url;
        var album = find.album.name;
        var artists = find.artists;

        for (var i = 0; i < artists.length; i++) {
            console.log(artists[i].name);
        }
        console.log(songname);
        console.log(preview);
        console.log(album);



    });

}

function omdbSearch(movieName) {
    var query = 'Mr Nobody';
    if (movieName !== "") {
        query = movieName

    }
    // http://www.omdbapi.com/?t=mr+nobody&apikey=[yourkey] //

    axios.get('http://www.omdbapi.com/', {
            params: {
                t: query,
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
}

//  Format output for movie this 

//  API call for Bands near me 

// Read from random .txt