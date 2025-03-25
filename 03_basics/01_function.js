//-------------------------------------------------------------------------FUNCTION DECLEARATION,EXTRACTION,RETURN----------------------------------------------------------//

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
//calling****
// sayMyName()
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);



//--------------------------------------------------------------------------ARGUMENT-PARAMETER-RETURN TYPE OF EMPTIED ARGUMENT FXN------------------------------------------------------------------------------//
//FXN DEFINATION TIME INPUT -parameter
//CALLING TIME FXN IMPUT- argument
//FUNCTION KE SAMAY AGAR KUCH PASS NAHI KIYA TO undefined OUTPUT AATA HAI, WHI INT HAI STRING PAAS KAR DIYA TO STRING LETURE ME OPERATION PAR STRING JAISE BEHAVE KARTA HAI WAISA KAREGA


function loginUserMessage(username){   
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))



//--------------------------------------------------------SHOPPING CART-rest operator------------------------------------------------------------------------------------//
//KABHI KABHI HAME PATA NAHI HOTA KII KITNA INPUT HAI SO IN SUCH CASE "REST - ..." OPERATOR IS USING TO COLLECT THEM TO ONE IN FORM OF ARRAY
//SPREAD OPERATOR BHI EAISA HE DIKHA HAI BUT USE CASE KE ANNUSAR DHAL LETE HAI AND ACT AS REST AND SPREAD

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000)) //output=  [200,400,500,600]


//-------------------------------------------------------------------function with object & array as argument-------------------------------------------------------------//
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//calling upper obj *********
// handleObject(user)

 //calling fxn with obj define instantaneously****
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));

//----------------------------------------------------------------------------INTERVIEW----------------------------------------------//

//1. output of this
function  flashcard(val1,val2,...num){
    return num

}

//val1,val2 takes up first 2 values
console.log(flashcard(200,300,400,500)) //o/p=[400,500]