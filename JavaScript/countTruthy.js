// Falsy value
// Undefinied
// null
// ''
// false
// 0
// NaN

// Any other value except the above given Falsy value are considered to be a Truthy value

const array = [1, 2, 3];
console.log(countTruthy(array))

function countTruthy(array) {
    let count = 0;
    for (let i of array) {
        if (i)
            count++;
        return count;
    }

}