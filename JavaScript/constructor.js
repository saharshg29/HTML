// camelNotation: oneTwoThreeFour is used in Factory method and is commonly used by developers around the globe
// PascalNotation: OneTwoThreeFour is used in Constructor method and is probably used by the experienced proggramer

// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const myCircle = createCircle(1);

//Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('Draw')
    }
}

const circle = new Circle(1);
const x = {};