const sentence = 'mastering javascript is fun';

// Write a function to convert sentence to title case
const toTitleCase = (str) => {
  // Your code here
  return str.split(' ').map(str => `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`).join(' ');
};

console.log(toTitleCase(sentence));