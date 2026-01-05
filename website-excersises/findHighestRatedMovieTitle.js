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
  {
    id: 4,
    title: "Eega",
    ratings: [7, 8, 9],
  },
];

// Write a function that finds movie titles with high ratings
const getTitlesWithHighRatings = (movies, threshold) => {
  // Your code here

  const getTitles = movies
    .filter((movies) => movies.ratings.some((rating) => rating >= threshold))
    .map((getTitles) => getTitles.title);
  return getTitles;
};

console.log(JSON.stringify(getTitlesWithHighRatings(movies, 9)));
console.log(JSON.stringify(getTitlesWithHighRatings(movies, 10)));
