let address1 = new address('a', 'b', 'c');
let address2 = new address('a', 'b', 'c');

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));

function address(street, city, zip) {
    this.street = street;
    this.city = city;
    this.zip = zip;
}

function areEqual(address1,address2) {
    return address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zip === address2.zip
}

function areSame(address1,address2) {
    return address1 === address2;
}