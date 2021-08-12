const first = [1, 2, 3];
const second = [4, 5, 6];

// spread method is better way of combinning arrays than concat method

const combined = [...first, '+', '-', '*', '/' ,...second];

console.log(combined);

const slice = combined.slice(2,6);
console.log(slice)