const settings1 = { theme: "dark" };
const settings2 = { theme: null };
const settings3 = { theme: undefined };
const settings4 = {};

// Create a function that gets theme with a default value
const getTheme = (settings) => {
  return settings?.theme ?? "light";
};

console.log(getTheme(settings1));
console.log(getTheme(settings2));
console.log(getTheme(settings3));
console.log(getTheme(settings4));