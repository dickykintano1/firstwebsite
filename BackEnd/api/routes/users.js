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

//SELECT
router.get('/', function(req, res, next) {
  pool.query('SELECT * FROM public."Users";', (error, results) => {
    // if (error) {
    //   throw error
    // }
    console.log(results);
    res.status(200).json(results.rows);
  })
});

//REGISTER USER
router.post('/reg', function(req, res, next) {
  let body = req.body; // get the body sent from front end
  let id = body.id;
  let email = body.email;
  let password1 = body.password1; // need to encrypt before adding to db (later)
  let password2 = body.password2;
  let recipeCount = body.recipeCount;


  if (password1 === password2){
    if (typeof recipeCount === 'undefined'){
      recipeCount = '0'
    }
    let values = id + ",\'" + email + "\',\'" + password1 + "\',\'" + recipeCount + "\'";
    let query = 'INSERT INTO public."Users" ("ID", "Email", "Password", "Recipe Count") VALUES (' + values + ');';
    pool.query(query, (error, results) => {
      // console.log(req.body);
      res.status(200).json({"teststatus":'success'});
    })
  } else {
    res.status(400).json({error: 'Password doesn\'t match!', data:null})
  }
  // console.log(query);
});

//USER LOGIN
router.post('/login', function(req, res, next) {
  if (req.body.email === database.users[0].email &&
      req.body.password1 === database.users[0].password1){
    res.json(database.users[0]);
  } else {
    res.status(400).json('error loggin in')
  }
  // let query = 'SELECT "ID", "First Name", "Last Name", "Email", "Password", "Recipe Count" FROM public."Users";'
  res.send('user login');
});

//UPDATE USER DATA
router.put('/change', function(req, res, next) {
  let body = req.body;
  const propertyList = [];

  for (const property in req.body){
    if (property === 'email'){
      propertyList.push('"Email"=\''+body.email+'\'');
    }
    if (property === 'password'){
      propertyList.push('"Password"=\''+body.password1+'\'');
    }
    if (property === 'recipeCount'){
      propertyList.push('"Recipe Count"=\''+body.recipeCount+'\'');
    }
    // if (property === 'undefined'){
    //   continue;
    // }
  }

  let query = 'UPDATE public."Users" SET '+ propertyList.join(', ') +' WHERE "ID"=' + body.id;
  pool.query(query, (error, results) => {
    console.log(query);
    res.status(200).json({"teststatus":'success'});
  })
});

//DELETE USER
router.delete('/delete', function(req, res, next) {
  let body = req.body
  let query = 'DELETE FROM public."Users" WHERE "ID"=\''+body.id+'\'';
  pool.query(query, (error, results) => {
    console.log(query);
    res.status(200).json({"teststatus":'success'});
  })
});


module.exports = router;