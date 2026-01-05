const movies = [
  {
    id: 1,
    title: "Baahubali",
    ratings: [8, 9, 10],
  },
  {
    id: 2,
    title: "Arjun Reddy",
    ratings: [9, 8, 9],
  },
  {
    id: 3,
    title: "Mahanati",
    ratings: [10, 9, 8],
  },
];

// Write a function that compiles all ratings into a single array
const getAllRatings = (movies) => {
  // Your code here
  // method 1
  // return movies = [...movies[0].ratings, ...movies[1].ratings, ...movies[2].ratings];
  // method2
  return movies.reduce((acc, movie) => acc.concat(movie.ratings), []);
};

console.log(JSON.stringify(getAllRatings(movies)));
