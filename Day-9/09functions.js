// Function can be passed another function
// unction can be passed argument

// setup code

function sayHello() {
  return function () {
    console.log("Hello! 🙄");
  };
}

console.log(sayHello()()); // method1

const greet = sayHello();
greet(); //method 2

function fun() {
  let x = 10; // this x is called 'lexical scope'

  function cool() {
    let y = 5;
    let x = 1;
    console.log(y);
    console.log("cool", x);
  }
  cool();
}
fun();
