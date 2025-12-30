// slice() - mutable

const months = ["jan", "march", "april", "june"];
const result = months.toSpliced(1, 2, "feb");
console.log(result);
console.log(months);

// every() - immutable

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true

console.log(array1); // immutablea

// sort()

const arr = [1, 3, 100, 4];
console.log(
  arr
    .toSorted((a, b) => b - a)
    .toSpliced(2, 1, 4)
    .toReversed()
    .slice(3, 5)
    .join("|")
);

//reduce()

const arr1 = [1, 7, 3, 10, 5];

//method 1

// console.log(arr1.reduce((acc, cur) => (acc > cur ? acc : cur)));

// method 2
// const result1 = arr1.reduce((currentValue, maxValue) =>
//   currentValue > maxValue ? currentValue : maxValue
// );

// console.log(result1);

// method 3

console.log(arr1.reduce((max, cur) => (max > cur ? max : cur)));

// Array of Objects

const scores = [
  {
    marks: 32,
    name: "Yvette Merritt",
  },
  {
    marks: 57,
    name: "Lillian Ellis",
  },
  {
    marks: 22,
    name: "Mccall Carter",
  },
  {
    marks: 21,
    name: "Pate Collier",
  },
  {
    marks: 91,
    name: "Debra Beard",
  },
  {
    marks: 75,
    name: "Nettie Hancock",
  },
  {
    marks: 20,
    name: "Hatfield Hodge",
  },
];

console.log(
  scores.reduce((mark1, mark2) => (mark1.marks > mark2.marks ? mark1 : mark2))
    .name
);
// console.log(scores.reduce((a, b) => (b.marks > a.marks ? b : a)).name);
