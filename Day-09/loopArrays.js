const fruits = ["🍎", "🍊", "🍌", "🍇", "🍓"];
for (let i = 0; i < 5; i++) {
  console.log(i, fruits[i]);
}

// Task 1.1
// Output
// Hulk contains 4 letters
// Iron man contains 8 letters
// ...
// Thor contains 4 letters

const avengers = [
  "Hulk",
  "Iron man",
  "Black widow",
  "Captain america",
  "Spider man",
  "Thor",
];

for (let index = 0; index < avengers.length; index++) {
  console.log(`${avengers[index]} contains ${avengers[index].length} letters`);
}

console.log("task1.2");
// Task 1.2 - with for..of (avenger task)

const avenger1 = [
  "Hulk",
  "Iron man",
  "Black widow",
  "Captain america",
  "Spider man",
  "Thor",
];

for (let avenger of avengers) {
  console.log(`${avenger} contains ${avenger.length} letters`);
  //   console.log(avenger1);
}
