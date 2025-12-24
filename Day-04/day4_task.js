// lower case and uppercase

var str = "raghul";
console.log(str.toUpperCase()); // RAGHUL
console.log(str.toLowerCase()); // raghul

// var fullName = "Hari Ram";

// console.log(fullName.toLowerCase());
// console.log(fullName.toUpperCase());
// console.log(fullName.toLocaleLowerCase());
// console.log(fullName.toLocaleUpperCase());

// Task 1.1
// Remove the extra spaces & Convert the to lower case
// 'do good, be good'

//method 1
var pharse = "   Do Good, Be Good   ";
var trimmedPharse = pharse.trim();
console.log(trimmedPharse.toLowerCase()); // do good, be good

//method 2 (dot Chaining)
var pharse = "   Do Good, Be Good   ";
console.log(pharse.trim().toLowerCase()); // do good, be good

// Task 3.1 - TextCase - Dont consider
// Output
// Case 1
// Please enter your fav 🍧?: vanilla
// Yes, we have vanilla in stock

// Case 2
// Please enter your fav 🍧?: strawberry
// We ran out of strawberry

//method - 1
// var iceCream = prompt("please enter your fav🍧?: ");
// if (stock1 == iceCream) {
//   console.log("Yes, we have vanilla in stock");
// } else if (stock2 == iceCream) {
//   console.log("We ran out of strawberry");
// } else if (stock3 == iceCream) {
//   console.log("We have butterscotch in stock");
// } else if (stock4 == iceCream) {
//   console.log("We have cotton candy in stock");
// } else {
//   console.log("We don't have your fav ice-cream flavor");
// }

// var iceCream = prompt("please enter your fav🍧?: ");
// if (stock1 || stock2 || stock3 || stock4 == iceCream) {
//   console.log(`We have ${iceCream} in stock`);
// } else {
//   console.log("we dont have your fav ice-cream flavor");
// }

//method-2
// var stock1 = "vanilla";
// var stock2 = "chocolate";
// var stock3 = "butterscotch";
// var stock4 = "cotton candy";

// var iceCream = prompt("Please enter your fav🍧?: ");
// if (
//   stock1 == iceCream ||
//   stock2 == iceCream ||
//   stock3 == iceCream ||
//   stock4 == iceCream
// ) {
//   console.log(`We have ${iceCream} in stock`);
// } else {
//   console.log(`we ran out ${iceCream} in stock`);
// }

//Assignment
// Task 3.2 -  - TextCase -  Consider it
// Output
// Case 1
// Please enter your fav 🍧?:   VAnilla
// Yes, we have vanilla in stock

// Case 2
// Please enter your fav 🍧?:     stRawberry
// We ran out of strawberry

var stock1 = "vanilla";
var stock2 = "chocolate";
var stock3 = "butterscotch";
var stock4 = "cotton candy";
var iceCream = prompt("Please enter your 🍧:");
var formattedIceCream = iceCream.trim().toLowerCase();
if (
  stock1 == formattedIceCream ||
  stock2 == formattedIceCream ||
  stock3 == formattedIceCream ||
  stock4 == formattedIceCream
) {
  console.log(`Yes, we have ${formattedIceCream} in stock`);
} else {
  console.log(`We ran out of ${formattedIceCream}`);
}
