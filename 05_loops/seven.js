//-------------------------------------------------------------------------------map-------------------------------------------------------------------------------------------//
//use to transform element of array sytax similar to array but donot trim array like filter based on condition

const myNumers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums1 = myNumers1.map( (num) => { return num + 10})

// console.log(newNums1);

//-------------------------------------------------------------------------chaining----------------------------------------------------------------------------------//
//myarr.map().filter().forEach();
//jab bhi chaining hote hai to uska value second chain me paas hota hai update ho ke

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num <40)

console.log(newNums);