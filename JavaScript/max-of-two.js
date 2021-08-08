function max_of_two(num_1, num_2) {
    if (num_1 > num_2) {
        return num_1
    }
    else if (num_1 === num_2) {
        return 'Both the numbers are equal' ;
    }
    else {
        return num_2
    }
}

console.log(max_of_two(5, 10));
console.log(max_of_two(-1, -100));
console.log(max_of_two(-1, -1));