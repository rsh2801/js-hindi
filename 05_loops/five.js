//--------------------------------------------------------------------------for each loop-----------------------------------------------------------//
//syntax array_name.forEach( function(parameters){
//kya karna hai array ke parameters ka});


const coding = ["js", "ruby", "java", "python", "cpp"]

//**********forEach ke aandar eek call back fxn hota hai i.e fxn without a name***********/

//normal fxn*******
coding.forEach( function (val){
//     console.log(val);
} )

//arrow fxn******
coding.forEach( (item) => {
//     console.log(item);
} )

//fxn with refrence only not call i.e. - only(printMe) not (printMe())******
function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)


//multiple argument******************************
coding.forEach( (val,index,arr)=>{
    // console.log(val,index,arr);
    
})

//array of obj
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )