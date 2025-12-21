// Functions

// function name
//parameters
//function logic
// return value
//arguments

function sum(a, b) {
  const total = Math.round(a + b);
  return `the total is: 
  ${total}`;
}

var c1 = sum(70.4, 34.5);
console.log(c1);

//syntax
// function name{
//     return();
// };

//example 2
function vikas(hand1, hand2) {
  return `Tie: ${hand1}+${hand2} 🪢🔥🔥`;
}

const work1 = vikas("🍊", "🍎");
const work2 = vikas("🍌", "🍎");
const work3 = vikas("👕", "🍇");
const work4 = vikas("☔", "🍎");

console.log(work1);

console.log(work2);
console.log(work3);
console.log(work4);

//  Setup Code
// console.log(moodReport());
// console.log(moodReport("😎", "afternoon ☀️"));

// ✅ Output
// Feeling 🙂 this morning 🌅.
// // Feeling 😎 this afternoon ☀️.

//task 1

function moodReport(mood1 = "🙂", timeOfDay = "morning 🌄") {
  return `feeling ${mood1} this ${timeOfDay}`;
}
console.log(moodReport()); //calling the function
console.log(moodReport("😎", "afternoon ☀️"));

//task 1.2

// 🛠️ Setup Code
// console.log(checkAgeCategory());
// console.log(checkAgeCategory(12));
// console.log(checkAgeCategory(65));

// ✅ Output
// 👨 Adult
// 🧒 Minor
// 🧓 Senior

//method 1
// function checkAgeCategory(age = 18) {
//   //   const age = 18;
//   if (age > 18) {
//     console.log("🧓 Senior");
//   } else if (age < 18) {
//     console.log("🧒 Minor");
//   } else if (age == 18) {
//     console.log("👨 Adult");
//   }
//   return age;
// }
// console.log(checkAgeCategory());
// console.log(checkAgeCategory(12));
// console.log(checkAgeCategory(65));

//method 2
// expected
function checkAgeCategory(age = 18) {
  //   const age = 18;
  if (age >= 60) {
    return `🧓 Senior `;
  } else if (age >= 18) {
    return `👨 Adult`;
  } else if (age < 18) {
    return `🧒 Minor`;
  }
}
console.log(checkAgeCategory());
console.log(checkAgeCategory(12));
console.log(checkAgeCategory(65));

//task 1.3
// Create a function introduceWizard(wizardObj)
// 🛠️ Setup Code
// const wizard = { name: "Merlin", title: "Archmage", wand: { core: "Phoenix Feather" } };
// console.log(introduceWizard(wizard));

// ✅ Output
// 🪄 Archmage Merlin wields a wand with Phoenix Feather core.

// method 1
// function introduceWizard(wizardObj) {
//   return `🪄  ${wizardObj.title}  ${wizardObj.name} wields a wand with ${wizardObj.wand.core}`;
// }
// const wizard = {
//   name: "Merlin",
//   title: "Archmage",
//   wand: { core: "Phoenix Feather" },
// };
// console.log(introduceWizard(wizard));

//method 2
//Task 03

//🪄 Archmage Merlin wields a wand with Phoenix Feather core.

// function introduceWizard(wizardobj){
//     const{title,name,wand:{core}}=wizard;
//     return`🪄  ${title}${name} wields a wand with ${core} core`;

// }
//  //const{title,name,wand:{core}}=wizard;

// const wizard = { name: "Merlin", title: "Archmage", wand: { core: "Phoenix Feather" } };
// console.log(introduceWizard(wizard));

//Task 04

//["🍎", "🥪", "🍫", "🍇", "🧃"]

// function mergeInventory(existing, incoming)
// {
//     const extra=["🧃"]
// return`${shelf},${delivery},"🧃"`;
// }

// const shelf = ["🍎", "🥪"];
// const delivery = ["🍫", "🍇"];
// console.log(mergeInventory(shelf, delivery));

//  function mergeInventory(existing, incoming)
//  {
//      //const extra=["🧃"]
//  return`${shelf},${delivery},${total}`;
//  }

//  const shelf = ["🍎", "🥪"];
//  const delivery = ["🍫", "🍇"];
//  const total=["🧃"];
//  console.log(mergeInventory(shelf, delivery));

// function mergeInventory(existing, incoming) {
//   return ${shelf},${delivery + "," + total};
// }

// const shelf = ["🍎", "🥪"];
// const delivery = ["🍫", "🍇"];
// const total = ["🧃"];
// console.log(mergeInventory(shelf, delivery));

//Task 05

// 🎒 Natasha's bag contains: 💄, 🔫
// 🎒 Anon's bag is empty.

// function packBag(owner = "Anon", ...items){
//     if(items=='')
//     {
//         return`🎒${owner}'s bag is empty`
//     }
//     else{
//         return`🎒${owner}'s bag Contains:${items}`
//     }
// //return`🎒${owner}'s bag${items}`

// }

// console.log(packBag("Natasha", "💄", "🔫"));
// console.log(packBag());

//Task 06

//Thor is currently in Asgard, Yggdrasil 🌍
//Someone is currently in Unknown, Earth 🌍

function whereAreYou(personObj) {
  const {
    user,
    location: { city, planet },
  } = personObj;
  if (personObj != {}) {
    return `Someone is currently in unknown, earth🌍`;
  } else {
    return `${user} is currently in ${city},${planet}`;
  }
}

console.log(
  whereAreYou({
    user: "Thor",
    location: { city: "Asgard", planet: "Yggdrasil" },
  })
);
console.log(whereAreYou({}));
