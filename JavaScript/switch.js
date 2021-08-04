let role;
role = 'moderator';

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;

    default:
        console.log('Unknown User')
}

// above solution using IF & ELSE statement

if (role === 'guest') {
    console.log('Guest User');
} 
else if (role === 'moderator') {
    console.log('Moderator User');
}
else {
    console.log('Unknown User');
}