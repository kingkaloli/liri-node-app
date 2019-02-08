require("dotenv").config();
var keys = require("./keys");
var axios = require("axios");
var Spotify = require('node-spotify-api');
var read = process.argv[2];
var query = "";
for (var i = 3; i < process.argv.length; i++) {
    query = query + process.argv[i] + " "

}

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
        console.log("\---------------------------------------------");
        for (var i = 0; i < artists.length; i++) {
            console.log("Artist: " + artists[i].name);
        }
     
        console.log("Song Name: " + songname);
        console.log("Preview this Album: " + preview);
        console.log("Album Name:" + album);
        console.log("\---------------------------------------------");


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
            
           
            // var movieFind= data.tracks.items[0];
            //   * Title of the movie.
               var movieName =  response.data.Title
               console.log("\---------------------------------------------");
               console.log("Movie Title: " + movieName);
            //   * Year the movie came out.
           
               var movieReleased =  response.data.Year
               console.log("Year Movie Released: " + movieReleased);
            //   * IMDB Rating of the movie.
               var movieRated =  response.data.imdbRating
               console.log("IMDB Rating : " + movieRated);
            //   * Rotten Tomatoes Rating of the movie.
            var movieRotten =  response.data.Ratings[2].Value;
               console.log("Rotten Tomatoes Rating: " + movieRotten);
         
            //   * Country where the movie was produced.
            var Country  =  response.data.Country
            console.log("Countries movie was produced  : " + Country);
            //   * Language of the movie.
            var Language  =  response.data.Language 
            console.log("Language of the movie: " + Language);
            //   * Plot of the movie.
            var Plot  =  response.data.Plot
            console.log("Movie Plot: " + Plot);
            //   * Actors in the movie.
            var Actors  =  response.data.Actors
            console.log("Movie Actors: " + Actors);
            console.log("\---------------------------------------------");
        })
        .catch(function (error) {
            console.log(error);
        });
}

// function concertThis(media){
   
//     if (media == ""){
//    
//   }

  
//   request ("https://rest.bandsintown.com/artists/" + media + "/events?app_id=codingbootcamp", function (error, response, data){
//     try{
//       var response = JSON.parse(data)
//       if (response.length != 0){
//         console.log(" Upcoming events for " + media + " include: "))
//         response.forEach(function(element){
//           console.log ("Venue: " + element.venue.name));
//         if (element.venue.country == "United States"){
//           console.log(" City: " + element.venue.city + "," + element.venue.region));
//         }
//           else{
//             console.log(" City: " + element.venue.city + "," + element.venue.country));
//           }
//         console.log(" Date: " + moment(element.datetime).format("MM/DD/YYYY")));
//         console.log();
//         })
//       }else {
//         console.log(" You didn't need to go anyway."));
//       }
//     }
//     catch(error){
//       console.log("No concerts for you!"));
//     }
//   })
//   }