const marks = [90, 90, 78];

function calculateGrade(marks) {
    let total = 0;

    for (let i in marks) {
        total = total + marks[i];
    }

    let average = total / 3;

    if ((average <= 100) && (average > 90)) {
            return 'A';
        }

    else if ((average < 90) && (average > 80)) {
            return 'B';
        }

    else if ((average < 80) && (average > 70)) {
            return 'C';
        }

    else if ((average < 70) && (average > 60)) {
            return 'D';
        }
    else {
            return 'F';
        }
    
}

console.log(calculateGrade(marks))