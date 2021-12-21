// let num1 = 123
// let num2 = 112

let add = (a,b) => {
    let aArr = a.toString().split("").map( n => Number(n)).reverse()
    let bArr = b.toString().split("").map( n => Number(n)).reverse()
    
    console.log(aArr)
    console.log(bArr)

    let Totalsum = ""
    let carryNum = 0
    let isCarry = false
    aArr.map( (n,i) => {
        let add = n + bArr[i]

        if(isCarry){
            add += Number(carryNum)
            isCarry = false   
        }

        if(add >= 10){
            isCarry = true
            carryNum = add.toString()[0] 
            Totalsum += add.toString()[1]
            return
        }

        Totalsum += add
    })
    console.log(Totalsum.split("").reverse().join(""))
}


add(123,107)

