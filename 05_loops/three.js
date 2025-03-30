//--------------------------------------------------------------------------------for of ------------------------------------------------------------------------------------//
//seedhe value uta leta hai not key value concept
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

//---------------------------------------------------------------------------------------MAPS-----------------------------------------------------------------------------------//
//The Map object holds key-value pairs and remembers the original insertion order of the keys. 
// Any value (both objects and primitive values) may be used as either a key or a value.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}




//************************(INTERVIWER)object are not iteratable ny for of loops, hwile maps are */
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
//wrong**error*****************
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }