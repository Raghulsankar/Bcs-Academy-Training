// const books = [
//   { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
//   { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
//   { title: "Sapiens", rating: 4.9, genre: "History" },
//   { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
//   { title: "Clean Code", rating: 4.7, genre: "Technology" },
// ];

// // // Clue: Array method - push()
// function getTitles() {
//   const titles = [];

//   for (let book of books) {
//     titles.push(book.title);
//     // console.log(`${book.title}`);
//   }
//   return titles;
// }

// console.log(getTitles(books));

// ["Infinite Jest",  "The Catcher in the Rye", "Sapiens",  "A Brief History of Time",  "Clean Code"]
// console.log(books.push(`${book.title}`)); //infinte loop

// Task 1.2
// Please provide the only Fiction books

// Expected Output
// // ["Infinite Jest",  "The Catcher in the Rye"]

const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

// Clue: Array method - push()

function FictionTitles(books) {
  let values = [];
  for (let book of books) {
    if (book.genre == "Fiction") {
      values.push(book.title);
    }
  }
  return values;
}
console.log(FictionTitles(books));
