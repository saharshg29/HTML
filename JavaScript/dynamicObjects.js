const circle = {
    radius: 1
};

circle.color = 'yellow';
circle.draw = function() {}

console.log(circle.color)
console.log(circle)

delete circle.color;
delete circle.draw;

console.log(circle)