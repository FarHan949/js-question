// The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous 
// function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with 
// an order confirmation message after a random delay.

function placeOrder() {
    return new Promise((resolve, reject) => {
      // Simulate a random delay between 1 to 5 seconds
      const randomDelay = Math.floor(Math.random() * 5) + 1;
      
      // Simulate placing an order process
      setTimeout(() => {
        // Generate a random order ID
        const orderId = Math.floor(Math.random() * 1000) + 1;
        
        // Create the order confirmation message
        const confirmationMessage = `Order #${orderId} has been placed!`;
        
        // Resolve the Promise with the confirmation message
        resolve(confirmationMessage);
      }, randomDelay * 1000); // Convert seconds to milliseconds
    });
  }
  
  // Test the function
  placeOrder()
    .then(confirmation => {
      console.log(confirmation); // This will log the order confirmation message
    })
    .catch(error => {
      console.error('Error placing order:', error);
    });
  