// Rest operator of javaScript converts the list of numbers into an array
// Now it becomes very easy to play with arguments

function sum(...args) {
    return args.reduce((a,b) => a+b)
}

console.log(sum(1,23,45,6,5,5,641,5413,564,166,546,164))

// Rest operator makes the code elegant by removing the unwanted noise from our code 

function price(discount, ...cost) {
    let total = cost.reduce((a,b) => a + b);
    return total * (1 - discount);
}

console.log(price(0.5, 800, 120451, 545201451));

// Rest operator should always be passed at the last of list of parameters of a function

