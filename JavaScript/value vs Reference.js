let x = {value: 10};
let y = x;

x.value = 20;

console.log(x,y)


// In primitive data type two variables are independent of each other
// That's not the case with the reference type vlaue in this case the two varriables are related or to say dependent of each other

// This can also be stated as Primitives are copied by their value 
// and Objects are copied by their reference

// An example showcasing primitive data type
let number = 10;
function increase(number) {
    return number++ ;
}
console.log(increase(number));

//An example showcasing Reference data type
let obj = {value: 10};

function increse(obj) {
    obj.value++;
}

increse(obj);
console.log(obj);