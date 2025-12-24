// const add = (a) => (b) => a + b;
// console
//   .log
//   //your code
//   //call 4,5 -> 9
//   ();

//   Task 1.1
// Please provide the list of book titles

const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

// console.log(books.map((book) => book.title));

// Expected Output
// ["Infinite Jest",  "The Catcher in the Rye", "Sapiens",  "A Brief History of Time",  "Clean Code"]

// Task 1.2
// Please provide the only Fiction books

// const books = books.filter((genre) => genre == "Fiction"); try
console.log(books.map((book) => book.genre));

// Expected Output
// ["Infinite Jest",  "The Catcher in the Rye"]
