var express = require('express');
var router = express.Router();
var Users  = require('../models/users');
var Events = require('../models/events');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var async  = require('async');

/* GET users listing. */
router.route('/')
 .get(function(req, res) {
  res.status(200).json({message: "api is connected"  });
  })
;

router.route('/login')
  .get(function(req, res) {
    passport.use(new LocalStrategy(
      function(username, password, done) {
        Users.findOne({ username: username }, function(err, user) {
          if (err) { return done(err); }
          if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
          }
          if (!user.validPassword(password)) {
            return done(null, false, { message: 'Incorrect password.' });
          }
          return done(null, user);
        });
      }
    ));
  })
  .post(function(req, res){
    passport.authenticate('local', { successRedirect: '/admin/:username/home', failureRedirect: '/login',failureFlash: true })
  })
router.route('/users')
  .get(function(req, res){
    Users.find(function(err, users){
      if (err) {
        res.status(500).json({ error: true, message: 'There are no users'});
      } else {
        res.status(200).json(users);
      }
    });
  })
  .post(function(req, res){
    var user = new User();
    user.email = req.body.email;
    user.password = req.body.password;

    user.save(function(err){
      if (err) {
        res.status(500).json({ error: true, message: 'Unable to save user at this time' });
      } else {
        res.status(200).json({ error: false, message: 'User added successfully'});      }
    });
  })
.patch(function(req, res){

})
;
router.route('/users/:user')
  .get(function(req, res){
    User.findOne().populate({ path: 'events', match: {_id: req.params.user}}).exec(function(err, user) {
      if (err) {
        res.status(500).json({error: true, message: err});
      } else {
        res.status(200).json(user);
      }
    });
  })
;
router.route('/users/:user_id/events')
  .get(function(req, res){
    Events.find({user: ObjectId(req.params.user_id)}).populate('users').exec(function(err, events){
      if (err){
        res.status(500).json({error: true, message: err});
      } else {
        res.status(200).json(events)
      }
    })
  })
  .post(function(req, res){
    var event = new Events();
    event.dateTime = req.body.dateTime;
    event.location = req.body.location;
    event.name = req.body.name;
    event.invitees = req.body.invitees;
    event.comments = rewq.body.comments;

    event.save(function(err){
      if(err){
        res.status(500).json({ error: true, message: 'Unable to create event. Please try again.'});
      } else {
        res.status(200).json({ error: false, message: 'Event created successfully.' });
      }
    });
  })


module.exports = router;
