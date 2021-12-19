let addName = (object, name, value) => {
    // let newObject = Object.assign(object, { [name] : value })
    // ============== OR ===============

    let newObject = {...object, [name] : value}                 // Here we wrap [name] ?????????
    console.log(newObject)
}

addName({ piano: 500, cactus: 600 }, "Brutus", 400)

// let myObj = {
//     name: "John",
//     hi: "Susan"
//   }

//   let newObj = { ...myObj, yo: "Lucas" }            // Notice, here you dont put as   [yo]   instead just   yo

//   console.log(newObj)



array = [1,2,3]
console.log(...array)

