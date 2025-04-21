function setTimeoutPromisified(ms){
    let p= new Promise(resolve=>setTimeout(resolve , ms));
    return p;
}

function callback(){
    console.log("3 seconds passed");
}

//****same as setTimeout(callback,3000);
// setTimeoutPromisified(3000).then(callback);


//****this is returning instance of instance of promise class */
let p = setTimeoutPromisified(3000)
console.log(p);
