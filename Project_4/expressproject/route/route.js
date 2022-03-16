const express = require('express');
const router = express.Router();
const Word = require('../module/word');

router.get('/word', function (req, res, next) {
    // res.send({future:'Get Word and Definition'});
    Word.aggregate( [{ $sample: {size: 1}}]).then (function (word){
        console.log(word);
        res.send(word);
    }).catch(next);
});

module.exports = router;