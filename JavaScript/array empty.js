let numbers = [1, 2, 3, 4];
let another = numbers;

// Solution-1
// In order to empty an array use assign the array with an empty array
// In these case the array will be only colected by garbage collector only if no other variable is referencing to same array
// In case if any other varriable is also pointing at the same array... the array will exist and will be accessible with other varriable

numbers = [];
console.log(numbers);
console.log(another);;

numbers = [1, 2, 3, 4];
another = numbers;

// Solution-2
// In these solution array will be removed from the memory also
// You won't be able to access any varriable that is referencing to the same varriable

numbers.length= 0;

console.log(numbers);
console.log(another);

// Solution-3
// In these solution also array will be completely removed from memory also
numbers = [1, 2, 3, 4];
another = numbers;

numbers.splice(0, numbers.length);      // numbers.length is used to return the length of array. That is it gives us the total no of elements present inside our array.

console.log(numbers);
console.log(another);

// Solution-4
// By using pop method inside our while loop also we can completely empty our array.
// This will not remove the array from memory. It can be accessed by some different varriables referencing toward the same array in memory
numbers = [1, 2, 3, 4];
another = numbers;

while (numbers.lenght > 0) {
    numbers.pop();
}

console.log(numbers);
console.log(another);

// Solutin-3 and Solution-4 of emptying an array must be avoided as code for both of them is noisy
// Solution-1 and Solution-1 are prefferable
// Solution-2 is most prefferable over solution 2 as it rermoves array from the memory location