/* Basic syntax of for loop
    for (initialization-of-loop-variable ; conditional statement ; increment or decrement ){
        --------------- LOOP BODY ---------------;
        --------------- LOOP BODY ---------------;
    } */

for (let i = 1; i <= 5; i++) {          // i is Loop Varriable
    if (i % 2 != 0) {
        console.log(i + ' is odd');
    } else {
        console.log(i + ' is even')
    }
}