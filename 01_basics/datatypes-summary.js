              /*                     datatypes
                             /                                    \
                         /                                           \

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
