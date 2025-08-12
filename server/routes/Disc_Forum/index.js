const express = require('express');
const router = express.Router();
const questionRoute = require('./Question');


router.get('/index',(req,res)=>{
    res.send('Welcome to the Discussion Forum API!')
});


router.use('/questions', questionRoute); // Mount the questionRoute on the /questions path

module.exports = router;
