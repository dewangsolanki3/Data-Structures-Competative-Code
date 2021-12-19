let a1 = [1,2,3,4,5,6]
let a2 = [4,5,6,7,8,9]

let common = a1.filter( n => a2.includes(n))
console.log(common)


let longCommons = []
for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
        if (a1[i] == a2[j])  longCommons.push(a1[i])
    }
}
console.log("lmao", longCommons)