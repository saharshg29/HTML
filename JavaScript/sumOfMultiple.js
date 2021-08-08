function sum(num) {
    let count = 0;
    for (let i = 0; i <= num; i++) {
        if (i % 3 == 0) {
            count = count + i
        }
        if (i % 5 == 0) {
            count = count + i
        }
    }
    return count
}

console.log(sum(10))