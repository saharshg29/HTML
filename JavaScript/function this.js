// method -> obj
// functin -> global (window, global)

const video = {
    title: 'a',
    tags: ['a', 'b', 'v', 'd'],
    showTags() {
        this.tags.forEach((value) => console.log(value))
    }
};

video.showTags();