var express = require('express');
var router = express.Router();
var client = require('../db/db.js');

/* GET home page. */
router.get('/', async function (req, res, next) {
  const bookQuery = req.query.title;
  client.search({
    index: 'books',
    query: {
      match: {
        title: bookQuery
      }
    }
  }).then(results => {
    res.json(results);
  }).catch(err => {
    res.status(500);
    res.json(err);
  });
});

module.exports = router;
