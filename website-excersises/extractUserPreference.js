const userProfile = {
  id: 1,
  name: "Eve",
  settings: {
    theme: "dark",
  },
};

const userWithoutSettings = { id: 2, name: "Adam" };

// Write a function that extracts the user's name and theme with default values
const getUserSettings = (user) => {
  // Your code here - use destructuring with default values

  const { name, settings: { theme ='light' } = {}  } = user;
  return `${name} prefers the ${theme} theme`;
  
};

console.log(getUserSettings(userProfile));
console.log(getUserSettings(userWithoutSettings));