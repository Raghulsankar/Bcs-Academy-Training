// Scope

{
  var x = 10;
  let y = 20;
  console.log(y);
}

console.log(x);

//{} -> Block

{
  var x = 10;
  let y = 20;
}

console.log(x); // 10 //
// console.log(y);

// Types of functions

// 1. function declaration
// 2. function expression
// 3. Arrow function
// 4. IIFF(later Assignment)
// 5. Anonymous Function

// 1. function declaration
function add(a, b) {
  return a + b;
}
console.log(add);

// 2. Function expression
const add1 = function (a, b) {
  return a + b;
};
console.log(add1(3, 4));

console.log(typeof add);
console.log(typeof add1);

//1. no function required
const add2 = (a, b) => {
  return a + b;
};

// 2. Only if the function body is one line
const add3 = (a, b) => a + b;

console.log(add2(3, 4)); // 7

console.log(add3(3, 4)); // 7

// function checkAgeCategory(age = 18) {
//   if (age >= 60) {
//     return "🧓 Senior";
//   } else if (age >= 18) {
//     return "👨 Adult";
//   }

//   return "🧒 Minor";
// }

// Make it work then make it better

const checkAgeCategory = (age = 18) => {
  if (age >= 60) {
    return "🧓 Senior";
  } else if (age >= 18) {
    return "👨 Adult";
  }

  return "🧒 Minor";
};

console.log(checkAgeCategory());
console.log(checkAgeCategory(12));
console.log(checkAgeCategory(65));

// 5. Anonymous function + function expression

// Case 5.1
const result = [1, 2, 3].map(function (n) {
  return n * 2;
});

// Case 5.2
const result1 = [1, 2, 3].map((n) => {
  return n * 2;
});

// Anonymous function + Arrow function
// Case 5.3
const result2 = [1, 2, 3].map((n) => n * 2);

console.log(result);
console.log(result1);
console.log(result2);
