const movie1 = { id: 1, title: "Baahubali", genre: "Action" };
const movie2 = { id: 2, title: "Arjun Reddy", genre: "Drama" };
const movie3 = { id: 3, title: "Jersey", genre: "Sports" };

// Write a function that collects titles from any number of movies
const getTitles = (...movies) => {
  // Your code here

  return movies.map((movie) => movie.title);
};

console.log(JSON.stringify(getTitles(movie1, movie2, movie3)));
console.log(JSON.stringify(getTitles(movie1, movie2)));
