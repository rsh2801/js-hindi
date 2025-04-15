//------------------------------------------------------------readFile aynch-------------------------------------------------------------------//
let fs= require("fs");




//error and then data is recognise as argument for callabck fxn,developer of fs library had made it like return error of error reading it, if not then return data
function print1(error,data){
    console.log(error);  //null if no error
    console.log(data);
}

//****syntax of readFile
//****fs.reeadfile("location","coding_type","call_backfxn ")
//****{  call_back_fxn("Error!!","data in file")}

//"call bckfxn" is called after completion of reading here

const contenta= fs.readFile("a.txt",'utf-8', print1)  //asnchronously
const contents= fs.readFile("a.txt",'utf-8', print1)   //asnchronosuly

console.log("print 1")
console.log("print 1")

setTimeout(()=>console.log("print 2"),1000)


//------------------------------------------above order of print 1 , print 2 and a.txt,b.txt is directly asked in intervies-----------------------------------------//
