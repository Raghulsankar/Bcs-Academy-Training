// preview Assignment

//Ask the user for a number 1–7 and print the matching weekday. Otherwise print "Wrong Option".

// Sample Output
// Input: 3 → Wednesday Input: 8 → Wrong Option

var urDay = prompt("Enter a number between 1 to 7:");
if (urDay == 1) {
  console.log("Monday");
} else if (urDay == 2) {
  console.log("Tuesday");
} else if (urDay == 3) {
  console.log("Wednesday");
} else if (urDay == 4) {
  console.log("Thursday");
} else if (urDay == 5) {
  console.log("Friday");
} else if (urDay == 6) {
  console.log("Saturday");
} else if (urDay == 7) {
  console.log("Sunday");
} else {
  console.log("Wrong Option");
}

//task 2
// Get two names and their heights (cm) using prompt(). Print who is taller (and by how many cm). If equal, print they’re the same height.

// Sample Output
// Scenario 1

// person1: Muthu, height: 186
// person2: Abishek, height: 165
// Output: Muthu is taller than Abishek by 21cm
// Scenario 2

// person1: Asha, height: 170
// person2: Vijay, height: 170
// Output: Asha and Vijay are of same height

var name1 = prompt("Enter the name of First person:");
var height1 = prompt(` ${name1} enter your height in cm:`);
var name2 = prompt("Enter the name of Second person:");
var height2 = prompt(` ${name2} enter your height in cm:`);
if (height1 > height2) {
  console.log(`${name1} is taller than ${name2} by ${height1 - height2} cm`);
} else if (height2 > height1) {
  console.log(`${name2} is taller than ${name1} by ${height2 - height1} cm`);
} else {
  console.log(`${name1} and ${name2} are of same height`);
}
