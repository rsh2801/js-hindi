
//note-working of comarisions >,<,>=,<= and == and === are diff
//== comapre by changing datatype also "2"==2 ->true
//=== compare not only value but data type also "2"===2 ->false




// comparing string with nos
console.log("== behaviour");
 console.log("2" >1);  //auto matically converts string 2 to nos.
console.log("02">1);


console.log("null baba");
console.log(null > 0);  //both == and conversion >=, <= work diff
console.log(null == 0);//comparisions >,<,>= etc convert null to zero so 0> 0 false
console.log(null >=0); //while == not convert to 0 it convert to NAN so null == 0 is false


console.log("undefine baba");
console.log(undefined == 0);//undefine conversion with any other thing gives false



console.log("== vs ===");
console.log("2" == 2); //true as do comparsin by changing datatype
console.log("2"===2);//strictly check equality do not convert datatype





