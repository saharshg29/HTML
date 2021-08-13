// Parameters are an arbitrary varriable upon which some actions are to be taken
// Arguments refer to the value we passed to the parameters of a function

// arguments keyword of javaScipt made it possible for us to give dynamic-ity to our function

function sum(a,b) {
    let total = 0;
    for (let value of arguments) {
        total += value;
    }
    return total;
}

console.log(sum(1, 2, 30, 300))