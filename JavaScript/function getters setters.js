// getter property of objects is used to access properties of an object
// setter property is used to change or mutate the value from the outset 

// The benefit of using both these property is that it remvoe the unwanted noise and thus makig our coud cleaner and elegant 

const person = {
    firstName: 'Saharsh',
    lastName: 'Gupta',

    get fulName() {
        return `${person.firstName} ${person.lastName}`
    },

    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1]
    }
};

person.fullName = 'Sarita Gupta';
console.log(person);