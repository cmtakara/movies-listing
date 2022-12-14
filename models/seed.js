///////////////////////////////////////
// Import Dependencies
///////////////////////////////////////
const mongoose = require("./connection");
const Movie = require("./movie");

///////////////////////////////////////////
// Seed Code
////////////////////////////////////////////

// save the connection in a variable
const db = mongoose.connection;

// Make sure code is not run till connected
db.on("open", () => {
  ///////////////////////////////////////////////
  // Write your Seed Code Below
  //////////////////////////////////////////////
  const startMovies = [
    {
        title: "Matrix",
        releaseDate: "1999",
        length: 136,
        genre: "Sci-fi",
        poster: "https://www.themoviedb.org/t/p/w220_and_h330_face/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        director: "Lana, Lily Wasoki",
        rating: "R",
        watchAgain: true,
        cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
    },
    {
        title: "50 First Dates",
        releaseDate: "2004",
        length: 99,
        genre: "Comedy",
        poster: "https://m.media-amazon.com/images/M/MV5BMjAwMzc4MDgxNF5BMl5BanBnXkFtZTYwNjUwMzE3._V1_FMjpg_UX1000_.jpg",
        director: "Peter Segal",
        rating: "PG-13",
        watchAgain: true,
        cast: ["Adam Sandler", "Drew Barrymore", "Rob Schneider"]
    },
    {
        title: "The Dark Knight",
        releaseDate: "2008",
        length: 152,
        genre: "Action/Superhero",
        poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        director: "Christopher Nolan",
        rating: "PG-13",
        watchAgain: true,
        cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"]
    }
]

Movie.deleteMany({}).then((data) => {
    // Seed Starter Movies
    Movie.create(startMovies).then((data) => {
        // log new movies
        console.log('data', data)
        db.close();
    })
    .catch((error) => {
        console.log(error)
        db.close();
    })

})

})