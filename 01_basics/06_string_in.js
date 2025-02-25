// a.you can choose single quotes ('), double quotes ("), or backticks (`) to wrap your strings in. All of the following will work:
const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

//b. Strings declared using backticks are a special kind of string called a template literal
const name = "Chris";              //1.embedding js with backticks
const greeting = `Hello ${name}`;
console.log(greeting); // "Hello, Chris"

// c. do professionally concatenation
const greeting1 = "Hello";
//simple hai + ka use but use backticks only
console.log(greeting + "," + name); // "Hello, Chris"
console.log(`${greeting}, ${name}`);

//d.multiline string using backticks without using \n
const newline = `One day you finally knew
what you had to do and began,`;
console.log(newline);






