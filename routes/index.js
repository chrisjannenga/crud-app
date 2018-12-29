var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'We have a working APP!' });
});

router.get('/chris-krystine', function(req, res, next) {
  knex.raw(`SELECT * FROM users`)
      .then(

      function(users) {
        console.log(users)
        res.render('userDisplay', {
            chris : users.rows[0],
            krystine: users.rows[1]
        })
      });
});

router.get('/all', function(req, res, next) {
  knex.raw(`SELECT * FROM users`)
      .then(

      function(data) {
        res.send(data.rows)
      });
});


module.exports = router;
