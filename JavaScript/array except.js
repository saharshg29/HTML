// In thsi exercise write a function called except with two parameters
// First parameter will be an array while second will be a number
// The function will return an array containing all the elements except the number which we have passed as parameter

function except(array, excluded) {
    let returning = []
    for (let element of array) {
        if (element === excluded) {
            continue;
        }
        else {
            returning.push(element);
        }
    }
    return returning;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(except(numbers, 2));