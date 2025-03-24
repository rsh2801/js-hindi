
//-----------------------------------------------------------creation---------------------------------------------------------------//

//object create karne ke doo tareke hai one using constructors,i.e-object.create() and other is as literals,i.e. {}
//Through literals jo bante hai wo singleton hote hai and constructor ke through walo ka multiple instance ho sakta hai
//through literals is here with a symbol keyword in object syntax is [symbol_name];
//
const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",             //symbol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//----------------------------------------------------------------------fetching data---------------------------------------------------------//
//ya to dot use kare ya key ko as string likh dono jaruri hai string wala when value bhi key-value me ho tab use hota hai
//symbol ka sytax alag hai yaha string nai lethe

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])

// console.log(JsUser[mySym])

//---------------------------------------------------------------------frezzing oject for no chamges---------------------------------------------//

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);


//------------------------------------------------------------------------function to obj-------------------------------------------------------//
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





//---------------------------------------------------------------------INTERVIEWER--------------------------------------------------------------//
//1.SYMBOL IN OBJECT AND WHY FETCH WITH [" "]