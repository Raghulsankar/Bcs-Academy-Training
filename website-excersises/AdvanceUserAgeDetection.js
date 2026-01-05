const userWithFullProfile = {
  id: 1,
  name: "Alice",
  profile: {
    age: 25,
    address: {
      city: "Wonderland",
      zip: "12345",
    },
  },
};

const userWithPartialProfile = {
  id: 2,
  name: "Bob",
  profile: {
    age: null,
  },
};

// Write a function that safely extracts user age from complex objects
const getUserAge = (user) => {
  // Your code here

  // return user?.profile?.age ?? "Age not provided";

  const age = user?.profile?.age ?? "Age not provided";
  return age != null ? String(age) : "Age not provided";
  
};

console.log(getUserAge(userWithFullProfile));
console.log(getUserAge(userWithPartialProfile));
console.log(getUserAge({ id: 3, name: "Charlie" }));