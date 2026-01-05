const colors = ["red", "green", "blue", "yellow"];
const coordinates = [10, 20];

// Use array destructuring to extract first two colors
const getFirstTwoColors = (colors) => {
  // Your code here - use array destructuring
  const [first, second] = colors;
  return `First: ${first}, Second: ${second}`;
};

console.log(getFirstTwoColors(colors));
