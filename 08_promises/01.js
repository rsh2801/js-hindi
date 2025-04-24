//-------------------------------------------------------------------------promised created------------------------------------------------------------------------------//
//a promise is better way to say completion of a task
const promiseOne = new Promise(function(resolve, reject){    //resolve - reject is also a fxn
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(resolve,3000);                             //jab resolve call hoga to .then() me promise consume hoga
})


//***using the promising class */
promiseOne.then(function(){
    console.log("Promise consumed");
})

//--------------------------------------------------------------------readFile promise--------------------------------------------------------------------------------------------//
const fs = require("fs");

function clear(resolve) {
    fs.readFile("a.txt", 'utf-8', function(err, data) {
    
        setTimeout(() => resolve(data), 3000);
    });
}

const clear_File = new Promise(clear);

clear_File.then((data) => {
    console.log(data);
});
//------------------------------------------------------------------------------understanding---------------------------------------------------------------------------//
//1. promise eek class hai so new promise(---)  ----> iske aandar same jai new rect(10,20) daalte hai waise he eek fxn descibing about its asyn job bhejna hota hai
//2. promise ke aandar eek fxn hota hai jisska argument do fxn hote as resolve() and reject()
//3. after async task call resolve(data) to join it with .then(callback) {callback get data}
//4.similarly for reject   to join with .catch();
