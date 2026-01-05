const fruits = ["apple", "banana"];
const vegetables = ["carrot", "broccoli"];

// Use spread operator to combine arrays
const combineArrays = (arr1, arr2) => {
  // Your code here - use spread operator
  return [...arr1, ...arr2];
};

console.log(JSON.stringify(combineArrays(fruits, vegetables)));