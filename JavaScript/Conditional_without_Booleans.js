// Falsy values (false)
// undefined
//null
//0
//false
//''
NaN

// Anything that is not falsy is Trusy
// Short-circuiting happens when we apply condition between lot of values alongwith the boolean values....
let useerColor = 'red';
let defaultColor - 'blue';
let defaultColor = 'Blue';
let userColor = 'red';
// Please remove or comment the above conditional statement

let CurrentColor = userColor || defaultColor;
CurrentColor