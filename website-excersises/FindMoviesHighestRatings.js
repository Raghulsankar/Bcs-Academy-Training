const movies = [
  { id: 1, title: "Baahubali", ratings: [8, 9, 10] },
  { id: 2, title: "Arjun Reddy", ratings: [9, 8, 9] },
  { id: 3, title: "Mahanati", ratings: [10, 9, 8] },
  { id: 4, title: "Eega", ratings: [7, 8, 9] },
  { id: 5, title: "Jersey", ratings: [9, 9, 8] },
];

// Write a function that finds highest rating for each movie
const getMoviesWithHighestRatings = (movies) => {
  // Your code here

  return movies.map((movie) => {
    return {
      title: movie.title,
      highestRating: Math.max(...movie.ratings),
    };
  });
};

console.log(JSON.stringify(getMoviesWithHighestRatings(movies)));
