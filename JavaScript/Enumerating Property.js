const circle = {
    radius: 1,
    draw() {
        console.log(draw);
    }
};

for (let key in circle) {
    console.log(key, circle[key]);
}

// The below fragment of code will raise an error as objects in JavaScripts are not iterable
// for (let key of Object) {
//     console.log(key);
// }


// The use of [keys] method of object classes can be used to iterate all the keys present in our object
for (let key of Object.keys(circle)) {
    console.log(key);
}

// The use of [enteries] method of Object classes can be used to iterate or access the key:value pair present in our Object
for (let entry of Object.entries(circle)) {
    console.log(entry);
}

if ('radius' in circle) console.log('yes');