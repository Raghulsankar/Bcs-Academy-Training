const users = [
  { id: 1, name: "Alice", friends: [{ name: "Bob" }, { name: "Charlie" }] },
  { id: 2, name: "David", friends: [{ name: "Eve" }, { name: "Frank" }] },
  { id: 4, name: "Deepak", friends: [] },
];

// Write a function that returns the name of a user's first friend
const getFirstFriendName = (users, userId) => {
  // Your code here - use nested destructuring

  const user = users.find(({ id }) => id === userId);

  if (!user) return "User not found";

  const { name, friends } = user;

  if (!friends.length) return `${name} has no friends 🥲`;

  const [{ name: firstFriend }] = friends;

  return firstFriend;
};

console.log(getFirstFriendName(users, 1));
console.log(getFirstFriendName(users, 2));
console.log(getFirstFriendName(users, 3));
console.log(getFirstFriendName(users, 4));
