// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){
//--------------------------------------------------------------checking if array empty------------------------------------------------------------------------//
const userEmail = []

//wrong*****
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}




//right***********
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


//-------------------------------------------------------------------------------------------checking for obj--------------------------------------------------------------------------//
const emptyObj = {}

//Object.keys(emptyobj) give a array of keys
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


//------------------------------------------------------------------------------Nullish Coalescing Operator (??)-----------------------------------------------------------------------------------//
//JO NHI FIRST VALUE HOGA EXCEPT NULL AND UNDEFINED LE LEGA
// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);



//---------------------------------------------------------------------------------------------ternary opr---------------------------------------------------------------------//
// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
 
//-----------------------------------------------------------------------------------------INTERVIWER---------------------------------------------------------------------//
//1.CHEK ARRAY AND OBJ EMPTY 2. ?? OPR