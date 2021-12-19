let neutralise = (a,b) => {
    let neutral = ""
    for (let i = 0; i < a.length; i++){
        // console.log(a[i], b[i])
            if(a[i] == b[i]){
                neutral += a[i] 
            } 
            else{
                neutral += 0
            }
    }    
    console.log(neutral)
}



neutralise("+-+", "+--") 
// ➞ "+-0"