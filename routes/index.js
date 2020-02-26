const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    const snippet = `<h2> Hello World <h2>`;
    res.render('template', {
    locals: {
        title: 'HELLO WORLD'
    },
    partials: {
        partial: 'partial-index'
    }
    });
});

module.exports = router;