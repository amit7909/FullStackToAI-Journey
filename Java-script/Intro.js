// Here we have to learn Intro,Data-type,variables
//storage;CRUD 
console.log('shikha is not my friend');
//data type in JS
/*
String: Text form => ``,'',""
Number: Numerical value
Boolean: true,False
BigInt: big integer value
Symbol:Guarented unique value
Undefined: Reserved but not define 
Null:not reserved and not define,Empty;

*/
const a ='shikha';
console.log(`Hello ${a}`);
console.log(typeof a);//inside the string i am calling a variable
const b = Symbol('Hello Tiwari ji')
const c = Symbol('Hello Tiwari ji')
console.log(b == c);//Ans is False 
console.log(b != c);//Ans is True 

// Symbols return True only when the compaired variable values are differ.

//Let's go and see the magic 
let m =0/0; 
console.log(m);//this is a illegal operation show it return NaN.
console.log(typeof m );//type of NaN is number
 



