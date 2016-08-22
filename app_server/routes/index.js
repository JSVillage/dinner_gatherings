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

router.get('/:username/home', function(req, res){
  res.render('userDash/index', {
    title: 'Herder - Home',
    jsfile: 'dashboard.js'
  });
});

router.get('/:username/create-event', function(req, res){
  res.render('userDash/event', {
    title: 'Herder - Create Event',
    jsfile: 'createEvent.js'
  });
});

router.get('/:username/event-summary', function(req, res){
  res.render('userDash/event-summary', {
    title: 'Herder - Event Summary',
    jsfile: 'userDash/event-summary.js'
  });
});

module.exports = router;
