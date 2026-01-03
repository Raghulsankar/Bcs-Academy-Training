const user1 = { name: "Alice", age: 25 };
const user2 = { name: "Bob" };
const user3 = null;

// Create a function that safely gets a user's age
const getUserAge = (user) => {
  // Your code here - use optional chaining
  return user?.age;
  
};

console.log(getUserAge(user1));
console.log(getUserAge(user2));
console.log(getUserAge(user3));