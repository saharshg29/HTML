const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// In order to add an element at last position we use var.push() method
// In order to add an element at the beginning we use var.unshift() method
// In order to add an element somewhere in middle use var.splic(index, no_to_be_added, numbersToBeAdded) method with 3 arguments

// In order to remove an element from the last position use var.pop() method
const poped = numbers.pop();
console.log(numbers);
console.log(poped);

// In order to remove an element from the first position use var.shift() method
const shifted = numbers.shift();
console.log(numbers);
console.log(shifted)

// In order to remove an element from somewhere in between again use var.splice(index, no_to_remove) method with only 2 arguments 
const spliced = numbers.splice(3, 4);
console.log(numbers);
console.log(spliced);