// Arrow function is denoted by using [=>] key instead of function keyword

const courses = [
    {id: 1, names: 'a'}
    {id: 2, names: 'b'}
];

const course = courses.find(course => course.name === 'a');

console.log(course);