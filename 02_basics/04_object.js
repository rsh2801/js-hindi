const tinderUser = new Object()
// const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);



//-------------------------------------------------------object of object--------------------------------------------------------------------------/

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);



//----------------------------------------------------------merging object------------------------------------------------------//

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//neeche object ke aandar object aa jaege har eek elemnt spread nahi hoga
// const obj3 = { obj1, obj2 }

//assign spread karta hai but iska syntax hota hai like object.assign(target_obj_toreturn :{},obj1,obj2----)
//agar {} use nahi karte as target then obj1 first me likhte so obj1 me baki sara obj ka element chal jata and obj1 change ho jata

// const obj3 = Object.assign({}, obj1,obj2,obj4)



//same as array spread operator
const obj3 = {...obj1, ...obj2}
console.log(obj3);



//----------------------------------------------value comming from data base as array of obj-----------------------------------------------------------//
//arary of obj
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email


//---------------------------------------------------------------------fxn like finding keys-values-entries, imop for database--------------------------------------------------//
//keys,values,entries(array of array) inn sab ka return  data types array hota hai so ye bahut helpfull hai as looping is easy now

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//like s.find(x) so that s[x] do not crash return type boolean
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



//--------------------------------------------------------------------------------------------DESTRUCTURING---------------------------------------------------------------------//
//CURLY BRASE MILY TO DESTRUCTING SOCHO 

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

//courseInstructor direct accessing with dot operator by destructuring
// const {courseInstructor} = course
// console.log(courseInstructor);


//courseInstructor direct accessing with dot operator by destructuring with short name
// const {courseInstructor:ins} = course
// console.log(ins);



//--------------------------------------------------------------------JSON FILE FROM API LOOK----------------------------------------------------------------------------//
// JSON LOOK LIKE OBJECT BUT KEYS BHI STRING HOTE HAI AND NO NAME OF OBJECT 
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


//EAISE BHI API BHEJ SAKTA HAI 2ND LOOK
[
    {},
    {},
    {}
]



//---------------------------------------------------------------------------------interviwer----------------------------------------------------------------------------//
//1.destructuring,2.joining objects return obj,3.array[object] by entries,keys,etc return array