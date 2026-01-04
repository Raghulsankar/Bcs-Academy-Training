const numbers = [1, 2, 3, 4, 5];

// Use map to double each number
const doubleNumbers = (numbers) => {
  // Your code here

  // const doubleNumbers = numbers.map((raghul) => raghul.length);
  return numbers.map((item) => item * 2);

  // console.log(doubleNumbers);
};

console.log(JSON.stringify(doubleNumbers(numbers)));
// console.log(JSON.stringify(doubleNumbers(numbers)));
