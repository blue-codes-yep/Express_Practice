const express = require('express'),
    router = express.Router()
    ceoModel = require('../models/ceoModel');

router.get('/',  async (req, res) => {
    const executiveData = await ceoModel.getAll();
    console.log('executive data', executiveData);

    res.render('template', {
    locals: {
        title: 'Apple Ceos',
        dataArray: executiveData
    },
    partials: {
        partial: 'partial-index'
    }
    });
});

module.exports = router;