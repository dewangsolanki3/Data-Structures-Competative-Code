// let testJackpot = (array) => {
//     let newArray = array.reduce((acc, item) => console.log(acc, item))
//     console.log(newArray) 
// }


// let testJackpot = (array) => {
//     // let newArray = array.filter(n => n == array[0] )
//     let newArray = new Set(array).size === 1
//     console.log(newArray)
// }


let testJackpot = (array) => {
    let result = array.every( n => array[0] == n)
    console.log(result)
}



testJackpot(["@","@","@","@"])
testJackpot(["@","%","&","*"])
