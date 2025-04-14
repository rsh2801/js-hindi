const fs=require("fs")

//syncchronous reading reading happen line by line
const contenta= fs.readFileSync("a.txt",'utf-8')
console.log(contenta)


//async reading
const contents= fs.readFile("a.txt",'utf-8')
console.log(contents)