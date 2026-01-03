const userData = {
  user: {
    profile: {
      name: "Alice",
      age: null,
    },
  },
};

const userWithAge = { user: { profile: { age: 25 } } };
const userWithoutProfile = { user: {} };

// Write a function that safely returns the user's age or a default message
const getUserAge = (data) => {
  // Your code 
  return data?.user?.profile?.age ?? "Age not provided"; 
};

console.log(getUserAge(userData));
console.log(getUserAge(userWithAge));
console.log(getUserAge(userWithoutProfile));