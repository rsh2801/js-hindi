//ALL IMP FOR INTERVIEW EVERY CHIJ
//-------------------------------------------------------var-let-const-------------------------------------------------------------------//
//var makr the variable global
//var c = 300
let a = 300
if (true) {
    let a = 10   // this a is diff from outside a
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

//-----------------------------------------------------------------scope{}--------------------------------------------------------------------//
//dekh chote bacche ice chin sakte hai bad se badhe nahi same happen here


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);   //correct
    }
    // console.log(website); //error

     two()   //correct

}

// one()   /correct


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website); //correct
    }
    // console.log(website);  //wrong
}

// console.log(username);   //wrong


// ------------------------------------------------------------------- interesting : (hosting conscept further padhege)------------------------------------------------------------------//
//IN JS VARIABLE ARE VERY POWERFUL THE CAN CONTAIN A FUNCTION INSIDE THEM 

//1. DIRECT FXN
console.log(addone(5)) //correct allowed

function addone(num){
    return num + 1
}



//2.FXN CONTAIN IN VARIABLE
// addTwo(5)  //error fxn xontain in variable ko ye chhut nahi mile hai kii define karne se pahle call kar loo
const addTwo = function(num){
    return num + 2
}