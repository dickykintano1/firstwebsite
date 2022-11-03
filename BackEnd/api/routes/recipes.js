var express = require('express');
var router = express.Router();

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'firstwebsite',
  password: 'whatthefuck',
  port: 5432,
})

router.get('/', function(req, res, next) {
    pool.query('SELECT * FROM public."Recipes";', (error, results) => {
      // if (error) {
      //   throw error
      // }
      console.log(results);
      res.status(200).json(results);
    })
});

router.post('/add', function(req, res, next) {
    pool.query('SELECT * FROM public."Recipes";', (error, results) => {
        // if (error) {
        //   throw error
        // }
        console.log(results);
        res.status(200).json(results);
    })
});

router.get('/change', function(req, res, next) {
    res.send('change recipe');
});

router.get('/delete', function(req, res, next) {
    res.send('delete recipe');
});
  
module.exports = router;