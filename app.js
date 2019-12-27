// Require express and set up app object
const express = require('express');
const app = express();

// Require path, to resolve an issue in chrome where static elements don't render correctly
const path = require('path');

// Unusual syntax makes files render as expected in chrome
app.use(express.static(path.join(__dirname, 'public')));

// For everything else, fall back to the standard syntax
app.use('/static', express.static('public'));

const port = 3000;

//Setup Pug templates
app.set('view engine', 'pug');


// Make routes modular
const router = express.Router();

const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');

app.use(mainRoutes);
app.use('/projects',projectRoutes);


// Set up 404 error handling
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Set up error template
app.use((err, req, res, next)=>{
    res.locals.error = err;
    res.status(err.status);
    res.render('error', err);
});

app.listen(port, ()=>{
    console.log('Application is now visible at localhost:3000');
});