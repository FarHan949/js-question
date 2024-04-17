// The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously.
//  Write an async function named brewCoffee that takes the type of coffee and returns a promise. 
// The promise should resolve with a message indicating that the coffee is ready after a random delay.

const brewCoffee = (coffeeType)=>{

    const validCoffeeType = [' Doppio', 'Cappuccino','Flat White','cold coffee']

    if(!validCoffeeType.includes(coffeeType)){
        throw new Error('Invalid coffee type! Please choose from: Doppio , Cappuccino, Flat White, cold coffee');
    }

    const randomDelay = Math.floor(Math.random()*5) + 1

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`Your ${coffeeType} is ready! Enjoy!`)
        }, randomDelay * 1000)
    })
}

async function makeCoffee() {
    try {
      console.log("Brewing coffee...");
      const coffeeType = 'cold coffee'; // Change this to test different coffee types
      const coffeeMessage = await brewCoffee(coffeeType);
      console.log(coffeeMessage);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  // Call the function to make coffee
  makeCoffee();