// ----------------------------------------------------------------------async await-------------------------------------------------------------->
// async/wait is just synthetical sugar on top of promises
// it provides async code to look and behave like a sync code making it easier to rad and maintain
// same ques as previous with wait

function setTimeoutPromisified(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

//this is just syntactic sugar uses .then(return) syntax internally for async  
async function solve() {
    await setTimeoutPromisified(1000);
    console.log("hi");
    await setTimeoutPromisified(3000);
    console.log("hello");
    await setTimeoutPromisified(5000);
    console.log("hello there");
}
solve()
console.log("who")

const { rejects } = require("assert");
const { log } = require("console");
// output =>  who->hi->hello->hello there




// ------------------------------------------------------------------------------------error handling---------------------------------------------------------------


const fs = require("fs");
function clear(resolve,reject) {
    fs.readFile("a.txt", 'utf-8', function(err, data) {
       if(err){
        reject("file not found")
       }else resolve(data);
    });
}
const clear_File = new Promise(clear);

// ***********normal*************
clear_File.then((data)=>console.log("file founded",data)).catch((e)=>console.log(e))


// ************with try and catch********
// async function readFileAsync() {
//     try {
//         const data = await clear_File;
//         console.log("File founded", data);
//     } catch (error) {
//         console.log( error);
//     }
// }

// readFileAsync();