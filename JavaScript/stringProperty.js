const movie = {
    title: 'a',
    releaseYear: 2021,
    rating: 4.5,
    director: 'b'
};

function showProperty(obj) {
    for (key in obj)
    if (typeof obj[key] === 'string')
    console.log(key, obj[key]);
}

showProperty(movie)