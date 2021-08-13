// Function declaration is the simple and beautiful way of setting up a fnction
function walk() {
    console.log('walk');
}

// Another way of setting up a function in javascript is by assigning it to a varriable
// In these case you need to terminate the expression by using a semicolo[;] which is not a case with function declaration
let run = function() {
    console.log('run');
}

// There is no differnce in using any method of declaraing a function
// but my personal preferance is function declaration method

// HOISTING IS THE PROCCESS OF SHIFTING THE FUNCTIONS AT THE TOP OF FILE WHICH IS DONE AUTOMATICALLY BY JAVASCRIPT ENGINE

// The difference of using declaration and expression method while setting up a function is when we call a function

// The function which was set up by function declaration method can be called from anywhere in the program 
// But in case of those fuunctions which were set up by function expression method a functin can only be declared once it is already assigned