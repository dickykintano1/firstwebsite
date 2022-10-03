var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('return all users');
});

router.get('/test', function(req, res, next) {
  res.send('respond with a resource 2');
});

router.post('/all')

module.exports = router;

// getAllUsers: async (req, res, next) => {
//   try {
//     // query database
//     console.log("Getting all users")
//   } catch (err) {
//     console.log(err);
//     console.log("error");
//   }
// }
