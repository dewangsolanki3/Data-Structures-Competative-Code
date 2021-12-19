for(let i=1; i<=100; i++){
    if(i%3 == 0){
        if(i%5 == 0){
            console.log("fizzbuzz",i)
        }
        else{
            console.log("fizz",i)
        }
    }
    else if(i%5 == 0){
        console.log("buzz",i)
    }
}


// print fizz if *3, buzz for *5 and fizzbuzz for *3&5