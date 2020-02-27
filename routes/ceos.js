const express = require('express'),
    router = express.Router()
    ceoModel = require('../models/ceoModel');

router.get('/:id?',  async (req, res) => {
    const { id } = req.params;
    let executiveData = [];

    if (!!id) {
        executiveData = await ceoModel.getById(id);
    } else {
        executiveData = await ceoModel.getAll();
    };
    
    const singleExecutive = await ceoModel.getById(1);
    console.log('single executive', singleExecutive);

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