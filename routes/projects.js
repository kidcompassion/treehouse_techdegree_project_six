const express = require('express');
const router = express.Router();
const data = require('../data.json'); 
const {projects} = data;


router.get('/project/:id', (req, res)=>{
    const {id} = req.params;
    res.render('project', {projects, id});
});



module.exports = router;