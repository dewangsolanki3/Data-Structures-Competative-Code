let findNemo = (text) => {
    let lowText = text.toLowerCase()

    if(lowText.includes("nemo")){
        let textArray = lowText.split(" ")
        textArray.map( word => {
            if(word.includes("nemo")){ 
                console.log("I found Nemo at", textArray.indexOf(word) + 1)
            }
        })
    }
    else{
        console.log("No Nemo found :(")
    }
}




// let findNemo2 = (text) => {
//     let lowText = text.toLowerCase()
//     let indexOfNemo = lowText.split(" ").findIndex( i => i == "nemo")
//     console.log(indexOfNemo)
// }


findNemo("hi how are you Nemo, I am here!")
