const numbers = [1, -1, 2, 3];
const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n => '<li>' + n + '</li>');

const html  = '<ul>' + items.join('  ') + '</ul>';

console.log(html)
console.log(numbers);
console.log(filtered);
console.log(items);

// chaining is the art of calling a method after another to make our code cleaner and to remove unwanted noise
// The below code snippet is an example of chaining

const item = numbers
.filter(n => n >= 0)
.map(n => ({value: n}))
.filter(obj => obj.values > 1)
.map(obj => obj.value)
;

console.log(item);