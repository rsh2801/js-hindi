// a.you can choose single quotes ('), double quotes ("), or backticks (`) to wrap your strings in. All of the following will work:
const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

//b. Strings declared using backticks are a special kind of string called a template literal
const name = "Chris";              //1.embedding js with backticks
const greeting = `Hello ${name}`;
console.log(greeting); // "Hello, Chris"

// c. do professionally concatenation
const greeting1 = "Hello";
//simple hai + ka use but use backticks only
console.log(greeting + "," + name); // "Hello, Chris"
console.log(`${greeting}, ${name}`);

//d.multiline string using backticks without using \n
const newline = `One day you finally knew
what you had to do and began,`;
console.log(newline);


//e.coercion a string eg null->"null", true->"true"
// Depending on your use case, you may want to use `${x}` (to mimic built-in behavior) or 
// String(x) (to handle symbol values without throwing an error), but you should not use "" + x


//e.  String with new keyword returns a string wrapper object with key value pair see in console.
const gameName = new String("l-u-d-o"); 
console.log(typeof gameName); 

console.log(gameName.__proto__)
console.log(gameName.length);
console.log(gameName.toUpperCase());//do in stack orginal gameName string remain same
console.log(gameName);
console.log(gameName.charAt(2));//kon sa char hai given pos pee
console.log(gameName.indexOf(2));//char kon se index pe hai

//substring 
const newstr=gameName.substring(0,4);//start pos to end diya jata hai hai end ind leta nahi hai
console.log(newstr);

//slice
const newsli=gameName.slice(-6,4) //ye bhi substr ke liye hota hai but neg ind de ke isme ghum ke peeche se le sakta hai
//substr me neg value dega to 0 le lega usko
console.log(newsli);

//remove spaces
const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

//to replace something in string
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))

//is given "str" is in the string-> true of false
console.log(url.includes('sundar')) //false

//split on basis of given "str" into an array
console.log(gameName.split('-'));










