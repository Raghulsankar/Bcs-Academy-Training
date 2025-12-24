// task - increment the age by 1
// petProfile.age = 4;

var petProfile = {
  name: "Buddy",
  type: "Dog",
  age: 3,
  color: "White",
  legs: 4,
};
//method 1
//Accessing and updating the age property
petProfile.age = petProfile.age + 1;
console.log(petProfile.age);

//method 2

console.log(petProfile.age++);
console.log(petProfile.age);

//method 3
//recommanded
petProfile.age += 1;
console.log(petProfile.age);

petProfile.name = "fluffy";
console.log(petProfile.name);
