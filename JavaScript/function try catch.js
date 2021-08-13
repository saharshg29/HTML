const person = {
    firstName: 'Saharsh',
    lastName: 'Gupta',
    set fulName(value) {
        if (typeof value !== 'string') {
            throw new Error('Value is not a string');
        }
        const parts = value.split(' ');
        if (parts.length !== 2) {
            throw new Error('Enter a first and last name.')
        }
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person.fullName = null;
} 
catch (e) {
    console.log('kuch to gadbad he')
}


console.log(person);