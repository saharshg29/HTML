// break and continue can change the way how loop behaves

let i = 0;
while (i <= 10) {
    if (i === 5) break;

    console.log(i);
    i++;
}

// Try not using continue keyword

while (i <= 10) {
    if (i === 5) break;

    console.log(i);
    i++;
}