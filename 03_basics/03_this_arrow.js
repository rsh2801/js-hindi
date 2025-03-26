//----------------------------------------------------------------------------this_pointer_for_object-------------------------------------------------------------------------//
//this pointer inside an object refers to the context of object 
//outside the object in node area it is like a empty object and in browser console act as object named window

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// ------------------------------------------------------------------------------this_pointer_in_a_fxn----------------------------------------------------------------------//
//this pointer inside a function shows  global object with inbuilt fxn of object inside it
//calling anything from this pointer in a fuction result undefined unlike object where contents are shown
//define fxn in any way direct,variable contended,through arrow same default is cout


// function chai(){
//     let username = "hitesh"
//     console.log(this);
// }

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()


// arrow fxn***********
const chai =  () => {
    let username = "hitesh"
    console.log(this.username);
}

chai()

//-------------------------------------------------------------------------------------Arrow_Function-------------------------------------------------------------------------//


//()=>{}

//*******explicit return with {} need return keyword    
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


//*****implicit return no need of return keyword (used in react), direct write returning thing 
// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 )

//******obj ko return karne ke liye braces() used karna he hoga
const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()


//------------------------------------------------------------------------------INTERVIWER----------------------------------------------------------------//
//1.THIS BEHAVIOUR IN FXN AND OBJ    2.WINDOW OBJ IN CONSOLE AND FXN OBJ IN FXN PLUS DEFAULT CASE     3.DIFF BETWEEN ARROW FXN AND NORMAL FXN
