/*Function is a piece of code which we use as per our requirment 
DRY: Don't repeat Yourself.

//Synatx of Function 
function Sayhi(){
    //block of code 
    console.log("Hii Amit");
    console.log("I feel you are Happy");
}
*/
function SayHi(name){
    console.log(`Hello, ${name}`);
    
}
SayHi("shikha")

function addNumber(){
    sum =0;
    for(let i =0;i<arguments.length;i++){
        sum += arguments[i]
    }
    console.log(sum);
    
}

addNumber(1,2,3,4)

// function addTwoNumber(num1, num2){
//     console.log(num1*num2);
    
// }
function addTwoNumber(num1,num2){
    let result = num1*num2
    return result
    
}
addTwoNumber(5,5)