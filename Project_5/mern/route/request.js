const express = require('express');
const router = express.Router();
const Census = require('../model/census');

router.get('/census', function(req, res, next) {
    Census.aggregate([{
        $sample: {size: 1},
    }]).then(function(data) {
        console.log(data);
        res.send(data);
    }).catch(next);
});

module.exports = router;