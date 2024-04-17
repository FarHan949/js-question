// The Array Filterer: You are building a search feature for your e-commerce site.
//  Write a function named filterProducts that takes an array of product objects and a filter criterion. T
//  he function should return a new array containing only the products that match the filter criterion.

const filterProducts = (products , criterion) => {
    
    const filteredProducts = products.filter( product =>{
     // Here, you can define your own logic for filtering based on the product properties
     // For example, let's assume each product has a "category" property
    return product.category === criterion;
    })
    return filteredProducts
}

const products = [
    { id: 1, name: 'Coffee Maker', category: 'Appliances' },
    { id: 2, name: 'Headphones', category: 'Electronics' },
    { id: 3, name: 'Coffee Beans', category: 'Food & Beverage' },
    { id: 4, name: 'T-Shirt', category: 'Apparel' },
  ];
  
  // Example usage: Filter products by category
  const filteredByCategory = filterProducts(products, 'Electronics');
  console.log('Filtered by category:', filteredByCategory);
  
  // You can define different criteria based on your product object structure
  // For example, filter by name
  const filteredByName = filterProducts(products, 'Appliances');
  console.log('Filtered by name:', filteredByName);  