var express = require('express');
var router = express.Router();
// var pool = require('../db/queries')

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  // database: 'firstwebsite',
  // password: 'whatthefuck',
  database: 'postgres',
  password: '1141',
  port: 5432
})
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const usersHelper = require('../helpers/users-helper.js');

//SELECT
router
  .get('/', function(req, res, next) {
    pool.query('SELECT * FROM firstweb.ms_user;', (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    })
  });

router.get('/testBcrypt', function(req, res, next) {
  let myPlaintextPassword = "TestPassword";
  let passHash = '';

  bcrypt.hash(myPlaintextPassword, saltRounds, async function(err, hash) {
    console.log(saltRounds);
    console.log(hash);
    if (err) {
      console.log(err);
      res.status(400).json({
        "statusCode": "400", 
        "message":"Failed"
      })
    }
    passHash = hash;
    bcrypt.compare(myPlaintextPassword, passHash, function(err, result) {
      console.log(result);
    });
  });


  res.status(200).json({
    "statusCode": "200", 
    "message":"Success"
  })
});

//REGISTER USER
router
  .post('/reg', function(req, res, next) {
    // Access-Control-Allow-Origin: https://amazing.site
    res.header("Access-Control-Allow-Origin", "http://localhost:3001");

    let { username, email, password } = req.body;
    
    // check if user email already exist
    let query = `SELECT * FROM firstweb.ms_user WHERE email = '${email}';`;
    pool.query(query, (error, results) => {
      // console.log(`QUERY: ${query}`);
      if (error) {
        res.status(400);
        return;
      }

      if (results.rows.length !== 0) {
        res.status(400).json({
          "statusCode": "400", 
          "message":"Email has already been used."
        });
        return;
      }

      let id = Date.now();

      // Enccrypt user password
      bcrypt.hash(password, saltRounds, async function(err, hash) {
        if (err) {
          console.log(err);
          res.status(400).json({
            "statusCode": "400", 
            "message":"Password Encryption failed."
          })
        }

        query = `INSERT INTO firstweb.ms_user (id, username, email, password, group_id, last_login) VALUES (${id}, '${username}', '${email}', '${hash}', 1, NULL);`;
        pool.query(query, (results, error) => {
          // console.log(`QUERY: ${query}`);
          res.status(200).json({
            "statusCode": "200", 
            "message":"Added new user successfully."
          })
        });
      });
    });
  });

//USER LOGIN
router.post('/login', function(req, res, next) {

  let { email, password } = req.body;

  let query = `SELECT * FROM firstweb.ms_user WHERE email = '${email}';`;
  // console.log(`QUERY: ${query}`);
  pool.query(query, (error, results) => {
    if (results.rows.length !== 1) {
      console.log(`There are multiple users with email: ${email} found`);
    }
    let user = results.rows[0];

    // Decrypt user password
    bcrypt.compare(password, user.password, function(err, passCheckResult) {
      if (passCheckResult) {

        let lastLogin = usersHelper.getDateNow();
        user.last_login = lastLogin;

        usersHelper.UpdateLoginDate(pool, user.id, lastLogin);

        // store secret key in db?
        let secretKey = "secretkey";
        let token = jwt.sign(JSON.stringify(user), secretKey);
        
        res.status(200).json({
          "statusCode": "200",
          "message": "Login success.",
          "jwt": token
        })
      } else {
        res.status(401).json({
          "statusCode": "401", 
          "message":"Password does not match."
        });
      }
    });

  });
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
      propertyList.push('"Password"=\''+body.password+'\'');
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