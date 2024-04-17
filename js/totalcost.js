// The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate 
// the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an 
// array of products with prices and quantities and returns the total cost.



function calculateTotal(products) {
   
    let totalCost = 0;
  
    // Loop through each product in the array
    products.forEach(product => {
        
      // Check if the product has both 'price' and 'quantity' properties
      if (product.price !== undefined && product.quantity !== undefined) {      
        totalCost += product.price * product.quantity;
      } 
      else {
        throw new Error('Product is missing price or quantity information.');
      }
    });
  
    return totalCost;
  }
  
  // Example array of products with prices and quantities
  const products = [
    { name: 'Coffee Beans', price: 10.99, quantity: 2 },
    { name: 'Mug', price: 5.99, quantity: 4 },
    { name: 'Coffee Maker', price: 49.99, quantity: 1 },
  ];
  
  // Calculate the total cost
  const total = calculateTotal(products);
  console.log('Total cost:', total.toFixed(2)); // toFixed(2) to display 2 decimal places
  