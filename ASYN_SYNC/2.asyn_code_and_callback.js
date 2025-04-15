
const fs=require("fs");
const { console } = require("inspector");

function print(error,data){
    console.log(data);
}

//fs.reeadfile("location","coding_type","call_backfxn ")
//"call bckfxn" is called after completion of reading here
const contenta= fs.readFile("a.txt",'utf-8', print)  //asnchronously
const contents= fs.readFile("a.txt",'utf-8', print)   //asnchronosuly

console.log("print 1")

setTimeout(()=>console.log("print 2"),1000)