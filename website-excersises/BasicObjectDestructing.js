const person = { name: "Alice", age: 30, city: "New York" };

// Use object destructuring to extract name and age
const extractPersonInfo = (person) => {
  // Your code here - use destructuring
  const {name,age} = person
  return `${name} is ${age} years old`;
};

console.log(extractPersonInfo(person));