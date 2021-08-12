const courses = [
    {id: 1, naem:'a'},
    {id: 2, naem: 'b'},
];

const course = courses.findIndex(function(course) {
    return course.naem === 'a';
});

console.log(course);