const sample = 'Hello World';

// Write a function to reverse a string using spread, reverse & join
const reverseString = (str) => {
  // Your code here
  return [...str].reverse().join('');

};

console.log(reverseString(sample));