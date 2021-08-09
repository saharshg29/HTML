let address = {
    street: 'abc',
    city: 'xyz',
    zipCode: 454775
}

console.log(address);

// Factory Function to create above given object

function createAddress(street, city, zipCoode) {
    return {
        street,
        city,
        zipCoode
    };
}

let address1 = createAddress('abc', 'xyz', 'lmn');
console.log(address1)

// Constructor method for creating above given object

function CreateAddress(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let address2 = CreateAddress('xyz', 'abc', 'pqr');
console.log(address2);