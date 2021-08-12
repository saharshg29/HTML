// EVERY AND SOME are two new and important method in modern javaScript

// every method will check for every item to satisfy the given statement [THIS IS A KIND OF BROHTER TO AND]
const numbers = [1, -2, 3];
const allPositive = numbers.every(function(value) {
    return value >= 0;
});
console.log(allPositive);

// some method will check to find atleast one situation where test condition gets true [THIS IS A KIND OF BROTHER OF OR]
const atLeastOnePositive = numbers.some(function(value) {
    return value >= 0;
});

console.log(atLeastOnePositive);