var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/add', function(req, res, next) {
    res.send('add recipe');
});

router.get('/change', function(req, res, next) {
    res.send('change recipe');
});

router.get('/delete', function(req, res, next) {
    res.send('delete recipe');
});
  
module.exports = router;