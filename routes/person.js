const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res
        .status(200)
        .send(`<h1> Hello Person </h1>`)
        .end();
});

module.exports = router; 
