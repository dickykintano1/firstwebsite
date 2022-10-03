var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/reg', function(req, res, next) {
  res.send('user register');
});

router.get('/login', function(req, res, next) {
  res.send('user login');
});

router.get('/change', function(req, res, next) {
  res.send('change user data');
});

router.get('/delete', function(req, res, next) {
  res.send('delete user');
});

module.exports = router;