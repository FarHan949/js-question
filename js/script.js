const arrays = ['sakib', 'kajol','chowduri','kabir','ranvijayShing','haturiShing','Alura Janson', 'ArikaSky']
let arr = []
for (const array of arrays) {
    if(8>array.length){
        arr.push(array)
    }
}

const [x,z,...r] = [5,'k',7,8]
console.log(x,z,r)
console.log(arr)
console.log(arrays.length)