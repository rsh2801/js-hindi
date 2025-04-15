// /-------------------------------------------------------setTimeout is also asyn-----------------------------------------------------------------------------------//
function print(){
    console.log("hello")
}
setTimeout(print,1000);  //i-o intensive

console.log("start loop")

for(let i=0;i<100000000;i++){   //cpu intensive

}
console.log("end loop1")

console.log("end loop2")
//after clearing cpu intensive task then only we can move to callback queue
//look set time out and this readfile asyn thing are not part are original javascript the are all provided by browser apis by callback queue see code aur chai(37 lec)
//  so if they are called and cpu thread is still engaged in some thread then only after cpu thread word completion they can be called from callback queue as js is single threaded


