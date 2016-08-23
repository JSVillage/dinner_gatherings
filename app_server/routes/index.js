var express = require('express');
var router = express.Router();
// var ctrlEvents = require('../controllers/events')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Herder'
  });
});

router.get('/profile', function(req, res) {
  res.render('profile', {
    title: 'Herder - Create a Profile',
    jsfile: 'profile.js'
  });
});

router.get('/about', function(req, res) {
  res.render('about', {
    title: 'Herder',
    jsfile: 'about.js'
  });
});

router.get('/sign-in', function(req, res){
  res.render('sign-in', {
    title: 'Herder',
    jsfile: 'signin.js'
  });
});

module.exports = router;
