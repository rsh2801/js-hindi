//------------------------------------------------------------------------------filter need over for each loop---------------------------------------------------------------------------------------//
//filter use to remove elemets that donot match the condition, use for selecting elements with new array 
//original array remain un change

const coding = ["js", "ruby", "java", "python", "cpp"]

//for each loop do not return anything it simple perform the fxn //
const values = coding.forEach( (item) => {
    //console.log(item);
    return item
} )
//undefined value
// console.log(values);
 
//meanwhile filter return an array satisfying the con dition inside fxn //
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// implicit return taught in arrow fxn
// const newNums = myNums.filter( (num) => {
    // return num > 4
// } )

// explicit return  no need of return keyword
const newNums = myNums.filter( (num) => num>4)


//************FILTER WORK BY FOR EACH LOOP*********** */
const newNums1 = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums1.push(num)
    }
} )

// console.log(newNums1);

//-----------------------------------------------------------------------------------------object triming with filter------------------------------------------------------------------------//
//important for data bases
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);

  //---------------------------------------------------------------------INTERVIEWER-----------------------------------------------------------------------------------------------//
//   1.NEED OF FILTER 2.FILTER RETURN AN ARRAY 3.FILTER USE TO EXTRACT DATA FROM OBJ