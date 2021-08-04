//Bitwise Operators
// 1 = 00000001
// 2 = 00000010
// Above given are the binary values of the numerical digit 1 and 2
// Bitwise OR uses only one pipw(|)

1|2;
1&2;
// Bitwise OR (|) and AND (&) uses only one symbols
// For example
// Read, Write, Execute
// Respectively[00000100, 00000110, 00000111]

const readPermission = 4;
const WritePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission | readPermission | WritePermission;
console.log(myPermission);
let message = (myPermission & readPermission) ? 'yes' : 'no';
message

// Bitwise OR(|) is used here in order to give permission
// Bitwise AND(&) is used in order to check for permission