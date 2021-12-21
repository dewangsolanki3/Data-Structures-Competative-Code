let array = [2,7,4,3]

let target = 7


let reqObject = {}

for (let i = 0; i < array.length; i++) {
    let reqValue = target - array[i]
    let index2 = reqObject[reqValue]

    if(index2!= null){
        console.log(index2, i)
    }
    else{
        reqObject[array[i]] = i
    }
}

console.log(reqObject)



























// for (let i = 0; i < array.length; i++) {
//     for (let j = i; j < array.length; j++) {
//         if(array[i] + array[j] == target){
//             console.log(array[i],array[j])    
//         }    
//     }    
// }