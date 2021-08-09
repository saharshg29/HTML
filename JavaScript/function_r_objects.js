function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3])

// The sole difference between call and apply method is that in apply the arguments are passed in form of an array

const another = new Circle(1);