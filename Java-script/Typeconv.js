/*Type conversion on Java-Script*/
let score =45;
let marks = '15';
console.log(typeof score);
console.log(typeof marks);
console.log(typeof (score));//in form of method 

/* Good way of writing Score */
let Result = '35A'

let valueInNumber = Number(Result);
console.log(valueInNumber);
console.log(typeof valueInNumber);

let someNumber = '55';
let StringNumber = String(someNumber);
console.log(StringNumber);
// output is number which is 33 but there  type is String
console.log(typeof StringNumber);

/************ Operations on Java-Script ************/
let value ='3';
let negValue = -value;
console.log(negValue);

console.log('1'+2);//12
console.log(1 + '2');//12
console.log('1'+2+2);//14 predicted but why output is 122 *To Premtive
console.log(1+2+'2');//32

//Some Tricky Conversion 
console.log(+true);//1
console.log(+"");//0

let gameCounter = '100';
gameCounter++;
++gameCounter;
console.log(gameCounter);
//Some Exception cases on Java-Script Type Conversion
















