const numbers = [1, 2, 3, 4, 5, 6];

let sum = 0;
for (let n of numbers) {
    sum += n;
};

console.log(sum);

// reduce method of an array can be used to convert an array into a single value.
// Ths single value can be a string, a number or an object
// This method requires a callback function. read the docs about reduce method also

const reduced = numbers.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue;
}, 0);
// This 0 is assigned to accumulator.
// In case if we would have not assigned this 0 to accumulator then by default first value of the array would have been assigned to accumulator

console.log(reduced);