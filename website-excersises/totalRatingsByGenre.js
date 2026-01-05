const movies = [
  { id: 1, title: "Baahubali", genre: "Action", ratings: [8, 9, 10] },
  { id: 2, title: "Arjun Reddy", genre: "Drama", ratings: [9, 8, 9] },
  { id: 3, title: "Mahanati", genre: "Biography", ratings: [10, 9, 8] },
  { id: 4, title: "Eega", genre: "Fantasy", ratings: [7, 8, 9] },
  { id: 5, title: "Jersey", genre: "Sports", ratings: [] },
];

// Write a function that calculates total ratings by genre
const getTotalRatingsByGenre = (movies, genre) => {
  // Your code here

  return movies
    .filter((movie) => movie.genre === genre)
    .reduce((total, movie) => total + movie.ratings.length, 0);
};

console.log(getTotalRatingsByGenre(movies, "Action"));
console.log(getTotalRatingsByGenre(movies, "Drama"));
console.log(getTotalRatingsByGenre(movies, "Sports"));
