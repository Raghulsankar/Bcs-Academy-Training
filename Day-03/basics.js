console.log("Operators");

// Declaration
var P;

// Assignment

P = 10;
console.log("Value of P:", P);

// Using var to declare a variable
var raghul = "name";
console.log(raghul);

// which is faster? why?

var g1 = 5;
var g2 = "5";

console.log(g1 == g2); // true, because of type coercion
console.log(g1 === g2); // false, because types are different

"" == 0; // empty string convert to coersion so the answer is true.

"" === 0; // false, because types are different because no type coercion like avoid coersion

console.log("" == 0); // true
console.log("" === 0); // false

// Conditional

isRaining = false;
if (isRaining) {
  console.log("Take an umbrella ☔");
} else {
  console.log("No need for an umbrella 🚫🌂");
}
// == , === doesn't matter if both data tpes same

//Task
// plan to go to party
// noofpersons 2 or below -> bike
// noofpersons 4 or Above -> cab

var person = 4;
if (person <= 2) {
  console.log("We can go by bike 🏍️");
} else console.log("We can go by cab 🚖");

// else needs if.. but not the other way around

// if else if statement
var isRaining = true;
var isSunny = false;
if (isRaining) {
  console.log("Take an umbrella ☔");
} else if (isSunny) {
  console.log("Wear sunglasses 🕶️");
} else {
  console.log("Have a nice day! 😊");
}

// Task 1.2
// noofpersons 2 or below -> bike
// noofpersons 3 to 4 -> auto
// noofpersons 4 or Above -> cab

var persons = 3;
if (persons <= 2) {
  console.log("We can go by bike 🏍️");
} else if (persons <= 4) {
  console.log("We can go by auto🛺 ");
} else {
  console.log("We can go by cab 🚖");
}

// Clue: if & else - only once - else if - n times
// Task 1.3 - Plan to go to party
// noOfPersons 2 or below -> 🛵
// noOfPersons 3 - 4 -> 🛺
// noOfPersons 4 - 5 -> 🚘
// noOfPersons 6 or above -> 🚌

var noOfPersons = 10;
if (noOfPersons <= 2) {
  console.log("We can go by bike 🏍️");
} else if (noOfPersons == 3) {
  console.log("We can go by auto🛺 ");
} else if (noOfPersons <= 5) {
  console.log("We can go by car 🚗");
} else {
  console.log("We can go by bus 🚌");
}

//get the value
var fullname = prompt("what is your name?");
console.log("Your name is:", fullname);

//// Get value from user
var fullName = prompt("Tell me your name?");

console.log(fullName);
console.log(fullName + ", Welcome to BCS!");

var noOfPersons = prompt("Enter number of persons going to party:");
if (noOfPersons <= 2) {
  console.log("We can go by bike 🏍️");
} else if (noOfPersons == 3) {
  console.log("We can go by auto🛺 ");
} else if (noOfPersons <= 5) {
  console.log("We can go by car 🚗");
} else {
  console.log("We can go by bus 🚌");
}

// Clue: if & else - only once - else if - n times
// Task 1.3.5 - Plan to go to party
// noOfPersons 2 or below -> 🛵
// noOfPersons 3 - 4 -> 🛺
// noOfPersons 4 - 5 -> 🚘
// noOfPersons 6 or above -> 🚌

var noOfPersons = prompt("Enter number of persons going to party:");
if (noOfPersons <= 2) {
  console.log("We can go by bike 🏍️");
} else if (noOfPersons == 3 || noOfPersons == 4) {
  console.log("We can go by auto🛺 ");
} else if (noOfPersons <= 5) {
  console.log("We can go by car 🚗");
} else if (noOfPersons >= 5 && noOfPersons > 6) {
  console.log("We can go by bus 🚌");
}

// Convert °C -> °F
// Enter temperature in °C - User
// 30°C
// Output
// The temperature in 30°C is 86°F

var celsius = prompt("Enter temperature in °C:");
var fahrenheit = (celsius * 9) / 5 + 32;
console.log("The temperature in " + celsius + "°C is " + fahrenheit + "°F");

// Find area of circle given radius
// PI = 3.14
// Enter the radius in cm: 2
// Output
// The Area for the given 2cm radius is 12.56cm²

var radius = prompt("Enter the radius in cm:");
var pi = 3.14;
var area = pi * radius * radius; //var area = pi * r**r;;
console.log(
  "The Area for the given " + radius + "cm radius is " + area + "cm²"
);

//task 2.1 (same as above with template literals)
// Convert °C -> °F
// Enter temperature in °C - User
// 30°C
// Output
// The temperature in 30°C is 86°F

var celsius = prompt("Enter temperature in °C:");
var fahrenheit = (celsius * 9) / 5 + 32;
console.log(`The temperature in ${celsius}°C is ${fahrenheit}°F`);

//task 2.2(same as with above with template literals)
// Find area of circle given radius
// PI = 3.14
// Enter the radius in cm: 2
// Output
// The Area for the given 2cm radius is 12.56cm²
