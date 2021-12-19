let bio1 = {
    "name":"Dev",
    "age":23,
    "weight":60,
    "location":"mumbai"
}

let bio2 = {
    "name":"Raj",
    "age":23,
    "weight":75,
    "location":"mumbai"
}

let commonAttributes = (object1, object2) => {
    let common = Object.entries(object1).filter( n => (n[1] == object2[n[0]]))
    console.log(common)
} 

// 'n' above is -  
// [
//     [ 'name', 'Dev' ],
//     [ 'age', 23 ],
//     [ 'weight', 60 ],
//     [ 'location', 'mumbai' ]
// ]
  
commonAttributes(bio1,bio2)
