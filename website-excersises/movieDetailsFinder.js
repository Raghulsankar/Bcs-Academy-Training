console.log("movieDetailsFinder Excersise");

const movies = [
  {
    id: 1,
    title: "Baahubali",
    director: "S. S. Rajamouli",
    year: 2015,
    ratings: [8, 9, 10],
    genre: "Action",
  },
  {
    id: 2,
    title: "Arjun Reddy",
    director: "Sandeep Reddy Vanga",
    year: 2017,
    ratings: [9, 8, 9],
    genre: "Drama",
  },
  {
    id: 3,
    title: "Mahanati",
    director: "Nag Ashwin",
    year: 2018,
    ratings: [10, 9, 8],
    genre: "Biography",
  },
  {
    id: 4,
    title: "Eega",
    director: "S. S. Rajamouli",
    year: 2012,
    ratings: [7, 8, 9],
    genre: "Fantasy",
  },
  {
    id: 5,
    title: "Jersey",
    director: "Gowtam Tinnanuri",
    year: 2019,
    ratings: [9, 9, 8],
    genre: "Sports",
  },
];

// Write a function that finds a movie by ID and returns formatted details
const getMovieDetails = (movies, id) => {
  // Your code here
  //method 1
  //   const movie = movies.find((m) => m.id === id);

  //method 2
  var movie = movies.find(function (m) {
    return m.id === id;
  });

  if (!movie) {
    return "Movie not found";
  }

  const firstLetter = movie.genre[0].toLowerCase();
  const article = ["a", "e", "i", "o", "u"].includes(firstLetter) ? "an" : "a";

  return `${movie.title} is ${article} ${movie.genre} movie`;
};

console.log(getMovieDetails(movies, 1));
console.log(getMovieDetails(movies, 5));
console.log(getMovieDetails(movies, 6));
