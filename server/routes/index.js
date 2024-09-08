var express = require('express');
var router = express.Router();
var client = require('../db/db.js');

/* GET home page. */
router.get('/', async function (req, res, next) {
  const bookQuery = req.query.title;
  let query = null;
  if (bookQuery == "" || bookQuery == undefined || bookQuery == null) {
    query = {
      index: 'books',
      query: {
        match_all: {}
      }
    }
  } else {
    query = {
      index: 'books',
      query: {
        match: {
          title: bookQuery
        }
      }
    }
  }
  client.search(query).then(results => {
    res.json(results);
  }).catch(err => {
    res.status(500);
    res.json(err);
  });
});

module.exports = router;
