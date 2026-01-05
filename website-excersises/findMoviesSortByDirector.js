const movies = [
  { id: 1, title: "Baahubali", director: "S. S. Rajamouli", year: 2015 },
  { id: 2, title: "Arjun Reddy", director: "Sandeep Reddy Vanga", year: 2017 },
  { id: 3, title: "Mahanati", director: "Nag Ashwin", year: 2018 },
  { id: 4, title: "Eega", director: "S. S. Rajamouli", year: 2012 },
  { id: 5, title: "Jersey", director: "Gowtam Tinnanuri", year: 2019 },
];

// Write a function that finds movies by director sorted by year
const getTitlesByDirectorSortedByYear = (movies, director) => {
  // Your code here

  const movieDirector = movies
    .filter((movies) => movies.director == director)
    .sort((a, b) => a.year - b.year)
    .map((movieDirector) => movieDirector.title);

  return movieDirector;
};

console.log(
  JSON.stringify(getTitlesByDirectorSortedByYear(movies, "S. S. Rajamouli"))
);
console.log(
  JSON.stringify(getTitlesByDirectorSortedByYear(movies, "Nag Ashwin"))
);
