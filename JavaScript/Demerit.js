// Speed Limit = 70
// 5 -> 1 point
// Math.floor(1.3) returns the nearest integer value
// 12 points -> License Suspended

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint)
        return 'OK';

    if (speed >= speedLimit + kmPerPoint) {
        let pointer = Math.floor(speed - 70);
        if ((pointer / kmPerPoint) >= 12) {
            return 'License suspended'
        }
        else {
            return 'Points ' + Math.floor(pointer / kmPerPoint);
        }
    }
}

console.log(checkSpeed(130))