// // Summary

// // Case 1: City is Trichy
// // console.log(city); // Trichy

// // // Case 2: City is not present
// // console.log(city); // 'N/A'

// const student1 = {
//   name: "Abishek",
//   age: 20,
//   address: {
//     city: "Trichy",
//     state: "TN",
//   },
//   hobbies: ["cricket", "football", "carrom"],
//   skills: ["Dance", "Violin"],
// };

// const student2 = {
//   name: "Abishek",
//   age: 20,
//   address: {
//     state: "TN",
//   },
//   hobbies: ["cricket", "football", "carrom"],
//   skills: ["Dance", "Violin"],
// };

// // Default value taken when the value is undefined
// // Task - provide default value for city as 'N/A'
// // const { name = "Surya", skills = ["HTML", "CSS", "Singer"] } = student;

// // console.log(name, skills);
// // console.log(city); // 'N/A'

// // Method 2

// // Case 1: City is Trichy
// const {
//   address: { city },
// } = student1;
// console.log(city);

// const {
//   address: { city = "N/A" },
// } = student2;

// console.log(city);

// weekend task
// https://learn-js.ragavkumarv.com/ (website)

//es6  fundamentals
//destruturing and spread
//strings mehods
