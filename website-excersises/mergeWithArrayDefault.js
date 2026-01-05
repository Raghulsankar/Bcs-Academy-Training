const movies = [
  { id: 1, title: "Baahubali", genre: "Action" },
  { id: 2, title: "Arjun Reddy", genre: "Drama" },
];

const moreMovies = [
  { id: 3, title: "Jersey", genre: "Sports" },
  { id: 4, title: "Eega", genre: "Fantasy" },
];

// Write a function that merges movie arrays with default handling
const mergeMovies = (movies, moreMovies = []) => {
  // Your code here
  let arr = [];
  arr.push(moreMovies);
  return [...movies, ...moreMovies];
};

console.log(JSON.stringify(mergeMovies(movies, moreMovies)));
console.log(JSON.stringify(mergeMovies(movies)));