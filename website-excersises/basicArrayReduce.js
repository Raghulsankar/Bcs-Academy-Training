const numbers = [1, 2, 3, 4, 5];

// Use reduce to sum all numbers
const sumNumbers = (numbers) => {
  // Your code here

  return numbers.reduce((sum, current) => sum + current, 0);
};

console.log(sumNumbers(numbers));
