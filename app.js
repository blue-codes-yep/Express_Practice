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