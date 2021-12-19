let areaOfCountry = (country, area) => {
    let calculation = ((area/148940000)*100).toFixed(2)  
    console.log(`${country}'s total area is` , calculation, "%")
}


// The total world's landmass is 148,940,000 [Km^2]
areaOfCountry("Russia", 17098242)