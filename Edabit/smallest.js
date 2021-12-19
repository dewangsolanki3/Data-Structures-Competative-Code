// 1. Using for loop
let array = [55,44,22,88,66,77,11,100,99]
let smallest_Number = array[0]
let iArray = []

for(let i = 0; i< array.length; i++){
    if(array[i] < smallest_Number){
        smallest_Number = array[i]
    }
}
console.log(smallest_Number)



// 2. Using Math.min()
console.log(Math.min(...array))



// 3. Using map()
// array.map( n => {
//     if(n < smallest_Number ? smallest_Number = n 
// })