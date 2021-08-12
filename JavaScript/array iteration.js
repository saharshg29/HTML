// For-of loop is better way to iterate through an array

const numbers = [1, 2, 3];

for (let number of numbers) {
    console.log(number);
}

// forEach method of an array can be also used to iterate through an array
// forEach method requires a function as an argument to iterate
// function in forEach method can be also given 2 arguments
// first argument plays with the array items 
// second argument play with item index
numbers.forEach(function(number) {
    console.log(number);
});

// arrow function method can also be used alonwith forEach method as it makes the code easy to read and also reduces the unwanted noise from the code
numbers.forEach(number => console.log(number));

