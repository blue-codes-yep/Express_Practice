const express = require('express'),
    router = express.Router();
const data = [
   {name: "Paxton" , lastname: "Lindsey"},
{name: "firstname" , lastname: "lastname"}];

router.get('/:name?', (req, res) => {
    const {name} = req.params;
    res.render('template', {
        locals: {
            title: 'HELLO' + ` \n ${name}`,
            dataArray: data
        },
        partials: {
            partial: 'partial-greet'
        }
        });
});

console.log(data);
module.exports = router; 
