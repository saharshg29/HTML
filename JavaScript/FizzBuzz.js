// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => Input
// Not a number => 'Not a Number'

function FizzBuzz(input) {
    if (typeof input !== 'number')
        return NaN

    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    if (input % 3 === 0)
        return 'Fizz';

    if (input % 5 === 0)
        return 'Buzz';


    else
        return input;

}

console.log(FizzBuzz(52));
