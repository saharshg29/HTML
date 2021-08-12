// Write a function in javaScript that will take two arguments max and min
// and will return an array having vlaues between the max and min number

function arrayFromRange(min, max) {
    let array = [];
    for (min; min <= max; min++) {
        array.push(min);
    }
    return array;
}

let number =  arrayFromRange(-1000,100);
console.log(number);