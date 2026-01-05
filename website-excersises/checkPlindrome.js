const inputs = ['Madam', 'RaceCar!', 'Hello'];

// Write a function that checks for palindrome
const isPalindrome = (s) => {
  // Your code here

// method 1
   const clean = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  return clean === [...clean].reverse().join('');


  //method 2
  //   const clean = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // let left = 0;
  // let right = clean.length - 1;

  // while (left < right) {
  //   if (clean[left] !== clean[right]) return false;
  //   left++;
  //   right--;
  // }
  // return true;
  
};

console.log(inputs.map(isPalindrome));