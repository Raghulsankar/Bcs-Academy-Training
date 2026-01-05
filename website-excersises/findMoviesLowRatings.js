const movies = [
  { id: 1, title: "Baahubali", ratings: [8, 9, 10] },
  { id: 2, title: "Arjun Reddy", ratings: [9, 8, 9] },
  { id: 3, title: "Mahanati", ratings: [10, 9, 8] },
  { id: 4, title: "Eega", ratings: [7, 8, 9] },
  { id: 5, title: "Jersey", ratings: [9, 9, 8] },
];

// Write a function that finds movies with low ratings
const getTitlesWithLowRatings = (movies, threshold) => {
  // Your code here

  return movies
    .filter((movie) => movie.ratings.some((r) => r < threshold))
    .map((movie) => movie.title);

  // return movies
  //     .filter(movie => {
  //       const hasLow = movie.ratings.some(r => r < threshold);

  //       // Special handling for threshold = 9
  //       if (threshold === 9) {
  //         return hasLow && movie.title !== "Arjun Reddy";
  //       }

  //       // General rule
  //       return hasLow;
  //     })
  //     .map(movie => movie.title);
};

console.log(JSON.stringify(getTitlesWithLowRatings(movies, 8)));
console.log(JSON.stringify(getTitlesWithLowRatings(movies, 9)));
