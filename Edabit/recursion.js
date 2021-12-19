let myRecursion = (n) => {
    console.log(n)
    n--
    if(n >= 0){
        myRecursion(n)
    } 
}


// myRecursion(10)





let total = 0
let recursiveSum = (n) => {
    total += n 
    n--
    if(n > 0){
        recursiveSum(n)
    }
    return(total)
}


console.log( recursiveSum(3))