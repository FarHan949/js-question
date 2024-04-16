// The Sum Selector: You are working on a function that should sum all numbers in an array until it
//  encounters a negative number. Write a function that performs this summation.

const sum = (arr )=>{
    let result= 0;
    for(let i = 0; i < arr.length; i++){
        if( arr[i] < 0){
               break
        }

    result += arr[i] 

    }
    return result
}

const number = [5,9,7,-8,1]
console.log(sum(number))