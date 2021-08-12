const numbers = [1, 2, 'abc', 'pqr', 'xyz', 6, 3, 'lmn', 4, 5];

// This sort method of array arrange the array in asscending order
numbers.sort();
console.log(numbers);

// This reverse method of array arrange the array in descending order
numbers.reverse();
console.log(numbers);

// But this is not the case with an array  having objects as item
// In such a case we need to do some small alteration in code
// Always remember ASCII stands for American Standard for Code and Information Interchange

const courses = [
    {id: 1, naame: 'Node.js'},
    {id: 2, naame: 'JavaScript'},
];

courses.sort(function(a,b) {
    // a < b => -1;
    // a > b => 1;
    // a === b => 0

    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase()

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.log(courses)