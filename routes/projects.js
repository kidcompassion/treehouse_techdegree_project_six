/**
 * Projects routes
 * Features all routes at /projects/ url
 *  */ 

const express = require('express');
const router = express.Router();

//Set up data for projects pages
const data = require('../data.json'); 
const {projects} = data;

router.get('/project/:id', (req, res)=>{
    // Grab the requested id from the url
    const {id} = req.params;
    // Pass the projects object and the id into the template for rendering
    res.render('project', {projects, id});
});

module.exports = router;