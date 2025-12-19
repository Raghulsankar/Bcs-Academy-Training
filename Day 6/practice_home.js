//Nested objects
var petProfile = {
  name: "fluffy",
  age: 3,
  color: "white",
  legs: 4,
  owner: {
    name: "Tarachand",
    phone: "9830303923",
  },
};

petProfile.toys = ["ball", "bone", "disc"];

console.log(petProfile);

console.log(petProfile.toys[2]);

//nested objects
// own creation
const userDetails = {
  firstname: "Raghul",
  lastname: "sankar",
  email: "raghulsankara04@gmail.com",
  phone: 9092595567,
  gender: "male",

  familydetails: {
    fname: "selvam",
    mname: "Latha",
    fmobile: 9894123916,
    mmobile: 9500554958,
  },
};

console.log(userDetails);
console.log(userDetails.familydetails.mmobile); // shows mothers mobile number
console.log(userDetails.phone); // shows user phone number

//spread using javascript
const defaultDetails = {
  name: "N/A",
  author: "N/A",
  authorAge: null,
};

const book2 = {
  name: "Harry Potter II: Chamber of Secrets",
  authorAge: 45,
};

// Always give defaultDetails (first)
// console.log({ ...defaultDetails, ...book2 });

const fullDetails = {
  ...defaultDetails,
  authorAge: 35,
  ...book2,
  year: 2002,
  pages: 405,
};

// weired parts

console.log(fullDetails);

console.log(typeof null); // object // bug

console.log(typeof NaN); // number

var t = NaN;
console.log(t == t); // false

// BODMAS
var result1 = 5 / 4 + 5 * 3 - 1;
var result = (5 / (5 + 5)) * (3 - 1);
console.log(result);
console.log(result1);

// Numeric separator
var salary = 12_00_000; // Improves readability
console.log(salary);

// _ => called as 'Numeric seperator'

const dob = +"04_01_2002";
console.log(dob); // NaN

//multiple object arrays
const students = [
  {
    name: "Raghul",
    age: 24,
  },
  {
    name: "saran yogi",
    age: 23,
  },
  {
    name: "ani",
    age: 25,
  },
];
console.log(students);
console.log(students[1]); // saran yogi , 23
console.log(students[1].age); // 23
console.log(students[2].name); //Ani
