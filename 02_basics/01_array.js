

//-----------declearation----------------//
//arary of array,array of string sab posible hai zero based indexing
// const myArr = [0, 1, 2, 3, 4, 5]
// const myHeors = ["shaktiman", "naagraj"]
// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);


//----------------basic operation-----------/

/* 1.Push = adds value to last of an array.
2. Pop = removes last value of an array.
3. Unshift = adds value at first of an array.
4.Shift = removes first value of an array.
5. Includes = checks true or false.
6. IndexOf = checks the position of value in number form.
7.Join = converts to string.
8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.
*/

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


//----------------------------------------INTERVIEWER SECTION-------------------------------------//



//01.- Array ko js me copy karte hai to shallow copy banta hai ie.call by reference
// const num=[1,2,3,4]
// const cpy=num
// cpy[0]=5;
// console.log(num[0]);



// 02_SPLICE VS SLICE

const myArr = [0, 1, 2, 3, 4, 5]
console.log("original ", myArr);

//SYNTAX= array.slice(start_index, end_index); but return rnd se eek pahle tak karega
//slice-extract portion of array without changing original array
const myn1 = myArr.slice(1, 3)

console.log("slice new array " ,myn1);
console.log("ater slice orginal array ", myArr);

//syntax= array.splice(start, deleteCount, item1, item2, ...);
//splice- remove elemnts from array and change original array
const myn2 = myArr.splice(1, 3)
console.log("after splice array remain ", myArr);
console.log("spliced array" ,myn2);