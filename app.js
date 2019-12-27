const express = require('express');
const app = express();

// Using this because the standard static server doesn;t render elems correctly in chrome
const path = require('path');
const port = 3000;
const router = express.Router();
app.use(express.static(path.join(__dirname, 'public')));

app.use('/static', express.static('public'));
app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');

app.use(mainRoutes);
app.use('/projects',projectRoutes);


app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next)=>{
    res.locals.error = err;
    res.status(err.status);
    res.render('error', err);
});

app.listen(port, ()=>{
    console.log('running');
});