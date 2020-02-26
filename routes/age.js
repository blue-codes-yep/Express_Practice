const express = require('express'),
    router = express.Router();

router.get('/:year?', (req, res) => {
    const {year} = req.params;
    let d = new Date();
    const snippet = (d.getFullYear() - `${year}`)
    res
        .status(200)
        .send(`You're ${year}, and you where born in ${snippet}`)
        .end();
});

module.exports = router; 
