//memory- stack(primitive) + heap(non-premitive)

let a="roshan"   //string primitive so stored in stack and copy of whole string is sent to b
let b=a;
b="krishna"
console.log(a)
console.log(b);

console.log("\n"); //new line




let aobj={          //obj is not primitive so aobj variable will be stored in stack but its matter name etc will be in heap as of in c++
    name : "roshan"
}
let bobj=aobj    //and bobj will also be pointing to same referen at heap 
bobj.name="krishna"
console.log(aobj.name);
console.log(bobj.name);

