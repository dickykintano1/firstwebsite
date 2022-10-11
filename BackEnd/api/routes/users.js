var express = require('express');
var router = express.Router();
// var pool = require('../db/queries')

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'firstwebsite',
  password: 'whatthefuck',
  port: 5432,
})

router.get('/', function(req, res, next) {
  pool.query('SELECT * FROM public."Users";', (error, results) => {
    // if (error) {
    //   throw error
    // }
    console.log(results);
    res.status(200).json(results.rows);
  })
});



router.post('/reg', function(req, res, next) {
  let body = req.body; // get the body sent from front end
  let id = body.id;
  let firstName = body.firstName;
  let lastName = body.lastName;
  let email = body.email;
  let password = body.password; // need to encrypt before adding to db (later)
  let recipeCount = body.recipeCount;

  let values = id + ",\'" + firstName + "\',\'" + lastName + "\',\'" + email + "\',\'" + password + "\',\'" + recipeCount + "\'";

  let query = 'INSERT INTO public."Users" ("ID", "First Name", "Last Name", "Email", "Password", "Recipe Count") VALUES (' + values + ');';

  // console.log(query);

  pool.query(query, (error, results) => {
    // console.log(req.body);
    res.status(200).json({"teststatus":'success'});
  })
});

router.post('/login', function(req, res, next) {
  res.send('user login');
});

router.put('/change', function(req, res, next) {
  let body = req.body;
  const propertyList = [];

  for (const property in req.body){
    if (property === 'firstName'){
      propertyList.push('"First Name"=\''+body.firstName+'\'');
    }
    if (property === 'lastName'){
      propertyList.push('"Last Name"=\''+body.lastName+'\'');
    }
    if (property === 'email'){
      propertyList.push('"Email"=\''+body.email+'\'');
    }
    if (property === 'password'){
      propertyList.push('"Password"=\''+body.password+'\'');
    }
    if (property === 'recipeCount'){
      propertyList.push('"Recipe Count"=\''+body.recipeCount+'\'');
    }
    if (property === 'undefined'){
      continue;
    }
  }
  let query = 'UPDATE public."Users" SET '+ propertyList.join(', ') +' WHERE "ID"=' + body.id;

  pool.query(query, (error, results) => {
    console.log(query);
    res.status(200).json({"teststatus":'success'});
  })
});

router.delete('/delete', function(req, res, next) {
  let body = req.body
  const propertyList = [];

  for (const property in req.body){
    if (property === 'id'){
      propertyList.push('"ID"=\''+body.id+'\'');
    }
    if (property === 'firstName'){
      propertyList.push('"First Name"=\''+body.firstName+'\'');
    }
    if (property === 'lastName'){
      propertyList.push('"Last Name"=\''+body.lastName+'\'');
    }
    if (property === 'email'){
      propertyList.push('"Email"=\''+body.email+'\'');
    }
    if (property === 'password'){
      propertyList.push('"Password"=\''+body.password+'\'');
    }
    if (property === 'recipeCount'){
      propertyList.push('"Recipe Count"=\''+body.recipeCount+'\'');
    }
    if (property === 'undefined'){
      continue;
    }
  }

  let query = 'DELETE FROM public."Users" WHERE '+ propertyList;
  pool.query(query, (error, results) => {
    console.log(query);
    res.status(200).json({"teststatus":'success'});
  })
});


module.exports = router;