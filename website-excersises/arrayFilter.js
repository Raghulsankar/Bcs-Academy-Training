const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use filter to keep only even numbers
//function method
const getEvenNumbers = (numbers) => {
  return numbers.filter((num) => num % 2 === 0);
};
//  senior dev method like filter
// const getEvenNumbers = numbers.filter((even) => even % 2 == 0);
// console.log(getEvenNumbers);

console.log(JSON.stringify(getEvenNumbers(numbers)));
