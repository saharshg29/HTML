const numbers = [1, -1, 2,3];

const filtered = numbers.filter(function(value) {
    return value >= 0;
});

console.log(numbers, filtered);

// arrow function can make this code cleaner and will remove the unwanted noise from the code
const anotherFiltered = numbers.filter(value => value >= 0);
console.log(anotherFiltered);