var express = require('express');
var router = express.Router();
var client = require('../db/db.js');

/* GET home page. */
router.get('/', async function (req, res, next) {
  console.log("aaaaa")
  const result = await client.search({
    index: 'books',
    q: 'North'
  });
  res.json(result);
});

module.exports = router;
