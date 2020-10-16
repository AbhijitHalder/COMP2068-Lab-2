var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/abhijit', function(req, res, next) {
  res.render('abhijit');
});
router.get('/rabin', function(req, res, next) {
  res.render('rabin');
});
router.get('/sanchita', function(req, res, next) {
  res.render('sanchita');
});
router.get('/ratna', function(req, res, next) {
  res.render('ratna');
});

module.exports = router;
