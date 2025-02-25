              /*                    <-datatypes->
                             /                                    \
                         /                                           \
                      /                                                \

                   primitive datstypes                        non premetive or reference datatype
        They are call by value, while copying             They are call by reference,memory me reference allocate kiya jata hai.
        whole data is copied.                                
        eg-string,Number,Boolean,null,undefined,             eg-array,object,function
       symbol(value ko unique bannae me use aata hai),
       BigInt.




*/

const id= Symbol('123');
const anoid = Symbol('123');
//return type of id string nahi symbol hogi
//id and anoid me bhale same val hsi'123' but id and anoid symbol datatype hai dono unique hoge so alag manejaege so id==anoid->false
console.log(id==anoid);


const bignumber=2342520574239054n;//n last me laga doo

const hero=['jai','shah','amit'];//array

let myobj={          //curly braces ke ander hai to object
    name :"hitest",
    age : 22,
}

const myfun=function(){   //function as variable -function keyword necessary
    console.log("hello word");
}

//important typeof behaviour with different datatype
console.log(typeof (bignumber))

/*Return type of variables in JavaScript
=======================
 Primitive Datatypes
---------------------------------------------------
       Number =>     number
       String  =>        string
       Boolean  =>    boolean
       null  =>             object
       undefined  =>  undefined
       Symbol  =>      symbol
       BigInt  =>         bigint
========================
 Non-primitive Datatypes
---------------------------------------------
       Arrays  =>       object
       Function  =>  function
       Object  =>       object */






