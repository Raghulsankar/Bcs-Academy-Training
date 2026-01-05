const movies = [
  { id: 1, title: "Baahubali", ratings: [8, 9, 10] },
  { id: 2, title: "Arjun Reddy", ratings: [9, 8, 9] },
  { id: 3, title: "Mahanati", ratings: [10, 9, 8] },
  { id: 4, title: "Eega", ratings: [7, 8, 9] },
  { id: 5, title: "Jersey", ratings: [9, 9, 8] },
];

// Write a function that finds movies with high average ratings
const getMoviesWithHighAverageRating = (movies, threshold) => {
  // Your code here
  
};

console.log(JSON.stringify(getMoviesWithHighAverageRating(movies, 8.5)));