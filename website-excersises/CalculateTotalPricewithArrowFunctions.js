const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 700 },
];

// Write a function that calculates the total price of all products
const getTotalPrice = (products) => {
  // Your code here
  return products.reduce((total, product) => total + product.price, 0);
};

console.log(getTotalPrice(products));

// booksAndStationery array creation

const booksAndStationery = [
  { id: 1, name: "Book", price: 25 },
  { id: 2, name: "pen", price: 5 },
];

console.log(getTotalPrice(booksAndStationery));

//empty Array creation

const emptyArray = [];
console.log(getTotalPrice(emptyArray));
