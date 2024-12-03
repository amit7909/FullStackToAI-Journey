/*Loops are use to perform itterative operations.
easy to perform multiple task in single write.
tere are so many tyes of loops like 
       For 
       Do while 
       while 
*/

//For loop- controlled loop 
const numberOfPizza = 10;
for (let i = 1; i<= numberOfPizza;i++) {
    console.log(`${i} pizza is ready`);
    
}
//while loop  : is not controlled and need for external work
//do while-it will run atlest once
//control statement : break and continue
/*    Switch Statement    */

/*
const day = 'Monday';
if(day === 'Monday'){
    console.log('It is a working day');
}else if(day === 'Tuesday'){
    console.log('It is a working day');
} else if(day === 'Wednesday'){
    console.log('It is a working day');
}else if(day === 'Thursday'){
    console.log('It is a working day');
}else if(day === 'Friday'){
    console.log('It is a working day');
}else if(day === 'Saturday'){
    console.log('It is a working day');
}else if(day === 'Sunday'){
    console.log('Today is holiday');
}
*/
//Short Method 
const day = 'Monday'

switch (day) {
    case 'Monday':
        console.log('It is a working day');
        break;
    case 'Tuesday':
        console.log('It is a working day');
        break;
    case 'Wednesday':
        console.log('It is a working day');
         break;
    case 'Thursday':
        console.log('It is a working day');
         break;
    case 'Friday':
        console.log('It is a working day');
        break;
    case 'Saturday':
        console.log('It is a working day');
        break;
    case 'Sunday' :
        console.log('Today Is Sunday');
        break;
    default:
        console.log('please enter a valid day');
        break;
}

isPrernaReady = true;

if (isPrernaReady){
    console.log("Yeeah, I will we marry");
}else{
    console.log("I am not happy now");
}


//Star will be print by me
for(i=0;i<=5;i++){
    for(j=0;j<=i;j++){
        process.stdout.write("*")
    }
    process.stdout.write("\n")
}

//I want to print empty space 5-i-