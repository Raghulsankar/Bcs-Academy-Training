console.log(typeof null); // object

console.log(typeof NaN); //NUMBER

var y = 5;
y == y;
var t = NaN;

console.log(t == t); // false

// BODMAS Rule
var result = 5 / 4 + 5 * 3 - 1;
console.log(result); // 15.25

// numeric seperator
// _ is called as numeric seperator

var salary = 12_00_000;
console.log(salary); //1200000

// object destruturing

const student = {
  name: "Abishek",
  age: 20,
  address: {
    city: "Trichy",
    state: "TN",
  },
  hobbies: ["cricket", "football", "carrom"],
};

// Task 1.1 - Destructuring
// 1. name
// 2. city
// 3. second hobby - "football"

// const { name, address, city, hobbies } = student;
// console.log(name);
// console.log(address);
// console.log(city);
// console.log(hobbies);
// const [football] = hobbies;
// console.log(football);

//method 1
const { name, address, hobbies } = student;
const { city } = address;
const [, h2] = hobbies;

console.log(name);
console.log(address);
console.log(city);
console.log(h2);

//method 2
