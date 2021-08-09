const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

//Logical way of copying a data from one object to another

// const another = {};

// for (let key in circle){
//     another[key] = circle[key];
// }

// Bettter way to perform the same task is by using assign method of Object property as mentioned below

// const another = Object.assign({
//     color: 'red'
// }, circle);

// The most simplest way of cloning data between objects in javascript is by using the spread[...] operator as mentioined below

const another = {...circle};

console.log(another)