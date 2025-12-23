// Loops

function washPlates() {
  console.log("Washed 🍽️ ✅");
}

// DRY
// washPlates();
// washPlates();
// washPlates();
// washPlates();
// washPlates();

// Loops
// Loops are needed when we want repeat statements (Why?)

// How?

// for(1. Initialization; 2.Condition; 3. Updation ){
//     // Repeating statements
// }

// Flow
// Initialization - (Once)
// Condition
// Body
// Updation
// Condition - When false - Loops exits

// Method 1
for (let i = 0; i < 5; i++) {
  washPlates();
}

// Method 2
for (let i = 0; i < 5; i = i + 1) {
  washPlates();
}

for (let i = 1; i <= 10; i++) {
  console.log(`My rep count is ${i} 🏋️ `);
}

for (let count = 10; count >= 0; count--) {
  console.log(`Counting 🐏 ${count}`);
}

// Types of loops
// 1. for...loop
// 2. while...loop
// 3. do...while (task)

console.log("While loop");
let count = 10;

while (count >= 0) {
  console.log(`Counting 🐏 ${count}`);
  count--;
}

// Task 1.1 - while loop

let heart = 1;
while (heart <= 5) {
  console.log(` ❤️ `.repeat(heart));
  heart++;
}

// Output
// ❤️
// ❤️❤️
// ❤️❤️❤️
// ❤️❤️❤️❤️
// ❤️❤️❤️❤️❤️

// Task 1.2 - for loop
console.log("For Loop");

for (let love = 1; love <= 5; love++) {
  console.log(" ❤️ ".repeat(love));
}

// Output
// ❤️
// ❤️❤️
// ❤️❤️❤️
// ❤️❤️❤️❤️
// ❤️❤️❤️❤️❤️

// Task 1.3 - for loop or while loop

// for (let fish = 1; fish <= 3; fish++) {
//   console.log(" 🐳".repeat(fish));
// }

// method 2
// printPattern("🐳", 3);
function printPattern(emoj, noOfRows) {
  for (let emojCount = 1; emojCount > noOfRows; emojCount++) {
    console.log(emojCount.repeat(emojCount));
  }
}
printPattern("🐳", 3);

// Output
// 🐳
// 🐳🐳
// 🐳🐳🐳

//task 1.4
// complete with passsing parameter and argments
// printPattern();

// Default value
function printPattern(emoji = "🎊", noOfRows = 5) {
  for (let emojiCount = 1; emojiCount <= noOfRows; emojiCount++) {
    console.log(emoji.repeat(emojiCount));
  }
}

printPattern();
printPattern("🐳", 3);

// Output
// ❤️
// ❤️❤️
// ❤️❤️❤️
// ❤️❤️❤️❤️
// ❤️❤️❤️❤️❤️
