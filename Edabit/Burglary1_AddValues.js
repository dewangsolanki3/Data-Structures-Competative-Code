let loss = (object) => {
    let sum = Object.values(object).reduce( (p,c) => p+c)
    console.log(sum)
}







const stolenItems = {
    tv: 30,
    skate: 20,
    stereo: 50
} 
loss(stolenItems)







