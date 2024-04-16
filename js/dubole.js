/*The Double Trouble: You are tasked with writing a function that doubles each element in an array. 
However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.*/

const double=(arr)=>{
    let result = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i]===arr[i+1]){
            result.push(arr[i]*2)
            // i++
        }
        else{
            result.push(arr[i]*2)
        }
    }
    return result
}

const arr1 = [5,6,7,89,10]
console.log(double(arr1))