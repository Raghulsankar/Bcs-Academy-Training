//String Methods: charAt()

//task 1
const anyString = "Hello world!   ";
console.log(anyString.charAt(1));

//task 2
const sentence = "The quick brown fox jumps over the lazy dog.";

const index = 11;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// Expected output: "The character at index 4 is q"

//String Methods: anchor()

// task 1
const contentString = "Hello, world";

document.body.innerHTML = contentString.anchor("hello");

// task 2
// const linkText = "Visit OpenAI";
// const url = "https://www.openai.com";
// document.body.innerHTML = linkText.anchor(url); // doubt

const linkText = "Visit OpenAI";
const url = "https://www.openai.com";

document.body.innerHTML = `<a href="${url}" target="_blank">${linkText}</a>`;
// Expected output: <a href="https://www.openai.com" target="_blank">Visit OpenAI</a>

// Nesteed Object

var petProfile = {
  name: "Buddy",
  type: "Dog",
  age: 3,
  color: "White",
  legs: 4,

  owner: {
    name: "raghul",
    age: 30,
    contact: 9092595567,
  },
};

console.log("petProfile", petProfile);
console.log("petProfile.owner", petProfile.owner);
console.log("petProfile.owner.name", petProfile.owner.name);

//Bracket Notation

console.log(petProfile["owner"]);
console.log(petProfile["owner"]["name"]);

// most common
// Array of objects
// array can be object (not vice versa)

var marks = [90, 85, 88];
console.log(marks[0]); // 90

var marks = {
  0: 90,
  1: 85,
  2: 88,
};
console.log(marks["0"]); // 90

// array of objects

const t1 = [100, 200];
const t2 = t1;
const t3 = [100, 200];

console.log(t1 == t2); // true because of same base address
console.log(t1 == t3); // false becase of base address will be changed

console.log(t1 === t2); // true
console.log(t1 === t3); // false

const s1 = [100, 200];
t1.push(300);
console.log(s1); // [100, 200, 300]

const s2 = s1;
t2.push(400);
console.log(s1); // [100, 200, 300, 400]

const z1 = {};
const z2 = {};
console.log(z1 == z2); // false  because of different base address
console.log(z1 === z2); // false

//speard operator

const r1 = [100, 200];
const r2 = r1;

const r3 = [...r1]; // spread operator
console.log(r1); // [100, 200] base address
console.log(r2); // [100, 200] base address same as r1
console.log(r3); // [100, 200]  new base address

console.log(r1 == r3); // false
console.log(r1 === r3); // false

// spread operator task 2
const a1 = [200, 300];
const a2 = [400, 500];
const a3 = [1000, ...a1, ...a2, 900];
console.log(a3); // Expected output: [1000, 200, 300, 400, 500, 900]

// spread operator in object
// Task: Merge into one
const book = {
  name: "Harry Potter II: Chamber of Secrets",
  author: "J.K Rowling",
};

const details = {
  year: 2002,
  price: 1200,
};

// task 1.1
// const fullDetails = Object.assign({}, book, details);
const fullDetails = { ...book, ...details };
console.log(fullDetails);
// Expected output: { name: 'Harry Potter II: Chamber of Secrets', author: 'J.K Rowling', year: 2002, price: 1200 }

// task 1.2

const details1 = {
  authorAge: 55,
  year: 2002,
  price: 1200,
};

const book1 = {
  name: "Harry Potter II: Chamber of Secrets",
  author: "J.K Rowling",
  authorAge: 45,
};

// Your Code (Merge both book & details)  authorAge: 55
// const fullDetails1 = Object.assign({}, book1, details1);
const fullDetails1 = { ...book1, ...details1 };
console.log(fullDetails1);
