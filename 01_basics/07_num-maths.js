//++++++++++++ NUMBER +++++++++++++++++++++++++++++++++++

const score = 400
console.log(score);
 //a.treated as obj,done to make a number variable compulsorly
const balance = new Number(400)
 console.log(balance);
 console.log(typeof (balance));
 
 
// console.log(balance.toString().length);

//b.fixed decimal places
const fi=097.8894
console.log(fi.toFixed(2));

//c.to precise number only decimal places get vanished
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(2));

//d.add comma in india type of currency, for us remove en-IN
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));
console.log("\n\n");

// // +++++++++++++ Maths +++++++++++++++++++++++++++++
//-a.its a object see Math in console for fxn in obj
console.log(Math);
console.log(Math.abs(-4));

//a.round off decimal places
console.log(Math.round(4.6));
//b.ceil floor min max
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

//very imp -> random() gives random nos. b/w 0 to 1
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)