function interest(principal, rate = 3.5, years = 5) {
    // There are two ways of assigning default value to function parameters

    //first way is by using logical or operator as given below
    // rate = rate || 3.5;
    // years = years || 5;
    return principal * rate / 100 * years;

    // Better way of performing the same task is by assigning or intitialising the default values while we declare the function itself
}

console.log(interest(10000));