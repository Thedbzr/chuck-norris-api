var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

const rootURL = 'https://api.chucknorris.io/jokes/random';


router.get('/', function(req, res, next) {
  const 
  res.render('index');
});

module.exports = router;
