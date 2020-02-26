const express = require('express'),
 app = express(),
es6Renderer = require('express-es6-template-engine'),
 rootController = require('./routes/index'),
 catsController = require('./routes/cat'),
 dogsController = require('./routes/dogs'),
 cats_and_dogs_controller = require('./routes/dogs_and_cats'),
 personController = require('./routes/person'),
 greetController = require('./routes/greet'),
 ageController = require('./routes/age');

app.engine('html', es6Renderer);
app.set('views','views');
app.set('view engine','html');


app.listen(3333, () => {
    console.log('Server running on port 3333');
});

app.use('/', rootController);
app.use('/cats', catsController);
app.use('/dogs', dogsController);
app.use('/cats_and_dogs', cats_and_dogs_controller);
app.use('/person', personController);
app.use('/greet', greetController);
app.use('/age', ageController);