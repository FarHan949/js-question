// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original.
//  Write a function that appends the reversed version of the original string to itself.

  const reverseString = (srt) =>{
     return srt.split("").reverse().join("")
  }


const mirrorMirror =(srt)=>{

     let reverse =  srt.split("").reverse().join("")
  
   return srt + reverse
}

const ho = "hello"
console.log(reverseString(ho))
console.log(mirrorMirror(ho))