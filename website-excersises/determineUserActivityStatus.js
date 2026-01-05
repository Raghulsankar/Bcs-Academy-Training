const user1 = { name: "Jane", active: true };
const user2 = { name: "John", active: false };
const user3 = { name: "Alice", active: null };

// Write a function that returns a message indicating if the user is active
const getUserStatus = ({ name, active }) => {
  // Your code here - use template literals and conditional logic
    return `${name} is currently ${active ? "active": "inactive"}`;
};

console.log(getUserStatus(user1));
console.log(getUserStatus(user2));
console.log(getUserStatus(user3));