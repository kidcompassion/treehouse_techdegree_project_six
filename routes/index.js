const express = require('express');
const router = express.Router();
const data  = require('../data.json');
const {projects} = data;




//what do i need to do here?
// i need to loop through all projects and render a thumbnail, title and a link

router.get('/', (req, res)=>{
   
   
    //const projectThumb = projects[id]['thumb_url'];
    res.render('index', {projects});
});

router.get('/about', (req, res)=>{
    res.render('about');
});




module.exports = router;