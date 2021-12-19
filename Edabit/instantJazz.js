let jazzify = (notes) => {
    if(!notes.length) return 
    
    let newNotes = notes.map( note => note.includes("7") ? note : (note + 7))
    console.log(newNotes)
}



jazzify(["G", "F7", "C"]) 