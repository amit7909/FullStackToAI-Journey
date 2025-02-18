/*
//function are the first citizens.
//traditionsal  way of function
function SayBaby(){
    console.log("Hii Baby");
}
//Function expression 
const SayDoll= function(){
    console.log("HII DOLL");
}

//to print and check te fuction are working or not we have to call the function 
SayBaby()
SayDoll()

//What are arrow fuction
//arrow function simplify the syntax 2. Without using function keyword.


/*Explicit Return : use return keyword: () => {}*/
const SayHelloOnceMore = () => {
    console.log("hello amit");
    return 'HII Amit'
}

const result = SayHelloOnceMore()
console.log(result);


// Implicit Fuction : no use return keyword () => ()

const person = {
    name :'Amit'
    sayHello: function(){
        console.log('Hello, ${name}');
    }
}



