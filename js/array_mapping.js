// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array 
// of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.


function asyncMultiplyBy2(numbers) {
    // Map each number to a Promise
    let promises = numbers.map(number => {
      return new Promise((resolve, reject) => {
        // Multiply the number by 2 after a delay of 500ms
        setTimeout(() => {
          resolve(number * 2);
        }, 500);
      });
    });
  
    return promises;
  }
  
  // Test the function
  let numbers = [1, 2, 3, 4, 5];
  let promises = asyncMultiplyBy2(numbers);
  
  // To get the results when all promises are resolved
  Promise.all(promises)
    .then(results => {
      console.log(results); // Output: [2, 4, 6, 8, 10]
    })
    .catch(error => {
      console.error(error);
    });
  