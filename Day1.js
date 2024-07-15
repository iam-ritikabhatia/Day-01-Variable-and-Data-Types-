// Declare a var

var a = 10 ;
console.log(a);


// Declare a let

let b = "Ritika";
console.log(b);

// Declare a const using boolean 

const d = true;
console.log(d);


// type of Operator 

// number

let number = 20
console.log(typeof(number));

// string

let character = "Ritika";
console.log(typeof(character));


// boolean 

let right = true;
console.log(typeof(right));


// object

let temperature = null;
console.log(typeof(temperature));

// array  /* beacuse arrays are a type of object */ 

let pointers = [1, 2, 3, 4];
console.table([typeof(pointers)]);



// reassign a new value using let 

let name = "Ritika";
name = "Piyush";
console.log(name);

//  reassign a new value using const 

const Myname = "Tiya";
// Myname = "priya";
console.log(Myname);
/* Here the error comes assignment to constant variable */



//  Declare the Variable of Different DataTypes and log both the value and type of each variable to the console


let game = "viceCity";
let age = 23;
let wrong = false;
let celsius = null;
let array = [7, 8, 9];
console.table([game, typeof(game), age, typeof(age), wrong, typeof(wrong), celsius, typeof(celsius), array, typeof(array)]);


//  Difference in Behavior Between let and const when it comes to reassignment 


// use let 
let myAge = "TwentyOne";
myAge = "TwentyTwo";
console.log(myAge);


// use Const 

const myFavColor = "Black";
myFavColor = "Pink";
console.log(myFavColor);


