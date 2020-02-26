const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    const snippet = `<h2> Hello World <h2>`;
    res
        .status(200)
        .send(snippet)
        .end();
});

module.exports = router;