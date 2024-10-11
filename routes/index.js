var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'GS Mont-Amba' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'A propos' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.get('/courses', function(req, res, next) {
  res.render('courses', { title: 'Cours' });
});

router.get('/team', function(req, res, next) {
  res.render('team', { title: 'Professeurs' });
});

module.exports = router;
