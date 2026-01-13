//call back fn

setInterval(() => {
  console.log("hi raghul");
}, 2000);

//peerintHi - callback fn
// printHi - 2s called later
// HOF - decodes when to call the "callback function"

const printHi = () => {
  console.log("hi");
};

setTimeout(printHi, 2000);
// async callback is now in printHi

//types of call back
// 1. sync - no time involvement
// 2. Async - time involvement

const dbl = (num) => num * 2;
[1, 2, 3].map(dbl);

// sync callback is called in above dbl function

// nested call back function

setTimeout(function fn1() {
  console.log("HI 1");

  setTimeout(function fn2() {
    console.log("Hi 2");
  }, 3000);
}, 2000);

//o/p => fn1 is callback HI 1 IN 2sec, fn2 is callback Hi 2 in 5sec



// callback hell patteren in above code is bad



setTimeout(function fn1() {
  console.log("HI 1");

  setTimeout(function fn2() {
    console.log("Hi 2");

    setTimeout(function f3() {
      console.log("Hi 3");
    }, 3000);
  }, 3000);
}, 2000);



// use the callback hell pattern print reverse order 10 t0 1 and display happy pongal.



