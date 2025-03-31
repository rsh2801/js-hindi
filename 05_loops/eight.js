
//-------------------------------------------------------REDUCE----------------------------------------------------------------------//
//SAMJHO ARRAY KO SUM KAR RAHA 
//startvalue initially accumulator me jaege then currval and acc value work perfrom karege according to fxn then acc update ho jaega by result of operation
const myarr=[1,2,3,3,4]
const startvalue=5;
const billing=myarr.reduce( function(accumulator,currvalue){
    console.log(`acc: ${accumulator} and currval: ${currvalue}`);
    return accumulator+currvalue;
},startvalue)

console.log(billing);

//adding total bill from data base
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
