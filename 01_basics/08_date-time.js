//yaha date eek object hai jo ki 1970 midnight se time count kar raha in millisec

//-- Simple Date Extraction --// 
// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

//-- Different Representations --//
// let myCreatedDate = new Date(2025, 0, 23) 
// let myCreatedDate = new Date(2025, 0, 23, 5, 3)
// let myCreatedDate = new Date("2025-01-14")
// let myCreatedDate = new Date("01-14-2025")
// console.log(myCreatedDate);
// console.log(myCreatedDate.toLocaleString());

// --for formatting use back ticks with time--//
// `${newDate.getDay()} and the time `

//--to local string format of date extraction allow many customised option (ctrl_ space)--//
// newDate.toLocaleString('default', {
//     weekday: "long",
    
// })







// ---------------------------------------------------
// -->interview

//0.data type of date
// console.log(typeof myDate);

// 1.Giving time span for buzzer-current time
// let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// 2.current time in seconds
// console.log(Math.floor(Date.now()/1000));

//3.value in millisec for comparing of any data decleared by Gettime
// let myCreateDate = new Date(2023, 0, 23)
// console.log(myCreateDate.getTime());

//4.Get month - Get Day
// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());




