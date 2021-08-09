let Address = {
    street: 'main 1',
    city: 'Indus Town',
    zipCode: 454775
};

function showAddress(Address) {
    for (let key in Address){
        console.log(key, Address[key]);
    }
}
showAddress(Address)