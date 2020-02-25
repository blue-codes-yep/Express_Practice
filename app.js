const express = require('express');
const app = express();

app.listen(3333, () => {
    console.log('Server running on port 3333');
});

app.get('/', (req, res) => {
    const helloworld = `<h2> Hello World <h2>`;
    res
    .status(200)
    .send(helloworld)
    .end();
})

app.get('/cats', (req, res) => {
    const catsText = `<h2> This is a cats page <h2>`;
    res
    .status(200)
    .send(catsText)
    .end();
})

app.get('/dogs', (req, res) => {
    const dogsText = `<h2> This is a dogs page <h2>`;
    res
    .status(200)
    .send(dogsText)
    .end();
})

app.get('/cats_and_dogs', (req, res) => {
    const dogs_and_cats_text = `<h2> This is a cats and dogs page <h2>`;
    res
    .status(200)
    .send(dogs_and_cats_text)
    .end();
})