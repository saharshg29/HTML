// JOBJECTS IS WHAT WE REFER TO AS OBJECT ORIENTED PROGGRAMING (OOP)
// If a function is a part of an object it is called method

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1,
//     },
//     isVisible: true,
//     draw: function(){
//         console.log('draw')
//     }
// };

// circle.draw()  //Method

// Above method is a simple way of making an object

// Factory Function

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw')
        }
    }
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);