const person = {
    namme : 'Saharsh',
    age : 17
};

// for in loop is used to access elements of our array and object

for (let key in person){
    console.log(key, person[key]);
} 

const colors = ['red', 'black', 'blue', 'black'];
for (let index in colors)
    console.log(index, colors[index])