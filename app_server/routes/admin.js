var express = require('express');
var router = express.Router();

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
