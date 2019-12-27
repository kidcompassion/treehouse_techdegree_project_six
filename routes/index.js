/**
 * Main routes
 * Features all top-level routes
 *  */ 

const express = require('express');
const router = express.Router();

// Set up data file
const data  = require('../data.json');

// Prepare data file for templates
const {projects} = data;

// Render index template at root and pass it the projects data
router.get('/', (req, res)=>{
    res.render('index', {projects});
});

// Render about template at /about
router.get('/about', (req, res)=>{
    res.render('about');
});

module.exports = router;