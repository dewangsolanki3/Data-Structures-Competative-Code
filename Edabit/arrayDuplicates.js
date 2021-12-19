let array = [1,2,3,4,5,6,3,4,5,7,8,9,10]
//======================================

// 1. Using for loop
let noDuplicates = []
for (let i = 0; i < array.length; i++) {
    if (!noDuplicates.includes(array[i])){
        noDuplicates.push(array[i])
    }       
}
console.log(noDuplicates)



// 2. Using - new Set()
let newArray = [ ...new Set(array) ]
console.log(newArray)



// 3. Using filter()
let filteredArray = array.filter( (n,i) => array.indexOf(n) == i)
console.log(filteredArray)
// let filteredArray = array.filter( (n,i) => console.log( i , array.indexOf(n) ))






