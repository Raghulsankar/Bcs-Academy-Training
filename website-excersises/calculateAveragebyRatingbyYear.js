const movies = [
  { id: 1, title: "Baahubali", year: 2015, ratings: [8, 9, 10] },
  { id: 2, title: "Arjun Reddy", year: 2017, ratings: [9, 8, 9] },
  { id: 3, title: "Mahanati", year: 2018, ratings: [10, 9, 8] },
  { id: 4, title: "Eega", year: 2012, ratings: [7, 8, 9] },
  { id: 5, title: "Jersey", year: 2019, ratings: [9, 9, 8] },
];

// Write a function that calculates average rating by year
const getAverageRatingByYear = (movies, year) => {
  // Your code here
  
};

console.log(getAverageRatingByYear(movies, 2018));
console.log(getAverageRatingByYear(movies, 2020));