const scores = [
  { name: "Alice", score: 90 },
  { name: "Bob", score: 85 },
  { name: "Charlie", score: 92 },
  { name: "Diana", score: 88 },
];

// Write a function that finds and formats the top scorer
const getTopScorer = (scores) => {
  // Your code here - find the highest score and format the result

  const highestScore = scores.reduce((a, b) => (b.score > a.score ? b : a));
  return `${highestScore.name} is the top scorer with a score of ${highestScore.score}.`;

  // return scores.reduce((top, current) => { current.score > top.score ? current : top; })

  // return `${scores.name} is the top scorer with a score of ${scores.score}`;
};

console.log(getTopScorer(scores));
