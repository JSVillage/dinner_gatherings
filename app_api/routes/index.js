var express = require('express');
var router = express.Router();
var Users  = require('../models/users');
var Events = require('../models/events');
var mongoose = require('mongoose');
var async  = require('async');

/* GET users listing. */
router.route('/')
 .get(function(req, res) {
  res.status(200).json({message: "api is connected"  });
  })
;

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
    User.findById(req.body.user).populate({ path: 'events', match: {_id: req.params.user}}).exec(function(err, user) {
      if (err) {
        res.status(500).json({error: true, message: err});
      } else {
        res.status(200).json(user);
      }
    });
  })
;
router.route('/users/:user/events')
  .get(function(req, res){

  })



module.exports = router;
