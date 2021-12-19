let isAnagram = (a,b) => {
    let check = a.toLowerCase().split("").map( letter => b.toLowerCase().includes(letter))
    check.includes(false) ? console.log("Not :(") : console.log("It is! :)")
}


isAnagram("cristian messy", "Cristina ssemy")
// check if ALL LETTERS are SAME 






//  ====== GIT HUB ======
function isAnagram2(s1, s2) {
    const resolve = s => Array.from(s.toLowerCase()).sort().join('');
    console.log(resolve(s1) === resolve(s2));
}
// ===================  Decoding above logic =======================
//console.log(Array.from("Hello WorLd".toLowerCase()).sort().join(""))
//console.log(Array.from("HlloE Wrold".toLowerCase()).sort().join(""))
