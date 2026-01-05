// Create a function that returns a greeting message based on time of day
   
  // Your code here - use Date methods to determine the current hour
  // Morning: 0-11, Afternoon: 12-17, Evening: 18-23
  // const hour = new Date().getHours();

  // if (hour>=0 && hour <= 11) {
  //   console.log(`Good morning ${name}`);
  // }
  // else if (hour >= 12 && hour <= 17) {
  //   console.log(`Good afternoon ${name}`);
  // }
  // else if (hour >= 18 && hour <= 23) {
  //   console.log(`Good evening ${name}`);
  // }

    const greet = (name) => {
    // when the user get the greeting  
    const hour = new Date().getHours();

    if (hour >= 0 && hour <= 11) {
      return `Good morning, ${name}!`;
    }
    else if (hour >= 12 && hour <= 17) {
      return `Good afternoon, ${name}!`;
    }
    else if (hour >= 18 && hour <= 23 ){
      return `Good evening, ${name}!`;
    }
  };

// Test with different times
console.log(greet("Alice"));


  
  // const hour = new Date().getHours(); // 0–23

  // if (hour >= 0 && hour <= 11) {
  //   return `Good morning ${name}`;
  // } else if (hour >= 12 && hour <= 17) {
  //   return `Good afternoon ${name}`;
  // } else {
  //   return `Good evening ${name}`;
  // }
  



