 /*Conditional : Making decision 
 eg. Write a program to check a person can vote or not
 Input : Age should be minimum 18 years 
 Output : A message saying he can vote or not.
 Test case to check.
 */

 let age = 16;
 if (age >= 18) {
    console.log('He can  vote');
 } else {
    console.log("Warming: He is child now");
}

//let us take a example print result

let Amit_marks = 45;
if (Amit_marks<33) {
   console.log("Amit is Fail");   
} else if (Amit_marks<=60){
   console.log("Amit is 2nd Division");  
}else{
   console.log("He Is a Topper");
}

/*Nested if else
To perform complex decision we have to use nested conditions
*/
/* 

Ternary Operator
Syntax:- variable = condtions ? true : false;

eg:- Please check Amit is eligible to fill vote or not 

*/
 let 