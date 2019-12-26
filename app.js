const express = require('express');
const app = express();
const port = 3000;




app.set('view engine', 'pug');



app.get('/', (req, res)=>{
   res.send('bleep bloop');
});

app.get('/about-me', (req, res)=>{
    res.send('about me');
});

app.get('/project-one', (req, res)=>{
    res.send('proj one');
});

app.get('/project-two', (req, res)=>{
    res.send('proj two');
});

app.get('/project-three', (req, res)=>{
    res.send('proj three');
});

app.get('/project-four', (req, res)=>{
    res.send('proj four');
});

app.get('/project-five', (req, res)=>{
    res.send('proj five');
});



app.listen(port, ()=>{
    console.log('running');
});