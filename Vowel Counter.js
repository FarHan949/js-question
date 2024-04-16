// The Vowel Counter: You need to create a function that counts the number of vowels in a given string.
//  Consider both uppercase and lowercase vowels.

const vowels=(arr)=>{
 const vowels = ['a','e','i','o','u','A','E','I','O','U']

let count = 0

for (const chart of arr){
    if(vowels.includes(chart)){
        count++
    }
}
return count
}

let sentence = "Hello World!";
console.log(vowels(sentence)); // Output: 3 (e, o, o)

let phrase = "This is a test";
console.log(vowels(phrase)); // Output: 4 (i, i, a, e)