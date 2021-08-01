 // this is muy first javascript code
 console.log("Hello World");

//  assigning variables
let nameMY = "saharsh";
console.log(nameMY)
nameMY = "Hemant"
console.log(nameMY)

// Rules regarding naming a variable in JavaScript
// Reserve keyword cant be used as variable nameMY
// Variable nameMYs should be meaningful
// Always use Camel notation in javaScript for assigning variables nameMYs
// Underscore is the only valid special charachter which can be used with variables

// Assigning constant values
// These constant values cant be changed anywhere in the program

const saharsh = 10;
// saharsh = 5 is a wrong deal because we changing a value of constant is not permitted in javaScript
console.log(saharsh)

// Primitive or Value Types
 nameMY = "saharsh" ;      // String;
 let age = 17 ;      // Integer;
 let approval = true ;       // Boolean data type (May be true or false );
 let firstNameMY = undefined ;       //If variable is not assigned any value then by default undefined is assigned;
 let optedColor = null ;          //Null is used to clear any type of data which is stored in a variable

//  typeof keyword in javaScript can be used to check the data type of value stored within a varriable
typeof nameMY;
typeof age;
typeof approval;
typeof firstName ;
typeof optedColor ;

// There are three type Reference data type in javaScript. These are 
// Objects
// Arrays 
// Functions

let person = {
    myName : "Saharsh",
    myAge : 17
};
console.log(person);


// there are two ways of accessing properties of an Object... they are dot notation and square bracket notation
// dot notation is preffered because it is cleaner easy and precise way of accessing property of an object

person.nameMY = 'Hemant';
console.log(person);
console.log(person.name);

// Function are the fundamental building block of JavaScipt proggraming language

function greet() {
    console.log('Hello World');
    console.log('my first ever function ever in JavaScript');
    document.write('Hello world again fro JavaScript');   
}
greet();


function namaste(name) {
    console.log('namaste' + name);    
}

console.log(namaste ('saharsh'))
console.log(namaste (' Hemant'))


function square(number) {
    return number * number;
}

console.log(square(4));
console.log(square(400));

console.ale