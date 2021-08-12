// In this exercise we are supposed to write a function in javascript with two parameters 
// The function will return a booleaan true if the second parameter is a part of the first parameter 
// Else will return False

function include(array, searchElement) {
    for (let element of array) {
        if (element === searchElement) {
            return true;
        }
    }
    return false;
}

let numbers = [1, 100, 4, 54, 4587];

console.log(include(numbers, 45));